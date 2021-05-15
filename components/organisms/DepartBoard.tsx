import DepartKanban from '../molecules/DepartKanban'
import { Box } from '@fower/react'
import { FC } from 'react'

type DepartBoardProps = {
    css?: any;
    className?: any;
}

const depList: string[] = ['循環器', '消化器内科', '脳神経内科', '腎臓内科', '血液内科',
  'アレルギーリウマチ', '皮膚科', '泌尿器科', '脳神経外科', '心臓血管外科',
  '呼吸器外科', '消化器外科', '移植外科', '緩和ケア', '放射線',
  '総合診断科', '感染症科', '救急', '整形外科', '耳鼻咽喉科・頭頸部外科',
  '麻酔科', '眼科', '形成外科', '公衆衛生', '外傷外科']

const DepartBoard: FC<DepartBoardProps> = ({ css, ...className }) => {
  return (
    <Box m--sm='10vw' {...className} css={{ margin: '6vw', whiteSpace: 'nowrap', ...css}} >
        <Box fontsemibold white coreFontSizeLG>診療科一覧</Box>
        <Box w='100%' overflowX='auto' overflowY='hidden' overflowX-disable--sm overflowY-disable--sm>
            <Box w='1560px' space-3 w--sm='100%' py='3vw' flex flexWrap='wrap' row alignContent='flex-start' alignItems='center' justifyContent='flex-start' justifyContent--sm='space-between'>
                {depList.map((cur, idx) => <DepartKanban key={idx + 1} >{cur}</DepartKanban>)}
            </Box >
        </Box>
    </Box >
  )
}

export default DepartBoard
