// import { useAuth } from '../lib/context'
import Footer from '../components/UIAtoms/Footer'
import Header from '../components/UIAtoms/Header'
// import { useRequiredAuth } from '../lib/customHooks/useAuth'
import DashboardElmBoard from '../components/userDashboard/DashboardElmBoard'

const UserDashboard: React.FC = () => {
  // const auth = useRequiredAuth()
  // if (!auth.odUser) return <div>Hello World</div>
  return (
    <>
      <Header />
      <div className='flex flex-col items-center ov-md:pt-20 bg-prime-blue-muted'>
        <main className='w-11/12 sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px] bg-red-400'>
          <h1 className='text-prime-blue-rich'>マイページ</h1>
          <DashboardElmBoard />
        </main>
      </div>
      <Footer />
    </>
  )
}
export default UserDashboard
