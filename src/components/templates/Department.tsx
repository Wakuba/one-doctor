import PlaneButton from '../../components/atoms/PlaneButton'
import Header from '../../components/organisms/Header'
import Footer from '../../components/organisms/Footer'
import TabMenu from '../../components/organisms/TabMenu'
import Tag from '../../components/atoms/Tag'
import AppealCardBoard from '../../components/organisms/AppealCardBoard'
import MovieCarousel from '../../components/organisms/MovieCarousel'
import ContactButtonModal from '../../components/molecules/ContactButtonModal'
import DepTopSection from '../../components/organisms/DepTopSeciton '
import EventTab from '../../components/organisms/EventTab'
import CrewBoardTab from '../../components/organisms/CrewBoardTab'
import SnsTab from '../../components/organisms/SnsTab'
import GeographicalInformationTab from '../../components/organisms/GeographicalInfomationTab'
import { FC } from 'react'
import { DepartmentTemplatePropsType } from '../../lib/types'

const DepartmentTemplate: FC<DepartmentTemplatePropsType> = ({
  hospitalName,
  departmentName,
  universityName,
  heroImg,
  topSection,
  tabMenu,
  officialWebSite,
}) => (
  <>
    <Header />
    <main className='ed-back-linear bg-contain bg-no-repeat w-full flex flex-col items-center'>
      <div className='sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px]'>
        <section className='w-full flex flex-col items-start mb-14 pt-10'>
          <div className='sm:w-11/12 ov-md:w-8/12 flex flex-col ov-md:pt-20'>
            <h1 className='text-white text-xl font-semibold mb-1'>
              {hospitalName.hospitalNameInJapanese}
              {'　'}
              {departmentName.departmentNameInJapanese}
            </h1>
            <p className='text-white text-xs mb-1'>
              {hospitalName.hospitalNameInEnglish}-
              {departmentName.departmentNameInEnglish}
            </p>
            <div className='flex flex-row'>
              <Tag layoutStyle='mr-2'>
                {universityName.universityNameInJapanese}
              </Tag>
              <Tag layoutStyle='mr-2'>
                {departmentName.departmentNameInJapanese}
              </Tag>
            </div>
          </div>
        </section>

        <section className='mb-16 relative w-full flex flex-col items-center'>
          <DepTopSection
            depName={departmentName.departmentNameInJapanese}
            heroImg={heroImg}
            educationalPoint={topSection.educationalPoint}
            clinicalPoint={topSection.clinicalPoint}
            researchPoint={topSection.researchPoint}
            otherPoint={topSection.otherPoint}
          />
        </section>

        <section className='w-full flex flex-col items-center mb-16'>
          <AppealCardBoard />
        </section>

        <section className='flex flex-col items-center mb-16 '>
          <div className='w-full bg-prime-blue-rich flex flex-col items-center py-6'>
            <p className='text-white sm:text-xs ov-md:text-md sm:my-2 ov-md:my-4 breakAll'>
              紹介動画を視聴して雰囲気をみてみませんか？
            </p>
            <MovieCarousel />
          </div>
        </section>

        <section className='w-full flex flex-col items-center mb-16'>
          <TabMenu>
            <div className='w-full ov-md:p-8 sm:p-4 bg-white flex flex-col items-start'>
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
            <CrewBoardTab crewDataList={tabMenu.crewCardListTab} />
            <GeographicalInformationTab />
            <EventTab />
            <SnsTab
              officialWebSite={officialWebSite}
              twitterTimelineUrl={tabMenu.snsTab}
            />
          </TabMenu>
        </section>

        <section className='w-full flex flex-col items-center pb-20'>
          <div className='w-11/12 flex flex-col items-center sm:space-y-8 ov-md:space-y-20'>
            <div className='flex flex-col items-center space-y-4'>
              <div className='text-sm'>
                イベントや見学を通じて診療科について理解を深めましょう
              </div>
              <div className='flex sm:flex-col sm:items-center sm:space-y-4 ov-md:flex-row ov-md:space-x-4'>
                <PlaneButton id='visit'>見学申し込みをする→</PlaneButton>
                <PlaneButton
                  id='propose'
                  href='https://docs.google.com/forms/d/1a5N5t44UJw2jDOHKGyx3v0sOqp9aRWYOh5YSb1cyKCI/edit'
                >
                  イベントの提案をする→
                </PlaneButton>
              </div>
            </div>
            <div className='flex flex-col items-center space-y-4'>
              <div className='text-sm'>
                詳しい情報については診療科のホームページをご覧ください
              </div>
              <PlaneButton href={officialWebSite}>
                診療科公式ページ→
              </PlaneButton>
            </div>
          </div>
        </section>
        <ContactButtonModal />
      </div>
    </main>
    <Footer />
  </>
)

export default DepartmentTemplate
