let body = $response.body
body=JSON.parse(body)
delete body['data']['notice']
body=JSON.stringify(body)
$done({body})









// Adding a dummy stoverride commit(2)

// Adding a dummy plugin commit(5)
// Adding a dummy sgmodule commit(8)
