import { useState, FC, ReactNode } from 'react'
import TabButtons from '../molecules/TabButtons'
import { Box } from '@fower/react'

type TabsProps = {
  children?: ReactNode;
  label?: string;
}

const Tabs: FC<TabsProps> = props => {
  const [activeTab, setActiveTab] = useState(props.children[0].props.label)
  console.log(props.children[0])

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
      <Box h='700px' w='100%' rounded--sm='2px' borderT='5px' borderSolid borderMainBlueRich shadowMD column toCenterX>{content}</Box>
    </div>
  );
}

export default Tabs
