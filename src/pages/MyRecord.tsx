import MyNoteForm from '../components/forms/MyNoteForm'
import MyPastRecords from '../components/myRecord/MyPastRecords'
import TabMenu from '../components/tabs/TabMenu'
import Footer from '../components/UIAtoms/Footer'
import Header from '../components/UIAtoms/Header'

const MyRecord = () => {
  return (
    <>
      <Header />
      <div className='flex flex-col items-center ov-md:pt-20 bg-prime-blue-muted'>
        <main className='w-11/12 sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px] bg-prime-blue-muted'>
          <h1 className='text-2xl text-prime-blue-rich font-semibold mb-6'>
            自分の記録帳
          </h1>
          <TabMenu
            style={{
              tabButtonStyle: 'ov-md:h-10 sm:h-8 ',
            }}
          >
            <MyNoteForm title='新しく記録する' style='p-8' />
            <MyPastRecords title='過去の記録を見る' />
          </TabMenu>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default MyRecord
