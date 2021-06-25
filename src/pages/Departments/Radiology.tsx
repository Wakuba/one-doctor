import Header from '../../components/organisms/Header'
import Footer from '../../components/organisms/Footer'
import TabMenu from "../../components/organisms/TabMenu"
import Tag from '../../components/atoms/Tag'
import AppealCardBoard from '../../components/organisms/AppealCardBoard'
import { ReactNode } from 'react'
import MovieCarousel from '../../components/organisms/MovieCarousel'
import { SpreadSheetDataType } from '../../lib/types'
import ContactButtonModal from '../../components/molecules/ContactButtonModal'
import EachDepTopSection from '../../components/organisms/EachDepTopSeciton '

export const getStaticProps = async () => {
  const res = await fetch(
    'https://script.google.com/macros/s/AKfycbzmrnZq2-7JaQLpE_AFenimwJIL2y1rIGNm6F4NgecKbLNUMWBI6IPmlOYV4VsJ71issw/exec',
    { method: "GET" }
  )
  const spreadsheetData = await res.json();
  return { props: { spreadsheetData } }
}


const Button = (props: { children: ReactNode, href?: string }) => (
  <a href={props.href} className='rounded shadow-md w-48  h-10 bg-prime-blue-rich flex justify-center items-center'>
    <span className='text-white text-sm font-medium '>
      {props.children}
    </span>
  </a>
)

export default function EachDepartPage({ spreadsheetData }: { spreadsheetData: SpreadSheetDataType[] }) {


  return (
    <>
      <Header />
      <main className='ed-back-linear bg-contain bg-no-repeat'>
        <section className='w-full flex flex-col items-center mb-14 pt-10'>
          <div className='sm:w-11/12 ov-md:w-8/12 flex flex-col ov-md:pt-20'>
            <h1 className='text-white text-xl font-semibold mb-1' >筑波大学附属病院　放射線科</h1>
            <p className='text-white text-xs mb-1'>University of Tsukuba Hospital -cardiovascular medicine</p>
            <div className='flex flex-row'>
              <Tag layoutStyle='mr-2'>筑波大学附属病院</Tag>
              <Tag layoutStyle='mr-2'>放射線科</Tag>
            </div>
          </div>
        </section>

        <EachDepTopSection layoutStyle='mb-16' />


        <section className='w-full flex flex-col items-center mb-16'>
          <AppealCardBoard />
        </section>


        <section className='flex flex-col items-center mb-16'>
          <div className='ov-md:w-8/12 sm:w-11/12 bg-prime-blue-rich flex flex-col items-center py-6'>
            <p className='text-white sm:text-xs ov-md:text-md sm:my-2 ov-md:my-4 breakAll'>紹介動画を視聴して雰囲気をみてみませんか？</p>
            <MovieCarousel />
          </div>
        </section>

        <section className='w-full flex flex-col items-center mb-16'>
          <TabMenu data={spreadsheetData} />
        </section>

        <section className='w-full flex flex-col items-center pb-20'>
          <div className='w-11/12 flex flex-col items-center sm:space-y-8 ov-md:space-y-20'>
            <div className='flex flex-col items-center space-y-4'>
              <div className='text-sm' >イベントや見学を通じて診療科について理解を深めましょう</div>
              <div className='flex sm:flex-col sm:items-center sm:space-y-4 ov-md:flex-row ov-md:space-x-4'>
                <Button >見学申し込みをする→</Button>
                <Button>イベントの提案をする→</Button>
              </div>
            </div>
            <div className='flex flex-col items-center space-y-4'>
              <div className='text-sm'>詳しい情報については診療科のホームページをご覧ください</div>
              <Button href="http://tsukuba-radiology.info/">診療科公式ページ→</Button>
            </div>
          </div>
        </section>
        <ContactButtonModal />

      </main>
      <Footer />
    </>
  )
}

