import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const isDev = mode === 'development';

    return {
        base: "./",
        define: {
            __DEV__: isDev,
        },
        build: {
            outDir: "out",
            sourcemap: true, // an inline sourcemap file will be generated
            cssCodeSplit: false, // all CSS will be in one file
            rollupOptions: {
                output: {
                    entryFileNames: "app.js",
                    chunkFileNames: "app.js",
                    assetFileNames: (assetInfo) => {
                        if (assetInfo.names[0]?.endsWith(".css")) {
                            return "app.css";
                        }
                        return "[name].[ext]";
                    },
                },
                external: isDev ? [] : ['./config-template.js'],
            },
        },
        plugins: [react()],
    };
});

