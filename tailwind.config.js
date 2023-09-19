/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
				'neutral': '#27272A',
				'primary': '#94232f',
				'secondary': '#1e66d0',
			},
    },
  },
  plugins: [],
};
