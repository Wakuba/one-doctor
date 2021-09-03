const patternExtractorFromIframe = `http(s)?://www.google.com/maps/embed(\\S)*(?=('|"))`
const patternExtractorFromTwitterTimelineEmbedder = `http(s)?://twitter.com/(\\S)*(?=('|"))`

const getUrl = (text: string, extractor: string): RegExpMatchArray | string => {
  if (!text) return ''
  const patternExtractor = new RegExp(extractor, 'g')
  const url = String(text).match(patternExtractor)
  console.log(url)
  return url ? url : ''
}

export const getUrlFromIframe = (text: string): RegExpMatchArray | string =>
  getUrl(text, patternExtractorFromIframe)

export const getUrlFromTwitterTimeline = (
  text: string
): RegExpMatchArray | string =>
  getUrl(text, patternExtractorFromTwitterTimelineEmbedder)
