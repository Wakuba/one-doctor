import CrewCard from '../molecules/CrewCard'

export default function CrewBoard({ crewDataList }) {
  return (
    <div className='
    ov-xl:grid
    ov-xl:grid-cols-2
    ov-xl:gap-y-4
    lg:grid
    lg:grid-cols-2
    lg:gap-y-4
    md:flex
    md:flex-col
    md:items-center
    md:space-y-2
    sm:flex
    sm:flex-col
    sm:items-center
    sm:space-y-2
    w-full
    py-4'>
      {crewDataList.map(crewData => <CrewCard key={crewData.uniqueKey} crewData={crewData} />)}
    </div>
  )
}

