/*
 本地解锁StormSniffer
 只是修改显示尊重原创
# 脚本制作 @NobyDa_Chat @wangfei021325
# 加密来源 @PayNe
====================================
[rewrite_local]
^https?:\/\/api\.x-storm\.com\/app\/(user-profile|share-code\/get)\/$ url script-response-body https://raw.githubusercontent.com/Yu9191/Script/main/sssnnn.js

[mitm]
hostname = *.x-storm.com
====================================
*/

int();
let url = $request.url, body = $response.body, headers = $request.headers;
let uid = headers.uid, time = headers.t, key = '29hgfhdfv78344' + uid, huihui = '\u006C\u006F\u0076\u0065\u0062\u0061\u0062\u0079\u0066\u006F\u0072\u0065\u0076\u0065\u0072@ios151', data;

if (url == 'https://api.x-storm.com/app/user-profile/') {
    data = `{"uid":"${uid}","userID":10086,"isVip":1,"member_type":2,"member_title":"${huihui}","expire_on":"谁也不想放弃","auth_quantity":999999999,"auth_mail":"","is_primary":0,"trail_status":0,"function_list":[1,2,3,4,5],"can_deauthorize":true,"timestamp":${time},"ts":1}`;
    data = l.btoa(l.encrypt(data, key));
} else if (url == 'https://api.x-storm.com/app/share-code/get/') {
    let obj = JSON.parse(body);
    data = l.decrypt(l.atob(obj.data), key);
    data = data.replace(/title\"\: \"(.+?)\"/g, `title": "$1${huihui}"`).replace(/is_encrypt\"\: \d/g, 'is_encrypt": 0').replace(/user\"\: \d+/g, 'user": 10086');
    data = l.btoa(l.encrypt(data, key));
}
body = `{"code":200,"data":"${data}","msg":"success","status":"success"}`;
$done({body});


function int(){l={DELTA:2654435769,a:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),b:[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1],btoa(r){let t,e,n,o,a,c,i;for(e=n=0,o=r.length,c=(o-=a=o%3)/3<<2,a>0&&(c+=4),t=new Array(c);e<o;)i=r.charCodeAt(e++)<<16|r.charCodeAt(e++)<<8|r.charCodeAt(e++),t[n++]=l.a[i>>18]+l.a[i>>12&63]+l.a[i>>6&63]+l.a[63&i];return 1===a?(i=r.charCodeAt(e++),t[n++]=`${l.a[i>>2]+l.a[(3&i)<<4]}==`):2===a&&(i=r.charCodeAt(e++)<<8|r.charCodeAt(e++),t[n++]=`${l.a[i>>10]+l.a[i>>4&63]+l.a[(15&i)<<2]}=`),t.join("")},atob(r){let t,e,n,o,a,c,i,h,d,s;if((i=r.length)%4!=0||/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(r))return"";for(d=i,(h="="===r.charAt(i-2)?1:"="===r.charAt(i-1)?2:0)>0&&(d-=4),d=3*(d>>2)+h,s=new Array(d),a=c=0;a<i&&-1!==(t=l.b[r.charCodeAt(a++)])&&-1!==(e=l.b[r.charCodeAt(a++)])&&(s[c++]=String.fromCharCode(t<<2|(48&e)>>4),-1!==(n=l.b[r.charCodeAt(a++)]))&&(s[c++]=String.fromCharCode((15&e)<<4|(60&n)>>2),-1!==(o=l.b[r.charCodeAt(a++)]));)s[c++]=String.fromCharCode((3&n)<<6|o);return s.join("")},toBinaryString(r,t){const e=r.length;let n=e<<2;if(t){const t=r[e-1];if(t<(n-=4)-3||t>n)return null;n=t}for(let t=0;t<e;t++)r[t]=String.fromCharCode(255&r[t],r[t]>>>8&255,r[t]>>>16&255,r[t]>>>24&255);const o=r.join("");return t?o.substring(0,n):o},toUint32Array(r,t){const e=r.length;let n,o=e>>2;3&e&&++o,t?(n=new Array(o+1))[o]=e:n=new Array(o);for(let t=0;t<e;++t)n[t>>2]|=r.charCodeAt(t)<<((3&t)<<3);return n},int32:r=>4294967295&r,mx:(r,t,e,n,o,a)=>(e>>>5^t<<2)+(t>>>3^e<<4)^(r^t)+(a[3&n^o]^e),fixk:r=>(r.length<4&&(r.length=4),r),encryptUint32Array(r,t){const e=r.length,n=e-1;let o,a,c,i,h,d;for(a=r[n],c=0,d=0|Math.floor(6+52/e);d>0;--d){for(i=(c=l.int32(c+l.DELTA))>>>2&3,h=0;h<n;++h)o=r[h+1],a=r[h]=l.int32(r[h]+l.mx(c,o,a,h,i,t));o=r[0],a=r[n]=l.int32(r[n]+l.mx(c,o,a,n,i,t))}return r},decryptUint32Array(r,t){const e=r.length,n=e-1;let o,a,c,i,h,d;for(o=r[0],d=Math.floor(6+52/e),c=l.int32(d*l.DELTA);0!==c;c=l.int32(c-l.DELTA)){for(i=c>>>2&3,h=n;h>0;--h)a=r[h-1],o=r[h]=l.int32(r[h]-l.mx(c,o,a,h,i,t));a=r[n],o=r[0]=l.int32(r[0]-l.mx(c,o,a,0,i,t))}return r},utf8Encode(r){if(/^[\x00-\x7F]*$/.test(r))return r;const t=[],e=r.length;for(let n=0,o=0;n<e;++n,++o){const a=r.charCodeAt(n);if(a<128)t[o]=r.charAt(n);else if(a<2048)t[o]=String.fromCharCode(192|a>>6,128|63&a);else{if(!(a<55296||a>57343)){if(n+1<e){const e=r.charCodeAt(n+1);if(a<56320&&e>=56320&&e<=57343){const r=65536+((1023&a)<<10|1023&e);t[o]=String.fromCharCode(240|r>>18&63,128|r>>12&63,128|r>>6&63,128|63&r),++n;continue}}throw new Error("Malformed string")}t[o]=String.fromCharCode(224|a>>12,128|a>>6&63,128|63&a)}}return t.join("")},utf8DecodeShortString(r,t){const e=new Array(t);let n=0,o=0;for(let a=r.length;n<t&&o<a;n++){const t=r.charCodeAt(o++);switch(t>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:e[n]=t;break;case 12:case 13:if(!(o<a))throw new Error("Unfinished UTF-8 octet sequence");e[n]=(31&t)<<6|63&r.charCodeAt(o++);break;case 14:if(!(o+1<a))throw new Error("Unfinished UTF-8 octet sequence");e[n]=(15&t)<<12|(63&r.charCodeAt(o++))<<6|63&r.charCodeAt(o++);break;case 15:if(!(o+2<a))throw new Error("Unfinished UTF-8 octet sequence");{const a=((7&t)<<18|(63&r.charCodeAt(o++))<<12|(63&r.charCodeAt(o++))<<6|63&r.charCodeAt(o++))-65536;if(!(a>=0&&a<=1048575))throw new Error(`Character outside valid Unicode range:0x${a.toString(16)}`);e[n++]=a>>10&1023|55296,e[n]=1023&a|56320}break;default:throw new Error(`Bad UTF-8 encoding 0x${t.toString(16)}`)}}return n<t&&(e.length=n),String.fromCharCode.apply(String,e)},utf8DecodeLongString(r,t){const e=[],n=new Array(32768);let o=0,a=0;for(let c=r.length;o<t&&a<c;o++){const i=r.charCodeAt(a++);switch(i>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:n[o]=i;break;case 12:case 13:if(!(a<c))throw new Error("Unfinished UTF-8 octet sequence");n[o]=(31&i)<<6|63&r.charCodeAt(a++);break;case 14:if(!(a+1<c))throw new Error("Unfinished UTF-8 octet sequence");n[o]=(15&i)<<12|(63&r.charCodeAt(a++))<<6|63&r.charCodeAt(a++);break;case 15:if(!(a+2<c))throw new Error("Unfinished UTF-8 octet sequence");{const t=((7&i)<<18|(63&r.charCodeAt(a++))<<12|(63&r.charCodeAt(a++))<<6|63&r.charCodeAt(a++))-65536;if(!(t>=0&&t<=1048575))throw new Error(`Character outside valid Unicode range:0x${t.toString(16)}`);n[o++]=t>>10&1023|55296,n[o]=1023&t|56320}break;default:throw new Error(`Bad UTF-8 encoding 0x${i.toString(16)}`)}if(o>=32766){const r=o+1;n.length=r,e[e.length]=String.fromCharCode.apply(String,n),t-=r,o=-1}}return o>0&&(n.length=o,e[e.length]=String.fromCharCode.apply(String,n)),e.join("")},utf8Decode:(r,t)=>((null==t||t<0)&&(t=r.length),0===t?"":/^[\x00-\x7F]*$/.test(r)||!/^[\x00-\xFF]*$/.test(r)?t===r.length?r:r.substr(0,t):t<32767?l.utf8DecodeShortString(r,t):l.utf8DecodeLongString(r,t)),encrypt:(r,t)=>null==r||0===r.length?r:(r=l.utf8Encode(r),t=l.utf8Encode(t),l.toBinaryString(l.encryptUint32Array(l.toUint32Array(r,!0),l.fixk(l.toUint32Array(t,!1))),!1)),decrypt:(r,t)=>null==r||0===r.length?r:(t=l.utf8Encode(t),l.utf8Decode(l.toBinaryString(l.decryptUint32Array(l.toUint32Array(r,!1),l.fixk(l.toUint32Array(t,!1))),!0)))}}















// Adding a dummy sgmodule commit(9)
// Adding a dummy plugin commit(7)
// Adding a dummy stoverride commit(4)
