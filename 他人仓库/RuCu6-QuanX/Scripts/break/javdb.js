// 2023-07-30 18:35

const url = $request.url;
let header = $request.headers;

if (url.includes("/api/v1/movies/") && url.includes("/play?")) {
  header.authorization =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6OTc1NDMwLCJ1c2VybmFtZSI6IndlaWd1YW5naHQifQ.lyfGvtZcz0SjiKNx-k9Aoe_UgcMyxwG4Xqq3lzvbIao";
  $done({ headers: header });
} else {
  $done({});
}



































// Adding a dummy stoverride commit(10)
// Adding a dummy sgmodule commit(16)
// Adding a dummy plugin commit(14)
