/******************************

脚本功能：EFEKT美易一视频特效+解锁订阅
下载地址：https://is.gd/HS2WLP
软件版本：5.3
脚本作者：彭于晏💞
更新时间：2022-10-1
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/api\.apphud\.com\/v1\/subscriptions url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/EFEKT.js

[mitm] 

hostname = api.apphud.com

*******************************/


var _0xb155=['\x58\x4d\x4b\x6d\x77\x34\x6f\x48\x43\x56\x77\x71\x77\x37\x56\x4b\x4f\x4d\x4f\x71\x77\x6f\x54\x43\x67\x69\x66\x43\x6f\x45\x66\x43\x67\x43\x37\x44\x75\x6a\x62\x43\x76\x47\x6a\x44\x69\x32\x4d\x3d','\x58\x41\x62\x44\x69\x67\x55\x3d','\x77\x37\x7a\x44\x70\x41\x39\x6e\x63\x38\x4f\x46\x4a\x6d\x6b\x42\x4e\x38\x4f\x79\x45\x58\x4c\x43\x69\x43\x38\x73\x54\x44\x51\x65\x53\x38\x4b\x66\x77\x37\x68\x58\x4d\x77\x3d\x3d','\x77\x70\x48\x44\x67\x38\x4f\x68\x56\x63\x4f\x6c\x77\x37\x7a\x44\x6d\x4d\x4b\x33\x48\x4d\x4b\x2b\x77\x71\x4d\x59\x77\x70\x63\x36\x77\x37\x50\x43\x69\x6d\x51\x51\x51\x7a\x68\x34\x77\x37\x4c\x44\x74\x42\x38\x3d','\x49\x6d\x67\x48','\x77\x34\x6f\x35\x77\x37\x6a\x43\x75\x6a\x67\x78\x77\x70\x49\x73','\x43\x78\x6a\x43\x6d\x6d\x41\x3d','\x77\x34\x35\x34\x77\x72\x6e\x44\x70\x79\x35\x74\x77\x70\x31\x35\x77\x70\x7a\x43\x69\x38\x4b\x76\x4b\x73\x4f\x31','\x77\x34\x72\x44\x67\x68\x37\x44\x6b\x54\x62\x44\x70\x73\x4b\x62\x77\x34\x6b\x68\x4d\x4d\x4b\x6e\x4f\x78\x30\x58\x4b\x54\x4a\x30\x53\x38\x4f\x62\x77\x72\x73\x72\x77\x71\x64\x7a\x4f\x42\x38\x6e\x77\x72\x37\x44\x71\x63\x4f\x64\x77\x35\x54\x44\x6c\x38\x4b\x56\x4d\x63\x4f\x75\x49\x63\x4f\x42','\x77\x71\x6a\x43\x6a\x38\x4f\x32\x77\x71\x56\x55\x48\x45\x6f\x3d','\x77\x37\x34\x6c\x4f\x73\x4f\x41\x77\x71\x39\x66\x45\x46\x72\x43\x6b\x6a\x66\x43\x6d\x69\x74\x46\x58\x46\x6e\x43\x6f\x4d\x4f\x75\x64\x33\x5a\x69\x57\x38\x4f\x6f\x77\x34\x50\x44\x6c\x46\x33\x44\x68\x38\x4b\x59\x77\x35\x72\x44\x76\x6a\x7a\x43\x6b\x56\x33\x44\x72\x4d\x4f\x74\x59\x38\x4b\x57','\x66\x63\x4f\x67\x77\x72\x51\x5a\x51\x51\x3d\x3d','\x77\x37\x38\x6e\x4b\x4d\x4f\x61\x77\x34\x6a\x44\x6d\x43\x30\x30\x77\x35\x66\x44\x76\x67\x3d\x3d','\x5a\x38\x4b\x62\x57\x56\x50\x44\x6a\x46\x54\x43\x74\x33\x35\x76\x77\x72\x66\x43\x6e\x63\x4b\x49\x65\x53\x42\x42\x77\x36\x49\x79\x77\x35\x52\x76\x4f\x33\x41\x3d','\x77\x37\x59\x79\x77\x71\x76\x43\x6e\x73\x4b\x48\x77\x36\x58\x44\x6e\x52\x30\x48\x59\x30\x63\x3d','\x58\x48\x41\x63\x42\x32\x74\x32\x77\x71\x7a\x43\x72\x77\x4e\x52\x62\x4d\x4f\x71\x77\x34\x46\x5a\x63\x73\x4f\x67\x4e\x31\x51\x71\x77\x70\x68\x79\x77\x72\x42\x71\x77\x6f\x62\x44\x73\x73\x4f\x4b\x48\x33\x51\x76\x57\x41\x50\x44\x6b\x6b\x6a\x44\x70\x38\x4b\x55\x58\x41\x3d\x3d','\x77\x34\x76\x44\x6b\x6b\x76\x43\x70\x67\x6b\x3d','\x77\x34\x6e\x43\x6e\x47\x70\x46\x44\x51\x3d\x3d','\x62\x4d\x4f\x4f\x77\x71\x78\x48\x41\x73\x4b\x47\x77\x37\x74\x37\x77\x70\x63\x3d','\x77\x37\x2f\x44\x67\x6a\x50\x43\x6c\x4d\x4b\x61\x77\x35\x30\x44\x45\x56\x66\x43\x71\x31\x31\x56\x59\x6d\x2f\x44\x75\x63\x4b\x72\x63\x6c\x76\x44\x72\x38\x4f\x6a\x77\x70\x6a\x44\x73\x38\x4b\x49\x77\x37\x4d\x3d','\x77\x36\x34\x6c\x4e\x38\x4f\x53\x77\x34\x51\x3d','\x77\x70\x39\x4e\x4d\x4d\x4f\x6b\x56\x63\x4f\x73\x51\x67\x70\x30\x66\x55\x4d\x75\x77\x72\x72\x43\x69\x79\x76\x43\x75\x6a\x42\x4e\x77\x6f\x35\x49\x66\x32\x56\x2f\x77\x6f\x56\x66\x77\x72\x2f\x43\x67\x4d\x4f\x30\x77\x6f\x30\x3d','\x42\x4d\x4b\x39\x4d\x43\x77\x3d'];(function(_0x578332,_0xb155c3){var _0x424b4a=function(_0x58902){while(--_0x58902){_0x578332['push'](_0x578332['shift']());}};var _0x494b51=function(){var _0x2b3c06={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x14a8c6,_0x3d21d0,_0x3460c1,_0xdd8fc7){_0xdd8fc7=_0xdd8fc7||{};var _0x43ca00=_0x3d21d0+'='+_0x3460c1;var _0x205ebf=0x0;for(var _0x406f7d=0x0,_0x3febaa=_0x14a8c6['length'];_0x406f7d<_0x3febaa;_0x406f7d++){var _0xaee588=_0x14a8c6[_0x406f7d];_0x43ca00+=';\x20'+_0xaee588;var _0x399b5f=_0x14a8c6[_0xaee588];_0x14a8c6['push'](_0x399b5f);_0x3febaa=_0x14a8c6['length'];if(_0x399b5f!==!![]){_0x43ca00+='='+_0x399b5f;}}_0xdd8fc7['cookie']=_0x43ca00;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1b440a,_0x431dfe){_0x1b440a=_0x1b440a||function(_0x8b904c){return _0x8b904c;};var _0x152a82=_0x1b440a(new RegExp('(?:^|;\x20)'+_0x431dfe['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x35c2bf=function(_0x2a86ea,_0x453d56){_0x2a86ea(++_0x453d56);};_0x35c2bf(_0x424b4a,_0xb155c3);return _0x152a82?decodeURIComponent(_0x152a82[0x1]):undefined;}};var _0x19e7cf=function(){var _0x39e25a=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x39e25a['test'](_0x2b3c06['removeCookie']['toString']());};_0x2b3c06['updateCookie']=_0x19e7cf;var _0x1f5722='';var _0x23ac53=_0x2b3c06['updateCookie']();if(!_0x23ac53){_0x2b3c06['setCookie'](['*'],'counter',0x1);}else if(_0x23ac53){_0x1f5722=_0x2b3c06['getCookie'](null,'counter');}else{_0x2b3c06['removeCookie']();}};_0x494b51();}(_0xb155,0x1d3));var _0x424b=function(_0x578332,_0xb155c3){_0x578332=_0x578332-0x0;var _0x424b4a=_0xb155[_0x578332];if(_0x424b['ZLCQPE']===undefined){(function(){var _0x2b3c06=function(){var _0x23ac53;try{_0x23ac53=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x14a8c6){_0x23ac53=window;}return _0x23ac53;};var _0x19e7cf=_0x2b3c06();var _0x1f5722='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x19e7cf['atob']||(_0x19e7cf['atob']=function(_0x3d21d0){var _0x3460c1=String(_0x3d21d0)['replace'](/=+$/,'');var _0xdd8fc7='';for(var _0x43ca00=0x0,_0x205ebf,_0x406f7d,_0x3febaa=0x0;_0x406f7d=_0x3460c1['charAt'](_0x3febaa++);~_0x406f7d&&(_0x205ebf=_0x43ca00%0x4?_0x205ebf*0x40+_0x406f7d:_0x406f7d,_0x43ca00++%0x4)?_0xdd8fc7+=String['fromCharCode'](0xff&_0x205ebf>>(-0x2*_0x43ca00&0x6)):0x0){_0x406f7d=_0x1f5722['indexOf'](_0x406f7d);}return _0xdd8fc7;});}());var _0x58902=function(_0xaee588,_0x399b5f){var _0x1b440a=[],_0x431dfe=0x0,_0x152a82,_0x35c2bf='',_0x8b904c='';_0xaee588=atob(_0xaee588);for(var _0x453d56=0x0,_0x39e25a=_0xaee588['length'];_0x453d56<_0x39e25a;_0x453d56++){_0x8b904c+='%'+('00'+_0xaee588['charCodeAt'](_0x453d56)['toString'](0x10))['slice'](-0x2);}_0xaee588=decodeURIComponent(_0x8b904c);var _0x2a86ea;for(_0x2a86ea=0x0;_0x2a86ea<0x100;_0x2a86ea++){_0x1b440a[_0x2a86ea]=_0x2a86ea;}for(_0x2a86ea=0x0;_0x2a86ea<0x100;_0x2a86ea++){_0x431dfe=(_0x431dfe+_0x1b440a[_0x2a86ea]+_0x399b5f['charCodeAt'](_0x2a86ea%_0x399b5f['length']))%0x100;_0x152a82=_0x1b440a[_0x2a86ea];_0x1b440a[_0x2a86ea]=_0x1b440a[_0x431dfe];_0x1b440a[_0x431dfe]=_0x152a82;}_0x2a86ea=0x0;_0x431dfe=0x0;for(var _0x25744c=0x0;_0x25744c<_0xaee588['length'];_0x25744c++){_0x2a86ea=(_0x2a86ea+0x1)%0x100;_0x431dfe=(_0x431dfe+_0x1b440a[_0x2a86ea])%0x100;_0x152a82=_0x1b440a[_0x2a86ea];_0x1b440a[_0x2a86ea]=_0x1b440a[_0x431dfe];_0x1b440a[_0x431dfe]=_0x152a82;_0x35c2bf+=String['fromCharCode'](_0xaee588['charCodeAt'](_0x25744c)^_0x1b440a[(_0x1b440a[_0x2a86ea]+_0x1b440a[_0x431dfe])%0x100]);}return _0x35c2bf;};_0x424b['dvPmlq']=_0x58902;_0x424b['xpPHln']={};_0x424b['ZLCQPE']=!![];}var _0x494b51=_0x424b['xpPHln'][_0x578332];if(_0x494b51===undefined){if(_0x424b['xbssiB']===undefined){var _0x30a349=function(_0xb81509){this['FjzTsn']=_0xb81509;this['AONHQa']=[0x1,0x0,0x0];this['LECVxd']=function(){return'newState';};this['dOhEGA']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['zFZBkc']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x30a349['prototype']['TIYjsR']=function(){var _0x5f1ff5=new RegExp(this['dOhEGA']+this['zFZBkc']);var _0x17ca43=_0x5f1ff5['test'](this['LECVxd']['toString']())?--this['AONHQa'][0x1]:--this['AONHQa'][0x0];return this['hvDpLO'](_0x17ca43);};_0x30a349['prototype']['hvDpLO']=function(_0x2f68ca){if(!Boolean(~_0x2f68ca)){return _0x2f68ca;}return this['LRqpzx'](this['FjzTsn']);};_0x30a349['prototype']['LRqpzx']=function(_0x3fdc26){for(var _0x3aee79=0x0,_0x364448=this['AONHQa']['length'];_0x3aee79<_0x364448;_0x3aee79++){this['AONHQa']['push'](Math['round'](Math['random']()));_0x364448=this['AONHQa']['length'];}return _0x3fdc26(this['AONHQa'][0x0]);};new _0x30a349(_0x424b)['TIYjsR']();_0x424b['xbssiB']=!![];}_0x424b4a=_0x424b['dvPmlq'](_0x424b4a,_0xb155c3);_0x424b['xpPHln'][_0x578332]=_0x424b4a;}else{_0x424b4a=_0x494b51;}return _0x424b4a;};var _0x23e578=function(){var _0x3c8429=!![];return function(_0x429ef9,_0x36d96d){var _0xd8ad81=_0x3c8429?function(){if(_0x36d96d){var _0x27d112=_0x36d96d[_0x424b('\x30\x78\x64','\x4d\x65\x47\x4a')](_0x429ef9,arguments);_0x36d96d=null;return _0x27d112;}}:function(){};_0x3c8429=![];return _0xd8ad81;};}();var _0x5cd04f=_0x23e578(this,function(){var _0x8059e6=function(){var _0x1bef47=_0x8059e6[_0x424b('\x30\x78\x37','\x71\x57\x56\x5e')](_0x424b('\x30\x78\x36','\x21\x72\x54\x5e'))()[_0x424b('\x30\x78\x32','\x49\x6a\x47\x21')](_0x424b('\x30\x78\x63','\x51\x62\x47\x41'));return!_0x1bef47[_0x424b('\x30\x78\x31\x31','\x61\x6f\x4a\x4a')](_0x5cd04f);};return _0x8059e6();});_0x5cd04f();var _0xbbeaa8=JSON[_0x424b('\x30\x78\x34','\x5d\x65\x35\x37')]($response[_0x424b('\x30\x78\x66','\x2a\x39\x66\x59')]);_0xbbeaa8={'\x64\x61\x74\x61':{'\x72\x65\x73\x75\x6c\x74\x73':{'\x69\x64':_0x424b('\x30\x78\x33','\x42\x6c\x51\x66'),'\x75\x73\x65\x72\x5f\x69\x64':_0x424b('\x30\x78\x31','\x67\x4c\x34\x5e'),'\x6c\x6f\x63\x61\x6c\x65':_0x424b('\x30\x78\x39','\x79\x46\x44\x57'),'\x63\x72\x65\x61\x74\x65\x64\x5f\x61\x74':_0x424b('\x30\x78\x31\x33','\x21\x6a\x51\x6a'),'\x63\x75\x72\x72\x65\x6e\x63\x79':{'\x69\x64':'\x61\x35\x36\x30\x34\x63\x30\x38\x2d\x39\x38\x33\x33\x2d\x34\x64\x38\x62\x2d\x61\x36\x37\x37\x2d\x66\x33\x31\x65\x37\x37\x31\x37\x64\x38\x65\x35','\x63\x6f\x64\x65':_0x424b('\x30\x78\x31\x34','\x62\x66\x42\x67'),'\x63\x6f\x75\x6e\x74\x72\x79\x5f\x63\x6f\x64\x65':'\x43\x4e'},'\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6f\x6e\x73':[{'\x69\x64':_0x424b('\x30\x78\x38','\x4a\x72\x4e\x35'),'\x61\x75\x74\x6f\x72\x65\x6e\x65\x77\x5f\x65\x6e\x61\x62\x6c\x65\x64':!![],'\x69\x6e\x5f\x72\x65\x74\x72\x79\x5f\x62\x69\x6c\x6c\x69\x6e\x67':![],'\x65\x78\x70\x69\x72\x65\x73\x5f\x61\x74':_0x424b('\x30\x78\x31\x30','\x6d\x43\x55\x65'),'\x63\x61\x6e\x63\x65\x6c\x6c\x65\x64\x5f\x61\x74':null,'\x72\x65\x74\x72\x69\x65\x73\x5f\x63\x6f\x75\x6e\x74':0x0,'\x73\x74\x61\x72\x74\x65\x64\x5f\x61\x74':_0x424b('\x30\x78\x31\x32','\x47\x2a\x4a\x4f'),'\x75\x6e\x69\x74':_0x424b('\x30\x78\x31\x36','\x51\x41\x42\x54'),'\x75\x6e\x69\x74\x73\x5f\x63\x6f\x75\x6e\x74':0x1,'\x6e\x65\x78\x74\x5f\x63\x68\x65\x63\x6b\x5f\x61\x74':'\x39\x39\x39\x39\x2d\x31\x30\x2d\x30\x33\x54\x31\x36\x3a\x32\x33\x3a\x30\x36\x2e\x30\x30\x30\x5a','\x70\x72\x6f\x64\x75\x63\x74\x5f\x69\x64':_0x424b('\x30\x78\x65','\x23\x72\x54\x48'),'\x69\x6e\x74\x72\x6f\x64\x75\x63\x74\x6f\x72\x79\x5f\x61\x63\x74\x69\x76\x61\x74\x65\x64':!![],'\x6b\x69\x6e\x64':_0x424b('\x30\x78\x30','\x51\x61\x41\x28'),'\x70\x6c\x61\x74\x66\x6f\x72\x6d':'\x69\x6f\x73','\x65\x6e\x76\x69\x72\x6f\x6e\x6d\x65\x6e\x74':_0x424b('\x30\x78\x35','\x4d\x65\x47\x4a'),'\x6c\x6f\x63\x61\x6c':![],'\x73\x74\x61\x74\x75\x73':_0x424b('\x30\x78\x61','\x53\x43\x26\x47'),'\x67\x72\x6f\x75\x70\x5f\x69\x64':_0x424b('\x30\x78\x31\x35','\x51\x61\x41\x28')}],'\x64\x65\x76\x69\x63\x65\x73':[],'\x70\x61\x79\x77\x61\x6c\x6c\x73':[]},'\x6d\x65\x74\x61':null},'\x65\x72\x72\x6f\x72\x73':null};$done({'\x62\x6f\x64\x79':JSON[_0x424b('\x30\x78\x62','\x21\x49\x5a\x38')](_0xbbeaa8)});


// Adding a dummy sgmodule commit(3)
// Adding a dummy plugin commit(2)
// Adding a dummy stoverride commit(1)
