(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3818],{75058:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/liquidator/login",function(){return a(35213)}])},35213:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var s=a(85893),r=a(14930),n=a(11163),o=a(67294),l=a(9134),i=a(58386),c=()=>{let e="https://buybackservice.unicornstore.in",[t,a]=(0,o.useState)(!1),[c,d]=(0,o.useState)(""),m=(0,n.useRouter)(),[u,p]=(0,o.useState)({username:"",password:""}),[h,x]=(0,o.useState)({username:"",password:""}),[f,b]=(0,o.useState)("username"),[g,w]=(0,o.useState)(""),[N,y]=(0,o.useState)(!1),[v,j]=(0,o.useState)(0),[S,k]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let e=localStorage.getItem("liquidator_token"),t=localStorage.getItem("liquidator_name");e&&t&&m.replace("/liquidator")},[m]);let P=e=>{let{name:t,value:a}=e.target;p({...u,[t]:a}),"phone"===f&&y(!1),x(e=>{let s={...e};return"username"===t&&(a.trim()?"phone"===f&&10!==a.length?s.username="Phone number must be 10 digits":s.username="":s.username="".concat("username"===f?"Username":"Phone number"," is required")),"password"===t&&(a.trim()?s.password="":s.password="Password is required"),s})},C=()=>{let e={};return u.username.trim()||(e.username="".concat("username"===f?"Username":"Phone number"," is required")),"phone"===f&&10!==u.username.length&&(e.username="Phone number must be 10 digits"),"username"!==f||u.password.trim()||(e.password="Password is required"),"phone"===f&&N&&!g.trim()&&(e.password="OTP is required"),x(e),0===Object.keys(e).length},q=async t=>{if(t.preventDefault(),!C()||(k(!0),!t.target.reportValidity()))return;let a=new FormData;a.append("username",u.username),a.append("password",u.password),d("");try{let t=await fetch("".concat(e,"/liquidator/token"),{method:"POST",body:a});if(!t.ok)throw Error("Could not login");let s=await t.json();if("success"!==s.status)throw Error(s.message);localStorage.setItem("liquidator_token",s.access_token),localStorage.setItem("liquidator_name",s.name),localStorage.setItem("liquidator_id",s.liquidator_id),localStorage.setItem("H7kjAJ",s.registration_completed),s.registration_completed?m.push("/liquidator"):m.push("/liquidator/profile")}catch(e){console.log(e),l.Am.error(e)}k(!1)},_=async t=>{if(t.preventDefault(),C()){if(!N){E();return}try{k(!0),d(null);let t=await fetch("".concat(e,"/liquidators/otp/login"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({number:u.username,otp:g})});if(!t.ok)throw Error("Could not confirm OTP");let a=await t.json();if("success"!==a.status)throw Error(a.message);localStorage.setItem("liquidator_token",a.access_token),localStorage.setItem("liquidator_name",a.name),localStorage.setItem("liquidator_id",a.liquidator_id),localStorage.setItem("H7kjAJ",a.registration_completed),m.replace("/liquidator")}catch(e){d("Something went wrong: ".concat(e.message)),l.Am.error(e.message)}finally{k(!1)}}},E=async()=>{try{k(!0);let t=await fetch("".concat(e,"/liquidator/send/otp/"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({number:u.username})});if(!t.ok)throw Error("Could not send OTP");let a=await t.json();if("success"!==a.status)throw Error(a.message)}catch(e){l.Am.error(e.message)}finally{k(!1),y(!0),j(60)}},I=async()=>{I>0||E()};return(0,o.useEffect)(()=>{let e;return v>0&&(e=setInterval(()=>{j(e=>e-1)},1e3)),()=>clearInterval(e)},[v]),(0,s.jsx)("div",{className:"flex items-center justify-center py-20 bg-white -mt-20",children:(0,s.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-lg w-full max-w-md",children:[(0,s.jsx)("h2",{className:"text-2xl font-bold text-center mb-6",children:"Liquidator Login"}),"username"===f&&(0,s.jsxs)("form",{onSubmit:q,children:[(0,s.jsxs)("div",{className:"mb-6 relative",children:[(0,s.jsx)("label",{htmlFor:"username",className:"block text-gray-700 mb-0.5",children:"Username or Email Address"}),(0,s.jsx)("input",{type:"text",id:"username",name:"username",value:u.username,onChange:P,className:"w-full p-3 border border-gray-300 rounded-lg ring-accent ".concat(h.username?"border-red-300":""),placeholder:"Enter username or email",autoComplete:"email"}),h.username&&(0,s.jsx)("span",{className:"text-red-500 text-xs absolute left-0 -bottom-5",children:h.username})]}),(0,s.jsxs)("div",{className:"mb-6 relative",children:[(0,s.jsx)("label",{htmlFor:"password",className:"block text-gray-700 mb-0.5",children:"Password"}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("input",{type:t?"text":"password",id:"password",name:"password",value:u.password,onChange:P,className:"w-full p-3 border border-gray-300 rounded-lg ring-accent ".concat(h.password?"border-red-300":""),placeholder:"Enter password",autoComplete:"current-password"}),(0,s.jsx)("button",{type:"button",tabIndex:0,className:"absolute inset-y-0 text-gray-500 cursor-pointer content-center right-0 pe-3 ps-3 rounded-e-lg hover:bg-gray-100 hover:bg-opacity-50 focus:bg-gray-200 focus:bg-opacity-50 outline-none",onClick:()=>{a(e=>!e)},children:(0,s.jsx)("i",{className:"bi ".concat(t?"bi-eye-slash":"bi-eye")})})]}),h.password&&(0,s.jsx)("span",{className:"text-red-500 text-xs absolute left-0 -bottom-5",children:h.password})]}),c&&(0,s.jsx)("p",{className:"text-red-500 text-sm mb-4",children:c}),(0,s.jsx)(r.A,{isLoading:S,type:"submit",className:"w-full bg-accent text-white p-3 rounded-lg transition duration-300",children:"Login"})]}),"phone"===f&&(0,s.jsxs)("form",{onSubmit:_,children:[(0,s.jsxs)("div",{className:"mb-4 relative",children:[(0,s.jsx)("label",{htmlFor:"username",className:"block text-gray-700 mb-2",children:"Phone Number"}),(0,s.jsx)("input",{type:"number",id:"username",name:"username",value:u.username,onChange:P,className:"w-full p-3 border border-gray-300 rounded-lg ring-accent ".concat(h.username?"border-red-300":""),placeholder:"Enter your phone number",autoComplete:"tel"}),h.username&&(0,s.jsx)("span",{className:"text-red-500 text-xs",children:h.username})]}),(0,s.jsxs)("div",{className:"mb-4 relative",children:[(0,s.jsx)("label",{htmlFor:"OTP",className:"block text-gray-700 mb-2",children:"OTP"}),(0,s.jsx)("div",{className:"relative",children:(0,s.jsx)(i.Z,{id:"OTP",value:g,onChange:w,numInputs:6,inputType:"number",renderSeparator:(0,s.jsx)("span",{children:"\xa0"}),inputStyle:"border rounded p-0.5 !w-8 outline-none",renderInput:e=>(0,s.jsx)("input",{...e})})}),h.password&&(0,s.jsx)("span",{className:"text-red-500 text-xs",children:h.password})]}),c&&(0,s.jsx)("p",{className:"text-red-500 text-sm mb-4",children:c}),(0,s.jsx)(r.A,{isLoading:S,type:"submit",className:"w-full bg-accent text-white p-3 rounded-lg transition duration-300 ring-accent",children:N?"Login":"Send OTP"})]}),(0,s.jsxs)("div",{className:"relative flex justify-between mt-4",children:["phone"===f&&N&&(0,s.jsxs)("button",{className:"w-fit block mr-auto accent disabled:text-gray-400",disabled:v>0,onClick:I,children:["Resend OTP ",v>0?"in ".concat(v):""]}),(0,s.jsxs)("button",{className:"w-fit block ml-auto accent cursor-pointer",onClick:()=>{b(e=>"username"===e?"phone":"username"),x({username:"",password:""}),p({username:"",password:""}),w(""),y(!1)},children:["Login with"," ","username"===f?"phone number?":"username?"]})]})]})})};a(32553);var d=a(9008),m=a.n(d);a(25675),a(22130);var u=function(){let e=(0,n.useRouter)(),[t,a]=(0,o.useState)("login"),[r,i]=(0,o.useState)({companyName:"",firstName:"",lastName:"",email:"",phone:"",password:"",confirmPassword:""}),[d,u]=(0,o.useState)(!1),[p,h]=(0,o.useState)(!1),[x,f]=(0,o.useState)({}),[b,g]=(0,o.useState)(!1),w=e=>{let{name:t,value:a}=e.target;i(e=>({...e,[t]:a}))},N=()=>{i({companyName:"",firstName:"",lastName:"",email:"",phone:"",password:"",confirmPassword:""})},y=()=>{let e={};return r.companyName.trim()||(e.companyName="Company Name is required"),r.firstName.trim()||(e.firstName="First Name is required"),r.lastName.trim()||(e.lastName="Last Name is required"),r.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email)||(e.email="Email is invalid"):e.email="Email is required",r.phone.trim()||(e.phone="Phone Number is required"),r.password.trim()||(e.password="Password is required"),r.confirmPassword.trim()||(e.confirmPassword="Confirm Password is required"),r.password!==r.confirmPassword&&(e.confirmPassword="Passwords do not match"),f(e),0===Object.keys(e).length},v=async t=>{if(t.preventDefault(),y()){g(!0);try{let t=await fetch("".concat("https://buybackservice.unicornstore.in","/create-liquidator"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r.firstName+" "+r.lastName,email:r.email,phone_number_1:r.phone,company_name:r.companyName,password:r.password,company_status:1})}),a=await t.json();if(!t.ok)throw Error("Could not create liquididator");"liquidator already exists"===a.message?l.Am.warn("User already exists, Login instead"):"error"===a.status?l.Am.error(a.message):(localStorage.setItem("liquidator_token",null==a?void 0:a.access_token),localStorage.setItem("liquidator_name","lorem "),localStorage.setItem("liquidator_id",null==a?void 0:a.liquidator_id),localStorage.setItem("H7kjAJ",null==a?void 0:a.registration_completed),e.push("/liquidator/profile"))}catch(e){console.log(e)}g(!1)}};return(0,s.jsxs)("div",{className:"container px-2 md:px-3 lg:px-4 xl:px-5 py-14 mx-auto min-h-screen",children:[(0,s.jsx)(m(),{children:(0,s.jsx)("title",{children:"BuyBack - Liquidator Login"})}),(0,s.jsx)("div",{className:"flex flex-wrap -m-4 justify-center ".concat((null==t?void 0:t.length)===0?"":"hidden")}),"signup"===t&&(0,s.jsx)("div",{className:"relative flex flex-col items-center w-full ",children:(0,s.jsxs)("div",{className:"w-full md:w-2/3 border p-4 rounded shadow-lg",children:[(0,s.jsx)("span",{className:"font-semibold text-xl h-fit",children:"Create an Account"}),(0,s.jsx)("div",{className:"w-full mt-5",children:(0,s.jsxs)("form",{className:"grid grid-cols-3 gap-y-2 gap-x-2",onSubmit:e=>{v(e)},children:[(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-x-2 gap-y-5 col-span-3 ",children:[(0,s.jsxs)("div",{className:"relative col-span-2",children:[(0,s.jsxs)("label",{htmlFor:"companyName",children:["Company Name ",(0,s.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,s.jsx)("input",{type:"text",name:"companyName",value:r.companyName,onChange:w,className:"border px-2 py-1 rounded w-full outline-none col-span-2 ".concat(x.companyName?"border-red-300":"")}),x.companyName&&(0,s.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:x.companyName})]}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsxs)("label",{htmlFor:"firstName",children:["First Name ",(0,s.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,s.jsx)("input",{type:"text",name:"firstName",value:r.firstName,onChange:w,className:"border px-2 py-1 rounded w-full outline-none ".concat(x.firstName?"border-red-300":""),autoComplete:"first-name"}),x.firstName&&(0,s.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:x.firstName})]}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsxs)("label",{htmlFor:"lastName",children:["Last Name ",(0,s.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,s.jsx)("input",{type:"text",name:"lastName",value:r.lastName,onChange:w,className:"border px-2 py-1 rounded w-full outline-none ".concat(x.lastName?"border-red-300":""),autoComplete:"family-name"}),x.lastName&&(0,s.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:x.lastName})]}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsxs)("label",{htmlFor:"email",className:"col-span-2",children:["Email ",(0,s.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,s.jsx)("input",{type:"text",name:"email",value:r.email,onChange:w,className:"border px-2 py-1 rounded w-full outline-none ".concat(x.email?"border-red-300":"")}),x.email&&(0,s.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:x.email})]}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsxs)("label",{htmlFor:"lastName",children:["Phone Number ",(0,s.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,s.jsx)("input",{type:"number",name:"phone",value:r.phone,onChange:w,className:"border px-2 py-1 rounded w-full outline-none ".concat(x.phone?"border-red-300":""),onKeyDown:e=>{("ArrowUp"===e.key||"ArrowDown"===e.key)&&e.preventDefault()}}),x.phone&&(0,s.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:x.phone})]}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsxs)("label",{htmlFor:"password",className:"col-span-2",children:["Password ",(0,s.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,s.jsxs)("span",{className:"w-full bg-white border px-2 py-1 rounded shadow-sm flex justify-between items-center ".concat(x.password?"border-red-300":""),children:[(0,s.jsx)("input",{type:"".concat(d?"text":"password"),name:"password",className:"outline-none w-full px-2 ",value:r.password,onChange:w,autoComplete:"new-password"}),(0,s.jsx)("i",{className:"bi ".concat(d?"bi-eye-slash":"bi-eye"," cursor-pointer"),onClick:()=>u(!d)})]}),x.password&&(0,s.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:x.password})]}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsxs)("label",{htmlFor:"lastName",children:["Confirm Password ",(0,s.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,s.jsxs)("span",{className:"w-full bg-white border px-2 py-1 rounded shadow-sm flex justify-between items-center ".concat(x.confirmPassword?"border-red-300":""),children:[(0,s.jsx)("input",{type:"".concat(p?"text":"password"),name:"confirmPassword",className:"outline-none w-full px-2 ",value:r.confirmPassword,onChange:w,autoComplete:"new-password"}),(0,s.jsx)("i",{className:"bi ".concat(p?"bi-eye-slash":"bi-eye"," cursor-pointer"),onClick:()=>h(!p)})]}),x.confirmPassword&&(0,s.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-5 left-0",children:x.confirmPassword})]})]}),(0,s.jsxs)("div",{className:"relative mt-3 col-span-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-3",children:[(0,s.jsx)("button",{className:"bg-accent text-white px-4 py-1 rounded flex justify-center items-center",type:"submit",children:b?(0,s.jsx)("span",{className:"inline-block w-4 h-4 border-2 border-white border-t-transparent  rounded-full animate-spin"}):"Register"}),(0,s.jsx)("button",{className:"md:col-start-3 lg:col-start-5 bg-accent py-1 col-span-2 md:col-span-1 rounded text-white",onClick:()=>{a("login"),N()},children:"Login Instead?"})]})]})})]})}),"login"===t&&(0,s.jsx)(c,{setAction:a})]})}},9008:function(e,t,a){e.exports=a(7828)},58386:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var s=a(67294),r=function(e){return"object"==typeof e&&null!==e},n=function(e){var t=e.value,a=void 0===t?"":t,n=e.numInputs,o=void 0===n?4:n,l=e.onChange,i=e.onPaste,c=e.renderInput,d=e.shouldAutoFocus,m=void 0!==d&&d,u=e.inputType,p=void 0===u?"text":u,h=e.renderSeparator,x=e.placeholder,f=e.containerStyle,b=e.inputStyle,g=e.skipDefaultStyles,w=void 0!==g&&g,N=s.useState(0),y=N[0],v=N[1],j=s.useRef([]),S=function(){return a?a.toString().split(""):[]},k="number"===p||"tel"===p;s.useEffect(function(){j.current=j.current.slice(0,o)},[o]),s.useEffect(function(){var e;m&&(null===(e=j.current[0])||void 0===e||e.focus())},[m]);var P=function(){if("string"==typeof x){if(x.length===o)return x;x.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}},C=function(e){return(k?!isNaN(Number(e)):"string"==typeof e)&&1===e.trim().length},q=function(e){var t=e.target.value;C(t)&&(O(t),A(y+1))},_=function(e){var t=e.nativeEvent,a=e.target.value;C(a)||(a.length!==o||a.split("").some(function(e){return!C(e)})||(D(a.split("")),A(o-1)),null===t.data&&"deleteContentBackward"===t.inputType&&(e.preventDefault(),O(""),A(y-1)),e.target.value="")},E=function(){v(y-1)},I=function(e){var t=S();[e.code,e.key].includes("Backspace")?(e.preventDefault(),O(""),A(y-1)):"Delete"===e.code?(e.preventDefault(),O("")):"ArrowLeft"===e.code?(e.preventDefault(),A(y-1)):"ArrowRight"===e.code?(e.preventDefault(),A(y+1)):e.key===t[y]?(e.preventDefault(),A(y+1)):("Spacebar"===e.code||"Space"===e.code||"ArrowUp"===e.code||"ArrowDown"===e.code)&&e.preventDefault()},A=function(e){var t,a,s=Math.max(Math.min(o-1,e),0);j.current[s]&&(null===(t=j.current[s])||void 0===t||t.focus(),null===(a=j.current[s])||void 0===a||a.select(),v(s))},O=function(e){var t=S();t[y]=e[0],D(t)},D=function(e){l(e.join(""))},T=function(e){e.preventDefault();var t,a=S(),s=y,r=e.clipboardData.getData("text/plain").slice(0,o-y).split("");if(!(k&&r.some(function(e){return isNaN(Number(e))}))){for(var n=0;n<o;++n)n>=y&&r.length>0&&(a[n]=null!==(t=r.shift())&&void 0!==t?t:"",s++);A(s),D(a)}};return s.createElement("div",{style:Object.assign({display:"flex",alignItems:"center"},r(f)&&f),className:"string"==typeof f?f:void 0,onPaste:i},Array.from({length:o},function(e,t){return t}).map(function(e){var t,a,n;return s.createElement(s.Fragment,{key:e},c({value:null!==(t=S()[e])&&void 0!==t?t:"",placeholder:null!==(n=null===(a=P())||void 0===a?void 0:a[e])&&void 0!==n?n:void 0,ref:function(t){return j.current[e]=t},onChange:q,onFocus:function(t){v(e),t.target.select()},onBlur:E,onKeyDown:I,onPaste:T,autoComplete:"off","aria-label":"Please enter OTP character ".concat(e+1),style:Object.assign(w?{}:{width:"1em",textAlign:"center"},r(b)?b:{}),className:"string"==typeof b?b:void 0,type:p,inputMode:k?"numeric":"text",onInput:_},e),e<o-1&&("function"==typeof h?h(e):h))}))}}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=75058)}),_N_E=e.O()}]);