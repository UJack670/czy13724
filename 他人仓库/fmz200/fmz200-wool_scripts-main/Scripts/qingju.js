let obj=JSON.parse($response.body);
delete obj.data.bannerInfoConfig ;
$done({body: JSON.stringify(obj)});

































// Adding a dummy sgmodule commit(15)
// Adding a dummy plugin commit(13)
// Adding a dummy stoverride commit(10)
