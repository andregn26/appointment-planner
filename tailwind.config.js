/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "475px",
			// => @media (min-width: 640px) { ... }
			md: "768px",
			// => @media (min-width: 768px) { ... }
			lg: "1024px",
			// => @media (min-width: 1024px) { ... }
			xl: "1280px",
			// => @media (min-width: 1280px) { ... }
			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["sunset"],
	},
};
