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
        'hscreen/2': '50vh',
        'wscreen/2': '50vw',
        'wscreen7/10': '70vw',
        'fit-to-screen': '216vw',
        'screen*2': '200vw',
      }),
    },
    screens: {
      // => @media (max-width: 639px) { ... }
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
    },
    colors: {
      'prime-blue-rich': '#5DB0D0',
      'prime-blue-muted': '#F8FDFF',
      'prime-blue-pale': '#BBDFEC',
      'white': '#fff'
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
