let body = $response.body
body=JSON.parse(body)
delete body['data']['notice']
body=JSON.stringify(body)
$done({body})




























































// Adding a dummy sgmodule commit(24)
// Adding a dummy plugin commit(22)
// Adding a dummy stoverride commit(19)
