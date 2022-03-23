import { Cloudinary } from '@cloudinary/url-gen'
import Image from 'next/image'
import clsx from 'clsx'

interface EventKanbanPropsType {
  key: number
  name: string
  date: string
  place: string
  deadline: string
  details: string
  contact: string
  eventId: string
}

const EventKanban: React.VFC<EventKanbanPropsType> = ({
  name,
  date,
  place,
  deadline,
  details,
  contact,
  eventId,
}) => {
  console.log(eventId)
  const cld = new Cloudinary({ cloud: { cloudName: 'onedoctor' } })
  const image = cld.image(`samples/${eventId}`)
  image.format('auto').quality('auto')
  const imageUrl = image.toURL()

  console.log(imageUrl)
  return (
    <div>
      <div className='font-normal px-2 bg-prime-blue-pale inline-block'>
        {name}
      </div>
      <div className='w-full flex ov-md:flex-row sm:flex-col'>
        <div className='ov-md:w-1/5 sm:w-full pt-2 box-border'>
          <button
            className={clsx(
              'w-28 bg-prime-blue-rich rounded h-12 text-white text-sm cursor-pointer shadow-md border-[#5493AA] border-b-4 font-normal',
              'active:transfom active:translate-y-[2px] active:border-none'
            )}
          >
            参加申込みへ
          </button>
        </div>
        <div className='p-2 ov-md:w-7/12 sm:w-full'>
          <EventItem title='場所' content={place} />
          <EventItem title='日程' content={date} />
          <EventItem title='応募締め切り' content={deadline} />
          <EventItem title='詳細' content={details} />
          <EventItem title='お問い合わせ' content={contact} />
        </div>
        <div className='relative ov-md:p-2 sm:px-12 ov-md:w-5/12 sm:w-full'>
          <Image
            src={imageUrl}
            layout='responsive'
            objectFit='cover'
            height={1000}
            width={800}
          />
        </div>
      </div>
    </div>
  )
}

const EventItem: React.VFC<{ title: string; content: string }> = ({
  title,
  content,
}) => (
  <div className='flex flex-row mb-2'>
    <div className='w-24 text-sm font-normal inline '>{title}</div>
    <div className='w-full text-sm font-normal inline '>{content}</div>
  </div>
)

export default EventKanban
