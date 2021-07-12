import { db } from "../../lib/firebase/firebase.config"
import DepartPageTemplate from "../../components/templates/DepartPageTemplate"

export default function DepartmentPage({ postData }) {
  return <DepartPageTemplate postData={postData} />
}

export async function getStaticPaths() {
  let paths: any = []
  const snapshot = await db.collection('fl_content')
    .where('_fl_meta_.schema', '==', 'departmentPage')
    .get()
  snapshot.forEach(doc => paths.push({ params: { department: doc.data().departmentName.departmentNameInEnglish } }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  let postData: any = null
  const snapshot = await db.collection('fl_content')
    .where('_fl_meta_.schema', '==', 'departmentPage')
    .where('departmentName.departmentNameInEnglish', '==', params.department)
    .get()
  let flFileIds: string[] = []
  snapshot.docs.forEach(doc => {
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
            flFileIds.push(crewCard.crewImage[0].id)
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

  const snapshotForImg = await db.collection('fl_files').get()
  flFileIds.forEach((fileId, idx) => {
    postData.tabMenu.crewCardListTab[idx].crewImgFileName
      = snapshotForImg.docs.find(doc => doc.data().id == fileId)?.data().file
  })

  return {
    props: {
      postData
    }
  }
}
