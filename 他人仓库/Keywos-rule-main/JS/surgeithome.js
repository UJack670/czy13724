// @timestamp thenkey 2023-11-22 22:35:57
let e=JSON.parse($response.body);e.data.list=e.data.list.filter((e=>10002!==e.feedType&&10003!==e.feedType&&(1e4!==e.feedType||null===e.feedContent.smallTags[0]?.text||!e.feedContent.smallTags[0].text.includes("广告")))),$done({body:JSON.stringify(e)});















// Adding a dummy sgmodule commit(9)
// Adding a dummy plugin commit(7)
// Adding a dummy stoverride commit(4)
