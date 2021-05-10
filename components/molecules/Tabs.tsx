import { useState } from 'react'
import TabButtons from '../molecules/TabButtons'
import { Box } from '@fower/react'

type TabsProps = {
  children?: React.ReactNode;
  label?: string;
}

const Tabs: React.FC<TabsProps> = props => {
  const [activeTab, setActiveTab] = useState(props.children[1].props.label)

  const changeTab = tab => {
    setActiveTab(tab);
  };

  let content;
  let buttons: string[] = [];

  return (
    <div>
      <TabButtons activeTab={activeTab} buttons={buttons} changeTab={changeTab} />
      {props.children.map(child => {
        buttons.push(child.props.label)
        if (child.props.label === activeTab) content = child.props.children
      })}
      <Box h='700px' w='100%' rounded='4px' borderT='5px' borderSolid borderMainBlueRich >{content}</Box>
    </div>
  );
}

export default Tabs
