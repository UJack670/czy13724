/******************************

脚本功能：Lr Adobe Lightroom+解锁订阅
下载地址：https://is.gd/UEAk0n
软件版本：7.5.2
脚本作者：彭于晏💞
更新时间：2022-9-30
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/photos\.adobe\.io\/v2\/accounts* url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/lightroom.js

[mitm] 

hostname = photos.adobe.io

*******************************/

const _0xac26=['\x77\x6f\x30\x36\x77\x37\x49\x45\x77\x71\x6a\x44\x69\x73\x4f\x31\x77\x72\x58\x44\x6c\x51\x3d\x3d','\x77\x35\x37\x43\x6a\x69\x67\x61\x4a\x4d\x4f\x79','\x77\x70\x54\x43\x74\x63\x4f\x30\x5a\x6d\x59\x3d','\x4c\x63\x4f\x61\x77\x34\x41\x38','\x77\x37\x39\x50\x77\x6f\x4a\x56\x77\x71\x46\x2b\x4a\x77\x3d\x3d','\x52\x45\x67\x4e\x77\x34\x31\x2b\x63\x67\x6b\x53\x77\x36\x73\x3d','\x4b\x63\x4f\x78\x4e\x51\x34\x72\x50\x63\x4b\x49\x61\x6b\x4e\x53\x58\x41\x3d\x3d','\x77\x70\x39\x37\x77\x70\x2f\x44\x6a\x45\x48\x43\x6c\x6d\x67\x78\x77\x34\x2f\x43\x70\x38\x4b\x49','\x77\x35\x52\x6c\x77\x35\x78\x55\x57\x63\x4f\x30\x77\x34\x51\x3d','\x77\x37\x6a\x44\x71\x42\x59\x32\x77\x36\x6f\x4e\x63\x63\x4f\x50\x77\x72\x59\x34\x77\x37\x2f\x44\x6b\x51\x6c\x67\x47\x63\x4f\x55\x77\x6f\x52\x46\x77\x36\x35\x4a\x54\x73\x4b\x79\x77\x37\x74\x7a','\x50\x69\x49\x33\x77\x37\x38\x6a\x4b\x38\x4f\x50\x66\x47\x6f\x4b','\x45\x44\x56\x2f\x77\x35\x33\x43\x6f\x4d\x4f\x42\x45\x6a\x52\x6f\x77\x6f\x58\x44\x6c\x51\x3d\x3d','\x65\x4d\x4b\x51\x77\x6f\x77\x4d\x64\x51\x3d\x3d','\x77\x71\x42\x69\x61\x73\x4f\x2f\x4d\x6a\x67\x3d','\x57\x38\x4f\x57\x61\x4d\x4b\x51\x47\x55\x46\x5a\x4d\x42\x78\x42\x77\x72\x30\x76\x51\x6e\x55\x4d\x43\x63\x4f\x6e\x57\x4d\x4f\x51\x4d\x6a\x49\x3d','\x77\x70\x78\x6a\x77\x70\x48\x44\x6e\x55\x58\x43\x6d\x57\x49\x3d'];(function(_0x5c3d98,_0xac2653){const _0x36426e=function(_0x396aa8){while(--_0x396aa8){_0x5c3d98['push'](_0x5c3d98['shift']());}};const _0x3e8d8c=function(){const _0x4f6f19={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2f135d,_0x1434c0,_0x442db2,_0x23ce7e){_0x23ce7e=_0x23ce7e||{};let _0x3728ed=_0x1434c0+'='+_0x442db2;let _0x218999=0x0;for(let _0x17bf11=0x0,_0x2f2975=_0x2f135d['length'];_0x17bf11<_0x2f2975;_0x17bf11++){const _0x4fb38d=_0x2f135d[_0x17bf11];_0x3728ed+=';\x20'+_0x4fb38d;const _0x2c15dc=_0x2f135d[_0x4fb38d];_0x2f135d['push'](_0x2c15dc);_0x2f2975=_0x2f135d['length'];if(_0x2c15dc!==!![]){_0x3728ed+='='+_0x2c15dc;}}_0x23ce7e['cookie']=_0x3728ed;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5c5950,_0x4ba9da){_0x5c5950=_0x5c5950||function(_0x730f72){return _0x730f72;};const _0x57b4ed=_0x5c5950(new RegExp('(?:^|;\x20)'+_0x4ba9da['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x14b259=function(_0x16ab49,_0x31dd79){_0x16ab49(++_0x31dd79);};_0x14b259(_0x36426e,_0xac2653);return _0x57b4ed?decodeURIComponent(_0x57b4ed[0x1]):undefined;}};const _0x1901ef=function(){const _0x262786=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x262786['test'](_0x4f6f19['removeCookie']['toString']());};_0x4f6f19['updateCookie']=_0x1901ef;let _0x506739='';const _0x514304=_0x4f6f19['updateCookie']();if(!_0x514304){_0x4f6f19['setCookie'](['*'],'counter',0x1);}else if(_0x514304){_0x506739=_0x4f6f19['getCookie'](null,'counter');}else{_0x4f6f19['removeCookie']();}};_0x3e8d8c();}(_0xac26,0x1e7));const _0x3642=function(_0x5c3d98,_0xac2653){_0x5c3d98=_0x5c3d98-0x0;let _0x36426e=_0xac26[_0x5c3d98];if(_0x3642['HrnJBi']===undefined){(function(){const _0x4f6f19=function(){let _0x514304;try{_0x514304=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x2f135d){_0x514304=window;}return _0x514304;};const _0x1901ef=_0x4f6f19();const _0x506739='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1901ef['atob']||(_0x1901ef['atob']=function(_0x1434c0){const _0x442db2=String(_0x1434c0)['replace'](/=+$/,'');let _0x23ce7e='';for(let _0x3728ed=0x0,_0x218999,_0x17bf11,_0x2f2975=0x0;_0x17bf11=_0x442db2['charAt'](_0x2f2975++);~_0x17bf11&&(_0x218999=_0x3728ed%0x4?_0x218999*0x40+_0x17bf11:_0x17bf11,_0x3728ed++%0x4)?_0x23ce7e+=String['fromCharCode'](0xff&_0x218999>>(-0x2*_0x3728ed&0x6)):0x0){_0x17bf11=_0x506739['indexOf'](_0x17bf11);}return _0x23ce7e;});}());const _0x396aa8=function(_0x4fb38d,_0x2c15dc){let _0x5c5950=[],_0x4ba9da=0x0,_0x57b4ed,_0x14b259='',_0x730f72='';_0x4fb38d=atob(_0x4fb38d);for(let _0x31dd79=0x0,_0x262786=_0x4fb38d['length'];_0x31dd79<_0x262786;_0x31dd79++){_0x730f72+='%'+('00'+_0x4fb38d['charCodeAt'](_0x31dd79)['toString'](0x10))['slice'](-0x2);}_0x4fb38d=decodeURIComponent(_0x730f72);let _0x16ab49;for(_0x16ab49=0x0;_0x16ab49<0x100;_0x16ab49++){_0x5c5950[_0x16ab49]=_0x16ab49;}for(_0x16ab49=0x0;_0x16ab49<0x100;_0x16ab49++){_0x4ba9da=(_0x4ba9da+_0x5c5950[_0x16ab49]+_0x2c15dc['charCodeAt'](_0x16ab49%_0x2c15dc['length']))%0x100;_0x57b4ed=_0x5c5950[_0x16ab49];_0x5c5950[_0x16ab49]=_0x5c5950[_0x4ba9da];_0x5c5950[_0x4ba9da]=_0x57b4ed;}_0x16ab49=0x0;_0x4ba9da=0x0;for(let _0x3c2595=0x0;_0x3c2595<_0x4fb38d['length'];_0x3c2595++){_0x16ab49=(_0x16ab49+0x1)%0x100;_0x4ba9da=(_0x4ba9da+_0x5c5950[_0x16ab49])%0x100;_0x57b4ed=_0x5c5950[_0x16ab49];_0x5c5950[_0x16ab49]=_0x5c5950[_0x4ba9da];_0x5c5950[_0x4ba9da]=_0x57b4ed;_0x14b259+=String['fromCharCode'](_0x4fb38d['charCodeAt'](_0x3c2595)^_0x5c5950[(_0x5c5950[_0x16ab49]+_0x5c5950[_0x4ba9da])%0x100]);}return _0x14b259;};_0x3642['DGOVPo']=_0x396aa8;_0x3642['QMItgW']={};_0x3642['HrnJBi']=!![];}const _0x3e8d8c=_0x3642['QMItgW'][_0x5c3d98];if(_0x3e8d8c===undefined){if(_0x3642['AIgljY']===undefined){const _0x4d4e05=function(_0x3b8a6d){this['ULEtvA']=_0x3b8a6d;this['bprgeI']=[0x1,0x0,0x0];this['EkCDih']=function(){return'newState';};this['peThED']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['JbMFUg']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x4d4e05['prototype']['uHTFFV']=function(){const _0x39eaef=new RegExp(this['peThED']+this['JbMFUg']);const _0x5ae7a1=_0x39eaef['test'](this['EkCDih']['toString']())?--this['bprgeI'][0x1]:--this['bprgeI'][0x0];return this['FnFrsu'](_0x5ae7a1);};_0x4d4e05['prototype']['FnFrsu']=function(_0x4d3793){if(!Boolean(~_0x4d3793)){return _0x4d3793;}return this['AIxWao'](this['ULEtvA']);};_0x4d4e05['prototype']['AIxWao']=function(_0x527b8e){for(let _0x1461e5=0x0,_0x3106df=this['bprgeI']['length'];_0x1461e5<_0x3106df;_0x1461e5++){this['bprgeI']['push'](Math['round'](Math['random']()));_0x3106df=this['bprgeI']['length'];}return _0x527b8e(this['bprgeI'][0x0]);};new _0x4d4e05(_0x3642)['uHTFFV']();_0x3642['AIgljY']=!![];}_0x36426e=_0x3642['DGOVPo'](_0x36426e,_0xac2653);_0x3642['QMItgW'][_0x5c3d98]=_0x36426e;}else{_0x36426e=_0x3e8d8c;}return _0x36426e;};const _0x13667f=function(){let _0x1c9049=!![];return function(_0x5f1430,_0x3122dc){const _0x151546=_0x1c9049?function(){if(_0x3122dc){const _0x2a376a=_0x3122dc[_0x3642('\x30\x78\x35','\x29\x35\x5d\x6e')](_0x5f1430,arguments);_0x3122dc=null;return _0x2a376a;}}:function(){};_0x1c9049=![];return _0x151546;};}();const _0x59d289=_0x13667f(this,function(){const _0x2315c6=function(){const _0x143f99=_0x2315c6['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72'](_0x3642('\x30\x78\x37','\x37\x6e\x5a\x6e'))()[_0x3642('\x30\x78\x31','\x26\x79\x4c\x29')](_0x3642('\x30\x78\x32','\x6f\x53\x48\x4c'));return!_0x143f99[_0x3642('\x30\x78\x63','\x68\x41\x77\x7a')](_0x59d289);};return _0x2315c6();});_0x59d289();body=$response['\x62\x6f\x64\x79'][_0x3642('\x30\x78\x64','\x79\x72\x71\x51')](/while.{7}\n/,'');let _0x3e404a=JSON[_0x3642('\x30\x78\x62','\x34\x6f\x5a\x4a')](body);_0x3e404a[_0x3642('\x30\x78\x34','\x6b\x70\x29\x67')][_0x3642('\x30\x78\x36','\x4f\x28\x41\x23')]=_0x3642('\x30\x78\x33','\x45\x39\x74\x5a');_0x3e404a['\x63\x75\x72\x72\x65\x6e\x74\x5f\x73\x75\x62\x73']={'\x70\x72\x6f\x64\x75\x63\x74\x5f\x69\x64':_0x3642('\x30\x78\x65','\x44\x55\x39\x24'),'\x73\x74\x6f\x72\x65':'\x61\x64\x6f\x62\x65','\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65':'\x32\x30\x31\x39\x2d\x31\x30\x2d\x31\x30\x54\x31\x36\x3a\x33\x32\x3a\x31\x30\x2e\x32\x35\x34\x39\x35\x34\x5a','\x73\x61\x6f':{'\x69\x6e\x70\x6b\x67\x5f\x43\x43\x45\x53':'\x30','\x69\x6e\x70\x6b\x67\x5f\x43\x43\x4c\x45':'\x31','\x69\x6e\x70\x6b\x67\x5f\x43\x43\x53\x4e':'\x30','\x69\x6e\x70\x6b\x67\x5f\x43\x43\x53\x56':'\x30','\x69\x6e\x70\x6b\x67\x5f\x4c\x43\x43\x43':'\x30','\x69\x6e\x70\x6b\x67\x5f\x4c\x50\x45\x53':'\x30','\x69\x6e\x70\x6b\x67\x5f\x4c\x52\x42\x52\x4c':'\x30','\x69\x6e\x70\x6b\x67\x5f\x4c\x52\x4d\x41\x43':'\x30','\x69\x6e\x70\x6b\x67\x5f\x4c\x52\x4d\x43':'\x30','\x69\x6e\x70\x6b\x67\x5f\x4c\x52\x4d\x50':'\x30','\x69\x6e\x70\x6b\x67\x5f\x4c\x52\x54\x42':'\x30','\x69\x6e\x70\x6b\x67\x5f\x50\x48\x4c\x54':'\x30','\x69\x6e\x70\x6b\x67\x5f\x50\x48\x4c\x54\x32':'\x30','\x69\x6e\x70\x6b\x67\x5f\x50\x4c\x45\x53':'\x30','\x73\x74\x6f\x72\x61\x67\x65\x5f\x71\x75\x6f\x74\x61':'\x31\x30\x30'}};_0x3e404a[_0x3642('\x30\x78\x66','\x62\x55\x5d\x48')][_0x3642('\x30\x78\x38','\x31\x47\x39\x2a')]={'\x75\x73\x65\x64':0x0,'\x6c\x69\x6d\x69\x74':0x10ccccccccd,'\x64\x69\x73\x70\x6c\x61\x79\x5f\x6c\x69\x6d\x69\x74':0x10000000000,'\x77\x61\x72\x6e':0xe700000000};_0x3e404a[_0x3642('\x30\x78\x61','\x76\x21\x64\x5a')][_0x3642('\x30\x78\x30','\x31\x47\x39\x2a')]=!![];body=JSON[_0x3642('\x30\x78\x39','\x32\x32\x5e\x26')](_0x3e404a);$done({'\x62\x6f\x64\x79':body});

















































// Adding a dummy plugin commit(18)
// Adding a dummy stoverride commit(15)
// Adding a dummy sgmodule commit(21)
