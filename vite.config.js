import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "tailwindcss"
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "./",
	css: {
		postcss: {
			plugins: [tailwindcss()],
		},
	},
})

// import { defineConfig } from "vite"
// import react from "@vitejs/plugin-react"
// import { terser } from "rollup-plugin-terser"

// // https://vitejs.dev/config/
// export default defineConfig({
// 	plugins: [react()],
// 	base:"/v-wellbeing-app/",
// 	build: {
// 		minify: "terser",
// 		rollupOptions: {
// 			plugins: [terser()],
// 		},
// 	},
// })
