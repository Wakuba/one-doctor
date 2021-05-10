import { Box } from '@fower/react'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import { RichBlueBRSquare, RichBlueTLSquare, MutedBlueBRSquare, MutedBlueTLSquare } from '../lib/styledComponents'
import { WIDTH_THRESHOLD } from '../lib/variables'
import { useMediaQuery } from '../lib/customHook'

const AboutUs = () => {
    let isPageSmall = useMediaQuery(`(max-width: ${WIDTH_THRESHOLD}px`)
    return(
        <div>
            <Header />
            <Box as='main' relative p> 
                <Box pl-10--sm pr-10--sm pb-10 roundedBR-25 pt-11 pr-6 pl-6 bgMainBlueRich >
                    <Box white mb-5 coreFontSizeLG fontsemibold>ABOUT US</Box >
                    <Box coreFontSizeSM shadowDefault px-3 py-3> キャッチコピーを手書き文字のような感じにしたいです。（エモい感じの） トップページと同じでいいです </Box >
                    <Box as='p' white coreFontSizeLG fontsemibold>OUR MISSION</Box>
                    <Box coreFontSizeSM white>ミッションかマインドか、おそらくこの文章でいいと思いますが、最後のあたりの編集をお願いしたいです。 10年後、あなたがどんな医療を行っているか 考えたことがありますか？ 興味のある科はあっても、 具体的になにをしてるかは… そもそもいろんな制度もわからないし… 医師というのは一生学び続ける必要があります そのためには適切な場を選択しなければいけません 一人一人の医師の姿を見て その場を選んでみる、考えてみる ってことをしてみませんか？ 私たちone doctorはこのミッションを達成するために〜〜〜〜〜しています。</Box >
                </Box>

                <Box relative roundedTL='25vw' pr--sm='10vw' pl--sm='10vw' css={{ paddingRight: '6vw', paddingLeft: '6vw', backgroundColor: 'mainBlueMuted' }}>
                    <RichBlueTLSquare/>
                    <Box coreFontSizeLG  css={{ paddingTop: '20vw', color: 'mainBlueRich'}}>運営について</Box >
                    <Box as='p' coreFontSizeSM >このサイトの運営は〜〜〜〜によって構成された＝＝＝がしております。</Box>
                    <Box toLeft--sm toCenter>
                    <Box as='button' rounded='4px' h='15vw' maxH='45px' minH='15px' h--sm='3vw' w='60vw' maxW='200px' minW='140px' w--sm='13.5vw' shadowDefault white css={{ backgroundColor: 'mainBlueRich'}} >
                        { isPageSmall ? 'メドキャリHP' : 'メドキャリHP→'}
                    </Box>
                </Box >
                </Box >

                <Box pb='20vw' pr--sm='10vw' pl--sm='10vw' css={{ paddingRight: '6vw', paddingLeft: '6vw', paddingTop:'10vw', backgroundColor: 'mainBlueMuted' }}>
                    <Box coreFontSizeLG css={{ color: 'mainBlueRich'}}>ABOUT LOGO</Box >
                    <Box as='p' coreFontSizeSM> 人と人の足りない部分を合わせると med が出来上がる、ワンドクターを通じて新しい医療の形を目指す様子を、One DoctorのOとDをモチーフに作成しています</Box>
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
