!function(e){function t(t){for(var r,a,c=t[0],i=t[1],o=t[2],s=0,l=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(P,a)&&P[a]&&l.push(P[a][0]),P[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(A&&A(t);l.length;)l.shift()();return I.push.apply(I,o||[]),n()}function n(){for(var e,t=0;t<I.length;t++){for(var n=I[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==P[c]&&(r=!1)}r&&(I.splice(t--,1),e=D(D.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!O[e]||!E[e])return;for(var n in E[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--g&&0===y&&j()}(e,t),r&&r(e,t)};var a,c=!0,i="fab15f5a61f9645da9cc",o={},s=[],l=[];function u(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:_,apply:x,status:function(e){if(!e)return f;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:o[e]};return a=void 0,t}var d=[],f="idle";function p(e){f=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var m,h,v,g=0,y=0,b={},E={},O={};function w(e){return+e+""===e?+e:e}function _(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return c=e,p("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=D.p+""+i+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return p("idle"),null;E={},b={},O=e.c,v=e.h,p("prepare");var t=new Promise((function(e,t){m={resolve:e,reject:t}}));for(var n in h={},P)N(n);return"prepare"===f&&0===y&&0===g&&j(),t}));var t}function N(e){O[e]?(E[e]=!0,g++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=D.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):b[e]=!0}function j(){p("ready");var e=m;if(m=null,e)if(c)Promise.resolve().then((function(){return x(c)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(w(n));e.resolve(t)}}function x(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,a,c,l;function u(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var a=r.pop(),i=a.id,o=a.chain;if((c=L[i])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:o,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:o,moduleId:i};for(var s=0;s<c.parents.length;s++){var l=c.parents[s],u=L[l];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:o.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),d(n[l],[i])):(delete n[l],t.push(l),r.push({chain:o.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var m={},g=[],y={},b=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var E in h)if(Object.prototype.hasOwnProperty.call(h,E)){var _;l=w(E);var N=!1,j=!1,x=!1,k="";switch((_=h[E]?u(l):{type:"disposed",moduleId:E}).chain&&(k="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(N=new Error("Aborted because of self decline: "+_.moduleId+k));break;case"declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(N=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+k));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(_),t.ignoreUnaccepted||(N=new Error("Aborted because "+l+" is not accepted"+k));break;case"accepted":t.onAccepted&&t.onAccepted(_),j=!0;break;case"disposed":t.onDisposed&&t.onDisposed(_),x=!0;break;default:throw new Error("Unexception type "+_.type)}if(N)return p("abort"),Promise.reject(N);if(j)for(l in y[l]=h[l],d(g,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,l)&&(m[l]||(m[l]=[]),d(m[l],_.outdatedDependencies[l]));x&&(d(g,[_.moduleId]),y[l]=b)}var I,S=[];for(r=0;r<g.length;r++)l=g[r],L[l]&&L[l].hot._selfAccepted&&y[l]!==b&&S.push({module:l,errorHandler:L[l].hot._selfAccepted});p("dispose"),Object.keys(O).forEach((function(e){!1===O[e]&&function(e){delete P[e]}(e)}));for(var T,H,A=g.slice();A.length>0;)if(l=A.pop(),c=L[l]){var C={},F=c.hot._disposeHandlers;for(a=0;a<F.length;a++)(n=F[a])(C);for(o[l]=C,c.hot.active=!1,delete L[l],delete m[l],a=0;a<c.children.length;a++){var M=L[c.children[a]];M&&((I=M.parents.indexOf(l))>=0&&M.parents.splice(I,1))}}for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(c=L[l]))for(H=m[l],a=0;a<H.length;a++)T=H[a],(I=c.children.indexOf(T))>=0&&c.children.splice(I,1);for(l in p("apply"),i=v,y)Object.prototype.hasOwnProperty.call(y,l)&&(e[l]=y[l]);var U=null;for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(c=L[l])){H=m[l];var R=[];for(r=0;r<H.length;r++)if(T=H[r],n=c.hot._acceptedDependencies[T]){if(-1!==R.indexOf(n))continue;R.push(n)}for(r=0;r<R.length;r++){n=R[r];try{n(H)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:H[r],error:e}),t.ignoreErrored||U||(U=e)}}}for(r=0;r<S.length;r++){var q=S[r];l=q.module,s=[l];try{D(l)}catch(e){if("function"==typeof q.errorHandler)try{q.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:n,originalError:e}),t.ignoreErrored||U||(U=n),U||(U=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:e}),t.ignoreErrored||U||(U=e)}}return U?(p("fail"),Promise.reject(U)):(p("idle"),new Promise((function(e){e(g)})))}var L={},k={2:0},P={2:0},I=[];function D(t){if(L[t])return L[t].exports;var n=L[t]={i:t,l:!1,exports:{},hot:u(t),parents:(l=s,s=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=L[e];if(!t)return D;var n=function(n){return t.hot.active?(L[n]?-1===L[n].parents.indexOf(e)&&L[n].parents.push(e):(s=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),D(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return D[e]},set:function(t){D[e]=t}}};for(var c in D)Object.prototype.hasOwnProperty.call(D,c)&&"e"!==c&&"t"!==c&&Object.defineProperty(n,c,r(c));return n.e=function(e){return"ready"===f&&p("prepare"),y++,D.e(e).then(t,(function(e){throw t(),e}));function t(){y--,"prepare"===f&&(b[e]||N(e),0===y&&0===g&&j())}},n.t=function(e,t){return 1&t&&(e=n(e)),D.t(e,-2&t)},n}(t)),n.l=!0,n.exports}D.e=function(e){var t=[];k[e]?t.push(k[e]):0!==k[e]&&{4:1}[e]&&t.push(k[e]=new Promise((function(t,n){for(var r="css/"+e+"."+{3:"31d6cfe0",4:"9cb7efc6"}[e]+".css",a=D.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var o=(l=c[i]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(o===r||o===a))return t()}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){var l;if((o=(l=s[i]).getAttribute("data-href"))===r||o===a)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete k[e],u.parentNode.removeChild(u),n(c)},u.href=a,document.getElementsByTagName("head")[0].appendChild(u)})).then((function(){k[e]=0})));var n=P[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=P[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,D.nc&&c.setAttribute("nonce",D.nc),c.src=function(e){return D.p+"js/"+({3:"mine",4:"order"}[e]||e)+"."+i.substr(0,8)+".js"}(e);var o=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=P[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;o.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",o.name="ChunkLoadError",o.type=r,o.request=a,n[1](o)}P[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},D.m=e,D.c=L,D.d=function(e,t,n){D.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},D.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},D.t=function(e,t){if(1&t&&(e=D(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(D.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)D.d(n,r,function(t){return e[t]}.bind(null,r));return n},D.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return D.d(t,"a",t),t},D.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},D.p="",D.oe=function(e){throw console.error(e),e},D.h=function(){return i};var S=window.webpackJsonp=window.webpackJsonp||[],T=S.push.bind(S);S.push=t,S=S.slice();for(var H=0;H<S.length;H++)t(S[H]);var A=T;I.push([203,0]),n()}({112:function(e,t,n){"use strict";var r=n(19),a=n(113),c=n(114),i=n(31),o=Object(a.createLogger)(),s=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.d)(Object(r.a)(c.a,o)),l=Object(r.e)(i.default,s);e.hot.accept(31,function(e){var t;i=n(31),t=n(31).default,l.replaceReducer(t)}.bind(this)),t.a=l},145:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){},166:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){"use strict";n.r(t),t.default=n.p+"img/loading.5b4e52e4.svg"},182:function(e,t,n){},200:function(e,t,n){},201:function(e,t,n){},202:function(e,t,n){},203:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(46),i=n(16),o=(n(125),n(128),n(69)),s=n.n(o),l=n(111),u=n(20);n(145),n(146);var d=function(){return a.a.createElement("div",{className:"search-bar"},a.a.createElement("div",{className:"city"},a.a.createElement("i",{className:"iconfont icon-location"}),a.a.createElement("span",{className:"city-name ellipsis"},"郑州市"),a.a.createElement("i",{className:"iconfont icon-more"})),a.a.createElement("div",{className:"input"},a.a.createElement("i",{className:"iconfont icon-search"}),a.a.createElement("span",{className:"place-holder"},"鸡翅")))},f=n.p+"img/bannertemp.e8a6fa63.bd94867a.jpg";n(147);var p=function(){return a.a.createElement("section",{className:"banner-wrapper"},a.a.createElement(d,null),a.a.createElement("div",{className:"banner-img"},a.a.createElement("img",{src:f,alt:"banner"})))},m=(n(34),n(65),n(28));n(166);var h={getCategoryList:m.b},v=Object(i.b)((function(e){return{categoryList:e.index.categoryList}}),h)((function(e){var t=e.categoryList,n=e.getCategoryList;return Object(r.useEffect)((function(){n()}),[]),a.a.createElement("section",{className:"category-wrapper"},a.a.createElement("ul",{className:"category-list"},function(e){return e.map((function(e){return a.a.createElement("li",{key:e.code,className:"category-item"},a.a.createElement("a",{href:"/category/".concat(e.code)},a.a.createElement("img",{className:"img",src:e.url,alt:e.name}),a.a.createElement("p",{className:"name"},e.name)))}))}(t)))}));n(167),n(172),n(174),n(176);var g=function(e){var t,n=e.item,r=e.index;return a.a.createElement("li",{className:"business-item","data-index":r},a.a.createElement("a",{href:"/detail/".concat(n.id),className:"business-link"},a.a.createElement("div",{className:"business-pic"},a.a.createElement("img",{className:"pic",src:n.pic_url,alt:n.name}),n.brand_type?a.a.createElement("span",{className:"brand brand-pin"},"品牌"):a.a.createElement("span",{className:"brand brand-xin"},"新到")),a.a.createElement("div",{className:"business-info"},a.a.createElement("p",{className:"name ellipsis"},n.name),a.a.createElement("div",{className:"meta-box"},a.a.createElement("span",{className:"score"},function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=[],n=5,r=Number.parseInt(e),c=Number.isInteger(e)?1:0,i=n-r-c,o=0;o<r;o++)t.push(a.a.createElement("i",{key:o+"fullstar",className:"star fullstar"}));for(var s=0;s<c;s++)t.push(a.a.createElement("i",{key:s+"halfstar",className:"star halfstar"}));for(var l=0;l<i;l++)t.push(a.a.createElement("i",{key:l+"graystar",className:"star graystar"}));return t}(n.wm_poi_score)),a.a.createElement("span",{className:"count"},"月销",n.month_sale_num,"+"),a.a.createElement("span",{className:"distance"},n.distance),a.a.createElement("span",{className:"time"},n.mt_delivery_time)),a.a.createElement("div",{className:"price-box"},a.a.createElement("span",{className:"price"},n.min_price_tip),a.a.createElement("span",{className:"price"},n.average_price_tip),n.delivery_type&&a.a.createElement("span",{className:"delivery"},"美团专送")),n.discounts2&&n.discounts2.length>0&&(t=n.discounts2,a.a.createElement("div",{className:"activity-box"},a.a.createElement("ul",{className:"activity-list"},t.map((function(e){return a.a.createElement("li",{key:e.id,className:"activity-item"},a.a.createElement("img",{className:"pic",src:e.icon_url,alt:e.info}),a.a.createElement("span",{className:"info"},e.info))}))))))))};var y=function(e){var t=e.children,n=e.cb,c=e.isFetching,i=e.isEnd;Object(r.useEffect)((function(){return document.addEventListener("scroll",o),function(){return document.removeEventListener("scroll",o)}}));var o=function(){if(!c&&!i){var e=[document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop,document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft][0],t=(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight);e+t>=(document.body.offsetWidth||document.body.scrollWidth,document.body.offsetHeight||document.body.scrollHeight)-t&&n&&n()}};return a.a.createElement("div",{className:"scroll-view"},t)};n(177);var b={getBusinessList:m.a,setPageIndex:m.e,setFetchingState:m.d},E=Object(i.b)((function(e){return{businessList:e.index.businessList,pageIndex:e.index.pageIndex,isFetching:e.index.isFetching}}),b)((function(e){var t=e.businessList,c=e.getBusinessList,i=e.pageIndex,o=e.setPageIndex,s=e.isFetching,l=e.setFetchingState;Object(r.useEffect)((function(){c(i)}),[]);var u=function(){var e=i+1;l(!0),o(e),c(e)};return a.a.createElement("section",{className:"business-wrapper"},a.a.createElement("h2",{className:"title"},"附近商家"),a.a.createElement(y,{cb:u,isFetching:s,isEnd:i>=3},a.a.createElement("ul",{className:"business-list"},t.map((function(e,t){return a.a.createElement(g,{key:e.id+t,index:t,item:e})})))),function(){if(t&&(!t||0!==t.length))return s?a.a.createElement("div",{className:"loading"},a.a.createElement("img",{src:n(178).default,alt:"loading"}),"加载中..."):a.a.createElement("div",{className:"loading"},"我也是有底线的")}())}));var O=function(){return a.a.createElement("div",{className:"home-tab"},a.a.createElement(p,null),a.a.createElement(v,null),a.a.createElement(E,null))},w=(n(179),n(32));n(182);var _=Object(i.b)((function(e){return{tabs:e.index.tabs}}))((function(e){var t=e.tabs;return a.a.createElement("nav",{className:"container bottom-nav"},t.map((function(e){return a.a.createElement(w.b,{exact:!0,to:e.link,key:e.key,className:"nav-item ".concat(e.key),activeClassName:"active"},a.a.createElement("div",{className:"icon"}),a.a.createElement("span",{className:"name"},e.name))})))}));function N(){return a.a.createElement("div",null,"Loading...")}var j=s()({loader:function(){return n.e(4).then(n.bind(null,207))},loading:N}),x=s()({loader:function(){return n.e(3).then(n.bind(null,206))},loading:N});var L=Object(l.hot)(Object(i.b)()((function(){return a.a.createElement("div",{className:"page-index"},a.a.createElement(u.a,{exact:!0,path:"/",component:O}),a.a.createElement(u.a,{path:"/order",component:j}),a.a.createElement(u.a,{path:"/mine",component:x}),a.a.createElement(_,null))}))),k=n(112);n(200),n(201),n(202);Object(c.render)(a.a.createElement(i.a,{store:k.a},a.a.createElement(w.a,null,a.a.createElement(L,null))),document.getElementById("root"))},28:function(e,t,n){"use strict";n.d(t,"e",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return v})),n.d(t,"c",(function(){return g}));n(148);var r=n(24),a=n.n(r),c=(n(94),n(48)),i=n.n(c),o=n(49),s=n.n(o),l=n(5),u=function(e){return{type:l.c,categoryList:e}},d=function(e){return{type:l.b,businessList:e}},f=function(e){return{type:l.g,pageIndex:e}},p=function(e){return{type:l.d,isFetching:e}},m=function(e){return{type:l.f,orderList:e}},h=function(){return function(){var e=i()(a.a.mark((function e(t){var n,r,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/mock/categoryList.json");case 2:n=e.sent,r=n.status,c=n.data,200===r&&0===c.code&&(i=c.data.primary_filter.slice(0,10),t(u(i)));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(e){return function(t){setTimeout(i()(a.a.mark((function n(){var r,c,i,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.get("/mock/businessList.json",{params:{pageIndex:e}});case 2:r=n.sent,c=r.status,i=r.data,200===c&&0===i.code&&(o=i.data.poilist,t(d(o)),t(p(!1)));case 6:case"end":return n.stop()}}),n)}))),500)}},g=function(){return function(){var e=i()(a.a.mark((function e(t){var n,r,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/mock/orders.json");case 2:n=e.sent,r=n.status,c=n.data,200===r&&0===c.code&&(i=c.data.digestlist,t(m(i)));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},31:function(e,t,n){"use strict";n.r(t);var r=n(19),a=(n(184),n(187),n(188),n(189),n(191),n(192),n(193),n(194),n(72)),c=n.n(a),i=n(115),o=n.n(i),s=n(5);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={tabs:[{key:"index",name:"首页",link:"/"},{key:"order",name:"订单",link:"/order"},{key:"mine",name:"我的",link:"/mine"}],categoryList:[],businessList:[],orderList:[],pageIndex:1,pageSize:10,isLastPage:!1,isFetching:!1};t.default=Object(r.c)({index:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.c:return u({},e,{categoryList:t.categoryList});case s.b:return u({},e,{businessList:[].concat(c()(e.businessList),c()(t.businessList))});case s.g:return u({},e,{pageIndex:t.pageIndex});case s.e:return u({},e,{isLastPage:t.isLastPage});case s.d:return u({},e,{isFetching:t.isFetching});case s.f:return u({},e,{orderList:t.orderList});default:return e}}})},5:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"g",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"f",(function(){return l}));var r="CHANGE_ACTIVE_TAB",a="SET_CATEGORY_LIST",c="SET_BUSINESS_LIST",i="SET_PAGE_INDEX",o="SET_LAST_PAGE_STATE",s="SET_FETCHING_STATE",l="SET_ORDER_LIST"}});