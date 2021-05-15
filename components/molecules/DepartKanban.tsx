import Link from 'next/link'
import { ReactNode, FC } from 'react'
import { Box } from '@fower/react'

type DepartKanbanProps = {
  key: number;
  children: ReactNode;
  departPage?: string;
  css?: any; 
}
const DepartKanban: FC<DepartKanbanProps> = ({ children, departPage, css, ...className})=> {
  return (
    <Link href='EachDepart'>
    <Box
      {...className}
      bg='white'
      rounded='3px'
      h='12.3vw'
      maxH='75px'
      minH='39px'
      w='50vw'
      minW='39px'
      maxW='300px'
      row
      toCenterY
			shadowMD
      border='0.5px solid #707070'
      css={{
          ...css,
      }}
    >
        <Box as='img' square='clamp(27px, 8.5vw, 52px)' ml='13.5%' mr='13.5%'  border='0.3px' borderSolid bgBlack css={{ borderNormShadeColor: 'true', gridArea: 'imageBox'}} />
        <Box toCenter css={{coreFontSizeSM: 'true', gridArea: 'departName'}}>{children}</Box>
      </Box>
    </Link>
  )
}

export default DepartKanban
