// @timestamp thenkey 2023-11-22 22:34:48
const t="http://connectivitycheck.platform.hicloud.com/generate_204";function n(){return new Promise((n=>{let e=Date.now();$httpClient.get(t,(()=>{let t=Date.now();n(t-e)}))}))}function e(t){const n=$persistentStore.read("KEY_CN_Minis"),e=(n?JSON.parse(n):o(1,13)).concat(t).slice(-14);return $persistentStore.write(JSON.stringify(e),"KEY_CN_Minis"),e}function r(t){let n=Math.max(...t),e=n;n<50?e+=50:n<100?e+=60:n<300?e+=20:n>300&&(e=300);const r=t.map((t=>{let n=(t-10)/(e-10);n>1&&(n=1);const r=Math.floor(6*n)+9601;return r>9607?"▇":r<9601?"▁":String.fromCharCode(r)})).join("");return r}function o(t,n){return Array(n).fill(t)}(async()=>{let o=[];for(let e=0;e<2;e++){const e=await n(t),r=parseFloat(e);o.push(r)}const i=e(Math.round((o[0]+o[1])/2)),c=r(i);let a=Math.round(i.reduce(((t,n)=>t+n),0)/i.length),s=`CN: ${a.toString().padEnd(5," ")}ms\t➟    Ping: ${o}`;$done({title:s,content:c})})();









































// Adding a dummy stoverride commit(12)
// Adding a dummy sgmodule commit(18)
// Adding a dummy plugin commit(16)
