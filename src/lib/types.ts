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
  geographicalInformationTab: string
  snsTab: string
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
