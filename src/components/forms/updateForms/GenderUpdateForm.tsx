import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../../lib/firebase/firebase.config'
import Form from '../Form'
import SubmitButton from '../formAtoms/SubmitButton'
import { VFC, useState } from 'react'
import SingleSelector from '../formAtoms/SingleSelector'
import { useDispatch, useSelector } from 'react-redux'
import { selectOdUser, selectOdUserExData } from '../../../features/userSlice'
import { openUIUModal } from '../../../features/modalsSlice'
import UserInfoUpdatedModal from '../../modals/UserInfoUpdatedModal'

const GenderUpdateForm: VFC = () => {
  const dispatch = useDispatch()
  const odUser = useSelector(selectOdUser)
  const uid = odUser.uid
  const odUserExData = useSelector(selectOdUserExData)
  const gender = odUserExData.gender
  const [edit, setEdit] = useState(false)
  const onSubmit = (data: { gender: string }) => {
    if (uid) {
      const genderDoc = doc(db, 'odUsers', uid)
      return updateDoc(genderDoc, { gender: data.gender }).then(() =>
        dispatch(openUIUModal())
      )
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
            性別
          </div>
          <button
            onClick={() => (gender ? setEdit(!edit) : 'NO DATA')}
            className='bg-[#B7B7B7] px-2 text-white rounded-r'
          >
            編集
          </button>
        </div>
        {edit ? (
          <Form
            style='flex flex-row h-[64px]'
            formName='genderEditor'
            onSubmit={onSubmit}
          >
            <SingleSelector
              {...{
                name: 'gender',
                options: ['女性', '男性', 'その他'],
                placeholder: gender,
                isSearchable: false,
              }}
            />
            <SubmitButton style={{ buttonStyle: 'h-8 w-16 mt-[4px] ml-4' }}>
              完了
            </SubmitButton>
          </Form>
        ) : (
          <p className='breakAll pl-2 mb-[24px] h-[40px] py-2'>
            {gender ? gender : 'NO DATA'}
          </p>
        )}
      </div>
    </>
  )
}

export default GenderUpdateForm
