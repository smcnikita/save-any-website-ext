import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import generateFile from 'vite-plugin-generate-file';
import manifest from './config/manifest/build';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        generateFile([
            {
                type: 'json',
                output: './manifest.json',
                data: manifest(),
            },
        ]),
        react(),
    ],

    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@t': fileURLToPath(new URL('./types', import.meta.url)),
            '@utils': fileURLToPath(new URL('./utils', import.meta.url)),
            '@const': fileURLToPath(new URL('./constants', import.meta.url)),
        },
    },

    build: {
        minify: true,
        rollupOptions: {
            input: {
                bookmarks: fileURLToPath(new URL('./bookmarks.html', import.meta.url)),
                light: fileURLToPath(new URL('./src/pages/bookmarks/style/colors/light.css', import.meta.url)),
                dark: fileURLToPath(new URL('./src/pages/bookmarks/style/colors/dark.css', import.meta.url)),
                service_worker: fileURLToPath(new URL('./src/serviceWorker/index.ts', import.meta.url)),
                content: fileURLToPath(new URL('./scripts/content.ts', import.meta.url)),
                options: fileURLToPath(new URL('./options.html', import.meta.url)),
            },
            output: {
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name].[ext]',
            },
        },
    },
});
