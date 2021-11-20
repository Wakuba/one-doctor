import { User } from '@firebase/auth'
import { StringDecoder } from 'string_decoder';

export interface SpreadSheetDataType {
  date: string
  department: string
  detail: string
  eventName: string
  place: string
  timeStamp: string
}

export interface NewsLineType {
  title?: string
  detail?: string
}

interface departmentNameType {
  departmentNameInEnglish: string
  departmentNameInJapanese: string
}

interface universityNameType {
  universityNameInEnglish: string
  universityNameInJapanese: string
}

interface hospitalNameType {
  hospitalNameInEnglish: string
  hospitalNameInJapanese: string
}

interface topSectionType {
  educationalPoint: string
  clinicalPoint: string
  researchPoint: string
  otherPoint: string
}

interface crewCardListTabType {
  crewImgFileName: string
  crewName: string
  position: string
  background: string
  licence: string
  majorField: string
  schoolLife: string
  forFun: string
}

interface tabMenuType {
  basicInfoTab: string
  geographicalInformationTab: RegExpMatchArray | string
  snsTab: RegExpMatchArray | string
  crewCardListTab: crewCardListTabType[]
}

export interface depPostDataType {
  heroImgFileName: string
  officialWebSite: string
  departmentName: departmentNameType
  universityName: universityNameType
  hospitalName: hospitalNameType
  topSection: topSectionType
  tabMenu: tabMenuType
}

export interface OdUserAuthState {
  uid: string
  name: string
  email: string
}

export interface SignUpData {
  name: string
  email: string
  password: string
}

export interface SignUpDataWithUid extends SignUpData {
  uid: string
}

export interface SignUpAuthorizationDataWithImageId extends SignUpData {
  certificationImageId: string
}

export interface SignUpAuthorizationDataWithImageUrl extends SignUpData {
  certificationImageUrl: string
}

export interface LogInData {
  email: string
  password: string
}
export interface UserAdditionalData {
  uid: string
  name: string
  email: string
  password: string
}

export interface OdUserContext {
  odUser: User | null
  isLoading: boolean
  userAdditionalData: UserAdditionalData
  signUp: ({ name, email, password }: SignUpData) => Promise<void>
  logIn: ({ email, password }: LogInData) => Promise<void | User>
  logOut: () => Promise<void>
  sendPasswordResetEmailToUser: (email: string) => Promise<void>
}
