/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
    spacing: {
      0: '0',
      0.5: '2px',
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '30px',
      7: '35px',
      8: '40px',
      9: '45px',
      10: '50px',
      11: '55px',
      12: '60px',
      13: '65px',
      14: '70px',
      15: '75px',
      16: '80px',
      17: '85px',
      18: '90px',
      19: '95px',
      20: '100px',
    },
    colors: {
      'main-black': '#262626',
      'main-black-80': '#333333',
      'main-black-50': '#939393',
      'secondary-black': '#5a5a5a',
      'main-accent': '#ff6b00',
      'secondary-accent': '#0bb7c2',
      'secondary-accent-stressed': '#ec5602',
      'error-sale': '#f93c00',
      'borders-color': '#e7e7e7',
      white: '#fff',
      background: '#f9f9f9',
      blue: '#7d00f9',
      green: '#11ba22',
    },
    // fontSize: {
    //   sm: '0.8rem',
    //   base: '1rem',
    //   xl: '1.25rem',
    //   '2xl': '1.563rem',
    //   '3xl': '1.953rem',
    //   '4xl': '2.441rem',
    //   '5xl': '3.052rem',
    //   15: '0.9rem',
    //   17: '1.1rem',
    // },
    // borderRadius: {
    //   10: '10px',
    //   15: '15px',
    //   20: '20px',
    //   30: '30px',
    // },
  },
  plugins: [],
}
