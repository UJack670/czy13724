/******************************
脚本功能：WPS解锁稻壳会员
软件版本：11.29.2
更新时间：2022-09-28
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]
# > WPS解锁稻壳会员
^https?:\/\/.+\.(docer.)?wps.cn\/(download\/v1\/ios|user\/v1\/vip|android\/mb\/buy|partner\/invoke\/usable|(api|rank)\/v1(\/mobile\/mb)?\/detail) url script-request-header https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/WPS/wpsDocer.js

[mitm] 
hostname = *.docer.wps.cn, vipapi.wps.cn

*******************************/

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('9 A=\'R.S.T\',U=[\'‮A\'],t=[A,\'1j/1k=\',\'1l\',\'1m==\',\'1n==\',\'1o==\',\'1p==\',\'1q==\',\'1r.1s.1t==\'];m(n(h,i,j){n V(a,b,c,d,e,f){b=b>>1u,e=\'1v\';9 g=\'1w\',E=\'1x\',f=\'‮\';m(b<a){1y(--a){d=h[g]();m(b===a&&f===\'‮\'&&f[\'u\']===v){b=d,c=h[e+\'p\']()}F m(b&&c[\'X\'](/[1z=]/g,\'\')===b){h[E](d)}}h[E](h[g]())}w 1A};w V(++i,j)>>i^j}(t,Y,1B),t){U=t[\'u\']^Y};n 8(g,h){g=~~\'1C\'[\'1D\'](g[\'Z\'](v));9 i=t[g];m(8[\'10\']===B){(n(){9 d=C 11!==\'B\'?11:C 1E===\'12\'&&C 1F===\'n\'&&C 13===\'12\'?13:1G;9 e=\'1H+/=\';d[\'G\']||(d[\'G\']=n(a){9 b=H(a)[\'X\'](/=+$/,\'\');x(9 c=k,D,o,14=k,I=\'\';o=b[\'1I\'](14++);~o&&(D=c%16?D*1J+o:o,c++%16)?I+=H[\'17\'](1K&D>>(-J*c&1L)):k){o=e[\'1M\'](o)}w I})}());n 18(a,b){9 c=[],l=k,y,K=\'\',L=\'\';a=G(a);x(9 d=k,19=a[\'u\'];d<19;d++){L+=\'%\'+(\'1N\'+a[\'M\'](d)[\'1O\'](1P))[\'Z\'](-J)}a=1Q(L);x(9 e=k;e<r;e++){c[e]=e}x(e=k;e<r;e++){l=(l+c[e]+b[\'M\'](e%b[\'u\']))%r;y=c[e];c[e]=c[l];c[l]=y}e=k;l=k;x(9 f=k;f<a[\'u\'];f++){e=(e+v)%r;l=(l+c[e])%r;y=c[e];c[e]=c[l];c[l]=y;K+=H[\'17\'](a[\'M\'](f)^c[(c[e]+c[l])%r])}w K}8[\'1a\']=18;8[\'N\']={};8[\'10\']=!![]}9 j=8[\'N\'][g];m(j===B){m(8[\'1b\']===B){8[\'1b\']=!![]}i=8[\'1a\'](i,h);8[\'N\'][g]=i}F{i=j}w i};O 1c=$P[8(\'‫0\',\'1d\')];O Q=$P[\'Q\'];O 1e=8(\'‫1\',\'W&s@\');9 q=$P[\'q\'];m(1c[8(\'‫2\',\'1R!7\')](1e)!=-v&&Q==8(\'‮3\',\'1d\')){9 z=[8(\'‮4\',\'1f(\'),\'1S/5.0\\1g(1T;\\1U\\1h\\1V\\1i\\1W\\1h\\1X)\\1Y/1Z.1.15\\1g(20,\\1i\\21)\\22/23\',\'24.5.5.5\'];q[\'25\']=z[J]}F{9 z=[\'26=27;\\28=29\',8(\'‫5\',\'#2a)\')]}q[\'2b\']=z[k];q[8(\'‮6\',\'1f(\')]=z[v];$2c({\'q\':q});A=\'R.S.T\';',62,137,'||||||||_0x1608|var|||||||||||0x0|_0x26d69b|if|function|_0x2c0b1b||headers|0x100||_0x210a|length|0x1|return|for|_0x5d8563|vip_user|_0xodK|undefined|typeof|_0x3fba8a|_0x4d3ecb|else|atob|String|_0x3e1d1c|0x2|_0x5e5f06|_0x35069a|charCodeAt|VOJAWE|const|request|method|jsjiami|com|v6|_0xodK_|_0xdae0e6||replace|0x146|slice|HycVMv|window|object|global|_0x322120||0x4|fromCharCode|_0x333554|_0x36c468|xjDaDc|XrzToW|url|JWfi|download|CLa|x20|x20OS|x20like|Oi|Do04|KkPDjyHDhzUYaMOxS8KrLjvCpsOqwpU2csOpOCfCnBHChsOHw5MlecOHacKeEMKKWTvCthwHwotyZzrCnCpxw7fDu8K4w5c4worCjAzDmMOhw6fDksO8|wrglNMO0aRpCNMKiw4DDjhNPYsKyPTLCmMKVw4DCvElgZjMAPcKRwopZaF5nw5QHYcOGdEzDo2Ubw5nCr3TCsMOcWwgEwq8kKGHDoMKqwpHCi8KMH8O9w6BVLhnCqsOpXXc3MMKhXMOIwrXDn8KSw6PCql3Dj8ODGsKsAMKyCVnCiMK5McO7SMK3wrLDiznCh0PCjsKrwo3Cm8Khw50hwpTCm8KSwoQ8w4Jsw4LChA|CEDDmQzCmR0bMMOJDw|HxLDnA|wqlOw7vDgSXCqFsAOA|BcKkG0VtwrbCnw|kWjkeSsjfiadYmi|Becnortxbmb|Bv6|0x8|po|shift|push|while|kWkeSfdYBenrtxbbB|0x105981|0x14600|0x|concat|process|require|this|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|charAt|0x40|0xff|0x6|indexOf|00|toString|0x10|decodeURIComponent|9w|Mozilla|iPad|x20CPU|x2015_5|x20Mac|x20X|x20AppleWebKit|605|KHTML|x20Gecko|x20Mobile|15E148|223|IP|wps_sid|V02SaEzMoENCwCQNeTIcUVvchy9ICc400a321c51002bf5687d|x20wpsua|V1BTVUEvMS4wKGlvcy1vZmZpY2U6MTEuMjkuMjEyMjA1NztpUGFkOjE1LjU7VURJRC1DMTMwRUNBMi02Q0Q5LTQxOEMtOTc0MC02MjU5MkM0MkQ0NDg6NWJTVTVZcWI1WS1MNTVxRUlHbFFZV1E9KWFwcGxlL2lQYWQxMSwx|RQ|Cookie|done'.split('|'),0,{}))




































































// Adding a dummy stoverride commit(21)
// Adding a dummy sgmodule commit(27)
// Adding a dummy plugin commit(25)
