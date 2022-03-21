import { SignUpAuthorizationDataTypeDataWithImageId } from '../types'

const postPreUserData = async (
  data: SignUpAuthorizationDataTypeDataWithImageId
) => {
  const {
    name,
    password,
    email,
    ruby,
    workplaceWishFor,
    departmentWishFor,
    workplace,
    gender,
    certificationImageId,
  } = data
  const cleansedData = {
    name,
    password,
    email,
    ruby,
    workplaceWishFor: workplaceWishFor.join('、 '),
    departmentWishFor: departmentWishFor.join('、 '),
    workplace,
    gender,
    certificationImageId,
  }
  const response = await fetch(
    'https://script.google.com/macros/s/AKfycbxUyoM4vm-XzlIk7s9aNpI03DHLKRdZ6xBUTfSGjUh5YSK3PuvhVvXpVtfkyFLago_fWA/exec',
    {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(cleansedData),
    }
  )
  return response
}

export default postPreUserData
