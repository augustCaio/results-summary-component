/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hanken: "'Hanken Grotesk', 'sans-serif'",
      },
      colors: {
        "result-white": "hsl(0, 0%, 100%)",
        "result-p-blue": "hsl(221, 100%, 96%)",
        "result-l-red": "hsl(0, 100%, 67%)",
        "result-l-yellow": "hsl(39, 100%, 56%)",
        "result-l-green": "hsl(166, 100%, 37%)",
        "result-ll-blue": "hsl(234, 85%, 45%)",
        "result-d-gray": "hsl(224, 30%, 27%)",
        //gradient-colors//
        "result-l-blue": "hsl(252, 100%, 67%)",
        "result-r-blue": "hsl(241, 81%, 54%)",
      },
    },
  },
  plugins: [],
};
