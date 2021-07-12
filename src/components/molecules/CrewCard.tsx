import { useEffect, useState } from 'react'
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
}

const CardHead = ({ imgSrc, flip, isArrowVanished, crewName, position, background, majorField, licence }: CardFacePropsType) => (
  <div onClick={flip} className='absolute h-full w-full backface-invisible wk-backface-invisible'>
    <div className="relative grid grid-cols-10 w-full h-full shadow-lg backface-invisible wk-backface-invisible  crew-bg-blue border-1 border-prime-blue-rich rounded-sm" >
      <div className='col-span-4 flex items-center justify-center'>
        <img className='object-conttain w-11/12 h-11/12' src={imgSrc} />
      </div>
      <div className='col-span-6 px-4 sm:text-xs md:text-sm ov-lg:text-xs flex flex-col justify-evenly'>
        <div>
          <p className=''>{position}(役職)</p>
          <p className='sm:text-sm md:text:md ov-lg:text-sm  font-semibold'>{crewName}</p>
        </div>
        <div className=''>
          <p className='font-semibold'>略歴</p>
          <p>{background}</p>
        </div>
        <div>
          <p className='font-semibold'>資格</p>
          <p>{licence}</p>
        </div>
        <div>
          <p className='font-semibold'>専門分野,研究</p>
          <p>{majorField}</p>
        </div>
      </div>
      <div className={`absolute h-8 w-28 bottom-0 right-0 flex flex-row transform translate-y-1/4 ${isArrowVanished && 'hidden'}`}>
        <p className='text-xs text-prime-blue-rich pt-4'>the other side</p>
        <img className='h-8 w-8 bottom-0 right-0 ' src='/svg/reverse-icon.svg' />
      </div>
    </div>
  </div>
)

const CardTail = ({ imgSrc, flip, isArrowVanished, crewName, position, schoolLife }: CardFacePropsType) => (
  <div onClick={flip} className='absolute h-full w-full ' >
    <div className="relative grid grid-cols-10 w-full h-full crew-bg-purple rotate-y-180 backface-invisible  wk-backface-invisible shadow-lg border-1 border-prime-blue-rich rounded-sm" >
      <div className='col-span-4 flex items-center justify-center'>
        <img className='object-contain w-11/12 h-11/12' src={imgSrc} />
      </div>
      <div className='col-span-6 px-4 sm:text-xs md:text-xs lg:text-xs ov-xl:text-xs flex flex-col justify-evenly'>
        <div>
          <p className=''>{position}(役職)</p>
          <p className='sm:text-sm md:text-sm lg:text-sm ov-lg:text-sm font-semibold'>{crewName}</p>
        </div>
        <div>
          <p className='font-semibold'>休日の過ごし方・趣味</p>
          <p> テキストテキストテキストテキストテキス </p>
        </div>
        <div className=''>
          <p className='font-semibold'>学生時代の部活</p>
          <p>{schoolLife} </p>
        </div>
      </div>
      <div className={`absolute h-8 w-28 bottom-0 right-0 flex flex-row transform translate-y-1/4 ${!isArrowVanished && 'hidden'}`}>
        <p className='text-xs text-prime-blue-rich pt-4'>the other side</p>
        <img className='h-8 w-8 bottom-0 right-0 ' src='/svg/reverse-icon.svg' />
      </div>
    </div>
  </div>
)

export default function CrewCard({ layoutStyles, crewData }: CrewCardPropsType) {
  const [isFliped, setIsFliped] = useState<boolean>(false)
  const [arrowVanisher, setArrowVanisher] = useState<boolean>(false)
  const [crewImg, setCrewImg] = useState<string>('')
  const flip = () => { setIsFliped(!isFliped) }
  const { crewName, position, background, licence, majorField, schoolLife, crewImgFileName } = crewData

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

  return (
    <div className={`${layoutStyles}
    sm:w-11/12 sm:h-wscreen7/10
    md:w-8/12 md:h-wscreen9/20
    lg:w-wscreen/3 lg:h-wscreen/5
    ov-xl:w-wscreen2/7 ov-xl:h-wscreen/5
    perspective
    justify-self-center `}>
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
