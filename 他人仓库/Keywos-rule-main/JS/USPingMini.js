// @timestamp thenkey 2023-11-22 22:35:17
const t="http://cp.cloudflare.com/generate_204";function n(){return new Promise((n=>{let e=Date.now();$httpClient.get(t,(()=>{let t=Date.now();n(t-e)}))}))}function e(t){const n=$persistentStore.read("KEY_CF_Minis"),e=(n?JSON.parse(n):o(1,15)).concat(t).slice(-14);return $persistentStore.write(JSON.stringify(e),"KEY_CF_Minis"),e}function r(t){let n;n=Math.max(...t);let e=n;n<70?e+=200:n<150?e+=150:n<250?e+=100:n<400?e+=2:e=410;const r=t.map((t=>{let n=(t-10)/(e-10);n>1&&(n=1);const r=Math.floor(6*n)+9601;return r>9607?"▇":r<9601?"▁":String.fromCharCode(r)})).join("");return r}function o(t,n){return Array(n).fill(t)}(async()=>{let o=[];for(let e=0;e<2;e++){const e=await n(t),r=parseFloat(e);o.push(r)}const i=e(Math.round((o[0]+o[1])/2)),a=r(i);let s=Math.round(i.reduce(((t,n)=>t+n),0)/i.length),c=`CF: ${s.toString().padEnd(5," ")}ms\t➟    Ping: ${o}`;$done({title:c,content:a})})();





































// Adding a dummy plugin commit(14)
// Adding a dummy stoverride commit(11)
// Adding a dummy sgmodule commit(17)
