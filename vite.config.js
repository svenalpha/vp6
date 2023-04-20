
import {resolve} from 'path';
import  {defineConfig} from 'vite';
//const root = resolve(__dirname,'vp6');
//const outDir = resolve(__dirname,'dist');

export default defineConfig({
    base: '/vp6/',                  
    build: {                     
      //outDir,                            
      emptyOutDir: true,                   
      rollupOptions: {                                 
        input: {                                 
                 main: resolve(__dirname,'index.html'),
                 about: resolve(__dirname, 'src/about/index.html'),
               },                       
                     },        
            },                                                                                   
                           })        




