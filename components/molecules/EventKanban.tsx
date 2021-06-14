

const EventKanban = ({ eventName, detail }) => (
  <div className='border-b border-black '>
    <div className=''>
      <div className='text-md font-medium'>{eventName}</div>
    </div>
    <div className='grid grid-cols-6'>
      <div className='text-sm col-span-1'>詳細</div>
      <div className='text-sm col-span-5'>{detail}</div>
    </div>
  </div>
)

export default EventKanban
