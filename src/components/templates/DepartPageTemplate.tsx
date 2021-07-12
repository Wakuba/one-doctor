/*
[
  {
    'university': {
    'ja': '筑波大学',
    'en': 'University of Tsukuba',
    },
    'hospital': {
      'ja':'筑波大学附属病院',
      'en': 'University of Tsukuba Hospital'
    },
    'department': {
      ja: '放射線科',
      en: 'Radioloby'
    },
    'officialWebSiteURL': 'http://tsukuba-radiology.info/',
    'topSection': {
      'educationalPoint': '科内カンファレンスや研究会などがあり、勉強している先生が多く、画像診断のレベルが高い。IVR（小外）ができると、どの病院にいっても頼りにされる。',
      'clinicalPoint': '楽天メディカルが進めている光免疫療法の基礎的研究を進めており、今後は臨床的な観点からIVRの手技に応用したいと考えている。AIのプロジェクトが動き始めたところ。企業ともタイアップして研究を進めるので、コンピュータに興味のある人にはお薦め。',
      'researchPoint': 'レジデントによく教えてくれる（教えたがり）。毎日夕方に何らかのカンファレンスがあるので、画像以外の情報も含めて勉強ができる。他の診療科との合同カンファレンスではレジデントが画像のプレゼンをするので、その準備を教官が教えてくれる。そのため、プレゼンのレベルは全国一だと思う。',
      'otherPoint':'放射線診断医は、働き方の形態（場所・時間）が選べるので、出産や育児のある女性は働きやすい。男性でも自分の時間の有意義に使っている先生がいる。'
    },
    'MovieCarousel': {

    },
    'TabMenu': {
      'basicInfoTab': {},
      'crewsTab': {
        'crewCards': [
          { 'id': 0,
            'role': '',
          },
        ]
      },
      'mapTab': {
        'googlemapSrc': '',
      },
      'eventTab': {},
      'snsTab': {
        'twitterTimeLine': '',
      }
    }
  }
]
*/

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
import { SpreadSheetDataType } from '../../lib/types'




export const getStaticProps = async () => {
  // let pageWholeData: any = [];
  let spreadsheetData: any = [];
  // try {
  //   const snapshot = await db.collection("fl_content").get();
  //   snapshot.docs.forEach((doc) => {
  //     if (doc.data()._fl_meta_.schema === 'departmentPage') {
  //       pageWholeData.push({
  //         id: doc.data().id,
  //         title: doc.data().newsTitle,
  //         detail: doc.data().newsDetail,
  //       })
  //     }
  //   })
  // } catch (error) {
  //   console.log('Error getting department page documents from FlameLink; ', error);
  // }

  try {
    const res = await fetch(
      'https://script.google.com/macros/s/AKfycbzmrnZq2-7JaQLpE_AFenimwJIL2y1rIGNm6F4NgecKbLNUMWBI6IPmlOYV4VsJ71issw/exec',
      { method: "GET" }
    )
    spreadsheetData = await res.json();
  } catch (error) {
    console.log('Error getting spreadsheet data from google spreadsheet')
  }

  return {
    props: {
      spreadsheetData,
    }
  }
}


const Button = (props: { children: ReactNode, href?: string }) => (
  <a rel="noopener" target='_blank' href={props.href} className='rounded shadow-md w-48  h-10 bg-prime-blue-rich flex justify-center items-center'>
    <span className='text-white text-sm font-medium '>
      {props.children}
    </span>
  </a>
)

const TwitterTimelineMemo = memo(({ href }: { href: string }) => <TwitterTimeline href={href} />)

interface DepartmentPagePropsType {
  spreadsheetData?: SpreadSheetDataType[];
  postData: any;
}

export default function DepartmentPageTemplate({ spreadsheetData, postData }: DepartmentPagePropsType) {
  const { departmentName, universityName, hospitalName, tabMenu, topSection, officialWebSite } = postData
  console.log(tabMenu.crewCardListTab)
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
            <EventTab key={4} events={spreadsheetData} />
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

