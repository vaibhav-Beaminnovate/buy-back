(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8121],{44039:function(e,t,a){"use strict";a.d(t,{Q:function(){return w}});var r=a(67294),s=a(51620),l=a(27287),n=a(13622);let i=0,o=r.useId||(()=>{let[e,t]=(0,r.useState)();return(0,r.useEffect)(()=>t(++i),[]),e&&`${s.o6}-${e}`}),c=({state:e,toggle:t,disabled:a})=>{let r=o(),l=r&&r+"-",n={id:r,"aria-controls":l,"aria-expanded":e.isEnter,onClick:t};return a?n.disabled=!0:n[s.OM]="",{buttonProps:n,panelProps:{id:l,"aria-labelledby":r,role:"region"}}},d="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect,u=({status:e,isResolved:t})=>{let[a,s]=(0,r.useState)(),l=(0,r.useRef)(null);return d(()=>{("preEnter"===e||"preExit"===e)&&s(l.current.getBoundingClientRect().height)},[e]),[{height:"preEnter"===e||"exiting"===e?0:"entering"===e||"preExit"===e?a:void 0,overflow:t?void 0:"hidden"},l]};function m(e,t){"function"==typeof e?e(t):e.current=t}function h(e,t){return(0,r.useMemo)(()=>e?t?a=>{m(e,a),m(t,a)}:e:t,[e,t])}let f=(e,t,a)=>{let{stateMap:r,mountOnEnter:s,initialEntered:l}=e,n=null!=a?a:l;return r.get(t)||{status:n?"entered":s?"unmounted":"exited",isMounted:!s,isEnter:n,isResolved:!0}},x=()=>(0,r.useContext)(s.SY),g=({itemKey:e,initialEntered:t,disabled:a}={})=>{let s=(0,r.useRef)(null),l=x(),n=null!=e?e:s.current,i=f(l,n,t),{setItem:o,deleteItem:c,toggle:d}=l;return(0,r.useEffect)(()=>{if(a)return;let r=null!=e?e:s.current;return o(r,{initialEntered:t}),()=>void c(r)},[o,c,e,t,a]),{itemRef:s,state:i,toggle:(0,r.useCallback)(e=>d(n,e),[d,n])}};var p=a(85893);let b=(e,t)=>"function"==typeof e?e(t):e,y=(0,r.memo)(({forwardedRef:e,itemRef:t,state:a,toggle:r,className:i,disabled:o,header:d,headingTag:m="h3",headingProps:f,buttonProps:x,contentProps:g,panelProps:y,children:w,...j})=>{let N={state:a,toggle:r,disabled:o},{buttonProps:v,panelProps:_}=c(N),[E,k]=u(a),S=h(y&&y.ref,k),{status:A,isMounted:C,isEnter:P}=a;return(0,p.jsxs)("div",{...j,ref:h(e,t),className:(0,l.P)(s.Kj,"item",{status:A,expanded:P})(i,a),children:[(0,p.jsx)(m,{...f,style:{margin:0,...f&&f.style},className:(0,l.P)(s.Kj,"item-heading")(f&&f.className,a),children:(0,p.jsx)("button",{...(0,n.d)(v,x),type:"button",className:(0,l.P)(s.Kj,"item-btn")(x&&x.className,a),children:b(d,N)})}),C&&(0,p.jsx)("div",{...g,style:{display:"exited"===A?"none":void 0,...E,...g&&g.style},className:(0,l.P)(s.Kj,"item-content")(g&&g.className,a),children:(0,p.jsx)("div",{...(0,n.d)(_,y),ref:S,className:(0,l.P)(s.Kj,"item-panel")(y&&y.className,a),children:b(w,N)})})]})});y.displayName="AccordionItem";let w=(e=>{let t=(0,r.forwardRef)(({itemKey:t,initialEntered:a,...r},s)=>(0,p.jsx)(e,{forwardedRef:s,...r,...g({itemKey:t,initialEntered:a,disabled:r.disabled})}));return t.displayName="WithAccordionItem",t})(y)},27287:function(e,t,a){"use strict";a.d(t,{P:function(){return r}});let r=(e,t,a)=>(r,s)=>{let l=t?`${e}__${t}`:e,n=l;a&&Object.keys(a).forEach(e=>{let t=a[e];t&&(n+=` ${l}--${!0===t?e:`${e}-${t}`}`)});let i="function"==typeof r?r(s):r;return"string"==typeof i&&(i=i.trim())&&(n+=` ${i}`),n}},51620:function(e,t,a){"use strict";a.d(t,{Kj:function(){return s},OM:function(){return i},SY:function(){return o},gE:function(){return n},o6:function(){return l}});var r=a(67294);let s="szh-accordion",l="szh-adn",n=`data-${l}`,i=`data-${l}-btn`,o=(0,r.createContext)({})},13622:function(e,t,a){"use strict";a.d(t,{d:function(){return r}});let r=(e,t)=>{if(!t)return e;let a={...e};return Object.keys(t).forEach(r=>{let s=e[r],l=t[r];"function"==typeof l&&s?a[r]=(...e)=>{s(...e),l(...e)}:a[r]=l}),a}},35126:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/liquidator/profile/wallet",function(){return a(60436)}])},74133:function(e,t,a){"use strict";var r=a(85893);a(67294);var s=a(44039);t.Z=e=>{let{header:t,...a}=e;return(0,r.jsx)(s.Q,{...a,header:e=>{let{state:{isEnter:a}}=e;return(0,r.jsxs)(r.Fragment,{children:[t,(0,r.jsx)("i",{className:"bi bi-chevron-down ml-auto transition-transform duration-200 ease-out flex items-center ".concat(a&&"rotate-180")})]})},className:"border-b",buttonProps:{className:e=>{let{isEnter:t}=e;return"flex items-center w-full p-4 text-left transition-all duration-200 hover:bg-accent-dimmed ".concat(t&&"bg-[#42c8b725]")}},contentProps:{className:"transition-height duration-200 ease-out"},panelProps:{className:"p-4"}})}},69722:function(e,t,a){"use strict";var r=a(85893),s=a(32553),l=a(96180),n=a(67294),i=a(3942),o=a.n(i),c=a(40221),d=a(9134);t.Z=e=>{let{buttonStyles:t={},imageStyles:i={},containerStyles:u={},onImagesChange:m=()=>{},folderName:h,s3imageUrlArray:f,setS3imageUrlArray:x,tag:g,imageName:p,setImageName:b,setAadharCount:y,setPhoneCount:w,clearImages:j}=e,[N,v]=(0,n.useState)([]),[_,E]=(0,n.useState)(!1),k="https://buybackservice.unicornstore.in",S=(0,s.dQ)(),[A,C]=(0,n.useState)(""),P=e=>e.reduce((e,t)=>({...e,...t}),{});(0,n.useEffect)(()=>{f&&P(f)[g]&&v([{data_url:P(f)[g]}]),C(P(f)[g])},[f,g]),(0,n.useEffect)(()=>{j&&j(()=>v([]))},[j]),(0,n.useEffect)(()=>{("GST_certificate"===g||"cheque"===g||"company_logo"===g)&&v(f.filter(e=>e[g]).map(e=>({original_url:e[g],data_url:"".concat(e[g],"?t=").concat(new Date().getTime())})))},[f,g]);let B=e=>({front_aadhar:"front_aadhar",back_aadhar:"back_aadhar",Top:"Top",Bottom:"Bottom",Front:"Front",Back:"Back",Left:"Left",Right:"Right",front_invoice:"front_invoice",back_invoice:"back_invoice"})[e]||e,q=e=>{x(t=>t.filter(t=>!Object.values(t).includes(e)))},I=e=>{let[t,a]=e.split(","),r=t.split(":")[1].split(";")[0],s=atob(a),l=new ArrayBuffer(s.length),n=new Uint8Array(l);for(let e=0;e<s.length;e++)n[e]=s.charCodeAt(e);return new Blob([l],{type:r})},T=(e,t)=>new File([e],t,{type:e.type}),F=async e=>{try{let t=a(1616);if(!("image/heic"===e.type||"image/heif"===e.type||/\.(heic|heif)$/i.test(e.name)))return e;{let a=await t({blob:e,toType:"image/png"}),r=e.name.split(".").slice(0,-1).join(".");return new File([a],"".concat(r,".png"),{type:"image/png"})}}catch(t){return console.error("Error converting HEIC to PNG: ",t),e}},W=async e=>{let t=await F(e[0]),a=await (0,c.Z)(t,{maxSizeMB:4,maxWidthOrHeight:1920,useWebWorker:!0}),r=new FormData;r.append("file",a,a.name);try{E(!0);let e=await fetch("".concat(k,"/upload-for-order-detail/?folder_name=").concat(h),{method:"POST",headers:{Authorization:S},body:r});if(!e.ok)throw Error("Failed to upload images");let t=await e.json();if("success"!==t.status)throw Error(t.message);x(e=>[...e,{[B(g)]:t.s3_image_url}]),["Top","Bottom","Front","Back","Left","Right"].includes(g)&&w(e=>e+1),["front_aadhar","back_aadhar"].includes(g)&&y(e=>e+1),C(t.s3_image_url)}catch(e){console.error("Error uploading images:",e),d.Am.error(e.message)}finally{E(!1)}},z=(0,n.useCallback)((e,t)=>{E(!0),b(g+(p+1)),v(e),m(e,t),W(e.map(e=>T(I(e.data_url),"image_".concat(g,"_").concat(e.file.name))))},[m,g,W]),L=async e=>{try{if(!(await fetch("".concat(k,"/remove-image?s3_image=").concat(e),{method:"DELETE",headers:{Authorization:S}})).ok)throw Error("Failed to delete image");["Top","Bottom","Front","Back","Left","Right"].includes(g)&&w(e=>e-1),["front_aadhar","back_aadhar"].includes(g)&&y(e=>e-1)}catch(e){console.error("Error deleting image:",e)}},R=async e=>{let t=N[e],a=t&&t.data_url;await L(a),q(a),v(t=>t.filter((t,a)=>a!==e)),x(e=>e.filter(e=>!Object.values(e).includes(a)))};return _?(0,r.jsx)("div",{className:"w-full max-h-full h-full relative grid place-content-center",children:(0,r.jsx)(l.c,{color:"success"})}):(0,r.jsx)("div",{className:"w-full h-full max-h-full relative ".concat(u),children:(0,r.jsx)(o(),{value:N,onChange:z,dataURLKey:"data_url",allowNonImageType:!0,children:e=>{let{imageList:a,onImageUpload:s,isDragging:l,dragProps:n}=e;return(0,r.jsxs)("div",{className:"flex flex-col w-full h-full items-center justify-center max-h-full",children:[(0,r.jsx)("button",{style:{...t,color:l?"red":void 0},onClick:s,...n,className:"text-gray-400 w-full h-full content-center absolute top-0 left-0 ",children:(0,r.jsx)("span",{className:"".concat(N.length>0?"hidden":""),children:"Click here to upload or Drop here"})}),(0,r.jsx)("div",{className:"overflow-y-scroll scrollbar-hidden z-10 w-full",children:(0,r.jsx)("div",{className:"flex items-center justify-center w-full space-y-5",children:a.map((e,t)=>(0,r.jsxs)("div",{className:"flex justify-start md:justify-center ",children:[(0,r.jsx)("div",{className:"flex flex-row absolute right-1 space-x-1 top-1 h-full",children:(0,r.jsx)("button",{className:"text-red-500 bg-gray-200 rounded px-1 text-xl h-fit sticky top-1",onClick:e=>{e.stopPropagation(),R(t)},children:(0,r.jsx)("i",{className:"bi bi-x-square"})})}),(0,r.jsx)("img",{className:"h-full",src:A,alt:"",style:i})]},t))})})]})}})})}},60436:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return j}});var r=a(85893);a(69722);var s=a(36656),l=a(67294),n=a(9134);a(74133);var i=a(11163),o=a(9008),c=a.n(o),d=a(32553),u=a(96180),m=a(14930),h=a(4483),f=a(55070),x=a(3942),g=a.n(x),p=a(40221),b=e=>{let{onImagesChange:t=()=>{},s3imageUrlArray:a,setS3imageUrlArray:s,tag:i,imageName:o,setImageName:c,clearImages:m}=e,[h,f]=(0,l.useState)([]),[x,b]=(0,l.useState)(""),[y,w]=(0,l.useState)(!1),[j,N]=(0,l.useState)(!1),[v,_]=(0,l.useState)(""),E=(0,d.dQ)(),k="https://buybackservice.unicornstore.in";(0,l.useEffect)(()=>{a&&a[i]&&(a[i],f([{data_url:a[i]}]),_(a[i]),b(i))},[a,i]);let S=e=>{s(t=>{let a={...t};return delete a[e],a})};(0,l.useEffect)(()=>{m&&m(()=>f([]))},[m]);let A=e=>{let[t,a]=e.split(","),r=t.split(":")[1].split(";")[0],s=atob(a),l=new ArrayBuffer(s.length),n=new Uint8Array(l);for(let e=0;e<s.length;e++)n[e]=s.charCodeAt(e);return new Blob([l],{type:r})},C=(e,t)=>new File([e],t,{type:e.type}),P=async e=>{try{if(w(!0),!["image/jpeg","image/png","image/jpg"].includes(e[0].type))throw Error("Unsupported file type, please use jpeg or png instead");let t=new Blob([e[0]],{type:e[0].type}),a=await (0,p.Z)(t,{maxSizeMB:4,maxWidthOrHeight:1920,useWebWorker:!0}),r=new FormData;r.append("file",a);let l=await fetch("".concat(k,"/upload-image"),{method:"POST",headers:{Authorization:E},body:r});if(!l.ok)throw Error("Failed to upload images");let n=await l.json();if("success"===n.status)s(e=>({...e,[i]:n.url})),b(n.s3_image),_(n.url),N(!1);else throw Error(n.message)}catch(e){console.error("Error uploading images:",e),n.Am.error(e.message,{toastId:"UploadMiscImageError"}),N(!0)}finally{w(!1)}},B=(0,l.useCallback)((e,a)=>{c(i+(o+1)),f(e),t(e,a),P(e.map(e=>C(A(e.data_url),"image_".concat(o,".jpg"))))},[t,i,o,P]),q=async e=>{try{if(!(await fetch("".concat(k,"/remove-image?url=").concat(e),{method:"DELETE",headers:{Authorization:E}})).ok)throw Error("Failed to delete image")}catch(e){console.error("Error deleting image:",e)}},I=async()=>{try{await q(v),S(x),f([]),s(e=>{let t={...e};return delete t[x],t})}catch(e){console.error("Error removing image:",e),n.Am.error(e.message,{toastId:"ImageRemoveError"})}};return y?(0,r.jsx)("div",{className:"w-full max-h-full h-full relative grid place-content-center",children:(0,r.jsx)(u.c,{color:"success"})}):(0,r.jsx)("div",{className:"w-full h-full max-h-full relative",children:(0,r.jsx)(g(),{value:h,onChange:B,dataURLKey:"data_url",children:e=>{let{imageList:t,onImageUpload:a,isDragging:s,dragProps:l,errors:n}=e;return(0,r.jsxs)("div",{className:"flex flex-col w-full h-full items-center justify-center max-h-full",children:[(0,r.jsx)("button",{onClick:a,...l,className:"w-full h-full content-center absolute top-0 left-0  outline-none ".concat(s?"text-red-500":""),children:!n&&(0,r.jsx)("span",{className:"".concat(h.length>0?"hidden":""," "),children:j?"Failed to upload image, please try again":"Click here to upload or Drop here"})}),(0,r.jsx)("div",{className:"overflow-y-scroll scrollbar-hidden z-10 w-full",children:(0,r.jsx)("div",{className:"flex items-center justify-center w-full space-y-5",children:j?"Failed to upload image, please try again":t.map((e,t)=>(0,r.jsxs)("div",{className:"flex justify-start md:justify-center ",children:[(0,r.jsx)("div",{className:"flex flex-row absolute right-1 space-x-1 top-1 h-full",children:(0,r.jsx)("button",{className:"text-red-500 border border-red-500 hover:bg-red-500 hover:text-white transition-all bg-white rounded px-2 text-xl h-fit sticky top-1",onClick:e=>{e.stopPropagation(),I(t)},children:(0,r.jsx)("i",{className:"fa-solid fa-xmark"})})}),(0,r.jsx)("img",{className:"h-full",src:v,alt:""})]},t))})})]})}})})},y=a(8455),w=a(49621),j=()=>{let e="https://buybackservice.unicornstore.in",t=(0,i.useRouter)(),[a,o]=(0,l.useState)([]),[x,g]=(0,l.useState)(""),[p,j]=(0,l.useState)(),[N,v]=(0,l.useState)([]),[_,E]=(0,l.useState)([]),{balance:k}=(0,s.K)(),[S,A]=(0,l.useState)(!1),[C,P]=(0,l.useState)(""),[B,q]=(0,l.useState)({deposit:"",withdrawal:"",image:""}),I=(0,l.useRef)(null),[T,F]=(0,l.useState)({deposit:"",withdrawal:""}),[W,z]=(0,l.useState)(1),[L,R]=(0,l.useState)(1),[D,O]=(0,l.useState)({deposit:!1,withdrawal:!1,transaction:!0}),M=(0,d.dQ)(),K=e=>{let{name:t,value:a}=e.target;F(e=>({...e,[t]:a}))},U=async()=>{A(!0);let t=localStorage.getItem("liquidator_id");try{let a=await fetch("".concat(e,"/get-liquidator-by-id/?liquidator_id=").concat(t),{headers:{Authorization:M}});if(!a.ok)throw Error("Could not get user data");let r=await a.json();P(r.other_info.wallet_balance)}catch(e){console.log(e),n.Am.error("Something went wrong",{toastId:"error"})}A(!1)};(0,l.useEffect)(()=>{U()},[]);let $=async()=>{O(e=>({...e,transaction:!0}));try{let t=await fetch("".concat(e,"/get-all-transactions?page=").concat(W,"&per_page=10&liquidator_id=").concat(p,"&sort_desc=false"),{headers:{Authorization:M}});if(!t.ok)throw Error("Could not get transactions");let a=await t.json();v(a.data),R(Math.ceil(a.total_count/10))}catch(e){n.Am.error(e.message),console.log(e.message)}setTimeout(()=>{O(e=>({...e,transaction:!1}))},300)};(0,l.useEffect)(()=>{p&&$()},[W,p]);let G=async()=>{try{let t=await fetch("".concat(e,"/current-liquidators-wages?liquidator_id=").concat(p),{headers:{Authorization:M}});if(!t.ok)throw Error("Could not get liquidator wages");let a=await t.json();E(a.data)}catch(e){n.Am.error(e.message,{toastId:"wageError"})}},H=e=>{t.push("/liquidator/auction/".concat(e))};(0,l.useEffect)(()=>{j(localStorage.getItem("liquidator_id")),p&&G()},[p]);let Q=e=>{var t;let r={};return T.deposit.trim()||"deposit"!==e||(r.deposit="Amount is required"),(null==a?void 0:null===(t=a.paymentProof)||void 0===t?void 0:t.trim())&&(null==a?void 0:a.paymentProof)!==""||"deposit"!==e||(r.image="Proof is required"),T.withdrawal.trim()||"withdrawal"!==e||(r.withdrawal="Withdrawal Amount is required"),q(r),0===Object.keys(r).length},X=async t=>{if(Q(t))try{O(e=>({...e,[t]:!0}));let r=await fetch("".concat(e,"/create-transaction-request"),{method:"POST",headers:{"Content-type":"application/json",Authorization:M},body:JSON.stringify({liquidator_id:p,transaction_type:t,amount:T[t],payment_proof:null==a?void 0:a.paymentProof})});if(!r.ok)throw Error("Could not create transaction request");let s=await r.json();if("success"!==s.status)throw Error(s.message);n.Am.success(s.message),F({deposit:"",withdrawal:""}),o([]),I.current()}catch(e){n.Am.error(e.message)}finally{setTimeout(()=>{O(e=>({...e,[t]:!1}))},300)}};return S?(0,r.jsx)("div",{className:"text-center mt-40",children:(0,r.jsx)(u.c,{color:"success"})}):(0,r.jsxs)("div",{className:"p-6 bg-gray-100 min-h-screen",children:[(0,r.jsx)(c(),{children:(0,r.jsx)("title",{children:"BuyBack - Wallet"})}),(0,r.jsxs)("div",{className:"max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6",children:[(0,r.jsx)("h1",{className:"text-2xl font-semibold mb-4",children:"My Wallet"}),(0,r.jsx)("div",{className:"bg-white border border-gray-300 rounded-lg p-6 mb-6",children:(0,r.jsxs)("table",{className:"w-full",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)("h2",{className:"text-xl font-semibold mb-2 text-center",children:"Wallet Balance"})}),(0,r.jsx)("th",{children:(0,r.jsx)("h2",{className:"text-xl font-semibold mb-2 text-center",children:"Remaining Balance"})})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("div",{className:"text-3xl font-bold text-center",children:(0,d.fK)(C)})}),(0,r.jsx)("td",{children:(0,r.jsx)("div",{className:"text-3xl font-bold text-center",children:(0,d.fK)(k)})})]})})]})}),(0,r.jsxs)(y.d,{variant:"splitted",className:"px-0 mb-4",itemClasses:{base:"shadow-none rounded-lg border border-gray-300",title:"text-xl font-semibold",content:"pb-4"},defaultExpandedKeys:["2"],selectionMode:"multiple",children:[(0,r.jsx)(w.G,{"aria-label":"Active Wagers",title:"Active Wagers",children:_.length>0?(0,r.jsx)("div",{className:"bg-white border border-gray-300 rounded-lg p-6",children:(0,r.jsxs)("table",{className:"w-full border-collapse",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{className:"border-b border-gray-300",children:[(0,r.jsx)("th",{className:"py-2 text-left text-sm font-semibold",children:"Date"}),(0,r.jsx)("th",{className:"py-2 text-left text-sm font-semibold",children:"Auction Name"}),(0,r.jsx)("th",{className:"py-2 text-right text-sm font-semibold",children:"Amount"})]})}),(0,r.jsxs)("tbody",{children:[_.map((e,t)=>(0,r.jsxs)("tr",{className:"border-b border-gray-200 hover:bg-gray-100 cursor-pointer",onClick:()=>H(e.auction_id),children:[(0,r.jsx)("td",{className:"py-2 text-sm",children:new Date(null==e?void 0:e.date).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0})}),(0,r.jsx)("td",{className:"py-2 text-sm capitalize",children:e.auction_name}),(0,r.jsxs)("td",{className:"py-2 text-sm text-right text-red-500",children:["-",(0,d.fK)(e.wager)]})]},t)),0===N.length&&(0,r.jsx)("tr",{children:(0,r.jsx)("td",{children:"No transactions to show!"})})]})]})}):(0,r.jsx)("div",{className:"bg-white border border-gray-300 rounded-lg p-4",children:(0,r.jsx)("span",{className:"text-lg",children:"You do not have any active wagers right now"})})},"1"),(0,r.jsx)(w.G,{"aria-label":"Add Money to Wallet",title:"Add Money to Wallet",children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"text-sm text-gray-700 mb-4",children:"Please transfer the funds to the following bank account details:"}),(0,r.jsxs)("div",{className:"bg-gray-100 p-4 rounded-lg border border-gray-300 mb-4",children:[(0,r.jsx)("h3",{className:"text-lg font-semibold mb-2",children:"Bank Details"}),(0,r.jsxs)("ul",{className:"list-disc pl-5 space-y-2 text-sm text-gray-700",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Bank Name:"})," Example Bank"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Account Name:"})," Company Name"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Account Number:"})," 1234567890"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Sort Code:"})," 12-34-56"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"IBAN:"})," GB12EXAM12345678901234"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"SWIFT/BIC:"})," EXAMPGB2L"]})]})]}),(0,r.jsx)("p",{className:"text-sm text-gray-700 mb-4",children:"Once you have made the transfer, please upload a screenshot of the payment as proof."})]}),(0,r.jsxs)("form",{className:"space-y-6",onSubmit:e=>{e.preventDefault()},children:[(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsxs)("label",{htmlFor:"paymentProof",className:"block text-sm font-semibold mb-2 text-gray-700",children:["Payment Proof ",(0,r.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600 text-lg",children:"₹"}),(0,r.jsx)("input",{type:"number",id:"paymentProof",name:"deposit",value:T.deposit,onChange:K,className:"w-full pl-8 pr-2 py-2 border rounded outline-none text-base font-medium ring-accent ".concat(B.deposit?"border-red-300":""),placeholder:"Enter transferred amount"})]}),(null==B?void 0:B.deposit)&&(0,r.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:null==B?void 0:B.deposit})]}),(0,r.jsxs)("div",{className:"border-2 border-dashed h-40 ring-accent focus-within:ring-1 relative ".concat(B.image?"border-red-300":""),children:[(0,r.jsx)(b,{s3imageUrlArray:a,setS3imageUrlArray:o,tag:"paymentProof",imageName:"paymentProof",setImageName:g,clearImages:e=>I.current=e}),B.image&&(0,r.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:B.image})]}),(0,r.jsx)(m.A,{isLoading:D.deposit,className:"bg-accent text-white py-2 px-4 rounded ring-accent",onPress:()=>X("deposit"),children:"Submit Proof"})]})]})},"2"),(0,r.jsx)(w.G,{"aria-label":"Request Withdrawal",title:"Request Withdrawal",children:(0,r.jsxs)("form",{className:"space-y-6",onSubmit:e=>{e.preventDefault(),X("withdrawal")},children:[(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsxs)("label",{htmlFor:"requestWithdrawal",className:"block text-sm font-semibold mb-2 text-gray-700",children:["Withdrawal Amount ",(0,r.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600 text-lg",children:"₹"}),(0,r.jsx)("input",{type:"number",id:"requestWithdrawal",name:"withdrawal",value:T.withdrawal,onChange:K,className:"w-full pl-8 pr-2 py-2 border rounded outline-none text-base font-medium ring-accent ".concat(B.withdrawal?"border-red-300":""),placeholder:"Enter amount to withdraw"}),B.withdrawal&&(0,r.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:B.withdrawal})]})]}),(0,r.jsx)(m.A,{isLoading:D.withdrawal,type:"submit",className:"bg-accent text-white py-2 px-4 rounded ring-accent",children:"Request Withdrawal"})]})},"3")]}),(0,r.jsxs)("div",{className:"bg-white border border-gray-300 rounded-lg p-6",children:[(0,r.jsx)("h2",{className:"text-xl font-semibold mb-4",children:"Transaction History"}),(0,r.jsxs)("table",{className:"w-full border-collapse",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{className:"border-b border-gray-300",children:[(0,r.jsx)("th",{className:"py-2 text-left text-sm font-semibold",children:"Date"}),(0,r.jsx)("th",{className:"py-2 text-left text-sm font-semibold",children:"Description"}),(0,r.jsx)("th",{className:"py-2 text-right text-sm font-semibold",children:"Amount"})]})}),(0,r.jsxs)("tbody",{children:[D.transaction?Array(10).fill(0).map((e,t)=>(0,r.jsx)("tr",{className:"border-b border-gray-200 py-1",children:[,,,].fill(0).map((e,t)=>(0,r.jsx)("td",{className:"py-2 px-3",children:(0,r.jsx)(h.X,{className:"h-5 w-full rounded-full"})},t))},t)):N.map((e,t)=>(0,r.jsxs)("tr",{className:"border-b border-gray-200 hover:bg-gray-100",children:[(0,r.jsx)("td",{className:"py-2 text-sm",children:new Date(null==e?void 0:e.created_at).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0})}),(0,r.jsx)("td",{className:"py-2 text-sm capitalize",children:e.transaction_type}),(0,r.jsxs)("td",{className:"py-2 text-sm text-right ".concat("wager"===e.transaction_type||"withdrawal"===e.transaction_type?"text-red-500":"text-green-500"),children:["wager"===e.transaction_type||"withdrawal"===e.transaction_type?"-":"+"," ",(0,d.fK)(e.amount)]})]},t)),0===N.length&&(0,r.jsx)("tr",{children:(0,r.jsx)("td",{children:"No transactions to show!"})})]})]}),(0,r.jsx)("div",{className:"w-full flex justify-center mt-4",children:(0,r.jsx)(f.g,{total:L,color:"success",showControls:!0,page:W,onChange:z,classNames:{cursor:"text-white",base:"mx-auto"}})})]})]})]})}},9008:function(e,t,a){e.exports=a(7828)},54792:function(e,t,a){"use strict";a.d(t,{j:function(){return h}});let r=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),s=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);var l=a(67294),n=a(37385);let i=Symbol.for("react-aria.i18n.locale");function o(){let e="undefined"!=typeof window&&window[i]||"undefined"!=typeof navigator&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch{e="en-US"}return{locale:e,direction:!function(e){if(Intl.Locale){let t=new Intl.Locale(e).maximize(),a="function"==typeof t.getTextInfo?t.getTextInfo():t.textInfo;if(a)return"rtl"===a.direction;if(t.script)return r.has(t.script)}let t=e.split("-")[0];return s.has(t)}(e)?"ltr":"rtl"}}let c=o(),d=new Set;function u(){for(let e of(c=o(),d))e(c)}let m=l.createContext(null);function h(){let e=function(){let e=(0,n.Av)(),[t,a]=(0,l.useState)(c);return((0,l.useEffect)(()=>(0===d.size&&window.addEventListener("languagechange",u),d.add(a),()=>{d.delete(a),0===d.size&&window.removeEventListener("languagechange",u)}),[]),e)?{locale:"en-US",direction:"ltr"}:t}();return(0,l.useContext)(m)||e}}},function(e){e.O(0,[4838,934,3628,260,5798,2888,9774,179],function(){return e(e.s=35126)}),_N_E=e.O()}]);