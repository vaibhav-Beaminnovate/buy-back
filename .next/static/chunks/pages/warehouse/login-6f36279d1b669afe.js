(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[868],{1603:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/warehouse/login",function(){return r(2383)}])},2383:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(5893),a=r(9412),s=r(1163),o=r(7294),l=r(9134),u=r(8386),i=()=>{let e="https://buybackservice.unicornstore.in",[t,r]=(0,o.useState)(!1),[i,c]=(0,o.useState)(""),d=(0,s.useRouter)(),[m,p]=(0,o.useState)({username:"",password:""}),[h,f]=(0,o.useState)({username:"",password:""}),[g,b]=(0,o.useState)("username"),[w,v]=(0,o.useState)(""),[x,y]=(0,o.useState)(!1),[j,N]=(0,o.useState)(0),[S,_]=(0,o.useState)(""),[k,P]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let e=localStorage.getItem("warehouse_token"),t=localStorage.getItem("warehouse_name");e&&t&&d.replace("/warehouse")},[d]);let E=e=>{let{name:t,value:r}=e.target;p({...m,[t]:r}),"phone"===g&&y(!1),f(e=>{let n={...e};return"username"===t&&(r.trim()?"phone"===g&&10!==r.length?n.username="Phone number must be 10 digits":n.username="":n.username="".concat("username"===g?"Username":"Phone number"," is required")),"password"===t&&(r.trim()?n.password="":n.password="Password is required"),n})},C=()=>{let e={};return m.username.trim()||(e.username="".concat("username"===g?"Username":"Phone number"," is required")),"phone"===g&&10!==m.username.length&&(e.username="Phone number must be 10 digits"),"username"!==g||m.password.trim()||(e.password="Password is required"),"phone"===g&&x&&!w.trim()&&(e.password="OTP is required"),f(e),0===Object.keys(e).length},I=async t=>{if(t.preventDefault(),C())try{P(!0);let t=new FormData;t.append("username",m.username),t.append("password",m.password);let r=await fetch("".concat(e,"/warehouse/token"),{method:"POST",body:t});if(!r.ok){c("Invalid username or password");return}let n=await r.json();localStorage.setItem("warehouse_token",n.access_token),localStorage.setItem("warehouse_name",n.name),localStorage.setItem("warehouse_id",n.warehouse_id),d.push("/warehouse/shipments")}catch(e){l.Am.error(e.message,{toastId:"warhouseLoginError"})}finally{P(!1)}},O=async t=>{if(t.preventDefault(),C()){if(!x){D();return}try{P(!0),c(null);let t=await fetch("".concat(e,"/confirm_executive_otp"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({otp:w,executive_id:S,otp_for:"executive_log"})});if(!t.ok)throw Error("Could not confirm OTP");let r=await t.json();if("success"!==r.status)throw Error(r.message);localStorage.setItem("warehouse_token",r.access_token),localStorage.setItem("warehouse_name",r.name),localStorage.setItem("warehouse_id",r.warehouse_id),d.replace("/warehouse")}catch(e){c("Something went wrong: ".concat(e.message)),l.Am.error(e.message)}finally{P(!1)}}},D=async()=>{try{P(!0);let t=await fetch("".concat(e,"/send-opt-to-executive/"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({number:m.username,otp_for:"executive_log"})});if(!t.ok)throw Error("Could not send OTP");let r=await t.json();if("success"!==r.status)throw Error(r.message);_(r.executive_id)}catch(e){l.Am.error(e.message)}finally{P(!1),y(!0),N(60)}},T=async()=>{T>0||D()};return(0,o.useEffect)(()=>{let e;return j>0&&(e=setInterval(()=>{N(e=>e-1)},1e3)),()=>clearInterval(e)},[j]),(0,n.jsx)("div",{className:"flex items-center justify-center py-20 mt-24",children:(0,n.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-lg w-full max-w-md",children:[(0,n.jsx)("h2",{className:"text-2xl font-bold text-center mb-6",children:"Warehouse Login"}),"username"===g&&(0,n.jsxs)("form",{onSubmit:e=>I(e),children:[(0,n.jsxs)("div",{className:"mb-6 relative",children:[(0,n.jsx)("label",{htmlFor:"username",className:"block text-gray-700 mb-0.5",children:"Username or Email Address"}),(0,n.jsx)("input",{type:"text",id:"username",name:"username",value:m.username,onChange:e=>E(e),className:"w-full p-3 border border-gray-300 rounded-lg ring-accent ".concat(h.username?"border-red-300":""),placeholder:"Enter username or email",autoComplete:"email"}),h.username&&(0,n.jsx)("span",{className:"text-red-500 text-xs absolute left-0 -bottom-5",children:h.username})]}),(0,n.jsxs)("div",{className:"mb-6 relative",children:[(0,n.jsx)("label",{htmlFor:"password",className:"block text-gray-700 mb-0.5",children:"Password"}),(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("input",{type:t?"text":"password",id:"password",name:"password",value:m.password,onChange:e=>E(e),className:"w-full p-3 border border-gray-300 rounded-lg ring-accent ".concat(h.password?"border-red-300":""),placeholder:"Enter password",autoComplete:"current-password"}),(0,n.jsx)("span",{tabIndex:0,className:"absolute inset-y-0 text-gray-500 cursor-pointer content-center right-0 pe-3 ps-3 rounded-e-lg hover:bg-gray-100 hover:bg-opacity-50 focus:bg-gray-200 focus:bg-opacity-50 outline-none",onClick:()=>{r(e=>!e)},children:(0,n.jsx)("i",{className:"bi ".concat(t?"bi-eye-slash":"bi-eye")})})]}),h.password&&(0,n.jsx)("span",{className:"text-red-500 text-xs absolute left-0 -bottom-5",children:h.password})]}),i&&(0,n.jsx)("p",{className:"text-red-500 text-sm mb-4",children:i}),(0,n.jsx)(a.A,{isLoading:k,type:"submit",className:"w-full bg-accent text-white p-3 rounded-lg transition duration-300",children:"Login"})]}),"phone"===g&&(0,n.jsxs)("form",{onSubmit:e=>O(e),children:[(0,n.jsxs)("div",{className:"mb-4 relative",children:[(0,n.jsx)("label",{htmlFor:"username",className:"block text-gray-700 mb-2",children:"Phone Number"}),(0,n.jsx)("input",{type:"number",id:"username",name:"username",value:m.username,onChange:e=>E(e),className:"w-full p-3 border border-gray-300 rounded-lg ring-accent ".concat(h.username?"border-red-300":""),placeholder:"Enter your phone number",autoComplete:"tel"}),h.username&&(0,n.jsx)("span",{className:"text-red-500 text-xs",children:h.username})]}),(0,n.jsxs)("div",{className:"mb-4 relative",children:[(0,n.jsx)("label",{htmlFor:"OTP",className:"block text-gray-700 mb-2",children:"OTP"}),(0,n.jsx)("div",{className:"relative",children:(0,n.jsx)(u.Z,{id:"OTP",value:w,onChange:v,numInputs:6,renderSeparator:(0,n.jsx)("span",{children:"\xa0"}),inputStyle:"border rounded p-0.5 w-8 outline-none",renderInput:e=>(0,n.jsx)("input",{...e})})}),h.password&&(0,n.jsx)("span",{className:"text-red-500 text-xs",children:h.password})]}),i&&(0,n.jsx)("p",{className:"text-red-500 text-sm mb-4",children:i}),(0,n.jsx)(a.A,{isLoading:k,type:"submit",className:"w-full bg-accent text-white p-3 rounded-lg transition duration-300 ring-accent",children:x?"Login":"Send OTP"})]}),(0,n.jsx)("div",{className:"relative flex justify-between mt-4",children:"phone"===g&&x&&(0,n.jsxs)("button",{className:"w-fit block mr-auto accent disabled:text-gray-400",disabled:j>0,onClick:T,children:["Resend OTP ",j>0?"in ".concat(j):""]})})]})})},c=()=>(0,n.jsx)("div",{children:(0,n.jsx)(i,{})})},8386:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7294),a=function(e){return"object"==typeof e&&null!==e},s=function(e){var t=e.value,r=void 0===t?"":t,s=e.numInputs,o=void 0===s?4:s,l=e.onChange,u=e.onPaste,i=e.renderInput,c=e.shouldAutoFocus,d=void 0!==c&&c,m=e.inputType,p=void 0===m?"text":m,h=e.renderSeparator,f=e.placeholder,g=e.containerStyle,b=e.inputStyle,w=e.skipDefaultStyles,v=void 0!==w&&w,x=n.useState(0),y=x[0],j=x[1],N=n.useRef([]),S=function(){return r?r.toString().split(""):[]},_="number"===p||"tel"===p;n.useEffect(function(){N.current=N.current.slice(0,o)},[o]),n.useEffect(function(){var e;d&&(null===(e=N.current[0])||void 0===e||e.focus())},[d]);var k=function(){if("string"==typeof f){if(f.length===o)return f;f.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}},P=function(e){return(_?!isNaN(Number(e)):"string"==typeof e)&&1===e.trim().length},E=function(e){var t=e.target.value;P(t)&&(T(t),D(y+1))},C=function(e){var t=e.nativeEvent,r=e.target.value;P(r)||(r.length!==o||r.split("").some(function(e){return!P(e)})||(A(r.split("")),D(o-1)),null===t.data&&"deleteContentBackward"===t.inputType&&(e.preventDefault(),T(""),D(y-1)),e.target.value="")},I=function(){j(y-1)},O=function(e){var t=S();[e.code,e.key].includes("Backspace")?(e.preventDefault(),T(""),D(y-1)):"Delete"===e.code?(e.preventDefault(),T("")):"ArrowLeft"===e.code?(e.preventDefault(),D(y-1)):"ArrowRight"===e.code?(e.preventDefault(),D(y+1)):e.key===t[y]?(e.preventDefault(),D(y+1)):("Spacebar"===e.code||"Space"===e.code||"ArrowUp"===e.code||"ArrowDown"===e.code)&&e.preventDefault()},D=function(e){var t,r,n=Math.max(Math.min(o-1,e),0);N.current[n]&&(null===(t=N.current[n])||void 0===t||t.focus(),null===(r=N.current[n])||void 0===r||r.select(),j(n))},T=function(e){var t=S();t[y]=e[0],A(t)},A=function(e){l(e.join(""))},F=function(e){e.preventDefault();var t,r=S(),n=y,a=e.clipboardData.getData("text/plain").slice(0,o-y).split("");if(!(_&&a.some(function(e){return isNaN(Number(e))}))){for(var s=0;s<o;++s)s>=y&&a.length>0&&(r[s]=null!==(t=a.shift())&&void 0!==t?t:"",n++);D(n),A(r)}};return n.createElement("div",{style:Object.assign({display:"flex",alignItems:"center"},a(g)&&g),className:"string"==typeof g?g:void 0,onPaste:u},Array.from({length:o},function(e,t){return t}).map(function(e){var t,r,s;return n.createElement(n.Fragment,{key:e},i({value:null!==(t=S()[e])&&void 0!==t?t:"",placeholder:null!==(s=null===(r=k())||void 0===r?void 0:r[e])&&void 0!==s?s:void 0,ref:function(t){return N.current[e]=t},onChange:E,onFocus:function(t){j(e),t.target.select()},onBlur:I,onKeyDown:O,onPaste:F,autoComplete:"off","aria-label":"Please enter OTP character ".concat(e+1),style:Object.assign(v?{}:{width:"1em",textAlign:"center"},a(b)?b:{}),className:"string"==typeof b?b:void 0,type:p,inputMode:_?"numeric":"text",onInput:C},e),e<o-1&&("function"==typeof h?h(e):h))}))}}},function(e){e.O(0,[23,136,835,562,888,774,179],function(){return e(e.s=1603)}),_N_E=e.O()}]);