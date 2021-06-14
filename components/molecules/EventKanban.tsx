interface EventKanbanPropsType {
  key: number;
  eventName: string;
  date: string;
  place: string;
  detail: string;
}

const EventKanban: React.FC<EventKanbanPropsType> = ({ eventName, date, place, detail }) => (
  <div className='border-b border-black '>
    <div className=''>
      <div className='text-md font-medium'>{eventName}</div>
    </div>
    <div className='grid grid-cols-6'>
      <div className='text-sm col-span-1'>日時</div>
      <div className='text-sm col-span-5'>{date}</div>
    </div>
    <div className='grid grid-cols-6'>
      <div className='text-sm col-span-1'>場所</div>
      <div className='text-sm col-span-5'>{place}</div>
    </div>
    <div className='grid grid-cols-6'>
      <div className='text-sm col-span-1'>詳細</div>
      <div className='text-sm col-span-5'>{detail}</div>
    </div>
  </div>
)

export default EventKanban
