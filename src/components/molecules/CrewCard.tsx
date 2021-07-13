//External components
import Image from 'next/image'
import { useEffect, useState } from 'react'

//Firebase
import { storage } from '../../lib/firebase/firebase.config'


interface CrewCardPropsType {
  layoutStyles?: string;
  crewData: any;
}

interface CardFacePropsType {
  imgSrc?: string;
  flip: () => void;
  isArrowVanished?: boolean;
  crewName?: string;
  position?: string;
  background?: string;
  licence?: string;
  majorField?: string;
  schoolLife?: string;
  forFun?: string;
}

export default function CrewCard({ layoutStyles, crewData }: CrewCardPropsType) {
  const [isFliped, setIsFliped] = useState<boolean>(false)
  const [arrowVanisher, setArrowVanisher] = useState<boolean>(false)
  const [crewImg, setCrewImg] = useState<string>('')
  const flip = () => { setIsFliped(!isFliped) }
  const { crewName, position, background, licence, majorField, schoolLife, crewImgFileName, forFun } = crewData

  useEffect(
    () => {
      if (isFliped) setTimeout(() => setArrowVanisher(true), 300)
      else setTimeout(() => setArrowVanisher(false), 300)
    }, [isFliped])

  useEffect(
    () => {
      const storageRef = storage.ref()
      const imgPath = storageRef.child('flamelink/media').child(crewImgFileName)
      imgPath.getDownloadURL().then(url => setCrewImg(url)).catch(error => console.log(error));
    }, [])
  // sm:w-11/12 sm:h-wscreen7/10
  // md:w-8/12 md:h-wscreen9/20
  // lg:w-wscreen/3 lg:h-wscreen/5
  // ov-xl:w-wscreen2/7 ov-xl:h-wscreen/5
  return (
    <div className='
    perspective justify-self-center
    sm:w-112 sm:h-64
    md:w-112 md:h-64
    lg:w-112 lg:h-64
    xl:w-112 xl:h-64
    2xl:w-137 2xl:h-72 '>
      <div className={`w-full h-full preserve-3d duration-700 cursor-pointer relative ${isFliped && 'rotate-y-180'}`}>
        <CardHead
          flip={flip}
          isArrowVanished={arrowVanisher}
          imgSrc={crewImg}
          crewName={crewName}
          position={position}
          background={background}
          licence={licence}
          majorField={majorField}
        />
        <CardTail
          flip={flip}
          isArrowVanished={arrowVanisher}
          imgSrc={crewImg}
          crewName={crewName}
          position={position}
          schoolLife={schoolLife}
        />
      </div>
    </div>
  )
}

function CardHead({ imgSrc, flip, isArrowVanished, crewName, position, background, majorField, licence }: CardFacePropsType) {
  return (
    <div onClick={flip} className='absolute h-full w-full backface-invisible wk-backface-invisible'>
      <div className="relative grid grid-cols-10 w-full h-full shadow-lg backface-invisible wk-backface-invisible  crew-bg-blue border-1 border-prime-blue-rich rounded-sm" >
        <div className='col-span-4 flex items-center justify-center'>
          {imgSrc ? <Image width={154} height={204} src={imgSrc} loading='lazy' objectFit='cover' alt='crew image' className='w-11/12 h-11/12' /> : <div className='w-11/12 h-11/12 text-gray-400 flex justify-center' >now <br />loading</div>}
        </div>
        <div className='col-span-6 px-4 sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm flex flex-col justify-evenly'>
          <div>
            <p>{position}(役職)</p>
            <p className='font-semibold'>{crewName}</p>
          </div>
          <div >
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
        <div className={`absolute h-8 w-28 bottom-0 right-0 flex flex-row transform translate-y-1/4 ${isArrowVanished && 'hidden'}`}>
          <p className='text-xs text-prime-blue-rich pt-4'>the other side</p>
          <img className='h-8 w-8 bottom-0 right-0 ' src='/svg/reverse-icon.svg' />
        </div>
      </div>
    </div>
  )
}

function CardTail({ imgSrc, flip, isArrowVanished, crewName, position, schoolLife, forFun }: CardFacePropsType) {
  return (
    <div onClick={flip} className='absolute h-full w-full ' >
      <div className="relative grid grid-cols-10 w-full h-full crew-bg-purple rotate-y-180 backface-invisible  wk-backface-invisible shadow-lg border-1 border-prime-blue-rich rounded-sm" >
        <div className='col-span-4 flex items-center justify-center'>
          {imgSrc ? <Image width={154} height={204} src={imgSrc} loading='lazy' objectFit='cover' alt='crew image' /> : <div className='w-11/12 h-11/12 text-gray-400 flex justify-center' >now <br />loading</div>}
        </div>
        <div className='col-span-6 px-4 sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm flex flex-col justify-evenly'>
          <div>
            <p className=''>{position}(役職)</p>
            <p className='sm:text-sm md:text-sm lg:text-sm ov-lg:text-sm font-semibold'>{crewName}</p>
          </div>
          <div>
            <p className='font-semibold'>休日の過ごし方・趣味</p>
            <p> {forFun ? forFun : '特になし'}</p>
          </div>
          <div className=''>
            <p className='font-semibold'>学生時代の部活</p>
            <p>{schoolLife ? schoolLife : '特になし'} </p>
          </div>
        </div>
        <div className={`absolute h-8 w-28 bottom-0 right-0 flex flex-row transform translate-y-1/4 ${!isArrowVanished && 'hidden'}`}>
          <p className='text-xs text-prime-blue-rich pt-4'>the other side</p>
          <img className='h-8 w-8 bottom-0 right-0 ' src='/svg/reverse-icon.svg' />
        </div>
      </div>
    </div>
  )
}
