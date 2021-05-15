import { Box } from '@fower/react' 

type TabButtonsProps = { 
	buttons: string[];
  changeTab: any;
  activeTab: any;
}

const TabButtons: React.FC<TabButtonsProps> = ({buttons, changeTab, activeTab}) => {
  return (
    <Box toLeft ml-1 spaceX-1>
      {buttons.map((button, idx) =>
           <Box as='button' key={idx} h-8 minH='30px' w-16 minW='60px' white roundedT='3px' cursorPointer bg={ button === activeTab ? 'mainBlueRich' : '#5DB0D065'}  onClick={() => changeTab(button)} css={{ coreFontSize: 'true' }}>{button}</Box >
      )}
    </Box>
  )
}
export default TabButtons
