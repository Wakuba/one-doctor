//Components
import Header from '../../components/organisms/Header'
import Footer from '../../components/organisms/Footer'
import TabMenu from "../../components/organisms/TabMenu"
import Tag from '../../components/atoms/Tag'
import AppealCardBoard from '../../components/organisms/AppealCardBoard'
import MovieCarousel from '../../components/organisms/MovieCarousel'
import ContactButtonModal from '../../components/molecules/ContactButtonModal'
import DepTopSection from '../../components/organisms/DepTopSeciton '
import EventTab from '../../components/organisms/EventTab'
import CrewBoard from '../../components/organisms/CrewBoard'
import TwitterTimeline from '../../components/molecules/TwitterTimeline'

//Types
import { ReactNode, memo } from 'react'

const Button = (props: { children: ReactNode, href?: string }) => (
  <a rel="noopener" target='_blank' href={props.href} className='rounded shadow-md w-48  h-10 bg-prime-blue-rich flex justify-center items-center'>
    <span className='text-white text-sm font-medium '>
      {props.children}
    </span>
  </a>
)

const TwitterTimelineMemo = memo(({ href }: { href: string }) => <TwitterTimeline href={href} />)

interface DepartmentPagePropsType {
  postData: any;
}

export default function DepartPageTemplate({ postData }: DepartmentPagePropsType) {
  const { departmentName, universityName, hospitalName, tabMenu, topSection, officialWebSite } = postData

  return (
    <>
      <Header />
      <main className='ed-back-linear bg-contain bg-no-repeat'>
        <section className='w-full flex flex-col items-center mb-14 pt-10'>
          <div className='sm:w-11/12 ov-md:w-8/12 flex flex-col ov-md:pt-20'>
            <h1 className='text-white text-xl font-semibold mb-1' >{departmentName.departmentNameInJapanese}</h1>
            <p className='text-white text-xs mb-1'>{hospitalName.hospitalNameInEnglish}-{departmentName.departmentNameInEnglish}</p>
            <div className='flex flex-row'>
              <Tag layoutStyle='mr-2'>{universityName.universityNameInJapanese}</Tag>
              <Tag layoutStyle='mr-2'>{departmentName.departmentNameInJapanese}</Tag>
            </div>
          </div>
        </section>

        <section className='mb-16 relative w-full flex flex-col items-center'>
          <DepTopSection
            depName={departmentName.departmentNameInJapanese}
            educationalPoint={topSection.educationalPoint}
            clinicalPoint={topSection.clinicalPoint}
            researchPoint={topSection.researchPoint}
            otherPoint={topSection.otherPoint}
          />
        </section>


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
          <TabMenu>
            <div key={1}></div>
            <CrewBoard key={2} crewDataList={tabMenu.crewCardListTab} />
            <div key={3}></div>
            <EventTab key={4} />
            <div className='w-full ov-md:p-8 sm:p-4 bg-white'>
              <div className='space-y-8'>
                <div className='border-l-8 inline-block bg-prime-blue-muted px-2 border-prime-blue-rich sm:text-sm ov-md:text-md font-medium'>公式サイト</div>
                <Button href={officialWebSite}>診療科公式ページ→</Button>
                <div className='border-l-8 inline-block bg-prime-blue-muted px-2 border-prime-blue-rich sm:text-sm ov-md:text-md font-medium'>関連SNS</div>
                <TwitterTimelineMemo href={tabMenu.snsTab.twitterTimelineUrl} />
              </div>
            </div>
          </TabMenu>
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
              <Button href={officialWebSite}>診療科公式ページ→</Button>
            </div>
          </div>
        </section>
        <ContactButtonModal />

      </main>
      <Footer />
    </>
  )
}

