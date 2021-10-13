const patternExtractorFromIframe = `http(s)?://www.google.com/maps/embed(\\S)*(?=('|"))`
const patternExtractorFromTwitterTimelineEmbedder = `http(s)?://twitter.com/(\\S)*(?=('|"))`

const getUrl = (text: string, extractor: string): RegExpMatchArray | string => {
  if (!text) return ''
  const patternExtractor = new RegExp(extractor, 'g')
  const url =
    String(text).slice(0, 4) === 'http'
      ? text
      : String(text).match(patternExtractor)
  return url ? url : text
}

export const getUrlFromIframe = (text: string): RegExpMatchArray | string =>
  getUrl(text, patternExtractorFromIframe)

export const getUrlFromTwitterTimeline = (
  text: string
): RegExpMatchArray | string =>
  getUrl(text, patternExtractorFromTwitterTimelineEmbedder)
