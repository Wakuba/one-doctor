/* eslint-disable @typescript-eslint/no-empty-function */
//Library
import { useContext, createContext, ReactNode } from 'react'

//Custom functions
import { useAuthProvider } from './customHooks/useAuthProvider'
import { odUserContextType } from './types'

const AuthContext = createContext<odUserContextType>({
  odUser: null,
  isLoading: true,
  odUserData: {
    uid: '',
    name: '',
    email: '',
    password: '',
  },
  signUp: async () => {},
  logIn: async () => {},
  logOut: async () => {},
  sendPasswordResetEmailToUser: async () => {},
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
