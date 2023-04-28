
import path from 'path'
import {resolve} from 'path';
import  {defineConfig} from 'vite';

 const __dirname = path.resolve(path.dirname(''));
//const outDir = resolve(__dirname,'dist');   // dist/server
//  const root = resolve(__dirname,'vp6');
 const root = __dirname;
//const outDir = resolve(__dirname,'dist');   // dist/server
//const outDir = __dirname; // dist/server
//const outDir =  "c:/web/a6/vp6";   // dist/server
const outDir = resolve(__dirname,'/dist');// "c:/web/a6/vp6";   // dist/server


export default defineConfig({
    base: '/vp6/',
    root,
    build: {                     
      outDir,  //outDir: 'vp6/dist/',                              
      emptyOutDir: true,                   
      rollupOptions: {                                 
        input: {                                 
                 main: resolve(root,'index.html'),     //  main: resolve(__dirname,'index.html'),  
                // main: resolve(__dirname,'src/index.html'),     //  main: resolve(__dirname,'index.html'),       
                //  about: resolve(root, 'about','index.html'),
                // about: resolve(__dirname, 'src/about/index.html'),
               },                                                  
                     },                      
            },   
                           
                           })                         




