//React library
import { useContext, FC } from 'react'

//Components
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import NewsBoard from '../components/organisms/NewsBoard'
import DepartBoard from '../components/organisms/DepartBoard'
import { RichBlueBRSquare,  MutedBlueBRSquare, MutedBlueTLSquare } from '../lib/StyledComponents'
import ScreenWidthContext from '../contexts/ScreenWidthContext'

//Fower
import { Box } from '@fower/react'
import { styled } from '@fower/styled'

//YoutubeAPI
import { YOUTUBE_VIDEOLIST_API} from '../lib/variables'

//firebase
import { db } from '../lib/firebase/firebase.config'

export const getStaticProps = async () => {
  let content: any = [];
  let moviePlaylist;
  try {
    const snapshot = await db.collection("fl_content").get();
    snapshot.docs.forEach((doc) => {
      content.push({
        title: doc.data().field_1618199954754,
        article: doc.data().field_1620310046897
      })
    })
  }
  catch (error) {
    console.log('Error getting documents from FlameLink; ', error);
  }
  try {
    const res = await fetch(`${YOUTUBE_VIDEOLIST_API}?part=snippet&playlistId=PLFsfg2xP7cbJY2Cg4F_tWUSDrtfvLVCAu&maxResult=50&key=${process.env.YOUTUBE_API_KEY}`)
    moviePlaylist = await res.json()
  }
  catch (error) {
  }
  return {
    props: {
      content,
      moviePlaylist
    }
  }
};

const PreStyledTopDomain = styled('div', 'relative', 'grid', { backgroundRepeat:'no-repeat',backgroundSize: '100% auto', backgroundColor: 'mainBlueMuted'})
const TopImage = styled('img', 'circle-75', 'circle-45--sm', { gridArea: 'topImage' })
const ScrollPointer= styled('div', 'white', 'absolute', 'left-4--md', 'left-4', 'top-48',  { fontSize: 'coreFontSizeSM', borderBottom: '4px solid #fff', width: '14.5vw', transform: 'rotate(90deg)' })

const Movie: FC<{src: string; title:string}> = ({src, title}) => (
  <Box as='iframe' w-90vw w-20--sm h-125 h-28--sm shadowMD src={src} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Box>
)

interface HomeProps {
  content: any;
  moviePlaylist: any;
}

const Home: FC<HomeProps> = (props) => {
  const isPageSmall = useContext(ScreenWidthContext)
  const TopDomain = ( isPageSmall ? styled(PreStyledTopDomain, { backgroundImage: 'url(/svg/bg-top-s.svg)',
        backgroundPosition: '0px -66px',
        gridTemplate: `
        '.. ......... ..' 17vw
        '.. topImage  ..' 80vw
        '.. catchCopy ..' 22vw
        '.. catchText ..' 85vw/
        10vw 80vw 10vw`,
      })
    : styled(PreStyledTopDomain, 'bgMainBlueMuted', 'h-100',`minH="790px"`, {
      backgroundImage: 'url(svg/bg-top-m-l.svg)',
      gridTemplate: `
      '......... ......... ........  ..' 80px
      '......... ......... ........  ..' 5vw
      '......... catchCopy topImage  ..' 20vw
      '......... catchText topImage  ..' 25vw
      '......... newsBoard newsBoard ..' auto/
      11vw 40vw 45vw 5vw`,
    })
  )
  const WideNewsBoard = <NewsBoard content={props.content}  css={{
    gridArea: 'newsBoard', 
    '.title': { white: 'true' }, 
    '.desc': { black: 'true'}
  }}/>
  const NarrowNewsBoard = <NewsBoard content={props.content}  css={{
    '.title': { mainBlueRich: 'true', fontBold: 'true' },
    '.desc': { black: 'true' }
  }}/> 

  return (
    <Box>
      <Header/>
      <Box as='main' >
        <TopDomain>
          <TopImage src="https://aih-net.com/update_include/top/img/img_hero_03.jpg" />
          <Box as='div' css={{ width: '68vw', white: 'true', coreFontSizeXL: 'true', gridArea: 'catchCopy', transform: 'rotate(-10deg) translateY(-30%)' }}>キャッチコピー<br />白の手書き文字</Box>
          <Box as='div' ml-3--sm css={{ color: 'white', coreFontSizeSM: 'true', gridArea: 'catchText'}}>「One CDoctor」は、将来に対して漠然とした不安を持っている医学生に 「必要な情報」と「一人の先生のキャリアから見る”医療の面白さ”」を伝えることで 彼ら一人一人が納得のいくキャリアを選択できるようにするサービスです （ココの文章も検討お願いします）</Box>
            {!isPageSmall && <ScrollPointer>scroll</ScrollPointer>}
            {!isPageSmall && WideNewsBoard}
        </TopDomain>

        <Box w='100%' roundedBR-25 relative toCenterX css={{ backgroundColor: 'mainBlueMuted'}}>
          <RichBlueBRSquare/>
          <Box  w-88 w-80--sm >
            <Box fontSemibold mb-3 css={{ coreFontSizeLG: 'true', color: 'mainBlueRich' }}>新着動画</Box>
            <Box css={{ coreFontSizeMD: 'true' }}>各診療科のやりがいやリアルな現場を動画で見ることができます</Box>
            <Box overflowX='scroll' overflowY='hidden' >
              <Box w='1560px' row toLeft space-5>
                <Movie src="https://www.youtube.com/embed/8jjswrh3agE" title="YouTube video player"></Movie>
                <Movie src="https://www.youtube.com/embed/o6xTZsgz6sA" title="YouTube video player" ></Movie>
                <Movie src="https://www.youtube.com/embed/o6xTZsgz6sA" title="YouTube video player"></Movie> 
                <Movie src="https://www.youtube.com/embed/o6xTZsgz6sA" title="YouTube video player"></Movie>
              </Box>
            </Box>
            {isPageSmall && NarrowNewsBoard}
          </Box>
        </Box> 

        <Box relative roundedTL-25 roundedBR-25 py-10 css={{ backgroundColor: 'mainBlueRich'}}>
          <MutedBlueTLSquare/>
          <DepartBoard />
          <MutedBlueBRSquare/>
        </Box>

        <Box relative roundedTL-25 pb-20 css={{ backgroundColor: 'mainBlueMuted'}} >
          <Box absolute square-25 left0 top0 zIndex='-1' css={{ backgroundColor: 'mainBlueMuted'}}></Box>
          <Box ml-6 mr-6 ml-10--sm mr-10--sm pt-20 css={{ backgroundColor: 'tranparent'}}>
            <Box mb-5 fontSemibold css={{ color: 'mainBlueRich', backgruondColor: 'mainBlueRich', coreFontSizeLG: 'true' }}>筑波大学附属病院について</Box>
            <Box as='iframe' w='100%' h-50 mb-8 width="600" height="450" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.454268485108!2d140.09971111521065!3d36.10678911412265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60220bff99f57b0b%3A0x1cad40e7632fb4b8!2sUniversity%20of%20Tsukuba!5e0!3m2!1sen!2sjp!4v1618728410770!5m2!1sen!2sjp"  ></Box>
            <Box toCenter>
              <Box as='button' rounded='4px' w-42 h-10 w-13--md h-3--md white shadowMD css={{ backgroundColor: 'mainBlueRich', coreFontSizeSM: 'true' }}>病院公式ページ</Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer isPageSmall={isPageSmall}/>
    </Box>
  )
}


export default Home
