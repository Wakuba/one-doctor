import { VFC } from 'react'
// import useSWR from 'swr'

interface FavoDepInfoTabPropsType {
  title: string
}

const FavoDepInfoTab: VFC<FavoDepInfoTabPropsType> = ({ title }) => {
  return (
    <div title={title}>
      <div className=''>診療科からのお知らせ</div>
    </div>
  )
}

export default FavoDepInfoTab
