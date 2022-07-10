import { ModalBackdrop, ModalMainArea } from '../UIAtoms/Modal'
import Image from 'next/image'
import PushPoint from '../home/PushPoint'
import ThreePointLeader from '../home/ThreePointLeader'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import {
  closeDepTopTextModal,
  openDepTopTextModal,
  selectDepTopTextModal,
} from '../../features/modalsSlice'
import { VFC } from 'react'

interface DepTopSectionPropsType {
  depName: string
  heroImgUrl: string
  educationalPoint: string
  clinicalPoint: string
  researchPoint: string
  otherPoint: string
}

const DepTopSection: VFC<DepTopSectionPropsType> = ({
  depName,
  heroImgUrl,
  educationalPoint,
  clinicalPoint,
  researchPoint,
  otherPoint,
}) => {
  const dispatch = useDispatch()
  const isOpenDepTopTextModal = useSelector(selectDepTopTextModal)

  const PushPoints = () => (
    <>
      <PushPoint>
        <>教育：</>
        <>{educationalPoint}</>
      </PushPoint>
      <PushPoint>
        <>臨床：</>
        <>{clinicalPoint}</>
      </PushPoint>
      <PushPoint>
        <>研究：</>
        <>{researchPoint}</>
      </PushPoint>
      <PushPoint>
        <>その他：</>
        <>{otherPoint}</>
      </PushPoint>
    </>
  )

  return (
    <>
      <div
        onClick={() => dispatch(openDepTopTextModal())}
        className='w-full bg-white shadow-md flex sm:flex-col ov-md:flex-row '
      >
        <div className='ov-md:p-8 sm:w-full md:w-[358px] lg:w-[504px] xl:w-[537.5px] 2xl:w-[681px] ov-md:h-96'>
          <div className={clsx('sm:p-3 sm:h-72', 'overflow-y-hidden relative')}>
            <div className='space-y-4 ov-md:h-72 '>
              <div className='text-prime-blue-rich border-prime-blue-rich font-semibold border-b-2 text-base'>
                筑波大学附属病院{'　'}
                {depName}イチオシポイント
              </div>
              <PushPoints />
            </div>
            <div className='absolute w-full left-0 bottom-0 shadow-for-readmore h-16'></div>
          </div>
          <ThreePointLeader />
          <button className='w-full h-8 text-xs bg-white focus:outline-none '>
            もっと読む
          </button>
        </div>
        <div
          className={clsx(
            'relative',
            'sm:w-full md:w-[358px] lg:w-[504px] xl:w-[537.5px] 2xl:w-[689px]',
            'sm:h-64 ov-md:h-96'
          )}
        >
          {/* <div
            className={clsx(
              'border-0 bg-transparent absolute z-20',
              'sm:shadow-for-narrow-ichioshi-img sm:h-24 sm:w-full',
              'ov-md:shadow-for-wide-ichioshi-img ov-md:h-full ov-md:w-24'
            )}
          ></div> */}
          <div
            className={clsx(
              'border-0 bg-transparent absolute z-20',
              'sm:h-24 sm:w-full sm:bg-gradient-to-b sm:from-white sm:to-transparent',
              'ov-md:h-full ov-md:w-24 ov-md:bg-gradient-to-r ov-md:from-white ov-md:to-transparent'
            )}
          ></div>
          <div className='relative sm:h-64 ov-md:h-96 z-10 border-white'>
            {heroImgUrl ? (
              <Image
                layout='fill'
                objectFit='cover'
                loading='eager'
                src={heroImgUrl}
                alt='hero image of the department'
              />
            ) : (
              <div>now loading</div>
            )}
          </div>
        </div>
      </div>
      {isOpenDepTopTextModal && (
        <>
          <ModalMainArea
            closeModal={() => dispatch(closeDepTopTextModal())}
            modalWrapperStyle='sm:w-9/12 ov-md:w-[70vw]'
            modalContainerStyle='w-full space-y-4'
          >
            <div className='text-prime-blue-rich border-prime-blue-rich font-semibold border-b-2 text-base'>
              筑波大学附属病院{'　'}循環器内科イチオシポイント
            </div>
            <PushPoints />
          </ModalMainArea>
          <ModalBackdrop closeModal={() => dispatch(closeDepTopTextModal())} />
        </>
      )}
    </>
  )
}

export default DepTopSection
