import clsx from 'clsx'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState, VFC } from 'react'
import { db, auth } from '../../lib/firebase/firebase.config'
import { VoiceDataType } from '../../lib/types'

interface MyPastRecordsPropsType {
  title: string
  style?: { wrapperStyle?: string }
}

const MyPastRecords: VFC<MyPastRecordsPropsType> = ({ title, style }) => {
  const [voiceData, setVoiceData] = useState<VoiceDataType[] | null>(null)
  useEffect(() => {
    const curUser = auth.currentUser
    const uid = curUser?.uid
    if (curUser) {
      const ref = collection(db, 'voices')
      const constraint = where('uid', '==', uid)
      const q = query(ref, constraint)
      getDocs(q)
        .then((snap) => {
          const data: VoiceDataType[] = []
          snap.docs.forEach((doc) =>
            data.push({
              atomosphere: {
                comprehensiveEvaluation:
                  doc.data().atomosphere.comprehensiveEvaluation ?? '',
                dissatisfiedPoint:
                  doc.data().atomosphere.dissatisfiedPoint ?? '',
                goodPoint: doc.data().atomosphere.goodPoint ?? '',
                teachers: doc.data().atomosphere.teachers ?? '',
              },
              clinicalCase: {
                comprehensiveEvaluation:
                  doc.data().clinicalCase.comprehensiveEvaluation ?? '',
                desease: doc.data().clinicalCase.desease ?? '',
                dissatisfiedPoint:
                  doc.data().clinicalCase.dissatisfiedPoint ?? '',
                goodPoint: doc.data().clinicalCase.goodPoint ?? '',
                specialityBias: doc.data().clinicalCase.specialityBias ?? '',
              },
              coaching: {
                comprehensiveEvaluation:
                  doc.data().coaching.comprehensiveEvaluation ?? '',
                conference: doc.data().coaching.conference ?? '',
                dissatisfiedPoint: doc.data().coaching.dissatisfiedPoint ?? '',
                goodPoint: doc.data().coaching.goodPoint ?? '',
                procedure: doc.data().coaching.procedure ?? '',
                report: doc.data().coaching.report ?? '',
                teaching: doc.data().coaching.teaching ?? '',
              },
              departmentNameInJapanese:
                doc.data().departmentNameInJapanese ?? '',
              facility: {
                comprehensiveEvaluation:
                  doc.data().facility.comprehensiveEvaluation ?? '',
                dissatisfiedPoint: doc.data().facility.dissatisfiedPoint ?? '',
                goodPoint: doc.data().facility.goodPoint ?? '',
              },
              grade: doc.data().grade ?? '',
              impression: doc.data().impression ?? '',
              isPublic: doc.data().isPublic ?? '非公開',
              materials: doc.data().materials ?? '',
              messageToStudents: doc.data().messageToStudents ?? '',
              month: doc.data().month ?? '',
              name: doc.data().name ?? '',
              prepare: doc.data().prepare ?? '',
              ts: new Date(doc.data().ts.seconds * 1000),
              uid: doc.data().uid ?? '',
              universityNameInJapanese:
                doc.data().universityNameInJapanese ?? '',
              year: doc.data().year ?? '',
            })
          )
          setVoiceData(data)
        })
        .catch((e) => console.log(e))
    }
  }, [])
  return (
    <div title={title} className={clsx(style?.wrapperStyle)}>
      <div className='p-8 w-full flex flex-row justify-between flex-wrap gap-8'>
        {voiceData &&
          voiceData.map((data, key) => {
            return (
              <Directory
                key={key}
                univName={data.universityNameInJapanese}
                depName={data.departmentNameInJapanese}
                date={data.ts.toLocaleDateString()}
              />
            )
          })}
      </div>
    </div>
  )
}

export default MyPastRecords

const Directory = ({ key, univName, depName, date }) => {
  return (
    <div key={key} className='h-56 w-40 bg-transparent'>
      <div className='w-1/2 border-b-[16px] border-b-prime-blue-rich border-l-4 border-l-transparent border-r-4 border-r-transparent'></div>
      <div
        className={clsx(
          'flex flex-col items-center justify-around bg-prime-blue-pale h-52 w-40 shadow-xl text-md font-normal text-white'
        )}
      >
        <div>
          <p>{univName}</p>
          <p>{depName}</p>
        </div>
        <p>{date}に記入</p>
      </div>
    </div>
  )
}
