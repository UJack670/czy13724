let obj=JSON.parse($response.body);
delete obj.data.ad ;
delete obj.data.brands ;
delete obj.data.info.infos ;
$done({body: JSON.stringify(obj)});








































































// Adding a dummy sgmodule commit(28)
// Adding a dummy plugin commit(26)
// Adding a dummy stoverride commit(23)
