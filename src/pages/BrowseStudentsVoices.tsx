import clsx from 'clsx'
import SearchVoicesForm from '../components/forms/SearchVoicesForm'
import Footer from '../components/UIAtoms/Footer'
import Header from '../components/UIAtoms/Header'

const BrowseStudentsVoices = () => {
  return (
    <>
      <Header />
      <div
        title='wrapper'
        className={clsx(
          'w-full flex flex-col items-center justify-center ov-md:pt-20 bg-prime-blue-muted'
        )}
      >
        <div
          className={clsx(
            'text-white sm:text-2xl ov-md:text-3xl font-semibold mt-5 bg-prime-blue-rich w-full h-20 flex flex-col justify-center items-center'
          )}
        >
          <h1 className='w-11/12 sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px]'>
            医学生の声を見る
          </h1>
        </div>
        <main className='w-11/12 sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px]'>
          <SearchVoicesForm />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default BrowseStudentsVoices
