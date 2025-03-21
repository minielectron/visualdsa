/*! For license information please see main.21cf603a.js.LICENSE.txt */
(()=>{var e={4:(e,t,r)=>{"use strict";var n=r(853),i=r(43),a=r(950);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}var l=Symbol.for("react.element"),d=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),f=Symbol.for("react.consumer"),g=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),b=Symbol.for("react.memo"),w=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var j=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var S=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function C(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=k&&e[k]||e["@@iterator"])?e:null}var T=Symbol.for("react.client.reference");function E(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===T?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case u:return"Fragment";case c:return"Portal";case p:return"Profiler";case h:return"StrictMode";case x:return"Suspense";case y:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case g:return(e.displayName||"Context")+".Provider";case f:return(e._context.displayName||"Context")+".Consumer";case v:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case b:return null!==(t=e.displayName||null)?t:E(e.type)||"Memo";case w:t=e._payload,e=e._init;try{return E(e(t))}catch(r){}}return null}var $,P,A=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=Object.assign;function z(e){if(void 0===$)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);$=t&&t[1]||"",P=-1<r.stack.indexOf("\n    at")?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+$+e+P}var M=!1;function F(e,t){if(!e||M)return"";M=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var r=function(){throw Error()};if(Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(r,[])}catch(i){var n=i}Reflect.construct(e,[],r)}else{try{r.call()}catch(a){n=a}e.call(r.prototype)}}else{try{throw Error()}catch(o){n=o}(r=e())&&"function"===typeof r.catch&&r.catch((function(){}))}}catch(s){if(s&&n&&"string"===typeof s.stack)return[s.stack,n.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=n.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var l=o.split("\n"),d=s.split("\n");for(i=n=0;n<l.length&&!l[n].includes("DetermineComponentFrameRoot");)n++;for(;i<d.length&&!d[i].includes("DetermineComponentFrameRoot");)i++;if(n===l.length||i===d.length)for(n=l.length-1,i=d.length-1;1<=n&&0<=i&&l[n]!==d[i];)i--;for(;1<=n&&0<=i;n--,i--)if(l[n]!==d[i]){if(1!==n||1!==i)do{if(n--,0>--i||l[n]!==d[i]){var c="\n"+l[n].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}}while(1<=n&&0<=i);break}}}finally{M=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?z(r):""}function R(e){switch(e.tag){case 26:case 27:case 5:return z(e.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 15:return e=F(e.type,!1);case 11:return e=F(e.type.render,!1);case 1:return e=F(e.type,!0);default:return""}}function O(e){try{var t="";do{t+=R(e),e=e.return}while(e);return t}catch(r){return"\nError generating stack: "+r.message+"\n"+r.stack}}function N(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(r=t.return),e=t.return}while(e)}return 3===t.tag?r:null}function L(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function D(e){if(N(e)!==e)throw Error(o(188))}function V(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=V(e)))return t;e=e.sibling}return null}var _=Array.isArray,B=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U={pending:!1,data:null,method:null,action:null},H=[],W=-1;function q(e){return{current:e}}function K(e){0>W||(e.current=H[W],H[W]=null,W--)}function G(e,t){W++,H[W]=e.current,e.current=t}var Y=q(null),X=q(null),Q=q(null),J=q(null);function Z(e,t){switch(G(Q,t),G(X,e),G(Y,null),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?Xc(t):0;break;default:if(t=(e=8===e?t.parentNode:t).tagName,e=e.namespaceURI)t=Qc(e=Xc(e),t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(Y),G(Y,t)}function ee(){K(Y),K(X),K(Q)}function te(e){null!==e.memoizedState&&G(J,e);var t=Y.current,r=Qc(t,e.type);t!==r&&(G(X,e),G(Y,r))}function re(e){X.current===e&&(K(Y),K(X)),J.current===e&&(K(J),Ou._currentValue=U)}var ne=Object.prototype.hasOwnProperty,ie=n.unstable_scheduleCallback,ae=n.unstable_cancelCallback,oe=n.unstable_shouldYield,se=n.unstable_requestPaint,le=n.unstable_now,de=n.unstable_getCurrentPriorityLevel,ce=n.unstable_ImmediatePriority,ue=n.unstable_UserBlockingPriority,he=n.unstable_NormalPriority,pe=n.unstable_LowPriority,me=n.unstable_IdlePriority,fe=n.log,ge=n.unstable_setDisableYieldValue,ve=null,xe=null;function ye(e){if("function"===typeof fe&&ge(e),xe&&"function"===typeof xe.setStrictMode)try{xe.setStrictMode(ve,e)}catch(t){}}var be=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(we(e)/je|0)|0},we=Math.log,je=Math.LN2;var Se=128,ke=4194304;function Ce(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194176&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Te(e,t){var r=e.pendingLanes;if(0===r)return 0;var n=0,i=e.suspendedLanes,a=e.pingedLanes,o=e.warmLanes;e=0!==e.finishedLanes;var s=134217727&r;return 0!==s?0!==(r=s&~i)?n=Ce(r):0!==(a&=s)?n=Ce(a):e||0!==(o=s&~o)&&(n=Ce(o)):0!==(s=r&~i)?n=Ce(s):0!==a?n=Ce(a):e||0!==(o=r&~o)&&(n=Ce(o)),0===n?0:0!==t&&t!==n&&0===(t&i)&&((i=n&-n)>=(o=t&-t)||32===i&&0!==(4194176&o))?t:n}function Ee(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function $e(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Pe(){var e=Se;return 0===(4194176&(Se<<=1))&&(Se=128),e}function Ae(){var e=ke;return 0===(62914560&(ke<<=1))&&(ke=4194304),e}function Ie(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ze(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Me(e,t,r){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-be(t);e.entangledLanes|=t,e.entanglements[n]=1073741824|e.entanglements[n]|4194218&r}function Fe(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-be(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}function Re(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Oe(){var e=B.p;return 0!==e?e:void 0===(e=window.event)?32:Qu(e.type)}var Ne=Math.random().toString(36).slice(2),Le="__reactFiber$"+Ne,De="__reactProps$"+Ne,Ve="__reactContainer$"+Ne,_e="__reactEvents$"+Ne,Be="__reactListeners$"+Ne,Ue="__reactHandles$"+Ne,He="__reactResources$"+Ne,We="__reactMarker$"+Ne;function qe(e){delete e[Le],delete e[De],delete e[_e],delete e[Be],delete e[Ue]}function Ke(e){var t=e[Le];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Ve]||r[Le]){if(r=t.alternate,null!==t.child||null!==r&&null!==r.child)for(e=lu(e);null!==e;){if(r=e[Le])return r;e=lu(e)}return t}r=(e=r).parentNode}return null}function Ge(e){if(e=e[Le]||e[Ve]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function Ye(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(o(33))}function Xe(e){var t=e[He];return t||(t=e[He]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Qe(e){e[We]=!0}var Je=new Set,Ze={};function et(e,t){tt(e,t),tt(e+"Capture",t)}function tt(e,t){for(Ze[e]=t,e=0;e<t.length;e++)Je.add(t[e])}var rt=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),it={},at={};function ot(e,t,r){if(i=t,ne.call(at,i)||!ne.call(it,i)&&(nt.test(i)?at[i]=!0:(it[i]=!0,0)))if(null===r)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var n=t.toLowerCase().slice(0,5);if("data-"!==n&&"aria-"!==n)return void e.removeAttribute(t)}e.setAttribute(t,""+r)}var i}function st(e,t,r){if(null===r)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+r)}}function lt(e,t,r,n){if(null===n)e.removeAttribute(r);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(r)}e.setAttributeNS(t,r,""+n)}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ct(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function ut(e){e._valueTracker||(e._valueTracker=function(e){var t=ct(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function ht(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=ct(e)?e.checked?"true":"false":e.value),(e=n)!==r&&(t.setValue(e),!0)}function pt(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var mt=/[\n"\\]/g;function ft(e){return e.replace(mt,(function(e){return"\\"+e.charCodeAt(0).toString(16)+" "}))}function gt(e,t,r,n,i,a,o,s){e.name="",null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o?e.type=o:e.removeAttribute("type"),null!=t?"number"===o?(0===t&&""===e.value||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):"submit"!==o&&"reset"!==o||e.removeAttribute("value"),null!=t?xt(e,o,dt(t)):null!=r?xt(e,o,dt(r)):null!=n&&e.removeAttribute("value"),null==i&&null!=a&&(e.defaultChecked=!!a),null!=i&&(e.checked=i&&"function"!==typeof i&&"symbol"!==typeof i),null!=s&&"function"!==typeof s&&"symbol"!==typeof s&&"boolean"!==typeof s?e.name=""+dt(s):e.removeAttribute("name")}function vt(e,t,r,n,i,a,o,s){if(null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a&&(e.type=a),null!=t||null!=r){if(!("submit"!==a&&"reset"!==a||void 0!==t&&null!==t))return;r=null!=r?""+dt(r):"",t=null!=t?""+dt(t):r,s||t===e.value||(e.value=t),e.defaultValue=t}n="function"!==typeof(n=null!=n?n:i)&&"symbol"!==typeof n&&!!n,e.checked=s?e.checked:!!n,e.defaultChecked=!!n,null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.name=o)}function xt(e,t,r){"number"===t&&pt(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function yt(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+dt(r),t=null,i=0;i<e.length;i++){if(e[i].value===r)return e[i].selected=!0,void(n&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function bt(e,t,r){null==t||((t=""+dt(t))!==e.value&&(e.value=t),null!=r)?e.defaultValue=null!=r?""+dt(r):"":e.defaultValue!==t&&(e.defaultValue=t)}function wt(e,t,r,n){if(null==t){if(null!=n){if(null!=r)throw Error(o(92));if(_(n)){if(1<n.length)throw Error(o(93));n=n[0]}r=n}null==r&&(r=""),t=r}r=dt(t),e.defaultValue=r,(n=e.textContent)===r&&""!==n&&null!==n&&(e.value=n)}function jt(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&3===r.nodeType)return void(r.nodeValue=t)}e.textContent=t}var St=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kt(e,t,r){var n=0===t.indexOf("--");null==r||"boolean"===typeof r||""===r?n?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":n?e.setProperty(t,r):"number"!==typeof r||0===r||St.has(t)?"float"===t?e.cssFloat=r:e[t]=(""+r).trim():e[t]=r+"px"}function Ct(e,t,r){if(null!=t&&"object"!==typeof t)throw Error(o(62));if(e=e.style,null!=r){for(var n in r)!r.hasOwnProperty(n)||null!=t&&t.hasOwnProperty(n)||(0===n.indexOf("--")?e.setProperty(n,""):"float"===n?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&r[i]!==n&&kt(e,i,n)}else for(var a in t)t.hasOwnProperty(a)&&kt(e,a,t[a])}function Tt(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Et=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$t=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pt(e){return $t.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var At=null;function It(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var zt=null,Mt=null;function Ft(e){var t=Ge(e);if(t&&(e=t.stateNode)){var r=e[De]||null;e:switch(e=t.stateNode,t.type){case"input":if(gt(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),t=r.name,"radio"===r.type&&null!=t){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+ft(""+t)+'"][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=n[De]||null;if(!i)throw Error(o(90));gt(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<r.length;t++)(n=r[t]).form===e.form&&ht(n)}break e;case"textarea":bt(e,r.value,r.defaultValue);break e;case"select":null!=(t=r.value)&&yt(e,!!r.multiple,t,!1)}}}var Rt=!1;function Ot(e,t,r){if(Rt)return e(t,r);Rt=!0;try{return e(t)}finally{if(Rt=!1,(null!==zt||null!==Mt)&&(Ld(),zt&&(t=zt,e=Mt,Mt=zt=null,Ft(t),e)))for(t=0;t<e.length;t++)Ft(e[t])}}function Nt(e,t){var r=e.stateNode;if(null===r)return null;var n=r[De]||null;if(null===n)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(n=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!n;break e;default:e=!1}if(e)return null;if(r&&"function"!==typeof r)throw Error(o(231,t,typeof r));return r}var Lt=!1;if(rt)try{var Dt={};Object.defineProperty(Dt,"passive",{get:function(){Lt=!0}}),window.addEventListener("test",Dt,Dt),window.removeEventListener("test",Dt,Dt)}catch(wh){Lt=!1}var Vt=null,_t=null,Bt=null;function Ut(){if(Bt)return Bt;var e,t,r=_t,n=r.length,i="value"in Vt?Vt.value:Vt.textContent,a=i.length;for(e=0;e<n&&r[e]===i[e];e++);var o=n-e;for(t=1;t<=o&&r[n-t]===i[a-t];t++);return Bt=i.slice(e,1<t?1-t:void 0)}function Ht(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Wt(){return!0}function qt(){return!1}function Kt(e){function t(t,r,n,i,a){for(var o in this._reactName=t,this._targetInst=n,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?Wt:qt,this.isPropagationStopped=qt,this}return I(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Wt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Wt)},persist:function(){},isPersistent:Wt}),t}var Gt,Yt,Xt,Qt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jt=Kt(Qt),Zt=I({},Qt,{view:0,detail:0}),er=Kt(Zt),tr=I({},Zt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xt&&(Xt&&"mousemove"===e.type?(Gt=e.screenX-Xt.screenX,Yt=e.screenY-Xt.screenY):Yt=Gt=0,Xt=e),Gt)},movementY:function(e){return"movementY"in e?e.movementY:Yt}}),rr=Kt(tr),nr=Kt(I({},tr,{dataTransfer:0})),ir=Kt(I({},Zt,{relatedTarget:0})),ar=Kt(I({},Qt,{animationName:0,elapsedTime:0,pseudoElement:0})),or=Kt(I({},Qt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),sr=Kt(I({},Qt,{data:0})),lr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ur(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=cr[e])&&!!t[e]}function hr(){return ur}var pr=Kt(I({},Zt,{key:function(e){if(e.key){var t=lr[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Ht(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?dr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hr,charCode:function(e){return"keypress"===e.type?Ht(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Ht(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),mr=Kt(I({},tr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),fr=Kt(I({},Zt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hr})),gr=Kt(I({},Qt,{propertyName:0,elapsedTime:0,pseudoElement:0})),vr=Kt(I({},tr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),xr=Kt(I({},Qt,{newState:0,oldState:0})),yr=[9,13,27,32],br=rt&&"CompositionEvent"in window,wr=null;rt&&"documentMode"in document&&(wr=document.documentMode);var jr=rt&&"TextEvent"in window&&!wr,Sr=rt&&(!br||wr&&8<wr&&11>=wr),kr=String.fromCharCode(32),Cr=!1;function Tr(e,t){switch(e){case"keyup":return-1!==yr.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Er(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var $r=!1;var Pr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ar(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Pr[e.type]:"textarea"===t}function Ir(e,t,r,n){zt?Mt?Mt.push(n):Mt=[n]:zt=n,0<(t=Oc(t,"onChange")).length&&(r=new Jt("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var zr=null,Mr=null;function Fr(e){$c(e,0)}function Rr(e){if(ht(Ye(e)))return e}function Or(e,t){if("change"===e)return t}var Nr=!1;if(rt){var Lr;if(rt){var Dr="oninput"in document;if(!Dr){var Vr=document.createElement("div");Vr.setAttribute("oninput","return;"),Dr="function"===typeof Vr.oninput}Lr=Dr}else Lr=!1;Nr=Lr&&(!document.documentMode||9<document.documentMode)}function _r(){zr&&(zr.detachEvent("onpropertychange",Br),Mr=zr=null)}function Br(e){if("value"===e.propertyName&&Rr(Mr)){var t=[];Ir(t,Mr,e,It(e)),Ot(Fr,t)}}function Ur(e,t,r){"focusin"===e?(_r(),Mr=r,(zr=t).attachEvent("onpropertychange",Br)):"focusout"===e&&_r()}function Hr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Rr(Mr)}function Wr(e,t){if("click"===e)return Rr(t)}function qr(e,t){if("input"===e||"change"===e)return Rr(t)}var Kr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Gr(e,t){if(Kr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!ne.call(t,i)||!Kr(e[i],t[i]))return!1}return!0}function Yr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xr(e,t){var r,n=Yr(e);for(e=0;n;){if(3===n.nodeType){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yr(n)}}function Qr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Qr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Jr(e){for(var t=pt((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var r="string"===typeof t.contentWindow.location.href}catch(n){r=!1}if(!r)break;t=pt((e=t.contentWindow).document)}return t}function Zr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function en(e,t){var r=Jr(t);t=e.focusedElem;var n=e.selectionRange;if(r!==t&&t&&t.ownerDocument&&Qr(t.ownerDocument.documentElement,t)){if(null!==n&&Zr(t))if(e=n.start,void 0===(r=n.end)&&(r=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(r,t.value.length);else if((r=(e=t.ownerDocument||document)&&e.defaultView||window).getSelection){r=r.getSelection();var i=t.textContent.length,a=Math.min(n.start,i);n=void 0===n.end?a:Math.min(n.end,i),!r.extend&&a>n&&(i=n,n=a,a=i),i=Xr(t,a);var o=Xr(t,n);i&&o&&(1!==r.rangeCount||r.anchorNode!==i.node||r.anchorOffset!==i.offset||r.focusNode!==o.node||r.focusOffset!==o.offset)&&((e=e.createRange()).setStart(i.node,i.offset),r.removeAllRanges(),a>n?(r.addRange(e),r.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),r.addRange(e)))}for(e=[],r=t;r=r.parentNode;)1===r.nodeType&&e.push({element:r,left:r.scrollLeft,top:r.scrollTop});for("function"===typeof t.focus&&t.focus(),t=0;t<e.length;t++)(r=e[t]).element.scrollLeft=r.left,r.element.scrollTop=r.top}}var tn=rt&&"documentMode"in document&&11>=document.documentMode,rn=null,nn=null,an=null,on=!1;function sn(e,t,r){var n=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;on||null==rn||rn!==pt(n)||("selectionStart"in(n=rn)&&Zr(n)?n={start:n.selectionStart,end:n.selectionEnd}:n={anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},an&&Gr(an,n)||(an=n,0<(n=Oc(nn,"onSelect")).length&&(t=new Jt("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=rn)))}function ln(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var dn={animationend:ln("Animation","AnimationEnd"),animationiteration:ln("Animation","AnimationIteration"),animationstart:ln("Animation","AnimationStart"),transitionrun:ln("Transition","TransitionRun"),transitionstart:ln("Transition","TransitionStart"),transitioncancel:ln("Transition","TransitionCancel"),transitionend:ln("Transition","TransitionEnd")},cn={},un={};function hn(e){if(cn[e])return cn[e];if(!dn[e])return e;var t,r=dn[e];for(t in r)if(r.hasOwnProperty(t)&&t in un)return cn[e]=r[t];return e}rt&&(un=document.createElement("div").style,"AnimationEvent"in window||(delete dn.animationend.animation,delete dn.animationiteration.animation,delete dn.animationstart.animation),"TransitionEvent"in window||delete dn.transitionend.transition);var pn=hn("animationend"),mn=hn("animationiteration"),fn=hn("animationstart"),gn=hn("transitionrun"),vn=hn("transitionstart"),xn=hn("transitioncancel"),yn=hn("transitionend"),bn=new Map,wn="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function jn(e,t){bn.set(e,t),et(t,[e])}var Sn=[],kn=0,Cn=0;function Tn(){for(var e=kn,t=Cn=kn=0;t<e;){var r=Sn[t];Sn[t++]=null;var n=Sn[t];Sn[t++]=null;var i=Sn[t];Sn[t++]=null;var a=Sn[t];if(Sn[t++]=null,null!==n&&null!==i){var o=n.pending;null===o?i.next=i:(i.next=o.next,o.next=i),n.pending=i}0!==a&&An(r,i,a)}}function En(e,t,r,n){Sn[kn++]=e,Sn[kn++]=t,Sn[kn++]=r,Sn[kn++]=n,Cn|=n,e.lanes|=n,null!==(e=e.alternate)&&(e.lanes|=n)}function $n(e,t,r,n){return En(e,t,r,n),In(e)}function Pn(e,t){return En(e,null,null,t),In(e)}function An(e,t,r){e.lanes|=r;var n=e.alternate;null!==n&&(n.lanes|=r);for(var i=!1,a=e.return;null!==a;)a.childLanes|=r,null!==(n=a.alternate)&&(n.childLanes|=r),22===a.tag&&(null===(e=a.stateNode)||1&e._visibility||(i=!0)),e=a,a=a.return;i&&null!==t&&3===e.tag&&(a=e.stateNode,i=31-be(r),null===(e=(a=a.hiddenUpdates)[i])?a[i]=[t]:e.push(t),t.lane=536870912|r)}function In(e){if(50<$d)throw $d=0,Pd=null,Error(o(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var zn={},Mn=new WeakMap;function Fn(e,t){if("object"===typeof e&&null!==e){var r=Mn.get(e);return void 0!==r?r:(t={value:e,source:t,stack:O(t)},Mn.set(e,t),t)}return{value:e,source:t,stack:O(t)}}var Rn=[],On=0,Nn=null,Ln=0,Dn=[],Vn=0,_n=null,Bn=1,Un="";function Hn(e,t){Rn[On++]=Ln,Rn[On++]=Nn,Nn=e,Ln=t}function Wn(e,t,r){Dn[Vn++]=Bn,Dn[Vn++]=Un,Dn[Vn++]=_n,_n=e;var n=Bn;e=Un;var i=32-be(n)-1;n&=~(1<<i),r+=1;var a=32-be(t)+i;if(30<a){var o=i-i%5;a=(n&(1<<o)-1).toString(32),n>>=o,i-=o,Bn=1<<32-be(t)+i|r<<i|n,Un=a+e}else Bn=1<<a|r<<i|n,Un=e}function qn(e){null!==e.return&&(Hn(e,1),Wn(e,1,0))}function Kn(e){for(;e===Nn;)Nn=Rn[--On],Rn[On]=null,Ln=Rn[--On],Rn[On]=null;for(;e===_n;)_n=Dn[--Vn],Dn[Vn]=null,Un=Dn[--Vn],Dn[Vn]=null,Bn=Dn[--Vn],Dn[Vn]=null}var Gn=null,Yn=null,Xn=!1,Qn=null,Jn=!1,Zn=Error(o(519));function ei(e){throw ai(Fn(Error(o(418,"")),e)),Zn}function ti(e){var t=e.stateNode,r=e.type,n=e.memoizedProps;switch(t[Le]=e,t[De]=n,r){case"dialog":Pc("cancel",t),Pc("close",t);break;case"iframe":case"object":case"embed":Pc("load",t);break;case"video":case"audio":for(r=0;r<Tc.length;r++)Pc(Tc[r],t);break;case"source":Pc("error",t);break;case"img":case"image":case"link":Pc("error",t),Pc("load",t);break;case"details":Pc("toggle",t);break;case"input":Pc("invalid",t),vt(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),ut(t);break;case"select":Pc("invalid",t);break;case"textarea":Pc("invalid",t),wt(t,n.value,n.defaultValue,n.children),ut(t)}"string"!==typeof(r=n.children)&&"number"!==typeof r&&"bigint"!==typeof r||t.textContent===""+r||!0===n.suppressHydrationWarning||Bc(t.textContent,r)?(null!=n.popover&&(Pc("beforetoggle",t),Pc("toggle",t)),null!=n.onScroll&&Pc("scroll",t),null!=n.onScrollEnd&&Pc("scrollend",t),null!=n.onClick&&(t.onclick=Uc),t=!0):t=!1,t||ei(e)}function ri(e){for(Gn=e.return;Gn;)switch(Gn.tag){case 3:case 27:return void(Jn=!0);case 5:case 13:return void(Jn=!1);default:Gn=Gn.return}}function ni(e){if(e!==Gn)return!1;if(!Xn)return ri(e),Xn=!0,!1;var t,r=!1;if((t=3!==e.tag&&27!==e.tag)&&((t=5===e.tag)&&(t=!("form"!==(t=e.type)&&"button"!==t)||Jc(e.type,e.memoizedProps)),t=!t),t&&(r=!0),r&&Yn&&ei(e),ri(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,r=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===r){Yn=su(e.nextSibling);break e}r--}else"$"!==t&&"$!"!==t&&"$?"!==t||r++;e=e.nextSibling}Yn=null}}else Yn=Gn?su(e.stateNode.nextSibling):null;return!0}function ii(){Yn=Gn=null,Xn=!1}function ai(e){null===Qn?Qn=[e]:Qn.push(e)}var oi=Error(o(460)),si=Error(o(474)),li={then:function(){}};function di(e){return"fulfilled"===(e=e.status)||"rejected"===e}function ci(){}function ui(e,t,r){switch(void 0===(r=e[r])?e.push(t):r!==t&&(t.then(ci,ci),t=r),t.status){case"fulfilled":return t.value;case"rejected":if((e=t.reason)===oi)throw Error(o(483));throw e;default:if("string"===typeof t.status)t.then(ci,ci);else{if(null!==(e=td)&&100<e.shellSuspendCounter)throw Error(o(482));(e=t).status="pending",e.then((function(e){if("pending"===t.status){var r=t;r.status="fulfilled",r.value=e}}),(function(e){if("pending"===t.status){var r=t;r.status="rejected",r.reason=e}}))}switch(t.status){case"fulfilled":return t.value;case"rejected":if((e=t.reason)===oi)throw Error(o(483));throw e}throw hi=t,oi}}var hi=null;function pi(){if(null===hi)throw Error(o(459));var e=hi;return hi=null,e}var mi=null,fi=0;function gi(e){var t=fi;return fi+=1,null===mi&&(mi=[]),ui(mi,e,t)}function vi(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function xi(e,t){if(t.$$typeof===l)throw Error(o(525));throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yi(e){return(0,e._init)(e._payload)}function bi(e){function t(t,r){if(e){var n=t.deletions;null===n?(t.deletions=[r],t.flags|=16):n.push(r)}}function r(r,n){if(!e)return null;for(;null!==n;)t(r,n),n=n.sibling;return null}function n(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function i(e,t){return(e=Nl(e,t)).index=0,e.sibling=null,e}function a(t,r,n){return t.index=n,e?null!==(n=t.alternate)?(n=n.index)<r?(t.flags|=33554434,r):n:(t.flags|=33554434,r):(t.flags|=1048576,r)}function s(t){return e&&null===t.alternate&&(t.flags|=33554434),t}function l(e,t,r,n){return null===t||6!==t.tag?((t=Bl(r,e.mode,n)).return=e,t):((t=i(t,r)).return=e,t)}function h(e,t,r,n){var a=r.type;return a===u?m(e,t,r.props.children,n,r.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===w&&yi(a)===t.type)?(vi(t=i(t,r.props),r),t.return=e,t):(vi(t=Dl(r.type,r.key,r.props,null,e.mode,n),r),t.return=e,t)}function p(e,t,r,n){return null===t||4!==t.tag||t.stateNode.containerInfo!==r.containerInfo||t.stateNode.implementation!==r.implementation?((t=Ul(r,e.mode,n)).return=e,t):((t=i(t,r.children||[])).return=e,t)}function m(e,t,r,n,a){return null===t||7!==t.tag?((t=Vl(r,e.mode,n,a)).return=e,t):((t=i(t,r)).return=e,t)}function f(e,t,r){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Bl(""+t,e.mode,r)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case d:return vi(r=Dl(t.type,t.key,t.props,null,e.mode,r),t),r.return=e,r;case c:return(t=Ul(t,e.mode,r)).return=e,t;case w:return f(e,t=(0,t._init)(t._payload),r)}if(_(t)||C(t))return(t=Vl(t,e.mode,r,null)).return=e,t;if("function"===typeof t.then)return f(e,gi(t),r);if(t.$$typeof===g)return f(e,Ts(e,t),r);xi(e,t)}return null}function v(e,t,r,n){var i=null!==t?t.key:null;if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return null!==i?null:l(e,t,""+r,n);if("object"===typeof r&&null!==r){switch(r.$$typeof){case d:return r.key===i?h(e,t,r,n):null;case c:return r.key===i?p(e,t,r,n):null;case w:return v(e,t,r=(i=r._init)(r._payload),n)}if(_(r)||C(r))return null!==i?null:m(e,t,r,n,null);if("function"===typeof r.then)return v(e,t,gi(r),n);if(r.$$typeof===g)return v(e,t,Ts(e,r),n);xi(e,r)}return null}function x(e,t,r,n,i){if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return l(t,e=e.get(r)||null,""+n,i);if("object"===typeof n&&null!==n){switch(n.$$typeof){case d:return h(t,e=e.get(null===n.key?r:n.key)||null,n,i);case c:return p(t,e=e.get(null===n.key?r:n.key)||null,n,i);case w:return x(e,t,r,n=(0,n._init)(n._payload),i)}if(_(n)||C(n))return m(t,e=e.get(r)||null,n,i,null);if("function"===typeof n.then)return x(e,t,r,gi(n),i);if(n.$$typeof===g)return x(e,t,r,Ts(t,n),i);xi(t,n)}return null}function y(l,h,p,m){if("object"===typeof p&&null!==p&&p.type===u&&null===p.key&&(p=p.props.children),"object"===typeof p&&null!==p){switch(p.$$typeof){case d:e:{for(var b=p.key;null!==h;){if(h.key===b){if((b=p.type)===u){if(7===h.tag){r(l,h.sibling),(m=i(h,p.props.children)).return=l,l=m;break e}}else if(h.elementType===b||"object"===typeof b&&null!==b&&b.$$typeof===w&&yi(b)===h.type){r(l,h.sibling),vi(m=i(h,p.props),p),m.return=l,l=m;break e}r(l,h);break}t(l,h),h=h.sibling}p.type===u?((m=Vl(p.props.children,l.mode,m,p.key)).return=l,l=m):(vi(m=Dl(p.type,p.key,p.props,null,l.mode,m),p),m.return=l,l=m)}return s(l);case c:e:{for(b=p.key;null!==h;){if(h.key===b){if(4===h.tag&&h.stateNode.containerInfo===p.containerInfo&&h.stateNode.implementation===p.implementation){r(l,h.sibling),(m=i(h,p.children||[])).return=l,l=m;break e}r(l,h);break}t(l,h),h=h.sibling}(m=Ul(p,l.mode,m)).return=l,l=m}return s(l);case w:return y(l,h,p=(b=p._init)(p._payload),m)}if(_(p))return function(i,o,s,l){for(var d=null,c=null,u=o,h=o=0,p=null;null!==u&&h<s.length;h++){u.index>h?(p=u,u=null):p=u.sibling;var m=v(i,u,s[h],l);if(null===m){null===u&&(u=p);break}e&&u&&null===m.alternate&&t(i,u),o=a(m,o,h),null===c?d=m:c.sibling=m,c=m,u=p}if(h===s.length)return r(i,u),Xn&&Hn(i,h),d;if(null===u){for(;h<s.length;h++)null!==(u=f(i,s[h],l))&&(o=a(u,o,h),null===c?d=u:c.sibling=u,c=u);return Xn&&Hn(i,h),d}for(u=n(u);h<s.length;h++)null!==(p=x(u,i,h,s[h],l))&&(e&&null!==p.alternate&&u.delete(null===p.key?h:p.key),o=a(p,o,h),null===c?d=p:c.sibling=p,c=p);return e&&u.forEach((function(e){return t(i,e)})),Xn&&Hn(i,h),d}(l,h,p,m);if(C(p)){if("function"!==typeof(b=C(p)))throw Error(o(150));return function(i,s,l,d){if(null==l)throw Error(o(151));for(var c=null,u=null,h=s,p=s=0,m=null,g=l.next();null!==h&&!g.done;p++,g=l.next()){h.index>p?(m=h,h=null):m=h.sibling;var y=v(i,h,g.value,d);if(null===y){null===h&&(h=m);break}e&&h&&null===y.alternate&&t(i,h),s=a(y,s,p),null===u?c=y:u.sibling=y,u=y,h=m}if(g.done)return r(i,h),Xn&&Hn(i,p),c;if(null===h){for(;!g.done;p++,g=l.next())null!==(g=f(i,g.value,d))&&(s=a(g,s,p),null===u?c=g:u.sibling=g,u=g);return Xn&&Hn(i,p),c}for(h=n(h);!g.done;p++,g=l.next())null!==(g=x(h,i,p,g.value,d))&&(e&&null!==g.alternate&&h.delete(null===g.key?p:g.key),s=a(g,s,p),null===u?c=g:u.sibling=g,u=g);return e&&h.forEach((function(e){return t(i,e)})),Xn&&Hn(i,p),c}(l,h,p=b.call(p),m)}if("function"===typeof p.then)return y(l,h,gi(p),m);if(p.$$typeof===g)return y(l,h,Ts(l,p),m);xi(l,p)}return"string"===typeof p&&""!==p||"number"===typeof p||"bigint"===typeof p?(p=""+p,null!==h&&6===h.tag?(r(l,h.sibling),(m=i(h,p)).return=l,l=m):(r(l,h),(m=Bl(p,l.mode,m)).return=l,l=m),s(l)):r(l,h)}return function(e,t,r,n){try{fi=0;var i=y(e,t,r,n);return mi=null,i}catch(o){if(o===oi)throw o;var a=Rl(29,o,null,e.mode);return a.lanes=n,a.return=e,a}}}var wi=bi(!0),ji=bi(!1),Si=q(null),ki=q(0);function Ci(e,t){G(ki,e=dd),G(Si,t),dd=e|t.baseLanes}function Ti(){G(ki,dd),G(Si,Si.current)}function Ei(){dd=ki.current,K(Si),K(ki)}var $i=q(null),Pi=null;function Ai(e){var t=e.alternate;G(Fi,1&Fi.current),G($i,e),null===Pi&&(null===t||null!==Si.current||null!==t.memoizedState)&&(Pi=e)}function Ii(e){if(22===e.tag){if(G(Fi,Fi.current),G($i,e),null===Pi){var t=e.alternate;null!==t&&null!==t.memoizedState&&(Pi=e)}}else zi()}function zi(){G(Fi,Fi.current),G($i,$i.current)}function Mi(e){K($i),Pi===e&&(Pi=null),K(Fi)}var Fi=q(0);function Ri(e){for(var t=e;null!==t;){if(13===t.tag){var r=t.memoizedState;if(null!==r&&(null===(r=r.dehydrated)||"$?"===r.data||"$!"===r.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Oi="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach((function(e){return e()}))}},Ni=n.unstable_scheduleCallback,Li=n.unstable_NormalPriority,Di={$$typeof:g,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vi(){return{controller:new Oi,data:new Map,refCount:0}}function _i(e){e.refCount--,0===e.refCount&&Ni(Li,(function(){e.controller.abort()}))}var Bi=null,Ui=0,Hi=0,Wi=null;function qi(){if(0===--Ui&&null!==Bi){null!==Wi&&(Wi.status="fulfilled");var e=Bi;Bi=null,Hi=0,Wi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Ki=A.S;A.S=function(e,t){"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Bi){var r=Bi=[];Ui=0,Hi=wc(),Wi={status:"pending",value:void 0,then:function(e){r.push(e)}}}Ui++,t.then(qi,qi)}(0,t),null!==Ki&&Ki(e,t)};var Gi=q(null);function Yi(){var e=Gi.current;return null!==e?e:td.pooledCache}function Xi(e,t){G(Gi,null===t?Gi.current:t.pool)}function Qi(){var e=Yi();return null===e?null:{parent:Di._currentValue,pool:e}}var Ji=0,Zi=null,ea=null,ta=null,ra=!1,na=!1,ia=!1,aa=0,oa=0,sa=null,la=0;function da(){throw Error(o(321))}function ca(e,t){if(null===t)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Kr(e[r],t[r]))return!1;return!0}function ua(e,t,r,n,i,a){return Ji=a,Zi=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,A.H=null===e||null===e.memoizedState?To:Eo,ia=!1,a=r(n,i),ia=!1,na&&(a=pa(t,r,n,i)),ha(e),a}function ha(e){A.H=Co;var t=null!==ea&&null!==ea.next;if(Ji=0,ta=ea=Zi=null,ra=!1,oa=0,sa=null,t)throw Error(o(300));null===e||Ho||null!==(e=e.dependencies)&&Ss(e)&&(Ho=!0)}function pa(e,t,r,n){Zi=e;var i=0;do{if(na&&(sa=null),oa=0,na=!1,25<=i)throw Error(o(301));if(i+=1,ta=ea=null,null!=e.updateQueue){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,null!=a.memoCache&&(a.memoCache.index=0)}A.H=$o,a=t(r,n)}while(na);return a}function ma(){var e=A.H,t=e.useState()[0];return t="function"===typeof t.then?ba(t):t,e=e.useState()[0],(null!==ea?ea.memoizedState:null)!==e&&(Zi.flags|=1024),t}function fa(){var e=0!==aa;return aa=0,e}function ga(e,t,r){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r}function va(e){if(ra){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}ra=!1}Ji=0,ta=ea=Zi=null,na=!1,oa=aa=0,sa=null}function xa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ta?Zi.memoizedState=ta=e:ta=ta.next=e,ta}function ya(){if(null===ea){var e=Zi.alternate;e=null!==e?e.memoizedState:null}else e=ea.next;var t=null===ta?Zi.memoizedState:ta.next;if(null!==t)ta=t,ea=e;else{if(null===e){if(null===Zi.alternate)throw Error(o(467));throw Error(o(310))}e={memoizedState:(ea=e).memoizedState,baseState:ea.baseState,baseQueue:ea.baseQueue,queue:ea.queue,next:null},null===ta?Zi.memoizedState=ta=e:ta=ta.next=e}return ta}function ba(e){var t=oa;return oa+=1,null===sa&&(sa=[]),e=ui(sa,e,t),t=Zi,null===(null===ta?t.memoizedState:ta.next)&&(t=t.alternate,A.H=null===t||null===t.memoizedState?To:Eo),e}function wa(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return ba(e);if(e.$$typeof===g)return Cs(e)}throw Error(o(438,String(e)))}function ja(e){var t=null,r=Zi.updateQueue;if(null!==r&&(t=r.memoCache),null==t){var n=Zi.alternate;null!==n&&(null!==(n=n.updateQueue)&&(null!=(n=n.memoCache)&&(t={data:n.data.map((function(e){return e.slice()})),index:0})))}if(null==t&&(t={data:[],index:0}),null===r&&(r={lastEffect:null,events:null,stores:null,memoCache:null},Zi.updateQueue=r),r.memoCache=t,void 0===(r=t.data[t.index]))for(r=t.data[t.index]=Array(e),n=0;n<e;n++)r[n]=S;return t.index++,r}function Sa(e,t){return"function"===typeof t?t(e):t}function ka(e){return Ca(ya(),ea,e)}function Ca(e,t,r){var n=e.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=r;var i=e.baseQueue,a=n.pending;if(null!==a){if(null!==i){var s=i.next;i.next=a.next,a.next=s}t.baseQueue=i=a,n.pending=null}if(a=e.baseState,null===i)e.memoizedState=a;else{var l=s=null,d=null,c=t=i.next,u=!1;do{var h=-536870913&c.lane;if(h!==c.lane?(nd&h)===h:(Ji&h)===h){var p=c.revertLane;if(0===p)null!==d&&(d=d.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),h===Hi&&(u=!0);else{if((Ji&p)===p){c=c.next,p===Hi&&(u=!0);continue}h={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===d?(l=d=h,s=a):d=d.next=h,Zi.lanes|=p,ud|=p}h=c.action,ia&&r(a,h),a=c.hasEagerState?c.eagerState:r(a,h)}else p={lane:h,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===d?(l=d=p,s=a):d=d.next=p,Zi.lanes|=h,ud|=h;c=c.next}while(null!==c&&c!==t);if(null===d?s=a:d.next=l,!Kr(a,e.memoizedState)&&(Ho=!0,u&&null!==(r=Wi)))throw r;e.memoizedState=a,e.baseState=s,e.baseQueue=d,n.lastRenderedState=a}return null===i&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Ta(e){var t=ya(),r=t.queue;if(null===r)throw Error(o(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,a=t.memoizedState;if(null!==i){r.pending=null;var s=i=i.next;do{a=e(a,s.action),s=s.next}while(s!==i);Kr(a,t.memoizedState)||(Ho=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function Ea(e,t,r){var n=Zi,i=ya(),a=Xn;if(a){if(void 0===r)throw Error(o(407));r=r()}else r=t();var s=!Kr((ea||i).memoizedState,r);if(s&&(i.memoizedState=r,Ho=!0),i=i.queue,Ja(Aa.bind(null,n,i,e),[e]),i.getSnapshot!==t||s||null!==ta&&1&ta.memoizedState.tag){if(n.flags|=2048,Ka(9,Pa.bind(null,n,i,r,t),{destroy:void 0},null),null===td)throw Error(o(349));a||0!==(60&Ji)||$a(n,t,r)}return r}function $a(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},null===(t=Zi.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},Zi.updateQueue=t,t.stores=[e]):null===(r=t.stores)?t.stores=[e]:r.push(e)}function Pa(e,t,r,n){t.value=r,t.getSnapshot=n,Ia(t)&&za(e)}function Aa(e,t,r){return r((function(){Ia(t)&&za(e)}))}function Ia(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Kr(e,r)}catch(n){return!0}}function za(e){var t=Pn(e,2);null!==t&&zd(t,e,2)}function Ma(e){var t=xa();if("function"===typeof e){var r=e;if(e=r(),ia){ye(!0);try{r()}finally{ye(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:e},t}function Fa(e,t,r,n){return e.baseState=r,Ca(e,ea,"function"===typeof n?n:Sa)}function Ra(e,t,r,n,i){if(jo(e))throw Error(o(485));if(null!==(e=t.action)){var a={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};null!==A.T?r(!0):a.isTransition=!1,n(a),null===(r=t.pending)?(a.next=t.pending=a,Oa(t,a)):(a.next=r.next,t.pending=r.next=a)}}function Oa(e,t){var r=t.action,n=t.payload,i=e.state;if(t.isTransition){var a=A.T,o={};A.T=o;try{var s=r(i,n),l=A.S;null!==l&&l(o,s),Na(e,t,s)}catch(d){Da(e,t,d)}finally{A.T=a}}else try{Na(e,t,a=r(i,n))}catch(c){Da(e,t,c)}}function Na(e,t,r){null!==r&&"object"===typeof r&&"function"===typeof r.then?r.then((function(r){La(e,t,r)}),(function(r){return Da(e,t,r)})):La(e,t,r)}function La(e,t,r){t.status="fulfilled",t.value=r,Va(t),e.state=r,null!==(t=e.pending)&&((r=t.next)===t?e.pending=null:(r=r.next,t.next=r,Oa(e,r)))}function Da(e,t,r){var n=e.pending;if(e.pending=null,null!==n){n=n.next;do{t.status="rejected",t.reason=r,Va(t),t=t.next}while(t!==n)}e.action=null}function Va(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function _a(e,t){return t}function Ba(e,t){if(Xn){var r=td.formState;if(null!==r){e:{var n=Zi;if(Xn){if(Yn){t:{for(var i=Yn,a=Jn;8!==i.nodeType;){if(!a){i=null;break t}if(null===(i=su(i.nextSibling))){i=null;break t}}i="F!"===(a=i.data)||"F"===a?i:null}if(i){Yn=su(i.nextSibling),n="F!"===i.data;break e}}ei(n)}n=!1}n&&(t=r[0])}}return(r=xa()).memoizedState=r.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:t},r.queue=n,r=yo.bind(null,Zi,n),n.dispatch=r,n=Ma(!1),a=wo.bind(null,Zi,!1,n.queue),i={state:t,dispatch:null,action:e,pending:null},(n=xa()).queue=i,r=Ra.bind(null,Zi,i,a,r),i.dispatch=r,n.memoizedState=e,[t,r,!1]}function Ua(e){return Ha(ya(),ea,e)}function Ha(e,t,r){t=Ca(e,t,_a)[0],e=ka(Sa)[0],t="object"===typeof t&&null!==t&&"function"===typeof t.then?ba(t):t;var n=ya(),i=n.queue,a=i.dispatch;return r!==n.memoizedState&&(Zi.flags|=2048,Ka(9,Wa.bind(null,i,r),{destroy:void 0},null)),[t,a,e]}function Wa(e,t){e.action=t}function qa(e){var t=ya(),r=ea;if(null!==r)return Ha(t,r,e);ya(),t=t.memoizedState;var n=(r=ya()).queue.dispatch;return r.memoizedState=e,[t,n,!1]}function Ka(e,t,r,n){return e={tag:e,create:t,inst:r,deps:n,next:null},null===(t=Zi.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},Zi.updateQueue=t),null===(r=t.lastEffect)?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e),e}function Ga(){return ya().memoizedState}function Ya(e,t,r,n){var i=xa();Zi.flags|=e,i.memoizedState=Ka(1|t,r,{destroy:void 0},void 0===n?null:n)}function Xa(e,t,r,n){var i=ya();n=void 0===n?null:n;var a=i.memoizedState.inst;null!==ea&&null!==n&&ca(n,ea.memoizedState.deps)?i.memoizedState=Ka(t,r,a,n):(Zi.flags|=e,i.memoizedState=Ka(1|t,r,a,n))}function Qa(e,t){Ya(8390656,8,e,t)}function Ja(e,t){Xa(2048,8,e,t)}function Za(e,t){return Xa(4,2,e,t)}function eo(e,t){return Xa(4,4,e,t)}function to(e,t){if("function"===typeof t){e=e();var r=t(e);return function(){"function"===typeof r?r():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function ro(e,t,r){r=null!==r&&void 0!==r?r.concat([e]):null,Xa(4,4,to.bind(null,t,e),r)}function no(){}function io(e,t){var r=ya();t=void 0===t?null:t;var n=r.memoizedState;return null!==t&&ca(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function ao(e,t){var r=ya();t=void 0===t?null:t;var n=r.memoizedState;if(null!==t&&ca(t,n[1]))return n[0];if(n=e(),ia){ye(!0);try{e()}finally{ye(!1)}}return r.memoizedState=[n,t],n}function oo(e,t,r){return void 0===r||0!==(1073741824&Ji)?e.memoizedState=t:(e.memoizedState=r,e=Id(),Zi.lanes|=e,ud|=e,r)}function so(e,t,r,n){return Kr(r,t)?r:null!==Si.current?(e=oo(e,r,n),Kr(e,t)||(Ho=!0),e):0===(42&Ji)?(Ho=!0,e.memoizedState=r):(e=Id(),Zi.lanes|=e,ud|=e,t)}function lo(e,t,r,n,i){var a=B.p;B.p=0!==a&&8>a?a:8;var o=A.T,s={};A.T=s,wo(e,!1,t,r);try{var l=i(),d=A.S;if(null!==d&&d(s,l),null!==l&&"object"===typeof l&&"function"===typeof l.then)bo(e,t,function(e,t){var r=[],n={status:"pending",value:null,reason:null,then:function(e){r.push(e)}};return e.then((function(){n.status="fulfilled",n.value=t;for(var e=0;e<r.length;e++)(0,r[e])(t)}),(function(e){for(n.status="rejected",n.reason=e,e=0;e<r.length;e++)(0,r[e])(void 0)})),n}(l,n),Ad());else bo(e,t,n,Ad())}catch(c){bo(e,t,{then:function(){},status:"rejected",reason:c},Ad())}finally{B.p=a,A.T=o}}function co(){}function uo(e,t,r,n){if(5!==e.tag)throw Error(o(476));var i=ho(e).queue;lo(e,i,t,U,null===r?co:function(){return po(e),r(n)})}function ho(e){var t=e.memoizedState;if(null!==t)return t;var r={};return(t={memoizedState:U,baseState:U,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:U},next:null}).next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:r},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function po(e){bo(e,ho(e).next.queue,{},Ad())}function mo(){return Cs(Ou)}function fo(){return ya().memoizedState}function go(){return ya().memoizedState}function vo(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var r=Ad(),n=zs(t,e=Is(r),r);return null!==n&&(zd(n,t,r),Ms(n,t,r)),t={cache:Vi()},void(e.payload=t)}t=t.return}}function xo(e,t,r){var n=Ad();r={lane:n,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},jo(e)?So(t,r):null!==(r=$n(e,t,r,n))&&(zd(r,e,n),ko(r,t,n))}function yo(e,t,r){bo(e,t,r,Ad())}function bo(e,t,r,n){var i={lane:n,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(jo(e))So(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=a(o,r);if(i.hasEagerState=!0,i.eagerState=s,Kr(s,o))return En(e,t,i,0),null===td&&Tn(),!1}catch(l){}if(null!==(r=$n(e,t,i,n)))return zd(r,e,n),ko(r,t,n),!0}return!1}function wo(e,t,r,n){if(n={lane:2,revertLane:wc(),action:n,hasEagerState:!1,eagerState:null,next:null},jo(e)){if(t)throw Error(o(479))}else null!==(t=$n(e,r,n,2))&&zd(t,e,2)}function jo(e){var t=e.alternate;return e===Zi||null!==t&&t===Zi}function So(e,t){na=ra=!0;var r=e.pending;null===r?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function ko(e,t,r){if(0!==(4194176&r)){var n=t.lanes;r|=n&=e.pendingLanes,t.lanes=r,Fe(e,r)}}var Co={readContext:Cs,use:wa,useCallback:da,useContext:da,useEffect:da,useImperativeHandle:da,useLayoutEffect:da,useInsertionEffect:da,useMemo:da,useReducer:da,useRef:da,useState:da,useDebugValue:da,useDeferredValue:da,useTransition:da,useSyncExternalStore:da,useId:da};Co.useCacheRefresh=da,Co.useMemoCache=da,Co.useHostTransitionStatus=da,Co.useFormState=da,Co.useActionState=da,Co.useOptimistic=da;var To={readContext:Cs,use:wa,useCallback:function(e,t){return xa().memoizedState=[e,void 0===t?null:t],e},useContext:Cs,useEffect:Qa,useImperativeHandle:function(e,t,r){r=null!==r&&void 0!==r?r.concat([e]):null,Ya(4194308,4,to.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ya(4194308,4,e,t)},useInsertionEffect:function(e,t){Ya(4,2,e,t)},useMemo:function(e,t){var r=xa();t=void 0===t?null:t;var n=e();if(ia){ye(!0);try{e()}finally{ye(!1)}}return r.memoizedState=[n,t],n},useReducer:function(e,t,r){var n=xa();if(void 0!==r){var i=r(t);if(ia){ye(!0);try{r(t)}finally{ye(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=xo.bind(null,Zi,e),[n.memoizedState,e]},useRef:function(e){return e={current:e},xa().memoizedState=e},useState:function(e){var t=(e=Ma(e)).queue,r=yo.bind(null,Zi,t);return t.dispatch=r,[e.memoizedState,r]},useDebugValue:no,useDeferredValue:function(e,t){return oo(xa(),e,t)},useTransition:function(){var e=Ma(!1);return e=lo.bind(null,Zi,e.queue,!0,!1),xa().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,r){var n=Zi,i=xa();if(Xn){if(void 0===r)throw Error(o(407));r=r()}else{if(r=t(),null===td)throw Error(o(349));0!==(60&nd)||$a(n,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,Qa(Aa.bind(null,n,a,e),[e]),n.flags|=2048,Ka(9,Pa.bind(null,n,a,r,t),{destroy:void 0},null),r},useId:function(){var e=xa(),t=td.identifierPrefix;if(Xn){var r=Un;t=":"+t+"R"+(r=(Bn&~(1<<32-be(Bn)-1)).toString(32)+r),0<(r=aa++)&&(t+="H"+r.toString(32)),t+=":"}else t=":"+t+"r"+(r=la++).toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return xa().memoizedState=vo.bind(null,Zi)}};To.useMemoCache=ja,To.useHostTransitionStatus=mo,To.useFormState=Ba,To.useActionState=Ba,To.useOptimistic=function(e){var t=xa();t.memoizedState=t.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=r,t=wo.bind(null,Zi,!0,r),r.dispatch=t,[e,t]};var Eo={readContext:Cs,use:wa,useCallback:io,useContext:Cs,useEffect:Ja,useImperativeHandle:ro,useInsertionEffect:Za,useLayoutEffect:eo,useMemo:ao,useReducer:ka,useRef:Ga,useState:function(){return ka(Sa)},useDebugValue:no,useDeferredValue:function(e,t){return so(ya(),ea.memoizedState,e,t)},useTransition:function(){var e=ka(Sa)[0],t=ya().memoizedState;return["boolean"===typeof e?e:ba(e),t]},useSyncExternalStore:Ea,useId:fo};Eo.useCacheRefresh=go,Eo.useMemoCache=ja,Eo.useHostTransitionStatus=mo,Eo.useFormState=Ua,Eo.useActionState=Ua,Eo.useOptimistic=function(e,t){return Fa(ya(),0,e,t)};var $o={readContext:Cs,use:wa,useCallback:io,useContext:Cs,useEffect:Ja,useImperativeHandle:ro,useInsertionEffect:Za,useLayoutEffect:eo,useMemo:ao,useReducer:Ta,useRef:Ga,useState:function(){return Ta(Sa)},useDebugValue:no,useDeferredValue:function(e,t){var r=ya();return null===ea?oo(r,e,t):so(r,ea.memoizedState,e,t)},useTransition:function(){var e=Ta(Sa)[0],t=ya().memoizedState;return["boolean"===typeof e?e:ba(e),t]},useSyncExternalStore:Ea,useId:fo};function Po(e,t,r,n){r=null===(r=r(n,t=e.memoizedState))||void 0===r?t:I({},t,r),e.memoizedState=r,0===e.lanes&&(e.updateQueue.baseState=r)}$o.useCacheRefresh=go,$o.useMemoCache=ja,$o.useHostTransitionStatus=mo,$o.useFormState=qa,$o.useActionState=qa,$o.useOptimistic=function(e,t){var r=ya();return null!==ea?Fa(r,0,e,t):(r.baseState=e,[e,r.queue.dispatch])};var Ao={isMounted:function(e){return!!(e=e._reactInternals)&&N(e)===e},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Ad(),i=Is(n);i.payload=t,void 0!==r&&null!==r&&(i.callback=r),null!==(t=zs(e,i,n))&&(zd(t,e,n),Ms(t,e,n))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Ad(),i=Is(n);i.tag=1,i.payload=t,void 0!==r&&null!==r&&(i.callback=r),null!==(t=zs(e,i,n))&&(zd(t,e,n),Ms(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ad(),n=Is(r);n.tag=2,void 0!==t&&null!==t&&(n.callback=t),null!==(t=zs(e,n,r))&&(zd(t,e,r),Ms(t,e,r))}};function Io(e,t,r,n,i,a,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(n,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!Gr(r,n)||!Gr(i,a))}function zo(e,t,r,n){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(r,n),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ao.enqueueReplaceState(t,t.state,null)}function Mo(e,t){var r=t;if("ref"in t)for(var n in r={},t)"ref"!==n&&(r[n]=t[n]);if(e=e.defaultProps)for(var i in r===t&&(r=I({},r)),e)void 0===r[i]&&(r[i]=e[i]);return r}var Fo="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function Ro(e){Fo(e)}function Oo(e){console.error(e)}function No(e){Fo(e)}function Lo(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(r){setTimeout((function(){throw r}))}}function Do(e,t,r){try{(0,e.onCaughtError)(r.value,{componentStack:r.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(n){setTimeout((function(){throw n}))}}function Vo(e,t,r){return(r=Is(r)).tag=3,r.payload={element:null},r.callback=function(){Lo(e,t)},r}function _o(e){return(e=Is(e)).tag=3,e}function Bo(e,t,r,n){var i=r.type.getDerivedStateFromError;if("function"===typeof i){var a=n.value;e.payload=function(){return i(a)},e.callback=function(){Do(t,r,n)}}var o=r.stateNode;null!==o&&"function"===typeof o.componentDidCatch&&(e.callback=function(){Do(t,r,n),"function"!==typeof i&&(null===jd?jd=new Set([this]):jd.add(this));var e=n.stack;this.componentDidCatch(n.value,{componentStack:null!==e?e:""})})}var Uo=Error(o(461)),Ho=!1;function Wo(e,t,r,n){t.child=null===e?ji(t,null,r,n):wi(t,e.child,r,n)}function qo(e,t,r,n,i){r=r.render;var a=t.ref;if("ref"in n){var o={};for(var s in n)"ref"!==s&&(o[s]=n[s])}else o=n;return ks(t),n=ua(e,t,r,o,a,i),s=fa(),null===e||Ho?(Xn&&s&&qn(t),t.flags|=1,Wo(e,t,n,i),t.child):(ga(e,t,i),hs(e,t,i))}function Ko(e,t,r,n,i){if(null===e){var a=r.type;return"function"!==typeof a||Ol(a)||void 0!==a.defaultProps||null!==r.compare?((e=Dl(r.type,null,n,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,Go(e,t,a,n,i))}if(a=e.child,!ps(e,i)){var o=a.memoizedProps;if((r=null!==(r=r.compare)?r:Gr)(o,n)&&e.ref===t.ref)return hs(e,t,i)}return t.flags|=1,(e=Nl(a,n)).ref=t.ref,e.return=t,t.child=e}function Go(e,t,r,n,i){if(null!==e){var a=e.memoizedProps;if(Gr(a,n)&&e.ref===t.ref){if(Ho=!1,t.pendingProps=n=a,!ps(e,i))return t.lanes=e.lanes,hs(e,t,i);0!==(131072&e.flags)&&(Ho=!0)}}return Jo(e,t,r,n,i)}function Yo(e,t,r){var n=t.pendingProps,i=n.children,a=0!==(2&t.stateNode._pendingVisibility),o=null!==e?e.memoizedState:null;if(Qo(e,t),"hidden"===n.mode||a){if(0!==(128&t.flags)){if(n=null!==o?o.baseLanes|r:r,null!==e){for(i=t.child=e.child,a=0;null!==i;)a=a|i.lanes|i.childLanes,i=i.sibling;t.childLanes=a&~n}else t.childLanes=0,t.child=null;return Xo(e,t,n,r)}if(0===(536870912&r))return t.lanes=t.childLanes=536870912,Xo(e,t,null!==o?o.baseLanes|r:r,r);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Xi(0,null!==o?o.cachePool:null),null!==o?Ci(t,o):Ti(),Ii(t)}else null!==o?(Xi(0,o.cachePool),Ci(t,o),zi(),t.memoizedState=null):(null!==e&&Xi(0,null),Ti(),zi());return Wo(e,t,i,r),t.child}function Xo(e,t,r,n){var i=Yi();return i=null===i?null:{parent:Di._currentValue,pool:i},t.memoizedState={baseLanes:r,cachePool:i},null!==e&&Xi(0,null),Ti(),Ii(t),null!==e&&js(e,t,n,!0),null}function Qo(e,t){var r=t.ref;if(null===r)null!==e&&null!==e.ref&&(t.flags|=2097664);else{if("function"!==typeof r&&"object"!==typeof r)throw Error(o(284));null!==e&&e.ref===r||(t.flags|=2097664)}}function Jo(e,t,r,n,i){return ks(t),r=ua(e,t,r,n,void 0,i),n=fa(),null===e||Ho?(Xn&&n&&qn(t),t.flags|=1,Wo(e,t,r,i),t.child):(ga(e,t,i),hs(e,t,i))}function Zo(e,t,r,n,i,a){return ks(t),t.updateQueue=null,r=pa(t,n,r,i),ha(e),n=fa(),null===e||Ho?(Xn&&n&&qn(t),t.flags|=1,Wo(e,t,r,a),t.child):(ga(e,t,a),hs(e,t,a))}function es(e,t,r,n,i){if(ks(t),null===t.stateNode){var a=zn,o=r.contextType;"object"===typeof o&&null!==o&&(a=Cs(o)),a=new r(n,a),t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,a.updater=Ao,t.stateNode=a,a._reactInternals=t,(a=t.stateNode).props=n,a.state=t.memoizedState,a.refs={},Ps(t),o=r.contextType,a.context="object"===typeof o&&null!==o?Cs(o):zn,a.state=t.memoizedState,"function"===typeof(o=r.getDerivedStateFromProps)&&(Po(t,r,o,n),a.state=t.memoizedState),"function"===typeof r.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(o=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),o!==a.state&&Ao.enqueueReplaceState(a,a.state,null),Ns(t,n,a,i),Os(),a.state=t.memoizedState),"function"===typeof a.componentDidMount&&(t.flags|=4194308),n=!0}else if(null===e){a=t.stateNode;var s=t.memoizedProps,l=Mo(r,s);a.props=l;var d=a.context,c=r.contextType;o=zn,"object"===typeof c&&null!==c&&(o=Cs(c));var u=r.getDerivedStateFromProps;c="function"===typeof u||"function"===typeof a.getSnapshotBeforeUpdate,s=t.pendingProps!==s,c||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s||d!==o)&&zo(t,a,n,o),$s=!1;var h=t.memoizedState;a.state=h,Ns(t,n,a,i),Os(),d=t.memoizedState,s||h!==d||$s?("function"===typeof u&&(Po(t,r,u,n),d=t.memoizedState),(l=$s||Io(t,r,l,n,h,d,o))?(c||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=d),a.props=n,a.state=d,a.context=o,n=l):("function"===typeof a.componentDidMount&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,As(e,t),c=Mo(r,o=t.memoizedProps),a.props=c,u=t.pendingProps,h=a.context,d=r.contextType,l=zn,"object"===typeof d&&null!==d&&(l=Cs(d)),(d="function"===typeof(s=r.getDerivedStateFromProps)||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(o!==u||h!==l)&&zo(t,a,n,l),$s=!1,h=t.memoizedState,a.state=h,Ns(t,n,a,i),Os();var p=t.memoizedState;o!==u||h!==p||$s||null!==e&&null!==e.dependencies&&Ss(e.dependencies)?("function"===typeof s&&(Po(t,r,s,n),p=t.memoizedState),(c=$s||Io(t,r,c,n,h,p,l)||null!==e&&null!==e.dependencies&&Ss(e.dependencies))?(d||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(n,p,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(n,p,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=p),a.props=n,a.state=p,a.context=l,n=c):("function"!==typeof a.componentDidUpdate||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return a=n,Qo(e,t),n=0!==(128&t.flags),a||n?(a=t.stateNode,r=n&&"function"!==typeof r.getDerivedStateFromError?null:a.render(),t.flags|=1,null!==e&&n?(t.child=wi(t,e.child,null,i),t.child=wi(t,null,r,i)):Wo(e,t,r,i),t.memoizedState=a.state,e=t.child):e=hs(e,t,i),e}function ts(e,t,r,n){return ii(),t.flags|=256,Wo(e,t,r,n),t.child}var rs={dehydrated:null,treeContext:null,retryLane:0};function ns(e){return{baseLanes:e,cachePool:Qi()}}function is(e,t,r){return e=null!==e?e.childLanes&~r:0,t&&(e|=md),e}function as(e,t,r){var n,i=t.pendingProps,a=!1,s=0!==(128&t.flags);if((n=s)||(n=(null===e||null!==e.memoizedState)&&0!==(2&Fi.current)),n&&(a=!0,t.flags&=-129),n=0!==(32&t.flags),t.flags&=-33,null===e){if(Xn){if(a?Ai(t):zi(),Xn){var l,d=Yn;if(l=d){e:{for(l=d,d=Jn;8!==l.nodeType;){if(!d){d=null;break e}if(null===(l=su(l.nextSibling))){d=null;break e}}d=l}null!==d?(t.memoizedState={dehydrated:d,treeContext:null!==_n?{id:Bn,overflow:Un}:null,retryLane:536870912},(l=Rl(18,null,null,0)).stateNode=d,l.return=t,t.child=l,Gn=t,Yn=null,l=!0):l=!1}l||ei(t)}if(null!==(d=t.memoizedState)&&null!==(d=d.dehydrated))return"$!"===d.data?t.lanes=16:t.lanes=536870912,null;Mi(t)}return d=i.children,i=i.fallback,a?(zi(),d=ss({mode:"hidden",children:d},a=t.mode),i=Vl(i,a,r,null),d.return=t,i.return=t,d.sibling=i,t.child=d,(a=t.child).memoizedState=ns(r),a.childLanes=is(e,n,r),t.memoizedState=rs,i):(Ai(t),os(t,d))}if(null!==(l=e.memoizedState)&&null!==(d=l.dehydrated)){if(s)256&t.flags?(Ai(t),t.flags&=-257,t=ls(e,t,r)):null!==t.memoizedState?(zi(),t.child=e.child,t.flags|=128,t=null):(zi(),a=i.fallback,d=t.mode,i=ss({mode:"visible",children:i.children},d),(a=Vl(a,d,r,null)).flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,wi(t,e.child,null,r),(i=t.child).memoizedState=ns(r),i.childLanes=is(e,n,r),t.memoizedState=rs,t=a);else if(Ai(t),"$!"===d.data){if(n=d.nextSibling&&d.nextSibling.dataset)var c=n.dgst;n=c,(i=Error(o(419))).stack="",i.digest=n,ai({value:i,source:null,stack:null}),t=ls(e,t,r)}else if(Ho||js(e,t,r,!1),n=0!==(r&e.childLanes),Ho||n){if(null!==(n=td)){if(0!==(42&(i=r&-r)))i=1;else switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=64;break;case 268435456:i=134217728;break;default:i=0}if(0!==(i=0!==(i&(n.suspendedLanes|r))?0:i)&&i!==l.retryLane)throw l.retryLane=i,Pn(e,i),zd(n,e,i),Uo}"$?"===d.data||Hd(),t=ls(e,t,r)}else"$?"===d.data?(t.flags|=128,t.child=e.child,t=sc.bind(null,e),d._reactRetry=t,t=null):(e=l.treeContext,Yn=su(d.nextSibling),Gn=t,Xn=!0,Qn=null,Jn=!1,null!==e&&(Dn[Vn++]=Bn,Dn[Vn++]=Un,Dn[Vn++]=_n,Bn=e.id,Un=e.overflow,_n=t),(t=os(t,i.children)).flags|=4096);return t}return a?(zi(),a=i.fallback,d=t.mode,c=(l=e.child).sibling,(i=Nl(l,{mode:"hidden",children:i.children})).subtreeFlags=31457280&l.subtreeFlags,null!==c?a=Nl(c,a):(a=Vl(a,d,r,null)).flags|=2,a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,null===(d=e.child.memoizedState)?d=ns(r):(null!==(l=d.cachePool)?(c=Di._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=Qi(),d={baseLanes:d.baseLanes|r,cachePool:l}),a.memoizedState=d,a.childLanes=is(e,n,r),t.memoizedState=rs,i):(Ai(t),e=(r=e.child).sibling,(r=Nl(r,{mode:"visible",children:i.children})).return=t,r.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r)}function os(e,t){return(t=ss({mode:"visible",children:t},e.mode)).return=e,e.child=t}function ss(e,t){return _l(e,t,0,null)}function ls(e,t,r){return wi(t,e.child,null,r),(e=os(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function ds(e,t,r){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),bs(e.return,t,r)}function cs(e,t,r,n,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=i)}function us(e,t,r){var n=t.pendingProps,i=n.revealOrder,a=n.tail;if(Wo(e,t,n.children,r),0!==(2&(n=Fi.current)))n=1&n|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&ds(e,r,t);else if(19===e.tag)ds(e,r,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(G(Fi,n),i){case"forwards":for(r=t.child,i=null;null!==r;)null!==(e=r.alternate)&&null===Ri(e)&&(i=r),r=r.sibling;null===(r=i)?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),cs(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===Ri(e)){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}cs(t,!0,r,null,a);break;case"together":cs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function hs(e,t,r){if(null!==e&&(t.dependencies=e.dependencies),ud|=t.lanes,0===(r&t.childLanes)){if(null===e)return null;if(js(e,t,r,!1),0===(r&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(r=Nl(e=t.child,e.pendingProps),t.child=r,r.return=t;null!==e.sibling;)e=e.sibling,(r=r.sibling=Nl(e,e.pendingProps)).return=t;r.sibling=null}return t.child}function ps(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!Ss(e))}function ms(e,t,r){if(null!==e)if(e.memoizedProps!==t.pendingProps)Ho=!0;else{if(!ps(e,r)&&0===(128&t.flags))return Ho=!1,function(e,t,r){switch(t.tag){case 3:Z(t,t.stateNode.containerInfo),xs(t,Di,e.memoizedState.cache),ii();break;case 27:case 5:te(t);break;case 4:Z(t,t.stateNode.containerInfo);break;case 10:xs(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(null!==n)return null!==n.dehydrated?(Ai(t),t.flags|=128,null):0!==(r&t.child.childLanes)?as(e,t,r):(Ai(t),null!==(e=hs(e,t,r))?e.sibling:null);Ai(t);break;case 19:var i=0!==(128&e.flags);if((n=0!==(r&t.childLanes))||(js(e,t,r,!1),n=0!==(r&t.childLanes)),i){if(n)return us(e,t,r);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(Fi,Fi.current),n)break;return null;case 22:case 23:return t.lanes=0,Yo(e,t,r);case 24:xs(t,Di,e.memoizedState.cache)}return hs(e,t,r)}(e,t,r);Ho=0!==(131072&e.flags)}else Ho=!1,Xn&&0!==(1048576&t.flags)&&Wn(t,Ln,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,i=n._init;if(n=i(n._payload),t.type=n,"function"!==typeof n){if(void 0!==n&&null!==n){if((i=n.$$typeof)===v){t.tag=11,t=qo(null,t,n,e,r);break e}if(i===b){t.tag=14,t=Ko(null,t,n,e,r);break e}}throw t=E(n)||n,Error(o(306,t,""))}Ol(n)?(e=Mo(n,e),t.tag=1,t=es(null,t,n,e,r)):(t.tag=0,t=Jo(null,t,n,e,r))}return t;case 0:return Jo(e,t,t.type,t.pendingProps,r);case 1:return es(e,t,n=t.type,i=Mo(n,t.pendingProps),r);case 3:e:{if(Z(t,t.stateNode.containerInfo),null===e)throw Error(o(387));var a=t.pendingProps;n=(i=t.memoizedState).element,As(e,t),Ns(t,a,null,r);var s=t.memoizedState;if(a=s.cache,xs(t,Di,a),a!==i.cache&&ws(t,[Di],r,!0),Os(),a=s.element,i.isDehydrated){if(i={element:a,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=ts(e,t,a,r);break e}if(a!==n){ai(n=Fn(Error(o(424)),t)),t=ts(e,t,a,r);break e}for(Yn=su(t.stateNode.containerInfo.firstChild),Gn=t,Xn=!0,Qn=null,Jn=!0,r=ji(t,null,a,r),t.child=r;r;)r.flags=-3&r.flags|4096,r=r.sibling}else{if(ii(),a===n){t=hs(e,t,r);break e}Wo(e,t,a,r)}t=t.child}return t;case 26:return Qo(e,t),null===e?(r=gu(t.type,null,t.pendingProps,null))?t.memoizedState=r:Xn||(r=t.type,e=t.pendingProps,(n=Yc(Q.current).createElement(r))[Le]=t,n[De]=e,qc(n,r,e),Qe(n),t.stateNode=n):t.memoizedState=gu(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return te(t),null===e&&Xn&&(n=t.stateNode=du(t.type,t.pendingProps,Q.current),Gn=t,Jn=!0,Yn=su(n.firstChild)),n=t.pendingProps.children,null!==e||Xn?Wo(e,t,n,r):t.child=wi(t,null,n,r),Qo(e,t),t.child;case 5:return null===e&&Xn&&((i=n=Yn)&&(null!==(n=function(e,t,r,n){for(;1===e.nodeType;){var i=r;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(n){if(!e[We])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(a=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(a!==i.rel||e.getAttribute("href")!==(null==i.href?null:i.href)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin)||e.getAttribute("title")!==(null==i.title?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((a=e.getAttribute("src"))!==(null==i.src?null:i.src)||e.getAttribute("type")!==(null==i.type?null:i.type)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var a=null==i.name?null:""+i.name;if("hidden"===i.type&&e.getAttribute("name")===a)return e}if(null===(e=su(e.nextSibling)))break}return null}(n,t.type,t.pendingProps,Jn))?(t.stateNode=n,Gn=t,Yn=su(n.firstChild),Jn=!1,i=!0):i=!1),i||ei(t)),te(t),i=t.type,a=t.pendingProps,s=null!==e?e.memoizedProps:null,n=a.children,Jc(i,a)?n=null:null!==s&&Jc(i,s)&&(t.flags|=32),null!==t.memoizedState&&(i=ua(e,t,ma,null,null,r),Ou._currentValue=i),Qo(e,t),Wo(e,t,n,r),t.child;case 6:return null===e&&Xn&&((e=r=Yn)&&(null!==(r=function(e,t,r){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!r)return null;if(null===(e=su(e.nextSibling)))return null}return e}(r,t.pendingProps,Jn))?(t.stateNode=r,Gn=t,Yn=null,e=!0):e=!1),e||ei(t)),null;case 13:return as(e,t,r);case 4:return Z(t,t.stateNode.containerInfo),n=t.pendingProps,null===e?t.child=wi(t,null,n,r):Wo(e,t,n,r),t.child;case 11:return qo(e,t,t.type,t.pendingProps,r);case 7:return Wo(e,t,t.pendingProps,r),t.child;case 8:case 12:return Wo(e,t,t.pendingProps.children,r),t.child;case 10:return n=t.pendingProps,xs(t,t.type,n.value),Wo(e,t,n.children,r),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,ks(t),n=n(i=Cs(i)),t.flags|=1,Wo(e,t,n,r),t.child;case 14:return Ko(e,t,t.type,t.pendingProps,r);case 15:return Go(e,t,t.type,t.pendingProps,r);case 19:return us(e,t,r);case 22:return Yo(e,t,r);case 24:return ks(t),n=Cs(Di),null===e?(null===(i=Yi())&&(i=td,a=Vi(),i.pooledCache=a,a.refCount++,null!==a&&(i.pooledCacheLanes|=r),i=a),t.memoizedState={parent:n,cache:i},Ps(t),xs(t,Di,i)):(0!==(e.lanes&r)&&(As(e,t),Ns(t,null,null,r),Os()),i=e.memoizedState,a=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=i),xs(t,Di,n)):(n=a.cache,xs(t,Di,n),n!==i.cache&&ws(t,[Di],r,!0))),Wo(e,t,t.pendingProps.children,r),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}var fs=q(null),gs=null,vs=null;function xs(e,t,r){G(fs,t._currentValue),t._currentValue=r}function ys(e){e._currentValue=fs.current,K(fs)}function bs(e,t,r){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==n&&(n.childLanes|=t)):null!==n&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function ws(e,t,r,n){var i=e.child;for(null!==i&&(i.return=e);null!==i;){var a=i.dependencies;if(null!==a){var s=i.child;a=a.firstContext;e:for(;null!==a;){var l=a;a=i;for(var d=0;d<t.length;d++)if(l.context===t[d]){a.lanes|=r,null!==(l=a.alternate)&&(l.lanes|=r),bs(a.return,r,e),n||(s=null);break e}a=l.next}}else if(18===i.tag){if(null===(s=i.return))throw Error(o(341));s.lanes|=r,null!==(a=s.alternate)&&(a.lanes|=r),bs(s,r,e),s=null}else s=i.child;if(null!==s)s.return=i;else for(s=i;null!==s;){if(s===e){s=null;break}if(null!==(i=s.sibling)){i.return=s.return,s=i;break}s=s.return}i=s}}function js(e,t,r,n){e=null;for(var i=t,a=!1;null!==i;){if(!a)if(0!==(524288&i.flags))a=!0;else if(0!==(262144&i.flags))break;if(10===i.tag){var s=i.alternate;if(null===s)throw Error(o(387));if(null!==(s=s.memoizedProps)){var l=i.type;Kr(i.pendingProps.value,s.value)||(null!==e?e.push(l):e=[l])}}else if(i===J.current){if(null===(s=i.alternate))throw Error(o(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(null!==e?e.push(Ou):e=[Ou])}i=i.return}null!==e&&ws(t,e,r,n),t.flags|=262144}function Ss(e){for(e=e.firstContext;null!==e;){if(!Kr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ks(e){gs=e,vs=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Cs(e){return Es(gs,e)}function Ts(e,t){return null===gs&&ks(e),Es(e,t)}function Es(e,t){var r=t._currentValue;if(t={context:t,memoizedValue:r,next:null},null===vs){if(null===e)throw Error(o(308));vs=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else vs=vs.next=t;return r}var $s=!1;function Ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function As(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Is(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function zs(e,t,r){var n=e.updateQueue;if(null===n)return null;if(n=n.shared,0!==(2&ed)){var i=n.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=In(e),An(e,null,r),t}return En(e,n,t,r),In(e)}function Ms(e,t,r){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194176&r))){var n=t.lanes;r|=n&=e.pendingLanes,t.lanes=r,Fe(e,r)}}function Fs(e,t){var r=e.updateQueue,n=e.alternate;if(null!==n&&r===(n=n.updateQueue)){var i=null,a=null;if(null!==(r=r.firstBaseUpdate)){do{var o={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};null===a?i=a=o:a=a.next=o,r=r.next}while(null!==r);null===a?i=a=t:a=a.next=t}else i=a=t;return r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:n.shared,callbacks:n.callbacks},void(e.updateQueue=r)}null===(e=r.lastBaseUpdate)?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}var Rs=!1;function Os(){if(Rs){if(null!==Wi)throw Wi}}function Ns(e,t,r,n){Rs=!1;var i=e.updateQueue;$s=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,d=l.next;l.next=null,null===o?a=d:o.next=d,o=l;var c=e.alternate;null!==c&&((s=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===s?c.firstBaseUpdate=d:s.next=d,c.lastBaseUpdate=l))}if(null!==a){var u=i.baseState;for(o=0,c=d=l=null,s=a;;){var h=-536870913&s.lane,p=h!==s.lane;if(p?(nd&h)===h:(n&h)===h){0!==h&&h===Hi&&(Rs=!0),null!==c&&(c=c.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var m=e,f=s;h=t;var g=r;switch(f.tag){case 1:if("function"===typeof(m=f.payload)){u=m.call(g,u,h);break e}u=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(h="function"===typeof(m=f.payload)?m.call(g,u,h):m)||void 0===h)break e;u=I({},u,h);break e;case 2:$s=!0}}null!==(h=s.callback)&&(e.flags|=64,p&&(e.flags|=8192),null===(p=i.callbacks)?i.callbacks=[h]:p.push(h))}else p={lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===c?(d=c=p,l=u):c=c.next=p,o|=h;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(p=s).next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}null===c&&(l=u),i.baseState=l,i.firstBaseUpdate=d,i.lastBaseUpdate=c,null===a&&(i.shared.lanes=0),ud|=o,e.lanes=o,e.memoizedState=u}}function Ls(e,t){if("function"!==typeof e)throw Error(o(191,e));e.call(t)}function Ds(e,t){var r=e.callbacks;if(null!==r)for(e.callbacks=null,e=0;e<r.length;e++)Ls(r[e],t)}function Vs(e,t){try{var r=t.updateQueue,n=null!==r?r.lastEffect:null;if(null!==n){var i=n.next;r=i;do{if((r.tag&e)===e){n=void 0;var a=r.create,o=r.inst;n=a(),o.destroy=n}r=r.next}while(r!==i)}}catch(s){nc(t,t.return,s)}}function _s(e,t,r){try{var n=t.updateQueue,i=null!==n?n.lastEffect:null;if(null!==i){var a=i.next;n=a;do{if((n.tag&e)===e){var o=n.inst,s=o.destroy;if(void 0!==s){o.destroy=void 0,i=t;var l=r;try{s()}catch(d){nc(i,l,d)}}}n=n.next}while(n!==a)}}catch(d){nc(t,t.return,d)}}function Bs(e){var t=e.updateQueue;if(null!==t){var r=e.stateNode;try{Ds(t,r)}catch(n){nc(e,e.return,n)}}}function Us(e,t,r){r.props=Mo(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(n){nc(e,t,n)}}function Hs(e,t){try{var r=e.ref;if(null!==r){var n=e.stateNode;switch(e.tag){case 26:case 27:case 5:var i=n;break;default:i=n}"function"===typeof r?e.refCleanup=r(i):r.current=i}}catch(a){nc(e,t,a)}}function Ws(e,t){var r=e.ref,n=e.refCleanup;if(null!==r)if("function"===typeof n)try{n()}catch(i){nc(e,t,i)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof r)try{r(null)}catch(a){nc(e,t,a)}else r.current=null}function qs(e){var t=e.type,r=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":r.autoFocus&&n.focus();break e;case"img":r.src?n.src=r.src:r.srcSet&&(n.srcset=r.srcSet)}}catch(i){nc(e,e.return,i)}}function Ks(e,t,r){try{var n=e.stateNode;!function(e,t,r,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,a=null,s=null,l=null,d=null,c=null,u=null;for(m in r){var h=r[m];if(r.hasOwnProperty(m)&&null!=h)switch(m){case"checked":case"value":break;case"defaultValue":d=h;default:n.hasOwnProperty(m)||Hc(e,t,m,null,n,h)}}for(var p in n){var m=n[p];if(h=r[p],n.hasOwnProperty(p)&&(null!=m||null!=h))switch(p){case"type":a=m;break;case"name":i=m;break;case"checked":c=m;break;case"defaultChecked":u=m;break;case"value":s=m;break;case"defaultValue":l=m;break;case"children":case"dangerouslySetInnerHTML":if(null!=m)throw Error(o(137,t));break;default:m!==h&&Hc(e,t,p,m,n,h)}}return void gt(e,s,l,d,c,u,a,i);case"select":for(a in m=s=l=p=null,r)if(d=r[a],r.hasOwnProperty(a)&&null!=d)switch(a){case"value":break;case"multiple":m=d;default:n.hasOwnProperty(a)||Hc(e,t,a,null,n,d)}for(i in n)if(a=n[i],d=r[i],n.hasOwnProperty(i)&&(null!=a||null!=d))switch(i){case"value":p=a;break;case"defaultValue":l=a;break;case"multiple":s=a;default:a!==d&&Hc(e,t,i,a,n,d)}return t=l,r=s,n=m,void(null!=p?yt(e,!!r,p,!1):!!n!==!!r&&(null!=t?yt(e,!!r,t,!0):yt(e,!!r,r?[]:"",!1)));case"textarea":for(l in m=p=null,r)if(i=r[l],r.hasOwnProperty(l)&&null!=i&&!n.hasOwnProperty(l))switch(l){case"value":case"children":break;default:Hc(e,t,l,null,n,i)}for(s in n)if(i=n[s],a=r[s],n.hasOwnProperty(s)&&(null!=i||null!=a))switch(s){case"value":p=i;break;case"defaultValue":m=i;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=i)throw Error(o(91));break;default:i!==a&&Hc(e,t,s,i,n,a)}return void bt(e,p,m);case"option":for(var f in r)if(p=r[f],r.hasOwnProperty(f)&&null!=p&&!n.hasOwnProperty(f))if("selected"===f)e.selected=!1;else Hc(e,t,f,null,n,p);for(d in n)if(p=n[d],m=r[d],n.hasOwnProperty(d)&&p!==m&&(null!=p||null!=m))if("selected"===d)e.selected=p&&"function"!==typeof p&&"symbol"!==typeof p;else Hc(e,t,d,p,n,m);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in r)p=r[g],r.hasOwnProperty(g)&&null!=p&&!n.hasOwnProperty(g)&&Hc(e,t,g,null,n,p);for(c in n)if(p=n[c],m=r[c],n.hasOwnProperty(c)&&p!==m&&(null!=p||null!=m))switch(c){case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(o(137,t));break;default:Hc(e,t,c,p,n,m)}return;default:if(Tt(t)){for(var v in r)p=r[v],r.hasOwnProperty(v)&&void 0!==p&&!n.hasOwnProperty(v)&&Wc(e,t,v,void 0,n,p);for(u in n)p=n[u],m=r[u],!n.hasOwnProperty(u)||p===m||void 0===p&&void 0===m||Wc(e,t,u,p,n,m);return}}for(var x in r)p=r[x],r.hasOwnProperty(x)&&null!=p&&!n.hasOwnProperty(x)&&Hc(e,t,x,null,n,p);for(h in n)p=n[h],m=r[h],!n.hasOwnProperty(h)||p===m||null==p&&null==m||Hc(e,t,h,p,n,m)}(n,e.type,r,t),n[De]=t}catch(i){nc(e,e.return,i)}}function Gs(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag||4===e.tag}function Ys(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||Gs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&27!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function Xs(e,t,r){var n=e.tag;if(5===n||6===n)e=e.stateNode,t?8===r.nodeType?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(8===r.nodeType?(t=r.parentNode).insertBefore(e,r):(t=r).appendChild(e),null!==(r=r._reactRootContainer)&&void 0!==r||null!==t.onclick||(t.onclick=Uc));else if(4!==n&&27!==n&&null!==(e=e.child))for(Xs(e,t,r),e=e.sibling;null!==e;)Xs(e,t,r),e=e.sibling}function Qs(e,t,r){var n=e.tag;if(5===n||6===n)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(4!==n&&27!==n&&null!==(e=e.child))for(Qs(e,t,r),e=e.sibling;null!==e;)Qs(e,t,r),e=e.sibling}var Js=!1,Zs=!1,el=!1,tl="function"===typeof WeakSet?WeakSet:Set,rl=null,nl=!1;function il(e,t,r){var n=r.flags;switch(r.tag){case 0:case 11:case 15:vl(e,r),4&n&&Vs(5,r);break;case 1:if(vl(e,r),4&n)if(e=r.stateNode,null===t)try{e.componentDidMount()}catch(s){nc(r,r.return,s)}else{var i=Mo(r.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){nc(r,r.return,l)}}64&n&&Bs(r),512&n&&Hs(r,r.return);break;case 3:if(vl(e,r),64&n&&null!==(n=r.updateQueue)){if(e=null,null!==r.child)switch(r.child.tag){case 27:case 5:case 1:e=r.child.stateNode}try{Ds(n,e)}catch(s){nc(r,r.return,s)}}break;case 26:vl(e,r),512&n&&Hs(r,r.return);break;case 27:case 5:vl(e,r),null===t&&4&n&&qs(r),512&n&&Hs(r,r.return);break;case 12:default:vl(e,r);break;case 13:vl(e,r),4&n&&cl(e,r);break;case 22:if(!(i=null!==r.memoizedState||Js)){t=null!==t&&null!==t.memoizedState||Zs;var a=Js,o=Zs;Js=i,(Zs=t)&&!o?yl(e,r,0!==(8772&r.subtreeFlags)):vl(e,r),Js=a,Zs=o}512&n&&("manual"===r.memoizedProps.mode?Hs(r,r.return):Ws(r,r.return))}}function al(e){var t=e.alternate;null!==t&&(e.alternate=null,al(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&qe(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ol=null,sl=!1;function ll(e,t,r){for(r=r.child;null!==r;)dl(e,t,r),r=r.sibling}function dl(e,t,r){if(xe&&"function"===typeof xe.onCommitFiberUnmount)try{xe.onCommitFiberUnmount(ve,r)}catch(o){}switch(r.tag){case 26:Zs||Ws(r,t),ll(e,t,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode).parentNode.removeChild(r);break;case 27:Zs||Ws(r,t);var n=ol,i=sl;for(ol=r.stateNode,ll(e,t,r),t=(r=r.stateNode).attributes;t.length;)r.removeAttributeNode(t[0]);qe(r),ol=n,sl=i;break;case 5:Zs||Ws(r,t);case 6:i=ol;var a=sl;if(ol=null,ll(e,t,r),sl=a,null!==(ol=i))if(sl)try{e=ol,n=r.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)}catch(s){nc(r,t,s)}else try{ol.removeChild(r.stateNode)}catch(s){nc(r,t,s)}break;case 18:null!==ol&&(sl?(t=ol,r=r.stateNode,8===t.nodeType?au(t.parentNode,r):1===t.nodeType&&au(t,r),fh(t)):au(ol,r.stateNode));break;case 4:n=ol,i=sl,ol=r.stateNode.containerInfo,sl=!0,ll(e,t,r),ol=n,sl=i;break;case 0:case 11:case 14:case 15:Zs||_s(2,r,t),Zs||_s(4,r,t),ll(e,t,r);break;case 1:Zs||(Ws(r,t),"function"===typeof(n=r.stateNode).componentWillUnmount&&Us(r,t,n)),ll(e,t,r);break;case 21:ll(e,t,r);break;case 22:Zs||Ws(r,t),Zs=(n=Zs)||null!==r.memoizedState,ll(e,t,r),Zs=n;break;default:ll(e,t,r)}}function cl(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{fh(e)}catch(r){nc(t,t.return,r)}}function ul(e,t){var r=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new tl),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new tl),t;default:throw Error(o(435,e.tag))}}(e);t.forEach((function(t){var n=lc.bind(null,e,t);r.has(t)||(r.add(t),t.then(n,n))}))}function hl(e,t){var r=t.deletions;if(null!==r)for(var n=0;n<r.length;n++){var i=r[n],a=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 27:case 5:ol=l.stateNode,sl=!1;break e;case 3:case 4:ol=l.stateNode.containerInfo,sl=!0;break e}l=l.return}if(null===ol)throw Error(o(160));dl(a,s,i),ol=null,sl=!1,null!==(a=i.alternate)&&(a.return=null),i.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)ml(t,e),t=t.sibling}var pl=null;function ml(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),fl(e),4&n&&(_s(3,e,e.return),Vs(3,e),_s(5,e,e.return));break;case 1:hl(t,e),fl(e),512&n&&(Zs||null===r||Ws(r,r.return)),64&n&&Js&&(null!==(e=e.updateQueue)&&(null!==(n=e.callbacks)&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===r?n:r.concat(n))));break;case 26:var i=pl;if(hl(t,e),fl(e),512&n&&(Zs||null===r||Ws(r,r.return)),4&n){var a=null!==r?r.memoizedState:null;if(n=e.memoizedState,null===r)if(null===n)if(null===e.stateNode){e:{n=e.type,r=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":(!(a=i.getElementsByTagName("title")[0])||a[We]||a[Le]||"http://www.w3.org/2000/svg"===a.namespaceURI||a.hasAttribute("itemprop"))&&(a=i.createElement(n),i.head.insertBefore(a,i.querySelector("head > title"))),qc(a,n,r),a[Le]=e,Qe(a),n=a;break e;case"link":var s=Eu("link","href",i).get(n+(r.href||""));if(s)for(var l=0;l<s.length;l++)if((a=s[l]).getAttribute("href")===(null==r.href?null:r.href)&&a.getAttribute("rel")===(null==r.rel?null:r.rel)&&a.getAttribute("title")===(null==r.title?null:r.title)&&a.getAttribute("crossorigin")===(null==r.crossOrigin?null:r.crossOrigin)){s.splice(l,1);break t}qc(a=i.createElement(n),n,r),i.head.appendChild(a);break;case"meta":if(s=Eu("meta","content",i).get(n+(r.content||"")))for(l=0;l<s.length;l++)if((a=s[l]).getAttribute("content")===(null==r.content?null:""+r.content)&&a.getAttribute("name")===(null==r.name?null:r.name)&&a.getAttribute("property")===(null==r.property?null:r.property)&&a.getAttribute("http-equiv")===(null==r.httpEquiv?null:r.httpEquiv)&&a.getAttribute("charset")===(null==r.charSet?null:r.charSet)){s.splice(l,1);break t}qc(a=i.createElement(n),n,r),i.head.appendChild(a);break;default:throw Error(o(468,n))}a[Le]=e,Qe(a),n=a}e.stateNode=n}else $u(i,e.type,e.stateNode);else e.stateNode=ju(i,n,e.memoizedProps);else a!==n?(null===a?null!==r.stateNode&&(r=r.stateNode).parentNode.removeChild(r):a.count--,null===n?$u(i,e.type,e.stateNode):ju(i,n,e.memoizedProps)):null===n&&null!==e.stateNode&&Ks(e,e.memoizedProps,r.memoizedProps)}break;case 27:if(4&n&&null===e.alternate){i=e.stateNode,a=e.memoizedProps;try{for(var d=i.firstChild;d;){var c=d.nextSibling,u=d.nodeName;d[We]||"HEAD"===u||"BODY"===u||"SCRIPT"===u||"STYLE"===u||"LINK"===u&&"stylesheet"===d.rel.toLowerCase()||i.removeChild(d),d=c}for(var h=e.type,p=i.attributes;p.length;)i.removeAttributeNode(p[0]);qc(i,h,a),i[Le]=e,i[De]=a}catch(f){nc(e,e.return,f)}}case 5:if(hl(t,e),fl(e),512&n&&(Zs||null===r||Ws(r,r.return)),32&e.flags){i=e.stateNode;try{jt(i,"")}catch(f){nc(e,e.return,f)}}4&n&&null!=e.stateNode&&Ks(e,i=e.memoizedProps,null!==r?r.memoizedProps:i),1024&n&&(el=!0);break;case 6:if(hl(t,e),fl(e),4&n){if(null===e.stateNode)throw Error(o(162));n=e.memoizedProps,r=e.stateNode;try{r.nodeValue=n}catch(f){nc(e,e.return,f)}}break;case 3:if(Tu=null,i=pl,pl=hu(t.containerInfo),hl(t,e),pl=i,fl(e),4&n&&null!==r&&r.memoizedState.isDehydrated)try{fh(t.containerInfo)}catch(f){nc(e,e.return,f)}el&&(el=!1,gl(e));break;case 4:n=pl,pl=hu(e.stateNode.containerInfo),hl(t,e),fl(e),pl=n;break;case 12:hl(t,e),fl(e);break;case 13:hl(t,e),fl(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==r&&null!==r.memoizedState)&&(yd=le()),4&n&&(null!==(n=e.updateQueue)&&(e.updateQueue=null,ul(e,n)));break;case 22:if(512&n&&(Zs||null===r||Ws(r,r.return)),d=null!==e.memoizedState,c=null!==r&&null!==r.memoizedState,Js=(u=Js)||d,Zs=(h=Zs)||c,hl(t,e),Zs=h,Js=u,fl(e),(t=e.stateNode)._current=e,t._visibility&=-3,t._visibility|=2&t._pendingVisibility,8192&n&&(t._visibility=d?-2&t._visibility:1|t._visibility,d&&(t=Js||Zs,null===r||c||t||xl(e)),null===e.memoizedProps||"manual"!==e.memoizedProps.mode))e:for(r=null,t=e;;){if(5===t.tag||26===t.tag||27===t.tag){if(null===r){c=r=t;try{if(i=c.stateNode,d)"function"===typeof(a=i.style).setProperty?a.setProperty("display","none","important"):a.display="none";else{s=c.stateNode;var m=void 0!==(l=c.memoizedProps.style)&&null!==l&&l.hasOwnProperty("display")?l.display:null;s.style.display=null==m||"boolean"===typeof m?"":(""+m).trim()}}catch(f){nc(c,c.return,f)}}}else if(6===t.tag){if(null===r){c=t;try{c.stateNode.nodeValue=d?"":c.memoizedProps}catch(f){nc(c,c.return,f)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;r===t&&(r=null),t=t.return}r===t&&(r=null),t.sibling.return=t.return,t=t.sibling}4&n&&(null!==(n=e.updateQueue)&&(null!==(r=n.retryQueue)&&(n.retryQueue=null,ul(e,r))));break;case 19:hl(t,e),fl(e),4&n&&(null!==(n=e.updateQueue)&&(e.updateQueue=null,ul(e,n)));break;case 21:break;default:hl(t,e),fl(e)}}function fl(e){var t=e.flags;if(2&t){try{if(27!==e.tag){e:{for(var r=e.return;null!==r;){if(Gs(r)){var n=r;break e}r=r.return}throw Error(o(160))}switch(n.tag){case 27:var i=n.stateNode;Qs(e,Ys(e),i);break;case 5:var a=n.stateNode;32&n.flags&&(jt(a,""),n.flags&=-33),Qs(e,Ys(e),a);break;case 3:case 4:var s=n.stateNode.containerInfo;Xs(e,Ys(e),s);break;default:throw Error(o(161))}}}catch(l){nc(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function gl(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;gl(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function vl(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)il(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:_s(4,t,t.return),xl(t);break;case 1:Ws(t,t.return);var r=t.stateNode;"function"===typeof r.componentWillUnmount&&Us(t,t.return,r),xl(t);break;case 26:case 27:case 5:Ws(t,t.return),xl(t);break;case 22:Ws(t,t.return),null===t.memoizedState&&xl(t);break;default:xl(t)}e=e.sibling}}function yl(e,t,r){for(r=r&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var n=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:yl(i,a,r),Vs(4,a);break;case 1:if(yl(i,a,r),"function"===typeof(i=(n=a).stateNode).componentDidMount)try{i.componentDidMount()}catch(d){nc(n,n.return,d)}if(null!==(i=(n=a).updateQueue)){var s=n.stateNode;try{var l=i.shared.hiddenCallbacks;if(null!==l)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)Ls(l[i],s)}catch(d){nc(n,n.return,d)}}r&&64&o&&Bs(a),Hs(a,a.return);break;case 26:case 27:case 5:yl(i,a,r),r&&null===n&&4&o&&qs(a),Hs(a,a.return);break;case 12:default:yl(i,a,r);break;case 13:yl(i,a,r),r&&4&o&&cl(i,a);break;case 22:null===a.memoizedState&&yl(i,a,r),Hs(a,a.return)}t=t.sibling}}function bl(e,t){var r=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(r=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==r&&(null!=e&&e.refCount++,null!=r&&_i(r))}function wl(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&_i(e))}function jl(e,t,r,n){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)Sl(e,t,r,n),t=t.sibling}function Sl(e,t,r,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:jl(e,t,r,n),2048&i&&Vs(9,t);break;case 3:jl(e,t,r,n),2048&i&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&_i(e)));break;case 12:if(2048&i){jl(e,t,r,n),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;"function"===typeof s&&s(o,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(l){nc(t,t.return,l)}}else jl(e,t,r,n);break;case 23:break;case 22:a=t.stateNode,null!==t.memoizedState?4&a._visibility?jl(e,t,r,n):Cl(e,t):4&a._visibility?jl(e,t,r,n):(a._visibility|=4,kl(e,t,r,n,0!==(10256&t.subtreeFlags))),2048&i&&bl(t.alternate,t);break;case 24:jl(e,t,r,n),2048&i&&wl(t.alternate,t);break;default:jl(e,t,r,n)}}function kl(e,t,r,n,i){for(i=i&&0!==(10256&t.subtreeFlags),t=t.child;null!==t;){var a=e,o=t,s=r,l=n,d=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,l,i),Vs(8,o);break;case 23:break;case 22:var c=o.stateNode;null!==o.memoizedState?4&c._visibility?kl(a,o,s,l,i):Cl(a,o):(c._visibility|=4,kl(a,o,s,l,i)),i&&2048&d&&bl(o.alternate,o);break;case 24:kl(a,o,s,l,i),i&&2048&d&&wl(o.alternate,o);break;default:kl(a,o,s,l,i)}t=t.sibling}}function Cl(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var r=e,n=t,i=n.flags;switch(n.tag){case 22:Cl(r,n),2048&i&&bl(n.alternate,n);break;case 24:Cl(r,n),2048&i&&wl(n.alternate,n);break;default:Cl(r,n)}t=t.sibling}}var Tl=8192;function El(e){if(e.subtreeFlags&Tl)for(e=e.child;null!==e;)$l(e),e=e.sibling}function $l(e){switch(e.tag){case 26:El(e),e.flags&Tl&&null!==e.memoizedState&&function(e,t,r){if(null===Au)throw Error(o(475));var n=Au;if("stylesheet"===t.type&&("string"!==typeof r.media||!1!==matchMedia(r.media).matches)&&0===(4&t.state.loading)){if(null===t.instance){var i=vu(r.href),a=e.querySelector(xu(i));if(a)return null!==(e=a._p)&&"object"===typeof e&&"function"===typeof e.then&&(n.count++,n=zu.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=a,void Qe(a);a=e.ownerDocument||e,r=yu(r),(i=cu.get(i))&&ku(r,i),Qe(a=a.createElement("link"));var s=a;s._p=new Promise((function(e,t){s.onload=e,s.onerror=t})),qc(a,"link",r),t.instance=a}null===n.stylesheets&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&0===(3&t.state.loading)&&(n.count++,t=zu.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}(pl,e.memoizedState,e.memoizedProps);break;case 5:default:El(e);break;case 3:case 4:var t=pl;pl=hu(e.stateNode.containerInfo),El(e),pl=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=Tl,Tl=16777216,El(e),Tl=t):El(e))}}function Pl(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function Al(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var r=0;r<t.length;r++){var n=t[r];rl=n,Ml(n,e)}Pl(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Al(e),2048&e.flags&&_s(9,e,e.return);break;case 3:case 12:default:Al(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&4&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-5,zl(e)):Al(e)}}function zl(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var r=0;r<t.length;r++){var n=t[r];rl=n,Ml(n,e)}Pl(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:_s(8,t,t.return),zl(t);break;case 22:4&(r=t.stateNode)._visibility&&(r._visibility&=-5,zl(t));break;default:zl(t)}e=e.sibling}}function Ml(e,t){for(;null!==rl;){var r=rl;switch(r.tag){case 0:case 11:case 15:_s(8,r,t);break;case 23:case 22:if(null!==r.memoizedState&&null!==r.memoizedState.cachePool){var n=r.memoizedState.cachePool.pool;null!=n&&n.refCount++}break;case 24:_i(r.memoizedState.cache)}if(null!==(n=r.child))n.return=r,rl=n;else e:for(r=e;null!==rl;){var i=(n=rl).sibling,a=n.return;if(al(n),n===r){rl=null;break e}if(null!==i){i.return=a,rl=i;break e}rl=a}}}function Fl(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rl(e,t,r,n){return new Fl(e,t,r,n)}function Ol(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Nl(e,t){var r=e.alternate;return null===r?((r=Rl(e.tag,t,e.key,e.mode)).elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=31457280&e.flags,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function Ll(e,t){e.flags&=31457282;var r=e.alternate;return null===r?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,t=r.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Dl(e,t,r,n,i,a){var s=0;if(n=e,"function"===typeof e)Ol(e)&&(s=1);else if("string"===typeof e)s=function(e,t,r){if(1===r||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,r,Y.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case u:return Vl(r.children,i,a,t);case h:s=8,i|=24;break;case p:return(e=Rl(12,r,t,2|i)).elementType=p,e.lanes=a,e;case x:return(e=Rl(13,r,t,i)).elementType=x,e.lanes=a,e;case y:return(e=Rl(19,r,t,i)).elementType=y,e.lanes=a,e;case j:return _l(r,i,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case m:case g:s=10;break e;case f:s=9;break e;case v:s=11;break e;case b:s=14;break e;case w:s=16,n=null;break e}s=29,r=Error(o(130,null===e?"null":typeof e,"")),n=null}return(t=Rl(s,r,t,i)).elementType=e,t.type=n,t.lanes=a,t}function Vl(e,t,r,n){return(e=Rl(7,e,n,t)).lanes=r,e}function _l(e,t,r,n){(e=Rl(22,e,n,t)).elementType=j,e.lanes=r;var i={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var e=i._current;if(null===e)throw Error(o(456));if(0===(2&i._pendingVisibility)){var t=Pn(e,2);null!==t&&(i._pendingVisibility|=2,zd(t,e,2))}},attach:function(){var e=i._current;if(null===e)throw Error(o(456));if(0!==(2&i._pendingVisibility)){var t=Pn(e,2);null!==t&&(i._pendingVisibility&=-3,zd(t,e,2))}}};return e.stateNode=i,e}function Bl(e,t,r){return(e=Rl(6,e,null,t)).lanes=r,e}function Ul(e,t,r){return(t=Rl(4,null!==e.children?e.children:[],e.key,t)).lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Hl(e){e.flags|=4}function Wl(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!Pu(t)){if(null!==(t=$i.current)&&((4194176&nd)===nd?null!==Pi:(62914560&nd)!==nd&&0===(536870912&nd)||t!==Pi))throw hi=li,si;e.flags|=8192}}function ql(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Ae():536870912,e.lanes|=t,fd|=t)}function Kl(e,t){if(!Xn)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;null!==t;)null!==t.alternate&&(r=t),t=t.sibling;null===r?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;null!==r;)null!==r.alternate&&(n=r),r=r.sibling;null===n?t||null===e.tail?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Gl(e){var t=null!==e.alternate&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;null!==i;)r|=i.lanes|i.childLanes,n|=31457280&i.subtreeFlags,n|=31457280&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Yl(e,t,r){var n=t.pendingProps;switch(Kn(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return Gl(t),null;case 3:return r=t.stateNode,n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ys(Di),ee(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(ni(t)?Hl(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==Qn&&(Fd(Qn),Qn=null))),Gl(t),null;case 26:return r=t.memoizedState,null===e?(Hl(t),null!==r?(Gl(t),Wl(t,r)):(Gl(t),t.flags&=-16777217)):r?r!==e.memoizedState?(Hl(t),Gl(t),Wl(t,r)):(Gl(t),t.flags&=-16777217):(e.memoizedProps!==n&&Hl(t),Gl(t),t.flags&=-16777217),null;case 27:re(t),r=Q.current;var i=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==n&&Hl(t);else{if(!n){if(null===t.stateNode)throw Error(o(166));return Gl(t),null}e=Y.current,ni(t)?ti(t):(e=du(i,n,r),t.stateNode=e,Hl(t))}return Gl(t),null;case 5:if(re(t),r=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==n&&Hl(t);else{if(!n){if(null===t.stateNode)throw Error(o(166));return Gl(t),null}if(e=Y.current,ni(t))ti(t);else{switch(i=Yc(Q.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":(e=i.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"===typeof n.is?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e="string"===typeof n.is?i.createElement(r,{is:n.is}):i.createElement(r)}}e[Le]=t,e[De]=n;e:for(i=t.child;null!==i;){if(5===i.tag||6===i.tag)e.appendChild(i.stateNode);else if(4!==i.tag&&27!==i.tag&&null!==i.child){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;null===i.sibling;){if(null===i.return||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(qc(e,r,n),r){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Hl(t)}}return Gl(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==n&&Hl(t);else{if("string"!==typeof n&&null===t.stateNode)throw Error(o(166));if(e=Q.current,ni(t)){if(e=t.stateNode,r=t.memoizedProps,n=null,null!==(i=Gn))switch(i.tag){case 27:case 5:n=i.memoizedProps}e[Le]=t,(e=!!(e.nodeValue===r||null!==n&&!0===n.suppressHydrationWarning||Bc(e.nodeValue,r)))||ei(t)}else(e=Yc(e).createTextNode(n))[Le]=t,t.stateNode=e}return Gl(t),null;case 13:if(n=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(i=ni(t),null!==n&&null!==n.dehydrated){if(null===e){if(!i)throw Error(o(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(o(317));i[Le]=t}else ii(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Gl(t),i=!1}else null!==Qn&&(Fd(Qn),Qn=null),i=!0;if(!i)return 256&t.flags?(Mi(t),t):(Mi(t),null)}if(Mi(t),0!==(128&t.flags))return t.lanes=r,t;if(r=null!==n,e=null!==e&&null!==e.memoizedState,r){i=null,null!==(n=t.child).alternate&&null!==n.alternate.memoizedState&&null!==n.alternate.memoizedState.cachePool&&(i=n.alternate.memoizedState.cachePool.pool);var a=null;null!==n.memoizedState&&null!==n.memoizedState.cachePool&&(a=n.memoizedState.cachePool.pool),a!==i&&(n.flags|=2048)}return r!==e&&r&&(t.child.flags|=8192),ql(t,t.updateQueue),Gl(t),null;case 4:return ee(),null===e&&zc(t.stateNode.containerInfo),Gl(t),null;case 10:return ys(t.type),Gl(t),null;case 19:if(K(Fi),null===(i=t.memoizedState))return Gl(t),null;if(n=0!==(128&t.flags),null===(a=i.rendering))if(n)Kl(i,!1);else{if(0!==cd||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(a=Ri(e))){for(t.flags|=128,Kl(i,!1),e=a.updateQueue,t.updateQueue=e,ql(t,e),t.subtreeFlags=0,e=r,r=t.child;null!==r;)Ll(r,e),r=r.sibling;return G(Fi,1&Fi.current|2),t.child}e=e.sibling}null!==i.tail&&le()>bd&&(t.flags|=128,n=!0,Kl(i,!1),t.lanes=4194304)}else{if(!n)if(null!==(e=Ri(a))){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,ql(t,e),Kl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!a.alternate&&!Xn)return Gl(t),null}else 2*le()-i.renderingStartTime>bd&&536870912!==r&&(t.flags|=128,n=!0,Kl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(null!==(e=i.last)?e.sibling=a:t.child=a,i.last=a)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=le(),t.sibling=null,e=Fi.current,G(Fi,n?1&e|2:1&e),t):(Gl(t),null);case 22:case 23:return Mi(t),Ei(),n=null!==t.memoizedState,null!==e?null!==e.memoizedState!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?0!==(536870912&r)&&0===(128&t.flags)&&(Gl(t),6&t.subtreeFlags&&(t.flags|=8192)):Gl(t),null!==(r=t.updateQueue)&&ql(t,r.retryQueue),r=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(r=e.memoizedState.cachePool.pool),n=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(n=t.memoizedState.cachePool.pool),n!==r&&(t.flags|=2048),null!==e&&K(Gi),null;case 24:return r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ys(Di),Gl(t),null;case 25:return null}throw Error(o(156,t.tag))}function Xl(e,t){switch(Kn(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return ys(Di),ee(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return re(t),null;case 13:if(Mi(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));ii()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return K(Fi),null;case 4:return ee(),null;case 10:return ys(t.type),null;case 22:case 23:return Mi(t),Ei(),null!==e&&K(Gi),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return ys(Di),null;default:return null}}function Ql(e,t){switch(Kn(t),t.tag){case 3:ys(Di),ee();break;case 26:case 27:case 5:re(t);break;case 4:ee();break;case 13:Mi(t);break;case 19:K(Fi);break;case 10:ys(t.type);break;case 22:case 23:Mi(t),Ei(),null!==e&&K(Gi);break;case 24:ys(Di)}}var Jl={getCacheForType:function(e){var t=Cs(Di),r=t.data.get(e);return void 0===r&&(r=e(),t.data.set(e,r)),r}},Zl="function"===typeof WeakMap?WeakMap:Map,ed=0,td=null,rd=null,nd=0,id=0,ad=null,od=!1,sd=!1,ld=!1,dd=0,cd=0,ud=0,hd=0,pd=0,md=0,fd=0,gd=null,vd=null,xd=!1,yd=0,bd=1/0,wd=null,jd=null,Sd=!1,kd=null,Cd=0,Td=0,Ed=null,$d=0,Pd=null;function Ad(){if(0!==(2&ed)&&0!==nd)return nd&-nd;if(null!==A.T){return 0!==Hi?Hi:wc()}return Oe()}function Id(){0===md&&(md=0===(536870912&nd)||Xn?Pe():536870912);var e=$i.current;return null!==e&&(e.flags|=32),md}function zd(e,t,r){(e===td&&2===id||null!==e.cancelPendingCommit)&&(Vd(e,0),Nd(e,nd,md,!1)),ze(e,r),0!==(2&ed)&&e===td||(e===td&&(0===(2&ed)&&(hd|=r),4===cd&&Nd(e,nd,md,!1)),fc(e))}function Md(e,t,r){if(0!==(6&ed))throw Error(o(327));for(var n=!r&&0===(60&t)&&0===(t&e.expiredLanes)||Ee(e,t),i=n?function(e,t){var r=ed;ed|=2;var n=Bd(),i=Ud();td!==e||nd!==t?(wd=null,bd=le()+500,Vd(e,t)):sd=Ee(e,t);e:for(;;)try{if(0!==id&&null!==rd){t=rd;var a=ad;t:switch(id){case 1:id=0,ad=null,Xd(e,t,a,1);break;case 2:if(di(a)){id=0,ad=null,Yd(t);break}t=function(){2===id&&td===e&&(id=7),fc(e)},a.then(t,t);break e;case 3:id=7;break e;case 4:id=5;break e;case 7:di(a)?(id=0,ad=null,Yd(t)):(id=0,ad=null,Xd(e,t,a,7));break;case 5:var s=null;switch(rd.tag){case 26:s=rd.memoizedState;case 5:case 27:var l=rd;if(!s||Pu(s)){id=0,ad=null;var d=l.sibling;if(null!==d)rd=d;else{var c=l.return;null!==c?(rd=c,Qd(c)):rd=null}break t}}id=0,ad=null,Xd(e,t,a,5);break;case 6:id=0,ad=null,Xd(e,t,a,6);break;case 8:Dd(),cd=6;break e;default:throw Error(o(462))}}Kd();break}catch(u){_d(e,u)}return vs=gs=null,A.H=n,A.A=i,ed=r,null!==rd?0:(td=null,nd=0,Tn(),cd)}(e,t):Wd(e,t,!0),a=n;;){if(0===i){sd&&!n&&Nd(e,t,0,!1);break}if(6===i)Nd(e,t,0,!od);else{if(r=e.current.alternate,a&&!Od(r)){i=Wd(e,t,!1),a=!1;continue}if(2===i){if(a=t,e.errorRecoveryDisabledLanes&a)var s=0;else s=0!==(s=-536870913&e.pendingLanes)?s:536870912&s?536870912:0;if(0!==s){t=s;e:{var l=e;i=gd;var d=l.current.memoizedState.isDehydrated;if(d&&(Vd(l,s).flags|=256),2!==(s=Wd(l,s,!1))){if(ld&&!d){l.errorRecoveryDisabledLanes|=a,hd|=a,i=4;break e}a=vd,vd=i,null!==a&&Fd(a)}i=s}if(a=!1,2!==i)continue}}if(1===i){Vd(e,0),Nd(e,t,0,!0);break}e:{switch(n=e,i){case 0:case 1:throw Error(o(345));case 4:if((4194176&t)===t){Nd(n,t,md,!od);break e}break;case 2:vd=null;break;case 3:case 5:break;default:throw Error(o(329))}if(n.finishedWork=r,n.finishedLanes=t,(62914560&t)===t&&10<(a=yd+300-le())){if(Nd(n,t,md,!od),0!==Te(n,0))break e;n.timeoutHandle=eu(Rd.bind(null,n,r,vd,wd,xd,t,md,hd,fd,od,2,-0,0),a)}else Rd(n,r,vd,wd,xd,t,md,hd,fd,od,0,-0,0)}}break}fc(e)}function Fd(e){null===vd?vd=e:vd.push.apply(vd,e)}function Rd(e,t,r,n,i,a,s,l,d,c,u,h,p){var m=t.subtreeFlags;if((8192&m||16785408===(16785408&m))&&(Au={stylesheets:null,count:0,unsuspend:Iu},$l(t),null!==(t=function(){if(null===Au)throw Error(o(475));var e=Au;return e.stylesheets&&0===e.count&&Fu(e,e.stylesheets),0<e.count?function(t){var r=setTimeout((function(){if(e.stylesheets&&Fu(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}),6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(r)}}:null}())))return e.cancelPendingCommit=t(Zd.bind(null,e,r,n,i,s,l,d,1,h,p)),void Nd(e,a,s,!c);Zd(e,r,n,i,s,l,d,u,h,p)}function Od(e){for(var t=e;;){var r=t.tag;if((0===r||11===r||15===r)&&16384&t.flags&&(null!==(r=t.updateQueue)&&null!==(r=r.stores)))for(var n=0;n<r.length;n++){var i=r[n],a=i.getSnapshot;i=i.value;try{if(!Kr(a(),i))return!1}catch(o){return!1}}if(r=t.child,16384&t.subtreeFlags&&null!==r)r.return=t,t=r;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nd(e,t,r,n){t&=~pd,t&=~hd,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var a=31-be(i),o=1<<a;n[a]=-1,i&=~o}0!==r&&Me(e,r,t)}function Ld(){return 0!==(6&ed)||(gc(0,!1),!1)}function Dd(){if(null!==rd){if(0===id)var e=rd.return;else vs=gs=null,va(e=rd),mi=null,fi=0,e=rd;for(;null!==e;)Ql(e.alternate,e),e=e.return;rd=null}}function Vd(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;-1!==r&&(e.timeoutHandle=-1,tu(r)),null!==(r=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,r()),Dd(),td=e,rd=r=Nl(e.current,null),nd=t,id=0,ad=null,od=!1,sd=Ee(e,t),ld=!1,fd=md=pd=hd=ud=cd=0,vd=gd=null,xd=!1,0!==(8&t)&&(t|=32&t);var n=e.entangledLanes;if(0!==n)for(e=e.entanglements,n&=t;0<n;){var i=31-be(n),a=1<<i;t|=e[i],n&=~a}return dd=t,Tn(),r}function _d(e,t){Zi=null,A.H=Co,t===oi?(t=pi(),id=3):t===si?(t=pi(),id=4):id=t===Uo?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,ad=t,null===rd&&(cd=1,Lo(e,Fn(t,e.current)))}function Bd(){var e=A.H;return A.H=Co,null===e?Co:e}function Ud(){var e=A.A;return A.A=Jl,e}function Hd(){cd=4,od||(4194176&nd)!==nd&&null!==$i.current||(sd=!0),0===(134217727&ud)&&0===(134217727&hd)||null===td||Nd(td,nd,md,!1)}function Wd(e,t,r){var n=ed;ed|=2;var i=Bd(),a=Ud();td===e&&nd===t||(wd=null,Vd(e,t)),t=!1;var o=cd;e:for(;;)try{if(0!==id&&null!==rd){var s=rd,l=ad;switch(id){case 8:Dd(),o=6;break e;case 3:case 2:case 6:null===$i.current&&(t=!0);var d=id;if(id=0,ad=null,Xd(e,s,l,d),r&&sd){o=0;break e}break;default:d=id,id=0,ad=null,Xd(e,s,l,d)}}qd(),o=cd;break}catch(c){_d(e,c)}return t&&e.shellSuspendCounter++,vs=gs=null,ed=n,A.H=i,A.A=a,null===rd&&(td=null,nd=0,Tn()),o}function qd(){for(;null!==rd;)Gd(rd)}function Kd(){for(;null!==rd&&!oe();)Gd(rd)}function Gd(e){var t=ms(e.alternate,e,dd);e.memoizedProps=e.pendingProps,null===t?Qd(e):rd=t}function Yd(e){var t=e,r=t.alternate;switch(t.tag){case 15:case 0:t=Zo(r,t,t.pendingProps,t.type,void 0,nd);break;case 11:t=Zo(r,t,t.pendingProps,t.type.render,t.ref,nd);break;case 5:va(t);default:Ql(r,t),t=ms(r,t=rd=Ll(t,dd),dd)}e.memoizedProps=e.pendingProps,null===t?Qd(e):rd=t}function Xd(e,t,r,n){vs=gs=null,va(t),mi=null,fi=0;var i=t.return;try{if(function(e,t,r,n,i){if(r.flags|=32768,null!==n&&"object"===typeof n&&"function"===typeof n.then){if(null!==(t=r.alternate)&&js(t,r,i,!0),null!==(r=$i.current)){switch(r.tag){case 13:return null===Pi?Hd():null===r.alternate&&0===cd&&(cd=3),r.flags&=-257,r.flags|=65536,r.lanes=i,n===li?r.flags|=16384:(null===(t=r.updateQueue)?r.updateQueue=new Set([n]):t.add(n),ic(e,n,i)),!1;case 22:return r.flags|=65536,n===li?r.flags|=16384:(null===(t=r.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},r.updateQueue=t):null===(r=t.retryQueue)?t.retryQueue=new Set([n]):r.add(n),ic(e,n,i)),!1}throw Error(o(435,r.tag))}return ic(e,n,i),Hd(),!1}if(Xn)return null!==(t=$i.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==Zn&&ai(Fn(e=Error(o(422),{cause:n}),r))):(n!==Zn&&ai(Fn(t=Error(o(423),{cause:n}),r)),(e=e.current.alternate).flags|=65536,i&=-i,e.lanes|=i,n=Fn(n,r),Fs(e,i=Vo(e.stateNode,n,i)),4!==cd&&(cd=2)),!1;var a=Error(o(520),{cause:n});if(a=Fn(a,r),null===gd?gd=[a]:gd.push(a),4!==cd&&(cd=2),null===t)return!0;n=Fn(n,r),r=t;do{switch(r.tag){case 3:return r.flags|=65536,e=i&-i,r.lanes|=e,Fs(r,e=Vo(r.stateNode,n,e)),!1;case 1:if(t=r.type,a=r.stateNode,0===(128&r.flags)&&("function"===typeof t.getDerivedStateFromError||null!==a&&"function"===typeof a.componentDidCatch&&(null===jd||!jd.has(a))))return r.flags|=65536,i&=-i,r.lanes|=i,Bo(i=_o(i),e,r,n),Fs(r,i),!1}r=r.return}while(null!==r);return!1}(e,i,t,r,nd))return cd=1,Lo(e,Fn(r,e.current)),void(rd=null)}catch(a){if(null!==i)throw rd=i,a;return cd=1,Lo(e,Fn(r,e.current)),void(rd=null)}32768&t.flags?(Xn||1===n?e=!0:sd||0!==(536870912&nd)?e=!1:(od=e=!0,(2===n||3===n||6===n)&&(null!==(n=$i.current)&&13===n.tag&&(n.flags|=16384))),Jd(t,e)):Qd(t)}function Qd(e){var t=e;do{if(0!==(32768&t.flags))return void Jd(t,od);e=t.return;var r=Yl(t.alternate,t,dd);if(null!==r)return void(rd=r);if(null!==(t=t.sibling))return void(rd=t);rd=t=e}while(null!==t);0===cd&&(cd=5)}function Jd(e,t){do{var r=Xl(e.alternate,e);if(null!==r)return r.flags&=32767,void(rd=r);if(null!==(r=e.return)&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!t&&null!==(e=e.sibling))return void(rd=e);rd=e=r}while(null!==e);cd=6,rd=null}function Zd(e,t,r,n,i,a,s,l,d,c){var u=A.T,h=B.p;try{B.p=2,A.T=null,function(e,t,r,n,i,a,s,l){do{tc()}while(null!==kd);if(0!==(6&ed))throw Error(o(327));var d=e.finishedWork;if(n=e.finishedLanes,null===d)return null;if(e.finishedWork=null,e.finishedLanes=0,d===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var c=d.lanes|d.childLanes;if(function(e,t,r,n,i,a){var o=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var s=e.entanglements,l=e.expirationTimes,d=e.hiddenUpdates;for(r=o&~r;0<r;){var c=31-be(r),u=1<<c;s[c]=0,l[c]=-1;var h=d[c];if(null!==h)for(d[c]=null,c=0;c<h.length;c++){var p=h[c];null!==p&&(p.lane&=-536870913)}r&=~u}0!==n&&Me(e,n,0),0!==a&&0===i&&0!==e.tag&&(e.suspendedLanes|=a&~(o&~t))}(e,n,c|=Cn,a,s,l),e===td&&(rd=td=null,nd=0),0===(10256&d.subtreeFlags)&&0===(10256&d.flags)||Sd||(Sd=!0,Td=c,Ed=r,function(e,t){ie(e,t)}(he,(function(){return tc(),null}))),r=0!==(15990&d.flags),0!==(15990&d.subtreeFlags)||r?(r=A.T,A.T=null,a=B.p,B.p=2,s=ed,ed|=4,function(e,t){if(e=e.containerInfo,Kc=Hu,Zr(e=Jr(e))){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{var n=(r=(r=e.ownerDocument)&&r.defaultView||window).getSelection&&r.getSelection();if(n&&0!==n.rangeCount){r=n.anchorNode;var i=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch(g){r=null;break e}var s=0,l=-1,d=-1,c=0,u=0,h=e,p=null;t:for(;;){for(var m;h!==r||0!==i&&3!==h.nodeType||(l=s+i),h!==a||0!==n&&3!==h.nodeType||(d=s+n),3===h.nodeType&&(s+=h.nodeValue.length),null!==(m=h.firstChild);)p=h,h=m;for(;;){if(h===e)break t;if(p===r&&++c===i&&(l=s),p===a&&++u===n&&(d=s),null!==(m=h.nextSibling))break;p=(h=p).parentNode}h=m}r=-1===l||-1===d?null:{start:l,end:d}}else r=null}r=r||{start:0,end:0}}else r=null;for(Gc={focusedElem:e,selectionRange:r},Hu=!1,rl=t;null!==rl;)if(e=(t=rl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,rl=e;else for(;null!==rl;){switch(a=(t=rl).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==a){e=void 0,r=t,i=a.memoizedProps,a=a.memoizedState,n=r.stateNode;try{var f=Mo(r.type,i,(r.elementType,r.type));e=n.getSnapshotBeforeUpdate(f,a),n.__reactInternalSnapshotBeforeUpdate=e}catch(v){nc(r,r.return,v)}}break;case 3:if(0!==(1024&e))if(9===(r=(e=t.stateNode.containerInfo).nodeType))ou(e);else if(1===r)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ou(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(o(163))}if(null!==(e=t.sibling)){e.return=t.return,rl=e;break}rl=t.return}f=nl,nl=!1}(e,d),ml(d,e),en(Gc,e.containerInfo),Hu=!!Kc,Gc=Kc=null,e.current=d,il(e,d.alternate,d),se(),ed=s,B.p=a,A.T=r):e.current=d,Sd?(Sd=!1,kd=e,Cd=n):ec(e,c),c=e.pendingLanes,0===c&&(jd=null),function(e){if(xe&&"function"===typeof xe.onCommitFiberRoot)try{xe.onCommitFiberRoot(ve,e,void 0,128===(128&e.current.flags))}catch(t){}}(d.stateNode),fc(e),null!==t)for(i=e.onRecoverableError,d=0;d<t.length;d++)c=t[d],i(c.value,{componentStack:c.stack});0!==(3&Cd)&&tc(),c=e.pendingLanes,0!==(4194218&n)&&0!==(42&c)?e===Pd?$d++:($d=0,Pd=e):$d=0,gc(0,!1)}(e,t,r,n,h,i,a,s)}finally{A.T=u,B.p=h}}function ec(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,_i(t)))}function tc(){if(null!==kd){var e=kd,t=Td;Td=0;var r=Re(Cd),n=A.T,i=B.p;try{if(B.p=32>r?32:r,A.T=null,null===kd)var a=!1;else{r=Ed,Ed=null;var s=kd,l=Cd;if(kd=null,Cd=0,0!==(6&ed))throw Error(o(331));var d=ed;if(ed|=4,Il(s.current),Sl(s,s.current,l,r),ed=d,gc(0,!1),xe&&"function"===typeof xe.onPostCommitFiberRoot)try{xe.onPostCommitFiberRoot(ve,s)}catch(c){}a=!0}return a}finally{B.p=i,A.T=n,ec(e,t)}}return!1}function rc(e,t,r){t=Fn(r,t),null!==(e=zs(e,t=Vo(e.stateNode,t,2),2))&&(ze(e,2),fc(e))}function nc(e,t,r){if(3===e.tag)rc(e,e,r);else for(;null!==t;){if(3===t.tag){rc(t,e,r);break}if(1===t.tag){var n=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof n.componentDidCatch&&(null===jd||!jd.has(n))){e=Fn(r,e),null!==(n=zs(t,r=_o(2),2))&&(Bo(r,n,t,e),ze(n,2),fc(n));break}}t=t.return}}function ic(e,t,r){var n=e.pingCache;if(null===n){n=e.pingCache=new Zl;var i=new Set;n.set(t,i)}else void 0===(i=n.get(t))&&(i=new Set,n.set(t,i));i.has(r)||(ld=!0,i.add(r),e=ac.bind(null,e,t,r),t.then(e,e))}function ac(e,t,r){var n=e.pingCache;null!==n&&n.delete(t),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,td===e&&(nd&r)===r&&(4===cd||3===cd&&(62914560&nd)===nd&&300>le()-yd?0===(2&ed)&&Vd(e,0):pd|=r,fd===nd&&(fd=0)),fc(e)}function oc(e,t){0===t&&(t=Ae()),null!==(e=Pn(e,t))&&(ze(e,t),fc(e))}function sc(e){var t=e.memoizedState,r=0;null!==t&&(r=t.retryLane),oc(e,r)}function lc(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;null!==i&&(r=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(o(314))}null!==n&&n.delete(t),oc(e,r)}var dc=null,cc=null,uc=!1,hc=!1,pc=!1,mc=0;function fc(e){var t;e!==cc&&null===e.next&&(null===cc?dc=cc=e:cc=cc.next=e),hc=!0,uc||(uc=!0,t=vc,nu((function(){0!==(6&ed)?ie(ce,t):t()})))}function gc(e,t){if(!pc&&hc){pc=!0;do{for(var r=!1,n=dc;null!==n;){if(!t)if(0!==e){var i=n.pendingLanes;if(0===i)var a=0;else{var o=n.suspendedLanes,s=n.pingedLanes;a=(1<<31-be(42|e)+1)-1,a=201326677&(a&=i&~(o&~s))?201326677&a|1:a?2|a:0}0!==a&&(r=!0,bc(n,a))}else a=nd,0===(3&(a=Te(n,n===td?a:0)))||Ee(n,a)||(r=!0,bc(n,a));n=n.next}}while(r);pc=!1}}function vc(){hc=uc=!1;var e=0;0!==mc&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==Zc&&(Zc=e,!0);return Zc=null,!1}()&&(e=mc),mc=0);for(var t=le(),r=null,n=dc;null!==n;){var i=n.next,a=xc(n,t);0===a?(n.next=null,null===r?dc=i:r.next=i,null===i&&(cc=r)):(r=n,(0!==e||0!==(3&a))&&(hc=!0)),n=i}gc(e,!1)}function xc(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,a=-62914561&e.pendingLanes;0<a;){var o=31-be(a),s=1<<o,l=i[o];-1===l?0!==(s&r)&&0===(s&n)||(i[o]=$e(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}if(r=nd,r=Te(e,e===(t=td)?r:0),n=e.callbackNode,0===r||e===t&&2===id||null!==e.cancelPendingCommit)return null!==n&&null!==n&&ae(n),e.callbackNode=null,e.callbackPriority=0;if(0===(3&r)||Ee(e,r)){if((t=r&-r)===e.callbackPriority)return t;switch(null!==n&&ae(n),Re(r)){case 2:case 8:r=ue;break;case 32:default:r=he;break;case 268435456:r=me}return n=yc.bind(null,e),r=ie(r,n),e.callbackPriority=t,e.callbackNode=r,t}return null!==n&&null!==n&&ae(n),e.callbackPriority=2,e.callbackNode=null,2}function yc(e,t){var r=e.callbackNode;if(tc()&&e.callbackNode!==r)return null;var n=nd;return 0===(n=Te(e,e===td?n:0))?null:(Md(e,n,t),xc(e,le()),null!=e.callbackNode&&e.callbackNode===r?yc.bind(null,e):null)}function bc(e,t){if(tc())return null;Md(e,t,!0)}function wc(){return 0===mc&&(mc=Pe()),mc}function jc(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:Pt(""+e)}function Sc(e,t){var r=t.ownerDocument.createElement("input");return r.name=t.name,r.value=t.value,e.id&&r.setAttribute("form",e.id),t.parentNode.insertBefore(r,t),e=new FormData(e),r.parentNode.removeChild(r),e}for(var kc=0;kc<wn.length;kc++){var Cc=wn[kc];jn(Cc.toLowerCase(),"on"+(Cc[0].toUpperCase()+Cc.slice(1)))}jn(pn,"onAnimationEnd"),jn(mn,"onAnimationIteration"),jn(fn,"onAnimationStart"),jn("dblclick","onDoubleClick"),jn("focusin","onFocus"),jn("focusout","onBlur"),jn(gn,"onTransitionRun"),jn(vn,"onTransitionStart"),jn(xn,"onTransitionCancel"),jn(yn,"onTransitionEnd"),tt("onMouseEnter",["mouseout","mouseover"]),tt("onMouseLeave",["mouseout","mouseover"]),tt("onPointerEnter",["pointerout","pointerover"]),tt("onPointerLeave",["pointerout","pointerover"]),et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),et("onBeforeInput",["compositionend","keypress","textInput","paste"]),et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ec=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tc));function $c(e,t){t=0!==(4&t);for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var o=n.length-1;0<=o;o--){var s=n[o],l=s.instance,d=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;a=s,i.currentTarget=d;try{a(i)}catch(c){Fo(c)}i.currentTarget=null,a=l}else for(o=0;o<n.length;o++){if(l=(s=n[o]).instance,d=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;a=s,i.currentTarget=d;try{a(i)}catch(c){Fo(c)}i.currentTarget=null,a=l}}}}function Pc(e,t){var r=t[_e];void 0===r&&(r=t[_e]=new Set);var n=e+"__bubble";r.has(n)||(Mc(t,e,2,!1),r.add(n))}function Ac(e,t,r){var n=0;t&&(n|=4),Mc(r,e,n,t)}var Ic="_reactListening"+Math.random().toString(36).slice(2);function zc(e){if(!e[Ic]){e[Ic]=!0,Je.forEach((function(t){"selectionchange"!==t&&(Ec.has(t)||Ac(t,!1,e),Ac(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ic]||(t[Ic]=!0,Ac("selectionchange",!1,t))}}function Mc(e,t,r,n){switch(Qu(t)){case 2:var i=Wu;break;case 8:i=qu;break;default:i=Ku}r=i.bind(null,t,r,e),i=void 0,!Lt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),n?void 0!==i?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):void 0!==i?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Fc(e,t,r,n,i){var a=n;if(0===(1&t)&&0===(2&t)&&null!==n)e:for(;;){if(null===n)return;var o=n.tag;if(3===o||4===o){var s=n.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===o)for(o=n.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;o=o.return}for(;null!==s;){if(null===(o=Ke(s)))return;if(5===(l=o.tag)||6===l||26===l||27===l){n=a=o;continue e}s=s.parentNode}}n=n.return}Ot((function(){var n=a,i=It(r),o=[];e:{var s=bn.get(e);if(void 0!==s){var l=Jt,d=e;switch(e){case"keypress":if(0===Ht(r))break e;case"keydown":case"keyup":l=pr;break;case"focusin":d="focus",l=ir;break;case"focusout":d="blur",l=ir;break;case"beforeblur":case"afterblur":l=ir;break;case"click":if(2===r.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=rr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=nr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=fr;break;case pn:case mn:case fn:l=ar;break;case yn:l=gr;break;case"scroll":case"scrollend":l=er;break;case"wheel":l=vr;break;case"copy":case"cut":case"paste":l=or;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=mr;break;case"toggle":case"beforetoggle":l=xr}var c=0!==(4&t),u=!c&&("scroll"===e||"scrollend"===e),h=c?null!==s?s+"Capture":null:s;c=[];for(var p,m=n;null!==m;){var f=m;if(p=f.stateNode,5!==(f=f.tag)&&26!==f&&27!==f||null===p||null===h||null!=(f=Nt(m,h))&&c.push(Rc(m,f,p)),u)break;m=m.return}0<c.length&&(s=new l(s,d,null,r,i),o.push({event:s,listeners:c}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||r===At||!(d=r.relatedTarget||r.fromElement)||!Ke(d)&&!d[Ve])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=n,null!==(d=(d=r.relatedTarget||r.toElement)?Ke(d):null)&&(u=N(d),c=d.tag,d!==u||5!==c&&27!==c&&6!==c)&&(d=null)):(l=null,d=n),l!==d)){if(c=rr,f="onMouseLeave",h="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(c=mr,f="onPointerLeave",h="onPointerEnter",m="pointer"),u=null==l?s:Ye(l),p=null==d?s:Ye(d),(s=new c(f,m+"leave",l,r,i)).target=u,s.relatedTarget=p,f=null,Ke(i)===n&&((c=new c(h,m+"enter",d,r,i)).target=p,c.relatedTarget=u,f=c),u=f,l&&d)e:{for(h=d,m=0,p=c=l;p;p=Nc(p))m++;for(p=0,f=h;f;f=Nc(f))p++;for(;0<m-p;)c=Nc(c),m--;for(;0<p-m;)h=Nc(h),p--;for(;m--;){if(c===h||null!==h&&c===h.alternate)break e;c=Nc(c),h=Nc(h)}c=null}else c=null;null!==l&&Lc(o,s,l,c,!1),null!==d&&null!==u&&Lc(o,u,d,c,!0)}if("select"===(l=(s=n?Ye(n):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Or;else if(Ar(s))if(Nr)g=qr;else{g=Hr;var v=Ur}else!(l=s.nodeName)||"input"!==l.toLowerCase()||"checkbox"!==s.type&&"radio"!==s.type?n&&Tt(n.elementType)&&(g=Or):g=Wr;switch(g&&(g=g(e,n))?Ir(o,g,r,i):(v&&v(e,s,n),"focusout"===e&&n&&"number"===s.type&&null!=n.memoizedProps.value&&xt(s,"number",s.value)),v=n?Ye(n):window,e){case"focusin":(Ar(v)||"true"===v.contentEditable)&&(rn=v,nn=n,an=null);break;case"focusout":an=nn=rn=null;break;case"mousedown":on=!0;break;case"contextmenu":case"mouseup":case"dragend":on=!1,sn(o,r,i);break;case"selectionchange":if(tn)break;case"keydown":case"keyup":sn(o,r,i)}var x;if(br)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else $r?Tr(e,r)&&(y="onCompositionEnd"):"keydown"===e&&229===r.keyCode&&(y="onCompositionStart");y&&(Sr&&"ko"!==r.locale&&($r||"onCompositionStart"!==y?"onCompositionEnd"===y&&$r&&(x=Ut()):(_t="value"in(Vt=i)?Vt.value:Vt.textContent,$r=!0)),0<(v=Oc(n,y)).length&&(y=new sr(y,e,null,r,i),o.push({event:y,listeners:v}),x?y.data=x:null!==(x=Er(r))&&(y.data=x))),(x=jr?function(e,t){switch(e){case"compositionend":return Er(t);case"keypress":return 32!==t.which?null:(Cr=!0,kr);case"textInput":return(e=t.data)===kr&&Cr?null:e;default:return null}}(e,r):function(e,t){if($r)return"compositionend"===e||!br&&Tr(e,t)?(e=Ut(),Bt=_t=Vt=null,$r=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sr&&"ko"!==t.locale?null:t.data}}(e,r))&&(0<(y=Oc(n,"onBeforeInput")).length&&(v=new sr("onBeforeInput","beforeinput",null,r,i),o.push({event:v,listeners:y}),v.data=x)),function(e,t,r,n,i){if("submit"===t&&r&&r.stateNode===i){var a=jc((i[De]||null).action),o=n.submitter;o&&null!==(t=(t=o[De]||null)?jc(t.formAction):o.getAttribute("formAction"))&&(a=t,o=null);var s=new Jt("action","action",null,n,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(0!==mc){var e=o?Sc(i,o):new FormData(i);uo(r,{pending:!0,data:e,method:i.method,action:a},null,e)}}else"function"===typeof a&&(s.preventDefault(),e=o?Sc(i,o):new FormData(i),uo(r,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}(o,e,n,r,i)}$c(o,t)}))}function Rc(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Oc(e,t){for(var r=t+"Capture",n=[];null!==e;){var i=e,a=i.stateNode;5!==(i=i.tag)&&26!==i&&27!==i||null===a||(null!=(i=Nt(e,r))&&n.unshift(Rc(e,i,a)),null!=(i=Nt(e,t))&&n.push(Rc(e,i,a))),e=e.return}return n}function Nc(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function Lc(e,t,r,n,i){for(var a=t._reactName,o=[];null!==r&&r!==n;){var s=r,l=s.alternate,d=s.stateNode;if(s=s.tag,null!==l&&l===n)break;5!==s&&26!==s&&27!==s||null===d||(l=d,i?null!=(d=Nt(r,a))&&o.unshift(Rc(r,d,l)):i||null!=(d=Nt(r,a))&&o.push(Rc(r,d,l))),r=r.return}0!==o.length&&e.push({event:t,listeners:o})}var Dc=/\r\n?/g,Vc=/\u0000|\uFFFD/g;function _c(e){return("string"===typeof e?e:""+e).replace(Dc,"\n").replace(Vc,"")}function Bc(e,t){return t=_c(t),_c(e)===t}function Uc(){}function Hc(e,t,r,n,i,a){switch(r){case"children":"string"===typeof n?"body"===t||"textarea"===t&&""===n||jt(e,n):("number"===typeof n||"bigint"===typeof n)&&"body"!==t&&jt(e,""+n);break;case"className":st(e,"class",n);break;case"tabIndex":st(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":st(e,r,n);break;case"style":Ct(e,n,a);break;case"data":if("object"!==t){st(e,"data",n);break}case"src":case"href":if(""===n&&("a"!==t||"href"!==r)){e.removeAttribute(r);break}if(null==n||"function"===typeof n||"symbol"===typeof n||"boolean"===typeof n){e.removeAttribute(r);break}n=Pt(""+n),e.setAttribute(r,n);break;case"action":case"formAction":if("function"===typeof n){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof a&&("formAction"===r?("input"!==t&&Hc(e,t,"name",i.name,i,null),Hc(e,t,"formEncType",i.formEncType,i,null),Hc(e,t,"formMethod",i.formMethod,i,null),Hc(e,t,"formTarget",i.formTarget,i,null)):(Hc(e,t,"encType",i.encType,i,null),Hc(e,t,"method",i.method,i,null),Hc(e,t,"target",i.target,i,null))),null==n||"symbol"===typeof n||"boolean"===typeof n){e.removeAttribute(r);break}n=Pt(""+n),e.setAttribute(r,n);break;case"onClick":null!=n&&(e.onclick=Uc);break;case"onScroll":null!=n&&Pc("scroll",e);break;case"onScrollEnd":null!=n&&Pc("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=n){if("object"!==typeof n||!("__html"in n))throw Error(o(61));if(null!=(r=n.__html)){if(null!=i.children)throw Error(o(60));e.innerHTML=r}}break;case"multiple":e.multiple=n&&"function"!==typeof n&&"symbol"!==typeof n;break;case"muted":e.muted=n&&"function"!==typeof n&&"symbol"!==typeof n;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==n||"function"===typeof n||"boolean"===typeof n||"symbol"===typeof n){e.removeAttribute("xlink:href");break}r=Pt(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=n&&"function"!==typeof n&&"symbol"!==typeof n?e.setAttribute(r,""+n):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&"function"!==typeof n&&"symbol"!==typeof n?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":!0===n?e.setAttribute(r,""):!1!==n&&null!=n&&"function"!==typeof n&&"symbol"!==typeof n?e.setAttribute(r,n):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":null!=n&&"function"!==typeof n&&"symbol"!==typeof n&&!isNaN(n)&&1<=n?e.setAttribute(r,n):e.removeAttribute(r);break;case"rowSpan":case"start":null==n||"function"===typeof n||"symbol"===typeof n||isNaN(n)?e.removeAttribute(r):e.setAttribute(r,n);break;case"popover":Pc("beforetoggle",e),Pc("toggle",e),ot(e,"popover",n);break;case"xlinkActuate":lt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":lt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":lt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":lt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":lt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":lt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":lt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":lt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":lt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":ot(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<r.length)||"o"!==r[0]&&"O"!==r[0]||"n"!==r[1]&&"N"!==r[1])&&ot(e,r=Et.get(r)||r,n)}}function Wc(e,t,r,n,i,a){switch(r){case"style":Ct(e,n,a);break;case"dangerouslySetInnerHTML":if(null!=n){if("object"!==typeof n||!("__html"in n))throw Error(o(61));if(null!=(r=n.__html)){if(null!=i.children)throw Error(o(60));e.innerHTML=r}}break;case"children":"string"===typeof n?jt(e,n):("number"===typeof n||"bigint"===typeof n)&&jt(e,""+n);break;case"onScroll":null!=n&&Pc("scroll",e);break;case"onScrollEnd":null!=n&&Pc("scrollend",e);break;case"onClick":null!=n&&(e.onclick=Uc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:Ze.hasOwnProperty(r)||("o"!==r[0]||"n"!==r[1]||(i=r.endsWith("Capture"),t=r.slice(2,i?r.length-7:void 0),"function"===typeof(a=null!=(a=e[De]||null)?a[r]:null)&&e.removeEventListener(t,a,i),"function"!==typeof n)?r in e?e[r]=n:!0===n?e.setAttribute(r,""):ot(e,r,n):("function"!==typeof a&&null!==a&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(t,n,i)))}}function qc(e,t,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pc("error",e),Pc("load",e);var n,i=!1,a=!1;for(n in r)if(r.hasOwnProperty(n)){var s=r[n];if(null!=s)switch(n){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Hc(e,t,n,s,r,null)}}return a&&Hc(e,t,"srcSet",r.srcSet,r,null),void(i&&Hc(e,t,"src",r.src,r,null));case"input":Pc("invalid",e);var l=n=s=a=null,d=null,c=null;for(i in r)if(r.hasOwnProperty(i)){var u=r[i];if(null!=u)switch(i){case"name":a=u;break;case"type":s=u;break;case"checked":d=u;break;case"defaultChecked":c=u;break;case"value":n=u;break;case"defaultValue":l=u;break;case"children":case"dangerouslySetInnerHTML":if(null!=u)throw Error(o(137,t));break;default:Hc(e,t,i,u,r,null)}}return vt(e,n,l,d,c,s,a,!1),void ut(e);case"select":for(a in Pc("invalid",e),i=s=n=null,r)if(r.hasOwnProperty(a)&&null!=(l=r[a]))switch(a){case"value":n=l;break;case"defaultValue":s=l;break;case"multiple":i=l;default:Hc(e,t,a,l,r,null)}return t=n,r=s,e.multiple=!!i,void(null!=t?yt(e,!!i,t,!1):null!=r&&yt(e,!!i,r,!0));case"textarea":for(s in Pc("invalid",e),n=a=i=null,r)if(r.hasOwnProperty(s)&&null!=(l=r[s]))switch(s){case"value":i=l;break;case"defaultValue":a=l;break;case"children":n=l;break;case"dangerouslySetInnerHTML":if(null!=l)throw Error(o(91));break;default:Hc(e,t,s,l,r,null)}return wt(e,i,a,n),void ut(e);case"option":for(d in r)if(r.hasOwnProperty(d)&&null!=(i=r[d]))if("selected"===d)e.selected=i&&"function"!==typeof i&&"symbol"!==typeof i;else Hc(e,t,d,i,r,null);return;case"dialog":Pc("cancel",e),Pc("close",e);break;case"iframe":case"object":Pc("load",e);break;case"video":case"audio":for(i=0;i<Tc.length;i++)Pc(Tc[i],e);break;case"image":Pc("error",e),Pc("load",e);break;case"details":Pc("toggle",e);break;case"embed":case"source":case"link":Pc("error",e),Pc("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in r)if(r.hasOwnProperty(c)&&null!=(i=r[c]))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Hc(e,t,c,i,r,null)}return;default:if(Tt(t)){for(u in r)r.hasOwnProperty(u)&&(void 0!==(i=r[u])&&Wc(e,t,u,i,r,void 0));return}}for(l in r)r.hasOwnProperty(l)&&(null!=(i=r[l])&&Hc(e,t,l,i,r,null))}var Kc=null,Gc=null;function Yc(e){return 9===e.nodeType?e:e.ownerDocument}function Xc(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qc(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function Jc(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Zc=null;var eu="function"===typeof setTimeout?setTimeout:void 0,tu="function"===typeof clearTimeout?clearTimeout:void 0,ru="function"===typeof Promise?Promise:void 0,nu="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ru?function(e){return ru.resolve(null).then(e).catch(iu)}:eu;function iu(e){setTimeout((function(){throw e}))}function au(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&8===i.nodeType)if("/$"===(r=i.data)){if(0===n)return e.removeChild(i),void fh(t);n--}else"$"!==r&&"$?"!==r&&"$!"!==r||n++;r=i}while(r);fh(t)}function ou(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var r=t;switch(t=t.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":ou(r),qe(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===r.rel.toLowerCase())continue}e.removeChild(r)}}function su(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}function lu(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var r=e.data;if("$"===r||"$!"===r||"$?"===r){if(0===t)return e;t--}else"/$"===r&&t++}e=e.previousSibling}return null}function du(e,t,r){switch(t=Yc(r),e){case"html":if(!(e=t.documentElement))throw Error(o(452));return e;case"head":if(!(e=t.head))throw Error(o(453));return e;case"body":if(!(e=t.body))throw Error(o(454));return e;default:throw Error(o(451))}}var cu=new Map,uu=new Set;function hu(e){return"function"===typeof e.getRootNode?e.getRootNode():e.ownerDocument}var pu=B.d;B.d={f:function(){var e=pu.f(),t=Ld();return e||t},r:function(e){var t=Ge(e);null!==t&&5===t.tag&&"form"===t.type?po(t):pu.r(e)},D:function(e){pu.D(e),fu("dns-prefetch",e,null)},C:function(e,t){pu.C(e,t),fu("preconnect",e,t)},L:function(e,t,r){pu.L(e,t,r);var n=mu;if(n&&e&&t){var i='link[rel="preload"][as="'+ft(t)+'"]';"image"===t&&r&&r.imageSrcSet?(i+='[imagesrcset="'+ft(r.imageSrcSet)+'"]',"string"===typeof r.imageSizes&&(i+='[imagesizes="'+ft(r.imageSizes)+'"]')):i+='[href="'+ft(e)+'"]';var a=i;switch(t){case"style":a=vu(e);break;case"script":a=bu(e)}cu.has(a)||(e=I({rel:"preload",href:"image"===t&&r&&r.imageSrcSet?void 0:e,as:t},r),cu.set(a,e),null!==n.querySelector(i)||"style"===t&&n.querySelector(xu(a))||"script"===t&&n.querySelector(wu(a))||(qc(t=n.createElement("link"),"link",e),Qe(t),n.head.appendChild(t)))}},m:function(e,t){pu.m(e,t);var r=mu;if(r&&e){var n=t&&"string"===typeof t.as?t.as:"script",i='link[rel="modulepreload"][as="'+ft(n)+'"][href="'+ft(e)+'"]',a=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=bu(e)}if(!cu.has(a)&&(e=I({rel:"modulepreload",href:e},t),cu.set(a,e),null===r.querySelector(i))){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(wu(a)))return}qc(n=r.createElement("link"),"link",e),Qe(n),r.head.appendChild(n)}}},X:function(e,t){pu.X(e,t);var r=mu;if(r&&e){var n=Xe(r).hoistableScripts,i=bu(e),a=n.get(i);a||((a=r.querySelector(wu(i)))||(e=I({src:e,async:!0},t),(t=cu.get(i))&&Cu(e,t),Qe(a=r.createElement("script")),qc(a,"link",e),r.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},n.set(i,a))}},S:function(e,t,r){pu.S(e,t,r);var n=mu;if(n&&e){var i=Xe(n).hoistableStyles,a=vu(e);t=t||"default";var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=n.querySelector(xu(a)))s.loading=5;else{e=I({rel:"stylesheet",href:e,"data-precedence":t},r),(r=cu.get(a))&&ku(e,r);var l=o=n.createElement("link");Qe(l),qc(l,"link",e),l._p=new Promise((function(e,t){l.onload=e,l.onerror=t})),l.addEventListener("load",(function(){s.loading|=1})),l.addEventListener("error",(function(){s.loading|=2})),s.loading|=4,Su(o,t,n)}o={type:"stylesheet",instance:o,count:1,state:s},i.set(a,o)}}},M:function(e,t){pu.M(e,t);var r=mu;if(r&&e){var n=Xe(r).hoistableScripts,i=bu(e),a=n.get(i);a||((a=r.querySelector(wu(i)))||(e=I({src:e,async:!0,type:"module"},t),(t=cu.get(i))&&Cu(e,t),Qe(a=r.createElement("script")),qc(a,"link",e),r.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},n.set(i,a))}}};var mu="undefined"===typeof document?null:document;function fu(e,t,r){var n=mu;if(n&&"string"===typeof t&&t){var i=ft(t);i='link[rel="'+e+'"][href="'+i+'"]',"string"===typeof r&&(i+='[crossorigin="'+r+'"]'),uu.has(i)||(uu.add(i),e={rel:e,crossOrigin:r,href:t},null===n.querySelector(i)&&(qc(t=n.createElement("link"),"link",e),Qe(t),n.head.appendChild(t)))}}function gu(e,t,r,n){var i,a,s,l,d=(d=Q.current)?hu(d):null;if(!d)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof r.precedence&&"string"===typeof r.href?(t=vu(r.href),(n=(r=Xe(d).hoistableStyles).get(t))||(n={type:"style",instance:null,count:0,state:null},r.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===r.rel&&"string"===typeof r.href&&"string"===typeof r.precedence){e=vu(r.href);var c=Xe(d).hoistableStyles,u=c.get(e);if(u||(d=d.ownerDocument||d,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,u),(c=d.querySelector(xu(e)))&&!c._p&&(u.instance=c,u.state.loading=5),cu.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},cu.set(e,r),c||(i=d,a=e,s=r,l=u.state,i.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=i.createElement("link"),l.preload=a,a.addEventListener("load",(function(){return l.loading|=1})),a.addEventListener("error",(function(){return l.loading|=2})),qc(a,"link",s),Qe(a),i.head.appendChild(a))))),t&&null===n)throw Error(o(528,""));return u}if(t&&null!==n)throw Error(o(529,""));return null;case"script":return t=r.async,"string"===typeof(r=r.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=bu(r),(n=(r=Xe(d).hoistableScripts).get(t))||(n={type:"script",instance:null,count:0,state:null},r.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function vu(e){return'href="'+ft(e)+'"'}function xu(e){return'link[rel="stylesheet"]['+e+"]"}function yu(e){return I({},e,{"data-precedence":e.precedence,precedence:null})}function bu(e){return'[src="'+ft(e)+'"]'}function wu(e){return"script[async]"+e}function ju(e,t,r){if(t.count++,null===t.instance)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+ft(r.href)+'"]');if(n)return t.instance=n,Qe(n),n;var i=I({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return Qe(n=(e.ownerDocument||e).createElement("style")),qc(n,"style",i),Su(n,r.precedence,e),t.instance=n;case"stylesheet":i=vu(r.href);var a=e.querySelector(xu(i));if(a)return t.state.loading|=4,t.instance=a,Qe(a),a;n=yu(r),(i=cu.get(i))&&ku(n,i),Qe(a=(e.ownerDocument||e).createElement("link"));var s=a;return s._p=new Promise((function(e,t){s.onload=e,s.onerror=t})),qc(a,"link",n),t.state.loading|=4,Su(a,r.precedence,e),t.instance=a;case"script":return a=bu(r.src),(i=e.querySelector(wu(a)))?(t.instance=i,Qe(i),i):(n=r,(i=cu.get(a))&&Cu(n=I({},r),i),Qe(i=(e=e.ownerDocument||e).createElement("script")),qc(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(o(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(n=t.instance,t.state.loading|=4,Su(n,r.precedence,e));return t.instance}function Su(e,t,r){for(var n=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,a=i,o=0;o<n.length;o++){var s=n[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=9===r.nodeType?r.head:r).insertBefore(e,t.firstChild)}function ku(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Cu(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var Tu=null;function Eu(e,t,r){if(null===Tu){var n=new Map,i=Tu=new Map;i.set(r,n)}else(n=(i=Tu).get(r))||(n=new Map,i.set(r,n));if(n.has(e))return n;for(n.set(e,null),r=r.getElementsByTagName(e),i=0;i<r.length;i++){var a=r[i];if(!(a[We]||a[Le]||"link"===e&&"stylesheet"===a.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==a.namespaceURI){var o=a.getAttribute(t)||"";o=e+o;var s=n.get(o);s?s.push(a):n.set(o,[a])}}return n}function $u(e,t,r){(e=e.ownerDocument||e).head.insertBefore(r,"title"===t?e.querySelector("head > title"):null)}function Pu(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var Au=null;function Iu(){}function zu(){if(this.count--,0===this.count)if(this.stylesheets)Fu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var Mu=null;function Fu(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,Mu=new Map,t.forEach(Ru,e),Mu=null,zu.call(e))}function Ru(e,t){if(!(4&t.state.loading)){var r=Mu.get(e);if(r)var n=r.get(null);else{r=new Map,Mu.set(e,r);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<i.length;a++){var o=i[a];"LINK"!==o.nodeName&&"not all"===o.getAttribute("media")||(r.set(o.dataset.precedence,o),n=o)}n&&r.set(null,n)}o=(i=t.instance).getAttribute("data-precedence"),(a=r.get(o)||n)===n&&r.set(null,i),r.set(o,i),this.count++,n=zu.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),a?a.parentNode.insertBefore(i,a.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(i,e.firstChild),t.state.loading|=4}}var Ou={$$typeof:g,Provider:null,Consumer:null,_currentValue:U,_currentValue2:U,_threadCount:0};function Nu(e,t,r,n,i,a,o,s){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ie(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ie(0),this.hiddenUpdates=Ie(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function Lu(e,t,r,n,i,a,o,s,l,d,c,u){return e=new Nu(e,t,r,o,s,l,d,u),t=1,!0===a&&(t|=24),a=Rl(3,null,null,t),e.current=a,a.stateNode=e,(t=Vi()).refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:n,isDehydrated:r,cache:t},Ps(a),e}function Du(e){return e?e=zn:zn}function Vu(e,t,r,n,i,a){i=Du(i),null===n.context?n.context=i:n.pendingContext=i,(n=Is(t)).payload={element:r},null!==(a=void 0===a?null:a)&&(n.callback=a),null!==(r=zs(e,n,t))&&(zd(r,0,t),Ms(r,e,t))}function _u(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var r=e.retryLane;e.retryLane=0!==r&&r<t?r:t}}function Bu(e,t){_u(e,t),(e=e.alternate)&&_u(e,t)}function Uu(e){if(13===e.tag){var t=Pn(e,67108864);null!==t&&zd(t,0,67108864),Bu(e,67108864)}}var Hu=!0;function Wu(e,t,r,n){var i=A.T;A.T=null;var a=B.p;try{B.p=2,Ku(e,t,r,n)}finally{B.p=a,A.T=i}}function qu(e,t,r,n){var i=A.T;A.T=null;var a=B.p;try{B.p=8,Ku(e,t,r,n)}finally{B.p=a,A.T=i}}function Ku(e,t,r,n){if(Hu){var i=Gu(n);if(null===i)Fc(e,t,n,Yu,r),oh(e,n);else if(function(e,t,r,n,i){switch(t){case"focusin":return Zu=sh(Zu,e,t,r,n,i),!0;case"dragenter":return eh=sh(eh,e,t,r,n,i),!0;case"mouseover":return th=sh(th,e,t,r,n,i),!0;case"pointerover":var a=i.pointerId;return rh.set(a,sh(rh.get(a)||null,e,t,r,n,i)),!0;case"gotpointercapture":return a=i.pointerId,nh.set(a,sh(nh.get(a)||null,e,t,r,n,i)),!0}return!1}(i,e,t,r,n))n.stopPropagation();else if(oh(e,n),4&t&&-1<ah.indexOf(e)){for(;null!==i;){var a=Ge(i);if(null!==a)switch(a.tag){case 3:if((a=a.stateNode).current.memoizedState.isDehydrated){var o=Ce(a.pendingLanes);if(0!==o){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var l=1<<31-be(o);s.entanglements[1]|=l,o&=~l}fc(a),0===(6&ed)&&(bd=le()+500,gc(0,!1))}}break;case 13:null!==(s=Pn(a,2))&&zd(s,0,2),Ld(),Bu(a,2)}if(null===(a=Gu(n))&&Fc(e,t,n,Yu,r),a===i)break;i=a}null!==i&&n.stopPropagation()}else Fc(e,t,n,null,r)}}function Gu(e){return Xu(e=It(e))}var Yu=null;function Xu(e){if(Yu=null,null!==(e=Ke(e))){var t=N(e);if(null===t)e=null;else{var r=t.tag;if(13===r){if(null!==(e=L(t)))return e;e=null}else if(3===r){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Yu=e,null}function Qu(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(de()){case ce:return 2;case ue:return 8;case he:case pe:return 32;case me:return 268435456;default:return 32}default:return 32}}var Ju=!1,Zu=null,eh=null,th=null,rh=new Map,nh=new Map,ih=[],ah="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function oh(e,t){switch(e){case"focusin":case"focusout":Zu=null;break;case"dragenter":case"dragleave":eh=null;break;case"mouseover":case"mouseout":th=null;break;case"pointerover":case"pointerout":rh.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":nh.delete(t.pointerId)}}function sh(e,t,r,n,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[i]},null!==t&&(null!==(t=Ge(t))&&Uu(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function lh(e){var t=Ke(e.target);if(null!==t){var r=N(t);if(null!==r)if(13===(t=r.tag)){if(null!==(t=L(r)))return e.blockedOn=t,void function(e,t){var r=B.p;try{return B.p=e,t()}finally{B.p=r}}(e.priority,(function(){if(13===r.tag){var e=Ad(),t=Pn(r,e);null!==t&&zd(t,0,e),Bu(r,e)}}))}else if(3===t&&r.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===r.tag?r.stateNode.containerInfo:null)}e.blockedOn=null}function dh(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var r=Gu(e.nativeEvent);if(null!==r)return null!==(t=Ge(r))&&Uu(t),e.blockedOn=r,!1;var n=new(r=e.nativeEvent).constructor(r.type,r);At=n,r.target.dispatchEvent(n),At=null,t.shift()}return!0}function ch(e,t,r){dh(e)&&r.delete(t)}function uh(){Ju=!1,null!==Zu&&dh(Zu)&&(Zu=null),null!==eh&&dh(eh)&&(eh=null),null!==th&&dh(th)&&(th=null),rh.forEach(ch),nh.forEach(ch)}function hh(e,t){e.blockedOn===t&&(e.blockedOn=null,Ju||(Ju=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,uh)))}var ph=null;function mh(e){ph!==e&&(ph=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,(function(){ph===e&&(ph=null);for(var t=0;t<e.length;t+=3){var r=e[t],n=e[t+1],i=e[t+2];if("function"!==typeof n){if(null===Xu(n||r))continue;break}var a=Ge(r);null!==a&&(e.splice(t,3),t-=3,uo(a,{pending:!0,data:i,method:r.method,action:n},n,i))}})))}function fh(e){function t(t){return hh(t,e)}null!==Zu&&hh(Zu,e),null!==eh&&hh(eh,e),null!==th&&hh(th,e),rh.forEach(t),nh.forEach(t);for(var r=0;r<ih.length;r++){var n=ih[r];n.blockedOn===e&&(n.blockedOn=null)}for(;0<ih.length&&null===(r=ih[0]).blockedOn;)lh(r),null===r.blockedOn&&ih.shift();if(null!=(r=(e.ownerDocument||e).$$reactFormReplay))for(n=0;n<r.length;n+=3){var i=r[n],a=r[n+1],o=i[De]||null;if("function"===typeof a)o||mh(r);else if(o){var s=null;if(a&&a.hasAttribute("formAction")){if(i=a,o=a[De]||null)s=o.formAction;else if(null!==Xu(i))continue}else s=o.action;"function"===typeof s?r[n+1]=s:(r.splice(n,3),n-=3),mh(r)}}}function gh(e){this._internalRoot=e}function vh(e){this._internalRoot=e}vh.prototype.render=gh.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Vu(t.current,Ad(),e,t,null,null)},vh.prototype.unmount=gh.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;0===e.tag&&tc(),Vu(e.current,2,null,e,null,null),Ld(),t[Ve]=null}},vh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Oe();e={blockedOn:null,target:e,priority:t};for(var r=0;r<ih.length&&0!==t&&t<ih[r].priority;r++);ih.splice(r,0,e),0===r&&lh(e)}};var xh=i.version;if("19.0.0"!==xh)throw Error(o(527,xh,"19.0.0"));B.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=N(e)))throw Error(o(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(n=i.return)){r=n;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return D(i),e;if(a===n)return D(i),t;a=a.sibling}throw Error(o(188))}if(r.return!==n.return)r=i,n=a;else{for(var s=!1,l=i.child;l;){if(l===r){s=!0,r=i,n=a;break}if(l===n){s=!0,n=i,r=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===r){s=!0,r=a,n=i;break}if(l===n){s=!0,n=a,r=i;break}l=l.sibling}if(!s)throw Error(o(189))}}if(r.alternate!==n)throw Error(o(190))}if(3!==r.tag)throw Error(o(188));return r.stateNode.current===r?e:t}(t),e=null===(e=null!==e?V(e):null)?null:e.stateNode};var yh={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:A,findFiberByHostInstance:Ke,reconcilerVersion:"19.0.0"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var bh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bh.isDisabled&&bh.supportsFiber)try{ve=bh.inject(yh),xe=bh}catch(jh){}}t.createRoot=function(e,t){if(!s(e))throw Error(o(299));var r=!1,n="",i=Ro,a=Oo,l=No;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(r=!0),void 0!==t.identifierPrefix&&(n=t.identifierPrefix),void 0!==t.onUncaughtError&&(i=t.onUncaughtError),void 0!==t.onCaughtError&&(a=t.onCaughtError),void 0!==t.onRecoverableError&&(l=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=Lu(e,1,!1,null,0,r,n,i,a,l,0,null),e[Ve]=t.current,zc(8===e.nodeType?e.parentNode:e),new gh(t)},t.hydrateRoot=function(e,t,r){if(!s(e))throw Error(o(299));var n=!1,i="",a=Ro,l=Oo,d=No,c=null;return null!==r&&void 0!==r&&(!0===r.unstable_strictMode&&(n=!0),void 0!==r.identifierPrefix&&(i=r.identifierPrefix),void 0!==r.onUncaughtError&&(a=r.onUncaughtError),void 0!==r.onCaughtError&&(l=r.onCaughtError),void 0!==r.onRecoverableError&&(d=r.onRecoverableError),void 0!==r.unstable_transitionCallbacks&&r.unstable_transitionCallbacks,void 0!==r.formState&&(c=r.formState)),(t=Lu(e,1,!0,t,0,n,i,a,l,d,0,c)).context=Du(null),r=t.current,(i=Is(n=Ad())).callback=null,zs(r,i,n),t.current.lanes=n,ze(t,n),fc(t),e[Ve]=t.current,zc(e),new vh(t)},t.version="19.0.0"},43:(e,t,r)=>{"use strict";e.exports=r(288)},288:(e,t)=>{"use strict";var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),l=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f=Object.assign,g={};function v(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||m}function x(){}function y(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=v.prototype;var b=y.prototype=new x;b.constructor=y,f(b,v.prototype),b.isPureReactComponent=!0;var w=Array.isArray,j={H:null,A:null,T:null,S:null},S=Object.prototype.hasOwnProperty;function k(e,t,n,i,a,o){return n=o.ref,{$$typeof:r,type:e,key:t,ref:void 0!==n?n:null,props:o}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}var T=/\/+/g;function E(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(){}function P(e,t,i,a,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l,d,c=!1;if(null===e)c=!0;else switch(s){case"bigint":case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0;break;case h:return P((c=e._init)(e._payload),t,i,a,o)}}if(c)return o=o(e),c=""===a?"."+E(e,0):a,w(o)?(i="",null!=c&&(i=c.replace(T,"$&/")+"/"),P(o,t,i,"",(function(e){return e}))):null!=o&&(C(o)&&(l=o,d=i+(null==o.key||e&&e.key===o.key?"":(""+o.key).replace(T,"$&/")+"/")+c,o=k(l.type,d,void 0,0,0,l.props)),t.push(o)),1;c=0;var u,m=""===a?".":a+":";if(w(e))for(var f=0;f<e.length;f++)c+=P(a=e[f],t,i,s=m+E(a,f),o);else if("function"===typeof(f=null===(u=e)||"object"!==typeof u?null:"function"===typeof(u=p&&u[p]||u["@@iterator"])?u:null))for(e=f.call(e),f=0;!(a=e.next()).done;)c+=P(a=a.value,t,i,s=m+E(a,f++),o);else if("object"===s){if("function"===typeof e.then)return P(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then($,$):(e.status="pending",e.then((function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)}),(function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)}))),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,i,a,o);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return c}function A(e,t,r){if(null==e)return e;var n=[],i=0;return P(e,n,"","",(function(e){return t.call(r,e,i++)})),n}function I(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var z="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function M(){}t.Children={map:A,forEach:function(e,t,r){A(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return A(e,(function(){t++})),t},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=i,t.Profiler=o,t.PureComponent=y,t.StrictMode=a,t.Suspense=c,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,t.act=function(){throw Error("act(...) is not supported in production builds of React.")},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var n=f({},e.props),i=e.key;if(null!=t)for(a in void 0!==t.ref&&void 0,void 0!==t.key&&(i=""+t.key),t)!S.call(t,a)||"key"===a||"__self"===a||"__source"===a||"ref"===a&&void 0===t.ref||(n[a]=t[a]);var a=arguments.length-2;if(1===a)n.children=r;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];n.children=o}return k(e.type,i,void 0,0,0,n)},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:s,_context:e},e},t.createElement=function(e,t,r){var n,i={},a=null;if(null!=t)for(n in void 0!==t.key&&(a=""+t.key),t)S.call(t,n)&&"key"!==n&&"__self"!==n&&"__source"!==n&&(i[n]=t[n]);var o=arguments.length-2;if(1===o)i.children=r;else if(1<o){for(var s=Array(o),l=0;l<o;l++)s[l]=arguments[l+2];i.children=s}if(e&&e.defaultProps)for(n in o=e.defaultProps)void 0===i[n]&&(i[n]=o[n]);return k(e,a,void 0,0,0,i)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=j.T,r={};j.T=r;try{var n=e(),i=j.S;null!==i&&i(r,n),"object"===typeof n&&null!==n&&"function"===typeof n.then&&n.then(M,z)}catch(a){z(a)}finally{j.T=t}},t.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},t.use=function(e){return j.H.use(e)},t.useActionState=function(e,t,r){return j.H.useActionState(e,t,r)},t.useCallback=function(e,t){return j.H.useCallback(e,t)},t.useContext=function(e){return j.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return j.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return j.H.useEffect(e,t)},t.useId=function(){return j.H.useId()},t.useImperativeHandle=function(e,t,r){return j.H.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return j.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return j.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return j.H.useMemo(e,t)},t.useOptimistic=function(e,t){return j.H.useOptimistic(e,t)},t.useReducer=function(e,t,r){return j.H.useReducer(e,t,r)},t.useRef=function(e){return j.H.useRef(e)},t.useState=function(e){return j.H.useState(e)},t.useSyncExternalStore=function(e,t,r){return j.H.useSyncExternalStore(e,t,r)},t.useTransition=function(){return j.H.useTransition()},t.version="19.0.0"},324:e=>{e.exports=function(e,t,r,n){var i=r?r.call(n,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var d=a[l];if(!s(d))return!1;var c=e[d],u=t[d];if(!1===(i=r?r.call(n,c,u,d):void 0)||void 0===i&&c!==u)return!1}return!0}},358:(e,t)=>{"use strict";const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,n=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,s=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function l(e,t,r){do{const r=e.charCodeAt(t);if(32!==r&&9!==r)return t}while(++t<r);return r}function d(e,t,r){for(;t>r;){const r=e.charCodeAt(--t);if(32!==r&&9!==r)return t+1}return r}function c(e){if(-1===e.indexOf("%"))return e;try{return decodeURIComponent(e)}catch(t){return e}}},391:(e,t,r)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=r(4)},579:(e,t,r)=>{"use strict";e.exports=r(799)},672:(e,t,r)=>{"use strict";var n=r(43);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var o={d:{f:a,r:function(){throw Error(i(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},s=Symbol.for("react.portal");var l=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,t.createPortal=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(i(299));return function(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:s,key:null==n?null:""+n,children:e,containerInfo:t,implementation:r}}(e,t,null,r)},t.flushSync=function(e){var t=l.T,r=o.p;try{if(l.T=null,o.p=2,e)return e()}finally{l.T=t,o.p=r,o.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,o.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&o.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var r=t.as,n=d(r,t.crossOrigin),i="string"===typeof t.integrity?t.integrity:void 0,a="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===r?o.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:n,integrity:i,fetchPriority:a}):"script"===r&&o.d.X(e,{crossOrigin:n,integrity:i,fetchPriority:a,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var r=d(t.as,t.crossOrigin);o.d.M(e,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&o.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var r=t.as,n=d(r,t.crossOrigin);o.d.L(e,r,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var r=d(t.as,t.crossOrigin);o.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else o.d.m(e)},t.requestFormReset=function(e){o.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,r){return l.H.useFormState(e,t,r)},t.useFormStatus=function(){return l.H.useHostTransitionStatus()},t.version="19.0.0"},799:(e,t)=>{"use strict";var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(e,t,n){var i=null;if(void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),"key"in t)for(var a in n={},t)"key"!==a&&(n[a]=t[a]);else n=t;return t=n.ref,{$$typeof:r,type:e,key:i,ref:void 0!==t?t:null,props:n}}t.Fragment=n,t.jsx=i,t.jsxs=i},853:(e,t,r)=>{"use strict";e.exports=r(896)},896:(e,t)=>{"use strict";function r(e,t){var r=e.length;e.push(t);e:for(;0<r;){var n=r-1>>>1,i=e[n];if(!(0<a(i,t)))break e;e[n]=t,e[r]=i,r=n}}function n(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,i=e.length,o=i>>>1;n<o;){var s=2*(n+1)-1,l=e[s],d=s+1,c=e[d];if(0>a(l,r))d<i&&0>a(c,l)?(e[n]=c,e[d]=r,n=d):(e[n]=l,e[s]=r,n=s);else{if(!(d<i&&0>a(c,r)))break e;e[n]=c,e[d]=r,n=d}}}return t}function a(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var d=[],c=[],u=1,h=null,p=3,m=!1,f=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,x="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=n(c);null!==t;){if(null===t.callback)i(c);else{if(!(t.startTime<=e))break;i(c),t.sortIndex=t.expirationTime,r(d,t)}t=n(c)}}function w(e){if(g=!1,b(e),!f)if(null!==n(d))f=!0,I();else{var t=n(c);null!==t&&z(w,t.startTime-e)}}var j,S=!1,k=-1,C=5,T=-1;function E(){return!(t.unstable_now()-T<C)}function $(){if(S){var e=t.unstable_now();T=e;var r=!0;try{e:{f=!1,g&&(g=!1,x(k),k=-1),m=!0;var a=p;try{t:{for(b(e),h=n(d);null!==h&&!(h.expirationTime>e&&E());){var o=h.callback;if("function"===typeof o){h.callback=null,p=h.priorityLevel;var s=o(h.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof s){h.callback=s,b(e),r=!0;break t}h===n(d)&&i(d),b(e)}else i(d);h=n(d)}if(null!==h)r=!0;else{var l=n(c);null!==l&&z(w,l.startTime-e),r=!1}}break e}finally{h=null,p=a,m=!1}r=void 0}}finally{r?j():S=!1}}}if("function"===typeof y)j=function(){y($)};else if("undefined"!==typeof MessageChannel){var P=new MessageChannel,A=P.port2;P.port1.onmessage=$,j=function(){A.postMessage(null)}}else j=function(){v($,0)};function I(){S||(S=!0,j())}function z(e,r){k=v((function(){e(t.unstable_now())}),r)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){f||m||(f=!0,I())},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(d)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var r=p;p=t;try{return e()}finally{p=r}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=p;p=e;try{return t()}finally{p=r}},t.unstable_scheduleCallback=function(e,i,a){var o=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?o+a:o:a=o,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:u++,callback:i,priorityLevel:e,startTime:a,expirationTime:s=a+s,sortIndex:-1},a>o?(e.sortIndex=a,r(c,e),null===n(d)&&e===n(c)&&(g?(x(k),k=-1):g=!0,z(w,a-o))):(e.sortIndex=s,r(d,e),f||m||(f=!0,I())),e},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(e){var t=p;return function(){var r=p;p=t;try{return e.apply(this,arguments)}finally{p=r}}}},950:(e,t,r)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=r(672)}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[])),r.u=e=>"static/js/"+e+".3f1110e9.chunk.js",r.miniCssF=e=>{},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="dsa-demos:";r.l=(n,i,a,o)=>{if(e[n])e[n].push(i);else{var s,l;if(void 0!==a)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+a){s=u;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[i];var h=(t,r)=>{s.onerror=s.onload=null,clearTimeout(p);var i=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(r))),t)return t(r)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/visualdsa/",(()=>{var e={792:0};r.f.j=(t,n)=>{var i=r.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var a=new Promise(((r,n)=>i=e[t]=[r,n]));n.push(i[2]=a);var o=r.p+r.u(t),s=new Error;r.l(o,(n=>{if(r.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,i[1](s)}}),"chunk-"+t,t)}};var t=(t,n)=>{var i,a,o=n[0],s=n[1],l=n[2],d=0;if(o.some((t=>0!==e[t]))){for(i in s)r.o(s,i)&&(r.m[i]=s[i]);if(l)l(r)}for(t&&t(n);d<o.length;d++)a=o[d],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0},n=self.webpackChunkdsa_demos=self.webpackChunkdsa_demos||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.nc=void 0,(()=>{"use strict";var e=r(43),t=r(391),n=(r(358),"popstate");function i(){return u((function(e,t){let{pathname:r="/",search:n="",hash:i=""}=c(e.location.hash.substring(1));return r.startsWith("/")||r.startsWith(".")||(r="/"+r),l("",{pathname:r,search:n,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let r=e.document.querySelector("base"),n="";if(r&&r.getAttribute("href")){let t=e.location.href,r=t.indexOf("#");n=-1===r?t:t.slice(0,r)}return n+"#"+("string"===typeof t?t:d(t))}),(function(e,t){o("/"===e.pathname.charAt(0),`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)}),arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function a(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function o(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(r){}}}function s(e,t){return{usr:e.state,key:e.key,idx:t}}function l(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3?arguments[3]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?c(t):t,state:r,key:t&&t.key||n||Math.random().toString(36).substring(2,10)}}function d(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&"?"!==r&&(t+="?"===r.charAt(0)?r:"?"+r),n&&"#"!==n&&(t+="#"===n.charAt(0)?n:"#"+n),t}function c(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function u(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:o=document.defaultView,v5Compat:c=!1}=i,u=o.history,h="POP",p=null,m=f();function f(){return(u.state||{idx:null}).idx}function g(){h="POP";let e=f(),t=null==e?null:e-m;m=e,p&&p({action:h,location:x.location,delta:t})}function v(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,r="string"===typeof e?e:d(e);return r=r.replace(/ $/,"%20"),a(t,`No window.location.(origin|href) available to create URL for href: ${r}`),new URL(r,t)}null==m&&(m=0,u.replaceState({...u.state,idx:m},""));let x={get action(){return h},get location(){return e(o,u)},listen(e){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(n,g),p=e,()=>{o.removeEventListener(n,g),p=null}},createHref:e=>t(o,e),createURL:v,encodeLocation(e){let t=v(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){h="PUSH";let n=l(x.location,e,t);r&&r(n,e),m=f()+1;let i=s(n,m),a=x.createHref(n);try{u.pushState(i,"",a)}catch(d){if(d instanceof DOMException&&"DataCloneError"===d.name)throw d;o.location.assign(a)}c&&p&&p({action:h,location:x.location,delta:1})},replace:function(e,t){h="REPLACE";let n=l(x.location,e,t);r&&r(n,e),m=f();let i=s(n,m),a=x.createHref(n);u.replaceState(i,"",a),c&&p&&p({action:h,location:x.location,delta:0})},go:e=>u.go(e)};return x}new WeakMap;function h(e,t){return p(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function p(e,t,r,n){let i=E(("string"===typeof t?c(t):t).pathname||"/",r);if(null==i)return null;let a=m(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let r=e.length===t.length&&e.slice(0,-1).every(((e,r)=>e===t[r]));return r?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let o=null;for(let s=0;null==o&&s<a.length;++s){let e=T(i);o=k(a[s],e,n)}return o}function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=(e,i,o)=>{let s={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};s.relativePath.startsWith("/")&&(a(s.relativePath.startsWith(n),`Absolute route path "${s.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),s.relativePath=s.relativePath.slice(n.length));let l=z([n,s.relativePath]),d=r.concat(s);e.children&&e.children.length>0&&(a(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),m(e.children,t,d,l)),(null!=e.path||e.index)&&t.push({path:l,score:S(l,e.index),routesMeta:d})};return e.forEach(((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let r of f(e.path))i(e,t,r);else i(e,t)})),t}function f(e){let t=e.split("/");if(0===t.length)return[];let[r,...n]=t,i=r.endsWith("?"),a=r.replace(/\?$/,"");if(0===n.length)return i?[a,""]:[a];let o=f(n.join("/")),s=[];return s.push(...o.map((e=>""===e?a:[a,e].join("/")))),i&&s.push(...o),s.map((t=>e.startsWith("/")&&""===t?"/":t))}var g=/^:[\w-]+$/,v=3,x=2,y=1,b=10,w=-2,j=e=>"*"===e;function S(e,t){let r=e.split("/"),n=r.length;return r.some(j)&&(n+=w),t&&(n+=x),r.filter((e=>!j(e))).reduce(((e,t)=>e+(g.test(t)?v:""===t?y:b)),n)}function k(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:n}=e,i={},a="/",o=[];for(let s=0;s<n.length;++s){let e=n[s],l=s===n.length-1,d="/"===a?t:t.slice(a.length)||"/",c=C({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},d),u=e.route;if(!c&&l&&r&&!n[n.length-1].route.index&&(c=C({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},d)),!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:z([a,c.pathname]),pathnameBase:M(z([a,c.pathnameBase])),route:u}),"/"!==c.pathnameBase&&(a=z([a,c.pathnameBase]))}return o}function C(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];o("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,r)=>(n.push({paramName:t,isOptional:null!=r}),r?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(n.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let a=new RegExp(i,t?void 0:"i");return[a,n]}(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let a=i[0],s=a.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:n.reduce(((e,t,r)=>{let{paramName:n,isOptional:i}=t;if("*"===n){let e=l[r]||"";s=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const o=l[r];return e[n]=i&&!o?void 0:(o||"").replace(/%2F/g,"/"),e}),{}),pathname:a,pathnameBase:s,pattern:e}}function T(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return o(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function E(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&"/"!==n?null:e.slice(r)||"/"}function $(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function P(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function A(e){let t=P(e);return t.map(((e,r)=>r===t.length-1?e.pathname:e.pathnameBase))}function I(e,t,r){let n,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?n=c(e):(n={...e},a(!n.pathname||!n.pathname.includes("?"),$("?","pathname","search",n)),a(!n.pathname||!n.pathname.includes("#"),$("#","pathname","hash",n)),a(!n.search||!n.search.includes("#"),$("#","search","hash",n)));let o,s=""===e||""===n.pathname,l=s?"/":n.pathname;if(null==l)o=r;else{let e=t.length-1;if(!i&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;n.pathname=t.join("/")}o=e>=0?t[e]:"/"}let d=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:r,search:n="",hash:i=""}="string"===typeof e?c(e):e,a=r?r.startsWith("/")?r:function(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?r.length>1&&r.pop():"."!==e&&r.push(e)})),r.length>1?r.join("/"):"/"}(r,t):t;return{pathname:a,search:F(n),hash:R(i)}}(n,o),u=l&&"/"!==l&&l.endsWith("/"),h=(s||"."===l)&&r.endsWith("/");return d.pathname.endsWith("/")||!u&&!h||(d.pathname+="/"),d}var z=e=>e.join("/").replace(/\/\/+/g,"/"),M=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),F=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",R=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function O(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}var N=["POST","PUT","PATCH","DELETE"],L=(new Set(N),["GET",...N]);new Set(L),Symbol("ResetLoaderData");var D=e.createContext(null);D.displayName="DataRouter";var V=e.createContext(null);V.displayName="DataRouterState";var _=e.createContext({isTransitioning:!1});_.displayName="ViewTransition";var B=e.createContext(new Map);B.displayName="Fetchers";var U=e.createContext(null);U.displayName="Await";var H=e.createContext(null);H.displayName="Navigation";var W=e.createContext(null);W.displayName="Location";var q=e.createContext({outlet:null,matches:[],isDataRoute:!1});q.displayName="Route";var K=e.createContext(null);K.displayName="RouteError";function G(){return null!=e.useContext(W)}function Y(){return a(G(),"useLocation() may be used only in the context of a <Router> component."),e.useContext(W).location}var X="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Q(t){e.useContext(H).static||e.useLayoutEffect(t)}function J(){let{isDataRoute:t}=e.useContext(q);return t?function(){let{router:t}=se("useNavigate"),r=de("useNavigate"),n=e.useRef(!1);Q((()=>{n.current=!0}));let i=e.useCallback((async function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(n.current,X),n.current&&("number"===typeof e?t.navigate(e):await t.navigate(e,{fromRouteId:r,...i}))}),[t,r]);return i}():function(){a(G(),"useNavigate() may be used only in the context of a <Router> component.");let t=e.useContext(D),{basename:r,navigator:n}=e.useContext(H),{matches:i}=e.useContext(q),{pathname:s}=Y(),l=JSON.stringify(A(i)),d=e.useRef(!1);Q((()=>{d.current=!0}));let c=e.useCallback((function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o(d.current,X),!d.current)return;if("number"===typeof e)return void n.go(e);let a=I(e,JSON.parse(l),s,"path"===i.relative);null==t&&"/"!==r&&(a.pathname="/"===a.pathname?r:z([r,a.pathname])),(i.replace?n.replace:n.push)(a,i.state,i)}),[r,n,l,s,t]);return c}()}e.createContext(null);function Z(t){let{relative:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:n}=e.useContext(q),{pathname:i}=Y(),a=JSON.stringify(A(n));return e.useMemo((()=>I(t,JSON.parse(a),i,"path"===r)),[t,a,i,r])}function ee(t,r,n,i){a(G(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s,static:l}=e.useContext(H),{matches:d}=e.useContext(q),u=d[d.length-1],p=u?u.params:{},m=u?u.pathname:"/",f=u?u.pathnameBase:"/",g=u&&u.route;{let e=g&&g.path||"";he(m,!g||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let v,x=Y();if(r){let e="string"===typeof r?c(r):r;a("/"===f||e.pathname?.startsWith(f),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${e.pathname}" was given in the \`location\` prop.`),v=e}else v=x;let y=v.pathname||"/",b=y;if("/"!==f){let e=f.replace(/^\//,"").split("/");b="/"+y.replace(/^\//,"").split("/").slice(e.length).join("/")}let w=!l&&n&&n.matches&&n.matches.length>0?n.matches:h(t,{pathname:b});o(g||null!=w,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),o(null==w||void 0!==w[w.length-1].route.element||void 0!==w[w.length-1].route.Component||void 0!==w[w.length-1].route.lazy,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let j=ae(w&&w.map((e=>Object.assign({},e,{params:Object.assign({},p,e.params),pathname:z([f,s.encodeLocation?s.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?f:z([f,s.encodeLocation?s.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),d,n,i);return r&&j?e.createElement(W.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},j):j}function te(){let t=ce(),r=O(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},o={padding:"2px 4px",backgroundColor:i},s=null;return console.error("Error handled by React Router default ErrorBoundary:",t),s=e.createElement(e.Fragment,null,e.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),e.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",e.createElement("code",{style:o},"ErrorBoundary")," or"," ",e.createElement("code",{style:o},"errorElement")," prop on your route.")),e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},r),n?e.createElement("pre",{style:a},n):null,s)}var re=e.createElement(te,null),ne=class extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?e.createElement(q.Provider,{value:this.props.routeContext},e.createElement(K.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ie(t){let{routeContext:r,match:n,children:i}=t,a=e.useContext(D);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),e.createElement(q.Provider,{value:r},i)}function ae(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null==t){if(!n)return null;if(n.errors)t=n.matches;else{if(0!==r.length||n.initialized||!(n.matches.length>0))return null;t=n.matches}}let i=t,o=n?.errors;if(null!=o){let e=i.findIndex((e=>e.route.id&&void 0!==o?.[e.route.id]));a(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,e+1))}let s=!1,l=-1;if(n)for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(l=e),t.route.id){let{loaderData:e,errors:r}=n,a=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!r||void 0===r[t.route.id]);if(t.route.lazy||a){s=!0,i=l>=0?i.slice(0,l+1):[i[0]];break}}}return i.reduceRight(((t,a,d)=>{let c,u=!1,h=null,p=null;n&&(c=o&&a.route.id?o[a.route.id]:void 0,h=a.route.errorElement||re,s&&(l<0&&0===d?(he("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),u=!0,p=null):l===d&&(u=!0,p=a.route.hydrateFallbackElement||null)));let m=r.concat(i.slice(0,d+1)),f=()=>{let r;return r=c?h:u?p:a.route.Component?e.createElement(a.route.Component,null):a.route.element?a.route.element:t,e.createElement(ie,{match:a,routeContext:{outlet:t,matches:m,isDataRoute:null!=n},children:r})};return n&&(a.route.ErrorBoundary||a.route.errorElement||0===d)?e.createElement(ne,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()}),null)}function oe(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function se(t){let r=e.useContext(D);return a(r,oe(t)),r}function le(t){let r=e.useContext(V);return a(r,oe(t)),r}function de(t){let r=function(t){let r=e.useContext(q);return a(r,oe(t)),r}(t),n=r.matches[r.matches.length-1];return a(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function ce(){let t=e.useContext(K),r=le("useRouteError"),n=de("useRouteError");return void 0!==t?t:r.errors?.[n]}var ue={};function he(e,t,r){t||ue[e]||(ue[e]=!0,o(!1,r))}e.memo((function(e){let{routes:t,future:r,state:n}=e;return ee(t,void 0,n,r)}));function pe(e){a(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function me(t){let{basename:r="/",children:n=null,location:i,navigationType:s="POP",navigator:l,static:d=!1}=t;a(!G(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=r.replace(/^\/*/,"/"),h=e.useMemo((()=>({basename:u,navigator:l,static:d,future:{}})),[u,l,d]);"string"===typeof i&&(i=c(i));let{pathname:p="/",search:m="",hash:f="",state:g=null,key:v="default"}=i,x=e.useMemo((()=>{let e=E(p,u);return null==e?null:{location:{pathname:e,search:m,hash:f,state:g,key:v},navigationType:s}}),[u,p,m,f,g,v,s]);return o(null!=x,`<Router basename="${u}"> is not able to match the URL "${p}${m}${f}" because it does not start with the basename, so the <Router> won't render anything.`),null==x?null:e.createElement(H.Provider,{value:h},e.createElement(W.Provider,{children:n,value:x}))}function fe(e){let{children:t,location:r}=e;return ee(ge(t),r)}e.Component;function ge(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[];return e.Children.forEach(t,((t,i)=>{if(!e.isValidElement(t))return;let o=[...r,i];if(t.type===e.Fragment)return void n.push.apply(n,ge(t.props.children,o));a(t.type===pe,`[${"string"===typeof t.type?t.type:t.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),a(!t.props.index||!t.props.children,"An index route cannot have child routes.");let s={id:t.props.id||o.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,hydrateFallbackElement:t.props.hydrateFallbackElement,HydrateFallback:t.props.HydrateFallback,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:!0===t.props.hasErrorBoundary||null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(s.children=ge(t.props.children,o)),n.push(s)})),n}var ve="get",xe="application/x-www-form-urlencoded";function ye(e){return null!=e&&"string"===typeof e.tagName}var be=null;var we=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function je(e){return null==e||we.has(e)?e:(o(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xe}"`),null)}function Se(e,t){let r,n,i,a,o;if(ye(s=e)&&"form"===s.tagName.toLowerCase()){let o=e.getAttribute("action");n=o?E(o,t):null,r=e.getAttribute("method")||ve,i=je(e.getAttribute("enctype"))||xe,a=new FormData(e)}else if(function(e){return ye(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return ye(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let o=e.form;if(null==o)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||o.getAttribute("action");if(n=s?E(s,t):null,r=e.getAttribute("formmethod")||o.getAttribute("method")||ve,i=je(e.getAttribute("formenctype"))||je(o.getAttribute("enctype"))||xe,a=new FormData(o,e),!function(){if(null===be)try{new FormData(document.createElement("form"),0),be=!1}catch(e){be=!0}return be}()){let{name:t,type:r,value:n}=e;if("image"===r){let e=t?`${t}.`:"";a.append(`${e}x`,"0"),a.append(`${e}y`,"0")}else t&&a.append(t,n)}}else{if(ye(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=ve,n=null,i=xe,o=e}var s;return a&&"text/plain"===i&&(o=a,a=void 0),{action:n,method:r.toLowerCase(),encType:i,formData:a,body:o}}function ke(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}async function Ce(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise((()=>{}))}}function Te(e){return null!=e&&"string"===typeof e.page}function Ee(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function $e(e,t,r,n,i,a){let o=(e,t)=>!r[t]||e.route.id!==r[t].route.id,s=(e,t)=>r[t].pathname!==e.pathname||r[t].route.path?.endsWith("*")&&r[t].params["*"]!==e.params["*"];return"assets"===a?t.filter(((e,t)=>o(e,t)||s(e,t))):"data"===a?t.filter(((t,a)=>{let l=n.routes[t.route.id];if(!l||!l.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof n)return n}return!0})):[]}function Pe(e,t){let{includeHydrateFallback:r}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n=e.map((e=>{let n=t.routes[e.route.id];if(!n)return[];let i=[n.module];return n.clientActionModule&&(i=i.concat(n.clientActionModule)),n.clientLoaderModule&&(i=i.concat(n.clientLoaderModule)),r&&n.hydrateFallbackModule&&(i=i.concat(n.hydrateFallbackModule)),n.imports&&(i=i.concat(n.imports)),i})).flat(1),[...new Set(n)];var n}function Ae(e,t){let r=new Set,n=new Set(t);return e.reduce(((e,i)=>{if(t&&!Te(i)&&"script"===i.as&&i.href&&n.has(i.href))return e;let a=JSON.stringify(function(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}(i));return r.has(a)||(r.add(a),e.push({key:a,link:i})),e}),[])}function Ie(e){return{__html:e}}Symbol("SingleFetchRedirect");function ze(e,t){let r="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return"/"===r.pathname?r.pathname="_root.data":t&&"/"===E(r.pathname,t)?r.pathname=`${t.replace(/\/$/,"")}/_root.data`:r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}e.Component;function Me(t){let{error:r,isOutsideRemixApp:n}=t;console.error(r);let i,a=e.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."\n        );\n      '}});if(O(r))return e.createElement(Fe,{title:"Unhandled Thrown Response!"},e.createElement("h1",{style:{fontSize:"24px"}},r.status," ",r.statusText),a);if(r instanceof Error)0;else{let e=null==r?"Unknown Error":"object"===typeof r&&"toString"in r?r.toString():JSON.stringify(r);new Error(e)}return e.createElement(Fe,{title:"Application Error!",isOutsideRemixApp:n},e.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),e.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},i.stack),a)}function Fe(t){let{title:r,renderScripts:n,isOutsideRemixApp:i,children:a}=t,{routeModules:o}=De();return o.root?.Layout&&!i?a:e.createElement("html",{lang:"en"},e.createElement("head",null,e.createElement("meta",{charSet:"utf-8"}),e.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),e.createElement("title",null,r)),e.createElement("body",null,e.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},a,n?e.createElement(qe,null):null)))}function Re(e){return!0===e}function Oe(){let t=e.useContext(D);return ke(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Ne(){let t=e.useContext(V);return ke(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Le=e.createContext(void 0);function De(){let t=e.useContext(Le);return ke(t,"You must render this element inside a <HydratedRouter> element"),t}function Ve(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function _e(e,t,r){if(r&&!We)return[e[0]];if(t){let r=e.findIndex((e=>void 0!==t[e.route.id]));return e.slice(0,r+1)}return e}function Be(t){let{page:r,...n}=t,{router:i}=Oe(),a=e.useMemo((()=>h(i.routes,r,i.basename)),[i.routes,r,i.basename]);return a?e.createElement(He,{page:r,matches:a,...n}):null}function Ue(t){let{manifest:r,routeModules:n}=De(),[i,a]=e.useState([]);return e.useEffect((()=>{let e=!1;return async function(e,t,r){let n=await Promise.all(e.map((async e=>{let n=t.routes[e.route.id];if(n){let e=await Ce(n,r);return e.links?e.links():[]}return[]})));return Ae(n.flat(1).filter(Ee).filter((e=>"stylesheet"===e.rel||"preload"===e.rel)).map((e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"})))}(t,r,n).then((t=>{e||a(t)})),()=>{e=!0}}),[t,r,n]),i}function He(t){let{page:r,matches:n,...i}=t,a=Y(),{manifest:o,routeModules:s}=De(),{basename:l}=Oe(),{loaderData:d,matches:c}=Ne(),u=e.useMemo((()=>$e(r,n,c,o,a,"data")),[r,n,c,o,a]),h=e.useMemo((()=>$e(r,n,c,o,a,"assets")),[r,n,c,o,a]),p=e.useMemo((()=>{if(r===a.pathname+a.search+a.hash)return[];let e=new Set,t=!1;if(n.forEach((r=>{let n=o.routes[r.route.id];n&&n.hasLoader&&(!u.some((e=>e.route.id===r.route.id))&&r.route.id in d&&s[r.route.id]?.shouldRevalidate||n.hasClientLoader?t=!0:e.add(r.route.id))})),0===e.size)return[];let i=ze(r,l);return t&&e.size>0&&i.searchParams.set("_routes",n.filter((t=>e.has(t.route.id))).map((e=>e.route.id)).join(",")),[i.pathname+i.search]}),[l,d,a,o,u,n,r,s]),m=e.useMemo((()=>Pe(h,o)),[h,o]),f=Ue(h);return e.createElement(e.Fragment,null,p.map((t=>e.createElement("link",{key:t,rel:"prefetch",as:"fetch",href:t,...i}))),m.map((t=>e.createElement("link",{key:t,rel:"modulepreload",href:t,...i}))),f.map((t=>{let{key:r,link:n}=t;return e.createElement("link",{key:r,...n})})))}Le.displayName="FrameworkContext";var We=!1;function qe(t){let{manifest:r,serverHandoffString:n,isSpaMode:i,ssr:a,renderMeta:o}=De(),{router:s,static:l,staticContext:d}=Oe(),{matches:c}=Ne(),u=Re(a);o&&(o.didRenderScripts=!0);let p=_e(c,null,i);e.useEffect((()=>{0}),[]);let m=e.useMemo((()=>{let i=d?`window.__reactRouterContext = ${n};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",a=l?`${r.hmr?.runtime?`import ${JSON.stringify(r.hmr.runtime)};`:""}${u?"":`import ${JSON.stringify(r.url)}`};\n${p.map(((e,t)=>{let n=`route${t}`,i=r.routes[e.route.id];ke(i,`Route ${e.route.id} not found in manifest`);let{clientActionModule:a,clientLoaderModule:o,hydrateFallbackModule:s,module:l}=i,d=[...a?[{module:a,varName:`${n}_clientAction`}]:[],...o?[{module:o,varName:`${n}_clientLoader`}]:[],...s?[{module:s,varName:`${n}_HydrateFallback`}]:[],{module:l,varName:`${n}_main`}];return 1===d.length?`import * as ${n} from ${JSON.stringify(l)};`:[d.map((e=>`import * as ${e.varName} from "${e.module}";`)).join("\n"),`const ${n} = {${d.map((e=>`...${e.varName}`)).join(",")}};`].join("\n")})).join("\n")}\n  ${u?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let r=new Set(t.state.matches.map((e=>e.route.id))),n=t.state.location.pathname.split("/").filter(Boolean),i=["/"];for(n.pop();n.length>0;)i.push(`/${n.join("/")}`),n.pop();i.forEach((e=>{let n=h(t.routes,e,t.basename);n&&n.forEach((e=>r.add(e.route.id)))}));let a=[...r].reduce(((t,r)=>Object.assign(t,{[r]:e.routes[r]})),{});return{...e,routes:a}}(r,s),null,2)};`:""}\n  window.__reactRouterRouteModules = {${p.map(((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`)).join(",")}};\n\nimport(${JSON.stringify(r.entry.module)});`:" ";return e.createElement(e.Fragment,null,e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Ie(i),type:void 0}),e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Ie(a),type:"module",async:!0}))}),[]),f=We?[]:r.entry.imports.concat(Pe(p,r,{includeHydrateFallback:!0}));return We?null:e.createElement(e.Fragment,null,u?null:e.createElement("link",{rel:"modulepreload",href:r.url,crossOrigin:t.crossOrigin}),e.createElement("link",{rel:"modulepreload",href:r.entry.module,crossOrigin:t.crossOrigin}),[...new Set(g)].map((r=>e.createElement("link",{key:r,rel:"modulepreload",href:r,crossOrigin:t.crossOrigin}))),m);var g}function Ke(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return e=>{t.forEach((t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)}))}}var Ge="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{Ge&&(window.__reactRouterVersion="7.3.0")}catch(Nz){}function Ye(t){let{basename:r,children:n,window:a}=t,o=e.useRef();null==o.current&&(o.current=i({window:a,v5Compat:!0}));let s=o.current,[l,d]=e.useState({action:s.action,location:s.location}),c=e.useCallback((t=>{e.startTransition((()=>d(t)))}),[d]);return e.useLayoutEffect((()=>s.listen(c)),[s,c]),e.createElement(me,{basename:r,children:n,location:l.location,navigationType:l.action,navigator:s})}var Xe=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qe=e.forwardRef((function(t,r){let n,{onClick:i,discover:s="render",prefetch:l="none",relative:c,reloadDocument:u,replace:h,state:p,target:m,to:f,preventScrollReset:g,viewTransition:v,...x}=t,{basename:y}=e.useContext(H),b="string"===typeof f&&Xe.test(f),w=!1;if("string"===typeof f&&b&&(n=f,Ge))try{let e=new URL(window.location.href),t=f.startsWith("//")?new URL(e.protocol+f):new URL(f),r=E(t.pathname,y);t.origin===e.origin&&null!=r?f=r+t.search+t.hash:w=!0}catch(Nz){o(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let j=function(t){let{relative:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(G(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=e.useContext(H),{hash:o,pathname:s,search:l}=Z(t,{relative:r}),d=s;return"/"!==n&&(d="/"===s?n:z([n,s])),i.createHref({pathname:d,search:l,hash:o})}(f,{relative:c}),[S,k,C]=function(t,r){let n=e.useContext(Le),[i,a]=e.useState(!1),[o,s]=e.useState(!1),{onFocus:l,onBlur:d,onMouseEnter:c,onMouseLeave:u,onTouchStart:h}=r,p=e.useRef(null);e.useEffect((()=>{if("render"===t&&s(!0),"viewport"===t){let e=new IntersectionObserver((e=>{e.forEach((e=>{s(e.isIntersecting)}))}),{threshold:.5});return p.current&&e.observe(p.current),()=>{e.disconnect()}}}),[t]),e.useEffect((()=>{if(i){let e=setTimeout((()=>{s(!0)}),100);return()=>{clearTimeout(e)}}}),[i]);let m=()=>{a(!0)},f=()=>{a(!1),s(!1)};return n?"intent"!==t?[o,p,{}]:[o,p,{onFocus:Ve(l,m),onBlur:Ve(d,f),onMouseEnter:Ve(c,m),onMouseLeave:Ve(u,f),onTouchStart:Ve(h,m)}]:[!1,p,{}]}(l,x),T=function(t){let{target:r,replace:n,state:i,preventScrollReset:a,relative:o,viewTransition:s}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=J(),c=Y(),u=Z(t,{relative:o});return e.useCallback((e=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(e,r)){e.preventDefault();let r=void 0!==n?n:d(c)===d(u);l(t,{replace:r,state:i,preventScrollReset:a,relative:o,viewTransition:s})}}),[c,l,u,n,i,r,t,a,o,s])}(f,{replace:h,state:p,target:m,preventScrollReset:g,relative:c,viewTransition:v});let $=e.createElement("a",{...x,...C,href:n||j,onClick:w||u?i:function(e){i&&i(e),e.defaultPrevented||T(e)},ref:Ke(r,k),target:m,"data-discover":b||"render"!==s?void 0:"true"});return S&&!b?e.createElement(e.Fragment,null,$,e.createElement(Be,{page:j})):$}));Qe.displayName="Link";var Je=e.forwardRef((function(t,r){let{"aria-current":n="page",caseSensitive:i=!1,className:o="",end:s=!1,style:l,to:d,viewTransition:c,children:u,...h}=t,p=Z(d,{relative:h.relative}),m=Y(),f=e.useContext(V),{navigator:g,basename:v}=e.useContext(H),x=null!=f&&function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.useContext(_);a(null!=n,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=tt("useViewTransitionState"),o=Z(t,{relative:r.relative});if(!n.isTransitioning)return!1;let s=E(n.currentLocation.pathname,i)||n.currentLocation.pathname,l=E(n.nextLocation.pathname,i)||n.nextLocation.pathname;return null!=C(o.pathname,l)||null!=C(o.pathname,s)}(p)&&!0===c,y=g.encodeLocation?g.encodeLocation(p).pathname:p.pathname,b=m.pathname,w=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;i||(b=b.toLowerCase(),w=w?w.toLowerCase():null,y=y.toLowerCase()),w&&v&&(w=E(w,v)||w);const j="/"!==y&&y.endsWith("/")?y.length-1:y.length;let S,k=b===y||!s&&b.startsWith(y)&&"/"===b.charAt(j),T=null!=w&&(w===y||!s&&w.startsWith(y)&&"/"===w.charAt(y.length)),$={isActive:k,isPending:T,isTransitioning:x},P=k?n:void 0;S="function"===typeof o?o($):[o,k?"active":null,T?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let A="function"===typeof l?l($):l;return e.createElement(Qe,{...h,"aria-current":P,className:S,ref:r,style:A,to:d,viewTransition:c},"function"===typeof u?u($):u)}));Je.displayName="NavLink";var Ze=e.forwardRef(((t,r)=>{let{discover:n="render",fetcherKey:i,navigate:o,reloadDocument:s,replace:l,state:c,method:u=ve,action:h,onSubmit:p,relative:m,preventScrollReset:f,viewTransition:g,...v}=t,x=it(),y=function(t){let{relative:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:n}=e.useContext(H),i=e.useContext(q);a(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),s={...Z(t||".",{relative:r})},l=Y();if(null==t){s.search=l.search;let e=new URLSearchParams(s.search),t=e.getAll("index"),r=t.some((e=>""===e));if(r){e.delete("index"),t.filter((e=>e)).forEach((t=>e.append("index",t)));let r=e.toString();s.search=r?`?${r}`:""}}t&&"."!==t||!o.route.index||(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index");"/"!==n&&(s.pathname="/"===s.pathname?n:z([n,s.pathname]));return d(s)}(h,{relative:m}),b="get"===u.toLowerCase()?"get":"post",w="string"===typeof h&&Xe.test(h);return e.createElement("form",{ref:r,method:b,action:y,onSubmit:s?p:e=>{if(p&&p(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,r=t?.getAttribute("formmethod")||u;x(t||e.currentTarget,{fetcherKey:i,method:r,navigate:o,replace:l,state:c,relative:m,preventScrollReset:f,viewTransition:g})},...v,"data-discover":w||"render"!==n?void 0:"true"})}));function et(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tt(t){let r=e.useContext(D);return a(r,et(t)),r}Ze.displayName="Form";var rt=0,nt=()=>`__${String(++rt)}__`;function it(){let{router:t}=tt("useSubmit"),{basename:r}=e.useContext(H),n=de("useRouteId");return e.useCallback((async function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:a,method:o,encType:s,formData:l,body:d}=Se(e,r);if(!1===i.navigate){let e=i.fetcherKey||nt();await t.fetch(e,n,i.action||a,{preventScrollReset:i.preventScrollReset,formData:l,body:d,formMethod:i.method||o,formEncType:i.encType||s,flushSync:i.flushSync})}else await t.navigate(i.action||a,{preventScrollReset:i.preventScrollReset,formData:l,body:d,formMethod:i.method||o,formEncType:i.encType||s,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})}),[t,r,n])}new TextEncoder;var at=function(){return at=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},at.apply(this,arguments)};Object.create;function ot(e,t,r){if(r||2===arguments.length)for(var n,i=0,a=t.length;i<a;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var st=r(324),lt=r.n(st),dt="-ms-",ct="-moz-",ut="-webkit-",ht="comm",pt="rule",mt="decl",ft="@keyframes",gt=Math.abs,vt=String.fromCharCode,xt=Object.assign;function yt(e){return e.trim()}function bt(e,t){return(e=t.exec(e))?e[0]:e}function wt(e,t,r){return e.replace(t,r)}function jt(e,t,r){return e.indexOf(t,r)}function St(e,t){return 0|e.charCodeAt(t)}function kt(e,t,r){return e.slice(t,r)}function Ct(e){return e.length}function Tt(e){return e.length}function Et(e,t){return t.push(e),e}function $t(e,t){return e.filter((function(e){return!bt(e,t)}))}var Pt=1,At=1,It=0,zt=0,Mt=0,Ft="";function Rt(e,t,r,n,i,a,o,s){return{value:e,root:t,parent:r,type:n,props:i,children:a,line:Pt,column:At,length:o,return:"",siblings:s}}function Ot(e,t){return xt(Rt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Nt(e){for(;e.root;)e=Ot(e.root,{children:[e]});Et(e,e.siblings)}function Lt(){return Mt=zt>0?St(Ft,--zt):0,At--,10===Mt&&(At=1,Pt--),Mt}function Dt(){return Mt=zt<It?St(Ft,zt++):0,At++,10===Mt&&(At=1,Pt++),Mt}function Vt(){return St(Ft,zt)}function _t(){return zt}function Bt(e,t){return kt(Ft,e,t)}function Ut(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ht(e){return Pt=At=1,It=Ct(Ft=e),zt=0,[]}function Wt(e){return Ft="",e}function qt(e){return yt(Bt(zt-1,Yt(91===e?e+2:40===e?e+1:e)))}function Kt(e){for(;(Mt=Vt())&&Mt<33;)Dt();return Ut(e)>2||Ut(Mt)>3?"":" "}function Gt(e,t){for(;--t&&Dt()&&!(Mt<48||Mt>102||Mt>57&&Mt<65||Mt>70&&Mt<97););return Bt(e,_t()+(t<6&&32==Vt()&&32==Dt()))}function Yt(e){for(;Dt();)switch(Mt){case e:return zt;case 34:case 39:34!==e&&39!==e&&Yt(Mt);break;case 40:41===e&&Yt(e);break;case 92:Dt()}return zt}function Xt(e,t){for(;Dt()&&e+Mt!==57&&(e+Mt!==84||47!==Vt()););return"/*"+Bt(t,zt-1)+"*"+vt(47===e?e:Dt())}function Qt(e){for(;!Ut(Vt());)Dt();return Bt(e,zt)}function Jt(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Zt(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case mt:return e.return=e.return||e.value;case ht:return"";case ft:return e.return=e.value+"{"+Jt(e.children,n)+"}";case pt:if(!Ct(e.value=e.props.join(",")))return""}return Ct(r=Jt(e.children,n))?e.return=e.value+"{"+r+"}":""}function er(e,t,r){switch(function(e,t){return 45^St(e,0)?(((t<<2^St(e,0))<<2^St(e,1))<<2^St(e,2))<<2^St(e,3):0}(e,t)){case 5103:return ut+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ut+e+e;case 4789:return ct+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ut+e+ct+e+dt+e+e;case 5936:switch(St(e,t+11)){case 114:return ut+e+dt+wt(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ut+e+dt+wt(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ut+e+dt+wt(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ut+e+dt+e+e;case 6165:return ut+e+dt+"flex-"+e+e;case 5187:return ut+e+wt(e,/(\w+).+(:[^]+)/,ut+"box-$1$2"+dt+"flex-$1$2")+e;case 5443:return ut+e+dt+"flex-item-"+wt(e,/flex-|-self/g,"")+(bt(e,/flex-|baseline/)?"":dt+"grid-row-"+wt(e,/flex-|-self/g,""))+e;case 4675:return ut+e+dt+"flex-line-pack"+wt(e,/align-content|flex-|-self/g,"")+e;case 5548:return ut+e+dt+wt(e,"shrink","negative")+e;case 5292:return ut+e+dt+wt(e,"basis","preferred-size")+e;case 6060:return ut+"box-"+wt(e,"-grow","")+ut+e+dt+wt(e,"grow","positive")+e;case 4554:return ut+wt(e,/([^-])(transform)/g,"$1"+ut+"$2")+e;case 6187:return wt(wt(wt(e,/(zoom-|grab)/,ut+"$1"),/(image-set)/,ut+"$1"),e,"")+e;case 5495:case 3959:return wt(e,/(image-set\([^]*)/,ut+"$1$`$1");case 4968:return wt(wt(e,/(.+:)(flex-)?(.*)/,ut+"box-pack:$3"+dt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ut+e+e;case 4200:if(!bt(e,/flex-|baseline/))return dt+"grid-column-align"+kt(e,t)+e;break;case 2592:case 3360:return dt+wt(e,"template-","")+e;case 4384:case 3616:return r&&r.some((function(e,r){return t=r,bt(e.props,/grid-\w+-end/)}))?~jt(e+(r=r[t].value),"span",0)?e:dt+wt(e,"-start","")+e+dt+"grid-row-span:"+(~jt(r,"span",0)?bt(r,/\d+/):+bt(r,/\d+/)-+bt(e,/\d+/))+";":dt+wt(e,"-start","")+e;case 4896:case 4128:return r&&r.some((function(e){return bt(e.props,/grid-\w+-start/)}))?e:dt+wt(wt(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return wt(e,/(.+)-inline(.+)/,ut+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ct(e)-1-t>6)switch(St(e,t+1)){case 109:if(45!==St(e,t+4))break;case 102:return wt(e,/(.+:)(.+)-([^]+)/,"$1"+ut+"$2-$3$1"+ct+(108==St(e,t+3)?"$3":"$2-$3"))+e;case 115:return~jt(e,"stretch",0)?er(wt(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return wt(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,r,n,i,a,o,s){return dt+r+":"+n+s+(i?dt+r+"-span:"+(a?o:+o-+n)+s:"")+e}));case 4949:if(121===St(e,t+6))return wt(e,":",":"+ut)+e;break;case 6444:switch(St(e,45===St(e,14)?18:11)){case 120:return wt(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ut+(45===St(e,14)?"inline-":"")+"box$3$1"+ut+"$2$3$1"+dt+"$2box$3")+e;case 100:return wt(e,":",":"+dt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return wt(e,"scroll-","scroll-snap-")+e}return e}function tr(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case mt:return void(e.return=er(e.value,e.length,r));case ft:return Jt([Ot(e,{value:wt(e.value,"@","@"+ut)})],n);case pt:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,(function(t){switch(bt(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Nt(Ot(e,{props:[wt(t,/:(read-\w+)/,":-moz-$1")]})),Nt(Ot(e,{props:[t]})),xt(e,{props:$t(r,n)});break;case"::placeholder":Nt(Ot(e,{props:[wt(t,/:(plac\w+)/,":"+ut+"input-$1")]})),Nt(Ot(e,{props:[wt(t,/:(plac\w+)/,":-moz-$1")]})),Nt(Ot(e,{props:[wt(t,/:(plac\w+)/,dt+"input-$1")]})),Nt(Ot(e,{props:[t]})),xt(e,{props:$t(r,n)})}return""}))}}function rr(e){return Wt(nr("",null,null,null,[""],e=Ht(e),0,[0],e))}function nr(e,t,r,n,i,a,o,s,l){for(var d=0,c=0,u=o,h=0,p=0,m=0,f=1,g=1,v=1,x=0,y="",b=i,w=a,j=n,S=y;g;)switch(m=x,x=Dt()){case 40:if(108!=m&&58==St(S,u-1)){-1!=jt(S+=wt(qt(x),"&","&\f"),"&\f",gt(d?s[d-1]:0))&&(v=-1);break}case 34:case 39:case 91:S+=qt(x);break;case 9:case 10:case 13:case 32:S+=Kt(m);break;case 92:S+=Gt(_t()-1,7);continue;case 47:switch(Vt()){case 42:case 47:Et(ar(Xt(Dt(),_t()),t,r,l),l);break;default:S+="/"}break;case 123*f:s[d++]=Ct(S)*v;case 125*f:case 59:case 0:switch(x){case 0:case 125:g=0;case 59+c:-1==v&&(S=wt(S,/\f/g,"")),p>0&&Ct(S)-u&&Et(p>32?or(S+";",n,r,u-1,l):or(wt(S," ","")+";",n,r,u-2,l),l);break;case 59:S+=";";default:if(Et(j=ir(S,t,r,d,c,i,s,y,b=[],w=[],u,a),a),123===x)if(0===c)nr(S,t,j,j,b,a,u,s,w);else switch(99===h&&110===St(S,3)?100:h){case 100:case 108:case 109:case 115:nr(e,j,j,n&&Et(ir(e,j,j,0,0,i,s,y,i,b=[],u,w),w),i,w,u,s,n?b:w);break;default:nr(S,j,j,j,[""],w,0,s,w)}}d=c=p=0,f=v=1,y=S="",u=o;break;case 58:u=1+Ct(S),p=m;default:if(f<1)if(123==x)--f;else if(125==x&&0==f++&&125==Lt())continue;switch(S+=vt(x),x*f){case 38:v=c>0?1:(S+="\f",-1);break;case 44:s[d++]=(Ct(S)-1)*v,v=1;break;case 64:45===Vt()&&(S+=qt(Dt())),h=Vt(),c=u=Ct(y=S+=Qt(_t())),x++;break;case 45:45===m&&2==Ct(S)&&(f=0)}}return a}function ir(e,t,r,n,i,a,o,s,l,d,c,u){for(var h=i-1,p=0===i?a:[""],m=Tt(p),f=0,g=0,v=0;f<n;++f)for(var x=0,y=kt(e,h+1,h=gt(g=o[f])),b=e;x<m;++x)(b=yt(g>0?p[x]+" "+y:wt(y,/&\f/g,p[x])))&&(l[v++]=b);return Rt(e,t,r,0===i?pt:s,l,d,c,u)}function ar(e,t,r,n){return Rt(e,t,r,ht,vt(Mt),kt(e,2,-2),0,n)}function or(e,t,r,n,i){return Rt(e,t,r,mt,kt(e,0,n),kt(e,n+1,-1),n,i)}var sr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},lr="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/visualdsa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/visualdsa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/visualdsa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",dr="active",cr="data-styled-version",ur="6.1.16",hr="/*!sc*/\n",pr="undefined"!=typeof window&&"HTMLElement"in window,mr=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/visualdsa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/visualdsa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/visualdsa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/visualdsa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/visualdsa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/visualdsa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/visualdsa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/visualdsa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/visualdsa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/visualdsa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),fr={},gr=(new Set,Object.freeze([])),vr=Object.freeze({});function xr(e,t,r){return void 0===r&&(r=vr),e.theme!==r.theme&&e.theme||t||r.theme}var yr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),br=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,wr=/(^-|-$)/g;function jr(e){return e.replace(br,"-").replace(wr,"")}var Sr=/(a)(d)/gi,kr=function(e){return String.fromCharCode(e+(e>25?39:97))};function Cr(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=kr(t%52)+r;return(kr(t%52)+r).replace(Sr,"$1-$2")}var Tr,Er=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},$r=function(e){return Er(5381,e)};function Pr(e){return Cr($r(e)>>>0)}function Ar(e){return e.displayName||e.name||"Component"}function Ir(e){return"string"==typeof e&&!0}var zr="function"==typeof Symbol&&Symbol.for,Mr=zr?Symbol.for("react.memo"):60115,Fr=zr?Symbol.for("react.forward_ref"):60112,Rr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Or={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Nr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Lr=((Tr={})[Fr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tr[Mr]=Nr,Tr);function Dr(e){return("type"in(t=e)&&t.type.$$typeof)===Mr?Nr:"$$typeof"in e?Lr[e.$$typeof]:Rr;var t}var Vr=Object.defineProperty,_r=Object.getOwnPropertyNames,Br=Object.getOwnPropertySymbols,Ur=Object.getOwnPropertyDescriptor,Hr=Object.getPrototypeOf,Wr=Object.prototype;function qr(e,t,r){if("string"!=typeof t){if(Wr){var n=Hr(t);n&&n!==Wr&&qr(e,n,r)}var i=_r(t);Br&&(i=i.concat(Br(t)));for(var a=Dr(e),o=Dr(t),s=0;s<i.length;++s){var l=i[s];if(!(l in Or||r&&r[l]||o&&l in o||a&&l in a)){var d=Ur(t,l);try{Vr(e,l,d)}catch(e){}}}}return e}function Kr(e){return"function"==typeof e}function Gr(e){return"object"==typeof e&&"styledComponentId"in e}function Yr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Xr(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Qr(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Jr(e,t,r){if(void 0===r&&(r=!1),!r&&!Qr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Jr(e[n],t[n]);else if(Qr(t))for(var n in t)e[n]=Jr(e[n],t[n]);return e}function Zr(e,t){Object.defineProperty(e,"toString",{value:t})}function en(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var tn=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,i=n;e>=i;)if((i<<=1)<0)throw en(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=n;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=(a=0,t.length);a<s;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var i=r;i<n;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),i=n+r,a=n;a<i;a++)t+="".concat(this.tag.getRule(a)).concat(hr);return t},e}(),rn=new Map,nn=new Map,an=1,on=function(e){if(rn.has(e))return rn.get(e);for(;nn.has(an);)an++;var t=an++;return rn.set(e,t),nn.set(t,e),t},sn=function(e,t){an=t+1,rn.set(e,t),nn.set(t,e)},ln="style[".concat(lr,"][").concat(cr,'="').concat(ur,'"]'),dn=new RegExp("^".concat(lr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),cn=function(e,t,r){for(var n,i=r.split(","),a=0,o=i.length;a<o;a++)(n=i[a])&&e.registerName(t,n)},un=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split(hr),i=[],a=0,o=n.length;a<o;a++){var s=n[a].trim();if(s){var l=s.match(dn);if(l){var d=0|parseInt(l[1],10),c=l[2];0!==d&&(sn(c,d),cn(e,c,l[3]),e.getTag().insertRules(d,i)),i.length=0}else i.push(s)}}},hn=function(e){for(var t=document.querySelectorAll(ln),r=0,n=t.length;r<n;r++){var i=t[r];i&&i.getAttribute(lr)!==dr&&(un(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function pn(){return r.nc}var mn=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(lr,"]")));return t[t.length-1]}(r),a=void 0!==i?i.nextSibling:null;n.setAttribute(lr,dr),n.setAttribute(cr,ur);var o=pn();return o&&n.setAttribute("nonce",o),r.insertBefore(n,a),n},fn=function(){function e(e){this.element=mn(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var i=t[r];if(i.ownerNode===e)return i}throw en(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),gn=function(){function e(e){this.element=mn(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),vn=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),xn=pr,yn={isServer:!pr,useCSSOMInjection:!mr},bn=function(){function e(e,t,r){void 0===e&&(e=vr),void 0===t&&(t={});var n=this;this.options=at(at({},yn),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&pr&&xn&&(xn=!1,hn(this)),Zr(this,(function(){return function(e){for(var t=e.getTag(),r=t.length,n="",i=function(r){var i=function(e){return nn.get(e)}(r);if(void 0===i)return"continue";var a=e.names.get(i),o=t.getGroup(r);if(void 0===a||!a.size||0===o.length)return"continue";var s="".concat(lr,".g").concat(r,'[id="').concat(i,'"]'),l="";void 0!==a&&a.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),n+="".concat(o).concat(s,'{content:"').concat(l,'"}').concat(hr)},a=0;a<r;a++)i(a);return n}(n)}))}return e.registerId=function(e){return on(e)},e.prototype.rehydrate=function(){!this.server&&pr&&hn(this)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(at(at({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,r=e.target;return e.isServer?new vn(r):t?new fn(r):new gn(r)}(this.options),new tn(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(on(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(on(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(on(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),wn=/&/g,jn=/^\s*\/\/.*$/gm;function Sn(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Sn(e.children,t)),e}))}function kn(e){var t,r,n,i=void 0===e?vr:e,a=i.options,o=void 0===a?vr:a,s=i.plugins,l=void 0===s?gr:s,d=function(e,n,i){return i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,"").length>0?".".concat(t):e},c=l.slice();c.push((function(e){e.type===pt&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(wn,r).replace(n,d))})),o.prefix&&c.push(tr),c.push(Zt);var u=function(e,i,a,s){void 0===i&&(i=""),void 0===a&&(a=""),void 0===s&&(s="&"),t=s,r=i,n=new RegExp("\\".concat(r,"\\b"),"g");var l=e.replace(jn,""),d=rr(a||i?"".concat(a," ").concat(i," { ").concat(l," }"):l);o.namespace&&(d=Sn(d,o.namespace));var u,h=[];return Jt(d,function(e){var t=Tt(e);return function(r,n,i,a){for(var o="",s=0;s<t;s++)o+=e[s](r,n,i,a)||"";return o}}(c.concat((u=function(e){return h.push(e)},function(e){e.root||(e=e.return)&&u(e)})))),h};return u.hash=l.length?l.reduce((function(e,t){return t.name||en(15),Er(e,t.name)}),5381).toString():"",u}var Cn=new bn,Tn=kn(),En=e.createContext({shouldForwardProp:void 0,styleSheet:Cn,stylis:Tn}),$n=(En.Consumer,e.createContext(void 0));function Pn(){return(0,e.useContext)(En)}function An(t){var r=(0,e.useState)(t.stylisPlugins),n=r[0],i=r[1],a=Pn().styleSheet,o=(0,e.useMemo)((function(){var e=a;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,a]),s=(0,e.useMemo)((function(){return kn({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:n})}),[t.enableVendorPrefixes,t.namespace,n]);(0,e.useEffect)((function(){lt()(n,t.stylisPlugins)||i(t.stylisPlugins)}),[t.stylisPlugins]);var l=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:o,stylis:s}}),[t.shouldForwardProp,o,s]);return e.createElement(En.Provider,{value:l},e.createElement($n.Provider,{value:s},t.children))}var In=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=Tn);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Zr(this,(function(){throw en(12,String(r.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Tn),this.name+e.hash},e}(),zn=function(e){return e>="A"&&e<="Z"};function Mn(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;zn(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Fn=function(e){return null==e||!1===e||""===e},Rn=function(e){var t,r,n=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!Fn(a)&&(Array.isArray(a)&&a.isCss||Kr(a)?n.push("".concat(Mn(i),":"),a,";"):Qr(a)?n.push.apply(n,ot(ot(["".concat(i," {")],Rn(a),!1),["}"],!1)):n.push("".concat(Mn(i),": ").concat((t=i,null==(r=a)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in sr||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function On(e,t,r,n){return Fn(e)?[]:Gr(e)?[".".concat(e.styledComponentId)]:Kr(e)?!Kr(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:On(e(t),t,r,n):e instanceof In?r?(e.inject(r,n),[e.getName(n)]):[e]:Qr(e)?Rn(e):Array.isArray(e)?Array.prototype.concat.apply(gr,e.map((function(e){return On(e,t,r,n)}))):[e.toString()];var i}function Nn(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Kr(r)&&!Gr(r))return!1}return!0}var Ln=$r(ur),Dn=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&Nn(e),this.componentId=t,this.baseHash=Er(Ln,t),this.baseStyle=r,bn.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=Yr(n,this.staticRulesId);else{var i=Xr(On(this.rules,e,t,r)),a=Cr(Er(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=r(i,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,o)}n=Yr(n,a),this.staticRulesId=a}else{for(var s=Er(this.baseHash,r.hash),l="",d=0;d<this.rules.length;d++){var c=this.rules[d];if("string"==typeof c)l+=c;else if(c){var u=Xr(On(c,e,t,r));s=Er(s,u+d),l+=u}}if(l){var h=Cr(s>>>0);t.hasNameForId(this.componentId,h)||t.insertRules(this.componentId,h,r(l,".".concat(h),void 0,this.componentId)),n=Yr(n,h)}}return n},e}(),Vn=e.createContext(void 0);Vn.Consumer;var _n={};new Set;function Bn(t,r,n){var i=Gr(t),a=t,o=!Ir(t),s=r.attrs,l=void 0===s?gr:s,d=r.componentId,c=void 0===d?function(e,t){var r="string"!=typeof e?"sc":jr(e);_n[r]=(_n[r]||0)+1;var n="".concat(r,"-").concat(Pr(ur+r+_n[r]));return t?"".concat(t,"-").concat(n):n}(r.displayName,r.parentComponentId):d,u=r.displayName,h=void 0===u?function(e){return Ir(e)?"styled.".concat(e):"Styled(".concat(Ar(e),")")}(t):u,p=r.displayName&&r.componentId?"".concat(jr(r.displayName),"-").concat(r.componentId):r.componentId||c,m=i&&a.attrs?a.attrs.concat(l).filter(Boolean):l,f=r.shouldForwardProp;if(i&&a.shouldForwardProp){var g=a.shouldForwardProp;if(r.shouldForwardProp){var v=r.shouldForwardProp;f=function(e,t){return g(e,t)&&v(e,t)}}else f=g}var x=new Dn(n,p,i?a.componentStyle:void 0);function y(t,r){return function(t,r,n){var i=t.attrs,a=t.componentStyle,o=t.defaultProps,s=t.foldedComponentIds,l=t.styledComponentId,d=t.target,c=e.useContext(Vn),u=Pn(),h=t.shouldForwardProp||u.shouldForwardProp,p=xr(r,c,o)||vr,m=function(e,t,r){for(var n,i=at(at({},t),{className:void 0,theme:r}),a=0;a<e.length;a+=1){var o=Kr(n=e[a])?n(i):n;for(var s in o)i[s]="className"===s?Yr(i[s],o[s]):"style"===s?at(at({},i[s]),o[s]):o[s]}return t.className&&(i.className=Yr(i.className,t.className)),i}(i,r,p),f=m.as||d,g={};for(var v in m)void 0===m[v]||"$"===v[0]||"as"===v||"theme"===v&&m.theme===p||("forwardedAs"===v?g.as=m.forwardedAs:h&&!h(v,f)||(g[v]=m[v]));var x=function(e,t){var r=Pn();return e.generateAndInjectStyles(t,r.styleSheet,r.stylis)}(a,m),y=Yr(s,l);return x&&(y+=" "+x),m.className&&(y+=" "+m.className),g[Ir(f)&&!yr.has(f)?"class":"className"]=y,n&&(g.ref=n),(0,e.createElement)(f,g)}(b,t,r)}y.displayName=h;var b=e.forwardRef(y);return b.attrs=m,b.componentStyle=x,b.displayName=h,b.shouldForwardProp=f,b.foldedComponentIds=i?Yr(a.foldedComponentIds,a.styledComponentId):"",b.styledComponentId=p,b.target=i?a.target:t,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0,i=t;n<i.length;n++)Jr(e,i[n],!0);return e}({},a.defaultProps,e):e}}),Zr(b,(function(){return".".concat(b.styledComponentId)})),o&&qr(b,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function Un(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r}var Hn=function(e){return Object.assign(e,{isCss:!0})};function Wn(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Kr(e)||Qr(e))return Hn(On(Un(gr,ot([e],t,!0))));var n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?On(n):Hn(On(Un(n,t)))}function qn(e,t,r){if(void 0===r&&(r=vr),!t)throw en(1,t);var n=function(n){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,r,Wn.apply(void 0,ot([n],i,!1)))};return n.attrs=function(n){return qn(e,t,at(at({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},n.withConfig=function(n){return qn(e,t,at(at({},r),n))},n}var Kn=function(e){return qn(Bn,e)},Gn=Kn;yr.forEach((function(e){Gn[e]=Kn(e)}));var Yn=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Nn(e),bn.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,r,n){var i=n(Xr(On(this.rules,t,r,n)),""),a=this.componentId+e;r.insertRules(a,a,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&bn.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)},e}();(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var r=pn(),n=Xr([r&&'nonce="'.concat(r,'"'),"".concat(lr,'="true"'),"".concat(cr,'="').concat(ur,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw en(2);return t._emitSheetCSS()},this.getStyleElement=function(){var r;if(t.sealed)throw en(2);var n=t.instance.toString();if(!n)return[];var i=((r={})[lr]="",r[cr]=ur,r.dangerouslySetInnerHTML={__html:n},r),a=pn();return a&&(i.nonce=a),[e.createElement("style",at({},i,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new bn({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw en(2);return e.createElement(An,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw en(3)}})(),"__sc-".concat(lr,"__");const Xn=(function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];var i=Wn.apply(void 0,ot([t],r,!1)),a="sc-global-".concat(Pr(JSON.stringify(i))),o=new Yn(i,a),s=function(t){var r=Pn(),n=e.useContext(Vn),i=e.useRef(r.styleSheet.allocateGSInstance(a)).current;return r.styleSheet.server&&l(i,t,r.styleSheet,n,r.stylis),e.useLayoutEffect((function(){if(!r.styleSheet.server)return l(i,t,r.styleSheet,n,r.stylis),function(){return o.removeStyles(i,r.styleSheet)}}),[i,t,r.styleSheet,n,r.stylis]),null};function l(e,t,r,n,i){if(o.isStatic)o.renderStyles(e,fr,r,i);else{var a=at(at({},t),{theme:xr(t,n,s.defaultProps)});o.renderStyles(e,a,r,i)}}return e.memo(s)})`
  :root {
    --primary: #6200ee;
    --primary-light: #bb86fc;
    --secondary: #03dac6;
    --background: #f5f5f5;
    --surface: #ffffff;
    --error: #b00020;
    --text-primary: #121212;
    --text-secondary: #666666;
    --border-radius: 8px;
    --transition: 0.3s ease;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', 'Segoe UI', sans-serif;
    background-color: var(--background);
    color: var(--text-primary);
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: var(--primary);
    transition: var(--transition);
    
    &:hover {
      color: var(--primary-light);
    }
  }

  button {
    cursor: pointer;
    background: var(--primary);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    transition: var(--transition);
    font-weight: 500;
    
    &:hover {
      background: var(--primary-light);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
`;var Qn=r(579);const Jn=Gn.nav`
  background-color: var(--surface);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
`,Zn=Gn.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`,ei=Gn(Je)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,ti=Gn.div`
  display: flex;
  gap: 2rem;
`,ri=Gn(Je)`
  color: var(--text-secondary);
  font-weight: 500;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: var(--primary);
    transition: var(--transition);
  }
  
  &:hover, &.active {
    color: var(--primary);
    
    &:after {
      width: 100%;
    }
  }
`,ni=()=>(0,Qn.jsx)(Jn,{children:(0,Qn.jsxs)(Zn,{children:[(0,Qn.jsxs)(ei,{to:"/",children:[(0,Qn.jsx)("span",{children:"DSA"}),(0,Qn.jsx)("span",{style:{fontWeight:400},children:"Visualizer"})]}),(0,Qn.jsxs)(ti,{children:[(0,Qn.jsx)(ri,{to:"/",end:!0,children:"Home"}),(0,Qn.jsx)(ri,{to:"/data-structures",children:"Data Structures"}),(0,Qn.jsx)(ri,{to:"/algorithms",children:"Algorithms"})]})]})});function ii(e,t){-1===e.indexOf(t)&&e.push(t)}function ai(e,t){const r=e.indexOf(t);r>-1&&e.splice(r,1)}const oi=e=>e;let si=oi,li=oi;const di=!1,ci=!1;function ui(e){let t;return()=>(void 0===t&&(t=e()),t)}const hi=(e,t,r)=>{const n=t-e;return 0===n?1:(r-e)/n};class pi{constructor(){this.subscriptions=[]}add(e){return ii(this.subscriptions,e),()=>ai(this.subscriptions,e)}notify(e,t,r){const n=this.subscriptions.length;if(n)if(1===n)this.subscriptions[0](e,t,r);else for(let i=0;i<n;i++){const n=this.subscriptions[i];n&&n(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const mi=e=>1e3*e,fi=e=>e/1e3;function gi(e,t){return t?e*(1e3/t):0}new Set;function vi(e){if("undefined"===typeof Proxy)return e;const t=new Map;return new Proxy((function(){return e(...arguments)}),{get:(r,n)=>"create"===n?e:(t.has(n)||t.set(n,e(n)),t.get(n))})}function xi(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}function yi(e){const t=[{},{}];return null===e||void 0===e||e.values.forEach(((e,r)=>{t[0][r]=e.get(),t[1][r]=e.getVelocity()})),t}function bi(e,t,r,n){if("function"===typeof t){const[i,a]=yi(n);t=t(void 0!==r?r:e.custom,i,a)}if("string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t){const[i,a]=yi(n);t=t(void 0!==r?r:e.custom,i,a)}return t}function wi(e,t,r){const n=e.getProps();return bi(n,t,void 0!==r?r:n.custom,e)}const ji=ui((()=>void 0!==window.ScrollTimeline));class Si{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map((e=>"finished"in e?e.finished:e)))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=t}attachTimeline(e,t){const r=this.animations.map((r=>ji()&&r.attachTimeline?r.attachTimeline(e):"function"===typeof t?t(r):void 0));return()=>{r.forEach(((e,t)=>{e&&e(),this.animations[t].stop()}))}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach((t=>t[e]()))}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class ki extends Si{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function Ci(e,t){return e?e[t]||e.default||e:void 0}const Ti=2e4;function Ei(e){let t=0;let r=e.next(t);for(;!r.done&&t<Ti;)t+=50,r=e.next(t);return t>=Ti?1/0:t}function $i(e){return"function"===typeof e}function Pi(e,t){e.timeline=t,e.onfinish=null}const Ai=e=>Array.isArray(e)&&"number"===typeof e[0],Ii={linearEasing:void 0};function zi(e,t){const r=ui(e);return()=>{var e;return null!==(e=Ii[t])&&void 0!==e?e:r()}}const Mi=zi((()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(Nz){return!1}return!0}),"linearEasing"),Fi=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,n="";const i=Math.max(Math.round(t/r),2);for(let a=0;a<i;a++)n+=e(hi(0,i-1,a))+", ";return`linear(${n.substring(0,n.length-2)})`};function Ri(e){return Boolean("function"===typeof e&&Mi()||!e||"string"===typeof e&&(e in Ni||Mi())||Ai(e)||Array.isArray(e)&&e.every(Ri))}const Oi=e=>{let[t,r,n,i]=e;return`cubic-bezier(${t}, ${r}, ${n}, ${i})`},Ni={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Oi([0,.65,.55,1]),circOut:Oi([.55,0,1,.45]),backIn:Oi([.31,.01,.66,-.59]),backOut:Oi([.33,1.53,.69,.99])};function Li(e,t){return e?"function"===typeof e&&Mi()?Fi(e,t):Ai(e)?Oi(e):Array.isArray(e)?e.map((e=>Li(e,t)||Ni.easeOut)):Ni[e]:void 0}const Di=["read","resolveKeyframes","update","preRender","render","postRender"],Vi={value:null,addProjectionMetrics:null};function _i(e,t){let r=!1,n=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=()=>r=!0,o=Di.reduce(((e,r)=>(e[r]=function(e,t){let r=new Set,n=new Set,i=!1,a=!1;const o=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1},l=0;function d(t){o.has(t)&&(c.schedule(t),e()),l++,t(s)}const c={schedule:function(e){const t=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&i?r:n;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&o.add(e),t.has(e)||t.add(e),e},cancel:e=>{n.delete(e),o.delete(e)},process:e=>{s=e,i?a=!0:(i=!0,[r,n]=[n,r],r.forEach(d),t&&Vi.value&&Vi.value.frameloop[t].push(l),l=0,r.clear(),i=!1,a&&(a=!1,c.process(e)))}};return c}(a,t?r:void 0),e)),{}),{read:s,resolveKeyframes:l,update:d,preRender:c,render:u,postRender:h}=o,p=()=>{const a=ci?i.timestamp:performance.now();r=!1,ci||(i.delta=n?1e3/60:Math.max(Math.min(a-i.timestamp,40),1)),i.timestamp=a,i.isProcessing=!0,s.process(i),l.process(i),d.process(i),c.process(i),u.process(i),h.process(i),i.isProcessing=!1,r&&t&&(n=!1,e(p))},m=Di.reduce(((t,a)=>{const s=o[a];return t[a]=function(t){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r||(r=!0,n=!0,i.isProcessing||e(p)),s.schedule(t,a,o)},t}),{});return{schedule:m,cancel:e=>{for(let t=0;t<Di.length;t++)o[Di[t]].cancel(e)},state:i,steps:o}}const{schedule:Bi,cancel:Ui,state:Hi,steps:Wi}=_i("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:oi,!0),{schedule:qi,cancel:Ki}=_i(queueMicrotask,!1);let Gi;function Yi(){Gi=void 0}const Xi={now:()=>(void 0===Gi&&Xi.set(Hi.isProcessing||ci?Hi.timestamp:performance.now()),Gi),set:e=>{Gi=e,queueMicrotask(Yi)}},Qi={x:!1,y:!1};function Ji(){return Qi.x||Qi.y}function Zi(e,t){const r=function(e,t,r){var n;if(e instanceof EventTarget)return[e];if("string"===typeof e){let i=document;t&&(i=t.current);const a=null!==(n=null===r||void 0===r?void 0:r[e])&&void 0!==n?n:i.querySelectorAll(e);return a?Array.from(a):[]}return Array.from(e)}(e),n=new AbortController;return[r,{passive:!0,...t,signal:n.signal},()=>n.abort()]}function ea(e){return!("touch"===e.pointerType||Ji())}function ta(e,t){const r=`${t}PointerCapture`;if(e.target instanceof Element&&r in e.target&&void 0!==e.pointerId)try{e.target[r](e.pointerId)}catch(Nz){}}const ra=(e,t)=>!!t&&(e===t||ra(e,t.parentElement)),na=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary,ia=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);const aa=new WeakSet;function oa(e){return t=>{"Enter"===t.key&&e(t)}}function sa(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}function la(e){return na(e)&&!Ji()}function da(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[n,i,a]=Zi(e,r),o=e=>{const r=e.currentTarget;if(!r||!la(e)||aa.has(r))return;aa.add(r),ta(e,"set");const n=t(r,e),a=(e,t)=>{r.removeEventListener("pointerup",o),r.removeEventListener("pointercancel",s),ta(e,"release"),la(e)&&aa.has(r)&&(aa.delete(r),"function"===typeof n&&n(e,{success:t}))},o=e=>{const t=!!e.isTrusted&&(n=e,i=r instanceof Element?r.getBoundingClientRect():{left:0,top:0,right:window.innerWidth,bottom:window.innerHeight},n.clientX<i.left||n.clientX>i.right||n.clientY<i.top||n.clientY>i.bottom);var n,i;a(e,!t&&(!(r instanceof Element)||ra(r,e.target)))},s=e=>{a(e,!1)};r.addEventListener("pointerup",o,i),r.addEventListener("pointercancel",s,i),r.addEventListener("lostpointercapture",s,i)};return n.forEach((e=>{let t=!1;var n;(e=r.useGlobalTarget?window:e)instanceof HTMLElement&&(t=!0,n=e,ia.has(n.tagName)||-1!==n.tabIndex||null!==e.getAttribute("tabindex")||(e.tabIndex=0)),e.addEventListener("pointerdown",o,i),t&&e.addEventListener("focus",(e=>((e,t)=>{const r=e.currentTarget;if(!r)return;const n=oa((()=>{if(aa.has(r))return;sa(r,"down");const e=oa((()=>{sa(r,"up")}));r.addEventListener("keyup",e,t),r.addEventListener("blur",(()=>sa(r,"cancel")),t)}));r.addEventListener("keydown",n,t),r.addEventListener("blur",(()=>r.removeEventListener("keydown",n)),t)})(e,i)),i)})),a}const ca={layout:0,mainThread:0,waapi:0};const ua={current:void 0};class ha{constructor(e){var t=this;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.version="12.5.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=function(e){let r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=Xi.now();t.updatedAt!==n&&t.setPrevFrameValue(),t.prev=t.current,t.setCurrent(e),t.current!==t.prev&&t.events.change&&t.events.change.notify(t.current),r&&t.events.renderRequest&&t.events.renderRequest.notify(t.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=r.owner}setCurrent(e){var t;this.current=e,this.updatedAt=Xi.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=(t=this.current,!isNaN(parseFloat(t))))}setPrevFrameValue(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.current;this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new pi);const r=this.events[e].add(t);return"change"===e?()=>{r(),Bi.read((()=>{this.events.change.getSize()||this.stop()}))}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return ua.current&&ua.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=Xi.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||e-this.updatedAt>30)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,30);return gi(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise((t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function pa(e,t){return new ha(e,t)}const ma=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],fa=new Set(ma),ga=new Set(["width","height","top","left","right","bottom",...ma]),va=e=>Array.isArray(e),xa=e=>va(e)?e[e.length-1]||0:e;function ya(e,t,r){e.hasValue(t)?e.getValue(t).set(r):e.addValue(t,pa(r))}const ba=e=>Boolean(e&&e.getVelocity);function wa(e,t){const r=e.getValue("willChange");if(n=r,Boolean(ba(n)&&n.add))return r.add(t);var n}const ja=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Sa="data-"+ja("framerAppearId");function ka(e){return e.props[Sa]}const Ca=!1,Ta=(e,t,r)=>(((1-3*r+3*t)*e+(3*r-6*t))*e+3*t)*e;function Ea(e,t,r,n){if(e===t&&r===n)return oi;const i=t=>function(e,t,r,n,i){let a,o,s=0;do{o=t+(r-t)/2,a=Ta(o,n,i)-e,a>0?r=o:t=o}while(Math.abs(a)>1e-7&&++s<12);return o}(t,0,1,e,r);return e=>0===e||1===e?e:Ta(i(e),t,n)}const $a=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Pa=e=>t=>1-e(1-t),Aa=Ea(.33,1.53,.69,.99),Ia=Pa(Aa),za=$a(Ia),Ma=e=>(e*=2)<1?.5*Ia(e):.5*(2-Math.pow(2,-10*(e-1))),Fa=e=>1-Math.sin(Math.acos(e)),Ra=Pa(Fa),Oa=$a(Fa),Na=e=>/^0[^.\s]+$/u.test(e);const La=(e,t,r)=>r>t?t:r<e?e:r,Da={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},Va={...Da,transform:e=>La(0,1,e)},_a={...Da,default:1},Ba=e=>Math.round(1e5*e)/1e5,Ua=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;const Ha=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Wa=(e,t)=>r=>Boolean("string"===typeof r&&Ha.test(r)&&r.startsWith(e)||t&&!function(e){return null==e}(r)&&Object.prototype.hasOwnProperty.call(r,t)),qa=(e,t,r)=>n=>{if("string"!==typeof n)return n;const[i,a,o,s]=n.match(Ua);return{[e]:parseFloat(i),[t]:parseFloat(a),[r]:parseFloat(o),alpha:void 0!==s?parseFloat(s):1}},Ka={...Da,transform:e=>Math.round((e=>La(0,255,e))(e))},Ga={test:Wa("rgb","red"),parse:qa("red","green","blue"),transform:e=>{let{red:t,green:r,blue:n,alpha:i=1}=e;return"rgba("+Ka.transform(t)+", "+Ka.transform(r)+", "+Ka.transform(n)+", "+Ba(Va.transform(i))+")"}};const Ya={test:Wa("#"),parse:function(e){let t="",r="",n="",i="";return e.length>5?(t=e.substring(1,3),r=e.substring(3,5),n=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),r=e.substring(2,3),n=e.substring(3,4),i=e.substring(4,5),t+=t,r+=r,n+=n,i+=i),{red:parseInt(t,16),green:parseInt(r,16),blue:parseInt(n,16),alpha:i?parseInt(i,16)/255:1}},transform:Ga.transform},Xa=e=>({test:t=>"string"===typeof t&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),Qa=Xa("deg"),Ja=Xa("%"),Za=Xa("px"),eo=Xa("vh"),to=Xa("vw"),ro={...Ja,parse:e=>Ja.parse(e)/100,transform:e=>Ja.transform(100*e)},no={test:Wa("hsl","hue"),parse:qa("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:r,lightness:n,alpha:i=1}=e;return"hsla("+Math.round(t)+", "+Ja.transform(Ba(r))+", "+Ja.transform(Ba(n))+", "+Ba(Va.transform(i))+")"}},io={test:e=>Ga.test(e)||Ya.test(e)||no.test(e),parse:e=>Ga.test(e)?Ga.parse(e):no.test(e)?no.parse(e):Ya.parse(e),transform:e=>"string"===typeof e?e:e.hasOwnProperty("red")?Ga.transform(e):no.transform(e)},ao=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;const oo="number",so="color",lo=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function co(e){const t=e.toString(),r=[],n={color:[],number:[],var:[]},i=[];let a=0;const o=t.replace(lo,(e=>(io.test(e)?(n.color.push(a),i.push(so),r.push(io.parse(e))):e.startsWith("var(")?(n.var.push(a),i.push("var"),r.push(e)):(n.number.push(a),i.push(oo),r.push(parseFloat(e))),++a,"${}"))).split("${}");return{values:r,split:o,indexes:n,types:i}}function uo(e){return co(e).values}function ho(e){const{split:t,types:r}=co(e),n=t.length;return e=>{let i="";for(let a=0;a<n;a++)if(i+=t[a],void 0!==e[a]){const t=r[a];i+=t===oo?Ba(e[a]):t===so?io.transform(e[a]):e[a]}return i}}const po=e=>"number"===typeof e?0:e;const mo={test:function(e){var t,r;return isNaN(e)&&"string"===typeof e&&((null===(t=e.match(Ua))||void 0===t?void 0:t.length)||0)+((null===(r=e.match(ao))||void 0===r?void 0:r.length)||0)>0},parse:uo,createTransformer:ho,getAnimatableNone:function(e){const t=uo(e);return ho(e)(t.map(po))}},fo=new Set(["brightness","contrast","saturate","opacity"]);function go(e){const[t,r]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[n]=r.match(Ua)||[];if(!n)return e;const i=r.replace(n,"");let a=fo.has(t)?1:0;return n!==r&&(a*=100),t+"("+a+i+")"}const vo=/\b([a-z-]*)\(.*?\)/gu,xo={...mo,getAnimatableNone:e=>{const t=e.match(vo);return t?t.map(go).join(" "):e}},yo={borderWidth:Za,borderTopWidth:Za,borderRightWidth:Za,borderBottomWidth:Za,borderLeftWidth:Za,borderRadius:Za,radius:Za,borderTopLeftRadius:Za,borderTopRightRadius:Za,borderBottomRightRadius:Za,borderBottomLeftRadius:Za,width:Za,maxWidth:Za,height:Za,maxHeight:Za,top:Za,right:Za,bottom:Za,left:Za,padding:Za,paddingTop:Za,paddingRight:Za,paddingBottom:Za,paddingLeft:Za,margin:Za,marginTop:Za,marginRight:Za,marginBottom:Za,marginLeft:Za,backgroundPositionX:Za,backgroundPositionY:Za},bo={rotate:Qa,rotateX:Qa,rotateY:Qa,rotateZ:Qa,scale:_a,scaleX:_a,scaleY:_a,scaleZ:_a,skew:Qa,skewX:Qa,skewY:Qa,distance:Za,translateX:Za,translateY:Za,translateZ:Za,x:Za,y:Za,z:Za,perspective:Za,transformPerspective:Za,opacity:Va,originX:ro,originY:ro,originZ:Za},wo={...Da,transform:Math.round},jo={...yo,...bo,zIndex:wo,size:Za,fillOpacity:Va,strokeOpacity:Va,numOctaves:wo},So={...jo,color:io,backgroundColor:io,outlineColor:io,fill:io,stroke:io,borderColor:io,borderTopColor:io,borderRightColor:io,borderBottomColor:io,borderLeftColor:io,filter:xo,WebkitFilter:xo},ko=e=>So[e];function Co(e,t){let r=ko(e);return r!==xo&&(r=mo),r.getAnimatableNone?r.getAnimatableNone(t):void 0}const To=new Set(["auto","none","0"]);const Eo=e=>180*e/Math.PI,$o=e=>{const t=Eo(Math.atan2(e[1],e[0]));return Ao(t)},Po={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:$o,rotateZ:$o,skewX:e=>Eo(Math.atan(e[1])),skewY:e=>Eo(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Ao=e=>((e%=360)<0&&(e+=360),e),Io=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),zo=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Mo={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Io,scaleY:zo,scale:e=>(Io(e)+zo(e))/2,rotateX:e=>Ao(Eo(Math.atan2(e[6],e[5]))),rotateY:e=>Ao(Eo(Math.atan2(-e[2],e[0]))),rotateZ:$o,rotate:$o,skewX:e=>Eo(Math.atan(e[4])),skewY:e=>Eo(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Fo(e){return e.includes("scale")?1:0}function Ro(e,t){if(!e||"none"===e)return Fo(t);const r=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let n,i;if(r)n=Mo,i=r;else{const t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);n=Po,i=t}if(!i)return Fo(t);const a=n[t],o=i[1].split(",").map(Oo);return"function"===typeof a?a(o):o[a]}function Oo(e){return parseFloat(e.trim())}const No=e=>e===Da||e===Za,Lo=new Set(["x","y","z"]),Do=ma.filter((e=>!Lo.has(e)));const Vo={width:(e,t)=>{let{x:r}=e,{paddingLeft:n="0",paddingRight:i="0"}=t;return r.max-r.min-parseFloat(n)-parseFloat(i)},height:(e,t)=>{let{y:r}=e,{paddingTop:n="0",paddingBottom:i="0"}=t;return r.max-r.min-parseFloat(n)-parseFloat(i)},top:(e,t)=>{let{top:r}=t;return parseFloat(r)},left:(e,t)=>{let{left:r}=t;return parseFloat(r)},bottom:(e,t)=>{let{y:r}=e,{top:n}=t;return parseFloat(n)+(r.max-r.min)},right:(e,t)=>{let{x:r}=e,{left:n}=t;return parseFloat(n)+(r.max-r.min)},x:(e,t)=>{let{transform:r}=t;return Ro(r,"x")},y:(e,t)=>{let{transform:r}=t;return Ro(r,"y")}};Vo.translateX=Vo.x,Vo.translateY=Vo.y;const _o=new Set;let Bo=!1,Uo=!1;function Ho(){if(Uo){const e=Array.from(_o).filter((e=>e.needsMeasurement)),t=new Set(e.map((e=>e.element))),r=new Map;t.forEach((e=>{const t=function(e){const t=[];return Do.forEach((r=>{const n=e.getValue(r);void 0!==n&&(t.push([r,n.get()]),n.set(r.startsWith("scale")?1:0))})),t}(e);t.length&&(r.set(e,t),e.render())})),e.forEach((e=>e.measureInitialState())),t.forEach((e=>{e.render();const t=r.get(e);t&&t.forEach((t=>{let[r,n]=t;var i;null===(i=e.getValue(r))||void 0===i||i.set(n)}))})),e.forEach((e=>e.measureEndState())),e.forEach((e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)}))}Uo=!1,Bo=!1,_o.forEach((e=>e.complete())),_o.clear()}function Wo(){_o.forEach((e=>{e.readKeyframes(),e.needsMeasurement&&(Uo=!0)}))}class qo{constructor(e,t,r,n,i){let a=arguments.length>5&&void 0!==arguments[5]&&arguments[5];this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=n,this.element=i,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(_o.add(this),Bo||(Bo=!0,Bi.read(Wo),Bi.resolveKeyframes(Ho))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:n}=this;for(let i=0;i<e.length;i++)if(null===e[i])if(0===i){const i=null===n||void 0===n?void 0:n.get(),a=e[e.length-1];if(void 0!==i)e[0]=i;else if(r&&t){const n=r.readValue(t,a);void 0!==n&&null!==n&&(e[0]=n)}void 0===e[0]&&(e[0]=a),n&&void 0===i&&n.set(e[0])}else e[i]=e[i-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),_o.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,_o.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Ko=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Go=e=>t=>"string"===typeof t&&t.startsWith(e),Yo=Go("--"),Xo=Go("var(--"),Qo=e=>!!Xo(e)&&Jo.test(e.split("/*")[0].trim()),Jo=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Zo=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function es(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;li(r<=4,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);const[n,i]=function(e){const t=Zo.exec(e);if(!t)return[,];const[,r,n,i]=t;return[`--${null!==r&&void 0!==r?r:n}`,i]}(e);if(!n)return;const a=window.getComputedStyle(t).getPropertyValue(n);if(a){const e=a.trim();return Ko(e)?parseFloat(e):e}return Qo(i)?es(i,t,r+1):i}const ts=e=>t=>t.test(e),rs=[Da,Za,Ja,Qa,to,eo,{test:e=>"auto"===e,parse:e=>e}],ns=e=>rs.find(ts(e));class is extends qo{constructor(e,t,r,n,i){super(e,t,r,n,i,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let s=0;s<e.length;s++){let r=e[s];if("string"===typeof r&&(r=r.trim(),Qo(r))){const n=es(r,t.current);void 0!==n&&(e[s]=n),s===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!ga.has(r)||2!==e.length)return;const[n,i]=e,a=ns(n),o=ns(i);if(a!==o)if(No(a)&&No(o))for(let s=0;s<e.length;s++){const t=e[s];"string"===typeof t&&(e[s]=parseFloat(t))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let i=0;i<e.length;i++)("number"===typeof(n=e[i])?0===n:null===n||"none"===n||"0"===n||Na(n))&&r.push(i);var n;r.length&&function(e,t,r){let n,i=0;for(;i<e.length&&!n;){const t=e[i];"string"===typeof t&&!To.has(t)&&co(t).values.length&&(n=e[i]),i++}if(n&&r)for(const a of t)e[a]=Co(r,n)}(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;"height"===r&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Vo[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const n=t[t.length-1];void 0!==n&&e.getValue(r,n).jump(n,!1)}measureEndState(){var e;const{element:t,name:r,unresolvedKeyframes:n}=this;if(!t||!t.current)return;const i=t.getValue(r);i&&i.jump(this.measuredOrigin,!1);const a=n.length-1,o=n[a];n[a]=Vo[r](t.measureViewportBox(),window.getComputedStyle(t.current)),null!==o&&void 0===this.finalKeyframe&&(this.finalKeyframe=o),(null===(e=this.removedTransforms)||void 0===e?void 0:e.length)&&this.removedTransforms.forEach((e=>{let[r,n]=e;t.getValue(r).set(n)})),this.resolveNoneKeyframes()}}const as=(e,t)=>"zIndex"!==t&&(!("number"!==typeof e&&!Array.isArray(e))||!("string"!==typeof e||!mo.test(e)&&"0"!==e||e.startsWith("url(")));function os(e,t,r,n){const i=e[0];if(null===i)return!1;if("display"===t||"visibility"===t)return!0;const a=e[e.length-1],o=as(i,t),s=as(a,t);return si(o===s,`You are trying to animate ${t} from "${i}" to "${a}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${a} via the \`style\` property.`),!(!o||!s)&&(function(e){const t=e[0];if(1===e.length)return!0;for(let r=0;r<e.length;r++)if(e[r]!==t)return!0}(e)||("spring"===r||$i(r))&&n)}const ss=e=>null!==e;function ls(e,t,r){let{repeat:n,repeatType:i="loop"}=t;const a=e.filter(ss),o=n&&"loop"!==i&&n%2===1?0:a.length-1;return o&&void 0!==r?r:a[o]}class ds{constructor(e){let{autoplay:t=!0,delay:r=0,type:n="keyframes",repeat:i=0,repeatDelay:a=0,repeatType:o="loop",...s}=e;this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Xi.now(),this.options={autoplay:t,delay:r,type:n,repeat:i,repeatDelay:a,repeatType:o,...s},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt}get resolved(){return this._resolved||this.hasAttemptedResolve||(Wo(),Ho()),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=Xi.now(),this.hasAttemptedResolve=!0;const{name:r,type:n,velocity:i,delay:a,onComplete:o,onUpdate:s,isGenerator:l}=this.options;if(!l&&!os(e,r,n,i)){if(Ca||!a)return s&&s(ls(e,this.options,t)),o&&o(),void this.resolveFinishedPromise();this.options.duration=0}const d=this.initPlayback(e,t);!1!==d&&(this._resolved={keyframes:e,finalKeyframe:t,...d},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear")}updateFinishedPromise(){this.currentFinishedPromise=new Promise((e=>{this.resolveFinishedPromise=e}))}}const cs=(e,t,r)=>e+(t-e)*r;function us(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function hs(e,t){return r=>r>0?t:e}const ps=(e,t,r)=>{const n=e*e,i=r*(t*t-n)+n;return i<0?0:Math.sqrt(i)},ms=[Ya,Ga,no];function fs(e){const t=(e=>ms.find((t=>t.test(e))))(e);if(si(Boolean(t),`'${e}' is not an animatable color. Use the equivalent color code instead.`),!Boolean(t))return!1;let r=t.parse(e);return t===no&&(r=function(e){let{hue:t,saturation:r,lightness:n,alpha:i}=e;t/=360,r/=100,n/=100;let a=0,o=0,s=0;if(r){const e=n<.5?n*(1+r):n+r-n*r,i=2*n-e;a=us(i,e,t+1/3),o=us(i,e,t),s=us(i,e,t-1/3)}else a=o=s=n;return{red:Math.round(255*a),green:Math.round(255*o),blue:Math.round(255*s),alpha:i}}(r)),r}const gs=(e,t)=>{const r=fs(e),n=fs(t);if(!r||!n)return hs(e,t);const i={...r};return e=>(i.red=ps(r.red,n.red,e),i.green=ps(r.green,n.green,e),i.blue=ps(r.blue,n.blue,e),i.alpha=cs(r.alpha,n.alpha,e),Ga.transform(i))},vs=(e,t)=>r=>t(e(r)),xs=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce(vs)},ys=new Set(["none","hidden"]);function bs(e,t){return r=>cs(e,t,r)}function ws(e){return"number"===typeof e?bs:"string"===typeof e?Qo(e)?hs:io.test(e)?gs:ks:Array.isArray(e)?js:"object"===typeof e?io.test(e)?gs:Ss:hs}function js(e,t){const r=[...e],n=r.length,i=e.map(((e,r)=>ws(e)(e,t[r])));return e=>{for(let t=0;t<n;t++)r[t]=i[t](e);return r}}function Ss(e,t){const r={...e,...t},n={};for(const i in r)void 0!==e[i]&&void 0!==t[i]&&(n[i]=ws(e[i])(e[i],t[i]));return e=>{for(const t in n)r[t]=n[t](e);return r}}const ks=(e,t)=>{const r=mo.createTransformer(t),n=co(e),i=co(t);return n.indexes.var.length===i.indexes.var.length&&n.indexes.color.length===i.indexes.color.length&&n.indexes.number.length>=i.indexes.number.length?ys.has(e)&&!i.values.length||ys.has(t)&&!n.values.length?function(e,t){return ys.has(e)?r=>r<=0?e:t:r=>r>=1?t:e}(e,t):xs(js(function(e,t){var r;const n=[],i={color:0,var:0,number:0};for(let a=0;a<t.values.length;a++){const o=t.types[a],s=e.indexes[o][i[o]],l=null!==(r=e.values[s])&&void 0!==r?r:0;n[a]=l,i[o]++}return n}(n,i),i.values),r):(si(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),hs(e,t))};function Cs(e,t,r){if("number"===typeof e&&"number"===typeof t&&"number"===typeof r)return cs(e,t,r);return ws(e)(e,t)}function Ts(e,t,r){const n=Math.max(t-5,0);return gi(r-e(n),t-n)}const Es={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},$s=.001;function Ps(e){let t,r,{duration:n=Es.duration,bounce:i=Es.bounce,velocity:a=Es.velocity,mass:o=Es.mass}=e;si(n<=mi(Es.maxDuration),"Spring duration must be 10 seconds or less");let s=1-i;s=La(Es.minDamping,Es.maxDamping,s),n=La(Es.minDuration,Es.maxDuration,fi(n)),s<1?(t=e=>{const t=e*s,r=t*n,i=t-a,o=Is(e,s),l=Math.exp(-r);return $s-i/o*l},r=e=>{const r=e*s*n,i=r*a+a,o=Math.pow(s,2)*Math.pow(e,2)*n,l=Math.exp(-r),d=Is(Math.pow(e,2),s);return(-t(e)+$s>0?-1:1)*((i-o)*l)/d}):(t=e=>Math.exp(-e*n)*((e-a)*n+1)-.001,r=e=>Math.exp(-e*n)*(n*n*(a-e)));const l=function(e,t,r){let n=r;for(let i=1;i<As;i++)n-=e(n)/t(n);return n}(t,r,5/n);if(n=mi(n),isNaN(l))return{stiffness:Es.stiffness,damping:Es.damping,duration:n};{const e=Math.pow(l,2)*o;return{stiffness:e,damping:2*s*Math.sqrt(o*e),duration:n}}}const As=12;function Is(e,t){return e*Math.sqrt(1-t*t)}const zs=["duration","bounce"],Ms=["stiffness","damping","mass"];function Fs(e,t){return t.some((t=>void 0!==e[t]))}function Rs(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Es.visualDuration,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Es.bounce;const r="object"!==typeof e?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:n,restDelta:i}=r;const a=r.keyframes[0],o=r.keyframes[r.keyframes.length-1],s={done:!1,value:a},{stiffness:l,damping:d,mass:c,duration:u,velocity:h,isResolvedFromDuration:p}=function(e){let t={velocity:Es.velocity,stiffness:Es.stiffness,damping:Es.damping,mass:Es.mass,isResolvedFromDuration:!1,...e};if(!Fs(e,Ms)&&Fs(e,zs))if(e.visualDuration){const r=e.visualDuration,n=2*Math.PI/(1.2*r),i=n*n,a=2*La(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:Es.mass,stiffness:i,damping:a}}else{const r=Ps(e);t={...t,...r,mass:Es.mass},t.isResolvedFromDuration=!0}return t}({...r,velocity:-fi(r.velocity||0)}),m=h||0,f=d/(2*Math.sqrt(l*c)),g=o-a,v=fi(Math.sqrt(l/c)),x=Math.abs(g)<5;let y;if(n||(n=x?Es.restSpeed.granular:Es.restSpeed.default),i||(i=x?Es.restDelta.granular:Es.restDelta.default),f<1){const e=Is(v,f);y=t=>{const r=Math.exp(-f*v*t);return o-r*((m+f*v*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===f)y=e=>o-Math.exp(-v*e)*(g+(m+v*g)*e);else{const e=v*Math.sqrt(f*f-1);y=t=>{const r=Math.exp(-f*v*t),n=Math.min(e*t,300);return o-r*((m+f*v*g)*Math.sinh(n)+e*g*Math.cosh(n))/e}}const b={calculatedDuration:p&&u||null,next:e=>{const t=y(e);if(p)s.done=e>=u;else{let r=0;f<1&&(r=0===e?mi(m):Ts(y,e,t));const a=Math.abs(r)<=n,l=Math.abs(o-t)<=i;s.done=a&&l}return s.value=s.done?o:t,s},toString:()=>{const e=Math.min(Ei(b),Ti),t=Fi((t=>b.next(e*t).value),e,30);return e+"ms "+t}};return b}function Os(e){let{keyframes:t,velocity:r=0,power:n=.8,timeConstant:i=325,bounceDamping:a=10,bounceStiffness:o=500,modifyTarget:s,min:l,max:d,restDelta:c=.5,restSpeed:u}=e;const h=t[0],p={done:!1,value:h},m=e=>void 0===l?d:void 0===d||Math.abs(l-e)<Math.abs(d-e)?l:d;let f=n*r;const g=h+f,v=void 0===s?g:s(g);v!==g&&(f=v-h);const x=e=>-f*Math.exp(-e/i),y=e=>v+x(e),b=e=>{const t=x(e),r=y(e);p.done=Math.abs(t)<=c,p.value=p.done?v:r};let w,j;const S=e=>{(e=>void 0!==l&&e<l||void 0!==d&&e>d)(p.value)&&(w=e,j=Rs({keyframes:[p.value,m(p.value)],velocity:Ts(y,e,p.value),damping:a,stiffness:o,restDelta:c,restSpeed:u}))};return S(0),{calculatedDuration:null,next:e=>{let t=!1;return j||void 0!==w||(t=!0,b(e),S(e)),void 0!==w&&e>=w?j.next(e-w):(!t&&b(e),p)}}}const Ns=Ea(.42,0,1,1),Ls=Ea(0,0,.58,1),Ds=Ea(.42,0,.58,1),Vs={linear:oi,easeIn:Ns,easeInOut:Ds,easeOut:Ls,circIn:Fa,circInOut:Oa,circOut:Ra,backIn:Ia,backInOut:za,backOut:Aa,anticipate:Ma},_s=e=>{if(Ai(e)){li(4===e.length,"Cubic bezier arrays must contain four numerical values.");const[t,r,n,i]=e;return Ea(t,r,n,i)}return"string"===typeof e?(li(void 0!==Vs[e],`Invalid easing type '${e}'`),Vs[e]):e};function Bs(e,t){let{clamp:r=!0,ease:n,mixer:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=e.length;if(li(a===t.length,"Both input and output ranges must be the same length"),1===a)return()=>t[0];if(2===a&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=function(e,t,r){const n=[],i=r||Cs,a=e.length-1;for(let o=0;o<a;o++){let r=i(e[o],e[o+1]);if(t){const e=Array.isArray(t)?t[o]||oi:t;r=xs(e,r)}n.push(r)}return n}(t,n,i),l=s.length,d=r=>{if(o&&r<e[0])return t[0];let n=0;if(l>1)for(;n<e.length-2&&!(r<e[n+1]);n++);const i=hi(e[n],e[n+1],r);return s[n](i)};return r?t=>d(La(e[0],e[a-1],t)):d}function Us(e){const t=[0];return function(e,t){const r=e[e.length-1];for(let n=1;n<=t;n++){const i=hi(0,t,n);e.push(cs(r,1,i))}}(t,e.length-1),t}function Hs(e){let{duration:t=300,keyframes:r,times:n,ease:i="easeInOut"}=e;const a=(e=>Array.isArray(e)&&"number"!==typeof e[0])(i)?i.map(_s):_s(i),o={done:!1,value:r[0]},s=function(e,t){return e.map((e=>e*t))}(n&&n.length===r.length?n:Us(r),t),l=Bs(s,r,{ease:Array.isArray(a)?a:(d=r,c=a,d.map((()=>c||Ds)).splice(0,d.length-1))});var d,c;return{calculatedDuration:t,next:e=>(o.value=l(e),o.done=e>=t,o)}}const Ws=e=>{const t=t=>{let{timestamp:r}=t;return e(r)};return{start:()=>Bi.update(t,!0),stop:()=>Ui(t),now:()=>Hi.isProcessing?Hi.timestamp:Xi.now()}},qs={decay:Os,inertia:Os,tween:Hs,keyframes:Hs,spring:Rs},Ks=e=>e/100;class Gs extends ds{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.teardown();const{onStop:e}=this.options;e&&e()};const{name:t,motionValue:r,element:n,keyframes:i}=this.options,a=(null===n||void 0===n?void 0:n.KeyframeResolver)||qo;this.resolver=new a(i,((e,t)=>this.onKeyframesResolved(e,t)),t,r,n),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:r=0,repeatDelay:n=0,repeatType:i,velocity:a=0}=this.options,o=$i(t)?t:qs[t]||Hs;let s,l;o!==Hs&&"number"!==typeof e[0]&&(s=xs(Ks,Cs(e[0],e[1])),e=[0,100]);const d=o({...this.options,keyframes:e});"mirror"===i&&(l=o({...this.options,keyframes:[...e].reverse(),velocity:-a})),null===d.calculatedDuration&&(d.calculatedDuration=Ei(d));const{calculatedDuration:c}=d,u=c+n;return{generator:d,mirroredGenerator:l,mapPercentToKeyframes:s,calculatedDuration:c,resolvedDuration:u,totalDuration:u*(r+1)-n}}onPostResolved(){const{autoplay:e=!0}=this.options;ca.mainThread++,this.play(),"paused"!==this.pendingPlayState&&e?this.state=this.pendingPlayState:this.pause()}tick(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{resolved:r}=this;if(!r){const{keyframes:e}=this.options;return{done:!0,value:e[e.length-1]}}const{finalKeyframe:n,generator:i,mirroredGenerator:a,mapPercentToKeyframes:o,keyframes:s,calculatedDuration:l,totalDuration:d,resolvedDuration:c}=r;if(null===this.startTime)return i.next(0);const{delay:u,repeat:h,repeatType:p,repeatDelay:m,onUpdate:f}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-d/this.speed,this.startTime)),t?this.currentTime=e:null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const g=this.currentTime-u*(this.speed>=0?1:-1),v=this.speed>=0?g<0:g>d;this.currentTime=Math.max(g,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=d);let x=this.currentTime,y=i;if(h){const e=Math.min(this.currentTime,d)/c;let t=Math.floor(e),r=e%1;!r&&e>=1&&(r=1),1===r&&t--,t=Math.min(t,h+1);Boolean(t%2)&&("reverse"===p?(r=1-r,m&&(r-=m/c)):"mirror"===p&&(y=a)),x=La(0,1,r)*c}const b=v?{done:!1,value:s[0]}:y.next(x);o&&(b.value=o(b.value));let{done:w}=b;v||null===l||(w=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const j=null===this.holdTime&&("finished"===this.state||"running"===this.state&&w);return j&&void 0!==n&&(b.value=ls(s,this.options,n)),f&&f(b.value),j&&this.finish(),b}get duration(){const{resolved:e}=this;return e?fi(e.calculatedDuration):0}get time(){return fi(this.currentTime)}set time(e){e=mi(e),this.currentTime=e,null!==this.holdTime||0===this.speed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=fi(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved)return void(this.pendingPlayState="running");if(this.isStopped)return;const{driver:e=Ws,onPlay:t,startTime:r}=this.options;this.driver||(this.driver=e((e=>this.tick(e)))),t&&t();const n=this.driver.now();null!==this.holdTime?this.startTime=n-this.holdTime:this.startTime?"finished"===this.state&&(this.startTime=n):this.startTime=null!==r&&void 0!==r?r:this.calcStartTime(),"finished"===this.state&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;this._resolved?(this.state="paused",this.holdTime=null!==(e=this.currentTime)&&void 0!==e?e:0):this.pendingPlayState="paused"}complete(){"running"!==this.state&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){null!==this.cancelTime&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel(),ca.mainThread--}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const Ys=new Set(["opacity","clipPath","filter","transform"]);const Xs=ui((()=>Object.hasOwnProperty.call(Element.prototype,"animate")));const Qs={anticipate:Ma,backInOut:za,circInOut:Oa};class Js extends ds{constructor(e){super(e);const{name:t,motionValue:r,element:n,keyframes:i}=this.options;this.resolver=new is(i,((e,t)=>this.onKeyframesResolved(e,t)),t,r,n),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:r=300,times:n,ease:i,type:a,motionValue:o,name:s,startTime:l}=this.options;if(!o.owner||!o.owner.current)return!1;var d;if("string"===typeof i&&Mi()&&i in Qs&&(i=Qs[i]),$i((d=this.options).type)||"spring"===d.type||!Ri(d.ease)){const{onComplete:t,onUpdate:o,motionValue:s,element:l,...d}=this.options,c=function(e,t){const r=new Gs({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let n={done:!1,value:e[0]};const i=[];let a=0;for(;!n.done&&a<2e4;)n=r.sample(a),i.push(n.value),a+=10;return{times:void 0,keyframes:i,duration:a-10,ease:"linear"}}(e,d);1===(e=c.keyframes).length&&(e[1]=e[0]),r=c.duration,n=c.times,i=c.ease,a="keyframes"}const c=function(e,t,r){let{delay:n=0,duration:i=300,repeat:a=0,repeatType:o="loop",ease:s="easeInOut",times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const d={[t]:r};l&&(d.offset=l);const c=Li(s,i);Array.isArray(c)&&(d.easing=c),Vi.value&&ca.waapi++;const u=e.animate(d,{delay:n,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:a+1,direction:"reverse"===o?"alternate":"normal"});return Vi.value&&u.finished.finally((()=>{ca.waapi--})),u}(o.owner.current,s,e,{...this.options,duration:r,times:n,ease:i});return c.startTime=null!==l&&void 0!==l?l:this.calcStartTime(),this.pendingTimeline?(Pi(c,this.pendingTimeline),this.pendingTimeline=void 0):c.onfinish=()=>{const{onComplete:r}=this.options;o.set(ls(e,this.options,t)),r&&r(),this.cancel(),this.resolveFinishedPromise()},{animation:c,duration:r,times:n,type:a,ease:i,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return fi(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return fi(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.currentTime=mi(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(this._resolved){const{resolved:t}=this;if(!t)return oi;const{animation:r}=t;Pi(r,e)}else this.pendingTimeline=e;return oi}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;"finished"===t.playState&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:r,duration:n,type:i,ease:a,times:o}=e;if("idle"===t.playState||"finished"===t.playState)return;if(this.time){const{motionValue:e,onUpdate:t,onComplete:s,element:l,...d}=this.options,c=new Gs({...d,keyframes:r,duration:n,type:i,ease:a,times:o,isGenerator:!0}),u=mi(this.time);e.setWithVelocity(c.sample(u-10).value,c.sample(u).value,10)}const{onStop:s}=this.options;s&&s(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:r,repeatDelay:n,repeatType:i,damping:a,type:o}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:s,transformTemplate:l}=t.owner.getProps();return Xs()&&r&&Ys.has(r)&&!s&&!l&&!n&&"mirror"!==i&&0!==a&&"inertia"!==o}}const Zs={type:"spring",stiffness:500,damping:25,restSpeed:10},el={type:"keyframes",duration:.8},tl={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},rl=(e,t)=>{let{keyframes:r}=t;return r.length>2?el:fa.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===r[1]?2*Math.sqrt(550):30,restSpeed:10}:Zs:tl};const nl=function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0;return o=>{const s=Ci(n,e)||{},l=s.delay||n.delay||0;let{elapsed:d=0}=n;d-=mi(l);let c={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-d,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};(function(e){let{when:t,delay:r,delayChildren:n,staggerChildren:i,staggerDirection:a,repeat:o,repeatType:s,repeatDelay:l,from:d,elapsed:c,...u}=e;return!!Object.keys(u).length})(s)||(c={...c,...rl(e,c)}),c.duration&&(c.duration=mi(c.duration)),c.repeatDelay&&(c.repeatDelay=mi(c.repeatDelay)),void 0!==c.from&&(c.keyframes[0]=c.from);let u=!1;if((!1===c.type||0===c.duration&&!c.repeatDelay)&&(c.duration=0,0===c.delay&&(u=!0)),(Ca||di)&&(u=!0,c.duration=0,c.delay=0),c.allowFlatten=!s.type&&!s.ease,u&&!a&&void 0!==t.get()){const e=ls(c.keyframes,s);if(void 0!==e)return Bi.update((()=>{c.onUpdate(e),c.onComplete()})),new ki([])}return!a&&Js.supports(c)?new Js(c):new Gs(c)}};function il(e,t){let{protectedKeys:r,needsAnimating:n}=e;const i=r.hasOwnProperty(t)&&!0!==n[t];return n[t]=!1,i}function al(e,t){let{delay:r=0,transitionOverride:n,type:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var a;let{transition:o=e.getDefaultTransition(),transitionEnd:s,...l}=t;n&&(o=n);const d=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const u in l){const t=e.getValue(u,null!==(a=e.latestValues[u])&&void 0!==a?a:null),n=l[u];if(void 0===n||c&&il(c,u))continue;const i={delay:r,...Ci(o||{},u)};let s=!1;if(window.MotionHandoffAnimation){const t=ka(e);if(t){const e=window.MotionHandoffAnimation(t,u,Bi);null!==e&&(i.startTime=e,s=!0)}}wa(e,u),t.start(nl(u,t,n,e.shouldReduceMotion&&ga.has(u)?{type:!1}:i,e,s));const h=t.animation;h&&d.push(h)}return s&&Promise.all(d).then((()=>{Bi.update((()=>{s&&function(e,t){const r=wi(e,t);let{transitionEnd:n={},transition:i={},...a}=r||{};a={...a,...n};for(const o in a)ya(e,o,xa(a[o]))}(e,s)}))})),d}function ol(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var n;const i=wi(e,t,"exit"===r.type?null===(n=e.presenceContext)||void 0===n?void 0:n.custom:void 0);let{transition:a=e.getDefaultTransition()||{}}=i||{};r.transitionOverride&&(a=r.transitionOverride);const o=i?()=>Promise.all(al(e,i,r)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:i=0,staggerChildren:o,staggerDirection:s}=a;return function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=arguments.length>5?arguments[5]:void 0;const o=[],s=(e.variantChildren.size-1)*n,l=1===i?function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*n}:function(){return s-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*n};return Array.from(e.variantChildren).sort(sl).forEach(((e,n)=>{e.notify("AnimationStart",t),o.push(ol(e,t,{...a,delay:r+l(n)}).then((()=>e.notify("AnimationComplete",t))))})),Promise.all(o)}(e,t,i+n,o,s,r)}:()=>Promise.resolve(),{when:l}=a;if(l){const[e,t]="beforeChildren"===l?[o,s]:[s,o];return e().then((()=>t()))}return Promise.all([o(),s(r.delay)])}function sl(e,t){return e.sortNodePosition(t)}function ll(e,t){if(!Array.isArray(t))return!1;const r=t.length;if(r!==e.length)return!1;for(let n=0;n<r;n++)if(t[n]!==e[n])return!1;return!0}function dl(e){return"string"===typeof e||Array.isArray(e)}const cl=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ul=["initial",...cl],hl=ul.length;function pl(e){if(!e)return;if(!e.isControllingVariants){const t=e.parent&&pl(e.parent)||{};return void 0!==e.props.initial&&(t.initial=e.props.initial),t}const t={};for(let r=0;r<hl;r++){const n=ul[r],i=e.props[n];(dl(i)||!1===i)&&(t[n]=i)}return t}const ml=[...cl].reverse(),fl=cl.length;function gl(e){return t=>Promise.all(t.map((t=>{let{animation:r,options:n}=t;return function(e,t){let r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const i=t.map((t=>ol(e,t,n)));r=Promise.all(i)}else if("string"===typeof t)r=ol(e,t,n);else{const i="function"===typeof t?wi(e,t,n.custom):t;r=Promise.all(al(e,i,n))}return r.then((()=>{e.notify("AnimationComplete",t)}))}(e,r,n)})))}function vl(e){let t=gl(e),r=bl(),n=!0;const i=t=>(r,n)=>{var i;const a=wi(e,n,"exit"===t?null===(i=e.presenceContext)||void 0===i?void 0:i.custom:void 0);if(a){const{transition:e,transitionEnd:t,...n}=a;r={...r,...n,...t}}return r};function a(a){const{props:o}=e,s=pl(e.parent)||{},l=[],d=new Set;let c={},u=1/0;for(let t=0;t<fl;t++){const h=ml[t],p=r[h],m=void 0!==o[h]?o[h]:s[h],f=dl(m),g=h===a?p.isActive:null;!1===g&&(u=t);let v=m===s[h]&&m!==o[h]&&f;if(v&&n&&e.manuallyAnimateOnMount&&(v=!1),p.protectedKeys={...c},!p.isActive&&null===g||!m&&!p.prevProp||xi(m)||"boolean"===typeof m)continue;const x=xl(p.prevProp,m);let y=x||h===a&&p.isActive&&!v&&f||t>u&&f,b=!1;const w=Array.isArray(m)?m:[m];let j=w.reduce(i(h),{});!1===g&&(j={});const{prevResolvedValues:S={}}=p,k={...S,...j},C=t=>{y=!0,d.has(t)&&(b=!0,d.delete(t)),p.needsAnimating[t]=!0;const r=e.getValue(t);r&&(r.liveStyle=!1)};for(const e in k){const t=j[e],r=S[e];if(c.hasOwnProperty(e))continue;let n=!1;n=va(t)&&va(r)?!ll(t,r):t!==r,n?void 0!==t&&null!==t?C(e):d.add(e):void 0!==t&&d.has(e)?C(e):p.protectedKeys[e]=!0}p.prevProp=m,p.prevResolvedValues=j,p.isActive&&(c={...c,...j}),n&&e.blockInitialAnimation&&(y=!1);y&&(!(v&&x)||b)&&l.push(...w.map((e=>({animation:e,options:{type:h}}))))}if(d.size){const t={};if("boolean"!==typeof o.initial){const r=wi(e,Array.isArray(o.initial)?o.initial[0]:o.initial);r&&r.transition&&(t.transition=r.transition)}d.forEach((r=>{const n=e.getBaseTarget(r),i=e.getValue(r);i&&(i.liveStyle=!0),t[r]=null!==n&&void 0!==n?n:null})),l.push({animation:t})}let h=Boolean(l.length);return!n||!1!==o.initial&&o.initial!==o.animate||e.manuallyAnimateOnMount||(h=!1),n=!1,h?t(l):Promise.resolve()}return{animateChanges:a,setActive:function(t,n){var i;if(r[t].isActive===n)return Promise.resolve();null===(i=e.variantChildren)||void 0===i||i.forEach((e=>{var r;return null===(r=e.animationState)||void 0===r?void 0:r.setActive(t,n)})),r[t].isActive=n;const o=a(t);for(const e in r)r[e].protectedKeys={};return o},setAnimateFunction:function(r){t=r(e)},getState:()=>r,reset:()=>{r=bl(),n=!0}}}function xl(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!ll(t,e)}function yl(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function bl(){return{animate:yl(!0),whileInView:yl(),whileHover:yl(),whileTap:yl(),whileDrag:yl(),whileFocus:yl(),exit:yl()}}class wl{constructor(e){this.isMounted=!1,this.node=e}update(){}}let jl=0;const Sl={animation:{Feature:class extends wl{constructor(e){super(e),e.animationState||(e.animationState=vl(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();xi(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),null===(e=this.unmountControls)||void 0===e||e.call(this)}}},exit:{Feature:class extends wl{constructor(){super(...arguments),this.id=jl++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const n=this.node.animationState.setActive("exit",!e);t&&!e&&n.then((()=>{t(this.id)}))}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function kl(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r)}function Cl(e){return{point:{x:e.pageX,y:e.pageY}}}function Tl(e,t,r,n){return kl(e,t,(e=>t=>na(t)&&e(t,Cl(t)))(r),n)}function El(e){let{top:t,left:r,right:n,bottom:i}=e;return{x:{min:r,max:n},y:{min:t,max:i}}}function $l(e){return e.max-e.min}function Pl(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=n,e.originPoint=cs(t.min,t.max,e.origin),e.scale=$l(r)/$l(t),e.translate=cs(r.min,r.max,e.origin)-e.originPoint,(e.scale>=.9999&&e.scale<=1.0001||isNaN(e.scale))&&(e.scale=1),(e.translate>=-.01&&e.translate<=.01||isNaN(e.translate))&&(e.translate=0)}function Al(e,t,r,n){Pl(e.x,t.x,r.x,n?n.originX:void 0),Pl(e.y,t.y,r.y,n?n.originY:void 0)}function Il(e,t,r){e.min=r.min+t.min,e.max=e.min+$l(t)}function zl(e,t,r){e.min=t.min-r.min,e.max=e.min+$l(t)}function Ml(e,t,r){zl(e.x,t.x,r.x),zl(e.y,t.y,r.y)}const Fl=()=>({x:{min:0,max:0},y:{min:0,max:0}});function Rl(e){return[e("x"),e("y")]}function Ol(e){return void 0===e||1===e}function Nl(e){let{scale:t,scaleX:r,scaleY:n}=e;return!Ol(t)||!Ol(r)||!Ol(n)}function Ll(e){return Nl(e)||Dl(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Dl(e){return Vl(e.x)||Vl(e.y)}function Vl(e){return e&&"0%"!==e}function _l(e,t,r){return r+t*(e-r)}function Bl(e,t,r,n,i){return void 0!==i&&(e=_l(e,i,n)),_l(e,r,n)+t}function Ul(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;e.min=Bl(e.min,t,r,n,i),e.max=Bl(e.max,t,r,n,i)}function Hl(e,t){let{x:r,y:n}=t;Ul(e.x,r.translate,r.scale,r.originPoint),Ul(e.y,n.translate,n.scale,n.originPoint)}const Wl=.999999999999,ql=1.0000000000001;function Kl(e,t){e.min=e.min+t,e.max=e.max+t}function Gl(e,t,r,n){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.5;Ul(e,t,r,cs(e.min,e.max,i),n)}function Yl(e,t){Gl(e.x,t.x,t.scaleX,t.scale,t.originX),Gl(e.y,t.y,t.scaleY,t.scale,t.originY)}function Xl(e,t){return El(function(e,t){if(!t)return e;const r=t({x:e.left,y:e.top}),n=t({x:e.right,y:e.bottom});return{top:r.y,left:r.x,bottom:n.y,right:n.x}}(e.getBoundingClientRect(),t))}const Ql=e=>{let{current:t}=e;return t?t.ownerDocument.defaultView:null};function Jl(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}const Zl=(e,t)=>Math.abs(e-t);class ed{constructor(e,t){let{transformPagePoint:r,contextWindow:n,dragSnapToOrigin:i=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=nd(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,r=function(e,t){const r=Zl(e.x,t.x),n=Zl(e.y,t.y);return Math.sqrt(r**2+n**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!r)return;const{point:n}=e,{timestamp:i}=Hi;this.history.push({...n,timestamp:i});const{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=td(t,this.transformPagePoint),Bi.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:r,onSessionEnd:n,resumeAnimation:i}=this.handlers;if(this.dragSnapToOrigin&&i&&i(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const a=nd("pointercancel"===e.type?this.lastMoveEventInfo:td(t,this.transformPagePoint),this.history);this.startEvent&&r&&r(e,a),n&&n(e,a)},!na(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=r,this.contextWindow=n||window;const a=td(Cl(e),this.transformPagePoint),{point:o}=a,{timestamp:s}=Hi;this.history=[{...o,timestamp:s}];const{onSessionStart:l}=t;l&&l(e,nd(a,this.history)),this.removeListeners=xs(Tl(this.contextWindow,"pointermove",this.handlePointerMove),Tl(this.contextWindow,"pointerup",this.handlePointerUp),Tl(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Ui(this.updatePoint)}}function td(e,t){return t?{point:t(e.point)}:e}function rd(e,t){return{x:e.x-t.x,y:e.y-t.y}}function nd(e,t){let{point:r}=e;return{point:r,delta:rd(r,ad(t)),offset:rd(r,id(t)),velocity:od(t,.1)}}function id(e){return e[0]}function ad(e){return e[e.length-1]}function od(e,t){if(e.length<2)return{x:0,y:0};let r=e.length-1,n=null;const i=ad(e);for(;r>=0&&(n=e[r],!(i.timestamp-n.timestamp>mi(t)));)r--;if(!n)return{x:0,y:0};const a=fi(i.timestamp-n.timestamp);if(0===a)return{x:0,y:0};const o={x:(i.x-n.x)/a,y:(i.y-n.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function sd(e,t,r){return{min:void 0!==t?e.min+t:void 0,max:void 0!==r?e.max+r-(e.max-e.min):void 0}}function ld(e,t){let r=t.min-e.min,n=t.max-e.max;return t.max-t.min<e.max-e.min&&([r,n]=[n,r]),{min:r,max:n}}const dd=.35;function cd(e,t,r){return{min:ud(e,t),max:ud(e,r)}}function ud(e,t){return"number"===typeof e?e:e[t]||0}const hd=new WeakMap;class pd{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=e}start(e){let{snapToCursor:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:r}=this.visualElement;if(r&&!1===r.isPresent)return;const{dragSnapToOrigin:n}=this.getProps();this.panSession=new ed(e,{onSessionStart:e=>{const{dragSnapToOrigin:r}=this.getProps();r?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Cl(e).point)},onStart:(e,t)=>{const{drag:r,dragPropagation:n,onDragStart:i}=this.getProps();if(r&&!n&&(this.openDragLock&&this.openDragLock(),this.openDragLock="x"===(a=r)||"y"===a?Qi[a]?null:(Qi[a]=!0,()=>{Qi[a]=!1}):Qi.x||Qi.y?null:(Qi.x=Qi.y=!0,()=>{Qi.x=Qi.y=!1}),!this.openDragLock))return;var a;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Rl((e=>{let t=this.getAxisMotionValue(e).get()||0;if(Ja.test(t)){const{projection:r}=this.visualElement;if(r&&r.layout){const n=r.layout.layoutBox[e];if(n){t=$l(n)*(parseFloat(t)/100)}}}this.originPoint[e]=t})),i&&Bi.postRender((()=>i(e,t))),wa(this.visualElement,"transform");const{animationState:o}=this.visualElement;o&&o.setActive("whileDrag",!0)},onMove:(e,t)=>{const{dragPropagation:r,dragDirectionLock:n,onDirectionLock:i,onDrag:a}=this.getProps();if(!r&&!this.openDragLock)return;const{offset:o}=t;if(n&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r=null;Math.abs(e.y)>t?r="y":Math.abs(e.x)>t&&(r="x");return r}(o),void(null!==this.currentDirection&&i&&i(this.currentDirection));this.updateAxis("x",t.point,o),this.updateAxis("y",t.point,o),this.visualElement.render(),a&&a(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>Rl((e=>{var t;return"paused"===this.getAnimationState(e)&&(null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.play())}))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:n,contextWindow:Ql(this.visualElement)})}stop(e,t){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:n}=t;this.startAnimation(n);const{onDragEnd:i}=this.getProps();i&&Bi.postRender((()=>i(e,t)))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:n}=this.getProps();if(!r||!md(e,n,this.currentDirection))return;const i=this.getAxisMotionValue(e);let a=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(a=function(e,t,r){let{min:n,max:i}=t;return void 0!==n&&e<n?e=r?cs(n,e,r.min):Math.max(e,n):void 0!==i&&e>i&&(e=r?cs(i,e,r.max):Math.min(e,i)),e}(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:r}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):null===(e=this.visualElement.projection)||void 0===e?void 0:e.layout,i=this.constraints;t&&Jl(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!t||!n)&&function(e,t){let{top:r,left:n,bottom:i,right:a}=t;return{x:sd(e.x,n,a),y:sd(e.y,r,i)}}(n.layoutBox,t),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dd;return!1===e?e=0:!0===e&&(e=dd),{x:cd(e,"left","right"),y:cd(e,"top","bottom")}}(r),i!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&Rl((e=>{!1!==this.constraints&&this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const r={};return void 0!==t.min&&(r.min=t.min-e.min),void 0!==t.max&&(r.max=t.max-e.min),r}(n.layoutBox[e],this.constraints[e]))}))}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Jl(e))return!1;const r=e.current;li(null!==r,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");const{projection:n}=this.visualElement;if(!n||!n.layout)return!1;const i=function(e,t,r){const n=Xl(e,r),{scroll:i}=t;return i&&(Kl(n.x,i.offset.x),Kl(n.y,i.offset.y)),n}(r,n.root,this.visualElement.getTransformPagePoint());let a=function(e,t){return{x:ld(e.x,t.x),y:ld(e.y,t.y)}}(n.layout.layoutBox,i);if(t){const e=t(function(e){let{x:t,y:r}=e;return{top:r.min,right:t.max,bottom:r.max,left:t.min}}(a));this.hasMutatedConstraints=!!e,e&&(a=El(e))}return a}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:n,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},l=Rl((o=>{if(!md(o,t,this.currentDirection))return;let l=s&&s[o]||{};a&&(l={min:0,max:0});const d=n?200:1e6,c=n?40:1e7,u={type:"inertia",velocity:r?e[o]:0,bounceStiffness:d,bounceDamping:c,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};return this.startAxisValueAnimation(o,u)}));return Promise.all(l).then(o)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return wa(this.visualElement,e),r.start(nl(e,r,0,t,this.visualElement,!1))}stopAnimation(){Rl((e=>this.getAxisMotionValue(e).stop()))}pauseAnimation(){Rl((e=>{var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.pause()}))}getAnimationState(e){var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),n=r[t];return n||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){Rl((t=>{const{drag:r}=this.getProps();if(!md(t,r,this.currentDirection))return;const{projection:n}=this.visualElement,i=this.getAxisMotionValue(t);if(n&&n.layout){const{min:r,max:a}=n.layout.layoutBox[t];i.set(e[t]-cs(r,a,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!Jl(t)||!r||!this.constraints)return;this.stopAnimation();const n={x:0,y:0};Rl((e=>{const t=this.getAxisMotionValue(e);if(t&&!1!==this.constraints){const r=t.get();n[e]=function(e,t){let r=.5;const n=$l(e),i=$l(t);return i>n?r=hi(t.min,t.max-n,e.min):n>i&&(r=hi(e.min,e.max-i,t.min)),La(0,1,r)}({min:r,max:r},this.constraints[e])}}));const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Rl((t=>{if(!md(t,e,null))return;const r=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];r.set(cs(i,a,n[t]))}))}addListeners(){if(!this.visualElement.current)return;hd.set(this.visualElement,this);const e=Tl(this.visualElement.current,"pointerdown",(e=>{const{drag:t,dragListener:r=!0}=this.getProps();t&&r&&this.start(e)})),t=()=>{const{dragConstraints:e}=this.getProps();Jl(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,n=r.addEventListener("measure",t);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),Bi.read(t);const i=kl(window,"resize",(()=>this.scalePositionWithinConstraints())),a=r.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:r}=e;this.isDragging&&r&&(Rl((e=>{const r=this.getAxisMotionValue(e);r&&(this.originPoint[e]+=t[e].translate,r.set(r.get()+t[e].translate))})),this.visualElement.render())}));return()=>{i(),e(),n(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:n=!1,dragConstraints:i=!1,dragElastic:a=dd,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:n,dragConstraints:i,dragElastic:a,dragMomentum:o}}}function md(e,t,r){return(!0===t||t===e)&&(null===r||r===e)}const fd=e=>(t,r)=>{e&&Bi.postRender((()=>e(t,r)))};const gd=(0,e.createContext)(null);function vd(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const r=(0,e.useContext)(gd);if(null===r)return[!0,null];const{isPresent:n,onExitComplete:i,register:a}=r,o=(0,e.useId)();(0,e.useEffect)((()=>{if(t)return a(o)}),[t]);const s=(0,e.useCallback)((()=>t&&i&&i(o)),[o,i,t]);return!n&&i?[!1,s]:[!0]}const xd=(0,e.createContext)({}),yd=(0,e.createContext)({}),bd={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function wd(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const jd={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!Za.test(e))return e;e=parseFloat(e)}return`${wd(e,t.target.x)}% ${wd(e,t.target.y)}%`}},Sd={correct:(e,t)=>{let{treeScale:r,projectionDelta:n}=t;const i=e,a=mo.parse(e);if(a.length>5)return i;const o=mo.createTransformer(e),s="number"!==typeof a[0]?1:0,l=n.x.scale*r.x,d=n.y.scale*r.y;a[0+s]/=l,a[1+s]/=d;const c=cs(l,d,.5);return"number"===typeof a[2+s]&&(a[2+s]/=c),"number"===typeof a[3+s]&&(a[3+s]/=c),o(a)}},kd={};class Cd extends e.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:n}=this.props,{projection:i}=e;!function(e){for(const t in e)kd[t]=e[t],Yo(t)&&(kd[t].isCSSVariable=!0)}(Ed),i&&(t.group&&t.group.add(i),r&&r.register&&n&&r.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",(()=>{this.safeToRemove()})),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),bd.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:n,isPresent:i}=this.props,a=r.projection;return a?(a.isPresent=i,n||e.layoutDependency!==t||void 0===t||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||Bi.postRender((()=>{const e=a.getStack();e&&e.members.length||this.safeToRemove()}))),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),qi.postRender((()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:n}=e;n&&(n.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(n),r&&r.deregister&&r.deregister(n))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Td(t){const[r,n]=vd(),i=(0,e.useContext)(xd);return(0,Qn.jsx)(Cd,{...t,layoutGroup:i,switchLayoutGroup:(0,e.useContext)(yd),isPresent:r,safeToRemove:n})}const Ed={borderRadius:{...jd,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:jd,borderTopRightRadius:jd,borderBottomLeftRadius:jd,borderBottomRightRadius:jd,boxShadow:Sd};const $d=(e,t)=>e.depth-t.depth;class Pd{constructor(){this.children=[],this.isDirty=!1}add(e){ii(this.children,e),this.isDirty=!0}remove(e){ai(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort($d),this.isDirty=!1,this.children.forEach(e)}}function Ad(e,t){const r=Xi.now(),n=i=>{let{timestamp:a}=i;const o=a-r;o>=t&&(Ui(n),e(o-t))};return Bi.read(n,!0),()=>Ui(n)}function Id(e){const t=ba(e)?e.get():e;return(e=>Boolean(e&&"object"===typeof e&&e.mix&&e.toValue))(t)?t.toValue():t}const zd=["TopLeft","TopRight","BottomLeft","BottomRight"],Md=zd.length,Fd=e=>"string"===typeof e?parseFloat(e):e,Rd=e=>"number"===typeof e||Za.test(e);function Od(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const Nd=Dd(0,.5,Ra),Ld=Dd(.5,.95,oi);function Dd(e,t,r){return n=>n<e?0:n>t?1:r(hi(e,t,n))}function Vd(e,t){e.min=t.min,e.max=t.max}function _d(e,t){Vd(e.x,t.x),Vd(e.y,t.y)}function Bd(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Ud(e,t,r,n,i){return e=_l(e-=t,1/r,n),void 0!==i&&(e=_l(e,1/i,n)),e}function Hd(e,t,r,n,i){let[a,o,s]=r;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,i=arguments.length>4?arguments[4]:void 0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;Ja.test(t)&&(t=parseFloat(t),t=cs(o.min,o.max,t/100)-o.min);if("number"!==typeof t)return;let s=cs(a.min,a.max,n);e===a&&(s-=t),e.min=Ud(e.min,t,r,s,i),e.max=Ud(e.max,t,r,s,i)}(e,t[a],t[o],t[s],t.scale,n,i)}const Wd=["x","scaleX","originX"],qd=["y","scaleY","originY"];function Kd(e,t,r,n){Hd(e.x,t,Wd,r?r.x:void 0,n?n.x:void 0),Hd(e.y,t,qd,r?r.y:void 0,n?n.y:void 0)}function Gd(e){return 0===e.translate&&1===e.scale}function Yd(e){return Gd(e.x)&&Gd(e.y)}function Xd(e,t){return e.min===t.min&&e.max===t.max}function Qd(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Jd(e,t){return Qd(e.x,t.x)&&Qd(e.y,t.y)}function Zd(e){return $l(e.x)/$l(e.y)}function ec(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class tc{constructor(){this.members=[]}add(e){ii(this.members,e),e.scheduleRender()}remove(e){if(ai(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex((t=>e===t));if(0===t)return!1;let r;for(let n=t;n>=0;n--){const e=this.members[n];if(!1!==e.isPresent){r=e;break}}return!!r&&(this.promote(r),!0)}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:n}=e.options;!1===n&&r.hide()}}exitAnimationComplete(){this.members.forEach((e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()}))}scheduleRender(){this.members.forEach((e=>{e.instance&&e.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const rc={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},nc=["","X","Y","Z"],ic={visibility:"hidden"};let ac=0;function oc(e,t,r,n){const{latestValues:i}=t;i[e]&&(r[e]=i[e],t.setStaticValue(e,0),n&&(n[e]=0))}function sc(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const r=ka(t);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:t,layoutId:n}=e.options;window.MotionCancelOptimisedAnimation(r,"transform",Bi,!(t||n))}const{parent:n}=e;n&&!n.hasCheckedOptimisedAppear&&sc(n)}function lc(e){let{attachResizeListener:t,defaultParent:r,measureScroll:n,checkIsScrollRoot:i,resetTransform:a}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===r||void 0===r?void 0:r();this.id=ac++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Vi.value&&(rc.nodes=rc.calculatedTargetDeltas=rc.calculatedProjections=0),this.nodes.forEach(uc),this.nodes.forEach(xc),this.nodes.forEach(yc),this.nodes.forEach(hc),Vi.addProjectionMetrics&&Vi.addProjectionMetrics(rc)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let r=0;r<this.path.length;r++)this.path[r].shouldResetTransform=!0;this.root===this&&(this.nodes=new Pd)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new pi),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];t&&t.notify(...n)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root.hasTreeAnimated;if(this.instance)return;var n;this.isSVG=(n=e)instanceof SVGElement&&"svg"!==n.tagName,this.instance=e;const{layoutId:i,layout:a,visualElement:o}=this.options;if(o&&!o.current&&o.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),r&&(a||i)&&(this.isLayoutDirty=!0),t){let r;const n=()=>this.root.updateBlockedByResize=!1;t(e,(()=>{this.root.updateBlockedByResize=!0,r&&r(),r=Ad(n,250),bd.hasAnimatedSinceResize&&(bd.hasAnimatedSinceResize=!1,this.nodes.forEach(vc))}))}i&&this.root.registerSharedNode(i,this),!1!==this.options.animate&&o&&(i||a)&&this.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:r,hasRelativeLayoutChanged:n,layout:i}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const a=this.options.transition||o.getDefaultTransition()||Cc,{onLayoutAnimationStart:s,onLayoutAnimationComplete:l}=o.getProps(),d=!this.targetLayout||!Jd(this.targetLayout,i),c=!r&&n;if(this.options.layoutRoot||this.resumeFrom||c||r&&(d||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,c);const e={...Ci(a,"layout"),onPlay:s,onComplete:l};(o.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else r||vc(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ui(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(bc),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&sc(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let i=0;i<this.path.length;i++){const e=this.path[i];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:r}=this.options;if(void 0===t&&!r)return;const n=this.getTransformTemplate();this.prevTransformTemplateValue=n?n(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(mc);this.isUpdating||this.nodes.forEach(fc),this.isUpdating=!1,this.nodes.forEach(gc),this.nodes.forEach(dc),this.nodes.forEach(cc),this.clearAllSnapshots();const e=Xi.now();Hi.delta=La(0,1e3/60,e-Hi.timestamp),Hi.timestamp=e,Hi.isProcessing=!0,Wi.update.process(Hi),Wi.preRender.process(Hi),Wi.render.process(Hi),Hi.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,qi.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(pc),this.sharedNodes.forEach(wc)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Bi.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Bi.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||$l(this.snapshot.measuredBox.x)||$l(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let r=0;r<this.path.length;r++){this.path[r].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t){const t=i(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!a)return;const e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Yd(this.projectionDelta),r=this.getTransformTemplate(),n=r?r(this.latestValues,""):void 0,i=n!==this.prevTransformTemplateValue;e&&(t||Ll(this.latestValues)||i)&&(a(this.instance,n),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let r=this.removeElementScroll(t);var n;return e&&(r=this.removeTransform(r)),$c((n=r).x),$c(n.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:r,latestValues:{},source:this.id}}measurePageBox(){var e;const{visualElement:t}=this.options;if(!t)return{x:{min:0,max:0},y:{min:0,max:0}};const r=t.measureViewportBox();if(!((null===(e=this.scroll)||void 0===e?void 0:e.wasRoot)||this.path.some(Ac))){const{scroll:e}=this.root;e&&(Kl(r.x,e.offset.x),Kl(r.y,e.offset.y))}return r}removeElementScroll(e){var t;const r={x:{min:0,max:0},y:{min:0,max:0}};if(_d(r,e),null===(t=this.scroll)||void 0===t?void 0:t.wasRoot)return r;for(let n=0;n<this.path.length;n++){const t=this.path[n],{scroll:i,options:a}=t;t!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&_d(r,e),Kl(r.x,i.offset.x),Kl(r.y,i.offset.y))}return r}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const r={x:{min:0,max:0},y:{min:0,max:0}};_d(r,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&Yl(r,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),Ll(e.latestValues)&&Yl(r,e.latestValues)}return Ll(this.latestValues)&&Yl(r,this.latestValues),r}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};_d(t,e);for(let r=0;r<this.path.length;r++){const e=this.path[r];if(!e.instance)continue;if(!Ll(e.latestValues))continue;Nl(e.latestValues)&&e.updateSnapshot();const n={x:{min:0,max:0},y:{min:0,max:0}};_d(n,e.measurePageBox()),Kd(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,n)}return Ll(this.latestValues)&&Kd(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Hi.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t;const r=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=r.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=r.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=r.isSharedProjectionDirty);const n=Boolean(this.resumingFrom)||this!==r;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty)||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:i,layoutId:a}=this.options;if(this.layout&&(i||a)){if(this.resolvedRelativeTargetAt=Hi.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Ml(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),_d(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var o,s,l;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),o=this.target,s=this.relativeTarget,l=this.relativeParent.target,Il(o.x,s.x,l.x),Il(o.y,s.y,l.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):_d(this.target,this.layout.layoutBox),Hl(this.target,this.targetDelta)):_d(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Ml(this.relativeTargetOrigin,this.target,e.target),_d(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Vi.value&&rc.calculatedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!Nl(this.parent.latestValues)&&!Dl(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var e;const t=this.getLead(),r=Boolean(this.resumingFrom)||this!==t;let n=!0;if((this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty))&&(n=!1),r&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===Hi.timestamp&&(n=!1),n)return;const{layout:i,layoutId:a}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!i&&!a)return;_d(this.layoutCorrected,this.layout.layoutBox);const o=this.treeScale.x,s=this.treeScale.y;!function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=r.length;if(!i)return;let a,o;t.x=t.y=1;for(let s=0;s<i;s++){a=r[s],o=a.projectionDelta;const{visualElement:i}=a.options;i&&i.props.style&&"contents"===i.props.style.display||(n&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Yl(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Hl(e,o)),n&&Ll(a.latestValues)&&Yl(e,a.latestValues))}t.x<ql&&t.x>Wl&&(t.x=1),t.y<ql&&t.y>Wl&&(t.y=1)}(this.layoutCorrected,this.treeScale,this.path,r),!t.layout||t.target||1===this.treeScale.x&&1===this.treeScale.y||(t.target=t.layout.layoutBox,t.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}});const{target:l}=t;l?(this.projectionDelta&&this.prevProjectionDelta?(Bd(this.prevProjectionDelta.x,this.projectionDelta.x),Bd(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),Al(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.treeScale.x===o&&this.treeScale.y===s&&ec(this.projectionDelta.x,this.prevProjectionDelta.x)&&ec(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),Vi.value&&rc.calculatedProjections++):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];var t;if(null===(t=this.options.visualElement)||void 0===t||t.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const r=this.snapshot,n=r?r.latestValues:{},i={...this.latestValues},a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const o={x:{min:0,max:0},y:{min:0,max:0}},s=(r?r.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),d=!l||l.members.length<=1,c=Boolean(s&&!d&&!0===this.options.crossfade&&!this.path.some(kc));let u;this.animationProgress=0,this.mixTargetDelta=t=>{const r=t/1e3;jc(a.x,e.x,r),jc(a.y,e.y,r),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ml(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(e,t,r,n){Sc(e.x,t.x,r.x,n),Sc(e.y,t.y,r.y,n)}(this.relativeTarget,this.relativeTargetOrigin,o,r),u&&function(e,t){return Xd(e.x,t.x)&&Xd(e.y,t.y)}(this.relativeTarget,u)&&(this.isProjectionDirty=!1),u||(u={x:{min:0,max:0},y:{min:0,max:0}}),_d(u,this.relativeTarget)),s&&(this.animationValues=i,function(e,t,r,n,i,a){i?(e.opacity=cs(0,void 0!==r.opacity?r.opacity:1,Nd(n)),e.opacityExit=cs(void 0!==t.opacity?t.opacity:1,0,Ld(n))):a&&(e.opacity=cs(void 0!==t.opacity?t.opacity:1,void 0!==r.opacity?r.opacity:1,n));for(let o=0;o<Md;o++){const i=`border${zd[o]}Radius`;let a=Od(t,i),s=Od(r,i);void 0===a&&void 0===s||(a||(a=0),s||(s=0),0===a||0===s||Rd(a)===Rd(s)?(e[i]=Math.max(cs(Fd(a),Fd(s),n),0),(Ja.test(s)||Ja.test(a))&&(e[i]+="%")):e[i]=s)}(t.rotate||r.rotate)&&(e.rotate=cs(t.rotate||0,r.rotate||0,n))}(i,n,this.latestValues,r,c,d)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=r},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ui(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Bi.update((()=>{bd.hasAnimatedSinceResize=!0,ca.layout++,this.currentAnimation=function(e,t,r){const n=ba(e)?e:pa(e);return n.start(nl("",n,t,r)),n.animation}(0,1e3,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{ca.layout--},onComplete:()=>{ca.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:r,layout:n,latestValues:i}=e;if(t&&r&&n){if(this!==e&&this.layout&&n&&Pc(this.options.animationType,this.layout.layoutBox,n.layoutBox)){r=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=$l(this.layout.layoutBox.x);r.x.min=e.target.x.min,r.x.max=r.x.min+t;const n=$l(this.layout.layoutBox.y);r.y.min=e.target.y.min,r.y.max=r.y.min+n}_d(t,r),Yl(t,i),Al(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new tc);this.sharedNodes.get(e).add(t);const r=t.options.initialPromotionConfig;t.promote({transition:r?r.transition:void 0,preserveFollowOpacity:r&&r.shouldPreserveFollowOpacity?r.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){var e;const{layoutId:t}=this.options;return t&&(null===(e=this.getStack())||void 0===e?void 0:e.lead)||this}getPrevLead(){var e;const{layoutId:t}=this.options;return t?null===(e=this.getStack())||void 0===e?void 0:e.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=this.getStack();n&&n.promote(this,r),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetSkewAndRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:r}=e;if((r.z||r.rotate||r.rotateX||r.rotateY||r.rotateZ||r.skewX||r.skewY)&&(t=!0),!t)return;const n={};r.z&&oc("z",e,n,this.animationValues);for(let i=0;i<nc.length;i++)oc(`rotate${nc[i]}`,e,n,this.animationValues),oc(`skew${nc[i]}`,e,n,this.animationValues);e.render();for(const i in n)e.setStaticValue(i,n[i]),this.animationValues&&(this.animationValues[i]=n[i]);e.scheduleRender()}getProjectionStyles(e){var t,r;if(!this.instance||this.isSVG)return;if(!this.isVisible)return ic;const n={visibility:""},i=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,n.opacity="",n.pointerEvents=Id(null===e||void 0===e?void 0:e.pointerEvents)||"",n.transform=i?i(this.latestValues,""):"none",n;const a=this.getLead();if(!this.projectionDelta||!this.layout||!a.target){const t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=Id(null===e||void 0===e?void 0:e.pointerEvents)||""),this.hasProjected&&!Ll(this.latestValues)&&(t.transform=i?i({},""):"none",this.hasProjected=!1),t}const o=a.animationValues||a.latestValues;this.applyTransformsToTarget(),n.transform=function(e,t,r){let n="";const i=e.x.translate/t.x,a=e.y.translate/t.y,o=(null===r||void 0===r?void 0:r.z)||0;if((i||a||o)&&(n=`translate3d(${i}px, ${a}px, ${o}px) `),1===t.x&&1===t.y||(n+=`scale(${1/t.x}, ${1/t.y}) `),r){const{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=r;e&&(n=`perspective(${e}px) ${n}`),t&&(n+=`rotate(${t}deg) `),i&&(n+=`rotateX(${i}deg) `),a&&(n+=`rotateY(${a}deg) `),o&&(n+=`skewX(${o}deg) `),s&&(n+=`skewY(${s}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return 1===s&&1===l||(n+=`scale(${s}, ${l})`),n||"none"}(this.projectionDeltaWithTransform,this.treeScale,o),i&&(n.transform=i(o,n.transform));const{x:s,y:l}=this.projectionDelta;n.transformOrigin=`${100*s.origin}% ${100*l.origin}% 0`,a.animationValues?n.opacity=a===this?null!==(r=null!==(t=o.opacity)&&void 0!==t?t:this.latestValues.opacity)&&void 0!==r?r:1:this.preserveOpacity?this.latestValues.opacity:o.opacityExit:n.opacity=a===this?void 0!==o.opacity?o.opacity:"":void 0!==o.opacityExit?o.opacityExit:0;for(const d in kd){if(void 0===o[d])continue;const{correct:e,applyTo:t,isCSSVariable:r}=kd[d],i="none"===n.transform?o[d]:e(o[d],a);if(t){const e=t.length;for(let r=0;r<e;r++)n[t[r]]=i}else r?this.options.visualElement.renderState.vars[d]=i:n[d]=i}return this.options.layoutId&&(n.pointerEvents=a===this?Id(null===e||void 0===e?void 0:e.pointerEvents)||"":"none"),n}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((e=>{var t;return null===(t=e.currentAnimation)||void 0===t?void 0:t.stop()})),this.root.nodes.forEach(mc),this.root.sharedNodes.clear()}}}function dc(e){e.updateLayout()}function cc(e){var t;const r=(null===(t=e.resumeFrom)||void 0===t?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&r&&e.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:n}=e.layout,{animationType:i}=e.options,a=r.source!==e.layout.source;"size"===i?Rl((e=>{const n=a?r.measuredBox[e]:r.layoutBox[e],i=$l(n);n.min=t[e].min,n.max=n.min+i})):Pc(i,r.layoutBox,t)&&Rl((n=>{const i=a?r.measuredBox[n]:r.layoutBox[n],o=$l(t[n]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[n].max=e.relativeTarget[n].min+o)}));const o={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};Al(o,t,r.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};a?Al(s,e.applyTransform(n,!0),r.measuredBox):Al(s,t,r.layoutBox);const l=!Yd(o);let d=!1;if(!e.resumeFrom){const n=e.getClosestProjectingParent();if(n&&!n.resumeFrom){const{snapshot:i,layout:a}=n;if(i&&a){const o={x:{min:0,max:0},y:{min:0,max:0}};Ml(o,r.layoutBox,i.layoutBox);const s={x:{min:0,max:0},y:{min:0,max:0}};Ml(s,t,a.layoutBox),Jd(o,s)||(d=!0),n.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=n)}}}e.notifyListeners("didUpdate",{layout:t,snapshot:r,delta:s,layoutDelta:o,hasLayoutChanged:l,hasRelativeLayoutChanged:d})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function uc(e){Vi.value&&rc.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function hc(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function pc(e){e.clearSnapshot()}function mc(e){e.clearMeasurements()}function fc(e){e.isLayoutDirty=!1}function gc(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function vc(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function xc(e){e.resolveTargetDelta()}function yc(e){e.calcProjection()}function bc(e){e.resetSkewAndRotation()}function wc(e){e.removeLeadSnapshot()}function jc(e,t,r){e.translate=cs(t.translate,0,r),e.scale=cs(t.scale,1,r),e.origin=t.origin,e.originPoint=t.originPoint}function Sc(e,t,r,n){e.min=cs(t.min,r.min,n),e.max=cs(t.max,r.max,n)}function kc(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const Cc={duration:.45,ease:[.4,0,.1,1]},Tc=e=>"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Ec=Tc("applewebkit/")&&!Tc("chrome/")?Math.round:oi;function $c(e){e.min=Ec(e.min),e.max=Ec(e.max)}function Pc(e,t,r){return"position"===e||"preserve-aspect"===e&&(n=Zd(t),i=Zd(r),a=.2,!(Math.abs(n-i)<=a));var n,i,a}function Ac(e){var t;return e!==e.root&&(null===(t=e.scroll)||void 0===t?void 0:t.wasRoot)}const Ic=lc({attachResizeListener:(e,t)=>kl(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),zc={current:void 0},Mc=lc({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!zc.current){const e=new Ic({});e.mount(window),e.setOptions({layoutScroll:!0}),zc.current=e}return zc.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),Fc={pan:{Feature:class extends wl{constructor(){super(...arguments),this.removePointerDownListener=oi}onPointerDown(e){this.session=new ed(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ql(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:n}=this.node.getProps();return{onSessionStart:fd(e),onStart:fd(t),onMove:r,onEnd:(e,t)=>{delete this.session,n&&Bi.postRender((()=>n(e,t)))}}}mount(){this.removePointerDownListener=Tl(this.node.current,"pointerdown",(e=>this.onPointerDown(e)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends wl{constructor(e){super(e),this.removeGroupControls=oi,this.removeListeners=oi,this.controls=new pd(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||oi}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:Mc,MeasureLayout:Td}};function Rc(e,t,r){const{props:n}=e;e.animationState&&n.whileHover&&e.animationState.setActive("whileHover","Start"===r);const i=n["onHover"+r];i&&Bi.postRender((()=>i(t,Cl(t))))}function Oc(e,t,r){const{props:n}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&n.whileTap&&e.animationState.setActive("whileTap","Start"===r);const i=n["onTap"+("End"===r?"":r)];i&&Bi.postRender((()=>i(t,Cl(t))))}const Nc=new WeakMap,Lc=new WeakMap,Dc=e=>{const t=Nc.get(e.target);t&&t(e)},Vc=e=>{e.forEach(Dc)};function _c(e,t,r){const n=function(e){let{root:t,...r}=e;const n=t||document;Lc.has(n)||Lc.set(n,{});const i=Lc.get(n),a=JSON.stringify(r);return i[a]||(i[a]=new IntersectionObserver(Vc,{root:t,...r})),i[a]}(t);return Nc.set(e,r),n.observe(e),()=>{Nc.delete(e),n.unobserve(e)}}const Bc={some:0,all:1};const Uc={inView:{Feature:class extends wl{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:n="some",once:i}=e,a={root:t?t.current:void 0,rootMargin:r,threshold:"number"===typeof n?n:Bc[n]};return _c(this.node.current,a,(e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,i&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:r,onViewportLeave:n}=this.node.getProps(),a=t?r:n;a&&a(e)}))}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,r=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:r={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==r[e]}(e,t));r&&this.startObserver()}unmount(){}}},tap:{Feature:class extends wl{mount(){const{current:e}=this.node;e&&(this.unmount=da(e,((e,t)=>(Oc(this.node,t,"Start"),(e,t)=>{let{success:r}=t;return Oc(this.node,e,r?"End":"Cancel")})),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}},focus:{Feature:class extends wl{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(Nz){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=xs(kl(this.node.current,"focus",(()=>this.onFocus())),kl(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}}},hover:{Feature:class extends wl{mount(){const{current:e}=this.node;e&&(this.unmount=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[n,i,a]=Zi(e,r),o=e=>{if(!ea(e))return;const{target:r}=e,n=t(r,e);if("function"!==typeof n||!r)return;const a=e=>{ea(e)&&(n(e),r.removeEventListener("pointerleave",a))};r.addEventListener("pointerleave",a,i)};return n.forEach((e=>{e.addEventListener("pointerenter",o,i)})),a}(e,((e,t)=>(Rc(this.node,t,"Start"),e=>Rc(this.node,e,"End")))))}unmount(){}}}},Hc={layout:{ProjectionNode:Mc,MeasureLayout:Td}},Wc=(0,e.createContext)({strict:!1}),qc=(0,e.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Kc=(0,e.createContext)({});function Gc(e){return xi(e.animate)||ul.some((t=>dl(e[t])))}function Yc(e){return Boolean(Gc(e)||e.variants)}function Xc(t){const{initial:r,animate:n}=function(e,t){if(Gc(e)){const{initial:t,animate:r}=e;return{initial:!1===t||dl(t)?t:void 0,animate:dl(r)?r:void 0}}return!1!==e.inherit?t:{}}(t,(0,e.useContext)(Kc));return(0,e.useMemo)((()=>({initial:r,animate:n})),[Qc(r),Qc(n)])}function Qc(e){return Array.isArray(e)?e.join(" "):e}const Jc="undefined"!==typeof window,Zc={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},eu={};for(const r in Zc)eu[r]={isEnabled:e=>Zc[r].some((t=>!!e[t]))};const tu=Symbol.for("motionComponentSymbol");function ru(t,r,n){return(0,e.useCallback)((e=>{e&&t.onMount&&t.onMount(e),r&&(e?r.mount(e):r.unmount()),n&&("function"===typeof n?n(e):Jl(n)&&(n.current=e))}),[r])}const nu=Jc?e.useLayoutEffect:e.useEffect;function iu(t,r,n,i,a){var o,s;const{visualElement:l}=(0,e.useContext)(Kc),d=(0,e.useContext)(Wc),c=(0,e.useContext)(gd),u=(0,e.useContext)(qc).reducedMotion,h=(0,e.useRef)(null);i=i||d.renderer,!h.current&&i&&(h.current=i(t,{visualState:r,parent:l,props:n,presenceContext:c,blockInitialAnimation:!!c&&!1===c.initial,reducedMotionConfig:u}));const p=h.current,m=(0,e.useContext)(yd);!p||p.projection||!a||"html"!==p.type&&"svg"!==p.type||function(e,t,r,n){const{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:l,layoutRoot:d}=t;e.projection=new r(e.latestValues,t["data-framer-portal-id"]?void 0:au(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:Boolean(o)||s&&Jl(s),visualElement:e,animationType:"string"===typeof a?a:"both",initialPromotionConfig:n,layoutScroll:l,layoutRoot:d})}(h.current,n,a,m);const f=(0,e.useRef)(!1);(0,e.useInsertionEffect)((()=>{p&&f.current&&p.update(n,c)}));const g=n[Sa],v=(0,e.useRef)(Boolean(g)&&!(null===(o=window.MotionHandoffIsComplete)||void 0===o?void 0:o.call(window,g))&&(null===(s=window.MotionHasOptimisedAnimation)||void 0===s?void 0:s.call(window,g)));return nu((()=>{p&&(f.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),qi.render(p.render),v.current&&p.animationState&&p.animationState.animateChanges())})),(0,e.useEffect)((()=>{p&&(!v.current&&p.animationState&&p.animationState.animateChanges(),v.current&&(queueMicrotask((()=>{var e;null===(e=window.MotionHandoffMarkAsComplete)||void 0===e||e.call(window,g)})),v.current=!1))})),p}function au(e){if(e)return!1!==e.options.allowProjection?e.projection:au(e.parent)}function ou(t){let{preloadedFeatures:r,createVisualElement:n,useRender:i,useVisualState:a,Component:o}=t;var s,l;function d(t,r){let s;const l={...(0,e.useContext)(qc),...t,layoutId:su(t)},{isStatic:d}=l,c=Xc(t),u=a(t,d);if(!d&&Jc){!function(){(0,e.useContext)(Wc).strict;0}();const t=function(e){const{drag:t,layout:r}=eu;if(!t&&!r)return{};const n={...t,...r};return{MeasureLayout:(null===t||void 0===t?void 0:t.isEnabled(e))||(null===r||void 0===r?void 0:r.isEnabled(e))?n.MeasureLayout:void 0,ProjectionNode:n.ProjectionNode}}(l);s=t.MeasureLayout,c.visualElement=iu(o,u,l,n,t.ProjectionNode)}return(0,Qn.jsxs)(Kc.Provider,{value:c,children:[s&&c.visualElement?(0,Qn.jsx)(s,{visualElement:c.visualElement,...l}):null,i(o,t,ru(u,c.visualElement,r),u,d,c.visualElement)]})}r&&function(e){for(const t in e)eu[t]={...eu[t],...e[t]}}(r),d.displayName=`motion.${"string"===typeof o?o:`create(${null!==(l=null!==(s=o.displayName)&&void 0!==s?s:o.name)&&void 0!==l?l:""})`}`;const c=(0,e.forwardRef)(d);return c[tu]=o,c}function su(t){let{layoutId:r}=t;const n=(0,e.useContext)(xd).id;return n&&void 0!==r?n+"-"+r:r}function lu(e,t){let{layout:r,layoutId:n}=t;return fa.has(e)||e.startsWith("origin")||(r||void 0!==n)&&(!!kd[e]||"opacity"===e)}const du=(e,t)=>t&&"number"===typeof e?t.transform(e):e,cu={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},uu=ma.length;function hu(e,t,r){const{style:n,vars:i,transformOrigin:a}=e;let o=!1,s=!1;for(const l in t){const e=t[l];if(fa.has(l))o=!0;else if(Yo(l))i[l]=e;else{const t=du(e,jo[l]);l.startsWith("origin")?(s=!0,a[l]=t):n[l]=t}}if(t.transform||(o||r?n.transform=function(e,t,r){let n="",i=!0;for(let a=0;a<uu;a++){const o=ma[a],s=e[o];if(void 0===s)continue;let l=!0;if(l="number"===typeof s?s===(o.startsWith("scale")?1:0):0===parseFloat(s),!l||r){const e=du(s,jo[o]);l||(i=!1,n+=`${cu[o]||o}(${e}) `),r&&(t[o]=e)}}return n=n.trim(),r?n=r(t,i?"":n):i&&(n="none"),n}(t,e.transform,r):n.transform&&(n.transform="none")),s){const{originX:e="50%",originY:t="50%",originZ:r=0}=a;n.transformOrigin=`${e} ${t} ${r}`}}const pu=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function mu(e,t,r){for(const n in t)ba(t[n])||lu(n,r)||(e[n]=t[n])}function fu(t,r){const n={};return mu(n,t.style||{},t),Object.assign(n,function(t,r){let{transformTemplate:n}=t;return(0,e.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{}};return hu(e,r,n),Object.assign({},e.vars,e.style)}),[r])}(t,r)),n}function gu(e,t){const r={},n=fu(e,t);return e.drag&&!1!==e.dragListener&&(r.draggable=!1,n.userSelect=n.WebkitUserSelect=n.WebkitTouchCallout="none",n.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=n,r}const vu=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function xu(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||vu.has(e)}let yu=e=>!xu(e);try{(bu=require("@emotion/is-prop-valid").default)&&(yu=e=>e.startsWith("on")?!xu(e):bu(e))}catch(Lz){}var bu;const wu=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ju(e){return"string"===typeof e&&!e.includes("-")&&!!(wu.indexOf(e)>-1||/[A-Z]/u.test(e))}const Su={offset:"stroke-dashoffset",array:"stroke-dasharray"},ku={offset:"strokeDashoffset",array:"strokeDasharray"};function Cu(e,t,r){return"string"===typeof e?e:Za.transform(t+r*e)}function Tu(e,t,r,n){let{attrX:i,attrY:a,attrScale:o,originX:s,originY:l,pathLength:d,pathSpacing:c=1,pathOffset:u=0,...h}=t;if(hu(e,h,n),r)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:p,style:m,dimensions:f}=e;p.transform&&(f&&(m.transform=p.transform),delete p.transform),f&&(void 0!==s||void 0!==l||m.transform)&&(m.transformOrigin=function(e,t,r){return`${Cu(t,e.x,e.width)} ${Cu(r,e.y,e.height)}`}(f,void 0!==s?s:.5,void 0!==l?l:.5)),void 0!==i&&(p.x=i),void 0!==a&&(p.y=a),void 0!==o&&(p.scale=o),void 0!==d&&function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const a=i?Su:ku;e[a.offset]=Za.transform(-n);const o=Za.transform(t),s=Za.transform(r);e[a.array]=`${o} ${s}`}(p,d,c,u,!1)}const Eu=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),$u=e=>"string"===typeof e&&"svg"===e.toLowerCase();function Pu(t,r,n,i){const a=(0,e.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return Tu(e,r,$u(i),t.transformTemplate),{...e.attrs,style:{...e.style}}}),[r]);if(t.style){const e={};mu(e,t.style,t),a.style={...e,...a.style}}return a}function Au(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(r,n,i,a,o)=>{let{latestValues:s}=a;const l=(ju(r)?Pu:gu)(n,s,o,r),d=function(e,t,r){const n={};for(const i in e)"values"===i&&"object"===typeof e.values||(yu(i)||!0===r&&xu(i)||!t&&!xu(i)||e.draggable&&i.startsWith("onDrag"))&&(n[i]=e[i]);return n}(n,"string"===typeof r,t),c=r!==e.Fragment?{...d,...l,ref:i}:{},{children:u}=n,h=(0,e.useMemo)((()=>ba(u)?u.get():u),[u]);return(0,e.createElement)(r,{...c,children:h})}}function Iu(t){const r=(0,e.useRef)(null);return null===r.current&&(r.current=t()),r.current}const zu=t=>(r,n)=>{const i=(0,e.useContext)(Kc),a=(0,e.useContext)(gd),o=()=>function(e,t,r,n){let{scrapeMotionValuesFromProps:i,createRenderState:a,onUpdate:o}=e;const s={latestValues:Mu(t,r,n,i),renderState:a()};return o&&(s.onMount=e=>o({props:t,current:e,...s}),s.onUpdate=e=>o(e)),s}(t,r,i,a);return n?o():Iu(o)};function Mu(e,t,r,n){const i={},a=n(e,{});for(const h in a)i[h]=Id(a[h]);let{initial:o,animate:s}=e;const l=Gc(e),d=Yc(e);t&&d&&!l&&!1!==e.inherit&&(void 0===o&&(o=t.initial),void 0===s&&(s=t.animate));let c=!!r&&!1===r.initial;c=c||!1===o;const u=c?s:o;if(u&&"boolean"!==typeof u&&!xi(u)){const t=Array.isArray(u)?u:[u];for(let r=0;r<t.length;r++){const n=bi(e,t[r]);if(n){const{transitionEnd:e,transition:t,...r}=n;for(const n in r){let e=r[n];if(Array.isArray(e)){e=e[c?e.length-1:0]}null!==e&&(i[n]=e)}for(const n in e)i[n]=e[n]}}}return i}function Fu(e,t,r){var n;const{style:i}=e,a={};for(const o in i)(ba(i[o])||t.style&&ba(t.style[o])||lu(o,e)||void 0!==(null===(n=null===r||void 0===r?void 0:r.getValue(o))||void 0===n?void 0:n.liveStyle))&&(a[o]=i[o]);return a}const Ru={useVisualState:zu({scrapeMotionValuesFromProps:Fu,createRenderState:pu})};function Ou(e,t){try{t.dimensions="function"===typeof e.getBBox?e.getBBox():e.getBoundingClientRect()}catch(Nz){t.dimensions={x:0,y:0,width:0,height:0}}}function Nu(e,t,r,n){let{style:i,vars:a}=t;Object.assign(e.style,i,n&&n.getProjectionStyles(r));for(const o in a)e.style.setProperty(o,a[o])}const Lu=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Du(e,t,r,n){Nu(e,t,void 0,n);for(const i in t.attrs)e.setAttribute(Lu.has(i)?i:ja(i),t.attrs[i])}function Vu(e,t,r){const n=Fu(e,t,r);for(const i in e)if(ba(e[i])||ba(t[i])){n[-1!==ma.indexOf(i)?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i]=e[i]}return n}const _u=["x","y","width","height","cx","cy","r"],Bu={useVisualState:zu({scrapeMotionValuesFromProps:Vu,createRenderState:Eu,onUpdate:e=>{let{props:t,prevProps:r,current:n,renderState:i,latestValues:a}=e;if(!n)return;let o=!!t.drag;if(!o)for(const l in a)if(fa.has(l)){o=!0;break}if(!o)return;let s=!r;if(r)for(let l=0;l<_u.length;l++){const e=_u[l];t[e]!==r[e]&&(s=!0)}s&&Bi.read((()=>{Ou(n,i),Bi.render((()=>{Tu(i,a,$u(n.tagName),t.transformTemplate),Du(n,i)}))}))}})};function Uu(e,t){return function(r){let{forwardMotionProps:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{forwardMotionProps:!1};return ou({...ju(r)?Bu:Ru,preloadedFeatures:e,useRender:Au(n),createVisualElement:t,Component:r})}}const Hu={current:null},Wu={current:!1};const qu=[...rs,io,mo],Ku=new WeakMap;const Gu=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Yu{scrapeMotionValuesFromProps(e,t,r){return{}}constructor(e){let{parent:t,props:r,presenceContext:n,reducedMotionConfig:i,blockInitialAnimation:a,visualState:o}=e,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=qo,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const e=Xi.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,Bi.render(this.render,!1,!0))};const{latestValues:l,renderState:d,onUpdate:c}=o;this.onUpdate=c,this.latestValues=l,this.baseTarget={...l},this.initialValues=r.initial?{...l}:{},this.renderState=d,this.parent=t,this.props=r,this.presenceContext=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.blockInitialAnimation=Boolean(a),this.isControllingVariants=Gc(r),this.isVariantNode=Yc(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:u,...h}=this.scrapeMotionValuesFromProps(r,{},this);for(const p in h){const e=h[p];void 0!==l[p]&&ba(e)&&e.set(l[p],!1)}}mount(e){this.current=e,Ku.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((e,t)=>this.bindToMotionValue(t,e))),Wu.current||function(){if(Wu.current=!0,Jc)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Hu.current=e.matches;e.addListener(t),t()}else Hu.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||Hu.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Ui(this.notifyUpdate),Ui(this.render),this.valueSubscriptions.forEach((e=>e())),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=fa.has(e);r&&this.onBindTransform&&this.onBindTransform();const n=t.on("change",(t=>{this.latestValues[e]=t,this.props.onUpdate&&Bi.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)})),i=t.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,(()=>{n(),i(),a&&a(),t.owner&&t.stop()}))}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}updateFeatures(){let e="animation";for(e in eu){const t=eu[e];if(!t)continue;const{isEnabled:r,Feature:n}=t;if(!this.features[e]&&n&&r(this.props)&&(this.features[e]=new n(this)),this.features[e]){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<Gu.length;r++){const t=Gu[r];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const n=e["on"+t];n&&(this.propEventSubscriptions[t]=this.on(t,n))}this.prevMotionValues=function(e,t,r){for(const n in t){const i=t[n],a=r[n];if(ba(i))e.addValue(n,i);else if(ba(a))e.addValue(n,pa(i,{owner:e}));else if(a!==i)if(e.hasValue(n)){const t=e.getValue(n);!0===t.liveStyle?t.jump(i):t.hasAnimated||t.set(i)}else{const t=e.getStaticValue(n);e.addValue(n,pa(void 0!==t?t:i,{owner:e}))}}for(const n in r)void 0===t[n]&&e.removeValue(n);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return void 0===r&&void 0!==t&&(r=pa(null===t?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){var r;let n=void 0===this.latestValues[e]&&this.current?null!==(r=this.getBaseTargetFromProps(this.props,e))&&void 0!==r?r:this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];return void 0!==n&&null!==n&&("string"===typeof n&&(Ko(n)||Na(n))?n=parseFloat(n):!(e=>qu.find(ts(e)))(n)&&mo.test(t)&&(n=Co(e,t)),this.setBaseTarget(e,ba(n)?n.get():n)),ba(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:r}=this.props;let n;if("string"===typeof r||"object"===typeof r){const i=bi(this.props,r,null===(t=this.presenceContext)||void 0===t?void 0:t.custom);i&&(n=i[e])}if(r&&void 0!==n)return n;const i=this.getBaseTargetFromProps(this.props,e);return void 0===i||ba(i)?void 0!==this.initialValues[e]&&void 0===n?void 0:this.baseTarget[e]:i}on(e,t){return this.events[e]||(this.events[e]=new pi),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];this.events[e].notify(...r)}}}class Xu extends Yu{constructor(){super(...arguments),this.KeyframeResolver=is}sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,t){let{vars:r,style:n}=t;delete r[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;ba(e)&&(this.childSubscription=e.on("change",(e=>{this.current&&(this.current.textContent=`${e}`)})))}}class Qu extends Xu{constructor(){super(...arguments),this.type="html",this.renderInstance=Nu}readValueFromInstance(e,t){if(fa.has(t))return((e,t)=>{const{transform:r="none"}=getComputedStyle(e);return Ro(r,t)})(e,t);{const n=(r=e,window.getComputedStyle(r)),i=(Yo(t)?n.getPropertyValue(t):n[t])||0;return"string"===typeof i?i.trim():i}var r}measureInstanceViewportBox(e,t){let{transformPagePoint:r}=t;return Xl(e,r)}build(e,t,r){hu(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return Fu(e,t,r)}}class Ju extends Xu{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Fl,this.updateDimensions=()=>{this.current&&!this.renderState.dimensions&&Ou(this.current,this.renderState)}}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(fa.has(t)){const e=ko(t);return e&&e.default||0}return t=Lu.has(t)?t:ja(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return Vu(e,t,r)}onBindTransform(){this.current&&!this.renderState.dimensions&&Bi.postRender(this.updateDimensions)}build(e,t,r){Tu(e,t,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,r,n){Du(e,t,0,n)}mount(e){this.isSVGTag=$u(e.tagName),super.mount(e)}}const Zu=vi(Uu({...Sl,...Uc,...Fc,...Hc},((t,r)=>ju(t)?new Ju(r):new Qu(r,{allowProjection:t!==e.Fragment})))),eh=Gn.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  height: 70vh;
  position: relative;
`,th=Gn(Zu.div)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(98, 0, 238, 0.3);
  cursor: pointer;
  z-index: 3;
  position: relative;
`,rh=Gn(Zu.div)`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--surface);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary);
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border: 2px solid var(--primary-light);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  z-index: 2;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(98, 0, 238, 0.2);
  }
`,nh=Gn(Zu.div)`
  position: absolute;
  height: 2px;
  background: var(--primary-light);
  transform-origin: center left;
  z-index: 1;
  left: 50%;
  top: 50%;
`,ih=Gn(Zu.div)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 300px;
  background: var(--surface);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 10;
`,ah=Gn.h3`
  margin-bottom: 0.5rem;
  color: var(--primary);
`,oh=Gn.p`
  margin-bottom: 1rem;
  font-size: 0.9rem;
`,sh=Gn(Qe)`
  display: inline-block;
  background: var(--primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    background: var(--primary-light);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`,lh=[{id:"arrays",title:"Arrays",angle:0,distance:200,description:"A collection of elements stored at contiguous memory locations. Basic operations include insertion, deletion, traversal, and searching.",link:"/data-structures/arrays"},{id:"linkedLists",title:"Linked Lists",angle:45,distance:200,description:"A linear collection of data elements, where each element points to the next. Types include singly linked, doubly linked, and circular linked lists.",link:"/data-structures/linked-lists"},{id:"stacks",title:"Stacks",angle:90,distance:200,description:"A LIFO (Last In First Out) data structure where elements are added and removed from the same end.",link:"/data-structures/stacks"},{id:"queues",title:"Queues",angle:135,distance:200,description:"A FIFO (First In First Out) data structure where elements are added at one end and removed from the other.",link:"/data-structures/queues"},{id:"trees",title:"Trees",angle:180,distance:200,description:"A hierarchical structure with a root value and subtrees of children. Includes binary trees, binary search trees, AVL trees, and more.",link:"/data-structures/trees"},{id:"graphs",title:"Graphs",angle:225,distance:200,description:"A collection of nodes connected by edges. Can be directed or undirected, weighted or unweighted.",link:"/data-structures/graphs"},{id:"hashTables",title:"Hash Tables",angle:270,distance:200,description:"A data structure that implements an associative array. Uses a hash function to compute an index into an array of buckets or slots.",link:"/data-structures/hash-tables"},{id:"heaps",title:"Heaps",angle:315,distance:200,description:"A specialized tree-based data structure that satisfies the heap property. Used in priority queues and heap sort.",link:"/data-structures/heaps"}],dh=()=>{const[t,r]=(0,e.useState)(null),[n,i]=(0,e.useState)(!0);return(0,Qn.jsxs)(eh,{children:[(0,Qn.jsxs)(th,{onClick:()=>{r(null),i(!0)},animate:{scale:n?[1,1.05,1]:1},transition:{repeat:n?1/0:0,duration:2},children:["Data",(0,Qn.jsx)("br",{}),"Structures"]}),lh.map((n=>{const a=((e,t)=>{const r=e*Math.PI/180;return{x:Math.cos(r)*t,y:Math.sin(r)*t}})(n.angle,n.distance);return(0,Qn.jsxs)(e.Fragment,{children:[(0,Qn.jsx)(rh,{initial:{opacity:0,x:0,y:0},animate:{opacity:1,x:a.x,y:a.y,scale:t===n.id?1.2:1,boxShadow:t===n.id?"0 8px 25px rgba(98, 0, 238, 0.3)":"0 4px 10px rgba(0, 0, 0, 0.1)"},transition:{type:"spring",stiffness:100,damping:12},onClick:()=>(e=>{r(t===e.id?null:e),i(!1)})(n),whileHover:{scale:t===n.id?1.25:1.1},children:n.title}),(0,Qn.jsx)(nh,{initial:{opacity:0,width:0},animate:{opacity:1,width:n.distance,rotate:n.angle},transition:{duration:.5,delay:.2}})]},n.id)})),t&&(0,Qn.jsxs)(ih,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:50},transition:{type:"spring",stiffness:300,damping:25},children:[(0,Qn.jsx)(ah,{children:t.title}),(0,Qn.jsx)(oh,{children:t.description}),(0,Qn.jsxs)(sh,{to:t.link,children:["Explore ",t.title]})]})]})},ch=Gn.div`
  min-height: calc(100vh - 70px);
`,uh=Gn.div`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, var(--primary) 0%, #7c4dff 100%);
  color: white;
  text-align: center;
`,hh=Gn(Zu.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
`,ph=Gn(Zu.p)`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  opacity: 0.9;
`,mh=Gn.section`
  padding: 2rem;
`,fh=Gn.h2`
  text-align: center;
  margin-bottom: 1rem;
  color: var(--primary);
`,gh=Gn.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem;
  color: var(--text-secondary);
`,vh=()=>(0,Qn.jsxs)(ch,{children:[(0,Qn.jsxs)(uh,{children:[(0,Qn.jsx)(hh,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6},children:"DSA Visualizer"}),(0,Qn.jsx)(ph,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"Interactive visualizations of data structures and algorithms to help you learn and understand core computer science concepts"})]}),(0,Qn.jsxs)(mh,{children:[(0,Qn.jsx)(fh,{children:"Explore Data Structures"}),(0,Qn.jsx)(gh,{children:"Click on any data structure below to learn more about it, or click on the center to reset the view."}),(0,Qn.jsx)(dh,{})]})]}),xh=Gn.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,yh=Gn.div`
  text-align: center;
  margin-bottom: 3rem;
`,bh=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,wh=Gn.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,jh=Gn.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,Sh=Gn(Zu(Qe))`
  background: var(--surface);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
  }
`,kh=Gn.div`
  background: var(--primary);
  color: white;
  padding: 1.5rem;
  text-align: center;
`,Ch=Gn.h3`
  margin: 0;
`,Th=Gn.div`
  padding: 1.5rem;
  flex: 1;
`,Eh=Gn.p`
  margin-bottom: 1rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
`,$h=Gn.div`
  padding: 1rem 1.5rem;
  text-align: right;
  color: var(--primary);
  font-weight: 500;
`,Ph=[{id:"arrays",title:"Arrays",description:"A collection of elements stored at contiguous memory locations. Basic operations include insertion, deletion, traversal, and searching.",link:"/data-structures/arrays",complexity:"Access: O(1), Search: O(n), Insert: O(n), Delete: O(n)"},{id:"linkedLists",title:"Linked Lists",description:"A linear collection of data elements, where each element points to the next. Types include singly linked, doubly linked, and circular linked lists.",link:"/data-structures/linked-lists",complexity:"Access: O(n), Search: O(n), Insert: O(1), Delete: O(1)"},{id:"stacks",title:"Stacks",description:"A LIFO (Last In First Out) data structure where elements are added and removed from the same end.",link:"/data-structures/stacks",complexity:"Access: O(n), Search: O(n), Insert: O(1), Delete: O(1)"},{id:"queues",title:"Queues",description:"A FIFO (First In First Out) data structure where elements are added at one end and removed from the other.",link:"/data-structures/queues",complexity:"Access: O(n), Search: O(n), Insert: O(1), Delete: O(1)"},{id:"trees",title:"Trees",description:"A hierarchical structure with a root value and subtrees of children. Includes binary trees, binary search trees, AVL trees, and more.",link:"/data-structures/trees",complexity:"Access: O(log n), Search: O(log n), Insert: O(log n), Delete: O(log n)"},{id:"graphs",title:"Graphs",description:"A collection of nodes connected by edges. Can be directed or undirected, weighted or unweighted.",link:"/data-structures/graphs",complexity:"Access: O(n), Search: O(n), Insert: O(1), Delete: O(1)"},{id:"hashTables",title:"Hash Tables",description:"A data structure that implements an associative array. Uses a hash function to compute an index into an array of buckets or slots.",link:"/data-structures/hash-tables",complexity:"Access: N/A, Search: O(1)*, Insert: O(1)*, Delete: O(1)*"},{id:"heaps",title:"Heaps",description:"A specialized tree-based data structure that satisfies the heap property. Used in priority queues and heap sort.",link:"/data-structures/heaps",complexity:"Access: O(1), Search: O(n), Insert: O(log n), Delete: O(log n)"}],Ah=()=>(0,Qn.jsxs)(xh,{children:[(0,Qn.jsxs)(yh,{children:[(0,Qn.jsx)(bh,{children:"Data Structures"}),(0,Qn.jsx)(wh,{children:"Learn about various data structures, their operations, time complexity, and use cases through interactive visualizations."})]}),(0,Qn.jsx)(jh,{children:Ph.map(((e,t)=>(0,Qn.jsxs)(Sh,{to:e.link,initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},children:[(0,Qn.jsx)(kh,{children:(0,Qn.jsx)(Ch,{children:e.title})}),(0,Qn.jsxs)(Th,{children:[(0,Qn.jsx)(Eh,{children:e.description}),(0,Qn.jsxs)("small",{style:{color:"var(--text-secondary)"},children:[(0,Qn.jsx)("strong",{children:"Complexity:"}),(0,Qn.jsx)("br",{}),e.complexity]})]}),(0,Qn.jsx)($h,{children:"Explore \u2192"})]},e.id)))})]}),Ih=Gn.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,zh=Gn.div`
  text-align: center;
  margin-bottom: 3rem;
`,Mh=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,Fh=Gn.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,Rh=Gn.div`
  max-width: 1200px;
  margin: 2rem auto;
  position: relative;
`,Oh=Gn(Zu(Qe))`
  background: var(--primary);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
  text-decoration: none;
  
  &:hover {
    background: var(--primary-light);
  }
`,Nh=Gn.h3`
  margin: 0;
  font-size: 1.2rem;
`,Lh=Gn.span`
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.5rem;
  border-radius: 20px;
  font-size: 0.85rem;
`,Dh=()=>(0,Qn.jsxs)(Ih,{children:[(0,Qn.jsxs)(zh,{children:[(0,Qn.jsx)(Mh,{children:"Algorithms"}),(0,Qn.jsx)(Fh,{children:"Learn about sorting, searching, graph algorithms, dynamic programming, string matching and more through interactive visualizations."})]}),(0,Qn.jsx)(Rh,{children:[{id:"sorting",title:"Sorting Algorithms",description:"Algorithms that put elements of a list in a certain order.",count:6},{id:"searching",title:"Searching Algorithms",description:"Algorithms for finding an item with specified properties within a collection.",count:5},{id:"graph",title:"Graph Algorithms",description:"Algorithms that operate on graphs to solve problems such as finding the shortest path.",count:6},{id:"dynamic",title:"Dynamic Programming",description:"A method for solving complex problems by breaking them down into simpler subproblems.",count:4},{id:"string",title:"String Algorithms",description:"Algorithms that operate on strings, such as pattern matching and text processing.",count:6},{id:"number-theory",title:"Number Theory",description:"Algorithms related to properties and relationships of numbers.",count:4}].map((e=>(0,Qn.jsxs)(Oh,{to:`/algorithms/${e.id}`,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3},children:[(0,Qn.jsx)(Nh,{children:e.title}),(0,Qn.jsxs)(Lh,{children:[e.count," algorithms"]})]},e.id)))})]});class Vh extends e.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=t.offsetParent,r=e instanceof HTMLElement&&e.offsetWidth||0,n=this.props.sizeRef.current;n.height=t.offsetHeight||0,n.width=t.offsetWidth||0,n.top=t.offsetTop,n.left=t.offsetLeft,n.right=r-n.width-n.left}return null}componentDidUpdate(){}render(){return this.props.children}}function _h(t){let{children:r,isPresent:n,anchorX:i}=t;const a=(0,e.useId)(),o=(0,e.useRef)(null),s=(0,e.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=(0,e.useContext)(qc);return(0,e.useInsertionEffect)((()=>{const{width:e,height:t,top:r,left:d,right:c}=s.current;if(n||!o.current||!e||!t)return;const u="left"===i?`left: ${d}`:`right: ${c}`;o.current.dataset.motionPopId=a;const h=document.createElement("style");return l&&(h.nonce=l),document.head.appendChild(h),h.sheet&&h.sheet.insertRule(`\n          [data-motion-pop-id="${a}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            ${u}px !important;\n            top: ${r}px !important;\n          }\n        `),()=>{document.head.removeChild(h)}}),[n]),(0,Qn.jsx)(Vh,{isPresent:n,childRef:o,sizeRef:s,children:e.cloneElement(r,{ref:o})})}const Bh=t=>{let{children:r,initial:n,isPresent:i,onExitComplete:a,custom:o,presenceAffectsLayout:s,mode:l,anchorX:d}=t;const c=Iu(Uh),u=(0,e.useId)(),h=(0,e.useCallback)((e=>{c.set(e,!0);for(const t of c.values())if(!t)return;a&&a()}),[c,a]),p=(0,e.useMemo)((()=>({id:u,initial:n,isPresent:i,custom:o,onExitComplete:h,register:e=>(c.set(e,!1),()=>c.delete(e))})),s?[Math.random(),h]:[i,h]);return(0,e.useMemo)((()=>{c.forEach(((e,t)=>c.set(t,!1)))}),[i]),e.useEffect((()=>{!i&&!c.size&&a&&a()}),[i]),"popLayout"===l&&(r=(0,Qn.jsx)(_h,{isPresent:i,anchorX:d,children:r})),(0,Qn.jsx)(gd.Provider,{value:p,children:r})};function Uh(){return new Map}const Hh=e=>e.key||"";function Wh(t){const r=[];return e.Children.forEach(t,(t=>{(0,e.isValidElement)(t)&&r.push(t)})),r}const qh=t=>{let{children:r,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:o=!0,mode:s="sync",propagate:l=!1,anchorX:d="left"}=t;const[c,u]=vd(l),h=(0,e.useMemo)((()=>Wh(r)),[r]),p=l&&!c?[]:h.map(Hh),m=(0,e.useRef)(!0),f=(0,e.useRef)(h),g=Iu((()=>new Map)),[v,x]=(0,e.useState)(h),[y,b]=(0,e.useState)(h);nu((()=>{m.current=!1,f.current=h;for(let e=0;e<y.length;e++){const t=Hh(y[e]);p.includes(t)?g.delete(t):!0!==g.get(t)&&g.set(t,!1)}}),[y,p.length,p.join("-")]);const w=[];if(h!==v){let e=[...h];for(let t=0;t<y.length;t++){const r=y[t],n=Hh(r);p.includes(n)||(e.splice(t,0,r),w.push(r))}return"wait"===s&&w.length&&(e=w),b(Wh(e)),x(h),null}const{forceRender:j}=(0,e.useContext)(xd);return(0,Qn.jsx)(Qn.Fragment,{children:y.map((e=>{const t=Hh(e),r=!(l&&!c)&&(h===y||p.includes(t));return(0,Qn.jsx)(Bh,{isPresent:r,initial:!(m.current&&!i)&&void 0,custom:n,presenceAffectsLayout:o,mode:s,onExitComplete:r?void 0:()=>{if(!g.has(t))return;g.set(t,!0);let e=!0;g.forEach((t=>{t||(e=!1)})),e&&(null===j||void 0===j||j(),b(f.current),l&&(null===u||void 0===u||u()),a&&a())},anchorX:d,children:e},t)}))})},Kh=Gn.div`
  background: #1e1e1e;
  border-radius: var(--border-radius);
  overflow: hidden;
  margin: 2rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,Gh=Gn.div`
  background: #2d2d2d;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #3d3d3d;
`,Yh=Gn.h3`
  color: #fff;
  margin: 0;
  font-size: 1rem;
`,Xh=Gn.pre`
  margin: 0;
  padding: 1rem;
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #d4d4d4;
  white-space: pre;
  tab-size: 4;
`,Qh=e=>{let{title:t,code:r}=e;return(0,Qn.jsxs)(Kh,{children:[(0,Qn.jsx)(Gh,{children:(0,Qn.jsx)(Yh,{children:t})}),(0,Qn.jsx)(Xh,{children:(0,Qn.jsx)("code",{children:r})})]})},Jh=Gn.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,Zh=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,ep=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,tp=Gn.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,rp=Gn.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,np=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
  justify-content: center;
`,ip=Gn(Zu.div)`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${e=>e.highlight?"var(--primary)":"var(--primary-light)"};
  color: white;
  font-weight: 600;
  position: relative;
`,ap=Gn.span`
  position: absolute;
  top: -25px;
  font-size: 0.75rem;
  color: var(--text-secondary);
`,op=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
`,sp=Gn.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 80px;
`,lp=Gn.button`
  background: ${e=>"secondary"===e.variant?"var(--secondary)":"var(--primary)"};
  
  &:hover {
    background: ${e=>"secondary"===e.variant?"#02c4b0":"var(--primary-light)"};
  }
`,dp=Gn(Zu.div)`
  margin: 1rem 0;
  padding: 1rem;
  background: ${e=>"error"===e.type?"#ffebee":"#e8f5e9"};
  color: ${e=>"error"===e.type?"var(--error)":"#2e7d32"};
  border-radius: var(--border-radius);
  text-align: center;
`,cp=Gn.div`
  margin-top: 2rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,up=Gn.h3`
  margin-bottom: 0.5rem;
  color: var(--primary);
`,hp=Gn.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,pp=Gn.button`
  padding: 0.5rem 1rem;
  background: ${e=>e.active?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"#e0e0e0"};
  }
`,mp=()=>{const[t,r]=(0,e.useState)([10,20,30,40,50]),[n,i]=(0,e.useState)(""),[a,o]=(0,e.useState)(""),[s,l]=(0,e.useState)(null),[d,c]=(0,e.useState)(null),[u,h]=(0,e.useState)(-1),[p,m]=(0,e.useState)("visualization"),f=function(e){l({text:e,type:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success"}),setTimeout((()=>{l(null)}),3e3)},g=(()=>{switch(d){case"insert":return{title:"Insert Operation",description:"Insertion into an array requires shifting all elements after the insertion point by one position to make room for the new element. This operation has a time complexity of O(n) in the worst case."};case"remove":return{title:"Remove Operation",description:"Removing an element from an array requires shifting all elements after the removed element to fill the gap. This operation has a time complexity of O(n) in the worst case."};case"search":return{title:"Search Operation",description:"Linear search in an unsorted array involves checking each element one by one until the target value is found or the end of the array is reached. This operation has a time complexity of O(n) in the worst case."};default:return null}})();return(0,Qn.jsxs)(Jh,{children:[(0,Qn.jsxs)(Zh,{children:[(0,Qn.jsx)(ep,{children:"Arrays"}),(0,Qn.jsx)(tp,{children:"An array is a collection of elements stored at contiguous memory locations. It is the simplest data structure where each element can be accessed directly using its index."})]}),(0,Qn.jsxs)(rp,{children:[(0,Qn.jsxs)(hp,{children:[(0,Qn.jsx)(pp,{active:"visualization"===p,onClick:()=>m("visualization"),children:"Visualization"}),(0,Qn.jsx)(pp,{active:"code"===p,onClick:()=>m("code"),children:"Implementation"})]}),"visualization"===p?(0,Qn.jsxs)(Qn.Fragment,{children:[(0,Qn.jsxs)(op,{children:[(0,Qn.jsxs)("div",{children:[(0,Qn.jsx)("label",{children:"Value: "}),(0,Qn.jsx)(sp,{type:"text",value:n,onChange:e=>i(e.target.value),placeholder:"Value"})]}),(0,Qn.jsxs)("div",{children:[(0,Qn.jsx)("label",{children:"Index: "}),(0,Qn.jsx)(sp,{type:"text",value:a,onChange:e=>o(e.target.value),placeholder:"Index"})]}),(0,Qn.jsx)(lp,{onClick:()=>{if(""===n)return void f("Please enter a value","error");const e=parseInt(n),i=""===a?t.length:parseInt(a);if(isNaN(e))return void f("Value must be a number","error");if(i<0||i>t.length)return void f("Invalid index","error");const o=[...t];o.splice(i,0,e),h(i),r(o),c("insert"),f(`Inserted ${e} at index ${i}`),setTimeout((()=>{h(-1)}),1500)},children:"Insert"}),(0,Qn.jsx)(lp,{onClick:()=>{if(""===a)return void f("Please enter an index","error");const e=parseInt(a);isNaN(e)||e<0||e>=t.length?f("Invalid index","error"):(h(e),setTimeout((()=>{const n=[...t],i=n.splice(e,1)[0];r(n),c("remove"),f(`Removed value ${i} from index ${e}`),h(-1)}),800))},variant:"secondary",children:"Remove"}),(0,Qn.jsx)(lp,{onClick:()=>{if(""===n)return void f("Please enter a value to search","error");const e=parseInt(n);if(isNaN(e))return void f("Value must be a number","error");c("search");(async()=>{for(let r=0;r<t.length;r++)if(h(r),await new Promise((e=>setTimeout(e,500))),t[r]===e)return f(`Found ${e} at index ${r}`),void setTimeout((()=>{h(-1)}),1500);h(-1),f(`Value ${e} not found in the array`,"error")})()},children:"Search"})]}),(0,Qn.jsx)(qh,{children:s&&(0,Qn.jsx)(dp,{type:s.type,initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0},children:s.text})}),(0,Qn.jsx)(np,{children:t.map(((e,t)=>(0,Qn.jsxs)(ip,{highlight:t===u,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.3},layout:!0,children:[(0,Qn.jsx)(ap,{children:t}),e]},`${t}-${e}`)))}),g&&(0,Qn.jsxs)(cp,{children:[(0,Qn.jsx)(up,{children:g.title}),(0,Qn.jsx)("p",{children:g.description})]})]}):(0,Qn.jsx)(Qh,{title:"Dynamic Array Implementation",code:'public class DynamicArray {\n    private int[] arr;\n    private int size;\n    private int capacity;\n    \n    public DynamicArray() {\n        capacity = 10;\n        arr = new int[capacity];\n        size = 0;\n    }\n    \n    public void insert(int value, int index) {\n        if (index < 0 || index > size)\n            throw new IndexOutOfBoundsException("Invalid index");\n            \n        if (size == capacity)\n            resize();\n            \n        // Shift elements to the right\n        for (int i = size; i > index; i--)\n            arr[i] = arr[i-1];\n            \n        arr[index] = value;\n        size++;\n    }\n    \n    public void remove(int index) {\n        if (index < 0 || index >= size)\n            throw new IndexOutOfBoundsException("Invalid index");\n            \n        // Shift elements to the left\n        for (int i = index; i < size - 1; i++)\n            arr[i] = arr[i+1];\n            \n        size--;\n    }\n    \n    public int search(int value) {\n        for (int i = 0; i < size; i++)\n            if (arr[i] == value)\n                return i;\n        return -1;\n    }\n    \n    private void resize() {\n        capacity *= 2;\n        int[] newArr = new int[capacity];\n        for (int i = 0; i < size; i++)\n            newArr[i] = arr[i];\n        arr = newArr;\n    }\n    \n    public int get(int index) {\n        if (index < 0 || index >= size)\n            throw new IndexOutOfBoundsException("Invalid index");\n        return arr[index];\n    }\n}'})]})]})},fp=Gn.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,gp=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,vp=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,xp=Gn.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,yp=Gn.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,bp=Gn.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0;
  overflow-x: auto;
  max-width: 100%;
  padding: 1rem 0;
`,wp=Gn(Zu.div)`
  position: relative;
  display: flex;
  margin-right: 10px;
  min-width: 120px;
`,jp=Gn.div`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${e=>e.highlight?"var(--primary)":"var(--primary-light)"};
  color: white;
  font-weight: 600;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,Sp=Gn.div`
  height: 2px;
  background-color: var(--primary);
  flex-grow: 1;
  margin: auto 5px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: -4px;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 8px solid var(--primary);
  }
`,kp=Gn.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f0f0;
  color: var(--text-secondary);
  margin: auto 0;
  font-weight: 600;
  font-size: 0.8rem;
`,Cp=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
`,Tp=Gn.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 80px;
`,Ep=Gn.button`
  background: ${e=>"secondary"===e.variant?"var(--secondary)":"var(--primary)"};
  
  &:hover {
    background: ${e=>"secondary"===e.variant?"#02c4b0":"var(--primary-light)"};
  }
`,$p=Gn(Zu.div)`
  margin: 1rem 0;
  padding: 1rem;
  background: ${e=>"error"===e.type?"#ffebee":"#e8f5e9"};
  color: ${e=>"error"===e.type?"var(--error)":"#2e7d32"};
  border-radius: var(--border-radius);
  text-align: center;
`,Pp=Gn.div`
  margin-top: 2rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,Ap=Gn.h3`
  margin-bottom: 0.5rem;
  color: var(--primary);
`,Ip=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
  justify-content: center;
`,zp=Gn.button`
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  background: ${e=>e.active?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"#e0e0e0"};
  }
`,Mp=Gn.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,Fp=Gn.button`
  padding: 0.5rem 1rem;
  background: ${e=>e.active?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"#e0e0e0"};
  }
`,Rp=()=>{const[t,r]=(0,e.useState)([10,20,30,40]),[n,i]=(0,e.useState)(""),[a,o]=(0,e.useState)(""),[s,l]=(0,e.useState)(null),[d,c]=(0,e.useState)(null),[u,h]=(0,e.useState)(-1),[p,m]=(0,e.useState)("singly"),[f,g]=(0,e.useState)("visualization"),v=function(e){l({text:e,type:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success"}),setTimeout((()=>{l(null)}),3e3)},x=(()=>{switch(d){case"insertHead":return{title:"Insert at Head",description:"Time Complexity: O(1). In a linked list, inserting at the head only requires updating the head pointer, making it a constant time operation."};case"insertTail":return{title:"Insert at Tail",description:"singly"===p?"Time Complexity: O(n) for singly linked list. We need to traverse to the end of the list to add an element there.":"Time Complexity: O(1) for doubly linked list. With a tail pointer, we can directly access and update the tail."};case"insertAt":return{title:"Insert at Position",description:"Time Complexity: O(n). We need to traverse the list to find the insertion point, taking linear time in the worst case."};case"removeHead":return{title:"Remove from Head",description:"Time Complexity: O(1). Removing from the head only requires updating the head pointer, making it a constant time operation."};case"removeTail":return{title:"Remove from Tail",description:"singly"===p?"Time Complexity: O(n) for singly linked list. We need to traverse to find the node before the tail.":"Time Complexity: O(1) for doubly linked list. With a tail pointer, we can directly update the previous node."};case"removeAt":return{title:"Remove at Position",description:"Time Complexity: O(n). We need to traverse the list to find the node, taking linear time in the worst case."};case"search":return{title:"Search Operation",description:"Time Complexity: O(n). In the worst case, we may need to search through the entire list to find an element."};default:return null}})();return(0,Qn.jsxs)(fp,{children:[(0,Qn.jsxs)(gp,{children:[(0,Qn.jsx)(vp,{children:"Linked Lists"}),(0,Qn.jsx)(xp,{children:"A linked list is a linear data structure where each element is a separate object containing a data item and a reference to the next node in the sequence."})]}),(0,Qn.jsxs)(yp,{children:[(0,Qn.jsxs)(Mp,{children:[(0,Qn.jsx)(Fp,{active:"visualization"===f,onClick:()=>g("visualization"),children:"Visualization"}),(0,Qn.jsx)(Fp,{active:"code"===f,onClick:()=>g("code"),children:"Implementation"})]}),"visualization"===f?(0,Qn.jsxs)(Qn.Fragment,{children:[(0,Qn.jsxs)(Ip,{children:[(0,Qn.jsx)(zp,{active:"singly"===p,onClick:()=>m("singly"),children:"Singly Linked List"}),(0,Qn.jsx)(zp,{active:"doubly"===p,onClick:()=>m("doubly"),children:"Doubly Linked List"})]}),(0,Qn.jsxs)(Cp,{children:[(0,Qn.jsxs)("div",{children:[(0,Qn.jsx)("label",{children:"Value: "}),(0,Qn.jsx)(Tp,{type:"text",value:n,onChange:e=>i(e.target.value),placeholder:"Value"})]}),(0,Qn.jsxs)("div",{children:[(0,Qn.jsx)("label",{children:"Position: "}),(0,Qn.jsx)(Tp,{type:"text",value:a,onChange:e=>o(e.target.value),placeholder:"Position"})]})]}),(0,Qn.jsxs)(Cp,{children:[(0,Qn.jsx)(Ep,{onClick:()=>{if(""===n)return void v("Please enter a value","error");const e=parseInt(n);isNaN(e)?v("Value must be a number","error"):(c("insertHead"),h(0),setTimeout((()=>{r([e,...t]),v(`Inserted ${e} at head`),h(-1)}),800))},children:"Insert at Head"}),(0,Qn.jsx)(Ep,{onClick:()=>{if(""===n)return void v("Please enter a value","error");const e=parseInt(n);isNaN(e)?v("Value must be a number","error"):(c("insertTail"),h(t.length-1),setTimeout((()=>{r([...t,e]),v(`Inserted ${e} at tail`),h(-1)}),800))},children:"Insert at Tail"}),(0,Qn.jsx)(Ep,{onClick:()=>{if(""===n||""===a)return void v("Please enter both value and position","error");const e=parseInt(n),i=parseInt(a);if(isNaN(e))return void v("Value must be a number","error");if(isNaN(i)||i<0||i>t.length)return void v("Invalid position","error");c("insertAt");(async()=>{for(let e=0;e<i;e++)h(e),await new Promise((e=>setTimeout(e,500)));const n=[...t];n.splice(i,0,e),r(n),v(`Inserted ${e} at position ${i}`),setTimeout((()=>{h(-1)}),800)})()},variant:"secondary",children:"Insert at Position"}),(0,Qn.jsx)(Ep,{onClick:()=>{0!==t.length?(c("removeHead"),h(0),setTimeout((()=>{const e=t[0];r(t.slice(1)),v(`Removed ${e} from head`),h(-1)}),800)):v("List is empty","error")},children:"Remove Head"}),(0,Qn.jsx)(Ep,{onClick:()=>{0!==t.length?(c("removeTail"),h(t.length-1),setTimeout((()=>{const e=t[t.length-1];r(t.slice(0,-1)),v(`Removed ${e} from tail`),h(-1)}),800)):v("List is empty","error")},children:"Remove Tail"}),(0,Qn.jsx)(Ep,{onClick:()=>{if(""===a)return void v("Please enter a position","error");const e=parseInt(a);if(isNaN(e)||e<0||e>=t.length)return void v("Invalid position","error");c("removeAt");(async()=>{for(let t=0;t<=e;t++)h(t),await new Promise((e=>setTimeout(e,500)));const n=t[e],i=[...t];i.splice(e,1),r(i),v(`Removed ${n} from position ${e}`),setTimeout((()=>{h(-1)}),800)})()},variant:"secondary",children:"Remove at Position"}),(0,Qn.jsx)(Ep,{onClick:()=>{if(""===n)return void v("Please enter a value to search","error");const e=parseInt(n);if(isNaN(e))return void v("Value must be a number","error");c("search");(async()=>{for(let r=0;r<t.length;r++)if(h(r),await new Promise((e=>setTimeout(e,500))),t[r]===e)return v(`Found ${e} at position ${r}`),void setTimeout((()=>{h(-1)}),1500);h(-1),v(`Value ${e} not found in the list`,"error")})()},children:"Search"})]}),(0,Qn.jsx)(qh,{children:s&&(0,Qn.jsx)($p,{type:s.type,initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0},children:s.text})}),(0,Qn.jsx)(bp,{children:0===t.length?(0,Qn.jsx)(kp,{children:"NULL"}):(0,Qn.jsx)(Qn.Fragment,{children:t.map(((e,r)=>(0,Qn.jsxs)(wp,{children:["doubly"===p&&r>0&&(0,Qn.jsx)(Sp,{style:{transform:"rotate(180deg)",position:"absolute",left:"-15px",top:"30px",width:"15px"}}),(0,Qn.jsx)(jp,{highlight:r===u,children:e}),r<t.length-1&&(0,Qn.jsx)(Sp,{}),r===t.length-1&&(0,Qn.jsx)(kp,{children:"NULL"})]},r)))})}),x&&(0,Qn.jsxs)(Pp,{children:[(0,Qn.jsx)(Ap,{children:x.title}),(0,Qn.jsx)("p",{children:x.description})]})]}):(0,Qn.jsxs)("div",{children:["singly"===p&&(0,Qn.jsx)(Qh,{title:"Singly Linked List Implementation",code:'public class SinglyLinkedList {\n    private Node head;\n    private int size;\n    \n    private class Node {\n        int value;\n        Node next;\n        \n        Node(int value) {\n            this.value = value;\n            this.next = null;\n        }\n    }\n    \n    public SinglyLinkedList() {\n        head = null;\n        size = 0;\n    }\n    \n    public void insert(int value, int position) {\n        if (position < 0 || position > size)\n            throw new IndexOutOfBoundsException("Invalid position");\n            \n        Node newNode = new Node(value);\n        \n        if (position == 0) {\n            newNode.next = head;\n            head = newNode;\n        } else {\n            Node current = head;\n            for (int i = 0; i < position - 1; i++)\n                current = current.next;\n            newNode.next = current.next;\n            current.next = newNode;\n        }\n        \n        size++;\n    }\n    \n    public void delete(int position) {\n        if (position < 0 || position >= size)\n            throw new IndexOutOfBoundsException("Invalid position");\n            \n        if (position == 0) {\n            head = head.next;\n        } else {\n            Node current = head;\n            for (int i = 0; i < position - 1; i++)\n                current = current.next;\n            current.next = current.next.next;\n        }\n        \n        size--;\n    }\n    \n    public int search(int value) {\n        Node current = head;\n        int position = 0;\n        \n        while (current != null) {\n            if (current.value == value)\n                return position;\n            current = current.next;\n            position++;\n        }\n        \n        return -1;\n    }\n}'}),"doubly"===p&&(0,Qn.jsx)(Qh,{title:"Doubly Linked List Implementation",code:'public class DoublyLinkedList {\n    private Node head;\n    private Node tail;\n    private int size;\n    \n    private class Node {\n        int value;\n        Node prev;\n        Node next;\n        \n        Node(int value) {\n            this.value = value;\n            this.prev = null;\n            this.next = null;\n        }\n    }\n    \n    public DoublyLinkedList() {\n        head = null;\n        tail = null;\n        size = 0;\n    }\n    \n    public void insert(int value, int position) {\n        if (position < 0 || position > size)\n            throw new IndexOutOfBoundsException("Invalid position");\n            \n        Node newNode = new Node(value);\n        \n        if (size == 0) {\n            head = tail = newNode;\n        } else if (position == 0) {\n            newNode.next = head;\n            head.prev = newNode;\n            head = newNode;\n        } else if (position == size) {\n            newNode.prev = tail;\n            tail.next = newNode;\n            tail = newNode;\n        } else {\n            Node current = head;\n            for (int i = 0; i < position - 1; i++)\n                current = current.next;\n            newNode.next = current.next;\n            newNode.prev = current;\n            current.next.prev = newNode;\n            current.next = newNode;\n        }\n        \n        size++;\n    }\n    \n    public void delete(int position) {\n        if (position < 0 || position >= size)\n            throw new IndexOutOfBoundsException("Invalid position");\n            \n        if (size == 1) {\n            head = tail = null;\n        } else if (position == 0) {\n            head = head.next;\n            head.prev = null;\n        } else if (position == size - 1) {\n            tail = tail.prev;\n            tail.next = null;\n        } else {\n            Node current = head;\n            for (int i = 0; i < position - 1; i++)\n                current = current.next;\n            current.next = current.next.next;\n            current.next.prev = current;\n        }\n        \n        size--;\n    }\n}'})]})]})]})},Op=Gn.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,Np=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,Lp=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,Dp=Gn.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,Vp=Gn.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`,_p=Gn.div`
  width: 300px;
  margin: 2rem auto;
  border: 2px solid var(--primary-light);
  border-radius: var(--border-radius);
  overflow: hidden;
  min-height: 400px;
  position: relative;
  background: #f9f9f9;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: 10px;
`,Bp=Gn.div`
  color: var(--text-secondary);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-style: italic;
`,Up=Gn.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: var(--primary);
  color: white;
  padding: 5px 10px;
  border-radius: var(--border-radius);
  font-size: 0.8rem;
  z-index: 2;
`,Hp=Gn(Zu.div)`
  width: 90%;
  height: 60px;
  background: ${e=>e.highlight?"var(--primary)":"var(--primary-light)"};
  color: white;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius);
  font-weight: 600;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
`,Wp=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,qp=Gn.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 100px;
`,Kp=Gn.button`
  background: ${e=>"secondary"===e.variant?"var(--secondary)":"var(--primary)"};
  
  &:hover {
    background: ${e=>"secondary"===e.variant?"#02c4b0":"var(--primary-light)"};
  }
`,Gp=Gn(Zu.div)`
  margin: 1rem 0;
  padding: 1rem;
  width: 100%;
  background: ${e=>"error"===e.type?"#ffebee":"#e8f5e9"};
  color: ${e=>"error"===e.type?"var(--error)":"#2e7d32"};
  border-radius: var(--border-radius);
  text-align: center;
`,Yp=Gn.div`
  margin-top: 2rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
  width: 100%;
`,Xp=Gn.h3`
  margin-bottom: 0.5rem;
  color: var(--primary);
`,Qp=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  border-left: 4px solid var(--primary);
  width: 100%;
`,Jp=Gn.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,Zp=Gn.button`
  padding: 0.5rem 1rem;
  background: ${e=>e.active?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"#e0e0e0"};
  }
`,em=()=>{const[t,r]=(0,e.useState)([]),[n,i]=(0,e.useState)(""),[a,o]=(0,e.useState)(null),[s,l]=(0,e.useState)(null),[d,c]=(0,e.useState)(-1),[u,h]=(0,e.useState)("visualization"),p=function(e){o({text:e,type:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success"}),setTimeout((()=>{o(null)}),3e3)},m=(()=>{switch(s){case"push":return{title:"Push Operation",description:"Time Complexity: O(1). The push operation adds an element to the top of the stack."};case"pop":return{title:"Pop Operation",description:"Time Complexity: O(1). The pop operation removes the top element from the stack and returns it."};case"peek":return{title:"Peek Operation",description:"Time Complexity: O(1). The peek operation returns the top element of the stack without removing it."};default:return null}})();(0,e.useEffect)((()=>{r(["Java","Python","JavaScript"])}),[]);return(0,Qn.jsxs)(Op,{children:[(0,Qn.jsxs)(Np,{children:[(0,Qn.jsx)(Lp,{children:"Stacks"}),(0,Qn.jsx)(Dp,{children:"A stack is a linear data structure that follows the Last In First Out (LIFO) principle. Elements are added to and removed from the same end, called the top."})]}),(0,Qn.jsxs)(Vp,{children:[(0,Qn.jsxs)(Jp,{children:[(0,Qn.jsx)(Zp,{active:"visualization"===u,onClick:()=>h("visualization"),children:"Visualization"}),(0,Qn.jsx)(Zp,{active:"code"===u,onClick:()=>h("code"),children:"Implementation"})]}),"visualization"===u?(0,Qn.jsxs)(Qn.Fragment,{children:[(0,Qn.jsxs)(Qp,{children:[(0,Qn.jsx)("strong",{children:"Stack Properties:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Last In First Out (LIFO) data structure"}),(0,Qn.jsx)("li",{children:"Elements are added to and removed from the top"}),(0,Qn.jsx)("li",{children:"Common operations include push, pop, and peek"}),(0,Qn.jsx)("li",{children:"All operations have O(1) time complexity"}),(0,Qn.jsx)("li",{children:"Used in function calls, undo mechanisms, expression evaluation, and backtracking algorithms"})]})]}),(0,Qn.jsxs)(Wp,{children:[(0,Qn.jsxs)("div",{children:[(0,Qn.jsx)("label",{children:"Value: "}),(0,Qn.jsx)(qp,{type:"text",value:n,onChange:e=>i(e.target.value),placeholder:"Value"})]}),(0,Qn.jsx)(Kp,{onClick:async()=>{if(""===n)return void p("Please enter a value","error");l("push");const e=[...t,n];r(e),c(e.length-1),p(`Pushed "${n}" onto the stack`),i(""),setTimeout((()=>{c(-1)}),2e3)},children:"Push"}),(0,Qn.jsx)(Kp,{onClick:async()=>{if(0===t.length)return void p("Stack is empty","error");l("pop"),c(t.length-1),await new Promise((e=>setTimeout(e,1e3)));const e=t[t.length-1],n=t.slice(0,-1);r(n),p(`Popped "${e}" from the stack`),c(-1)},variant:"secondary",children:"Pop"}),(0,Qn.jsx)(Kp,{onClick:()=>{0!==t.length?(l("peek"),c(t.length-1),p(`Top of stack: "${t[t.length-1]}"`),setTimeout((()=>{c(-1)}),2e3)):p("Stack is empty","error")},children:"Peek"}),(0,Qn.jsx)(Kp,{onClick:()=>{r([]),c(-1),p("Stack cleared")},variant:"secondary",children:"Clear"})]}),(0,Qn.jsx)(qh,{children:a&&(0,Qn.jsx)(Gp,{type:a.type,initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0},children:a.text})}),(0,Qn.jsxs)(_p,{children:[t.length>0?(0,Qn.jsx)(Up,{children:"Top"}):(0,Qn.jsx)(Bp,{children:"Stack is empty"}),(0,Qn.jsx)(qh,{children:t.map(((e,t)=>(0,Qn.jsx)(Hp,{highlight:t===d,initial:{opacity:0,y:-50,scale:.8},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-50,scale:.8},transition:{type:"spring",stiffness:300,damping:20},children:e},`${e}-${t}`)))})]}),m&&(0,Qn.jsxs)(Yp,{children:[(0,Qn.jsx)(Xp,{children:m.title}),(0,Qn.jsx)("p",{children:m.description})]})]}):(0,Qn.jsx)(Qh,{title:"Stack Implementation",code:'public class Stack<T> {\n    private static class Node<T> {\n        private T data;\n        private Node<T> next;\n        \n        public Node(T data) {\n            this.data = data;\n        }\n    }\n    \n    private Node<T> top;\n    private int size;\n    \n    public Stack() {\n        top = null;\n        size = 0;\n    }\n    \n    public void push(T item) {\n        Node<T> newNode = new Node<>(item);\n        newNode.next = top;\n        top = newNode;\n        size++;\n    }\n    \n    public T pop() {\n        if (isEmpty()) {\n            throw new EmptyStackException();\n        }\n        \n        T item = top.data;\n        top = top.next;\n        size--;\n        return item;\n    }\n    \n    public T peek() {\n        if (isEmpty()) {\n            throw new EmptyStackException();\n        }\n        \n        return top.data;\n    }\n    \n    public boolean isEmpty() {\n        return top == null;\n    }\n    \n    public int size() {\n        return size;\n    }\n    \n    public void clear() {\n        top = null;\n        size = 0;\n    }\n    \n    public String toString() {\n        StringBuilder sb = new StringBuilder("[");\n        Node<T> current = top;\n        \n        while (current != null) {\n            sb.append(current.data);\n            if (current.next != null) {\n                sb.append(", ");\n            }\n            current = current.next;\n        }\n        \n        sb.append("]");\n        return sb.toString();\n    }\n}'})]})]})},tm=Gn.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,rm=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,nm=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,im=Gn.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,am=Gn.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`,om=Gn.div`
  width: 90%;
  min-height: 150px;
  margin: 2rem auto;
  border: 2px solid var(--primary-light);
  border-radius: var(--border-radius);
  overflow: hidden;
  position: relative;
  background: #f9f9f9;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: flex-start;
`,sm=Gn.div`
  color: var(--text-secondary);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-style: italic;
`,lm=Gn.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: var(--primary);
  color: white;
  padding: 5px 10px;
  border-radius: var(--border-radius);
  font-size: 0.8rem;
  z-index: 2;
`,dm=Gn.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: var(--secondary);
  color: white;
  padding: 5px 10px;
  border-radius: var(--border-radius);
  font-size: 0.8rem;
  z-index: 2;
`,cm=Gn(Zu.div)`
  min-width: 80px;
  height: 80px;
  background: ${e=>e.highlight?"var(--primary)":"var(--primary-light)"};
  color: white;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius);
  font-weight: 600;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  flex-shrink: 0;
`,um=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,hm=Gn.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 100px;
`,pm=Gn.button`
  background: ${e=>"secondary"===e.variant?"var(--secondary)":"var(--primary)"};
  
  &:hover {
    background: ${e=>"secondary"===e.variant?"#02c4b0":"var(--primary-light)"};
  }
`,mm=Gn(Zu.div)`
  margin: 1rem 0;
  padding: 1rem;
  width: 100%;
  background: ${e=>"error"===e.type?"#ffebee":"#e8f5e9"};
  color: ${e=>"error"===e.type?"var(--error)":"#2e7d32"};
  border-radius: var(--border-radius);
  text-align: center;
`,fm=Gn.div`
  margin-top: 2rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
  width: 100%;
`,gm=Gn.h3`
  margin-bottom: 0.5rem;
  color: var(--primary);
`,vm=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  border-left: 4px solid var(--primary);
  width: 100%;
`,xm=Gn.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,ym=Gn.button`
  padding: 0.5rem 1rem;
  background: ${e=>e.active?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"#e0e0e0"};
  }
`,bm=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
  justify-content: center;
`,wm=Gn.button`
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  background: ${e=>e.active?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"#e0e0e0"};
  }
`,jm=()=>{const[t,r]=(0,e.useState)([]),[n,i]=(0,e.useState)(""),[a,o]=(0,e.useState)(null),[s,l]=(0,e.useState)(null),[d,c]=(0,e.useState)(-1),[u,h]=(0,e.useState)("visualization"),[p,m]=(0,e.useState)("regular"),f=function(e){o({text:e,type:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success"}),setTimeout((()=>{o(null)}),3e3)},g=e=>{m(e),r([]),c(-1),i(""),o(null),f(`Switched to ${e} queue`)},v=(()=>{switch(s){case"enqueue":return{title:"Enqueue Operation",description:"Time Complexity: O(1). The enqueue operation adds an element to the rear of the queue."};case"dequeue":return{title:"Dequeue Operation",description:"Time Complexity: O(1). The dequeue operation removes and returns the front element from the queue."};case"peek":return{title:"Peek Operation",description:"Time Complexity: O(1). The peek operation returns the front element of the queue without removing it."};default:return null}})();(0,e.useEffect)((()=>{r(["Apple","Banana","Cherry"])}),[]);return(0,Qn.jsxs)(tm,{children:[(0,Qn.jsxs)(rm,{children:[(0,Qn.jsx)(nm,{children:"Queues"}),(0,Qn.jsx)(im,{children:"A queue is a linear data structure that follows the First In First Out (FIFO) principle. Elements are added at the rear and removed from the front of the queue."})]}),(0,Qn.jsxs)(am,{children:[(0,Qn.jsxs)(xm,{children:[(0,Qn.jsx)(ym,{active:"visualization"===u,onClick:()=>h("visualization"),children:"Visualization"}),(0,Qn.jsx)(ym,{active:"code"===u,onClick:()=>h("code"),children:"Implementation"})]}),"visualization"===u?(0,Qn.jsxs)(Qn.Fragment,{children:[(0,Qn.jsxs)(bm,{children:[(0,Qn.jsx)(wm,{active:"regular"===p,onClick:()=>g("regular"),children:"Regular Queue"}),(0,Qn.jsx)(wm,{active:"circular"===p,onClick:()=>g("circular"),children:"Circular Queue"}),(0,Qn.jsx)(wm,{active:"priority"===p,onClick:()=>g("priority"),children:"Priority Queue"})]}),(0,Qn.jsxs)(vm,{children:[(0,Qn.jsxs)("strong",{children:[p.charAt(0).toUpperCase()+p.slice(1)," Queue Properties:"]}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"First In First Out (FIFO) data structure"}),(0,Qn.jsx)("li",{children:"Elements are added at the rear and removed from the front"}),(0,Qn.jsx)("li",{children:"Common operations include enqueue, dequeue, and peek"}),(0,Qn.jsx)("li",{children:"All operations have O(1) time complexity"}),"circular"===p&&(0,Qn.jsx)("li",{children:"Circular queue efficiently uses fixed-size array by wrapping around"}),"priority"===p&&(0,Qn.jsx)("li",{children:"Priority queue serves elements based on their priority, not insertion order"}),(0,Qn.jsx)("li",{children:"Used in BFS, job scheduling, printer queue, and process management"})]})]}),(0,Qn.jsxs)(um,{children:[(0,Qn.jsxs)("div",{children:[(0,Qn.jsx)("label",{children:"Value: "}),(0,Qn.jsx)(hm,{type:"text",value:n,onChange:e=>i(e.target.value),placeholder:"Value"})]}),(0,Qn.jsx)(pm,{onClick:async()=>{if(""===n)return void f("Please enter a value","error");l("enqueue");const e=[...t,n];r(e),c(e.length-1),f(`Enqueued "${n}" to the queue`),i(""),setTimeout((()=>{c(-1)}),2e3)},children:"Enqueue"}),(0,Qn.jsx)(pm,{onClick:async()=>{if(0===t.length)return void f("Queue is empty","error");l("dequeue"),c(0),await new Promise((e=>setTimeout(e,1e3)));const e=t[0],n=t.slice(1);r(n),f(`Dequeued "${e}" from the queue`),c(-1)},variant:"secondary",children:"Dequeue"}),(0,Qn.jsx)(pm,{onClick:()=>{0!==t.length?(l("peek"),c(0),f(`Front of queue: "${t[0]}"`),setTimeout((()=>{c(-1)}),2e3)):f("Queue is empty","error")},children:"Peek"}),(0,Qn.jsx)(pm,{onClick:()=>{r([]),c(-1),f("Queue cleared")},variant:"secondary",children:"Clear"})]}),(0,Qn.jsx)(qh,{children:a&&(0,Qn.jsx)(mm,{type:a.type,initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0},children:a.text})}),(0,Qn.jsxs)(om,{children:[t.length>0?(0,Qn.jsxs)(Qn.Fragment,{children:[(0,Qn.jsx)(lm,{children:"Front"}),(0,Qn.jsx)(dm,{children:"Rear"})]}):(0,Qn.jsx)(sm,{children:"Queue is empty"}),(0,Qn.jsx)(qh,{children:t.map(((e,t)=>(0,Qn.jsx)(cm,{highlight:t===d,initial:{opacity:0,x:50,scale:.8},animate:{opacity:1,x:0,scale:1},exit:{opacity:0,x:-50,scale:.8},transition:{type:"spring",stiffness:300,damping:20},children:e},`${e}-${t}`)))})]}),v&&(0,Qn.jsxs)(fm,{children:[(0,Qn.jsx)(gm,{children:v.title}),(0,Qn.jsx)("p",{children:v.description})]})]}):(0,Qn.jsx)(Qh,{title:(()=>{switch(p){case"circular":return"Circular Queue Implementation";case"priority":return"Priority Queue Implementation";default:return"Queue Implementation"}})(),code:(()=>{switch(p){case"circular":return'public class CircularQueue<T> {\n    private T[] array;\n    private int front;\n    private int rear;\n    private int size;\n    private int capacity;\n    \n    @SuppressWarnings("unchecked")\n    public CircularQueue(int capacity) {\n        this.capacity = capacity;\n        this.array = (T[]) new Object[capacity];\n        this.front = 0;\n        this.rear = -1;\n        this.size = 0;\n    }\n    \n    public boolean isFull() {\n        return size == capacity;\n    }\n    \n    public boolean isEmpty() {\n        return size == 0;\n    }\n    \n    public void enqueue(T item) {\n        if (isFull()) {\n            throw new IllegalStateException("Queue is full");\n        }\n        \n        rear = (rear + 1) % capacity;\n        array[rear] = item;\n        size++;\n    }\n    \n    public T dequeue() {\n        if (isEmpty()) {\n            throw new NoSuchElementException("Queue is empty");\n        }\n        \n        T item = array[front];\n        array[front] = null;\n        front = (front + 1) % capacity;\n        size--;\n        return item;\n    }\n    \n    public T peek() {\n        if (isEmpty()) {\n            throw new NoSuchElementException("Queue is empty");\n        }\n        \n        return array[front];\n    }\n    \n    public int size() {\n        return size;\n    }\n    \n    public void clear() {\n        for (int i = 0; i < capacity; i++) {\n            array[i] = null;\n        }\n        front = 0;\n        rear = -1;\n        size = 0;\n    }\n    \n    @Override\n    public String toString() {\n        if (isEmpty()) {\n            return "[]";\n        }\n        \n        StringBuilder sb = new StringBuilder("[");\n        int count = 0;\n        int index = front;\n        \n        while (count < size) {\n            sb.append(array[index]);\n            if (count < size - 1) {\n                sb.append(", ");\n            }\n            index = (index + 1) % capacity;\n            count++;\n        }\n        \n        sb.append("]");\n        return sb.toString();\n    }\n}';case"priority":return'public class PriorityQueue<T extends Comparable<T>> {\n    private static class Node<T> {\n        private T data;\n        private int priority;\n        private Node<T> next;\n        \n        public Node(T data, int priority) {\n            this.data = data;\n            this.priority = priority;\n            this.next = null;\n        }\n    }\n    \n    private Node<T> head;\n    private int size;\n    \n    public PriorityQueue() {\n        head = null;\n        size = 0;\n    }\n    \n    public void enqueue(T item, int priority) {\n        Node<T> newNode = new Node<>(item, priority);\n        \n        // If queue is empty or new node has higher priority than head\n        if (head == null || priority > head.priority) {\n            newNode.next = head;\n            head = newNode;\n        } else {\n            Node<T> temp = head;\n            \n            // Find position to insert based on priority\n            while (temp.next != null && temp.next.priority >= priority) {\n                temp = temp.next;\n            }\n            \n            // Insert after temp\n            newNode.next = temp.next;\n            temp.next = newNode;\n        }\n        \n        size++;\n    }\n    \n    public T dequeue() {\n        if (isEmpty()) {\n            throw new NoSuchElementException("Priority queue is empty");\n        }\n        \n        T data = head.data;\n        head = head.next;\n        size--;\n        return data;\n    }\n    \n    public T peek() {\n        if (isEmpty()) {\n            throw new NoSuchElementException("Priority queue is empty");\n        }\n        \n        return head.data;\n    }\n    \n    public boolean isEmpty() {\n        return head == null;\n    }\n    \n    public int size() {\n        return size;\n    }\n    \n    public void clear() {\n        head = null;\n        size = 0;\n    }\n    \n    @Override\n    public String toString() {\n        if (isEmpty()) {\n            return "[]";\n        }\n        \n        StringBuilder sb = new StringBuilder("[");\n        Node<T> current = head;\n        \n        while (current != null) {\n            sb.append(current.data).append("(").append(current.priority).append(")");\n            if (current.next != null) {\n                sb.append(", ");\n            }\n            current = current.next;\n        }\n        \n        sb.append("]");\n        return sb.toString();\n    }\n}';default:return'public class Queue<T> {\n    private static class Node<T> {\n        private T data;\n        private Node<T> next;\n        \n        public Node(T data) {\n            this.data = data;\n            this.next = null;\n        }\n    }\n    \n    private Node<T> front;\n    private Node<T> rear;\n    private int size;\n    \n    public Queue() {\n        front = null;\n        rear = null;\n        size = 0;\n    }\n    \n    public void enqueue(T item) {\n        Node<T> newNode = new Node<>(item);\n        \n        if (isEmpty()) {\n            front = newNode;\n            rear = newNode;\n        } else {\n            rear.next = newNode;\n            rear = newNode;\n        }\n        \n        size++;\n    }\n    \n    public T dequeue() {\n        if (isEmpty()) {\n            throw new NoSuchElementException("Queue is empty");\n        }\n        \n        T data = front.data;\n        front = front.next;\n        \n        if (front == null) {\n            rear = null;\n        }\n        \n        size--;\n        return data;\n    }\n    \n    public T peek() {\n        if (isEmpty()) {\n            throw new NoSuchElementException("Queue is empty");\n        }\n        \n        return front.data;\n    }\n    \n    public boolean isEmpty() {\n        return size == 0;\n    }\n    \n    public int size() {\n        return size;\n    }\n    \n    public void clear() {\n        front = null;\n        rear = null;\n        size = 0;\n    }\n    \n    @Override\n    public String toString() {\n        if (isEmpty()) {\n            return "[]";\n        }\n        \n        StringBuilder sb = new StringBuilder("[");\n        Node<T> current = front;\n        \n        while (current != null) {\n            sb.append(current.data);\n            if (current.next != null) {\n                sb.append(", ");\n            }\n            current = current.next;\n        }\n        \n        sb.append("]");\n        return sb.toString();\n    }\n}'}})()})]})]})},Sm=Gn.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,km=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,Cm=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,Tm=Gn.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,Em=Gn.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`,$m=Gn.div`
  width: 100%;
  min-height: 600px;
  margin: 2rem 0;
  position: relative;
  overflow: visible;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--primary-light);
  border-radius: var(--border-radius);
  background: #f9f9f9;
`,Pm=Gn(Zu.div)`
  width: 50px;
  height: 50px;
  background: ${e=>e.highlight?"var(--primary)":"var(--primary-light)"};
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  position: absolute;
  z-index: 2;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: move;
  user-select: none;
  transform: translate(0, 0) !important;
`,Am=Gn.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: visible;
`,Im=Gn.path`
  stroke: var(--primary-light);
  stroke-width: 3px;
  fill: none;
`,zm=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,Mm=Gn.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 80px;
`,Fm=Gn.button`
  background: ${e=>"secondary"===e.variant?"var(--secondary)":"var(--primary)"};
  
  &:hover {
    background: ${e=>"secondary"===e.variant?"#02c4b0":"var(--primary-light)"};
  }
`,Rm=Gn(Zu.div)`
  margin: 1rem 0;
  padding: 1rem;
  width: 100%;
  background: ${e=>"error"===e.type?"#ffebee":"#e8f5e9"};
  color: ${e=>"error"===e.type?"var(--error)":"#2e7d32"};
  border-radius: var(--border-radius);
  text-align: center;
`,Om=Gn.div`
  margin-top: 2rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
  width: 100%;
`,Nm=Gn.h3`
  margin-bottom: 0.5rem;
  color: var(--primary);
`,Lm=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f0f0f0;
  border-radius: var(--border-radius);
  width: 100%;
  text-align: center;
`,Dm=Gn.span`
  display: inline-block;
  background: var(--primary-light);
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  margin: 0 0.25rem;
  font-weight: 600;
`,Vm=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
  justify-content: center;
`,_m=Gn.button`
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  background: ${e=>e.active?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"#e0e0e0"};
  }
`,Bm=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  border-left: 4px solid var(--primary);
`,Um=Gn.text`
  fill: ${e=>"left"===e.type?"#2196F3":"#FF5722"};
  font-size: 12px;
  font-weight: bold;
  pointer-events: none;
  user-select: none;
`,Hm=Gn.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,Wm=(Gn.span`
  position: absolute;
  top: -4px;
  right: -4px;
  width: 14px;
  height: 14px;
  font-size: 9px;
  background: ${e=>"left"===e.type?"#2196F3":"#FF5722"};
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
`,Gn.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
`),qm=Gn.button`
  padding: 0.5rem;
  background: var(--primary-light);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: var(--primary);
  }
`,Km=Gn.span`
  font-weight: 600;
  min-width: 120px;
  text-align: center;
`,Gm=Gn.path`
  stroke: #ff9800;
  stroke-width: 4px;
  stroke-dasharray: 8;
  fill: none;
  opacity: 0.8;
  animation: dash 1s linear infinite;
  
  @keyframes dash {
    to {
      stroke-dashoffset: -16;
    }
  }
`,Ym=Gn.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,Xm=Gn.button`
  padding: 0.5rem 1rem;
  background: ${e=>e.active?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"#e0e0e0"};
  }
`;class Qm{constructor(e){this.value=e,this.left=null,this.right=null,this.height=1,this.balanceFactor=0}}const Jm=e=>e?e.height:0,Zm=e=>e?Jm(e.left)-Jm(e.right):0,ef=e=>{e&&(e.height=Math.max(Jm(e.left),Jm(e.right))+1,e.balanceFactor=Zm(e))},tf=e=>{const t=e.left,r=t.right;return t.right=e,e.left=r,ef(e),ef(t),t},rf=e=>{const t=e.right,r=t.left;return t.left=e,e.right=r,ef(e),ef(t),t},nf=e=>Math.floor((e-1)/2),af=e=>2*e+1,of=e=>2*e+2,sf=(e,t)=>{const r=nf(t);r>=0&&e[r].value<e[t].value&&([e[r],e[t]]=[e[t],e[r]],sf(e,r))},lf=(e,t)=>{const r=af(t),n=of(t);let i=t;r<e.length&&e[r].value>e[i].value&&(i=r),n<e.length&&e[n].value>e[i].value&&(i=n),i!==t&&([e[t],e[i]]=[e[i],e[t]],lf(e,i))},df=()=>{const[t,r]=(0,e.useState)(null),[n,i]=(0,e.useState)([]),[a,o]=(0,e.useState)([]),[s,l]=(0,e.useState)(""),[d,c]=(0,e.useState)(null),[u,h]=(0,e.useState)(null),[p,m]=(0,e.useState)([]),[f,g]=(0,e.useState)(null),[v,x]=(0,e.useState)("bst"),[y,b]=(0,e.useState)(null),[w,j]=(0,e.useState)({width:0,height:0}),S=(0,e.useRef)(null),[k,C]=(0,e.useState)(700),[T,E]=(0,e.useState)([]),[$,P]=(0,e.useState)("visualization"),A=e=>{if(!e)return[];const t=[e],r=[e];for(;r.length>0;){const e=r.shift();e.left&&(t.push(e.left),r.push(e.left)),e.right&&(t.push(e.right),r.push(e.right))}return t},I=e=>{if(0===e.length)return null;for(let t=0;t<e.length;t++){const r=af(t),n=of(t);e[t].left=r<e.length?e[r]:null,e[t].right=n<e.length?e[n]:null}return e[0]},z=e=>{let t=e.value;for(;null!==e.left;)t=e.left.value,e=e.left;return t},M=(e,t)=>{if(null===t)return new Qm(e);if(e<t.value)t.left=M(e,t.left);else{if(!(e>t.value))return t;t.right=M(e,t.right)}ef(t);const r=Zm(t);return r>1&&e<t.left.value?tf(t):r<-1&&e>t.right.value?rf(t):r>1&&e>t.left.value?(t.left=rf(t.left),tf(t)):r<-1&&e<t.right.value?(t.right=tf(t.right),rf(t)):t},F=(e,t)=>{if(null===t)return null;if(e<t.value)t.left=F(e,t.left);else if(e>t.value)t.right=F(e,t.right);else{if(null===t.left)return t.right;if(null===t.right)return t.left;t.value=z(t.right),t.right=F(t.value,t.right)}ef(t);const r=Zm(t);return r>1&&Zm(t.left)>=0?tf(t):r>1&&Zm(t.left)<0?(t.left=rf(t.left),tf(t)):r<-1&&Zm(t.right)<=0?rf(t):r<-1&&Zm(t.right)>0?(t.right=tf(t.right),rf(t)):t},R=(0,e.useCallback)((e=>{if(!e)return{nodes:[],edges:[]};const t=[],r=[],n=e=>e?1+Math.max(n(e.left),n(e.right)):0,i=n(e),a=S.current?S.current.offsetWidth:800,o=Math.min(100,a/(Math.pow(2,i-1)+1)),s=function(e,n,i){let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,d=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(!e)return;const c=Math.pow(2,n),u=a/2-c*o/2+i*o,h=80*n+30,p=t.length;t.push({id:p,value:e.value,x:u,y:h,level:n,position:i,direction:d}),null!==l&&r.push({from:l,to:p,direction:d}),e.left&&s(e.left,n+1,2*i,p,"left"),e.right&&s(e.right,n+1,2*i+1,p,"right")};return s(e,0,0),{nodes:t,edges:r}}),[S]);(0,e.useEffect)((()=>{if(t&&S.current){const{nodes:e,edges:r}=R(t);i(e),o(r)}}),[t,R,S]),(0,e.useEffect)((()=>{const e=()=>{if(S.current){const{width:e,height:t}=S.current.getBoundingClientRect();j({width:e,height:t})}};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const O=function(e){c({text:e,type:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success"}),setTimeout((()=>{c(null)}),3e3)},N=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;switch(v){case"avl":return M(e,r);case"heap":return((e,t)=>{const r=new Qm(e),n=A(t);return n.push(r),sf(n,n.length-1),I(n)})(e,r);default:return null===r?new Qm(e):(e<r.value?r.left=N(e,r.left):e>r.value&&(r.right=N(e,r.right)),r)}},L=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;switch(v){case"avl":return F(e,r);case"heap":return((e,t)=>{const r=A(t),n=r.findIndex((t=>t.value===e));return-1===n?t:([r[n],r[r.length-1]]=[r[r.length-1],r[n]],r.pop(),lf(r,n),I(r))})(e,r);default:if(null===r)return null;if(e<r.value)r.left=L(e,r.left);else if(e>r.value)r.right=L(e,r.right);else{if(null===r.left)return r.right;if(null===r.right)return r.left;r.value=z(r.right),r.right=L(r.value,r.right)}return r}},D=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(null===r)return{found:!1,path:n};if("heap"===v){const t=A(r),n=t.findIndex((t=>t.value===e));if(-1===n)return{found:!1,path:[]};const i=[];let a=n;for(i.unshift(t[a].value);a>0;)a=nf(a),i.unshift(t[a].value);return{found:!0,path:i}}{const t=[...n,r.value];return e===r.value?{found:!0,path:t}:e<r.value?D(e,r.left,t):D(e,r.right,t)}},V=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return null!==e&&(V(e.left,r),r.push(e.value),V(e.right,r)),r},_=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return null!==e&&(r.push(e.value),_(e.left,r),_(e.right,r)),r},B=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return null!==e&&(B(e.left,r),B(e.right,r),r.push(e.value)),r},U=()=>{b(null)},H=()=>{b(null)},W=async e=>{m([]),E([]);const t=[];for(let r=0;r<e.length;r++){const i=e[r];m([i]);const a=n.find((e=>e.value===i));a&&(t.push(a),E([...t])),await new Promise((e=>setTimeout(e,k)))}setTimeout((()=>{m([]),setTimeout((()=>{E([])}),1e3)}),500)},q=(()=>{switch(u){case"insert":return{title:"Insert Operation",description:"bst"===v?"Time Complexity: O(log n) average case, O(n) worst case. The insert operation adds a new node to the binary search tree, maintaining the BST property.":"avl"===v?"Time Complexity: O(log n). In an AVL tree, insertion includes rebalancing, which ensures the tree remains balanced.":'Time Complexity: O(log n). In a heap, insertion requires maintaining the heap property by "bubbling up" the new element.'};case"delete":return{title:"Delete Operation",description:"bst"===v?"Time Complexity: O(log n) average case, O(n) worst case. The delete operation removes a node while maintaining the BST property.":"avl"===v?"Time Complexity: O(log n). In an AVL tree, deletion includes rebalancing, which ensures the tree remains balanced.":'Time Complexity: O(log n). In a heap, deletion requires maintaining the heap property by "bubbling down" the replacement element.'};case"search":return{title:"Search Operation",description:"bst"===v||"avl"===v?"Time Complexity: O(log n) average case, O(n) worst case for BST; O(log n) for AVL. The search operation finds a node with a given value.":"Time Complexity: O(n). In a heap, searching for an arbitrary element requires checking all nodes."};case"traversal":return{title:"Traversal Operation",description:"Time Complexity: O(n). Tree traversal visits all nodes in a specific order. In-order: left-root-right, Pre-order: root-left-right, Post-order: left-right-root."};default:return null}})();(0,e.useEffect)((()=>{i([]),o([]),m([]),g(null);let e=null;"bst"===v?(e=new Qm(50),e.left=new Qm(30),e.right=new Qm(70),e.left.left=new Qm(20),e.left.right=new Qm(40),e.right.left=new Qm(60),e.right.right=new Qm(80)):"avl"===v?(e=new Qm(40),e.left=new Qm(20),e.right=new Qm(60),e.left.left=new Qm(10),e.left.right=new Qm(30),e.right.left=new Qm(50),e.right.right=new Qm(70),ef(e.left.left),ef(e.left.right),ef(e.right.left),ef(e.right.right),ef(e.left),ef(e.right),ef(e)):"heap"===v&&(e=new Qm(90),e.left=new Qm(70),e.right=new Qm(80),e.left.left=new Qm(50),e.left.right=new Qm(40),e.right.left=new Qm(60),e.right.right=new Qm(30)),r(e)}),[v]);return(0,Qn.jsxs)(Sm,{children:[(0,Qn.jsxs)(km,{children:[(0,Qn.jsx)(Cm,{children:"Trees"}),(0,Qn.jsx)(Tm,{children:"A tree is a hierarchical data structure consisting of nodes connected by edges. A binary tree has at most two children per node."})]}),(0,Qn.jsxs)(Em,{children:[(0,Qn.jsxs)(Ym,{children:[(0,Qn.jsx)(Xm,{active:"visualization"===$,onClick:()=>P("visualization"),children:"Visualization"}),(0,Qn.jsx)(Xm,{active:"code"===$,onClick:()=>P("code"),children:"Implementation"})]}),"visualization"===$?(0,Qn.jsxs)(Qn.Fragment,{children:[(0,Qn.jsxs)(Vm,{children:[(0,Qn.jsx)(_m,{active:"bst"===v,onClick:()=>x("bst"),children:"Binary Search Tree"}),(0,Qn.jsx)(_m,{active:"avl"===v,onClick:()=>x("avl"),children:"AVL Tree (Balanced)"}),(0,Qn.jsx)(_m,{active:"heap"===v,onClick:()=>x("heap"),children:"Heap"})]}),(0,Qn.jsxs)(Bm,{children:[(0,Qn.jsx)("strong",{children:"Interactive Tree:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Drag any node to reposition it"}),(0,Qn.jsx)("li",{children:"The tree edges will automatically adjust to follow the nodes"}),(0,Qn.jsx)("li",{children:"Use the operations below to modify the tree structure"})]}),"bst"===v&&(0,Qn.jsxs)("div",{children:[(0,Qn.jsx)("strong",{children:"Binary Search Tree Properties:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Left child is less than parent"}),(0,Qn.jsx)("li",{children:"Right child is greater than parent"}),(0,Qn.jsx)("li",{children:"Search operations are O(log n) on average, O(n) worst case"})]})]}),"avl"===v&&(0,Qn.jsxs)("div",{children:[(0,Qn.jsx)("strong",{children:"AVL Tree Properties:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Self-balancing binary search tree"}),(0,Qn.jsx)("li",{children:"For any node, height difference between left and right subtrees is at most 1"}),(0,Qn.jsx)("li",{children:"Maintains O(log n) time complexity for all operations"}),(0,Qn.jsx)("li",{children:"Automatically rebalances after insertions and deletions"})]})]}),"heap"===v&&(0,Qn.jsxs)("div",{children:[(0,Qn.jsx)("strong",{children:"Max Heap Properties:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Complete binary tree where parent is always greater than children"}),(0,Qn.jsx)("li",{children:"Root contains the maximum value"}),(0,Qn.jsx)("li",{children:"Insert and delete operations maintain the heap property"}),(0,Qn.jsx)("li",{children:"Used for priority queues and heap sort"})]})]})]}),(0,Qn.jsxs)(zm,{children:[(0,Qn.jsxs)("div",{children:[(0,Qn.jsx)("label",{children:"Value: "}),(0,Qn.jsx)(Mm,{type:"text",value:s,onChange:e=>l(e.target.value),placeholder:"Value"})]}),(0,Qn.jsx)(Fm,{onClick:()=>{if(""===s)return void O("Please enter a value","error");const e=parseInt(s);if(isNaN(e))return void O("Value must be a number","error");h("insert");const{found:n,path:i}=D(e);if(n)return void O("Value already exists in the tree","error");(async()=>{for(let e=0;e<i.length;e++)m([i[e]]),await new Promise((e=>setTimeout(e,k/2)));const n=t?{...t}:null,a=N(e,n);switch(r(a),v){case"avl":O(`Inserted ${e} into the AVL tree. Tree is automatically balanced.`);break;case"heap":O(`Inserted ${e} into the max heap. New value bubbled up to maintain heap property.`);break;default:O(`Inserted ${e} into the BST.`)}setTimeout((()=>{m([])}),1e3)})()},children:"Insert"}),(0,Qn.jsx)(Fm,{onClick:()=>{if(""===s)return void O("Please enter a value","error");const e=parseInt(s);if(isNaN(e))return void O("Value must be a number","error");h("delete");const{found:n,path:i}=D(e);if(!n)return void O("Value not found in the tree","error");(async()=>{for(let e=0;e<i.length;e++)m([i[e]]),await new Promise((e=>setTimeout(e,k/2)));const n=t?{...t}:null,a=L(e,n);switch(r(a),v){case"avl":O(`Deleted ${e} from the AVL tree. Tree was rebalanced.`);break;case"heap":O(`Deleted ${e} from the max heap. Heap property was restored.`);break;default:O(`Deleted ${e} from the BST.`)}setTimeout((()=>{m([])}),1e3)})()},variant:"secondary",children:"Delete"}),(0,Qn.jsx)(Fm,{onClick:()=>{if(""===s)return void O("Please enter a value","error");const e=parseInt(s);if(isNaN(e))return void O("Value must be a number","error");h("search");const{found:t,path:r}=D(e);(async()=>{for(let e=0;e<r.length;e++)m([r[e]]),await new Promise((e=>setTimeout(e,500)));t?O(`Found ${e} in the tree`):O(`Value ${e} not found in the tree`,"error"),setTimeout((()=>{m([])}),1e3)})()},children:"Search"}),(0,Qn.jsx)(Fm,{onClick:()=>{r(null),i([]),o([]),m([]),g(null),O("Tree cleared")},variant:"secondary",children:"Clear Tree"})]}),(0,Qn.jsxs)(zm,{children:[(0,Qn.jsx)(Fm,{onClick:()=>{h("traversal");const e=V();g({type:"In-Order",values:e}),W(e)},children:"In-Order"}),(0,Qn.jsx)(Fm,{onClick:()=>{h("traversal");const e=_();g({type:"Pre-Order",values:e}),W(e)},children:"Pre-Order"}),(0,Qn.jsx)(Fm,{onClick:()=>{h("traversal");const e=B();g({type:"Post-Order",values:e}),W(e)},children:"Post-Order"})]}),(0,Qn.jsxs)(Wm,{children:[(0,Qn.jsx)(qm,{onClick:()=>{C((e=>Math.min(e+200,1500)))},children:(0,Qn.jsx)("span",{role:"img","aria-label":"Decrease Speed",children:"\ud83d\udc22"})}),(0,Qn.jsxs)(Km,{children:["Animation Speed: ",100===k?"Very Fast":k<=300?"Fast":k<=700?"Normal":k<=1100?"Slow":"Very Slow"]}),(0,Qn.jsx)(qm,{onClick:()=>{C((e=>Math.max(e-200,100)))},children:(0,Qn.jsx)("span",{role:"img","aria-label":"Increase Speed",children:"\ud83d\udc07"})})]}),(0,Qn.jsx)(qh,{children:d&&(0,Qn.jsx)(Rm,{type:d.type,initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0},children:d.text})}),f&&(0,Qn.jsxs)(Lm,{children:[(0,Qn.jsxs)("strong",{children:[f.type," Traversal:"]}),(0,Qn.jsx)("div",{style:{marginTop:"0.5rem"},children:f.values.map(((e,t)=>(0,Qn.jsx)(Dm,{children:e},t)))})]}),(0,Qn.jsxs)($m,{ref:S,children:[(0,Qn.jsxs)(Am,{children:[T.length>1&&(0,Qn.jsx)(Gm,{d:T.map(((e,t)=>`${0===t?"M":"L"} ${e.x+25} ${e.y+25}`)).join(" ")}),a.map(((t,r)=>{const i=n.find((e=>e.id===t.from)),a=n.find((e=>e.id===t.to));if(!i||!a)return null;const o=i.x+25,s=i.y+25,l=a.x+25,d=a.y+25,c=(o+l)/2,u=(s+d)/2-5,h=`M ${o} ${s} L ${l} ${d}`;return(0,Qn.jsxs)(e.Fragment,{children:[(0,Qn.jsx)(Im,{d:h}),t.direction&&(0,Qn.jsx)(Um,{type:t.direction,x:c,y:u,textAnchor:"middle",dominantBaseline:"middle",children:"left"===t.direction?"L":"R"})]},r)}))]}),n.map((e=>(0,Qn.jsx)(Pm,{highlight:p.includes(e.value),style:{left:`${e.x}px`,top:`${e.y}px`,borderColor:"left"===e.direction?"#2196F3":"right"===e.direction?"#FF5722":"transparent"},initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.3},onMouseDown:()=>{return t=e.id,void b(t);var t},onMouseMove:t=>((e,t)=>{if(y===t){const r=[...n],a=r.find((e=>e.id===t));if(a){const t=a.x+e.movementX,n=a.y+e.movementY,o=25,s=w.width-2*o,l=w.height-2*o;a.x=Math.max(0,Math.min(t,s)),a.y=Math.max(0,Math.min(n,l)),i(r)}}})(t,e.id),onMouseUp:U,onMouseLeave:U,onTouchStart:()=>{return t=e.id,void b(t);var t},onTouchMove:t=>((e,t)=>{if(y===t&&e.touches&&e.touches[0]){e.preventDefault();const r=[...n],a=r.find((e=>e.id===t));if(a&&S.current){const t=S.current.getBoundingClientRect(),n=e.touches[0].clientX-t.left,o=e.touches[0].clientY-t.top,s=25,l=w.width-2*s,d=w.height-2*s;a.x=Math.max(0,Math.min(n-s,l)),a.y=Math.max(0,Math.min(o-s,d)),i(r)}}})(t,e.id),onTouchEnd:H,"data-node":"true","data-value":e.value,"data-level":e.level,"data-direction":e.direction||"root",children:(0,Qn.jsx)(Hm,{children:e.value})},e.id)))]}),q&&(0,Qn.jsxs)(Om,{children:[(0,Qn.jsx)(Nm,{children:q.title}),(0,Qn.jsx)("p",{children:q.description})]})]}):(0,Qn.jsxs)("div",{children:["bst"===v&&(0,Qn.jsx)(Qh,{title:"Binary Search Tree Implementation",code:"public class BinarySearchTree {\n    private Node root;\n    \n    private class Node {\n        int value;\n        Node left;\n        Node right;\n        \n        Node(int value) {\n            this.value = value;\n            left = null;\n            right = null;\n        }\n    }\n    \n    public void insert(int value) {\n        root = insertRec(root, value);\n    }\n    \n    private Node insertRec(Node root, int value) {\n        if (root == null) {\n            root = new Node(value);\n            return root;\n        }\n        \n        if (value < root.value)\n            root.left = insertRec(root.left, value);\n        else if (value > root.value)\n            root.right = insertRec(root.right, value);\n            \n        return root;\n    }\n    \n    public void delete(int value) {\n        root = deleteRec(root, value);\n    }\n    \n    private Node deleteRec(Node root, int value) {\n        if (root == null) return root;\n        \n        if (value < root.value)\n            root.left = deleteRec(root.left, value);\n        else if (value > root.value)\n            root.right = deleteRec(root.right, value);\n        else {\n            // Node with only one child or no child\n            if (root.left == null)\n                return root.right;\n            else if (root.right == null)\n                return root.left;\n                \n            // Node with two children\n            root.value = minValue(root.right);\n            root.right = deleteRec(root.right, root.value);\n        }\n        \n        return root;\n    }\n    \n    private int minValue(Node root) {\n        int minv = root.value;\n        while (root.left != null) {\n            minv = root.left.value;\n            root = root.left;\n        }\n        return minv;\n    }\n}"}),"avl"===v&&(0,Qn.jsx)(Qh,{title:"AVL Tree Implementation",code:"public class AVLTree {\n    private Node root;\n    \n    private class Node {\n        int value;\n        Node left;\n        Node right;\n        int height;\n        int balanceFactor;\n        \n        Node(int value) {\n            this.value = value;\n            left = null;\n            right = null;\n            height = 1;\n            balanceFactor = 0;\n        }\n    }\n    \n    private int height(Node node) {\n        return node == null ? 0 : node.height;\n    }\n    \n    private int getBalanceFactor(Node node) {\n        return node == null ? 0 : height(node.left) - height(node.right);\n    }\n    \n    private Node rotateRight(Node y) {\n        Node x = y.left;\n        Node T2 = x.right;\n        \n        x.right = y;\n        y.left = T2;\n        \n        y.height = Math.max(height(y.left), height(y.right)) + 1;\n        x.height = Math.max(height(x.left), height(x.right)) + 1;\n        \n        return x;\n    }\n    \n    private Node rotateLeft(Node x) {\n        Node y = x.right;\n        Node T2 = y.left;\n        \n        y.left = x;\n        x.right = T2;\n        \n        x.height = Math.max(height(x.left), height(x.right)) + 1;\n        y.height = Math.max(height(y.left), height(y.right)) + 1;\n        \n        return y;\n    }\n    \n    public void insert(int value) {\n        root = insertRec(root, value);\n    }\n    \n    private Node insertRec(Node node, int value) {\n        if (node == null)\n            return new Node(value);\n            \n        if (value < node.value)\n            node.left = insertRec(node.left, value);\n        else if (value > node.value)\n            node.right = insertRec(node.right, value);\n        else\n            return node;\n            \n        node.height = Math.max(height(node.left), height(node.right)) + 1;\n        int balance = getBalanceFactor(node);\n        \n        // Left Left Case\n        if (balance > 1 && value < node.left.value)\n            return rotateRight(node);\n            \n        // Right Right Case\n        if (balance < -1 && value > node.right.value)\n            return rotateLeft(node);\n            \n        // Left Right Case\n        if (balance > 1 && value > node.left.value) {\n            node.left = rotateLeft(node.left);\n            return rotateRight(node);\n        }\n        \n        // Right Left Case\n        if (balance < -1 && value < node.right.value) {\n            node.right = rotateRight(node.right);\n            return rotateLeft(node);\n        }\n        \n        return node;\n    }\n}"}),"heap"===v&&(0,Qn.jsx)(Qh,{title:"Max Heap Implementation",code:'public class MaxHeap {\n    private ArrayList<Integer> heap;\n    \n    public MaxHeap() {\n        heap = new ArrayList<>();\n    }\n    \n    private int parent(int i) {\n        return (i - 1) / 2;\n    }\n    \n    private int leftChild(int i) {\n        return 2 * i + 1;\n    }\n    \n    private int rightChild(int i) {\n        return 2 * i + 2;\n    }\n    \n    private void swap(int i, int j) {\n        int temp = heap.get(i);\n        heap.set(i, heap.get(j));\n        heap.set(j, temp);\n    }\n    \n    private void heapifyUp(int i) {\n        int parent = parent(i);\n        if (parent >= 0 && heap.get(parent) < heap.get(i)) {\n            swap(parent, i);\n            heapifyUp(parent);\n        }\n    }\n    \n    private void heapifyDown(int i) {\n        int largest = i;\n        int left = leftChild(i);\n        int right = rightChild(i);\n        \n        if (left < heap.size() && heap.get(left) > heap.get(largest))\n            largest = left;\n            \n        if (right < heap.size() && heap.get(right) > heap.get(largest))\n            largest = right;\n            \n        if (largest != i) {\n            swap(i, largest);\n            heapifyDown(largest);\n        }\n    }\n    \n    public void insert(int value) {\n        heap.add(value);\n        heapifyUp(heap.size() - 1);\n    }\n    \n    public int extractMax() {\n        if (heap.isEmpty())\n            throw new IllegalStateException("Heap is empty");\n            \n        int max = heap.get(0);\n        int lastElement = heap.remove(heap.size() - 1);\n        \n        if (!heap.isEmpty()) {\n            heap.set(0, lastElement);\n            heapifyDown(0);\n        }\n        \n        return max;\n    }\n}'})]})]})]})},cf=Gn.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,uf=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,hf=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,pf=Gn.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,mf=Gn.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,ff=Gn.div`
  width: 100%;
  margin: 2rem 0;
  border: 2px solid var(--primary-light);
  border-radius: var(--border-radius);
  overflow: hidden;
`,gf=Gn.div`
  display: flex;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
`,vf=Gn.div`
  width: 80px;
  padding: 0.75rem;
  background: var(--primary-light);
  color: white;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`,xf=Gn.div`
  flex: 1;
  padding: 0.75rem;
  background: ${e=>e.highlight?"#e6f7ff":"white"};
  transition: background-color 0.3s ease;
  overflow-x: auto;
`,yf=Gn(Zu.div)`
  display: inline-flex;
  align-items: center;
  margin-right: 1rem;
  padding: 0.5rem;
  background: ${e=>e.highlight?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.highlight?"white":"var(--text-primary)"};
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`,bf=Gn.span`
  font-weight: 500;
  margin-right: 0.25rem;
`,wf=Gn.span`
  font-weight: 400;
  color: ${e=>e.highlight?"white":"var(--text-secondary)"};
`,jf=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  align-items: center;
`,Sf=Gn.div`
  display: flex;
  flex-direction: column;
`,kf=Gn.label`
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
`,Cf=Gn.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 150px;
`,Tf=Gn.button`
  padding: 0.5rem 1rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`,Ef=Gn(Zu.div)`
  margin: 1rem 0;
  padding: 1rem;
  background: ${e=>"error"===e.type?"#ffebee":"#e8f5e9"};
  color: ${e=>"error"===e.type?"var(--error)":"#2e7d32"};
  border-radius: var(--border-radius);
`,$f=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  border-left: 4px solid var(--primary);
`,Pf=Gn.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,Af=Gn.button`
  padding: 0.5rem 1rem;
  background: ${e=>e.active?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"#e0e0e0"};
  }
`,If=()=>{const[t,r]=(0,e.useState)(Array(10).fill().map((()=>[]))),[n,i]=(0,e.useState)(""),[a,o]=(0,e.useState)(""),[s,l]=(0,e.useState)(""),[d,c]=(0,e.useState)(null),[u,h]=(0,e.useState)(-1),[p,m]=(0,e.useState)(null),[f,g]=(0,e.useState)("visualization"),v=e=>{if("number"===typeof e)return e%t.length;let r=0;for(let n=0;n<e.length;n++)r=(r+e.charCodeAt(n)*(n+1))%t.length;return r},x=function(e){c({text:e,type:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success"}),setTimeout((()=>{c(null)}),3e3)};(0,e.useEffect)((()=>{const e=Array(10).fill().map((()=>[]));[{key:"apple",value:"red fruit"},{key:"banana",value:"yellow fruit"},{key:"cat",value:"small pet"},{key:"dog",value:"loyal pet"},{key:"elephant",value:"large animal"}].forEach((t=>{let{key:r,value:n}=t;const i=v(r);e[i].push({key:r,value:n})})),r(e)}),[]);return(0,Qn.jsxs)(cf,{children:[(0,Qn.jsxs)(uf,{children:[(0,Qn.jsx)(hf,{children:"Hash Tables"}),(0,Qn.jsx)(pf,{children:"Hash tables are data structures that implement an associative array abstract data type, a structure that can map keys to values using a hash function to compute an index into an array of buckets or slots."})]}),(0,Qn.jsxs)(mf,{children:[(0,Qn.jsxs)(Pf,{children:[(0,Qn.jsx)(Af,{active:"visualization"===f,onClick:()=>g("visualization"),children:"Visualization"}),(0,Qn.jsx)(Af,{active:"code"===f,onClick:()=>g("code"),children:"Implementation"})]}),"visualization"===f?(0,Qn.jsxs)(Qn.Fragment,{children:[(0,Qn.jsxs)($f,{children:[(0,Qn.jsx)("strong",{children:"Hash Table Properties:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Hash tables provide average O(1) time complexity for search, insert, and delete operations"}),(0,Qn.jsx)("li",{children:"Hash collisions are resolved using chaining (linked lists at each bucket)"}),(0,Qn.jsx)("li",{children:"The hash function determines which bucket (index) a key is mapped to"}),(0,Qn.jsx)("li",{children:"For this example, we're using a simple hash function: sum of character codes * position % table size"})]})]}),(0,Qn.jsxs)(jf,{children:[(0,Qn.jsxs)(Sf,{children:[(0,Qn.jsx)(kf,{children:"Key"}),(0,Qn.jsx)(Cf,{type:"text",value:n,onChange:e=>i(e.target.value),placeholder:"Enter key"})]}),(0,Qn.jsxs)(Sf,{children:[(0,Qn.jsx)(kf,{children:"Value"}),(0,Qn.jsx)(Cf,{type:"text",value:a,onChange:e=>o(e.target.value),placeholder:"Enter value"})]}),(0,Qn.jsx)(Tf,{onClick:async()=>{if(!n)return void x("Please enter a key","error");const e=v(n);h(e);const s=t[e].findIndex((e=>e.key===n));if(-1!==s){const i=[...t];i[e]=[...i[e]],i[e][s]={key:n,value:a},m({index:e,key:n}),r(i),x(`Updated value for key '${n}'`)}else{const i=[...t];i[e]=[...i[e],{key:n,value:a}],m({index:e,key:n}),r(i),x(`Inserted key '${n}' with value '${a}'`)}i(""),o(""),setTimeout((()=>{h(-1),m(null)}),2e3)},children:"Insert / Update"})]}),(0,Qn.jsxs)(jf,{children:[(0,Qn.jsxs)(Sf,{children:[(0,Qn.jsx)(kf,{children:"Key"}),(0,Qn.jsx)(Cf,{type:"text",value:s,onChange:e=>l(e.target.value),placeholder:"Enter key"})]}),(0,Qn.jsx)(Tf,{onClick:async()=>{if(!s)return void x("Please enter a key to search","error");const e=v(s);h(e);const r=t[e].find((e=>e.key===s));r?(m({index:e,key:s}),x(`Found key '${s}' with value '${r.value}'`)):x(`Key '${s}' not found`,"error"),l(""),setTimeout((()=>{h(-1),m(null)}),2e3)},children:"Search"}),(0,Qn.jsx)(Tf,{onClick:async()=>{if(!s)return void x("Please enter a key to delete","error");const e=v(s);h(e);const n=t[e].findIndex((e=>e.key===s));if(-1!==n){const i=[...t];i[e]=i[e].filter(((e,t)=>t!==n)),r(i),x(`Deleted key '${s}'`)}else x(`Key '${s}' not found`,"error");l(""),setTimeout((()=>{h(-1)}),2e3)},children:"Delete"}),(0,Qn.jsx)(Tf,{onClick:()=>{r(Array(10).fill().map((()=>[]))),h(-1),m(null),x("Hash table cleared")},children:"Clear Table"})]}),(0,Qn.jsx)(qh,{children:d&&(0,Qn.jsx)(Ef,{type:d.type,initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0},children:d.text})}),(0,Qn.jsx)(ff,{children:t.map(((e,t)=>(0,Qn.jsxs)(gf,{children:[(0,Qn.jsx)(vf,{children:t}),(0,Qn.jsx)(xf,{highlight:u===t,children:e.map((e=>(0,Qn.jsxs)(yf,{highlight:p&&p.index===t&&p.key===e.key,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},layout:!0,children:[(0,Qn.jsxs)(bf,{children:[e.key,":"]}),(0,Qn.jsx)(wf,{highlight:p&&p.index===t&&p.key===e.key,children:e.value})]},e.key)))})]},t)))})]}):(0,Qn.jsx)(Qh,{title:"Hash Table Implementation",code:'public class HashTable<K, V> {\n    private static class Entry<K, V> {\n        final K key;\n        V value;\n        Entry<K, V> next;\n        \n        Entry(K key, V value) {\n            this.key = key;\n            this.value = value;\n            this.next = null;\n        }\n    }\n    \n    private Entry<K, V>[] buckets;\n    private int size;\n    private static final int DEFAULT_CAPACITY = 16;\n    private static final double LOAD_FACTOR = 0.75;\n    \n    @SuppressWarnings("unchecked")\n    public HashTable() {\n        this.buckets = (Entry<K, V>[]) new Entry[DEFAULT_CAPACITY];\n        this.size = 0;\n    }\n    \n    private int hash(K key) {\n        return key == null ? 0 : Math.abs(key.hashCode()) % buckets.length;\n    }\n    \n    public void put(K key, V value) {\n        if (key == null) {\n            throw new IllegalArgumentException("Key cannot be null");\n        }\n        \n        // Check if we need to resize\n        if ((double) size / buckets.length >= LOAD_FACTOR) {\n            resize();\n        }\n        \n        int index = hash(key);\n        Entry<K, V> entry = buckets[index];\n        \n        // Check if key already exists\n        while (entry != null) {\n            if (entry.key.equals(key)) {\n                entry.value = value; // Update existing value\n                return;\n            }\n            entry = entry.next;\n        }\n        \n        // Add new entry at the beginning of the linked list\n        Entry<K, V> newEntry = new Entry<>(key, value);\n        newEntry.next = buckets[index];\n        buckets[index] = newEntry;\n        size++;\n    }\n    \n    public V get(K key) {\n        if (key == null) {\n            throw new IllegalArgumentException("Key cannot be null");\n        }\n        \n        int index = hash(key);\n        Entry<K, V> entry = buckets[index];\n        \n        while (entry != null) {\n            if (entry.key.equals(key)) {\n                return entry.value;\n            }\n            entry = entry.next;\n        }\n        \n        return null; // Key not found\n    }\n    \n    public boolean containsKey(K key) {\n        if (key == null) {\n            throw new IllegalArgumentException("Key cannot be null");\n        }\n        \n        int index = hash(key);\n        Entry<K, V> entry = buckets[index];\n        \n        while (entry != null) {\n            if (entry.key.equals(key)) {\n                return true;\n            }\n            entry = entry.next;\n        }\n        \n        return false;\n    }\n    \n    public V remove(K key) {\n        if (key == null) {\n            throw new IllegalArgumentException("Key cannot be null");\n        }\n        \n        int index = hash(key);\n        Entry<K, V> entry = buckets[index];\n        Entry<K, V> prev = null;\n        \n        while (entry != null) {\n            if (entry.key.equals(key)) {\n                if (prev == null) {\n                    buckets[index] = entry.next;\n                } else {\n                    prev.next = entry.next;\n                }\n                size--;\n                return entry.value;\n            }\n            prev = entry;\n            entry = entry.next;\n        }\n        \n        return null; // Key not found\n    }\n    \n    public int size() {\n        return size;\n    }\n    \n    public boolean isEmpty() {\n        return size == 0;\n    }\n    \n    @SuppressWarnings("unchecked")\n    private void resize() {\n        int newCapacity = buckets.length * 2;\n        Entry<K, V>[] oldBuckets = buckets;\n        buckets = (Entry<K, V>[]) new Entry[newCapacity];\n        size = 0;\n        \n        // Rehash all entries\n        for (Entry<K, V> entry : oldBuckets) {\n            while (entry != null) {\n                put(entry.key, entry.value);\n                entry = entry.next;\n            }\n        }\n    }\n}'})]})]})},zf=Gn.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,Mf=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,Ff=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,Rf=Gn.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,Of=Gn.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`,Nf=Gn.div`
  width: 100%;
  height: 500px;
  border: 2px solid var(--primary-light);
  border-radius: var(--border-radius);
  margin: 2rem 0;
  position: relative;
  background: #f9f9f9;
  overflow: hidden;
`,Lf=Gn.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`,Df=Gn.path`
  stroke: ${e=>e.highlight?"var(--primary)":"var(--primary-light)"};
  stroke-width: 3px;
  fill: none;
  pointer-events: all;
  cursor: pointer;
`,Vf=Gn.marker`
  fill: var(--primary-light);
`,_f=Gn(Zu.div)`
  width: 40px;
  height: 40px;
  background: ${e=>e.highlight?"var(--primary)":e.selected?"var(--secondary)":"var(--primary-light)"};
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  position: absolute;
  cursor: pointer;
  z-index: 2;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  user-select: none;
  
  &:hover {
    transform: scale(1.1);
  }
`,Bf=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  border-left: 4px solid var(--primary);
`,Uf=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,Hf=Gn.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Wf=Gn.label`
  font-size: 0.9rem;
  color: var(--text-secondary);
`,qf=Gn.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 80px;
`,Kf=Gn.button`
  background: ${e=>"secondary"===e.variant?"var(--secondary)":"var(--primary)"};
  
  &:hover {
    background: ${e=>"secondary"===e.variant?"#02c4b0":"var(--primary-light)"};
  }
`,Gf=Gn(Zu.div)`
  margin: 1rem 0;
  padding: 1rem;
  width: 100%;
  background: ${e=>"error"===e.type?"#ffebee":"#e8f5e9"};
  color: ${e=>"error"===e.type?"var(--error)":"#2e7d32"};
  border-radius: var(--border-radius);
  text-align: center;
`,Yf=Gn.div`
  margin-top: 2rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
  width: 100%;
`,Xf=Gn.h3`
  margin-bottom: 0.5rem;
  color: var(--primary);
`,Qf=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f0f0f0;
  border-radius: var(--border-radius);
  width: 100%;
  text-align: center;
`,Jf=Gn.span`
  display: inline-block;
  background: var(--primary-light);
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  margin: 0 0.25rem;
  font-weight: 600;
`,Zf=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
  justify-content: center;
`,eg=Gn.button`
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  background: ${e=>e.active?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"#e0e0e0"};
  }
`;class tg{constructor(){this.vertices=new Map,this.edges=new Map}addVertex(e,t,r){this.vertices.set(e,{id:e,x:t,y:r}),this.edges.set(e,new Set)}removeVertex(e){for(const[t,r]of this.edges)r.has(e)&&(r.delete(e),console.debug(`Removed connection from ${t} to ${e}`));this.edges.delete(e),this.vertices.delete(e)}addEdge(e,t){this.edges.has(e)&&this.edges.has(t)&&(this.edges.get(e).add(t),this.edges.get(t).add(e))}removeEdge(e,t){this.edges.has(e)&&this.edges.has(t)&&(this.edges.get(e).delete(t),this.edges.get(t).delete(e))}hasEdge(e,t){return this.edges.has(e)&&this.edges.get(e).has(t)}getNeighbors(e){return this.edges.get(e)||new Set}bfs(e){const t=new Set,r=[e],n=[];for(;r.length>0;){const e=r.shift();if(!t.has(e)){t.add(e),n.push(e);const i=this.getNeighbors(e);for(const e of i)t.has(e)||r.push(e)}}return n}dfs(e){const t=new Set,r=[],n=e=>{if(!t.has(e)){t.add(e),r.push(e);const i=this.getNeighbors(e);for(const e of i)n(e)}};return n(e),r}}const rg=()=>{const[t,r]=(0,e.useState)(new tg),[n,i]=(0,e.useState)(null),[a,o]=(0,e.useState)(null),[s,l]=(0,e.useState)(null),[d,c]=(0,e.useState)([]),[u,h]=(0,e.useState)([]),[p,m]=(0,e.useState)(null),[f,g]=(0,e.useState)("undirected"),[v,x]=(0,e.useState)(""),[y,b]=(0,e.useState)(""),w=function(e){o({text:e,type:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success"}),setTimeout((()=>{o(null)}),3e3)},j=(()=>{switch(s){case"addVertex":return{title:"Add Vertex Operation",description:"Time Complexity: O(1). Adding a vertex to the graph is a constant time operation."};case"removeVertex":return{title:"Remove Vertex Operation",description:"Time Complexity: O(V + E). Removing a vertex requires removing all its edges and updating the adjacency lists."};case"addEdge":return{title:"Add Edge Operation",description:"Time Complexity: O(1). Adding an edge to the graph is a constant time operation."};case"removeEdge":return{title:"Remove Edge Operation",description:"Time Complexity: O(1). Removing an edge from the graph is a constant time operation."};case"bfs":return{title:"Breadth-First Search",description:"Time Complexity: O(V + E). BFS visits all vertices and edges in the graph exactly once."};case"dfs":return{title:"Depth-First Search",description:"Time Complexity: O(V + E). DFS visits all vertices and edges in the graph exactly once."};default:return null}})();return(0,Qn.jsxs)(zf,{children:[(0,Qn.jsxs)(Mf,{children:[(0,Qn.jsx)(Ff,{children:"Graphs"}),(0,Qn.jsx)(Rf,{children:"A graph is a non-linear data structure consisting of vertices (nodes) and edges that connect these vertices. Graphs can be directed or undirected."})]}),(0,Qn.jsxs)(Of,{children:[(0,Qn.jsxs)(Zf,{children:[(0,Qn.jsx)(eg,{active:"undirected"===f,onClick:()=>g("undirected"),children:"Undirected Graph"}),(0,Qn.jsx)(eg,{active:"directed"===f,onClick:()=>g("directed"),children:"Directed Graph"})]}),(0,Qn.jsxs)(Bf,{children:[(0,Qn.jsx)("strong",{children:"How to use:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Click on the canvas to add a vertex"}),(0,Qn.jsx)("li",{children:"Click a vertex once to select it, then click another vertex to create an edge between them"}),(0,Qn.jsx)("li",{children:"Right-click on a vertex to delete it"}),(0,Qn.jsx)("li",{children:"Right-click on an edge to delete it"})]}),(0,Qn.jsxs)("p",{children:[(0,Qn.jsx)("strong",{children:"Vertex ID:"})," Each node in the graph needs a unique identifier. You can provide a custom ID in the input field before adding a vertex, or leave it blank to get an automatically generated ID (e.g., V1, V2, etc.)."]})]}),(0,Qn.jsxs)(Uf,{children:[(0,Qn.jsxs)(Hf,{children:[(0,Qn.jsx)(Wf,{children:"Vertex ID:"}),(0,Qn.jsx)(qf,{type:"text",value:v,onChange:e=>x(e.target.value),placeholder:"Vertex ID"})]}),(0,Qn.jsxs)(Hf,{children:[(0,Qn.jsx)(Wf,{children:"Start Vertex:"}),(0,Qn.jsx)(qf,{type:"text",value:y,onChange:e=>b(e.target.value),placeholder:"Start Vertex"})]}),(0,Qn.jsx)(Kf,{onClick:()=>{if(!y)return void w("Please enter a start vertex","error");if(!t.vertices.has(y))return void w("Start vertex does not exist","error");l("bfs");const e=t.bfs(y);m({type:"BFS",values:e});(async()=>{for(let t=0;t<e.length;t++)c([e[t]]),await new Promise((e=>setTimeout(e,500)));setTimeout((()=>{c([])}),1e3)})()},children:"BFS"}),(0,Qn.jsx)(Kf,{onClick:()=>{if(!y)return void w("Please enter a start vertex","error");if(!t.vertices.has(y))return void w("Start vertex does not exist","error");l("dfs");const e=t.dfs(y);m({type:"DFS",values:e});(async()=>{for(let t=0;t<e.length;t++)c([e[t]]),await new Promise((e=>setTimeout(e,500)));setTimeout((()=>{c([])}),1e3)})()},children:"DFS"}),(0,Qn.jsx)(Kf,{onClick:()=>{r(new tg),i(null),c([]),h([]),m(null),w("Graph cleared")},variant:"secondary",children:"Clear Graph"})]}),(0,Qn.jsx)(qh,{children:a&&(0,Qn.jsx)(Gf,{type:a.type,initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0},children:a.text})}),p&&(0,Qn.jsxs)(Qf,{children:[(0,Qn.jsxs)("strong",{children:[p.type," Traversal:"]}),(0,Qn.jsx)("div",{style:{marginTop:"0.5rem"},children:p.values.map(((e,t)=>(0,Qn.jsx)(Jf,{children:e},t)))})]}),(0,Qn.jsxs)(Nf,{onClick:e=>{const n=e.currentTarget.getBoundingClientRect(),i=e.clientX-n.left,a=e.clientY-n.top,o=v||`V${t.vertices.size+1}`;if(t.vertices.has(o))return void w(`Vertex ${o} already exists`,"error");l("addVertex");const s=new tg;t.vertices.forEach(((e,r)=>{s.addVertex(r,e.x,e.y),t.edges.get(r).forEach((e=>{s.addEdge(r,e)}))})),s.addVertex(o,i,a),r(s),w(`Added vertex ${o}`),x("")},children:[(0,Qn.jsxs)(Lf,{children:[(0,Qn.jsx)("defs",{children:(0,Qn.jsx)(Vf,{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:(0,Qn.jsx)("polygon",{points:"0 0, 10 3.5, 0 7"})})}),Array.from(t.vertices.entries()).flatMap((e=>{let[n,i]=e;const a=t.edges.get(n);return a?Array.from(a).map((e=>{if("undirected"===f&&n>e)return null;const a=t.vertices.get(e);if(!a)return null;const o=u.includes(`${n}-${e}`),s=`M ${i.x} ${i.y} L ${a.x} ${a.y}`;return(0,Qn.jsx)(Df,{d:s,highlight:o,markerEnd:"directed"===f?"url(#arrowhead)":"",onContextMenu:i=>{i.preventDefault(),i.stopPropagation(),((e,n)=>{if(!t.hasEdge(e,n))return void w("Edge does not exist","error");l("removeEdge");const i=new tg;t.vertices.forEach(((r,a)=>{i.addVertex(a,r.x,r.y),t.edges.get(a).forEach((t=>{a===e&&t===n||a===n&&t===e||i.addEdge(a,t)}))})),r(i),w(`Removed edge between ${e} and ${n}`)})(n,e)}},`${n}-${e}`)})).filter(Boolean):[]}))]}),Array.from(t.vertices.values()).map((e=>(0,Qn.jsx)(_f,{highlight:d.includes(e.id),selected:n===e.id,style:{left:e.x-20+"px",top:e.y-20+"px"},initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.3},onClick:a=>{a.stopPropagation(),n?(n!==e.id&&((e,n)=>{if(t.hasEdge(e,n))return void w("Edge already exists","error");l("addEdge");const i=new tg;t.vertices.forEach(((e,r)=>{i.addVertex(r,e.x,e.y),t.edges.get(r).forEach((e=>{i.addEdge(r,e)}))})),i.addEdge(e,n),r(i),w(`Added edge between ${e} and ${n}`)})(n,e.id),i(null)):i(e.id)},onContextMenu:n=>{n.preventDefault(),n.stopPropagation(),(e=>{l("removeVertex");const n=new tg;t.vertices.forEach(((r,i)=>{i!==e&&(n.addVertex(i,r.x,r.y),t.edges.get(i).forEach((t=>{t!==e&&n.addEdge(i,t)})))})),r(n),w(`Removed vertex ${e}`)})(e.id)},children:e.id},e.id)))]}),j&&(0,Qn.jsxs)(Yf,{children:[(0,Qn.jsx)(Xf,{children:j.title}),(0,Qn.jsx)("p",{children:j.description})]})]})]})},ng=Gn.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,ig=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,ag=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,og=Gn.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,sg=Gn.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`,lg=Gn.div`
  width: 100%;
  min-height: 400px;
  margin: 2rem 0;
  position: relative;
  overflow: hidden;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--primary-light);
  border-radius: var(--border-radius);
  background: #f9f9f9;
`,dg=Gn(Zu.div)`
  width: 50px;
  height: 50px;
  background: ${e=>e.highlight?"var(--primary)":"var(--primary-light)"};
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  position: absolute;
  z-index: 2;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`,cg=Gn.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: visible;
`,ug=Gn.path`
  stroke: var(--primary-light);
  stroke-width: 3px;
  fill: none;
`,hg=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,pg=Gn.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 80px;
`,mg=Gn.button`
  background: ${e=>"secondary"===e.variant?"var(--secondary)":"var(--primary)"};
  
  &:hover {
    background: ${e=>"secondary"===e.variant?"#02c4b0":"var(--primary-light)"};
  }
`,fg=Gn(Zu.div)`
  margin: 1rem 0;
  padding: 1rem;
  width: 100%;
  background: ${e=>"error"===e.type?"#ffebee":"#e8f5e9"};
  color: ${e=>"error"===e.type?"var(--error)":"#2e7d32"};
  border-radius: var(--border-radius);
  text-align: center;
`,gg=Gn.div`
  margin-top: 2rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
  width: 100%;
`,vg=Gn.h3`
  margin-bottom: 0.5rem;
  color: var(--primary);
`,xg=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
  justify-content: center;
`,yg=Gn.button`
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  background: ${e=>e.active?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"#e0e0e0"};
  }
`,bg=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  border-left: 4px solid var(--primary);
  width: 100%;
`,wg=Gn.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,jg=Gn.button`
  padding: 0.5rem 1rem;
  background: ${e=>e.active?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"#e0e0e0"};
  }
`,Sg=()=>{const[t,r]=(0,e.useState)([]),[n,i]=(0,e.useState)([]),[a,o]=(0,e.useState)([]),[s,l]=(0,e.useState)(""),[d,c]=(0,e.useState)(null),[u,h]=(0,e.useState)(null),[p,m]=(0,e.useState)([]),[f,g]=(0,e.useState)("max"),[v,x]=(0,e.useState)("visualization"),y=e=>2*e+1,b=e=>2*e+2;(0,e.useEffect)((()=>{const{nodes:e,edges:r}=(e=>{if(0===e.length)return{nodes:[],edges:[]};const t=[],r=[],n=70*(Math.floor(Math.log2(e.length))+1)+100,i=e=>{const t=Math.floor(Math.log2(e+1));return{x:(800-60*Math.pow(2,t))/2+60*(e-Math.pow(2,t)+1)+30-25,y:70*t+20}};for(let a=0;a<e.length;a++){const{x:o,y:s}=i(a);t.push({id:a,value:e[a],x:Math.max(25,Math.min(730,o)),y:Math.min(n-50-20,s),highlight:p.includes(a)});const l=y(a);l<e.length&&r.push({from:a,to:l});const d=b(a);d<e.length&&r.push({from:a,to:d})}return{nodes:t,edges:r}})(t);i(e),o(r)}),[t,p]);const w=function(e){c({text:e,type:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success"}),setTimeout((()=>{c(null)}),3e3)},j=e=>{e!==f&&(g(e),r([]),m([]),w(`Switched to ${e} heap`))},S=(()=>{switch(u){case"insert":return{title:"Insert Operation",description:`Time Complexity: O(log n). Inserting a new element into a ${f} heap involves adding the element to the end and then "bubbling up" to maintain the heap property.`};case"extractRoot":return{title:"Extract Root Operation",description:`Time Complexity: O(log n). Removing the ${"max"===f?"maximum":"minimum"} element (root) from a ${f} heap involves replacing it with the last element and then "bubbling down" to maintain the heap property.`};default:return null}})(),k=()=>{const e=Array.from({length:7},(()=>Math.floor(90*Math.random())+10)),t=(e,r,n)=>{let i=r;const a=2*r+1,o=2*r+2;a<n&&("max"===f&&e[a]>e[i]||"min"===f&&e[a]<e[i])&&(i=a),o<n&&("max"===f&&e[o]>e[i]||"min"===f&&e[o]<e[i])&&(i=o),i!==r&&([e[r],e[i]]=[e[i],e[r]],t(e,i,n))},n=(e=>{const r=[...e];for(let n=Math.floor(r.length/2)-1;n>=0;n--)t(r,n,r.length);return r})(e);r(n),w(`Generated a random ${f} heap`)};(0,e.useEffect)((()=>{k()}),[f]);return(0,Qn.jsxs)(ng,{children:[(0,Qn.jsxs)(ig,{children:[(0,Qn.jsx)(ag,{children:"Heaps"}),(0,Qn.jsx)(og,{children:"A heap is a specialized tree-based data structure that satisfies the heap property. In a max heap, for any given node, the value of the node is greater than or equal to the values of its children. In a min heap, the value of the node is less than or equal to the values of its children."})]}),(0,Qn.jsxs)(sg,{children:[(0,Qn.jsxs)(wg,{children:[(0,Qn.jsx)(jg,{active:"visualization"===v,onClick:()=>x("visualization"),children:"Visualization"}),(0,Qn.jsx)(jg,{active:"code"===v,onClick:()=>x("code"),children:"Implementation"})]}),"visualization"===v?(0,Qn.jsxs)(Qn.Fragment,{children:[(0,Qn.jsxs)(xg,{children:[(0,Qn.jsx)(yg,{active:"max"===f,onClick:()=>j("max"),children:"Max Heap"}),(0,Qn.jsx)(yg,{active:"min"===f,onClick:()=>j("min"),children:"Min Heap"})]}),(0,Qn.jsxs)(bg,{children:[(0,Qn.jsxs)("strong",{children:["max"===f?"Max Heap":"Min Heap"," Properties:"]}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Complete binary tree where each node satisfies the heap property"}),(0,Qn.jsx)("li",{children:"max"===f?"Max Heap: Every parent node has a value greater than or equal to its children":"Min Heap: Every parent node has a value less than or equal to its children"}),(0,Qn.jsxs)("li",{children:["The root contains the ","max"===f?"maximum":"minimum"," value in the heap"]}),(0,Qn.jsx)("li",{children:"Efficiently implements priority queues with O(log n) time complexity for insertions and extractions"})]})]}),(0,Qn.jsxs)(hg,{children:[(0,Qn.jsxs)("div",{children:[(0,Qn.jsx)("label",{children:"Value: "}),(0,Qn.jsx)(pg,{type:"text",value:s,onChange:e=>l(e.target.value),placeholder:"Value"})]}),(0,Qn.jsx)(mg,{onClick:async()=>{if(""===s)return void w("Please enter a value","error");const e=parseInt(s);if(isNaN(e))return void w("Value must be a number","error");h("insert");const{newHeap:n,path:i}=(e=>{const r=[...t,e];let n=r.length-1,i=[n];for(;n>0;){const e=(a=n,Math.floor((a-1)/2));if("max"===f&&r[e]>=r[n]||"min"===f&&r[e]<=r[n])break;[r[e],r[n]]=[r[n],r[e]],n=e,i.push(n)}var a;return{newHeap:r,path:i.reverse()}})(e);for(let t=0;t<i.length;t++)m([i[t]]),await new Promise((e=>setTimeout(e,500)));r(n),w(`Inserted ${e} into the ${f} heap`),setTimeout((()=>{m([])}),1e3)},children:"Insert"}),(0,Qn.jsxs)(mg,{onClick:async()=>{if(0===t.length)return void w("Heap is empty","error");h("extractRoot"),m([0]),await new Promise((e=>setTimeout(e,500)));const e=t[0],{newHeap:n,path:i}=(()=>{if(0===t.length)return{newHeap:[],path:[]};if(1===t.length)return{newHeap:[],path:[0]};const e=[...t],r=(e[0],e.pop());if(e.length>0){e[0]=r;let t=[0];const n=r=>{const i=y(r),a=b(r);let o=r;"max"===f?(i<e.length&&e[i]>e[o]&&(o=i),a<e.length&&e[a]>e[o]&&(o=a)):(i<e.length&&e[i]<e[o]&&(o=i),a<e.length&&e[a]<e[o]&&(o=a)),o!==r&&([e[r],e[o]]=[e[o],e[r]],t.push(o),n(o))};return n(0),{newHeap:e,path:t}}return{newHeap:e,path:[0]}})();for(let t=0;t<i.length;t++)m([i[t]]),await new Promise((e=>setTimeout(e,500)));r(n),w(`Extracted ${e} from the ${f} heap`),setTimeout((()=>{m([])}),1e3)},variant:"secondary",children:["Extract ","max"===f?"Max":"Min"]}),(0,Qn.jsx)(mg,{onClick:k,children:"Generate Random Heap"}),(0,Qn.jsx)(mg,{onClick:()=>{r([]),m([]),c(null),w("Heap cleared")},variant:"secondary",children:"Clear Heap"})]}),(0,Qn.jsx)(qh,{children:d&&(0,Qn.jsx)(fg,{type:d.type,initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0},children:d.text})}),(0,Qn.jsxs)(lg,{children:[(0,Qn.jsx)(cg,{children:a.map(((e,t)=>{const r=n.find((t=>t.id===e.from)),i=n.find((t=>t.id===e.to));if(!r||!i)return null;const a=r.x+25,o=r.y+25,s=i.x+25,l=i.y+25,d=(o+l)/2,c=`M ${a} ${o} C ${a} ${d}, ${s} ${d}, ${s} ${l}`;return(0,Qn.jsx)(ug,{d:c,strokeDasharray:(p.includes(e.from)&&p.includes(e.to),"none"),opacity:p.includes(e.from)&&p.includes(e.to)?1:.6},t)}))}),n.map((e=>(0,Qn.jsx)(dg,{highlight:e.highlight,style:{left:`${e.x}px`,top:`${e.y}px`},initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.3},"data-node":"true","data-value":e.value,children:e.value},e.id)))]}),S&&(0,Qn.jsxs)(gg,{children:[(0,Qn.jsx)(vg,{children:S.title}),(0,Qn.jsx)("p",{children:S.description})]})]}):(0,Qn.jsx)("div",{children:"max"===f?(0,Qn.jsx)(Qh,{title:"Max Heap Implementation",code:'public class MaxHeap {\n    private ArrayList<Integer> heap;\n    \n    public MaxHeap() {\n        heap = new ArrayList<>();\n    }\n    \n    private int parent(int i) {\n        return (i - 1) / 2;\n    }\n    \n    private int leftChild(int i) {\n        return 2 * i + 1;\n    }\n    \n    private int rightChild(int i) {\n        return 2 * i + 2;\n    }\n    \n    private void swap(int i, int j) {\n        int temp = heap.get(i);\n        heap.set(i, heap.get(j));\n        heap.set(j, temp);\n    }\n    \n    private void heapifyUp(int i) {\n        int parent = parent(i);\n        if (parent >= 0 && heap.get(parent) < heap.get(i)) {\n            swap(parent, i);\n            heapifyUp(parent);\n        }\n    }\n    \n    private void heapifyDown(int i) {\n        int largest = i;\n        int left = leftChild(i);\n        int right = rightChild(i);\n        \n        if (left < heap.size() && heap.get(left) > heap.get(largest))\n            largest = left;\n            \n        if (right < heap.size() && heap.get(right) > heap.get(largest))\n            largest = right;\n            \n        if (largest != i) {\n            swap(i, largest);\n            heapifyDown(largest);\n        }\n    }\n    \n    public void insert(int value) {\n        heap.add(value);\n        heapifyUp(heap.size() - 1);\n    }\n    \n    public int extractMax() {\n        if (heap.isEmpty())\n            throw new IllegalStateException("Heap is empty");\n            \n        int max = heap.get(0);\n        int lastElement = heap.remove(heap.size() - 1);\n        \n        if (!heap.isEmpty()) {\n            heap.set(0, lastElement);\n            heapifyDown(0);\n        }\n        \n        return max;\n    }\n    \n    public int peek() {\n        if (heap.isEmpty())\n            throw new IllegalStateException("Heap is empty");\n        return heap.get(0);\n    }\n    \n    public boolean isEmpty() {\n        return heap.isEmpty();\n    }\n    \n    public int size() {\n        return heap.size();\n    }\n    \n    // Build heap from array\n    public void buildHeap(int[] array) {\n        heap.clear();\n        for (int value : array) {\n            heap.add(value);\n        }\n        \n        for (int i = parent(heap.size() - 1); i >= 0; i--) {\n            heapifyDown(i);\n        }\n    }\n}'}):(0,Qn.jsx)(Qh,{title:"Min Heap Implementation",code:'public class MinHeap {\n    private ArrayList<Integer> heap;\n    \n    public MinHeap() {\n        heap = new ArrayList<>();\n    }\n    \n    private int parent(int i) {\n        return (i - 1) / 2;\n    }\n    \n    private int leftChild(int i) {\n        return 2 * i + 1;\n    }\n    \n    private int rightChild(int i) {\n        return 2 * i + 2;\n    }\n    \n    private void swap(int i, int j) {\n        int temp = heap.get(i);\n        heap.set(i, heap.get(j));\n        heap.set(j, temp);\n    }\n    \n    private void heapifyUp(int i) {\n        int parent = parent(i);\n        if (parent >= 0 && heap.get(parent) > heap.get(i)) {\n            swap(parent, i);\n            heapifyUp(parent);\n        }\n    }\n    \n    private void heapifyDown(int i) {\n        int smallest = i;\n        int left = leftChild(i);\n        int right = rightChild(i);\n        \n        if (left < heap.size() && heap.get(left) < heap.get(smallest))\n            smallest = left;\n            \n        if (right < heap.size() && heap.get(right) < heap.get(smallest))\n            smallest = right;\n            \n        if (smallest != i) {\n            swap(i, smallest);\n            heapifyDown(smallest);\n        }\n    }\n    \n    public void insert(int value) {\n        heap.add(value);\n        heapifyUp(heap.size() - 1);\n    }\n    \n    public int extractMin() {\n        if (heap.isEmpty())\n            throw new IllegalStateException("Heap is empty");\n            \n        int min = heap.get(0);\n        int lastElement = heap.remove(heap.size() - 1);\n        \n        if (!heap.isEmpty()) {\n            heap.set(0, lastElement);\n            heapifyDown(0);\n        }\n        \n        return min;\n    }\n    \n    public int peek() {\n        if (heap.isEmpty())\n            throw new IllegalStateException("Heap is empty");\n        return heap.get(0);\n    }\n    \n    public boolean isEmpty() {\n        return heap.isEmpty();\n    }\n    \n    public int size() {\n        return heap.size();\n    }\n    \n    // Build heap from array\n    public void buildHeap(int[] array) {\n        heap.clear();\n        for (int value : array) {\n            heap.add(value);\n        }\n        \n        for (int i = parent(heap.size() - 1); i >= 0; i--) {\n            heapifyDown(i);\n        }\n    }\n}'})})]})]})},kg=Gn.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,Cg=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,Tg=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,Eg=Gn.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,$g=Gn.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,Pg=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
  justify-content: center;
  align-items: flex-end;
  min-height: 200px;
`,Ag=Gn(Zu.div)`
  width: 40px;
  height: ${e=>e.height}px;
  background: ${e=>e.sorted?"var(--secondary)":e.comparing?"var(--primary)":e.swapping?"#ff5722":"var(--primary-light)"};
  border-radius: 4px 4px 0 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 5px;
  color: white;
  font-weight: 600;
  font-size: 0.8rem;
`,Ig=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,zg=Gn.button`
  padding: 0.5rem 1.5rem;
  border-radius: var(--border-radius);
  background: var(--primary);
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`,Mg=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Fg=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Rg=Gn.input`
  width: 100px;
`,Og=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,Ng=Gn.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,Lg=Gn.button`
  padding: 0.5rem 1rem;
  background: ${e=>e.active?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"#e0e0e0"};
  }
`,Dg=Gn.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,Vg=Gn.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,_g=Gn.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,Bg=Gn.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,Ug=Gn.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,Hg=()=>{const[t,r]=(0,e.useState)([]),[n,i]=(0,e.useState)(!1),[a,o]=(0,e.useState)(!1),[s,l]=(0,e.useState)([]),[d,c]=(0,e.useState)([]),[u,h]=(0,e.useState)([]),[p,m]=(0,e.useState)(10),[f,g]=(0,e.useState)(500),[v,x]=(0,e.useState)("visualization");(0,e.useEffect)((()=>{y()}),[p]);const y=()=>{const e=[];for(let t=0;t<p;t++)e.push(Math.floor(100*Math.random())+5);r(e),o(!1),h([])},b=e=>new Promise((t=>setTimeout(t,e)));return(0,Qn.jsxs)(kg,{children:[(0,Qn.jsxs)(Cg,{children:[(0,Qn.jsx)(Tg,{children:"Bubble Sort"}),(0,Qn.jsx)(Eg,{children:"Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in wrong order."})]}),(0,Qn.jsxs)($g,{children:[(0,Qn.jsxs)(Ng,{children:[(0,Qn.jsx)(Lg,{active:"visualization"===v,onClick:()=>x("visualization"),children:"Visualization"}),(0,Qn.jsx)(Lg,{active:"code"===v,onClick:()=>x("code"),children:"Code"})]}),"visualization"===v?(0,Qn.jsxs)(Qn.Fragment,{children:[(0,Qn.jsxs)(Ig,{children:[(0,Qn.jsxs)(Fg,{children:[(0,Qn.jsx)("span",{children:"Size:"}),(0,Qn.jsx)(Rg,{type:"range",min:"5",max:"20",value:p,onChange:e=>m(parseInt(e.target.value)),disabled:n}),(0,Qn.jsx)("span",{children:p})]}),(0,Qn.jsxs)(Mg,{children:[(0,Qn.jsx)("span",{children:"Speed:"}),(0,Qn.jsx)(Rg,{type:"range",min:"50",max:"1000",step:"50",value:f,onChange:e=>g(parseInt(e.target.value)),disabled:n}),(0,Qn.jsxs)("span",{children:[f,"ms"]})]}),(0,Qn.jsx)(zg,{onClick:y,disabled:n,children:"Generate New Array"}),(0,Qn.jsx)(zg,{onClick:async()=>{if(n)return;i(!0),o(!1),h([]);const e=t.length;let a,s=[...t];for(let t=0;t<e-1;t++){a=!1;for(let n=0;n<e-t-1;n++){if(l([n,n+1]),await b(f),s[n]>s[n+1]){c([n,n+1]),await b(f);let e=s[n];s[n]=s[n+1],s[n+1]=e,r([...s]),a=!0,c([]),await b(f/2)}l([])}if(h((r=>[...r,e-1-t])),!a){const r=[];for(let n=0;n<=e-t-2;n++)r.push(n);h((e=>[...e,...r]));break}}i(!1),o(!0)},disabled:n||a,children:n?"Sorting...":"Sort"}),(0,Qn.jsx)(zg,{onClick:()=>{i(!1),o(!1),l([]),c([]),h([]),y()},disabled:n,children:"Reset"})]}),(0,Qn.jsx)(Pg,{children:t.map(((e,t)=>(0,Qn.jsx)(Ag,{height:2*e,comparing:s.includes(t),swapping:d.includes(t),sorted:u.includes(t),initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.05*t},children:e},t)))}),n&&(0,Qn.jsx)(Og,{children:"Sorting in progress..."}),a&&(0,Qn.jsx)(Og,{children:"Array sorted successfully!"}),(0,Qn.jsxs)(Dg,{children:[(0,Qn.jsx)(Vg,{children:"Algorithm Complexity"}),(0,Qn.jsx)("p",{children:"Bubble Sort is a simple algorithm but not very efficient for large datasets."}),(0,Qn.jsxs)(_g,{children:[(0,Qn.jsx)("thead",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(Bg,{children:"Time Complexity"}),(0,Qn.jsx)(Bg,{children:"Space Complexity"})]})}),(0,Qn.jsx)("tbody",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsxs)(Ug,{children:[(0,Qn.jsx)("div",{children:"Best Case: O(n)"}),(0,Qn.jsx)("div",{children:"Average Case: O(n\xb2)"}),(0,Qn.jsx)("div",{children:"Worst Case: O(n\xb2)"})]}),(0,Qn.jsx)(Ug,{children:"O(1)"})]})})]})]})]}):(0,Qn.jsx)(Qh,{title:"Bubble Sort Implementation (Java)",code:'\npublic class BubbleSort {\n  public static void bubbleSort(int[] arr) {\n    int n = arr.length;\n    boolean swapped;\n    \n    for (int i = 0; i < n - 1; i++) {\n      swapped = false;\n      \n      for (int j = 0; j < n - i - 1; j++) {\n        // Compare adjacent elements\n        if (arr[j] > arr[j + 1]) {\n          // Swap arr[j] and arr[j+1]\n          int temp = arr[j];\n          arr[j] = arr[j + 1];\n          arr[j + 1] = temp;\n          swapped = true;\n        }\n      }\n      \n      // If no swapping occurred in this pass, array is sorted\n      if (!swapped) {\n        break;\n      }\n    }\n  }\n  \n  // Driver method to test the algorithm\n  public static void main(String[] args) {\n    int[] arr = {64, 34, 25, 12, 22, 11, 90};\n    \n    System.out.println("Unsorted array:");\n    printArray(arr);\n    \n    bubbleSort(arr);\n    \n    System.out.println("Sorted array:");\n    printArray(arr);\n  }\n  \n  // Utility method to print an array\n  static void printArray(int[] arr) {\n    for (int i = 0; i < arr.length; i++) {\n      System.out.print(arr[i] + " ");\n    }\n    System.out.println();\n  }\n}\n'})]})]})},Wg=Gn.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,qg=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,Kg=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,Gg=Gn.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,Yg=Gn.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,Xg=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
  justify-content: center;
  align-items: flex-end;
  min-height: 200px;
`,Qg=Gn(Zu.div)`
  width: 40px;
  height: ${e=>e.height}px;
  background: ${e=>e.sorted?"var(--secondary)":e.minIndex?"#ff5722":e.comparing?"var(--primary)":e.swapping?"#9c27b0":"var(--primary-light)"};
  border-radius: 4px 4px 0 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 5px;
  color: white;
  font-weight: 600;
  font-size: 0.8rem;
`,Jg=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,Zg=Gn.button`
  padding: 0.5rem 1.5rem;
  border-radius: var(--border-radius);
  background: var(--primary);
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`,ev=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,tv=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,rv=Gn.input`
  width: 100px;
`,nv=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,iv=Gn.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,av=Gn.button`
  padding: 0.5rem 1rem;
  background: ${e=>e.active?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"#e0e0e0"};
  }
`,ov=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,sv=Gn.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,lv=Gn.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,dv=Gn.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,cv=Gn.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,uv=Gn.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,hv=()=>{const[t,r]=(0,e.useState)([]),[n,i]=(0,e.useState)(!1),[a,o]=(0,e.useState)(!1),[s,l]=(0,e.useState)([]),[d,c]=(0,e.useState)(-1),[u,h]=(0,e.useState)([]),[p,m]=(0,e.useState)([]),[f,g]=(0,e.useState)(10),[v,x]=(0,e.useState)(500),[y,b]=(0,e.useState)("visualization"),[w,j]=(0,e.useState)("");(0,e.useEffect)((()=>{S()}),[f]);const S=()=>{const e=[];for(let t=0;t<f;t++)e.push(Math.floor(100*Math.random())+5);r(e),o(!1),m([])},k=e=>new Promise((t=>setTimeout(t,e)));return(0,Qn.jsxs)(Wg,{children:[(0,Qn.jsxs)(qg,{children:[(0,Qn.jsx)(Kg,{children:"Selection Sort"}),(0,Qn.jsx)(Gg,{children:"Selection Sort is a simple sorting algorithm that repeatedly finds the minimum element from the unsorted part of the array and puts it at the beginning."})]}),(0,Qn.jsxs)(Yg,{children:[(0,Qn.jsxs)(iv,{children:[(0,Qn.jsx)(av,{active:"visualization"===y,onClick:()=>b("visualization"),children:"Visualization"}),(0,Qn.jsx)(av,{active:"code"===y,onClick:()=>b("code"),children:"Code"})]}),"visualization"===y?(0,Qn.jsxs)(Qn.Fragment,{children:[(0,Qn.jsxs)(Jg,{children:[(0,Qn.jsxs)(tv,{children:[(0,Qn.jsx)("span",{children:"Size:"}),(0,Qn.jsx)(rv,{type:"range",min:"5",max:"20",value:f,onChange:e=>g(parseInt(e.target.value)),disabled:n}),(0,Qn.jsx)("span",{children:f})]}),(0,Qn.jsxs)(ev,{children:[(0,Qn.jsx)("span",{children:"Speed:"}),(0,Qn.jsx)(rv,{type:"range",min:"50",max:"1000",step:"50",value:v,onChange:e=>x(parseInt(e.target.value)),disabled:n}),(0,Qn.jsxs)("span",{children:[v,"ms"]})]}),(0,Qn.jsx)(Zg,{onClick:S,disabled:n,children:"Generate New Array"}),(0,Qn.jsx)(Zg,{onClick:async()=>{if(n)return;i(!0),o(!1),m([]);const e=t.length;let a=[...t];for(let t=0;t<e-1;t++){j(`Finding the minimum element in the unsorted part of the array (starting from index ${t})`);let n=t;c(n),await k(v);for(let r=t+1;r<e;r++)l([n,r]),j(`Comparing ${a[r]} with current minimum ${a[n]}`),await k(v),a[r]<a[n]&&(n=r,c(n),j(`New minimum found: ${a[n]} at index ${n}`),await k(v)),l([]);if(n!==t){h([t,n]),j(`Swapping ${a[t]} with ${a[n]}`),await k(v);let e=a[n];a[n]=a[t],a[t]=e,r([...a])}else j(`${a[t]} is already at the correct position (index ${t})`);h([]),c(-1),await k(v),m((e=>[...e,t]))}m((t=>[...t,e-1])),j("Array sorted successfully!"),i(!1),o(!0)},disabled:n||a,children:n?"Sorting...":"Sort"}),(0,Qn.jsx)(Zg,{onClick:()=>{i(!1),o(!1),l([]),c(-1),h([]),m([]),j(""),S()},disabled:n,children:"Reset"})]}),(0,Qn.jsx)(Xg,{children:t.map(((e,t)=>(0,Qn.jsx)(Qg,{height:2*e,comparing:s.includes(t),minIndex:t===d,swapping:u.includes(t),sorted:p.includes(t),initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.05*t},children:e},t)))}),w&&(0,Qn.jsx)(ov,{children:w}),a&&!w&&(0,Qn.jsx)(nv,{children:"Array sorted successfully!"}),(0,Qn.jsxs)(sv,{children:[(0,Qn.jsx)(lv,{children:"Algorithm Complexity"}),(0,Qn.jsx)("p",{children:"Selection Sort has a simple implementation but is generally less efficient than algorithms like Quick Sort or Merge Sort for large datasets."}),(0,Qn.jsxs)(dv,{children:[(0,Qn.jsx)("thead",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(cv,{children:"Time Complexity"}),(0,Qn.jsx)(cv,{children:"Space Complexity"})]})}),(0,Qn.jsx)("tbody",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsxs)(uv,{children:[(0,Qn.jsx)("div",{children:"Best Case: O(n\xb2)"}),(0,Qn.jsx)("div",{children:"Average Case: O(n\xb2)"}),(0,Qn.jsx)("div",{children:"Worst Case: O(n\xb2)"})]}),(0,Qn.jsx)(uv,{children:"O(1)"})]})})]})]})]}):(0,Qn.jsx)(Qh,{title:"Selection Sort Implementation (Java)",code:'\npublic class SelectionSort {\n  public static void selectionSort(int[] arr) {\n    int n = arr.length;\n    \n    // One by one move boundary of unsorted subarray\n    for (int i = 0; i < n - 1; i++) {\n      // Find the minimum element in unsorted array\n      int min_idx = i;\n      for (int j = i + 1; j < n; j++) {\n        if (arr[j] < arr[min_idx]) {\n          min_idx = j;\n        }\n      }\n      \n      // Swap the found minimum element with the first element\n      int temp = arr[min_idx];\n      arr[min_idx] = arr[i];\n      arr[i] = temp;\n    }\n  }\n  \n  // Driver method to test above\n  public static void main(String[] args) {\n    int[] arr = {64, 25, 12, 22, 11};\n    \n    System.out.println("Unsorted array:");\n    printArray(arr);\n    \n    selectionSort(arr);\n    \n    System.out.println("Sorted array:");\n    printArray(arr);\n  }\n  \n  // Utility method to print an array\n  static void printArray(int[] arr) {\n    for (int i = 0; i < arr.length; i++) {\n      System.out.print(arr[i] + " ");\n    }\n    System.out.println();\n  }\n}\n'})]})]})},pv=Gn.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,mv=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,fv=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,gv=Gn.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,vv=Gn.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,xv=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
  justify-content: center;
  align-items: flex-end;
  min-height: 200px;
`,yv=Gn(Zu.div)`
  width: 40px;
  height: ${e=>e.height}px;
  background: ${e=>e.sorted?"var(--secondary)":e.current?"var(--primary)":e.comparing?"#ff5722":e.shifting?"#9c27b0":"var(--primary-light)"};
  border-radius: 4px 4px 0 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 5px;
  color: white;
  font-weight: 600;
  font-size: 0.8rem;
`,bv=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,wv=Gn.button`
  padding: 0.5rem 1.5rem;
  border-radius: var(--border-radius);
  background: var(--primary);
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`,jv=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Sv=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,kv=Gn.input`
  width: 100px;
`,Cv=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,Tv=Gn.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,Ev=Gn.button`
  padding: 0.5rem 1rem;
  background: ${e=>e.active?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"#e0e0e0"};
  }
`,$v=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,Pv=Gn.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,Av=Gn.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,Iv=Gn.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,zv=Gn.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,Mv=Gn.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,Fv=()=>{const[t,r]=(0,e.useState)([]),[n,i]=(0,e.useState)(!1),[a,o]=(0,e.useState)(!1),[s,l]=(0,e.useState)(-1),[d,c]=(0,e.useState)(-1),[u,h]=(0,e.useState)([]),[p,m]=(0,e.useState)([0]),[f,g]=(0,e.useState)(10),[v,x]=(0,e.useState)(500),[y,b]=(0,e.useState)("visualization"),[w,j]=(0,e.useState)("");(0,e.useEffect)((()=>{S()}),[f]);const S=()=>{const e=[];for(let t=0;t<f;t++)e.push(Math.floor(100*Math.random())+5);r(e),o(!1),m([0])},k=e=>new Promise((t=>setTimeout(t,e)));return(0,Qn.jsxs)(pv,{children:[(0,Qn.jsxs)(mv,{children:[(0,Qn.jsx)(fv,{children:"Insertion Sort"}),(0,Qn.jsx)(gv,{children:"Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is efficient for small data sets and is often used as part of more sophisticated algorithms."})]}),(0,Qn.jsxs)(vv,{children:[(0,Qn.jsxs)(Tv,{children:[(0,Qn.jsx)(Ev,{active:"visualization"===y,onClick:()=>b("visualization"),children:"Visualization"}),(0,Qn.jsx)(Ev,{active:"code"===y,onClick:()=>b("code"),children:"Code"})]}),"visualization"===y?(0,Qn.jsxs)(Qn.Fragment,{children:[(0,Qn.jsxs)(bv,{children:[(0,Qn.jsxs)(Sv,{children:[(0,Qn.jsx)("span",{children:"Size:"}),(0,Qn.jsx)(kv,{type:"range",min:"5",max:"20",value:f,onChange:e=>g(parseInt(e.target.value)),disabled:n}),(0,Qn.jsx)("span",{children:f})]}),(0,Qn.jsxs)(jv,{children:[(0,Qn.jsx)("span",{children:"Speed:"}),(0,Qn.jsx)(kv,{type:"range",min:"50",max:"1000",step:"50",value:v,onChange:e=>x(parseInt(e.target.value)),disabled:n}),(0,Qn.jsxs)("span",{children:[v,"ms"]})]}),(0,Qn.jsx)(wv,{onClick:S,disabled:n,children:"Generate New Array"}),(0,Qn.jsx)(wv,{onClick:async()=>{if(n)return;i(!0),o(!1),m([0]);const e=t.length;let a=[...t];for(let t=1;t<e;t++){l(t),j(`Inserting element ${a[t]} into the sorted part of the array`),await k(v);let e=a[t],n=t-1;for(;n>=0&&(c(n),j(`Comparing ${e} with ${a[n]}`),await k(v),a[n]>e);)h([n,n+1]),j(`${a[n]} > ${e}, shifting ${a[n]} to the right`),await k(v),a[n+1]=a[n],r([...a]),n-=1,h([]);a[n+1]=e,j(`Placing ${e} at position ${n+1}`),r([...a]),await k(v),l(-1),c(-1),m((e=>[...e,t]))}j("Array sorted successfully!"),i(!1),o(!0)},disabled:n||a,children:n?"Sorting...":"Sort"}),(0,Qn.jsx)(wv,{onClick:()=>{i(!1),o(!1),l(-1),c(-1),h([]),m([0]),j(""),S()},disabled:n,children:"Reset"})]}),(0,Qn.jsx)(xv,{children:t.map(((e,t)=>(0,Qn.jsx)(yv,{height:2*e,current:t===s,comparing:t===d,shifting:u.includes(t),sorted:p.includes(t),initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.05*t},children:e},t)))}),w&&(0,Qn.jsx)($v,{children:w}),a&&!w&&(0,Qn.jsx)(Cv,{children:"Array sorted successfully!"}),(0,Qn.jsxs)(Pv,{children:[(0,Qn.jsx)(Av,{children:"Algorithm Complexity"}),(0,Qn.jsx)("p",{children:"Insertion Sort performs well for small data sets and is adaptive, meaning it is efficient for data sets that are already substantially sorted."}),(0,Qn.jsxs)(Iv,{children:[(0,Qn.jsx)("thead",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(zv,{children:"Time Complexity"}),(0,Qn.jsx)(zv,{children:"Space Complexity"})]})}),(0,Qn.jsx)("tbody",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsxs)(Mv,{children:[(0,Qn.jsx)("div",{children:"Best Case: O(n)"}),(0,Qn.jsx)("div",{children:"Average Case: O(n\xb2)"}),(0,Qn.jsx)("div",{children:"Worst Case: O(n\xb2)"})]}),(0,Qn.jsx)(Mv,{children:"O(1)"})]})})]})]})]}):(0,Qn.jsx)(Qh,{title:"Insertion Sort Implementation (Java)",code:'\npublic class InsertionSort {\n  public static void insertionSort(int[] arr) {\n    int n = arr.length;\n    \n    for (int i = 1; i < n; i++) {\n      int key = arr[i];\n      int j = i - 1;\n      \n      // Move elements of arr[0..i-1] that are greater than key\n      // to one position ahead of their current position\n      while (j >= 0 && arr[j] > key) {\n        arr[j + 1] = arr[j];\n        j = j - 1;\n      }\n      arr[j + 1] = key;\n    }\n  }\n  \n  // Driver method to test the algorithm\n  public static void main(String[] args) {\n    int[] arr = {12, 11, 13, 5, 6};\n    \n    System.out.println("Unsorted array:");\n    printArray(arr);\n    \n    insertionSort(arr);\n    \n    System.out.println("Sorted array:");\n    printArray(arr);\n  }\n  \n  // Utility method to print an array\n  static void printArray(int[] arr) {\n    for (int i = 0; i < arr.length; i++) {\n      System.out.print(arr[i] + " ");\n    }\n    System.out.println();\n  }\n}\n'})]})]})},Rv=Gn.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,Ov=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,Nv=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,Lv=Gn.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,Dv=Gn.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,Vv=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
  justify-content: center;
  align-items: flex-end;
  min-height: 200px;
`,_v=Gn.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
  width: 100%;
`,Bv=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1rem;
  position: relative;
  
  &:after {
    content: '${e=>e.label||""}';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.8rem;
    color: var(--text-secondary);
  }
`,Uv=Gn(Zu.div)`
  width: 40px;
  height: ${e=>e.height}px;
  background: ${e=>e.sorted?"var(--secondary)":e.merging?"#ff5722":e.comparing?"var(--primary)":e.dividing?"#9c27b0":"var(--primary-light)"};
  border-radius: 4px 4px 0 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 5px;
  color: white;
  font-weight: 600;
  font-size: 0.8rem;
`,Hv=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,Wv=Gn.button`
  padding: 0.5rem 1.5rem;
  border-radius: var(--border-radius);
  background: var(--primary);
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`,qv=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Kv=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Gv=Gn.input`
  width: 100px;
`,Yv=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,Xv=Gn.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,Qv=Gn.button`
  padding: 0.5rem 1rem;
  background: ${e=>e.active?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"#e0e0e0"};
  }
`,Jv=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,Zv=Gn.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,ex=Gn.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,tx=Gn.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,rx=Gn.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,nx=Gn.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,ix=()=>{const[t,r]=(0,e.useState)([]),[n,i]=(0,e.useState)(!1),[a,o]=(0,e.useState)(!1),[s,l]=(0,e.useState)([]),[d,c]=(0,e.useState)([]),[u,h]=(0,e.useState)([]),[p,m]=(0,e.useState)(10),[f,g]=(0,e.useState)(500),[v,x]=(0,e.useState)("visualization"),[y,b]=(0,e.useState)("");(0,e.useEffect)((()=>{w()}),[p]);const w=()=>{const e=[];for(let t=0;t<p;t++)e.push(Math.floor(100*Math.random())+5);r(e),o(!1),h([])},j=e=>new Promise((t=>setTimeout(t,e))),S=async(e,t,n,i)=>{if(t>=n)return;const a=Math.floor(t+(n-t)/2);b(`Dividing array from index ${t} to ${n} at midpoint ${a}`);const o=[...u];o[i]||(o[i]=[]);const s=e.slice(t,n+1);return o[i]=[...o[i],{array:s,left:t,right:n,label:`[${t}...${n}]`}],h(o),await j(f),await S(e,t,a,i+1),await S(e,a+1,n,i+1),await k(e,t,a,n),r([...e]),e},k=async(e,t,n,i)=>{const a=n-t+1,o=i-n,s=new Array(a),d=new Array(o);for(let r=0;r<a;r++)s[r]=e[t+r];for(let r=0;r<o;r++)d[r]=e[n+1+r];let u=0,h=0,p=t;for(b(`Merging subarrays: [${s.join(", ")}] and [${d.join(", ")}]`),await j(f);u<a&&h<o;)l([t+u,n+1+h]),b(`Comparing ${s[u]} and ${d[h]}`),await j(f),s[u]<=d[h]?(c([p]),b(`Placing ${s[u]} at position ${p}`),e[p]=s[u],u++):(c([p]),b(`Placing ${d[h]} at position ${p}`),e[p]=d[h],h++),r([...e]),p++,await j(f/2),l([]),c([]);for(;u<a;)c([p]),b(`Copying remaining element ${s[u]} to position ${p}`),e[p]=s[u],u++,p++,r([...e]),await j(f/2),c([]);for(;h<o;)c([p]),b(`Copying remaining element ${d[h]} to position ${p}`),e[p]=d[h],h++,p++,r([...e]),await j(f/2),c([]);b(`Merged subarray from index ${t} to ${i}`),await j(f)};return(0,Qn.jsxs)(Rv,{children:[(0,Qn.jsxs)(Ov,{children:[(0,Qn.jsx)(Nv,{children:"Merge Sort"}),(0,Qn.jsx)(Lv,{children:"Merge Sort is an efficient, stable, comparison-based, divide and conquer sorting algorithm. It divides the input array into two halves, recursively sorts them, and then merges the sorted halves."})]}),(0,Qn.jsxs)(Dv,{children:[(0,Qn.jsxs)(Xv,{children:[(0,Qn.jsx)(Qv,{active:"visualization"===v,onClick:()=>x("visualization"),children:"Visualization"}),(0,Qn.jsx)(Qv,{active:"code"===v,onClick:()=>x("code"),children:"Code"})]}),"visualization"===v?(0,Qn.jsxs)(Qn.Fragment,{children:[(0,Qn.jsxs)(Hv,{children:[(0,Qn.jsxs)(Kv,{children:[(0,Qn.jsx)("span",{children:"Size:"}),(0,Qn.jsx)(Gv,{type:"range",min:"4",max:"16",value:p,onChange:e=>m(parseInt(e.target.value)),disabled:n}),(0,Qn.jsx)("span",{children:p})]}),(0,Qn.jsxs)(qv,{children:[(0,Qn.jsx)("span",{children:"Speed:"}),(0,Qn.jsx)(Gv,{type:"range",min:"100",max:"1000",step:"50",value:f,onChange:e=>g(parseInt(e.target.value)),disabled:n}),(0,Qn.jsxs)("span",{children:[f,"ms"]})]}),(0,Qn.jsx)(Wv,{onClick:w,disabled:n,children:"Generate New Array"}),(0,Qn.jsx)(Wv,{onClick:async()=>{if(n)return;i(!0),o(!1),b("Starting merge sort..."),await j(f);const e=[...t];await S(e,0,e.length-1,0),b("Array sorted successfully!"),i(!1),o(!0)},disabled:n||a,children:n?"Sorting...":"Sort"}),(0,Qn.jsx)(Wv,{onClick:()=>{i(!1),o(!1),l([]),c([]),h([]),b(""),w()},disabled:n,children:"Reset"})]}),(0,Qn.jsx)(Vv,{children:t.map(((e,t)=>(0,Qn.jsx)(Uv,{height:2*e,comparing:s.includes(t),merging:d.includes(t),sorted:a,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.05*t},children:e},t)))}),u.length>0&&(0,Qn.jsx)(_v,{children:u.map(((e,t)=>(0,Qn.jsxs)("div",{children:[(0,Qn.jsxs)("h4",{children:["Level ",t+1]}),e.map(((e,r)=>(0,Qn.jsx)(Bv,{label:e.label,children:e.array.map(((e,n)=>(0,Qn.jsx)(Uv,{height:1.5*e,sorted:!1,dividing:!0,children:e},`${t}-${r}-${n}`)))},`${t}-${r}`)))]},t)))}),y&&(0,Qn.jsx)(Jv,{children:y}),a&&!y&&(0,Qn.jsx)(Yv,{children:"Array sorted successfully!"}),(0,Qn.jsxs)(Zv,{children:[(0,Qn.jsx)(ex,{children:"Algorithm Complexity"}),(0,Qn.jsx)("p",{children:"Merge Sort is one of the most efficient sorting algorithms with a consistent time complexity in all cases."}),(0,Qn.jsxs)(tx,{children:[(0,Qn.jsx)("thead",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(rx,{children:"Time Complexity"}),(0,Qn.jsx)(rx,{children:"Space Complexity"})]})}),(0,Qn.jsx)("tbody",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsxs)(nx,{children:[(0,Qn.jsx)("div",{children:"Best Case: O(n log n)"}),(0,Qn.jsx)("div",{children:"Average Case: O(n log n)"}),(0,Qn.jsx)("div",{children:"Worst Case: O(n log n)"})]}),(0,Qn.jsx)(nx,{children:"O(n)"})]})})]})]})]}):(0,Qn.jsx)(Qh,{title:"Merge Sort Implementation (Java)",code:'\npublic class MergeSort {\n  // Merges two subarrays of arr[]\n  // First subarray is arr[l..m]\n  // Second subarray is arr[m+1..r]\n  void merge(int arr[], int l, int m, int r) {\n    // Find sizes of two subarrays to be merged\n    int n1 = m - l + 1;\n    int n2 = r - m;\n\n    // Create temp arrays\n    int L[] = new int[n1];\n    int R[] = new int[n2];\n\n    // Copy data to temp arrays\n    for (int i = 0; i < n1; ++i)\n      L[i] = arr[l + i];\n    for (int j = 0; j < n2; ++j)\n      R[j] = arr[m + 1 + j];\n\n    // Merge the temp arrays\n\n    // Initial indices of first and second subarrays\n    int i = 0, j = 0;\n\n    // Initial index of merged subarray array\n    int k = l;\n    while (i < n1 && j < n2) {\n      if (L[i] <= R[j]) {\n        arr[k] = L[i];\n        i++;\n      } else {\n        arr[k] = R[j];\n        j++;\n      }\n      k++;\n    }\n\n    // Copy remaining elements of L[] if any\n    while (i < n1) {\n      arr[k] = L[i];\n      i++;\n      k++;\n    }\n\n    // Copy remaining elements of R[] if any\n    while (j < n2) {\n      arr[k] = R[j];\n      j++;\n      k++;\n    }\n  }\n\n  // Main function that sorts arr[l..r] using merge()\n  void sort(int arr[], int l, int r) {\n    if (l < r) {\n      // Find the middle point\n      int m = l + (r - l) / 2;\n\n      // Sort first and second halves\n      sort(arr, l, m);\n      sort(arr, m + 1, r);\n\n      // Merge the sorted halves\n      merge(arr, l, m, r);\n    }\n  }\n\n  // Driver code\n  public static void main(String args[]) {\n    int arr[] = { 12, 11, 13, 5, 6, 7 };\n\n    System.out.println("Given array is:");\n    printArray(arr);\n\n    MergeSort ob = new MergeSort();\n    ob.sort(arr, 0, arr.length - 1);\n\n    System.out.println("\\nSorted array is:");\n    printArray(arr);\n  }\n\n  // A utility function to print array of size n\n  static void printArray(int arr[]) {\n    int n = arr.length;\n    for (int i = 0; i < n; ++i)\n      System.out.print(arr[i] + " ");\n    System.out.println();\n  }\n}\n'})]})]})},ax=Gn.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,ox=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,sx=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,lx=Gn.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,dx=Gn.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,cx=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
  justify-content: center;
  align-items: flex-end;
  min-height: 200px;
`,ux=Gn(Zu.div)`
  width: 40px;
  height: ${e=>e.height}px;
  background: ${e=>e.sorted?"var(--secondary)":e.pivot?"#ff5722":e.comparing?"var(--primary)":e.swapping?"#9c27b0":e.partitioning?"#2196f3":"var(--primary-light)"};
  border-radius: 4px 4px 0 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 5px;
  color: white;
  font-weight: 600;
  font-size: 0.8rem;
`,hx=Gn.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  font-size: 0.8rem;
  color: var(--text-secondary);
`,px=Gn.div`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: ${e=>e.color||"#ddd"};
  color: white;
  border-radius: 4px;
  margin: 0 0.5rem;
`,mx=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,fx=Gn.button`
  padding: 0.5rem 1.5rem;
  border-radius: var(--border-radius);
  background: var(--primary);
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`,gx=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,vx=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,xx=Gn.input`
  width: 100px;
`,yx=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,bx=Gn.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,wx=Gn.button`
  padding: 0.5rem 1rem;
  background: ${e=>e.active?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"#e0e0e0"};
  }
`,jx=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,Sx=Gn.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,kx=Gn.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,Cx=Gn.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,Tx=Gn.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,Ex=Gn.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,$x=()=>{const[t,r]=(0,e.useState)([]),[n,i]=(0,e.useState)(!1),[a,o]=(0,e.useState)(!1),[s,l]=(0,e.useState)(-1),[d,c]=(0,e.useState)([]),[u,h]=(0,e.useState)([]),[p,m]=(0,e.useState)([]),[f,g]=(0,e.useState)([]),[v,x]=(0,e.useState)(10),[y,b]=(0,e.useState)(500),[w,j]=(0,e.useState)("visualization"),[S,k]=(0,e.useState)("");(0,e.useEffect)((()=>{C()}),[v]);const C=()=>{const e=[];for(let t=0;t<v;t++)e.push(Math.floor(100*Math.random())+5);r(e),o(!1),g([])},T=e=>new Promise((t=>setTimeout(t,e))),E=async(e,t,r)=>{if(t<r){k(`Partitioning array from index ${t} to ${r}`),m(Array.from({length:r-t+1},((e,r)=>t+r))),await T(y);const n=await $(e,t,r);g((e=>[...e,n])),m([]),k(`Sorting left sub-array (indices ${t} to ${n-1})`),await T(y),await E(e,t,n-1),k(`Sorting right sub-array (indices ${n+1} to ${r})`),await T(y),await E(e,n+1,r)}else t===r&&g((e=>[...e,t]));return e},$=async(e,t,n)=>{const i=e[n];l(n),k(`Selected pivot: ${i} at index ${n}`),await T(y);let a=t-1;for(let s=t;s<n;s++){if(c([s,n]),k(`Comparing ${e[s]} with pivot ${i}`),await T(y),e[s]<i&&(a++,a!==s)){h([a,s]),k(`Swapping ${e[a]} and ${e[s]}`),await T(y);const t=e[a];e[a]=e[s],e[s]=t,r([...e])}c([]),h([])}const o=a+1;if(o!==n){h([o,n]),k(`Placing pivot ${e[n]} at its correct position (index ${o})`),await T(y);const t=e[o];e[o]=e[n],e[n]=t,r([...e])}return h([]),l(o),k(`Pivot ${i} is now at its correct position (index ${o})`),await T(y),l(-1),o};return(0,Qn.jsxs)(ax,{children:[(0,Qn.jsxs)(ox,{children:[(0,Qn.jsx)(sx,{children:"Quick Sort"}),(0,Qn.jsx)(lx,{children:"Quick Sort is a highly efficient sorting algorithm that uses a divide-and-conquer strategy. It works by selecting a 'pivot' element and partitioning the array around the pivot, such that elements less than the pivot are on the left and elements greater than the pivot are on the right."})]}),(0,Qn.jsxs)(dx,{children:[(0,Qn.jsxs)(bx,{children:[(0,Qn.jsx)(wx,{active:"visualization"===w,onClick:()=>j("visualization"),children:"Visualization"}),(0,Qn.jsx)(wx,{active:"code"===w,onClick:()=>j("code"),children:"Code"})]}),"visualization"===w?(0,Qn.jsxs)(Qn.Fragment,{children:[(0,Qn.jsxs)(mx,{children:[(0,Qn.jsxs)(vx,{children:[(0,Qn.jsx)("span",{children:"Size:"}),(0,Qn.jsx)(xx,{type:"range",min:"5",max:"20",value:v,onChange:e=>x(parseInt(e.target.value)),disabled:n}),(0,Qn.jsx)("span",{children:v})]}),(0,Qn.jsxs)(gx,{children:[(0,Qn.jsx)("span",{children:"Speed:"}),(0,Qn.jsx)(xx,{type:"range",min:"100",max:"1000",step:"50",value:y,onChange:e=>b(parseInt(e.target.value)),disabled:n}),(0,Qn.jsxs)("span",{children:[y,"ms"]})]}),(0,Qn.jsx)(fx,{onClick:C,disabled:n,children:"Generate New Array"}),(0,Qn.jsx)(fx,{onClick:async()=>{if(n)return;i(!0),o(!1),g([]),k("Starting Quick Sort algorithm..."),await T(y);const e=[...t];await E(e,0,e.length-1),k("Array sorted successfully!"),i(!1),o(!0),g(Array.from(Array(t.length).keys()))},disabled:n||a,children:n?"Sorting...":"Sort"}),(0,Qn.jsx)(fx,{onClick:()=>{i(!1),o(!1),l(-1),c([]),h([]),m([]),g([]),k(""),C()},disabled:n,children:"Reset"})]}),(0,Qn.jsx)(cx,{children:t.map(((e,t)=>(0,Qn.jsx)(ux,{height:2*e,pivot:t===s,comparing:d.includes(t),swapping:u.includes(t),partitioning:p.includes(t),sorted:f.includes(t),initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.05*t},children:e},t)))}),(0,Qn.jsxs)(hx,{children:[(0,Qn.jsx)(px,{color:"#ff5722",children:"Pivot"}),(0,Qn.jsx)(px,{color:"var(--primary)",children:"Comparing"}),(0,Qn.jsx)(px,{color:"#9c27b0",children:"Swapping"}),(0,Qn.jsx)(px,{color:"#2196f3",children:"Partitioning"}),(0,Qn.jsx)(px,{color:"var(--secondary)",children:"Sorted"})]}),S&&(0,Qn.jsx)(jx,{children:S}),a&&!S&&(0,Qn.jsx)(yx,{children:"Array sorted successfully!"}),(0,Qn.jsxs)(Sx,{children:[(0,Qn.jsx)(kx,{children:"Algorithm Complexity"}),(0,Qn.jsx)("p",{children:"Quick Sort is one of the most efficient sorting algorithms and is widely used in practice."}),(0,Qn.jsxs)(Cx,{children:[(0,Qn.jsx)("thead",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(Tx,{children:"Time Complexity"}),(0,Qn.jsx)(Tx,{children:"Space Complexity"})]})}),(0,Qn.jsx)("tbody",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsxs)(Ex,{children:[(0,Qn.jsx)("div",{children:"Best Case: O(n log n)"}),(0,Qn.jsx)("div",{children:"Average Case: O(n log n)"}),(0,Qn.jsx)("div",{children:"Worst Case: O(n\xb2)"})]}),(0,Qn.jsx)(Ex,{children:"O(log n)"})]})})]})]})]}):(0,Qn.jsx)(Qh,{title:"Quick Sort Implementation (Java)",code:'\npublic class QuickSort {\n  \n  // This function takes last element as pivot,\n  // places the pivot element at its correct position in sorted array,\n  // and places all smaller elements to left of pivot and\n  // all greater elements to right of pivot\n  int partition(int arr[], int low, int high) {\n    int pivot = arr[high]; // pivot element\n    int i = (low - 1); // index of smaller element\n    \n    for (int j = low; j < high; j++) {\n      // If current element is smaller than the pivot\n      if (arr[j] < pivot) {\n        i++;\n        \n        // swap arr[i] and arr[j]\n        int temp = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n      }\n    }\n    \n    // swap arr[i+1] and arr[high] (or pivot)\n    int temp = arr[i + 1];\n    arr[i + 1] = arr[high];\n    arr[high] = temp;\n    \n    return i + 1;\n  }\n  \n  // The main function that implements QuickSort\n  // arr[] --\x3e Array to be sorted\n  // low --\x3e Starting index\n  // high --\x3e Ending index\n  void sort(int arr[], int low, int high) {\n    if (low < high) {\n      // pi is partitioning index, arr[pi] is now at right place\n      int pi = partition(arr, low, high);\n      \n      // Recursively sort elements before partition and after partition\n      sort(arr, low, pi - 1);\n      sort(arr, pi + 1, high);\n    }\n  }\n  \n  // Driver program\n  public static void main(String args[]) {\n    int arr[] = {10, 7, 8, 9, 1, 5};\n    int n = arr.length;\n    \n    System.out.println("Unsorted array:");\n    printArray(arr);\n    \n    QuickSort ob = new QuickSort();\n    ob.sort(arr, 0, n - 1);\n    \n    System.out.println("\\nSorted array:");\n    printArray(arr);\n  }\n  \n  // A utility function to print array of size n\n  static void printArray(int arr[]) {\n    int n = arr.length;\n    for (int i = 0; i < n; ++i)\n      System.out.print(arr[i] + " ");\n    System.out.println();\n  }\n}\n'})]})]})},Px=Gn.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,Ax=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,Ix=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,zx=Gn.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,Mx=Gn.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,Fx=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
  justify-content: center;
  align-items: flex-end;
  min-height: 200px;
`,Rx=Gn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  overflow-x: auto;
  min-height: 300px;
`,Ox=Gn.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
`,Nx=Gn(Zu.div)`
  width: 40px;
  height: ${e=>e.height}px;
  background: ${e=>e.sorted?"var(--secondary)":e.heapified?"#9c27b0":e.root?"#ff5722":e.comparing?"var(--primary)":e.swapping?"#2196f3":"var(--primary-light)"};
  border-radius: 4px 4px 0 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 5px;
  color: white;
  font-weight: 600;
  font-size: 0.8rem;
`,Lx=Gn(Zu.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${e=>e.sorted?"var(--secondary)":e.heapified?"#9c27b0":e.root?"#ff5722":e.comparing?"var(--primary)":e.swapping?"#2196f3":"var(--primary-light)"};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
  margin: 0 1rem;
  position: relative;
  
  // Draw lines to children
  &:before, &:after {
    content: '';
    position: absolute;
    top: 100%;
    width: 2px;
    height: ${e=>e.hasChildren?"2rem":"0"};
    background-color: #aaa;
    z-index: -1;
  }
  
  &:before {
    transform: ${e=>e.hasLeftChild?"rotate(-45deg)":"rotate(0)"};
    transform-origin: top left;
    left: 75%;
    display: ${e=>e.hasLeftChild?"block":"none"};
  }
  
  &:after {
    transform: ${e=>e.hasRightChild?"rotate(45deg)":"rotate(0)"};
    transform-origin: top right;
    right: 75%;
    display: ${e=>e.hasRightChild?"block":"none"};
  }
`,Dx=Gn.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
`,Vx=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,_x=Gn.div`
  width: 20px;
  height: 20px;
  border-radius: ${e=>e.circle?"50%":"4px 4px 0 0"};
  background: ${e=>e.color||"#ddd"};
`,Bx=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,Ux=Gn.button`
  padding: 0.5rem 1.5rem;
  border-radius: var(--border-radius);
  background: var(--primary);
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`,Hx=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Wx=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,qx=Gn.input`
  width: 100px;
`,Kx=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,Gx=Gn.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,Yx=Gn.button`
  padding: 0.5rem 1rem;
  background: ${e=>e.active?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"#e0e0e0"};
  }
`,Xx=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,Qx=Gn.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,Jx=Gn.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,Zx=Gn.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,ey=Gn.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,ty=Gn.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,ry=()=>{const[t,r]=(0,e.useState)([]),[n,i]=(0,e.useState)(!1),[a,o]=(0,e.useState)(!1),[s,l]=(0,e.useState)([]),[d,c]=(0,e.useState)([]),[u,h]=(0,e.useState)([]),[p,m]=(0,e.useState)(-1),[f,g]=(0,e.useState)([]),[v,x]=(0,e.useState)(10),[y,b]=(0,e.useState)(500),[w,j]=(0,e.useState)("visualization"),[S,k]=(0,e.useState)(""),[C,T]=(0,e.useState)(!0);(0,e.useEffect)((()=>{E()}),[v]);const E=()=>{const e=[];for(let t=0;t<v;t++)e.push(Math.floor(100*Math.random())+5);r(e),o(!1),g([]),h([])},$=e=>new Promise((t=>setTimeout(t,e))),P=async(e,t,n)=>{let i=n;const a=2*n+1,o=2*n+2;m(n),await $(y/2),a<t&&(l([i,a]),k(`Comparing ${e[i]} with its left child ${e[a]}`),await $(y/2),e[a]>e[i]?(k(`Left child ${e[a]} is larger than root ${e[i]}`),i=a):k(`Root ${e[i]} is larger than left child ${e[a]}`),l([]),await $(y/2)),o<t&&(l([i,o]),k(`Comparing ${e[i]} with its right child ${e[o]}`),await $(y/2),e[o]>e[i]?(k(`Right child ${e[o]} is larger than current largest ${e[i]}`),i=o):k(`Current largest ${e[i]} is larger than right child ${e[o]}`),l([]),await $(y/2)),i!==n?(c([n,i]),k(`${e[i]} is larger than ${e[n]}. Swapping them.`),await $(y),[e[n],e[i]]=[e[i],e[n]],r([...e]),c([]),m(-1),await P(e,t,i)):(u.includes(n)||h((e=>[...e,n])),k(`Subtree at index ${n} is already a heap`),await $(y/2)),m(-1)};return(0,Qn.jsxs)(Px,{children:[(0,Qn.jsxs)(Ax,{children:[(0,Qn.jsx)(Ix,{children:"Heap Sort"}),(0,Qn.jsx)(zx,{children:"Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. It divides the input into a sorted and an unsorted region, and iteratively shrinks the unsorted region by extracting the largest element and inserting it into the sorted region."})]}),(0,Qn.jsxs)(Mx,{children:[(0,Qn.jsxs)(Gx,{children:[(0,Qn.jsx)(Yx,{active:"visualization"===w,onClick:()=>j("visualization"),children:"Visualization"}),(0,Qn.jsx)(Yx,{active:"code"===w,onClick:()=>j("code"),children:"Code"})]}),"visualization"===w?(0,Qn.jsxs)(Qn.Fragment,{children:[(0,Qn.jsxs)(Bx,{children:[(0,Qn.jsxs)(Wx,{children:[(0,Qn.jsx)("span",{children:"Size:"}),(0,Qn.jsx)(qx,{type:"range",min:"5",max:"15",value:v,onChange:e=>x(parseInt(e.target.value)),disabled:n}),(0,Qn.jsx)("span",{children:v})]}),(0,Qn.jsxs)(Hx,{children:[(0,Qn.jsx)("span",{children:"Speed:"}),(0,Qn.jsx)(qx,{type:"range",min:"100",max:"1000",step:"50",value:y,onChange:e=>b(parseInt(e.target.value)),disabled:n}),(0,Qn.jsxs)("span",{children:[y,"ms"]})]}),(0,Qn.jsx)(Ux,{onClick:E,disabled:n,children:"Generate New Array"}),(0,Qn.jsx)(Ux,{onClick:async()=>{if(n)return;i(!0),o(!1),g([]),h([]),k("Starting Heap Sort algorithm..."),await $(y);const e=t.length,a=[...t];k("Phase 1: Building the heap (heapify from bottom up)"),await $(y);for(let t=Math.floor(e/2)-1;t>=0;t--)await P(a,e,t);h(Array.from(Array(e).keys())),k("Max heap built successfully. Root contains the largest element."),await $(y),k("Phase 2: Extracting elements from heap"),await $(y);for(let t=e-1;t>0;t--)m(0),c([0,t]),k(`Swapping root (${a[0]}) with last unsorted element (${a[t]})`),await $(y),[a[0],a[t]]=[a[t],a[0]],r([...a]),g((e=>[...e,t])),c([]),m(-1),await P(a,t,0),k(`Element ${a[t]} placed in its final sorted position`),await $(y/2);g((e=>[...e,0])),h([]),k("Array sorted successfully!"),i(!1),o(!0)},disabled:n||a,children:n?"Sorting...":"Sort"}),(0,Qn.jsx)(Ux,{onClick:()=>{i(!1),o(!1),l([]),c([]),h([]),m(-1),g([]),k(""),E()},disabled:n,children:"Reset"}),(0,Qn.jsx)(Ux,{onClick:()=>T(!C),disabled:n,children:C?"Show Heap Tree":"Show Array"})]}),(0,Qn.jsxs)(Dx,{children:[(0,Qn.jsxs)(Vx,{children:[(0,Qn.jsx)(_x,{circle:!0,color:"#ff5722"}),(0,Qn.jsx)("span",{children:"Current Root"})]}),(0,Qn.jsxs)(Vx,{children:[(0,Qn.jsx)(_x,{circle:!0,color:"var(--primary)"}),(0,Qn.jsx)("span",{children:"Comparing"})]}),(0,Qn.jsxs)(Vx,{children:[(0,Qn.jsx)(_x,{circle:!0,color:"#2196f3"}),(0,Qn.jsx)("span",{children:"Swapping"})]}),(0,Qn.jsxs)(Vx,{children:[(0,Qn.jsx)(_x,{circle:!0,color:"#9c27b0"}),(0,Qn.jsx)("span",{children:"Heapified"})]}),(0,Qn.jsxs)(Vx,{children:[(0,Qn.jsx)(_x,{circle:!0,color:"var(--secondary)"}),(0,Qn.jsx)("span",{children:"Sorted"})]})]}),S&&(0,Qn.jsx)(Xx,{children:S}),C?(0,Qn.jsx)(Fx,{children:t.map(((e,t)=>(0,Qn.jsx)(Nx,{height:2*e,root:t===p,comparing:s.includes(t),swapping:d.includes(t),heapified:u.includes(t),sorted:f.includes(t),initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.05*t},children:e},t)))}):(0,Qn.jsx)(Rx,{children:(()=>{if(0===t.length)return null;const e=Math.floor(Math.log2(t.length))+1,r=[];let n=0;for(let i=0;i<e;i++){const e=Math.min(Math.pow(2,i),t.length-Math.pow(2,i)+1),a=[];for(let r=0;r<e&&n<t.length;r++){const e=t[n],r=2*n+1<t.length,i=2*n+2<t.length;a.push((0,Qn.jsx)(Lx,{hasChildren:r||i,hasLeftChild:r,hasRightChild:i,root:n===p,comparing:s.includes(n),swapping:d.includes(n),heapified:u.includes(n),sorted:f.includes(n),initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.3},children:e},n)),n++}r.push((0,Qn.jsx)(Ox,{style:{justifyContent:"center"},children:a},i))}return r})()}),a&&!S&&(0,Qn.jsx)(Kx,{children:"Array sorted successfully!"}),(0,Qn.jsxs)(Qx,{children:[(0,Qn.jsx)(Jx,{children:"Algorithm Complexity"}),(0,Qn.jsx)("p",{children:"Heap Sort is one of the most efficient sorting algorithms with good average and worst-case complexity."}),(0,Qn.jsxs)(Zx,{children:[(0,Qn.jsx)("thead",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(ey,{children:"Time Complexity"}),(0,Qn.jsx)(ey,{children:"Space Complexity"})]})}),(0,Qn.jsx)("tbody",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsxs)(ty,{children:[(0,Qn.jsx)("div",{children:"Best Case: O(n log n)"}),(0,Qn.jsx)("div",{children:"Average Case: O(n log n)"}),(0,Qn.jsx)("div",{children:"Worst Case: O(n log n)"})]}),(0,Qn.jsx)(ty,{children:"O(1) - In-place sorting algorithm"})]})})]}),(0,Qn.jsxs)("div",{style:{marginTop:"1rem"},children:[(0,Qn.jsx)("p",{children:"Key characteristics of Heap Sort:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Not stable (relative order of equal elements may change)"}),(0,Qn.jsx)("li",{children:"In-place (requires constant extra space)"}),(0,Qn.jsx)("li",{children:"Based on the binary heap data structure"}),(0,Qn.jsx)("li",{children:"Consists of two phases: building the heap and extracting elements"}),(0,Qn.jsx)("li",{children:"Better than Selection Sort and comparable to Merge Sort and Quick Sort"})]})]})]})]}):(0,Qn.jsx)(Qh,{title:"Heap Sort Implementation (Java)",code:'\npublic class HeapSort {\n  public void sort(int arr[]) {\n    int n = arr.length;\n\n    // Build heap (rearrange array)\n    for (int i = n / 2 - 1; i >= 0; i--)\n      heapify(arr, n, i);\n\n    // One by one extract an element from heap\n    for (int i = n - 1; i > 0; i--) {\n      // Move current root to end\n      int temp = arr[0];\n      arr[0] = arr[i];\n      arr[i] = temp;\n\n      // call max heapify on the reduced heap\n      heapify(arr, i, 0);\n    }\n  }\n\n  // To heapify a subtree rooted with node i which is\n  // an index in arr[]. n is size of heap\n  void heapify(int arr[], int n, int i) {\n    int largest = i; // Initialize largest as root\n    int l = 2 * i + 1; // left = 2*i + 1\n    int r = 2 * i + 2; // right = 2*i + 2\n\n    // If left child is larger than root\n    if (l < n && arr[l] > arr[largest])\n      largest = l;\n\n    // If right child is larger than largest so far\n    if (r < n && arr[r] > arr[largest])\n      largest = r;\n\n    // If largest is not root\n    if (largest != i) {\n      int swap = arr[i];\n      arr[i] = arr[largest];\n      arr[largest] = swap;\n\n      // Recursively heapify the affected sub-tree\n      heapify(arr, n, largest);\n    }\n  }\n\n  // A utility function to print array of size n\n  static void printArray(int arr[]) {\n    int n = arr.length;\n    for (int i = 0; i < n; ++i)\n      System.out.print(arr[i] + " ");\n    System.out.println();\n  }\n\n  // Driver program\n  public static void main(String args[]) {\n    int arr[] = { 12, 11, 13, 5, 6, 7 };\n    \n    HeapSort ob = new HeapSort();\n    ob.sort(arr);\n\n    System.out.println("Sorted array is");\n    printArray(arr);\n  }\n}\n'})]})]})},ny=Gn.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,iy=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,ay=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,oy=Gn.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,sy=Gn.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,ly=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
  justify-content: center;
`,dy=Gn(Zu.div)`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${e=>e.found?"var(--secondary)":e.current?"var(--primary)":e.range?"var(--primary-light)":"#f0f0f0"};
  color: ${e=>e.found||e.current||e.range?"white":"var(--text-primary)"};
  font-weight: 600;
  position: relative;
`,cy=Gn.span`
  position: absolute;
  top: -25px;
  font-size: 0.75rem;
  color: var(--text-secondary);
`,uy=Gn.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  padding: 0 1rem;
`,hy=Gn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  span {
    font-size: 0.8rem;
    color: var(--text-secondary);
    margin-bottom: 0.25rem;
  }
  
  div {
    background: ${e=>e.color||"var(--primary)"};
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    font-weight: 600;
  }
`,py=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,my=Gn.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 80px;
`,fy=Gn.button`
  padding: 0.5rem 1.5rem;
  border-radius: var(--border-radius);
  background: var(--primary);
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`,gy=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,vy=Gn.input`
  width: 100px;
`,xy=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: ${e=>e.error?"#ffebee":"#e8f5e9"};
  color: ${e=>e.error?"#d32f2f":"#2e7d32"};
  border-radius: var(--border-radius);
  text-align: center;
`,yy=Gn.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,by=Gn.button`
  padding: 0.5rem 1rem;
  background: ${e=>e.active?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"#e0e0e0"};
  }
`,wy=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,jy=Gn.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,Sy=Gn.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,ky=Gn.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,Cy=Gn.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,Ty=Gn.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,Ey=()=>{const[t,r]=(0,e.useState)([]),[n,i]=(0,e.useState)(""),[a,o]=(0,e.useState)(!1),[s,l]=(0,e.useState)(!1),[d,c]=(0,e.useState)(-1),[u,h]=(0,e.useState)(-1),[p,m]=(0,e.useState)([]),[f,g]=(0,e.useState)(""),[v,x]=(0,e.useState)(!1),[y,b]=(0,e.useState)(-1),[w,j]=(0,e.useState)(-1),[S,k]=(0,e.useState)(-1),[C,T]=(0,e.useState)(""),[E,$]=(0,e.useState)(1e3),[P,A]=(0,e.useState)("visualization");(0,e.useEffect)((()=>{I()}),[]);const I=()=>{const e=Array.from({length:15},((e,t)=>3*t+Math.floor(3*Math.random())));r(e),z()},z=()=>{i(""),o(!1),l(!1),c(-1),h(-1),m([]),g(""),x(!1),b(-1),j(-1),k(-1),T("")},M=e=>new Promise((t=>setTimeout(t,e)));return(0,Qn.jsxs)(ny,{children:[(0,Qn.jsxs)(iy,{children:[(0,Qn.jsx)(ay,{children:"Binary Search"}),(0,Qn.jsx)(oy,{children:"Binary Search is a searching algorithm for finding an element's position in a sorted array. It works by repeatedly dividing the search interval in half."})]}),(0,Qn.jsxs)(sy,{children:[(0,Qn.jsxs)(yy,{children:[(0,Qn.jsx)(by,{active:"visualization"===P,onClick:()=>A("visualization"),children:"Visualization"}),(0,Qn.jsx)(by,{active:"code"===P,onClick:()=>A("code"),children:"Code"})]}),"visualization"===P?(0,Qn.jsxs)(Qn.Fragment,{children:[(0,Qn.jsxs)(py,{children:[(0,Qn.jsxs)(gy,{children:[(0,Qn.jsx)("span",{children:"Speed:"}),(0,Qn.jsx)(vy,{type:"range",min:"500",max:"2000",step:"100",value:E,onChange:e=>$(parseInt(e.target.value)),disabled:a}),(0,Qn.jsxs)("span",{children:[E,"ms"]})]}),(0,Qn.jsx)("div",{children:(0,Qn.jsx)(my,{type:"number",placeholder:"Search value",value:n,onChange:e=>i(e.target.value),disabled:a})}),(0,Qn.jsx)(fy,{onClick:async()=>{const e=parseInt(n);if(isNaN(e))return x(!0),void g("Please enter a valid number");x(!1),o(!0),l(!1),c(-1),g("Searching...");let r=0,i=t.length-1;for(b(r),j(i),m([...Array(t.length).keys()]),T(`Initializing search for ${e} in the array`),await M(E);r<=i;){const n=Math.floor(r+(i-r)/2);k(n),h(n);const a=[];for(let e=r;e<=i;e++)a.push(e);if(m(a),T(`Comparing ${e} with element at index ${n} (value ${t[n]})`),await M(E),t[n]===e){c(n),l(!0),g(`Found ${e} at index ${n}`),T(`Found ${e} at index ${n}!`);break}t[n]<e?(r=n+1,b(r),T(`${t[n]} < ${e}, so we move to the right half`)):(i=n-1,j(i),T(`${t[n]} > ${e}, so we move to the left half`)),await M(E),r>i&&(g(`${e} not found in the array`),x(!0),T(`${e} is not present in the array`))}o(!1)},disabled:a||""===n,children:"Search"}),(0,Qn.jsx)(fy,{onClick:I,disabled:a,children:"Generate New Array"}),(0,Qn.jsx)(fy,{onClick:z,disabled:a,children:"Reset"})]}),(0,Qn.jsxs)(uy,{children:[y>=0&&(0,Qn.jsxs)(hy,{color:"var(--primary-light)",children:[(0,Qn.jsx)("span",{children:"Left"}),(0,Qn.jsx)("div",{children:y})]}),S>=0&&(0,Qn.jsxs)(hy,{color:"var(--primary)",children:[(0,Qn.jsx)("span",{children:"Mid"}),(0,Qn.jsx)("div",{children:S})]}),w>=0&&(0,Qn.jsxs)(hy,{color:"var(--primary-light)",children:[(0,Qn.jsx)("span",{children:"Right"}),(0,Qn.jsx)("div",{children:w})]})]}),(0,Qn.jsx)(ly,{children:t.map(((e,t)=>(0,Qn.jsxs)(dy,{current:t===u,found:t===d&&s,range:p.includes(t),initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.05*t},children:[(0,Qn.jsx)(cy,{children:t}),e]},t)))}),C&&(0,Qn.jsx)(wy,{children:C}),f&&(0,Qn.jsx)(xy,{error:v,children:f}),(0,Qn.jsxs)(jy,{children:[(0,Qn.jsx)(Sy,{children:"Algorithm Complexity"}),(0,Qn.jsx)("p",{children:"Binary Search is much more efficient than linear search for large datasets."}),(0,Qn.jsxs)(ky,{children:[(0,Qn.jsx)("thead",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(Cy,{children:"Time Complexity"}),(0,Qn.jsx)(Cy,{children:"Space Complexity"})]})}),(0,Qn.jsx)("tbody",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsxs)(Ty,{children:[(0,Qn.jsx)("div",{children:"Best Case: O(1)"}),(0,Qn.jsx)("div",{children:"Average Case: O(log n)"}),(0,Qn.jsx)("div",{children:"Worst Case: O(log n)"})]}),(0,Qn.jsx)(Ty,{children:"O(1)"})]})})]})]})]}):(0,Qn.jsx)(Qh,{title:"Binary Search Implementation (Java)",code:'\npublic class BinarySearch {\n  // Returns index of x if it is present in arr[],\n  // else return -1\n  public static int binarySearch(int[] arr, int x) {\n    int left = 0, right = arr.length - 1;\n    \n    while (left <= right) {\n      int mid = left + (right - left) / 2;\n      \n      // Check if x is present at mid\n      if (arr[mid] == x)\n        return mid;\n      \n      // If x greater, ignore left half\n      if (arr[mid] < x)\n        left = mid + 1;\n      \n      // If x is smaller, ignore right half\n      else\n        right = mid - 1;\n    }\n    \n    // If we reach here, element was not present\n    return -1;\n  }\n  \n  // Driver method to test the algorithm\n  public static void main(String[] args) {\n    int[] arr = {2, 3, 4, 10, 40};\n    int x = 10;\n    \n    int result = binarySearch(arr, x);\n    \n    if (result == -1)\n      System.out.println("Element not present");\n    else\n      System.out.println("Element found at index " + result);\n  }\n}\n'})]})]})},$y=Gn.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,Py=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,Ay=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,Iy=Gn.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,zy=Gn.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,My=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
  justify-content: center;
`,Fy=Gn(Zu.div)`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${e=>e.found?"var(--secondary)":e.current?"var(--primary)":e.visited?"var(--primary-light)":"#f0f0f0"};
  color: ${e=>e.found||e.current||e.visited?"white":"var(--text-primary)"};
  font-weight: 600;
  position: relative;
`,Ry=Gn.span`
  position: absolute;
  top: -25px;
  font-size: 0.75rem;
  color: var(--text-secondary);
`,Oy=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,Ny=Gn.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 80px;
`,Ly=Gn.button`
  padding: 0.5rem 1.5rem;
  border-radius: var(--border-radius);
  background: var(--primary);
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`,Dy=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Vy=Gn.input`
  width: 100px;
`,_y=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: ${e=>e.error?"#ffebee":"#e8f5e9"};
  color: ${e=>e.error?"#d32f2f":"#2e7d32"};
  border-radius: var(--border-radius);
  text-align: center;
`,By=Gn.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,Uy=Gn.button`
  padding: 0.5rem 1rem;
  background: ${e=>e.active?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"#e0e0e0"};
  }
`,Hy=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,Wy=Gn.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,qy=Gn.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,Ky=Gn.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,Gy=Gn.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,Yy=Gn.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,Xy=()=>{const[t,r]=(0,e.useState)([]),[n,i]=(0,e.useState)(""),[a,o]=(0,e.useState)(!1),[s,l]=(0,e.useState)(!1),[d,c]=(0,e.useState)(-1),[u,h]=(0,e.useState)(-1),[p,m]=(0,e.useState)([]),[f,g]=(0,e.useState)(""),[v,x]=(0,e.useState)(!1),[y,b]=(0,e.useState)(""),[w,j]=(0,e.useState)(500),[S,k]=(0,e.useState)("visualization");(0,e.useEffect)((()=>{C()}),[]);const C=()=>{const e=Array.from({length:15},(()=>Math.floor(100*Math.random())+1));r(e),T()},T=()=>{i(""),o(!1),l(!1),c(-1),h(-1),m([]),g(""),x(!1),b("")},E=e=>new Promise((t=>setTimeout(t,e)));return(0,Qn.jsxs)($y,{children:[(0,Qn.jsxs)(Py,{children:[(0,Qn.jsx)(Ay,{children:"Linear Search"}),(0,Qn.jsx)(Iy,{children:"Linear Search is the simplest search algorithm that searches for an element in a list by checking each element sequentially until a match is found or the whole list has been searched."})]}),(0,Qn.jsxs)(zy,{children:[(0,Qn.jsxs)(By,{children:[(0,Qn.jsx)(Uy,{active:"visualization"===S,onClick:()=>k("visualization"),children:"Visualization"}),(0,Qn.jsx)(Uy,{active:"code"===S,onClick:()=>k("code"),children:"Code"})]}),"visualization"===S?(0,Qn.jsxs)(Qn.Fragment,{children:[(0,Qn.jsxs)(Oy,{children:[(0,Qn.jsxs)(Dy,{children:[(0,Qn.jsx)("span",{children:"Speed:"}),(0,Qn.jsx)(Vy,{type:"range",min:"100",max:"1000",step:"50",value:w,onChange:e=>j(parseInt(e.target.value)),disabled:a}),(0,Qn.jsxs)("span",{children:[w,"ms"]})]}),(0,Qn.jsx)("div",{children:(0,Qn.jsx)(Ny,{type:"number",placeholder:"Search value",value:n,onChange:e=>i(e.target.value),disabled:a})}),(0,Qn.jsx)(Ly,{onClick:async()=>{const e=parseInt(n);if(isNaN(e))return x(!0),void g("Please enter a valid number");x(!1),o(!0),l(!1),c(-1),m([]),g("Searching..."),b(`Starting linear search for value ${e}`);for(let r=0;r<t.length;r++){if(h(r),m((e=>[...e,r])),b(`Checking if ${t[r]} equals ${e} at index ${r}`),await E(w),t[r]===e){c(r),l(!0),g(`Found ${e} at index ${r}`),b(`Found ${e} at index ${r}!`);break}r===t.length-1&&(x(!0),g(`${e} not found in the array`),b(`${e} is not present in the array`))}o(!1),h(-1)},disabled:a||""===n,children:"Search"}),(0,Qn.jsx)(Ly,{onClick:C,disabled:a,children:"Generate New Array"}),(0,Qn.jsx)(Ly,{onClick:T,disabled:a,children:"Reset"})]}),(0,Qn.jsx)(My,{children:t.map(((e,t)=>(0,Qn.jsxs)(Fy,{current:t===u,found:t===d&&s,visited:p.includes(t)&&t!==u&&t!==d,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.05*t},children:[(0,Qn.jsx)(Ry,{children:t}),e]},t)))}),y&&(0,Qn.jsx)(Hy,{children:y}),f&&(0,Qn.jsx)(_y,{error:v,children:f}),(0,Qn.jsxs)(Wy,{children:[(0,Qn.jsx)(qy,{children:"Algorithm Complexity"}),(0,Qn.jsx)("p",{children:"Linear search is simple but inefficient for large datasets compared to other search algorithms."}),(0,Qn.jsxs)(Ky,{children:[(0,Qn.jsx)("thead",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(Gy,{children:"Time Complexity"}),(0,Qn.jsx)(Gy,{children:"Space Complexity"})]})}),(0,Qn.jsx)("tbody",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsxs)(Yy,{children:[(0,Qn.jsx)("div",{children:"Best Case: O(1)"}),(0,Qn.jsx)("div",{children:"Average Case: O(n)"}),(0,Qn.jsx)("div",{children:"Worst Case: O(n)"})]}),(0,Qn.jsx)(Yy,{children:"O(1)"})]})})]})]})]}):(0,Qn.jsx)(Qh,{title:"Linear Search Implementation (Java)",code:'\npublic class LinearSearch {\n  // Returns index of x if it is present in arr[],\n  // else return -1\n  public static int linearSearch(int[] arr, int x) {\n    // Time complexity: O(n)\n    for (int i = 0; i < arr.length; i++) {\n      if (arr[i] == x) {\n        return i; // Element found, return index\n      }\n    }\n    \n    // Element not found\n    return -1;\n  }\n  \n  // Driver method to test the algorithm\n  public static void main(String[] args) {\n    int[] arr = {10, 20, 80, 30, 60, 50, 110, 100, 130, 170};\n    int x = 110;\n    \n    int result = linearSearch(arr, x);\n    \n    if (result == -1)\n      System.out.println("Element not present in array");\n    else\n      System.out.println("Element found at index " + result);\n  }\n}\n'})]})]})},Qy=Gn.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,Jy=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,Zy=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,eb=Gn.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,tb=Gn.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,rb=Gn.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin: 2rem 0;
  border: 1px solid #eee;
  border-radius: var(--border-radius);
  overflow: hidden;
`,nb=Gn(Zu.div)`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${e=>e.start?"#4caf50":e.current?"var(--primary)":e.visited?"var(--secondary)":e.inQueue?"#ff9800":"#f0f0f0"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: ${e=>e.start||e.current||e.visited||e.inQueue?"white":"var(--text-primary)"};
  cursor: pointer;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 2;
`,ib=Gn.div`
  position: absolute;
  background: ${e=>e.visited?"var(--secondary)":"#ddd"};
  transform-origin: 0 0;
  height: 2px;
  z-index: 1;
`,ab=Gn.div`
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: var(--border-radius);
  overflow-x: auto;
`,ob=Gn.div`
  padding: 0.5rem 1rem;
  background: ${e=>e.current?"var(--primary)":"#ff9800"};
  color: white;
  border-radius: var(--border-radius);
  min-width: 40px;
  text-align: center;
  font-weight: 600;
`,sb=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,lb=Gn.button`
  padding: 0.5rem 1.5rem;
  border-radius: var(--border-radius);
  background: var(--primary);
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`,db=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,cb=Gn.input`
  width: 100px;
`,ub=Gn.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 60px;
`,hb=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,pb=Gn.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,mb=Gn.button`
  padding: 0.5rem 1rem;
  background: ${e=>e.active?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"#e0e0e0"};
  }
`,fb=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,gb=Gn.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,vb=Gn.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,xb=Gn.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,yb=Gn.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,bb=Gn.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,wb=Gn.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
`,jb=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Sb=Gn.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${e=>e.color||"#ddd"};
`,kb=()=>{const[t,r]=(0,e.useState)([]),[n,i]=(0,e.useState)([]),[a,o]=(0,e.useState)(null),[s,l]=(0,e.useState)([]),[d,c]=(0,e.useState)([]),[u,h]=(0,e.useState)(null),[p,m]=(0,e.useState)(!1),[f,g]=(0,e.useState)(!1),[v,x]=(0,e.useState)(null),[y,b]=(0,e.useState)([]),[w,j]=(0,e.useState)(500),[S,k]=(0,e.useState)(8),[C,T]=(0,e.useState)("visualization"),[E,$]=(0,e.useState)(""),P=(0,e.useRef)(null);(0,e.useEffect)((()=>{I()}),[S]);const A=e=>new Promise((t=>setTimeout(t,e))),I=()=>{const e=P.current?P.current.offsetWidth:800,t=P.current?P.current.offsetHeight:400,n=[];for(let r=0;r<S;r++){const i=60;n.push({id:r,x:Math.random()*(e-2*i)+i,y:Math.random()*(t-2*i)+i})}const a=[];for(let r=0;r<S;r++){const e=Math.floor(3*Math.random())+1,t=new Set;for(let n=0;n<e;n++){let e;do{e=Math.floor(Math.random()*S)}while(e===r||t.has(e));t.add(e),a.push({id:`${r}-${e}`,source:r,target:e})}}r(n),i(a),l([]),c([]),h(null),b([]),o(null),x(null),g(!1),$("")};return(0,Qn.jsxs)(Qy,{children:[(0,Qn.jsxs)(Jy,{children:[(0,Qn.jsx)(Zy,{children:"Breadth First Search (BFS)"}),(0,Qn.jsx)(eb,{children:"Breadth First Search is a graph traversal algorithm that explores all the vertices of a graph at the present depth prior to moving on to vertices at the next depth level. It uses a queue data structure for traversal."})]}),(0,Qn.jsxs)(tb,{children:[(0,Qn.jsxs)(pb,{children:[(0,Qn.jsx)(mb,{active:"visualization"===C,onClick:()=>T("visualization"),children:"Visualization"}),(0,Qn.jsx)(mb,{active:"code"===C,onClick:()=>T("code"),children:"Code"})]}),"visualization"===C?(0,Qn.jsxs)(Qn.Fragment,{children:[(0,Qn.jsxs)(sb,{children:[(0,Qn.jsxs)("div",{children:[(0,Qn.jsx)("label",{children:"Nodes: "}),(0,Qn.jsx)(ub,{type:"number",min:"4",max:"15",value:S,onChange:e=>k(parseInt(e.target.value)),disabled:p})]}),(0,Qn.jsxs)(db,{children:[(0,Qn.jsx)("span",{children:"Speed:"}),(0,Qn.jsx)(cb,{type:"range",min:"100",max:"1000",step:"50",value:w,onChange:e=>j(parseInt(e.target.value)),disabled:p}),(0,Qn.jsxs)("span",{children:[w,"ms"]})]}),(0,Qn.jsx)(lb,{onClick:I,disabled:p,children:"Generate New Graph"}),(0,Qn.jsx)(lb,{onClick:async()=>{if(!a||p)return;m(!0),g(!1),l([]),c([]),h(null),b([]);const e=new Set,t=[a];for(e.add(a),c([a]),$(`Starting BFS from node ${a}`),await A(w);t.length>0;){const r=t.shift();h(r),c(t.slice()),$(`Processing node ${r}`),await A(w);const i=n.filter((e=>e.source===r)).map((e=>e.target));for(const n of i){const i=`${r}-${n}`;e.has(n)?($(`Neighbor ${n} already visited, skipping`),await A(w/2)):(e.add(n),t.push(n),c([...t]),b((e=>[...e,i])),$(`Found unvisited neighbor: ${n}, adding to queue`),await A(w))}l(Array.from(e)),$(`Completed processing node ${r}`),await A(w)}h(null),$("BFS traversal complete!"),g(!0),m(!1)},disabled:p||null===a,children:p?"Searching...":"Start BFS"}),(0,Qn.jsx)(lb,{onClick:()=>{l([]),c([]),h(null),b([]),g(!1),$("")},disabled:p||0===s.length&&0===d.length,children:"Reset"})]}),(0,Qn.jsxs)(wb,{children:[(0,Qn.jsxs)(jb,{children:[(0,Qn.jsx)(Sb,{color:"#4caf50"}),(0,Qn.jsx)("span",{children:"Start Node"})]}),(0,Qn.jsxs)(jb,{children:[(0,Qn.jsx)(Sb,{color:"var(--primary)"}),(0,Qn.jsx)("span",{children:"Current Node"})]}),(0,Qn.jsxs)(jb,{children:[(0,Qn.jsx)(Sb,{color:"#ff9800"}),(0,Qn.jsx)("span",{children:"In Queue"})]}),(0,Qn.jsxs)(jb,{children:[(0,Qn.jsx)(Sb,{color:"var(--secondary)"}),(0,Qn.jsx)("span",{children:"Visited"})]}),(0,Qn.jsxs)(jb,{children:[(0,Qn.jsx)(Sb,{color:"#f0f0f0"}),(0,Qn.jsx)("span",{children:"Unvisited"})]})]}),null===a&&!p&&(0,Qn.jsx)(hb,{children:"Select a starting node by clicking on it"}),(0,Qn.jsx)(fb,{children:E||"Click on a node to select it as the starting point for BFS"}),(0,Qn.jsxs)(rb,{ref:P,children:[n.map((e=>{const r=t.find((t=>t.id===e.source)),n=t.find((t=>t.id===e.target));if(!r||!n)return null;const i=n.x-r.x,a=n.y-r.y,o=Math.atan2(a,i)*(180/Math.PI),s=Math.sqrt(i*i+a*a);return(0,Qn.jsx)(ib,{style:{top:`${r.y}px`,left:`${r.x}px`,width:`${s}px`,transform:`rotate(${o}deg)`},visited:y.includes(e.id)},e.id)})),t.map((e=>(0,Qn.jsx)(nb,{style:{top:`${e.y}px`,left:`${e.x}px`},start:e.id===a,current:e.id===u,visited:s.includes(e.id),inQueue:d.includes(e.id),onClick:()=>{return t=e.id,void(p||(a===t?(o(null),x(null)):(o(t),x(t))));var t},whileHover:{scale:1.1},whileTap:{scale:.9},children:e.id},e.id)))]}),(0,Qn.jsxs)("div",{children:[(0,Qn.jsx)("h3",{children:"Queue:"}),(0,Qn.jsx)(ab,{children:d.length>0?d.map(((e,t)=>(0,Qn.jsx)(ob,{current:0===t,children:e},`queue-${e}-${t}`))):(0,Qn.jsx)("div",{children:"Queue is empty"})})]}),f&&(0,Qn.jsxs)(hb,{children:["BFS traversal complete! Visited nodes: ",s.join(" \u2192 ")]}),(0,Qn.jsxs)(gb,{children:[(0,Qn.jsx)(vb,{children:"Algorithm Complexity"}),(0,Qn.jsx)("p",{children:"Breadth First Search traverses the graph level by level, making it ideal for finding the shortest path in unweighted graphs."}),(0,Qn.jsxs)(xb,{children:[(0,Qn.jsx)("thead",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(yb,{children:"Time Complexity"}),(0,Qn.jsx)(yb,{children:"Space Complexity"})]})}),(0,Qn.jsx)("tbody",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsxs)(bb,{children:[(0,Qn.jsx)("div",{children:"O(V + E)"}),(0,Qn.jsx)("div",{children:"where V is the number of vertices and E is the number of edges"})]}),(0,Qn.jsx)(bb,{children:"O(V)"})]})})]})]})]}):(0,Qn.jsx)(Qh,{title:"Breadth First Search Implementation (Java)",code:'\nimport java.util.*;\n\npublic class BreadthFirstSearch {\n  private int V; // No. of vertices\n  private LinkedList<Integer>[] adj; // Adjacency Lists\n  \n  // Constructor\n  BreadthFirstSearch(int v) {\n    V = v;\n    adj = new LinkedList[v];\n    for (int i = 0; i < v; ++i)\n      adj[i] = new LinkedList();\n  }\n  \n  // Function to add an edge into the graph\n  void addEdge(int v, int w) {\n    adj[v].add(w);\n  }\n  \n  // Prints BFS traversal from a given source s\n  void BFS(int s) {\n    // Mark all the vertices as not visited (By default set as false)\n    boolean visited[] = new boolean[V];\n    \n    // Create a queue for BFS\n    LinkedList<Integer> queue = new LinkedList<Integer>();\n    \n    // Mark the current node as visited and enqueue it\n    visited[s] = true;\n    queue.add(s);\n    \n    while (queue.size() != 0) {\n      // Dequeue a vertex from queue and print it\n      s = queue.poll();\n      System.out.print(s + " ");\n      \n      // Get all adjacent vertices of the dequeued vertex s\n      // If an adjacent has not been visited, then mark it visited\n      // and enqueue it\n      Iterator<Integer> i = adj[s].listIterator();\n      while (i.hasNext()) {\n        int n = i.next();\n        if (!visited[n]) {\n          visited[n] = true;\n          queue.add(n);\n        }\n      }\n    }\n  }\n  \n  // Driver method to test above functions\n  public static void main(String args[]) {\n    BreadthFirstSearch g = new BreadthFirstSearch(4);\n    \n    g.addEdge(0, 1);\n    g.addEdge(0, 2);\n    g.addEdge(1, 2);\n    g.addEdge(2, 0);\n    g.addEdge(2, 3);\n    g.addEdge(3, 3);\n    \n    System.out.println("Breadth First Traversal (starting from vertex 2):");\n    g.BFS(2);\n  }\n}\n'})]})]})},Cb=Gn.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,Tb=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,Eb=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,$b=Gn.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,Pb=Gn.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,Ab=Gn.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin: 2rem 0;
  border: 1px solid #eee;
  border-radius: var(--border-radius);
  overflow: hidden;
`,Ib=Gn(Zu.div)`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${e=>e.start?"#4caf50":e.current?"var(--primary)":e.visited?"var(--secondary)":e.inStack?"#ff9800":"#f0f0f0"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: ${e=>e.start||e.current||e.visited||e.inStack?"white":"var(--text-primary)"};
  cursor: pointer;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 2;
`,zb=Gn.div`
  position: absolute;
  background: ${e=>e.visited?"var(--secondary)":"#ddd"};
  transform-origin: 0 0;
  height: 2px;
  z-index: 1;
`,Mb=Gn.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 0.25rem;
  margin: 1rem 0;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: var(--border-radius);
  max-height: 200px;
  overflow-y: auto;
`,Fb=Gn.div`
  padding: 0.5rem 1rem;
  background: ${e=>e.current?"var(--primary)":"#ff9800"};
  color: white;
  border-radius: var(--border-radius);
  text-align: center;
  font-weight: 600;
  width: 100px;
  margin: 0 auto;
`,Rb=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,Ob=Gn.button`
  padding: 0.5rem 1.5rem;
  border-radius: var(--border-radius);
  background: var(--primary);
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`,Nb=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Lb=Gn.input`
  width: 100px;
`,Db=Gn.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 60px;
`,Vb=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,_b=Gn.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,Bb=Gn.button`
  padding: 0.5rem 1rem;
  background: ${e=>e.active?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"#e0e0e0"};
  }
`,Ub=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,Hb=Gn.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,Wb=Gn.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,qb=Gn.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,Kb=Gn.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,Gb=Gn.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,Yb=Gn.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
`,Xb=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Qb=Gn.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${e=>e.color||"#ddd"};
`,Jb=()=>{const[t,r]=(0,e.useState)([]),[n,i]=(0,e.useState)([]),[a,o]=(0,e.useState)(null),[s,l]=(0,e.useState)([]),[d,c]=(0,e.useState)([]),[u,h]=(0,e.useState)(null),[p,m]=(0,e.useState)(!1),[f,g]=(0,e.useState)(!1),[v,x]=(0,e.useState)(null),[y,b]=(0,e.useState)([]),[w,j]=(0,e.useState)(500),[S,k]=(0,e.useState)(8),[C,T]=(0,e.useState)("visualization"),[E,$]=(0,e.useState)(""),[P,A]=(0,e.useState)([]),I=(0,e.useRef)(null);(0,e.useEffect)((()=>{M()}),[S]);const z=e=>new Promise((t=>setTimeout(t,e))),M=()=>{const e=I.current?I.current.offsetWidth:800,t=I.current?I.current.offsetHeight:400,n=[];for(let r=0;r<S;r++){const i=60;n.push({id:r,x:Math.random()*(e-2*i)+i,y:Math.random()*(t-2*i)+i})}const a=[];for(let r=0;r<S;r++){const e=Math.floor(3*Math.random())+1,t=new Set;for(let n=0;n<e;n++){let e;do{e=Math.floor(Math.random()*S)}while(e===r||t.has(e));t.add(e),a.push({id:`${r}-${e}`,source:r,target:e})}}r(n),i(a),l([]),c([]),h(null),b([]),o(null),x(null),g(!1),$(""),A([])};return(0,Qn.jsxs)(Cb,{children:[(0,Qn.jsxs)(Tb,{children:[(0,Qn.jsx)(Eb,{children:"Depth First Search (DFS)"}),(0,Qn.jsx)($b,{children:"Depth First Search is a graph traversal algorithm that explores as far as possible along each branch before backtracking. It uses a stack data structure (or recursion) for traversal."})]}),(0,Qn.jsxs)(Pb,{children:[(0,Qn.jsxs)(_b,{children:[(0,Qn.jsx)(Bb,{active:"visualization"===C,onClick:()=>T("visualization"),children:"Visualization"}),(0,Qn.jsx)(Bb,{active:"code"===C,onClick:()=>T("code"),children:"Code"})]}),"visualization"===C?(0,Qn.jsxs)(Qn.Fragment,{children:[(0,Qn.jsxs)(Rb,{children:[(0,Qn.jsxs)("div",{children:[(0,Qn.jsx)("label",{children:"Nodes: "}),(0,Qn.jsx)(Db,{type:"number",min:"4",max:"15",value:S,onChange:e=>k(parseInt(e.target.value)),disabled:p})]}),(0,Qn.jsxs)(Nb,{children:[(0,Qn.jsx)("span",{children:"Speed:"}),(0,Qn.jsx)(Lb,{type:"range",min:"100",max:"1000",step:"50",value:w,onChange:e=>j(parseInt(e.target.value)),disabled:p}),(0,Qn.jsxs)("span",{children:[w,"ms"]})]}),(0,Qn.jsx)(Ob,{onClick:M,disabled:p,children:"Generate New Graph"}),(0,Qn.jsx)(Ob,{onClick:async()=>{if(!a||p)return;m(!0),g(!1),l([]),c([]),h(null),b([]),A([]);const e=new Set,t=[a],r=[];for(c([a]),$(`Starting DFS from node ${a}`),await z(w);t.length>0;){const i=t.pop();if(c([...t]),h(i),e.has(i)){$(`Node ${i} already visited, backtracking`),await z(w/2),h(null);continue}r.push(i),e.add(i),l(Array.from(e)),A([...r]),$(`Visiting node ${i}`),await z(w);const a=n.filter((e=>e.source===i)).map((e=>e.target));a.sort(((e,t)=>t-e));for(const r of a){const n=`${i}-${r}`;e.has(r)?($(`Neighbor ${r} already visited, skipping`),await z(w/2)):(t.push(r),c([...t]),b((e=>[...e,n])),$(`Found unvisited neighbor: ${r}, pushing to stack`),await z(w))}h(null)}$("DFS traversal complete!"),g(!0),m(!1)},disabled:p||null===a,children:p?"Searching...":"Start DFS"}),(0,Qn.jsx)(Ob,{onClick:()=>{l([]),c([]),h(null),b([]),g(!1),$(""),A([])},disabled:p||0===s.length&&0===d.length,children:"Reset"})]}),(0,Qn.jsxs)(Yb,{children:[(0,Qn.jsxs)(Xb,{children:[(0,Qn.jsx)(Qb,{color:"#4caf50"}),(0,Qn.jsx)("span",{children:"Start Node"})]}),(0,Qn.jsxs)(Xb,{children:[(0,Qn.jsx)(Qb,{color:"var(--primary)"}),(0,Qn.jsx)("span",{children:"Current Node"})]}),(0,Qn.jsxs)(Xb,{children:[(0,Qn.jsx)(Qb,{color:"#ff9800"}),(0,Qn.jsx)("span",{children:"In Stack"})]}),(0,Qn.jsxs)(Xb,{children:[(0,Qn.jsx)(Qb,{color:"var(--secondary)"}),(0,Qn.jsx)("span",{children:"Visited"})]}),(0,Qn.jsxs)(Xb,{children:[(0,Qn.jsx)(Qb,{color:"#f0f0f0"}),(0,Qn.jsx)("span",{children:"Unvisited"})]})]}),null===a&&!p&&(0,Qn.jsx)(Vb,{children:"Select a starting node by clicking on it"}),(0,Qn.jsx)(Ub,{children:E||"Click on a node to select it as the starting point for DFS"}),(0,Qn.jsxs)("div",{style:{display:"flex",gap:"1rem"},children:[(0,Qn.jsx)("div",{style:{flex:3},children:(0,Qn.jsxs)(Ab,{ref:I,children:[n.map((e=>{const r=t.find((t=>t.id===e.source)),n=t.find((t=>t.id===e.target));if(!r||!n)return null;const i=n.x-r.x,a=n.y-r.y,o=Math.atan2(a,i)*(180/Math.PI),s=Math.sqrt(i*i+a*a);return(0,Qn.jsx)(zb,{style:{top:`${r.y}px`,left:`${r.x}px`,width:`${s}px`,transform:`rotate(${o}deg)`},visited:y.includes(e.id)},e.id)})),t.map((e=>(0,Qn.jsx)(Ib,{style:{top:`${e.y}px`,left:`${e.x}px`},start:e.id===a,current:e.id===u,visited:s.includes(e.id),inStack:d.includes(e.id),onClick:()=>{return t=e.id,void(p||(a===t?(o(null),x(null)):(o(t),x(t))));var t},whileHover:{scale:1.1},whileTap:{scale:.9},children:e.id},e.id)))]})}),(0,Qn.jsxs)("div",{style:{flex:1},children:[(0,Qn.jsx)("h3",{children:"Stack:"}),(0,Qn.jsx)(Mb,{children:d.length>0?d.map(((e,t)=>(0,Qn.jsx)(Fb,{current:t===d.length-1,children:e},`stack-${e}-${t}`))):(0,Qn.jsx)("div",{children:"Stack is empty"})})]})]}),f&&(0,Qn.jsxs)(Vb,{children:["DFS traversal complete! Visit order: ",P.join(" \u2192 ")]}),(0,Qn.jsxs)(Hb,{children:[(0,Qn.jsx)(Wb,{children:"Algorithm Complexity"}),(0,Qn.jsx)("p",{children:"Depth First Search explores the graph by going as deep as possible before backtracking, making it useful for problems like topological sorting and detecting cycles."}),(0,Qn.jsxs)(qb,{children:[(0,Qn.jsx)("thead",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(Kb,{children:"Time Complexity"}),(0,Qn.jsx)(Kb,{children:"Space Complexity"})]})}),(0,Qn.jsx)("tbody",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsxs)(Gb,{children:[(0,Qn.jsx)("div",{children:"O(V + E)"}),(0,Qn.jsx)("div",{children:"where V is the number of vertices and E is the number of edges"})]}),(0,Qn.jsx)(Gb,{children:"O(V)"})]})})]})]})]}):(0,Qn.jsx)(Qh,{title:"Depth First Search Implementation (Java)",code:'\nimport java.util.*;\n\npublic class DepthFirstSearch {\n  private int V; // No. of vertices\n  private LinkedList<Integer>[] adj; // Adjacency Lists\n  \n  // Constructor\n  DepthFirstSearch(int v) {\n    V = v;\n    adj = new LinkedList[v];\n    for (int i = 0; i < v; ++i)\n      adj[i] = new LinkedList();\n  }\n  \n  // Function to add an edge into the graph\n  void addEdge(int v, int w) {\n    adj[v].add(w);\n  }\n  \n  // A recursive function used by DFS\n  void DFSUtil(int v, boolean visited[]) {\n    // Mark the current node as visited and print it\n    visited[v] = true;\n    System.out.print(v + " ");\n    \n    // Recur for all the vertices adjacent to this vertex\n    Iterator<Integer> i = adj[v].listIterator();\n    while (i.hasNext()) {\n      int n = i.next();\n      if (!visited[n])\n        DFSUtil(n, visited);\n    }\n  }\n  \n  // The function to do DFS traversal. It uses recursive DFSUtil()\n  void DFS(int v) {\n    // Mark all the vertices as not visited (set as false by default)\n    boolean visited[] = new boolean[V];\n    \n    // Call the recursive helper function to print DFS traversal\n    DFSUtil(v, visited);\n  }\n  \n  // An iterative version of DFS using Stack\n  void iterativeDFS(int s) {\n    // Mark all the vertices as not visited (set as false by default)\n    boolean visited[] = new boolean[V];\n    \n    // Create a stack for DFS\n    Stack<Integer> stack = new Stack<>();\n    \n    // Push the current source node\n    stack.push(s);\n    \n    while (!stack.empty()) {\n      // Pop a vertex from stack and print it\n      s = stack.pop();\n      \n      // Stack may contain same vertex twice. So we need to check if the vertex is already visited.\n      if (!visited[s]) {\n        System.out.print(s + " ");\n        visited[s] = true;\n      }\n      \n      // Get all adjacent vertices of the popped vertex s\n      // If an adjacent has not been visited, then push it to the stack\n      Iterator<Integer> i = adj[s].listIterator();\n      while (i.hasNext()) {\n        int v = i.next();\n        if (!visited[v])\n          stack.push(v);\n      }\n    }\n  }\n  \n  // Driver code\n  public static void main(String args[]) {\n    DepthFirstSearch g = new DepthFirstSearch(4);\n    \n    g.addEdge(0, 1);\n    g.addEdge(0, 2);\n    g.addEdge(1, 2);\n    g.addEdge(2, 0);\n    g.addEdge(2, 3);\n    g.addEdge(3, 3);\n    \n    System.out.println("Depth First Traversal (starting from vertex 2):");\n    g.DFS(2);\n    \n    System.out.println("\\nIterative Depth First Traversal (starting from vertex 2):");\n    g.iterativeDFS(2);\n  }\n}\n'})]})]})},Zb=Gn.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,ew=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,tw=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,rw=Gn.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,nw=Gn.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,iw=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
  justify-content: center;
  position: relative;
`,aw=Gn(Zu.div)`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${e=>e.target?"var(--secondary)":e.current?"var(--primary)":e.blockStart?"#ff9800":e.visited?"#e0e0e0":"#f5f5f5"};
  border-radius: var(--border-radius);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-weight: ${e=>e.target?"bold":"normal"};
  position: relative;
  
  &:after {
    content: '${e=>void 0!==e.index?e.index:""}';
    position: absolute;
    bottom: -20px;
    font-size: 0.8rem;
    color: var(--text-secondary);
  }
`,ow=Gn(Zu.div)`
  position: absolute;
  top: -35px;
  left: ${e=>e.position}px;
  transform: translateX(-50%);
  background: #ff9800;
  color: white;
  padding: 2px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  z-index: 1;
  
  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #ff9800 transparent transparent transparent;
  }
`,sw=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,lw=Gn.button`
  padding: 0.5rem 1.5rem;
  border-radius: var(--border-radius);
  background: var(--primary);
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`,dw=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,cw=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,uw=Gn.input`
  width: 100px;
`,hw=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,pw=Gn.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 60px;
`,mw=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,fw=Gn.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,gw=Gn.button`
  padding: 0.5rem 1rem;
  background: ${e=>e.active?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"#e0e0e0"};
  }
`,vw=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,xw=Gn.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,yw=Gn.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,bw=Gn.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,ww=Gn.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,jw=Gn.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,Sw=Gn.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
`,kw=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Cw=Gn.div`
  width: 20px;
  height: 20px;
  border-radius: var(--border-radius);
  background: ${e=>e.color||"#ddd"};
`,Tw=Gn(Zu.div)`
  position: absolute;
  height: 2px;
  background: #ff9800;
  top: 25px;
  z-index: 1;
`,Ew=()=>{const[t,r]=(0,e.useState)([]),[n,i]=(0,e.useState)(""),[a,o]=(0,e.useState)(!1),[s,l]=(0,e.useState)(!1),[d,c]=(0,e.useState)(!1),[u,h]=(0,e.useState)(-1),[p,m]=(0,e.useState)(-1),[f,g]=(0,e.useState)([]),[v,x]=(0,e.useState)(0),[y,b]=(0,e.useState)([]),[w,j]=(0,e.useState)(""),[S,k]=(0,e.useState)(16),[C,T]=(0,e.useState)(500),[E,$]=(0,e.useState)("visualization"),[P,A]=(0,e.useState)("");(0,e.useEffect)((()=>{I()}),[S]);const I=()=>{const e=[];let t=Math.floor(5*Math.random());for(let r=0;r<S;r++)e.push(t),t+=Math.floor(10*Math.random())+1;r(e),l(!1),c(!1),g([]),h(-1),m(-1),b([]),x(Math.floor(Math.sqrt(e.length))),A("")},z=e=>new Promise((t=>setTimeout(t,e))),M=e=>58*e+25;return(0,Qn.jsxs)(Zb,{children:[(0,Qn.jsxs)(ew,{children:[(0,Qn.jsx)(tw,{children:"Jump Search"}),(0,Qn.jsx)(rw,{children:"Jump Search is a searching algorithm for sorted arrays that works by checking fewer elements than linear search by jumping ahead by fixed steps and then performing a linear search within a smaller range."})]}),(0,Qn.jsxs)(nw,{children:[(0,Qn.jsxs)(fw,{children:[(0,Qn.jsx)(gw,{active:"visualization"===E,onClick:()=>$("visualization"),children:"Visualization"}),(0,Qn.jsx)(gw,{active:"code"===E,onClick:()=>$("code"),children:"Code"})]}),"visualization"===E?(0,Qn.jsxs)(Qn.Fragment,{children:[(0,Qn.jsxs)(sw,{children:[(0,Qn.jsxs)(cw,{children:[(0,Qn.jsx)("span",{children:"Size:"}),(0,Qn.jsx)(uw,{type:"range",min:"8",max:"20",value:S,onChange:e=>k(parseInt(e.target.value)),disabled:a}),(0,Qn.jsx)("span",{children:S})]}),(0,Qn.jsxs)(dw,{children:[(0,Qn.jsx)("span",{children:"Speed:"}),(0,Qn.jsx)(uw,{type:"range",min:"100",max:"1000",step:"50",value:C,onChange:e=>T(parseInt(e.target.value)),disabled:a}),(0,Qn.jsxs)("span",{children:[C,"ms"]})]}),(0,Qn.jsxs)(hw,{children:[(0,Qn.jsx)("span",{children:"Target:"}),(0,Qn.jsx)(pw,{type:"number",value:n,onChange:e=>i(e.target.value),disabled:a})]}),(0,Qn.jsx)(lw,{onClick:I,disabled:a,children:"Generate New Array"}),(0,Qn.jsx)(lw,{onClick:async()=>{if(a||!n)return;const e=parseInt(n);if(isNaN(e))return void j("Please enter a valid number");o(!0),l(!1),c(!1),g([]),h(-1),m(-1),b([]),j("");const r=Math.floor(Math.sqrt(t.length));x(r),A(`Starting Jump Search with block size ${r}`),await z(C);let i=0,s=Math.min(r,t.length)-1;for(h(s),m(i),b([i,s]),A(`Jumping to index ${s} and comparing with target ${e}`),await z(C),g([...f,s]);t[s]<e;){if(i=s+1,s=Math.min(i+r-1,t.length-1),i>=t.length)return A(`Reached end of array, target ${e} not found`),l(!0),void o(!1);m(i),h(s),b([i,s]),A(`Jumping to index ${s} and comparing with target ${e}`),await z(C),g([...f,s])}for(A(`Found block that may contain target: indices ${i} to ${s}`),await z(C),h(i),A(`Starting linear search from index ${i}`),await z(C);i<=s;){if(h(i),g([...f,i]),A(`Checking index ${i}: ${t[i]} vs target ${e}`),await z(C),t[i]===e)return A(`Found target ${e} at index ${i}!`),c(!0),l(!0),void o(!1);if(t[i]>e)return A(`Array[${i}] = ${t[i]} > ${e}, target not found`),l(!0),void o(!1);i++}A(`Target ${e} not found in the array`),l(!0),o(!1)},disabled:a||!n,children:a?"Searching...":"Search"}),(0,Qn.jsx)(lw,{onClick:()=>{o(!1),l(!1),c(!1),g([]),h(-1),m(-1),b([]),i(""),A("")},disabled:a,children:"Reset"})]}),(0,Qn.jsxs)(Sw,{children:[(0,Qn.jsxs)(kw,{children:[(0,Qn.jsx)(Cw,{color:"var(--primary)"}),(0,Qn.jsx)("span",{children:"Current Element"})]}),(0,Qn.jsxs)(kw,{children:[(0,Qn.jsx)(Cw,{color:"#ff9800"}),(0,Qn.jsx)("span",{children:"Block Start"})]}),(0,Qn.jsxs)(kw,{children:[(0,Qn.jsx)(Cw,{color:"#e0e0e0"}),(0,Qn.jsx)("span",{children:"Visited"})]}),(0,Qn.jsxs)(kw,{children:[(0,Qn.jsx)(Cw,{color:"var(--secondary)"}),(0,Qn.jsx)("span",{children:"Target Found"})]})]}),P&&(0,Qn.jsx)(vw,{children:P}),(0,Qn.jsx)("div",{style:{marginTop:"1rem",textAlign:"center"},children:(0,Qn.jsxs)("p",{children:["Jump Size: \u221an = \u221a",t.length," \u2248 ",v]})}),(0,Qn.jsxs)(iw,{style:{paddingTop:"40px",paddingBottom:"30px"},children:[2===y.length&&(0,Qn.jsxs)(Qn.Fragment,{children:[(0,Qn.jsx)(ow,{position:M(y[0]),initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:"Start Block"}),(0,Qn.jsx)(Tw,{style:{left:M(y[0]),width:M(y[1])-M(y[0])},initial:{scaleX:0},animate:{scaleX:1},transition:{duration:.4}})]}),t.map(((e,t)=>(0,Qn.jsx)(aw,{index:t,current:t===u,blockStart:t===p,visited:f.includes(t),target:d&&t===u,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.03*t},children:e},t)))]}),s&&(0,Qn.jsx)(mw,{children:d?(0,Qn.jsxs)("div",{children:["Target ",n," found at index ",u,"!"]}):(0,Qn.jsxs)("div",{children:["Target ",n," not found in the array."]})}),(0,Qn.jsxs)(xw,{children:[(0,Qn.jsx)(yw,{children:"Algorithm Complexity"}),(0,Qn.jsx)("p",{children:"Jump Search is faster than Linear Search but slower than Binary Search."}),(0,Qn.jsxs)(bw,{children:[(0,Qn.jsx)("thead",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(ww,{children:"Time Complexity"}),(0,Qn.jsx)(ww,{children:"Space Complexity"})]})}),(0,Qn.jsx)("tbody",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsxs)(jw,{children:[(0,Qn.jsx)("div",{children:"Best Case: O(1) \u2014 if the first element checked is the target"}),(0,Qn.jsx)("div",{children:"Average and Worst Case: O(\u221an) \u2014 where n is the length of the array"})]}),(0,Qn.jsx)(jw,{children:"O(1) \u2014 constant space requirement"})]})})]}),(0,Qn.jsxs)("div",{style:{marginTop:"1rem"},children:[(0,Qn.jsx)("p",{children:"The optimal jump step size is \u221an for a sorted array of size n."}),(0,Qn.jsx)("p",{children:"Jump Search is useful when:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Searching in sorted arrays"}),(0,Qn.jsx)("li",{children:"The array is large and the element being searched is somewhere near the beginning"}),(0,Qn.jsx)("li",{children:"Jumping back is costly compared to sequential access (e.g., on magnetic tapes)"})]})]})]})]}):(0,Qn.jsx)(Qh,{title:"Jump Search Implementation (Java)",code:"\npublic class JumpSearch {\n  public static int jumpSearch(int[] arr, int x) {\n    int n = arr.length;\n    \n    // Finding block size to be jumped\n    int step = (int) Math.floor(Math.sqrt(n));\n    \n    // Finding the block where element is present (if it is present)\n    int prev = 0;\n    while (arr[Math.min(step, n) - 1] < x) {\n      prev = step;\n      step += (int) Math.floor(Math.sqrt(n));\n      if (prev >= n)\n        return -1;\n    }\n    \n    // Doing a linear search for x in the block beginning with prev\n    while (arr[prev] < x) {\n      prev++;\n      \n      // If we reached next block or end of array, element is not present\n      if (prev == Math.min(step, n))\n        return -1;\n    }\n    \n    // If element is found\n    if (arr[prev] == x)\n      return prev;\n    \n    return -1;\n  }\n  \n  public static void main(String[] args) {\n    int arr[] = { 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610 };\n    int x = 55;\n    \n    // Find the index of 'x' using Jump Search\n    int index = jumpSearch(arr, x);\n    \n    // Print the index where 'x' is located\n    System.out.println(\"Number \" + x + \" is at index \" + index);\n  }\n}\n"})]})]})},$w=Gn.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,Pw=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,Aw=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,Iw=Gn.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,zw=Gn.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,Mw=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
  justify-content: center;
  position: relative;
  padding-top: 40px;
  padding-bottom: 30px;
`,Fw=Gn(Zu.div)`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${e=>e.target?"var(--secondary)":e.current?"var(--primary)":e.left?"#ff9800":e.right?"#4caf50":e.visited?"#e0e0e0":"#f5f5f5"};
  border-radius: var(--border-radius);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-weight: ${e=>e.target?"bold":"normal"};
  position: relative;
  
  &:after {
    content: '${e=>void 0!==e.index?e.index:""}';
    position: absolute;
    bottom: -20px;
    font-size: 0.8rem;
    color: var(--text-secondary);
  }
`,Rw=Gn(Zu.div)`
  position: absolute;
  top: -35px;
  left: ${e=>e.position}px;
  transform: translateX(-50%);
  background: ${e=>e.color||"#4caf50"};
  color: white;
  padding: 2px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  z-index: 1;
  
  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${e=>e.color||"#4caf50"} transparent transparent transparent;
  }
`,Ow=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: var(--border-radius);
  font-family: 'Courier New', monospace;
  text-align: center;
  font-size: 1.1rem;
`,Nw=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,Lw=Gn.button`
  padding: 0.5rem 1.5rem;
  border-radius: var(--border-radius);
  background: var(--primary);
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`,Dw=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Vw=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,_w=Gn.input`
  width: 100px;
`,Bw=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Uw=Gn.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 60px;
`,Hw=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,Ww=Gn.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,qw=Gn.button`
  padding: 0.5rem 1rem;
  background: ${e=>e.active?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"#e0e0e0"};
  }
`,Kw=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,Gw=Gn.div`
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: ${e=>e.highlight?"#fffde7":"transparent"};
  border-radius: var(--border-radius);
  transition: background 0.3s;
`,Yw=Gn.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,Xw=Gn.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,Qw=Gn.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,Jw=Gn.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,Zw=Gn.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,ej=Gn.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
`,tj=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,rj=Gn.div`
  width: 20px;
  height: 20px;
  border-radius: var(--border-radius);
  background: ${e=>e.color||"#ddd"};
`,nj=Gn(Zu.div)`
  position: absolute;
  height: 2px;
  background: #9c27b0;
  top: 25px;
  z-index: 1;
`,ij=()=>{const[t,r]=(0,e.useState)([]),[n,i]=(0,e.useState)(""),[a,o]=(0,e.useState)(!1),[s,l]=(0,e.useState)(!1),[d,c]=(0,e.useState)(!1),[u,h]=(0,e.useState)(-1),[p,m]=(0,e.useState)(-1),[f,g]=(0,e.useState)(-1),[v,x]=(0,e.useState)([]),[y,b]=(0,e.useState)(""),[w,j]=(0,e.useState)(16),[S,k]=(0,e.useState)(500),[C,T]=(0,e.useState)("visualization"),[E,$]=(0,e.useState)(""),[P,A]=(0,e.useState)([]),[I,z]=(0,e.useState)(-1);(0,e.useEffect)((()=>{M()}),[w]);const M=()=>{const e=[];let t=Math.floor(5*Math.random());for(let r=0;r<w;r++)e.push(t),t+=Math.floor(Math.random()*(r+5))+1;r(e),R()},F=e=>new Promise((t=>setTimeout(t,e))),R=()=>{o(!1),l(!1),c(!1),x([]),h(-1),m(-1),g(-1),i(""),$(""),A([]),z(-1),b("")},O=e=>58*e+25;return(0,Qn.jsxs)($w,{children:[(0,Qn.jsxs)(Pw,{children:[(0,Qn.jsx)(Aw,{children:"Interpolation Search"}),(0,Qn.jsx)(Iw,{children:"Interpolation Search is an improved variant of Binary Search for uniformly distributed sorted arrays. Instead of always checking the middle element, it uses a formula to estimate the most likely position of the target value."})]}),(0,Qn.jsxs)(zw,{children:[(0,Qn.jsxs)(Ww,{children:[(0,Qn.jsx)(qw,{active:"visualization"===C,onClick:()=>T("visualization"),children:"Visualization"}),(0,Qn.jsx)(qw,{active:"code"===C,onClick:()=>T("code"),children:"Code"})]}),"visualization"===C?(0,Qn.jsxs)(Qn.Fragment,{children:[(0,Qn.jsxs)(Nw,{children:[(0,Qn.jsxs)(Vw,{children:[(0,Qn.jsx)("span",{children:"Size:"}),(0,Qn.jsx)(_w,{type:"range",min:"8",max:"20",value:w,onChange:e=>j(parseInt(e.target.value)),disabled:a}),(0,Qn.jsx)("span",{children:w})]}),(0,Qn.jsxs)(Dw,{children:[(0,Qn.jsx)("span",{children:"Speed:"}),(0,Qn.jsx)(_w,{type:"range",min:"100",max:"1000",step:"50",value:S,onChange:e=>k(parseInt(e.target.value)),disabled:a}),(0,Qn.jsxs)("span",{children:[S,"ms"]})]}),(0,Qn.jsxs)(Bw,{children:[(0,Qn.jsx)("span",{children:"Target:"}),(0,Qn.jsx)(Uw,{type:"number",value:n,onChange:e=>i(e.target.value),disabled:a})]}),(0,Qn.jsx)(Lw,{onClick:M,disabled:a,children:"Generate New Array"}),(0,Qn.jsx)(Lw,{onClick:async()=>{if(a||!n)return;const e=parseInt(n);if(isNaN(e))return void b("Please enter a valid number");o(!0),l(!1),c(!1),x([]),h(-1),m(-1),g(-1),A([]),z(-1),b("");let r=0,i=t.length-1;for(m(r),g(i),$(`Starting Interpolation Search for target ${e}`),await F(S);r<=i&&e>=t[r]&&e<=t[i];){if(m(r),g(i),r===i)return h(r),x([...v,r]),t[r]===e?($(`Found target ${e} at index ${r}!`),c(!0),l(!0),void o(!1)):($(`Element at index ${r} is ${t[r]}, not the target ${e}.`),l(!0),void o(!1));let n=Math.floor(r+(e-t[r])*(i-r)/(t[i]-t[r]));n=Math.max(r,Math.min(n,i));const a=[`lo = ${r}, hi = ${i}`,`target = ${e}, arr[lo] = ${t[r]}, arr[hi] = ${t[i]}`,"pos = lo + ((target - arr[lo]) * (hi - lo)) / (arr[hi] - arr[lo])",`pos = ${r} + ((${e} - ${t[r]}) * (${i} - ${r})) / (${t[i]} - ${t[r]})`,`pos = ${r} + ((${e-t[r]}) * ${i-r}) / ${t[i]-t[r]}`,`pos = ${r} + (${(e-t[r])*(i-r)}) / ${t[i]-t[r]}`,`pos = ${r} + ${(e-t[r])*(i-r)/(t[i]-t[r])}`,`pos = ${n} (rounded to integer)`];A(a);for(let e=0;e<a.length;e++)z(e),await F(S/2);if($(`Calculated position to check: index ${n}`),await F(S),h(n),x([...v,n]),$(`Comparing arr[${n}] = ${t[n]} with target ${e}`),await F(S),t[n]===e)return $(`Found target ${e} at index ${n}!`),c(!0),l(!0),void o(!1);t[n]>e?($(`${t[n]} > ${e}, searching in the left subarray`),i=n-1):($(`${t[n]} < ${e}, searching in the right subarray`),r=n+1),await F(S),A([]),z(-1)}$(`Target ${e} is outside the range of values in the array or not present.`),l(!0),o(!1)},disabled:a||!n,children:a?"Searching...":"Search"}),(0,Qn.jsx)(Lw,{onClick:R,disabled:a,children:"Reset"})]}),(0,Qn.jsxs)(ej,{children:[(0,Qn.jsxs)(tj,{children:[(0,Qn.jsx)(rj,{color:"var(--primary)"}),(0,Qn.jsx)("span",{children:"Current Element"})]}),(0,Qn.jsxs)(tj,{children:[(0,Qn.jsx)(rj,{color:"#ff9800"}),(0,Qn.jsx)("span",{children:"Left Pointer"})]}),(0,Qn.jsxs)(tj,{children:[(0,Qn.jsx)(rj,{color:"#4caf50"}),(0,Qn.jsx)("span",{children:"Right Pointer"})]}),(0,Qn.jsxs)(tj,{children:[(0,Qn.jsx)(rj,{color:"#e0e0e0"}),(0,Qn.jsx)("span",{children:"Visited"})]}),(0,Qn.jsxs)(tj,{children:[(0,Qn.jsx)(rj,{color:"var(--secondary)"}),(0,Qn.jsx)("span",{children:"Target Found"})]})]}),E&&(0,Qn.jsx)(Kw,{children:E}),P.length>0&&(0,Qn.jsxs)(Ow,{children:[(0,Qn.jsx)("h4",{children:"Position Calculation:"}),P.map(((e,t)=>(0,Qn.jsx)(Gw,{highlight:t===I,children:e},t)))]}),(0,Qn.jsxs)(Mw,{children:[-1!==p&&-1!==f&&(0,Qn.jsxs)(Qn.Fragment,{children:[(0,Qn.jsxs)(Rw,{position:O(p),color:"#ff9800",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:["lo=",p]}),(0,Qn.jsxs)(Rw,{position:O(f),color:"#4caf50",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:["hi=",f]}),(0,Qn.jsx)(nj,{style:{left:O(p),width:O(f)-O(p)},initial:{scaleX:0},animate:{scaleX:1},transition:{duration:.4}})]}),-1!==u&&(0,Qn.jsxs)(Rw,{position:O(u),color:"var(--primary)",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:["pos=",u]}),t.map(((e,t)=>(0,Qn.jsx)(Fw,{index:t,current:t===u,left:t===p,right:t===f,visited:v.includes(t),target:d&&t===u,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.03*t},children:e},t)))]}),s&&(0,Qn.jsx)(Hw,{children:d?(0,Qn.jsxs)("div",{children:["Target ",n," found at index ",u,"!"]}):(0,Qn.jsxs)("div",{children:["Target ",n," not found in the array."]})}),(0,Qn.jsxs)(Yw,{children:[(0,Qn.jsx)(Xw,{children:"Algorithm Complexity"}),(0,Qn.jsx)("p",{children:"Interpolation Search provides improved performance over Binary Search, especially for uniformly distributed data."}),(0,Qn.jsxs)(Qw,{children:[(0,Qn.jsx)("thead",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(Jw,{children:"Time Complexity"}),(0,Qn.jsx)(Jw,{children:"Space Complexity"})]})}),(0,Qn.jsx)("tbody",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsxs)(Zw,{children:[(0,Qn.jsx)("div",{children:"Best Case: O(1) \u2014 if the first position checked has the target"}),(0,Qn.jsx)("div",{children:"Average Case: O(log(log n)) \u2014 for uniformly distributed data"}),(0,Qn.jsx)("div",{children:"Worst Case: O(n) \u2014 when elements are exponentially distributed"})]}),(0,Qn.jsx)(Zw,{children:"O(1) \u2014 constant space requirement"})]})})]}),(0,Qn.jsxs)("div",{style:{marginTop:"1rem"},children:[(0,Qn.jsx)("p",{children:"The formula for the probe position in Interpolation Search is:"}),(0,Qn.jsx)("p",{children:(0,Qn.jsx)("strong",{children:"pos = lo + ((x - arr[lo]) * (hi - lo)) / (arr[hi] - arr[lo])"})}),(0,Qn.jsx)("p",{children:"Interpolation Search is particularly useful when:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"The array is sorted"}),(0,Qn.jsx)("li",{children:"Elements are uniformly distributed"}),(0,Qn.jsx)("li",{children:"The array is large"})]}),(0,Qn.jsx)("p",{children:"It can be significantly faster than Binary Search for large, uniformly distributed arrays, but can perform worse when the distribution is skewed."})]})]})]}):(0,Qn.jsx)(Qh,{title:"Interpolation Search Implementation (Java)",code:'\npublic class InterpolationSearch {\n    /**\n     * Interpolation Search algorithm implementation\n     * @param arr Sorted array to search in\n     * @param x Target value to search for\n     * @return Index of the target if found, -1 otherwise\n     */\n    public static int interpolationSearch(int[] arr, int x) {\n        // Find indexes of two corners\n        int lo = 0, hi = arr.length - 1;\n        \n        // Since array is sorted, an element present\n        // in array must be in range defined by corner\n        while (lo <= hi && x >= arr[lo] && x <= arr[hi]) {\n            if (lo == hi) {\n                if (arr[lo] == x) return lo;\n                return -1;\n            }\n            \n            // Probing the position with keeping\n            // uniform distribution in mind.\n            int pos = lo + ((x - arr[lo]) * (hi - lo)) / (arr[hi] - arr[lo]);\n            \n            // Condition of target found\n            if (arr[pos] == x)\n                return pos;\n                \n            // If x is larger, x is in right sub array\n            if (arr[pos] < x)\n                lo = pos + 1;\n                \n            // If x is smaller, x is in left sub array\n            else\n                hi = pos - 1;\n        }\n        return -1;\n    }\n    \n    // Driver method\n    public static void main(String[] args) {\n        int[] arr = {10, 12, 13, 16, 18, 19, 20, 21, 22, 23,\n                      24, 33, 35, 42, 47};\n                      \n        int x = 18; // Element to be searched\n        int index = interpolationSearch(arr, x);\n        \n        // If element was found\n        if (index != -1)\n            System.out.println("Element found at index " + index);\n        else\n            System.out.println("Element not found.");\n    }\n}\n'})]})]})},aj=Gn.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,oj=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,sj=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,lj=Gn.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,dj=Gn.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,cj=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
  justify-content: center;
  position: relative;
  padding-top: 40px;
  padding-bottom: 30px;
`,uj=Gn(Zu.div)`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${e=>e.target?"var(--secondary)":e.current?"var(--primary)":e.bound?"#ff9800":e.visited?"#e0e0e0":e.range?"#e3f2fd":"#f5f5f5"};
  border-radius: var(--border-radius);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-weight: ${e=>e.target?"bold":"normal"};
  position: relative;
  
  &:after {
    content: '${e=>void 0!==e.index?e.index:""}';
    position: absolute;
    bottom: -20px;
    font-size: 0.8rem;
    color: var(--text-secondary);
  }
`,hj=Gn(Zu.div)`
  position: absolute;
  top: -35px;
  left: ${e=>e.position}px;
  transform: translateX(-50%);
  background: ${e=>e.color||"#4caf50"};
  color: white;
  padding: 2px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  z-index: 1;
  
  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${e=>e.color||"#4caf50"} transparent transparent transparent;
  }
`,pj=Gn(Zu.div)`
  position: absolute;
  height: 2px;
  background: #9c27b0;
  top: 25px;
  z-index: 1;
`,mj=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
  font-weight: bold;
  color: var(--primary);
`,fj=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,gj=Gn.button`
  padding: 0.5rem 1.5rem;
  border-radius: var(--border-radius);
  background: var(--primary);
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`,vj=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,xj=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,yj=Gn.input`
  width: 100px;
`,bj=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,wj=Gn.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 60px;
`,jj=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,Sj=Gn.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,kj=Gn.button`
  padding: 0.5rem 1rem;
  background: ${e=>e.active?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"#e0e0e0"};
  }
`,Cj=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,Tj=Gn.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,Ej=Gn.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,$j=Gn.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,Pj=Gn.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,Aj=Gn.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,Ij=Gn.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
`,zj=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Mj=Gn.div`
  width: 20px;
  height: 20px;
  border-radius: var(--border-radius);
  background: ${e=>e.color||"#ddd"};
`,Fj=()=>{const[t,r]=(0,e.useState)([]),[n,i]=(0,e.useState)(""),[a,o]=(0,e.useState)(!1),[s,l]=(0,e.useState)(!1),[d,c]=(0,e.useState)(!1),[u,h]=(0,e.useState)(-1),[p,m]=(0,e.useState)(-1),[f,g]=(0,e.useState)([]),[v,x]=(0,e.useState)([]),[y,b]=(0,e.useState)(""),[w,j]=(0,e.useState)(16),[S,k]=(0,e.useState)(500),[C,T]=(0,e.useState)("visualization"),[E,$]=(0,e.useState)(""),[P,A]=(0,e.useState)(""),[I,z]=(0,e.useState)({left:-1,right:-1});(0,e.useEffect)((()=>{M()}),[w]);const M=()=>{const e=[];let t=Math.floor(5*Math.random());for(let r=0;r<w;r++)e.push(t),t+=Math.floor(10*Math.random())+1;r(e),R()},F=e=>new Promise((t=>setTimeout(t,e))),R=()=>{o(!1),l(!1),c(!1),g([]),h(-1),m(-1),x([]),i(""),$(""),A(""),z({left:-1,right:-1}),b("")},O=e=>58*e+25;return(0,Qn.jsxs)(aj,{children:[(0,Qn.jsxs)(oj,{children:[(0,Qn.jsx)(sj,{children:"Exponential Search"}),(0,Qn.jsx)(lj,{children:"Exponential Search is an algorithm for searching sorted arrays that works by finding a range where the target might be and then performing a binary search within that range. It's useful for unbounded or infinite arrays."})]}),(0,Qn.jsxs)(dj,{children:[(0,Qn.jsxs)(Sj,{children:[(0,Qn.jsx)(kj,{active:"visualization"===C,onClick:()=>T("visualization"),children:"Visualization"}),(0,Qn.jsx)(kj,{active:"code"===C,onClick:()=>T("code"),children:"Code"})]}),"visualization"===C?(0,Qn.jsxs)(Qn.Fragment,{children:[(0,Qn.jsxs)(fj,{children:[(0,Qn.jsxs)(xj,{children:[(0,Qn.jsx)("span",{children:"Size:"}),(0,Qn.jsx)(yj,{type:"range",min:"8",max:"20",value:w,onChange:e=>j(parseInt(e.target.value)),disabled:a}),(0,Qn.jsx)("span",{children:w})]}),(0,Qn.jsxs)(vj,{children:[(0,Qn.jsx)("span",{children:"Speed:"}),(0,Qn.jsx)(yj,{type:"range",min:"100",max:"1000",step:"50",value:S,onChange:e=>k(parseInt(e.target.value)),disabled:a}),(0,Qn.jsxs)("span",{children:[S,"ms"]})]}),(0,Qn.jsxs)(bj,{children:[(0,Qn.jsx)("span",{children:"Target:"}),(0,Qn.jsx)(wj,{type:"number",value:n,onChange:e=>i(e.target.value),disabled:a})]}),(0,Qn.jsx)(gj,{onClick:M,disabled:a,children:"Generate New Array"}),(0,Qn.jsx)(gj,{onClick:async()=>{if(a||!n)return;const e=parseInt(n);if(isNaN(e))return void b("Please enter a valid number");o(!0),l(!1),c(!1),g([]),h(-1),m(-1),x([]),b(""),A("exponential");const r=t.length;if(h(0),g([0]),$(`Checking if the first element (${t[0]}) is the target ${e}`),await F(S),t[0]===e)return $(`Found target ${e} at the first position (index 0)!`),c(!0),l(!0),void o(!1);let i=1;for($("Starting exponential probing from index 1"),await F(S);i<r&&t[i]<=e;){h(i),m(i),g([...f,i]);const e=Math.min(2*i,r-1);$(`Current bound: ${i}. Next bound will be: ${e}`),await F(S),i*=2}i=Math.min(i,r);const s=i/2,d=Math.min(i,r-1);x([s,d]),$(`Found range for binary search: [${s}, ${d}]`),await F(S);const u=await(async(e,r,n)=>{for(z({left:e,right:r}),A("binary"),$(`Starting Binary Search between indices ${e} and ${r}`),await F(S);e<=r;){z({left:e,right:r});const i=Math.floor(e+(r-e)/2);if(h(i),g([...f,i]),$(`Checking mid element at index ${i}: ${t[i]} vs target ${n}`),await F(S),t[i]===n)return $(`Found target ${n} at index ${i}!`),c(!0),l(!0),o(!1),i;t[i]>n?($(`${t[i]} > ${n}, searching in the left half`),r=i-1):($(`${t[i]} < ${n}, searching in the right half`),e=i+1),await F(S)}return $(`Binary search complete. Target ${n} not found in the range.`),-1})(Math.floor(s),d,e);-1===u&&(l(!0),o(!1))},disabled:a||!n,children:a?"Searching...":"Search"}),(0,Qn.jsx)(gj,{onClick:R,disabled:a,children:"Reset"})]}),(0,Qn.jsxs)(Ij,{children:[(0,Qn.jsxs)(zj,{children:[(0,Qn.jsx)(Mj,{color:"var(--primary)"}),(0,Qn.jsx)("span",{children:"Current Element"})]}),(0,Qn.jsxs)(zj,{children:[(0,Qn.jsx)(Mj,{color:"#ff9800"}),(0,Qn.jsx)("span",{children:"Bound / Binary Search Limits"})]}),(0,Qn.jsxs)(zj,{children:[(0,Qn.jsx)(Mj,{color:"#e0e0e0"}),(0,Qn.jsx)("span",{children:"Visited"})]}),(0,Qn.jsxs)(zj,{children:[(0,Qn.jsx)(Mj,{color:"#e3f2fd"}),(0,Qn.jsx)("span",{children:"Search Range"})]}),(0,Qn.jsxs)(zj,{children:[(0,Qn.jsx)(Mj,{color:"var(--secondary)"}),(0,Qn.jsx)("span",{children:"Target Found"})]})]}),P&&(0,Qn.jsx)(mj,{children:"exponential"===P?"Phase 1: Exponential Probing":"Phase 2: Binary Search"}),E&&(0,Qn.jsx)(Cj,{children:E}),(0,Qn.jsxs)(cj,{children:["binary"===P&&-1!==I.left&&-1!==I.right&&(0,Qn.jsxs)(Qn.Fragment,{children:[(0,Qn.jsxs)(hj,{position:O(I.left),color:"#ff9800",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:["left=",I.left]}),(0,Qn.jsxs)(hj,{position:O(I.right),color:"#ff9800",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:["right=",I.right]}),(0,Qn.jsx)(pj,{style:{left:O(I.left),width:O(I.right)-O(I.left)},initial:{scaleX:0},animate:{scaleX:1},transition:{duration:.4}})]}),"exponential"===P&&-1!==p&&(0,Qn.jsxs)(hj,{position:O(p),color:"#ff9800",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:["bound=",p]}),2===v.length&&(0,Qn.jsx)(pj,{style:{left:O(v[0]),width:O(v[1])-O(v[0])},initial:{scaleX:0},animate:{scaleX:1},transition:{duration:.4}}),t.map(((e,t)=>(0,Qn.jsx)(uj,{index:t,current:t===u,bound:"binary"===P?t===I.left||t===I.right:t===p,visited:f.includes(t),range:2===v.length&&t>=v[0]&&t<=v[1],target:d&&t===u,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.03*t},children:e},t)))]}),s&&(0,Qn.jsx)(jj,{children:d?(0,Qn.jsxs)("div",{children:["Target ",n," found at index ",u,"!"]}):(0,Qn.jsxs)("div",{children:["Target ",n," not found in the array."]})}),(0,Qn.jsxs)(Tj,{children:[(0,Qn.jsx)(Ej,{children:"Algorithm Complexity"}),(0,Qn.jsx)("p",{children:"Exponential Search combines the idea of exponential growth to find a range and binary search to find the target within that range."}),(0,Qn.jsxs)($j,{children:[(0,Qn.jsx)("thead",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(Pj,{children:"Time Complexity"}),(0,Qn.jsx)(Pj,{children:"Space Complexity"})]})}),(0,Qn.jsx)("tbody",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsxs)(Aj,{children:[(0,Qn.jsx)("div",{children:"Best Case: O(1) \u2014 if the target is in the first position"}),(0,Qn.jsx)("div",{children:"Average and Worst Case: O(log n) \u2014 where n is the length of the array"})]}),(0,Qn.jsx)(Aj,{children:"O(1) \u2014 constant space requirement (iterative implementation)"})]})})]}),(0,Qn.jsxs)("div",{style:{marginTop:"1rem"},children:[(0,Qn.jsx)("p",{children:"Exponential Search is particularly useful when:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"The array is sorted but unbounded (potentially infinite)"}),(0,Qn.jsx)("li",{children:"The target element is likely to be near the beginning of the array"}),(0,Qn.jsx)("li",{children:"You want better performance than binary search for targets near the start"})]}),(0,Qn.jsx)("p",{children:"The algorithm operates in two phases:"}),(0,Qn.jsxs)("ol",{children:[(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Exponential Probing:"})," Find a range where the target might be by repeatedly doubling an index i (1, 2, 4, 8, 16, ...) until arr[i] exceeds the target value."]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Binary Search:"})," Perform a binary search between i/2 and min(i, n-1) to find the exact position of the target."]})]})]})]})]}):(0,Qn.jsx)(Qh,{title:"Exponential Search Implementation (Java)",code:'\npublic class ExponentialSearch {\n    /**\n     * Performs binary search on a sorted array within given bounds\n     * @param arr The sorted array\n     * @param left The left bound\n     * @param right The right bound\n     * @param x The value to search for\n     * @return Index of x if found, otherwise -1\n     */\n    public static int binarySearch(int[] arr, int left, int right, int x) {\n        if (right >= left) {\n            int mid = left + (right - left) / 2;\n            \n            // If the element is present at the middle\n            if (arr[mid] == x)\n                return mid;\n                \n            // If element is smaller than mid, search in left subarray\n            if (arr[mid] > x)\n                return binarySearch(arr, left, mid - 1, x);\n                \n            // Else search in right subarray\n            return binarySearch(arr, mid + 1, right, x);\n        }\n        \n        // Element not present in array\n        return -1;\n    }\n    \n    /**\n     * Performs exponential search on a sorted array\n     * @param arr The sorted array\n     * @param n The size of the array\n     * @param x The value to search for\n     * @return Index of x if found, otherwise -1\n     */\n    public static int exponentialSearch(int[] arr, int n, int x) {\n        // If x is present at the first position\n        if (arr[0] == x)\n            return 0;\n            \n        // Find range for binary search by repeated doubling\n        int i = 1;\n        while (i < n && arr[i] <= x)\n            i = i * 2;\n            \n        // Call binary search for the found range\n        return binarySearch(arr, i / 2, Math.min(i, n - 1), x);\n    }\n    \n    // Driver code\n    public static void main(String[] args) {\n        int[] arr = {2, 3, 4, 10, 40, 60, 80, 100, 120, 140, 170};\n        int x = 80;\n        int result = exponentialSearch(arr, arr.length, x);\n        \n        if (result < 0)\n            System.out.println("Element not found in the array");\n        else\n            System.out.println("Element found at index " + result);\n    }\n}\n'})]})]})},Rj=Gn.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`,Oj=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,Nj=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`,Lj=Gn.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Dj=Gn.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1rem auto;
  }
`,Vj=Gn.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
`,_j=Gn.button`
  padding: 0.5rem 1rem;
  background: ${e=>e.active?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"#e0e0e0"};
  }
`,Bj=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,Uj=Gn.button`
  padding: 0.5rem 1.5rem;
  border-radius: var(--border-radius);
  background: var(--primary);
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`,Hj=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Wj=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,qj=Gn.input`
  width: 100px;
`,Kj=Gn.div`
  margin-right: 1rem;
`,Gj=Gn.div`
  position: relative;
  width: 100%;
  height: 400px;
  background: #f8f9fa;
  border-radius: 8px;
  margin: 1rem 0;
  border: 1px solid #eaeaea;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 350px;
  }
`,Yj=Gn(Zu.div)`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  font-weight: bold;
  background: ${e=>e.isStart?"#4CAF50":e.isEnd?"#F44336":e.isVisited?"#2196F3":e.isCurrent?"#FFC107":"var(--primary-light)"};
  color: white;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  z-index: 2;
  
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 0.8rem;
  }
`,Xj=Gn.div`
  position: absolute;
  height: 2px;
  background: ${e=>e.isPath?"#4CAF50":e.isVisited?"#2196F3":"#ccc"};
  transform-origin: left center;
  z-index: 1;
  
  &:after {
    content: '${e=>e.weight}';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    padding: 2px 5px;
    border-radius: 3px;
    font-size: 0.8rem;
    color: var(--text-secondary);
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }
`,Qj=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,Jj=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f0f0f0;
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  line-height: 1.5;
`,Zj=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
  justify-content: center;
`,eS=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,tS=Gn.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${e=>e.color};
`,rS=Gn.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,nS=Gn.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,iS=Gn.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,aS=Gn.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,oS=Gn.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,sS=Gn.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: var(--border-radius);
  
  h3 {
    color: var(--primary);
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  
  ul {
    padding-left: 2rem;
    margin-bottom: 1rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
`,lS=()=>{const[t,r]=(0,e.useState)([]),[n,i]=(0,e.useState)([]),[a,o]=(0,e.useState)(6),[s,l]=(0,e.useState)(500),[d,c]=(0,e.useState)(0),[u,h]=(0,e.useState)(null),[p,m]=(0,e.useState)(!1),[f,g]=(0,e.useState)([]),[v,x]=(0,e.useState)(null),[y,b]=(0,e.useState)([]),[w,j]=(0,e.useState)([]),[S,k]=(0,e.useState)(null),[C,T]=(0,e.useState)("visualization"),[E,$]=(0,e.useState)(!1),[P,A]=(0,e.useState)(null),I=(0,e.useRef)(null);(0,e.useEffect)((()=>{M()}),[a]);const z=e=>new Promise((t=>setTimeout(t,e))),M=()=>{var e,t;const n=(null===(e=I.current)||void 0===e?void 0:e.clientWidth)||800,o=(null===(t=I.current)||void 0===t?void 0:t.clientHeight)||400,s=[];for(let r=0;r<a;r++)s.push({id:r,x:Math.random()*(n-100)+50,y:Math.random()*(o-100)+50});const l=[];for(let r=0;r<a;r++){const e=Math.floor(3*Math.random())+1;for(let t=0;t<e;t++){const e=Math.floor(Math.random()*a);r===e||l.some((t=>t.from===r&&t.to===e||t.from===e&&t.to===r))||l.push({from:r,to:e,weight:Math.floor(9*Math.random())+1})}}r(s),i(l),c(0),h(a-1),g([]),x(null),b([]),j([]),k(null)},F=()=>{$(!1),A(null)},R=e=>{const r=t.find((t=>t.id===e.from)),n=t.find((t=>t.id===e.to));if(!r||!n)return{};const i=n.x-r.x,a=n.y-r.y,o=Math.sqrt(i*i+a*a),s=Math.atan2(a,i)*(180/Math.PI);return{left:`${r.x+20}px`,top:`${r.y+20}px`,width:o-40+"px",transform:`rotate(${s}deg)`}},O=e=>{for(let t=0;t<w.length-1;t++)if(w[t]===e.from&&w[t+1]===e.to||w[t]===e.to&&w[t+1]===e.from)return!0;return!1},N=e=>f.includes(e.from)&&f.includes(e.to);return(0,Qn.jsxs)(Rj,{children:[(0,Qn.jsxs)(Oj,{children:[(0,Qn.jsx)(Nj,{children:"Dijkstra's Algorithm"}),(0,Qn.jsx)(Lj,{children:"Dijkstra's algorithm is a graph search algorithm that finds the shortest path between nodes in a graph, which may represent, for example, road networks."})]}),(0,Qn.jsxs)(Dj,{children:[(0,Qn.jsxs)(Vj,{children:[(0,Qn.jsx)(_j,{active:"visualization"===C,onClick:()=>T("visualization"),children:"Visualization"}),(0,Qn.jsx)(_j,{active:"theory"===C,onClick:()=>T("theory"),children:"Theory"}),(0,Qn.jsx)(_j,{active:"code"===C,onClick:()=>T("code"),children:"Code"})]}),"visualization"===C&&(0,Qn.jsxs)(Qn.Fragment,{children:[(0,Qn.jsxs)(Bj,{children:[(0,Qn.jsxs)(Wj,{children:[(0,Qn.jsxs)(Kj,{children:["Nodes: ",a]}),(0,Qn.jsx)(qj,{type:"range",min:"4",max:"12",value:a,onChange:e=>o(parseInt(e.target.value)),disabled:p})]}),(0,Qn.jsxs)(Hj,{children:[(0,Qn.jsx)("span",{children:"Speed:"}),(0,Qn.jsx)(qj,{type:"range",min:"100",max:"1000",step:"100",value:s,onChange:e=>l(parseInt(e.target.value)),disabled:p}),(0,Qn.jsxs)("span",{children:[s,"ms"]})]}),(0,Qn.jsx)(Uj,{onClick:M,disabled:p,children:"New Graph"}),(0,Qn.jsx)(Uj,{onClick:async()=>{if(p)return;if(null===d)return void k("Please select a start node");if(null===u)return void k("Please select an end node");m(!0),g([]),x(d),j([]),k("Running Dijkstra's algorithm...");const e=Array(a).fill().map((()=>Array(a).fill(0)));n.forEach((t=>{e[t.from][t.to]=t.weight,e[t.to][t.from]=t.weight}));const t=Array(a).fill(1/0),r=Array(a).fill(null),i=new Set(Array.from({length:a},((e,t)=>t)));for(t[d]=0,b([...t]);i.size>0;){let n=1/0,o=null;for(const e of i)t[e]<n&&(n=t[e],o=e);if(null===o||o===u)break;i.delete(o),x(o),g((e=>[...e,o])),await z(s);for(let s=0;s<a;s++)if(e[o][s]>0&&i.has(s)){const n=t[o]+e[o][s];n<t[s]&&(t[s]=n,r[s]=o,b([...t]))}}if(t[u]<1/0){const e=[];let n=u;for(;null!==n;)e.unshift(n),n=r[n];for(let t=0;t<e.length-1;t++)await z(s),j(e.slice(0,t+2));k(`Shortest path found with distance ${t[u]}`)}else k("No path found to the end node");m(!1),x(null)},disabled:p||null===d||null===u,children:p?"Running...":"Run Dijkstra"}),(0,Qn.jsx)(Uj,{onClick:()=>{g([]),x(null),j([]),k(null)},disabled:p,children:"Reset"})]}),(0,Qn.jsx)(Jj,{children:"Click on a node to set it as the start node (green), then click another node to set it as the end node (red). You can drag nodes to rearrange the graph."}),(0,Qn.jsxs)(Gj,{ref:I,onMouseMove:e=>{if(!E||p)return;const t=I.current.getBoundingClientRect(),n=e.clientX-t.left,i=e.clientY-t.top;r((e=>e.map((e=>e.id===P?{...e,x:n,y:i}:e))))},onMouseUp:F,onMouseLeave:F,children:[n.map(((e,t)=>(0,Qn.jsx)(Xj,{style:R(e),weight:e.weight,isPath:O(e),isVisited:N(e)},`${e.from}-${e.to}`))),t.map((e=>(0,Qn.jsx)(Yj,{style:{left:`${e.x}px`,top:`${e.y}px`},isStart:e.id===d,isEnd:e.id===u,isVisited:f.includes(e.id)&&e.id!==d&&e.id!==u,isCurrent:e.id===v,onMouseDown:t=>((e,t)=>{e.preventDefault(),p||($(!0),A(t))})(t,e.id),onClick:()=>{return t=e.id,void(p||(d===t?c(null):u===t?h(null):null===d?c(t):null===u&&h(t)));var t},initial:{scale:0},animate:{scale:1},transition:{duration:.3},children:e.id},e.id)))]}),S&&(0,Qn.jsx)(Qj,{children:S}),(0,Qn.jsxs)(Zj,{children:[(0,Qn.jsxs)(eS,{children:[(0,Qn.jsx)(tS,{color:"#4CAF50"}),(0,Qn.jsx)("span",{children:"Start Node"})]}),(0,Qn.jsxs)(eS,{children:[(0,Qn.jsx)(tS,{color:"#F44336"}),(0,Qn.jsx)("span",{children:"End Node"})]}),(0,Qn.jsxs)(eS,{children:[(0,Qn.jsx)(tS,{color:"#2196F3"}),(0,Qn.jsx)("span",{children:"Visited Node"})]}),(0,Qn.jsxs)(eS,{children:[(0,Qn.jsx)(tS,{color:"#FFC107"}),(0,Qn.jsx)("span",{children:"Current Node"})]}),(0,Qn.jsxs)(eS,{children:[(0,Qn.jsx)(tS,{color:"#4CAF50",style:{height:"2px",width:"20px",borderRadius:"0"}}),(0,Qn.jsx)("span",{children:"Shortest Path"})]})]}),(0,Qn.jsxs)(rS,{children:[(0,Qn.jsx)(nS,{children:"Algorithm Complexity"}),(0,Qn.jsx)("p",{children:"Dijkstra's algorithm efficiently finds the shortest path in a weighted graph with non-negative weights."}),(0,Qn.jsxs)(iS,{children:[(0,Qn.jsx)("thead",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(aS,{children:"Time Complexity"}),(0,Qn.jsx)(aS,{children:"Space Complexity"})]})}),(0,Qn.jsx)("tbody",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsxs)(oS,{children:[(0,Qn.jsx)("div",{children:"O((V + E) log V) with a priority queue implementation"}),(0,Qn.jsx)("div",{children:"O(V\xb2) with an array implementation"})]}),(0,Qn.jsx)(oS,{children:"O(V)"})]})})]})]})]}),"theory"===C&&(0,Qn.jsxs)(sS,{children:[(0,Qn.jsx)("h3",{children:"Dijkstra's Algorithm"}),(0,Qn.jsx)("p",{children:"Dijkstra's algorithm, conceived by computer scientist Edsger W. Dijkstra in 1956 and published in 1959, is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks."}),(0,Qn.jsx)("h3",{children:"How It Works"}),(0,Qn.jsx)("p",{children:"The algorithm works by maintaining a set of nodes whose shortest distance from the source node has been calculated. It repeatedly selects the node with the minimum distance, updates the distances to its adjacent nodes, and adds it to the set of processed nodes."}),(0,Qn.jsx)("p",{children:"Here is the step-by-step process:"}),(0,Qn.jsxs)("ol",{children:[(0,Qn.jsx)("li",{children:"Initialize distances of all vertices as infinite and the source vertex as 0."}),(0,Qn.jsx)("li",{children:"Create an empty priority queue (min-heap) and push the source vertex with its distance (0)."}),(0,Qn.jsxs)("li",{children:["While the priority queue is not empty:",(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Extract the vertex with the minimum distance from the priority queue."}),(0,Qn.jsx)("li",{children:"For each adjacent vertex, if the distance through the current vertex is less than the previously known distance, update the distance and push the vertex with its updated distance into the priority queue."})]})]})]}),(0,Qn.jsx)("h3",{children:"Applications"}),(0,Qn.jsx)("p",{children:"Dijkstra's algorithm is widely used in various applications including:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"GPS navigation systems and routing applications"}),(0,Qn.jsx)("li",{children:"Telecommunications networks to find the shortest path for data packets"}),(0,Qn.jsx)("li",{children:"Transportation planning for finding optimal routes"}),(0,Qn.jsx)("li",{children:"Robotics for path planning"}),(0,Qn.jsx)("li",{children:"Network routing protocols (like OSPF)"})]}),(0,Qn.jsx)("h3",{children:"Limitations"}),(0,Qn.jsx)("p",{children:"Dijkstra's algorithm has some limitations:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"It doesn't work with negative edge weights (for that, Bellman-Ford is preferred)"}),(0,Qn.jsx)("li",{children:"It may be slower on very large graphs compared to other algorithms like A*"}),(0,Qn.jsx)("li",{children:"It computes all paths from a single source, which may be inefficient if only a single path is needed"})]}),(0,Qn.jsx)("h3",{children:"Algorithm Variations"}),(0,Qn.jsx)("p",{children:"Several variations and optimizations of Dijkstra's algorithm exist:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Bidirectional Dijkstra - searches forward from the source and backward from the target to speed up finding a specific path"}),(0,Qn.jsx)("li",{children:"A* search algorithm - an extension that uses heuristics to guide the search"}),(0,Qn.jsx)("li",{children:"Delta-stepping - a parallel implementation for better performance on multi-core processors"})]})]}),"code"===C&&(0,Qn.jsx)(Qh,{title:"Dijkstra's Algorithm Implementation (Java)",code:'\nimport java.util.*;\n\npublic class DijkstrasAlgorithm {\n    // A utility class to represent a vertex with its distance value\n    static class Node implements Comparable<Node> {\n        int vertex;\n        int distance;\n\n        Node(int vertex, int distance) {\n            this.vertex = vertex;\n            this.distance = distance;\n        }\n\n        @Override\n        public int compareTo(Node other) {\n            return Integer.compare(this.distance, other.distance);\n        }\n    }\n\n    // Main implementation of Dijkstra\'s algorithm\n    public static int[] dijkstra(int[][] graph, int source) {\n        int V = graph.length;\n        \n        // Distance array to store shortest distances from source\n        int[] distance = new int[V];\n        \n        // Boolean array to track processed vertices\n        boolean[] processed = new boolean[V];\n        \n        // Initialize distances to max value and processed to false\n        for (int i = 0; i < V; i++) {\n            distance[i] = Integer.MAX_VALUE;\n            processed[i] = false;\n        }\n        \n        // Distance of source vertex from itself is 0\n        distance[source] = 0;\n        \n        // Priority queue to get the minimum distance vertex\n        PriorityQueue<Node> pq = new PriorityQueue<>();\n        pq.add(new Node(source, 0));\n        \n        // Process all vertices\n        while (!pq.isEmpty()) {\n            // Extract the minimum distance vertex\n            Node current = pq.poll();\n            int u = current.vertex;\n            \n            // Skip if already processed\n            if (processed[u]) continue;\n            \n            // Mark as processed\n            processed[u] = true;\n            \n            // Update distances of adjacent vertices\n            for (int v = 0; v < V; v++) {\n                // Process only if there\'s an edge\n                if (graph[u][v] != 0 && !processed[v]) {\n                    // Update distance if there\'s a shorter path\n                    int newDistance = distance[u] + graph[u][v];\n                    if (newDistance < distance[v]) {\n                        distance[v] = newDistance;\n                        pq.add(new Node(v, distance[v]));\n                    }\n                }\n            }\n        }\n        \n        return distance;\n    }\n    \n    // Driver code to test the algorithm\n    public static void main(String[] args) {\n        int V = 6;\n        int[][] graph = new int[V][V];\n        \n        // Example graph represented as adjacency matrix\n        // 0 means no edge, positive number is edge weight\n        graph[0][1] = 4;\n        graph[0][2] = 2;\n        graph[1][2] = 5;\n        graph[1][3] = 10;\n        graph[2][3] = 3;\n        graph[2][4] = 2;\n        graph[3][5] = 7;\n        graph[4][3] = 4;\n        graph[4][5] = 6;\n        \n        int source = 0;\n        int[] distances = dijkstra(graph, source);\n        \n        System.out.println("Shortest distances from source vertex " + source + ":");\n        for (int i = 0; i < V; i++) {\n            System.out.println("Vertex " + i + ": " + distances[i]);\n        }\n    }\n}\n'})]})]})},dS=Gn.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`,cS=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,uS=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`,hS=Gn.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,pS=Gn.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1rem auto;
  }
`,mS=Gn.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
`,fS=Gn.button`
  padding: 0.5rem 1rem;
  background: ${e=>e.active?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"#e0e0e0"};
  }
`,gS=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,vS=Gn.button`
  padding: 0.5rem 1.5rem;
  border-radius: var(--border-radius);
  background: var(--primary);
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`,xS=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,yS=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,bS=Gn.input`
  width: 100px;
`,wS=Gn.div`
  margin-right: 1rem;
`,jS=Gn.div`
  position: relative;
  width: 100%;
  height: 400px;
  background: #f8f9fa;
  border-radius: 8px;
  margin: 1rem 0;
  border: 1px solid #eaeaea;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 350px;
  }
`,SS=Gn(Zu.div)`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  font-weight: bold;
  background: ${e=>e.isStart?"#4CAF50":e.isNegativeCycle?"#D32F2F":e.isVisited?"#2196F3":e.isCurrent?"#FFC107":"var(--primary-light)"};
  color: white;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  z-index: 2;
  
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 0.8rem;
  }
`,kS=Gn.div`
  position: absolute;
  height: 2px;
  background: ${e=>e.isNegativeCycle?"#D32F2F":e.isPath?"#4CAF50":e.isVisited?"#2196F3":"#ccc"};
  transform-origin: left center;
  z-index: 1;
  
  &:after {
    content: '${e=>e.weight}';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    padding: 2px 5px;
    border-radius: 3px;
    font-size: 0.8rem;
    color: ${e=>e.isNegative?"#D32F2F":"var(--text-secondary)"};
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    font-weight: ${e=>e.isNegative?"bold":"normal"};
  }
`,CS=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: ${e=>e.error?"#FFEBEE":"#f5f9ff"};
  color: ${e=>e.error?"#D32F2F":"inherit"};
  border-radius: var(--border-radius);
  text-align: center;
`,TS=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f0f0f0;
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  line-height: 1.5;
`,ES=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
  justify-content: center;
`,$S=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,PS=Gn.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${e=>e.color};
`,AS=Gn.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,IS=Gn.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,zS=Gn.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,MS=Gn.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,FS=Gn.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,RS=Gn.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: var(--border-radius);
  
  h3 {
    color: var(--primary);
    margin-bottom: 1rem;
  }
  
  h4 {
    color: var(--primary);
    margin: 1.5rem 0 0.5rem;
  }
  
  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  
  ul, ol {
    padding-left: 2rem;
    margin-bottom: 1rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
`,OS=Gn.div`
  counter-reset: step;
  li {
    position: relative;
    margin-bottom: 1rem;
    padding-left: 2.5rem;
    counter-increment: step;
    
    &:before {
      content: counter(step);
      position: absolute;
      left: 0;
      top: 0;
      background: var(--primary);
      color: white;
      width: 1.8rem;
      height: 1.8rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
  }
`,NS=()=>{const[t,r]=(0,e.useState)([]),[n,i]=(0,e.useState)([]),[a,o]=(0,e.useState)(5),[s,l]=(0,e.useState)(700),[d,c]=(0,e.useState)(0),[u,h]=(0,e.useState)(!1),[p,m]=(0,e.useState)([]),[f,g]=(0,e.useState)(null),[v,x]=(0,e.useState)(null),[y,b]=(0,e.useState)([]),[w,j]=(0,e.useState)([]),[S,k]=(0,e.useState)([]),[C,T]=(0,e.useState)([]),[E,$]=(0,e.useState)(null),[P,A]=(0,e.useState)(!1),[I,z]=(0,e.useState)("visualization"),[M,F]=(0,e.useState)(!1),[R,O]=(0,e.useState)(null),[N,L]=(0,e.useState)(0),D=(0,e.useRef)(null);(0,e.useEffect)((()=>{_(!1)}),[a]);const V=e=>new Promise((t=>setTimeout(t,e))),_=function(){var e,t;let n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const o=(null===(e=D.current)||void 0===e?void 0:e.clientWidth)||800,s=(null===(t=D.current)||void 0===t?void 0:t.clientHeight)||400,l=[];for(let r=0;r<a;r++)l.push({id:r,x:Math.random()*(o-100)+50,y:Math.random()*(s-100)+50});const d=[];for(let r=0;r<a-1;r++)d.push({from:r,to:r+1,weight:Math.floor(9*Math.random())+1});const u=2*a;for(let r=0;r<u;r++){const e=Math.floor(Math.random()*a),t=Math.floor(Math.random()*a);if(e!==t&&!d.some((r=>r.from===e&&r.to===t))){const r=n&&Math.random()<.25?-Math.floor(5*Math.random())-1:Math.floor(9*Math.random())+1;d.push({from:e,to:t,weight:r})}}r(l),i(d),c(0),m([]),x(null),g(null),b([]),j([]),k([]),T([]),$(null),A(!1),L(0)},B=()=>{F(!1),O(null)},U=e=>{const r=t.find((t=>t.id===e.from)),n=t.find((t=>t.id===e.to));if(!r||!n)return{};const i=n.x-r.x,a=n.y-r.y,o=Math.sqrt(i*i+a*a),s=Math.atan2(a,i)*(180/Math.PI);return{left:`${r.x+20}px`,top:`${r.y+20}px`,width:o-40+"px",transform:`rotate(${s}deg)`}},H=e=>{for(let t=0;t<S.length-1;t++)if(S[t]===e.from&&S[t+1]===e.to)return!0;return!1},W=e=>{for(let t=0;t<C.length-1;t++)if(C[t]===e.from&&C[t+1]===e.to)return!0;return!1},q=e=>y[e]||0===y[e]?y[e]===1/0?"\u221e":y[e]:"";return(0,Qn.jsxs)(dS,{children:[(0,Qn.jsxs)(cS,{children:[(0,Qn.jsx)(uS,{children:"Bellman-Ford Algorithm"}),(0,Qn.jsx)(hS,{children:"The Bellman-Ford algorithm finds shortest paths from a source vertex to all other vertices in a weighted graph, and can handle graphs with negative weight edges, unlike Dijkstra's algorithm."})]}),(0,Qn.jsxs)(pS,{children:[(0,Qn.jsxs)(mS,{children:[(0,Qn.jsx)(fS,{active:"visualization"===I,onClick:()=>z("visualization"),children:"Visualization"}),(0,Qn.jsx)(fS,{active:"theory"===I,onClick:()=>z("theory"),children:"Theory"}),(0,Qn.jsx)(fS,{active:"code"===I,onClick:()=>z("code"),children:"Code"})]}),"visualization"===I&&(0,Qn.jsxs)(Qn.Fragment,{children:[(0,Qn.jsxs)(gS,{children:[(0,Qn.jsxs)(yS,{children:[(0,Qn.jsxs)(wS,{children:["Nodes: ",a]}),(0,Qn.jsx)(bS,{type:"range",min:"4",max:"10",value:a,onChange:e=>o(parseInt(e.target.value)),disabled:u})]}),(0,Qn.jsxs)(xS,{children:[(0,Qn.jsx)("span",{children:"Speed:"}),(0,Qn.jsx)(bS,{type:"range",min:"200",max:"1500",step:"100",value:s,onChange:e=>l(parseInt(e.target.value)),disabled:u}),(0,Qn.jsxs)("span",{children:[s,"ms"]})]}),(0,Qn.jsx)(vS,{onClick:()=>_(!1),disabled:u,children:"Normal Graph"}),(0,Qn.jsx)(vS,{onClick:()=>_(!0),disabled:u,children:"With Negative Edges"}),(0,Qn.jsx)(vS,{onClick:async()=>{if(u)return;h(!0),m([]),x(d),g(null),k([]),T([]),$("Running Bellman-Ford algorithm..."),A(!1),L(0);const e=Array(a).fill(1/0),t=Array(a).fill(null);e[d]=0,b([...e]),j([...t]),await V(s);for(let o=0;o<a-1;o++){L(o+1),$(`Iteration ${o+1} of ${a-1}: Relaxing all edges...`),await V(s/2);for(let r=0;r<n.length;r++){const i=n[r],a=i.from,o=i.to,l=i.weight;g({from:a,to:o}),x(a),await V(s),e[a]!==1/0&&e[a]+l<e[o]&&(e[o]=e[a]+l,t[o]=a,b([...e]),j([...t]),m((e=>[...e,o])),x(o),await V(s)),g(null)}}let r=!1,i=null;$("Checking for negative weight cycles..."),await V(s);for(let a=0;a<n.length;a++){const t=n[a],o=t.from,l=t.to,d=t.weight;if(g({from:o,to:l}),x(o),await V(s),e[o]!==1/0&&e[o]+d<e[l]){r=!0,i=t;break}g(null)}if(r){$("Negative weight cycle detected! The algorithm cannot compute shortest paths in this graph."),A(!0);const e=[];let r=i.to;const n=new Set;for(;!n.has(r)&&(e.push(r),n.add(r),r=t[r],null!==r););if(null!==r){e.push(r);const t=e.lastIndexOf(r),n=e.slice(t);T(n)}}else{$("Algorithm completed! No negative weight cycles detected.");let r=-1/0,n=null;for(let t=0;t<a;t++)e[t]!==1/0&&e[t]>r&&(r=e[t],n=t);if(null!==n){const e=[];let r=n;for(;null!==r;)e.unshift(r),r=t[r];for(let t=0;t<e.length;t++)await V(s/2),k(e.slice(0,t+1))}}h(!1),x(null),g(null)},disabled:u,children:u?"Running...":"Run Bellman-Ford"}),(0,Qn.jsx)(vS,{onClick:()=>{m([]),x(null),g(null),k([]),T([]),$(null),A(!1),L(0)},disabled:u,children:"Reset"})]}),(0,Qn.jsx)(TS,{children:"Click on a node to set it as the source node. The Bellman-Ford algorithm finds shortest paths from the source to all other nodes and can detect negative weight cycles."}),(0,Qn.jsxs)(jS,{ref:D,onMouseMove:e=>{if(!M||u)return;const t=D.current.getBoundingClientRect(),n=e.clientX-t.left,i=e.clientY-t.top;r((e=>e.map((e=>e.id===R?{...e,x:n,y:i}:e))))},onMouseUp:B,onMouseLeave:B,children:[n.map(((e,t)=>(0,Qn.jsx)(kS,{style:U(e),weight:e.weight,isPath:H(e),isNegativeCycle:W(e),isNegative:e.weight<0,isVisited:f&&f.from===e.from&&f.to===e.to},`${e.from}-${e.to}`))),t.map((e=>{return(0,Qn.jsxs)(SS,{style:{left:`${e.x}px`,top:`${e.y}px`},isStart:e.id===d,isNegativeCycle:(t=e.id,C.includes(t)),isVisited:p.includes(e.id)&&e.id!==d,isCurrent:e.id===v,onMouseDown:t=>((e,t)=>{e.preventDefault(),u||(F(!0),O(t))})(t,e.id),onClick:()=>(e=>{u||c(e)})(e.id),initial:{scale:0},animate:{scale:1},transition:{duration:.3},children:[e.id,(0,Qn.jsx)("div",{style:{fontSize:"0.7rem",position:"absolute",top:"-20px",backgroundColor:"white",padding:"2px 5px",borderRadius:"3px",boxShadow:"0 1px 3px rgba(0,0,0,0.1)"},children:q(e.id)})]},e.id);var t}))]}),E&&(0,Qn.jsx)(CS,{error:P,children:E}),(0,Qn.jsxs)(ES,{children:[(0,Qn.jsxs)($S,{children:[(0,Qn.jsx)(PS,{color:"#4CAF50"}),(0,Qn.jsx)("span",{children:"Source Node"})]}),(0,Qn.jsxs)($S,{children:[(0,Qn.jsx)(PS,{color:"#2196F3"}),(0,Qn.jsx)("span",{children:"Visited Node"})]}),(0,Qn.jsxs)($S,{children:[(0,Qn.jsx)(PS,{color:"#FFC107"}),(0,Qn.jsx)("span",{children:"Current Node"})]}),(0,Qn.jsxs)($S,{children:[(0,Qn.jsx)(PS,{color:"#D32F2F"}),(0,Qn.jsx)("span",{children:"Negative Cycle"})]}),(0,Qn.jsxs)($S,{children:[(0,Qn.jsx)(PS,{color:"#4CAF50",style:{height:"2px",width:"20px",borderRadius:"0"}}),(0,Qn.jsx)("span",{children:"Shortest Path"})]})]}),(0,Qn.jsxs)(AS,{children:[(0,Qn.jsx)(IS,{children:"Algorithm Complexity"}),(0,Qn.jsx)("p",{children:"Bellman-Ford is used to find the shortest paths from a source vertex to all other vertices in a weighted graph."}),(0,Qn.jsxs)(zS,{children:[(0,Qn.jsx)("thead",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(MS,{children:"Time Complexity"}),(0,Qn.jsx)(MS,{children:"Space Complexity"})]})}),(0,Qn.jsx)("tbody",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(FS,{children:"O(V \xd7 E) where V is the number of vertices and E is the number of edges"}),(0,Qn.jsx)(FS,{children:"O(V)"})]})})]})]})]}),"theory"===I&&(0,Qn.jsxs)(RS,{children:[(0,Qn.jsx)("h3",{children:"Bellman-Ford Algorithm"}),(0,Qn.jsx)("p",{children:"The Bellman-Ford algorithm, named after Richard Bellman and Lester Ford, calculates the shortest paths from a single source vertex to all other vertices in a weighted directed graph. Unlike Dijkstra's algorithm, it can handle graphs with negative weight edges, making it more versatile but less efficient."}),(0,Qn.jsx)("h4",{children:"Key Features"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Handles negative weights:"})," One of the primary advantages of Bellman-Ford over Dijkstra's algorithm"]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Detects negative cycles:"})," Can identify if the graph contains a negative weight cycle, which would make shortest path calculations impossible"]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Simple implementation:"})," Has a straightforward approach with clear steps"]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Works with all graph types:"})," Functions correctly on directed, undirected, sparse, and dense graphs"]})]}),(0,Qn.jsx)("h4",{children:"Algorithm Steps"}),(0,Qn.jsxs)(OS,{children:[(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Initialization:"})," Set the distance to the source vertex to 0 and all other vertices to infinity. Set predecessors of all vertices to null or undefined."]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Edge Relaxation:"})," Perform V-1 iterations (where V is the number of vertices) in which each edge is considered, and distances are updated if a shorter path is found. For each edge (u, v) with weight w, if distance[u] + w is less than distance[v], update distance[v] to distance[u] + w and set predecessor[v] to u."]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Negative Cycle Detection:"})," Perform one more iteration of edge relaxation. If any distance can be improved, then there's a negative weight cycle in the graph, and the shortest path isn't well-defined."]})]}),(0,Qn.jsx)("h4",{children:"Applications"}),(0,Qn.jsx)("p",{children:"Bellman-Ford algorithm is used in various applications, including:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Network routing protocols:"})," Used in some distance-vector routing protocols like RIP (Routing Information Protocol)"]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Currency exchange:"})," Determining if arbitrage opportunities exist in currency exchange markets"]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Traffic management:"})," Calculating shortest paths in transportation networks with varying conditions"]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Circuit design:"})," Identifying timing constraints and critical paths"]})]}),(0,Qn.jsx)("h4",{children:"Advantages Over Dijkstra's Algorithm"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Can handle graphs with negative weight edges"}),(0,Qn.jsx)("li",{children:"Can detect negative weight cycles"}),(0,Qn.jsx)("li",{children:"Has simpler implementation in some cases"}),(0,Qn.jsx)("li",{children:"Doesn't require a priority queue"})]}),(0,Qn.jsx)("h4",{children:"Limitations"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Slower time complexity: O(V \xd7 E) compared to Dijkstra's O(E + V log V) with a binary heap"}),(0,Qn.jsx)("li",{children:"Cannot find shortest paths if there's a negative weight cycle"}),(0,Qn.jsx)("li",{children:"Less efficient for sparse graphs"})]}),(0,Qn.jsx)("h4",{children:"The Negative Cycle Problem"}),(0,Qn.jsx)("p",{children:'A negative cycle is a cycle in the graph whose total edge weight sum is negative. When such a cycle exists, you can keep traversing it to continually reduce the path length, meaning there\'s no true "shortest" path.'}),(0,Qn.jsx)("p",{children:"Bellman-Ford can detect negative cycles by performing an extra iteration of edge relaxation. If any distances improve during this extra iteration, a negative cycle exists."})]}),"code"===I&&(0,Qn.jsx)(Qh,{title:"Bellman-Ford Algorithm Implementation (Java)",code:'\nimport java.util.*;\n\npublic class BellmanFord {\n    // Edge class to represent graph edges\n    static class Edge {\n        int source;\n        int destination;\n        int weight;\n        \n        Edge(int source, int destination, int weight) {\n            this.source = source;\n            this.destination = destination;\n            this.weight = weight;\n        }\n    }\n    \n    // Main Bellman-Ford implementation\n    static boolean bellmanFord(int vertices, List<Edge> edges, int source, int[] distances, int[] predecessors) {\n        // Step 1: Initialize distances and predecessors\n        Arrays.fill(distances, Integer.MAX_VALUE);\n        Arrays.fill(predecessors, -1);\n        distances[source] = 0;\n        \n        // Step 2: Relax all edges |V| - 1 times\n        for (int i = 0; i < vertices - 1; i++) {\n            for (Edge edge : edges) {\n                int u = edge.source;\n                int v = edge.destination;\n                int weight = edge.weight;\n                \n                // If we can improve the distance to v through u\n                if (distances[u] != Integer.MAX_VALUE && distances[u] + weight < distances[v]) {\n                    distances[v] = distances[u] + weight;\n                    predecessors[v] = u;\n                }\n            }\n        }\n        \n        // Step 3: Check for negative weight cycles\n        for (Edge edge : edges) {\n            int u = edge.source;\n            int v = edge.destination;\n            int weight = edge.weight;\n            \n            // If we can still improve, then there is a negative weight cycle\n            if (distances[u] != Integer.MAX_VALUE && distances[u] + weight < distances[v]) {\n                return false; // Negative cycle detected\n            }\n        }\n        \n        return true; // No negative cycle\n    }\n    \n    // Utility method to construct path from source to destination\n    static List<Integer> constructPath(int[] predecessors, int destination) {\n        List<Integer> path = new ArrayList<>();\n        while (destination != -1) {\n            path.add(0, destination);\n            destination = predecessors[destination];\n        }\n        return path;\n    }\n    \n    // Driver code to test the algorithm\n    public static void main(String[] args) {\n        int vertices = 5;\n        List<Edge> edges = new ArrayList<>();\n        \n        // Add edges\n        edges.add(new Edge(0, 1, -1));\n        edges.add(new Edge(0, 2, 4));\n        edges.add(new Edge(1, 2, 3));\n        edges.add(new Edge(1, 3, 2));\n        edges.add(new Edge(1, 4, 2));\n        edges.add(new Edge(3, 2, 5));\n        edges.add(new Edge(3, 1, 1));\n        edges.add(new Edge(4, 3, -3));\n        \n        int source = 0;\n        int[] distances = new int[vertices];\n        int[] predecessors = new int[vertices];\n        \n        boolean noNegativeCycle = bellmanFord(vertices, edges, source, distances, predecessors);\n        \n        if (noNegativeCycle) {\n            System.out.println("Shortest distances from source vertex " + source + ":");\n            for (int i = 0; i < vertices; i++) {\n                System.out.println("Vertex " + i + ": " + distances[i]);\n                \n                List<Integer> path = constructPath(predecessors, i);\n                System.out.print("Path: ");\n                for (int vertex : path) {\n                    System.out.print(vertex + " ");\n                }\n                System.out.println();\n            }\n        } else {\n            System.out.println("Graph contains negative weight cycle");\n        }\n    }\n}\n'})]})]})},LS=Gn.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`,DS=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,VS=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`,_S=Gn.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,BS=Gn.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1rem auto;
  }
`,US=Gn.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
`,HS=Gn.button`
  padding: 0.5rem 1rem;
  background: ${e=>e.active?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"#e0e0e0"};
  }
`,WS=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,qS=Gn.button`
  padding: 0.5rem 1.5rem;
  border-radius: var(--border-radius);
  background: var(--primary);
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`,KS=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,GS=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,YS=Gn.input`
  width: 100px;
`,XS=Gn.div`
  margin-right: 1rem;
`,QS=Gn.div`
  position: relative;
  width: 100%;
  height: 300px;
  background: #f8f9fa;
  border-radius: 8px;
  margin: 1rem 0;
  border: 1px solid #eaeaea;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 250px;
  }
`,JS=Gn.div`
  width: 100%;
  overflow-x: auto;
  margin: 1rem 0;
`,ZS=Gn.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid #eaeaea;
`,ek=Gn.h3`
  color: var(--primary);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`,tk=Gn.p`
  margin-bottom: 1rem;
  line-height: 1.5;
`,rk=(Gn.span`
  background-color: ${e=>e.color||"#bbdefb"};
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
  font-weight: ${e=>e.bold?"bold":"normal"};
`,Gn(Zu.div)`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  font-weight: bold;
  background: ${e=>e.highlighted?"#FFC107":"var(--primary-light)"};
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  z-index: 2;
  
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 0.8rem;
  }
`),nk=Gn.div`
  position: absolute;
  height: 2px;
  background: ${e=>e.isCurrentPath?"#FFC107":e.isUpdated?"#4CAF50":"#ccc"};
  transform-origin: left center;
  z-index: 1;
  
  &:after {
    content: '${e=>e.weight===1/0?"\u221e":e.weight}';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    padding: 2px 5px;
    border-radius: 3px;
    font-size: 0.8rem;
    color: ${e=>e.isUpdated?"#4CAF50":"var(--text-secondary)"};
    font-weight: ${e=>e.isUpdated?"bold":"normal"};
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }
`,ik=Gn.table`
  border-collapse: collapse;
  margin: 1rem auto;
  font-family: monospace;
  
  th, td {
    border: 1px solid #ddd;
    padding: 0.5rem;
    text-align: center;
    min-width: 40px;
  }
  
  th {
    background-color: var(--primary);
    color: white;
  }
  
  td.highlighted {
    background-color: #FFC107;
    font-weight: bold;
  }
  
  td.updated {
    background-color: #E8F5E9;
    color: #4CAF50;
    font-weight: bold;
  }
  
  td.infinity {
    color: #999;
  }
`,ak=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,ok=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f0f0f0;
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  line-height: 1.5;
`,sk=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
  justify-content: center;
`,lk=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,dk=Gn.div`
  width: 15px;
  height: 15px;
  border-radius: ${e=>e.square?"0":"50%"};
  background: ${e=>e.color};
`,ck=Gn.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,uk=Gn.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,hk=Gn.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,pk=Gn.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,mk=Gn.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,fk=Gn.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: var(--border-radius);
  
  h3 {
    color: var(--primary);
    margin-bottom: 1rem;
  }
  
  h4 {
    color: var(--primary);
    margin: 1.5rem 0 0.5rem;
  }
  
  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  
  ul, ol {
    padding-left: 2rem;
    margin-bottom: 1rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
`,gk=Gn.div`
  counter-reset: step;
  
  li {
    position: relative;
    margin-bottom: 1.5rem;
    padding-left: 2.5rem;
    counter-increment: step;
    
    &:before {
      content: counter(step);
      position: absolute;
      left: 0;
      top: 0;
      background: var(--primary);
      color: white;
      width: 1.8rem;
      height: 1.8rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
  }
`,vk=Gn.pre`
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 5px;
  overflow-x: auto;
  font-family: monospace;
  margin: 1rem 0;
`,xk=()=>{var t,r,n,i,a,o,s,l,d,c;const[u,h]=(0,e.useState)(4),[p,m]=(0,e.useState)(1e3),[f,g]=(0,e.useState)(!1),[v,x]=(0,e.useState)([]),[y,b]=(0,e.useState)(null),[w,j]=(0,e.useState)(null),[S,k]=(0,e.useState)(null),[C,T]=(0,e.useState)(null),[E,$]=(0,e.useState)(null),[P,A]=(0,e.useState)(0),[I,z]=(0,e.useState)("visualization"),[M,F]=(0,e.useState)([]),[R,O]=(0,e.useState)([]),[N,L]=(0,e.useState)(null),D=[{title:"Initialization",description:"The algorithm begins by initializing the distance matrix. Each cell [i][j] represents the weight of the direct edge from vertex i to vertex j. If there's no direct edge, the value is set to infinity."},{title:"Select Intermediate Vertex",description:`The outer loop selects each vertex as a potential intermediate vertex (k=${y}). The algorithm will check if going through this vertex results in shorter paths.`},{title:"Consider All Source-Destination Pairs",description:`For each pair of source (i=${w}) and destination (j=${S}) vertices, check if the path i\u2192k\u2192j is shorter than the current best-known path i\u2192j.`},{title:"Update Shorter Path",description:`If the path through k is shorter, update the distance[i][j] with the new shorter distance. Current check: ${(null===(t=v[w])||void 0===t?void 0:t[S])===1/0?"\u221e":null===(r=v[w])||void 0===r?void 0:r[S]} > ${(null===(n=v[w])||void 0===n?void 0:n[y])===1/0?"\u221e":null===(i=v[w])||void 0===i?void 0:i[y]} + ${(null===(a=v[y])||void 0===a?void 0:a[S])===1/0?"\u221e":null===(o=v[y])||void 0===o?void 0:o[S]}${C?" = "+((null===(s=v[w])||void 0===s?void 0:s[y])+(null===(l=v[y])||void 0===l?void 0:l[S])):""}`},{title:"Complete Algorithm",description:"The algorithm has finished processing all possible intermediate vertices. The final matrix shows the shortest path distances between every pair of vertices."}];(0,e.useEffect)((()=>{_()}),[u]);const V=e=>new Promise((t=>setTimeout(t,e))),_=()=>{const e=[];for(let s=0;s<u;s++){const t=2*s*Math.PI/u;e.push({id:s,x:150+100*Math.cos(t),y:150+100*Math.sin(t)})}const t=Array(u).fill().map((()=>Array(u).fill(1/0))),r=[];for(let s=0;s<u;s++)t[s][s]=0;const n=Math.floor(u*(u-1)*.3),i=Math.floor(u*(u-1)*.6),a=Math.floor(Math.random()*(i-n+1))+n;let o=0;for(;o<a;){const e=Math.floor(Math.random()*u),n=Math.floor(Math.random()*u);if(e!==n&&t[e][n]===1/0){const i=Math.floor(9*Math.random())+1;t[e][n]=i,r.push({from:e,to:n,weight:i}),o++}}F(e),O(r),x(t),b(null),j(null),k(null),T(null),$(null),A(0),L(null)},B=e=>{const t=M.find((t=>t.id===e.from)),r=M.find((t=>t.id===e.to));if(!t||!r)return{};const n=r.x-t.x,i=r.y-t.y,a=Math.sqrt(n*n+i*i),o=Math.atan2(i,n)*(180/Math.PI);return{left:`${t.x+20}px`,top:`${t.y+20}px`,width:a-40+"px",transform:`rotate(${o}deg)`}},U=e=>{if(!N)return!1;const{i:t,j:r,k:n}=N;return e.from===t&&e.to===n||e.from===n&&e.to===r},H=e=>!!C&&(e.from===C.i&&e.to===C.j);return(0,Qn.jsxs)(LS,{children:[(0,Qn.jsxs)(DS,{children:[(0,Qn.jsx)(VS,{children:"Floyd-Warshall Algorithm"}),(0,Qn.jsx)(_S,{children:"The Floyd-Warshall algorithm finds the shortest paths between all pairs of vertices in a weighted graph, handling positive and negative edge weights (as long as there are no negative cycles)."})]}),(0,Qn.jsxs)(BS,{children:[(0,Qn.jsxs)(US,{children:[(0,Qn.jsx)(HS,{active:"visualization"===I,onClick:()=>z("visualization"),children:"Visualization"}),(0,Qn.jsx)(HS,{active:"theory"===I,onClick:()=>z("theory"),children:"Theory"}),(0,Qn.jsx)(HS,{active:"code"===I,onClick:()=>z("code"),children:"Code"})]}),"visualization"===I&&(0,Qn.jsxs)(Qn.Fragment,{children:[(0,Qn.jsxs)(WS,{children:[(0,Qn.jsxs)(GS,{children:[(0,Qn.jsxs)(XS,{children:["Vertices: ",u]}),(0,Qn.jsx)(YS,{type:"range",min:"3",max:"6",value:u,onChange:e=>h(parseInt(e.target.value)),disabled:f})]}),(0,Qn.jsxs)(KS,{children:[(0,Qn.jsx)("span",{children:"Speed:"}),(0,Qn.jsx)(YS,{type:"range",min:"200",max:"2000",step:"200",value:p,onChange:e=>m(parseInt(e.target.value)),disabled:f}),(0,Qn.jsxs)("span",{children:[p,"ms"]})]}),(0,Qn.jsx)(qS,{onClick:_,disabled:f,children:"New Graph"}),(0,Qn.jsx)(qS,{onClick:async()=>{if(f)return;g(!0),$("Running Floyd-Warshall algorithm..."),A(1);const e=JSON.parse(JSON.stringify(v));await V(p);for(let t=0;t<u;t++){b(t),$(`Considering vertex ${t} as an intermediate vertex...`),A(2),await V(p);for(let r=0;r<u;r++)if(r!==t)for(let n=0;n<u;n++)if(n!==r&&n!==t&&(j(r),k(n),L({i:r,j:n,k:t}),A(3),await V(p),e[r][t]!==1/0&&e[t][n]!==1/0)){if(A(4),e[r][t]+e[t][n]<e[r][n]){const i=e[r][n];e[r][n]=e[r][t]+e[t][n],T({i:r,j:n,prev:i,new:e[r][n]}),$(`Updated distance from ${r} to ${n} using ${t} as intermediate: ${i===1/0?"\u221e":i} \u2192 ${e[r][n]}`),x([...e]),await V(p)}else $(`No improvement for path from ${r} to ${n} using ${t} as intermediate.`),await V(p/2);T(null)}}j(null),k(null),b(null),L(null),$("Algorithm completed! The matrix now shows shortest paths between all pairs of vertices."),A(5),g(!1)},disabled:f,children:f?"Running...":"Run Floyd-Warshall"}),(0,Qn.jsx)(qS,{onClick:()=>{_()},disabled:f,children:"Reset"})]}),(0,Qn.jsx)(ok,{children:"The Floyd-Warshall algorithm computes shortest paths between all pairs of vertices in a weighted graph. It can handle positive and negative edge weights but no negative cycles."}),(0,Qn.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:"1rem"},children:[(0,Qn.jsxs)("div",{style:{flex:"1 1 300px"},children:[(0,Qn.jsxs)(QS,{children:[R.map((e=>(0,Qn.jsx)(nk,{style:B(e),weight:e.weight,isCurrentPath:U(e),isUpdated:H(e)},`${e.from}-${e.to}`))),M.map((e=>(0,Qn.jsx)(rk,{style:{left:`${e.x}px`,top:`${e.y}px`},highlighted:e.id===y||e.id===w||e.id===S,initial:{scale:0},animate:{scale:1},transition:{duration:.3},children:e.id},e.id)))]}),(0,Qn.jsxs)(sk,{children:[(0,Qn.jsxs)(lk,{children:[(0,Qn.jsx)(dk,{color:"#FFC107"}),(0,Qn.jsx)("span",{children:"Current Vertex"})]}),(0,Qn.jsxs)(lk,{children:[(0,Qn.jsx)(dk,{color:"#FFC107",square:!0,style:{height:"2px",width:"20px",borderRadius:"0"}}),(0,Qn.jsx)("span",{children:"Path Being Considered"})]}),(0,Qn.jsxs)(lk,{children:[(0,Qn.jsx)(dk,{color:"#4CAF50",square:!0,style:{height:"2px",width:"20px",borderRadius:"0"}}),(0,Qn.jsx)("span",{children:"Updated Path"})]})]})]}),(0,Qn.jsxs)("div",{style:{flex:"1 1 300px"},children:[(0,Qn.jsxs)(ZS,{children:[(0,Qn.jsxs)(ek,{children:["Step ",P,": ",(null===(d=D[P-1])||void 0===d?void 0:d.title)||""]}),(0,Qn.jsx)(tk,{children:(null===(c=D[P-1])||void 0===c?void 0:c.description)||""})]}),(0,Qn.jsx)(JS,{children:(0,Qn.jsxs)(ik,{children:[(0,Qn.jsx)("thead",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)("th",{}),Array.from({length:u},((e,t)=>(0,Qn.jsx)("th",{children:t},t)))]})}),(0,Qn.jsx)("tbody",{children:v.map(((e,t)=>(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)("th",{children:t}),e.map(((e,r)=>(0,Qn.jsx)("td",{className:C&&C.i===t&&C.j===r?"updated":w===t&&S===r||w===t&&y===r||y===t&&S===r?"highlighted":e===1/0?"infinity":"",children:e===1/0?"\u221e":e},r)))]},t)))})]})})]})]}),E&&(0,Qn.jsx)(ak,{children:E}),(0,Qn.jsxs)(ck,{children:[(0,Qn.jsx)(uk,{children:"Algorithm Complexity"}),(0,Qn.jsx)("p",{children:"Floyd-Warshall is an efficient algorithm for finding shortest paths in weighted graphs."}),(0,Qn.jsxs)(hk,{children:[(0,Qn.jsx)("thead",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(pk,{children:"Time Complexity"}),(0,Qn.jsx)(pk,{children:"Space Complexity"})]})}),(0,Qn.jsx)("tbody",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(mk,{children:"O(V\xb3) where V is the number of vertices"}),(0,Qn.jsx)(mk,{children:"O(V\xb2)"})]})})]})]})]}),"theory"===I&&(0,Qn.jsxs)(fk,{children:[(0,Qn.jsx)("h3",{children:"Floyd-Warshall Algorithm"}),(0,Qn.jsxs)("p",{children:["The Floyd-Warshall algorithm is a dynamic programming approach that finds the shortest paths between all pairs of vertices in a weighted graph. Unlike Dijkstra's algorithm (single-source) or Bellman-Ford (single-source with negative weights), Floyd-Warshall computes shortest paths between ",(0,Qn.jsx)("em",{children:"every"})," pair of vertices."]}),(0,Qn.jsx)("h4",{children:"Key Features"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"All-pairs shortest paths:"})," Computes shortest distances between all pairs of vertices"]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Handles negative weights:"})," Can process graphs with negative weight edges (but no negative cycles)"]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Based on dynamic programming:"})," Uses a systematic approach to build solutions from simpler subproblems"]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Simple implementation:"})," Straightforward triple-nested loop structure"]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Works with all graph types:"})," Works on directed, undirected, sparse, and dense graphs"]})]}),(0,Qn.jsx)("h4",{children:"Core Concept"}),(0,Qn.jsx)("p",{children:"The fundamental insight of Floyd-Warshall is to use intermediate vertices to find shorter paths. For each pair of vertices (i,j), we check if going through another vertex k results in a shorter path than the current best path from i to j."}),(0,Qn.jsx)("p",{children:"The key recurrence relation is:"}),(0,Qn.jsx)(vk,{children:"distance[i][j] = min(distance[i][j], distance[i][k] + distance[k][j])"}),(0,Qn.jsx)("p",{children:'This formula states: "The shortest path from i to j is either the previously known shortest path from i to j, or the path from i to k plus the path from k to j (going through k as an intermediate point)."'}),(0,Qn.jsx)("h4",{children:"Algorithm Steps"}),(0,Qn.jsxs)(gk,{children:[(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Initialize the distance matrix:"})," For each pair of vertices (i,j), set distance[i][j] to the weight of the edge (i,j) if it exists, or infinity if there's no direct edge. Set distance[i][i] = 0 for all i (distance from a vertex to itself)."]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Consider all vertices as intermediates:"})," For each vertex k, consider it as an intermediate vertex for every pair (i,j)."]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Update distances with intermediate vertices:"})," For each (i,j) pair, check if the path i\u2192k\u2192j is shorter than the current best path i\u2192j. If so, update the distance[i][j]."]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Complete the algorithm:"})," After considering all vertices as intermediates, the distance matrix contains the shortest distances between all pairs of vertices."]})]}),(0,Qn.jsx)("h4",{children:"Applications"}),(0,Qn.jsx)("p",{children:"Floyd-Warshall algorithm is used in various applications including:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Network routing:"})," Finding optimal routes between all network nodes"]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Road systems:"})," Computing shortest paths between all locations"]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Transitive closure of directed graphs:"})," Determining if there's a path between any two vertices"]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Inversion of matrices:"})," Computing matrix inverses using Gauss-Jordan elimination"]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Computer networks:"})," Routing protocols and network planning"]})]}),(0,Qn.jsx)("h4",{children:"Advantages and Limitations"}),(0,Qn.jsx)("p",{children:(0,Qn.jsx)("strong",{children:"Advantages:"})}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Simple implementation with just a few lines of code"}),(0,Qn.jsx)("li",{children:"Handles negative weight edges"}),(0,Qn.jsx)("li",{children:"Computes all shortest paths in a single run"}),(0,Qn.jsx)("li",{children:"Works well for dense graphs"})]}),(0,Qn.jsx)("p",{children:(0,Qn.jsx)("strong",{children:"Limitations:"})}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"O(V\xb3) time complexity makes it slow for very large graphs"}),(0,Qn.jsx)("li",{children:"Cannot handle graphs with negative cycles"}),(0,Qn.jsx)("li",{children:"Less efficient than Dijkstra's algorithm for single-source problems"}),(0,Qn.jsx)("li",{children:"O(V\xb2) space complexity can be prohibitive for large graphs"})]}),(0,Qn.jsx)("h4",{children:"Detecting Negative Cycles"}),(0,Qn.jsx)("p",{children:"A useful property of the Floyd-Warshall algorithm is that it can be extended to detect negative cycles. After the algorithm completes, if any vertex has a negative distance to itself (distance[i][i] < 0), then the graph contains a negative cycle."})]}),"code"===I&&(0,Qn.jsx)(Qh,{title:"Floyd-Warshall Algorithm Implementation (Java)",code:'\npublic class FloydWarshall {\n    private static final int INF = Integer.MAX_VALUE;\n    \n    public static void floydWarshall(int[][] graph) {\n        int V = graph.length;\n        int[][] dist = new int[V][V];\n        \n        // Initialize the distance matrix\n        for (int i = 0; i < V; i++) {\n            for (int j = 0; j < V; j++) {\n                dist[i][j] = graph[i][j];\n            }\n        }\n        \n        // Update distances considering all vertices as intermediate\n        for (int k = 0; k < V; k++) {\n            // Pick all vertices as source one by one\n            for (int i = 0; i < V; i++) {\n                // Pick all vertices as destination one by one\n                for (int j = 0; j < V; j++) {\n                    // If vertex k is on the shortest path from i to j,\n                    // then update the value of dist[i][j]\n                    if (dist[i][k] != INF && dist[k][j] != INF && \n                        dist[i][k] + dist[k][j] < dist[i][j]) {\n                        dist[i][j] = dist[i][k] + dist[k][j];\n                    }\n                }\n            }\n        }\n        \n        // Print the shortest distance matrix\n        printSolution(dist);\n    }\n    \n    private static void printSolution(int[][] dist) {\n        int V = dist.length;\n        System.out.println("The following matrix shows the shortest distances between every pair of vertices:");\n        \n        for (int i = 0; i < V; i++) {\n            for (int j = 0; j < V; j++) {\n                if (dist[i][j] == INF) {\n                    System.out.print("INF ");\n                } else {\n                    System.out.print(dist[i][j] + "   ");\n                }\n            }\n            System.out.println();\n        }\n    }\n    \n    // Driver code\n    public static void main(String[] args) {\n        int V = 4;\n        int[][] graph = {\n            {0, 5, INF, 10},\n            {INF, 0, 3, INF},\n            {INF, INF, 0, 1},\n            {INF, INF, INF, 0}\n        };\n        \n        floydWarshall(graph);\n    }\n}\n'})]})]})},yk=Gn.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,bk=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,wk=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,jk=Gn.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,Sk=Gn.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,kk=Gn.div`
  width: 100%;
  height: 500px;
  margin: 2rem 0;
  border: 1px solid #eee;
  border-radius: var(--border-radius);
  overflow: hidden;
  position: relative;
`,Ck=Gn.div`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transform: translate(-50%, -50%);
  z-index: 2;
`,Tk=Gn.div`
  position: absolute;
  height: ${e=>e.thickness||3}px;
  background-color: ${e=>e.color||"#999"};
  transform-origin: left center;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ek=Gn.div`
  position: absolute;
  background-color: white;
  border-radius: 10px;
  padding: 2px 6px;
  font-size: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`,$k=Gn.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`,Pk=Gn.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: var(--border-radius);
  background: ${e=>e.primary?"var(--primary)":"var(--surface-2)"};
  color: ${e=>e.primary?"white":"var(--text-primary)"};
  cursor: pointer;
  font-weight: 500;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:not(:disabled):hover {
    background: ${e=>e.primary?"var(--primary-dark)":"var(--surface-3)"};
  }
`,Ak=Gn.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,Ik=Gn.input`
  width: 200px;
`,zk=Gn.div`
  padding: 1rem;
  margin: 1rem 0;
  background: var(--surface-2);
  border-radius: var(--border-radius);
  color: var(--text-primary);
`,Mk=Gn.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`,Fk=Gn.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: var(--border-radius);
  background: ${e=>e.active?"var(--primary)":"var(--surface-2)"};
  color: ${e=>e.active?"white":"var(--text-primary)"};
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    background: ${e=>e.active?"var(--primary-dark)":"var(--surface-3)"};
  }
`,Rk=Gn.div`
  margin-top: 2rem;
  padding: 1rem;
  background: var(--surface-2);
  border-radius: var(--border-radius);
`,Ok=Gn.h3`
  color: var(--text-primary);
  margin-bottom: 1rem;
`,Nk=Gn.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,Lk=Gn.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 2px solid var(--surface-3);
`,Dk=Gn.td`
  padding: 0.5rem;
  border-bottom: 1px solid var(--surface-3);
`,Vk=()=>{const[t,r]=(0,e.useState)([]),[n,i]=(0,e.useState)([]),[a,o]=(0,e.useState)(6),[s,l]=(0,e.useState)(1e3),[d,c]=(0,e.useState)(""),[u,h]=(0,e.useState)(!1),[p,m]=(0,e.useState)(0),[f,g]=(0,e.useState)([]),[v,x]=(0,e.useState)("visualization"),y=(0,e.useRef)(null);class b{constructor(e){this.parent=Array.from({length:e},((e,t)=>t)),this.rank=Array(e).fill(0)}find(e){return this.parent[e]!==e&&(this.parent[e]=this.find(this.parent[e])),this.parent[e]}union(e,t){const r=this.find(e),n=this.find(t);return r!==n&&(this.rank[r]<this.rank[n]?this.parent[r]=n:this.rank[r]>this.rank[n]?this.parent[n]=r:(this.parent[n]=r,this.rank[r]++),!0)}}const w=(0,e.useCallback)((()=>{if(!y.current)return;const e=(e=>{const t=[],r=.35*Math.min(y.current?y.current.offsetWidth:400,y.current?y.current.offsetHeight:300),n=y.current?y.current.offsetWidth/2:400,i=y.current?y.current.offsetHeight/2:300;for(let a=0;a<e;a++){const o=a/e*2*Math.PI;t.push({x:n+r*Math.cos(o),y:i+r*Math.sin(o)})}return t})(a),t=Array.from({length:a},((t,r)=>({id:r,label:`${r}`,x:e[r].x,y:e[r].y}))),n=[];for(let r=0;r<a;r++)for(let e=r+1;e<a;e++)if(Math.random()<.4){const t=Math.floor(20*Math.random())+1;n.push({source:r,target:e,weight:t,id:`${r}-${e}`})}r(t),i(n),g([]),m(0),c('Graph generated. Click "Start Algorithm" to find the Minimum Spanning Tree.')}),[a]);(0,e.useEffect)((()=>{y.current&&w()}),[w,y]);const j=e=>new Promise((t=>setTimeout(t,e)));return(0,Qn.jsxs)(yk,{children:[(0,Qn.jsxs)(bk,{children:[(0,Qn.jsx)(wk,{children:"Kruskal's Algorithm"}),(0,Qn.jsx)(jk,{children:"Kruskal's Algorithm is a minimum spanning tree algorithm that finds an edge of the least possible weight that connects any two trees in the forest. It is a greedy algorithm that builds the spanning tree by adding edges one by one into a growing spanning tree."})]}),(0,Qn.jsxs)(Sk,{children:[(0,Qn.jsxs)(Mk,{children:[(0,Qn.jsx)(Fk,{active:"visualization"===v,onClick:()=>x("visualization"),children:"Visualization"}),(0,Qn.jsx)(Fk,{active:"code"===v,onClick:()=>x("code"),children:"Code"})]}),"visualization"===v?(0,Qn.jsxs)(Qn.Fragment,{children:[(0,Qn.jsxs)($k,{children:[(0,Qn.jsxs)(Ak,{children:[(0,Qn.jsxs)("span",{children:["Nodes: ",a]}),(0,Qn.jsx)(Ik,{type:"range",min:"4",max:"10",value:a,onChange:e=>o(parseInt(e.target.value)),disabled:u})]}),(0,Qn.jsxs)(Ak,{children:[(0,Qn.jsxs)("span",{children:["Speed: ",s,"ms"]}),(0,Qn.jsx)(Ik,{type:"range",min:"200",max:"2000",step:"200",value:s,onChange:e=>l(parseInt(e.target.value)),disabled:u})]}),(0,Qn.jsx)(Pk,{onClick:w,disabled:u,children:"Generate New Graph"}),(0,Qn.jsx)(Pk,{primary:!0,onClick:async()=>{h(!0),g([]),m(0);const e=[...n].sort(((e,t)=>e.weight-t.weight)),t=new b(a),r=[];for(let n=0;n<e.length;n++){const i=e[n],a=i.source,o=i.target;c(`Considering edge ${a} - ${o} with weight ${i.weight}`),await j(s),t.union(a,o)?(r.push(i),g([...r]),c(`Added edge ${a} - ${o} to MST`),await j(s)):(c(`Skipped edge ${a} - ${o} to avoid cycle`),await j(s)),m(n+1)}c("Kruskal's Algorithm completed! The minimum spanning tree is highlighted in green."),h(!1)},disabled:u,children:u?"Running...":"Start Algorithm"})]}),(0,Qn.jsx)(zk,{children:d}),(0,Qn.jsxs)(kk,{ref:y,children:[t.map((e=>(0,Qn.jsx)(Ck,{style:{left:e.x,top:e.y},children:e.label},`node-${e.id}`))),n.map((r=>{const n=f.some((e=>e.id===r.id)),i=((e,r)=>{const n=t.find((t=>t.id===e)),i=t.find((e=>e.id===r));if(!n||!i)return{};const a=i.x-n.x,o=i.y-n.y,s=Math.sqrt(a*a+o*o),l=Math.atan2(o,a)*(180/Math.PI);return{left:`${n.x}px`,top:`${n.y}px`,width:`${s}px`,transform:`rotate(${l}deg)`}})(r.source,r.target);return(0,Qn.jsxs)(e.Fragment,{children:[(0,Qn.jsx)(Tk,{style:i,color:n?"#4caf50":"#999",thickness:n?5:3}),(0,Qn.jsx)(Ek,{style:{left:(t[r.source].x+t[r.target].x)/2+"px",top:(t[r.source].y+t[r.target].y)/2+"px",transform:"translate(-50%, -50%)"},children:r.weight})]},`edge-${r.id}`)}))]}),(0,Qn.jsxs)(Rk,{children:[(0,Qn.jsx)(Ok,{children:"Algorithm Complexity"}),(0,Qn.jsx)("p",{children:"Kruskal's Algorithm efficiently finds a minimum spanning tree in a connected weighted graph. It uses a Disjoint Set data structure for cycle detection."}),(0,Qn.jsxs)(Nk,{children:[(0,Qn.jsx)("thead",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(Lk,{children:"Time Complexity"}),(0,Qn.jsx)(Lk,{children:"Space Complexity"})]})}),(0,Qn.jsx)("tbody",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsxs)(Dk,{children:[(0,Qn.jsx)("div",{children:"O(E log E)"}),(0,Qn.jsx)("div",{children:"where E is the number of edges"})]}),(0,Qn.jsx)(Dk,{children:"O(V)"})]})})]})]})]}):(0,Qn.jsx)(Qh,{title:"Kruskal's Algorithm Implementation (Java)",code:"\npublic class KruskalsAlgorithm {\n    class Edge implements Comparable<Edge> {\n        int src, dest, weight;\n        \n        public Edge(int src, int dest, int weight) {\n            this.src = src;\n            this.dest = dest;\n            this.weight = weight;\n        }\n        \n        @Override\n        public int compareTo(Edge other) {\n            return this.weight - other.weight;\n        }\n    }\n    \n    class DisjointSet {\n        int[] parent, rank;\n        \n        public DisjointSet(int n) {\n            parent = new int[n];\n            rank = new int[n];\n            for (int i = 0; i < n; i++) {\n                parent[i] = i;\n            }\n        }\n        \n        int find(int x) {\n            if (parent[x] != x) {\n                parent[x] = find(parent[x]); // Path compression\n            }\n            return parent[x];\n        }\n        \n        boolean union(int x, int y) {\n            int rootX = find(x);\n            int rootY = find(y);\n            \n            if (rootX == rootY) return false;\n            \n            if (rank[rootX] < rank[rootY]) {\n                parent[rootX] = rootY;\n            } else if (rank[rootX] > rank[rootY]) {\n                parent[rootY] = rootX;\n            } else {\n                parent[rootY] = rootX;\n                rank[rootX]++;\n            }\n            return true;\n        }\n    }\n    \n    public List<Edge> findMST(int V, List<Edge> edges) {\n        // Sort edges by weight\n        Collections.sort(edges);\n        \n        DisjointSet ds = new DisjointSet(V);\n        List<Edge> mst = new ArrayList<>();\n        \n        for (Edge edge : edges) {\n            if (ds.union(edge.src, edge.dest)) {\n                mst.add(edge);\n            }\n            \n            if (mst.size() == V - 1) break;\n        }\n        \n        return mst;\n    }\n}"})]})]})},_k=Gn.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,Bk=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,Uk=Gn.p`
  color: var(--text-secondary);
  margin-bottom: 2rem;
`,Hk=Gn.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
`,Wk=Gn.button`
  background: var(--primary);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: var(--primary-light);
  }

  &:disabled {
    background: var(--text-secondary);
    cursor: not-allowed;
  }
`,qk=Gn.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,Kk=Gn.input`
  width: 150px;
`,Gk=Gn.div`
  width: 100%;
  height: 500px;
  background: white;
  border-radius: var(--border-radius);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  margin-bottom: 2rem;
`,Yk=Gn(Zu.div)`
  position: absolute;
  width: 40px;
  height: 40px;
  background: ${e=>e.isInMST?"var(--primary)":"var(--surface)"};
  border: 2px solid ${e=>e.isInMST?"var(--primary)":"var(--primary-light)"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.isInMST?"white":"var(--text-primary)"};
  font-weight: bold;
  cursor: pointer;
  z-index: 2;
`,Xk=Gn(Zu.div)`
  position: absolute;
  height: 2px;
  background: ${e=>e.isInMST?"var(--primary)":"var(--text-secondary)"};
  transform-origin: left center;
  z-index: 1;
`,Qk=Gn.div`
  position: absolute;
  background: white;
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 0.8rem;
  color: var(--text-secondary);
  transform: translate(-50%, -50%);
  z-index: 3;
`,Jk=Gn.div`
  background: var(--surface);
  padding: 1rem;
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
  color: var(--text-primary);
`,Zk=Gn.div`
  background: var(--surface);
  padding: 1rem;
  border-radius: var(--border-radius);
  margin-top: 2rem;
  overflow-x: auto;
`,eC=Gn.pre`
  margin: 0;
  color: var(--text-primary);
  font-family: 'Fira Code', monospace;
`,tC=()=>{const[t,r]=(0,e.useState)(6),[n,i]=(0,e.useState)([]),[a,o]=(0,e.useState)([]),[s,l]=(0,e.useState)([]),[d,c]=(0,e.useState)(!1),[u,h]=(0,e.useState)(1e3),[p,m]=(0,e.useState)(""),[f,g]=(0,e.useState)(0),v=()=>{const e=(e=>{const t=[];for(let r=0;r<e;r++){const n=2*Math.PI*r/e;t.push({id:r,x:300+200*Math.cos(n),y:250+200*Math.sin(n)})}return t})(t);i(e);const r=[];for(let n=0;n<t;n++)for(let e=n+1;e<t;e++)if(Math.random()<.7){const t=Math.floor(10*Math.random())+1;r.push({from:n,to:e,weight:t,isInMST:!1})}o(r),l([]),g(0),m("")};(0,e.useEffect)((()=>{v()}),[t]);const x=e=>new Promise((t=>setTimeout(t,e)));return(0,Qn.jsxs)(_k,{children:[(0,Qn.jsx)(Bk,{children:"Prim's Algorithm"}),(0,Qn.jsx)(Uk,{children:"Prim's Algorithm is a greedy algorithm that finds a minimum spanning tree for a weighted undirected graph. It starts from an arbitrary vertex and grows the tree by adding the smallest edge that connects the current tree to a new vertex."}),(0,Qn.jsxs)(Hk,{children:[(0,Qn.jsx)(Wk,{onClick:async()=>{c(!0),m("Starting Prim's Algorithm..."),await x(u);const e=new Set,r=[],n=new Array(t).fill(1/0),i=new Array(t).fill(-1);for(n[0]=0,m("Initializing distances and parent array..."),await x(u);e.size<t;){let o=1/0,s=-1;for(let r=0;r<t;r++)!e.has(r)&&n[r]<o&&(o=n[r],s=r);if(e.add(s),m(`Selected vertex ${s} with minimum distance ${o}`),await x(u),-1!==i[s]){const e=a.find((e=>e.from===i[s]&&e.to===s||e.from===s&&e.to===i[s]));e&&(e.isInMST=!0,r.push(e),l([...r]))}for(let r=0;r<t;r++)if(!e.has(r)){const e=a.find((e=>e.from===s&&e.to===r||e.from===r&&e.to===s));e&&e.weight<n[r]&&(n[r]=e.weight,i[r]=s,m(`Updated distance to vertex ${r} to ${e.weight}`),await x(u))}}m("Minimum Spanning Tree found!"),c(!1)},disabled:d,children:"Start Algorithm"}),(0,Qn.jsx)(Wk,{onClick:()=>{v(),c(!1)},disabled:d,children:"Reset Graph"}),(0,Qn.jsxs)(qk,{children:[(0,Qn.jsxs)("label",{children:["Nodes: ",t]}),(0,Qn.jsx)(Kk,{type:"range",min:"4",max:"8",value:t,onChange:e=>r(parseInt(e.target.value)),disabled:d})]}),(0,Qn.jsxs)(qk,{children:[(0,Qn.jsxs)("label",{children:["Speed: ",u,"ms"]}),(0,Qn.jsx)(Kk,{type:"range",min:"100",max:"2000",step:"100",value:u,onChange:e=>h(parseInt(e.target.value)),disabled:d})]})]}),p&&(0,Qn.jsx)(Jk,{children:p}),(0,Qn.jsxs)(Gk,{children:[a.map(((t,r)=>{const i=n.find((e=>e.id===t.from)),a=n.find((e=>e.id===t.to));if(!i||!a)return null;const o=a.x-i.x,s=a.y-i.y,l=Math.sqrt(o*o+s*s),d=180*Math.atan2(s,o)/Math.PI;return(0,Qn.jsxs)(e.Fragment,{children:[(0,Qn.jsx)(Xk,{initial:{width:0},animate:{width:l},style:{left:i.x,top:i.y,transform:`rotate(${d}deg)`,isInMST:t.isInMST}}),(0,Qn.jsx)(Qk,{style:{left:i.x+o/2,top:i.y+s/2},children:t.weight})]},r)})),n.map((e=>(0,Qn.jsx)(Yk,{initial:{scale:0},animate:{scale:1},isInMST:s.some((t=>t.from===e.id||t.to===e.id)),children:e.id},e.id)))]}),(0,Qn.jsx)(Zk,{children:(0,Qn.jsx)(eC,{children:'// Java implementation of Prim\'s Algorithm\npublic class PrimsAlgorithm {\n    public static void primMST(int[][] graph) {\n        int V = graph.length;\n        int[] parent = new int[V];\n        int[] key = new int[V];\n        boolean[] mstSet = new boolean[V];\n\n        // Initialize all keys as INFINITE\n        for (int i = 0; i < V; i++) {\n            key[i] = Integer.MAX_VALUE;\n            mstSet[i] = false;\n        }\n\n        // Always include first vertex in MST\n        key[0] = 0;\n        parent[0] = -1;\n\n        // The MST will have V vertices\n        for (int count = 0; count < V - 1; count++) {\n            // Pick the minimum key vertex from the set of vertices\n            // not yet included in MST\n            int u = minKey(key, mstSet);\n\n            // Add the picked vertex to the MST Set\n            mstSet[u] = true;\n\n            // Update key value and parent index of the adjacent\n            // vertices of the picked vertex. Consider only those\n            // vertices which are not yet included in MST\n            for (int v = 0; v < V; v++) {\n                if (graph[u][v] != 0 && mstSet[v] == false && \n                    graph[u][v] < key[v]) {\n                    parent[v] = u;\n                    key[v] = graph[u][v];\n                }\n            }\n        }\n\n        // Print the constructed MST\n        printMST(parent, graph);\n    }\n\n    private static int minKey(int[] key, boolean[] mstSet) {\n        int min = Integer.MAX_VALUE;\n        int minIndex = -1;\n\n        for (int v = 0; v < key.length; v++) {\n            if (mstSet[v] == false && key[v] < min) {\n                min = key[v];\n                minIndex = v;\n            }\n        }\n\n        return minIndex;\n    }\n\n    private static void printMST(int[] parent, int[][] graph) {\n        System.out.println("Edge \\tWeight");\n        for (int i = 1; i < graph.length; i++) {\n            System.out.println(parent[i] + " - " + i + "\\t" + graph[i][parent[i]]);\n        }\n    }\n}'})})]})},rC=Gn.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,nC=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,iC=Gn.p`
  color: var(--text-secondary);
  margin-bottom: 2rem;
`,aC=Gn.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
  flex-wrap: wrap;
`,oC=Gn.button`
  background: var(--primary);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: var(--primary-light);
  }

  &:disabled {
    background: var(--text-secondary);
    cursor: not-allowed;
  }
`,sC=Gn.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,lC=Gn.input`
  width: 150px;
`,dC=Gn.div`
  width: 100%;
  height: 500px;
  background: white;
  border-radius: var(--border-radius);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  margin-bottom: 2rem;
`,cC=Gn(Zu.div)`
  position: absolute;
  width: 40px;
  height: 40px;
  background: ${e=>e.isVisited?"var(--primary)":e.isActive?"var(--secondary)":"var(--surface)"};
  border: 2px solid ${e=>e.isVisited?"var(--primary)":e.isActive?"var(--secondary)":"var(--primary-light)"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.isVisited||e.isActive?"white":"var(--text-primary)"};
  font-weight: bold;
  cursor: pointer;
  z-index: 2;
`,uC=Gn.div`
  position: absolute;
  height: 2px;
  background: ${e=>e.isActive?"var(--secondary)":e.isVisited?"var(--primary)":"var(--text-secondary)"};
  transform-origin: left center;
  z-index: 1;
  
  &:after {
    content: '';
    position: absolute;
    right: -5px;
    top: -4px;
    width: 0;
    height: 0;
    border-left: 10px solid ${e=>e.isActive?"var(--secondary)":e.isVisited?"var(--primary)":"var(--text-secondary)"};
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }
`,hC=Gn.div`
  background: var(--surface);
  padding: 1rem;
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
  color: var(--text-primary);
`,pC=Gn.div`
  background: var(--surface);
  padding: 1rem;
  border-radius: var(--border-radius);
  margin-top: 2rem;
  overflow-x: auto;
`,mC=Gn.pre`
  margin: 0;
  color: var(--text-primary);
  font-family: 'Fira Code', monospace;
`,fC=Gn.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`,gC=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  overflow-x: auto;
  padding: 0.5rem;
`,vC=Gn.div`
  width: 40px;
  height: 40px;
  background: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  margin-right: 1rem;
  position: relative;
  
  &:not(:last-child):after {
    content: '→';
    position: absolute;
    right: -1.2rem;
    color: var(--text-primary);
    font-size: 1.2rem;
  }
`,xC=()=>{const[t,r]=(0,e.useState)(6),[n,i]=(0,e.useState)([]),[a,o]=(0,e.useState)([]),[s,l]=(0,e.useState)(!1),[d,c]=(0,e.useState)(1e3),[u,h]=(0,e.useState)(""),[p,m]=(0,e.useState)([]),[f,g]=(0,e.useState)(null),[v,x]=(0,e.useState)(new Set),[y,b]=(0,e.useState)(null),[w,j]=(0,e.useState)(new Set),S=()=>{const e=(e=>{const t=[];for(let r=0;r<e;r++){const n=2*Math.PI*r/e;t.push({id:r,x:300+200*Math.cos(n),y:250+200*Math.sin(n)})}return t})(t);i(e);const r=[];for(let n=0;n<t;n++)for(let e=0;e<t;e++)n<e&&Math.random()<.5&&r.push({from:n,to:e,id:`${n}-${e}`});o(r),m([]),g(null),x(new Set),b(null),j(new Set),h("")};(0,e.useEffect)((()=>{S()}),[t]);const k=e=>new Promise((t=>setTimeout(t,e)));return(0,Qn.jsxs)(rC,{children:[(0,Qn.jsx)(nC,{children:"Topological Sort"}),(0,Qn.jsx)(iC,{children:"Topological Sort is an algorithm for ordering the vertices of a directed acyclic graph (DAG) such that for every directed edge (u,v), vertex u comes before vertex v in the ordering. Topological sorting is used in scheduling tasks, build systems, and dependency resolution."}),(0,Qn.jsxs)(aC,{children:[(0,Qn.jsx)(oC,{onClick:async()=>{l(!0),h("Starting topological sort..."),m([]),g(null),x(new Set),b(null),j(new Set),await k(d);const e={};for(let a=0;a<t;a++)e[a]=[];for(const t of a)e[t.from].push(t.to);h("Created adjacency list representation of the graph."),await k(d);const r=new Set,n=new Set,i=[],o=async t=>{if(n.has(t))return h("Cycle detected! This shouldn't happen with our generated DAG."),!1;if(r.has(t))return!0;n.add(t),g(t),h(`Visiting node ${t}`),await k(d);for(const r of e[t]){const e=`${t}-${r}`;b(e),h(`Checking edge from ${t} to ${r}`),await k(d),await o(r),j((t=>new Set([...t,e])))}return n.delete(t),r.add(t),x((e=>new Set([...e,t]))),g(null),i.unshift(t),m([...i]),h(`Added node ${t} to topological order`),await k(d),!0};for(let a=0;a<t;a++)r.has(a)||(h(`Starting DFS from node ${a}`),await k(d),await o(a));h("Topological sorting completed!"),l(!1)},disabled:s,children:"Start Algorithm"}),(0,Qn.jsx)(oC,{onClick:()=>{S(),l(!1)},disabled:s,children:"Reset Graph"}),(0,Qn.jsxs)(sC,{children:[(0,Qn.jsxs)("label",{children:["Nodes: ",t]}),(0,Qn.jsx)(lC,{type:"range",min:"4",max:"8",value:t,onChange:e=>r(parseInt(e.target.value)),disabled:s})]}),(0,Qn.jsxs)(sC,{children:[(0,Qn.jsxs)("label",{children:["Speed: ",d,"ms"]}),(0,Qn.jsx)(lC,{type:"range",min:"100",max:"2000",step:"100",value:d,onChange:e=>c(parseInt(e.target.value)),disabled:s})]})]}),p.length>0&&(0,Qn.jsxs)(fC,{children:[(0,Qn.jsx)("h3",{children:"Topological Order:"}),(0,Qn.jsx)(gC,{children:p.map(((e,t)=>(0,Qn.jsx)(vC,{children:e},t)))})]}),u&&(0,Qn.jsx)(hC,{children:u}),(0,Qn.jsxs)(dC,{children:[a.map((e=>{const t=n.find((t=>t.id===e.from)),r=n.find((t=>t.id===e.to));if(!t||!r)return null;const i=r.x-t.x,a=r.y-t.y,o=Math.sqrt(i*i+a*a),s=180*Math.atan2(a,i)/Math.PI,l=e.id===y,d=w.has(e.id);return(0,Qn.jsx)(uC,{style:{left:t.x,top:t.y,width:o,transform:`rotate(${s}deg)`},isActive:l,isVisited:d},e.id)})),n.map((e=>(0,Qn.jsx)(cC,{initial:{scale:0},animate:{scale:1},style:{left:e.x-20,top:e.y-20},isActive:e.id===f,isVisited:v.has(e.id),children:e.id},e.id)))]}),(0,Qn.jsx)(pC,{children:(0,Qn.jsx)(mC,{children:'// Java implementation of Topological Sort\npublic class TopologicalSort {\n    private int V;\n    private List<List<Integer>> adj;\n    \n    TopologicalSort(int v) {\n        V = v;\n        adj = new ArrayList<>(v);\n        for (int i = 0; i < v; ++i)\n            adj.add(new ArrayList<>());\n    }\n    \n    // Add an edge to the graph\n    void addEdge(int v, int w) { \n        adj.get(v).add(w); \n    }\n    \n    // A recursive function used by topologicalSort\n    void topologicalSortUtil(int v, boolean[] visited, \n                             boolean[] recStack,\n                             Stack<Integer> stack) {\n        // Mark the current node as visited\n        visited[v] = true;\n        recStack[v] = true;\n        \n        // Recur for all adjacent vertices\n        for (Integer neighbor : adj.get(v)) {\n            if (!visited[neighbor])\n                topologicalSortUtil(neighbor, visited, recStack, stack);\n            else if (recStack[neighbor]) {\n                System.out.println("Cycle detected!");\n                return;\n            }\n        }\n        \n        // Push current vertex to stack which stores result\n        recStack[v] = false;\n        stack.push(v);\n    }\n    \n    // The function to do Topological Sort\n    void topologicalSort() {\n        Stack<Integer> stack = new Stack<>();\n        \n        // Mark all the vertices as not visited\n        boolean[] visited = new boolean[V];\n        boolean[] recStack = new boolean[V];\n        \n        // Call the recursive helper function to store\n        // Topological Sort starting from all vertices\n        // one by one\n        for (int i = 0; i < V; i++) {\n            if (!visited[i]) {\n                topologicalSortUtil(i, visited, recStack, stack);\n            }\n        }\n        \n        // Print contents of stack\n        System.out.print("Topological Sort: ");\n        while (!stack.empty()) {\n            System.out.print(stack.pop() + " ");\n        }\n    }\n}'})})]})},yC=(t,r)=>{const[n,i]=(0,e.useState)((()=>{try{const e=window.localStorage.getItem(t);return e?JSON.parse(e):r}catch(e){return console.error(`Error reading localStorage key "${t}":`,e),r}}));return(0,e.useEffect)((()=>{try{window.localStorage.setItem(t,JSON.stringify(n))}catch(e){console.error(`Error setting localStorage key "${t}":`,e)}}),[t,n]),[n,i]},bC=(0,e.createContext)(),wC=()=>{const t=(0,e.useContext)(bC);if(!t)throw new Error("useAlgorithmState must be used within an AlgorithmStateProvider");return t},jC=e=>{let{children:t,algorithmId:r}=e;const[n,i]=yC("algorithm-states",{}),a=n[r]||{};return(0,Qn.jsx)(bC.Provider,{value:{algorithmState:a,updateAlgorithmState:e=>{i({...n,[r]:{...a,...e}})}},children:t})},SC=(e,t)=>r=>(0,Qn.jsx)(jC,{algorithmId:t,children:(0,Qn.jsx)(e,{...r})}),kC=Gn.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,CC=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,TC=Gn.h1`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,EC=Gn.p`
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
`,$C=Gn.h2`
  color: var(--primary);
  margin: 2rem 0 1rem;
  border-bottom: 2px solid var(--primary-light);
  padding-bottom: 0.5rem;
`,PC=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
`,AC=Gn.div`
  margin-bottom: 1rem;
`,IC=Gn.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
`,zC=Gn.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: var(--primary);
    outline: none;
  }
`,MC=Gn.div`
  display: flex;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`,FC=Gn.button`
  padding: 0.5rem 1rem;
  background-color: ${e=>e.active?"var(--primary)":"var(--surface-variant)"};
  color: ${e=>e.active?"white":"var(--text-primary)"};
  border: 1px solid ${e=>e.active?"var(--primary)":"var(--border)"};
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background-color: ${e=>e.active?"var(--primary)":"rgba(var(--primary-rgb), 0.1)"};
  }
`,RC=Gn.button`
  background: var(--primary);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  margin-right: 1rem;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: var(--disabled);
    cursor: not-allowed;
  }
`,OC=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
  overflow-x: auto;
`,NC=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
`,LC=Gn(Zu.div)`
  width: 100px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  background-color: ${e=>e.active?"rgba(var(--primary-rgb), 0.2)":e.current?"rgba(var(--success-rgb), 0.2)":"var(--surface-variant)"};
  transition: background-color 0.3s;
  position: relative;
  box-shadow: var(--card-shadow);
`,DC=Gn.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
`,VC=Gn.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--text-primary);
`,_C=(Gn.div`
  display: flex;
  align-items: center;
  margin: 0 0.5rem;
`,Gn.div`
  width: 20px;
  height: 2px;
  background-color: var(--primary);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: -3px;
    border-left: 6px solid var(--primary);
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
  }
`,Gn.div`
  font-size: 1.5rem;
  margin: 0 1rem;
  color: var(--primary);
`,Gn.div`
  font-size: 1.5rem;
  margin: 0 1rem;
  color: var(--primary);
`,Gn.div`
  background: var(--surface-variant);
  padding: 1rem;
  border-radius: var(--border-radius);
  margin: 1rem 0;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`),BC=Gn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  overflow-x: auto;
  padding-bottom: 2rem;
`,UC=Gn(Zu.div)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${e=>e.active?"rgba(var(--primary-rgb), 0.8)":e.calculated?"rgba(var(--success-rgb), 0.8)":"rgba(var(--primary-rgb), 0.3)"};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin: 0.5rem;
  position: relative;
  z-index: 2;
  transition: background-color 0.3s;
`,HC=Gn.div`
  display: flex;
  justify-content: center;
`,WC=Gn.div`
  width: 2px;
  height: 20px;
  background-color: var(--primary-light);
  margin: 0 auto;
`,qC=Gn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0.5rem;
`,KC=(Gn.div`
  margin: 1rem 0;
  color: var(--text-secondary);
  line-height: 1.6;
`,Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 1rem;
`),GC=Gn.pre`
  background: var(--code-bg);
  color: var(--code-text);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  line-height: 1.5;
`,YC=Gn.div`
  background: rgba(var(--info-rgb), 0.1);
  border-left: 4px solid var(--info);
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
`,XC=Gn.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
`,QC=Gn.th`
  background-color: var(--primary-light);
  color: white;
  padding: 0.75rem;
  text-align: left;
  border: 1px solid var(--border);
`,JC=Gn.td`
  padding: 0.75rem;
  border: 1px solid var(--border);
`,ZC=(Gn.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
`,SC((()=>{const{algorithmState:t,updateAlgorithmState:r}=wC(),[n,i]=(0,e.useState)(t.n||10),[a,o]=(0,e.useState)(t.method||"iterative"),[s,l]=(0,e.useState)([]),[d,c]=(0,e.useState)([]),[u,h]=(0,e.useState)(-1),[p,m]=(0,e.useState)(!1),[f,g]=(0,e.useState)(!1),[v,x]=(0,e.useState)([]),[y,b]=(0,e.useState)(new Set),[w,j]=(0,e.useState)(new Set),[S,k]=(0,e.useState)([]),[C,T]=(0,e.useState)(0),[E,$]=(0,e.useState)(t.result||null),[P,A]=(0,e.useState)(t.executionTime||null),[I,z]=(0,e.useState)(null);(0,e.useEffect)((()=>{r({n:n,method:a,result:E,sequence:s,executionTime:P})}),[n,a,E,s,P,r]);const M=e=>new Promise((t=>setTimeout(t,e))),F=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(e>15)return;const i=`${t}-${r}`;if(x((a=>{const o=[...a];return o[t]||(o[t]=[]),o[t][r]={n:e,parent:n,id:i},o})),j((e=>{const t=new Set(e);return t.add(i),t})),await M(300),e<=1)return b((e=>{const t=new Set(e);return t.add(i),t})),j((e=>{const t=new Set(e);return t.delete(i),t})),e;const a=await F(e-1,t+1,2*r,i)+await F(e-2,t+1,2*r+1,i);return b((e=>{const t=new Set(e);return t.add(i),t})),j((e=>{const t=new Set(e);return t.delete(i),t})),await M(300),a};return(0,Qn.jsxs)(kC,{children:[(0,Qn.jsxs)(CC,{children:[(0,Qn.jsx)(TC,{children:"Fibonacci Sequence"}),(0,Qn.jsx)(EC,{children:"A classic sequence where each number is the sum of the two preceding ones, usually starting with 0 and 1."})]}),(0,Qn.jsxs)(PC,{children:[(0,Qn.jsx)($C,{children:"Input"}),(0,Qn.jsxs)(AC,{children:[(0,Qn.jsx)(IC,{htmlFor:"n",children:"Number of elements (n):"}),(0,Qn.jsx)(zC,{id:"n",type:"number",min:"0",max:"50",value:n,onChange:e=>{const t=e.target.value;(""===t||parseInt(t)>=0&&parseInt(t)<=50)&&i(t)},disabled:p})]}),(0,Qn.jsx)(IC,{children:"Implementation Method:"}),(0,Qn.jsxs)(MC,{children:[(0,Qn.jsx)(FC,{active:"iterative"===a,onClick:()=>o("iterative"),disabled:p,children:"Iterative"}),(0,Qn.jsx)(FC,{active:"dp"===a,onClick:()=>o("dp"),disabled:p,children:"Dynamic Programming"}),(0,Qn.jsx)(FC,{active:"recursive"===a,onClick:()=>o("recursive"),disabled:p,children:"Recursive (n \u2264 10)"})]}),(0,Qn.jsx)(RC,{onClick:()=>{switch(l([]),c([]),h(-1),m(!1),g(!1),x([]),b(new Set),j(new Set),k([]),T(0),m(!0),a){case"recursive":(async()=>{if(n>10)return alert("Recursive visualization is limited to n \u2264 10 to prevent browser hanging"),void m(!1);x([]),b(new Set),j(new Set),await F(parseInt(n),0,0);const e=[];for(let t=0;t<=n;t++)t<=1?e.push(t):e.push(e[t-1]+e[t-2]);l(e),h(n),g(!0),m(!1)})();break;case"dp":(async()=>{const e=Array(parseInt(n)+1).fill(0);e[0]=0,n>=1&&(e[1]=1),l(e.slice(0,2));for(let t=2;t<=n;t++)h(t),c([t-1,t-2]),await M(500),e[t]=e[t-1]+e[t-2],l([...e.slice(0,t+1)]),await M(500),c([]);h(n),g(!0),m(!1)})();break;default:(async()=>{if(n<=1)return l([0,1].slice(0,parseInt(n)+1)),h(n),g(!0),void m(!1);let e=0,t=1;const r=[e,t];l(r);for(let i=2;i<=n;i++){h(i),c([i-1,i-2]),await M(500);const n=e+t;r.push(n),l([...r]),e=t,t=n,await M(500),c([])}h(n),g(!0),m(!1)})()}},disabled:p||""===n||parseInt(n)<0,children:p?"Calculating...":"Calculate Fibonacci"})]}),(0,Qn.jsxs)(OC,{children:[(0,Qn.jsx)($C,{children:"Visualization"}),"recursive"!==a&&(0,Qn.jsx)(NC,{children:s.map(((e,t)=>{const r=d.includes(t),n=t===u;return(0,Qn.jsxs)(LC,{active:r,current:n,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.05*t},children:[(0,Qn.jsxs)(DC,{children:["F(",t,")"]}),(0,Qn.jsx)(VC,{children:e})]},t)}))}),"recursive"===a&&v.length>0&&(0,Qn.jsx)(BC,{children:v.map(((t,r)=>(0,Qn.jsx)(e.Fragment,{children:(0,Qn.jsx)(HC,{children:t.map(((e,t)=>e&&(0,Qn.jsxs)(qC,{children:[(0,Qn.jsxs)(UC,{active:w.has(e.id),calculated:y.has(e.id),initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.3},children:["F(",e.n,")"]}),null!==e.parent&&r>0&&(0,Qn.jsx)(WC,{})]},`${r}-${t}`)))})},r)))}),f&&s.length>0&&(0,Qn.jsxs)(_C,{children:[(0,Qn.jsxs)("span",{children:["Fibonacci number at position ",n,":"]}),(0,Qn.jsx)("strong",{children:s[n]})]})]}),(0,Qn.jsx)($C,{children:"How It Works"}),(0,Qn.jsxs)(KC,{children:[(0,Qn.jsx)("p",{children:"The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1."}),(0,Qn.jsx)("p",{children:"The sequence starts: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ..."}),(0,Qn.jsx)("p",{children:"The mathematical definition is:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"F(0) = 0"}),(0,Qn.jsx)("li",{children:"F(1) = 1"}),(0,Qn.jsx)("li",{children:"F(n) = F(n-1) + F(n-2) for n > 1"})]}),(0,Qn.jsx)("h3",{children:"Different Implementation Approaches"}),(0,Qn.jsx)("h4",{children:"1. Recursive Implementation"}),(0,Qn.jsx)("p",{children:"The direct translation of the mathematical definition into code:"}),(0,Qn.jsx)(GC,{children:"function fibonacci(n) {\n  if (n <= 0) return 0;\n  if (n === 1) return 1;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n}"}),(0,Qn.jsx)("p",{children:"While elegant, this approach has exponential time complexity O(2^n) due to redundant calculations."}),(0,Qn.jsx)("h4",{children:"2. Dynamic Programming (Memoization)"}),(0,Qn.jsx)("p",{children:"We can optimize the recursive approach by storing already calculated values:"}),(0,Qn.jsx)(GC,{children:"function fibonacciDP(n) {\n  const memo = Array(n + 1).fill(0);\n  memo[1] = 1;\n  \n  for (let i = 2; i <= n; i++) {\n    memo[i] = memo[i - 1] + memo[i - 2];\n  }\n  \n  return memo[n];\n}"}),(0,Qn.jsx)("h4",{children:"3. Iterative (Space-Optimized)"}),(0,Qn.jsx)("p",{children:"We can further optimize space by only keeping track of the last two values:"}),(0,Qn.jsx)(GC,{children:"function fibonacciIterative(n) {\n  if (n <= 0) return 0;\n  if (n === 1) return 1;\n  \n  let a = 0, b = 1;\n  \n  for (let i = 2; i <= n; i++) {\n    const temp = a + b;\n    a = b;\n    b = temp;\n  }\n  \n  return b;\n}"}),(0,Qn.jsx)("h3",{children:"Time and Space Complexity"}),(0,Qn.jsxs)(XC,{children:[(0,Qn.jsx)("thead",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(QC,{children:"Implementation"}),(0,Qn.jsx)(QC,{children:"Time Complexity"}),(0,Qn.jsx)(QC,{children:"Space Complexity"})]})}),(0,Qn.jsxs)("tbody",{children:[(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(JC,{children:"Recursive"}),(0,Qn.jsxs)(JC,{children:["O(2",(0,Qn.jsx)("sup",{children:"n"}),")"]}),(0,Qn.jsx)(JC,{children:"O(n) - call stack depth"})]}),(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(JC,{children:"Dynamic Programming"}),(0,Qn.jsx)(JC,{children:"O(n)"}),(0,Qn.jsx)(JC,{children:"O(n)"})]}),(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(JC,{children:"Iterative"}),(0,Qn.jsx)(JC,{children:"O(n)"}),(0,Qn.jsx)(JC,{children:"O(1)"})]})]})]}),(0,Qn.jsxs)(YC,{children:[(0,Qn.jsx)("p",{children:"The Fibonacci sequence appears in many natural phenomena, such as:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"The arrangement of leaves on many plants (phyllotaxis)"}),(0,Qn.jsx)("li",{children:"The spiral patterns of pinecones and pineapples"}),(0,Qn.jsx)("li",{children:"The branching of trees"}),(0,Qn.jsx)("li",{children:"The ratio of consecutive Fibonacci numbers approaches the Golden Ratio (approximately 1.618)"})]}),(0,Qn.jsx)("p",{children:"In computer science, the Fibonacci sequence serves as an excellent example for understanding recursion, dynamic programming, and algorithm optimization."})]})]})]})}),"fibonacci")),eT=ZC,tT=Gn.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,rT=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,nT=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,iT=Gn.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,aT=Gn.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,oT=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,sT=Gn(Zu.div)`
  width: 100px;
  height: 120px;
  background: ${e=>e.selected?"var(--secondary)":"var(--primary-light)"};
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  color: white;
  font-weight: 600;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
`,lT=Gn.div`
  font-size: 0.8rem;
  opacity: 0.7;
`,dT=Gn.div`
  font-size: 1.2rem;
  text-align: center;
`,cT=Gn.div`
  font-size: 0.9rem;
  text-align: center;
`,uT=Gn.div`
  overflow-x: auto;
  margin: 2rem 0;
`,hT=Gn.table`
  border-collapse: collapse;
  margin: 0 auto;
`,pT=Gn.td`
  border: 1px solid #ddd;
  width: 50px;
  height: 50px;
  text-align: center;
  background-color: ${e=>e.active?"var(--primary)":e.highlight?"var(--primary-light)":"white"};
  color: ${e=>e.active||e.highlight?"white":"var(--text-primary)"};
  font-weight: ${e=>e.active?"bold":"normal"};
  transition: all 0.3s;
`,mT=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,fT=Gn.button`
  padding: 0.5rem 1.5rem;
  border-radius: var(--border-radius);
  background: var(--primary);
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`,gT=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,vT=Gn.input`
  padding: 0.5rem;
  border-radius: var(--border-radius);
  border: 1px solid #ccc;
  width: 70px;
`,xT=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,yT=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,bT=Gn.input`
  width: 100px;
`,wT=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,jT=Gn.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f0f8ff;
  border-radius: var(--border-radius);
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: var(--primary);
`,ST=Gn.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,kT=Gn.button`
  padding: 0.5rem 1rem;
  background: ${e=>e.active?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"#e0e0e0"};
  }
`,CT=Gn.div`
  margin: 1rem 0;
  line-height: 1.6;
`,TT=Gn.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,ET=Gn.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,$T=Gn.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,PT=Gn.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,AT=Gn.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,IT=Gn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
`,zT=Gn.div`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  background: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  margin-bottom: 1rem;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
`,MT=[{id:0,weight:10,value:60},{id:1,weight:20,value:100},{id:2,weight:30,value:120},{id:3,weight:15,value:80},{id:4,weight:25,value:110}],FT=()=>{const[t,r]=(0,e.useState)(MT),[n,i]=(0,e.useState)(50),[a,o]=(0,e.useState)([]),[s,l]=(0,e.useState)(!1),[d,c]=(0,e.useState)(500),[u,h]=(0,e.useState)(null),[p,m]=(0,e.useState)([]),[f,g]=(0,e.useState)("visualization"),[v,x]=(0,e.useState)(""),[y,b]=(0,e.useState)([]),[w,j]=(0,e.useState)(null);(0,e.useEffect)((()=>{S()}),[t,n]);const S=()=>{l(!1),h(null),m([]),x(""),b([]),j(null);const e=t.length,r=Array(e+1).fill().map((()=>Array(n+1).fill(0)));o(r)},k=e=>new Promise((t=>setTimeout(t,e)));return(0,Qn.jsxs)(tT,{children:[(0,Qn.jsxs)(rT,{children:[(0,Qn.jsx)(nT,{children:"0/1 Knapsack Problem - Dynamic Programming"}),(0,Qn.jsx)(iT,{children:"The 0/1 Knapsack problem is a classic example of dynamic programming where we need to find the maximum value subset of items that fit within a knapsack of fixed capacity."})]}),(0,Qn.jsxs)(ST,{children:[(0,Qn.jsx)(kT,{active:"visualization"===f,onClick:()=>g("visualization"),children:"Visualization"}),(0,Qn.jsx)(kT,{active:"explanation"===f,onClick:()=>g("explanation"),children:"Explanation"}),(0,Qn.jsx)(kT,{active:"code"===f,onClick:()=>g("code"),children:"Code"}),(0,Qn.jsx)(kT,{active:"complexity"===f,onClick:()=>g("complexity"),children:"Complexity"})]}),"visualization"===f&&(0,Qn.jsxs)(aT,{children:[(0,Qn.jsxs)(mT,{children:[(0,Qn.jsxs)(gT,{children:[(0,Qn.jsx)("label",{children:"Knapsack Capacity:"}),(0,Qn.jsx)(vT,{type:"number",min:"1",max:"100",value:n,onChange:e=>{const t=parseInt(e.target.value);!isNaN(t)&&t>=0&&t<=100&&i(t)},disabled:s})]}),(0,Qn.jsxs)(xT,{children:[(0,Qn.jsx)("span",{children:"Speed:"}),(0,Qn.jsxs)(yT,{children:[(0,Qn.jsx)("span",{children:"Fast"}),(0,Qn.jsx)(bT,{type:"range",min:"100",max:"1000",step:"100",value:d,onChange:e=>c(Number(e.target.value)),disabled:s}),(0,Qn.jsx)("span",{children:"Slow"})]})]}),(0,Qn.jsx)(fT,{onClick:async()=>{if(s)return;l(!0),x("Starting 0/1 Knapsack calculation...");const e=t.length,r=t.map((e=>e.weight)),i=t.map((e=>e.value)),c=[...a];for(let t=0;t<=e;t++)h([t,0]),c[t][0]=0,o([...c]),await k(d/2);for(let t=0;t<=n;t++)h([0,t]),c[0][t]=0,o([...c]),await k(d/2);for(let t=1;t<=e;t++)for(let e=1;e<=n;e++){if(h([t,e]),m([]),await k(d),r[t-1]<=e){m([[t-1,e],[t-1,e-r[t-1]]]);const n=i[t-1]+c[t-1][e-r[t-1]],a=c[t-1][e];x(`For item ${t} (Weight: ${r[t-1]}, Value: ${i[t-1]}) and capacity ${e}:\n            Include: ${i[t-1]} + dp[${t-1}][${e-r[t-1]}] = ${i[t-1]} + ${c[t-1][e-r[t-1]]} = ${n}\n            Exclude: dp[${t-1}][${e}] = ${a}\n            Choose max: ${Math.max(n,a)}`),await k(d),c[t][e]=Math.max(i[t-1]+c[t-1][e-r[t-1]],c[t-1][e])}else m([[t-1,e]]),x(`For item ${t} (Weight: ${r[t-1]}, Value: ${i[t-1]}) and capacity ${e}:\n            Item is too heavy (${r[t-1]} > ${e}), so we skip it.\n            dp[${t}][${e}] = dp[${t-1}][${e}] = ${c[t-1][e]}`),await k(d),c[t][e]=c[t-1][e];o([...c]),await k(d)}j(c[e][n]),x(`Maximum possible value: ${c[e][n]}`);let u=n;const p=Array(e).fill(!1);for(let t=e;t>0;t--)c[t][u]!==c[t-1][u]&&(p[t-1]=!0,u-=r[t-1],h([t,u]),await k(d));b(p),m([]),h(null),l(!1)},disabled:s,children:s?"Calculating...":"Calculate"}),(0,Qn.jsx)(fT,{onClick:S,disabled:s,children:"Reset"})]}),(0,Qn.jsx)(IT,{children:(0,Qn.jsxs)(zT,{children:[(0,Qn.jsx)("div",{children:"Capacity"}),(0,Qn.jsx)("div",{style:{fontSize:"1.5rem"},children:n})]})}),(0,Qn.jsx)(oT,{children:t.map(((e,t)=>(0,Qn.jsxs)(sT,{selected:y[t],animate:{scale:y[t]?1.1:1,y:y[t]?-10:0},children:[(0,Qn.jsxs)(lT,{children:["Item ",t+1]}),(0,Qn.jsxs)(dT,{children:["Value: ",e.value]}),(0,Qn.jsxs)(cT,{children:["Weight: ",e.weight]})]},e.id)))}),v&&(0,Qn.jsx)(wT,{children:v}),null!==w&&(0,Qn.jsxs)(jT,{children:["Maximum Value: ",w]}),(0,Qn.jsx)(uT,{children:(0,Qn.jsxs)(hT,{children:[(0,Qn.jsx)("thead",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)("th",{}),Array.from({length:n+1},((e,t)=>(0,Qn.jsx)("th",{children:t},t)))]})}),(0,Qn.jsx)("tbody",{children:a.map(((e,t)=>(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)("th",{children:t}),e.map(((e,r)=>(0,Qn.jsx)(pT,{active:u&&u[0]===t&&u[1]===r,highlight:p.some((e=>{let[n,i]=e;return n===t&&i===r})),children:e},r)))]},t)))})]})})]}),"explanation"===f&&(0,Qn.jsx)(aT,{children:(0,Qn.jsxs)(CT,{children:[(0,Qn.jsx)("h3",{children:"What is the 0/1 Knapsack Problem?"}),(0,Qn.jsx)("p",{children:"The 0/1 Knapsack problem is a problem where you have a set of items, each with a weight and a value, and you need to determine which items to include in a collection so that the total weight is less than or equal to a given limit (capacity) and the total value is as large as possible."}),(0,Qn.jsx)("p",{children:'It\'s called the "0/1" knapsack problem because each item must either be taken completely (1) or not at all (0).'}),(0,Qn.jsx)("h3",{children:"Dynamic Programming Approach"}),(0,Qn.jsx)("p",{children:"The 0/1 Knapsack problem can be solved efficiently using dynamic programming. Here's how:"}),(0,Qn.jsx)("h4",{children:"Step 1: Create a DP Table"}),(0,Qn.jsxs)("p",{children:["Create a 2D array dp[n+1][capacity+1] where:",(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"n is the number of items"}),(0,Qn.jsx)("li",{children:"capacity is the maximum weight the knapsack can hold"}),(0,Qn.jsx)("li",{children:"dp[i][j] represents the maximum value that can be obtained using the first i items and with a weight limit of j"})]})]}),(0,Qn.jsx)("h4",{children:"Step 2: Base Case"}),(0,Qn.jsxs)("p",{children:["Initialize the first row and first column to 0.",(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"dp[0][j] = 0 for all j (no items, no value)"}),(0,Qn.jsx)("li",{children:"dp[i][0] = 0 for all i (zero capacity, no value)"})]})]}),(0,Qn.jsx)("h4",{children:"Step 3: Fill the DP Table"}),(0,Qn.jsxs)("p",{children:["For each item i and each capacity j:",(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"If the weight of item i is greater than capacity j, we can't include it: dp[i][j] = dp[i-1][j]"}),(0,Qn.jsxs)("li",{children:["Otherwise, we have two choices: include the item or exclude it. Take the maximum:",(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Include: value of item i + maximum value with remaining capacity (dp[i-1][j-weight[i]])"}),(0,Qn.jsx)("li",{children:"Exclude: maximum value without item i (dp[i-1][j])"})]})]})]})]}),(0,Qn.jsx)("h4",{children:"Step 4: Extract the Result"}),(0,Qn.jsx)("p",{children:"The value in dp[n][capacity] gives the maximum value possible. To find which items were included, we can backtrack through the table."})]})}),"code"===f&&(0,Qn.jsx)(aT,{children:(0,Qn.jsx)(Qh,{code:'\npublic class Knapsack {\n    /**\n     * Solves the 0/1 Knapsack problem using dynamic programming\n     * \n     * @param weights array of item weights\n     * @param values array of item values\n     * @param capacity the maximum weight the knapsack can hold\n     * @param n number of items\n     * @return the maximum value that can be put in a knapsack of given capacity\n     */\n    public static int knapsack(int[] weights, int[] values, int capacity, int n) {\n        // Create a 2D dp array to store the maximum value that can be obtained\n        // using i items and j weight capacity\n        int[][] dp = new int[n + 1][capacity + 1];\n        \n        // Fill the dp table in bottom-up manner\n        for (int i = 0; i <= n; i++) {\n            for (int w = 0; w <= capacity; w++) {\n                // Base case: no items or no capacity\n                if (i == 0 || w == 0) {\n                    dp[i][w] = 0;\n                }\n                // If weight of current item is less than or equal to capacity,\n                // we have two choices: include it or exclude it\n                else if (weights[i - 1] <= w) {\n                    // Maximum of (value of current item + value of remaining capacity,\n                    // value if current item is excluded)\n                    dp[i][w] = Math.max(\n                        values[i - 1] + dp[i - 1][w - weights[i - 1]],\n                        dp[i - 1][w]\n                    );\n                }\n                // If weight of current item is more than capacity, we can\'t include it\n                else {\n                    dp[i][w] = dp[i - 1][w];\n                }\n            }\n        }\n        \n        return dp[n][capacity];\n    }\n    \n    /**\n     * Returns the list of selected items\n     */\n    public static boolean[] getSelectedItems(int[] weights, int[] values, int capacity, int n) {\n        int[][] dp = new int[n + 1][capacity + 1];\n        \n        // Fill the dp table\n        for (int i = 0; i <= n; i++) {\n            for (int w = 0; w <= capacity; w++) {\n                if (i == 0 || w == 0) {\n                    dp[i][w] = 0;\n                }\n                else if (weights[i - 1] <= w) {\n                    dp[i][w] = Math.max(\n                        values[i - 1] + dp[i - 1][w - weights[i - 1]],\n                        dp[i - 1][w]\n                    );\n                }\n                else {\n                    dp[i][w] = dp[i - 1][w];\n                }\n            }\n        }\n        \n        // Backtrack to find items\n        boolean[] selected = new boolean[n];\n        int w = capacity;\n        \n        for (int i = n; i > 0; i--) {\n            // If current item is included\n            if (dp[i][w] != dp[i - 1][w]) {\n                selected[i - 1] = true;\n                w = w - weights[i - 1];\n            }\n        }\n        \n        return selected;\n    }\n    \n    // Driver method to test the algorithm\n    public static void main(String[] args) {\n        int[] values = {60, 100, 120};\n        int[] weights = {10, 20, 30};\n        int capacity = 50;\n        int n = values.length;\n        \n        System.out.println("Maximum value: " + knapsack(weights, values, capacity, n));\n        \n        boolean[] selected = getSelectedItems(weights, values, capacity, n);\n        System.out.println("Selected items: ");\n        for (int i = 0; i < n; i++) {\n            if (selected[i]) {\n                System.out.println("Item " + (i+1) + " (Weight: " + weights[i] + ", Value: " + values[i] + ")");\n            }\n        }\n    }\n}\n',language:"java"})}),"complexity"===f&&(0,Qn.jsxs)(aT,{children:[(0,Qn.jsxs)(TT,{children:[(0,Qn.jsx)(ET,{children:"Time Complexity"}),(0,Qn.jsxs)($T,{children:[(0,Qn.jsx)("thead",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(PT,{children:"Approach"}),(0,Qn.jsx)(PT,{children:"Time Complexity"}),(0,Qn.jsx)(PT,{children:"Explanation"})]})}),(0,Qn.jsxs)("tbody",{children:[(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(AT,{children:"Naive Recursive"}),(0,Qn.jsxs)(AT,{children:["O(2",(0,Qn.jsx)("sup",{children:"n"}),")"]}),(0,Qn.jsx)(AT,{children:"For each item, we have two choices (include or exclude), leading to exponential complexity."})]}),(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(AT,{children:"Dynamic Programming"}),(0,Qn.jsx)(AT,{children:"O(n \xd7 W)"}),(0,Qn.jsx)(AT,{children:"We fill a table of size n\xd7W where n is the number of items and W is the capacity."})]})]})]})]}),(0,Qn.jsxs)(TT,{children:[(0,Qn.jsx)(ET,{children:"Space Complexity"}),(0,Qn.jsxs)($T,{children:[(0,Qn.jsx)("thead",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(PT,{children:"Approach"}),(0,Qn.jsx)(PT,{children:"Space Complexity"}),(0,Qn.jsx)(PT,{children:"Explanation"})]})}),(0,Qn.jsxs)("tbody",{children:[(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(AT,{children:"Naive Recursive"}),(0,Qn.jsx)(AT,{children:"O(n)"}),(0,Qn.jsx)(AT,{children:"Maximum depth of the recursion stack."})]}),(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(AT,{children:"Dynamic Programming"}),(0,Qn.jsx)(AT,{children:"O(n \xd7 W)"}),(0,Qn.jsx)(AT,{children:"We use a 2D array of size n\xd7W."})]}),(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(AT,{children:"Space-Optimized DP"}),(0,Qn.jsx)(AT,{children:"O(W)"}),(0,Qn.jsx)(AT,{children:"We can optimize to use only one row of size W at a time."})]})]})]})]})]})]})},RT=Gn.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,OT=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,NT=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,LT=Gn.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,DT=Gn.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,VT=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,_T=Gn.button`
  padding: 0.5rem 1.5rem;
  border-radius: var(--border-radius);
  background: var(--primary);
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`,BT=Gn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`,UT=Gn.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,HT=Gn.input`
  padding: 0.5rem;
  border-radius: var(--border-radius);
  border: 1px solid #ccc;
  flex: 1;
  font-family: monospace;
`,WT=Gn.label`
  min-width: 100px;
  font-weight: 500;
`,qT=Gn.div`
  display: flex;
  margin: 1.5rem 0;
  width: 100%;
  overflow-x: auto;
  padding: 1rem 0;
`,KT=Gn.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 5px;
  position: relative;
  background-color: ${e=>e.matching?"#4caf50":e.active?"var(--primary)":e.highlighted?"var(--primary-light)":"white"};
  color: ${e=>e.active||e.matching||e.highlighted?"white":"var(--text-primary)"};
  font-family: monospace;
`,GT=Gn.div`
  position: absolute;
  top: -25px;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 0.8rem;
  color: var(--text-secondary);
`,YT=Gn.div`
  margin: 2rem 0;
  width: 100%;
  overflow-x: auto;
`,XT=Gn.div`
  width: 100%;
  overflow-x: auto;
  margin: 1rem 0;
`,QT=Gn.table`
  width: 100%;
  border-collapse: collapse;
`,JT=Gn.th`
  padding: 0.5rem;
  border: 1px solid #ddd;
  background-color: #f5f5f5;
`,ZT=Gn.td`
  padding: 0.5rem;
  border: 1px solid #ddd;
  text-align: center;
  background-color: ${e=>e.highlighted?"var(--primary-light)":"white"};
  color: ${e=>e.highlighted?"white":"var(--text-primary)"};
`,eE=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,tE=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,rE=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,nE=Gn.input`
  width: 100px;
`,iE=Gn.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,aE=Gn.button`
  padding: 0.5rem 1rem;
  background: ${e=>e.active?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.active?"white":"var(--text-secondary)"};
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"#e0e0e0"};
  }
`,oE=Gn.div`
  margin: 1rem 0;
  line-height: 1.6;
`,sE=Gn.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,lE=Gn.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,dE=Gn.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,cE=Gn.div`
  margin: 2rem 0;
  padding: 1rem;
  background: ${e=>e.success?"#e8f5e9":"#ffebee"};
  border-radius: var(--border-radius);
  text-align: center;
  font-weight: 500;
  color: ${e=>e.success?"#2e7d32":"#c62828"};
`,uE=()=>{const[t,r]=(0,e.useState)("ABABDABACDABABCABAB"),[n,i]=(0,e.useState)("ABABCABAB"),[a,o]=(0,e.useState)([]),[s,l]=(0,e.useState)([]),[d,c]=(0,e.useState)([]),[u,h]=(0,e.useState)([]),[p,m]=(0,e.useState)(""),[f,g]=(0,e.useState)(!1),[v,x]=(0,e.useState)(500),[y,b]=(0,e.useState)("visualization"),[w,j]=(0,e.useState)(-1),[S,k]=(0,e.useState)(!1),[C,T]=(0,e.useState)(-1),[E,$]=(0,e.useState)(-1);(0,e.useEffect)((()=>{P()}),[t,n]);const P=()=>{o([]),l([]),c([]),h([]),m(""),g(!1),j(-1),k(!1),T(-1),$(-1)},A=e=>new Promise((t=>setTimeout(t,e)));return(0,Qn.jsxs)(RT,{children:[(0,Qn.jsxs)(OT,{children:[(0,Qn.jsx)(NT,{children:"Knuth-Morris-Pratt (KMP) Algorithm"}),(0,Qn.jsx)(LT,{children:"KMP is an efficient string searching algorithm that uses information about the pattern to minimize comparisons when finding matches in a text."})]}),(0,Qn.jsxs)(iE,{children:[(0,Qn.jsx)(aE,{active:"visualization"===y,onClick:()=>b("visualization"),children:"Visualization"}),(0,Qn.jsx)(aE,{active:"explanation"===y,onClick:()=>b("explanation"),children:"Explanation"}),(0,Qn.jsx)(aE,{active:"code"===y,onClick:()=>b("code"),children:"Code"}),(0,Qn.jsx)(aE,{active:"complexity"===y,onClick:()=>b("complexity"),children:"Complexity"})]}),"visualization"===y&&(0,Qn.jsxs)(DT,{children:[(0,Qn.jsxs)(BT,{children:[(0,Qn.jsxs)(UT,{children:[(0,Qn.jsx)(WT,{children:"Text:"}),(0,Qn.jsx)(HT,{type:"text",value:t,onChange:e=>{r(e.target.value)},disabled:f||S})]}),(0,Qn.jsxs)(UT,{children:[(0,Qn.jsx)(WT,{children:"Pattern:"}),(0,Qn.jsx)(HT,{type:"text",value:n,onChange:e=>{i(e.target.value)},disabled:f||S})]})]}),(0,Qn.jsxs)(VT,{children:[(0,Qn.jsxs)(tE,{children:[(0,Qn.jsx)("span",{children:"Speed:"}),(0,Qn.jsxs)(rE,{children:[(0,Qn.jsx)("span",{children:"Fast"}),(0,Qn.jsx)(nE,{type:"range",min:"100",max:"1000",step:"100",value:v,onChange:e=>x(Number(e.target.value)),disabled:f||S}),(0,Qn.jsx)("span",{children:"Slow"})]})]}),(0,Qn.jsx)(_T,{onClick:async()=>{if(f||0===n.length)return;g(!0),h([]);const e=await(async()=>{if(f)return;k(!0),m("Computing LPS array...");const e=n.length,t=new Array(e).fill(0);o(t);let r=0,i=1;for(j(0),await A(v);i<e;)$(i),j(i),await A(v),n[i]===n[r]?(r++,t[i]=r,m(`LPS[${i}] = ${r} because characters at positions ${i} and ${r-1} match`),o([...t]),i++):0!==r?(m(`Characters don't match. Using previous value LPS[${r-1}] = ${t[r-1]}`),r=t[r-1],await A(v)):(t[i]=0,m(`Characters don't match and no prefix exists. Setting LPS[${i}] = 0`),o([...t]),i++),await A(v);return m("LPS array computation complete"),j(-1),k(!1),$(-1),t})();m("Starting KMP search..."),await A(v);const r=t.length,i=n.length;let a=0,p=0;const x=[];for(;a<r;){if(T(a),$(p),await A(v),n[p]===t[a]&&(m(`Match at text[${a}] and pattern[${p}]`),l([...s,a]),c([...d,p]),a++,p++),p===i){const t=a-p;x.push(t),h([...u,t]),m(`Pattern found starting at index ${t}`),await A(v),l([]),c([]),p=e[p-1],m(`Shifting pattern using LPS[${p-1}] = ${e[p-1]}`)}else a<r&&n[p]!==t[a]&&(0!==p?(m(`Mismatch at text[${a}] and pattern[${p}]. Shifting pattern using LPS[${p-1}] = ${e[p-1]}`),p=e[p-1]):(m(`Mismatch at text[${a}] and pattern[0]. Moving to next character in text.`),a++),l([]),c([]));await A(v)}0===x.length?m("Pattern not found in text"):m(`Search complete. Found ${x.length} occurrence(s) of the pattern.`),T(-1),$(-1),g(!1)},disabled:f||S||0===n.length,children:f||S?"Processing...":"Search"}),(0,Qn.jsx)(_T,{onClick:P,disabled:f||S,children:"Reset"})]}),p&&(0,Qn.jsx)(eE,{children:p}),(0,Qn.jsxs)("div",{children:[(0,Qn.jsx)("h3",{children:"Text"}),(0,Qn.jsx)(qT,{children:t.split("").map(((e,t)=>(0,Qn.jsxs)(KT,{active:t===C,matching:u.some((e=>t>=e&&t<e+n.length)),highlighted:s.includes(t),children:[(0,Qn.jsx)(GT,{children:t}),e]},t)))})]}),(0,Qn.jsxs)("div",{children:[(0,Qn.jsx)("h3",{children:"Pattern"}),(0,Qn.jsx)(qT,{children:n.split("").map(((e,t)=>(0,Qn.jsxs)(KT,{active:t===E,highlighted:d.includes(t),children:[(0,Qn.jsx)(GT,{children:t}),e]},t)))})]}),a.length>0&&(0,Qn.jsxs)(YT,{children:[(0,Qn.jsx)("h3",{children:"Longest Prefix Suffix (LPS) Array"}),(0,Qn.jsx)(XT,{children:(0,Qn.jsxs)(QT,{children:[(0,Qn.jsxs)("thead",{children:[(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(JT,{children:"Index"}),n.split("").map(((e,t)=>(0,Qn.jsx)(JT,{children:t},t)))]}),(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(JT,{children:"Character"}),n.split("").map(((e,t)=>(0,Qn.jsx)(JT,{children:e},t)))]})]}),(0,Qn.jsx)("tbody",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(ZT,{children:"LPS Value"}),a.map(((e,t)=>(0,Qn.jsx)(ZT,{highlighted:t===w,children:e},t)))]})})]})})]}),u.length>0&&(0,Qn.jsxs)(cE,{success:!0,children:["Pattern found at position(s): ",u.join(", ")]}),!1===f&&0===u.length&&p.includes("not found")&&(0,Qn.jsx)(cE,{success:!1,children:"Pattern not found in the text"})]}),"explanation"===y&&(0,Qn.jsx)(DT,{children:(0,Qn.jsxs)(oE,{children:[(0,Qn.jsx)("h3",{children:"What is the Knuth-Morris-Pratt (KMP) Algorithm?"}),(0,Qn.jsx)("p",{children:"The KMP algorithm is an efficient string matching algorithm that uses information about the pattern to minimize the number of comparisons when searching for pattern occurrences in a text. Unlike the naive approach (comparing at each position), KMP avoids unnecessary comparisons by utilizing the previously matched characters."}),(0,Qn.jsx)("h3",{children:"Key Concept: Longest Prefix Suffix (LPS) Array"}),(0,Qn.jsx)("p",{children:"The core of the KMP algorithm is the Longest Prefix Suffix (LPS) array, which:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"For each position i in the pattern, lps[i] stores the length of the longest proper prefix that is also a suffix ending at i"}),(0,Qn.jsx)("li",{children:"Helps in determining where to resume matching after a mismatch, eliminating redundant comparisons"}),(0,Qn.jsx)("li",{children:'Enables "sliding" the pattern efficiently without going back in the text'})]}),(0,Qn.jsx)("h3",{children:"How KMP Works"}),(0,Qn.jsxs)("ol",{children:[(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Preprocessing:"})," Compute the LPS array for the pattern.",(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"This helps identify where to resume comparisons after a mismatch"}),(0,Qn.jsx)("li",{children:"The LPS array is built in O(m) time, where m is the pattern length"})]})]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Searching:"})," Use the LPS array to efficiently search for the pattern in the text.",(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Maintain two pointers: i for the text and j for the pattern"}),(0,Qn.jsx)("li",{children:"When characters match, increment both pointers"}),(0,Qn.jsx)("li",{children:"When j equals the pattern length, a match is found"}),(0,Qn.jsxs)("li",{children:["On a mismatch:",(0,Qn.jsxs)("ul",{children:[(0,Qn.jsxs)("li",{children:["If j ",">"," 0, set j = lps[j-1] (skip unnecessary comparisons)"]}),(0,Qn.jsx)("li",{children:"If j = 0, increment i to check the next position in text"})]})]})]})]})]}),(0,Qn.jsx)("h3",{children:"Example"}),(0,Qn.jsx)("p",{children:'Consider searching for pattern "ABABCABAB" in text "ABABDABACDABABCABAB":'}),(0,Qn.jsxs)("ol",{children:[(0,Qn.jsx)("li",{children:'Compute the LPS array for "ABABCABAB", which is [0,0,1,2,0,1,2,3,4]'}),(0,Qn.jsx)("li",{children:"When a mismatch occurs (e.g., at 'D' in text), instead of starting over, use the LPS array to skip redundant comparisons"}),(0,Qn.jsx)("li",{children:'For example, if mismatch occurs after matching "ABAB", we know the last 2 characters of the matched portion are "AB", which is also the prefix of the pattern'}),(0,Qn.jsx)("li",{children:"So we can resume matching from the 3rd character of the pattern instead of starting over"})]}),(0,Qn.jsx)("h3",{children:"Advantages of KMP"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Never backtracks in the text - each character in the text is examined exactly once"}),(0,Qn.jsx)("li",{children:"Linear time complexity O(n+m) where n is text length and m is pattern length"}),(0,Qn.jsx)("li",{children:"Particularly efficient for patterns with repeating substrings"})]})]})}),"code"===y&&(0,Qn.jsx)(DT,{children:(0,Qn.jsx)(Qh,{code:'\npublic class KnuthMorrisPratt {\n    /**\n     * Searches for occurrences of pattern in text using the KMP algorithm\n     * \n     * @param text the text to search in\n     * @param pattern the pattern to search for\n     * @return an array of starting indices of all occurrences\n     */\n    public static int[] search(String text, String pattern) {\n        int n = text.length();\n        int m = pattern.length();\n        \n        if (m == 0) {\n            return new int[0];\n        }\n        \n        // Compute the longest prefix suffix array\n        int[] lps = computeLPSArray(pattern);\n        \n        List<Integer> occurrences = new ArrayList<>();\n        \n        int i = 0; // index for text\n        int j = 0; // index for pattern\n        \n        while (i < n) {\n            // Characters match, move both pointers\n            if (pattern.charAt(j) == text.charAt(i)) {\n                i++;\n                j++;\n            }\n            \n            // Found a full match\n            if (j == m) {\n                occurrences.add(i - j); // Store the starting index\n                j = lps[j - 1]; // Look for the next match\n            }\n            // Characters don\'t match\n            else if (i < n && pattern.charAt(j) != text.charAt(i)) {\n                if (j != 0) {\n                    j = lps[j - 1]; // Use the lps array to shift pattern\n                } else {\n                    i++; // Move to next character in text\n                }\n            }\n        }\n        \n        // Convert list to array\n        return occurrences.stream().mapToInt(Integer::intValue).toArray();\n    }\n    \n    /**\n     * Computes the Longest Prefix Suffix (LPS) array for KMP algorithm\n     * \n     * @param pattern the pattern string\n     * @return the LPS array\n     */\n    private static int[] computeLPSArray(String pattern) {\n        int m = pattern.length();\n        int[] lps = new int[m];\n        \n        // Length of the previous longest prefix suffix\n        int len = 0;\n        int i = 1;\n        \n        // lps[0] is always 0\n        lps[0] = 0;\n        \n        // Calculate lps[i] for i = 1 to m-1\n        while (i < m) {\n            if (pattern.charAt(i) == pattern.charAt(len)) {\n                // If characters match, increment length of matched characters\n                len++;\n                lps[i] = len;\n                i++;\n            } else {\n                // If characters don\'t match\n                if (len != 0) {\n                    // Use the previously computed LPS value\n                    len = lps[len - 1];\n                } else {\n                    // No prefix to match\n                    lps[i] = 0;\n                    i++;\n                }\n            }\n        }\n        \n        return lps;\n    }\n    \n    public static void main(String[] args) {\n        String text = "ABABDABACDABABCABAB";\n        String pattern = "ABABCABAB";\n        \n        int[] occurrences = search(text, pattern);\n        \n        if (occurrences.length > 0) {\n            System.out.println("Pattern found at indices:");\n            for (int index : occurrences) {\n                System.out.println(index);\n            }\n        } else {\n            System.out.println("Pattern not found");\n        }\n    }\n}\n',language:"java"})}),"complexity"===y&&(0,Qn.jsxs)(DT,{children:[(0,Qn.jsxs)(sE,{children:[(0,Qn.jsx)(lE,{children:"Time Complexity"}),(0,Qn.jsxs)(dE,{children:[(0,Qn.jsx)("thead",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(JT,{children:"Stage"}),(0,Qn.jsx)(JT,{children:"Complexity"}),(0,Qn.jsx)(JT,{children:"Explanation"})]})}),(0,Qn.jsxs)("tbody",{children:[(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(ZT,{children:"Preprocessing (LPS Array)"}),(0,Qn.jsx)(ZT,{children:"O(m)"}),(0,Qn.jsx)(ZT,{children:"Where m is the length of the pattern. Each character is processed once."})]}),(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(ZT,{children:"Searching"}),(0,Qn.jsx)(ZT,{children:"O(n)"}),(0,Qn.jsx)(ZT,{children:"Where n is the length of the text. Each character in the text is examined exactly once."})]}),(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(ZT,{children:"Overall"}),(0,Qn.jsx)(ZT,{children:"O(n+m)"}),(0,Qn.jsx)(ZT,{children:"Linear time complexity, significantly better than the naive O(n\xd7m) approach."})]})]})]})]}),(0,Qn.jsxs)(sE,{children:[(0,Qn.jsx)(lE,{children:"Space Complexity"}),(0,Qn.jsxs)(dE,{children:[(0,Qn.jsx)("thead",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(JT,{children:"Component"}),(0,Qn.jsx)(JT,{children:"Complexity"}),(0,Qn.jsx)(JT,{children:"Explanation"})]})}),(0,Qn.jsxs)("tbody",{children:[(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(ZT,{children:"LPS Array"}),(0,Qn.jsx)(ZT,{children:"O(m)"}),(0,Qn.jsx)(ZT,{children:"The LPS array stores one value for each character in the pattern."})]}),(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(ZT,{children:"Overall"}),(0,Qn.jsx)(ZT,{children:"O(m)"}),(0,Qn.jsx)(ZT,{children:"Only requires additional space proportional to the pattern length."})]})]})]})]}),(0,Qn.jsxs)(sE,{children:[(0,Qn.jsx)(lE,{children:"Comparison with Other String Matching Algorithms"}),(0,Qn.jsxs)(dE,{children:[(0,Qn.jsx)("thead",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(JT,{children:"Algorithm"}),(0,Qn.jsx)(JT,{children:"Time Complexity"}),(0,Qn.jsx)(JT,{children:"Preprocessing"}),(0,Qn.jsx)(JT,{children:"Suitable for"})]})}),(0,Qn.jsxs)("tbody",{children:[(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(ZT,{children:"Naive Approach"}),(0,Qn.jsx)(ZT,{children:"O(n\xd7m)"}),(0,Qn.jsx)(ZT,{children:"None"}),(0,Qn.jsx)(ZT,{children:"Short patterns or when simplicity is important"})]}),(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(ZT,{children:"KMP"}),(0,Qn.jsx)(ZT,{children:"O(n+m)"}),(0,Qn.jsx)(ZT,{children:"O(m)"}),(0,Qn.jsx)(ZT,{children:"Patterns with repeating sub-patterns"})]}),(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(ZT,{children:"Rabin-Karp"}),(0,Qn.jsx)(ZT,{children:"O(n+m) average, O(n\xd7m) worst"}),(0,Qn.jsx)(ZT,{children:"O(m)"}),(0,Qn.jsx)(ZT,{children:"Multiple pattern search, fingerprinting"})]}),(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(ZT,{children:"Boyer-Moore"}),(0,Qn.jsx)(ZT,{children:"O(n/m) best, O(n\xd7m) worst"}),(0,Qn.jsx)(ZT,{children:"O(m+\u03c3)"}),(0,Qn.jsx)(ZT,{children:"Large alphabets, patterns where mismatch likely near end"})]})]})]})]})]})]})},hE=Gn.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,pE=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,mE=Gn.h1`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,fE=Gn.p`
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
`,gE=Gn.h2`
  color: var(--primary);
  margin: 2rem 0 1rem;
  border-bottom: 2px solid var(--primary-light);
  padding-bottom: 0.5rem;
`,vE=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
`,xE=Gn.div`
  margin-bottom: 1rem;
`,yE=Gn.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
`,bE=Gn.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: var(--primary);
    outline: none;
  }
`,wE=Gn.button`
  background: var(--primary);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  margin-right: 1rem;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: var(--disabled);
    cursor: not-allowed;
  }
`,jE=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
  overflow-x: auto;
`,SE=Gn.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`,kE=Gn(Zu.td)`
  border: 1px solid var(--border);
  padding: 1rem;
  text-align: center;
  font-size: 1rem;
  position: relative;
  background-color: ${e=>e.active?"rgba(var(--primary-rgb), 0.2)":e.path?"rgba(var(--success-rgb), 0.2)":"transparent"};
`,CE=Gn.th`
  border: 1px solid var(--border);
  padding: 0.75rem;
  text-align: center;
  background-color: var(--primary-light);
  color: white;
`,TE=Gn.td`
  border: 1px solid var(--border);
  padding: 0.75rem;
  text-align: center;
  background-color: var(--primary-light);
  color: white;
  font-weight: bold;
`,EE=Gn.div`
  margin: 1rem 0;
  color: var(--text-secondary);
  line-height: 1.6;
`,$E=Gn.div`
  background: var(--surface-variant);
  padding: 1rem;
  border-radius: var(--border-radius);
  margin: 1rem 0;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,PE=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 1rem;
`,AE=Gn.pre`
  background: var(--code-bg);
  color: var(--code-text);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  line-height: 1.5;
`,IE=Gn.div`
  background: rgba(var(--info-rgb), 0.1);
  border-left: 4px solid var(--info);
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
`,zE=Gn.div`
  display: flex;
  margin: 1rem 0;
  gap: 1rem;
  flex-wrap: wrap;
`,ME=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
`,FE=Gn.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
`,RE=()=>{const[t,r]=(0,e.useState)("ABCBDAB"),[n,i]=(0,e.useState)("BDCABA"),[a,o]=(0,e.useState)([]),[s,l]=(0,e.useState)(""),[d,c]=(0,e.useState)(null),[u,h]=(0,e.useState)([]),[p,m]=(0,e.useState)(!1),[f,g]=(0,e.useState)(0),[v,x]=(0,e.useState)(0),[y,b]=(0,e.useState)(1e3),[w,j]=(0,e.useState)([]),S=(0,e.useRef)(null),k=()=>{const e=t.length+1,r=n.length+1,i=Array(e).fill().map((()=>Array(r).fill(0)));return o(i),i},C=e=>{if(e>=w.length)return void m(!1);const t=w[e];switch(g(e+1),t.type){case"compare":case"match":case"max":case"backtrack":case"backtrack-match":case"backtrack-up":case"backtrack-left":c({i:t.i,j:t.j})}S.current=setTimeout((()=>{C(e+1)}),y)},T=()=>{S.current&&(clearTimeout(S.current),S.current=null),m(!1)};return(0,e.useEffect)((()=>()=>{S.current&&clearTimeout(S.current)}),[]),(0,Qn.jsxs)(hE,{children:[(0,Qn.jsxs)(pE,{children:[(0,Qn.jsx)(mE,{children:"Longest Common Subsequence"}),(0,Qn.jsx)(fE,{children:"A classic dynamic programming problem to find the longest subsequence common to two sequences."})]}),(0,Qn.jsxs)(vE,{children:[(0,Qn.jsx)(gE,{children:"Input"}),(0,Qn.jsxs)(xE,{children:[(0,Qn.jsx)(yE,{htmlFor:"string1",children:"First String:"}),(0,Qn.jsx)(bE,{id:"string1",value:t,onChange:e=>r(e.target.value),disabled:p})]}),(0,Qn.jsxs)(xE,{children:[(0,Qn.jsx)(yE,{htmlFor:"string2",children:"Second String:"}),(0,Qn.jsx)(bE,{id:"string2",value:n,onChange:e=>i(e.target.value),disabled:p})]}),(0,Qn.jsxs)(zE,{children:[(0,Qn.jsx)(wE,{onClick:()=>{m(!0),g(0),c(null),h([]);const{steps:e}=(()=>{const e=t.length+1,r=n.length+1,i=k(),a=[];for(let o=1;o<e;o++)for(let e=1;e<r;e++)a.push({type:"compare",i:o,j:e,message:`Comparing ${t[o-1]} and ${n[e-1]}`}),t[o-1]===n[e-1]?(i[o][e]=i[o-1][e-1]+1,a.push({type:"match",i:o,j:e,value:i[o][e],message:`Match found: ${t[o-1]} = ${n[e-1]}. Setting dp[${o}][${e}] = dp[${o-1}][${e-1}] + 1 = ${i[o][e]}`})):(i[o][e]=Math.max(i[o-1][e],i[o][e-1]),a.push({type:"max",i:o,j:e,value:i[o][e],message:`No match. Setting dp[${o}][${e}] = max(dp[${o-1}][${e}], dp[${o}][${e-1}]) = max(${i[o-1][e]}, ${i[o][e-1]}) = ${i[o][e]}`}));let s=t.length,d=n.length,c="";const u=[];for(;s>0&&d>0;)u.push({i:s,j:d}),a.push({type:"backtrack",i:s,j:d,message:`Backtracking: Checking cell (${s}, ${d})`}),t[s-1]===n[d-1]?(c=t[s-1]+c,a.push({type:"backtrack-match",i:s,j:d,char:t[s-1],message:`Found a match: ${t[s-1]}. Adding to LCS.`}),s--,d--):i[s-1][d]>i[s][d-1]?(a.push({type:"backtrack-up",i:s,j:d,message:`Moving up since dp[${s-1}][${d}] (${i[s-1][d]}) > dp[${s}][${d-1}] (${i[s][d-1]})`}),s--):(a.push({type:"backtrack-left",i:s,j:d,message:`Moving left since dp[${s}][${d-1}] (${i[s][d-1]}) \u2265 dp[${s-1}][${d}] (${i[s-1][d]})`}),d--);return o(i),l(c),h(u),j(a),x(a.length),{lcsResult:c,steps:a}})();S.current&&clearTimeout(S.current),S.current=setTimeout((()=>{C(0)}),500)},disabled:p||!t||!n,children:"Start Visualization"}),(0,Qn.jsx)(wE,{onClick:T,disabled:!p,children:"Stop"}),(0,Qn.jsx)(wE,{onClick:()=>{T(),g(0),c(null),h([]),k(),l(""),j([])},disabled:p,children:"Reset"}),(0,Qn.jsxs)(ME,{children:[(0,Qn.jsx)(yE,{htmlFor:"speed",children:"Speed:"}),(0,Qn.jsx)(bE,{id:"speed",type:"range",min:"100",max:"2000",step:"100",value:2100-y,onChange:e=>b(2100-e.target.value),disabled:p,style:{width:"150px"}})]})]}),f>0&&(0,Qn.jsxs)(FE,{children:["Step ",f," of ",v]}),f>0&&f<=w.length&&(0,Qn.jsx)(EE,{children:w[f-1].message})]}),(0,Qn.jsxs)(jE,{children:[(0,Qn.jsx)(gE,{children:"DP Table"}),a.length>0&&(0,Qn.jsxs)(SE,{children:[(0,Qn.jsx)("thead",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(CE,{}),(0,Qn.jsx)(CE,{}),n.split("").map(((e,t)=>(0,Qn.jsx)(CE,{children:e},t)))]})}),(0,Qn.jsx)("tbody",{children:a.map(((e,r)=>(0,Qn.jsxs)("tr",{children:[0===r?(0,Qn.jsx)(TE,{}):(0,Qn.jsx)(TE,{children:t[r-1]}),e.map(((e,t)=>{const n=d&&d.i===r&&d.j===t,i=u.some((e=>e.i===r&&e.j===t));return(0,Qn.jsx)(kE,{active:n,path:i,initial:n?{scale:.8}:{scale:1},animate:n?{scale:1,backgroundColor:"rgba(var(--primary-rgb), 0.2)"}:i?{backgroundColor:"rgba(var(--success-rgb), 0.2)"}:{scale:1},transition:{duration:.3},children:e},t)}))]},r)))})]}),s&&(0,Qn.jsxs)($E,{children:[(0,Qn.jsx)("span",{children:"Longest Common Subsequence: "}),(0,Qn.jsx)("strong",{children:s})]})]}),(0,Qn.jsx)(gE,{children:"How It Works"}),(0,Qn.jsxs)(PE,{children:[(0,Qn.jsx)("p",{children:"The Longest Common Subsequence (LCS) problem is a classic problem in computer science, which aims to find the longest subsequence common to two sequences. Unlike substrings, subsequences are not required to occupy consecutive positions within the original sequences."}),(0,Qn.jsx)("h3",{children:"Dynamic Programming Approach"}),(0,Qn.jsx)("p",{children:"The LCS problem exhibits optimal substructure and overlapping subproblems, making it an ideal candidate for a dynamic programming solution."}),(0,Qn.jsx)("p",{children:"Let's define:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsxs)("li",{children:["X = ",t," (of length m)"]}),(0,Qn.jsxs)("li",{children:["Y = ",n," (of length n)"]})]}),(0,Qn.jsx)("p",{children:"We create a table DP[m+1][n+1] where DP[i][j] represents the length of LCS of the prefixes X[0...i-1] and Y[0...j-1]."}),(0,Qn.jsx)("h3",{children:"The Algorithm"}),(0,Qn.jsx)(AE,{children:'// Fill dp table\nfor (let i = 1; i <= m; i++) {\n  for (let j = 1; j <= n; j++) {\n    if (X[i-1] == Y[j-1]) {\n      // If the current characters match\n      dp[i][j] = dp[i-1][j-1] + 1;\n    } else {\n      // If they don\'t match, take the maximum from either excluding X[i-1] or Y[j-1]\n      dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);\n    }\n  }\n}\n\n// Backtrack to find the actual LCS\nlet i = m, j = n;\nlet lcs = "";\nwhile (i > 0 && j > 0) {\n  if (X[i-1] == Y[j-1]) {\n    // Current characters are part of LCS\n    lcs = X[i-1] + lcs;\n    i--;\n    j--;\n  }\n  else if (dp[i-1][j] > dp[i][j-1]) {\n    // Exclude current character from X\n    i--;\n  }\n  else {\n    // Exclude current character from Y\n    j--;\n  }\n}\n\nreturn lcs;'}),(0,Qn.jsx)("h3",{children:"Time and Space Complexity"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Time Complexity:"})," O(m \xd7 n) where m and n are the lengths of the two strings"]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Space Complexity:"})," O(m \xd7 n) for the DP table"]})]}),(0,Qn.jsxs)(IE,{children:[(0,Qn.jsx)("p",{children:"The LCS has numerous applications including:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Comparing DNA or protein sequences in bioinformatics"}),(0,Qn.jsx)("li",{children:"File comparison in utilities like diff"}),(0,Qn.jsx)("li",{children:"Version control systems to identify changes"}),(0,Qn.jsx)("li",{children:"Spell checking and correction"})]})]})]})]})},OE=Gn.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,NE=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,LE=Gn.h1`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,DE=Gn.p`
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
`,VE=Gn.h2`
  color: var(--primary);
  margin: 2rem 0 1rem;
  border-bottom: 2px solid var(--primary-light);
  padding-bottom: 0.5rem;
`,_E=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
`,BE=Gn.div`
  margin-bottom: 1rem;
`,UE=Gn.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
`,HE=Gn.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: var(--primary);
    outline: none;
  }
`,WE=Gn.button`
  background: var(--primary);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  margin-right: 1rem;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: var(--disabled);
    cursor: not-allowed;
  }
`,qE=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
  overflow-x: auto;
`,KE=Gn.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`,GE=Gn(Zu.div)`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--border);
  border-radius: var(--border-radius);
  margin: 0 4px;
  font-weight: 500;
  background-color: ${e=>e.active?"rgba(var(--primary-rgb), 0.2)":e.included?"rgba(var(--success-rgb), 0.2)":"var(--surface)"};
  position: relative;
`,YE=Gn.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`,XE=Gn(Zu.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 4px;
`,QE=Gn.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--border);
  border-radius: var(--border-radius);
  margin-top: 8px;
  font-weight: 500;
  background-color: ${e=>e.active?"rgba(var(--primary-rgb), 0.2)":e.optimal?"rgba(var(--success-rgb), 0.2)":"var(--surface)"};
`,JE=Gn.div`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid ${e=>e.active?"var(--primary)":"transparent"};
`,ZE=Gn.div`
  margin: 1rem 0;
  color: var(--text-secondary);
  line-height: 1.6;
`,e$=Gn.div`
  background: var(--surface-variant);
  padding: 1rem;
  border-radius: var(--border-radius);
  margin: 1rem 0;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,t$=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 1rem;
`,r$=Gn.pre`
  background: var(--code-bg);
  color: var(--code-text);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  line-height: 1.5;
`,n$=Gn.div`
  background: rgba(var(--info-rgb), 0.1);
  border-left: 4px solid var(--info);
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
`,i$=Gn.div`
  display: flex;
  margin: 1rem 0;
  gap: 1rem;
  flex-wrap: wrap;
`,a$=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
`,o$=Gn.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
`,s$=()=>{const[t,r]=(0,e.useState)("10,22,9,33,21,50,41,60,80"),[n,i]=(0,e.useState)([]),[a,o]=(0,e.useState)([]),[s,l]=(0,e.useState)([]),[d,c]=(0,e.useState)(null),[u,h]=(0,e.useState)(null),[p,m]=(0,e.useState)(0),[f,g]=(0,e.useState)([]),[v,x]=(0,e.useState)(!1),[y,b]=(0,e.useState)(0),[w,j]=(0,e.useState)(0),[S,k]=(0,e.useState)(1e3),[C,T]=(0,e.useState)([]),E=(0,e.useRef)(null),$=()=>{const{parsed:e,dpArray:r,prevArray:n}=(()=>{const e=t.split(",").map((e=>parseInt(e.trim())));i(e);const r=Array(e.length).fill(1);o(r);const n=Array(e.length).fill(-1);return l(n),{parsed:e,dpArray:r,prevArray:n}})(),a=[];for(let t=0;t<e.length;t++){a.push({type:"consider",index:t,message:`Considering element at index ${t}: ${e[t]}`});for(let i=0;i<t;i++)a.push({type:"compare",index:t,comparedWith:i,message:`Comparing elements at index ${t} (${e[t]}) and index ${i} (${e[i]})`}),e[t]>e[i]?(a.push({type:"check",index:t,comparedWith:i,message:`${e[t]} > ${e[i]}, checking if including ${e[i]} improves the LIS ending at ${e[t]}`}),r[i]+1>r[t]?(r[t]=r[i]+1,n[t]=i,a.push({type:"update",index:t,comparedWith:i,newValue:r[t],newPrev:i,message:`Improved! Setting dp[${t}] = dp[${i}] + 1 = ${r[t]} and prev[${t}] = ${i}`})):a.push({type:"skip",index:t,comparedWith:i,message:`No improvement. dp[${i}] + 1 (${r[i]+1}) is not greater than current dp[${t}] (${r[t]})`})):a.push({type:"skip",index:t,comparedWith:i,message:`${e[t]} \u2264 ${e[i]}, cannot extend subsequence`})}let s=0,d=0;for(let t=0;t<r.length;t++)r[t]>s&&(s=r[t],d=t,a.push({type:"max",index:t,maxLength:s,message:`Found a new maximum LIS length: ${s} ending at index ${t} (${e[t]})`}));const c=[];let u=d;for(;-1!==u;)c.unshift(e[u]),a.push({type:"backtrack",index:u,sequence:[...c],message:`Adding element at index ${u} (${e[u]}) to the LIS`}),u=n[u];return o(r),l(n),m(s),g(c),T(a),j(a.length),{dpArray:r,prevArray:n,maxLength:s,sequence:c,steps:a}},P=e=>{if(e>=C.length)return x(!1),c(null),void h(null);const t=C[e];switch(b(e+1),t.type){case"consider":case"max":case"backtrack":c(t.index),h(null);break;case"compare":case"check":case"update":case"skip":c(t.index),h(t.comparedWith)}E.current=setTimeout((()=>{P(e+1)}),S)},A=()=>{E.current&&(clearTimeout(E.current),E.current=null),x(!1)};return(0,e.useEffect)((()=>()=>{E.current&&clearTimeout(E.current)}),[]),(0,Qn.jsxs)(OE,{children:[(0,Qn.jsxs)(NE,{children:[(0,Qn.jsx)(LE,{children:"Longest Increasing Subsequence"}),(0,Qn.jsx)(DE,{children:"A classic dynamic programming problem to find the longest subsequence in which the elements are in strictly increasing order."})]}),(0,Qn.jsxs)(_E,{children:[(0,Qn.jsx)(VE,{children:"Input"}),(0,Qn.jsxs)(BE,{children:[(0,Qn.jsx)(UE,{htmlFor:"array",children:"Array (comma-separated numbers):"}),(0,Qn.jsx)(HE,{id:"array",value:t,onChange:e=>{r(e.target.value)},disabled:v})]}),(0,Qn.jsxs)(i$,{children:[(0,Qn.jsx)(WE,{onClick:()=>{x(!0),b(0),c(null),h(null),m(0),g([]);const{steps:e}=$();E.current&&clearTimeout(E.current),E.current=setTimeout((()=>{P(0)}),500)},disabled:v||!t,children:"Start Visualization"}),(0,Qn.jsx)(WE,{onClick:A,disabled:!v,children:"Stop"}),(0,Qn.jsx)(WE,{onClick:()=>{A(),b(0),c(null),h(null),i([]),o([]),l([]),m(0),g([]),T([])},disabled:v,children:"Reset"}),(0,Qn.jsxs)(a$,{children:[(0,Qn.jsx)(UE,{htmlFor:"speed",children:"Speed:"}),(0,Qn.jsx)(HE,{id:"speed",type:"range",min:"100",max:"2000",step:"100",value:2100-S,onChange:e=>k(2100-e.target.value),disabled:v,style:{width:"150px"}})]})]}),y>0&&(0,Qn.jsxs)(o$,{children:["Step ",y," of ",w]}),y>0&&y<=C.length&&(0,Qn.jsx)(ZE,{children:C[y-1].message})]}),(0,Qn.jsxs)(qE,{children:[(0,Qn.jsx)(VE,{children:"Array"}),(0,Qn.jsx)(KE,{children:n.map(((e,t)=>(0,Qn.jsxs)(GE,{active:t===d,included:f.includes(e),initial:{opacity:0},animate:{opacity:1},transition:{duration:.3,delay:.05*t},children:[e,t===u&&(0,Qn.jsx)(JE,{active:!0})]},t)))}),(0,Qn.jsx)(VE,{children:"DP Array"}),(0,Qn.jsx)(YE,{children:n.map(((e,t)=>(0,Qn.jsxs)(XE,{children:[(0,Qn.jsx)(GE,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:e}),(0,Qn.jsx)(QE,{active:t===d,optimal:t===d&&y>0&&f.includes(e),initial:{opacity:0},animate:{opacity:1},transition:{duration:.3,delay:.2},children:a[t]||1})]},t)))}),p>0&&(0,Qn.jsxs)(e$,{children:[(0,Qn.jsx)("span",{children:"Longest Increasing Subsequence: "}),(0,Qn.jsxs)("strong",{children:[f.join(", ")," (Length: ",p,")"]})]})]}),(0,Qn.jsx)(VE,{children:"How It Works"}),(0,Qn.jsxs)(t$,{children:[(0,Qn.jsx)("p",{children:"The Longest Increasing Subsequence (LIS) problem aims to find the length of the longest subsequence in an array such that all elements of the subsequence are in strictly increasing order."}),(0,Qn.jsx)("h3",{children:"Dynamic Programming Approach"}),(0,Qn.jsx)("p",{children:"We can solve this problem using dynamic programming by defining:"}),(0,Qn.jsx)("ul",{children:(0,Qn.jsx)("li",{children:"dp[i] = the length of the longest increasing subsequence ending at index i"})}),(0,Qn.jsx)("h3",{children:"The Algorithm"}),(0,Qn.jsx)(r$,{children:"// Initialize dp array\nfor (let i = 0; i < array.length; i++) {\n  dp[i] = 1;  // Every element is at least a subsequence of length 1\n  prev[i] = -1;  // Initialize prev array for backtracking\n}\n\n// Fill dp array\nfor (let i = 0; i < array.length; i++) {\n  for (let j = 0; j < i; j++) {\n    if (array[i] > array[j] && dp[j] + 1 > dp[i]) {\n      dp[i] = dp[j] + 1;  // Update LIS length\n      prev[i] = j;  // Store previous element in the sequence\n    }\n  }\n}\n\n// Find the length of the LIS and its ending index\nlet maxLength = 0;\nlet endIndex = 0;\n\nfor (let i = 0; i < dp.length; i++) {\n  if (dp[i] > maxLength) {\n    maxLength = dp[i];\n    endIndex = i;\n  }\n}\n\n// Reconstruct the subsequence\nconst sequence = [];\nlet currentIndex = endIndex;\n\nwhile (currentIndex !== -1) {\n  sequence.unshift(array[currentIndex]);\n  currentIndex = prev[currentIndex];\n}\n\nreturn { maxLength, sequence };"}),(0,Qn.jsx)("h3",{children:"Time and Space Complexity"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Time Complexity:"})," O(n\xb2) where n is the length of the array"]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Space Complexity:"})," O(n) for the dp and prev arrays"]})]}),(0,Qn.jsxs)(n$,{children:[(0,Qn.jsx)("p",{children:"There exists a more efficient O(n log n) solution to the LIS problem using binary search, but the dynamic programming approach shown here is more intuitive and easier to visualize."}),(0,Qn.jsx)("p",{children:"Applications of LIS include:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Box stacking problems"}),(0,Qn.jsx)("li",{children:"Building bridges"}),(0,Qn.jsx)("li",{children:"Sequence alignment in bioinformatics"}),(0,Qn.jsx)("li",{children:"Finding the longest chain of pairs"})]})]})]})]})},l$=Gn.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,d$=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,c$=Gn.h1`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,u$=Gn.p`
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
`,h$=Gn.h2`
  color: var(--primary);
  margin: 2rem 0 1rem;
  border-bottom: 2px solid var(--primary-light);
  padding-bottom: 0.5rem;
`,p$=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
`,m$=Gn.div`
  margin-bottom: 1rem;
`,f$=Gn.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
`,g$=Gn.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: var(--primary);
    outline: none;
  }
`,v$=Gn.button`
  background: var(--primary);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  margin-right: 1rem;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: var(--disabled);
    cursor: not-allowed;
  }
`,x$=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
  overflow-x: auto;
`,y$=Gn.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0;
  font-family: monospace;
  font-size: 1.5rem;
`,b$=Gn(Zu.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2px;
`,w$=Gn.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${e=>e.match?"var(--success)":e.current?"var(--primary)":e.mismatch?"var(--error)":"var(--border)"};
  background-color: ${e=>e.match?"rgba(var(--success-rgb), 0.2)":e.current?"rgba(var(--primary-rgb), 0.2)":e.mismatch?"rgba(var(--error-rgb), 0.2)":"transparent"};
  border-radius: var(--border-radius);
  position: relative;
`,j$=Gn.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
  padding-left: ${e=>e.offset}px;
  transition: padding-left 0.5s ease;
`,S$=Gn.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-top: 0.25rem;
`,k$=Gn.div`
  margin: 1rem 0;
  color: var(--text-secondary);
  line-height: 1.6;
`,C$=Gn.div`
  background: var(--surface-variant);
  padding: 1rem;
  border-radius: var(--border-radius);
  margin: 1rem 0;
  font-size: 1.1rem;
  line-height: 1.4;
`,T$=Gn.span`
  font-weight: 500;
  color: var(--primary);
`,E$=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 1rem;
`,$$=Gn.pre`
  background: var(--code-bg);
  color: var(--code-text);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  line-height: 1.5;
`,P$=Gn.div`
  background: rgba(var(--info-rgb), 0.1);
  border-left: 4px solid var(--info);
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
`,A$=Gn.div`
  display: flex;
  margin: 1rem 0;
  gap: 1rem;
  flex-wrap: wrap;
`,I$=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
`,z$=Gn.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
`,M$=()=>{const[t,r]=(0,e.useState)("ABABDABACDABABCABAB"),[n,i]=(0,e.useState)("ABABCABAB"),[a,o]=(0,e.useState)(0),[s,l]=(0,e.useState)(0),[d,c]=(0,e.useState)([]),[u,h]=(0,e.useState)(null),[p,m]=(0,e.useState)(!1),[f,g]=(0,e.useState)(0),[v,x]=(0,e.useState)(0),[y,b]=(0,e.useState)(1e3),[w,j]=(0,e.useState)([]),[S,k]=(0,e.useState)(44),C=(0,e.useRef)(null),T=e=>{if(e>=w.length)return void m(!1);const t=w[e];switch(g(e+1),t.type){case"position":case"compare":case"match":o(t.textPosition),l(t.patternPosition),h(null);break;case"mismatch":o(t.textPosition),l(t.patternPosition),h(t.textPosition)}C.current=setTimeout((()=>{T(e+1)}),y)},E=()=>{C.current&&(clearTimeout(C.current),C.current=null),m(!1)};return(0,e.useEffect)((()=>()=>{C.current&&clearTimeout(C.current)}),[]),(0,Qn.jsxs)(l$,{children:[(0,Qn.jsxs)(d$,{children:[(0,Qn.jsx)(c$,{children:"Naive Pattern Matching"}),(0,Qn.jsx)(u$,{children:"A straightforward algorithm to find all occurrences of a pattern within a given text."})]}),(0,Qn.jsxs)(p$,{children:[(0,Qn.jsx)(h$,{children:"Input"}),(0,Qn.jsxs)(m$,{children:[(0,Qn.jsx)(f$,{htmlFor:"text",children:"Text:"}),(0,Qn.jsx)(g$,{id:"text",value:t,onChange:e=>r(e.target.value),disabled:p})]}),(0,Qn.jsxs)(m$,{children:[(0,Qn.jsx)(f$,{htmlFor:"pattern",children:"Pattern to Find:"}),(0,Qn.jsx)(g$,{id:"pattern",value:n,onChange:e=>i(e.target.value),disabled:p})]}),(0,Qn.jsxs)(A$,{children:[(0,Qn.jsx)(v$,{onClick:()=>{m(!0),g(0),o(0),l(0),c([]),h(null);const{steps:e}=(()=>{const e=[],r=[];for(let i=0;i<=t.length-n.length;i++){let a;for(e.push({type:"position",textPosition:i,patternPosition:0,message:`Starting comparison at position ${i}`}),a=0;a<n.length;a++){if(e.push({type:"compare",textPosition:i+a,patternPosition:a,message:`Comparing text[${i+a}] = "${t[i+a]}" with pattern[${a}] = "${n[a]}"`}),t[i+a]!==n[a]){e.push({type:"mismatch",textPosition:i+a,patternPosition:a,message:`Mismatch found at position ${i+a}: "${t[i+a]}" \u2260 "${n[a]}"`});break}e.push({type:"match",textPosition:i+a,patternPosition:a,message:`Match found at position ${i+a}: "${t[i+a]}" = "${n[a]}"`})}a===n.length&&(r.push(i),e.push({type:"complete-match",position:i,message:`Complete pattern match found starting at position ${i}`}))}return j(e),x(e.length),c(r),{matches:r,steps:e}})();C.current&&clearTimeout(C.current),C.current=setTimeout((()=>{T(0)}),500)},disabled:p||!t||!n,children:"Start Visualization"}),(0,Qn.jsx)(v$,{onClick:E,disabled:!p,children:"Stop"}),(0,Qn.jsx)(v$,{onClick:()=>{E(),g(0),o(0),l(0),c([]),h(null),j([])},disabled:p,children:"Reset"}),(0,Qn.jsxs)(I$,{children:[(0,Qn.jsx)(f$,{htmlFor:"speed",children:"Speed:"}),(0,Qn.jsx)(g$,{id:"speed",type:"range",min:"100",max:"2000",step:"100",value:2100-y,onChange:e=>b(2100-e.target.value),disabled:p,style:{width:"150px"}})]})]}),f>0&&(0,Qn.jsxs)(z$,{children:["Step ",f," of ",v]}),f>0&&f<=w.length&&(0,Qn.jsx)(k$,{children:w[f-1].message})]}),(0,Qn.jsxs)(x$,{children:[(0,Qn.jsx)(h$,{children:"Visualization"}),(0,Qn.jsx)(y$,{children:t.split("").map(((e,t)=>{const r=d.some((e=>t>=e&&t<e+n.length)),i=t===a,o=t===u;return(0,Qn.jsxs)(b$,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3,delay:.02*t},children:[(0,Qn.jsx)(w$,{match:r,current:i,mismatch:o,children:e}),(0,Qn.jsx)(S$,{children:t})]},t)}))}),(0,Qn.jsx)(j$,{offset:a*S,children:n.split("").map(((e,t)=>{const r=t===s,n=r&&a===u;return(0,Qn.jsxs)(b$,{children:[(0,Qn.jsx)(w$,{current:r,mismatch:n,children:e}),(0,Qn.jsx)(S$,{children:t})]},t)}))}),d.length>0&&(0,Qn.jsxs)(C$,{children:["Pattern found at positions: ",(0,Qn.jsx)(T$,{children:d.join(", ")})]}),f===v&&0===d.length&&(0,Qn.jsx)(C$,{children:"No matches found"})]}),(0,Qn.jsx)(h$,{children:"How It Works"}),(0,Qn.jsxs)(E$,{children:[(0,Qn.jsx)("p",{children:"The Naive Pattern Matching algorithm is the simplest approach to finding all occurrences of a pattern string within a text string."}),(0,Qn.jsx)("h3",{children:"The Algorithm"}),(0,Qn.jsx)("p",{children:"The algorithm works by sliding the pattern over the text one by one and checking for a match at each position. For each position, it checks if the pattern matches the text at that position by comparing characters one by one."}),(0,Qn.jsx)($$,{children:"function naivePatternMatching(text, pattern) {\n  const n = text.length;\n  const m = pattern.length;\n  const matches = [];\n  \n  // Slide the pattern over the text\n  for (let i = 0; i <= n - m; i++) {\n    let j;\n    \n    // Check for pattern match at current position\n    for (j = 0; j < m; j++) {\n      if (text[i + j] !== pattern[j]) {\n        break;  // Mismatch found, break inner loop\n      }\n    }\n    \n    // If inner loop completed without breaking, we found a match\n    if (j === m) {\n      matches.push(i);  // Store the starting position of the match\n    }\n  }\n  \n  return matches;\n}"}),(0,Qn.jsx)("h3",{children:"Time and Space Complexity"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Time Complexity:"})," O((n-m+1) \xd7 m) where:",(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"n is the length of the text"}),(0,Qn.jsx)("li",{children:"m is the length of the pattern"})]}),"In the worst case, this is O(n \xd7 m)"]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Space Complexity:"})," O(1) if we don't count the space used to store the matches"]})]}),(0,Qn.jsxs)(P$,{children:[(0,Qn.jsx)("p",{children:"While simple to understand and implement, the Naive Pattern Matching algorithm is not the most efficient for large texts. More advanced algorithms like Knuth-Morris-Pratt (KMP), Boyer-Moore, or Rabin-Karp offer better performance by avoiding redundant comparisons."}),(0,Qn.jsx)("p",{children:"Applications of pattern matching include:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Text editors for find/replace functionality"}),(0,Qn.jsx)("li",{children:"Intrusion detection systems"}),(0,Qn.jsx)("li",{children:"Spam filters"}),(0,Qn.jsx)("li",{children:"Plagiarism detection"}),(0,Qn.jsx)("li",{children:"DNA sequence analysis"})]})]})]})]})},F$=Gn.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,R$=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,O$=Gn.h1`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,N$=Gn.p`
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
`,L$=Gn.h2`
  color: var(--primary);
  margin: 2rem 0 1rem;
  border-bottom: 2px solid var(--primary-light);
  padding-bottom: 0.5rem;
`,D$=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
`,V$=Gn.div`
  margin-bottom: 1rem;
`,_$=Gn.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
`,B$=Gn.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: var(--primary);
    outline: none;
  }
`,U$=Gn.button`
  background: var(--primary);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  margin-right: 1rem;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: var(--disabled);
    cursor: not-allowed;
  }
`,H$=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
  overflow-x: auto;
`,W$=Gn.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0;
  font-family: monospace;
  font-size: 1.5rem;
`,q$=Gn(Zu.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2px;
`,K$=Gn.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${e=>e.match?"var(--success)":e.current?"var(--primary)":e.mismatch?"var(--error)":"var(--border)"};
  background-color: ${e=>e.match?"rgba(var(--success-rgb), 0.2)":e.current?"rgba(var(--primary-rgb), 0.2)":e.mismatch?"rgba(var(--error-rgb), 0.2)":"transparent"};
  border-radius: var(--border-radius);
  position: relative;
`,G$=Gn.div`
  font-family: monospace;
  font-size: 1.2rem;
  text-align: center;
  margin: 1rem 0;
  padding: 1rem;
  background-color: rgba(var(--primary-rgb), 0.05);
  border-radius: var(--border-radius);
`,Y$=Gn.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
  padding-left: ${e=>e.offset}px;
  transition: padding-left 0.5s ease;
`,X$=Gn.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-top: 0.25rem;
`,Q$=Gn.div`
  margin: 1rem 0;
  color: var(--text-secondary);
  line-height: 1.6;
`,J$=Gn.div`
  background: var(--surface-variant);
  padding: 1rem;
  border-radius: var(--border-radius);
  margin: 1rem 0;
  font-size: 1.1rem;
  line-height: 1.4;
`,Z$=Gn.span`
  font-weight: 500;
  color: var(--primary);
`,eP=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 1rem;
`,tP=Gn.pre`
  background: var(--code-bg);
  color: var(--code-text);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  line-height: 1.5;
`,rP=Gn.div`
  background: rgba(var(--info-rgb), 0.1);
  border-left: 4px solid var(--info);
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
`,nP=Gn.div`
  display: flex;
  margin: 1rem 0;
  gap: 1rem;
  flex-wrap: wrap;
`,iP=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
`,aP=Gn.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
`,oP=Gn.span`
  background-color: rgba(var(--primary-rgb), 0.1);
  color: var(--primary);
  padding: 0 4px;
  border-radius: 3px;
  font-weight: 500;
`,sP=()=>{const[t,r]=(0,e.useState)("ABABCABABCABDAB"),[n,i]=(0,e.useState)("ABABC"),[a,o]=(0,e.useState)(101),[s,l]=(0,e.useState)(0),[d,c]=(0,e.useState)(0),[u,h]=(0,e.useState)(0),[p,m]=(0,e.useState)([]),[f,g]=(0,e.useState)(null),[v,x]=(0,e.useState)([]),[y,b]=(0,e.useState)(!1),[w,j]=(0,e.useState)(0),[S,k]=(0,e.useState)(0),[C,T]=(0,e.useState)(1e3),[E,$]=(0,e.useState)([]),[P,A]=(0,e.useState)(44),I=(0,e.useRef)(null),z=(e,t,r)=>{let n=0;for(let i=0;i<r;i++)n=(256*n+e.charCodeAt(i))%t;return n},M=(e,t,r,n,i)=>{let a=(256*(e-t.charCodeAt(0)*i)+r.charCodeAt(0))%n;return a<0&&(a+=n),a},F=e=>{if(e>=E.length)return void b(!1);const t=E[e];switch(j(e+1),t.type){case"hash":"pattern"===t.target?c(t.hashValue):"window"===t.target&&(h(t.hashValue),l(t.windowStart),x([t.windowStart,t.windowEnd]));break;case"slide":h(t.newHash),l(t.position),x([t.windowStart,t.windowEnd]),g(null);break;case"hash-match":case"hash-mismatch":case"match":default:break;case"verify":t.match||g(t.textPosition);break;case"mismatch":g(t.position)}I.current=setTimeout((()=>{F(e+1)}),C)},R=()=>{I.current&&(clearTimeout(I.current),I.current=null),b(!1)};return(0,e.useEffect)((()=>()=>{I.current&&clearTimeout(I.current)}),[]),(0,Qn.jsxs)(F$,{children:[(0,Qn.jsxs)(R$,{children:[(0,Qn.jsx)(O$,{children:"Rabin-Karp Algorithm"}),(0,Qn.jsx)(N$,{children:"An efficient string searching algorithm that uses hashing to find instances of a pattern within a text."})]}),(0,Qn.jsxs)(D$,{children:[(0,Qn.jsx)(L$,{children:"Input"}),(0,Qn.jsxs)(V$,{children:[(0,Qn.jsx)(_$,{htmlFor:"text",children:"Text:"}),(0,Qn.jsx)(B$,{id:"text",value:t,onChange:e=>r(e.target.value),disabled:y})]}),(0,Qn.jsxs)(V$,{children:[(0,Qn.jsx)(_$,{htmlFor:"pattern",children:"Pattern to Find:"}),(0,Qn.jsx)(B$,{id:"pattern",value:n,onChange:e=>i(e.target.value),disabled:y})]}),(0,Qn.jsxs)(V$,{children:[(0,Qn.jsx)(_$,{htmlFor:"prime",children:"Prime Number (for hash function):"}),(0,Qn.jsx)(B$,{id:"prime",type:"number",value:a,onChange:e=>{const t=parseInt(e.target.value)||101;o(t)},min:"2",disabled:y})]}),(0,Qn.jsxs)(nP,{children:[(0,Qn.jsx)(U$,{onClick:()=>{b(!0),j(0),l(0),c(0),h(0),m([]),g(null),x([]);const{steps:e}=(()=>{const e=[],r=[],i=t.length,o=n.length;if(o>i)return $([{type:"info",message:"Pattern is longer than text, no matches possible"}]),k(1),{matches:[],steps:[]};const s=z(n,a,o);c(s),e.push({type:"hash",hashValue:s,target:"pattern",message:`Computed hash value for pattern "${n}": ${s}`});const l=z(t.substring(0,o),a,o);h(l),e.push({type:"hash",hashValue:l,target:"window",windowStart:0,windowEnd:o-1,message:`Computed hash value for first window "${t.substring(0,o)}": ${l}`});const d=((e,t)=>{let r=1;for(let n=0;n<e-1;n++)r=256*r%t;return r})(o,a);if(e.push({type:"power",power:d,message:`Calculated highest power of 256 for rolling hash: ${d}`}),s===l){e.push({type:"hash-match",position:0,message:`Hash values match at position 0: ${s} = ${l}. Verifying characters...`});let i=!0;for(let r=0;r<o;r++)if(e.push({type:"verify",textPosition:r,patternPosition:r,match:t[r]===n[r],message:`Comparing text[${r}] = "${t[r]}" with pattern[${r}] = "${n[r]}": ${t[r]===n[r]?"Match":"Mismatch"}`}),t[r]!==n[r]){i=!1,e.push({type:"mismatch",position:r,message:`Character mismatch at position ${r}. Continuing search...`});break}i&&(r.push(0),e.push({type:"match",position:0,message:"Complete pattern match found starting at position 0"}))}else e.push({type:"hash-mismatch",message:`Hash values don't match: ${s} \u2260 ${l}. Continuing search...`});for(let c=1;c<=i-o;c++){const i=M(l,t[c-1],t[c+o-1],a,d);if(e.push({type:"slide",position:c,oldHash:l,newHash:i,windowStart:c,windowEnd:c+o-1,message:`Sliding window to position ${c}: "${t.substring(c,c+o)}". New hash: ${i}`}),l=i,s===l){e.push({type:"hash-match",position:c,message:`Hash values match at position ${c}: ${s} = ${l}. Verifying characters...`});let i=!0;for(let r=0;r<o;r++)if(e.push({type:"verify",textPosition:c+r,patternPosition:r,match:t[c+r]===n[r],message:`Comparing text[${c+r}] = "${t[c+r]}" with pattern[${r}] = "${n[r]}": ${t[c+r]===n[r]?"Match":"Mismatch"}`}),t[c+r]!==n[r]){i=!1,e.push({type:"mismatch",position:c+r,message:`Character mismatch at position ${c+r}. Continuing search...`});break}i&&(r.push(c),e.push({type:"match",position:c,message:`Complete pattern match found starting at position ${c}`}))}else e.push({type:"hash-mismatch",message:`Hash values don't match: ${s} \u2260 ${l}. Continuing search...`})}return $(e),k(e.length),m(r),{matches:r,steps:e}})();I.current&&clearTimeout(I.current),I.current=setTimeout((()=>{F(0)}),500)},disabled:y||!t||!n,children:"Start Visualization"}),(0,Qn.jsx)(U$,{onClick:R,disabled:!y,children:"Stop"}),(0,Qn.jsx)(U$,{onClick:()=>{R(),j(0),l(0),c(0),h(0),m([]),g(null),x([]),$([])},disabled:y,children:"Reset"}),(0,Qn.jsxs)(iP,{children:[(0,Qn.jsx)(_$,{htmlFor:"speed",children:"Speed:"}),(0,Qn.jsx)(B$,{id:"speed",type:"range",min:"100",max:"2000",step:"100",value:2100-C,onChange:e=>T(2100-e.target.value),disabled:y,style:{width:"150px"}})]})]}),w>0&&(0,Qn.jsxs)(aP,{children:["Step ",w," of ",S]}),w>0&&w<=E.length&&(0,Qn.jsx)(Q$,{children:E[w-1].message})]}),(0,Qn.jsxs)(H$,{children:[(0,Qn.jsx)(L$,{children:"Visualization"}),(0,Qn.jsxs)(G$,{children:[(0,Qn.jsxs)("div",{children:["Pattern Hash: ",(0,Qn.jsx)(oP,{children:d})]}),(0,Qn.jsxs)("div",{children:["Current Window Hash: ",(0,Qn.jsx)(oP,{children:u})]})]}),(0,Qn.jsx)(W$,{children:t.split("").map(((e,t)=>{const r=p.some((e=>t>=e&&t<e+n.length)),i=v.length&&t>=v[0]&&t<=v[1],a=t===f;return(0,Qn.jsxs)(q$,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3,delay:.02*t},children:[(0,Qn.jsx)(K$,{match:r,current:i,mismatch:a,children:e}),(0,Qn.jsx)(X$,{children:t})]},t)}))}),(0,Qn.jsx)(Y$,{offset:s*P,children:n.split("").map(((e,t)=>(0,Qn.jsxs)(q$,{children:[(0,Qn.jsx)(K$,{children:e}),(0,Qn.jsx)(X$,{children:t})]},t)))}),p.length>0&&(0,Qn.jsxs)(J$,{children:["Pattern found at positions: ",(0,Qn.jsx)(Z$,{children:p.join(", ")})]}),w===S&&0===p.length&&(0,Qn.jsx)(J$,{children:"No matches found"})]}),(0,Qn.jsx)(L$,{children:"How It Works"}),(0,Qn.jsxs)(eP,{children:[(0,Qn.jsx)("p",{children:"The Rabin-Karp algorithm is a string-searching algorithm that uses hashing to find patterns in strings. Unlike naive pattern matching, it avoids comparing every character by using a hash function to compare pattern hash with window hash."}),(0,Qn.jsx)("h3",{children:"The Algorithm"}),(0,Qn.jsx)("p",{children:"Rabin-Karp calculates a hash value for the pattern and for each possible m-length substring of the text (where m is the pattern length). If the hash values match, it performs a full comparison to confirm a match."}),(0,Qn.jsx)("p",{children:"Key steps of the algorithm:"}),(0,Qn.jsxs)("ol",{children:[(0,Qn.jsx)("li",{children:"Calculate the hash value of the pattern"}),(0,Qn.jsx)("li",{children:"Calculate the hash value of the first m characters of the text"}),(0,Qn.jsx)("li",{children:"Compare the hash values. If they match, verify character by character"}),(0,Qn.jsx)("li",{children:"Slide the window by one position and efficiently recalculate the hash (rolling hash)"}),(0,Qn.jsx)("li",{children:"Repeat steps 3-4 until the end of the text"})]}),(0,Qn.jsx)(tP,{children:"function rabinKarp(text, pattern, prime = 101) {\n  const n = text.length;\n  const m = pattern.length;\n  const matches = [];\n  \n  // If pattern is longer than text, no matches possible\n  if (m > n) return matches;\n  \n  // Calculate hash value for pattern\n  let patternHash = 0;\n  let textHash = 0;\n  let highestPower = 1;\n  \n  // Calculate hash for pattern and first window of text\n  for (let i = 0; i < m; i++) {\n    patternHash = (patternHash * 256 + pattern.charCodeAt(i)) % prime;\n    textHash = (textHash * 256 + text.charCodeAt(i)) % prime;\n  }\n  \n  // Calculate highest power of 256 for the rolling hash calculation\n  for (let i = 0; i < m - 1; i++) {\n    highestPower = (highestPower * 256) % prime;\n  }\n  \n  // Check all potential matches\n  for (let i = 0; i <= n - m; i++) {\n    // If hashes match, verify character by character\n    if (patternHash === textHash) {\n      let match = true;\n      \n      for (let j = 0; j < m; j++) {\n        if (text[i + j] !== pattern[j]) {\n          match = false;\n          break;\n        }\n      }\n      \n      if (match) matches.push(i);\n    }\n    \n    // Calculate hash for next window\n    if (i < n - m) {\n      textHash = ((textHash - text.charCodeAt(i) * highestPower) * 256 \n                 + text.charCodeAt(i + m)) % prime;\n                 \n      // Ensure hash is positive\n      if (textHash < 0) textHash += prime;\n    }\n  }\n  \n  return matches;\n}"}),(0,Qn.jsx)("h3",{children:"Time and Space Complexity"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Average Time Complexity:"})," O(n + m) where:",(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"n is the length of the text"}),(0,Qn.jsx)("li",{children:"m is the length of the pattern"})]})]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Worst Case Time Complexity:"})," O(n \xd7 m) - occurs when all hash values match but the strings don't"]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Space Complexity:"})," O(1)"]})]}),(0,Qn.jsxs)(rP,{children:[(0,Qn.jsx)("p",{children:'The efficiency of Rabin-Karp depends heavily on the chosen hash function. A good hash function minimizes the number of "spurious hits" (false hash matches) to achieve the average-case time complexity.'}),(0,Qn.jsx)("p",{children:"The algorithm is especially useful when searching for multiple patterns in a text, as you only need to compute the hash value of the text window once per position."}),(0,Qn.jsx)("p",{children:"Applications of Rabin-Karp include:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Plagiarism detection"}),(0,Qn.jsx)("li",{children:"Finding DNA patterns"}),(0,Qn.jsx)("li",{children:"Two-dimensional pattern matching"}),(0,Qn.jsx)("li",{children:"Detecting duplicate files (file fingerprinting)"})]})]})]})]})},lP=Gn.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,dP=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,cP=Gn.h1`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,uP=Gn.p`
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
`,hP=Gn.h2`
  color: var(--primary);
  margin: 2rem 0 1rem;
  border-bottom: 2px solid var(--primary-light);
  padding-bottom: 0.5rem;
`,pP=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
`,mP=Gn.div`
  margin-bottom: 1rem;
`,fP=Gn.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
`,gP=Gn.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: var(--primary);
    outline: none;
  }
`,vP=Gn.button`
  background: var(--primary);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  margin-right: 1rem;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: var(--disabled);
    cursor: not-allowed;
  }
`,xP=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
  overflow-x: auto;
`,yP=Gn.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`,bP=Gn(Zu.td)`
  border: 1px solid var(--border);
  padding: 1rem;
  text-align: center;
  font-size: 1rem;
  position: relative;
  background-color: ${e=>e.active?"rgba(var(--primary-rgb), 0.2)":e.optimal?"rgba(var(--success-rgb), 0.2)":e.current?"rgba(var(--info-rgb), 0.2)":"transparent"};
`,wP=Gn.th`
  border: 1px solid var(--border);
  padding: 0.75rem;
  text-align: center;
  background-color: var(--primary-light);
  color: white;
`,jP=Gn.td`
  border: 1px solid var(--border);
  padding: 0.75rem;
  text-align: center;
  background-color: var(--primary-light);
  color: white;
  font-weight: bold;
`,SP=Gn.div`
  margin: 1rem 0;
  color: var(--text-secondary);
  line-height: 1.6;
`,kP=Gn.div`
  background: var(--surface-variant);
  padding: 1rem;
  border-radius: var(--border-radius);
  margin: 1rem 0;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,CP=(Gn.div`
  margin-top: 10px;
  font-size: 0.8rem;
  color: ${e=>e.insert?"var(--success)":e.delete?"var(--error)":e.substitute?"var(--warning)":"var(--text-secondary)"};
  font-weight: ${e=>e.selected?"bold":"normal"};
`,Gn.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-bottom: 8px solid ${e=>e.insert?"var(--success)":e.delete?"var(--error)":e.substitute?"var(--warning)":e.copy?"var(--info)":"transparent"};
`),TP=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 1rem;
`,EP=Gn.pre`
  background: var(--code-bg);
  color: var(--code-text);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  line-height: 1.5;
`,$P=Gn.div`
  background: rgba(var(--info-rgb), 0.1);
  border-left: 4px solid var(--info);
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
`,PP=Gn.div`
  display: flex;
  margin: 1rem 0;
  gap: 1rem;
  flex-wrap: wrap;
`,AP=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
`,IP=Gn.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
`,zP=Gn.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 1rem 0;
`,MP=Gn.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,FP=Gn.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background-color: ${e=>e.color};
`,RP=()=>{const[t,r]=(0,e.useState)("kitten"),[n,i]=(0,e.useState)("sitting"),[a,o]=(0,e.useState)([]),[s,l]=(0,e.useState)(null),[d,c]=(0,e.useState)([]),[u,h]=(0,e.useState)(null),[p,m]=(0,e.useState)(0),[f,g]=(0,e.useState)([]),[v,x]=(0,e.useState)(!1),[y,b]=(0,e.useState)(0),[w,j]=(0,e.useState)(0),[S,k]=(0,e.useState)(1e3),[C,T]=(0,e.useState)([]),E=(0,e.useRef)(null),$=()=>{const e=t.length+1,r=n.length+1,i=Array(e).fill().map((()=>Array(r).fill(0)));for(let n=0;n<=t.length;n++)i[n][0]=n;for(let t=0;t<=n.length;t++)i[0][t]=t;return o(i),i},P=e=>{if(e>=C.length)return void x(!1);const r=C[e];switch(b(e+1),r.type){case"compare":case"cost":case"update":l({i:r.i,j:r.j}),h(null);break;case"backtrack-start":l(null),h({i:t.length,j:n.length});break;case"backtrack":l(null),h({i:r.i,j:r.j})}E.current=setTimeout((()=>{P(e+1)}),S)},A=()=>{E.current&&(clearTimeout(E.current),E.current=null),x(!1)};(0,e.useEffect)((()=>()=>{E.current&&clearTimeout(E.current)}),[]);return(0,Qn.jsxs)(lP,{children:[(0,Qn.jsxs)(dP,{children:[(0,Qn.jsx)(cP,{children:"Levenshtein Distance"}),(0,Qn.jsx)(uP,{children:"A string metric for measuring the difference between two sequences, also known as the edit distance."})]}),(0,Qn.jsxs)(pP,{children:[(0,Qn.jsx)(hP,{children:"Input"}),(0,Qn.jsxs)(mP,{children:[(0,Qn.jsx)(fP,{htmlFor:"source",children:"Source String:"}),(0,Qn.jsx)(gP,{id:"source",value:t,onChange:e=>r(e.target.value),disabled:v})]}),(0,Qn.jsxs)(mP,{children:[(0,Qn.jsx)(fP,{htmlFor:"target",children:"Target String:"}),(0,Qn.jsx)(gP,{id:"target",value:n,onChange:e=>i(e.target.value),disabled:v})]}),(0,Qn.jsxs)(PP,{children:[(0,Qn.jsx)(vP,{onClick:()=>{x(!0),b(0),l(null),h(null),c([]),g([]);const{steps:e}=(()=>{const e=t.length+1,r=n.length+1,i=$(),a=[];for(let o=1;o<e;o++)for(let e=1;e<r;e++){const r=i[o-1][e]+1,s=i[o][e-1]+1,l=i[o-1][e-1]+(t[o-1]===n[e-1]?0:1);a.push({type:"compare",i:o,j:e,message:`Comparing source[${o-1}]="${t[o-1]}" with target[${e-1}]="${n[e-1]}"`}),a.push({type:"cost",i:o,j:e,deleteCost:r,insertCost:s,substituteCost:l,message:`Costs - Delete: ${r}, Insert: ${s}, ${t[o-1]===n[e-1]?"Copy":"Substitute"}: ${l}`}),i[o][e]=Math.min(r,s,l);let d="";d=i[o][e]===r?"delete":i[o][e]===s?"insert":t[o-1]===n[e-1]?"copy":"substitute",a.push({type:"update",i:o,j:e,value:i[o][e],operation:d,message:`Cell (${o},${e}) updated with minimum cost: ${i[o][e]} (${d})`})}const s=[],l=[];let d=t.length,u=n.length;for(a.push({type:"backtrack-start",message:`Starting backtracking from cell (${d},${u}) with value ${i[d][u]}`});d>0||u>0;)s.push({i:d,j:u}),d>0&&u>0&&i[d][u]===i[d-1][u-1]&&t[d-1]===n[u-1]?(l.push({type:"copy",i:d,j:u,char:t[d-1]}),a.push({type:"backtrack",i:d,j:u,nextI:d-1,nextJ:u-1,operation:"copy",message:`Characters match: "${t[d-1]}" copied. Move diagonally to (${d-1},${u-1})`}),d--,u--):d>0&&u>0&&i[d][u]===i[d-1][u-1]+1?(l.push({type:"substitute",i:d,j:u,oldChar:t[d-1],newChar:n[u-1]}),a.push({type:"backtrack",i:d,j:u,nextI:d-1,nextJ:u-1,operation:"substitute",message:`Substituted "${t[d-1]}" with "${n[u-1]}". Move diagonally to (${d-1},${u-1})`}),d--,u--):d>0&&i[d][u]===i[d-1][u]+1?(l.push({type:"delete",i:d,j:u,char:t[d-1]}),a.push({type:"backtrack",i:d,j:u,nextI:d-1,nextJ:u,operation:"delete",message:`Deleted "${t[d-1]}". Move up to (${d-1},${u})`}),d--):u>0&&i[d][u]===i[d][u-1]+1&&(l.push({type:"insert",i:d,j:u,char:n[u-1]}),a.push({type:"backtrack",i:d,j:u,nextI:d,nextJ:u-1,operation:"insert",message:`Inserted "${n[u-1]}". Move left to (${d},${u-1})`}),u--);return l.reverse(),o(i),m(i[t.length][n.length]),c(s),g(l),T(a),j(a.length),{distance:i[t.length][n.length],steps:a,operations:l}})();E.current&&clearTimeout(E.current),E.current=setTimeout((()=>{P(0)}),500)},disabled:v||!t||!n,children:"Start Visualization"}),(0,Qn.jsx)(vP,{onClick:A,disabled:!v,children:"Stop"}),(0,Qn.jsx)(vP,{onClick:()=>{A(),b(0),l(null),h(null),c([]),g([]),$(),m(0),T([])},disabled:v,children:"Reset"}),(0,Qn.jsxs)(AP,{children:[(0,Qn.jsx)(fP,{htmlFor:"speed",children:"Speed:"}),(0,Qn.jsx)(gP,{id:"speed",type:"range",min:"100",max:"2000",step:"100",value:2100-S,onChange:e=>k(2100-e.target.value),disabled:v,style:{width:"150px"}})]})]}),y>0&&(0,Qn.jsxs)(IP,{children:["Step ",y," of ",w]}),y>0&&y<=C.length&&(0,Qn.jsx)(SP,{children:C[y-1].message})]}),(0,Qn.jsxs)(xP,{children:[(0,Qn.jsx)(hP,{children:"DP Table"}),(0,Qn.jsxs)(zP,{children:[(0,Qn.jsxs)(MP,{children:[(0,Qn.jsx)(FP,{color:"rgba(var(--primary-rgb), 0.2)"}),(0,Qn.jsx)("span",{children:"Current Cell"})]}),(0,Qn.jsxs)(MP,{children:[(0,Qn.jsx)(FP,{color:"rgba(var(--info-rgb), 0.2)"}),(0,Qn.jsx)("span",{children:"Backtracking"})]}),(0,Qn.jsxs)(MP,{children:[(0,Qn.jsx)(FP,{color:"rgba(var(--success-rgb), 0.2)"}),(0,Qn.jsx)("span",{children:"Optimal Path"})]})]}),a.length>0&&(0,Qn.jsxs)(yP,{children:[(0,Qn.jsx)("thead",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(wP,{}),(0,Qn.jsx)(wP,{}),n.split("").map(((e,t)=>(0,Qn.jsx)(wP,{children:e},t)))]})}),(0,Qn.jsx)("tbody",{children:a.map(((e,r)=>(0,Qn.jsxs)("tr",{children:[0===r?(0,Qn.jsx)(jP,{}):(0,Qn.jsx)(jP,{children:t[r-1]}),e.map(((e,t)=>{const n=s&&s.i===r&&s.j===t,i=u&&u.i===r&&u.j===t,a=d.some((e=>e.i===r&&e.j===t));let o=null;if(a&&r>0&&t>0){const e=f.find((e=>e.i===r&&e.j===t));e&&(o=e.type)}return(0,Qn.jsxs)(bP,{active:n,current:i,optimal:a,initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[e,o&&(0,Qn.jsx)(CP,{insert:"insert"===o,delete:"delete"===o,substitute:"substitute"===o,copy:"copy"===o})]},t)}))]},r)))})]}),p>0&&(0,Qn.jsxs)(kP,{children:[(0,Qn.jsx)("span",{children:"Levenshtein Distance: "}),(0,Qn.jsx)("strong",{children:p})]}),f.length>0&&(0,Qn.jsxs)(kP,{children:[(0,Qn.jsx)("span",{children:"Operations: "}),(0,Qn.jsx)("span",{children:f.map(((e,t)=>{switch(e.type){case"copy":return`Keep '${e.char}'`;case"substitute":return`Replace '${e.oldChar}' with '${e.newChar}'`;case"delete":return`Delete '${e.char}'`;case"insert":return`Insert '${e.char}'`;default:return""}})).join(", ")})]})]}),(0,Qn.jsx)(hP,{children:"How It Works"}),(0,Qn.jsxs)(TP,{children:[(0,Qn.jsx)("p",{children:"The Levenshtein distance between two strings is the minimum number of single-character edits (insertions, deletions, or substitutions) required to change one string into the other."}),(0,Qn.jsx)("h3",{children:"Dynamic Programming Approach"}),(0,Qn.jsx)("p",{children:"We solve this problem using a dynamic programming approach by filling a table where:"}),(0,Qn.jsx)("ul",{children:(0,Qn.jsx)("li",{children:"dp[i][j] represents the minimum number of operations to convert the first i characters of the source string to the first j characters of the target string."})}),(0,Qn.jsx)("h3",{children:"The Algorithm"}),(0,Qn.jsx)("p",{children:"The DP recurrence relation is:"}),(0,Qn.jsx)(EP,{children:"// Base cases\ndp[i][0] = i // Deleting i characters from source\ndp[0][j] = j // Inserting j characters from target\n\n// For each cell in the table\ndp[i][j] = min(\n  dp[i-1][j] + 1,      // Deletion\n  dp[i][j-1] + 1,      // Insertion\n  dp[i-1][j-1] + (source[i-1] === target[j-1] ? 0 : 1)  // Substitution or Copy\n)"}),(0,Qn.jsx)(EP,{children:"function levenshteinDistance(source, target) {\n  const m = source.length;\n  const n = target.length;\n  \n  // Create the DP table\n  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));\n  \n  // Initialize first row and column\n  for (let i = 0; i <= m; i++) {\n    dp[i][0] = i;\n  }\n  \n  for (let j = 0; j <= n; j++) {\n    dp[0][j] = j;\n  }\n  \n  // Fill the DP table\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (source[i-1] === target[j-1]) {\n        // No operation needed if characters match\n        dp[i][j] = dp[i-1][j-1];\n      } else {\n        // Minimum of the three operations\n        dp[i][j] = Math.min(\n          dp[i-1][j] + 1,  // Deletion\n          dp[i][j-1] + 1,  // Insertion\n          dp[i-1][j-1] + 1 // Substitution\n        );\n      }\n    }\n  }\n  \n  return dp[m][n];\n}"}),(0,Qn.jsx)("h3",{children:"Time and Space Complexity"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Time Complexity:"})," O(m \xd7 n) where m and n are the lengths of the source and target strings"]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Space Complexity:"})," O(m \xd7 n) for the DP table"]})]}),(0,Qn.jsxs)($P,{children:[(0,Qn.jsx)("p",{children:"Levenshtein distance has numerous applications:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Spell-checking and auto-correct features"}),(0,Qn.jsx)("li",{children:"DNA sequence alignment in bioinformatics"}),(0,Qn.jsx)("li",{children:"Plagiarism detection"}),(0,Qn.jsx)("li",{children:"Fuzzy string searching"}),(0,Qn.jsx)("li",{children:"Speech recognition"})]}),(0,Qn.jsx)("p",{children:"The distance can be interpreted as the minimum number of operations needed to transform one string into another, which makes it intuitive for measuring string similarity."})]})]})]})},OP=Gn.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,NP=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,LP=Gn.h1`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,DP=Gn.p`
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
`,VP=Gn.h2`
  color: var(--primary);
  margin: 2rem 0 1rem;
  border-bottom: 2px solid var(--primary-light);
  padding-bottom: 0.5rem;
`,_P=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
`,BP=Gn.div`
  margin-bottom: 1rem;
`,UP=Gn.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
`,HP=Gn.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: var(--primary);
    outline: none;
  }
`,WP=Gn.button`
  background: var(--primary);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  margin-right: 1rem;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: var(--disabled);
    cursor: not-allowed;
  }
`,qP=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
  overflow-x: auto;
`,KP=Gn.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,GP=Gn.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,YP=Gn.div`
  font-weight: bold;
  width: 100px;
  text-align: center;
`,XP=Gn(Zu.div)`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  background-color: ${e=>e.highlighted?"rgba(var(--primary-rgb), 0.2)":e.selected?"rgba(var(--success-rgb), 0.2)":"var(--surface-variant)"};
  transition: background-color 0.3s;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: ${e=>e.selected?"8px solid rgba(var(--success-rgb), 0.7)":"none"};
  }
`,QP=Gn.div`
  background: var(--surface-variant);
  padding: 1rem;
  border-radius: var(--border-radius);
  margin: 1rem 0;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,JP=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: var(--surface-variant);
  border-radius: var(--border-radius);
  min-height: 80px;
`,ZP=Gn.div`
  color: var(--text-primary);
  margin-bottom: 1rem;
`,eA=Gn.div`
  display: flex;
  margin: 1rem 0;
  gap: 1rem;
  flex-wrap: wrap;
`,tA=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
`,rA=Gn.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
`,nA=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 1rem;
`,iA=Gn.pre`
  background: var(--code-bg);
  color: var(--code-text);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  line-height: 1.5;
`,aA=Gn.div`
  background: rgba(var(--info-rgb), 0.1);
  border-left: 4px solid var(--info);
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
`,oA=()=>{const[t,r]=(0,e.useState)(42),[n,i]=(0,e.useState)([]),[a,o]=(0,e.useState)([]),[s,l]=(0,e.useState)(0),[d,c]=(0,e.useState)(0),[u,h]=(0,e.useState)(0),[p,m]=(0,e.useState)(-1),[f,g]=(0,e.useState)([]),[v,x]=(0,e.useState)([]),[y,b]=(0,e.useState)(!1),[w,j]=(0,e.useState)(1e3),S=(0,e.useRef)(null),k=e=>{if(e>=v.length)return void b(!1);const t=v[e];l(e+1),h(t.remaining),m(n.length-1-t.highlighted),g(t.selected.map((e=>n.indexOf(e)))),S.current=setTimeout((()=>{k(e+1)}),w)},C=()=>{S.current&&(clearTimeout(S.current),S.current=null),b(!1)};(0,e.useEffect)((()=>()=>{S.current&&clearTimeout(S.current)}),[]);return(0,Qn.jsxs)(OP,{children:[(0,Qn.jsxs)(NP,{children:[(0,Qn.jsx)(LP,{children:"Zeckendorf's Representation"}),(0,Qn.jsx)(DP,{children:"Every positive integer can be represented uniquely as a sum of non-consecutive Fibonacci numbers."})]}),(0,Qn.jsxs)(_P,{children:[(0,Qn.jsx)(VP,{children:"Input"}),(0,Qn.jsxs)(BP,{children:[(0,Qn.jsx)(UP,{htmlFor:"number",children:"Number to Represent:"}),(0,Qn.jsx)(HP,{id:"number",type:"number",min:"1",value:t,onChange:e=>r(e.target.value),disabled:y})]}),(0,Qn.jsxs)(eA,{children:[(0,Qn.jsx)(WP,{onClick:()=>{if(!t||isNaN(parseInt(t))||parseInt(t)<=0)return;b(!0),l(0),m(-1),g([]),o([]);const e=parseInt(t),{steps:r}=(e=>{const t=(e=>{const t=[1,2];let r=t[0]+t[1];for(;r<=e;)t.push(r),r=t[t.length-1]+t[t.length-2];return t})(e);i(t);const r=[];r.push({type:"init",message:`Generated Fibonacci numbers up to ${e}: ${t.join(", ")}`,remaining:e,highlighted:-1,selected:[]});let n=e;const a=[];for(let i=t.length-1;i>=0;i--)r.push({type:"check",message:`Checking if Fibonacci number ${t[i]} can be included (remaining: ${n})`,remaining:n,highlighted:i,selected:[...a]}),t[i]<=n?(a.push(t[i]),n-=t[i],r.push({type:"select",message:`Selected ${t[i]}, remaining: ${n}`,remaining:n,highlighted:i,selected:[...a]})):r.push({type:"skip",message:`Skipped ${t[i]} (too large for remaining ${n})`,remaining:n,highlighted:i,selected:[...a]});return r.push({type:"complete",message:`Zeckendorf representation of ${e}: ${a.join(" + ")}`,remaining:0,highlighted:-1,selected:[...a]}),o(a),x(r),c(r.length),{representation:a,steps:r}})(e);S.current&&clearTimeout(S.current),S.current=setTimeout((()=>{k(0)}),500)},disabled:y||!t||isNaN(parseInt(t))||parseInt(t)<=0,children:"Start Visualization"}),(0,Qn.jsx)(WP,{onClick:C,disabled:!y,children:"Stop"}),(0,Qn.jsx)(WP,{onClick:()=>{C(),l(0),m(-1),g([]),o([]),i([]),h(0),x([])},disabled:y,children:"Reset"}),(0,Qn.jsxs)(tA,{children:[(0,Qn.jsx)(UP,{htmlFor:"speed",children:"Speed:"}),(0,Qn.jsx)(HP,{id:"speed",type:"range",min:"100",max:"2000",step:"100",value:2100-w,onChange:e=>j(2100-e.target.value),disabled:y,style:{width:"150px"}})]})]}),s>0&&(0,Qn.jsxs)(rA,{children:["Step ",s," of ",d]})]}),(0,Qn.jsxs)(qP,{children:[(0,Qn.jsx)(VP,{children:"Visualization"}),n.length>0&&(0,Qn.jsxs)(Qn.Fragment,{children:[(0,Qn.jsxs)(JP,{children:[s>0&&s<=v.length&&(0,Qn.jsx)(ZP,{children:v[s-1].message}),u>0&&(0,Qn.jsxs)("div",{children:["Remaining: ",u]})]}),(0,Qn.jsxs)(KP,{children:[(0,Qn.jsxs)(GP,{children:[(0,Qn.jsx)(YP,{children:"Index"}),n.map(((e,t)=>(0,Qn.jsx)(XP,{children:t+1},`idx-${t}`)))]}),(0,Qn.jsxs)(GP,{children:[(0,Qn.jsx)(YP,{children:"Fibonacci"}),n.map(((e,t)=>(0,Qn.jsx)(XP,{highlighted:t===p,selected:f.includes(t),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.3,delay:.05*t},children:e},`fib-${t}`)))]})]}),a.length>0&&(0,Qn.jsxs)(QP,{children:[(0,Qn.jsx)("span",{children:"Zeckendorf Representation:"}),(0,Qn.jsx)("strong",{children:0===a.length?"":a.join(" + ")+" = "+t})]})]})]}),(0,Qn.jsx)(VP,{children:"How It Works"}),(0,Qn.jsxs)(nA,{children:[(0,Qn.jsx)("p",{children:"Zeckendorf's theorem states that every positive integer can be represented uniquely as the sum of one or more distinct Fibonacci numbers in such a way that the sum does not include any two consecutive Fibonacci numbers."}),(0,Qn.jsx)("h3",{children:"The Algorithm"}),(0,Qn.jsx)("p",{children:"The greedy algorithm to find Zeckendorf's representation works as follows:"}),(0,Qn.jsxs)("ol",{children:[(0,Qn.jsx)("li",{children:"Generate Fibonacci numbers up to the input number."}),(0,Qn.jsx)("li",{children:"Starting from the largest Fibonacci number less than or equal to the input, include it in the representation."}),(0,Qn.jsx)("li",{children:"Subtract this Fibonacci number from the input, and repeat the process with the remainder."})]}),(0,Qn.jsx)(iA,{children:"function zeckendorfRepresentation(n) {\n  // Generate Fibonacci numbers up to n\n  const fibonacciNumbers = [];\n  let a = 1, b = 2;\n  \n  fibonacciNumbers.push(a);\n  fibonacciNumbers.push(b);\n  \n  while (b + a <= n) {\n    const next = a + b;\n    fibonacciNumbers.push(next);\n    a = b;\n    b = next;\n  }\n  \n  // Find representation using greedy approach\n  const representation = [];\n  let remaining = n;\n  \n  for (let i = fibonacciNumbers.length - 1; i >= 0; i--) {\n    if (fibonacciNumbers[i] <= remaining) {\n      representation.push(fibonacciNumbers[i]);\n      remaining -= fibonacciNumbers[i];\n    }\n  }\n  \n  return representation;\n}"}),(0,Qn.jsx)("h3",{children:"Properties"}),(0,Qn.jsx)("p",{children:"The Zeckendorf representation has some interesting properties:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"It is unique for each positive integer."}),(0,Qn.jsx)("li",{children:"It never includes consecutive Fibonacci numbers."}),(0,Qn.jsx)("li",{children:"It uses the minimal number of Fibonacci numbers needed to represent the given integer."})]}),(0,Qn.jsx)("h3",{children:"Time and Space Complexity"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Time Complexity:"})," O(log n) since there are approximately log(n) Fibonacci numbers less than or equal to n."]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Space Complexity:"})," O(log n) to store the Fibonacci numbers and the representation."]})]}),(0,Qn.jsxs)(aA,{children:[(0,Qn.jsx)("p",{children:"Zeckendorf's representation is named after Belgian mathematician \xc9douard Zeckendorf, who published this theorem in 1972. It has applications in various fields, including:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Data compression algorithms"}),(0,Qn.jsx)("li",{children:"Fibonacci coding in information theory"}),(0,Qn.jsx)("li",{children:"Optimization problems and game theory"}),(0,Qn.jsx)("li",{children:"Number system representations"})]}),(0,Qn.jsx)("p",{children:"Interestingly, the Zeckendorf representation can be viewed as a non-standard positional number system with an irregular base."})]})]})]})},sA=Gn.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,lA=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,dA=Gn.h1`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,cA=Gn.p`
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
`,uA=Gn.h2`
  color: var(--primary);
  margin: 2rem 0 1rem;
  border-bottom: 2px solid var(--primary-light);
  padding-bottom: 0.5rem;
`,hA=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
`,pA=Gn.div`
  margin-bottom: 1rem;
`,mA=Gn.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
`,fA=Gn.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: var(--primary);
    outline: none;
  }
`,gA=Gn.button`
  background: var(--primary);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  margin-right: 1rem;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: var(--disabled);
    cursor: not-allowed;
  }
`,vA=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
  overflow-x: auto;
`,xA=Gn.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  gap: 10px;
  margin: 2rem 0;
`,yA=Gn(Zu.div)`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  font-weight: bold;
  font-size: 1.1rem;
  background-color: ${e=>e.isPrime?"rgba(var(--success-rgb), 0.2)":e.isComposite?"rgba(var(--error-rgb), 0.2)":e.isCurrentMultiple?"rgba(var(--warning-rgb), 0.2)":e.isCurrent?"rgba(var(--primary-rgb), 0.2)":"var(--surface-variant)"};
  border: 2px solid ${e=>e.isPrime?"var(--success)":e.isComposite?"var(--error)":e.isCurrentMultiple?"var(--warning)":e.isCurrent?"var(--primary)":"var(--border)"};
  color: ${e=>e.isPrime?"var(--success)":e.isComposite?"var(--error)":e.isCurrentMultiple?"var(--warning)":e.isCurrent?"var(--primary)":"var(--text-primary)"};
  position: relative;
`,bA=Gn.div`
  margin: 1rem 0;
  color: var(--text-secondary);
  line-height: 1.6;
`,wA=Gn.div`
  background: var(--surface-variant);
  padding: 1rem;
  border-radius: var(--border-radius);
  margin: 1rem 0;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,jA=Gn.div`
  margin-top: 1rem;
  padding: 1rem;
  background: var(--surface-variant);
  border-radius: var(--border-radius);
  line-height: 1.8;
`,SA=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,kA=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,CA=Gn.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background-color: ${e=>e.color};
  border: 1px solid ${e=>e.border};
`,TA=Gn.div`
  display: flex;
  margin: 1rem 0;
  gap: 1rem;
  flex-wrap: wrap;
`,EA=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
`,$A=Gn.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
`,PA=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 1rem;
`,AA=Gn.pre`
  background: var(--code-bg);
  color: var(--code-text);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  line-height: 1.5;
`,IA=Gn.div`
  background: rgba(var(--info-rgb), 0.1);
  border-left: 4px solid var(--info);
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
`,zA=SC((()=>{const{algorithmState:t,updateAlgorithmState:r}=wC(),[n,i]=(0,e.useState)(t.limit||30),[a,o]=(0,e.useState)(t.numbers||[]),[s,l]=(0,e.useState)(t.primes||[]),[d,c]=(0,e.useState)(t.currentNumber||null),[u,h]=(0,e.useState)(t.currentMultiples||[]),[p,m]=(0,e.useState)(!1),[f,g]=(0,e.useState)(0),[v,x]=(0,e.useState)(0),[y,b]=(0,e.useState)(1e3),[w,j]=(0,e.useState)(t.stepsLog||[]),S=(0,e.useRef)(null);(0,e.useEffect)((()=>{r({limit:n,numbers:a,primes:s,currentNumber:d,currentMultiples:u,stepsLog:w})}),[n,a,s,d,u,w,r]);const k=()=>{const e=[];for(let t=2;t<=n;t++)e.push({value:t,isPrime:!1,isComposite:!1});return o(e),e},C=e=>{if(e>=w.length)return void m(!1);const t=w[e];switch(g(e+1),t.type){case"init":case"complete":c(null),h([]);break;case"prime":c(t.currentNumber),h([]),o((e=>{const r=[...e],n=r.findIndex((e=>e.value===t.currentNumber));return-1!==n&&(r[n]={...r[n],isPrime:!0}),r}));break;case"mark_multiples":c(t.currentNumber),h(t.multiples),o((e=>{const r=[...e];return t.multiples.forEach((e=>{const t=r.findIndex((t=>t.value===e));-1!==t&&(r[t]={...r[t],isComposite:!0})})),r}))}S.current=setTimeout((()=>{C(e+1)}),y)},T=()=>{S.current&&(clearTimeout(S.current),S.current=null),m(!1)};(0,e.useEffect)((()=>()=>{S.current&&clearTimeout(S.current)}),[]);return(0,Qn.jsxs)(sA,{children:[(0,Qn.jsxs)(lA,{children:[(0,Qn.jsx)(dA,{children:"Sieve of Eratosthenes"}),(0,Qn.jsx)(cA,{children:"An ancient algorithm for finding all prime numbers up to a specified integer limit."})]}),(0,Qn.jsxs)(hA,{children:[(0,Qn.jsx)(uA,{children:"Input"}),(0,Qn.jsxs)(pA,{children:[(0,Qn.jsx)(mA,{htmlFor:"limit",children:"Upper Limit (2-1000):"}),(0,Qn.jsx)(fA,{id:"limit",type:"number",min:"2",max:"1000",value:n,onChange:e=>{const t=parseInt(e.target.value);!isNaN(t)&&t>=2&&t<=1e3&&i(t)},disabled:p})]}),(0,Qn.jsxs)(TA,{children:[(0,Qn.jsx)(gA,{onClick:()=>{m(!0),g(0),c(null),h([]),l([]);const{steps:e}=(()=>{const e=k(),t=[],r=[];t.push({type:"init",message:`Initialized array with numbers from 2 to ${n}. No numbers are marked as prime or composite yet.`,currentNumber:null,multiples:[]});for(let n=0;n<e.length;n++){const i=e[n].value;if(e[n].isComposite)continue;e[n].isPrime=!0,r.push(i),t.push({type:"prime",message:`${i} is a prime number (no smaller number divides it).`,currentNumber:i,multiples:[]});const a=[];for(let t=n+i;t<e.length;t+=i)e[t].isComposite||(a.push(e[t].value),e[t].isComposite=!0);a.length>0&&t.push({type:"mark_multiples",message:`Marking all multiples of ${i} as composite: ${a.join(", ")}`,currentNumber:i,multiples:[...a]})}return t.push({type:"complete",message:`Sieve complete. Found ${r.length} prime numbers up to ${n}.`,currentNumber:null,multiples:[]}),j(t),x(t.length),l(r),{steps:t,primeNumbers:r}})();S.current&&clearTimeout(S.current),S.current=setTimeout((()=>{C(0)}),500)},disabled:p||!n||n<2,children:"Start Visualization"}),(0,Qn.jsx)(gA,{onClick:T,disabled:!p,children:"Stop"}),(0,Qn.jsx)(gA,{onClick:()=>{T(),g(0),c(null),h([]),k(),l([]),j([])},disabled:p,children:"Reset"}),(0,Qn.jsxs)(EA,{children:[(0,Qn.jsx)(mA,{htmlFor:"speed",children:"Speed:"}),(0,Qn.jsx)(fA,{id:"speed",type:"range",min:"100",max:"2000",step:"100",value:2100-y,onChange:e=>b(2100-e.target.value),disabled:p,style:{width:"150px"}})]})]}),f>0&&(0,Qn.jsxs)($A,{children:["Step ",f," of ",v]}),f>0&&f<=w.length&&(0,Qn.jsx)(bA,{children:w[f-1].message})]}),(0,Qn.jsxs)(vA,{children:[(0,Qn.jsx)(uA,{children:"Visualization"}),(0,Qn.jsxs)(SA,{children:[(0,Qn.jsxs)(kA,{children:[(0,Qn.jsx)(CA,{color:"rgba(var(--success-rgb), 0.2)",border:"var(--success)"}),(0,Qn.jsx)("span",{children:"Prime Numbers"})]}),(0,Qn.jsxs)(kA,{children:[(0,Qn.jsx)(CA,{color:"rgba(var(--error-rgb), 0.2)",border:"var(--error)"}),(0,Qn.jsx)("span",{children:"Composite Numbers"})]}),(0,Qn.jsxs)(kA,{children:[(0,Qn.jsx)(CA,{color:"rgba(var(--primary-rgb), 0.2)",border:"var(--primary)"}),(0,Qn.jsx)("span",{children:"Current Number"})]}),(0,Qn.jsxs)(kA,{children:[(0,Qn.jsx)(CA,{color:"rgba(var(--warning-rgb), 0.2)",border:"var(--warning)"}),(0,Qn.jsx)("span",{children:"Current Multiples"})]})]}),(0,Qn.jsx)(xA,{children:a.map((e=>(0,Qn.jsx)(yA,{isPrime:e.isPrime,isComposite:e.isComposite,isCurrent:e.value===d,isCurrentMultiple:u.includes(e.value),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.3,delay:.001*(e.value-2)},children:e.value},e.value)))}),s.length>0&&(0,Qn.jsxs)(wA,{children:[(0,Qn.jsx)("span",{children:"Total Prime Numbers Found:"}),(0,Qn.jsx)("strong",{children:s.length})]}),s.length>0&&(0,Qn.jsxs)(jA,{children:[(0,Qn.jsxs)("strong",{children:["Prime Numbers up to ",n,":"]}),(0,Qn.jsx)("div",{style:{marginTop:"0.5rem"},children:s.join(", ")})]})]}),(0,Qn.jsx)(uA,{children:"How It Works"}),(0,Qn.jsxs)(PA,{children:[(0,Qn.jsx)("p",{children:"The Sieve of Eratosthenes is an ancient algorithm for finding all prime numbers up to a specified integer limit. It efficiently filters out composite numbers by iteratively marking multiples of each prime, starting from 2."}),(0,Qn.jsx)("h3",{children:"The Algorithm"}),(0,Qn.jsxs)("ol",{children:[(0,Qn.jsx)("li",{children:"Create a list of consecutive integers from 2 to the input limit, all initially unmarked."}),(0,Qn.jsx)("li",{children:"Start with the first unmarked number (initially 2), which is prime."}),(0,Qn.jsx)("li",{children:"Mark all multiples of this number in the list as composite (not prime)."}),(0,Qn.jsx)("li",{children:"Find the next unmarked number and repeat steps 2-3 until you have processed up to the square root of the limit."}),(0,Qn.jsx)("li",{children:"All remaining unmarked numbers are prime."})]}),(0,Qn.jsx)("p",{children:"The algorithm gets its name from the ancient Greek mathematician Eratosthenes of Cyrene, who first described it. It is one of the most efficient ways to find all primes up to a given limit."}),(0,Qn.jsx)(AA,{children:"function sieveOfEratosthenes(limit) {\n  // Create array of size limit+1 and fill with true\n  const isPrime = Array(limit + 1).fill(true);\n  \n  // 0 and 1 are not prime numbers\n  isPrime[0] = isPrime[1] = false;\n  \n  // Loop through numbers from 2 to square root of limit\n  for (let i = 2; i * i <= limit; i++) {\n    // If the current number is prime\n    if (isPrime[i]) {\n      // Mark all multiples as non-prime\n      for (let j = i * i; j <= limit; j += i) {\n        isPrime[j] = false;\n      }\n    }\n  }\n  \n  // Collect all primes into an array\n  const primes = [];\n  for (let i = 2; i <= limit; i++) {\n    if (isPrime[i]) {\n      primes.push(i);\n    }\n  }\n  \n  return primes;\n}"}),(0,Qn.jsx)("h3",{children:"Time and Space Complexity"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Time Complexity:"})," O(n log log n) - Nearly linear time"]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Space Complexity:"})," O(n) - We need an array of size n"]})]}),(0,Qn.jsx)("h3",{children:"Optimization"}),(0,Qn.jsx)("p",{children:"Common optimizations to the basic algorithm include:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Only checking multiples starting from p\xb2 (since all smaller multiples would have already been marked by smaller primes)."}),(0,Qn.jsx)("li",{children:"Only checking odd numbers after handling 2 (since all even numbers greater than 2 are composite)."}),(0,Qn.jsx)("li",{children:"Only iterating up to the square root of the limit during sieving (since any composite number \u2264 n has a prime factor \u2264 \u221an)."})]}),(0,Qn.jsxs)(IA,{children:[(0,Qn.jsx)("p",{children:"The Sieve of Eratosthenes has many applications:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Finding prime numbers for cryptographic algorithms"}),(0,Qn.jsx)("li",{children:"Number theory research"}),(0,Qn.jsx)("li",{children:"As a building block for other algorithms, like prime factorization"}),(0,Qn.jsx)("li",{children:"Generating large lists of primes for mathematical computations"})]}),(0,Qn.jsx)("p",{children:'While efficient for moderate ranges, for very large ranges, more advanced algorithms like the "Sieve of Atkin" or segmented sieves are often used.'})]})]})]})}),"sieve"),MA=zA,FA=Gn.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,RA=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,OA=Gn.h1`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,NA=Gn.p`
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
`,LA=Gn.h2`
  color: var(--primary);
  margin: 2rem 0 1rem;
  border-bottom: 2px solid var(--primary-light);
  padding-bottom: 0.5rem;
`,DA=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
`,VA=Gn.div`
  margin-bottom: 1rem;
`,_A=Gn.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
`,BA=Gn.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: var(--primary);
    outline: none;
  }
`,UA=Gn.div`
  display: flex;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`,HA=Gn.button`
  padding: 0.5rem 1rem;
  background-color: ${e=>e.active?"var(--primary)":"var(--surface-variant)"};
  color: ${e=>e.active?"white":"var(--text-primary)"};
  border: 1px solid ${e=>e.active?"var(--primary)":"var(--border)"};
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background-color: ${e=>e.active?"var(--primary)":"rgba(var(--primary-rgb), 0.1)"};
  }
`,WA=Gn.button`
  background: var(--primary);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  margin-right: 1rem;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: var(--disabled);
    cursor: not-allowed;
  }
`,qA=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
  overflow-x: auto;
`,KA=Gn.div`
  margin: 1.5rem 0;
`,GA=Gn(Zu.div)`
  padding: 1rem;
  background-color: var(--surface-variant);
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
  border-left: 4px solid ${e=>"success"===e.type?"var(--success)":"error"===e.type?"var(--error)":"var(--primary)"};
`,YA=Gn.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
`,XA=Gn.div`
  color: var(--text-secondary);
`,QA=Gn.div`
  background: ${e=>e.isPrime?"rgba(var(--success-rgb), 0.1)":"rgba(var(--error-rgb), 0.1)"};
  border: 2px solid ${e=>e.isPrime?"var(--success)":"var(--error)"};
  color: ${e=>e.isPrime?"var(--success)":"var(--error)"};
  padding: 1rem;
  border-radius: var(--border-radius);
  margin: 1rem 0;
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
`,JA=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 1rem;
`,ZA=Gn.pre`
  background: var(--code-bg);
  color: var(--code-text);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  line-height: 1.5;
`,eI=Gn.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
`,tI=Gn.th`
  background-color: var(--primary-light);
  color: white;
  padding: 0.75rem;
  text-align: left;
  border: 1px solid var(--border);
`,rI=Gn.td`
  padding: 0.75rem;
  border: 1px solid var(--border);
`,nI=Gn.div`
  background: rgba(var(--info-rgb), 0.1);
  border-left: 4px solid var(--info);
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
`,iI=(e,t,r)=>{if(1===r)return 0;let n=1;for(e%=r;t>0;)t%2===1&&(n=n*e%r),t=Math.floor(t/2),e=e*e%r;return n},aI=()=>{const[t,r]=(0,e.useState)(97),[n,i]=(0,e.useState)("trial"),[a,o]=(0,e.useState)(5),[s,l]=(0,e.useState)([]),[d,c]=(0,e.useState)(null),[u,h]=(0,e.useState)(!1);return(0,Qn.jsxs)(FA,{children:[(0,Qn.jsxs)(RA,{children:[(0,Qn.jsx)(OA,{children:"Primality Test"}),(0,Qn.jsx)(NA,{children:"Algorithms for determining whether a given number is prime."})]}),(0,Qn.jsxs)(DA,{children:[(0,Qn.jsx)(LA,{children:"Input"}),(0,Qn.jsxs)(VA,{children:[(0,Qn.jsx)(_A,{htmlFor:"number",children:"Number to test (1-1,000,000):"}),(0,Qn.jsx)(BA,{id:"number",type:"number",min:"1",max:"1000000",value:t,onChange:e=>{const t=e.target.value;(""===t||/^\d+$/.test(t)&&parseInt(t)<=1e6)&&r(""===t?"":parseInt(t))},disabled:u})]}),(0,Qn.jsx)(_A,{children:"Test Method:"}),(0,Qn.jsxs)(UA,{children:[(0,Qn.jsx)(HA,{active:"trial"===n,onClick:()=>i("trial"),disabled:u,children:"Trial Division"}),(0,Qn.jsx)(HA,{active:"fermat"===n,onClick:()=>i("fermat"),disabled:u,children:"Fermat Test"}),(0,Qn.jsx)(HA,{active:"miller-rabin"===n,onClick:()=>i("miller-rabin"),disabled:u,children:"Miller-Rabin Test"})]}),("fermat"===n||"miller-rabin"===n)&&(0,Qn.jsxs)(VA,{children:[(0,Qn.jsx)(_A,{htmlFor:"iterations",children:"Number of iterations (1-100):"}),(0,Qn.jsx)(BA,{id:"iterations",type:"number",min:"1",max:"100",value:a,onChange:e=>{const t=e.target.value;(""===t||/^\d+$/.test(t)&&parseInt(t)<=100)&&o(""===t?5:parseInt(t))},disabled:u}),(0,Qn.jsx)("p",{style:{color:"var(--text-secondary)",fontSize:"0.9rem",marginTop:"0.5rem"},children:"More iterations increase accuracy for probabilistic tests."})]}),(0,Qn.jsx)(WA,{onClick:()=>{h(!0),l([]),c(null),setTimeout((()=>{let e;switch(n){case"fermat":e=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,r=arguments.length>2?arguments[2]:void 0;const n=[];if(n.push({title:"Initialize",description:`Testing if ${e} is prime using the Fermat Primality Test with ${t} iterations.`,type:"info"}),e<=1)return n.push({title:"Check for edge cases",description:`${e} is less than or equal to 1. By definition, prime numbers are greater than 1.`,type:"error"}),r(n),{isPrime:!1,steps:n};if(e<=3)return n.push({title:"Check for edge cases",description:`${e} is 2 or 3, which are prime numbers.`,type:"success"}),r(n),{isPrime:!0,steps:n};if(e%2===0)return n.push({title:"Check if even",description:`${e} is divisible by 2, so it's not prime.`,type:"error"}),r(n),{isPrime:!1,steps:n};n.push({title:"Fermat's Little Theorem",description:`Fermat's Little Theorem states that if p is prime and a is not divisible by p, then a^(p-1) \u2261 1 (mod p). We'll test this property with ${t} random values of a.`,type:"info"});for(let i=0;i<t;i++){const t=2+Math.floor(Math.random()*(e-3));n.push({title:`Iteration ${i+1}`,description:`Randomly selected a = ${t}. Checking if a^(n-1) \u2261 1 (mod n).`,type:"info"});const a=iI(t,e-1,e);if(1!==a)return n.push({title:`Failed at iteration ${i+1}`,description:`${t}^(${e}-1) \u2261 ${a} (mod ${e}), which is not 1. ${e} is definitely composite.`,type:"error"}),r(n),{isPrime:!1,steps:n};n.push({title:`Passed iteration ${i+1}`,description:`${t}^(${e}-1) \u2261 1 (mod ${e}). This is consistent with ${e} being prime.`,type:"info"})}return n.push({title:"Conclusion",description:`${e} passed ${t} Fermat tests. It is probably prime with a high degree of confidence. Note that the Fermat test can have false positives for certain numbers called Carmichael numbers.`,type:"success"}),r(n),{isPrime:!0,steps:n}}(t,a,l);break;case"miller-rabin":e=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,r=arguments.length>2?arguments[2]:void 0;const n=[];if(n.push({title:"Initialize",description:`Testing if ${e} is prime using the Miller-Rabin Primality Test with ${t} iterations.`,type:"info"}),e<=1)return n.push({title:"Check for edge cases",description:`${e} is less than or equal to 1. By definition, prime numbers are greater than 1.`,type:"error"}),r(n),{isPrime:!1,steps:n};if(e<=3)return n.push({title:"Check for edge cases",description:`${e} is 2 or 3, which are prime numbers.`,type:"success"}),r(n),{isPrime:!0,steps:n};if(e%2===0)return n.push({title:"Check if even",description:`${e} is divisible by 2, so it's not prime.`,type:"error"}),r(n),{isPrime:!1,steps:n};let i=0,a=e-1;for(;a%2===0;)a/=2,i++;n.push({title:"Decompose n-1",description:`Expressed n-1 = ${e-1} as 2^${i} * ${a} where ${a} is odd.`,type:"info"});for(let o=0;o<t;o++){const t=2+Math.floor(Math.random()*(e-3));n.push({title:`Iteration ${o+1}`,description:`Randomly selected a = ${t}. Checking if ${e} passes the Miller-Rabin test with this witness.`,type:"info"});let s=iI(t,a,e);if(1===s||s===e-1){n.push({title:"First test passed",description:`a^d \u2261 ${s} (mod ${e}), which is either 1 or -1. Continuing to next iteration.`,type:"info"});continue}let l=!1;for(let r=0;r<i-1;r++)if(s=iI(s,2,e),n.push({title:`Square test ${r+1}`,description:`a^(d*2^${r+1}) \u2261 ${s} (mod ${e})`,type:"info"}),s===e-1){l=!0,n.push({title:"Found -1 remainder",description:`a^(d*2^${r+1}) \u2261 -1 (mod ${e}). This is consistent with ${e} being prime.`,type:"info"});break}if(!l)return n.push({title:`Failed at iteration ${o+1}`,description:`${e} failed the Miller-Rabin test with witness ${t}. It is definitely composite.`,type:"error"}),r(n),{isPrime:!1,steps:n}}return n.push({title:"Conclusion",description:`${e} passed ${t} Miller-Rabin tests. It is probably prime with a very high degree of confidence.`,type:"success"}),r(n),{isPrime:!0,steps:n}}(t,a,l);break;default:e=((e,t)=>{const r=[];if(r.push({title:"Initialize",description:`Testing if ${e} is prime using trial division.`,type:"info"}),e<=1)return r.push({title:"Check for edge cases",description:`${e} is less than or equal to 1. By definition, prime numbers are greater than 1.`,type:"error"}),t(r),{isPrime:!1,steps:r};if(e<=3)return r.push({title:"Check for edge cases",description:`${e} is 2 or 3, which are prime numbers.`,type:"success"}),t(r),{isPrime:!0,steps:r};if(e%2===0||e%3===0)return r.push({title:"Check divisibility by 2 and 3",description:`${e} is divisible by ${e%2===0?"2":"3"}, so it's not prime.`,type:"error"}),t(r),{isPrime:!1,steps:r};r.push({title:"Begin trial division",description:`We'll check if ${e} is divisible by any number from 5 to sqrt(${e}).`,type:"info"});let n=5;for(;n*n<=e;){if(e%n===0||e%(n+2)===0)return r.push({title:"Found a divisor",description:`${e} is divisible by ${e%n===0?n:n+2}, so it's not prime.`,type:"error"}),t(r),{isPrime:!1,steps:r};r.push({title:"Check divisibility",description:`${e} is not divisible by ${n} or ${n+2}.`,type:"info"}),n+=6}return r.push({title:"Conclusion",description:`${e} is not divisible by any number from 2 to sqrt(${e}), so it's prime.`,type:"success"}),t(r),{isPrime:!0,steps:r}})(t,l)}c(e.isPrime),h(!1)}),100)},disabled:u||""===t||t<1,children:u?"Computing...":"Test Primality"})]}),(0,Qn.jsxs)(qA,{children:[(0,Qn.jsx)(LA,{children:"Results"}),null!==d&&(0,Qn.jsxs)(QA,{isPrime:d,children:[t," is ",d?"PRIME":"NOT PRIME"]}),(0,Qn.jsx)(KA,{children:s.map(((e,t)=>(0,Qn.jsxs)(GA,{type:e.type,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.1*t},children:[(0,Qn.jsx)(YA,{children:e.title}),(0,Qn.jsx)(XA,{children:e.description})]},t)))})]}),(0,Qn.jsx)(LA,{children:"How It Works"}),(0,Qn.jsxs)(JA,{children:[(0,Qn.jsx)("p",{children:"A primality test is an algorithm for determining whether a given number is prime. This implementation offers three different approaches to primality testing:"}),(0,Qn.jsx)("h3",{children:"1. Trial Division"}),(0,Qn.jsx)("p",{children:"The most straightforward method is to test whether a number is divisible by any smaller number other than 1."}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Check if the number is less than or equal to 1 (not prime by definition)."}),(0,Qn.jsx)("li",{children:"Check if the number is 2 or 3 (prime by definition)."}),(0,Qn.jsx)("li",{children:"Check if the number is divisible by 2 or 3 (not prime)."}),(0,Qn.jsx)("li",{children:"Check divisibility by numbers of the form 6k \xb1 1 up to the square root of the number."})]}),(0,Qn.jsx)(ZA,{children:"function isPrimeTrialDivision(n) {\n  if (n <= 1) return false;\n  if (n <= 3) return true;\n  \n  // Check if n is divisible by 2 or 3\n  if (n % 2 === 0 || n % 3 === 0) return false;\n  \n  // Check divisibility by numbers of form 6k \xb1 1\n  for (let i = 5; i * i <= n; i += 6) {\n    if (n % i === 0 || n % (i + 2) === 0) return false;\n  }\n  \n  return true;\n}"}),(0,Qn.jsx)("h3",{children:"2. Fermat Primality Test"}),(0,Qn.jsxs)("p",{children:["Based on Fermat's Little Theorem, which states that if p is prime and a is not divisible by p, then a",(0,Qn.jsx)("sup",{children:"p-1"})," \u2261 1 (mod p)."]}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"For a given number n, choose several random numbers a (2 \u2264 a \u2264 n-2)."}),(0,Qn.jsxs)("li",{children:["Compute a",(0,Qn.jsx)("sup",{children:"n-1"})," mod n for each chosen a."]}),(0,Qn.jsx)("li",{children:"If any result is not 1, then n is definitely composite."}),(0,Qn.jsx)("li",{children:"If all results are 1, then n is probably prime (but could still be a Carmichael number)."})]}),(0,Qn.jsx)("p",{children:'The Fermat test is probabilistic\u2014it can determine with certainty if a number is composite, but can only state that a number is "probably prime" with some confidence.'}),(0,Qn.jsx)("h3",{children:"3. Miller-Rabin Primality Test"}),(0,Qn.jsx)("p",{children:"An advanced probabilistic primality test that addresses the limitations of the Fermat test."}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsxs)("li",{children:["Express n-1 as 2",(0,Qn.jsx)("sup",{children:"r"})," \xd7 d, where d is odd."]}),(0,Qn.jsx)("li",{children:"For several random numbers a (2 \u2264 a \u2264 n-2):"}),(0,Qn.jsxs)("li",{children:["Compute x = a",(0,Qn.jsx)("sup",{children:"d"})," mod n."]}),(0,Qn.jsx)("li",{children:"If x equals 1 or n-1, continue to the next iteration."}),(0,Qn.jsx)("li",{children:"Repeatedly square x up to r-1 times. If any result equals n-1, continue to the next iteration."}),(0,Qn.jsx)("li",{children:"If no result equals n-1, declare n composite."}),(0,Qn.jsx)("li",{children:"If all iterations pass, declare n probably prime."})]}),(0,Qn.jsx)("p",{children:"The Miller-Rabin test has a provably low probability of false positives, making it one of the most reliable probabilistic primality tests."}),(0,Qn.jsx)("h3",{children:"Time Complexity Comparison"}),(0,Qn.jsxs)(eI,{children:[(0,Qn.jsx)("thead",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(tI,{children:"Algorithm"}),(0,Qn.jsx)(tI,{children:"Time Complexity"}),(0,Qn.jsx)(tI,{children:"Type"}),(0,Qn.jsx)(tI,{children:"Accuracy"})]})}),(0,Qn.jsxs)("tbody",{children:[(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(rI,{children:"Trial Division"}),(0,Qn.jsx)(rI,{children:"O(\u221an)"}),(0,Qn.jsx)(rI,{children:"Deterministic"}),(0,Qn.jsx)(rI,{children:"100% accurate"})]}),(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(rI,{children:"Fermat Test"}),(0,Qn.jsx)(rI,{children:"O(k log n)"}),(0,Qn.jsx)(rI,{children:"Probabilistic"}),(0,Qn.jsx)(rI,{children:"Can have false positives"})]}),(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(rI,{children:"Miller-Rabin"}),(0,Qn.jsx)(rI,{children:"O(k log\xb3 n)"}),(0,Qn.jsx)(rI,{children:"Probabilistic"}),(0,Qn.jsxs)(rI,{children:["Error probability \u2264 4",(0,Qn.jsx)("sup",{children:"-k"})]})]})]})]}),(0,Qn.jsxs)(nI,{children:[(0,Qn.jsx)("p",{children:"For practical applications:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Trial division is suitable for small numbers (up to ~10\u2076)."}),(0,Qn.jsx)("li",{children:"Fermat's test is quick but has issues with Carmichael numbers."}),(0,Qn.jsx)("li",{children:"Miller-Rabin is the preferred method for large numbers in cryptography and other applications."}),(0,Qn.jsx)("li",{children:"For extremely large numbers (hundreds of digits), more specialized algorithms like AKS (a deterministic polynomial-time algorithm) might be considered."})]})]})]})]})},oI=Gn.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,sI=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,lI=Gn.h1`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,dI=Gn.p`
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
`,cI=Gn.h2`
  color: var(--primary);
  margin: 2rem 0 1rem;
  border-bottom: 2px solid var(--primary-light);
  padding-bottom: 0.5rem;
`,uI=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
`,hI=Gn.div`
  margin-bottom: 1rem;
`,pI=Gn.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
`,mI=Gn.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: var(--primary);
    outline: none;
  }
`,fI=Gn.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: border-color 0.3s;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    border-color: var(--primary);
    outline: none;
  }
`,gI=Gn.button`
  background: var(--primary);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  margin-right: 1rem;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: var(--disabled);
    cursor: not-allowed;
  }
`,vI=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
  overflow-x: auto;
`,xI=Gn.span`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin: 0.25rem;
  text-align: center;
  line-height: 2rem;
  border-radius: 4px;
  border: 1px solid var(--border);
  font-family: monospace;
  font-size: 1.25rem;
  background-color: ${e=>e.isMatch?"rgba(var(--success-rgb), 0.2)":e.isMismatch?"rgba(var(--error-rgb), 0.2)":e.isCurrent?"rgba(var(--primary-rgb), 0.2)":e.isSkip?"rgba(var(--warning-rgb), 0.2)":"var(--surface-variant)"};
  color: ${e=>e.isMatch?"var(--success)":e.isMismatch?"var(--error)":e.isCurrent?"var(--primary)":e.isSkip?"var(--warning)":"var(--text-primary)"};
  border-color: ${e=>e.isMatch?"var(--success)":e.isMismatch?"var(--error)":e.isCurrent?"var(--primary)":e.isSkip?"var(--warning)":"var(--border)"};
  font-weight: ${e=>e.isMatch||e.isMismatch||e.isCurrent?"bold":"normal"};
`,yI=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: var(--surface-variant);
  border-radius: var(--border-radius);
  display: flex;
  flex-wrap: wrap;
  position: relative;
`,bI=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: var(--surface-variant);
  border-radius: var(--border-radius);
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: ${e=>"flex-start"};
  margin-left: ${e=>e.alignment||"0"};
`,wI=Gn.div`
  margin: 1.5rem 0;
  overflow-x: auto;
`,jI=Gn.div`
  margin: 1.5rem 0;
  overflow-x: auto;
`,SI=Gn.table`
  border-collapse: collapse;
  width: 100%;
  margin: 1rem 0;
`,kI=Gn.th`
  background-color: var(--primary-light);
  color: white;
  padding: 0.5rem;
  text-align: center;
  border: 1px solid var(--border);
`,CI=Gn.td`
  padding: 0.5rem;
  text-align: center;
  border: 1px solid var(--border);
`,TI=Gn.div`
  margin: 1rem 0;
  color: var(--text-secondary);
  line-height: 1.6;
`,EI=Gn(Zu.div)`
  padding: 1rem;
  background-color: var(--surface-variant);
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
  border-left: 4px solid ${e=>"match"===e.type?"var(--success)":"mismatch"===e.type?"var(--error)":"skip"===e.type?"var(--warning)":"var(--primary)"};
`,$I=Gn.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
`,PI=Gn.div`
  color: var(--text-secondary);
`,AI=Gn.div`
  display: flex;
  margin: 0.25rem;
  justify-content: space-between;
  font-family: monospace;
  color: var(--text-secondary);
  font-size: 0.8rem;
`,II=Gn.div`
  background: var(--surface-variant);
  padding: 1rem;
  border-radius: var(--border-radius);
  margin: 1rem 0;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,zI=Gn.span`
  font-weight: bold;
  color: var(--primary);
`,MI=Gn.div`
  margin-top: 0.5rem;
  font-size: 0.9rem;
`,FI=Gn.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  flex-wrap: wrap;
  gap: 1rem;
`,RI=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,OI=Gn.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
`,NI=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,LI=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,DI=Gn.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background-color: ${e=>e.color};
  border: 1px solid ${e=>e.border};
`,VI=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 1rem;
`,_I=Gn.pre`
  background: var(--code-bg);
  color: var(--code-text);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  line-height: 1.5;
`,BI=Gn.div`
  background: rgba(var(--info-rgb), 0.1);
  border-left: 4px solid var(--info);
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
`,UI=()=>{var t,r,n,i,a;const[o,s]=(0,e.useState)("Here is a simple example text for demonstrating the Boyer-Moore algorithm for pattern matching."),[l,d]=(0,e.useState)("pattern"),[c,u]=(0,e.useState)(!1),[h,p]=(0,e.useState)(-1),[m,f]=(0,e.useState)(-1),[g,v]=(0,e.useState)([]),[x,y]=(0,e.useState)([]),[b,w]=(0,e.useState)(0),[j,S]=(0,e.useState)(0),[k,C]=(0,e.useState)(1e3),[T,E]=(0,e.useState)({}),[$,P]=(0,e.useState)([]),[A,I]=(0,e.useState)([]),z=(0,e.useRef)(null),M=()=>{if(!o||!l||0===l.length)return{steps:[],matches:[]};const e=o.length,t=l.length,r=[],n=[],i=(e=>{const t={};for(let r=0;r<e.length-1;r++)t[e[r]]=e.length-1-r;return t})(l),a=(e=>{const t=e.length,r=new Array(t).fill(t),n=new Array(t+1).fill(0);let i=0;for(let o=t-1,s=t-1;o>=0;o--)if(o>s&&n[o+t-1-i]<o-s)n[o]=n[o+t-1-i];else{for(o<s&&(s=o),i=o;s>=0&&e[s]===e[s+t-1-i];)s--;n[o]=i-s}for(let o=0;o<t;o++)r[t-1-n[o]]=t-1-o;let a=0;for(let o=0;o<t-1;o++)if(n[o]===o+1)for(;a<t-1-o;a++)r[a]===t&&(r[a]=t-1-o);return r})(l);E(i),P(a);n.push({type:"table",title:"Preprocessing Tables",description:"Generated Bad Character and Good Suffix tables for efficient shifting.",textIndex:-1,patternIndex:-1,shift:0});let s=0;for(;s<=e-t;){let e=t-1;for(;e>=0&&l[e]===o[s+e];)e--;if(e<0)r.push(s),n.push({type:"match",title:`Match Found at Position ${s}`,description:`Complete match of "${l}" found at position ${s} in the text.`,textIndex:s,patternIndex:-1,shift:1,matchStart:s,matchEnd:s+t-1}),s+=1;else{const r=i[o[s+e]]||t,d=a[e],c=Math.max(r,d);n.push({type:"mismatch",title:`Mismatch at Position ${s+e}`,description:`Mismatch detected. Character '${o[s+e]}' in text doesn't match '${l[e]}' in pattern. Bad character shift: ${r}, Good suffix shift: ${d}. Taking the maximum shift of ${c}.`,textIndex:s+e,patternIndex:e,shift:c,alignmentIndex:s}),s+=c}}return 0===r.length?n.push({type:"info",title:"Search Complete",description:`No occurrences of "${l}" found in the text.`,textIndex:-1,patternIndex:-1,shift:0}):n.push({type:"info",title:"Search Complete",description:`Found ${r.length} occurrence${r.length>1?"s":""} of "${l}" in the text at position${r.length>1?"s":""} ${r.join(", ")}.`,textIndex:-1,patternIndex:-1,shift:0}),{steps:n,matches:r}},F=e=>{if(e>=x.length)return void u(!1);const t=x[e];if(w(e+1),p(-1),f(-1),I([]),"mismatch"===t.type){p(t.textIndex),f(t.patternIndex);const e=[];for(let r=0;r<t.shift;r++)t.alignmentIndex+r<o.length&&e.push(t.alignmentIndex+r);I(e)}else if("match"===t.type){const e=[];for(let r=t.matchStart;r<=t.matchEnd;r++)e.push(r);p(e)}z.current=setTimeout((()=>{F(e+1)}),k)},R=()=>{z.current&&(clearTimeout(z.current),z.current=null),u(!1)};(0,e.useEffect)((()=>()=>{z.current&&clearTimeout(z.current)}),[]);return(0,Qn.jsxs)(oI,{children:[(0,Qn.jsxs)(sI,{children:[(0,Qn.jsx)(lI,{children:"Boyer-Moore Algorithm"}),(0,Qn.jsx)(dI,{children:"An efficient string searching algorithm that uses preprocessing to achieve faster searches."})]}),(0,Qn.jsxs)(uI,{children:[(0,Qn.jsx)(cI,{children:"Input"}),(0,Qn.jsxs)(hI,{children:[(0,Qn.jsx)(pI,{htmlFor:"text",children:"Text:"}),(0,Qn.jsx)(fI,{id:"text",value:o,onChange:e=>s(e.target.value),disabled:c})]}),(0,Qn.jsxs)(hI,{children:[(0,Qn.jsx)(pI,{htmlFor:"pattern",children:"Pattern to Search:"}),(0,Qn.jsx)(mI,{id:"pattern",value:l,onChange:e=>d(e.target.value),disabled:c})]}),(0,Qn.jsxs)(FI,{children:[(0,Qn.jsxs)("div",{children:[(0,Qn.jsx)(gI,{onClick:()=>{if(c)return;u(!0),w(0),p(-1),f(-1),v([]),I([]),y([]);const{steps:e,matches:t}=M();y(e),S(e.length),v(t),z.current&&clearTimeout(z.current),z.current=setTimeout((()=>{F(0)}),500)},disabled:c||!o||!l,children:"Start Visualization"}),(0,Qn.jsx)(gI,{onClick:R,disabled:!c,children:"Stop"}),(0,Qn.jsx)(gI,{onClick:()=>{R(),w(0),p(-1),f(-1),v([]),I([]),y([]),E({}),P([])},disabled:c,children:"Reset"})]}),(0,Qn.jsxs)(RI,{children:[(0,Qn.jsx)(pI,{htmlFor:"speed",children:"Speed:"}),(0,Qn.jsx)(mI,{id:"speed",type:"range",min:"100",max:"2000",step:"100",value:2100-k,onChange:e=>C(2100-e.target.value),disabled:c,style:{width:"150px"}})]})]}),b>0&&(0,Qn.jsxs)(OI,{children:["Step ",b," of ",j]})]}),(0,Qn.jsxs)(vI,{children:[(0,Qn.jsx)(cI,{children:"Visualization"}),(0,Qn.jsxs)(NI,{children:[(0,Qn.jsxs)(LI,{children:[(0,Qn.jsx)(DI,{color:"rgba(var(--success-rgb), 0.2)",border:"var(--success)"}),(0,Qn.jsx)("span",{children:"Match"})]}),(0,Qn.jsxs)(LI,{children:[(0,Qn.jsx)(DI,{color:"rgba(var(--error-rgb), 0.2)",border:"var(--error)"}),(0,Qn.jsx)("span",{children:"Mismatch"})]}),(0,Qn.jsxs)(LI,{children:[(0,Qn.jsx)(DI,{color:"rgba(var(--primary-rgb), 0.2)",border:"var(--primary)"}),(0,Qn.jsx)("span",{children:"Current Comparison"})]}),(0,Qn.jsxs)(LI,{children:[(0,Qn.jsx)(DI,{color:"rgba(var(--warning-rgb), 0.2)",border:"var(--warning)"}),(0,Qn.jsx)("span",{children:"Skip (Shift)"})]})]}),(0,Qn.jsx)(AI,{children:o&&Array.from({length:Math.min(10,o.length)},((e,t)=>(0,Qn.jsx)("span",{children:t},t)))}),(0,Qn.jsx)(yI,{children:o&&o.split("").map(((e,t)=>{const r=Array.isArray(h)&&h.includes(t),n="number"===typeof h&&t===h,i="number"===typeof h&&t===h,a=A.includes(t);return(0,Qn.jsx)(xI,{isMatch:r,isMismatch:n,isCurrent:i,isSkip:a,children:e},t)}))}),b>0&&void 0!==(null===(t=x[b-1])||void 0===t?void 0:t.alignmentIndex)&&(0,Qn.jsx)(bI,{alignment:2.5*x[b-1].alignmentIndex+"rem",children:l&&l.split("").map(((e,t)=>{const r=Array.isArray(h)&&t<l.length&&h.includes(x[b-1].alignmentIndex+t),n="number"===typeof m&&t===m,i="number"===typeof m&&t===m;return(0,Qn.jsx)(xI,{isMatch:r,isMismatch:n,isCurrent:i,children:e},t)}))}),b>0&&"table"===(null===(r=x[b-1])||void 0===r?void 0:r.type)&&(0,Qn.jsxs)(Qn.Fragment,{children:[0===Object.keys(T).length?null:(0,Qn.jsxs)(wI,{children:[(0,Qn.jsx)("h3",{children:"Bad Character Table"}),(0,Qn.jsxs)(SI,{children:[(0,Qn.jsx)("thead",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(kI,{children:"Character"}),Object.keys(T).map(((e,t)=>(0,Qn.jsx)(kI,{children:" "===e?"(space)":e},t))),(0,Qn.jsx)(kI,{children:"Any other character"})]})}),(0,Qn.jsx)("tbody",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(CI,{children:"Shift"}),Object.values(T).map(((e,t)=>(0,Qn.jsx)(CI,{children:e},t))),(0,Qn.jsx)(CI,{children:l.length})]})})]}),(0,Qn.jsx)(TI,{children:"The Bad Character Table tells us how far to shift the pattern when a mismatch occurs. When a character in the text doesn't match the corresponding character in the pattern, we look up the rightmost occurrence of that character in the pattern, and shift accordingly."})]}),0===$.length?null:(0,Qn.jsxs)(jI,{children:[(0,Qn.jsx)("h3",{children:"Good Suffix Table"}),(0,Qn.jsxs)(SI,{children:[(0,Qn.jsx)("thead",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(kI,{children:"j (mismatch position)"}),$.map(((e,t)=>(0,Qn.jsx)(kI,{children:t},t)))]})}),(0,Qn.jsx)("tbody",{children:(0,Qn.jsxs)("tr",{children:[(0,Qn.jsx)(CI,{children:"Shift"}),$.map(((e,t)=>(0,Qn.jsx)(CI,{children:e},t)))]})})]}),(0,Qn.jsx)(TI,{children:"The Good Suffix Table provides shift values based on partially matched suffixes. When a mismatch occurs at position j in the pattern, we use this table to determine how far to shift the pattern based on previously matched characters."})]})]}),g.length>0&&(0,Qn.jsx)(II,{children:(0,Qn.jsxs)("span",{children:[(0,Qn.jsx)(zI,{children:g.length})," matches found",(0,Qn.jsxs)(MI,{children:["at positions: ",g.join(", ")]})]})}),b>0&&(0,Qn.jsxs)("div",{style:{marginTop:"2rem"},children:[(0,Qn.jsx)("h3",{children:"Algorithm Steps"}),(0,Qn.jsxs)(EI,{type:null===(n=x[b-1])||void 0===n?void 0:n.type,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[(0,Qn.jsx)($I,{children:null===(i=x[b-1])||void 0===i?void 0:i.title}),(0,Qn.jsx)(PI,{children:null===(a=x[b-1])||void 0===a?void 0:a.description})]})]})]}),(0,Qn.jsx)(cI,{children:"How It Works"}),(0,Qn.jsxs)(VI,{children:[(0,Qn.jsx)("p",{children:"The Boyer-Moore algorithm is a powerful string searching algorithm designed to be more efficient than simpler approaches like naive pattern matching. It is particularly efficient for large alphabets and long patterns."}),(0,Qn.jsx)("h3",{children:"Key Features"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Searches from right to left within the pattern"}),(0,Qn.jsxs)("li",{children:["Uses two main heuristics for skipping portions of the text:",(0,Qn.jsxs)("ul",{children:[(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Bad Character Rule"}),": When a mismatch occurs, shift the pattern to align the mismatched character with its rightmost occurrence in the pattern."]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Good Suffix Rule"}),": When a mismatch occurs after a partial match, shift the pattern to align the matched suffix with its previous occurrence in the pattern."]})]})]}),(0,Qn.jsx)("li",{children:"Preprocesses the pattern to create lookup tables for both rules"}),(0,Qn.jsx)("li",{children:"Can skip large portions of the text without even examining them"})]}),(0,Qn.jsx)("h3",{children:"The Algorithm"}),(0,Qn.jsxs)("ol",{children:[(0,Qn.jsx)("li",{children:"Preprocess the pattern to create the bad character and good suffix tables."}),(0,Qn.jsx)("li",{children:"Align the pattern at the beginning of the text."}),(0,Qn.jsx)("li",{children:"Compare characters from right to left in the pattern."}),(0,Qn.jsxs)("li",{children:["If a mismatch occurs:",(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Use the bad character rule to determine a shift."}),(0,Qn.jsx)("li",{children:"Use the good suffix rule to determine another shift."}),(0,Qn.jsx)("li",{children:"Take the maximum of these two shifts."})]})]}),(0,Qn.jsx)("li",{children:"If a complete match is found, record it and shift by 1 (or by the good suffix rule)."}),(0,Qn.jsx)("li",{children:"Repeat steps 3-5 until the pattern has been compared against all possible positions in the text."})]}),(0,Qn.jsx)("h3",{children:"Pseudocode"}),(0,Qn.jsx)(_I,{children:"function boyerMooreSearch(text, pattern) {\n  n = text.length\n  m = pattern.length\n  matches = []\n  \n  // Preprocess pattern\n  badChar = createBadCharTable(pattern)\n  goodSuffix = createGoodSuffixTable(pattern)\n  \n  i = 0  // Position of the pattern's right end in the text\n  while (i <= n - m) {\n    j = m - 1  // Index in pattern, starting from the end\n    \n    // Compare characters from right to left\n    while (j >= 0 && pattern[j] == text[i+j]) {\n      j--\n    }\n    \n    if (j < 0) {\n      // Pattern found\n      matches.push(i)\n      i += goodSuffix[0]  // Shift using good suffix rule\n    } else {\n      // Mismatch occurred, calculate shifts\n      badCharShift = badChar[text[i+j]] or m\n      goodSuffixShift = goodSuffix[j]\n      \n      // Take the maximum shift\n      i += max(badCharShift, goodSuffixShift)\n    }\n  }\n  \n  return matches\n}"}),(0,Qn.jsx)("h3",{children:"Time Complexity"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Preprocessing"}),": O(m + \u03c3) where m is the pattern length and \u03c3 is the alphabet size"]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Best Case"}),": O(n/m) - can skip large portions of text"]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Average Case"}),": O(n)"]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Worst Case"}),": O(n*m) - but this is rare in practice"]})]}),(0,Qn.jsx)("h3",{children:"Space Complexity"}),(0,Qn.jsx)("p",{children:"O(m + \u03c3) for storing the preprocessing tables."}),(0,Qn.jsxs)(BI,{children:[(0,Qn.jsx)("p",{children:"Boyer-Moore is typically the algorithm of choice for practical string searching applications when:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"The pattern is relatively long"}),(0,Qn.jsx)("li",{children:"The alphabet is large (like ASCII or Unicode text)"}),(0,Qn.jsx)("li",{children:"Multiple searches of the same pattern will be performed"})]}),(0,Qn.jsx)("p",{children:"Many real-world implementations use simplified variants like Boyer-Moore-Horspool or combine it with other algorithms for improved performance in specific cases."})]})]})]})},HI=Gn.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,WI=Gn.div`
  text-align: center;
  margin-bottom: 2rem;
`,qI=Gn.h1`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,KI=Gn.p`
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
`,GI=Gn.h2`
  color: var(--primary);
  margin: 2rem 0 1rem;
  border-bottom: 2px solid var(--primary-light);
  padding-bottom: 0.5rem;
`,YI=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
`,XI=Gn.div`
  margin-bottom: 1rem;
`,QI=Gn.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
`,JI=Gn.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: var(--primary);
    outline: none;
  }
`,ZI=Gn.button`
  background: var(--primary);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  margin-right: 1rem;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: var(--disabled);
    cursor: not-allowed;
  }
`,ez=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
  overflow-x: auto;
`,tz=Gn.span`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin: 0.25rem;
  text-align: center;
  line-height: 2rem;
  border-radius: 4px;
  border: 1px solid var(--border);
  font-family: monospace;
  font-size: 1.25rem;
  background-color: ${e=>e.isPalindrome?"rgba(var(--success-rgb), 0.2)":e.isCenter?"rgba(var(--primary-rgb), 0.2)":e.isActive?"rgba(var(--secondary-rgb), 0.1)":e.isSeparator?"rgba(var(--warning-rgb), 0.1)":"var(--surface-variant)"};
  color: ${e=>e.isPalindrome?"var(--success)":e.isCenter?"var(--primary)":e.isActive?"var(--secondary)":e.isSeparator?"var(--warning)":"var(--text-primary)"};
  border-color: ${e=>e.isPalindrome?"var(--success)":e.isCenter?"var(--primary)":e.isActive?"var(--secondary)":e.isSeparator?"var(--warning)":"var(--border)"};
  font-weight: ${e=>e.isPalindrome||e.isCenter?"bold":"normal"};
`,rz=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: var(--surface-variant);
  border-radius: var(--border-radius);
  display: flex;
  flex-wrap: wrap;
  position: relative;
`,nz=Gn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: var(--surface-variant);
  border-radius: var(--border-radius);
  display: flex;
  flex-wrap: wrap;
  position: relative;
`,iz=Gn.div`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin: 0.25rem;
  text-align: center;
  line-height: 2rem;
  border-radius: 4px;
  border: 1px solid var(--border);
  font-family: monospace;
  font-size: 1.1rem;
  background-color: ${e=>e.isActive?"rgba(var(--primary-rgb), 0.2)":"var(--surface-variant)"};
  color: ${e=>e.isActive?"var(--primary)":"var(--text-primary)"};
  border-color: ${e=>e.isActive?"var(--primary)":"var(--border)"};
  font-weight: ${e=>e.isActive?"bold":"normal"};
`,az=Gn.div`
  display: flex;
  margin: 0.25rem;
  justify-content: space-between;
  font-family: monospace;
  color: var(--text-secondary);
  font-size: 0.8rem;
`,oz=Gn.div`
  display: flex;
  margin: 0.25rem;
  justify-content: space-between;
  font-family: monospace;
  color: var(--text-secondary);
  font-size: 0.8rem;
`,sz=(Gn.div`
  margin: 1rem 0;
  color: var(--text-secondary);
  line-height: 1.6;
`,Gn(Zu.div)`
  padding: 1rem;
  background-color: var(--surface-variant);
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
  border-left: 4px solid var(--primary);
`),lz=Gn.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
`,dz=Gn.div`
  color: var(--text-secondary);
`,cz=Gn.div`
  background: var(--surface-variant);
  padding: 1rem;
  border-radius: var(--border-radius);
  margin: 1rem 0;
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,uz=Gn.div`
  font-weight: bold;
  color: var(--success);
`,hz=Gn.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  flex-wrap: wrap;
  gap: 1rem;
`,pz=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,mz=Gn.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
`,fz=Gn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,gz=Gn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,vz=Gn.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background-color: ${e=>e.color};
  border: 1px solid ${e=>e.border};
`,xz=Gn.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 1rem;
`,yz=Gn.pre`
  background: var(--code-bg);
  color: var(--code-text);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  line-height: 1.5;
`,bz=Gn.div`
  background: rgba(var(--info-rgb), 0.1);
  border-left: 4px solid var(--info);
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
`,wz=SC((()=>{const{algorithmState:t,updateAlgorithmState:r}=wC(),[n,i]=(0,e.useState)(t.text||"racecar"),[a,o]=(0,e.useState)(t.processedText||""),[s,l]=(0,e.useState)(!1),[d,c]=(0,e.useState)(t.currentCenter||-1),[u,h]=(0,e.useState)(t.currentRight||-1),[p,m]=(0,e.useState)(t.pArray||[]),[f,g]=(0,e.useState)(t.steps||[]),[v,x]=(0,e.useState)(t.currentStep||0),[y,b]=(0,e.useState)(t.totalSteps||0),[w,j]=(0,e.useState)(t.animationSpeed||1e3),[S,k]=(0,e.useState)(t.longestPalindrome||""),[C,T]=(0,e.useState)(t.palindromeCenter||-1),[E,$]=(0,e.useState)(t.palindromeLength||0),[P,A]=(0,e.useState)(t.activeIndices||[]),[I,z]=(0,e.useState)(t.oldCenter||-1),[M,F]=(0,e.useState)(t.mirrorIndex||-1),R=(0,e.useRef)(null);(0,e.useEffect)((()=>{r({text:n,processedText:a,currentCenter:d,currentRight:u,pArray:p,steps:f,currentStep:v,totalSteps:y,animationSpeed:w,longestPalindrome:S,palindromeCenter:C,palindromeLength:E,activeIndices:P,oldCenter:I,mirrorIndex:M})}),[n,a,d,u,p,f,v,y,w,S,C,E,P,I,M,r]);const O=e=>{if(e>=f.length)return void l(!1);const t=f[e];if(x(e+1),m(t.pArray),c(t.center),h(t.right),A(t.activeIndices||[]),z(t.oldCenter),F(t.mirrorIndex),t.finalPalindrome){const e=[];for(let r=t.finalPalindrome.start;r<=t.finalPalindrome.end;r++)e.push(r);A(e)}R.current=setTimeout((()=>{O(e+1)}),w)},N=()=>{R.current&&(clearTimeout(R.current),R.current=null),l(!1)};return(0,e.useEffect)((()=>()=>{R.current&&clearTimeout(R.current)}),[]),(0,Qn.jsxs)(HI,{children:[(0,Qn.jsxs)(WI,{children:[(0,Qn.jsx)(qI,{children:"Manacher's Algorithm"}),(0,Qn.jsx)(KI,{children:"A linear time algorithm for finding the longest palindromic substring in a string."})]}),(0,Qn.jsxs)(YI,{children:[(0,Qn.jsx)(GI,{children:"Input"}),(0,Qn.jsxs)(XI,{children:[(0,Qn.jsx)(QI,{htmlFor:"text",children:"Text:"}),(0,Qn.jsx)(JI,{id:"text",value:n,onChange:e=>i(e.target.value),disabled:s,placeholder:"Enter a string"})]}),(0,Qn.jsxs)(hz,{children:[(0,Qn.jsxs)("div",{children:[(0,Qn.jsx)(ZI,{onClick:()=>{if(s)return;l(!0),x(0),c(-1),h(-1),m([]),g([]),k(""),T(-1),$(0),A([]),z(-1),F(-1);const{p:e,steps:t}=(()=>{const e=(e=>{let t="#";for(let r=0;r<e.length;r++)t+=e[r]+"#";return t})(n);o(e);const t=e.length,r=new Array(t).fill(0);let i=0,a=0,s=0,l=0;const d=[];d.push({title:"Initialization",description:`Preprocessed string: "${e}". Initialize P array with zeros.`,center:-1,right:-1,pArray:[...r],activeIndices:[],oldCenter:-1,mirrorIndex:-1});for(let n=0;n<t;n++){let o={title:`Examining position ${n}`,description:"",center:i,right:a,pArray:[...r],activeIndices:[],oldCenter:-1,mirrorIndex:-1};if(n<a){const e=2*i-n;r[n]=Math.min(a-n,r[e]),o.description=`Position ${n} is within the right boundary ${a} of palindrome centered at ${i}. Its mirror position is ${e} with P[${e}] = ${r[e]}. Setting P[${n}] = min(${a-n}, ${r[e]}) = ${r[n]}.`,o.mirrorIndex=e,o.oldCenter=i,o.activeIndices=[n-r[n],n+r[n]]}else r[n]=0,o.description=`Position ${n} is not within any known palindrome. Starting with P[${n}] = 0.`;d.push(o);let c=r[n];for(;n-r[n]-1>=0&&n+r[n]+1<t&&e[n-r[n]-1]===e[n+r[n]+1];)r[n]++;r[n]>c&&d.push({title:`Expanding palindrome at position ${n}`,description:`Expanded the palindrome from radius ${c} to ${r[n]} by checking characters at positions ${n-r[n]} and ${n+r[n]}.`,center:i,right:a,pArray:[...r],activeIndices:[n-r[n],n+r[n]],oldCenter:-1,mirrorIndex:-1}),n+r[n]>a&&(i=n,a=n+r[n],d.push({title:"Updating boundaries",description:`Palindrome at position ${n} extends beyond the right boundary. Updating center to ${i} and right boundary to ${a}.`,center:i,right:a,pArray:[...r],activeIndices:[],oldCenter:-1,mirrorIndex:-1})),r[n]>s&&(s=r[n],l=n,d.push({title:"New longest palindrome found",description:`Found new longest palindrome centered at position ${n} with radius ${r[n]}.`,center:i,right:a,pArray:[...r],activeIndices:[],oldCenter:-1,mirrorIndex:-1}))}const c=Math.floor((l-s)/2),u=n.substring(c,c+s);return d.push({title:"Algorithm complete",description:`The longest palindromic substring is "${u}" starting at position ${c} in the original string.`,center:i,right:a,pArray:[...r],activeIndices:[],oldCenter:-1,mirrorIndex:-1,finalPalindrome:{start:l-s,end:l+s,text:u}}),k(u),T(l),$(s),{p:r,steps:d}})();m(e),g(t),b(t.length),R.current&&clearTimeout(R.current),R.current=setTimeout((()=>{O(0)}),500)},disabled:s||!n,children:"Start Visualization"}),(0,Qn.jsx)(ZI,{onClick:N,disabled:!s,children:"Stop"}),(0,Qn.jsx)(ZI,{onClick:()=>{N(),x(0),c(-1),h(-1),m([]),g([]),k(""),T(-1),$(0),A([]),z(-1),F(-1),o("")},disabled:s,children:"Reset"})]}),(0,Qn.jsxs)(pz,{children:[(0,Qn.jsx)(QI,{htmlFor:"speed",children:"Speed:"}),(0,Qn.jsx)(JI,{id:"speed",type:"range",min:"100",max:"2000",step:"100",value:2100-w,onChange:e=>j(2100-e.target.value),disabled:s,style:{width:"150px"}})]})]}),v>0&&(0,Qn.jsxs)(mz,{children:["Step ",v," of ",y]})]}),(0,Qn.jsxs)(ez,{children:[(0,Qn.jsx)(GI,{children:"Visualization"}),(0,Qn.jsxs)(fz,{children:[(0,Qn.jsxs)(gz,{children:[(0,Qn.jsx)(vz,{color:"rgba(var(--success-rgb), 0.2)",border:"var(--success)"}),(0,Qn.jsx)("span",{children:"Palindrome"})]}),(0,Qn.jsxs)(gz,{children:[(0,Qn.jsx)(vz,{color:"rgba(var(--primary-rgb), 0.2)",border:"var(--primary)"}),(0,Qn.jsx)("span",{children:"Current Center"})]}),(0,Qn.jsxs)(gz,{children:[(0,Qn.jsx)(vz,{color:"rgba(var(--secondary-rgb), 0.1)",border:"var(--secondary)"}),(0,Qn.jsx)("span",{children:"Active Expansion"})]}),(0,Qn.jsxs)(gz,{children:[(0,Qn.jsx)(vz,{color:"rgba(var(--warning-rgb), 0.1)",border:"var(--warning)"}),(0,Qn.jsx)("span",{children:"Separator (#)"})]})]}),a&&(0,Qn.jsxs)(Qn.Fragment,{children:[(0,Qn.jsx)("div",{children:(0,Qn.jsx)("strong",{children:"Processed String:"})}),(0,Qn.jsx)(oz,{children:a&&Array.from({length:Math.min(20,a.length)},((e,t)=>(0,Qn.jsx)("span",{children:t},t)))}),(0,Qn.jsx)(rz,{children:a&&a.split("").map(((e,t)=>{const r=-1!==C&&t>=C-E&&t<=C+E,n=t===d,i=P.includes(t),a="#"===e,o=t===M;return(0,Qn.jsx)(tz,{isPalindrome:r,isCenter:n,isActive:i||o,isSeparator:a,children:e},t)}))}),(0,Qn.jsxs)("div",{style:{marginTop:"1.5rem"},children:[(0,Qn.jsx)("strong",{children:"P Array:"})," (palindrome radii)"]}),(0,Qn.jsx)(az,{children:p&&Array.from({length:Math.min(20,p.length)},((e,t)=>(0,Qn.jsx)("span",{children:t},t)))}),(0,Qn.jsx)(nz,{children:p&&p.map(((e,t)=>(0,Qn.jsx)(iz,{isActive:t===d||t===M,children:e},t)))})]}),S&&(0,Qn.jsxs)(cz,{children:[(0,Qn.jsx)("div",{children:"Longest Palindromic Substring:"}),(0,Qn.jsxs)(uz,{children:['"',S,'"']}),(0,Qn.jsxs)("div",{children:["In original string starting at position ",Math.floor((C-E)/2),", length ",S.length]})]}),v>0&&f[v-1]&&(0,Qn.jsxs)("div",{style:{marginTop:"2rem"},children:[(0,Qn.jsx)("h3",{children:"Algorithm Steps"}),(0,Qn.jsxs)(sz,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[(0,Qn.jsx)(lz,{children:f[v-1].title}),(0,Qn.jsx)(dz,{children:f[v-1].description})]})]})]}),(0,Qn.jsx)(GI,{children:"How It Works"}),(0,Qn.jsxs)(xz,{children:[(0,Qn.jsx)("p",{children:"Manacher's Algorithm is an efficient approach for finding the longest palindromic substring in a string, with linear time complexity O(n)."}),(0,Qn.jsx)("h3",{children:"Key Concepts"}),(0,Qn.jsxs)("ol",{children:[(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"String Preprocessing"}),": Insert special characters (e.g., '#') between each character and at the boundaries to handle both even and odd-length palindromes uniformly."]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"P Array"}),": For each position i in the processed string, P[i] represents the radius of the palindrome centered at i."]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Center and Right Boundary"}),": Keep track of the center and right boundary of the rightmost palindrome encountered so far."]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Palindrome Expansion"}),": Use previously computed information to avoid redundant character comparisons."]})]}),(0,Qn.jsx)("h3",{children:"The Algorithm"}),(0,Qn.jsxs)("ol",{children:[(0,Qn.jsx)("li",{children:"Preprocess the input string to handle both even and odd length palindromes."}),(0,Qn.jsx)("li",{children:"Initialize an array P to store the palindrome radii."}),(0,Qn.jsx)("li",{children:"Initialize variables to track the center (C) and right boundary (R) of the rightmost palindrome found."}),(0,Qn.jsxs)("li",{children:["For each position i in the preprocessed string:",(0,Qn.jsxs)("ul",{children:[(0,Qn.jsxs)("li",{children:["If i is within a previously found palindrome (i ","<"," R), use the mirror property to initialize P[i]."]}),(0,Qn.jsx)("li",{children:"Otherwise, initialize P[i] = 0."}),(0,Qn.jsx)("li",{children:"Attempt to expand the palindrome centered at i as far as possible."}),(0,Qn.jsxs)("li",{children:["If the expanded palindrome extends beyond the current right boundary (i + P[i] ",">"," R), update the center C and right boundary R."]})]})]}),(0,Qn.jsx)("li",{children:"Find the maximum value in P to determine the center and length of the longest palindromic substring."}),(0,Qn.jsx)("li",{children:"Convert back to the original string coordinates to extract the result."})]}),(0,Qn.jsx)("h3",{children:"Pseudocode"}),(0,Qn.jsx)(yz,{children:"function manacherAlgorithm(s) {\n  // Preprocess the string\n  let t = \"#\" + s.split('').join('#') + \"#\"\n  \n  // Initialize P array\n  let n = t.length\n  let P = new Array(n).fill(0)\n  \n  let C = 0  // center of the rightmost palindrome\n  let R = 0  // right boundary of the rightmost palindrome\n  \n  for (let i = 0; i < n; i++) {\n    // Mirror position across center C\n    let mirror = 2 * C - i\n    \n    // If within right boundary, use mirror value as a shortcut\n    if (i < R) {\n      P[i] = Math.min(R - i, P[mirror])\n    }\n    \n    // Attempt to expand palindrome centered at i\n    while (i - P[i] - 1 >= 0 && i + P[i] + 1 < n && \n           t[i - P[i] - 1] === t[i + P[i] + 1]) {\n      P[i]++\n    }\n    \n    // If expanded palindrome extends past R,\n    // adjust center and boundary\n    if (i + P[i] > R) {\n      C = i\n      R = i + P[i]\n    }\n  }\n  \n  // Find the maximum palindrome\n  let maxLen = 0\n  let centerIndex = 0\n  \n  for (let i = 0; i < n; i++) {\n    if (P[i] > maxLen) {\n      maxLen = P[i]\n      centerIndex = i\n    }\n  }\n  \n  // Convert to original string coordinates\n  let start = Math.floor((centerIndex - maxLen) / 2)\n  return s.substring(start, start + maxLen)\n}"}),(0,Qn.jsx)("h3",{children:"Time and Space Complexity"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Time Complexity"}),": O(n) - Each character is processed once."]}),(0,Qn.jsxs)("li",{children:[(0,Qn.jsx)("strong",{children:"Space Complexity"}),": O(n) - For storing the processed string and the P array."]})]}),(0,Qn.jsx)("h3",{children:"Why It's Efficient"}),(0,Qn.jsx)("p",{children:"The key insight of Manacher's Algorithm is reusing previously computed information. Unlike naive approaches (O(n\xb3)) or dynamic programming (O(n\xb2)), Manacher's Algorithm avoids redundant comparisons by leveraging the symmetry properties of palindromes."}),(0,Qn.jsxs)(bz,{children:[(0,Qn.jsx)("p",{children:"Manacher's Algorithm has applications in various fields:"}),(0,Qn.jsxs)("ul",{children:[(0,Qn.jsx)("li",{children:"Text processing and search"}),(0,Qn.jsx)("li",{children:"Bioinformatics (DNA sequence analysis)"}),(0,Qn.jsx)("li",{children:"Pattern recognition"}),(0,Qn.jsx)("li",{children:"Data compression"})]}),(0,Qn.jsx)("p",{children:"It's particularly useful when efficient palindrome detection is required in large datasets."})]})]})]})}),"manacher"),jz=Gn.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,Sz=Gn.div`
  text-align: center;
  margin-bottom: 3rem;
`,kz=Gn.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,Cz=Gn.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,Tz=Gn.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,Ez=Gn(Qe)`
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  padding: 1.5rem;
  text-decoration: none;
  color: var(--text-primary);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
  }
`,$z=Gn.h3`
  color: var(--primary);
  margin-top: 0;
  margin-bottom: 1rem;
`,Pz=Gn.p`
  color: var(--text-secondary);
  margin: 0;
`,Az=Gn.span`
  font-size: 0.8rem;
  background: var(--secondary);
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 20px;
  margin-left: 0.5rem;
  vertical-align: middle;
`,Iz=Gn.div`
  text-align: center;
  padding: 3rem;
  color: var(--text-secondary);
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
`,zz=()=>{const{categoryId:t}=function(){let{matches:t}=e.useContext(q),r=t[t.length-1];return r?r.params:{}}(),r={sorting:{title:"Sorting Algorithms",description:"Algorithms that put elements of a list in a certain order."},searching:{title:"Searching Algorithms",description:"Algorithms for finding an item with specified properties within a collection."},graph:{title:"Graph Algorithms",description:"Algorithms that operate on graphs to solve problems such as finding the shortest path."},dynamic:{title:"Dynamic Programming",description:"A method for solving complex problems by breaking them down into simpler subproblems."},string:{title:"String Algorithms",description:"Algorithms that operate on strings, such as pattern matching and text processing."},"number-theory":{title:"Number Theory",description:"Algorithms related to properties and relationships of numbers."}}[t]||{title:"Unknown Category",description:""},n={sorting:[{id:"bubble",title:"Bubble Sort",description:"A simple comparison-based sorting algorithm.",comingSoon:!1},{id:"selection",title:"Selection Sort",description:"An in-place comparison sorting algorithm.",comingSoon:!1},{id:"insertion",title:"Insertion Sort",description:"A simple sorting algorithm that builds the sorted array one item at a time.",comingSoon:!1},{id:"merge",title:"Merge Sort",description:"An efficient, stable, comparison-based, divide and conquer sorting algorithm.",comingSoon:!1},{id:"quick",title:"Quick Sort",description:"An efficient sorting algorithm that uses divide-and-conquer.",comingSoon:!1},{id:"heap",title:"Heap Sort",description:"A comparison-based sorting algorithm that uses a binary heap data structure.",comingSoon:!1}],searching:[{id:"linear",title:"Linear Search",description:"A simple search algorithm that finds an element in a list by checking each element.",comingSoon:!1},{id:"binary",title:"Binary Search",description:"A fast search algorithm that works on sorted arrays.",comingSoon:!1},{id:"jump",title:"Jump Search",description:"A search algorithm that works on sorted arrays by jumping ahead by fixed steps.",comingSoon:!1},{id:"interpolation",title:"Interpolation Search",description:"An improved variant of binary search for uniformly distributed sorted arrays.",comingSoon:!1},{id:"exponential",title:"Exponential Search",description:"A search algorithm that works on sorted arrays and finds a range where the element may be present.",comingSoon:!1}],graph:[{id:"bfs",title:"Breadth-First Search",description:"An algorithm for traversing tree or graph data structures starting from the root.",comingSoon:!1},{id:"dfs",title:"Depth-First Search",description:"An algorithm for traversing tree or graph data structures starting at the root.",comingSoon:!1},{id:"dijkstra",title:"Dijkstra's Algorithm",description:"An algorithm for finding the shortest paths between nodes in a graph.",comingSoon:!1},{id:"bellman-ford",title:"Bellman-Ford Algorithm",description:"An algorithm for computing shortest paths from a source vertex to all other vertices.",comingSoon:!1},{id:"floyd-warshall",title:"Floyd-Warshall Algorithm",description:"An algorithm for finding shortest paths in a weighted graph.",comingSoon:!1},{id:"kruskal",title:"Kruskal's Algorithm",description:"A minimum spanning tree algorithm that finds an edge of the least weight.",comingSoon:!1},{id:"prim",title:"Prim's Algorithm",description:"A greedy algorithm that finds a minimum spanning tree for a weighted undirected graph.",comingSoon:!1},{id:"topological-sort",title:"Topological Sort",description:"A linear ordering of vertices such that for every directed edge, the starting vertex comes before the ending vertex.",comingSoon:!1}],dynamic:[{id:"fibonacci",title:"Fibonacci Sequence",description:"A sequence where each number is the sum of the two preceding ones.",comingSoon:!1},{id:"knapsack",title:"0/1 Knapsack",description:"A problem in combinatorial optimization where items must be selected to maximize value.",comingSoon:!1},{id:"lcs",title:"Longest Common Subsequence",description:"Finding the longest subsequence common to all sequences in a set of sequences.",comingSoon:!1},{id:"lis",title:"Longest Increasing Subsequence",description:"Finding a subsequence in which the elements are in sorted order from lowest to highest.",comingSoon:!1}],string:[{id:"naive",title:"Naive Pattern Matching",description:"A simple algorithm for finding occurrences of a pattern in a text.",comingSoon:!1},{id:"kmp",title:"Knuth-Morris-Pratt",description:"An efficient pattern searching algorithm that uses a prefix function.",comingSoon:!1},{id:"rabin-karp",title:"Rabin-Karp",description:"A string-searching algorithm that uses hashing.",comingSoon:!1},{id:"boyer-moore",title:"Boyer-Moore",description:"An efficient string search algorithm that skips sections of the text.",comingSoon:!1},{id:"levenshtein",title:"Levenshtein Distance",description:"A measure of the difference between two strings.",comingSoon:!1},{id:"manacher",title:"Manacher's Algorithm",description:"Finding the longest palindromic substring in linear time.",comingSoon:!1}],"number-theory":[{id:"fibonacci",title:"Fibonacci Sequence",description:"A sequence where each number is the sum of the two preceding ones.",comingSoon:!1},{id:"zeckendorf",title:"Zeckendorf's Representation",description:"Representing numbers as sums of Fibonacci numbers.",comingSoon:!1},{id:"primality",title:"Primality Test",description:"Determining whether a given number is prime.",comingSoon:!1},{id:"sieve",title:"Sieve of Eratosthenes",description:"Finding all prime numbers up to a given limit.",comingSoon:!1}]}[t]||[];return(0,Qn.jsxs)(jz,{children:[(0,Qn.jsxs)(Sz,{children:[(0,Qn.jsx)(kz,{children:r.title}),(0,Qn.jsx)(Cz,{children:r.description})]}),n.length>0?(0,Qn.jsx)(Tz,{children:n.map((e=>(0,Qn.jsxs)(Ez,{to:e.comingSoon?"#":`/algorithms/${t}/${e.id}`,onClick:t=>e.comingSoon&&t.preventDefault(),children:[(0,Qn.jsxs)($z,{children:[e.title,e.comingSoon&&(0,Qn.jsx)(Az,{children:"Coming Soon"})]}),(0,Qn.jsx)(Pz,{children:e.description})]},e.id)))}):(0,Qn.jsxs)(Iz,{children:[(0,Qn.jsx)("h2",{children:"No algorithms found for this category"}),(0,Qn.jsx)("p",{children:"Please check the category ID or add algorithms to this category."})]})]})},Mz=Gn.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,Fz=Gn.main`
  flex: 1;
`;const Rz=function(){return(0,Qn.jsx)(Ye,{children:(0,Qn.jsxs)(Mz,{children:[(0,Qn.jsx)(Xn,{}),(0,Qn.jsx)(ni,{}),(0,Qn.jsx)(Fz,{children:(0,Qn.jsxs)(fe,{children:[(0,Qn.jsx)(pe,{path:"/",element:(0,Qn.jsx)(vh,{})}),(0,Qn.jsx)(pe,{path:"/data-structures",element:(0,Qn.jsx)(Ah,{})}),(0,Qn.jsx)(pe,{path:"/algorithms",element:(0,Qn.jsx)(Dh,{})}),(0,Qn.jsx)(pe,{path:"/data-structures/arrays",element:(0,Qn.jsx)(mp,{})}),(0,Qn.jsx)(pe,{path:"/data-structures/linked-lists",element:(0,Qn.jsx)(Rp,{})}),(0,Qn.jsx)(pe,{path:"/data-structures/stacks",element:(0,Qn.jsx)(em,{})}),(0,Qn.jsx)(pe,{path:"/data-structures/queues",element:(0,Qn.jsx)(jm,{})}),(0,Qn.jsx)(pe,{path:"/data-structures/trees",element:(0,Qn.jsx)(df,{})}),(0,Qn.jsx)(pe,{path:"/data-structures/hash-tables",element:(0,Qn.jsx)(If,{})}),(0,Qn.jsx)(pe,{path:"/data-structures/graphs",element:(0,Qn.jsx)(rg,{})}),(0,Qn.jsx)(pe,{path:"/data-structures/heaps",element:(0,Qn.jsx)(Sg,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/sorting/bubble",element:(0,Qn.jsx)(Hg,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/sorting/selection",element:(0,Qn.jsx)(hv,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/sorting/insertion",element:(0,Qn.jsx)(Fv,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/sorting/merge",element:(0,Qn.jsx)(ix,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/sorting/quick",element:(0,Qn.jsx)($x,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/sorting/heap",element:(0,Qn.jsx)(ry,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/searching/binary",element:(0,Qn.jsx)(Ey,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/searching/linear",element:(0,Qn.jsx)(Xy,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/searching/jump",element:(0,Qn.jsx)(Ew,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/searching/interpolation",element:(0,Qn.jsx)(ij,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/searching/exponential",element:(0,Qn.jsx)(Fj,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/graph/bfs",element:(0,Qn.jsx)(kb,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/graph/dfs",element:(0,Qn.jsx)(Jb,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/graph/dijkstra",element:(0,Qn.jsx)(lS,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/graph/bellman-ford",element:(0,Qn.jsx)(NS,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/graph/floyd-warshall",element:(0,Qn.jsx)(xk,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/graph/kruskal",element:(0,Qn.jsx)(Vk,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/graph/prim",element:(0,Qn.jsx)(tC,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/graph/topological-sort",element:(0,Qn.jsx)(xC,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/dynamic/fibonacci",element:(0,Qn.jsx)(eT,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/dynamic/knapsack",element:(0,Qn.jsx)(FT,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/dynamic/lcs",element:(0,Qn.jsx)(RE,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/dynamic/lis",element:(0,Qn.jsx)(s$,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/string/kmp",element:(0,Qn.jsx)(uE,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/string/naive",element:(0,Qn.jsx)(M$,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/string/rabin-karp",element:(0,Qn.jsx)(sP,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/string/boyer-moore",element:(0,Qn.jsx)(UI,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/string/manacher",element:(0,Qn.jsx)(wz,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/string/levenshtein",element:(0,Qn.jsx)(RP,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/number-theory/fibonacci",element:(0,Qn.jsx)(eT,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/number-theory/zeckendorf",element:(0,Qn.jsx)(oA,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/number-theory/sieve",element:(0,Qn.jsx)(MA,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/number-theory/primality",element:(0,Qn.jsx)(aI,{})}),(0,Qn.jsx)(pe,{path:"/algorithms/:categoryId",element:(0,Qn.jsx)(zz,{})})]})})]})})},Oz=e=>{e&&e instanceof Function&&r.e(453).then(r.bind(r,453)).then((t=>{let{getCLS:r,getFID:n,getFCP:i,getLCP:a,getTTFB:o}=t;r(e),n(e),i(e),a(e),o(e)}))};t.createRoot(document.getElementById("root")).render((0,Qn.jsx)(Rz,{})),Oz()})()})();
//# sourceMappingURL=main.21cf603a.js.map