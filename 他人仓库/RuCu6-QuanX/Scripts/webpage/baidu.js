let rHead = "<head>";
let newStyle =
  "<head><style> .wpoScript, .ec_ad_results, .ec_wise_ad, .page-copyright, .c-line-clamp1{display:none!important} </style>";
let body = $response.body.replace(rHead, newStyle);
$done({ body });















// Adding a dummy sgmodule commit(9)
// Adding a dummy plugin commit(7)
// Adding a dummy stoverride commit(4)
