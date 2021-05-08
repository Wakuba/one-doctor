import { setConfig, setTheme } from '@fower/core' 
import { addAtom } from '@fower/core'
import { injectGlobalStyle } from '@fower/core'
import { WIDTH_THRESHOLD } from './lib/variables'


const FowerSettings = () => {
    setConfig({
        unit: 'vw',
    }) 

    setTheme({
        breakpoints: {
          sm: `${WIDTH_THRESHOLD}px`,
          md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        },
        colors: {
            mainBlueRich: '#5DB0D0',
            mainBlueMuted: '#F8FDFF',
            white: '#fff'
        }
    })

    injectGlobalStyle({
    body: {
        margin: 0,
    }
    })

    addAtom(/coreFontSize(sm|md|lg)/i, (atom) => {
    const size = atom.propKey.replace('coreFontSize', '').toLowerCase()
    switch (size) {
        case 'sm':
        atom.style = { fontSize: 'clamp(11px, 2.0vw, 13px)' }
        break
        case 'md':
        atom.style = { fontSize: 'clamp(13px, 2.7vw, 16px)'}
        break
        case 'lg':
        atom.style = { fontSize: 'clamp(30px, 5vw, 75px)' }
        break
        default:
        break
    }
    return atom
    })
}

export default FowerSettings