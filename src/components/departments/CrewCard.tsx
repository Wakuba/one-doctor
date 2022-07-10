import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface CardFacePropsType {
  imgSrc?: string
  isArrowVanished?: boolean
  crewName?: string
  position?: string
  background?: string
  licence?: string
  majorField?: string
  schoolLife?: string
  forFun?: string
}

interface CrewCardPropsType {
  crewData: any
  layoutStyle?: string
}

const CrewCard: React.VFC<CrewCardPropsType> = ({ crewData, layoutStyle }) => {
  const [isFliped, setIsFliped] = useState<boolean>(false),
    [arrowVanisher, setArrowVanisher] = useState<boolean>(false)
  const flip = () => {
    setIsFliped(!isFliped)
  }
  const {
    crewName,
    position,
    background,
    licence,
    majorField,
    schoolLife,
    crewImgUrl,
    forFun,
  } = crewData

  useEffect(() => {
    if (isFliped) setTimeout(() => setArrowVanisher(true), 300)
    else setTimeout(() => setArrowVanisher(false), 300)
  }, [isFliped])

  return (
    <div
      onClick={flip}
      className={clsx(
        'block perspective justify-self-center bg-transparent',
        'sm:min-w-[318px] sm:max-w-[400px] sm:w-4/6 sm:h-72',
        'md:w-[456px] md:h-72',
        'lg:w-[420px] lg:h-80',
        'xl:w-[420px] xl:h-80',
        '2xl:w-[548px] 2xl:h-72',
        layoutStyle
      )}
    >
      <div
        className={clsx(
          'inline-block w-full h-full preserve3d duration-700 cursor-pointer relative bg-transparent',
          isFliped && 'rotate-y-180'
        )}
      >
        <CardHead
          isArrowVanished={arrowVanisher}
          imgSrc={crewImgUrl}
          crewName={crewName}
          position={position}
          background={background}
          licence={licence}
          majorField={majorField}
        />
        <CardTail
          isArrowVanished={arrowVanisher}
          imgSrc={crewImgUrl}
          crewName={crewName}
          position={position}
          schoolLife={schoolLife}
          forFun={forFun}
        />
      </div>
    </div>
  )
}

function CardHead({
  imgSrc,
  isArrowVanished,
  crewName,
  position,
  background,
  majorField,
  licence,
}: CardFacePropsType) {
  return (
    <div className='block absolute h-full w-full backface-invisible z-10'>
      <div className='relative grid grid-cols-10 w-full h-full shadow-lg border-1 bg-gradient-to-b from-prime-blue-rich via-white to-white  border-prime-blue-rich rounded-sm'>
        <div className='col-span-4 flex items-center justify-center'>
          {imgSrc ? (
            <div className='relative sm:w-[110px] sm:h-[145px] ov-md:w-[154px] ov-md:h-[204px]'>
              <Image
                layout='fill'
                src={imgSrc}
                loading='lazy'
                objectFit='cover'
                alt='crew image'
              />
            </div>
          ) : (
            <div className='w-11/12 h-11/12 text-gray-400 flex justify-center'>
              now <br />
              loading
            </div>
          )}
        </div>
        <div
          className={clsx(
            'col-span-6 sm:px-2 ov-md:px-4 flex flex-col justify-evenly',
            'sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm '
          )}
        >
          <div>
            <p>{position}(役職)</p>
            <p className='font-semibold'>{crewName}</p>
          </div>
          <div>
            <p className='font-semibold'>略歴</p>
            <p>{background ? background : '特になし'}</p>
          </div>
          <div>
            <p className='font-semibold'>資格</p>
            <p>{licence ? licence : '特になし'}</p>
          </div>
          <div>
            <p className='font-semibold'>専門分野,研究</p>
            <p>{majorField ? majorField : '特になし'}</p>
          </div>
        </div>
        <div
          className={`absolute h-8 w-32 bottom-[6px] right-[-8px] flex flex-row justify-between transform translate-y-1/4 ${
            isArrowVanished && 'hidden'
          }`}
        >
          <p className='text-xs text-prime-blue-rich pt-4'>the other side</p>
          <img className='h-8 w-8 bottom-0 right-0 ' src='/svg/Uturn.svg' />
        </div>
      </div>
    </div>
  )
}

function CardTail({
  imgSrc,
  isArrowVanished,
  crewName,
  position,
  schoolLife,
  forFun,
}: CardFacePropsType) {
  return (
    <div className='absolute h-full w-full backface-invisible rotate-y-180'>
      <div className='relative grid grid-cols-10 w-full h-full bg-gradient-to-b from-purple via-white to-white shadow-lg border-[1px] border-prime-blue-rich rounded-sm'>
        <div className='col-span-4 flex items-center justify-center'>
          {imgSrc ? (
            <div className='relative sm:w-[110px] sm:h-[145px] ov-md:w-[154px] ov-md:h-[204px]'>
              <Image
                layout='fill'
                src={imgSrc}
                loading='lazy'
                objectFit='cover'
                alt='crew image'
              />
            </div>
          ) : (
            <div className='w-11/12 h-11/12 text-gray-400 flex justify-center'>
              now <br />
              loading
            </div>
          )}
        </div>
        <div className='col-span-6 px-4 sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm flex flex-col justify-evenly'>
          <div>
            <p>{position}(役職)</p>
            <p className='sm:text-sm md:text-sm lg:text-sm ov-lg:text-sm font-semibold'>
              {crewName}
            </p>
          </div>
          <div>
            <p className='font-semibold'>休日の過ごし方・趣味</p>
            <p> {forFun ? forFun : '特になし'}</p>
          </div>
          <div>
            <p className='font-semibold'>学生時代の部活</p>
            <p>{schoolLife ? schoolLife : '特になし'}</p>
          </div>
        </div>
        <div
          className={clsx(
            'absolute h-8 w-32 bottom-[6px] right-[-8px] flex flex-row justify-between transform translate-y-1/4',
            !isArrowVanished && 'hidden'
          )}
        >
          <p className='text-xs text-prime-blue-rich pt-4'>the other side</p>
          <img className='h-8 w-8 bottom-0 right-0 ' src='/svg/Uturn.svg' />
        </div>
      </div>
    </div>
  )
}

export default CrewCard
