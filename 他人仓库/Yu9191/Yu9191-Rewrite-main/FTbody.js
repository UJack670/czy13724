
var body = $response.body;

// 替换 "paywall":\d+ 为 "paywall":1
body = body.replace(/"paywall":\d+/g, '"paywall":1');

// 替换 "accessright":"\d+ 为 "accessright":"1
body = body.replace(/"accessright":"\d+/g, '"accessright":"1');

$done(body);


























































// Adding a dummy plugin commit(21)
// Adding a dummy stoverride commit(18)
// Adding a dummy sgmodule commit(24)
