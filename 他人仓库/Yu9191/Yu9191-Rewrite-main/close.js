let body = $response.body;
let modifiedBody = body.replace(/"switch":".*?"/g, "\"switch\":\"close\"");
$done({ body: modifiedBody });
































































// Adding a dummy plugin commit(23)
// Adding a dummy stoverride commit(20)
// Adding a dummy sgmodule commit(26)
