let body = $response.body
body=JSON.parse(body)
body['data']['activity_banner_info']=null
body=JSON.stringify(body)
$done({body})





















// Adding a dummy sgmodule commit(11)
// Adding a dummy plugin commit(9)
// Adding a dummy stoverride commit(6)
