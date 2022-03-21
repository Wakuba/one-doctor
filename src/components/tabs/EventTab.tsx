import EventKanban from '../departments/EventKanban'
import { SpreadSheetDataType } from '../../lib/types'
import useSWR from 'swr'
import { useEffect, useState } from 'react'

interface EventTabPropsType {
  title: string
  dep: string
  univ: string
}

const EventTab: React.VFC<EventTabPropsType> = ({ title, dep, univ}) => {
  const { data, error } = useSWR(
    // `https://script.google.com/macros/s/AKfycbyiGZnlA_4tgcPB6hSSvpnFQp-jdVWSFiWoOtFivgjvARqSOF3A-FjbLdEL8qI2SEof/exec?dep=${dep}&univ=${univ}`
    // 'https://script.google.com/macros/s/AKfycbwIE5xLmREZ6vdmqdq32pYK1cU8zUC1z_c9wNBnI08qPkf1UENLRfdcYyZqZ0dJqSvj/exec?dep=脳神経内科&univ=自治医科大学'
    `https://script.google.com/macros/s/AKfycbxQMk4uAkG3t5pvphisYhqA674ZRqEooSwSWC0QQqSYJ8vCtExUsVPlWcMfd4IPaVeR/exec?dep=小児外科&univ=筑波大学`
  )

  console.log(data)
  console.log('Spreadsheet Web API error', error)
  if (!data)
    return (
      <div className='w-full ov-md:p-8 sm:p-4 bg-white text-xl text-gray-500'>
        loading...
      </div>
    )

  return (
    <div title={title} className='w-full ov-md:p-8 sm:p-4 bg-white'>
      <div className='space-y-8'>
        <div className='border-l-8 inline-block bg-prime-blue-muted px-2 border-prime-blue-rich sm:text-sm ov-md:text-md font-medium'>
          イベント一覧
        </div>
        {data.map((event: SpreadSheetDataType, idx: number) => (
          <EventKanban
            key={idx}
            name={event.name}
            date={event.date}
            place={event.place}
            deadline={event.deadline}
            details={event.details}
            contact={event.contact}
            eventId={event.eventId}
          />
        ))}
      </div>
    </div>
  )
}

export default EventTab
