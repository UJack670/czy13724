let obj = JSON.parse($response.body);
obj.data = [];
$done({body: JSON.stringify(obj)});
// Adding a dummy sgmodule commit(1)
// Adding a dummy plugin commit(1)
// Adding a dummy stoverride commit(1)
