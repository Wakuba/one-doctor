import { doc, updateDoc } from 'firebase/firestore'
import { useAuthProvider } from '../../../lib/customHooks/useAuthProvider'
import { db } from '../../../lib/firebase/firebase.config'
import Form from '../Form'
import Input from '../formAtoms/Input'
import SubmitButton from '../formAtoms/SubmitButton'
import { VFC, useState } from 'react'

interface EmailUpdateFormPropsType {
  data: string
}

const EmailUpdateForm: VFC<EmailUpdateFormPropsType> = ({ data }) => {
  const auth = useAuthProvider()
  const uid = auth.odUser?.uid
  const [edit, setEdit] = useState(false)
  const onSubmit = (data: { workplace: string }) => {
    console.log('新しいお勤め先です', data)
    if (uid) {
      const workplaceDoc = doc(db, 'odUsers', uid)
      return updateDoc(workplaceDoc, { workplaceDoc: data.workplace })
    } else {
      return console.log('uidが存在しません')
    }
  }
  return (
    <div>
      <div className='flex flex-row justify-start items-center mb-2'>
        <div className='bg-prime-blue-rich text-white px-2 rounded-l'>
          現在のお勤め先
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
          formName='workplaceEditor'
          onSubmit={onSubmit}
        >
          <Input
            name='workplace'
            type='text'
            placeholder={data}
            style={{ wholeStyle: 'block', inputStyle: 'block' }}
          />
          <SubmitButton style={{ buttonStyle: 'h-8 w-16 mt-[4px] ml-4' }}>
            完了
          </SubmitButton>
        </Form>
      ) : (
        <p className='breakAll pl-2 mb-[24px] h-[40px] py-2'>
          {data ? data : 'NO DATA'}
        </p>
      )}
    </div>
  )
}

export default EmailUpdateForm
