import EventKanban from '../molecules/EventKanban'
import { SpreadSheetDataType } from '../../lib/types'
import useSWR from 'swr'

export default function EventTab() {
  const { data, error } = useSWR(
    'https://script.google.com/macros/s/AKfycbzmrnZq2-7JaQLpE_AFenimwJIL2y1rIGNm6F4NgecKbLNUMWBI6IPmlOYV4VsJ71issw/exec'
  )
  if (error) return <div>failed to load</div>
  if (!data)
    return (
      <div className="w-full ov-md:p-8 sm:p-4 bg-white text-xl text-gray-500">
        loading...
      </div>
    )

  return (
    <div className="w-full ov-md:p-8 sm:p-4 bg-white">
      <div className="space-y-8">
        <div className="border-l-8 inline-block bg-prime-blue-muted px-2 border-prime-blue-rich sm:text-sm ov-md:text-md font-medium">
          イベント一覧
        </div>
        {data.map((event: SpreadSheetDataType, idx: number) => (
          <EventKanban
            key={idx}
            eventName={event['eventName']}
            date={event['date']}
            place={event['place']}
            detail={event['detail']}
          />
        ))}
      </div>
    </div>
  )
}
