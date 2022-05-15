/* eslint-disable @typescript-eslint/no-empty-function */
//Library
import { useContext, createContext, ReactNode } from 'react'

//Custom functions
import { useAuthProvider } from './customHooks/useAuthProvider'
import { OdUserContextType } from './types'

const AuthContext = createContext<OdUserContextType>({
  odUser: null,
  isLoading: true,
  odUserExData: {
    uid: '',
    name: '',
    email: '',
    ruby: '',
    password: '',
    gender: '',
    isStudent: true,
    favoDeparts: [],
    favoEvents: [],
    grade: '',
    university: '',
    workplaceWishFor: [],
    departmentWishFor: [],
    ts: new Date(),
  } || {
    uid: '',
    name: '',
    email: '',
    ruby: '',
    password: '',
    gender: '',
    isStudent: true,
    favoDeparts: [],
    favoEvents: [],
    departmentWishFor: [],
    workplace: '',
    workplaceWishFor: [],
    authorizedByAdmin: false,
    ts: new Date(),
  },
  signUp: async () => { },
  logIn: async () => { },
  logOut: async () => { },
  sendPasswordResetEmailToUser: async () => { },
})

export function AuthProvider(props: { children: ReactNode }): JSX.Element {
  const auth = useAuthProvider()
  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
