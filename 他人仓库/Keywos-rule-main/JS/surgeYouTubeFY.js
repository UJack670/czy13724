//key Neurogram 
let url=$request.url;let headers=$request.headers;let line="d";if(url.match(/\.m3u8/))$done({});let body=$response.body;if(!body)$done({});$httpClient.get({url:`${url}&tlang=zh-Hans`,headers:headers},(function(e,d,t){if(line=="d")$done({body:t});let o=body.match(/<p t="\d+" d="\d+">/g);if(url.match(/&kind=asr/)){body=body.replace(/<\/?s[^>]*>/g,"");t=t.replace(/<\/?s[^>]*>/g,"");o=body.match(/<p t="\d+" d="\d+"[^>]+>/g)}for(var l in o){let e=new RegExp(`${o[l]}([^<]+)<\\/p>`);if(body.match(e)&&t.match(e)){if(line=="two")body=body.replace(e,`${o[l]}$1\n${t.match(e)[1]}</p>`);if(line=="one")body=body.replace(e,`${o[l]}${t.match(e)[1]}\n$1</p>`)}}$done({body:body})}));







// Adding a dummy sgmodule commit(5)
// Adding a dummy plugin commit(4)
// Adding a dummy stoverride commit(2)
