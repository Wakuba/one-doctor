import { Box } from '@fower/react'

const Card = ({ children }) => (
    <Box w-80 h-20 column toCenter border='2px' borderSolid borderMainBlueRich >
        <Box w='100%' flex-7 bgMainBlueRich coreFontSizeSM white toCenterX>{children[0]}</Box>
        <Box w='100%' flex-3 coreFontSizeSM toCenterX>{children[1]}</Box>
    </Box>
)

export default Card