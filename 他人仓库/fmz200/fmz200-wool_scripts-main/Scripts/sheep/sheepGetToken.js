/* author@fmz200
   羊了个羊获取token，支持 微信和抖音小程序
   重写地址:https://cat-match.easygame2021.com/sheep/v1/game/user_info, 触发类型:request-header
   进入小程序即可获取

   quanX用户直接添加重写：
   https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/sheep/sheepGetToken.conf, tag=羊了个羊获取token@fmz200, update-interval=172800, opt-parser=false, enabled=true
*/
const $ = new API("sheepGetToken");
!(async () => {
    if ($.env.isNode) {
      console.log('仅限iOS设备抓包用!');
    } else {
      if ($request.url.indexOf('user_info') > -1) {
        const referer = `${$request.headers['Referer']}`;
        const source = referer.indexOf("toutiao") > 1 ? "抖音" : "微信";
        console.log('当前来源：' + source);
        let token;
        if (referer.indexOf("toutiao") > 1) {
          // 抖音获取token
          token = getQueryString($request.url, "t");
          $.write(token, '#sheepToken_dy');
        } else {
          // 微信获取token
          token = `${$request.headers['t']}`;
          $.write(token, '#sheepToken_wx');
        }
        if (token !== '' && token != null) {
          $.notify(`成功💕💕羊了个羊获取${source}token`, '', token);
        } else {
          $.notify(`失败😅😅羊了个羊获取${source}token`, '', token);
        }
        console.log('token：' + token);
      }
    }
  }
)
().catch((e) => {
  console.log('', `❌失败! 原因: ${e}!`, '');
}).finally(() => {
  $.done({});
})

function getQueryString(url, name) {
  const vars = url.substring(url.indexOf('?') + 1).split("&");
  for (let item of vars) {
    if (item.split("=")[0] == name) {
      return item.split("=")[1];
    }
  }
  return null;
}

