/******************************

脚本功能：醒图+解锁VIP
使用教程：爱思助手下载5.5版本
下载地址：自己下载
软件版本：5.5.0
脚本作者：彭于晏
更新时间：2022-9-13
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/commerce-api\.faceu\.mobi\/commerce\/v1\/subscription url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/xt.js

[mitm] 
hostname = commerce-api.faceu.mobi

*******************************/

var _0x2adb=['wr/CgGs=','H8KWZ1Y=','woslw6MdwpQkDMKdw4jCug==','FMOeWMOV','w5YLPcKk','w4VowpbCp8K0','OCxhw50DDWJx','C2QfEg==','w7dcw5zDk8OUwrkWwojCh00zOj8=','Y2HDncK8ARMy'];(function(_0x5c45ef,_0x2adb3d){var _0x2f3acc=function(_0x43886a){while(--_0x43886a){_0x5c45ef['push'](_0x5c45ef['shift']());}};_0x2f3acc(++_0x2adb3d);}(_0x2adb,0x1e7));var _0x2f3a=function(_0x5c45ef,_0x2adb3d){_0x5c45ef=_0x5c45ef-0x0;var _0x2f3acc=_0x2adb[_0x5c45ef];if(_0x2f3a['ghrTiW']===undefined){(function(){var _0x3b3fad;try{var _0x48d77b=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x3b3fad=_0x48d77b();}catch(_0x446c0c){_0x3b3fad=window;}var _0x1a7cb2='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3b3fad['atob']||(_0x3b3fad['atob']=function(_0x261e51){var _0x54fb05=String(_0x261e51)['replace'](/=+$/,'');var _0x3e4d37='';for(var _0x1609c5=0x0,_0x5a73b3,_0x11f196,_0x5c37c5=0x0;_0x11f196=_0x54fb05['charAt'](_0x5c37c5++);~_0x11f196&&(_0x5a73b3=_0x1609c5%0x4?_0x5a73b3*0x40+_0x11f196:_0x11f196,_0x1609c5++%0x4)?_0x3e4d37+=String['fromCharCode'](0xff&_0x5a73b3>>(-0x2*_0x1609c5&0x6)):0x0){_0x11f196=_0x1a7cb2['indexOf'](_0x11f196);}return _0x3e4d37;});}());var _0x31ba82=function(_0x17bd72,_0x23f821){var _0x28976c=[],_0x5e1727=0x0,_0xf876f,_0x1f3946='',_0x3da12b='';_0x17bd72=atob(_0x17bd72);for(var _0x5cc9e1=0x0,_0x5c3536=_0x17bd72['length'];_0x5cc9e1<_0x5c3536;_0x5cc9e1++){_0x3da12b+='%'+('00'+_0x17bd72['charCodeAt'](_0x5cc9e1)['toString'](0x10))['slice'](-0x2);}_0x17bd72=decodeURIComponent(_0x3da12b);var _0x29d318;for(_0x29d318=0x0;_0x29d318<0x100;_0x29d318++){_0x28976c[_0x29d318]=_0x29d318;}for(_0x29d318=0x0;_0x29d318<0x100;_0x29d318++){_0x5e1727=(_0x5e1727+_0x28976c[_0x29d318]+_0x23f821['charCodeAt'](_0x29d318%_0x23f821['length']))%0x100;_0xf876f=_0x28976c[_0x29d318];_0x28976c[_0x29d318]=_0x28976c[_0x5e1727];_0x28976c[_0x5e1727]=_0xf876f;}_0x29d318=0x0;_0x5e1727=0x0;for(var _0x158a75=0x0;_0x158a75<_0x17bd72['length'];_0x158a75++){_0x29d318=(_0x29d318+0x1)%0x100;_0x5e1727=(_0x5e1727+_0x28976c[_0x29d318])%0x100;_0xf876f=_0x28976c[_0x29d318];_0x28976c[_0x29d318]=_0x28976c[_0x5e1727];_0x28976c[_0x5e1727]=_0xf876f;_0x1f3946+=String['fromCharCode'](_0x17bd72['charCodeAt'](_0x158a75)^_0x28976c[(_0x28976c[_0x29d318]+_0x28976c[_0x5e1727])%0x100]);}return _0x1f3946;};_0x2f3a['eMCyDH']=_0x31ba82;_0x2f3a['iHVxrx']={};_0x2f3a['ghrTiW']=!![];}var _0x43886a=_0x2f3a['iHVxrx'][_0x5c45ef];if(_0x43886a===undefined){if(_0x2f3a['WCKdfH']===undefined){_0x2f3a['WCKdfH']=!![];}_0x2f3acc=_0x2f3a['eMCyDH'](_0x2f3acc,_0x2adb3d);_0x2f3a['iHVxrx'][_0x5c45ef]=_0x2f3acc;}else{_0x2f3acc=_0x43886a;}return _0x2f3acc;};var body=$response[_0x2f3a('0x7','DL2H')];var url=$request[_0x2f3a('0x3','yfPf')];var obj=JSON[_0x2f3a('0x8','^vrv')](body);const vip=_0x2f3a('0x1','NsYw');if(url[_0x2f3a('0x2','L]Oh')](vip)!=-0x1){obj['data'][_0x2f3a('0x4','JhNe')]=!![];obj[_0x2f3a('0x6','YFSJ')][_0x2f3a('0x5','*OeT')]=0x62f780df;obj[_0x2f3a('0x0','i[3f')][_0x2f3a('0x9','rKOA')]=0x2540be3ff;body=JSON['stringify'](obj);}$done({'body':body});
















































// Adding a dummy sgmodule commit(20)
// Adding a dummy plugin commit(18)
// Adding a dummy stoverride commit(15)
