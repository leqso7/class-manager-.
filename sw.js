if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const o=e=>i(e,a),l={module:{uri:a},exports:t,require:o};s[a]=Promise.all(n.map((e=>l[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"0bb034419e76875c319d8b669ec0da81"},{url:"assets/browser-BxXG1zt4.js",revision:null},{url:"assets/index-D-Xodb0M.css",revision:null},{url:"assets/index-InPInKIY.js",revision:null},{url:"index.html",revision:"f3cbaaa51450b48fa89faecebe485558"},{url:"manifest.webmanifest",revision:"3b3a7a62d8f6fabc98db6a4b4e296e22"},{url:"pwa-192x192.png",revision:"37d797d802ec35eb08bb8a00ea272600"},{url:"pwa-512x512.png",revision:"1f5893634f785195f2d866a8080757a7"},{url:"registerSW.js",revision:"58db251664fecad0e785f4eaf8aa3c89"},{url:"pwa-192x192.png",revision:"37d797d802ec35eb08bb8a00ea272600"},{url:"pwa-512x512.png",revision:"1f5893634f785195f2d866a8080757a7"},{url:"manifest.webmanifest",revision:"3b3a7a62d8f6fabc98db6a4b4e296e22"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
