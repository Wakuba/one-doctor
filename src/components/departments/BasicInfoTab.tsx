// import Image from 'next/image'
interface BasicInfoTabPropsType {
  title: string
  basicInfo: any
}

const BasicInfoTab: React.VFC<BasicInfoTabPropsType> = ({
  title,
  basicInfo,
}) => {
  return (
    <div
      title={title}
      className='w-full ov-md:p-8 sm:p-4 bg-white flex flex-col items-start'
    >
      <div className='space-y-8'>
        {/* <div>
        <div className='border-l-8 block bg-prime-blue-muted px-2 border-prime-blue-rich sm:text-sm ov-md:text-md font-medium'>
          研修カリキュラム
        </div>
        {basicInfo?.curriculum && <div>{basicInfo.curriculum}</div>}
      </div>
      <div className='border-l-8 block bg-prime-blue-muted px-2 border-prime-blue-rich sm:text-sm ov-md:text-md font-medium'>
        主な進路
      </div>
      {basicInfo?.route && <div>{basicInfo.route}</div>}
      <div className='border-l-8 block bg-prime-blue-muted px-2 border-prime-blue-rich sm:text-sm ov-md:text-md font-medium'>
        取得可能な資格
      </div>
      {basicInfo?.licence && <div>{basicInfo.licence}</div>} */}
        <div dangerouslySetInnerHTML={{ __html: basicInfo }} />
      </div>
    </div>
  )
}

export default BasicInfoTab
