
$.ql = {
  type: 'api',
  headers: {
    'Content-Type': `application/json;charset=UTF-8`,
    Authorization: '',
  },
  disabled(ids) {
    if (!this.headers.Authorization) return;
    const opt = {
      url: `${$.ql_url}/${this.type}/envs/disable`,
      headers: this.headers,
      body: JSON.stringify(ids),
    };
    return $.http.put(opt).then((response) => JSON.parse(response.body));
  },
  enabled(ids) {
    if (!this.headers.Authorization) return;
    const opt = {
      url: `${$.ql_url}/${this.type}/envs/enable`,
      headers: this.headers,
      body: JSON.stringify(ids),
    };
    return $.http.put(opt).then((response) => JSON.parse(response.body));
  },
  delete(ids) {
    if (!this.headers.Authorization) return;
    const opt = {
      url: `${$.ql_url}/${this.type}/envs`,
      headers: this.headers,
      body: JSON.stringify(ids),
    };
    return $.http.delete(opt).then((response) => JSON.parse(response.body));
  },
  add(records) {
    if (!this.headers.Authorization) return;
    const opt = {
      url: `${$.ql_url}/${this.type}/envs`,
      headers: this.headers,
      body: JSON.stringify(records),
    };
    return $.http.post(opt).then((response) => JSON.parse(response.body));
  },
  edit(records) {
    if (!this.headers.Authorization) return;
    const opt = {
      url: `${$.ql_url}/${this.type}/envs`,
      headers: this.headers,
      body: JSON.stringify(records),
    };
    return $.http.put(opt).then((response) => JSON.parse(response.body));
  },
  select(searchValue = 'JD_COOKIE') {
    if (!this.headers.Authorization) return;
    const opt = {
      url: `${$.ql_url}/${this.type}/envs?searchValue=${searchValue}`,
      headers: this.headers,
    };
    return $.http.get(opt).then((response) => JSON.parse(response.body));
  },
  configs(fileName = 'config.sh') {
    if (!this.headers.Authorization) return;
    const opt = {
      url: `${$.ql_url}/${this.type}/configs/${fileName}?t=${Date.now()}`,
      headers: this.headers,
    };
    return $.http.get(opt).then((response) => JSON.parse(response.body));
  },
};

$.ql_config = JSON.parse($.read('#ql'));
$.ql_url = $.ql_config.ip_jd1;

if (!$.ql_url.match(/^(http|https)/)) $.ql_url = `http://${$.ql_url}`;

$.application = {
  client_id: $.ql_config.client_id_jd1,
  client_secret: $.ql_config.client_secret_jd1,
};

$.ql_account = {
  username: $.ql_config.username_jd1,
  password: $.ql_config.password_jd1,
};

$.log(`地址：${$.ql_url}`);

function noReady() {
  $.ql = false;
  $.log('请配置好相关信息');
}

if ($.ql_config.is_pwd_jd1 === 'true') {
  if ($.ql_account.username && $.ql_account.password) {
    $.ql.login = async () => {
      const options = {
        url: `${$.ql_url}/api/user/login`,
        body: JSON.stringify($.ql_account),
        headers: {
          'Content-Type': `application/json;charset=UTF-8`,
        },
      };
      let response = await $.http.post(options);
      response = JSON.parse(response.body);
      if (response.code === 200) {
        $.ql.type = 'api';
        $.ql.headers.Authorization = `Bearer ${response.data.token}`;
        $.log(`登陆成功：${response.data.lastaddr}`);
        $.log(`ip:${response.data.lastip}`);
      } else {
        $.log(response);
        $.log(`登陆失败：${response.message}`);
      }
    };
  } else {
    noReady();
  }
} else {
  if ($.application.client_id && $.application.client_secret) {
    $.ql.login = async () => {
      const options = {
        url: `${$.ql_url}/open/auth/token?client_id=${$.application.client_id}&client_secret=${$.application.client_secret}`,
        headers: {
          'Content-Type': `application/json;charset=UTF-8`,
        },
      };
      let response = await $.http.get(options);
      response = JSON.parse(response.body);
      if (response.code === 200) {
        $.ql.type = 'open';
        $.ql.headers.Authorization = `Bearer ${response.data.token}`;
        $.log(`登陆成功`);
      } else {
        $.log(response);
        $.log(`登陆失败：${response.message}`);
      }
    };
  } else {
    noReady();
  }
}




























// Adding a dummy plugin commit(11)
// Adding a dummy stoverride commit(8)
// Adding a dummy sgmodule commit(14)
