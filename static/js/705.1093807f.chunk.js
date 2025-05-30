"use strict";(self.webpackChunkdsa_demos=self.webpackChunkdsa_demos||[]).push([[705],{138:(e,t,i)=>{i.d(t,{A:()=>o});i(43);var r=i(464),n=i(579);const a=r.Ay.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`,s=r.Ay.button`
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
`,l=r.Ay.div`
  display: flex;
  align-items: center;
`,o=e=>{let{onStart:t,onNext:i,onPrev:r,onReset:o,isRunning:d,canGoNext:c=!0,canGoPrev:p=!0,speed:u,onSpeedChange:g,showPrev:x=!0,showSpeed:h=!0,customInputProps:m}=e;return(0,n.jsxs)(a,{children:[(0,n.jsx)(s,{onClick:t,disabled:d,children:d?"Running...":"Start"}),x&&(0,n.jsx)(s,{onClick:r,disabled:!p||d,children:"Prev"}),(0,n.jsx)(s,{onClick:i,disabled:!c||d,children:"Next"}),(0,n.jsx)(s,{onClick:o,children:"Reset"}),h&&(0,n.jsxs)(l,{children:[(0,n.jsx)("label",{style:{marginRight:"0.5rem"},children:"Speed:"}),(0,n.jsxs)("select",{value:u,onChange:e=>g(Number(e.target.value)),disabled:d,children:[(0,n.jsx)("option",{value:500,children:"Fast"}),(0,n.jsx)("option",{value:1e3,children:"Normal"}),(0,n.jsx)("option",{value:2e3,children:"Slow"})]})]}),m&&m.label&&(0,n.jsxs)(l,{children:[(0,n.jsxs)("label",{style:{marginRight:"0.5rem"},children:[m.label,":"]}),(0,n.jsx)("input",{type:m.type||"text",value:m.value,onChange:m.onChange,disabled:d||m.disabled,style:{padding:"0.5rem",width:"200px",...m.style}})]})]})}},245:(e,t,i)=>{i.d(t,{C7:()=>n,DA:()=>p,L2:()=>a,Mo:()=>o,Qn:()=>s,Tw:()=>g,_x:()=>c,mk:()=>u,t6:()=>d,xB:()=>l});var r=i(464);const n=r.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 350px;
`,a=r.Ay.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  position: relative;
`,s=r.Ay.div`
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
`,l=r.Ay.div`
  position: absolute;
  top: -25px;
  font-size: 0.75rem;
  color: var(--text-secondary);
`,o=r.Ay.div`
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
`,u=(r.Ay.div`
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
`),g=r.Ay.div`
  margin-bottom: 0.5rem;
`},705:(e,t,i)=>{i.r(t),i.d(t,{default:()=>h});var r=i(43),n=i(464),a=i(138),s=i(245),l=i(579);const o=n.Ay.div`
  padding: 8px 0;
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: var(--border-radius);
  text-align: center;
  font-weight: 500;
  animation: ${e=>e.isNew?"fadeIn 0.5s ease":"none"};
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`,d=n.Ay.div`
  padding: 8px 0;
  text-align: center;
  color: var(--text-secondary);
  font-style: italic;
`,c=n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`,p=n.Ay.button`
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
`,u=[{label:"Valid 1",value:"({[]})"},{label:"Valid 2",value:"()[]{}"},{label:"Invalid 1",value:"([)]"},{label:"Invalid 2",value:"(]"},{label:"Invalid 3",value:"{{{"}],g=(e,t)=>"("===e&&")"===t||"{"===e&&"}"===t||"["===e&&"]"===t,x=e=>"("===e||"{"===e||"["===e,h=()=>{const[e,t]=(0,r.useState)("({[]})"),[i,n]=(0,r.useState)(-1),[h,m]=(0,r.useState)([]),[y,f]=(0,r.useState)(!1),[v,b]=(0,r.useState)(1e3),[w,k]=(0,r.useState)(null),[j,S]=(0,r.useState)([]),[A,$]=(0,r.useState)({text:'Click "Start" to begin the visualization.',type:"info"}),[C,P]=(0,r.useState)(null),[R,I]=(0,r.useState)(0),T=()=>{n(-1),m([]),f(!1),k(null),S([]),$({text:'Click "Start" to begin the visualization.',type:"info"}),P(null)},N=()=>{if(i>=e.length)return;const t=e[i];if(x(t)){const r=[...h,t];m(r),$({text:`Found opening bracket '${t}' at index ${i}, pushing to stack.`,type:"info"}),S([...j,i]),i===e.length-1?(P(!1),$({text:"Reached end of string, but stack is not empty. The string is invalid.",type:"error"})):setTimeout((()=>{n(i+1)}),v)}else if(0===h.length)k(i),P(!1),$({text:`Found closing bracket '${t}' at index ${i} with no matching opening bracket. The string is invalid.`,type:"error"});else{const r=h[h.length-1];if(g(r,t)){const a=h.slice(0,-1);m(a),S([...j,i]),$({text:`Found closing bracket '${t}' at index ${i} matching with '${r}'. Popping from stack.`,type:"success"}),i===e.length-1?0===a.length?(P(!0),$({text:"Reached end of string with an empty stack. The string is valid!",type:"success"})):(P(!1),$({text:"Reached end of string, but stack is not empty. The string is invalid.",type:"error"})):setTimeout((()=>{n(i+1)}),v)}else k(i),P(!1),$({text:`Found closing bracket '${t}' at index ${i} not matching with '${r}'. The string is invalid.`,type:"error"})}};(0,r.useEffect)((()=>{y&&i>=0&&i<e.length&&null===C?N():y&&(i>=e.length||null!==C)&&f(!1)}),[i,y]);const E=(e=>{const t=[];for(let i of e)if(x(i))t.push(i);else{if(0===t.length)return!1;const e=t.pop();if(!g(e,i))return!1}return 0===t.length})(e);return(0,l.jsxs)(s.C7,{children:[(0,l.jsx)(a.A,{onStart:()=>{T(),f(!0),n(0)},onNext:()=>{i<e.length&&null===C&&N()},onPrev:()=>{},onReset:T,isRunning:y,canGoNext:i<e.length&&null===C,canGoPrev:!1,speed:v,onSpeedChange:b,showPrev:!1,customInputProps:{label:"Input String",value:e,onChange:e=>{t(e.target.value),I(-1),T()},disabled:y}}),(0,l.jsxs)(c,{children:[(0,l.jsx)("div",{style:{marginRight:"0.5rem"},children:"Examples:"}),u.map(((e,i)=>(0,l.jsx)(p,{isSelected:R===i,onClick:()=>(e=>{I(e),t(u[e].value),T()})(i),disabled:y,children:e.label},i)))]}),!y&&-1===i&&(0,l.jsxs)(s.Mo,{type:E?"info":"warning",children:["Input is ",E?"valid":"invalid",". Press Start to see step by step analysis."]}),(0,l.jsx)(s.L2,{children:e.split("").map(((e,t)=>(0,l.jsxs)(s.Qn,{isPrimary:t===i,isSuccess:j.includes(t),isError:t===w,isBold:!0,children:[(0,l.jsx)(s.xB,{children:t}),e]},t)))}),(0,l.jsxs)(s.t6,{children:[(0,l.jsx)(s._x,{children:"Stack:"}),(0,l.jsx)(s.DA,{direction:"column-reverse",minHeight:"150px",children:0===h.length?(0,l.jsx)(d,{children:"Empty Stack"}):h.map(((e,t)=>(0,l.jsx)(o,{isNew:t===h.length-1,children:e},t)))})]}),(y||-1!==i)&&(0,l.jsx)(s.Mo,{type:A.type,children:A.text}),null!==C&&(0,l.jsx)(s.mk,{children:(0,l.jsxs)(s.Tw,{children:[(0,l.jsx)("strong",{children:"Final Result:"})," The string is ",C?"valid":"invalid","."]})})]})}}}]);
//# sourceMappingURL=705.1093807f.chunk.js.map