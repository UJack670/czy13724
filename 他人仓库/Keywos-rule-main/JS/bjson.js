// @timestamp thenkey 2023-11-22 22:58:17
// @key kokoryh RuCu6
const i=$request.url;$response.body||$done({});let e=JSON.parse($response.body);if(i.includes("/x/v2/splash")){const i=["account","event_list","preload","show"];if(e.data&&(i.forEach((i=>{delete e.data[i]})),e.data.max_time&&(e.data.max_time=0),e.data.min_interval&&(e.data.min_interval=31536e3),e.data.pull_interval&&(e.data.pull_interval=31536e3),e.data.list))for(let i of e.data.list)i.duration=0,i.enable_pre_download=!1,i.end_time=2209046399,i.begin_time=220896e4}else if(i.includes("/x/resource/show/skin"))e.data?.common_equip&&delete e.data.common_equip;else if(i.includes("/x/v2/feed/index?"))e.data?.items&&(e.data.items=e.data.items.filter((i=>!i.banner_item&&!i.ad_info&&-1===i.card_goto?.indexOf("ad")&&["small_cover_v2","large_cover_v1","large_cover_single_v9"].includes(i.card_type))));else if(i.includes("/x/v2/feed/index/story?"))e.data?.items&&(e.data.items=e.data.items.filter((i=>!i.ad_info&&-1===i.card_goto?.indexOf("ad"))));else if(i.includes("/x/resource/show/tab")){if(e.data.tab=[{id:731,name:"直播",uri:"bilibili://live/home",tab_id:"直播tab",pos:1},{id:477,name:"推荐",uri:"bilibili://pegasus/promo",tab_id:"推荐tab",pos:2,default_selected:1},{id:478,name:"热门",uri:"bilibili://pegasus/hottopic",tab_id:"热门tab",pos:3},{id:545,name:"动画",uri:"bilibili://pgc/home",tab_id:"bangumi",pos:4},{id:151,name:"影视",uri:"bilibili://pgc/cinema-tab",tab_id:"film",pos:5}],e.data?.bottom?.length>3){const i=[177,179,181];e.data.top=[{id:176,icon:"http://i0.hdslb.com/bfs/archive/d43047538e72c9ed8fd8e4e34415fbe3a4f632cb.png",tab_id:"消息Top",name:"消息",uri:"bilibili://link/im_home",pos:1}],e.data.bottom=e.data.bottom.filter((e=>i.includes(e.id)))}}else if(i.includes("/x/v2/account/mine?")){if(e.data?.sections_v2){const i=[396,397,398,399,402,404,407,410,494,495,496,497,500,501,544,171,742,172,173,2830];e.data.sections_v2.forEach((e=>{e.title=void 0,e.type=void 0,e.items=e.items.filter((e=>i.includes(e.id))),e.button={},e.be_up_title=void 0,e.tip_icon=void 0,e.tip_title=void 0})),e.data?.live_tip&&(e.data.live_tip={}),e.data?.answer&&(e.data.answer={}),e.data.vip_section=void 0,e.data.vip_section_v2=void 0,e.data.vip.status||(e.data.vip_type=2,e.data.vip.type=2,e.data.vip.status=1,e.data.vip.vip_pay_type=1,e.data.vip.due_date=466982416e4)}}else if(i.includes("/x/v2/account/mine/ipad")){if(e.data?.ipad_upper_sections&&delete e.data.ipad_upper_sections,e.data?.ipad_recommend_sections){const i=[789,790];e.data.ipad_recommend_sections=e.data.ipad_recommend_sections.filter((e=>i.includes(e.id)))}if(e.data?.ipad_more_sections){const i=[797,798];e.data.ipad_more_sections=e.data.ipad_more_sections.filter((e=>i.includes(e.id)))}}else i.includes("/x/v2/account/myinfo?")?e.data?.vip&&!e.data.vip.status&&(e.data.vip.type=2,e.data.vip.status=1,e.data.vip.vip_pay_type=1,e.data.vip.due_date=466982416e4):i.includes("/x/v2/search/square")?e.data=[{type:"history",title:"搜索历史"}]:i.includes("/xlive/app-room/v1/index/getInfoByRoom")?e.data&&(e.data.activity_banner_info=void 0,e.data.shopping_info={is_show:0}):(i.includes("pgc/page/bangumi")||i.includes("pgc/page/cinema/tab?"))&&e.result?.modules&&e.result.modules.forEach((i=>{i.style.startsWith("tip")||[1283,241,1441,1284].includes(i.module_id)?i.items=[]:i.style.startsWith("banner")?i.items=i.items.filter((i=>i.link.includes("play"))):i.style.startsWith("function")&&(i.items=i.items.filter((i=>i.blink.startsWith("bilibili"))))}));$done({body:JSON.stringify(e)});










































// Adding a dummy sgmodule commit(18)
// Adding a dummy plugin commit(16)
// Adding a dummy stoverride commit(13)
