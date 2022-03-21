import NotStudentSignUpForm from '../components/forms/NotStudentSignUpForm'

import Header from '../components/UIAtoms/Header'
import Footer from '../components/UIAtoms/Footer'
const NotStudentSignUp: React.VFC = () => {
  return (
    <>
      <Header />
      <div
        title='wrapper'
        className='w-full ov-md:pt-20 flex flex-col justify-center items-center bg-prime-blue-muted'
      >
        <NotStudentSignUpForm style='sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px]' />
      </div>
      <Footer />
    </>
  )
}
export default NotStudentSignUp
