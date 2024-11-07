(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[954],{4201:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/orders",function(){return t(1844)}])},2115:function(e,s,t){"use strict";var a=t(5893);t(7294),s.Z=e=>{let{itemsPerPage:s,setItemsPerPage:t,currentPage:l,setCurrentPage:r,totalEntries:c,totalPages:i}=e;return(0,a.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-center pt-4",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,a.jsx)("label",{htmlFor:"items",className:"text-sm",children:"Items per page:"}),(0,a.jsx)("select",{id:"items",className:"border border-gray-300 rounded-md py-1 px-2 outline-none",value:s,onChange:e=>{t(parseInt(e.target.value,10)),r(1)},children:[15,20,25,30,35].map(e=>(0,a.jsx)("option",{value:e,children:e},e))})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-2 mt-3 md:mt-0",children:[(0,a.jsxs)("span",{className:"text-sm text-gray-700",children:[s*l-s+1," to"," ",s*l<c?s*l:c," ","of ",c]}),(0,a.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,a.jsx)("button",{onClick:()=>r(1),disabled:1===l,className:"p-2 rounded-full ".concat(l>1?"text-accent":"text-gray-400"),children:(0,a.jsx)("i",{className:"bi bi-chevron-bar-left text-lg"})}),(0,a.jsx)("button",{onClick:()=>r(e=>e>1?e-1:e),disabled:1===l,className:"p-2 rounded-full ".concat(l>1?"text-accent":"text-gray-400"),children:(0,a.jsx)("i",{className:"bi bi-chevron-left text-lg"})}),(0,a.jsx)("button",{onClick:()=>r(e=>e<i?e+1:e),disabled:l===i,className:"p-2 rounded-full ".concat(l<i?"text-accent":"text-gray-400"),children:(0,a.jsx)("i",{className:"bi bi-chevron-right text-lg"})}),(0,a.jsx)("button",{onClick:()=>r(i),disabled:l===i,className:"p-2 rounded-full ".concat(l<i?"text-accent":"text-gray-400"),children:(0,a.jsx)("i",{className:"bi bi-chevron-bar-right text-lg"})})]})]})]})}},4625:function(e,s,t){"use strict";t.d(s,{Z:function(){return l}});var a=t(7294);function l(e,s){let[t,l]=(0,a.useState)(e);return(0,a.useEffect)(()=>{let t=setTimeout(()=>{l(e)},s);return()=>{clearTimeout(t)}},[e,s]),t}},1844:function(e,s,t){"use strict";t.r(s);var a=t(5893),l=t(7294),r=t(4625),c=t(2115),i=t(1163),n=t(4059),d=t(9621),o=t(843),x=t(5066);s.default=()=>{(0,i.useRouter)();let[e,s]=(0,l.useState)(""),[t,m]=(0,l.useState)([]),[u,h]=(0,l.useState)(null),[p,g]=(0,l.useState)(null),[j,b]=(0,l.useState)(15),[f,N]=(0,l.useState)(1),[y,v]=(0,l.useState)(1),[w,_]=(0,l.useState)(!1),[k,C]=(0,l.useState)(""),[S,D]=(0,l.useState)(""),[P,A]=(0,l.useState)(""),[q,E]=(0,l.useState)(""),[F,X]=(0,l.useState)(!0),[I,O]=(0,l.useState)({key:"",direction:"ascending"}),[T,z]=(0,l.useState)([]),[Z,M]=(0,l.useState)({startDate:"",endDate:""}),G=e=>{let{name:s,value:t}=e.target;"location"===s&&shipmentID||M(e=>({...e,[s]:t}))},K=async()=>{_(!0);try{let s=I.key,t="descending"===I.direction,a=await fetch("".concat("https://buybackservice.unicornstore.in","/get-order-details-by-staff?staff_id=").concat(e,"&per_page=").concat(j,"&page=").concat(y,"&search=").concat(P,"&sort_by=").concat(s,"&sort_desc=").concat(t,"&from_date=").concat(Z.startDate,"&to_date=").concat(Z.endDate));if(!a.ok)throw Error("Could not get order details by staff id");let l=await a.json();0===l.data.length?E("No entries found, please refine your search query"):E(""),m(l.data.length>0?l.data:[]),N(Math.ceil(l.total_count/j)),D(l.total_count),C("")}catch(e){console.log(e),C(e)}finally{setTimeout(()=>{_(!1)},1e3)}},L=e=>{h(e)},Q=e=>{g(e)},R=e=>{let s="ascending";I.key===e&&"ascending"===I.direction&&(s="descending"),O({key:e,direction:s}),v(1)};(0,l.useEffect)(()=>{s(localStorage.getItem("staff_id")),e&&K()},[e,j,y,I]),(0,l.useEffect)(()=>{u||p?document.body.classList.add("overflow-hidden"):document.body.classList.remove("overflow-hidden")},[u,p]);let B=(0,r.Z)(P,500);(0,l.useEffect)(()=>{""!==B&&(v(1),K())},[B,P]);let H=e=>I.key!==e?null:"ascending"===I.direction?(0,a.jsx)("i",{className:"bi bi-arrow-up"}):(0,a.jsx)("i",{className:"bi bi-arrow-down"});return(0,a.jsx)("div",{className:"flex justify-center bg-gray-100 min-h-screen relative -top-28",children:(0,a.jsx)("div",{className:"container max-w-screen-xl ",children:(0,a.jsxs)("div",{className:"flex flex-col justify-center space-y-2 bg-white shadow p-4 my-4 rounded-lg",children:[(0,a.jsxs)("div",{className:"relative pb-4",children:[(0,a.jsx)(n.d,{variant:"bordered",selectedKeys:T,onSelectionChange:z,children:(0,a.jsx)(d.G,{"aria-label":"Filters",title:"Filters",startContent:(0,a.jsx)("i",{className:"fas fa-filter"}),children:(0,a.jsxs)("div",{className:"border-t grid grid-cols-2 gap-4 pt-2",children:[(0,a.jsxs)("div",{className:"relative w-full",children:[(0,a.jsx)("label",{htmlFor:"startDate",className:"mb-1",children:"Date From:"}),(0,a.jsx)("input",{type:"date",name:"startDate",id:"startDate",value:Z.startDate,onChange:G,className:"px-4 py-1 border rounded w-full outline-none"})]}),(0,a.jsxs)("div",{className:"relative w-full",children:[(0,a.jsx)("label",{htmlFor:"endDate",className:"mb-1",children:"Date To:"}),(0,a.jsx)("input",{type:"date",name:"endDate",id:"endDate",value:Z.endDate,onChange:G,className:"px-4 py-1 border rounded w-full outline-none"})]}),(0,a.jsx)("div",{className:"col-span-2 relative flex justify-center",children:(0,a.jsxs)("button",{className:"bg-accent px-4 py-1 rounded text-white ring-accent",onClick:()=>{K(),z("0")},children:[(0,a.jsx)("i",{className:"fa-solid fa-filter me-2"}),"Filter"]})})]})},"1")}),(0,a.jsxs)("div",{className:"flex flex-col space-y-2 mt-3",children:[(0,a.jsx)("label",{className:"text-sm text-gray-700",children:"Search by Customer Name, Final Price or Product Name"}),(0,a.jsxs)("span",{className:"w-full grid grid-cols-1 md:grid-cols-6 md:space-x-2",children:[(0,a.jsx)("input",{type:"text",className:"border border-gray-400 py-2 px-4 rounded-md ring-accent col-span-5 transition-all",name:"search-bar",value:P,onChange:e=>A(e.target.value),spellCheck:!1,autoComplete:"off"}),(0,a.jsx)("button",{className:"mt-2 md:mt-0 px-3 py-1 rounded bg-accent text-white cursor-pointer ring-accent",onClick:()=>{A(""),O({key:"",direction:"ascending"}),M({startDate:"",endDate:""})},children:"Clear All Filters"})]})]}),(0,a.jsxs)("div",{className:"mt-4 rounded-md p-4 text-md",children:[(0,a.jsxs)("table",{className:"min-w-full table-auto bg-white rounded overflow-hidden shadow",children:[(0,a.jsx)("thead",{className:"bg-gray-200",children:(0,a.jsxs)("tr",{children:[(0,a.jsxs)("th",{className:"text-center cursor-pointer py-2.5",onClick:()=>R("order_detail_id"),children:["Order ID ",H("order_detail_id")]}),(0,a.jsxs)("th",{className:"text-center cursor-pointer py-2.5",onClick:()=>R("customer_name"),children:["Customer Name ",H("customer_name")]}),(0,a.jsxs)("th",{className:"text-center cursor-pointer py-2.5",onClick:()=>R("order_status"),children:["Order Status ",H("order_status")]}),(0,a.jsxs)("th",{className:"text-center cursor-pointer py-2.5",onClick:()=>R("price"),children:["Final Price ",H("price")]}),(0,a.jsxs)("th",{className:"text-center cursor-pointer py-2.5",onClick:()=>R("product_name"),children:["Product Name ",H("product_name")]}),(0,a.jsx)("th",{className:"text-center py-2.5",children:"Images"}),(0,a.jsx)("th",{className:"text-center py-2.5",children:"Questions"})]})}),(0,a.jsx)("tbody",{className:"divide-y",children:w?Array(j).fill(0).map((e,s)=>(0,a.jsxs)("tr",{className:"divide-x hover:bg-gray-100",children:[(0,a.jsx)("td",{className:"px-3 py-2 whitespace-nowrap",children:(0,a.jsx)(o.X,{className:"h-5 rounded-full"})}),(0,a.jsx)("td",{className:"px-3 py-2 whitespace-nowrap",children:(0,a.jsx)(o.X,{className:"h-5 rounded-full"})}),(0,a.jsx)("td",{className:"px-3 py-2 whitespace-nowrap",children:(0,a.jsx)(o.X,{className:"h-5 rounded-full"})}),(0,a.jsx)("td",{className:"px-3 py-2 whitespace-nowrap",children:(0,a.jsx)(o.X,{className:"h-5 rounded-full"})}),(0,a.jsx)("td",{className:"px-3 py-2 whitespace-nowrap",children:(0,a.jsx)(o.X,{className:"h-5 rounded-full"})}),(0,a.jsx)("td",{className:"px-3 py-2 whitespace-nowrap",children:(0,a.jsx)(o.X,{className:"h-5 rounded-full"})}),(0,a.jsx)("td",{className:"px-3 py-2 whitespace-nowrap",children:(0,a.jsx)(o.X,{className:"h-5 rounded-full"})})]},s)):t.map((e,s)=>(0,a.jsxs)("tr",{className:"text-center  text-sm md:text-base divide-x hover:bg-gray-50",children:[(0,a.jsx)("td",{className:"py-1.5",children:e.order_id}),(0,a.jsx)("td",{className:"py-1.5",children:e.customer_name}),(0,a.jsx)("td",{className:"py-1.5",children:e.order_status}),(0,a.jsx)("td",{className:"py-1.5",children:(0,x.fK)(e.price)}),(0,a.jsx)("td",{className:"py-1.5",children:e.product_name}),(0,a.jsx)("td",{className:"py-1.5",children:(0,a.jsx)("button",{className:"cursor-pointer disabled:cursor-default ".concat(e.images&&e.images.length>0?"text-black":"text-gray-400"),onClick:()=>L(e.order_detail_id),disabled:!(e.images&&e.images.length>0),children:(0,a.jsx)("i",{className:"bi bi-image text-xl"})})}),(0,a.jsxs)("td",{className:"py-1.5",children:[(0,a.jsx)("button",{className:"cursor-pointer disabled:cursor-default ".concat(e.qna&&e.qna.length>0?"text-black":"text-gray-400"),onClick:()=>Q(e.order_detail_id),disabled:!(e.qna&&e.qna.length>0),children:(0,a.jsx)("i",{className:"bi bi-question-square text-xl"})}),u===e.order_detail_id&&(0,a.jsx)("div",{id:"imageGalleryModal",className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm overflow-hidden",children:(0,a.jsxs)("div",{onClick:e=>e.stopPropagation(),className:"relative w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden",children:[(0,a.jsx)("span",{className:"absolute top-4 right-4 z-20 cursor-pointer rounded px-1 text-red-500 hover:bg-[#AAAAAA60] transition duration-200",onClick:()=>h(!1),children:(0,a.jsx)("i",{className:"bi bi-x-lg text-2xl"})}),(0,a.jsx)("div",{className:"p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 overflow-y-auto max-h-[100vh]",children:e.images&&e.images.map((e,s)=>(0,a.jsxs)("div",{className:"relative overflow-hidden rounded-lg shadow-md border flex flex-col pb-2",children:[(0,a.jsx)("p",{className:"w-full text-center",children:Object.keys(e)}),(0,a.jsx)("div",{className:"my-auto",children:(0,a.jsx)("img",{src:e[Object.keys(e)[0]],alt:"Product Image",className:"object-contain object-center w-full h-48"})})]},s))})]})}),p===e.order_detail_id&&(0,a.jsx)("div",{id:"qnaModal",className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm overflow-hidden",children:(0,a.jsxs)("div",{onClick:e=>e.stopPropagation(),className:"relative w-full max-w-screen-xl bg-white rounded-lg shadow-lg overflow-hidden min-h-fit",children:[(0,a.jsx)("span",{className:"absolute top-4 right-4 z-20 cursor-pointer rounded px-1 text-red-500 hover:bg-[#AAAAAA60] transition duration-200",onClick:()=>g(!1),children:(0,a.jsx)("i",{className:"bi bi-x-lg text-2xl"})}),(0,a.jsx)("div",{className:"p-6 overflow-y-auto 2xl:overflow-y-clip max-h-[80vh]",children:e.qna&&e.qna.length>0?(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4",children:e.qna.map((e,s)=>(0,a.jsxs)("div",{className:"border rounded p-4 shadow-sm bg-gray-50",children:[(0,a.jsx)("div",{className:"font-semibold",children:"Question:"}),(0,a.jsx)("p",{children:e.question}),(0,a.jsx)("div",{className:"font-semibold mt-2",children:"Answer:"}),(0,a.jsx)("p",{children:e.answer})]},s))}):(0,a.jsx)("p",{children:"No questions available."})})]})})]})]},s))})]}),q&&(0,a.jsx)("div",{className:"text-red-500 text-center pt-2 min-h-96",children:q}),k&&(0,a.jsx)("div",{className:"text-red-500 text-center pt-2 min-h-96",children:"Something went wrong"})]})]}),(0,a.jsx)(c.Z,{itemsPerPage:j,setItemsPerPage:b,currentPage:y,setCurrentPage:v,totalEntries:S,totalPages:f})]})})})}}},function(e){e.O(0,[260,854,720,888,774,179],function(){return e(e.s=4201)}),_N_E=e.O()}]);