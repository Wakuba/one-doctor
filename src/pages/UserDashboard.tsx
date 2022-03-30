// import { useAuth } from '../lib/context'
import Footer from '../components/UIAtoms/Footer'
import Header from '../components/UIAtoms/Header'
// import { useRequiredPermission } from '../lib/customHooks/useAuth'
import DashboardElmBoard from '../components/userDashboard/DashboardElmBoard'
// import { useRequiredPermission } from '../lib/customHooks/useAuthProvider'

const UserDashboard: React.VFC = () => {
  // const { auth, accountExist } = useRequiredPermission()
  // console.log('auth at UserDashboard', auth)
  // if (accountExist) {
  return (
    <>
      <Header />
      <div className='flex flex-col items-center ov-md:pt-20 bg-prime-blue-muted'>
        <main className='w-11/12 sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px] bg-prime-blue-muted '>
          <h1 className='text-prime-blue-rich sm:text-2xl ov-md:text-4xl font-semibold mb-6'>マイページ</h1>
          <div className='mb-6'>
            <p className='text-prime-blue-rich sm:text-2xl ov-md:text-3xl mb-4'>おしらせ</p>
            <div className='h-[100px] w-full bg-white shadow-lg'></div>
          </div>
          <DashboardElmBoard />
        </main>
      </div>
      <Footer />
    </>
  )
}
export default UserDashboard
