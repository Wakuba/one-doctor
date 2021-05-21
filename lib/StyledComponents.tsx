import { FC } from 'react'

interface Styles {
    styles: string
}

const PreStyledSquare: FC<Styles> = ({ styles }) => ( <div className={`absolute -z-10 w-wscreen/4 h-wscreen/4 ${styles}`}></div> )
const RichBlueSquare: FC<Styles> = ({ styles }) => (<PreStyledSquare styles={`bg-prime-blue-rich ${styles}`}/>)
const MutedBlueSquare: FC<Styles> = ({ styles }) => (<PreStyledSquare styles={`bg-prime-blue-muted ${styles}`}/>)
export const RichBlueTLSquare = () => (<RichBlueSquare styles='left-0 top-0'/>)
export const RichBlueBRSquare = () => (<RichBlueSquare styles='right-0 bottom-0'/>)
export const MutedBlueTLSquare = () => (<MutedBlueSquare styles='left-0 top-0'/>)
export const MutedBlueBRSquare = () => (<MutedBlueSquare styles='right-0 bottom-0'/>)