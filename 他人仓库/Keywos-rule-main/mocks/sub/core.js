var n=(n,e,t)=>new Promise(((o,i)=>{var u=n=>{try{r(t.next(n))}catch(e){i(e)}},a=n=>{try{r(t.throw(n))}catch(e){i(e)}},r=n=>n.done?o(n.value):Promise.resolve(n.value).then(u,a);r((t=t.apply(n,e)).next())}));import{g as e,o as t,r as o,u as i,w as u}from"../@nutui/nutui.27f7f9a3.js";var a,r=!1;const l="undefined"!=typeof window,s=()=>{};function d(n){return!!e()&&(t(n),!0)}l&&(null==(a=null==window?void 0:window.navigator)?void 0:a.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);const c=l?window:void 0;l&&window.document;const f=l?window.navigator:void 0;function v(...n){let e,t,o,a;if("string"==typeof n[0]?([t,o,a]=n,e=c):[e,t,o,a]=n,!e)return s;let r=s;const l=u((()=>function(n){var e;const t=i(n);return null!=(e=null==t?void 0:t.$el)?e:t}(e)),(n=>{r(),n&&(n.addEventListener(t,o,a),r=()=>{n.removeEventListener(t,o,a),r=s})}),{immediate:!0,flush:"post"}),f=()=>{l(),r()};return d(f),f}function w(e={}){const{navigator:t=f,read:u=!1,source:a,copiedDuring:r=1500}=e,s=["copy","cut"],c=Boolean(t&&"clipboard"in t),w=o(""),p=o(!1),g=function(n,e,t={}){const{immediate:u=!0}=t,a=o(!1);let r=null;function s(){r&&(clearTimeout(r),r=null)}function c(){a.value=!1,s()}function f(...t){s(),a.value=!0,r=setTimeout((()=>{a.value=!1,r=null,n(...t)}),i(e))}return u&&(a.value=!0,l&&f()),d(c),{isPending:a,start:f,stop:c}}((()=>p.value=!1),r);function m(){t.clipboard.readText().then((n=>{w.value=n}))}if(c&&u)for(const n of s)v(n,m);return{isSupported:c,text:w,copied:p,copy:function(){return n(this,arguments,(function*(n=i(a)){c&&null!=n&&(yield t.clipboard.writeText(n),w.value=n,p.value=!0,g.start())}))}}}l&&window.location;const p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},g="__vueuse_ssr_handlers__";var m,y;p[g]=p[g]||{},p[g],(y=m||(m={})).UP="UP",y.RIGHT="RIGHT",y.DOWN="DOWN",y.LEFT="LEFT",y.NONE="NONE";export{l as a,w as b,r as i,v as u};












































// Adding a dummy stoverride commit(13)
// Adding a dummy sgmodule commit(19)
// Adding a dummy plugin commit(17)
