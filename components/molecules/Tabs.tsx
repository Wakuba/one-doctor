import { useState, FC, ReactNode, Children } from 'react'
import TabButtons from '../molecules/TabButtons'
import { Box } from '@fower/react'

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
      <Box h='700px' w='100%' rounded--sm='2px' borderT='5px' borderSolid shadowMD column toCenterX css={{ borderMainBlueRich: 'true' }}>{content}</Box>
    </div>
  );
} 
export default Tabs
