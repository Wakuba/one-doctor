import Link from 'next/link'
import React, { FC } from 'react'

export default function Header() {
  return (
    <header className={`
    sm:static
    sm:top-0
    sm:bg-white
    ov-md:fixed
    ov-md:bg-transparent
    py-1.5
    h-20
    w-full
    flex-row
    z-50`}>
      <Link href='/' >
        <div className='h-14'>
          <img className='object-contain h-12' src='images/onedoctor.png' alt='one doctor logo' />
          <div className='text-xs pl-2 sm:text-prime-blue-rich ov-md:text-white'>筑波大学特設サイト</div>
        </div>
      </Link>
    </header>
  )
}
