import { VFC } from 'react'
import { FavoDepDataType } from '../../lib/types'
import DepartKanban from '../home/DepartKanban'

const FavoDepBoard: VFC<{ favoDepList: FavoDepDataType[] }> = ({
  favoDepList,
}) => {
  return (
    <div className='flex flex-row flex-wrap space-x-4'>
      {favoDepList.length === 0 ? (
        <div className='h-40 w-full flex justify-center items-center font-semibold text-[#B7B7B7]'>
          現在お気に入りに登録している診療科はありません
        </div>
      ) : (
        favoDepList.map((dep, idx) => (
          <DepartKanban style='mb-4' key={idx} pageUrl={dep.favoDepUrl}>
            {dep.favoDepName.nameInJap}
          </DepartKanban>
        ))
      )}
    </div>
  )
}

export default FavoDepBoard
