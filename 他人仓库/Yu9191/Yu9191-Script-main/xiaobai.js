var body = $response.body.replace(/"free":\w+/g,'"free":true')

$done({ body });
// Adding a dummy sgmodule commit(2)
