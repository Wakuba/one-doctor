import { VFC } from 'react'
import EventKanban from '../departments/EventKanban'

interface PresentMyEventsTabPropsType {
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

const PresentMyEventsTab: VFC<PresentMyEventsTabPropsType> = ({
  title,
  data,
}) => {
  return (
    <div {...{ title, className: 'min-h-[100px] p-4' }}>
      {data ? (
        data.map((d, key) => {
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
          参加予定のイベントはありません
        </div>
      )}
    </div>
  )
}

export default PresentMyEventsTab
