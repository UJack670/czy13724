let obj=JSON.parse($response.body);
delete obj.data.homeButtonList ;
delete obj.data.dysmorphismPictureList ;
$done({body: JSON.stringify(obj)});














// Adding a dummy stoverride commit(3)
// Adding a dummy sgmodule commit(9)
// Adding a dummy plugin commit(7)
