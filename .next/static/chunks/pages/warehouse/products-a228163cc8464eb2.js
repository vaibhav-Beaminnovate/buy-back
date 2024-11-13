(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[884],{5449:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/warehouse/products",function(){return a(7562)}])},2115:function(e,t,a){"use strict";var s=a(5893);a(7294),t.Z=e=>{let{itemsPerPage:t,setItemsPerPage:a,currentPage:r,setCurrentPage:n,totalEntries:l,totalPages:c}=e;return(0,s.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-center pt-4",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,s.jsx)("label",{htmlFor:"items",className:"text-sm",children:"Items per page:"}),(0,s.jsx)("select",{id:"items",className:"border border-gray-300 rounded-md py-1 px-2 outline-none",value:t,onChange:e=>{a(parseInt(e.target.value,10)),n(1)},children:[15,20,25,30,35].map(e=>(0,s.jsx)("option",{value:e,children:e},e))})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-2 mt-3 md:mt-0",children:[(0,s.jsxs)("span",{className:"text-sm text-gray-700",children:[t*r-t+1," to"," ",t*r<l?t*r:l," ","of ",l]}),(0,s.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,s.jsx)("button",{onClick:()=>n(1),disabled:1===r,className:"p-2 rounded-full ".concat(r>1?"text-accent":"text-gray-400"),children:(0,s.jsx)("i",{className:"bi bi-chevron-bar-left text-lg"})}),(0,s.jsx)("button",{onClick:()=>n(e=>e>1?e-1:e),disabled:1===r,className:"p-2 rounded-full ".concat(r>1?"text-accent":"text-gray-400"),children:(0,s.jsx)("i",{className:"bi bi-chevron-left text-lg"})}),(0,s.jsx)("button",{onClick:()=>n(e=>e<c?e+1:e),disabled:r===c,className:"p-2 rounded-full ".concat(r<c?"text-accent":"text-gray-400"),children:(0,s.jsx)("i",{className:"bi bi-chevron-right text-lg"})}),(0,s.jsx)("button",{onClick:()=>n(c),disabled:r===c,className:"p-2 rounded-full ".concat(r<c?"text-accent":"text-gray-400"),children:(0,s.jsx)("i",{className:"bi bi-chevron-bar-right text-lg"})})]})]})]})}},8344:function(e,t,a){"use strict";var s=a(5893);a(7294),t.Z=e=>{let{url:t}=e;return(0,s.jsx)("div",{className:"border",children:(0,s.jsx)("iframe",{src:t,className:"w-full h-[450px]"})})}},7562:function(e,t,a){"use strict";a.r(t);var s=a(5893),r=a(2115),n=a(9008),l=a.n(n),c=a(1163),o=a(7294),i=a(9134),d=a(7957),u=a(843),p=a(1680),m=a(199),x=a(7740),h=a(6597),f=a(6476),b=a(9412),j=a(8344);t.default=()=>{let e="https://buybackservice.unicornstore.in";(0,c.useRouter)();let[t,a]=(0,o.useState)([]),[n,N]=(0,o.useState)(1),[g,y]=(0,o.useState)(null),[v,w]=(0,o.useState)(""),[_,P]=(0,o.useState)(!0),[S,C]=(0,o.useState)(15),[k,E]=(0,o.useState)(""),{isOpen:W,onOpen:D,onOpenChange:I}=(0,d.q)(),[A,O]=(0,o.useState)({}),[X,z]=(0,o.useState)(""),[F,T]=(0,o.useState)(!1),R=async()=>{try{P(!0);let t=await fetch("".concat(e,"/get-warehouse-orders/?page=").concat(n,"&per_page=10&sort_desc=false&search=").concat(v));if(!t.ok)throw Error("Could not get products");let s=await t.json();a(s.data),E(s.total_count),y(Math.ceil(s.total_count/S))}catch(e){i.Am.error(e.message)}finally{setTimeout(()=>{P(!1)},300)}};(0,o.useEffect)(()=>{R()},[n]),(0,o.useEffect)(()=>{let e=setTimeout(()=>{N(1),R()},300);return()=>clearTimeout(e)},[v]);let U=async(t,a)=>{try{let a=await fetch("".concat(e,"/orders-data-wipe?order_id=").concat(t,"&datawipe_certificate=").concat(X),{method:"PUT"});if(!a.ok)throw Error("Could not update data wipe status");let s=await a.json();if("success"===s.status)i.Am.success("Data wipe status updated successfully",{toastId:"updateDataWipeSuccess"}),R();else throw Error(s.message)}catch(e){i.Am.error(e.message,{toastId:"updateDataWipeError"})}finally{T(!1),z(null),O({}),a()}},Z=e=>{let t=e.target.files[0];t&&"application/pdf"===t.type?(B(t),T(!0)):(i.Am.error("Please select a valid PDF file",{toastId:"selectValidPDFErrors"}),T(!1))},B=async t=>{if(!t){i.Am.error("Please select a pdf first");return}let a=new FormData;a.append("file",t);try{let t=await fetch("".concat(e,"/upload-pdf"),{method:"POST",body:a});if(!t.ok)throw Error("Could not upload pdf");let s=await t.json();if("success"!==s.status)throw Error(s.message);z(s.url)}catch(e){i.Am.error(e.message,{toastId:"uploadPdfError"})}};return(0,s.jsxs)("div",{className:"flex justify-center bg-gray-100 min-h-screen",children:[(0,s.jsx)(l(),{children:(0,s.jsx)("title",{children:"BuyBack - Warehouse"})}),(0,s.jsx)("div",{className:"container max-w-screen-xl",children:(0,s.jsxs)("div",{className:"flex flex-col bg-white p-4 mb-8 rounded shadow justify-center space-y-2",children:[(0,s.jsxs)("h2",{className:"text-2xl font-semibold",children:["Warehouse Dashboard | Products"," ",(0,s.jsx)("i",{className:"fas fa-mobile-screen text-xl"})]}),(0,s.jsxs)("div",{className:"relative border p-2 space-y-2 rounded",children:[(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault()},className:"relative",children:[(0,s.jsx)("label",{className:"text-sm text-gray-700 mb-1",htmlFor:"search-bar",children:"Search by Order ID, Seller Name, Product Name or Status"}),(0,s.jsx)("input",{type:"text",className:"w-full border border-gray-400 py-2 px-4 rounded-md ring-accent",name:"search-bar",id:"search-bar",value:v,onChange:e=>w(e.target.value),spellCheck:!1,autoComplete:"off",placeholder:"Search by Order ID, Seller Name, Product Name or Status"})]}),(0,s.jsxs)("table",{className:"min-w-full table-auto bg-white rounded overflow-hidden shadow",children:[(0,s.jsx)("thead",{className:"bg-gray-200",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"text-center py-2.5",children:"Order ID"}),(0,s.jsx)("th",{className:"text-center py-2.5",children:"Seller Name"}),(0,s.jsx)("th",{className:"text-center py-2.5",children:"Product Name"}),(0,s.jsx)("th",{className:"text-center py-2.5",children:"Data Wiped"}),(0,s.jsx)("th",{className:"text-center py-2.5",children:"Status"})]})}),(0,s.jsx)("tbody",{className:"divide-y",children:_?Array(10).fill(0).map((e,t)=>(0,s.jsxs)("tr",{className:"divide-x hover:bg-gray-100",children:[(0,s.jsx)("td",{className:"px-3 py-2 whitespace-nowrap",children:(0,s.jsx)(u.X,{className:"h-5 rounded-full"})}),(0,s.jsx)("td",{className:"px-3 py-2 whitespace-nowrap",children:(0,s.jsx)(u.X,{className:"h-5 rounded-full"})}),(0,s.jsx)("td",{className:"px-3 py-2 whitespace-nowrap",children:(0,s.jsx)(u.X,{className:"h-5 rounded-full"})}),(0,s.jsx)("td",{className:"px-3 py-2 whitespace-nowrap",children:(0,s.jsx)(u.X,{className:"h-5 rounded-full"})}),(0,s.jsx)("td",{className:"px-3 py-2 whitespace-nowrap",children:(0,s.jsx)(u.X,{className:"h-5 rounded-full"})})]},t)):t&&t.length>0?t.map((e,t)=>(0,s.jsxs)("tr",{className:"divide-x",children:[(0,s.jsx)("td",{className:"py-1.5 text-center capitalize",children:e.order_id}),(0,s.jsx)("td",{className:"py-1.5 text-center capitalize",children:e.name}),(0,s.jsx)("td",{className:"py-1.5 text-center capitalize",children:e.product_name}),(0,s.jsx)("td",{className:"py-0.5 text-center capitalize",children:0===e.data_wiped?(0,s.jsxs)("select",{name:"dataWipe",id:"dataWipe",value:e.data_wiped,onChange:()=>{O(e),D()},className:"w-full border rounded px-2 outline-none py-1.5",children:[(0,s.jsx)("option",{value:"1",children:"Wiped"}),(0,s.jsx)("option",{value:"0",children:"Not Wiped"})]}):(0,s.jsx)("span",{children:"Wiped"})}),(0,s.jsx)("td",{className:"py-1.5 text-center capitalize",children:e.status})]},t)):(0,s.jsx)("td",{colSpan:8,className:"w-full border py-4 text-center text-red-500 font-semibold",children:"No entries to show!"})})]}),(0,s.jsx)(r.Z,{itemsPerPage:S,setItemsPerPage:C,currentPage:n,setCurrentPage:N,totalEntries:k,totalPages:g})]})]})}),(0,s.jsx)(p.R,{isOpen:W,onOpenChange:I,backdrop:"opaque",children:(0,s.jsx)(m.A,{children:e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x.k,{className:"flex flex-col gap-1",children:"Upload Data Wipe Confirmation"}),(0,s.jsxs)(h.I,{children:[(0,s.jsxs)("p",{className:"text-lg",children:["Order ID: ",null==A?void 0:A.order_id]}),(0,s.jsx)("input",{type:"file",name:"wipedCeritificate",id:"wipedCeritificate",className:"border border-gray-300 h-fit",onChange:Z,accept:"application/pdf"}),(0,s.jsx)("div",{className:"".concat(F?"visible":"invisible"),children:(0,s.jsx)(j.Z,{url:X})})]}),(0,s.jsxs)(f.R,{children:[(0,s.jsx)(b.A,{color:"danger",variant:"light",className:"rounded",onPress:()=>{e(),O({})},children:"Close"}),(0,s.jsx)(b.A,{className:"bg-accent text-white rounded",onPress:()=>{U(A.order_id,e)},children:"Submit"})]})]})})})]})}},9008:function(e,t,a){e.exports=a(7828)},6476:function(e,t,a){"use strict";a.d(t,{R:function(){return i}});var s=a(8237),r=a(5607),n=a(3295),l=a(9869),c=a(5893),o=(0,r.Gp)((e,t)=>{let{as:a,children:r,className:o,...i}=e,{slots:d,classNames:u}=(0,s.v)(),p=(0,n.gy)(t);return(0,c.jsx)(a||"footer",{ref:p,className:d.footer({class:(0,l.W)(null==u?void 0:u.footer,o)}),...i,children:r})});o.displayName="NextUI.ModalFooter";var i=o},843:function(e,t,a){"use strict";a.d(t,{X:function(){return p}});var s=a(5607),r=(0,a(9488).tv)({slots:{base:["group","relative","overflow-hidden","bg-content3 dark:bg-content2","pointer-events-none","before:opacity-100","before:absolute","before:inset-0","before:-translate-x-full","before:animate-[shimmer_2s_infinite]","before:border-t","before:border-content4/30","before:bg-gradient-to-r","before:from-transparent","before:via-content4","dark:before:via-default-700/10","before:to-transparent","after:opacity-100","after:absolute","after:inset-0","after:-z-10","after:bg-content3","dark:after:bg-content2","data-[loaded=true]:pointer-events-auto","data-[loaded=true]:overflow-visible","data-[loaded=true]:!bg-transparent","data-[loaded=true]:before:opacity-0 data-[loaded=true]:before:-z-10 data-[loaded=true]:before:animate-none","data-[loaded=true]:after:opacity-0"],content:["opacity-0","group-data-[loaded=true]:opacity-100"]},variants:{disableAnimation:{true:{base:"before:animate-none before:transition-none after:transition-none",content:"transition-none"},false:{base:"transition-background !duration-300",content:"transition-opacity motion-reduce:transition-none !duration-300"}}},defaultVariants:{}}),n=a(9037),l=a(9869),c=a(262),o=a(7294),i=a(6733),d=a(5893),u=(0,s.Gp)((e,t)=>{let{Component:a,children:u,getSkeletonProps:p,getContentProps:m}=function(e){var t,a;let d=(0,i.w)(),[u,p]=(0,s.oe)(e,r.variantKeys),{as:m,children:x,isLoaded:h=!1,className:f,classNames:b,...j}=u,N=null!=(a=null!=(t=e.disableAnimation)?t:null==d?void 0:d.disableAnimation)&&a,g=(0,o.useMemo)(()=>r({...p,disableAnimation:N}),[(0,n.Xx)(p),N,x]),y=(0,l.W)(null==b?void 0:b.base,f);return{Component:m||"div",children:x,slots:g,classNames:b,getSkeletonProps:(e={})=>({"data-loaded":(0,c.PB)(h),className:g.base({class:(0,l.W)(y,null==e?void 0:e.className)}),...j}),getContentProps:(e={})=>({className:g.content({class:(0,l.W)(null==b?void 0:b.content,null==e?void 0:e.className)})})}}({...e});return(0,d.jsx)(a,{ref:t,...p(),children:(0,d.jsx)("div",{...m(),children:u})})});u.displayName="NextUI.Skeleton";var p=u}},function(e){e.O(0,[23,136,835,562,260,242,888,774,179],function(){return e(e.s=5449)}),_N_E=e.O()}]);