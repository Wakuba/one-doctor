//Firebase
import { db, storage } from '../../lib/firebase/firebase.config'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { ref, getDownloadURL } from 'firebase/storage'
import { DepPostDataType } from '../../lib/types'

import { useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import DepartmentTemplate from '../../components/templates/Department'
import {
  postDataInitializer,
  getDataFromFirebase,
  getCrewImgFileName,
  getHeroImgFileName,
} from '../../lib/customFunctions/fetcherFromFirebase'

export default function DepartmentPage({
  postDataPerfect,
}: {
  postDataPerfect: DepPostDataType
}) {
  console.log('perfect', postDataPerfect)
  const {
      heroImgFileName,
      departmentName,
      universityName,
      hospitalName,
      tabMenu,
      topSection,
      officialWebSite,
    } = postDataPerfect,
    [heroImg, setHeroImg] = useState<string>('')

  useEffect(() => {
    const f = async () => {
      await getDownloadURL(
        ref(storage, `flamelink/media/${heroImgFileName}`)
      ).then((url) => setHeroImg(url))
    }
    if (heroImgFileName) f()
  }, [])

  return (
    <DepartmentTemplate
      heroImg={heroImg}
      departmentName={departmentName}
      universityName={universityName}
      hospitalName={hospitalName}
      tabMenu={tabMenu}
      topSection={topSection}
      officialWebSite={officialWebSite}
    />
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // PostData全体の取得
  const initPostData: DepPostDataType = postDataInitializer

  const { postDataPoured, flFileHeroImgId, flFileIdsForCrewImg } =
    getDataFromFirebase(initPostData, params)
  // console.log('postPoured', postDataPoured)

  const { postDataModified, querySnapshotForImg } = getCrewImgFileName(
    postDataPoured,
    flFileIdsForCrewImg
  )
  // console.log('postM', postDataModified)

  const postDataPerfect = getHeroImgFileName(
    postDataModified,
    flFileHeroImgId,
    querySnapshotForImg
  )

  // console.log('postPperfect', postDataPerfect)
  return {
    props: {
      postDataPerfect,
    },
  }
}
