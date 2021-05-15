import { Box } from '@fower/react'
import { useState, ReactNode, FC } from 'react'
import ReactCardFlip from 'react-card-flip'

interface CrewCardProps {
	imgHeadSrc: string;
	imgTailSrc: string;
	children: ReactNode;
}

const CrewCard: FC<CrewCardProps> = ({ imgHeadSrc, imgTailSrc, children}) => {
    const [ isFlipped, setIsFlipped ] = useState(true)
    const flip = () => {setIsFlipped(!isFlipped), console.log(isFlipped)}
    const HeadContent = ({ imgSrc , children}) => (
        <Box as='button' onClick={flip} css={{ 
            w: '90',
            h: '77',
            display: 'grid',
            background: `linear-gradient(to bottom,#5DB0D0 0%,#5DB0D0 30%, #F8FDFF 30%,#F8FDFF 100%)`,
            gridTemplate: `
            '.. ...... .. ....... ..' 8%
            '.. ...... .. textBox ..' 6%
            '.. imgBox .. textBox ..' auto
            '.. ...... .. textBox ..' 6%
            '.. ...... .. ....... ..' 8%/
            5% 35vw 5% auto 5%`
            }}>
            <Box as='img' src={imgSrc} w-35 css={{ gridArea: 'imgBox'}}/>
            <Box css={{ gridArea: 'textBox'}}>{children}</Box>
        </Box>
    )
    const TailContent = ({ imgSrc, children }) => (
        <Box as='button' onClick={flip} css={{ 
            w: '90',
            h: '77',
            display: 'grid',
            background: `linear-gradient(to bottom,#5DB0D0 0%,#5DB0D0 30%, #F8FDFF 30%,#F8FDFF 100%)`,
            gridTemplate: `
            '.. ...... .. ....... ..' 8%
            '.. ...... .. textBox ..' 6%
            '.. imgBox .. textBox ..' auto
            '.. ...... .. textBox ..' 6%
            '.. ...... .. ....... ..' 8%/
            5% 35vw 5% auto 5%`
            }}>
            <Box as='img' w-35 src={imgSrc} css={{ gridArea: 'imgBox'}}/>
            <Box  css={{ gridArea: 'textBox'}}>{children}</Box>
        </Box >
    )
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal' >
            <HeadContent  imgSrc={imgHeadSrc}>山中先生</HeadContent>
            <TailContent  imgSrc={imgTailSrc}> 松村先生
            </TailContent>
        </ReactCardFlip>
    )
}


export default CrewCard
