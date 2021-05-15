import Link from 'next/link'
import { styled } from '@fower/styled'
import { Box } from '@fower/react'
import { ReactNode, FC } from 'react'

interface FooterProps {
	isPageSmall: boolean;
}
 
const StyledList = styled('li',  'toCenter')

const Footer: FC<FooterProps> = ({ isPageSmall }) => {
  const StyledUnorderedLi = isPageSmall ? styled('ul', 'column', 'toCenterY') : styled('ul',  'row', 'toBetween') 
  return (
    <Box as='footer' h='192px' w='100%' white column toCenter css={{ backgroundColor: 'mainBlueRich'}}>
      <StyledUnorderedLi w='60vw' pl-0 css={{listStyle: 'none'}} >
        <StyledList >
          運営について
        </StyledList>
        <StyledList>
          利用規約
        </StyledList>
        <StyledList>
          <Link href='Inqueries'>
            <Box as='a' white css={{ textDecoration: 'none'}}>お問い合わせ</Box>
          </Link>
        </StyledList>
        <StyledList>
          <Link href='AboutUs'>
            <Box as='a' white css={{ textDecoration: 'none'}}> One Doctor とは</Box>
          </Link>
        </StyledList>
      </StyledUnorderedLi>
      <Box>コピーライト</Box>
    </Box>
  )
} 

export default Footer
