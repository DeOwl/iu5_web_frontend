if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),c={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-C1nhqKXj.css",revision:null},{url:"assets/index-DyuxK8P3.js",revision:null},{url:"index.html",revision:"df1a3cf02122528eba45689cf50b4d79"},{url:"registerSW.js",revision:"f05dd038c1cb245cf42a3fde2bcf71af"},{url:"manifest.webmanifest",revision:"73e06bbc362b21e63e34af532c545ba4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
