import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { VFC } from 'react'
import HeaderMenuBar from './HeaderMenuBar'
import MyPageMenuBar from './MyPageMenuBar'

const Header: VFC = () => {
  const router = useRouter()
  return (
    <header className='flex justify-between sm:static sm:top-0 sm:bg-white ov-md:fixed ov-md:bg-transparent py-1.5 sm:h-20 ov-md:min-h-20  ov-md:h-[5vw] w-full flex-row z-50 pointer-events-none pr-6'>
      <Link href='/'>
        <div className='h-14 pointer-events-auto'>
          <div className='relative h-12 w-32 '>
            <Image
              layout='fill'
              objectFit='contain'
              src='/images/onedoctor.png'
              alt='one doctor logo'
              loading='eager'
            />
          </div>
          {/* <div className='text-xs pl-2 sm:text-prime-blue-rich ov-md:text-white'>
            筑波大学特設サイト
          </div> */}
        </div>
      </Link>
      {router.pathname === '/' && (
        <HeaderMenuBar layoutStyle='pointer-events-auto' />
      )}
      {[
        '/UserDashboard',
        '/FavoriteDepartment',
        '/BrowseStudentsVoices',
        '/MyEvents',
        '/MyRecord',
        '/UserProfile',
      ].some(
        (path) =>
          router.pathname === path || router.pathname.includes('/Departments')
      ) && <MyPageMenuBar />}
    </header>
  )
}

export default Header
