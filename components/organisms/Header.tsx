import Link from 'next/link'
import { Box } from '@fower/react'
import React, { FC } from 'react'
import { styled } from '@fower/styled'
// 
type HeaderProps = {
  css?: any;
  className?: any;
}

const HeaderFlame: FC<HeaderProps> = ({css, ...className})=> {
  return (
  <Box as='header' {...className} h='12vw' maxH='66px' minH='55px' w='100%' top-0 flex fixed--sm static zIndex-99 bgTransparent--sm  css={{backgorundColor: 'white',...css}}> 
    <Link href='/'>
      <Box as='img' className='onedoctorLogo' src='images/onedoctor.png' alt='one doctor logo' />
    </Link>
  </Box>
  )
}

const Header = styled(HeaderFlame)

export default Header
