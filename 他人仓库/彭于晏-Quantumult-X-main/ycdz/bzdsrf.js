/*******************************

脚本功能：不折叠输入法——解锁VIP
下载地址：https://is.gd/oWDGe9
软件版本：2.5.5
脚本作者：彭于晏💞
更新时间：2023-3-6
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/api.keyboard.buzhedie.com\/input\/member_info\/ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/bzdsrf.js

[mitm] 

hostname = api.keyboard.buzhedie.com


*******************************/

var _0x1859=['wrnDj3VwG2/Ctg==','wqXDl17CuSMoQMOhwrceWXp+wrTDqSLDnU3DtDRaw45p','aU4gCcOTcTE=','djzCgcKKw51Lw5Y=','w7dWwpVeH8OnKcOcWMKJQlvDpA==','Jj57w45laMKCIcKgDmTCuDHlvYTku7Pmm4USw7bCrxBkNg=='];(function(_0x542faf,_0x1859ca){var _0x4e3139=function(_0x4edb85){while(--_0x4edb85){_0x542faf['push'](_0x542faf['shift']());}};_0x4e3139(++_0x1859ca);}(_0x1859,0x1c5));var _0x4e31=function(_0x542faf,_0x1859ca){_0x542faf=_0x542faf-0x0;var _0x4e3139=_0x1859[_0x542faf];if(_0x4e31['WGfPcQ']===undefined){(function(){var _0x1e936f;try{var _0x492510=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x1e936f=_0x492510();}catch(_0x2933c6){_0x1e936f=window;}var _0x342434='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1e936f['atob']||(_0x1e936f['atob']=function(_0x1c9e99){var _0x3a5800=String(_0x1c9e99)['replace'](/=+$/,'');var _0x162262='';for(var _0x1d93fe=0x0,_0x4434f0,_0x4230d1,_0x426618=0x0;_0x4230d1=_0x3a5800['charAt'](_0x426618++);~_0x4230d1&&(_0x4434f0=_0x1d93fe%0x4?_0x4434f0*0x40+_0x4230d1:_0x4230d1,_0x1d93fe++%0x4)?_0x162262+=String['fromCharCode'](0xff&_0x4434f0>>(-0x2*_0x1d93fe&0x6)):0x0){_0x4230d1=_0x342434['indexOf'](_0x4230d1);}return _0x162262;});}());var _0x4a9a92=function(_0x651d3c,_0x4ae29b){var _0x3cf31f=[],_0x4835a4=0x0,_0x575a77,_0x1d86d4='',_0x1eace2='';_0x651d3c=atob(_0x651d3c);for(var _0x3c17fa=0x0,_0xaa7809=_0x651d3c['length'];_0x3c17fa<_0xaa7809;_0x3c17fa++){_0x1eace2+='%'+('00'+_0x651d3c['charCodeAt'](_0x3c17fa)['toString'](0x10))['slice'](-0x2);}_0x651d3c=decodeURIComponent(_0x1eace2);var _0x59b063;for(_0x59b063=0x0;_0x59b063<0x100;_0x59b063++){_0x3cf31f[_0x59b063]=_0x59b063;}for(_0x59b063=0x0;_0x59b063<0x100;_0x59b063++){_0x4835a4=(_0x4835a4+_0x3cf31f[_0x59b063]+_0x4ae29b['charCodeAt'](_0x59b063%_0x4ae29b['length']))%0x100;_0x575a77=_0x3cf31f[_0x59b063];_0x3cf31f[_0x59b063]=_0x3cf31f[_0x4835a4];_0x3cf31f[_0x4835a4]=_0x575a77;}_0x59b063=0x0;_0x4835a4=0x0;for(var _0x4bcb4e=0x0;_0x4bcb4e<_0x651d3c['length'];_0x4bcb4e++){_0x59b063=(_0x59b063+0x1)%0x100;_0x4835a4=(_0x4835a4+_0x3cf31f[_0x59b063])%0x100;_0x575a77=_0x3cf31f[_0x59b063];_0x3cf31f[_0x59b063]=_0x3cf31f[_0x4835a4];_0x3cf31f[_0x4835a4]=_0x575a77;_0x1d86d4+=String['fromCharCode'](_0x651d3c['charCodeAt'](_0x4bcb4e)^_0x3cf31f[(_0x3cf31f[_0x59b063]+_0x3cf31f[_0x4835a4])%0x100]);}return _0x1d86d4;};_0x4e31['agcyPg']=_0x4a9a92;_0x4e31['LBbEZc']={};_0x4e31['WGfPcQ']=!![];}var _0x4edb85=_0x4e31['LBbEZc'][_0x542faf];if(_0x4edb85===undefined){if(_0x4e31['fhARDc']===undefined){_0x4e31['fhARDc']=!![];}_0x4e3139=_0x4e31['agcyPg'](_0x4e3139,_0x1859ca);_0x4e31['LBbEZc'][_0x542faf]=_0x4e3139;}else{_0x4e3139=_0x4edb85;}return _0x4e3139;};var body=$response['body'][_0x4e31('0x5','*$2c')](/"is_vip":false/g,_0x4e31('0x1','KUcB'))[_0x4e31('0x3','WIJA')](/"vip_time":".*?"/g,_0x4e31('0x4','0$X3'))[_0x4e31('0x0','ycj[')](/"nick_name":".*?"/g,_0x4e31('0x2','2kx#'));$done({'body':body});














// Adding a dummy stoverride commit(3)
// Adding a dummy sgmodule commit(9)
// Adding a dummy plugin commit(7)
