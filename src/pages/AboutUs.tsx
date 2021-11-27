import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import Image from 'next/image'
import { RichBlueTLSquare } from '../components/atoms/StyledComponents'
import PlaneButton from '../components/atoms/PlaneButton'

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main className='relative'>
        <section
          className='bg-prime-blue-rich w-full ov-md:pb-20 ov-md:pt-20 sm:pb-20 flex flex-col items-center
        sm:rounded-br-bg-corner md:rounded-br-bg-corner lg:rounded-br-bg-corner xl:rounded-br-bg-corner 2xl:rounded-br-bg-corner-2xl
        '
        >
          <div className='sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px]'>
            <h1 className='text-white sm:text-2xl ov-md:text-4xl font-semibold pt-10 mb-5'>
              ABOUT US
            </h1>
            <div className='shadow-xl mb-10 text-xs p-3.5'>
              {' '}
              キャッチコピーを手書き文字のような感じにしたいです。（エモい感じの）
              トップページと同じでいいです{' '}
            </div>
            <p className='text-white sm:text-2xl ov-md:text-4xl font-semibold'>
              OUR MISSION
            </p>
            <div className='text-white '>
              ミッションかマインドか、おそらくこの文章でいいと思いますが、最後のあたりの編集をお願いしたいです。
              10年後、あなたがどんな医療を行っているか 考えたことがありますか？
              興味のある科はあっても、 具体的になにをしてるかは…
              そもそもいろんな制度もわからないし…
              医師というのは一生学び続ける必要があります
              そのためには適切な場を選択しなければいけません
              一人一人の医師の姿を見て その場を選んでみる、考えてみる
              ってことをしてみませんか？ 私たちone
              doctorはこのミッションを達成するために〜〜〜〜〜しています。
            </div>
          </div>
        </section>

        <section
          className='relative bg-prime-blue-muted w-full pt-20 pb-20 flex flex-col items-center
        sm:rounded-tl-bg-corner md:rounded-tl-bg-corner lg:rounded-tl-bg-corner xl:rounded-tl-bg-corner 2xl:rounded-tl-bg-corner-2xl'
        >
          <RichBlueTLSquare />
          <div className='sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px]'>
            <div className='text-prime-blue-rich sm:text-2xl ov-md:text-4xl font-semibold mb-5'>
              運営について
            </div>
            <p className='text-sm mb-10'>
              このサイトの運営は〜〜〜〜によって構成された＝＝＝がしております。
            </p>
            <div className='flex sm:justify-center ov-md:justify-start'>
              <PlaneButton>メドキャリHP</PlaneButton>
            </div>
          </div>
        </section>

        <section className='bg-prime-blue-muted flex flex-col items-center'>
          <div className=' sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px]'>
            <div className='text-prime-blue-rich sm:text-2xl ov-md:text-4xl font-semibold mb-5'>
              ABOUT LOGO
            </div>
            <div className='w-full ov-md:grid ov-md:grid-cols-2 ov-md:grid-flow-row'>
              <p className='text-sm mb-10'>
                {' '}
                人と人の足りない部分を合わせると med
                が出来上がる、ワンドクターを通じて新しい医療の形を目指す様子を、One
                DoctorのOとDをモチーフに作成しています
              </p>
              <div className='sm:w-full sm:flex sm:justify-center sm:pb-20'>
                <div className='relative sm:w-1/3 sm:h-72 ov-md:w-full ov-md:h-56'>
                  <Image
                    layout='fill'
                    objectFit='contain'
                    src='/images/logo-origin.png'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
