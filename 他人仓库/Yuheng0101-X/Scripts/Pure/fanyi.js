let { body } = $response
    , { url } = $request
    , isGoogle = /google/.test(url)
    , isBaidu = /baidu/.test(url)
    , isYoudao = /youdao/.test(url)
if (!/html>/.test(body)) $done({ body })
// 谷歌翻译
if (isGoogle) {
    body = body.replace(/<head>/, `<head><style>.app-download-bar, #gb{display: none !important;}</style>`)
}
// 百度翻译
if (isBaidu) {
    body = body.replace(/<head>/, `<head><style>#new-header,#header,.app-bar,.fanyi-sfr-container .article,.bottom-intro .intro-title,.bottom-intro .intro-nav,.jifeng-ad-wrapper,.transoper{display:none !important;}.footer{display: none !important;}.manual-trans-btn{display: none !important;}.trans-other-right{display: none;}.app-guide{display: none !important;}.domain-trans-wrapper{display: none !important;}.select-to-language:after{display: none !important;}.fanyi-sfr-container .topnav-new{top:0!important;}</style>`)
}
// 有道翻译
if (isYoudao) {
    body = body.replace(/<head>/, `<head><style>.fanyi__nav__logo {width: 120px;background: url(data:image/png;base64,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) 50% 50% no-repeat !important;}.writing_new,.rengong__guide,.doc__upload--tip,.inside__products,.side__nav,.doc__upload--con .circle, .fanyi__footer{display:none !important;}</style>`)
}

$done({ body })



// Adding a dummy plugin commit(2)
// Adding a dummy stoverride commit(1)
// Adding a dummy sgmodule commit(4)
