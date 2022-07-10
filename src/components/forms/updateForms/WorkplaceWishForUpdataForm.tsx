import { doc, updateDoc } from 'firebase/firestore'
import { useState, VFC } from 'react'
import { db } from '../../../lib/firebase/firebase.config'
import Form from '../Form'
import MultiSelector from '../formAtoms/MultiSelector'
import SubmitButton from '../formAtoms/SubmitButton'
import { prefectureList } from '../../../../public/staticData'
import { useDispatch, useSelector } from 'react-redux'
import { selectOdUser, selectOdUserExData } from '../../../features/userSlice'
import { openUIUModal } from '../../../features/modalsSlice'
import UserInfoUpdatedModal from '../../modals/UserInfoUpdatedModal'

const WorkplaceWishForUpdateForm: VFC = () => {
  const odUserExData = useSelector(selectOdUserExData)
  const dispatch = useDispatch()
  const workplaceWishFor = odUserExData.workplaceWishFor
  const joinedData = workplaceWishFor.join('　')
  const defaultValueArray: { value: string; label: string }[] =
    workplaceWishFor.map((d) => {
      return { value: d, label: d }
    })
  const odUser = useSelector(selectOdUser)
  const uid = odUser ? odUser.uid : ''
  const [edit, setEdit] = useState(false)
  const onSubmit = (data: { workplaceWishFor: string }) => {
    if (uid) {
      const workplaceDoc = doc(db, 'odUsers', uid)
      return updateDoc(workplaceDoc, {
        workplaceWishFor: data.workplaceWishFor,
      }).then(() => dispatch(openUIUModal()))
    } else {
      return console.log('uidが存在しません')
    }
  }
  return (
    <>
      <UserInfoUpdatedModal />
      <div>
        <div className='flex flex-row justify-start items-center mb-2'>
          <div className='bg-prime-blue-rich text-white px-2 rounded-l'>
            希望就職地
          </div>
          <button
            onClick={() => (odUser ? setEdit(!edit) : 'NO DATA')}
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
    </>
  )
}

export default WorkplaceWishForUpdateForm
