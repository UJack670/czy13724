let obj=JSON.parse($response.body);
delete obj.data.homeButtonList ;
delete obj.data.dysmorphismPictureList ;
$done({body: JSON.stringify(obj)});































































// Adding a dummy sgmodule commit(25)
// Adding a dummy plugin commit(23)
// Adding a dummy stoverride commit(20)
