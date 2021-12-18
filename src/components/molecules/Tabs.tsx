import { Children, ReactNode, useState } from 'react'
import TabButtons from '../molecules/TabButtons'

interface TabsProps {
  children?: ReactNode
}

export default function Tabs({ children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0),
    changeTab: (value: number) => void = (tabNum) => {
      setActiveTab(tabNum)
    }

  let content: ReactNode
  const buttons: { tabIdx: number; title: string }[] = []
  return (
    <>
      <TabButtons
        activeTab={activeTab}
        buttons={buttons}
        changeTab={changeTab}
      />
      {Children.toArray(children).map((child: any, key: number) => {
        buttons.push({ tabIdx: key, title: child.props.title })
        if (key === activeTab) content = child.props.children
      })}
      <div className='w-full rounded-sm border-t-4 border-solid shadow-md flex-col border-prime-blue-rich '>
        {content}
      </div>
    </>
  )
}
