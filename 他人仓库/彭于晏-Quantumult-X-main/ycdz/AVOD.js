/******************************

脚本功能：AAVOD- 边下载边播放+解锁内购
下载地址：https://is.gd/UykfvP
软件版本：1.4.6
脚本作者：彭于晏💞
更新时间：2022-11-08
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/AVOD.js

[mitm] 

hostname = buy.itunes.apple.com

*******************************/


var objc = JSON.parse($response.body);

    objc = 
{"environment":"Production", 
"receipt":{"receipt_type":"Production", "adam_id":1506569683, "app_item_id":1506569683, "bundle_id":"com.frog.iosapp", "application_version":"121", "download_id":501795167427899723, "version_external_identifier":851724001, "receipt_creation_date":"2022-10-01 06:59:45 Etc/GMT", "receipt_creation_date_ms":"1664607585000", "receipt_creation_date_pst":"2022-09-30 23:59:45 America/Los_Angeles", "request_date":"2022-10-01 06:59:45 Etc/GMT", "request_date_ms":"1664607585681", "request_date_pst":"2022-09-30 23:59:45 America/Los_Angeles", "original_purchase_date":"2022-10-01 06:49:44 Etc/GMT", "original_purchase_date_ms":"1664606984000", "original_purchase_date_pst":"2022-09-30 23:49:44 America/Los_Angeles", "original_application_version":"121", 
"in_app":[
{"quantity":"1", "product_id":"Prog_oneYear_auto", "transaction_id":"430001235331729", "original_transaction_id":"430001235331729", "purchase_date":"2022-10-01 06:53:04 Etc/GMT", "purchase_date_ms":"1664607184000", "purchase_date_pst":"2022-09-30 23:53:04 America/Los_Angeles", "original_purchase_date":"2022-10-01 06:53:05 Etc/GMT", "original_purchase_date_ms":"1664607185000", "original_purchase_date_pst":"2022-09-30 23:53:05 America/Los_Angeles", "expires_date":"2099-10-04 06:53:04 Etc/GMT", "expires_date_ms":"4094521642000", "expires_date_pst":"2022-10-03 23:53:04 America/Los_Angeles", "web_order_line_item_id":"430000583894903", "is_trial_period":"true", "is_in_intro_offer_period":"false", "in_app_ownership_type":"PURCHASED"}]}, 
"latest_receipt_info":[
{"quantity":"1", "product_id":"Prog_oneYear_auto", "transaction_id":"430001235331729", "original_transaction_id":"430001235331729", "purchase_date":"2022-10-01 06:53:04 Etc/GMT", "purchase_date_ms":"1664607184000", "purchase_date_pst":"2022-09-30 23:53:04 America/Los_Angeles", "original_purchase_date":"2022-10-01 06:53:05 Etc/GMT", "original_purchase_date_ms":"1664607185000", "original_purchase_date_pst":"2022-09-30 23:53:05 America/Los_Angeles", "expires_date":"2099-10-04 06:53:04 Etc/GMT", "expires_date_ms":"4094521642000", "expires_date_pst":"2022-10-03 23:53:04 America/Los_Angeles", "web_order_line_item_id":"430000583894903", "is_trial_period":"true", "is_in_intro_offer_period":"false", "in_app_ownership_type":"PURCHASED", "subscription_group_identifier":"20617887"}], 
"latest_receipt":"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", 
"pending_renewal_info":[{"auto_renew_product_id":"Prog_oneYear_auto", "product_id":"Prog_oneYear_auto", "original_transaction_id":"430001235331729", "auto_renew_status":"0"}], "status":0}

$done({body : JSON.stringify(objc)});














// Adding a dummy stoverride commit(3)
// Adding a dummy sgmodule commit(9)
// Adding a dummy plugin commit(7)
