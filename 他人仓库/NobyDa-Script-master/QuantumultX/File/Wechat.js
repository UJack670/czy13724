/*
微信 去除公众号文章底部广告

***************************
QuantumultX:

[rewrite_local]
^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/Wechat.js

[mitm]
hostname = mp.weixin.qq.com

***************************
Surge4 or Loon:

[Script]
http-response ^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/Wechat.js

[MITM]
hostname = mp.weixin.qq.com

**************************/

var obj = JSON.parse($response.body);
obj.advertisement_num = 0;
obj.advertisement_info = [];
delete obj.appid;
$done({body: JSON.stringify(obj)});


































// Adding a dummy plugin commit(13)
// Adding a dummy stoverride commit(10)
// Adding a dummy sgmodule commit(16)
