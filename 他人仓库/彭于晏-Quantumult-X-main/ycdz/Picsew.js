/******************************

脚本功能：Picsew滚动截图+解锁订阅
下载地址：http://mtw.so/5AOWu4
软件版本：3.8.6
脚本作者：彭于晏
更新时间：2022-9-2
问题反馈：QQ+89996462
TG群：https://t.me/plus8889
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Picsew.js

[mitm] 
hostname = buy.itunes.apple.com


*******************************/

['sojson.v4']["\x66\x69\x6c\x74\x65\x72"]["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"](((['sojson.v4']+[])["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"]['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65']['\x61\x70\x70\x6c\x79'](null,"118G97d114n32W98M111j100C121M32m61f32M36g114M101w115r112X111F110W115e101n46g98K111q100R121b59U10M118f97O114C32Z111F98K106b107l32F61g32O74A83Y79T78x46u112o97r114p115n101A40l98d111T100R121o41C59q10K10l111g98A106B107l32E61T32b123a10F34v114A101g99N101y105c112h116T34t58R123Q34o114f101u99Z101m105a112O116S95i116K121w112v101t34A58P34D80L114w111i100k117J99O116S105G111F110n34E44I32N34r97D100a97P109V95v105L100E34W58F49w50z48E56V49v52x53c49B54L55n44t32D34C97E112z112B95v105z116F101O109v95L105o100d34f58B49p50I48l56m49U52p53U49D54r55Y44v32z34z98k117U110E100I108W101C95H105u100D34A58B34Y99I111Y109r46k115a117P103X97q114C109j111j46X83Y99o114d111L108L108r67k108T105Z112R34P44k32H34Q97I112N112B108G105y99b97Z116Q105g111V110D95e118d101r114O115t105r111S110k34m58E34H51V48V56Y50J34P44p32W34u100X111F119G110K108b111F97y100J95v105j100h34B58Y57p57a57I57Y44P32P34q118J101F114g115O105B111c110E95m101T120r116Z101Y114Y110N97y108B95F105Z100g101c110R116Y105k102R105L101n114Z34C58G56u51v55Y55R52R55M51N52C50R44v32o34n114r101q99S101a105e112l116Y95C99C114e101Y97P116l105e111g110U95b100P97F116e101Z34j58i34T50w48O50f48M45Q48M57f45u49h51d32e48C54Y58z53a56V58h51p52l32C69z116x99K47I71O77H84Q34A44q32N34E114w101u99v101Z105x112R116x95z99f114T101W97a116s105F111j110Z95t100Q97c116c101P95O109a115z34w58D34n49C53H57s57g57W56L48Y51f49R52P48N48u48q34g44A32b34Q114g101V99T101N105n112d116U95r99Q114f101d97G116H105h111p110O95s100K97F116b101b95j112z115P116z34Q58e34c50s48n50U48z45w48y57w45W49k50V32n50S51t58F53n56Y58p51J52j32g65y109p101D114t105A99J97C47S76y111L115m95Z65e110j103q101F108T101n115M34q44d32W34y114C101W113J117C101e115u116H95D100V97u116u101L34L58o34T50l48V50z48g45a48L57w45j49F51t32M48j54M58X53g57q58T49C53u32V69V116n99g47z71V77G84p34w44A32Z34H114K101L113e117D101H115Y116C95M100s97B116t101r95a109W115A34E58t34J49m53q57Y57W57a56d48D51y53I53y55L57d57m34h44f32S34A114E101x113M117r101m115D116c95D100Y97q116H101Y95l112f115Y116V34L58N34K50S48w50c48K45b48f57g45e49v50a32h50O51F58J53c57o58z49c53q32G65y109h101B114S105W99h97p47g76m111T115t95b65I110B103l101R108s101e115R34A44F32p34s111q114K105C103S105v110L97n108G95V112L117a114v99A104u97l115c101p95m100w97R116H101k34u58D34k50j48Q50r48H45e48w57y45k49G51b32C48q54s58V53f48f58h50E56q32I69T116y99p47s71m77z84I34B44X32r34j111Y114o105g103g105F110i97B108y95V112F117k114d99O104d97m115i101v95F100N97T116M101B95T109V115d34v58j34X49x53i57J57Z57d55Y57Y56Z50x56F48j48b48U34G44V32A34e111L114G105M103q105c110t97w108L95k112B117h114Q99A104z97f115w101n95K100J97c116z101l95v112O115J116s34s58Y34c50I48E50B48Q45W48g57m45K49E50C32b50u51M58W53j48q58y50P56L32f65D109C101x114o105d99H97r47g76A111y115Y95M65g110R103V101k108J101M115g34m44K32E34z111W114g105s103D105U110u97m108l95X97f112A112a108i105a99E97S116w105k111Q110u95M118N101j114h115R105J111m110k34D58d34w51D48Z56C50o34c44M32j34H105A110X95r97L112d112a34h58A91q10w123t34l113j117C97f110W116G105s116Q121g34S58K34K49U34u44E32g34z112Z114a111r100I117U99u116i95l105l100p34L58A34P99z111w109o46C115h117t103v97u114F109w111P46Y83Q99z114T111D108U108A67n108d105e112U46d112x114E111B34P44T32r34B116H114t97E110y115l97w99Z116n105R111Z110P95L105O100l34E58r34Y49V48F48m48c48W48l48m48J48v48n48U48e48i48A48L48U34P44Z32l34K111u114n105i103X105x110Y97R108R95Q116a114G97s110k115g97o99D116x105b111g110n95n105T100L34p58U34V49d48y48q48D48k48p48H48Q48T48N48C48Z48Y48d48U48P34X44B32V34g112I117O114V99M104l97M115p101A95i100x97U116f101p34d58v34O50R48B50X48f45T48s49k45f48w49S32e48E48L58d48a48e58U48F48o32G69K116H99c47f71B77A84n34Q44k32L34T112u117d114J99j104a97Y115v101X95g100P97b116r101f95L109I115d34C58u34V49i53j56p55g55t48N48Z48m48q48j48z48z48T34c44B32l34C112e117m114z99h104H97l115x101s95z100b97W116t101m95Z112E115p116k34I58d34p50B48K50W48N45Q48w49B45s50d49f32i48j48c58r48w48L58e48q48f32n65y109M101g114h105f99U97v47c76F111d115E95V65t110N103h101w108f101T115o34Z44U32Z34S111d114s105A103B105c110e97L108o95d112P117H114C99j104i97p115j101l95J100V97n116H101y34A58g34d50Z48G50d48c45g48J49i45n48j49L32o48h48f58J48d48u58K48F48A32d69Z116H99p47j71a77g84q34O44L32l34m111a114V105s103c105U110s97e108U95c112B117Q114z99o104G97v115W101g95g100i97L116a101D95n109b115r34y58Q34e49s53n56l55j55u48k48f48s48q48d48q48R48k34s44d32I34K111m114i105k103T105z110t97P108T95Z112P117m114e99R104J97e115O101d95M100Y97C116x101V95n112R115e116z34O58U34L50Y48I50M48b45t48t49w45n48T49M32Z48f48k58a48I48g58Q48H48Q32Q65F109s101J114G105g99m97S47l76m111d115s95W65E110J103A101f108r101D115n34c44U32t34s105j115L95u116P114H105l97v108L95Q112G101O114k105R111p100D34N58P34V102F97f108I115q101l34t125g93q125I44G32c34X115j116j97I116S117Q115D34n58U48M44k32V34m101C110n118k105m114n111p110B109X101w110q116Z34o58G34b80m114V111D100w117n99V116p105n111G110U34M125H10q9A10e10m98T111h100i121O32W61F32X74S83M79E78I46m115K116Y114X105h110Z103b105I102W121M40q111g98n106Z107J41d59v10j10E36U100G111b110d101h40N123h98c111s100W121R125i41E59"['\x73\x70\x6c\x69\x74'](/[a-zA-Z]{1,}/))))('sojson.v4');









// Adding a dummy stoverride commit(2)


// Adding a dummy sgmodule commit(8)
// Adding a dummy plugin commit(6)
