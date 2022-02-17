import DOMpurify from 'dompurify'
import clsx from 'clsx'

interface GeoInfoTabPropsType {
  gmIframe: string
  title: string
}
const GeoInfoTab: React.VFC<GeoInfoTabPropsType> = ({ gmIframe, title }) => {
  const cleanIframe = DOMpurify.sanitize(gmIframe)
  console.log(cleanIframe)
  return (
    <div
      title={title}
      className='w-full ov-md:p-8 sm:p-4 bg-white flex flex-col'
    >
      <div>
        <div className='border-l-8 block bg-prime-blue-muted px-2 border-prime-blue-rich sm:text-sm ov-md:text-md font-medium'>
          周辺地図
        </div>
        {gmIframe && (
          <div
            className={clsx(
              'relative',
              'after:absolute after:w-full after:h-[54px] after:bg-white after:z-50 after:top-0'
            )}
          >
            <div dangerouslySetInnerHTML={{ __html: gmIframe }} />
          </div>
        )}
      </div>
    </div>
  )
}

export default GeoInfoTab
