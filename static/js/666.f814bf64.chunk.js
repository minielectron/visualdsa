"use strict";(self.webpackChunkdsa_demos=self.webpackChunkdsa_demos||[]).push([[666],{138:(e,r,t)=>{t.d(r,{A:()=>o});t(43);var i=t(464),n=t(579);const s=i.Ay.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`,a=i.Ay.button`
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
`,l=i.Ay.div`
  display: flex;
  align-items: center;
`,o=e=>{let{onStart:r,onNext:t,onPrev:i,onReset:o,isRunning:d,canGoNext:c=!0,canGoPrev:p=!0,speed:m,onSpeedChange:u,showPrev:x=!0,showSpeed:g=!0,customInputProps:h}=e;return(0,n.jsxs)(s,{children:[(0,n.jsx)(a,{onClick:r,disabled:d,children:d?"Running...":"Start"}),x&&(0,n.jsx)(a,{onClick:i,disabled:!p||d,children:"Prev"}),(0,n.jsx)(a,{onClick:t,disabled:!c||d,children:"Next"}),(0,n.jsx)(a,{onClick:o,children:"Reset"}),g&&(0,n.jsxs)(l,{children:[(0,n.jsx)("label",{style:{marginRight:"0.5rem"},children:"Speed:"}),(0,n.jsxs)("select",{value:m,onChange:e=>u(Number(e.target.value)),disabled:d,children:[(0,n.jsx)("option",{value:500,children:"Fast"}),(0,n.jsx)("option",{value:1e3,children:"Normal"}),(0,n.jsx)("option",{value:2e3,children:"Slow"})]})]}),h&&h.label&&(0,n.jsxs)(l,{children:[(0,n.jsxs)("label",{style:{marginRight:"0.5rem"},children:[h.label,":"]}),(0,n.jsx)("input",{type:h.type||"text",value:h.value,onChange:h.onChange,disabled:d||h.disabled,style:{padding:"0.5rem",width:"200px",...h.style}})]})]})}},245:(e,r,t)=>{t.d(r,{C7:()=>n,DA:()=>p,L2:()=>s,Mo:()=>o,Qn:()=>a,Tw:()=>u,_x:()=>c,mk:()=>m,t6:()=>d,xB:()=>l});var i=t(464);const n=i.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 350px;
`,s=i.Ay.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  position: relative;
`,a=i.Ay.div`
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
`,l=i.Ay.div`
  position: absolute;
  top: -25px;
  font-size: 0.75rem;
  color: var(--text-secondary);
`,o=i.Ay.div`
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
`,p=i.Ay.div`
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
`},666:(e,r,t)=>{t.r(r),t.d(r,{default:()=>S});var i=t(43),n=t(464),s=t(138),a=t(245),l=t(579);console.log("AddTwoNumbersVisualization component is being loaded");n.Ay.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,n.Ay.button`
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
`;const o=n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
`,d=n.Ay.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 1rem;
`,c=n.Ay.div`
  position: absolute;
  left: -40px;
  font-weight: 500;
  color: var(--text-primary);
`,p=n.Ay.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${e=>e.isActive?"var(--primary)":e.isResult?"#4caf50":"#e0e0e0"};
  background-color: ${e=>e.isActive?"rgba(98, 0, 238, 0.1)":e.isResult?"rgba(76, 175, 80, 0.1)":"white"};
  margin: 0 2px;
  border-radius: 50%;
  position: relative;
  font-weight: ${e=>e.isActive||e.isResult?"bold":"normal"};
`,m=n.Ay.div`
  width: 20px;
  height: 2px;
  background-color: #e0e0e0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: -3px;
    width: 0;
    height: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-left: 7px solid #e0e0e0;
  }
`,u=n.Ay.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  margin: 1rem 0;
  padding: 0.75rem;
  border: 1px dashed #e0e0e0;
  border-radius: var(--border-radius);
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
`,h=n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,b=n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,y=n.Ay.label`
  margin-bottom: 0.5rem;
  font-weight: 500;
`,v=n.Ay.input`
  padding: 0.5rem;
  border: 1px solid #e0e0e0;
  border-radius: var(--border-radius);
  width: 200px;
  text-align: center;
  font-family: monospace;
`,f=n.Ay.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-top: 0.25rem;
  text-align: center;
`,j=[2,4,3],w=[5,6,4],A=[{label:"Example 1",list1:[2,4,3],list2:[5,6,4],number1:342,number2:465},{label:"Example 2",list1:[0],list2:[0],number1:0,number2:0},{label:"Example 3",list1:[9,9,9,9,9,9,9],list2:[9,9,9,9],number1:9999999,number2:9999},{label:"Example 4",list1:[9],list2:[1,9,9,9,9,9,9,9,9,9],number1:9,number2:9999999991}],S=()=>{const[e,r]=(0,i.useState)(j),[t,n]=(0,i.useState)(w),[S,k]=(0,i.useState)([]),[$,C]=(0,i.useState)(0),[N,R]=(0,i.useState)(null),[P,E]=(0,i.useState)(null),[I,T]=(0,i.useState)(0),[z,F]=(0,i.useState)(null),[L,M]=(0,i.useState)({text:'Click "Start" to begin the visualization.',type:"info"}),[G,W]=(0,i.useState)(!1),[_,B]=(0,i.useState)(1e3),[D,H]=(0,i.useState)(!1),[Q,V]=(0,i.useState)(j.join(",")),[q,J]=(0,i.useState)(w.join(",")),[K,O]=(0,i.useState)(342),[U,X]=(0,i.useState)(465),[Y,Z]=(0,i.useState)(0),ee=Math.max(e.length,t.length)+(I>0?1:0),re=e=>{let r=0;for(let t=e.length-1;t>=0;t--)r=10*r+e[t];return r},te=()=>{C(0),R(null),E(null),T(0),F(null),k([]),M({text:'Click "Start" to begin the visualization.',type:"info"}),W(!1),H(!1)};return(0,i.useEffect)((()=>{if(!G)return;if($>=e.length&&$>=t.length&&0===I)return M({text:"Addition complete! Result: "+S.join(" \u2192 "),type:"success"}),W(!1),void H(!0);const r=$,i=r<e.length?e[r]:0,n=r<t.length?t[r]:0;R(r<e.length?r:null),E(r<t.length?r:null);const s=i+n+I,a=Math.floor(s/10),l=s%10;F({val1:i,val2:n,carry:I,currentSum:s,digit:l}),M({text:`Adding ${i} + ${n} + ${I} (carry) = ${s}, digit: ${l}, new carry: ${a}`,type:"info"});const o=setTimeout((()=>{k((e=>[...e,l])),T(a);const e=setTimeout((()=>{C((e=>e+1))}),_/2);return()=>clearTimeout(e)}),_);return()=>clearTimeout(o)}),[$,G,e,t,I,_,S]),(0,l.jsxs)(a.C7,{children:[(0,l.jsx)(s.A,{onStart:()=>{te(),W(!0)},onNext:()=>{$<ee?C((e=>e+1)):(W(!1),H(!0))},onPrev:()=>{$>0&&C((e=>e-1))},onReset:te,isRunning:G,canGoNext:$<ee&&!D,canGoPrev:$>0,speed:_,onSpeedChange:B,showPrev:!0}),(0,l.jsxs)(x,{children:[(0,l.jsx)("div",{style:{marginRight:"0.5rem"},children:"Examples:"}),A.map(((e,t)=>(0,l.jsx)(g,{isSelected:Y===t,onClick:()=>(e=>{Z(e);const t=A[e];r(t.list1),n(t.list2),V(t.list1.join(",")),J(t.list2.join(",")),O(t.number1),X(t.number2),te()})(t),disabled:G,children:e.label},t)))]}),(0,l.jsxs)(h,{children:[(0,l.jsxs)(b,{children:[(0,l.jsx)(y,{children:"First List (reversed digits):"}),(0,l.jsx)(v,{value:Q,onChange:e=>{V(e.target.value);try{const t=e.target.value.split(",").map((e=>parseInt(e.trim()))).filter((e=>!isNaN(e)));r(t);const i=re(t);O(i),Z(-1),te()}catch(t){console.error("Invalid input format for list 1")}},disabled:G,placeholder:"2,4,3"}),(0,l.jsxs)(f,{children:["Number: ",K]})]}),(0,l.jsxs)(b,{children:[(0,l.jsx)(y,{children:"Second List (reversed digits):"}),(0,l.jsx)(v,{value:q,onChange:e=>{J(e.target.value);try{const r=e.target.value.split(",").map((e=>parseInt(e.trim()))).filter((e=>!isNaN(e)));n(r);const t=re(r);X(t),Z(-1),te()}catch(r){console.error("Invalid input format for list 2")}},disabled:G,placeholder:"5,6,4"}),(0,l.jsxs)(f,{children:["Number: ",U]})]})]}),(0,l.jsxs)(o,{children:[(0,l.jsxs)(d,{children:[(0,l.jsx)(c,{children:"l1:"}),e.map(((r,t)=>(0,l.jsxs)(i.Fragment,{children:[(0,l.jsx)(p,{isActive:t===N,children:r}),t<e.length-1&&(0,l.jsx)(m,{})]},t)))]}),(0,l.jsxs)(d,{children:[(0,l.jsx)(c,{children:"l2:"}),t.map(((e,r)=>(0,l.jsxs)(i.Fragment,{children:[(0,l.jsx)(p,{isActive:r===P,children:e}),r<t.length-1&&(0,l.jsx)(m,{})]},r)))]}),S.length>0&&(0,l.jsxs)(d,{children:[(0,l.jsx)(c,{children:"sum:"}),S.map(((e,r)=>(0,l.jsxs)(i.Fragment,{children:[(0,l.jsx)(p,{isResult:!0,children:e}),r<S.length-1&&(0,l.jsx)(m,{})]},r)))]})]}),z&&(0,l.jsxs)(u,{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("strong",{children:"Current:"})," ",z.val1," + ",z.val2," + ",z.carry," (carry) = ",z.currentSum]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("strong",{children:"Digit:"})," ",z.digit]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("strong",{children:"New Carry:"})," ",Math.floor(z.currentSum/10)]})]}),(0,l.jsx)(a.Mo,{type:L.type,children:L.text}),D&&(0,l.jsxs)(a.mk,{children:[(0,l.jsxs)(a.Tw,{children:[(0,l.jsx)("strong",{children:"Input Numbers:"})," ",K," + ",U," = ",K+U]}),(0,l.jsxs)(a.Tw,{children:[(0,l.jsx)("strong",{children:"Linked List Result:"})," [",S.join(", "),"]"]})]})]})}}}]);
//# sourceMappingURL=666.f814bf64.chunk.js.map