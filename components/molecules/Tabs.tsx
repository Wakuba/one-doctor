import { useState, FC, ReactNode, Children, SetStateAction } from 'react'
import TabButtons from '../molecules/TabButtons'

interface TabsProps {
  children?: ReactNode; 
}

const Tabs: FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState('基本情報')

  const changeTab: (value: SetStateAction<string>) => void = tab => {
    setActiveTab(tab);
  };

  let content;
  let buttons: string[] = [];

  return (
    <>
      <TabButtons activeTab={activeTab} buttons={buttons} changeTab={changeTab} />
      {Children.map(children, (child: any ) => {
        buttons.push(child.props.label)
        if (child.props.label === activeTab) content = child.props.children
      })}
      <div className='w-full rounded-sm border-t-4 border-solid shadow-md flex-col border-prime-blue-rich h-96'>{content}</div>
    </>
  );
} 
export default Tabs
