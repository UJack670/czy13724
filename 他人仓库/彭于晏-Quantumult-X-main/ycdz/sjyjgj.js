/******************************

脚本功能：手机硬件管家+解锁订阅
下载地址：https://is.gd/EjvJR6
软件版本：5.1.4
脚本作者：彭于晏💞
更新时间：2022-10-13
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************
[rewrite_local]

^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(\$RCAnonymousID%)?(\w)*$) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/sjyjgj.js

[mitm]

hostname=api.revenuecat.com


*******************************/


var _0xd760=['\x62\x43\x58\x43\x6d\x4d\x4b\x79\x77\x36\x2f\x43\x74\x38\x4f\x64\x59\x63\x4b\x31\x46\x63\x4f\x52\x77\x71\x31\x41\x50\x73\x4b\x44\x4d\x46\x51\x4d\x51\x47\x76\x44\x67\x73\x4f\x4c\x77\x34\x58\x44\x6a\x63\x4b\x63\x77\x34\x64\x6e\x62\x78\x72\x43\x6a\x4d\x4f\x51\x4e\x4d\x4b\x56\x54\x43\x58\x43\x68\x73\x4b\x6b\x77\x36\x52\x69\x48\x4d\x4f\x77\x51\x73\x4b\x75\x4c\x45\x46\x70\x77\x71\x4d\x3d','\x77\x6f\x50\x44\x6a\x52\x58\x43\x70\x57\x4c\x43\x6f\x57\x6a\x44\x75\x45\x4c\x44\x70\x38\x4f\x44\x56\x38\x4f\x56\x4e\x44\x4c\x44\x75\x77\x66\x43\x6d\x6e\x4c\x43\x6c\x77\x3d\x3d','\x4c\x6c\x62\x43\x6e\x38\x4f\x6b\x77\x37\x4c\x43\x75\x4d\x4f\x6a\x5a\x63\x4f\x70\x62\x79\x33\x43\x75\x43\x6b\x35\x4e\x69\x46\x73\x77\x35\x6c\x61\x77\x37\x6b\x67\x51\x73\x4f\x74\x4e\x38\x4f\x67\x61\x6e\x64\x56\x48\x4d\x4f\x45\x55\x63\x4b\x49\x77\x72\x7a\x44\x6b\x6a\x68\x50\x77\x37\x48\x43\x73\x4d\x4b\x7a\x55\x73\x4b\x36\x48\x4d\x4b\x41\x41\x51\x3d\x3d','\x45\x73\x4f\x65\x77\x70\x39\x71\x77\x72\x48\x43\x72\x38\x4b\x66\x41\x63\x4f\x6d\x44\x73\x4b\x34\x4a\x38\x4b\x6e\x41\x48\x33\x44\x76\x38\x4f\x65\x77\x35\x74\x43\x4e\x77\x3d\x3d','\x77\x37\x7a\x44\x69\x55\x59\x5a\x77\x34\x63\x3d','\x77\x36\x38\x67\x45\x41\x3d\x3d','\x55\x63\x4f\x32\x54\x73\x4b\x35\x77\x37\x38\x3d','\x77\x36\x73\x2b\x77\x34\x63\x4f','\x77\x35\x64\x35\x77\x37\x67\x70\x4d\x52\x2f\x44\x68\x73\x4f\x6a\x77\x34\x34\x65\x44\x38\x4b\x6c\x4e\x58\x41\x71\x44\x4d\x4b\x47\x5a\x38\x4f\x58\x77\x70\x44\x43\x73\x38\x4f\x42\x52\x54\x4d\x3d','\x77\x35\x44\x43\x6c\x77\x30\x7a\x65\x77\x3d\x3d','\x77\x37\x63\x54\x42\x73\x4f\x4a\x77\x36\x34\x4b\x77\x34\x37\x44\x71\x69\x67\x3d','\x77\x6f\x4e\x64\x4c\x48\x7a\x44\x73\x73\x4f\x30\x77\x34\x48\x44\x6e\x63\x4f\x34','\x4d\x73\x4b\x73\x77\x37\x55\x5a\x4c\x63\x4b\x45\x77\x6f\x6a\x44\x76\x73\x4f\x52\x77\x6f\x31\x57\x45\x4d\x4b\x4c\x50\x6a\x6a\x43\x76\x68\x48\x44\x6b\x4d\x4b\x63\x77\x71\x63\x3d','\x4d\x6e\x45\x4a\x4b\x77\x3d\x3d','\x66\x45\x5a\x47\x44\x56\x33\x44\x71\x55\x73\x49\x77\x34\x39\x6d\x77\x37\x67\x31\x51\x38\x4f\x73\x4f\x77\x72\x44\x76\x73\x4b\x2f\x77\x70\x4d\x31','\x77\x37\x55\x49\x5a\x56\x33\x43\x6d\x63\x4b\x58\x51\x41\x3d\x3d','\x77\x72\x6f\x30\x77\x35\x77\x32\x77\x72\x62\x44\x6f\x45\x4e\x41\x77\x6f\x56\x6a','\x77\x70\x49\x45\x77\x36\x48\x43\x72\x63\x4f\x41\x77\x72\x4d\x6d\x77\x34\x5a\x77\x77\x71\x4d\x59\x49\x58\x33\x43\x73\x69\x50\x43\x6e\x63\x4b\x4e\x63\x4d\x4f\x49\x77\x37\x49\x3d','\x62\x47\x50\x44\x6b\x6a\x62\x44\x68\x38\x4f\x7a\x77\x34\x6c\x31\x77\x34\x49\x3d','\x77\x36\x35\x62\x77\x35\x58\x43\x71\x45\x52\x66\x77\x70\x2f\x43\x6d\x73\x4f\x34\x61\x63\x4f\x6e\x77\x70\x5a\x4b\x4d\x30\x51\x4f\x77\x6f\x76\x44\x6d\x52\x44\x43\x6f\x41\x3d\x3d','\x77\x35\x39\x4a\x77\x36\x35\x41\x51\x6e\x33\x43\x69\x38\x4f\x6f\x44\x79\x49\x2f\x56\x42\x74\x54\x63\x38\x4f\x6b\x62\x41\x66\x44\x70\x58\x54\x43\x6d\x67\x3d\x3d','\x77\x6f\x48\x43\x72\x63\x4b\x69\x41\x38\x4b\x6b\x77\x34\x6a\x44\x6e\x4d\x4f\x50\x62\x73\x4f\x30\x77\x71\x45\x73\x51\x56\x68\x32\x61\x73\x4b\x32\x77\x36\x76\x44\x71\x63\x4f\x47'];(function(_0x2b3967,_0xd760fc){var _0xa1f167=function(_0x2178c5){while(--_0x2178c5){_0x2b3967['push'](_0x2b3967['shift']());}};var _0x1dc45c=function(){var _0x18301c={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x228c5c,_0x53be23,_0x1fc3c6,_0x4c986c){_0x4c986c=_0x4c986c||{};var _0x3b1d88=_0x53be23+'='+_0x1fc3c6;var _0x34a96d=0x0;for(var _0x3492f7=0x0,_0x40cc29=_0x228c5c['length'];_0x3492f7<_0x40cc29;_0x3492f7++){var _0x3c7020=_0x228c5c[_0x3492f7];_0x3b1d88+=';\x20'+_0x3c7020;var _0x43836c=_0x228c5c[_0x3c7020];_0x228c5c['push'](_0x43836c);_0x40cc29=_0x228c5c['length'];if(_0x43836c!==!![]){_0x3b1d88+='='+_0x43836c;}}_0x4c986c['cookie']=_0x3b1d88;},'removeCookie':function(){return'dev';},'getCookie':function(_0x387137,_0x346c7c){_0x387137=_0x387137||function(_0x4a6338){return _0x4a6338;};var _0x442fd1=_0x387137(new RegExp('(?:^|;\x20)'+_0x346c7c['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x9004ef=function(_0x18d895,_0x364466){_0x18d895(++_0x364466);};_0x9004ef(_0xa1f167,_0xd760fc);return _0x442fd1?decodeURIComponent(_0x442fd1[0x1]):undefined;}};var _0x4ca33b=function(){var _0x37b0b6=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x37b0b6['test'](_0x18301c['removeCookie']['toString']());};_0x18301c['updateCookie']=_0x4ca33b;var _0x358e97='';var _0x5b12d7=_0x18301c['updateCookie']();if(!_0x5b12d7){_0x18301c['setCookie'](['*'],'counter',0x1);}else if(_0x5b12d7){_0x358e97=_0x18301c['getCookie'](null,'counter');}else{_0x18301c['removeCookie']();}};_0x1dc45c();}(_0xd760,0x119));var _0xa1f1=function(_0x2b3967,_0xd760fc){_0x2b3967=_0x2b3967-0x0;var _0xa1f167=_0xd760[_0x2b3967];if(_0xa1f1['muxsix']===undefined){(function(){var _0x18301c=function(){var _0x5b12d7;try{_0x5b12d7=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x228c5c){_0x5b12d7=window;}return _0x5b12d7;};var _0x4ca33b=_0x18301c();var _0x358e97='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4ca33b['atob']||(_0x4ca33b['atob']=function(_0x53be23){var _0x1fc3c6=String(_0x53be23)['replace'](/=+$/,'');var _0x4c986c='';for(var _0x3b1d88=0x0,_0x34a96d,_0x3492f7,_0x40cc29=0x0;_0x3492f7=_0x1fc3c6['charAt'](_0x40cc29++);~_0x3492f7&&(_0x34a96d=_0x3b1d88%0x4?_0x34a96d*0x40+_0x3492f7:_0x3492f7,_0x3b1d88++%0x4)?_0x4c986c+=String['fromCharCode'](0xff&_0x34a96d>>(-0x2*_0x3b1d88&0x6)):0x0){_0x3492f7=_0x358e97['indexOf'](_0x3492f7);}return _0x4c986c;});}());var _0x2178c5=function(_0x3c7020,_0x43836c){var _0x387137=[],_0x346c7c=0x0,_0x442fd1,_0x9004ef='',_0x4a6338='';_0x3c7020=atob(_0x3c7020);for(var _0x364466=0x0,_0x37b0b6=_0x3c7020['length'];_0x364466<_0x37b0b6;_0x364466++){_0x4a6338+='%'+('00'+_0x3c7020['charCodeAt'](_0x364466)['toString'](0x10))['slice'](-0x2);}_0x3c7020=decodeURIComponent(_0x4a6338);var _0x18d895;for(_0x18d895=0x0;_0x18d895<0x100;_0x18d895++){_0x387137[_0x18d895]=_0x18d895;}for(_0x18d895=0x0;_0x18d895<0x100;_0x18d895++){_0x346c7c=(_0x346c7c+_0x387137[_0x18d895]+_0x43836c['charCodeAt'](_0x18d895%_0x43836c['length']))%0x100;_0x442fd1=_0x387137[_0x18d895];_0x387137[_0x18d895]=_0x387137[_0x346c7c];_0x387137[_0x346c7c]=_0x442fd1;}_0x18d895=0x0;_0x346c7c=0x0;for(var _0x11f4d8=0x0;_0x11f4d8<_0x3c7020['length'];_0x11f4d8++){_0x18d895=(_0x18d895+0x1)%0x100;_0x346c7c=(_0x346c7c+_0x387137[_0x18d895])%0x100;_0x442fd1=_0x387137[_0x18d895];_0x387137[_0x18d895]=_0x387137[_0x346c7c];_0x387137[_0x346c7c]=_0x442fd1;_0x9004ef+=String['fromCharCode'](_0x3c7020['charCodeAt'](_0x11f4d8)^_0x387137[(_0x387137[_0x18d895]+_0x387137[_0x346c7c])%0x100]);}return _0x9004ef;};_0xa1f1['EoErgS']=_0x2178c5;_0xa1f1['YEazDT']={};_0xa1f1['muxsix']=!![];}var _0x1dc45c=_0xa1f1['YEazDT'][_0x2b3967];if(_0x1dc45c===undefined){if(_0xa1f1['axuptE']===undefined){var _0x1eb2f7=function(_0x1f904a){this['eaVBgR']=_0x1f904a;this['oRWbDP']=[0x1,0x0,0x0];this['hTpTnv']=function(){return'newState';};this['aYwFrH']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['ZOOsKM']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x1eb2f7['prototype']['bsIXSB']=function(){var _0x488449=new RegExp(this['aYwFrH']+this['ZOOsKM']);var _0xa7bc0a=_0x488449['test'](this['hTpTnv']['toString']())?--this['oRWbDP'][0x1]:--this['oRWbDP'][0x0];return this['dLtXJH'](_0xa7bc0a);};_0x1eb2f7['prototype']['dLtXJH']=function(_0x3c778e){if(!Boolean(~_0x3c778e)){return _0x3c778e;}return this['arrsHr'](this['eaVBgR']);};_0x1eb2f7['prototype']['arrsHr']=function(_0x54980c){for(var _0x1918b8=0x0,_0x475083=this['oRWbDP']['length'];_0x1918b8<_0x475083;_0x1918b8++){this['oRWbDP']['push'](Math['round'](Math['random']()));_0x475083=this['oRWbDP']['length'];}return _0x54980c(this['oRWbDP'][0x0]);};new _0x1eb2f7(_0xa1f1)['bsIXSB']();_0xa1f1['axuptE']=!![];}_0xa1f167=_0xa1f1['EoErgS'](_0xa1f167,_0xd760fc);_0xa1f1['YEazDT'][_0x2b3967]=_0xa1f167;}else{_0xa1f167=_0x1dc45c;}return _0xa1f167;};var _0x294f4c=function(){var _0x59ea2d=!![];return function(_0x5cf388,_0x414c68){var _0x366dfd=_0x59ea2d?function(){if(_0x414c68){var _0x17de23=_0x414c68[_0xa1f1('\x30\x78\x39','\x47\x2a\x59\x77')](_0x5cf388,arguments);_0x414c68=null;return _0x17de23;}}:function(){};_0x59ea2d=![];return _0x366dfd;};}();var _0x101a38=_0x294f4c(this,function(){var _0x2d857b=function(){var _0x52efc6=_0x2d857b['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72'](_0xa1f1('\x30\x78\x33','\x50\x6a\x32\x63'))()[_0xa1f1('\x30\x78\x31\x34','\x6f\x68\x49\x5e')](_0xa1f1('\x30\x78\x64','\x59\x57\x69\x5d'));return!_0x52efc6[_0xa1f1('\x30\x78\x31\x32','\x5d\x6e\x33\x2a')](_0x101a38);};return _0x2d857b();});_0x101a38();var _0x62b3c2=JSON[_0xa1f1('\x30\x78\x62','\x4f\x29\x7a\x55')]($response[_0xa1f1('\x30\x78\x63','\x59\x57\x69\x5d')]);_0x62b3c2={'\x72\x65\x71\x75\x65\x73\x74\x5f\x64\x61\x74\x65\x5f\x6d\x73':0x183d0dee514,'\x72\x65\x71\x75\x65\x73\x74\x5f\x64\x61\x74\x65':_0xa1f1('\x30\x78\x36','\x6b\x35\x68\x4a'),'\x73\x75\x62\x73\x63\x72\x69\x62\x65\x72':{'\x6e\x6f\x6e\x5f\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6f\x6e\x73':{},'\x66\x69\x72\x73\x74\x5f\x73\x65\x65\x6e':_0xa1f1('\x30\x78\x31\x33','\x51\x69\x37\x2a'),'\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x5f\x76\x65\x72\x73\x69\x6f\x6e':_0xa1f1('\x30\x78\x61','\x72\x49\x57\x31'),'\x6f\x74\x68\x65\x72\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x73':{},'\x6d\x61\x6e\x61\x67\x65\x6d\x65\x6e\x74\x5f\x75\x72\x6c':_0xa1f1('\x30\x78\x37','\x57\x59\x33\x4d'),'\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6f\x6e\x73':{'\x70\x72\x6f\x5f\x61\x6e\x6e\x75\x61\x6c':{'\x69\x73\x5f\x73\x61\x6e\x64\x62\x6f\x78':![],'\x6f\x77\x6e\x65\x72\x73\x68\x69\x70\x5f\x74\x79\x70\x65':_0xa1f1('\x30\x78\x31\x30','\x72\x44\x76\x31'),'\x62\x69\x6c\x6c\x69\x6e\x67\x5f\x69\x73\x73\x75\x65\x73\x5f\x64\x65\x74\x65\x63\x74\x65\x64\x5f\x61\x74':null,'\x70\x65\x72\x69\x6f\x64\x5f\x74\x79\x70\x65':_0xa1f1('\x30\x78\x65','\x5a\x35\x5e\x63'),'\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65':'\x39\x39\x39\x39\x2d\x31\x30\x2d\x32\x30\x54\x31\x30\x3a\x32\x33\x3a\x32\x36\x5a','\x67\x72\x61\x63\x65\x5f\x70\x65\x72\x69\x6f\x64\x5f\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65':null,'\x75\x6e\x73\x75\x62\x73\x63\x72\x69\x62\x65\x5f\x64\x65\x74\x65\x63\x74\x65\x64\x5f\x61\x74':null,'\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65':_0xa1f1('\x30\x78\x34','\x78\x63\x24\x69'),'\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65':'\x32\x30\x32\x32\x2d\x31\x30\x2d\x31\x33\x54\x31\x30\x3a\x32\x33\x3a\x32\x36\x5a','\x73\x74\x6f\x72\x65':_0xa1f1('\x30\x78\x66','\x4c\x6a\x73\x5d')}},'\x65\x6e\x74\x69\x74\x6c\x65\x6d\x65\x6e\x74\x73':{'\x50\x72\x6f':{'\x67\x72\x61\x63\x65\x5f\x70\x65\x72\x69\x6f\x64\x5f\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65':null,'\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65':_0xa1f1('\x30\x78\x30','\x62\x44\x29\x59'),'\x70\x72\x6f\x64\x75\x63\x74\x5f\x69\x64\x65\x6e\x74\x69\x66\x69\x65\x72':_0xa1f1('\x30\x78\x31\x35','\x6d\x48\x45\x78'),'\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65':_0xa1f1('\x30\x78\x31\x31','\x54\x6d\x77\x39')}},'\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65':_0xa1f1('\x30\x78\x32','\x56\x44\x44\x43'),'\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x61\x70\x70\x5f\x75\x73\x65\x72\x5f\x69\x64':_0xa1f1('\x30\x78\x35','\x63\x43\x7a\x75'),'\x6c\x61\x73\x74\x5f\x73\x65\x65\x6e':_0xa1f1('\x30\x78\x38','\x56\x36\x52\x78')}};$done({'\x62\x6f\x64\x79':JSON[_0xa1f1('\x30\x78\x31','\x36\x79\x37\x6c')](_0x62b3c2)});












// Adding a dummy sgmodule commit(8)
// Adding a dummy plugin commit(6)
// Adding a dummy stoverride commit(3)
