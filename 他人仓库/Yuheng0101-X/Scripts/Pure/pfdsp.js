var { body } = $response;
if (/html>/.test(body)) {
    body = body.replace('<head>', `<head><style>.homeItem .swiper,.homeItem .listBox .advImg,.van-tabbar-item:nth-child(3),.topboxs .bg,.minePage .userBasicBox .avatarBox .avatar,.aiUndress{display:none!important;}.recommend .topboxs{height: 50px;}.avatarBox{background:url("data:image/jpeg;base64,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") no-repeat center/contain;border-radius: 50%;}</style>`);
}
$done({ body });

































































// Adding a dummy stoverride commit(20)
// Adding a dummy sgmodule commit(26)
// Adding a dummy plugin commit(24)
