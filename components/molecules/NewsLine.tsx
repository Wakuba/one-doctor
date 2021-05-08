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
import { Box } from '@fower/react'

type NewsLineProps = {
  key: number;
  title: string;
  children?: ReactNode;
}

const NewsLine: FC<NewsLineProps> = props => {
  return (
    <Box flex m='12px' coreFontSizeMD bgRed100>
      <Box h='20px' minW='75px' bgMainBlueRich white rounded='4px' mr='24px' pl='10px' pr='10px'  coreFontSizeSM >
        {props.title}
      </Box>
      <Box
      // dangerouslySetInnerHTML={{
      // __html: formatted
      // }}
      > {props.children} </Box>
    </Box>
  )
}
export default NewsLine

