import CrewCard from '../molecules/CrewCard'

export default function CrewBoard({ crewDataList }) {
  return (
    <div className='
    w-full py-8
    sm:flex sm:flex-col sm:items-center sm:space-y-8
    md:flex md:flex-col md:items-center md:space-y-8
    lg:grid lg:grid-flow-row lg:grid-cols-2 lg:gap-8
    xl:grid xl:grid-flow-row xl:grid-cols-2 xl:gap-8
    2xl:grid 2xl:grid-flow-row 2xl:grid-cols-2 2xl:gap-8'>
      {crewDataList.map(crewData =>
        <>
          <CrewCard key={crewData.uniqueKey} crewData={crewData} />
          <CrewCard key={crewData.uniqueKey} crewData={crewData} />
          <CrewCard key={crewData.uniqueKey} crewData={crewData} />
          <CrewCard key={crewData.uniqueKey} crewData={crewData} />
          <CrewCard key={crewData.uniqueKey} crewData={crewData} />
        </>
      )}
    </div>
  )
}

