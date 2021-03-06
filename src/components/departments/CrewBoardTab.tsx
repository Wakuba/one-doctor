import clsx from 'clsx'
import CrewCard from './CrewCard'
import { CrewCardListTabType } from '../../lib/types'

const CrewBoardTab = ({
  crewDataList,
  title,
}: {
  crewDataList: CrewCardListTabType[]
  title: string
}) => {
  return (
    <div
      title={title}
      className={clsx(
        'w-full py-8',
        'sm:flex sm:flex-col sm:items-center sm:space-y-8',
        'md:flex md:flex-col md:items-center md:space-y-8',
        'lg:grid lg:grid-flow-row lg:grid-cols-2',
        'xl:grid xl:grid-flow-row xl:grid-cols-2 xl:gap-8',
        '2xl:grid 2xl:grid-flow-row 2xl:grid-cols-2 2xl:gap-8'
      )}
    >
      {crewDataList.map((crewData: any) => (
        <>
          <CrewCard
            key={crewData.uniqueKey}
            crewData={crewData}
            layoutStyle='lg:mb-8'
          />
          <CrewCard
            key={crewData.uniqueKey}
            crewData={crewData}
            layoutStyle='lg:mb-8'
          />
          <CrewCard
            key={crewData.uniqueKey}
            crewData={crewData}
            layoutStyle='lg:mb-8'
          />
          <CrewCard
            key={crewData.uniqueKey}
            crewData={crewData}
            layoutStyle='lg:mb-8'
          />
          <CrewCard
            key={crewData.uniqueKey}
            crewData={crewData}
            layoutStyle='lg:mb-8'
          />
          <CrewCard
            key={crewData.uniqueKey}
            crewData={crewData}
            layoutStyle='lg:mb-8'
          />
        </>
      ))}
    </div>
  )
}

export default CrewBoardTab
