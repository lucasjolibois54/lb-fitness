/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xxsm': '355px',
      // => @media (min-width: 355px) { ... }

      'xsm': '375px',
      // => @media (min-width: 375px) { ... }

      'semixsm': '408px',
      // => @media (min-width: 408px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'hero-sm-md': '729px',
      // => @media (min-width: 729px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'md-blog-img': '791px',
      // => @media (min-width: 791px) { ... }

      'lg-blog-img': '839px',
      // => @media (min-width: 839px) { ... }

      'md-lg': '878px',
      // => @media (min-width: 878px) { ... }

      'md-lg-bigger': '915px',
      // => @media (min-width: 915px) { ... }

      'sm-lg': '696px',
      // => @media (min-width: 696px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        //background colors
        'pink': '#C03963',
        'gray-stroke': '#7E7D7D',
        'gray-subtext': '#8A8A8A',
        'off-white': '#FCFCFC',
        'gradient-off-orange': '#FCD9C4',
        'footer-hover': '#D26385',
        'main-dark-bg': '#0d0d0d',
      }
    },
  },
  plugins: [],
}