// @timestamp thenkey 2023-11-22 22:35:05
const t="http://cp.cloudflare.com/generate_204";function e(){return new Promise((e=>{let n=Date.now();$httpClient.get(t,(()=>{let t=Date.now();e(t-n)}))}))}function n(t){const e=$persistentStore.read("KEY_CFs"),n=(e?JSON.parse(e):o(1,17)).concat(t).slice(-18);return $persistentStore.write(JSON.stringify(n),"KEY_CFs"),n}function r(t){let e;e=Math.max(...t);let n=e;e<70?n+=200:e<150?n+=150:e<250?n+=100:e<400?n+=2:n=410;const r=t.map((t=>{let e=(t-10)/(n-10);e>1&&(e=1);const r=Math.floor(6*e)+9601;return r>9607?"▇":r<9601?"▁":String.fromCharCode(r)})).join("");return r}function o(t,e){return Array(e).fill(t)}(async()=>{let o=[];for(let n=0;n<2;n++){const n=await e(t),r=parseFloat(n);o.push(r)}const a=n(Math.round((o[0]+o[1])/2)),s=r(a);let c=Math.round(a.reduce(((t,e)=>t+e),0)/a.length),i=`CF: ${c.toString().padEnd(5," ")} ms\t➟     Ping: ${o}ms`;$done({title:i,content:s})})();




// Adding a dummy stoverride commit(1)
// Adding a dummy sgmodule commit(4)
// Adding a dummy plugin commit(3)
