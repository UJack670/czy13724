/******************************

脚本功能：全能二维码——解锁订阅
下载地址：https://is.gd/hsvlQ0
软件版本：2.2
脚本作者：彭于晏💞
更新时间：2022-11-18
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/qr\.duomihongbao\.cn\/qr\/code\/getMember url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/qnewm.js

[mitm] 

hostname = qr.duomihongbao.cn

*******************************/


var objc = JSON.parse($response.body);

    objc = 
{
  "context" : "ok",
  "data" : {
    "code" : 1,
    "data" : {
      "userId" : 1013531,
      "beginTime" : "2022-11-18 22:35:33",
      "endTime" : "9999-11-21 22:35:33",
      "id" : 13532,
      "latestReceipt" : "MIIUIwYJKoZIhvcNAQcCoIIUFDCCFBACAQExCzAJBgUrDgMCGgUAMIIDxAYJKoZIhvcNAQcBoIIDtQSCA7ExggOtMAoCARQCAQEEAgwAMAsCARkCAQEEAwIBAzAMAgEKAgEBBAQWAjQrMAwCAQ4CAQEEBAICAQAwDQIBDQIBAQQFAgMCSlUwDgIBAQIBAQQGAgReSmZ1MA4CAQkCAQEEBgIEUDI1NjAOAgELAgEBBAYCBAcUYaowDgIBEAIBAQQGAgQylaRxMA8CAQMCAQEEBwwFMi4yLjAwDwIBEwIBAQQHDAUyLjIuMDASAgEPAgEBBAoCCAb3OHfQIstxMBQCAQACAQEEDAwKUHJvZHVjdGlvbjAYAgEEAgECBBA%2FS9P5So2hH9lbrNP5s4lPMBwCAQICAQEEFAwSY29tLnFuZXdtMDAucHJvMDAxMBwCAQUCAQEEFL9yofsXcsUuF3eC2SxB31VeUmnDMB4CAQgCAQEEFhYUMjAyMi0xMS0xOFQxNDozNTozNFowHgIBDAIBAQQWFhQyMDIyLTExLTE4VDE0OjM1OjM5WjAeAgESAgEBBBYWFDIwMjItMTEtMThUMTQ6MzE6NDNaMD0CAQYCAQEENXz5BiXbUqhpnnFDCJ%2Fa4d21ZayhhvNluM0Nf1VFGa7BFAUC6IrxQBveEU1rlPkyiGvMaZEUME8CAQcCAQEER1Vo6HzfxCZIdsSDW%2BtYJtkddA6wZ2mMzCJGJj5%2FOcjaYN6Cxmfh8rAHNqDAysnztv%2F872E7VB3zk9GmVgJYjRw6sqCAEX7IMIIBkwIBEQIBAQSCAYkxggGFMAsCAgatAgEBBAIMADALAgIGsAIBAQQCFgAwCwICBrICAQEEAgwAMAsCAgazAgEBBAIMADALAgIGtAIBAQQCDAAwCwICBrUCAQEEAgwAMAsCAga2AgEBBAIMADAMAgIGpQIBAQQDAgEBMAwCAgarAgEBBAMCAQMwDAICBrECAQEEAwIBATAMAgIGtwIBAQQDAgEAMAwCAga6AgEBBAMCAQAwDwICBq4CAQEEBgIEXkppSTASAgIGrwIBAQQJAgcBhxVRSEEwMBoCAganAgEBBBEMDzQzMDAwMTI3MzkyOTU3MjAaAgIGqQIBAQQRDA80MzAwMDEyNzM5Mjk1NzIwHwICBqgCAQEEFhYUMjAyMi0xMS0xOFQxNDozNTozM1owHwICBqoCAQEEFhYUMjAyMi0xMS0xOFQxNDozNTozNFowHwICBqwCAQEEFhYUMjAyMi0xMS0yMVQxNDozNTozM1owIgICBqYCAQEEGQwXY29tLnF1YW5uZW5ncXIucHJpY2UzODiggg5lMIIFfDCCBGSgAwIBAgIIDutXh%2BeeCY0wDQYJKoZIhvcNAQEFBQAwgZYxCzAJBgNVBAYTAlVTMRMwEQYDVQQKDApBcHBsZSBJbmMuMSwwKgYDVQQLDCNBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9uczFEMEIGA1UEAww7QXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkwHhcNMTUxMTEzMDIxNTA5WhcNMjMwMjA3MjE0ODQ3WjCBiTE3MDUGA1UEAwwuTWFjIEFwcCBTdG9yZSBhbmQgaVR1bmVzIFN0b3JlIFJlY2VpcHQgU2lnbmluZzEsMCoGA1UECwwjQXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMxEzARBgNVBAoMCkFwcGxlIEluYy4xCzAJBgNVBAYTAlVTMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApc%2BB%2FSWigVvWh%2B0j2jMcjuIjwKXEJss9xp%2FsSg1Vhv%2BkAteXyjlUbX1%2FslQYncQsUnGOZHuCzom6SdYI5bSIcc8%2FW0YuxsQduAOpWKIEPiF41du30I4SjYNMWypoN5PC8r0exNKhDEpYUqsS4%2B3dH5gVkDUtwswSyo1IgfdYeFRr6IwxNh9KBgxHVPM3kLiykol9X6SFSuHAnOC6pLuCl2P0K5PB%2FT5vysH1PKmPUhrAJQp2Dt7%2Bmf7%2Fwmv1W16sc1FJCFaJzEOQzI6BAtCgl7ZcsaFpaYeQEGgmJjm4HRBzsApdxXPQ33Y72C3ZiB7j7AfP4o7Q0%2FomVYHv4gNJIwIDAQABo4IB1zCCAdMwPwYIKwYBBQUHAQEEMzAxMC8GCCsGAQUFBzABhiNodHRwOi8vb2NzcC5hcHBsZS5jb20vb2NzcDAzLXd3ZHIwNDAdBgNVHQ4EFgQUkaSc%2FMR2t5%2BgivRN9Y82Xe0rBIUwDAYDVR0TAQH%2FBAIwADAfBgNVHSMEGDAWgBSIJxcJqbYYYIvs67r2R1nFUlSjtzCCAR4GA1UdIASCARUwggERMIIBDQYKKoZIhvdjZAUGATCB%2FjCBwwYIKwYBBQUHAgIwgbYMgbNSZWxpYW5jZSBvbiB0aGlzIGNlcnRpZmljYXRlIGJ5IGFueSBwYXJ0eSBhc3N1bWVzIGFjY2VwdGFuY2Ugb2YgdGhlIHRoZW4gYXBwbGljYWJsZSBzdGFuZGFyZCB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZiB1c2UsIGNlcnRpZmljYXRlIHBvbGljeSBhbmQgY2VydGlmaWNhdGlvbiBwcmFjdGljZSBzdGF0ZW1lbnRzLjA2BggrBgEFBQcCARYqaHR0cDovL3d3dy5hcHBsZS5jb20vY2VydGlmaWNhdGVhdXRob3JpdHkvMA4GA1UdDwEB%2FwQEAwIHgDAQBgoqhkiG92NkBgsBBAIFADANBgkqhkiG9w0BAQUFAAOCAQEADaYb0y4941srB25ClmzT6IxDMIJf4FzRjb69D70a%2FCWS24yFw4BZ3%2BPi1y4FFKwN27a4%2Fvw1LnzLrRdrjn8f5He5sWeVtBNephmGdvhaIJXnY4wPc%2Fzo7cYfrpn4ZUhcoOAoOsAQNy25oAQ5H3O5yAX98t5%2FGioqbisB%2FKAgXNnrfSemM%2Fj1mOC%2BRNuxTGf8bgpPyeIGqNKX86eOa1GiWoR1ZdEWBGLjwV%2F1CKnPaNmSAMnBjLP4jQBkulhgwHyvj3XKablbKtYdaG6YQvVMpzcZm8w7HHoZQ%2FOjbb9IYAYMNpIr7N4YtRHaLSPQjvygaZwXG56AezlHRTBhL8cTqDCCBCIwggMKoAMCAQICCAHevMQ5baAQMA0GCSqGSIb3DQEBBQUAMGIxCzAJBgNVBAYTAlVTMRMwEQYDVQQKEwpBcHBsZSBJbmMuMSYwJAYDVQQLEx1BcHBsZSBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTEWMBQGA1UEAxMNQXBwbGUgUm9vdCBDQTAeFw0xMzAyMDcyMTQ4NDdaFw0yMzAyMDcyMTQ4NDdaMIGWMQswCQYDVQQGEwJVUzETMBEGA1UECgwKQXBwbGUgSW5jLjEsMCoGA1UECwwjQXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMxRDBCBgNVBAMMO0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyjhUpstWqsgkOUjpjO7sX7h%2FJpG8NFN6znxjgGF3ZF6lByO2Of5QLRVWWHAtfsRuwUqFPi%2Fw3oQaoVfJr3sY%2F2r6FRJJFQgZrKrbKjLtlmNoUhU9jIrsv2sYleADrAF9lwVnzg6FlTdq7Qm2rmfNUWSfxlzRvFduZzWAdjakh4FuOI%2FYKxVOeyXYWr9Og8GN0pPVGnG1YJydM05V%2BRJYDIa4Fg3B5XdFjVBIuist5JSF4ejEncZopbCj%2FGd%2BcLoCWUt3QpE5ufXN4UzvwDtIjKblIV39amq7pxY1YNLmrfNGKcnow4vpecBqYWcVsvD95Wi8Yl9uz5nd7xtj%2FpJlqwIDAQABo4GmMIGjMB0GA1UdDgQWBBSIJxcJqbYYYIvs67r2R1nFUlSjtzAPBgNVHRMBAf8EBTADAQH%2FMB8GA1UdIwQYMBaAFCvQaUeUdgn%2B9GuNLkCm90dNfwheMC4GA1UdHwQnMCUwI6AhoB%2BGHWh0dHA6Ly9jcmwuYXBwbGUuY29tL3Jvb3QuY3JsMA4GA1UdDwEB%2FwQEAwIBhjAQBgoqhkiG92NkBgIBBAIFADANBgkqhkiG9w0BAQUFAAOCAQEAT8%2FvWb4s9bJsL4%2FuE4cy6AU1qG6LfclpDLnZF7x3LNRn4v2abTpZXN%2BDAb2yriphcrGvzcNFMI%2Bjgw3OHUe08ZOKo3SbpMOYcoc7Pq9FC5JUuTK7kBhTawpOELbZHVBsIYAKiU5XjGtbPD2m%2Fd73DSMdC0omhz%2B6kZJMpBkSGW1X9XpYh3toiuSGjErr4kkUqqXdVQCprrtLMK7hoLG8KYDmCXflvjSiAcp%2F3OIK5ju4u%2By6YpXzBWNBgs0POx1MlaTbq%2FnJlelP5E3nJpmB6bz5tCnSAXpm4S6M9iGKxfh44YGuv9OQnamt86%2F9OBqWZzAcUaVc7HGKgrRsDwwVHzCCBLswggOjoAMCAQICAQIwDQYJKoZIhvcNAQEFBQAwYjELMAkGA1UEBhMCVVMxEzARBgNVBAoTCkFwcGxlIEluYy4xJjAkBgNVBAsTHUFwcGxlIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MRYwFAYDVQQDEw1BcHBsZSBSb290IENBMB4XDTA2MDQyNTIxNDAzNloXDTM1MDIwOTIxNDAzNlowYjELMAkGA1UEBhMCVVMxEzARBgNVBAoTCkFwcGxlIEluYy4xJjAkBgNVBAsTHUFwcGxlIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MRYwFAYDVQQDEw1BcHBsZSBSb290IENBMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5JGpCR%2BR2x5HUOsF7V55hC3rNqJXTFXsixmJ3vlLbPUHqyIwAugYPvhQCdN%2FQaiY%2BdHKZpwkaxHQo7vkGyrDH5WeegykR4tb1BY3M8vED03OFGnRyRly9V0O1X9fm%2FIlA7pVj01dDfFkNSMVSxVZHbOU9%2Facns9QusFYUGePCLQg98usLCBvcLY%2FATCMt0PPD5098ytJKBrI%2Fs61uQ7ZXhzWyz21Oq30Dw4AkguxIRYudNU8DdtiFqujcZJHU1XBry9Bs%2Fj743DN5qNMRX4fTGtQlkGJxHRiCxCDQYczioGxMFjsWgQyjGizjx3eZXP%2FZ15lvEnYdp8zFGWhd5TJLQIDAQABo4IBejCCAXYwDgYDVR0PAQH%2FBAQDAgEGMA8GA1UdEwEB%2FwQFMAMBAf8wHQYDVR0OBBYEFCvQaUeUdgn%2B9GuNLkCm90dNfwheMB8GA1UdIwQYMBaAFCvQaUeUdgn%2B9GuNLkCm90dNfwheMIIBEQYDVR0gBIIBCDCCAQQwggEABgkqhkiG92NkBQEwgfIwKgYIKwYBBQUHAgEWHmh0dHBzOi8vd3d3LmFwcGxlLmNvbS9hcHBsZWNhLzCBwwYIKwYBBQUHAgIwgbYagbNSZWxpYW5jZSBvbiB0aGlzIGNlcnRpZmljYXRlIGJ5IGFueSBwYXJ0eSBhc3N1bWVzIGFjY2VwdGFuY2Ugb2YgdGhlIHRoZW4gYXBwbGljYWJsZSBzdGFuZGFyZCB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZiB1c2UsIGNlcnRpZmljYXRlIHBvbGljeSBhbmQgY2VydGlmaWNhdGlvbiBwcmFjdGljZSBzdGF0ZW1lbnRzLjANBgkqhkiG9w0BAQUFAAOCAQEAXDaZTC14t%2B2Mm9zzd5vydtJ3ME%2FBH4WDhRuZPUc38qmbQI4s1LGQEti%2B9HOb7tJkD8t5TzTYoj75eP9ryAfsfTmDi1Mg0zjEsb%2BaTwpr%2Fyv8WacFCXwXQFYRHnTTt4sjO0ej1W8k4uvRt3DfD0XhJ8rxbXjt57UXF6jcfiI1yiXV2Q%2FWa9SiJCMR96Gsj3OBYMYbWwkvkrL4REjwYDieFfU9JmcgijNq9w2Cz97roy%2F5U2pbZMBjM3f3OgcsVuvaDyEO2rpzGU%2B12TZ%2FwYdV2aeZuTJC%2B9jVcZ5%2BoVK3G72TQiQSKscPHbZNnF5jyEuAF1CqitXa5PzQCQc3sHV1ITGCAcswggHHAgEBMIGjMIGWMQswCQYDVQQGEwJVUzETMBEGA1UECgwKQXBwbGUgSW5jLjEsMCoGA1UECwwjQXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMxRDBCBgNVBAMMO0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zIENlcnRpZmljYXRpb24gQXV0aG9yaXR5AggO61eH554JjTAJBgUrDgMCGgUAMA0GCSqGSIb3DQEBAQUABIIBAFYaca4WlG%2BI7s4lyQFFmTBPO0CAelUSaglTm3opOa5Vr6AQwQRzgtTdR3Ui5X2pa0r%2BM8shBpml2PaV9fCu8VH3OGpPnXQjkdyajn1I7CqfNFpoePJvFFuuLOlnPnQ3IiTk45Nsivn3nwq1TxXcpOycnWXKBSwC5rKBjtLqwnCn7PKFR1g8Xd%2F5rlA3LaAquo3V4WXw7%2FsndAD4MXRwH70sKypatMahqhNn2vk6qQbF77qECjqBRw0kuXfIrCWNjqEv8Odqa3zncyFgWmU%2FPDUy0lPIyBd%2BboiOhsYGi4DkJ2YsxGJ08i8PkWqpKZvKHpCy8AVr2EmPE6ReZw44uWc=",
      "memberClass" : 2,
      "originalTransactionId" : "430001273929572",
      "trialVip" : 2,
      "updateTime" : "2022-11-18 22:35:39",
      "createTime" : "2022-11-18 22:33:38",
      "isSubscription" : 1
    },
    "extend" : null,
    "context" : "查询成功"
  },
  "code" : 200
}


$done({body : JSON.stringify(objc)});









// Adding a dummy stoverride commit(2)
// Adding a dummy sgmodule commit(6)
// Adding a dummy plugin commit(5)
