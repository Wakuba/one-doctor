import { Box } from '@fower/react'
import { FC } from 'react'

interface CardProps {
	children?: any;
}

const Card: FC<CardProps> = ({ children }) => (
    <Box w-80 w-30--sm h-20 h-9--sm column toCenter border='2px' borderSolid css={{ borderMainBlueRich: 'true', boxSizing: 'content-box'}} >
        <Box w='100%' h='70%' white grid css={{
						coreFontSizeSM: 'true',
						bgMainBlueRich: 'true',
            gridTemplate: `
            '.. ...... .. ....... ..' 2vw 
            '.. imgBox .. textBox ..' 10vw  
            '.. ...... .. ....... ..' 2vw/
            3vw 10vw 3vw auto 2vw
            `
        }}>
            <Box square-10 white css={{  gridArea: 'imgBox'}}>{ children ? children[0] : 'No data'}</Box>
            <Box toCenterY toLeft css={{ gridArea: 'textBox'}}>{children[1]}</Box>
        </Box>
        <Box w='100%' h='30%' toCenter css={{ coreFontSizeSM: 'true' }}>{children[2]}</Box>
    </Box>
)

export default Card
