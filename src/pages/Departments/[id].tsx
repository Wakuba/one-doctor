interface DepartmentPagePropsType {
  postData: any
}

//Firebase
import { db, storage } from '../../lib/firebase/firebase.config'
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from 'firebase/firestore'
import { ref, getDownloadURL } from 'firebase/storage'
import { DepPostDataType } from '../../lib/types' // Custom components
import PlaneButton from '../../components/UIAtoms/PlaneButton'
import Header from '../../components/UIAtoms/Header'
import Footer from '../../components/UIAtoms/Footer'
import TabMenu from '../../components/tabs/TabMenu'
import Tag from '../../components/departments/Tag'
import AppealCardBoard from '../../components/departments/AppealCardBoard'
import VideoCarousel from '../../components/departments/VideoCarousel'
import ContactButtonModal from '../../components/UIAtoms/ContactButtonModal'
import DepTopSection from '../../components/departments/DepTopSeciton '
import EventTab from '../../components/departments/EventTab'
import CrewBoardTab from '../../components/departments/CrewBoardTab'
import TwitterTimeline from '../../components/departments/TwitterTimeline'
import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from 'next'
import { ParsedUrlQuery } from 'querystring'
import router from 'next/router'
import FavoriteButton from '../../components/departments/FavoriteButton'
import BasicInfoTab from '../../components/departments/BasicInfoTab'
import GeoInfoTab from '../../components/departments/GeoInfoTab'

