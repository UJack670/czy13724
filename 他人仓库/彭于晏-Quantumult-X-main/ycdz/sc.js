/******************************

脚本功能：色采 -配色助手+解锁订阅
下载地址：https://is.gd/G3Dw6r
软件版本：2.6.7
脚本作者：彭于晏💞
更新时间：2022-10-12
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/sc.js

[mitm] 

hostname = buy.itunes.apple.com

*******************************/


var objc = JSON.parse($response.body);

    objc = 
{"environment":"Production", 
"receipt":{"receipt_type":"Production", "adam_id":1295506659, "app_item_id":1295506659, "bundle_id":"FuYuan.inkDiary", "application_version":"273", "download_id":501823224252086983, "version_external_identifier":852412438, "receipt_creation_date":"2022-10-11 04:49:33 Etc/GMT", "receipt_creation_date_ms":"1665463773000", "receipt_creation_date_pst":"2022-10-10 21:49:33 America/Los_Angeles", "request_date":"2022-10-11 04:49:47 Etc/GMT", "request_date_ms":"1665463787771", "request_date_pst":"2022-10-10 21:49:47 America/Los_Angeles", "original_purchase_date":"2022-10-11 04:41:31 Etc/GMT", "original_purchase_date_ms":"1665463291000", "original_purchase_date_pst":"2022-10-10 21:41:31 America/Los_Angeles", "original_application_version":"273", 
"in_app":[
{"quantity":"1", "product_id":"FuYuan.inkDiary.YearB.Pro", "transaction_id":"430001243441642", "original_transaction_id":"430001243441642", "purchase_date":"2022-10-11 04:49:32 Etc/GMT", "purchase_date_ms":"1665463772000", "purchase_date_pst":"2022-10-10 21:49:32 America/Los_Angeles", "original_purchase_date":"2022-10-11 04:49:33 Etc/GMT", "original_purchase_date_ms":"1665463773000", "original_purchase_date_pst":"2022-10-10 21:49:33 America/Los_Angeles", "expires_date":"2099-10-14 04:49:32 Etc/GMT", "expires_date_ms":"4095377449000", "expires_date_pst":"2022-10-13 21:49:32 America/Los_Angeles", "web_order_line_item_id":"430000588334336", "is_trial_period":"true", "is_in_intro_offer_period":"false", "in_app_ownership_type":"PURCHASED"}]}, 
"latest_receipt_info":[
{"quantity":"1", "product_id":"FuYuan.inkDiary.YearB.Pro", "transaction_id":"430001243441642", "original_transaction_id":"430001243441642", "purchase_date":"2022-10-11 04:49:32 Etc/GMT", "purchase_date_ms":"1665463772000", "purchase_date_pst":"2022-10-10 21:49:32 America/Los_Angeles", "original_purchase_date":"2022-10-11 04:49:33 Etc/GMT", "original_purchase_date_ms":"1665463773000", "original_purchase_date_pst":"2022-10-10 21:49:33 America/Los_Angeles", "expires_date":"2099-10-14 04:49:32 Etc/GMT", "expires_date_ms":"4095377449000", "expires_date_pst":"2022-10-13 21:49:32 America/Los_Angeles", "web_order_line_item_id":"430000588334336", "is_trial_period":"true", "is_in_intro_offer_period":"false", "in_app_ownership_type":"PURCHASED", "subscription_group_identifier":"20505308"}], 
"latest_receipt":"MIIUBQYJKoZIhvcNAQcCoIIT9jCCE/ICAQExCzAJBgUrDgMCGgUAMIIDpgYJKoZIhvcNAQcBoIIDlwSCA5MxggOPMAoCARQCAQEEAgwAMAsCARkCAQEEAwIBAzAMAgEKAgEBBAQWAjQrMAwCAQ4CAQEEBAICAQAwDQIBAwIBAQQFDAMyNzMwDQIBDQIBAQQFAgMCSlUwDQIBEwIBAQQFDAMyNzMwDgIBAQIBAQQGAgRNN9zjMA4CAQkCAQEEBgIEUDI1NjAOAgELAgEBBAYCBAcVVsswDgIBEAIBAQQGAgQyzsgWMBICAQ8CAQEECgIIBvbVkE2WOscwFAIBAAIBAQQMDApQcm9kdWN0aW9uMBgCAQQCAQIEEHiky6mW6XOtncDuGNqMIvMwGQIBAgIBAQQRDA9GdVl1YW4uaW5rRGlhcnkwHAIBBQIBAQQUEvlOeGxt6SfNbZHNgK+U29NSSZ0wHgIBCAIBAQQWFhQyMDIyLTEwLTExVDA0OjQ5OjMzWjAeAgEMAgEBBBYWFDIwMjItMTAtMTFUMDQ6NDk6NDdaMB4CARICAQEEFhYUMjAyMi0xMC0xMVQwNDo0MTozMVowOAIBBwIBAQQwG2JaXp7w7emPLl/MkV9x/HhXZyTUPjULpE8RKYwLbj0AjJZN99VkKu38Kb4Os9pwMDsCAQYCAQEEM/udug1MnPKIeLcPYubpn+ePSHZaGPeWmrDokeTZH1RbclUeK5loNRA7N+M2QJY5S1ksOjCCAZUCARECAQEEggGLMYIBhzALAgIGrQIBAQQCDAAwCwICBrACAQEEAhYAMAsCAgayAgEBBAIMADALAgIGswIBAQQCDAAwCwICBrQCAQEEAgwAMAsCAga1AgEBBAIMADALAgIGtgIBAQQCDAAwDAICBqUCAQEEAwIBATAMAgIGqwIBAQQDAgEDMAwCAgaxAgEBBAMCAQEwDAICBrcCAQEEAwIBADAMAgIGugIBAQQDAgEAMA8CAgauAgEBBAYCBFaGuG4wEgICBq8CAQEECQIHAYcVUFIlADAaAgIGpwIBAQQRDA80MzAwMDEyNDM0NDE2NDIwGgICBqkCAQEEEQwPNDMwMDAxMjQzNDQxNjQyMB8CAgaoAgEBBBYWFDIwMjItMTAtMTFUMDQ6NDk6MzJaMB8CAgaqAgEBBBYWFDIwMjItMTAtMTFUMDQ6NDk6MzNaMB8CAgasAgEBBBYWFDIwMjItMTAtMTRUMDQ6NDk6MzJaMCQCAgamAgEBBBsMGUZ1WXVhbi5pbmtEaWFyeS5ZZWFyQi5Qcm+ggg5lMIIFfDCCBGSgAwIBAgIIDutXh+eeCY0wDQYJKoZIhvcNAQEFBQAwgZYxCzAJBgNVBAYTAlVTMRMwEQYDVQQKDApBcHBsZSBJbmMuMSwwKgYDVQQLDCNBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9uczFEMEIGA1UEAww7QXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkwHhcNMTUxMTEzMDIxNTA5WhcNMjMwMjA3MjE0ODQ3WjCBiTE3MDUGA1UEAwwuTWFjIEFwcCBTdG9yZSBhbmQgaVR1bmVzIFN0b3JlIFJlY2VpcHQgU2lnbmluZzEsMCoGA1UECwwjQXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMxEzARBgNVBAoMCkFwcGxlIEluYy4xCzAJBgNVBAYTAlVTMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApc+B/SWigVvWh+0j2jMcjuIjwKXEJss9xp/sSg1Vhv+kAteXyjlUbX1/slQYncQsUnGOZHuCzom6SdYI5bSIcc8/W0YuxsQduAOpWKIEPiF41du30I4SjYNMWypoN5PC8r0exNKhDEpYUqsS4+3dH5gVkDUtwswSyo1IgfdYeFRr6IwxNh9KBgxHVPM3kLiykol9X6SFSuHAnOC6pLuCl2P0K5PB/T5vysH1PKmPUhrAJQp2Dt7+mf7/wmv1W16sc1FJCFaJzEOQzI6BAtCgl7ZcsaFpaYeQEGgmJjm4HRBzsApdxXPQ33Y72C3ZiB7j7AfP4o7Q0/omVYHv4gNJIwIDAQABo4IB1zCCAdMwPwYIKwYBBQUHAQEEMzAxMC8GCCsGAQUFBzABhiNodHRwOi8vb2NzcC5hcHBsZS5jb20vb2NzcDAzLXd3ZHIwNDAdBgNVHQ4EFgQUkaSc/MR2t5+givRN9Y82Xe0rBIUwDAYDVR0TAQH/BAIwADAfBgNVHSMEGDAWgBSIJxcJqbYYYIvs67r2R1nFUlSjtzCCAR4GA1UdIASCARUwggERMIIBDQYKKoZIhvdjZAUGATCB/jCBwwYIKwYBBQUHAgIwgbYMgbNSZWxpYW5jZSBvbiB0aGlzIGNlcnRpZmljYXRlIGJ5IGFueSBwYXJ0eSBhc3N1bWVzIGFjY2VwdGFuY2Ugb2YgdGhlIHRoZW4gYXBwbGljYWJsZSBzdGFuZGFyZCB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZiB1c2UsIGNlcnRpZmljYXRlIHBvbGljeSBhbmQgY2VydGlmaWNhdGlvbiBwcmFjdGljZSBzdGF0ZW1lbnRzLjA2BggrBgEFBQcCARYqaHR0cDovL3d3dy5hcHBsZS5jb20vY2VydGlmaWNhdGVhdXRob3JpdHkvMA4GA1UdDwEB/wQEAwIHgDAQBgoqhkiG92NkBgsBBAIFADANBgkqhkiG9w0BAQUFAAOCAQEADaYb0y4941srB25ClmzT6IxDMIJf4FzRjb69D70a/CWS24yFw4BZ3+Pi1y4FFKwN27a4/vw1LnzLrRdrjn8f5He5sWeVtBNephmGdvhaIJXnY4wPc/zo7cYfrpn4ZUhcoOAoOsAQNy25oAQ5H3O5yAX98t5/GioqbisB/KAgXNnrfSemM/j1mOC+RNuxTGf8bgpPyeIGqNKX86eOa1GiWoR1ZdEWBGLjwV/1CKnPaNmSAMnBjLP4jQBkulhgwHyvj3XKablbKtYdaG6YQvVMpzcZm8w7HHoZQ/Ojbb9IYAYMNpIr7N4YtRHaLSPQjvygaZwXG56AezlHRTBhL8cTqDCCBCIwggMKoAMCAQICCAHevMQ5baAQMA0GCSqGSIb3DQEBBQUAMGIxCzAJBgNVBAYTAlVTMRMwEQYDVQQKEwpBcHBsZSBJbmMuMSYwJAYDVQQLEx1BcHBsZSBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTEWMBQGA1UEAxMNQXBwbGUgUm9vdCBDQTAeFw0xMzAyMDcyMTQ4NDdaFw0yMzAyMDcyMTQ4NDdaMIGWMQswCQYDVQQGEwJVUzETMBEGA1UECgwKQXBwbGUgSW5jLjEsMCoGA1UECwwjQXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMxRDBCBgNVBAMMO0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyjhUpstWqsgkOUjpjO7sX7h/JpG8NFN6znxjgGF3ZF6lByO2Of5QLRVWWHAtfsRuwUqFPi/w3oQaoVfJr3sY/2r6FRJJFQgZrKrbKjLtlmNoUhU9jIrsv2sYleADrAF9lwVnzg6FlTdq7Qm2rmfNUWSfxlzRvFduZzWAdjakh4FuOI/YKxVOeyXYWr9Og8GN0pPVGnG1YJydM05V+RJYDIa4Fg3B5XdFjVBIuist5JSF4ejEncZopbCj/Gd+cLoCWUt3QpE5ufXN4UzvwDtIjKblIV39amq7pxY1YNLmrfNGKcnow4vpecBqYWcVsvD95Wi8Yl9uz5nd7xtj/pJlqwIDAQABo4GmMIGjMB0GA1UdDgQWBBSIJxcJqbYYYIvs67r2R1nFUlSjtzAPBgNVHRMBAf8EBTADAQH/MB8GA1UdIwQYMBaAFCvQaUeUdgn+9GuNLkCm90dNfwheMC4GA1UdHwQnMCUwI6AhoB+GHWh0dHA6Ly9jcmwuYXBwbGUuY29tL3Jvb3QuY3JsMA4GA1UdDwEB/wQEAwIBhjAQBgoqhkiG92NkBgIBBAIFADANBgkqhkiG9w0BAQUFAAOCAQEAT8/vWb4s9bJsL4/uE4cy6AU1qG6LfclpDLnZF7x3LNRn4v2abTpZXN+DAb2yriphcrGvzcNFMI+jgw3OHUe08ZOKo3SbpMOYcoc7Pq9FC5JUuTK7kBhTawpOELbZHVBsIYAKiU5XjGtbPD2m/d73DSMdC0omhz+6kZJMpBkSGW1X9XpYh3toiuSGjErr4kkUqqXdVQCprrtLMK7hoLG8KYDmCXflvjSiAcp/3OIK5ju4u+y6YpXzBWNBgs0POx1MlaTbq/nJlelP5E3nJpmB6bz5tCnSAXpm4S6M9iGKxfh44YGuv9OQnamt86/9OBqWZzAcUaVc7HGKgrRsDwwVHzCCBLswggOjoAMCAQICAQIwDQYJKoZIhvcNAQEFBQAwYjELMAkGA1UEBhMCVVMxEzARBgNVBAoTCkFwcGxlIEluYy4xJjAkBgNVBAsTHUFwcGxlIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MRYwFAYDVQQDEw1BcHBsZSBSb290IENBMB4XDTA2MDQyNTIxNDAzNloXDTM1MDIwOTIxNDAzNlowYjELMAkGA1UEBhMCVVMxEzARBgNVBAoTCkFwcGxlIEluYy4xJjAkBgNVBAsTHUFwcGxlIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MRYwFAYDVQQDEw1BcHBsZSBSb290IENBMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5JGpCR+R2x5HUOsF7V55hC3rNqJXTFXsixmJ3vlLbPUHqyIwAugYPvhQCdN/QaiY+dHKZpwkaxHQo7vkGyrDH5WeegykR4tb1BY3M8vED03OFGnRyRly9V0O1X9fm/IlA7pVj01dDfFkNSMVSxVZHbOU9/acns9QusFYUGePCLQg98usLCBvcLY/ATCMt0PPD5098ytJKBrI/s61uQ7ZXhzWyz21Oq30Dw4AkguxIRYudNU8DdtiFqujcZJHU1XBry9Bs/j743DN5qNMRX4fTGtQlkGJxHRiCxCDQYczioGxMFjsWgQyjGizjx3eZXP/Z15lvEnYdp8zFGWhd5TJLQIDAQABo4IBejCCAXYwDgYDVR0PAQH/BAQDAgEGMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFCvQaUeUdgn+9GuNLkCm90dNfwheMB8GA1UdIwQYMBaAFCvQaUeUdgn+9GuNLkCm90dNfwheMIIBEQYDVR0gBIIBCDCCAQQwggEABgkqhkiG92NkBQEwgfIwKgYIKwYBBQUHAgEWHmh0dHBzOi8vd3d3LmFwcGxlLmNvbS9hcHBsZWNhLzCBwwYIKwYBBQUHAgIwgbYagbNSZWxpYW5jZSBvbiB0aGlzIGNlcnRpZmljYXRlIGJ5IGFueSBwYXJ0eSBhc3N1bWVzIGFjY2VwdGFuY2Ugb2YgdGhlIHRoZW4gYXBwbGljYWJsZSBzdGFuZGFyZCB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZiB1c2UsIGNlcnRpZmljYXRlIHBvbGljeSBhbmQgY2VydGlmaWNhdGlvbiBwcmFjdGljZSBzdGF0ZW1lbnRzLjANBgkqhkiG9w0BAQUFAAOCAQEAXDaZTC14t+2Mm9zzd5vydtJ3ME/BH4WDhRuZPUc38qmbQI4s1LGQEti+9HOb7tJkD8t5TzTYoj75eP9ryAfsfTmDi1Mg0zjEsb+aTwpr/yv8WacFCXwXQFYRHnTTt4sjO0ej1W8k4uvRt3DfD0XhJ8rxbXjt57UXF6jcfiI1yiXV2Q/Wa9SiJCMR96Gsj3OBYMYbWwkvkrL4REjwYDieFfU9JmcgijNq9w2Cz97roy/5U2pbZMBjM3f3OgcsVuvaDyEO2rpzGU+12TZ/wYdV2aeZuTJC+9jVcZ5+oVK3G72TQiQSKscPHbZNnF5jyEuAF1CqitXa5PzQCQc3sHV1ITGCAcswggHHAgEBMIGjMIGWMQswCQYDVQQGEwJVUzETMBEGA1UECgwKQXBwbGUgSW5jLjEsMCoGA1UECwwjQXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMxRDBCBgNVBAMMO0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zIENlcnRpZmljYXRpb24gQXV0aG9yaXR5AggO61eH554JjTAJBgUrDgMCGgUAMA0GCSqGSIb3DQEBAQUABIIBAAD68Wau+dwa3v3cRzCe/DmRz2yGIPwAHWqzz0tgZDRtyyAncwhJdR89yZr4e7Gzu6wQLz9PEQyB2/4FGi4cacPibc89RTBR1+lQvzzX4h8SYZB38fsANvpNosPGJ2tgV/dtZZwHPzTyG5cJS1ZJIF5hfNWXv09VnM5wqCfJfMdEyByuOFv4jbTOqKkQjRN9amRKKpd4WO8WA3m0+F3kTJVPeN2SVxuH/rnRI4Tm9A1Hllhb2xcq8Dnf9FZQ1tHpaX79xuvaJl+znTP09Vq08c8W/vikZrrY+mDP1liBt2KalTQLlDOa5nwQhPqjo8RKs5ppHAqlO+ltu/ohifMROv8=", 
"pending_renewal_info":[
{"auto_renew_product_id":"FuYuan.inkDiary.YearB.Pro", "product_id":"FuYuan.inkDiary.YearB.Pro", "original_transaction_id":"430001243441642", "auto_renew_status":"1"}], "status":0}


$done({body : JSON.stringify(objc)});








// Adding a dummy plugin commit(4)
// Adding a dummy stoverride commit(2)
// Adding a dummy sgmodule commit(6)
