
import {resolve} from 'path';
import  {defineConfig} from 'vite';
const vp6root = resolve(__dirname,'vp6');
const distoutDir = resolve(__dirname,'dist');

export default defineConfig({
    vp6root,
    base: '/dist/',                  
    build: {                     
      distoutDir,   //outDir,                            
      emptyOutDir: true,                   
      rollupOptions: {                                 
        input: {                                 
                 main: resolve(__dirname,'src/index.html'),     //  main: resolve(__dirname,'index.html'),      
                // about: resolve(__dirname, 'src/about/index.html'),
               },                       
                     },        
            },                                                                                   
                           })        




