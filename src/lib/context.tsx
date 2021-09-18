/* eslint-disable @typescript-eslint/no-empty-function */
//Library
import { useContext, createContext, ReactNode } from 'react'

//Custom functions
import { useAuthProvider } from './customHooks'
import { OdUserContext } from './types'

const AuthContext = createContext<OdUserContext>({
  odUser: null,
  isLoading: true,
  userAdditionalData: {
    uid: '',
    name: '',
    email: '',
    password: '',
  },
  signUp: async () => {},
  logIn: async () => {},
  logOut: async () => {},
})

const { Provider } = AuthContext

export function AuthProvider(props: { children: ReactNode }): JSX.Element {
  const auth = useAuthProvider()
  return <Provider value={auth}>{props.children}</Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
