import Link from 'next/link'
import { styled } from '@fower/styled'
import { Box } from '@fower/react'
import React, { ReactNode, FC} from 'react'
import { WIDTH_THRESHOLD } from '../../lib/variables'

type ResponsiveUlProps = {
  children?: ReactNode;
  className?: any;
}

const StyledList = styled('li', 'flex', 'toCenter','flex={1}')

const FooterFlame: FC<number> = ({ width }) => {

  const RespUnorderedList:React.FC<ResponsiveUlProps> = ({ children, ...className }) => {
    return (
    width < WIDTH_THRESHOLD 
      ? <Box as='ul' flex column toAround toCenterX {...className}>{children}</Box>
      : <Box as='ul' flex row toEvenly toCenterY {...className}>{children}</Box>
   )
  }
  
  return (
    <Box as='footer' h='192px' w='100%' bg='#5DB0D0' color='#fff' flex column toCenter>
      <RespUnorderedList w='60vw' pl-0 style={{ listStyle: 'none', fontSize: 'clamp(14px, 2.3vw, 18px)'}}>
        <StyledList >
          運営について
        </StyledList>
        <StyledList>
          利用規約
        </StyledList>
        <StyledList>
          <Link href='Inqueries'>
            <a style={{textDecoration:'none', color: '#fff'}}>お問い合わせ</a>
          </Link>
        </StyledList>
        <StyledList>
          One Doctor とは
        </StyledList>
      </RespUnorderedList>
      <Box>コピーライト</Box>
    </Box>
  )
}

const Footer = styled(FooterFlame)

export default Footer