/*********************************** API *************************************/
function ENV(){const isQX=typeof $task!=="undefined";const isLoon=typeof $loon!=="undefined";const isSurge=typeof $httpClient!=="undefined"&&!isLoon;const isJSBox=typeof require=="function"&&typeof $jsbox!="undefined";const isNode=typeof require=="function"&&!isJSBox;const isRequest=typeof $request!=="undefined";const isScriptable=typeof importModule!=="undefined";return{isQX,isLoon,isSurge,isNode,isJSBox,isRequest,isScriptable}}
function HTTP(baseURL,defaultOptions={}){const{isQX,isLoon,isSurge,isScriptable,isNode}=ENV();const methods=["GET","POST","PUT","DELETE","HEAD","OPTIONS","PATCH"];function send(method,options){options=typeof options==="string"?{url:options}:options;options.url=baseURL?baseURL+options.url:options.url;options={...defaultOptions,...options};const timeout=options.timeout;const events={...{onRequest:()=>{},onResponse:(resp)=>resp,onTimeout:()=>{},},...options.events,};events.onRequest(method,options);let worker;if(isQX){worker=$task.fetch({method,...options})}else if(isLoon||isSurge||isNode){worker=new Promise((resolve,reject)=>{const request=isNode?require("request"):$httpClient;request[method.toLowerCase()](options,(err,response,body)=>{if(err)reject(err);else resolve({statusCode:response.status||response.statusCode,headers:response.headers,body,})})})}else if(isScriptable){const request=new Request(options.url);request.method=method;request.headers=options.headers;request.body=options.body;worker=new Promise((resolve,reject)=>{request.loadString().then((body)=>{resolve({statusCode:request.response.statusCode,headers:request.response.headers,body,})}).catch((err)=>reject(err))})}let timeoutid;const timer=timeout?new Promise((_,reject)=>{timeoutid=setTimeout(()=>{events.onTimeout();return reject(`${method}URL:${options.url}exceeds the timeout ${timeout}ms`)},timeout)}):null;return(timer?Promise.race([timer,worker]).then((res)=>{clearTimeout(timeoutid);return res}):worker).then((resp)=>events.onResponse(resp))}const http={};methods.forEach((method)=>(http[method.toLowerCase()]=(options)=>send(method,options)));return http}
function API(name="untitled",debug=false){const{isQX,isLoon,isSurge,isNode,isJSBox,isScriptable}=ENV();return new(class{constructor(name,debug){this.name=name;this.debug=debug;this.http=HTTP();this.env=ENV();this.node=(()=>{if(isNode){const fs=require("fs");return{fs}}else{return null}})();this.initCache();const delay=(t,v)=>new Promise(function(resolve){setTimeout(resolve.bind(null,v),t)});Promise.prototype.delay=function(t){return this.then(function(v){return delay(t,v)})}}initCache(){if(isQX)this.cache=JSON.parse($prefs.valueForKey(this.name)||"{}");if(isLoon||isSurge)this.cache=JSON.parse($persistentStore.read(this.name)||"{}");if(isNode){let fpath="root.json";if(!this.node.fs.existsSync(fpath)){this.node.fs.writeFileSync(fpath,JSON.stringify({}),{flag:"wx"},(err)=>console.log(err))}this.root={};fpath=`${this.name}.json`;if(!this.node.fs.existsSync(fpath)){this.node.fs.writeFileSync(fpath,JSON.stringify({}),{flag:"wx"},(err)=>console.log(err));this.cache={}}else{this.cache=JSON.parse(this.node.fs.readFileSync(`${this.name}.json`))}}}persistCache(){const data=JSON.stringify(this.cache);if(isQX)$prefs.setValueForKey(data,this.name);if(isLoon||isSurge)$persistentStore.write(data,this.name);if(isNode){this.node.fs.writeFileSync(`${this.name}.json`,data,{flag:"w"},(err)=>console.log(err));this.node.fs.writeFileSync("root.json",JSON.stringify(this.root),{flag:"w"},(err)=>console.log(err))}}write(data,key){this.log(`SET ${key}`);if(key.indexOf("#")!==-1){key=key.substr(1);if(isSurge||isLoon){return $persistentStore.write(data,key)}if(isQX){return $prefs.setValueForKey(data,key)}if(isNode){this.root[key]=data}}else{this.cache[key]=data}this.persistCache()}read(key){this.log(`READ ${key}`);if(key.indexOf("#")!==-1){key=key.substr(1);if(isSurge||isLoon){return $persistentStore.read(key)}if(isQX){return $prefs.valueForKey(key)}if(isNode){return this.root[key]}}else{return this.cache[key]}}delete(key){this.log(`DELETE ${key}`);if(key.indexOf("#")!==-1){key=key.substr(1);if(isSurge||isLoon){$persistentStore.write(null,key)}if(isQX){$prefs.removeValueForKey(key)}if(isNode){delete this.root[key]}}else{delete this.cache[key]}this.persistCache()}notify(title,subtitle="",content="",options={}){const openURL=options["open-url"];const mediaURL=options["media-url"];if(isQX)$notify(title,subtitle,content,options);if(isSurge){$notification.post(title,subtitle,content+`${mediaURL?"\n多媒体:"+mediaURL:""}`,{url:openURL})}if(isLoon){let opts={};if(openURL)opts["openUrl"]=openURL;if(mediaURL)opts["mediaUrl"]=mediaURL;if(JSON.stringify(opts)=="{}"){$notification.post(title,subtitle,content)}else{$notification.post(title,subtitle,content,opts)}}if(isNode||isScriptable){const content_=content+(openURL?`\n点击跳转:${openURL}`:"")+(mediaURL?`\n多媒体:${mediaURL}`:"");if(isJSBox){const push=require("push");push.schedule({title:title,body:(subtitle?subtitle+"\n":"")+content_,})}else{console.log(`${title}\n${subtitle}\n${content_}\n\n`)}}}log(msg){if(this.debug)console.log(msg)}info(msg){console.log(msg)}error(msg){console.log("ERROR: "+msg)}wait(millisec){return new Promise((resolve)=>setTimeout(resolve,millisec))}done(value={}){if(isQX||isLoon||isSurge){$done(value)}else if(isNode&&!isJSBox){if(typeof $context!=="undefined"){$context.headers=value.headers;$context.statusCode=value.statusCode;$context.body=value.body}}}})(name,debug)}
/*****************************************************************************/












// Adding a dummy sgmodule commit(8)
// Adding a dummy plugin commit(6)
// Adding a dummy stoverride commit(3)
