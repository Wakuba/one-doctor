import { useState, FC, ReactNode } from 'react'
import TabButtons from '../molecules/TabButtons'
import { Box } from '@fower/react'

type TabsProps = {
  children?: ReactNode;
}

const Tabs: FC<TabsProps> = ({ children=['No data'] }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label)

  const changeTab = tab => {
    setActiveTab(tab);
  };

  let content;
  let buttons: string[] = [];

  return (
    <div>
      <TabButtons activeTab={activeTab} buttons={buttons} changeTab={changeTab} />
      {children.map(child => {
        buttons.push(child.props.label)
        if (child.props.label === activeTab) content = child.props.children
      })}
      <Box h='700px' w='100%' rounded--sm='2px' borderT='5px' borderSolid shadowMD column toCenterX css={{ borderMainBlueRich: 'true' }}>{content}</Box>
    </div>
  );
} 
export default Tabs
