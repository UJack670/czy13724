/******************************

脚本功能：Proknockout扣图神器+解锁VIP
下载地址：http://mtw.so/6rugdA
软件版本：7.12
脚本作者：彭于晏💞
更新时间：2022-11-4
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Proknockout.js

[mitm] 

hostname = buy.itunes.apple.com

*******************************/


var objc = JSON.parse($response.body);

    objc = 
{   "environment": "Production",   "receipt": {     "receipt_type": "Production",     "adam_id": 944665061,     "app_item_id": 944665061,     "bundle_id": "com.loveyouchenapps.knockout",     "application_version": "7",     "download_id": 501885870424213139,     "version_external_identifier": 852372578,     "receipt_creation_date": "2022-11-02 08:02:50 Etc/GMT",     "receipt_creation_date_ms": "1667376170000",     "receipt_creation_date_pst": "2022-11-02 01:02:50 America/Los_Angeles",     "request_date": "2022-11-02 08:02:58 Etc/GMT",     "request_date_ms": "1667376178015",     "request_date_pst": "2022-11-02 01:02:58 America/Los_Angeles",     "original_purchase_date": "2022-11-02 07:45:21 Etc/GMT",     "original_purchase_date_ms": "1667375121000",     "original_purchase_date_pst": "2022-11-02 00:45:21 America/Los_Angeles",     "original_application_version": "7",     "in_app": [       {         "quantity": "1",         "product_id": "com.knockout.7daysplus",         "transaction_id": "570001048201527",         "original_transaction_id": "570001048201527",         "purchase_date": "2022-11-02 07:50:54 Etc/GMT",         "purchase_date_ms": "1667375454000",         "purchase_date_pst": "2022-11-02 00:50:54 America/Los_Angeles",         "original_purchase_date": "2022-11-02 07:50:55 Etc/GMT",         "original_purchase_date_ms": "1667375455000",         "original_purchase_date_pst": "2022-11-02 00:50:55 America/Los_Angeles",         "expires_date": "9999-11-05 07:50:54 Etc/GMT",         "expires_date_ms": "1667634654000",         "expires_date_pst": "2022-11-05 00:50:54 America/Los_Angeles",         "web_order_line_item_id": "570000466293761",         "is_trial_period": "true",         "is_in_intro_offer_period": "false",         "in_app_ownership_type": "PURCHASED"       }     ]   },   "latest_receipt_info": [     {       "quantity": "1",       "product_id": "com.knockout.7daysplus",       "transaction_id": "570001048201527",       "original_transaction_id": "570001048201527",       "purchase_date": "2022-11-02 07:50:54 Etc/GMT",       "purchase_date_ms": "1667375454000",       "purchase_date_pst": "2022-11-02 00:50:54 America/Los_Angeles",       "original_purchase_date": "2022-11-02 07:50:55 Etc/GMT",       "original_purchase_date_ms": "1667375455000",       "original_purchase_date_pst": "2022-11-02 00:50:55 America/Los_Angeles",       "expires_date": "9999-11-05 07:50:54 Etc/GMT",       "expires_date_ms": "1667634654000",       "expires_date_pst": "2022-11-05 00:50:54 America/Los_Angeles",       "web_order_line_item_id": "570000466293761",       "is_trial_period": "true",       "is_in_intro_offer_period": "false",       "in_app_ownership_type": "PURCHASED",       "subscription_group_identifier": "20386379"     }   ],   "latest_receipt": "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",   "pending_renewal_info": [     {       "auto_renew_product_id": "com.knockout.7daysplus",       "product_id": "com.knockout.7daysplus",       "original_transaction_id": "570001048201527",       "auto_renew_status": "1"     }   ],   "status": 0 }

$done({body : JSON.stringify(objc)});































































// Adding a dummy sgmodule commit(25)
// Adding a dummy plugin commit(23)
// Adding a dummy stoverride commit(20)
