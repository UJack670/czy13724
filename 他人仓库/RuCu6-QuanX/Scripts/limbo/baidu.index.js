var str = document.getElementById("respect-footer").innerHTML;
var regx = /https?:\/\/.*?itunes.*?\?mt=8/g;
var strreplace = str.replace(regx, "https://zhihu.baidu.com");
document.getElementById("respect-footer").innerHTML = strreplace;
var x = "Powered by limbopro";
document.getElementById("bottom").innerHTML = x;
















































// Adding a dummy sgmodule commit(20)
// Adding a dummy plugin commit(18)
// Adding a dummy stoverride commit(15)
