/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007AFF',
        'primary-light': '#00C2FF',
        accent: '#7B61FF',
        'accent-light': '#FF4D6D',
        bg: '#F5F7FA',
        card: '#FFFFFF',
        foreground: '#1A1A2E',
        secondary: '#4A4A6A',
        muted: '#8888AA',
        border: 'rgba(0,0,0,0.07)',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '20px',
        '4xl': '24px',
        '5xl': '32px',
      },
      boxShadow: {
        card: '0 2px 16px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)',
        'card-hover': '0 12px 40px rgba(0,122,255,0.14), 0 4px 16px rgba(0,0,0,0.08)',
        'card-active': '0 20px 60px rgba(0,122,255,0.18), 0 8px 24px rgba(0,0,0,0.10)',
        glass: '0 4px 24px rgba(0,0,0,0.06)',
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #007AFF 0%, #00C2FF 100%)',
        'gradient-purple': 'linear-gradient(135deg, #7B61FF 0%, #FF4D6D 100%)',
        'gradient-hero': 'linear-gradient(135deg, #007AFF 0%, #00C2FF 50%, #7B61FF 100%)',
        'gradient-subtle': 'linear-gradient(180deg, #F5F7FA 0%, #EEF2FF 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};
