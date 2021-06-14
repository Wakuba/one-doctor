import Tabs from '../molecules/Tabs'
import TabField from '../molecules/TabField'
import CrewBoard from './CrewBoard'
import EventTab from './EventTab'
import { useEffect, useState } from 'react'

const TabMenu = () => {
  const [spreadsheetData, setSpreadsheetData] = useState([])

  useEffect(() => {
    fetch(
      'https://script.google.com/macros/s/AKfycbxdAlYVZE0aU-v7gW8pYyBqDd1_dc-3oC4b57_b86jxZfrAhk5z-8QOvvIV9FecXZsPEQ/exec',
      { method: "GET" }
    )
      .then(res => res.json())
      .then(data => { setSpreadsheetData(data) })
      .catch((e) => console.log(e))
  }, [])

  return (
    <div className='sm:w-11/12 ov-md:w-8/12'>
      <Tabs >
        <TabField label='基本情報' key={1}>
          <CrewBoard />
        </TabField>
        <TabField label='医局紹介' key={2}>
        </TabField>
        <TabField label='周辺地図' key={3}>
        </TabField>
        <TabField label='イベント' key={4}>
          <EventTab events={spreadsheetData} />
        </TabField>
        <TabField label='SNS' key={5}>
        </TabField>
      </Tabs>
    </div>
  )
}


export default TabMenu
