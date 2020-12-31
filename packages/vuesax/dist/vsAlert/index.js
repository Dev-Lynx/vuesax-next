/*!
  * Vuesax v4.0.1-alpha.25 🖖 (https://lusaxweb.github.io/vuesax/)
  * Forged by Luis Daniel Rovira
  * Released under the MIT License.
  * Donate: https://www.patreon.com/bePatron?c=1567892
  * © 2019, Lusaxweb. (https://lusaxweb.net)
  */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):"object"==typeof exports?exports.vsAlert=t(require("vue")):e.vsAlert=t(e.Vue)}("undefined"!=typeof self?self:this,function(n){return o={},i.m=r=[function(e,t){e.exports=n},function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return l});t=n(0);Array;function o(r){return function(e,t,n){e="function"==typeof e?e:e.constructor;e.__decorators__||(e.__decorators__=[]),"number"!=typeof n&&(n=void 0),e.__decorators__.push(function(e){return r(e,t,n)})}}var r="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function i(e,t,n){r&&(Array.isArray(e)||"function"==typeof e||void 0!==e.type||(n=Reflect.getMetadata("design:type",t,n))!==Object&&(e.type=n))}function a(n){return void 0===n&&(n={}),function(e,t){i(n,e,t),o(function(e,t){(e.props||(e.props={}))[t]=n})(e,t)}}function l(n,e){void 0===e&&(e={});var t=e.deep,r=void 0!==t&&t,e=e.immediate,i=void 0!==e&&e;return o(function(e,t){"object"!=typeof e.watch&&(e.watch=Object.create(null));e=e.watch;"object"!=typeof e[n]||Array.isArray(e[n])?void 0===e[n]&&(e[n]=[]):e[n]=[e[n]],e[n].push({handler:t,deep:r,immediate:i})})}},function(e,t){e.exports=function(n,r,e,t,i){var o={};return Object.keys(t).forEach(function(e){o[e]=t[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=e.slice().reverse().reduce(function(e,t){return t(n,r,e)||e},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(n,r,o),o=null),o}},function(e,t){e.exports=function(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){e.exports=function(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}},function(e,t){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o}),n.d(t,"d",function(){return a}),n.d(t,"e",function(){return l});function s(e){return["primary","secondary","success","danger","warning","dark","light","warn","facebook","twitter","youtube","pinterest","linkedin","snapchat","whatsapp","tumblr","reddit","spotify","amazon","medium","vimeo","skype","dribbble","slack","yahoo","twitch","discord","telegram","google-plus","messenger"].includes(e)}function u(e,t,n){n?"#comment"!==n.nodeName&&n.style.setProperty("--vs-"+e,t):document.documentElement.style.setProperty("--vs-"+e,t)}var r=function(e,t,n,r){var i,o,a=/^(rgb|rgba)/.test(t),l=/^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(t),c=/^(#)/.test(t);"dark"==t&&n&&r&&n.classList.add("vs-component-dark"),a?(i=(i=t.replace(/[rgba()]/g,"").split(","))[0]+","+i[1]+","+i[2],u(e,i,n),r&&n.classList.add("vs-change-color")):c?(i=(c=(o=(o=t).replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,r){return t+t+n+n+r+r}),(o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(o))?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null)).r+","+c.g+","+c.b,u(e,i,n),r&&n.classList.add("vs-change-color")):s(t)?(i=window.getComputedStyle(document.body).getPropertyValue("--vs-"+t),u(e,i,n),r&&n.classList.add("vs-change-color")):l&&(u(e,t,n),r&&n.classList.add("vs-change-color"))},i=function(e){var t,n,r=/^(rgb|rgba)/.test(e),i=/^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(e),o=/^(#)/.test(e);return r?t=(t=e.replace(/[rgba()]/g,"").split(","))[0]+","+t[1]+","+t[2]:o?t=(o=(n=(n=e).replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,r){return t+t+n+n+r+r}),(n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n))?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null)).r+","+o.g+","+o.b:s(e)?t=window.getComputedStyle(document.body).getPropertyValue("--vs-"+e):i&&(t=e),t},o=function(e,t){t=t||document.body;t.insertBefore(e,t.lastChild)},a=function(e,t){var n=t.getBoundingClientRect(),r=n.x,i=n.y,o=n.width,a=n.height,l=e.style,c=window.pageYOffset,n=e.clientHeight+n.y+c;c+window.innerHeight-n<30?(l.top=i+c-e.clientHeight-4+"px",l.left=r+"px",l.width=o+"px",e.classList.add("top"),t.classList.add("top")):(l.top=i+c+a-4+"px",l.left=r+"px",l.width=o+"px",e.classList.remove("top"),t.classList.remove("top"))},l=function(e,t,n){var r,i=t.getBoundingClientRect(),o=i.x,a=i.y,l=i.width,c=i.height,s=e.style,u=window.pageYOffset,t=e.clientHeight+i.y+u,i=u+window.innerHeight;o+l+10+e.getBoundingClientRect().width>window.innerWidth&&"right"==n&&(n="left",e.classList.remove("right"),e.classList.add("left")),o-10<e.getBoundingClientRect().width&&"left"==n&&(n="top",e.classList.remove("left"),e.classList.add("top")),i-t<30||"top"==n?(s.top=a+u-e.clientHeight-8+"px",(r=o+(l-e.getBoundingClientRect().width)/2)+e.getBoundingClientRect().width<window.innerWidth?0<r?s.left=r+"px":(s.left="10px",e.classList.add("notArrow")):(s.left="auto",s.right="10px",e.classList.add("notArrow"))):"bottom"==n?(s.top=a+u+c+8+"px",(r=o+(l-e.getBoundingClientRect().width)/2)+e.getBoundingClientRect().width<window.innerWidth?0<r?s.left=r+"px":(s.left="10px",e.classList.add("notArrow")):(s.left="auto",s.right="10px",e.classList.add("notArrow"))):"left"==n?(s.top=a+u+(c-e.getBoundingClientRect().height)/2+"px",s.left=o-e.getBoundingClientRect().width-8+"px"):"right"==n&&(s.top=a+u+(c-e.getBoundingClientRect().height)/2+"px",s.left=o+l+8+"px")}},function(e,t,n){"use strict";n.d(t,"a",function(){return v});var a=n(0);
/**
  * vue-class-component v8.0.0-rc.1
  * (c) 2015-present Evan You
  * @license MIT
  */
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function c(r){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach(function(e){var t,n;t=r,e=i[n=e],n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(i,e))})}return r}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function d(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(n){var r=f();return function(){var e,t=u(n);return d(this,r?(e=u(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function h(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g(e,t,n){Object.defineProperty(e,t,{get:n,enumerable:!1,configurable:!0})}function y(e,t){return e.hasOwnProperty(t)?e[t]:void 0}n=function(){function r(t,e){var n=this;i(this,r),g(this,"$props",function(){return t}),g(this,"$attrs",function(){return e.attrs}),g(this,"$slots",function(){return e.slots}),g(this,"$emit",function(){return e.emit}),Object.keys(t).forEach(function(e){Object.defineProperty(n,e,{enumerable:!1,configurable:!0,writable:!0,value:t[e]})})}var e,t,n;return e=r,n=[{key:"registerHooks",value:function(e){var t;(t=this.__h).push.apply(t,h(e))}},{key:"with",value:function(e){var n=new e,r={};Object.keys(n).forEach(function(e){var t=n[e];r[e]=null!=t?t:null});e=function(e){s(n,e);var t=p(n);function n(){return i(this,n),t.apply(this,arguments)}return n}(this);return e.__b={props:r},e}},{key:"__vccOpts",get:function(){if(this===v)return{};var r=this,e=y(r,"__c");if(e)return e;var n=c({},y(r,"__o"));r.__c=n;e=function(e){if(e=Object.getPrototypeOf(e.prototype))return e.constructor}(r);e&&(n.extends=e.__vccOpts);e=y(r,"__b");e&&(n.mixins=n.mixins||[],n.mixins.unshift(e)),n.methods=c({},n.methods),n.computed=c({},n.computed);var i=r.prototype;Object.getOwnPropertyNames(i).forEach(function(e){var t;"constructor"!==e&&(-1<r.__h.indexOf(e)?n[e]=i[e]:"function"!=typeof(t=Object.getOwnPropertyDescriptor(i,e)).value?(t.get||t.set)&&(n.computed[e]={get:t.get,set:t.set}):n.methods[e]=t.value)}),n.setup=function(e,t){var i=new r(e,t),t=Object.keys(i),o={},n=null;return t.forEach(function(e){var t,n,r;void 0===i[e]||i[e]&&i[e].__s||(o[e]=Object(a.ref)(i[e]),t=i,n=e,r=o,Object.defineProperty(t,n,{get:function(){return r[n].value},set:function(e){r[n].value=e},enumerable:!0,configurable:!0}))}),t.forEach(function(t){var e;i[t]&&i[t].__s&&((e=i[t].__s())instanceof Promise?n=(n=n||Promise.resolve(o)).then(function(){return e.then(function(e){return o[t]=Object(a.proxyRefs)(e),o})}):o[t]=Object(a.proxyRefs)(e))}),null!==n&&void 0!==n?n:o};e=y(r,"__d");e&&e.forEach(function(e){return e(n)});return["render","ssrRender","__file","__cssModules","__scopeId","__hmrId"].forEach(function(e){r[e]&&(n[e]=r[e])}),n}}],(t=null)&&o(e.prototype,t),n&&o(e,n),r}();n.__h=["data","beforeCreate","created","beforeMount","mounted","beforeUnmount","unmounted","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];var v=n},function(e,t){e.exports=function(e,t){throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.")}},function(e,t,n){"use strict";n.d(t,"a",function(){return _});var o,a,l,c,s,u,f,r=n(3),d=n.n(r),i=n(6),p=n.n(i),h=n(4),b=n.n(h),g=n(5),y=n.n(g),v=n(2),m=n.n(v),O=n(9),w=n(8),t=n(1),j=n(7),_=(r=Object(t.a)({type:String,default:null}),i=Object(t.a)({type:Boolean,default:!1}),h=Object(t.a)({type:Boolean,default:!1}),g=Object(t.a)({type:Boolean,default:!1}),v=Object(t.a)({type:Boolean,default:!1}),O=Object(t.a)({type:Boolean,default:!1}),n=Object(t.a)({type:Boolean,default:!1}),w=t=function(i){function e(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=i.call.apply(i,[this].concat(n))||this).componentColor="",e.getColor=null,d()(e,"color",o,b()(e)),d()(e,"danger",a,b()(e)),d()(e,"success",l,b()(e)),d()(e,"warn",c,b()(e)),d()(e,"dark",s,b()(e)),d()(e,"primary",u,b()(e)),d()(e,"active",f,b()(e)),e}return y()(e,i),e.prototype.mounted=function(){this.getColor=Object(j.a)(this.color)},p()(e,[{key:"isColorDark",get:function(){return"dark"===this.color||this.dark||"dark"===this.componentColor}},{key:"isColor",get:function(){return!!(this.color||this.primary||this.success||this.warn||this.danger||this.dark)}}]),e}(w.a),t.install=void 0,t.use=void 0,w=w,o=m()(w.prototype,"color",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=m()(w.prototype,"danger",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=m()(w.prototype,"success",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=m()(w.prototype,"warn",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=m()(w.prototype,"dark",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=m()(w.prototype,"primary",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=m()(w.prototype,"active",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w)},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){},,function(e,t,n){"use strict";n.d(t,"a",function(){return f});var o,r=n(3),a=n.n(r),i=n(4),l=n.n(i),c=n(5),s=n.n(c),t=n(2),r=n.n(t),i=n(9),u=n(0),c=n(8),t=n(1),i=n(12),f=(t=Object(t.a)({type:String,default:null}),c=function(i){function e(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e=i.call.apply(i,[this].concat(n))||this,a()(e,"hover",o,l()(e)),e}return s()(e,i),e.prototype.render=function(){return Object(u.h)("i",{staticClass:"vs-icon-close",class:["vs-icon-hover-"+this.hover],ref:"icon"})},e}(c.a),o=r()(c.prototype,"hover",[t],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c)},,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);n(20);var o,r=n(3),a=n.n(r),i=n(6),l=n.n(i),c=n(4),s=n.n(c),u=n(5),f=n.n(u),d=n(2),p=n.n(d),h=(n(9),n(0)),b=n(1),g=n(14),y=n(11),v=n.n(y),m=n(8);n(12);function O(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}var w,j,_,P,x,C,k,$,z,B,E,H,R,A,S,L=(_=Object(b.a)({type:Boolean,default:!1}),P=function(i){function e(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e=i.call.apply(i,[this].concat(n))||this,a()(e,"less",o,s()(e)),e}return f()(e,i),e.prototype.render=function(){return Object(h.h)("i",{staticClass:"vs-icon-plus",class:{less:this.less},ref:"icon",on:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach(function(e){v()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},this.$attrs)})},e}(m.a),o=p()(P.prototype,"less",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P),D=n(10),I=(w=Object(b.a)({type:Boolean,default:!1}),j=Object(b.a)({type:Boolean,default:!1}),r=Object(b.a)({type:Boolean,default:!1}),i=Object(b.a)({type:Boolean,default:!1}),c=Object(b.a)({type:Boolean,default:!1}),u=Object(b.a)({type:Boolean,default:!1}),d=Object(b.a)({default:!0}),y=Object(b.a)({type:Boolean,default:null}),m=Object(b.a)({type:Boolean,default:!1}),_=Object(b.a)({type:[Number,String],default:0}),P=Object(b.a)({type:[Number,String],default:0}),n=Object(b.b)("page"),b=Object(b.b)("hiddenContent"),D=function(i){function e(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e=i.call.apply(i,[this].concat(n))||this,a()(e,"solid",x,s()(e)),a()(e,"border",C,s()(e)),a()(e,"shadow",k,s()(e)),a()(e,"gradient",$,s()(e)),a()(e,"flat",z,s()(e)),a()(e,"relief",B,s()(e)),a()(e,"value",E,s()(e)),a()(e,"hiddenContent",H,s()(e)),a()(e,"closable",R,s()(e)),a()(e,"progress",A,s()(e)),a()(e,"page",S,s()(e)),e}f()(e,i);var t=e.prototype;return t.handleWatchPage=function(){var e=this,t=this.$refs.content;t.style.minHeight=t.scrollHeight+"px",this.$nextTick(function(){e.$el.style.height=e.$el.scrollHeight-1+"px"})},t.mounted=function(){var e;this.$el&&this.$refs.content&&(this.$el.style.height=this.$el.scrollHeight-1+"px",(e=this.$refs.content).style.minHeight=e.scrollHeight+"px")},t.handleHiddenContent=function(e){var t,n,r=this;this.value&&(t=this.$el,n=this.$refs.content,e?t.style.height=this.$el.scrollHeight-n.scrollHeight+"px":(t.style.height="auto",setTimeout(function(){t.style.height=r.$el.scrollHeight-1+"px"},250)))},t.beforeEnter=function(e){e.style.height=0},t.enter=function(e,t){var n=e.scrollHeight;e.style.height=n-1+"px",t()},t.leave=function(e,t){e.style.minHeight="0px",e.style.height="0px"},t.handleClickClose=function(){this.$emit("input",!this.value)},t.handleClickHidden=function(){this.$emit("update:hiddenContent",!this.hiddenContent)},t.handleClickPrevPage=function(){1<this.page&&this.$emit("update:page",Number(this.page)-1)},t.handleClickNextPage=function(){this.page<this.getTotalPages&&this.$emit("update:page",Number(this.page)+1)},t.render=function(){var e=Object(h.h)("div",{staticClass:"vs-alert__icon",ref:"icon"},[null==(l=(r=this.$slots).icon)?void 0:l.call(r)]),t=Object(h.h)("div",{staticClass:"vs-alert__content__text",ref:"text"},[null==(i=(o=this.$slots).default)?void 0:i.call(o)].concat(this.getPages)),n=Object(h.h)("transition",{on:{beforeEnter:this.beforeEnter,enter:this.enter,leave:this.leave}},[!this.hiddenContent&&Object(h.h)("div",{staticClass:"vs-alert__content",ref:"content"},[t])]),r=Object(h.h)("div",{staticClass:"vs-alert__title",class:{"vs-alert__title--clickHidden":"boolean"==typeof this.hiddenContent},on:{click:this.handleClickHidden}},[null==(l=(a=this.$slots).title)?void 0:l.call(a),!this.closable&&"boolean"==typeof this.hiddenContent&&Object(h.h)(L,{props:{less:!this.hiddenContent},on:{click:this.handleClickHidden}})]),i=Object(h.h)("button",{staticClass:"vs-alert__close",on:{click:this.handleClickClose}},[Object(h.h)(g.a,{props:{hover:"less"}})]),o=Object(h.h)("div",{staticClass:"vs-alert__pagination"},[Object(h.h)("button",{on:{click:this.handleClickPrevPage}},"<"),Object(h.h)("span",this.page+" / "+this.getTotalPages),Object(h.h)("button",{on:{click:this.handleClickNextPage}},">")]),a=Object(h.h)("div",{staticClass:"vs-alert__footer"},[null==(l=(t=this.$slots).footer)?void 0:l.call(t)]),l=Object(h.h)("div",{staticClass:"vs-alert__progress"},[Object(h.h)("div",{staticClass:"vs-alert__progress__bar",style:{width:this.progress+"%"}})]),c=Object(h.h)("div",{staticClass:"vs-alert",style:((t={})["--vs-color"]=this.color?this.getColor:"",t),class:[((t={})["vs-alert--solid"]=!!this.solid,t),((t={})["vs-alert--border"]=!!this.border,t),((t={})["vs-alert--shadow"]=!!this.shadow,t),((t={})["vs-alert--gradient"]=!!this.gradient,t),((t={})["vs-alert--flat"]=!!this.flat,t),((t={})["vs-alert--relief"]=!!this.relief,t),((t={})["vs-alert--pages"]=0<this.getPages.length,t),((t={})["vs-component--primary"]=!(this.danger||this.success||this.warn||this.dark||this.color),t),((t={})["vs-component--danger"]=!!this.danger,t),((t={})["vs-component--warn"]=!!this.warn,t),((t={})["vs-component--success"]=!!this.success,t),((t={})["vs-component--dark"]=!!this.dark,t)]},[this.$slots.icon&&e,this.$slots.title&&r,n,this.closable&&i,this.$slots.footer&&a,!!this.progress&&l,0<this.getTotalPages&&o]);return Object(h.h)("transition",{on:{beforeEnter:this.beforeEnter,enter:this.enter,leave:this.leave}},[this.value&&c])},l()(e,[{key:"getTotalPages",get:function(){return Object.keys(this.$slots).filter(function(e){return-1!==e.indexOf("page")}).length}},{key:"getPages",get:function(){var t=this,e=Object.keys(this.$slots).filter(function(e){return-1!==e.indexOf("page")}),n=[];return e.forEach(function(e){n.push(t.page==e.split("-")[1]&&t.$slots[e])}),n}}]),e}(D.a),x=p()(D.prototype,"solid",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=p()(D.prototype,"border",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=p()(D.prototype,"shadow",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),$=p()(D.prototype,"gradient",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=p()(D.prototype,"flat",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=p()(D.prototype,"relief",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),E=p()(D.prototype,"value",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),H=p()(D.prototype,"hiddenContent",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=p()(D.prototype,"closable",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=p()(D.prototype,"progress",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=p()(D.prototype,"page",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p()(D.prototype,"handleWatchPage",[n],Object.getOwnPropertyDescriptor(D.prototype,"handleWatchPage"),D.prototype),p()(D.prototype,"handleHiddenContent",[b],Object.getOwnPropertyDescriptor(D.prototype,"handleHiddenContent"),D.prototype),D);I.install=function(e){e.component("vs-alert",I)};t.default=I}],i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dist/",i(i.s=48).default;function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}var r,o});