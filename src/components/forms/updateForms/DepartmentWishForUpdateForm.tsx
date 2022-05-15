import { doc, updateDoc } from 'firebase/firestore'
import { useState, VFC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { departmentCategoryList } from '../../../../public/staticData'
import { openUIUModal } from '../../../features/modalsSlice'
import { selectOdUser, selectOdUserExData } from '../../../features/userSlice'
import { db } from '../../../lib/firebase/firebase.config'
import UserInfoUpdatedModal from '../../modals/UserInfoUpdatedModal'
import Form from '../Form'
import MultiSelector from '../formAtoms/MultiSelector'
import SubmitButton from '../formAtoms/SubmitButton'

const DepartmentWishForUpdateForm: VFC = () => {
  const dispatch = useDispatch()
  const odUser = useSelector(selectOdUser)
  const odUserExData = useSelector(selectOdUserExData)
  const departmentWishFor = odUserExData.departmentWishFor
  const joinedData = departmentWishFor.join('　')
  const defaultValueArray: { value: string; label: string }[] =
    departmentWishFor.map((d) => {
      return { value: d, label: d }
    })
  const uid = odUser.uid
  const [edit, setEdit] = useState(false)
  const onSubmit = (data: { departmentWishFor: string[] }) => {
    if (uid) {
      const departmentDoc = doc(db, 'odUsers', uid)
      return updateDoc(departmentDoc, {
        departmentWishFor: data.departmentWishFor,
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
            onClick={() => (departmentWishFor ? setEdit(!edit) : 'NO DATA')}
            className='bg-[#B7B7B7] px-2 text-white rounded-r'
          >
            編集
          </button>
        </div>
        {edit ? (
          <Form
            style='flex flex-row h-[64px]'
            formName='departmentWishForEditor'
            onSubmit={onSubmit}
          >
            <MultiSelector
              {...{
                name: 'departmentWishFor',
                options: departmentCategoryList,
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

export default DepartmentWishForUpdateForm
