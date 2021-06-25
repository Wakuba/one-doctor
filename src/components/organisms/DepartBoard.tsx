import DepartKanban from '../molecules/DepartKanban'
import { depList } from '../../../public/staticData'

export default function DepartBoard() {
  return (
    <div className='w-full sm:overflow-x-auto sm:overflow-y-hidden md:overflow-x-auto md:overflow-y-hidden ov-lg:flex ov-lg:flex-col ov-lg:items-center'>
      <div className='
      flex
      flex-row
      flex-wrap
      sm:w-for-scroll sm:justify-items-stretch
      md:w-for-scroll md:justify-items-stretch
      ov-lg:justify-strech ov-lg:w-full'>
        {depList.map((dep, idx) => <DepartKanban correspondedPage={dep.page} layoutStyle='sm:mr-4 sm:mb-4 ov-md:mb-8 ov-md:mr-3' key={idx + 1} >{dep.name}</DepartKanban>)}
      </div >
    </div>
  )
}
