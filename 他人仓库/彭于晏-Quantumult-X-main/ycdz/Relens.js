/******************************

脚本功能：Relens大光圈单反相机——解锁订阅
下载地址：https://is.gd/ZfINhA
软件版本：1.8.6
脚本作者：彭于晏💞
更新时间：2022-11-26
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Relens.js

[mitm] 

hostname = buy.itunes.apple.com

*******************************/


var objc = JSON.parse($response.body);

    objc = 
{"environment":"Production",  "receipt":{"receipt_type":"Production", "adam_id":1638027598, "app_item_id":1638027598, "bundle_id":"com.risingcabbage.pro.camera", "application_version":"39", "download_id":501951703297919672, "version_external_identifier":853493010, "receipt_creation_date":"2022-11-25 14:17:44 Etc/GMT", "receipt_creation_date_ms":"1669385864000", "receipt_creation_date_pst":"2022-11-25 06:17:44 America/Los_Angeles", "request_date":"2022-11-25 14:21:35 Etc/GMT", "request_date_ms":"1669386095506", "request_date_pst":"2022-11-25 06:21:35 America/Los_Angeles", "original_purchase_date":"2022-11-25 13:48:00 Etc/GMT", "original_purchase_date_ms":"1669384080000", "original_purchase_date_pst":"2022-11-25 05:48:00 America/Los_Angeles", "original_application_version":"39",  "in_app":[ {"quantity":"1", "product_id":"com.risingcabbage.pro.camera.yearlysubscription", "transaction_id":"180001445791312", "original_transaction_id":"180001445791312", "purchase_date":"2022-11-25 14:17:41 Etc/GMT", "purchase_date_ms":"1669385861000", "purchase_date_pst":"2022-11-25 06:17:41 America/Los_Angeles", "original_purchase_date":"2022-11-25 14:17:43 Etc/GMT", "original_purchase_date_ms":"1669385863000", "original_purchase_date_pst":"2022-11-25 06:17:43 America/Los_Angeles", "expires_date":"2099-11-28 14:17:41 Etc/GMT", "expires_date_ms":"1669645061000", "expires_date_pst":"2099-11-28 06:17:41 America/Los_Angeles", "web_order_line_item_id":"180000662263505", "is_trial_period":"true", "is_in_intro_offer_period":"false", "in_app_ownership_type":"PURCHASED"}]},  "latest_receipt_info":[ {"quantity":"1", "product_id":"com.risingcabbage.pro.camera.yearlysubscription", "transaction_id":"180001445791312", "original_transaction_id":"180001445791312", "purchase_date":"2022-11-25 14:17:41 Etc/GMT", "purchase_date_ms":"1669385861000", "purchase_date_pst":"2022-11-25 06:17:41 America/Los_Angeles", "original_purchase_date":"2022-11-25 14:17:43 Etc/GMT", "original_purchase_date_ms":"1669385863000", "original_purchase_date_pst":"2022-11-25 06:17:43 America/Los_Angeles", "expires_date":"2099-11-28 14:17:41 Etc/GMT", "expires_date_ms":"1669645061000", "expires_date_pst":"2099-11-28 06:17:41 America/Los_Angeles", "web_order_line_item_id":"180000662263505", "is_trial_period":"true", "is_in_intro_offer_period":"false", "in_app_ownership_type":"PURCHASED", "subscription_group_identifier":"21007939"}],  "latest_receipt":"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",  "pending_renewal_info":[ {"auto_renew_product_id":"com.risingcabbage.pro.camera.yearlysubscription", "product_id":"com.risingcabbage.pro.camera.yearlysubscription", "original_transaction_id":"180001445791312", "auto_renew_status":"1"}], "status":0}

$done({body : JSON.stringify(objc)});















// Adding a dummy sgmodule commit(9)
// Adding a dummy plugin commit(7)
// Adding a dummy stoverride commit(4)
