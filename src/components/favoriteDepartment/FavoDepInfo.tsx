import { VFC } from 'react'
import useSWR from 'swr'

interface FavoDepInfoTabPropsType {
  title: string
}

const FavoDepInfoTab: VFC<FavoDepInfoTabPropsType> = ({ title }) => {
  const { data } = useSWR(
    `https://script.google.com/macros/s/AKfycbyxgL2QQoiLg3vSFnBzm0pPkZ2-S81l1UdvBVYMcZlAfVJ3k5y5zbzSSEOQOQR6_-av/exec?dep=小児外科&univ=筑波大学`
  )
  console.log('datafromss', data)
  return (
    <div title={title}>
      <div className=''>診療科からのお知らせ</div>
    </div>
  )
}

export default FavoDepInfoTab
