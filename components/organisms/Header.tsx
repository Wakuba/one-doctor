import Link from 'next/link'
import React, { FC } from 'react'

type HeaderProps = {
}

const Header: FC<HeaderProps> = () => {
  return (
  <header className='h-20 w-full flex-row sm:static fixed top-0 z-50 sm:bg-tranparent bg-white py-1.5'> 
    <Link href='/' >
      <div className='h-14'>
        <img className='object-contain h-12' src='images/onedoctor.png' alt='one doctor logo' />
        <div className='text-xs pl-2 text-prime-blue-rich'>筑波大学特設サイト</div>
      </div>
    </Link>
  </header>
  )
}

export default Header
