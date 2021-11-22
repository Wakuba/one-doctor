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

interface CrewCardListTabType {
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

// const data = {
// _fl_meta_: {
//   createdDate: { seconds: 1625216534, nanoseconds: 58000000 },
//   createdBy: 'JAJSWVA1tmPcw6e4pMjj37pMz6e2',
//   schema: 'departmentPage',
//   lastModifiedBy: 'JAJSWVA1tmPcw6e4pMjj37pMz6e2',
//   docId: '1AmrwL8lIGCgqdhAPfe4',
//   schemaRef: {
//     converter: null,
//     _key: [Object],
//     type: 'document',
//     firestore: [Object]
//   },
//   env: 'production',
//   fl_id: 'S7p4OjTzNHarqS4dkc31',
//   schemaType: 'collection',
//   locale: 'en-US',
//   lastModifiedDate: { seconds: 1633489130, nanoseconds: 740000000 }
// },
// order: 0,
// universityName: {
//   universityNameInJapanese: '筑波大学',
//   universityNameInEnglish: 'University of Tsukuba'
// },
// parentId: 0,
// hospitalName: {
//   hospitalNameInJapanese: '筑波大学附属病院',
//   hospitalNameInEnglish: 'University of Tsukuba Hospital'
// },
// topSection: {
//   otherPoint: '放射線診断医は、働き方の形態（場所・時間）が選べるので、出産や育児のある女性は働きやすい。男性でも自分の時間の有意義に使っている先生がいる。',
//   clinicalPoint: '科内カンファレンスや研究会などがあり、勉強している先生が多く、画像診断のレベルが高い。\n' +
//     'IVR（小外）ができると、どの病院にいっても頼りにされる。',
//   educationalPoint: '\n' +
//     'レジデントによく教えてくれる（教えたがり）。\n' +
//     '毎日夕方に何らかのカンファレンスがあるので、画像以外の情報も含めて勉強ができる。\n' +
//     '他の診療科との合同カンファレンスではレジデントが画像のプレゼンをするので、その準備を教官が教えてくれる。そのため、プレゼンのレベルは全国一だと思う。\n' +
//     '夕方以降は実質フリーの時間なので、勉強したい人は自分で勉強できる環境にある。\n',
//   researchPoint: '楽天メディカルが進めている光免疫療法の基礎的研究を進めており、今後は臨床的な観点からIVRの手技に応用したいと考えている。\n' +
//     'AIのプロジェクトが動き始めたところ。企業ともタイアップして研究を進めるので、コンピュータに興味のある人にはお薦め。'
// },
// id: '1AmrwL8lIGCgqdhAPfe4',
// officialWebSite: 'http://tsukuba-radiology.info/',
// tabMenu: {
//   basicInfoTab: { curriculum: 'なし' },
//   geographicalInformationTab: {
//     googleMapUrl: 'https://www.google.com/maps/d/u/0/viewer?mid=1O53RFLn7WkLQUuNDNxOFEAFQavU&ll=36.08986866128208%2C140.32583331375827&z=10'
//   },
//   crewCardListTab: [ [Object] ],
//   snsTab: {
//     twitterTimelineUrl: 'https://twitter.com/intent/tweet?screen_name=tkbradiol&ref_src=twsrc%5Etfw'
//   }
// },
// key: '放射線・IVR科',
// departmentName: {
//   departmentNameInEnglish: 'Radiology',
//   departmentNameInJapanese: '放射線科・IVR科'
// },
// heroImageOfTheDepartment: [
//   {
//     converter: null,
//     _key: [Object],
//     type: 'document',
//     firestore: [Object]
//   }
// ]
// }
// }
