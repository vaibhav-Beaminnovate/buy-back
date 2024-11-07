"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[242],{1044:function(e,t,n){let r;n.d(t,{J:function(){return o}});let i=Symbol.for("react-aria.i18n.locale"),s=Symbol.for("react-aria.i18n.strings");class o{getStringForLocale(e,t){let n=this.getStringsForLocale(t)[e];if(!n)throw Error(`Could not find intl message ${e} in ${t} locale`);return n}getStringsForLocale(e){let t=this.strings[e];return t||(t=function(e,t,n="en-US"){if(t[e])return t[e];let r=Intl.Locale?new Intl.Locale(e).language:e.split("-")[0];if(t[r])return t[r];for(let e in t)if(e.startsWith(r+"-"))return t[e];return t[n]}(e,this.strings,this.defaultLocale),this.strings[e]=t),t}static getGlobalDictionaryForPackage(e){if("undefined"==typeof window)return null;let t=window[i];if(void 0===r){let e=window[s];if(!e)return null;for(let n in r={},e)r[n]=new o({[t]:e[n]},t)}let n=null==r?void 0:r[e];if(!n)throw Error(`Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);return n}constructor(e,t="en-US"){this.strings=Object.fromEntries(Object.entries(e).filter(([,e])=>e)),this.defaultLocale=t}}},1839:function(e,t,n){n.d(t,{E:function(){return s}});let r=new Map,i=new Map;class s{format(e,t){let n=this.strings.getStringForLocale(e,this.locale);return"function"==typeof n?n(t,this):n}plural(e,t,n="cardinal"){let i=t["="+e];if(i)return"function"==typeof i?i():i;let s=this.locale+":"+n,o=r.get(s);return o||(o=new Intl.PluralRules(this.locale,{type:n}),r.set(s,o)),"function"==typeof(i=t[o.select(e)]||t.other)?i():i}number(e){let t=i.get(this.locale);return t||(t=new Intl.NumberFormat(this.locale),i.set(this.locale,t)),t.format(e)}select(e,t){let n=e[t]||e.other;return"function"==typeof n?n():n}constructor(e,t){this.locale=e,this.strings=t}}},7740:function(e,t,n){n.d(t,{k:function(){return d}});var r=n(8237),i=n(7294),s=n(5607),o=n(3295),l=n(9869),a=n(5893),u=(0,s.Gp)((e,t)=>{let{as:n,children:s,className:u,...d}=e,{slots:c,classNames:m,headerId:p,setHeaderMounted:f}=(0,r.v)(),v=(0,o.gy)(t);return(0,i.useEffect)(()=>(f(!0),()=>f(!1)),[f]),(0,a.jsx)(n||"header",{ref:v,className:c.header({class:(0,l.W)(null==m?void 0:m.header,u)}),id:p,...d,children:s})});u.displayName="NextUI.ModalHeader";var d=u},8237:function(e,t,n){n.d(t,{D:function(){return r},v:function(){return i}});var[r,i]=(0,n(6347).k)({name:"ModalContext",errorMessage:"useModalContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Modal />`"})},6597:function(e,t,n){n.d(t,{I:function(){return d}});var r=n(8237),i=n(7294),s=n(5607),o=n(3295),l=n(9869),a=n(5893),u=(0,s.Gp)((e,t)=>{let{as:n,children:s,className:u,...d}=e,{slots:c,classNames:m,bodyId:p,setBodyMounted:f}=(0,r.v)(),v=(0,o.gy)(t);return(0,i.useEffect)(()=>(f(!0),()=>f(!1)),[f]),(0,a.jsx)(n||"div",{ref:v,className:c.body({class:(0,l.W)(null==m?void 0:m.body,u)}),id:p,...d,children:s})});u.displayName="NextUI.ModalBody";var d=u},199:function(e,t,n){n.d(t,{A:function(){return P}});var r=n(29),i={enter:{scale:"var(--scale-enter)",y:"var(--slide-enter)",opacity:1,transition:{scale:{duration:.4,ease:r.Lj.ease},opacity:{duration:.4,ease:r.Lj.ease},y:{type:"spring",bounce:0,duration:.6}}},exit:{scale:"var(--scale-exit)",y:"var(--slide-exit)",opacity:0,transition:{duration:.3,ease:r.Lj.ease}}},s=n(8237),o=n(7294),l=n(5607),a={};a={"ar-AE":{dismiss:`\u{62A}\u{62C}\u{627}\u{647}\u{644}`},"bg-BG":{dismiss:`\u{41E}\u{442}\u{445}\u{432}\u{44A}\u{440}\u{43B}\u{44F}\u{43D}\u{435}`},"cs-CZ":{dismiss:"Odstranit"},"da-DK":{dismiss:"Luk"},"de-DE":{dismiss:`Schlie\xdfen`},"el-GR":{dismiss:`\u{391}\u{3C0}\u{3CC}\u{3C1}\u{3C1}\u{3B9}\u{3C8}\u{3B7}`},"en-US":{dismiss:"Dismiss"},"es-ES":{dismiss:"Descartar"},"et-EE":{dismiss:`L\xf5peta`},"fi-FI":{dismiss:`Hylk\xe4\xe4`},"fr-FR":{dismiss:"Rejeter"},"he-IL":{dismiss:`\u{5D4}\u{5EA}\u{5E2}\u{5DC}\u{5DD}`},"hr-HR":{dismiss:"Odbaci"},"hu-HU":{dismiss:`Elutas\xedt\xe1s`},"it-IT":{dismiss:"Ignora"},"ja-JP":{dismiss:`\u{9589}\u{3058}\u{308B}`},"ko-KR":{dismiss:`\u{BB34}\u{C2DC}`},"lt-LT":{dismiss:"Atmesti"},"lv-LV":{dismiss:`Ner\u{101}d\u{12B}t`},"nb-NO":{dismiss:"Lukk"},"nl-NL":{dismiss:"Negeren"},"pl-PL":{dismiss:"Zignoruj"},"pt-BR":{dismiss:"Descartar"},"pt-PT":{dismiss:"Dispensar"},"ro-RO":{dismiss:"Revocare"},"ru-RU":{dismiss:`\u{41F}\u{440}\u{43E}\u{43F}\u{443}\u{441}\u{442}\u{438}\u{442}\u{44C}`},"sk-SK":{dismiss:`Zru\u{161}i\u{165}`},"sl-SI":{dismiss:"Opusti"},"sr-SP":{dismiss:"Odbaci"},"sv-SE":{dismiss:"Avvisa"},"tr-TR":{dismiss:"Kapat"},"uk-UA":{dismiss:`\u{421}\u{43A}\u{430}\u{441}\u{443}\u{432}\u{430}\u{442}\u{438}`},"zh-CN":{dismiss:`\u{53D6}\u{6D88}`},"zh-TW":{dismiss:`\u{95DC}\u{9589}`}};var u=n(9188),d=n(4392),c=n(3699);function m(e){var t;let{onDismiss:n,...r}=e,i=function(e,t){let{id:n,"aria-label":r,"aria-labelledby":i}=e;return n=(0,u.Me)(n),i&&r?i=[...new Set([n,...i.trim().split(/\s+/)])].join(" "):i&&(i=i.trim().split(/\s+/).join(" ")),r||i||!t||(r=t),{id:n,"aria-label":r,"aria-labelledby":i}}(r,(0,d.q)((t=a)&&t.__esModule?t.default:t,"@react-aria/overlays").format("dismiss"));return o.createElement(c.T,null,o.createElement("button",{...i,tabIndex:-1,onClick:()=>{n&&n()},style:{width:1,height:1}}))}var p=n(5893),f=e=>{let{isSelected:t,isIndeterminate:n,disableAnimation:r,...i}=e;return(0,p.jsx)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",width:"1em",...i,children:(0,p.jsx)("path",{d:"M18 6L6 18M6 6l12 12"})})},v=n(8522),h=n(5435),b=n(9968),g=n(3136),w=n(6590),x=n(5299),E=n(7385);let y="undefined"!=typeof document&&window.visualViewport;function C(){return{width:y&&(null==y?void 0:y.width)||window.innerWidth,height:y&&(null==y?void 0:y.height)||window.innerHeight}}var L=n(7127),k=n(1086),D=(0,l.Gp)((e,t)=>{let{as:n,children:l,role:a="dialog",...d}=e,{Component:c,domRef:D,slots:P,classNames:O,motionProps:T,backdrop:S,closeButton:N,hideCloseButton:M,disableAnimation:j,getDialogProps:B,getBackdropProps:I,getCloseButtonProps:F,onClose:A}=(0,s.v)(),R=function(){let e=(0,E.Av)(),[t,n]=(0,o.useState)(()=>e?{width:0,height:0}:C());return(0,o.useEffect)(()=>{let e=()=>{n(e=>{let t=C();return t.width===e.width&&t.height===e.height?e:t})};return y?y.addEventListener("resize",e):window.addEventListener("resize",e),()=>{y?y.removeEventListener("resize",e):window.removeEventListener("resize",e)}},[]),t}(),{dialogProps:W}=function(e,t){let{role:n="dialog"}=e,r=(0,u.mp)();r=e["aria-label"]?void 0:r;let i=(0,o.useRef)(!1);return(0,o.useEffect)(()=>{if(t.current&&!t.current.contains(document.activeElement)){(0,w.e)(t.current);let e=setTimeout(()=>{document.activeElement===t.current&&(i.current=!0,t.current&&(t.current.blur(),(0,w.e)(t.current)),i.current=!1)},500);return()=>{clearTimeout(e)}}},[t]),(0,x.Bq)(),{dialogProps:{...(0,g.z)(e,{labelable:!0}),role:n,tabIndex:-1,"aria-labelledby":e["aria-labelledby"]||r,onBlur:e=>{i.current&&e.stopPropagation()}},titleProps:{id:r}}}({role:a},D),H=(0,o.isValidElement)(N)?(0,o.cloneElement)(N,F()):(0,p.jsx)("button",{...F(),children:(0,p.jsx)(f,{})}),z=(0,o.useCallback)(e=>{"Tab"===e.key&&e.nativeEvent.isComposing&&(e.stopPropagation(),e.preventDefault())},[]),q=B((0,L.d)(W,d)),_=(0,p.jsxs)(n||c||"div",{...q,onKeyDown:(0,k.t)(q.onKeyDown,z),children:[(0,p.jsx)(m,{onDismiss:A}),!M&&H,"function"==typeof l?l(A):l,(0,p.jsx)(m,{onDismiss:A})]}),G=(0,o.useMemo)(()=>"transparent"===S?null:j?(0,p.jsx)("div",{...I()}):(0,p.jsx)(v.X,{features:h.H,children:(0,p.jsx)(b.m.div,{animate:"enter",exit:"exit",initial:"exit",variants:r.y7.fade,...I()})}),[S,j,I]),K={"--visual-viewport-height":R.height+"px"},U=j?(0,p.jsx)("div",{className:P.wrapper({class:null==O?void 0:O.wrapper}),"data-slot":"wrapper",style:K,children:_}):(0,p.jsx)(v.X,{features:h.H,children:(0,p.jsx)(b.m.div,{animate:"enter",className:P.wrapper({class:null==O?void 0:O.wrapper}),"data-slot":"wrapper",exit:"exit",initial:"exit",variants:i,...T,style:K,children:_})});return(0,p.jsxs)("div",{tabIndex:-1,children:[G,U]})});D.displayName="NextUI.ModalContent";var P=D},1680:function(e,t,n){let r;n.d(t,{R:function(){return _}});var i=n(7873),s=n(7294),o=n(1718),l=n(8837);function a(e,t){if(e.button>0)return!1;if(e.target){let t=e.target.ownerDocument;if(!t||!t.documentElement.contains(e.target)||e.target.closest("[data-react-aria-top-layer]"))return!1}return t.current&&!t.current.contains(e.target)}var u=n(4971);let d=[];var c=n(9786),m=n(8806),p=n(1086),f=n(6791);function v(e,t){let n=e;for((0,f.a)(n,t)&&(n=n.parentElement);n&&!(0,f.a)(n,t);)n=n.parentElement;return n||document.scrollingElement||document.documentElement}let h="undefined"!=typeof document&&window.visualViewport,b=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]),g=0;function w(e,t,n){let r=e.style[t];return e.style[t]=n,()=>{e.style[t]=r}}function x(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}function E(e){let t=document.scrollingElement||document.documentElement;for(;e&&e!==t;){let t=v(e);if(t!==document.documentElement&&t!==document.body&&t!==e){let n=t.getBoundingClientRect().top,r=e.getBoundingClientRect().top;r>n+e.clientHeight&&(t.scrollTop+=r-n)}e=t.parentElement}}function y(e){return e instanceof HTMLInputElement&&!b.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}var C=n(5299);let L=new WeakMap,k=[];var D=n(7127),P=n(9488),O=n(5512),T=(0,P.tv)({slots:{wrapper:["flex","w-screen","h-[100dvh]","fixed","inset-0","z-50","overflow-x-auto","justify-center","h-[--visual-viewport-height]"],base:["flex","flex-col","relative","bg-white","z-50","w-full","box-border","bg-content1","outline-none","mx-1","my-1","sm:mx-6","sm:my-16"],backdrop:"z-50",header:"flex py-4 px-6 flex-initial text-large font-semibold",body:"flex flex-1 flex-col gap-3 px-6 py-2",footer:"flex flex-row gap-2 px-6 py-4 justify-end",closeButton:["absolute","appearance-none","outline-none","select-none","top-1","right-1","rtl:left-1","rtl:right-[unset]","p-2","text-foreground-500","rounded-full","hover:bg-default-100","active:bg-default-200","tap-highlight-transparent",...O.Dh]},variants:{size:{xs:{base:"max-w-xs"},sm:{base:"max-w-sm"},md:{base:"max-w-md"},lg:{base:"max-w-lg"},xl:{base:"max-w-xl"},"2xl":{base:"max-w-2xl"},"3xl":{base:"max-w-3xl"},"4xl":{base:"max-w-4xl"},"5xl":{base:"max-w-5xl"},full:{base:"my-0 mx-0 sm:mx-0 sm:my-0 max-w-full h-[100dvh] min-h-[100dvh] !rounded-none"}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"}},placement:{auto:{wrapper:"items-end sm:items-center"},center:{wrapper:"items-center sm:items-center"},top:{wrapper:"items-start sm:items-start"},"top-center":{wrapper:"items-start sm:items-center"},bottom:{wrapper:"items-end sm:items-end"},"bottom-center":{wrapper:"items-end sm:items-center"}},shadow:{sm:{base:"shadow-small"},md:{base:"shadow-medium"},lg:{base:"shadow-large"}},backdrop:{transparent:{backdrop:"hidden"},opaque:{backdrop:"bg-overlay/50 backdrop-opacity-disabled"},blur:{backdrop:"backdrop-blur-md backdrop-saturate-150 bg-overlay/30"}},scrollBehavior:{normal:{base:"overflow-y-hidden"},inside:{base:"max-h-[calc(100%_-_8rem)]",body:"overflow-y-auto"},outside:{wrapper:"items-start sm:items-start overflow-y-auto",base:"my-16"}},disableAnimation:{false:{wrapper:["[--scale-enter:100%]","[--scale-exit:100%]","[--slide-enter:0px]","[--slide-exit:80px]","sm:[--scale-enter:100%]","sm:[--scale-exit:103%]","sm:[--slide-enter:0px]","sm:[--slide-exit:0px]"]}}},defaultVariants:{size:"md",radius:"lg",shadow:"sm",placement:"auto",backdrop:"opaque",scrollBehavior:"normal"},compoundVariants:[{backdrop:["opaque","blur"],class:{backdrop:"w-screen h-screen fixed inset-0"}}]}),S=n(6733),N=n(5607),M=n(7316),j=n(2459),B=n(9869),I=n(9037),F=n(262),A=n(3295),R=n(9373),W=n(8237),H=n(3114),z=n(5893),q=(0,N.Gp)((e,t)=>{let{children:n,...f}=e,b=function(e){var t,n,f;let b=(0,S.w)(),[P,O]=(0,N.oe)(e,T.variantKeys),{ref:W,as:H,className:z,classNames:q,isOpen:_,defaultOpen:G,onOpenChange:K,motionProps:U,closeButton:V,isDismissable:J=!0,hideCloseButton:$=!1,shouldBlockScroll:X=!0,portalContainer:Y,isKeyboardDismissDisabled:Z=!1,onClose:Q,...ee}=P,et=(0,A.gy)(W),en=(0,s.useRef)(null),[er,ei]=(0,s.useState)(!1),[es,eo]=(0,s.useState)(!1),el=null!=(n=null!=(t=e.disableAnimation)?t:null==b?void 0:b.disableAnimation)&&n,ea=(0,s.useId)(),eu=(0,s.useId)(),ed=(0,s.useId)(),ec=function(e){let[t,n]=(0,R.z)(e.isOpen,e.defaultOpen||!1,e.onOpenChange),r=(0,s.useCallback)(()=>{n(!0)},[n]),i=(0,s.useCallback)(()=>{n(!1)},[n]),o=(0,s.useCallback)(()=>{n(!t)},[n,t]);return{isOpen:t,setOpen:n,open:r,close:i,toggle:o}}({isOpen:_,defaultOpen:G,onOpenChange:e=>{null==K||K(e),e||null==Q||Q()}}),{modalProps:em,underlayProps:ep}=function(e={shouldBlockScroll:!0},t,n){let{overlayProps:f,underlayProps:b}=function(e,t){let{onClose:n,shouldCloseOnBlur:r,isOpen:c,isDismissable:m=!1,isKeyboardDismissDisabled:p=!1,shouldCloseOnInteractOutside:f}=e;(0,s.useEffect)(()=>(c&&d.push(t),()=>{let e=d.indexOf(t);e>=0&&d.splice(e,1)}),[c,t]);let v=()=>{d[d.length-1]===t&&n&&n()};!function(e){let{ref:t,onInteractOutside:n,isDisabled:r,onInteractOutsideStart:i}=e,u=(0,s.useRef)({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}),d=(0,o.i)(e=>{n&&a(e,t)&&(i&&i(e),u.current.isPointerDown=!0)}),c=(0,o.i)(e=>{n&&n(e)});(0,s.useEffect)(()=>{let e=u.current;if(r)return;let n=t.current,i=(0,l.r)(n);if("undefined"!=typeof PointerEvent){let n=n=>{e.isPointerDown&&a(n,t)&&c(n),e.isPointerDown=!1};return i.addEventListener("pointerdown",d,!0),i.addEventListener("pointerup",n,!0),()=>{i.removeEventListener("pointerdown",d,!0),i.removeEventListener("pointerup",n,!0)}}{let n=n=>{e.ignoreEmulatedMouseEvents?e.ignoreEmulatedMouseEvents=!1:e.isPointerDown&&a(n,t)&&c(n),e.isPointerDown=!1},r=n=>{e.ignoreEmulatedMouseEvents=!0,e.isPointerDown&&a(n,t)&&c(n),e.isPointerDown=!1};return i.addEventListener("mousedown",d,!0),i.addEventListener("mouseup",n,!0),i.addEventListener("touchstart",d,!0),i.addEventListener("touchend",r,!0),()=>{i.removeEventListener("mousedown",d,!0),i.removeEventListener("mouseup",n,!0),i.removeEventListener("touchstart",d,!0),i.removeEventListener("touchend",r,!0)}}},[t,r,d,c])}({ref:t,onInteractOutside:m&&c?e=>{(!f||f(e.target))&&(d[d.length-1]===t&&(e.stopPropagation(),e.preventDefault()),v())}:null,onInteractOutsideStart:e=>{(!f||f(e.target))&&d[d.length-1]===t&&(e.stopPropagation(),e.preventDefault())}});let{focusWithinProps:h}=(0,u.L)({isDisabled:!r,onBlurWithin:e=>{!(!e.relatedTarget||(0,i.cW)(e.relatedTarget))&&(!f||f(e.relatedTarget))&&n()}});return{overlayProps:{onKeyDown:e=>{"Escape"!==e.key||p||e.nativeEvent.isComposing||(e.stopPropagation(),e.preventDefault(),v())},...h},underlayProps:{onPointerDown:e=>{e.target===e.currentTarget&&e.preventDefault()}}}}({...e,isOpen:t.isOpen,onClose:t.close},n);return!function(e={}){let{isDisabled:t}=e;(0,c.b)(()=>{if(!t){let e,t,n,i,s;return 1==++g&&(r=(0,m.gn)()?(n=null,i=()=>{if(n)return;let e=window.pageXOffset,t=window.pageYOffset;n=(0,p.t)(x(window,"scroll",()=>{window.scrollTo(0,0)}),w(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),w(document.documentElement,"overflow","hidden"),w(document.body,"marginTop",`-${t}px`),()=>{window.scrollTo(e,t)}),window.scrollTo(0,0)},s=(0,p.t)(x(document,"touchstart",n=>{((e=v(n.target,!0))!==document.documentElement||e!==document.body)&&e instanceof HTMLElement&&"auto"===window.getComputedStyle(e).overscrollBehavior&&(t=w(e,"overscrollBehavior","contain"))},{passive:!1,capture:!0}),x(document,"touchmove",t=>{if(!e||e===document.documentElement||e===document.body){t.preventDefault();return}e.scrollHeight===e.clientHeight&&e.scrollWidth===e.clientWidth&&t.preventDefault()},{passive:!1,capture:!0}),x(document,"touchend",e=>{let n=e.target;y(n)&&n!==document.activeElement&&(e.preventDefault(),i(),n.style.transform="translateY(-2000px)",n.focus(),requestAnimationFrame(()=>{n.style.transform=""})),t&&t()},{passive:!1,capture:!0}),x(document,"focus",e=>{let t=e.target;y(t)&&(i(),t.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{t.style.transform="",h&&(h.height<window.innerHeight?requestAnimationFrame(()=>{E(t)}):h.addEventListener("resize",()=>E(t),{once:!0}))}))},!0)),()=>{null==t||t(),null==n||n(),s()}):(0,p.t)(w(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),w(document.documentElement,"overflow","hidden"))),()=>{0==--g&&r()}}},[t])}({isDisabled:!t.isOpen||!e.shouldBlockScroll}),(0,C.Bq)(),(0,s.useEffect)(()=>{if(t.isOpen&&n.current)return function(e,t=document.body){let n=new Set(e),r=new Set,i=e=>{for(let t of e.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))n.add(t);let t=e=>{if(n.has(e)||r.has(e.parentElement)&&"row"!==e.parentElement.getAttribute("role"))return NodeFilter.FILTER_REJECT;for(let t of n)if(e.contains(t))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},i=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:t}),o=t(e);if(o===NodeFilter.FILTER_ACCEPT&&s(e),o!==NodeFilter.FILTER_REJECT){let e=i.nextNode();for(;null!=e;)s(e),e=i.nextNode()}},s=e=>{var t;let n=null!==(t=L.get(e))&&void 0!==t?t:0;("true"!==e.getAttribute("aria-hidden")||0!==n)&&(0===n&&e.setAttribute("aria-hidden","true"),r.add(e),L.set(e,n+1))};k.length&&k[k.length-1].disconnect(),i(t);let o=new MutationObserver(e=>{for(let t of e)if("childList"===t.type&&0!==t.addedNodes.length&&![...n,...r].some(e=>e.contains(t.target))){for(let e of t.removedNodes)e instanceof Element&&(n.delete(e),r.delete(e));for(let e of t.addedNodes)(e instanceof HTMLElement||e instanceof SVGElement)&&("true"===e.dataset.liveAnnouncer||"true"===e.dataset.reactAriaTopLayer)?n.add(e):e instanceof Element&&i(e)}});o.observe(t,{childList:!0,subtree:!0});let l={observe(){o.observe(t,{childList:!0,subtree:!0})},disconnect(){o.disconnect()}};return k.push(l),()=>{for(let e of(o.disconnect(),r)){let t=L.get(e);1===t?(e.removeAttribute("aria-hidden"),L.delete(e)):L.set(e,t-1)}l===k[k.length-1]?(k.pop(),k.length&&k[k.length-1].observe()):k.splice(k.indexOf(l),1)}}([n.current])},[t.isOpen,n]),{modalProps:(0,D.d)(f),underlayProps:b}}({isDismissable:J,shouldBlockScroll:X,isKeyboardDismissDisabled:Z},ec,et),{buttonProps:ef}=(0,M.j)({onPress:ec.close},en),{isFocusVisible:ev,focusProps:eh}=(0,j.F)(),eb=(0,B.W)(null==q?void 0:q.base,z),eg=(0,s.useMemo)(()=>T({...O,disableAnimation:el}),[(0,I.Xx)(O),el]),ew=(0,s.useCallback)((e={})=>({className:eg.backdrop({class:null==q?void 0:q.backdrop}),onClick:()=>ec.close(),...ep,...e}),[eg,q,ep]);return{Component:H||"section",slots:eg,domRef:et,headerId:eu,bodyId:ed,motionProps:U,classNames:q,isDismissable:J,closeButton:V,hideCloseButton:$,portalContainer:Y,shouldBlockScroll:X,backdrop:null!=(f=e.backdrop)?f:"opaque",isOpen:ec.isOpen,onClose:ec.close,disableAnimation:el,setBodyMounted:eo,setHeaderMounted:ei,getDialogProps:(e={},t=null)=>({ref:function(...e){return 1===e.length?e[0]:t=>{for(let n of e)"function"==typeof n?n(t):null!=n&&(n.current=t)}}(t,et),...(0,D.d)(em,ee,e),className:eg.base({class:(0,B.W)(eb,e.className)}),id:ea,"data-open":(0,F.PB)(ec.isOpen),"data-dismissable":(0,F.PB)(J),"aria-modal":(0,F.PB)(!0),"aria-labelledby":er?eu:void 0,"aria-describedby":es?ed:void 0}),getBackdropProps:ew,getCloseButtonProps:()=>({role:"button",tabIndex:0,"aria-label":"Close","data-focus-visible":(0,F.PB)(ev),className:eg.closeButton({class:null==q?void 0:q.closeButton}),...(0,D.d)(ef,eh)})}}({...f,ref:t}),P=(0,z.jsx)(C.aV,{portalContainer:b.portalContainer,children:n});return(0,z.jsx)(W.D,{value:b,children:b.disableAnimation&&b.isOpen?P:(0,z.jsx)(H.M,{children:b.isOpen?P:null})})});q.displayName="NextUI.Modal";var _=q},7794:function(e,t,n){n.d(t,{W:function(){return s}});var r=n(7294),i=n(3387);function s(e,t=[]){let n=(0,r.useRef)(e);return(0,i.G)(()=>{n.current=e}),(0,r.useCallback)((...e)=>{var t;return null==(t=n.current)?void 0:t.call(n,...e)},t)}},7957:function(e,t,n){n.d(t,{q:function(){return l}});var r=n(1086),i=n(9373),s=n(7794),o=n(7294);function l(e={}){let{id:t,defaultOpen:n,isOpen:l,onClose:a,onOpen:u,onChange:d=()=>{}}=e,c=(0,s.W)(u),m=(0,s.W)(a),[p,f]=(0,i.z)(l,n||!1,d),v=(0,o.useId)(),h=t||v,b=void 0!==l,g=(0,o.useCallback)(()=>{b||f(!1),null==m||m()},[b,m]),w=(0,o.useCallback)(()=>{b||f(!0),null==c||c()},[b,c]),x=(0,o.useCallback)(()=>{(p?g:w)()},[p,w,g]);return{isOpen:!!p,onOpen:w,onClose:g,onOpenChange:x,isControlled:b,getButtonProps:(e={})=>({...e,"aria-expanded":p,"aria-controls":h,onClick:(0,r.t)(e.onClick,x)}),getDisclosureProps:(e={})=>({...e,hidden:!p,id:h})}}},3387:function(e,t,n){n.d(t,{G:function(){return i}});var r=n(7294),i=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:r.useEffect},4392:function(e,t,n){n.d(t,{q:function(){return a}});var r=n(4792),i=n(1044),s=n(1839),o=n(7294);let l=new WeakMap;function a(e,t){let n,{locale:a}=(0,r.j)(),u=t&&(0,i.J).getGlobalDictionaryForPackage(t)||((n=l.get(e))||(n=new i.J(e),l.set(e,n)),n);return(0,o.useMemo)(()=>new s.E(a,u),[a,u])}},5299:function(e,t,n){n.d(t,{aV:function(){return m},Bq:function(){return p}});var r=n(7294);let i=(0,r.createContext)({});var s=n(4942);function o({children:e}){let t=(0,r.useMemo)(()=>({register:()=>{}}),[]);return r.createElement(s.O.Provider,{value:t},e)}var l=n(7873),a=n(3935),u=n(7385),d=n(9786);let c=r.createContext(null);function m(e){var t;let n=(0,u.Av)(),{portalContainer:s=n?null:document.body,isExiting:d}=e,[m,p]=(0,r.useState)(!1),f=(0,r.useMemo)(()=>({contain:m,setContain:p}),[m,p]),{getContainer:v}=null!==(t=(0,r.useContext)(i))&&void 0!==t?t:{};if(!e.portalContainer&&v&&(s=v()),!s)return null;let h=e.children;return e.disableFocusManagement||(h=r.createElement(l.MT,{restoreFocus:!0,contain:m&&!d},h)),h=r.createElement(c.Provider,{value:f},r.createElement(o,null,h)),a.createPortal(h,s)}function p(){let e=(0,r.useContext)(c),t=null==e?void 0:e.setContain;(0,d.b)(()=>{null==t||t(!0)},[t])}},3699:function(e,t,n){n.d(t,{T:function(){return l}});var r=n(7127),i=n(7294),s=n(4971);let o={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"};function l(e){let{children:t,elementType:n="div",isFocusable:l,style:a,...u}=e,{visuallyHiddenProps:d}=function(e={}){let{style:t,isFocusable:n}=e,[r,l]=(0,i.useState)(!1),{focusWithinProps:a}=(0,s.L)({isDisabled:!n,onFocusWithinChange:e=>l(e)}),u=(0,i.useMemo)(()=>r?t:t?{...o,...t}:o,[r]);return{visuallyHiddenProps:{...a,style:u}}}(e);return i.createElement(n,(0,r.d)(u,d),t)}}}]);