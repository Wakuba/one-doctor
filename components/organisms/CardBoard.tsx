import Card from '../molecules/Card'
import { Box } from '@fower/react'

const CardBoard = () => (
    <Box  column toEvenly bgRed500 h-130 h-24--sm w-90 toCenterX bgWhite shadowMD>
        <Box coreFontSizeSM w-50 h='20%' column toEvenly>イベントや見学に参加することで、 より詳しく知ることができます</Box>
        <Box h='80%' column toBetween row--sm toLeft--sm>
            {/* <Box as='div' square-3 bgRed100/>
            <Box square-3 bgBlue100/>
            <Box square-3 bgAmber500/>
            <Box square-3 bgBlueGray500/> */}
            <Card>
                <Box as='img' square-10 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRblRIGlzjN4yNtqpF84R2Mcy-RXcPhAYloLg&usqp=CAU'/>
                <Box>より詳細な臨床情報や 研究内容に触れてみましょう！</Box>
                <Box>診療科公式ホームページ→</Box>
            </Card>
            <Card>
                <Box as='img' square-10 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRblRIGlzjN4yNtqpF84R2Mcy-RXcPhAYloLg&usqp=CAU'/>
                <Box>最新の情報をチェックして みましょう！</Box>
                <Box>イベントページ→</Box>
            </Card>
            <Card>
                <Box as='img' square-10 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRblRIGlzjN4yNtqpF84R2Mcy-RXcPhAYloLg&usqp=CAU'/>
                <Box>あなたの希望するイベントを 開いてもらえるかも…？</Box>
                <Box>イベントの提案をする→</Box>
            </Card>
            <Card>
                <Box as='img' square-10 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRblRIGlzjN4yNtqpF84R2Mcy-RXcPhAYloLg&usqp=CAU'/>
                <Box>自分だけの質問をしてみましょう！</Box>
                <Box>見学申し込みをする→</Box>
            </Card>
        </Box>
    </Box>
)

export default CardBoard
