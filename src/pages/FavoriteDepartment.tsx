import { VFC } from 'react'
import FavoTabMenu from '../components/favoriteDepartment/FavoDepTabMenu'
import Footer from '../components/UIAtoms/Footer'
import Header from '../components/UIAtoms/Header'
import useRequiredPermission from '../lib/customHooks/useRequiredPermission'

const FavoriteDepartment: VFC = () => {
  const { isPermitted, Loading } = useRequiredPermission()

  return isPermitted ? (
    <>
      <Header />
      <div className='flex flex-col items-center ov-md:pt-20 bg-prime-blue-muted'>
        <main className='w-11/12 sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px] bg-prime-blue-muted '>
          <h1 className='text-prime-blue-rich sm:text-2xl ov-md:text-3xl font-semibold mb-6'>
            お気に入り診療科
          </h1>
          <FavoTabMenu />
        </main>
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  )
}

export default FavoriteDepartment

// export const getStaticProps: GetStaticProps<FavoriteDepartmentPropsType> =
//   async () => {

//     const uid = auth.odUser?.uid
//     let favoDepList = ['なし']
//     try {
//       if (uid) {
//         const ref = doc(db, 'odUsers', uid)
//         const snap = await getDoc(ref)
//         favoDepList = snap.data()?.favoDeparts ?? ['なし']
//         return { props: { favoDepList } }
//       }
//     } catch (e) {
//       console.log(e)
//       return { props: { favoDepList } }
//     }
//   }
