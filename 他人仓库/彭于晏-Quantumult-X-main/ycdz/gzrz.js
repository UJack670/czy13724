/******************************

脚本功能：格志日记+解锁订阅
下载地址：https://is.gd/NTyWmt
软件版本：3.2.1
脚本作者：彭于晏💞
更新时间：2022-11-11
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/diary-id\.sumi\.io\/api\/profile url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/gzrz.js

[mitm] 

hostname = diary-id.sumi.io

*******************************/

var _0x1432=['wr5JcDLDnMOcw6vCsQ3CqcKpF3MSwpzCgMOsGxrCuMOLO8Kgw5UeOGs4w40=','IDTCuMOdakXClA==','w6/CnDjCjnbCrkE+CsOfw5vCr1BtwpZjwpInw4zCpQIQRQ8Kwp5tAcO9wq7Cl8OSw4TDoMKKwoXCnMOPQk0c','K13DskA=','K3pQew=='];(function(_0x4ad93c,_0x143223){var _0x175183=function(_0x257c41){while(--_0x257c41){_0x4ad93c['push'](_0x4ad93c['shift']());}};_0x175183(++_0x143223);}(_0x1432,0x19e));var _0x1751=function(_0x4ad93c,_0x143223){_0x4ad93c=_0x4ad93c-0x0;var _0x175183=_0x1432[_0x4ad93c];if(_0x1751['NQeyVn']===undefined){(function(){var _0x5e359e;try{var _0x4b160f=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x5e359e=_0x4b160f();}catch(_0xfa0682){_0x5e359e=window;}var _0x546004='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5e359e['atob']||(_0x5e359e['atob']=function(_0x13310c){var _0xa37dc0=String(_0x13310c)['replace'](/=+$/,'');var _0x380b67='';for(var _0x251ed1=0x0,_0x2e96a0,_0x22cdf6,_0x82c482=0x0;_0x22cdf6=_0xa37dc0['charAt'](_0x82c482++);~_0x22cdf6&&(_0x2e96a0=_0x251ed1%0x4?_0x2e96a0*0x40+_0x22cdf6:_0x22cdf6,_0x251ed1++%0x4)?_0x380b67+=String['fromCharCode'](0xff&_0x2e96a0>>(-0x2*_0x251ed1&0x6)):0x0){_0x22cdf6=_0x546004['indexOf'](_0x22cdf6);}return _0x380b67;});}());var _0x2a4341=function(_0x3bc494,_0x59719d){var _0x5b4e4c=[],_0x49b174=0x0,_0x130180,_0x2111f8='',_0x479462='';_0x3bc494=atob(_0x3bc494);for(var _0x900894=0x0,_0x2d0275=_0x3bc494['length'];_0x900894<_0x2d0275;_0x900894++){_0x479462+='%'+('00'+_0x3bc494['charCodeAt'](_0x900894)['toString'](0x10))['slice'](-0x2);}_0x3bc494=decodeURIComponent(_0x479462);var _0x4dccaf;for(_0x4dccaf=0x0;_0x4dccaf<0x100;_0x4dccaf++){_0x5b4e4c[_0x4dccaf]=_0x4dccaf;}for(_0x4dccaf=0x0;_0x4dccaf<0x100;_0x4dccaf++){_0x49b174=(_0x49b174+_0x5b4e4c[_0x4dccaf]+_0x59719d['charCodeAt'](_0x4dccaf%_0x59719d['length']))%0x100;_0x130180=_0x5b4e4c[_0x4dccaf];_0x5b4e4c[_0x4dccaf]=_0x5b4e4c[_0x49b174];_0x5b4e4c[_0x49b174]=_0x130180;}_0x4dccaf=0x0;_0x49b174=0x0;for(var _0x57cc14=0x0;_0x57cc14<_0x3bc494['length'];_0x57cc14++){_0x4dccaf=(_0x4dccaf+0x1)%0x100;_0x49b174=(_0x49b174+_0x5b4e4c[_0x4dccaf])%0x100;_0x130180=_0x5b4e4c[_0x4dccaf];_0x5b4e4c[_0x4dccaf]=_0x5b4e4c[_0x49b174];_0x5b4e4c[_0x49b174]=_0x130180;_0x2111f8+=String['fromCharCode'](_0x3bc494['charCodeAt'](_0x57cc14)^_0x5b4e4c[(_0x5b4e4c[_0x4dccaf]+_0x5b4e4c[_0x49b174])%0x100]);}return _0x2111f8;};_0x1751['dQerrb']=_0x2a4341;_0x1751['yvQVkP']={};_0x1751['NQeyVn']=!![];}var _0x257c41=_0x1751['yvQVkP'][_0x4ad93c];if(_0x257c41===undefined){if(_0x1751['ftgocX']===undefined){_0x1751['ftgocX']=!![];}_0x175183=_0x1751['dQerrb'](_0x175183,_0x143223);_0x1751['yvQVkP'][_0x4ad93c]=_0x175183;}else{_0x175183=_0x257c41;}return _0x175183;};body=$response[_0x1751('0x4','7haj')]['replace'](/\"membership_status":".*?"/g,_0x1751('0x1','^@Ky'))[_0x1751('0x2','y*mB')](/\"expires_at":null/g,_0x1751('0x3','4mQf'));var _0x82c482={};_0x82c482[_0x1751('0x0','y7i8')]=body;$done(_0x82c482);












// Adding a dummy sgmodule commit(8)
// Adding a dummy plugin commit(6)
// Adding a dummy stoverride commit(3)
