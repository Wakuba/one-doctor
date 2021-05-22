import { useState, ReactNode, FC } from 'react'
import ReactCardFlip from 'react-card-flip'

interface CrewCardProps {
	imgHeadSrc: string;
	imgTailSrc: string;
}

interface ContentProps {
	imgSrc: string;
	children: ReactNode;
}

const CrewCard: FC<CrewCardProps> = ({ imgHeadSrc, imgTailSrc }) => {
	const [ isFlipped, setIsFlipped ] = useState(true); 
    const DefaultContent: FC<ContentProps> = ({ imgSrc, children }) => (
        <button className='w-11/12 h-3/4 shadow-lg' onClick={flip}>
            <img className='' src={imgSrc} />
            <div >{children}</div>
        </button> 
    )
	const flip = () => {setIsFlipped(!isFlipped)};
		const HeadContent: FC<ContentProps> = ({ imgSrc, children }) => <DefaultContent imgSrc={imgSrc}>{ children }</DefaultContent>
		const TailContent: FC<ContentProps> = ({ imgSrc, children }) => <DefaultContent imgSrc={imgSrc}>{ children }</DefaultContent> 
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal' >
            <HeadContent  imgSrc={imgHeadSrc}>yamanaka</HeadContent>
            <TailContent  imgSrc={imgTailSrc}>matumura</TailContent>
        </ReactCardFlip>
    )
}


export default CrewCard
