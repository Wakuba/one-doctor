import Card from '../molecules/Card'

const CardBoard = () => (
    <div className='flex-col w-11/12 bg-white shadow-md'>
        <div className='flex-col text-xs'>イベントや見学に参加することで、 より詳しく知ることができます</div>
        <div className='h-4/5 flex-col'>
            <Card>
                <img className='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRblRIGlzjN4yNtqpF84R2Mcy-RXcPhAYloLg&usqp=CAU'/>
                <div>より詳細な臨床情報や 研究内容に触れてみましょう！</div>
                <div>診療科公式ホームページ→</div>
            </Card>
            <Card>
                <img className='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRblRIGlzjN4yNtqpF84R2Mcy-RXcPhAYloLg&usqp=CAU'/>
                <div>最新の情報をチェックして みましょう！</div>
                <div>イベントページ→</div>
            </Card>
            <Card>
                <img className='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRblRIGlzjN4yNtqpF84R2Mcy-RXcPhAYloLg&usqp=CAU'/>
                <div>あなたの希望するイベントを 開いてもらえるかも…？</div>
                <div>イベントの提案をする→</div>
            </Card>
            <Card>
                <img className='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRblRIGlzjN4yNtqpF84R2Mcy-RXcPhAYloLg&usqp=CAU'/>
                <div>自分だけの質問をしてみましょう！</div>
                <div>見学申し込みをする→</div>
            </Card>
        </div>
    </div>
)

export default CardBoard
