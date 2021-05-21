import { useState, FC, ReactNode, Children } from 'react'
import TabButtons from '../molecules/TabButtons'

interface TabsProps {
  children?: ReactNode; 
}

//children[0].props.label

const Tabs: FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState([])

  const changeTab = (tab: any): void => {
    setActiveTab(tab);
  };

  let content;
  let buttons: string[] = [];

  return (
    <div>
      <TabButtons activeTab={activeTab} buttons={buttons} changeTab={changeTab} />
      {Children.map(children, (child: any ) => {
        buttons.push(child.props.label)
        if (child.props.label === activeTab) content = child.props.children
      })}
      <div className='w-full rounded-sm border-t-4 border-solid shadow-md flex-col border-prime-blue-rich'>{content}</div>
    </div>
  );
} 
export default Tabs
