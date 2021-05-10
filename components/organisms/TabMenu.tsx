import Tabs from '../molecules/Tabs'
import TabField from '../molecules/TabField'
import { Box } from '@fower/react'

const tabNameList: string[] = ['基本情報', '医局紹介', '周辺地図', 'イベント', 'SNS']

const TabMenu= () => (
  <Box>
    <Tabs>
      {tabNameList.map((tabButtonName, idx) =>
        <TabField label={tabButtonName} key={idx + 1}>
          <div>
            <p>{`TabField ${tabButtonName} content`}</p>
          </div>
        </TabField>
      )}
    </Tabs>
  </Box>
)


export default TabMenu
