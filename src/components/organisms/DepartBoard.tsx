import clsx from 'clsx'
import { OfficialWebSiteDataType } from '../../lib/types'
import DepartKanban from '../molecules/DepartKanban'
// Import { depList } from '../../../public/staticData'
interface DepartBoardPropsType {
  wsData: OfficialWebSiteDataType[]
}

const DepartBoard: React.VFC<DepartBoardPropsType> = ({ wsData }) => {
  console.log(wsData)
  return (
    <div className='w-full sm:overflow-x-auto sm:overflow-y-hidden md:overflow-x-auto md:overflow-y-hidden'>
      <div
        className={clsx(
          'sm:grid sm:grid-cols-4 sm:grid-flow-row sm:gap-6 sm:w-[900px]',
          'md:grid md:grid-cols-4 md:grid-flow-row md:gap-6 md:w-[1200px]',
          'lg:grid lg:grid-cols-3 lg:gap-6',
          'xl:grid xl:grid-cols-3 xl:gap-6',
          '2xl:grid 2xl:grid-cols-4 2xl:gap-8'
        )}
      >
         {wsData.map((data: OfficialWebSiteDataType, idx: number) => (
          <div key={idx + 1} className='flex justify-self-center self-center'>
            <DepartKanban pageUrl={data.url}>
              {data.departmentNameInJapanese}
            </DepartKanban>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DepartBoard
