/******************************

脚本功能：Memrise跟忆术家学语言+解锁订阅
下载地址：https://is.gd/NK2Knm
软件版本：2022.10.25
脚本作者：彭于晏💞
更新时间：2022-11-06
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https:\/\/api\.memrise\.com\/v1\.19 url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Memrise.js

[mitm] 

hostname = api.memrise.com

*******************************/

var _0x2e67=['\x45\x58\x73\x4c\x77\x34\x70\x41\x77\x34\x7a\x43\x6b\x73\x4b\x32\x63\x38\x4b\x6d\x62\x31\x74\x53','\x77\x71\x64\x4d\x62\x57\x54\x43\x6c\x78\x45\x53','\x77\x36\x73\x4c\x61\x38\x4b\x47\x77\x36\x2f\x44\x69\x44\x78\x68\x54\x47\x2f\x43\x6a\x6d\x78\x4f\x4c\x41\x70\x75\x77\x6f\x6e\x43\x75\x43\x64\x50\x41\x78\x6b\x39\x77\x72\x6b\x3d','\x4b\x63\x4b\x72\x61\x73\x4f\x6e\x64\x73\x4b\x53\x46\x55\x2f\x43\x69\x4d\x4f\x68\x48\x38\x4f\x4e\x43\x6a\x56\x74\x58\x73\x4f\x49','\x55\x73\x4f\x2f\x52\x73\x4f\x4a\x66\x63\x4f\x72\x47\x77\x3d\x3d','\x77\x6f\x30\x38\x77\x34\x55\x64\x77\x6f\x39\x75\x52\x31\x30\x2b\x48\x46\x30\x3d','\x57\x54\x5a\x33\x77\x71\x7a\x44\x68\x4d\x4b\x79\x53\x77\x3d\x3d','\x55\x73\x4f\x2f\x51\x73\x4f\x51\x62\x73\x4f\x6d\x58\x73\x4f\x42\x77\x6f\x66\x44\x6e\x73\x4b\x43\x51\x57\x73\x6e\x77\x70\x48\x43\x6e\x63\x4b\x71\x48\x4d\x4b\x72\x58\x4d\x4b\x4c','\x59\x63\x4f\x55\x77\x34\x50\x44\x67\x4d\x4b\x63'];(function(_0x274de6,_0x2e67f3){var _0x1d01ec=function(_0x52329d){while(--_0x52329d){_0x274de6['push'](_0x274de6['shift']());}};var _0x346e24=function(){var _0x3f086f={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5d3bdb,_0x12dff9,_0x1467e5,_0x2c4784){_0x2c4784=_0x2c4784||{};var _0x4e90e1=_0x12dff9+'='+_0x1467e5;var _0x254c79=0x0;for(var _0x10d8bf=0x0,_0x507b35=_0x5d3bdb['length'];_0x10d8bf<_0x507b35;_0x10d8bf++){var _0x51da20=_0x5d3bdb[_0x10d8bf];_0x4e90e1+=';\x20'+_0x51da20;var _0x2b9b9c=_0x5d3bdb[_0x51da20];_0x5d3bdb['push'](_0x2b9b9c);_0x507b35=_0x5d3bdb['length'];if(_0x2b9b9c!==!![]){_0x4e90e1+='='+_0x2b9b9c;}}_0x2c4784['cookie']=_0x4e90e1;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3d07e0,_0x7bc5fa){_0x3d07e0=_0x3d07e0||function(_0x14ecd3){return _0x14ecd3;};var _0x15214e=_0x3d07e0(new RegExp('(?:^|;\x20)'+_0x7bc5fa['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x66b4a7=function(_0x3e5025,_0x532ae2){_0x3e5025(++_0x532ae2);};_0x66b4a7(_0x1d01ec,_0x2e67f3);return _0x15214e?decodeURIComponent(_0x15214e[0x1]):undefined;}};var _0x2c9332=function(){var _0x2ae188=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2ae188['test'](_0x3f086f['removeCookie']['toString']());};_0x3f086f['updateCookie']=_0x2c9332;var _0x193545='';var _0x201777=_0x3f086f['updateCookie']();if(!_0x201777){_0x3f086f['setCookie'](['*'],'counter',0x1);}else if(_0x201777){_0x193545=_0x3f086f['getCookie'](null,'counter');}else{_0x3f086f['removeCookie']();}};_0x346e24();}(_0x2e67,0x109));var _0x1d01=function(_0x274de6,_0x2e67f3){_0x274de6=_0x274de6-0x0;var _0x1d01ec=_0x2e67[_0x274de6];if(_0x1d01['oMkaqo']===undefined){(function(){var _0x3f086f;try{var _0x193545=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x3f086f=_0x193545();}catch(_0x201777){_0x3f086f=window;}var _0x2c9332='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3f086f['atob']||(_0x3f086f['atob']=function(_0x5d3bdb){var _0x12dff9=String(_0x5d3bdb)['replace'](/=+$/,'');var _0x1467e5='';for(var _0x2c4784=0x0,_0x4e90e1,_0x254c79,_0x10d8bf=0x0;_0x254c79=_0x12dff9['charAt'](_0x10d8bf++);~_0x254c79&&(_0x4e90e1=_0x2c4784%0x4?_0x4e90e1*0x40+_0x254c79:_0x254c79,_0x2c4784++%0x4)?_0x1467e5+=String['fromCharCode'](0xff&_0x4e90e1>>(-0x2*_0x2c4784&0x6)):0x0){_0x254c79=_0x2c9332['indexOf'](_0x254c79);}return _0x1467e5;});}());var _0x52329d=function(_0x507b35,_0x51da20){var _0x2b9b9c=[],_0x3d07e0=0x0,_0x7bc5fa,_0x15214e='',_0x66b4a7='';_0x507b35=atob(_0x507b35);for(var _0x3e5025=0x0,_0x532ae2=_0x507b35['length'];_0x3e5025<_0x532ae2;_0x3e5025++){_0x66b4a7+='%'+('00'+_0x507b35['charCodeAt'](_0x3e5025)['toString'](0x10))['slice'](-0x2);}_0x507b35=decodeURIComponent(_0x66b4a7);var _0x14ecd3;for(_0x14ecd3=0x0;_0x14ecd3<0x100;_0x14ecd3++){_0x2b9b9c[_0x14ecd3]=_0x14ecd3;}for(_0x14ecd3=0x0;_0x14ecd3<0x100;_0x14ecd3++){_0x3d07e0=(_0x3d07e0+_0x2b9b9c[_0x14ecd3]+_0x51da20['charCodeAt'](_0x14ecd3%_0x51da20['length']))%0x100;_0x7bc5fa=_0x2b9b9c[_0x14ecd3];_0x2b9b9c[_0x14ecd3]=_0x2b9b9c[_0x3d07e0];_0x2b9b9c[_0x3d07e0]=_0x7bc5fa;}_0x14ecd3=0x0;_0x3d07e0=0x0;for(var _0x2ae188=0x0;_0x2ae188<_0x507b35['length'];_0x2ae188++){_0x14ecd3=(_0x14ecd3+0x1)%0x100;_0x3d07e0=(_0x3d07e0+_0x2b9b9c[_0x14ecd3])%0x100;_0x7bc5fa=_0x2b9b9c[_0x14ecd3];_0x2b9b9c[_0x14ecd3]=_0x2b9b9c[_0x3d07e0];_0x2b9b9c[_0x3d07e0]=_0x7bc5fa;_0x15214e+=String['fromCharCode'](_0x507b35['charCodeAt'](_0x2ae188)^_0x2b9b9c[(_0x2b9b9c[_0x14ecd3]+_0x2b9b9c[_0x3d07e0])%0x100]);}return _0x15214e;};_0x1d01['jdpsqI']=_0x52329d;_0x1d01['Qphfeq']={};_0x1d01['oMkaqo']=!![];}var _0x346e24=_0x1d01['Qphfeq'][_0x274de6];if(_0x346e24===undefined){if(_0x1d01['RoumPw']===undefined){var _0x51b987=function(_0x26278e){this['kGDpzW']=_0x26278e;this['wfgMwo']=[0x1,0x0,0x0];this['MokGdF']=function(){return'newState';};this['ZTnWUo']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['KNvkqq']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x51b987['prototype']['nDAygt']=function(){var _0x318442=new RegExp(this['ZTnWUo']+this['KNvkqq']);var _0x2fcb2d=_0x318442['test'](this['MokGdF']['toString']())?--this['wfgMwo'][0x1]:--this['wfgMwo'][0x0];return this['jkxWQO'](_0x2fcb2d);};_0x51b987['prototype']['jkxWQO']=function(_0x439556){if(!Boolean(~_0x439556)){return _0x439556;}return this['noxMcl'](this['kGDpzW']);};_0x51b987['prototype']['noxMcl']=function(_0x2e95fb){for(var _0x1c19bb=0x0,_0x14b7fd=this['wfgMwo']['length'];_0x1c19bb<_0x14b7fd;_0x1c19bb++){this['wfgMwo']['push'](Math['round'](Math['random']()));_0x14b7fd=this['wfgMwo']['length'];}return _0x2e95fb(this['wfgMwo'][0x0]);};new _0x51b987(_0x1d01)['nDAygt']();_0x1d01['RoumPw']=!![];}_0x1d01ec=_0x1d01['jdpsqI'](_0x1d01ec,_0x2e67f3);_0x1d01['Qphfeq'][_0x274de6]=_0x1d01ec;}else{_0x1d01ec=_0x346e24;}return _0x1d01ec;};var _0x2ae188=function(){var _0x26278e=!![];return function(_0x318442,_0x2fcb2d){var _0x439556=_0x26278e?function(){if(_0x2fcb2d){var _0x2e95fb=_0x2fcb2d[_0x1d01('\x30\x78\x34','\x41\x54\x44\x25')](_0x318442,arguments);_0x2fcb2d=null;return _0x2e95fb;}}:function(){};_0x26278e=![];return _0x439556;};}();var _0x51b987=_0x2ae188(this,function(){var _0x1c19bb=function(){var _0x14b7fd=_0x1c19bb[_0x1d01('\x30\x78\x31','\x57\x5d\x67\x6f')](_0x1d01('\x30\x78\x33','\x54\x58\x46\x39'))()[_0x1d01('\x30\x78\x36','\x57\x7a\x58\x24')](_0x1d01('\x30\x78\x37','\x26\x6f\x46\x47'));return!_0x14b7fd['\x74\x65\x73\x74'](_0x51b987);};return _0x1c19bb();});_0x51b987();body=$response['\x62\x6f\x64\x79'][_0x1d01('\x30\x78\x32','\x4d\x5b\x6a\x6d')](/\"is_premium":\w+/g,_0x1d01('\x30\x78\x38','\x78\x21\x51\x6a'))[_0x1d01('\x30\x78\x30','\x54\x58\x46\x39')](/\"is_pro":\w+/g,_0x1d01('\x30\x78\x35','\x35\x2a\x5a\x43'));$done({'\x62\x6f\x64\x79':body});









// Adding a dummy stoverride commit(2)

// Adding a dummy plugin commit(5)
// Adding a dummy sgmodule commit(8)
