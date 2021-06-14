import EventKanban from '../molecules/EventKanban'


const EventTab = ({ events }) => (
  <div className='w-full ov-md:p-8 sm:p-4 bg-white'>
    {console.log(events)}
    <div className='space-y-8'>
      <div className='border-l-8 w-1/3 bg-prime-blue-muted border-prime-blue-rich ov-md:text-lg font-medium'>イベント一覧</div>
      {events.map((event, idx) =>
        <EventKanban
          key={idx}
          eventName={event['eventName']}
          date={event['date']}
          place={event['place']}
          detail={event['detail']} />)}
    </div>
  </div>
)


export default EventTab
