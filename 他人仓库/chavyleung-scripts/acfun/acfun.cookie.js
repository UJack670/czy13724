const cookieName = 'AcFun'
const cookieKey = 'chavy_cookie_acfun'
const tokenKey = 'chavy_token_acfun'
const chavy = init()
const cookieVal = $request.headers['Cookie']
const tokenVal = $request.headers['access_token']
if (cookieVal) {
  if (chavy.setdata(cookieVal, cookieKey)) {
    chavy.msg(`${cookieName}`, '获取Cookie: 成功', '')
    chavy.log(`[${cookieName}] 获取Cookie: 成功, cookie: ${cookieVal}`)
  }
  if (chavy.setdata(tokenVal, tokenKey)) {
    chavy.msg(`${cookieName}`, '获取Token: 成功', '')
    chavy.log(`[${cookieName}] 获取Token: 成功, token: ${tokenVal}`)
  }
}

function init() {
  isSurge = () => {
    return undefined === this.$httpClient ? false : true
  }
  isQuanX = () => {
    return undefined === this.$task ? false : true
  }
  getdata = (key) => {
    if (isSurge()) return $persistentStore.read(key)
    if (isQuanX()) return $prefs.valueForKey(key)
  }
  setdata = (key, val) => {
    if (isSurge()) return $persistentStore.write(key, val)
    if (isQuanX()) return $prefs.setValueForKey(key, val)
  }
  msg = (title, subtitle, body) => {
    if (isSurge()) $notification.post(title, subtitle, body)
    if (isQuanX()) $notify(title, subtitle, body)
  }
  log = (message) => console.log(message)
  get = (url, cb) => {
    if (isSurge()) {
      $httpClient.get(url, cb)
    }
    if (isQuanX()) {
      url.method = 'GET'
      $task.fetch(url).then((resp) => cb(null, {}, resp.body))
    }
  }
  post = (url, cb) => {
    if (isSurge()) {
      $httpClient.post(url, cb)
    }
    if (isQuanX()) {
      url.method = 'POST'
      $task.fetch(url).then((resp) => cb(null, {}, resp.body))
    }
  }
  done = (value = {}) => {
    $done(value)
  }
  return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
}
chavy.done()









// Adding a dummy stoverride commit(2)
// Adding a dummy sgmodule commit(6)
// Adding a dummy plugin commit(5)
