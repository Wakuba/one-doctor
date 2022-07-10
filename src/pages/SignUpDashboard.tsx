import Header from '../components/UIAtoms/Header'
import Footer from '../components/UIAtoms/Footer'
import Link from 'next/link'

const SignUpDashboard = () => {
  return (
    <>
      <main className=''>
        <Header />
        <div
          title='wrapper'
          className='w-full flex flex-col justify-center items-center bg-prime-blue-muted'
        >
          {/* <SignUpDashboardForm style='ov-md:pt-20 sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px]' /> */}
          <div className='ov-md:pt-20 sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px]'>
            <div className='mt-10 mb-12'>
              <h1 className='text-prime-blue-rich inline text-2xl font-semibold'>
                新規登録
              </h1>
              <div className='ov-md:inline sm:block'>
                <span className='ov-md:ml-[20px] text-sm'>
                  すでにアカウントを持っている場合は
                </span>
                <Link href='/LogIn'>
                  <a className='text-sm inline text-[#00B8FF] underline'>
                    こちら
                  </a>
                </Link>
              </div>
            </div>
            <div className='text-sm mb-6'>当てはまるものを選択してください</div>
            <div className='ov-md:pl-12 pb-6'>
              <Link href='/StudentSignUp'>
                <a className='block border-1 border-solid rounded bg-white h-[40px] leading-[40px] text-sm pl-6 mb-6 ov-md:w-1/2'>
                  医学生
                </a>
              </Link>
              <Link href='/NotStudentSignUp'>
                <a className='block border-1 border-solid rounded bg-white h-[40px] leading-[40px] text-sm pl-6 mb-6 ov-md:w-1/2'>
                  研修医
                </a>
              </Link>
              <Link href='/NotStudentSignUp'>
                <a className='block border-1 border-solid rounded bg-white min-h-[40px] leading-[40px] text-sm pl-6 mb-6 ov-md:w-1/2'>
                  その他（医局所属なし, 大学院生）
                </a>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}

export default SignUpDashboard
