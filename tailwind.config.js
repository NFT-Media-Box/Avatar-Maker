module.exports = {
  important: true,
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    fontFamily: {
      'custom-arias-jon': ['DwarvenAxe'],
      'custom-caution': ['Caution'],
      'custom-cgf': ['CGF']
    },
     extend: {
      textColor: {
        'title': '#0e044c'
      },
      dropShadow: {
        'green': '0 15px 10px rgba(255, 215, 0, 0.2)',
      },
      boxShadow: {
        'green': '0 15px 10px rgba(255, 215, 0, 0.2)',
      },
      backgroundColor: {
        "menu-bg": "#252525",
        "create-avatar-bg": "#150941",
        "incoming": "#fafaf2",
      },
      width: {
        '7/8': '82%',
      },
      height: {
        '25.8': '103px',
      },
      minWidth: {
      '1/5': '20%',
      '1/4': '25%',
      '1/2': '50%',
      '1/3': '33.33%',
      '3/4': '75%',
      'full': '100%',
      '3/2': '150%',
      '2': '200%',
      },
      minHeight: {
      '1/5': '20%',
      '1/4': '25%',
      '1/2': '50%',
      '1/3': '33.33%',
      '3/4': '75%',
      'full': '100%',
      '3/2': '150%',
      '2': '200%',
      },
      inset: {
      "1-31": "23rem",
      "1-31": "22rem",
      "1-32": "31rem",
      "1-34": "39rem",
      "1-36": "48rem",
      "2/5": "43%",
      "3/5": "60%",
      "4/5": "65%",
      "1/2": "50%",
      "1/7": "15%",
      "1/8": "13%",
      "1/9": "11%",
      "1/10": "10%",
      "1/11": "9%",
      },
      padding: {
        "1/6": "15%",
        "1/5": "20%",
      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
}