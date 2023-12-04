module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extends: {},
    fontFamily: {
      inter: ['inter', 'sans-serif'],
      poppins: ['poppins', 'serif'],
      'fira-mono': ['fira-mono'],
      trajan: ['trajan-pro-3', 'serif'],
      krete: ['krete', 'serif']
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
