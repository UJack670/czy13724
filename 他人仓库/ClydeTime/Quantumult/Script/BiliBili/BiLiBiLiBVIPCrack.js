/*
脚本功能：哔哩哔哩魔改
软件版本：6.90.0
更新时间：2023-9-12
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

# > 哔哩哔哩会员限定版
^https?:\/\/ap(i|p)\.bilibili\.com\/bilibili\.\w{3,9}\..+\/(View|Play(URL|View(Unite)?|Conf|erOnline)|MainList|ViewProgress)$ url script-request-header https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/BiliBili/BiLiBiLiBVIPCrack.js
# > 哔哩哔哩魔改
^https?:\/\/ap(i|p)\.bilibili\.com\/x\/(vip|v2|resource)\/(space|account|web|price|top_panel_info|show)(\/|\?)(mine|myinfo|access|vip_center|panel|_bridge|skin\?).* url script-response-body https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/BiliBili/bili_info.js

[mitm] 

hostname = app.bilibili.com, api.bilibili.com, 124.239.240.*, 120.192.82.*, 101.89.57.*, 218.94.210.*, 218.60.18.*, 240e:b1:9801:206:11:0:0:*
*/

var version_='jsjiami.com.v7';var _0x1fedee=_0x26aa;(function(_0x4fa171,_0x3d49a9,_0x58e41b,_0x8294d6,_0x1758ee,_0x697076,_0x3dc536){return _0x4fa171=_0x4fa171>>0x7,_0x697076='hs',_0x3dc536='hs',function(_0x3c3942,_0x35d83e,_0xe1026c,_0x598322,_0x4a5d57){var _0x232821=_0x26aa;_0x598322='tfi',_0x697076=_0x598322+_0x697076,_0x4a5d57='up',_0x3dc536+=_0x4a5d57,_0x697076=_0xe1026c(_0x697076),_0x3dc536=_0xe1026c(_0x3dc536),_0xe1026c=0x0;var _0x4c452d=_0x3c3942();while(!![]&&--_0x8294d6+_0x35d83e){try{_0x598322=-parseInt(_0x232821(0xff,'Yr8['))/0x1*(parseInt(_0x232821(0x109,'K$1e'))/0x2)+-parseInt(_0x232821(0xf4,'HZN&'))/0x3+parseInt(_0x232821(0xfa,'I8if'))/0x4+-parseInt(_0x232821(0xee,'Yr8['))/0x5+parseInt(_0x232821(0xf6,'HZN&'))/0x6+parseInt(_0x232821(0xf0,'nI71'))/0x7+parseInt(_0x232821(0xf1,'K$1e'))/0x8;}catch(_0x993fc6){_0x598322=_0xe1026c;}finally{_0x4a5d57=_0x4c452d[_0x697076]();if(_0x4fa171<=_0x8294d6)_0xe1026c?_0x1758ee?_0x598322=_0x4a5d57:_0x1758ee=_0x4a5d57:_0xe1026c=_0x4a5d57;else{if(_0xe1026c==_0x1758ee['replace'](/[FGOISdDxQBXgrpuNtn=]/g,'')){if(_0x598322===_0x35d83e){_0x4c452d['un'+_0x697076](_0x4a5d57);break;}_0x4c452d[_0x3dc536](_0x4a5d57);}}}}}(_0x58e41b,_0x3d49a9,function(_0x1916ca,_0x4968da,_0x8b675f,_0x4a5ecc,_0x28b072,_0x124615,_0x19edde){return _0x4968da='\x73\x70\x6c\x69\x74',_0x1916ca=arguments[0x0],_0x1916ca=_0x1916ca[_0x4968da](''),_0x8b675f='\x72\x65\x76\x65\x72\x73\x65',_0x1916ca=_0x1916ca[_0x8b675f]('\x76'),_0x4a5ecc='\x6a\x6f\x69\x6e',(0x13ddaa,_0x1916ca[_0x4a5ecc](''));});}(0x6280,0x68805,_0x3fda,0xc7),_0x3fda)&&(version_=_0x3fda);const cookie2object=_0xd33859=>{var _0x44a091=_0x26aa,_0x42b363={},_0x537ca1=_0xd33859[_0x44a091(0xfb,'%Yu@')](';\x20');return _0x537ca1[_0x44a091(0x104,'e!rU')](function(_0x5be756){var _0x290bd5=_0x44a091,_0x27ed9b=_0x5be756[_0x290bd5(0x100,'3Stx')]('=');_0x42b363[_0x27ed9b[0x0]]=_0x27ed9b[0x1];}),_0x42b363;};function _0x26aa(_0x596c1a,_0x326cff){var _0x3fda9e=_0x3fda();return _0x26aa=function(_0x26aa1b,_0x41a614){_0x26aa1b=_0x26aa1b-0xee;var _0x2f2f20=_0x3fda9e[_0x26aa1b];if(_0x26aa['muHDiv']===undefined){var _0x44cdac=function(_0x4daa44){var _0x495cde='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x32fbf0='',_0x38170c='';for(var _0x25ca48=0x0,_0x244fbc,_0x1036bb,_0x1f4ca7=0x0;_0x1036bb=_0x4daa44['charAt'](_0x1f4ca7++);~_0x1036bb&&(_0x244fbc=_0x25ca48%0x4?_0x244fbc*0x40+_0x1036bb:_0x1036bb,_0x25ca48++%0x4)?_0x32fbf0+=String['fromCharCode'](0xff&_0x244fbc>>(-0x2*_0x25ca48&0x6)):0x0){_0x1036bb=_0x495cde['indexOf'](_0x1036bb);}for(var _0x67a99=0x0,_0x556a6c=_0x32fbf0['length'];_0x67a99<_0x556a6c;_0x67a99++){_0x38170c+='%'+('00'+_0x32fbf0['charCodeAt'](_0x67a99)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x38170c);};var _0xddf894=function(_0x48c5f8,_0x30ce8c){var _0x1864be=[],_0x9457ac=0x0,_0x577850,_0x57c189='';_0x48c5f8=_0x44cdac(_0x48c5f8);var _0x5c0bd3;for(_0x5c0bd3=0x0;_0x5c0bd3<0x100;_0x5c0bd3++){_0x1864be[_0x5c0bd3]=_0x5c0bd3;}for(_0x5c0bd3=0x0;_0x5c0bd3<0x100;_0x5c0bd3++){_0x9457ac=(_0x9457ac+_0x1864be[_0x5c0bd3]+_0x30ce8c['charCodeAt'](_0x5c0bd3%_0x30ce8c['length']))%0x100,_0x577850=_0x1864be[_0x5c0bd3],_0x1864be[_0x5c0bd3]=_0x1864be[_0x9457ac],_0x1864be[_0x9457ac]=_0x577850;}_0x5c0bd3=0x0,_0x9457ac=0x0;for(var _0x55ba22=0x0;_0x55ba22<_0x48c5f8['length'];_0x55ba22++){_0x5c0bd3=(_0x5c0bd3+0x1)%0x100,_0x9457ac=(_0x9457ac+_0x1864be[_0x5c0bd3])%0x100,_0x577850=_0x1864be[_0x5c0bd3],_0x1864be[_0x5c0bd3]=_0x1864be[_0x9457ac],_0x1864be[_0x9457ac]=_0x577850,_0x57c189+=String['fromCharCode'](_0x48c5f8['charCodeAt'](_0x55ba22)^_0x1864be[(_0x1864be[_0x5c0bd3]+_0x1864be[_0x9457ac])%0x100]);}return _0x57c189;};_0x26aa['vNCIcl']=_0xddf894,_0x596c1a=arguments,_0x26aa['muHDiv']=!![];}var _0x1533bd=_0x3fda9e[0x0],_0x595e93=_0x26aa1b+_0x1533bd,_0x58ddf9=_0x596c1a[_0x595e93];return!_0x58ddf9?(_0x26aa['FeMtak']===undefined&&(_0x26aa['FeMtak']=!![]),_0x2f2f20=_0x26aa['vNCIcl'](_0x2f2f20,_0x41a614),_0x596c1a[_0x595e93]=_0x2f2f20):_0x2f2f20=_0x58ddf9,_0x2f2f20;},_0x26aa(_0x596c1a,_0x326cff);}var headers=$request[_0x1fedee(0x101,'g1*6')],modifiedheaders={'Cookie':_0x1fedee(0xfe,'DEOu'),'Authorization':'identify_v1\x20fd6d972fa8bb2114b855ee6f03ac3c91CjBuGuNeNdryWPqhlzg42BhugXdwRzP9tIBC5PFuvGw4O5XUqiaakhumduDwRK6GLUUSVnJhV2I4cHg0YjU0Q1ZsR0tjajVkRzZzNlJScXk1NTh6MDdzZXNVek1Ra1RNT19Lb3A2eWdMX1NWRG5CMEdYdDdfTmtKQk9RU3ZlUy0tRl9aR2pEZDlnIIEC','User-Agent':_0x1fedee(0x10a,'%jAw'),'x-bili-locale-bin':_0x1fedee(0x107,'wMB['),'x-bili-device-bin':_0x1fedee(0xf8,'Vbeu'),'x-bili-metadata-bin':_0x1fedee(0x108,'VKMA'),'x-bili-fawkes-req-bin':'CgZpcGhvbmUSBHByb2QaCGUxMTQ0MWEx'},uid=Number(cookie2object(headers[_0x1fedee(0xef,'lpU!')])['DedeUserID']);let uids=[0x19cac9c1,0x10defe4f,0x14eb6f8d,0x1cba37dc,0x10f660a0,0x9682d0,0xc23dd2],result=uids['includes'](uid);result&&(headers[_0x1fedee(0x105,'ZbOr')]=modifiedheaders[_0x1fedee(0xf5,'nI71')],headers['Authorization']=modifiedheaders[_0x1fedee(0x103,'YhAa')],headers[_0x1fedee(0x10b,'rIPC')]=modifiedheaders[_0x1fedee(0xf3,'I8if')],headers[_0x1fedee(0x102,']w7w')]=modifiedheaders[_0x1fedee(0xfd,'t2Cr')],headers[_0x1fedee(0xf9,'3Stx')]=modifiedheaders['x-bili-device-bin'],headers['x-bili-metadata-bin']=modifiedheaders['x-bili-metadata-bin'],headers['x-bili-fawkes-req-bin']=modifiedheaders[_0x1fedee(0xfc,'g7fX')]);function _0x3fda(){var _0x4d26b9=(function(){return[version_,'SXjusFjipaSdOmgDir.gSGcoQOmIN.Dxv7XBtnOI==','W4qoWPqjsmkLyCoUpI8','grFcTmk5uSo6lrhdTCkdqatdMW','atJdRHddTmox','ebhcUCk8u8kHCbddQmkdxq','vmkSW7xdMJieW5lcICotWONcVW','xttcPsChmeldQw7cGZHYW73dTmkqW5xcHN59W53dGCkHW51Swx/cP11Vq8k9CSoFWPfCje9lWPCgW4uNBJ9Slv8IeI0Sn8okyNaFmCo+l8kDWQFdJ8oMWODlg2TblGddLKiGWQJdQw5TsYfmpurga1ZdRX8Rc8kduSowWRDPjmktA1NcMu4yWPfFW61fpSoMfxSPqxiBW6D/W77cVCoZW7q0j8kggGyLWQlcOx5VW6m2pgNdU8kHWOeqWQ3dJSoEa8k4kJhdOcjKWQdcJLPSW7bKWRldMs3dVCoCWQ1AW6ZdKSkitXRcGSo1oCoCWQtdTCkDfCoKlCkHAq45CmorxfJcNbJdRCoXvd9PWRDsWRBdHSoktSopDCowWOKzW6hcGfrgl1bVEWVdSSoFB3yBW6BdIueYwSk1gfdcKCoUWR1nW6VcH8kXWONcImoOaCo2W5ldSmoCoCkfW4BdP03cTCoFdfSibL8','FhNcNSoNWRFdHSkPEJX5FSkkbCkMWPTrka','WQjkW4ndvSoss8opftaHjq','WOK3W5mJWOK','dSk7W7noWO/cSJ1EkSoXzmoBmmo6imoIW4xcOrZcSr8'].concat((function(){return['DLhdJgfoCSkzW6dcKSkpsSoJs8owW4WEqW','jSkBFs4WuatdKSkXWOHLW4FcN8kEW7fueq5czK7cM27cVwLCsqaDfSooq8kWW4ZcMmoKzxylaYxcRSk7qmkVySkjrctcRSkKidqiW7ldVLFcMbr1W5RdKmklmCopW7S7t8kEWPtdH8oVW7fKW48AeKRcJ8o+W6pcSCooW69cWQyeDs/cUNpcNYpdJCkGtsCXmuDKW4X8d0RdGNBcJfCwh8oCWPXIW7G+WOyRnqKYkgzDWPGzWRSjjCkNlSkWWOenoCo8W5PtWRS6xSkCuWalWQbap8k8W6ubWRhdRdypWQHaWOK8qmoQmSofWR1jvxVcGrlcPSonW6jwW7FdN0ZdSMddUmogwMZcUYJdRf7cQ1tcJ8kgdKBcVSk7ECk0WORdH8ooW4SfvSkggmo+WQiqW6/cGCodiSoOzXenBHL+W73cIqOCWO4uWPn5W5asACkvW70mhSk4b8oIoSoAsxi8tSo1W5ipWOBcMmkIWPyki8k+dvxcOuFdMSk1mtVdGmkrxNVdSmoSAstcSND8cCoeWQJdSmkbjs/dRmojW7PeW7VdUKBcU3CdWRldUgxdLuhcKSoBlbqoi8kyzhbSj8kYW453W7iPsCofmCocWRqgwHBdSNLdW5tcICoQl3pcIK1BWQjTnSovWQNcNSo/W5XClIhcRv3cRKu','eSkofSomhHNcVL8','DYtcKmoNWQ8','jsFdKdjswmog','h8kyW7CoWOqAW6/dVmomWRHCu3RdLrddJGG','wICVfGZdTX1SbmkinSonra','hSoggrunvwO','oCkwlSkgW686','W48fhmkJW5ZdTgRcOmk2aSolhd0','W7xdNWxcKuVcIvfYWR5mW4zFW4DXkSo5qbXrW78bW7G','B2VcQSkVcSo5dCosWQ0khmomcCkhWORdMulcSmoyAmosWRrUWRzmoq1wrGZcUs/cGCk/nSkzW5FcNCoxWPObuthcG8ozlSk+WQdcOCkoms3cICkeDCkrqSofW6f+WOVcK8kTW5BcIq96yJXqW7BcL3hcOehcUfPMbhhcS3rWug7cGSkqcIjeAGWgymk1mSkwWOfuW7nxW4m4r8kFW53dVSkRW47cVSo5ydxcT8kAaSoSlSoOW5VcPqBdISkQCCo8ESkmzMu9W7ldISkQaCohbJ1SBGmnWQ3dRmozWPldVSkzW7GAWOFcVLldLmk8WQrEWOZdR8kuWO4EWO3dNSoDju1tsvFdIvVcOYRcJSosc8oiWP4neI7cH8oaW4VdLhGVWQ1vemoWWPlcM8ovW51vWR/cH2JcJexdVSooWR91W6q5ohBcGvJcGmodysdcSIqabSkXWOH9mrfOcCkgWOuhdhNcS8k9W4VdLmkCEhBcGSk8WQ9ZdXqXWQ57W5agzZzyWQe5jXNcLCocW67dNIVdQSkdW7eCF8kBW7ykWRtcS0ngWQqBWRfHWRXmW6rzomkeW6HMW53cHmkfoSocWPNdGgRdI8osW5tdISo3Fmk6fZKQxmk0gmorW7NcNIpdQs5muWRcJ8k0WRddLc5jtmo6WPpdQCkRxCkQWQ/dRSkFhg9cWOmjw8o/W4BdQ1nFWRdcIuJcSsRcR8otW5xcLCkyWPVdNCowW5xcU8kJeeLxw3idWOddPmkpWR8QisFdMSopzG/dMxddIhSnbCkXla3cTmoVhLNcT8om'].concat((function(){return['bGXLW5ldTCkgdhxcGmowW6C','WPzBAZjOW7BcVJCiWR04hSoHECkxgCoDWQtdGCoVBmk7kmkYfGRdH8oAWPpdH3hdTc4ZW5ZdJX1kWOxcPCkgWPyxWPxdJ8k2mSkpyeVdIrFcLf3dO1umWP16WPO3WRnaW6xdSLJdJHVcO2rPW6CNBCkpW7tcTtijgZvnE3fqWRbwtum0ESoaW7NcKmoMWQ7cV8kIimkJW5fjDIldKM1LW6q8xmobWPHtFuKXW6uVWR4aACo3a8oBWQaCFCoKW4pcLYX9sMHCWQdcVgnCWRBdKmo2o03cNGRdVd1OAG','WO3dJ8ojWQRcLCojwH41W7y','W7JcUmo7nCkxtwBdOrhcU8kn','emkkwmklEd3cJfdcHw92','wcupW5aYCG','CgpcTuNcQCkbfXWeW7RcGCknaq','dqvSW5RdS8opEh7cSSobW4VdNKq','jZpcI17cG8o4jmkTovG3w8o9'];}()));}()));}());_0x3fda=function(){return _0x4d26b9;};return _0x3fda();};$done({'headers':headers});var version_ = 'jsjiami.com.v7';











































































// Adding a dummy sgmodule commit(29)
// Adding a dummy plugin commit(27)
// Adding a dummy stoverride commit(24)
