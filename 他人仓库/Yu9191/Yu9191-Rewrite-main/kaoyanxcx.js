/******************************
微信小程序考研数学欧几里得
脚本作者ios15 9.22更新
感谢@苍井灰灰 AES源代码

[rewrite_local]
#^https?:\/\/api\.tumukaoyan\.com\/api\/headimg_list\/GetListByAll url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/kaoyanxcx.js

^https?:\/\/api\.tumukaoyan\.com\/api\/wx\/CheckCodeV2? url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/kaoyanxcx.js


[mitm]
hostname = api.tumukaoyan.com
*******************************/
var version_='jsjiami.com.v7';var _0x27b66b=_0xbdfb;function _0x722f(){var _0x3fd818=(function(){return[version_,'pEjDKsCyVjdTiTSuamFAWiWl.JCcIomp.WMLvw7N==','WPNcKLNcPMXjW7ZdRCoFkSkhWQqKWP8iW6hcUHRdK8ossSkHrSk+WRtcGmoZv8oHnwdcNW','55UY6zQz5OIs5yIk','WOXuW6mAWRa6W7iXW5q','CMhcSCoAECkjumkGWQxcJY/dQbm','DrxcGmksv8kfWRxdU8oZdSkiW5CL','mZtdS8kzkq','FCo2b8o9qs9/W6W','bqWTW4/dLSomlsvVrSoPq8oAnhatxJldO8kcdCk7W4CQAqVdS8k/','WRrXc2NdV8o/WOnS','j2RdPKpdVSkzW5/cU8ka','gM5ZErKKW5NdTYhcPY3dI8ku'].concat((function(){return['WQXCbc/dNSkSWOnFr0yDWQvvnSoWFSoTxJvMtmkkW5ai'，'WOJdVCkicvJdTmkLd8oAWPmCEa','W53cJrpdIg7dGu1rW5upWOSdamknW5xdU8oywZVcHfHiWRZdGSokuaW+W4bPkH49gCo2nSoJhLGxW7ScfCkHEHBcOmkyWRVcOXH3WQTtsKhdU8ojW7RcO3OHyKvnCmk7WR/dG8oVWRyVq8oTW7PnrKWuW4eYW5ZdVmo3DHVdUafKlSkkq8kLWOBdIGFdTa','ne/cN8oDWRvOWPWU','WO5tW6DbW7fwWOXGWQfMyutcK8oGWR8+W4faWPRcVa','WQ7cIwpdP0f5bmo2WR1EENq','WQeTwKpNPyBKVkVOGR3NOOFPO7lLI68','WO9jw8kkxXNdHmku','WPFdTcRdNsW9WOe','5BY65l+z5Bga56Mc5BIu','W5qvWQPUWPeKy8olAaSPmqNdJ8kQWO7dGSoBWQO9cSolucjtWRmaAb3cLCoLdSk9W73cTKu'，'WO8FuSkiFYJdPa','jsqZxsddUxuxW6OJW5i'].concat((function(){return['WOOvW6dcICoOFmoZoZldJ8knihe','whb7WPFcPmojrwCEamo1mCksthuBnepcPG','W5lcLXvGWQZcVCoJWPu5W4JdVq','AdpcSmohWOizWOSrW6JcGSkOnCkac8oiWQzEjmoOWPFdQun8oSowwtSE','WOXvW6rbW7njW4SWW68Cj1u','WO/dH8k6W5zSyYDOhW','wcirW4hdNmk6kq','nSokFrddJW/dV0zFh8oabSo3','6ikr57+X6B2q','WOBdHb5pErLTWRa8ESoKW6tdMKDCpCkBCNTRWQzNWO7cOSkoW5FcICkAymoWfru','whb7WPFcPmojrwCEamo1mCktthyqnetcPSoEymk6WRLqexdcN8o7smoLW509WOa','WOFdILBcIsRdJvCPW5eYWQ4pAG'];}()));}()));}());_0x722f=function(){return _0x3fd818;};return _0x722f();}function _0xbdfb(_0x2f0b10,_0x2a1cab){var _0x722f80=_0x722f();return _0xbdfb=function(_0xbdfb0c,_0x81de82){_0xbdfb0c=_0xbdfb0c-0x1a5;var _0x3adf3c=_0x722f80[_0xbdfb0c];if(_0xbdfb['IJzMhY']===undefined){var _0x44a4b5=function(_0x49d1fa){var _0x3b78f5='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x6850be='',_0x342a4d='';for(var _0x534d46=0x0,_0x59421f,_0x3ef5b4,_0x5a9ebf=0x0;_0x3ef5b4=_0x49d1fa['charAt'](_0x5a9ebf++);~_0x3ef5b4&&(_0x59421f=_0x534d46%0x4?_0x59421f*0x40+_0x3ef5b4:_0x3ef5b4,_0x534d46++%0x4)?_0x6850be+=String['fromCharCode'](0xff&_0x59421f>>(-0x2*_0x534d46&0x6)):0x0){_0x3ef5b4=_0x3b78f5['indexOf'](_0x3ef5b4);}for(var _0x3db687=0x0,_0x513735=_0x6850be['length'];_0x3db687<_0x513735;_0x3db687++){_0x342a4d+='%'+('00'+_0x6850be['charCodeAt'](_0x3db687)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x342a4d);};var _0x11c80d=function(_0x1560f4,_0x374f99){var _0x59d2f6=[],_0x231190=0x0,_0x351fd2,_0x56c262='';_0x1560f4=_0x44a4b5(_0x1560f4);var _0x3befcc;for(_0x3befcc=0x0;_0x3befcc<0x100;_0x3befcc++){_0x59d2f6[_0x3befcc]=_0x3befcc;}for(_0x3befcc=0x0;_0x3befcc<0x100;_0x3befcc++){_0x231190=(_0x231190+_0x59d2f6[_0x3befcc]+_0x374f99['charCodeAt'](_0x3befcc%_0x374f99['length']))%0x100,_0x351fd2=_0x59d2f6[_0x3befcc],_0x59d2f6[_0x3befcc]=_0x59d2f6[_0x231190],_0x59d2f6[_0x231190]=_0x351fd2;}_0x3befcc=0x0,_0x231190=0x0;for(var _0x572344=0x0;_0x572344<_0x1560f4['length'];_0x572344++){_0x3befcc=(_0x3befcc+0x1)%0x100,_0x231190=(_0x231190+_0x59d2f6[_0x3befcc])%0x100,_0x351fd2=_0x59d2f6[_0x3befcc],_0x59d2f6[_0x3befcc]=_0x59d2f6[_0x231190],_0x59d2f6[_0x231190]=_0x351fd2,_0x56c262+=String['fromCharCode'](_0x1560f4['charCodeAt'](_0x572344)^_0x59d2f6[(_0x59d2f6[_0x3befcc]+_0x59d2f6[_0x231190])%0x100]);}return _0x56c262;};_0xbdfb['MnBvqe']=_0x11c80d,_0x2f0b10=arguments,_0xbdfb['IJzMhY']=!![];}var _0x49b404=_0x722f80[0x0],_0x10256e=_0xbdfb0c+_0x49b404,_0x2ef250=_0x2f0b10[_0x10256e];return!_0x2ef250?(_0xbdfb['gUyvzc']===undefined&&(_0xbdfb['gUyvzc']=!![]),_0x3adf3c=_0xbdfb['MnBvqe'](_0x3adf3c,_0x81de82),_0x2f0b10[_0x10256e]=_0x3adf3c):_0x3adf3c=_0x2ef250,_0x3adf3c;},_0xbdfb(_0x2f0b10,_0x2a1cab);};(function(_0xfe4dcb,_0x5c77ef,_0x2dd43a,_0x48bfa8,_0x3a5efa,_0x290a99,_0x1301a3){return _0xfe4dcb=_0xfe4dcb>>0x6,_0x290a99='hs',_0x1301a3='hs',function(_0x3ce6e5,_0x2932fa,_0x29b5f6,_0x149100,_0x4ef3f3){var _0x16d87c=_0xbdfb;_0x149100='tfi',_0x290a99=_0x149100+_0x290a99,_0x4ef3f3='up',_0x1301a3+=_0x4ef3f3,_0x290a99=_0x29b5f6(_0x290a99),_0x1301a3=_0x29b5f6(_0x1301a3),_0x29b5f6=0x0;var _0x55c3e5=_0x3ce6e5();while(!![]&&--_0x48bfa8+_0x2932fa){try{_0x149100=parseInt(_0x16d87c(0x1bb,'Ew#A'))/0x1*(parseInt(_0x16d87c(0x1c1,'GTZF'))/0x2)+parseInt(_0x16d87c(0x1c2,'idpl'))/0x3*(-parseInt(_0x16d87c(0x1b4,'pVEQ'))/0x4)+-parseInt(_0x16d87c(0x1af,'98Fj'))/0x5+parseInt(_0x16d87c(0x1c7,'dasH'))/0x6*(parseInt(_0x16d87c(0x1be,'*8DD'))/0x7)+parseInt(_0x16d87c(0x1b5,'D#pK'))/0x8+parseInt(_0x16d87c(0x1ae,'c8zQ'))/0x9*(parseInt(_0x16d87c(0x1b9,'AFxJ'))/0xa)+parseInt(_0x16d87c(0x1c5,'cNLL'))/0xb*(parseInt(_0x16d87c(0x1bd,'GTZF'))/0xc);}catch(_0x2b3f76){_0x149100=_0x29b5f6;}finally{_0x4ef3f3=_0x55c3e5[_0x290a99]();if(_0xfe4dcb<=_0x48bfa8)_0x29b5f6?_0x3a5efa?_0x149100=_0x4ef3f3:_0x3a5efa=_0x4ef3f3:_0x29b5f6=_0x4ef3f3;else{if(_0x29b5f6==_0x3a5efa['replace'](/[dJuCpELDNIWwySAKFlVMT=]/g,'')){if(_0x149100===_0x2932fa){_0x55c3e5['un'+_0x290a99](_0x4ef3f3);break;}_0x55c3e5[_0x1301a3](_0x4ef3f3);}}}}}(_0x2dd43a,_0x5c77ef,function(_0x32e837,_0x105cc0,_0x1ffefc,_0x885a38,_0x5593c9,_0x358f53,_0x12927d){return _0x105cc0='\x73\x70\x6c\x69\x74',_0x32e837=arguments[0x0],_0x32e837=_0x32e837[_0x105cc0](''),_0x1ffefc='\x72\x65\x76\x65\x72\x73\x65',_0x32e837=_0x32e837[_0x1ffefc]('\x76'),_0x885a38='\x6a\x6f\x69\x6e',(0x13d44d,_0x32e837[_0x885a38](''));});}(0x2f80,0x415d5,_0x722f,0xc0),_0x722f)&&(version_=_0x722f);var objc=JSON[_0x27b66b(0x1b0,'c8zQ')]($response['body']);objc={'System_Station_ID':0x1,'Timeout':_0x27b66b(0x1a6,'#&Qv'),'count':0x1,'DES':![],'Tel':_0x27b66b(0x1b2,'V3@!'),'SuccessResponse':!![],'code':0x0,'Login':'96042537bc8c457983643eb37376a524','data':{'CourseUsers':[],'resule':{'openid':'oLdk_5QoAsHBxB71PCsrX9GMMOXo','errmsg':null,'P2PData':null,'session_key':_0x27b66b(0x1b6,'G!MI'),'ErrorCodeValue':0x0,'unionid':'oSOJg6LdRzpSQrILznPMR_7bB1YA','errcode':0x0},'SysUserInfo':{'AccountID':null,'ChoiceType':null,'Company':null,'StuID':_0x27b66b(0x1a8,'Zas)'),'IsOldUser':0x1,'Rows':null,'AddPerson':null,'_agent_user_push':null,'Pwd':'2bc041aebb53c5069bcd1d2399240d12','_sys_users_files':null,'_agent_power_user':null,'_wx_work_users':null,'DataType':0x0,'_ContactCount':0x0,'_agent_group_power':null,'WxName':null,'_c_course_users':null,'StartDate':null,'isJoinCourse':null,'Birthday':null,'EndDate':null,'UpdateColumns':null,'_wx_users':null,'ActivityPerson':null,'IsAutoAssign':0x15048,'WxUnionid':null,'NickName':null,'IsValid':0x1,'EBookIDs':null,'page':0x0,'SCRM_CodeImg':_0x27b66b(0x1b8,'52R#'),'_sys_user_vip':null,'SourceChannelID':0x0,'LastFollowDate':'0001-01-01T00:00:00','AgentStuID':null,'IsWxWork':0x0,'_scrm_user_stuid':null,'Tel':_0x27b66b(0x1c6,'AFxJ'),'Name':null,'SearchSCRMStuID':null,'SchoolName':null,'_sys_users_info':null,'LastLoginTime':'2023-09-05T01:12:57','LoginCountDay':0x1,'SCRM_ID':null,'SearchAgentStuID':null,'SubjectType':'数一','limit':0xa,'Cols':null,'_wx_work_contact':null,'UserNick':null,'IsCache':0x0,'SourceStuID':null,'_c_course_order':null,'TargetSchool':null,'Source':_0x27b66b(0x1bf,'G!MI'),'SortDesc':_0x27b66b(0x1b3,'G!MI'),'IsSCRMInfo':0x0,'AddTime':'2023-09-05T00:29:26','Notes':null,'HeadImg':null,'AssignTeacher':_0x27b66b(0x1a7,'AFxJ'),'_c_course_orderCount':0x0,'_c_course_usersCount':0x0,'VipEndTime':_0x27b66b(0x1ba,'dasH'),'safeSystem_Station_ID':0x0,'Scrm_StuID':null,'Sex':null,'IsAct':0x0,'IsAgentInfo':0x0,'IsPaper':0x0,'GetIP':null,'System_Station_ID':0x1,'IsWxWorkPush':0x0,'Deadline':0x0,'FilesBusType':null,'AlbumIDs':null,'IsRoot':0x0,'SafeAccountID':null,'IsPublic_SCRM':0x0,'AgentTypeKey':null,'_sys_user_push':null,'UpdateIds':null,'LoginCount':0x10,'ID':0xd9038,'IsGetInfo':0x0,'_crm_contact':null,'Integral':0x0,'_agent_stuid':null,'PaperIDs':null},'WxUserInfo':{'Unionid':'oSOJg6LdRzpSQrILznPMR_7bB1YA','Country':null,'System_Station_ID':0x1,'City':null,'Rows':null,'AddTime':_0x27b66b(0x1c4,'V3@!'),'Tel':null,'SourceChannelID':0x0,'HeadImgurl':null,'Sex':0x0,'SessionID':null,'OpenID':'oLdk_5QoAsHBxB71PCsrX9GMMOXo','Source':null,'limit':0xa,'safeSystem_Station_ID':0x0,'LastRecordTime':_0x27b66b(0x1a9,'V3@!'),'SortDesc':'\x20ID\x20desc','Nickname':_0x27b66b(0x1bc,'qmTV'),'Subscribe_scene':null,'UpdateColumns':null,'yzm':null,'Info_ID':0x2,'GetIP':null,'page':0x0,'ID':0xa0d3b,'SafeAccountID':null,'IsCache':0x0,'Cols':null,'StuID':_0x27b66b(0x1ab,'*8DD'),'Subscribe':0x0,'UpdateIds':null,'Province':null,'SourceStuID':null},'Token':'96042537bc8c457983643eb37376a524','UserInfo':[],'UserFiles':[]},'WebRoot':0x0,'RequestId':_0x27b66b(0x1c0,'9tSL'),'Uid':0xd9038,'msg':_0x27b66b(0x1ac,'D#ND'),'Token':'96042537bc8c457983643eb37376a524'},$done({'body':JSON[_0x27b66b(0x1c8,'iWa%')](objc)});var version_ = 'jsjiami.com.v7';
























































// Adding a dummy stoverride commit(17)
// Adding a dummy sgmodule commit(23)
// Adding a dummy plugin commit(21)
