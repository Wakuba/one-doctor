import clsx from 'clsx'
import Link from 'next/link'
import Footer from '../components/organisms/Footer'
import Header from '../components/organisms/Header'

const Advertisement: React.VFC = () => {
  return (
    <>
      <Header />
      <main className=''>
        <section
          className={clsx(
            'bg-prime-blue-rich rounded-br-[15vw] relative flex flex-col items-center pt-20',
            'after:h-[15vw] after:w-[15vw] after:absolute after:bg-prime-blue-muted after:right-0 after:bottom-0 after:-z-10'
          )}
        >
          <div className='w-11/12 sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px]'>
            <h1 className='sm:text-2xl ov-md:text-4xl text-white'>
              キャッチコピー
            </h1>
            <h3 className='sm:text-xl ov-md:text-2xl text-white'>
              キャッチコピーをもう少し噛み砕いた文章を持ってくる。例：〜〜で悩んでいる医学生から〜〜な研修医まで使えます。
            </h3>
            <SignUpPort />
          </div>
        </section>
        <section
          className={clsx(
            'h-[400px] bg-prime-blue-muted rounded-tl-[15vw] rounded-br-[15vw] relative flex flex-col items-center',
            'after:h-[15vw] after:w-[15vw] after:absolute after:bg-prime-blue-rich after:right-0 after:bottom-0 after:-z-10',
            'before:h-[15vw] before:w-[15vw] before:absolute before:bg-prime-blue-rich before:left-0 before:top-0 before:-z-10'
          )}
        >
          <div className='w-11/12 sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px]'>
            <h2 className='text-prime-blue-rich sm:text-2xl ov-md:text-4xl font-semibold mt-10'>
              CONTENTS
            </h2>
          </div>
        </section>
        <section
          className={clsx(
            'h-[400px] bg-prime-blue-rich rounded-tl-[15vw] rounded-br-[15vw] relative flex flex-col items-center',
            'after:h-[15vw] after:w-[15vw] after:absolute after:bg-prime-blue-muted after:right-0 after:bottom-0 after:-z-10',
            'before:h-[15vw] before:w-[15vw] before:absolute before:bg-prime-blue-muted before:left-0 before:top-0 before:-z-10'
          )}
        >
          <div className='w-11/12 sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px] '>
            <h2 className='text-white sm:text-2xl ov-md:text-4xl font-semibold mt-10'>
              ADVERTISEMENT
            </h2>
          </div>
        </section>
        <section
          className={clsx(
            'h-[400px] bg-prime-blue-muted rounded-tl-[15vw] rounded-br-[15vw] relative flex flex-col items-center',
            'before:h-[15vw] before:w-[15vw] before:absolute before:bg-prime-blue-rich before:left-0 before:top-0 before:-z-10'
          )}
        >
          <div className='w-11/12 sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px]'>
            <h2 className='text-prime-blue-rich sm:text-2xl ov-md:text-4xl font-semibold mt-10'>
              OUR VOICE
            </h2>
            <SignUpPort />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Advertisement

const SignUpPort: React.VFC = () => (
  <div className='mb-12 w-full flex flex-row justify-evenly'>
    <Link href='/SignUpDashboard'>
      <a className='bg-white text-black shadow-all-dir w-52 h-16 rounded text-2xl font-medium flex justify-center items-center'>
        新規登録
      </a>
    </Link>
    <Link href='/LogIn'>
      <a className='bg-gray-400 text-white shadow-all-dir w-52 h-16 rounded text-2xl font-medium flex items-center justify-center'>
        ログイン
      </a>
    </Link>
  </div>
)
