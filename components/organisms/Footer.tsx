import Link from 'next/link'
import { ReactNode } from 'react'

 
const StyledList = ({ children }: { children: ReactNode }) => (
  <li className='justify-center content-center'> { children } </li>
)
const StyledUnorderedLi = ({ children }: { children: ReactNode }) => ( 
  <ul className='flex sm:flex-col sm:items-center ov-md:space-x-6 list-none '>{ children }</ul> 
)

const Footer = () => {
  return (
    <footer className='h-52 w-full text-white flex flex-col items-center bg-prime-blue-rich justify-evenly'>
      <StyledUnorderedLi>
        <StyledList >運営について</StyledList>
        <StyledList>利用規約</StyledList>
        <StyledList>
          <Link href='/Inqueries'>
            <a className='text-white'>お問い合わせ</a>
          </Link>
        </StyledList>
        <StyledList>
          <Link href='/AboutUs'>
            <a className='text-white'> One Doctor とは</a>
          </Link>
        </StyledList>
      </StyledUnorderedLi>
      <div>コピーライト</div>
    </footer>
  )
} 

export default Footer
