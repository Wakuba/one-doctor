import { createUserWithEmailAndPassword } from '@firebase/auth'
import { auth } from './firebaseConfig'

interface SignupType {
  email: string
  password: string
}

const signUp = async ({ email, password }: SignupType): Promise<void> => {
  await createUserWithEmailAndPassword(auth, email, password)
}

export default signUp
