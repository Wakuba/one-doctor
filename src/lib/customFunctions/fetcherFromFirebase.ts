import {
  getUrlFromIframe,
  getUrlFromTwitterTimeline,
} from '../../lib/customFunctions/urlExtractor'
import { ParsedUrlQuery } from 'querystring'
import {
  collection,
  DocumentData,
  getDocs,
  query,
  QuerySnapshot,
  where,
} from 'firebase/firestore'
import { db } from '../firebase/firebase.config'
import { DepPostDataType } from '../types'

const getDataFromFirebase = (
  postData: DepPostDataType,
  params: ParsedUrlQuery | undefined
): {
  postDataPoured: DepPostDataType
  flFileHeroImgId: string
  flFileIdsForCrewImg: string[]
} => {
  let flFileHeroImgId = ''
  const flFileIdsForCrewImg: string[] = []
  const qForPostData = query(
    collection(db, 'fl_content'),
    where('_fl_meta_.schema', '==', 'departmentPage'),
    where('departmentName.departmentNameInEnglish', '==', params?.department)
  )

  const postDataPoured: DepPostDataType = postData
  ;(async () => {
    const querySnapshot = await getDocs(qForPostData)
    querySnapshot.docs.forEach((doc) => {
      postDataPoured.departmentName = doc.data().departmentName
      postDataPoured.universityName = doc.data().universityName
      postDataPoured.hospitalName = doc.data().hospitalName
      flFileHeroImgId = doc.data().heroImageOfTheDepartment[0]
        ? doc.data().heroImageOfTheDepartment[0].id
        : ''
      postDataPoured.tabMenu = {
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
      postDataPoured.topSection = doc.data().topSection
      postDataPoured.officialWebSite = doc.data().officialWebSite
    })
    // console.log('postDataPoured', postDataPoured)
  })()
  return { postDataPoured, flFileHeroImgId, flFileIdsForCrewImg }
}

const getCrewImgFileName = (
  postData: DepPostDataType,
  flFileIdsForCrewImg: string[]
): {
  postDataModified: DepPostDataType
  querySnapshotForImg: QuerySnapshot<DocumentData>
} => {
  const qForImg = query(collection(db, 'fl_files'))
  let querySnapshotForImg!: QuerySnapshot<DocumentData>
  const postDataModified: DepPostDataType = postData
  ;(async () => {
    querySnapshotForImg = await getDocs(qForImg)
    flFileIdsForCrewImg.forEach((fileId, idx) => {
      if (postDataModified.tabMenu.crewCardListTab[idx]) {
        const fileName: string = querySnapshotForImg?.docs
          .find((doc) => doc.data().id == fileId)
          ?.data().file
        postDataModified.tabMenu.crewCardListTab[idx].crewImgFileName = fileName
          ? fileName
          : ''
      }
    })
  })()
  return { postDataModified, querySnapshotForImg }
}

const getHeroImgFileName = (
  postDataPoured: DepPostDataType,
  flFileHeroImgId: string,
  querySnapshotForImg: QuerySnapshot<DocumentData>
) => {
  const preHeroImgFileName = querySnapshotForImg?.docs
    .find((doc) => doc.data().id == flFileHeroImgId)
    ?.data().file as string
  postDataPoured.heroImgFileName = preHeroImgFileName ? preHeroImgFileName : ''
  return postDataPoured
}

const postDataInitializer: DepPostDataType = {
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

export {
  getDataFromFirebase,
  getCrewImgFileName,
  getHeroImgFileName,
  postDataInitializer,
}
