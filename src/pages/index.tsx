// Externel Components
import Image from 'next/image'
import clsx from 'clsx'

// Custom Components
import Header from '../components/UIAtoms/Header'
import Footer from '../components/UIAtoms/Footer'
import NewsBoard from '../components/home/NewsBoard'
import DepUrlBoard from '../components/home/DepUrltBoard'
import CustomizedParticles from '../components/home/CustomizedParticles'
import PlaneButton from '../components/UIAtoms/PlaneButton'

// Firebase
import { db } from '../lib/firebase/firebase.config'
import { getDownloadURL, ref } from 'firebase/storage'
import { getDoc, doc, QueryDocumentSnapshot } from 'firebase/firestore'
import { storage } from '../lib/firebase/firebase.config'

// Types
import {
  NewsLineType,
  OfficialWebSiteDataType,
  NewVideoDataType,
  DepPathDataType,
} from '../lib/types'
import { collection, getDocs, query, where } from '@firebase/firestore'
import VoiceBoard from '../components/home/VoiceBoard'
import OriginalContentsBoard from '../components/home/OriginalContentsBoard'
// import useSWR from 'swr'
import { DocumentData } from '@google-cloud/firestore'
import { GetStaticProps } from 'next/types'
// import { requestErrorWithOriginal } from '../../functions/node_modules/@slack/web-api/dist/errors'
import NewVideosBoard from '../components/home/NewVideosBoard'
import { VFC } from 'react'

interface HomePropsType {
  newsBoardData: NewsLineType[]
  depList: DepPathDataType[]
  officialWebSiteData: OfficialWebSiteDataType[]
  newVideos: NewVideoDataType[]
  voices: any[]
}

