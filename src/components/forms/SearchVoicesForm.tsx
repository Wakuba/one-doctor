import {
  collection,
  DocumentData,
  getDocs,
  query,
  QueryDocumentSnapshot,
  where,
} from 'firebase/firestore'
import { useEffect, useState, VFC } from 'react'
import {
  departmentCategoryList,
  universityList,
} from '../../../public/staticData'
import { db } from '../../lib/firebase/firebase.config'
import { VoiceDataType } from '../../lib/types'
import VoiceBoard from '../browseStudentsVoices/SearchedVoiceBoard'
import Form from './Form'
import MultiSelector from './formAtoms/MultiSelector'
import SubmitButton from './formAtoms/SubmitButton'

const sqzByDep = (
  docs: QueryDocumentSnapshot<DocumentData>[],
  depNameFromForm: string[]
) => {
  return docs.filter((doc) => {
    const vData = doc.data()
    const depName = vData.departmentNameInJapanese
    return depNameFromForm
      .map((name) => depName?.includes(name))
      .some((x) => x === true)
  })
}

const sqzByUniv = (
  docs: QueryDocumentSnapshot<DocumentData>[],
  univNameFromForm: string[]
) => {
  return docs.filter((doc) => {
    const vData = doc.data()
    const univName = vData.universityNameInJapanese
    return univNameFromForm.includes(univName)
  })
}

const SearchVoicesForm: VFC = () => {
  const [voiceData, setVoiceData] = useState<VoiceDataType[]>()
  useEffect(() => {
    getDocs(
      query(collection(db, 'voices'), where('isPublic', '==', '公開'))
    ).then((snapshot) => {
      const defaultVoiceData = snapshot.docs.map((doc: DocumentData) =>
        doc.data()
      )
      setVoiceData(defaultVoiceData)
    })
  }, [])
  const search = (data: {
    departmentSearch?: string[]
    universitySearch?: string[]
  }) => {
    const ref = collection(db, 'voices')
    const constraint = where('isPublic', '==', '公開')
    const q = query(ref, constraint)
    getDocs(q)
      .then((snapshot) => {
        const docs = snapshot.docs
        if (!data.departmentSearch || !data.universitySearch) return
        if (
          data.departmentSearch.length !== 0 &&
          data.universitySearch.length !== 0
        ) {
          const sqzdData = sqzByUniv(
            sqzByDep(docs, data.departmentSearch),
            data.universitySearch
          ).map((doc) => doc.data())
          setVoiceData(sqzdData as VoiceDataType[])
        }
        if (
          data.departmentSearch.length !== 0 &&
          data.universitySearch.length === 0
        ) {
          const sqzdData = sqzByDep(docs, data.departmentSearch).map((doc) =>
            doc.data()
          )
          setVoiceData(sqzdData as VoiceDataType[])
        }
        if (
          data.departmentSearch.length === 0 &&
          data.universitySearch.length !== 0
        ) {
          const sqzdData = sqzByUniv(docs, data.universitySearch).map((doc) =>
            doc.data()
          )
          setVoiceData(sqzdData as VoiceDataType[])
        }
        if (
          data.departmentSearch.length === 0 &&
          data.universitySearch.length === 0
        ) {
          const allData = docs.map((doc) => doc.data())
          setVoiceData(allData as VoiceDataType[])
        }
      })
      .catch((e) => console.log(e, 'ミスった'))
  }
  return (
    <>
      <h2>
        <div className='sm:text-xl ov-md:text-2xl mt-16'>絞り込み条件</div>
      </h2>
      <Form
        formName='searchVoicesForm'
        onSubmit={search}
        style='mt-8 grid grid-cols-2'
      >
        <MultiSelector
          {...{
            options: departmentCategoryList,
            name: 'departmentSearch',
            isRequired: false,
            style: { wrapperStyle: 'w-10/12 col-span-1' },
          }}
        >
          診療科
        </MultiSelector>
        <MultiSelector
          {...{
            options: universityList,
            name: 'universitySearch',
            isRequired: false,
            style: { wrapperStyle: 'w-10/12 col-span-1' },
          }}
        >
          大学
        </MultiSelector>
        <SubmitButton
          style={{
            wrapperStyle: 'w-full col-span-2',
            buttonStyle: 'w-48 h-11',
          }}
        >
          検索する
        </SubmitButton>
      </Form>
      {voiceData && voiceData.length === 0 ? (
        <div className='w-full flex items-center justify-center mb-10'>
          <p className='text-xl text-[#707070]'>検索結果はありません</p>
        </div>
      ) : (
        <VoiceBoard data={voiceData as VoiceDataType[]} />
      )}
    </>
  )
}

export default SearchVoicesForm
