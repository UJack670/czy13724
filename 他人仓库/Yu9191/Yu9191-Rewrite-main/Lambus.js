/*************************************

项目名称：Lambus 10.8.0
项目下载：美区商店
项目作者：Eric
使用声明：⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https:\/\/prod\.api\.lambus\.io\/v1\.10\/subscriptions url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/Lambus.js

[mitm] 
hostname = prod.api.lambus.io

************************************/



var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Ox104eb9=["\x2F\x76\x31\x2E\x31\x30\x2F\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x73","\x2F\x76\x31\x2E\x31\x30\x2F\x74\x72\x69\x70\x73","\x2F\x76\x31\x2E\x31\x30\x2F\x75\x73\x65\x72\x73\x2F\x70\x72\x6F\x66\x69\x6C\x65","\x62\x6F\x64\x79","\x70\x61\x72\x73\x65","\x69\x6E\x64\x65\x78\x4F\x66","\x75\x72\x6C","\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x73","\x36\x34\x66\x34\x32\x33\x64\x37\x30\x34\x31\x30\x32\x66\x34\x39\x66\x66\x31\x34\x39\x37\x64\x62","\x69\x6F\x2E\x6C\x61\x6D\x62\x75\x73\x2E\x61\x70\x70\x2E\x70\x72\x6F\x64\x75\x63\x74\x2E\x6C\x61\x6D\x62\x75\x73\x70\x72\x6F\x5F\x31\x32\x6D","\x45\x72\x69\x63","\u5927\u4F6C","\x36\x34\x66\x33\x38\x38\x32\x31\x30\x34\x31\x30\x32\x66\x34\x39\x66\x66\x66\x35\x38\x37\x36\x31","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x64\x6E\x2E\x6C\x61\x6D\x62\x75\x73\x2E\x69\x6F\x2F\x70\x72\x6F\x66\x69\x6C\x65\x73\x2F\x36\x34\x66\x33\x38\x38\x32\x31\x30\x34\x31\x30\x32\x66\x34\x39\x66\x66\x66\x35\x38\x37\x36\x31\x2F\x70\x69\x63\x74\x75\x72\x65\x2F\x66\x34\x31\x63\x64\x34\x61\x62\x2D\x63\x66\x39\x61\x2D\x34\x36\x36\x31\x2D\x39\x30\x33\x37\x2D\x33\x63\x64\x33\x61\x30\x65\x63\x37\x38\x65\x63\x2E\x6A\x70\x67","\x45\x72\x69\x63\u5927\u4F6C","\x61\x70\x70\x6C\x65","\x32\x30\x39\x39\x2D\x30\x39\x2D\x31\x30\x54\x30\x36\x3A\x31\x32\x3A\x33\x39\x2E\x39\x34\x32\x5A","\x32\x30\x32\x33\x2D\x30\x39\x2D\x30\x33\x54\x30\x36\x3A\x31\x32\x3A\x33\x39\x2E\x39\x34\x33\x5A","\x22\x61\x63\x74\x69\x76\x65\x50\x72\x6F\x53\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x22\x3A\x74\x72\x75\x65","\x72\x65\x70\x6C\x61\x63\x65","\x22\x68\x61\x73\x41\x63\x74\x69\x76\x65\x4C\x61\x6D\x62\x75\x73\x50\x72\x6F\x22\x3A\x74\x72\x75\x65","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];const path1=__Ox104eb9[0x0];const path2=__Ox104eb9[0x1];const path3=__Ox104eb9[0x2];let obj=JSON[__Ox104eb9[0x4]]($response[__Ox104eb9[0x3]]);if($request[__Ox104eb9[0x6]][__Ox104eb9[0x5]](path1)!=  -1){obj[__Ox104eb9[0x7]]= [{"\x5F\x69\x64":__Ox104eb9[0x8],"\x70\x72\x6F\x64\x75\x63\x74":__Ox104eb9[0x9],"\x70\x75\x72\x63\x68\x61\x73\x65\x64\x42\x79":{"\x66\x69\x72\x73\x74\x4E\x61\x6D\x65":__Ox104eb9[0xa],"\x6C\x61\x73\x74\x4E\x61\x6D\x65":__Ox104eb9[0xb],"\x5F\x69\x64":__Ox104eb9[0xc],"\x70\x69\x63\x74\x75\x72\x65":__Ox104eb9[0xd],"\x6E\x61\x6D\x65":__Ox104eb9[0xe],"\x69\x64":__Ox104eb9[0xc]},"\x72\x65\x6E\x65\x77\x73":true,"\x70\x6C\x61\x74\x66\x6F\x72\x6D":__Ox104eb9[0xf],"\x65\x78\x70\x69\x72\x65\x73\x41\x74":__Ox104eb9[0x10],"\x63\x72\x65\x61\x74\x65\x64\x41\x74":__Ox104eb9[0x11]}]};if($request[__Ox104eb9[0x6]][__Ox104eb9[0x5]](path2)!=  -1){body= $response[__Ox104eb9[0x3]][__Ox104eb9[0x13]](/\"activeProSubscription\":false/g,__Ox104eb9[0x12]);$done({body})};if($request[__Ox104eb9[0x6]][__Ox104eb9[0x5]](path3)!=  -1){body= $response[__Ox104eb9[0x3]][__Ox104eb9[0x13]](/\"hasActiveLambusPro\":false/,__Ox104eb9[0x14]);$done({body})};$done({body:JSON[__Ox104eb9[0x15]](obj)});;;(function(_0xa03ex5,_0xa03ex6,_0xa03ex7,_0xa03ex8,_0xa03ex9,_0xa03exa){_0xa03exa= __Ox104eb9[0x16];_0xa03ex8= function(_0xa03exb){if( typeof alert!== _0xa03exa){alert(_0xa03exb)};if( typeof console!== _0xa03exa){console[__Ox104eb9[0x17]](_0xa03exb)}};_0xa03ex7= function(_0xa03exc,_0xa03ex5){return _0xa03exc+ _0xa03ex5};_0xa03ex9= _0xa03ex7(__Ox104eb9[0x18],_0xa03ex7(_0xa03ex7(__Ox104eb9[0x19],__Ox104eb9[0x1a]),__Ox104eb9[0x1b]));try{_0xa03ex5= __encode;if(!( typeof _0xa03ex5!== _0xa03exa&& _0xa03ex5=== _0xa03ex7(__Ox104eb9[0x1c],__Ox104eb9[0x1d]))){_0xa03ex8(_0xa03ex9)}}catch(e){_0xa03ex8(_0xa03ex9)}})({})


















































// Adding a dummy stoverride commit(15)
// Adding a dummy sgmodule commit(21)
// Adding a dummy plugin commit(19)
