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
    uid,
  } = data
  const cleansedData = {
    uid,
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
    'https://script.google.com/macros/s/AKfycbweUv9YLuIfub3c3iVzC3fZVQEX4cUR5EZNMOyZzvLmYhoDL4agp6op-6-MUUPmzujYWQ/exec',
    {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(cleansedData),
    }
  )
  return response
}

export default postPreUserData
