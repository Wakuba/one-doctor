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
  departmentNameInEnglish: string | null
  departmentNameInJapanese: string | null
}

interface universityNameType {
  universityNameInEnglish: string | null
  universityNameInJapanese: string | null
}

interface hospitalNameType {
  hospitalNameInEnglish: string | null
  hospitalNameInJapanese: string | null
}

interface topSectionType {
  educationalPoint: string | null
  clinicalPoint: string | null
  researchPoint: string | null
  otherPoint: string | null
}

interface crewCardListTabType {
  crewImgFileName: string | null
  crewName: string | null
  position: string | null
  background: string | null
  licence: string | null
  majorField: string | null
  schoolLife: string | null
  forFun: string | null
}

interface tabMenuType {
  basicInfoTab: string | null
  geographicalInformationTab: string | null
  crewCardListTab: crewCardListTabType | null
}

export interface depPostDataType {
  key: string
  officialWebSite: string | null
  departmentName: departmentNameType | null
  universityName: universityNameType | null
  hospitalName: hospitalNameType | null
  topSection: topSectionType | null
  tabMenu: tabMenuType | null
}
