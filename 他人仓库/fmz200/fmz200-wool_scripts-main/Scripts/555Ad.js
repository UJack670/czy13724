
let obj=JSON.parse($response.body);obj.data=obj.data.filter(t=>"advert_self"!==t.layout),obj.data.forEach(t=>{t.list=t.list.filter(t=>3!==t.type)}),$done({body:JSON.stringify(obj)});






































// Adding a dummy stoverride commit(11)
// Adding a dummy sgmodule commit(17)
// Adding a dummy plugin commit(15)
