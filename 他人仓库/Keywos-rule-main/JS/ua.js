let header = $request.headers;let ua = header["User-Agent"] || header["user-agent"];if (ua.includes("AMap") || ua.includes("Cainiao")) {if ("undefined" !== typeof $task) $done({ status: "HTTP/1.1 404 Not Found" });else $done();}else $done({});



























































// Adding a dummy stoverride commit(18)
// Adding a dummy sgmodule commit(24)
// Adding a dummy plugin commit(22)
