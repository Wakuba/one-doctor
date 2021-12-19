export const videoIdExtractor = (movieUrl: string): string =>
  String(movieUrl.match(new RegExp('(?<=v=).+')))
