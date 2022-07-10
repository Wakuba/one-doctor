import Footer from '../components/UIAtoms/Footer'
import Header from '../components/UIAtoms/Header'
import NameUpdateForm from '../components/forms/updateForms/NameUpdateForm'
import RubyUpdateForm from '../components/forms/updateForms/RubyUpdateForm'
import GenderUpdateForm from '../components/forms/updateForms/GenderUpdateForm'
import EmailUpdateForm from '../components/forms/updateForms/EmailUpdateForm'
import WorkplaceWishForUpdateForm from '../components/forms/updateForms/WorkplaceWishForUpdataForm'
import DepartmentWishForUpdateForm from '../components/forms/updateForms/DepartmentWishForUpdateForm'
import GradeUpdateForm from '../components/forms/updateForms/GradeUpdateForm'
import UniversityUpdateForm from '../components/forms/updateForms/UniversityUpdateForm'
import WorkplaceUpdateForm from '../components/forms/updateForms/WorkplaceUpdateForm'
import useRequiredPermission from '../lib/customHooks/useRequiredPermission'

const UserProfile: React.VFC = () => {
  const { PermissionAlerts } = useRequiredPermission()

  return (
    <>
      <PermissionAlerts />
      <Header />
      <div className='flex flex-col items-center ov-md:pt-20 bg-prime-blue-muted'>
        <main className='w-11/12 sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px] '>
          <h1 className='text-2xl text-prime-blue-rich font-semibold mb-6'>
            ユーザー情報
          </h1>
          <NameUpdateForm />
          <RubyUpdateForm />
          <GenderUpdateForm />
          <EmailUpdateForm />
          <WorkplaceWishForUpdateForm />
          <DepartmentWishForUpdateForm />
          <GradeUpdateForm />
          <UniversityUpdateForm />
          <WorkplaceUpdateForm />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default UserProfile
