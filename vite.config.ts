import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => {
	return {
		build: {
			//outDir: "../hera_/pages/formRunner",
			sourcemap: true, // an inline sourcemap file will be generated
			cssCodeSplit: false, // all CSS will be in one file
			rollupOptions: {
				output: {
					entryFileNames: "assets/app.js",
					chunkFileNames: "assets/app.js",
					assetFileNames: (assetInfo) => {
						if (assetInfo.names[0]?.endsWith(".css")) {
							return "assets/app.css";
						}
						return "assets/[name].[ext]";
					},
				},
			},
		},
		plugins: [react()],
	};
});

