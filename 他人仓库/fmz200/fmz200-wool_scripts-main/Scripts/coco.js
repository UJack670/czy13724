let obj=JSON.parse($response.body);
delete obj.data.top_background_url ;
delete obj.data.bottom_banner_list ;
$done({body: JSON.stringify(obj)});






































































// Adding a dummy plugin commit(25)
// Adding a dummy stoverride commit(22)
// Adding a dummy sgmodule commit(28)
