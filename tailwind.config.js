module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/*.{ts,tsx}',
    './src/pages/Departments/*.{ts,tsx}',
    './src/components/departments/*.{ts,tsx}',
    './src/components/forms/*.{ts,tsx}',
    './src/components/forms/formAtoms/*.{ts,tsx}',
    './src/components/forms/updateForms/*.{ts,tsx}',
    './src/components/home/*.{ts,tsx}',
    './src/components/tabs/*.{ts,tsx}',
    './src/components/userDashboard/*.{ts,tsx}',
    './src/components/UIAtoms/*.{ts,tsx}',
    './src/components/favoriteDepartment/*.{ts,tsx}',
    './src/components/browseStudentsVoices/*.{ts,tsx}',
    './src/components/myRecord/*.{ts,tsx}',
  ],
  darkMode: false, // Or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['ヒラギノ角ゴシック'],
    },
    extend: {
      backgroundImage: {
        'hero-wideback-image': 'url(/svg/bg-top-m-l.svg)',
        'hero-narrowback-image': 'url(/svg/bg-top-s.svg)',
        'cc-back': 'url(/svg/bg-cc.svg)',
        'contact-button': 'url(/svg/contact-button.svg)',
      },
      backgroundPosition: {
        minus66px: '0 -66px',
      },
      boxShadow: {
        'for-narrow-ichioshi-img': 'inset 0px 60px 30px -7px white',
        'for-wide-ichioshi-img': 'inset 60px 0px 30px -7px white',
        'for-readmore': 'inset 0px -50px 48px 6px white',
        'all-dir': '0px 0px 30px #0000004E',
      },
      borderWidth: {
        1: '1px',
      },
      borderRadius: {
        'bg-corner-2xl': '216px',
        'bg-corner': '15vw',
      },
      colors: {
        'prime-blue-rich': '#5DB0D0',
        'prime-blue-muted': '#F8FDFF',
        'prime-blue-pale': '#BBDFEC',
        'off-white': '#ffffff98',
        purple: '#6E4E9D',
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20',
        60: '60',
      },
      fontSize: {
        '10vw': '10vw',
        '8vw': '8vw',
        '7vw': '7vw',
        '6vw': '6vw',
        '1.5vw': '1.5vw',
        '1vw': '1vw',
      },
      lineHeight: {
        '10vw': '10vw',
        '8vw': '8vw',
        '7vw': '7vw',
        '6vw': '6vw',
      },
      translate: {
        '1/7': '14.2857143%',
      },
    },
    screens: {
      sm: { max: '767px' },
      md: { min: '768px', max: '1023px' },
      lg: { min: '1024px', max: '1279px' },
      xl: { min: '1280px', max: '1535px' },
      '2xl': { min: '1536px' },
      'ov-md': '768px',
      'ov-lg': '1024px',
      'ov-xl': '1280px',
    },
    backdropFilter: {
      blur: 'blur(20px)',
    },
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-60': '-60deg',
      '-45': '-45deg',
      '-30': '-30deg',
      '-12': '-12deg',
      0: '0',
      12: '12deg',
      30: '30deg',
      45: '45deg',
      60: '60deg',
      90: '90deg',
      135: '135deg',
      180: '180deg',
      270: '270deg',
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
    },
  },
  // coreplugins: {
  //   gridTemplateColumns: true,
  //   gridTemplateRows: true,
  // },
}
