import { Box } from '@fower/react'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import { RichBlueTLSquare } from '../lib/StyledComponents'
import { useContext } from 'react'
import ScreenWidthContext from '../contexts/ScreenWidthContext'

const AboutUs = () => {
    const isPageSmall = useContext(ScreenWidthContext)
    return(
        <div>
            <Header />
            <Box as='main' relative p> 
                <Box pl-10--sm pr-10--sm pb-10 roundedBR-25 pt-11 pr-6 pl-6 css={{ backgroundColor: 'mainBlueRich' }}>
                    <Box white mb-5 fontSemibold css={{ coreFontSizeLG: 'true'}}>ABOUT US</Box >
                    <Box shadowMD px-3 py-3 css={{ coreFontSizeLG: 'true'}}> キャッチコピーを手書き文字のような感じにしたいです。（エモい感じの） トップページと同じでいいです </Box >
                    <Box as='p' white fontSemibold css={{ coreFontSizeLG: 'true'}}>OUR MISSION</Box>
                    <Box white css={{ coreFontSizeSM: 'true' }}>ミッションかマインドか、おそらくこの文章でいいと思いますが、最後のあたりの編集をお願いしたいです。 10年後、あなたがどんな医療を行っているか 考えたことがありますか？ 興味のある科はあっても、 具体的になにをしてるかは… そもそもいろんな制度もわからないし… 医師というのは一生学び続ける必要があります そのためには適切な場を選択しなければいけません 一人一人の医師の姿を見て その場を選んでみる、考えてみる ってことをしてみませんか？ 私たちone doctorはこのミッションを達成するために〜〜〜〜〜しています。</Box >
                </Box>

                <Box relative roundedTL='25vw' pr--sm='10vw' pl--sm='10vw' css={{ paddingRight: '6vw', paddingLeft: '6vw', backgroundColor: 'mainBlueMuted' }}>
                    <RichBlueTLSquare/>
                    <Box css={{ coreFontSizeLG: 'true', paddingTop: '20vw', color: 'mainBlueRich'}}>運営について</Box >
                    <Box as='p' css={{ coreFontSizeSM: 'true' }}>このサイトの運営は〜〜〜〜によって構成された＝＝＝がしております。</Box>
                    <Box toLeft--sm toCenter>
                    <Box as='button' rounded='4px' h='15vw' maxH='45px' minH='15px' h--sm='3vw' w='60vw' maxW='200px' minW='140px' w--sm='13.5vw' shadowMD white css={{ backgroundColor: 'mainBlueRich'}} >
                        { isPageSmall ? 'メドキャリHP' : 'メドキャリHP→'}
                    </Box>
                </Box >
                </Box >

                <Box pb='20vw' pr--sm='10vw' pl--sm='10vw' css={{ paddingRight: '6vw', paddingLeft: '6vw', paddingTop:'10vw', backgroundColor: 'mainBlueMuted' }}>
                    <Box css={{ coreFontSizeLG: 'true', color: 'mainBlueRich'}}>ABOUT LOGO</Box >
                    <Box as='p' css={{ coreFontSizeSM: 'true' }}> 人と人の足りない部分を合わせると med が出来上がる、ワンドクターを通じて新しい医療の形を目指す様子を、One DoctorのOとDをモチーフに作成しています</Box>
                    <Box toCenter>
                        <Box as='img' src='images/Logoの成り立ち.png' h='auto' w='38vw' />
                    </Box >
                </Box >
            </Box>
            <Footer isPageSmall={isPageSmall} />
        </div>
    )
}
export default AboutUs
