// Externel Components
import { useState } from 'react'
import YouTube from 'react-youtube'
import Image from 'next/image'
import clsx from 'clsx'

// Custom Components
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import NewsBoard from '../components/organisms/NewsBoard'
import DepartBoard from '../components/organisms/DepartBoard'
import {
  MutedBlueBRSquare,
  MutedBlueTLSquare,
  RichBlueBRSquare,
  RichBlueTLSquare,
} from '../components/atoms/StyledComponents'
import { ModalBackdrop, ModalMainArea } from '../components/atoms/Modal'
import CustomizedParticles from '../components/molecules/CustomizedParticles'
import PlaneButton from '../components/atoms/PlaneButton'

// Firebase
import { db } from '../lib/firebase/firebase.config'

// Types
import { NewsLineType } from '../lib/types'

const opts = {
  height: '390',
  width: '640',
}

interface HomeProps {
  newsBoardData: NewsLineType[]
  depList: string[]
}

export default function Home({ newsBoardData, depList }: HomeProps) {
  return (
    <>
      <Header />
      <main>
        <div>{process.env.NEXT_PUBLIC_FIREBASE_API_KEY}</div>
        <section
          className={clsx(
            'relative pt-[10vw] pb-24',
            'sm:flex sm:flex-col sm:items-center',
            'sm:rounded-br-bg-corner md:rounded-br-bg-corner lg:rounded-br-bg-corner xl:rounded-br-bg-corner 2xl:rounded-br-bg-corner-2xl'
          )}
        >
          <CustomizedParticles layoutStyle='absolute top-0 left-0 w-full sm:h-[900px]  ov-md:h-[1500px] -z-10' />
          <div className='flex sm:flex-col-reverse ov-md:flex-row sm:items-center ml-[10vw] mr-[5vw] '>
            <div
              className={clsx(
                'text-white flex items-center text-shadow',
                'ov-md:w-[40vw] ov-md:mr-4',
                'ov-lg:text-xl'
              )}
            >
              「One CDoctor」は、将来に対して漠然とした不安を持っている医学生に
              「必要な情報」と「一人の先生のキャリアから見る”医療の面白さ”」を伝えることで
              彼ら一人一人が納得のいくキャリアを選択できるようにするサービスです
              （ココの文章も検討お願いします）
            </div>
            <h1
              className={clsx(
                'text-white transform rotate-[-10deg] my-[5vw] w-[70vw] left-[12.5vw] top-[-2vw]',
                'sm:text-[8vw] sm:leading-10vw',
                'ov-md:text-[6vw] ov-md:leading-7vw ov-md:absolute'
              )}
            >
              キャッチコピー
              <br />
              白の手書き
            </h1>
            <div className='relative ov-md:w-[45vw] ov-md:h-[45vw] sm:w-[70vw] sm:h-[70vw]'>
              <Image
                className='rounded-full ov-md:w-[45vw] ov-md:h-[45vw] sm:w-[70vw] sm:h-[70vw]'
                layout='fill'
                objectFit='cover'
                src='/images/hero-image.jpeg'
              />
            </div>
          </div>

          <div className='sm:hidden w-full flex justify-center '>
            <div className='relative mt-10 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px]'>
              <ScrollArrow />
              <NewsBoard layoutStyles='text-white' content={newsBoardData} />
            </div>
          </div>

          <div
            className={clsx(
              'absolute right-0 bottom-0',
              'sm:w-[15vw] sm:h-[15vw]',
              'md:w-[15vw] md:h-[15vw]',
              'lg:w-[15vw] lg:h-[15vw]',
              'xl:w-[15vw] xl:h-[15vw]',
              '2xl:w-56 2xl:h-56',
              'transform sm:translate-y-1/7 sm:translate-x-1/7',
              'md:translate-y-1/7 md:translate-x-1/7',
              'lg:translate-y-1/7 lg:translate-x-1/7',
              'xl:translate-y-1/7 xl:translate-x-1/7',
              '2xl:translate-y-8 2xl:translate-x-8'
            )}
          >
            <Image
              layout='fill'
              loading='eager'
              objectFit='cover'
              src='/svg/slideCircle-mutedBlue.svg'
            />
          </div>
        </section>

        <section
          className='
        w-full rounded-br-bg-corner rounded-tl-bg-corner relative bg-prime-blue-muted flex flex-col items-center py-24
        sm:rounded-br-bg-corner md:rounded-br-bg-corner lg:rounded-br-bg-corner xl:rounded-br-bg-corner 2xl:rounded-br-bg-corner-2xl
        sm:rounded-tl-bg-corner md:rounded-tl-bg-corner lg:rounded-tl-bg-corner xl:rounded-tl-bg-corner 2xl:rounded-tl-bg-corner-2xl'
        >
          <RichBlueBRSquare />
          <div className='sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px]'>
            <div className='text-prime-blue-rich sm:text-2xl ov-md:text-4xl font-semibold'>
              新着動画
            </div>
            <div className='text-sm'>
              各診療科のやりがいやリアルな現場を動画で見ることができます
            </div>
            <div className='sm:w-full overflow-x-scroll overflow-y-hidden'>
              <div className='w-[1920px] flex flex-row'>
                <Movie
                  videoId='https://www.youtube.com/embed/8jjswrh3agE'
                  src='/images/professor.png'
                  title='YouTube video player'
                />
                <Movie
                  videoId='https://www.youtube.com/embed/8jjswrh3agE'
                  src='/images/professor.png'
                  title='YouTube video player'
                />
                <Movie
                  videoId='https://www.youtube.com/embed/8jjswrh3agE'
                  src='/images/professor.png'
                  title='YouTube video player'
                />
                <Movie
                  videoId='https://www.youtube.com/embed/8jjswrh3agE'
                  src='/images/professor.png'
                  title='YouTube video player'
                />
                <Movie
                  videoId='https://www.youtube.com/embed/8jjswrh3agE'
                  src='/images/professor.png'
                  title='YouTube video player'
                />
                <Movie
                  videoId='https://www.youtube.com/embed/8jjswrh3agE'
                  src='/images/professor.png'
                  title='YouTube video player'
                />
              </div>
            </div>
          </div>

          <div className='ov-md:hidden w-full flex justify-center '>
            <div className='mt-10 w-11/12'>
              <NewsBoard
                layoutStyles='text-prime-blue-rich'
                content={newsBoardData}
              />
            </div>
          </div>
        </section>

        <section
          className='relative w-full flex flex-col items-center py-24 bg-prime-blue-rich
         sm:rounded-br-bg-corner md:rounded-br-bg-corner lg:rounded-br-bg-corner xl:rounded-br-bg-corner 2xl:rounded-br-bg-corner-2xl
         sm:rounded-tl-bg-corner md:rounded-tl-bg-corner lg:rounded-tl-bg-corner xl:rounded-tl-bg-corner 2xl:rounded-tl-bg-corner-2xl
        '
        >
          <MutedBlueTLSquare />
          <div className='sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px] flex flex-col items-center'>
            <div className='text-white sm:text-2xl ov-md:text-4xl font-semibold w-full flex justify-self-start mb-2'>
              診療科一覧
            </div>
            <div className='sm:text-sm ov-md:text-lg mb-4 w-full flex justify-self-start'>
              各診療科にコンタクトを取ったり、イベント情報をチェックすることができます
            </div>
            <DepartBoard depList={depList} />
          </div>
          <MutedBlueBRSquare />
        </section>

        <section
          className='relative w-full rounded-tl-bg-corner bg-prime-blue-muted py-24 flex flex-col items-center
         sm:rounded-tl-bg-corner md:rounded-tl-bg-corner lg:rounded-tl-bg-corner xl:rounded-tl-bg-corner 2xl:rounded-tl-bg-corner-2xl
         sm:rounded-br-bg-corner md:rounded-br-bg-corner lg:rounded-br-bg-corner xl:rounded-br-bg-corner 2xl:rounded-br-bg-corner-2xl
        '
        >
          <RichBlueTLSquare />
          <div className='bg-transparent flex flex-col items-center sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px]'>
            <div className='w-full sm:mb-4 ov-md:mb-8'>
              <div className='text-prime-blue-rich sm:text-2xl ov-md:text-4xl font-semibold'>
                筑波大学附属病院について
              </div>
            </div>
            <iframe
              className='w-full mb-10 h-[50vw]'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d279785.1765704249!2d140.17047807758485!3d35.991258388550875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60220bff99f57b0b%3A0x1cad40e7632fb4b8!2z562R5rOi5aSn5a2m!5e0!3m2!1sja!2sjp!4v1626441216082!5m2!1sja!2sjp'
              width='600'
              height='450'
              loading='lazy'
            ></iframe>
            <div className='rounded text-white shadow-md bg-prime-blue-rich w-44 h-11 flex justify-center items-center'>
              <PlaneButton href='http://www.hosp.tsukuba.ac.jp/'>
                病院公式ページ
              </PlaneButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const newsBoardData: any = [],
    depList: any = []

  try {
    const snapshotDash = await db
      .collection('fl_content')
      .where('_fl_meta_.schema', '==', 'topPageNewsBoard')
      .get()
    snapshotDash.docs.forEach((doc) => {
      newsBoardData.push({
        id: doc.data().id,
        title: doc.data().newsTitle,
        detail: doc.data().newsDetail,
      })
    })
  } catch (error) {
    console.log('Error getting news documents from FlameLink; ', error)
  }

  try {
    const snapshot = await db
      .collection('fl_content')
      .where('_fl_meta_.schema', '==', 'departmentPage')
      .get()
    snapshot.docs.forEach((doc) => {
      depList.push({
        departmentNameInJapanese:
          doc.data().departmentName.departmentNameInJapanese,
        path: `/Departments/${
          doc.data().departmentName.departmentNameInEnglish
        }`,
      })
    })
  } catch (error) {
    console.log('Error getting depList', error)
  }

  return {
    props: {
      newsBoardData,
      depList,
    },
  }
}

function Movie({
  src,
  title,
  videoId,
}: {
  src: string
  title: string
  videoId: string
}) {
  const [modalActive, setModalActive] = useState(false)
  return (
    <>
      {modalActive && (
        <>
          <ModalMainArea
            modalWrapperStyle='w-10/12 h-5/6'
            modalContainerStyle='h-full w-full flex flex-col justify-center'
            closeModal={() => setModalActive(false)}
          >
            <YouTube
              videoId={videoId}
              opts={opts}
              containerClassName='ov-md:h-full sm:h-[70vw] w-full flex flex-col items-center justify-center'
              className='h-5/6 w-10/12'
            />
          </ModalMainArea>
          <ModalBackdrop closeModal={() => setModalActive(false)} />
        </>
      )}
      <div
        onClick={() => setModalActive(true)}
        className='relative shadow-lg w-72 h-96 mr-3 border-2 border-gray-300 rounded-2'
      >
        <Image
          layout='fill'
          objectFit='contain'
          loading='lazy'
          src={src}
          alt={title}
        />
      </div>
    </>
  )
}

function ScrollArrow() {
  return (
    <div className='text-white text-xs absolute border-solid border-white border-b-2 w-44 transform rotate-90 ov-md:left-[-98px] ov-md:top-[-80px]'>
      scroll
    </div>
  )
}
