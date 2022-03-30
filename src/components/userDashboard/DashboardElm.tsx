import Link from 'next/link'

const DashboardElm: React.VFC<{ children: string; href: string }> = ({
  children,
  href,
}) => {
  return (
    <Link href={href}>
      <div className='h-[300px] max-w-[250px] min-w-[200px] rounded border-solid border-1 mb-4 shadow-md'>
        <div className='h-1/4 bg-prime-blue-rich text-white flex flex-col items-center justify-center'>
          {children}
        </div>
        <div className='bg-white h-3/4 '></div>
      </div>
    </Link>
  )
}

export default DashboardElm
