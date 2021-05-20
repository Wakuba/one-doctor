import Tabs from '../molecules/Tabs'
import TabField from '../molecules/TabField'
import { Box } from '@fower/react'
import CrewCard from '../molecules/CrewCard'
import { FC } from 'react'

interface TabMenuProps {
	css?: any;
	className?: any;
}


const TabMenu: FC<TabMenuProps> = ({ css, ...className}) => (
  <Box {...className} css={{...css}}>
    <Tabs >
      <TabField label='基本情報' key={1}>
        <CrewCard imgHeadSrc='images/professor.png' imgTailSrc='images/professor2.png'/>
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
  </Box>
)


export default TabMenu
