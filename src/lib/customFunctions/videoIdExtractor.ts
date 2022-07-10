export const videoIdExtractor = (videoUrl: string): string => {
  const isTLD = videoUrl.match('youtube.com')
  // const isYoutuDotBe = videoUrl.match('youtu.be')
  console.log('isTLD', isTLD)
  console.log(videoUrl)
  // if (isTLD) return String(videoUrl.match(new RegExp('(?<=v=).+')))
  if (isTLD) return videoUrl.replace('https://www.youtube.com/watch?v=', '')
  // else return String(videoUrl.match(new RegExp('(?<=https://youtu.be/).+')))
  else return videoUrl.replace('https://youtu.be/', '')
}
