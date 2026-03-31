import { defineConfig } from 'vite'

export default defineConfig({
base: '/modern-art-gallery/',
build: {
rollupOptions: {
input: {
main: './index.html',
location: './location.html',
artists: './artists.html',
},
},
},
})