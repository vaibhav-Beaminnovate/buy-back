(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1885],{54009:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/shipments/create-shipment/[[...shipmentID]]",function(){return r(24519)}])},28864:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return o},noSSR:function(){return i}});let a=r(38754);r(85893),r(67294);let s=a._(r(56016));function n(e){return{default:(null==e?void 0:e.default)||e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}function o(e,t){let r=s.default,a={loading:e=>{let{error:t,isLoading:r,pastDelay:a}=e;return null}};e instanceof Promise?a.loader=()=>e:"function"==typeof e?a.loader=e:"object"==typeof e&&(a={...a,...e});let o=(a={...a,...t}).loader;return(a.loadableGenerated&&(a={...a,...a.loadableGenerated},delete a.loadableGenerated),"boolean"!=typeof a.ssr||a.ssr)?r({...a,loader:()=>null!=o?o().then(n):Promise.resolve(n(()=>null))}):(delete a.webpack,delete a.modules,i(r,a))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},60572:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return a}});let a=r(38754)._(r(67294)).default.createContext(null)},56016:function(e,t,r){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let a=r(38754)._(r(67294)),s=r(60572),n=[],i=[],o=!1;function l(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),n=null;function l(){if(!n){let t=new d(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!o){let e=r.webpack?r.webpack():r.modules;e&&i.push(t=>{for(let r of e)if(t.includes(r))return l()})}function c(e,t){!function(){l();let e=a.default.useContext(s.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let i=a.default.useSyncExternalStore(n.subscribe,n.getCurrentValue,n.getCurrentValue);return a.default.useImperativeHandle(t,()=>({retry:n.retry}),[]),a.default.useMemo(()=>{var t;return i.loading||i.error?a.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:n.retry}):i.loaded?a.default.createElement((t=i.loaded)&&t.default?t.default:t,e):null},[e,i])}return c.preload=()=>l(),c.displayName="LoadableComponent",a.default.forwardRef(c)}(l,e)}function u(e,t){let r=[];for(;e.length;){let a=e.pop();r.push(a(t))}return Promise.all(r).then(()=>{if(e.length)return u(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{u(n).then(e,t)}),c.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let r=()=>(o=!0,t());u(i,e).then(r,r)})),window.__NEXT_PRELOADREADY=c.preloadReady;let m=c},24519:function(e,t,r){"use strict";r.r(t);var a=r(85893),s=r(32553),n=r(67957),i=r(4483),o=r(14930),l=r(10405),d=r(44265),c=r(87740),u=r(86597),m=r(96476),h=r(11163),p=r(67294),x=r(5152),f=r.n(x),b=r(9134),g=r(9008),y=r.n(g);let w=f()(()=>r.e(2802).then(r.bind(r,12802)),{loadableGenerated:{webpack:()=>[12802]},ssr:!1});t.default=()=>{let e="https://buybackservice.unicornstore.in",t=(0,h.useRouter)(),{shipmentID:r}=t.query,[x,f]=(0,p.useState)({weight:"",dimensions:"",location:"",deliveryPartner:"",warehouse:"",count:"",eway:"",requestedOn:"",pickupLocation:""}),g=(0,p.useRef)(null),[j,v]=(0,p.useState)(null),[_,N]=(0,p.useState)([]),[k,P]=(0,p.useState)({weight:"",dimensions:"",checkbox:"",location:"",warehouse:"",count:"",eway:"",requestedOn:"",pickupLocation:""}),[S,A]=(0,p.useState)([]),[C,O]=(0,p.useState)(!0),[D,E]=(0,p.useState)(!1),[L,I]=(0,p.useState)([]),[R,W]=(0,p.useState)({}),{isOpen:T,onOpen:X,onOpenChange:z}=(0,n.q)(),[q,F]=(0,p.useState)([]),[M,B]=(0,p.useState)(!1),[U,V]=(0,p.useState)(""),[H,G]=(0,p.useState)(!1),K=(0,p.useRef)(null),J=(0,s.dQ)(),$=async()=>{try{let t=await fetch("".concat(e,"/get-shipment/").concat(r),{headers:{Authorization:J}});if(!t.ok)throw Error("Could not get shipment data");let a=await t.json();v(a.shipment_data.orders),f({weight:a.shipment_data.weight_in_kg,dimensions:Object.values(a.shipment_data.box_dimensions).join(" x "),location:"",deliveryPartner:a.shipment_data.shipping_class,warehouse:a.shipment_data.drop_off_warehouse,count:a.shipment_data.box_count||""}),a.shipment_data.orders.forEach(e=>N(t=>[...t,e.order_id])),Z(a.shipment_data.pickup_location)}catch(e){b.Am.error(e.message)}};(0,p.useEffect)(()=>{t.isReady&&r&&(g.current.click(),$())},[t,t.isReady]);let Q=e=>{let{name:t,value:r}=e.target;f({...x,[t]:r}),P(e=>{let a={...e};return"weight"===t&&(!r.trim()||r<0)?a.weight="Weight must be a positive number":"weight"===t&&(a.weight=""),"dimensions"!==t||r.trim()&&/^\d+(\.\d+)?\s*x\s*\d+(\.\d+)?\s*x\s*\d+(\.\d+)?\s*$/.test(r)?"dimensions"===t&&(a.dimensions=""):a.dimensions="Dimensions must be in the format: Length x Width x Height","deliveryPartner"===t&&(!r.trim()||r<0)?a.deliveryPartner="Delivery partner is required":"deliveryPartner"===t&&(a.deliveryPartner=""),"warehouse"===t&&(!r.trim()||r<0)?a.warehouse="Warehouse is required":"warehouse"===t&&(a.warehouse=""),"pickupLocation"===t&&(r.trim()?a.pickupLocation="":a.pickupLocation="Pickup location is required"),a})},Y=()=>{let e={};return(!x.weight||""===x.weight.trim()||x.weight<=0)&&(e.weight="Weight must be a positive number"),/^\d+(\.\d+)?\s*x\s*\d+(\.\d+)?\s*x\s*\d+(\.\d+)?\s*$/.test(x.dimensions)||(e.dimensions="Dimensions must be in the format: Length x Width x Height"),x.dimensions.trim()||(e.dimensions="Dimensions is required"),x.deliveryPartner.trim()||(e.deliveryPartner="Delivery partner is required"),x.warehouse.trim()||(e.warehouse="Warehosue is required"),x.pickupLocation.trim()||(e.pickupLocation="Pickup location is required"),P(e),0===Object.keys(e).length},Z=async()=>{E(!0);try{O(!0);let t=localStorage.getItem("staff_id"),a=await fetch("".concat(e,"/get-orders_ids-by-staff?staff_id=").concat(t),{headers:{Authorization:J}});if(!a.ok)throw Error("Could not get orders");let s=await a.json();r?v(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=new Set(e.map(e=>e.order_id)),r=s.data.filter(e=>!t.has(e.order_id));return[...e,...r]}):v(s.data)}catch(e){b.Am.error(e.message)}finally{setTimeout(()=>{O(!1)},300)}};(0,p.useEffect)(()=>{t.isReady&&(ea(),Z())},[t,t.isReady]);let ee=e=>{let t;N(t=_.includes(e)?_.filter(t=>t!==e):[..._,e]),F(e=>e.filter(e=>t.includes(e.order_id))),0===t.length?P(e=>({...e,checkbox:"Please scan atleast one order."})):P(e=>({...e,checkbox:""}))},et=async()=>{if(G(!0),0===_.length){Y(),P(e=>({...e,checkbox:"Please scan at least one order."}));return}if(Y())try{B(!0);let r=await fetch("".concat(e,"/create-shipment-package?staff_id=1"),{method:"Post",headers:{"Content-Type":"application/json",Authorization:J},body:JSON.stringify({pickup_location_id:x.pickupLocation,warehouse_id:x.warehouse,shipping_class:x.deliveryPartner,orders:_,weight_in_kg:x.weight,box_dimensions:{length:x.dimensions.split("x")[0].trim(),width:x.dimensions.split("x")[1].trim(),height:x.dimensions.split("x")[2].trim()},eway_bill_no:x.eway,pickup_datetime:x.requestedOn})});if(!r.ok)throw Error("Could not submit shipment");let a=await r.json();if("success"!==a.status)throw Error(a.message);b.Am.success("Shipment submitted successfully"),v([]),Z(),t.push("/dashboard/shipments")}catch(e){b.Am.error(e.message)}finally{B(!1)}},er=async()=>{G(!0);try{let a=await fetch("".concat(e,"/update-shipment?shipment_id=").concat(r),{method:"PUT",headers:{"Content-Type":"application/json",headers:{Authorization:J}},body:JSON.stringify({shipping_class:x.deliveryPartner,weight_in_kg:x.weight,box_dimensions:{length:x.dimensions.split("x")[0].trim(),width:x.dimensions.split("x")[1].trim(),height:x.dimensions.split("x")[2].trim()},new_orders:_,pieces:x.count,eway_bill_no:x.eway})});if(!a.ok)throw Error("Could not update shipment");let s=await a.json();"success"===s.status&&(b.Am.success("Shipment Updated successfully"),v([]),Z(),t.push("/dashboard/shipments"))}catch(e){b.Am.error(e.message)}},ea=async()=>{try{let t=await fetch("".concat(e,"/get-staff-locations?staff_id=").concat(localStorage.getItem("staff_id")),{headers:{Authorization:J}});if(!t.ok)throw Error("Could not get locations");let r=await t.json();A(r.location_list);let a=await fetch("".concat(e,"/get-delivery-shipping_class"),{headers:{Authorization:J}});if(!a.ok)throw Error("Could not get shipping class");let s=await a.json();I(s);let n=await fetch("".concat(e,"/get-warehouse-master"),{headers:{Authorization:J}});if(!n.ok)throw Error("COuld not get warehouse");let i=await n.json();"success"!==i.status&&b.Am.warn(i.message,{toastId:"wareHouseResWarn"}),W(i.result)}catch(e){b.Am.error(e.message)}},es=async t=>{try{let r=await fetch("".concat(e,"/get-orders-details-by-order_id?order_id=").concat(t),{headers:{Authorization:J}});if(!r.ok)throw Error("Could not get order by order ID");let a=await r.json();F(e=>[...e.filter(e=>parseInt(e.order_id)!==parseInt(t)),a.data])}catch(e){b.Am.error(e.message)}},en=async e=>{if(e.preventDefault(),U)try{if(!j.some(e=>e.order_id===parseInt(U)))throw Error("Order ID: ".concat(U," doesn't exist or is not available for current user."));if(_.includes(parseInt(U)))throw Error("Product ".concat(U," already scanned."));es(U),ee(parseInt(U)),b.Am.success("Order ID ".concat(U," found."))}catch(e){b.Am.error(e.message)}finally{V("")}},ei=async(e,t,r)=>{if(t)try{if(!j.some(e=>e.order_id===parseInt(t.text)))throw Error("Order ID: ".concat(t.text," doesn't exist or is not available for current user."));if(_.includes(parseInt(t.text)))throw Error("Product ".concat(t.text," already scanned."));es(t.text),ee(parseInt(t.text)),b.Am.success("Order ID ".concat(t.text," found."))}catch(e){b.Am.error(e.message)}finally{r()}else console.log(e)};return(0,p.useEffect)(()=>{Z()},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(y(),{children:(0,a.jsx)("title",{children:"BuyBack - Store Dashboard | Create Shipment"})}),(0,a.jsx)("div",{className:"flex justify-center bg-gray-100 min-h-screen relative -top-28",children:(0,a.jsxs)("div",{className:"container max-w-screen-xl rounded-lg h-fit bg-white my-4 p-4 mx-4 shadow",children:[(0,a.jsxs)("h3",{className:"text-xl font-bold",children:["Store Dashboard | Create Shipment ",(0,a.jsx)("i",{className:"fas fa-box"})," "]}),C?(0,a.jsxs)("div",{className:"bg-white border rounded p-4 mt-4 grid gap-4",children:[(0,a.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,a.jsx)(i.X,{className:"h-10 w-full rounded-md"}),(0,a.jsx)(i.X,{className:"h-10 w-1/4 rounded-md"})]}),(0,a.jsx)(i.X,{className:"h-6 w-1/4 rounded-md"}),(0,a.jsx)(i.X,{className:"h-12 w-full rounded-md"}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,a.jsx)(i.X,{className:"h-10 w-full rounded-md"}),(0,a.jsx)(i.X,{className:"h-10 w-full rounded-md"}),(0,a.jsx)(i.X,{className:"h-10 w-full rounded-md"}),(0,a.jsx)(i.X,{className:"h-10 w-full rounded-md"}),(0,a.jsx)(i.X,{className:"h-10 w-full rounded-md"}),(0,a.jsx)(i.X,{className:"h-10 w-full rounded-md"})]})]}):(0,a.jsxs)("div",{className:"bg-white border rounded p-4 mt-4",children:[(0,a.jsxs)("div",{className:"relative mb-2 flex gap-x-2",children:[(0,a.jsxs)("div",{className:"relative w-full",children:[(0,a.jsx)("label",{htmlFor:"barcodeInput",className:"text-sm",children:"Scan barcode or enter order ID"}),(0,a.jsx)("form",{onSubmit:en,className:"flex gap-x-4 w-full",children:(0,a.jsx)("div",{className:"relative w-full",children:(0,a.jsx)("input",{type:"text",id:"barcodeInput",ref:K,value:U,onChange:e=>V(e.target.value),className:"w-full py-1 h-9 px-3 border rounded ring-accent",placeholder:"Scan Barcode or enter order ID"})})})]}),(0,a.jsx)("div",{className:"relative flex items-end",children:(0,a.jsx)(o.A,{onPress:X,isIconOnly:!0,className:"px-3 py-1 h-9 bg-accent rounded text-white ring-accent whitespace-nowrap",children:(0,a.jsx)("i",{className:"fas fa-camera"})})})]}),(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)("div",{className:"relative border p-2 mt-4 overflow-x-auto",children:[(0,a.jsx)("h6",{className:"text-xl",children:"Selected Orders:"}),q.length>0?(0,a.jsxs)("table",{className:"min-w-full border rounded ".concat(k.checkbox?"border-red-300":""),children:[(0,a.jsx)("thead",{className:"bg-gray-200",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"px-2 py-2 text-sm font-semibold uppercase text-center",children:(0,a.jsx)("input",{type:"checkbox",name:"selectAll",id:"selectAll",onChange:()=>{N([]),F([])},checked:_.length>0})}),(0,a.jsx)("th",{className:"px-4 py-2 text-sm font-semibold uppercase text-center relative cursor-pointer",children:"Order ID"}),(0,a.jsx)("th",{className:"px-4 py-2 text-sm font-semibold uppercase text-center",children:"Variant Name"}),(0,a.jsx)("th",{className:"px-4 py-2 text-sm font-semibold uppercase text-center",children:"Brand"}),(0,a.jsx)("th",{className:"px-4 py-2 text-sm font-semibold uppercase text-center",children:"MOP"}),(0,a.jsx)("th",{className:"px-4 py-2 text-sm font-semibold uppercase text-center",children:"Bought Price"}),(0,a.jsx)("th",{className:"px-4 py-2 text-sm font-semibold uppercase text-center",children:"Created At"})]})}),(0,a.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:q.map((e,t)=>(0,a.jsxs)("tr",{className:"hover:bg-gray-100 transition-colors divide-x cursor-pointer",onClick:()=>ee(e.order_id),children:[(0,a.jsx)("td",{className:"px-2 py-3 text-sm font-medium text-center",children:(0,a.jsx)("input",{type:"checkbox",name:e.order_id,id:e.order_id,checked:_.includes(e.order_id),onChange:()=>ee(e.order_id)})}),(0,a.jsx)("td",{className:"px-4 py-3 text-sm font-medium text-center relative",children:e.order_id}),(0,a.jsx)("td",{className:"px-4 py-3 text-sm font-medium text-center",children:e.variant_name}),(0,a.jsx)("td",{className:"px-4 py-3 text-sm font-medium text-center",children:e.brand}),(0,a.jsx)("td",{className:"px-4 py-3 text-sm font-medium text-center",children:(0,s.fK)(e.MOP)}),(0,a.jsx)("td",{className:"px-4 py-3 text-sm font-medium text-center",children:(0,s.fK)(e.bought_price)}),(0,a.jsx)("td",{className:"px-4 py-3 text-sm font-medium text-center",children:new Date(e.created_at).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0})})]},t))})]}):D&&(0,a.jsx)("div",{className:"w-full border ".concat(k.checkbox?"border-red-300":""," py-4 text-center text-red-500 font-semibold"),children:"No devices selected!"}),k.checkbox&&(0,a.jsx)("p",{className:"text-red-500 mt-2 text-start",children:k.checkbox})]}),(0,a.jsx)("div",{className:"flex justify-between mt-6 items-center p-2",children:(0,a.jsxs)("div",{className:"w-full grid grid-cols-2 gap-4",children:[(0,a.jsxs)("div",{className:"relative flex flex-col justify-start",children:[(0,a.jsxs)("label",{htmlFor:"weight",className:"mb-2 text-sm font-medium text-gray-700",children:["Weight (kg) ",(0,a.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,a.jsx)("input",{type:"number",name:"weight",id:"weight",value:x.weight,onChange:Q,className:"px-4 py-2 rounded border border-gray-300 ring-primary ".concat(k.weight?"border-red-300":""),placeholder:"Enter weight",onKeyDown:e=>{("ArrowUp"===e.key||"ArrowDown"===e.key)&&e.preventDefault()}}),(k.weight||k.dimensions)&&(0,a.jsx)("p",{className:"text-red-500 text-sm mt-1",children:k.weight})]}),(0,a.jsxs)("div",{className:"relative flex flex-col justify-start",children:[(0,a.jsxs)("label",{htmlFor:"dimensions",className:"mb-2 text-sm font-medium text-gray-700",children:["Box Dimensions"," ",(0,a.jsxs)("span",{className:"hidden md:inline",children:[" ","(Length x Width x Height)"]})," ",(0,a.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,a.jsx)("input",{type:"text",name:"dimensions",id:"dimensions",value:x.dimensions,onChange:Q,className:"px-4 py-2 rounded border border-gray-300 ring-primary ".concat(k.dimensions?"border-red-300":""),placeholder:"Length x Width x Height"}),(k.weight||k.dimensions)&&(0,a.jsx)("p",{className:"text-red-500 text-sm mt-1",children:k.dimensions})]}),(0,a.jsxs)("div",{className:"relative w-full flex flex-col justify-start",children:[(0,a.jsxs)("label",{htmlFor:"deliveryPartner",className:"mb-2 text-sm font-medium text-gray-700",children:["Delivery Partner ",(0,a.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,a.jsx)("div",{className:"border rounded border-gray-300 ring-primary ".concat(k.deliveryPartner?"border-red-300":""),children:(0,a.jsxs)("select",{name:"deliveryPartner",id:"deliveryPartner",className:"rounded w-full outline-none h-full px-2 py-2",value:x.deliveryPartner,onChange:Q,children:[(0,a.jsx)("option",{value:"",disabled:!0,children:"Select Delivery Partner:"}),L&&L.map((e,t)=>(0,a.jsx)("option",{className:"capitalize",value:e,children:e},t))]})}),k.deliveryPartner&&(0,a.jsx)("p",{className:"text-red-500 text-sm mt-1",children:k.deliveryPartner})]}),(0,a.jsxs)("div",{className:"relative w-full flex flex-col justify-start",children:[(0,a.jsxs)("label",{htmlFor:"warehouse",className:"mb-2 text-sm font-medium text-gray-700",children:["Warehouse ",(0,a.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,a.jsx)("div",{className:"border rounded border-gray-300 ring-primary ".concat(k.warehouse?"border-red-300":""),children:(0,a.jsxs)("select",{name:"warehouse",id:"warehouse",className:"rounded w-full outline-none h-full px-2 py-2",value:x.warehouse,onChange:Q,children:[(0,a.jsx)("option",{value:"",disabled:!0,children:"Select Warehouse:"}),R&&R.length>0&&R.map((e,t)=>(0,a.jsx)("option",{className:"capitalize",value:e.id,children:e.name},t))]})}),k.warehouse&&(0,a.jsx)("p",{className:"text-red-500 text-sm mt-1",children:k.warehouse})]}),(0,a.jsxs)("div",{className:"relative w-full flex flex-col justify-start",children:[(0,a.jsxs)("label",{htmlFor:"pickupLocation",className:"mb-2 text-sm font-medium text-gray-700",children:["Pickup Location ",(0,a.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,a.jsx)("div",{className:"border rounded h-10 border-gray-300 ring-primary ".concat(k.pickupLocation?"border-red-300":""),children:(0,a.jsxs)("select",{name:"pickupLocation",id:"pickupLocation",className:"rounded w-full outline-none h-full px-2 py-2",value:x.pickupLocation,onChange:Q,children:[(0,a.jsx)("option",{value:"",disabled:!0,children:"Select Pickup Location:"}),S&&S.length>0&&S.map((e,t)=>(0,a.jsx)("option",{className:"capitalize",value:e.location_id,children:e.location_name},t))]})}),k.pickupLocation&&(0,a.jsx)("p",{className:"text-red-500 text-sm mt-1",children:k.pickupLocation})]}),(0,a.jsxs)("div",{className:"relative w-full flex flex-col justify-start",children:[(0,a.jsxs)("label",{htmlFor:"weight",className:"mb-2 text-sm font-medium text-gray-700",children:["E-Way Bill Number"," "]}),(0,a.jsx)("input",{type:"number",name:"eway",id:"eway",value:x.eway,onChange:Q,className:"px-4 py-2 h-10 w-full rounded border border-gray-300 ring-primary",placeholder:"Enter e-way bill number",onKeyDown:e=>{("ArrowUp"===e.key||"ArrowDown"===e.key)&&e.preventDefault()}})]})]})}),(0,a.jsx)("div",{className:"mt-4 grid place-content-end",children:(0,a.jsx)(o.A,{className:"bg-accent text-white rounded-md outline-none transition",onPress:()=>{r?er():et()},isLoading:M,children:"Submit"})})]})]})]})}),(0,a.jsx)(l.R,{isOpen:T,onOpenChange:z,children:(0,a.jsx)(d.A,{children:e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.k,{className:"flex flex-col gap-1",children:"Scan Barcode"}),(0,a.jsx)(u.I,{children:(0,a.jsx)(w,{videoConstraints:{facingMode:"environment",advanced:[{zoom:2}]},width:500,height:500,stopStream:()=>null,onUpdate:(t,r)=>{ei(t,r,e)}})}),(0,a.jsx)(m.R,{children:(0,a.jsx)(o.A,{className:"rounded",color:"danger",variant:"light",onPress:e,children:"Close"})})]})})})]})}},5152:function(e,t,r){e.exports=r(28864)},4483:function(e,t,r){"use strict";r.d(t,{X:function(){return m}});var a=r(15607),s=(0,r(44831).tv)({slots:{base:["group","relative","overflow-hidden","bg-content3 dark:bg-content2","pointer-events-none","before:opacity-100","before:absolute","before:inset-0","before:-translate-x-full","before:animate-[shimmer_2s_infinite]","before:border-t","before:border-content4/30","before:bg-gradient-to-r","before:from-transparent","before:via-content4","dark:before:via-default-700/10","before:to-transparent","after:opacity-100","after:absolute","after:inset-0","after:-z-10","after:bg-content3","dark:after:bg-content2","data-[loaded=true]:pointer-events-auto","data-[loaded=true]:overflow-visible","data-[loaded=true]:!bg-transparent","data-[loaded=true]:before:opacity-0 data-[loaded=true]:before:-z-10 data-[loaded=true]:before:animate-none","data-[loaded=true]:after:opacity-0"],content:["opacity-0","group-data-[loaded=true]:opacity-100"]},variants:{disableAnimation:{true:{base:"before:animate-none before:transition-none after:transition-none",content:"transition-none"},false:{base:"transition-background !duration-300",content:"transition-opacity motion-reduce:transition-none !duration-300"}}},defaultVariants:{}}),n=r(60798),i=r(49869),o=r(50262),l=r(67294),d=r(76733),c=r(85893),u=(0,a.Gp)((e,t)=>{let{Component:r,children:u,getSkeletonProps:m,getContentProps:h}=function(e){var t,r;let c=(0,d.w)(),[u,m]=(0,a.oe)(e,s.variantKeys),{as:h,children:p,isLoaded:x=!1,className:f,classNames:b,...g}=u,y=null!=(r=null!=(t=e.disableAnimation)?t:null==c?void 0:c.disableAnimation)&&r,w=(0,l.useMemo)(()=>s({...m,disableAnimation:y}),[(0,n.Xx)(m),y,p]),j=(0,i.W)(null==b?void 0:b.base,f);return{Component:h||"div",children:p,slots:w,classNames:b,getSkeletonProps:(e={})=>({"data-loaded":(0,o.PB)(x),className:w.base({class:(0,i.W)(j,null==e?void 0:e.className)}),...g}),getContentProps:(e={})=>({className:w.content({class:(0,i.W)(null==b?void 0:b.content,null==e?void 0:e.className)})})}}({...e});return(0,c.jsx)(r,{ref:t,...m(),children:(0,c.jsx)("div",{...h(),children:u})})});u.displayName="NextUI.Skeleton";var m=u}},function(e){e.O(0,[7242,2888,9774,179],function(){return e(e.s=54009)}),_N_E=e.O()}]);