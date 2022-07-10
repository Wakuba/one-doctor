export interface FormDataType {
  name: string
  email: string
  content: string
}

export interface SignUpDataType {
  uid: string
  name: string
  email: string
  password: string
  ruby: string
  gender: string
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

export interface SignUpAuthorizationDataTypeDataWithImageId
  extends SignUpDataTypeForNotStudent {
  certificationImageId: string
}

export interface SignUpAuthorizationDataTypeDataWithImageUrl
  extends SignUpDataTypeForNotStudent {
  certificationImageUrl: string
}
