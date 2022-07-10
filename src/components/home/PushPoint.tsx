import { VFC } from 'react'

const PushPoint: VFC<{ children: JSX.Element[] }> = ({ children }) => {
  return (
    <div className='text-xs'>
      <p className='font-semibold'>{children[0]}</p>
      <p>{children[1]}</p>
    </div>
  )
}

export default PushPoint
