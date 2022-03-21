export default function PushPoint({ children }: { children: JSX.Element[] }) {
  return (
    <div className='text-xs'>
      <p className='font-semibold'>{children[0]}</p>
      <p>{children[1]}</p>
    </div>
  )
}
