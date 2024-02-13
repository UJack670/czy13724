/*
 * 本脚本旨在获取某个城市最新疫情信息，支持Surge(Panel,Cron),stash(Tile,Cron),Loon,QuantumultX
 * @author: zqzess
 * 仓库地址：https://github.com/zqzess/rule_for_quantumultX
 * 点击通知可以跳转最新新闻网页，通过boxjs切换城市
 * 感谢@chavyleung提供的Env
 * 定时任务添加： 0 7,10 * * * https://raw.githubusercontent.com/zqzess/rule_for_quantumultX/master/js/Mine/covid19/covid19_CLEnv.js
 */
const $ = new Env("covid19", true)
// $.setdata('无锡', 'covid19_city')
// $.setdata('false', 'covid19_isNotify')

//
//默认城市南京，优先从BoxJs获取数据
$.city = $.getdata('@covid19.covid19_city')
$.isNotify = $.getdata('@covid19.covid19_isNotify')
$.isShowInfo = $.getdata('@covid19.covid19_isNotify')

//
// 修改城市或省👇
let city = '上海'

if ($.city !== "" && $.city !== null && $.city !== undefined)
    city = $.city + '疫情'
if ($.isNotify === undefined)
    $.isNotify = 'true'
if ($.isShowInfo === undefined)
    $.isShowInfo = 'false'

city = city.match('疫情') ? city : city + '疫情'
let url = 'https://opendata.baidu.com/data/inner?resource_id=5653&query='
let cityencode = encodeURIComponent(city)
let option = {
    url: url + cityencode + '&alr=1&is_opendata=1',
    headers: {
        "Accept": "*/*",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/605.1.15",
        "Content-Type": "application/json; charset=utf-8"
    }
}
let info = []
let body = {}
$.get(option, function (error, response, data) {
    // $.log(response.body)
    let obj = response.body
    let jsonObj = JSON.parse(obj)
    let notifyContent = ''
    if (jsonObj.Result.length !== 0) {
        if($.isShowInfo === 'true')
        {
            let infoList = jsonObj.Result[0].DisplayData.resultData.tplData.data_list
            $.log('\nLog: 信息数量：' + infoList.length)
            infoList.forEach(function (i) {
                info.push({name: i.total_desc, value: i.total_num, changeName: i.change_desc, changeValue: i.change_num})
                notifyContent += i.total_desc + ': ' + i.total_num + '  │  ' + i.change_desc + ': ' + i.change_num + '\n'
            })
        }
        if (jsonObj.Result.length > 0) {
            // 新闻列表
            let newsList = jsonObj.Result[4].DisplayData.resultData.tplData.node_list
            let news = ''
            let forNum = 0 // 循环次数
            $.isShowInfo === 'true'?forNum=1:forNum=4
            if(forNum===4)
                newsList.length>=4?forNum=4:forNum=newsList.length
            // $.isShowInfo === 'true'?news=newsList[0].title:news=newsList[0].title+'\n📰历史新闻：\n'
            forNum === 1?news=newsList[0].title:news=newsList[0].title+'\n📰历史新闻：\n'
            try {
                for(let i =1;i<forNum;i++)
                {
                    let newOne = newsList[i].title
                    let newsOneTimeNum = newsList[i].create_time
                    let newsOneTime = new Date(parseInt(newsOneTimeNum + "000")).toLocaleString().replace(':00','')
                    if(i===forNum-1)
                        news += newsOneTime+' '+newOne
                    else
                        news += newsOneTime+' '+newOne + '\n'
                }
                $.log(news)
                let newsTimeNum = newsList[0].create_time
                let newsUrl = newsList[0].url
                let newsTime = new Date(parseInt(newsTimeNum + "000")).toLocaleString()
                // notifyContent += '🦠最新新闻: '+newsTime+'👇\n' + news
                notifyContent += '🦠最新新闻 ' + newsTime + ': 👇\n' + news
                if ($.isNotify === 'true')
                    $.msg('📢COVID-19', '😷' + city, notifyContent, {"open-url": newsUrl})
            } catch (e) {
                $.msg('📢COVID-19', '出错了')
            }
        } else {
            if ($.isNotify === 'true')
                $.msg('📢COVID-19', '😷' + city, notifyContent)
        }
        $.log('\nLog:\n' + notifyContent)
        $.isSurge() ? body = {
            title: '😷' + city,
            content: notifyContent,
            icon: 'cross.circle',
            'icon-color': '#ff0000'
        } : body = {title: '😷' + city, content: notifyContent, icon: 'cross.circle', backgroundColor: '#ff0000'}
    } else {
        $.log('\nLog:\n省份或城市错误，没有获取到信息')
        notifyContent = '省份或城市错误，没有获取到信息!'
        if ($.isNotify === 'true')
            $.msg('📢COVID-19', '❌错误', notifyContent)
        $.isSurge() ? body = {
            title: '😷' + city,
            content: '❌错误\n' + notifyContent,
            icon: 'cross.circle',
            'icon-color': '#ff0000'
        } : body = {
            title: '😷' + city,
            content: '❌错误\n' + notifyContent,
            icon: 'cross.circle',
            backgroundColor: '#ff0000'
        }
    }
    $.isSurge || $.isStash ? $.done(body) : $.done()
})

/*********************************
 * environment
 * ********************************
 */
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}isShadowrocket(){return"undefined"!=typeof $rocket}isStash(){return"undefined"!=typeof $environment&&$environment["stash-version"]}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,n]=i.split("@"),a={url:`http://${n}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),n=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(n);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){if(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,i)});else if(this.isQuanX())this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t&&t.error||"UndefinedError"));else if(this.isNode()){let s=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:i,statusCode:r,headers:o,rawBody:n}=t,a=s.decode(n,this.encoding);e(null,{status:i,statusCode:r,headers:o,rawBody:n,body:a},a)},t=>{const{message:i,response:r}=t;e(i,r,r&&s.decode(r.rawBody,this.encoding))})}}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,i)});else if(this.isQuanX())t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t&&t.error||"UndefinedError"));else if(this.isNode()){let i=require("iconv-lite");this.initGotEnv(t);const{url:r,...o}=t;this.got[s](r,o).then(t=>{const{statusCode:s,statusCode:r,headers:o,rawBody:n}=t,a=i.decode(n,this.encoding);e(null,{status:s,statusCode:r,headers:o,rawBody:n,body:a},a)},t=>{const{message:s,response:r}=t;e(s,r,r&&i.decode(r.rawBody,this.encoding))})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}queryStr(t){let e="";for(const s in t){let i=t[s];null!=i&&""!==i&&("object"==typeof i&&(i=JSON.stringify(i)),e+=`${s}=${i}&`)}return e=e.substring(0,e.length-1),e}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl,i=t["update-pasteboard"]||t.updatePasteboard;return{"open-url":e,"media-url":s,"update-pasteboard":i}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),this.isSurge()||this.isQuanX()||this.isLoon()?$done(t):this.isNode()&&process.exit(1)}}(t,e)}












































// Adding a dummy stoverride commit(13)
// Adding a dummy sgmodule commit(19)
// Adding a dummy plugin commit(17)
