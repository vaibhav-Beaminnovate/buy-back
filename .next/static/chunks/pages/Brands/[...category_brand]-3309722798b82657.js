(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5750],{79877:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Brands/[...category_brand]",function(){return s(87519)}])},85731:function(e,t,s){"use strict";var r=s(85893),a=s(25675),n=s.n(a),c=s(41664),l=s.n(c);s(67294),t.Z=e=>{let{image:t,categoryID:s,brandId:a,name:c,productId:i}=e;return(0,r.jsxs)(r.Fragment,{children:[i&&(0,r.jsx)(l(),{href:"product/".concat(i),className:"text-black no-underline h-full",children:(0,r.jsxs)("div",{className:" w-36 min-h-48 pt-3  md:w-full  bg-white rounded flex justify-center flex-col items-center h-full",style:{boxShadow:"0 0 5px #d0d0d0"},children:[(0,r.jsx)(n(),{src:t,height:200,width:200,alt:"img",className:"h-100"}),(0,r.jsx)("p",{className:"text-sm px-2 my-2 text-center",children:c})]})}),a&&(0,r.jsx)(l(),{href:"/Brands/".concat(s,"/").concat(a),className:"text-black no-underline relative",children:(0,r.jsxs)("div",{className:" w-36 min-h-40 md:w-40  bg-white rounded flex justify-center flex-col items-center ",style:{boxShadow:"0 0 5px #d0d0d0"},children:[(0,r.jsx)(n(),{src:t,height:80,width:140,alt:"img",className:"-mt-4"}),(0,r.jsx)("p",{className:"text-sm absolute bottom-0 text-center",children:c})]})})]})}},87519:function(e,t,s){"use strict";s.r(t);var r=s(85893),a=s(67294),n=s(11163),c=s(85731),l=s(9008),i=s.n(l),d=s(41664),o=s.n(d),h=s(32553),u=s(96180);t.default=()=>{let e=(0,n.useRouter)(),{category_brand:t}=e.query,s="https://buybackservice.unicornstore.in",[l,d]=(0,a.useState)({brand:"",products:[]}),[x,m]=(0,a.useState)(!0),[f,g]=(0,a.useState)(null),[p,b]=(0,a.useState)(""),j=(0,h.dQ)();if((0,a.useEffect)(()=>{e.isReady&&(async()=>{m(!0),g(null);try{let e=await fetch("".concat(s,"/get-category-by-id/?category_id=").concat(t[0]),{headers:{Authorization:j}});if(!e.ok)throw Error("Could not fetch category");let r=await e.json();b(r);let a=await fetch("".concat(s,"/get-brand-by-id/?brand_id=").concat(t[1]),{headers:{Authorization:j}});if(!a.ok)throw Error("Failed to fetch brand");let n=await a.json(),c=await fetch("".concat(s,"/get-all-products/?category_id=").concat(t[0],"&brand_id=").concat(t[1],"&per_page=10000"),{headers:{Authorization:j}});if(!c.ok)throw Error("Failed to fetch products");let l=await c.json();d({brand:n.name,products:l.data})}catch(e){g(e.message)}finally{m(!1)}})()},[t,e.isReady]),x)return(0,r.jsx)("div",{className:"text-center mt-40 bg-white",children:(0,r.jsx)(u.c,{color:"success"})});if(f)return(0,r.jsx)("div",{className:"w-screen h-screen flex justify-center bg-white mt-40",children:(0,r.jsxs)("p",{className:"text-red-500",children:["Error: ",f]})});let{brand:w,products:y}=l;return(0,r.jsxs)("div",{className:"min-h-screen w-screen flex justify-center bg-white",children:[(0,r.jsx)(i(),{children:(0,r.jsxs)("title",{children:["BuyBack - Sell your old ",p.name]})}),(0,r.jsxs)("div",{className:"max-w-screen-xl w-full ps-5 md:px-5 lg:px-5 xl:px-0",children:[(0,r.jsxs)("p",{className:"md:heading font-semibold text-xl",children:["Sell your old ",w," mobile:"]}),(0,r.jsxs)("p",{className:"text-gray-500 text-base ps-5 md:ps-0",children:[(0,r.jsx)(o(),{href:"/",className:"text-gray-500 inline no-underline hover:underline",children:"Home"})," > ",(0,r.jsxs)(o(),{href:"/category/".concat(p.category_id),className:"text-gray-500 inline no-underline hover:underline",children:["Sell old ",p.name]})," > ",(0,r.jsxs)("span",{className:"text-black",children:["Sell old ",w]})]}),(0,r.jsx)("p",{className:"font-semibold text-lg mb-3 md:mb-0",children:"Select Model"}),(0,r.jsx)("div",{className:"flex flex-wrap gap-5 justify-center sm:grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 lg:my-5",children:y&&y.length>0?y.map((e,t)=>(0,r.jsx)(c.Z,{name:e.name,image:e.image_url||"/refurbished.webp",productId:e.product_id},t)):(0,r.jsx)("p",{children:"No products available for this brand."})})]})]})}},9008:function(e,t,s){e.exports=s(7828)}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=79877)}),_N_E=e.O()}]);