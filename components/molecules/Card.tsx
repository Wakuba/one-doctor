import { div } from '@fower/react'
import { FC } from 'react'

interface CardProps {
	children?: any;
}

const Card: FC<CardProps> = ({ children }) => (
    <div className='w-4/5 sm:w-2/5 flex-column justify-center content-center border-2 border-solid border-main-blue-rich'>
        <div className='w-full h-3/4 text-white text-xs bg-main-blue-rich'>
            <div >{ children ? children[0] : 'No data'}</div>
            <div >{ children ? children[1] : 'No data'}</div>
            {/* <div square-10 white css={{  gridArea: 'imgdiv'}}>{ children ? children[0] : 'No data'}</div> */}
            {/* <div toCenterY toLeft css={{ gridArea: 'textdiv'}}>{ children ? children[1] : 'No data'}</div> */}
        </div>
        <div className='w-full h-2/6 text-xs'>{children[2]}</div>
    </div>
)

export default Card
