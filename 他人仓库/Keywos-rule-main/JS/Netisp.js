// @timestamp thenkey 2023-11-22 22:24:42
let e,t={updata:{"说明":"可在持久化数据中更改是否在面板中显示这样可以直接使用远程链接，不用放在本地即可修改，输错了会自动恢复默认重新运行后重写JSON里的参数即可","cnTimeout 为入口超时时间":"usTimeout 为落地超时时间","icons 为图标":"icolor 为颜色","hideIP 为":"是否隐藏IP","开为":!0,"关为":!1},version:20230922.1,"以下为":"配置参数",icons:"globe.asia.australia",icolor:"#6699FF",GPT:!1,hideIP:!0,cnTimeout:1e3,usTimeout:3e3,nw:!0},o=!0,i=!1,s=!1;function c(e,t){return e.split(" ",t).join(" ").replace(/\.|\,|com|\u4e2d\u56fd/g,"")}function r(e){return e.replace(/(\w{1,4})(\.|\:)(\w{1,4}|\*)$/,((e,t,o,n)=>`${"∗".repeat(t.length)}.${"∗".repeat(n.length)}`))}async function l(e="/v1/requests/recent",t="GET",o=null){return new Promise(((n,i)=>{$httpAPI(t,e,o,(e=>{n(e)}))}))}function a(e){const t=e.toUpperCase().split("").map((e=>127397+e.charCodeAt()));return String.fromCodePoint(...t).replace(/🇹🇼/g,"🇨🇳")}async function u(e,t){let o=1;const i=new Promise(((i,s)=>{const c=async r=>{try{const o=await Promise.race([new Promise(((t,o)=>{let n=Date.now();$httpClient.get({url:e},((e,i,s)=>{if(e)o(e);else{let e=Date.now()-n;switch(i.status){case 200:let o=i.headers["Content-Type"];switch(!0){case o.includes("application/json"):let n=JSON.parse(s);n.tk=e,t(n);break;case o.includes("text/html"):t("text/html");break;case o.includes("text/plain"):let i=s.split("\n").reduce(((t,o)=>{let[n,i]=o.split("=");return t[n]=i,t.tk=e,t}),{});t(i);break;case o.includes("image/svg+xml"):t("image/svg+xml");break;default:t("未知")}break;case 204:t({tk:e});break;case 429:console.log("次数过多"),t("次数过多");break;case 404:console.log("404"),t("404");break;default:t("nokey")}}}))})),new Promise(((e,o)=>{setTimeout((()=>o(new Error("timeout"))),t)}))]);o?i(o):(i("超时"),s(new Error(n.message)))}catch(e){r<1?(o++,c(r+1)):(i("检测失败, 重试次数"+o),s(e))}};c(0)}));return i}(async()=>{try{try{let n=$persistentStore.read("KeyNetisp"),c=$environment;e=n?JSON.parse(n):t;try{!(c["surge-build"]<2969)&&(s=!0),e.version<t.version&&(e.cnTimeout=t.cnTimeout,e.usTimeout=t.usTimeout,e.version=t.version,console.log("升级: V"+t.version),$persistentStore.write(JSON.stringify(e,"",2),"KeyNetisp"))}catch(e){o=!1}!e.nw&&o&&e.version===t.version&&"boolean"==typeof e.hideIP&&"boolean"==typeof e.GPT&&"string"==typeof e.icons&&"string"==typeof e.icolor&&"number"==typeof e.cnTimeout&&"number"==typeof e.usTimeout&&"object"==typeof e.updata||(console.log("无数据或数据错误或更新,恢复默认"),delete t.nw,i=!0,e=t)}catch(o){console.log("无数据或数据错误或更新,恢复默认"),e=t,i=!0}i&&$persistentStore.write(JSON.stringify(t,"",2),"KeyNetisp");let n=e.GPT,c=e.icons,p=e.icolor,m=e.hideIP,d=e.cnTimeout,g=e.usTimeout,y="",f="",P="节点信息查询",h="代理链",w="",N="",T="",k="";const v=await u("http://ip-api.com/json/?lang=zh-CN",g);if("success"===v.status&&s){console.log("ipapi"+JSON.stringify(v,null,2));let{country:e,countryCode:t,regionName:o,query:n,city:i,org:s,isp:c,as:l,tk:u}=v;y=n,m&&(n=r(n)),e===i&&(i=""),w=" \t"+(a(t)+e+" "+i)+"\n落地IP: \t"+n+": "+u+"ms\n落地ISP: \t"+c+"\n落地ASN: \t"+l}else console.log("ild"+JSON.stringify(v)),w="";if(n){const e=await u("http://chat.openai.com/cdn-cgi/trace",g),t=["CN","TW","HK","IR","KP","RU","VE","BY"];if("string"!=typeof e){let{loc:o,tk:n,warp:i,ip:s}=e,c=t.indexOf(o),r="";r=-1==c?"GPT: "+o+" ✓":"GPT: "+o+" ×",(i="plus")&&(i="Plus"),P=r+"       ➟     Priv: "+i+"   "+n+"ms"}else P="ChatGPT "+e}const S=await l();let $,b="";let I=S.requests.slice(0,6).filter((e=>/ip-api\.com/.test(e.URL)));if(I.length>0&&s){const e=I[0];k=": "+e.policyName,/\(Proxy\)/.test(e.remoteAddress)?($=e.remoteAddress.replace(" (Proxy)",""),h=""):($="Noip",b="代理链地区:")}else $="Noip";if($environment["surge-build"]<2969)throw new Error("");let C=!1,O="spe",J=!1,x="edtest";if(isv6=!1,cn=!0,"Noip"===$?C=!0:/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test($)?J=!0:/^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/.test($)&&(isv6=!0),$==y)cn=!1,b="直连节点:";else{if(""===b&&(b="落地地区:"),!C||J){const e=await u(`https://api-v3.${O}${x}.cn/ip?ip=${$}`,d);if(0===e.code&&"中国"===e.data.country){let{province:t,isp:o,city:n,countryCode:i}=e.data,s=e.tk;console.log("ik"+JSON.stringify(e,null,2)),cn=!0,m&&($=r($)),N="入口国家: \t"+a(i)+t+" "+n+"\n入口IP: \t"+$+": "+s+"ms\n入口ISP: \t"+o+h+"\n---------------------\n"}else cn=!1,console.log("ik"+JSON.stringify(e)),N="入口IPA Failed\n"}if((!C||isv6)&&!cn){const e=await u(`http://ip-api.com/json/${$}?lang=zh-CN`,g);if("success"===e.status){console.log("iai"+JSON.stringify(e,null,2));let{countryCode:t,country:o,city:n,tk:i,isp:s}=e;m&&($=r($));let c=o+" "+n;N="入口国家: \t"+a(t)+c+"\n入口IP: \t"+$+": "+i+"ms\n入口ISP: \t"+s+h+"\n---------------------\n"}else console.log("iai"+JSON.stringify(e)),N="入口IPB Failed\n"}}$done({title:P+k,content:T+f+N+b+w,icon:c,"icon-color":p})}catch(e){console.log(e.message),$done({title:outgpt+nodeNames,content:local+outbli+outik+outld+zl,icon:icons,"icon-color":icolor})}})();









































































// Adding a dummy plugin commit(26)
// Adding a dummy stoverride commit(23)
// Adding a dummy sgmodule commit(29)
