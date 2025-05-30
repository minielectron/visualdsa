"use strict";(self.webpackChunkdsa_demos=self.webpackChunkdsa_demos||[]).push([[176],{138:(e,r,t)=>{t.d(r,{A:()=>l});t(43);var i=t(464),n=t(579);const s=i.Ay.div`
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
`,a=i.Ay.div`
  display: flex;
  align-items: center;
`,l=e=>{let{onStart:r,onNext:t,onPrev:i,onReset:l,isRunning:d,canGoNext:c=!0,canGoPrev:p=!0,speed:x,onSpeedChange:m,showPrev:g=!0,showSpeed:u=!0,customInputProps:h}=e;return(0,n.jsxs)(s,{children:[(0,n.jsx)(o,{onClick:r,disabled:d,children:d?"Running...":"Start"}),g&&(0,n.jsx)(o,{onClick:i,disabled:!p||d,children:"Prev"}),(0,n.jsx)(o,{onClick:t,disabled:!c||d,children:"Next"}),(0,n.jsx)(o,{onClick:l,children:"Reset"}),u&&(0,n.jsxs)(a,{children:[(0,n.jsx)("label",{style:{marginRight:"0.5rem"},children:"Speed:"}),(0,n.jsxs)("select",{value:x,onChange:e=>m(Number(e.target.value)),disabled:d,children:[(0,n.jsx)("option",{value:500,children:"Fast"}),(0,n.jsx)("option",{value:1e3,children:"Normal"}),(0,n.jsx)("option",{value:2e3,children:"Slow"})]})]}),h&&h.label&&(0,n.jsxs)(a,{children:[(0,n.jsxs)("label",{style:{marginRight:"0.5rem"},children:[h.label,":"]}),(0,n.jsx)("input",{type:h.type||"text",value:h.value,onChange:h.onChange,disabled:d||h.disabled,style:{padding:"0.5rem",width:"200px",...h.style}})]})]})}},176:(e,r,t)=>{t.r(r),t.d(r,{default:()=>C});var i=t(43),n=t(464),s=t(138),o=t(245),a=t(579);const l=n.Ay.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  position: relative;
`,d=(0,n.Ay)(o.Qn)`
  min-width: 40px;
  height: 40px;
  margin: 0 3px 6px 3px;
  position: relative;
`,c=(0,n.Ay)(o.xB)`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f5f5f5;
  padding: 2px 5px;
  border-radius: 3px;
  font-size: 10px;
  z-index: 2;
`,p=n.Ay.div`
  position: relative;
  margin-top: 2rem;
  padding: 2rem 0;
  overflow-x: auto;
  width: 100%;
`,x=n.Ay.div`
  position: absolute;
  height: 3px;
  background-color: var(--primary);
  bottom: 0;
  transition: all 0.3s ease;
`,m=n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`,g=n.Ay.div`
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`,u=n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: var(--border-radius);
  min-height: 50px;
  min-width: 200px;
`,h=n.Ay.div`
  padding: 0.25rem 0.5rem;
  background-color: ${e=>e.highlight?"rgba(98, 0, 238, 0.1)":"#f5f5f5"};
  border: 1px solid ${e=>e.highlight?"var(--primary)":"#e0e0e0"};
  border-radius: 16px;
  color: var(--text-primary);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${e=>e.isNew?"fadeIn 0.5s ease":"none"};
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
  }
`,f=n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`,y=n.Ay.button`
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
`,b=n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
`,v=n.Ay.label`
  margin-bottom: 0.5rem;
  font-weight: 500;
`,w=n.Ay.input`
  padding: 0.5rem;
  border: 1px solid #e0e0e0;
  border-radius: var(--border-radius);
  width: 300px;
  text-align: center;
  font-family: monospace;
`,j=n.Ay.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: 30px;
  margin-top: 10px;
`,S=n.Ay.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(-50%);
`,A=n.Ay.div`
  font-size: 0.8rem;
  color: ${e=>e.color||"var(--text-secondary)"};
  font-weight: 500;
  white-space: nowrap;
`,k=n.Ay.div`
  width: 0;
  height: 0;
  margin-top: 2px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid ${e=>e.color||"var(--text-secondary)"};
`,$=[{label:"Example 1",string:"abcabcbb"},{label:"Example 2",string:"bbbbb"},{label:"Example 3",string:"pwwkew"},{label:"Example 4",string:"dvdf"},{label:"Example 5",string:"anviaj"}],C=()=>{const[e,r]=(0,i.useState)("abcabcbb"),[t,n]=(0,i.useState)(0),[C,E]=(0,i.useState)(0),[P,R]=(0,i.useState)(0),[N,T]=(0,i.useState)(new Set),[z,I]=(0,i.useState)(0),[B,G]=(0,i.useState)(0),[L,M]=(0,i.useState)(0),[F,W]=(0,i.useState)({text:'Click "Start" to begin the visualization.',type:"info"}),[_,Q]=(0,i.useState)(!1),[X,Y]=(0,i.useState)(1e3),[D,H]=(0,i.useState)(!1),[q,J]=(0,i.useState)(null),[K,O]=(0,i.useState)(0),[U,V]=(0,i.useState)([]),[Z,ee]=(0,i.useState)([]),re=i.useRef([]),te=()=>{n(0),E(0),R(0),T(new Set),I(0),G(0),M(0),W({text:'Click "Start" to begin the visualization.',type:"info"}),Q(!1),H(!1),J(null)},ie=e=>{r(e.target.value),O(-1),te()};(0,i.useEffect)((()=>{if(!_)return;if(P>=e.length)return W({text:`Finished processing the entire string. Maximum substring length is ${z} (${e.substring(B,L)}).`,type:"success"}),Q(!1),void H(!0);const r=e[P];if(N.has(r)){J(null),W({text:`Found duplicate character '${r}' at position ${P}. Shrinking window from the left.`,type:"info"});const t=setTimeout((()=>{const r=e[C];T((e=>{const t=new Set(e);return t.delete(r),t})),W({text:`Removed character '${r}' from position ${C} from the set. Moving left pointer.`,type:"info"}),E((e=>e+1)),n((e=>e+1))}),X);return()=>clearTimeout(t)}{J(r),T((e=>new Set([...e,r])));const t=P-C+1;t>z?(I(t),G(C),M(P+1),W({text:`Added character '${r}' to the set. New substring '${e.substring(C,P+1)}' with length ${t} is the longest so far.`,type:"success"})):W({text:`Added character '${r}' to the set. Current substring '${e.substring(C,P+1)}' with length ${t}.`,type:"info"});const i=setTimeout((()=>{R((e=>e+1)),J(null),n((e=>e+1))}),X);return()=>clearTimeout(i)}}),[t,_,e,C,P,N,z,X,B,L]),(0,i.useEffect)((()=>{if(e.length>0){const r=Array(e.length).fill().map(((e,r)=>re.current[r]||i.createRef()));re.current=r,setTimeout((()=>{const e=[],r=[];re.current.forEach(((t,i)=>{if(t&&t.current){const{width:n}=t.current.getBoundingClientRect(),{offsetLeft:s}=t.current;e[i]=n,r[i]=s}})),V(e),ee(r)}),0)}}),[e]);const ne=e=>`calc(${46*e+23}px)`;return(0,a.jsxs)(o.C7,{children:[(0,a.jsx)(s.A,{onStart:()=>{te(),Q(!0)},onNext:()=>{P<e.length?n((e=>e+1)):(Q(!1),H(!0))},onPrev:()=>{t>0&&n((e=>e-1))},onReset:te,isRunning:_,canGoNext:P<e.length&&!D,canGoPrev:t>0,speed:X,onSpeedChange:Y,showPrev:!1,customInputProps:{label:"Input String",value:e,onChange:ie,disabled:_}}),(0,a.jsxs)(f,{children:[(0,a.jsx)("div",{style:{marginRight:"0.5rem"},children:"Examples:"}),$.map(((e,t)=>(0,a.jsx)(y,{isSelected:K===t,onClick:()=>(e=>{O(e),r($[e].string),te()})(t),disabled:_,children:e.label},t)))]}),(0,a.jsxs)(b,{children:[(0,a.jsx)(v,{children:"Input String:"}),(0,a.jsx)(w,{value:e,onChange:ie,disabled:_,placeholder:"Enter a string"})]}),(0,a.jsxs)(p,{children:[(0,a.jsx)(l,{children:e.split("").map(((e,r)=>(0,a.jsxs)(d,{isPrimary:r===P,isSuccess:r>=C&&r<P,isSpecial:r>=B&&r<L,isBold:r===P||r>=C&&r<P,children:[(0,a.jsx)(c,{children:r}),e]},r)))}),(0,a.jsx)(x,{style:{left:46*C+3+"px",width:46*(P-C)+40+"px"}}),(0,a.jsxs)(j,{children:[C<e.length&&(0,a.jsxs)(S,{style:{left:ne(C)},children:[(0,a.jsx)(A,{color:"var(--primary)",children:"left"}),(0,a.jsx)(k,{color:"var(--primary)"})]}),P<e.length&&(0,a.jsxs)(S,{style:{left:ne(P)},children:[(0,a.jsx)(A,{color:"#ff9800",children:"right"}),(0,a.jsx)(k,{color:"#ff9800"})]})]})]}),(0,a.jsxs)(m,{children:[(0,a.jsx)(g,{children:"Current Set:"}),(0,a.jsx)(u,{children:0===Array.from(N).length?(0,a.jsx)("div",{style:{color:"var(--text-secondary)",fontStyle:"italic"},children:"Empty Set"}):Array.from(N).map(((e,r)=>(0,a.jsx)(h,{highlight:e===q,isNew:e===q,children:e},r)))})]}),(0,a.jsx)(o.Mo,{type:F.type,children:F.text}),D&&(0,a.jsxs)(o.mk,{children:[(0,a.jsxs)(o.Tw,{children:[(0,a.jsx)("strong",{children:"Longest Substring:"}),' "',e.substring(B,L),'"']}),(0,a.jsxs)(o.Tw,{children:[(0,a.jsx)("strong",{children:"Length:"})," ",z]}),(0,a.jsxs)(o.Tw,{children:[(0,a.jsx)("strong",{children:"Position:"})," ",B," to ",L-1]})]})]})}},245:(e,r,t)=>{t.d(r,{C7:()=>n,DA:()=>p,L2:()=>s,Mo:()=>l,Qn:()=>o,Tw:()=>m,_x:()=>c,mk:()=>x,t6:()=>d,xB:()=>a});var i=t(464);const n=i.Ay.div`
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
`,a=i.Ay.div`
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
`,x=(i.Ay.div`
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
`),m=i.Ay.div`
  margin-bottom: 0.5rem;
`}}]);
//# sourceMappingURL=176.681830c9.chunk.js.map