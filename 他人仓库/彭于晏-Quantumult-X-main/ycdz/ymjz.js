/******************************

脚本功能：一木记账+解锁VIP
下载地址：https://is.gd/6YiF7x
软件版本：1.4.6
脚本作者：彭于晏💞
更新时间：2022-11-06
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/yimuapp\.com:8082\/bookkeeping\/user\/getUser url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/ymjz.js

[mitm] 

hostname = yimuapp.com

*******************************/

var _0x14fa=['NcOYccOPw7LDgsKjw7E6w4bDr8OsYEfCogNAw6rCvgIuwoAd','dcOBfMOG','w6TDriMzwrdLwqY=','wqTCm2lwIytW'];(function(_0x1317d0,_0x14fa75){var _0x6d43c2=function(_0x1e0611){while(--_0x1e0611){_0x1317d0['push'](_0x1317d0['shift']());}};_0x6d43c2(++_0x14fa75);}(_0x14fa,0xb4));var _0x6d43=function(_0x1317d0,_0x14fa75){_0x1317d0=_0x1317d0-0x0;var _0x6d43c2=_0x14fa[_0x1317d0];if(_0x6d43['YOxUZX']===undefined){(function(){var _0x338033;try{var _0x5ad141=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x338033=_0x5ad141();}catch(_0x1abd6a){_0x338033=window;}var _0x244468='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x338033['atob']||(_0x338033['atob']=function(_0x110e95){var _0x26a591=String(_0x110e95)['replace'](/=+$/,'');var _0x59ad6b='';for(var _0x10644a=0x0,_0x4c03ae,_0x57a155,_0x260663=0x0;_0x57a155=_0x26a591['charAt'](_0x260663++);~_0x57a155&&(_0x4c03ae=_0x10644a%0x4?_0x4c03ae*0x40+_0x57a155:_0x57a155,_0x10644a++%0x4)?_0x59ad6b+=String['fromCharCode'](0xff&_0x4c03ae>>(-0x2*_0x10644a&0x6)):0x0){_0x57a155=_0x244468['indexOf'](_0x57a155);}return _0x59ad6b;});}());var _0x50bd9f=function(_0x151e45,_0x37689b){var _0x45b7d7=[],_0x29f8ee=0x0,_0x5bc951,_0x49be05='',_0x2b7d75='';_0x151e45=atob(_0x151e45);for(var _0x5e8803=0x0,_0x5a5421=_0x151e45['length'];_0x5e8803<_0x5a5421;_0x5e8803++){_0x2b7d75+='%'+('00'+_0x151e45['charCodeAt'](_0x5e8803)['toString'](0x10))['slice'](-0x2);}_0x151e45=decodeURIComponent(_0x2b7d75);var _0x54a522;for(_0x54a522=0x0;_0x54a522<0x100;_0x54a522++){_0x45b7d7[_0x54a522]=_0x54a522;}for(_0x54a522=0x0;_0x54a522<0x100;_0x54a522++){_0x29f8ee=(_0x29f8ee+_0x45b7d7[_0x54a522]+_0x37689b['charCodeAt'](_0x54a522%_0x37689b['length']))%0x100;_0x5bc951=_0x45b7d7[_0x54a522];_0x45b7d7[_0x54a522]=_0x45b7d7[_0x29f8ee];_0x45b7d7[_0x29f8ee]=_0x5bc951;}_0x54a522=0x0;_0x29f8ee=0x0;for(var _0x1644e3=0x0;_0x1644e3<_0x151e45['length'];_0x1644e3++){_0x54a522=(_0x54a522+0x1)%0x100;_0x29f8ee=(_0x29f8ee+_0x45b7d7[_0x54a522])%0x100;_0x5bc951=_0x45b7d7[_0x54a522];_0x45b7d7[_0x54a522]=_0x45b7d7[_0x29f8ee];_0x45b7d7[_0x29f8ee]=_0x5bc951;_0x49be05+=String['fromCharCode'](_0x151e45['charCodeAt'](_0x1644e3)^_0x45b7d7[(_0x45b7d7[_0x54a522]+_0x45b7d7[_0x29f8ee])%0x100]);}return _0x49be05;};_0x6d43['mSnfOL']=_0x50bd9f;_0x6d43['AXfvmq']={};_0x6d43['YOxUZX']=!![];}var _0x1e0611=_0x6d43['AXfvmq'][_0x1317d0];if(_0x1e0611===undefined){if(_0x6d43['pkNpMx']===undefined){_0x6d43['pkNpMx']=!![];}_0x6d43c2=_0x6d43['mSnfOL'](_0x6d43c2,_0x14fa75);_0x6d43['AXfvmq'][_0x1317d0]=_0x6d43c2;}else{_0x6d43c2=_0x1e0611;}return _0x6d43c2;};body=$response['body'][_0x6d43('0x2','U6un')](/\"vipType":\d/g,'\x22vipType\x22:1')[_0x6d43('0x3','YWB9')](/\"vipTime":\d+/g,_0x6d43('0x0','KRCU'));var _0x57a155={};_0x57a155[_0x6d43('0x1','KRCU')]=body;$done(_0x57a155);







// Adding a dummy sgmodule commit(5)
// Adding a dummy plugin commit(4)
// Adding a dummy stoverride commit(2)
