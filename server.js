//
//app.get("/", (_, res) => res.send("in / of   express!"));
////app.get('/',(req,res) => {
////    res.render('/',{titlex:' about page title'});   
////  }); 
////

//app.get('/about',(req,res) => {
//   //res.render('c:\\web\\a4\\vp4\\views\\about',{titlex:'about page title'}); 
//   res.render('\about',{titlex:'about      cccontext  page titlex'});  
//  });  
//app.get("/message", (_, res) => res.send("in message Hello from express!"));

import fs from 'node:fs/promises'
import express from 'express'
import path from 'path'

// Constants
const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 5173
const base = process.env.BASE || '/'
const __dirname = path.resolve(path.dirname(''));

console.log("in server preview 1");
console.log(" __dirname  = ",__dirname);
// console.log("distoutDir = ",distoutDir);

console.log("in server preview 1a"); 
// Cached production assets
const templateHtml = isProduction
? await fs.readFile('./dist/client/index.html', 'utf-8')     //     ? await fs.readFile('./dist/client/src/index.html', 'utf-8')    //   ? await fs.readFile('./dist/client/index.html', 'utf-8')
  : ''
console.log("in server preview 2"); 
const ssrManifest = isProduction
  ? await fs.readFile('./dist/client/ssr-manifest.json', 'utf-8')
  : undefined
  console.log("in          server  preview 3"); 
// Create http server
const app = express()

// Add Vite or respective production middlewares
let vite
if (!isProduction) {
  const { createServer } = await import('vite')
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base
  })
  app.use(vite.middlewares)
} else {
  const compression = (await import('compression')).default
  const sirv = (await import('sirv')).default
  app.use(compression())
  app.use(base, sirv('./dist/client', { extensions: [] }))
}

app.get("/zzz", (_, res) => res.send("in message Hello from express!"));   

//app.get('/about',(req,res) => {
//  //res.render('c:\\web\\a4\\vp4\\views\\about',{titlex:'about page title'}); 
//  //res.render('\about',{titlex:'about      cccontext  page titlex'});  
//  res.sendFile('./src/about/index.html',{root: __dirname});
// });  





// Serve HTML
app.use('*', async (req, res) => {
  console.log("inside app.use1");
  try {
   const url = req.originalUrl.replace(base, '')

    let template

    let render
    if (!isProduction) {
      // Always read fresh template in development
      console.log("inside app.use2");
      template = await fs.readFile('index.html', 'utf-8')   // template = await fs.readFile('./index.html', 'utf-8')
      console.log("inside app.use3");
      template = await vite.transformIndexHtml(url, template)
      render = (await vite.ssrLoadModule('./src/entry-server.js')).render  // render = (await vite.ssrLoadModule('/src/entry-server.js')).render
      //render = (await vite.ssrLoadModule('/src/entry-server.js')).render  // render = (await vite.ssrLoadModule('/src/entry-server.js')).render
      console.log("inside app.use4");
    } else {
      template = templateHtml
      render = (await import('./dist/server/entry-server.js')).render
    }

    const rendered = await render(url, ssrManifest)

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? '')
      .replace(`<!--app-html-->`, rendered.html ?? '')

    res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
  } catch (e) {
    vite?.ssrFixStacktrace(e)
    console.log(e.stack)
    res.status(500).end(e.stack)
  }
})



// Start http server
app.listen(port, () => {
  console.log(`Server  started at http://localhost:${port}`)
})
