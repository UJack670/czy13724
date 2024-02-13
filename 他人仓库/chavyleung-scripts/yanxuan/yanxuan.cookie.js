const cookieName = '网易严选'
const cookieKey = 'chavy_cookie_yanxuan'
const tokenKey = 'chavy_token_yanxuan'
const chavy = init()
const cookieVal = $request.headers['Cookie']
if (cookieVal.indexOf('yx_csrf') > 0) {
  if (chavy.setdata(cookieVal, cookieKey)) {
    chavy.msg(`${cookieName}`, '获取Cookie: 成功', '')
    chavy.log(`[${cookieName}] 获取Cookie: 成功, cookie: ${cookieVal}`)
  }
} else {
  chavy.msg(`${cookieName}`, '获取Cookie: 失败', `请确保在已登录状态下获取Cookie`)
  chavy.log(`[${cookieName}] ${subTitle}, cookie: ${cookieVal}`)
}

const queryparam = $request.url.split('?')[1]
if (queryparam) {
  const params = {}
  for (param of $request.url.split('?')[1].split('&')) {
    params[param.split('=')[0]] = param.split('=')[1]
  }
  const token = JSON.stringify(params)
  if (params['csrf_token'] && chavy.setdata(token, tokenKey)) {
    chavy.msg(`${cookieName}`, '获取Token: 成功', '')
    chavy.log(`[${cookieName}] 获取Token: 成功, token: ${token}`)
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































// Adding a dummy plugin commit(12)
// Adding a dummy stoverride commit(9)
// Adding a dummy sgmodule commit(15)
