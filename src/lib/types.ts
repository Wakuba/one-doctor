import { User } from '@firebase/auth'

export interface SpreadSheetDataType {
  timeStamp: string
  date: string
  department: string
  details: string
  name: string
  place: string
  university: string
  contact: string
  emailAdress: string
  supervisor: string
  phoneNumber: string
  imageUrlOnDrive: string
  eventId: string
  ssId: string
  formUrl: string
  deadline: string
  // タイムスタンプ	診療科	イベント名	イベント日時	開催場所	イベント詳細	大学名	問い合わせ先	メールアドレス	イベント責任者	電話番号	イベント画像	イベントID	SSID	formUrl
  // const keyNameArray = ['timeStamp', 'department', 'name', 'date', 'place', 'details',
  // 'university', 'contact', 'emailAdress', 'supervisor', 'phoneNumber', 'imageUrlOnDrive', 'eventId', 'ssId', 'formUrl']
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

export interface BasicInfoTabType {
  curriculum?: string
  curriculumImgUrl?: string
  route?: string
  licence?: string
  others?: string
  othersImgUrl?: string
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
  basicInfoTab: BasicInfoTabType
  geographicalInformationTab: {
    googleMapIframe: RegExpMatchArray | string
    geographicalInformationDescription: string
  }
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

export interface SignUpDataType {
  name: string
  email: string
  password: string
  ruby: string
  gender: string
  isStudent: boolean
  favoDeparts: string[]
  favoEvents: string[]
}

export interface SignUpDataTypeForStudent extends SignUpDataType {
  grade: string
  university: string
  workplaceWishFor: string[]
  departmentWishFor: string[]
}

export interface SignUpDataTypeForNotStudent extends SignUpDataType {
  departmentWishFor: string[]
  workplace: string
  workplaceWishFor: string[]
}

export interface SignUpDataTypeForNotStudentWithUid
  extends SignUpDataTypeForNotStudent {
  uid: string
}

export interface SignUpDataTypeForStudentWithUid
  extends SignUpDataTypeForStudent {
  uid: string
}

export interface SignUpAuthorizationDataTypeDataWithImageId
  extends SignUpDataTypeForNotStudent {
  certificationImageId: string
}

export interface SignUpAuthorizationDataTypeDataWithImageUrl
  extends SignUpDataTypeForNotStudent {
  certificationImageUrl: string
}

export interface LoginDataType {
  email: string
  password: string
}

export type odUserDataType =
  | SignUpDataTypeForStudentWithUid
  | SignUpDataTypeForNotStudentWithUid

export interface odUserContextType {
  odUser: User | null
  isLoading: boolean
  odUserData: odUserDataType
  signUp: ({ name, email, password, ...rest }: SignUpDataTypeForStudent) => void
  logIn: ({ email, password }: LoginDataType) => Promise<void | User>
  logOut: () => Promise<void>
  sendPasswordResetEmailToUser: (email: string) => Promise<void>
}

export interface FormDataType {
  name: string
  email: string
  content: string
}

export interface OfficialWebSiteDataType {
  universityNameInJapanese: string
  departmentNameInJapanese: string
  url: string
}

export interface newVideoDataType {
  title: string
  videoUrl: string
  thumbnailUrl: string
}

export interface depPathDataType {
  id: string
  path: string
  depName: string
}

export interface voiceDataType {
  contributor: string
  contents: string
  departmentNameInJapanese: string
  universityNameInJapanese: string
}
