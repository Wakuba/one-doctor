import { useEffect } from 'react'

export default function TwitterTimeline({ href }: { href: string }) {
	useEffect(() => {
		const script = document.createElement('script')
		script.src = 'https://platform.twitter.com/widgets.js'
		document.body.appendChild(script)
		return () => {
			document.body.removeChild(script)
		}
	}, [])
	return (
		<div className="border-8 border-prime-blue-rich ov-md:w-8/12 sm:w-full">
			<a
				className="twitter-timeline"
				data-width="100%"
				data-height="800"
				data-theme="light"
				data-chrome="noheadernofooternoborders"
				href={href}
			>
				A Twitter List by Nr_Narumium
			</a>
		</div>
	)
}
