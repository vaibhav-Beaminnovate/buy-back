(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2654],{50204:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/warehouse/pending-confirmation",function(){return a(44843)}])},12115:function(e,t,a){"use strict";var s=a(85893);a(67294),t.Z=e=>{let{itemsPerPage:t,setItemsPerPage:a,currentPage:n,setCurrentPage:r,totalEntries:c,totalPages:l}=e;return(0,s.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-center pt-4",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,s.jsx)("label",{htmlFor:"items",className:"text-sm",children:"Items per page:"}),(0,s.jsx)("select",{id:"items",className:"border border-gray-300 rounded-md py-1 px-2 ring-accent",value:t,onChange:e=>{a(parseInt(e.target.value,10)),r(1)},children:[15,20,25,30,35].map(e=>(0,s.jsx)("option",{value:e,children:e},e))})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-2 mt-3 md:mt-0",children:[(0,s.jsxs)("span",{className:"text-sm text-gray-700",children:[t*n-t+1," to"," ",t*n<c?t*n:c," ","of ",c]}),(0,s.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,s.jsx)("button",{onClick:()=>r(1),disabled:1===n,className:"p-2 rounded-full ring-accent ".concat(n>1?"text-accent":"text-gray-400"),children:(0,s.jsx)("i",{className:"bi bi-chevron-bar-left text-lg"})}),(0,s.jsx)("button",{onClick:()=>r(e=>e>1?e-1:e),disabled:1===n,className:"p-2 rounded-full ring-accent ".concat(n>1?"text-accent":"text-gray-400"),children:(0,s.jsx)("i",{className:"bi bi-chevron-left text-lg"})}),(0,s.jsx)("button",{onClick:()=>r(e=>e<l?e+1:e),disabled:n===l,className:"p-2 rounded-full ring-accent ".concat(n<l?"text-accent":"text-gray-400"),children:(0,s.jsx)("i",{className:"bi bi-chevron-right text-lg"})}),(0,s.jsx)("button",{onClick:()=>r(l),disabled:n===l,className:"p-2 rounded-full ring-accent ".concat(n<l?"text-accent":"text-gray-400"),children:(0,s.jsx)("i",{className:"bi bi-chevron-bar-right text-lg"})})]})]})]})}},4625:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var s=a(67294);function n(e,t){let[a,n]=(0,s.useState)(e);return(0,s.useEffect)(()=>{let a=setTimeout(()=>{n(e)},t);return()=>{clearTimeout(a)}},[e]),a}},44843:function(e,t,a){"use strict";a.r(t);var s=a(85893),n=a(67294);a(4625);var r=a(12115),c=a(11163),l=a(9134),i=a(32553),o=a(41664),d=a.n(o),u=a(9008),h=a.n(u),m=a(4483),p=a(86455),x=a.n(p);t.default=()=>{let e="https://buybackservice.unicornstore.in";(0,c.useRouter)();let[t,a]=(0,n.useState)(null),[o,u]=(0,n.useState)(10),[p,f]=(0,n.useState)(1),[b,g]=(0,n.useState)(null),[j,N]=(0,n.useState)(null),[y,v]=(0,n.useState)(""),[w,_]=(0,n.useState)(!0),S=(0,i.dQ)(),C=async()=>{let t=localStorage.getItem("warehouse_id");try{_(!0);let s=await fetch("".concat(e,"/get-all-shipments?page=").concat(p,"&per_page=").concat(o,"&sort_desc=false&search=").concat(y,"&warehouse_id=").concat(t,"&delivered=true&is_confirmed=false"),{headers:{Authorization:S}});if(!s.ok)throw Error("Could not get shipment Res");let n=await s.json();a(n.data),N(n.total_count),g(Math.ceil(n.total_count/o))}catch(e){l.Am.error(e.message,{toastId:"getshipmentres"})}finally{setTimeout(()=>{_(!1)},300)}};(0,n.useEffect)(()=>{C()},[]),(0,n.useEffect)(()=>{let e=setTimeout(()=>{f(1),C()},300);return()=>clearTimeout(e)},[y]);let k=async(t,a)=>{let s=localStorage.getItem("warehouse_id");x().fire({title:"Approve Shipment?",text:"Are you sure you want to approve this shipment?",icon:"question",showCancelButton:!0,showConfirmButton:!0,confirmButtonText:"YES",confirmButtonColor:"#42c8b7",reverseButtons:!0}).then(async a=>{if(a.isConfirmed)try{console.log("Approved");let a=await fetch("".concat(e,"/confirm-shipment/?shipment_id=").concat(t,"&warehouse_id=").concat(s),{method:"PUT"});if(!a.ok)throw Error("Could not approve shipment");let n=await a.json();n.status,l.Am.success(n.message),C()}catch(e){l.Am.error(e.message)}})};return(0,s.jsxs)("div",{className:"flex justify-center bg-gray-100 min-h-screen",children:[(0,s.jsx)(h(),{children:(0,s.jsx)("title",{children:"BuyBack - Warehouse"})}),(0,s.jsx)("div",{className:"container max-w-screen-xl",children:(0,s.jsxs)("div",{className:"flex flex-col bg-white p-4 mb-8 rounded shadow justify-center space-y-2",children:[(0,s.jsxs)("h2",{className:"text-2xl font-semibold",children:["Warehouse Dashboard | Shipments Pending Confirmation"," "]}),(0,s.jsxs)("div",{className:"relative p-2 space-y-2 rounded",children:[(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("label",{className:"text-sm text-gray-700 mb-1",htmlFor:"search-bar",children:"Search by Shipment ID, Store, Shipping Class, Status or weight"}),(0,s.jsx)("input",{type:"text",className:"w-full border border-gray-400 py-2 px-4 rounded-md ring-accent",name:"search-bar",id:"search-bar",value:y,onChange:e=>v(e.target.value),spellCheck:!1,autoComplete:"off",placeholder:"Search by Shipment ID, Store, Shipping Class, Status or weight"})]}),(0,s.jsxs)("table",{className:"min-w-full table-auto bg-white rounded overflow-hidden shadow",children:[(0,s.jsx)("thead",{className:"bg-gray-200",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"text-center py-2.5",children:"Shipment ID"}),(0,s.jsx)("th",{className:"text-center py-2.5",children:"Store"}),(0,s.jsx)("th",{className:"text-center py-2.5",children:"Shipping Class"}),(0,s.jsx)("th",{className:"text-center py-2.5",children:"Created On"}),(0,s.jsx)("th",{className:"text-center py-2.5",children:"Status"}),(0,s.jsx)("th",{className:"text-center py-2.5",children:"Weight"}),(0,s.jsx)("th",{className:"text-center py-2.5",children:"Dimensions"}),(0,s.jsx)("th",{className:"text-center py-2.5",children:"Actions"})]})}),(0,s.jsx)("tbody",{className:"divide-y",children:w?Array(o).fill(0).map((e,t)=>(0,s.jsxs)("tr",{className:"divide-x",children:[(0,s.jsx)("td",{className:"px-3 py-2 whitespace-nowrap",children:(0,s.jsx)(m.X,{className:"h-5 rounded-full"})}),(0,s.jsx)("td",{className:"px-3 py-2 whitespace-nowrap",children:(0,s.jsx)(m.X,{className:"h-5 rounded-full"})}),(0,s.jsx)("td",{className:"px-3 py-2 whitespace-nowrap",children:(0,s.jsx)(m.X,{className:"h-5 rounded-full"})}),(0,s.jsx)("td",{className:"px-3 py-2 whitespace-nowrap",children:(0,s.jsx)(m.X,{className:"h-5 rounded-full"})}),(0,s.jsx)("td",{className:"px-3 py-2 whitespace-nowrap",children:(0,s.jsx)(m.X,{className:"h-5 rounded-full"})}),(0,s.jsx)("td",{className:"px-3 py-2 whitespace-nowrap",children:(0,s.jsx)(m.X,{className:"h-5 rounded-full"})}),(0,s.jsx)("td",{className:"px-3 py-2 whitespace-nowrap",children:(0,s.jsx)(m.X,{className:"h-5 rounded-full"})}),(0,s.jsx)("td",{className:"px-3 py-2 whitespace-nowrap",children:(0,s.jsx)(m.X,{className:"h-5 rounded-full"})})]},t)):t&&t.length>0?t.map((e,t)=>(0,s.jsxs)("tr",{className:"divide-x",children:[(0,s.jsx)("td",{className:"py-1.5 text-center capitalize",children:e.shipment_id}),(0,s.jsx)("td",{className:"py-1.5 text-center capitalize",children:e.store}),(0,s.jsx)("td",{className:"py-1.5 text-center capitalize",children:e.shipping_class}),(0,s.jsx)("td",{className:"py-1.5 text-center capitalize",children:(0,i.a)(e.created_at)}),(0,s.jsx)("td",{className:"py-1.5 text-center capitalize",children:e.status}),(0,s.jsx)("td",{className:"py-1.5 text-center capitalize",children:e.weight_in_kg}),(0,s.jsx)("td",{className:"py-1.5 text-center",children:Object.values(e.box_dimensions).join(" x ")}),(0,s.jsxs)("td",{className:"py-1.5 text-center",children:[(0,s.jsx)(d(),{href:"/warehouse/shipment/".concat(e.shipment_id),className:"bg-blue-100 text-blue-500 hover:text-white hover:bg-blue-500 rounded p-1.5 transition-all fas fa-eye ring-custom ring-blue-400 me-2"}),(0,s.jsx)("button",{className:"bg-accent-dimmed accent hover:bg-accent hover:text-white rounded px-2 py-1.5 fas fa-check ring-accent me-2",onClick:()=>k(e.shipment_id)})]})]},t)):(0,s.jsx)("tr",{children:(0,s.jsx)("td",{colSpan:8,className:"w-full border py-4 text-center text-red-500 font-semibold",children:"No entries to show!"})})})]}),(0,s.jsx)(r.Z,{itemsPerPage:o,setItemsPerPage:u,currentPage:p,setCurrentPage:f,totalEntries:j,totalPages:b})]})]})})]})}},9008:function(e,t,a){e.exports=a(7828)},4483:function(e,t,a){"use strict";a.d(t,{X:function(){return h}});var s=a(15607),n=(0,a(44831).tv)({slots:{base:["group","relative","overflow-hidden","bg-content3 dark:bg-content2","pointer-events-none","before:opacity-100","before:absolute","before:inset-0","before:-translate-x-full","before:animate-[shimmer_2s_infinite]","before:border-t","before:border-content4/30","before:bg-gradient-to-r","before:from-transparent","before:via-content4","dark:before:via-default-700/10","before:to-transparent","after:opacity-100","after:absolute","after:inset-0","after:-z-10","after:bg-content3","dark:after:bg-content2","data-[loaded=true]:pointer-events-auto","data-[loaded=true]:overflow-visible","data-[loaded=true]:!bg-transparent","data-[loaded=true]:before:opacity-0 data-[loaded=true]:before:-z-10 data-[loaded=true]:before:animate-none","data-[loaded=true]:after:opacity-0"],content:["opacity-0","group-data-[loaded=true]:opacity-100"]},variants:{disableAnimation:{true:{base:"before:animate-none before:transition-none after:transition-none",content:"transition-none"},false:{base:"transition-background !duration-300",content:"transition-opacity motion-reduce:transition-none !duration-300"}}},defaultVariants:{}}),r=a(60798),c=a(49869),l=a(50262),i=a(67294),o=a(76733),d=a(85893),u=(0,s.Gp)((e,t)=>{let{Component:a,children:u,getSkeletonProps:h,getContentProps:m}=function(e){var t,a;let d=(0,o.w)(),[u,h]=(0,s.oe)(e,n.variantKeys),{as:m,children:p,isLoaded:x=!1,className:f,classNames:b,...g}=u,j=null!=(a=null!=(t=e.disableAnimation)?t:null==d?void 0:d.disableAnimation)&&a,N=(0,i.useMemo)(()=>n({...h,disableAnimation:j}),[(0,r.Xx)(h),j,p]),y=(0,c.W)(null==b?void 0:b.base,f);return{Component:m||"div",children:p,slots:N,classNames:b,getSkeletonProps:(e={})=>({"data-loaded":(0,l.PB)(x),className:N.base({class:(0,c.W)(y,null==e?void 0:e.className)}),...g}),getContentProps:(e={})=>({className:N.content({class:(0,c.W)(null==b?void 0:b.content,null==e?void 0:e.className)})})}}({...e});return(0,d.jsx)(a,{ref:t,...h(),children:(0,d.jsx)("div",{...m(),children:u})})});u.displayName="NextUI.Skeleton";var h=u}},function(e){e.O(0,[8166,2888,9774,179],function(){return e(e.s=50204)}),_N_E=e.O()}]);