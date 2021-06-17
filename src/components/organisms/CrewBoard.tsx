import CrewCard from '../molecules/CrewCard'

export default function CrewBoard() {
  return (
    <div className='ov-md:grid ov-md:grid-cols-2 ov-md:gap-y-4 sm:flex sm:flex-col sm:items-center sm:space-y-2 w-full py-4'>
      <CrewCard headImgSrc='/images/tsukuba-prof1.jpeg' tailImgSrc='/images/tsukuba-prof2.jpeg' />
      <CrewCard headImgSrc='/images/tsukuba-prof1.jpeg' tailImgSrc='/images/tsukuba-prof2.jpeg' />
      <CrewCard headImgSrc='/images/tsukuba-prof1.jpeg' tailImgSrc='/images/tsukuba-prof2.jpeg' />
      <CrewCard headImgSrc='/images/tsukuba-prof1.jpeg' tailImgSrc='/images/tsukuba-prof2.jpeg' />
      <CrewCard headImgSrc='/images/tsukuba-prof1.jpeg' tailImgSrc='/images/tsukuba-prof2.jpeg' />
      <CrewCard headImgSrc='/images/tsukuba-prof1.jpeg' tailImgSrc='/images/tsukuba-prof2.jpeg' />
    </div>
  )
}

