let body = $response.body
body=JSON.parse(body)
delete body['data']['notice']
body=JSON.stringify(body)
$done({body})






































// Adding a dummy stoverride commit(11)
// Adding a dummy sgmodule commit(17)
// Adding a dummy plugin commit(15)
