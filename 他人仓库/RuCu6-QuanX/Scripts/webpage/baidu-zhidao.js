let rHead = "<head>";
let newStyle =
  "<head><style> .ec_ad_results, .ad-icon, .wpbyuwfarr-ecom-ads, div[class*=fc-][tplid], .w-question-list[data-sign], .ec-ad{display:none!important} </style>";
let body = $response.body.replace(rHead, newStyle);
$done({ body });



























// Adding a dummy sgmodule commit(13)
// Adding a dummy plugin commit(11)
// Adding a dummy stoverride commit(8)
