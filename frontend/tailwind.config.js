/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2868ad',
        'primary-highlight': '#4d91db',
        'primary-dark': '#19497d',
      },
      fontSize: {
        'massive': [
          '80px',
          {
            lineHeight: '120%',
            letterSpacing: '0%',
            fontWeight: '700',
          },
        ],
        'heading': [
          '48px',
          {
            lineHeight: '120%',
            letterSpacing: '0%',
            fontWeight: '700',
          },
        ],
        'subheading': [
          '32px',
          {
            lineHeight: '120%',
            letterSpacing: '0%',
            fontWeight: '600',
          },
        ],
        'body': [
          '24px',
          {
            lineHeight: '120%',
            letterSpacing: '0%',
            fontWeight: '500',
          },
        ],
        'button': [
          '24px',
          {
            lineHeight: '120%',
            letterSpacing: '0%',
            fontWeight: '700',
          },
        ],
      },
      fontFamily: {
        'OpenSans': ['Open Sans', 'sans-serif'],
        'DmSans': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
