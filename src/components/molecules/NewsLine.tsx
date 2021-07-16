// import sanitize from 'sanitize-html';
// import marked from 'marked'

// const sanitizedMarkdown = (data) => {
//   return sanitize(marked(data), {
//     allowedTags: sanitize.defaults.allowedTags.concat([
//       'img'
//     ])
//   })
// }

import { ReactNode } from 'react'

type NewsLineProps = {
  key: number;
  title: ReactNode;
  children: ReactNode;
}

export default function NewsLine({ title, children }: NewsLineProps) {
  return (
    <div className='grid grid-rows-1 sm:grid-cols-3 ov-md:grid-cols-5' >
      <div >
        <div className='rounded text-white bg-prime-blue-rich text-xs col-span-1 w-5/6 px-2 py-1 flex items-center justify-center breakAll' >
          {title}
        </div>
      </div>
      <div className='sm:col-span-2 ov-md:col-span-4 text-xs leading-5 breakAll'> {children} </div>
    </div>
  )
}


