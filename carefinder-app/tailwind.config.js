/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cf-blue": "#1E3A8A",
        "cf-light-blue": "#E5E9F7",
        "cf-gray": "#F2F2F2",
        "cf-light-gray": "#F7F7F7",
        "cf-dark-gray": "#333333",
        "cf-black": "#000000",
        "cf-white": "#FFFFFF",
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      backgroundImage: (theme) => ({
        "carefinder-hero": "url('/src/assets/images/hero.jpg')",
        "carefinder-hero-mobile": "url('/src/assets/images/hero-mobile.jpg')",
      }),
      fontFamily: {
        "dmsans": ["DM Sans", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"],
        
      },
      screens: {
        "xs": "375px",
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "medium": "1.125rem",
        "lg": "1.5rem",
        "xl": "1.75rem",
        "2xl": "1.85rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3rem",
      },
      fontWeight: {
        "normal": "400",
        "medium": "500",
        "semibold": "700",
        "bold": "800",
      },
      boxShadow: {
        "cf-shadow": "0px 4px 20px rgba(0, 0, 0, 0.1)",
      },
      transition: {
        "cf-transition": "all 0.3s ease-in-out",
      },
      transform: ["hover", "focus"],
    },
  },
  plugins: [],
};

