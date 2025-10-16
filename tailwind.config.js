/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				lavender: "#C8B6FF",
				cream: "#FAF9F6",
				silver: "#C0C0C0",
				slateBody: "#64748B",
			},
			fontFamily: {
				headline: ["Dancing Script", "cursive"],
				body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
			},
			boxShadow: {
				glow: "0 0 30px rgba(200, 182, 255, 0.5)",
			},
		},
	},
	plugins: [],
};
