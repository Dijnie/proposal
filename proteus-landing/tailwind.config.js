export default {
  content: ['./src/**/*.{astro,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        'proteus-cyan': '#06b6d4',
        'proteus-purple': '#a855f7',
      },
    },
  },
};
