/*

项目名称：MorpholidTrace解锁Pro
下载地址：https://t.cn/A60aDqsm
软件说明：草图CAD建筑师设计师专用工具
脚本作者：@ios151
使用声明：仅供参考，禁止转载与售卖！


[rewrite_local]
^https:\/\/www\.mymorpholio\.com\/api\/index\.php\/rest_iap\/receipt url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/MorpholioTrace.js

[mitm]
hostname = www.mymorpholio.com

*/

var _0xodb='jsjiami.com.v6',_0xodb_=function(){return['_0xodb'],_0x4cc6=[_0xodb,'\x70\x61\x72\x73\x65','\x62\x6f\x64\x79','\x72\x65\x63\x65\x69\x70\x74','\x62\x75\x6e\x64\x6c\x65\x5f\x69\x64','\x63\x6f\x6d\x2e\x6d\x6f\x72\x70\x68\x6f\x6c\x69\x6f\x61\x70\x70\x73\x2e\x74\x72\x61\x63\x65','\x69\x6e\x5f\x61\x70\x70','\x66\x6f\x72\x45\x61\x63\x68','\x70\x72\x6f\x64\x75\x63\x74\x5f\x69\x64','\x63\x6f\x6d\x2e\x6d\x6f\x72\x70\x68\x6f\x6c\x69\x6f\x2e\x74\x72\x61\x63\x65\x2e\x70\x72\x6f\x31\x79\x72','\x50\x72\x6f\x64\x75\x63\x74\x69\x6f\x6e','\x32\x30\x32\x33\x2d\x30\x36\x2d\x30\x36\x20\x31\x36\x3a\x30\x36\x3a\x32\x36\x20\x45\x74\x63\x2f\x47\x4d\x54','\x31\x36\x38\x36\x30\x36\x35\x36\x31\x32\x30\x30\x30','\x32\x30\x39\x39\x2d\x30\x39\x2d\x30\x39\x20\x30\x39\x3a\x30\x39\x3a\x30\x39\x20\x45\x74\x63\x2f\x47\x4d\x54','\x32\x30\x39\x39\x2d\x30\x39\x2d\x30\x39\x20\x30\x36\x3a\x30\x36\x3a\x30\x36\x20\x41\x6d\x65\x72\x69\x63\x61\x2f\x4c\x6f\x73\x5f\x41\x6e\x67\x65\x6c\x65\x73','\x66\x61\x6c\x73\x65','\x34\x39\x30\x30\x30\x31\x33\x31\x34\x35\x32\x30\x30\x30\x30','\x32\x30\x32\x33\x2d\x30\x36\x2d\x30\x36\x20\x31\x36\x3a\x30\x36\x3a\x30\x36\x20\x45\x74\x63\x2f\x47\x4d\x54','\x32\x30\x32\x33\x2d\x30\x36\x2d\x30\x36\x20\x30\x36\x3a\x30\x36\x3a\x30\x37\x20\x41\x6d\x65\x72\x69\x63\x61\x2f\x4c\x6f\x73\x5f\x41\x6e\x67\x65\x6c\x65\x73','\x50\x55\x52\x43\x48\x41\x53\x45\x44','\x31\x36\x38\x36\x30\x36\x35\x36\x31\x33\x30\x30\x30','\x34\x39\x30\x30\x30\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39','\x34\x30\x39\x32\x35\x39\x39\x33\x34\x39\x30\x30\x30','\x32\x30\x32\x33\x2d\x30\x36\x2d\x30\x36\x20\x30\x36\x3a\x30\x36\x3a\x30\x36\x20\x41\x6d\x65\x72\x69\x63\x61\x2f\x4c\x6f\x73\x5f\x41\x6e\x67\x65\x6c\x65\x73','\x32\x30\x32\x33\x2d\x30\x36\x2d\x30\x36\x20\x31\x36\x3a\x30\x36\x3a\x30\x37\x20\x45\x74\x63\x2f\x47\x4d\x54','\x32\x30\x32\x33\x2d\x30\x36\x2d\x30\x36\x20\x31\x36\x3a\x30\x30\x3a\x30\x30\x20\x45\x74\x63\x2f\x47\x4d\x54','\x32\x30\x32\x33\x2d\x30\x36\x2d\x30\x36\x20\x30\x36\x3a\x30\x36\x3a\x32\x36\x20\x41\x6d\x65\x72\x69\x63\x61\x2f\x4c\x6f\x73\x5f\x41\x6e\x67\x65\x6c\x65\x73','\x32\x30\x32\x33\x2d\x30\x36\x2d\x30\x36\x20\x31\x36\x3a\x30\x36\x3a\x32\x37\x20\x45\x74\x63\x2f\x47\x4d\x54','\x32\x30\x32\x33\x2d\x30\x36\x2d\x30\x36\x20\x30\x36\x3a\x30\x36\x3a\x32\x37\x20\x41\x6d\x65\x72\x69\x63\x61\x2f\x4c\x6f\x73\x5f\x41\x6e\x67\x65\x6c\x65\x73','\x31\x36\x38\x36\x30\x36\x35\x36\x33\x35\x30\x30\x30','\x32\x30\x32\x33\x2d\x30\x36\x2d\x30\x36\x20\x30\x36\x3a\x30\x30\x3a\x30\x30\x20\x41\x6d\x65\x72\x69\x63\x61\x2f\x4c\x6f\x73\x5f\x41\x6e\x67\x65\x6c\x65\x73','\x32\x30\x32\x32\x30\x38\x30\x31\x31\x31\x31\x39','\x31\x36\x38\x36\x30\x36\x35\x34\x33\x30\x30\x30\x30','\x31\x36\x38\x36\x30\x36\x35\x36\x33\x34\x30\x30\x30','\x69\x6f\x73\x31\x35\x31','\u4ec5\u4f9b\u5b66\u4e60\uff0c\u7981\u6b62\u8f6c\u8f7d\u6216\u552e\u5356','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x74\x2e\x6d\x65\x2f\x69\x6f\x73\x31\x35\x31','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x71\x6a\x4f\x73\x55\x46\x6a\x69\x4e\x6e\x4f\x47\x61\x6d\x58\x69\x2e\x4a\x74\x42\x63\x66\x7a\x6b\x6f\x6d\x2e\x76\x36\x3d\x3d'];}();function _0x327d(_0x54e55b,_0x4b2226){_0x54e55b=~~'0x'['concat'](_0x54e55b['slice'](0x0));var _0x551726=_0x4cc6[_0x54e55b];return _0x551726;};(function(_0x35d2cb,_0xfa9b7){var _0x33d3b4=0x0;for(_0xfa9b7=_0x35d2cb['shift'](_0x33d3b4>>0x2);_0xfa9b7&&_0xfa9b7!==(_0x35d2cb['pop'](_0x33d3b4>>0x3)+'')['replace'](/[qOUFNnOGXJtBfzk=]/g,'');_0x33d3b4++){_0x33d3b4=_0x33d3b4^0x135205;}}(_0x4cc6,_0x327d));var ios151=JSON[_0x327d('0')]($response[_0x327d('1')]);ios151[_0x327d('2')][_0x327d('3')]=_0x327d('4');ios151[_0x327d('2')][_0x327d('5')][_0x327d('6')](_0x119402=>{_0x119402[_0x327d('7')]=_0x327d('8');});ios151={'status':0x0,'receipt':{'receipt_type':_0x327d('9'),'app_item_id':0x5fe3ee24,'receipt_creation_date':_0x327d('a'),'bundle_id':_0x327d('4'),'in_app':[{'quantity':'\x31','purchase_date_ms':_0x327d('b'),'expires_date':_0x327d('c'),'expires_date_pst':_0x327d('d'),'is_in_intro_offer_period':_0x327d('e'),'transaction_id':_0x327d('f'),'is_trial_period':_0x327d('e'),'original_transaction_id':_0x327d('f'),'purchase_date':_0x327d('10'),'product_id':_0x327d('8'),'original_purchase_date_pst':_0x327d('11'),'in_app_ownership_type':_0x327d('12'),'original_purchase_date_ms':_0x327d('13'),'web_order_line_item_id':_0x327d('14'),'expires_date_ms':_0x327d('15'),'purchase_date_pst':_0x327d('16'),'original_purchase_date':_0x327d('17')}],'original_purchase_date':_0x327d('18'),'adam_id':0x5fe3ee24,'receipt_creation_date_pst':_0x327d('19'),'request_date':_0x327d('1a'),'request_date_pst':_0x327d('1b'),'version_external_identifier':0x34fb5e38,'request_date_ms':_0x327d('1c'),'original_purchase_date_pst':_0x327d('1d'),'application_version':_0x327d('1e'),'original_purchase_date_ms':_0x327d('1f'),'receipt_creation_date_ms':_0x327d('20'),'original_application_version':_0x327d('1e'),'download_id':0x94079cd1a42aa80},'Author':_0x327d('21'),'latest_receipt_info':[{'quantity':'\x31','purchase_date_ms':_0x327d('b'),'expires_date':_0x327d('c'),'expires_date_pst':_0x327d('d'),'is_in_intro_offer_period':_0x327d('e'),'transaction_id':_0x327d('f'),'is_trial_period':_0x327d('e'),'original_transaction_id':_0x327d('f'),'purchase_date':_0x327d('10'),'product_id':_0x327d('8'),'original_purchase_date_pst':_0x327d('11'),'in_app_ownership_type':_0x327d('12'),'original_purchase_date_ms':_0x327d('13'),'web_order_line_item_id':_0x327d('14'),'expires_date_ms':_0x327d('15'),'purchase_date_pst':_0x327d('16'),'original_purchase_date':_0x327d('17')}],'latest_receipt':_0x327d('21'),'environment':_0x327d('9'),'pending_renewal_info':[{'product_id':_0x327d('8'),'original_transaction_id':_0x327d('f'),'auto_renew_product_id':_0x327d('8'),'auto_renew_status':'\x31'}],'warning':_0x327d('22'),'Telegram':_0x327d('23')};$done({'\x62\x6f\x64\x79':JSON[_0x327d('24')](ios151)});;_0xodb='jsjiami.com.v6';

























// Adding a dummy plugin commit(10)
// Adding a dummy stoverride commit(7)
// Adding a dummy sgmodule commit(13)
