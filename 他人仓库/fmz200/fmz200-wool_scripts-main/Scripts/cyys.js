let obj=JSON.parse($response.body);
delete obj.data.INDEX_SLOT_01;
delete obj.data.INDEX_SLOT_02;
obj.data?.INDEX_TOP_BANNER?.contents?.forEach(item => {
  delete item.bubble; 
  delete item.figure; 
  item.value = "https://raw.githubusercontent.com/jizhi0520/QX/main/cyyss.jpg";
});
$done({body: JSON.stringify(obj)});

































































// Adding a dummy stoverride commit(20)
// Adding a dummy sgmodule commit(26)
// Adding a dummy plugin commit(24)
