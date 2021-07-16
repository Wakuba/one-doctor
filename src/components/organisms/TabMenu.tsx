import Tabs from '../molecules/Tabs'
import TabField from '../molecules/TabField'
import { ReactNode } from 'react'

interface TabMenuPropsType {
  children: ReactNode[]
}

export default function TabMenu({ children }: TabMenuPropsType) {
  return (
    <div className="w-full">
      <Tabs>
        <TabField label="基本情報" key={1}>
          {children[0]}
        </TabField>
        <TabField label="局員紹介" key={2}>
          {children[1]}
        </TabField>
        <TabField label="周辺地図" key={3}>
          {children[2]}
        </TabField>
        <TabField label="イベント" key={4}>
          {children[3]}
        </TabField>
        <TabField label="SNS" key={5}>
          {children[4]}
        </TabField>
      </Tabs>
    </div>
  )
}
