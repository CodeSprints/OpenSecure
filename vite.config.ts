import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'
export default defineConfig({plugins:[vue(),tailwindcss()],resolve:{alias:{'@':fileURLToPath(new URL('./src',import.meta.url))}},server:{host:'0.0.0.0',port:1420,strictPort:true,allowedHosts:true},clearScreen:false,test:{environment:'node',exclude:['e2e/**','node_modules/**'],coverage:{provider:'v8',reporter:['text','html'],include:['src/domain/**/*.ts','src/services/**/*.ts']}}})
