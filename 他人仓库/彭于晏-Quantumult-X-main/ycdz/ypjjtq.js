/******************************

脚本功能：音频剪辑提取+解锁订阅
下载地址：https://is.gd/uXIeZO
软件版本：2.0.6
脚本作者：彭于晏💞
更新时间：2022-9-30
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https:\/\/fufei\.fengyunsoft\.cn\/api\/client\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/ypjjtq.js

[mitm] 

hostname = fufei.fengyunsoft.cn




*******************************/

var _0x5a77=['\x46\x41\x41\x56\x77\x70\x55\x73\x77\x70\x4a\x73\x77\x71\x33\x44\x71\x73\x4b\x42\x63\x51\x3d\x3d','\x35\x62\x71\x50\x35\x62\x6d\x63\x36\x4b\x36\x4c\x36\x5a\x75\x33','\x77\x37\x41\x4d\x45\x63\x4b\x77\x77\x35\x54\x43\x68\x32\x4e\x53\x77\x37\x74\x48\x57\x6d\x45\x4f\x4a\x67\x3d\x3d','\x5a\x54\x55\x41\x77\x35\x44\x43\x6a\x73\x4b\x69\x50\x73\x4b\x78\x53\x4d\x4b\x52\x42\x56\x4c\x44\x6f\x42\x50\x43\x76\x32\x44\x44\x6c\x57\x59\x67\x77\x34\x77\x4c\x77\x72\x72\x44\x69\x4d\x4f\x69','\x58\x73\x4f\x36\x59\x55\x6b\x64\x44\x38\x4f\x69\x65\x4d\x4b\x72','\x4c\x51\x30\x69\x77\x35\x6f\x36\x57\x67\x67\x3d','\x50\x67\x4d\x39\x77\x35\x6b\x32','\x55\x63\x4f\x4e\x4b\x68\x6b\x3d','\x45\x73\x4f\x51\x77\x36\x55\x3d','\x51\x6c\x4d\x6b\x64\x32\x76\x44\x74\x38\x4f\x51\x4d\x6c\x49\x74\x44\x73\x4b\x7a\x77\x37\x44\x43\x6c\x73\x4f\x66\x77\x35\x6e\x43\x6a\x38\x4b\x77\x4c\x77\x3d\x3d','\x77\x71\x42\x75\x77\x6f\x4c\x44\x68\x4d\x4b\x7a\x43\x63\x4b\x36','\x4f\x38\x4f\x2b\x4f\x38\x4f\x6a\x77\x34\x64\x70\x77\x35\x45\x47\x77\x36\x6a\x43\x6c\x4d\x4b\x48\x57\x32\x4c\x44\x71\x63\x4f\x64\x49\x38\x4f\x53\x53\x73\x4f\x4b','\x56\x4d\x4f\x4e\x77\x35\x54\x44\x6a\x73\x4b\x68\x77\x72\x33\x43\x75\x67\x3d\x3d','\x77\x34\x64\x61\x77\x36\x74\x6a\x4b\x6a\x2f\x44\x76\x73\x4b\x68\x77\x72\x72\x44\x75\x38\x4f\x34\x57\x38\x4b\x31\x62\x53\x4c\x43\x72\x63\x4f\x4d\x4a\x63\x4b\x76\x77\x35\x63\x6a','\x77\x34\x44\x44\x6d\x7a\x4a\x67\x77\x35\x51\x3d','\x43\x63\x4b\x4b\x77\x71\x33\x43\x69\x47\x34\x3d','\x41\x63\x4b\x53\x66\x46\x4c\x44\x71\x73\x4b\x52\x77\x35\x50\x44\x68\x58\x54\x43\x76\x58\x73\x58\x77\x34\x46\x75\x57\x48\x6f\x35\x77\x37\x63\x32'];(function(_0x4c4450,_0x5a77a6){var _0x45d2bd=function(_0x4b3957){while(--_0x4b3957){_0x4c4450['push'](_0x4c4450['shift']());}};var _0x11e321=function(){var _0x5cbe97={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x49f9a3,_0x18379c,_0x2d7055,_0x49be85){_0x49be85=_0x49be85||{};var _0x2b2331=_0x18379c+'='+_0x2d7055;var _0x936fda=0x0;for(var _0x390eb3=0x0,_0x5b0d78=_0x49f9a3['length'];_0x390eb3<_0x5b0d78;_0x390eb3++){var _0x2dbccb=_0x49f9a3[_0x390eb3];_0x2b2331+=';\x20'+_0x2dbccb;var _0x4bfd8e=_0x49f9a3[_0x2dbccb];_0x49f9a3['push'](_0x4bfd8e);_0x5b0d78=_0x49f9a3['length'];if(_0x4bfd8e!==!![]){_0x2b2331+='='+_0x4bfd8e;}}_0x49be85['cookie']=_0x2b2331;},'removeCookie':function(){return'dev';},'getCookie':function(_0x56cef6,_0x1f1d42){_0x56cef6=_0x56cef6||function(_0x326690){return _0x326690;};var _0x2b1dcb=_0x56cef6(new RegExp('(?:^|;\x20)'+_0x1f1d42['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x31cc8c=function(_0x18d1a1,_0x371de8){_0x18d1a1(++_0x371de8);};_0x31cc8c(_0x45d2bd,_0x5a77a6);return _0x2b1dcb?decodeURIComponent(_0x2b1dcb[0x1]):undefined;}};var _0xf9abe9=function(){var _0x5e9dae=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5e9dae['test'](_0x5cbe97['removeCookie']['toString']());};_0x5cbe97['updateCookie']=_0xf9abe9;var _0x576e00='';var _0x5f290b=_0x5cbe97['updateCookie']();if(!_0x5f290b){_0x5cbe97['setCookie'](['*'],'counter',0x1);}else if(_0x5f290b){_0x576e00=_0x5cbe97['getCookie'](null,'counter');}else{_0x5cbe97['removeCookie']();}};_0x11e321();}(_0x5a77,0x1a4));var _0x45d2=function(_0x4c4450,_0x5a77a6){_0x4c4450=_0x4c4450-0x0;var _0x45d2bd=_0x5a77[_0x4c4450];if(_0x45d2['eFTQdG']===undefined){(function(){var _0x5cbe97;try{var _0x576e00=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x5cbe97=_0x576e00();}catch(_0x5f290b){_0x5cbe97=window;}var _0xf9abe9='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5cbe97['atob']||(_0x5cbe97['atob']=function(_0x49f9a3){var _0x18379c=String(_0x49f9a3)['replace'](/=+$/,'');var _0x2d7055='';for(var _0x49be85=0x0,_0x2b2331,_0x936fda,_0x390eb3=0x0;_0x936fda=_0x18379c['charAt'](_0x390eb3++);~_0x936fda&&(_0x2b2331=_0x49be85%0x4?_0x2b2331*0x40+_0x936fda:_0x936fda,_0x49be85++%0x4)?_0x2d7055+=String['fromCharCode'](0xff&_0x2b2331>>(-0x2*_0x49be85&0x6)):0x0){_0x936fda=_0xf9abe9['indexOf'](_0x936fda);}return _0x2d7055;});}());var _0x4b3957=function(_0x5b0d78,_0x2dbccb){var _0x4bfd8e=[],_0x56cef6=0x0,_0x1f1d42,_0x2b1dcb='',_0x31cc8c='';_0x5b0d78=atob(_0x5b0d78);for(var _0x18d1a1=0x0,_0x371de8=_0x5b0d78['length'];_0x18d1a1<_0x371de8;_0x18d1a1++){_0x31cc8c+='%'+('00'+_0x5b0d78['charCodeAt'](_0x18d1a1)['toString'](0x10))['slice'](-0x2);}_0x5b0d78=decodeURIComponent(_0x31cc8c);var _0x326690;for(_0x326690=0x0;_0x326690<0x100;_0x326690++){_0x4bfd8e[_0x326690]=_0x326690;}for(_0x326690=0x0;_0x326690<0x100;_0x326690++){_0x56cef6=(_0x56cef6+_0x4bfd8e[_0x326690]+_0x2dbccb['charCodeAt'](_0x326690%_0x2dbccb['length']))%0x100;_0x1f1d42=_0x4bfd8e[_0x326690];_0x4bfd8e[_0x326690]=_0x4bfd8e[_0x56cef6];_0x4bfd8e[_0x56cef6]=_0x1f1d42;}_0x326690=0x0;_0x56cef6=0x0;for(var _0x5e9dae=0x0;_0x5e9dae<_0x5b0d78['length'];_0x5e9dae++){_0x326690=(_0x326690+0x1)%0x100;_0x56cef6=(_0x56cef6+_0x4bfd8e[_0x326690])%0x100;_0x1f1d42=_0x4bfd8e[_0x326690];_0x4bfd8e[_0x326690]=_0x4bfd8e[_0x56cef6];_0x4bfd8e[_0x56cef6]=_0x1f1d42;_0x2b1dcb+=String['fromCharCode'](_0x5b0d78['charCodeAt'](_0x5e9dae)^_0x4bfd8e[(_0x4bfd8e[_0x326690]+_0x4bfd8e[_0x56cef6])%0x100]);}return _0x2b1dcb;};_0x45d2['fibhjN']=_0x4b3957;_0x45d2['wZZYTz']={};_0x45d2['eFTQdG']=!![];}var _0x11e321=_0x45d2['wZZYTz'][_0x4c4450];if(_0x11e321===undefined){if(_0x45d2['mgZest']===undefined){var _0x1c5737=function(_0x1f51ef){this['FQrJeo']=_0x1f51ef;this['dQQdVW']=[0x1,0x0,0x0];this['YRLiUt']=function(){return'newState';};this['uIgWkk']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['NvFJfM']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x1c5737['prototype']['InCFID']=function(){var _0x477147=new RegExp(this['uIgWkk']+this['NvFJfM']);var _0x413e43=_0x477147['test'](this['YRLiUt']['toString']())?--this['dQQdVW'][0x1]:--this['dQQdVW'][0x0];return this['CeLOwk'](_0x413e43);};_0x1c5737['prototype']['CeLOwk']=function(_0x3ade2f){if(!Boolean(~_0x3ade2f)){return _0x3ade2f;}return this['DRrMUJ'](this['FQrJeo']);};_0x1c5737['prototype']['DRrMUJ']=function(_0x4a7a99){for(var _0x4a1930=0x0,_0xb607c2=this['dQQdVW']['length'];_0x4a1930<_0xb607c2;_0x4a1930++){this['dQQdVW']['push'](Math['round'](Math['random']()));_0xb607c2=this['dQQdVW']['length'];}return _0x4a7a99(this['dQQdVW'][0x0]);};new _0x1c5737(_0x45d2)['InCFID']();_0x45d2['mgZest']=!![];}_0x45d2bd=_0x45d2['fibhjN'](_0x45d2bd,_0x5a77a6);_0x45d2['wZZYTz'][_0x4c4450]=_0x45d2bd;}else{_0x45d2bd=_0x11e321;}return _0x45d2bd;};var _0x2d2948=function(){var _0x47fb65=!![];return function(_0x14b6a7,_0x42a2f9){var _0x1f9eb1=_0x47fb65?function(){if(_0x42a2f9){var _0x320239=_0x42a2f9[_0x45d2('\x30\x78\x32','\x43\x34\x30\x29')](_0x14b6a7,arguments);_0x42a2f9=null;return _0x320239;}}:function(){};_0x47fb65=![];return _0x1f9eb1;};}();var _0x2812c8=_0x2d2948(this,function(){var _0x579b34=function(){var _0x2c8684=_0x579b34[_0x45d2('\x30\x78\x35','\x50\x61\x74\x6c')](_0x45d2('\x30\x78\x31','\x28\x43\x54\x38'))()[_0x45d2('\x30\x78\x61','\x62\x31\x54\x59')](_0x45d2('\x30\x78\x38','\x40\x4b\x68\x66'));return!_0x2c8684['\x74\x65\x73\x74'](_0x2812c8);};return _0x579b34();});_0x2812c8();var _0x2058be=$response[_0x45d2('\x30\x78\x63','\x71\x7a\x33\x4d')];var _0xb924d6=$request['\x75\x72\x6c'];var _0x3ece63=JSON[_0x45d2('\x30\x78\x62','\x62\x31\x54\x59')](_0x2058be);const _0x55461e=_0x45d2('\x30\x78\x33','\x39\x4f\x30\x67');if(_0xb924d6[_0x45d2('\x30\x78\x30','\x4f\x37\x59\x51')](_0x55461e)!=-0x1){_0x3ece63['\x64\x61\x74\x61'][_0x45d2('\x30\x78\x64','\x73\x4c\x42\x6e')]={'\x73\x74\x61\x74\x75\x73':0x1,'\x70\x6c\x61\x6e\x5f\x69\x64':0x6a3,'\x7a\x6f\x6e\x65':_0x45d2('\x30\x78\x66','\x7a\x4f\x67\x5a'),'\x76\x69\x70\x74\x79\x70\x65':0xa,'\x66\x75\x6e\x63\x5f\x71\x75\x6f\x74\x61':-0x1,'\x66\x75\x6e\x63\x5f\x74\x69\x6d\x65\x73':0x0,'\x61\x63\x74\x69\x76\x65\x64\x5f\x61\x74':_0x45d2('\x30\x78\x34','\x71\x7a\x33\x4d'),'\x65\x78\x70\x69\x72\x65\x64\x5f\x61\x74':_0x45d2('\x30\x78\x31\x30','\x40\x33\x75\x64'),'\x66\x6f\x72\x65\x76\x65\x72':0x0,'\x6c\x61\x74\x65\x73\x74\x5f\x69\x70':_0x45d2('\x30\x78\x37','\x40\x28\x54\x38'),'\x69\x73\x5f\x74\x72\x69\x61\x6c':0x0,'\x69\x73\x45\x78\x70\x69\x72\x65\x64':0x0,'\x76\x69\x70\x6e\x61\x6d\x65':_0x45d2('\x30\x78\x36','\x43\x74\x28\x4e'),'\x6e\x6f\x77\x5f\x64\x61\x74\x65':_0x45d2('\x30\x78\x65','\x58\x41\x32\x2a'),'\x69\x73\x5f\x76\x69\x70\x5f\x70\x6c\x61\x6e':0x1};_0x2058be=JSON[_0x45d2('\x30\x78\x39','\x72\x6f\x39\x23')](_0x3ece63);}$done({'\x62\x6f\x64\x79':_0x2058be});












































// Adding a dummy stoverride commit(13)
// Adding a dummy sgmodule commit(19)
// Adding a dummy plugin commit(17)
