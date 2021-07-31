import { ModalBackdrop, ModalMainArea } from '../atoms/Modal'
import Image from 'next/image'
import PushPoint from '../atoms/PushPoint'
import ThreePointLeader from '../atoms/ThreePointLeader'
import { useState } from 'react'

interface DepTopSectionPropsType {
  depName: string
  heroImg: string
  educationalPoint: string
  clinicalPoint: string
  researchPoint: string
  otherPoint: string
}

export default function DepTopSection({
  depName,
  heroImg,
  educationalPoint,
  clinicalPoint,
  researchPoint,
  otherPoint,
}: DepTopSectionPropsType) {
  const [isTextModalOpen, setIsTextModalOpen] = useState<boolean>(false),
    PushPoints = () => (
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
        onClick={() => setIsTextModalOpen(true)}
        className="w-full bg-white shadow-md flex sm:flex-col ov-md:flex-row "
      >
        <div className="ov-md:p-8 sm:w-full md:w-[358px] lg:w-[504px] xl:w-[537.5px] 2xl:w-[681px] ov-md:h-96">
          <div className="sm:p-3 sm:h-72  overflow-y-hidden relative">
            <div className="space-y-4 ov-md:h-72 ">
              <div className="text-prime-blue-rich border-prime-blue-rich font-semibold border-b-2 text-base">
                筑波大学附属病院{'　'}
                {depName}イチオシポイント
              </div>
              <PushPoints />
            </div>
            <div className="absolute w-full left-0 bottom-0 shadow-for-readmore h-16"></div>
          </div>
          <ThreePointLeader />
          <button className="w-full h-8 text-xs bg-white focus:outline-none ">
            もっと読む
          </button>
        </div>
        <div
          className="relative
        sm:w-full md:w-[358px] lg:w-[504px] xl:w-[537.5px] 2xl:w-[689px]
        sm:h-64 ov-md:h-96"
        >
          <div
            className="border-0
                          bg-transparent
                          absolute
                          z-20
                          sm:shadow-for-narrow-ichioshi-img
                          sm:h-24
                          sm:w-full
                          ov-md:shadow-for-wide-ichioshi-img
                          ov-md:h-full
                          ov-md:w-24
          "
          ></div>
          <div className="relative sm:h-64 ov-md:h-96 z-10 border-white">
            {heroImg ? (
              <Image
                layout="fill"
                objectFit="cover"
                loading="eager"
                src={heroImg}
                alt="hero image of the department"
              />
            ) : (
              <div>now loading</div>
            )}
          </div>
        </div>
      </div>
      {isTextModalOpen && (
        <>
          <ModalMainArea
            closeModal={() => setIsTextModalOpen(false)}
            modalWrapperStyle="sm:w-9/12 ov-md:w-[70vw] h-5/6"
            modalContainerStyle="w-full space-y-4"
          >
            <div className="text-prime-blue-rich border-prime-blue-rich font-semibold border-b-2 text-base">
              筑波大学附属病院{'　'}循環器内科イチオシポイント
            </div>
            <PushPoints />
          </ModalMainArea>
          <ModalBackdrop closeModal={() => setIsTextModalOpen(false)} />
        </>
      )}
    </>
  )
}
