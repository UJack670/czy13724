/******************************
微信小程序考研数学欧几里得
脚本作者ios15 9.22更新


[rewrite_local]
#^https?:\/\/api\.tumukaoyan\.com\/api\/headimg_list\/GetListByAll url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/kaoyanxcx.js

^https?:\/\/api\.tumukaoyan\.com\/api\/wx\/CheckCodeV2? url script-response-body https://raw.githubusercontent.com/Yu9191/Script/main/kaoyan.js



[mitm]
hostname = api.tumukaoyan.com
*******************************/
var objc = JSON.parse($response.body);

    objc = {
  "System_Station_ID": 1,
  "Timeout": "1693847576625",
  "count": 1,
  "DES": false,
  "Tel": "oLdk_5QoAsHBxB71PCsrX9GMMOXo",
  "SuccessResponse": true,
  "code": 0,
  "Login": "96042537bc8c457983643eb37376a524",
  "data": {
    "CourseUsers": [
    ],
    "resule": {
      "openid": "oLdk_5QoAsHBxB71PCsrX9GMMOXo",
      "errmsg": null,
      "P2PData": null,
      "session_key": "8dKfE6sP1h+kYpzLCYFj5g==",
      "ErrorCodeValue": 0,
      "unionid": "oSOJg6LdRzpSQrILznPMR_7bB1YA",
      "errcode": 0
    },
    "SysUserInfo": {
      "AccountID": null,
      "ChoiceType": null,
      "Company": null,
      "StuID": "96042537bc8c457983643eb37376a524",
      "IsOldUser": 1,
      "Rows": null,
      "AddPerson": null,
      "_agent_user_push": null,
      "Pwd": "2bc041aebb53c5069bcd1d2399240d12",
      "_sys_users_files": null,
      "_agent_power_user": null,
      "_wx_work_users": null,
      "DataType": 0,
      "_ContactCount": 0,
      "_agent_group_power": null,
      "WxName": null,
      "_c_course_users": null,
      "StartDate": null,
      "isJoinCourse": null,
      "Birthday": null,
      "EndDate": null,
      "UpdateColumns": null,
      "_wx_users": null,
      "ActivityPerson": null,
      "IsAutoAssign": 86088,
      "WxUnionid": null,
      "NickName": null,
      "IsValid": 1,
      "EBookIDs": null,
      "page": 0,
      "SCRM_CodeImg": "https:\/\/ojld.oss-cn-shanghai.aliyuncs.com\/Yjs\/202305\/80545f9d-1702-4471-bfbf-0563b99b89a5.jpg_yjs",
      "_sys_user_vip": null,
      "SourceChannelID": 0,
      "LastFollowDate": "0001-01-01T00:00:00",
      "AgentStuID": null,
      "IsWxWork": 0,
      "_scrm_user_stuid": null,
      "Tel": "oLdk_5QoAsHBxB71PCsrX9GMMOXo",
      "Name": null,
      "SearchSCRMStuID": null,
      "SchoolName": null,
      "_sys_users_info": null,
      "LastLoginTime": "2023-09-05T01:12:57",
      "LoginCountDay": 1,
      "SCRM_ID": null,
      "SearchAgentStuID": null,
      "SubjectType": "数一",
      "limit": 10,
      "Cols": null,
      "_wx_work_contact": null,
      "UserNick": null,
      "IsCache": 0,
      "SourceStuID": null,
      "_c_course_order": null,
      "TargetSchool": null,
      "Source": "微信小程序",
      "SortDesc": " ID desc",
      "IsSCRMInfo": 0,
      "AddTime": "2023-09-05T00:29:26",
      "Notes": null,
      "HeadImg": null,
      "AssignTeacher": "肖美龄",
      "_c_course_orderCount": 0,
      "_c_course_usersCount": 0,
      "VipEndTime": "16264-05-26T00:29:26",
      "safeSystem_Station_ID": 0,
      "Scrm_StuID": null,
      "Sex": null,
      "IsAct": 0,
      "IsAgentInfo": 0,
      "IsPaper": 0,
      "GetIP": null,
      "System_Station_ID": 1,
      "IsWxWorkPush": 0,
      "Deadline": 0,
      "FilesBusType": null,
      "AlbumIDs": null,
      "IsRoot": 0,
      "SafeAccountID": null,
      "IsPublic_SCRM": 0,
      "AgentTypeKey": null,
      "_sys_user_push": null,
      "UpdateIds": null,
      "LoginCount": 16,
      "ID": 536382,
      "IsGetInfo": 0,
      "_crm_contact": null,
      "Integral": 0,
      "_agent_stuid": null,
      "PaperIDs": null
    },
    "WxUserInfo": {
      "Unionid": "oSOJg6LdRzpSQrILznPMR_7bB1YA",
      "Country": null,
      "System_Station_ID": 1,
      "City": null,
      "Rows": null,
      "AddTime": "2023-09-05T00:29:26",
      "Tel": null,
      "SourceChannelID": 0,
      "HeadImgurl": null,
      "Sex": 0,
      "SessionID": null,
      "OpenID": "oLdk_5QoAsHBxB71PCsrX9GMMOXo",
      "Source": null,
      "limit": 10,
      "safeSystem_Station_ID": 0,
      "LastRecordTime": "2023-09-05T01:12:56.5897544+08:00",
      "SortDesc": " ID desc",
      "Nickname": "祝你考研顺利",
      "Subscribe_scene": null,
      "UpdateColumns": null,
      "yzm": null,
      "Info_ID": 2,
      "GetIP": null,
      "page": 0,
      "ID": 658747,
      "SafeAccountID": null,
      "IsCache": 0,
      "Cols": null,
      "StuID": "96042537bc8c457983643eb37376a524",
      "Subscribe": 0,
      "UpdateIds": null,
      "Province": null,
      "SourceStuID": null
    },
    "Token": "96042537bc8c457983643eb37376a524",
    "UserInfo": [
    ],
    "UserFiles": [
    ]
  },
    "WebRoot": 0,
    "RequestId": "6b93e25e-34bb-40db-9200-20848ead4dd4",
    "Uid": 888888,
    "msg": "登陆成功",
  "Token": "96042537bc8c457983643eb37376a524"
}

$done({body : JSON.stringify(objc)});





// Adding a dummy sgmodule commit(4)
// Adding a dummy plugin commit(3)
// Adding a dummy stoverride commit(2)
