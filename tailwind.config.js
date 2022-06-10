module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    backgroundSize: ({ theme }) => ({
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      ...theme('spacing'),
    }),
    extend: {},
  },
  plugins: [],
};