const Home: VFC<HomePropsType> = (props) => {
  const { newsBoardData, newVideos, depList, officialWebSiteData, voices } =
    props

  return (
    <>
      <Header />
      <main>
        <section
          className={clsx(
            'relative pt-[13vw] pb-24',
            'sm:flex sm:flex-col sm:items-center',
            'rounded-br-[15vw] 2xl:rounded-br-[216px]'
          )}
        >
          <CustomizedParticles layoutStyle='absolute top-0 left-0 w-full h-[calc(100%+19vw)] -z-10' />
          <div
            className={clsx(
              'flex sm:flex-col-reverse ov-md:flex-row sm:w-11/12 ov-md:ml-[10vw] ov-md:mr-[5vw]',
              'sm:flex-col sm:items-center',
              'ov-md:grid ov-md:grid-cols-2'
            )}
          >
            <div>
              <div
                className={clsx(
                  'sm:h-[25vw] ov-md:h-[16vw] relative' //left-[12.5vw] top-[-2vw] my-[5vw] w-[70vw]
                )}
              >
                <h1
                  className={clsx(
                    'text-white absolute transform z-10 -rotate-12',
                    'sm:top-[-4vw] sm:text-[8vw] sm:leading-10vw',
                    'ov-md:top-[-3vw] md:text-[6vw] ov-md:leading-7vw',
                    'lg:text-[6vw] xl:text-[6vw]',
                    '2xl:text-[80px]'
                  )}
                >
                  キャッチコピー
                  <br />
                  白の手書き文字
                </h1>
              </div>
              <div
                className={clsx(
                  'text-white flex items-center text-shadow mb-4',
                  'ov-md:w-[40vw] ov-md:mr-4',
                  'ov-lg:text-xl'
                )}
              >
                「One
                CDoctor」は、将来に対して漠然とした不安を持っている医学生に
                「必要な情報」と「一人の先生のキャリアから見る”医療の面白さ”」を伝えることで
                彼ら一人一人が納得のいくキャリアを選択できるようにするサービスです
                （ココの文章も検討お願いします）
              </div>
              <div className='relative w-full h-[200px]'>
                <Image
                  layout='fill'
                  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAATlBMVEWZmZmUlJSTk5Pf39/b29uampqjo6Pj4+OQkJCfn5/U1NSxsbHc3Nyrq6vOzs6np6e6urrp6enGxsbQ0NDAwMC3t7fJycnu7u709PT7+/sIspz5AAAEuElEQVR4nO3XgXajKBQGYO4VBEFUEM3s+7/oXtCkyUw7TTM9Z/fs/t8pSUwQ8RfQKgUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/ylUPVVzMA/78bP73fZ4uiKrLzb9Z6jrxi4/V7O/39rt2E3DF7ra+ycr02S7zj55XfrP63yKEzMt6ZmmtuFug3xgCnZ7PoQ+8XMV0+KeHmLb+g0DhpO8UC+xt8aozY3a2XOOtC0p8vH6bdtPMqivSd3vR6pVpEP7ePxY9ZbP/a8Nt6bejnM2PJXrab39wvS2qe725jA5eqj5SiQtA8V6XnJt05LeRp1mZbSMx0yks05xH9MmH3tFRYbpcpfBsnNHdZy7qWibt86uRH7Rtixd2rk1St0tgzD5UfejtUR7J7NQqWi93jUpPWp9nPjFXU9p7/Q4075pbRdSfTfqlcw4aBtpkr29UnuXvB8odKOdiMqy2Gcn3K8ZUN4oOemRd8kTz5qMYXaJ+FIc/yiOEst6QNHywzhQvXZ15srbOjo3ana2Z+2ds1KSUUejdMvgh3I5KTctNBC7fSFriJfkxsgcWr1+JFXWaQ1UdseD5f0iXZEZmwbZoSjbzTKe6t7SA7OsZpBZRiTXgEvKzy+8v2ZQCq9B8TiwlVlv5NqSidHKZhscUo0kA/bzdb8zg2G8ZuCjorWWwHXAtDK3RrvhNg62nVSoRa6ammPOwygnZCxZWQJcnSxK8peVrg/edYrJaTPJmkOdkUMQD5p+9G3wqxglSNom+XGvq5Jcw2LdCwncMlgjDR3LnxytZqB496VI9LLZckhyLj3b2+3xzCCs9xm0cp+BDODa6EMGrawcxlx8lnki48Cbi9cy4mtF017VLCNSvtJJTXIgGofYqng6+rvpXLRMkJaBHFa+slTyawvkmYGcnBwnS7JHBrR5R677OYO32+ORAfvIv82gNrqpdzKQeSYnn50fvfZq6OoVpKND5szAtuPQNQPf1mTTvjUyNTlfM1jb0mRdKa9mIOuP8zXBLWujrhkUiUP99VMGlPP1/ibnWk9Cc13xuHQfZHA0+k4GLOPWyaJrB+dc68W1R0HWHEWSgRyhHujMgOqtldSRgWSuXJIMwsptMCqKo8uvZnApZa/Lbp1RcrOtI6JO0P4SNi3jQDbrUKkZWDktm+O2HRmsJXf1KmQ/F+/vM5DRQq3MtdHp7NgsJ1EvWysy0kvwa5Zz1XWdjynMWzjSLXaJm5/IpGUOS11SpKmByhjnMqtj3KYlaF9vFmkOhvU+b3aQK/Tiw0JYlnhchGOk17klLzTnombTNmuRjkRTJ+Kej/kwL0swLbotB4pqlpXvLLXitbxNHyPNDPOtmJJ7U0OS548Lq6Hsy/kMRvK5xLrMyXvfGq1NSY/ydnRIGihlaM+IUW4VtVdFjtX/8UMjzfrhQe6Dx413vv5N+hT1R0+HdHt+cm2Y0/1P9PD+zqFvn89mvuX/i36xw+e1vtpo+aRRs24xjC/O428Xyj/SaF9y6f8lEXzhX9vvbfS1R3wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4H/gbFpguL+p+mTcAAAAASUVORK5CYII='
                  loading='lazy'
                  objectFit='cover'
                  alt=''
                />
                <ScrollArrow />
              </div>
            </div>
            <div className='relative ov-md:w-[45vw] ov-md:h-[45vw] sm:w-[70vw] sm:h-[70vw]'>
              <Image
                className='rounded-full '
                layout='fill'
                objectFit='cover'
                src='/images/hero-image.jpeg'
              />
            </div>
          </div>
          <div
            id='newsBoard-ov-md'
            className='sm:hidden w-full flex justify-center '
          >
            <div className='relative mt-10 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px]'>
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
          className={clsx(
            'w-full relative bg-prime-blue-muted flex flex-col items-center py-24 rounded-tl-[15vw] rounded-br-[15vw] 2xl:rounded-tl-[216px] 2xl:rounded-br-[216px]',
            'after:h-[15vw] after:w-[15vw] after:max-h-[216px] after:max-w-[216px] after:bg-prime-blue-rich after:-z-10 after:absolute after:bottom-0 after:right-0'
          )}
        >
          <div
            id='newVideoBoard'
            className='sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px]'
          >
            <NewVideosBoard videosData={newVideos} />
          </div>

          <div
            id='newsBoard-sm'
            className='ov-md:hidden w-full flex justify-center '
          >
            <div className='mt-10 w-11/12'>
              <NewsBoard
                layoutStyles='text-prime-blue-rich'
                content={newsBoardData}
              />
            </div>
          </div>
        </section>

        <section
          id='studentVoices'
          className={clsx(
            'bg-prime-blue-rich relative flex flex-col items-center',
            'rounded-tl-[15vw] 2xl:rounded-tl-[216px] rounded-br-[15vw] 2xl:rounded-br-[216px]',
            'after:absolute after:h-[15vw] after:w-[15vw] after:max-h-[261px] after:max-w-[216px] after:bg-prime-blue-muted after:bottom-0 after:right-0 after:-z-10',
            'before:absolute before:h-[15vw] before:w-[15vw] before:max-h-[216px] before:max-w-[216px] before:bg-prime-blue-muted before:-z-10 before:top-0 before:left-0'
          )}
        >
          <div className='sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px] flex flex-col items-center py-24'>
            <div className='text-white sm:text-2xl ov-md:text-3xl font-semibold w-full flex justify-self-start mb-2'>
              医学生の声
            </div>
            <div className='text-sm mb-4 w-full flex justify-self-start'>
              （例文）実習に参加した医学生によるリアルな体験談を見ることができます。あなたも記入しませんか？
            </div>
            <VoiceBoard voices={voices} />
          </div>
        </section>

        <section
          id='originalContents'
          className={clsx(
            'h-[600px] bg-prime-blue-muted relative flex flex-col items-center',
            'rounded-tl-[15vw] 2xl:rounded-tl-[216px] rounded-br-[15vw] 2xl:rounded-br-[216px]',
            'after:absolute after:h-[15vw] after:w-[15vw] after:max-h-[261px] after:max-w-[216px] after:bg-prime-blue-rich after:bottom-0 after:right-0 after:-z-10',
            'before:absolute before:h-[15vw] before:w-[15vw] before:max-h-[216px] before:max-w-[216px] before:bg-prime-blue-rich before:-z-10 before:top-0 before:left-0'
          )}
        >
          <div className='sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px] flex flex-col items-center py-24'>
            <div className='text-prime-blue-rich sm:text-2xl ov-md:text-3xl font-semibold w-full flex justify-self-start mb-2'>
              One Doctor オリジナルコンテンツ
            </div>
            <div className='text-sm mb-4 w-full flex justify-self-start'>
              （テキスト要編集）ここでは本サイトでしか見れない…テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
            </div>
            <div className='text-[#B7B7B7] sm:text-2xl ov-md:text-3xl font-semibold mb-6 w-full'>
              筑波大学
            </div>
            <OriginalContentsBoard depList={depList} />
          </div>
        </section>

        <section
          id='departBoard'
          className={clsx(
            'relative w-full flex flex-col items-center py-24 bg-prime-blue-rich rounded-tl-[15vw] rounded-br-[15vw] 2xl:rounded-tl-[216px] 2xl:rounded-br-[216px]',
            'before:absolute before:h-[15vw] before:w-[15vw] before:max-h-[216px] before:max-w-[216px] before:bg-prime-blue-muted before:-z-10 before:top-0 before:left-0',
            'after:absolute after:h-[15vw] after:w-[15vw] after:max-h-[261px] after:max-w-[216px] after:bg-prime-blue-muted after:bottom-0 after:right-0 after:-z-10'
          )}
        >
          <div className='sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px] flex flex-col items-center'>
            <div className='text-white sm:text-2xl ov-md:text-3xl font-semibold w-full flex justify-self-start mb-2'>
              診療科一覧
            </div>
            <div className='text-sm mb-4 w-full flex justify-self-start'>
              各診療科の公式ページに飛ぶことができます
            </div>
            <DepUrlBoard wsData={officialWebSiteData} />
          </div>
        </section>

        <section
          id='aboutUniversity'
          className={clsx(
            'relative w-full rounded-[15vw] 2xl:rounded-[216px] bg-prime-blue-muted py-24 flex flex-col items-center ',
            'after:absolute after:h-[15vw] after:w-[15vw] after:max-h-[216px] after:max-w-[216px] after:bg-prime-blue-rich after:top-0 after:left-0 after:-z-10'
          )}
        >
          <div className='bg-transparent flex flex-col items-center sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px]'>
            <div className='w-full sm:mb-4 ov-md:mb-8'>
              <div className='text-prime-blue-rich sm:text-2xl ov-md:text-3xl font-semibold'>
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

export default Home

export const getStaticProps: GetStaticProps<HomePropsType> = async () => {
  // トップページのNewsをフェッチ
  try {
    const q0 = query(
      collection(db, 'fl_content'),
      where('_fl_meta_.schema', '==', 'topPageNewsBoard')
    )
    const snapshot0 = await getDocs(q0)
    const newsBoardData = snapshot0.docs.map((doc) => {
      return {
        id: doc.data().id ?? '0000',
        title: doc.data().newsTitle ?? 'Empty News Title',
        detail: doc.data().newsDetail ?? 'Epmty News Detail',
      }
    })

    // create department page url
    const q1 = query(
      collection(db, 'fl_content'),
      where('_fl_meta_.schema', '==', 'departmentPage')
    )
    const snapshot1 = await getDocs(q1)
    const depList = snapshot1.docs.map((doc) => {
      if (doc.data().id) {
        return {
          id: doc.data().id ?? 'toppage',
          path: `/Departments/${doc.data().id}`,
          depName: doc.data().departmentName,
        }
      } else {
        return {
          id: 'no department page',
          path: '/',
          depName: 'topPage',
        }
      }
    })

    // get web site url
    const q2 = query(
      collection(db, 'fl_content'),
      where('_fl_meta_.schema', '==', 'topPageOfficialWebSiteUrls')
    )
    const snapshot2 = await getDocs(q2)
    const officialWebSiteData = snapshot2.docs.map(
      (doc): OfficialWebSiteDataType => {
        const data = doc.data()
        return {
          universityNameInJapanese: data.universityNameInJapanese,
          departmentNameInJapanese: data.departmentNameInJapanese,
          url: data.officialWebSiteUrl,
        }
      }
    )

    //新着動画一覧を取得
    //   const newVideos = await Promise.all(
    //     snapshotDash.docs.map(async (document) => {
    //       const videoInfo = await thumbnailIdExtractor(document).then(
    //         async (res) => {
    //           console.log('response', res)
    //           const thumbnailId = res.thumbnailId
    //           if (thumbnailId === '') {
    //             return {
    //               title: res.title,
    //               videoUrl: res.videoUrl,
    //               thumbnailUrl: '',
    //             }
    //           } else {
    //             const snapshot = await getDoc(doc(db, 'fl_files', thumbnailId))
    //             const thumbnailName = snapshot.data()?.file
    //             const url = await getDownloadURL(
    //               ref(storage, `flamelink/media/${thumbnailName}`)
    //             )
    //             return {
    //               title: res.title,
    //               videoUrl: res.videoUrl,
    //               thumbnailUrl: url,
    //             }
    //           }
    //         }
    //       )
    //       return videoInfo
    //     })
    //   )
    //   props.newVideos = newVideos
    // } catch (e) {
    //   console.log(e)
    // }

    const q3 = query(
      collection(db, 'fl_content'),
      where('_fl_meta_.schema', '==', 'topPageNewVideos')
    )
    const snapshot3 = await getDocs(q3)
    const newVideos = await Promise.all(
      snapshot3.docs.map(
        async (document: QueryDocumentSnapshot<DocumentData>) => {
          const info = {
            title: '',
            id: '',
            videoUrl: '',
            thumbnailUrl: '',
          }
          info.title = document.data().title
          info.id = document.data().id
          info.videoUrl = document.data().videoUrl
          const thumbnailRef = document.data().verticalThumbnail[0]
          if (thumbnailRef) {
            const snap = await getDoc(thumbnailRef)
            const thumbnailDoc = snap.data() as DocumentData
            const verticalThumbnailId = thumbnailDoc.id as string
            const imageSnap = await getDoc(
              doc(db, 'fl_files', verticalThumbnailId)
            )
            const thumbnailName = imageSnap.data()?.file
            const url = await getDownloadURL(
              ref(storage, `flamelink/media/${thumbnailName}`)
            )
            info.thumbnailUrl = url
          }
          return info
        }
      )
    )

    // トップページの医学生の声をfirebaseから取ってくる
    const q4 = query(
      collection(db, 'fl_content'),
      where('_fl_meta_.schema', '==', 'topPageStudentsVoices')
    )
    const snapshot4 = await getDocs(q4)
    const voices = snapshot4.docs.map((doc) => {
      return {
        contributor: doc.data().contributor ?? '',
        contents: doc.data().contents ?? '',
        departmentNameInJapanese: doc.data().departmentNameInJapanese ?? '',
        universityNameInJapanese: doc.data().universityNameInJapanese ?? '',
      }
    })

    const props = {
      newsBoardData,
      depList,
      officialWebSiteData,
      newVideos,
      voices,
    }

    return {
      props,
    }
  } catch (e) {
    if (e instanceof Error) console.log(e.message)
    return {
      notFound: true,
    }
  }
}

function ScrollArrow() {
  return (
    <div className='text-white text-xs absolute border-solid border-white border-b-2 w-44 transform rotate-90 top-[30px] left-[-140px]'>
      scroll
    </div>
  )
}

// const thumbnailIdExtractor = (
//   doc: QueryDocumentSnapshot<DocumentData>
// ): Promise<{
//   title: string
//   videoUrl: string
//   thumbnailId: string
// }> => {
//   return new Promise((response, reject) => {
//     const title = doc.data().title ?? 'ブランク動画'
//     const videoUrl = doc.data().videoUrl ?? ''
//     const thumbnailId = doc.data().thumbnail[0]
//       ? doc.data().thumbnail[0].id
//       : ''
//     response({ title, videoUrl, thumbnailId })
//     reject('thumbnailExtractor was rejected')
//   })
// }
