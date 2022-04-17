export const videoIdExtractor = (videoUrl: string): string => {
  const isTLD = videoUrl.match('youtube.com')
  // const isYoutuDotBe = videoUrl.match('youtu.be')
  console.log('isTLD', isTLD)
  if (isTLD) return String(videoUrl.match(new RegExp('(?<=v=).+')))
  else return String(videoUrl.match(new RegExp('(?<=https://youtu.be/).+')))
}
