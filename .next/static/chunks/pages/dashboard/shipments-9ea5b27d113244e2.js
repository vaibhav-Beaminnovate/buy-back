(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[88],{1950:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/shipments",function(){return s(1185)}])},2115:function(e,t,s){"use strict";var a=s(5893);s(7294),t.Z=e=>{let{itemsPerPage:t,setItemsPerPage:s,currentPage:n,setCurrentPage:l,totalEntries:r,totalPages:c}=e;return(0,a.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-center pt-4",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,a.jsx)("label",{htmlFor:"items",className:"text-sm",children:"Items per page:"}),(0,a.jsx)("select",{id:"items",className:"border border-gray-300 rounded-md py-1 px-2 outline-none",value:t,onChange:e=>{s(parseInt(e.target.value,10)),l(1)},children:[15,20,25,30,35].map(e=>(0,a.jsx)("option",{value:e,children:e},e))})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-2 mt-3 md:mt-0",children:[(0,a.jsxs)("span",{className:"text-sm text-gray-700",children:[t*n-t+1," to"," ",t*n<r?t*n:r," ","of ",r]}),(0,a.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,a.jsx)("button",{onClick:()=>l(1),disabled:1===n,className:"p-2 rounded-full ".concat(n>1?"text-accent":"text-gray-400"),children:(0,a.jsx)("i",{className:"bi bi-chevron-bar-left text-lg"})}),(0,a.jsx)("button",{onClick:()=>l(e=>e>1?e-1:e),disabled:1===n,className:"p-2 rounded-full ".concat(n>1?"text-accent":"text-gray-400"),children:(0,a.jsx)("i",{className:"bi bi-chevron-left text-lg"})}),(0,a.jsx)("button",{onClick:()=>l(e=>e<c?e+1:e),disabled:n===c,className:"p-2 rounded-full ".concat(n<c?"text-accent":"text-gray-400"),children:(0,a.jsx)("i",{className:"bi bi-chevron-right text-lg"})}),(0,a.jsx)("button",{onClick:()=>l(c),disabled:n===c,className:"p-2 rounded-full ".concat(n<c?"text-accent":"text-gray-400"),children:(0,a.jsx)("i",{className:"bi bi-chevron-bar-right text-lg"})})]})]})]})}},4625:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var a=s(7294);function n(e,t){let[s,n]=(0,a.useState)(e);return(0,a.useEffect)(()=>{let s=setTimeout(()=>{n(e)},t);return()=>{clearTimeout(s)}},[e,t]),s}},1185:function(e,t,s){"use strict";s.r(t);var a=s(5893),n=s(7294),l=s(4625),r=s(2115),c=s(1163),i=s(9134),d=s(5066),o=s(1664),h=s.n(o),m=s(5152),u=s.n(m),x=s(6455),p=s.n(x),g=s(7957),j=s(9412),b=s(843),f=s(1680),y=s(199),N=s(7740),w=s(6597),v=s(8405),_=s(3218),k=s(4877),S=s(2967),C=s(4863),D=s(7168),q=s(8148),O=s(9276),P=s(6476);u()(()=>s.e(607).then(s.t.bind(s,8607,23)),{loadableGenerated:{webpack:()=>[8607]},ssr:!1}),t.default=()=>{let e="https://buybackservice.unicornstore.in";(0,c.useRouter)();let[t,s]=(0,n.useState)(null),[o,m]=(0,n.useState)(10),[u,x]=(0,n.useState)(1),[E,A]=(0,n.useState)(null),[T,X]=(0,n.useState)(null),[I,R]=(0,n.useState)(""),F=(0,l.Z)(I,500),[Z,J]=(0,n.useState)(!0),[L,z]=(0,n.useState)(""),[M,Q]=(0,n.useState)(""),{isOpen:U,onOpen:W,onOpenChange:G}=(0,g.q)(),[K,B]=(0,n.useState)(new Set([])),H=[{key:"shipment_id",label:"Shipment ID"},{key:"store",label:"Store"},{key:"shipping_class",label:"Shipping Class"},{key:"weight_in_kg",label:"Weight"},{key:"status",label:"Status"}],[V,Y]=(0,n.useState)(""),[$,ee]=(0,n.useState)({table:"",requestedOn:""}),[et,es]=(0,n.useState)(null),[ea,en]=(0,n.useState)(!1),el=async()=>{let t=localStorage.getItem("staff_id");try{J(!0);let a=await fetch("".concat(e,"/get-all-shipments?page=").concat(u,"&per_page=").concat(o,"&sort_desc=false&search=").concat(I,"&staff_id=").concat(t));if(!a.ok)throw Error("Could not get shipment Res");let n=await a.json();s(n.data),X(n.total_count),A(Math.ceil(n.total_count/o)),n.data.forEach(e=>{z(t=>({...t,[e.shipment_id]:e.status}))})}catch(e){i.Am.error(e.message)}finally{setTimeout(()=>{J(!1)},400)}};(0,n.useEffect)(()=>{el()},[u,o]),(0,n.useEffect)(()=>{""!==F&&(x(1),el())},[F,I]);let er=async(t,s)=>{try{let a=await fetch("".concat(e,"/update-shipment?shipment_id=").concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:s})});if(!a.ok)throw Error("Could not update shipment");let n=await a.json();if("success"!==n.status)throw Error(n.message);z(e=>({...e,[t]:s})),el()}catch(e){i.Am.error(e.message)}},ec=async t=>{try{let s=await fetch("".concat(e,"/delete-shipment?shipment_id=").concat(t),{method:"DELETE"});if(!s.ok)throw Error("Could not delete shipment");let a=await s.json();if("success"!==a.status)throw Error(a.message);i.Am.success(a.message),el()}catch(e){i.Am.error(e.message)}finally{Q(null)}},ei=async t=>{console.log({id:t});try{let s=await fetch("".concat(e,"/packing-slip-pdf/?shipment_id=").concat(t));if(!s.ok)throw Error("Could not get slip");let a=await s.json();if("success"!==a.status)throw Error(a.message);console.log({slipData:a}),window.open(a.url,"_blank")}catch(e){i.Am.error(e.message)}},ed=async t=>{try{let s=await fetch("".concat(e,"/track-delivery/?shipment_id=").concat(t),{method:"POST"});if(!s.ok)throw Error("Could not track shipment");let a=await s.json();p().fire({title:"Shipment Status",text:a.shipment_status||a.message,icon:a.status})}catch(e){i.Am.error(e.message)}},eo=e=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e),eh=e=>{let t=e.target.value,s=new Date;s.setDate(s.getDate());let a=new Date(s);a.setDate(s.getDate()+8);let n={};if(t){let e=new Date(t);e<s||e>a?n.requestedOn="Please select a date between ".concat(eo(new Date(s).setDate(s.getDate()+1))," and ").concat(eo(a)):n.requestedOn=""}else n.requestedOn="Requested Date is required";ee(e=>({...e,...n}))},em=e=>{let t={};0===Array.from(e,Number).length?t.table="At least one shipment is required":t.table="",ee(e=>({...e,...t}))},eu=()=>{let e=new Date;e.setDate(e.getDate());let t=new Date(e);t.setDate(e.getDate()+8);let s={};if(0===Array.from(K,Number).length?s.table="At least one shipment is required":s.table="",V.trim()){let a=new Date(V);a<e||a>t?s.requestedOn="Please select a date between ".concat(eo(new Date(e).setDate(e.getDate()+1))," and ").concat(eo(t)):s.requestedOn=""}else s.requestedOn="Requested Date is required";return ee(s),Object.keys(s).every(e=>""===s[e])},ex=async t=>{try{if(!eu())return;t();let s=Array.from(K,Number),a=await fetch("".concat(e,"/create-shipment-pickup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({staff_id:localStorage.getItem("staff_id"),pickup_datetime:V,shipment_ids:s})});if(!a.ok)throw Error("Could not create shipment pickup");let n=await a.json();if("success"!==n.status)throw Error(n.message);i.Am.success(n.message)}catch(e){i.Am.error(e.message)}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"flex justify-center bg-gray-100 min-h-screen h-full relative -top-28",children:(0,a.jsx)("div",{className:"container max-w-screen-xl mx-4",children:(0,a.jsxs)("div",{className:"flex flex-col bg-white p-4 my-4 rounded-lg shadow justify-center space-y-2",children:[(0,a.jsxs)("div",{className:"relative flex gap-x-4",children:[(0,a.jsxs)(h(),{href:"/dashboard/shipments/create-shipment",className:"bg-accent text-white px-4 py-2 rounded ring-accent",children:[(0,a.jsx)("i",{className:"fas fa-plus"})," Create Shipment"]}),(0,a.jsxs)(j.A,{className:"bg-accent text-white rounded",onPress:W,children:[(0,a.jsx)("i",{className:"fas fa-calendar-days"})," Request Pickup"]})]}),(0,a.jsx)("label",{className:"text-sm text-gray-700",htmlFor:"searchQuery",children:"Search by Shipment ID, Store, Shipment Class or Status"}),(0,a.jsx)("div",{className:"w-full grid grid-cols-1 md:grid-cols-6 md:space-x-2",children:(0,a.jsx)("input",{type:"text",id:"searchQuery",className:"border border-gray-400 py-2 px-4 rounded-md ring-accent col-span-6",name:"search-bar",value:I,onChange:e=>R(e.target.value),spellCheck:!1,autoComplete:"off",placeholder:"Search by Customer Name, Final Price or Product Name"})}),(0,a.jsxs)("table",{className:"min-w-full table-auto bg-white rounded overflow-hidden shadow",children:[(0,a.jsx)("thead",{className:"bg-gray-200",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"text-center py-2.5",children:"Shipment ID"}),(0,a.jsx)("th",{className:"text-center py-2.5",children:"Store"}),(0,a.jsx)("th",{className:"text-center py-2.5",children:"Shipping Class"}),(0,a.jsx)("th",{className:"text-center py-2.5",children:"Requested On"}),(0,a.jsx)("th",{className:"text-center py-2.5",children:"Status"}),(0,a.jsx)("th",{className:"text-center py-2.5",children:"Weight"}),(0,a.jsx)("th",{className:"text-center py-2.5",children:"Pieces"}),(0,a.jsx)("th",{className:"text-center py-2.5",children:"Dimensions"}),(0,a.jsx)("th",{className:"text-center py-2.5",children:"Actions"})]})}),Z?(0,a.jsx)("tbody",{className:"divide-y",children:Array.from({length:15}).map((e,t)=>(0,a.jsxs)("tr",{className:"divide-x",children:[(0,a.jsx)("td",{className:"py-1.5 px-2 text-center",children:(0,a.jsx)(b.X,{className:"h-5 rounded-full"})}),(0,a.jsx)("td",{className:"py-1.5 px-2 text-center",children:(0,a.jsx)(b.X,{className:"h-5 rounded-full"})}),(0,a.jsx)("td",{className:"py-1.5 px-2 text-center",children:(0,a.jsx)(b.X,{className:"h-5 rounded-full"})}),(0,a.jsx)("td",{className:"py-1.5 px-2 text-center",children:(0,a.jsx)(b.X,{className:"h-5 rounded-full"})}),(0,a.jsx)("td",{className:"py-1.5 px-2 text-center",children:(0,a.jsx)(b.X,{className:"h-5 rounded-full"})}),(0,a.jsx)("td",{className:"py-1.5 px-2 text-center",children:(0,a.jsx)(b.X,{className:"h-5 rounded-full"})}),(0,a.jsx)("td",{className:"py-1.5 px-2 text-center",children:(0,a.jsx)(b.X,{className:"h-5 rounded-full"})}),(0,a.jsx)("td",{className:"py-1.5 px-2 text-center",children:(0,a.jsx)(b.X,{className:"h-5 rounded-full"})}),(0,a.jsx)("td",{className:" py-1.5 px-2 whitespace-nowrap text-sm font-medium text-center",children:(0,a.jsx)(b.X,{className:"h-5 rounded-full"})})]},t))}):t&&t.length>0?(0,a.jsx)("tbody",{className:"divide-y",children:t.map((e,t)=>(0,a.jsxs)("tr",{className:"divide-x",children:[(0,a.jsx)("td",{className:"py-2.5 text-center",children:e.shipment_id}),(0,a.jsx)("td",{className:"py-2.5 text-center",children:e.store}),(0,a.jsx)("td",{className:"py-2.5 text-center",children:e.shipping_class}),(0,a.jsx)("td",{className:"py-2.5 text-center",children:e.shipping_requested_date?(0,d.a)(e.shipping_requested_date):"-"}),(0,a.jsx)("td",{className:"py-2.5 text-center",children:"completed"!==e.status?(0,a.jsx)("span",{className:"pe-1 py-1 border border-gray-300 rounded",children:(0,a.jsxs)("select",{name:"status",id:"status-".concat(e.shipment_id),className:"px-2 outline-none",value:L[e.shipment_id],onChange:t=>{er(e.shipment_id,t.target.value)},children:[(0,a.jsx)("option",{value:"pending",children:"Pending"}),(0,a.jsx)("option",{value:"shipped",children:"Shipped"})]})}):"Delivered"}),(0,a.jsx)("td",{className:"py-2.5 text-center",children:e.weight_in_kg}),(0,a.jsx)("td",{className:"py-2.5 text-center",children:e.pieces_count||"-"}),(0,a.jsx)("td",{className:"py-2.5 text-center",children:Object.values(e.box_dimensions).join(" x ")}),(0,a.jsxs)("td",{className:"py-2.5 text-sm font-medium flex justify-center gap-x-2",children:["pending"!==e.status&&"delhivery"===e.shipping_class&&(0,a.jsx)("button",{className:"py-1 px-1.5 rounded transition-all text-purple-500 hover:text-white bg-purple-100 hover:bg-purple-500",onClick:()=>ed(e.shipment_id),children:(0,a.jsx)("i",{className:"bi bi-truck"})}),"delhivery"===e.shipping_class&&(0,a.jsxs)("button",{className:"text-blue-500 hover:text-white bg-blue-100 hover:bg-blue-500 py-1 px-1.5 rounded transition-all",onClick:()=>ei(e.shipment_id),children:["Slip ",(0,a.jsx)("i",{className:"bi bi-printer"})]}),(0,a.jsx)("button",{className:"text-red-500 hover:text-white bg-red-100 hover:bg-red-500 py-1 px-1.5 rounded transition-all",onClick:()=>Q(e.shipment_id),children:(0,a.jsx)("i",{className:"bi bi-trash-fill"})}),M===e.shipment_id&&(0,a.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",children:(0,a.jsxs)("div",{className:"bg-white rounded-lg shadow-lg w-96 p-6 text-wrap",children:[(0,a.jsx)("h2",{className:"text-xl font-bold mb-4",children:"Delete Item"}),(0,a.jsx)("p",{className:"mb-6",children:"Are you sure you want to delete this item? This action cannot be undone."}),(0,a.jsxs)("div",{className:"flex justify-end space-x-3",children:[(0,a.jsx)("button",{onClick:()=>Q(""),className:"bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded",children:"Cancel"}),(0,a.jsx)("button",{onClick:()=>ec(e.shipment_id),className:"bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",children:"Confirm Delete"})]})]})})]})]},t))}):(0,a.jsx)("td",{className:"w-full border py-4 text-center text-red-500 font-semibold","aria-colspan":9,colspan:9,children:"No entries to show!"})]}),(0,a.jsx)(r.Z,{itemsPerPage:o,setItemsPerPage:m,currentPage:u,setCurrentPage:x,totalEntries:T,totalPages:E})]})})}),(0,a.jsx)(f.R,{isOpen:U,onOpenChange:G,size:"4xl",radius:"sm",children:(0,a.jsx)(y.A,{children:e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(N.k,{className:"flex flex-col gap-1",children:"Request Pickup"}),(0,a.jsxs)(w.I,{children:[(0,a.jsxs)(v.b,{"aria-label":"Selection Table",selectionMode:"multiple",selectedKeys:K,onSelectionChange:e=>{B(e),em(e)},checkboxesProps:{classNames:{wrapper:"after:bg-accent after:text-white text-white"}},classNames:{base:"rounded"},radius:"none",className:"".concat($.table?"border border-red-300":""," rounded"),children:[(0,a.jsx)(_.J,{columns:H,children:e=>(0,a.jsx)(k.j,{children:e.label},e.key)}),(0,a.jsx)(S.y,{items:t,isLoading:Z,loadingContent:(0,a.jsx)(C.c,{label:"Loading..."}),children:e=>!e.shipping_requested_date&&"delhivery"===e.shipping_class&&(0,a.jsx)(D.g,{children:t=>(0,a.jsx)(q.X,{children:(0,O.sF)(e,t)})},e.shipment_id)})]}),$.table&&(0,a.jsx)("p",{className:"text-red-500 text-sm",children:$.table}),(0,a.jsx)("div",{className:"w-full grid grid-cols-2 gap-x-4",children:(0,a.jsxs)("div",{className:"relative w-full",children:[(0,a.jsx)("label",{htmlFor:"requestedOn",className:"mb-1",children:"Requested On:"}),(0,a.jsx)("input",{type:"datetime-local",name:"requestedOn",id:"requestedOn",value:V,onChange:e=>{eh(e),Y(e.target.value)},className:"px-4 py-2 rounded border w-full border-gray-300 ring-accent ".concat($.requestedOn?"border-red-300":"")}),$.requestedOn&&(0,a.jsx)("p",{className:"text-red-500 text-sm mt-1 absolute -bottom-5",children:$.requestedOn})]})})]}),(0,a.jsxs)(P.R,{children:[(0,a.jsx)(j.A,{color:"danger",variant:"light",radius:"sm",onPress:e,children:"Close"}),(0,a.jsx)(j.A,{color:"success",className:"text-white rounded",onPress:()=>ex(e),children:"Request Pickup"})]})]})})})]})}}},function(e){e.O(0,[166,260,242,620,896,160,888,774,179],function(){return e(e.s=1950)}),_N_E=e.O()}]);