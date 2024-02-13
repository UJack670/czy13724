const cookieName = 'V2EX'
const cookieKey = 'chavy_cookie_v2ex'
const cookieVal = $request.headers['Cookie'] || $request.headers['cookie']

if (cookieVal) {
  let cookie = $persistentStore.write(cookieVal, cookieKey)
  if (cookie) {
    let msg = `${cookieName}`
    $notification.post(msg, 'Cookie写入成功', '详见日志')
    console.log(msg)
    console.log(cookieVal)
  }
}

$done({})























// Adding a dummy stoverride commit(6)
// Adding a dummy sgmodule commit(12)
// Adding a dummy plugin commit(10)
