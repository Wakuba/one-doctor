/*
 * Import sanitize from 'sanitize-html';
 * import marked from 'marked'
 */

/*
 * Const sanitizedMarkdown = (data) => {
 *   return sanitize(marked(data), {
 *     allowedTags: sanitize.defaults.allowedTags.concat([
 *       'img'
 *     ])
 *   })
 * }
 */
import clsx from 'clsx'
import { ReactNode, VFC } from 'react'

type NewsLineProps = {
  key: number
  title: ReactNode
  children: ReactNode
}

const NewsLine: VFC<NewsLineProps> = ({ title, children }) => {
  return (
    <div className='grid grid-rows-1 sm:grid-cols-3 ov-md:grid-cols-5'>
      <div>
        <div
          className={clsx(
            'rounded text-white bg-prime-blue-rich col-span-1 w-5/6 px-2 py-1 breakAll',
            'sm:text-xs md:text-xs lg:text-xs ov-xl:text-sm',
            'flex items-center justify-center'
          )}
        >
          {title}
        </div>
      </div>
      <div className='sm:col-span-2 ov-md:col-span-4 text-xs leading-5 breakAll'>
        {' '}
        {children}{' '}
      </div>
    </div>
  )
}

export default NewsLine
