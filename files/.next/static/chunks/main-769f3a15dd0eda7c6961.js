_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"0sNQ":function(e,t){"trimStart"in String.prototype||(String.prototype.trimStart=String.prototype.trimLeft),"trimEnd"in String.prototype||(String.prototype.trimEnd=String.prototype.trimRight),"description"in Symbol.prototype||Object.defineProperty(Symbol.prototype,"description",{get:function(){return/\((.+)\)/.exec(this)[1]}}),Array.prototype.flat||(Array.prototype.flat=function(e,t){return t=this.concat.apply([],this),e>1&&t.some(Array.isArray)?t.flat(e-1):t},Array.prototype.flatMap=function(e,t){return this.map(e,t).flat()}),Promise.prototype.finally||(Promise.prototype.finally=function(e){if("function"!=typeof e)return this.then(e,e);var t=this.constructor||Promise;return this.then((function(r){return t.resolve(e()).then((function(){return r}))}),(function(r){return t.resolve(e()).then((function(){throw r}))}))})},BMP1:function(e,t,r){"use strict";var n=r("284h")(r("IKlv"));window.next=n,(0,n.default)().catch(console.error)},DqTX:function(e,t,r){"use strict";var n=r("J4zp");t.__esModule=!0,t.default=function(e){var t=document.getElementsByTagName("head")[0],r=new Set(t.children);i(r,e.map((function(e){var t=n(e,2),r=t[0],a=t[1];return(0,o.createElement)(r,a)})),!1);var a=null;return{mountedInstances:new Set,updateHead:function(e){var t=a=Promise.resolve().then((function(){t===a&&(a=null,i(r,e,!0))}))}}};var o=r("q1tI"),a={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"};function i(e,t,r){var n=document.getElementsByTagName("head")[0],o=new Set(e);t.forEach((function(t){if("title"!==t.type){for(var r=function(e){var t=e.type,r=e.props,n=document.createElement(t);for(var o in r)if(r.hasOwnProperty(o)&&"children"!==o&&"dangerouslySetInnerHTML"!==o&&void 0!==r[o]){var i=a[o]||o.toLowerCase();n.setAttribute(i,r[o])}var c=r.children,u=r.dangerouslySetInnerHTML;return u?n.innerHTML=u.__html||"":c&&(n.textContent="string"===typeof c?c:Array.isArray(c)?c.join(""):""),n}(t),i=e.values();;){var c=i.next(),u=c.done,s=c.value;if(null==s?void 0:s.isEqualNode(r))return void o.delete(s);if(u)break}e.add(r),n.appendChild(r)}else{var l="";if(t){var f=t.props.children;l="string"===typeof f?f:Array.isArray(f)?f.join(""):""}l!==document.title&&(document.title=l)}})),o.forEach((function(t){r&&t.parentNode.removeChild(t),e.delete(t)}))}},IKlv:function(e,t,r){"use strict";var n,o,a=r("yXPU"),i=r("lwsE"),c=r("W8MJ"),u=r("7W2i"),s=r("a1gu"),l=r("Nsbk"),f=r("J4zp");function d(){d=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof y?t:y,i=Object.create(a.prototype),c=new A(n||[]);return o(i,"_invoke",{value:T(e,r,c)}),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=l;var p="suspendedStart",h="executing",m="completed",v={};function y(){}function g(){}function w(){}var E={};s(E,i,(function(){return this}));var S=Object.getPrototypeOf,_=S&&S(S(C([])));_&&_!==r&&n.call(_,i)&&(E=_);var b=w.prototype=y.prototype=Object.create(E);function x(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function P(e,t){function r(o,a,i,c){var u=f(e[o],e,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(l).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}})}function T(t,r,n){var o=p;return function(a,i){if(o===h)throw new Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=L(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=h;var s=f(t,r,n);if("normal"===s.type){if(o=n.done?m:"suspendedYield",s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function L(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var a=f(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,v;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function C(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(typeof t+" is not iterable")}return g.prototype=w,o(b,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:g,configurable:!0}),g.displayName=s(w,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,s(e,u,"GeneratorFunction")),e.prototype=Object.create(b),e},t.awrap=function(e){return{__await:e}},x(P.prototype),s(P.prototype,c,(function(){return this})),t.AsyncIterator=P,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new P(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},x(b),s(b,u,"Generator"),s(b,i,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=C,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=l(e);if(t){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}var h=r("284h"),m=r("TqRt");t.__esModule=!0,t.render=ie,t.renderError=ce,t.default=t.emitter=t.router=t.version=void 0;var v=m(r("pVnL"));m(r("284h"));r("0sNQ");var y=m(r("q1tI")),g=m(r("i8i4")),w=r("FYa8"),E=m(r("dZ6Y")),S=r("qOIg"),_=r("elyg"),b=r("/jkW"),x=h(r("3WeD")),P=h(r("yLiY")),T=r("g/15"),L=m(r("DqTX")),N=h(r("zmvN")),k=m(r("bGXG")),A=r("nOHt"),C=JSON.parse(document.getElementById("__NEXT_DATA__").textContent);window.__NEXT_DATA__=C;t.version="9.5.5";var R=C.props,I=C.err,M=C.page,F=C.query,D=C.buildId,j=C.assetPrefix,B=C.runtimeConfig,O=C.dynamicIds,q=C.isFallback,G=C.head,H=C.locales,U=C.defaultLocale,X=C.locale,W=j||"";r.p="".concat(W,"/_next/"),P.setConfig({serverRuntimeConfig:{},publicRuntimeConfig:B||{}});var Y=(0,T.getURL)();(0,_.hasBasePath)(Y)&&(Y=(0,_.delBasePath)(Y)),Y=(0,_.delLocale)(Y,X);var J=new N.default(D,W,M),V=function(e){var t=f(e,2),r=t[0],n=t[1];return J.registerPage(r,n)};window.__NEXT_P&&window.__NEXT_P.map((function(e){return setTimeout((function(){return V(e)}),0)})),window.__NEXT_P=[],window.__NEXT_P.push=V;var z,K,Q,Z,$,ee,te,re=(0,L.default)(G),ne=document.getElementById("__next");t.router=Q;var oe=function(e){u(r,e);var t=p(r);function r(){return i(this,r),t.apply(this,arguments)}return c(r,[{key:"componentDidCatch",value:function(e,t){this.props.fn(e,t)}},{key:"componentDidMount",value:function(){this.scrollToHash(),Q.isSsr&&(q||C.nextExport&&((0,b.isDynamicRoute)(Q.pathname)||location.search)||R&&R.__N_SSG&&location.search)&&Q.replace(Q.pathname+"?"+String(x.assign(x.urlQueryToSearchParams(Q.query),new URLSearchParams(location.search))),Y,{_h:1,shallow:!q})}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=location.hash;if(e=e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout((function(){return t.scrollIntoView()}),0)}}},{key:"render",value:function(){return this.props.children}}]),r}(y.default.Component),ae=(0,E.default)();t.emitter=ae;function ie(e){return(o=o||a(d().mark((function e(t){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.err){e.next=4;break}return e.next=3,ce(t);case 3:return e.abrupt("return");case 4:return e.prev=4,e.next=7,he(t);case 7:e.next=16;break;case 9:if(e.prev=9,e.t0=e.catch(4),!e.t0.cancelled){e.next=13;break}throw e.t0;case 13:return e.next=16,ce((0,v.default)({},t,{err:e.t0}));case 16:case"end":return e.stop()}}),e,null,[[4,9]])})))).apply(this,arguments)}function ce(e){var t=e.App,r=e.err;return console.error(r),J.loadPage("/_error").then((function(n){var o=n.page,a=n.styleSheets,i=pe(t),c={Component:o,AppTree:i,router:Q,ctx:{err:r,pathname:M,query:F,asPath:Y,AppTree:i}};return Promise.resolve(e.props?e.props:(0,T.loadGetInitialProps)(t,c)).then((function(t){return he((0,v.default)({},e,{err:r,Component:o,styleSheets:a,props:t}))}))}))}t.default=function(){return(n=n||a(d().mark((function e(){var r,n,o,a,i,c,u=arguments;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u.length>0&&void 0!==u[0]?u[0]:{},e.next=4,J.loadPage("/_app");case 4:return r=e.sent,n=r.page,o=r.mod,ee=n,o&&o.reportWebVitals&&(te=function(e){var t,r=e.id,n=e.name,a=e.startTime,i=e.value,c=e.duration,u=e.entryType,s=e.entries,l="".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12);s&&s.length&&(t=s[0].startTime),o.reportWebVitals({id:r||l,name:n,startTime:a||t,value:null==i?c:i,label:"mark"===u||"measure"===u?"custom":"web-vital"})}),a=I,e.prev=10,e.next=14,J.loadPage(M);case 14:i=e.sent,Z=i.page,$=i.styleSheets,e.next=21;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(10),a=e.t0;case 26:if(!window.__NEXT_PRELOADREADY){e.next=30;break}return e.next=30,window.__NEXT_PRELOADREADY(O);case 30:return t.router=Q=(0,A.createRouter)(M,F,Y,{initialProps:R,pageLoader:J,App:ee,Component:Z,initialStyleSheets:$,wrapApp:pe,err:a,isFallback:Boolean(q),subscription:function(e,t){return ie({App:t,Component:e.Component,styleSheets:e.styleSheets,props:e.props,err:e.err})},locale:X,locales:H,defaultLocale:U}),ie(c={App:ee,Component:Z,styleSheets:$,props:R,err:a}),e.abrupt("return",ae);case 38:return e.abrupt("return",{emitter:ae,render:ie,renderCtx:c});case 39:case"end":return e.stop()}}),e,null,[[10,23]])})))).apply(this,arguments)};var ue="function"===typeof g.default.hydrate;function se(){T.ST&&(performance.mark("afterHydrate"),performance.measure("Next.js-before-hydration","navigationStart","beforeRender"),performance.measure("Next.js-hydration","beforeRender","afterHydrate"),te&&performance.getEntriesByName("Next.js-hydration").forEach(te),fe())}function le(){if(T.ST){performance.mark("afterRender");var e=performance.getEntriesByName("routeChange","mark");e.length&&(performance.measure("Next.js-route-change-to-render",e[0].name,"beforeRender"),performance.measure("Next.js-render","beforeRender","afterRender"),te&&(performance.getEntriesByName("Next.js-render").forEach(te),performance.getEntriesByName("Next.js-route-change-to-render").forEach(te)),fe(),["Next.js-route-change-to-render","Next.js-render"].forEach((function(e){return performance.clearMeasures(e)})))}}function fe(){["beforeRender","afterHydrate","afterRender","routeChange"].forEach((function(e){return performance.clearMarks(e)}))}function de(e){var t=e.children;return y.default.createElement(oe,{fn:function(e){return ce({App:ee,err:e}).catch((function(e){return console.error("Error rendering page: ",e)}))}},y.default.createElement(S.RouterContext.Provider,{value:(0,A.makePublicRouterInstance)(Q)},y.default.createElement(w.HeadManagerContext.Provider,{value:re},t)))}var pe=function(e){return function(t){var r=(0,v.default)({},t,{Component:Z,err:I,router:Q});return y.default.createElement(de,null,y.default.createElement(e,r))}};function he(e){var t=e.App,r=e.Component,n=e.props,o=e.err,a=e.styleSheets;r=r||z.Component,n=n||z.props;var i=(0,v.default)({},n,{Component:r,err:o,router:Q});z=i;var c,u=!1,s=new Promise((function(e,t){K&&K(),c=function(){K=null,e()},K=function(){u=!0,K=null;var e=new Error("Cancel rendering route");e.cancelled=!0,t(e)}}));var l,f,d=y.default.createElement(me,{callback:function(){if(!ue&&!u){for(var e=new Set(a.map((function(e){return e.href}))),t=(0,N.looseToArray)(document.querySelectorAll("style[data-n-href]")),r=t.map((function(e){return e.getAttribute("data-n-href")})),n=0;n<r.length;++n)e.has(r[n])?t[n].removeAttribute("media"):t[n].setAttribute("media","x");var o=document.querySelector("noscript[data-n-css]");o&&a.forEach((function(e){var t=e.href,r=document.querySelector('style[data-n-href="'.concat(t,'"]'));r&&(o.parentNode.insertBefore(r,o.nextSibling),o=r)})),(0,N.looseToArray)(document.querySelectorAll("link[data-n-p]")).forEach((function(e){e.parentNode.removeChild(e)})),getComputedStyle(document.body,"height")}c()}},y.default.createElement(de,null,y.default.createElement(t,i)));return function(){if(ue)return!1;var e=(0,N.looseToArray)(document.querySelectorAll("style[data-n-href]")),t=new Set(e.map((function(e){return e.getAttribute("data-n-href")})));a.forEach((function(e){var r=e.href,n=e.text;if(!t.has(r)){var o=document.createElement("style");o.setAttribute("data-n-href",r),o.setAttribute("media","x"),document.head.appendChild(o),o.appendChild(document.createTextNode(n))}}))}(),l=d,f=ne,T.ST&&performance.mark("beforeRender"),ue?(g.default.hydrate(l,f,se),ue=!1,te&&T.ST&&(0,k.default)(te)):g.default.render(l,f,le),s}function me(e){var t=e.callback,r=e.children;return y.default.useLayoutEffect((function(){return t()}),[t]),r}},Lab5:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r="/"===e?"/index":/^\/index(\/|$)/.test(e)?"/index".concat(e):"".concat(e);return r+t}},bGXG:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r("w6Sm");t.default=function(e){(0,n.getCLS)(e),(0,n.getFID)(e),(0,n.getFCP)(e),(0,n.getLCP)(e),(0,n.getTTFB)(e)}},pVnL:function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},w6Sm:function(e,t,r){"use strict";r.r(t),r.d(t,"getCLS",(function(){return h})),r.d(t,"getFCP",(function(){return v})),r.d(t,"getFID",(function(){return y})),r.d(t,"getLCP",(function(){return w})),r.d(t,"getTTFB",(function(){return E}));var n,o,a=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{name:e,value:t,delta:0,entries:[],id:a(),isFinal:!1}},c=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return r.observe({type:e,buffered:!0}),r}}catch(e){}},u=!1,s=!1,l=function(e){u=!e.persisted},f=function(){addEventListener("pagehide",l),addEventListener("beforeunload",(function(){}))},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];s||(f(),s=!0),addEventListener("visibilitychange",(function(t){var r=t.timeStamp;"hidden"===document.visibilityState&&e({timeStamp:r,isUnloading:u})}),{capture:!0,once:t})},p=function(e,t,r,n){var o;return function(){r&&t.isFinal&&r.disconnect(),t.value>=0&&(n||t.isFinal||"hidden"===document.visibilityState)&&(t.delta=t.value-(o||0),(t.delta||t.isFinal||void 0===o)&&(e(t),o=t.value))}},h=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=i("CLS",0),o=function(e){e.hadRecentInput||(n.value+=e.value,n.entries.push(e),t())},a=c("layout-shift",o);a&&(t=p(e,n,a,r),d((function(e){var r=e.isUnloading;a.takeRecords().map(o),r&&(n.isFinal=!0),t()})))},m=function(){return void 0===n&&(n="hidden"===document.visibilityState?0:1/0,d((function(e){var t=e.timeStamp;return n=t}),!0)),{get timeStamp(){return n}}},v=function(e){var t,r=i("FCP"),n=m(),o=c("paint",(function(e){"first-contentful-paint"===e.name&&e.startTime<n.timeStamp&&(r.value=e.startTime,r.isFinal=!0,r.entries.push(e),t())}));o&&(t=p(e,r,o))},y=function(e){var t=i("FID"),r=m(),n=function(e){e.startTime<r.timeStamp&&(t.value=e.processingStart-e.startTime,t.entries.push(e),t.isFinal=!0,a())},o=c("first-input",n),a=p(e,t,o);o?d((function(){o.takeRecords().map(n),o.disconnect()}),!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(e,n){n.timeStamp<r.timeStamp&&(t.value=e,t.isFinal=!0,t.entries=[{entryType:"first-input",name:n.type,target:n.target,cancelable:n.cancelable,startTime:n.timeStamp,processingStart:n.timeStamp+e}],a())}))},g=function(){return o||(o=new Promise((function(e){return["scroll","keydown","pointerdown"].map((function(t){addEventListener(t,e,{once:!0,passive:!0,capture:!0})}))}))),o},w=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=i("LCP"),o=m(),a=function(e){var r=e.startTime;r<o.timeStamp?(n.value=r,n.entries.push(e)):n.isFinal=!0,t()},u=c("largest-contentful-paint",a);if(u){t=p(e,n,u,r);var s=function(){n.isFinal||(u.takeRecords().map(a),n.isFinal=!0,t())};g().then(s),d(s,!0)}},E=function(e){var t,r=i("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var r in e)"navigationStart"!==r&&"toJSON"!==r&&(t[r]=Math.max(e[r]-e.navigationStart,0));return t}();r.value=r.delta=t.responseStart,r.entries=[t],r.isFinal=!0,e(r)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)}},yLiY:function(e,t,r){"use strict";var n;t.__esModule=!0,t.setConfig=function(e){n=e},t.default=void 0;t.default=function(){return n}},zmvN:function(e,t,r){"use strict";var n=r("lwsE"),o=r("W8MJ"),a=r("TqRt");t.__esModule=!0,t.default=t.looseToArray=void 0;var i=a(r("dZ6Y")),c=r("elyg"),u=a(r("Lab5")),s=r("/jkW"),l=r("hS4m"),f=function(e){return[].slice.call(e)};function d(e,t){try{return document.createElement("link").relList.supports(e)}catch(r){}}function p(e){return(0,c.markLoadingError)(new Error("Error loading ".concat(e)))}t.looseToArray=f;var h=d("preload")&&!d("prefetch")?"preload":"prefetch",m=d("preload")?"preload":h;document.createElement("script");function v(e){if("/"!==e[0])throw new Error('Route name should start with a "/", got "'.concat(e,'"'));return"/"===e?e:e.replace(/\/$/,"")}function y(e,t,r,n){return new Promise((function(o,a){n=document.createElement("link"),r&&(n.as=r),n.rel=t,n.crossOrigin=void 0,n.onload=o,n.onerror=a,n.href=e,document.head.appendChild(n)}))}var g=function(){function e(t,r,o){n(this,e),this.initialPage=void 0,this.buildId=void 0,this.assetPrefix=void 0,this.pageCache=void 0,this.pageRegisterEvents=void 0,this.loadingRoutes=void 0,this.promisedBuildManifest=void 0,this.promisedSsgManifest=void 0,this.promisedDevPagesManifest=void 0,this.initialPage=o,this.buildId=t,this.assetPrefix=r,this.pageCache={},this.pageRegisterEvents=(0,i.default)(),this.loadingRoutes={"/_app":!0},"/_error"!==o&&(this.loadingRoutes[o]=!0),this.promisedBuildManifest=new Promise((function(e){window.__BUILD_MANIFEST?e(window.__BUILD_MANIFEST):window.__BUILD_MANIFEST_CB=function(){e(window.__BUILD_MANIFEST)}})),this.promisedSsgManifest=new Promise((function(e){window.__SSG_MANIFEST?e(window.__SSG_MANIFEST):window.__SSG_MANIFEST_CB=function(){e(window.__SSG_MANIFEST)}}))}return o(e,[{key:"getPageList",value:function(){return this.promisedBuildManifest.then((function(e){return e.sortedPages}))}},{key:"getDependencies",value:function(e){var t=this;return this.promisedBuildManifest.then((function(r){return r[e]?r[e].map((function(e){return"".concat(t.assetPrefix,"/_next/").concat(encodeURI(e))})):Promise.reject(p(e))}))}},{key:"getDataHref",value:function(e,t,r,n,o){var a=this,i=(0,l.parseRelativeUrl)(e),f=i.pathname,d=i.query,p=i.search,h=(0,l.parseRelativeUrl)(t).pathname,m=v(f),y=function(e){var t=(0,c.addLocale)((0,u.default)(e,".json"),n,o);return(0,c.addBasePath)("/_next/data/".concat(a.buildId).concat(t).concat(r?"":p))},g=(0,s.isDynamicRoute)(m),w=g?(0,c.interpolateAs)(f,h,d).result:"";return g?w&&y(w):y(m)}},{key:"prefetchData",value:function(e,t,r,n){var o=this,a=v((0,l.parseRelativeUrl)(e).pathname);return this.promisedSsgManifest.then((function(i,c){return i.has(a)&&(c=o.getDataHref(e,t,!0,r,n))&&!document.querySelector('link[rel="'.concat(h,'"][href^="').concat(c,'"]'))&&y(c,h,"fetch").catch((function(){}))}))}},{key:"loadPage",value:function(e){var t=this;return e=v(e),new Promise((function(r,n){var o=t.pageCache[e];if(o)"error"in o?n(o.error):r(o);else{var a=function o(a){t.pageRegisterEvents.off(e,o),delete t.loadingRoutes[e],"error"in a?n(a.error):r(a)};if(t.pageRegisterEvents.on(e,a),!t.loadingRoutes[e])t.loadingRoutes[e]=!0,t.getDependencies(e).then((function(e){var t=[];return e.forEach((function(e){e.endsWith(".js")&&!document.querySelector('script[src^="'.concat(e,'"]'))&&t.push(function(e){return new Promise((function(t,r){var n=document.createElement("script");n.crossOrigin=void 0,n.src=e,n.onload=t,n.onerror=function(){return r(p(e))},document.body.appendChild(n)}))}(e)),e.endsWith(".css")&&!document.querySelector('link[rel="'.concat(m,'"][href^="').concat(e,'"]'))&&y(e,m,"fetch").catch((function(){}))})),Promise.all(t)})).catch((function(r){t.pageCache[e]={error:r},a({error:r})}))}}))}},{key:"registerPage",value:function(e,t){var r=this;var n=e===this.initialPage;("/_app"===e?Promise.resolve([]):(n?Promise.resolve(f(document.querySelectorAll("link[data-n-p]")).map((function(e){return e.getAttribute("href")}))):this.getDependencies(e).then((function(e){return e.filter((function(e){return e.endsWith(".css")}))}))).then((function(e){return Promise.all(e.map((function(e){return t=e,fetch(t).then((function(e){if(!e.ok)throw p(t);return e.text().then((function(e){return{href:t,text:e}}))}));var t}))).catch((function(e){if(n)return f(document.styleSheets).filter((function(e){return e.ownerNode&&"LINK"===e.ownerNode.tagName&&e.ownerNode.hasAttribute("data-n-p")})).map((function(e){return{href:e.ownerNode.getAttribute("href"),text:f(e.cssRules).map((function(e){return e.cssText})).join("")}}));throw e}))}))).then((function(n){return function(n){try{var o=t(),a={page:o.default||o,mod:o,styleSheets:n};r.pageCache[e]=a,r.pageRegisterEvents.emit(e,a)}catch(i){r.pageCache[e]={error:i},r.pageRegisterEvents.emit(e,{error:i})}}(n)}),(function(t){r.pageCache[e]={error:t},r.pageRegisterEvents.emit(e,{error:t})}))}},{key:"prefetch",value:function(e,t){var r,n,o=this;if((r=navigator.connection)&&(r.saveData||/2g/.test(r.effectiveType)))return Promise.resolve();if(t)n=e;else;return Promise.all(document.querySelector('link[rel="'.concat(h,'"][href^="').concat(n,'"]'))?[]:[n&&y(n,h,n.endsWith(".css")?"fetch":"script"),!t&&this.getDependencies(e).then((function(e){return Promise.all(e.map((function(e){return o.prefetch(e,!0)})))}))]).then((function(){}),(function(){}))}}]),e}();t.default=g}},[["BMP1",0,2,1]]]);