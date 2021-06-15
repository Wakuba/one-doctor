import VideoPopupper from "../molecules/VideoPopupper";

export default function MovieCarousel(props: { layoutStyle: string }) {
  return (
    <div className={`overflow-x-scroll  ${props.layoutStyle}`}>
      <div className='w-for-scroll h-64 flex flex-row space-x-3'>
        <VideoPopupper videoId='R7wI90H6Wuc' />
        <VideoPopupper videoId='R7wI90H6Wuc' />
        <VideoPopupper videoId='R7wI90H6Wuc' />
        <VideoPopupper videoId='R7wI90H6Wuc' />
      </div>
    </div>
  )
}
