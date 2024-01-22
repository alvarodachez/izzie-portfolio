/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        ArchivoMedium: ["ArchivoMedium", "sans-serif"],
        PerpetuaLight: ["PerpetuaLight", "sans-serif"],
        ArchivoBold: ["ArchivoBold", "sans-serif"],
        ArchivoBoldItalic: ["ArchivoBoldItalic", "sans-serif"],
        PerpetuaBold: ["PerpetuaBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
