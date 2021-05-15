import { Box } from '@fower/react'

const Card = ({ children }) => (
    <Box w-80 w-30--sm h-20 h-9--sm column toCenter border='2px' borderSolid borderMainBlueRich css={{ boxSizing: 'content-box'}} >
        <Box w='100%' h='70%' bgMainBlueRich coreFontSizeSM white grid css={{
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
