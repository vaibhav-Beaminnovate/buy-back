(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8333],{37353:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/warehouse/shipment/[shipmentID]",function(){return t(17647)}])},98344:function(e,s,t){"use strict";var a=t(85893);t(67294),s.Z=e=>{let{url:s}=e;return(0,a.jsx)("div",{className:"border",children:(0,a.jsx)("iframe",{src:s,className:"w-full h-[450px]"})})}},17647:function(e,s,t){"use strict";t.r(s);var a=t(85893),r=t(11163),i=t(67294),n=t(9134),d=t(67957),l=t(96180),o=t(8455),c=t(49621),p=t(10405),m=t(44265),h=t(87740),x=t(86597),u=t(96476),f=t(14930),j=t(98344),g=t(9008),b=t.n(g),y=t(32553),N=t(86455),w=t.n(N);s.default=()=>{let e="https://buybackservice.unicornstore.in",s=(0,r.useRouter)(),[t,g]=(0,i.useState)([]),{shipmentID:N}=s.query,[v,_]=(0,i.useState)(!0),[S,C]=(0,i.useState)(null),[D,E]=(0,i.useState)(""),[k,P]=(0,i.useState)(!1),{isOpen:A,onOpen:I,onOpenChange:W}=(0,d.q)(),[B,O]=(0,i.useState)({}),z=(0,y.dQ)(),F=async()=>{try{_(!0);let s=await fetch("".concat(e,"/get-shipment/").concat(N,"?page=1&per_page=10&sort_desc=false"),{headers:{Authorization:z}});if(!s.ok)throw Error("Could not get shipment data");let t=await s.json();if("success"===t.status)g(t.shipment_data);else throw Error(t.message)}catch(e){n.Am.error(e.message,{toastId:"getShipmentError"}),C(e.message)}finally{_(!1)}};(0,i.useEffect)(()=>{s.isReady&&F()},[s,s.isReady]);let R=async(s,t)=>{try{let t=localStorage.getItem("warehouse_id"),a=await fetch("".concat(e,"/orders-data-wipe?order_id=").concat(s,"&shipment_id=").concat(N,"&datawipe_certificate=").concat(D,"&warehouse_id=").concat(t),{method:"PUT",headers:{Authorization:z}});if(!a.ok)throw Error("Could not update data wipe status");let r=await a.json();if("success"===r.status)n.Am.success("Data wipe status updated successfully",{toastId:"updateDataWipeSuccess"}),F();else throw Error(r.message)}catch(e){n.Am.error(e.message,{toastId:"updateDataWipeError"})}finally{P(!1),E(null),O({}),t()}},q=async e=>{!1===t.confirmed_delivery?w().fire({title:"Confirm Shipment Delivery",text:"Proceeding will confirm the shipment's delivery",icon:"question",showConfirmButton:!0,showCancelButton:!0,reverseButtons:!0,confirmButtonColor:"#42c8b7"}).then(s=>{s.isConfirmed&&(O(e),I())}):(I(),O(e))},T=e=>{let s=e.target.files[0];s&&"application/pdf"===s.type?(U(s),P(!0)):(n.Am.error("Please select a valid PDF file",{toastId:"selectValidPDFErrors"}),P(!1))},U=async s=>{if(!s){n.Am.error("Please select a pdf first");return}let t=new FormData;t.append("file",s);try{let s=await fetch("".concat(e,"/upload-pdf"),{method:"POST",headers:{Authorization:z},body:t});if(!s.ok)throw Error("Could not upload pdf");let a=await s.json();if("success"!==a.status)throw Error(a.message);E(a.url)}catch(e){n.Am.error(e.message,{toastId:"uploadPdfError"})}};return v?(0,a.jsx)("div",{className:"text-center mt-40",children:(0,a.jsx)(l.c,{color:"success"})}):S?(0,a.jsx)("p",{children:S}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"shadow-lg rounded-lg p-6 bg-white",children:[(0,a.jsx)(b(),{children:(0,a.jsxs)("title",{children:["BuyBack - Shipment ",N]})}),(0,a.jsxs)("div",{className:"bg-white rounded-lg overflow-hidden p-2",children:[(0,a.jsxs)("h3",{className:"text-2xl font-bold",children:["Update Shipment ",(0,a.jsx)("i",{className:"fas fa-box text-lg"})]}),(0,a.jsx)("div",{className:"mb-4 mt-2",children:(0,a.jsx)(o.d,{children:(0,a.jsxs)(c.G,{"aria-label":"Shipment Data",title:"Shipment Data",classNames:{base:"border border-gray-300 rounded",trigger:"hover:bg-accent-dimmed transition-all data-[open=true]:bg-accent-dimmed px-2",content:"p-4",title:"text-xl font-semibold"},children:[(0,a.jsxs)("h2",{className:"text-lg font-medium mb-2",children:["Shipment ID:"," ",(0,a.jsx)("span",{className:"font-medium",children:t.shipment_id})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,a.jsxs)("p",{className:"px-3 py-1 border rounded hover:bg-gray-100 transition-all",children:["Company:"," ",(0,a.jsx)("span",{className:"font-semibold",children:t.company})]}),(0,a.jsxs)("p",{className:"px-3 py-1 border rounded hover:bg-gray-100 transition-all",children:["Shipping Class:"," ",(0,a.jsx)("span",{className:"font-semibold",children:t.shipping_class})]}),(0,a.jsxs)("p",{className:"px-3 py-1 border rounded hover:bg-gray-100 transition-all",children:["Status:"," ",(0,a.jsx)("span",{className:"font-semibold",children:t.status})]}),(0,a.jsxs)("p",{className:"px-3 py-1 border rounded hover:bg-gray-100 transition-all",children:["Weight (kg):"," ",(0,a.jsx)("span",{className:"font-semibold",children:t.weight_in_kg})]}),(0,a.jsxs)("p",{className:"px-3 py-1 border rounded hover:bg-gray-100 transition-all",children:["Pickup Location:"," ",(0,a.jsx)("span",{className:"font-semibold",children:t.pickup_location})]}),(0,a.jsxs)("p",{className:"px-3 py-1 border rounded hover:bg-gray-100 transition-all",children:["Drop-off Warehouse:"," ",(0,a.jsx)("span",{className:"font-semibold",children:t.drop_off_warehouse})]}),(0,a.jsxs)("p",{className:"px-3 py-1 border rounded hover:bg-gray-100 transition-all",children:["Box Dimensions:"," ",(0,a.jsxs)("span",{className:"font-semibold",children:[t.box_dimensions&&Object.values(t.box_dimensions).join(" x ")," "]})]})]})]},"1")})}),t.orders&&t.orders.length>0?(0,a.jsxs)("div",{className:"px-2",children:[(0,a.jsx)("h2",{className:"text-xl font-semibold",children:"Orders"}),(0,a.jsx)("div",{className:"border rounded",children:(0,a.jsxs)("table",{className:"min-w-full table-auto  overflow-hidden",children:[(0,a.jsx)("thead",{className:"bg-gray-200",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"px-4 py-2 text-sm font-semibold uppercase text-center",children:"ID"}),(0,a.jsx)("th",{className:"px-4 py-2 text-sm font-semibold uppercase text-center",children:"Brand"}),(0,a.jsx)("th",{className:"px-4 py-2 text-sm font-semibold uppercase text-center",children:"Product"}),(0,a.jsx)("th",{className:"px-4 py-2 text-sm font-semibold uppercase text-center",children:"Variant"}),(0,a.jsx)("th",{className:"px-4 py-2 text-sm font-semibold uppercase text-center",children:"Status"}),(0,a.jsx)("th",{className:"px-4 py-2 text-sm font-semibold uppercase text-center",children:"Data Wipe"})]})}),(0,a.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:t.orders.map((e,s)=>(0,a.jsxs)("tr",{className:"divide-x",children:[(0,a.jsx)("td",{className:"px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-center capitalize",children:e.order_id}),(0,a.jsx)("td",{className:"px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-center capitalize",children:e.brand}),(0,a.jsx)("td",{className:"px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-center",children:e.product_name}),(0,a.jsx)("td",{className:"px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-center",children:e.variant_name}),(0,a.jsx)("td",{className:"px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-center",children:e.order_status}),(0,a.jsx)("td",{className:"whitespace-nowrap text-sm font-medium text-gray-900 text-center",children:0===e.data_wiped?(0,a.jsxs)("select",{name:"dataWipe",id:"dataWipe",value:e.data_wiped,onChange:()=>{q(e)},className:"w-full border rounded px-2 outline-none py-1.5",children:[(0,a.jsx)("option",{value:"1",children:"Wiped"}),(0,a.jsx)("option",{value:"0",children:"Not Wiped"})]}):(0,a.jsx)("span",{children:"Wiped"})})]},s))})]})})]}):(0,a.jsx)("div",{className:"flex justify-center border p-4 font-semibold text-red-500",children:"No orders to show"})]})]}),(0,a.jsx)(p.R,{isOpen:A,onOpenChange:W,backdrop:"opaque",children:(0,a.jsx)(m.A,{children:e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.k,{className:"flex flex-col gap-1",children:"Upload Data Wipe Confirmation"}),(0,a.jsxs)(x.I,{children:[(0,a.jsxs)("p",{className:"text-lg",children:["Order ID: ",null==B?void 0:B.order_id]}),(0,a.jsx)("input",{type:"file",name:"wipedCeritificate",id:"wipedCeritificate",className:"border border-gray-300 h-fit",onChange:T,accept:"application/pdf"}),(0,a.jsx)("div",{className:"".concat(k?"visible":"invisible"),children:(0,a.jsx)(j.Z,{url:D})})]}),(0,a.jsxs)(u.R,{children:[(0,a.jsx)(f.A,{color:"danger",variant:"light",className:"rounded",onPress:()=>{e(),O({})},children:"Close"}),(0,a.jsx)(f.A,{className:"bg-accent text-white rounded",onPress:()=>{R(B.order_id,e)},children:"Submit"})]})]})})})]})}}},function(e){e.O(0,[8166,7242,934,3628,2888,9774,179],function(){return e(e.s=37353)}),_N_E=e.O()}]);