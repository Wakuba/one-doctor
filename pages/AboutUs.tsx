import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import { useContext } from 'react'
import { RichBlueTLSquare } from '../components/atoms/StyledComponents'
import ScreenWidthContext from '../contexts/ScreenWidthContext'

const AboutUs = () => {
    const isPageSmall = useContext(ScreenWidthContext)
    return(
        <div>
            <Header />
            <main className='relative'> 
                <div className=' rounded-br-bg-corner bg-prime-blue-rich w-full px-1/20'>
                    <div className='text-white text-2xl font-semibold pt-10 mb-5'>ABOUT US</div >
                    <div className='shadow-xl mb-10 text-xs p-3.5'> キャッチコピーを手書き文字のような感じにしたいです。（エモい感じの） トップページと同じでいいです </div >
                    <p className='text-white text-2xl font-semibold' >OUR MISSION</p>
                    <div className='text-white pb-wscreen/5'>ミッションかマインドか、おそらくこの文章でいいと思いますが、最後のあたりの編集をお願いしたいです。 10年後、あなたがどんな医療を行っているか 考えたことがありますか？ 興味のある科はあっても、 具体的になにをしてるかは… そもそもいろんな制度もわからないし… 医師というのは一生学び続ける必要があります そのためには適切な場を選択しなければいけません 一人一人の医師の姿を見て その場を選んでみる、考えてみる ってことをしてみませんか？ 私たちone doctorはこのミッションを達成するために〜〜〜〜〜しています。</div >
                </div>

                <div className='relative rounded-tl-bg-corner bg-prime-blue-muted w-full px-1/20 pt-wscreen/5 mb-20'>
                    <RichBlueTLSquare/>
                    <div className='text-prime-blue-rich text-2xl font-semibold mb-5'>運営について</div >
                    <p className='text-sm mb-10'>このサイトの運営は〜〜〜〜によって構成された＝＝＝がしております。</p>
                    <div className='flex flex-col items-center'>
                        <button className='rounded shadow-md text-white bg-prime-blue-rich w-64 h-14' >
                            { isPageSmall ? 'メドキャリHP' : 'メドキャリHP→'}
                        </button>
                    </div >
                </div >

                <div className='bg-prime-blue-muted px-1/20'>
                    <div className='text-prime-blue-rich text-2xl font-semibold mb-5'>ABOUT LOGO</div >
                    <p className='text-sm mb-10'> 人と人の足りない部分を合わせると med が出来上がる、ワンドクターを通じて新しい医療の形を目指す様子を、One DoctorのOとDをモチーフに作成しています</p>
                    <div className='flex flex-col items-center pb-20'>
                        <img className='w-1/3 object-contain' src='images/logo-origin.png'/>
                    </div >
                </div >
            </main>
            <Footer isPageSmall={isPageSmall} />
        </div>
    )
}
export default AboutUs
