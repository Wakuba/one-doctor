export const videoIdExtractor = (videoUrl: string): string => {
  const isTLD = videoUrl.match('youtube.com')
  if (isTLD) return videoUrl.replace('https://www.youtube.com/watch?v=', '')
  else return videoUrl.replace('https://youtu.be/', '')
}
