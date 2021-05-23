import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import TabMenu from "../components/organisms/TabMenu"
import Tag from '../components/atoms/Tag'
import AppealCardBoard from '../components/organisms/AppealCardBoard'
import { ReactNode } from 'react'

const PushPoint = ({ children }: { children: JSX.Element[] }) => (  
    <div>
        <div className='font-semibold text-base' >{ children[0] }</div>
        <div className='text-sm'>{ children[1] }</div>
    </div>  
)
const Button = ({ children }: {children: ReactNode}) => (
    <button className='text-white rounded text-sm shadow-md px-3 font-medium bg-prime-blue-rich w-48 h-10 focus:outline-none'>{ children }</button>
)

const EachDepartPage = () => {
    return (
        <div>
            <Header  />
            <main className='bg-ed-narrowback bg-prime-blue-muted bg-contain bg-no-repeat'>
                <section className='w-full flex flex-col items-center mb-14'>
                    <div className='w-11/12 flex flex-col pt-10'>
                        <div className='text-white text-xl font-semibold mb-1' >筑波大学附属病院　循環器内科</div>
                        <p className='text-white text-xs mb-1'>University of Tsukuba Hospital -cardiovascular medicine</p>
                        <div className='flex flex-row'>
                            <Tag>筑波大学附属病院</Tag>
                            <Tag>循環器内科</Tag>
                        </div>
                    </div>
                </section>

                <section className='relative w-full flex flex-col items-center mb-16' >
                    <div className='w-11/12 bg-white'>
                        <div className='p-3'>
                            <div className='space-y-4'>
                                <div className='text-prime-blue-rich border-prime-blue-rich font-semibold border-b-2 text-base'>
                                    筑波大学附属病院　循環器内科イチオシポイント
                                </div>
                                <PushPoint>
                                    <span>教育：</span>
                                    <span>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</span>
                                </PushPoint>
                                <PushPoint>
                                    <span>臨床：</span>
                                    <span>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</span>
                                </PushPoint>
                                <PushPoint>
                                    <span>研究：</span>
                                    <span>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</span>
                                </PushPoint>
                            </div>
                        </div>
                        <div className='h-24 w-11/12 bg-transparent shadow-for-ichioshi-img absolute z-20 border-0' ></div>
                        <img className='w-full h-auto z-10 border-t-2 border-white' src='/images/ichioshi-image.jpeg'/>
                    </div>
                </section>

                <section className='w-full flex flex-col items-center mb-16'>
                    <AppealCardBoard/>
                </section>

                <section className='w-full flex flex-col items-center mb-16'>
                    <TabMenu/>
                </section>

                <section className='w-full flex flex-col items-center pb-20'>
                    <div className='w-11/12 flex flex-col items-center space-y-8'>
                        <div className='flex flex-col items-center space-y-4'>
                            <div className='text-sm' >イベントや見学を通じて診療科について理解を深めましょう</div>
                            <Button>見学申し込みをする→</Button>
                            <Button>イベントのページを見る→</Button>
                            <Button>イベントの提案をする→</Button>
                        </div>
                        <div className='flex flex-col items-center space-y-4'>
                            <div className='text-sm'>詳しい情報については診療科のホームページをご覧ください</div>
                            <Button>診療科公式ページ→</Button>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
  )
}

export default EachDepartPage
