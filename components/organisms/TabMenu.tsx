import Tabs from '../molecules/Tabs'
import TabField from '../molecules/TabField'
import CrewBoard from './CrewBoard'
import EventTab from './EventTab'
// import { useEffect, useState } from 'react'



// const [spreadsheetData, setSpreadsheetData] = useState()
export default function TabMenu({ data }) {
  return (
    <div className='sm:w-11/12 ov-md:w-8/12'>
      <Tabs >
        <TabField label='基本情報' key={1}>
          <div className='border-l-8 w-1/3 bg-prime-blue-muted border-prime-blue-rich ov-md:text-lg font-medium'>研修カリキュラム</div>
        </TabField>
        <TabField label='医局紹介' key={2}>
          <CrewBoard />
        </TabField>
        <TabField label='周辺地図' key={3}>
        </TabField>
        <TabField label='イベント' key={4}>
          <EventTab events={data} />
        </TabField>
        <TabField label='SNS' key={5}>
        </TabField>
      </Tabs>
    </div>
  )
}



// useEffect(() => {
//   fetch(
//     'https://script.google.com/macros/s/AKfycbzmrnZq2-7JaQLpE_AFenimwJIL2y1rIGNm6F4NgecKbLNUMWBI6IPmlOYV4VsJ71issw/exec',
//     { method: "GET" }
//   )
//     .then(res => res.json())
//     .then(data => { setSpreadsheetData(data) })
//     .catch((e) => console.log(e))
// }, [])
// console.log(spreadsheetData)
