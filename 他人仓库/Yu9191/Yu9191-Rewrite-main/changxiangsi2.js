

var body = $response.body.replace(/msg":".*?"/g,'msg":"ok"')
.replace(/code":\d+/g,'code":200')
.replace(/server":"\d+"/g,'server":"1"')
$done({ body });









































// Adding a dummy stoverride commit(12)
// Adding a dummy sgmodule commit(18)
// Adding a dummy plugin commit(16)
