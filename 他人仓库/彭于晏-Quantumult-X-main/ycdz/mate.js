/******************************

脚本功能：Mate - 文字和语音+解锁订阅
下载地址：https://is.gd/Ceh5nN
软件版本：7.1.1
脚本作者：彭于晏💞
更新时间：2022-12-11
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https://asia.gikken.co/matesync/(subscription|login|check_user) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/mate.js

[mitm] 

hostname = asia.gikken.co


*******************************/

var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxf10b8=["\x2F\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x2F\x63\x68\x65\x63\x6B\x5F\x75\x73\x65\x72","\x2F\x6C\x6F\x67\x69\x6E","\x62\x6F\x64\x79","\x70\x61\x72\x73\x65","\x69\x6E\x64\x65\x78\x4F\x66","\x75\x72\x6C","\x32\x30\x39\x39\x2D\x31\x32\x2D\x31\x31","\x30","\x6C\x69\x66\x65\x74\x69\x6D\x65","\x69\x74\x6D\x73\x2D\x61\x70\x70\x73\x3A\x2F\x2F\x61\x70\x70\x73\x2E\x61\x70\x70\x6C\x65\x2E\x63\x6F\x6D\x2F\x61\x63\x63\x6F\x75\x6E\x74\x2F\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x73","\x55\x53\x44","\x61\x63\x74\x69\x76\x65","\x68\x61\x73\x5F\x70\x72\x6F","\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x49\x6E\x66\x6F","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];const path1=__Oxf10b8[0x0];const path2=__Oxf10b8[0x1];const path3=__Oxf10b8[0x2];let obj=JSON[__Oxf10b8[0x4]]($response[__Oxf10b8[0x3]]);if($request[__Oxf10b8[0x6]][__Oxf10b8[0x5]](path1)!=  -1){obj= {"\x6E\x65\x78\x74\x5F\x62\x69\x6C\x6C\x5F\x64\x61\x74\x65":__Oxf10b8[0x7],"\x6E\x65\x78\x74\x5F\x70\x61\x79\x6D\x65\x6E\x74\x5F\x61\x6D\x6F\x75\x6E\x74":__Oxf10b8[0x8],"\x70\x61\x75\x73\x65\x64\x5F\x66\x72\x6F\x6D":null,"\x62\x69\x6C\x6C\x69\x6E\x67\x5F\x70\x65\x72\x69\x6F\x64":__Oxf10b8[0x9],"\x63\x61\x6E\x63\x65\x6C\x5F\x75\x72\x6C":__Oxf10b8[0xa],"\x69\x73\x53\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x56\x65\x72\x69\x66\x69\x65\x64":true,"\x75\x6E\x69\x74\x5F\x70\x72\x69\x63\x65":__Oxf10b8[0x8],"\x6F\x6C\x64\x5F\x73\x74\x61\x74\x75\x73":null,"\x75\x70\x64\x61\x74\x65\x5F\x75\x72\x6C":__Oxf10b8[0xa],"\x69\x73\x4C\x69\x66\x65\x74\x69\x6D\x65":true,"\x63\x61\x6E\x63\x65\x6C\x6C\x61\x74\x69\x6F\x6E\x5F\x65\x66\x66\x65\x63\x74\x69\x76\x65\x5F\x64\x61\x74\x65":__Oxf10b8[0x7],"\x63\x75\x72\x72\x65\x6E\x63\x79":__Oxf10b8[0xb],"\x73\x74\x61\x74\x75\x73":__Oxf10b8[0xc]}};if($request[__Oxf10b8[0x6]][__Oxf10b8[0x5]](path2)!=  -1){obj= {"\x72\x65\x67\x69\x73\x74\x65\x72\x65\x64":true}};if($request[__Oxf10b8[0x6]][__Oxf10b8[0x5]](path3)!=  -1){obj[__Oxf10b8[0xd]]= true;obj[__Oxf10b8[0xe]]= {"\x6E\x65\x78\x74\x5F\x62\x69\x6C\x6C\x5F\x64\x61\x74\x65":__Oxf10b8[0x7],"\x6E\x65\x78\x74\x5F\x70\x61\x79\x6D\x65\x6E\x74\x5F\x61\x6D\x6F\x75\x6E\x74":__Oxf10b8[0x8],"\x70\x61\x75\x73\x65\x64\x5F\x66\x72\x6F\x6D":null,"\x62\x69\x6C\x6C\x69\x6E\x67\x5F\x70\x65\x72\x69\x6F\x64":__Oxf10b8[0x9],"\x63\x61\x6E\x63\x65\x6C\x5F\x75\x72\x6C":__Oxf10b8[0xa],"\x69\x73\x53\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x56\x65\x72\x69\x66\x69\x65\x64":true,"\x75\x6E\x69\x74\x5F\x70\x72\x69\x63\x65":__Oxf10b8[0x8],"\x6F\x6C\x64\x5F\x73\x74\x61\x74\x75\x73":null,"\x75\x70\x64\x61\x74\x65\x5F\x75\x72\x6C":__Oxf10b8[0xa],"\x69\x73\x4C\x69\x66\x65\x74\x69\x6D\x65":true,"\x63\x61\x6E\x63\x65\x6C\x6C\x61\x74\x69\x6F\x6E\x5F\x65\x66\x66\x65\x63\x74\x69\x76\x65\x5F\x64\x61\x74\x65":__Oxf10b8[0x7],"\x63\x75\x72\x72\x65\x6E\x63\x79":__Oxf10b8[0xb],"\x73\x74\x61\x74\x75\x73":__Oxf10b8[0xc]}};$done({body:JSON[__Oxf10b8[0xf]](obj)});;;(function(_0xf3efx5,_0xf3efx6,_0xf3efx7,_0xf3efx8,_0xf3efx9,_0xf3efxa){_0xf3efxa= __Oxf10b8[0x10];_0xf3efx8= function(_0xf3efxb){if( typeof alert!== _0xf3efxa){alert(_0xf3efxb)};if( typeof console!== _0xf3efxa){console[__Oxf10b8[0x11]](_0xf3efxb)}};_0xf3efx7= function(_0xf3efxc,_0xf3efx5){return _0xf3efxc+ _0xf3efx5};_0xf3efx9= _0xf3efx7(__Oxf10b8[0x12],_0xf3efx7(_0xf3efx7(__Oxf10b8[0x13],__Oxf10b8[0x14]),__Oxf10b8[0x15]));try{_0xf3efx5= __encode;if(!( typeof _0xf3efx5!== _0xf3efxa&& _0xf3efx5=== _0xf3efx7(__Oxf10b8[0x16],__Oxf10b8[0x17]))){_0xf3efx8(_0xf3efx9)}}catch(e){_0xf3efx8(_0xf3efx9)}})({})









































// Adding a dummy stoverride commit(12)
// Adding a dummy sgmodule commit(18)
// Adding a dummy plugin commit(16)
