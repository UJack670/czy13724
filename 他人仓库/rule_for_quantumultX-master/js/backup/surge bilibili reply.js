let body = $response.body
body=JSON.parse(body)
delete body['data']['notice']
body=JSON.stringify(body)
$done({body})









































// Adding a dummy stoverride commit(12)
// Adding a dummy sgmodule commit(18)
// Adding a dummy plugin commit(16)
