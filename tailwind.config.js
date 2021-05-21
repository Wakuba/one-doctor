module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-10': '-10'
      },
      backgroundImage: theme => ({
        'hero-wideback-image': "url(/svg/bg-top-m-l.svg)",
        'hero-narrowback-image': "url(/svg/bg-top-s.svg)",
      }),
      backgroundPosition: theme => ({
        'minus66px': '0 -66px'
      }),
      spacing: theme => ({
        '1/20'         : '5%',
        '1/10'         : '10%',
        'fit-to-screen': '216vw',
        'fit-to-widescreen': '1000px',
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
        '162': '40.5rem'
      }
    },
    screens: {
      'sm': {'max': '639px'},
      'md': {'min': '640px', 'max': '767px'},
      'lg': {'min': '768px', 'max': '1023px'},
      'xl': {'min': '1024px', 'max': '1279px'},
      '2xl': {'min': '1280px', 'max': '1535px'},
      '3xl': {'min': '1536px'},
      'ov-md': '640px'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
