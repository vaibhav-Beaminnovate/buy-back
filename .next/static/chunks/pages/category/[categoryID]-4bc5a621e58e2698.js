(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[813],{62052:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/[categoryID]",function(){return s(95235)}])},85731:function(e,t,s){"use strict";var a=s(85893),l=s(25675),r=s.n(l),c=s(41664),n=s.n(c);s(67294),t.Z=e=>{let{image:t,categoryID:s,brandId:l,name:c,productId:i}=e;return(0,a.jsxs)(a.Fragment,{children:[i&&(0,a.jsx)(n(),{href:"product/".concat(i),className:"text-black no-underline h-full",children:(0,a.jsxs)("div",{className:" w-36 min-h-48 pt-3  md:w-full  bg-white rounded flex justify-center flex-col items-center h-full",style:{boxShadow:"0 0 5px #d0d0d0"},children:[(0,a.jsx)(r(),{src:t,height:200,width:200,alt:"img",className:"h-100"}),(0,a.jsx)("p",{className:"text-sm px-2 my-2 text-center",children:c})]})}),l&&(0,a.jsx)(n(),{href:"/Brands/".concat(s,"/").concat(l),className:"text-black no-underline relative",children:(0,a.jsxs)("div",{className:" w-36 min-h-40 md:w-40  bg-white rounded flex justify-center flex-col items-center ",style:{boxShadow:"0 0 5px #d0d0d0"},children:[(0,a.jsx)(r(),{src:t,height:80,width:140,alt:"img",className:"-mt-4"}),(0,a.jsx)("p",{className:"text-sm absolute bottom-0 text-center",children:c})]})})]})}},95235:function(e,t,s){"use strict";s.r(t);var a=s(85893),l=s(85731),r=s(32553),c=s(96180),n=s(9008),i=s.n(n),d=s(41664),o=s.n(d),h=s(11163),u=s(67294);t.default=()=>{let e=(0,h.useRouter)(),{categoryID:t}=e.query,s="https://buybackservice.unicornstore.in",[n,d]=(0,u.useState)([]),[x,m]=(0,u.useState)(null),[f,g]=(0,u.useState)(!1),[y,j]=(0,u.useState)(null),b=(0,r.dQ)(),w=(0,u.useCallback)(async()=>{g(!0),j(null);try{let[e,a]=await Promise.all([fetch("".concat(s,"/get-brand-by-category-id?category_id=").concat(t),{headers:{Authorization:b}}),fetch("".concat(s,"/get-category-by-id/?category_id=").concat(t),{headers:{Authorization:b}})]);if(!e.ok||!a.ok)throw Error("Failed to fetch data");let l=await e.json(),r=await a.json();if("error"===l.status)throw Error(l.message);d(l.brands||[]),m(r||{})}catch(e){j("Failed to load category data. Please try again later."),console.error("Error fetching category data:",e)}finally{g(!1)}},[t,s]);return(0,u.useEffect)(()=>{t&&e.isReady&&w()},[t,e.isReady,w]),(0,a.jsxs)("div",{className:"min-h-screen w-screen flex justify-center bg-white",children:[(0,a.jsx)(i(),{children:(0,a.jsxs)("title",{children:["BuyBack - Sell your old ",null==x?void 0:x.name]})}),(0,a.jsxs)("div",{className:"max-w-screen-xl w-full px-5",children:[(0,a.jsxs)("p",{className:"font-semibold text-xl md:heading",children:["Sell your old ",null==x?void 0:x.name,":"]}),(0,a.jsxs)("div",{className:"text-gray-500 text-base",children:[(0,a.jsx)(o(),{href:"/",className:"text-gray-500 hover:underline",children:"Home"})," > ",(0,a.jsxs)(o(),{href:"/category/".concat(t),className:"text-black hover:underline",children:["Sell old ",null==x?void 0:x.name]})]}),(0,a.jsx)("p",{className:"font-semibold text-lg mb-3 md:mb-0",children:"Select Brand"}),f?(0,a.jsx)("div",{className:"text-center text-lg",children:(0,a.jsx)(c.c,{color:"success"})}):y?(0,a.jsx)("p",{className:"text-center text-red-500",children:y}):(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"flex flex-wrap gap-3 justify-center sm:grid sm:gap-y-10 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 lg:mt-5",children:n.length>0&&n.map(e=>(0,a.jsx)("div",{className:"h-fit flex justify-center",children:(0,a.jsx)(l.Z,{name:e.name,image:e.image||"/apple.webp",productId:e.product_id,categoryID:null==x?void 0:x.category_id,brandId:e.brand_id})},e.brand_id))})})]})]})}},9008:function(e,t,s){e.exports=s(7828)}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=62052)}),_N_E=e.O()}]);