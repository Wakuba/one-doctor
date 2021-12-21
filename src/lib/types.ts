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
  ruby: string
  gender: string
  isStudent: boolean
  favoDeparts: string[]
}

export interface SignUpDataForStudent extends SignUpData {
  grade: string
  university: string
  workplaceWishFor: string[]
  departmentWishFor: string[]
}

export interface SignUpDataForNotStudent extends SignUpData {
  departmentWishFor: string[]
  workplace: string
  workplaceWishFor: string[]
}

export interface SignUpDataForNotStudentWithUid
  extends SignUpDataForNotStudent {
  uid: string
}

export interface SignUpDataForStudentWithUid extends SignUpDataForStudent {
  uid: string
}

export interface SignUpAuthorizationDataWithImageId
  extends SignUpDataForNotStudent {
  certificationImageId: string
}

export interface SignUpAuthorizationDataWithImageUrl
  extends SignUpDataForNotStudent {
  certificationImageUrl: string
}

export interface LogInData {
  email: string
  password: string
}

export type odUserData =
  | SignUpDataForStudentWithUid
  | SignUpDataForNotStudentWithUid

export interface OdUserContext {
  odUser: User | null
  isLoading: boolean
  odUserData: odUserData
  signUp: ({ name, email, password, ...rest }: SignUpDataForStudent) => void
  logIn: ({ email, password }: LogInData) => Promise<void | User>
  logOut: () => Promise<void>
  sendPasswordResetEmailToUser: (email: string) => Promise<void>
}

export interface FormData {
  name: string
  email: string
  content: string
}