export default function DepartmentPage({ postData }: DepartmentPagePropsType) {
  const {
    departmentName,
    universityName,
    hospitalName,
    tabMenu,
    topSection,
    officialWebSite,
  } = postData
  console.log('postData', tabMenu.basicInfoTab)

  return (
    <>
      <Header />
      <main className='ed-back-linear bg-contain bg-no-repeat w-full flex flex-col items-center'>
        <div className='sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px]'>
          <section className='w-full flex flex-col items-start mb-14 pt-10 justify-between'>
            <div className='flex-col ov-md:pt-20 w-full'>
              {/* sm:w-11/12  ov-md:w-8/12  */}
              <h1 className='text-white text-xl font-semibold mb-1'>
                {hospitalName.hospitalNameInJapanese}
                {'　'}
                {departmentName.departmentNameInJapanese}
              </h1>
              <p className='text-white text-xs mb-1'>
                {hospitalName.hospitalNameInEnglish}-
                {departmentName.departmentNameInEnglish}
              </p>
              <div className='flex flex-row w-full justify-between'>
                <div className='flex flex-row '>
                  <Tag layoutStyle='mr-2'>
                    {universityName.universityNameInJapanese}
                  </Tag>
                  <Tag layoutStyle='mr-2'>
                    {departmentName.departmentNameInJapanese}
                  </Tag>
                </div>
                <FavoriteButton layoutStyle='' depName={departmentName} />
              </div>
            </div>
          </section>

          <section className='mb-16 relative w-full flex flex-col items-center'>
            <DepTopSection
              depName={departmentName.departmentNameInJapanese}
              heroImgUrl={postData?.heroImgUrl}
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
              <VideoCarousel />
            </div>
          </section>

          <section className='w-full flex flex-col items-center mb-16'>
            <TabMenu
              style={{ tabButtonStyle: 'ov-md:h-10 ov-md:w-24 sm:h-8 sm:w-16' }}
            >
              <BasicInfoTab title='基本情報' basicInfo={tabMenu.basicInfoTab} />
              <CrewBoardTab
                title='医局員'
                crewDataList={tabMenu.crewCardListTab}
              />
              <GeoInfoTab
                title='周辺地図'
                gmIframe={tabMenu.geographicalInformationTab.googleMapIframe}
              />
              <EventTab
                title='イベント'
                dep={departmentName}
                univ={universityName}
              />
              <div
                title='SNS'
                className='w-full ov-md:p-8 sm:p-4 bg-white flex flex-col'
              >
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
                  <TwitterTimeline userId={tabMenu.snsTab.twitterUserId} />
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

interface ParamsType extends ParsedUrlQuery {
  id: string
}

export const getStaticPaths: GetStaticPaths<ParamsType> = async () => {
  const paths: any = []
  const qForPaths = query(
    collection(db, 'fl_content'),
    where('_fl_meta_.schema', '==', 'departmentPage')
  )
  const querySnapshot = await getDocs(qForPaths)
  querySnapshot.forEach((doc) => {
    paths.push({
      params: { id: doc.data().id },
    })
  })
  return {
    paths,
    fallback: false,
  }
}

interface PropsType {
  postData: DepPostDataType | { errors: any }
}

interface PropsFetchingErrorType {
  error: string
}

export const getStaticProps: GetStaticProps<
  PropsType | PropsFetchingErrorType,
  ParamsType
> = async ({
  params,
}): Promise<GetStaticPropsResult<PropsType | PropsFetchingErrorType>> => {
  let id = ''

  if (!params) {
    router.push('/index')
  } else {
    id = params.id
  }

  try {
    const docSnap = await getDoc(doc(db, 'fl_content', id))
    const data = docSnap.data()
    const heroImgId = data?.heroImageOfTheDepartment[0].id
    const docSnapForHeroImg = await getDoc(doc(db, 'fl_files', heroImgId))
    const heroImgName = docSnapForHeroImg.data()?.file
    const url = await getDownloadURL(
      ref(storage, `flamelink/media/${heroImgName}`)
    )
    const postData: DepPostDataType = {
      heroImgUrl: url ?? '',
      officialWebSite: data?.officialWebSite ?? '',
      departmentName: data?.departmentName ?? '',
      universityName: data?.universityName ?? '',
      hospitalName: data?.hospitalName ?? '',
      topSection: data?.topSection ?? '',
      tabMenu: {
        basicInfoTab: data?.tabMenu.basicInfoTab ?? '',
        geographicalInformationTab: data?.tabMenu.geographicalInformationTab,
        snsTab: {
          // twitterTimelineUrl:
          //   getUrlFromTwitterTimeline(
          //     data?.tabMenu.snsTab.twitterTimelineUrl
          //   ) ?? '',
          userId: data?.tabMenu.snsTab.userId ?? '',
        },
        crewCardListTab: [],
      },
    }
    for (const card of data?.tabMenu.crewCardListTab) {
      const crewImgId = card.crewImage[0]?.id
      let url = ''
      if (crewImgId) {
        const docSnap = await getDoc(doc(db, 'fl_files', crewImgId))
        const crewImgName = docSnap.data()?.file
        url = await getDownloadURL(
          ref(storage, `flamelink/media/${crewImgName}`)
        )
      }
      postData.tabMenu.crewCardListTab.push({
        crewImgUrl: url ?? '',
        crewName: card.crewName ?? '',
        position: card.position ?? '',
        background: card.background ?? '',
        licence: card.licence ?? '',
        majorField: card.majorField ?? '',
        schoolLife: card.schoolLife ?? '',
        forFun: card.forFun ?? '',
      })
    }
    return {
      props: {
        postData,
      },
    }
  } catch (e) {
    // return { props: { message: e.message } }
    if (e instanceof Error) {
      console.error(e.message)
      return { props: { error: e.message } }
    }
    console.log(e)
    return {
      props: {
        postData: { errors: e },
      },
    }
  }
  // const querySnapshot = await getDocs(qForPostData)
  // querySnapshot.docs.forEach(async (depDoc) => {
  //   const stringifiedDepDoc = JSON.stringify(depDoc.data())
  //   const parsedDepDoc = JSON.parse(stringifiedDepDoc)
  // const docRef = doc(db, 'fl_files', heroImgId)
  // const docSnap = await getDoc(docRef)
  // heroImgName = docSnap.data()?.file
  // postData.heroImgUrl = await getDownloadURL(
  //   ref(storage, `flamelink/media/${heroImgName}`)
  // )
  // console.log(parsedDepDoc.departmentName.departmentNameInEnglish)

  // twitter url
  // googlemap url
  // crewImage url
  // heroimage url

  /*
   * PostDataで得たreferenceをもとにfl_filesへアクセス
   * file名だけ取得し、画像のダウンロードは各コンポーネントに任せる
   */
}
