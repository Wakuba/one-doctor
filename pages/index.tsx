//React library
import { FC } from 'react'

//Components
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import NewsBoard from '../components/organisms/NewsBoard'
import DepartBoard from '../components/organisms/DepartBoard'
import { RichBlueBRSquare,  MutedBlueBRSquare, MutedBlueTLSquare, RichBlueTLSquare } from '../components/atoms/StyledComponents'

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

const Movie: FC<{src: string; title:string}> = ({src, title}) => (
  <iframe className='shadow-lg w-72 h-96 mr-3 border-2 border-gray-300 rounded-2' src={src} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
)

interface HomeProps {
  content: any;
  moviePlaylist: any;
}

const Home: FC<HomeProps> = (props) => {
  return (
    <div>
      <Header/>
      <main>
        <section className='sm:bg-hero-narrowback-image sm:bg-prime-blue-muted sm:flex sm:flex-col sm:items-center sm:bg-minus66px sm:h-fit-to-screen ov-md:bg-hero-wideback-image ov-md:bg-prime-blue-rich ov-md:hit-to-widescreen bg-cover bg-no-repeat pt-wscreen/4 rounded-br-bg-corner h-fit-to-widescreen relative'>
            <div className='flex sm:flex-col-reverse ov-md:flex-row sm:items-center ov-md:mr-14 ov-md:ml-16 ov-lg:ml-32'>
              <div className='text-white ov-md:w-11/12 sm:w-10/12 ov-md:ml-10 md:pt-40 lg:pt-52 xl:pt-64'>「One CDoctor」は、将来に対して漠然とした不安を持っている医学生に 「必要な情報」と「一人の先生のキャリアから見る”医療の面白さ”」を伝えることで 彼ら一人一人が納得のいくキャリアを選択できるようにするサービスです （ココの文章も検討お願いします）</div>
              <div className='text-white ov-md:text-6xl transform -rotate-12 my-wscreen/20 w-wscreen7/10 ov-md:absolute left-wscreen/8 top-6 sm:text-4xl'>キャッチコピー<br />白の手書き</div>
              <img className='rounded-full ov-md:w-wscreen9/20 ov-md:h-wscreen9/20 sm:w-wscreen7/10 sm:h-wscreen7/10' src="https://aih-net.com/update_include/top/img/img_hero_03.jpg" /> 
              <div className='sm:hidden ov-md:block text-white absolute border-solid border-white border-b-4 w-44 transform rotate-90 top-162 md:left-10 ov-lg:left-18'>scroll</div> 
            </div>
            <div className='sm:hidden w-full ov-md:flex justify-center mt-20'>
              <NewsBoard layoutStyles={{ container: 'w-2/3', title: 'text-white'}} content={ props.content }/>
            </div>
            <MutedBlueBRSquare/>
        </section> 

        <section className='w-full rounded-br-bg-corner ov-md:rounded-tl-bg-corner relative bg-prime-blue-muted flex flex-col items-center'>
          <RichBlueBRSquare/>
          <RichBlueTLSquare/>
          <div className='sm:w-11/12 ov-md:w-10/12 ov-md:py-wscreen/5'>
            <div className='text-prime-blue-rich text-2xl font-semibold'>新着動画</div>
            <div className='text-sm'>各診療科のやりがいやリアルな現場を動画で見ることができます</div>
            <div className='overflow-x-scroll overflow-y-hidden'>
              <div className='w-screen*2 flex flex-row'>
                <Movie src="https://www.youtube.com/embed/8jjswrh3agE" title="YouTube video player"></Movie>
                <Movie src="https://www.youtube.com/embed/o6xTZsgz6sA" title="YouTube video player" ></Movie>
                <Movie src="https://www.youtube.com/embed/o6xTZsgz6sA" title="YouTube video player"></Movie> 
                <Movie src="https://www.youtube.com/embed/o6xTZsgz6sA" title="YouTube video player"></Movie>
                <Movie src="https://www.youtube.com/embed/8jjswrh3agE" title="YouTube video player"></Movie>
                <Movie src="https://www.youtube.com/embed/8jjswrh3agE" title="YouTube video player"></Movie>
              </div>
            </div>
          </div>
          <div className='ov-md:hidden w-full sm:flex justify-center mt-10 mb-10'>
            <NewsBoard layoutStyles={{ container: 'w-11/12', title: 'text-prime-blue-rich'}} content={ props.content }/>
          </div>
        </section> 

        <section className='relative w-full flex flex-col items-center rounded-tl-bg-corner rounded-br-bg-corner bg-prime-blue-rich py-wscreen/4'>
          <MutedBlueTLSquare/>
          <DepartBoard />
          <MutedBlueBRSquare/>
        </section>

        <section className='relative rounded-tl-bg-corner bg-prime-blue-muted py-wscreen/4' >
          <RichBlueTLSquare/>
          <div className='bg-transparent flex flex-col items-center'>
            <div className='w-11/12'>
              <div className='text-prime-blue-rich text-2xl mb-5 font-semibold' >筑波大学附属病院について</div>
            </div>
            <iframe className='w-11/12 mb-10 h-wscreen/2' width="600" height="450" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.454268485108!2d140.09971111521065!3d36.10678911412265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60220bff99f57b0b%3A0x1cad40e7632fb4b8!2sUniversity%20of%20Tsukuba!5e0!3m2!1sen!2sjp!4v1618728410770!5m2!1sen!2sjp"  ></iframe>
            <div >
              <button className='rounded text-white shadow-md bg-prime-blue-rich w-44 h-11'>病院公式ページ</button>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}


export default Home
