import EventKanban from './EventKanban'
import { SpreadSheetDataType } from '../../lib/types'
import useSWR from 'swr'

interface EventTabPropsType {
  title: string
  univ: { universityNameInJapanese: string; universityNameInEnglish: string }
  dep: { departmentNameInJapanese: string; departmentNameInEnglish: string }
}

const EventTab: React.VFC<EventTabPropsType> = ({ title, univ, dep }) => {
  console.log(title, univ, dep)
  const { data } = useSWR(
    `https://script.google.com/macros/s/AKfycbwdR7YCQLfIbxqMKT0LDQ-ItFsJsP_pF0OUFMIbVYuTTWHdQYaTCqrmAzPRMrjeaMKe/exec?dep=${dep.departmentNameInJapanese}&univ=${univ.universityNameInJapanese}`
  )
  console.log('data', data)

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
        {data.map((event: SpreadSheetDataType, key: number) => {
          const {
            name,
            date,
            place,
            deadline,
            details,
            contact,
            eventId,
            formUrl,
          } = event
          return (
            <EventKanban
              key={key}
              {...{
                name,
                date,
                place,
                deadline,
                details,
                contact,
                eventId,
                formUrl,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default EventTab
