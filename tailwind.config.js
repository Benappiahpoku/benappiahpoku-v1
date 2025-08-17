/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // benappiahpoku brand colors with full scale
        primary: {
          50: "#F0F3FA",
          100: "#E1E7F5",
          200: "#C3CFEB",
          300: "#A5B7E0",
          400: "#879FD6",
          500: "#6987CC",
          600: "#1F3A8A", // Primary blue
          700: "#152970", // dark variant
          800: "#0C1B56",
          900: "#030D3D",
          DEFAULT: "#1F3A8A",
        },
        secondary: {
          50: "#EDF5FE",
          100: "#DBEAFD",
          200: "#B7D6FB",
          300: "#93C1F9",
          400: "#6FACF7",
          500: "#3B81F6", // Secondary blue
          600: "#2A70E5", // hover variant
          700: "#1B5FD4",
          800: "#0C4EC3",
          900: "#003DB2",
          DEFAULT: "#3B81F6",
        },
        // Standard gray scale
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      // Touch-optimized sizes for Ghanaian mobile users
      spacing: {
        "touch-min": "3rem", // 48px - minimum touch target
        "touch-safe": "4rem", // 64px - comfortable touch area
      },
      borderRadius: {
        benappiahpoku: "0.375rem", // Consistent border-radius
      },
    },
  },
  plugins: [],
};