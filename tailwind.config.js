/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./App.js",
    "./App.js.{js,jsx,ts,tsx}",
    "./screen/*/.{js,jsx,ts,tsx}",
    "./components/*/.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        evergreen: "#45594E",
        soil: "#503A3A",
        thistle: "#91A0B8",
        daisy: "#ECD768",
        ivory: "#FBF6D9",
        oat: "#EBE4DE",
        plum: "#B89191",
        olive: "#B8B591",
        sage: "#91B89E",
        cantelope: "#F9D4DB",
        grayCustom: "#F8F8F8",
      }
    },
  },
  plugins: [],
};