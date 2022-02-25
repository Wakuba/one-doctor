import axios from "axios";
// import { SignUpAuthorizationDataWithImageId } from "../type";

const postPreUserData = (data: any): void => {
  const preUserListGasApiUrl = 'https://script.google.com/macros/s/AKfycbyCppfP6zRT0wSXt87e19-yf5tXV40ZDq-gLWyBleGLAaZkCPoQDw2AEroodp-Zz2Mt/exec'
  console.log('url', preUserListGasApiUrl)
  console.log('data', data)
  const queryArray = []
  for (const prop in data) {
    const parameter = prop + '=' + data[prop]
    queryArray.push(parameter)
  }
  const queryString = queryArray.join('&')
  const encodedUri = encodeURI(`${preUserListGasApiUrl}?${queryString}`)
  axios.post(encodedUri).then(res => {console.log('axios成功', res), console.log(queryString, encodedUri)}).catch(e => {console.log('axios失敗', e), console.log(queryString, encodedUri)})
}

export default postPreUserData
