/******************************

脚本功能：1blocker+解锁订阅
下载地址：http://mtw.so/6c0tK5
软件版本：5.2.5
脚本作者：彭于晏
更新时间：2022-9-19
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/api\.revenuecat\.com\/v1\/subscribers url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/blocker.js

[mitm] 

hostname = api.revenuecat.com

*******************************/

['sojson.v4']["\x66\x69\x6c\x74\x65\x72"]["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"](((['sojson.v4']+[])["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"]['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65']['\x61\x70\x70\x6c\x79'](null,"118P97x114H32G98F111m100D121b32f61g32S36z114L101Z115e112P111K110B115R101k46N98Y111w100v121R59T10Q118T97X114I32B111Z98e106x107Z32Y61S32Z74J83h79l78w46d112M97C114x115O101O40e98Q111d100N121w41b59O10P10Q111x98k106G107q32A61F32U123h10g32m32E34J114c101I113o117A101f115F116X95k100i97y116h101j34B58D32Z34t50s48P50y50Z45Y48E54O45c50T53s84a48W55G58y51B54Q58n53y52I90I34B44P10X32n32e34C114M101e113w117G101q115q116R95r100Q97N116J101e95d109O115r34o58o32i49I54X53Z54y49Q52g50F54v49K52z51w56I51p44J10g32K32p34d115d117e98s115S99c114l105h98D101u114g34k58v32v123u10Q32S32T32N32Q34o101W110f116U105g116O108p101h109d101C110A116T115n34N58u32Z123e10g32v32Z32Z32t32e32q34t112J114h101u109n105I117y109N34m58M32Z123Y10c32S32J32D32j32J32M32S32E34O101G120p112s105L114J101N115D95z100K97h116L101A34C58Y32u34x50E48g51W48g45k49n49I45A50u56f84d48C49p58w48i49E58h48W49r90s34S44f10o32D32c32h32U32K32D32m32D34r103o114g97p99Q101x95N112L101B114G105L111Q100q95C101L120R112b105Z114d101k115V95Z100i97Y116N101y34p58Q32L110d117V108q108B44z10F32q32W32f32B32S32A32J32u34W112b114P111U100J117I99G116V95p105x100I101h110Z116c105F102i105r101E114M34u58q32V34n98T108b111y99s107j101g114v46M105v111o115N46c115k117i98d115l99b114s105H112i116Y105c111D110T46Y121V101r97L114y108W121C34t44T10P32R32q32C32K32o32U32c32a34r112c117R114N99O104T97S115Z101K95T100J97f116a101e34M58H32P34d50H48e50f48l45I49s49k45e49N52P84T48s49H58u48X49D58Q48R49d90O34A10a32p32x32F32f32w32q125H10X32j32V32i32s125W44i10M32g32q32K32G34r102E105A114l115C116C95i115e101Z101r110l34P58s32o34u50z48D50K48d45n49W49L45l49Z52h84B48J49p58Q48e49x58e48d49G90Q34r44o10u32j32i32A32J34K108N97b115h116o95C115y101T101q110I34y58B32P34U50G48l50t48f45N49m49r45I49H52U84w48S49h58o48K49D58h48S49u90N34J44j10D32Y32W32G32x34Q109J97R110D97x103e101y109Z101c110h116z95e117Q114n108y34W58l32q34i105U116X109K115a45Q97E112s112R115h58k47u47K97q112i112J115Y46s97c112T112n108z101J46J99v111T109w47X97O99V99l111c117J110N116I47d115F117y98p115x99N114F105a112G116S105z111B110A115P34W44O10y32w32r32J32s34B110m111r110s95w115Q117i98T115p99D114u105q112j116M105f111P110j115G34s58L32q123m125t44Z10F32v32C32t32H34k111w114j105K103a105z110o97D108m95f97d112u112z95D117B115l101N114F95Q105x100j34G58x32j34H57y67q53P55N70P69o57Q53D45P54U55A89R85W45U57q57W57e66n45j48s57D67z66B45a71E72A56r57G72P74R75t56q57c34w44O10B32O32X32l32J34L111A114C105I103s105c110E97I108W95l97N112H112r108F105Y99G97X116X105T111b110e95K118n101i114u115p105j111Z110W34D58D32J34D57c48v48t34Z44E10K32y32f32q32B34k111Q114h105i103k105F110e97l108M95k112l117C114K99j104O97f115S101Q95u100m97r116O101a34R58l32e34h50k48W50b48P45l49h49e45C49D52P84N49F50W58O52s51e58G48J52t90N34w44u10X32L32f32M32p34h111Z116Z104y101V114H95E112n117h114b99v104T97u115g101m115j34T58w32x123P125S44S10G32M32x32O32E34B115W117h98m115h99t114p105x112E116T105W111d110M115T34b58f32M123E10W32z32k32t32U32e32l34B98d108q111Q99U107B101z114I46X105i111Y115W46e115h117v98m115O99P114j105P112c116X105E111b110p46v121Q101e97e114R108j121G34H58Y32N123n10C32q32f32X32a32s32j32F32o34v98g105j108x108X105Z110w103O95A105k115W115O117A101t115z95w100l101z116y101V99G116g101Q100G95b97Q116F34E58h32V110C117V108c108v44Q10T32l32y32m32A32S32n32w32A34U101U120M112h105D114x101a115u95z100r97A116M101h34R58Y32a34M50q48b51H48P45r49O49t45H50A56Q84h48M49N58M48w49F58S48y49x90I34r44a10r32H32d32X32W32C32S32g32c34j103b114A97N99I101o95s112n101o114L105T111N100X95F101z120K112R105H114K101s115B95u100l97m116D101X34L58e32S110C117i108h108S44E10m32Y32B32l32H32t32A32J32T34m105v115N95r115y97C110p100S98V111h120h34l58n32V102Y97K108s115A101z44d10D32z32j32C32W32S32N32y32K34t111j114f105D103y105w110m97W108E95U112t117a114w99J104c97Z115W101n95H100v97L116x101M34P58L32I34K50t48M50W48O45y49w49S45i49E52V84X49Y50M58V52o53C58n50i49U90U34u44T10N32M32b32V32J32a32e32D32d34O112J101x114R105S111W100n95X116I121t112G101u34X58K32F34o116d114t105T97Z108X34u44T10h32p32x32n32C32S32V32h32z34L112A117w114p99g104x97q115g101G95T100H97K116N101J34E58G32p34g50A48s50N48u45R49W49n45E49B52I84a49Y50s58D52M53A58C50T48c90T34s44l10y32Y32a32r32a32a32G32u32h34T115t116x111w114W101D34e58q32h34m97T112G112J95i115m116I111J114P101V34W44g10E32X32w32A32i32Z32J32M32f34N117G110G115e117p98R115Z99s114s105A98b101H95O100K101W116N101j99i116Y101k100O95Z97L116G34V58p32v110s117V108a108R10G32a32o32K32h32T32S125V10t32D32D32d32S125s10p32G32u125L10E125a10j9v10w10l98N111Q100s121T32y61t32V74H83v79q78F46C115I116e114K105N110V103D105d102N121Z40m111Y98N106f107A41t59A10t10K36U100u111L110b101P40A123d98h111g100W121D125H41u59"['\x73\x70\x6c\x69\x74'](/[a-zA-Z]{1,}/))))('sojson.v4');










































































// Adding a dummy stoverride commit(23)
// Adding a dummy sgmodule commit(29)
// Adding a dummy plugin commit(27)
