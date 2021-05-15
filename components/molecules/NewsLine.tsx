// import sanitize from 'sanitize-html';
// import marked from 'marked'

// const sanitizedMarkdown = (data) => {
//   return sanitize(marked(data), {
//     allowedTags: sanitize.defaults.allowedTags.concat([
//       'img'
//     ])
//   })
// }

import React, { ReactNode, FC, ReactElement } from 'react'
import { Box } from '@fower/react'

type NewsLineProps = {
  key: number;
  title: string;
  children?: ReactNode;
  css: any; 
}

const NewsLine: FC<NewsLineProps> = ({ title, children, css}) => {
  return (
    <Box flex css={{...css}}>
      <Box flex-3 className='eventName' column toTop toLeft>
        <Box inlineBlock rounded='4px' pl='8px' pr='8px' white css={{ backgroundColor: 'mainBlueRich', coreFontSizeSM: 'true' }}>
          {title}
        </Box>
      </Box>
      <Box flex-6 flex-7--sm flex-17--md className='eventDetail coreFontSizeSM'
      // dangerouslySetInnerHTML={{
      // __html: formatted
      // }}
      > {children} </Box>
    </Box>
  )
}
export default NewsLine

