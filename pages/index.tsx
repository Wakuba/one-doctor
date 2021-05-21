//React library
import { useContext, FC, ReactNode } from 'react'

//Components
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import NewsBoard from '../components/organisms/NewsBoard'
import DepartBoard from '../components/organisms/DepartBoard'
import { RichBlueBRSquare,  MutedBlueBRSquare, MutedBlueTLSquare } from '../lib/StyledComponents'
import ScreenWidthContext from '../contexts/ScreenWidthContext'

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

const ScrollPointer = ({ children }: { children: ReactNode }) => (<div className='text-white absolute border-solid'>{ children }</div> )

const Movie: FC<{src: string; title:string}> = ({src, title}) => (
  <iframe className='shadow-md w-72 h-96' src={src} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
)

interface HomeProps {
  content: any;
  moviePlaylist: any;
}

const Home: FC<HomeProps> = (props) => {
  const isPageSmall = useContext(ScreenWidthContext)
  const WideNewsBoard = <NewsBoard content={props.content}/>  
  const NarrowNewsBoard = <NewsBoard content={props.content}/> 

  return (
    <div>
      <Header/>
      <main>
        <div className='sm:bg-hero-narrowback-image sm:bg-cover sm:bg-no-repeat sm:bg-minus66px sm:flex sm:flex-col sm:items-center sm:h-fit-to-screen pt-28 bg-prime-blue-muted'>
          <img className='rounded-full sm:w-wscreen7/10 sm:h-wscreen7/10 ' src="https://aih-net.com/update_include/top/img/img_hero_03.jpg" />
          <div className='w-11/12 flex justify-start mb-4'>
            <div className='text-white text-4xl transform -rotate-12 '>キャッチコピー<br />白の手書き文字</div>
          </div>
          <div className='text-white w-10/12'>「One CDoctor」は、将来に対して漠然とした不安を持っている医学生に 「必要な情報」と「一人の先生のキャリアから見る”医療の面白さ”」を伝えることで 彼ら一人一人が納得のいくキャリアを選択できるようにするサービスです （ココの文章も検討お願いします）</div>
            {!isPageSmall && <ScrollPointer>scroll</ScrollPointer>}
            {!isPageSmall && WideNewsBoard}
        </div>

        <div className='w-full rounded-br-bg-corner relative bg-prime-blue-muted flex flex-col items-center'>
          <RichBlueBRSquare/>
          <div className='w-11/12'>
            <div className='text-prime-blue-rich text-2xl font-semibold'>新着動画</div>
            <div className='text-sm'>各診療科のやりがいやリアルな現場を動画で見ることができます</div>
            <div className='overflow-x-scroll overflow-y-hidden'>
              <div className='w-screen*2 flex flex-row'>
                <Movie src="https://www.youtube.com/embed/8jjswrh3agE" title="YouTube video player"></Movie>
                <Movie src="https://www.youtube.com/embed/o6xTZsgz6sA" title="YouTube video player" ></Movie>
                <Movie src="https://www.youtube.com/embed/o6xTZsgz6sA" title="YouTube video player"></Movie> 
                <Movie src="https://www.youtube.com/embed/o6xTZsgz6sA" title="YouTube video player"></Movie>
              </div>
            </div>
            {isPageSmall && NarrowNewsBoard}
          </div>
        </div> 

        <div className='relative w-full flex flex-col items-center rounded-tl-bg-corner rounded-br-bg-corner bg-prime-blue-rich py-wscreen/4'>
          <MutedBlueTLSquare/>
          <DepartBoard />
          <MutedBlueBRSquare/>
        </div>

        <div className='relative rounded-tl-full bg-prime-blue-muted' >
          <div className='absolute -z-10 bg-prime-blue-muted'></div>
          <div className='bg-transparent'>
            <div className='text-prime-blue-rich bg-prime-blue-rich'>筑波大学附属病院について</div>
            <iframe className='w-full' width="600" height="450" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.454268485108!2d140.09971111521065!3d36.10678911412265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60220bff99f57b0b%3A0x1cad40e7632fb4b8!2sUniversity%20of%20Tsukuba!5e0!3m2!1sen!2sjp!4v1618728410770!5m2!1sen!2sjp"  ></iframe>
            <div >
              <button className='rounded text-white shadow-md bg-prime-blue-rich'>病院公式ページ</button>
            </div>
          </div>
        </div>
      </main>
      <Footer isPageSmall={isPageSmall}/>
    </div>
  )
}


export default Home
