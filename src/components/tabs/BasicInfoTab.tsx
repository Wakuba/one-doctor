// import Image from 'next/image'
import { BasicInfoTabType } from '../../lib/types'
interface BasicInfoTabPropsType {
  title: string
  basicInfo: BasicInfoTabType
}

const BasicInfoTab: React.VFC<BasicInfoTabPropsType> = ({
  title,
  basicInfo,
}) => (
  <div
    title={title}
    className='w-full ov-md:p-8 sm:p-4 bg-white flex flex-col items-start'
  >
    <div className='space-y-8'>
      <div>
        <div className='border-l-8 block bg-prime-blue-muted px-2 border-prime-blue-rich sm:text-sm ov-md:text-md font-medium'>
          研修カリキュラム
        </div>
        {basicInfo?.curriculum && <div>{basicInfo.curriculum}</div>}
        {/* <Image
            src={}
            layout='responsive'
            objectFit='cover'
            height={1000}
            width={800}
          /> */}
      </div>
      {/* <Image/> */}
      <div className='border-l-8 block bg-prime-blue-muted px-2 border-prime-blue-rich sm:text-sm ov-md:text-md font-medium'>
        主な進路
      </div>
      {basicInfo?.route && <div>{basicInfo.route}</div>}
      <div className='border-l-8 block bg-prime-blue-muted px-2 border-prime-blue-rich sm:text-sm ov-md:text-md font-medium'>
        取得可能な資格
      </div>
      {basicInfo?.licence && <div>{basicInfo.licence}</div>}
    </div>
  </div>
)

export default BasicInfoTab
