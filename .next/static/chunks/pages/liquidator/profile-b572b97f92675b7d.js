(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[390],{5365:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/liquidator/profile",function(){return l(3947)}])},9722:function(e,a,l){"use strict";var t=l(5893),s=l(4863),n=l(7294),r=l(3942),o=l.n(r);a.Z=e=>{let{maxNumber:a=69,buttonStyles:l={},imageStyles:r={},containerStyles:i={},onImagesChange:d=()=>{},folderName:c,s3imageUrlArray:u,setS3imageUrlArray:m,tag:x,imageName:h,setImageName:p,setAadharCount:b,aadharCount:f,setPhoneCount:v,phoneCount:N,clearImages:g}=e,[y,j]=(0,n.useState)([]),[_,w]=(0,n.useState)(!1),C="https://buybackservice.unicornstore.in",k=e=>e.reduce((e,a)=>({...e,...a}),{});(0,n.useEffect)(()=>{u&&k(u)[x]&&j([{data_url:k(u)[x]}])},[u,x]),(0,n.useEffect)(()=>{g&&g(()=>j([]))},[g]),(0,n.useEffect)(()=>{("GST_certificate"===x||"cheque"===x||"company_logo"===x)&&j(u.filter(e=>e[x]).map(e=>({original_url:e[x],data_url:"".concat(e[x],"?t=").concat(new Date().getTime())})))},[u,x]);let S=e=>({front_aadhar:"front_aadhar",back_aadhar:"back_aadhar",Top:"Top",Bottom:"Bottom",Front:"Front",Back:"Back",Left:"Left",Right:"Right",front_invoice:"front_invoice",back_invoice:"back_invoice"})[e]||e,A=e=>{m(a=>a.filter(a=>!Object.values(a).includes(e)))},F=e=>{let[a,l]=e.split(","),t=a.split(":")[1].split(";")[0],s=atob(l),n=new ArrayBuffer(s.length),r=new Uint8Array(n);for(let e=0;e<s.length;e++)r[e]=s.charCodeAt(e);return new Blob([n],{type:t})},P=(e,a)=>new File([e],a,{type:e.type}),T=async e=>{let a=new FormData;e.forEach(e=>a.append("file",e));try{w(!0);let e=await fetch("".concat(C,"/upload-for-order-detail/?folder_name=").concat(c),{method:"POST",body:a});if(!e.ok)throw Error("Failed to upload images");let l=await e.json();m(e=>[...e,{[S(x)]:l.s3_image_url}]),["Top","Bottom","Front","Back","Left","Right"].includes(x)&&v(e=>e+1),["front_aadhar","back_aadhar"].includes(x)&&b(e=>e+1)}catch(e){console.error("Error uploading images:",e)}finally{w(!1)}},I=(0,n.useCallback)((e,a)=>{p(x+(h+1)),j(e),d(e,a),T(e.map(e=>P(F(e.data_url),"image_".concat(h,".jpg"))))},[d,x,h,T]),D=async e=>{try{if(!(await fetch("".concat(C,"/remove-image?s3_image=").concat(e),{method:"DELETE"})).ok)throw Error("Failed to delete image");["Top","Bottom","Front","Back","Left","Right"].includes(x)&&v(e=>e-1),["front_aadhar","back_aadhar"].includes(x)&&b(e=>e-1)}catch(e){console.error("Error deleting image:",e)}},E=async e=>{let a=y[e];console.log({imageToRemove:a});let l=a&&a.data_url;await D(l),A(l),j(a=>a.filter((a,l)=>l!==e)),m(e=>e.filter(e=>!Object.values(e).includes(l)))};return _?(0,t.jsx)("div",{className:"w-full max-h-full h-full relative grid place-content-center",children:(0,t.jsx)(s.c,{})}):(0,t.jsx)("div",{className:"w-full h-full max-h-full relative ".concat(i),children:(0,t.jsx)(o(),{multiple:!0,value:y,onChange:I,maxNumber:a,dataURLKey:"data_url",children:e=>{let{imageList:a,onImageUpload:s,isDragging:n,dragProps:o}=e;return(0,t.jsxs)("div",{className:"flex flex-col w-full h-full items-center justify-center max-h-full",children:[(0,t.jsx)("button",{style:{...l,color:n?"red":void 0},onClick:s,...o,className:"text-gray-400 w-full h-full content-center absolute top-0 left-0 ",children:(0,t.jsx)("span",{className:"".concat(y.length>0?"hidden":""),children:"Click here to upload or Drop here"})}),(0,t.jsx)("div",{className:"overflow-y-scroll scrollbar-hidden z-10 w-full",children:(0,t.jsx)("div",{className:"flex items-center justify-center w-full space-y-5",children:a.map((e,a)=>(0,t.jsxs)("div",{className:"flex justify-start md:justify-center ",children:[(0,t.jsx)("div",{className:"flex flex-row absolute right-1 space-x-1 top-1 h-full",children:(0,t.jsx)("button",{className:"text-red-500 bg-gray-200 rounded px-1 text-xl h-fit sticky top-1",onClick:e=>{e.stopPropagation(),E(a)},children:(0,t.jsx)("i",{className:"bi bi-x-square"})})}),(0,t.jsx)("img",{className:"h-full",src:e.data_url,alt:"",style:r})]},a))})})]})}})})}},3947:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return u}});var t=l(5893),s=l(7294);l(9722);var n=l(6656),r=l(9008),o=l.n(r);l(1664);var i=l(1163),d=l(3246),c=l(373),u=()=>{(0,i.useRouter)();let e="https://buybackservice.unicornstore.in",[a,l]=(0,s.useState)(1),[r,u]=(0,s.useState)({companyName:"",pincode:"",city:"",state:"",country:"India",address:"",firstName:"",lastName:"",email:"",phone:"",password:"",confirmPassword:"",GSTNumber:"",PANNumber:"",companyLogo:"",website:"",address2:"",city:"",state:"",pincode:"",country:"India",phone2:"",companyStatus:"true",companyType:"",alterCity:"",alterState:"",alterCountry:"India",alterPincode:"",alterAddress:"",bankName:"",IFSC:"",accountNumber:""}),[m,x]=(0,s.useState)(""),[h,p]=(0,s.useState)([]),[b,f]=(0,s.useState)(""),[v,N]=(0,s.useState)({}),[g,y]=(0,s.useState)({}),[j,_]=(0,s.useState)([]),w=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"],[C,k]=(0,s.useState)(!1),[S,A]=(0,s.useState)(null),[F,P]=(0,s.useState)(null),[T,I]=(0,s.useState)(null),[D,E]=(0,s.useState)(!1),[B,G]=(0,s.useState)(),{setBalance:q}=(0,n.K)();(0,s.useEffect)(()=>{1===g.address?u(e=>({...e,alterCity:r.city,alterState:r.state,alterCountry:r.country,alterPincode:r.pincode,alterAddress:r.address})):u(e=>({...e,alterCity:"",alterState:"",alterCountry:"",alterPincode:"",alterAddress:""}))},[g]),(0,s.useEffect)(()=>{k(!0);let a=localStorage.getItem("liquidator_id");x(localStorage.getItem("liquidator_id"));let l=async()=>{try{let a=await fetch("".concat(e,"/get-all-company-types/?page=1&per_page=10&sort_desc=false"));if(!a.ok)throw Error("Could not get company types");let l=await a.json();_(l.data)}catch(e){console.log(e)}};(async()=>{E(!0);try{var l,t,s,n,r,o,i,d,c,m;let x=await fetch("".concat(e,"/get-liquidator-by-id/?liquidator_id=").concat(a));if(!x.ok)throw Error("Could not get user data");let h=await x.json();u(e=>{var a,l,t,s,n,r,o,i,d,c,u,m,x,p,b,f,v,N,g,y,j,_,w,C,k,S,A,F,P,T,I,D,E;return{...e,companyName:null==h?void 0:null===(a=h.basic_info)||void 0===a?void 0:a.company_name,firstName:null==h?void 0:null===(t=h.basic_info)||void 0===t?void 0:null===(l=t.name)||void 0===l?void 0:l.split(" ")[0],lastName:null==h?void 0:null===(n=h.basic_info)||void 0===n?void 0:null===(s=n.name)||void 0===s?void 0:s.split(" ")[1],email:null==h?void 0:null===(r=h.basic_info)||void 0===r?void 0:r.email,phone:null==h?void 0:null===(o=h.basic_info)||void 0===o?void 0:o.phone_number_1,GSTNumber:null==h?void 0:null===(i=h.other_info)||void 0===i?void 0:i.GST_number,PANNumber:null==h?void 0:null===(d=h.other_info)||void 0===d?void 0:d.PAN_number,phone2:null==h?void 0:null===(c=h.other_info)||void 0===c?void 0:c.phone_number_2,city:null==h?void 0:null===(m=h.other_info)||void 0===m?void 0:null===(u=m.registered_address)||void 0===u?void 0:u.city,state:null==h?void 0:null===(p=h.other_info)||void 0===p?void 0:null===(x=p.registered_address)||void 0===x?void 0:x.state,country:null==h?void 0:null===(f=h.other_info)||void 0===f?void 0:null===(b=f.registered_address)||void 0===b?void 0:b.country,pincode:null==h?void 0:null===(N=h.other_info)||void 0===N?void 0:null===(v=N.registered_address)||void 0===v?void 0:v.pin_code,address:null==h?void 0:null===(y=h.other_info)||void 0===y?void 0:null===(g=y.registered_address)||void 0===g?void 0:g.address,alterCity:null==h?void 0:null===(_=h.other_info)||void 0===_?void 0:null===(j=_.office_address)||void 0===j?void 0:j.city,alterState:null==h?void 0:null===(C=h.other_info)||void 0===C?void 0:null===(w=C.office_address)||void 0===w?void 0:w.state,alterCountry:null==h?void 0:null===(S=h.other_info)||void 0===S?void 0:null===(k=S.office_address)||void 0===k?void 0:k.country,alterPincode:null==h?void 0:null===(F=h.other_info)||void 0===F?void 0:null===(A=F.office_address)||void 0===A?void 0:A.pin_code,alterAddress:null==h?void 0:null===(T=h.other_info)||void 0===T?void 0:null===(P=T.office_address)||void 0===P?void 0:P.address,bankName:null==h?void 0:null===(I=h.bank_detail)||void 0===I?void 0:I.bank_name,IFSC:null==h?void 0:null===(D=h.bank_detail)||void 0===D?void 0:D.IFSC,accountNumber:null==h?void 0:null===(E=h.bank_detail)||void 0===E?void 0:E.account_number}}),p([{GST_certificate:null==h?void 0:null===(l=h.other_info)||void 0===l?void 0:l.GST_certificate},{cheque:null==h?void 0:null===(t=h.bank_detail)||void 0===t?void 0:t.cancelled_cheque},{company_logo:null==h?void 0:null===(s=h.other_info)||void 0===s?void 0:s.company_logo}]),A(h.bank_detail),P(h.basic_info),I(h.other_info),G(null==h?void 0:h.registration_completed),(null==h?void 0:null===(r=h.other_info)||void 0===r?void 0:null===(n=r.registered_address)||void 0===n?void 0:n.address)!==null&&(null==h?void 0:null===(i=h.other_info)||void 0===i?void 0:null===(o=i.registered_address)||void 0===o?void 0:o.address)===(null==h?void 0:null===(c=h.other_info)||void 0===c?void 0:null===(d=c.office_address)||void 0===d?void 0:d.address)&&(m="address",y(e=>{let a={...e};return 1===a[m]?delete a[m]:a[m]=1,a})),q(h.other_info.spendable_amount)}catch(e){console.log(e)}E(!1)})(),l()},[]);let L=e=>{},O=async e=>{e.preventDefault();try{l(e=>e+1)}catch(e){console.log(e)}},R=async()=>{try{l(e=>e+1)}catch(e){console.log(e)}},K=async a=>{a.preventDefault();let t=h.reduce((e,a)=>({...e,...a}),{});try{if(!(await fetch("".concat(e,"/liquidators-bank-details?liquidator_id=").concat(m),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({bank_name:r.bankName,account_number:r.accountNumber,IFSC_code:r.IFSC,cancelled_cheque:t.cheque})})).ok)throw Error("Could not add bank details");l(e=>e+1)}catch(e){console.log(e)}};return D?(0,t.jsx)("div",{className:"h-screen flex justify-center mt-40",children:(0,t.jsx)(c.Z,{color:"#42c8b7",loading:D,size:40,"aria-label":"Loading Spinner","data-testid":"loader"})}):(0,t.jsxs)("div",{className:"p-6 bg-gray-100 min-h-screen",children:[(0,t.jsx)(o(),{children:(0,t.jsx)("title",{children:"BuyBack - Profile"})}),(0,t.jsx)("div",{className:"relative flex flex-col items-center w-full mb-10 ",children:(0,t.jsxs)("div",{className:"w-full max-w-4xl  p-6 rounded-lg shadow-md bg-white",children:[(0,t.jsx)("h1",{className:"text-2xl font-semibold mb-4",children:"My Profile"}),C?(0,t.jsxs)(d.v,{activeStep:a,className:"w-full",connectorStyleConfig:{size:2,style:"dashed"},styleConfig:{activeBgColor:"#42c8b7",completedBgColor:"#319488"},children:[(0,t.jsx)(d.h,{onClick:()=>l(0),label:"Basic Details",completed:F}),(0,t.jsx)(d.h,{onClick:()=>l(1),label:"Additional Details",active:!0,completed:T}),(0,t.jsx)(d.h,{onClick:()=>l(2),label:"Bank Details",active:T,completed:S}),(0,t.jsx)(d.h,{onClick:()=>l(3),label:"Done!",active:B,completed:3===a})]}):null,(0,t.jsxs)("div",{className:"w-full",children:[0===a&&(0,t.jsxs)("form",{className:"grid grid-cols-3 gap-y-6 gap-x-4 bg-white p-4 rounded-md",onSubmit:e=>{O(e)},children:[(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-x-4 gap-y-6 col-span-3",children:[(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsxs)("label",{htmlFor:"firstName",className:"font-medium text-gray-700",children:["First Name ",(0,t.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,t.jsx)("input",{type:"text",name:"firstName",value:r.firstName,onChange:L,className:"border px-3 py-2 rounded w-full outline-none transition-all duration-200 focus:ring-1 focus:ring-[#42c8b7] ".concat(v.firstName?"border-red-300":"border-gray-300"),autoComplete:"first-name"}),v.firstName&&(0,t.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:v.firstName})]}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsxs)("label",{htmlFor:"lastName",className:"font-medium text-gray-700",children:["Last Name ",(0,t.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,t.jsx)("input",{type:"text",name:"lastName",value:r.lastName,onChange:L,className:"border px-3 py-2 rounded w-full outline-none transition-all duration-200 focus:ring-1 focus:ring-[#42c8b7] ".concat(v.lastName?"border-red-300":"border-gray-300"),autoComplete:"family-name"}),v.lastName&&(0,t.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:v.lastName})]}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsxs)("label",{htmlFor:"email",className:"font-medium text-gray-700 col-span-2",children:["Email ",(0,t.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,t.jsx)("input",{type:"text",name:"email",value:r.email,onChange:L,className:"border px-3 py-2 rounded w-full outline-none ".concat(v.email?"border-red-300":"border-gray-300")}),v.email&&(0,t.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:v.email})]}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsxs)("label",{htmlFor:"phone",className:"font-medium text-gray-700",children:["Phone Number ",(0,t.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,t.jsx)("input",{type:"number",name:"phone",value:r.phone,onChange:L,className:"border px-3 py-2 rounded w-full outline-none ".concat(v.phone?"border-red-300":"border-gray-300"),onKeyDown:e=>{("ArrowUp"===e.key||"ArrowDown"===e.key)&&e.preventDefault()}}),v.phone&&(0,t.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:v.phone})]}),(0,t.jsxs)("div",{className:"relative col-span-2",children:[(0,t.jsxs)("label",{htmlFor:"companyName",className:"font-medium text-gray-700",children:["Company Name ",(0,t.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,t.jsx)("input",{type:"text",name:"companyName",value:r.companyName,onChange:L,className:"border px-3 py-2 rounded w-full outline-none transition-all duration-200 focus:ring-1 focus:ring-[#42c8b7] ".concat(v.companyName?"border-red-300":"border-gray-300")}),v.companyName&&(0,t.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:v.companyName})]}),(0,t.jsxs)("div",{className:"relative col-span-2",children:[(0,t.jsxs)("label",{htmlFor:"companyStatus",className:"font-medium text-gray-700",children:["Company Status ",(0,t.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,t.jsx)("span",{className:"border rounded block pe-2 w-full outline-none transition-all duration-200 focus-within:ring-1 focus-within:ring-[#42c8b7]",children:(0,t.jsxs)("select",{name:"companyStatus",className:"w-full px-3 py-2 outline-none",value:r.companyStatus,onChange:L,children:[(0,t.jsx)("option",{value:!0,children:"Active"},!0),(0,t.jsx)("option",{value:!1,children:"Inactive"},!1)]})}),v.companyStatus&&(0,t.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:v.companyStatus})]})]}),(0,t.jsxs)("div",{className:"relative mt-6 col-span-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-3",children:[(0,t.jsx)("button",{className:"bg-accent text-white px-4 py-2 rounded disabled:bg-gray-300 disabled:text-black",onClick:()=>l(e=>e-1),disabled:0===a,children:"Previous"}),(0,t.jsx)("button",{className:"bg-accent text-white px-4 py-2 rounded",type:"submit",children:"Next"})]})]}),(0,t.jsx)("div",{className:"".concat(1===a?"":"hidden"),children:(0,t.jsxs)("form",{className:"grid gap-y-2 gap-x-2",onSubmit:e=>e.preventDefault(),children:[T&&(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-5",children:[(0,t.jsxs)("div",{className:"md:col-span-2 grid md:grid-cols-2 gap-x-2 gap-y-5 p-3 border",children:[(0,t.jsxs)("div",{className:"relative col-span-2 md:col-span-1",children:[(0,t.jsxs)("label",{htmlFor:"GSTNumber",children:["GST Number ",(0,t.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,t.jsx)("input",{type:"text",name:"GSTNumber",value:r.GSTNumber,onChange:L,className:"border px-3 py-2 rounded w-full outline-none transition-all duration-200 focus:ring-1 focus:ring-[#42c8b7] ".concat(v.GSTNumber?"border-red-300":"")}),v.GSTNumber&&(0,t.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:v.GSTNumber})]}),(0,t.jsxs)("div",{className:"relative col-span-2 md:col-span-1",children:[(0,t.jsxs)("label",{htmlFor:"PANNumber",children:["PAN Number ",(0,t.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,t.jsx)("input",{type:"text",name:"PANNumber",value:r.PANNumber,onChange:L,className:"border px-3 py-2 rounded w-full outline-none transition-all duration-200 focus:ring-1 focus:ring-[#42c8b7] ".concat(v.PANNumber?"border-red-300":"")}),v.PANNumber&&(0,t.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:v.PANNumber})]}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("label",{htmlFor:"phone2",children:"Alternative Phone Number"}),(0,t.jsx)("input",{type:"number",name:"phone2",value:r.phone2,onChange:L,className:"border px-3 py-2 rounded w-full outline-none transition-all duration-200 focus:ring-1 focus:ring-[#42c8b7] ".concat(v.phone2?"border-red-300":""),onKeyDown:e=>{("ArrowUp"===e.key||"ArrowDown"===e.key)&&e.preventDefault()}}),v.phone2&&(0,t.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:v.phone2})]}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsxs)("label",{htmlFor:"country",children:["Company Type ",(0,t.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,t.jsx)("div",{className:"border rounded pe-2 w-full outline-none transition-all duration-200 focus-within:ring-1 focus-within:ring-[#42c8b7] ".concat(v.companyType?"border-red-300":""),children:(0,t.jsx)("select",{name:"companyType",className:"w-full px-3 py-2 outline-none",value:r.companyType,onChange:L,children:j.map(e=>(0,t.jsx)("option",{value:e.comp_type_id,children:e.comp_type_name},e.comp_type_id))})}),v.companyType&&(0,t.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:v.companyType})]}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("span",{children:"Company Logo"}),(0,t.jsx)("div",{className:"border-2 h-40",children:T.company_logo?(0,t.jsx)("img",{src:T.company_logo,alt:""}):(0,t.jsx)("p",{className:"text-gray-500 text-center h-full content-center",children:"No Image Available"})})]}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsxs)("span",{children:["GST Certificate",(0,t.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,t.jsx)("div",{className:"border-2 h-40 overflow-auto scrollbar-hide",children:T.GST_certificate?(0,t.jsx)("img",{src:T.GST_certificate,alt:""}):"No image available"})]})]}),(0,t.jsxs)("div",{className:"md:col-span-2 grid md:grid-cols-2 gap-x-2 gap-y-5 p-3 border",children:[(0,t.jsx)("div",{className:"col-span-2 relative mt-5 border-b",children:(0,t.jsx)("span",{className:"text-lg",children:"Registered Office Address"})}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsxs)("label",{htmlFor:"country",className:"col-span-2",children:["Country ",(0,t.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,t.jsx)("div",{className:"border rounded pe-2 w-full outline-none transition-all duration-200 focus-within:ring-1 focus-within:ring-[#42c8b7] ".concat(v.country?"border-red-300":""),children:(0,t.jsx)("select",{name:"country",id:"country",className:"w-full px-3 py-2 outline-none",value:r.country,onChange:L,children:(0,t.jsx)("option",{value:"India",children:"India"})})}),v.country&&(0,t.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:v.country})]}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsxs)("label",{htmlFor:"state",className:"col-span-2",children:["State ",(0,t.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,t.jsx)("div",{className:"border rounded pe-2 w-full outline-none transition-all duration-200 focus-within:ring-1 focus-within:ring-[#42c8b7] ".concat(v.state?"border-red-300":""),children:(0,t.jsx)("select",{name:"state",id:"state",className:"w-full px-3 py-2 outline-none",value:r.state||"",onChange:L,children:w.map(e=>(0,t.jsx)("option",{value:e,children:e},e))})}),v.state&&(0,t.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:v.state})]}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsxs)("label",{htmlFor:"city",children:["City ",(0,t.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,t.jsx)("input",{type:"text",name:"city",value:r.city||"",onChange:L,className:"border px-3 py-2 rounded w-full outline-none transition-all duration-200 focus:ring-1 focus:ring-[#42c8b7] ".concat(v.city?"border-red-300":"")}),v.city&&(0,t.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:v.city})]}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsxs)("label",{htmlFor:"pincode",children:["PIN Code ",(0,t.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,t.jsx)("input",{type:"number",name:"pincode",value:r.pincode||"",onChange:L,className:"border px-3 py-2 rounded w-full outline-none transition-all duration-200 focus:ring-1 focus:ring-[#42c8b7] ".concat(v.pincode?"border-red-300":""),onKeyDown:e=>{("ArrowUp"===e.key||"ArrowDown"===e.key)&&e.preventDefault()}}),v.pincode&&(0,t.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:v.pincode})]}),(0,t.jsxs)("div",{className:"relative col-span-2",children:[(0,t.jsxs)("label",{htmlFor:"address",children:["Registered Office Address"," ",(0,t.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,t.jsx)("textarea",{type:"text",name:"address",value:r.address||"",onChange:L,className:"border px-3 py-2 rounded w-full outline-none transition-all duration-200 focus:ring-1 focus:ring-[#42c8b7] resize-none ".concat(v.address?"border-red-300":"")}),v.address&&(0,t.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-2.5 left-0",children:v.address})]})]}),(0,t.jsxs)("div",{className:"md:col-span-2 grid md:grid-cols-2 gap-x-2 gap-y-5 p-3 border",children:[(0,t.jsx)("div",{className:"col-span-2 relative mt-5 border-b",children:(0,t.jsxs)("label",{id:"label-address",className:"flex items-center cursor-pointer custom-checkbox",children:[(0,t.jsx)("input",{type:"checkbox",name:"alternativeAddress",checked:1===g.address,className:"hidden"}),(0,t.jsx)("span",{className:"checkmark",children:(0,t.jsx)("svg",{viewBox:"0 0 24 24",className:"check-icon",children:(0,t.jsx)("path",{d:"M9 19l-7-7 1.41-1.41L9 16.17l14.59-14.59L24 3l-15 15z",fill:"white"})})}),(0,t.jsx)("span",{className:"ml-4 flex flex-col text-lg",children:"Same as Working Office Address"})]})}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsxs)("label",{htmlFor:"alterCountry",className:"col-span-2",children:["Country ",(0,t.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,t.jsx)("div",{className:"border rounded pe-2 w-full outline-none transition-all duration-200 focus-within:ring-1 focus-within:ring-[#42c8b7] ".concat(v.alterCountry?"border-red-300":""),children:(0,t.jsx)("select",{name:"alterCountry",id:"alterCountry",className:"w-full px-3 py-2 outline-none",value:r.alterCountry,onChange:L,children:(0,t.jsx)("option",{value:"India",children:"India"})})}),v.companyType&&(0,t.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:v.alterCountry})]}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsxs)("label",{htmlFor:"alterState",className:"col-span-2",children:["State ",(0,t.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,t.jsx)("div",{className:"border rounded pe-2 w-full outline-none transition-all duration-200 focus-within:ring-1 focus-within:ring-[#42c8b7] ".concat(v.alterState?"border-red-300":""),children:(0,t.jsx)("select",{name:"alterState",id:"alterState",className:"w-full px-3 py-2 outline-none",value:r.alterState||"",onChange:L,children:w.map(e=>(0,t.jsx)("option",{value:e,children:e},e))})}),v.companyType&&(0,t.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:v.alterState})]}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsxs)("label",{htmlFor:"alterCity",children:["City ",(0,t.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,t.jsx)("input",{type:"text",name:"alterCity",id:"alterCity",value:r.alterCity||"",onChange:L,className:"border px-3 py-2 rounded w-full outline-none transition-all duration-200 focus:ring-1 focus:ring-[#42c8b7] ".concat(v.alterCity?"border-red-300":"")}),v.alterCity&&(0,t.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:v.alterCity})]}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsxs)("label",{htmlFor:"alterPincode",children:["PIN Code ",(0,t.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,t.jsx)("input",{type:"number",name:"alterPincode",id:"alterPincode",value:r.alterPincode||"",onChange:L,className:"border px-3 py-2 rounded w-full outline-none transition-all duration-200 focus:ring-1 focus:ring-[#42c8b7] ".concat(v.alterPincode?"border-red-300":""),onKeyDown:e=>{("ArrowUp"===e.key||"ArrowDown"===e.key)&&e.preventDefault()}}),v.alterPincode&&(0,t.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:v.alterPincode})]}),(0,t.jsxs)("div",{className:"relative col-span-2",children:[(0,t.jsxs)("label",{htmlFor:"alterAddress",children:["Working Office Address"," ",(0,t.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,t.jsx)("textarea",{type:"text",name:"alterAddress",id:"alterAddress",value:r.alterAddress||"",onChange:L,className:"border px-3 py-2 rounded w-full outline-none transition-all duration-200 focus:ring-1 focus:ring-[#42c8b7] resize-none ".concat(v.alterAddress?"border-red-300":"")}),v.alterAddress&&(0,t.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-3 left-0",children:v.alterAddress})]})]})]}),(0,t.jsxs)("div",{className:"relative mt-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-3",children:[(0,t.jsx)("button",{className:"bg-accent text-white px-4 py-1 rounded disabled:bg-gray-300 disabled:text-black",onClick:()=>l(e=>e-1),disabled:0===a,children:"Previous"}),(0,t.jsx)("button",{className:"bg-accent text-white px-4 py-1 rounded",onClick:e=>R(e),children:"Next"})]})]})}),2===a&&(0,t.jsxs)("form",{className:"grid grid-cols-3 gap-y-2 gap-x-2",onSubmit:e=>e.preventDefault(),children:[(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-5 col-span-3",children:[(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsxs)("label",{htmlFor:"bankName",children:["Bank Name ",(0,t.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,t.jsx)("input",{type:"text",name:"bankName",id:"bankName",value:r.bankName,onChange:L,className:"border px-3 py-2 rounded w-full outline-none transition-all duration-200 focus:ring-1 focus:ring-[#42c8b7] ".concat(v.bankName?"border-red-300":"")}),v.bankName&&(0,t.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:v.bankName})]}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsxs)("label",{htmlFor:"IFSC",children:["IFSC ",(0,t.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,t.jsx)("input",{type:"text",name:"IFSC",id:"IFSC",value:r.IFSC,onChange:L,className:"border px-3 py-2 rounded w-full outline-none transition-all duration-200 focus:ring-1 focus:ring-[#42c8b7] ".concat(v.IFSC?"border-red-300":"")}),v.IFSC&&(0,t.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:v.IFSC})]}),(0,t.jsxs)("div",{className:"relative col-span-2",children:[(0,t.jsxs)("label",{htmlFor:"accountNumber",children:["Account Number ",(0,t.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,t.jsx)("input",{type:"text",name:"accountNumber",id:"accountNumber",value:r.accountNumber,onChange:L,className:"border px-3 py-2 rounded w-full outline-none transition-all duration-200 focus:ring-1 focus:ring-[#42c8b7] ".concat(v.accountNumber?"border-red-300":"")}),v.accountNumber&&(0,t.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:v.accountNumber})]}),(0,t.jsxs)("div",{className:"relative col-span-2",children:[(0,t.jsxs)("span",{children:["Cheque",(0,t.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,t.jsx)("div",{className:"border-2 h-40 overflow-auto scrollbar-hide grid justify-center",children:(0,t.jsx)("img",{src:S.cancelled_cheque,alt:""})})]})]}),(0,t.jsxs)("div",{className:"relative col-span-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-3",children:[(0,t.jsx)("button",{className:"bg-accent text-white px-4 py-1 rounded disabled:bg-gray-300 disabled:text-black",onClick:()=>l(e=>e-1),disabled:0===a,children:"Previous"}),(0,t.jsx)("button",{className:"bg-accent text-white px-4 py-1 rounded",onClick:K,children:"Next"})]})]}),3===a&&(0,t.jsxs)("div",{className:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative flex items-center",role:"alert",children:[(0,t.jsx)("i",{className:"bi bi-check-circle-fill text-green-700 mr-2"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{className:"font-bold",children:"Success!"}),(0,t.jsxs)("span",{className:"block sm:inline",children:[" ","Your profile has been successfully submitted."]})]})]})]})]})})]})}}},function(e){e.O(0,[863,678,253,888,774,179],function(){return e(e.s=5365)}),_N_E=e.O()}]);