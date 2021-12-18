const DashboardElm = ({ children }) => {
  return (
    <div className='bg-pink-400 h-[300px] max-w-[250px] min-w-[200px] rounded border-solid border-1 shadow'>
      <div className='h-[100px] bg-prime-blue-rich flex flex-col items-center justify-center'>{children}</div>
      <div className=''></div>
    </div>
  )
}

export default DashboardElm
