//Externel Components
import { useState } from 'react'
import YouTube from 'react-youtube'

//Custom Components
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import NewsBoard from '../components/organisms/NewsBoard'
import DepartBoard from '../components/organisms/DepartBoard'
import { RichBlueBRSquare, MutedBlueBRSquare, MutedBlueTLSquare, RichBlueTLSquare } from '../components/atoms/StyledComponents'
import { ModalMainArea, ModalBackdrop } from '../components/atoms/Modal'

//firebase
import { db } from '../lib/firebase/firebase.config'

//types
import { NewsLineType } from '../lib/types'

export const getServerSideProps = async () => {
  let content: any = [];

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

  return {
    props: {
      content,
    }
  }
}
const opts = {
  height: '390',
  width: '640',
};

const Movie = ({ src, title, videoId }: { src: string; title: string, videoId: string }) => {
  const [modalActive, setModalActive] = useState(false)
  return (
    <>
      {modalActive &&
        <>
          < ModalMainArea modalWrapperStyle='w-10/12 h-5/6' modalContainerStyle='h-full w-full flex flex-col justify-center' closeModal={() => setModalActive(false)}>
            <YouTube videoId={videoId} opts={opts} containerClassName='ov-md:h-full sm:h-wscreen7/10 w-full flex flex-col items-center justify-center' className='h-5/6 w-10/12' />
          </ModalMainArea >
          <ModalBackdrop closeModal={() => setModalActive(false)} />
        </>
      }

      <img onClick={() => setModalActive(true)} className='shadow-lg w-72 h-96 mr-3 border-2 border-gray-300 rounded-2' src={src} title={title} />
    </>
  )
}

const ScrollArrow = () => (
  <div className='sm:hidden text-white absolute border-solid border-white border-b-4 w-44 transform rotate-90 ov-md:-left-1% ov-md:top-80%'>
    scroll
  </div>
)

interface HomeProps {
  content: NewsLineType[];
}

export default function Home({ content }: HomeProps) {
  return (
    <>
      <Header />
      <main>
        <section
          className=' sm:bg-hero-narrowback-image
                      sm:flex
                      sm:flex-col sm:items-center
                      sm:bg-minus66px
                      ov-md:bg-hero-wideback-image
                      bg-prime-blue-rich
                      bg-cover
                      bg-no-repeat
                      pt-wscreen/5
                      pb-24
                      rounded-br-bg-corner
                      relative
        '>
          <div className='flex sm:flex-col-reverse ov-md:flex-row sm:items-center ov-md:mr-14 ov-md:ml-16 ov-lg:ml-32'>
            <div className='text-white
                            sm:w-10/12
                            md:pt-40
                            ov-md:w-11/12  ov-md:ml-3.5vw ov-md:pr-4
                            lg:pt-52 lg:text-xl
                            ov-xl:pt-64  ov-xl:text-1.5vw
                            text-shadow
                            '>
              「One CDoctor」は、将来に対して漠然とした不安を持っている医学生に 「必要な情報」と「一人の先生のキャリアから見る”医療の面白さ”」を伝えることで 彼ら一人一人が納得のいくキャリアを選択できるようにするサービスです （ココの文章も検討お願いします）
              「One CDoctor」は、将来に対して漠然とした不安を持っている医学生に 「必要な情報」と「一人の先生のキャリアから見る”医療の面白さ”」を伝えることで 彼ら一人一人が納得のいくキャリアを選択できるようにするサービスです （ココの文章も検討お願いします）
            </div>
            <h1 className='text-white transform -rotate-12 my-wscreen/20 w-wscreen7/10 left-wscreen/8 top-6
                            sm:text-10vw sm:leading-10vw
                            md:text-10vw md:leading-10vw
                            ov-lg:text-6vw ov-lg:leading-6vw
                            ov-md:absolute  '>
              キャッチコピー<br />白の手書き
            </h1>
            <img className='rounded-full ov-md:w-wscreen9/20 ov-md:h-wscreen9/20 sm:w-wscreen7/10 sm:h-wscreen7/10' src="https://aih-net.com/update_include/top/img/img_hero_03.jpg" />
            <ScrollArrow />
          </div>
          <div className='sm:hidden'>
            <div className='w-full flex justify-center mt-10 '>
              <NewsBoard layoutStyles={{ container: 'w-8/12', title: 'text-white' }} content={content} />
            </div>
          </div>
          <MutedBlueBRSquare />
        </section>

        <section className='w-full rounded-br-bg-corner rounded-tl-bg-corner relative bg-prime-blue-muted flex flex-col items-center py-24'>
          <RichBlueBRSquare />
          <RichBlueTLSquare />
          <div className='sm:w-11/12 ov-md:w-7/10 '>
            <div className='text-prime-blue-rich sm:text-2xl ov-md:text-4xl font-semibold'>新着動画</div>
            <div className='text-sm'>各診療科のやりがいやリアルな現場を動画で見ることができます</div>
            <div className='overflow-x-scroll overflow-y-hidden'>
              <div className='w-screen*2 flex flex-row'>
                <Movie src="https://www.youtube.com/embed/8jjswrh3agE" title="YouTube video player" />
                <Movie src="https://www.youtube.com/embed/o6xTZsgz6sA" title="YouTube video player" />
                <Movie src="https://www.youtube.com/embed/o6xTZsgz6sA" title="YouTube video player" />
                <Movie src="https://www.youtube.com/embed/o6xTZsgz6sA" title="YouTube video player" />
                <Movie src="https://www.youtube.com/embed/8jjswrh3agE" title="YouTube video player" />
                <Movie src="https://www.youtube.com/embed/8jjswrh3agE" title="YouTube video player" />
              </div>
            </div>
          </div>

          <div className='ov-md:hidden'>
            <div className='w-full flex justify-center mt-10 '>
              <NewsBoard layoutStyles={{ container: 'w-11/12', title: 'text-prime-blue-rich' }} content={content} />
            </div>
          </div>

        </section>

        <section className='relative w-full flex flex-col items-center rounded-tl-bg-corner rounded-br-bg-corner bg-prime-blue-rich py-24'>
          <MutedBlueTLSquare />
          <div className='sm:w-11/12 ov-md:w-7/10'>
            <div className='text-white sm:text-2xl ov-md:text-4xl font-semibold' >診療科一覧</div>
            <div className='sm:text-sm ov-md:text-lg mb-4'>各診療科にコンタクトを取ったり、イベント情報をチェックすることができます</div>
            <DepartBoard />
          </div>
          <MutedBlueBRSquare />
        </section>

        <section className='relative rounded-tl-bg-corner bg-prime-blue-muted py-24 flex flex-col items-center' >
          <RichBlueTLSquare />
          <div className='bg-transparent flex flex-col items-center sm:w-11/12 ov-md:w-7/10'>
            <div className='w-full sm:mb-4 ov-md:mb-8'>
              <div className='text-prime-blue-rich sm:text-2xl ov-md:text-4xl font-semibold' >筑波大学附属病院について</div>
            </div>
            <iframe className='w-full mb-10 h-wscreen/2' width="600" height="450" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.454268485108!2d140.09971111521065!3d36.10678911412265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60220bff99f57b0b%3A0x1cad40e7632fb4b8!2sUniversity%20of%20Tsukuba!5e0!3m2!1sen!2sjp!4v1618728410770!5m2!1sen!2sjp"  ></iframe>
            <div className='rounded text-white shadow-md bg-prime-blue-rich w-44 h-11 flex justify-center items-center'>
              <a rel="noopener" target='_blank' href='http://www.hosp.tsukuba.ac.jp/' >病院公式ページ</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
