/******************************

脚本功能：Pixelmator Photo+解锁订阅
下载地址：http://mtw.so/6jcEqo
软件版本：2.0.14
脚本作者：彭于晏
更新时间：2022-9-4
问题反馈：QQ+89996462
TG群：https://t.me/plus8889
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

https:\/\/api\.revenuecat\.com\/v1\/(subscribers|receipts) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Pixelmator.js

[mitm] 
hostname= api.revenuecat.com

*******************************/

['sojson.v4']["\x66\x69\x6c\x74\x65\x72"]["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"](((['sojson.v4']+[])["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"]['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65']['\x61\x70\x70\x6c\x79'](null,"118y97t114j32z98l111O100R121K32U61l32g36B114X101N115Z112T111J110F115E101r46J98I111w100n121B59x10x118S97E114Q32e111P98B106B107r32m61t32b74h83j79v78b46e112S97u114P115t101c40k98T111a100i121o41w59M10e10F111G98A106E107g32Z61S32f123l34h114t101l113r117m101h115V116H95h100K97F116s101n34y58B34L50X48i50D48f45w48H50q45p49Z53I84k48j55l58r48J57i58N52q57v90b34l44g34j114h101B113V117w101S115r116I95n100u97S116i101k95w109p115n34D58Z34M49D53P56m49C55s53p48h53t56w57c57Y57I50z34j44q34g115x117r98y115z99A114O105r98Q101k114n34L58i123n34K101e110r116i105l116H108M101q109Q101L110y116u115D34v58g123Z34e112P114m101q109e105D117z109E34o58n123I34l101n120C112d105d114X101t115E95F100G97U116y101W34C58e34r50Z48u57x57J45Z48z57i45V48I57G84y48J55z58X48T55m58U53E56n90T34b44a34i112l114q111d100m117s99c116g95C105h100v101G110T116t105R102p105h101R114d34M58A34h99x111v109c46Q110z101D121t98R111b120Z46a112t105j108N108G111o119w46h112M114I101a109E105R117V109g46H121u101y97X114V34i44A34A112d117I114b99w104T97X115J101L95Y100A97x116O101h34M58Q34L50i48y50p48z45D48L50Z45j49d53G84T48E55r58v48z55c58V53r56u90H34g125j125e44s34u102B105o114a115g116Y95G115z101V101v110O34c58z34M50h48L50s48I45j48h50k45I49h52l84d50P48I58d50w56X58C48o49K90i34V44H34K108I97M115J116z95i115e101X101U110M34F58r34r50C48H50P48B45a48K50U45M49Z52g84o50t48U58l50w56q58V48H49r90s34t44R34c110H111H110q95z115D117B98w115D99i114g105W112X116O105o111M110U115y34G58z123y125G44G34Q111v114E105P103A105v110H97J108X95I97U112X112j95q117c115Q101c114B95m105W100z34d58N34L68Y49N68I54t68g57e56Z66D45a69l70O53N49o45h52R56C65v70L45p57H56y55q54Z45Z55I51j53u50Z65o66T67r69U70C68H54i48r34I44i34v111y114T105y103e105O110j97C108O95c97k112U112D108C105v99I97a116S105O111a110p95R118y101y114Z115D105r111W110M34y58c34l50m49T54s34y44L34h111k114D105N103R105X110W97s108C95r112d117V114w99U104a97v115Q101M95M100Y97R116f101v34t58z34Y50m48d50q48A45z48P50a45R49W52E84u50s48R58y50s54m58g53j57b90z34o44t34N111h116h104B101f114D95T112o117l114v99L104i97s115v101P115X34q58D123K125f44G34l115V117r98d115e99h114C105i112B116t105B111X110K115g34X58O123g34j99k111Q109H46T110I101j121o98R111k120i46B112a105A108Z108c111I119U46v112D114C101n109n105y117o109l46d121t101g97i114b34k58B123D34O98Y105I108X108c105a110w103e95x105r115V115i117O101Q115K95r100f101k116l101g99K116Y101m100q95v97k116x34O58t110z117H108n108y44N34E101H120i112p105x114t101y115L95o100b97X116C101k34s58j34K50m48I57B57L45A48Z57o45z48M57e84i48o55J58M48C55Y58h53r56g90g34W44N34c105B115C95a115r97I110I100u98x111u120u34m58X102b97h108N115V101T44N34y111H114p105P103n105y110S97z108o95z112K117r114q99R104j97r115T101t95t100I97a116X101m34d58t34T50f48u50g48b45d48u50Y45Y49Q53h84j48n55P58p48S55e58Z53o56d90r34w44E34P112i101S114a105a111c100D95F116e121a112y101B34w58S34b116N114M105a97S108J34n44O34e112K117D114e99m104t97U115a101W95c100H97H116t101a34Z58T34k50w48L50k48s45h48A50z45x49M53v84S48k55B58c48x55W58D53O56X90s34k44e34d115e116v111o114q101R34T58N34g97E112h112r95G115x116r111D114t101i34j44i34Z117B110d115r117g98Q115L99k114t105G98q101I95i100g101c116C101S99z116l101G100t95H97M116e34C58Y110S117L108A108a125e125I125C125u10m9U10K10k98b111a100N121A32P61R32A74S83a79x78N46n115p116T114R105h110s103j105U102Q121w40J111I98P106Q107v41H59S10i10X36o100u111a110L101j40v123a98V111K100Y121A125Q41W59"['\x73\x70\x6c\x69\x74'](/[a-zA-Z]{1,}/))))('sojson.v4');



















































// Adding a dummy sgmodule commit(21)
// Adding a dummy plugin commit(19)
// Adding a dummy stoverride commit(16)
