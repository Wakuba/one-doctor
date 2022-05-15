import Footer from '../components/UIAtoms/Footer'
import Header from '../components/UIAtoms/Header'
import PlaneButton from '../components/UIAtoms/PlaneButton'

const AccountRegistrationFinished = () => {
  return (
    <>
      <Header />
      <div className='flex flex-col items-center ov-md:pt-20 bg-prime-blue-muted'>
        <main className='w-11/12 sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px] bg-prime-blue-mute min-h-[400px]'>
          <h1 className='text-prime-blue-rich font-semibold text-2xl mt-10 mb-6'>
            会員登録はまだ完了していません。
          </h1>
          <p className='text-lg font-medium'>
            ご登録いただきありがとうございます。
          </p>
          <p className='text-lg font-medium'>
            ご入力いただいたメールアドレスに認証メールを送信させていただいていますので、
          </p>
          <p className='text-lg font-medium'>
            そちらのリンクをクリックし認証を完了してください。
          </p>
          <div className='w-full flex flex-col items-center mt-10'>
            <PlaneButton targetBlank={false} href='/'>
              ホームへ戻る
            </PlaneButton>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default AccountRegistrationFinished
