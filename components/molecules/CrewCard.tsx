import { useState, FC } from 'react'

interface CrewCardPropsType {
  layoutStyles?: string;
  headImgSrc?: string;
  tailImgSrc?: string;
}

export default function CrewCard({ layoutStyles, headImgSrc, tailImgSrc }: CrewCardPropsType) {
  const [isFliped, setIsFliped] = useState<boolean>(false)
  const flip = () => { setIsFliped(!isFliped) }
  const CardHead = ({ imgSrc }: { imgSrc?: string }) => (
    <div className="absolute w-full h-full backface-invisible wk-backface-invisible overflow-hidden rounded-8 shadow-lg bg-red-500" onClick={flip}>
      <img className='object-cover h-38 w-32 bg-black' src={imgSrc} />
    </div>
  )

  const CardTail = ({ imgSrc }: { imgSrc?: string }) => (
    <div className="absolute w-full h-full bg-blue-400 rotate-y-180 backface-invisible wk-backface-invisible" onClick={flip}>
      <div className='h-38 w-32 '>
        <img className='object-fit bg-black w-full' src={imgSrc} />
      </div>
    </div>
  )
  return (
    <div className={`sm:w-11/12 ov-md:w-wscreen2/7 ov-md:h-wscreen/7 perspective justify-self-center ${layoutStyles}`}>
      <div className={`w-full h-full preserve-3d duration-700 cursor-pointer relative ${isFliped && 'rotate-y-180'}`}>
        <CardHead imgSrc={headImgSrc} />
        <CardTail imgSrc={tailImgSrc} />
      </div>
    </div>
  )
}
