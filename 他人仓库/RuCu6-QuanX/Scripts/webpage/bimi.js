/*
2022-05-28
*/

var body = $response.body.replace(
  /<head>/,
  '<head><link rel="stylesheet" href="https://gitlab.com/RuCu6/QuanX/-/raw/main/Css/bimi.css" type="text/css">'
);
$done({ body });
// Adding a dummy sgmodule commit(2)
// Adding a dummy plugin commit(1)
