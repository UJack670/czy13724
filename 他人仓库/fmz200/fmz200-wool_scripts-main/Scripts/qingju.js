let obj=JSON.parse($response.body);
delete obj.data.bannerInfoConfig ;
$done({body: JSON.stringify(obj)});








// Adding a dummy plugin commit(4)
// Adding a dummy stoverride commit(2)
// Adding a dummy sgmodule commit(6)
