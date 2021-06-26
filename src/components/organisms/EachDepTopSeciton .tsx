import { useState } from 'react'
import ThreePointLeader from '../atoms/ThreePointLeader'
import { ModalMainArea, ModalBackdrop } from '../atoms/Modal'

interface DepTopSectionPropsType {
  layoutStyle: string;
  depName: string;
  educationalPoint: string;
  clinicalPoint: string;
  researchPoint: string;
}

const PushPoint = (props: { children: JSX.Element[] }) => (
  <div>
    <div className='font-semibold text-base' >{props.children[0]}</div>
    <div className='text-sm'>{props.children[1]}</div>
  </div>
)

export default function EachDepTopSection({ layoutStyle, depName, educationalPoint, clinicalPoint, researchPoint }: DepTopSectionPropsType) {
  const [isTextModalOpen, setIsTextModalOpen] = useState<boolean>(false)
  return (

    <section className={`${layoutStyle} relative w-full flex flex-col items-center `} >
      <div onClick={() => setIsTextModalOpen(true)} className='sm:w-11/12 ov-md:w-8/12 ov-md:h-96  bg-white flex sm:flex-col ov-md:flex-row shadow-md'>
        <div className='ov-md:p-8 ov-md:flex-1'>
          <div className='sm:p-3 sm:h-72  overflow-y-hidden relative'>
            <div className='space-y-4 ov-md:h-72 '>
              <div className='text-prime-blue-rich border-prime-blue-rich font-semibold border-b-2 text-base'>
                筑波大学附属病院　{depName}イチオシポイント
              </div>
              <PushPoint>
                <span>教育：</span>
                <span>{educationalPoint}</span>
              </PushPoint>
              <PushPoint>
                <span>臨床：</span>
                <span>{clinicalPoint}</span>
              </PushPoint>
              <PushPoint>
                <span>研究：</span>
                <span>{researchPoint}</span>
              </PushPoint>
            </div>
            <div className='absolute w-full left-0 bottom-0 shadow-for-readmore h-16'></div>
          </div>
          <ThreePointLeader />
          <button className='w-full h-8 text-xs bg-white focus:outline-none'>もっと読む</button>
        </div>
        <div className='relative ov-md:flex-1 ov-md:flex ov-md:items-start w-full h-full'>
          <div className='border-0
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
          <img className='sm:w-full sm:h-auto ov-md:h-full ov-md:object-cover z-10 border-white' src='/images/ichioshi-image.png' />

        </div>
      </div>
      {isTextModalOpen &&
        <>
          <ModalMainArea closeModal={() => setIsTextModalOpen(false)} modalWrapperStyle='sm:w-9/12 ov-md:w-wscreen7/10 h-5/6' modalContainerStyle='w-full space-y-4'>
            <div className='text-prime-blue-rich border-prime-blue-rich font-semibold border-b-2 text-base'>
              筑波大学附属病院　循環器内科イチオシポイント
            </div>
            <PushPoint>
              <span>教育：</span>
              <span>
                {educationalPoint}
              </span>
            </PushPoint>
            <PushPoint>
              <span>臨床：</span>
              <span>
                {clinicalPoint}
              </span>
            </PushPoint>
            <PushPoint>
              <span>研究：</span>
              <span>
                {researchPoint}
              </span>
            </PushPoint>
          </ModalMainArea>
          <ModalBackdrop closeModal={() => setIsTextModalOpen(false)} />
        </>
      }
    </section>
  )
}
