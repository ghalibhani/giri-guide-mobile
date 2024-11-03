/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./App.js",
    "./App.js.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./screen/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
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
        borderCustom: "#E4E6EA",
        warningHover: "#E86339",
        warningMedium: "#FFB37C",
        warningLight: "#FFF4E4",
        errorHover: "#ED3241",
        errorMedium: "#FF616D",
        errorLight: "#FFE2E5",
        successHover: "#298267",
        successMedium: "#3AC0A0",
        successLight: "#E7F4E8"
      },
      fontFamily: {
        ithin: ["Inter-Thin", "sans-serif"],
        iextralight: ["Inter-ExtraLight", "sans-serif"],
        ilight: ["Inter-Light", "sans-serif"],
        iregular: ["Inter-Regular", "sans-serif"],
        imedium: ["Inter-Medium", "sans-serif"],
        isemibold: ["Inter-SemiBold", "sans-serif"],
        ibold: ["Inter-Bold", "sans-serif"],
        iextrabold: ["Inter-ExtraBold", "sans-serif"],
        iblack: ["Inter-Black", "sans-serif"],
      },
      borderRadius: {
        verylarge: "30px",
      },
      margin: {
        custom: "8.5rem"
      },
      padding: {
        custom: "8.5rem"
      }
    },
  },
  plugins: [],
};
