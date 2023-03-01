import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig(
	({mode}) => {
		return {
			plugins: [vue()],
			server:{
				host:true
			},
			build:{
				outDir:`dist-${mode}`
			},
			base:'./',
			resolve:{
				alias:{
					'@':path.resolve(__dirname,'./src')
				}
			}
		}
	}
)
