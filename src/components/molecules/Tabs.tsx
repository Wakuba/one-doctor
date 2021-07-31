import { Children, ReactNode, SetStateAction, useState } from 'react'
import TabButtons from '../molecules/TabButtons'

interface TabsProps {
  children?: ReactNode
}

export default function Tabs({ children }: TabsProps) {
  const [activeTab, setActiveTab] = useState('基本情報'),
    changeTab: (value: SetStateAction<string>) => void = (tab) => {
      setActiveTab(tab)
    }

  let content
  const buttons: string[] = []
  return (
    <>
      <TabButtons
        activeTab={activeTab}
        buttons={buttons}
        changeTab={changeTab}
      />
      {Children.map(children, (child: any) => {
        buttons.push(child.props.label)
        if (child.props.label === activeTab) content = child.props.children
      })}
      <div className="w-full rounded-sm border-t-4 border-solid shadow-md flex-col border-prime-blue-rich ">
        {content}
      </div>
    </>
  )
}
