import { div } from '@fower/react'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import { useContext } from 'react'
import { RichBlueTLSquare } from '../lib/StyledComponents'
import ScreenWidthContext from '../contexts/ScreenWidthContext'

const AboutUs = () => {
    const isPageSmall = useContext(ScreenWidthContext)
    return(
        <div>
            <Header />
            <main className='relative'> 
                <div className=' rounded-br-full bg-prime-blue-rich'>
                    <div className='text-white text-lg'>ABOUT US</div >
                    <div className='shadow-md'> キャッチコピーを手書き文字のような感じにしたいです。（エモい感じの） トップページと同じでいいです </div >
                    <p className='text-white' >OUR MISSION</p>
                    <div className='text-white' >ミッションかマインドか、おそらくこの文章でいいと思いますが、最後のあたりの編集をお願いしたいです。 10年後、あなたがどんな医療を行っているか 考えたことがありますか？ 興味のある科はあっても、 具体的になにをしてるかは… そもそもいろんな制度もわからないし… 医師というのは一生学び続ける必要があります そのためには適切な場を選択しなければいけません 一人一人の医師の姿を見て その場を選んでみる、考えてみる ってことをしてみませんか？ 私たちone doctorはこのミッションを達成するために〜〜〜〜〜しています。</div >
                </div>

                <div className='relative rounded-tl-full bg-prime-blue-muted'>
                    <RichBlueTLSquare/>
                    <div className='text-prime-blue-rich'>運営について</div >
                    <p>このサイトの運営は〜〜〜〜によって構成された＝＝＝がしております。</p>
                    <div>
                    <button className='rounded shadow-md text-white bg-prime-blue-rich' >
                        { isPageSmall ? 'メドキャリHP' : 'メドキャリHP→'}
                    </button>
                </div >
                </div >

                <div className='bg-prime-blue-muted'>
                    <div className='text-prime-blue-rich'>ABOUT LOGO</div >
                    <p> 人と人の足りない部分を合わせると med が出来上がる、ワンドクターを通じて新しい医療の形を目指す様子を、One DoctorのOとDをモチーフに作成しています</p>
                    <div>
                        <img className='' src='images/Logoの成り立ち.png'/>
                    </div >
                </div >
            </main>
            <Footer isPageSmall={isPageSmall} />
        </div>
    )
}
export default AboutUs
