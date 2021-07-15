//Externel Components
import { useState } from 'react'
import YouTube from 'react-youtube'
import Image from 'next/image'

//Custom Components
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import NewsBoard from '../components/organisms/NewsBoard'
import DepartBoard from '../components/organisms/DepartBoard'
import { RichBlueBRSquare, MutedBlueBRSquare, MutedBlueTLSquare, RichBlueTLSquare } from '../components/atoms/StyledComponents'
import { ModalMainArea, ModalBackdrop } from '../components/atoms/Modal'
import CustomizedParticles from '../components/molecules/CustomizedParticles'

//firebase
import { db } from '../lib/firebase/firebase.config'

//types
import { NewsLineType } from '../lib/types'

const opts = {
  height: '390',
  width: '640',
};


interface HomeProps {
  newsBoardData: NewsLineType[];
  depList: string[]
}

export default function Home({ newsBoardData, depList }: HomeProps) {
  return (
    <>
      <Header />
      <main>
        <section
          className='
          relative
          sm:flex
          sm:flex-col sm:items-center
          pt-wscreen/5
          pb-24
          sm:rounded-br-bg-corner md:rounded-br-bg-corner lg:rounded-br-bg-corner xl:rounded-br-bg-corner 2xl:rounded-br-bg-corner-2xl
          '>
          <CustomizedParticles layoutStyle='absolute top-0 left-0 w-full h-hscreen*2 -z-10' />
          <div className='flex sm:flex-col-reverse ov-md:flex-row sm:items-center ml-wscreen/10 mr-wscreen/20 '>
            <div className='text-white flex items-center
                            ov-md:w-wscreen2/5
                            ov-lg:text-xl
                            text-shadow
                            '>
              「One CDoctor」は、将来に対して漠然とした不安を持っている医学生に 「必要な情報」と「一人の先生のキャリアから見る”医療の面白さ”」を伝えることで 彼ら一人一人が納得のいくキャリアを選択できるようにするサービスです （ココの文章も検討お願いします）
            </div>
            <h1 className='text-white transform -rotate-12 my-wscreen/20 w-wscreen7/10 left-wscreen/8 top-6
                            sm:text-10vw sm:leading-10vw
                            ov-md:text-7vw ov-md:leading-7vw
                            ov-md:absolute'>
              キャッチコピー<br />白の手書き
            </h1>
            <div className='relative ov-md:w-wscreen9/20 ov-md:h-wscreen9/20 sm:w-wscreen7/10 sm:h-wscreen7/10'>
              <Image className='rounded-full ov-md:w-wscreen9/20 ov-md:h-wscreen9/20 sm:w-wscreen7/10 sm:h-wscreen7/10' layout='fill' objectFit='cover' src="/images/hero-image.jpeg" />
            </div>

            <ScrollArrow />
          </div>
          <div className='sm:hidden'>
            <div className='w-full flex justify-center mt-10 '>
              <NewsBoard layoutStyles={{ container: 'w-8/12', title: 'text-white' }} content={newsBoardData} />
            </div>
          </div>

          <div className='absolute right-0 bottom-0
          sm:w-wscreen3/20 sm:h-wscreen3/20
          md:w-wscreen3/20 md:h-wscreen3/20
          lg:w-wscreen3/20 lg:h-wscreen3/20
          xl:w-wscreen3/20 xl:h-wscreen3/20
          2xl:w-56 2xl:h-56
          transform sm:translate-y-1/7 sm:translate-x-1/7
          md:translate-y-1/7 md:translate-x-1/7
          lg:translate-y-1/7 lg:translate-x-1/7
          xl:translate-y-1/7 xl:translate-x-1/7
          2xl:translate-y-8 2xl:translate-x-8
          '>
            <Image layout='fill' loading='eager' objectFit='cover' src='/svg/slideCircle-mutedBlue.svg' />
          </div>
        </section>

        <section className='
        w-full rounded-br-bg-corner rounded-tl-bg-corner relative bg-prime-blue-muted flex flex-col items-center py-24
        sm:rounded-br-bg-corner md:rounded-br-bg-corner lg:rounded-br-bg-corner xl:rounded-br-bg-corner 2xl:rounded-br-bg-corner-2xl
        sm:rounded-tl-bg-corner md:rounded-tl-bg-corner lg:rounded-tl-bg-corner xl:rounded-tl-bg-corner 2xl:rounded-tl-bg-corner-2xl'>
          <RichBlueBRSquare />
          <div className='sm:w-11/12 ov-md:w-7/10 '>
            <div className='text-prime-blue-rich sm:text-2xl ov-md:text-4xl font-semibold'>新着動画</div>
            <div className='text-sm'>各診療科のやりがいやリアルな現場を動画で見ることができます</div>
            <div className='overflow-x-scroll overflow-y-hidden'>
              <div className='w-wscreen*2 flex flex-row'>
                <Movie videoId="https://www.youtube.com/embed/8jjswrh3agE" src='/images/professor.png' title="YouTube video player" />
                <Movie videoId="https://www.youtube.com/embed/8jjswrh3agE" src='/images/professor.png' title="YouTube video player" />
                <Movie videoId="https://www.youtube.com/embed/8jjswrh3agE" src='/images/professor.png' title="YouTube video player" />
                <Movie videoId="https://www.youtube.com/embed/8jjswrh3agE" src='/images/professor.png' title="YouTube video player" />
                <Movie videoId="https://www.youtube.com/embed/8jjswrh3agE" src='/images/professor.png' title="YouTube video player" />
                <Movie videoId="https://www.youtube.com/embed/8jjswrh3agE" src='/images/professor.png' title="YouTube video player" />
              </div>
            </div>
          </div>

          <div className='ov-md:hidden'>
            <div className='w-full flex justify-center mt-10 '>
              <NewsBoard layoutStyles={{ container: 'w-11/12', title: 'text-prime-blue-rich' }} content={newsBoardData} />
            </div>
          </div>

        </section>

        <section className='relative w-full flex flex-col items-center py-24 bg-prime-blue-rich
         sm:rounded-br-bg-corner md:rounded-br-bg-corner lg:rounded-br-bg-corner xl:rounded-br-bg-corner 2xl:rounded-br-bg-corner-2xl
         sm:rounded-tl-bg-corner md:rounded-tl-bg-corner lg:rounded-tl-bg-corner xl:rounded-tl-bg-corner 2xl:rounded-tl-bg-corner-2xl
        '>
          <MutedBlueTLSquare />
          <div className='sm:w-11/12 ov-md:w-7/10'>
            <div className='text-white sm:text-2xl ov-md:text-4xl font-semibold' >診療科一覧</div>
            <div className='sm:text-sm ov-md:text-lg mb-4'>各診療科にコンタクトを取ったり、イベント情報をチェックすることができます</div>
            <DepartBoard depList={depList} />
          </div>
          <MutedBlueBRSquare />
        </section>

        <section className='relative rounded-tl-bg-corner bg-prime-blue-muted py-24 flex flex-col items-center
         sm:rounded-tl-bg-corner md:rounded-tl-bg-corner lg:rounded-tl-bg-corner xl:rounded-tl-bg-corner 2xl:rounded-tl-bg-corner-2xl
         sm:rounded-br-bg-corner md:rounded-br-bg-corner lg:rounded-br-bg-corner xl:rounded-br-bg-corner 2xl:rounded-br-bg-corner-2xl
        ' >
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

export async function getStaticProps() {
  const newsBoardData: any = [];
  const depList: any = []

  try {
    const snapshotDash = await db.collection("fl_content").where('_fl_meta_.schema', '==', 'topPageNewsBoard').get();
    snapshotDash.docs.forEach(doc => {
      newsBoardData.push({
        id: doc.data().id,
        title: doc.data().newsTitle,
        detail: doc.data().newsDetail,
      })
    })
  } catch (error) {
    console.log('Error getting news documents from FlameLink; ', error);
  }

  try {
    const snapshot = await db.collection('fl_content')
      .where('_fl_meta_.schema', '==', 'departmentPage')
      .get()
    snapshot.docs.forEach(doc => {
      depList.push({
        departmentNameInJapanese: doc.data().departmentName.departmentNameInJapanese,
        path: `/Departments/${doc.data().departmentName.departmentNameInEnglish}`,
      })
    })
  } catch (error) {
    console.log('Error getting depList', error);
  }

  return {
    props: {
      newsBoardData,
      depList
    }
  }
}


function Movie({ src, title, videoId }: { src: string; title: string, videoId: string }) {
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
      <div onClick={() => setModalActive(true)} className='relative shadow-lg w-72 h-96 mr-3 border-2 border-gray-300 rounded-2'>
        <Image layout='fill' objectFit='contain' loading='lazy' src={src} alt={title} />
      </div>
    </>
  )
}

function ScrollArrow() {
  return (
    <div className='sm:hidden text-white absolute border-solid border-white border-b-4 w-44 transform rotate-90 ov-md:-left-1% ov-md:top-80%'>
      scroll
    </div>
  )
}
