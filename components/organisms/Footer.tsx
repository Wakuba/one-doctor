import Link from 'next/link'
import { FC, ReactNode } from 'react'

interface FooterProps {
	isPageSmall: boolean;
}
 
const StyledList = ({ children }: { children: ReactNode }) => (
  <li className='justify-center content-center'> { children } </li>
)

const Footer: FC<FooterProps> = ({ isPageSmall }) => {
  const StyledUnorderedLi = ({ children }: { children: ReactNode }) => ( isPageSmall 
    ? <ul className='flex-col justify-center content-center list-none'>{ children }</ul> 
    : <ul className='flex-row '></ul>
  )
  return (
    <footer className='h-12 w-full text-white flex-col bg-prime-blue-rich'>
      <StyledUnorderedLi>
        <StyledList >
          運営について
        </StyledList>
        <StyledList>
          利用規約
        </StyledList>
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
