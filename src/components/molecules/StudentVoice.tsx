import clsx from 'clsx'

const StudentVoice: React.VFC = () => {
  return (
    <div
      className={clsx(
        'h-[380px] w-[300px] bg-white rounded-lg relative',
        'after:absolute after:bottom-[-60px] after:left-8 after:border-transparent after:border-t-[60px] after:border-[15px] after:border-solid after:border-t-white after:transform after:-rotate-30'
      )}
    ></div>
  )
}

export default StudentVoice
