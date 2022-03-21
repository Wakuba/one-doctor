import { doc, updateDoc } from 'firebase/firestore'
import { useAuthProvider } from '../../../lib/customHooks/useAuthProvider'
import { useState } from 'react'
import { db } from '../../../lib/firebase/firebase.config'
import Form from '../Form'
import InputDouble from '../formAtoms/InputDouble'
import SubmitButton from '../formAtoms/SubmitButton'

interface NameUpdateFormPropsType {
  data: string
}

const NameUpdateForm: React.VFC<NameUpdateFormPropsType> = ({ data }) => {
  const splitName = data ? data.split(' ') : 'NO NAME'
  const familyName = Array.isArray(splitName) ? splitName[0] : ''
  const firstName = Array.isArray(splitName) ? splitName[1] : ''
  console.log(firstName, familyName)
  const auth = useAuthProvider()
  const uid = auth.odUser?.uid
  const onSubmit = (data: { familyName: string; firstName: string }) => {
    console.log('新しい名前です', data)
    if (uid) {
      const nameDoc = doc(db, 'odUsers', uid)
      return updateDoc(nameDoc, {
        name: data.familyName + ' ' + data.firstName,
      })
    } else {
      return console.log('uidが存在しません')
    }
  }
  const [edit, setEdit] = useState(false)

  return (
    <div>
      <div className='flex flex-row justify-start items-center mb-2'>
        <div className='bg-prime-blue-rich text-white px-2 rounded-l'>
          お名前
        </div>
        <button
          onClick={() => (data ? setEdit(!edit) : console.log('NO DATA'))}
          className='bg-[#B7B7B7] px-2 text-white rounded-r'
        >
          編集
        </button>
      </div>
      {edit ? (
        <Form
          style='flex flex-row h-[64px] w-full'
          formName='nameEditor'
          onSubmit={onSubmit}
        >
          <InputDouble
            {...{
              name: 'name',
              nameOne: 'familyName',
              nameTwo: 'firstName',
              type: 'text',
              placeholderOne: familyName ? familyName : '姓',
              placeholderTwo: firstName ? firstName : '名',
            }}
          />
          <SubmitButton style={{ buttonStyle: 'h-8 w-16 mt-[4px] ml-4' }}>
            完了
          </SubmitButton>
        </Form>
      ) : (
        <p className='breakAll pl-2 mb-[24px] h-[40px] py-2'>
          {data ?? 'NO DATA'}
        </p>
      )}
    </div>
  )
}

export default NameUpdateForm
