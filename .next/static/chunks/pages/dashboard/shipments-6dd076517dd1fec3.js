(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5088],{91950:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/shipments",function(){return s(61185)}])},12115:function(e,t,s){"use strict";var a=s(85893);s(67294),t.Z=e=>{let{itemsPerPage:t,setItemsPerPage:s,currentPage:r,setCurrentPage:n,totalEntries:i,totalPages:c}=e;return(0,a.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-center pt-4",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,a.jsx)("label",{htmlFor:"items",className:"text-sm",children:"Items per page:"}),(0,a.jsx)("select",{id:"items",className:"border border-gray-300 rounded-md py-1 px-2 ring-accent",value:t,onChange:e=>{s(parseInt(e.target.value,10)),n(1)},children:[15,20,25,30,35].map(e=>(0,a.jsx)("option",{value:e,children:e},e))})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-2 mt-3 md:mt-0",children:[(0,a.jsxs)("span",{className:"text-sm text-gray-700",children:[t*r-t+1," to"," ",t*r<i?t*r:i," ","of ",i]}),(0,a.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,a.jsx)("button",{onClick:()=>n(1),disabled:1===r,className:"p-2 rounded-full ring-accent ".concat(r>1?"text-accent":"text-gray-400"),children:(0,a.jsx)("i",{className:"bi bi-chevron-bar-left text-lg"})}),(0,a.jsx)("button",{onClick:()=>n(e=>e>1?e-1:e),disabled:1===r,className:"p-2 rounded-full ring-accent ".concat(r>1?"text-accent":"text-gray-400"),children:(0,a.jsx)("i",{className:"bi bi-chevron-left text-lg"})}),(0,a.jsx)("button",{onClick:()=>n(e=>e<c?e+1:e),disabled:r===c,className:"p-2 rounded-full ring-accent ".concat(r<c?"text-accent":"text-gray-400"),children:(0,a.jsx)("i",{className:"bi bi-chevron-right text-lg"})}),(0,a.jsx)("button",{onClick:()=>n(c),disabled:r===c,className:"p-2 rounded-full ring-accent ".concat(r<c?"text-accent":"text-gray-400"),children:(0,a.jsx)("i",{className:"bi bi-chevron-bar-right text-lg"})})]})]})]})}},4625:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});var a=s(67294);function r(e,t){let[s,r]=(0,a.useState)(e);return(0,a.useEffect)(()=>{let s=setTimeout(()=>{r(e)},t);return()=>{clearTimeout(s)}},[e]),s}},61185:function(e,t,s){"use strict";s.r(t);var a=s(85893),r=s(67294),n=s(4625),i=s(12115),c=s(11163),l=s(9134),o=s(32553),d=s(41664),h=s.n(d),m=s(5152),u=s.n(m),p=s(86455),x=s.n(p),g=s(67957),b=s(4483),f=s(10405),j=s(44265),y=s(87740),N=s(86597),w=s(77161),v=s(93218),_=s(44877),S=s(42967),k=s(96180),C=s(47168),D=s(78148),A=s(29276),O=s(96476),q=s(14930),E=s(9008),P=s.n(E);u()(()=>s.e(8607).then(s.t.bind(s,68607,23)),{loadableGenerated:{webpack:()=>[68607]},ssr:!1}),t.default=()=>{let e="https://buybackservice.unicornstore.in";(0,c.useRouter)();let[t,s]=(0,r.useState)(null),[d,m]=(0,r.useState)(10),[u,p]=(0,r.useState)(1),[E,T]=(0,r.useState)(null),[I,R]=(0,r.useState)(null),[F,z]=(0,r.useState)(""),B=(0,n.Z)(F,500),[X,Z]=(0,r.useState)(!0),[J,L]=(0,r.useState)(""),{isOpen:Q,onOpen:M,onOpenChange:U}=(0,g.q)(),[W,G]=(0,r.useState)(new Set([])),K=[{key:"shipment_id",label:"Shipment ID"},{key:"store",label:"Store"},{key:"shipping_class",label:"Shipping Class"},{key:"weight_in_kg",label:"Weight"},{key:"status",label:"Status"}],[H,V]=(0,r.useState)(""),[Y,$]=(0,r.useState)({table:"",requestedOn:""}),ee=(0,o.dQ)(),et=async()=>{let t=localStorage.getItem("staff_id");try{Z(!0);let a=await fetch("".concat(e,"/get-all-shipments?page=").concat(u,"&per_page=").concat(d,"&sort_desc=false&search=").concat(F,"&staff_id=").concat(t),{headers:{Authorization:ee}});if(!a.ok)throw Error("Could not get shipment Res");let r=await a.json();s(r.data),R(r.total_count),T(Math.ceil(r.total_count/d)),r.data.forEach(e=>{L(t=>({...t,[e.shipment_id]:e.status}))})}catch(e){l.Am.error(e.message)}finally{setTimeout(()=>{Z(!1)},400)}};(0,r.useEffect)(()=>{et()},[u,d]),(0,r.useEffect)(()=>{""!==B&&(p(1),et())},[B,F]);let es=async(t,s)=>{try{let a=await fetch("".concat(e,"/update-shipment?shipment_id=").concat(t),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:ee},body:JSON.stringify({status:s})});if(!a.ok)throw Error("Could not update shipment");let r=await a.json();if("success"!==r.status)throw Error(r.message);L(e=>({...e,[t]:s})),et()}catch(e){l.Am.error(e.message)}},ea=async t=>{x().fire({title:"Delete Shipment?",text:"Are you sure you want to delete this item? This action cannot be undone.",icon:"warning",showConfirmButton:!0,showCancelButton:!0,reverseButtons:!0,confirmButtonColor:"#dc2626",cancelButtonColor:"#9ca3af"}).then(async s=>{if(s.isConfirmed)try{let s=await fetch("".concat(e,"/delete-shipment?shipment_id=").concat(t),{method:"DELETE",headers:{Authorization:ee}});if(!s.ok)throw Error("Could not delete shipment");let a=await s.json();if("success"!==a.status)throw Error(a.message);l.Am.success(a.message),et()}catch(e){l.Am.error(e.message)}})},er=async t=>{try{let s=await fetch("".concat(e,"/packing-slip-pdf/?shipment_id=").concat(t),{headers:{Authorization:ee}});if(!s.ok)throw Error("Could not get slip");let a=await s.json();if("success"!==a.status)throw Error(a.message);window.open(a.url,"_blank")}catch(e){l.Am.error(e.message)}},en=async t=>{try{let s=await fetch("".concat(e,"/track-delivery/?shipment_id=").concat(t),{method:"POST",headers:{Authorization:ee}});if(!s.ok)throw Error("Could not track shipment");let a=await s.json();x().fire({title:"Shipment Status",text:a.shipment_status||a.message,icon:a.status})}catch(e){l.Am.error(e.message)}},ei=e=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e),ec=e=>{let t=e.target.value,s=new Date;s.setDate(s.getDate());let a=new Date(s);a.setDate(s.getDate()+8);let r={};if(t){let e=new Date(t);e<s||e>a?r.requestedOn="Please select a date between ".concat(ei(new Date(s).setDate(s.getDate()+1))," and ").concat(ei(a)):r.requestedOn=""}else r.requestedOn="Requested Date is required";$(e=>({...e,...r}))},el=e=>{let t={};0===Array.from(e,Number).length?t.table="At least one shipment is required":t.table="",$(e=>({...e,...t}))},eo=()=>{let e=new Date;e.setDate(e.getDate());let t=new Date(e);t.setDate(e.getDate()+8);let s={};if(0===Array.from(W,Number).length?s.table="At least one shipment is required":s.table="",H.trim()){let a=new Date(H);a<e||a>t?s.requestedOn="Please select a date between ".concat(ei(new Date(e).setDate(e.getDate()+1))," and ").concat(ei(t)):s.requestedOn=""}else s.requestedOn="Requested Date is required";return $(s),Object.keys(s).every(e=>""===s[e])},ed=async t=>{try{if(!eo())return;t();let s=Array.from(W,Number),a=await fetch("".concat(e,"/create-shipment-pickup"),{method:"POST",headers:{"Content-Type":"application/json",headers:{Authorization:ee}},body:JSON.stringify({staff_id:localStorage.getItem("staff_id"),pickup_datetime:H,shipment_ids:s})});if(!a.ok)throw Error("Could not create shipment pickup");let r=await a.json();if("success"!==r.status)throw Error(r.message);l.Am.success(r.message)}catch(e){l.Am.error(e.message)}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex justify-center bg-gray-100 min-h-screen h-full relative -top-28",children:[(0,a.jsx)(P(),{children:(0,a.jsx)("title",{children:"BuyBack - Store Dashboard | Shipments"})}),(0,a.jsx)("div",{className:"container max-w-screen-xl mx-4",children:(0,a.jsxs)("div",{className:"flex flex-col bg-white p-4 my-4 rounded-lg shadow justify-center space-y-2",children:[(0,a.jsx)("h2",{className:"text-xl font-semibold",children:"Store Dashboard | Shipments"}),(0,a.jsx)("div",{className:"relative flex gap-x-4",children:(0,a.jsxs)(h(),{href:"/dashboard/shipments/create-shipment",className:"bg-accent text-white px-4 py-2 rounded ring-accent",children:[(0,a.jsx)("i",{className:"fas fa-plus"})," Create Shipment"]})}),(0,a.jsx)("label",{className:"text-sm text-gray-700",htmlFor:"searchQuery",children:"Search by Shipment ID, Store, Shipment Class or Status"}),(0,a.jsx)("div",{className:"w-full grid grid-cols-1 md:grid-cols-6 md:space-x-2",children:(0,a.jsx)("input",{type:"text",id:"searchQuery",className:"border border-gray-400 py-2 px-2 rounded-md ring-accent col-span-6",name:"search-bar",value:F,onChange:e=>z(e.target.value),spellCheck:!1,autoComplete:"off",placeholder:"Search by Customer Name, Final Price or Product Name"})}),(0,a.jsx)("div",{className:"overflow-auto p-4",children:(0,a.jsxs)("table",{className:"min-w-full table-auto bg-white rounded overflow-hidden shadow whitespace-nowrap",children:[(0,a.jsx)("thead",{className:"bg-gray-200",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"text-center py-2.5 px-2",children:"Shipment ID"}),(0,a.jsx)("th",{className:"text-center py-2.5 px-2",children:"Store"}),(0,a.jsx)("th",{className:"text-center py-2.5 px-2",children:"Shipping Class"}),(0,a.jsx)("th",{className:"text-center py-2.5 px-2",children:"Status"}),(0,a.jsx)("th",{className:"text-center py-2.5 px-2",children:"Weight"}),(0,a.jsx)("th",{className:"text-center py-2.5 px-2",children:"Pieces"}),(0,a.jsx)("th",{className:"text-center py-2.5 px-2",children:"Dimensions"}),(0,a.jsx)("th",{className:"text-center py-2.5 px-2",children:"Created On"}),(0,a.jsx)("th",{className:"text-center py-2.5 px-2",children:"Actions"})]})}),X?(0,a.jsx)("tbody",{className:"divide-y",children:Array.from({length:15}).map((e,t)=>(0,a.jsx)("tr",{className:"divide-x",children:Array(9).fill(0).map((e,t)=>(0,a.jsx)("td",{className:"py-3.5 px-2 text-center",children:(0,a.jsx)(b.X,{className:"h-5 rounded-full"})},t))},t))}):t&&t.length>0?(0,a.jsx)("tbody",{className:"divide-y",children:t.map((e,t)=>(0,a.jsxs)("tr",{className:"divide-x",children:[(0,a.jsx)("td",{className:"py-2.5 px-2 text-center",children:e.shipment_id}),(0,a.jsx)("td",{className:"py-2.5 px-2 text-center",children:e.store}),(0,a.jsx)("td",{className:"py-2.5 px-2 text-center",children:e.shipping_class}),(0,a.jsx)("td",{className:"py-2.5 px-2 text-center",children:"completed"!==e.status?(0,a.jsxs)("select",{name:"status",id:"status-".concat(e.shipment_id),className:"px-2 py-1 border border-gray-300 rounded ring-accent",value:J[e.shipment_id],onChange:t=>{es(e.shipment_id,t.target.value)},children:[(0,a.jsx)("option",{value:"pending",children:"Pending"}),(0,a.jsx)("option",{value:"shipped",children:"Shipped"})]}):"Delivered"}),(0,a.jsx)("td",{className:"py-2.5 px-2 text-center",children:e.weight_in_kg}),(0,a.jsx)("td",{className:"py-2.5 px-2 text-center",children:e.pieces_count||"-"}),(0,a.jsx)("td",{className:"py-2.5 px-2 text-center",children:Object.values(e.box_dimensions).join(" x ")}),(0,a.jsx)("td",{className:"py-2.5 px-2 text-center",children:e.created_at?(0,o.a)(e.created_at):"-"}),(0,a.jsxs)("td",{className:"py-3 px-2 text-sm font-medium flex justify-center gap-x-2",children:["pending"!==e.status&&"delhivery"===e.shipping_class&&(0,a.jsx)("button",{className:"py-1 px-1.5 rounded transition-all text-purple-500 hover:text-white bg-purple-100 hover:bg-purple-500 ring-custom ring-purple-500",onClick:()=>en(e.shipment_id),children:(0,a.jsx)("i",{className:"bi bi-truck"})}),"delhivery"===e.shipping_class&&(0,a.jsxs)("button",{className:"text-blue-500 hover:text-white bg-blue-100 hover:bg-blue-500 py-1 px-1.5 rounded transition-all ring-custom ring-blue-500",onClick:()=>er(e.shipment_id),children:["Slip ",(0,a.jsx)("i",{className:"bi bi-printer"})]}),(0,a.jsx)("button",{className:"text-red-500 hover:text-white bg-red-100 hover:bg-red-500 py-1 px-1.5 rounded transition-all ring-custom ring-red-500",onClick:()=>ea(e.shipment_id),children:(0,a.jsx)("i",{className:"bi bi-trash-fill"})})]})]},t))}):(0,a.jsx)("td",{className:"w-full border py-4 text-center text-red-500 font-semibold","aria-colspan":9,colspan:9,children:"No entries to show!"})]})}),(0,a.jsx)(i.Z,{itemsPerPage:d,setItemsPerPage:m,currentPage:u,setCurrentPage:p,totalEntries:I,totalPages:E})]})})]}),(0,a.jsx)(f.R,{isOpen:Q,onOpenChange:U,size:"4xl",radius:"sm",children:(0,a.jsx)(j.A,{children:e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(y.k,{className:"flex flex-col gap-1",children:"Request Pickup"}),(0,a.jsxs)(N.I,{children:[(0,a.jsxs)(w.b,{"aria-label":"Selection Table",selectionMode:"multiple",selectedKeys:W,onSelectionChange:e=>{G(e),el(e)},checkboxesProps:{classNames:{wrapper:"after:bg-accent after:text-white text-white"}},classNames:{base:"rounded"},radius:"none",className:"".concat(Y.table?"border border-red-300":""," rounded"),children:[(0,a.jsx)(v.J,{columns:K,children:e=>(0,a.jsx)(_.j,{children:e.label},e.key)}),(0,a.jsx)(S.y,{items:t,isLoading:X,loadingContent:(0,a.jsx)(k.c,{label:"Loading...",color:"success"}),children:e=>!e.shipping_requested_date&&"delhivery"===e.shipping_class&&(0,a.jsx)(C.g,{children:t=>(0,a.jsx)(D.X,{children:(0,A.sF)(e,t)})},e.shipment_id)})]}),Y.table&&(0,a.jsx)("p",{className:"text-red-500 text-sm",children:Y.table}),(0,a.jsx)("div",{className:"w-full grid grid-cols-2 gap-x-4",children:(0,a.jsxs)("div",{className:"relative w-full",children:[(0,a.jsx)("label",{htmlFor:"requestedOn",className:"mb-1",children:"Requested On:"}),(0,a.jsx)("input",{type:"datetime-local",name:"requestedOn",id:"requestedOn",value:H,onChange:e=>{ec(e),V(e.target.value)},className:"px-2 py-2 rounded border w-full border-gray-300 ring-accent ".concat(Y.requestedOn?"border-red-300":"")}),Y.requestedOn&&(0,a.jsx)("p",{className:"text-red-500 text-sm mt-1 absolute -bottom-5",children:Y.requestedOn})]})})]}),(0,a.jsxs)(O.R,{children:[(0,a.jsx)(q.A,{color:"danger",variant:"light",radius:"sm",onPress:e,children:"Close"}),(0,a.jsx)(q.A,{color:"success",className:"text-white rounded",onPress:()=>ed(e),children:"Request Pickup"})]})]})})})]})}}},function(e){e.O(0,[8166,7242,934,8278,7707,2888,9774,179],function(){return e(e.s=91950)}),_N_E=e.O()}]);