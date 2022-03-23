import Footer from '../components/UIAtoms/Footer'
import Header from '../components/UIAtoms/Header'
import TabMenu from '../components/tabs/TabMenu'

const FavoriteEvent = () => {
  return (
    <>
      <Header />
      <div>
        <h1 className='inline-block'>お気に入り診療科</h1>
        <p className='inline'>{'マイページ > お気に入り診療科'}</p>
      </div>
      <div className='w-full mt-[100px] '>
        <TabMenu>
          <div
            title='診療科の追加と削除'
            className='h-[400px] bg-red-600 w-full flex flex-col items-stert'
          >
            <div>
              <div>あｓｄｆ；ヵｓｊ</div>
              <div>あｓｄｆ；ヵｓｊ</div>
              <div>あｓｄｆ；ヵｓｊ</div>
              <div>あｓｄｆ；ヵｓｊ</div>
              <div>あｓｄｆ；ヵｓｊ</div>
              <div>あｓｄｆ；ヵｓｊ</div>
            </div>
          </div>
          <div
            title='診療科からのお知らせ'
            className='w-full ov-md:p-8 sm:p-4 bg-white flex flex-col items-start'
          >
            <div className='space-y-8'>
              <div className='border-l-8 block bg-prime-blue-muted px-2 border-prime-blue-rich sm:text-sm ov-md:text-md font-medium'>
                研修カリキュラム
              </div>
              {/* <Image/> */}
              <div className='border-l-8 block bg-prime-blue-muted px-2 border-prime-blue-rich sm:text-sm ov-md:text-md font-medium'>
                主な進路
              </div>
              <div className='border-l-8 block bg-prime-blue-muted px-2 border-prime-blue-rich sm:text-sm ov-md:text-md font-medium'>
                取得可能な資格
              </div>
            </div>
          </div>
        </TabMenu>
      </div>
      <Footer />
    </>
  )
}

export default FavoriteEvent
