module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-wideback-image': "url(/svg/bg-top-m-l.svg)",
        'hero-narrowback-image': "url(/svg/bg-top-s.svg)",
        'ed-narrowback': 'url(/svg/bg-ed-s.svg)'
      }),
      backgroundPosition: theme => ({
        'minus66px': '0 -66px'
      }),
      boxShadow: {
        'for-ichioshi-img': 'inset 0px 60px 30px -7px white'
      },
      spacing: theme => ({
        '1/20'         : '5%',
        '2/11'         : '18.1818%',
        '1/10'         : '10%',
        'fit-to-screen': '216vw',
        'fit-to-widescreen': '1050px',
        'for-scroll'   : '1560px',
        'screen*2'     : '200vw',
        'hscreen/2'    : '50vh',
        'wscreen/2'    : '50vw',
        'wscreen9/20'  : '45vw',
        'wscreen/20'   : '5vw',
        'wscreen7/10'  : '70vw',
        'wscreen/10'   : '10vw',
        'wscreen/8'    : '12.5vw',
        'wscreen2/5'   : '40vw',
        'wscreen/5'    : '20vw',
        'wscreen/4'    : '25vw',
        'wscreen/3'    : '33vw',
      }),
      height: theme => ({
        '1/20'         : '5%',
        '2/11'         : '18.1818%',
        '1/10'         : '10%',
        'fit-to-screen': '216vw',
        'fit-to-widescreen': '1050px',
        'for-scroll'   : '1560px',
        'screen*2'     : '200vw',
        'hscreen/2'    : '50vh',
        'wscreen/2'    : '50vw',
        'wscreen9/20'  : '45vw',
        'wscreen/20'   : '5vw',
        'wscreen7/10'  : '70vw',
        'wscreen/10'   : '10vw',
        'wscreen/8'    : '12.5vw',
        'wscreen2/5'   : '40vw',
        'wscreen/5'    : '20vw',
        'wscreen/4'    : '25vw',
        'wscreen/3'    : '33vw',
      }),
      width: theme => ({
        '1/20'         : '5%',
        '2/11'         : '18.1818%',
        '1/10'         : '10%',
        'fit-to-screen': '216vw',
        'fit-to-widescreen': '1050px',
        'for-scroll'   : '1560px',
        'screen*2'     : '200vw',
        'hscreen/2'    : '50vh',
        'wscreen/2'    : '50vw',
        'wscreen9/20'  : '45vw',
        'wscreen/20'   : '5vw',
        'wscreen7/10'  : '70vw',
        'wscreen/10'   : '10vw',
        'wscreen/8'    : '12.5vw',
        'wscreen2/5'   : '40vw',
        'wscreen/5'    : '20vw',
        'wscreen/4'    : '25vw',
        'wscreen/3'    : '33vw',
      }),
      borderWidth: {
        1: '1px'
      },
      borderRadius: {
        'bg-corner': '25vw'
      },
      colors: {
        'prime-blue-rich': '#5DB0D0',
        'prime-blue-muted': '#F8FDFF',
        'prime-blue-pale': '#BBDFEC',
      },
      inset: {
        '18': '4.5rem',
        '162': '40.5rem',
        '3vw': '3vw',
        '5vw': '5vw',
        '15vw': '15vw',
      },
      zIndex: {
        '-10': '-10'
      },
    },
    screens: {
      'sm': {'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
      'ov-md': '768px',
      'ov-lg': '1024px'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
