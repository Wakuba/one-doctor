import Footer from '../components/UIAtoms/Footer'
import Header from '../components/UIAtoms/Header'
import { useRequiredPermission } from '../lib/customHooks/useRequiredPermission'
import NameUpdateForm from '../components/forms/updateForms/NameUpdateForm'
import RubyUpdateForm from '../components/forms/updateForms/RubyUpdateForm'
import GenderUpdateForm from '../components/forms/updateForms/GenderUpdateForm'
import EmailUpdateForm from '../components/forms/updateForms/EmailUpdateForm'
import WorkplaceWishForUpdateForm from '../components/forms/updateForms/WorkplaceWishForUpdataForm'
import DepartmentWishForUpdateForm from '../components/forms/updateForms/DepartmentWishForUpdateForm'
import GradeUpdateForm from '../components/forms/updateForms/GradeUpdateForm'
import UniversityUpdateForm from '../components/forms/updateForms/UniversityUpdateForm'
import WorkplaceUpdateForm from '../components/forms/updateForms/WorkplaceUpdateForm'
import { useEffect } from 'react'

const UserProfile: React.VFC = () => {
  const {
    auth,
    NotEmailVerifiedAlert,
    AccountNotExistAlert,
    NotAuthorizedAlert,
    permissionChecker,
  } = useRequiredPermission()
  useEffect(() => {
    permissionChecker()
  }, [auth])
  const userData = auth.odUserData
  // console.log('userdata', userData)
  return (
    <>
      <Header />
      <div className='flex flex-col items-center ov-md:pt-20 bg-prime-blue-muted'>
        <main className='w-11/12 sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px] '>
          <h1 className='text-2xl text-prime-blue-rich font-semibold mb-6'>
            ユーザー情報
          </h1>
          <AccountNotExistAlert backToTop />
          <NotAuthorizedAlert />
          <NotEmailVerifiedAlert />
          {'grade' in userData ? (
            <>
              <NameUpdateForm data={userData.name} />
              <RubyUpdateForm data={userData.ruby} />
              <GenderUpdateForm data={userData.gender} />
              <EmailUpdateForm data={userData.email} />
              <WorkplaceWishForUpdateForm data={userData.workplaceWishFor} />
              <DepartmentWishForUpdateForm data={userData.departmentWishFor} />
              <GradeUpdateForm data={userData.grade} />
              <UniversityUpdateForm data={userData.university} />
            </>
          ) : (
            <>
              <NameUpdateForm data={userData.name} />
              <RubyUpdateForm data={userData.ruby} />
              <GenderUpdateForm data={userData.gender} />
              <EmailUpdateForm data={userData.email} />
              <WorkplaceUpdateForm data={userData.workplace} />
              <WorkplaceWishForUpdateForm data={userData.workplaceWishFor} />
              <DepartmentWishForUpdateForm data={userData.departmentWishFor} />
            </>
          )}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default UserProfile
