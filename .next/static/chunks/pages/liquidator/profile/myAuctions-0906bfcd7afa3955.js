(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[651],{70777:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/liquidator/profile/myAuctions",function(){return t(79512)}])},50091:function(e,s,t){"use strict";var a=t(85893),n=t(67294);s.Z=e=>{let{closingTime:s,withColon:t}=e,[c,r]=(0,n.useState)(l(s));function l(e){let s=new Date,t=new Date(e)-s;if(t<=0)return{days:0,hours:0,minutes:0,seconds:0};let a=Math.floor(t/1e3%60).toString().padStart(2,"0"),n=Math.floor(t/6e4%60).toString().padStart(2,"0"),c=Math.floor(t/36e5%24).toString().padStart(2,"0");return{days:Math.floor(t/864e5).toString().padStart(2,"0"),hours:c,minutes:n,seconds:a}}return((0,n.useEffect)(()=>{let e=setInterval(()=>{r(l(s))},1e3);return()=>clearInterval(e)},[s]),0===c.hours&&0===c.minutes&&0===c.minutes&&0===c.seconds)?(0,a.jsx)("span",{children:"Auction Ended"}):!0===t?(0,a.jsxs)("span",{className:"grid grid-cols-4 justify-center gap-y-2 w-96",children:[(0,a.jsxs)("span",{className:"text-center",children:[c.days+":"," "]}),(0,a.jsxs)("span",{className:"text-center",children:[c.hours+":"," "]}),(0,a.jsxs)("span",{className:"text-center",children:[c.minutes+":"," "]}),(0,a.jsx)("span",{className:"text-center",children:c.seconds}),(0,a.jsx)("span",{className:"text-sm text-center text-gray-400",children:"Days"}),(0,a.jsx)("span",{className:"text-sm text-center text-gray-400",children:"Hours"}),(0,a.jsx)("span",{className:"text-sm text-center text-gray-400",children:"Minutes"}),(0,a.jsx)("span",{className:"text-sm text-center text-gray-400",children:"Seconds"})]}):(0,a.jsxs)("span",{children:[c.days>0?c.days+"d":""," ",c.days>0||c.hours>0?c.hours+"h":""," ",c.hours>0||c.minutes>0?c.minutes+"m":""," ",c.minutes>0||c.seconds>0?c.seconds+"s":""]})}},26828:function(e,s,t){"use strict";var a=t(85893),n=t(67294);s.Z=e=>{let{options:s,placeholder:t,setCurrentOption:c}=e,[r,l]=(0,n.useState)(!1),[i,o]=(0,n.useState)(t),d=e=>{o(e),c(e),l(!1)};return(0,a.jsxs)("div",{className:"relative inline-block text-left",onMouseLeave:()=>l(!1),children:[(0,a.jsxs)("button",{type:"button",onMouseEnter:()=>l(!0),className:"inline-flex w-full justify-between px-2 py-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm ring-accent",children:[i,(0,a.jsx)("i",{className:"bi ".concat(r?"bi-chevron-up":"bi-chevron-down"," ml-2")})]}),r&&(0,a.jsx)("div",{className:"absolute right-0 w-full origin-top-right bg-white border border-gray-300 rounded-md shadow-lg z-50",children:(0,a.jsx)("div",{className:"py-1",children:s.map((e,s)=>(0,a.jsx)("button",{onClick:()=>d(e),className:"block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left",children:e},s))})})]})}},79512:function(e,s,t){"use strict";t.r(s);var a=t(85893),n=t(26828),c=t(41664),r=t.n(c),l=t(67294),i=t(50091),o=t(9134),d=t(25675),m=t.n(d),u=t(11163),x=t(32553),h=t(9008),p=t.n(h),f=t(4483),j=t(55070);s.default=()=>{let e=(0,u.useRouter)(),[s,t]=(0,l.useState)(null),[c,d]=(0,l.useState)("list"),[h,g]=(0,l.useState)(!1),[N,b]=(0,l.useState)(!1),[y,w]=(0,l.useState)(1),[v,_]=(0,l.useState)(1),[S,k]=(0,l.useState)(10),[L,C]=(0,l.useState)("Lot Number"),[T,E]=(0,l.useState)("auction_id"),[X,B]=(0,l.useState)(!1),M=(0,x.dQ)();(0,l.useEffect)(()=>{"false"===localStorage.getItem("completed_registration")&&o.Am.warn("Registration not complete"),A()},[]),(0,l.useEffect)(()=>{"Lot Number"===L&&(E("auction_id"),B(!1)),"Starting Bid"===L&&(E("starting_price"),B(!1)),"Highest Bid"===L&&(E("current_price"),B(!0)),"Lowest Bid"===L&&(E("current_price"),B(!1)),"Lowest Bid"===L&&E("current_price"),"Highest Bid"===L&&B(!0)},[L]),(0,l.useEffect)(()=>{A()},[y,S,T,X]);let A=async()=>{g(!0);try{let e=localStorage.getItem("liquidator_id"),s=await fetch("".concat("https://buybackservice.unicornstore.in","/get-liquidators-auctions?liquidator_id=").concat(e,"&page=").concat(y,"&per_page=").concat(S,"&sort_by=").concat(T,"&sort_desc=").concat(X),{headers:{Authorization:M}});if(!s.ok)throw Error("Could not get auctions");let a=await s.json();t(a.data),_(Math.ceil(a.total_count/S))}catch(e){console.log(e),b(!0)}finally{setTimeout(()=>{g(!1)},300)}};return N?(0,a.jsx)("div",{className:"h-screen flex justify-center mt-40",children:(0,a.jsx)("span",{className:"text-red-500 text-xl",children:"Something went wrong!"})}):(0,a.jsxs)("div",{className:"min-h-screen",children:[(0,a.jsx)(p(),{children:(0,a.jsx)("title",{children:"BuyBack - My Auctions"})}),(0,a.jsxs)("div",{className:"grid grid-cols-2 sm:flex sm:flex-row sm:justify-evenly sm:space-x-4 space-y-2 sm:space-y-0 bg-gray-100 p-4 rounded-md",children:[(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row items-center sm:space-x-2 space-y-1 sm:space-y-0 justify-center",children:[(0,a.jsx)("span",{className:"text-gray-700 text-sm",children:"Sort:"}),(0,a.jsx)(n.Z,{options:["Lot Number","Highest Bid","Lowest Bid"],placeholder:"Lot Number",className:"w-full sm:w-auto",setCurrentOption:C})]}),(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row items-center sm:space-x-2 space-y-1 sm:space-y-0 justify-center",children:[(0,a.jsx)("span",{className:"text-gray-700 text-sm",children:"Per Page:"}),(0,a.jsx)(n.Z,{options:[10,20,30,40,50],placeholder:"10",className:"w-full sm:w-auto",setCurrentOption:k})]}),(0,a.jsxs)("div",{className:"flex-col sm:flex-row items-center sm:space-x-2 space-y-1 sm:space-y-0 justify-center hidden sm:flex",children:[(0,a.jsx)("span",{className:"text-gray-700 text-sm",children:"View:"}),(0,a.jsxs)("button",{className:"p-2 border border-gray-300 rounded hover:bg-[#54ffe925] flex items-center justify-center ring-accent ".concat("list"===c?"bg-[#54ffe925]":""),onClick:()=>{d("list"),g(!0),setTimeout(()=>{g(!1)},600)},children:[(0,a.jsx)("i",{className:"bi bi-list-ul accent text-lg"}),(0,a.jsx)("span",{className:"ml-1 text-sm",children:"List"})]}),(0,a.jsxs)("button",{className:"p-2 border border-gray-300 rounded hover:bg-[#54ffe925] flex items-center justify-center ring-accent ".concat("grid"===c?"bg-[#54ffe925]":""),onClick:()=>{d("grid"),g(!0),setTimeout(()=>{g(!1)},600)},children:[(0,a.jsx)("i",{className:"bi bi-grid accent text-lg"}),(0,a.jsx)("span",{className:"ml-1 text-sm",children:"Grid"})]})]}),(0,a.jsxs)("div",{className:"col-span-2 grid grid-cols-2 gap-x-2 sm:hidden",children:[(0,a.jsxs)("button",{className:"p-2 border border-gray-300 rounded hover:bg-[#54ffe925] flex items-center justify-center",onClick:()=>{d("list"),g(!0),setTimeout(()=>{g(!1)},1e3)},children:[(0,a.jsx)("i",{className:"bi bi-list-ul accent text-lg"}),(0,a.jsx)("span",{className:"ml-1 text-sm",children:"List"})]}),(0,a.jsxs)("button",{className:"p-2 border border-gray-300 rounded hover:bg-[#54ffe925] flex items-center justify-center",onClick:()=>{d("grid"),g(!0),setTimeout(()=>{g(!1)},1e3)},children:[(0,a.jsx)("i",{className:"bi bi-grid accent text-lg"}),(0,a.jsx)("span",{className:"ml-1 text-sm",children:"Grid"})]})]})]}),"grid"===c?(0,a.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-4 pt-7",children:h?[,,,,].fill(0).map((e,s)=>(0,a.jsxs)("div",{className:"p-6 shadow-md bg-white hover:bg-accent-dimmed hover:shadow-lg rounded-lg transition-all duration-300 space-y-4",children:[(0,a.jsx)("div",{className:"relative rounded-lg overflow-hidden",children:(0,a.jsx)(f.X,{className:"w-full h-48 object-cover"})}),(0,a.jsx)(f.X,{className:"h-5 w-3/5 mx-auto rounded-md"}),(0,a.jsx)(f.X,{className:"h-4 w-4/5 mx-auto rounded-full"}),(0,a.jsx)(f.X,{className:"h-4 w-4/5 mx-auto rounded-full"}),(0,a.jsxs)("div",{className:"flex flex-col items-center mt-4 space-y-2",children:[(0,a.jsx)(f.X,{className:"h-4 w-3/4 rounded-full"}),(0,a.jsx)(f.X,{className:"h-4 w-1/2 rounded-full"})]})]},s)):(null==s?void 0:s.length)!==0?s&&s.map((e,s)=>{var t,n;return(0,a.jsxs)(r(),{href:"/liquidator/auction/".concat(e.auction_id),className:"p-8 shadow-md bg-white hover:bg-accent-dimmed hover:shadow-lg rounded-lg transition-all duration-300 ring-accent",children:[(0,a.jsx)("span",{className:"flex justify-center items-center relative h-48 rounded-lg overflow-hidden shadow-sm",children:(null===(t=e.images[0])||void 0===t?void 0:t.s3_image_url)?(0,a.jsx)(m(),{alt:"ecommerce",className:"object-cover object-center rounded h-24 sm:h-auto",src:null===(n=e.images[0])||void 0===n?void 0:n.s3_image_url,width:150,height:150}):(0,a.jsx)(m(),{alt:"ecommerce",className:"object-cover object-center rounded h-24 sm:h-auto",src:"/default.webp",width:150,height:150})}),(0,a.jsxs)("div",{className:"mt-4 flex flex-col items-center text-center",children:[(0,a.jsx)("h2",{className:"text-gray-800 title-font text-xl font-semibold mb-2",children:e.auction_name}),(0,a.jsxs)("p",{className:"text-gray-700 font-medium mb-1",children:["Current Bid:"," ",(0,a.jsx)("span",{className:"accent font-semibold",children:(0,x.fK)(e.current_price)})]}),(0,a.jsxs)("p",{className:"text-gray-700 font-medium mb-1",children:["My Bid:"," ",(0,a.jsx)("span",{className:"accent font-semibold",children:(0,x.fK)(e.your_bid)})]}),(0,a.jsxs)("p",{className:"text-gray-700 font-medium mt-4",children:["Time Left:"," ",(0,a.jsx)("span",{className:"accent font-semibold",children:(0,a.jsx)(i.Z,{closingTime:e.closing_time})})]}),(0,a.jsxs)("p",{className:"text-gray-600 mt-2",children:[(0,a.jsx)("span",{className:"sm:hidden",children:"Status"}),(0,a.jsx)("span",{className:"inline-flex items-center px-3 py-1 rounded-full ".concat(e.auction_won?" text-green-500":" text-red-500"),children:"closed"===e.status?e.auction_won?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("i",{className:"bi bi-trophy-fill mr-1"})," Won"]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("i",{className:"bi bi-x-circle-fill mr-1"})," Lost"]}):(0,a.jsx)("p",{children:"Auction Ongoing"})})]})]})]},s)}):(0,a.jsxs)("div",{className:"w-full border p-4 mt-6 text-center ",children:[(0,a.jsx)("p",{className:"bi bi-exclamation-triangle text-3xl text-gray-500"}),(0,a.jsx)("div",{className:"",children:"You have not participated in any auctions!"})]})}):(0,a.jsx)("div",{className:"mt-5 border p-4",children:(0,a.jsxs)("table",{className:"w-full border-collapse",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{className:"hidden sm:table-row border-b",children:[(0,a.jsx)("th",{className:"text-center p-2",children:"Auction ID"}),(0,a.jsx)("th",{className:"text-center p-2 col-span-2",children:"Image"}),(0,a.jsx)("th",{className:"text-center p-2 col-span-2",children:"Name"}),(0,a.jsx)("th",{className:"text-center p-2",children:"Current Bid"}),(0,a.jsx)("th",{className:"text-center p-2",children:"My Bid"}),(0,a.jsx)("th",{className:"text-center p-2",children:"Time Left"}),(0,a.jsx)("th",{className:"text-center p-2",children:"Status"})]})}),h?(0,a.jsx)("tbody",{className:"divide-y",children:Array(10).fill(0).map((e,s)=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"px-3 py-2",children:(0,a.jsx)(f.X,{className:"h-6 rounded-full"})}),(0,a.jsx)("td",{className:"px-3 py-2",children:(0,a.jsx)(f.X,{className:"h-24 rounded-lg"})}),(0,a.jsx)("td",{className:"px-3 py-2",children:(0,a.jsx)(f.X,{className:"h-6 rounded-full"})}),(0,a.jsx)("td",{className:"px-3 py-2",children:(0,a.jsx)(f.X,{className:"h-6 rounded-full"})}),(0,a.jsx)("td",{className:"px-3 py-2",children:(0,a.jsx)(f.X,{className:"h-6 rounded-full"})}),(0,a.jsx)("td",{className:"px-3 py-2",children:(0,a.jsx)(f.X,{className:"h-6 rounded-full"})}),(0,a.jsx)("td",{className:"px-3 py-2",children:(0,a.jsx)(f.X,{className:"h-6 rounded-full"})})]},s))}):(null==s?void 0:s.length)!==0?(0,a.jsx)("tbody",{children:s&&s.map((s,t)=>{var n,c;return(0,a.jsxs)("tr",{className:"border-b hover:bg-[#42c8b725] transition-all cursor-pointer",onClick:()=>e.push("/liquidator/auction/".concat(s.auction_id)),children:[(0,a.jsxs)("td",{className:"text-center p-2",children:[(0,a.jsxs)("span",{className:"sm:hidden font-semibold",children:["Auction ID:"," "]}),s.auction_id]}),(0,a.jsx)("td",{className:"p-2 col-span-2",children:(0,a.jsx)("div",{className:"flex justify-center items-center h-28 relative rounded overflow-hidden ",children:(null===(n=s.images[0])||void 0===n?void 0:n.s3_image_url)?(0,a.jsx)(m(),{alt:"ecommerce",className:"object-cover object-center rounded h-full w-auto",src:null===(c=s.images[0])||void 0===c?void 0:c.s3_image_url,width:150,height:30}):(0,a.jsx)(m(),{alt:"ecommerce",className:"object-cover object-center w-32 rounded h-24 sm:h-auto",src:"/default.webp",width:150,height:30})})}),(0,a.jsxs)("td",{className:"text-center p-2 col-span-2",children:[(0,a.jsx)("span",{className:"sm:hidden font-semibold",children:"Name: "}),(0,a.jsx)("h2",{className:"title-font text-lg font-medium",children:s.auction_name})]}),(0,a.jsxs)("td",{className:"text-center p-2 font-semibold",children:[(0,a.jsx)("span",{className:"sm:hidden",children:"Current Price"}),(0,a.jsx)("span",{className:"accent",children:(0,x.fK)(s.current_price)})]}),(0,a.jsxs)("td",{className:"text-center p-2 font-semibold",children:[(0,a.jsx)("span",{className:"sm:hidden",children:"Starting Price"}),(0,a.jsx)("span",{className:"accent",children:(0,x.fK)(s.your_bid)})]}),(0,a.jsxs)("td",{className:"text-center p-2 font-semibold",children:[(0,a.jsx)("span",{className:"sm:hidden",children:"Time Left"}),(0,a.jsx)("span",{children:(0,a.jsx)(i.Z,{closingTime:s.closing_time})})]}),(0,a.jsxs)("td",{className:"text-center p-2 font-semibold",children:[(0,a.jsx)("span",{className:"sm:hidden",children:"Status"}),(0,a.jsx)("span",{className:"inline-flex items-center px-3 py-1 rounded-full ".concat(s.auction_won?" text-green-500":" text-red-500"),children:"open"!==s.status?s.auction_won?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("i",{className:"bi bi-trophy-fill mr-1"})," Won"]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("i",{className:"bi bi-x-circle-fill mr-1"})," ","Lost"]}):"Auction in process"})]})]},t)})}):(0,a.jsx)("tbody",{className:"w-full border p-4 mt-6 text-center ",children:(0,a.jsx)("tr",{children:(0,a.jsxs)("td",{colSpan:7,"aria-colspan":7,children:[(0,a.jsx)("p",{className:"bi bi-exclamation-triangle text-3xl text-gray-500"}),(0,a.jsx)("p",{children:"You have not participated in any auctions!"})]})})})]})}),(null==s?void 0:s.length)!==0&&(0,a.jsx)("div",{className:"flex justify-center mt-4",children:(0,a.jsx)(j.g,{showControls:!0,total:v,color:"success",classNames:{cursor:"text-white"},page:y,onChange:w})})]})}},9008:function(e,s,t){e.exports=t(7828)},92924:function(e,s,t){"use strict";t.d(s,{D:function(){return n}});var a=t(85893),n=e=>(0,a.jsx)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",viewBox:"0 0 24 24",width:"1em",...e,children:(0,a.jsx)("path",{d:"M15.5 19l-7-7 7-7",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"})})},54792:function(e,s,t){"use strict";t.d(s,{j:function(){return x}});let a=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),n=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);var c=t(67294),r=t(37385);let l=Symbol.for("react-aria.i18n.locale");function i(){let e="undefined"!=typeof window&&window[l]||"undefined"!=typeof navigator&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch{e="en-US"}return{locale:e,direction:!function(e){if(Intl.Locale){let s=new Intl.Locale(e).maximize(),t="function"==typeof s.getTextInfo?s.getTextInfo():s.textInfo;if(t)return"rtl"===t.direction;if(s.script)return a.has(s.script)}let s=e.split("-")[0];return n.has(s)}(e)?"ltr":"rtl"}}let o=i(),d=new Set;function m(){for(let e of(o=i(),d))e(o)}let u=c.createContext(null);function x(){let e=function(){let e=(0,r.Av)(),[s,t]=(0,c.useState)(o);return((0,c.useEffect)(()=>(0===d.size&&window.addEventListener("languagechange",m),d.add(t),()=>{d.delete(t),0===d.size&&window.removeEventListener("languagechange",m)}),[]),e)?{locale:"en-US",direction:"ltr"}:s}();return(0,c.useContext)(u)||e}}},function(e){e.O(0,[260,2888,9774,179],function(){return e(e.s=70777)}),_N_E=e.O()}]);