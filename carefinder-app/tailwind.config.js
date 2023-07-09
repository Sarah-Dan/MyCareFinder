/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cf-blue": "#1E3A8A",
        "cf-light-blue": "#E5E9F7",
        "cf-dark-blue": "#1B3087",
        "cf-blues": "#1e3b8a",
        "cf-gray": "#F2F2F2",
        "cf-light-gray": "#F7F7F7",
        "cf-dark-gray": "#5A5A5A",
        "cf-black": "#000000",
        "cf-white": "#FFFFFF",
      },
      fontFamily: {
        "dmsans": ["DM Sans", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"], 
      },
      screens: {
        "xs": "480px",
        "sm": "768px",
        "md": "1024px",
      },
      
      fontSize: {
        "sm": "0.875rem",
        "base": "1rem",
        "medium": "1.25rem",
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

