import { Box } from '@fower/react'
import { ReactNode, FC } from 'react'

interface CardProps {
	children: ReactNode;
}

const Card: FC<CardProps> = ({ children }) => (
    <Box w-80 w-30--sm h-20 h-9--sm column toCenter border='2px' borderSolid css={{ borderMainBlueRich: 'true', boxSizing: 'content-box'}} >
        <Box w='100%' h='70%' coreFontSizeSM white grid css={{
						bgMainBlueRich: 'true',
            gridTemplate: `
            '.. ...... .. ....... ..' 2vw 
            '.. imgBox .. textBox ..' 10vw  
            '.. ...... .. ....... ..' 2vw/
            3vw 10vw 3vw auto 2vw
            `
        }}>
            <Box square-10 white css={{  gridArea: 'imgBox'}}>{children[0]}</Box>
            <Box toCenterY toLeft css={{ gridArea: 'textBox'}}>{children[1]}</Box>
        </Box>
        <Box w='100%' h='30%'  coreFontSizeSM toCenter>{children[2]}</Box>
    </Box>
)

export default Card
