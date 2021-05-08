//React
import React, { useEffect, useState, ReactEventHandler } from 'react'
//Components
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import NewsLine from '../components/molecules/NewsLine'

//Fower
import { Box } from '@fower/react'
import { styled } from '@fower/styled'

//others
import { WIDTH_THRESHOLD } from '../lib/variables'

//Firebase
import firebase from 'firebase'
import '@firebase/firestore'
import 'firebase/firestore'

//getStaticProps from firebase
export const getStaticProps = async () => {
  let content: any = [];
  try {
    const snapshot = await firebase.firestore().collection("fl_content").get();
    snapshot.docs.forEach((doc) => {
      content.push({
        title: doc.data().field_1618199954754,
        article: doc.data().field_1620310046897
      })
    })
  }
  catch (error) {
    console.log('Error getting documents; ', error);
  }
  return {
    props: {
      content
    }
  }
};

const PreStyledTopDomain = styled('div', 'relative', 'grid', { backgroundRepeat:'no-repeat',backgroundSize: '100% auto' })
const TopImage = styled('img', 'circle-75', 'circle-45--sm', { gridArea: 'topImage' })
const ScrollPointer= styled('div', 'white', 'coreFontSizeSM', 'absolute', 'left-4--md','left-3', 'top-58',  {borderBottom: '4px solid #fff', width: '14.5vw', transform: 'rotate(90deg)' })


const Home = (props) => {
  const [width, setWidth] = useState(null)
  const updateWidth: any = (event: ReactEventHandler) => setWidth(window.innerWidth)
  
  useEffect(() => {
    window.addEventListener('resize', updateWidth, { capture: true, passive: false })
    return () => window.removeEventListener('resize', updateWidth)
  })

  const TopDomain = ( 
    width < WIDTH_THRESHOLD  
      ? styled(PreStyledTopDomain, {
          backgroundImage: 'url(/svg/bg-top-s.svg)',
          backgroundPosition: '0px -66px',
          gridTemplate: `
          '.. ......... ..' 17vw
          '.. topImage  ..' 80vw
          '.. catchCopy ..' 22vw
          '.. catchText ..' 85vw/
          10vw auto 10vw`,
          })
      : styled(PreStyledTopDomain, 'h-100',`minH="790px"`, {
          backgroundImage: 'url(svg/bg-top-m-l.svg)',
          gridTemplate: 
          ` '......... ......... ........  ..' 80px
            '......... ......... ........  ..' 5vw
            '......... catchCopy topImage  ..' 20vw
            '......... catchText topImage  ..' 25vw
            '......... newsBoard newsBoard ..' auto/
            11vw 40vw 45vw 5vw`,
        })
  )

  return (
    <div>
      <div>
        <Header bgTransparent--sm bgWhite/>
        <Box as='main'>
          <TopDomain>
            <TopImage src="https://aih-net.com/update_include/top/img/img_hero_03.jpg" />
            <Box as='div' css={{width: '68vw', white: 'true', coreFontSizeLG: 'true', gridArea: 'catchCopy', transform: 'rotate(-10deg) translateY(-30%)' }}>キャッチコピー<br />白の手書き文字</Box>
            <Box as='div' css={{ gridArea: 'catchText', coreFnotSizeMD: 'true', white:'true' }}>「One CDoctor」は、将来に対して漠然とした不安を持っている医学生に 「必要な情報」と「一人の先生のキャリアから見る”医療の面白さ”」を伝えることで 彼ら一人一人が納得のいくキャリアを選択できるようにするサービスです （ココの文章も検討お願いします）</Box>
            {/* {(width => WIDTH_THRESHOLD || null) && <NewsBoard content={props.content} layoutStyles={{ 'newsBoard': styles.newsBoardWide, 'title': styles.title }} />} */}
            { !(width < WIDTH_THRESHOLD) && <ScrollPointer>scroll</ScrollPointer>}
          </TopDomain>

          <div >
            <div >
              <NewsLine title='イベント'>イベント内容</NewsLine>
              {/* <div >
                <iframe width="300" height="540" src="https://www.youtube.com/embed/o6xTZsgz6sA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div >
                <iframe width="300" height="540" src="https://www.youtube.com/embed/o6xTZsgz6sA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div >
                <iframe width="300" height="540" src="https://www.youtube.com/embed/o6xTZsgz6sA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div >
                <iframe width="300" height="540" src="https://www.youtube.com/embed/o6xTZsgz6sA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div> */}
            </div> 
            {/* {(width < WIDTH_THRESHOLD && width !== null) && <NewsBoard content={props.content} layoutStyles={{ 'newsBoard': styles.newsBoardNarrow, 'title': styles.titel }} />} */}

          </div> 

          <div >
            {/* <DepartBoard layoutStyles={{
              'departBoardContainer': styles.departBoardContainer,
              'title': styles.title,
              'departKanban': styles.departKanban,
            }} /> */}
          </div>

          <div >
            <div >
              <div >筑波大学附属病院について</div>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.454268485108!2d140.09971111521065!3d36.10678911412265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60220bff99f57b0b%3A0x1cad40e7632fb4b8!2sUniversity%20of%20Tsukuba!5e0!3m2!1sen!2sjp!4v1618728410770!5m2!1sen!2sjp" width="600" height="450" loading="lazy" className={}></iframe> */}
              <div >
                <button>病院公式ページ</button>
              </div>
            </div>
          </div>
        </Box>
        <Footer width={width} />
      </div>
    </div>
  )
}


export default Home
