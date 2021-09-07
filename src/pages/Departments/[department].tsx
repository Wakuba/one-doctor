import { db } from '../../lib/firebase/firebase.config'
import { collection, query, where, getDocs } from 'firebase/firestore'
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
  const paths: any = []
  const qForPaths = query(
    collection(db, 'fl_content'),
    where('_fl_meta_.schema', '==', 'departmentPage')
  )
  const querySnapshot = await getDocs(qForPaths)
  querySnapshot.forEach((doc) => {
    paths.push({
      params: { department: doc.data().departmentName.departmentNameInEnglish },
    })
  })
  // console.log('path', paths)
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

  const qForPostData = query(
    collection(db, 'fl_content'),
    where('_fl_meta_.schema', '==', 'departmentPage'),
    where('departmentName.departmentNameInEnglish', '==', params.department)
  )
  const querySnapshot = await getDocs(qForPostData),
    flFileIdsForCrewImg: string[] = []
  let flFileHeroImgId = ''
  querySnapshot.docs.forEach((doc) => {
    postData.departmentName = doc.data().departmentName
    postData.universityName = doc.data().universityName
    postData.hospitalName = doc.data().hospitalName
    flFileHeroImgId = doc.data().heroImageOfTheDepartment[0].id
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
            uniqueKey: crewCard.uniqueKey ? crewCard.uniqueKey : '',
            crewImgFileName: '',
            crewName: crewCard.crewName ? crewCard.crewName : '',
            background: crewCard.background ? crewCard.background : '',
            position: crewCard.position ? crewCard.position : '',
            licence: crewCard.licence ? crewCard.licence : '',
            majorFiled: crewCard.majorField ? crewCard.majorField : '',
            schoolLife: crewCard.schoolLife ? crewCard.schoolLife : '',
            forFun: crewCard.forFun ? crewCard.forFun : '',
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
  const qForImg = query(collection(db, 'fl_files'))
  const querySnapshotForImg = await getDocs(qForImg)
  flFileIdsForCrewImg.forEach((fileId, idx) => {
    if (postData) {
      postData.tabMenu.crewCardListTab[idx].crewImgFileName =
        querySnapshotForImg.docs.find((doc) => doc.data().id == fileId)?.data()
          .file as string
    }
  })

  const preHeroImgFileName = querySnapshotForImg.docs
    .find((doc) => doc.data().id == flFileHeroImgId)
    ?.data().file as string

  postData.heroImgFileName = preHeroImgFileName ? preHeroImgFileName : ''
  // console.log('postData', postData)
  return {
    props: {
      postData,
    },
  }
}
