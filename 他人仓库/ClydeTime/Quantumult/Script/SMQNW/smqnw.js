/******************************

脚本功能：扫描全能王-手机扫描仪+解锁VIP
更新时间：2022-10-13
By MartinsKing
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\?.+\_(RoadMap\&sign) url script-response-body https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/SMQNW/smqnw.js
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\?.+\%(7CCamScanner_Pdfword%) url script-response-body https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/SMQNW/smqnw.js
^https:\/\/v3\.camscanner\.com\/app url script-response-body https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/SMQNW/smqnw.js

[mitm]

hostname = ap*.intsig.net, v3.camscanner.com

**************************/

var _0xodO='jsjiami.com.v6',_0xodO_=['‮_0xodO'],_0xeb84=[_0xodO,'woNHwrnDocOk','V1Uq','eUdxwozDt18y','wqpWw61OJg==','w6/CnGjDgcOI','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','wrDChsK2w4V7','D8OJw73DnSc=','RUdMwrrDmw==','w78UwpAfwpM=','ZAPDt0bCpw==','Tn3CqCgs','R1Egw683','woVzdhoIw4FCYsKLw6XCpjM=','CgfCsMKTwosww4HCpA==','w4MhwpwPw6xXEg==','WcK2wozDpcKc','RjsjiaPXmLiFLA.cuoklMGJmL.v6OKt=='];if(function(_0x3d099c,_0x94c3b7,_0x1ff241){function _0x269715(_0x38d3d4,_0x7c24a5,_0x35e65a,_0x515358,_0x2e6df3,_0x346be4){_0x7c24a5=_0x7c24a5>>0x8,_0x2e6df3='po';var _0x35b2d5='shift',_0x74c936='push',_0x346be4='‮';if(_0x7c24a5<_0x38d3d4){while(--_0x38d3d4){_0x515358=_0x3d099c[_0x35b2d5]();if(_0x7c24a5===_0x38d3d4&&_0x346be4==='‮'&&_0x346be4['length']===0x1){_0x7c24a5=_0x515358,_0x35e65a=_0x3d099c[_0x2e6df3+'p']();}else if(_0x7c24a5&&_0x35e65a['replace'](/[RPXLFLAuklMGJLOKt=]/g,'')===_0x7c24a5){_0x3d099c[_0x74c936](_0x515358);}}_0x3d099c[_0x74c936](_0x3d099c[_0x35b2d5]());}return 0x1098e8;};return _0x269715(++_0x94c3b7,_0x1ff241)>>_0x94c3b7^_0x1ff241;}(_0xeb84,0x194,0x19400),_0xeb84){_0xodO_=_0xeb84['length']^0x194;};function _0x506a(_0x150174,_0x46f15a){_0x150174=~~'0x'['concat'](_0x150174['slice'](0x1));var _0x4e52e2=_0xeb84[_0x150174];if(_0x506a['dXOwxQ']===undefined){(function(){var _0xb7b236=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x1de740='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0xb7b236['atob']||(_0xb7b236['atob']=function(_0x4febcd){var _0x407274=String(_0x4febcd)['replace'](/=+$/,'');for(var _0x13ddb1=0x0,_0x564e30,_0x11f473,_0x4887e7=0x0,_0x3ce50a='';_0x11f473=_0x407274['charAt'](_0x4887e7++);~_0x11f473&&(_0x564e30=_0x13ddb1%0x4?_0x564e30*0x40+_0x11f473:_0x11f473,_0x13ddb1++%0x4)?_0x3ce50a+=String['fromCharCode'](0xff&_0x564e30>>(-0x2*_0x13ddb1&0x6)):0x0){_0x11f473=_0x1de740['indexOf'](_0x11f473);}return _0x3ce50a;});}());function _0x3d9778(_0xad333e,_0x46f15a){var _0x3b3d0e=[],_0x5e7b0d=0x0,_0x2df9bd,_0x35ab10='',_0x4d25bb='';_0xad333e=atob(_0xad333e);for(var _0x56e30f=0x0,_0x39411c=_0xad333e['length'];_0x56e30f<_0x39411c;_0x56e30f++){_0x4d25bb+='%'+('00'+_0xad333e['charCodeAt'](_0x56e30f)['toString'](0x10))['slice'](-0x2);}_0xad333e=decodeURIComponent(_0x4d25bb);for(var _0x18c11c=0x0;_0x18c11c<0x100;_0x18c11c++){_0x3b3d0e[_0x18c11c]=_0x18c11c;}for(_0x18c11c=0x0;_0x18c11c<0x100;_0x18c11c++){_0x5e7b0d=(_0x5e7b0d+_0x3b3d0e[_0x18c11c]+_0x46f15a['charCodeAt'](_0x18c11c%_0x46f15a['length']))%0x100;_0x2df9bd=_0x3b3d0e[_0x18c11c];_0x3b3d0e[_0x18c11c]=_0x3b3d0e[_0x5e7b0d];_0x3b3d0e[_0x5e7b0d]=_0x2df9bd;}_0x18c11c=0x0;_0x5e7b0d=0x0;for(var _0x23d122=0x0;_0x23d122<_0xad333e['length'];_0x23d122++){_0x18c11c=(_0x18c11c+0x1)%0x100;_0x5e7b0d=(_0x5e7b0d+_0x3b3d0e[_0x18c11c])%0x100;_0x2df9bd=_0x3b3d0e[_0x18c11c];_0x3b3d0e[_0x18c11c]=_0x3b3d0e[_0x5e7b0d];_0x3b3d0e[_0x5e7b0d]=_0x2df9bd;_0x35ab10+=String['fromCharCode'](_0xad333e['charCodeAt'](_0x23d122)^_0x3b3d0e[(_0x3b3d0e[_0x18c11c]+_0x3b3d0e[_0x5e7b0d])%0x100]);}return _0x35ab10;}_0x506a['godHFg']=_0x3d9778;_0x506a['nNgUTE']={};_0x506a['dXOwxQ']=!![];}var _0x3ab383=_0x506a['nNgUTE'][_0x150174];if(_0x3ab383===undefined){if(_0x506a['uvlHEj']===undefined){_0x506a['uvlHEj']=!![];}_0x4e52e2=_0x506a['godHFg'](_0x4e52e2,_0x46f15a);_0x506a['nNgUTE'][_0x150174]=_0x4e52e2;}else{_0x4e52e2=_0x3ab383;}return _0x4e52e2;};eval(function(_0x4df9a7,_0x268b38,_0x822b9a,_0x1b8f08,_0x54392c,_0x3a68e2){var _0x223779={'dhjpY':function(_0x4476c1,_0xa04214){return _0x4476c1+_0xa04214;},'NeMZM':function(_0x39218c,_0x18e980){return _0x39218c<_0x18e980;},'RqCZD':function(_0x26797e,_0x2cf8c9){return _0x26797e(_0x2cf8c9);},'yYhYH':function(_0x14094d,_0x48207f){return _0x14094d(_0x48207f);},'uXJdp':function(_0x9d1e8d,_0x3ff43d){return _0x9d1e8d/_0x3ff43d;},'Wzvep':function(_0x1f8991,_0x207b18){return _0x1f8991%_0x207b18;},'ECjac':function(_0x54cf0d,_0x166dad){return _0x54cf0d(_0x166dad);},'vpqpK':function(_0x3225d1,_0x49ce84){return _0x3225d1(_0x49ce84);},'CzJVT':function(_0xe396a6,_0x32810c){return _0xe396a6+_0x32810c;}};_0x54392c=function(_0x822b9a){return _0x223779[_0x506a('‫0',']Unz')](_0x223779[_0x506a('‮1','^3y)')](_0x822b9a,_0x268b38)?'':_0x223779[_0x506a('‫2','mN(Z')](_0x54392c,_0x223779[_0x506a('‫3','[WhJ')](parseInt,_0x223779[_0x506a('‮4','qDff')](_0x822b9a,_0x268b38))),(_0x822b9a=_0x223779[_0x506a('‫5','YAfh')](_0x822b9a,_0x268b38))>0x23?String[_0x506a('‮6','wX7H')](_0x822b9a+0x1d):_0x822b9a[_0x506a('‮7','eRsy')](0x24));};if(!''[_0x506a('‫8','mtr^')](/^/,String)){while(_0x822b9a--)_0x3a68e2[_0x223779[_0x506a('‮9','9gJe')](_0x54392c,_0x822b9a)]=_0x1b8f08[_0x822b9a]||_0x223779[_0x506a('‫a','0Dli')](_0x54392c,_0x822b9a);_0x1b8f08=[function(_0x54392c){return _0x3a68e2[_0x54392c];}];_0x54392c=function(){return _0x506a('‮b','^3y)');};_0x822b9a=0x1;};while(_0x822b9a--)if(_0x1b8f08[_0x822b9a])_0x4df9a7=_0x4df9a7[_0x506a('‫c','^3y)')](new RegExp(_0x223779['dhjpY'](_0x223779[_0x506a('‫d',']*ZT')]('\x5cb',_0x223779[_0x506a('‫e',')mAO')](_0x54392c,_0x822b9a)),'\x5cb'),'g'),_0x1b8f08[_0x822b9a]);return _0x4df9a7;}(_0x506a('‮f',']Unz'),0x3e,0xb0,_0x506a('‫10','6Kw6')[_0x506a('‫11','sRRI')]('|'),0x0,{}));;_0xodO='jsjiami.com.v6';
























































// Adding a dummy stoverride commit(17)
// Adding a dummy sgmodule commit(23)
// Adding a dummy plugin commit(21)
