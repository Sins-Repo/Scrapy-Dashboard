(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[1641],{51641:(e,r,t)=>{"use strict";t.r(r);t.d(r,{main:()=>Y});var o=t(74619);var n=t(94278);var l=t(4691);var s=t(36954);var a=t(85745);var i=t(74114);var c=t(28180);var u=t(65053);var f=t(67376);var p=t(38710);var h=t(81554);var d=t(46174);var y=t(66657);var v=t(71821);var b=t(14671);var x=t(69614);var j=t(34802);var m=t(14237);var g=t(54244);var w=t(56329);var C=t(32633);var P=t(72738);var E=t(85357);var S=t(83344);var _=t(11706);var k=t(71e3);var O=t(55337);var L=t(34577);var J=t(95528);var A=t(3268);var N=t(42956);var T=t(50168);var M=t(31105);var $=t(46383);var B=t(71334);var D=t(65540);var R=t(1733);var F=t(67219);var I=t(7560);if(Promise.allSettled===undefined){Promise.allSettled=e=>Promise.all(e.map((e=>e.then((e=>({status:"fulfilled",value:e})),(e=>({status:"rejected",reason:e}))))))}async function U(e,r){try{const t=await window._JUPYTERLAB[e].get(r);return t()}catch(t){console.warn(`Failed to create module: package: ${e}; module: ${r}`);throw t}}async function Y(){var e=o.PageConfig.getOption("browserTest");if(e.toLowerCase()==="true"){var r=document.createElement("div");r.id="browserTest";document.body.appendChild(r);r.textContent="[]";r.style.display="none";var n=[];var l=false;var s=25e3;var a=function(){if(l){return}l=true;r.className="completed"};window.onerror=function(e,t,o,l,s){n.push(String(s));r.textContent=JSON.stringify(n)};console.error=function(e){n.push(String(e));r.textContent=JSON.stringify(n)}}var i=t(63591).JupyterLab;var c=[];var u=[];var f=[];var p=[];const h=[];const d=[];const y=[];const v=JSON.parse(o.PageConfig.getOption("federated_extensions"));const b=[];v.forEach((e=>{if(e.extension){b.push(e.name);h.push(U(e.name,e.extension))}if(e.mimeExtension){b.push(e.name);d.push(U(e.name,e.mimeExtension))}if(e.style){y.push(U(e.name,e.style))}}));function*x(e){let r;if(e.hasOwnProperty("__esModule")){r=e.default}else{r=e}let t=Array.isArray(r)?r:[r];for(let n of t){if(o.PageConfig.Extension.isDisabled(n.id)){c.push(n.id);continue}if(o.PageConfig.Extension.isDeferred(n.id)){u.push(n.id);f.push(n.id)}yield n}}const j=[];if(!b.includes("@jupyterlab/javascript-extension")){try{let e=t(64575);for(let r of x(e)){j.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/json-extension")){try{let e=t(7233);for(let r of x(e)){j.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/pdf-extension")){try{let e=t(10924);for(let r of x(e)){j.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/vega5-extension")){try{let e=t(1486);for(let r of x(e)){j.push(r)}}catch(E){console.error(E)}}const m=await Promise.allSettled(d);m.forEach((e=>{if(e.status==="fulfilled"){for(let r of x(e.value)){j.push(r)}}else{console.error(e.reason)}}));if(!b.includes("@jupyterlab/application-extension")){try{let e=t(50501);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/apputils-extension")){try{let e=t(463);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/celltags-extension")){try{let e=t(9301);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/codemirror-extension")){try{let e=t(25901);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/completer-extension")){try{let e=t(74827);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/console-extension")){try{let e=t(53074);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/csvviewer-extension")){try{let e=t(62592);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/debugger-extension")){try{let e=t(19232);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/docmanager-extension")){try{let e=t(85148);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/documentsearch-extension")){try{let e=t(31493);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/extensionmanager-extension")){try{let e=t(25691);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/filebrowser-extension")){try{let e=t(22);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/fileeditor-extension")){try{let e=t(50945);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/help-extension")){try{let e=t(51568);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/htmlviewer-extension")){try{let e=t(11530);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/hub-extension")){try{let e=t(78933);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/imageviewer-extension")){try{let e=t(44788);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/inspector-extension")){try{let e=t(23684);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/launcher-extension")){try{let e=t(78828);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/logconsole-extension")){try{let e=t(47705);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/mainmenu-extension")){try{let e=t(19425);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/markdownviewer-extension")){try{let e=t(58327);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/mathjax2-extension")){try{let e=t(44926);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/notebook-extension")){try{let e=t(52199);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/rendermime-extension")){try{let e=t(20130);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/running-extension")){try{let e=t(51092);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/settingeditor-extension")){try{let e=t(87843);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/shortcuts-extension")){try{let e=t(73776);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/statusbar-extension")){try{let e=t(24046);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/terminal-extension")){try{let e=t(78862);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/theme-dark-extension")){try{let e=t(51398);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/theme-light-extension")){try{let e=t(4845);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/toc-extension")){try{let e=t(62959);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/tooltip-extension")){try{let e=t(75933);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/translation-extension")){try{let e=t(28267);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/ui-components-extension")){try{let e=t(36327);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("@jupyterlab/vdom-extension")){try{let e=t(49315);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}if(!b.includes("jupyterlab-dash")){try{let e=t(77705);for(let r of x(e)){p.push(r)}}catch(E){console.error(E)}}const g=await Promise.allSettled(h);g.forEach((e=>{if(e.status==="fulfilled"){for(let r of x(e.value)){p.push(r)}}else{console.error(e.reason)}}));(await Promise.allSettled(y)).filter((({status:e})=>e==="rejected")).forEach((({reason:e})=>{console.error(e)}));const w=new i({mimeExtensions:j,disabled:{matches:c,patterns:o.PageConfig.Extension.disabled.map((function(e){return e.raw}))},deferred:{matches:u,patterns:o.PageConfig.Extension.deferred.map((function(e){return e.raw}))}});p.forEach((function(e){w.registerPluginModule(e)}));w.start({ignorePlugins:f});var C=(o.PageConfig.getOption("exposeAppInBrowser")||"").toLowerCase()==="true";var P=(o.PageConfig.getOption("devMode")||"").toLowerCase()==="true";if(C||P){window.jupyterlab=w}if(e.toLowerCase()==="true"){w.restored.then((function(){a(n)})).catch((function(e){a([`RestoreError: ${e.message}`])}));window.setTimeout((function(){a(n)}),s)}}}}]);
//# sourceMappingURL=1641.02ed854cb83ff6ddf484.js.map?v=02ed854cb83ff6ddf484