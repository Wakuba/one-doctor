import { User } from '@firebase/auth'

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

interface DepartmentNameType {
  departmentNameInEnglish: string
  departmentNameInJapanese: string
}

interface UniversityNameType {
  universityNameInEnglish: string
  universityNameInJapanese: string
}

interface HospitalNameType {
  hospitalNameInEnglish: string
  hospitalNameInJapanese: string
}

interface TopSectionType {
  educationalPoint: string
  clinicalPoint: string
  researchPoint: string
  otherPoint: string
}

export interface CrewCardListTabType {
  crewImgUrl: string
  crewName: string
  position: string
  background: string
  licence: string
  majorField: string
  schoolLife: string
  forFun: string
}

interface SnsTabType {
  twitterTimelineUrl: string
}

interface TabMenuType {
  basicInfoTab: string
  geographicalInformationTab: RegExpMatchArray | string
  snsTab: SnsTabType
  crewCardListTab: CrewCardListTabType[]
}

export interface DepPostDataType {
  heroImgUrl: string
  officialWebSite: string
  departmentName: DepartmentNameType
  universityName: UniversityNameType
  hospitalName: HospitalNameType
  topSection: TopSectionType
  tabMenu: TabMenuType
}

export interface DepartmentTemplatePropsType {
  hospitalName: HospitalNameType
  universityName: UniversityNameType
  departmentName: DepartmentNameType
  topSection: TopSectionType
  tabMenu: TabMenuType
  heroImg: string
  officialWebSite: string
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
