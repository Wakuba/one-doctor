import { Box } from '@fower/react'
import { styled } from '@fower/styled'

type TabButtonsProps = {
  buttons: string[];
  changeTab: any;
  activeTab: any;
}

const TabButtons: React.FC<TabButtonsProps> = ({buttons, changeTab, activeTab}) => {
  const PreStyledButton = styled('button', { h:'8vw', minHeight: '30px', w:'16vw', minWidth: '60px', coreFontSizeSM: 'true' ,color: 'white', roundedT:'4px', boxShadow:'0px 0px 20px #00000034', cursor: 'pointer', backgroundColor: '#5DB0D065'})
  return (
    <Box toEvenly>
      {buttons.map(button =>
        button === activeTab 
          ? <PreStyledButton css={{ backgroundColor: 'mainBlueRich'}}  onClick={() => changeTab(button)}>{button}</PreStyledButton>
          : <PreStyledButton onClick={() => changeTab(button)}>{button}</PreStyledButton>
      )}
    </Box>
  )
}
export default TabButtons
