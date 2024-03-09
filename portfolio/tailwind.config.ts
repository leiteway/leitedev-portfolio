import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors: {
      secondary: "#a7bf2e",
      darkBg: "#131424"
     },
     backgroundImage: {
      "gradient-cover": 
        "linear-gradient(90.21deg, rgba(35, 32, 35, 0.5) -5.91%, rgba(35, 46, 63, 1) 111.58%)",
     },
    },
  },
  plugins: [],
};
export default config;
