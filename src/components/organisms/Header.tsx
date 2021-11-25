import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex justify-between sm:static sm:top-0 sm:bg-white ov-md:fixed ov-md:bg-transparent py-1.5 sm:h-20 ov-md:min-h-20  ov-md:h-[5vw] w-full flex-row z-50'>
      <Link href='/'>
        <div className='h-14'>
          <div className='relative h-12 w-32 '>
            <Image
              layout='fill'
              objectFit='contain'
              src='/images/onedoctor.png'
              alt='one doctor logo'
              loading='eager'
            />
          </div>
          <div className='text-xs pl-2 sm:text-prime-blue-rich ov-md:text-white'>
            筑波大学特設サイト
          </div>
        </div>
      </Link>
      <div className='flex items-center'>
        <Link href='/LogIn'>
      <a className='inline text-white bg-prime-blue-rich rounded px-4 mr-2 border-1 border-white'>ログイン</a>
        </Link>
      <Link href='/SignUpDashboard'>
      <a className='inline text-prime-blue-rich bg-white rounded px-4 mr-2 border-1 border-prime-blue-rich'>新規登録</a>
      </Link>
      </div>
    </header>
  )
}
