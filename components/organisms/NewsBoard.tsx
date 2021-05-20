import React, { FC } from 'react'
import { Box } from '@fower/react' 
import NewsLine from '../molecules/NewsLine'

type NewsBoardProps = {
  content: any;
  css: any;
  className?: any;
}
 
const NewsBoard: FC<NewsBoardProps> = ({content, css, ...className}) => {
  return (
    <Box {...className} css={{...css}}> 
      <Box className='title' mb-3 css={{ coreFontSizeMD: 'true' }}>NEWS</Box>
      <Box as='p' className='desc' mt='3px' css={{ coreFontSizeMD: 'true' }}>イベントや説明会の情報をお知らせします。</Box>
      <Box flex column toEvenly bgWhite rounded='4px' shadowMD>
        {content.map((news: any, idx: number) => <NewsLine key={idx + 1} title={news.title} css={{m: '10px','.eventDetail': { color: 'black'}}}>{news.article}</NewsLine>)}
      </Box>
    </Box>
  )
}

export default NewsBoard

