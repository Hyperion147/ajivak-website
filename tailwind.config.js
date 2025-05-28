/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        colors: {
          primary: '#008080',       // Deep Teal
          secondary: '#FFF8E1',     // Cream 
          accent: '#FF7E6B',        // Soft Coral
          text: '#4A3A2A',         // Dark Brown
          background: '#F5F5DC',    // Light Beige
        },
        fontSize: {
          'base': '16px',          // Default body text (senior-friendly)
          'lg': '20px',            // CTAs/headings
        }
      }
  },
  plugins: [],
}
