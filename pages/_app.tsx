import React  from 'react'
import Head from 'next/head'
import type { AppProps /*, AppContext */ } from 'next/app'
import { useMediaQuery } from '../lib/CustomHooks'
import ScreenWidthContext from '../contexts/ScreenWidthContext'
import { WIDTH_THRESHOLD } from '../lib/variables'
import {setConfig,  addAtom, injectGlobalStyle } from '@fower/core'

setConfig({
    unit: 'vw',
    pseudos: ['after', 'before'],
    theme: {
        breakpoints: {
            sm: `${WIDTH_THRESHOLD}px`,
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        colors: { mainBlueRich: '#5DB0D0', mainBlueMuted: '#F8FDFF', white: '#fff',
            black: '#000',
            normShadeColor: '#707070',
        },
        fontWeights: {
            hairline: 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900,
        },
    }
},'merge') 


injectGlobalStyle({
body: {
    margin: 0,
}
})

addAtom(/coreFontSize(sm|md|lg|xl)/i, atom => {
const size = atom.propKey.replace('coreFontSize', '').toLowerCase()
switch (size) {
    case 'sm':
    atom.style = { fontSize: 'clamp(11px, 2.0vw, 14px)' }
		break 
		case 'md':
    atom.style = { fontSize: 'clamp(14px, 3vw, 16px)'}
    break
    case 'lg':
    atom.style = { fontSize: 'clamp(20px, 5vw, 48px)' }
    break
    case 'xl' :
    atom.style = { fontSize: 'clamp(30px, 8vw, 80px)' }
    break
    default: ;
    break
}
return atom
})

const MyApp = ({ Component, pageProps }: AppProps) => { 
    let isPageSmall = useMediaQuery(`(max-width: ${WIDTH_THRESHOLD}px`)
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <ScreenWidthContext.Provider value={isPageSmall}>
                <Component {...pageProps} /> 
            </ScreenWidthContext.Provider>
        </>
    )
}


export default MyApp
