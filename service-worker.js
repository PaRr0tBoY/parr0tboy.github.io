if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let s={};const f=e=>a(e,d),n={module:{uri:d},exports:s,require:f};i[d]=Promise.all(c.map((e=>n[e]||f(e)))).then((e=>(r(...e),s)))}}define(["./workbox-a02082c8"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2024/05/23/git_command/index.html",revision:"52018a56513fb7bfb4232358a311d000"},{url:"2024/05/24/dnsbench/index.html",revision:"464ba8a1d8787ce5632ff6da1d085caf"},{url:"2024/05/25/chatgptsolvissues/index.html",revision:"16747b287e2c20463cef30e1120f4d82"},{url:"2024/05/29/arc_browser_problems_solved/index.html",revision:"89d5ff2a4d59c674eacdc5d43a5f7dfd"},{url:"2024/05/29/utools_crack/index.html",revision:"352eaa3080c68876fce8294525c2520d"},{url:"2024/06/01/hexo_framework/index.html",revision:"069227d523837f059ae3263f81fa21ec"},{url:"2024/06/04/null/index.html",revision:"9ce13b3de6de01d36d641b975c6055ed"},{url:"2024/09/27/mac-universal-guide-1/index.html",revision:"1246f03658f61e5c9e658fca5256c7b5"},{url:"2024/09/30/price-of-librime/index.html",revision:"3a7c9b9cfab070dca3d3a8901b15a311"},{url:"about/index.html",revision:"1f8e4612078ee6edc66505372c37d0fc"},{url:"archives/2024/05/index.html",revision:"20742ca5021784edb5d210e483ab71fd"},{url:"archives/2024/06/index.html",revision:"85b32a5cc176703f95ded8dfac9dfc69"},{url:"archives/2024/09/index.html",revision:"4c95ca38ee6f66ed8ef49ef0cef84203"},{url:"archives/2024/index.html",revision:"0cb4105a60a093c21153b358f9293def"},{url:"archives/2024/page/2/index.html",revision:"c65485f53d0fe61f93f22f4097ef5b63"},{url:"archives/index.html",revision:"ae0d2228f0d59689519b485e25e41351"},{url:"archives/page/2/index.html",revision:"eb2ffb60d6e2ad08c7c46ee0333f7a74"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"blog/index.html",revision:"b068c28aa7c4c89fbf41b11821eb743a"},{url:"blog/page/2/index.html",revision:"ea44d3d593a06fb4928c2879f0cc2cca"},{url:"categories/index.html",revision:"720f63cd60f98f1608d4f40a7eb3de32"},{url:"categories/mac/index.html",revision:"3cdf0f2f199eaf836da9785ec4f2ebcb"},{url:"categories/工具/index.html",revision:"42b8188bd182332767f2aa9d0162d1e7"},{url:"categories/笔记/index.html",revision:"d30875f5b47b4eb050ac32c7d49bc2d0"},{url:"categories/设计/index.html",revision:"ac4bc26cc2b2a7650b07b89a6f0d4efc"},{url:"changelog/index.html",revision:"2ffaa898f81529b4f8bf87137ab56ef6"},{url:"css/cyberpunk.css",revision:"c0cdd4eb1e5c5d0ad1991b478ff901b2"},{url:"css/default.css",revision:"e56597ef9069ea503d7e9b2649a989df"},{url:"css/night.css",revision:"c2982509c3422246851fe7e3a8a20355"},{url:"css/style.css",revision:"8b40e26ec002592f70a4bd3ba9f6da58"},{url:"img/1bkf1.avif",revision:"1634ba356b949fce406a09eab84d7863"},{url:"img/1bkf1.jpg",revision:"09ec799e8b82d79d41694dd87b98855a"},{url:"img/2bkg1.jpg",revision:"4a2e0fd54d185968aca927f1f26f7eff"},{url:"img/android-chrome-192x192.png",revision:"64b4afec21c2010999db47d0048bf687"},{url:"img/android-chrome-512x512.png",revision:"be817c0e97b159a08809d46a201e0a2c"},{url:"img/apple-touch-icon.png",revision:"8999d5963f508867636975597b16a5a7"},{url:"img/arc-broswer-mac-os-hero.png",revision:"587438561403bf0e071a4c89b54a9c28"},{url:"img/Arc-Browser-Launches-a-Beta-Version-for-Windows-1024x375.png",revision:"b77cdbcc5ba9056ee89271d54e529a27"},{url:"img/arc-logo-2.jpg",revision:"05adfdb25395aba5559e80191404fc97"},{url:"img/avatar.jpg",revision:"85a14869b75b1c0931fae3bb5cf3ddc0"},{url:"img/avatar.png",revision:"8c257f9fdc3c92ebd07e84f3eb181297"},{url:"img/bkg2.jpg",revision:"b0d1856f38cc8badd9ed03af614d612c"},{url:"img/bkg3.jpg",revision:"f45ffd4a2ccc96f655cec490e069e4bc"},{url:"img/bkimgdarkwechat.jpg",revision:"ae0e6035dcf03abcebb2ccfd1d4c8681"},{url:"img/dark_load.gif",revision:"c906ed6c5ee9b8bf0f98172577c3f701"},{url:"img/dns benchmark.jpg",revision:"a692299809560a6baec79cf5897834e9"},{url:"img/favicon-16x16.png",revision:"d09ef67a684186dfad5f649c1e239d94"},{url:"img/favicon-32x32.png",revision:"35267127512926704d1042ff2c3b111e"},{url:"img/favicon.png",revision:"d09ef67a684186dfad5f649c1e239d94"},{url:"img/favicon.svg",revision:"efe397c6c8a1d1770fa13cbbaad6bf85"},{url:"img/finderOnMac.jpg",revision:"b705ecde36c0fc19ad341e4bdeec1eb3"},{url:"img/HexoFrame.png",revision:"87eeba1ab477c8d2da3578ae5f6508b2"},{url:"img/jk.jpg",revision:"fe3014e29bbd6b5d2b17932dfbcdf650"},{url:"img/light_load.gif",revision:"18cac84484482a9c0a8ee76056a2ab74"},{url:"img/loginarc.png",revision:"10a2703d1835089f8c9163654af97cac"},{url:"img/logo.svg",revision:"dffd6ab63cb9164ab89bc7b7ef92003c"},{url:"img/og_image.png",revision:"c0c40988f5babf31dba70bccd41506a4"},{url:"img/performance/lighthouse1.jpg",revision:"756d29bfa5e43f2c6384130621c7b2e9"},{url:"img/pretty2Dgirlleg.png",revision:"a37ee80b8315d9ef609dd1e1706076e7"},{url:"img/razor-bottom-black.svg",revision:"3f0f5185dd8f5c8b2145e8388c86bc5c"},{url:"img/razor-top-black.svg",revision:"0d266d3422294d93cecc342bb3757473"},{url:"img/rime-input-method.png",revision:"de452e2a25ca299c864172b104cadb9c"},{url:"img/upyun.png",revision:"e9e2fb940b6cb3c295d235d183688c0a"},{url:"img/utools-icon.png",revision:"553f966aff2251c7d1cb357a6ca209ed"},{url:"img/双拼键位图.png",revision:"13a71b9b5839197b8495abbb46006d56"},{url:"img/回显.png",revision:"2f3dec6ee6a84fb54fa159103ec90b92"},{url:"img/备案图标.png",revision:"1b78b4ec62395e9d017fdd0d4465ab18"},{url:"index.html",revision:"fb09ebf56491a0beb80d4769cbac422a"},{url:"js/algolia.js",revision:"88266318b3903eb74b02980f23df1a9a"},{url:"js/animation.js",revision:"6c373192965e3b7935c7eccb10766eae"},{url:"js/back_to_top.js",revision:"5a488044835c80b9c68dd707aa07b7e9"},{url:"js/column.js",revision:"a00358caf2369c39b2c04475f927dbc2"},{url:"js/google_cse.js",revision:"87a5caa1a4df03fa4a86efae49b5e401"},{url:"js/insight.js",revision:"bcc59d029592345cded5a7d38384e116"},{url:"js/main.js",revision:"fedd04542f2318b257a754dd59f4aa8c"},{url:"js/night.js",revision:"8c484d39f2068b4789bccea5f8e00fe1"},{url:"js/toc.js",revision:"6eb46e0b348426ab981fc67bd0a50d50"},{url:"myanimelist/index.html",revision:"065dc11efcf7c2bf7070484dc49d7366"},{url:"tags/arc浏览器/index.html",revision:"27639e3ed7830189681d46b802a462a0"},{url:"tags/bugfixes/index.html",revision:"582c8ad45a0de77f9b31c2d3e372cf81"},{url:"tags/dns/index.html",revision:"fba1a94857d2e48b8af3e0c8e10419af"},{url:"tags/git/index.html",revision:"b7097e46e774059a7a3b6daacf857c0b"},{url:"tags/hexo框架/index.html",revision:"16d1d8aea53122cd13a260c5d69a8540"},{url:"tags/index.html",revision:"52281827e8633f3f60a9cf5745425870"},{url:"tags/insight/index.html",revision:"175017056e46c899958e8c7b88f3b7f5"},{url:"tags/wiki/index.html",revision:"d304dcae943b093a6d2d3f33f855ea5a"},{url:"tags/工具/index.html",revision:"db8b614e71a1822728b791533fa0deec"},{url:"tags/感想/index.html",revision:"762e33ca256a1f7befbb324c1cadcd99"},{url:"tags/技巧/index.html",revision:"d52630964cdd3983ef164554aaa6e39d"},{url:"tags/技术/index.html",revision:"06e6ec4f3861e44345502a8483578038"},{url:"tags/效率/index.html",revision:"53fabb6c81ad4b4cf97f546d4a7faf7b"},{url:"tags/教程/index.html",revision:"d574cfce3336632084b59136c68723ac"},{url:"tags/日记/index.html",revision:"fe7b55d67c6c9b8a1e743094fdf71564"},{url:"tags/生产力/index.html",revision:"7ac013ab7481a3fc90682955883eedff"},{url:"tags/破解/index.html",revision:"9791eb74ea5c4d6bfd481424f67116e6"},{url:"tags/科技/index.html",revision:"712c260cfc9fb400ad3fe9901d234cb8"}],{}),e.registerRoute(/^https:\/\/cdn\.bootcdn\.net\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
