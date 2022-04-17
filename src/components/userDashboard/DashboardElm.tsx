import Link from 'next/link'
import Image from 'next/image'

const DashboardElm: React.VFC<{
  children: string
  href: string
  imageSrc: string
  title: string
}> = ({ children, href, imageSrc, title }) => {
  return (
    <Link href={href}>
      <div className='h-[300px] max-w-[250px] min-w-[200px] rounded border-solid border-1 mb-4 shadow-md'>
        <div className='h-1/4 bg-prime-blue-rich text-white flex flex-col items-center justify-center'>
          {children}
        </div>
        <div className='relative w-full h-full p-2'>
          <Image
            layout='responsive'
            // objectFit='responsive'
            loading='lazy'
            alt={title}
            src={imageSrc}
            width={228}
            height={256}
          />
        </div>
      </div>
    </Link>
  )
}

export default DashboardElm
