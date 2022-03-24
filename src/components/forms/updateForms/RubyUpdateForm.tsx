import { doc, updateDoc } from 'firebase/firestore'
import { useState, VFC } from 'react'
import { useAuthProvider } from '../../../lib/customHooks/useAuthProvider'
import { db } from '../../../lib/firebase/firebase.config'
import Form from '../Form'
import InputDouble from '../formAtoms/InputDouble'
import SubmitButton from '../formAtoms/SubmitButton'

interface RubyUpdateFormPropsType {
  data: string
}

const RubyUpdateForm: VFC<RubyUpdateFormPropsType> = ({ data }) => {
  const splitRuby = data ? data.split(' ') : 'NO RUBY'
  const familyRuby = Array.isArray(splitRuby) ? splitRuby[0] : ''
  const firstRuby = Array.isArray(splitRuby) ? splitRuby[1] : ''
  const auth = useAuthProvider()
  const uid = auth.odUser?.uid
  const [edit, setEdit] = useState(false)
  const onSubmit = (data: { familyRuby: string; firstRuby: string }) => {
    if (uid) {
      const nameDoc = doc(db, 'odUsers', uid)
      return updateDoc(nameDoc, {
        ruby: data.familyRuby + ' ' + data.firstRuby,
      })
    } else {
      return console.log('uidが存在しません')
    }
  }
  return (
    <div>
      <div className='flex flex-row justify-start items-center mb-2'>
        <div className='bg-prime-blue-rich text-white px-2 rounded-l'>
          ふりがな
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
          style='flex flex-row h-[64px]'
          formName='rubyEditor'
          onSubmit={onSubmit}
        >
          <InputDouble
            {...{
              name: 'ruby',
              nameOne: 'familyRuby',
              nameTwo: 'firstRuby',
              type: 'text',
              placeholderOne: familyRuby ? familyRuby : 'せい',
              placeholderTwo: firstRuby ? firstRuby : 'めい',
            }}
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

export default RubyUpdateForm
