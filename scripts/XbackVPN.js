

// Quantumult X引用地址： https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/XbackVPN.js
// Surge/Shadowrocket 模块地址： https://raw.githubusercontent.com/czy13724/Quantumult-X/main/Surge/XbackVPN.sgmodule
// Loon 插件地址： https://raw.githubusercontent.com/czy13724/Quantumult-X/main/Loon/XbackVPN.plugin
// Stash 覆写地址： https://raw.githubusercontent.com/czy13724/Quantumult-X/main/Stash/XbackVPN.stoverride

/*
项目名称：XbackVPN
项目作者：David
下载地址：https://apps.apple.com/app/id1659638467
使用说明：必须创建一个免费账号，不建议使用appleid注册。
使用声明：⚠️仅供参考，🈲️转载与售卖！


[rewrite_local]

^https:\/\/client-alphant\.xback\.io\/alphant\/api\/member\/getInfo\?.*$ url script-response-body https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/XbackVPN.js

[mitm]
hostname = client-alphant.xback.io
*/


// 获取完整的请求 URL
let url = $request.url;

// 定义要匹配的URL基础部分（不包含查询参数）
const baseUrl = 'https://client-alphant.xback.io/alphant/api/member/getInfo';

// 如果请求的 URL 正好是基础 URL（确保没有查询参数）
if (url === baseUrl) {
    // 解析原始响应体的 JSON 数据
    let originalBody = JSON.parse($response.body);
  
    // 修改响应体中的内容
    let modifiedBody = {
        "code": "SUCCESS",
        "success": true,
        "data": {
            "expireUnix": 4000103307,
            "appleSub": "apple_pay",
            "id": "4",
            "productNo": "com.xback.subscription.1year",
            "limited_offer": false,
            "duration": 366,
            "type": "yearly",
            "newToken": $request.headers["x-token"],
            "isEnable": true,
            "desc": "Yearly",
            "vipNo": "1",
            "duration": 99999999,
            "paypalSub": "",
            "isPaySinceRegister": true
        },
        "msg": "success",
        "requestId": "2f2bfc10df558190db386c141b24d1a1"
    };
  
    // 使用 $done 方法返回修改后的响应体
    $done({ body: JSON.stringify(modifiedBody) });
} else {
    // 如果 URL 包含查询参数，则不修改响应体
    $done({});
}

// Adding a dummy sgmodule change to trigger git commit

// Adding a dummy plugin change to trigger git commit

// Adding a dummy stoverride change to trigger git commit
