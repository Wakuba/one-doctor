import { VFC } from 'react'
import Footer from '../components/UIAtoms/Footer'
import Header from '../components/UIAtoms/Header'
// .lds-roller {
//   display: inline-block;
//   position: relative;
//   width: 80px;
//   height: 80px;
// }
// .lds-roller div {
//   animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
//   transform-origin: 40px 40px;
// }
// .lds-roller div:after {
//   content: " ";
//   display: block;
//   position: absolute;
//   width: 7px;
//   height: 7px;

const Loading: VFC = () => {
  return (
    <>
      <Header />
      <div className='fixed top-0 left-0 h-full w-full bg-prime-blue-pale z-60 bg-opacity-10 backdrop-filter backdrop-blur pointer-events-none'></div>
      <div className='fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex justify-center z-60'>
        <div className='animate-ping h-8 w-8 bg-prime-blue-rich rounded-full'></div>
        <div className='animate-ping h-8 w-8 bg-prime-blue-rich rounded-full mx-8'></div>
        <div className='animate-ping h-8 w-8 bg-prime-blue-rich rounded-full'></div>
      </div>
      <Footer layoutStyle='fixed bottom-0 left-0' />
    </>
  )
}

export default Loading
