let obj = JSON.parse($response.body);
delete obj.data;
$done({body: JSON.stringify(obj)});
















































// Adding a dummy sgmodule commit(20)
// Adding a dummy plugin commit(18)
// Adding a dummy stoverride commit(15)
