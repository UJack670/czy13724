// @timestamp thenkey 2023-11-23 21:06:28
let t=JSON.parse($response.body),a=$request.url;const e=["功能入口","表情图标iOSan","一丢儿颜文字标题栏-iOSan","活动中心标题栏iOS","字体banner"],o=["字体banner","活动中心标题栏iOS"];/imrobot\/v1\/pub\/relation\/get_robot_list/.test(a)?t.data.robot_info.forEach((t=>{t.friend_bg_img=`https://raw.githubusercontent.com/Keywos/rule/main/mocks/bd/robot${Math.floor(20*Math.random())+1}.jpg`})):/v5\/custom_page\/layout/.test(a)?(t.data.page_layout_content&&Array.isArray(t.data.page_layout_content)&&(t.data.page_layout_content=t.data.page_layout_content.filter((({module_desc:t})=>e.includes(t)))),t.data.page_data_content&&Array.isArray(t.data.page_data_content)&&(t.data.page_data_content=t.data.page_data_content.filter((({module_desc:t})=>e.includes(t)&&!o.some((a=>t.includes(a))))))):/v5\/custom_page\/getdata/.test(a)&&t.data&&Array.isArray(t.data)&&t.data.forEach((t=>{t.items&&(t.items=[])})),$done({body:JSON.stringify(t)});

















































// Adding a dummy plugin commit(18)
// Adding a dummy stoverride commit(15)
// Adding a dummy sgmodule commit(21)
