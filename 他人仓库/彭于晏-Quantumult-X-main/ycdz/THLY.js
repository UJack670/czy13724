/*******************************

脚本功能：通话录音——解锁订阅
下载地址：https://is.gd/UBQVln
软件版本：2.0
脚本作者：彭于晏💞
更新时间：2023-7-24
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/callrecorder.icamscanner.com\/user\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/THLY.js

[mitm] 

hostname = callrecorder.icamscanner.com

*******************************/

var _0x241d=['wrjDscOWwrc=','w5klw7rDoCHCuz9uwpzCocOuw77CocOHcMOdJ8OeYsONwpnDgwnCgDlWw7nDuxLDhcOewo5+Pw==','wo1+wprDpl90w7I='];(function(_0x133f66,_0x241d51){var _0x131eff=function(_0x415161){while(--_0x415161){_0x133f66['push'](_0x133f66['shift']());}};_0x131eff(++_0x241d51);}(_0x241d,0xb4));var _0x131e=function(_0x133f66,_0x241d51){_0x133f66=_0x133f66-0x0;var _0x131eff=_0x241d[_0x133f66];if(_0x131e['gpmjpd']===undefined){(function(){var _0x5f32a9;try{var _0xeb4e13=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x5f32a9=_0xeb4e13();}catch(_0x5df5eb){_0x5f32a9=window;}var _0x4b7c6e='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5f32a9['atob']||(_0x5f32a9['atob']=function(_0x16c69f){var _0x56eb4d=String(_0x16c69f)['replace'](/=+$/,'');var _0x5965a7='';for(var _0x51dfd2=0x0,_0x4e7c01,_0x3c55dc,_0xba83af=0x0;_0x3c55dc=_0x56eb4d['charAt'](_0xba83af++);~_0x3c55dc&&(_0x4e7c01=_0x51dfd2%0x4?_0x4e7c01*0x40+_0x3c55dc:_0x3c55dc,_0x51dfd2++%0x4)?_0x5965a7+=String['fromCharCode'](0xff&_0x4e7c01>>(-0x2*_0x51dfd2&0x6)):0x0){_0x3c55dc=_0x4b7c6e['indexOf'](_0x3c55dc);}return _0x5965a7;});}());var _0x2fe5e8=function(_0x1e16a3,_0xc27fb3){var _0x1d4bc8=[],_0x162228=0x0,_0x10f919,_0x1cc4b5='',_0x6bbf6d='';_0x1e16a3=atob(_0x1e16a3);for(var _0x481e13=0x0,_0x47bb92=_0x1e16a3['length'];_0x481e13<_0x47bb92;_0x481e13++){_0x6bbf6d+='%'+('00'+_0x1e16a3['charCodeAt'](_0x481e13)['toString'](0x10))['slice'](-0x2);}_0x1e16a3=decodeURIComponent(_0x6bbf6d);var _0x4eb23a;for(_0x4eb23a=0x0;_0x4eb23a<0x100;_0x4eb23a++){_0x1d4bc8[_0x4eb23a]=_0x4eb23a;}for(_0x4eb23a=0x0;_0x4eb23a<0x100;_0x4eb23a++){_0x162228=(_0x162228+_0x1d4bc8[_0x4eb23a]+_0xc27fb3['charCodeAt'](_0x4eb23a%_0xc27fb3['length']))%0x100;_0x10f919=_0x1d4bc8[_0x4eb23a];_0x1d4bc8[_0x4eb23a]=_0x1d4bc8[_0x162228];_0x1d4bc8[_0x162228]=_0x10f919;}_0x4eb23a=0x0;_0x162228=0x0;for(var _0x16624b=0x0;_0x16624b<_0x1e16a3['length'];_0x16624b++){_0x4eb23a=(_0x4eb23a+0x1)%0x100;_0x162228=(_0x162228+_0x1d4bc8[_0x4eb23a])%0x100;_0x10f919=_0x1d4bc8[_0x4eb23a];_0x1d4bc8[_0x4eb23a]=_0x1d4bc8[_0x162228];_0x1d4bc8[_0x162228]=_0x10f919;_0x1cc4b5+=String['fromCharCode'](_0x1e16a3['charCodeAt'](_0x16624b)^_0x1d4bc8[(_0x1d4bc8[_0x4eb23a]+_0x1d4bc8[_0x162228])%0x100]);}return _0x1cc4b5;};_0x131e['QNNmkW']=_0x2fe5e8;_0x131e['VazOlt']={};_0x131e['gpmjpd']=!![];}var _0x415161=_0x131e['VazOlt'][_0x133f66];if(_0x415161===undefined){if(_0x131e['AWAgiQ']===undefined){_0x131e['AWAgiQ']=!![];}_0x131eff=_0x131e['QNNmkW'](_0x131eff,_0x241d51);_0x131e['VazOlt'][_0x133f66]=_0x131eff;}else{_0x131eff=_0x415161;}return _0x131eff;};var body=$response[_0x131e('0x0','9WGT')]['replace'](/expire_time":".*?"/g,_0x131e('0x1','1iL6'))[_0x131e('0x2','BQ^A')](/is_expired":"\d"/g,'is_expired\x22:\x220\x22')['replace'](/balance":"0.00"/g,'balance\x22:\x2299999.00\x22');$done({'body':body});












// Adding a dummy sgmodule commit(8)
// Adding a dummy plugin commit(6)
// Adding a dummy stoverride commit(3)
