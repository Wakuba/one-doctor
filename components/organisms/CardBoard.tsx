import Card from '../molecules/Card'
import { Box } from '@fower/react'

const CardBoard = () => (
    <Box  column toEvenly bgRed500 h-130 w-90 toCenterX bgWhite shadowDefault>
        <Box coreFontSizeSM w-50>イベントや見学に参加することで、 より詳しく知ることができます</Box>
        <Card>
            <Box >より詳細な臨床情報や 研究内容に触れてみましょう！</Box>
            <Box>診療科公式ホームページ</Box>
        </Card>
        <Card>
            <Box>最新の情報をチェックして みましょう！</Box>
            <Box>イベントページ</Box>
        </Card>
        <Card>
            <Box>あなたの希望するイベントを 開いてもらえるかも…？</Box>
            <Box>イベントの提案をする→</Box>
        </Card>
        <Card>
            <Box>自分だけの質問をしてみましょう！</Box>
            <Box>見学申し込みをする→</Box>
        </Card>
    </Box>
)

export default CardBoard