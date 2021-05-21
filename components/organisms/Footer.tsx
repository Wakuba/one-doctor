import Link from 'next/link'
import { FC, ReactNode } from 'react'

interface FooterProps {
	isPageSmall: boolean;
}
 
const StyledList = ({ children }: { children: ReactNode }) => (
  <li className='justify-center content-center'> { children } </li>
)

const Footer: FC<FooterProps> = ({ isPageSmall }) => {
  const StyledUnorderedLi = ({ children }: { children: ReactNode }) => ( 
    isPageSmall 
      ? <ul className='flex flex-col items-center list-none'>{ children }</ul> 
      : <ul className='flex-row '></ul>
  )
  return (
    <footer className='h-52 w-full text-white flex flex-col items-center bg-prime-blue-rich justify-evenly'>
      <StyledUnorderedLi>
        <StyledList >運営について</StyledList>
        <StyledList>利用規約</StyledList>
        <StyledList>
          <Link href='Inqueries'>
            <a className='text-white'>お問い合わせ</a>
          </Link>
        </StyledList>
        <StyledList>
          <Link href='AboutUs'>
            <a className='text-white'> One Doctor とは</a>
          </Link>
        </StyledList>
      </StyledUnorderedLi>
      <div>コピーライト</div>
    </footer>
  )
} 

export default Footer
