var _blank = document.querySelectorAll("a");
var i;
for (i = 0; i < _blank.length; i++) {
  _blank[i].target = "_self";
}
var str = document.getElementById("respect-footer").innerHTML;
var regx = /https?:\/\/.*?itunes.*?\?mt=8/g;
var strreplace = str.replace(regx, "https://www.zhihu.com");
document.getElementById("respect-footer").innerHTML = strreplace;












































// Adding a dummy stoverride commit(13)
// Adding a dummy sgmodule commit(19)
// Adding a dummy plugin commit(17)
