// import sanitize from 'sanitize-html';
// import marked from 'marked'

// const sanitizedMarkdown = (data) => {
//   return sanitize(marked(data), {
//     allowedTags: sanitize.defaults.allowedTags.concat([
//       'img'
//     ])
//   })
// }

import React, { ReactNode, FC } from 'react'

type NewsLineProps = {
  key: number;
  title: string;
  children?: ReactNode;
}

const NewsLine: FC<NewsLineProps> = ({ title, children }) => {
  return (
    <div className='grid grid-rows-1 grid-cols-3' >
      <div className=''> 
        <div className='rounded text-white bg-prime-blue-rich text-xs col-span-1 w-5/6 h-5 flex items-center justify-center' >
          { title }
        </div>
      </div>
      <div className='col-span-2 text-sm leading-5'> {children} </div>
    </div>
  )
}
export default NewsLine


      // dangerouslySetInnerHTML={{
      // __html: formatted
      // }}