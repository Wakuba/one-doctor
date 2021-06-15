import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import TabMenu from "../components/organisms/TabMenu"
import Tag from '../components/atoms/Tag'
import AppealCardBoard from '../components/organisms/AppealCardBoard'
import { ReactNode, useState } from 'react'
import ThreePointLeader from '../components/atoms/ThreePointLeader'
import Modal from '../components/atoms/Modal'
import MovieCarousel from '../components/organisms/MovieCarousel'

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://script.google.com/macros/s/AKfycbzmrnZq2-7JaQLpE_AFenimwJIL2y1rIGNm6F4NgecKbLNUMWBI6IPmlOYV4VsJ71issw/exec',
    { method: "GET" }
  )
  const spreadsheetData = await res.json();
  console.log('spreadsheetData', spreadsheetData)
  return { props: { spreadsheetData } }
}

const PushPoint = ({ children }: { children: JSX.Element[] }) => (
  <div>
    <div className='font-semibold text-base' >{children[0]}</div>
    <div className='text-sm'>{children[1]}</div>
  </div>
)

const Button = ({ children }: { children: ReactNode }) => (
  <button className='text-white rounded text-sm shadow-md px-3 font-medium bg-prime-blue-rich w-48 h-10 focus:outline-none'>{children}</button>
)

const EachDepartPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  return (
    <>
      <Header />
      <main className='sm:bg-ed-narrowback ov-md:bg-ed-wideback bg-prime-blue-muted bg-contain bg-no-repeat'>
        <section className='w-full flex flex-col items-center mb-14'>
          <div className='sm:w-11/12 ov-md:w-8/12 flex flex-col pt-10'>
            <h1 className='text-white text-xl font-semibold mb-1' >筑波大学附属病院　循環器内科</h1>
            <p className='text-white text-xs mb-1'>University of Tsukuba Hospital -cardiovascular medicine</p>
            <div className='flex flex-row'>
              <Tag>筑波大学附属病院</Tag>
              <Tag>循環器内科</Tag>
            </div>
          </div>
        </section>

        <section className='relative w-full flex flex-col items-center mb-16' >
          <Modal
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
            defaultWrapperStyle='sm:w-11/12 ov-md:w-8/12 ov-md:h-96  bg-white flex sm:flex-col ov-md:flex-row shadow-md'
            modalWrapperStyle='sm:w-9/12 ov-md:w-wscreen7/10'
            modalContainerStyle='w-full'
            defaultAreaContents={
              <>
                <div className='ov-md:p-8 ov-md:flex-1'>
                  <div className='sm:p-3 sm:h-72  overflow-y-hidden relative'>
                    <div className='space-y-4 ov-md:h-72 '>
                      <div className='text-prime-blue-rich border-prime-blue-rich font-semibold border-b-2 text-base'>
                        筑波大学附属病院　循環器内科イチオシポイント
                      </div>
                      <PushPoint>
                        <span>教育：</span>
                        <span>テキストテキストテキストテキストテキトスステキストテキストテキストテキストテキストテキストテキストテキストテキストテキトスステキストテキストテキストテキストテキステ</span>
                      </PushPoint>
                      <PushPoint>
                        <span>臨床：</span>
                        <span>テテキストテキストテキストテキストキテストテキストテキストテキストテキストテキストキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテ</span>
                      </PushPoint>
                      <PushPoint>
                        <span>研究：</span>
                        <span>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキトスステキストテキストテキストテキストテキストテキストテキストテキストテキストテキトスステキストテキストテキストテキストテキスト</span>
                      </PushPoint>
                    </div>
                    <div className='absolute w-full left-0 bottom-0 shadow-for-readmore h-16'></div>
                  </div>
                  <ThreePointLeader />
                  <button className='w-full h-8 text-xs bg-white focus:outline-none'>もっと読む</button>
                </div>
                <div className='relative ov-md:flex-1 ov-md:flex ov-md:items-start w-full h-full'>
                  <div className='
                                border-0
                                bg-transparent
                                absolute
                                z-20
                                sm:shadow-for-narrow-ichioshi-img
                                sm:h-24
                                sm:w-full
                                ov-md:shadow-for-wide-ichioshi-img
                                ov-md:h-full
                                ov-md:w-24
                            ' ></div>
                  <img className='sm:w-full sm:h-auto z-10 border-white' src='/images/ichioshi-image.png' />
                </div>
              </>
            }
            modalAreaContents={
              <>
                <div className='text-prime-blue-rich border-prime-blue-rich font-semibold border-b-2 text-base'>
                  筑波大学附属病院　循環器内科イチオシポイント
                </div>
                <PushPoint>
                  <span>教育：</span>
                  <span>
                    テキストテキストテキストテキストテキトスステキストテキストテキストテキストテキストテキストテキストテキス
                    テキストテキストテキストテキストテキトスステキストテキストテキストテキストテキストテキストテキストテキス
                    テキストテキストテキストテキストテキトスステキストテキストテキストテキストテキストテキストテキストテキス
                    テキストテキストテキストテキストテキトスステキストテキストテキストテキストテキストテキストテキストテキス
                    テキストテキストテキストテキストテキトスステキストテキストテキストテキストテキストテキストテキストテキス
                    テキストテキストテキストテキストテキトスステキストテキストテキストテキストテキストテキストテキストテキス
                    テキストテキストテキストテキストテキトスステキストテキストテキストテキストテキストテキストテキストテキス
                    テキストテキストテキストテキストテキトスステキストテキストテキストテキストテキストテキストテキストテキス
                    テキストテキストテキストテキストテキトスステキストテキストテキストテキストテキストテキストテキストテキス
                  </span>
                </PushPoint>
                <PushPoint>
                  <span>臨床：</span>
                  <span>
                    テテキストテキストテキストテキストキテストテキストテキストテキストテキストテキストキストテキストテキスト
                    テテキストテキストテキストテキストキテストテキストテキストテキストテキストテキストキストテキストテキスト
                    テテキストテキストテキストテキストキテストテキストテキストテキストテキストテキストキストテキストテキスト
                    テテキストテキストテキストテキストキテストテキストテキストテキストテキストテキストキストテキストテキスト
                    テテキストテキストテキストテキストキテストテキストテキストテキストテキストテキストキストテキストテキスト
                    テテキストテキストテキストテキストキテストテキストテキストテキストテキストテキストキストテキストテキスト
                  </span>
                </PushPoint>
                <PushPoint>
                  <span>研究：</span>
                  <span>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </span>
                </PushPoint>
              </>
            }
          />
        </section>

        <section className='w-full flex flex-col items-center mb-16'>
          <AppealCardBoard />
        </section>


        <section className='flex flex-col items-center'>
          <div className='w-11/12 bg-prime-blue-rich flex flex-col items-center py-6'>
            <MovieCarousel layoutStyle='w-wscreen7/10' />
          </div>
        </section>

        <section className='w-full flex flex-col items-center mb-16'>
          <TabMenu data={spreadsheetData} />
        </section>

        <section className='w-full flex flex-col items-center pb-20'>
          <div className='w-11/12 flex flex-col items-center sm:space-y-8 ov-md:space-y-20'>
            <div className='flex flex-col items-center space-y-4'>
              <div className='text-sm' >イベントや見学を通じて診療科について理解を深めましょう</div>
              <div className='flex sm:flex-col sm:items-center sm:space-y-4 ov-md:flex-row ov-md:space-x-4'>
                <Button>見学申し込みをする→</Button>
                <Button>イベントのページを見る→</Button>
                <Button>イベントの提案をする→</Button>
              </div>
            </div>
            <div className='flex flex-col items-center space-y-4'>
              <div className='text-sm'>詳しい情報については診療科のホームページをご覧ください</div>
              <Button>診療科公式ページ→</Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

export default EachDepartPage
