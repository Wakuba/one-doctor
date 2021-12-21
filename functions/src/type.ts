export interface FormData {
  name: string
  email: string
  content: string
}

export interface SignUpData {
  name: string
  email: string
  password: string
  ruby: string
  gender: string
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

export interface SignUpDataForStudentWithUid {
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
