export const videoIdExtractor = (videoUrl: string): string =>
  String(videoUrl.match(new RegExp('(?<=v=).+')))
