// import { useAuth } from '../lib/context'
import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import NewsLine from '../components/home/NewsLine'
import Footer from '../components/UIAtoms/Footer'
import Header from '../components/UIAtoms/Header'
// import { useRequiredPermission } from '../lib/customHooks/useAuth'
import DashboardElmBoard from '../components/userDashboard/DashboardElmBoard'
import { auth, db } from '../lib/firebase/firebase.config'
// import { useRequiredPermission } from '../lib/customHooks/useAuthProvider'

interface UserDashboardPropsType {
  newsBoardData: {
    id: string
    title: string
    detail: string
  }[]
}

const UserDashboard: React.VFC<UserDashboardPropsType> = (props) => {
  // const { auth, accountExist } = useRequiredPermission()
  // console.log('auth at UserDashboard', auth)
  // if (accountExist) {
  const router = useRouter()
  useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, (user) => {
      if (!user) router.push('/')
    })
    return () => unsbscribe()
  }, [auth])
  return (
    <>
      <Header />
      <div className='flex flex-col items-center ov-md:pt-20 bg-prime-blue-muted'>
        <main className='w-11/12 sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px] bg-prime-blue-muted '>
          <h1 className='text-prime-blue-rich sm:text-2xl ov-md:text-3xl font-semibold mb-6'>
            マイページ
          </h1>
          <div className='mb-6'>
            <p className='text-prime-blue-rich sm:text-2xl ov-md:text-3xl mb-4'>
              おしらせ
            </p>
            <div className='bg-white shadow-lg w-full p-4 flex flex-col space-y-2'>
              {props.newsBoardData.map((data, key) => {
                return (
                  <NewsLine key={key} title={data.title}>
                    {data.detail}
                  </NewsLine>
                )
              })}
            </div>
          </div>
          <DashboardElmBoard />
        </main>
      </div>
      <Footer />
    </>
  )
}
export default UserDashboard

export const getStaticProps = async () => {
  try {
    const q = query(
      collection(db, 'fl_content'),
      where('_fl_meta_.schema', '==', 'topPageNewsBoard')
    )
    const snapshotDash = await getDocs(q)
    const newsBoardData: { id: string; title: string; detail: string }[] =
      snapshotDash.docs.map((doc) => {
        return {
          id: doc.data().id,
          title: doc.data().newsTitle,
          detail: doc.data().newsDetail,
        }
      })
    return { props: { newsBoardData } }
  } catch (error) {
    return { props: { newsBoardData: [] } }
  }
}
