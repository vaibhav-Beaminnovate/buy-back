(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[382],{5246:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/liquidator",function(){return t(361)}])},91:function(e,s,t){"use strict";var a=t(5893),r=t(7294);s.Z=e=>{let{closingTime:s,withColon:t}=e,[c,n]=(0,r.useState)(i(s));function i(e){let s=new Date,t=new Date(e)-s;if(t<=0)return{days:0,hours:0,minutes:0,seconds:0};let a=Math.floor(t/1e3%60).toString().padStart(2,"0"),r=Math.floor(t/6e4%60).toString().padStart(2,"0"),c=Math.floor(t/36e5%24).toString().padStart(2,"0");return{days:Math.floor(t/864e5).toString().padStart(2,"0"),hours:c,minutes:r,seconds:a}}return((0,r.useEffect)(()=>{let e=setInterval(()=>{n(i(s))},1e3);return()=>clearInterval(e)},[s]),0===c.hours&&0===c.minutes&&0===c.minutes&&0===c.seconds)?(0,a.jsx)("span",{children:"Auction Ended"}):!0===t?(0,a.jsxs)("span",{className:"grid grid-cols-4 justify-center gap-y-2 w-96",children:[(0,a.jsxs)("span",{className:"text-center",children:[c.days+":"," "]}),(0,a.jsxs)("span",{className:"text-center",children:[c.hours+":"," "]}),(0,a.jsxs)("span",{className:"text-center",children:[c.minutes+":"," "]}),(0,a.jsx)("span",{className:"text-center",children:c.seconds}),(0,a.jsx)("span",{className:"text-sm text-center text-gray-400",children:"Days"}),(0,a.jsx)("span",{className:"text-sm text-center text-gray-400",children:"Hours"}),(0,a.jsx)("span",{className:"text-sm text-center text-gray-400",children:"Minutes"}),(0,a.jsx)("span",{className:"text-sm text-center text-gray-400",children:"Seconds"})]}):(0,a.jsxs)("span",{children:[c.days>0?c.days+"d":""," ",c.days>0||c.hours>0?c.hours+"h":""," ",c.hours>0||c.minutes>0?c.minutes+"m":""," ",c.minutes>0||c.seconds>0?c.seconds+"s":""]})}},6828:function(e,s,t){"use strict";var a=t(5893),r=t(7294);s.Z=e=>{let{options:s,placeholder:t,setCurrentOption:c}=e,[n,i]=(0,r.useState)(!1),[l,o]=(0,r.useState)(t),d=e=>{o(e),c(e),i(!1)};return(0,a.jsxs)("div",{className:"relative inline-block text-left",onMouseLeave:()=>i(!1),children:[(0,a.jsxs)("button",{type:"button",onMouseEnter:()=>i(!0),className:"inline-flex w-full justify-between px-2 py-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm ring-accent",children:[l,(0,a.jsx)("i",{className:"bi ".concat(n?"bi-chevron-up":"bi-chevron-down"," ml-2")})]}),n&&(0,a.jsx)("div",{className:"absolute right-0 w-full origin-top-right bg-white border border-gray-300 rounded-md shadow-lg z-50",children:(0,a.jsx)("div",{className:"py-1",children:s.map((e,s)=>(0,a.jsx)("button",{onClick:()=>d(e),className:"block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left",children:e},s))})})]})}},361:function(e,s,t){"use strict";t.r(s);var a=t(5893),r=t(6828),c=t(1664),n=t.n(c),i=t(7294),l=t(91),o=t(9134),d=t(5675),m=t.n(d),x=t(1163),h=t(6656),u=t(5066),p=t(9008),g=t.n(p);s.default=()=>{let e=(0,x.useRouter)(),s="https://buybackservice.unicornstore.in",[t,c]=(0,i.useState)(null),[d,p]=(0,i.useState)("list"),[f,j]=(0,i.useState)(!1),[b,N]=(0,i.useState)(!1),[y,w]=(0,i.useState)(1),[v,_]=(0,i.useState)(1),[S,k]=(0,i.useState)(10),[C,E]=(0,i.useState)("Lot Number"),[L,B]=(0,i.useState)("auction_id"),[P,q]=(0,i.useState)(!1),{setBalance:M}=(0,h.K)(),A=e=>{w(e)},I=async()=>{let e=localStorage.getItem("liquidator_id");if(e)try{let t=await fetch("".concat(s,"/get-liquidator-by-id/?liquidator_id=").concat(e));if(!t.ok)throw Error("Could not get user data");let a=await t.json();console.log("liquid: ",a.other_info.spendable_amount),M(a.other_info.spendable_amount)}catch(e){console.log("something went wrong"),o.Am.error(e.message)}};(0,i.useEffect)(()=>{"false"===localStorage.getItem("completed_registration")&&o.Am.warn("Registration not complete"),T(),I()},[]),(0,i.useEffect)(()=>{console.log(C),"Lot Number"===C?(B("auction_id"),q(!1)):"Starting Bid"===C?(B("starting_price"),q(!1)):"Highest Bid"===C?(B("current_price"),q(!0)):"Lowest Bid"===C&&(B("current_price"),q(!1))},[C]),(0,i.useEffect)(()=>{T()},[y,S,L,P]);let T=async()=>{j(!0);try{let e=await fetch("".concat(s,"/get-all-auctions?page=").concat(y,"&per_page=").concat(S,"&status=open&sort_by=").concat(L,"&sort_desc=").concat(P));if(!e.ok)throw Error("Could not get auctions");let t=await e.json();c(t.data),_(Math.ceil(t.total_count/S)),j(!1)}catch(e){console.log(e),j(!1),N(!0)}};return b?(0,a.jsx)("div",{className:"h-screen flex justify-center mt-40",children:(0,a.jsx)("span",{className:"text-red-500 text-xl",children:"Something went wrong!"})}):(0,a.jsxs)("div",{className:"min-h-screen",children:[(0,a.jsx)(g(),{children:(0,a.jsx)("title",{children:"BuyBack - Liquidators"})}),(0,a.jsxs)("div",{className:"grid grid-cols-2 sm:flex sm:flex-row sm:justify-evenly sm:space-x-4 space-y-2 sm:space-y-0 bg-gray-100 p-4 rounded-md",children:[(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row items-center sm:space-x-2 space-y-1 sm:space-y-0 justify-center",children:[(0,a.jsx)("span",{className:"text-gray-700 text-sm",children:"Sort:"}),(0,a.jsx)(r.Z,{options:["Lot Number","Starting Bid","Highest Bid","Lowest Bid"],placeholder:"Lot Number",className:"w-full sm:w-auto",setCurrentOption:E})]}),(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row items-center sm:space-x-2 space-y-1 sm:space-y-0 justify-center",children:[(0,a.jsx)("span",{className:"text-gray-700 text-sm",children:"Per Page:"}),(0,a.jsx)(r.Z,{options:[10,20,30,40,50],placeholder:"10",className:"w-full sm:w-auto",setCurrentOption:k})]}),(0,a.jsxs)("div",{className:"flex-col sm:flex-row items-center sm:space-x-2 space-y-1 sm:space-y-0 justify-center hidden sm:flex",children:[(0,a.jsx)("span",{className:"text-gray-700 text-sm",children:"View:"}),(0,a.jsxs)("button",{className:"p-2 border border-gray-300 rounded hover:bg-[#54ffe925] flex items-center justify-center ring-accent ".concat("list"===d?"bg-[#54ffe925]":""),onClick:()=>p("list"),children:[(0,a.jsx)("i",{className:"bi bi-list-ul accent text-lg"}),(0,a.jsx)("span",{className:"ml-1 text-sm",children:"List"})]}),(0,a.jsxs)("button",{className:"p-2 border border-gray-300 rounded hover:bg-[#54ffe925] flex items-center justify-center ring-accent ".concat("grid"===d?"bg-[#54ffe925]":""),onClick:()=>p("grid"),children:[(0,a.jsx)("i",{className:"bi bi-grid accent text-lg"}),(0,a.jsx)("span",{className:"ml-1 text-sm",children:"Grid"})]})]}),(0,a.jsxs)("div",{className:"col-span-2 grid grid-cols-2 gap-x-2 sm:hidden",children:[(0,a.jsxs)("button",{className:"p-2 border border-gray-300 rounded hover:bg-[#54ffe925] flex items-center justify-center",onClick:()=>p("list"),children:[(0,a.jsx)("i",{className:"bi bi-list-ul accent text-lg"}),(0,a.jsx)("span",{className:"ml-1 text-sm",children:"List"})]}),(0,a.jsxs)("button",{className:"p-2 border border-gray-300 rounded hover:bg-[#54ffe925] flex items-center justify-center",onClick:()=>p("grid"),children:[(0,a.jsx)("i",{className:"bi bi-grid accent text-lg"}),(0,a.jsx)("span",{className:"ml-1 text-sm",children:"Grid"})]})]})]}),"grid"===d?(0,a.jsx)("div",{className:"flex flex-wrap gap-y-4",children:(null==t?void 0:t.length)!==0?t&&t.map(e=>{var s,t;return(0,a.jsx)(n(),{href:"/liquidator/auction/".concat(e.auction_id),className:"lg:w-1/4 md:w-1/2 p-4 w-full",children:(0,a.jsxs)("div",{className:"shadow-md p-4 bg-white hover:bg-[#42c8b725] hover:shadow-lg rounded-lg transition-all duration-300",children:[(0,a.jsx)("span",{className:"flex justify-center items-center relative h-48 rounded-lg overflow-hidden shadow-sm ",children:(null===(s=e.images[0])||void 0===s?void 0:s.s3_image_url)?(0,a.jsx)(m(),{alt:"ecommerce",className:"object-fit object-center w-full rounded h-24 sm:h-auto",src:null===(t=e.images[0])||void 0===t?void 0:t.s3_image_url,width:150,height:30}):(0,a.jsx)(m(),{alt:"ecommerce",className:"object-fit object-center p-16 w-full rounded h-24 sm:h-auto",src:"/default.webp",width:150,height:30})}),(0,a.jsxs)("div",{className:"mt-4 flex flex-col items-center text-center",children:[(0,a.jsx)("h3",{className:"text-gray-600 text-sm tracking-widest uppercase font-semibold mb-2",children:"Category"}),(0,a.jsx)("h2",{className:"text-gray-800 title-font text-xl font-semibold mb-2",children:e.auction_name}),(0,a.jsxs)("p",{className:"text-gray-700 font-medium mb-1",children:["Starting Bid:"," ",(0,a.jsx)("span",{className:"accent font-semibold",children:(0,u.fK)(e.starting_price)})]}),(0,a.jsxs)("p",{className:"text-gray-700 font-medium mb-1",children:["Current Bid:"," ",(0,a.jsx)("span",{className:"accent font-semibold",children:(0,u.fK)(e.current_price)})]}),(0,a.jsxs)("p",{className:"text-gray-700 font-medium mt-4",children:["Time Left:"," ",(0,a.jsx)("span",{className:"accent font-semibold",children:(0,a.jsx)(l.Z,{closingTime:e.closing_time})})]}),(0,a.jsx)("p",{className:"text-gray-600 text-sm mt-2",children:"Estimated Fees Apply"})]})]})},e.auction_id)}):(0,a.jsxs)("div",{className:"w-full border p-4 mt-6 text-center ",children:[(0,a.jsx)("p",{className:"bi bi-exclamation-triangle text-3xl text-gray-500"}),(0,a.jsx)("div",{className:"",children:"No auctions to show right now, check again later!"})]})}):(null==t?void 0:t.length)!==0?(0,a.jsx)("div",{className:"mt-5 border p-4",children:(0,a.jsxs)("table",{className:"w-full border-collapse",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{className:"hidden sm:table-row border-b",children:[(0,a.jsx)("th",{className:"text-center p-2",children:"Auction ID"}),(0,a.jsx)("th",{className:"text-center p-2 col-span-2",children:"Image"}),(0,a.jsx)("th",{className:"text-center p-2 col-span-2",children:"Name"}),(0,a.jsx)("th",{className:"text-center p-2",children:"Starting Price"}),(0,a.jsx)("th",{className:"text-center p-2",children:"Current Price"}),(0,a.jsx)("th",{className:"text-center p-2",children:"Time Left"}),(0,a.jsx)("th",{className:"text-center p-2",children:"Estimate Fees"})]})}),(0,a.jsx)("tbody",{children:t&&t.map((s,t)=>{var r,c;return(0,a.jsxs)("tr",{className:"border-b hover:bg-[#42c8b725] transition-all cursor-pointer",onClick:()=>e.push("/liquidator/auction/".concat(s.auction_id)),children:[(0,a.jsxs)("td",{className:"text-center p-2",children:[(0,a.jsxs)("span",{className:"sm:hidden font-semibold",children:["Auction ID:"," "]}),s.auction_id]}),(0,a.jsx)("td",{className:"p-2 col-span-2",children:(0,a.jsx)("span",{className:"flex justify-center items-center h-28 relative rounded overflow-hidden ",children:(null===(r=s.images[0])||void 0===r?void 0:r.s3_image_url)?(0,a.jsx)(m(),{alt:"ecommerce",className:"object-fit rounded h-full w-auto",src:null===(c=s.images[0])||void 0===c?void 0:c.s3_image_url,width:150,height:30}):(0,a.jsx)(m(),{alt:"ecommerce",className:"object-fit rounded sm:h-auto",src:"/default.webp",width:150,height:30})})}),(0,a.jsxs)("td",{className:"text-center p-2 col-span-2",children:[(0,a.jsx)("span",{className:"sm:hidden font-semibold",children:"Name: "}),(0,a.jsx)("h2",{className:"title-font text-lg font-medium",children:s.auction_name})]}),(0,a.jsxs)("td",{className:"text-center p-2 font-semibold",children:[(0,a.jsx)("span",{className:"sm:hidden",children:"Starting Price"}),(0,a.jsx)("span",{className:"accent",children:(0,u.fK)(s.starting_price)})]}),(0,a.jsxs)("td",{className:"text-center p-2 font-semibold",children:[(0,a.jsx)("span",{className:"sm:hidden",children:"Current Price"}),(0,a.jsx)("span",{className:"accent",children:(0,u.fK)(s.current_price)})]}),(0,a.jsxs)("td",{className:"text-center p-2 font-semibold",children:[(0,a.jsx)("span",{className:"sm:hidden",children:"Time Left"}),(0,a.jsx)("span",{children:(0,a.jsx)(l.Z,{closingTime:s.closing_time})})]}),(0,a.jsxs)("td",{className:"text-center p-2 font-semibold",children:[(0,a.jsx)("span",{className:"sm:hidden",children:"Estimate Fees"}),(0,a.jsx)("span",{children:"Estimate Fees"})]})]},t)})})]})}):(0,a.jsxs)("div",{className:"w-full border p-4 mt-6 text-center ",children:[(0,a.jsx)("p",{className:"bi bi-exclamation-triangle text-3xl text-gray-500"}),(0,a.jsx)("div",{className:"",children:"No auctions to show right now, check again later!"})]}),(null==t?void 0:t.length)!==0&&(0,a.jsxs)("div",{className:"flex justify-center items-center space-x-2 py-4",children:[(0,a.jsx)("button",{className:"px-3 py-1 rounded border border-gray-300 ".concat(1===y?"opacity-50 cursor-not-allowed":"hover:bg-[#54ffe925]"),onClick:()=>A(y-1),disabled:1===y,children:"Previous"}),Array.from({length:v}).map((e,s)=>(0,a.jsx)("button",{className:"px-3 py-1 rounded border ".concat(y===s+1?"bg-accent text-white":"border-gray-300 hover:bg-[#54ffe925]"),onClick:()=>A(s+1),children:s+1},s+1)),(0,a.jsx)("button",{className:"px-3 py-1 rounded border border-gray-300 ".concat(y===v?"opacity-50 cursor-not-allowed":"hover:bg-[#54ffe925]"),onClick:()=>A(y+1),disabled:y===v,children:"Next"})]})]})}},9008:function(e,s,t){e.exports=t(7828)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=5246)}),_N_E=e.O()}]);