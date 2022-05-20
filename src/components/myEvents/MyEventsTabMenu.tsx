import useSWR from 'swr'
import TabMenu from '../tabs/TabMenu'
import PastMyEventsTab from './PastMyEventsTab'
import PresentMyEventsTab from './PresentMyEventsTab'
import { auth } from '../../lib/firebase/firebase.config'
import { useSelector } from 'react-redux'
import { selectOdUserExData } from '../../features/userSlice'

const MyEventsTabMenu = () => {
  const curUser = auth.currentUser
  const odUserExData = useSelector(selectOdUserExData)
  let favoEventsQueryString = ''
  if (curUser) {
    const favoEvents = odUserExData.favoEvents
    const favoEventsQueryArray = favoEvents
      .map((event) => event.eventId)
      .filter((id) => id !== '')
    favoEventsQueryString = favoEventsQueryArray.reduce((acc, cur, idx) => {
      if (idx === 0) acc += `id_${idx}=${cur}`
      else acc += `&id_${idx}=${cur}`
      return acc
    }, '')
  }
  const { data } = useSWR(
    `https://script.google.com/macros/s/AKfycbzJNXMl1AjZAyXOjgOxasyhsT6Re6GuW6yMtYwmg-JX_qL6qSZWTGbCTUq-7gjx0tIj/exec?${favoEventsQueryString}`
  )
  console.log('data from spreadsheet', data)

  return (
    <TabMenu style={{ tabButtonStyle: 'h-10' }}>
      {data ? (
        <PresentMyEventsTab {...{ title: '参加予定イベント', data }} />
      ) : (
        <div
          title='参加予定イベント'
          className='w-full ov-md:p-8 sm:p-4 bg-white text-xl text-gray-500'
        >
          loading...
        </div>
      )}
      {data ? (
        <PastMyEventsTab {...{ title: '参加済みイベント', data }} />
      ) : (
        <div
          title='参加済みイベント'
          className='w-full ov-md:p-8 sm:p-4 bg-white text-xl text-gray-500'
        >
          loading...
        </div>
      )}
    </TabMenu>
  )
}

export default MyEventsTabMenu
