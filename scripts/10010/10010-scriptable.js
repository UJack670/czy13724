const a0_0xf701b7=a0_0x2aee;(function(_0x9c8405,_0x15a442){const _0x32ecc6=a0_0x2aee,_0x24eb59=_0x9c8405();while(!![]){try{const _0x496d6b=-parseInt(_0x32ecc6(0x14b))/0x1+parseInt(_0x32ecc6(0x14a))/0x2*(parseInt(_0x32ecc6(0x13a))/0x3)+parseInt(_0x32ecc6(0x145))/0x4*(-parseInt(_0x32ecc6(0x131))/0x5)+-parseInt(_0x32ecc6(0x143))/0x6+parseInt(_0x32ecc6(0x148))/0x7+parseInt(_0x32ecc6(0x153))/0x8+parseInt(_0x32ecc6(0x135))/0x9;if(_0x496d6b===_0x15a442)break;else _0x24eb59['push'](_0x24eb59['shift']());}catch(_0x14155c){_0x24eb59['push'](_0x24eb59['shift']());}}}(a0_0x33d0,0x25c54));if(typeof require===a0_0xf701b7(0x150))require=importModule;const {Base}=require(a0_0xf701b7(0x149));function a0_0x2aee(_0x11e881,_0x51f461){const _0x33d0cd=a0_0x33d0();return a0_0x2aee=function(_0x2aee27,_0x25f1f3){_0x2aee27=_0x2aee27-0x12e;let _0x5631cb=_0x33d0cd[_0x2aee27];return _0x5631cb;},a0_0x2aee(_0x11e881,_0x51f461);}class Widget extends Base{constructor(_0x66e66e){const _0x24f94d=a0_0xf701b7;super(_0x66e66e),this[_0x24f94d(0x139)]='http://boxjs.com/#/app/ChinaUnicom.10010v4',this[_0x24f94d(0x13c)]=async()=>{const _0x111b3a=_0x24f94d;console[_0x111b3a(0x14f)](_0x111b3a(0x132));try{const _0x16d9c2=new Request('http://10010v4.com/data');_0x16d9c2[_0x111b3a(0x12e)]=0xa,_0x16d9c2[_0x111b3a(0x13b)]='GET';const _0x2b17fc=await _0x16d9c2[_0x111b3a(0x159)]();console[_0x111b3a(0x14f)](_0x2b17fc);const _0x3a13b8=_0x2b17fc['vars'];return _0x3a13b8;}catch(_0xd5bf03){console['error'](_0xd5bf03);}},this[_0x24f94d(0x130)]=async()=>{const _0x2cabe6=_0x24f94d;console[_0x2cabe6(0x14f)](_0x2cabe6(0x137));try{const _0x1c6bd7=new Request('http://boxjs.com/query/data/@ChinaUnicom.10010v4.vars');_0x1c6bd7[_0x2cabe6(0x12e)]=0xa,_0x1c6bd7['method']=_0x2cabe6(0x13d);const _0x2733ae=await _0x1c6bd7[_0x2cabe6(0x159)]();console[_0x2cabe6(0x14f)](_0x2733ae);const _0x689f5f=_0x2733ae[_0x2cabe6(0x12f)];return JSON[_0x2cabe6(0x14c)](_0x689f5f);}catch(_0x4d0615){console['error'](_0x4d0615);}};}async[a0_0xf701b7(0x14e)](){const _0x55b2f1=a0_0xf701b7,[_0xd73a1d,_0x1663b2]=await Promise[_0x55b2f1(0x13f)]([this['getRealtimeData'](),this['getBoxjsData']()]);let _0x23fce4={'title':_0x55b2f1(0x15c),'subt':'http://10010v4.com/data','desc':_0x55b2f1(0x151)};if(_0xd73a1d)console[_0x55b2f1(0x14f)](_0x55b2f1(0x142)),_0x23fce4=_0xd73a1d;else _0x1663b2&&(console[_0x55b2f1(0x14f)]('使用\x20boxjs\x20缓存数据'),_0x23fce4=_0x1663b2);return await this[this['widgetFamily']+_0x55b2f1(0x13e)]({'data':_0x23fce4,'url':this[_0x55b2f1(0x139)]});}async['accessoryInlineWidget']({url:_0x43544c,data:_0x436cd2}){const _0x4ab05e=a0_0xf701b7,_0x600826=new ListWidget(),_0x251f99=_0x600826['addText'](_0x436cd2['desc']);return _0x251f99[_0x4ab05e(0x15a)]=Font[_0x4ab05e(0x144)](0xc),_0x251f99[_0x4ab05e(0x133)]=Color['dynamic'](Color['black'](),Color[_0x4ab05e(0x138)]()),_0x251f99[_0x4ab05e(0x155)](),_0x251f99[_0x4ab05e(0x141)]=0.75,_0x600826[_0x4ab05e(0x139)]=_0x43544c,_0x600826;}async['accessoryCircularWidget']({url:_0x5c88f1,data:_0x1c211f}){const _0x28fa2e=a0_0xf701b7,_0x213e2b=new ListWidget(),_0x88b698=_0x213e2b[_0x28fa2e(0x14d)](_0x1c211f[_0x28fa2e(0x157)]);return _0x88b698['font']=Font[_0x28fa2e(0x144)](0xc),_0x88b698[_0x28fa2e(0x133)]=Color[_0x28fa2e(0x15b)](Color['black'](),Color[_0x28fa2e(0x138)]()),_0x88b698[_0x28fa2e(0x155)](),_0x88b698['textOpacity']=0.75,_0x213e2b[_0x28fa2e(0x139)]=_0x5c88f1,_0x213e2b;}async[a0_0xf701b7(0x154)]({url:_0x48120d,data:_0x5e8678}){const _0x549653=a0_0xf701b7,_0x5862dc=new ListWidget(),_0x4b6b1f=_0x5862dc['addText'](_0x5e8678[_0x549653(0x134)]);_0x4b6b1f[_0x549653(0x15a)]=Font['boldSystemFont'](0xc),_0x4b6b1f[_0x549653(0x133)]=Color['dynamic'](Color[_0x549653(0x146)](),Color[_0x549653(0x138)]()),_0x4b6b1f[_0x549653(0x155)](),_0x4b6b1f[_0x549653(0x141)]=0.5;const _0x58389f=_0x5862dc[_0x549653(0x14d)](_0x5e8678[_0x549653(0x156)]);_0x58389f[_0x549653(0x15a)]=Font['boldSystemFont'](0xc),_0x58389f[_0x549653(0x133)]=Color['dynamic'](Color[_0x549653(0x146)](),Color[_0x549653(0x138)]()),_0x58389f[_0x549653(0x155)](),_0x58389f['textOpacity']=0.75;const _0x2eb114=_0x5862dc['addText'](_0x5e8678[_0x549653(0x157)]);return _0x2eb114[_0x549653(0x15a)]=Font[_0x549653(0x144)](0xc),_0x2eb114['textColor']=Color[_0x549653(0x15b)](Color[_0x549653(0x146)](),Color[_0x549653(0x138)]()),_0x2eb114[_0x549653(0x155)](),_0x2eb114[_0x549653(0x141)]=0.75,_0x5862dc[_0x549653(0x139)]=_0x48120d,_0x5862dc;}async[a0_0xf701b7(0x140)]({url:_0x13b515,data:_0x296e1b}){const _0x18cf44=a0_0xf701b7,_0x29bce1=new ListWidget();_0x29bce1[_0x18cf44(0x136)]();const _0x393cb2=_0x29bce1[_0x18cf44(0x14d)](_0x296e1b['title']);_0x393cb2[_0x18cf44(0x15a)]=Font[_0x18cf44(0x144)](0xc),_0x393cb2[_0x18cf44(0x133)]=Color['dynamic'](Color['black'](),Color[_0x18cf44(0x138)]()),_0x393cb2[_0x18cf44(0x155)](),_0x393cb2[_0x18cf44(0x141)]=0.5,_0x29bce1[_0x18cf44(0x136)]();const _0x81473c=_0x29bce1[_0x18cf44(0x14d)](_0x296e1b['subt']);_0x81473c[_0x18cf44(0x15a)]=Font[_0x18cf44(0x144)](0xc),_0x81473c[_0x18cf44(0x133)]=Color[_0x18cf44(0x15b)](Color['black'](),Color[_0x18cf44(0x138)]()),_0x81473c[_0x18cf44(0x155)](),_0x81473c[_0x18cf44(0x141)]=0.75,_0x29bce1['addSpacer']();const _0x245b3f=_0x29bce1[_0x18cf44(0x14d)](_0x296e1b['desc']);return _0x245b3f['font']=Font['boldSystemFont'](0xc),_0x245b3f[_0x18cf44(0x133)]=Color['dynamic'](Color['black'](),Color[_0x18cf44(0x138)]()),_0x245b3f[_0x18cf44(0x155)](),_0x245b3f[_0x18cf44(0x141)]=0.75,_0x29bce1[_0x18cf44(0x136)](),_0x29bce1['url']=_0x13b515,_0x29bce1;}async[a0_0xf701b7(0x158)]({url:_0x5eda51,data:_0x69343c}){const _0x202f97=a0_0xf701b7,_0x9a48c8=new ListWidget();_0x9a48c8[_0x202f97(0x136)]();const _0x6498c1=_0x9a48c8['addText'](_0x69343c[_0x202f97(0x134)]);_0x6498c1[_0x202f97(0x15a)]=Font['boldSystemFont'](0xc),_0x6498c1[_0x202f97(0x133)]=Color[_0x202f97(0x15b)](Color[_0x202f97(0x146)](),Color['white']()),_0x6498c1['centerAlignText'](),_0x6498c1['textOpacity']=0.5,_0x9a48c8[_0x202f97(0x136)]();const _0x5d1a93=_0x9a48c8['addText'](_0x69343c[_0x202f97(0x156)]);_0x5d1a93[_0x202f97(0x15a)]=Font[_0x202f97(0x144)](0xc),_0x5d1a93['textColor']=Color['dynamic'](Color['black'](),Color['white']()),_0x5d1a93['centerAlignText'](),_0x5d1a93[_0x202f97(0x141)]=0.75,_0x9a48c8[_0x202f97(0x136)]();const _0x92dc42=_0x9a48c8[_0x202f97(0x14d)](_0x69343c[_0x202f97(0x157)]);return _0x92dc42[_0x202f97(0x15a)]=Font[_0x202f97(0x144)](0xc),_0x92dc42[_0x202f97(0x133)]=Color[_0x202f97(0x15b)](Color[_0x202f97(0x146)](),Color[_0x202f97(0x138)]()),_0x92dc42[_0x202f97(0x155)](),_0x92dc42[_0x202f97(0x141)]=0.75,_0x9a48c8['addSpacer'](),_0x9a48c8['url']=_0x5eda51,_0x9a48c8;}async['largeWidget']({url:_0x58e835,data:_0x3b711a}){const _0x55d73f=a0_0xf701b7,_0x330333=new ListWidget();_0x330333['addSpacer']();const _0x103a8e=_0x330333['addText'](_0x3b711a[_0x55d73f(0x134)]);_0x103a8e[_0x55d73f(0x15a)]=Font['boldSystemFont'](0xc),_0x103a8e[_0x55d73f(0x133)]=Color[_0x55d73f(0x15b)](Color['black'](),Color[_0x55d73f(0x138)]()),_0x103a8e[_0x55d73f(0x155)](),_0x103a8e['textOpacity']=0.5,_0x330333[_0x55d73f(0x136)]();const _0x2b4a43=_0x330333[_0x55d73f(0x14d)](_0x3b711a[_0x55d73f(0x156)]);_0x2b4a43[_0x55d73f(0x15a)]=Font['boldSystemFont'](0xc),_0x2b4a43[_0x55d73f(0x133)]=Color[_0x55d73f(0x15b)](Color[_0x55d73f(0x146)](),Color['white']()),_0x2b4a43[_0x55d73f(0x155)](),_0x2b4a43[_0x55d73f(0x141)]=0.75,_0x330333[_0x55d73f(0x136)]();const _0x5db769=_0x330333['addText'](_0x3b711a[_0x55d73f(0x157)]);return _0x5db769[_0x55d73f(0x15a)]=Font[_0x55d73f(0x144)](0xc),_0x5db769[_0x55d73f(0x133)]=Color[_0x55d73f(0x15b)](Color[_0x55d73f(0x146)](),Color['white']()),_0x5db769['centerAlignText'](),_0x5db769[_0x55d73f(0x141)]=0.75,_0x330333[_0x55d73f(0x136)](),_0x330333[_0x55d73f(0x139)]=_0x58e835,_0x330333;}async[a0_0xf701b7(0x152)](_0x4ced1d){const _0xb44c93=a0_0xf701b7;Safari[_0xb44c93(0x147)](_0x4ced1d,![]);}}const {Testing}=require('./「小件件」开发环境');function a0_0x33d0(){const _0x5692c2=['black','openInApp','996968KIgEWm','./「小件件」开发环境','354190gFbZzm','252624mJBORZ','parse','addText','render','log','undefined','或\x20http://boxjs.com','actionOpenUrl','632552RBDLLU','accessoryRectangularWidget','centerAlignText','subt','desc','mediumWidget','loadJSON','font','dynamic','确认能访问','timeoutInterval','val','getBoxjsData','1835yYEVry','getRealtimeData\x20from\x20http://10010v4.com/data','textColor','title','2977749HHyZjg','addSpacer','getBoxjsData\x20from\x20http://boxjs.com/query/data/@ChinaUnicom.10010v4.vars','white','url','3skwvUv','method','getRealtimeData','GET','Widget','all','smallWidget','textOpacity','使用实时数据','684168aLCSRB','boldSystemFont','2268bMZHQG'];a0_0x33d0=function(){return _0x5692c2;};return a0_0x33d0();}await Testing(Widget);









































// Adding a dummy stoverride commit(12)
// Adding a dummy sgmodule commit(18)
// Adding a dummy plugin commit(16)
