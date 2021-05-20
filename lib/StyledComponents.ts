import { styled } from '@fower/styled'

const PreStyledSquare = styled('div', { position: 'absolute', square: '25vw', zIndex: '-1'})
const RichBlueSquare = styled(PreStyledSquare, { backgroundColor: 'mainBlueRich'})
const MutedBlueSquare = styled(PreStyledSquare, { backgroundColor: 'mainBlueMuted'})
export const RichBlueTLSquare = styled(RichBlueSquare, { left: '0px', top: '0px' })
export const RichBlueBRSquare = styled(RichBlueSquare, { right: '0px', bottom: '0px' })
export const MutedBlueTLSquare = styled(MutedBlueSquare, { left: '0px', top: '0px' })
export const MutedBlueBRSquare = styled(MutedBlueSquare, { right: '0px', bottom: '0px' })