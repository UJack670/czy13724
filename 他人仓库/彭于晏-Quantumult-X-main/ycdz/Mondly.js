/******************************

脚本功能：Mondly: 33种语言轻松学——解锁VIP
下载地址：https://is.gd/9a3WSk
软件版本：9.34.0
脚本作者：彭于晏💞
更新时间：2022-12-20
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/api\.mondlylanguages\.com\/v3\/ios\/user\/sync url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Mondly.js

[mitm] 

hostname = api.mondlylanguages.com



*******************************/


var objc = JSON.parse($response.body);

    objc = 
{
  "profiles" : [
    {
      "score" : 39,
      "streak_record" : 1,
      "target_language_id" : 19,
      "streak_date" : "2022-12-03",
      "level" : 2,
      "streak_days" : [
        {
          "date" : "2022-12-03",
          "score" : 13
        }
      ],
      "difficulty" : 1,
      "time_spent" : [

      ],
      "progress" : {
        "review_lessons_completed" : [

        ],
        "weekly_lessons_completed" : [

        ],
        "daily_lessons_completed" : [

        ],
        "vocabularies_completed" : [

        ],
        "conversation_items_recorded" : [

        ],
        "lessons_completed" : [

        ],
        "oxford_tests_completed" : [

        ],
        "bots_completed" : [

        ],
        "monthly_lessons_completed" : [

        ]
      },
      "streak_count" : 1
    }
  ],
  "preferences" : [
    {
      "id" : 14,
      "value" : 2
    }
  ],
  "ab_tests" : [
    {
      "new_installation" : false,
      "mother_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        21,
        27,
        31,
        34,
        33
      ],
      "segments" : [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "min_app_code" : 7003009,
      "params" : {
        "isActive" : true
      },
      "min_user_id" : 1,
      "target_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        26,
        21,
        27,
        31,
        32,
        34,
        33,
        39,
        40,
        41,
        42,
        43,
        44,
        45
      ],
      "version" : 2,
      "max_app_code" : -1,
      "max_user_id" : -1,
      "test_id" : 44
    },
    {
      "new_installation" : false,
      "mother_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        21,
        27,
        31,
        34,
        33
      ],
      "segments" : [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "min_app_code" : 9026000,
      "params" : {
        "isActive" : true
      },
      "min_user_id" : 1,
      "target_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        26,
        21,
        27,
        31,
        32,
        34,
        33,
        39,
        40,
        41,
        42,
        43,
        44,
        45
      ],
      "version" : 1,
      "max_app_code" : -1,
      "max_user_id" : -1,
      "test_id" : 81
    },
    {
      "new_installation" : false,
      "mother_languages" : [
        29,
        27
      ],
      "segments" : [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "min_app_code" : 7000000,
      "params" : {
        "isActive" : true
      },
      "min_user_id" : "1",
      "target_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        26,
        21,
        27,
        31,
        32,
        34,
        33,
        39,
        40,
        41,
        42,
        43,
        44,
        45
      ],
      "version" : 1,
      "max_app_code" : -1,
      "max_user_id" : -1,
      "test_id" : 22
    },
    {
      "new_installation" : false,
      "mother_languages" : [
        1,
        19,
        2,
        5,
        4,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        22,
        28,
        29,
        35,
        21,
        27,
        33
      ],
      "segments" : [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "min_app_code" : 9000000,
      "params" : {
        "isActive" : true
      },
      "min_user_id" : 1,
      "target_languages" : [
        1,
        19,
        2,
        5,
        4,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        22,
        28,
        29,
        35,
        21,
        27,
        33
      ],
      "version" : 6,
      "max_app_code" : -1,
      "max_user_id" : -1,
      "test_id" : 48
    },
    {
      "new_installation" : false,
      "mother_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        21,
        27,
        31,
        34,
        33
      ],
      "segments" : [
        0,
        2,
        4,
        6,
        8
      ],
      "min_app_code" : 9012000,
      "params" : {
        "isActive" : false
      },
      "min_user_id" : 1,
      "target_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        26,
        21,
        27,
        31,
        32,
        34,
        33,
        39,
        40,
        41,
        42,
        43,
        44,
        45
      ],
      "version" : 1,
      "max_app_code" : -1,
      "max_user_id" : -1,
      "test_id" : 64
    },
    {
      "new_installation" : false,
      "mother_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        21,
        27,
        31,
        34,
        33
      ],
      "segments" : [
        1,
        3,
        5,
        7,
        9
      ],
      "min_app_code" : 9020001,
      "params" : {
        "isActive" : true
      },
      "min_user_id" : 1,
      "target_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        26,
        21,
        27,
        31,
        32,
        34,
        33,
        39,
        40,
        41,
        42,
        43,
        44,
        45
      ],
      "version" : 2,
      "max_app_code" : -1,
      "max_user_id" : -1,
      "test_id" : 70
    },
    {
      "new_installation" : false,
      "mother_languages" : [
        33
      ],
      "segments" : [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "min_app_code" : 9017000,
      "params" : {
        "isActive" : true
      },
      "min_user_id" : 1,
      "target_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        26,
        21,
        27,
        31,
        32,
        34,
        33,
        39,
        40,
        41,
        42,
        43,
        44,
        45
      ],
      "version" : 1,
      "max_app_code" : -1,
      "max_user_id" : -1,
      "test_id" : 69
    },
    {
      "new_installation" : false,
      "mother_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        21,
        27,
        31,
        34,
        33
      ],
      "segments" : [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "min_app_code" : 9022000,
      "params" : {
        "dates" : [
          "2022-11-20",
          "2022-11-27",
          "2022-12-04"
        ]
      },
      "min_user_id" : 1,
      "target_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        26,
        21,
        27,
        31,
        32,
        34,
        33,
        39,
        40,
        41,
        42,
        43,
        44,
        45
      ],
      "version" : 1,
      "max_app_code" : -1,
      "max_user_id" : -1,
      "test_id" : 75
    },
    {
      "new_installation" : false,
      "mother_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        21,
        27,
        31,
        34,
        33
      ],
      "segments" : [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "min_app_code" : 9030000,
      "params" : {
        "isActive" : true
      },
      "min_user_id" : 1,
      "target_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        26,
        21,
        27,
        31,
        32,
        34,
        33,
        39,
        40,
        41,
        42,
        43,
        44,
        45
      ],
      "version" : 1,
      "max_app_code" : -1,
      "max_user_id" : -1,
      "test_id" : 83
    },
    {
      "new_installation" : false,
      "mother_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        21,
        27,
        31,
        34,
        33
      ],
      "segments" : [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "min_app_code" : 7000000,
      "params" : {
        "isActive" : true
      },
      "min_user_id" : "1",
      "target_languages" : [
        30,
        24,
        31,
        32,
        40,
        41,
        42,
        44,
        45
      ],
      "version" : 2,
      "max_app_code" : -1,
      "max_user_id" : -1,
      "test_id" : 22
    },
    {
      "new_installation" : false,
      "mother_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        21,
        27,
        31,
        34,
        33
      ],
      "segments" : [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "min_app_code" : 9022000,
      "params" : {
        "isActive" : true
      },
      "min_user_id" : 1,
      "target_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        26,
        21,
        27,
        31,
        32,
        34,
        33,
        39,
        40,
        41,
        42,
        43,
        44,
        45
      ],
      "version" : 1,
      "max_app_code" : -1,
      "max_user_id" : -1,
      "test_id" : 78
    },
    {
      "new_installation" : false,
      "mother_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        21,
        27,
        31,
        34,
        33
      ],
      "segments" : [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "min_app_code" : 7003014,
      "params" : {
        "isLiveActive" : true,
        "isDatabaseActive" : true
      },
      "min_user_id" : 1,
      "target_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        26,
        21,
        27,
        31,
        34,
        33,
        39,
        43
      ],
      "version" : 1,
      "max_app_code" : -1,
      "max_user_id" : -1,
      "test_id" : 35
    },
    {
      "new_installation" : false,
      "mother_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        21,
        27,
        31,
        34,
        33
      ],
      "segments" : [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "min_app_code" : 8000000,
      "params" : {
        "isActive" : true
      },
      "min_user_id" : 1,
      "target_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        26,
        21,
        27,
        31,
        32,
        34,
        33,
        39,
        40,
        41,
        42,
        43,
        44,
        45
      ],
      "version" : 1,
      "max_app_code" : -1,
      "max_user_id" : -1,
      "test_id" : 50
    },
    {
      "new_installation" : false,
      "mother_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        21,
        27,
        31,
        34,
        33
      ],
      "segments" : [
        1,
        3,
        5,
        7,
        9
      ],
      "min_app_code" : 9012000,
      "params" : {
        "isActive" : true
      },
      "min_user_id" : 1,
      "target_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        26,
        21,
        27,
        31,
        32,
        34,
        33,
        39,
        40,
        41,
        42,
        43,
        44,
        45
      ],
      "version" : 2,
      "max_app_code" : -1,
      "max_user_id" : -1,
      "test_id" : 64
    },
    {
      "new_installation" : false,
      "mother_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        21,
        27,
        31,
        34,
        33
      ],
      "segments" : [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "min_app_code" : 9000000,
      "params" : {
        "isActive" : true
      },
      "min_user_id" : 1,
      "target_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        26,
        21,
        27,
        31,
        32,
        34,
        33,
        39,
        40,
        41,
        42,
        43,
        44,
        45
      ],
      "version" : 1,
      "max_app_code" : -1,
      "max_user_id" : -1,
      "test_id" : 55
    },
    {
      "new_installation" : false,
      "mother_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        21,
        27,
        31,
        34,
        33
      ],
      "segments" : [
        0,
        2,
        4,
        6,
        8
      ],
      "min_app_code" : 9020001,
      "params" : {
        "isActive" : false
      },
      "min_user_id" : 1,
      "target_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        26,
        21,
        27,
        31,
        32,
        34,
        33,
        39,
        40,
        41,
        42,
        43,
        44,
        45
      ],
      "version" : 1,
      "max_app_code" : -1,
      "max_user_id" : -1,
      "test_id" : 70
    },
    {
      "new_installation" : false,
      "mother_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        21,
        27,
        31,
        34,
        33
      ],
      "segments" : [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "min_app_code" : 9022000,
      "params" : {
        "dates" : [

        ]
      },
      "min_user_id" : 1,
      "target_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        26,
        21,
        27,
        31,
        32,
        34,
        33,
        39,
        40,
        41,
        42,
        43,
        44,
        45
      ],
      "version" : 1,
      "max_app_code" : -1,
      "max_user_id" : -1,
      "test_id" : 76
    },
    {
      "new_installation" : false,
      "mother_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        21,
        27,
        31,
        34,
        33
      ],
      "segments" : [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "min_app_code" : 9022000,
      "params" : {
        "isActive" : true
      },
      "min_user_id" : 1,
      "target_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        26,
        21,
        27,
        31,
        32,
        34,
        33,
        39,
        40,
        41,
        42,
        43,
        44,
        45
      ],
      "version" : 1,
      "max_app_code" : 9034000,
      "max_user_id" : -1,
      "test_id" : 79
    },
    {
      "new_installation" : false,
      "mother_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        21,
        27,
        31,
        34,
        33
      ],
      "segments" : [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "min_app_code" : 9022000,
      "params" : {
        "isActive" : true
      },
      "min_user_id" : 1,
      "target_languages" : [
        1,
        19,
        2,
        5,
        4,
        23,
        7,
        8,
        9,
        3,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        17,
        10,
        18,
        30,
        22,
        24,
        28,
        25,
        29,
        35,
        26,
        21,
        27,
        31,
        32,
        34,
        33,
        39,
        40,
        41,
        42,
        43,
        44,
        45
      ],
      "version" : 1,
      "max_app_code" : 9034000,
      "max_user_id" : -1,
      "test_id" : 80
    }
  ],
  "parsed_transactions" : [

  ],
  "purchased_products" : [
    {
      "is_from_current_platform" : true,
      "id" : "12month_all_4_trial",
      "role" : "12month",
      "is_grace_period" : false,
      "is_auto_renewing" : false,
      "expiration_date" : 1670665666,
      "is_billing_retry_period" : false,
      "is_initial_purchase" : false,
      "is_in_free_trial_period" : true,
      "is_upgraded" : false
    },
    {
      "is_from_current_platform" : false,
      "id" : "categ22",
      "role" : "categ22",
      "is_grace_period" : false,
      "is_auto_renewing" : false,
      "expiration_date" : 0,
      "is_billing_retry_period" : false,
      "is_initial_purchase" : false,
      "is_in_free_trial_period" : false,
      "is_upgraded" : false
    }
  ],
  "storage_base_url" : "s3-eu-west-1.amazonaws.com",
  "projects" : [

  ],
  "user" : {
    "contact_email" : "8999999@qq.com",
    "state" : 1,
    "huawei" : null,
    "native" : null,
    "ilmoe" : null,
    "pearson" : null,
    "picture" : false,
    "user_id" : "84047966",
    "muid" : "84047966$V3ADFtj0xe",
    "google" : null,
    "apple" : "000285.0991ccc961e34ed6b61d9b869d7686a1.0807",
    "auth_key" : "60d7981cb0a20da19ec2dcc9fa0da7d60d8afff920b0d1ae55d8d459a14314faa:2:{i:0;s:8:\"auth_key\";i:1;s:54:\"[84047966,\"ln0at3ZIuVlFlGeGUxEVUScE61_F_jqS\",31536000]\";}",
    "facebook" : null,
    "country" : "CN",
    "name" : "彭于晏",
    "email" : null
  }
}
$done({body : JSON.stringify(objc)});






















// Adding a dummy plugin commit(9)
// Adding a dummy stoverride commit(6)
// Adding a dummy sgmodule commit(12)
