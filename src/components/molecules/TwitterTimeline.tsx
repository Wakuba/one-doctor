import { useEffect, useState } from 'react'

export default function TwitterTimeline({ href }: { href: string }) {
  const [isLoadwidgets, setIsLoadwidgets] = useState<boolean>(false)
  useEffect(() => {
    if (!isLoadwidgets) {
      const script = document.createElement('script')
      script.src = 'https://platform.twitter.com/widgets.js'
      document.body.appendChild(script)
      setIsLoadwidgets(true)
      return () => {
        document.body.removeChild(script)
      }
    }
  }, [])
  console.log('href', href)
  console.log('https://twitter.com/tkbradiol?ref_src=twsrc%5Etfw')
  return (
    <div className='border-8 border-prime-blue-rich ov-md:w-8/12 sm:w-full'>
      <a
        className='twitter-timeline'
        data-width='100%'
        data-height='800'
        data-theme='light'
        data-chrome='noheadernofooternoborders'
        href={href}
      >
        A Twitter List by Nr_Narumium
      </a>
    </div>
  )
}
{
  /* <a href="https://twitter.com/intent/tweet?screen_name=tkbradiol&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-show-count="false">Tweet to @tkbradiol</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */
  // <a href="https://twitter.com/intent/tweet?screen_name=tkbradiol&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-show-count="false">Tweet to @tkbradiol</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  // https://twitter.com/tkbradiol?s=20
  // <a class="twitter-timeline" href="https://twitter.com/tkbradiol?ref_src=twsrc%5Etfw">Tweets by tkbradiol</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
}
