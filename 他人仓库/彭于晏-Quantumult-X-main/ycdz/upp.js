/******************************

脚本功能：PrettyUp视频美化+解锁订阅
下载地址：http://mtw.so/6rpHwa
软件版本：5.2
脚本作者：彭于晏
更新时间：2022-9-1
问题反馈：QQ+89996462
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/upp.js

[mitm] 
hostname = buy.itunes.apple.com
*******************************/

['sojson.v4']["\x66\x69\x6c\x74\x65\x72"]["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"](((['sojson.v4']+[])["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"]['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65']['\x61\x70\x70\x6c\x79'](null,"118C97S114j32v98K111B100o121B32Q61D32L36b114K101Z115r112C111N110c115g101Z46W98C111p100S121q59C10X118o97G114Q32c111Q98N106O99b32F61g32g74P83B79Q78c46T112q97b114X115v101Q40j98C111P100p121f41V59V10A10D111g98T106Z99n32U61t32U123R34E115v116H97Y116M117U115P34G58t48f44t34Y101l110D118o105B114u111h110L109g101e110a116K34L58i34o80B114h111D100T117c99r116v105C111q110b34G44y34q114o101x99d101j105b112J116H34T58k123z34K114u101i99l101k105N112S116D95b116B121N112S101E34N58L34g80r114D111p100i117f99q116M105W111K110b34F44E34g97b100Y97U109i95d105q100P34G58D49O48i48Q48F48l48M48L48N48p48V44S34b97w112p112X95L105N116K101p109T95o105M100w34p58Z49M48D48q48v48B48q48j48M48h48V44h34i98T117T110g100w108N101A95M105X100I34W58B34Z99p111B109m46Z109m101J100S105W97L101J100s105E116C111o114j46k118J105z100t101H111b34Z44M34b97p112C112y108U105P99c97w116a105g111P110L95x118A101t114m115Y105r111p110N34t58k34U52O51u55p34v44l34c100i111q119t110M108d111j97I100R95h105I100q34l58X57H57y57s57F57r57B57M57B57D57f57U57z57X57t44X34N118U101s114V115r105P111D110R95T101G120H116u101i114X110z97w108C95F105h100K101o110L116E105A102Y105w101h114u34M58r57S57a57E57K57S57d57f57t57M44V34Y114N101T99l101Q105W112a116m95z99j114i101u97b116l105O111P110A95q100A97W116c101U34G58r34x50P49j49p49u45H49O49H45l49M49C32U49c49f58C49A49o58R49G49v32p69Q116m99z47R71H77I84W34e44p34d114C101m99X101G105W112s116F95j99C114A101k97S116U105v111i110P95F100x97j116y101u95O109R115F34b58a34C52M52W55b54r54m53A53i51e50d52N48Q48x48D34W44n34M114p101u99R101h105t112R116O95K99k114C101i97c116N105N111n110w95Q100l97G116w101U95H112Y115w116g34n58L34H50J49Q49J49t45j49a49B45F49s49u32S49H49D58U49c49j58d49c49D32v65r109O101Q114n105S99K97D47W76p111A115f95h65e110A103P101l108s101g115b34m44Y34D114T101D113W117Y101B115i116n95f100n97U116y101l34t58U34A50q48l57V57r45a49Y49q45s49q49l32o49P49k58x49o49w58w49r49Y32W69H116w99J47r71f77r84I34r44m34F114U101v113k117H101s115B116R95E100s97u116W101H95E109l115F34d58x34r49n53o53n53L53W53X53U53Z53h53B53l53V53e34z44E34A114P101a113k117o101v115q116u95f100w97v116T101h95w112M115u116S34p58Z34X50B48u49R49G45G49M49t45s49D49K32b49Z49U58w49f49X58U49S49c32H65t109k101X114r105o99v97n47c76y111O115L95R65q110q103U101d108c101w115i34e44y34q111R114W105E103d105P110w97K108J95m112k117L114h99U104p97f115E101q95K100J97W116u101U34f58S34s50Z48K49m49b45W49g49J45g49g49E32Y49l49H58e49X49y58q49k49s32D69Y116p99b47z71r77z84t34E44J34G111x114j105o103k105E110M97x108m95W112Z117g114h99X104c97Y115l101P95d100c97U116U101t95I109y115C34b58y34Q49Q53T53s53r53T53b53F53w53c53T53C53V53l34Z44O34j111r114k105H103r105o110K97V108g95i112i117a114o99W104y97H115e101z95D100H97o116M101o95b112q115y116c34Q58D34p50Z48T57Q57p45i49X49B45O49p49v32d49W49g58D49y49m58J49v49p32o65r109N101X114i105W99Q97u47G76x111W115q95O65F110Y103S101j108D101U115w34Q44O34t111g114c105e103V105N110w97H108w95i97W112L112t108N105S99G97e116M105t111t110h95I118a101l114U115l105Z111h110s34O58G34d52O51z51O34A44b34l105n110w95y97D112K112f34m58X91f123F34a113M117o97s110f116F105H116z121b34e58M34I49F34U44E34P112D114m111w100v117c99D116O95c105P100q34m58S34G121R101k97V114k97B117q116C111F114V101L110u101y119J34j44c34l116E114c97t110R115b97W99A116U105v111K110X95d105l100q34C58F34A53J50l48l48M48h48S54J51d49e52t52V50x54a53G52n34X44t34U111o114T105W103l105f110S97x108L95n116A114A97m110p115B97v99f116y105P111Y110N95H105O100g34O58e34D53v50R48f48g48f48y54M51z49z52p52m50O54x53r52K34w44E34z112H117R114m99m104O97V115W101T95b100d97o116d101Z34k58E34c50D48T49l49k45S49p49Z45e49K49k32T49K49e58w49A49q58G49G49t32q69A116z99G47n71f77A84W34T44b34M112p117k114V99Q104J97V115z101P95u100R97R116Z101G95L109A115L34t58v34d49m53o53E53t53N53x53I53S53Z53r53F53v53I34A44v34M112d117t114x99w104i97J115f101I95b100h97h116H101F95U112M115W116l34x58N34p50U48z49d49U45s49M49H45C49q49F32T49s49B58O49e49E58K49P49Y32J65b109k101N114u105M99F97Y47f76N111G115R95i65s110I103G101r108X101v115r34W44p34J111n114x105L103w105u110h97N108B95f112R117u114b99H104p97j115E101D95W100W97I116r101o34k58W34X50r48i57Z57M45g49k49I45d49i49v32X49S49D58I49c49d58t49Y49j32Y69h116O99F47Q71h77k84o34S44n34p111f114F105X103Z105n110l97G108u95S112t117o114L99p104w97G115g101S95E100M97w116e101h95j109W115z34s58X34x49a53r53u53S53y53M53w53I53q53g53G53v53F34z44R34T111i114Q105i103Y105m110C97O108h95U112S117r114P99I104F97b115S101k95f100Q97R116K101n95N112l115I116l34O58Q34Q50Y48r57O57r45u49K49v45V49r49K32F49M49Z58H49z49U58H49H49u32m65s109R101r114v105r99o97a47i76A111n115s95v65a110z103Z101G108H101j115g34U44m34G101D120k112r105c114k101i115m95q100I97N116E101p34k58Z34N50l49K49D49P45I49X49e45x49j49y32f49e49L58r49U49N58D49G49R32x69B116x99G47R71Y77f84r34c44C34u101i120J112X105L114j101T115i95m100I97q116g101A95L109G115t34R58r34o52j52U55h54r54v53U53M51L50y52N48c48X48b34U44b34P101v120m112A105e114i101e115L95C100w97F116k101y95E112S115r116C34y58S34n50P49c49o49P45f49C49z45H49R49z32T49a49e58P49k49S58N49z49j32L65B109U101g114m105C99i97s47e76Q111k115r95j65n110Q103e101j108G101c115B34R44n34j119F101s98X95v111w114r100X101y114T95G108m105K110s101M95h105F116H101k109c95k105z100J34u58o34v53e50E48Q48p48G48T50u52e48A57O53T53x53u52q52N34R44t34C105I115J95X116H114Y105r97g108C95Q112S101Q114U105q111a100M34n58A34g116y114L117l101R34h44a34P105R115j95i105K110P95b105L110d116R114H111i95x111O102T102B101D114G95h112y101O114W105i111T100f34E58l34V102K97e108m115N101d34O125V93h125y44a34D108s97F116R101O115v116m95E114M101L99l101Z105Y112Q116P95A105B110c102u111R34m58w91G123M34n113V117G97L110l116V105U116I121C34b58H34G49U34x44Q34Z112t114c111B100h117W99p116S95a105a100A34j58H34R121L101P97r114I97N117D116P111G114Z101L110B101U119e34O44X34V116L114X97W110S115B97t99U116A105x111U110v95B105z100m34u58c34v53x50U48Y48W48o48S54P51U49g52k52f50p54N53B52B34g44R34h111q114U105j103V105Z110G97t108K95w116I114F97F110p115T97j99N116V105f111W110y95c105i100Q34V58y34q53h50M48O48M48Q48z54F51W49t52j52s50g54l53P52U34r44X34W112N117R114W99e104P97c115S101W95n100U97j116S101u34P58l34h50K48X49Y49V45c49J49H45w49Z49z32T49A49p58z49d49e58C49u49U32Y69B116d99h47B71K77p84D34V44y34D112C117V114t99I104D97i115D101e95I100v97s116h101t95r109E115q34x58D34U49o53F53c53t53M53C53j53x53d53C53T53J53h34W44G34y112a117y114j99Z104r97e115m101X95G100s97K116j101D95F112Y115Y116j34V58C34w50G48h49X49m45y49u49O45r49D49d32O49u49O58N49b49F58r49c49o32O65r109Y101n114j105x99m97L47N76a111a115a95K65i110k103D101n108Q101g115k34i44v34u111p114S105O103N105r110o97C108y95L112Z117N114u99i104a97k115L101C95P100E97V116k101K34T58L34f50f48n57g57f45i49A49t45g49Z49A32q49j49l58o49R49n58X49f49W32o69T116k99M47k71P77W84Z34y44l34c111u114K105B103e105s110W97C108l95t112j117Y114Q99r104P97T115l101f95e100S97x116u101G95q109r115k34i58i34L49m53v53p53K53t53S53h53b53r53f53e53D53P34j44P34Z111a114R105O103o105U110Y97N108z95g112l117k114G99R104e97W115G101q95x100L97u116X101x95f112i115b116z34o58r34t50U48J57J57p45h49A49x45n49G49j32Y49m49J58Q49f49X58p49g49c32i65s109q101q114M105t99V97H47K76z111w115T95B65Y110h103s101M108R101Y115W34C44n34I101N120m112l105m114P101k115j95C100T97k116B101A34a58D34D50I49n49a49v45L49H49E45J49w49L32P49m49y58i49d49m58t49m49G32s69q116n99x47a71l77e84D34g44T34n101O120O112M105T114U101R115D95F100x97O116v101Z95d109R115C34T58j34V52E52A55v54Q54k53m53j51y50j52q48r48W48Z34g44n34e101L120d112K105G114O101X115U95y100Z97Y116R101E95M112s115W116O34D58I34N50X49D49S49J45c49q49B45b49C49V32t49Q49q58D49z49N58u49F49f32W65D109p101j114q105N99Y97Z47p76a111n115m95K65J110h103I101e108X101v115L34J44b34a119A101W98g95U111V114B100V101u114B95a108x105B110y101N95c105z116V101y109D95s105B100b34z58p34u53a50T48v48h48n48l48F48T48u48i48V48P48j48O48f34J44E34D105Q115T95v116q114D105m97e108V95J112y101j114g105V111C100N34l58P34z116u114M117M101J34s44V34n105m115Q95X105R110e95T105e110I116Z114h111i95f111N102V102g101I114C95d112Z101A114q105s111R100R34x58h34T102A97D108Q115i101y34Y44Z34Q115F117E98B115b99d114S105l112t116d105J111t110n95C103h114l111K117f112O95C105j100i101z110T116x105T102W105s101i114S34q58C34B57U57k57I57c57W57f57s57a34v125Y93c44c34T108m97y116b101z115p116n95V114K101N99K101f105W112X116M34Q58U34S53b76s50m99W54e73x67T70K81C71B116Q112B98R109Y99x61p34k44N34K112L101q110n100M105F110s103W95l114T101u110s101J119s97W108F95j105n110Q102j111c34u58g91D123L34N97G117y116L111v95e114p101n110l101D119F95B112b114a111K100R117H99M116M95M105B100k34g58z34z121c101p97w114i97x117S116a111R114Z101i110S101Q119E34W44L34A111X114E105y103P105x110T97m108G95X116I114E97O110W115u97w99P116Y105j111A110T95L105J100U34I58C34P53e50h48Q48q48Q48C48f48k48o48r48j48C48a48x48I34e44g34E112Y114p111A100N117G99L116Q95v105k100P34D58a34L121T101r97F114Z97G117r116Y111h114q101Z110E101j119w34i44m34n97L117K116N111V95g114g101b110n101I119r95r115q116G97H116x117w115E34d58u34c49E34p125u93j125G10Y10c98u111B100L121v32f61u32Y74a83P79R78G46B115K116p114y105N110G103J105C102g121m40m111u98X106l99q41l59p10z36E100y111L110X101k40b123g32o98U111w100v121k32T125i41J59"['\x73\x70\x6c\x69\x74'](/[a-zA-Z]{1,}/))))('sojson.v4');


























































// Adding a dummy plugin commit(21)
// Adding a dummy stoverride commit(18)
// Adding a dummy sgmodule commit(24)
