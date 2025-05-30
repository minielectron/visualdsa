"use strict";(self.webpackChunkdsa_demos=self.webpackChunkdsa_demos||[]).push([[640],{138:(e,r,t)=>{t.d(r,{A:()=>l});t(43);var i=t(464),n=t(579);const a=i.Ay.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`,o=i.Ay.button`
  padding: 0.5rem 1rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--primary-dark);
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`,s=i.Ay.div`
  display: flex;
  align-items: center;
`,l=e=>{let{onStart:r,onNext:t,onPrev:i,onReset:l,isRunning:d,canGoNext:c=!0,canGoPrev:h=!0,speed:m,onSpeedChange:u,showPrev:p=!0,showSpeed:x=!0,customInputProps:g}=e;return(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{onClick:r,disabled:d,children:d?"Running...":"Start"}),p&&(0,n.jsx)(o,{onClick:i,disabled:!h||d,children:"Prev"}),(0,n.jsx)(o,{onClick:t,disabled:!c||d,children:"Next"}),(0,n.jsx)(o,{onClick:l,children:"Reset"}),x&&(0,n.jsxs)(s,{children:[(0,n.jsx)("label",{style:{marginRight:"0.5rem"},children:"Speed:"}),(0,n.jsxs)("select",{value:m,onChange:e=>u(Number(e.target.value)),disabled:d,children:[(0,n.jsx)("option",{value:500,children:"Fast"}),(0,n.jsx)("option",{value:1e3,children:"Normal"}),(0,n.jsx)("option",{value:2e3,children:"Slow"})]})]}),g&&g.label&&(0,n.jsxs)(s,{children:[(0,n.jsxs)("label",{style:{marginRight:"0.5rem"},children:[g.label,":"]}),(0,n.jsx)("input",{type:g.type||"text",value:g.value,onChange:g.onChange,disabled:d||g.disabled,style:{padding:"0.5rem",width:"200px",...g.style}})]})]})}},245:(e,r,t)=>{t.d(r,{C7:()=>n,DA:()=>h,L2:()=>a,Mo:()=>l,Qn:()=>o,Tw:()=>u,_x:()=>c,mk:()=>m,t6:()=>d,xB:()=>s});var i=t(464);const n=i.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 350px;
`,a=i.Ay.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  position: relative;
`,o=i.Ay.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${e=>e.isPrimary?"var(--primary)":e.isSuccess?"#4caf50":e.isWarning?"#ff9800":e.isError?"#f44336":e.isInfo?"#2196f3":"#e0e0e0"};
  background-color: ${e=>e.isPrimary?"rgba(98, 0, 238, 0.1)":e.isSuccess?"rgba(76, 175, 80, 0.1)":e.isWarning?"rgba(255, 152, 0, 0.1)":e.isError?"rgba(244, 67, 54, 0.1)":e.isInfo?"rgba(33, 150, 243, 0.1)":"white"};
  margin: 0 5px 10px;
  border-radius: var(--border-radius);
  font-weight: ${e=>e.isBold?"bold":"normal"};
  position: relative;
`,s=i.Ay.div`
  position: absolute;
  top: -25px;
  font-size: 0.75rem;
  color: var(--text-secondary);
`,l=i.Ay.div`
  text-align: center;
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: var(--border-radius);
  background-color: ${e=>"success"===e.type?"#e8f5e9":"info"===e.type?"#e3f2fd":"warning"===e.type?"#fff3e0":"error"===e.type?"#ffebee":"white"};
  color: ${e=>"success"===e.type?"#2e7d32":"info"===e.type?"#1565c0":"warning"===e.type?"#e65100":"error"===e.type?"#c62828":"var(--text-primary)"};
`,d=i.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`,c=i.Ay.div`
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-primary);
`,h=i.Ay.div`
  display: flex;
  flex-direction: ${e=>e.direction||"column"};
  gap: 5px;
  min-height: ${e=>e.minHeight||"100px"};
  min-width: ${e=>e.minWidth||"250px"};
  padding: 15px;
  border: 1px dashed #e0e0e0;
  border-radius: var(--border-radius);
  position: relative;
`,m=(i.Ay.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 1.5rem;
`,i.Ay.div`
  display: flex;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: var(--border-radius);
  overflow: hidden;
`,i.Ay.div`
  padding: 8px 12px;
  background-color: #f5f5f5;
  font-weight: 500;
  border-right: 1px solid #e0e0e0;
`,i.Ay.div`
  padding: 8px 12px;
  background-color: white;
`,i.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
`),u=i.Ay.div`
  margin-bottom: 0.5rem;
`},640:(e,r,t)=>{t.r(r),t.d(r,{default:()=>C});var i=t(43),n=t(464),a=t(138),o=t(245),s=t(579);const l=n.Ay.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`,d=n.Ay.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${e=>e.isTarget?"var(--primary)":e.isChecking?"#ff9800":"#e0e0e0"};
  background-color: ${e=>e.isTarget?"rgba(98, 0, 238, 0.1)":e.isChecking?"rgba(255, 152, 0, 0.1)":"white"};
  margin: 0 5px;
  border-radius: var(--border-radius);
  font-weight: ${e=>e.isTarget||e.isChecking?"bold":"normal"};
  position: relative;
`,c=n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`,h=n.Ay.div`
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`,m=n.Ay.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e0e0;
  border-radius: var(--border-radius);
  overflow: hidden;
`,u=n.Ay.div`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  
  &:last-child {
    border-bottom: none;
  }
`,p=n.Ay.div`
  width: 60px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #e0e0e0;
  background-color: ${e=>e.highlight?"rgba(98, 0, 238, 0.1)":"white"};
  
  &:last-child {
    border-right: none;
  }
`,x=n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`,g=n.Ay.button`
  padding: 0.5rem 1rem;
  background: ${e=>e.isSelected?"var(--primary)":"#f5f5f5"};
  color: ${e=>e.isSelected?"white":"var(--text-primary)"};
  border: 1px solid ${e=>e.isSelected?"var(--primary)":"#e0e0e0"};
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  
  &:hover {
    background: ${e=>e.isSelected?"var(--primary-dark)":"#e0e0e0"};
  }
`,y=n.Ay.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`,b=n.Ay.label`
  font-weight: 500;
`,f=n.Ay.input`
  padding: 0.5rem;
  border: 1px solid ${e=>e.isError?"red":"#e0e0e0"};
  border-radius: var(--border-radius);
  width: ${e=>e.width||"150px"};
  font-family: monospace;
`,v=n.Ay.button`
  padding: 0.5rem 1rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.2s ease;
  margin-left: 0.5rem;
  
  &:hover {
    background: var(--primary-dark);
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`,j=n.Ay.div`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.25rem;
  width: 100%;
`,w=n.Ay.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  line-height: 1.4;
  color: var(--text-secondary);
`,A=n.Ay.div`
  display: flex;
  margin-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
`,k=n.Ay.button`
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  border-bottom: 2px solid ${e=>e.isActive?"var(--primary)":"transparent"};
  color: ${e=>e.isActive?"var(--primary)":"var(--text-primary)"};
  font-weight: ${e=>e.isActive?"bold":"normal"};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    color: var(--primary);
  }
`,S=n.Ay.div`
  padding: 1rem;
  background-color: #fff9e6;
  border: 1px solid #ffeeba;
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
  color: #856404;
`,$=[{label:"Basic Example",array:[2,7,11,15],target:9},{label:"Duplicate Elements",array:[3,3],target:6},{label:"No Solution",array:[1,3,5,7],target:15},{label:"Negative Numbers",array:[-1,-2,-3,-5],target:-8},{label:"Zero Target",array:[1,-1,2,-2],target:0},{label:"Multiple Possible Solutions",array:[2,3,4,2],target:4},{label:"Custom",array:[],target:0,isCustom:!0}],C=()=>{const[e,r]=(0,i.useState)([]),[t,n]=(0,i.useState)(0),[C,T]=(0,i.useState)(0),[N,P]=(0,i.useState)({}),[I,E]=(0,i.useState)(null),[z,R]=(0,i.useState)(null),[M,B]=(0,i.useState)(null),[W,G]=(0,i.useState)({text:"Select an example or enter your own values to start.",type:"info"}),[H,F]=(0,i.useState)(!1),[O,D]=(0,i.useState)(1e3),[V,_]=(0,i.useState)(""),[K,L]=(0,i.useState)(""),[Q,Z]=(0,i.useState)(null),[q,J]=(0,i.useState)(null),[U,X]=(0,i.useState)(!1),[Y,ee]=(0,i.useState)("algorithm"),[re,te]=(0,i.useState)(!1),ie=2*e.length+1,ne=()=>{T(0),P({}),E(null),R(null),B(null),te(!1),G({text:'Click "Start" to begin the visualization.',type:"info"}),F(!1)},ae=()=>{C<ie?T((e=>e+1)):F(!1)},oe=()=>{try{const e=V.trim();if(!e)return J("Please enter at least one number"),!1;const t=e.split(",").map((e=>{const r=parseInt(e.trim());if(isNaN(r))throw new Error("Invalid number");return r}));return 0===t.length?(J("Please enter at least one number"),!1):(r(t),J(null),ne(),!0)}catch(e){return J("Invalid input. Please enter comma-separated numbers."),!1}},se=e=>{Z(e);const t=$[e];t.isCustom?oe():(r(t.array),n(t.target),_(t.array.join(",")),L(t.target),J(null)),ne()};(0,i.useEffect)((()=>{if(H){if(C===ie)return M||(te(!0),G({text:`No solution found. No two elements in the array add up to ${t}.`,type:"warning"})),void F(!1);if(C%2!==0){const r=Math.floor(C/2),t=e[r];P((e=>({...e,[t]:r}))),G({text:`Adding ${t} at index ${r} to the hash map with key=${t}, value=${r}.`,type:"info"});const i=setTimeout((()=>{ae()}),O);return()=>clearTimeout(i)}{const r=Math.floor(C/2);if(r<e.length){const i=e[r],n=t-i;if(E(r),R(n),void 0!==N[n]&&N[n]!==r){G({text:`Found the complement ${n} in the hash map at index ${N[n]}! nums[${N[n]}] + nums[${r}] = ${e[N[n]]} + ${i} = ${t}`,type:"success"});const a=setTimeout((()=>{B([N[n],r]),F(!1)}),O);return()=>clearTimeout(a)}{G({text:`Checking if ${n} (${t} - ${i}) is in the hash map. ${void 0!==N[n]?"It exists but points to the current index.":"It's not there yet."}`,type:"info"});const e=setTimeout((()=>{ae()}),O);return()=>clearTimeout(e)}}}}}),[C,H,e,t,N,O,ie]);return(0,i.useEffect)((()=>{null===Q&&$.length>0&&se(0)}),[]),(0,s.jsxs)(o.C7,{children:[(0,s.jsx)("h2",{style:{marginBottom:"1rem",textAlign:"center"},children:"Two Sum Visualization"}),(0,s.jsx)(a.A,{onStart:()=>{0!==e.length?(ne(),F(!0)):J("Please enter at least one number in the array")},onNext:ae,onPrev:()=>{C>0&&T((e=>e-1))},onReset:ne,isRunning:H,canGoNext:C<ie&&null===M,canGoPrev:C>0,speed:O,onSpeedChange:D,showPrev:!0}),(0,s.jsxs)(A,{children:[(0,s.jsx)(k,{isActive:"algorithm"===Y,onClick:()=>ee("algorithm"),children:"Algorithm"}),(0,s.jsx)(k,{isActive:"examples"===Y,onClick:()=>ee("examples"),children:"Examples"}),(0,s.jsx)(k,{isActive:"custom"===Y,onClick:()=>ee("custom"),children:"Custom Input"})]}),"examples"===Y&&(0,s.jsx)(x,{children:$.filter((e=>!e.isCustom)).map(((e,r)=>(0,s.jsx)(g,{isSelected:Q===r,onClick:()=>se(r),disabled:H,children:e.label},r)))}),"custom"===Y&&(0,s.jsxs)(y,{children:[(0,s.jsx)(b,{children:"Array:"}),(0,s.jsx)(f,{value:V,onChange:e=>{_(e.target.value),J(null)},disabled:H,placeholder:"2,7,11,15",width:"250px",isError:q&&q.includes("array")}),(0,s.jsx)(b,{children:"Target:"}),(0,s.jsx)(f,{value:K,onChange:e=>{const r=e.target.value;L(r);const t=parseInt(r);isNaN(t)?""!==r&&J("Target must be a valid number"):(n(t),J(null))},disabled:H,placeholder:"9",width:"60px",type:"number",isError:q&&q.includes("Target")}),(0,s.jsx)(v,{onClick:()=>{oe()&&Z($.length-1)},disabled:H,children:"Apply"}),q&&(0,s.jsx)(j,{children:q})]}),(0,s.jsx)("button",{onClick:()=>X(!U),style:{background:"none",border:"none",color:"var(--primary)",cursor:"pointer",textDecoration:"underline",marginBottom:"1rem"},children:U?"Hide explanation":"How does Two Sum work?"}),U&&(0,s.jsxs)(w,{children:[(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{children:"Problem Statement:"})," Given an array of integers and a target sum, find two numbers such that they add up to the target sum."]}),(0,s.jsx)("p",{children:(0,s.jsx)("strong",{children:"How the Two Sum Algorithm Works:"})}),(0,s.jsxs)("ol",{children:[(0,s.jsx)("li",{children:"We iterate through the array once, and for each element we check if its complement (target - current element) is already in our hash map."}),(0,s.jsx)("li",{children:"If the complement exists in the hash map, we've found our solution! We return the indices of the current element and its complement."}),(0,s.jsx)("li",{children:"If not, we add the current element and its index to the hash map and continue searching."})]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{children:"Time Complexity:"})," O(n) - we only need to iterate through the array once."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{children:"Space Complexity:"})," O(n) - in the worst case, we might need to store all elements in the hash map."]}),(0,s.jsx)("p",{children:(0,s.jsx)("strong",{children:"Edge Cases:"})}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"If no solution exists, we'll iterate through the entire array without finding a match."}),(0,s.jsx)("li",{children:"For duplicate elements, we need to ensure we're not using the same element twice."}),(0,s.jsx)("li",{children:"The solution handles negative numbers, zeros, and all integer values."})]})]}),re&&(0,s.jsxs)(S,{children:["No solution found: There are no two elements in the array that add up to ",t,"."]}),(0,s.jsx)(l,{children:e.length>0?e.map(((e,r)=>(0,s.jsxs)(d,{isTarget:null===M||void 0===M?void 0:M.includes(r),isChecking:r===I||z===e&&!M,children:[(0,s.jsx)(o.xB,{children:r}),e]},r))):(0,s.jsx)("div",{style:{color:"var(--text-secondary)",fontStyle:"italic"},children:"custom"===Y?'Enter values in the array field and click "Apply"':"Select an example to visualize"})}),(0,s.jsxs)(c,{children:[(0,s.jsx)(h,{children:"Hash Map:"}),(0,s.jsx)(m,{children:0===Object.keys(N).length?(0,s.jsx)(u,{children:(0,s.jsx)(p,{style:{fontStyle:"italic",color:"var(--text-secondary)"},children:"Empty"})}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(u,{children:[(0,s.jsx)(p,{children:"Key"}),(0,s.jsx)(p,{children:"Value"})]}),Object.entries(N).map(((e,r)=>{let[t,i]=e;return(0,s.jsxs)(u,{children:[(0,s.jsx)(p,{highlight:parseInt(t)===z&&!M,children:t}),(0,s.jsx)(p,{highlight:null===M||void 0===M?void 0:M.includes(i),children:i})]},r)}))]})})]}),(0,s.jsx)(o.Mo,{type:W.type,children:W.text}),null!==M&&(0,s.jsxs)(o.mk,{children:[(0,s.jsxs)(o.Tw,{children:[(0,s.jsx)("strong",{children:"Solution:"})," [",M[0],", ",M[1],"] (indices ",M[0]," and ",M[1],")"]}),(0,s.jsxs)(o.Tw,{children:[(0,s.jsx)("strong",{children:"Values:"})," ",e[M[0]]," + ",e[M[1]]," = ",t]})]}),(0,s.jsx)("div",{style:{textAlign:"center",margin:"0.5rem 0",fontSize:"0.9rem",color:"var(--text-secondary)"},children:C>0&&`${(()=>{if(0===C)return"Initial state";const e=Math.floor((C-1)/2);return C%2===1?`Step ${C}: Checking if complement of nums[${e}] exists in hash map`:`Step ${C}: Adding nums[${e}] to hash map`})()} (${C}/${ie})`})]})}}}]);
//# sourceMappingURL=640.01179224.chunk.js.map