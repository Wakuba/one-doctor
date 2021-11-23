import SignUpForm from '../components/organisms/SignUpForm'

import Header from '../components/organisms/Header'
const SignUpPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className='w-full min-h-screen flex flex-col justify-center items-center bg-prime-blue-muted'>
        <SignUpForm style='sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px]' />
      </div>
    </>
  )
}
export default SignUpPage
