(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[885],{4009:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/shipments/create-shipment/[[...shipmentID]]",function(){return s(4519)}])},4133:function(e,t,s){"use strict";var r=s(5893);s(7294);var a=s(4039);t.Z=e=>{let{header:t,...s}=e;return(0,r.jsx)(a.Q,{...s,header:e=>{let{state:{isEnter:s}}=e;return(0,r.jsxs)(r.Fragment,{children:[t,(0,r.jsx)("i",{className:"bi bi-chevron-down ml-auto transition-transform duration-200 ease-out flex items-center ".concat(s&&"rotate-180")})]})},className:"border-b",buttonProps:{className:e=>{let{isEnter:t}=e;return"flex items-center w-full p-4 text-left transition-all duration-200 hover:bg-accent-dimmed ".concat(t&&"bg-[#42c8b725]")}},contentProps:{className:"transition-height duration-200 ease-out"},panelProps:{className:"p-4"}})}},2115:function(e,t,s){"use strict";var r=s(5893);s(7294),t.Z=e=>{let{itemsPerPage:t,setItemsPerPage:s,currentPage:a,setCurrentPage:i,totalEntries:n,totalPages:o}=e;return(0,r.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-center pt-4",children:[(0,r.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,r.jsx)("label",{htmlFor:"items",className:"text-sm",children:"Items per page:"}),(0,r.jsx)("select",{id:"items",className:"border border-gray-300 rounded-md py-1 px-2 outline-none",value:t,onChange:e=>{s(parseInt(e.target.value,10)),i(1)},children:[15,20,25,30,35].map(e=>(0,r.jsx)("option",{value:e,children:e},e))})]}),(0,r.jsxs)("div",{className:"flex items-center space-x-2 mt-3 md:mt-0",children:[(0,r.jsxs)("span",{className:"text-sm text-gray-700",children:[t*a-t+1," to"," ",t*a<n?t*a:n," ","of ",n]}),(0,r.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,r.jsx)("button",{onClick:()=>i(1),disabled:1===a,className:"p-2 rounded-full ".concat(a>1?"text-accent":"text-gray-400"),children:(0,r.jsx)("i",{className:"bi bi-chevron-bar-left text-lg"})}),(0,r.jsx)("button",{onClick:()=>i(e=>e>1?e-1:e),disabled:1===a,className:"p-2 rounded-full ".concat(a>1?"text-accent":"text-gray-400"),children:(0,r.jsx)("i",{className:"bi bi-chevron-left text-lg"})}),(0,r.jsx)("button",{onClick:()=>i(e=>e<o?e+1:e),disabled:a===o,className:"p-2 rounded-full ".concat(a<o?"text-accent":"text-gray-400"),children:(0,r.jsx)("i",{className:"bi bi-chevron-right text-lg"})}),(0,r.jsx)("button",{onClick:()=>i(o),disabled:a===o,className:"p-2 rounded-full ".concat(a<o?"text-accent":"text-gray-400"),children:(0,r.jsx)("i",{className:"bi bi-chevron-bar-right text-lg"})})]})]})]})}},4519:function(e,t,s){"use strict";s.r(t);var r=s(5893);s(4133),s(2115);var a=s(5066),i=s(7957),n=s(9412),o=s(1680),l=s(199),c=s(7740),d=s(6597),m=s(6476),h=s(1163),u=s(7294),x=s(5152),p=s.n(x),g=s(9134);let f=p()(()=>s.e(802).then(s.bind(s,2802)),{loadableGenerated:{webpack:()=>[2802]},ssr:!1});t.default=()=>{let e="https://buybackservice.unicornstore.in",t=(0,h.useRouter)(),{shipmentID:s}=t.query,[x,p]=(0,u.useState)({dateFrom:"",dateTo:"",priceFrom:"",priceTo:"",brands:[],location:""}),[b,y]=(0,u.useState)({weight:"",dimensions:"",location:"",deliveryPartner:"",warehouse:"",count:"",eway:"",requestedOn:"",pickupLocation:""}),[w,j]=(0,u.useState)([{id:1,Name:""}]),N=(0,u.useRef)(null),[v,_]=(0,u.useState)(null),[k,S]=(0,u.useState)([]),[P,A]=(0,u.useState)({weight:"",dimensions:"",checkbox:"",location:"",warehouse:"",count:"",eway:"",requestedOn:"",pickupLocation:""}),[C,I]=(0,u.useState)([]),[E,D]=(0,u.useState)(!1),[L,O]=(0,u.useState)(!1),[W,q]=(0,u.useState)([]),[F,z]=(0,u.useState)({}),[R,T]=(0,u.useState)(!0),{isOpen:U,onOpen:B,onOpenChange:H}=(0,i.q)(),[K,M]=(0,u.useState)([]),[J,Q]=(0,u.useState)(null),[X,Z]=(0,u.useState)(!1),[$,G]=(0,u.useState)(15),[V,Y]=(0,u.useState)(null),[ee,et]=(0,u.useState)(1),[es,er]=(0,u.useState)(null),[ea,ei]=(0,u.useState)(!1),[en,eo]=(0,u.useState)(""),el=(0,u.useRef)(null),ec=(0,a.dQ)(),ed=async()=>{try{let t=await fetch("".concat(e,"/get-shipment/").concat(s),{headers:{Authorization:ec}});if(!t.ok)throw Error("Could not get shipment data");let r=await t.json();_(r.shipment_data.orders),y({weight:r.shipment_data.weight_in_kg,dimensions:Object.values(r.shipment_data.box_dimensions).join(" x "),location:"",deliveryPartner:r.shipment_data.shipping_class,warehouse:r.shipment_data.drop_off_warehouse,count:r.shipment_data.box_count||""}),p(e=>({...e,location:r.shipment_data.pickup_location})),r.shipment_data.orders.forEach(e=>S(t=>[...t,e.order_id])),eu(r.shipment_data.pickup_location)}catch(e){g.Am.error(e.message,{toastId:"getShipmentByIDError"})}};(0,u.useEffect)(()=>{t.isReady&&s&&(N.current.click(),ed())},[t,t.isReady]);let em=e=>{let{name:t,value:s}=e.target;y({...b,[t]:s}),A(e=>{let r={...e};return"weight"===t&&(!s.trim()||s<0)?r.weight="Weight must be a positive number":"weight"===t&&(r.weight=""),"dimensions"!==t||s.trim()&&/^\d+(\.\d+)?\s*x\s*\d+(\.\d+)?\s*x\s*\d+(\.\d+)?$/.test(b.dimensions)?"dimensions"===t&&(r.dimensions=""):r.dimensions="Dimensions must be in the format: Length x Width x Height","deliveryPartner"===t&&(!s.trim()||s<0)?r.deliveryPartner="Delivery partner is required":"deliveryPartner"===t&&(r.deliveryPartner=""),"warehouse"===t&&(!s.trim()||s<0)?r.warehouse="Warehouse is required":"warehouse"===t&&(r.warehouse=""),"eway"===t&&(!s.trim()||s<0)?r.eway="E-Way bill number is required":"eway"===t&&(r.eway=""),"pickupLocation"===t&&(s.trim()?r.pickupLocation="":r.pickupLocation="Pickup location is required"),r})},eh=()=>{let e={};return(!b.weight||""===b.weight.trim()||b.weight<=0)&&(e.weight="Weight must be a positive number"),/^\d+(\.\d+)?\s*x\s*\d+(\.\d+)?\s*x\s*\d+(\.\d+)?$/.test(b.dimensions)||(e.dimensions="Dimensions must be in the format: Length x Width x Height"),b.dimensions.trim()||(e.dimensions="Dimensions is required"),b.deliveryPartner.trim()||(e.deliveryPartner="Delivery partner is required"),b.warehouse.trim()||(e.warehouse="Warehosue is required"),b.pickupLocation.trim()||(e.pickupLocation="Pickup location is required"),b.eway.trim()||(e.eway="E-Way bill number is required"),console.log(e),A(e),0===Object.keys(e).length},eu=async t=>{O(!0);try{D(!0);let t=localStorage.getItem("staff_id"),r=await fetch("".concat(e,"/get-orders_ids-by-staff?staff_id=").concat(t),{headers:{Authorization:ec}});if(!r.ok)throw Error("Could not get orders");let a=await r.json();s?_(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=new Set(e.map(e=>e.order_id)),s=a.data.filter(e=>!t.has(e.order_id));return[...e,...s]}):(_(a.data),Q(a.data.filter(e=>!k.includes(e.order_id))),er(a.total_count),Y(Math.ceil(a.total_count/$)))}catch(e){g.Am.error(e.message,{toastId:"getOrderDataResError"})}finally{setTimeout(()=>{D(!1)},600)}};(0,u.useEffect)(()=>{t.isReady&&(ef(),eu())},[t,t.isReady]);let ex=e=>{let t;S(t=k.includes(e)?k.filter(t=>t!==e):[...k,e]),Q(()=>v.filter(e=>!t.includes(e.order_id))),M(e=>e.filter(e=>t.includes(e.order_id))),0===t.length?A(e=>({...e,checkbox:"Please scan atleast one order."})):A(e=>({...e,checkbox:""}))},ep=async()=>{if(0===k.length){eh(),A(e=>({...e,checkbox:"Please scan at least one order."}));return}if(eh())try{ei(!0);let s=await fetch("".concat(e,"/create-shipment-package?staff_id=1"),{method:"Post",headers:{"Content-Type":"application/json",headers:{Authorization:ec}},body:JSON.stringify({pickup_location_id:b.pickupLocation,warehouse_id:b.warehouse,shipping_class:b.deliveryPartner,orders:k,weight_in_kg:b.weight,box_dimensions:{length:b.dimensions.split("x")[0].trim(),width:b.dimensions.split("x")[1].trim(),height:b.dimensions.split("x")[2].trim()},pieces:b.count,eway_bill_no:b.eway,pickup_datetime:b.requestedOn})});if(!s.ok)throw Error("Could not submit shipment");let r=await s.json();if("success"!==r.status)throw Error(r.message);g.Am.success("Shipment submitted successfully",{toastId:"submitShipmentSuccess"}),_([]),eu(x.location),t.push("/dashboard/shipments")}catch(e){g.Am.error(e.message,{toastId:"SubmitShipmentError"})}finally{ei(!1)}},eg=async()=>{try{let r=await fetch("".concat(e,"/update-shipment?shipment_id=").concat(s),{method:"PUT",headers:{"Content-Type":"application/json",headers:{Authorization:ec}},body:JSON.stringify({shipping_class:b.deliveryPartner,weight_in_kg:b.weight,box_dimensions:{length:b.dimensions.split("x")[0].trim(),width:b.dimensions.split("x")[1].trim(),height:b.dimensions.split("x")[2].trim()},new_orders:k,pieces:b.count,eway_bill_no:b.eway})});if(!r.ok)throw Error("Could not update shipment");let a=await r.json();"success"===a.status&&(g.Am.success("Shipment Updated successfully",{toastId:"shipmentUpdateToast"}),_([]),eu(x.location),t.push("/dashboard/shipments"))}catch(e){g.Am.error(e.message,{toastId:"UpdateShipmentError"})}},ef=async()=>{try{let t=await fetch("".concat(e,"/get-staff-locations?staff_id=").concat(localStorage.getItem("staff_id")),{headers:{Authorization:ec}});if(!t.ok)throw Error("Could not get locations");let s=await t.json();I(s.location_list);let r=await fetch("".concat(e,"/get-delivery-shipping_class"),{headers:{Authorization:ec}});if(!r.ok)throw Error("Could not get shipping class");let a=await r.json();q(a);let i=await fetch("".concat(e,"/get-warehouse-master"),{headers:{Authorization:ec}});if(!i.ok)throw Error("COuld not get warehouse");let n=await i.json();"success"!==n.status&&g.Am.warn(n.message,{toastId:"wareHouseResWarn"}),z(n.result)}catch(e){g.Am.error(e.message,{toastId:"getLocationsAndDeliveryPartnerAndWarehouse"})}},eb=async t=>{try{let s=await fetch("".concat(e,"/get-orders-details-by-order_id?order_id=").concat(t),{headers:{Authorization:ec}});if(!s.ok)throw Error("Could not get order by order ID");let r=await s.json();M(e=>{console.log({prev:e});let s=[...e.filter(e=>parseInt(e.order_id)!==parseInt(t)),r.data];return console.log({newArr:s}),s})}catch(e){g.Am.error(e.message)}},ey=async e=>{if(e.preventDefault(),en)try{if(!v.some(e=>e.order_id===parseInt(en)))throw Error("Order ID: ".concat(en," doesn't exist or is not available for current user."));if(k.includes(parseInt(en)))throw Error("Product ".concat(en," already scanned."));eb(en),ex(parseInt(en)),g.Am.success("Order ID ".concat(en," found."))}catch(e){g.Am.error(e.message)}finally{eo("")}},ew=async(e,t,s)=>{if(t)try{if(!v.some(e=>e.order_id===parseInt(t.text)))throw Error("Order ID: ".concat(en," doesn't exist or is not available for current user."));if(k.includes(parseInt(t.text)))throw Error("Product ".concat(t.text," already scanned."));eb(t.text),ex(parseInt(t.text)),g.Am.success("Order ID ".concat(t.text," found."))}catch(e){g.Am.error(e.message)}finally{s()}else console.log(e)};return(0,u.useEffect)(()=>{x.location&&eu(x.location)},[ee,$]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"flex justify-center bg-gray-100 min-h-screen relative -top-28",children:(0,r.jsxs)("div",{className:"container max-w-screen-xl rounded-lg h-fit bg-white my-8 p-4 mx-4",children:[(0,r.jsxs)("h3",{className:"text-xl font-bold",children:["Create Shipment ",(0,r.jsx)("i",{className:"fas fa-box"})," "]}),(0,r.jsxs)("div",{className:"bg-white border rounded p-4 mt-4",children:[(0,r.jsxs)("div",{className:"relative mb-2 flex gap-x-2",children:[(0,r.jsxs)("div",{className:"relative w-full",children:[(0,r.jsx)("label",{htmlFor:"barcodeInput",className:"text-sm",children:"Scan barcode or enter order ID"}),(0,r.jsx)("form",{onSubmit:ey,className:"flex gap-x-4 w-full",children:(0,r.jsx)("div",{className:"relative w-full",children:(0,r.jsx)("input",{type:"text",id:"barcodeInput",ref:el,value:en,onChange:e=>eo(e.target.value),className:"w-full py-1 h-9 px-3 border rounded ring-accent",placeholder:"Scan Barcode or enter order ID"})})})]}),(0,r.jsx)("div",{className:"relative flex items-end",children:(0,r.jsxs)("button",{onClick:()=>{B(),T(!0)},className:"px-3 py-1 h-9 bg-accent rounded text-white ring-accent whitespace-nowrap",children:[(0,r.jsx)("i",{className:"fas fa-camera"})," Scan barcode with camera"]})})]}),(0,r.jsxs)("div",{className:"overflow-x-auto",children:[(0,r.jsxs)("div",{className:"relative border p-2 mt-4",children:[(0,r.jsx)("h6",{className:"text-xl",children:"Selected Orders:"}),K.length>0?(0,r.jsxs)("table",{className:"min-w-full border rounded ".concat(P.checkbox?"border-red-300":""),children:[(0,r.jsx)("thead",{className:"bg-gray-200",children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"px-2 py-2 text-sm font-semibold uppercase text-center",children:(0,r.jsx)("input",{type:"checkbox",name:"selectAll",id:"selectAll",onChange:()=>{S([]),Q(v),M([])},checked:k.length>0})}),(0,r.jsx)("th",{className:"px-4 py-2 text-sm font-semibold uppercase text-center relative cursor-pointer",children:"Order ID"}),(0,r.jsx)("th",{className:"px-4 py-2 text-sm font-semibold uppercase text-center",children:"Variant Name"}),(0,r.jsx)("th",{className:"px-4 py-2 text-sm font-semibold uppercase text-center",children:"Brand"}),(0,r.jsx)("th",{className:"px-4 py-2 text-sm font-semibold uppercase text-center",children:"MOP"}),(0,r.jsx)("th",{className:"px-4 py-2 text-sm font-semibold uppercase text-center",children:"Bought Price"}),(0,r.jsx)("th",{className:"px-4 py-2 text-sm font-semibold uppercase text-center",children:"Created At"})]})}),(0,r.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:K.map((e,t)=>(0,r.jsxs)("tr",{className:"hover:bg-gray-100 transition-colors divide-x cursor-pointer",onClick:()=>ex(e.order_id),children:[(0,r.jsx)("td",{className:"px-2 py-3 text-sm font-medium text-center",children:(0,r.jsx)("input",{type:"checkbox",name:e.order_id,id:e.order_id,checked:k.includes(e.order_id),onChange:()=>ex(e.order_id)})}),(0,r.jsx)("td",{className:"px-4 py-3 text-sm font-medium text-center relative",children:e.order_id}),(0,r.jsx)("td",{className:"px-4 py-3 text-sm font-medium text-center",children:e.variant_name}),(0,r.jsx)("td",{className:"px-4 py-3 text-sm font-medium text-center",children:e.brand}),(0,r.jsx)("td",{className:"px-4 py-3 text-sm font-medium text-center",children:(0,a.fK)(e.MOP)}),(0,r.jsx)("td",{className:"px-4 py-3 text-sm font-medium text-center",children:(0,a.fK)(e.bought_price)}),(0,r.jsx)("td",{className:"px-4 py-3 text-sm font-medium text-center",children:new Date(e.created_at).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0})})]},t))})]}):L&&(0,r.jsx)("div",{className:"w-full border ".concat(P.checkbox?"border-red-300":""," py-4 text-center text-red-500 font-semibold"),children:"No devices selected!"}),P.checkbox&&(0,r.jsx)("p",{className:"text-red-500 mt-2 text-start",children:P.checkbox})]}),(0,r.jsx)("div",{className:"flex justify-between mt-6 items-center p-2",children:(0,r.jsxs)("div",{className:"w-full grid grid-cols-2 gap-4",children:[(0,r.jsxs)("div",{className:"relative flex flex-col",children:[(0,r.jsxs)("label",{htmlFor:"weight",className:"mb-2 text-sm font-medium text-gray-700",children:["Weight (kg) ",(0,r.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,r.jsx)("input",{type:"number",name:"weight",id:"weight",value:b.weight,onChange:em,className:"px-4 py-2 rounded border border-gray-300 ring-primary ".concat(P.weight?"border-red-300":""),placeholder:"Enter weight",onKeyDown:e=>{("ArrowUp"===e.key||"ArrowDown"===e.key)&&e.preventDefault()}}),P.weight&&(0,r.jsx)("p",{className:"text-red-500 text-sm mt-1",children:P.weight})]}),(0,r.jsxs)("div",{className:"relative flex flex-col",children:[(0,r.jsxs)("label",{htmlFor:"dimensions",className:"mb-2 text-sm font-medium text-gray-700",children:["Box Dimensions (Length x Width x Height)"," ",(0,r.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,r.jsx)("input",{type:"text",name:"dimensions",id:"dimensions",value:b.dimensions,onChange:em,className:"px-4 py-2 rounded border border-gray-300 ring-primary ".concat(P.dimensions?"border-red-300":""),placeholder:"Length x Width x Height"}),P.dimensions&&(0,r.jsx)("p",{className:"text-red-500 text-sm mt-1",children:P.dimensions})]}),(0,r.jsxs)("div",{className:"relative w-full",children:[(0,r.jsxs)("label",{htmlFor:"deliveryPartner",className:"mb-2 text-sm font-medium text-gray-700",children:["Select Delivery Partner"," ",(0,r.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,r.jsx)("div",{className:"border rounded border-gray-300 ring-primary ".concat(P.deliveryPartner?"border-red-300":""),children:(0,r.jsxs)("select",{name:"deliveryPartner",id:"deliveryPartner",className:"rounded w-full outline-none h-full px-2 py-2",value:b.deliveryPartner,onChange:em,children:[(0,r.jsx)("option",{value:"",disabled:!0,children:"Select Delivery Partner:"}),W&&W.map((e,t)=>(0,r.jsx)("option",{className:"capitalize",value:e,children:e},t))]})}),P.deliveryPartner&&(0,r.jsx)("p",{className:"text-red-500 text-sm mt-1",children:P.deliveryPartner})]}),(0,r.jsxs)("div",{className:"relative w-full",children:[(0,r.jsxs)("label",{htmlFor:"warehouse",className:"mb-2 text-sm font-medium text-gray-700",children:["Select Warehouse ",(0,r.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,r.jsx)("div",{className:"border rounded border-gray-300 ring-primary ".concat(P.warehouse?"border-red-300":""),children:(0,r.jsxs)("select",{name:"warehouse",id:"warehouse",className:"rounded w-full outline-none h-full px-2 py-2",value:b.warehouse,onChange:em,children:[(0,r.jsx)("option",{value:"",disabled:!0,children:"Select Warehouse:"}),F&&F.length>0&&F.map((e,t)=>(0,r.jsx)("option",{className:"capitalize",value:e.id,children:e.name},t))]})}),P.warehouse&&(0,r.jsx)("p",{className:"text-red-500 text-sm mt-1",children:P.warehouse})]}),(0,r.jsxs)("div",{className:"relative w-full",children:[(0,r.jsxs)("label",{htmlFor:"pickupLocation",className:"mb-2 text-sm font-medium text-gray-700",children:["Select Pickup Location"," ",(0,r.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,r.jsx)("div",{className:"border rounded h-10 border-gray-300 ring-primary ".concat(P.pickupLocation?"border-red-300":""),children:(0,r.jsxs)("select",{name:"pickupLocation",id:"pickupLocation",className:"rounded w-full outline-none h-full px-2 py-2",value:b.pickupLocation,onChange:em,children:[(0,r.jsx)("option",{value:"",disabled:!0,children:"Select Pickup Location:"}),C&&C.length>0&&C.map((e,t)=>(0,r.jsx)("option",{className:"capitalize",value:e.location_id,children:e.location_name},t))]})}),P.pickupLocation&&(0,r.jsx)("p",{className:"text-red-500 text-sm mt-1",children:P.pickupLocation})]}),(0,r.jsxs)("div",{className:"relative w-full",children:[(0,r.jsxs)("label",{htmlFor:"weight",className:"mb-2 text-sm font-medium text-gray-700",children:["E-Way Bill Number ",(0,r.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,r.jsx)("input",{type:"number",name:"eway",id:"eway",value:b.eway,onChange:em,className:"px-4 py-2 h-10 w-full rounded border border-gray-300 ring-primary ".concat(P.eway?"border-red-300":""),placeholder:"Enter e-way bill number",onKeyDown:e=>{("ArrowUp"===e.key||"ArrowDown"===e.key)&&e.preventDefault()}}),P.eway&&(0,r.jsx)("p",{className:"text-red-500 text-sm mt-1",children:P.eway})]})]})}),(0,r.jsx)("div",{className:"mt-4 grid place-content-end",children:(0,r.jsx)(n.A,{className:"bg-accent text-white rounded-md outline-none transition",onClick:()=>{s?eg():ep()},isLoading:ea,children:"Submit"})})]})]})]})}),(0,r.jsx)(o.R,{isOpen:U,onOpenChange:H,children:(0,r.jsx)(l.A,{children:e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.k,{className:"flex flex-col gap-1",children:"Scan Barcode"}),(0,r.jsx)(d.I,{children:(0,r.jsx)(f,{width:500,height:500,stopStream:()=>T(!1),onUpdate:(t,s)=>{ew(t,s,e)}})}),(0,r.jsxs)(m.R,{children:[(0,r.jsx)(n.A,{className:"rounded",color:"danger",variant:"light",onPress:e,children:"Close"}),(0,r.jsx)(n.A,{className:"bg-accent text-white rounded",type:"submit",children:"Submit"})]})]})})})]})}}},function(e){e.O(0,[23,136,835,562,260,242,251,888,774,179],function(){return e(e.s=4009)}),_N_E=e.O()}]);