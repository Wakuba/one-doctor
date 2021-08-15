import { db } from '../../lib/firebase/firebase.config'
import DepartPageTemplate from '../../components/templates/DepartPageTemplate'
import { depPostDataType } from '../../lib/types'
import {
  getUrlFromIframe,
  getUrlFromTwitterTimeline,
} from '../../lib/customFunctions'

export default function DepartmentPage({ postData }: { postData: any }) {
  return <DepartPageTemplate postData={postData} />
}

export const getStaticPaths = async () => {
  const paths: any = [],
    snapshot = await db
      .collection('fl_content')
      .where('_fl_meta_.schema', '==', 'departmentPage')
      .get()
  snapshot.forEach((doc) =>
    paths.push({
      params: { department: doc.data().departmentName.departmentNameInEnglish },
    })
  )
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: { params: any }) => {
  // PostData全体の取得
  const postData: depPostDataType = {
    heroImgFileName: '',
    officialWebSite: '',
    departmentName: {
      departmentNameInEnglish: '',
      departmentNameInJapanese: '',
    },
    universityName: {
      universityNameInEnglish: '',
      universityNameInJapanese: '',
    },
    hospitalName: {
      hospitalNameInEnglish: '',
      hospitalNameInJapanese: '',
    },
    topSection: {
      educationalPoint: '',
      researchPoint: '',
      clinicalPoint: '',
      otherPoint: '',
    },
    tabMenu: {
      basicInfoTab: '',
      geographicalInformationTab: '',
      snsTab: '',
      crewCardListTab: [],
    },
  }

  const snapshot = await db
      .collection('fl_content')
      .where('_fl_meta_.schema', '==', 'departmentPage')
      .where('departmentName.departmentNameInEnglish', '==', params.department)
      .get(),
    flFileIdsForCrewImg: string[] = []
  const flFileHeroImgId = ''
  snapshot.docs.forEach((doc) => {
    postData.departmentName = doc.data().departmentName
    postData.universityName = doc.data().universityName
    postData.hospitalName = doc.data().hospitalName
    postData.tabMenu = {
      basicInfoTab: doc.data().tabMenu.basicInfoTab,
      snsTab: getUrlFromTwitterTimeline(doc.data().tabMenu.snsTab),
      geographicalInformationTab: getUrlFromIframe(
        doc.data().tabMenu.geographicalInformationTab
      ),
      crewCardListTab: [
        ...doc.data().tabMenu.crewCardListTab.map((crewCard: any) => {
          flFileIdsForCrewImg.push(crewCard.crewImage[0].id)
          return {
            uniqueKey: crewCard.uniqueKey,
            crewImgFileName: '',
            crewName: crewCard.crewName,
            background: crewCard.background,
            position: crewCard.position,
            licence: crewCard.licence,
            majorFiled: crewCard.majorField,
            schoolLife: crewCard.schoolLife,
            forFun: crewCard.forFun,
          }
        }),
      ],
    }
    postData.topSection = doc.data().topSection
    postData.officialWebSite = doc.data().officialWebSite
  })

  /*
   * PostDataで得たreferenceをもとにfl_filesへアクセス
   * file名だけ取得し、画像のダウンロードは各コンポーネントに任せる
   */
  const snapshotForImg = await db.collection('fl_files').get()
  flFileIdsForCrewImg.forEach((fileId, idx) => {
    if (postData) {
      postData.tabMenu.crewCardListTab[idx].crewImgFileName =
        snapshotForImg.docs.find((doc) => doc.data().id == fileId)?.data()
          .file as string
    }
  })

  const preHeroImgFileName = snapshotForImg.docs
    .find((doc) => doc.data().id == flFileHeroImgId)
    ?.data().file as string

  postData.heroImgFileName = preHeroImgFileName ? preHeroImgFileName : ''
  console.log(postData)
  return {
    props: {
      postData,
    },
  }
}
