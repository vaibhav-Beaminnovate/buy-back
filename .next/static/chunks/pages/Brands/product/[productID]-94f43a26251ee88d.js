(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[520],{9371:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Brands/product/[productID]",function(){return a(8772)}])},8772:function(e,t,a){"use strict";a.r(t);var s=a(5893),n=a(5066),c=a(9008),r=a.n(c),i=a(5675),l=a.n(i),d=a(1664),o=a.n(d),u=a(1163),h=a(7294),m=a(373);t.default=()=>{let e=(0,u.useRouter)(),{productID:t}=e.query,a="https://buybackservice.unicornstore.in",[c,i]=(0,h.useState)(null),[d,x]=(0,h.useState)(!0),[p,g]=(0,h.useState)(null),[f,j]=(0,h.useState)(null),[y,w]=(0,h.useState)(null),[_,b]=(0,h.useState)(null),[N,v]=(0,h.useState)(null),[S,k]=(0,h.useState)(null),[E,C]=(0,h.useState)(""),z=(0,n.dQ)(),B=async()=>{let e=await fetch("".concat(a,"/get-variant-by-product_id?product_id=").concat(t),{headers:{Authorization:z}});w(await e.json())};(0,h.useEffect)(()=>{t&&(async()=>{x(!0),g(null);try{let e=await fetch("".concat(a,"/get-product-by-id/?product_id=").concat(t),{headers:{Authorization:z}});if(!e.ok)throw Error("Failed to fetch product data");let s=await e.json();i(s),b(s.price_upto),v(s.name),B();let n=await fetch("".concat(a,"/get-category-by-id?category_id=").concat(s.category_id),{headers:{Authorization:z}});if(!n.ok)throw Error("Could not get category");let c=await n.json();C(c.name)}catch(e){g(e.message)}finally{x(!1)}})()},[t,a]);let O=async()=>{try{let e=await fetch("".concat(a,"/create-order"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:z},body:JSON.stringify({customer_id:2,product_id:c.id,total_value:c.price_upto,status:"Pending"})});if(!e.ok)throw Error("Failed to create order");return(await e.json()).order_id}catch(e){g(e.message)}};return d?(0,s.jsx)("div",{className:"w-screen h-screen flex justify-center  bg-white mt-40",children:(0,s.jsx)(m.Z,{color:"#42c8b7",loading:d,size:40,"aria-label":"Loading Spinner","data-testid":"loader"})}):p?(0,s.jsx)("div",{className:"w-screen h-screen flex justify-center  bg-white mt-40",children:(0,s.jsxs)("p",{className:"text-red-500 text-lg",children:["Error: ",p]})}):c?(0,s.jsxs)("div",{className:"min-h-screen w-screen flex justify-center my-10 md:mt-28 lg:mt-10 bg-white",children:[(0,s.jsx)(r(),{children:(0,s.jsx)("title",{children:"BuyBack - Sell old ".concat(N," ").concat(S)})}),(0,s.jsxs)("div",{className:"max-w-screen-xl w-full px-3",children:[(0,s.jsxs)("p",{className:"md:heading font-semibold text-2xl px-5 md:ps-0",children:["Sell old ",c.name]}),(0,s.jsxs)("p",{className:"text-gray-500 text-base ps-5 md:ps-0",children:[(0,s.jsx)(o(),{href:"/",className:"text-gray-500 inline no-underline hover:underline",children:"Home"})," > ",(0,s.jsxs)(o(),{href:"/category/".concat(c.parent_category_id),className:"text-gray-500 inline no-underline hover:underline",children:["Sell old ",c.parent_category_name]})," > ",(0,s.jsxs)(o(),{href:"/Brands/".concat(c.parent_category_id,"/").concat(c.brand_id),className:"text-gray-500 inline no-underline hover:underline",children:["Sell old ",c.brand_name]})," > ",(0,s.jsxs)("span",{className:"text-black",children:["Sell old ",c.name]})]}),(0,s.jsxs)("div",{className:"lg:max-w-screen-xl min-h-96 rounded grid grid-cols-1 md:grid-cols-4 justify-start items-center mt-5 shadow-lg",children:[(0,s.jsx)("div",{className:"w-full flex justify-center ",children:(0,s.jsx)(l(),{src:c.image_url||"/refurbished.webp",width:150,height:100,alt:c.name||"Product image"})}),(0,s.jsxs)("div",{className:"flex flex-col items-center md:items-start justify-start px-6 col-span-3 pb-4",children:[(0,s.jsxs)("p",{className:"text-lg mb-4 font-semibold",children:[N," ",S]}),(0,s.jsxs)("div",{className:"".concat(""),children:[(0,s.jsx)("p",{className:"",children:"Choose a variant"}),(0,s.jsxs)("p",{className:"mb-6 text-xl",children:["Get upto",(0,s.jsxs)("span",{className:"text-red-500",children:[" ₹",_]})]}),(0,s.jsx)("div",{id:"variants",className:"grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-3 mb-6",children:y&&y.length>0&&(null==y?void 0:y.map((e,t)=>(0,s.jsxs)("label",{className:"flex items-center py-2 px-5 md:px-10 lg:px-6 rounded shadow-md cursor-pointer min-w-40 custom-radio transition-all duration-75 ".concat(f===e.variant_id?"shadow-xl scale-105":""),onClick:()=>{b(e.price),k(e.name),j(e.variant_id)},children:[(0,s.jsx)("input",{type:"checkbox",name:"size",value:e.name,checked:f===e.variant_id,className:"hidden",readOnly:!0}),(0,s.jsx)("span",{className:"radio-custom"}),(0,s.jsx)("span",{className:"ms-3 flex items-center justify-center flex-col w-full",children:e.name})]},t)))})]}),(0,s.jsx)("button",{disabled:!f,className:"bg-accent rounded px-4 py-2 shadow transition-colors text-white ".concat(f?"bg-accent text-white":"bg-gray-200"),onClick:async()=>{let t=await O();t&&e.push("/Brands/product/questions/".concat(f,"/").concat(t))},children:"Get Exact Value"})]})]})]})]}):(0,s.jsx)("div",{className:"w-screen h-screen flex justify-center  bg-white mt-40",children:(0,s.jsx)("p",{children:"No product data available"})})}},9008:function(e,t,a){e.exports=a(7828)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=9371)}),_N_E=e.O()}]);