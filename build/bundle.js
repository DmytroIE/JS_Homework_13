!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=26)}([function(e,t,n){"use strict";t.__esModule=!0,t.extend=l,t.indexOf=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}if(!a.test(e))return e;return e.replace(o,i)},t.isEmpty=function(e){return!e&&0!==e||!(!c(e)||0!==e.length)},t.createFrame=function(e){var t=l({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},o=/[&<>"'`=]/g,a=/[&<>"'`=]/;function i(e){return r[e]}function l(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}var u=Object.prototype.toString;t.toString=u;var s=function(e){return"function"==typeof e};s(/x/)&&(t.isFunction=s=function(e){return"function"==typeof e&&"[object Function]"===u.call(e)}),t.isFunction=s;var c=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===u.call(e)};t.isArray=c},function(e,t,n){"use strict";t.__esModule=!0;var r=["description","fileName","lineNumber","message","name","number","stack"];function o(e,t){var n=t&&t.loc,a=void 0,i=void 0;n&&(e+=" - "+(a=n.start.line)+":"+(i=n.start.column));for(var l=Error.prototype.constructor.call(this,e),u=0;u<r.length;u++)this[r[u]]=l[r[u]];Error.captureStackTrace&&Error.captureStackTrace(this,o);try{n&&(this.lineNumber=a,Object.defineProperty?Object.defineProperty(this,"column",{value:i,enumerable:!0}):this.column=i)}catch(e){}}o.prototype=new Error,t.default=o,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.HandlebarsEnvironment=s;var o=n(0),a=r(n(1)),i=n(9),l=n(17),u=r(n(19));t.VERSION="4.0.12";t.COMPILER_REVISION=7;t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};function s(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},i.registerDefaultHelpers(this),l.registerDefaultDecorators(this)}s.prototype={constructor:s,logger:u.default,log:u.default.log,registerHelper:function(e,t){if("[object Object]"===o.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple helpers");o.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===o.toString.call(e))o.extend(this.partials,e);else{if(void 0===t)throw new a.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===o.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple decorators");o.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]}};var c=u.default.log;t.log=c,t.createFrame=o.createFrame,t.logger=u.default},function(e,t,n){var r,o,a=n(4),i=n(5),l=0,u=0;e.exports=function(e,t,n){var s=t&&n||0,c=t||[],f=(e=e||{}).node||r,d=void 0!==e.clockseq?e.clockseq:o;if(null==f||null==d){var p=a();null==f&&(f=r=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==d&&(d=o=16383&(p[6]<<8|p[7]))}var h=void 0!==e.msecs?e.msecs:(new Date).getTime(),v=void 0!==e.nsecs?e.nsecs:u+1,m=h-l+(v-u)/1e4;if(m<0&&void 0===e.clockseq&&(d=d+1&16383),(m<0||h>l)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");l=h,u=v,o=d;var y=(1e4*(268435455&(h+=122192928e5))+v)%4294967296;c[s++]=y>>>24&255,c[s++]=y>>>16&255,c[s++]=y>>>8&255,c[s++]=255&y;var b=h/4294967296*1e4&268435455;c[s++]=b>>>8&255,c[s++]=255&b,c[s++]=b>>>24&15|16,c[s++]=b>>>16&255,c[s++]=d>>>8|128,c[s++]=255&d;for(var g=0;g<6;++g)c[s+g]=f[g];return t||i(c)}},function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);e.exports=function(){return n(r),r}}else{var o=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),o[t]=e>>>((3&t)<<3)&255;return o}}},function(e,t){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);e.exports=function(e,t){var r=t||0,o=n;return[o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]]].join("")}},function(e,t,n){var r=n(7);e.exports=(r.default||r).template({1:function(e,t,n,r,o){return" record--absent "},compiler:[7,">= 4.0.0"],main:function(e,t,n,r,o){var a,i,l=null!=t?t:e.nullContext||{},u=n.helperMissing,s="function",c=e.escapeExpression;return'<li class="record urlinfo__item '+(null!=(a=n.unless.call(l,null!=t?t.index:t,{name:"unless",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o}))?a:"")+'" data-uuid='+c(typeof(i=null!=(i=n.uuid||(null!=t?t.uuid:t))?i:u)===s?i.call(l,{name:"uuid",hash:{},data:o}):i)+'>\r\n  <p class = "record__title">'+c(typeof(i=null!=(i=n.title||(null!=t?t.title:t))?i:u)===s?i.call(l,{name:"title",hash:{},data:o}):i)+'</p>\r\n  <a class = "record__url" href = "'+c(typeof(i=null!=(i=n.url||(null!=t?t.url:t))?i:u)===s?i.call(l,{name:"url",hash:{},data:o}):i)+'">'+c(typeof(i=null!=(i=n.url||(null!=t?t.url:t))?i:u)===s?i.call(l,{name:"url",hash:{},data:o}):i)+'</a>\r\n  <p class = "record__descr">'+c(typeof(i=null!=(i=n.description||(null!=t?t.description:t))?i:u)===s?i.call(l,{name:"description",hash:{},data:o}):i)+'</p>\r\n  <div class = "record__img-cont"><img src = "'+c(typeof(i=null!=(i=n.image||(null!=t?t.image:t))?i:u)===s?i.call(l,{name:"image",hash:{},data:o}):i)+'"></div>\r\n  <button class = "record__del-button">Удалить</button>\r\n</li>'},useData:!0})},function(e,t,n){e.exports=n(8).default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.__esModule=!0;var a=o(n(2)),i=r(n(20)),l=r(n(1)),u=o(n(0)),s=o(n(21)),c=r(n(22));function f(){var e=new a.HandlebarsEnvironment;return u.extend(e,a),e.SafeString=i.default,e.Exception=l.default,e.Utils=u,e.escapeExpression=u.escapeExpression,e.VM=s,e.template=function(t){return s.template(t,e)},e}var d=f();d.create=f,c.default(d),d.default=d,t.default=d,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.registerDefaultHelpers=function(e){o.default(e),a.default(e),i.default(e),l.default(e),u.default(e),s.default(e),c.default(e)};var o=r(n(10)),a=r(n(11)),i=r(n(12)),l=r(n(13)),u=r(n(14)),s=r(n(15)),c=r(n(16))},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerHelper("blockHelperMissing",function(t,n){var o=n.inverse,a=n.fn;if(!0===t)return a(this);if(!1===t||null==t)return o(this);if(r.isArray(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):o(this);if(n.data&&n.ids){var i=r.createFrame(n.data);i.contextPath=r.appendContextPath(n.data.contextPath,n.name),n={data:i}}return a(t,n)})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n(1));t.default=function(e){e.registerHelper("each",function(e,t){if(!t)throw new o.default("Must pass iterator to #each");var n=t.fn,a=t.inverse,i=0,l="",u=void 0,s=void 0;function c(t,o,a){u&&(u.key=t,u.index=o,u.first=0===o,u.last=!!a,s&&(u.contextPath=s+t)),l+=n(e[t],{data:u,blockParams:r.blockParams([e[t],t],[s+t,null])})}if(t.data&&t.ids&&(s=r.appendContextPath(t.data.contextPath,t.ids[0])+"."),r.isFunction(e)&&(e=e.call(this)),t.data&&(u=r.createFrame(t.data)),e&&"object"==typeof e)if(r.isArray(e))for(var f=e.length;i<f;i++)i in e&&c(i,i,i===e.length-1);else{var d=void 0;for(var p in e)e.hasOwnProperty(p)&&(void 0!==d&&c(d,i-1),d=p,i++);void 0!==d&&c(d,i-1,!0)}return 0===i&&(l=a(this)),l})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1));t.default=function(e){e.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new r.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerHelper("if",function(e,t){return r.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||r.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,n){return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",function(){for(var t=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)t.push(arguments[r]);var o=1;null!=n.hash.level?o=n.hash.level:n.data&&null!=n.data.level&&(o=n.data.level),t[0]=o,e.log.apply(e,t)})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",function(e,t){return e&&e[t]})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerHelper("with",function(e,t){r.isFunction(e)&&(e=e.call(this));var n=t.fn;if(r.isEmpty(e))return t.inverse(this);var o=t.data;return t.data&&t.ids&&((o=r.createFrame(t.data)).contextPath=r.appendContextPath(t.data.contextPath,t.ids[0])),n(e,{data:o,blockParams:r.blockParams([e],[o&&o.contextPath])})})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.registerDefaultDecorators=function(e){r.default(e)};var r=function(e){return e&&e.__esModule?e:{default:e}}(n(18))},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerDecorator("inline",function(e,t,n,o){var a=e;return t.partials||(t.partials={},a=function(o,a){var i=n.partials;n.partials=r.extend({},i,t.partials);var l=e(o,a);return n.partials=i,l}),t.partials[o.args[0]]=o.fn,a})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=r.indexOf(o.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=o.lookupLevel(e),"undefined"!=typeof console&&o.lookupLevel(o.level)<=e){var t=o.methodMap[e];console[t]||(t="log");for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];console[t].apply(console,r)}}};t.default=o,e.exports=t.default},function(e,t,n){"use strict";function r(e){this.string=e}t.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},t.default=r,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,n=a.COMPILER_REVISION;if(t!==n){if(t<n){var r=a.REVISION_CHANGES[n],i=a.REVISION_CHANGES[t];throw new o.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+i+").")}throw new o.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}},t.template=function(e,t){if(!t)throw new o.default("No environment passed to template");if(!e||!e.main)throw new o.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var n={strict:function(e,t){if(!(t in e))throw new o.default('"'+t+'" not defined in '+e);return e[t]},lookup:function(e,t){for(var n=e.length,r=0;r<n;r++)if(e[r]&&null!=e[r][t])return e[r][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:r.escapeExpression,invokePartial:function(n,a,i){i.hash&&(a=r.extend({},a,i.hash),i.ids&&(i.ids[0]=!0));n=t.VM.resolvePartial.call(this,n,a,i);var l=t.VM.invokePartial.call(this,n,a,i);null==l&&t.compile&&(i.partials[i.name]=t.compile(n,e.compilerOptions,t),l=i.partials[i.name](a,i));if(null!=l){if(i.indent){for(var u=l.split("\n"),s=0,c=u.length;s<c&&(u[s]||s+1!==c);s++)u[s]=i.indent+u[s];l=u.join("\n")}return l}throw new o.default("The partial "+i.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,o){var a=this.programs[e],l=this.fn(e);return t||o||r||n?a=i(this,e,l,t,n,r,o):a||(a=this.programs[e]=i(this,e,l)),a},data:function(e,t){for(;e&&t--;)e=e._parent;return e},merge:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=r.extend({},t,e)),n},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function l(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=r.data;l._setup(r),!r.partial&&e.useData&&(o=function(e,t){t&&"root"in t||((t=t?a.createFrame(t):{}).root=e);return t}(t,o));var i=void 0,s=e.useBlockParams?[]:void 0;function c(t){return""+e.main(n,t,n.helpers,n.partials,o,s,i)}return e.useDepths&&(i=r.depths?t!=r.depths[0]?[t].concat(r.depths):r.depths:[t]),(c=u(e.main,c,n,r.depths||[],o,s))(t,r)}return l.isTop=!0,l._setup=function(r){r.partial?(n.helpers=r.helpers,n.partials=r.partials,n.decorators=r.decorators):(n.helpers=n.merge(r.helpers,t.helpers),e.usePartial&&(n.partials=n.merge(r.partials,t.partials)),(e.usePartial||e.useDecorators)&&(n.decorators=n.merge(r.decorators,t.decorators)))},l._child=function(t,r,a,l){if(e.useBlockParams&&!a)throw new o.default("must pass block params");if(e.useDepths&&!l)throw new o.default("must pass parent depths");return i(n,t,e[t],r,0,a,l)},l},t.wrapProgram=i,t.resolvePartial=function(e,t,n){e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return e},t.invokePartial=function(e,t,n){var i=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var u=void 0;n.fn&&n.fn!==l&&function(){n.data=a.createFrame(n.data);var e=n.fn;u=n.data["partial-block"]=function(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=a.createFrame(n.data),n.data["partial-block"]=i,e(t,n)},e.partials&&(n.partials=r.extend({},n.partials,e.partials))}();void 0===e&&u&&(e=u);if(void 0===e)throw new o.default("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)},t.noop=l;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),o=function(e){return e&&e.__esModule?e:{default:e}}(n(1)),a=n(2);function i(e,t,n,r,o,a,i){function l(t){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],l=i;return!i||t==i[0]||t===e.nullContext&&null===i[0]||(l=[t].concat(i)),n(e,t,e.helpers,e.partials,o.data||r,a&&[o.blockParams].concat(a),l)}return(l=u(n,l,e,i,r,a)).program=t,l.depth=i?i.length:0,l.blockParams=o||0,l}function l(){return""}function u(e,t,n,o,a,i){if(e.decorator){var l={};t=e.decorator(t,l,n,o&&o[0],a,i,o),r.extend(t,l)}return t}},function(e,t,n){"use strict";(function(n){t.__esModule=!0,t.default=function(e){var t=void 0!==n?n:window,r=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=r),e}},e.exports=t.default}).call(this,n(23))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){},,function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._eventsList={}}return function(e,t,n){t&&r(e.prototype,t),n&&r(e,n)}(e,[{key:"attachCallback",value:function(e,t){this._eventsList[e]||(this._eventsList[e]=[]),this._eventsList[e].push(t)}},{key:"detachCallback",value:function(e,t){this._eventsList[e]&&(this._eventsList[e]=this._eventsList[e].filter(function(e){return e!==t}))}},{key:"emitEvent",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this._eventsList[e]&&this._eventsList[e].forEach(function(e){return e.apply(void 0,n)})}}]),e}();function a(e){try{var t=window[e],n="__storage_test__";return t.setItem(n,n),t.removeItem(n),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&0!==t.length}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=n(3),p=function(e){function t(){var e;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=function(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?f(e):t}(this,s(t).call(this)))._listOfURLs=[],e._theLargestIndexOfLinks=0,e._keyPrefix="URLapp",e._accessKey="5bb920a205cea06f38e7909709a72b521a4a9d1c05841",a("localStorage"))for(var n=0;n<localStorage.length;n++)if(localStorage.key(n).includes(e._keyPrefix)){var r=JSON.parse(localStorage.getItem(localStorage.key(n)));e._listOfURLs.push(r),e._theLargestIndexOfLinks=Math.max(e._theLargestIndexOfLinks,r.index)}return e._listOfURLs.sort(function(e,t){return t.index-e.index}),window.addEventListener("storage",e.handleManualLsClear.bind(f(f(e)))),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,o),function(e,t,n){t&&u(e.prototype,t),n&&u(e,n)}(t,[{key:"deleteItem",value:function(e){this._listOfURLs=this._listOfURLs.filter(function(t){return t.uuid!==e}),a("localStorage")&&localStorage.removeItem(e),this.emitEvent("changed",this._listOfURLs)}},{key:"requestItem",value:function(e){var t,n=this;/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g.test(e)?(this.emitEvent("request"),t=window.fetch("https://api.linkpreview.net/?key=".concat(this._accessKey,"&q=").concat(e))):t=new Promise(function(e,t){var n=new Error("Invalid URL");n.code=-1,t(n)}),t.then(function(e){if(e.ok)return e.json();var t=new Error;throw t.code=e.status,t}).then(function(e){if(n._listOfURLs.map(function(e){return e.url}).includes(e.url)){var t=new Error("URL is already in the list");throw t.code=-1,t}var r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){l(e,t,n[t])})}return e}({},e);r.uuid=n._keyPrefix+d(),n._listOfURLs.unshift(r),a("localStorage")&&(n._theLargestIndexOfLinks+=1,r.index=n._theLargestIndexOfLinks,localStorage.setItem(r.uuid,JSON.stringify(r))),n.emitEvent("changed",n._listOfURLs)}).catch(function(e){n.emitEvent("error",function(e){if(e.code)switch(e.code){case-1:return e.message;case 424:return"URL is not found or doesn't exist in the database";case 429:return"Too many requests";case 502:return"Server error";default:return"Error with code ".concat(e.code," has been occured")}return"Error ".concat(e.message," has been occured")}(e))})}},{key:"forcedRefresh",value:function(){this.emitEvent("changed",this._listOfURLs)}},{key:"handleManualLsClear",value:function(e){for(var t=[],n=0;n<localStorage.length;n++)localStorage.key(n).includes(this._keyPrefix)&&t.push(localStorage.key(n));this._listOfURLs.forEach(function(e){t.find(function(t){return t===e.uuid})||delete e.index}),this.emitEvent("changed",this._listOfURLs)}}]),t}();function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var g=n(6),_=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?b(e):t}(this,m(t).call(this))).form=document.getElementById("urlinfo-form"),n.list=document.getElementById("url-list"),n.errModal=document.getElementById("err-modal"),n.spinner=document.getElementById("spinner"),n.form.addEventListener("submit",n.handleRequest.bind(b(b(n)))),n.list.addEventListener("click",n.handleDelete.bind(b(b(n)))),n.errModal.querySelector(".err-modal__cls-button").addEventListener("click",function(e){e.preventDefault(),n.hideErrModal()}),n.model=e,n.model.attachCallback("request",n.showSpinner.bind(b(b(n)))),n.model.attachCallback("changed",n.render.bind(b(b(n)))),n.model.attachCallback("error",n.showErrModal.bind(b(b(n)))),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,o),function(e,t,n){t&&v(e.prototype,t),n&&v(e,n)}(t,[{key:"handleDelete",value:function(e){"BUTTON"===e.target.tagName&&this.emitEvent("delete",e.target.parentElement.dataset.uuid)}},{key:"handleRequest",value:function(e){e.preventDefault();var t=this.form.querySelector("#urlinfo__input").value;this.form.reset(),this.emitEvent("request",t)}},{key:"markItemAsAbsentInLS",value:function(e){this.list.querySelector("li[data-uuid=".concat(e,"]")).classList.add("record--absent")}},{key:"render",value:function(e){if(this.hideSpinner(),e.length>0){var t=e.reduce(function(e,t){return e+g(t)},"");this.list.innerHTML=t}else this.list.innerHTML='<li class="urlinfo__default-text">Your bookmarks will be added here...</li>'}},{key:"showErrModal",value:function(e){this.hideSpinner(),this.errModal.querySelector(".err-modal__text").textContent=e,this.errModal.classList.remove("err-modal--hidden")}},{key:"hideErrModal",value:function(){this.errModal.classList.add("err-modal--hidden")}},{key:"showSpinner",value:function(){this.spinner.classList.add("spinner--shown")}},{key:"hideSpinner",value:function(){this.spinner.classList.remove("spinner--shown")}}]),t}();function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._model=t,this._view=n,this._view.attachCallback("delete",this.deleteItem.bind(this)),this._view.attachCallback("request",this.requestItem.bind(this)),this._model.forcedRefresh()}return function(e,t,n){t&&w(e.prototype,t),n&&w(e,n)}(e,[{key:"deleteItem",value:function(e){this._model.deleteItem(e)}},{key:"requestItem",value:function(e){this._model.requestItem(e)}}]),e}(),O=(n(24),new p);new x(O,new _(O))}]);