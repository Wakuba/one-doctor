import clsx from 'clsx'
import { addDoc, collection } from 'firebase/firestore'
import { Dispatch, ReactNode, SetStateAction, useState, VFC } from 'react'
import {
  departmentCategoryList,
  gradeList,
  universityList,
} from '../../../public/staticData'
import { useAuthProvider } from '../../lib/customHooks/useAuthProvider'
import { db } from '../../lib/firebase/firebase.config'
import Form from './Form'
import SingleSelector from './formAtoms/SingleSelector'
import SubmitButton from './formAtoms/SubmitButton'
import Textarea from './formAtoms/Textarea'
import YMSelector from './formAtoms/YMSelector'
import RadioButton from './formAtoms/RadioButton'

interface MyNoteFormPropsType {
  style: string
  title: string
}

interface SlecetButtonPropsType {
  id: string
  children: ReactNode
  state: boolean
  setState: Dispatch<SetStateAction<boolean>>
}

const MyNoteForm: VFC<MyNoteFormPropsType> = ({ style, title }) => {
  const [facility, setFacility] = useState(true)
  const [coaching, setCoaching] = useState(true)
  const [clinicalCase, setClinicalCase] = useState(true)
  const [prepare, setPrepare] = useState(true)
  const [impression, setImpression] = useState(true)
  const [atomosphere, setAtomosphere] = useState(true)
  const [materials, setMaterials] = useState(true)
  const [messageToStudents, setMessageToStudents] = useState(true)
  const [allState, setAllState] = useState<boolean | null>(null)

  const allFalse = () => {
    setFacility(false)
    setClinicalCase(false)
    setCoaching(false)
    setPrepare(false)
    setImpression(false)
    setAtomosphere(false)
    setMaterials(false)
    setMessageToStudents(false)
    setAllState(false)
  }
  const auth = useAuthProvider()
  const onSubmit = (data: any) => {
    const cleansedData = {
      name: auth.odUserData.name,
      uid: auth.odUser?.uid,
      ts: new Date(),
      grade: data?.grade ?? '',
      year: data?.year ?? '',
      month: data?.month ?? '',
      departmentNameInJapanese: data?.departmentNameInJapanese ?? '',
      universityNameInJapanese: data?.universityNameInJapanese ?? '',
      facility: {
        goodPoint: facility ? data?.facilityGoodPoint ?? '' : '',
        dissatisfiedPoint: facility
          ? data?.facilityDissatisfiedPoint ?? ''
          : '',
        comprehensiveEvaluation: facility
          ? data?.facilityComprehensiveEvaluation ?? ''
          : '',
      },
      coaching: {
        goodPoint: coaching ? data?.coachingGoodPoint ?? '' : '',
        dissatisfiedPoint: coaching
          ? data?.coachingDissatisfiedPoint ?? ''
          : '',
        procedure: coaching ? data?.coachingProcedure ?? '' : '',
        teaching: coaching ? data?.coachingTeaching ?? '' : '',
        report: coaching ? data?.coachingReport ?? '' : '',
        conference: coaching ? data?.coachingConference ?? '' : '',
        comprehensiveEvaluation: coaching
          ? data?.coachingComprehensiveEvaluation ?? ''
          : '',
      },
      clinicalCase: {
        goodPoint: clinicalCase ? data?.clinicalCaseGoodPoint ?? '' : '',
        dissatisfiedPoint: clinicalCase
          ? data?.clinicalCaseDissatisfiedPoint ?? ''
          : '',
        desease: clinicalCase ? data?.clinicalCaseDesease ?? '' : '',
        specialityBias: clinicalCase
          ? data?.clinicalCaseSpecialityBias ?? ''
          : '',
        comprehensiveEvaluation: clinicalCase
          ? data?.clinicalCaseComprehensiveEvaluation ?? ''
          : '',
      },
      atomosphere: {
        goodPoint: atomosphere ? data?.atomosphereGoodPoint ?? '' : '',
        dissatisfiedPoint: atomosphere
          ? data?.atomosphereDissatisfiedPoint ?? ''
          : '',
        teachers: atomosphere ? data?.atomosphereTeachers ?? '' : '',
        comprehensiveEvaluation: atomosphere
          ? data?.atomosphereComprehensiveEvaluation ?? ''
          : '',
      },
      impression: impression ? data?.impression ?? '' : '',
      prepare: prepare ? data?.prepare ?? '' : '',
      materials: materials ? data?.materials ?? '' : '',
      messageToStudents: messageToStudents ? data?.messageToStudents ?? '' : '',
      isPublic: data?.isPublic ?? '非公開',
    }
    const ref = collection(db, 'voices')
    addDoc(ref, { ...cleansedData })
  }

  const SelectButton: VFC<SlecetButtonPropsType> = ({
    id,
    children,
    state,
    setState,
  }) => {
    return (
      <label
        id={id}
        className='cursor-pointer rounded border-1 border-gray-400 basis-1 mr-2 mb-2 text-sm px-2 flex flex-row items-center justify-center'
      >
        <input
          id={id}
          name='inputNames'
          type='checkbox'
          checked={state}
          className='mr-2'
          onChange={() => {
            setState(!state)
            setAllState(null)
          }}
        />
        {children}
      </label>
    )
  }

  const allTrue = () => {
    setFacility(true)
    setClinicalCase(true)
    setCoaching(true)
    setPrepare(true)
    setImpression(true)
    setAtomosphere(true)
    setMaterials(true)
    setMessageToStudents(true)
    setAllState(true)
  }

  return (
    <div title={title} className={style}>
      <div className='mt-10'>
        <h1 className='text-2xl text-prime-blue-rich font-semibold mb-6'>
          医学生の声を投稿する
        </h1>
        <p className='text-sm mb-6'>
          以下のフォームに必要事項をご記入のうえ、「送信する」をクリックしてください
        </p>
      </div>
      <div className='mb-4'>
        <div className='text-sm mb-2'>
          以下から投稿したい内容を選択して入力してください
        </div>
        <div
          className='bg-red-300 text-sm rounded border-1 border-gray-400 inline-block px-2 mb-2 mr-2 cursor-pointer'
          onClick={() => allFalse()}
        >
          全て解除する
        </div>
        <div
          className='bg-prime-blue-pale text-sm rounded border-1 border-gray-400 inline-block px-2 mb-2 mr-2'
          onClick={() => allTrue()}
        >
          全て選択する
        </div>
        <div className='flex flex-row flex-wrap justify-start'>
          <SelectButton id='facility' state={facility} setState={setFacility}>
            設備について
          </SelectButton>
          <SelectButton id='coaching' state={coaching} setState={setCoaching}>
            指導体制・指導内容について
          </SelectButton>
          <SelectButton
            id='clinicalCase'
            state={clinicalCase}
            setState={setClinicalCase}
          >
            症例について
          </SelectButton>
          <SelectButton
            id='atomosphere'
            state={atomosphere}
            setState={setAtomosphere}
          >
            雰囲気について
          </SelectButton>
          <SelectButton
            id='impression'
            state={impression}
            setState={setImpression}
          >
            実習で学んだこと・印象に残ったこと
          </SelectButton>
          <SelectButton id='prepare' state={prepare} setState={setPrepare}>
            実習前に準備するべきこと
          </SelectButton>
          <SelectButton
            id='materials'
            state={materials}
            setState={setMaterials}
          >
            実習前・実習中に読んだ本・論文
          </SelectButton>
          <SelectButton
            id='massageToStudents'
            state={messageToStudents}
            setState={setMessageToStudents}
          >
            後輩へのメッセージ
          </SelectButton>
        </div>
      </div>
      <Form
        formName='voiceEditor'
        onSubmit={onSubmit}
        style='flex flex-col bg-prime-blue-muted space-y-6'
      >
        <SubmitButton
          name='topButton'
          style={{
            wrapperStyle: allState === false ? 'hidden' : undefined,
            buttonStyle: 'h-11 w-48',
          }}
        >
          投稿
        </SubmitButton>
        <Form.Nest
          style={clsx('ov-md:flex ov-md:flex-row ov-md:justify-between')}
        >
          <SingleSelector
            {...{
              name: 'universityNameInJapanese',
              options: universityList,
              isSearchable: true,
              style: { wrapperStyle: clsx('sm:w-full', 'ov-md:w-5/12') },
            }}
          >
            大学名
          </SingleSelector>
          <SingleSelector
            {...{
              name: 'grade',
              isSearchable: true,
              options: gradeList,
              style: { wrapperStyle: clsx('sm:w-full', 'ov-md:w-5/12') },
            }}
          >
            学年
          </SingleSelector>
        </Form.Nest>
        <Form.Nest
          style={clsx('ov-md:flex ov-md:flex-row ov-md:justify-between')}
        >
          <SingleSelector
            {...{
              name: 'departmentNameInJapanese',
              isSearchable: true,
              options: departmentCategoryList,
              style: { wrapperStyle: clsx('sm:w-full', 'ov-md:w-5/12') },
            }}
          >
            診療科
          </SingleSelector>
          <YMSelector />
        </Form.Nest>
        <Textarea
          {...{
            name: 'facilityGoodPoint',
            style: { wrapperStyle: !facility ? 'hidden' : undefined },
            isRequired: facility,
            placeholder: '内視鏡を扱ってみることができた',
          }}
        >
          {'設備について<よかった点>'}
        </Textarea>
        <Textarea
          {...{
            name: 'facilityDissatisfiedPoint',
            style: { wrapperStyle: !facility ? 'hidden' : undefined },
            isRequired: facility,
            placeholder: '学生の居場所はない、先生方もスペースはなさそう',
          }}
        >
          {'設備について<改善すべき点>'}
        </Textarea>
        <RadioButton
          title='設備について<総合評価>'
          sideRate={{ left: '良い', right: '悪い' }}
          name='facilityComprehensiveEvaluation'
          style={{
            wrapperStyle: `${!facility ? 'hidden' : undefined}`,
            containerStyle: 'flex-row items-center',
            inputStyle: 'mr-2',
          }}
          values={['1', '2', '3', '4', '5']}
        />
        <Textarea
          {...{
            name: 'coachingGoodPoint',
            style: { wrapperStyle: !coaching ? 'hidden' : undefined },
            isRequired: coaching,
            placeholder:
              'チーム毎に分かれて行動するので、つく先生次第。こちらが積極的な態度を示せばそれにしっかり答えてくれる。カンファ中も間に入って教えてくれる',
          }}
        >
          {'指導体制・指導内容について<よかった点>'}
        </Textarea>
        <Textarea
          {...{
            name: 'coachingDissatisfiedPoint',
            style: { wrapperStyle: !coaching ? 'hidden' : undefined },
            isRequired: coaching,
            placeholder: 'クルズスの内容が座学の復習的な内容なものが若干多い。',
          }}
        >
          {'指導体制・指導内容について<改善すべき点>'}
        </Textarea>
        <RadioButton
          title='指導体制・内容について<手技>'
          name='coachingProcedure'
          style={{
            wrapperStyle: `${!coaching ? 'hidden' : undefined}`,
            containerStyle: 'flex-row items-center',
            labelStyle: 'flex-col-reverse',
            inputStyle: 'mt-2',
          }}
          values={['少ない', 'やや少ない', '普通', 'やや多い', '多い']}
        />
        <RadioButton
          title='指導体制・内容について<クルズス・講義>'
          name='coachingTeaching'
          style={{
            wrapperStyle: `${!coaching ? 'hidden' : undefined} `,
            containerStyle: 'flex-row items-center',
            labelStyle: 'flex-col-reverse',
            inputStyle: 'mt-2',
          }}
          values={['少ない', 'やや少ない', '普通', 'やや多い', '多い']}
        />
        <RadioButton
          title='指導体制・内容について<課題・レポート・発表>'
          name='coachingReport'
          style={{
            wrapperStyle: `${!coaching ? 'hidden' : undefined}`,
            labelStyle: 'flex-col-reverse',
            inputStyle: 'mt-2',
          }}
          values={['特になし', 'あるけど楽', '普通', 'やや大変', '大変']}
        />
        <RadioButton
          title='指導体制・内容について<カンファレンス>'
          name='coachingConference'
          style={{
            wrapperStyle: `${!coaching ? 'hidden' : undefined}`,
            containerStyle: 'flex-col items-start pl-12',
            labelStyle: 'h-12',
            inputStyle: 'mr-2',
          }}
          values={[
            '学生は参加しなくて良い',
            '参加するけど聞いているだけ',
            '先生から質問が飛んでくる',
            '担当患者について発表がある',
          ]}
        />
        <RadioButton
          title='指導体制・内容について<総合評価>'
          sideRate={{ left: '良い', right: '悪い' }}
          name='coachingComprehensiveEvaluation'
          style={{
            wrapperStyle: `${!coaching ? 'hidden' : undefined}`,
            containerStyle: 'flex-row items-center',
            inputStyle: 'mr-2',
          }}
          values={['1', '2', '3', '4', '5']}
        />
        <Textarea
          {...{
            name: 'clinicalCaseGoodPoint',
            style: { wrapperStyle: !clinicalCase ? 'hidden' : undefined },
            isRequired: clinicalCase,
            placeholder:
              'たくさんの学生が同時に回っており、症例も様々なものが充てられているので自分たちで共有すればたくさんの疾患が学べる。カンファレンスでも近くにいる先生がいろいろ解説してくれる。',
          }}
        >
          {'症例について<よかった点>'}
        </Textarea>
        <Textarea
          {...{
            name: 'clinicalCaseDissatisfiedPoint',
            style: { wrapperStyle: !clinicalCase ? 'hidden' : undefined },
            isRequired: clinicalCase,
            placeholder: '特になし',
          }}
        >
          {'症例について<改善すべき点>'}
        </Textarea>
        <Textarea
          {...{
            name: 'clinicalCaseDesease',
            style: { wrapperStyle: !clinicalCase ? 'hidden' : undefined },
            isRequired: clinicalCase,
          }}
        >
          {'症例について<疾患名>'}
        </Textarea>
        <RadioButton
          title='症例について<専門分野の偏り'
          sideRate={{ left: '偏っている', right: 'ばらけている' }}
          name='clinicalCaseSpecialityBias'
          style={{
            wrapperStyle: `${
              !clinicalCase ? 'hidden' : undefined
            } flex-row items-center`,
            containerStyle: 'flex-row items-center',
            inputStyle: 'mr-2',
          }}
          values={['1', '2', '3', '4', '5']}
        />
        <RadioButton
          title='症例について<総合評価>'
          sideRate={{ left: '不満足', right: '満足' }}
          name='clinicalCaseComprehensiveEvaluation'
          style={{
            wrapperStyle: `${!clinicalCase ? 'hidden' : undefined}`,
            containerStyle: 'flex-row items-center',
            inputStyle: 'mr-2',
          }}
          values={['1', '2', '3', '4', '5']}
        />
        <Textarea
          {...{
            name: 'atomosphereGoodPoint',
            style: { wrapperStyle: !atomosphere ? 'hidden' : undefined },
            isRequired: atomosphere,
            placeholder:
              'なんでも質問しやすい。回診やカンファレンスの時にも学生担当の先生が近くでいろいろ解説してくれる。',
          }}
        >
          {'雰囲気について<よかった点>'}
        </Textarea>
        <Textarea
          {...{
            name: 'atomosphereDissatisfiedPoint',
            style: { wrapperStyle: !atomosphere ? 'hidden' : undefined },
            isRequired: atomosphere,
            placeholder: '学生に怒鳴って泣かせた怖い先生もいる。',
          }}
        >
          {'雰囲気について<改善すべき点>'}
        </Textarea>
        <RadioButton
          name='atomosphereTeachers'
          sideRate={{
            left: 'おだやか・真面目系',
            right: 'にぎやか・体育会系',
          }}
          style={{
            wrapperStyle: `${!atomosphere ? 'hidden' : undefined} pt-4`,
            inputStyle: 'mr-2',
          }}
          title={'雰囲気について<先生たちのノリ>'}
          values={['1', '2', '3', '4', '5']}
        />
        <RadioButton
          title='雰囲気について<総合評価>'
          sideRate={{ left: '不満足', right: '満足' }}
          name='atomosphereComprehensiveEvaluation'
          style={{
            wrapperStyle: `${!atomosphere ? 'hidden' : undefined}`,
            inputStyle: 'mr-2',
          }}
          values={['1', '2', '3', '4', '5']}
        />
        <Textarea
          {...{
            name: 'impression',
            style: { wrapperStyle: !impression ? 'hidden' : undefined },
            isRequired: impression,
            placeholder:
              '血管内治療が重い放射線防護着を着たまま何時間も立ちっぱなしで想像以上に過酷だった。',
          }}
        >
          {'実習で学んだこと・印象に残ったこと'}
        </Textarea>
        <Textarea
          {...{
            name: 'prepare',
            style: { wrapperStyle: !prepare ? 'hidden' : undefined },
            isRequired: prepare,
            placeholder:
              'Qassistの循環器を一通り見てから行くと、回診やカンファレンスで先生に「これわかる？」って聞かれたときに答えられる。',
          }}
        >
          {'実習前に準備するべきこと'}
        </Textarea>
        <Textarea
          {...{
            name: 'materials',
            style: { wrapperStyle: !materials ? 'hidden' : undefined },
            isRequired: materials,
            placeholder: 'Qassist、病気がみえる',
          }}
        >
          {'実習前・実習中に読んだ本・論文'}
        </Textarea>
        <Textarea
          {...{
            name: 'messageToStudents',
            style: {
              wrapperStyle: !messageToStudents ? 'hidden' : undefined,
            },
            isRequired: messageToStudents,
            placeholder: '拘束時間長めだけどためになるから頑張って！',
          }}
        >
          {'後輩へのメッセージ'}
        </Textarea>
        <RadioButton
          name='isPublic'
          title={'公開, 非公開'}
          style={{
            containerStyle: 'pl-12 flex-col items-start',
          }}
          values={['公開', '非公開']}
        />
        <SubmitButton name='bottomButton' style={{ buttonStyle: 'h-11 w-48' }}>
          投稿
        </SubmitButton>
      </Form>
    </div>
  )
}

export default MyNoteForm

// 実習で学んだこと・印象に残ったこと
// 実習前に準備するべきこと
// 実習前・実習中に読んだ本・論文
// 公開・非公開
