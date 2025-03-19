/*! For license information please see main.4f9badf9.js.LICENSE.txt */
(()=>{var e={4:(e,t,n)=>{"use strict";var r=n(853),i=n(43),a=n(950);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}var l=Symbol.for("react.element"),u=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),m=Symbol.for("react.consumer"),g=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),x=Symbol.for("react.suspense_list"),b=Symbol.for("react.memo"),w=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var S=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var k=Symbol.for("react.memo_cache_sentinel"),j=Symbol.iterator;function C(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=j&&e[j]||e["@@iterator"])?e:null}var E=Symbol.for("react.client.reference");function T(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===E?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case d:return"Fragment";case c:return"Portal";case p:return"Profiler";case h:return"StrictMode";case y:return"Suspense";case x:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case g:return(e.displayName||"Context")+".Provider";case m:return(e._context.displayName||"Context")+".Consumer";case v:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case b:return null!==(t=e.displayName||null)?t:T(e.type)||"Memo";case w:t=e._payload,e=e._init;try{return T(e(t))}catch(n){}}return null}var P,$,A=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=Object.assign;function O(e){if(void 0===P)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);P=t&&t[1]||"",$=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+P+e+$}var z=!1;function N(e,t){if(!e||z)return"";z=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(i){var r=i}Reflect.construct(e,[],n)}else{try{n.call()}catch(a){r=a}e.call(n.prototype)}}else{try{throw Error()}catch(o){r=o}(n=e())&&"function"===typeof n.catch&&n.catch((function(){}))}}catch(s){if(s&&r&&"string"===typeof s.stack)return[s.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var l=o.split("\n"),u=s.split("\n");for(i=r=0;r<l.length&&!l[r].includes("DetermineComponentFrameRoot");)r++;for(;i<u.length&&!u[i].includes("DetermineComponentFrameRoot");)i++;if(r===l.length||i===u.length)for(r=l.length-1,i=u.length-1;1<=r&&0<=i&&l[r]!==u[i];)i--;for(;1<=r&&0<=i;r--,i--)if(l[r]!==u[i]){if(1!==r||1!==i)do{if(r--,0>--i||l[r]!==u[i]){var c="\n"+l[r].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}}while(1<=r&&0<=i);break}}}finally{z=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?O(n):""}function M(e){switch(e.tag){case 26:case 27:case 5:return O(e.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 15:return e=N(e.type,!1);case 11:return e=N(e.type.render,!1);case 1:return e=N(e.type,!0);default:return""}}function L(e){try{var t="";do{t+=M(e),e=e.return}while(e);return t}catch(n){return"\nError generating stack: "+n.message+"\n"+n.stack}}function D(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function I(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function F(e){if(D(e)!==e)throw Error(o(188))}function _(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=_(e)))return t;e=e.sibling}return null}var V=Array.isArray,B=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U={pending:!1,data:null,method:null,action:null},H=[],W=-1;function q(e){return{current:e}}function K(e){0>W||(e.current=H[W],H[W]=null,W--)}function Q(e,t){W++,H[W]=e.current,e.current=t}var Y=q(null),G=q(null),X=q(null),J=q(null);function Z(e,t){switch(Q(X,t),Q(G,e),Q(Y,null),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?Gc(t):0;break;default:if(t=(e=8===e?t.parentNode:t).tagName,e=e.namespaceURI)t=Xc(e=Gc(e),t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(Y),Q(Y,t)}function ee(){K(Y),K(G),K(X)}function te(e){null!==e.memoizedState&&Q(J,e);var t=Y.current,n=Xc(t,e.type);t!==n&&(Q(G,e),Q(Y,n))}function ne(e){G.current===e&&(K(Y),K(G)),J.current===e&&(K(J),Ld._currentValue=U)}var re=Object.prototype.hasOwnProperty,ie=r.unstable_scheduleCallback,ae=r.unstable_cancelCallback,oe=r.unstable_shouldYield,se=r.unstable_requestPaint,le=r.unstable_now,ue=r.unstable_getCurrentPriorityLevel,ce=r.unstable_ImmediatePriority,de=r.unstable_UserBlockingPriority,he=r.unstable_NormalPriority,pe=r.unstable_LowPriority,fe=r.unstable_IdlePriority,me=r.log,ge=r.unstable_setDisableYieldValue,ve=null,ye=null;function xe(e){if("function"===typeof me&&ge(e),ye&&"function"===typeof ye.setStrictMode)try{ye.setStrictMode(ve,e)}catch(t){}}var be=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(we(e)/Se|0)|0},we=Math.log,Se=Math.LN2;var ke=128,je=4194304;function Ce(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194176&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ee(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=e.warmLanes;e=0!==e.finishedLanes;var s=134217727&n;return 0!==s?0!==(n=s&~i)?r=Ce(n):0!==(a&=s)?r=Ce(a):e||0!==(o=s&~o)&&(r=Ce(o)):0!==(s=n&~i)?r=Ce(s):0!==a?r=Ce(a):e||0!==(o=n&~o)&&(r=Ce(o)),0===r?0:0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(o=t&-t)||32===i&&0!==(4194176&o))?t:r}function Te(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function Pe(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function $e(){var e=ke;return 0===(4194176&(ke<<=1))&&(ke=128),e}function Ae(){var e=je;return 0===(62914560&(je<<=1))&&(je=4194304),e}function Re(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Oe(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ze(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-be(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|4194218&n}function Ne(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-be(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Me(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Le(){var e=B.p;return 0!==e?e:void 0===(e=window.event)?32:Xd(e.type)}var De=Math.random().toString(36).slice(2),Ie="__reactFiber$"+De,Fe="__reactProps$"+De,_e="__reactContainer$"+De,Ve="__reactEvents$"+De,Be="__reactListeners$"+De,Ue="__reactHandles$"+De,He="__reactResources$"+De,We="__reactMarker$"+De;function qe(e){delete e[Ie],delete e[Fe],delete e[Ve],delete e[Be],delete e[Ue]}function Ke(e){var t=e[Ie];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_e]||n[Ie]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ld(e);null!==e;){if(n=e[Ie])return n;e=ld(e)}return t}n=(e=n).parentNode}return null}function Qe(e){if(e=e[Ie]||e[_e]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function Ye(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(o(33))}function Ge(e){var t=e[He];return t||(t=e[He]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[We]=!0}var Je=new Set,Ze={};function et(e,t){tt(e,t),tt(e+"Capture",t)}function tt(e,t){for(Ze[e]=t,e=0;e<t.length;e++)Je.add(t[e])}var nt=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),rt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),it={},at={};function ot(e,t,n){if(i=t,re.call(at,i)||!re.call(it,i)&&(rt.test(i)?at[i]=!0:(it[i]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var i}function st(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function lt(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ct(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function dt(e){e._valueTracker||(e._valueTracker=function(e){var t=ct(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function ht(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ct(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function pt(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var ft=/[\n"\\]/g;function mt(e){return e.replace(ft,(function(e){return"\\"+e.charCodeAt(0).toString(16)+" "}))}function gt(e,t,n,r,i,a,o,s){e.name="",null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o?e.type=o:e.removeAttribute("type"),null!=t?"number"===o?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ut(t)):e.value!==""+ut(t)&&(e.value=""+ut(t)):"submit"!==o&&"reset"!==o||e.removeAttribute("value"),null!=t?yt(e,o,ut(t)):null!=n?yt(e,o,ut(n)):null!=r&&e.removeAttribute("value"),null==i&&null!=a&&(e.defaultChecked=!!a),null!=i&&(e.checked=i&&"function"!==typeof i&&"symbol"!==typeof i),null!=s&&"function"!==typeof s&&"symbol"!==typeof s&&"boolean"!==typeof s?e.name=""+ut(s):e.removeAttribute("name")}function vt(e,t,n,r,i,a,o,s){if(null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a&&(e.type=a),null!=t||null!=n){if(!("submit"!==a&&"reset"!==a||void 0!==t&&null!==t))return;n=null!=n?""+ut(n):"",t=null!=t?""+ut(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:i)&&"symbol"!==typeof r&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.name=o)}function yt(e,t,n){"number"===t&&pt(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function xt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ut(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function bt(e,t,n){null==t||((t=""+ut(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ut(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function wt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(o(92));if(V(r)){if(1<r.length)throw Error(o(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=ut(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r)}function St(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var kt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jt(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||kt.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ct(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(o(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&jt(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&jt(e,a,t[a])}function Et(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $t(e){return Pt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var At=null;function Rt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Ot=null,zt=null;function Nt(e){var t=Qe(e);if(t&&(e=t.stateNode)){var n=e[Fe]||null;e:switch(e=t.stateNode,t.type){case"input":if(gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[Fe]||null;if(!i)throw Error(o(90));gt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&ht(r)}break e;case"textarea":bt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&xt(e,!!n.multiple,t,!1)}}}var Mt=!1;function Lt(e,t,n){if(Mt)return e(t,n);Mt=!0;try{return e(t)}finally{if(Mt=!1,(null!==Ot||null!==zt)&&(Iu(),Ot&&(t=Ot,e=zt,zt=Ot=null,Nt(t),e)))for(t=0;t<e.length;t++)Nt(e[t])}}function Dt(e,t){var n=e.stateNode;if(null===n)return null;var r=n[Fe]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var It=!1;if(nt)try{var Ft={};Object.defineProperty(Ft,"passive",{get:function(){It=!0}}),window.addEventListener("test",Ft,Ft),window.removeEventListener("test",Ft,Ft)}catch(wh){It=!1}var _t=null,Vt=null,Bt=null;function Ut(){if(Bt)return Bt;var e,t,n=Vt,r=n.length,i="value"in _t?_t.value:_t.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[a-t];t++);return Bt=i.slice(e,1<t?1-t:void 0)}function Ht(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Wt(){return!0}function qt(){return!1}function Kt(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?Wt:qt,this.isPropagationStopped=qt,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Wt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Wt)},persist:function(){},isPersistent:Wt}),t}var Qt,Yt,Gt,Xt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jt=Kt(Xt),Zt=R({},Xt,{view:0,detail:0}),en=Kt(Zt),tn=R({},Zt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gt&&(Gt&&"mousemove"===e.type?(Qt=e.screenX-Gt.screenX,Yt=e.screenY-Gt.screenY):Yt=Qt=0,Gt=e),Qt)},movementY:function(e){return"movementY"in e?e.movementY:Yt}}),nn=Kt(tn),rn=Kt(R({},tn,{dataTransfer:0})),an=Kt(R({},Zt,{relatedTarget:0})),on=Kt(R({},Xt,{animationName:0,elapsedTime:0,pseudoElement:0})),sn=Kt(R({},Xt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),ln=Kt(R({},Xt,{data:0})),un={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=dn[e])&&!!t[e]}function pn(){return hn}var fn=Kt(R({},Zt,{key:function(e){if(e.key){var t=un[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Ht(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?cn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pn,charCode:function(e){return"keypress"===e.type?Ht(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Ht(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),mn=Kt(R({},tn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),gn=Kt(R({},Zt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pn})),vn=Kt(R({},Xt,{propertyName:0,elapsedTime:0,pseudoElement:0})),yn=Kt(R({},tn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),xn=Kt(R({},Xt,{newState:0,oldState:0})),bn=[9,13,27,32],wn=nt&&"CompositionEvent"in window,Sn=null;nt&&"documentMode"in document&&(Sn=document.documentMode);var kn=nt&&"TextEvent"in window&&!Sn,jn=nt&&(!wn||Sn&&8<Sn&&11>=Sn),Cn=String.fromCharCode(32),En=!1;function Tn(e,t){switch(e){case"keyup":return-1!==bn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var $n=!1;var An={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!An[e.type]:"textarea"===t}function On(e,t,n,r){Ot?zt?zt.push(r):zt=[r]:Ot=r,0<(t=Lc(t,"onChange")).length&&(n=new Jt("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var zn=null,Nn=null;function Mn(e){Pc(e,0)}function Ln(e){if(ht(Ye(e)))return e}function Dn(e,t){if("change"===e)return t}var In=!1;if(nt){var Fn;if(nt){var _n="oninput"in document;if(!_n){var Vn=document.createElement("div");Vn.setAttribute("oninput","return;"),_n="function"===typeof Vn.oninput}Fn=_n}else Fn=!1;In=Fn&&(!document.documentMode||9<document.documentMode)}function Bn(){zn&&(zn.detachEvent("onpropertychange",Un),Nn=zn=null)}function Un(e){if("value"===e.propertyName&&Ln(Nn)){var t=[];On(t,Nn,e,Rt(e)),Lt(Mn,t)}}function Hn(e,t,n){"focusin"===e?(Bn(),Nn=n,(zn=t).attachEvent("onpropertychange",Un)):"focusout"===e&&Bn()}function Wn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Ln(Nn)}function qn(e,t){if("click"===e)return Ln(t)}function Kn(e,t){if("input"===e||"change"===e)return Ln(t)}var Qn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Yn(e,t){if(Qn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!re.call(t,i)||!Qn(e[i],t[i]))return!1}return!0}function Gn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xn(e,t){var n,r=Gn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Gn(r)}}function Jn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Jn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Zn(e){for(var t=pt((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=pt((e=t.contentWindow).document)}return t}function er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function tr(e,t){var n=Zn(t);t=e.focusedElem;var r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Jn(t.ownerDocument.documentElement,t)){if(null!==r&&er(t))if(e=r.start,void 0===(n=r.end)&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if((n=(e=t.ownerDocument||document)&&e.defaultView||window).getSelection){n=n.getSelection();var i=t.textContent.length,a=Math.min(r.start,i);r=void 0===r.end?a:Math.min(r.end,i),!n.extend&&a>r&&(i=r,r=a,a=i),i=Xn(t,a);var o=Xn(t,r);i&&o&&(1!==n.rangeCount||n.anchorNode!==i.node||n.anchorOffset!==i.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&((e=e.createRange()).setStart(i.node,i.offset),n.removeAllRanges(),a>r?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}for(e=[],n=t;n=n.parentNode;)1===n.nodeType&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for("function"===typeof t.focus&&t.focus(),t=0;t<e.length;t++)(n=e[t]).element.scrollLeft=n.left,n.element.scrollTop=n.top}}var nr=nt&&"documentMode"in document&&11>=document.documentMode,rr=null,ir=null,ar=null,or=!1;function sr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;or||null==rr||rr!==pt(r)||("selectionStart"in(r=rr)&&er(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},ar&&Yn(ar,r)||(ar=r,0<(r=Lc(ir,"onSelect")).length&&(t=new Jt("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function lr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ur={animationend:lr("Animation","AnimationEnd"),animationiteration:lr("Animation","AnimationIteration"),animationstart:lr("Animation","AnimationStart"),transitionrun:lr("Transition","TransitionRun"),transitionstart:lr("Transition","TransitionStart"),transitioncancel:lr("Transition","TransitionCancel"),transitionend:lr("Transition","TransitionEnd")},cr={},dr={};function hr(e){if(cr[e])return cr[e];if(!ur[e])return e;var t,n=ur[e];for(t in n)if(n.hasOwnProperty(t)&&t in dr)return cr[e]=n[t];return e}nt&&(dr=document.createElement("div").style,"AnimationEvent"in window||(delete ur.animationend.animation,delete ur.animationiteration.animation,delete ur.animationstart.animation),"TransitionEvent"in window||delete ur.transitionend.transition);var pr=hr("animationend"),fr=hr("animationiteration"),mr=hr("animationstart"),gr=hr("transitionrun"),vr=hr("transitionstart"),yr=hr("transitioncancel"),xr=hr("transitionend"),br=new Map,wr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Sr(e,t){br.set(e,t),et(t,[e])}var kr=[],jr=0,Cr=0;function Er(){for(var e=jr,t=Cr=jr=0;t<e;){var n=kr[t];kr[t++]=null;var r=kr[t];kr[t++]=null;var i=kr[t];kr[t++]=null;var a=kr[t];if(kr[t++]=null,null!==r&&null!==i){var o=r.pending;null===o?i.next=i:(i.next=o.next,o.next=i),r.pending=i}0!==a&&Ar(n,i,a)}}function Tr(e,t,n,r){kr[jr++]=e,kr[jr++]=t,kr[jr++]=n,kr[jr++]=r,Cr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Pr(e,t,n,r){return Tr(e,t,n,r),Rr(e)}function $r(e,t){return Tr(e,null,null,t),Rr(e)}function Ar(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var i=!1,a=e.return;null!==a;)a.childLanes|=n,null!==(r=a.alternate)&&(r.childLanes|=n),22===a.tag&&(null===(e=a.stateNode)||1&e._visibility||(i=!0)),e=a,a=a.return;i&&null!==t&&3===e.tag&&(a=e.stateNode,i=31-be(n),null===(e=(a=a.hiddenUpdates)[i])?a[i]=[t]:e.push(t),t.lane=536870912|n)}function Rr(e){if(50<Pu)throw Pu=0,$u=null,Error(o(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Or={},zr=new WeakMap;function Nr(e,t){if("object"===typeof e&&null!==e){var n=zr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:L(t)},zr.set(e,t),t)}return{value:e,source:t,stack:L(t)}}var Mr=[],Lr=0,Dr=null,Ir=0,Fr=[],_r=0,Vr=null,Br=1,Ur="";function Hr(e,t){Mr[Lr++]=Ir,Mr[Lr++]=Dr,Dr=e,Ir=t}function Wr(e,t,n){Fr[_r++]=Br,Fr[_r++]=Ur,Fr[_r++]=Vr,Vr=e;var r=Br;e=Ur;var i=32-be(r)-1;r&=~(1<<i),n+=1;var a=32-be(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Br=1<<32-be(t)+i|n<<i|r,Ur=a+e}else Br=1<<a|n<<i|r,Ur=e}function qr(e){null!==e.return&&(Hr(e,1),Wr(e,1,0))}function Kr(e){for(;e===Dr;)Dr=Mr[--Lr],Mr[Lr]=null,Ir=Mr[--Lr],Mr[Lr]=null;for(;e===Vr;)Vr=Fr[--_r],Fr[_r]=null,Ur=Fr[--_r],Fr[_r]=null,Br=Fr[--_r],Fr[_r]=null}var Qr=null,Yr=null,Gr=!1,Xr=null,Jr=!1,Zr=Error(o(519));function ei(e){throw ai(Nr(Error(o(418,"")),e)),Zr}function ti(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Ie]=e,t[Fe]=r,n){case"dialog":$c("cancel",t),$c("close",t);break;case"iframe":case"object":case"embed":$c("load",t);break;case"video":case"audio":for(n=0;n<Ec.length;n++)$c(Ec[n],t);break;case"source":$c("error",t);break;case"img":case"image":case"link":$c("error",t),$c("load",t);break;case"details":$c("toggle",t);break;case"input":$c("invalid",t),vt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),dt(t);break;case"select":$c("invalid",t);break;case"textarea":$c("invalid",t),wt(t,r.value,r.defaultValue,r.children),dt(t)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||Bc(t.textContent,n)?(null!=r.popover&&($c("beforetoggle",t),$c("toggle",t)),null!=r.onScroll&&$c("scroll",t),null!=r.onScrollEnd&&$c("scrollend",t),null!=r.onClick&&(t.onclick=Uc),t=!0):t=!1,t||ei(e)}function ni(e){for(Qr=e.return;Qr;)switch(Qr.tag){case 3:case 27:return void(Jr=!0);case 5:case 13:return void(Jr=!1);default:Qr=Qr.return}}function ri(e){if(e!==Qr)return!1;if(!Gr)return ni(e),Gr=!0,!1;var t,n=!1;if((t=3!==e.tag&&27!==e.tag)&&((t=5===e.tag)&&(t=!("form"!==(t=e.type)&&"button"!==t)||Jc(e.type,e.memoizedProps)),t=!t),t&&(n=!0),n&&Yr&&ei(e),ni(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===n){Yr=sd(e.nextSibling);break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++;e=e.nextSibling}Yr=null}}else Yr=Qr?sd(e.stateNode.nextSibling):null;return!0}function ii(){Yr=Qr=null,Gr=!1}function ai(e){null===Xr?Xr=[e]:Xr.push(e)}var oi=Error(o(460)),si=Error(o(474)),li={then:function(){}};function ui(e){return"fulfilled"===(e=e.status)||"rejected"===e}function ci(){}function di(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(ci,ci),t=n),t.status){case"fulfilled":return t.value;case"rejected":if((e=t.reason)===oi)throw Error(o(483));throw e;default:if("string"===typeof t.status)t.then(ci,ci);else{if(null!==(e=tu)&&100<e.shellSuspendCounter)throw Error(o(482));(e=t).status="pending",e.then((function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}}),(function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}}))}switch(t.status){case"fulfilled":return t.value;case"rejected":if((e=t.reason)===oi)throw Error(o(483));throw e}throw hi=t,oi}}var hi=null;function pi(){if(null===hi)throw Error(o(459));var e=hi;return hi=null,e}var fi=null,mi=0;function gi(e){var t=mi;return mi+=1,null===fi&&(fi=[]),di(fi,e,t)}function vi(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function yi(e,t){if(t.$$typeof===l)throw Error(o(525));throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xi(e){return(0,e._init)(e._payload)}function bi(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function i(e,t){return(e=Dl(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=33554434,n):r:(t.flags|=33554434,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=33554434),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Bl(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function h(e,t,n,r){var a=n.type;return a===d?f(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===w&&xi(a)===t.type)?(vi(t=i(t,n.props),n),t.return=e,t):(vi(t=Fl(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function p(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Ul(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function f(e,t,n,r,a){return null===t||7!==t.tag?((t=_l(n,e.mode,r,a)).return=e,t):((t=i(t,n)).return=e,t)}function m(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Bl(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case u:return vi(n=Fl(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case c:return(t=Ul(t,e.mode,n)).return=e,t;case w:return m(e,t=(0,t._init)(t._payload),n)}if(V(t)||C(t))return(t=_l(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return m(e,gi(t),n);if(t.$$typeof===g)return m(e,Es(e,t),n);yi(e,t)}return null}function v(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case u:return n.key===i?h(e,t,n,r):null;case c:return n.key===i?p(e,t,n,r):null;case w:return v(e,t,n=(i=n._init)(n._payload),r)}if(V(n)||C(n))return null!==i?null:f(e,t,n,r,null);if("function"===typeof n.then)return v(e,t,gi(n),r);if(n.$$typeof===g)return v(e,t,Es(e,n),r);yi(e,n)}return null}function y(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case u:return h(t,e=e.get(null===r.key?n:r.key)||null,r,i);case c:return p(t,e=e.get(null===r.key?n:r.key)||null,r,i);case w:return y(e,t,n,r=(0,r._init)(r._payload),i)}if(V(r)||C(r))return f(t,e=e.get(n)||null,r,i,null);if("function"===typeof r.then)return y(e,t,n,gi(r),i);if(r.$$typeof===g)return y(e,t,n,Es(t,r),i);yi(t,r)}return null}function x(l,h,p,f){if("object"===typeof p&&null!==p&&p.type===d&&null===p.key&&(p=p.props.children),"object"===typeof p&&null!==p){switch(p.$$typeof){case u:e:{for(var b=p.key;null!==h;){if(h.key===b){if((b=p.type)===d){if(7===h.tag){n(l,h.sibling),(f=i(h,p.props.children)).return=l,l=f;break e}}else if(h.elementType===b||"object"===typeof b&&null!==b&&b.$$typeof===w&&xi(b)===h.type){n(l,h.sibling),vi(f=i(h,p.props),p),f.return=l,l=f;break e}n(l,h);break}t(l,h),h=h.sibling}p.type===d?((f=_l(p.props.children,l.mode,f,p.key)).return=l,l=f):(vi(f=Fl(p.type,p.key,p.props,null,l.mode,f),p),f.return=l,l=f)}return s(l);case c:e:{for(b=p.key;null!==h;){if(h.key===b){if(4===h.tag&&h.stateNode.containerInfo===p.containerInfo&&h.stateNode.implementation===p.implementation){n(l,h.sibling),(f=i(h,p.children||[])).return=l,l=f;break e}n(l,h);break}t(l,h),h=h.sibling}(f=Ul(p,l.mode,f)).return=l,l=f}return s(l);case w:return x(l,h,p=(b=p._init)(p._payload),f)}if(V(p))return function(i,o,s,l){for(var u=null,c=null,d=o,h=o=0,p=null;null!==d&&h<s.length;h++){d.index>h?(p=d,d=null):p=d.sibling;var f=v(i,d,s[h],l);if(null===f){null===d&&(d=p);break}e&&d&&null===f.alternate&&t(i,d),o=a(f,o,h),null===c?u=f:c.sibling=f,c=f,d=p}if(h===s.length)return n(i,d),Gr&&Hr(i,h),u;if(null===d){for(;h<s.length;h++)null!==(d=m(i,s[h],l))&&(o=a(d,o,h),null===c?u=d:c.sibling=d,c=d);return Gr&&Hr(i,h),u}for(d=r(d);h<s.length;h++)null!==(p=y(d,i,h,s[h],l))&&(e&&null!==p.alternate&&d.delete(null===p.key?h:p.key),o=a(p,o,h),null===c?u=p:c.sibling=p,c=p);return e&&d.forEach((function(e){return t(i,e)})),Gr&&Hr(i,h),u}(l,h,p,f);if(C(p)){if("function"!==typeof(b=C(p)))throw Error(o(150));return function(i,s,l,u){if(null==l)throw Error(o(151));for(var c=null,d=null,h=s,p=s=0,f=null,g=l.next();null!==h&&!g.done;p++,g=l.next()){h.index>p?(f=h,h=null):f=h.sibling;var x=v(i,h,g.value,u);if(null===x){null===h&&(h=f);break}e&&h&&null===x.alternate&&t(i,h),s=a(x,s,p),null===d?c=x:d.sibling=x,d=x,h=f}if(g.done)return n(i,h),Gr&&Hr(i,p),c;if(null===h){for(;!g.done;p++,g=l.next())null!==(g=m(i,g.value,u))&&(s=a(g,s,p),null===d?c=g:d.sibling=g,d=g);return Gr&&Hr(i,p),c}for(h=r(h);!g.done;p++,g=l.next())null!==(g=y(h,i,p,g.value,u))&&(e&&null!==g.alternate&&h.delete(null===g.key?p:g.key),s=a(g,s,p),null===d?c=g:d.sibling=g,d=g);return e&&h.forEach((function(e){return t(i,e)})),Gr&&Hr(i,p),c}(l,h,p=b.call(p),f)}if("function"===typeof p.then)return x(l,h,gi(p),f);if(p.$$typeof===g)return x(l,h,Es(l,p),f);yi(l,p)}return"string"===typeof p&&""!==p||"number"===typeof p||"bigint"===typeof p?(p=""+p,null!==h&&6===h.tag?(n(l,h.sibling),(f=i(h,p)).return=l,l=f):(n(l,h),(f=Bl(p,l.mode,f)).return=l,l=f),s(l)):n(l,h)}return function(e,t,n,r){try{mi=0;var i=x(e,t,n,r);return fi=null,i}catch(o){if(o===oi)throw o;var a=Ml(29,o,null,e.mode);return a.lanes=r,a.return=e,a}}}var wi=bi(!0),Si=bi(!1),ki=q(null),ji=q(0);function Ci(e,t){Q(ji,e=uu),Q(ki,t),uu=e|t.baseLanes}function Ei(){Q(ji,uu),Q(ki,ki.current)}function Ti(){uu=ji.current,K(ki),K(ji)}var Pi=q(null),$i=null;function Ai(e){var t=e.alternate;Q(Ni,1&Ni.current),Q(Pi,e),null===$i&&(null===t||null!==ki.current||null!==t.memoizedState)&&($i=e)}function Ri(e){if(22===e.tag){if(Q(Ni,Ni.current),Q(Pi,e),null===$i){var t=e.alternate;null!==t&&null!==t.memoizedState&&($i=e)}}else Oi()}function Oi(){Q(Ni,Ni.current),Q(Pi,Pi.current)}function zi(e){K(Pi),$i===e&&($i=null),K(Ni)}var Ni=q(0);function Mi(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Li="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach((function(e){return e()}))}},Di=r.unstable_scheduleCallback,Ii=r.unstable_NormalPriority,Fi={$$typeof:g,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _i(){return{controller:new Li,data:new Map,refCount:0}}function Vi(e){e.refCount--,0===e.refCount&&Di(Ii,(function(){e.controller.abort()}))}var Bi=null,Ui=0,Hi=0,Wi=null;function qi(){if(0===--Ui&&null!==Bi){null!==Wi&&(Wi.status="fulfilled");var e=Bi;Bi=null,Hi=0,Wi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Ki=A.S;A.S=function(e,t){"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Bi){var n=Bi=[];Ui=0,Hi=wc(),Wi={status:"pending",value:void 0,then:function(e){n.push(e)}}}Ui++,t.then(qi,qi)}(0,t),null!==Ki&&Ki(e,t)};var Qi=q(null);function Yi(){var e=Qi.current;return null!==e?e:tu.pooledCache}function Gi(e,t){Q(Qi,null===t?Qi.current:t.pool)}function Xi(){var e=Yi();return null===e?null:{parent:Fi._currentValue,pool:e}}var Ji=0,Zi=null,ea=null,ta=null,na=!1,ra=!1,ia=!1,aa=0,oa=0,sa=null,la=0;function ua(){throw Error(o(321))}function ca(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qn(e[n],t[n]))return!1;return!0}function da(e,t,n,r,i,a){return Ji=a,Zi=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,A.H=null===e||null===e.memoizedState?Eo:To,ia=!1,a=n(r,i),ia=!1,ra&&(a=pa(t,n,r,i)),ha(e),a}function ha(e){A.H=Co;var t=null!==ea&&null!==ea.next;if(Ji=0,ta=ea=Zi=null,na=!1,oa=0,sa=null,t)throw Error(o(300));null===e||Ho||null!==(e=e.dependencies)&&ks(e)&&(Ho=!0)}function pa(e,t,n,r){Zi=e;var i=0;do{if(ra&&(sa=null),oa=0,ra=!1,25<=i)throw Error(o(301));if(i+=1,ta=ea=null,null!=e.updateQueue){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,null!=a.memoCache&&(a.memoCache.index=0)}A.H=Po,a=t(n,r)}while(ra);return a}function fa(){var e=A.H,t=e.useState()[0];return t="function"===typeof t.then?ba(t):t,e=e.useState()[0],(null!==ea?ea.memoizedState:null)!==e&&(Zi.flags|=1024),t}function ma(){var e=0!==aa;return aa=0,e}function ga(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function va(e){if(na){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}na=!1}Ji=0,ta=ea=Zi=null,ra=!1,oa=aa=0,sa=null}function ya(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ta?Zi.memoizedState=ta=e:ta=ta.next=e,ta}function xa(){if(null===ea){var e=Zi.alternate;e=null!==e?e.memoizedState:null}else e=ea.next;var t=null===ta?Zi.memoizedState:ta.next;if(null!==t)ta=t,ea=e;else{if(null===e){if(null===Zi.alternate)throw Error(o(467));throw Error(o(310))}e={memoizedState:(ea=e).memoizedState,baseState:ea.baseState,baseQueue:ea.baseQueue,queue:ea.queue,next:null},null===ta?Zi.memoizedState=ta=e:ta=ta.next=e}return ta}function ba(e){var t=oa;return oa+=1,null===sa&&(sa=[]),e=di(sa,e,t),t=Zi,null===(null===ta?t.memoizedState:ta.next)&&(t=t.alternate,A.H=null===t||null===t.memoizedState?Eo:To),e}function wa(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return ba(e);if(e.$$typeof===g)return Cs(e)}throw Error(o(438,String(e)))}function Sa(e){var t=null,n=Zi.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=Zi.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map((function(e){return e.slice()})),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},Zi.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=k;return t.index++,n}function ka(e,t){return"function"===typeof t?t(e):t}function ja(e){return Ca(xa(),ea,e)}function Ca(e,t,n){var r=e.queue;if(null===r)throw Error(o(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(null!==a){if(null!==i){var s=i.next;i.next=a.next,a.next=s}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,null===i)e.memoizedState=a;else{var l=s=null,u=null,c=t=i.next,d=!1;do{var h=-536870913&c.lane;if(h!==c.lane?(ru&h)===h:(Ji&h)===h){var p=c.revertLane;if(0===p)null!==u&&(u=u.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),h===Hi&&(d=!0);else{if((Ji&p)===p){c=c.next,p===Hi&&(d=!0);continue}h={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===u?(l=u=h,s=a):u=u.next=h,Zi.lanes|=p,du|=p}h=c.action,ia&&n(a,h),a=c.hasEagerState?c.eagerState:n(a,h)}else p={lane:h,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===u?(l=u=p,s=a):u=u.next=p,Zi.lanes|=h,du|=h;c=c.next}while(null!==c&&c!==t);if(null===u?s=a:u.next=l,!Qn(a,e.memoizedState)&&(Ho=!0,d&&null!==(n=Wi)))throw n;e.memoizedState=a,e.baseState=s,e.baseQueue=u,r.lastRenderedState=a}return null===i&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ea(e){var t=xa(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{a=e(a,s.action),s=s.next}while(s!==i);Qn(a,t.memoizedState)||(Ho=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Ta(e,t,n){var r=Zi,i=xa(),a=Gr;if(a){if(void 0===n)throw Error(o(407));n=n()}else n=t();var s=!Qn((ea||i).memoizedState,n);if(s&&(i.memoizedState=n,Ho=!0),i=i.queue,Ja(Aa.bind(null,r,i,e),[e]),i.getSnapshot!==t||s||null!==ta&&1&ta.memoizedState.tag){if(r.flags|=2048,Ka(9,$a.bind(null,r,i,n,t),{destroy:void 0},null),null===tu)throw Error(o(349));a||0!==(60&Ji)||Pa(r,t,n)}return n}function Pa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=Zi.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},Zi.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function $a(e,t,n,r){t.value=n,t.getSnapshot=r,Ra(t)&&Oa(e)}function Aa(e,t,n){return n((function(){Ra(t)&&Oa(e)}))}function Ra(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qn(e,n)}catch(r){return!0}}function Oa(e){var t=$r(e,2);null!==t&&Ou(t,e,2)}function za(e){var t=ya();if("function"===typeof e){var n=e;if(e=n(),ia){xe(!0);try{n()}finally{xe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:e},t}function Na(e,t,n,r){return e.baseState=n,Ca(e,ea,"function"===typeof r?r:ka)}function Ma(e,t,n,r,i){if(So(e))throw Error(o(485));if(null!==(e=t.action)){var a={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};null!==A.T?n(!0):a.isTransition=!1,r(a),null===(n=t.pending)?(a.next=t.pending=a,La(t,a)):(a.next=n.next,t.pending=n.next=a)}}function La(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=A.T,o={};A.T=o;try{var s=n(i,r),l=A.S;null!==l&&l(o,s),Da(e,t,s)}catch(u){Fa(e,t,u)}finally{A.T=a}}else try{Da(e,t,a=n(i,r))}catch(c){Fa(e,t,c)}}function Da(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then((function(n){Ia(e,t,n)}),(function(n){return Fa(e,t,n)})):Ia(e,t,n)}function Ia(e,t,n){t.status="fulfilled",t.value=n,_a(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,La(e,n)))}function Fa(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,_a(t),t=t.next}while(t!==r)}e.action=null}function _a(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Va(e,t){return t}function Ba(e,t){if(Gr){var n=tu.formState;if(null!==n){e:{var r=Zi;if(Gr){if(Yr){t:{for(var i=Yr,a=Jr;8!==i.nodeType;){if(!a){i=null;break t}if(null===(i=sd(i.nextSibling))){i=null;break t}}i="F!"===(a=i.data)||"F"===a?i:null}if(i){Yr=sd(i.nextSibling),r="F!"===i.data;break e}}ei(r)}r=!1}r&&(t=n[0])}}return(n=ya()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:t},n.queue=r,n=xo.bind(null,Zi,r),r.dispatch=n,r=za(!1),a=wo.bind(null,Zi,!1,r.queue),i={state:t,dispatch:null,action:e,pending:null},(r=ya()).queue=i,n=Ma.bind(null,Zi,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Ua(e){return Ha(xa(),ea,e)}function Ha(e,t,n){t=Ca(e,t,Va)[0],e=ja(ka)[0],t="object"===typeof t&&null!==t&&"function"===typeof t.then?ba(t):t;var r=xa(),i=r.queue,a=i.dispatch;return n!==r.memoizedState&&(Zi.flags|=2048,Ka(9,Wa.bind(null,i,n),{destroy:void 0},null)),[t,a,e]}function Wa(e,t){e.action=t}function qa(e){var t=xa(),n=ea;if(null!==n)return Ha(t,n,e);xa(),t=t.memoizedState;var r=(n=xa()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Ka(e,t,n,r){return e={tag:e,create:t,inst:n,deps:r,next:null},null===(t=Zi.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},Zi.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Qa(){return xa().memoizedState}function Ya(e,t,n,r){var i=ya();Zi.flags|=e,i.memoizedState=Ka(1|t,n,{destroy:void 0},void 0===r?null:r)}function Ga(e,t,n,r){var i=xa();r=void 0===r?null:r;var a=i.memoizedState.inst;null!==ea&&null!==r&&ca(r,ea.memoizedState.deps)?i.memoizedState=Ka(t,n,a,r):(Zi.flags|=e,i.memoizedState=Ka(1|t,n,a,r))}function Xa(e,t){Ya(8390656,8,e,t)}function Ja(e,t){Ga(2048,8,e,t)}function Za(e,t){return Ga(4,2,e,t)}function eo(e,t){return Ga(4,4,e,t)}function to(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function no(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Ga(4,4,to.bind(null,t,e),n)}function ro(){}function io(e,t){var n=xa();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&ca(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ao(e,t){var n=xa();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&ca(t,r[1]))return r[0];if(r=e(),ia){xe(!0);try{e()}finally{xe(!1)}}return n.memoizedState=[r,t],r}function oo(e,t,n){return void 0===n||0!==(1073741824&Ji)?e.memoizedState=t:(e.memoizedState=n,e=Ru(),Zi.lanes|=e,du|=e,n)}function so(e,t,n,r){return Qn(n,t)?n:null!==ki.current?(e=oo(e,n,r),Qn(e,t)||(Ho=!0),e):0===(42&Ji)?(Ho=!0,e.memoizedState=n):(e=Ru(),Zi.lanes|=e,du|=e,t)}function lo(e,t,n,r,i){var a=B.p;B.p=0!==a&&8>a?a:8;var o=A.T,s={};A.T=s,wo(e,!1,t,n);try{var l=i(),u=A.S;if(null!==u&&u(s,l),null!==l&&"object"===typeof l&&"function"===typeof l.then)bo(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then((function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)}),(function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)})),r}(l,r),Au());else bo(e,t,r,Au())}catch(c){bo(e,t,{then:function(){},status:"rejected",reason:c},Au())}finally{B.p=a,A.T=o}}function uo(){}function co(e,t,n,r){if(5!==e.tag)throw Error(o(476));var i=ho(e).queue;lo(e,i,t,U,null===n?uo:function(){return po(e),n(r)})}function ho(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:U,baseState:U,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:U},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function po(e){bo(e,ho(e).next.queue,{},Au())}function fo(){return Cs(Ld)}function mo(){return xa().memoizedState}function go(){return xa().memoizedState}function vo(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Au(),r=Os(t,e=Rs(n),n);return null!==r&&(Ou(r,t,n),zs(r,t,n)),t={cache:_i()},void(e.payload=t)}t=t.return}}function yo(e,t,n){var r=Au();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},So(e)?ko(t,n):null!==(n=Pr(e,t,n,r))&&(Ou(n,e,r),jo(n,t,r))}function xo(e,t,n){bo(e,t,n,Au())}function bo(e,t,n,r){var i={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(So(e))ko(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Qn(s,o))return Tr(e,t,i,0),null===tu&&Er(),!1}catch(l){}if(null!==(n=Pr(e,t,i,r)))return Ou(n,e,r),jo(n,t,r),!0}return!1}function wo(e,t,n,r){if(r={lane:2,revertLane:wc(),action:r,hasEagerState:!1,eagerState:null,next:null},So(e)){if(t)throw Error(o(479))}else null!==(t=Pr(e,n,r,2))&&Ou(t,e,2)}function So(e){var t=e.alternate;return e===Zi||null!==t&&t===Zi}function ko(e,t){ra=na=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function jo(e,t,n){if(0!==(4194176&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Ne(e,n)}}var Co={readContext:Cs,use:wa,useCallback:ua,useContext:ua,useEffect:ua,useImperativeHandle:ua,useLayoutEffect:ua,useInsertionEffect:ua,useMemo:ua,useReducer:ua,useRef:ua,useState:ua,useDebugValue:ua,useDeferredValue:ua,useTransition:ua,useSyncExternalStore:ua,useId:ua};Co.useCacheRefresh=ua,Co.useMemoCache=ua,Co.useHostTransitionStatus=ua,Co.useFormState=ua,Co.useActionState=ua,Co.useOptimistic=ua;var Eo={readContext:Cs,use:wa,useCallback:function(e,t){return ya().memoizedState=[e,void 0===t?null:t],e},useContext:Cs,useEffect:Xa,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Ya(4194308,4,to.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ya(4194308,4,e,t)},useInsertionEffect:function(e,t){Ya(4,2,e,t)},useMemo:function(e,t){var n=ya();t=void 0===t?null:t;var r=e();if(ia){xe(!0);try{e()}finally{xe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ya();if(void 0!==n){var i=n(t);if(ia){xe(!0);try{n(t)}finally{xe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=yo.bind(null,Zi,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},ya().memoizedState=e},useState:function(e){var t=(e=za(e)).queue,n=xo.bind(null,Zi,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ro,useDeferredValue:function(e,t){return oo(ya(),e,t)},useTransition:function(){var e=za(!1);return e=lo.bind(null,Zi,e.queue,!0,!1),ya().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Zi,i=ya();if(Gr){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===tu)throw Error(o(349));0!==(60&ru)||Pa(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Xa(Aa.bind(null,r,a,e),[e]),r.flags|=2048,Ka(9,$a.bind(null,r,a,n,t),{destroy:void 0},null),n},useId:function(){var e=ya(),t=tu.identifierPrefix;if(Gr){var n=Ur;t=":"+t+"R"+(n=(Br&~(1<<32-be(Br)-1)).toString(32)+n),0<(n=aa++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=la++).toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return ya().memoizedState=vo.bind(null,Zi)}};Eo.useMemoCache=Sa,Eo.useHostTransitionStatus=fo,Eo.useFormState=Ba,Eo.useActionState=Ba,Eo.useOptimistic=function(e){var t=ya();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=wo.bind(null,Zi,!0,n),n.dispatch=t,[e,t]};var To={readContext:Cs,use:wa,useCallback:io,useContext:Cs,useEffect:Ja,useImperativeHandle:no,useInsertionEffect:Za,useLayoutEffect:eo,useMemo:ao,useReducer:ja,useRef:Qa,useState:function(){return ja(ka)},useDebugValue:ro,useDeferredValue:function(e,t){return so(xa(),ea.memoizedState,e,t)},useTransition:function(){var e=ja(ka)[0],t=xa().memoizedState;return["boolean"===typeof e?e:ba(e),t]},useSyncExternalStore:Ta,useId:mo};To.useCacheRefresh=go,To.useMemoCache=Sa,To.useHostTransitionStatus=fo,To.useFormState=Ua,To.useActionState=Ua,To.useOptimistic=function(e,t){return Na(xa(),0,e,t)};var Po={readContext:Cs,use:wa,useCallback:io,useContext:Cs,useEffect:Ja,useImperativeHandle:no,useInsertionEffect:Za,useLayoutEffect:eo,useMemo:ao,useReducer:Ea,useRef:Qa,useState:function(){return Ea(ka)},useDebugValue:ro,useDeferredValue:function(e,t){var n=xa();return null===ea?oo(n,e,t):so(n,ea.memoizedState,e,t)},useTransition:function(){var e=Ea(ka)[0],t=xa().memoizedState;return["boolean"===typeof e?e:ba(e),t]},useSyncExternalStore:Ta,useId:mo};function $o(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:R({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}Po.useCacheRefresh=go,Po.useMemoCache=Sa,Po.useHostTransitionStatus=fo,Po.useFormState=qa,Po.useActionState=qa,Po.useOptimistic=function(e,t){var n=xa();return null!==ea?Na(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])};var Ao={isMounted:function(e){return!!(e=e._reactInternals)&&D(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Au(),i=Rs(r);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Os(e,i,r))&&(Ou(t,e,r),zs(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Au(),i=Rs(r);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Os(e,i,r))&&(Ou(t,e,r),zs(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Au(),r=Rs(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=Os(e,r,n))&&(Ou(t,e,n),zs(t,e,n))}};function Ro(e,t,n,r,i,a,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!Yn(n,r)||!Yn(i,a))}function Oo(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ao.enqueueReplaceState(t,t.state,null)}function zo(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=R({},n)),e)void 0===n[i]&&(n[i]=e[i]);return n}var No="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function Mo(e){No(e)}function Lo(e){console.error(e)}function Do(e){No(e)}function Io(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout((function(){throw n}))}}function Fo(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout((function(){throw r}))}}function _o(e,t,n){return(n=Rs(n)).tag=3,n.payload={element:null},n.callback=function(){Io(e,t)},n}function Vo(e){return(e=Rs(e)).tag=3,e}function Bo(e,t,n,r){var i=n.type.getDerivedStateFromError;if("function"===typeof i){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Fo(t,n,r)}}var o=n.stateNode;null!==o&&"function"===typeof o.componentDidCatch&&(e.callback=function(){Fo(t,n,r),"function"!==typeof i&&(null===Su?Su=new Set([this]):Su.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Uo=Error(o(461)),Ho=!1;function Wo(e,t,n,r){t.child=null===e?Si(t,null,n,r):wi(t,e.child,n,r)}function qo(e,t,n,r,i){n=n.render;var a=t.ref;if("ref"in r){var o={};for(var s in r)"ref"!==s&&(o[s]=r[s])}else o=r;return js(t),r=da(e,t,n,o,a,i),s=ma(),null===e||Ho?(Gr&&s&&qr(t),t.flags|=1,Wo(e,t,r,i),t.child):(ga(e,t,i),hs(e,t,i))}function Ko(e,t,n,r,i){if(null===e){var a=n.type;return"function"!==typeof a||Ll(a)||void 0!==a.defaultProps||null!==n.compare?((e=Fl(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,Qo(e,t,a,r,i))}if(a=e.child,!ps(e,i)){var o=a.memoizedProps;if((n=null!==(n=n.compare)?n:Yn)(o,r)&&e.ref===t.ref)return hs(e,t,i)}return t.flags|=1,(e=Dl(a,r)).ref=t.ref,e.return=t,t.child=e}function Qo(e,t,n,r,i){if(null!==e){var a=e.memoizedProps;if(Yn(a,r)&&e.ref===t.ref){if(Ho=!1,t.pendingProps=r=a,!ps(e,i))return t.lanes=e.lanes,hs(e,t,i);0!==(131072&e.flags)&&(Ho=!0)}}return Jo(e,t,n,r,i)}function Yo(e,t,n){var r=t.pendingProps,i=r.children,a=0!==(2&t.stateNode._pendingVisibility),o=null!==e?e.memoizedState:null;if(Xo(e,t),"hidden"===r.mode||a){if(0!==(128&t.flags)){if(r=null!==o?o.baseLanes|n:n,null!==e){for(i=t.child=e.child,a=0;null!==i;)a=a|i.lanes|i.childLanes,i=i.sibling;t.childLanes=a&~r}else t.childLanes=0,t.child=null;return Go(e,t,r,n)}if(0===(536870912&n))return t.lanes=t.childLanes=536870912,Go(e,t,null!==o?o.baseLanes|n:n,n);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Gi(0,null!==o?o.cachePool:null),null!==o?Ci(t,o):Ei(),Ri(t)}else null!==o?(Gi(0,o.cachePool),Ci(t,o),Oi(),t.memoizedState=null):(null!==e&&Gi(0,null),Ei(),Oi());return Wo(e,t,i,n),t.child}function Go(e,t,n,r){var i=Yi();return i=null===i?null:{parent:Fi._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},null!==e&&Gi(0,null),Ei(),Ri(t),null!==e&&Ss(e,t,r,!0),null}function Xo(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=2097664);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(o(284));null!==e&&e.ref===n||(t.flags|=2097664)}}function Jo(e,t,n,r,i){return js(t),n=da(e,t,n,r,void 0,i),r=ma(),null===e||Ho?(Gr&&r&&qr(t),t.flags|=1,Wo(e,t,n,i),t.child):(ga(e,t,i),hs(e,t,i))}function Zo(e,t,n,r,i,a){return js(t),t.updateQueue=null,n=pa(t,r,n,i),ha(e),r=ma(),null===e||Ho?(Gr&&r&&qr(t),t.flags|=1,Wo(e,t,n,a),t.child):(ga(e,t,a),hs(e,t,a))}function es(e,t,n,r,i){if(js(t),null===t.stateNode){var a=Or,o=n.contextType;"object"===typeof o&&null!==o&&(a=Cs(o)),a=new n(r,a),t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,a.updater=Ao,t.stateNode=a,a._reactInternals=t,(a=t.stateNode).props=r,a.state=t.memoizedState,a.refs={},$s(t),o=n.contextType,a.context="object"===typeof o&&null!==o?Cs(o):Or,a.state=t.memoizedState,"function"===typeof(o=n.getDerivedStateFromProps)&&($o(t,n,o,r),a.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(o=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),o!==a.state&&Ao.enqueueReplaceState(a,a.state,null),Ds(t,r,a,i),Ls(),a.state=t.memoizedState),"function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){a=t.stateNode;var s=t.memoizedProps,l=zo(n,s);a.props=l;var u=a.context,c=n.contextType;o=Or,"object"===typeof c&&null!==c&&(o=Cs(c));var d=n.getDerivedStateFromProps;c="function"===typeof d||"function"===typeof a.getSnapshotBeforeUpdate,s=t.pendingProps!==s,c||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s||u!==o)&&Oo(t,a,r,o),Ps=!1;var h=t.memoizedState;a.state=h,Ds(t,r,a,i),Ls(),u=t.memoizedState,s||h!==u||Ps?("function"===typeof d&&($o(t,n,d,r),u=t.memoizedState),(l=Ps||Ro(t,n,l,r,h,u,o))?(c||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=o,r=l):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,As(e,t),c=zo(n,o=t.memoizedProps),a.props=c,d=t.pendingProps,h=a.context,u=n.contextType,l=Or,"object"===typeof u&&null!==u&&(l=Cs(u)),(u="function"===typeof(s=n.getDerivedStateFromProps)||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(o!==d||h!==l)&&Oo(t,a,r,l),Ps=!1,h=t.memoizedState,a.state=h,Ds(t,r,a,i),Ls();var p=t.memoizedState;o!==d||h!==p||Ps||null!==e&&null!==e.dependencies&&ks(e.dependencies)?("function"===typeof s&&($o(t,n,s,r),p=t.memoizedState),(c=Ps||Ro(t,n,c,r,h,p,l)||null!==e&&null!==e.dependencies&&ks(e.dependencies))?(u||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,p,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,p,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=l,r=c):("function"!==typeof a.componentDidUpdate||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Xo(e,t),r=0!==(128&t.flags),a||r?(a=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:a.render(),t.flags|=1,null!==e&&r?(t.child=wi(t,e.child,null,i),t.child=wi(t,null,n,i)):Wo(e,t,n,i),t.memoizedState=a.state,e=t.child):e=hs(e,t,i),e}function ts(e,t,n,r){return ii(),t.flags|=256,Wo(e,t,n,r),t.child}var ns={dehydrated:null,treeContext:null,retryLane:0};function rs(e){return{baseLanes:e,cachePool:Xi()}}function is(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=fu),e}function as(e,t,n){var r,i=t.pendingProps,a=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&Ni.current)),r&&(a=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(Gr){if(a?Ai(t):Oi(),Gr){var l,u=Yr;if(l=u){e:{for(l=u,u=Jr;8!==l.nodeType;){if(!u){u=null;break e}if(null===(l=sd(l.nextSibling))){u=null;break e}}u=l}null!==u?(t.memoizedState={dehydrated:u,treeContext:null!==Vr?{id:Br,overflow:Ur}:null,retryLane:536870912},(l=Ml(18,null,null,0)).stateNode=u,l.return=t,t.child=l,Qr=t,Yr=null,l=!0):l=!1}l||ei(t)}if(null!==(u=t.memoizedState)&&null!==(u=u.dehydrated))return"$!"===u.data?t.lanes=16:t.lanes=536870912,null;zi(t)}return u=i.children,i=i.fallback,a?(Oi(),u=ss({mode:"hidden",children:u},a=t.mode),i=_l(i,a,n,null),u.return=t,i.return=t,u.sibling=i,t.child=u,(a=t.child).memoizedState=rs(n),a.childLanes=is(e,r,n),t.memoizedState=ns,i):(Ai(t),os(t,u))}if(null!==(l=e.memoizedState)&&null!==(u=l.dehydrated)){if(s)256&t.flags?(Ai(t),t.flags&=-257,t=ls(e,t,n)):null!==t.memoizedState?(Oi(),t.child=e.child,t.flags|=128,t=null):(Oi(),a=i.fallback,u=t.mode,i=ss({mode:"visible",children:i.children},u),(a=_l(a,u,n,null)).flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,wi(t,e.child,null,n),(i=t.child).memoizedState=rs(n),i.childLanes=is(e,r,n),t.memoizedState=ns,t=a);else if(Ai(t),"$!"===u.data){if(r=u.nextSibling&&u.nextSibling.dataset)var c=r.dgst;r=c,(i=Error(o(419))).stack="",i.digest=r,ai({value:i,source:null,stack:null}),t=ls(e,t,n)}else if(Ho||Ss(e,t,n,!1),r=0!==(n&e.childLanes),Ho||r){if(null!==(r=tu)){if(0!==(42&(i=n&-n)))i=1;else switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=64;break;case 268435456:i=134217728;break;default:i=0}if(0!==(i=0!==(i&(r.suspendedLanes|n))?0:i)&&i!==l.retryLane)throw l.retryLane=i,$r(e,i),Ou(r,e,i),Uo}"$?"===u.data||Hu(),t=ls(e,t,n)}else"$?"===u.data?(t.flags|=128,t.child=e.child,t=sc.bind(null,e),u._reactRetry=t,t=null):(e=l.treeContext,Yr=sd(u.nextSibling),Qr=t,Gr=!0,Xr=null,Jr=!1,null!==e&&(Fr[_r++]=Br,Fr[_r++]=Ur,Fr[_r++]=Vr,Br=e.id,Ur=e.overflow,Vr=t),(t=os(t,i.children)).flags|=4096);return t}return a?(Oi(),a=i.fallback,u=t.mode,c=(l=e.child).sibling,(i=Dl(l,{mode:"hidden",children:i.children})).subtreeFlags=31457280&l.subtreeFlags,null!==c?a=Dl(c,a):(a=_l(a,u,n,null)).flags|=2,a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,null===(u=e.child.memoizedState)?u=rs(n):(null!==(l=u.cachePool)?(c=Fi._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=Xi(),u={baseLanes:u.baseLanes|n,cachePool:l}),a.memoizedState=u,a.childLanes=is(e,r,n),t.memoizedState=ns,i):(Ai(t),e=(n=e.child).sibling,(n=Dl(n,{mode:"visible",children:i.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function os(e,t){return(t=ss({mode:"visible",children:t},e.mode)).return=e,e.child=t}function ss(e,t){return Vl(e,t,0,null)}function ls(e,t,n){return wi(t,e.child,null,n),(e=os(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function us(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),bs(e.return,t,n)}function cs(e,t,n,r,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function ds(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Wo(e,t,r.children,n),0!==(2&(r=Ni.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&us(e,n,t);else if(19===e.tag)us(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(Q(Ni,r),i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===Mi(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),cs(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===Mi(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}cs(t,!0,n,null,a);break;case"together":cs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function hs(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),du|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(Ss(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Dl(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Dl(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function ps(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!ks(e))}function fs(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Ho=!0;else{if(!ps(e,n)&&0===(128&t.flags))return Ho=!1,function(e,t,n){switch(t.tag){case 3:Z(t,t.stateNode.containerInfo),ys(t,Fi,e.memoizedState.cache),ii();break;case 27:case 5:te(t);break;case 4:Z(t,t.stateNode.containerInfo);break;case 10:ys(t,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(Ai(t),t.flags|=128,null):0!==(n&t.child.childLanes)?as(e,t,n):(Ai(t),null!==(e=hs(e,t,n))?e.sibling:null);Ai(t);break;case 19:var i=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(Ss(e,t,n,!1),r=0!==(n&t.childLanes)),i){if(r)return ds(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(Ni,Ni.current),r)break;return null;case 22:case 23:return t.lanes=0,Yo(e,t,n);case 24:ys(t,Fi,e.memoizedState.cache)}return hs(e,t,n)}(e,t,n);Ho=0!==(131072&e.flags)}else Ho=!1,Gr&&0!==(1048576&t.flags)&&Wr(t,Ir,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,i=r._init;if(r=i(r._payload),t.type=r,"function"!==typeof r){if(void 0!==r&&null!==r){if((i=r.$$typeof)===v){t.tag=11,t=qo(null,t,r,e,n);break e}if(i===b){t.tag=14,t=Ko(null,t,r,e,n);break e}}throw t=T(r)||r,Error(o(306,t,""))}Ll(r)?(e=zo(r,e),t.tag=1,t=es(null,t,r,e,n)):(t.tag=0,t=Jo(null,t,r,e,n))}return t;case 0:return Jo(e,t,t.type,t.pendingProps,n);case 1:return es(e,t,r=t.type,i=zo(r,t.pendingProps),n);case 3:e:{if(Z(t,t.stateNode.containerInfo),null===e)throw Error(o(387));var a=t.pendingProps;r=(i=t.memoizedState).element,As(e,t),Ds(t,a,null,n);var s=t.memoizedState;if(a=s.cache,ys(t,Fi,a),a!==i.cache&&ws(t,[Fi],n,!0),Ls(),a=s.element,i.isDehydrated){if(i={element:a,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=ts(e,t,a,n);break e}if(a!==r){ai(r=Nr(Error(o(424)),t)),t=ts(e,t,a,n);break e}for(Yr=sd(t.stateNode.containerInfo.firstChild),Qr=t,Gr=!0,Xr=null,Jr=!0,n=Si(t,null,a,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ii(),a===r){t=hs(e,t,n);break e}Wo(e,t,a,n)}t=t.child}return t;case 26:return Xo(e,t),null===e?(n=gd(t.type,null,t.pendingProps,null))?t.memoizedState=n:Gr||(n=t.type,e=t.pendingProps,(r=Yc(X.current).createElement(n))[Ie]=t,r[Fe]=e,qc(r,n,e),Xe(r),t.stateNode=r):t.memoizedState=gd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return te(t),null===e&&Gr&&(r=t.stateNode=ud(t.type,t.pendingProps,X.current),Qr=t,Jr=!0,Yr=sd(r.firstChild)),r=t.pendingProps.children,null!==e||Gr?Wo(e,t,r,n):t.child=wi(t,null,r,n),Xo(e,t),t.child;case 5:return null===e&&Gr&&((i=r=Yr)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[We])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(a=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(a!==i.rel||e.getAttribute("href")!==(null==i.href?null:i.href)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin)||e.getAttribute("title")!==(null==i.title?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((a=e.getAttribute("src"))!==(null==i.src?null:i.src)||e.getAttribute("type")!==(null==i.type?null:i.type)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var a=null==i.name?null:""+i.name;if("hidden"===i.type&&e.getAttribute("name")===a)return e}if(null===(e=sd(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,Jr))?(t.stateNode=r,Qr=t,Yr=sd(r.firstChild),Jr=!1,i=!0):i=!1),i||ei(t)),te(t),i=t.type,a=t.pendingProps,s=null!==e?e.memoizedProps:null,r=a.children,Jc(i,a)?r=null:null!==s&&Jc(i,s)&&(t.flags|=32),null!==t.memoizedState&&(i=da(e,t,fa,null,null,n),Ld._currentValue=i),Xo(e,t),Wo(e,t,r,n),t.child;case 6:return null===e&&Gr&&((e=n=Yr)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=sd(e.nextSibling)))return null}return e}(n,t.pendingProps,Jr))?(t.stateNode=n,Qr=t,Yr=null,e=!0):e=!1),e||ei(t)),null;case 13:return as(e,t,n);case 4:return Z(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wi(t,null,r,n):Wo(e,t,r,n),t.child;case 11:return qo(e,t,t.type,t.pendingProps,n);case 7:return Wo(e,t,t.pendingProps,n),t.child;case 8:case 12:return Wo(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ys(t,t.type,r.value),Wo(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,js(t),r=r(i=Cs(i)),t.flags|=1,Wo(e,t,r,n),t.child;case 14:return Ko(e,t,t.type,t.pendingProps,n);case 15:return Qo(e,t,t.type,t.pendingProps,n);case 19:return ds(e,t,n);case 22:return Yo(e,t,n);case 24:return js(t),r=Cs(Fi),null===e?(null===(i=Yi())&&(i=tu,a=_i(),i.pooledCache=a,a.refCount++,null!==a&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},$s(t),ys(t,Fi,i)):(0!==(e.lanes&n)&&(As(e,t),Ds(t,null,null,n),Ls()),i=e.memoizedState,a=t.memoizedState,i.parent!==r?(i={parent:r,cache:r},t.memoizedState=i,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=i),ys(t,Fi,r)):(r=a.cache,ys(t,Fi,r),r!==i.cache&&ws(t,[Fi],n,!0))),Wo(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}var ms=q(null),gs=null,vs=null;function ys(e,t,n){Q(ms,t._currentValue),t._currentValue=n}function xs(e){e._currentValue=ms.current,K(ms)}function bs(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ws(e,t,n,r){var i=e.child;for(null!==i&&(i.return=e);null!==i;){var a=i.dependencies;if(null!==a){var s=i.child;a=a.firstContext;e:for(;null!==a;){var l=a;a=i;for(var u=0;u<t.length;u++)if(l.context===t[u]){a.lanes|=n,null!==(l=a.alternate)&&(l.lanes|=n),bs(a.return,n,e),r||(s=null);break e}a=l.next}}else if(18===i.tag){if(null===(s=i.return))throw Error(o(341));s.lanes|=n,null!==(a=s.alternate)&&(a.lanes|=n),bs(s,n,e),s=null}else s=i.child;if(null!==s)s.return=i;else for(s=i;null!==s;){if(s===e){s=null;break}if(null!==(i=s.sibling)){i.return=s.return,s=i;break}s=s.return}i=s}}function Ss(e,t,n,r){e=null;for(var i=t,a=!1;null!==i;){if(!a)if(0!==(524288&i.flags))a=!0;else if(0!==(262144&i.flags))break;if(10===i.tag){var s=i.alternate;if(null===s)throw Error(o(387));if(null!==(s=s.memoizedProps)){var l=i.type;Qn(i.pendingProps.value,s.value)||(null!==e?e.push(l):e=[l])}}else if(i===J.current){if(null===(s=i.alternate))throw Error(o(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(null!==e?e.push(Ld):e=[Ld])}i=i.return}null!==e&&ws(t,e,n,r),t.flags|=262144}function ks(e){for(e=e.firstContext;null!==e;){if(!Qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function js(e){gs=e,vs=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Cs(e){return Ts(gs,e)}function Es(e,t){return null===gs&&js(e),Ts(e,t)}function Ts(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===vs){if(null===e)throw Error(o(308));vs=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else vs=vs.next=t;return n}var Ps=!1;function $s(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function As(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Rs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Os(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&eu)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Rr(e),Ar(e,null,n),t}return Tr(e,r,t,n),Rr(e)}function zs(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194176&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Ne(e,n)}}function Ns(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===a?i=a=o:a=a.next=o,n=n.next}while(null!==n);null===a?i=a=t:a=a.next=t}else i=a=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ms=!1;function Ls(){if(Ms){if(null!==Wi)throw Wi}}function Ds(e,t,n,r){Ms=!1;var i=e.updateQueue;Ps=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,u=l.next;l.next=null,null===o?a=u:o.next=u,o=l;var c=e.alternate;null!==c&&((s=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===s?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(null!==a){var d=i.baseState;for(o=0,c=u=l=null,s=a;;){var h=-536870913&s.lane,p=h!==s.lane;if(p?(ru&h)===h:(r&h)===h){0!==h&&h===Hi&&(Ms=!0),null!==c&&(c=c.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var f=e,m=s;h=t;var g=n;switch(m.tag){case 1:if("function"===typeof(f=m.payload)){d=f.call(g,d,h);break e}d=f;break e;case 3:f.flags=-65537&f.flags|128;case 0:if(null===(h="function"===typeof(f=m.payload)?f.call(g,d,h):f)||void 0===h)break e;d=R({},d,h);break e;case 2:Ps=!0}}null!==(h=s.callback)&&(e.flags|=64,p&&(e.flags|=8192),null===(p=i.callbacks)?i.callbacks=[h]:p.push(h))}else p={lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===c?(u=c=p,l=d):c=c.next=p,o|=h;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(p=s).next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}null===c&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null===a&&(i.shared.lanes=0),du|=o,e.lanes=o,e.memoizedState=d}}function Is(e,t){if("function"!==typeof e)throw Error(o(191,e));e.call(t)}function Fs(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)Is(n[e],t)}function _s(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(s){rc(t,t.return,s)}}function Vs(e,t,n){try{var r=t.updateQueue,i=null!==r?r.lastEffect:null;if(null!==i){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(void 0!==s){o.destroy=void 0,i=t;var l=n;try{s()}catch(u){rc(i,l,u)}}}r=r.next}while(r!==a)}}catch(u){rc(t,t.return,u)}}function Bs(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{Fs(t,n)}catch(r){rc(e,e.return,r)}}}function Us(e,t,n){n.props=zo(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){rc(e,t,r)}}function Hs(e,t){try{var n=e.ref;if(null!==n){var r=e.stateNode;switch(e.tag){case 26:case 27:case 5:var i=r;break;default:i=r}"function"===typeof n?e.refCleanup=n(i):n.current=i}}catch(a){rc(e,t,a)}}function Ws(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(i){rc(e,t,i)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(a){rc(e,t,a)}else n.current=null}function qs(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(i){rc(e,e.return,i)}}function Ks(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,a=null,s=null,l=null,u=null,c=null,d=null;for(f in n){var h=n[f];if(n.hasOwnProperty(f)&&null!=h)switch(f){case"checked":case"value":break;case"defaultValue":u=h;default:r.hasOwnProperty(f)||Hc(e,t,f,null,r,h)}}for(var p in r){var f=r[p];if(h=n[p],r.hasOwnProperty(p)&&(null!=f||null!=h))switch(p){case"type":a=f;break;case"name":i=f;break;case"checked":c=f;break;case"defaultChecked":d=f;break;case"value":s=f;break;case"defaultValue":l=f;break;case"children":case"dangerouslySetInnerHTML":if(null!=f)throw Error(o(137,t));break;default:f!==h&&Hc(e,t,p,f,r,h)}}return void gt(e,s,l,u,c,d,a,i);case"select":for(a in f=s=l=p=null,n)if(u=n[a],n.hasOwnProperty(a)&&null!=u)switch(a){case"value":break;case"multiple":f=u;default:r.hasOwnProperty(a)||Hc(e,t,a,null,r,u)}for(i in r)if(a=r[i],u=n[i],r.hasOwnProperty(i)&&(null!=a||null!=u))switch(i){case"value":p=a;break;case"defaultValue":l=a;break;case"multiple":s=a;default:a!==u&&Hc(e,t,i,a,r,u)}return t=l,n=s,r=f,void(null!=p?xt(e,!!n,p,!1):!!r!==!!n&&(null!=t?xt(e,!!n,t,!0):xt(e,!!n,n?[]:"",!1)));case"textarea":for(l in f=p=null,n)if(i=n[l],n.hasOwnProperty(l)&&null!=i&&!r.hasOwnProperty(l))switch(l){case"value":case"children":break;default:Hc(e,t,l,null,r,i)}for(s in r)if(i=r[s],a=n[s],r.hasOwnProperty(s)&&(null!=i||null!=a))switch(s){case"value":p=i;break;case"defaultValue":f=i;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=i)throw Error(o(91));break;default:i!==a&&Hc(e,t,s,i,r,a)}return void bt(e,p,f);case"option":for(var m in n)if(p=n[m],n.hasOwnProperty(m)&&null!=p&&!r.hasOwnProperty(m))if("selected"===m)e.selected=!1;else Hc(e,t,m,null,r,p);for(u in r)if(p=r[u],f=n[u],r.hasOwnProperty(u)&&p!==f&&(null!=p||null!=f))if("selected"===u)e.selected=p&&"function"!==typeof p&&"symbol"!==typeof p;else Hc(e,t,u,p,r,f);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)p=n[g],n.hasOwnProperty(g)&&null!=p&&!r.hasOwnProperty(g)&&Hc(e,t,g,null,r,p);for(c in r)if(p=r[c],f=n[c],r.hasOwnProperty(c)&&p!==f&&(null!=p||null!=f))switch(c){case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(o(137,t));break;default:Hc(e,t,c,p,r,f)}return;default:if(Et(t)){for(var v in n)p=n[v],n.hasOwnProperty(v)&&void 0!==p&&!r.hasOwnProperty(v)&&Wc(e,t,v,void 0,r,p);for(d in r)p=r[d],f=n[d],!r.hasOwnProperty(d)||p===f||void 0===p&&void 0===f||Wc(e,t,d,p,r,f);return}}for(var y in n)p=n[y],n.hasOwnProperty(y)&&null!=p&&!r.hasOwnProperty(y)&&Hc(e,t,y,null,r,p);for(h in r)p=r[h],f=n[h],!r.hasOwnProperty(h)||p===f||null==p&&null==f||Hc(e,t,h,p,r,f)}(r,e.type,n,t),r[Fe]=t}catch(i){rc(e,e.return,i)}}function Qs(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag||4===e.tag}function Ys(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||Qs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&27!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function Gs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Uc));else if(4!==r&&27!==r&&null!==(e=e.child))for(Gs(e,t,n),e=e.sibling;null!==e;)Gs(e,t,n),e=e.sibling}function Xs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&27!==r&&null!==(e=e.child))for(Xs(e,t,n),e=e.sibling;null!==e;)Xs(e,t,n),e=e.sibling}var Js=!1,Zs=!1,el=!1,tl="function"===typeof WeakSet?WeakSet:Set,nl=null,rl=!1;function il(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:vl(e,n),4&r&&_s(5,n);break;case 1:if(vl(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(s){rc(n,n.return,s)}else{var i=zo(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){rc(n,n.return,l)}}64&r&&Bs(n),512&r&&Hs(n,n.return);break;case 3:if(vl(e,n),64&r&&null!==(r=n.updateQueue)){if(e=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:e=n.child.stateNode}try{Fs(r,e)}catch(s){rc(n,n.return,s)}}break;case 26:vl(e,n),512&r&&Hs(n,n.return);break;case 27:case 5:vl(e,n),null===t&&4&r&&qs(n),512&r&&Hs(n,n.return);break;case 12:default:vl(e,n);break;case 13:vl(e,n),4&r&&cl(e,n);break;case 22:if(!(i=null!==n.memoizedState||Js)){t=null!==t&&null!==t.memoizedState||Zs;var a=Js,o=Zs;Js=i,(Zs=t)&&!o?xl(e,n,0!==(8772&n.subtreeFlags)):vl(e,n),Js=a,Zs=o}512&r&&("manual"===n.memoizedProps.mode?Hs(n,n.return):Ws(n,n.return))}}function al(e){var t=e.alternate;null!==t&&(e.alternate=null,al(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&qe(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ol=null,sl=!1;function ll(e,t,n){for(n=n.child;null!==n;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(ye&&"function"===typeof ye.onCommitFiberUnmount)try{ye.onCommitFiberUnmount(ve,n)}catch(o){}switch(n.tag){case 26:Zs||Ws(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:Zs||Ws(n,t);var r=ol,i=sl;for(ol=n.stateNode,ll(e,t,n),t=(n=n.stateNode).attributes;t.length;)n.removeAttributeNode(t[0]);qe(n),ol=r,sl=i;break;case 5:Zs||Ws(n,t);case 6:i=ol;var a=sl;if(ol=null,ll(e,t,n),sl=a,null!==(ol=i))if(sl)try{e=ol,r=n.stateNode,8===e.nodeType?e.parentNode.removeChild(r):e.removeChild(r)}catch(s){rc(n,t,s)}else try{ol.removeChild(n.stateNode)}catch(s){rc(n,t,s)}break;case 18:null!==ol&&(sl?(t=ol,n=n.stateNode,8===t.nodeType?ad(t.parentNode,n):1===t.nodeType&&ad(t,n),mh(t)):ad(ol,n.stateNode));break;case 4:r=ol,i=sl,ol=n.stateNode.containerInfo,sl=!0,ll(e,t,n),ol=r,sl=i;break;case 0:case 11:case 14:case 15:Zs||Vs(2,n,t),Zs||Vs(4,n,t),ll(e,t,n);break;case 1:Zs||(Ws(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&Us(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:Zs||Ws(n,t),Zs=(r=Zs)||null!==n.memoizedState,ll(e,t,n),Zs=r;break;default:ll(e,t,n)}}function cl(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{mh(e)}catch(n){rc(t,t.return,n)}}function dl(e,t){var n=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new tl),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new tl),t;default:throw Error(o(435,e.tag))}}(e);t.forEach((function(t){var r=lc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}function hl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r],a=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 27:case 5:ol=l.stateNode,sl=!1;break e;case 3:case 4:ol=l.stateNode.containerInfo,sl=!0;break e}l=l.return}if(null===ol)throw Error(o(160));ul(a,s,i),ol=null,sl=!1,null!==(a=i.alternate)&&(a.return=null),i.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)fl(t,e),t=t.sibling}var pl=null;function fl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),ml(e),4&r&&(Vs(3,e,e.return),_s(3,e),Vs(5,e,e.return));break;case 1:hl(t,e),ml(e),512&r&&(Zs||null===n||Ws(n,n.return)),64&r&&Js&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var i=pl;if(hl(t,e),ml(e),512&r&&(Zs||null===n||Ws(n,n.return)),4&r){var a=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(r){case"title":(!(a=i.getElementsByTagName("title")[0])||a[We]||a[Ie]||"http://www.w3.org/2000/svg"===a.namespaceURI||a.hasAttribute("itemprop"))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector("head > title"))),qc(a,r,n),a[Ie]=e,Xe(a),r=a;break e;case"link":var s=Td("link","href",i).get(r+(n.href||""));if(s)for(var l=0;l<s.length;l++)if((a=s[l]).getAttribute("href")===(null==n.href?null:n.href)&&a.getAttribute("rel")===(null==n.rel?null:n.rel)&&a.getAttribute("title")===(null==n.title?null:n.title)&&a.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){s.splice(l,1);break t}qc(a=i.createElement(r),r,n),i.head.appendChild(a);break;case"meta":if(s=Td("meta","content",i).get(r+(n.content||"")))for(l=0;l<s.length;l++)if((a=s[l]).getAttribute("content")===(null==n.content?null:""+n.content)&&a.getAttribute("name")===(null==n.name?null:n.name)&&a.getAttribute("property")===(null==n.property?null:n.property)&&a.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&a.getAttribute("charset")===(null==n.charSet?null:n.charSet)){s.splice(l,1);break t}qc(a=i.createElement(r),r,n),i.head.appendChild(a);break;default:throw Error(o(468,r))}a[Ie]=e,Xe(a),r=a}e.stateNode=r}else Pd(i,e.type,e.stateNode);else e.stateNode=Sd(i,r,e.memoizedProps);else a!==r?(null===a?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):a.count--,null===r?Pd(i,e.type,e.stateNode):Sd(i,r,e.memoizedProps)):null===r&&null!==e.stateNode&&Ks(e,e.memoizedProps,n.memoizedProps)}break;case 27:if(4&r&&null===e.alternate){i=e.stateNode,a=e.memoizedProps;try{for(var u=i.firstChild;u;){var c=u.nextSibling,d=u.nodeName;u[We]||"HEAD"===d||"BODY"===d||"SCRIPT"===d||"STYLE"===d||"LINK"===d&&"stylesheet"===u.rel.toLowerCase()||i.removeChild(u),u=c}for(var h=e.type,p=i.attributes;p.length;)i.removeAttributeNode(p[0]);qc(i,h,a),i[Ie]=e,i[Fe]=a}catch(m){rc(e,e.return,m)}}case 5:if(hl(t,e),ml(e),512&r&&(Zs||null===n||Ws(n,n.return)),32&e.flags){i=e.stateNode;try{St(i,"")}catch(m){rc(e,e.return,m)}}4&r&&null!=e.stateNode&&Ks(e,i=e.memoizedProps,null!==n?n.memoizedProps:i),1024&r&&(el=!0);break;case 6:if(hl(t,e),ml(e),4&r){if(null===e.stateNode)throw Error(o(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(m){rc(e,e.return,m)}}break;case 3:if(Ed=null,i=pl,pl=hd(t.containerInfo),hl(t,e),pl=i,ml(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{mh(t.containerInfo)}catch(m){rc(e,e.return,m)}el&&(el=!1,gl(e));break;case 4:r=pl,pl=hd(e.stateNode.containerInfo),hl(t,e),ml(e),pl=r;break;case 12:hl(t,e),ml(e);break;case 13:hl(t,e),ml(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(xu=le()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,dl(e,r)));break;case 22:if(512&r&&(Zs||null===n||Ws(n,n.return)),u=null!==e.memoizedState,c=null!==n&&null!==n.memoizedState,Js=(d=Js)||u,Zs=(h=Zs)||c,hl(t,e),Zs=h,Js=d,ml(e),(t=e.stateNode)._current=e,t._visibility&=-3,t._visibility|=2&t._pendingVisibility,8192&r&&(t._visibility=u?-2&t._visibility:1|t._visibility,u&&(t=Js||Zs,null===n||c||t||yl(e)),null===e.memoizedProps||"manual"!==e.memoizedProps.mode))e:for(n=null,t=e;;){if(5===t.tag||26===t.tag||27===t.tag){if(null===n){c=n=t;try{if(i=c.stateNode,u)"function"===typeof(a=i.style).setProperty?a.setProperty("display","none","important"):a.display="none";else{s=c.stateNode;var f=void 0!==(l=c.memoizedProps.style)&&null!==l&&l.hasOwnProperty("display")?l.display:null;s.style.display=null==f||"boolean"===typeof f?"":(""+f).trim()}}catch(m){rc(c,c.return,m)}}}else if(6===t.tag){if(null===n){c=t;try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(m){rc(c,c.return,m)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,dl(e,n))));break;case 19:hl(t,e),ml(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,dl(e,r)));break;case 21:break;default:hl(t,e),ml(e)}}function ml(e){var t=e.flags;if(2&t){try{if(27!==e.tag){e:{for(var n=e.return;null!==n;){if(Qs(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 27:var i=r.stateNode;Xs(e,Ys(e),i);break;case 5:var a=r.stateNode;32&r.flags&&(St(a,""),r.flags&=-33),Xs(e,Ys(e),a);break;case 3:case 4:var s=r.stateNode.containerInfo;Gs(e,Ys(e),s);break;default:throw Error(o(161))}}}catch(l){rc(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function gl(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;gl(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function vl(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)il(e,t.alternate,t),t=t.sibling}function yl(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Vs(4,t,t.return),yl(t);break;case 1:Ws(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&Us(t,t.return,n),yl(t);break;case 26:case 27:case 5:Ws(t,t.return),yl(t);break;case 22:Ws(t,t.return),null===t.memoizedState&&yl(t);break;default:yl(t)}e=e.sibling}}function xl(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:xl(i,a,n),_s(4,a);break;case 1:if(xl(i,a,n),"function"===typeof(i=(r=a).stateNode).componentDidMount)try{i.componentDidMount()}catch(u){rc(r,r.return,u)}if(null!==(i=(r=a).updateQueue)){var s=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(null!==l)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)Is(l[i],s)}catch(u){rc(r,r.return,u)}}n&&64&o&&Bs(a),Hs(a,a.return);break;case 26:case 27:case 5:xl(i,a,n),n&&null===r&&4&o&&qs(a),Hs(a,a.return);break;case 12:default:xl(i,a,n);break;case 13:xl(i,a,n),n&&4&o&&cl(i,a);break;case 22:null===a.memoizedState&&xl(i,a,n),Hs(a,a.return)}t=t.sibling}}function bl(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Vi(n))}function wl(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Vi(e))}function Sl(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)kl(e,t,n,r),t=t.sibling}function kl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Sl(e,t,n,r),2048&i&&_s(9,t);break;case 3:Sl(e,t,n,r),2048&i&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Vi(e)));break;case 12:if(2048&i){Sl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;"function"===typeof s&&s(o,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(l){rc(t,t.return,l)}}else Sl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,null!==t.memoizedState?4&a._visibility?Sl(e,t,n,r):Cl(e,t):4&a._visibility?Sl(e,t,n,r):(a._visibility|=4,jl(e,t,n,r,0!==(10256&t.subtreeFlags))),2048&i&&bl(t.alternate,t);break;case 24:Sl(e,t,n,r),2048&i&&wl(t.alternate,t);break;default:Sl(e,t,n,r)}}function jl(e,t,n,r,i){for(i=i&&0!==(10256&t.subtreeFlags),t=t.child;null!==t;){var a=e,o=t,s=n,l=r,u=o.flags;switch(o.tag){case 0:case 11:case 15:jl(a,o,s,l,i),_s(8,o);break;case 23:break;case 22:var c=o.stateNode;null!==o.memoizedState?4&c._visibility?jl(a,o,s,l,i):Cl(a,o):(c._visibility|=4,jl(a,o,s,l,i)),i&&2048&u&&bl(o.alternate,o);break;case 24:jl(a,o,s,l,i),i&&2048&u&&wl(o.alternate,o);break;default:jl(a,o,s,l,i)}t=t.sibling}}function Cl(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Cl(n,r),2048&i&&bl(r.alternate,r);break;case 24:Cl(n,r),2048&i&&wl(r.alternate,r);break;default:Cl(n,r)}t=t.sibling}}var El=8192;function Tl(e){if(e.subtreeFlags&El)for(e=e.child;null!==e;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 26:Tl(e),e.flags&El&&null!==e.memoizedState&&function(e,t,n){if(null===Ad)throw Error(o(475));var r=Ad;if("stylesheet"===t.type&&("string"!==typeof n.media||!1!==matchMedia(n.media).matches)&&0===(4&t.state.loading)){if(null===t.instance){var i=vd(n.href),a=e.querySelector(yd(i));if(a)return null!==(e=a._p)&&"object"===typeof e&&"function"===typeof e.then&&(r.count++,r=Od.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=a,void Xe(a);a=e.ownerDocument||e,n=xd(n),(i=cd.get(i))&&jd(n,i),Xe(a=a.createElement("link"));var s=a;s._p=new Promise((function(e,t){s.onload=e,s.onerror=t})),qc(a,"link",n),t.instance=a}null===r.stylesheets&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&0===(3&t.state.loading)&&(r.count++,t=Od.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}(pl,e.memoizedState,e.memoizedProps);break;case 5:default:Tl(e);break;case 3:case 4:var t=pl;pl=hd(e.stateNode.containerInfo),Tl(e),pl=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=El,El=16777216,Tl(e),El=t):Tl(e))}}function $l(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function Al(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];nl=r,zl(r,e)}$l(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Rl(e),e=e.sibling}function Rl(e){switch(e.tag){case 0:case 11:case 15:Al(e),2048&e.flags&&Vs(9,e,e.return);break;case 3:case 12:default:Al(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&4&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-5,Ol(e)):Al(e)}}function Ol(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];nl=r,zl(r,e)}$l(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:Vs(8,t,t.return),Ol(t);break;case 22:4&(n=t.stateNode)._visibility&&(n._visibility&=-5,Ol(t));break;default:Ol(t)}e=e.sibling}}function zl(e,t){for(;null!==nl;){var n=nl;switch(n.tag){case 0:case 11:case 15:Vs(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Vi(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,nl=r;else e:for(n=e;null!==nl;){var i=(r=nl).sibling,a=r.return;if(al(r),r===n){nl=null;break e}if(null!==i){i.return=a,nl=i;break e}nl=a}}}function Nl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ml(e,t,n,r){return new Nl(e,t,n,r)}function Ll(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Dl(e,t){var n=e.alternate;return null===n?((n=Ml(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=31457280&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Il(e,t){e.flags&=31457282;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Fl(e,t,n,r,i,a){var s=0;if(r=e,"function"===typeof e)Ll(e)&&(s=1);else if("string"===typeof e)s=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,Y.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case d:return _l(n.children,i,a,t);case h:s=8,i|=24;break;case p:return(e=Ml(12,n,t,2|i)).elementType=p,e.lanes=a,e;case y:return(e=Ml(13,n,t,i)).elementType=y,e.lanes=a,e;case x:return(e=Ml(19,n,t,i)).elementType=x,e.lanes=a,e;case S:return Vl(n,i,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case f:case g:s=10;break e;case m:s=9;break e;case v:s=11;break e;case b:s=14;break e;case w:s=16,r=null;break e}s=29,n=Error(o(130,null===e?"null":typeof e,"")),r=null}return(t=Ml(s,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function _l(e,t,n,r){return(e=Ml(7,e,r,t)).lanes=n,e}function Vl(e,t,n,r){(e=Ml(22,e,r,t)).elementType=S,e.lanes=n;var i={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var e=i._current;if(null===e)throw Error(o(456));if(0===(2&i._pendingVisibility)){var t=$r(e,2);null!==t&&(i._pendingVisibility|=2,Ou(t,e,2))}},attach:function(){var e=i._current;if(null===e)throw Error(o(456));if(0!==(2&i._pendingVisibility)){var t=$r(e,2);null!==t&&(i._pendingVisibility&=-3,Ou(t,e,2))}}};return e.stateNode=i,e}function Bl(e,t,n){return(e=Ml(6,e,null,t)).lanes=n,e}function Ul(e,t,n){return(t=Ml(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Hl(e){e.flags|=4}function Wl(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!$d(t)){if(null!==(t=Pi.current)&&((4194176&ru)===ru?null!==$i:(62914560&ru)!==ru&&0===(536870912&ru)||t!==$i))throw hi=li,si;e.flags|=8192}}function ql(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Ae():536870912,e.lanes|=t,mu|=t)}function Kl(e,t){if(!Gr)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ql(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=31457280&i.subtreeFlags,r|=31457280&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Yl(e,t,n){var r=t.pendingProps;switch(Kr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return Ql(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),xs(Fi),ee(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(ri(t)?Hl(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==Xr&&(Nu(Xr),Xr=null))),Ql(t),null;case 26:return n=t.memoizedState,null===e?(Hl(t),null!==n?(Ql(t),Wl(t,n)):(Ql(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Hl(t),Ql(t),Wl(t,n)):(Ql(t),t.flags&=-16777217):(e.memoizedProps!==r&&Hl(t),Ql(t),t.flags&=-16777217),null;case 27:ne(t),n=X.current;var i=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Hl(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Ql(t),null}e=Y.current,ri(t)?ti(t):(e=ud(i,r,n),t.stateNode=e,Hl(t))}return Ql(t),null;case 5:if(ne(t),n=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Hl(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Ql(t),null}if(e=Y.current,ri(t))ti(t);else{switch(i=Yc(X.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":(e=i.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"===typeof r.is?i.createElement("select",{is:r.is}):i.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e="string"===typeof r.is?i.createElement(n,{is:r.is}):i.createElement(n)}}e[Ie]=t,e[Fe]=r;e:for(i=t.child;null!==i;){if(5===i.tag||6===i.tag)e.appendChild(i.stateNode);else if(4!==i.tag&&27!==i.tag&&null!==i.child){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;null===i.sibling;){if(null===i.return||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(qc(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Hl(t)}}return Ql(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&Hl(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(e=X.current,ri(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(i=Qr))switch(i.tag){case 27:case 5:r=i.memoizedProps}e[Ie]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||Bc(e.nodeValue,n)))||ei(t)}else(e=Yc(e).createTextNode(r))[Ie]=t,t.stateNode=e}return Ql(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(i=ri(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(o(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(o(317));i[Ie]=t}else ii(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ql(t),i=!1}else null!==Xr&&(Nu(Xr),Xr=null),i=!0;if(!i)return 256&t.flags?(zi(t),t):(zi(t),null)}if(zi(t),0!==(128&t.flags))return t.lanes=n,t;if(n=null!==r,e=null!==e&&null!==e.memoizedState,n){i=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(i=r.alternate.memoizedState.cachePool.pool);var a=null;null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),ql(t,t.updateQueue),Ql(t),null;case 4:return ee(),null===e&&Oc(t.stateNode.containerInfo),Ql(t),null;case 10:return xs(t.type),Ql(t),null;case 19:if(K(Ni),null===(i=t.memoizedState))return Ql(t),null;if(r=0!==(128&t.flags),null===(a=i.rendering))if(r)Kl(i,!1);else{if(0!==cu||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(a=Mi(e))){for(t.flags|=128,Kl(i,!1),e=a.updateQueue,t.updateQueue=e,ql(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Il(n,e),n=n.sibling;return Q(Ni,1&Ni.current|2),t.child}e=e.sibling}null!==i.tail&&le()>bu&&(t.flags|=128,r=!0,Kl(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=Mi(a))){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,ql(t,e),Kl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!a.alternate&&!Gr)return Ql(t),null}else 2*le()-i.renderingStartTime>bu&&536870912!==n&&(t.flags|=128,r=!0,Kl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(null!==(e=i.last)?e.sibling=a:t.child=a,i.last=a)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=le(),t.sibling=null,e=Ni.current,Q(Ni,r?1&e|2:1&e),t):(Ql(t),null);case 22:case 23:return zi(t),Ti(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(Ql(t),6&t.subtreeFlags&&(t.flags|=8192)):Ql(t),null!==(n=t.updateQueue)&&ql(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&K(Qi),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xs(Fi),Ql(t),null;case 25:return null}throw Error(o(156,t.tag))}function Gl(e,t){switch(Kr(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return xs(Fi),ee(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return ne(t),null;case 13:if(zi(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));ii()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return K(Ni),null;case 4:return ee(),null;case 10:return xs(t.type),null;case 22:case 23:return zi(t),Ti(),null!==e&&K(Qi),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return xs(Fi),null;default:return null}}function Xl(e,t){switch(Kr(t),t.tag){case 3:xs(Fi),ee();break;case 26:case 27:case 5:ne(t);break;case 4:ee();break;case 13:zi(t);break;case 19:K(Ni);break;case 10:xs(t.type);break;case 22:case 23:zi(t),Ti(),null!==e&&K(Qi);break;case 24:xs(Fi)}}var Jl={getCacheForType:function(e){var t=Cs(Fi),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n}},Zl="function"===typeof WeakMap?WeakMap:Map,eu=0,tu=null,nu=null,ru=0,iu=0,au=null,ou=!1,su=!1,lu=!1,uu=0,cu=0,du=0,hu=0,pu=0,fu=0,mu=0,gu=null,vu=null,yu=!1,xu=0,bu=1/0,wu=null,Su=null,ku=!1,ju=null,Cu=0,Eu=0,Tu=null,Pu=0,$u=null;function Au(){if(0!==(2&eu)&&0!==ru)return ru&-ru;if(null!==A.T){return 0!==Hi?Hi:wc()}return Le()}function Ru(){0===fu&&(fu=0===(536870912&ru)||Gr?$e():536870912);var e=Pi.current;return null!==e&&(e.flags|=32),fu}function Ou(e,t,n){(e===tu&&2===iu||null!==e.cancelPendingCommit)&&(_u(e,0),Du(e,ru,fu,!1)),Oe(e,n),0!==(2&eu)&&e===tu||(e===tu&&(0===(2&eu)&&(hu|=n),4===cu&&Du(e,ru,fu,!1)),mc(e))}function zu(e,t,n){if(0!==(6&eu))throw Error(o(327));for(var r=!n&&0===(60&t)&&0===(t&e.expiredLanes)||Te(e,t),i=r?function(e,t){var n=eu;eu|=2;var r=Bu(),i=Uu();tu!==e||ru!==t?(wu=null,bu=le()+500,_u(e,t)):su=Te(e,t);e:for(;;)try{if(0!==iu&&null!==nu){t=nu;var a=au;t:switch(iu){case 1:iu=0,au=null,Gu(e,t,a,1);break;case 2:if(ui(a)){iu=0,au=null,Yu(t);break}t=function(){2===iu&&tu===e&&(iu=7),mc(e)},a.then(t,t);break e;case 3:iu=7;break e;case 4:iu=5;break e;case 7:ui(a)?(iu=0,au=null,Yu(t)):(iu=0,au=null,Gu(e,t,a,7));break;case 5:var s=null;switch(nu.tag){case 26:s=nu.memoizedState;case 5:case 27:var l=nu;if(!s||$d(s)){iu=0,au=null;var u=l.sibling;if(null!==u)nu=u;else{var c=l.return;null!==c?(nu=c,Xu(c)):nu=null}break t}}iu=0,au=null,Gu(e,t,a,5);break;case 6:iu=0,au=null,Gu(e,t,a,6);break;case 8:Fu(),cu=6;break e;default:throw Error(o(462))}}Ku();break}catch(d){Vu(e,d)}return vs=gs=null,A.H=r,A.A=i,eu=n,null!==nu?0:(tu=null,ru=0,Er(),cu)}(e,t):Wu(e,t,!0),a=r;;){if(0===i){su&&!r&&Du(e,t,0,!1);break}if(6===i)Du(e,t,0,!ou);else{if(n=e.current.alternate,a&&!Lu(n)){i=Wu(e,t,!1),a=!1;continue}if(2===i){if(a=t,e.errorRecoveryDisabledLanes&a)var s=0;else s=0!==(s=-536870913&e.pendingLanes)?s:536870912&s?536870912:0;if(0!==s){t=s;e:{var l=e;i=gu;var u=l.current.memoizedState.isDehydrated;if(u&&(_u(l,s).flags|=256),2!==(s=Wu(l,s,!1))){if(lu&&!u){l.errorRecoveryDisabledLanes|=a,hu|=a,i=4;break e}a=vu,vu=i,null!==a&&Nu(a)}i=s}if(a=!1,2!==i)continue}}if(1===i){_u(e,0),Du(e,t,0,!0);break}e:{switch(r=e,i){case 0:case 1:throw Error(o(345));case 4:if((4194176&t)===t){Du(r,t,fu,!ou);break e}break;case 2:vu=null;break;case 3:case 5:break;default:throw Error(o(329))}if(r.finishedWork=n,r.finishedLanes=t,(62914560&t)===t&&10<(a=xu+300-le())){if(Du(r,t,fu,!ou),0!==Ee(r,0))break e;r.timeoutHandle=ed(Mu.bind(null,r,n,vu,wu,yu,t,fu,hu,mu,ou,2,-0,0),a)}else Mu(r,n,vu,wu,yu,t,fu,hu,mu,ou,0,-0,0)}}break}mc(e)}function Nu(e){null===vu?vu=e:vu.push.apply(vu,e)}function Mu(e,t,n,r,i,a,s,l,u,c,d,h,p){var f=t.subtreeFlags;if((8192&f||16785408===(16785408&f))&&(Ad={stylesheets:null,count:0,unsuspend:Rd},Pl(t),null!==(t=function(){if(null===Ad)throw Error(o(475));var e=Ad;return e.stylesheets&&0===e.count&&Nd(e,e.stylesheets),0<e.count?function(t){var n=setTimeout((function(){if(e.stylesheets&&Nd(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}),6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}())))return e.cancelPendingCommit=t(Zu.bind(null,e,n,r,i,s,l,u,1,h,p)),void Du(e,a,s,!c);Zu(e,n,r,i,s,l,u,d,h,p)}function Lu(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Qn(a(),i))return!1}catch(o){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Du(e,t,n,r){t&=~pu,t&=~hu,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-be(i),o=1<<a;r[a]=-1,i&=~o}0!==n&&ze(e,n,t)}function Iu(){return 0!==(6&eu)||(gc(0,!1),!1)}function Fu(){if(null!==nu){if(0===iu)var e=nu.return;else vs=gs=null,va(e=nu),fi=null,mi=0,e=nu;for(;null!==e;)Xl(e.alternate,e),e=e.return;nu=null}}function _u(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,td(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Fu(),tu=e,nu=n=Dl(e.current,null),ru=t,iu=0,au=null,ou=!1,su=Te(e,t),lu=!1,mu=fu=pu=hu=du=cu=0,vu=gu=null,yu=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var i=31-be(r),a=1<<i;t|=e[i],r&=~a}return uu=t,Er(),n}function Vu(e,t){Zi=null,A.H=Co,t===oi?(t=pi(),iu=3):t===si?(t=pi(),iu=4):iu=t===Uo?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,au=t,null===nu&&(cu=1,Io(e,Nr(t,e.current)))}function Bu(){var e=A.H;return A.H=Co,null===e?Co:e}function Uu(){var e=A.A;return A.A=Jl,e}function Hu(){cu=4,ou||(4194176&ru)!==ru&&null!==Pi.current||(su=!0),0===(134217727&du)&&0===(134217727&hu)||null===tu||Du(tu,ru,fu,!1)}function Wu(e,t,n){var r=eu;eu|=2;var i=Bu(),a=Uu();tu===e&&ru===t||(wu=null,_u(e,t)),t=!1;var o=cu;e:for(;;)try{if(0!==iu&&null!==nu){var s=nu,l=au;switch(iu){case 8:Fu(),o=6;break e;case 3:case 2:case 6:null===Pi.current&&(t=!0);var u=iu;if(iu=0,au=null,Gu(e,s,l,u),n&&su){o=0;break e}break;default:u=iu,iu=0,au=null,Gu(e,s,l,u)}}qu(),o=cu;break}catch(c){Vu(e,c)}return t&&e.shellSuspendCounter++,vs=gs=null,eu=r,A.H=i,A.A=a,null===nu&&(tu=null,ru=0,Er()),o}function qu(){for(;null!==nu;)Qu(nu)}function Ku(){for(;null!==nu&&!oe();)Qu(nu)}function Qu(e){var t=fs(e.alternate,e,uu);e.memoizedProps=e.pendingProps,null===t?Xu(e):nu=t}function Yu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Zo(n,t,t.pendingProps,t.type,void 0,ru);break;case 11:t=Zo(n,t,t.pendingProps,t.type.render,t.ref,ru);break;case 5:va(t);default:Xl(n,t),t=fs(n,t=nu=Il(t,uu),uu)}e.memoizedProps=e.pendingProps,null===t?Xu(e):nu=t}function Gu(e,t,n,r){vs=gs=null,va(t),fi=null,mi=0;var i=t.return;try{if(function(e,t,n,r,i){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&Ss(t,n,i,!0),null!==(n=Pi.current)){switch(n.tag){case 13:return null===$i?Hu():null===n.alternate&&0===cu&&(cu=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===li?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),ic(e,r,i)),!1;case 22:return n.flags|=65536,r===li?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),ic(e,r,i)),!1}throw Error(o(435,n.tag))}return ic(e,r,i),Hu(),!1}if(Gr)return null!==(t=Pi.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Zr&&ai(Nr(e=Error(o(422),{cause:r}),n))):(r!==Zr&&ai(Nr(t=Error(o(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,i&=-i,e.lanes|=i,r=Nr(r,n),Ns(e,i=_o(e.stateNode,r,i)),4!==cu&&(cu=2)),!1;var a=Error(o(520),{cause:r});if(a=Nr(a,n),null===gu?gu=[a]:gu.push(a),4!==cu&&(cu=2),null===t)return!0;r=Nr(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,Ns(n,e=_o(n.stateNode,r,e)),!1;case 1:if(t=n.type,a=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==a&&"function"===typeof a.componentDidCatch&&(null===Su||!Su.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,Bo(i=Vo(i),e,n,r),Ns(n,i),!1}n=n.return}while(null!==n);return!1}(e,i,t,n,ru))return cu=1,Io(e,Nr(n,e.current)),void(nu=null)}catch(a){if(null!==i)throw nu=i,a;return cu=1,Io(e,Nr(n,e.current)),void(nu=null)}32768&t.flags?(Gr||1===r?e=!0:su||0!==(536870912&ru)?e=!1:(ou=e=!0,(2===r||3===r||6===r)&&(null!==(r=Pi.current)&&13===r.tag&&(r.flags|=16384))),Ju(t,e)):Xu(t)}function Xu(e){var t=e;do{if(0!==(32768&t.flags))return void Ju(t,ou);e=t.return;var n=Yl(t.alternate,t,uu);if(null!==n)return void(nu=n);if(null!==(t=t.sibling))return void(nu=t);nu=t=e}while(null!==t);0===cu&&(cu=5)}function Ju(e,t){do{var n=Gl(e.alternate,e);if(null!==n)return n.flags&=32767,void(nu=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(nu=e);nu=e=n}while(null!==e);cu=6,nu=null}function Zu(e,t,n,r,i,a,s,l,u,c){var d=A.T,h=B.p;try{B.p=2,A.T=null,function(e,t,n,r,i,a,s,l){do{tc()}while(null!==ju);if(0!==(6&eu))throw Error(o(327));var u=e.finishedWork;if(r=e.finishedLanes,null===u)return null;if(e.finishedWork=null,e.finishedLanes=0,u===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var c=u.lanes|u.childLanes;if(function(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,l=e.expirationTimes,u=e.hiddenUpdates;for(n=o&~n;0<n;){var c=31-be(n),d=1<<c;s[c]=0,l[c]=-1;var h=u[c];if(null!==h)for(u[c]=null,c=0;c<h.length;c++){var p=h[c];null!==p&&(p.lane&=-536870913)}n&=~d}0!==r&&ze(e,r,0),0!==a&&0===i&&0!==e.tag&&(e.suspendedLanes|=a&~(o&~t))}(e,r,c|=Cr,a,s,l),e===tu&&(nu=tu=null,ru=0),0===(10256&u.subtreeFlags)&&0===(10256&u.flags)||ku||(ku=!0,Eu=c,Tu=n,function(e,t){ie(e,t)}(he,(function(){return tc(),null}))),n=0!==(15990&u.flags),0!==(15990&u.subtreeFlags)||n?(n=A.T,A.T=null,a=B.p,B.p=2,s=eu,eu|=4,function(e,t){if(e=e.containerInfo,Kc=Hd,er(e=Zn(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(g){n=null;break e}var s=0,l=-1,u=-1,c=0,d=0,h=e,p=null;t:for(;;){for(var f;h!==n||0!==i&&3!==h.nodeType||(l=s+i),h!==a||0!==r&&3!==h.nodeType||(u=s+r),3===h.nodeType&&(s+=h.nodeValue.length),null!==(f=h.firstChild);)p=h,h=f;for(;;){if(h===e)break t;if(p===n&&++c===i&&(l=s),p===a&&++d===r&&(u=s),null!==(f=h.nextSibling))break;p=(h=p).parentNode}h=f}n=-1===l||-1===u?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qc={focusedElem:e,selectionRange:n},Hd=!1,nl=t;null!==nl;)if(e=(t=nl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,nl=e;else for(;null!==nl;){switch(a=(t=nl).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==a){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var m=zo(n.type,i,(n.elementType,n.type));e=r.getSnapshotBeforeUpdate(m,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(v){rc(n,n.return,v)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))od(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":od(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(o(163))}if(null!==(e=t.sibling)){e.return=t.return,nl=e;break}nl=t.return}m=rl,rl=!1}(e,u),fl(u,e),tr(Qc,e.containerInfo),Hd=!!Kc,Qc=Kc=null,e.current=u,il(e,u.alternate,u),se(),eu=s,B.p=a,A.T=n):e.current=u,ku?(ku=!1,ju=e,Cu=r):ec(e,c),c=e.pendingLanes,0===c&&(Su=null),function(e){if(ye&&"function"===typeof ye.onCommitFiberRoot)try{ye.onCommitFiberRoot(ve,e,void 0,128===(128&e.current.flags))}catch(t){}}(u.stateNode),mc(e),null!==t)for(i=e.onRecoverableError,u=0;u<t.length;u++)c=t[u],i(c.value,{componentStack:c.stack});0!==(3&Cu)&&tc(),c=e.pendingLanes,0!==(4194218&r)&&0!==(42&c)?e===$u?Pu++:(Pu=0,$u=e):Pu=0,gc(0,!1)}(e,t,n,r,h,i,a,s)}finally{A.T=d,B.p=h}}function ec(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Vi(t)))}function tc(){if(null!==ju){var e=ju,t=Eu;Eu=0;var n=Me(Cu),r=A.T,i=B.p;try{if(B.p=32>n?32:n,A.T=null,null===ju)var a=!1;else{n=Tu,Tu=null;var s=ju,l=Cu;if(ju=null,Cu=0,0!==(6&eu))throw Error(o(331));var u=eu;if(eu|=4,Rl(s.current),kl(s,s.current,l,n),eu=u,gc(0,!1),ye&&"function"===typeof ye.onPostCommitFiberRoot)try{ye.onPostCommitFiberRoot(ve,s)}catch(c){}a=!0}return a}finally{B.p=i,A.T=r,ec(e,t)}}return!1}function nc(e,t,n){t=Nr(n,t),null!==(e=Os(e,t=_o(e.stateNode,t,2),2))&&(Oe(e,2),mc(e))}function rc(e,t,n){if(3===e.tag)nc(e,e,n);else for(;null!==t;){if(3===t.tag){nc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Su||!Su.has(r))){e=Nr(n,e),null!==(r=Os(t,n=Vo(2),2))&&(Bo(n,r,t,e),Oe(r,2),mc(r));break}}t=t.return}}function ic(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new Zl;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(lu=!0,i.add(n),e=ac.bind(null,e,t,n),t.then(e,e))}function ac(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,tu===e&&(ru&n)===n&&(4===cu||3===cu&&(62914560&ru)===ru&&300>le()-xu?0===(2&eu)&&_u(e,0):pu|=n,mu===ru&&(mu=0)),mc(e)}function oc(e,t){0===t&&(t=Ae()),null!==(e=$r(e,t))&&(Oe(e,t),mc(e))}function sc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),oc(e,n)}function lc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(o(314))}null!==r&&r.delete(t),oc(e,n)}var uc=null,cc=null,dc=!1,hc=!1,pc=!1,fc=0;function mc(e){var t;e!==cc&&null===e.next&&(null===cc?uc=cc=e:cc=cc.next=e),hc=!0,dc||(dc=!0,t=vc,rd((function(){0!==(6&eu)?ie(ce,t):t()})))}function gc(e,t){if(!pc&&hc){pc=!0;do{for(var n=!1,r=uc;null!==r;){if(!t)if(0!==e){var i=r.pendingLanes;if(0===i)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-be(42|e)+1)-1,a=201326677&(a&=i&~(o&~s))?201326677&a|1:a?2|a:0}0!==a&&(n=!0,bc(r,a))}else a=ru,0===(3&(a=Ee(r,r===tu?a:0)))||Te(r,a)||(n=!0,bc(r,a));r=r.next}}while(n);pc=!1}}function vc(){hc=dc=!1;var e=0;0!==fc&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==Zc&&(Zc=e,!0);return Zc=null,!1}()&&(e=fc),fc=0);for(var t=le(),n=null,r=uc;null!==r;){var i=r.next,a=yc(r,t);0===a?(r.next=null,null===n?uc=i:n.next=i,null===i&&(cc=n)):(n=r,(0!==e||0!==(3&a))&&(hc=!0)),r=i}gc(e,!1)}function yc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=-62914561&e.pendingLanes;0<a;){var o=31-be(a),s=1<<o,l=i[o];-1===l?0!==(s&n)&&0===(s&r)||(i[o]=Pe(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}if(n=ru,n=Ee(e,e===(t=tu)?n:0),r=e.callbackNode,0===n||e===t&&2===iu||null!==e.cancelPendingCommit)return null!==r&&null!==r&&ae(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||Te(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&ae(r),Me(n)){case 2:case 8:n=de;break;case 32:default:n=he;break;case 268435456:n=fe}return r=xc.bind(null,e),n=ie(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&ae(r),e.callbackPriority=2,e.callbackNode=null,2}function xc(e,t){var n=e.callbackNode;if(tc()&&e.callbackNode!==n)return null;var r=ru;return 0===(r=Ee(e,e===tu?r:0))?null:(zu(e,r,t),yc(e,le()),null!=e.callbackNode&&e.callbackNode===n?xc.bind(null,e):null)}function bc(e,t){if(tc())return null;zu(e,t,!0)}function wc(){return 0===fc&&(fc=$e()),fc}function Sc(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:$t(""+e)}function kc(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var jc=0;jc<wr.length;jc++){var Cc=wr[jc];Sr(Cc.toLowerCase(),"on"+(Cc[0].toUpperCase()+Cc.slice(1)))}Sr(pr,"onAnimationEnd"),Sr(fr,"onAnimationIteration"),Sr(mr,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(gr,"onTransitionRun"),Sr(vr,"onTransitionStart"),Sr(yr,"onTransitionCancel"),Sr(xr,"onTransitionEnd"),tt("onMouseEnter",["mouseout","mouseover"]),tt("onMouseLeave",["mouseout","mouseover"]),tt("onPointerEnter",["pointerout","pointerover"]),tt("onPointerLeave",["pointerout","pointerover"]),et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),et("onBeforeInput",["compositionend","keypress","textInput","paste"]),et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ec="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tc=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ec));function Pc(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;a=s,i.currentTarget=u;try{a(i)}catch(c){No(c)}i.currentTarget=null,a=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;a=s,i.currentTarget=u;try{a(i)}catch(c){No(c)}i.currentTarget=null,a=l}}}}function $c(e,t){var n=t[Ve];void 0===n&&(n=t[Ve]=new Set);var r=e+"__bubble";n.has(r)||(zc(t,e,2,!1),n.add(r))}function Ac(e,t,n){var r=0;t&&(r|=4),zc(n,e,r,t)}var Rc="_reactListening"+Math.random().toString(36).slice(2);function Oc(e){if(!e[Rc]){e[Rc]=!0,Je.forEach((function(t){"selectionchange"!==t&&(Tc.has(t)||Ac(t,!1,e),Ac(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Rc]||(t[Rc]=!0,Ac("selectionchange",!1,t))}}function zc(e,t,n,r){switch(Xd(t)){case 2:var i=Wd;break;case 8:i=qd;break;default:i=Kd}n=i.bind(null,t,n,e),i=void 0,!It||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Nc(e,t,n,r,i){var a=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===o)for(o=r.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;o=o.return}for(;null!==s;){if(null===(o=Ke(s)))return;if(5===(l=o.tag)||6===l||26===l||27===l){r=a=o;continue e}s=s.parentNode}}r=r.return}Lt((function(){var r=a,i=Rt(n),o=[];e:{var s=br.get(e);if(void 0!==s){var l=Jt,u=e;switch(e){case"keypress":if(0===Ht(n))break e;case"keydown":case"keyup":l=fn;break;case"focusin":u="focus",l=an;break;case"focusout":u="blur",l=an;break;case"beforeblur":case"afterblur":l=an;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=nn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=rn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=gn;break;case pr:case fr:case mr:l=on;break;case xr:l=vn;break;case"scroll":case"scrollend":l=en;break;case"wheel":l=yn;break;case"copy":case"cut":case"paste":l=sn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=mn;break;case"toggle":case"beforetoggle":l=xn}var c=0!==(4&t),d=!c&&("scroll"===e||"scrollend"===e),h=c?null!==s?s+"Capture":null:s;c=[];for(var p,f=r;null!==f;){var m=f;if(p=m.stateNode,5!==(m=m.tag)&&26!==m&&27!==m||null===p||null===h||null!=(m=Dt(f,h))&&c.push(Mc(f,m,p)),d)break;f=f.return}0<c.length&&(s=new l(s,u,null,n,i),o.push({event:s,listeners:c}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===At||!(u=n.relatedTarget||n.fromElement)||!Ke(u)&&!u[_e])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?Ke(u):null)&&(d=D(u),c=u.tag,u!==d||5!==c&&27!==c&&6!==c)&&(u=null)):(l=null,u=r),l!==u)){if(c=nn,m="onMouseLeave",h="onMouseEnter",f="mouse","pointerout"!==e&&"pointerover"!==e||(c=mn,m="onPointerLeave",h="onPointerEnter",f="pointer"),d=null==l?s:Ye(l),p=null==u?s:Ye(u),(s=new c(m,f+"leave",l,n,i)).target=d,s.relatedTarget=p,m=null,Ke(i)===r&&((c=new c(h,f+"enter",u,n,i)).target=p,c.relatedTarget=d,m=c),d=m,l&&u)e:{for(h=u,f=0,p=c=l;p;p=Dc(p))f++;for(p=0,m=h;m;m=Dc(m))p++;for(;0<f-p;)c=Dc(c),f--;for(;0<p-f;)h=Dc(h),p--;for(;f--;){if(c===h||null!==h&&c===h.alternate)break e;c=Dc(c),h=Dc(h)}c=null}else c=null;null!==l&&Ic(o,s,l,c,!1),null!==u&&null!==d&&Ic(o,d,u,c,!0)}if("select"===(l=(s=r?Ye(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Dn;else if(Rn(s))if(In)g=Kn;else{g=Wn;var v=Hn}else!(l=s.nodeName)||"input"!==l.toLowerCase()||"checkbox"!==s.type&&"radio"!==s.type?r&&Et(r.elementType)&&(g=Dn):g=qn;switch(g&&(g=g(e,r))?On(o,g,n,i):(v&&v(e,s,r),"focusout"===e&&r&&"number"===s.type&&null!=r.memoizedProps.value&&yt(s,"number",s.value)),v=r?Ye(r):window,e){case"focusin":(Rn(v)||"true"===v.contentEditable)&&(rr=v,ir=r,ar=null);break;case"focusout":ar=ir=rr=null;break;case"mousedown":or=!0;break;case"contextmenu":case"mouseup":case"dragend":or=!1,sr(o,n,i);break;case"selectionchange":if(nr)break;case"keydown":case"keyup":sr(o,n,i)}var y;if(wn)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else $n?Tn(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(jn&&"ko"!==n.locale&&($n||"onCompositionStart"!==x?"onCompositionEnd"===x&&$n&&(y=Ut()):(Vt="value"in(_t=i)?_t.value:_t.textContent,$n=!0)),0<(v=Lc(r,x)).length&&(x=new ln(x,e,null,n,i),o.push({event:x,listeners:v}),y?x.data=y:null!==(y=Pn(n))&&(x.data=y))),(y=kn?function(e,t){switch(e){case"compositionend":return Pn(t);case"keypress":return 32!==t.which?null:(En=!0,Cn);case"textInput":return(e=t.data)===Cn&&En?null:e;default:return null}}(e,n):function(e,t){if($n)return"compositionend"===e||!wn&&Tn(e,t)?(e=Ut(),Bt=Vt=_t=null,$n=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(x=Lc(r,"onBeforeInput")).length&&(v=new ln("onBeforeInput","beforeinput",null,n,i),o.push({event:v,listeners:x}),v.data=y)),function(e,t,n,r,i){if("submit"===t&&n&&n.stateNode===i){var a=Sc((i[Fe]||null).action),o=r.submitter;o&&null!==(t=(t=o[Fe]||null)?Sc(t.formAction):o.getAttribute("formAction"))&&(a=t,o=null);var s=new Jt("action","action",null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==fc){var e=o?kc(i,o):new FormData(i);co(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else"function"===typeof a&&(s.preventDefault(),e=o?kc(i,o):new FormData(i),co(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}(o,e,r,n,i)}Pc(o,t)}))}function Mc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Lc(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,a=i.stateNode;5!==(i=i.tag)&&26!==i&&27!==i||null===a||(null!=(i=Dt(e,n))&&r.unshift(Mc(e,i,a)),null!=(i=Dt(e,t))&&r.push(Mc(e,i,a))),e=e.return}return r}function Dc(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function Ic(e,t,n,r,i){for(var a=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(s=s.tag,null!==l&&l===r)break;5!==s&&26!==s&&27!==s||null===u||(l=u,i?null!=(u=Dt(n,a))&&o.unshift(Mc(n,u,l)):i||null!=(u=Dt(n,a))&&o.push(Mc(n,u,l))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Fc=/\r\n?/g,_c=/\u0000|\uFFFD/g;function Vc(e){return("string"===typeof e?e:""+e).replace(Fc,"\n").replace(_c,"")}function Bc(e,t){return t=Vc(t),Vc(e)===t}function Uc(){}function Hc(e,t,n,r,i,a){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||St(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&St(e,""+r);break;case"className":st(e,"class",r);break;case"tabIndex":st(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":st(e,n,r);break;case"style":Ct(e,r,a);break;case"data":if("object"!==t){st(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=$t(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof a&&("formAction"===n?("input"!==t&&Hc(e,t,"name",i.name,i,null),Hc(e,t,"formEncType",i.formEncType,i,null),Hc(e,t,"formMethod",i.formMethod,i,null),Hc(e,t,"formTarget",i.formTarget,i,null)):(Hc(e,t,"encType",i.encType,i,null),Hc(e,t,"method",i.method,i,null),Hc(e,t,"target",i.target,i,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=$t(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Uc);break;case"onScroll":null!=r&&$c("scroll",e);break;case"onScrollEnd":null!=r&&$c("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=i.children)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=$t(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":$c("beforetoggle",e),$c("toggle",e),ot(e,"popover",r);break;case"xlinkActuate":lt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":lt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":lt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":lt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":lt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":lt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":lt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":lt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":lt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ot(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&ot(e,n=Tt.get(n)||n,r)}}function Wc(e,t,n,r,i,a){switch(n){case"style":Ct(e,r,a);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=i.children)throw Error(o(60));e.innerHTML=n}}break;case"children":"string"===typeof r?St(e,r):("number"===typeof r||"bigint"===typeof r)&&St(e,""+r);break;case"onScroll":null!=r&&$c("scroll",e);break;case"onScrollEnd":null!=r&&$c("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Uc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:Ze.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),"function"===typeof(a=null!=(a=e[Fe]||null)?a[n]:null)&&e.removeEventListener(t,a,i),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):ot(e,n,r):("function"!==typeof a&&null!==a&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i)))}}function qc(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":$c("error",e),$c("load",e);var r,i=!1,a=!1;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(null!=s)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Hc(e,t,r,s,n,null)}}return a&&Hc(e,t,"srcSet",n.srcSet,n,null),void(i&&Hc(e,t,"src",n.src,n,null));case"input":$c("invalid",e);var l=r=s=a=null,u=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(null!=d)switch(i){case"name":a=d;break;case"type":s=d;break;case"checked":u=d;break;case"defaultChecked":c=d;break;case"value":r=d;break;case"defaultValue":l=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(o(137,t));break;default:Hc(e,t,i,d,n,null)}}return vt(e,r,l,u,c,s,a,!1),void dt(e);case"select":for(a in $c("invalid",e),i=s=r=null,n)if(n.hasOwnProperty(a)&&null!=(l=n[a]))switch(a){case"value":r=l;break;case"defaultValue":s=l;break;case"multiple":i=l;default:Hc(e,t,a,l,n,null)}return t=r,n=s,e.multiple=!!i,void(null!=t?xt(e,!!i,t,!1):null!=n&&xt(e,!!i,n,!0));case"textarea":for(s in $c("invalid",e),r=a=i=null,n)if(n.hasOwnProperty(s)&&null!=(l=n[s]))switch(s){case"value":i=l;break;case"defaultValue":a=l;break;case"children":r=l;break;case"dangerouslySetInnerHTML":if(null!=l)throw Error(o(91));break;default:Hc(e,t,s,l,n,null)}return wt(e,i,a,r),void dt(e);case"option":for(u in n)if(n.hasOwnProperty(u)&&null!=(i=n[u]))if("selected"===u)e.selected=i&&"function"!==typeof i&&"symbol"!==typeof i;else Hc(e,t,u,i,n,null);return;case"dialog":$c("cancel",e),$c("close",e);break;case"iframe":case"object":$c("load",e);break;case"video":case"audio":for(i=0;i<Ec.length;i++)$c(Ec[i],e);break;case"image":$c("error",e),$c("load",e);break;case"details":$c("toggle",e);break;case"embed":case"source":case"link":$c("error",e),$c("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&null!=(i=n[c]))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Hc(e,t,c,i,n,null)}return;default:if(Et(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(i=n[d])&&Wc(e,t,d,i,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(null!=(i=n[l])&&Hc(e,t,l,i,n,null))}var Kc=null,Qc=null;function Yc(e){return 9===e.nodeType?e:e.ownerDocument}function Gc(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xc(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function Jc(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Zc=null;var ed="function"===typeof setTimeout?setTimeout:void 0,td="function"===typeof clearTimeout?clearTimeout:void 0,nd="function"===typeof Promise?Promise:void 0,rd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof nd?function(e){return nd.resolve(null).then(e).catch(id)}:ed;function id(e){setTimeout((function(){throw e}))}function ad(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void mh(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);mh(t)}function od(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":od(n),qe(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function sd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}function ld(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}function ud(e,t,n){switch(t=Yc(n),e){case"html":if(!(e=t.documentElement))throw Error(o(452));return e;case"head":if(!(e=t.head))throw Error(o(453));return e;case"body":if(!(e=t.body))throw Error(o(454));return e;default:throw Error(o(451))}}var cd=new Map,dd=new Set;function hd(e){return"function"===typeof e.getRootNode?e.getRootNode():e.ownerDocument}var pd=B.d;B.d={f:function(){var e=pd.f(),t=Iu();return e||t},r:function(e){var t=Qe(e);null!==t&&5===t.tag&&"form"===t.type?po(t):pd.r(e)},D:function(e){pd.D(e),md("dns-prefetch",e,null)},C:function(e,t){pd.C(e,t),md("preconnect",e,t)},L:function(e,t,n){pd.L(e,t,n);var r=fd;if(r&&e&&t){var i='link[rel="preload"][as="'+mt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(i+='[imagesrcset="'+mt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(i+='[imagesizes="'+mt(n.imageSizes)+'"]')):i+='[href="'+mt(e)+'"]';var a=i;switch(t){case"style":a=vd(e);break;case"script":a=bd(e)}cd.has(a)||(e=R({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),cd.set(a,e),null!==r.querySelector(i)||"style"===t&&r.querySelector(yd(a))||"script"===t&&r.querySelector(wd(a))||(qc(t=r.createElement("link"),"link",e),Xe(t),r.head.appendChild(t)))}},m:function(e,t){pd.m(e,t);var n=fd;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",i='link[rel="modulepreload"][as="'+mt(r)+'"][href="'+mt(e)+'"]',a=i;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=bd(e)}if(!cd.has(a)&&(e=R({rel:"modulepreload",href:e},t),cd.set(a,e),null===n.querySelector(i))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(wd(a)))return}qc(r=n.createElement("link"),"link",e),Xe(r),n.head.appendChild(r)}}},X:function(e,t){pd.X(e,t);var n=fd;if(n&&e){var r=Ge(n).hoistableScripts,i=bd(e),a=r.get(i);a||((a=n.querySelector(wd(i)))||(e=R({src:e,async:!0},t),(t=cd.get(i))&&Cd(e,t),Xe(a=n.createElement("script")),qc(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(i,a))}},S:function(e,t,n){pd.S(e,t,n);var r=fd;if(r&&e){var i=Ge(r).hoistableStyles,a=vd(e);t=t||"default";var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(yd(a)))s.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":t},n),(n=cd.get(a))&&jd(e,n);var l=o=r.createElement("link");Xe(l),qc(l,"link",e),l._p=new Promise((function(e,t){l.onload=e,l.onerror=t})),l.addEventListener("load",(function(){s.loading|=1})),l.addEventListener("error",(function(){s.loading|=2})),s.loading|=4,kd(o,t,r)}o={type:"stylesheet",instance:o,count:1,state:s},i.set(a,o)}}},M:function(e,t){pd.M(e,t);var n=fd;if(n&&e){var r=Ge(n).hoistableScripts,i=bd(e),a=r.get(i);a||((a=n.querySelector(wd(i)))||(e=R({src:e,async:!0,type:"module"},t),(t=cd.get(i))&&Cd(e,t),Xe(a=n.createElement("script")),qc(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(i,a))}}};var fd="undefined"===typeof document?null:document;function md(e,t,n){var r=fd;if(r&&"string"===typeof t&&t){var i=mt(t);i='link[rel="'+e+'"][href="'+i+'"]',"string"===typeof n&&(i+='[crossorigin="'+n+'"]'),dd.has(i)||(dd.add(i),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(i)&&(qc(t=r.createElement("link"),"link",e),Xe(t),r.head.appendChild(t)))}}function gd(e,t,n,r){var i,a,s,l,u=(u=X.current)?hd(u):null;if(!u)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=vd(n.href),(r=(n=Ge(u).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=vd(n.href);var c=Ge(u).hoistableStyles,d=c.get(e);if(d||(u=u.ownerDocument||u,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,d),(c=u.querySelector(yd(e)))&&!c._p&&(d.instance=c,d.state.loading=5),cd.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},cd.set(e,n),c||(i=u,a=e,s=n,l=d.state,i.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=i.createElement("link"),l.preload=a,a.addEventListener("load",(function(){return l.loading|=1})),a.addEventListener("error",(function(){return l.loading|=2})),qc(a,"link",s),Xe(a),i.head.appendChild(a))))),t&&null===r)throw Error(o(528,""));return d}if(t&&null!==r)throw Error(o(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=bd(n),(r=(n=Ge(u).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function vd(e){return'href="'+mt(e)+'"'}function yd(e){return'link[rel="stylesheet"]['+e+"]"}function xd(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function bd(e){return'[src="'+mt(e)+'"]'}function wd(e){return"script[async]"+e}function Sd(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+mt(n.href)+'"]');if(r)return t.instance=r,Xe(r),r;var i=R({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return Xe(r=(e.ownerDocument||e).createElement("style")),qc(r,"style",i),kd(r,n.precedence,e),t.instance=r;case"stylesheet":i=vd(n.href);var a=e.querySelector(yd(i));if(a)return t.state.loading|=4,t.instance=a,Xe(a),a;r=xd(n),(i=cd.get(i))&&jd(r,i),Xe(a=(e.ownerDocument||e).createElement("link"));var s=a;return s._p=new Promise((function(e,t){s.onload=e,s.onerror=t})),qc(a,"link",r),t.state.loading|=4,kd(a,n.precedence,e),t.instance=a;case"script":return a=bd(n.src),(i=e.querySelector(wd(a)))?(t.instance=i,Xe(i),i):(r=n,(i=cd.get(a))&&Cd(r=R({},n),i),Xe(i=(e=e.ownerDocument||e).createElement("script")),qc(i,"link",r),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(o(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,kd(r,n.precedence,e));return t.instance}function kd(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function jd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Cd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var Ed=null;function Td(e,t,n){if(null===Ed){var r=new Map,i=Ed=new Map;i.set(n,r)}else(r=(i=Ed).get(n))||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[We]||a[Ie]||"link"===e&&"stylesheet"===a.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==a.namespaceURI){var o=a.getAttribute(t)||"";o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Pd(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function $d(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var Ad=null;function Rd(){}function Od(){if(this.count--,0===this.count)if(this.stylesheets)Nd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var zd=null;function Nd(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,zd=new Map,t.forEach(Md,e),zd=null,Od.call(e))}function Md(e,t){if(!(4&t.state.loading)){var n=zd.get(e);if(n)var r=n.get(null);else{n=new Map,zd.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<i.length;a++){var o=i[a];"LINK"!==o.nodeName&&"not all"===o.getAttribute("media")||(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}o=(i=t.instance).getAttribute("data-precedence"),(a=n.get(o)||r)===r&&n.set(null,i),n.set(o,i),this.count++,r=Od.bind(this),i.addEventListener("load",r),i.addEventListener("error",r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(i,e.firstChild),t.state.loading|=4}}var Ld={$$typeof:g,Provider:null,Consumer:null,_currentValue:U,_currentValue2:U,_threadCount:0};function Dd(e,t,n,r,i,a,o,s){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function Id(e,t,n,r,i,a,o,s,l,u,c,d){return e=new Dd(e,t,n,o,s,l,u,d),t=1,!0===a&&(t|=24),a=Ml(3,null,null,t),e.current=a,a.stateNode=e,(t=_i()).refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},$s(a),e}function Fd(e){return e?e=Or:Or}function _d(e,t,n,r,i,a){i=Fd(i),null===r.context?r.context=i:r.pendingContext=i,(r=Rs(t)).payload={element:n},null!==(a=void 0===a?null:a)&&(r.callback=a),null!==(n=Os(e,r,t))&&(Ou(n,0,t),zs(n,e,t))}function Vd(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Bd(e,t){Vd(e,t),(e=e.alternate)&&Vd(e,t)}function Ud(e){if(13===e.tag){var t=$r(e,67108864);null!==t&&Ou(t,0,67108864),Bd(e,67108864)}}var Hd=!0;function Wd(e,t,n,r){var i=A.T;A.T=null;var a=B.p;try{B.p=2,Kd(e,t,n,r)}finally{B.p=a,A.T=i}}function qd(e,t,n,r){var i=A.T;A.T=null;var a=B.p;try{B.p=8,Kd(e,t,n,r)}finally{B.p=a,A.T=i}}function Kd(e,t,n,r){if(Hd){var i=Qd(r);if(null===i)Nc(e,t,r,Yd,n),oh(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Zd=sh(Zd,e,t,n,r,i),!0;case"dragenter":return eh=sh(eh,e,t,n,r,i),!0;case"mouseover":return th=sh(th,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return nh.set(a,sh(nh.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,rh.set(a,sh(rh.get(a)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(oh(e,r),4&t&&-1<ah.indexOf(e)){for(;null!==i;){var a=Qe(i);if(null!==a)switch(a.tag){case 3:if((a=a.stateNode).current.memoizedState.isDehydrated){var o=Ce(a.pendingLanes);if(0!==o){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var l=1<<31-be(o);s.entanglements[1]|=l,o&=~l}mc(a),0===(6&eu)&&(bu=le()+500,gc(0,!1))}}break;case 13:null!==(s=$r(a,2))&&Ou(s,0,2),Iu(),Bd(a,2)}if(null===(a=Qd(r))&&Nc(e,t,r,Yd,n),a===i)break;i=a}null!==i&&r.stopPropagation()}else Nc(e,t,r,null,n)}}function Qd(e){return Gd(e=Rt(e))}var Yd=null;function Gd(e){if(Yd=null,null!==(e=Ke(e))){var t=D(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=I(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Yd=e,null}function Xd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ue()){case ce:return 2;case de:return 8;case he:case pe:return 32;case fe:return 268435456;default:return 32}default:return 32}}var Jd=!1,Zd=null,eh=null,th=null,nh=new Map,rh=new Map,ih=[],ah="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function oh(e,t){switch(e){case"focusin":case"focusout":Zd=null;break;case"dragenter":case"dragleave":eh=null;break;case"mouseover":case"mouseout":th=null;break;case"pointerover":case"pointerout":nh.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rh.delete(t.pointerId)}}function sh(e,t,n,r,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},null!==t&&(null!==(t=Qe(t))&&Ud(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function lh(e){var t=Ke(e.target);if(null!==t){var n=D(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=I(n)))return e.blockedOn=t,void function(e,t){var n=B.p;try{return B.p=e,t()}finally{B.p=n}}(e.priority,(function(){if(13===n.tag){var e=Au(),t=$r(n,e);null!==t&&Ou(t,0,e),Bd(n,e)}}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function uh(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qd(e.nativeEvent);if(null!==n)return null!==(t=Qe(n))&&Ud(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);At=r,n.target.dispatchEvent(r),At=null,t.shift()}return!0}function ch(e,t,n){uh(e)&&n.delete(t)}function dh(){Jd=!1,null!==Zd&&uh(Zd)&&(Zd=null),null!==eh&&uh(eh)&&(eh=null),null!==th&&uh(th)&&(th=null),nh.forEach(ch),rh.forEach(ch)}function hh(e,t){e.blockedOn===t&&(e.blockedOn=null,Jd||(Jd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,dh)))}var ph=null;function fh(e){ph!==e&&(ph=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,(function(){ph===e&&(ph=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if("function"!==typeof r){if(null===Gd(r||n))continue;break}var a=Qe(n);null!==a&&(e.splice(t,3),t-=3,co(a,{pending:!0,data:i,method:n.method,action:r},r,i))}})))}function mh(e){function t(t){return hh(t,e)}null!==Zd&&hh(Zd,e),null!==eh&&hh(eh,e),null!==th&&hh(th,e),nh.forEach(t),rh.forEach(t);for(var n=0;n<ih.length;n++){var r=ih[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<ih.length&&null===(n=ih[0]).blockedOn;)lh(n),null===n.blockedOn&&ih.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Fe]||null;if("function"===typeof a)o||fh(n);else if(o){var s=null;if(a&&a.hasAttribute("formAction")){if(i=a,o=a[Fe]||null)s=o.formAction;else if(null!==Gd(i))continue}else s=o.action;"function"===typeof s?n[r+1]=s:(n.splice(r,3),r-=3),fh(n)}}}function gh(e){this._internalRoot=e}function vh(e){this._internalRoot=e}vh.prototype.render=gh.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));_d(t.current,Au(),e,t,null,null)},vh.prototype.unmount=gh.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;0===e.tag&&tc(),_d(e.current,2,null,e,null,null),Iu(),t[_e]=null}},vh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Le();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ih.length&&0!==t&&t<ih[n].priority;n++);ih.splice(n,0,e),0===n&&lh(e)}};var yh=i.version;if("19.0.0"!==yh)throw Error(o(527,yh,"19.0.0"));B.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=D(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return F(i),e;if(a===r)return F(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=a;break}if(l===r){s=!0,r=i,n=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===n){s=!0,n=a,r=i;break}if(l===r){s=!0,r=a,n=i;break}l=l.sibling}if(!s)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?_(e):null)?null:e.stateNode};var xh={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:A,findFiberByHostInstance:Ke,reconcilerVersion:"19.0.0"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var bh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bh.isDisabled&&bh.supportsFiber)try{ve=bh.inject(xh),ye=bh}catch(Sh){}}t.createRoot=function(e,t){if(!s(e))throw Error(o(299));var n=!1,r="",i=Mo,a=Lo,l=Do;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(i=t.onUncaughtError),void 0!==t.onCaughtError&&(a=t.onCaughtError),void 0!==t.onRecoverableError&&(l=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=Id(e,1,!1,null,0,n,r,i,a,l,0,null),e[_e]=t.current,Oc(8===e.nodeType?e.parentNode:e),new gh(t)},t.hydrateRoot=function(e,t,n){if(!s(e))throw Error(o(299));var r=!1,i="",a=Mo,l=Lo,u=Do,c=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onUncaughtError&&(a=n.onUncaughtError),void 0!==n.onCaughtError&&(l=n.onCaughtError),void 0!==n.onRecoverableError&&(u=n.onRecoverableError),void 0!==n.unstable_transitionCallbacks&&n.unstable_transitionCallbacks,void 0!==n.formState&&(c=n.formState)),(t=Id(e,1,!0,t,0,r,i,a,l,u,0,c)).context=Fd(null),n=t.current,(i=Rs(r=Au())).callback=null,Os(n,i,r),t.current.lanes=r,Oe(t,r),mc(t),e[_e]=t.current,Oc(e),new vh(t)},t.version="19.0.0"},43:(e,t,n)=>{"use strict";e.exports=n(288)},288:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function y(){}function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var b=x.prototype=new y;b.constructor=x,m(b,v.prototype),b.isPureReactComponent=!0;var w=Array.isArray,S={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function j(e,t,r,i,a,o){return r=o.ref,{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:o}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(){}function $(e,t,i,a,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l,u,c=!1;if(null===e)c=!0;else switch(s){case"bigint":case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0;break;case h:return $((c=e._init)(e._payload),t,i,a,o)}}if(c)return o=o(e),c=""===a?"."+T(e,0):a,w(o)?(i="",null!=c&&(i=c.replace(E,"$&/")+"/"),$(o,t,i,"",(function(e){return e}))):null!=o&&(C(o)&&(l=o,u=i+(null==o.key||e&&e.key===o.key?"":(""+o.key).replace(E,"$&/")+"/")+c,o=j(l.type,u,void 0,0,0,l.props)),t.push(o)),1;c=0;var d,f=""===a?".":a+":";if(w(e))for(var m=0;m<e.length;m++)c+=$(a=e[m],t,i,s=f+T(a,m),o);else if("function"===typeof(m=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=p&&d[p]||d["@@iterator"])?d:null))for(e=m.call(e),m=0;!(a=e.next()).done;)c+=$(a=a.value,t,i,s=f+T(a,m++),o);else if("object"===s){if("function"===typeof e.then)return $(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(P,P):(e.status="pending",e.then((function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)}),(function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)}))),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,i,a,o);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return c}function A(e,t,n){if(null==e)return e;var r=[],i=0;return $(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function z(){}t.Children={map:A,forEach:function(e,t,n){A(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return A(e,(function(){t++})),t},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=i,t.Profiler=o,t.PureComponent=x,t.StrictMode=a,t.Suspense=c,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,t.act=function(){throw Error("act(...) is not supported in production builds of React.")},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=m({},e.props),i=e.key;if(null!=t)for(a in void 0!==t.ref&&void 0,void 0!==t.key&&(i=""+t.key),t)!k.call(t,a)||"key"===a||"__self"===a||"__source"===a||"ref"===a&&void 0===t.ref||(r[a]=t[a]);var a=arguments.length-2;if(1===a)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return j(e.type,i,void 0,0,0,r)},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:s,_context:e},e},t.createElement=function(e,t,n){var r,i={},a=null;if(null!=t)for(r in void 0!==t.key&&(a=""+t.key),t)k.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(i[r]=t[r]);var o=arguments.length-2;if(1===o)i.children=n;else if(1<o){for(var s=Array(o),l=0;l<o;l++)s[l]=arguments[l+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===i[r]&&(i[r]=o[r]);return j(e,a,void 0,0,0,i)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),i=S.S;null!==i&&i(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(z,O)}catch(a){O(a)}finally{S.T=t}},t.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},t.use=function(e){return S.H.use(e)},t.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},t.useCallback=function(e,t){return S.H.useCallback(e,t)},t.useContext=function(e){return S.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return S.H.useEffect(e,t)},t.useId=function(){return S.H.useId()},t.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return S.H.useMemo(e,t)},t.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},t.useRef=function(e){return S.H.useRef(e)},t.useState=function(e){return S.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return S.H.useTransition()},t.version="19.0.0"},324:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var u=a[l];if(!s(u))return!1;var c=e[u],d=t[u];if(!1===(i=n?n.call(r,c,d,u):void 0)||void 0===i&&c!==d)return!1}return!0}},358:(e,t)=>{"use strict";const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,s=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function l(e,t,n){do{const n=e.charCodeAt(t);if(32!==n&&9!==n)return t}while(++t<n);return n}function u(e,t,n){for(;t>n;){const n=e.charCodeAt(--t);if(32!==n&&9!==n)return t+1}return n}function c(e){if(-1===e.indexOf("%"))return e;try{return decodeURIComponent(e)}catch(t){return e}}},391:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},579:(e,t,n)=>{"use strict";e.exports=n(799)},672:(e,t,n)=>{"use strict";var r=n(43);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var o={d:{f:a,r:function(){throw Error(i(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},s=Symbol.for("react.portal");var l=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(i(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:s,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=l.T,n=o.p;try{if(l.T=null,o.p=2,e)return e()}finally{l.T=t,o.p=n,o.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,o.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&o.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=u(n,t.crossOrigin),i="string"===typeof t.integrity?t.integrity:void 0,a="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?o.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:a}):"script"===n&&o.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:a,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=u(t.as,t.crossOrigin);o.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&o.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=u(n,t.crossOrigin);o.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=u(t.as,t.crossOrigin);o.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else o.d.m(e)},t.requestFormReset=function(e){o.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},t.useFormStatus=function(){return l.H.useHostTransitionStatus()},t.version="19.0.0"},799:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function i(e,t,r){var i=null;if(void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),"key"in t)for(var a in r={},t)"key"!==a&&(r[a]=t[a]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:i,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=i,t.jsxs=i},853:(e,t,n)=>{"use strict";e.exports=n(896)},896:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<a(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,o=i>>>1;r<o;){var s=2*(r+1)-1,l=e[s],u=s+1,c=e[u];if(0>a(l,n))u<i&&0>a(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[s]=n,r=s);else{if(!(u<i&&0>a(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var u=[],c=[],d=1,h=null,p=3,f=!1,m=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=r(c);null!==t;){if(null===t.callback)i(c);else{if(!(t.startTime<=e))break;i(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(g=!1,b(e),!m)if(null!==r(u))m=!0,R();else{var t=r(c);null!==t&&O(w,t.startTime-e)}}var S,k=!1,j=-1,C=5,E=-1;function T(){return!(t.unstable_now()-E<C)}function P(){if(k){var e=t.unstable_now();E=e;var n=!0;try{e:{m=!1,g&&(g=!1,y(j),j=-1),f=!0;var a=p;try{t:{for(b(e),h=r(u);null!==h&&!(h.expirationTime>e&&T());){var o=h.callback;if("function"===typeof o){h.callback=null,p=h.priorityLevel;var s=o(h.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof s){h.callback=s,b(e),n=!0;break t}h===r(u)&&i(u),b(e)}else i(u);h=r(u)}if(null!==h)n=!0;else{var l=r(c);null!==l&&O(w,l.startTime-e),n=!1}}break e}finally{h=null,p=a,f=!1}n=void 0}}finally{n?S():k=!1}}}if("function"===typeof x)S=function(){x(P)};else if("undefined"!==typeof MessageChannel){var $=new MessageChannel,A=$.port2;$.port1.onmessage=P,S=function(){A.postMessage(null)}}else S=function(){v(P,0)};function R(){k||(k=!0,S())}function O(e,n){j=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||f||(m=!0,R())},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,i,a){var o=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?o+a:o:a=o,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:a,expirationTime:s=a+s,sortIndex:-1},a>o?(e.sortIndex=a,n(c,e),null===r(u)&&e===r(c)&&(g?(y(j),j=-1):g=!0,O(w,a-o))):(e.sortIndex=s,n(u,e),m||f||(m=!0,R())),e},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".3f1110e9.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="dsa-demos:";n.l=(r,i,a,o)=>{if(e[r])e[r].push(i);else{var s,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[i];var h=(t,n)=>{s.onerror=s.onload=null,clearTimeout(p);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(n))),t)return t(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/visualdsa/",(()=>{var e={792:0};n.f.j=(t,r)=>{var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var a=new Promise(((n,r)=>i=e[t]=[n,r]));r.push(i[2]=a);var o=n.p+n.u(t),s=new Error;n.l(o,(r=>{if(n.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,i[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var i,a,o=r[0],s=r[1],l=r[2],u=0;if(o.some((t=>0!==e[t]))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)l(n)}for(t&&t(r);u<o.length;u++)a=o[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self.webpackChunkdsa_demos=self.webpackChunkdsa_demos||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e=n(43),t=n(391),r=(n(358),"popstate");function i(){return d((function(e,t){let{pathname:n="/",search:r="",hash:i=""}=c(e.location.hash.substring(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),l("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"===typeof t?t:u(t))}),(function(e,t){o("/"===e.pathname.charAt(0),`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)}),arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function a(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function o(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function s(e,t){return{usr:e.state,key:e.key,idx:t}}function l(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?c(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function u(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function c(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function d(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:o=document.defaultView,v5Compat:c=!1}=i,d=o.history,h="POP",p=null,f=m();function m(){return(d.state||{idx:null}).idx}function g(){h="POP";let e=m(),t=null==e?null:e-f;f=e,p&&p({action:h,location:y.location,delta:t})}function v(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,n="string"===typeof e?e:u(e);return n=n.replace(/ $/,"%20"),a(t,`No window.location.(origin|href) available to create URL for href: ${n}`),new URL(n,t)}null==f&&(f=0,d.replaceState({...d.state,idx:f},""));let y={get action(){return h},get location(){return e(o,d)},listen(e){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(r,g),p=e,()=>{o.removeEventListener(r,g),p=null}},createHref:e=>t(o,e),createURL:v,encodeLocation(e){let t=v(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){h="PUSH";let r=l(y.location,e,t);n&&n(r,e),f=m()+1;let i=s(r,f),a=y.createHref(r);try{d.pushState(i,"",a)}catch(u){if(u instanceof DOMException&&"DataCloneError"===u.name)throw u;o.location.assign(a)}c&&p&&p({action:h,location:y.location,delta:1})},replace:function(e,t){h="REPLACE";let r=l(y.location,e,t);n&&n(r,e),f=m();let i=s(r,f),a=y.createHref(r);d.replaceState(i,"",a),c&&p&&p({action:h,location:y.location,delta:0})},go:e=>d.go(e)};return y}new WeakMap;function h(e,t){return p(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function p(e,t,n,r){let i=T(("string"===typeof t?c(t):t).pathname||"/",n);if(null==i)return null;let a=f(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let o=null;for(let s=0;null==o&&s<a.length;++s){let e=E(i);o=j(a[s],e,r)}return o}function f(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=(e,i,o)=>{let s={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};s.relativePath.startsWith("/")&&(a(s.relativePath.startsWith(r),`Absolute route path "${s.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),s.relativePath=s.relativePath.slice(r.length));let l=O([r,s.relativePath]),u=n.concat(s);e.children&&e.children.length>0&&(a(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),f(e.children,t,u,l)),(null!=e.path||e.index)&&t.push({path:l,score:k(l,e.index),routesMeta:u})};return e.forEach(((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of m(e.path))i(e,t,n);else i(e,t)})),t}function m(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return i?[a,""]:[a];let o=m(r.join("/")),s=[];return s.push(...o.map((e=>""===e?a:[a,e].join("/")))),i&&s.push(...o),s.map((t=>e.startsWith("/")&&""===t?"/":t))}var g=/^:[\w-]+$/,v=3,y=2,x=1,b=10,w=-2,S=e=>"*"===e;function k(e,t){let n=e.split("/"),r=n.length;return n.some(S)&&(r+=w),t&&(r+=y),n.filter((e=>!S(e))).reduce(((e,t)=>e+(g.test(t)?v:""===t?x:b)),r)}function j(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,i={},a="/",o=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,u="/"===a?t:t.slice(a.length)||"/",c=C({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},u),d=e.route;if(!c&&l&&n&&!r[r.length-1].route.index&&(c=C({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:O([a,c.pathname]),pathnameBase:z(O([a,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(a=O([a,c.pathnameBase]))}return o}function C(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];o("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let a=new RegExp(i,t?void 0:"i");return[a,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],s=a.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=l[n]||"";s=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const o=l[n];return e[r]=i&&!o?void 0:(o||"").replace(/%2F/g,"/"),e}),{}),pathname:a,pathnameBase:s,pattern:e}}function E(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return o(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function T(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function P(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function $(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function A(e){let t=$(e);return t.map(((e,n)=>n===t.length-1?e.pathname:e.pathnameBase))}function R(e,t,n){let r,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=c(e):(r={...e},a(!r.pathname||!r.pathname.includes("?"),P("?","pathname","search",r)),a(!r.pathname||!r.pathname.includes("#"),P("#","pathname","hash",r)),a(!r.search||!r.search.includes("#"),P("#","search","hash",r)));let o,s=""===e||""===r.pathname,l=s?"/":r.pathname;if(null==l)o=n;else{let e=t.length-1;if(!i&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}o=e>=0?t[e]:"/"}let u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:n,search:r="",hash:i=""}="string"===typeof e?c(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:N(r),hash:M(i)}}(r,o),d=l&&"/"!==l&&l.endsWith("/"),h=(s||"."===l)&&n.endsWith("/");return u.pathname.endsWith("/")||!d&&!h||(u.pathname+="/"),u}var O=e=>e.join("/").replace(/\/\/+/g,"/"),z=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),N=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",M=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function L(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}var D=["POST","PUT","PATCH","DELETE"],I=(new Set(D),["GET",...D]);new Set(I),Symbol("ResetLoaderData");var F=e.createContext(null);F.displayName="DataRouter";var _=e.createContext(null);_.displayName="DataRouterState";var V=e.createContext({isTransitioning:!1});V.displayName="ViewTransition";var B=e.createContext(new Map);B.displayName="Fetchers";var U=e.createContext(null);U.displayName="Await";var H=e.createContext(null);H.displayName="Navigation";var W=e.createContext(null);W.displayName="Location";var q=e.createContext({outlet:null,matches:[],isDataRoute:!1});q.displayName="Route";var K=e.createContext(null);K.displayName="RouteError";function Q(){return null!=e.useContext(W)}function Y(){return a(Q(),"useLocation() may be used only in the context of a <Router> component."),e.useContext(W).location}var G="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function X(t){e.useContext(H).static||e.useLayoutEffect(t)}function J(){let{isDataRoute:t}=e.useContext(q);return t?function(){let{router:t}=se("useNavigate"),n=ue("useNavigate"),r=e.useRef(!1);X((()=>{r.current=!0}));let i=e.useCallback((async function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(r.current,G),r.current&&("number"===typeof e?t.navigate(e):await t.navigate(e,{fromRouteId:n,...i}))}),[t,n]);return i}():function(){a(Q(),"useNavigate() may be used only in the context of a <Router> component.");let t=e.useContext(F),{basename:n,navigator:r}=e.useContext(H),{matches:i}=e.useContext(q),{pathname:s}=Y(),l=JSON.stringify(A(i)),u=e.useRef(!1);X((()=>{u.current=!0}));let c=e.useCallback((function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o(u.current,G),!u.current)return;if("number"===typeof e)return void r.go(e);let a=R(e,JSON.parse(l),s,"path"===i.relative);null==t&&"/"!==n&&(a.pathname="/"===a.pathname?n:O([n,a.pathname])),(i.replace?r.replace:r.push)(a,i.state,i)}),[n,r,l,s,t]);return c}()}e.createContext(null);function Z(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:r}=e.useContext(q),{pathname:i}=Y(),a=JSON.stringify(A(r));return e.useMemo((()=>R(t,JSON.parse(a),i,"path"===n)),[t,a,i,n])}function ee(t,n,r,i){a(Q(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s,static:l}=e.useContext(H),{matches:u}=e.useContext(q),d=u[u.length-1],p=d?d.params:{},f=d?d.pathname:"/",m=d?d.pathnameBase:"/",g=d&&d.route;{let e=g&&g.path||"";he(f,!g||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let v,y=Y();if(n){let e="string"===typeof n?c(n):n;a("/"===m||e.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${e.pathname}" was given in the \`location\` prop.`),v=e}else v=y;let x=v.pathname||"/",b=x;if("/"!==m){let e=m.replace(/^\//,"").split("/");b="/"+x.replace(/^\//,"").split("/").slice(e.length).join("/")}let w=!l&&r&&r.matches&&r.matches.length>0?r.matches:h(t,{pathname:b});o(g||null!=w,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),o(null==w||void 0!==w[w.length-1].route.element||void 0!==w[w.length-1].route.Component||void 0!==w[w.length-1].route.lazy,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=ae(w&&w.map((e=>Object.assign({},e,{params:Object.assign({},p,e.params),pathname:O([m,s.encodeLocation?s.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?m:O([m,s.encodeLocation?s.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),u,r,i);return n&&S?e.createElement(W.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},S):S}function te(){let t=ce(),n=L(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},o={padding:"2px 4px",backgroundColor:i},s=null;return console.error("Error handled by React Router default ErrorBoundary:",t),s=e.createElement(e.Fragment,null,e.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),e.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",e.createElement("code",{style:o},"ErrorBoundary")," or"," ",e.createElement("code",{style:o},"errorElement")," prop on your route.")),e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),r?e.createElement("pre",{style:a},r):null,s)}var ne=e.createElement(te,null),re=class extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?e.createElement(q.Provider,{value:this.props.routeContext},e.createElement(K.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ie(t){let{routeContext:n,match:r,children:i}=t,a=e.useContext(F);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),e.createElement(q.Provider,{value:n},i)}function ae(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null==t){if(!r)return null;if(r.errors)t=r.matches;else{if(0!==n.length||r.initialized||!(r.matches.length>0))return null;t=r.matches}}let i=t,o=r?.errors;if(null!=o){let e=i.findIndex((e=>e.route.id&&void 0!==o?.[e.route.id]));a(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,e+1))}let s=!1,l=-1;if(r)for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(l=e),t.route.id){let{loaderData:e,errors:n}=r,a=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!n||void 0===n[t.route.id]);if(t.route.lazy||a){s=!0,i=l>=0?i.slice(0,l+1):[i[0]];break}}}return i.reduceRight(((t,a,u)=>{let c,d=!1,h=null,p=null;r&&(c=o&&a.route.id?o[a.route.id]:void 0,h=a.route.errorElement||ne,s&&(l<0&&0===u?(he("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):l===u&&(d=!0,p=a.route.hydrateFallbackElement||null)));let f=n.concat(i.slice(0,u+1)),m=()=>{let n;return n=c?h:d?p:a.route.Component?e.createElement(a.route.Component,null):a.route.element?a.route.element:t,e.createElement(ie,{match:a,routeContext:{outlet:t,matches:f,isDataRoute:null!=r},children:n})};return r&&(a.route.ErrorBoundary||a.route.errorElement||0===u)?e.createElement(re,{location:r.location,revalidation:r.revalidation,component:h,error:c,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()}),null)}function oe(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function se(t){let n=e.useContext(F);return a(n,oe(t)),n}function le(t){let n=e.useContext(_);return a(n,oe(t)),n}function ue(t){let n=function(t){let n=e.useContext(q);return a(n,oe(t)),n}(t),r=n.matches[n.matches.length-1];return a(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}function ce(){let t=e.useContext(K),n=le("useRouteError"),r=ue("useRouteError");return void 0!==t?t:n.errors?.[r]}var de={};function he(e,t,n){t||de[e]||(de[e]=!0,o(!1,n))}e.memo((function(e){let{routes:t,future:n,state:r}=e;return ee(t,void 0,r,n)}));function pe(e){a(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function fe(t){let{basename:n="/",children:r=null,location:i,navigationType:s="POP",navigator:l,static:u=!1}=t;a(!Q(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),h=e.useMemo((()=>({basename:d,navigator:l,static:u,future:{}})),[d,l,u]);"string"===typeof i&&(i=c(i));let{pathname:p="/",search:f="",hash:m="",state:g=null,key:v="default"}=i,y=e.useMemo((()=>{let e=T(p,d);return null==e?null:{location:{pathname:e,search:f,hash:m,state:g,key:v},navigationType:s}}),[d,p,f,m,g,v,s]);return o(null!=y,`<Router basename="${d}"> is not able to match the URL "${p}${f}${m}" because it does not start with the basename, so the <Router> won't render anything.`),null==y?null:e.createElement(H.Provider,{value:h},e.createElement(W.Provider,{children:r,value:y}))}function me(e){let{children:t,location:n}=e;return ee(ge(t),n)}e.Component;function ge(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[];return e.Children.forEach(t,((t,i)=>{if(!e.isValidElement(t))return;let o=[...n,i];if(t.type===e.Fragment)return void r.push.apply(r,ge(t.props.children,o));a(t.type===pe,`[${"string"===typeof t.type?t.type:t.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),a(!t.props.index||!t.props.children,"An index route cannot have child routes.");let s={id:t.props.id||o.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,hydrateFallbackElement:t.props.hydrateFallbackElement,HydrateFallback:t.props.HydrateFallback,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:!0===t.props.hasErrorBoundary||null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(s.children=ge(t.props.children,o)),r.push(s)})),r}var ve="get",ye="application/x-www-form-urlencoded";function xe(e){return null!=e&&"string"===typeof e.tagName}var be=null;var we=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Se(e){return null==e||we.has(e)?e:(o(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ye}"`),null)}function ke(e,t){let n,r,i,a,o;if(xe(s=e)&&"form"===s.tagName.toLowerCase()){let o=e.getAttribute("action");r=o?T(o,t):null,n=e.getAttribute("method")||ve,i=Se(e.getAttribute("enctype"))||ye,a=new FormData(e)}else if(function(e){return xe(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return xe(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let o=e.form;if(null==o)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||o.getAttribute("action");if(r=s?T(s,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||ve,i=Se(e.getAttribute("formenctype"))||Se(o.getAttribute("enctype"))||ye,a=new FormData(o,e),!function(){if(null===be)try{new FormData(document.createElement("form"),0),be=!1}catch(e){be=!0}return be}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";a.append(`${e}x`,"0"),a.append(`${e}y`,"0")}else t&&a.append(t,r)}}else{if(xe(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ve,r=null,i=ye,o=e}var s;return a&&"text/plain"===i&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}function je(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}async function Ce(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise((()=>{}))}}function Ee(e){return null!=e&&"string"===typeof e.page}function Te(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function Pe(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===a?t.filter(((e,t)=>o(e,t)||s(e,t))):"data"===a?t.filter(((t,a)=>{let l=r.routes[t.route.id];if(!l||!l.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0})):[]}function $e(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map((e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i})).flat(1),[...new Set(r)];var r}function Ae(e,t){let n=new Set,r=new Set(t);return e.reduce(((e,i)=>{if(t&&!Ee(i)&&"script"===i.as&&i.href&&r.has(i.href))return e;let a=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e}),[])}function Re(e){return{__html:e}}Symbol("SingleFetchRedirect");function Oe(e,t){let n="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return"/"===n.pathname?n.pathname="_root.data":t&&"/"===T(n.pathname,t)?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}e.Component;function ze(t){let{error:n,isOutsideRemixApp:r}=t;console.error(n);let i,a=e.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."\n        );\n      '}});if(L(n))return e.createElement(Ne,{title:"Unhandled Thrown Response!"},e.createElement("h1",{style:{fontSize:"24px"}},n.status," ",n.statusText),a);if(n instanceof Error)0;else{let e=null==n?"Unknown Error":"object"===typeof n&&"toString"in n?n.toString():JSON.stringify(n);new Error(e)}return e.createElement(Ne,{title:"Application Error!",isOutsideRemixApp:r},e.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),e.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},i.stack),a)}function Ne(t){let{title:n,renderScripts:r,isOutsideRemixApp:i,children:a}=t,{routeModules:o}=Fe();return o.root?.Layout&&!i?a:e.createElement("html",{lang:"en"},e.createElement("head",null,e.createElement("meta",{charSet:"utf-8"}),e.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),e.createElement("title",null,n)),e.createElement("body",null,e.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},a,r?e.createElement(qe,null):null)))}function Me(e){return!0===e}function Le(){let t=e.useContext(F);return je(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function De(){let t=e.useContext(_);return je(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Ie=e.createContext(void 0);function Fe(){let t=e.useContext(Ie);return je(t,"You must render this element inside a <HydratedRouter> element"),t}function _e(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Ve(e,t,n){if(n&&!We)return[e[0]];if(t){let n=e.findIndex((e=>void 0!==t[e.route.id]));return e.slice(0,n+1)}return e}function Be(t){let{page:n,...r}=t,{router:i}=Le(),a=e.useMemo((()=>h(i.routes,n,i.basename)),[i.routes,n,i.basename]);return a?e.createElement(He,{page:n,matches:a,...r}):null}function Ue(t){let{manifest:n,routeModules:r}=Fe(),[i,a]=e.useState([]);return e.useEffect((()=>{let e=!1;return async function(e,t,n){let r=await Promise.all(e.map((async e=>{let r=t.routes[e.route.id];if(r){let e=await Ce(r,n);return e.links?e.links():[]}return[]})));return Ae(r.flat(1).filter(Te).filter((e=>"stylesheet"===e.rel||"preload"===e.rel)).map((e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"})))}(t,n,r).then((t=>{e||a(t)})),()=>{e=!0}}),[t,n,r]),i}function He(t){let{page:n,matches:r,...i}=t,a=Y(),{manifest:o,routeModules:s}=Fe(),{basename:l}=Le(),{loaderData:u,matches:c}=De(),d=e.useMemo((()=>Pe(n,r,c,o,a,"data")),[n,r,c,o,a]),h=e.useMemo((()=>Pe(n,r,c,o,a,"assets")),[n,r,c,o,a]),p=e.useMemo((()=>{if(n===a.pathname+a.search+a.hash)return[];let e=new Set,t=!1;if(r.forEach((n=>{let r=o.routes[n.route.id];r&&r.hasLoader&&(!d.some((e=>e.route.id===n.route.id))&&n.route.id in u&&s[n.route.id]?.shouldRevalidate||r.hasClientLoader?t=!0:e.add(n.route.id))})),0===e.size)return[];let i=Oe(n,l);return t&&e.size>0&&i.searchParams.set("_routes",r.filter((t=>e.has(t.route.id))).map((e=>e.route.id)).join(",")),[i.pathname+i.search]}),[l,u,a,o,d,r,n,s]),f=e.useMemo((()=>$e(h,o)),[h,o]),m=Ue(h);return e.createElement(e.Fragment,null,p.map((t=>e.createElement("link",{key:t,rel:"prefetch",as:"fetch",href:t,...i}))),f.map((t=>e.createElement("link",{key:t,rel:"modulepreload",href:t,...i}))),m.map((t=>{let{key:n,link:r}=t;return e.createElement("link",{key:n,...r})})))}Ie.displayName="FrameworkContext";var We=!1;function qe(t){let{manifest:n,serverHandoffString:r,isSpaMode:i,ssr:a,renderMeta:o}=Fe(),{router:s,static:l,staticContext:u}=Le(),{matches:c}=De(),d=Me(a);o&&(o.didRenderScripts=!0);let p=Ve(c,null,i);e.useEffect((()=>{0}),[]);let f=e.useMemo((()=>{let i=u?`window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",a=l?`${n.hmr?.runtime?`import ${JSON.stringify(n.hmr.runtime)};`:""}${d?"":`import ${JSON.stringify(n.url)}`};\n${p.map(((e,t)=>{let r=`route${t}`,i=n.routes[e.route.id];je(i,`Route ${e.route.id} not found in manifest`);let{clientActionModule:a,clientLoaderModule:o,hydrateFallbackModule:s,module:l}=i,u=[...a?[{module:a,varName:`${r}_clientAction`}]:[],...o?[{module:o,varName:`${r}_clientLoader`}]:[],...s?[{module:s,varName:`${r}_HydrateFallback`}]:[],{module:l,varName:`${r}_main`}];return 1===u.length?`import * as ${r} from ${JSON.stringify(l)};`:[u.map((e=>`import * as ${e.varName} from "${e.module}";`)).join("\n"),`const ${r} = {${u.map((e=>`...${e.varName}`)).join(",")}};`].join("\n")})).join("\n")}\n  ${d?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let n=new Set(t.state.matches.map((e=>e.route.id))),r=t.state.location.pathname.split("/").filter(Boolean),i=["/"];for(r.pop();r.length>0;)i.push(`/${r.join("/")}`),r.pop();i.forEach((e=>{let r=h(t.routes,e,t.basename);r&&r.forEach((e=>n.add(e.route.id)))}));let a=[...n].reduce(((t,n)=>Object.assign(t,{[n]:e.routes[n]})),{});return{...e,routes:a}}(n,s),null,2)};`:""}\n  window.__reactRouterRouteModules = {${p.map(((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`)).join(",")}};\n\nimport(${JSON.stringify(n.entry.module)});`:" ";return e.createElement(e.Fragment,null,e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Re(i),type:void 0}),e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Re(a),type:"module",async:!0}))}),[]),m=We?[]:n.entry.imports.concat($e(p,n,{includeHydrateFallback:!0}));return We?null:e.createElement(e.Fragment,null,d?null:e.createElement("link",{rel:"modulepreload",href:n.url,crossOrigin:t.crossOrigin}),e.createElement("link",{rel:"modulepreload",href:n.entry.module,crossOrigin:t.crossOrigin}),[...new Set(g)].map((n=>e.createElement("link",{key:n,rel:"modulepreload",href:n,crossOrigin:t.crossOrigin}))),f);var g}function Ke(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach((t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)}))}}var Qe="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{Qe&&(window.__reactRouterVersion="7.3.0")}catch(US){}function Ye(t){let{basename:n,children:r,window:a}=t,o=e.useRef();null==o.current&&(o.current=i({window:a,v5Compat:!0}));let s=o.current,[l,u]=e.useState({action:s.action,location:s.location}),c=e.useCallback((t=>{e.startTransition((()=>u(t)))}),[u]);return e.useLayoutEffect((()=>s.listen(c)),[s,c]),e.createElement(fe,{basename:n,children:r,location:l.location,navigationType:l.action,navigator:s})}var Ge=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xe=e.forwardRef((function(t,n){let r,{onClick:i,discover:s="render",prefetch:l="none",relative:c,reloadDocument:d,replace:h,state:p,target:f,to:m,preventScrollReset:g,viewTransition:v,...y}=t,{basename:x}=e.useContext(H),b="string"===typeof m&&Ge.test(m),w=!1;if("string"===typeof m&&b&&(r=m,Qe))try{let e=new URL(window.location.href),t=m.startsWith("//")?new URL(e.protocol+m):new URL(m),n=T(t.pathname,x);t.origin===e.origin&&null!=n?m=n+t.search+t.hash:w=!0}catch(US){o(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let S=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(Q(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:i}=e.useContext(H),{hash:o,pathname:s,search:l}=Z(t,{relative:n}),u=s;return"/"!==r&&(u="/"===s?r:O([r,s])),i.createHref({pathname:u,search:l,hash:o})}(m,{relative:c}),[k,j,C]=function(t,n){let r=e.useContext(Ie),[i,a]=e.useState(!1),[o,s]=e.useState(!1),{onFocus:l,onBlur:u,onMouseEnter:c,onMouseLeave:d,onTouchStart:h}=n,p=e.useRef(null);e.useEffect((()=>{if("render"===t&&s(!0),"viewport"===t){let e=new IntersectionObserver((e=>{e.forEach((e=>{s(e.isIntersecting)}))}),{threshold:.5});return p.current&&e.observe(p.current),()=>{e.disconnect()}}}),[t]),e.useEffect((()=>{if(i){let e=setTimeout((()=>{s(!0)}),100);return()=>{clearTimeout(e)}}}),[i]);let f=()=>{a(!0)},m=()=>{a(!1),s(!1)};return r?"intent"!==t?[o,p,{}]:[o,p,{onFocus:_e(l,f),onBlur:_e(u,m),onMouseEnter:_e(c,f),onMouseLeave:_e(d,m),onTouchStart:_e(h,f)}]:[!1,p,{}]}(l,y),E=function(t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,viewTransition:s}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=J(),c=Y(),d=Z(t,{relative:o});return e.useCallback((e=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(e,n)){e.preventDefault();let n=void 0!==r?r:u(c)===u(d);l(t,{replace:n,state:i,preventScrollReset:a,relative:o,viewTransition:s})}}),[c,l,d,r,i,n,t,a,o,s])}(m,{replace:h,state:p,target:f,preventScrollReset:g,relative:c,viewTransition:v});let P=e.createElement("a",{...y,...C,href:r||S,onClick:w||d?i:function(e){i&&i(e),e.defaultPrevented||E(e)},ref:Ke(n,j),target:f,"data-discover":b||"render"!==s?void 0:"true"});return k&&!b?e.createElement(e.Fragment,null,P,e.createElement(Be,{page:S})):P}));Xe.displayName="Link";var Je=e.forwardRef((function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:l,to:u,viewTransition:c,children:d,...h}=t,p=Z(u,{relative:h.relative}),f=Y(),m=e.useContext(_),{navigator:g,basename:v}=e.useContext(H),y=null!=m&&function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.useContext(V);a(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=tt("useViewTransitionState"),o=Z(t,{relative:n.relative});if(!r.isTransitioning)return!1;let s=T(r.currentLocation.pathname,i)||r.currentLocation.pathname,l=T(r.nextLocation.pathname,i)||r.nextLocation.pathname;return null!=C(o.pathname,l)||null!=C(o.pathname,s)}(p)&&!0===c,x=g.encodeLocation?g.encodeLocation(p).pathname:p.pathname,b=f.pathname,w=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(b=b.toLowerCase(),w=w?w.toLowerCase():null,x=x.toLowerCase()),w&&v&&(w=T(w,v)||w);const S="/"!==x&&x.endsWith("/")?x.length-1:x.length;let k,j=b===x||!s&&b.startsWith(x)&&"/"===b.charAt(S),E=null!=w&&(w===x||!s&&w.startsWith(x)&&"/"===w.charAt(x.length)),P={isActive:j,isPending:E,isTransitioning:y},$=j?r:void 0;k="function"===typeof o?o(P):[o,j?"active":null,E?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let A="function"===typeof l?l(P):l;return e.createElement(Xe,{...h,"aria-current":$,className:k,ref:n,style:A,to:u,viewTransition:c},"function"===typeof d?d(P):d)}));Je.displayName="NavLink";var Ze=e.forwardRef(((t,n)=>{let{discover:r="render",fetcherKey:i,navigate:o,reloadDocument:s,replace:l,state:c,method:d=ve,action:h,onSubmit:p,relative:f,preventScrollReset:m,viewTransition:g,...v}=t,y=it(),x=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:r}=e.useContext(H),i=e.useContext(q);a(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),s={...Z(t||".",{relative:n})},l=Y();if(null==t){s.search=l.search;let e=new URLSearchParams(s.search),t=e.getAll("index"),n=t.some((e=>""===e));if(n){e.delete("index"),t.filter((e=>e)).forEach((t=>e.append("index",t)));let n=e.toString();s.search=n?`?${n}`:""}}t&&"."!==t||!o.route.index||(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index");"/"!==r&&(s.pathname="/"===s.pathname?r:O([r,s.pathname]));return u(s)}(h,{relative:f}),b="get"===d.toLowerCase()?"get":"post",w="string"===typeof h&&Ge.test(h);return e.createElement("form",{ref:n,method:b,action:x,onSubmit:s?p:e=>{if(p&&p(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||d;y(t||e.currentTarget,{fetcherKey:i,method:n,navigate:o,replace:l,state:c,relative:f,preventScrollReset:m,viewTransition:g})},...v,"data-discover":w||"render"!==r?void 0:"true"})}));function et(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tt(t){let n=e.useContext(F);return a(n,et(t)),n}Ze.displayName="Form";var nt=0,rt=()=>`__${String(++nt)}__`;function it(){let{router:t}=tt("useSubmit"),{basename:n}=e.useContext(H),r=ue("useRouteId");return e.useCallback((async function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:a,method:o,encType:s,formData:l,body:u}=ke(e,n);if(!1===i.navigate){let e=i.fetcherKey||rt();await t.fetch(e,r,i.action||a,{preventScrollReset:i.preventScrollReset,formData:l,body:u,formMethod:i.method||o,formEncType:i.encType||s,flushSync:i.flushSync})}else await t.navigate(i.action||a,{preventScrollReset:i.preventScrollReset,formData:l,body:u,formMethod:i.method||o,formEncType:i.encType||s,replace:i.replace,state:i.state,fromRouteId:r,flushSync:i.flushSync,viewTransition:i.viewTransition})}),[t,n,r])}new TextEncoder;var at=function(){return at=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},at.apply(this,arguments)};Object.create;function ot(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var st=n(324),lt=n.n(st),ut="-ms-",ct="-moz-",dt="-webkit-",ht="comm",pt="rule",ft="decl",mt="@keyframes",gt=Math.abs,vt=String.fromCharCode,yt=Object.assign;function xt(e){return e.trim()}function bt(e,t){return(e=t.exec(e))?e[0]:e}function wt(e,t,n){return e.replace(t,n)}function St(e,t,n){return e.indexOf(t,n)}function kt(e,t){return 0|e.charCodeAt(t)}function jt(e,t,n){return e.slice(t,n)}function Ct(e){return e.length}function Et(e){return e.length}function Tt(e,t){return t.push(e),e}function Pt(e,t){return e.filter((function(e){return!bt(e,t)}))}var $t=1,At=1,Rt=0,Ot=0,zt=0,Nt="";function Mt(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:$t,column:At,length:o,return:"",siblings:s}}function Lt(e,t){return yt(Mt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Dt(e){for(;e.root;)e=Lt(e.root,{children:[e]});Tt(e,e.siblings)}function It(){return zt=Ot>0?kt(Nt,--Ot):0,At--,10===zt&&(At=1,$t--),zt}function Ft(){return zt=Ot<Rt?kt(Nt,Ot++):0,At++,10===zt&&(At=1,$t++),zt}function _t(){return kt(Nt,Ot)}function Vt(){return Ot}function Bt(e,t){return jt(Nt,e,t)}function Ut(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ht(e){return $t=At=1,Rt=Ct(Nt=e),Ot=0,[]}function Wt(e){return Nt="",e}function qt(e){return xt(Bt(Ot-1,Yt(91===e?e+2:40===e?e+1:e)))}function Kt(e){for(;(zt=_t())&&zt<33;)Ft();return Ut(e)>2||Ut(zt)>3?"":" "}function Qt(e,t){for(;--t&&Ft()&&!(zt<48||zt>102||zt>57&&zt<65||zt>70&&zt<97););return Bt(e,Vt()+(t<6&&32==_t()&&32==Ft()))}function Yt(e){for(;Ft();)switch(zt){case e:return Ot;case 34:case 39:34!==e&&39!==e&&Yt(zt);break;case 40:41===e&&Yt(e);break;case 92:Ft()}return Ot}function Gt(e,t){for(;Ft()&&e+zt!==57&&(e+zt!==84||47!==_t()););return"/*"+Bt(t,Ot-1)+"*"+vt(47===e?e:Ft())}function Xt(e){for(;!Ut(_t());)Ft();return Bt(e,Ot)}function Jt(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Zt(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case ft:return e.return=e.return||e.value;case ht:return"";case mt:return e.return=e.value+"{"+Jt(e.children,r)+"}";case pt:if(!Ct(e.value=e.props.join(",")))return""}return Ct(n=Jt(e.children,r))?e.return=e.value+"{"+n+"}":""}function en(e,t,n){switch(function(e,t){return 45^kt(e,0)?(((t<<2^kt(e,0))<<2^kt(e,1))<<2^kt(e,2))<<2^kt(e,3):0}(e,t)){case 5103:return dt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return dt+e+e;case 4789:return ct+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return dt+e+ct+e+ut+e+e;case 5936:switch(kt(e,t+11)){case 114:return dt+e+ut+wt(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return dt+e+ut+wt(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return dt+e+ut+wt(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return dt+e+ut+e+e;case 6165:return dt+e+ut+"flex-"+e+e;case 5187:return dt+e+wt(e,/(\w+).+(:[^]+)/,dt+"box-$1$2"+ut+"flex-$1$2")+e;case 5443:return dt+e+ut+"flex-item-"+wt(e,/flex-|-self/g,"")+(bt(e,/flex-|baseline/)?"":ut+"grid-row-"+wt(e,/flex-|-self/g,""))+e;case 4675:return dt+e+ut+"flex-line-pack"+wt(e,/align-content|flex-|-self/g,"")+e;case 5548:return dt+e+ut+wt(e,"shrink","negative")+e;case 5292:return dt+e+ut+wt(e,"basis","preferred-size")+e;case 6060:return dt+"box-"+wt(e,"-grow","")+dt+e+ut+wt(e,"grow","positive")+e;case 4554:return dt+wt(e,/([^-])(transform)/g,"$1"+dt+"$2")+e;case 6187:return wt(wt(wt(e,/(zoom-|grab)/,dt+"$1"),/(image-set)/,dt+"$1"),e,"")+e;case 5495:case 3959:return wt(e,/(image-set\([^]*)/,dt+"$1$`$1");case 4968:return wt(wt(e,/(.+:)(flex-)?(.*)/,dt+"box-pack:$3"+ut+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+dt+e+e;case 4200:if(!bt(e,/flex-|baseline/))return ut+"grid-column-align"+jt(e,t)+e;break;case 2592:case 3360:return ut+wt(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,bt(e.props,/grid-\w+-end/)}))?~St(e+(n=n[t].value),"span",0)?e:ut+wt(e,"-start","")+e+ut+"grid-row-span:"+(~St(n,"span",0)?bt(n,/\d+/):+bt(n,/\d+/)-+bt(e,/\d+/))+";":ut+wt(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return bt(e.props,/grid-\w+-start/)}))?e:ut+wt(wt(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return wt(e,/(.+)-inline(.+)/,dt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ct(e)-1-t>6)switch(kt(e,t+1)){case 109:if(45!==kt(e,t+4))break;case 102:return wt(e,/(.+:)(.+)-([^]+)/,"$1"+dt+"$2-$3$1"+ct+(108==kt(e,t+3)?"$3":"$2-$3"))+e;case 115:return~St(e,"stretch",0)?en(wt(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return wt(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,i,a,o,s){return ut+n+":"+r+s+(i?ut+n+"-span:"+(a?o:+o-+r)+s:"")+e}));case 4949:if(121===kt(e,t+6))return wt(e,":",":"+dt)+e;break;case 6444:switch(kt(e,45===kt(e,14)?18:11)){case 120:return wt(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+dt+(45===kt(e,14)?"inline-":"")+"box$3$1"+dt+"$2$3$1"+ut+"$2box$3")+e;case 100:return wt(e,":",":"+ut)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return wt(e,"scroll-","scroll-snap-")+e}return e}function tn(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ft:return void(e.return=en(e.value,e.length,n));case mt:return Jt([Lt(e,{value:wt(e.value,"@","@"+dt)})],r);case pt:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(bt(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Dt(Lt(e,{props:[wt(t,/:(read-\w+)/,":-moz-$1")]})),Dt(Lt(e,{props:[t]})),yt(e,{props:Pt(n,r)});break;case"::placeholder":Dt(Lt(e,{props:[wt(t,/:(plac\w+)/,":"+dt+"input-$1")]})),Dt(Lt(e,{props:[wt(t,/:(plac\w+)/,":-moz-$1")]})),Dt(Lt(e,{props:[wt(t,/:(plac\w+)/,ut+"input-$1")]})),Dt(Lt(e,{props:[t]})),yt(e,{props:Pt(n,r)})}return""}))}}function nn(e){return Wt(rn("",null,null,null,[""],e=Ht(e),0,[0],e))}function rn(e,t,n,r,i,a,o,s,l){for(var u=0,c=0,d=o,h=0,p=0,f=0,m=1,g=1,v=1,y=0,x="",b=i,w=a,S=r,k=x;g;)switch(f=y,y=Ft()){case 40:if(108!=f&&58==kt(k,d-1)){-1!=St(k+=wt(qt(y),"&","&\f"),"&\f",gt(u?s[u-1]:0))&&(v=-1);break}case 34:case 39:case 91:k+=qt(y);break;case 9:case 10:case 13:case 32:k+=Kt(f);break;case 92:k+=Qt(Vt()-1,7);continue;case 47:switch(_t()){case 42:case 47:Tt(on(Gt(Ft(),Vt()),t,n,l),l);break;default:k+="/"}break;case 123*m:s[u++]=Ct(k)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+c:-1==v&&(k=wt(k,/\f/g,"")),p>0&&Ct(k)-d&&Tt(p>32?sn(k+";",r,n,d-1,l):sn(wt(k," ","")+";",r,n,d-2,l),l);break;case 59:k+=";";default:if(Tt(S=an(k,t,n,u,c,i,s,x,b=[],w=[],d,a),a),123===y)if(0===c)rn(k,t,S,S,b,a,d,s,w);else switch(99===h&&110===kt(k,3)?100:h){case 100:case 108:case 109:case 115:rn(e,S,S,r&&Tt(an(e,S,S,0,0,i,s,x,i,b=[],d,w),w),i,w,d,s,r?b:w);break;default:rn(k,S,S,S,[""],w,0,s,w)}}u=c=p=0,m=v=1,x=k="",d=o;break;case 58:d=1+Ct(k),p=f;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==It())continue;switch(k+=vt(y),y*m){case 38:v=c>0?1:(k+="\f",-1);break;case 44:s[u++]=(Ct(k)-1)*v,v=1;break;case 64:45===_t()&&(k+=qt(Ft())),h=_t(),c=d=Ct(x=k+=Xt(Vt())),y++;break;case 45:45===f&&2==Ct(k)&&(m=0)}}return a}function an(e,t,n,r,i,a,o,s,l,u,c,d){for(var h=i-1,p=0===i?a:[""],f=Et(p),m=0,g=0,v=0;m<r;++m)for(var y=0,x=jt(e,h+1,h=gt(g=o[m])),b=e;y<f;++y)(b=xt(g>0?p[y]+" "+x:wt(x,/&\f/g,p[y])))&&(l[v++]=b);return Mt(e,t,n,0===i?pt:s,l,u,c,d)}function on(e,t,n,r){return Mt(e,t,n,ht,vt(zt),jt(e,2,-2),0,r)}function sn(e,t,n,r,i){return Mt(e,t,n,ft,jt(e,0,r),jt(e,r+1,-1),r,i)}var ln={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},un="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/visualdsa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/visualdsa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/visualdsa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",cn="active",dn="data-styled-version",hn="6.1.16",pn="/*!sc*/\n",fn="undefined"!=typeof window&&"HTMLElement"in window,mn=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/visualdsa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/visualdsa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/visualdsa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/visualdsa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/visualdsa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/visualdsa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/visualdsa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/visualdsa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/visualdsa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/visualdsa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),gn={},vn=(new Set,Object.freeze([])),yn=Object.freeze({});function xn(e,t,n){return void 0===n&&(n=yn),e.theme!==n.theme&&e.theme||t||n.theme}var bn=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),wn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Sn=/(^-|-$)/g;function kn(e){return e.replace(wn,"-").replace(Sn,"")}var jn=/(a)(d)/gi,Cn=function(e){return String.fromCharCode(e+(e>25?39:97))};function En(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Cn(t%52)+n;return(Cn(t%52)+n).replace(jn,"$1-$2")}var Tn,Pn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},$n=function(e){return Pn(5381,e)};function An(e){return En($n(e)>>>0)}function Rn(e){return e.displayName||e.name||"Component"}function On(e){return"string"==typeof e&&!0}var zn="function"==typeof Symbol&&Symbol.for,Nn=zn?Symbol.for("react.memo"):60115,Mn=zn?Symbol.for("react.forward_ref"):60112,Ln={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Dn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},In={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Fn=((Tn={})[Mn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tn[Nn]=In,Tn);function _n(e){return("type"in(t=e)&&t.type.$$typeof)===Nn?In:"$$typeof"in e?Fn[e.$$typeof]:Ln;var t}var Vn=Object.defineProperty,Bn=Object.getOwnPropertyNames,Un=Object.getOwnPropertySymbols,Hn=Object.getOwnPropertyDescriptor,Wn=Object.getPrototypeOf,qn=Object.prototype;function Kn(e,t,n){if("string"!=typeof t){if(qn){var r=Wn(t);r&&r!==qn&&Kn(e,r,n)}var i=Bn(t);Un&&(i=i.concat(Un(t)));for(var a=_n(e),o=_n(t),s=0;s<i.length;++s){var l=i[s];if(!(l in Dn||n&&n[l]||o&&l in o||a&&l in a)){var u=Hn(t,l);try{Vn(e,l,u)}catch(e){}}}}return e}function Qn(e){return"function"==typeof e}function Yn(e){return"object"==typeof e&&"styledComponentId"in e}function Gn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Xn(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Jn(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Zn(e,t,n){if(void 0===n&&(n=!1),!n&&!Jn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Zn(e[r],t[r]);else if(Jn(t))for(var r in t)e[r]=Zn(e[r],t[r]);return e}function er(e,t){Object.defineProperty(e,"toString",{value:t})}function tr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var nr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw tr(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=(a=0,t.length);a<s;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+="".concat(this.tag.getRule(a)).concat(pn);return t},e}(),rr=new Map,ir=new Map,ar=1,or=function(e){if(rr.has(e))return rr.get(e);for(;ir.has(ar);)ar++;var t=ar++;return rr.set(e,t),ir.set(t,e),t},sr=function(e,t){ar=t+1,rr.set(e,t),ir.set(t,e)},lr="style[".concat(un,"][").concat(dn,'="').concat(hn,'"]'),ur=new RegExp("^".concat(un,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),cr=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},dr=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(pn),i=[],a=0,o=r.length;a<o;a++){var s=r[a].trim();if(s){var l=s.match(ur);if(l){var u=0|parseInt(l[1],10),c=l[2];0!==u&&(sr(c,u),cr(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}},hr=function(e){for(var t=document.querySelectorAll(lr),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(un)!==cn&&(dr(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function pr(){return n.nc}var fr=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(un,"]")));return t[t.length-1]}(n),a=void 0!==i?i.nextSibling:null;r.setAttribute(un,cn),r.setAttribute(dn,hn);var o=pr();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},mr=function(){function e(e){this.element=fr(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw tr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),gr=function(){function e(e){this.element=fr(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),vr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),yr=fn,xr={isServer:!fn,useCSSOMInjection:!mn},br=function(){function e(e,t,n){void 0===e&&(e=yn),void 0===t&&(t={});var r=this;this.options=at(at({},xr),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&fn&&yr&&(yr=!1,hr(this)),er(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return ir.get(e)}(n);if(void 0===i)return"continue";var a=e.names.get(i),o=t.getGroup(n);if(void 0===a||!a.size||0===o.length)return"continue";var s="".concat(un,".g").concat(n,'[id="').concat(i,'"]'),l="";void 0!==a&&a.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),r+="".concat(o).concat(s,'{content:"').concat(l,'"}').concat(pn)},a=0;a<n;a++)i(a);return r}(r)}))}return e.registerId=function(e){return or(e)},e.prototype.rehydrate=function(){!this.server&&fn&&hr(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(at(at({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new vr(n):t?new mr(n):new gr(n)}(this.options),new nr(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(or(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(or(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(or(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),wr=/&/g,Sr=/^\s*\/\/.*$/gm;function kr(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=kr(e.children,t)),e}))}function jr(e){var t,n,r,i=void 0===e?yn:e,a=i.options,o=void 0===a?yn:a,s=i.plugins,l=void 0===s?vn:s,u=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},c=l.slice();c.push((function(e){e.type===pt&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(wr,n).replace(r,u))})),o.prefix&&c.push(tn),c.push(Zt);var d=function(e,i,a,s){void 0===i&&(i=""),void 0===a&&(a=""),void 0===s&&(s="&"),t=s,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(Sr,""),u=nn(a||i?"".concat(a," ").concat(i," { ").concat(l," }"):l);o.namespace&&(u=kr(u,o.namespace));var d,h=[];return Jt(u,function(e){var t=Et(e);return function(n,r,i,a){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,a)||"";return o}}(c.concat((d=function(e){return h.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),h};return d.hash=l.length?l.reduce((function(e,t){return t.name||tr(15),Pn(e,t.name)}),5381).toString():"",d}var Cr=new br,Er=jr(),Tr=e.createContext({shouldForwardProp:void 0,styleSheet:Cr,stylis:Er}),Pr=(Tr.Consumer,e.createContext(void 0));function $r(){return(0,e.useContext)(Tr)}function Ar(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],i=n[1],a=$r().styleSheet,o=(0,e.useMemo)((function(){var e=a;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,a]),s=(0,e.useMemo)((function(){return jr({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})}),[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)((function(){lt()(r,t.stylisPlugins)||i(t.stylisPlugins)}),[t.stylisPlugins]);var l=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:o,stylis:s}}),[t.shouldForwardProp,o,s]);return e.createElement(Tr.Provider,{value:l},e.createElement(Pr.Provider,{value:s},t.children))}var Rr=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Er);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,er(this,(function(){throw tr(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Er),this.name+e.hash},e}(),Or=function(e){return e>="A"&&e<="Z"};function zr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Or(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Nr=function(e){return null==e||!1===e||""===e},Mr=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!Nr(a)&&(Array.isArray(a)&&a.isCss||Qn(a)?r.push("".concat(zr(i),":"),a,";"):Jn(a)?r.push.apply(r,ot(ot(["".concat(i," {")],Mr(a),!1),["}"],!1)):r.push("".concat(zr(i),": ").concat((t=i,null==(n=a)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in ln||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Lr(e,t,n,r){return Nr(e)?[]:Yn(e)?[".".concat(e.styledComponentId)]:Qn(e)?!Qn(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:Lr(e(t),t,n,r):e instanceof Rr?n?(e.inject(n,r),[e.getName(r)]):[e]:Jn(e)?Mr(e):Array.isArray(e)?Array.prototype.concat.apply(vn,e.map((function(e){return Lr(e,t,n,r)}))):[e.toString()];var i}function Dr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Qn(n)&&!Yn(n))return!1}return!0}var Ir=$n(hn),Fr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Dr(e),this.componentId=t,this.baseHash=Pn(Ir,t),this.baseStyle=n,br.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Gn(r,this.staticRulesId);else{var i=Xn(Lr(this.rules,e,t,n)),a=En(Pn(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=n(i,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=Gn(r,a),this.staticRulesId=a}else{for(var s=Pn(this.baseHash,n.hash),l="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)l+=c;else if(c){var d=Xn(Lr(c,e,t,n));s=Pn(s,d+u),l+=d}}if(l){var h=En(s>>>0);t.hasNameForId(this.componentId,h)||t.insertRules(this.componentId,h,n(l,".".concat(h),void 0,this.componentId)),r=Gn(r,h)}}return r},e}(),_r=e.createContext(void 0);_r.Consumer;var Vr={};new Set;function Br(t,n,r){var i=Yn(t),a=t,o=!On(t),s=n.attrs,l=void 0===s?vn:s,u=n.componentId,c=void 0===u?function(e,t){var n="string"!=typeof e?"sc":kn(e);Vr[n]=(Vr[n]||0)+1;var r="".concat(n,"-").concat(An(hn+n+Vr[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):u,d=n.displayName,h=void 0===d?function(e){return On(e)?"styled.".concat(e):"Styled(".concat(Rn(e),")")}(t):d,p=n.displayName&&n.componentId?"".concat(kn(n.displayName),"-").concat(n.componentId):n.componentId||c,f=i&&a.attrs?a.attrs.concat(l).filter(Boolean):l,m=n.shouldForwardProp;if(i&&a.shouldForwardProp){var g=a.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;m=function(e,t){return g(e,t)&&v(e,t)}}else m=g}var y=new Fr(r,p,i?a.componentStyle:void 0);function x(t,n){return function(t,n,r){var i=t.attrs,a=t.componentStyle,o=t.defaultProps,s=t.foldedComponentIds,l=t.styledComponentId,u=t.target,c=e.useContext(_r),d=$r(),h=t.shouldForwardProp||d.shouldForwardProp,p=xn(n,c,o)||yn,f=function(e,t,n){for(var r,i=at(at({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var o=Qn(r=e[a])?r(i):r;for(var s in o)i[s]="className"===s?Gn(i[s],o[s]):"style"===s?at(at({},i[s]),o[s]):o[s]}return t.className&&(i.className=Gn(i.className,t.className)),i}(i,n,p),m=f.as||u,g={};for(var v in f)void 0===f[v]||"$"===v[0]||"as"===v||"theme"===v&&f.theme===p||("forwardedAs"===v?g.as=f.forwardedAs:h&&!h(v,m)||(g[v]=f[v]));var y=function(e,t){var n=$r();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(a,f),x=Gn(s,l);return y&&(x+=" "+y),f.className&&(x+=" "+f.className),g[On(m)&&!bn.has(m)?"class":"className"]=x,r&&(g.ref=r),(0,e.createElement)(m,g)}(b,t,n)}x.displayName=h;var b=e.forwardRef(x);return b.attrs=f,b.componentStyle=y,b.displayName=h,b.shouldForwardProp=m,b.foldedComponentIds=i?Gn(a.foldedComponentIds,a.styledComponentId):"",b.styledComponentId=p,b.target=i?a.target:t,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)Zn(e,i[r],!0);return e}({},a.defaultProps,e):e}}),er(b,(function(){return".".concat(b.styledComponentId)})),o&&Kn(b,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function Ur(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Hr=function(e){return Object.assign(e,{isCss:!0})};function Wr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Qn(e)||Jn(e))return Hr(Lr(Ur(vn,ot([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Lr(r):Hr(Lr(Ur(r,t)))}function qr(e,t,n){if(void 0===n&&(n=yn),!t)throw tr(1,t);var r=function(r){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,Wr.apply(void 0,ot([r],i,!1)))};return r.attrs=function(r){return qr(e,t,at(at({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return qr(e,t,at(at({},n),r))},r}var Kr=function(e){return qr(Br,e)},Qr=Kr;bn.forEach((function(e){Qr[e]=Kr(e)}));var Yr=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Dr(e),br.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(Xn(Lr(this.rules,t,n,r)),""),a=this.componentId+e;n.insertRules(a,a,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&br.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=pr(),r=Xn([n&&'nonce="'.concat(n,'"'),"".concat(un,'="true"'),"".concat(dn,'="').concat(hn,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw tr(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw tr(2);var r=t.instance.toString();if(!r)return[];var i=((n={})[un]="",n[dn]=hn,n.dangerouslySetInnerHTML={__html:r},n),a=pr();return a&&(i.nonce=a),[e.createElement("style",at({},i,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new br({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw tr(2);return e.createElement(Ar,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw tr(3)}})(),"__sc-".concat(un,"__");const Gr=(function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=Wr.apply(void 0,ot([t],n,!1)),a="sc-global-".concat(An(JSON.stringify(i))),o=new Yr(i,a),s=function(t){var n=$r(),r=e.useContext(_r),i=e.useRef(n.styleSheet.allocateGSInstance(a)).current;return n.styleSheet.server&&l(i,t,n.styleSheet,r,n.stylis),e.useLayoutEffect((function(){if(!n.styleSheet.server)return l(i,t,n.styleSheet,r,n.stylis),function(){return o.removeStyles(i,n.styleSheet)}}),[i,t,n.styleSheet,r,n.stylis]),null};function l(e,t,n,r,i){if(o.isStatic)o.renderStyles(e,gn,n,i);else{var a=at(at({},t),{theme:xn(t,r,s.defaultProps)});o.renderStyles(e,a,n,i)}}return e.memo(s)})`
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
`;var Xr=n(579);const Jr=Qr.nav`
  background-color: var(--surface);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
`,Zr=Qr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`,ei=Qr(Je)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,ti=Qr.div`
  display: flex;
  gap: 2rem;
`,ni=Qr(Je)`
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
`,ri=()=>(0,Xr.jsx)(Jr,{children:(0,Xr.jsxs)(Zr,{children:[(0,Xr.jsxs)(ei,{to:"/",children:[(0,Xr.jsx)("span",{children:"DSA"}),(0,Xr.jsx)("span",{style:{fontWeight:400},children:"Visualizer"})]}),(0,Xr.jsxs)(ti,{children:[(0,Xr.jsx)(ni,{to:"/",end:!0,children:"Home"}),(0,Xr.jsx)(ni,{to:"/data-structures",children:"Data Structures"}),(0,Xr.jsx)(ni,{to:"/algorithms",children:"Algorithms"})]})]})});function ii(e,t){-1===e.indexOf(t)&&e.push(t)}function ai(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const oi=e=>e;let si=oi,li=oi;const ui=!1,ci=!1;function di(e){let t;return()=>(void 0===t&&(t=e()),t)}const hi=(e,t,n)=>{const r=t-e;return 0===r?1:(n-e)/r};class pi{constructor(){this.subscriptions=[]}add(e){return ii(this.subscriptions,e),()=>ai(this.subscriptions,e)}notify(e,t,n){const r=this.subscriptions.length;if(r)if(1===r)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){const r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const fi=e=>1e3*e,mi=e=>e/1e3;function gi(e,t){return t?e*(1e3/t):0}new Set;function vi(e){if("undefined"===typeof Proxy)return e;const t=new Map;return new Proxy((function(){return e(...arguments)}),{get:(n,r)=>"create"===r?e:(t.has(r)||t.set(r,e(r)),t.get(r))})}function yi(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}function xi(e){const t=[{},{}];return null===e||void 0===e||e.values.forEach(((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()})),t}function bi(e,t,n,r){if("function"===typeof t){const[i,a]=xi(r);t=t(void 0!==n?n:e.custom,i,a)}if("string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t){const[i,a]=xi(r);t=t(void 0!==n?n:e.custom,i,a)}return t}function wi(e,t,n){const r=e.getProps();return bi(r,t,void 0!==n?n:r.custom,e)}const Si=di((()=>void 0!==window.ScrollTimeline));class ki{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map((e=>"finished"in e?e.finished:e)))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=t}attachTimeline(e,t){const n=this.animations.map((n=>Si()&&n.attachTimeline?n.attachTimeline(e):"function"===typeof t?t(n):void 0));return()=>{n.forEach(((e,t)=>{e&&e(),this.animations[t].stop()}))}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach((t=>t[e]()))}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class ji extends ki{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function Ci(e,t){return e?e[t]||e.default||e:void 0}const Ei=2e4;function Ti(e){let t=0;let n=e.next(t);for(;!n.done&&t<Ei;)t+=50,n=e.next(t);return t>=Ei?1/0:t}function Pi(e){return"function"===typeof e}function $i(e,t){e.timeline=t,e.onfinish=null}const Ai=e=>Array.isArray(e)&&"number"===typeof e[0],Ri={linearEasing:void 0};function Oi(e,t){const n=di(e);return()=>{var e;return null!==(e=Ri[t])&&void 0!==e?e:n()}}const zi=Oi((()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(US){return!1}return!0}),"linearEasing"),Ni=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,r="";const i=Math.max(Math.round(t/n),2);for(let a=0;a<i;a++)r+=e(hi(0,i-1,a))+", ";return`linear(${r.substring(0,r.length-2)})`};function Mi(e){return Boolean("function"===typeof e&&zi()||!e||"string"===typeof e&&(e in Di||zi())||Ai(e)||Array.isArray(e)&&e.every(Mi))}const Li=e=>{let[t,n,r,i]=e;return`cubic-bezier(${t}, ${n}, ${r}, ${i})`},Di={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Li([0,.65,.55,1]),circOut:Li([.55,0,1,.45]),backIn:Li([.31,.01,.66,-.59]),backOut:Li([.33,1.53,.69,.99])};function Ii(e,t){return e?"function"===typeof e&&zi()?Ni(e,t):Ai(e)?Li(e):Array.isArray(e)?e.map((e=>Ii(e,t)||Di.easeOut)):Di[e]:void 0}const Fi=["read","resolveKeyframes","update","preRender","render","postRender"],_i={value:null,addProjectionMetrics:null};function Vi(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Fi.reduce(((e,n)=>(e[n]=function(e,t){let n=new Set,r=new Set,i=!1,a=!1;const o=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1},l=0;function u(t){o.has(t)&&(c.schedule(t),e()),l++,t(s)}const c={schedule:function(e){const t=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&i?n:r;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&o.add(e),t.has(e)||t.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{s=e,i?a=!0:(i=!0,[n,r]=[r,n],n.forEach(u),t&&_i.value&&_i.value.frameloop[t].push(l),l=0,n.clear(),i=!1,a&&(a=!1,c.process(e)))}};return c}(a,t?n:void 0),e)),{}),{read:s,resolveKeyframes:l,update:u,preRender:c,render:d,postRender:h}=o,p=()=>{const a=ci?i.timestamp:performance.now();n=!1,ci||(i.delta=r?1e3/60:Math.max(Math.min(a-i.timestamp,40),1)),i.timestamp=a,i.isProcessing=!0,s.process(i),l.process(i),u.process(i),c.process(i),d.process(i),h.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(p))},f=Fi.reduce(((t,a)=>{const s=o[a];return t[a]=function(t){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n||(n=!0,r=!0,i.isProcessing||e(p)),s.schedule(t,a,o)},t}),{});return{schedule:f,cancel:e=>{for(let t=0;t<Fi.length;t++)o[Fi[t]].cancel(e)},state:i,steps:o}}const{schedule:Bi,cancel:Ui,state:Hi,steps:Wi}=Vi("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:oi,!0),{schedule:qi,cancel:Ki}=Vi(queueMicrotask,!1);let Qi;function Yi(){Qi=void 0}const Gi={now:()=>(void 0===Qi&&Gi.set(Hi.isProcessing||ci?Hi.timestamp:performance.now()),Qi),set:e=>{Qi=e,queueMicrotask(Yi)}},Xi={x:!1,y:!1};function Ji(){return Xi.x||Xi.y}function Zi(e,t){const n=function(e,t,n){var r;if(e instanceof EventTarget)return[e];if("string"===typeof e){let i=document;t&&(i=t.current);const a=null!==(r=null===n||void 0===n?void 0:n[e])&&void 0!==r?r:i.querySelectorAll(e);return a?Array.from(a):[]}return Array.from(e)}(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function ea(e){return!("touch"===e.pointerType||Ji())}function ta(e,t){const n=`${t}PointerCapture`;if(e.target instanceof Element&&n in e.target&&void 0!==e.pointerId)try{e.target[n](e.pointerId)}catch(US){}}const na=(e,t)=>!!t&&(e===t||na(e,t.parentElement)),ra=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary,ia=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);const aa=new WeakSet;function oa(e){return t=>{"Enter"===t.key&&e(t)}}function sa(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}function la(e){return ra(e)&&!Ji()}function ua(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[r,i,a]=Zi(e,n),o=e=>{const n=e.currentTarget;if(!n||!la(e)||aa.has(n))return;aa.add(n),ta(e,"set");const r=t(n,e),a=(e,t)=>{n.removeEventListener("pointerup",o),n.removeEventListener("pointercancel",s),ta(e,"release"),la(e)&&aa.has(n)&&(aa.delete(n),"function"===typeof r&&r(e,{success:t}))},o=e=>{const t=!!e.isTrusted&&(r=e,i=n instanceof Element?n.getBoundingClientRect():{left:0,top:0,right:window.innerWidth,bottom:window.innerHeight},r.clientX<i.left||r.clientX>i.right||r.clientY<i.top||r.clientY>i.bottom);var r,i;a(e,!t&&(!(n instanceof Element)||na(n,e.target)))},s=e=>{a(e,!1)};n.addEventListener("pointerup",o,i),n.addEventListener("pointercancel",s,i),n.addEventListener("lostpointercapture",s,i)};return r.forEach((e=>{let t=!1;var r;(e=n.useGlobalTarget?window:e)instanceof HTMLElement&&(t=!0,r=e,ia.has(r.tagName)||-1!==r.tabIndex||null!==e.getAttribute("tabindex")||(e.tabIndex=0)),e.addEventListener("pointerdown",o,i),t&&e.addEventListener("focus",(e=>((e,t)=>{const n=e.currentTarget;if(!n)return;const r=oa((()=>{if(aa.has(n))return;sa(n,"down");const e=oa((()=>{sa(n,"up")}));n.addEventListener("keyup",e,t),n.addEventListener("blur",(()=>sa(n,"cancel")),t)}));n.addEventListener("keydown",r,t),n.addEventListener("blur",(()=>n.removeEventListener("keydown",r)),t)})(e,i)),i)})),a}const ca={layout:0,mainThread:0,waapi:0};const da={current:void 0};class ha{constructor(e){var t=this;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.version="12.5.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const r=Gi.now();t.updatedAt!==r&&t.setPrevFrameValue(),t.prev=t.current,t.setCurrent(e),t.current!==t.prev&&t.events.change&&t.events.change.notify(t.current),n&&t.events.renderRequest&&t.events.renderRequest.notify(t.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){var t;this.current=e,this.updatedAt=Gi.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=(t=this.current,!isNaN(parseFloat(t))))}setPrevFrameValue(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.current;this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new pi);const n=this.events[e].add(t);return"change"===e?()=>{n(),Bi.read((()=>{this.events.change.getSize()||this.stop()}))}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return da.current&&da.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=Gi.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||e-this.updatedAt>30)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,30);return gi(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise((t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function pa(e,t){return new ha(e,t)}const fa=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ma=new Set(fa),ga=new Set(["width","height","top","left","right","bottom",...fa]),va=e=>Array.isArray(e),ya=e=>va(e)?e[e.length-1]||0:e;function xa(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,pa(n))}const ba=e=>Boolean(e&&e.getVelocity);function wa(e,t){const n=e.getValue("willChange");if(r=n,Boolean(ba(r)&&r.add))return n.add(t);var r}const Sa=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),ka="data-"+Sa("framerAppearId");function ja(e){return e.props[ka]}const Ca=!1,Ea=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function Ta(e,t,n,r){if(e===t&&n===r)return oi;const i=t=>function(e,t,n,r,i){let a,o,s=0;do{o=t+(n-t)/2,a=Ea(o,r,i)-e,a>0?n=o:t=o}while(Math.abs(a)>1e-7&&++s<12);return o}(t,0,1,e,n);return e=>0===e||1===e?e:Ea(i(e),t,r)}const Pa=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,$a=e=>t=>1-e(1-t),Aa=Ta(.33,1.53,.69,.99),Ra=$a(Aa),Oa=Pa(Ra),za=e=>(e*=2)<1?.5*Ra(e):.5*(2-Math.pow(2,-10*(e-1))),Na=e=>1-Math.sin(Math.acos(e)),Ma=$a(Na),La=Pa(Na),Da=e=>/^0[^.\s]+$/u.test(e);const Ia=(e,t,n)=>n>t?t:n<e?e:n,Fa={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},_a={...Fa,transform:e=>Ia(0,1,e)},Va={...Fa,default:1},Ba=e=>Math.round(1e5*e)/1e5,Ua=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;const Ha=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Wa=(e,t)=>n=>Boolean("string"===typeof n&&Ha.test(n)&&n.startsWith(e)||t&&!function(e){return null==e}(n)&&Object.prototype.hasOwnProperty.call(n,t)),qa=(e,t,n)=>r=>{if("string"!==typeof r)return r;const[i,a,o,s]=r.match(Ua);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:void 0!==s?parseFloat(s):1}},Ka={...Fa,transform:e=>Math.round((e=>Ia(0,255,e))(e))},Qa={test:Wa("rgb","red"),parse:qa("red","green","blue"),transform:e=>{let{red:t,green:n,blue:r,alpha:i=1}=e;return"rgba("+Ka.transform(t)+", "+Ka.transform(n)+", "+Ka.transform(r)+", "+Ba(_a.transform(i))+")"}};const Ya={test:Wa("#"),parse:function(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}},transform:Qa.transform},Ga=e=>({test:t=>"string"===typeof t&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),Xa=Ga("deg"),Ja=Ga("%"),Za=Ga("px"),eo=Ga("vh"),to=Ga("vw"),no={...Ja,parse:e=>Ja.parse(e)/100,transform:e=>Ja.transform(100*e)},ro={test:Wa("hsl","hue"),parse:qa("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:n,lightness:r,alpha:i=1}=e;return"hsla("+Math.round(t)+", "+Ja.transform(Ba(n))+", "+Ja.transform(Ba(r))+", "+Ba(_a.transform(i))+")"}},io={test:e=>Qa.test(e)||Ya.test(e)||ro.test(e),parse:e=>Qa.test(e)?Qa.parse(e):ro.test(e)?ro.parse(e):Ya.parse(e),transform:e=>"string"===typeof e?e:e.hasOwnProperty("red")?Qa.transform(e):ro.transform(e)},ao=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;const oo="number",so="color",lo=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function uo(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let a=0;const o=t.replace(lo,(e=>(io.test(e)?(r.color.push(a),i.push(so),n.push(io.parse(e))):e.startsWith("var(")?(r.var.push(a),i.push("var"),n.push(e)):(r.number.push(a),i.push(oo),n.push(parseFloat(e))),++a,"${}"))).split("${}");return{values:n,split:o,indexes:r,types:i}}function co(e){return uo(e).values}function ho(e){const{split:t,types:n}=uo(e),r=t.length;return e=>{let i="";for(let a=0;a<r;a++)if(i+=t[a],void 0!==e[a]){const t=n[a];i+=t===oo?Ba(e[a]):t===so?io.transform(e[a]):e[a]}return i}}const po=e=>"number"===typeof e?0:e;const fo={test:function(e){var t,n;return isNaN(e)&&"string"===typeof e&&((null===(t=e.match(Ua))||void 0===t?void 0:t.length)||0)+((null===(n=e.match(ao))||void 0===n?void 0:n.length)||0)>0},parse:co,createTransformer:ho,getAnimatableNone:function(e){const t=co(e);return ho(e)(t.map(po))}},mo=new Set(["brightness","contrast","saturate","opacity"]);function go(e){const[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[r]=n.match(Ua)||[];if(!r)return e;const i=n.replace(r,"");let a=mo.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+i+")"}const vo=/\b([a-z-]*)\(.*?\)/gu,yo={...fo,getAnimatableNone:e=>{const t=e.match(vo);return t?t.map(go).join(" "):e}},xo={borderWidth:Za,borderTopWidth:Za,borderRightWidth:Za,borderBottomWidth:Za,borderLeftWidth:Za,borderRadius:Za,radius:Za,borderTopLeftRadius:Za,borderTopRightRadius:Za,borderBottomRightRadius:Za,borderBottomLeftRadius:Za,width:Za,maxWidth:Za,height:Za,maxHeight:Za,top:Za,right:Za,bottom:Za,left:Za,padding:Za,paddingTop:Za,paddingRight:Za,paddingBottom:Za,paddingLeft:Za,margin:Za,marginTop:Za,marginRight:Za,marginBottom:Za,marginLeft:Za,backgroundPositionX:Za,backgroundPositionY:Za},bo={rotate:Xa,rotateX:Xa,rotateY:Xa,rotateZ:Xa,scale:Va,scaleX:Va,scaleY:Va,scaleZ:Va,skew:Xa,skewX:Xa,skewY:Xa,distance:Za,translateX:Za,translateY:Za,translateZ:Za,x:Za,y:Za,z:Za,perspective:Za,transformPerspective:Za,opacity:_a,originX:no,originY:no,originZ:Za},wo={...Fa,transform:Math.round},So={...xo,...bo,zIndex:wo,size:Za,fillOpacity:_a,strokeOpacity:_a,numOctaves:wo},ko={...So,color:io,backgroundColor:io,outlineColor:io,fill:io,stroke:io,borderColor:io,borderTopColor:io,borderRightColor:io,borderBottomColor:io,borderLeftColor:io,filter:yo,WebkitFilter:yo},jo=e=>ko[e];function Co(e,t){let n=jo(e);return n!==yo&&(n=fo),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Eo=new Set(["auto","none","0"]);const To=e=>180*e/Math.PI,Po=e=>{const t=To(Math.atan2(e[1],e[0]));return Ao(t)},$o={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Po,rotateZ:Po,skewX:e=>To(Math.atan(e[1])),skewY:e=>To(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Ao=e=>((e%=360)<0&&(e+=360),e),Ro=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Oo=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),zo={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Ro,scaleY:Oo,scale:e=>(Ro(e)+Oo(e))/2,rotateX:e=>Ao(To(Math.atan2(e[6],e[5]))),rotateY:e=>Ao(To(Math.atan2(-e[2],e[0]))),rotateZ:Po,rotate:Po,skewX:e=>To(Math.atan(e[4])),skewY:e=>To(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function No(e){return e.includes("scale")?1:0}function Mo(e,t){if(!e||"none"===e)return No(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=zo,i=n;else{const t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=$o,i=t}if(!i)return No(t);const a=r[t],o=i[1].split(",").map(Lo);return"function"===typeof a?a(o):o[a]}function Lo(e){return parseFloat(e.trim())}const Do=e=>e===Fa||e===Za,Io=new Set(["x","y","z"]),Fo=fa.filter((e=>!Io.has(e)));const _o={width:(e,t)=>{let{x:n}=e,{paddingLeft:r="0",paddingRight:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},height:(e,t)=>{let{y:n}=e,{paddingTop:r="0",paddingBottom:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},top:(e,t)=>{let{top:n}=t;return parseFloat(n)},left:(e,t)=>{let{left:n}=t;return parseFloat(n)},bottom:(e,t)=>{let{y:n}=e,{top:r}=t;return parseFloat(r)+(n.max-n.min)},right:(e,t)=>{let{x:n}=e,{left:r}=t;return parseFloat(r)+(n.max-n.min)},x:(e,t)=>{let{transform:n}=t;return Mo(n,"x")},y:(e,t)=>{let{transform:n}=t;return Mo(n,"y")}};_o.translateX=_o.x,_o.translateY=_o.y;const Vo=new Set;let Bo=!1,Uo=!1;function Ho(){if(Uo){const e=Array.from(Vo).filter((e=>e.needsMeasurement)),t=new Set(e.map((e=>e.element))),n=new Map;t.forEach((e=>{const t=function(e){const t=[];return Fo.forEach((n=>{const r=e.getValue(n);void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))})),t}(e);t.length&&(n.set(e,t),e.render())})),e.forEach((e=>e.measureInitialState())),t.forEach((e=>{e.render();const t=n.get(e);t&&t.forEach((t=>{let[n,r]=t;var i;null===(i=e.getValue(n))||void 0===i||i.set(r)}))})),e.forEach((e=>e.measureEndState())),e.forEach((e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)}))}Uo=!1,Bo=!1,Vo.forEach((e=>e.complete())),Vo.clear()}function Wo(){Vo.forEach((e=>{e.readKeyframes(),e.needsMeasurement&&(Uo=!0)}))}class qo{constructor(e,t,n,r,i){let a=arguments.length>5&&void 0!==arguments[5]&&arguments[5];this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Vo.add(this),Bo||(Bo=!0,Bi.read(Wo),Bi.resolveKeyframes(Ho))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;for(let i=0;i<e.length;i++)if(null===e[i])if(0===i){const i=null===r||void 0===r?void 0:r.get(),a=e[e.length-1];if(void 0!==i)e[0]=i;else if(n&&t){const r=n.readValue(t,a);void 0!==r&&null!==r&&(e[0]=r)}void 0===e[0]&&(e[0]=a),r&&void 0===i&&r.set(e[0])}else e[i]=e[i-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Vo.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Vo.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Ko=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Qo=e=>t=>"string"===typeof t&&t.startsWith(e),Yo=Qo("--"),Go=Qo("var(--"),Xo=e=>!!Go(e)&&Jo.test(e.split("/*")[0].trim()),Jo=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Zo=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function es(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;li(n<=4,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);const[r,i]=function(e){const t=Zo.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${null!==n&&void 0!==n?n:r}`,i]}(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);if(a){const e=a.trim();return Ko(e)?parseFloat(e):e}return Xo(i)?es(i,t,n+1):i}const ts=e=>t=>t.test(e),ns=[Fa,Za,Ja,Xa,to,eo,{test:e=>"auto"===e,parse:e=>e}],rs=e=>ns.find(ts(e));class is extends qo{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let s=0;s<e.length;s++){let n=e[s];if("string"===typeof n&&(n=n.trim(),Xo(n))){const r=es(n,t.current);void 0!==r&&(e[s]=r),s===e.length-1&&(this.finalKeyframe=n)}}if(this.resolveNoneKeyframes(),!ga.has(n)||2!==e.length)return;const[r,i]=e,a=rs(r),o=rs(i);if(a!==o)if(Do(a)&&Do(o))for(let s=0;s<e.length;s++){const t=e[s];"string"===typeof t&&(e[s]=parseFloat(t))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,n=[];for(let i=0;i<e.length;i++)("number"===typeof(r=e[i])?0===r:null===r||"none"===r||"0"===r||Da(r))&&n.push(i);var r;n.length&&function(e,t,n){let r,i=0;for(;i<e.length&&!r;){const t=e[i];"string"===typeof t&&!Eo.has(t)&&uo(t).values.length&&(r=e[i]),i++}if(r&&n)for(const a of t)e[a]=Co(n,r)}(e,n,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;"height"===n&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=_o[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const r=t[t.length-1];void 0!==r&&e.getValue(n,r).jump(r,!1)}measureEndState(){var e;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const a=r.length-1,o=r[a];r[a]=_o[n](t.measureViewportBox(),window.getComputedStyle(t.current)),null!==o&&void 0===this.finalKeyframe&&(this.finalKeyframe=o),(null===(e=this.removedTransforms)||void 0===e?void 0:e.length)&&this.removedTransforms.forEach((e=>{let[n,r]=e;t.getValue(n).set(r)})),this.resolveNoneKeyframes()}}const as=(e,t)=>"zIndex"!==t&&(!("number"!==typeof e&&!Array.isArray(e))||!("string"!==typeof e||!fo.test(e)&&"0"!==e||e.startsWith("url(")));function os(e,t,n,r){const i=e[0];if(null===i)return!1;if("display"===t||"visibility"===t)return!0;const a=e[e.length-1],o=as(i,t),s=as(a,t);return si(o===s,`You are trying to animate ${t} from "${i}" to "${a}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${a} via the \`style\` property.`),!(!o||!s)&&(function(e){const t=e[0];if(1===e.length)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}(e)||("spring"===n||Pi(n))&&r)}const ss=e=>null!==e;function ls(e,t,n){let{repeat:r,repeatType:i="loop"}=t;const a=e.filter(ss),o=r&&"loop"!==i&&r%2===1?0:a.length-1;return o&&void 0!==n?n:a[o]}class us{constructor(e){let{autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:a=0,repeatType:o="loop",...s}=e;this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Gi.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:a,repeatType:o,...s},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt}get resolved(){return this._resolved||this.hasAttemptedResolve||(Wo(),Ho()),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=Gi.now(),this.hasAttemptedResolve=!0;const{name:n,type:r,velocity:i,delay:a,onComplete:o,onUpdate:s,isGenerator:l}=this.options;if(!l&&!os(e,n,r,i)){if(Ca||!a)return s&&s(ls(e,this.options,t)),o&&o(),void this.resolveFinishedPromise();this.options.duration=0}const u=this.initPlayback(e,t);!1!==u&&(this._resolved={keyframes:e,finalKeyframe:t,...u},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear")}updateFinishedPromise(){this.currentFinishedPromise=new Promise((e=>{this.resolveFinishedPromise=e}))}}const cs=(e,t,n)=>e+(t-e)*n;function ds(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function hs(e,t){return n=>n>0?t:e}const ps=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},fs=[Ya,Qa,ro];function ms(e){const t=(e=>fs.find((t=>t.test(e))))(e);if(si(Boolean(t),`'${e}' is not an animatable color. Use the equivalent color code instead.`),!Boolean(t))return!1;let n=t.parse(e);return t===ro&&(n=function(e){let{hue:t,saturation:n,lightness:r,alpha:i}=e;t/=360,n/=100,r/=100;let a=0,o=0,s=0;if(n){const e=r<.5?r*(1+n):r+n-r*n,i=2*r-e;a=ds(i,e,t+1/3),o=ds(i,e,t),s=ds(i,e,t-1/3)}else a=o=s=r;return{red:Math.round(255*a),green:Math.round(255*o),blue:Math.round(255*s),alpha:i}}(n)),n}const gs=(e,t)=>{const n=ms(e),r=ms(t);if(!n||!r)return hs(e,t);const i={...n};return e=>(i.red=ps(n.red,r.red,e),i.green=ps(n.green,r.green,e),i.blue=ps(n.blue,r.blue,e),i.alpha=cs(n.alpha,r.alpha,e),Qa.transform(i))},vs=(e,t)=>n=>t(e(n)),ys=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(vs)},xs=new Set(["none","hidden"]);function bs(e,t){return n=>cs(e,t,n)}function ws(e){return"number"===typeof e?bs:"string"===typeof e?Xo(e)?hs:io.test(e)?gs:js:Array.isArray(e)?Ss:"object"===typeof e?io.test(e)?gs:ks:hs}function Ss(e,t){const n=[...e],r=n.length,i=e.map(((e,n)=>ws(e)(e,t[n])));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function ks(e,t){const n={...e,...t},r={};for(const i in n)void 0!==e[i]&&void 0!==t[i]&&(r[i]=ws(e[i])(e[i],t[i]));return e=>{for(const t in r)n[t]=r[t](e);return n}}const js=(e,t)=>{const n=fo.createTransformer(t),r=uo(e),i=uo(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?xs.has(e)&&!i.values.length||xs.has(t)&&!r.values.length?function(e,t){return xs.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}(e,t):ys(Ss(function(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let a=0;a<t.values.length;a++){const o=t.types[a],s=e.indexes[o][i[o]],l=null!==(n=e.values[s])&&void 0!==n?n:0;r[a]=l,i[o]++}return r}(r,i),i.values),n):(si(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),hs(e,t))};function Cs(e,t,n){if("number"===typeof e&&"number"===typeof t&&"number"===typeof n)return cs(e,t,n);return ws(e)(e,t)}function Es(e,t,n){const r=Math.max(t-5,0);return gi(n-e(r),t-r)}const Ts={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ps=.001;function $s(e){let t,n,{duration:r=Ts.duration,bounce:i=Ts.bounce,velocity:a=Ts.velocity,mass:o=Ts.mass}=e;si(r<=fi(Ts.maxDuration),"Spring duration must be 10 seconds or less");let s=1-i;s=Ia(Ts.minDamping,Ts.maxDamping,s),r=Ia(Ts.minDuration,Ts.maxDuration,mi(r)),s<1?(t=e=>{const t=e*s,n=t*r,i=t-a,o=Rs(e,s),l=Math.exp(-n);return Ps-i/o*l},n=e=>{const n=e*s*r,i=n*a+a,o=Math.pow(s,2)*Math.pow(e,2)*r,l=Math.exp(-n),u=Rs(Math.pow(e,2),s);return(-t(e)+Ps>0?-1:1)*((i-o)*l)/u}):(t=e=>Math.exp(-e*r)*((e-a)*r+1)-.001,n=e=>Math.exp(-e*r)*(r*r*(a-e)));const l=function(e,t,n){let r=n;for(let i=1;i<As;i++)r-=e(r)/t(r);return r}(t,n,5/r);if(r=fi(r),isNaN(l))return{stiffness:Ts.stiffness,damping:Ts.damping,duration:r};{const e=Math.pow(l,2)*o;return{stiffness:e,damping:2*s*Math.sqrt(o*e),duration:r}}}const As=12;function Rs(e,t){return e*Math.sqrt(1-t*t)}const Os=["duration","bounce"],zs=["stiffness","damping","mass"];function Ns(e,t){return t.some((t=>void 0!==e[t]))}function Ms(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ts.visualDuration,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ts.bounce;const n="object"!==typeof e?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:l,damping:u,mass:c,duration:d,velocity:h,isResolvedFromDuration:p}=function(e){let t={velocity:Ts.velocity,stiffness:Ts.stiffness,damping:Ts.damping,mass:Ts.mass,isResolvedFromDuration:!1,...e};if(!Ns(e,zs)&&Ns(e,Os))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(1.2*n),i=r*r,a=2*Ia(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:Ts.mass,stiffness:i,damping:a}}else{const n=$s(e);t={...t,...n,mass:Ts.mass},t.isResolvedFromDuration=!0}return t}({...n,velocity:-mi(n.velocity||0)}),f=h||0,m=u/(2*Math.sqrt(l*c)),g=o-a,v=mi(Math.sqrt(l/c)),y=Math.abs(g)<5;let x;if(r||(r=y?Ts.restSpeed.granular:Ts.restSpeed.default),i||(i=y?Ts.restDelta.granular:Ts.restDelta.default),m<1){const e=Rs(v,m);x=t=>{const n=Math.exp(-m*v*t);return o-n*((f+m*v*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===m)x=e=>o-Math.exp(-v*e)*(g+(f+v*g)*e);else{const e=v*Math.sqrt(m*m-1);x=t=>{const n=Math.exp(-m*v*t),r=Math.min(e*t,300);return o-n*((f+m*v*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}const b={calculatedDuration:p&&d||null,next:e=>{const t=x(e);if(p)s.done=e>=d;else{let n=0;m<1&&(n=0===e?fi(f):Es(x,e,t));const a=Math.abs(n)<=r,l=Math.abs(o-t)<=i;s.done=a&&l}return s.value=s.done?o:t,s},toString:()=>{const e=Math.min(Ti(b),Ei),t=Ni((t=>b.next(e*t).value),e,30);return e+"ms "+t}};return b}function Ls(e){let{keyframes:t,velocity:n=0,power:r=.8,timeConstant:i=325,bounceDamping:a=10,bounceStiffness:o=500,modifyTarget:s,min:l,max:u,restDelta:c=.5,restSpeed:d}=e;const h=t[0],p={done:!1,value:h},f=e=>void 0===l?u:void 0===u||Math.abs(l-e)<Math.abs(u-e)?l:u;let m=r*n;const g=h+m,v=void 0===s?g:s(g);v!==g&&(m=v-h);const y=e=>-m*Math.exp(-e/i),x=e=>v+y(e),b=e=>{const t=y(e),n=x(e);p.done=Math.abs(t)<=c,p.value=p.done?v:n};let w,S;const k=e=>{(e=>void 0!==l&&e<l||void 0!==u&&e>u)(p.value)&&(w=e,S=Ms({keyframes:[p.value,f(p.value)],velocity:Es(x,e,p.value),damping:a,stiffness:o,restDelta:c,restSpeed:d}))};return k(0),{calculatedDuration:null,next:e=>{let t=!1;return S||void 0!==w||(t=!0,b(e),k(e)),void 0!==w&&e>=w?S.next(e-w):(!t&&b(e),p)}}}const Ds=Ta(.42,0,1,1),Is=Ta(0,0,.58,1),Fs=Ta(.42,0,.58,1),_s={linear:oi,easeIn:Ds,easeInOut:Fs,easeOut:Is,circIn:Na,circInOut:La,circOut:Ma,backIn:Ra,backInOut:Oa,backOut:Aa,anticipate:za},Vs=e=>{if(Ai(e)){li(4===e.length,"Cubic bezier arrays must contain four numerical values.");const[t,n,r,i]=e;return Ta(t,n,r,i)}return"string"===typeof e?(li(void 0!==_s[e],`Invalid easing type '${e}'`),_s[e]):e};function Bs(e,t){let{clamp:n=!0,ease:r,mixer:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=e.length;if(li(a===t.length,"Both input and output ranges must be the same length"),1===a)return()=>t[0];if(2===a&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=function(e,t,n){const r=[],i=n||Cs,a=e.length-1;for(let o=0;o<a;o++){let n=i(e[o],e[o+1]);if(t){const e=Array.isArray(t)?t[o]||oi:t;n=ys(e,n)}r.push(n)}return r}(t,r,i),l=s.length,u=n=>{if(o&&n<e[0])return t[0];let r=0;if(l>1)for(;r<e.length-2&&!(n<e[r+1]);r++);const i=hi(e[r],e[r+1],n);return s[r](i)};return n?t=>u(Ia(e[0],e[a-1],t)):u}function Us(e){const t=[0];return function(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=hi(0,t,r);e.push(cs(n,1,i))}}(t,e.length-1),t}function Hs(e){let{duration:t=300,keyframes:n,times:r,ease:i="easeInOut"}=e;const a=(e=>Array.isArray(e)&&"number"!==typeof e[0])(i)?i.map(Vs):Vs(i),o={done:!1,value:n[0]},s=function(e,t){return e.map((e=>e*t))}(r&&r.length===n.length?r:Us(n),t),l=Bs(s,n,{ease:Array.isArray(a)?a:(u=n,c=a,u.map((()=>c||Fs)).splice(0,u.length-1))});var u,c;return{calculatedDuration:t,next:e=>(o.value=l(e),o.done=e>=t,o)}}const Ws=e=>{const t=t=>{let{timestamp:n}=t;return e(n)};return{start:()=>Bi.update(t,!0),stop:()=>Ui(t),now:()=>Hi.isProcessing?Hi.timestamp:Gi.now()}},qs={decay:Ls,inertia:Ls,tween:Hs,keyframes:Hs,spring:Ms},Ks=e=>e/100;class Qs extends us{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.teardown();const{onStop:e}=this.options;e&&e()};const{name:t,motionValue:n,element:r,keyframes:i}=this.options,a=(null===r||void 0===r?void 0:r.KeyframeResolver)||qo;this.resolver=new a(i,((e,t)=>this.onKeyframesResolved(e,t)),t,n,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=this.options,o=Pi(t)?t:qs[t]||Hs;let s,l;o!==Hs&&"number"!==typeof e[0]&&(s=ys(Ks,Cs(e[0],e[1])),e=[0,100]);const u=o({...this.options,keyframes:e});"mirror"===i&&(l=o({...this.options,keyframes:[...e].reverse(),velocity:-a})),null===u.calculatedDuration&&(u.calculatedDuration=Ti(u));const{calculatedDuration:c}=u,d=c+r;return{generator:u,mirroredGenerator:l,mapPercentToKeyframes:s,calculatedDuration:c,resolvedDuration:d,totalDuration:d*(n+1)-r}}onPostResolved(){const{autoplay:e=!0}=this.options;ca.mainThread++,this.play(),"paused"!==this.pendingPlayState&&e?this.state=this.pendingPlayState:this.pause()}tick(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{resolved:n}=this;if(!n){const{keyframes:e}=this.options;return{done:!0,value:e[e.length-1]}}const{finalKeyframe:r,generator:i,mirroredGenerator:a,mapPercentToKeyframes:o,keyframes:s,calculatedDuration:l,totalDuration:u,resolvedDuration:c}=n;if(null===this.startTime)return i.next(0);const{delay:d,repeat:h,repeatType:p,repeatDelay:f,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),t?this.currentTime=e:null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const g=this.currentTime-d*(this.speed>=0?1:-1),v=this.speed>=0?g<0:g>u;this.currentTime=Math.max(g,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=u);let y=this.currentTime,x=i;if(h){const e=Math.min(this.currentTime,u)/c;let t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,h+1);Boolean(t%2)&&("reverse"===p?(n=1-n,f&&(n-=f/c)):"mirror"===p&&(x=a)),y=Ia(0,1,n)*c}const b=v?{done:!1,value:s[0]}:x.next(y);o&&(b.value=o(b.value));let{done:w}=b;v||null===l||(w=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const S=null===this.holdTime&&("finished"===this.state||"running"===this.state&&w);return S&&void 0!==r&&(b.value=ls(s,this.options,r)),m&&m(b.value),S&&this.finish(),b}get duration(){const{resolved:e}=this;return e?mi(e.calculatedDuration):0}get time(){return mi(this.currentTime)}set time(e){e=fi(e),this.currentTime=e,null!==this.holdTime||0===this.speed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=mi(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved)return void(this.pendingPlayState="running");if(this.isStopped)return;const{driver:e=Ws,onPlay:t,startTime:n}=this.options;this.driver||(this.driver=e((e=>this.tick(e)))),t&&t();const r=this.driver.now();null!==this.holdTime?this.startTime=r-this.holdTime:this.startTime?"finished"===this.state&&(this.startTime=r):this.startTime=null!==n&&void 0!==n?n:this.calcStartTime(),"finished"===this.state&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;this._resolved?(this.state="paused",this.holdTime=null!==(e=this.currentTime)&&void 0!==e?e:0):this.pendingPlayState="paused"}complete(){"running"!==this.state&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){null!==this.cancelTime&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel(),ca.mainThread--}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const Ys=new Set(["opacity","clipPath","filter","transform"]);const Gs=di((()=>Object.hasOwnProperty.call(Element.prototype,"animate")));const Xs={anticipate:za,backInOut:Oa,circInOut:La};class Js extends us{constructor(e){super(e);const{name:t,motionValue:n,element:r,keyframes:i}=this.options;this.resolver=new is(i,((e,t)=>this.onKeyframesResolved(e,t)),t,n,r),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:n=300,times:r,ease:i,type:a,motionValue:o,name:s,startTime:l}=this.options;if(!o.owner||!o.owner.current)return!1;var u;if("string"===typeof i&&zi()&&i in Xs&&(i=Xs[i]),Pi((u=this.options).type)||"spring"===u.type||!Mi(u.ease)){const{onComplete:t,onUpdate:o,motionValue:s,element:l,...u}=this.options,c=function(e,t){const n=new Qs({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let a=0;for(;!r.done&&a<2e4;)r=n.sample(a),i.push(r.value),a+=10;return{times:void 0,keyframes:i,duration:a-10,ease:"linear"}}(e,u);1===(e=c.keyframes).length&&(e[1]=e[0]),n=c.duration,r=c.times,i=c.ease,a="keyframes"}const c=function(e,t,n){let{delay:r=0,duration:i=300,repeat:a=0,repeatType:o="loop",ease:s="easeInOut",times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const u={[t]:n};l&&(u.offset=l);const c=Ii(s,i);Array.isArray(c)&&(u.easing=c),_i.value&&ca.waapi++;const d=e.animate(u,{delay:r,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:a+1,direction:"reverse"===o?"alternate":"normal"});return _i.value&&d.finished.finally((()=>{ca.waapi--})),d}(o.owner.current,s,e,{...this.options,duration:n,times:r,ease:i});return c.startTime=null!==l&&void 0!==l?l:this.calcStartTime(),this.pendingTimeline?($i(c,this.pendingTimeline),this.pendingTimeline=void 0):c.onfinish=()=>{const{onComplete:n}=this.options;o.set(ls(e,this.options,t)),n&&n(),this.cancel(),this.resolveFinishedPromise()},{animation:c,duration:n,times:r,type:a,ease:i,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return mi(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return mi(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.currentTime=fi(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(this._resolved){const{resolved:t}=this;if(!t)return oi;const{animation:n}=t;$i(n,e)}else this.pendingTimeline=e;return oi}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;"finished"===t.playState&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:n,duration:r,type:i,ease:a,times:o}=e;if("idle"===t.playState||"finished"===t.playState)return;if(this.time){const{motionValue:e,onUpdate:t,onComplete:s,element:l,...u}=this.options,c=new Qs({...u,keyframes:n,duration:r,type:i,ease:a,times:o,isGenerator:!0}),d=fi(this.time);e.setWithVelocity(c.sample(d-10).value,c.sample(d).value,10)}const{onStop:s}=this.options;s&&s(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:s,transformTemplate:l}=t.owner.getProps();return Gs()&&n&&Ys.has(n)&&!s&&!l&&!r&&"mirror"!==i&&0!==a&&"inertia"!==o}}const Zs={type:"spring",stiffness:500,damping:25,restSpeed:10},el={type:"keyframes",duration:.8},tl={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},nl=(e,t)=>{let{keyframes:n}=t;return n.length>2?el:ma.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===n[1]?2*Math.sqrt(550):30,restSpeed:10}:Zs:tl};const rl=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0;return o=>{const s=Ci(r,e)||{},l=s.delay||r.delay||0;let{elapsed:u=0}=r;u-=fi(l);let c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-u,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};(function(e){let{when:t,delay:n,delayChildren:r,staggerChildren:i,staggerDirection:a,repeat:o,repeatType:s,repeatDelay:l,from:u,elapsed:c,...d}=e;return!!Object.keys(d).length})(s)||(c={...c,...nl(e,c)}),c.duration&&(c.duration=fi(c.duration)),c.repeatDelay&&(c.repeatDelay=fi(c.repeatDelay)),void 0!==c.from&&(c.keyframes[0]=c.from);let d=!1;if((!1===c.type||0===c.duration&&!c.repeatDelay)&&(c.duration=0,0===c.delay&&(d=!0)),(Ca||ui)&&(d=!0,c.duration=0,c.delay=0),c.allowFlatten=!s.type&&!s.ease,d&&!a&&void 0!==t.get()){const e=ls(c.keyframes,s);if(void 0!==e)return Bi.update((()=>{c.onUpdate(e),c.onComplete()})),new ji([])}return!a&&Js.supports(c)?new Js(c):new Qs(c)}};function il(e,t){let{protectedKeys:n,needsAnimating:r}=e;const i=n.hasOwnProperty(t)&&!0!==r[t];return r[t]=!1,i}function al(e,t){let{delay:n=0,transitionOverride:r,type:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var a;let{transition:o=e.getDefaultTransition(),transitionEnd:s,...l}=t;r&&(o=r);const u=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const d in l){const t=e.getValue(d,null!==(a=e.latestValues[d])&&void 0!==a?a:null),r=l[d];if(void 0===r||c&&il(c,d))continue;const i={delay:n,...Ci(o||{},d)};let s=!1;if(window.MotionHandoffAnimation){const t=ja(e);if(t){const e=window.MotionHandoffAnimation(t,d,Bi);null!==e&&(i.startTime=e,s=!0)}}wa(e,d),t.start(rl(d,t,r,e.shouldReduceMotion&&ga.has(d)?{type:!1}:i,e,s));const h=t.animation;h&&u.push(h)}return s&&Promise.all(u).then((()=>{Bi.update((()=>{s&&function(e,t){const n=wi(e,t);let{transitionEnd:r={},transition:i={},...a}=n||{};a={...a,...r};for(const o in a)xa(e,o,ya(a[o]))}(e,s)}))})),u}function ol(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var r;const i=wi(e,t,"exit"===n.type?null===(r=e.presenceContext)||void 0===r?void 0:r.custom:void 0);let{transition:a=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(a=n.transitionOverride);const o=i?()=>Promise.all(al(e,i,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:i=0,staggerChildren:o,staggerDirection:s}=a;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=arguments.length>5?arguments[5]:void 0;const o=[],s=(e.variantChildren.size-1)*r,l=1===i?function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r}:function(){return s-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r};return Array.from(e.variantChildren).sort(sl).forEach(((e,r)=>{e.notify("AnimationStart",t),o.push(ol(e,t,{...a,delay:n+l(r)}).then((()=>e.notify("AnimationComplete",t))))})),Promise.all(o)}(e,t,i+r,o,s,n)}:()=>Promise.resolve(),{when:l}=a;if(l){const[e,t]="beforeChildren"===l?[o,s]:[s,o];return e().then((()=>t()))}return Promise.all([o(),s(n.delay)])}function sl(e,t){return e.sortNodePosition(t)}function ll(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function ul(e){return"string"===typeof e||Array.isArray(e)}const cl=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],dl=["initial",...cl],hl=dl.length;function pl(e){if(!e)return;if(!e.isControllingVariants){const t=e.parent&&pl(e.parent)||{};return void 0!==e.props.initial&&(t.initial=e.props.initial),t}const t={};for(let n=0;n<hl;n++){const r=dl[n],i=e.props[r];(ul(i)||!1===i)&&(t[r]=i)}return t}const fl=[...cl].reverse(),ml=cl.length;function gl(e){return t=>Promise.all(t.map((t=>{let{animation:n,options:r}=t;return function(e,t){let n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const i=t.map((t=>ol(e,t,r)));n=Promise.all(i)}else if("string"===typeof t)n=ol(e,t,r);else{const i="function"===typeof t?wi(e,t,r.custom):t;n=Promise.all(al(e,i,r))}return n.then((()=>{e.notify("AnimationComplete",t)}))}(e,n,r)})))}function vl(e){let t=gl(e),n=bl(),r=!0;const i=t=>(n,r)=>{var i;const a=wi(e,r,"exit"===t?null===(i=e.presenceContext)||void 0===i?void 0:i.custom:void 0);if(a){const{transition:e,transitionEnd:t,...r}=a;n={...n,...r,...t}}return n};function a(a){const{props:o}=e,s=pl(e.parent)||{},l=[],u=new Set;let c={},d=1/0;for(let t=0;t<ml;t++){const h=fl[t],p=n[h],f=void 0!==o[h]?o[h]:s[h],m=ul(f),g=h===a?p.isActive:null;!1===g&&(d=t);let v=f===s[h]&&f!==o[h]&&m;if(v&&r&&e.manuallyAnimateOnMount&&(v=!1),p.protectedKeys={...c},!p.isActive&&null===g||!f&&!p.prevProp||yi(f)||"boolean"===typeof f)continue;const y=yl(p.prevProp,f);let x=y||h===a&&p.isActive&&!v&&m||t>d&&m,b=!1;const w=Array.isArray(f)?f:[f];let S=w.reduce(i(h),{});!1===g&&(S={});const{prevResolvedValues:k={}}=p,j={...k,...S},C=t=>{x=!0,u.has(t)&&(b=!0,u.delete(t)),p.needsAnimating[t]=!0;const n=e.getValue(t);n&&(n.liveStyle=!1)};for(const e in j){const t=S[e],n=k[e];if(c.hasOwnProperty(e))continue;let r=!1;r=va(t)&&va(n)?!ll(t,n):t!==n,r?void 0!==t&&null!==t?C(e):u.add(e):void 0!==t&&u.has(e)?C(e):p.protectedKeys[e]=!0}p.prevProp=f,p.prevResolvedValues=S,p.isActive&&(c={...c,...S}),r&&e.blockInitialAnimation&&(x=!1);x&&(!(v&&y)||b)&&l.push(...w.map((e=>({animation:e,options:{type:h}}))))}if(u.size){const t={};if("boolean"!==typeof o.initial){const n=wi(e,Array.isArray(o.initial)?o.initial[0]:o.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach((n=>{const r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=null!==r&&void 0!==r?r:null})),l.push({animation:t})}let h=Boolean(l.length);return!r||!1!==o.initial&&o.initial!==o.animate||e.manuallyAnimateOnMount||(h=!1),r=!1,h?t(l):Promise.resolve()}return{animateChanges:a,setActive:function(t,r){var i;if(n[t].isActive===r)return Promise.resolve();null===(i=e.variantChildren)||void 0===i||i.forEach((e=>{var n;return null===(n=e.animationState)||void 0===n?void 0:n.setActive(t,r)})),n[t].isActive=r;const o=a(t);for(const e in n)n[e].protectedKeys={};return o},setAnimateFunction:function(n){t=n(e)},getState:()=>n,reset:()=>{n=bl(),r=!0}}}function yl(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!ll(t,e)}function xl(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function bl(){return{animate:xl(!0),whileInView:xl(),whileHover:xl(),whileTap:xl(),whileDrag:xl(),whileFocus:xl(),exit:xl()}}class wl{constructor(e){this.isMounted=!1,this.node=e}update(){}}let Sl=0;const kl={animation:{Feature:class extends wl{constructor(e){super(e),e.animationState||(e.animationState=vl(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();yi(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),null===(e=this.unmountControls)||void 0===e||e.call(this)}}},exit:{Feature:class extends wl{constructor(){super(...arguments),this.id=Sl++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;const r=this.node.animationState.setActive("exit",!e);t&&!e&&r.then((()=>{t(this.id)}))}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function jl(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Cl(e){return{point:{x:e.pageX,y:e.pageY}}}function El(e,t,n,r){return jl(e,t,(e=>t=>ra(t)&&e(t,Cl(t)))(n),r)}function Tl(e){let{top:t,left:n,right:r,bottom:i}=e;return{x:{min:n,max:r},y:{min:t,max:i}}}function Pl(e){return e.max-e.min}function $l(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=r,e.originPoint=cs(t.min,t.max,e.origin),e.scale=Pl(n)/Pl(t),e.translate=cs(n.min,n.max,e.origin)-e.originPoint,(e.scale>=.9999&&e.scale<=1.0001||isNaN(e.scale))&&(e.scale=1),(e.translate>=-.01&&e.translate<=.01||isNaN(e.translate))&&(e.translate=0)}function Al(e,t,n,r){$l(e.x,t.x,n.x,r?r.originX:void 0),$l(e.y,t.y,n.y,r?r.originY:void 0)}function Rl(e,t,n){e.min=n.min+t.min,e.max=e.min+Pl(t)}function Ol(e,t,n){e.min=t.min-n.min,e.max=e.min+Pl(t)}function zl(e,t,n){Ol(e.x,t.x,n.x),Ol(e.y,t.y,n.y)}const Nl=()=>({x:{min:0,max:0},y:{min:0,max:0}});function Ml(e){return[e("x"),e("y")]}function Ll(e){return void 0===e||1===e}function Dl(e){let{scale:t,scaleX:n,scaleY:r}=e;return!Ll(t)||!Ll(n)||!Ll(r)}function Il(e){return Dl(e)||Fl(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Fl(e){return _l(e.x)||_l(e.y)}function _l(e){return e&&"0%"!==e}function Vl(e,t,n){return n+t*(e-n)}function Bl(e,t,n,r,i){return void 0!==i&&(e=Vl(e,i,r)),Vl(e,n,r)+t}function Ul(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;e.min=Bl(e.min,t,n,r,i),e.max=Bl(e.max,t,n,r,i)}function Hl(e,t){let{x:n,y:r}=t;Ul(e.x,n.translate,n.scale,n.originPoint),Ul(e.y,r.translate,r.scale,r.originPoint)}const Wl=.999999999999,ql=1.0000000000001;function Kl(e,t){e.min=e.min+t,e.max=e.max+t}function Ql(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.5;Ul(e,t,n,cs(e.min,e.max,i),r)}function Yl(e,t){Ql(e.x,t.x,t.scaleX,t.scale,t.originX),Ql(e.y,t.y,t.scaleY,t.scale,t.originY)}function Gl(e,t){return Tl(function(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}const Xl=e=>{let{current:t}=e;return t?t.ownerDocument.defaultView:null};function Jl(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}const Zl=(e,t)=>Math.abs(e-t);class eu{constructor(e,t){let{transformPagePoint:n,contextWindow:r,dragSnapToOrigin:i=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=ru(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){const n=Zl(e.x,t.x),r=Zl(e.y,t.y);return Math.sqrt(n**2+r**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!n)return;const{point:r}=e,{timestamp:i}=Hi;this.history.push({...r,timestamp:i});const{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=tu(t,this.transformPagePoint),Bi.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if(this.dragSnapToOrigin&&i&&i(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const a=ru("pointercancel"===e.type?this.lastMoveEventInfo:tu(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!ra(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.contextWindow=r||window;const a=tu(Cl(e),this.transformPagePoint),{point:o}=a,{timestamp:s}=Hi;this.history=[{...o,timestamp:s}];const{onSessionStart:l}=t;l&&l(e,ru(a,this.history)),this.removeListeners=ys(El(this.contextWindow,"pointermove",this.handlePointerMove),El(this.contextWindow,"pointerup",this.handlePointerUp),El(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Ui(this.updatePoint)}}function tu(e,t){return t?{point:t(e.point)}:e}function nu(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ru(e,t){let{point:n}=e;return{point:n,delta:nu(n,au(t)),offset:nu(n,iu(t)),velocity:ou(t,.1)}}function iu(e){return e[0]}function au(e){return e[e.length-1]}function ou(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=au(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>fi(t)));)n--;if(!r)return{x:0,y:0};const a=mi(i.timestamp-r.timestamp);if(0===a)return{x:0,y:0};const o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function su(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function lu(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}const uu=.35;function cu(e,t,n){return{min:du(e,t),max:du(e,n)}}function du(e,t){return"number"===typeof e?e:e[t]||0}const hu=new WeakMap;class pu{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=e}start(e){let{snapToCursor:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;const{dragSnapToOrigin:r}=this.getProps();this.panSession=new eu(e,{onSessionStart:e=>{const{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Cl(e).point)},onStart:(e,t)=>{const{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock="x"===(a=n)||"y"===a?Xi[a]?null:(Xi[a]=!0,()=>{Xi[a]=!1}):Xi.x||Xi.y?null:(Xi.x=Xi.y=!0,()=>{Xi.x=Xi.y=!1}),!this.openDragLock))return;var a;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ml((e=>{let t=this.getAxisMotionValue(e).get()||0;if(Ja.test(t)){const{projection:n}=this.visualElement;if(n&&n.layout){const r=n.layout.layoutBox[e];if(r){t=Pl(r)*(parseFloat(t)/100)}}}this.originPoint[e]=t})),i&&Bi.postRender((()=>i(e,t))),wa(this.visualElement,"transform");const{animationState:o}=this.visualElement;o&&o.setActive("whileDrag",!0)},onMove:(e,t)=>{const{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;const{offset:o}=t;if(r&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=null;Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x");return n}(o),void(null!==this.currentDirection&&i&&i(this.currentDirection));this.updateAxis("x",t.point,o),this.updateAxis("y",t.point,o),this.visualElement.render(),a&&a(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>Ml((e=>{var t;return"paused"===this.getAnimationState(e)&&(null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.play())}))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:r,contextWindow:Xl(this.visualElement)})}stop(e,t){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:r}=t;this.startAnimation(r);const{onDragEnd:i}=this.getProps();i&&Bi.postRender((()=>i(e,t)))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){const{drag:r}=this.getProps();if(!n||!fu(e,r,this.currentDirection))return;const i=this.getAxisMotionValue(e);let a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=function(e,t,n){let{min:r,max:i}=t;return void 0!==r&&e<r?e=n?cs(r,e,n.min):Math.max(e,r):void 0!==i&&e>i&&(e=n?cs(i,e,n.max):Math.min(e,i)),e}(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):null===(e=this.visualElement.projection)||void 0===e?void 0:e.layout,i=this.constraints;t&&Jl(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!t||!r)&&function(e,t){let{top:n,left:r,bottom:i,right:a}=t;return{x:su(e.x,r,a),y:su(e.y,n,i)}}(r.layoutBox,t),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:uu;return!1===e?e=0:!0===e&&(e=uu),{x:cu(e,"left","right"),y:cu(e,"top","bottom")}}(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Ml((e=>{!1!==this.constraints&&this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(r.layoutBox[e],this.constraints[e]))}))}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Jl(e))return!1;const n=e.current;li(null!==n,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");const{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const i=function(e,t,n){const r=Gl(e,n),{scroll:i}=t;return i&&(Kl(r.x,i.offset.x),Kl(r.y,i.offset.y)),r}(n,r.root,this.visualElement.getTransformPagePoint());let a=function(e,t){return{x:lu(e.x,t.x),y:lu(e.y,t.y)}}(r.layout.layoutBox,i);if(t){const e=t(function(e){let{x:t,y:n}=e;return{top:n.min,right:t.max,bottom:n.max,left:t.min}}(a));this.hasMutatedConstraints=!!e,e&&(a=Tl(e))}return a}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},l=Ml((o=>{if(!fu(o,t,this.currentDirection))return;let l=s&&s[o]||{};a&&(l={min:0,max:0});const u=r?200:1e6,c=r?40:1e7,d={type:"inertia",velocity:n?e[o]:0,bounceStiffness:u,bounceDamping:c,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};return this.startAxisValueAnimation(o,d)}));return Promise.all(l).then(o)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return wa(this.visualElement,e),n.start(rl(e,n,0,t,this.visualElement,!1))}stopAnimation(){Ml((e=>this.getAxisMotionValue(e).stop()))}pauseAnimation(){Ml((e=>{var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.pause()}))}getAnimationState(e){var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps(),r=n[t];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Ml((t=>{const{drag:n}=this.getProps();if(!fu(t,n,this.currentDirection))return;const{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){const{min:n,max:a}=r.layout.layoutBox[t];i.set(e[t]-cs(n,a,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Jl(t)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Ml((e=>{const t=this.getAxisMotionValue(e);if(t&&!1!==this.constraints){const n=t.get();r[e]=function(e,t){let n=.5;const r=Pl(e),i=Pl(t);return i>r?n=hi(t.min,t.max-r,e.min):r>i&&(n=hi(e.min,e.max-i,t.min)),Ia(0,1,n)}({min:n,max:n},this.constraints[e])}}));const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),Ml((t=>{if(!fu(t,e,null))return;const n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(cs(i,a,r[t]))}))}addListeners(){if(!this.visualElement.current)return;hu.set(this.visualElement,this);const e=El(this.visualElement.current,"pointerdown",(e=>{const{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)})),t=()=>{const{dragConstraints:e}=this.getProps();Jl(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,r=n.addEventListener("measure",t);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),Bi.read(t);const i=jl(window,"resize",(()=>this.scalePositionWithinConstraints())),a=n.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n}=e;this.isDragging&&n&&(Ml((e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))})),this.visualElement.render())}));return()=>{i(),e(),r(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=uu,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}}function fu(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}const mu=e=>(t,n)=>{e&&Bi.postRender((()=>e(t,n)))};const gu=(0,e.createContext)(null);function vu(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const n=(0,e.useContext)(gu);if(null===n)return[!0,null];const{isPresent:r,onExitComplete:i,register:a}=n,o=(0,e.useId)();(0,e.useEffect)((()=>{if(t)return a(o)}),[t]);const s=(0,e.useCallback)((()=>t&&i&&i(o)),[o,i,t]);return!r&&i?[!1,s]:[!0]}const yu=(0,e.createContext)({}),xu=(0,e.createContext)({}),bu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function wu(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Su={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!Za.test(e))return e;e=parseFloat(e)}return`${wu(e,t.target.x)}% ${wu(e,t.target.y)}%`}},ku={correct:(e,t)=>{let{treeScale:n,projectionDelta:r}=t;const i=e,a=fo.parse(e);if(a.length>5)return i;const o=fo.createTransformer(e),s="number"!==typeof a[0]?1:0,l=r.x.scale*n.x,u=r.y.scale*n.y;a[0+s]/=l,a[1+s]/=u;const c=cs(l,u,.5);return"number"===typeof a[2+s]&&(a[2+s]/=c),"number"===typeof a[3+s]&&(a[3+s]/=c),o(a)}},ju={};class Cu extends e.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;!function(e){for(const t in e)ju[t]=e[t],Yo(t)&&(ju[t].isCSSVariable=!0)}(Tu),i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",(()=>{this.safeToRemove()})),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),bu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,a=n.projection;return a?(a.isPresent=i,r||e.layoutDependency!==t||void 0===t||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||Bi.postRender((()=>{const e=a.getStack();e&&e.members.length||this.safeToRemove()}))),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),qi.postRender((()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Eu(t){const[n,r]=vu(),i=(0,e.useContext)(yu);return(0,Xr.jsx)(Cu,{...t,layoutGroup:i,switchLayoutGroup:(0,e.useContext)(xu),isPresent:n,safeToRemove:r})}const Tu={borderRadius:{...Su,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Su,borderTopRightRadius:Su,borderBottomLeftRadius:Su,borderBottomRightRadius:Su,boxShadow:ku};const Pu=(e,t)=>e.depth-t.depth;class $u{constructor(){this.children=[],this.isDirty=!1}add(e){ii(this.children,e),this.isDirty=!0}remove(e){ai(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Pu),this.isDirty=!1,this.children.forEach(e)}}function Au(e,t){const n=Gi.now(),r=i=>{let{timestamp:a}=i;const o=a-n;o>=t&&(Ui(r),e(o-t))};return Bi.read(r,!0),()=>Ui(r)}function Ru(e){const t=ba(e)?e.get():e;return(e=>Boolean(e&&"object"===typeof e&&e.mix&&e.toValue))(t)?t.toValue():t}const Ou=["TopLeft","TopRight","BottomLeft","BottomRight"],zu=Ou.length,Nu=e=>"string"===typeof e?parseFloat(e):e,Mu=e=>"number"===typeof e||Za.test(e);function Lu(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const Du=Fu(0,.5,Ma),Iu=Fu(.5,.95,oi);function Fu(e,t,n){return r=>r<e?0:r>t?1:n(hi(e,t,r))}function _u(e,t){e.min=t.min,e.max=t.max}function Vu(e,t){_u(e.x,t.x),_u(e.y,t.y)}function Bu(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Uu(e,t,n,r,i){return e=Vl(e-=t,1/n,r),void 0!==i&&(e=Vl(e,1/i,r)),e}function Hu(e,t,n,r,i){let[a,o,s]=n;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,i=arguments.length>4?arguments[4]:void 0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;Ja.test(t)&&(t=parseFloat(t),t=cs(o.min,o.max,t/100)-o.min);if("number"!==typeof t)return;let s=cs(a.min,a.max,r);e===a&&(s-=t),e.min=Uu(e.min,t,n,s,i),e.max=Uu(e.max,t,n,s,i)}(e,t[a],t[o],t[s],t.scale,r,i)}const Wu=["x","scaleX","originX"],qu=["y","scaleY","originY"];function Ku(e,t,n,r){Hu(e.x,t,Wu,n?n.x:void 0,r?r.x:void 0),Hu(e.y,t,qu,n?n.y:void 0,r?r.y:void 0)}function Qu(e){return 0===e.translate&&1===e.scale}function Yu(e){return Qu(e.x)&&Qu(e.y)}function Gu(e,t){return e.min===t.min&&e.max===t.max}function Xu(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Ju(e,t){return Xu(e.x,t.x)&&Xu(e.y,t.y)}function Zu(e){return Pl(e.x)/Pl(e.y)}function ec(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class tc{constructor(){this.members=[]}add(e){ii(this.members,e),e.scheduleRender()}remove(e){if(ai(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex((t=>e===t));if(0===t)return!1;let n;for(let r=t;r>=0;r--){const e=this.members[r];if(!1!==e.isPresent){n=e;break}}return!!n&&(this.promote(n),!0)}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;!1===r&&n.hide()}}exitAnimationComplete(){this.members.forEach((e=>{const{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()}))}scheduleRender(){this.members.forEach((e=>{e.instance&&e.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const nc={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},rc=["","X","Y","Z"],ic={visibility:"hidden"};let ac=0;function oc(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function sc(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=ja(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",Bi,!(t||r))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&sc(r)}function lc(e){let{attachResizeListener:t,defaultParent:n,measureScroll:r,checkIsScrollRoot:i,resetTransform:a}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===n||void 0===n?void 0:n();this.id=ac++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,_i.value&&(nc.nodes=nc.calculatedTargetDeltas=nc.calculatedProjections=0),this.nodes.forEach(dc),this.nodes.forEach(yc),this.nodes.forEach(xc),this.nodes.forEach(hc),_i.addProjectionMetrics&&_i.addProjectionMetrics(nc)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let n=0;n<this.path.length;n++)this.path[n].shouldResetTransform=!0;this.root===this&&(this.nodes=new $u)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new pi),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];t&&t.notify(...r)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root.hasTreeAnimated;if(this.instance)return;var r;this.isSVG=(r=e)instanceof SVGElement&&"svg"!==r.tagName,this.instance=e;const{layoutId:i,layout:a,visualElement:o}=this.options;if(o&&!o.current&&o.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),n&&(a||i)&&(this.isLayoutDirty=!0),t){let n;const r=()=>this.root.updateBlockedByResize=!1;t(e,(()=>{this.root.updateBlockedByResize=!0,n&&n(),n=Au(r,250),bu.hasAnimatedSinceResize&&(bu.hasAnimatedSinceResize=!1,this.nodes.forEach(vc))}))}i&&this.root.registerSharedNode(i,this),!1!==this.options.animate&&o&&(i||a)&&this.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n,hasRelativeLayoutChanged:r,layout:i}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const a=this.options.transition||o.getDefaultTransition()||Cc,{onLayoutAnimationStart:s,onLayoutAnimationComplete:l}=o.getProps(),u=!this.targetLayout||!Ju(this.targetLayout,i),c=!n&&r;if(this.options.layoutRoot||this.resumeFrom||c||n&&(u||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,c);const e={...Ci(a,"layout"),onPlay:s,onComplete:l};(o.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else n||vc(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ui(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(bc),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&sc(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let i=0;i<this.path.length;i++){const e=this.path[i];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;const r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(fc);this.isUpdating||this.nodes.forEach(mc),this.isUpdating=!1,this.nodes.forEach(gc),this.nodes.forEach(uc),this.nodes.forEach(cc),this.clearAllSnapshots();const e=Gi.now();Hi.delta=Ia(0,1e3/60,e-Hi.timestamp),Hi.timestamp=e,Hi.isProcessing=!0,Wi.update.process(Hi),Wi.preRender.process(Hi),Wi.render.process(Hi),Hi.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,qi.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(pc),this.sharedNodes.forEach(wc)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Bi.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Bi.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||Pl(this.snapshot.measuredBox.x)||Pl(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t){const t=i(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!a)return;const e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Yu(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,i=r!==this.prevTransformTemplateValue;e&&(t||Il(this.latestValues)||i)&&(a(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let n=this.removeElementScroll(t);var r;return e&&(n=this.removeTransform(n)),Pc((r=n).x),Pc(r.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){var e;const{visualElement:t}=this.options;if(!t)return{x:{min:0,max:0},y:{min:0,max:0}};const n=t.measureViewportBox();if(!((null===(e=this.scroll)||void 0===e?void 0:e.wasRoot)||this.path.some(Ac))){const{scroll:e}=this.root;e&&(Kl(n.x,e.offset.x),Kl(n.y,e.offset.y))}return n}removeElementScroll(e){var t;const n={x:{min:0,max:0},y:{min:0,max:0}};if(Vu(n,e),null===(t=this.scroll)||void 0===t?void 0:t.wasRoot)return n;for(let r=0;r<this.path.length;r++){const t=this.path[r],{scroll:i,options:a}=t;t!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&Vu(n,e),Kl(n.x,i.offset.x),Kl(n.y,i.offset.y))}return n}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n={x:{min:0,max:0},y:{min:0,max:0}};Vu(n,e);for(let r=0;r<this.path.length;r++){const e=this.path[r];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&Yl(n,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),Il(e.latestValues)&&Yl(n,e.latestValues)}return Il(this.latestValues)&&Yl(n,this.latestValues),n}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};Vu(t,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];if(!e.instance)continue;if(!Il(e.latestValues))continue;Dl(e.latestValues)&&e.updateSnapshot();const r={x:{min:0,max:0},y:{min:0,max:0}};Vu(r,e.measurePageBox()),Ku(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,r)}return Il(this.latestValues)&&Ku(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Hi.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t;const n=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=n.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=n.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=n.isSharedProjectionDirty);const r=Boolean(this.resumingFrom)||this!==n;if(!(e||r&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty)||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:i,layoutId:a}=this.options;if(this.layout&&(i||a)){if(this.resolvedRelativeTargetAt=Hi.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},zl(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),Vu(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var o,s,l;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),o=this.target,s=this.relativeTarget,l=this.relativeParent.target,Rl(o.x,s.x,l.x),Rl(o.y,s.y,l.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):Vu(this.target,this.layout.layoutBox),Hl(this.target,this.targetDelta)):Vu(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},zl(this.relativeTargetOrigin,this.target,e.target),Vu(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}_i.value&&nc.calculatedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!Dl(this.parent.latestValues)&&!Fl(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var e;const t=this.getLead(),n=Boolean(this.resumingFrom)||this!==t;let r=!0;if((this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty))&&(r=!1),n&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(r=!1),this.resolvedRelativeTargetAt===Hi.timestamp&&(r=!1),r)return;const{layout:i,layoutId:a}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!i&&!a)return;Vu(this.layoutCorrected,this.layout.layoutBox);const o=this.treeScale.x,s=this.treeScale.y;!function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=n.length;if(!i)return;let a,o;t.x=t.y=1;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;const{visualElement:i}=a.options;i&&i.props.style&&"contents"===i.props.style.display||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Yl(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Hl(e,o)),r&&Il(a.latestValues)&&Yl(e,a.latestValues))}t.x<ql&&t.x>Wl&&(t.x=1),t.y<ql&&t.y>Wl&&(t.y=1)}(this.layoutCorrected,this.treeScale,this.path,n),!t.layout||t.target||1===this.treeScale.x&&1===this.treeScale.y||(t.target=t.layout.layoutBox,t.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}});const{target:l}=t;l?(this.projectionDelta&&this.prevProjectionDelta?(Bu(this.prevProjectionDelta.x,this.projectionDelta.x),Bu(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),Al(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.treeScale.x===o&&this.treeScale.y===s&&ec(this.projectionDelta.x,this.prevProjectionDelta.x)&&ec(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),_i.value&&nc.calculatedProjections++):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];var t;if(null===(t=this.options.visualElement)||void 0===t||t.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const o={x:{min:0,max:0},y:{min:0,max:0}},s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),u=!l||l.members.length<=1,c=Boolean(s&&!u&&!0===this.options.crossfade&&!this.path.some(jc));let d;this.animationProgress=0,this.mixTargetDelta=t=>{const n=t/1e3;Sc(a.x,e.x,n),Sc(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(zl(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(e,t,n,r){kc(e.x,t.x,n.x,r),kc(e.y,t.y,n.y,r)}(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&function(e,t){return Gu(e.x,t.x)&&Gu(e.y,t.y)}(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||(d={x:{min:0,max:0},y:{min:0,max:0}}),Vu(d,this.relativeTarget)),s&&(this.animationValues=i,function(e,t,n,r,i,a){i?(e.opacity=cs(0,void 0!==n.opacity?n.opacity:1,Du(r)),e.opacityExit=cs(void 0!==t.opacity?t.opacity:1,0,Iu(r))):a&&(e.opacity=cs(void 0!==t.opacity?t.opacity:1,void 0!==n.opacity?n.opacity:1,r));for(let o=0;o<zu;o++){const i=`border${Ou[o]}Radius`;let a=Lu(t,i),s=Lu(n,i);void 0===a&&void 0===s||(a||(a=0),s||(s=0),0===a||0===s||Mu(a)===Mu(s)?(e[i]=Math.max(cs(Nu(a),Nu(s),r),0),(Ja.test(s)||Ja.test(a))&&(e[i]+="%")):e[i]=s)}(t.rotate||n.rotate)&&(e.rotate=cs(t.rotate||0,n.rotate||0,r))}(i,r,this.latestValues,n,c,u)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ui(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Bi.update((()=>{bu.hasAnimatedSinceResize=!0,ca.layout++,this.currentAnimation=function(e,t,n){const r=ba(e)?e:pa(e);return r.start(rl("",r,t,n)),r.animation}(0,1e3,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{ca.layout--},onComplete:()=>{ca.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&$c(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=Pl(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;const r=Pl(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}Vu(t,n),Yl(t,i),Al(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new tc);this.sharedNodes.get(e).add(t);const n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){var e;const{layoutId:t}=this.options;return t&&(null===(e=this.getStack())||void 0===e?void 0:e.lead)||this}getPrevLead(){var e;const{layoutId:t}=this.options;return t?null===(e=this.getStack())||void 0===e?void 0:e.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetSkewAndRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;const r={};n.z&&oc("z",e,r,this.animationValues);for(let i=0;i<rc.length;i++)oc(`rotate${rc[i]}`,e,r,this.animationValues),oc(`skew${rc[i]}`,e,r,this.animationValues);e.render();for(const i in r)e.setStaticValue(i,r[i]),this.animationValues&&(this.animationValues[i]=r[i]);e.scheduleRender()}getProjectionStyles(e){var t,n;if(!this.instance||this.isSVG)return;if(!this.isVisible)return ic;const r={visibility:""},i=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,r.opacity="",r.pointerEvents=Ru(null===e||void 0===e?void 0:e.pointerEvents)||"",r.transform=i?i(this.latestValues,""):"none",r;const a=this.getLead();if(!this.projectionDelta||!this.layout||!a.target){const t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=Ru(null===e||void 0===e?void 0:e.pointerEvents)||""),this.hasProjected&&!Il(this.latestValues)&&(t.transform=i?i({},""):"none",this.hasProjected=!1),t}const o=a.animationValues||a.latestValues;this.applyTransformsToTarget(),r.transform=function(e,t,n){let r="";const i=e.x.translate/t.x,a=e.y.translate/t.y,o=(null===n||void 0===n?void 0:n.z)||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),1===t.x&&1===t.y||(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return 1===s&&1===l||(r+=`scale(${s}, ${l})`),r||"none"}(this.projectionDeltaWithTransform,this.treeScale,o),i&&(r.transform=i(o,r.transform));const{x:s,y:l}=this.projectionDelta;r.transformOrigin=`${100*s.origin}% ${100*l.origin}% 0`,a.animationValues?r.opacity=a===this?null!==(n=null!==(t=o.opacity)&&void 0!==t?t:this.latestValues.opacity)&&void 0!==n?n:1:this.preserveOpacity?this.latestValues.opacity:o.opacityExit:r.opacity=a===this?void 0!==o.opacity?o.opacity:"":void 0!==o.opacityExit?o.opacityExit:0;for(const u in ju){if(void 0===o[u])continue;const{correct:e,applyTo:t,isCSSVariable:n}=ju[u],i="none"===r.transform?o[u]:e(o[u],a);if(t){const e=t.length;for(let n=0;n<e;n++)r[t[n]]=i}else n?this.options.visualElement.renderState.vars[u]=i:r[u]=i}return this.options.layoutId&&(r.pointerEvents=a===this?Ru(null===e||void 0===e?void 0:e.pointerEvents)||"":"none"),r}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((e=>{var t;return null===(t=e.currentAnimation)||void 0===t?void 0:t.stop()})),this.root.nodes.forEach(fc),this.root.sharedNodes.clear()}}}function uc(e){e.updateLayout()}function cc(e){var t;const n=(null===(t=e.resumeFrom)||void 0===t?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:r}=e.layout,{animationType:i}=e.options,a=n.source!==e.layout.source;"size"===i?Ml((e=>{const r=a?n.measuredBox[e]:n.layoutBox[e],i=Pl(r);r.min=t[e].min,r.max=r.min+i})):$c(i,n.layoutBox,t)&&Ml((r=>{const i=a?n.measuredBox[r]:n.layoutBox[r],o=Pl(t[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)}));const o={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};Al(o,t,n.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};a?Al(s,e.applyTransform(r,!0),n.measuredBox):Al(s,t,n.layoutBox);const l=!Yu(o);let u=!1;if(!e.resumeFrom){const r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){const{snapshot:i,layout:a}=r;if(i&&a){const o={x:{min:0,max:0},y:{min:0,max:0}};zl(o,n.layoutBox,i.layoutBox);const s={x:{min:0,max:0},y:{min:0,max:0}};zl(s,t,a.layoutBox),Ju(o,s)||(u=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:t,snapshot:n,delta:s,layoutDelta:o,hasLayoutChanged:l,hasRelativeLayoutChanged:u})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function dc(e){_i.value&&nc.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function hc(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function pc(e){e.clearSnapshot()}function fc(e){e.clearMeasurements()}function mc(e){e.isLayoutDirty=!1}function gc(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function vc(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function yc(e){e.resolveTargetDelta()}function xc(e){e.calcProjection()}function bc(e){e.resetSkewAndRotation()}function wc(e){e.removeLeadSnapshot()}function Sc(e,t,n){e.translate=cs(t.translate,0,n),e.scale=cs(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function kc(e,t,n,r){e.min=cs(t.min,n.min,r),e.max=cs(t.max,n.max,r)}function jc(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const Cc={duration:.45,ease:[.4,0,.1,1]},Ec=e=>"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Tc=Ec("applewebkit/")&&!Ec("chrome/")?Math.round:oi;function Pc(e){e.min=Tc(e.min),e.max=Tc(e.max)}function $c(e,t,n){return"position"===e||"preserve-aspect"===e&&(r=Zu(t),i=Zu(n),a=.2,!(Math.abs(r-i)<=a));var r,i,a}function Ac(e){var t;return e!==e.root&&(null===(t=e.scroll)||void 0===t?void 0:t.wasRoot)}const Rc=lc({attachResizeListener:(e,t)=>jl(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Oc={current:void 0},zc=lc({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Oc.current){const e=new Rc({});e.mount(window),e.setOptions({layoutScroll:!0}),Oc.current=e}return Oc.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),Nc={pan:{Feature:class extends wl{constructor(){super(...arguments),this.removePointerDownListener=oi}onPointerDown(e){this.session=new eu(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Xl(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:mu(e),onStart:mu(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&Bi.postRender((()=>r(e,t)))}}}mount(){this.removePointerDownListener=El(this.node.current,"pointerdown",(e=>this.onPointerDown(e)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends wl{constructor(e){super(e),this.removeGroupControls=oi,this.removeListeners=oi,this.controls=new pu(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||oi}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:zc,MeasureLayout:Eu}};function Mc(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover","Start"===n);const i=r["onHover"+n];i&&Bi.postRender((()=>i(t,Cl(t))))}function Lc(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap","Start"===n);const i=r["onTap"+("End"===n?"":n)];i&&Bi.postRender((()=>i(t,Cl(t))))}const Dc=new WeakMap,Ic=new WeakMap,Fc=e=>{const t=Dc.get(e.target);t&&t(e)},_c=e=>{e.forEach(Fc)};function Vc(e,t,n){const r=function(e){let{root:t,...n}=e;const r=t||document;Ic.has(r)||Ic.set(r,{});const i=Ic.get(r),a=JSON.stringify(n);return i[a]||(i[a]=new IntersectionObserver(_c,{root:t,...n})),i[a]}(t);return Dc.set(e,n),r.observe(e),()=>{Dc.delete(e),r.unobserve(e)}}const Bc={some:0,all:1};const Uc={inView:{Feature:class extends wl{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:"number"===typeof r?r:Bc[r]};return Vc(this.node.current,a,(e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,i&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)}))}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,n=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:n={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==n[e]}(e,t));n&&this.startObserver()}unmount(){}}},tap:{Feature:class extends wl{mount(){const{current:e}=this.node;e&&(this.unmount=ua(e,((e,t)=>(Lc(this.node,t,"Start"),(e,t)=>{let{success:n}=t;return Lc(this.node,e,n?"End":"Cancel")})),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}},focus:{Feature:class extends wl{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(US){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ys(jl(this.node.current,"focus",(()=>this.onFocus())),jl(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}}},hover:{Feature:class extends wl{mount(){const{current:e}=this.node;e&&(this.unmount=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[r,i,a]=Zi(e,n),o=e=>{if(!ea(e))return;const{target:n}=e,r=t(n,e);if("function"!==typeof r||!n)return;const a=e=>{ea(e)&&(r(e),n.removeEventListener("pointerleave",a))};n.addEventListener("pointerleave",a,i)};return r.forEach((e=>{e.addEventListener("pointerenter",o,i)})),a}(e,((e,t)=>(Mc(this.node,t,"Start"),e=>Mc(this.node,e,"End")))))}unmount(){}}}},Hc={layout:{ProjectionNode:zc,MeasureLayout:Eu}},Wc=(0,e.createContext)({strict:!1}),qc=(0,e.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Kc=(0,e.createContext)({});function Qc(e){return yi(e.animate)||dl.some((t=>ul(e[t])))}function Yc(e){return Boolean(Qc(e)||e.variants)}function Gc(t){const{initial:n,animate:r}=function(e,t){if(Qc(e)){const{initial:t,animate:n}=e;return{initial:!1===t||ul(t)?t:void 0,animate:ul(n)?n:void 0}}return!1!==e.inherit?t:{}}(t,(0,e.useContext)(Kc));return(0,e.useMemo)((()=>({initial:n,animate:r})),[Xc(n),Xc(r)])}function Xc(e){return Array.isArray(e)?e.join(" "):e}const Jc="undefined"!==typeof window,Zc={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ed={};for(const n in Zc)ed[n]={isEnabled:e=>Zc[n].some((t=>!!e[t]))};const td=Symbol.for("motionComponentSymbol");function nd(t,n,r){return(0,e.useCallback)((e=>{e&&t.onMount&&t.onMount(e),n&&(e?n.mount(e):n.unmount()),r&&("function"===typeof r?r(e):Jl(r)&&(r.current=e))}),[n])}const rd=Jc?e.useLayoutEffect:e.useEffect;function id(t,n,r,i,a){var o,s;const{visualElement:l}=(0,e.useContext)(Kc),u=(0,e.useContext)(Wc),c=(0,e.useContext)(gu),d=(0,e.useContext)(qc).reducedMotion,h=(0,e.useRef)(null);i=i||u.renderer,!h.current&&i&&(h.current=i(t,{visualState:n,parent:l,props:r,presenceContext:c,blockInitialAnimation:!!c&&!1===c.initial,reducedMotionConfig:d}));const p=h.current,f=(0,e.useContext)(xu);!p||p.projection||!a||"html"!==p.type&&"svg"!==p.type||function(e,t,n,r){const{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:l,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:ad(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:Boolean(o)||s&&Jl(s),visualElement:e,animationType:"string"===typeof a?a:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:u})}(h.current,r,a,f);const m=(0,e.useRef)(!1);(0,e.useInsertionEffect)((()=>{p&&m.current&&p.update(r,c)}));const g=r[ka],v=(0,e.useRef)(Boolean(g)&&!(null===(o=window.MotionHandoffIsComplete)||void 0===o?void 0:o.call(window,g))&&(null===(s=window.MotionHasOptimisedAnimation)||void 0===s?void 0:s.call(window,g)));return rd((()=>{p&&(m.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),qi.render(p.render),v.current&&p.animationState&&p.animationState.animateChanges())})),(0,e.useEffect)((()=>{p&&(!v.current&&p.animationState&&p.animationState.animateChanges(),v.current&&(queueMicrotask((()=>{var e;null===(e=window.MotionHandoffMarkAsComplete)||void 0===e||e.call(window,g)})),v.current=!1))})),p}function ad(e){if(e)return!1!==e.options.allowProjection?e.projection:ad(e.parent)}function od(t){let{preloadedFeatures:n,createVisualElement:r,useRender:i,useVisualState:a,Component:o}=t;var s,l;function u(t,n){let s;const l={...(0,e.useContext)(qc),...t,layoutId:sd(t)},{isStatic:u}=l,c=Gc(t),d=a(t,u);if(!u&&Jc){!function(){(0,e.useContext)(Wc).strict;0}();const t=function(e){const{drag:t,layout:n}=ed;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:(null===t||void 0===t?void 0:t.isEnabled(e))||(null===n||void 0===n?void 0:n.isEnabled(e))?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}(l);s=t.MeasureLayout,c.visualElement=id(o,d,l,r,t.ProjectionNode)}return(0,Xr.jsxs)(Kc.Provider,{value:c,children:[s&&c.visualElement?(0,Xr.jsx)(s,{visualElement:c.visualElement,...l}):null,i(o,t,nd(d,c.visualElement,n),d,u,c.visualElement)]})}n&&function(e){for(const t in e)ed[t]={...ed[t],...e[t]}}(n),u.displayName=`motion.${"string"===typeof o?o:`create(${null!==(l=null!==(s=o.displayName)&&void 0!==s?s:o.name)&&void 0!==l?l:""})`}`;const c=(0,e.forwardRef)(u);return c[td]=o,c}function sd(t){let{layoutId:n}=t;const r=(0,e.useContext)(yu).id;return r&&void 0!==n?r+"-"+n:n}function ld(e,t){let{layout:n,layoutId:r}=t;return ma.has(e)||e.startsWith("origin")||(n||void 0!==r)&&(!!ju[e]||"opacity"===e)}const ud=(e,t)=>t&&"number"===typeof e?t.transform(e):e,cd={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},dd=fa.length;function hd(e,t,n){const{style:r,vars:i,transformOrigin:a}=e;let o=!1,s=!1;for(const l in t){const e=t[l];if(ma.has(l))o=!0;else if(Yo(l))i[l]=e;else{const t=ud(e,So[l]);l.startsWith("origin")?(s=!0,a[l]=t):r[l]=t}}if(t.transform||(o||n?r.transform=function(e,t,n){let r="",i=!0;for(let a=0;a<dd;a++){const o=fa[a],s=e[o];if(void 0===s)continue;let l=!0;if(l="number"===typeof s?s===(o.startsWith("scale")?1:0):0===parseFloat(s),!l||n){const e=ud(s,So[o]);l||(i=!1,r+=`${cd[o]||o}(${e}) `),n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}(t,e.transform,n):r.transform&&(r.transform="none")),s){const{originX:e="50%",originY:t="50%",originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}const pd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function fd(e,t,n){for(const r in t)ba(t[r])||ld(r,n)||(e[r]=t[r])}function md(t,n){const r={};return fd(r,t.style||{},t),Object.assign(r,function(t,n){let{transformTemplate:r}=t;return(0,e.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{}};return hd(e,n,r),Object.assign({},e.vars,e.style)}),[n])}(t,n)),r}function gd(e,t){const n={},r=md(e,t);return e.drag&&!1!==e.dragListener&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const vd=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function yd(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||vd.has(e)}let xd=e=>!yd(e);try{(bd=require("@emotion/is-prop-valid").default)&&(xd=e=>e.startsWith("on")?!yd(e):bd(e))}catch(HS){}var bd;const wd=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Sd(e){return"string"===typeof e&&!e.includes("-")&&!!(wd.indexOf(e)>-1||/[A-Z]/u.test(e))}const kd={offset:"stroke-dashoffset",array:"stroke-dasharray"},jd={offset:"strokeDashoffset",array:"strokeDasharray"};function Cd(e,t,n){return"string"===typeof e?e:Za.transform(t+n*e)}function Ed(e,t,n,r){let{attrX:i,attrY:a,attrScale:o,originX:s,originY:l,pathLength:u,pathSpacing:c=1,pathOffset:d=0,...h}=t;if(hd(e,h,r),n)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:p,style:f,dimensions:m}=e;p.transform&&(m&&(f.transform=p.transform),delete p.transform),m&&(void 0!==s||void 0!==l||f.transform)&&(f.transformOrigin=function(e,t,n){return`${Cd(t,e.x,e.width)} ${Cd(n,e.y,e.height)}`}(m,void 0!==s?s:.5,void 0!==l?l:.5)),void 0!==i&&(p.x=i),void 0!==a&&(p.y=a),void 0!==o&&(p.scale=o),void 0!==u&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const a=i?kd:jd;e[a.offset]=Za.transform(-r);const o=Za.transform(t),s=Za.transform(n);e[a.array]=`${o} ${s}`}(p,u,c,d,!1)}const Td=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),Pd=e=>"string"===typeof e&&"svg"===e.toLowerCase();function $d(t,n,r,i){const a=(0,e.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return Ed(e,n,Pd(i),t.transformTemplate),{...e.attrs,style:{...e.style}}}),[n]);if(t.style){const e={};fd(e,t.style,t),a.style={...e,...a.style}}return a}function Ad(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(n,r,i,a,o)=>{let{latestValues:s}=a;const l=(Sd(n)?$d:gd)(r,s,o,n),u=function(e,t,n){const r={};for(const i in e)"values"===i&&"object"===typeof e.values||(xd(i)||!0===n&&yd(i)||!t&&!yd(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}(r,"string"===typeof n,t),c=n!==e.Fragment?{...u,...l,ref:i}:{},{children:d}=r,h=(0,e.useMemo)((()=>ba(d)?d.get():d),[d]);return(0,e.createElement)(n,{...c,children:h})}}function Rd(t){const n=(0,e.useRef)(null);return null===n.current&&(n.current=t()),n.current}const Od=t=>(n,r)=>{const i=(0,e.useContext)(Kc),a=(0,e.useContext)(gu),o=()=>function(e,t,n,r){let{scrapeMotionValuesFromProps:i,createRenderState:a,onUpdate:o}=e;const s={latestValues:zd(t,n,r,i),renderState:a()};return o&&(s.onMount=e=>o({props:t,current:e,...s}),s.onUpdate=e=>o(e)),s}(t,n,i,a);return r?o():Rd(o)};function zd(e,t,n,r){const i={},a=r(e,{});for(const h in a)i[h]=Ru(a[h]);let{initial:o,animate:s}=e;const l=Qc(e),u=Yc(e);t&&u&&!l&&!1!==e.inherit&&(void 0===o&&(o=t.initial),void 0===s&&(s=t.animate));let c=!!n&&!1===n.initial;c=c||!1===o;const d=c?s:o;if(d&&"boolean"!==typeof d&&!yi(d)){const t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){const r=bi(e,t[n]);if(r){const{transitionEnd:e,transition:t,...n}=r;for(const r in n){let e=n[r];if(Array.isArray(e)){e=e[c?e.length-1:0]}null!==e&&(i[r]=e)}for(const r in e)i[r]=e[r]}}}return i}function Nd(e,t,n){var r;const{style:i}=e,a={};for(const o in i)(ba(i[o])||t.style&&ba(t.style[o])||ld(o,e)||void 0!==(null===(r=null===n||void 0===n?void 0:n.getValue(o))||void 0===r?void 0:r.liveStyle))&&(a[o]=i[o]);return a}const Md={useVisualState:Od({scrapeMotionValuesFromProps:Nd,createRenderState:pd})};function Ld(e,t){try{t.dimensions="function"===typeof e.getBBox?e.getBBox():e.getBoundingClientRect()}catch(US){t.dimensions={x:0,y:0,width:0,height:0}}}function Dd(e,t,n,r){let{style:i,vars:a}=t;Object.assign(e.style,i,r&&r.getProjectionStyles(n));for(const o in a)e.style.setProperty(o,a[o])}const Id=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Fd(e,t,n,r){Dd(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Id.has(i)?i:Sa(i),t.attrs[i])}function _d(e,t,n){const r=Nd(e,t,n);for(const i in e)if(ba(e[i])||ba(t[i])){r[-1!==fa.indexOf(i)?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i]=e[i]}return r}const Vd=["x","y","width","height","cx","cy","r"],Bd={useVisualState:Od({scrapeMotionValuesFromProps:_d,createRenderState:Td,onUpdate:e=>{let{props:t,prevProps:n,current:r,renderState:i,latestValues:a}=e;if(!r)return;let o=!!t.drag;if(!o)for(const l in a)if(ma.has(l)){o=!0;break}if(!o)return;let s=!n;if(n)for(let l=0;l<Vd.length;l++){const e=Vd[l];t[e]!==n[e]&&(s=!0)}s&&Bi.read((()=>{Ld(r,i),Bi.render((()=>{Ed(i,a,Pd(r.tagName),t.transformTemplate),Fd(r,i)}))}))}})};function Ud(e,t){return function(n){let{forwardMotionProps:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{forwardMotionProps:!1};return od({...Sd(n)?Bd:Md,preloadedFeatures:e,useRender:Ad(r),createVisualElement:t,Component:n})}}const Hd={current:null},Wd={current:!1};const qd=[...ns,io,fo],Kd=new WeakMap;const Qd=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Yd{scrapeMotionValuesFromProps(e,t,n){return{}}constructor(e){let{parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:a,visualState:o}=e,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=qo,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const e=Gi.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,Bi.render(this.render,!1,!0))};const{latestValues:l,renderState:u,onUpdate:c}=o;this.onUpdate=c,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.blockInitialAnimation=Boolean(a),this.isControllingVariants=Qc(n),this.isVariantNode=Yc(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:d,...h}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in h){const e=h[p];void 0!==l[p]&&ba(e)&&e.set(l[p],!1)}}mount(e){this.current=e,Kd.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((e,t)=>this.bindToMotionValue(t,e))),Wd.current||function(){if(Wd.current=!0,Jc)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Hd.current=e.matches;e.addListener(t),t()}else Hd.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||Hd.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Ui(this.notifyUpdate),Ui(this.render),this.valueSubscriptions.forEach((e=>e())),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const n=ma.has(e);n&&this.onBindTransform&&this.onBindTransform();const r=t.on("change",(t=>{this.latestValues[e]=t,this.props.onUpdate&&Bi.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)})),i=t.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,(()=>{r(),i(),a&&a(),t.owner&&t.stop()}))}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}updateFeatures(){let e="animation";for(e in ed){const t=ed[e];if(!t)continue;const{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<Qd.length;n++){const t=Qd[n];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const r=e["on"+t];r&&(this.propEventSubscriptions[t]=this.on(t,r))}this.prevMotionValues=function(e,t,n){for(const r in t){const i=t[r],a=n[r];if(ba(i))e.addValue(r,i);else if(ba(a))e.addValue(r,pa(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){const t=e.getValue(r);!0===t.liveStyle?t.jump(i):t.hasAnimated||t.set(i)}else{const t=e.getStaticValue(r);e.addValue(r,pa(void 0!==t?t:i,{owner:e}))}}for(const r in n)void 0===t[r]&&e.removeValue(r);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=pa(null===t?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){var n;let r=void 0===this.latestValues[e]&&this.current?null!==(n=this.getBaseTargetFromProps(this.props,e))&&void 0!==n?n:this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];return void 0!==r&&null!==r&&("string"===typeof r&&(Ko(r)||Da(r))?r=parseFloat(r):!(e=>qd.find(ts(e)))(r)&&fo.test(t)&&(r=Co(e,t)),this.setBaseTarget(e,ba(r)?r.get():r)),ba(r)?r.get():r}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:n}=this.props;let r;if("string"===typeof n||"object"===typeof n){const i=bi(this.props,n,null===(t=this.presenceContext)||void 0===t?void 0:t.custom);i&&(r=i[e])}if(n&&void 0!==r)return r;const i=this.getBaseTargetFromProps(this.props,e);return void 0===i||ba(i)?void 0!==this.initialValues[e]&&void 0===r?void 0:this.baseTarget[e]:i}on(e,t){return this.events[e]||(this.events[e]=new pi),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.events[e].notify(...n)}}}class Gd extends Yd{constructor(){super(...arguments),this.KeyframeResolver=is}sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,t){let{vars:n,style:r}=t;delete n[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;ba(e)&&(this.childSubscription=e.on("change",(e=>{this.current&&(this.current.textContent=`${e}`)})))}}class Xd extends Gd{constructor(){super(...arguments),this.type="html",this.renderInstance=Dd}readValueFromInstance(e,t){if(ma.has(t))return((e,t)=>{const{transform:n="none"}=getComputedStyle(e);return Mo(n,t)})(e,t);{const r=(n=e,window.getComputedStyle(n)),i=(Yo(t)?r.getPropertyValue(t):r[t])||0;return"string"===typeof i?i.trim():i}var n}measureInstanceViewportBox(e,t){let{transformPagePoint:n}=t;return Gl(e,n)}build(e,t,n){hd(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Nd(e,t,n)}}class Jd extends Gd{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Nl,this.updateDimensions=()=>{this.current&&!this.renderState.dimensions&&Ld(this.current,this.renderState)}}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(ma.has(t)){const e=jo(t);return e&&e.default||0}return t=Id.has(t)?t:Sa(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return _d(e,t,n)}onBindTransform(){this.current&&!this.renderState.dimensions&&Bi.postRender(this.updateDimensions)}build(e,t,n){Ed(e,t,this.isSVGTag,n.transformTemplate)}renderInstance(e,t,n,r){Fd(e,t,0,r)}mount(e){this.isSVGTag=Pd(e.tagName),super.mount(e)}}const Zd=vi(Ud({...kl,...Uc,...Nc,...Hc},((t,n)=>Sd(t)?new Jd(n):new Xd(n,{allowProjection:t!==e.Fragment})))),eh=Qr.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  height: 70vh;
  position: relative;
`,th=Qr(Zd.div)`
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
`,nh=Qr(Zd.div)`
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
`,rh=Qr(Zd.div)`
  position: absolute;
  height: 2px;
  background: var(--primary-light);
  transform-origin: center left;
  z-index: 1;
  left: 50%;
  top: 50%;
`,ih=Qr(Zd.div)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 300px;
  background: var(--surface);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 10;
`,ah=Qr.h3`
  margin-bottom: 0.5rem;
  color: var(--primary);
`,oh=Qr.p`
  margin-bottom: 1rem;
  font-size: 0.9rem;
`,sh=Qr(Xe)`
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
`,lh=[{id:"arrays",title:"Arrays",angle:0,distance:200,description:"A collection of elements stored at contiguous memory locations. Basic operations include insertion, deletion, traversal, and searching.",link:"/data-structures/arrays"},{id:"linkedLists",title:"Linked Lists",angle:45,distance:200,description:"A linear collection of data elements, where each element points to the next. Types include singly linked, doubly linked, and circular linked lists.",link:"/data-structures/linked-lists"},{id:"stacks",title:"Stacks",angle:90,distance:200,description:"A LIFO (Last In First Out) data structure where elements are added and removed from the same end.",link:"/data-structures/stacks"},{id:"queues",title:"Queues",angle:135,distance:200,description:"A FIFO (First In First Out) data structure where elements are added at one end and removed from the other.",link:"/data-structures/queues"},{id:"trees",title:"Trees",angle:180,distance:200,description:"A hierarchical structure with a root value and subtrees of children. Includes binary trees, binary search trees, AVL trees, and more.",link:"/data-structures/trees"},{id:"graphs",title:"Graphs",angle:225,distance:200,description:"A collection of nodes connected by edges. Can be directed or undirected, weighted or unweighted.",link:"/data-structures/graphs"},{id:"hashTables",title:"Hash Tables",angle:270,distance:200,description:"A data structure that implements an associative array. Uses a hash function to compute an index into an array of buckets or slots.",link:"/data-structures/hash-tables"},{id:"heaps",title:"Heaps",angle:315,distance:200,description:"A specialized tree-based data structure that satisfies the heap property. Used in priority queues and heap sort.",link:"/data-structures/heaps"}],uh=()=>{const[t,n]=(0,e.useState)(null),[r,i]=(0,e.useState)(!0);return(0,Xr.jsxs)(eh,{children:[(0,Xr.jsxs)(th,{onClick:()=>{n(null),i(!0)},animate:{scale:r?[1,1.05,1]:1},transition:{repeat:r?1/0:0,duration:2},children:["Data",(0,Xr.jsx)("br",{}),"Structures"]}),lh.map((r=>{const a=((e,t)=>{const n=e*Math.PI/180;return{x:Math.cos(n)*t,y:Math.sin(n)*t}})(r.angle,r.distance);return(0,Xr.jsxs)(e.Fragment,{children:[(0,Xr.jsx)(nh,{initial:{opacity:0,x:0,y:0},animate:{opacity:1,x:a.x,y:a.y,scale:t===r.id?1.2:1,boxShadow:t===r.id?"0 8px 25px rgba(98, 0, 238, 0.3)":"0 4px 10px rgba(0, 0, 0, 0.1)"},transition:{type:"spring",stiffness:100,damping:12},onClick:()=>(e=>{n(t===e.id?null:e),i(!1)})(r),whileHover:{scale:t===r.id?1.25:1.1},children:r.title}),(0,Xr.jsx)(rh,{initial:{opacity:0,width:0},animate:{opacity:1,width:r.distance,rotate:r.angle},transition:{duration:.5,delay:.2}})]},r.id)})),t&&(0,Xr.jsxs)(ih,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:50},transition:{type:"spring",stiffness:300,damping:25},children:[(0,Xr.jsx)(ah,{children:t.title}),(0,Xr.jsx)(oh,{children:t.description}),(0,Xr.jsxs)(sh,{to:t.link,children:["Explore ",t.title]})]})]})},ch=Qr.div`
  min-height: calc(100vh - 70px);
`,dh=Qr.div`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, var(--primary) 0%, #7c4dff 100%);
  color: white;
  text-align: center;
`,hh=Qr(Zd.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
`,ph=Qr(Zd.p)`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  opacity: 0.9;
`,fh=Qr.section`
  padding: 2rem;
`,mh=Qr.h2`
  text-align: center;
  margin-bottom: 1rem;
  color: var(--primary);
`,gh=Qr.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem;
  color: var(--text-secondary);
`,vh=()=>(0,Xr.jsxs)(ch,{children:[(0,Xr.jsxs)(dh,{children:[(0,Xr.jsx)(hh,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6},children:"DSA Visualizer"}),(0,Xr.jsx)(ph,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"Interactive visualizations of data structures and algorithms to help you learn and understand core computer science concepts"})]}),(0,Xr.jsxs)(fh,{children:[(0,Xr.jsx)(mh,{children:"Explore Data Structures"}),(0,Xr.jsx)(gh,{children:"Click on any data structure below to learn more about it, or click on the center to reset the view."}),(0,Xr.jsx)(uh,{})]})]}),yh=Qr.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,xh=Qr.div`
  text-align: center;
  margin-bottom: 3rem;
`,bh=Qr.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,wh=Qr.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,Sh=Qr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,kh=Qr(Zd(Xe))`
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
`,jh=Qr.div`
  background: var(--primary);
  color: white;
  padding: 1.5rem;
  text-align: center;
`,Ch=Qr.h3`
  margin: 0;
`,Eh=Qr.div`
  padding: 1.5rem;
  flex: 1;
`,Th=Qr.p`
  margin-bottom: 1rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
`,Ph=Qr.div`
  padding: 1rem 1.5rem;
  text-align: right;
  color: var(--primary);
  font-weight: 500;
`,$h=[{id:"arrays",title:"Arrays",description:"A collection of elements stored at contiguous memory locations. Basic operations include insertion, deletion, traversal, and searching.",link:"/data-structures/arrays",complexity:"Access: O(1), Search: O(n), Insert: O(n), Delete: O(n)"},{id:"linkedLists",title:"Linked Lists",description:"A linear collection of data elements, where each element points to the next. Types include singly linked, doubly linked, and circular linked lists.",link:"/data-structures/linked-lists",complexity:"Access: O(n), Search: O(n), Insert: O(1), Delete: O(1)"},{id:"stacks",title:"Stacks",description:"A LIFO (Last In First Out) data structure where elements are added and removed from the same end.",link:"/data-structures/stacks",complexity:"Access: O(n), Search: O(n), Insert: O(1), Delete: O(1)"},{id:"queues",title:"Queues",description:"A FIFO (First In First Out) data structure where elements are added at one end and removed from the other.",link:"/data-structures/queues",complexity:"Access: O(n), Search: O(n), Insert: O(1), Delete: O(1)"},{id:"trees",title:"Trees",description:"A hierarchical structure with a root value and subtrees of children. Includes binary trees, binary search trees, AVL trees, and more.",link:"/data-structures/trees",complexity:"Access: O(log n), Search: O(log n), Insert: O(log n), Delete: O(log n)"},{id:"graphs",title:"Graphs",description:"A collection of nodes connected by edges. Can be directed or undirected, weighted or unweighted.",link:"/data-structures/graphs",complexity:"Access: O(n), Search: O(n), Insert: O(1), Delete: O(1)"},{id:"hashTables",title:"Hash Tables",description:"A data structure that implements an associative array. Uses a hash function to compute an index into an array of buckets or slots.",link:"/data-structures/hash-tables",complexity:"Access: N/A, Search: O(1)*, Insert: O(1)*, Delete: O(1)*"},{id:"heaps",title:"Heaps",description:"A specialized tree-based data structure that satisfies the heap property. Used in priority queues and heap sort.",link:"/data-structures/heaps",complexity:"Access: O(1), Search: O(n), Insert: O(log n), Delete: O(log n)"}],Ah=()=>(0,Xr.jsxs)(yh,{children:[(0,Xr.jsxs)(xh,{children:[(0,Xr.jsx)(bh,{children:"Data Structures"}),(0,Xr.jsx)(wh,{children:"Learn about various data structures, their operations, time complexity, and use cases through interactive visualizations."})]}),(0,Xr.jsx)(Sh,{children:$h.map(((e,t)=>(0,Xr.jsxs)(kh,{to:e.link,initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},children:[(0,Xr.jsx)(jh,{children:(0,Xr.jsx)(Ch,{children:e.title})}),(0,Xr.jsxs)(Eh,{children:[(0,Xr.jsx)(Th,{children:e.description}),(0,Xr.jsxs)("small",{style:{color:"var(--text-secondary)"},children:[(0,Xr.jsx)("strong",{children:"Complexity:"}),(0,Xr.jsx)("br",{}),e.complexity]})]}),(0,Xr.jsx)(Ph,{children:"Explore \u2192"})]},e.id)))})]});class Rh extends e.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=t.offsetParent,n=e instanceof HTMLElement&&e.offsetWidth||0,r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft,r.right=n-r.width-r.left}return null}componentDidUpdate(){}render(){return this.props.children}}function Oh(t){let{children:n,isPresent:r,anchorX:i}=t;const a=(0,e.useId)(),o=(0,e.useRef)(null),s=(0,e.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=(0,e.useContext)(qc);return(0,e.useInsertionEffect)((()=>{const{width:e,height:t,top:n,left:u,right:c}=s.current;if(r||!o.current||!e||!t)return;const d="left"===i?`left: ${u}`:`right: ${c}`;o.current.dataset.motionPopId=a;const h=document.createElement("style");return l&&(h.nonce=l),document.head.appendChild(h),h.sheet&&h.sheet.insertRule(`\n          [data-motion-pop-id="${a}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            ${d}px !important;\n            top: ${n}px !important;\n          }\n        `),()=>{document.head.removeChild(h)}}),[r]),(0,Xr.jsx)(Rh,{isPresent:r,childRef:o,sizeRef:s,children:e.cloneElement(n,{ref:o})})}const zh=t=>{let{children:n,initial:r,isPresent:i,onExitComplete:a,custom:o,presenceAffectsLayout:s,mode:l,anchorX:u}=t;const c=Rd(Nh),d=(0,e.useId)(),h=(0,e.useCallback)((e=>{c.set(e,!0);for(const t of c.values())if(!t)return;a&&a()}),[c,a]),p=(0,e.useMemo)((()=>({id:d,initial:r,isPresent:i,custom:o,onExitComplete:h,register:e=>(c.set(e,!1),()=>c.delete(e))})),s?[Math.random(),h]:[i,h]);return(0,e.useMemo)((()=>{c.forEach(((e,t)=>c.set(t,!1)))}),[i]),e.useEffect((()=>{!i&&!c.size&&a&&a()}),[i]),"popLayout"===l&&(n=(0,Xr.jsx)(Oh,{isPresent:i,anchorX:u,children:n})),(0,Xr.jsx)(gu.Provider,{value:p,children:n})};function Nh(){return new Map}const Mh=e=>e.key||"";function Lh(t){const n=[];return e.Children.forEach(t,(t=>{(0,e.isValidElement)(t)&&n.push(t)})),n}const Dh=t=>{let{children:n,custom:r,initial:i=!0,onExitComplete:a,presenceAffectsLayout:o=!0,mode:s="sync",propagate:l=!1,anchorX:u="left"}=t;const[c,d]=vu(l),h=(0,e.useMemo)((()=>Lh(n)),[n]),p=l&&!c?[]:h.map(Mh),f=(0,e.useRef)(!0),m=(0,e.useRef)(h),g=Rd((()=>new Map)),[v,y]=(0,e.useState)(h),[x,b]=(0,e.useState)(h);rd((()=>{f.current=!1,m.current=h;for(let e=0;e<x.length;e++){const t=Mh(x[e]);p.includes(t)?g.delete(t):!0!==g.get(t)&&g.set(t,!1)}}),[x,p.length,p.join("-")]);const w=[];if(h!==v){let e=[...h];for(let t=0;t<x.length;t++){const n=x[t],r=Mh(n);p.includes(r)||(e.splice(t,0,n),w.push(n))}return"wait"===s&&w.length&&(e=w),b(Lh(e)),y(h),null}const{forceRender:S}=(0,e.useContext)(yu);return(0,Xr.jsx)(Xr.Fragment,{children:x.map((e=>{const t=Mh(e),n=!(l&&!c)&&(h===x||p.includes(t));return(0,Xr.jsx)(zh,{isPresent:n,initial:!(f.current&&!i)&&void 0,custom:r,presenceAffectsLayout:o,mode:s,onExitComplete:n?void 0:()=>{if(!g.has(t))return;g.set(t,!0);let e=!0;g.forEach((t=>{t||(e=!1)})),e&&(null===S||void 0===S||S(),b(m.current),l&&(null===d||void 0===d||d()),a&&a())},anchorX:u,children:e},t)}))})},Ih=Qr.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,Fh=Qr.div`
  text-align: center;
  margin-bottom: 3rem;
`,_h=Qr.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,Vh=Qr.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,Bh=Qr.div`
  max-width: 1200px;
  margin: 2rem auto;
  position: relative;
`,Uh=Qr(Zd.div)`
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
  
  &:hover {
    background: var(--primary-light);
  }
`,Hh=Qr.h3`
  margin: 0;
  font-size: 1.2rem;
`,Wh=Qr.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: ${e=>e.expanded?"rotate(180deg)":"rotate(0deg)"};
`,qh=Qr(Zd.div)`
  margin-left: 2rem;
  position: relative;
  padding: 0.5rem 0 0.5rem 2rem;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0.75rem;
    height: 100%;
    width: 2px;
    background: var(--primary-light);
  }
`,Kh=Qr(Zd.div)`
  background: var(--surface);
  color: var(--text-primary);
  padding: 0.75rem 1.25rem;
  border-radius: var(--border-radius);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  position: relative;
  cursor: pointer;
  
  &:hover {
    background: #f5f5f5;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: -2rem;
    width: 2rem;
    height: 2px;
    background: var(--primary-light);
  }
`,Qh=Qr(Zd(Xe))`
  display: block;
  margin-left: 2rem;
  position: relative;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: var(--border-radius);
  color: var(--text-secondary);
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  
  &:hover {
    background: #f0f0f0;
    color: var(--primary);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: -1.5rem;
    width: 1.5rem;
    height: 2px;
    background: var(--primary-light);
  }
`,Yh=Qr.span`
  font-size: 0.7rem;
  background: var(--secondary);
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 20px;
  margin-left: 0.5rem;
  vertical-align: middle;
`,Gh=()=>{const[t,n]=(0,e.useState)({sorting:!0,searching:!1,graph:!1,dynamic:!1,string:!1}),[r,i]=(0,e.useState)({});return(0,Xr.jsxs)(Ih,{children:[(0,Xr.jsxs)(Fh,{children:[(0,Xr.jsx)(_h,{children:"Algorithms"}),(0,Xr.jsx)(Vh,{children:"Learn about sorting, searching, graph algorithms, dynamic programming, string matching and more through interactive visualizations."})]}),(0,Xr.jsx)(Bh,{children:(0,Xr.jsx)(Dh,{children:[{id:"sorting",title:"Sorting Algorithms",description:"Algorithms that put elements of a list in a certain order.",algorithms:[{id:"bubble",title:"Bubble Sort",comingSoon:!1},{id:"selection",title:"Selection Sort",comingSoon:!1},{id:"insertion",title:"Insertion Sort",comingSoon:!1},{id:"merge",title:"Merge Sort",comingSoon:!1},{id:"quick",title:"Quick Sort",comingSoon:!1},{id:"heap",title:"Heap Sort",comingSoon:!1}]},{id:"searching",title:"Searching Algorithms",description:"Algorithms for finding an item with specified properties within a collection.",algorithms:[{id:"linear",title:"Linear Search",comingSoon:!1},{id:"binary",title:"Binary Search",comingSoon:!1},{id:"jump",title:"Jump Search",comingSoon:!1},{id:"interpolation",title:"Interpolation Search",comingSoon:!1},{id:"exponential",title:"Exponential Search",comingSoon:!1}]},{id:"graph",title:"Graph Algorithms",subcategories:[{id:"traversal",title:"Graph Traversal",algorithms:[{id:"bfs",title:"Breadth-First Search",comingSoon:!1},{id:"dfs",title:"Depth-First Search",comingSoon:!1}]},{id:"shortest",title:"Shortest Path",algorithms:[{id:"dijkstra",title:"Dijkstra's Algorithm",comingSoon:!0},{id:"bellman-ford",title:"Bellman-Ford",comingSoon:!0},{id:"floyd-warshall",title:"Floyd-Warshall",comingSoon:!0}]},{id:"mst",title:"Minimum Spanning Tree",algorithms:[{id:"kruskal",title:"Kruskal's Algorithm",comingSoon:!0},{id:"prim",title:"Prim's Algorithm",comingSoon:!0}]}]},{id:"dynamic",title:"Dynamic Programming",subcategories:[{id:"classic",title:"Classic Problems",algorithms:[{id:"fibonacci",title:"Fibonacci Sequence",comingSoon:!0},{id:"knapsack",title:"0/1 Knapsack",comingSoon:!0},{id:"lcs",title:"Longest Common Subsequence",comingSoon:!0},{id:"lis",title:"Longest Increasing Subsequence",comingSoon:!0}]}]},{id:"string",title:"String Algorithms",subcategories:[{id:"pattern",title:"Pattern Matching",algorithms:[{id:"naive",title:"Naive Pattern Matching",comingSoon:!0},{id:"kmp",title:"Knuth-Morris-Pratt",comingSoon:!0},{id:"rabin-karp",title:"Rabin-Karp",comingSoon:!0}]},{id:"other",title:"Other String Operations",algorithms:[{id:"levenshtein",title:"Levenshtein Distance",comingSoon:!0},{id:"manacher",title:"Manacher's Algorithm",comingSoon:!0}]}]}].map((a=>(0,Xr.jsxs)(e.Fragment,{children:[(0,Xr.jsxs)(Uh,{onClick:()=>(e=>{n({...t,[e]:!t[e]})})(a.id),initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3},children:[(0,Xr.jsx)(Hh,{children:a.title}),(0,Xr.jsx)(Wh,{expanded:t[a.id],children:"\u25bc"})]}),t[a.id]&&(0,Xr.jsx)(qh,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},children:a.subcategories?a.subcategories.map((t=>(0,Xr.jsxs)(e.Fragment,{children:[(0,Xr.jsxs)(Kh,{onClick:()=>(e=>{i({...r,[e]:!r[e]})})(`${a.id}-${t.id}`),initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{duration:.2},children:[t.title,(0,Xr.jsx)(Wh,{expanded:r[`${a.id}-${t.id}`],style:{fontSize:"0.9rem"},children:"\u25bc"})]}),(0,Xr.jsx)(Dh,{children:r[`${a.id}-${t.id}`]&&(0,Xr.jsx)(Zd.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.2},children:t.algorithms.map((e=>(0,Xr.jsxs)(Qh,{to:e.comingSoon?"#":`/algorithms/${a.id}/${e.id}`,onClick:t=>e.comingSoon&&t.preventDefault(),initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},children:[e.title,e.comingSoon&&(0,Xr.jsx)(Yh,{children:"Coming Soon"})]},e.id)))})})]},t.id))):a.algorithms&&a.algorithms.map((e=>(0,Xr.jsxs)(Qh,{to:e.comingSoon?"#":`/algorithms/${a.id}/${e.id}`,onClick:t=>e.comingSoon&&t.preventDefault(),initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},children:[e.title,e.comingSoon&&(0,Xr.jsx)(Yh,{children:"Coming Soon"})]},e.id)))})]},a.id)))})})]})},Xh=Qr.div`
  background: #1e1e1e;
  border-radius: var(--border-radius);
  overflow: hidden;
  margin: 2rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,Jh=Qr.div`
  background: #2d2d2d;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #3d3d3d;
`,Zh=Qr.h3`
  color: #fff;
  margin: 0;
  font-size: 1rem;
`,ep=Qr.pre`
  margin: 0;
  padding: 1rem;
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #d4d4d4;
  white-space: pre;
  tab-size: 4;
`,tp=e=>{let{title:t,code:n}=e;return(0,Xr.jsxs)(Xh,{children:[(0,Xr.jsx)(Jh,{children:(0,Xr.jsx)(Zh,{children:t})}),(0,Xr.jsx)(ep,{children:(0,Xr.jsx)("code",{children:n})})]})},np=Qr.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,rp=Qr.div`
  text-align: center;
  margin-bottom: 2rem;
`,ip=Qr.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,ap=Qr.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,op=Qr.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,sp=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
  justify-content: center;
`,lp=Qr(Zd.div)`
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
`,up=Qr.span`
  position: absolute;
  top: -25px;
  font-size: 0.75rem;
  color: var(--text-secondary);
`,cp=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
`,dp=Qr.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 80px;
`,hp=Qr.button`
  background: ${e=>"secondary"===e.variant?"var(--secondary)":"var(--primary)"};
  
  &:hover {
    background: ${e=>"secondary"===e.variant?"#02c4b0":"var(--primary-light)"};
  }
`,pp=Qr(Zd.div)`
  margin: 1rem 0;
  padding: 1rem;
  background: ${e=>"error"===e.type?"#ffebee":"#e8f5e9"};
  color: ${e=>"error"===e.type?"var(--error)":"#2e7d32"};
  border-radius: var(--border-radius);
  text-align: center;
`,fp=Qr.div`
  margin-top: 2rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,mp=Qr.h3`
  margin-bottom: 0.5rem;
  color: var(--primary);
`,gp=Qr.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,vp=Qr.button`
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
`,yp=()=>{const[t,n]=(0,e.useState)([10,20,30,40,50]),[r,i]=(0,e.useState)(""),[a,o]=(0,e.useState)(""),[s,l]=(0,e.useState)(null),[u,c]=(0,e.useState)(null),[d,h]=(0,e.useState)(-1),[p,f]=(0,e.useState)("visualization"),m=function(e){l({text:e,type:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success"}),setTimeout((()=>{l(null)}),3e3)},g=(()=>{switch(u){case"insert":return{title:"Insert Operation",description:"Insertion into an array requires shifting all elements after the insertion point by one position to make room for the new element. This operation has a time complexity of O(n) in the worst case."};case"remove":return{title:"Remove Operation",description:"Removing an element from an array requires shifting all elements after the removed element to fill the gap. This operation has a time complexity of O(n) in the worst case."};case"search":return{title:"Search Operation",description:"Linear search in an unsorted array involves checking each element one by one until the target value is found or the end of the array is reached. This operation has a time complexity of O(n) in the worst case."};default:return null}})();return(0,Xr.jsxs)(np,{children:[(0,Xr.jsxs)(rp,{children:[(0,Xr.jsx)(ip,{children:"Arrays"}),(0,Xr.jsx)(ap,{children:"An array is a collection of elements stored at contiguous memory locations. It is the simplest data structure where each element can be accessed directly using its index."})]}),(0,Xr.jsxs)(op,{children:[(0,Xr.jsxs)(gp,{children:[(0,Xr.jsx)(vp,{active:"visualization"===p,onClick:()=>f("visualization"),children:"Visualization"}),(0,Xr.jsx)(vp,{active:"code"===p,onClick:()=>f("code"),children:"Implementation"})]}),"visualization"===p?(0,Xr.jsxs)(Xr.Fragment,{children:[(0,Xr.jsxs)(cp,{children:[(0,Xr.jsxs)("div",{children:[(0,Xr.jsx)("label",{children:"Value: "}),(0,Xr.jsx)(dp,{type:"text",value:r,onChange:e=>i(e.target.value),placeholder:"Value"})]}),(0,Xr.jsxs)("div",{children:[(0,Xr.jsx)("label",{children:"Index: "}),(0,Xr.jsx)(dp,{type:"text",value:a,onChange:e=>o(e.target.value),placeholder:"Index"})]}),(0,Xr.jsx)(hp,{onClick:()=>{if(""===r)return void m("Please enter a value","error");const e=parseInt(r),i=""===a?t.length:parseInt(a);if(isNaN(e))return void m("Value must be a number","error");if(i<0||i>t.length)return void m("Invalid index","error");const o=[...t];o.splice(i,0,e),h(i),n(o),c("insert"),m(`Inserted ${e} at index ${i}`),setTimeout((()=>{h(-1)}),1500)},children:"Insert"}),(0,Xr.jsx)(hp,{onClick:()=>{if(""===a)return void m("Please enter an index","error");const e=parseInt(a);isNaN(e)||e<0||e>=t.length?m("Invalid index","error"):(h(e),setTimeout((()=>{const r=[...t],i=r.splice(e,1)[0];n(r),c("remove"),m(`Removed value ${i} from index ${e}`),h(-1)}),800))},variant:"secondary",children:"Remove"}),(0,Xr.jsx)(hp,{onClick:()=>{if(""===r)return void m("Please enter a value to search","error");const e=parseInt(r);if(isNaN(e))return void m("Value must be a number","error");c("search");(async()=>{for(let n=0;n<t.length;n++)if(h(n),await new Promise((e=>setTimeout(e,500))),t[n]===e)return m(`Found ${e} at index ${n}`),void setTimeout((()=>{h(-1)}),1500);h(-1),m(`Value ${e} not found in the array`,"error")})()},children:"Search"})]}),(0,Xr.jsx)(Dh,{children:s&&(0,Xr.jsx)(pp,{type:s.type,initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0},children:s.text})}),(0,Xr.jsx)(sp,{children:t.map(((e,t)=>(0,Xr.jsxs)(lp,{highlight:t===d,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.3},layout:!0,children:[(0,Xr.jsx)(up,{children:t}),e]},`${t}-${e}`)))}),g&&(0,Xr.jsxs)(fp,{children:[(0,Xr.jsx)(mp,{children:g.title}),(0,Xr.jsx)("p",{children:g.description})]})]}):(0,Xr.jsx)(tp,{title:"Dynamic Array Implementation",code:'public class DynamicArray {\n    private int[] arr;\n    private int size;\n    private int capacity;\n    \n    public DynamicArray() {\n        capacity = 10;\n        arr = new int[capacity];\n        size = 0;\n    }\n    \n    public void insert(int value, int index) {\n        if (index < 0 || index > size)\n            throw new IndexOutOfBoundsException("Invalid index");\n            \n        if (size == capacity)\n            resize();\n            \n        // Shift elements to the right\n        for (int i = size; i > index; i--)\n            arr[i] = arr[i-1];\n            \n        arr[index] = value;\n        size++;\n    }\n    \n    public void remove(int index) {\n        if (index < 0 || index >= size)\n            throw new IndexOutOfBoundsException("Invalid index");\n            \n        // Shift elements to the left\n        for (int i = index; i < size - 1; i++)\n            arr[i] = arr[i+1];\n            \n        size--;\n    }\n    \n    public int search(int value) {\n        for (int i = 0; i < size; i++)\n            if (arr[i] == value)\n                return i;\n        return -1;\n    }\n    \n    private void resize() {\n        capacity *= 2;\n        int[] newArr = new int[capacity];\n        for (int i = 0; i < size; i++)\n            newArr[i] = arr[i];\n        arr = newArr;\n    }\n    \n    public int get(int index) {\n        if (index < 0 || index >= size)\n            throw new IndexOutOfBoundsException("Invalid index");\n        return arr[index];\n    }\n}'})]})]})},xp=Qr.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,bp=Qr.div`
  text-align: center;
  margin-bottom: 2rem;
`,wp=Qr.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,Sp=Qr.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,kp=Qr.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,jp=Qr.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0;
  overflow-x: auto;
  max-width: 100%;
  padding: 1rem 0;
`,Cp=Qr(Zd.div)`
  position: relative;
  display: flex;
  margin-right: 10px;
  min-width: 120px;
`,Ep=Qr.div`
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
`,Tp=Qr.div`
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
`,Pp=Qr.div`
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
`,$p=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
`,Ap=Qr.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 80px;
`,Rp=Qr.button`
  background: ${e=>"secondary"===e.variant?"var(--secondary)":"var(--primary)"};
  
  &:hover {
    background: ${e=>"secondary"===e.variant?"#02c4b0":"var(--primary-light)"};
  }
`,Op=Qr(Zd.div)`
  margin: 1rem 0;
  padding: 1rem;
  background: ${e=>"error"===e.type?"#ffebee":"#e8f5e9"};
  color: ${e=>"error"===e.type?"var(--error)":"#2e7d32"};
  border-radius: var(--border-radius);
  text-align: center;
`,zp=Qr.div`
  margin-top: 2rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,Np=Qr.h3`
  margin-bottom: 0.5rem;
  color: var(--primary);
`,Mp=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
  justify-content: center;
`,Lp=Qr.button`
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
`,Dp=Qr.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,Ip=Qr.button`
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
`,Fp=()=>{const[t,n]=(0,e.useState)([10,20,30,40]),[r,i]=(0,e.useState)(""),[a,o]=(0,e.useState)(""),[s,l]=(0,e.useState)(null),[u,c]=(0,e.useState)(null),[d,h]=(0,e.useState)(-1),[p,f]=(0,e.useState)("singly"),[m,g]=(0,e.useState)("visualization"),v=function(e){l({text:e,type:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success"}),setTimeout((()=>{l(null)}),3e3)},y=(()=>{switch(u){case"insertHead":return{title:"Insert at Head",description:"Time Complexity: O(1). In a linked list, inserting at the head only requires updating the head pointer, making it a constant time operation."};case"insertTail":return{title:"Insert at Tail",description:"singly"===p?"Time Complexity: O(n) for singly linked list. We need to traverse to the end of the list to add an element there.":"Time Complexity: O(1) for doubly linked list. With a tail pointer, we can directly access and update the tail."};case"insertAt":return{title:"Insert at Position",description:"Time Complexity: O(n). We need to traverse the list to find the insertion point, taking linear time in the worst case."};case"removeHead":return{title:"Remove from Head",description:"Time Complexity: O(1). Removing from the head only requires updating the head pointer, making it a constant time operation."};case"removeTail":return{title:"Remove from Tail",description:"singly"===p?"Time Complexity: O(n) for singly linked list. We need to traverse to find the node before the tail.":"Time Complexity: O(1) for doubly linked list. With a tail pointer, we can directly update the previous node."};case"removeAt":return{title:"Remove at Position",description:"Time Complexity: O(n). We need to traverse the list to find the node, taking linear time in the worst case."};case"search":return{title:"Search Operation",description:"Time Complexity: O(n). In the worst case, we may need to search through the entire list to find an element."};default:return null}})();return(0,Xr.jsxs)(xp,{children:[(0,Xr.jsxs)(bp,{children:[(0,Xr.jsx)(wp,{children:"Linked Lists"}),(0,Xr.jsx)(Sp,{children:"A linked list is a linear data structure where each element is a separate object containing a data item and a reference to the next node in the sequence."})]}),(0,Xr.jsxs)(kp,{children:[(0,Xr.jsxs)(Dp,{children:[(0,Xr.jsx)(Ip,{active:"visualization"===m,onClick:()=>g("visualization"),children:"Visualization"}),(0,Xr.jsx)(Ip,{active:"code"===m,onClick:()=>g("code"),children:"Implementation"})]}),"visualization"===m?(0,Xr.jsxs)(Xr.Fragment,{children:[(0,Xr.jsxs)(Mp,{children:[(0,Xr.jsx)(Lp,{active:"singly"===p,onClick:()=>f("singly"),children:"Singly Linked List"}),(0,Xr.jsx)(Lp,{active:"doubly"===p,onClick:()=>f("doubly"),children:"Doubly Linked List"})]}),(0,Xr.jsxs)($p,{children:[(0,Xr.jsxs)("div",{children:[(0,Xr.jsx)("label",{children:"Value: "}),(0,Xr.jsx)(Ap,{type:"text",value:r,onChange:e=>i(e.target.value),placeholder:"Value"})]}),(0,Xr.jsxs)("div",{children:[(0,Xr.jsx)("label",{children:"Position: "}),(0,Xr.jsx)(Ap,{type:"text",value:a,onChange:e=>o(e.target.value),placeholder:"Position"})]})]}),(0,Xr.jsxs)($p,{children:[(0,Xr.jsx)(Rp,{onClick:()=>{if(""===r)return void v("Please enter a value","error");const e=parseInt(r);isNaN(e)?v("Value must be a number","error"):(c("insertHead"),h(0),setTimeout((()=>{n([e,...t]),v(`Inserted ${e} at head`),h(-1)}),800))},children:"Insert at Head"}),(0,Xr.jsx)(Rp,{onClick:()=>{if(""===r)return void v("Please enter a value","error");const e=parseInt(r);isNaN(e)?v("Value must be a number","error"):(c("insertTail"),h(t.length-1),setTimeout((()=>{n([...t,e]),v(`Inserted ${e} at tail`),h(-1)}),800))},children:"Insert at Tail"}),(0,Xr.jsx)(Rp,{onClick:()=>{if(""===r||""===a)return void v("Please enter both value and position","error");const e=parseInt(r),i=parseInt(a);if(isNaN(e))return void v("Value must be a number","error");if(isNaN(i)||i<0||i>t.length)return void v("Invalid position","error");c("insertAt");(async()=>{for(let e=0;e<i;e++)h(e),await new Promise((e=>setTimeout(e,500)));const r=[...t];r.splice(i,0,e),n(r),v(`Inserted ${e} at position ${i}`),setTimeout((()=>{h(-1)}),800)})()},variant:"secondary",children:"Insert at Position"}),(0,Xr.jsx)(Rp,{onClick:()=>{0!==t.length?(c("removeHead"),h(0),setTimeout((()=>{const e=t[0];n(t.slice(1)),v(`Removed ${e} from head`),h(-1)}),800)):v("List is empty","error")},children:"Remove Head"}),(0,Xr.jsx)(Rp,{onClick:()=>{0!==t.length?(c("removeTail"),h(t.length-1),setTimeout((()=>{const e=t[t.length-1];n(t.slice(0,-1)),v(`Removed ${e} from tail`),h(-1)}),800)):v("List is empty","error")},children:"Remove Tail"}),(0,Xr.jsx)(Rp,{onClick:()=>{if(""===a)return void v("Please enter a position","error");const e=parseInt(a);if(isNaN(e)||e<0||e>=t.length)return void v("Invalid position","error");c("removeAt");(async()=>{for(let t=0;t<=e;t++)h(t),await new Promise((e=>setTimeout(e,500)));const r=t[e],i=[...t];i.splice(e,1),n(i),v(`Removed ${r} from position ${e}`),setTimeout((()=>{h(-1)}),800)})()},variant:"secondary",children:"Remove at Position"}),(0,Xr.jsx)(Rp,{onClick:()=>{if(""===r)return void v("Please enter a value to search","error");const e=parseInt(r);if(isNaN(e))return void v("Value must be a number","error");c("search");(async()=>{for(let n=0;n<t.length;n++)if(h(n),await new Promise((e=>setTimeout(e,500))),t[n]===e)return v(`Found ${e} at position ${n}`),void setTimeout((()=>{h(-1)}),1500);h(-1),v(`Value ${e} not found in the list`,"error")})()},children:"Search"})]}),(0,Xr.jsx)(Dh,{children:s&&(0,Xr.jsx)(Op,{type:s.type,initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0},children:s.text})}),(0,Xr.jsx)(jp,{children:0===t.length?(0,Xr.jsx)(Pp,{children:"NULL"}):(0,Xr.jsx)(Xr.Fragment,{children:t.map(((e,n)=>(0,Xr.jsxs)(Cp,{children:["doubly"===p&&n>0&&(0,Xr.jsx)(Tp,{style:{transform:"rotate(180deg)",position:"absolute",left:"-15px",top:"30px",width:"15px"}}),(0,Xr.jsx)(Ep,{highlight:n===d,children:e}),n<t.length-1&&(0,Xr.jsx)(Tp,{}),n===t.length-1&&(0,Xr.jsx)(Pp,{children:"NULL"})]},n)))})}),y&&(0,Xr.jsxs)(zp,{children:[(0,Xr.jsx)(Np,{children:y.title}),(0,Xr.jsx)("p",{children:y.description})]})]}):(0,Xr.jsxs)("div",{children:["singly"===p&&(0,Xr.jsx)(tp,{title:"Singly Linked List Implementation",code:'public class SinglyLinkedList {\n    private Node head;\n    private int size;\n    \n    private class Node {\n        int value;\n        Node next;\n        \n        Node(int value) {\n            this.value = value;\n            this.next = null;\n        }\n    }\n    \n    public SinglyLinkedList() {\n        head = null;\n        size = 0;\n    }\n    \n    public void insert(int value, int position) {\n        if (position < 0 || position > size)\n            throw new IndexOutOfBoundsException("Invalid position");\n            \n        Node newNode = new Node(value);\n        \n        if (position == 0) {\n            newNode.next = head;\n            head = newNode;\n        } else {\n            Node current = head;\n            for (int i = 0; i < position - 1; i++)\n                current = current.next;\n            newNode.next = current.next;\n            current.next = newNode;\n        }\n        \n        size++;\n    }\n    \n    public void delete(int position) {\n        if (position < 0 || position >= size)\n            throw new IndexOutOfBoundsException("Invalid position");\n            \n        if (position == 0) {\n            head = head.next;\n        } else {\n            Node current = head;\n            for (int i = 0; i < position - 1; i++)\n                current = current.next;\n            current.next = current.next.next;\n        }\n        \n        size--;\n    }\n    \n    public int search(int value) {\n        Node current = head;\n        int position = 0;\n        \n        while (current != null) {\n            if (current.value == value)\n                return position;\n            current = current.next;\n            position++;\n        }\n        \n        return -1;\n    }\n}'}),"doubly"===p&&(0,Xr.jsx)(tp,{title:"Doubly Linked List Implementation",code:'public class DoublyLinkedList {\n    private Node head;\n    private Node tail;\n    private int size;\n    \n    private class Node {\n        int value;\n        Node prev;\n        Node next;\n        \n        Node(int value) {\n            this.value = value;\n            this.prev = null;\n            this.next = null;\n        }\n    }\n    \n    public DoublyLinkedList() {\n        head = null;\n        tail = null;\n        size = 0;\n    }\n    \n    public void insert(int value, int position) {\n        if (position < 0 || position > size)\n            throw new IndexOutOfBoundsException("Invalid position");\n            \n        Node newNode = new Node(value);\n        \n        if (size == 0) {\n            head = tail = newNode;\n        } else if (position == 0) {\n            newNode.next = head;\n            head.prev = newNode;\n            head = newNode;\n        } else if (position == size) {\n            newNode.prev = tail;\n            tail.next = newNode;\n            tail = newNode;\n        } else {\n            Node current = head;\n            for (int i = 0; i < position - 1; i++)\n                current = current.next;\n            newNode.next = current.next;\n            newNode.prev = current;\n            current.next.prev = newNode;\n            current.next = newNode;\n        }\n        \n        size++;\n    }\n    \n    public void delete(int position) {\n        if (position < 0 || position >= size)\n            throw new IndexOutOfBoundsException("Invalid position");\n            \n        if (size == 1) {\n            head = tail = null;\n        } else if (position == 0) {\n            head = head.next;\n            head.prev = null;\n        } else if (position == size - 1) {\n            tail = tail.prev;\n            tail.next = null;\n        } else {\n            Node current = head;\n            for (int i = 0; i < position - 1; i++)\n                current = current.next;\n            current.next = current.next.next;\n            current.next.prev = current;\n        }\n        \n        size--;\n    }\n}'})]})]})]})},_p=Qr.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,Vp=Qr.div`
  text-align: center;
  margin-bottom: 2rem;
`,Bp=Qr.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,Up=Qr.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,Hp=Qr.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`,Wp=Qr.div`
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
`,qp=Qr.div`
  color: var(--text-secondary);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-style: italic;
`,Kp=Qr.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: var(--primary);
  color: white;
  padding: 5px 10px;
  border-radius: var(--border-radius);
  font-size: 0.8rem;
  z-index: 2;
`,Qp=Qr(Zd.div)`
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
`,Yp=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,Gp=Qr.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 100px;
`,Xp=Qr.button`
  background: ${e=>"secondary"===e.variant?"var(--secondary)":"var(--primary)"};
  
  &:hover {
    background: ${e=>"secondary"===e.variant?"#02c4b0":"var(--primary-light)"};
  }
`,Jp=Qr(Zd.div)`
  margin: 1rem 0;
  padding: 1rem;
  width: 100%;
  background: ${e=>"error"===e.type?"#ffebee":"#e8f5e9"};
  color: ${e=>"error"===e.type?"var(--error)":"#2e7d32"};
  border-radius: var(--border-radius);
  text-align: center;
`,Zp=Qr.div`
  margin-top: 2rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
  width: 100%;
`,ef=Qr.h3`
  margin-bottom: 0.5rem;
  color: var(--primary);
`,tf=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  border-left: 4px solid var(--primary);
  width: 100%;
`,nf=Qr.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,rf=Qr.button`
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
`,af=()=>{const[t,n]=(0,e.useState)([]),[r,i]=(0,e.useState)(""),[a,o]=(0,e.useState)(null),[s,l]=(0,e.useState)(null),[u,c]=(0,e.useState)(-1),[d,h]=(0,e.useState)("visualization"),p=function(e){o({text:e,type:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success"}),setTimeout((()=>{o(null)}),3e3)},f=(()=>{switch(s){case"push":return{title:"Push Operation",description:"Time Complexity: O(1). The push operation adds an element to the top of the stack."};case"pop":return{title:"Pop Operation",description:"Time Complexity: O(1). The pop operation removes the top element from the stack and returns it."};case"peek":return{title:"Peek Operation",description:"Time Complexity: O(1). The peek operation returns the top element of the stack without removing it."};default:return null}})();(0,e.useEffect)((()=>{n(["Java","Python","JavaScript"])}),[]);return(0,Xr.jsxs)(_p,{children:[(0,Xr.jsxs)(Vp,{children:[(0,Xr.jsx)(Bp,{children:"Stacks"}),(0,Xr.jsx)(Up,{children:"A stack is a linear data structure that follows the Last In First Out (LIFO) principle. Elements are added to and removed from the same end, called the top."})]}),(0,Xr.jsxs)(Hp,{children:[(0,Xr.jsxs)(nf,{children:[(0,Xr.jsx)(rf,{active:"visualization"===d,onClick:()=>h("visualization"),children:"Visualization"}),(0,Xr.jsx)(rf,{active:"code"===d,onClick:()=>h("code"),children:"Implementation"})]}),"visualization"===d?(0,Xr.jsxs)(Xr.Fragment,{children:[(0,Xr.jsxs)(tf,{children:[(0,Xr.jsx)("strong",{children:"Stack Properties:"}),(0,Xr.jsxs)("ul",{children:[(0,Xr.jsx)("li",{children:"Last In First Out (LIFO) data structure"}),(0,Xr.jsx)("li",{children:"Elements are added to and removed from the top"}),(0,Xr.jsx)("li",{children:"Common operations include push, pop, and peek"}),(0,Xr.jsx)("li",{children:"All operations have O(1) time complexity"}),(0,Xr.jsx)("li",{children:"Used in function calls, undo mechanisms, expression evaluation, and backtracking algorithms"})]})]}),(0,Xr.jsxs)(Yp,{children:[(0,Xr.jsxs)("div",{children:[(0,Xr.jsx)("label",{children:"Value: "}),(0,Xr.jsx)(Gp,{type:"text",value:r,onChange:e=>i(e.target.value),placeholder:"Value"})]}),(0,Xr.jsx)(Xp,{onClick:async()=>{if(""===r)return void p("Please enter a value","error");l("push");const e=[...t,r];n(e),c(e.length-1),p(`Pushed "${r}" onto the stack`),i(""),setTimeout((()=>{c(-1)}),2e3)},children:"Push"}),(0,Xr.jsx)(Xp,{onClick:async()=>{if(0===t.length)return void p("Stack is empty","error");l("pop"),c(t.length-1),await new Promise((e=>setTimeout(e,1e3)));const e=t[t.length-1],r=t.slice(0,-1);n(r),p(`Popped "${e}" from the stack`),c(-1)},variant:"secondary",children:"Pop"}),(0,Xr.jsx)(Xp,{onClick:()=>{0!==t.length?(l("peek"),c(t.length-1),p(`Top of stack: "${t[t.length-1]}"`),setTimeout((()=>{c(-1)}),2e3)):p("Stack is empty","error")},children:"Peek"}),(0,Xr.jsx)(Xp,{onClick:()=>{n([]),c(-1),p("Stack cleared")},variant:"secondary",children:"Clear"})]}),(0,Xr.jsx)(Dh,{children:a&&(0,Xr.jsx)(Jp,{type:a.type,initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0},children:a.text})}),(0,Xr.jsxs)(Wp,{children:[t.length>0?(0,Xr.jsx)(Kp,{children:"Top"}):(0,Xr.jsx)(qp,{children:"Stack is empty"}),(0,Xr.jsx)(Dh,{children:t.map(((e,t)=>(0,Xr.jsx)(Qp,{highlight:t===u,initial:{opacity:0,y:-50,scale:.8},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-50,scale:.8},transition:{type:"spring",stiffness:300,damping:20},children:e},`${e}-${t}`)))})]}),f&&(0,Xr.jsxs)(Zp,{children:[(0,Xr.jsx)(ef,{children:f.title}),(0,Xr.jsx)("p",{children:f.description})]})]}):(0,Xr.jsx)(tp,{title:"Stack Implementation",code:'public class Stack<T> {\n    private static class Node<T> {\n        private T data;\n        private Node<T> next;\n        \n        public Node(T data) {\n            this.data = data;\n        }\n    }\n    \n    private Node<T> top;\n    private int size;\n    \n    public Stack() {\n        top = null;\n        size = 0;\n    }\n    \n    public void push(T item) {\n        Node<T> newNode = new Node<>(item);\n        newNode.next = top;\n        top = newNode;\n        size++;\n    }\n    \n    public T pop() {\n        if (isEmpty()) {\n            throw new EmptyStackException();\n        }\n        \n        T item = top.data;\n        top = top.next;\n        size--;\n        return item;\n    }\n    \n    public T peek() {\n        if (isEmpty()) {\n            throw new EmptyStackException();\n        }\n        \n        return top.data;\n    }\n    \n    public boolean isEmpty() {\n        return top == null;\n    }\n    \n    public int size() {\n        return size;\n    }\n    \n    public void clear() {\n        top = null;\n        size = 0;\n    }\n    \n    public String toString() {\n        StringBuilder sb = new StringBuilder("[");\n        Node<T> current = top;\n        \n        while (current != null) {\n            sb.append(current.data);\n            if (current.next != null) {\n                sb.append(", ");\n            }\n            current = current.next;\n        }\n        \n        sb.append("]");\n        return sb.toString();\n    }\n}'})]})]})},of=Qr.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,sf=Qr.div`
  text-align: center;
  margin-bottom: 2rem;
`,lf=Qr.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,uf=Qr.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,cf=Qr.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`,df=Qr.div`
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
`,hf=Qr.div`
  color: var(--text-secondary);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-style: italic;
`,pf=Qr.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: var(--primary);
  color: white;
  padding: 5px 10px;
  border-radius: var(--border-radius);
  font-size: 0.8rem;
  z-index: 2;
`,ff=Qr.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: var(--secondary);
  color: white;
  padding: 5px 10px;
  border-radius: var(--border-radius);
  font-size: 0.8rem;
  z-index: 2;
`,mf=Qr(Zd.div)`
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
`,gf=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,vf=Qr.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 100px;
`,yf=Qr.button`
  background: ${e=>"secondary"===e.variant?"var(--secondary)":"var(--primary)"};
  
  &:hover {
    background: ${e=>"secondary"===e.variant?"#02c4b0":"var(--primary-light)"};
  }
`,xf=Qr(Zd.div)`
  margin: 1rem 0;
  padding: 1rem;
  width: 100%;
  background: ${e=>"error"===e.type?"#ffebee":"#e8f5e9"};
  color: ${e=>"error"===e.type?"var(--error)":"#2e7d32"};
  border-radius: var(--border-radius);
  text-align: center;
`,bf=Qr.div`
  margin-top: 2rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
  width: 100%;
`,wf=Qr.h3`
  margin-bottom: 0.5rem;
  color: var(--primary);
`,Sf=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  border-left: 4px solid var(--primary);
  width: 100%;
`,kf=Qr.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,jf=Qr.button`
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
`,Cf=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
  justify-content: center;
`,Ef=Qr.button`
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
`,Tf=()=>{const[t,n]=(0,e.useState)([]),[r,i]=(0,e.useState)(""),[a,o]=(0,e.useState)(null),[s,l]=(0,e.useState)(null),[u,c]=(0,e.useState)(-1),[d,h]=(0,e.useState)("visualization"),[p,f]=(0,e.useState)("regular"),m=function(e){o({text:e,type:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success"}),setTimeout((()=>{o(null)}),3e3)},g=e=>{f(e),n([]),c(-1),i(""),o(null),m(`Switched to ${e} queue`)},v=(()=>{switch(s){case"enqueue":return{title:"Enqueue Operation",description:"Time Complexity: O(1). The enqueue operation adds an element to the rear of the queue."};case"dequeue":return{title:"Dequeue Operation",description:"Time Complexity: O(1). The dequeue operation removes and returns the front element from the queue."};case"peek":return{title:"Peek Operation",description:"Time Complexity: O(1). The peek operation returns the front element of the queue without removing it."};default:return null}})();(0,e.useEffect)((()=>{n(["Apple","Banana","Cherry"])}),[]);return(0,Xr.jsxs)(of,{children:[(0,Xr.jsxs)(sf,{children:[(0,Xr.jsx)(lf,{children:"Queues"}),(0,Xr.jsx)(uf,{children:"A queue is a linear data structure that follows the First In First Out (FIFO) principle. Elements are added at the rear and removed from the front of the queue."})]}),(0,Xr.jsxs)(cf,{children:[(0,Xr.jsxs)(kf,{children:[(0,Xr.jsx)(jf,{active:"visualization"===d,onClick:()=>h("visualization"),children:"Visualization"}),(0,Xr.jsx)(jf,{active:"code"===d,onClick:()=>h("code"),children:"Implementation"})]}),"visualization"===d?(0,Xr.jsxs)(Xr.Fragment,{children:[(0,Xr.jsxs)(Cf,{children:[(0,Xr.jsx)(Ef,{active:"regular"===p,onClick:()=>g("regular"),children:"Regular Queue"}),(0,Xr.jsx)(Ef,{active:"circular"===p,onClick:()=>g("circular"),children:"Circular Queue"}),(0,Xr.jsx)(Ef,{active:"priority"===p,onClick:()=>g("priority"),children:"Priority Queue"})]}),(0,Xr.jsxs)(Sf,{children:[(0,Xr.jsxs)("strong",{children:[p.charAt(0).toUpperCase()+p.slice(1)," Queue Properties:"]}),(0,Xr.jsxs)("ul",{children:[(0,Xr.jsx)("li",{children:"First In First Out (FIFO) data structure"}),(0,Xr.jsx)("li",{children:"Elements are added at the rear and removed from the front"}),(0,Xr.jsx)("li",{children:"Common operations include enqueue, dequeue, and peek"}),(0,Xr.jsx)("li",{children:"All operations have O(1) time complexity"}),"circular"===p&&(0,Xr.jsx)("li",{children:"Circular queue efficiently uses fixed-size array by wrapping around"}),"priority"===p&&(0,Xr.jsx)("li",{children:"Priority queue serves elements based on their priority, not insertion order"}),(0,Xr.jsx)("li",{children:"Used in BFS, job scheduling, printer queue, and process management"})]})]}),(0,Xr.jsxs)(gf,{children:[(0,Xr.jsxs)("div",{children:[(0,Xr.jsx)("label",{children:"Value: "}),(0,Xr.jsx)(vf,{type:"text",value:r,onChange:e=>i(e.target.value),placeholder:"Value"})]}),(0,Xr.jsx)(yf,{onClick:async()=>{if(""===r)return void m("Please enter a value","error");l("enqueue");const e=[...t,r];n(e),c(e.length-1),m(`Enqueued "${r}" to the queue`),i(""),setTimeout((()=>{c(-1)}),2e3)},children:"Enqueue"}),(0,Xr.jsx)(yf,{onClick:async()=>{if(0===t.length)return void m("Queue is empty","error");l("dequeue"),c(0),await new Promise((e=>setTimeout(e,1e3)));const e=t[0],r=t.slice(1);n(r),m(`Dequeued "${e}" from the queue`),c(-1)},variant:"secondary",children:"Dequeue"}),(0,Xr.jsx)(yf,{onClick:()=>{0!==t.length?(l("peek"),c(0),m(`Front of queue: "${t[0]}"`),setTimeout((()=>{c(-1)}),2e3)):m("Queue is empty","error")},children:"Peek"}),(0,Xr.jsx)(yf,{onClick:()=>{n([]),c(-1),m("Queue cleared")},variant:"secondary",children:"Clear"})]}),(0,Xr.jsx)(Dh,{children:a&&(0,Xr.jsx)(xf,{type:a.type,initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0},children:a.text})}),(0,Xr.jsxs)(df,{children:[t.length>0?(0,Xr.jsxs)(Xr.Fragment,{children:[(0,Xr.jsx)(pf,{children:"Front"}),(0,Xr.jsx)(ff,{children:"Rear"})]}):(0,Xr.jsx)(hf,{children:"Queue is empty"}),(0,Xr.jsx)(Dh,{children:t.map(((e,t)=>(0,Xr.jsx)(mf,{highlight:t===u,initial:{opacity:0,x:50,scale:.8},animate:{opacity:1,x:0,scale:1},exit:{opacity:0,x:-50,scale:.8},transition:{type:"spring",stiffness:300,damping:20},children:e},`${e}-${t}`)))})]}),v&&(0,Xr.jsxs)(bf,{children:[(0,Xr.jsx)(wf,{children:v.title}),(0,Xr.jsx)("p",{children:v.description})]})]}):(0,Xr.jsx)(tp,{title:(()=>{switch(p){case"circular":return"Circular Queue Implementation";case"priority":return"Priority Queue Implementation";default:return"Queue Implementation"}})(),code:(()=>{switch(p){case"circular":return'public class CircularQueue<T> {\n    private T[] array;\n    private int front;\n    private int rear;\n    private int size;\n    private int capacity;\n    \n    @SuppressWarnings("unchecked")\n    public CircularQueue(int capacity) {\n        this.capacity = capacity;\n        this.array = (T[]) new Object[capacity];\n        this.front = 0;\n        this.rear = -1;\n        this.size = 0;\n    }\n    \n    public boolean isFull() {\n        return size == capacity;\n    }\n    \n    public boolean isEmpty() {\n        return size == 0;\n    }\n    \n    public void enqueue(T item) {\n        if (isFull()) {\n            throw new IllegalStateException("Queue is full");\n        }\n        \n        rear = (rear + 1) % capacity;\n        array[rear] = item;\n        size++;\n    }\n    \n    public T dequeue() {\n        if (isEmpty()) {\n            throw new NoSuchElementException("Queue is empty");\n        }\n        \n        T item = array[front];\n        array[front] = null;\n        front = (front + 1) % capacity;\n        size--;\n        return item;\n    }\n    \n    public T peek() {\n        if (isEmpty()) {\n            throw new NoSuchElementException("Queue is empty");\n        }\n        \n        return array[front];\n    }\n    \n    public int size() {\n        return size;\n    }\n    \n    public void clear() {\n        for (int i = 0; i < capacity; i++) {\n            array[i] = null;\n        }\n        front = 0;\n        rear = -1;\n        size = 0;\n    }\n    \n    @Override\n    public String toString() {\n        if (isEmpty()) {\n            return "[]";\n        }\n        \n        StringBuilder sb = new StringBuilder("[");\n        int count = 0;\n        int index = front;\n        \n        while (count < size) {\n            sb.append(array[index]);\n            if (count < size - 1) {\n                sb.append(", ");\n            }\n            index = (index + 1) % capacity;\n            count++;\n        }\n        \n        sb.append("]");\n        return sb.toString();\n    }\n}';case"priority":return'public class PriorityQueue<T extends Comparable<T>> {\n    private static class Node<T> {\n        private T data;\n        private int priority;\n        private Node<T> next;\n        \n        public Node(T data, int priority) {\n            this.data = data;\n            this.priority = priority;\n            this.next = null;\n        }\n    }\n    \n    private Node<T> head;\n    private int size;\n    \n    public PriorityQueue() {\n        head = null;\n        size = 0;\n    }\n    \n    public void enqueue(T item, int priority) {\n        Node<T> newNode = new Node<>(item, priority);\n        \n        // If queue is empty or new node has higher priority than head\n        if (head == null || priority > head.priority) {\n            newNode.next = head;\n            head = newNode;\n        } else {\n            Node<T> temp = head;\n            \n            // Find position to insert based on priority\n            while (temp.next != null && temp.next.priority >= priority) {\n                temp = temp.next;\n            }\n            \n            // Insert after temp\n            newNode.next = temp.next;\n            temp.next = newNode;\n        }\n        \n        size++;\n    }\n    \n    public T dequeue() {\n        if (isEmpty()) {\n            throw new NoSuchElementException("Priority queue is empty");\n        }\n        \n        T data = head.data;\n        head = head.next;\n        size--;\n        return data;\n    }\n    \n    public T peek() {\n        if (isEmpty()) {\n            throw new NoSuchElementException("Priority queue is empty");\n        }\n        \n        return head.data;\n    }\n    \n    public boolean isEmpty() {\n        return head == null;\n    }\n    \n    public int size() {\n        return size;\n    }\n    \n    public void clear() {\n        head = null;\n        size = 0;\n    }\n    \n    @Override\n    public String toString() {\n        if (isEmpty()) {\n            return "[]";\n        }\n        \n        StringBuilder sb = new StringBuilder("[");\n        Node<T> current = head;\n        \n        while (current != null) {\n            sb.append(current.data).append("(").append(current.priority).append(")");\n            if (current.next != null) {\n                sb.append(", ");\n            }\n            current = current.next;\n        }\n        \n        sb.append("]");\n        return sb.toString();\n    }\n}';default:return'public class Queue<T> {\n    private static class Node<T> {\n        private T data;\n        private Node<T> next;\n        \n        public Node(T data) {\n            this.data = data;\n            this.next = null;\n        }\n    }\n    \n    private Node<T> front;\n    private Node<T> rear;\n    private int size;\n    \n    public Queue() {\n        front = null;\n        rear = null;\n        size = 0;\n    }\n    \n    public void enqueue(T item) {\n        Node<T> newNode = new Node<>(item);\n        \n        if (isEmpty()) {\n            front = newNode;\n            rear = newNode;\n        } else {\n            rear.next = newNode;\n            rear = newNode;\n        }\n        \n        size++;\n    }\n    \n    public T dequeue() {\n        if (isEmpty()) {\n            throw new NoSuchElementException("Queue is empty");\n        }\n        \n        T data = front.data;\n        front = front.next;\n        \n        if (front == null) {\n            rear = null;\n        }\n        \n        size--;\n        return data;\n    }\n    \n    public T peek() {\n        if (isEmpty()) {\n            throw new NoSuchElementException("Queue is empty");\n        }\n        \n        return front.data;\n    }\n    \n    public boolean isEmpty() {\n        return size == 0;\n    }\n    \n    public int size() {\n        return size;\n    }\n    \n    public void clear() {\n        front = null;\n        rear = null;\n        size = 0;\n    }\n    \n    @Override\n    public String toString() {\n        if (isEmpty()) {\n            return "[]";\n        }\n        \n        StringBuilder sb = new StringBuilder("[");\n        Node<T> current = front;\n        \n        while (current != null) {\n            sb.append(current.data);\n            if (current.next != null) {\n                sb.append(", ");\n            }\n            current = current.next;\n        }\n        \n        sb.append("]");\n        return sb.toString();\n    }\n}'}})()})]})]})},Pf=Qr.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,$f=Qr.div`
  text-align: center;
  margin-bottom: 2rem;
`,Af=Qr.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,Rf=Qr.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,Of=Qr.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`,zf=Qr.div`
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
`,Nf=Qr(Zd.div)`
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
`,Mf=Qr.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: visible;
`,Lf=Qr.path`
  stroke: var(--primary-light);
  stroke-width: 3px;
  fill: none;
`,Df=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,If=Qr.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 80px;
`,Ff=Qr.button`
  background: ${e=>"secondary"===e.variant?"var(--secondary)":"var(--primary)"};
  
  &:hover {
    background: ${e=>"secondary"===e.variant?"#02c4b0":"var(--primary-light)"};
  }
`,_f=Qr(Zd.div)`
  margin: 1rem 0;
  padding: 1rem;
  width: 100%;
  background: ${e=>"error"===e.type?"#ffebee":"#e8f5e9"};
  color: ${e=>"error"===e.type?"var(--error)":"#2e7d32"};
  border-radius: var(--border-radius);
  text-align: center;
`,Vf=Qr.div`
  margin-top: 2rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
  width: 100%;
`,Bf=Qr.h3`
  margin-bottom: 0.5rem;
  color: var(--primary);
`,Uf=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f0f0f0;
  border-radius: var(--border-radius);
  width: 100%;
  text-align: center;
`,Hf=Qr.span`
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
`,Wf=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
  justify-content: center;
`,qf=Qr.button`
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
`,Kf=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  border-left: 4px solid var(--primary);
`,Qf=Qr.text`
  fill: ${e=>"left"===e.type?"#2196F3":"#FF5722"};
  font-size: 12px;
  font-weight: bold;
  pointer-events: none;
  user-select: none;
`,Yf=Qr.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,Gf=(Qr.span`
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
`,Qr.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
`),Xf=Qr.button`
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
`,Jf=Qr.span`
  font-weight: 600;
  min-width: 120px;
  text-align: center;
`,Zf=Qr.path`
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
`,em=Qr.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,tm=Qr.button`
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
`;class nm{constructor(e){this.value=e,this.left=null,this.right=null,this.height=1,this.balanceFactor=0}}const rm=e=>e?e.height:0,im=e=>e?rm(e.left)-rm(e.right):0,am=e=>{e&&(e.height=Math.max(rm(e.left),rm(e.right))+1,e.balanceFactor=im(e))},om=e=>{const t=e.left,n=t.right;return t.right=e,e.left=n,am(e),am(t),t},sm=e=>{const t=e.right,n=t.left;return t.left=e,e.right=n,am(e),am(t),t},lm=e=>Math.floor((e-1)/2),um=e=>2*e+1,cm=e=>2*e+2,dm=(e,t)=>{const n=lm(t);n>=0&&e[n].value<e[t].value&&([e[n],e[t]]=[e[t],e[n]],dm(e,n))},hm=(e,t)=>{const n=um(t),r=cm(t);let i=t;n<e.length&&e[n].value>e[i].value&&(i=n),r<e.length&&e[r].value>e[i].value&&(i=r),i!==t&&([e[t],e[i]]=[e[i],e[t]],hm(e,i))},pm=()=>{const[t,n]=(0,e.useState)(null),[r,i]=(0,e.useState)([]),[a,o]=(0,e.useState)([]),[s,l]=(0,e.useState)(""),[u,c]=(0,e.useState)(null),[d,h]=(0,e.useState)(null),[p,f]=(0,e.useState)([]),[m,g]=(0,e.useState)(null),[v,y]=(0,e.useState)("bst"),[x,b]=(0,e.useState)(null),[w,S]=(0,e.useState)({width:0,height:0}),k=(0,e.useRef)(null),[j,C]=(0,e.useState)(700),[E,T]=(0,e.useState)([]),[P,$]=(0,e.useState)("visualization"),A=e=>{if(!e)return[];const t=[e],n=[e];for(;n.length>0;){const e=n.shift();e.left&&(t.push(e.left),n.push(e.left)),e.right&&(t.push(e.right),n.push(e.right))}return t},R=e=>{if(0===e.length)return null;for(let t=0;t<e.length;t++){const n=um(t),r=cm(t);e[t].left=n<e.length?e[n]:null,e[t].right=r<e.length?e[r]:null}return e[0]},O=e=>{let t=e.value;for(;null!==e.left;)t=e.left.value,e=e.left;return t},z=(e,t)=>{if(null===t)return new nm(e);if(e<t.value)t.left=z(e,t.left);else{if(!(e>t.value))return t;t.right=z(e,t.right)}am(t);const n=im(t);return n>1&&e<t.left.value?om(t):n<-1&&e>t.right.value?sm(t):n>1&&e>t.left.value?(t.left=sm(t.left),om(t)):n<-1&&e<t.right.value?(t.right=om(t.right),sm(t)):t},N=(e,t)=>{if(null===t)return null;if(e<t.value)t.left=N(e,t.left);else if(e>t.value)t.right=N(e,t.right);else{if(null===t.left)return t.right;if(null===t.right)return t.left;t.value=O(t.right),t.right=N(t.value,t.right)}am(t);const n=im(t);return n>1&&im(t.left)>=0?om(t):n>1&&im(t.left)<0?(t.left=sm(t.left),om(t)):n<-1&&im(t.right)<=0?sm(t):n<-1&&im(t.right)>0?(t.right=om(t.right),sm(t)):t},M=(0,e.useCallback)((e=>{if(!e)return{nodes:[],edges:[]};const t=[],n=[],r=e=>e?1+Math.max(r(e.left),r(e.right)):0,i=r(e),a=k.current?k.current.offsetWidth:800,o=Math.min(100,a/(Math.pow(2,i-1)+1)),s=function(e,r,i){let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(!e)return;const c=Math.pow(2,r),d=a/2-c*o/2+i*o,h=80*r+30,p=t.length;t.push({id:p,value:e.value,x:d,y:h,level:r,position:i,direction:u}),null!==l&&n.push({from:l,to:p,direction:u}),e.left&&s(e.left,r+1,2*i,p,"left"),e.right&&s(e.right,r+1,2*i+1,p,"right")};return s(e,0,0),{nodes:t,edges:n}}),[k]);(0,e.useEffect)((()=>{if(t&&k.current){const{nodes:e,edges:n}=M(t);i(e),o(n)}}),[t,M,k]),(0,e.useEffect)((()=>{const e=()=>{if(k.current){const{width:e,height:t}=k.current.getBoundingClientRect();S({width:e,height:t})}};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const L=function(e){c({text:e,type:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success"}),setTimeout((()=>{c(null)}),3e3)},D=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;switch(v){case"avl":return z(e,n);case"heap":return((e,t)=>{const n=new nm(e),r=A(t);return r.push(n),dm(r,r.length-1),R(r)})(e,n);default:return null===n?new nm(e):(e<n.value?n.left=D(e,n.left):e>n.value&&(n.right=D(e,n.right)),n)}},I=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;switch(v){case"avl":return N(e,n);case"heap":return((e,t)=>{const n=A(t),r=n.findIndex((t=>t.value===e));return-1===r?t:([n[r],n[n.length-1]]=[n[n.length-1],n[r]],n.pop(),hm(n,r),R(n))})(e,n);default:if(null===n)return null;if(e<n.value)n.left=I(e,n.left);else if(e>n.value)n.right=I(e,n.right);else{if(null===n.left)return n.right;if(null===n.right)return n.left;n.value=O(n.right),n.right=I(n.value,n.right)}return n}},F=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(null===n)return{found:!1,path:r};if("heap"===v){const t=A(n),r=t.findIndex((t=>t.value===e));if(-1===r)return{found:!1,path:[]};const i=[];let a=r;for(i.unshift(t[a].value);a>0;)a=lm(a),i.unshift(t[a].value);return{found:!0,path:i}}{const t=[...r,n.value];return e===n.value?{found:!0,path:t}:e<n.value?F(e,n.left,t):F(e,n.right,t)}},_=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return null!==e&&(_(e.left,n),n.push(e.value),_(e.right,n)),n},V=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return null!==e&&(n.push(e.value),V(e.left,n),V(e.right,n)),n},B=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return null!==e&&(B(e.left,n),B(e.right,n),n.push(e.value)),n},U=()=>{b(null)},H=()=>{b(null)},W=async e=>{f([]),T([]);const t=[];for(let n=0;n<e.length;n++){const i=e[n];f([i]);const a=r.find((e=>e.value===i));a&&(t.push(a),T([...t])),await new Promise((e=>setTimeout(e,j)))}setTimeout((()=>{f([]),setTimeout((()=>{T([])}),1e3)}),500)},q=(()=>{switch(d){case"insert":return{title:"Insert Operation",description:"bst"===v?"Time Complexity: O(log n) average case, O(n) worst case. The insert operation adds a new node to the binary search tree, maintaining the BST property.":"avl"===v?"Time Complexity: O(log n). In an AVL tree, insertion includes rebalancing, which ensures the tree remains balanced.":'Time Complexity: O(log n). In a heap, insertion requires maintaining the heap property by "bubbling up" the new element.'};case"delete":return{title:"Delete Operation",description:"bst"===v?"Time Complexity: O(log n) average case, O(n) worst case. The delete operation removes a node while maintaining the BST property.":"avl"===v?"Time Complexity: O(log n). In an AVL tree, deletion includes rebalancing, which ensures the tree remains balanced.":'Time Complexity: O(log n). In a heap, deletion requires maintaining the heap property by "bubbling down" the replacement element.'};case"search":return{title:"Search Operation",description:"bst"===v||"avl"===v?"Time Complexity: O(log n) average case, O(n) worst case for BST; O(log n) for AVL. The search operation finds a node with a given value.":"Time Complexity: O(n). In a heap, searching for an arbitrary element requires checking all nodes."};case"traversal":return{title:"Traversal Operation",description:"Time Complexity: O(n). Tree traversal visits all nodes in a specific order. In-order: left-root-right, Pre-order: root-left-right, Post-order: left-right-root."};default:return null}})();(0,e.useEffect)((()=>{i([]),o([]),f([]),g(null);let e=null;"bst"===v?(e=new nm(50),e.left=new nm(30),e.right=new nm(70),e.left.left=new nm(20),e.left.right=new nm(40),e.right.left=new nm(60),e.right.right=new nm(80)):"avl"===v?(e=new nm(40),e.left=new nm(20),e.right=new nm(60),e.left.left=new nm(10),e.left.right=new nm(30),e.right.left=new nm(50),e.right.right=new nm(70),am(e.left.left),am(e.left.right),am(e.right.left),am(e.right.right),am(e.left),am(e.right),am(e)):"heap"===v&&(e=new nm(90),e.left=new nm(70),e.right=new nm(80),e.left.left=new nm(50),e.left.right=new nm(40),e.right.left=new nm(60),e.right.right=new nm(30)),n(e)}),[v]);return(0,Xr.jsxs)(Pf,{children:[(0,Xr.jsxs)($f,{children:[(0,Xr.jsx)(Af,{children:"Trees"}),(0,Xr.jsx)(Rf,{children:"A tree is a hierarchical data structure consisting of nodes connected by edges. A binary tree has at most two children per node."})]}),(0,Xr.jsxs)(Of,{children:[(0,Xr.jsxs)(em,{children:[(0,Xr.jsx)(tm,{active:"visualization"===P,onClick:()=>$("visualization"),children:"Visualization"}),(0,Xr.jsx)(tm,{active:"code"===P,onClick:()=>$("code"),children:"Implementation"})]}),"visualization"===P?(0,Xr.jsxs)(Xr.Fragment,{children:[(0,Xr.jsxs)(Wf,{children:[(0,Xr.jsx)(qf,{active:"bst"===v,onClick:()=>y("bst"),children:"Binary Search Tree"}),(0,Xr.jsx)(qf,{active:"avl"===v,onClick:()=>y("avl"),children:"AVL Tree (Balanced)"}),(0,Xr.jsx)(qf,{active:"heap"===v,onClick:()=>y("heap"),children:"Heap"})]}),(0,Xr.jsxs)(Kf,{children:[(0,Xr.jsx)("strong",{children:"Interactive Tree:"}),(0,Xr.jsxs)("ul",{children:[(0,Xr.jsx)("li",{children:"Drag any node to reposition it"}),(0,Xr.jsx)("li",{children:"The tree edges will automatically adjust to follow the nodes"}),(0,Xr.jsx)("li",{children:"Use the operations below to modify the tree structure"})]}),"bst"===v&&(0,Xr.jsxs)("div",{children:[(0,Xr.jsx)("strong",{children:"Binary Search Tree Properties:"}),(0,Xr.jsxs)("ul",{children:[(0,Xr.jsx)("li",{children:"Left child is less than parent"}),(0,Xr.jsx)("li",{children:"Right child is greater than parent"}),(0,Xr.jsx)("li",{children:"Search operations are O(log n) on average, O(n) worst case"})]})]}),"avl"===v&&(0,Xr.jsxs)("div",{children:[(0,Xr.jsx)("strong",{children:"AVL Tree Properties:"}),(0,Xr.jsxs)("ul",{children:[(0,Xr.jsx)("li",{children:"Self-balancing binary search tree"}),(0,Xr.jsx)("li",{children:"For any node, height difference between left and right subtrees is at most 1"}),(0,Xr.jsx)("li",{children:"Maintains O(log n) time complexity for all operations"}),(0,Xr.jsx)("li",{children:"Automatically rebalances after insertions and deletions"})]})]}),"heap"===v&&(0,Xr.jsxs)("div",{children:[(0,Xr.jsx)("strong",{children:"Max Heap Properties:"}),(0,Xr.jsxs)("ul",{children:[(0,Xr.jsx)("li",{children:"Complete binary tree where parent is always greater than children"}),(0,Xr.jsx)("li",{children:"Root contains the maximum value"}),(0,Xr.jsx)("li",{children:"Insert and delete operations maintain the heap property"}),(0,Xr.jsx)("li",{children:"Used for priority queues and heap sort"})]})]})]}),(0,Xr.jsxs)(Df,{children:[(0,Xr.jsxs)("div",{children:[(0,Xr.jsx)("label",{children:"Value: "}),(0,Xr.jsx)(If,{type:"text",value:s,onChange:e=>l(e.target.value),placeholder:"Value"})]}),(0,Xr.jsx)(Ff,{onClick:()=>{if(""===s)return void L("Please enter a value","error");const e=parseInt(s);if(isNaN(e))return void L("Value must be a number","error");h("insert");const{found:r,path:i}=F(e);if(r)return void L("Value already exists in the tree","error");(async()=>{for(let e=0;e<i.length;e++)f([i[e]]),await new Promise((e=>setTimeout(e,j/2)));const r=t?{...t}:null,a=D(e,r);switch(n(a),v){case"avl":L(`Inserted ${e} into the AVL tree. Tree is automatically balanced.`);break;case"heap":L(`Inserted ${e} into the max heap. New value bubbled up to maintain heap property.`);break;default:L(`Inserted ${e} into the BST.`)}setTimeout((()=>{f([])}),1e3)})()},children:"Insert"}),(0,Xr.jsx)(Ff,{onClick:()=>{if(""===s)return void L("Please enter a value","error");const e=parseInt(s);if(isNaN(e))return void L("Value must be a number","error");h("delete");const{found:r,path:i}=F(e);if(!r)return void L("Value not found in the tree","error");(async()=>{for(let e=0;e<i.length;e++)f([i[e]]),await new Promise((e=>setTimeout(e,j/2)));const r=t?{...t}:null,a=I(e,r);switch(n(a),v){case"avl":L(`Deleted ${e} from the AVL tree. Tree was rebalanced.`);break;case"heap":L(`Deleted ${e} from the max heap. Heap property was restored.`);break;default:L(`Deleted ${e} from the BST.`)}setTimeout((()=>{f([])}),1e3)})()},variant:"secondary",children:"Delete"}),(0,Xr.jsx)(Ff,{onClick:()=>{if(""===s)return void L("Please enter a value","error");const e=parseInt(s);if(isNaN(e))return void L("Value must be a number","error");h("search");const{found:t,path:n}=F(e);(async()=>{for(let e=0;e<n.length;e++)f([n[e]]),await new Promise((e=>setTimeout(e,500)));t?L(`Found ${e} in the tree`):L(`Value ${e} not found in the tree`,"error"),setTimeout((()=>{f([])}),1e3)})()},children:"Search"}),(0,Xr.jsx)(Ff,{onClick:()=>{n(null),i([]),o([]),f([]),g(null),L("Tree cleared")},variant:"secondary",children:"Clear Tree"})]}),(0,Xr.jsxs)(Df,{children:[(0,Xr.jsx)(Ff,{onClick:()=>{h("traversal");const e=_();g({type:"In-Order",values:e}),W(e)},children:"In-Order"}),(0,Xr.jsx)(Ff,{onClick:()=>{h("traversal");const e=V();g({type:"Pre-Order",values:e}),W(e)},children:"Pre-Order"}),(0,Xr.jsx)(Ff,{onClick:()=>{h("traversal");const e=B();g({type:"Post-Order",values:e}),W(e)},children:"Post-Order"})]}),(0,Xr.jsxs)(Gf,{children:[(0,Xr.jsx)(Xf,{onClick:()=>{C((e=>Math.min(e+200,1500)))},children:(0,Xr.jsx)("span",{role:"img","aria-label":"Decrease Speed",children:"\ud83d\udc22"})}),(0,Xr.jsxs)(Jf,{children:["Animation Speed: ",100===j?"Very Fast":j<=300?"Fast":j<=700?"Normal":j<=1100?"Slow":"Very Slow"]}),(0,Xr.jsx)(Xf,{onClick:()=>{C((e=>Math.max(e-200,100)))},children:(0,Xr.jsx)("span",{role:"img","aria-label":"Increase Speed",children:"\ud83d\udc07"})})]}),(0,Xr.jsx)(Dh,{children:u&&(0,Xr.jsx)(_f,{type:u.type,initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0},children:u.text})}),m&&(0,Xr.jsxs)(Uf,{children:[(0,Xr.jsxs)("strong",{children:[m.type," Traversal:"]}),(0,Xr.jsx)("div",{style:{marginTop:"0.5rem"},children:m.values.map(((e,t)=>(0,Xr.jsx)(Hf,{children:e},t)))})]}),(0,Xr.jsxs)(zf,{ref:k,children:[(0,Xr.jsxs)(Mf,{children:[E.length>1&&(0,Xr.jsx)(Zf,{d:E.map(((e,t)=>`${0===t?"M":"L"} ${e.x+25} ${e.y+25}`)).join(" ")}),a.map(((t,n)=>{const i=r.find((e=>e.id===t.from)),a=r.find((e=>e.id===t.to));if(!i||!a)return null;const o=i.x+25,s=i.y+25,l=a.x+25,u=a.y+25,c=(o+l)/2,d=(s+u)/2-5,h=`M ${o} ${s} L ${l} ${u}`;return(0,Xr.jsxs)(e.Fragment,{children:[(0,Xr.jsx)(Lf,{d:h}),t.direction&&(0,Xr.jsx)(Qf,{type:t.direction,x:c,y:d,textAnchor:"middle",dominantBaseline:"middle",children:"left"===t.direction?"L":"R"})]},n)}))]}),r.map((e=>(0,Xr.jsx)(Nf,{highlight:p.includes(e.value),style:{left:`${e.x}px`,top:`${e.y}px`,borderColor:"left"===e.direction?"#2196F3":"right"===e.direction?"#FF5722":"transparent"},initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.3},onMouseDown:()=>{return t=e.id,void b(t);var t},onMouseMove:t=>((e,t)=>{if(x===t){const n=[...r],a=n.find((e=>e.id===t));if(a){const t=a.x+e.movementX,r=a.y+e.movementY,o=25,s=w.width-2*o,l=w.height-2*o;a.x=Math.max(0,Math.min(t,s)),a.y=Math.max(0,Math.min(r,l)),i(n)}}})(t,e.id),onMouseUp:U,onMouseLeave:U,onTouchStart:()=>{return t=e.id,void b(t);var t},onTouchMove:t=>((e,t)=>{if(x===t&&e.touches&&e.touches[0]){e.preventDefault();const n=[...r],a=n.find((e=>e.id===t));if(a&&k.current){const t=k.current.getBoundingClientRect(),r=e.touches[0].clientX-t.left,o=e.touches[0].clientY-t.top,s=25,l=w.width-2*s,u=w.height-2*s;a.x=Math.max(0,Math.min(r-s,l)),a.y=Math.max(0,Math.min(o-s,u)),i(n)}}})(t,e.id),onTouchEnd:H,"data-node":"true","data-value":e.value,"data-level":e.level,"data-direction":e.direction||"root",children:(0,Xr.jsx)(Yf,{children:e.value})},e.id)))]}),q&&(0,Xr.jsxs)(Vf,{children:[(0,Xr.jsx)(Bf,{children:q.title}),(0,Xr.jsx)("p",{children:q.description})]})]}):(0,Xr.jsxs)("div",{children:["bst"===v&&(0,Xr.jsx)(tp,{title:"Binary Search Tree Implementation",code:"public class BinarySearchTree {\n    private Node root;\n    \n    private class Node {\n        int value;\n        Node left;\n        Node right;\n        \n        Node(int value) {\n            this.value = value;\n            left = null;\n            right = null;\n        }\n    }\n    \n    public void insert(int value) {\n        root = insertRec(root, value);\n    }\n    \n    private Node insertRec(Node root, int value) {\n        if (root == null) {\n            root = new Node(value);\n            return root;\n        }\n        \n        if (value < root.value)\n            root.left = insertRec(root.left, value);\n        else if (value > root.value)\n            root.right = insertRec(root.right, value);\n            \n        return root;\n    }\n    \n    public void delete(int value) {\n        root = deleteRec(root, value);\n    }\n    \n    private Node deleteRec(Node root, int value) {\n        if (root == null) return root;\n        \n        if (value < root.value)\n            root.left = deleteRec(root.left, value);\n        else if (value > root.value)\n            root.right = deleteRec(root.right, value);\n        else {\n            // Node with only one child or no child\n            if (root.left == null)\n                return root.right;\n            else if (root.right == null)\n                return root.left;\n                \n            // Node with two children\n            root.value = minValue(root.right);\n            root.right = deleteRec(root.right, root.value);\n        }\n        \n        return root;\n    }\n    \n    private int minValue(Node root) {\n        int minv = root.value;\n        while (root.left != null) {\n            minv = root.left.value;\n            root = root.left;\n        }\n        return minv;\n    }\n}"}),"avl"===v&&(0,Xr.jsx)(tp,{title:"AVL Tree Implementation",code:"public class AVLTree {\n    private Node root;\n    \n    private class Node {\n        int value;\n        Node left;\n        Node right;\n        int height;\n        int balanceFactor;\n        \n        Node(int value) {\n            this.value = value;\n            left = null;\n            right = null;\n            height = 1;\n            balanceFactor = 0;\n        }\n    }\n    \n    private int height(Node node) {\n        return node == null ? 0 : node.height;\n    }\n    \n    private int getBalanceFactor(Node node) {\n        return node == null ? 0 : height(node.left) - height(node.right);\n    }\n    \n    private Node rotateRight(Node y) {\n        Node x = y.left;\n        Node T2 = x.right;\n        \n        x.right = y;\n        y.left = T2;\n        \n        y.height = Math.max(height(y.left), height(y.right)) + 1;\n        x.height = Math.max(height(x.left), height(x.right)) + 1;\n        \n        return x;\n    }\n    \n    private Node rotateLeft(Node x) {\n        Node y = x.right;\n        Node T2 = y.left;\n        \n        y.left = x;\n        x.right = T2;\n        \n        x.height = Math.max(height(x.left), height(x.right)) + 1;\n        y.height = Math.max(height(y.left), height(y.right)) + 1;\n        \n        return y;\n    }\n    \n    public void insert(int value) {\n        root = insertRec(root, value);\n    }\n    \n    private Node insertRec(Node node, int value) {\n        if (node == null)\n            return new Node(value);\n            \n        if (value < node.value)\n            node.left = insertRec(node.left, value);\n        else if (value > node.value)\n            node.right = insertRec(node.right, value);\n        else\n            return node;\n            \n        node.height = Math.max(height(node.left), height(node.right)) + 1;\n        int balance = getBalanceFactor(node);\n        \n        // Left Left Case\n        if (balance > 1 && value < node.left.value)\n            return rotateRight(node);\n            \n        // Right Right Case\n        if (balance < -1 && value > node.right.value)\n            return rotateLeft(node);\n            \n        // Left Right Case\n        if (balance > 1 && value > node.left.value) {\n            node.left = rotateLeft(node.left);\n            return rotateRight(node);\n        }\n        \n        // Right Left Case\n        if (balance < -1 && value < node.right.value) {\n            node.right = rotateRight(node.right);\n            return rotateLeft(node);\n        }\n        \n        return node;\n    }\n}"}),"heap"===v&&(0,Xr.jsx)(tp,{title:"Max Heap Implementation",code:'public class MaxHeap {\n    private ArrayList<Integer> heap;\n    \n    public MaxHeap() {\n        heap = new ArrayList<>();\n    }\n    \n    private int parent(int i) {\n        return (i - 1) / 2;\n    }\n    \n    private int leftChild(int i) {\n        return 2 * i + 1;\n    }\n    \n    private int rightChild(int i) {\n        return 2 * i + 2;\n    }\n    \n    private void swap(int i, int j) {\n        int temp = heap.get(i);\n        heap.set(i, heap.get(j));\n        heap.set(j, temp);\n    }\n    \n    private void heapifyUp(int i) {\n        int parent = parent(i);\n        if (parent >= 0 && heap.get(parent) < heap.get(i)) {\n            swap(parent, i);\n            heapifyUp(parent);\n        }\n    }\n    \n    private void heapifyDown(int i) {\n        int largest = i;\n        int left = leftChild(i);\n        int right = rightChild(i);\n        \n        if (left < heap.size() && heap.get(left) > heap.get(largest))\n            largest = left;\n            \n        if (right < heap.size() && heap.get(right) > heap.get(largest))\n            largest = right;\n            \n        if (largest != i) {\n            swap(i, largest);\n            heapifyDown(largest);\n        }\n    }\n    \n    public void insert(int value) {\n        heap.add(value);\n        heapifyUp(heap.size() - 1);\n    }\n    \n    public int extractMax() {\n        if (heap.isEmpty())\n            throw new IllegalStateException("Heap is empty");\n            \n        int max = heap.get(0);\n        int lastElement = heap.remove(heap.size() - 1);\n        \n        if (!heap.isEmpty()) {\n            heap.set(0, lastElement);\n            heapifyDown(0);\n        }\n        \n        return max;\n    }\n}'})]})]})]})},fm=Qr.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,mm=Qr.div`
  text-align: center;
  margin-bottom: 2rem;
`,gm=Qr.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,vm=Qr.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,ym=Qr.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,xm=Qr.div`
  width: 100%;
  margin: 2rem 0;
  border: 2px solid var(--primary-light);
  border-radius: var(--border-radius);
  overflow: hidden;
`,bm=Qr.div`
  display: flex;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
`,wm=Qr.div`
  width: 80px;
  padding: 0.75rem;
  background: var(--primary-light);
  color: white;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`,Sm=Qr.div`
  flex: 1;
  padding: 0.75rem;
  background: ${e=>e.highlight?"#e6f7ff":"white"};
  transition: background-color 0.3s ease;
  overflow-x: auto;
`,km=Qr(Zd.div)`
  display: inline-flex;
  align-items: center;
  margin-right: 1rem;
  padding: 0.5rem;
  background: ${e=>e.highlight?"var(--primary)":"#f0f0f0"};
  color: ${e=>e.highlight?"white":"var(--text-primary)"};
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`,jm=Qr.span`
  font-weight: 500;
  margin-right: 0.25rem;
`,Cm=Qr.span`
  font-weight: 400;
  color: ${e=>e.highlight?"white":"var(--text-secondary)"};
`,Em=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  align-items: center;
`,Tm=Qr.div`
  display: flex;
  flex-direction: column;
`,Pm=Qr.label`
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
`,$m=Qr.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 150px;
`,Am=Qr.button`
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
`,Rm=Qr(Zd.div)`
  margin: 1rem 0;
  padding: 1rem;
  background: ${e=>"error"===e.type?"#ffebee":"#e8f5e9"};
  color: ${e=>"error"===e.type?"var(--error)":"#2e7d32"};
  border-radius: var(--border-radius);
`,Om=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  border-left: 4px solid var(--primary);
`,zm=Qr.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,Nm=Qr.button`
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
`,Mm=()=>{const[t,n]=(0,e.useState)(Array(10).fill().map((()=>[]))),[r,i]=(0,e.useState)(""),[a,o]=(0,e.useState)(""),[s,l]=(0,e.useState)(""),[u,c]=(0,e.useState)(null),[d,h]=(0,e.useState)(-1),[p,f]=(0,e.useState)(null),[m,g]=(0,e.useState)("visualization"),v=e=>{if("number"===typeof e)return e%t.length;let n=0;for(let r=0;r<e.length;r++)n=(n+e.charCodeAt(r)*(r+1))%t.length;return n},y=function(e){c({text:e,type:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success"}),setTimeout((()=>{c(null)}),3e3)};(0,e.useEffect)((()=>{const e=Array(10).fill().map((()=>[]));[{key:"apple",value:"red fruit"},{key:"banana",value:"yellow fruit"},{key:"cat",value:"small pet"},{key:"dog",value:"loyal pet"},{key:"elephant",value:"large animal"}].forEach((t=>{let{key:n,value:r}=t;const i=v(n);e[i].push({key:n,value:r})})),n(e)}),[]);return(0,Xr.jsxs)(fm,{children:[(0,Xr.jsxs)(mm,{children:[(0,Xr.jsx)(gm,{children:"Hash Tables"}),(0,Xr.jsx)(vm,{children:"Hash tables are data structures that implement an associative array abstract data type, a structure that can map keys to values using a hash function to compute an index into an array of buckets or slots."})]}),(0,Xr.jsxs)(ym,{children:[(0,Xr.jsxs)(zm,{children:[(0,Xr.jsx)(Nm,{active:"visualization"===m,onClick:()=>g("visualization"),children:"Visualization"}),(0,Xr.jsx)(Nm,{active:"code"===m,onClick:()=>g("code"),children:"Implementation"})]}),"visualization"===m?(0,Xr.jsxs)(Xr.Fragment,{children:[(0,Xr.jsxs)(Om,{children:[(0,Xr.jsx)("strong",{children:"Hash Table Properties:"}),(0,Xr.jsxs)("ul",{children:[(0,Xr.jsx)("li",{children:"Hash tables provide average O(1) time complexity for search, insert, and delete operations"}),(0,Xr.jsx)("li",{children:"Hash collisions are resolved using chaining (linked lists at each bucket)"}),(0,Xr.jsx)("li",{children:"The hash function determines which bucket (index) a key is mapped to"}),(0,Xr.jsx)("li",{children:"For this example, we're using a simple hash function: sum of character codes * position % table size"})]})]}),(0,Xr.jsxs)(Em,{children:[(0,Xr.jsxs)(Tm,{children:[(0,Xr.jsx)(Pm,{children:"Key"}),(0,Xr.jsx)($m,{type:"text",value:r,onChange:e=>i(e.target.value),placeholder:"Enter key"})]}),(0,Xr.jsxs)(Tm,{children:[(0,Xr.jsx)(Pm,{children:"Value"}),(0,Xr.jsx)($m,{type:"text",value:a,onChange:e=>o(e.target.value),placeholder:"Enter value"})]}),(0,Xr.jsx)(Am,{onClick:async()=>{if(!r)return void y("Please enter a key","error");const e=v(r);h(e);const s=t[e].findIndex((e=>e.key===r));if(-1!==s){const i=[...t];i[e]=[...i[e]],i[e][s]={key:r,value:a},f({index:e,key:r}),n(i),y(`Updated value for key '${r}'`)}else{const i=[...t];i[e]=[...i[e],{key:r,value:a}],f({index:e,key:r}),n(i),y(`Inserted key '${r}' with value '${a}'`)}i(""),o(""),setTimeout((()=>{h(-1),f(null)}),2e3)},children:"Insert / Update"})]}),(0,Xr.jsxs)(Em,{children:[(0,Xr.jsxs)(Tm,{children:[(0,Xr.jsx)(Pm,{children:"Key"}),(0,Xr.jsx)($m,{type:"text",value:s,onChange:e=>l(e.target.value),placeholder:"Enter key"})]}),(0,Xr.jsx)(Am,{onClick:async()=>{if(!s)return void y("Please enter a key to search","error");const e=v(s);h(e);const n=t[e].find((e=>e.key===s));n?(f({index:e,key:s}),y(`Found key '${s}' with value '${n.value}'`)):y(`Key '${s}' not found`,"error"),l(""),setTimeout((()=>{h(-1),f(null)}),2e3)},children:"Search"}),(0,Xr.jsx)(Am,{onClick:async()=>{if(!s)return void y("Please enter a key to delete","error");const e=v(s);h(e);const r=t[e].findIndex((e=>e.key===s));if(-1!==r){const i=[...t];i[e]=i[e].filter(((e,t)=>t!==r)),n(i),y(`Deleted key '${s}'`)}else y(`Key '${s}' not found`,"error");l(""),setTimeout((()=>{h(-1)}),2e3)},children:"Delete"}),(0,Xr.jsx)(Am,{onClick:()=>{n(Array(10).fill().map((()=>[]))),h(-1),f(null),y("Hash table cleared")},children:"Clear Table"})]}),(0,Xr.jsx)(Dh,{children:u&&(0,Xr.jsx)(Rm,{type:u.type,initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0},children:u.text})}),(0,Xr.jsx)(xm,{children:t.map(((e,t)=>(0,Xr.jsxs)(bm,{children:[(0,Xr.jsx)(wm,{children:t}),(0,Xr.jsx)(Sm,{highlight:d===t,children:e.map((e=>(0,Xr.jsxs)(km,{highlight:p&&p.index===t&&p.key===e.key,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},layout:!0,children:[(0,Xr.jsxs)(jm,{children:[e.key,":"]}),(0,Xr.jsx)(Cm,{highlight:p&&p.index===t&&p.key===e.key,children:e.value})]},e.key)))})]},t)))})]}):(0,Xr.jsx)(tp,{title:"Hash Table Implementation",code:'public class HashTable<K, V> {\n    private static class Entry<K, V> {\n        final K key;\n        V value;\n        Entry<K, V> next;\n        \n        Entry(K key, V value) {\n            this.key = key;\n            this.value = value;\n            this.next = null;\n        }\n    }\n    \n    private Entry<K, V>[] buckets;\n    private int size;\n    private static final int DEFAULT_CAPACITY = 16;\n    private static final double LOAD_FACTOR = 0.75;\n    \n    @SuppressWarnings("unchecked")\n    public HashTable() {\n        this.buckets = (Entry<K, V>[]) new Entry[DEFAULT_CAPACITY];\n        this.size = 0;\n    }\n    \n    private int hash(K key) {\n        return key == null ? 0 : Math.abs(key.hashCode()) % buckets.length;\n    }\n    \n    public void put(K key, V value) {\n        if (key == null) {\n            throw new IllegalArgumentException("Key cannot be null");\n        }\n        \n        // Check if we need to resize\n        if ((double) size / buckets.length >= LOAD_FACTOR) {\n            resize();\n        }\n        \n        int index = hash(key);\n        Entry<K, V> entry = buckets[index];\n        \n        // Check if key already exists\n        while (entry != null) {\n            if (entry.key.equals(key)) {\n                entry.value = value; // Update existing value\n                return;\n            }\n            entry = entry.next;\n        }\n        \n        // Add new entry at the beginning of the linked list\n        Entry<K, V> newEntry = new Entry<>(key, value);\n        newEntry.next = buckets[index];\n        buckets[index] = newEntry;\n        size++;\n    }\n    \n    public V get(K key) {\n        if (key == null) {\n            throw new IllegalArgumentException("Key cannot be null");\n        }\n        \n        int index = hash(key);\n        Entry<K, V> entry = buckets[index];\n        \n        while (entry != null) {\n            if (entry.key.equals(key)) {\n                return entry.value;\n            }\n            entry = entry.next;\n        }\n        \n        return null; // Key not found\n    }\n    \n    public boolean containsKey(K key) {\n        if (key == null) {\n            throw new IllegalArgumentException("Key cannot be null");\n        }\n        \n        int index = hash(key);\n        Entry<K, V> entry = buckets[index];\n        \n        while (entry != null) {\n            if (entry.key.equals(key)) {\n                return true;\n            }\n            entry = entry.next;\n        }\n        \n        return false;\n    }\n    \n    public V remove(K key) {\n        if (key == null) {\n            throw new IllegalArgumentException("Key cannot be null");\n        }\n        \n        int index = hash(key);\n        Entry<K, V> entry = buckets[index];\n        Entry<K, V> prev = null;\n        \n        while (entry != null) {\n            if (entry.key.equals(key)) {\n                if (prev == null) {\n                    buckets[index] = entry.next;\n                } else {\n                    prev.next = entry.next;\n                }\n                size--;\n                return entry.value;\n            }\n            prev = entry;\n            entry = entry.next;\n        }\n        \n        return null; // Key not found\n    }\n    \n    public int size() {\n        return size;\n    }\n    \n    public boolean isEmpty() {\n        return size == 0;\n    }\n    \n    @SuppressWarnings("unchecked")\n    private void resize() {\n        int newCapacity = buckets.length * 2;\n        Entry<K, V>[] oldBuckets = buckets;\n        buckets = (Entry<K, V>[]) new Entry[newCapacity];\n        size = 0;\n        \n        // Rehash all entries\n        for (Entry<K, V> entry : oldBuckets) {\n            while (entry != null) {\n                put(entry.key, entry.value);\n                entry = entry.next;\n            }\n        }\n    }\n}'})]})]})},Lm=Qr.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,Dm=Qr.div`
  text-align: center;
  margin-bottom: 2rem;
`,Im=Qr.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,Fm=Qr.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,_m=Qr.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`,Vm=Qr.div`
  width: 100%;
  height: 500px;
  border: 2px solid var(--primary-light);
  border-radius: var(--border-radius);
  margin: 2rem 0;
  position: relative;
  background: #f9f9f9;
  overflow: hidden;
`,Bm=Qr.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`,Um=Qr.path`
  stroke: ${e=>e.highlight?"var(--primary)":"var(--primary-light)"};
  stroke-width: 3px;
  fill: none;
  pointer-events: all;
  cursor: pointer;
`,Hm=Qr.marker`
  fill: var(--primary-light);
`,Wm=Qr(Zd.div)`
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
`,qm=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  border-left: 4px solid var(--primary);
`,Km=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,Qm=Qr.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Ym=Qr.label`
  font-size: 0.9rem;
  color: var(--text-secondary);
`,Gm=Qr.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 80px;
`,Xm=Qr.button`
  background: ${e=>"secondary"===e.variant?"var(--secondary)":"var(--primary)"};
  
  &:hover {
    background: ${e=>"secondary"===e.variant?"#02c4b0":"var(--primary-light)"};
  }
`,Jm=Qr(Zd.div)`
  margin: 1rem 0;
  padding: 1rem;
  width: 100%;
  background: ${e=>"error"===e.type?"#ffebee":"#e8f5e9"};
  color: ${e=>"error"===e.type?"var(--error)":"#2e7d32"};
  border-radius: var(--border-radius);
  text-align: center;
`,Zm=Qr.div`
  margin-top: 2rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
  width: 100%;
`,eg=Qr.h3`
  margin-bottom: 0.5rem;
  color: var(--primary);
`,tg=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f0f0f0;
  border-radius: var(--border-radius);
  width: 100%;
  text-align: center;
`,ng=Qr.span`
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
`,rg=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
  justify-content: center;
`,ig=Qr.button`
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
`;class ag{constructor(){this.vertices=new Map,this.edges=new Map}addVertex(e,t,n){this.vertices.set(e,{id:e,x:t,y:n}),this.edges.set(e,new Set)}removeVertex(e){for(const[t,n]of this.edges)n.has(e)&&(n.delete(e),console.debug(`Removed connection from ${t} to ${e}`));this.edges.delete(e),this.vertices.delete(e)}addEdge(e,t){this.edges.has(e)&&this.edges.has(t)&&(this.edges.get(e).add(t),this.edges.get(t).add(e))}removeEdge(e,t){this.edges.has(e)&&this.edges.has(t)&&(this.edges.get(e).delete(t),this.edges.get(t).delete(e))}hasEdge(e,t){return this.edges.has(e)&&this.edges.get(e).has(t)}getNeighbors(e){return this.edges.get(e)||new Set}bfs(e){const t=new Set,n=[e],r=[];for(;n.length>0;){const e=n.shift();if(!t.has(e)){t.add(e),r.push(e);const i=this.getNeighbors(e);for(const e of i)t.has(e)||n.push(e)}}return r}dfs(e){const t=new Set,n=[],r=e=>{if(!t.has(e)){t.add(e),n.push(e);const i=this.getNeighbors(e);for(const e of i)r(e)}};return r(e),n}}const og=()=>{const[t,n]=(0,e.useState)(new ag),[r,i]=(0,e.useState)(null),[a,o]=(0,e.useState)(null),[s,l]=(0,e.useState)(null),[u,c]=(0,e.useState)([]),[d,h]=(0,e.useState)([]),[p,f]=(0,e.useState)(null),[m,g]=(0,e.useState)("undirected"),[v,y]=(0,e.useState)(""),[x,b]=(0,e.useState)(""),w=function(e){o({text:e,type:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success"}),setTimeout((()=>{o(null)}),3e3)},S=(()=>{switch(s){case"addVertex":return{title:"Add Vertex Operation",description:"Time Complexity: O(1). Adding a vertex to the graph is a constant time operation."};case"removeVertex":return{title:"Remove Vertex Operation",description:"Time Complexity: O(V + E). Removing a vertex requires removing all its edges and updating the adjacency lists."};case"addEdge":return{title:"Add Edge Operation",description:"Time Complexity: O(1). Adding an edge to the graph is a constant time operation."};case"removeEdge":return{title:"Remove Edge Operation",description:"Time Complexity: O(1). Removing an edge from the graph is a constant time operation."};case"bfs":return{title:"Breadth-First Search",description:"Time Complexity: O(V + E). BFS visits all vertices and edges in the graph exactly once."};case"dfs":return{title:"Depth-First Search",description:"Time Complexity: O(V + E). DFS visits all vertices and edges in the graph exactly once."};default:return null}})();return(0,Xr.jsxs)(Lm,{children:[(0,Xr.jsxs)(Dm,{children:[(0,Xr.jsx)(Im,{children:"Graphs"}),(0,Xr.jsx)(Fm,{children:"A graph is a non-linear data structure consisting of vertices (nodes) and edges that connect these vertices. Graphs can be directed or undirected."})]}),(0,Xr.jsxs)(_m,{children:[(0,Xr.jsxs)(rg,{children:[(0,Xr.jsx)(ig,{active:"undirected"===m,onClick:()=>g("undirected"),children:"Undirected Graph"}),(0,Xr.jsx)(ig,{active:"directed"===m,onClick:()=>g("directed"),children:"Directed Graph"})]}),(0,Xr.jsxs)(qm,{children:[(0,Xr.jsx)("strong",{children:"How to use:"}),(0,Xr.jsxs)("ul",{children:[(0,Xr.jsx)("li",{children:"Click on the canvas to add a vertex"}),(0,Xr.jsx)("li",{children:"Click a vertex once to select it, then click another vertex to create an edge between them"}),(0,Xr.jsx)("li",{children:"Right-click on a vertex to delete it"}),(0,Xr.jsx)("li",{children:"Right-click on an edge to delete it"})]}),(0,Xr.jsxs)("p",{children:[(0,Xr.jsx)("strong",{children:"Vertex ID:"})," Each node in the graph needs a unique identifier. You can provide a custom ID in the input field before adding a vertex, or leave it blank to get an automatically generated ID (e.g., V1, V2, etc.)."]})]}),(0,Xr.jsxs)(Km,{children:[(0,Xr.jsxs)(Qm,{children:[(0,Xr.jsx)(Ym,{children:"Vertex ID:"}),(0,Xr.jsx)(Gm,{type:"text",value:v,onChange:e=>y(e.target.value),placeholder:"Vertex ID"})]}),(0,Xr.jsxs)(Qm,{children:[(0,Xr.jsx)(Ym,{children:"Start Vertex:"}),(0,Xr.jsx)(Gm,{type:"text",value:x,onChange:e=>b(e.target.value),placeholder:"Start Vertex"})]}),(0,Xr.jsx)(Xm,{onClick:()=>{if(!x)return void w("Please enter a start vertex","error");if(!t.vertices.has(x))return void w("Start vertex does not exist","error");l("bfs");const e=t.bfs(x);f({type:"BFS",values:e});(async()=>{for(let t=0;t<e.length;t++)c([e[t]]),await new Promise((e=>setTimeout(e,500)));setTimeout((()=>{c([])}),1e3)})()},children:"BFS"}),(0,Xr.jsx)(Xm,{onClick:()=>{if(!x)return void w("Please enter a start vertex","error");if(!t.vertices.has(x))return void w("Start vertex does not exist","error");l("dfs");const e=t.dfs(x);f({type:"DFS",values:e});(async()=>{for(let t=0;t<e.length;t++)c([e[t]]),await new Promise((e=>setTimeout(e,500)));setTimeout((()=>{c([])}),1e3)})()},children:"DFS"}),(0,Xr.jsx)(Xm,{onClick:()=>{n(new ag),i(null),c([]),h([]),f(null),w("Graph cleared")},variant:"secondary",children:"Clear Graph"})]}),(0,Xr.jsx)(Dh,{children:a&&(0,Xr.jsx)(Jm,{type:a.type,initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0},children:a.text})}),p&&(0,Xr.jsxs)(tg,{children:[(0,Xr.jsxs)("strong",{children:[p.type," Traversal:"]}),(0,Xr.jsx)("div",{style:{marginTop:"0.5rem"},children:p.values.map(((e,t)=>(0,Xr.jsx)(ng,{children:e},t)))})]}),(0,Xr.jsxs)(Vm,{onClick:e=>{const r=e.currentTarget.getBoundingClientRect(),i=e.clientX-r.left,a=e.clientY-r.top,o=v||`V${t.vertices.size+1}`;if(t.vertices.has(o))return void w(`Vertex ${o} already exists`,"error");l("addVertex");const s=new ag;t.vertices.forEach(((e,n)=>{s.addVertex(n,e.x,e.y),t.edges.get(n).forEach((e=>{s.addEdge(n,e)}))})),s.addVertex(o,i,a),n(s),w(`Added vertex ${o}`),y("")},children:[(0,Xr.jsxs)(Bm,{children:[(0,Xr.jsx)("defs",{children:(0,Xr.jsx)(Hm,{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:(0,Xr.jsx)("polygon",{points:"0 0, 10 3.5, 0 7"})})}),Array.from(t.vertices.entries()).flatMap((e=>{let[r,i]=e;const a=t.edges.get(r);return a?Array.from(a).map((e=>{if("undirected"===m&&r>e)return null;const a=t.vertices.get(e);if(!a)return null;const o=d.includes(`${r}-${e}`),s=`M ${i.x} ${i.y} L ${a.x} ${a.y}`;return(0,Xr.jsx)(Um,{d:s,highlight:o,markerEnd:"directed"===m?"url(#arrowhead)":"",onContextMenu:i=>{i.preventDefault(),i.stopPropagation(),((e,r)=>{if(!t.hasEdge(e,r))return void w("Edge does not exist","error");l("removeEdge");const i=new ag;t.vertices.forEach(((n,a)=>{i.addVertex(a,n.x,n.y),t.edges.get(a).forEach((t=>{a===e&&t===r||a===r&&t===e||i.addEdge(a,t)}))})),n(i),w(`Removed edge between ${e} and ${r}`)})(r,e)}},`${r}-${e}`)})).filter(Boolean):[]}))]}),Array.from(t.vertices.values()).map((e=>(0,Xr.jsx)(Wm,{highlight:u.includes(e.id),selected:r===e.id,style:{left:e.x-20+"px",top:e.y-20+"px"},initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.3},onClick:a=>{a.stopPropagation(),r?(r!==e.id&&((e,r)=>{if(t.hasEdge(e,r))return void w("Edge already exists","error");l("addEdge");const i=new ag;t.vertices.forEach(((e,n)=>{i.addVertex(n,e.x,e.y),t.edges.get(n).forEach((e=>{i.addEdge(n,e)}))})),i.addEdge(e,r),n(i),w(`Added edge between ${e} and ${r}`)})(r,e.id),i(null)):i(e.id)},onContextMenu:r=>{r.preventDefault(),r.stopPropagation(),(e=>{l("removeVertex");const r=new ag;t.vertices.forEach(((n,i)=>{i!==e&&(r.addVertex(i,n.x,n.y),t.edges.get(i).forEach((t=>{t!==e&&r.addEdge(i,t)})))})),n(r),w(`Removed vertex ${e}`)})(e.id)},children:e.id},e.id)))]}),S&&(0,Xr.jsxs)(Zm,{children:[(0,Xr.jsx)(eg,{children:S.title}),(0,Xr.jsx)("p",{children:S.description})]})]})]})},sg=Qr.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,lg=Qr.div`
  text-align: center;
  margin-bottom: 2rem;
`,ug=Qr.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,cg=Qr.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,dg=Qr.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`,hg=Qr.div`
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
`,pg=Qr(Zd.div)`
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
`,fg=Qr.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: visible;
`,mg=Qr.path`
  stroke: var(--primary-light);
  stroke-width: 3px;
  fill: none;
`,gg=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,vg=Qr.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 80px;
`,yg=Qr.button`
  background: ${e=>"secondary"===e.variant?"var(--secondary)":"var(--primary)"};
  
  &:hover {
    background: ${e=>"secondary"===e.variant?"#02c4b0":"var(--primary-light)"};
  }
`,xg=Qr(Zd.div)`
  margin: 1rem 0;
  padding: 1rem;
  width: 100%;
  background: ${e=>"error"===e.type?"#ffebee":"#e8f5e9"};
  color: ${e=>"error"===e.type?"var(--error)":"#2e7d32"};
  border-radius: var(--border-radius);
  text-align: center;
`,bg=Qr.div`
  margin-top: 2rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
  width: 100%;
`,wg=Qr.h3`
  margin-bottom: 0.5rem;
  color: var(--primary);
`,Sg=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
  justify-content: center;
`,kg=Qr.button`
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
`,jg=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  border-left: 4px solid var(--primary);
  width: 100%;
`,Cg=Qr.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,Eg=Qr.button`
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
`,Tg=()=>{const[t,n]=(0,e.useState)([]),[r,i]=(0,e.useState)([]),[a,o]=(0,e.useState)([]),[s,l]=(0,e.useState)(""),[u,c]=(0,e.useState)(null),[d,h]=(0,e.useState)(null),[p,f]=(0,e.useState)([]),[m,g]=(0,e.useState)("max"),[v,y]=(0,e.useState)("visualization"),x=e=>2*e+1,b=e=>2*e+2;(0,e.useEffect)((()=>{const{nodes:e,edges:n}=(e=>{if(0===e.length)return{nodes:[],edges:[]};const t=[],n=[],r=70*(Math.floor(Math.log2(e.length))+1)+100,i=e=>{const t=Math.floor(Math.log2(e+1));return{x:(800-60*Math.pow(2,t))/2+60*(e-Math.pow(2,t)+1)+30-25,y:70*t+20}};for(let a=0;a<e.length;a++){const{x:o,y:s}=i(a);t.push({id:a,value:e[a],x:Math.max(25,Math.min(730,o)),y:Math.min(r-50-20,s),highlight:p.includes(a)});const l=x(a);l<e.length&&n.push({from:a,to:l});const u=b(a);u<e.length&&n.push({from:a,to:u})}return{nodes:t,edges:n}})(t);i(e),o(n)}),[t,p]);const w=function(e){c({text:e,type:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success"}),setTimeout((()=>{c(null)}),3e3)},S=e=>{e!==m&&(g(e),n([]),f([]),w(`Switched to ${e} heap`))},k=(()=>{switch(d){case"insert":return{title:"Insert Operation",description:`Time Complexity: O(log n). Inserting a new element into a ${m} heap involves adding the element to the end and then "bubbling up" to maintain the heap property.`};case"extractRoot":return{title:"Extract Root Operation",description:`Time Complexity: O(log n). Removing the ${"max"===m?"maximum":"minimum"} element (root) from a ${m} heap involves replacing it with the last element and then "bubbling down" to maintain the heap property.`};default:return null}})(),j=()=>{const e=Array.from({length:7},(()=>Math.floor(90*Math.random())+10)),t=(e,n,r)=>{let i=n;const a=2*n+1,o=2*n+2;a<r&&("max"===m&&e[a]>e[i]||"min"===m&&e[a]<e[i])&&(i=a),o<r&&("max"===m&&e[o]>e[i]||"min"===m&&e[o]<e[i])&&(i=o),i!==n&&([e[n],e[i]]=[e[i],e[n]],t(e,i,r))},r=(e=>{const n=[...e];for(let r=Math.floor(n.length/2)-1;r>=0;r--)t(n,r,n.length);return n})(e);n(r),w(`Generated a random ${m} heap`)};(0,e.useEffect)((()=>{j()}),[m]);return(0,Xr.jsxs)(sg,{children:[(0,Xr.jsxs)(lg,{children:[(0,Xr.jsx)(ug,{children:"Heaps"}),(0,Xr.jsx)(cg,{children:"A heap is a specialized tree-based data structure that satisfies the heap property. In a max heap, for any given node, the value of the node is greater than or equal to the values of its children. In a min heap, the value of the node is less than or equal to the values of its children."})]}),(0,Xr.jsxs)(dg,{children:[(0,Xr.jsxs)(Cg,{children:[(0,Xr.jsx)(Eg,{active:"visualization"===v,onClick:()=>y("visualization"),children:"Visualization"}),(0,Xr.jsx)(Eg,{active:"code"===v,onClick:()=>y("code"),children:"Implementation"})]}),"visualization"===v?(0,Xr.jsxs)(Xr.Fragment,{children:[(0,Xr.jsxs)(Sg,{children:[(0,Xr.jsx)(kg,{active:"max"===m,onClick:()=>S("max"),children:"Max Heap"}),(0,Xr.jsx)(kg,{active:"min"===m,onClick:()=>S("min"),children:"Min Heap"})]}),(0,Xr.jsxs)(jg,{children:[(0,Xr.jsxs)("strong",{children:["max"===m?"Max Heap":"Min Heap"," Properties:"]}),(0,Xr.jsxs)("ul",{children:[(0,Xr.jsx)("li",{children:"Complete binary tree where each node satisfies the heap property"}),(0,Xr.jsx)("li",{children:"max"===m?"Max Heap: Every parent node has a value greater than or equal to its children":"Min Heap: Every parent node has a value less than or equal to its children"}),(0,Xr.jsxs)("li",{children:["The root contains the ","max"===m?"maximum":"minimum"," value in the heap"]}),(0,Xr.jsx)("li",{children:"Efficiently implements priority queues with O(log n) time complexity for insertions and extractions"})]})]}),(0,Xr.jsxs)(gg,{children:[(0,Xr.jsxs)("div",{children:[(0,Xr.jsx)("label",{children:"Value: "}),(0,Xr.jsx)(vg,{type:"text",value:s,onChange:e=>l(e.target.value),placeholder:"Value"})]}),(0,Xr.jsx)(yg,{onClick:async()=>{if(""===s)return void w("Please enter a value","error");const e=parseInt(s);if(isNaN(e))return void w("Value must be a number","error");h("insert");const{newHeap:r,path:i}=(e=>{const n=[...t,e];let r=n.length-1,i=[r];for(;r>0;){const e=(a=r,Math.floor((a-1)/2));if("max"===m&&n[e]>=n[r]||"min"===m&&n[e]<=n[r])break;[n[e],n[r]]=[n[r],n[e]],r=e,i.push(r)}var a;return{newHeap:n,path:i.reverse()}})(e);for(let t=0;t<i.length;t++)f([i[t]]),await new Promise((e=>setTimeout(e,500)));n(r),w(`Inserted ${e} into the ${m} heap`),setTimeout((()=>{f([])}),1e3)},children:"Insert"}),(0,Xr.jsxs)(yg,{onClick:async()=>{if(0===t.length)return void w("Heap is empty","error");h("extractRoot"),f([0]),await new Promise((e=>setTimeout(e,500)));const e=t[0],{newHeap:r,path:i}=(()=>{if(0===t.length)return{newHeap:[],path:[]};if(1===t.length)return{newHeap:[],path:[0]};const e=[...t],n=(e[0],e.pop());if(e.length>0){e[0]=n;let t=[0];const r=n=>{const i=x(n),a=b(n);let o=n;"max"===m?(i<e.length&&e[i]>e[o]&&(o=i),a<e.length&&e[a]>e[o]&&(o=a)):(i<e.length&&e[i]<e[o]&&(o=i),a<e.length&&e[a]<e[o]&&(o=a)),o!==n&&([e[n],e[o]]=[e[o],e[n]],t.push(o),r(o))};return r(0),{newHeap:e,path:t}}return{newHeap:e,path:[0]}})();for(let t=0;t<i.length;t++)f([i[t]]),await new Promise((e=>setTimeout(e,500)));n(r),w(`Extracted ${e} from the ${m} heap`),setTimeout((()=>{f([])}),1e3)},variant:"secondary",children:["Extract ","max"===m?"Max":"Min"]}),(0,Xr.jsx)(yg,{onClick:j,children:"Generate Random Heap"}),(0,Xr.jsx)(yg,{onClick:()=>{n([]),f([]),c(null),w("Heap cleared")},variant:"secondary",children:"Clear Heap"})]}),(0,Xr.jsx)(Dh,{children:u&&(0,Xr.jsx)(xg,{type:u.type,initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0},children:u.text})}),(0,Xr.jsxs)(hg,{children:[(0,Xr.jsx)(fg,{children:a.map(((e,t)=>{const n=r.find((t=>t.id===e.from)),i=r.find((t=>t.id===e.to));if(!n||!i)return null;const a=n.x+25,o=n.y+25,s=i.x+25,l=i.y+25,u=(o+l)/2,c=`M ${a} ${o} C ${a} ${u}, ${s} ${u}, ${s} ${l}`;return(0,Xr.jsx)(mg,{d:c,strokeDasharray:(p.includes(e.from)&&p.includes(e.to),"none"),opacity:p.includes(e.from)&&p.includes(e.to)?1:.6},t)}))}),r.map((e=>(0,Xr.jsx)(pg,{highlight:e.highlight,style:{left:`${e.x}px`,top:`${e.y}px`},initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.3},"data-node":"true","data-value":e.value,children:e.value},e.id)))]}),k&&(0,Xr.jsxs)(bg,{children:[(0,Xr.jsx)(wg,{children:k.title}),(0,Xr.jsx)("p",{children:k.description})]})]}):(0,Xr.jsx)("div",{children:"max"===m?(0,Xr.jsx)(tp,{title:"Max Heap Implementation",code:'public class MaxHeap {\n    private ArrayList<Integer> heap;\n    \n    public MaxHeap() {\n        heap = new ArrayList<>();\n    }\n    \n    private int parent(int i) {\n        return (i - 1) / 2;\n    }\n    \n    private int leftChild(int i) {\n        return 2 * i + 1;\n    }\n    \n    private int rightChild(int i) {\n        return 2 * i + 2;\n    }\n    \n    private void swap(int i, int j) {\n        int temp = heap.get(i);\n        heap.set(i, heap.get(j));\n        heap.set(j, temp);\n    }\n    \n    private void heapifyUp(int i) {\n        int parent = parent(i);\n        if (parent >= 0 && heap.get(parent) < heap.get(i)) {\n            swap(parent, i);\n            heapifyUp(parent);\n        }\n    }\n    \n    private void heapifyDown(int i) {\n        int largest = i;\n        int left = leftChild(i);\n        int right = rightChild(i);\n        \n        if (left < heap.size() && heap.get(left) > heap.get(largest))\n            largest = left;\n            \n        if (right < heap.size() && heap.get(right) > heap.get(largest))\n            largest = right;\n            \n        if (largest != i) {\n            swap(i, largest);\n            heapifyDown(largest);\n        }\n    }\n    \n    public void insert(int value) {\n        heap.add(value);\n        heapifyUp(heap.size() - 1);\n    }\n    \n    public int extractMax() {\n        if (heap.isEmpty())\n            throw new IllegalStateException("Heap is empty");\n            \n        int max = heap.get(0);\n        int lastElement = heap.remove(heap.size() - 1);\n        \n        if (!heap.isEmpty()) {\n            heap.set(0, lastElement);\n            heapifyDown(0);\n        }\n        \n        return max;\n    }\n    \n    public int peek() {\n        if (heap.isEmpty())\n            throw new IllegalStateException("Heap is empty");\n        return heap.get(0);\n    }\n    \n    public boolean isEmpty() {\n        return heap.isEmpty();\n    }\n    \n    public int size() {\n        return heap.size();\n    }\n    \n    // Build heap from array\n    public void buildHeap(int[] array) {\n        heap.clear();\n        for (int value : array) {\n            heap.add(value);\n        }\n        \n        for (int i = parent(heap.size() - 1); i >= 0; i--) {\n            heapifyDown(i);\n        }\n    }\n}'}):(0,Xr.jsx)(tp,{title:"Min Heap Implementation",code:'public class MinHeap {\n    private ArrayList<Integer> heap;\n    \n    public MinHeap() {\n        heap = new ArrayList<>();\n    }\n    \n    private int parent(int i) {\n        return (i - 1) / 2;\n    }\n    \n    private int leftChild(int i) {\n        return 2 * i + 1;\n    }\n    \n    private int rightChild(int i) {\n        return 2 * i + 2;\n    }\n    \n    private void swap(int i, int j) {\n        int temp = heap.get(i);\n        heap.set(i, heap.get(j));\n        heap.set(j, temp);\n    }\n    \n    private void heapifyUp(int i) {\n        int parent = parent(i);\n        if (parent >= 0 && heap.get(parent) > heap.get(i)) {\n            swap(parent, i);\n            heapifyUp(parent);\n        }\n    }\n    \n    private void heapifyDown(int i) {\n        int smallest = i;\n        int left = leftChild(i);\n        int right = rightChild(i);\n        \n        if (left < heap.size() && heap.get(left) < heap.get(smallest))\n            smallest = left;\n            \n        if (right < heap.size() && heap.get(right) < heap.get(smallest))\n            smallest = right;\n            \n        if (smallest != i) {\n            swap(i, smallest);\n            heapifyDown(smallest);\n        }\n    }\n    \n    public void insert(int value) {\n        heap.add(value);\n        heapifyUp(heap.size() - 1);\n    }\n    \n    public int extractMin() {\n        if (heap.isEmpty())\n            throw new IllegalStateException("Heap is empty");\n            \n        int min = heap.get(0);\n        int lastElement = heap.remove(heap.size() - 1);\n        \n        if (!heap.isEmpty()) {\n            heap.set(0, lastElement);\n            heapifyDown(0);\n        }\n        \n        return min;\n    }\n    \n    public int peek() {\n        if (heap.isEmpty())\n            throw new IllegalStateException("Heap is empty");\n        return heap.get(0);\n    }\n    \n    public boolean isEmpty() {\n        return heap.isEmpty();\n    }\n    \n    public int size() {\n        return heap.size();\n    }\n    \n    // Build heap from array\n    public void buildHeap(int[] array) {\n        heap.clear();\n        for (int value : array) {\n            heap.add(value);\n        }\n        \n        for (int i = parent(heap.size() - 1); i >= 0; i--) {\n            heapifyDown(i);\n        }\n    }\n}'})})]})]})},Pg=Qr.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,$g=Qr.div`
  text-align: center;
  margin-bottom: 2rem;
`,Ag=Qr.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,Rg=Qr.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,Og=Qr.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,zg=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
  justify-content: center;
  align-items: flex-end;
  min-height: 200px;
`,Ng=Qr(Zd.div)`
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
`,Mg=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,Lg=Qr.button`
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
`,Dg=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Ig=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Fg=Qr.input`
  width: 100px;
`,_g=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,Vg=Qr.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,Bg=Qr.button`
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
`,Ug=Qr.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,Hg=Qr.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,Wg=Qr.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,qg=Qr.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,Kg=Qr.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,Qg=()=>{const[t,n]=(0,e.useState)([]),[r,i]=(0,e.useState)(!1),[a,o]=(0,e.useState)(!1),[s,l]=(0,e.useState)([]),[u,c]=(0,e.useState)([]),[d,h]=(0,e.useState)([]),[p,f]=(0,e.useState)(10),[m,g]=(0,e.useState)(500),[v,y]=(0,e.useState)("visualization");(0,e.useEffect)((()=>{x()}),[p]);const x=()=>{const e=[];for(let t=0;t<p;t++)e.push(Math.floor(100*Math.random())+5);n(e),o(!1),h([])},b=e=>new Promise((t=>setTimeout(t,e)));return(0,Xr.jsxs)(Pg,{children:[(0,Xr.jsxs)($g,{children:[(0,Xr.jsx)(Ag,{children:"Bubble Sort"}),(0,Xr.jsx)(Rg,{children:"Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in wrong order."})]}),(0,Xr.jsxs)(Og,{children:[(0,Xr.jsxs)(Vg,{children:[(0,Xr.jsx)(Bg,{active:"visualization"===v,onClick:()=>y("visualization"),children:"Visualization"}),(0,Xr.jsx)(Bg,{active:"code"===v,onClick:()=>y("code"),children:"Code"})]}),"visualization"===v?(0,Xr.jsxs)(Xr.Fragment,{children:[(0,Xr.jsxs)(Mg,{children:[(0,Xr.jsxs)(Ig,{children:[(0,Xr.jsx)("span",{children:"Size:"}),(0,Xr.jsx)(Fg,{type:"range",min:"5",max:"20",value:p,onChange:e=>f(parseInt(e.target.value)),disabled:r}),(0,Xr.jsx)("span",{children:p})]}),(0,Xr.jsxs)(Dg,{children:[(0,Xr.jsx)("span",{children:"Speed:"}),(0,Xr.jsx)(Fg,{type:"range",min:"50",max:"1000",step:"50",value:m,onChange:e=>g(parseInt(e.target.value)),disabled:r}),(0,Xr.jsxs)("span",{children:[m,"ms"]})]}),(0,Xr.jsx)(Lg,{onClick:x,disabled:r,children:"Generate New Array"}),(0,Xr.jsx)(Lg,{onClick:async()=>{if(r)return;i(!0),o(!1),h([]);const e=t.length;let a,s=[...t];for(let t=0;t<e-1;t++){a=!1;for(let r=0;r<e-t-1;r++){if(l([r,r+1]),await b(m),s[r]>s[r+1]){c([r,r+1]),await b(m);let e=s[r];s[r]=s[r+1],s[r+1]=e,n([...s]),a=!0,c([]),await b(m/2)}l([])}if(h((n=>[...n,e-1-t])),!a){const n=[];for(let r=0;r<=e-t-2;r++)n.push(r);h((e=>[...e,...n]));break}}i(!1),o(!0)},disabled:r||a,children:r?"Sorting...":"Sort"}),(0,Xr.jsx)(Lg,{onClick:()=>{i(!1),o(!1),l([]),c([]),h([]),x()},disabled:r,children:"Reset"})]}),(0,Xr.jsx)(zg,{children:t.map(((e,t)=>(0,Xr.jsx)(Ng,{height:2*e,comparing:s.includes(t),swapping:u.includes(t),sorted:d.includes(t),initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.05*t},children:e},t)))}),r&&(0,Xr.jsx)(_g,{children:"Sorting in progress..."}),a&&(0,Xr.jsx)(_g,{children:"Array sorted successfully!"}),(0,Xr.jsxs)(Ug,{children:[(0,Xr.jsx)(Hg,{children:"Algorithm Complexity"}),(0,Xr.jsx)("p",{children:"Bubble Sort is a simple algorithm but not very efficient for large datasets."}),(0,Xr.jsxs)(Wg,{children:[(0,Xr.jsx)("thead",{children:(0,Xr.jsxs)("tr",{children:[(0,Xr.jsx)(qg,{children:"Time Complexity"}),(0,Xr.jsx)(qg,{children:"Space Complexity"})]})}),(0,Xr.jsx)("tbody",{children:(0,Xr.jsxs)("tr",{children:[(0,Xr.jsxs)(Kg,{children:[(0,Xr.jsx)("div",{children:"Best Case: O(n)"}),(0,Xr.jsx)("div",{children:"Average Case: O(n\xb2)"}),(0,Xr.jsx)("div",{children:"Worst Case: O(n\xb2)"})]}),(0,Xr.jsx)(Kg,{children:"O(1)"})]})})]})]})]}):(0,Xr.jsx)(tp,{title:"Bubble Sort Implementation (Java)",code:'\npublic class BubbleSort {\n  public static void bubbleSort(int[] arr) {\n    int n = arr.length;\n    boolean swapped;\n    \n    for (int i = 0; i < n - 1; i++) {\n      swapped = false;\n      \n      for (int j = 0; j < n - i - 1; j++) {\n        // Compare adjacent elements\n        if (arr[j] > arr[j + 1]) {\n          // Swap arr[j] and arr[j+1]\n          int temp = arr[j];\n          arr[j] = arr[j + 1];\n          arr[j + 1] = temp;\n          swapped = true;\n        }\n      }\n      \n      // If no swapping occurred in this pass, array is sorted\n      if (!swapped) {\n        break;\n      }\n    }\n  }\n  \n  // Driver method to test the algorithm\n  public static void main(String[] args) {\n    int[] arr = {64, 34, 25, 12, 22, 11, 90};\n    \n    System.out.println("Unsorted array:");\n    printArray(arr);\n    \n    bubbleSort(arr);\n    \n    System.out.println("Sorted array:");\n    printArray(arr);\n  }\n  \n  // Utility method to print an array\n  static void printArray(int[] arr) {\n    for (int i = 0; i < arr.length; i++) {\n      System.out.print(arr[i] + " ");\n    }\n    System.out.println();\n  }\n}\n'})]})]})},Yg=Qr.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,Gg=Qr.div`
  text-align: center;
  margin-bottom: 2rem;
`,Xg=Qr.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,Jg=Qr.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,Zg=Qr.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,ev=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
  justify-content: center;
  align-items: flex-end;
  min-height: 200px;
`,tv=Qr(Zd.div)`
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
`,nv=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,rv=Qr.button`
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
`,iv=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,av=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,ov=Qr.input`
  width: 100px;
`,sv=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,lv=Qr.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,uv=Qr.button`
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
`,cv=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,dv=Qr.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,hv=Qr.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,pv=Qr.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,fv=Qr.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,mv=Qr.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,gv=()=>{const[t,n]=(0,e.useState)([]),[r,i]=(0,e.useState)(!1),[a,o]=(0,e.useState)(!1),[s,l]=(0,e.useState)([]),[u,c]=(0,e.useState)(-1),[d,h]=(0,e.useState)([]),[p,f]=(0,e.useState)([]),[m,g]=(0,e.useState)(10),[v,y]=(0,e.useState)(500),[x,b]=(0,e.useState)("visualization"),[w,S]=(0,e.useState)("");(0,e.useEffect)((()=>{k()}),[m]);const k=()=>{const e=[];for(let t=0;t<m;t++)e.push(Math.floor(100*Math.random())+5);n(e),o(!1),f([])},j=e=>new Promise((t=>setTimeout(t,e)));return(0,Xr.jsxs)(Yg,{children:[(0,Xr.jsxs)(Gg,{children:[(0,Xr.jsx)(Xg,{children:"Selection Sort"}),(0,Xr.jsx)(Jg,{children:"Selection Sort is a simple sorting algorithm that repeatedly finds the minimum element from the unsorted part of the array and puts it at the beginning."})]}),(0,Xr.jsxs)(Zg,{children:[(0,Xr.jsxs)(lv,{children:[(0,Xr.jsx)(uv,{active:"visualization"===x,onClick:()=>b("visualization"),children:"Visualization"}),(0,Xr.jsx)(uv,{active:"code"===x,onClick:()=>b("code"),children:"Code"})]}),"visualization"===x?(0,Xr.jsxs)(Xr.Fragment,{children:[(0,Xr.jsxs)(nv,{children:[(0,Xr.jsxs)(av,{children:[(0,Xr.jsx)("span",{children:"Size:"}),(0,Xr.jsx)(ov,{type:"range",min:"5",max:"20",value:m,onChange:e=>g(parseInt(e.target.value)),disabled:r}),(0,Xr.jsx)("span",{children:m})]}),(0,Xr.jsxs)(iv,{children:[(0,Xr.jsx)("span",{children:"Speed:"}),(0,Xr.jsx)(ov,{type:"range",min:"50",max:"1000",step:"50",value:v,onChange:e=>y(parseInt(e.target.value)),disabled:r}),(0,Xr.jsxs)("span",{children:[v,"ms"]})]}),(0,Xr.jsx)(rv,{onClick:k,disabled:r,children:"Generate New Array"}),(0,Xr.jsx)(rv,{onClick:async()=>{if(r)return;i(!0),o(!1),f([]);const e=t.length;let a=[...t];for(let t=0;t<e-1;t++){S(`Finding the minimum element in the unsorted part of the array (starting from index ${t})`);let r=t;c(r),await j(v);for(let n=t+1;n<e;n++)l([r,n]),S(`Comparing ${a[n]} with current minimum ${a[r]}`),await j(v),a[n]<a[r]&&(r=n,c(r),S(`New minimum found: ${a[r]} at index ${r}`),await j(v)),l([]);if(r!==t){h([t,r]),S(`Swapping ${a[t]} with ${a[r]}`),await j(v);let e=a[r];a[r]=a[t],a[t]=e,n([...a])}else S(`${a[t]} is already at the correct position (index ${t})`);h([]),c(-1),await j(v),f((e=>[...e,t]))}f((t=>[...t,e-1])),S("Array sorted successfully!"),i(!1),o(!0)},disabled:r||a,children:r?"Sorting...":"Sort"}),(0,Xr.jsx)(rv,{onClick:()=>{i(!1),o(!1),l([]),c(-1),h([]),f([]),S(""),k()},disabled:r,children:"Reset"})]}),(0,Xr.jsx)(ev,{children:t.map(((e,t)=>(0,Xr.jsx)(tv,{height:2*e,comparing:s.includes(t),minIndex:t===u,swapping:d.includes(t),sorted:p.includes(t),initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.05*t},children:e},t)))}),w&&(0,Xr.jsx)(cv,{children:w}),a&&!w&&(0,Xr.jsx)(sv,{children:"Array sorted successfully!"}),(0,Xr.jsxs)(dv,{children:[(0,Xr.jsx)(hv,{children:"Algorithm Complexity"}),(0,Xr.jsx)("p",{children:"Selection Sort has a simple implementation but is generally less efficient than algorithms like Quick Sort or Merge Sort for large datasets."}),(0,Xr.jsxs)(pv,{children:[(0,Xr.jsx)("thead",{children:(0,Xr.jsxs)("tr",{children:[(0,Xr.jsx)(fv,{children:"Time Complexity"}),(0,Xr.jsx)(fv,{children:"Space Complexity"})]})}),(0,Xr.jsx)("tbody",{children:(0,Xr.jsxs)("tr",{children:[(0,Xr.jsxs)(mv,{children:[(0,Xr.jsx)("div",{children:"Best Case: O(n\xb2)"}),(0,Xr.jsx)("div",{children:"Average Case: O(n\xb2)"}),(0,Xr.jsx)("div",{children:"Worst Case: O(n\xb2)"})]}),(0,Xr.jsx)(mv,{children:"O(1)"})]})})]})]})]}):(0,Xr.jsx)(tp,{title:"Selection Sort Implementation (Java)",code:'\npublic class SelectionSort {\n  public static void selectionSort(int[] arr) {\n    int n = arr.length;\n    \n    // One by one move boundary of unsorted subarray\n    for (int i = 0; i < n - 1; i++) {\n      // Find the minimum element in unsorted array\n      int min_idx = i;\n      for (int j = i + 1; j < n; j++) {\n        if (arr[j] < arr[min_idx]) {\n          min_idx = j;\n        }\n      }\n      \n      // Swap the found minimum element with the first element\n      int temp = arr[min_idx];\n      arr[min_idx] = arr[i];\n      arr[i] = temp;\n    }\n  }\n  \n  // Driver method to test above\n  public static void main(String[] args) {\n    int[] arr = {64, 25, 12, 22, 11};\n    \n    System.out.println("Unsorted array:");\n    printArray(arr);\n    \n    selectionSort(arr);\n    \n    System.out.println("Sorted array:");\n    printArray(arr);\n  }\n  \n  // Utility method to print an array\n  static void printArray(int[] arr) {\n    for (int i = 0; i < arr.length; i++) {\n      System.out.print(arr[i] + " ");\n    }\n    System.out.println();\n  }\n}\n'})]})]})},vv=Qr.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,yv=Qr.div`
  text-align: center;
  margin-bottom: 2rem;
`,xv=Qr.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,bv=Qr.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,wv=Qr.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,Sv=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
  justify-content: center;
  align-items: flex-end;
  min-height: 200px;
`,kv=Qr(Zd.div)`
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
`,jv=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,Cv=Qr.button`
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
`,Ev=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Tv=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Pv=Qr.input`
  width: 100px;
`,$v=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,Av=Qr.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,Rv=Qr.button`
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
`,Ov=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,zv=Qr.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,Nv=Qr.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,Mv=Qr.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,Lv=Qr.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,Dv=Qr.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,Iv=()=>{const[t,n]=(0,e.useState)([]),[r,i]=(0,e.useState)(!1),[a,o]=(0,e.useState)(!1),[s,l]=(0,e.useState)(-1),[u,c]=(0,e.useState)(-1),[d,h]=(0,e.useState)([]),[p,f]=(0,e.useState)([0]),[m,g]=(0,e.useState)(10),[v,y]=(0,e.useState)(500),[x,b]=(0,e.useState)("visualization"),[w,S]=(0,e.useState)("");(0,e.useEffect)((()=>{k()}),[m]);const k=()=>{const e=[];for(let t=0;t<m;t++)e.push(Math.floor(100*Math.random())+5);n(e),o(!1),f([0])},j=e=>new Promise((t=>setTimeout(t,e)));return(0,Xr.jsxs)(vv,{children:[(0,Xr.jsxs)(yv,{children:[(0,Xr.jsx)(xv,{children:"Insertion Sort"}),(0,Xr.jsx)(bv,{children:"Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is efficient for small data sets and is often used as part of more sophisticated algorithms."})]}),(0,Xr.jsxs)(wv,{children:[(0,Xr.jsxs)(Av,{children:[(0,Xr.jsx)(Rv,{active:"visualization"===x,onClick:()=>b("visualization"),children:"Visualization"}),(0,Xr.jsx)(Rv,{active:"code"===x,onClick:()=>b("code"),children:"Code"})]}),"visualization"===x?(0,Xr.jsxs)(Xr.Fragment,{children:[(0,Xr.jsxs)(jv,{children:[(0,Xr.jsxs)(Tv,{children:[(0,Xr.jsx)("span",{children:"Size:"}),(0,Xr.jsx)(Pv,{type:"range",min:"5",max:"20",value:m,onChange:e=>g(parseInt(e.target.value)),disabled:r}),(0,Xr.jsx)("span",{children:m})]}),(0,Xr.jsxs)(Ev,{children:[(0,Xr.jsx)("span",{children:"Speed:"}),(0,Xr.jsx)(Pv,{type:"range",min:"50",max:"1000",step:"50",value:v,onChange:e=>y(parseInt(e.target.value)),disabled:r}),(0,Xr.jsxs)("span",{children:[v,"ms"]})]}),(0,Xr.jsx)(Cv,{onClick:k,disabled:r,children:"Generate New Array"}),(0,Xr.jsx)(Cv,{onClick:async()=>{if(r)return;i(!0),o(!1),f([0]);const e=t.length;let a=[...t];for(let t=1;t<e;t++){l(t),S(`Inserting element ${a[t]} into the sorted part of the array`),await j(v);let e=a[t],r=t-1;for(;r>=0&&(c(r),S(`Comparing ${e} with ${a[r]}`),await j(v),a[r]>e);)h([r,r+1]),S(`${a[r]} > ${e}, shifting ${a[r]} to the right`),await j(v),a[r+1]=a[r],n([...a]),r-=1,h([]);a[r+1]=e,S(`Placing ${e} at position ${r+1}`),n([...a]),await j(v),l(-1),c(-1),f((e=>[...e,t]))}S("Array sorted successfully!"),i(!1),o(!0)},disabled:r||a,children:r?"Sorting...":"Sort"}),(0,Xr.jsx)(Cv,{onClick:()=>{i(!1),o(!1),l(-1),c(-1),h([]),f([0]),S(""),k()},disabled:r,children:"Reset"})]}),(0,Xr.jsx)(Sv,{children:t.map(((e,t)=>(0,Xr.jsx)(kv,{height:2*e,current:t===s,comparing:t===u,shifting:d.includes(t),sorted:p.includes(t),initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.05*t},children:e},t)))}),w&&(0,Xr.jsx)(Ov,{children:w}),a&&!w&&(0,Xr.jsx)($v,{children:"Array sorted successfully!"}),(0,Xr.jsxs)(zv,{children:[(0,Xr.jsx)(Nv,{children:"Algorithm Complexity"}),(0,Xr.jsx)("p",{children:"Insertion Sort performs well for small data sets and is adaptive, meaning it is efficient for data sets that are already substantially sorted."}),(0,Xr.jsxs)(Mv,{children:[(0,Xr.jsx)("thead",{children:(0,Xr.jsxs)("tr",{children:[(0,Xr.jsx)(Lv,{children:"Time Complexity"}),(0,Xr.jsx)(Lv,{children:"Space Complexity"})]})}),(0,Xr.jsx)("tbody",{children:(0,Xr.jsxs)("tr",{children:[(0,Xr.jsxs)(Dv,{children:[(0,Xr.jsx)("div",{children:"Best Case: O(n)"}),(0,Xr.jsx)("div",{children:"Average Case: O(n\xb2)"}),(0,Xr.jsx)("div",{children:"Worst Case: O(n\xb2)"})]}),(0,Xr.jsx)(Dv,{children:"O(1)"})]})})]})]})]}):(0,Xr.jsx)(tp,{title:"Insertion Sort Implementation (Java)",code:'\npublic class InsertionSort {\n  public static void insertionSort(int[] arr) {\n    int n = arr.length;\n    \n    for (int i = 1; i < n; i++) {\n      int key = arr[i];\n      int j = i - 1;\n      \n      // Move elements of arr[0..i-1] that are greater than key\n      // to one position ahead of their current position\n      while (j >= 0 && arr[j] > key) {\n        arr[j + 1] = arr[j];\n        j = j - 1;\n      }\n      arr[j + 1] = key;\n    }\n  }\n  \n  // Driver method to test the algorithm\n  public static void main(String[] args) {\n    int[] arr = {12, 11, 13, 5, 6};\n    \n    System.out.println("Unsorted array:");\n    printArray(arr);\n    \n    insertionSort(arr);\n    \n    System.out.println("Sorted array:");\n    printArray(arr);\n  }\n  \n  // Utility method to print an array\n  static void printArray(int[] arr) {\n    for (int i = 0; i < arr.length; i++) {\n      System.out.print(arr[i] + " ");\n    }\n    System.out.println();\n  }\n}\n'})]})]})},Fv=Qr.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,_v=Qr.div`
  text-align: center;
  margin-bottom: 2rem;
`,Vv=Qr.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,Bv=Qr.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,Uv=Qr.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,Hv=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
  justify-content: center;
  align-items: flex-end;
  min-height: 200px;
`,Wv=Qr.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
  width: 100%;
`,qv=Qr.div`
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
`,Kv=Qr(Zd.div)`
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
`,Qv=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,Yv=Qr.button`
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
`,Gv=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Xv=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Jv=Qr.input`
  width: 100px;
`,Zv=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,ey=Qr.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,ty=Qr.button`
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
`,ny=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,ry=Qr.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,iy=Qr.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,ay=Qr.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,oy=Qr.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,sy=Qr.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,ly=()=>{const[t,n]=(0,e.useState)([]),[r,i]=(0,e.useState)(!1),[a,o]=(0,e.useState)(!1),[s,l]=(0,e.useState)([]),[u,c]=(0,e.useState)([]),[d,h]=(0,e.useState)([]),[p,f]=(0,e.useState)(10),[m,g]=(0,e.useState)(500),[v,y]=(0,e.useState)("visualization"),[x,b]=(0,e.useState)("");(0,e.useEffect)((()=>{w()}),[p]);const w=()=>{const e=[];for(let t=0;t<p;t++)e.push(Math.floor(100*Math.random())+5);n(e),o(!1),h([])},S=e=>new Promise((t=>setTimeout(t,e))),k=async(e,t,r,i)=>{if(t>=r)return;const a=Math.floor(t+(r-t)/2);b(`Dividing array from index ${t} to ${r} at midpoint ${a}`);const o=[...d];o[i]||(o[i]=[]);const s=e.slice(t,r+1);return o[i]=[...o[i],{array:s,left:t,right:r,label:`[${t}...${r}]`}],h(o),await S(m),await k(e,t,a,i+1),await k(e,a+1,r,i+1),await j(e,t,a,r),n([...e]),e},j=async(e,t,r,i)=>{const a=r-t+1,o=i-r,s=new Array(a),u=new Array(o);for(let n=0;n<a;n++)s[n]=e[t+n];for(let n=0;n<o;n++)u[n]=e[r+1+n];let d=0,h=0,p=t;for(b(`Merging subarrays: [${s.join(", ")}] and [${u.join(", ")}]`),await S(m);d<a&&h<o;)l([t+d,r+1+h]),b(`Comparing ${s[d]} and ${u[h]}`),await S(m),s[d]<=u[h]?(c([p]),b(`Placing ${s[d]} at position ${p}`),e[p]=s[d],d++):(c([p]),b(`Placing ${u[h]} at position ${p}`),e[p]=u[h],h++),n([...e]),p++,await S(m/2),l([]),c([]);for(;d<a;)c([p]),b(`Copying remaining element ${s[d]} to position ${p}`),e[p]=s[d],d++,p++,n([...e]),await S(m/2),c([]);for(;h<o;)c([p]),b(`Copying remaining element ${u[h]} to position ${p}`),e[p]=u[h],h++,p++,n([...e]),await S(m/2),c([]);b(`Merged subarray from index ${t} to ${i}`),await S(m)};return(0,Xr.jsxs)(Fv,{children:[(0,Xr.jsxs)(_v,{children:[(0,Xr.jsx)(Vv,{children:"Merge Sort"}),(0,Xr.jsx)(Bv,{children:"Merge Sort is an efficient, stable, comparison-based, divide and conquer sorting algorithm. It divides the input array into two halves, recursively sorts them, and then merges the sorted halves."})]}),(0,Xr.jsxs)(Uv,{children:[(0,Xr.jsxs)(ey,{children:[(0,Xr.jsx)(ty,{active:"visualization"===v,onClick:()=>y("visualization"),children:"Visualization"}),(0,Xr.jsx)(ty,{active:"code"===v,onClick:()=>y("code"),children:"Code"})]}),"visualization"===v?(0,Xr.jsxs)(Xr.Fragment,{children:[(0,Xr.jsxs)(Qv,{children:[(0,Xr.jsxs)(Xv,{children:[(0,Xr.jsx)("span",{children:"Size:"}),(0,Xr.jsx)(Jv,{type:"range",min:"4",max:"16",value:p,onChange:e=>f(parseInt(e.target.value)),disabled:r}),(0,Xr.jsx)("span",{children:p})]}),(0,Xr.jsxs)(Gv,{children:[(0,Xr.jsx)("span",{children:"Speed:"}),(0,Xr.jsx)(Jv,{type:"range",min:"100",max:"1000",step:"50",value:m,onChange:e=>g(parseInt(e.target.value)),disabled:r}),(0,Xr.jsxs)("span",{children:[m,"ms"]})]}),(0,Xr.jsx)(Yv,{onClick:w,disabled:r,children:"Generate New Array"}),(0,Xr.jsx)(Yv,{onClick:async()=>{if(r)return;i(!0),o(!1),b("Starting merge sort..."),await S(m);const e=[...t];await k(e,0,e.length-1,0),b("Array sorted successfully!"),i(!1),o(!0)},disabled:r||a,children:r?"Sorting...":"Sort"}),(0,Xr.jsx)(Yv,{onClick:()=>{i(!1),o(!1),l([]),c([]),h([]),b(""),w()},disabled:r,children:"Reset"})]}),(0,Xr.jsx)(Hv,{children:t.map(((e,t)=>(0,Xr.jsx)(Kv,{height:2*e,comparing:s.includes(t),merging:u.includes(t),sorted:a,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.05*t},children:e},t)))}),d.length>0&&(0,Xr.jsx)(Wv,{children:d.map(((e,t)=>(0,Xr.jsxs)("div",{children:[(0,Xr.jsxs)("h4",{children:["Level ",t+1]}),e.map(((e,n)=>(0,Xr.jsx)(qv,{label:e.label,children:e.array.map(((e,r)=>(0,Xr.jsx)(Kv,{height:1.5*e,sorted:!1,dividing:!0,children:e},`${t}-${n}-${r}`)))},`${t}-${n}`)))]},t)))}),x&&(0,Xr.jsx)(ny,{children:x}),a&&!x&&(0,Xr.jsx)(Zv,{children:"Array sorted successfully!"}),(0,Xr.jsxs)(ry,{children:[(0,Xr.jsx)(iy,{children:"Algorithm Complexity"}),(0,Xr.jsx)("p",{children:"Merge Sort is one of the most efficient sorting algorithms with a consistent time complexity in all cases."}),(0,Xr.jsxs)(ay,{children:[(0,Xr.jsx)("thead",{children:(0,Xr.jsxs)("tr",{children:[(0,Xr.jsx)(oy,{children:"Time Complexity"}),(0,Xr.jsx)(oy,{children:"Space Complexity"})]})}),(0,Xr.jsx)("tbody",{children:(0,Xr.jsxs)("tr",{children:[(0,Xr.jsxs)(sy,{children:[(0,Xr.jsx)("div",{children:"Best Case: O(n log n)"}),(0,Xr.jsx)("div",{children:"Average Case: O(n log n)"}),(0,Xr.jsx)("div",{children:"Worst Case: O(n log n)"})]}),(0,Xr.jsx)(sy,{children:"O(n)"})]})})]})]})]}):(0,Xr.jsx)(tp,{title:"Merge Sort Implementation (Java)",code:'\npublic class MergeSort {\n  // Merges two subarrays of arr[]\n  // First subarray is arr[l..m]\n  // Second subarray is arr[m+1..r]\n  void merge(int arr[], int l, int m, int r) {\n    // Find sizes of two subarrays to be merged\n    int n1 = m - l + 1;\n    int n2 = r - m;\n\n    // Create temp arrays\n    int L[] = new int[n1];\n    int R[] = new int[n2];\n\n    // Copy data to temp arrays\n    for (int i = 0; i < n1; ++i)\n      L[i] = arr[l + i];\n    for (int j = 0; j < n2; ++j)\n      R[j] = arr[m + 1 + j];\n\n    // Merge the temp arrays\n\n    // Initial indices of first and second subarrays\n    int i = 0, j = 0;\n\n    // Initial index of merged subarray array\n    int k = l;\n    while (i < n1 && j < n2) {\n      if (L[i] <= R[j]) {\n        arr[k] = L[i];\n        i++;\n      } else {\n        arr[k] = R[j];\n        j++;\n      }\n      k++;\n    }\n\n    // Copy remaining elements of L[] if any\n    while (i < n1) {\n      arr[k] = L[i];\n      i++;\n      k++;\n    }\n\n    // Copy remaining elements of R[] if any\n    while (j < n2) {\n      arr[k] = R[j];\n      j++;\n      k++;\n    }\n  }\n\n  // Main function that sorts arr[l..r] using merge()\n  void sort(int arr[], int l, int r) {\n    if (l < r) {\n      // Find the middle point\n      int m = l + (r - l) / 2;\n\n      // Sort first and second halves\n      sort(arr, l, m);\n      sort(arr, m + 1, r);\n\n      // Merge the sorted halves\n      merge(arr, l, m, r);\n    }\n  }\n\n  // Driver code\n  public static void main(String args[]) {\n    int arr[] = { 12, 11, 13, 5, 6, 7 };\n\n    System.out.println("Given array is:");\n    printArray(arr);\n\n    MergeSort ob = new MergeSort();\n    ob.sort(arr, 0, arr.length - 1);\n\n    System.out.println("\\nSorted array is:");\n    printArray(arr);\n  }\n\n  // A utility function to print array of size n\n  static void printArray(int arr[]) {\n    int n = arr.length;\n    for (int i = 0; i < n; ++i)\n      System.out.print(arr[i] + " ");\n    System.out.println();\n  }\n}\n'})]})]})},uy=Qr.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,cy=Qr.div`
  text-align: center;
  margin-bottom: 2rem;
`,dy=Qr.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,hy=Qr.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,py=Qr.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,fy=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
  justify-content: center;
  align-items: flex-end;
  min-height: 200px;
`,my=Qr(Zd.div)`
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
`,gy=Qr.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  font-size: 0.8rem;
  color: var(--text-secondary);
`,vy=Qr.div`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: ${e=>e.color||"#ddd"};
  color: white;
  border-radius: 4px;
  margin: 0 0.5rem;
`,yy=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,xy=Qr.button`
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
`,by=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,wy=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Sy=Qr.input`
  width: 100px;
`,ky=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,jy=Qr.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,Cy=Qr.button`
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
`,Ey=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,Ty=Qr.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,Py=Qr.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,$y=Qr.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,Ay=Qr.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,Ry=Qr.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,Oy=()=>{const[t,n]=(0,e.useState)([]),[r,i]=(0,e.useState)(!1),[a,o]=(0,e.useState)(!1),[s,l]=(0,e.useState)(-1),[u,c]=(0,e.useState)([]),[d,h]=(0,e.useState)([]),[p,f]=(0,e.useState)([]),[m,g]=(0,e.useState)([]),[v,y]=(0,e.useState)(10),[x,b]=(0,e.useState)(500),[w,S]=(0,e.useState)("visualization"),[k,j]=(0,e.useState)("");(0,e.useEffect)((()=>{C()}),[v]);const C=()=>{const e=[];for(let t=0;t<v;t++)e.push(Math.floor(100*Math.random())+5);n(e),o(!1),g([])},E=e=>new Promise((t=>setTimeout(t,e))),T=async(e,t,n)=>{if(t<n){j(`Partitioning array from index ${t} to ${n}`),f(Array.from({length:n-t+1},((e,n)=>t+n))),await E(x);const r=await P(e,t,n);g((e=>[...e,r])),f([]),j(`Sorting left sub-array (indices ${t} to ${r-1})`),await E(x),await T(e,t,r-1),j(`Sorting right sub-array (indices ${r+1} to ${n})`),await E(x),await T(e,r+1,n)}else t===n&&g((e=>[...e,t]));return e},P=async(e,t,r)=>{const i=e[r];l(r),j(`Selected pivot: ${i} at index ${r}`),await E(x);let a=t-1;for(let s=t;s<r;s++){if(c([s,r]),j(`Comparing ${e[s]} with pivot ${i}`),await E(x),e[s]<i&&(a++,a!==s)){h([a,s]),j(`Swapping ${e[a]} and ${e[s]}`),await E(x);const t=e[a];e[a]=e[s],e[s]=t,n([...e])}c([]),h([])}const o=a+1;if(o!==r){h([o,r]),j(`Placing pivot ${e[r]} at its correct position (index ${o})`),await E(x);const t=e[o];e[o]=e[r],e[r]=t,n([...e])}return h([]),l(o),j(`Pivot ${i} is now at its correct position (index ${o})`),await E(x),l(-1),o};return(0,Xr.jsxs)(uy,{children:[(0,Xr.jsxs)(cy,{children:[(0,Xr.jsx)(dy,{children:"Quick Sort"}),(0,Xr.jsx)(hy,{children:"Quick Sort is a highly efficient sorting algorithm that uses a divide-and-conquer strategy. It works by selecting a 'pivot' element and partitioning the array around the pivot, such that elements less than the pivot are on the left and elements greater than the pivot are on the right."})]}),(0,Xr.jsxs)(py,{children:[(0,Xr.jsxs)(jy,{children:[(0,Xr.jsx)(Cy,{active:"visualization"===w,onClick:()=>S("visualization"),children:"Visualization"}),(0,Xr.jsx)(Cy,{active:"code"===w,onClick:()=>S("code"),children:"Code"})]}),"visualization"===w?(0,Xr.jsxs)(Xr.Fragment,{children:[(0,Xr.jsxs)(yy,{children:[(0,Xr.jsxs)(wy,{children:[(0,Xr.jsx)("span",{children:"Size:"}),(0,Xr.jsx)(Sy,{type:"range",min:"5",max:"20",value:v,onChange:e=>y(parseInt(e.target.value)),disabled:r}),(0,Xr.jsx)("span",{children:v})]}),(0,Xr.jsxs)(by,{children:[(0,Xr.jsx)("span",{children:"Speed:"}),(0,Xr.jsx)(Sy,{type:"range",min:"100",max:"1000",step:"50",value:x,onChange:e=>b(parseInt(e.target.value)),disabled:r}),(0,Xr.jsxs)("span",{children:[x,"ms"]})]}),(0,Xr.jsx)(xy,{onClick:C,disabled:r,children:"Generate New Array"}),(0,Xr.jsx)(xy,{onClick:async()=>{if(r)return;i(!0),o(!1),g([]),j("Starting Quick Sort algorithm..."),await E(x);const e=[...t];await T(e,0,e.length-1),j("Array sorted successfully!"),i(!1),o(!0),g(Array.from(Array(t.length).keys()))},disabled:r||a,children:r?"Sorting...":"Sort"}),(0,Xr.jsx)(xy,{onClick:()=>{i(!1),o(!1),l(-1),c([]),h([]),f([]),g([]),j(""),C()},disabled:r,children:"Reset"})]}),(0,Xr.jsx)(fy,{children:t.map(((e,t)=>(0,Xr.jsx)(my,{height:2*e,pivot:t===s,comparing:u.includes(t),swapping:d.includes(t),partitioning:p.includes(t),sorted:m.includes(t),initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.05*t},children:e},t)))}),(0,Xr.jsxs)(gy,{children:[(0,Xr.jsx)(vy,{color:"#ff5722",children:"Pivot"}),(0,Xr.jsx)(vy,{color:"var(--primary)",children:"Comparing"}),(0,Xr.jsx)(vy,{color:"#9c27b0",children:"Swapping"}),(0,Xr.jsx)(vy,{color:"#2196f3",children:"Partitioning"}),(0,Xr.jsx)(vy,{color:"var(--secondary)",children:"Sorted"})]}),k&&(0,Xr.jsx)(Ey,{children:k}),a&&!k&&(0,Xr.jsx)(ky,{children:"Array sorted successfully!"}),(0,Xr.jsxs)(Ty,{children:[(0,Xr.jsx)(Py,{children:"Algorithm Complexity"}),(0,Xr.jsx)("p",{children:"Quick Sort is one of the most efficient sorting algorithms and is widely used in practice."}),(0,Xr.jsxs)($y,{children:[(0,Xr.jsx)("thead",{children:(0,Xr.jsxs)("tr",{children:[(0,Xr.jsx)(Ay,{children:"Time Complexity"}),(0,Xr.jsx)(Ay,{children:"Space Complexity"})]})}),(0,Xr.jsx)("tbody",{children:(0,Xr.jsxs)("tr",{children:[(0,Xr.jsxs)(Ry,{children:[(0,Xr.jsx)("div",{children:"Best Case: O(n log n)"}),(0,Xr.jsx)("div",{children:"Average Case: O(n log n)"}),(0,Xr.jsx)("div",{children:"Worst Case: O(n\xb2)"})]}),(0,Xr.jsx)(Ry,{children:"O(log n)"})]})})]})]})]}):(0,Xr.jsx)(tp,{title:"Quick Sort Implementation (Java)",code:'\npublic class QuickSort {\n  \n  // This function takes last element as pivot,\n  // places the pivot element at its correct position in sorted array,\n  // and places all smaller elements to left of pivot and\n  // all greater elements to right of pivot\n  int partition(int arr[], int low, int high) {\n    int pivot = arr[high]; // pivot element\n    int i = (low - 1); // index of smaller element\n    \n    for (int j = low; j < high; j++) {\n      // If current element is smaller than the pivot\n      if (arr[j] < pivot) {\n        i++;\n        \n        // swap arr[i] and arr[j]\n        int temp = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n      }\n    }\n    \n    // swap arr[i+1] and arr[high] (or pivot)\n    int temp = arr[i + 1];\n    arr[i + 1] = arr[high];\n    arr[high] = temp;\n    \n    return i + 1;\n  }\n  \n  // The main function that implements QuickSort\n  // arr[] --\x3e Array to be sorted\n  // low --\x3e Starting index\n  // high --\x3e Ending index\n  void sort(int arr[], int low, int high) {\n    if (low < high) {\n      // pi is partitioning index, arr[pi] is now at right place\n      int pi = partition(arr, low, high);\n      \n      // Recursively sort elements before partition and after partition\n      sort(arr, low, pi - 1);\n      sort(arr, pi + 1, high);\n    }\n  }\n  \n  // Driver program\n  public static void main(String args[]) {\n    int arr[] = {10, 7, 8, 9, 1, 5};\n    int n = arr.length;\n    \n    System.out.println("Unsorted array:");\n    printArray(arr);\n    \n    QuickSort ob = new QuickSort();\n    ob.sort(arr, 0, n - 1);\n    \n    System.out.println("\\nSorted array:");\n    printArray(arr);\n  }\n  \n  // A utility function to print array of size n\n  static void printArray(int arr[]) {\n    int n = arr.length;\n    for (int i = 0; i < n; ++i)\n      System.out.print(arr[i] + " ");\n    System.out.println();\n  }\n}\n'})]})]})},zy=Qr.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,Ny=Qr.div`
  text-align: center;
  margin-bottom: 2rem;
`,My=Qr.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,Ly=Qr.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,Dy=Qr.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,Iy=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
  justify-content: center;
  align-items: flex-end;
  min-height: 200px;
`,Fy=Qr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  overflow-x: auto;
  min-height: 300px;
`,_y=Qr.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
`,Vy=Qr(Zd.div)`
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
`,By=Qr(Zd.div)`
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
`,Uy=Qr.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
`,Hy=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Wy=Qr.div`
  width: 20px;
  height: 20px;
  border-radius: ${e=>e.circle?"50%":"4px 4px 0 0"};
  background: ${e=>e.color||"#ddd"};
`,qy=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,Ky=Qr.button`
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
`,Qy=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Yy=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Gy=Qr.input`
  width: 100px;
`,Xy=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,Jy=Qr.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,Zy=Qr.button`
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
`,ex=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,tx=Qr.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,nx=Qr.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,rx=Qr.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,ix=Qr.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,ax=Qr.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,ox=()=>{const[t,n]=(0,e.useState)([]),[r,i]=(0,e.useState)(!1),[a,o]=(0,e.useState)(!1),[s,l]=(0,e.useState)([]),[u,c]=(0,e.useState)([]),[d,h]=(0,e.useState)([]),[p,f]=(0,e.useState)(-1),[m,g]=(0,e.useState)([]),[v,y]=(0,e.useState)(10),[x,b]=(0,e.useState)(500),[w,S]=(0,e.useState)("visualization"),[k,j]=(0,e.useState)(""),[C,E]=(0,e.useState)(!0);(0,e.useEffect)((()=>{T()}),[v]);const T=()=>{const e=[];for(let t=0;t<v;t++)e.push(Math.floor(100*Math.random())+5);n(e),o(!1),g([]),h([])},P=e=>new Promise((t=>setTimeout(t,e))),$=async(e,t,r)=>{let i=r;const a=2*r+1,o=2*r+2;f(r),await P(x/2),a<t&&(l([i,a]),j(`Comparing ${e[i]} with its left child ${e[a]}`),await P(x/2),e[a]>e[i]?(j(`Left child ${e[a]} is larger than root ${e[i]}`),i=a):j(`Root ${e[i]} is larger than left child ${e[a]}`),l([]),await P(x/2)),o<t&&(l([i,o]),j(`Comparing ${e[i]} with its right child ${e[o]}`),await P(x/2),e[o]>e[i]?(j(`Right child ${e[o]} is larger than current largest ${e[i]}`),i=o):j(`Current largest ${e[i]} is larger than right child ${e[o]}`),l([]),await P(x/2)),i!==r?(c([r,i]),j(`${e[i]} is larger than ${e[r]}. Swapping them.`),await P(x),[e[r],e[i]]=[e[i],e[r]],n([...e]),c([]),f(-1),await $(e,t,i)):(d.includes(r)||h((e=>[...e,r])),j(`Subtree at index ${r} is already a heap`),await P(x/2)),f(-1)};return(0,Xr.jsxs)(zy,{children:[(0,Xr.jsxs)(Ny,{children:[(0,Xr.jsx)(My,{children:"Heap Sort"}),(0,Xr.jsx)(Ly,{children:"Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. It divides the input into a sorted and an unsorted region, and iteratively shrinks the unsorted region by extracting the largest element and inserting it into the sorted region."})]}),(0,Xr.jsxs)(Dy,{children:[(0,Xr.jsxs)(Jy,{children:[(0,Xr.jsx)(Zy,{active:"visualization"===w,onClick:()=>S("visualization"),children:"Visualization"}),(0,Xr.jsx)(Zy,{active:"code"===w,onClick:()=>S("code"),children:"Code"})]}),"visualization"===w?(0,Xr.jsxs)(Xr.Fragment,{children:[(0,Xr.jsxs)(qy,{children:[(0,Xr.jsxs)(Yy,{children:[(0,Xr.jsx)("span",{children:"Size:"}),(0,Xr.jsx)(Gy,{type:"range",min:"5",max:"15",value:v,onChange:e=>y(parseInt(e.target.value)),disabled:r}),(0,Xr.jsx)("span",{children:v})]}),(0,Xr.jsxs)(Qy,{children:[(0,Xr.jsx)("span",{children:"Speed:"}),(0,Xr.jsx)(Gy,{type:"range",min:"100",max:"1000",step:"50",value:x,onChange:e=>b(parseInt(e.target.value)),disabled:r}),(0,Xr.jsxs)("span",{children:[x,"ms"]})]}),(0,Xr.jsx)(Ky,{onClick:T,disabled:r,children:"Generate New Array"}),(0,Xr.jsx)(Ky,{onClick:async()=>{if(r)return;i(!0),o(!1),g([]),h([]),j("Starting Heap Sort algorithm..."),await P(x);const e=t.length,a=[...t];j("Phase 1: Building the heap (heapify from bottom up)"),await P(x);for(let t=Math.floor(e/2)-1;t>=0;t--)await $(a,e,t);h(Array.from(Array(e).keys())),j("Max heap built successfully. Root contains the largest element."),await P(x),j("Phase 2: Extracting elements from heap"),await P(x);for(let t=e-1;t>0;t--)f(0),c([0,t]),j(`Swapping root (${a[0]}) with last unsorted element (${a[t]})`),await P(x),[a[0],a[t]]=[a[t],a[0]],n([...a]),g((e=>[...e,t])),c([]),f(-1),await $(a,t,0),j(`Element ${a[t]} placed in its final sorted position`),await P(x/2);g((e=>[...e,0])),h([]),j("Array sorted successfully!"),i(!1),o(!0)},disabled:r||a,children:r?"Sorting...":"Sort"}),(0,Xr.jsx)(Ky,{onClick:()=>{i(!1),o(!1),l([]),c([]),h([]),f(-1),g([]),j(""),T()},disabled:r,children:"Reset"}),(0,Xr.jsx)(Ky,{onClick:()=>E(!C),disabled:r,children:C?"Show Heap Tree":"Show Array"})]}),(0,Xr.jsxs)(Uy,{children:[(0,Xr.jsxs)(Hy,{children:[(0,Xr.jsx)(Wy,{circle:!0,color:"#ff5722"}),(0,Xr.jsx)("span",{children:"Current Root"})]}),(0,Xr.jsxs)(Hy,{children:[(0,Xr.jsx)(Wy,{circle:!0,color:"var(--primary)"}),(0,Xr.jsx)("span",{children:"Comparing"})]}),(0,Xr.jsxs)(Hy,{children:[(0,Xr.jsx)(Wy,{circle:!0,color:"#2196f3"}),(0,Xr.jsx)("span",{children:"Swapping"})]}),(0,Xr.jsxs)(Hy,{children:[(0,Xr.jsx)(Wy,{circle:!0,color:"#9c27b0"}),(0,Xr.jsx)("span",{children:"Heapified"})]}),(0,Xr.jsxs)(Hy,{children:[(0,Xr.jsx)(Wy,{circle:!0,color:"var(--secondary)"}),(0,Xr.jsx)("span",{children:"Sorted"})]})]}),k&&(0,Xr.jsx)(ex,{children:k}),C?(0,Xr.jsx)(Iy,{children:t.map(((e,t)=>(0,Xr.jsx)(Vy,{height:2*e,root:t===p,comparing:s.includes(t),swapping:u.includes(t),heapified:d.includes(t),sorted:m.includes(t),initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.05*t},children:e},t)))}):(0,Xr.jsx)(Fy,{children:(()=>{if(0===t.length)return null;const e=Math.floor(Math.log2(t.length))+1,n=[];let r=0;for(let i=0;i<e;i++){const e=Math.min(Math.pow(2,i),t.length-Math.pow(2,i)+1),a=[];for(let n=0;n<e&&r<t.length;n++){const e=t[r],n=2*r+1<t.length,i=2*r+2<t.length;a.push((0,Xr.jsx)(By,{hasChildren:n||i,hasLeftChild:n,hasRightChild:i,root:r===p,comparing:s.includes(r),swapping:u.includes(r),heapified:d.includes(r),sorted:m.includes(r),initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.3},children:e},r)),r++}n.push((0,Xr.jsx)(_y,{style:{justifyContent:"center"},children:a},i))}return n})()}),a&&!k&&(0,Xr.jsx)(Xy,{children:"Array sorted successfully!"}),(0,Xr.jsxs)(tx,{children:[(0,Xr.jsx)(nx,{children:"Algorithm Complexity"}),(0,Xr.jsx)("p",{children:"Heap Sort is one of the most efficient sorting algorithms with good average and worst-case complexity."}),(0,Xr.jsxs)(rx,{children:[(0,Xr.jsx)("thead",{children:(0,Xr.jsxs)("tr",{children:[(0,Xr.jsx)(ix,{children:"Time Complexity"}),(0,Xr.jsx)(ix,{children:"Space Complexity"})]})}),(0,Xr.jsx)("tbody",{children:(0,Xr.jsxs)("tr",{children:[(0,Xr.jsxs)(ax,{children:[(0,Xr.jsx)("div",{children:"Best Case: O(n log n)"}),(0,Xr.jsx)("div",{children:"Average Case: O(n log n)"}),(0,Xr.jsx)("div",{children:"Worst Case: O(n log n)"})]}),(0,Xr.jsx)(ax,{children:"O(1) - In-place sorting algorithm"})]})})]}),(0,Xr.jsxs)("div",{style:{marginTop:"1rem"},children:[(0,Xr.jsx)("p",{children:"Key characteristics of Heap Sort:"}),(0,Xr.jsxs)("ul",{children:[(0,Xr.jsx)("li",{children:"Not stable (relative order of equal elements may change)"}),(0,Xr.jsx)("li",{children:"In-place (requires constant extra space)"}),(0,Xr.jsx)("li",{children:"Based on the binary heap data structure"}),(0,Xr.jsx)("li",{children:"Consists of two phases: building the heap and extracting elements"}),(0,Xr.jsx)("li",{children:"Better than Selection Sort and comparable to Merge Sort and Quick Sort"})]})]})]})]}):(0,Xr.jsx)(tp,{title:"Heap Sort Implementation (Java)",code:'\npublic class HeapSort {\n  public void sort(int arr[]) {\n    int n = arr.length;\n\n    // Build heap (rearrange array)\n    for (int i = n / 2 - 1; i >= 0; i--)\n      heapify(arr, n, i);\n\n    // One by one extract an element from heap\n    for (int i = n - 1; i > 0; i--) {\n      // Move current root to end\n      int temp = arr[0];\n      arr[0] = arr[i];\n      arr[i] = temp;\n\n      // call max heapify on the reduced heap\n      heapify(arr, i, 0);\n    }\n  }\n\n  // To heapify a subtree rooted with node i which is\n  // an index in arr[]. n is size of heap\n  void heapify(int arr[], int n, int i) {\n    int largest = i; // Initialize largest as root\n    int l = 2 * i + 1; // left = 2*i + 1\n    int r = 2 * i + 2; // right = 2*i + 2\n\n    // If left child is larger than root\n    if (l < n && arr[l] > arr[largest])\n      largest = l;\n\n    // If right child is larger than largest so far\n    if (r < n && arr[r] > arr[largest])\n      largest = r;\n\n    // If largest is not root\n    if (largest != i) {\n      int swap = arr[i];\n      arr[i] = arr[largest];\n      arr[largest] = swap;\n\n      // Recursively heapify the affected sub-tree\n      heapify(arr, n, largest);\n    }\n  }\n\n  // A utility function to print array of size n\n  static void printArray(int arr[]) {\n    int n = arr.length;\n    for (int i = 0; i < n; ++i)\n      System.out.print(arr[i] + " ");\n    System.out.println();\n  }\n\n  // Driver program\n  public static void main(String args[]) {\n    int arr[] = { 12, 11, 13, 5, 6, 7 };\n    \n    HeapSort ob = new HeapSort();\n    ob.sort(arr);\n\n    System.out.println("Sorted array is");\n    printArray(arr);\n  }\n}\n'})]})]})},sx=Qr.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,lx=Qr.div`
  text-align: center;
  margin-bottom: 2rem;
`,ux=Qr.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,cx=Qr.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,dx=Qr.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,hx=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
  justify-content: center;
`,px=Qr(Zd.div)`
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
`,fx=Qr.span`
  position: absolute;
  top: -25px;
  font-size: 0.75rem;
  color: var(--text-secondary);
`,mx=Qr.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  padding: 0 1rem;
`,gx=Qr.div`
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
`,vx=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,yx=Qr.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 80px;
`,xx=Qr.button`
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
`,bx=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,wx=Qr.input`
  width: 100px;
`,Sx=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: ${e=>e.error?"#ffebee":"#e8f5e9"};
  color: ${e=>e.error?"#d32f2f":"#2e7d32"};
  border-radius: var(--border-radius);
  text-align: center;
`,kx=Qr.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,jx=Qr.button`
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
`,Cx=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,Ex=Qr.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,Tx=Qr.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,Px=Qr.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,$x=Qr.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,Ax=Qr.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,Rx=()=>{const[t,n]=(0,e.useState)([]),[r,i]=(0,e.useState)(""),[a,o]=(0,e.useState)(!1),[s,l]=(0,e.useState)(!1),[u,c]=(0,e.useState)(-1),[d,h]=(0,e.useState)(-1),[p,f]=(0,e.useState)([]),[m,g]=(0,e.useState)(""),[v,y]=(0,e.useState)(!1),[x,b]=(0,e.useState)(-1),[w,S]=(0,e.useState)(-1),[k,j]=(0,e.useState)(-1),[C,E]=(0,e.useState)(""),[T,P]=(0,e.useState)(1e3),[$,A]=(0,e.useState)("visualization");(0,e.useEffect)((()=>{R()}),[]);const R=()=>{const e=Array.from({length:15},((e,t)=>3*t+Math.floor(3*Math.random())));n(e),O()},O=()=>{i(""),o(!1),l(!1),c(-1),h(-1),f([]),g(""),y(!1),b(-1),S(-1),j(-1),E("")},z=e=>new Promise((t=>setTimeout(t,e)));return(0,Xr.jsxs)(sx,{children:[(0,Xr.jsxs)(lx,{children:[(0,Xr.jsx)(ux,{children:"Binary Search"}),(0,Xr.jsx)(cx,{children:"Binary Search is a searching algorithm for finding an element's position in a sorted array. It works by repeatedly dividing the search interval in half."})]}),(0,Xr.jsxs)(dx,{children:[(0,Xr.jsxs)(kx,{children:[(0,Xr.jsx)(jx,{active:"visualization"===$,onClick:()=>A("visualization"),children:"Visualization"}),(0,Xr.jsx)(jx,{active:"code"===$,onClick:()=>A("code"),children:"Code"})]}),"visualization"===$?(0,Xr.jsxs)(Xr.Fragment,{children:[(0,Xr.jsxs)(vx,{children:[(0,Xr.jsxs)(bx,{children:[(0,Xr.jsx)("span",{children:"Speed:"}),(0,Xr.jsx)(wx,{type:"range",min:"500",max:"2000",step:"100",value:T,onChange:e=>P(parseInt(e.target.value)),disabled:a}),(0,Xr.jsxs)("span",{children:[T,"ms"]})]}),(0,Xr.jsx)("div",{children:(0,Xr.jsx)(yx,{type:"number",placeholder:"Search value",value:r,onChange:e=>i(e.target.value),disabled:a})}),(0,Xr.jsx)(xx,{onClick:async()=>{const e=parseInt(r);if(isNaN(e))return y(!0),void g("Please enter a valid number");y(!1),o(!0),l(!1),c(-1),g("Searching...");let n=0,i=t.length-1;for(b(n),S(i),f([...Array(t.length).keys()]),E(`Initializing search for ${e} in the array`),await z(T);n<=i;){const r=Math.floor(n+(i-n)/2);j(r),h(r);const a=[];for(let e=n;e<=i;e++)a.push(e);if(f(a),E(`Comparing ${e} with element at index ${r} (value ${t[r]})`),await z(T),t[r]===e){c(r),l(!0),g(`Found ${e} at index ${r}`),E(`Found ${e} at index ${r}!`);break}t[r]<e?(n=r+1,b(n),E(`${t[r]} < ${e}, so we move to the right half`)):(i=r-1,S(i),E(`${t[r]} > ${e}, so we move to the left half`)),await z(T),n>i&&(g(`${e} not found in the array`),y(!0),E(`${e} is not present in the array`))}o(!1)},disabled:a||""===r,children:"Search"}),(0,Xr.jsx)(xx,{onClick:R,disabled:a,children:"Generate New Array"}),(0,Xr.jsx)(xx,{onClick:O,disabled:a,children:"Reset"})]}),(0,Xr.jsxs)(mx,{children:[x>=0&&(0,Xr.jsxs)(gx,{color:"var(--primary-light)",children:[(0,Xr.jsx)("span",{children:"Left"}),(0,Xr.jsx)("div",{children:x})]}),k>=0&&(0,Xr.jsxs)(gx,{color:"var(--primary)",children:[(0,Xr.jsx)("span",{children:"Mid"}),(0,Xr.jsx)("div",{children:k})]}),w>=0&&(0,Xr.jsxs)(gx,{color:"var(--primary-light)",children:[(0,Xr.jsx)("span",{children:"Right"}),(0,Xr.jsx)("div",{children:w})]})]}),(0,Xr.jsx)(hx,{children:t.map(((e,t)=>(0,Xr.jsxs)(px,{current:t===d,found:t===u&&s,range:p.includes(t),initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.05*t},children:[(0,Xr.jsx)(fx,{children:t}),e]},t)))}),C&&(0,Xr.jsx)(Cx,{children:C}),m&&(0,Xr.jsx)(Sx,{error:v,children:m}),(0,Xr.jsxs)(Ex,{children:[(0,Xr.jsx)(Tx,{children:"Algorithm Complexity"}),(0,Xr.jsx)("p",{children:"Binary Search is much more efficient than linear search for large datasets."}),(0,Xr.jsxs)(Px,{children:[(0,Xr.jsx)("thead",{children:(0,Xr.jsxs)("tr",{children:[(0,Xr.jsx)($x,{children:"Time Complexity"}),(0,Xr.jsx)($x,{children:"Space Complexity"})]})}),(0,Xr.jsx)("tbody",{children:(0,Xr.jsxs)("tr",{children:[(0,Xr.jsxs)(Ax,{children:[(0,Xr.jsx)("div",{children:"Best Case: O(1)"}),(0,Xr.jsx)("div",{children:"Average Case: O(log n)"}),(0,Xr.jsx)("div",{children:"Worst Case: O(log n)"})]}),(0,Xr.jsx)(Ax,{children:"O(1)"})]})})]})]})]}):(0,Xr.jsx)(tp,{title:"Binary Search Implementation (Java)",code:'\npublic class BinarySearch {\n  // Returns index of x if it is present in arr[],\n  // else return -1\n  public static int binarySearch(int[] arr, int x) {\n    int left = 0, right = arr.length - 1;\n    \n    while (left <= right) {\n      int mid = left + (right - left) / 2;\n      \n      // Check if x is present at mid\n      if (arr[mid] == x)\n        return mid;\n      \n      // If x greater, ignore left half\n      if (arr[mid] < x)\n        left = mid + 1;\n      \n      // If x is smaller, ignore right half\n      else\n        right = mid - 1;\n    }\n    \n    // If we reach here, element was not present\n    return -1;\n  }\n  \n  // Driver method to test the algorithm\n  public static void main(String[] args) {\n    int[] arr = {2, 3, 4, 10, 40};\n    int x = 10;\n    \n    int result = binarySearch(arr, x);\n    \n    if (result == -1)\n      System.out.println("Element not present");\n    else\n      System.out.println("Element found at index " + result);\n  }\n}\n'})]})]})},Ox=Qr.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,zx=Qr.div`
  text-align: center;
  margin-bottom: 2rem;
`,Nx=Qr.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,Mx=Qr.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,Lx=Qr.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,Dx=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
  justify-content: center;
`,Ix=Qr(Zd.div)`
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
`,Fx=Qr.span`
  position: absolute;
  top: -25px;
  font-size: 0.75rem;
  color: var(--text-secondary);
`,_x=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,Vx=Qr.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 80px;
`,Bx=Qr.button`
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
`,Ux=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Hx=Qr.input`
  width: 100px;
`,Wx=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: ${e=>e.error?"#ffebee":"#e8f5e9"};
  color: ${e=>e.error?"#d32f2f":"#2e7d32"};
  border-radius: var(--border-radius);
  text-align: center;
`,qx=Qr.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,Kx=Qr.button`
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
`,Qx=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,Yx=Qr.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,Gx=Qr.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,Xx=Qr.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,Jx=Qr.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,Zx=Qr.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,eb=()=>{const[t,n]=(0,e.useState)([]),[r,i]=(0,e.useState)(""),[a,o]=(0,e.useState)(!1),[s,l]=(0,e.useState)(!1),[u,c]=(0,e.useState)(-1),[d,h]=(0,e.useState)(-1),[p,f]=(0,e.useState)([]),[m,g]=(0,e.useState)(""),[v,y]=(0,e.useState)(!1),[x,b]=(0,e.useState)(""),[w,S]=(0,e.useState)(500),[k,j]=(0,e.useState)("visualization");(0,e.useEffect)((()=>{C()}),[]);const C=()=>{const e=Array.from({length:15},(()=>Math.floor(100*Math.random())+1));n(e),E()},E=()=>{i(""),o(!1),l(!1),c(-1),h(-1),f([]),g(""),y(!1),b("")},T=e=>new Promise((t=>setTimeout(t,e)));return(0,Xr.jsxs)(Ox,{children:[(0,Xr.jsxs)(zx,{children:[(0,Xr.jsx)(Nx,{children:"Linear Search"}),(0,Xr.jsx)(Mx,{children:"Linear Search is the simplest search algorithm that searches for an element in a list by checking each element sequentially until a match is found or the whole list has been searched."})]}),(0,Xr.jsxs)(Lx,{children:[(0,Xr.jsxs)(qx,{children:[(0,Xr.jsx)(Kx,{active:"visualization"===k,onClick:()=>j("visualization"),children:"Visualization"}),(0,Xr.jsx)(Kx,{active:"code"===k,onClick:()=>j("code"),children:"Code"})]}),"visualization"===k?(0,Xr.jsxs)(Xr.Fragment,{children:[(0,Xr.jsxs)(_x,{children:[(0,Xr.jsxs)(Ux,{children:[(0,Xr.jsx)("span",{children:"Speed:"}),(0,Xr.jsx)(Hx,{type:"range",min:"100",max:"1000",step:"50",value:w,onChange:e=>S(parseInt(e.target.value)),disabled:a}),(0,Xr.jsxs)("span",{children:[w,"ms"]})]}),(0,Xr.jsx)("div",{children:(0,Xr.jsx)(Vx,{type:"number",placeholder:"Search value",value:r,onChange:e=>i(e.target.value),disabled:a})}),(0,Xr.jsx)(Bx,{onClick:async()=>{const e=parseInt(r);if(isNaN(e))return y(!0),void g("Please enter a valid number");y(!1),o(!0),l(!1),c(-1),f([]),g("Searching..."),b(`Starting linear search for value ${e}`);for(let n=0;n<t.length;n++){if(h(n),f((e=>[...e,n])),b(`Checking if ${t[n]} equals ${e} at index ${n}`),await T(w),t[n]===e){c(n),l(!0),g(`Found ${e} at index ${n}`),b(`Found ${e} at index ${n}!`);break}n===t.length-1&&(y(!0),g(`${e} not found in the array`),b(`${e} is not present in the array`))}o(!1),h(-1)},disabled:a||""===r,children:"Search"}),(0,Xr.jsx)(Bx,{onClick:C,disabled:a,children:"Generate New Array"}),(0,Xr.jsx)(Bx,{onClick:E,disabled:a,children:"Reset"})]}),(0,Xr.jsx)(Dx,{children:t.map(((e,t)=>(0,Xr.jsxs)(Ix,{current:t===d,found:t===u&&s,visited:p.includes(t)&&t!==d&&t!==u,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.05*t},children:[(0,Xr.jsx)(Fx,{children:t}),e]},t)))}),x&&(0,Xr.jsx)(Qx,{children:x}),m&&(0,Xr.jsx)(Wx,{error:v,children:m}),(0,Xr.jsxs)(Yx,{children:[(0,Xr.jsx)(Gx,{children:"Algorithm Complexity"}),(0,Xr.jsx)("p",{children:"Linear search is simple but inefficient for large datasets compared to other search algorithms."}),(0,Xr.jsxs)(Xx,{children:[(0,Xr.jsx)("thead",{children:(0,Xr.jsxs)("tr",{children:[(0,Xr.jsx)(Jx,{children:"Time Complexity"}),(0,Xr.jsx)(Jx,{children:"Space Complexity"})]})}),(0,Xr.jsx)("tbody",{children:(0,Xr.jsxs)("tr",{children:[(0,Xr.jsxs)(Zx,{children:[(0,Xr.jsx)("div",{children:"Best Case: O(1)"}),(0,Xr.jsx)("div",{children:"Average Case: O(n)"}),(0,Xr.jsx)("div",{children:"Worst Case: O(n)"})]}),(0,Xr.jsx)(Zx,{children:"O(1)"})]})})]})]})]}):(0,Xr.jsx)(tp,{title:"Linear Search Implementation (Java)",code:'\npublic class LinearSearch {\n  // Returns index of x if it is present in arr[],\n  // else return -1\n  public static int linearSearch(int[] arr, int x) {\n    // Time complexity: O(n)\n    for (int i = 0; i < arr.length; i++) {\n      if (arr[i] == x) {\n        return i; // Element found, return index\n      }\n    }\n    \n    // Element not found\n    return -1;\n  }\n  \n  // Driver method to test the algorithm\n  public static void main(String[] args) {\n    int[] arr = {10, 20, 80, 30, 60, 50, 110, 100, 130, 170};\n    int x = 110;\n    \n    int result = linearSearch(arr, x);\n    \n    if (result == -1)\n      System.out.println("Element not present in array");\n    else\n      System.out.println("Element found at index " + result);\n  }\n}\n'})]})]})},tb=Qr.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,nb=Qr.div`
  text-align: center;
  margin-bottom: 2rem;
`,rb=Qr.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,ib=Qr.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,ab=Qr.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,ob=Qr.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin: 2rem 0;
  border: 1px solid #eee;
  border-radius: var(--border-radius);
  overflow: hidden;
`,sb=Qr(Zd.div)`
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
`,lb=Qr.div`
  position: absolute;
  background: ${e=>e.visited?"var(--secondary)":"#ddd"};
  transform-origin: 0 0;
  height: 2px;
  z-index: 1;
`,ub=Qr.div`
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: var(--border-radius);
  overflow-x: auto;
`,cb=Qr.div`
  padding: 0.5rem 1rem;
  background: ${e=>e.current?"var(--primary)":"#ff9800"};
  color: white;
  border-radius: var(--border-radius);
  min-width: 40px;
  text-align: center;
  font-weight: 600;
`,db=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,hb=Qr.button`
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
`,pb=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,fb=Qr.input`
  width: 100px;
`,mb=Qr.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 60px;
`,gb=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,vb=Qr.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,yb=Qr.button`
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
`,xb=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,bb=Qr.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,wb=Qr.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,Sb=Qr.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,kb=Qr.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,jb=Qr.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,Cb=Qr.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
`,Eb=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Tb=Qr.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${e=>e.color||"#ddd"};
`,Pb=()=>{const[t,n]=(0,e.useState)([]),[r,i]=(0,e.useState)([]),[a,o]=(0,e.useState)(null),[s,l]=(0,e.useState)([]),[u,c]=(0,e.useState)([]),[d,h]=(0,e.useState)(null),[p,f]=(0,e.useState)(!1),[m,g]=(0,e.useState)(!1),[v,y]=(0,e.useState)(null),[x,b]=(0,e.useState)([]),[w,S]=(0,e.useState)(500),[k,j]=(0,e.useState)(8),[C,E]=(0,e.useState)("visualization"),[T,P]=(0,e.useState)(""),$=(0,e.useRef)(null);(0,e.useEffect)((()=>{R()}),[k]);const A=e=>new Promise((t=>setTimeout(t,e))),R=()=>{const e=$.current?$.current.offsetWidth:800,t=$.current?$.current.offsetHeight:400,r=[];for(let n=0;n<k;n++){const i=60;r.push({id:n,x:Math.random()*(e-2*i)+i,y:Math.random()*(t-2*i)+i})}const a=[];for(let n=0;n<k;n++){const e=Math.floor(3*Math.random())+1,t=new Set;for(let r=0;r<e;r++){let e;do{e=Math.floor(Math.random()*k)}while(e===n||t.has(e));t.add(e),a.push({id:`${n}-${e}`,source:n,target:e})}}n(r),i(a),l([]),c([]),h(null),b([]),o(null),y(null),g(!1),P("")};return(0,Xr.jsxs)(tb,{children:[(0,Xr.jsxs)(nb,{children:[(0,Xr.jsx)(rb,{children:"Breadth First Search (BFS)"}),(0,Xr.jsx)(ib,{children:"Breadth First Search is a graph traversal algorithm that explores all the vertices of a graph at the present depth prior to moving on to vertices at the next depth level. It uses a queue data structure for traversal."})]}),(0,Xr.jsxs)(ab,{children:[(0,Xr.jsxs)(vb,{children:[(0,Xr.jsx)(yb,{active:"visualization"===C,onClick:()=>E("visualization"),children:"Visualization"}),(0,Xr.jsx)(yb,{active:"code"===C,onClick:()=>E("code"),children:"Code"})]}),"visualization"===C?(0,Xr.jsxs)(Xr.Fragment,{children:[(0,Xr.jsxs)(db,{children:[(0,Xr.jsxs)("div",{children:[(0,Xr.jsx)("label",{children:"Nodes: "}),(0,Xr.jsx)(mb,{type:"number",min:"4",max:"15",value:k,onChange:e=>j(parseInt(e.target.value)),disabled:p})]}),(0,Xr.jsxs)(pb,{children:[(0,Xr.jsx)("span",{children:"Speed:"}),(0,Xr.jsx)(fb,{type:"range",min:"100",max:"1000",step:"50",value:w,onChange:e=>S(parseInt(e.target.value)),disabled:p}),(0,Xr.jsxs)("span",{children:[w,"ms"]})]}),(0,Xr.jsx)(hb,{onClick:R,disabled:p,children:"Generate New Graph"}),(0,Xr.jsx)(hb,{onClick:async()=>{if(!a||p)return;f(!0),g(!1),l([]),c([]),h(null),b([]);const e=new Set,t=[a];for(e.add(a),c([a]),P(`Starting BFS from node ${a}`),await A(w);t.length>0;){const n=t.shift();h(n),c(t.slice()),P(`Processing node ${n}`),await A(w);const i=r.filter((e=>e.source===n)).map((e=>e.target));for(const r of i){const i=`${n}-${r}`;e.has(r)?(P(`Neighbor ${r} already visited, skipping`),await A(w/2)):(e.add(r),t.push(r),c([...t]),b((e=>[...e,i])),P(`Found unvisited neighbor: ${r}, adding to queue`),await A(w))}l(Array.from(e)),P(`Completed processing node ${n}`),await A(w)}h(null),P("BFS traversal complete!"),g(!0),f(!1)},disabled:p||null===a,children:p?"Searching...":"Start BFS"}),(0,Xr.jsx)(hb,{onClick:()=>{l([]),c([]),h(null),b([]),g(!1),P("")},disabled:p||0===s.length&&0===u.length,children:"Reset"})]}),(0,Xr.jsxs)(Cb,{children:[(0,Xr.jsxs)(Eb,{children:[(0,Xr.jsx)(Tb,{color:"#4caf50"}),(0,Xr.jsx)("span",{children:"Start Node"})]}),(0,Xr.jsxs)(Eb,{children:[(0,Xr.jsx)(Tb,{color:"var(--primary)"}),(0,Xr.jsx)("span",{children:"Current Node"})]}),(0,Xr.jsxs)(Eb,{children:[(0,Xr.jsx)(Tb,{color:"#ff9800"}),(0,Xr.jsx)("span",{children:"In Queue"})]}),(0,Xr.jsxs)(Eb,{children:[(0,Xr.jsx)(Tb,{color:"var(--secondary)"}),(0,Xr.jsx)("span",{children:"Visited"})]}),(0,Xr.jsxs)(Eb,{children:[(0,Xr.jsx)(Tb,{color:"#f0f0f0"}),(0,Xr.jsx)("span",{children:"Unvisited"})]})]}),null===a&&!p&&(0,Xr.jsx)(gb,{children:"Select a starting node by clicking on it"}),(0,Xr.jsx)(xb,{children:T||"Click on a node to select it as the starting point for BFS"}),(0,Xr.jsxs)(ob,{ref:$,children:[r.map((e=>{const n=t.find((t=>t.id===e.source)),r=t.find((t=>t.id===e.target));if(!n||!r)return null;const i=r.x-n.x,a=r.y-n.y,o=Math.atan2(a,i)*(180/Math.PI),s=Math.sqrt(i*i+a*a);return(0,Xr.jsx)(lb,{style:{top:`${n.y}px`,left:`${n.x}px`,width:`${s}px`,transform:`rotate(${o}deg)`},visited:x.includes(e.id)},e.id)})),t.map((e=>(0,Xr.jsx)(sb,{style:{top:`${e.y}px`,left:`${e.x}px`},start:e.id===a,current:e.id===d,visited:s.includes(e.id),inQueue:u.includes(e.id),onClick:()=>{return t=e.id,void(p||(a===t?(o(null),y(null)):(o(t),y(t))));var t},whileHover:{scale:1.1},whileTap:{scale:.9},children:e.id},e.id)))]}),(0,Xr.jsxs)("div",{children:[(0,Xr.jsx)("h3",{children:"Queue:"}),(0,Xr.jsx)(ub,{children:u.length>0?u.map(((e,t)=>(0,Xr.jsx)(cb,{current:0===t,children:e},`queue-${e}-${t}`))):(0,Xr.jsx)("div",{children:"Queue is empty"})})]}),m&&(0,Xr.jsxs)(gb,{children:["BFS traversal complete! Visited nodes: ",s.join(" \u2192 ")]}),(0,Xr.jsxs)(bb,{children:[(0,Xr.jsx)(wb,{children:"Algorithm Complexity"}),(0,Xr.jsx)("p",{children:"Breadth First Search traverses the graph level by level, making it ideal for finding the shortest path in unweighted graphs."}),(0,Xr.jsxs)(Sb,{children:[(0,Xr.jsx)("thead",{children:(0,Xr.jsxs)("tr",{children:[(0,Xr.jsx)(kb,{children:"Time Complexity"}),(0,Xr.jsx)(kb,{children:"Space Complexity"})]})}),(0,Xr.jsx)("tbody",{children:(0,Xr.jsxs)("tr",{children:[(0,Xr.jsxs)(jb,{children:[(0,Xr.jsx)("div",{children:"O(V + E)"}),(0,Xr.jsx)("div",{children:"where V is the number of vertices and E is the number of edges"})]}),(0,Xr.jsx)(jb,{children:"O(V)"})]})})]})]})]}):(0,Xr.jsx)(tp,{title:"Breadth First Search Implementation (Java)",code:'\nimport java.util.*;\n\npublic class BreadthFirstSearch {\n  private int V; // No. of vertices\n  private LinkedList<Integer>[] adj; // Adjacency Lists\n  \n  // Constructor\n  BreadthFirstSearch(int v) {\n    V = v;\n    adj = new LinkedList[v];\n    for (int i = 0; i < v; ++i)\n      adj[i] = new LinkedList();\n  }\n  \n  // Function to add an edge into the graph\n  void addEdge(int v, int w) {\n    adj[v].add(w);\n  }\n  \n  // Prints BFS traversal from a given source s\n  void BFS(int s) {\n    // Mark all the vertices as not visited (By default set as false)\n    boolean visited[] = new boolean[V];\n    \n    // Create a queue for BFS\n    LinkedList<Integer> queue = new LinkedList<Integer>();\n    \n    // Mark the current node as visited and enqueue it\n    visited[s] = true;\n    queue.add(s);\n    \n    while (queue.size() != 0) {\n      // Dequeue a vertex from queue and print it\n      s = queue.poll();\n      System.out.print(s + " ");\n      \n      // Get all adjacent vertices of the dequeued vertex s\n      // If an adjacent has not been visited, then mark it visited\n      // and enqueue it\n      Iterator<Integer> i = adj[s].listIterator();\n      while (i.hasNext()) {\n        int n = i.next();\n        if (!visited[n]) {\n          visited[n] = true;\n          queue.add(n);\n        }\n      }\n    }\n  }\n  \n  // Driver method to test above functions\n  public static void main(String args[]) {\n    BreadthFirstSearch g = new BreadthFirstSearch(4);\n    \n    g.addEdge(0, 1);\n    g.addEdge(0, 2);\n    g.addEdge(1, 2);\n    g.addEdge(2, 0);\n    g.addEdge(2, 3);\n    g.addEdge(3, 3);\n    \n    System.out.println("Breadth First Traversal (starting from vertex 2):");\n    g.BFS(2);\n  }\n}\n'})]})]})},$b=Qr.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,Ab=Qr.div`
  text-align: center;
  margin-bottom: 2rem;
`,Rb=Qr.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,Ob=Qr.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,zb=Qr.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,Nb=Qr.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin: 2rem 0;
  border: 1px solid #eee;
  border-radius: var(--border-radius);
  overflow: hidden;
`,Mb=Qr(Zd.div)`
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
`,Lb=Qr.div`
  position: absolute;
  background: ${e=>e.visited?"var(--secondary)":"#ddd"};
  transform-origin: 0 0;
  height: 2px;
  z-index: 1;
`,Db=Qr.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 0.25rem;
  margin: 1rem 0;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: var(--border-radius);
  max-height: 200px;
  overflow-y: auto;
`,Ib=Qr.div`
  padding: 0.5rem 1rem;
  background: ${e=>e.current?"var(--primary)":"#ff9800"};
  color: white;
  border-radius: var(--border-radius);
  text-align: center;
  font-weight: 600;
  width: 100px;
  margin: 0 auto;
`,Fb=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,_b=Qr.button`
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
`,Vb=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Bb=Qr.input`
  width: 100px;
`,Ub=Qr.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 60px;
`,Hb=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,Wb=Qr.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,qb=Qr.button`
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
`,Kb=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,Qb=Qr.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,Yb=Qr.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,Gb=Qr.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,Xb=Qr.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,Jb=Qr.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,Zb=Qr.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
`,ew=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,tw=Qr.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${e=>e.color||"#ddd"};
`,nw=()=>{const[t,n]=(0,e.useState)([]),[r,i]=(0,e.useState)([]),[a,o]=(0,e.useState)(null),[s,l]=(0,e.useState)([]),[u,c]=(0,e.useState)([]),[d,h]=(0,e.useState)(null),[p,f]=(0,e.useState)(!1),[m,g]=(0,e.useState)(!1),[v,y]=(0,e.useState)(null),[x,b]=(0,e.useState)([]),[w,S]=(0,e.useState)(500),[k,j]=(0,e.useState)(8),[C,E]=(0,e.useState)("visualization"),[T,P]=(0,e.useState)(""),[$,A]=(0,e.useState)([]),R=(0,e.useRef)(null);(0,e.useEffect)((()=>{z()}),[k]);const O=e=>new Promise((t=>setTimeout(t,e))),z=()=>{const e=R.current?R.current.offsetWidth:800,t=R.current?R.current.offsetHeight:400,r=[];for(let n=0;n<k;n++){const i=60;r.push({id:n,x:Math.random()*(e-2*i)+i,y:Math.random()*(t-2*i)+i})}const a=[];for(let n=0;n<k;n++){const e=Math.floor(3*Math.random())+1,t=new Set;for(let r=0;r<e;r++){let e;do{e=Math.floor(Math.random()*k)}while(e===n||t.has(e));t.add(e),a.push({id:`${n}-${e}`,source:n,target:e})}}n(r),i(a),l([]),c([]),h(null),b([]),o(null),y(null),g(!1),P(""),A([])};return(0,Xr.jsxs)($b,{children:[(0,Xr.jsxs)(Ab,{children:[(0,Xr.jsx)(Rb,{children:"Depth First Search (DFS)"}),(0,Xr.jsx)(Ob,{children:"Depth First Search is a graph traversal algorithm that explores as far as possible along each branch before backtracking. It uses a stack data structure (or recursion) for traversal."})]}),(0,Xr.jsxs)(zb,{children:[(0,Xr.jsxs)(Wb,{children:[(0,Xr.jsx)(qb,{active:"visualization"===C,onClick:()=>E("visualization"),children:"Visualization"}),(0,Xr.jsx)(qb,{active:"code"===C,onClick:()=>E("code"),children:"Code"})]}),"visualization"===C?(0,Xr.jsxs)(Xr.Fragment,{children:[(0,Xr.jsxs)(Fb,{children:[(0,Xr.jsxs)("div",{children:[(0,Xr.jsx)("label",{children:"Nodes: "}),(0,Xr.jsx)(Ub,{type:"number",min:"4",max:"15",value:k,onChange:e=>j(parseInt(e.target.value)),disabled:p})]}),(0,Xr.jsxs)(Vb,{children:[(0,Xr.jsx)("span",{children:"Speed:"}),(0,Xr.jsx)(Bb,{type:"range",min:"100",max:"1000",step:"50",value:w,onChange:e=>S(parseInt(e.target.value)),disabled:p}),(0,Xr.jsxs)("span",{children:[w,"ms"]})]}),(0,Xr.jsx)(_b,{onClick:z,disabled:p,children:"Generate New Graph"}),(0,Xr.jsx)(_b,{onClick:async()=>{if(!a||p)return;f(!0),g(!1),l([]),c([]),h(null),b([]),A([]);const e=new Set,t=[a],n=[];for(c([a]),P(`Starting DFS from node ${a}`),await O(w);t.length>0;){const i=t.pop();if(c([...t]),h(i),e.has(i)){P(`Node ${i} already visited, backtracking`),await O(w/2),h(null);continue}n.push(i),e.add(i),l(Array.from(e)),A([...n]),P(`Visiting node ${i}`),await O(w);const a=r.filter((e=>e.source===i)).map((e=>e.target));a.sort(((e,t)=>t-e));for(const n of a){const r=`${i}-${n}`;e.has(n)?(P(`Neighbor ${n} already visited, skipping`),await O(w/2)):(t.push(n),c([...t]),b((e=>[...e,r])),P(`Found unvisited neighbor: ${n}, pushing to stack`),await O(w))}h(null)}P("DFS traversal complete!"),g(!0),f(!1)},disabled:p||null===a,children:p?"Searching...":"Start DFS"}),(0,Xr.jsx)(_b,{onClick:()=>{l([]),c([]),h(null),b([]),g(!1),P(""),A([])},disabled:p||0===s.length&&0===u.length,children:"Reset"})]}),(0,Xr.jsxs)(Zb,{children:[(0,Xr.jsxs)(ew,{children:[(0,Xr.jsx)(tw,{color:"#4caf50"}),(0,Xr.jsx)("span",{children:"Start Node"})]}),(0,Xr.jsxs)(ew,{children:[(0,Xr.jsx)(tw,{color:"var(--primary)"}),(0,Xr.jsx)("span",{children:"Current Node"})]}),(0,Xr.jsxs)(ew,{children:[(0,Xr.jsx)(tw,{color:"#ff9800"}),(0,Xr.jsx)("span",{children:"In Stack"})]}),(0,Xr.jsxs)(ew,{children:[(0,Xr.jsx)(tw,{color:"var(--secondary)"}),(0,Xr.jsx)("span",{children:"Visited"})]}),(0,Xr.jsxs)(ew,{children:[(0,Xr.jsx)(tw,{color:"#f0f0f0"}),(0,Xr.jsx)("span",{children:"Unvisited"})]})]}),null===a&&!p&&(0,Xr.jsx)(Hb,{children:"Select a starting node by clicking on it"}),(0,Xr.jsx)(Kb,{children:T||"Click on a node to select it as the starting point for DFS"}),(0,Xr.jsxs)("div",{style:{display:"flex",gap:"1rem"},children:[(0,Xr.jsx)("div",{style:{flex:3},children:(0,Xr.jsxs)(Nb,{ref:R,children:[r.map((e=>{const n=t.find((t=>t.id===e.source)),r=t.find((t=>t.id===e.target));if(!n||!r)return null;const i=r.x-n.x,a=r.y-n.y,o=Math.atan2(a,i)*(180/Math.PI),s=Math.sqrt(i*i+a*a);return(0,Xr.jsx)(Lb,{style:{top:`${n.y}px`,left:`${n.x}px`,width:`${s}px`,transform:`rotate(${o}deg)`},visited:x.includes(e.id)},e.id)})),t.map((e=>(0,Xr.jsx)(Mb,{style:{top:`${e.y}px`,left:`${e.x}px`},start:e.id===a,current:e.id===d,visited:s.includes(e.id),inStack:u.includes(e.id),onClick:()=>{return t=e.id,void(p||(a===t?(o(null),y(null)):(o(t),y(t))));var t},whileHover:{scale:1.1},whileTap:{scale:.9},children:e.id},e.id)))]})}),(0,Xr.jsxs)("div",{style:{flex:1},children:[(0,Xr.jsx)("h3",{children:"Stack:"}),(0,Xr.jsx)(Db,{children:u.length>0?u.map(((e,t)=>(0,Xr.jsx)(Ib,{current:t===u.length-1,children:e},`stack-${e}-${t}`))):(0,Xr.jsx)("div",{children:"Stack is empty"})})]})]}),m&&(0,Xr.jsxs)(Hb,{children:["DFS traversal complete! Visit order: ",$.join(" \u2192 ")]}),(0,Xr.jsxs)(Qb,{children:[(0,Xr.jsx)(Yb,{children:"Algorithm Complexity"}),(0,Xr.jsx)("p",{children:"Depth First Search explores the graph by going as deep as possible before backtracking, making it useful for problems like topological sorting and detecting cycles."}),(0,Xr.jsxs)(Gb,{children:[(0,Xr.jsx)("thead",{children:(0,Xr.jsxs)("tr",{children:[(0,Xr.jsx)(Xb,{children:"Time Complexity"}),(0,Xr.jsx)(Xb,{children:"Space Complexity"})]})}),(0,Xr.jsx)("tbody",{children:(0,Xr.jsxs)("tr",{children:[(0,Xr.jsxs)(Jb,{children:[(0,Xr.jsx)("div",{children:"O(V + E)"}),(0,Xr.jsx)("div",{children:"where V is the number of vertices and E is the number of edges"})]}),(0,Xr.jsx)(Jb,{children:"O(V)"})]})})]})]})]}):(0,Xr.jsx)(tp,{title:"Depth First Search Implementation (Java)",code:'\nimport java.util.*;\n\npublic class DepthFirstSearch {\n  private int V; // No. of vertices\n  private LinkedList<Integer>[] adj; // Adjacency Lists\n  \n  // Constructor\n  DepthFirstSearch(int v) {\n    V = v;\n    adj = new LinkedList[v];\n    for (int i = 0; i < v; ++i)\n      adj[i] = new LinkedList();\n  }\n  \n  // Function to add an edge into the graph\n  void addEdge(int v, int w) {\n    adj[v].add(w);\n  }\n  \n  // A recursive function used by DFS\n  void DFSUtil(int v, boolean visited[]) {\n    // Mark the current node as visited and print it\n    visited[v] = true;\n    System.out.print(v + " ");\n    \n    // Recur for all the vertices adjacent to this vertex\n    Iterator<Integer> i = adj[v].listIterator();\n    while (i.hasNext()) {\n      int n = i.next();\n      if (!visited[n])\n        DFSUtil(n, visited);\n    }\n  }\n  \n  // The function to do DFS traversal. It uses recursive DFSUtil()\n  void DFS(int v) {\n    // Mark all the vertices as not visited (set as false by default)\n    boolean visited[] = new boolean[V];\n    \n    // Call the recursive helper function to print DFS traversal\n    DFSUtil(v, visited);\n  }\n  \n  // An iterative version of DFS using Stack\n  void iterativeDFS(int s) {\n    // Mark all the vertices as not visited (set as false by default)\n    boolean visited[] = new boolean[V];\n    \n    // Create a stack for DFS\n    Stack<Integer> stack = new Stack<>();\n    \n    // Push the current source node\n    stack.push(s);\n    \n    while (!stack.empty()) {\n      // Pop a vertex from stack and print it\n      s = stack.pop();\n      \n      // Stack may contain same vertex twice. So we need to check if the vertex is already visited.\n      if (!visited[s]) {\n        System.out.print(s + " ");\n        visited[s] = true;\n      }\n      \n      // Get all adjacent vertices of the popped vertex s\n      // If an adjacent has not been visited, then push it to the stack\n      Iterator<Integer> i = adj[s].listIterator();\n      while (i.hasNext()) {\n        int v = i.next();\n        if (!visited[v])\n          stack.push(v);\n      }\n    }\n  }\n  \n  // Driver code\n  public static void main(String args[]) {\n    DepthFirstSearch g = new DepthFirstSearch(4);\n    \n    g.addEdge(0, 1);\n    g.addEdge(0, 2);\n    g.addEdge(1, 2);\n    g.addEdge(2, 0);\n    g.addEdge(2, 3);\n    g.addEdge(3, 3);\n    \n    System.out.println("Depth First Traversal (starting from vertex 2):");\n    g.DFS(2);\n    \n    System.out.println("\\nIterative Depth First Traversal (starting from vertex 2):");\n    g.iterativeDFS(2);\n  }\n}\n'})]})]})},rw=Qr.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,iw=Qr.div`
  text-align: center;
  margin-bottom: 2rem;
`,aw=Qr.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,ow=Qr.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,sw=Qr.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,lw=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
  justify-content: center;
  position: relative;
`,uw=Qr(Zd.div)`
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
`,cw=Qr(Zd.div)`
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
`,dw=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,hw=Qr.button`
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
`,pw=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,fw=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,mw=Qr.input`
  width: 100px;
`,gw=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,vw=Qr.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 60px;
`,yw=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,xw=Qr.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,bw=Qr.button`
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
`,ww=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,Sw=Qr.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,kw=Qr.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,jw=Qr.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,Cw=Qr.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,Ew=Qr.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,Tw=Qr.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
`,Pw=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,$w=Qr.div`
  width: 20px;
  height: 20px;
  border-radius: var(--border-radius);
  background: ${e=>e.color||"#ddd"};
`,Aw=Qr(Zd.div)`
  position: absolute;
  height: 2px;
  background: #ff9800;
  top: 25px;
  z-index: 1;
`,Rw=()=>{const[t,n]=(0,e.useState)([]),[r,i]=(0,e.useState)(""),[a,o]=(0,e.useState)(!1),[s,l]=(0,e.useState)(!1),[u,c]=(0,e.useState)(!1),[d,h]=(0,e.useState)(-1),[p,f]=(0,e.useState)(-1),[m,g]=(0,e.useState)([]),[v,y]=(0,e.useState)(0),[x,b]=(0,e.useState)([]),[w,S]=(0,e.useState)(""),[k,j]=(0,e.useState)(16),[C,E]=(0,e.useState)(500),[T,P]=(0,e.useState)("visualization"),[$,A]=(0,e.useState)("");(0,e.useEffect)((()=>{R()}),[k]);const R=()=>{const e=[];let t=Math.floor(5*Math.random());for(let n=0;n<k;n++)e.push(t),t+=Math.floor(10*Math.random())+1;n(e),l(!1),c(!1),g([]),h(-1),f(-1),b([]),y(Math.floor(Math.sqrt(e.length))),A("")},O=e=>new Promise((t=>setTimeout(t,e))),z=e=>58*e+25;return(0,Xr.jsxs)(rw,{children:[(0,Xr.jsxs)(iw,{children:[(0,Xr.jsx)(aw,{children:"Jump Search"}),(0,Xr.jsx)(ow,{children:"Jump Search is a searching algorithm for sorted arrays that works by checking fewer elements than linear search by jumping ahead by fixed steps and then performing a linear search within a smaller range."})]}),(0,Xr.jsxs)(sw,{children:[(0,Xr.jsxs)(xw,{children:[(0,Xr.jsx)(bw,{active:"visualization"===T,onClick:()=>P("visualization"),children:"Visualization"}),(0,Xr.jsx)(bw,{active:"code"===T,onClick:()=>P("code"),children:"Code"})]}),"visualization"===T?(0,Xr.jsxs)(Xr.Fragment,{children:[(0,Xr.jsxs)(dw,{children:[(0,Xr.jsxs)(fw,{children:[(0,Xr.jsx)("span",{children:"Size:"}),(0,Xr.jsx)(mw,{type:"range",min:"8",max:"20",value:k,onChange:e=>j(parseInt(e.target.value)),disabled:a}),(0,Xr.jsx)("span",{children:k})]}),(0,Xr.jsxs)(pw,{children:[(0,Xr.jsx)("span",{children:"Speed:"}),(0,Xr.jsx)(mw,{type:"range",min:"100",max:"1000",step:"50",value:C,onChange:e=>E(parseInt(e.target.value)),disabled:a}),(0,Xr.jsxs)("span",{children:[C,"ms"]})]}),(0,Xr.jsxs)(gw,{children:[(0,Xr.jsx)("span",{children:"Target:"}),(0,Xr.jsx)(vw,{type:"number",value:r,onChange:e=>i(e.target.value),disabled:a})]}),(0,Xr.jsx)(hw,{onClick:R,disabled:a,children:"Generate New Array"}),(0,Xr.jsx)(hw,{onClick:async()=>{if(a||!r)return;const e=parseInt(r);if(isNaN(e))return void S("Please enter a valid number");o(!0),l(!1),c(!1),g([]),h(-1),f(-1),b([]),S("");const n=Math.floor(Math.sqrt(t.length));y(n),A(`Starting Jump Search with block size ${n}`),await O(C);let i=0,s=Math.min(n,t.length)-1;for(h(s),f(i),b([i,s]),A(`Jumping to index ${s} and comparing with target ${e}`),await O(C),g([...m,s]);t[s]<e;){if(i=s+1,s=Math.min(i+n-1,t.length-1),i>=t.length)return A(`Reached end of array, target ${e} not found`),l(!0),void o(!1);f(i),h(s),b([i,s]),A(`Jumping to index ${s} and comparing with target ${e}`),await O(C),g([...m,s])}for(A(`Found block that may contain target: indices ${i} to ${s}`),await O(C),h(i),A(`Starting linear search from index ${i}`),await O(C);i<=s;){if(h(i),g([...m,i]),A(`Checking index ${i}: ${t[i]} vs target ${e}`),await O(C),t[i]===e)return A(`Found target ${e} at index ${i}!`),c(!0),l(!0),void o(!1);if(t[i]>e)return A(`Array[${i}] = ${t[i]} > ${e}, target not found`),l(!0),void o(!1);i++}A(`Target ${e} not found in the array`),l(!0),o(!1)},disabled:a||!r,children:a?"Searching...":"Search"}),(0,Xr.jsx)(hw,{onClick:()=>{o(!1),l(!1),c(!1),g([]),h(-1),f(-1),b([]),i(""),A("")},disabled:a,children:"Reset"})]}),(0,Xr.jsxs)(Tw,{children:[(0,Xr.jsxs)(Pw,{children:[(0,Xr.jsx)($w,{color:"var(--primary)"}),(0,Xr.jsx)("span",{children:"Current Element"})]}),(0,Xr.jsxs)(Pw,{children:[(0,Xr.jsx)($w,{color:"#ff9800"}),(0,Xr.jsx)("span",{children:"Block Start"})]}),(0,Xr.jsxs)(Pw,{children:[(0,Xr.jsx)($w,{color:"#e0e0e0"}),(0,Xr.jsx)("span",{children:"Visited"})]}),(0,Xr.jsxs)(Pw,{children:[(0,Xr.jsx)($w,{color:"var(--secondary)"}),(0,Xr.jsx)("span",{children:"Target Found"})]})]}),$&&(0,Xr.jsx)(ww,{children:$}),(0,Xr.jsx)("div",{style:{marginTop:"1rem",textAlign:"center"},children:(0,Xr.jsxs)("p",{children:["Jump Size: \u221an = \u221a",t.length," \u2248 ",v]})}),(0,Xr.jsxs)(lw,{style:{paddingTop:"40px",paddingBottom:"30px"},children:[2===x.length&&(0,Xr.jsxs)(Xr.Fragment,{children:[(0,Xr.jsx)(cw,{position:z(x[0]),initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:"Start Block"}),(0,Xr.jsx)(Aw,{style:{left:z(x[0]),width:z(x[1])-z(x[0])},initial:{scaleX:0},animate:{scaleX:1},transition:{duration:.4}})]}),t.map(((e,t)=>(0,Xr.jsx)(uw,{index:t,current:t===d,blockStart:t===p,visited:m.includes(t),target:u&&t===d,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.03*t},children:e},t)))]}),s&&(0,Xr.jsx)(yw,{children:u?(0,Xr.jsxs)("div",{children:["Target ",r," found at index ",d,"!"]}):(0,Xr.jsxs)("div",{children:["Target ",r," not found in the array."]})}),(0,Xr.jsxs)(Sw,{children:[(0,Xr.jsx)(kw,{children:"Algorithm Complexity"}),(0,Xr.jsx)("p",{children:"Jump Search is faster than Linear Search but slower than Binary Search."}),(0,Xr.jsxs)(jw,{children:[(0,Xr.jsx)("thead",{children:(0,Xr.jsxs)("tr",{children:[(0,Xr.jsx)(Cw,{children:"Time Complexity"}),(0,Xr.jsx)(Cw,{children:"Space Complexity"})]})}),(0,Xr.jsx)("tbody",{children:(0,Xr.jsxs)("tr",{children:[(0,Xr.jsxs)(Ew,{children:[(0,Xr.jsx)("div",{children:"Best Case: O(1) \u2014 if the first element checked is the target"}),(0,Xr.jsx)("div",{children:"Average and Worst Case: O(\u221an) \u2014 where n is the length of the array"})]}),(0,Xr.jsx)(Ew,{children:"O(1) \u2014 constant space requirement"})]})})]}),(0,Xr.jsxs)("div",{style:{marginTop:"1rem"},children:[(0,Xr.jsx)("p",{children:"The optimal jump step size is \u221an for a sorted array of size n."}),(0,Xr.jsx)("p",{children:"Jump Search is useful when:"}),(0,Xr.jsxs)("ul",{children:[(0,Xr.jsx)("li",{children:"Searching in sorted arrays"}),(0,Xr.jsx)("li",{children:"The array is large and the element being searched is somewhere near the beginning"}),(0,Xr.jsx)("li",{children:"Jumping back is costly compared to sequential access (e.g., on magnetic tapes)"})]})]})]})]}):(0,Xr.jsx)(tp,{title:"Jump Search Implementation (Java)",code:"\npublic class JumpSearch {\n  public static int jumpSearch(int[] arr, int x) {\n    int n = arr.length;\n    \n    // Finding block size to be jumped\n    int step = (int) Math.floor(Math.sqrt(n));\n    \n    // Finding the block where element is present (if it is present)\n    int prev = 0;\n    while (arr[Math.min(step, n) - 1] < x) {\n      prev = step;\n      step += (int) Math.floor(Math.sqrt(n));\n      if (prev >= n)\n        return -1;\n    }\n    \n    // Doing a linear search for x in the block beginning with prev\n    while (arr[prev] < x) {\n      prev++;\n      \n      // If we reached next block or end of array, element is not present\n      if (prev == Math.min(step, n))\n        return -1;\n    }\n    \n    // If element is found\n    if (arr[prev] == x)\n      return prev;\n    \n    return -1;\n  }\n  \n  public static void main(String[] args) {\n    int arr[] = { 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610 };\n    int x = 55;\n    \n    // Find the index of 'x' using Jump Search\n    int index = jumpSearch(arr, x);\n    \n    // Print the index where 'x' is located\n    System.out.println(\"Number \" + x + \" is at index \" + index);\n  }\n}\n"})]})]})},Ow=Qr.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,zw=Qr.div`
  text-align: center;
  margin-bottom: 2rem;
`,Nw=Qr.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,Mw=Qr.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,Lw=Qr.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,Dw=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
  justify-content: center;
  position: relative;
  padding-top: 40px;
  padding-bottom: 30px;
`,Iw=Qr(Zd.div)`
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
`,Fw=Qr(Zd.div)`
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
`,_w=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: var(--border-radius);
  font-family: 'Courier New', monospace;
  text-align: center;
  font-size: 1.1rem;
`,Vw=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,Bw=Qr.button`
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
`,Uw=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Hw=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Ww=Qr.input`
  width: 100px;
`,qw=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Kw=Qr.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 60px;
`,Qw=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,Yw=Qr.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,Gw=Qr.button`
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
`,Xw=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,Jw=Qr.div`
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: ${e=>e.highlight?"#fffde7":"transparent"};
  border-radius: var(--border-radius);
  transition: background 0.3s;
`,Zw=Qr.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,eS=Qr.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,tS=Qr.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,nS=Qr.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,rS=Qr.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,iS=Qr.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
`,aS=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,oS=Qr.div`
  width: 20px;
  height: 20px;
  border-radius: var(--border-radius);
  background: ${e=>e.color||"#ddd"};
`,sS=Qr(Zd.div)`
  position: absolute;
  height: 2px;
  background: #9c27b0;
  top: 25px;
  z-index: 1;
`,lS=()=>{const[t,n]=(0,e.useState)([]),[r,i]=(0,e.useState)(""),[a,o]=(0,e.useState)(!1),[s,l]=(0,e.useState)(!1),[u,c]=(0,e.useState)(!1),[d,h]=(0,e.useState)(-1),[p,f]=(0,e.useState)(-1),[m,g]=(0,e.useState)(-1),[v,y]=(0,e.useState)([]),[x,b]=(0,e.useState)(""),[w,S]=(0,e.useState)(16),[k,j]=(0,e.useState)(500),[C,E]=(0,e.useState)("visualization"),[T,P]=(0,e.useState)(""),[$,A]=(0,e.useState)([]),[R,O]=(0,e.useState)(-1);(0,e.useEffect)((()=>{z()}),[w]);const z=()=>{const e=[];let t=Math.floor(5*Math.random());for(let n=0;n<w;n++)e.push(t),t+=Math.floor(Math.random()*(n+5))+1;n(e),M()},N=e=>new Promise((t=>setTimeout(t,e))),M=()=>{o(!1),l(!1),c(!1),y([]),h(-1),f(-1),g(-1),i(""),P(""),A([]),O(-1),b("")},L=e=>58*e+25;return(0,Xr.jsxs)(Ow,{children:[(0,Xr.jsxs)(zw,{children:[(0,Xr.jsx)(Nw,{children:"Interpolation Search"}),(0,Xr.jsx)(Mw,{children:"Interpolation Search is an improved variant of Binary Search for uniformly distributed sorted arrays. Instead of always checking the middle element, it uses a formula to estimate the most likely position of the target value."})]}),(0,Xr.jsxs)(Lw,{children:[(0,Xr.jsxs)(Yw,{children:[(0,Xr.jsx)(Gw,{active:"visualization"===C,onClick:()=>E("visualization"),children:"Visualization"}),(0,Xr.jsx)(Gw,{active:"code"===C,onClick:()=>E("code"),children:"Code"})]}),"visualization"===C?(0,Xr.jsxs)(Xr.Fragment,{children:[(0,Xr.jsxs)(Vw,{children:[(0,Xr.jsxs)(Hw,{children:[(0,Xr.jsx)("span",{children:"Size:"}),(0,Xr.jsx)(Ww,{type:"range",min:"8",max:"20",value:w,onChange:e=>S(parseInt(e.target.value)),disabled:a}),(0,Xr.jsx)("span",{children:w})]}),(0,Xr.jsxs)(Uw,{children:[(0,Xr.jsx)("span",{children:"Speed:"}),(0,Xr.jsx)(Ww,{type:"range",min:"100",max:"1000",step:"50",value:k,onChange:e=>j(parseInt(e.target.value)),disabled:a}),(0,Xr.jsxs)("span",{children:[k,"ms"]})]}),(0,Xr.jsxs)(qw,{children:[(0,Xr.jsx)("span",{children:"Target:"}),(0,Xr.jsx)(Kw,{type:"number",value:r,onChange:e=>i(e.target.value),disabled:a})]}),(0,Xr.jsx)(Bw,{onClick:z,disabled:a,children:"Generate New Array"}),(0,Xr.jsx)(Bw,{onClick:async()=>{if(a||!r)return;const e=parseInt(r);if(isNaN(e))return void b("Please enter a valid number");o(!0),l(!1),c(!1),y([]),h(-1),f(-1),g(-1),A([]),O(-1),b("");let n=0,i=t.length-1;for(f(n),g(i),P(`Starting Interpolation Search for target ${e}`),await N(k);n<=i&&e>=t[n]&&e<=t[i];){if(f(n),g(i),n===i)return h(n),y([...v,n]),t[n]===e?(P(`Found target ${e} at index ${n}!`),c(!0),l(!0),void o(!1)):(P(`Element at index ${n} is ${t[n]}, not the target ${e}.`),l(!0),void o(!1));let r=Math.floor(n+(e-t[n])*(i-n)/(t[i]-t[n]));r=Math.max(n,Math.min(r,i));const a=[`lo = ${n}, hi = ${i}`,`target = ${e}, arr[lo] = ${t[n]}, arr[hi] = ${t[i]}`,"pos = lo + ((target - arr[lo]) * (hi - lo)) / (arr[hi] - arr[lo])",`pos = ${n} + ((${e} - ${t[n]}) * (${i} - ${n})) / (${t[i]} - ${t[n]})`,`pos = ${n} + ((${e-t[n]}) * ${i-n}) / ${t[i]-t[n]}`,`pos = ${n} + (${(e-t[n])*(i-n)}) / ${t[i]-t[n]}`,`pos = ${n} + ${(e-t[n])*(i-n)/(t[i]-t[n])}`,`pos = ${r} (rounded to integer)`];A(a);for(let e=0;e<a.length;e++)O(e),await N(k/2);if(P(`Calculated position to check: index ${r}`),await N(k),h(r),y([...v,r]),P(`Comparing arr[${r}] = ${t[r]} with target ${e}`),await N(k),t[r]===e)return P(`Found target ${e} at index ${r}!`),c(!0),l(!0),void o(!1);t[r]>e?(P(`${t[r]} > ${e}, searching in the left subarray`),i=r-1):(P(`${t[r]} < ${e}, searching in the right subarray`),n=r+1),await N(k),A([]),O(-1)}P(`Target ${e} is outside the range of values in the array or not present.`),l(!0),o(!1)},disabled:a||!r,children:a?"Searching...":"Search"}),(0,Xr.jsx)(Bw,{onClick:M,disabled:a,children:"Reset"})]}),(0,Xr.jsxs)(iS,{children:[(0,Xr.jsxs)(aS,{children:[(0,Xr.jsx)(oS,{color:"var(--primary)"}),(0,Xr.jsx)("span",{children:"Current Element"})]}),(0,Xr.jsxs)(aS,{children:[(0,Xr.jsx)(oS,{color:"#ff9800"}),(0,Xr.jsx)("span",{children:"Left Pointer"})]}),(0,Xr.jsxs)(aS,{children:[(0,Xr.jsx)(oS,{color:"#4caf50"}),(0,Xr.jsx)("span",{children:"Right Pointer"})]}),(0,Xr.jsxs)(aS,{children:[(0,Xr.jsx)(oS,{color:"#e0e0e0"}),(0,Xr.jsx)("span",{children:"Visited"})]}),(0,Xr.jsxs)(aS,{children:[(0,Xr.jsx)(oS,{color:"var(--secondary)"}),(0,Xr.jsx)("span",{children:"Target Found"})]})]}),T&&(0,Xr.jsx)(Xw,{children:T}),$.length>0&&(0,Xr.jsxs)(_w,{children:[(0,Xr.jsx)("h4",{children:"Position Calculation:"}),$.map(((e,t)=>(0,Xr.jsx)(Jw,{highlight:t===R,children:e},t)))]}),(0,Xr.jsxs)(Dw,{children:[-1!==p&&-1!==m&&(0,Xr.jsxs)(Xr.Fragment,{children:[(0,Xr.jsxs)(Fw,{position:L(p),color:"#ff9800",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:["lo=",p]}),(0,Xr.jsxs)(Fw,{position:L(m),color:"#4caf50",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:["hi=",m]}),(0,Xr.jsx)(sS,{style:{left:L(p),width:L(m)-L(p)},initial:{scaleX:0},animate:{scaleX:1},transition:{duration:.4}})]}),-1!==d&&(0,Xr.jsxs)(Fw,{position:L(d),color:"var(--primary)",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:["pos=",d]}),t.map(((e,t)=>(0,Xr.jsx)(Iw,{index:t,current:t===d,left:t===p,right:t===m,visited:v.includes(t),target:u&&t===d,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.03*t},children:e},t)))]}),s&&(0,Xr.jsx)(Qw,{children:u?(0,Xr.jsxs)("div",{children:["Target ",r," found at index ",d,"!"]}):(0,Xr.jsxs)("div",{children:["Target ",r," not found in the array."]})}),(0,Xr.jsxs)(Zw,{children:[(0,Xr.jsx)(eS,{children:"Algorithm Complexity"}),(0,Xr.jsx)("p",{children:"Interpolation Search provides improved performance over Binary Search, especially for uniformly distributed data."}),(0,Xr.jsxs)(tS,{children:[(0,Xr.jsx)("thead",{children:(0,Xr.jsxs)("tr",{children:[(0,Xr.jsx)(nS,{children:"Time Complexity"}),(0,Xr.jsx)(nS,{children:"Space Complexity"})]})}),(0,Xr.jsx)("tbody",{children:(0,Xr.jsxs)("tr",{children:[(0,Xr.jsxs)(rS,{children:[(0,Xr.jsx)("div",{children:"Best Case: O(1) \u2014 if the first position checked has the target"}),(0,Xr.jsx)("div",{children:"Average Case: O(log(log n)) \u2014 for uniformly distributed data"}),(0,Xr.jsx)("div",{children:"Worst Case: O(n) \u2014 when elements are exponentially distributed"})]}),(0,Xr.jsx)(rS,{children:"O(1) \u2014 constant space requirement"})]})})]}),(0,Xr.jsxs)("div",{style:{marginTop:"1rem"},children:[(0,Xr.jsx)("p",{children:"The formula for the probe position in Interpolation Search is:"}),(0,Xr.jsx)("p",{children:(0,Xr.jsx)("strong",{children:"pos = lo + ((x - arr[lo]) * (hi - lo)) / (arr[hi] - arr[lo])"})}),(0,Xr.jsx)("p",{children:"Interpolation Search is particularly useful when:"}),(0,Xr.jsxs)("ul",{children:[(0,Xr.jsx)("li",{children:"The array is sorted"}),(0,Xr.jsx)("li",{children:"Elements are uniformly distributed"}),(0,Xr.jsx)("li",{children:"The array is large"})]}),(0,Xr.jsx)("p",{children:"It can be significantly faster than Binary Search for large, uniformly distributed arrays, but can perform worse when the distribution is skewed."})]})]})]}):(0,Xr.jsx)(tp,{title:"Interpolation Search Implementation (Java)",code:'\npublic class InterpolationSearch {\n    /**\n     * Interpolation Search algorithm implementation\n     * @param arr Sorted array to search in\n     * @param x Target value to search for\n     * @return Index of the target if found, -1 otherwise\n     */\n    public static int interpolationSearch(int[] arr, int x) {\n        // Find indexes of two corners\n        int lo = 0, hi = arr.length - 1;\n        \n        // Since array is sorted, an element present\n        // in array must be in range defined by corner\n        while (lo <= hi && x >= arr[lo] && x <= arr[hi]) {\n            if (lo == hi) {\n                if (arr[lo] == x) return lo;\n                return -1;\n            }\n            \n            // Probing the position with keeping\n            // uniform distribution in mind.\n            int pos = lo + ((x - arr[lo]) * (hi - lo)) / (arr[hi] - arr[lo]);\n            \n            // Condition of target found\n            if (arr[pos] == x)\n                return pos;\n                \n            // If x is larger, x is in right sub array\n            if (arr[pos] < x)\n                lo = pos + 1;\n                \n            // If x is smaller, x is in left sub array\n            else\n                hi = pos - 1;\n        }\n        return -1;\n    }\n    \n    // Driver method\n    public static void main(String[] args) {\n        int[] arr = {10, 12, 13, 16, 18, 19, 20, 21, 22, 23,\n                      24, 33, 35, 42, 47};\n                      \n        int x = 18; // Element to be searched\n        int index = interpolationSearch(arr, x);\n        \n        // If element was found\n        if (index != -1)\n            System.out.println("Element found at index " + index);\n        else\n            System.out.println("Element not found.");\n    }\n}\n'})]})]})},uS=Qr.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`,cS=Qr.div`
  text-align: center;
  margin-bottom: 2rem;
`,dS=Qr.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`,hS=Qr.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`,pS=Qr.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,fS=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
  justify-content: center;
  position: relative;
  padding-top: 40px;
  padding-bottom: 30px;
`,mS=Qr(Zd.div)`
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
`,gS=Qr(Zd.div)`
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
`,vS=Qr(Zd.div)`
  position: absolute;
  height: 2px;
  background: #9c27b0;
  top: 25px;
  z-index: 1;
`,yS=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
  font-weight: bold;
  color: var(--primary);
`,xS=Qr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`,bS=Qr.button`
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
`,wS=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,SS=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,kS=Qr.input`
  width: 100px;
`,jS=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,CS=Qr.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 60px;
`,ES=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,TS=Qr.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,PS=Qr.button`
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
`,$S=Qr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`,AS=Qr.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`,RS=Qr.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`,OS=Qr.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,zS=Qr.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,NS=Qr.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,MS=Qr.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
`,LS=Qr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,DS=Qr.div`
  width: 20px;
  height: 20px;
  border-radius: var(--border-radius);
  background: ${e=>e.color||"#ddd"};
`,IS=()=>{const[t,n]=(0,e.useState)([]),[r,i]=(0,e.useState)(""),[a,o]=(0,e.useState)(!1),[s,l]=(0,e.useState)(!1),[u,c]=(0,e.useState)(!1),[d,h]=(0,e.useState)(-1),[p,f]=(0,e.useState)(-1),[m,g]=(0,e.useState)([]),[v,y]=(0,e.useState)([]),[x,b]=(0,e.useState)(""),[w,S]=(0,e.useState)(16),[k,j]=(0,e.useState)(500),[C,E]=(0,e.useState)("visualization"),[T,P]=(0,e.useState)(""),[$,A]=(0,e.useState)(""),[R,O]=(0,e.useState)({left:-1,right:-1});(0,e.useEffect)((()=>{z()}),[w]);const z=()=>{const e=[];let t=Math.floor(5*Math.random());for(let n=0;n<w;n++)e.push(t),t+=Math.floor(10*Math.random())+1;n(e),M()},N=e=>new Promise((t=>setTimeout(t,e))),M=()=>{o(!1),l(!1),c(!1),g([]),h(-1),f(-1),y([]),i(""),P(""),A(""),O({left:-1,right:-1}),b("")},L=e=>58*e+25;return(0,Xr.jsxs)(uS,{children:[(0,Xr.jsxs)(cS,{children:[(0,Xr.jsx)(dS,{children:"Exponential Search"}),(0,Xr.jsx)(hS,{children:"Exponential Search is an algorithm for searching sorted arrays that works by finding a range where the target might be and then performing a binary search within that range. It's useful for unbounded or infinite arrays."})]}),(0,Xr.jsxs)(pS,{children:[(0,Xr.jsxs)(TS,{children:[(0,Xr.jsx)(PS,{active:"visualization"===C,onClick:()=>E("visualization"),children:"Visualization"}),(0,Xr.jsx)(PS,{active:"code"===C,onClick:()=>E("code"),children:"Code"})]}),"visualization"===C?(0,Xr.jsxs)(Xr.Fragment,{children:[(0,Xr.jsxs)(xS,{children:[(0,Xr.jsxs)(SS,{children:[(0,Xr.jsx)("span",{children:"Size:"}),(0,Xr.jsx)(kS,{type:"range",min:"8",max:"20",value:w,onChange:e=>S(parseInt(e.target.value)),disabled:a}),(0,Xr.jsx)("span",{children:w})]}),(0,Xr.jsxs)(wS,{children:[(0,Xr.jsx)("span",{children:"Speed:"}),(0,Xr.jsx)(kS,{type:"range",min:"100",max:"1000",step:"50",value:k,onChange:e=>j(parseInt(e.target.value)),disabled:a}),(0,Xr.jsxs)("span",{children:[k,"ms"]})]}),(0,Xr.jsxs)(jS,{children:[(0,Xr.jsx)("span",{children:"Target:"}),(0,Xr.jsx)(CS,{type:"number",value:r,onChange:e=>i(e.target.value),disabled:a})]}),(0,Xr.jsx)(bS,{onClick:z,disabled:a,children:"Generate New Array"}),(0,Xr.jsx)(bS,{onClick:async()=>{if(a||!r)return;const e=parseInt(r);if(isNaN(e))return void b("Please enter a valid number");o(!0),l(!1),c(!1),g([]),h(-1),f(-1),y([]),b(""),A("exponential");const n=t.length;if(h(0),g([0]),P(`Checking if the first element (${t[0]}) is the target ${e}`),await N(k),t[0]===e)return P(`Found target ${e} at the first position (index 0)!`),c(!0),l(!0),void o(!1);let i=1;for(P("Starting exponential probing from index 1"),await N(k);i<n&&t[i]<=e;){h(i),f(i),g([...m,i]);const e=Math.min(2*i,n-1);P(`Current bound: ${i}. Next bound will be: ${e}`),await N(k),i*=2}i=Math.min(i,n);const s=i/2,u=Math.min(i,n-1);y([s,u]),P(`Found range for binary search: [${s}, ${u}]`),await N(k);const d=await(async(e,n,r)=>{for(O({left:e,right:n}),A("binary"),P(`Starting Binary Search between indices ${e} and ${n}`),await N(k);e<=n;){O({left:e,right:n});const i=Math.floor(e+(n-e)/2);if(h(i),g([...m,i]),P(`Checking mid element at index ${i}: ${t[i]} vs target ${r}`),await N(k),t[i]===r)return P(`Found target ${r} at index ${i}!`),c(!0),l(!0),o(!1),i;t[i]>r?(P(`${t[i]} > ${r}, searching in the left half`),n=i-1):(P(`${t[i]} < ${r}, searching in the right half`),e=i+1),await N(k)}return P(`Binary search complete. Target ${r} not found in the range.`),-1})(Math.floor(s),u,e);-1===d&&(l(!0),o(!1))},disabled:a||!r,children:a?"Searching...":"Search"}),(0,Xr.jsx)(bS,{onClick:M,disabled:a,children:"Reset"})]}),(0,Xr.jsxs)(MS,{children:[(0,Xr.jsxs)(LS,{children:[(0,Xr.jsx)(DS,{color:"var(--primary)"}),(0,Xr.jsx)("span",{children:"Current Element"})]}),(0,Xr.jsxs)(LS,{children:[(0,Xr.jsx)(DS,{color:"#ff9800"}),(0,Xr.jsx)("span",{children:"Bound / Binary Search Limits"})]}),(0,Xr.jsxs)(LS,{children:[(0,Xr.jsx)(DS,{color:"#e0e0e0"}),(0,Xr.jsx)("span",{children:"Visited"})]}),(0,Xr.jsxs)(LS,{children:[(0,Xr.jsx)(DS,{color:"#e3f2fd"}),(0,Xr.jsx)("span",{children:"Search Range"})]}),(0,Xr.jsxs)(LS,{children:[(0,Xr.jsx)(DS,{color:"var(--secondary)"}),(0,Xr.jsx)("span",{children:"Target Found"})]})]}),$&&(0,Xr.jsx)(yS,{children:"exponential"===$?"Phase 1: Exponential Probing":"Phase 2: Binary Search"}),T&&(0,Xr.jsx)($S,{children:T}),(0,Xr.jsxs)(fS,{children:["binary"===$&&-1!==R.left&&-1!==R.right&&(0,Xr.jsxs)(Xr.Fragment,{children:[(0,Xr.jsxs)(gS,{position:L(R.left),color:"#ff9800",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:["left=",R.left]}),(0,Xr.jsxs)(gS,{position:L(R.right),color:"#ff9800",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:["right=",R.right]}),(0,Xr.jsx)(vS,{style:{left:L(R.left),width:L(R.right)-L(R.left)},initial:{scaleX:0},animate:{scaleX:1},transition:{duration:.4}})]}),"exponential"===$&&-1!==p&&(0,Xr.jsxs)(gS,{position:L(p),color:"#ff9800",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:["bound=",p]}),2===v.length&&(0,Xr.jsx)(vS,{style:{left:L(v[0]),width:L(v[1])-L(v[0])},initial:{scaleX:0},animate:{scaleX:1},transition:{duration:.4}}),t.map(((e,t)=>(0,Xr.jsx)(mS,{index:t,current:t===d,bound:"binary"===$?t===R.left||t===R.right:t===p,visited:m.includes(t),range:2===v.length&&t>=v[0]&&t<=v[1],target:u&&t===d,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.03*t},children:e},t)))]}),s&&(0,Xr.jsx)(ES,{children:u?(0,Xr.jsxs)("div",{children:["Target ",r," found at index ",d,"!"]}):(0,Xr.jsxs)("div",{children:["Target ",r," not found in the array."]})}),(0,Xr.jsxs)(AS,{children:[(0,Xr.jsx)(RS,{children:"Algorithm Complexity"}),(0,Xr.jsx)("p",{children:"Exponential Search combines the idea of exponential growth to find a range and binary search to find the target within that range."}),(0,Xr.jsxs)(OS,{children:[(0,Xr.jsx)("thead",{children:(0,Xr.jsxs)("tr",{children:[(0,Xr.jsx)(zS,{children:"Time Complexity"}),(0,Xr.jsx)(zS,{children:"Space Complexity"})]})}),(0,Xr.jsx)("tbody",{children:(0,Xr.jsxs)("tr",{children:[(0,Xr.jsxs)(NS,{children:[(0,Xr.jsx)("div",{children:"Best Case: O(1) \u2014 if the target is in the first position"}),(0,Xr.jsx)("div",{children:"Average and Worst Case: O(log n) \u2014 where n is the length of the array"})]}),(0,Xr.jsx)(NS,{children:"O(1) \u2014 constant space requirement (iterative implementation)"})]})})]}),(0,Xr.jsxs)("div",{style:{marginTop:"1rem"},children:[(0,Xr.jsx)("p",{children:"Exponential Search is particularly useful when:"}),(0,Xr.jsxs)("ul",{children:[(0,Xr.jsx)("li",{children:"The array is sorted but unbounded (potentially infinite)"}),(0,Xr.jsx)("li",{children:"The target element is likely to be near the beginning of the array"}),(0,Xr.jsx)("li",{children:"You want better performance than binary search for targets near the start"})]}),(0,Xr.jsx)("p",{children:"The algorithm operates in two phases:"}),(0,Xr.jsxs)("ol",{children:[(0,Xr.jsxs)("li",{children:[(0,Xr.jsx)("strong",{children:"Exponential Probing:"})," Find a range where the target might be by repeatedly doubling an index i (1, 2, 4, 8, 16, ...) until arr[i] exceeds the target value."]}),(0,Xr.jsxs)("li",{children:[(0,Xr.jsx)("strong",{children:"Binary Search:"})," Perform a binary search between i/2 and min(i, n-1) to find the exact position of the target."]})]})]})]})]}):(0,Xr.jsx)(tp,{title:"Exponential Search Implementation (Java)",code:'\npublic class ExponentialSearch {\n    /**\n     * Performs binary search on a sorted array within given bounds\n     * @param arr The sorted array\n     * @param left The left bound\n     * @param right The right bound\n     * @param x The value to search for\n     * @return Index of x if found, otherwise -1\n     */\n    public static int binarySearch(int[] arr, int left, int right, int x) {\n        if (right >= left) {\n            int mid = left + (right - left) / 2;\n            \n            // If the element is present at the middle\n            if (arr[mid] == x)\n                return mid;\n                \n            // If element is smaller than mid, search in left subarray\n            if (arr[mid] > x)\n                return binarySearch(arr, left, mid - 1, x);\n                \n            // Else search in right subarray\n            return binarySearch(arr, mid + 1, right, x);\n        }\n        \n        // Element not present in array\n        return -1;\n    }\n    \n    /**\n     * Performs exponential search on a sorted array\n     * @param arr The sorted array\n     * @param n The size of the array\n     * @param x The value to search for\n     * @return Index of x if found, otherwise -1\n     */\n    public static int exponentialSearch(int[] arr, int n, int x) {\n        // If x is present at the first position\n        if (arr[0] == x)\n            return 0;\n            \n        // Find range for binary search by repeated doubling\n        int i = 1;\n        while (i < n && arr[i] <= x)\n            i = i * 2;\n            \n        // Call binary search for the found range\n        return binarySearch(arr, i / 2, Math.min(i, n - 1), x);\n    }\n    \n    // Driver code\n    public static void main(String[] args) {\n        int[] arr = {2, 3, 4, 10, 40, 60, 80, 100, 120, 140, 170};\n        int x = 80;\n        int result = exponentialSearch(arr, arr.length, x);\n        \n        if (result < 0)\n            System.out.println("Element not found in the array");\n        else\n            System.out.println("Element found at index " + result);\n    }\n}\n'})]})]})},FS=Qr.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,_S=Qr.main`
  flex: 1;
`;const VS=function(){return(0,Xr.jsx)(Ye,{children:(0,Xr.jsxs)(FS,{children:[(0,Xr.jsx)(Gr,{}),(0,Xr.jsx)(ri,{}),(0,Xr.jsx)(_S,{children:(0,Xr.jsxs)(me,{children:[(0,Xr.jsx)(pe,{path:"/",element:(0,Xr.jsx)(vh,{})}),(0,Xr.jsx)(pe,{path:"/data-structures",element:(0,Xr.jsx)(Ah,{})}),(0,Xr.jsx)(pe,{path:"/algorithms",element:(0,Xr.jsx)(Gh,{})}),(0,Xr.jsx)(pe,{path:"/data-structures/arrays",element:(0,Xr.jsx)(yp,{})}),(0,Xr.jsx)(pe,{path:"/data-structures/linked-lists",element:(0,Xr.jsx)(Fp,{})}),(0,Xr.jsx)(pe,{path:"/data-structures/stacks",element:(0,Xr.jsx)(af,{})}),(0,Xr.jsx)(pe,{path:"/data-structures/queues",element:(0,Xr.jsx)(Tf,{})}),(0,Xr.jsx)(pe,{path:"/data-structures/trees",element:(0,Xr.jsx)(pm,{})}),(0,Xr.jsx)(pe,{path:"/data-structures/hash-tables",element:(0,Xr.jsx)(Mm,{})}),(0,Xr.jsx)(pe,{path:"/data-structures/graphs",element:(0,Xr.jsx)(og,{})}),(0,Xr.jsx)(pe,{path:"/data-structures/heaps",element:(0,Xr.jsx)(Tg,{})}),(0,Xr.jsx)(pe,{path:"/algorithms/sorting/bubble",element:(0,Xr.jsx)(Qg,{})}),(0,Xr.jsx)(pe,{path:"/algorithms/sorting/selection",element:(0,Xr.jsx)(gv,{})}),(0,Xr.jsx)(pe,{path:"/algorithms/sorting/insertion",element:(0,Xr.jsx)(Iv,{})}),(0,Xr.jsx)(pe,{path:"/algorithms/sorting/merge",element:(0,Xr.jsx)(ly,{})}),(0,Xr.jsx)(pe,{path:"/algorithms/sorting/quick",element:(0,Xr.jsx)(Oy,{})}),(0,Xr.jsx)(pe,{path:"/algorithms/sorting/heap",element:(0,Xr.jsx)(ox,{})}),(0,Xr.jsx)(pe,{path:"/algorithms/searching/binary",element:(0,Xr.jsx)(Rx,{})}),(0,Xr.jsx)(pe,{path:"/algorithms/searching/linear",element:(0,Xr.jsx)(eb,{})}),(0,Xr.jsx)(pe,{path:"/algorithms/searching/jump",element:(0,Xr.jsx)(Rw,{})}),(0,Xr.jsx)(pe,{path:"/algorithms/searching/interpolation",element:(0,Xr.jsx)(lS,{})}),(0,Xr.jsx)(pe,{path:"/algorithms/searching/exponential",element:(0,Xr.jsx)(IS,{})}),(0,Xr.jsx)(pe,{path:"/algorithms/graph/bfs",element:(0,Xr.jsx)(Pb,{})}),(0,Xr.jsx)(pe,{path:"/algorithms/graph/dfs",element:(0,Xr.jsx)(nw,{})})]})})]})})},BS=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then((t=>{let{getCLS:n,getFID:r,getFCP:i,getLCP:a,getTTFB:o}=t;n(e),r(e),i(e),a(e),o(e)}))};t.createRoot(document.getElementById("root")).render((0,Xr.jsx)(VS,{})),BS()})()})();
//# sourceMappingURL=main.4f9badf9.js.map