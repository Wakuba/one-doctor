import { VFC } from 'react'
import EventKanban from '../departments/EventKanban'

interface PastMyEventsTabPropsType {
  title: string
  data: {
    contact: string
    date: string
    deadline: string
    department: string
    details: string
    emailAdress: string
    eventId: string
    formUrl: string
    imageUrlOnDrive: string
    name: string
    phoneNumber: string
    place: string
    ssId: string
    supervisor: string
    timeStamp: string
    university: string
  }[]
}
const PastMyEventsTab: VFC<PastMyEventsTabPropsType> = ({ title, data }) => {
  const pastEvents = data.filter((d) => isPast(new Date(d.date)) === true)
  return (
    <div {...{ title, className: 'min-h-[100px] p-4' }}>
      {pastEvents.length !== 0 ? (
        pastEvents.map((d, key) => {
          const {
            contact,
            date,
            name,
            deadline,
            place,
            details,
            formUrl,
            eventId,
          } = d
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
        })
      ) : (
        <div className='w-full ov-md:p-8 sm:p-4 bg-white text-xl text-gray-500'>
          終了したイベントはありません
        </div>
      )}
    </div>
  )
}

export default PastMyEventsTab

const isPast = (eventDate: Date) => {
  const now = new Date()

  const eYear = eventDate.getFullYear()
  const nYear = now.getFullYear()
  if (eYear < nYear) return true
  else {
    const eMonth = eventDate.getMonth()
    const nMonth = now.getMonth()
    if (eMonth < nMonth) return true
    else {
      const eDate = eventDate.getDate()
      const nDate = now.getDate()
      console.log(eDate, nDate)
      if (eDate < nMonth) return true
      else return false
    }
  }
}
