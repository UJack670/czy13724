// 作者：mieqq：https://raw.githubusercontent.com/mieqq/mieqq/master/replace-body.js
function getRegexp(re_str){let regParts=re_str.match(/^\/(.*?)\/([gims]*)$/);if(regParts){return new RegExp(regParts[1],regParts[2])}else{return new RegExp(re_str)}}let body;if(typeof $argument=="undefined"){console.log("requires $argument")}else{if(typeof $response!="undefined"){body=$response.body}else if(typeof $request!="undefined"){body=$request.body}else{console.log("script type error")}}if(body){$argument.split("&").forEach((item)=>{let[match,replace]=item.split("->");let re=getRegexp(match);body=body.replace(re,replace)});$done({body})}else{console.log("Not Modify");$done({})}







// Adding a dummy sgmodule commit(5)
// Adding a dummy plugin commit(4)
// Adding a dummy stoverride commit(2)
