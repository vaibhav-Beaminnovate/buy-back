(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[620],{3454:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(7663)},7663:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function a(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var s=[],u=!1,d=-1;function c(){u&&n&&(u=!1,n.length?s=n.concat(s):d=-1,s.length&&f())}function f(){if(!u){var e=l(c);u=!0;for(var t=s.length;t;){for(n=s,s=[];++d<t;)n&&n[d].run();d=-1,t=s.length}n=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];s.push(new p(e,t)),1!==s.length||u||l(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var a=r[e]={exports:{}},o=!0;try{t[e](a,a.exports,n),o=!1}finally{o&&delete r[e]}return a.exports}n.ab="//";var i=n(229);e.exports=i}()},8620:function(e,t,r){"use strict";r.d(t,{K:function(){return e8}});var n=r(5893);function i(e){let{isSelected:t,disableAnimation:r,...i}=e;return(0,n.jsx)("svg",{"aria-hidden":"true",role:"presentation",viewBox:"0 0 17 18",...i,children:(0,n.jsx)("polyline",{fill:"none",points:"1 9 7 14 15 4",stroke:"currentColor",strokeDasharray:22,strokeDashoffset:t?44:66,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,style:!r&&t?{transition:"stroke-dashoffset 250ms linear 0.2s"}:{}})})}function a(e){let{isSelected:t,disableAnimation:r,...i}=e;return(0,n.jsx)("svg",{stroke:"currentColor",strokeWidth:3,viewBox:"0 0 24 24",...i,children:(0,n.jsx)("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function o(e){let{isIndeterminate:t,...r}=e;return(0,n.jsx)(t?a:i,{...r})}var[l,s]=(0,r(6347).k)({name:"CheckboxGroupContext",strict:!1}),u=r(6733),d=r(7294),c=r(9373);function f(e={}){let{isReadOnly:t}=e,[r,n]=(0,c.z)(e.isSelected,e.defaultSelected||!1,e.onChange);return{isSelected:r,setSelected:function(e){t||n(e)},toggle:function(){t||n(!r)}}}var p=r(9488),v=r(5512),g=(0,p.tv)({slots:{base:"group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2 select-none",wrapper:["relative","inline-flex","items-center","justify-center","flex-shrink-0","overflow-hidden","before:content-['']","before:absolute","before:inset-0","before:border-solid","before:border-2","before:box-border","before:border-default","after:content-['']","after:absolute","after:inset-0","after:scale-50","after:opacity-0","after:origin-center","group-data-[selected=true]:after:scale-100","group-data-[selected=true]:after:opacity-100","group-data-[hover=true]:before:bg-default-100",...v.ID],icon:"z-10 w-4 h-3 opacity-0 group-data-[selected=true]:opacity-100",label:"relative text-foreground select-none"},variants:{color:{default:{wrapper:"after:bg-default after:text-default-foreground text-default-foreground"},primary:{wrapper:"after:bg-primary after:text-primary-foreground text-primary-foreground"},secondary:{wrapper:"after:bg-secondary after:text-secondary-foreground text-secondary-foreground"},success:{wrapper:"after:bg-success after:text-success-foreground text-success-foreground"},warning:{wrapper:"after:bg-warning after:text-warning-foreground text-warning-foreground"},danger:{wrapper:"after:bg-danger after:text-danger-foreground text-danger-foreground"}},size:{sm:{wrapper:["w-4 h-4 mr-2 rtl:ml-2 rtl:mr-[unset]","rounded-[calc(theme(borderRadius.medium)*0.5)]","before:rounded-[calc(theme(borderRadius.medium)*0.5)]","after:rounded-[calc(theme(borderRadius.medium)*0.5)]"],label:"text-small",icon:"w-3 h-2"},md:{wrapper:["w-5 h-5 mr-2 rtl:ml-2 rtl:mr-[unset]","rounded-[calc(theme(borderRadius.medium)*0.6)]","before:rounded-[calc(theme(borderRadius.medium)*0.6)]","after:rounded-[calc(theme(borderRadius.medium)*0.6)]"],label:"text-medium",icon:"w-4 h-3"},lg:{wrapper:["w-6 h-6 mr-2 rtl:ml-2 rtl:mr-[unset]","rounded-[calc(theme(borderRadius.medium)*0.7)]","before:rounded-[calc(theme(borderRadius.medium)*0.7)]","after:rounded-[calc(theme(borderRadius.medium)*0.7)]"],label:"text-large",icon:"w-5 h-4"}},radius:{none:{wrapper:"rounded-none before:rounded-none after:rounded-none"},sm:{wrapper:["rounded-[calc(theme(borderRadius.medium)*0.5)]","before:rounded-[calc(theme(borderRadius.medium)*0.5)]","after:rounded-[calc(theme(borderRadius.medium)*0.5)]"]},md:{wrapper:["rounded-[calc(theme(borderRadius.medium)*0.6)]","before:rounded-[calc(theme(borderRadius.medium)*0.6)]","after:rounded-[calc(theme(borderRadius.medium)*0.6)]"]},lg:{wrapper:["rounded-[calc(theme(borderRadius.medium)*0.7)]","before:rounded-[calc(theme(borderRadius.medium)*0.7)]","after:rounded-[calc(theme(borderRadius.medium)*0.7)]"]},full:{wrapper:"rounded-full before:rounded-full after:rounded-full"}},lineThrough:{true:{label:["inline-flex","items-center","justify-center","before:content-['']","before:absolute","before:bg-foreground","before:w-0","before:h-0.5","group-data-[selected=true]:opacity-60","group-data-[selected=true]:before:w-full"]}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},isInvalid:{true:{wrapper:"before:border-danger",label:"text-danger"}},disableAnimation:{true:{wrapper:"transition-none",icon:"transition-none",label:"transition-none"},false:{wrapper:["before:transition-colors","group-data-[pressed=true]:scale-95","transition-transform","after:transition-transform-opacity","after:!ease-linear","after:!duration-200","motion-reduce:transition-none"],icon:"transition-opacity motion-reduce:transition-none",label:"transition-colors-opacity before:transition-width motion-reduce:transition-none"}}},defaultVariants:{color:"primary",size:"md",isDisabled:!1,lineThrough:!1}});(0,p.tv)({slots:{base:"relative flex flex-col gap-2",label:"relative text-medium text-foreground-500",wrapper:"flex flex-col flex-wrap gap-2 data-[orientation=horizontal]:flex-row",description:"text-small text-foreground-400",errorMessage:"text-small text-danger"},variants:{isRequired:{true:{label:"after:content-['*'] after:text-danger after:ml-0.5"}},isInvalid:{true:{description:"text-danger"}},disableAnimation:{true:{},false:{description:"transition-colors !duration-150 motion-reduce:transition-none"}}},defaultVariants:{isInvalid:!1,isRequired:!1}});var m=r(7794),y=r(5958),b=r(8419),h=r(2459),T=r(1086),E=r(7127),w=r(262),P=r(3454),k={};function x(e,t,...r){var n;let i=t?` [${t}]`:" ",a=`[Next UI]${i}: ${e}`;if("undefined"!=typeof console&&!k[a]&&(k[a]=!0,(null==(n=null==P?void 0:P.env)?void 0:n.NODE_ENV)!=="production"))return console.warn(a,r)}var L=(...e)=>{let t=" ";for(let r of e)if("string"==typeof r&&r.length>0){t=r;break}return t},S=r(9869),M=r(9975),C=r(9786),D=r(1718);let K={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},O={...K,customError:!0,valid:!1},I={isInvalid:!1,validationDetails:K,validationErrors:[]},R=(0,d.createContext)({}),V="__formValidationState"+Date.now();function A(e){if(e[V]){let{realtimeValidation:t,displayValidation:r,updateValidation:n,resetValidation:i,commitValidation:a}=e[V];return{realtimeValidation:t,displayValidation:r,updateValidation:n,resetValidation:i,commitValidation:a}}return function(e){let{isInvalid:t,validationState:r,name:n,value:i,builtinValidation:a,validate:o,validationBehavior:l="aria"}=e;r&&(t||(t="invalid"===r));let s=void 0!==t?{isInvalid:t,validationErrors:[],validationDetails:O}:null,u=(0,d.useMemo)(()=>F(function(e,t){if("function"==typeof e){let r=e(t);if(r&&"boolean"!=typeof r)return B(r)}return[]}(o,i)),[o,i]);(null==a?void 0:a.validationDetails.valid)&&(a=null);let c=(0,d.useContext)(R),f=(0,d.useMemo)(()=>n?Array.isArray(n)?n.flatMap(e=>B(c[e])):B(c[n]):[],[c,n]),[p,v]=(0,d.useState)(c),[g,m]=(0,d.useState)(!1);c!==p&&(v(c),m(!1));let y=(0,d.useMemo)(()=>F(g?[]:f),[g,f]),b=(0,d.useRef)(I),[h,T]=(0,d.useState)(I),E=(0,d.useRef)(I),[w,P]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{if(!w)return;P(!1);let e=u||a||b.current;N(e,E.current)||(E.current=e,T(e))}),{realtimeValidation:s||y||u||a||I,displayValidation:"native"===l?s||y||h:s||y||u||a||h,updateValidation(e){"aria"!==l||N(h,e)?b.current=e:T(e)},resetValidation(){N(I,E.current)||(E.current=I,T(I)),"native"===l&&P(!1),m(!0)},commitValidation(){"native"===l&&P(!0),m(!0)}}}(e)}function B(e){return e?Array.isArray(e)?e:[e]:[]}function F(e){return e.length?{isInvalid:!0,validationErrors:e,validationDetails:O}:null}function N(e,t){return e===t||e&&t&&e.isInvalid===t.isInvalid&&e.validationErrors.length===t.validationErrors.length&&e.validationErrors.every((e,r)=>e===t.validationErrors[r])&&Object.entries(e.validationDetails).every(([e,r])=>t.validationDetails[e]===r)}function j(...e){return(...t)=>{for(let r of e)"function"==typeof r&&r(...t)}}"undefined"!=typeof window&&window.document&&window.document.createElement;let H=new Map;var U=function(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=function e(t){var r,n,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t)){var a=t.length;for(r=0;r<a;r++)t[r]&&(n=e(t[r]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n)}return i}(e))&&(n&&(n+=" "),n+=t);return n};function G(...e){let t={...e[0]};for(let r=1;r<e.length;r++){let n=e[r];for(let e in n){let r=t[e],i=n[e];"function"==typeof r&&"function"==typeof i&&"o"===e[0]&&"n"===e[1]&&e.charCodeAt(2)>=65&&90>=e.charCodeAt(2)?t[e]=j(r,i):("className"===e||"UNSAFE_className"===e)&&"string"==typeof r&&"string"==typeof i?t[e]=U(r,i):"id"===e&&r&&i?t.id=function(e,t){if(e===t)return e;let r=H.get(e);if(r)return r(t),t;let n=H.get(t);return n?(n(e),e):t}(r,i):t[e]=void 0!==i?i:r}}return t}let _=new Set(["id"]),W=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),z=new Set(["href","hrefLang","target","rel","download","ping","referrerPolicy"]),X=/^(data-.*)$/,Y="undefined"!=typeof document?d.useLayoutEffect:()=>{};function q(e){let t=(0,d.useRef)(null);return Y(()=>{t.current=e},[e]),(0,d.useCallback)((...e)=>{let r=t.current;return null==r?void 0:r(...e)},[])}let $=e=>{var t;return null!==(t=null==e?void 0:e.ownerDocument)&&void 0!==t?t:document},J=e=>e&&"window"in e&&e.window===e?e:$(e).defaultView||window,Q=new Map,Z=new Set;function ee(){if("undefined"==typeof window)return;function e(e){return"propertyName"in e}let t=r=>{if(!e(r)||!r.target)return;let n=Q.get(r.target);if(n&&(n.delete(r.propertyName),0===n.size&&(r.target.removeEventListener("transitioncancel",t),Q.delete(r.target)),0===Q.size)){for(let e of Z)e();Z.clear()}};document.body.addEventListener("transitionrun",r=>{if(!e(r)||!r.target)return;let n=Q.get(r.target);n||(n=new Set,Q.set(r.target,n),r.target.addEventListener("transitioncancel",t,{once:!0})),n.add(r.propertyName)}),document.body.addEventListener("transitionend",t)}function et(e){requestAnimationFrame(()=>{0===Q.size?e():Z.add(e)})}function er(e){if(function(){if(null==en){en=!1;try{document.createElement("div").focus({get preventScroll(){return en=!0,!0}})}catch(e){}}return en}())e.focus({preventScroll:!0});else{let t=function(e){let t=e.parentNode,r=[],n=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==n;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&r.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return n instanceof HTMLElement&&r.push({element:n,scrollTop:n.scrollTop,scrollLeft:n.scrollLeft}),r}(e);e.focus(),function(e){for(let{element:t,scrollTop:r,scrollLeft:n}of e)t.scrollTop=r,t.scrollLeft=n}(t)}}"undefined"!=typeof document&&("loading"!==document.readyState?ee():document.addEventListener("DOMContentLoaded",ee));let en=null;function ei(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some(t=>e.test(t.brand)))||e.test(window.navigator.userAgent))}function ea(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function eo(e){let t=null;return()=>(null==t&&(t=e()),t)}let el=eo(function(){return ea(/^Mac/i)}),es=eo(function(){return ea(/^iPhone/i)}),eu=eo(function(){return ea(/^iPad/i)||el()&&navigator.maxTouchPoints>1}),ed=eo(function(){return es()||eu()});eo(function(){return el()||ed()});let ec=eo(function(){return ei(/AppleWebKit/i)&&!ef()}),ef=eo(function(){return ei(/Chrome/i)}),ep=eo(function(){return ei(/Android/i)}),ev=eo(function(){return ei(/Firefox/i)});function eg(e){return 0===e.mozInputSource&&!!e.isTrusted||(ep()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}let em=null,ey=new Set,eb=new Map,eh=!1,eT=!1;function eE(e,t){for(let r of ey)r(e,t)}function ew(e){eh=!0,e.metaKey||!el()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key||(em="keyboard",eE("keyboard",e))}function eP(e){em="pointer",("mousedown"===e.type||"pointerdown"===e.type)&&(eh=!0,eE("pointer",e))}function ek(e){eg(e)&&(eh=!0,em="virtual")}function ex(e){e.target!==window&&e.target!==document&&(eh||eT||(em="virtual",eE("virtual",e)),eh=!1,eT=!1)}function eL(){eh=!1,eT=!0}function eS(e){if("undefined"==typeof window||eb.get(J(e)))return;let t=J(e),r=$(e),n=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){eh=!0,n.apply(this,arguments)},r.addEventListener("keydown",ew,!0),r.addEventListener("keyup",ew,!0),r.addEventListener("click",ek,!0),t.addEventListener("focus",ex,!0),t.addEventListener("blur",eL,!1),"undefined"!=typeof PointerEvent?(r.addEventListener("pointerdown",eP,!0),r.addEventListener("pointermove",eP,!0),r.addEventListener("pointerup",eP,!0)):(r.addEventListener("mousedown",eP,!0),r.addEventListener("mousemove",eP,!0),r.addEventListener("mouseup",eP,!0)),t.addEventListener("beforeunload",()=>{eM(e)},{once:!0}),eb.set(t,{focus:n})}let eM=(e,t)=>{let r=J(e),n=$(e);t&&n.removeEventListener("DOMContentLoaded",t),eb.has(r)&&(r.HTMLElement.prototype.focus=eb.get(r).focus,n.removeEventListener("keydown",ew,!0),n.removeEventListener("keyup",ew,!0),n.removeEventListener("click",ek,!0),r.removeEventListener("focus",ex,!0),r.removeEventListener("blur",eL,!1),"undefined"!=typeof PointerEvent?(n.removeEventListener("pointerdown",eP,!0),n.removeEventListener("pointermove",eP,!0),n.removeEventListener("pointerup",eP,!0)):(n.removeEventListener("mousedown",eP,!0),n.removeEventListener("mousemove",eP,!0),n.removeEventListener("mouseup",eP,!0)),eb.delete(r))};function eC(e,t){Y(()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref&&(e.ref.current=null)}})}"undefined"!=typeof document&&function(e){let t;let r=$(void 0);"loading"!==r.readyState?eS(void 0):(t=()=>{eS(void 0)},r.addEventListener("DOMContentLoaded",t)),()=>eM(e,t)}();class eD{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function eK(e){if(!e)return;let t=!0;return r=>{e({...r,preventDefault(){r.preventDefault()},isDefaultPrevented:()=>r.isDefaultPrevented(),stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){t=!1}}),t&&r.stopPropagation()}}let eO=d.createContext(null),eI="default",eR="",eV=new WeakMap;function eA(e){if(ed()){if("default"===eI){let t=$(e);eR=t.documentElement.style.webkitUserSelect,t.documentElement.style.webkitUserSelect="none"}eI="disabled"}else(e instanceof HTMLElement||e instanceof SVGElement)&&(eV.set(e,e.style.userSelect),e.style.userSelect="none")}function eB(e){if(ed())"disabled"===eI&&(eI="restoring",setTimeout(()=>{et(()=>{if("restoring"===eI){let t=$(e);"none"===t.documentElement.style.webkitUserSelect&&(t.documentElement.style.webkitUserSelect=eR||""),eR="",eI="default"}})},300));else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&eV.has(e)){let t=eV.get(e);"none"===e.style.userSelect&&(e.style.userSelect=t),""===e.getAttribute("style")&&e.removeAttribute("style"),eV.delete(e)}}let eF=d.createContext({register:()=>{}});eF.displayName="PressResponderContext";var eN=r(7121),ej=r(2463),eH=r(5321);function eU(e,t,r=!0){var n,i;let{metaKey:a,ctrlKey:o,altKey:l,shiftKey:s}=t;ev()&&(null===(i=window.event)||void 0===i?void 0:null===(n=i.type)||void 0===n?void 0:n.startsWith("key"))&&"_blank"===e.target&&(el()?a=!0:o=!0);let u=ec()&&el()&&!eu()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:a,ctrlKey:o,altKey:l,shiftKey:s}):new MouseEvent("click",{metaKey:a,ctrlKey:o,altKey:l,shiftKey:s,bubbles:!0,cancelable:!0});eU.isOpening=r,er(e),e.dispatchEvent(u),eU.isOpening=!1}eU.isOpening=!1;var eG=new WeakMap;class e_{continuePropagation(){(0,eH._)(this,eG,!1)}get shouldStopPropagation(){return(0,eN._)(this,eG)}constructor(e,t,r,n){var i;(0,ej._)(this,eG,{writable:!0,value:void 0}),(0,eH._)(this,eG,!0);let a=null!==(i=null==n?void 0:n.target)&&void 0!==i?i:r.currentTarget,o=null==a?void 0:a.getBoundingClientRect(),l,s=0,u,d=null;null!=r.clientX&&null!=r.clientY&&(u=r.clientX,d=r.clientY),o&&(null!=u&&null!=d?(l=u-o.left,s=d-o.top):(l=o.width/2,s=o.height/2)),this.type=e,this.pointerType=t,this.target=r.currentTarget,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.x=l,this.y=s}}let eW=Symbol("linkClicked");function ez(e){let t,r,n,i,{onPress:a,onPressChange:o,onPressStart:l,onPressEnd:s,onPressUp:u,isDisabled:c,isPressed:f,preventFocusOnPress:p,shouldCancelOnPointerExit:v,allowTextSelectionOnPress:g,ref:m,...y}=function(e){let t=(0,d.useContext)(eF);if(t){let{register:r,...n}=t;e=G(n,e),r()}return eC(t,e.ref),e}(e),[b,h]=(0,d.useState)(!1),T=(0,d.useRef)({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:E,removeAllGlobalListeners:w}=(t=(0,d.useRef)(new Map),r=(0,d.useCallback)((e,r,n,i)=>{let a=(null==i?void 0:i.once)?(...e)=>{t.current.delete(n),n(...e)}:n;t.current.set(n,{type:r,eventTarget:e,fn:a,options:i}),e.addEventListener(r,n,i)},[]),n=(0,d.useCallback)((e,r,n,i)=>{var a;let o=(null===(a=t.current.get(n))||void 0===a?void 0:a.fn)||n;e.removeEventListener(r,o,i),t.current.delete(n)},[]),i=(0,d.useCallback)(()=>{t.current.forEach((e,t)=>{n(e.eventTarget,e.type,t,e.options)})},[n]),(0,d.useEffect)(()=>i,[i]),{addGlobalListener:r,removeGlobalListener:n,removeAllGlobalListeners:i}),P=q((e,t)=>{let r=T.current;if(c||r.didFirePressStart)return!1;let n=!0;if(r.isTriggeringEvent=!0,l){let r=new e_("pressstart",t,e);l(r),n=r.shouldStopPropagation}return o&&o(!0),r.isTriggeringEvent=!1,r.didFirePressStart=!0,h(!0),n}),k=q((e,t,r=!0)=>{let n=T.current;if(!n.didFirePressStart)return!1;n.ignoreClickAfterPress=!0,n.didFirePressStart=!1,n.isTriggeringEvent=!0;let i=!0;if(s){let r=new e_("pressend",t,e);s(r),i=r.shouldStopPropagation}if(o&&o(!1),h(!1),a&&r&&!c){let r=new e_("press",t,e);a(r),i&&(i=r.shouldStopPropagation)}return n.isTriggeringEvent=!1,i}),x=q((e,t)=>{let r=T.current;if(c)return!1;if(u){r.isTriggeringEvent=!0;let n=new e_("pressup",t,e);return u(n),r.isTriggeringEvent=!1,n.shouldStopPropagation}return!0}),L=q(e=>{let t=T.current;t.isPressed&&t.target&&(t.isOverTarget&&null!=t.pointerType&&k(eJ(t.target,e),t.pointerType,!1),t.isPressed=!1,t.isOverTarget=!1,t.activePointerId=null,t.pointerType=null,w(),g||eB(t.target))}),S=q(e=>{v&&L(e)}),M=(0,d.useMemo)(()=>{let e=T.current,t={onKeyDown(t){if(eY(t.nativeEvent,t.currentTarget)&&t.currentTarget.contains(t.target)){var n;e0(t.target,t.key)&&t.preventDefault();let i=!0;if(!e.isPressed&&!t.repeat){e.target=t.currentTarget,e.isPressed=!0,i=P(t,"keyboard");let n=t.currentTarget;E($(t.currentTarget),"keyup",j(t=>{eY(t,n)&&!t.repeat&&n.contains(t.target)&&e.target&&x(eJ(e.target,t),"keyboard")},r),!0)}i&&t.stopPropagation(),t.metaKey&&el()&&(null===(n=e.metaKeyEvents)||void 0===n||n.set(t.key,t.nativeEvent))}else"Meta"===t.key&&(e.metaKeyEvents=new Map)},onClick(t){if((!t||t.currentTarget.contains(t.target))&&t&&0===t.button&&!e.isTriggeringEvent&&!eU.isOpening){let r=!0;if(c&&t.preventDefault(),!e.ignoreClickAfterPress&&!e.ignoreEmulatedMouseEvents&&!e.isPressed&&("virtual"===e.pointerType||eg(t.nativeEvent))){c||p||er(t.currentTarget);let e=P(t,"virtual"),n=x(t,"virtual"),i=k(t,"virtual");r=e&&n&&i}e.ignoreEmulatedMouseEvents=!1,e.ignoreClickAfterPress=!1,r&&t.stopPropagation()}}},r=t=>{var r,n,i;if(e.isPressed&&e.target&&eY(t,e.target)){e0(t.target,t.key)&&t.preventDefault();let r=t.target;k(eJ(e.target,t),"keyboard",e.target.contains(r)),w(),"Enter"!==t.key&&eX(e.target)&&e.target.contains(r)&&!t[eW]&&(t[eW]=!0,eU(e.target,t,!1)),e.isPressed=!1,null===(n=e.metaKeyEvents)||void 0===n||n.delete(t.key)}else if("Meta"===t.key&&(null===(r=e.metaKeyEvents)||void 0===r?void 0:r.size)){let t=e.metaKeyEvents;for(let r of(e.metaKeyEvents=void 0,t.values()))null===(i=e.target)||void 0===i||i.dispatchEvent(new KeyboardEvent("keyup",r))}};if("undefined"!=typeof PointerEvent){t.onPointerDown=t=>{var a;if(0!==t.button||!t.currentTarget.contains(t.target))return;if(a=t.nativeEvent,!ep()&&0===a.width&&0===a.height||1===a.width&&1===a.height&&0===a.pressure&&0===a.detail&&"mouse"===a.pointerType){e.pointerType="virtual";return}eZ(t.currentTarget)&&t.preventDefault(),e.pointerType=t.pointerType;let o=!0;e.isPressed||(e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=t.pointerId,e.target=t.currentTarget,c||p||er(t.currentTarget),g||eA(e.target),o=P(t,e.pointerType),E($(t.currentTarget),"pointermove",r,!1),E($(t.currentTarget),"pointerup",n,!1),E($(t.currentTarget),"pointercancel",i,!1)),o&&t.stopPropagation()},t.onMouseDown=e=>{e.currentTarget.contains(e.target)&&0===e.button&&(eZ(e.currentTarget)&&e.preventDefault(),e.stopPropagation())},t.onPointerUp=t=>{t.currentTarget.contains(t.target)&&"virtual"!==e.pointerType&&0===t.button&&eQ(t,t.currentTarget)&&x(t,e.pointerType||t.pointerType)};let r=t=>{t.pointerId===e.activePointerId&&(e.target&&eQ(t,e.target)?e.isOverTarget||null==e.pointerType||(e.isOverTarget=!0,P(eJ(e.target,t),e.pointerType)):e.target&&e.isOverTarget&&null!=e.pointerType&&(e.isOverTarget=!1,k(eJ(e.target,t),e.pointerType,!1),S(t)))},n=t=>{t.pointerId===e.activePointerId&&e.isPressed&&0===t.button&&e.target&&(eQ(t,e.target)&&null!=e.pointerType?k(eJ(e.target,t),e.pointerType):e.isOverTarget&&null!=e.pointerType&&k(eJ(e.target,t),e.pointerType,!1),e.isPressed=!1,e.isOverTarget=!1,e.activePointerId=null,e.pointerType=null,w(),g||eB(e.target))},i=e=>{L(e)};t.onDragStart=e=>{e.currentTarget.contains(e.target)&&L(e)}}else{t.onMouseDown=t=>{if(0===t.button&&t.currentTarget.contains(t.target)){if(eZ(t.currentTarget)&&t.preventDefault(),e.ignoreEmulatedMouseEvents){t.stopPropagation();return}e.isPressed=!0,e.isOverTarget=!0,e.target=t.currentTarget,e.pointerType=eg(t.nativeEvent)?"virtual":"mouse",c||p||er(t.currentTarget),P(t,e.pointerType)&&t.stopPropagation(),E($(t.currentTarget),"mouseup",r,!1)}},t.onMouseEnter=t=>{if(!t.currentTarget.contains(t.target))return;let r=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&null!=e.pointerType&&(e.isOverTarget=!0,r=P(t,e.pointerType)),r&&t.stopPropagation()},t.onMouseLeave=t=>{if(!t.currentTarget.contains(t.target))return;let r=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&null!=e.pointerType&&(e.isOverTarget=!1,r=k(t,e.pointerType,!1),S(t)),r&&t.stopPropagation()},t.onMouseUp=t=>{t.currentTarget.contains(t.target)&&!e.ignoreEmulatedMouseEvents&&0===t.button&&x(t,e.pointerType||"mouse")};let r=t=>{if(0===t.button){if(e.isPressed=!1,w(),e.ignoreEmulatedMouseEvents){e.ignoreEmulatedMouseEvents=!1;return}e.target&&eQ(t,e.target)&&null!=e.pointerType?k(eJ(e.target,t),e.pointerType):e.target&&e.isOverTarget&&null!=e.pointerType&&k(eJ(e.target,t),e.pointerType,!1),e.isOverTarget=!1}};t.onTouchStart=t=>{if(!t.currentTarget.contains(t.target))return;let r=function(e){let{targetTouches:t}=e;return t.length>0?t[0]:null}(t.nativeEvent);r&&(e.activePointerId=r.identifier,e.ignoreEmulatedMouseEvents=!0,e.isOverTarget=!0,e.isPressed=!0,e.target=t.currentTarget,e.pointerType="touch",c||p||er(t.currentTarget),g||eA(e.target),P(e$(e.target,t),e.pointerType)&&t.stopPropagation(),E(J(t.currentTarget),"scroll",n,!0))},t.onTouchMove=t=>{if(!t.currentTarget.contains(t.target))return;if(!e.isPressed){t.stopPropagation();return}let r=eq(t.nativeEvent,e.activePointerId),n=!0;r&&eQ(r,t.currentTarget)?e.isOverTarget||null==e.pointerType||(e.isOverTarget=!0,n=P(e$(e.target,t),e.pointerType)):e.isOverTarget&&null!=e.pointerType&&(e.isOverTarget=!1,n=k(e$(e.target,t),e.pointerType,!1),S(e$(e.target,t))),n&&t.stopPropagation()},t.onTouchEnd=t=>{if(!t.currentTarget.contains(t.target))return;if(!e.isPressed){t.stopPropagation();return}let r=eq(t.nativeEvent,e.activePointerId),n=!0;r&&eQ(r,t.currentTarget)&&null!=e.pointerType?(x(e$(e.target,t),e.pointerType),n=k(e$(e.target,t),e.pointerType)):e.isOverTarget&&null!=e.pointerType&&(n=k(e$(e.target,t),e.pointerType,!1)),n&&t.stopPropagation(),e.isPressed=!1,e.activePointerId=null,e.isOverTarget=!1,e.ignoreEmulatedMouseEvents=!0,e.target&&!g&&eB(e.target),w()},t.onTouchCancel=t=>{t.currentTarget.contains(t.target)&&(t.stopPropagation(),e.isPressed&&L(e$(e.target,t)))};let n=t=>{e.isPressed&&t.target.contains(e.target)&&L({currentTarget:e.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};t.onDragStart=e=>{e.currentTarget.contains(e.target)&&L(e)}}return t},[E,c,p,w,g,L,S,k,P,x]);return(0,d.useEffect)(()=>()=>{var e;g||eB(null!==(e=T.current.target)&&void 0!==e?e:void 0)},[g]),{isPressed:f||b,pressProps:G(y,M)}}function eX(e){return"A"===e.tagName&&e.hasAttribute("href")}function eY(e,t){let{key:r,code:n}=e,i=t.getAttribute("role");return("Enter"===r||" "===r||"Spacebar"===r||"Space"===n)&&!(t instanceof J(t).HTMLInputElement&&!e2(t,r)||t instanceof J(t).HTMLTextAreaElement||t.isContentEditable)&&!(("link"===i||!i&&eX(t))&&"Enter"!==r)}function eq(e,t){let r=e.changedTouches;for(let e=0;e<r.length;e++){let n=r[e];if(n.identifier===t)return n}return null}function e$(e,t){let r=0,n=0;return t.targetTouches&&1===t.targetTouches.length&&(r=t.targetTouches[0].clientX,n=t.targetTouches[0].clientY),{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey,clientX:r,clientY:n}}function eJ(e,t){let r=t.clientX,n=t.clientY;return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey,clientX:r,clientY:n}}function eQ(e,t){let r,n,i=t.getBoundingClientRect(),a=(r=0,n=0,void 0!==e.width?r=e.width/2:void 0!==e.radiusX&&(r=e.radiusX),void 0!==e.height?n=e.height/2:void 0!==e.radiusY&&(n=e.radiusY),{top:e.clientY-n,right:e.clientX+r,bottom:e.clientY+n,left:e.clientX-r});return!(i.left>a.right)&&!(a.left>i.right)&&!(i.top>a.bottom)&&!(a.top>i.bottom)}function eZ(e){return!(e instanceof HTMLElement)||!e.hasAttribute("draggable")}function e0(e,t){return e instanceof HTMLInputElement?!e2(e,t):e instanceof HTMLButtonElement?"submit"!==e.type&&"reset"!==e.type:!eX(e)}let e1=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function e2(e,t){return"checkbox"===e.type||"radio"===e.type?" "===t:e1.has(e.type)}function e5(e,t,r){let n=A({...e,value:t.isSelected}),{isInvalid:i,validationErrors:a,validationDetails:o}=n.displayValidation,{labelProps:l,inputProps:s,isSelected:u,isPressed:c,isDisabled:f,isReadOnly:p}=function(e,t,r){var n,i;let a,o,{isDisabled:l=!1,isReadOnly:s=!1,value:u,name:c,children:f,"aria-label":p,"aria-labelledby":v,validationState:g="valid",isInvalid:m}=e;null!=f||null!=p||null!=v||console.warn("If you do not provide children, you must specify an aria-label for accessibility");let{pressProps:y,isPressed:b}=ez({isDisabled:l}),{pressProps:h,isPressed:T}=ez({isDisabled:l||s,onPress(){t.toggle()}}),{focusableProps:E}=function(e,t){let{focusProps:r}=function(e){let t,r,{isDisabled:n,onFocus:i,onBlur:a,onFocusChange:o}=e,l=(0,d.useCallback)(e=>{if(e.target===e.currentTarget)return a&&a(e),o&&o(!1),!0},[a,o]),s=(t=(0,d.useRef)({isFocused:!1,observer:null}),Y(()=>{let e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}},[]),r=q(e=>{null==l||l(e)}),(0,d.useCallback)(e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){t.current.isFocused=!0;let n=e.target;n.addEventListener("focusout",e=>{t.current.isFocused=!1,n.disabled&&r(new eD("blur",e)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)},{once:!0}),t.current.observer=new MutationObserver(()=>{if(t.current.isFocused&&n.disabled){var e;null===(e=t.current.observer)||void 0===e||e.disconnect();let r=n===document.activeElement?null:document.activeElement;n.dispatchEvent(new FocusEvent("blur",{relatedTarget:r})),n.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:r}))}}),t.current.observer.observe(n,{attributes:!0,attributeFilter:["disabled"]})}},[r])),u=(0,d.useCallback)(e=>{let t=$(e.target);e.target===e.currentTarget&&t.activeElement===e.target&&(i&&i(e),o&&o(!0),s(e))},[o,i,s]);return{focusProps:{onFocus:!n&&(i||o||a)?u:void 0,onBlur:!n&&(a||o)?l:void 0}}}(e),{keyboardProps:n}={keyboardProps:e.isDisabled?{}:{onKeyDown:eK(e.onKeyDown),onKeyUp:eK(e.onKeyUp)}},i=G(r,n),a=function(e){let t=(0,d.useContext)(eO)||{};eC(t,e);let{ref:r,...n}=t;return n}(t),o=e.isDisabled?{}:a,l=(0,d.useRef)(e.autoFocus);return(0,d.useEffect)(()=>{l.current&&t.current&&function(e){let t=$(e);if("virtual"===em){let r=t.activeElement;et(()=>{t.activeElement===r&&e.isConnected&&er(e)})}else er(e)}(t.current),l.current=!1},[t]),{focusableProps:G({...i,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},o)}}(e,r),w=G(y,E),P=function(e,t={}){let{labelable:r,isLink:n,propNames:i}=t,a={};for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(_.has(t)||r&&W.has(t)||n&&z.has(t)||(null==i?void 0:i.has(t))||X.test(t))&&(a[t]=e[t]);return a}(e,{labelable:!0});return n=t.isSelected,i=t.setSelected,a=(0,d.useRef)(n),o=q(()=>{i&&i(a.current)}),(0,d.useEffect)(()=>{var e;let t=null==r?void 0:null===(e=r.current)||void 0===e?void 0:e.form;return null==t||t.addEventListener("reset",o),()=>{null==t||t.removeEventListener("reset",o)}},[r,o]),{labelProps:G(h,{onClick:e=>e.preventDefault()}),inputProps:G(P,{"aria-invalid":m||"invalid"===g||void 0,"aria-errormessage":e["aria-errormessage"],"aria-controls":e["aria-controls"],"aria-readonly":s||void 0,onChange:e=>{e.stopPropagation(),t.setSelected(e.target.checked)},disabled:l,...null==u?{}:{value:u},name:c,type:"checkbox",...w}),isSelected:t.isSelected,isPressed:b||T,isDisabled:l,isReadOnly:s,isInvalid:m||"invalid"===g}}({...e,isInvalid:i},t,r);!function(e,t,r){let{validationBehavior:n,focus:i}=e;(0,C.b)(()=>{if("native"===n&&(null==r?void 0:r.current)){var e;let n,i=t.realtimeValidation.isInvalid?t.realtimeValidation.validationErrors.join(" ")||"Invalid value.":"";r.current.setCustomValidity(i),r.current.hasAttribute("title")||(r.current.title=""),t.realtimeValidation.isInvalid||t.updateValidation({isInvalid:!(e=r.current).validity.valid,validationDetails:{badInput:(n=e.validity).badInput,customError:n.customError,patternMismatch:n.patternMismatch,rangeOverflow:n.rangeOverflow,rangeUnderflow:n.rangeUnderflow,stepMismatch:n.stepMismatch,tooLong:n.tooLong,tooShort:n.tooShort,typeMismatch:n.typeMismatch,valueMissing:n.valueMissing,valid:n.valid},validationErrors:e.validationMessage?[e.validationMessage]:[]})}});let a=(0,D.i)(()=>{t.resetValidation()}),o=(0,D.i)(e=>{var n,a;t.displayValidation.isInvalid||t.commitValidation();let o=null==r?void 0:null===(n=r.current)||void 0===n?void 0:n.form;!e.defaultPrevented&&r&&o&&function(e){for(let t=0;t<e.elements.length;t++){let r=e.elements[t];if(!r.validity.valid)return r}return null}(o)===r.current&&(i?i():null===(a=r.current)||void 0===a||a.focus(),(0,M._w)("keyboard")),e.preventDefault()}),l=(0,D.i)(()=>{t.commitValidation()});(0,d.useEffect)(()=>{let e=null==r?void 0:r.current;if(!e)return;let t=e.form;return e.addEventListener("invalid",o),e.addEventListener("change",l),null==t||t.addEventListener("reset",a),()=>{e.removeEventListener("invalid",o),e.removeEventListener("change",l),null==t||t.removeEventListener("reset",a)}},[r,o,l,a,n])}(e,n,r);let{isIndeterminate:v,isRequired:g,validationBehavior:m="aria"}=e;return(0,d.useEffect)(()=>{r.current&&(r.current.indeterminate=!!v)}),{labelProps:l,inputProps:{...s,checked:u,"aria-required":g&&"aria"===m||void 0,required:g&&"native"===m},isSelected:u,isPressed:c,isDisabled:f,isReadOnly:p,isInvalid:i,validationErrors:a,validationDetails:o}}let e6=new WeakMap;var e7=r(3387),e4=r(5607),e3=r(3699),e9=(0,e4.Gp)((e,t)=>{let{Component:r,children:i,icon:a=(0,n.jsx)(o,{}),getBaseProps:l,getWrapperProps:c,getInputProps:p,getIconProps:v,getLabelProps:P}=function(e={}){var t,r,n,i,a,o,l,c;let p=(0,u.w)(),v=s(),P=!!v,{as:k,ref:M,value:C="",children:D,icon:K,name:O,isRequired:R,isReadOnly:B=!1,autoFocus:F=!1,isSelected:N,size:j=null!=(t=null==v?void 0:v.size)?t:"md",color:H=null!=(r=null==v?void 0:v.color)?r:"primary",radius:U=null==v?void 0:v.radius,lineThrough:G=null!=(n=null==v?void 0:v.lineThrough)&&n,isDisabled:_=null!=(i=null==v?void 0:v.isDisabled)&&i,disableAnimation:W=null!=(o=null!=(a=null==v?void 0:v.disableAnimation)?a:null==p?void 0:p.disableAnimation)&&o,validationState:z,isInvalid:X=z?"invalid"===z:null!=(l=null==v?void 0:v.isInvalid)&&l,isIndeterminate:Y=!1,validationBehavior:q=null!=(c=null==v?void 0:v.validationBehavior)?c:"aria",defaultSelected:$,classNames:J,className:Q,onValueChange:Z,...ee}=e;v&&w.Ts&&(N&&x("The Checkbox.Group is being used, `isSelected` will be ignored. Use the `value` of the Checkbox.Group instead.","Checkbox"),$&&x("The Checkbox.Group is being used, `defaultSelected` will be ignored. Use the `defaultValue` of the Checkbox.Group instead.","Checkbox"));let et=(0,d.useRef)(null),er=(0,d.useRef)(null),en=e.onChange;P&&(en=(0,T.t)(()=>{v.groupState.resetValidation()},en));let ei=(0,d.useId)(),ea=(0,d.useMemo)(()=>({name:O,value:C,children:D,autoFocus:F,defaultSelected:$,validationBehavior:q,isIndeterminate:Y,isRequired:R,isInvalid:X,isSelected:N,isDisabled:_,isReadOnly:B,"aria-label":L(ee["aria-label"],D),"aria-labelledby":ee["aria-labelledby"]||ei,onChange:Z}),[C,O,ei,D,F,X,Y,_,B,N,$,q,ee["aria-label"],ee["aria-labelledby"],Z]),eo=f(ea),{inputProps:el,isSelected:es,isDisabled:eu,isReadOnly:ed,isPressed:ec}=P?function(e,t,r){var n,i;let a=f({isReadOnly:e.isReadOnly||t.isReadOnly,isSelected:t.isSelected(e.value),onChange(r){r?t.addValue(e.value):t.removeValue(e.value),e.onChange&&e.onChange(r)}}),{name:o,descriptionId:l,errorMessageId:s,validationBehavior:u}=e6.get(t);u=null!==(n=e.validationBehavior)&&void 0!==n?n:u;let{realtimeValidation:c}=A({...e,value:a.isSelected,name:void 0,validationBehavior:"aria"}),p=(0,d.useRef)(I),v=()=>{t.setInvalid(e.value,c.isInvalid?c:p.current)};(0,d.useEffect)(v);let g=t.realtimeValidation.isInvalid?t.realtimeValidation:c,m="native"===u?t.displayValidation:g,y=e5({...e,isReadOnly:e.isReadOnly||t.isReadOnly,isDisabled:e.isDisabled||t.isDisabled,name:e.name||o,isRequired:null!==(i=e.isRequired)&&void 0!==i?i:t.isRequired,validationBehavior:u,[V]:{realtimeValidation:g,displayValidation:m,resetValidation:t.resetValidation,commitValidation:t.commitValidation,updateValidation(e){p.current=e,v()}}},a,r);return{...y,inputProps:{...y.inputProps,"aria-describedby":[e["aria-describedby"],t.isInvalid?s:null,l].filter(Boolean).join(" ")||void 0}}}({...ea},v.groupState,er):e5({...ea},eo,er),ef=eu||ed,[ep,ev]=(0,d.useState)(!1),{pressProps:eg}=(0,y.r)({isDisabled:ef,onPressStart(e){"keyboard"!==e.pointerType&&ev(!0)},onPressEnd(e){"keyboard"!==e.pointerType&&ev(!1)}}),em=!ef&&(ep||ec),{hoverProps:ey,isHovered:eb}=(0,b.X)({isDisabled:el.disabled}),{focusProps:eh,isFocused:eT,isFocusVisible:eE}=(0,h.F)({autoFocus:el.autoFocus}),ew=(0,d.useMemo)(()=>g({color:H,size:j,radius:U,isInvalid:X,lineThrough:G,isDisabled:eu,disableAnimation:W}),[H,j,U,X,G,eu,W]);(0,e7.G)(()=>{if(!er.current)return;let e=!!er.current.checked;eo.setSelected(e)},[er.current]);let eP=(0,m.W)(en),ek=(0,d.useCallback)(e=>{if(ed||eu){e.preventDefault();return}null==eP||eP(e)},[ed,eu,eP]),ex=(0,S.W)(null==J?void 0:J.base,Q),eL=(0,d.useCallback)(()=>({ref:et,className:ew.base({class:ex}),"data-disabled":(0,w.PB)(eu),"data-selected":(0,w.PB)(es||Y),"data-invalid":(0,w.PB)(X),"data-hover":(0,w.PB)(eb),"data-focus":(0,w.PB)(eT),"data-pressed":(0,w.PB)(em),"data-readonly":(0,w.PB)(el.readOnly),"data-focus-visible":(0,w.PB)(eE),"data-indeterminate":(0,w.PB)(Y),...(0,E.d)(ey,eg,ee)}),[ew,ex,eu,es,Y,X,eb,eT,em,el.readOnly,eE,ey,eg,ee]),eS=(0,d.useCallback)((e={})=>({...e,"aria-hidden":!0,className:(0,S.W)(ew.wrapper({class:(0,S.W)(null==J?void 0:J.wrapper,null==e?void 0:e.className)}))}),[ew,null==J?void 0:J.wrapper]),eM=(0,d.useCallback)(()=>({ref:function(...e){return t=>{e.forEach(e=>(function(e,t){if(null!=e){if((0,w.mf)(e)){e(t);return}try{e.current=t}catch(r){throw Error(`Cannot assign value '${t}' to ref '${e}'`)}}})(e,t))}}(er,M),...(0,E.d)(el,eh),onChange:(0,T.t)(el.onChange,ek)}),[el,eh,ek]),eC=(0,d.useCallback)(()=>({id:ei,className:ew.label({class:null==J?void 0:J.label})}),[ew,null==J?void 0:J.label,eu,es,X]),eD=(0,d.useCallback)(()=>({isSelected:es,isIndeterminate:Y,disableAnimation:W,className:ew.icon({class:null==J?void 0:J.icon})}),[ew,null==J?void 0:J.icon,es,Y,W]);return{Component:k||"label",icon:K,children:D,isSelected:es,isDisabled:eu,isInvalid:X,isFocused:eT,isHovered:eb,isFocusVisible:eE,getBaseProps:eL,getWrapperProps:eS,getInputProps:eM,getLabelProps:eC,getIconProps:eD}}({...e,ref:t}),k="function"==typeof a?a(v()):(0,d.cloneElement)(a,v());return(0,n.jsxs)(r,{...l(),children:[(0,n.jsx)(e3.T,{elementType:"span",children:(0,n.jsx)("input",{...p()})}),(0,n.jsx)("span",{...c(),children:k}),i&&(0,n.jsx)("span",{...P(),children:i})]})});e9.displayName="NextUI.Checkbox";var e8=e9}}]);