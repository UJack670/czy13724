/******************************

脚本功能：过期啦——解锁VIP
下载地址：https://is.gd/bawLoF
软件版本：2.9.8
脚本作者：彭于晏💞
更新时间：2022-11-4
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/expire\.vanemu\.com\/1\.1\/functions\/getUserInfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/gql.js

[mitm] 

hostname = expire.vanemu.com

*******************************/

body = $response.body.replace(/\"user_is_pro":\w+/g, '\"user_is_pro":true').replace(/\"group_is_pro":\w+/g, '\"group_is_pro":true')

$done({body});




























// Adding a dummy plugin commit(11)
// Adding a dummy stoverride commit(8)
// Adding a dummy sgmodule commit(14)
