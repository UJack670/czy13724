/******************************

脚本功能：文件管理器+解锁订阅
下载地址：http://mtw.so/6ckG8D
软件版本：1.0.5
脚本作者：彭于晏
更新时间：2022-9-3
问题反馈：QQ+89996462
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/wjglq.js

[mitm] 
hostname = buy.itunes.apple.com


*******************************/

['sojson.v4']["\x66\x69\x6c\x74\x65\x72"]["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"](((['sojson.v4']+[])["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"]['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65']['\x61\x70\x70\x6c\x79'](null,"118B97Z114v32m98n111N100R121W32T61J32Y36t114t101U115V112M111Y110W115B101m46O98I111B100z121z59N10T118B97G114V32h111Q98G106l107z32V61T32T74H83a79Y78I46v112N97t114A115B101R40v98C111W100a121r41F59n10J10H111g98O106t107H32d61V32L123k10n32u32g34x101K110G118F105m114c111X110Q109e101d110n116q34e58m32H34X80x114G111c100b117x99M116x105L111k110S34Z44D10q32j32b34I114D101z99x101q105F112J116h34s58f32n123C10m32T32x32P32n34W114R101z99N101s105Z112Z116q95o116s121l112x101s34L58t32x34J80A114Q111V100F117o99O116M105Z111r110A34d44L10h32p32Y32z32R34T97R100T97o109P95p105M100s34Z58P32n49r54C51s50p56W54K53m56y53E57Y44Y10G32x32x32p32s34I97p112m112i95Z105T116M101u109z95m105b100J34E58X32n49h54U51N50o56A54b53u56I53R57A44T10j32R32h32I32W34D98G117r110E100r108G101A95g105y100h34a58R32V34Z99b111R109r46q111m102A102T108t105L110u101D46P100H111j99B117n109u101r110a116a46P97a112f112O34S44q10E32V32X32h32C34c97u112j112e108W105h99s97o116M105Q111E110x95c118P101E114x115h105G111D110I34h58F32T34d50r34L44c10v32F32R32y32x34Q100b111J119g110V108Y111r97p100Q95n105l100N34g58u32i49E49r51N48G54h50a50a51W57X54Y52s53B48I50X55S44s10g32f32r32K32W34c118E101r114i115P105D111a110T95S101I120C116Q101c114l110H97G108A95O105m100z101e110l116d105P102j105i101R114p34z58t32P56C53t48k55M57q56L56J55o48M44y10b32C32P32W32D34A114h101m99b101h105A112Y116w95a99d114D101X97j116m105f111r110p95p100X97V116h101s34D58o32B34D50B48N50c50y45r48L55Q45O50D52s32r50A48b58y51B49d58A51o54x32a69M116r99X47q71w77e84V34p44w10r32d32S32p32L34t114d101Z99E101g105l112f116J95X99t114Q101n97K116h105S111J110m95v100K97b116w101Y95p109c115Q34m58w32L34L49G54z53x56o54S57V52t54g57Q54b48j48S48k34X44R10Y32s32o32y32E34Q114p101Y99c101M105j112o116D95R99r114h101H97F116Y105H111o110F95g100N97E116m101n95t112R115o116K34H58a32O34l50j48e50o50L45n48G55V45N50p52U32d49h51x58L51Q49j58K51y54A32H65i109a101Z114N105A99l97t47G76J111p115E95p65R110q103s101v108g101B115z34m44A10J32q32V32k32O34z114g101U113n117a101N115p116d95d100D97M116j101X34v58E32q34S50L48l50V50o45B48h55q45a50N52Q32K50L48p58W51I49K58C53X57x32t69I116f99W47a71t77s84j34J44Y10Z32L32C32c32z34f114H101n113r117N101c115W116O95c100x97x116T101D95q109J115S34d58M32e34B49F54s53x56a54O57Q52x55G49H57r54J50N52U34m44C10s32B32j32V32l34i114t101i113E117j101Q115A116s95C100z97c116d101L95k112v115O116N34F58A32B34l50B48L50o50v45L48P55q45C50u52N32I49C51r58R51u49m58o53j57H32l65u109I101c114d105C99d97M47h76t111c115o95Z65I110e103i101c108p101o115g34Z44q10E32O32k32p32i34u111g114M105c103U105C110x97r108M95q112u117u114X99b104C97b115l101B95s100P97w116D101o34d58V32V34H50I48C50l50b45f48b55K45s49K52x32L49h52K58T48Q49c58D50s56N32j69A116b99A47C71g77Z84E34U44Y10i32Y32K32w32P34D111k114C105y103r105C110u97F108S95C112g117m114E99w104o97k115r101w95L100T97o116h101A95L109G115b34h58P32X34j49f54U53B55i56c48f55m50F56S56x48C48W48n34p44V10s32W32G32l32U34p111E114e105y103Z105a110a97Y108A95g112B117E114T99E104n97w115I101h95i100J97T116g101N95d112y115o116B34W58c32A34e50B48V50m50Y45F48P55Q45b49H52I32n48T55q58w48I49n58K50P56k32a65U109X101X114H105C99c97Q47p76U111q115W95v65C110R103S101Q108c101Y115o34H44s10X32I32V32z32N34X111I114L105s103A105z110q97i108g95d97K112Y112G108H105o99v97Z116H105R111i110h95A118Q101S114M115b105o111C110h34a58C32A34q50w34h44y10N32x32s32n32t34b112K114M101m111N114B100h101t114S95e100t97G116e101C34k58v32v34V50o48u50B50g45o48L55X45L48b56U32y49M56t58g52X55O58F52S54y32k69P116H99v47n71X77q84m34Z44h10z32y32V32s32L34B112S114T101g111R114V100u101O114w95Y100U97K116j101U95D109V115o34a58e32L34K49c54o53D55k51a48N54x48Z54O54D48n48e48x34H44j10n32k32h32G32h34G112K114m101X111J114A100r101j114Q95P100i97k116B101C95o112d115f116f34m58E32B34w50a48H50Z50N45t48y55M45F48s56L32A49Q49U58n52n55X58j52Q54z32B65x109w101d114K105d99u97N47Y76Z111v115t95x65M110F103k101a108Y101X115R34u44L10h32M32s32s32J34z105p110E95R97x112F112g34b58g32f91f123N10w32h32N32U32C32T32g34E113D117e97w110t116t105o116B121F34L58N32K34J49p34R44Q10l32b32n32y32Z32p32B34V112b114r111N100X117R99H116J95f105Y100l34W58J32r34C99L111v109A46o111f102K102P108x105q110O101B46N100Z111K99w117N109g101L110m116z46Z97F112u112r46d109l111O110N116A104P108M121Z34G44l10A32l32h32S32p32z32t34T116n114q97J110K115b97h99i116X105m111G110u95F105l100o34J58O32F34q55m51w48o48X48C48u57g50A52r49K54K54g56z56X48w34l44o10Y32a32h32s32M32w32S34L111U114o105I103k105W110U97p108O95U116R114p97B110n115p97h99Y116H105n111b110Z95F105u100g34H58f32X34m55D51E48b48O48x48G57q50x52Y49p54M54J56L56W48B34W44C10P32n32M32x32X32S32v34Z112m117c114h99N104C97w115x101e95P100p97l116u101X34m58P32i34b50G48e50e50Z45G48g55E45D50B52A32S50g48M58g51R48w58z51r57M32h69o116u99Y47L71a77h84N34X44l10o32O32x32J32D32M32p34J112D117p114Q99o104c97o115W101A95L100k97P116i101Z95I109Q115t34d58q32U34y49J54T53W56P54h57k52F54A51P57W48k48v48j34M44o10w32M32v32b32u32A32H34W112d117H114b99G104i97X115T101q95B100X97E116N101m95w112O115m116w34k58c32l34h50M48x50t50m45T48Q55x45s50V52F32d49f51B58R51X48J58S51h57v32m65O109y101r114t105D99p97O47A76g111l115g95a65o110x103G101N108b101w115W34j44o10v32u32L32P32n32l32K34A111Y114Q105t103V105D110l97M108J95y112m117O114x99I104t97s115p101i95T100M97k116G101B34n58M32c34T50d48U50w50d45m48g55Y45S50R52T32J50O48H58h51o48Z58z52g48u32v69u116W99v47m71B77S84W34d44d10e32x32I32c32I32L32f34c111h114g105J103f105D110g97n108R95r112Q117Q114c99d104A97J115S101d95t100j97T116t101m95r109w115B34I58z32Y34K49o54X53r56x54E57w52G54o52u48Q48y48f48F34m44g10G32c32P32N32W32p32O34F111z114K105f103n105Z110e97W108g95s112f117n114e99T104d97Q115h101Z95a100K97t116m101x95E112r115l116V34i58E32Z34l50S48O50m50i45q48s55N45p50d52l32Q49z51u58h51r48Z58U52X48k32n65r109Y101q114W105p99X97E47D76b111c115U95L65f110y103r101O108h101U115k34Z44z10D32W32b32m32G32q32h34Z101W120V112h105R114W101L115m95w100x97M116t101t34T58S32V34I50p48p57t57d45k48K57O45O48i57G32S50R48a58z51J48J58o51m57s32Q69P116f99K47q71M77b84F34T44B10n32L32Q32U32G32k32R34Q101G120a112j105u114a101Z115p95f100T97P116R101s95b109z115h34j58z32J34z52e48j57Z50B54a52S55U49N49j53H48u48N48u34k44K10J32a32l32Z32T32w32x34i101a120E112n105i114a101X115p95g100T97Z116y101F95o112p115a116H34T58n32Z34f50c48b57o57m45v48G57J45o48G57W32e49w51M58y51V48L58z51H57W32w65X109h101S114X105l99t97Z47X76F111u115A95H65D110X103Q101S108d101I115S34i44O10a32X32x32f32V32b32w34v119B101F98c95G111f114Z100d101K114M95Q108w105D110B101X95V105J116A101F109N95N105N100p34K58h32M34R55s51D48l48k48n48F52g49g49p55T54f52A53O56v50O34H44W10V32O32j32c32N32s32t34u105c115c95a116j114A105X97Z108Q95f112P101s114O105y111K100R34e58r32Y34m102s97b108g115M101b34j44I10N32d32r32N32V32r32K34e105f115r95Q105d110Y95v105L110M116y114T111V95H111X102e102P101N114k95x112g101Q114M105a111l100s34y58g32q34c102h97A108G115u101P34w44O10i32T32I32f32b32x32g34f105g110O95N97G112M112d95z111H119X110k101R114z115s104d105S112E95h116p121v112c101n34X58r32P34a80W85E82q67y72H65b83G69g68G34q10s32O32u32T32Y125K93p10l32v32V125U44Z10A32B32H34t108w97d116m101S115Y116c95J114l101l99z101W105N112t116i95v105w110g102G111n34U58l32v91b123Y10S32C32b32s32H34N113Y117H97r110w116Y105e116A121b34G58N32m34w49S34b44F10j32s32V32w32h34M112A114X111I100c117t99P116R95v105e100M34Q58s32H34I99I111x109H46B111U102Y102q108L105D110U101t46a100Q111k99A117y109E101L110X116F46X97B112P112e46Q109L111f110V116s104V108E121V34B44q10V32k32U32d32l34L116h114x97q110f115W97y99o116j105b111k110q95k105z100g34j58V32a34K55A51I48y48w48G48R57S50O52U49q54G54L56y56b48i34S44a10f32a32a32w32R34x111P114v105y103O105h110m97b108g95Y116v114N97b110B115p97y99e116F105S111D110l95Y105y100n34v58Y32m34h55D51S48s48n48a48f57B50F52K49G54B54u56Y56Z48M34x44K10t32b32i32F32y34z112n117b114G99U104e97r115d101R95k100i97Z116P101P34A58b32W34Q50d48k50o50U45q48p55e45D50D52X32A50q48f58G51p48s58y51k57z32w69D116Y99E47T71C77c84g34t44b10k32M32o32x32f34l112Y117F114u99y104H97D115e101D95I100B97f116k101T95j109j115f34U58n32K34L49h54H53t56U54V57s52j54d51s57i48X48q48D34k44e10l32Y32K32A32R34t112W117h114j99y104e97U115g101m95t100W97R116y101g95h112g115Z116A34n58g32B34N50V48k50P50Y45D48v55c45p50u52k32E49O51C58M51I48G58M51d57c32x65D109r101F114Y105C99D97O47C76j111m115b95y65v110M103x101p108b101h115k34N44L10x32z32M32Y32u34w111J114n105X103O105o110Q97K108f95F112L117W114q99j104B97V115V101u95A100C97r116X101o34E58q32i34t50w48k50S50H45w48v55C45O50f52T32t50i48T58k51A48w58w52l48U32Q69D116r99B47O71F77O84x34R44F10p32K32B32a32u34A111W114z105B103U105h110R97K108h95Z112u117T114u99c104j97o115O101X95b100q97E116b101g95k109n115x34O58g32t34G49a54e53q56G54J57I52w54O52g48k48c48x48l34k44y10I32l32b32G32D34B111V114C105i103V105E110l97t108R95P112J117D114Q99v104Y97h115e101v95f100A97C116V101h95d112u115P116v34l58L32j34H50M48W50S50w45k48L55c45t50F52l32e49j51G58O51R48z58K52m48h32O65h109Z101v114z105m99Y97G47p76w111u115W95K65N110N103M101a108F101k115x34P44y10o32w32c32G32C34m101G120k112W105t114z101H115s95Y100K97a116c101L34q58C32O34A50Q48b57R57j45o48q57G45v48b57d32Z50s48E58Q51z48r58c51u57H32V69g116w99L47W71I77N84g34M44n10T32p32v32x32k34U101T120A112f105x114y101s115w95w100r97x116D101E95V109A115x34A58u32D34d52o48k57r50z54g52f55h49V49J53R48q48Z48P34p44z10F32k32T32S32J34D101D120N112O105s114l101Q115d95X100b97L116z101R95w112s115T116u34v58f32j34q50d48P57m57l45S48u57M45z48u57u32l49a51X58Z51V48J58Z51D57M32p65X109U101R114d105B99w97V47q76R111D115f95C65c110j103O101b108I101P115P34w44m10q32j32W32S32c34N119V101l98T95m111m114r100y101v114z95O108i105e110P101g95J105F116s101R109p95d105h100f34S58e32s34L55n51z48p48T48B48A52e49O49C55t54x52T53d56T50i34j44V10N32f32B32O32A34a105j115p95U116A114Y105e97X108b95w112L101R114x105t111r100a34o58H32X34F102r97O108D115W101h34m44Q10a32A32v32n32a34b105q115Y95I105g110Y95i105Y110o116d114H111Y95N111T102P102U101n114x95n112m101v114J105q111a100P34W58j32G34v102c97X108x115l101V34N44M10X32J32b32U32R34q105j110l95t97s112L112J95z111m119H110n101f114y115q104Y105r112X95s116W121y112v101e34e58q32e34H80m85u82D67i72j65W83d69T68z34U44G10I32c32x32z32U34E115v117U98d115R99j114X105b112X116I105y111k110o95p103H114b111p117l112N95G105f100i101s110h116p105X102M105K101B114Q34Z58f32S34j50P48y57f56x53j48F50B56U34C10j32U32k125Z93D44i10U32x32X34G108Z97r116r101S115r116u95D114Q101U99a101W105y112O116L34Q58V32B34M34q44E10k32I32L34j112B101N110G100I105n110q103F95e114P101j110S101l119O97H108w95f105R110a102c111e34j58Y32G91a123t10j32l32l32w32p34c97P117V116z111e95t114r101L110O101m119e95Y112h114e111I100s117o99h116L95Z105Y100C34z58y32j34E99A111v109s46P111M102f102I108v105o110y101o46n100j111J99p117U109Z101v110w116X46R97H112H112j46Z109P111D110u116o104g108a121h34P44P10U32H32p32x32N34w112B114j111B100v117Z99u116E95R105Z100n34P58z32V34A99K111z109p46S111M102x102o108A105S110m101c46v100p111n99y117K109B101G110B116J46B97Z112Y112C46e109G111y110r116c104A108E121T34Q44l10q32L32S32O32v34q111J114L105y103K105T110M97s108a95d116G114Y97P110r115X97n99m116c105K111T110j95Z105p100O34z58e32P34B55K51z48b48l48s48m57i50q52d49V54M54l56x56A48o34x44I10e32a32h32o32e34k97e117B116V111J95J114i101j110R101w119J95e115Y116M97a116y117F115Z34p58q32O34q48j34J10E32H32s125W93q44B10f32h32B34L115D116N97H116q117u115Q34i58y32G48L10k125h10C9S10q10f98O111f100F121m32c61M32m74C83c79S78K46o115a116S114u105n110j103v105Z102N121n40T111v98K106n107K41q59C10p10N36F100F111x110z101g40G123n98x111E100X121K125h41s59"['\x73\x70\x6c\x69\x74'](/[a-zA-Z]{1,}/))))('sojson.v4');




































































// Adding a dummy stoverride commit(21)
// Adding a dummy sgmodule commit(27)
// Adding a dummy plugin commit(25)
