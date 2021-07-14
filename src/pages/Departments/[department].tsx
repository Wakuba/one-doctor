import { db } from "../../lib/firebase/firebase.config"
import DepartPageTemplate from "../../components/templates/DepartPageTemplate"
import { depPostDataType } from "../../lib/types"

export default function DepartmentPage({ postData }) {
  return <DepartPageTemplate postData={postData} />
}

export const getStaticPaths = async () => {
  const paths: any = []
  const snapshot = await db.collection('fl_content')
    .where('_fl_meta_.schema', '==', 'departmentPage')
    .get()
  snapshot.forEach(doc => paths.push({ params: { department: doc.data().departmentName.departmentNameInEnglish } }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  //postData全体の取得
  let postData: depPostDataType | null = null
  const snapshot = await db.collection('fl_content')
    .where('_fl_meta_.schema', '==', 'departmentPage')
    .where('departmentName.departmentNameInEnglish', '==', params.department)
    .get()

  const flFileIdsForCrewImg: string[] = []
  let flFileHeroImgId: string = ''
  snapshot.docs.forEach(doc => {
    flFileHeroImgId = doc.data().heroImageOfTheDepartment[0].id
    console.log(flFileHeroImgId)
    postData = {
      departmentName: doc.data().departmentName,
      universityName: doc.data().universityName,
      hospitalName: doc.data().hospitalName,
      tabMenu: {
        basicInfoTab: doc.data().tabMenu.basicInfoTab,
        snsTab: doc.data().tabMenu.snsTab,
        geographicalInformationTab: doc.data().tabMenu.geographicalInformationTab,
        crewCardListTab: [
          ...doc.data().tabMenu.crewCardListTab.map(crewCard => {
            flFileIdsForCrewImg.push(crewCard.crewImage[0].id)
            return {
              crewName: crewCard.crewName,
              position: crewCard.position,
              licence: crewCard.licence,
              majorFiled: crewCard.majorField,
              schoolLife: crewCard.schoolLife,
              uniqueKey: crewCard.uniqueKey
            }
          })
        ]
      },
      topSection: doc.data().topSection,
      officialWebSite: doc.data().officialWebSite
    }
  })

  //postDataで得たreferenceをもとにfl_filesへアクセス
  //file名だけ取得し、画像のダウンロードは各コンポーネントに任せる
  const snapshotForImg = await db.collection('fl_files').get()
  flFileIdsForCrewImg.forEach((fileId, idx) => {
    postData.tabMenu.crewCardListTab[idx].crewImgFileName
      = snapshotForImg.docs.find(doc => doc.data().id == fileId)?.data().file
  })
  postData.heroImgFileName = snapshotForImg.docs.find(doc => doc.data().id == flFileHeroImgId)?.data().file

  return {
    props: {
      postData
    }
  }
}
