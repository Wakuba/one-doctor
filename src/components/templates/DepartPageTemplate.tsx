// External components
import { useEffect, useState } from 'react'

// Custom components
import PlaneButton from '../atoms/PlaneButton'
import Header from '../../components/organisms/Header'
import Footer from '../../components/organisms/Footer'
import TabMenu from '../../components/organisms/TabMenu'
import Tag from '../../components/atoms/Tag'
import AppealCardBoard from '../../components/organisms/AppealCardBoard'
import MovieCarousel from '../../components/organisms/MovieCarousel'
import ContactButtonModal from '../../components/molecules/ContactButtonModal'
import DepTopSection from '../../components/organisms/DepTopSeciton '
import EventTab from '../../components/organisms/EventTab'
import CrewBoard from '../../components/organisms/CrewBoard'
import TwitterTimeline from '../../components/molecules/TwitterTimeline'

// Firebase
import { storage } from '../../lib/firebase/firebase.config'

interface DepartmentPagePropsType {
  postData: any
}

export default function DepartPageTemplate({
  postData,
}: DepartmentPagePropsType) {
  const {
      heroImgFileName,
      departmentName,
      universityName,
      hospitalName,
      tabMenu,
      topSection,
      officialWebSite,
    } = postData,
    [heroImg, setHeroImg] = useState<string>('')

  useEffect(() => {
    const storageRef = storage.ref(),
      imgPath = storageRef.child('flamelink/media').child(heroImgFileName)
    imgPath
      .getDownloadURL()
      .then((url) => setHeroImg(url))
      .catch((error) => console.log(error))
  }, [])

  return (
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
              <CrewBoard crewDataList={tabMenu.crewCardListTab} />
              <div className='w-full ov-md:p-8 sm:p-4 bg-white flex flex-col'>
                <div className='space-y-8'>
                  <div className='border-l-8 block bg-prime-blue-muted px-2 border-prime-blue-rich sm:text-sm ov-md:text-md font-medium'>
                    周辺地図
                  </div>
                  <iframe
                    className='w-full mb-10 h-[50vw]'
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d279785.1765704249!2d140.17047807758485!3d35.991258388550875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60220bff99f57b0b%3A0x1cad40e7632fb4b8!2z562R5rOi5aSn5a2m!5e0!3m2!1sja!2sjp!4v1626441216082!5m2!1sja!2sjp'
                    width='600'
                    height='450'
                    loading='lazy'
                  ></iframe>
                </div>
              </div>
              <EventTab />
              <div className='w-full ov-md:p-8 sm:p-4 bg-white flex flex-col'>
                <div className='space-y-8'>
                  <div className='border-l-8 block bg-prime-blue-muted px-2 border-prime-blue-rich sm:text-sm ov-md:text-md font-medium'>
                    公式サイト
                  </div>
                  <PlaneButton href={officialWebSite}>
                    診療科公式ページ→
                  </PlaneButton>
                  <div className='border-l-8 block bg-prime-blue-muted px-2 border-prime-blue-rich sm:text-sm ov-md:text-md font-medium'>
                    関連SNS
                  </div>
                  <TwitterTimeline href={tabMenu.snsTab.twitterTimelineUrl} />
                </div>
              </div>
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
}
