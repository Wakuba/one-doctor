import { Box } from '@fower/react'

interface TagProps {
  children: React.ReactNode;
  className?: any;
}

const Tag: React.FC<TagProps> = ({ children, ...className}) => (
  <Box bgWhite h='5vw' w='30vw' toCenter rounded='4px' shadowDefault coreFontSizeSM {...className}> {children} </Box>
)


export default Tag
