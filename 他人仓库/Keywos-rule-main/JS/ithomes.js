// @timestamp thenkey 2023-11-23 21:20:16
const e="undefined"!=typeof $loon;let t=!0,n=!0;e&&(t="开启"===$persistentStore.read("去除轮播图"),n="开启"===$persistentStore.read("去除置顶"));let s=JSON.parse($response.body);t&&(s.data.list=s.data.list.filter((function(e){return 10002!==e.feedType}))),n&&(s.data.list=s.data.list.filter((function(e){return 10003!==e.feedType}))),s.data.list=s.data.list.filter((e=>1e4!==e.feedType||null===e.feedContent.smallTags[0]?.text||!e.feedContent.smallTags[0].text.includes("广告"))),$done({body:JSON.stringify(s)});
// Adding a dummy sgmodule commit(2)
// Adding a dummy plugin commit(1)
