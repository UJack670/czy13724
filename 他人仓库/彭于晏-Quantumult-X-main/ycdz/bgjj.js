/******************************

脚本功能：不咕剪辑+解锁订阅
下载地址：https://is.gd/9BBDBq
软件版本：2.1.401
脚本作者：彭于晏💞
更新时间：2022-10-22
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/bgjj.js

[mitm] 

hostname = buy.itunes.apple.com

*******************************/


var objc = JSON.parse($response.body);

    objc = 
{"environment":"Production", 
"receipt":{"receipt_type":"Production", "adam_id":1528288216, "app_item_id":1528288216, "bundle_id":"com.yitian.timeline", "application_version":"0", "download_id":501693507126185989, "version_external_identifier":850863123, "receipt_creation_date":"2022-08-26 09:29:44 Etc/GMT", "receipt_creation_date_ms":"1661506184000", "receipt_creation_date_pst":"2022-08-26 02:29:44 America/Los_Angeles", "request_date":"2022-08-26 09:29:47 Etc/GMT", "request_date_ms":"1661506187550", "request_date_pst":"2022-08-26 02:29:47 America/Los_Angeles", "original_purchase_date":"2022-08-26 09:02:29 Etc/GMT", "original_purchase_date_ms":"1661504549000", "original_purchase_date_pst":"2022-08-26 02:02:29 America/Los_Angeles", "original_application_version":"0", 
"in_app":[
{"quantity":"1", "product_id":"com.yitian.versa.cooclip_year_subscribe", "transaction_id":"430001205957458", "original_transaction_id":"430001205957458", "purchase_date":"2022-08-26 09:28:21 Etc/GMT", "purchase_date_ms":"1661506101000", "purchase_date_pst":"2022-08-26 02:28:21 America/Los_Angeles", "original_purchase_date":"2022-08-26 09:28:22 Etc/GMT", "original_purchase_date_ms":"1661506102000", "original_purchase_date_pst":"2022-08-26 02:28:22 America/Los_Angeles", "expires_date":"9999-08-29 09:28:21 Etc/GMT", "expires_date_ms":"1661765301000", "expires_date_pst":"9999-08-29 02:28:21 America/Los_Angeles", "web_order_line_item_id":"430000568863631", "is_trial_period":"true", "is_in_intro_offer_period":"false", "in_app_ownership_type":"PURCHASED"}]}, 
"latest_receipt_info":[
{"quantity":"1", "product_id":"com.yitian.versa.cooclip_year_subscribe", "transaction_id":"430001205957458", "original_transaction_id":"430001205957458", "purchase_date":"2022-08-26 09:28:21 Etc/GMT", "purchase_date_ms":"1661506101000", "purchase_date_pst":"2022-08-26 02:28:21 America/Los_Angeles", "original_purchase_date":"2022-08-26 09:28:22 Etc/GMT", "original_purchase_date_ms":"1661506102000", "original_purchase_date_pst":"2022-08-26 02:28:22 America/Los_Angeles", "expires_date":"9999-08-29 09:28:21 Etc/GMT", "expires_date_ms":"1661765301000", "expires_date_pst":"9999-08-29 02:28:21 America/Los_Angeles", "web_order_line_item_id":"430000568863631", "is_trial_period":"true", "is_in_intro_offer_period":"false", "in_app_ownership_type":"PURCHASED", "subscription_group_identifier":"20943601"}], 
"latest_receipt":"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", 
"pending_renewal_info":[
{"auto_renew_product_id":"com.yitian.versa.cooclip_year_subscribe", "product_id":"com.yitian.versa.cooclip_year_subscribe", "original_transaction_id":"430001205957458", "auto_renew_status":"1"}], "status":0}

$done({body : JSON.stringify(objc)});
// Adding a dummy sgmodule commit(2)
