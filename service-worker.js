if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let s={};const f=e=>a(e,d),n={module:{uri:d},exports:s,require:f};i[d]=Promise.all(c.map((e=>n[e]||f(e)))).then((e=>(r(...e),s)))}}define(["./workbox-a02082c8"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2024/05/23/git_command/index.html",revision:"52bf0877993593cbdc128938d331ca9f"},{url:"2024/05/24/dnsbench/index.html",revision:"1db863b4a4f4e5662da66d33294fa409"},{url:"2024/05/25/chatgptsolvissues/index.html",revision:"d047353be790eaf9b7c2ca6d8a1dbcb9"},{url:"2024/05/29/arc_browser_problems_solved/index.html",revision:"28db26135f71515b4f89123936227a4b"},{url:"2024/05/29/utools_crack/index.html",revision:"280e44f80f42d3c093462dc027058110"},{url:"2024/06/01/hexo_framework/index.html",revision:"1d02a075d5111f6f893a4f0190169e8c"},{url:"2024/06/04/null/index.html",revision:"92ff9264af7d7f02cf429548775b1f26"},{url:"2024/09/27/mac-universal-guide-1/index.html",revision:"64992a44d0ea3ea2b59e83dce9f686ec"},{url:"2024/09/30/price-of-librime/index.html",revision:"d4a6a3f011fa12bdb366869306455b2c"},{url:"about/index.html",revision:"d6eec6ff636da0dfeac19245b101d3ec"},{url:"archives/2024/05/index.html",revision:"86106967a3f3a141ee486ffebfa05f13"},{url:"archives/2024/06/index.html",revision:"71bea8068f9ca39e808c4dbfed1eadfe"},{url:"archives/2024/09/index.html",revision:"3853d3b69c495c01934691f79425c6fd"},{url:"archives/2024/index.html",revision:"c666c3f51c9e085d55cf05616b6054ee"},{url:"archives/2024/page/2/index.html",revision:"5775087a26a2c77c220d9b16e52fa5df"},{url:"archives/index.html",revision:"9a32a391876b78433058a44818997b6f"},{url:"archives/page/2/index.html",revision:"6e43fc222e44b749ac47273d5bb551bb"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"blog/index.html",revision:"ad07030fae3672326c34376b4e675c48"},{url:"blog/page/2/index.html",revision:"277e8564d5bb8d67460c5166a788b90b"},{url:"categories/index.html",revision:"6f5bb63a62447f26a88fd06d5739319a"},{url:"categories/mac/index.html",revision:"4b83528e4772426ea9d9efe7d2e476c7"},{url:"categories/工具/index.html",revision:"1d73c6497d350fff5c608fbdc463f117"},{url:"categories/笔记/index.html",revision:"4dc4571082eb114dd4d75e5346b11178"},{url:"categories/设计/index.html",revision:"62605f51aab022c230f9a01767a00979"},{url:"changelog/index.html",revision:"90d9b978b2c0efb14511288ebc54df8c"},{url:"css/custom-fonts.css",revision:"3b3247f9b7ce8c13d4ed571311fc2758"},{url:"css/cyberpunk.css",revision:"953fed5706fe08a8993ead81bb5b4956"},{url:"css/default.css",revision:"d58f830aa44215a38af2ceac1a421cc6"},{url:"css/night.css",revision:"1f9ddf6588f27c55f55c4a92bff43b26"},{url:"css/style.css",revision:"a2ba2c77230bf925b59a51cd0776f63d"},{url:"fonts/custom-fonts.css",revision:"33a228d5f2c28f3c76ab19cd83525b67"},{url:"fonts/JetBrainsMono-Bold.ttf",revision:"8658ffe39dbfa1c12436789a50212180"},{url:"fonts/JetBrainsMono-Regular.ttf",revision:"d09f65145228b709a10fa0a06d522d89"},{url:"img/1bkf1.avif",revision:"1634ba356b949fce406a09eab84d7863"},{url:"img/1bkf1.jpg",revision:"09ec799e8b82d79d41694dd87b98855a"},{url:"img/2bkg1.jpg",revision:"4a2e0fd54d185968aca927f1f26f7eff"},{url:"img/android-chrome-192x192.png",revision:"64b4afec21c2010999db47d0048bf687"},{url:"img/android-chrome-512x512.png",revision:"be817c0e97b159a08809d46a201e0a2c"},{url:"img/apple-touch-icon.png",revision:"8999d5963f508867636975597b16a5a7"},{url:"img/arc-broswer-mac-os-hero.png",revision:"587438561403bf0e071a4c89b54a9c28"},{url:"img/Arc-Browser-Launches-a-Beta-Version-for-Windows-1024x375.png",revision:"b77cdbcc5ba9056ee89271d54e529a27"},{url:"img/arc-logo-2.jpg",revision:"05adfdb25395aba5559e80191404fc97"},{url:"img/avatar.jpg",revision:"85a14869b75b1c0931fae3bb5cf3ddc0"},{url:"img/avatar.png",revision:"8c257f9fdc3c92ebd07e84f3eb181297"},{url:"img/bkg2.jpg",revision:"b0d1856f38cc8badd9ed03af614d612c"},{url:"img/bkg3.jpg",revision:"f45ffd4a2ccc96f655cec490e069e4bc"},{url:"img/bkimgdarkwechat.jpg",revision:"ae0e6035dcf03abcebb2ccfd1d4c8681"},{url:"img/dark_load.gif",revision:"c906ed6c5ee9b8bf0f98172577c3f701"},{url:"img/dns benchmark.jpg",revision:"a692299809560a6baec79cf5897834e9"},{url:"img/favicon-16x16.png",revision:"d09ef67a684186dfad5f649c1e239d94"},{url:"img/favicon-32x32.png",revision:"35267127512926704d1042ff2c3b111e"},{url:"img/favicon.png",revision:"d09ef67a684186dfad5f649c1e239d94"},{url:"img/favicon.svg",revision:"efe397c6c8a1d1770fa13cbbaad6bf85"},{url:"img/finderOnMac.jpg",revision:"b705ecde36c0fc19ad341e4bdeec1eb3"},{url:"img/HexoFrame.png",revision:"87eeba1ab477c8d2da3578ae5f6508b2"},{url:"img/jk.jpg",revision:"fe3014e29bbd6b5d2b17932dfbcdf650"},{url:"img/light_load.gif",revision:"18cac84484482a9c0a8ee76056a2ab74"},{url:"img/loginarc.png",revision:"10a2703d1835089f8c9163654af97cac"},{url:"img/logo.svg",revision:"dffd6ab63cb9164ab89bc7b7ef92003c"},{url:"img/og_image.png",revision:"c0c40988f5babf31dba70bccd41506a4"},{url:"img/performance/lighthouse1.jpg",revision:"756d29bfa5e43f2c6384130621c7b2e9"},{url:"img/pretty2Dgirlleg.png",revision:"a37ee80b8315d9ef609dd1e1706076e7"},{url:"img/razor-bottom-black.svg",revision:"3f0f5185dd8f5c8b2145e8388c86bc5c"},{url:"img/razor-top-black.svg",revision:"0d266d3422294d93cecc342bb3757473"},{url:"img/rime-input-method.png",revision:"de452e2a25ca299c864172b104cadb9c"},{url:"img/upyun.png",revision:"e9e2fb940b6cb3c295d235d183688c0a"},{url:"img/utools-icon.png",revision:"553f966aff2251c7d1cb357a6ca209ed"},{url:"img/双拼键位图.png",revision:"13a71b9b5839197b8495abbb46006d56"},{url:"img/回显.png",revision:"2f3dec6ee6a84fb54fa159103ec90b92"},{url:"img/备案图标.png",revision:"1b78b4ec62395e9d017fdd0d4465ab18"},{url:"index.html",revision:"4b93038c0760c010a1b07982e872c2af"},{url:"js/algolia.js",revision:"88266318b3903eb74b02980f23df1a9a"},{url:"js/animation.js",revision:"6c373192965e3b7935c7eccb10766eae"},{url:"js/back_to_top.js",revision:"5a488044835c80b9c68dd707aa07b7e9"},{url:"js/column.js",revision:"a00358caf2369c39b2c04475f927dbc2"},{url:"js/google_cse.js",revision:"87a5caa1a4df03fa4a86efae49b5e401"},{url:"js/insight.js",revision:"bcc59d029592345cded5a7d38384e116"},{url:"js/main.js",revision:"fedd04542f2318b257a754dd59f4aa8c"},{url:"js/night.js",revision:"8c484d39f2068b4789bccea5f8e00fe1"},{url:"js/toc.js",revision:"6eb46e0b348426ab981fc67bd0a50d50"},{url:"myanimelist/index.html",revision:"cf651946ece3cc383f93202a42d5a795"},{url:"tags/arc浏览器/index.html",revision:"1adc7f05543a698bfd4cc2ff2b20faad"},{url:"tags/bugfixes/index.html",revision:"5437823d540f64b2d99fefcc089a905b"},{url:"tags/dns/index.html",revision:"1bb0c209d54da4d63e5c001cc1da8ea7"},{url:"tags/git/index.html",revision:"c6f697747033d8382da3b9572fdaa73b"},{url:"tags/hexo框架/index.html",revision:"f3a8383ff2594ec351417387b8578ab2"},{url:"tags/index.html",revision:"f197032564ab7470cda015189f5cb4c4"},{url:"tags/insight/index.html",revision:"b94a1c8960dc0f946a881dffbb99e01a"},{url:"tags/wiki/index.html",revision:"83f1b56dbddd8a2fc73a3411b761f6eb"},{url:"tags/工具/index.html",revision:"475ecfe0cc6f9d98229504b26c945f17"},{url:"tags/感想/index.html",revision:"23c86863a630409a098a2272ed04558c"},{url:"tags/技巧/index.html",revision:"aaf00a773cd96d869629dd794a334c63"},{url:"tags/技术/index.html",revision:"5cea4a0ad83e8ae8f3e1c3fdb3eb0049"},{url:"tags/效率/index.html",revision:"4979bde5a34aa495ada21324ed1bc669"},{url:"tags/教程/index.html",revision:"83b667929560c5e8b07315f7b423f0c4"},{url:"tags/日记/index.html",revision:"baf0bfffff3e7477947439b52978512f"},{url:"tags/生产力/index.html",revision:"cb8fb09f2e0f0b4dd9cae2bae59f8c34"},{url:"tags/破解/index.html",revision:"9acc9cc8b4ef094b6fb0e0a9e3c28a77"},{url:"tags/科技/index.html",revision:"a70e4c42e111914d4216e012df6581c9"}],{}),e.registerRoute(/^https:\/\/cdn\.bootcdn\.net\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
