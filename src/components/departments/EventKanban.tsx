import { Cloudinary } from '@cloudinary/url-gen'
import Image from 'next/image'
import clsx from 'clsx'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { db } from '../../lib/firebase/firebase.config'
import { getAuth } from 'firebase/auth'
import Link from 'next/link'
import { useAuthProvider } from '../../lib/customHooks/useAuthProvider'
import { useEffect, useState } from 'react'

interface EventKanbanPropsType {
  name: string
  date: string
  place: string
  deadline: string
  details: string
  contact: string
  eventId: string
  formUrl: string
}

const EventKanban: React.VFC<EventKanbanPropsType> = (props) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const auth = useAuthProvider()
  useEffect(() => {
    const authFb = getAuth()
    const curUser = authFb.currentUser
    if (curUser) {
      const favoEvents = auth.odUserData.favoEvents
      const favoEventsIDs = favoEvents.map((event) => event.eventId)
      if (favoEventsIDs.includes(eventId)) setIsFavorite(true)
    }
  }, [])

  const { name, date, place, deadline, details, contact, eventId, formUrl } =
    props
  const cld = new Cloudinary({ cloud: { cloudName: 'onedoctor' } })
  const image = cld.image(`samples/${eventId}`)
  image.format('auto').quality('auto')
  const imageUrl = image.toURL()
  return (
    <div>
      <div className='font-normal px-2 bg-prime-blue-pale inline-block'>
        {name}
      </div>
      <div className='w-full flex ov-md:flex-row sm:flex-col'>
        <div className='ov-md:w-1/5 sm:w-full pt-2 box-border'>
          {formUrl && isFavorite === false ? (
            <Link href={formUrl}>
              <a
                target='_blank'
                onClick={() => {
                  updateFavoEvents({
                    name,
                    date,
                    place,
                    deadline,
                    details,
                    contact,
                    eventId,
                  })
                }}
                className={clsx(
                  'flex w-28 items-center justify-center bg-prime-blue-rich rounded h-12 text-white text-sm cursor-pointer shadow-md border-[#5493AA] border-b-4 font-normal',
                  'active:transfom active:translate-y-[2px] active:border-none'
                )}
              >
                参加申込みへ
              </a>
            </Link>
          ) : (
            <div className='w-28 h-12 bg-gray-400 text-white rounded flex items-center justify-center text-sm shadow-md font-normal'>
              申し込み済み
            </div>
          )}
          {/* <div className='w-28 h-12 bg-gray-400 text-white rounded flex items-center justify-center text-sm shadow-md font-normal'>
            参加申し込みへ
          </div> */}
        </div>
        <div
          className={`p-2 ${
            imageUrl ? 'ov-md:w-7/12' : 'ov-md:w-full'
          } sm:w-full`}
        >
          <EventItem title='場所' content={place} />
          <EventItem title='日程' content={date} />
          <EventItem title='応募締め切り' content={deadline} />
          <EventItem title='詳細' content={details} />
          <EventItem title='お問い合わせ' content={contact} />
        </div>
        {imageUrl && (
          <div className='relative ov-md:p-2 sm:px-12 ov-md:w-5/12 sm:w-full'>
            <Image
              src={imageUrl}
              layout='responsive'
              objectFit='cover'
              height={1000}
              width={800}
            />
          </div>
        )}
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

const updateFavoEvents = (favoEventData) => {
  const auth = getAuth()
  const curUser = auth.currentUser
  if (curUser) {
    const ref = doc(db, 'odUsers', curUser.uid)
    updateDoc(ref, { favoEvents: arrayUnion({ ...favoEventData }) })
  }
}
