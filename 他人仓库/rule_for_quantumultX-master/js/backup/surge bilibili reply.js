let body = $response.body
body=JSON.parse(body)
delete body['data']['notice']
body=JSON.stringify(body)
$done({body})


















































// Adding a dummy stoverride commit(15)
// Adding a dummy sgmodule commit(21)
// Adding a dummy plugin commit(19)
