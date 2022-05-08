import { doc, updateDoc } from 'firebase/firestore'
import { useState, VFC } from 'react'
import { useAuthProvider } from '../../../lib/customHooks/useAuthProvider'
import { db } from '../../../lib/firebase/firebase.config'
import Form from '../Form'
import MultiSelector from '../formAtoms/MultiSelector'
import SubmitButton from '../formAtoms/SubmitButton'
import { prefectureList } from '../../../../public/staticData'

interface WorkplaceWishForUpdateFormPropsType {
  data: string[]
}
const WorkplaceWishForUpdateForm: VFC<WorkplaceWishForUpdateFormPropsType> = ({
  data,
}) => {
  const joinedData = data.join('　')
  const defaultValueArray: { value: string; label: string }[] = data.map(
    (d) => {
      return { value: d, label: d }
    }
  )
  const auth = useAuthProvider()
  const uid = auth.odUser?.uid
  const [edit, setEdit] = useState(false)
  const onSubmit = (data: { workplaceWishFor: string }) => {
    if (uid) {
      const workplaceDoc = doc(db, 'odUsers', uid)
      return updateDoc(workplaceDoc, {
        workplaceWishFor: data.workplaceWishFor,
      })
    } else {
      return console.log('uidが存在しません')
    }
  }
  return (
    <div>
      <div className='flex flex-row justify-start items-center mb-2'>
        <div className='bg-prime-blue-rich text-white px-2 rounded-l'>
          希望就職地
        </div>
        <button
          onClick={() => (data ? setEdit(!edit) : 'NO DATA')}
          className='bg-[#B7B7B7] px-2 text-white rounded-r'
        >
          編集
        </button>
      </div>
      {edit ? (
        <Form
          style='flex flex-row h-[64px]'
          formName='workplaceWishForEditor'
          onSubmit={onSubmit}
        >
          <MultiSelector
            {...{
              name: 'workplaceWishFor',
              options: prefectureList,
              defaultValue: defaultValueArray,
            }}
          />
          <SubmitButton style={{ buttonStyle: 'h-8 w-16 mt-[4px] ml-4' }}>
            完了
          </SubmitButton>
        </Form>
      ) : (
        <p className='breakAll pl-2 mb-[24px] h-[40px] py-2'>
          {joinedData ? joinedData : 'NO DATA'}
        </p>
      )}
    </div>
  )
}

export default WorkplaceWishForUpdateForm
