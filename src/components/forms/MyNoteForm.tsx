import clsx from 'clsx'
import { Dispatch, ReactNode, SetStateAction, useState, VFC } from 'react'
import {
  departmentCategoryList,
  gradeList,
  universityList,
} from '../../../public/staticData'
import Form from './Form'
import MultiSelector from './formAtoms/MultiSelector'
import SingleSelector from './formAtoms/SingleSelector'
import SubmitButton from './formAtoms/SubmitButton'
import Textarea from './formAtoms/Textarea'
import YMSelector from './formAtoms/YMSelector'

interface MyNoteFormPropsType {
  style: string
}

interface SlecetButtonPropsType {
  children: ReactNode
  state: boolean
  setState: Dispatch<SetStateAction<boolean>>
}

const MyNoteForm: VFC<MyNoteFormPropsType> = ({ style }) => {
  const onSubmit = (data: any) => console.log('onsubmitだよ', data)
  const [facility, setFacility] = useState(true)
  const [coaching, setCoaching] = useState(true)
  const [clinicalCase, setClinicalCase] = useState(true)
  const [prepare, setPrepare] = useState(true)
  const [impression, setImpression] = useState(true)
  const [atomosphere, setAtomosphere] = useState(true)
  const [materials, setMaterials] = useState(true)
  const [messageToStudents, setMessageToStudents] = useState(true)
  const [allState, setAllState] = useState<boolean | null>(null)

  const SelectButton: VFC<SlecetButtonPropsType> = ({
    children,
    state,
    setState,
  }) => {
    return (
      <div
        className={`cusor-pointer px-2 rounded border-1 border-gray-400 basis-1 mr-2 mb-2 text-sm ${
          state ? 'bg-purple text-white' : 'bg-white'
        }`}
        onClick={() => {
          setState(!state)
          setAllState(null)
        }}
      >
        {children}
      </div>
    )
  }

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
    <main className={style}>
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
          <SelectButton state={facility} setState={setFacility}>
            設備について
          </SelectButton>
          <SelectButton state={coaching} setState={setCoaching}>
            指導体制・指導内容について
          </SelectButton>
          <SelectButton state={clinicalCase} setState={setClinicalCase}>
            症例について
          </SelectButton>
          <SelectButton state={atomosphere} setState={setAtomosphere}>
            雰囲気について
          </SelectButton>
          <SelectButton state={impression} setState={setImpression}>
            実習で学んだこと・印象に残ったこと
          </SelectButton>
          <SelectButton state={prepare} setState={setPrepare}>
            実習前に準備するべきこと
          </SelectButton>
          <SelectButton state={materials} setState={setMaterials}>
            実習前・実習中に読んだ本・論文
          </SelectButton>
          <SelectButton
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
            wholeStyle: allState === false ? 'hidden' : undefined,
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
              name: 'university',
              options: universityList,
              isSearchable: true,
              style: { wholeStyle: clsx('sm:w-full', 'ov-md:w-5/12') },
            }}
          >
            大学名
          </SingleSelector>
          <SingleSelector
            {...{
              name: 'grade',
              isSearchable: true,
              options: gradeList,
              style: { wholeStyle: clsx('sm:w-full', 'ov-md:w-5/12') },
            }}
          >
            学年
          </SingleSelector>
        </Form.Nest>
        <Form.Nest
          style={clsx('ov-md:flex ov-md:flex-row ov-md:justify-between')}
        >
          <MultiSelector
            {...{
              name: 'departmentWishFor',
              options: departmentCategoryList,
              style: { wholeStyle: clsx('sm:w-full', 'ov-md:w-5/12') },
            }}
          >
            診療科
          </MultiSelector>
          <YMSelector />
        </Form.Nest>
        <Textarea
          {...{
            name: 'facilityGoodPoint',
            style: { wholeStyle: !facility ? 'hidden' : undefined },
          }}
        >
          {'設備について<よかった点>'}
        </Textarea>
        <Textarea
          {...{
            name: 'facilityDissatisfiedPoint',
            style: { wholeStyle: !facility ? 'hidden' : undefined },
          }}
        >
          {'設備について<改善すべき点>'}
        </Textarea>
        <Textarea
          {...{
            name: 'facilityTotalAssesment',
            style: { wholeStyle: !facility ? 'hidden' : undefined },
          }}
        >
          {'設備について<総合評価>'}
        </Textarea>
        <Textarea
          {...{
            name: 'coachingGoodPoint',
            style: { wholeStyle: !coaching ? 'hidden' : undefined },
          }}
        >
          {'指導体制・指導内容について<よかった点>'}
        </Textarea>
        <Textarea
          {...{
            name: 'coachingDissatisfiedPoint',
            style: { wholeStyle: !coaching ? 'hidden' : undefined },
          }}
        >
          {'指導体制・指導内容について<改善すべき点>'}
        </Textarea>
        <Textarea
          {...{
            name: 'coachingProcedure',
            style: { wholeStyle: !coaching ? 'hidden' : undefined },
          }}
        >
          {'指導体制・内容について<手技>'}
        </Textarea>
        <Textarea
          {...{
            name: 'coachingTeaching',
            style: { wholeStyle: !coaching ? 'hidden' : undefined },
          }}
        >
          {'指導体制・内容について<クルズス・講義>'}
        </Textarea>
        <Textarea
          {...{
            name: 'coachingReport',
            style: { wholeStyle: !coaching ? 'hidden' : undefined },
          }}
        >
          {'指導体制・内容について<課題・レポート・発表>'}
        </Textarea>
        <Textarea
          {...{
            name: 'coachingConference',
            style: { wholeStyle: !coaching ? 'hidden' : undefined },
          }}
        >
          {'指導体制・内容について<カンファレンス>'}
        </Textarea>
        <Textarea
          {...{
            name: 'coachingTotalAssesment',
            style: { wholeStyle: !coaching ? 'hidden' : undefined },
          }}
        >
          {'指導体制・指導内容について<総合評価>'}
        </Textarea>

        <Textarea
          {...{
            name: 'clinicalCaseGoodPoint',
            style: { wholeStyle: !clinicalCase ? 'hidden' : undefined },
          }}
        >
          {'症例について<よかった点>'}
        </Textarea>
        <Textarea
          {...{
            name: 'clinicalCaseDissatisfiedPoint',
            style: { wholeStyle: !clinicalCase ? 'hidden' : undefined },
          }}
        >
          {'症例について<改善すべき点>'}
        </Textarea>

        <Textarea
          {...{
            name: 'clinicalCaseDesease',
            style: { wholeStyle: !clinicalCase ? 'hidden' : undefined },
          }}
        >
          {'症例について<疾患名>'}
        </Textarea>
        <Textarea
          {...{
            name: 'clinicalCaseSpeciality',
            style: { wholeStyle: !clinicalCase ? 'hidden' : undefined },
          }}
        >
          {'症例について<専門分野の偏り>'}
        </Textarea>
        <Textarea
          {...{
            name: 'clinicalCaseTotalAssesment',
            style: { wholeStyle: !clinicalCase ? 'hidden' : undefined },
          }}
        >
          {'症例について<総合評価>'}
        </Textarea>
        <Textarea
          {...{
            name: 'atomosphereGoodPoint',
            style: { wholeStyle: !atomosphere ? 'hidden' : undefined },
          }}
        >
          {'雰囲気について<よかった点>'}
        </Textarea>
        <Textarea
          {...{
            name: 'atomosphereDissatisfiedPoint',
            style: { wholeStyle: !atomosphere ? 'hidden' : undefined },
          }}
        >
          {'雰囲気について<改善すべき点>'}
        </Textarea>
        <Textarea
          {...{
            name: 'atomosphereTeachers',
            style: { wholeStyle: !atomosphere ? 'hidden' : undefined },
          }}
        >
          {'雰囲気について<先生たちのノリ>'}
        </Textarea>
        <Textarea
          {...{
            name: 'atomosphereTotalAssement',
            style: { wholeStyle: !atomosphere ? 'hidden' : undefined },
          }}
        >
          {'雰囲気について<総合評価>'}
        </Textarea>
        <Textarea
          {...{
            name: 'impression',
            style: { wholeStyle: !impression ? 'hidden' : undefined },
          }}
        >
          {'実習で学んだこと・印象に残ったこと'}
        </Textarea>
        <Textarea
          {...{
            name: 'prepare',
            style: { wholeStyle: !prepare ? 'hidden' : undefined },
          }}
        >
          {'実習前に準備するべきこと'}
        </Textarea>
        <Textarea
          {...{
            name: 'materials',
            style: { wholeStyle: !materials ? 'hidden' : undefined },
          }}
        >
          {'実習前・実習中に読んだ本・論文'}
        </Textarea>
        <Textarea
          {...{
            name: 'messageToStudents',
            style: { wholeStyle: !messageToStudents ? 'hidden' : undefined },
          }}
        >
          {'後輩へのメッセージ'}
        </Textarea>
        <SubmitButton name='bottomButton' style={{ buttonStyle: 'h-11 w-48' }}>
          投稿
        </SubmitButton>
      </Form>
    </main>
  )
}

export default MyNoteForm

// 実習で学んだこと・印象に残ったこと
// 実習前に準備するべきこと
// 実習前・実習中に読んだ本・論文
// 公開・非公開
