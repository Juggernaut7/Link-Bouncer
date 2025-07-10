/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        safe: '#43B929',
        alert: '#FF37A6',

        // Optional custom neutrals for dark theme
        darkBg: '#0f0f0f',
        darkCard: '#1a1a1a',
        neonGreen: '#43B929',
        neonPink: '#FF37A6',
        neonBlue: '#00FFFF',
      },
      fontFamily: {
        sans: ['Inter', 'Sora', 'Poppins', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        neon: '0 0 10px rgba(67, 185, 41, 0.7)',
        pinkGlow: '0 0 10px rgba(255, 55, 166, 0.7)',
      },
      animation: {
        pulseSlow: 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
