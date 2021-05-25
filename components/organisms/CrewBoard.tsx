import CrewCard from '../molecules/CrewCard'

const CrewBoard = () => (
    <div className='grid grid-cols-2 w-full self-center gap-y-4 py-4'>
        <CrewCard headImgSrc='/images/tsukuba-prof1.jpeg' tailImgSrc='/images/tsukuba-prof2.jpeg'/>
        <CrewCard headImgSrc='/images/tsukuba-prof1.jpeg' tailImgSrc='/images/tsukuba-prof2.jpeg'/>
        <CrewCard headImgSrc='/images/tsukuba-prof1.jpeg' tailImgSrc='/images/tsukuba-prof2.jpeg'/>
        <CrewCard headImgSrc='/images/tsukuba-prof1.jpeg' tailImgSrc='/images/tsukuba-prof2.jpeg'/>
        <CrewCard headImgSrc='/images/tsukuba-prof1.jpeg' tailImgSrc='/images/tsukuba-prof2.jpeg'/>
        <CrewCard headImgSrc='/images/tsukuba-prof1.jpeg' tailImgSrc='/images/tsukuba-prof2.jpeg'/>
    </div>
)

export default CrewBoard