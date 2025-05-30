"use strict";(self.webpackChunkdsa_demos=self.webpackChunkdsa_demos||[]).push([[251],{138:(e,t,i)=>{i.d(t,{A:()=>a});i(43);var r=i(464),s=i(579);const l=r.Ay.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`,n=r.Ay.button`
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
`,o=r.Ay.div`
  display: flex;
  align-items: center;
`,a=e=>{let{onStart:t,onNext:i,onPrev:r,onReset:a,isRunning:d,canGoNext:c=!0,canGoPrev:p=!0,speed:m,onSpeedChange:x,showPrev:u=!0,showSpeed:g=!0,customInputProps:h}=e;return(0,s.jsxs)(l,{children:[(0,s.jsx)(n,{onClick:t,disabled:d,children:d?"Running...":"Start"}),u&&(0,s.jsx)(n,{onClick:r,disabled:!p||d,children:"Prev"}),(0,s.jsx)(n,{onClick:i,disabled:!c||d,children:"Next"}),(0,s.jsx)(n,{onClick:a,children:"Reset"}),g&&(0,s.jsxs)(o,{children:[(0,s.jsx)("label",{style:{marginRight:"0.5rem"},children:"Speed:"}),(0,s.jsxs)("select",{value:m,onChange:e=>x(Number(e.target.value)),disabled:d,children:[(0,s.jsx)("option",{value:500,children:"Fast"}),(0,s.jsx)("option",{value:1e3,children:"Normal"}),(0,s.jsx)("option",{value:2e3,children:"Slow"})]})]}),h&&h.label&&(0,s.jsxs)(o,{children:[(0,s.jsxs)("label",{style:{marginRight:"0.5rem"},children:[h.label,":"]}),(0,s.jsx)("input",{type:h.type||"text",value:h.value,onChange:h.onChange,disabled:d||h.disabled,style:{padding:"0.5rem",width:"200px",...h.style}})]})]})}},245:(e,t,i)=>{i.d(t,{C7:()=>s,DA:()=>p,L2:()=>l,Mo:()=>a,Qn:()=>n,Tw:()=>x,_x:()=>c,mk:()=>m,t6:()=>d,xB:()=>o});var r=i(464);const s=r.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 350px;
`,l=r.Ay.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  position: relative;
`,n=r.Ay.div`
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
`,o=r.Ay.div`
  position: absolute;
  top: -25px;
  font-size: 0.75rem;
  color: var(--text-secondary);
`,a=r.Ay.div`
  text-align: center;
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: var(--border-radius);
  background-color: ${e=>"success"===e.type?"#e8f5e9":"info"===e.type?"#e3f2fd":"warning"===e.type?"#fff3e0":"error"===e.type?"#ffebee":"white"};
  color: ${e=>"success"===e.type?"#2e7d32":"info"===e.type?"#1565c0":"warning"===e.type?"#e65100":"error"===e.type?"#c62828":"var(--text-primary)"};
`,d=r.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`,c=r.Ay.div`
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-primary);
`,p=r.Ay.div`
  display: flex;
  flex-direction: ${e=>e.direction||"column"};
  gap: 5px;
  min-height: ${e=>e.minHeight||"100px"};
  min-width: ${e=>e.minWidth||"250px"};
  padding: 15px;
  border: 1px dashed #e0e0e0;
  border-radius: var(--border-radius);
  position: relative;
`,m=(r.Ay.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 1.5rem;
`,r.Ay.div`
  display: flex;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: var(--border-radius);
  overflow: hidden;
`,r.Ay.div`
  padding: 8px 12px;
  background-color: #f5f5f5;
  font-weight: 500;
  border-right: 1px solid #e0e0e0;
`,r.Ay.div`
  padding: 8px 12px;
  background-color: white;
`,r.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
`),x=r.Ay.div`
  margin-bottom: 0.5rem;
`},251:(e,t,i)=>{i.r(t),i.d(t,{default:()=>S});var r=i(43),s=i(464),l=i(138),n=i(245),o=i(579);const a=s.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
`,d=s.Ay.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 1rem;
`,c=s.Ay.div`
  position: absolute;
  left: -40px;
  font-weight: 500;
  color: var(--text-primary);
`,p=s.Ay.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${e=>e.isActive?"var(--primary)":e.isResult?"#4caf50":e.isSelected?"#ff9800":"#e0e0e0"};
  background-color: ${e=>e.isActive?"rgba(98, 0, 238, 0.1)":e.isResult?"rgba(76, 175, 80, 0.1)":e.isSelected?"rgba(255, 152, 0, 0.1)":"white"};
  margin: 0 2px;
  border-radius: 50%;
  position: relative;
  font-weight: ${e=>e.isActive||e.isResult||e.isSelected?"bold":"normal"};
`,m=s.Ay.div`
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
`,x=s.Ay.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  margin: 1rem 0;
  padding: 0.75rem;
  border: 1px dashed #e0e0e0;
  border-radius: var(--border-radius);
`,u=s.Ay.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`,g=s.Ay.button`
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
`,h=s.Ay.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,v=s.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,f=s.Ay.label`
  margin-bottom: 0.5rem;
  font-weight: 500;
`,y=s.Ay.input`
  padding: 0.5rem;
  border: 1px solid #e0e0e0;
  border-radius: var(--border-radius);
  width: 200px;
  text-align: center;
  font-family: monospace;
`,b=s.Ay.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-top: 0.25rem;
  text-align: center;
`,j=[1,2,4],w=[1,3,4],A=[{label:"Example 1",list1:[1,2,4],list2:[1,3,4]},{label:"Example 2",list1:[1,3,5],list2:[2,4,6]},{label:"Example 3",list1:[],list2:[0]},{label:"Example 4",list1:[5],list2:[1,2,4]}],S=()=>{const[e,t]=(0,r.useState)(j),[i,s]=(0,r.useState)(w),[S,k]=(0,r.useState)([]),[$,C]=(0,r.useState)(0),[T,R]=(0,r.useState)(0),[N,E]=(0,r.useState)(0),[P,L]=(0,r.useState)(null),[I,F]=(0,r.useState)(null),[z,W]=(0,r.useState)({text:'Click "Start" to begin the visualization.',type:"info"}),[G,M]=(0,r.useState)(!1),[B,_]=(0,r.useState)(1e3),[q,D]=(0,r.useState)(!1),[H,Q]=(0,r.useState)(j.join(",")),[J,K]=(0,r.useState)(w.join(",")),[O,U]=(0,r.useState)(0),V=()=>{C(0),R(0),E(0),k([]),L(null),F(null),W({text:'Click "Start" to begin the visualization.',type:"info"}),M(!1),D(!1)},X=()=>{q?M(!1):C((e=>e+1))};return(0,r.useEffect)((()=>{if(!G)return;if(T>=e.length&&N>=i.length)return W({text:"Merge complete! Both lists have been fully processed.",type:"success"}),M(!1),D(!0),void L(null);if(T>=e.length){const e=i[N];L({list1:null,list2:e,selected:"list2"}),F({list:"list2",index:N}),W({text:`List1 is exhausted. Adding ${e} from list2.`,type:"info"});const t=setTimeout((()=>{k((t=>[...t,e])),E(N+1);const t=setTimeout((()=>{X()}),B/2);return()=>clearTimeout(t)}),B);return()=>clearTimeout(t)}if(N>=i.length){const t=e[T];L({list1:t,list2:null,selected:"list1"}),F({list:"list1",index:T}),W({text:`List2 is exhausted. Adding ${t} from list1.`,type:"info"});const i=setTimeout((()=>{k((e=>[...e,t])),R(T+1);const e=setTimeout((()=>{X()}),B/2);return()=>clearTimeout(e)}),B);return()=>clearTimeout(i)}const t=e[T],r=i[N];if(L({list1:t,list2:r,selected:t<=r?"list1":"list2"}),t<=r){F({list:"list1",index:T}),W({text:`Comparing ${t} and ${r}. ${t} is smaller or equal, adding from list1.`,type:"info"});const e=setTimeout((()=>{k((e=>[...e,t])),R(T+1);const e=setTimeout((()=>{X()}),B/2);return()=>clearTimeout(e)}),B);return()=>clearTimeout(e)}{F({list:"list2",index:N}),W({text:`Comparing ${t} and ${r}. ${r} is smaller, adding from list2.`,type:"info"});const e=setTimeout((()=>{k((e=>[...e,r])),E(N+1);const e=setTimeout((()=>{X()}),B/2);return()=>clearTimeout(e)}),B);return()=>clearTimeout(e)}}),[$,G,e,i,T,N,B]),(0,o.jsxs)(n.C7,{children:[(0,o.jsx)(l.A,{onStart:()=>{V(),M(!0)},onNext:X,onPrev:()=>{$>0&&C((e=>e-1))},onReset:V,isRunning:G,canGoNext:!q,canGoPrev:$>0,speed:B,onSpeedChange:_,showPrev:!0}),(0,o.jsxs)(u,{children:[(0,o.jsx)("div",{style:{marginRight:"0.5rem"},children:"Examples:"}),A.map(((e,i)=>(0,o.jsx)(g,{isSelected:O===i,onClick:()=>(e=>{U(e);const i=A[e];t(i.list1),s(i.list2),Q(i.list1.join(",")),K(i.list2.join(",")),V()})(i),disabled:G,children:e.label},i)))]}),(0,o.jsxs)(h,{children:[(0,o.jsxs)(v,{children:[(0,o.jsx)(f,{children:"First List:"}),(0,o.jsx)(y,{value:H,onChange:e=>{Q(e.target.value);try{const i=e.target.value.split(",").map((e=>parseInt(e.trim()))).filter((e=>!isNaN(e)));t(i),U(-1),V()}catch(i){console.error("Invalid input format for list 1")}},disabled:G,placeholder:"1,2,4"})]}),(0,o.jsxs)(v,{children:[(0,o.jsx)(f,{children:"Second List:"}),(0,o.jsx)(y,{value:J,onChange:e=>{K(e.target.value);try{const t=e.target.value.split(",").map((e=>parseInt(e.trim()))).filter((e=>!isNaN(e)));s(t),U(-1),V()}catch(t){console.error("Invalid input format for list 2")}},disabled:G,placeholder:"1,3,4"})]})]}),(0,o.jsxs)(a,{children:[(0,o.jsxs)(d,{children:[(0,o.jsx)(c,{children:"list1:"}),0===e.length?(0,o.jsx)(b,{children:"Empty List"}):e.map(((t,i)=>(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)(p,{isActive:i===T,isSelected:"list1"===(null===I||void 0===I?void 0:I.list)&&(null===I||void 0===I?void 0:I.index)===i,children:t}),i<e.length-1&&(0,o.jsx)(m,{})]},i)))]}),(0,o.jsxs)(d,{children:[(0,o.jsx)(c,{children:"list2:"}),0===i.length?(0,o.jsx)(b,{children:"Empty List"}):i.map(((e,t)=>(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)(p,{isActive:t===N,isSelected:"list2"===(null===I||void 0===I?void 0:I.list)&&(null===I||void 0===I?void 0:I.index)===t,children:e}),t<i.length-1&&(0,o.jsx)(m,{})]},t)))]}),S.length>0&&(0,o.jsxs)(d,{children:[(0,o.jsx)(c,{children:"merged:"}),S.map(((e,t)=>(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)(p,{isResult:!0,children:e}),t<S.length-1&&(0,o.jsx)(m,{})]},t)))]})]}),P&&(0,o.jsxs)(x,{children:[(0,o.jsx)("div",{children:"Comparing:"}),(0,o.jsx)("div",{style:{fontWeight:"list1"===P.selected?"bold":"normal",color:"list1"===P.selected?"var(--primary)":"inherit"},children:null!==P.list1?P.list1:"empty"}),(0,o.jsx)("div",{children:"vs"}),(0,o.jsx)("div",{style:{fontWeight:"list2"===P.selected?"bold":"normal",color:"list2"===P.selected?"var(--primary)":"inherit"},children:null!==P.list2?P.list2:"empty"}),P.selected&&(0,o.jsxs)("div",{children:["\u2192 Selecting: ","list1"===P.selected?"list1":"list2"]})]}),(0,o.jsx)(n.Mo,{type:z.type,children:z.text}),q&&(0,o.jsx)(n.mk,{children:(0,o.jsxs)(n.Tw,{children:[(0,o.jsx)("strong",{children:"Final Merged List:"})," [",S.join(", "),"]"]})})]})}}}]);
//# sourceMappingURL=251.1b771b75.chunk.js.map