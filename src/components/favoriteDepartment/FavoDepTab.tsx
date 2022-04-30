import { VFC } from 'react'
import FavoDepBoard from './FavoDepBoard'
import { FavoDepDataType } from '../../lib/types'

interface FavoTabPropsType {
  title: string
  favoDepList: FavoDepDataType[]
}

const FavoDepTab: VFC<FavoTabPropsType> = ({ title, favoDepList }) => {
  return (
    <div {...{ title, className: 'min-h-[100px] p-4' }}>
      <p className='text-prime-blue-rich font-semibold'>お気に入り診療科一覧</p>
      <FavoDepBoard {...{ favoDepList }} />
    </div>
  )
}

export default FavoDepTab
