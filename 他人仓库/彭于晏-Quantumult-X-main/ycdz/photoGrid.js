/******************************

脚本功能：photoGrid-照片拼图+解锁订阅
下载地址：https://is.gd/BuImL6
特别通知：需要试用一次才可以解锁！
软件版本：8.4.02
脚本作者：彭于晏💞
更新时间：2022-10-1
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/pgapi\.ksmobile\.com\/v1\/ios\/auth url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/photoGrid.js

[mitm] 

hostname = pgapi.ksmobile.com


*******************************/


var _0x1954=['\x77\x37\x70\x4e\x58\x77\x72\x44\x72\x31\x45\x2f\x77\x35\x6a\x44\x75\x30\x41\x4d\x45\x63\x4b\x32\x50\x38\x4f\x72\x77\x72\x4e\x73\x4e\x45\x6a\x43\x68\x52\x72\x43\x69\x63\x4b\x67\x77\x6f\x63\x3d','\x77\x72\x51\x37\x77\x72\x2f\x44\x72\x38\x4f\x32\x77\x36\x33\x44\x72\x45\x2f\x43\x6d\x57\x62\x44\x69\x4d\x4b\x56\x77\x34\x62\x44\x70\x63\x4f\x61\x77\x70\x37\x43\x6b\x56\x4c\x43\x6c\x38\x4b\x74\x57\x4d\x4b\x6b\x77\x72\x33\x43\x72\x73\x4f\x66\x4b\x77\x6e\x44\x6e\x4d\x4b\x6c\x77\x71\x46\x5a\x44\x77\x3d\x3d','\x77\x71\x51\x47\x57\x73\x4b\x65\x46\x6a\x6a\x44\x69\x73\x4f\x49\x64\x6c\x48\x44\x6f\x63\x4b\x33\x47\x4d\x4f\x31\x77\x35\x4d\x6e\x50\x45\x62\x43\x69\x45\x6f\x41\x63\x42\x6b\x49\x77\x35\x64\x4e\x77\x36\x2f\x44\x6c\x63\x4f\x4a\x54\x52\x76\x43\x75\x77\x3d\x3d','\x77\x70\x49\x75\x45\x42\x4c\x44\x6d\x54\x4c\x43\x76\x33\x48\x43\x6f\x73\x4f\x76\x77\x71\x44\x43\x76\x73\x4b\x4d\x4c\x63\x4b\x73\x53\x63\x4b\x5a\x63\x57\x35\x51\x77\x34\x73\x3d','\x55\x73\x4b\x63\x53\x45\x46\x50\x63\x63\x4b\x50\x77\x36\x52\x76\x63\x51\x59\x3d','\x77\x72\x41\x6e\x77\x37\x33\x44\x6d\x77\x3d\x3d','\x43\x38\x4f\x4e\x77\x6f\x50\x44\x72\x77\x72\x44\x6e\x4d\x4f\x34\x41\x43\x68\x41\x4e\x69\x6e\x44\x70\x38\x4f\x79\x77\x36\x6c\x42\x58\x38\x4b\x75\x47\x6d\x50\x43\x76\x4d\x4b\x4f\x59\x41\x74\x6a\x77\x34\x45\x3d','\x66\x41\x4d\x6f\x47\x52\x50\x44\x73\x4d\x4f\x55\x63\x6e\x39\x65\x77\x34\x74\x44\x4d\x53\x7a\x43\x6e\x4d\x4b\x68\x77\x35\x74\x67\x54\x63\x4b\x36\x77\x71\x76\x44\x6e\x78\x64\x71\x77\x37\x34\x6c','\x77\x35\x35\x36\x45\x46\x4c\x43\x69\x51\x3d\x3d','\x77\x34\x52\x54\x77\x34\x58\x43\x68\x68\x63\x69\x77\x72\x73\x3d','\x65\x6a\x34\x77\x4f\x63\x4f\x6b\x51\x77\x58\x43\x68\x6e\x6b\x3d'];(function(_0x452190,_0x1954b6){var _0x36100a=function(_0x12336b){while(--_0x12336b){_0x452190['push'](_0x452190['shift']());}};var _0x3c43f3=function(){var _0x416c94={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xad6835,_0x5c077f,_0xbbdf13,_0x7e791d){_0x7e791d=_0x7e791d||{};var _0x3171ef=_0x5c077f+'='+_0xbbdf13;var _0x24c346=0x0;for(var _0x31b400=0x0,_0xa9c0d8=_0xad6835['length'];_0x31b400<_0xa9c0d8;_0x31b400++){var _0x289fda=_0xad6835[_0x31b400];_0x3171ef+=';\x20'+_0x289fda;var _0x58d503=_0xad6835[_0x289fda];_0xad6835['push'](_0x58d503);_0xa9c0d8=_0xad6835['length'];if(_0x58d503!==!![]){_0x3171ef+='='+_0x58d503;}}_0x7e791d['cookie']=_0x3171ef;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5cbfb4,_0x4f6dc0){_0x5cbfb4=_0x5cbfb4||function(_0x55fe53){return _0x55fe53;};var _0x3c227e=_0x5cbfb4(new RegExp('(?:^|;\x20)'+_0x4f6dc0['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x567aef=function(_0x47688f,_0x48a4d4){_0x47688f(++_0x48a4d4);};_0x567aef(_0x36100a,_0x1954b6);return _0x3c227e?decodeURIComponent(_0x3c227e[0x1]):undefined;}};var _0x2ce8ac=function(){var _0x5115e7=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5115e7['test'](_0x416c94['removeCookie']['toString']());};_0x416c94['updateCookie']=_0x2ce8ac;var _0x14107c='';var _0x3330b0=_0x416c94['updateCookie']();if(!_0x3330b0){_0x416c94['setCookie'](['*'],'counter',0x1);}else if(_0x3330b0){_0x14107c=_0x416c94['getCookie'](null,'counter');}else{_0x416c94['removeCookie']();}};_0x3c43f3();}(_0x1954,0x76));var _0x3610=function(_0x452190,_0x1954b6){_0x452190=_0x452190-0x0;var _0x36100a=_0x1954[_0x452190];if(_0x3610['cICeOr']===undefined){(function(){var _0x416c94;try{var _0x14107c=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x416c94=_0x14107c();}catch(_0x3330b0){_0x416c94=window;}var _0x2ce8ac='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x416c94['atob']||(_0x416c94['atob']=function(_0xad6835){var _0x5c077f=String(_0xad6835)['replace'](/=+$/,'');var _0xbbdf13='';for(var _0x7e791d=0x0,_0x3171ef,_0x24c346,_0x31b400=0x0;_0x24c346=_0x5c077f['charAt'](_0x31b400++);~_0x24c346&&(_0x3171ef=_0x7e791d%0x4?_0x3171ef*0x40+_0x24c346:_0x24c346,_0x7e791d++%0x4)?_0xbbdf13+=String['fromCharCode'](0xff&_0x3171ef>>(-0x2*_0x7e791d&0x6)):0x0){_0x24c346=_0x2ce8ac['indexOf'](_0x24c346);}return _0xbbdf13;});}());var _0x12336b=function(_0xa9c0d8,_0x289fda){var _0x58d503=[],_0x5cbfb4=0x0,_0x4f6dc0,_0x3c227e='',_0x567aef='';_0xa9c0d8=atob(_0xa9c0d8);for(var _0x47688f=0x0,_0x48a4d4=_0xa9c0d8['length'];_0x47688f<_0x48a4d4;_0x47688f++){_0x567aef+='%'+('00'+_0xa9c0d8['charCodeAt'](_0x47688f)['toString'](0x10))['slice'](-0x2);}_0xa9c0d8=decodeURIComponent(_0x567aef);var _0x55fe53;for(_0x55fe53=0x0;_0x55fe53<0x100;_0x55fe53++){_0x58d503[_0x55fe53]=_0x55fe53;}for(_0x55fe53=0x0;_0x55fe53<0x100;_0x55fe53++){_0x5cbfb4=(_0x5cbfb4+_0x58d503[_0x55fe53]+_0x289fda['charCodeAt'](_0x55fe53%_0x289fda['length']))%0x100;_0x4f6dc0=_0x58d503[_0x55fe53];_0x58d503[_0x55fe53]=_0x58d503[_0x5cbfb4];_0x58d503[_0x5cbfb4]=_0x4f6dc0;}_0x55fe53=0x0;_0x5cbfb4=0x0;for(var _0x5115e7=0x0;_0x5115e7<_0xa9c0d8['length'];_0x5115e7++){_0x55fe53=(_0x55fe53+0x1)%0x100;_0x5cbfb4=(_0x5cbfb4+_0x58d503[_0x55fe53])%0x100;_0x4f6dc0=_0x58d503[_0x55fe53];_0x58d503[_0x55fe53]=_0x58d503[_0x5cbfb4];_0x58d503[_0x5cbfb4]=_0x4f6dc0;_0x3c227e+=String['fromCharCode'](_0xa9c0d8['charCodeAt'](_0x5115e7)^_0x58d503[(_0x58d503[_0x55fe53]+_0x58d503[_0x5cbfb4])%0x100]);}return _0x3c227e;};_0x3610['mPmXGf']=_0x12336b;_0x3610['hegYzM']={};_0x3610['cICeOr']=!![];}var _0x3c43f3=_0x3610['hegYzM'][_0x452190];if(_0x3c43f3===undefined){if(_0x3610['rVzJJR']===undefined){var _0x1e1b8c=function(_0x500a85){this['BQiAoj']=_0x500a85;this['SzCbUc']=[0x1,0x0,0x0];this['ZHPcOR']=function(){return'newState';};this['ztYtBA']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['lnSQAF']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x1e1b8c['prototype']['GGpgbW']=function(){var _0x59074d=new RegExp(this['ztYtBA']+this['lnSQAF']);var _0x2a3c61=_0x59074d['test'](this['ZHPcOR']['toString']())?--this['SzCbUc'][0x1]:--this['SzCbUc'][0x0];return this['CqXKay'](_0x2a3c61);};_0x1e1b8c['prototype']['CqXKay']=function(_0x19d7da){if(!Boolean(~_0x19d7da)){return _0x19d7da;}return this['afzxXD'](this['BQiAoj']);};_0x1e1b8c['prototype']['afzxXD']=function(_0x13f15d){for(var _0x410411=0x0,_0xe570ba=this['SzCbUc']['length'];_0x410411<_0xe570ba;_0x410411++){this['SzCbUc']['push'](Math['round'](Math['random']()));_0xe570ba=this['SzCbUc']['length'];}return _0x13f15d(this['SzCbUc'][0x0]);};new _0x1e1b8c(_0x3610)['GGpgbW']();_0x3610['rVzJJR']=!![];}_0x36100a=_0x3610['mPmXGf'](_0x36100a,_0x1954b6);_0x3610['hegYzM'][_0x452190]=_0x36100a;}else{_0x36100a=_0x3c43f3;}return _0x36100a;};var _0xe570ba=function(){var _0x475523=!![];return function(_0x2322b2,_0x16b845){var _0x108543=_0x475523?function(){if(_0x16b845){var _0x2bf64c=_0x16b845[_0x3610('\x30\x78\x30','\x65\x38\x48\x48')](_0x2322b2,arguments);_0x16b845=null;return _0x2bf64c;}}:function(){};_0x475523=![];return _0x108543;};}();var _0x275045=_0xe570ba(this,function(){var _0x4c8213=function(){var _0x4d509c=_0x4c8213[_0x3610('\x30\x78\x37','\x6d\x37\x55\x4b')](_0x3610('\x30\x78\x36','\x36\x42\x56\x63'))()[_0x3610('\x30\x78\x31','\x59\x68\x75\x48')](_0x3610('\x30\x78\x33','\x4b\x57\x72\x51'));return!_0x4d509c[_0x3610('\x30\x78\x38','\x62\x59\x58\x7a')](_0x275045);};return _0x4c8213();});_0x275045();var _0x51552d=JSON['\x70\x61\x72\x73\x65']($response['\x62\x6f\x64\x79']);_0x51552d={'\x63\x6f\x64\x65':0x0,'\x64\x61\x74\x61':{'\x70\x72\x65\x6d\x69\x75\x6d':{'\x74\x79\x70\x65':0x2,'\x73\x6f\x75\x72\x63\x65':'\x69\x61\x70','\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65\x5f\x6d\x73':0x0},'\x69\x61\x70\x5f\x69\x6e\x66\x6f':{'\x75\x73\x65\x72\x5f\x69\x64':_0x3610('\x30\x78\x35','\x71\x76\x73\x5b'),'\x66\x72\x6f\x6d\x5f\x64\x62':!![],'\x73\x74\x61\x74\x75\x73':0x0,'\x65\x72\x72\x6f\x72\x5f\x63\x6f\x64\x65':0x0,'\x65\x72\x72\x6f\x72\x5f\x6d\x73\x67':'','\x70\x72\x6f\x64\x75\x63\x74\x5f\x69\x64':'\x70\x68\x6f\x74\x6f\x67\x72\x69\x64\x5f\x70\x6c\x75\x73\x5f\x61\x6e\x6e\x75\x61\x6c\x5f\x32\x39\x39\x39','\x67\x72\x61\x63\x65\x5f\x70\x65\x72\x69\x6f\x64\x5f\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65\x5f\x6d\x73':0x0,'\x69\x73\x5f\x74\x72\x69\x61\x6c\x5f\x70\x65\x72\x69\x6f\x64':!![],'\x70\x75\x72\x63\x68\x61\x73\x65\x64\x5f\x6c\x69\x73\x74':[],'\x65\x6e\x64\x5f\x6f\x66\x5f\x69\x6e\x74\x72\x6f\x5f\x6f\x66\x66\x65\x72':[{'\x70\x72\x6f\x64\x75\x63\x74\x5f\x69\x64':_0x3610('\x30\x78\x39','\x29\x6f\x79\x36')}],'\x69\x73\x50\x72\x65\x6d\x69\x75\x6d\x44\x69\x73\x63\x6f\x75\x6e\x74\x45\x6e\x61\x62\x6c\x65':![],'\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x74\x72\x61\x6e\x73\x61\x63\x74\x69\x6f\x6e\x5f\x69\x64':['\x34\x33\x30\x30\x30\x31\x32\x33\x35\x31\x30\x31\x30\x39\x30'],'\x72\x65\x63\x65\x69\x70\x74':'','\x69\x73\x5f\x69\x6e\x5f\x69\x6e\x74\x72\x6f\x5f\x6f\x66\x66\x65\x72\x5f\x70\x65\x72\x69\x6f\x64':![],'\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65\x5f\x6d\x73':0x183911288ac,'\x61\x75\x74\x6f\x5f\x72\x65\x6e\x65\x77\x5f\x73\x74\x61\x74\x75\x73':0x1,'\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65\x5f\x6d\x73':0x183911136c0},'\x6c\x6f\x67\x69\x6e\x5f\x69\x6e\x66\x6f':{'\x73\x74\x61\x74\x75\x73':0x0,'\x65\x72\x72\x6f\x72\x5f\x63\x6f\x64\x65':0x0,'\x65\x72\x72\x6f\x72\x5f\x6d\x73\x67':'','\x69\x73\x5f\x70\x72\x65\x6d\x69\x75\x6d':0x0,'\x70\x72\x65\x6d\x69\x75\x6d\x45\x78\x70\x69\x72\x65\x64\x41\x74':0x0},'\x65\x78\x74\x72\x61':{'\x75\x73\x65\x72\x5f\x73\x74\x61\x74\x75\x73':0x1,'\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65':0x633791b8,'\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65':0xf40d1c0e,'\x70\x6c\x61\x6e\x5f\x74\x79\x70\x65':0x2,'\x70\x6c\x61\x6e':_0x3610('\x30\x78\x61','\x71\x63\x24\x59'),'\x6c\x6f\x67\x69\x6e\x5f\x69\x64':'\x31\x35\x37\x36\x30\x31\x34\x33\x34\x39\x33\x33\x36\x39\x39\x33\x37\x39\x32','\x75\x69\x64':_0x3610('\x30\x78\x34','\x75\x23\x4a\x55'),'\x69\x73\x5f\x74\x72\x69\x61\x6c\x5f\x70\x65\x72\x69\x6f\x64':!![]}}};$done({'\x62\x6f\x64\x79':JSON[_0x3610('\x30\x78\x32','\x64\x4e\x44\x77')](_0x51552d)});























// Adding a dummy stoverride commit(6)
// Adding a dummy sgmodule commit(12)
// Adding a dummy plugin commit(10)
