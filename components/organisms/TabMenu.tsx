import Tabs from '../molecules/Tabs'
import TabField from '../molecules/TabField'
import CrewBoard from './CrewBoard'

const TabMenu = () => (
  <div className='sm:w-11/12 ov-md:w-8/12'>
    <Tabs >
      <TabField label='基本情報' key={1}>
        <CrewBoard/>
      </TabField>
      <TabField label='医局紹介' key={2}>
      </TabField>
      <TabField label='周辺地図' key={3}>
      </TabField>
      <TabField label='イベント' key={4}>
      </TabField>
      <TabField label='SNS' key={5}>
      </TabField>
    </Tabs>
  </div>
)


export default TabMenu
