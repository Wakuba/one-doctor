import Tabs from './Tabs'
import TabField from './TabField'
import { ReactNode, Children, VFC } from 'react'

interface TabMenuPropsType {
  children: ReactNode[]
  style: { tabButtonStyle: string }
}

const TabMenu: VFC<TabMenuPropsType> = ({ children, style }) => {
  return (
    <div className='w-full'>
      <Tabs {...{ style }}>
        {Children.map(children, (child: any, idx: any) => {
          return (
            <TabField title={child.props.title} key={idx}>
              {child}
            </TabField>
          )
        })}
      </Tabs>
    </div>
  )
}

export default TabMenu
