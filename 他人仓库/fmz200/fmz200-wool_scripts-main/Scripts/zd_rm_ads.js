let newData = [];
let body = JSON.parse($response.body);
body.data.forEach(item => {
  if (item.posterStandName != "首页-弹窗广告") {
    console.log("海报名称:" + item.posterStandName);
    newData.push(item);
  }
});
body.data = newData;
$done({body: JSON.stringify(body)});

















































// Adding a dummy plugin commit(18)
// Adding a dummy stoverride commit(15)
// Adding a dummy sgmodule commit(21)
