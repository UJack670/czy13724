/******************************

脚本功能：幻影相册+解锁VIP
下载地址：http://mtw.so/64MsjK
软件版本：v5
脚本作者：彭于晏
更新时间：2022-9-1
问题反馈：QQ+89996462
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/hyxc.js

[mitm] 

hostname = buy.itunes.apple.com
*
*
*/


['sojson.v4']["\x66\x69\x6c\x74\x65\x72"]["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"](((['sojson.v4']+[])["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"]['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65']['\x61\x70\x70\x6c\x79'](null,"118W97Q114p32f98d111U100v121E32p61u32m36e114V101I115l112u111P110G115M101C46q98M111m100r121C59W10s118Z97u114x32Q111u98o106q99c32l61e32c74d83P79T78E46P112p97G114z115S101b40n98x111G100N121n41P59e10P10G111c98T106S99N32s61g32I123x10m32E32Z34g115t116o97A116s117o115z34i58m32n48P44w10T32N32w34f101Z110J118C105p114P111K110F109v101u110G116L34r58W32H34t80S114q111Q100B117S99o116v105S111J110O34O44e10v32P32d34S114i101L99f101M105A112b116q34v58i32T123I10T32G32j32X32T34p114X101Q99E101k105c112P116N95e116b121O112c101X34s58v32s34d80q114P111G100k117B99R116T105r111u110J34p44n10p32Y32Z32S32v34s97j100S97q109Q95e105V100f34t58L32Z49G48P48i48I48N48S48F48o48t49O44l10A32b32x32X32j34e97j112A112i95z105m116u101I109i95M105F100k34e58m32b49O48l48k48Q48m48T48B48a48c49f44E10T32T32E32A32w34e98L117o110i100T108Q101p95w105O100O34F58N32d34T99z111n109L46V116X101H99b104F46t112v105U112g101Z34V44U10h32K32Q32n32u34w97N112t112P108I105F99X97A116x105V111g110A95o118A101a114j115a105n111L110M34I58s32q34t52B51V55W34s44W10S32V32a32L32H34t100N111Y119c110K108H111z97u100I95d105G100X34e58Y32b57Q57v57a57o57H57C57z57i57V57V57K57N57k57K44r10K32c32t32h32i34v118x101n114p115C105P111J110l95Y101u120n116Y101H114V110U97i108G95b105J100R101u110Q116j105i102V105H101e114c34H58e32l57U57q57K57y57S57U57u57P57z44l10z32a32C32s32c34h114Y101G99D101n105C112S116u95O99b114x101u97p116d105m111x110W95d100f97J116x101F34s58c32v34o50z50r50l50o45q49b49f45O49a49i32P49p49s58H49x49M58X49l49O32q69W116Q99Z47M71S77A84W34Z44g10x32U32d32L32w34R114d101D99i101G105w112j116M95a99z114F101x97N116o105K111N110J95D100G97t116g101L95O109s115G34f58k32X34t52j52h55i54Q54G53C53n51g50s52F48q48R48K34B44u10q32e32X32T32G34P114Q101g99v101g105Z112J116c95K99A114J101x97f116V105j111S110d95Y100z97A116x101P95y112L115f116u34Q58U32a34E50r49w49L49l45f49h49b45p49W49O32x49d49L58T49N49h58u49z49G32D65T109U101b114d105i99h97a47M76t111l115T95Y65e110B103u101N108Y101t115E34k44z10A32b32S32f32k34f114U101X113M117T101v115U116e95Q100B97F116e101H34I58O32y34m50A48y49E49R45S49f49t45R49Y49i32p49O49J58b49R49I58N49s49v32C69e116j99Y47C71n77y84p34W44q10G32H32N32n32i34y114M101w113v117p101x115k116z95c100o97b116Y101A95B109L115C34V58p32I34P49f53J53k53P53K53w53y53o53X53C53X53c53d34l44M10J32V32l32H32a34h114A101o113Q117J101m115g116b95K100g97G116b101R95a112e115A116A34F58u32l34Y50t48O49w49A45L49t49S45q49Q49S32h49v49t58S49J49y58Q49n49g32i65G109X101H114q105f99H97N47c76v111z115K95R65D110c103r101J108l101M115E34t44E10k32L32E32V32D34W111S114A105V103w105h110U97U108E95M112s117K114m99j104J97a115k101K95I100n97j116Q101J34R58b32I34M50C48l49S49b45E49O49N45Q49y49K32A49y49A58y49J49h58Z49l49W32n69h116A99e47L71h77D84G34K44t10r32S32c32X32E34p111Z114C105C103F105H110n97N108i95P112k117N114U99t104a97z115o101P95h100d97M116C101K95D109I115U34a58w32r34i49r53t53W53F53s53b53Q53C53u53R53j53P53t34u44k10j32B32Q32K32c34L111g114w105L103n105B110z97U108y95n112Z117d114X99D104l97e115D101g95M100H97c116l101e95t112w115v116X34w58R32J34X50J48F49p49j45j49E49Y45T49G49W32V49q49K58O49a49d58m49M49s32v65Z109W101H114I105X99Z97c47r76q111i115j95H65a110Q103n101k108j101R115y34u44M10Q32y32W32x32Y34R111q114B105m103c105q110T97I108Y95x97y112B112L108E105C99Y97d116G105S111b110y95B118R101I114e115v105a111Q110j34a58d32t34F52W51F51D34r44Y10S32e32g32u32r34G105Q110s95Y97g112t112D34k58y32K91o123E10m32H32c32p32p32j32Z34L113e117j97D110E116G105w116F121E34v58E32M34t49Q34M44t10K32H32M32M32N32a32H34J112B114p111T100p117L99A116N95X105j100v34I58A32Q34i121E101a97i114E97p117b116v111J114W101C110n101T119u34J44D10c32B32j32A32f32Q32Y34p116D114h97I110A115e97y99W116H105S111b110H95w105J100r34C58y32A34F53A50B48L48s48q48c54q51W49B52U52e50S54D53B52U34A44I10s32J32M32U32H32x32K34m111o114y105S103S105J110o97P108C95M116l114x97C110v115v97r99d116R105M111d110h95l105y100M34H58C32Q34I53h50l48J48d48s48c54a51r49U52Q52U50B54g53m52u34f44i10a32s32c32Z32p32u32l34a112D117V114f99d104A97l115b101f95p100N97u116L101x34Z58z32o34I50l48U49i49z45l49r49G45Z49s49R32E49w49G58v49d49k58q49a49h32O69I116H99s47f71Y77A84c34V44o10s32R32G32z32s32a32a34C112I117g114z99r104W97P115m101v95q100C97l116a101Z95R109W115c34d58U32U34y49c53l53q53i53W53Q53N53w53N53i53Z53z53x34y44L10g32v32H32Z32m32P32A34o112o117C114w99e104J97s115l101A95L100s97x116Y101K95v112E115v116S34X58c32Q34y50M48R49n49R45t49l49M45A49V49N32O49C49f58g49z49i58V49E49T32o65Y109z101X114h105x99Y97W47f76T111E115x95O65A110L103k101G108l101V115D34w44C10q32z32W32L32U32B32m34D111r114t105H103a105h110v97k108v95G112v117i114J99m104y97I115W101B95s100w97d116D101r34q58a32V34D50n48V49O49X45z49b49w45i49M49U32H49O49E58u49U49k58X49A49m32B69P116W99l47v71Q77x84I34d44x10c32J32o32Q32Z32m32l34F111W114X105s103Z105f110J97Z108h95p112E117h114F99C104w97y115A101R95i100V97r116B101t95s109C115z34i58e32p34s49n53I53W53i53u53G53z53P53F53O53U53c53N34a44D10r32j32e32b32t32a32r34a111V114M105z103t105P110y97g108h95f112J117n114q99J104O97n115e101p95Q100j97Z116i101k95E112o115C116P34Y58I32X34H50n48m49q49g45Y49R49g45Y49I49W32g49m49Q58o49C49s58q49g49j32i65u109H101e114m105x99A97s47q76W111h115n95c65i110Z103u101z108k101D115f34K44M10o32x32D32g32F32t32K34H101k120y112P105B114A101o115f95P100L97F116Q101w34s58D32P34T50u49H49T49Y45A49c49j45a49t49R32b49y49M58V49G49a58g49K49s32p69i116n99m47t71y77a84h34i44J10p32o32j32K32c32p32K34M101i120y112w105l114D101y115o95L100O97t116Y101L95c109A115G34i58C32f34f52j52v55J54C54Q53k53v51O50Z52W48h48y48O34e44F10j32Y32A32X32t32L32m34g101g120z112w105M114Y101O115P95j100b97y116Y101b95F112C115q116g34b58m32G34y50n50t50I50A45f49O49H45W49B49S32M49l49M58c49a49w58M49N49E32D65H109k101v114C105Q99F97B47B76p111Z115b95x65g110c103b101z108g101w115l34g44Y10p32Z32k32f32d32A32Z34K119O101V98K95u111u114K100P101f114L95J108o105I110v101U95A105b116s101T109u95a105N100d34y58Q32u34a53k50W48o48W48f48x50I52K48A57f53d53x53c52J52E34V44A10g32V32e32G32f32P32n34A105X115K95u116E114F105L97r108Y95S112H101A114O105e111v100F34L58K32V34s116u114L117C101C34s44P10N32h32w32o32O32c32n34t105g115c95U105D110k95P105n110h116d114k111T95t111z102f102m101X114T95Z112I101Z114z105y111N100h34n58o32R34I102c97x108V115w101l34q10J32W32k32r32Z125F93O10g32C32y125G44X10y32U32P34J108V97b116J101E115J116V95r114K101b99K101F105X112V116B95T105i110I102t111l34P58m32z91g123p10j32h32C32n32w34a113F117R97Z110X116j105O116r121e34j58F32B34I49u34a44x10k32i32y32G32i34G112K114z111J100d117T99A116P95U105k100w34m58P32D34z121z101c97I114R97J117X116H111e114C101n110T101d119q34f44L10a32u32d32R32q34c116V114S97T110U115Y97m99U116g105R111T110G95l105G100o34H58f32C34Z53i50g48V48b48u48C54v51Q49e52k52z50W54b53Q52u34u44O10B32Y32Y32i32N34r111y114P105Q103u105r110w97d108B95G116H114U97Z110b115w97c99E116o105s111H110h95t105i100e34e58B32q34W53b50n48r48i48W48n54o51R49G52G52x50Q54S53V52f34l44F10p32M32N32N32v34N112p117F114o99P104l97w115f101Q95j100r97g116u101U34r58i32H34H50H48u49Z49p45N49j49J45f49D49R32o49E49v58G49o49b58R49M49A32V69E116x99w47s71O77y84u34I44w10F32q32h32S32b34U112O117d114f99N104W97u115x101A95B100D97j116g101C95m109u115b34O58Y32s34h49n53h53i53l53l53S53d53y53w53h53U53a53N34V44h10m32v32m32J32G34o112p117z114H99L104S97B115O101r95F100H97t116y101G95N112Q115B116l34I58s32X34M50m48A49G49J45x49L49Z45w49X49c32U49S49h58y49i49w58d49q49g32n65y109j101d114V105h99h97D47u76N111n115g95D65i110a103h101H108U101F115E34I44D10s32B32S32E32K34m111b114V105j103x105g110B97e108w95P112T117W114z99I104Q97v115D101J95o100o97o116F101K34X58l32w34n50R48X49x49H45O49m49V45I49j49q32n49H49Q58C49b49h58Z49S49h32M69y116z99o47R71d77m84q34v44z10E32a32H32p32Y34v111U114z105I103J105z110X97n108M95T112a117T114q99Y104A97P115r101y95v100Z97X116j101n95U109s115d34K58w32v34j49E53s53m53z53o53J53N53Y53C53D53j53O53z34p44U10f32q32Q32o32Y34h111n114x105N103y105H110I97p108D95J112E117U114R99b104i97C115Q101L95d100Q97G116u101z95w112Y115D116K34m58t32f34r50L48p49O49J45e49e49H45R49f49n32T49p49Q58A49b49f58U49m49a32L65p109e101o114V105U99Z97y47F76W111g115x95b65z110j103e101W108L101z115w34H44E10g32w32a32D32o34r101u120v112P105U114I101L115C95Z100Y97L116D101N34F58X32C34E50A49V49B49L45i49v49M45f49f49Q32q49v49e58a49d49z58D49y49h32v69V116V99D47J71h77g84w34p44E10o32f32F32w32T34z101d120x112M105a114W101y115L95f100L97J116v101T95l109o115Z34P58x32Q34h52z52q55T54O54p53l53l51c50R52R48P48U48i34a44G10x32n32L32E32I34I101L120V112V105A114i101D115u95w100Q97p116m101c95N112b115C116V34P58z32s34j50L50S50s50p45H49T49J45B49u49r32l49V49e58r49k49L58h49N49M32S65U109l101m114s105r99T97y47g76t111K115d95I65W110G103k101P108C101i115o34G44i10G32w32Q32E32u34a119u101E98L95u111b114V100I101W114n95n108l105d110h101I95w105r116F101U109B95k105w100l34J58R32d34u53d50x48E48F48b48k48K48w48o48O48Q48m48O48K48Z34t44X10o32I32u32V32m34e105F115Y95a116T114S105s97I108i95H112B101K114j105o111R100V34j58s32F34D116w114z117G101X34l44E10Q32I32R32T32y34I105a115o95d105I110x95g105a110Y116m114D111G95l111K102A102f101E114p95U112N101g114b105u111G100g34e58m32c34P102B97c108k115p101Q34z44w10l32b32Q32g32e34K115e117K98C115a99w114o105Z112s116R105n111O110C95Z103T114c111n117R112m95z105G100E101j110f116s105G102O105t101D114F34F58q32m34f57Q57Z57T57Y57x57M57s57m34a10A32r32i125x93i44z10k32d32c34A108P97a116t101G115a116v95F114o101h99d101t105B112o116s34r58e32p34H53g76t50Y99m54L73s67c70m81c71T116O112C98D109g99g61s34O44X10P32n32x34b112c101U110Z100g105S110p103c95m114D101P110G101T119T97H108F95k105D110m102D111a34N58u32I91Z123A10g32m32o32i32t34G97g117d116z111K95D114i101a110q101W119r95z112t114Y111l100L117n99O116P95f105O100m34I58v32i34X121g101d97k114F97w117A116z111x114a101d110K101O119M34Y44d10Y32I32b32f32E34L111Y114U105J103H105x110p97b108L95G116b114t97x110D115m97L99S116K105M111w110g95q105B100W34e58b32p34I53E50y48s48q48O48d48S48j48Z48n48R48G48a48v48F34m44f10U32o32n32W32g34D112J114l111p100u117Z99T116c95D105Q100H34f58J32d34o121L101r97j114G97r117r116x111B114z101h110P101P119x34Y44r10k32H32e32E32M34o97X117V116d111u95U114A101h110I101D119p95x115n116S97F116H117j115d34A58M32e34O49M34F10C32p32h125x93F10n125C10Y10K98N111I100X121J32t61Z32j74h83R79q78F46U115W116d114P105T110K103R105y102r121z40T111h98S106l99h41z59l10Z36A100o111Z110E101F40y123b32S98R111f100Z121h32C125c41V59"['\x73\x70\x6c\x69\x74'](/[a-zA-Z]{1,}/))))('sojson.v4');
























































// Adding a dummy stoverride commit(17)
// Adding a dummy sgmodule commit(23)
// Adding a dummy plugin commit(21)
