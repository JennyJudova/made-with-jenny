var rn=Object.defineProperty;var Ge=n=>{throw TypeError(n)};var sn=(n,t,e)=>t in n?rn(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var T=(n,t,e)=>sn(n,typeof t!="symbol"?t+"":t,e),Ce=(n,t,e)=>t.has(n)||Ge("Cannot "+e);var _=(n,t,e)=>(Ce(n,t,"read from private field"),e?e.call(n):t.get(n)),P=(n,t,e)=>t.has(n)?Ge("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e),b=(n,t,e,i)=>(Ce(n,t,"write to private field"),i?i.call(n,e):t.set(n,e),e),p=(n,t,e)=>(Ce(n,t,"access private method"),e);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Bt,zt,Wt,jt,Vt,kt,J,R,me,ie,_e,Q,W,X,H,U,l,qt,Gt,Re,Fe,Kt,Jt,Be,ze,We,z,je,Ve,Se,ke,Qt,Xt,Zt,Yt,en,tn,qe;const ge=globalThis,Te=ge.ShadowRoot&&(ge.ShadyCSS===void 0||ge.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ke=Symbol(),Je=new WeakMap;let on=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Ke)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Te&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Je.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Je.set(e,t))}return t}toString(){return this.cssText}};const an=n=>new on(typeof n=="string"?n:n+"",void 0,Ke),cn=(n,t)=>{if(Te)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),r=ge.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=e.cssText,n.appendChild(i)}},Qe=Te?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return an(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:hn,defineProperty:un,getOwnPropertyDescriptor:dn,getOwnPropertyNames:ln,getOwnPropertySymbols:fn,getPrototypeOf:pn}=Object,L=globalThis,Xe=L.trustedTypes,mn=Xe?Xe.emptyScript:"",xe=L.reactiveElementPolyfillSupport,se=(n,t)=>n,Ue={toAttribute(n,t){switch(t){case Boolean:n=n?mn:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch(i){e=null}}return e}},Ze=(n,t)=>!hn(n,t),Ye={attribute:!0,type:String,converter:Ue,reflect:!1,hasChanged:Ze};(Bt=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(zt=L.litPropertyMetadata)!=null||(L.litPropertyMetadata=new WeakMap);class Y extends HTMLElement{static addInitializer(t){var e;this._$Ei(),((e=this.l)!=null?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ye){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);r!==void 0&&un(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){var o;const{get:r,set:s}=(o=dn(this.prototype,t))!=null?o:{get(){return this[e]},set(h){this[e]=h}};return{get(){return r==null?void 0:r.call(this)},set(h){const c=r==null?void 0:r.call(this);s.call(this,h),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return(e=this.elementProperties.get(t))!=null?e:Ye}static _$Ei(){if(this.hasOwnProperty(se("elementProperties")))return;const t=pn(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(se("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(se("properties"))){const e=this.properties,i=[...ln(e),...fn(e)];for(const r of i)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,r]of e)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const r=this._$Eu(e,i);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)e.unshift(Qe(r))}else t!==void 0&&e.push(Qe(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$EO)!=null?e:this._$EO=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var e;const t=(e=this.shadowRoot)!=null?e:this.attachShadow(this.constructor.shadowRootOptions);return cn(t,this.constructor.elementStyles),t}connectedCallback(){var t,e;(t=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(i=>{var r;return(r=i.hostConnected)==null?void 0:r.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var s;const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:Ue).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){var s;const i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const o=i.getPropertyOptions(r),h=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:Ue;this._$Em=r,this[r]=h.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,i){var r;if(t!==void 0){if(i!=null||(i=this.constructor.getPropertyOptions(t)),!((r=i.hasChanged)!=null?r:Ze)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){var r;this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&((r=this._$Ej)!=null?r:this._$Ej=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i,r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((i=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,h]of this._$Ep)this[o]=h;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,h]of s)h.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],h)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$EO)==null||r.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}Y.elementStyles=[],Y.shadowRootOptions={mode:"open"},Y[se("elementProperties")]=new Map,Y[se("finalized")]=new Map,xe==null||xe({ReactiveElement:Y}),((Wt=L.reactiveElementVersions)!=null?Wt:L.reactiveElementVersions=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oe=globalThis,ye=oe.trustedTypes,et=ye?ye.createPolicy("lit-html",{createHTML:n=>n}):void 0,tt="$lit$",D="lit$".concat(Math.random().toFixed(9).slice(2),"$"),nt="?"+D,_n="<".concat(nt,">"),V=document,ae=()=>V.createComment(""),ce=n=>n===null||typeof n!="object"&&typeof n!="function",Oe=Array.isArray,gn=n=>Oe(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",Me="[ 	\n\f\r]",he=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,it=/-->/g,rt=/>/g,k=RegExp(">|".concat(Me,"(?:([^\\s\"'>=/]+)(").concat(Me,"*=").concat(Me,"*(?:[^ 	\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),st=/'/g,ot=/"/g,at=/^(?:script|style|textarea|title)$/i,yn=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),ct=yn(1),ee=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),ht=new WeakMap,q=V.createTreeWalker(V,129);function ut(n,t){if(!Oe(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return et!==void 0?et.createHTML(t):t}const $n=(n,t)=>{const e=n.length-1,i=[];let r,s=t===2?"<svg>":t===3?"<math>":"",o=he;for(let h=0;h<e;h++){const c=n[h];let d,u,a=-1,f=0;for(;f<c.length&&(o.lastIndex=f,u=o.exec(c),u!==null);)f=o.lastIndex,o===he?u[1]==="!--"?o=it:u[1]!==void 0?o=rt:u[2]!==void 0?(at.test(u[2])&&(r=RegExp("</"+u[2],"g")),o=k):u[3]!==void 0&&(o=k):o===k?u[0]===">"?(o=r!=null?r:he,a=-1):u[1]===void 0?a=-2:(a=o.lastIndex-u[2].length,d=u[1],o=u[3]===void 0?k:u[3]==='"'?ot:st):o===ot||o===st?o=k:o===it||o===rt?o=he:(o=k,r=void 0);const m=o===k&&n[h+1].startsWith("/>")?" ":"";s+=o===he?c+_n:a>=0?(i.push(d),c.slice(0,a)+tt+c.slice(a)+D+m):c+D+(a===-2?h:m)}return[ut(n,s+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class fe{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let s=0,o=0;const h=t.length-1,c=this.parts,[d,u]=$n(t,e);if(this.el=fe.createElement(d,i),q.currentNode=this.el.content,e===2||e===3){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(r=q.nextNode())!==null&&c.length<h;){if(r.nodeType===1){if(r.hasAttributes())for(const a of r.getAttributeNames())if(a.endsWith(tt)){const f=u[o++],m=r.getAttribute(a).split(D),y=/([.?@])?(.*)/.exec(f);c.push({type:1,index:s,name:y[2],strings:m,ctor:y[1]==="."?wn:y[1]==="?"?An:y[1]==="@"?En:$e}),r.removeAttribute(a)}else a.startsWith(D)&&(c.push({type:6,index:s}),r.removeAttribute(a));if(at.test(r.tagName)){const a=r.textContent.split(D),f=a.length-1;if(f>0){r.textContent=ye?ye.emptyScript:"";for(let m=0;m<f;m++)r.append(a[m],ae()),q.nextNode(),c.push({type:2,index:++s});r.append(a[f],ae())}}}else if(r.nodeType===8)if(r.data===nt)c.push({type:2,index:s});else{let a=-1;for(;(a=r.data.indexOf(D,a+1))!==-1;)c.push({type:7,index:s}),a+=D.length-1}s++}}static createElement(t,e){const i=V.createElement("template");return i.innerHTML=t,i}}function te(n,t,e=n,i){var o,h,c;if(t===ee)return t;let r=i!==void 0?(o=e._$Co)==null?void 0:o[i]:e._$Cl;const s=ce(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((h=r==null?void 0:r._$AO)==null||h.call(r,!1),s===void 0?r=void 0:(r=new s(n),r._$AT(n,e,i)),i!==void 0?((c=e._$Co)!=null?c:e._$Co=[])[i]=r:e._$Cl=r),r!==void 0&&(t=te(n,r._$AS(n,t.values),r,i)),t}class vn{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var d;const{el:{content:e},parts:i}=this._$AD,r=((d=t==null?void 0:t.creationScope)!=null?d:V).importNode(e,!0);q.currentNode=r;let s=q.nextNode(),o=0,h=0,c=i[0];for(;c!==void 0;){if(o===c.index){let u;c.type===2?u=new pe(s,s.nextSibling,this,t):c.type===1?u=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(u=new bn(s,this,t)),this._$AV.push(u),c=i[++h]}o!==(c==null?void 0:c.index)&&(s=q.nextNode(),o++)}return q.currentNode=V,r}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class pe{get _$AU(){var t,e;return(e=(t=this._$AM)==null?void 0:t._$AU)!=null?e:this._$Cv}constructor(t,e,i,r){var s;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=(s=r==null?void 0:r.isConnected)!=null?s:!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=te(this,t,e),ce(t)?t===A||t==null||t===""?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==ee&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):gn(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==A&&ce(this._$AH)?this._$AA.nextSibling.data=t:this.T(V.createTextNode(t)),this._$AH=t}$(t){var s;const{values:e,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=fe.createElement(ut(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(e);else{const o=new vn(r,this),h=o.u(this.options);o.p(e),this.T(h),this._$AH=o}}_$AC(t){let e=ht.get(t.strings);return e===void 0&&ht.set(t.strings,e=new fe(t)),e}k(t){Oe(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const s of t)r===e.length?e.push(i=new pe(this.O(ae()),this.O(ae()),this,this.options)):i=e[r],i._$AI(s),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class $e{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,s){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=A}_$AI(t,e=this,i,r){const s=this.strings;let o=!1;if(s===void 0)t=te(this,t,e,0),o=!ce(t)||t!==this._$AH&&t!==ee,o&&(this._$AH=t);else{const h=t;let c,d;for(t=s[0],c=0;c<s.length-1;c++)d=te(this,h[i+c],e,c),d===ee&&(d=this._$AH[c]),o||(o=!ce(d)||d!==this._$AH[c]),d===A?t=A:t!==A&&(t+=(d!=null?d:"")+s[c+1]),this._$AH[c]=d}o&&!r&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class wn extends $e{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}}class An extends $e{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A)}}class En extends $e{constructor(t,e,i,r,s){super(t,e,i,r,s),this.type=5}_$AI(t,e=this){var o;if((t=(o=te(this,t,e,0))!=null?o:A)===ee)return;const i=this._$AH,r=t===A&&i!==A||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==A&&(i===A||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)==null?void 0:e.host)!=null?i:this.element,t):this._$AH.handleEvent(t)}}class bn{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){te(this,t)}}const He=oe.litHtmlPolyfillSupport;He==null||He(fe,pe),((jt=oe.litHtmlVersions)!=null?jt:oe.litHtmlVersions=[]).push("3.2.1");const Rn=(n,t,e)=>{var s,o;const i=(s=e==null?void 0:e.renderBefore)!=null?s:t;let r=i._$litPart$;if(r===void 0){const h=(o=e==null?void 0:e.renderBefore)!=null?o:null;i._$litPart$=r=new pe(t.insertBefore(ae(),h),h,void 0,e!=null?e:{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ne=class extends Y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,i;const t=super.createRenderRoot();return(i=(e=this.renderOptions).renderBefore)!=null||(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Rn(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return ee}};ne._$litElement$=!0,ne.finalized=!0,(Vt=globalThis.litElementHydrateSupport)==null||Vt.call(globalThis,{LitElement:ne});const Ie=globalThis.litElementPolyfillSupport;Ie==null||Ie({LitElement:ne}),((kt=globalThis.litElementVersions)!=null?kt:globalThis.litElementVersions=[]).push("4.1.1");function Sn(n){for(var t=[],e=0;e<n.length;){var i=n[e];if(i==="*"||i==="+"||i==="?"){t.push({type:"MODIFIER",index:e,value:n[e++]});continue}if(i==="\\"){t.push({type:"ESCAPED_CHAR",index:e++,value:n[e++]});continue}if(i==="{"){t.push({type:"OPEN",index:e,value:n[e++]});continue}if(i==="}"){t.push({type:"CLOSE",index:e,value:n[e++]});continue}if(i===":"){for(var r="",s=e+1;s<n.length;){var o=n.charCodeAt(s);if(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||o===95){r+=n[s++];continue}break}if(!r)throw new TypeError("Missing parameter name at ".concat(e));t.push({type:"NAME",index:e,value:r}),e=s;continue}if(i==="("){var h=1,c="",s=e+1;if(n[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<n.length;){if(n[s]==="\\"){c+=n[s++]+n[s++];continue}if(n[s]===")"){if(h--,h===0){s++;break}}else if(n[s]==="("&&(h++,n[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));c+=n[s++]}if(h)throw new TypeError("Unbalanced pattern at ".concat(e));if(!c)throw new TypeError("Missing pattern at ".concat(e));t.push({type:"PATTERN",index:e,value:c}),e=s;continue}t.push({type:"CHAR",index:e,value:n[e++]})}return t.push({type:"END",index:e,value:""}),t}function Ne(n,t){t===void 0&&(t={});for(var e=Sn(n),i=t.prefixes,r=i===void 0?"./":i,s=t.delimiter,o=s===void 0?"/#?":s,h=[],c=0,d=0,u="",a=function(S){if(d<e.length&&e[d].type===S)return e[d++].value},f=function(S){var E=a(S);if(E!==void 0)return E;var O=e[d],Pe=O.type,nn=O.index;throw new TypeError("Unexpected ".concat(Pe," at ").concat(nn,", expected ").concat(S))},m=function(){for(var S="",E;E=a("CHAR")||a("ESCAPED_CHAR");)S+=E;return S},y=function(S){for(var E=0,O=o;E<O.length;E++){var Pe=O[E];if(S.indexOf(Pe)>-1)return!0}return!1},v=function(S){var E=h[h.length-1],O=S||(E&&typeof E=="string"?E:"");if(E&&!O)throw new TypeError('Must have text between two parameters, missing text after "'.concat(E.name,'"'));return!O||y(O)?"[^".concat(F(o),"]+?"):"(?:(?!".concat(F(O),")[^").concat(F(o),"])+?")};d<e.length;){var g=a("CHAR"),w=a("NAME"),I=a("PATTERN");if(w||I){var C=g||"";r.indexOf(C)===-1&&(u+=C,C=""),u&&(h.push(u),u=""),h.push({name:w||c++,prefix:C,suffix:"",pattern:I||v(C),modifier:a("MODIFIER")||""});continue}var $=g||a("ESCAPED_CHAR");if($){u+=$;continue}u&&(h.push(u),u="");var j=a("OPEN");if(j){var C=m(),N=a("NAME")||"",re=a("PATTERN")||"",Z=m();f("CLOSE"),h.push({name:N||(re?c++:""),pattern:N&&!re?v(C):re,prefix:C,suffix:Z,modifier:a("MODIFIER")||""});continue}f("END")}return h}function dt(n,t){return lt(Ne(n,t),t)}function lt(n,t){t===void 0&&(t={});var e=Le(t),i=t.encode,r=i===void 0?function(c){return c}:i,s=t.validate,o=s===void 0?!0:s,h=n.map(function(c){if(typeof c=="object")return new RegExp("^(?:".concat(c.pattern,")$"),e)});return function(c){for(var d="",u=0;u<n.length;u++){var a=n[u];if(typeof a=="string"){d+=a;continue}var f=c?c[a.name]:void 0,m=a.modifier==="?"||a.modifier==="*",y=a.modifier==="*"||a.modifier==="+";if(Array.isArray(f)){if(!y)throw new TypeError('Expected "'.concat(a.name,'" to not repeat, but got an array'));if(f.length===0){if(m)continue;throw new TypeError('Expected "'.concat(a.name,'" to not be empty'))}for(var v=0;v<f.length;v++){var g=r(f[v],a);if(o&&!h[u].test(g))throw new TypeError('Expected all "'.concat(a.name,'" to match "').concat(a.pattern,'", but got "').concat(g,'"'));d+=a.prefix+g+a.suffix}continue}if(typeof f=="string"||typeof f=="number"){var g=r(String(f),a);if(o&&!h[u].test(g))throw new TypeError('Expected "'.concat(a.name,'" to match "').concat(a.pattern,'", but got "').concat(g,'"'));d+=a.prefix+g+a.suffix;continue}if(!m){var w=y?"an array":"a string";throw new TypeError('Expected "'.concat(a.name,'" to be ').concat(w))}}return d}}function F(n){return n.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Le(n){return n&&n.sensitive?"":"i"}function Pn(n,t){if(!t)return n;for(var e=/\((?:\?<(.*?)>)?(?!\?)/g,i=0,r=e.exec(n.source);r;)t.push({name:r[1]||i++,prefix:"",suffix:"",modifier:"",pattern:""}),r=e.exec(n.source);return n}function Cn(n,t,e){var i=n.map(function(r){return ft(r,t,e).source});return new RegExp("(?:".concat(i.join("|"),")"),Le(e))}function Tn(n,t,e){return xn(Ne(n,e),t,e)}function xn(n,t,e){e===void 0&&(e={});for(var i=e.strict,r=i===void 0?!1:i,s=e.start,o=s===void 0?!0:s,h=e.end,c=h===void 0?!0:h,d=e.encode,u=d===void 0?function(E){return E}:d,a=e.delimiter,f=a===void 0?"/#?":a,m=e.endsWith,y=m===void 0?"":m,v="[".concat(F(y),"]|$"),g="[".concat(F(f),"]"),w=o?"^":"",I=0,C=n;I<C.length;I++){var $=C[I];if(typeof $=="string")w+=F(u($));else{var j=F(u($.prefix)),N=F(u($.suffix));if($.pattern)if(t&&t.push($),j||N)if($.modifier==="+"||$.modifier==="*"){var re=$.modifier==="*"?"?":"";w+="(?:".concat(j,"((?:").concat($.pattern,")(?:").concat(N).concat(j,"(?:").concat($.pattern,"))*)").concat(N,")").concat(re)}else w+="(?:".concat(j,"(").concat($.pattern,")").concat(N,")").concat($.modifier);else{if($.modifier==="+"||$.modifier==="*")throw new TypeError('Can not repeat "'.concat($.name,'" without a prefix and suffix'));w+="(".concat($.pattern,")").concat($.modifier)}else w+="(?:".concat(j).concat(N,")").concat($.modifier)}}if(c)r||(w+="".concat(g,"?")),w+=e.endsWith?"(?=".concat(v,")"):"$";else{var Z=n[n.length-1],S=typeof Z=="string"?g.indexOf(Z[Z.length-1])>-1:Z===void 0;r||(w+="(?:".concat(g,"(?=").concat(v,"))?")),S||(w+="(?=".concat(g,"|").concat(v,")"))}return new RegExp(w,Le(e))}function ft(n,t,e){return n instanceof RegExp?Pn(n,t):Array.isArray(n)?Cn(n,t,e):Tn(n,t,e)}function G(n){return typeof n=="object"&&!!n}function ue(n){return typeof n=="function"}function M(n){return typeof n=="string"}function ve(n=[]){return Array.isArray(n)?n:[n]}function B(n){return"[Vaadin.Router] ".concat(n)}class pt extends Error{constructor(e){super(B("Page not found (".concat(e.pathname,")")));T(this,"code");T(this,"context");this.context=e,this.code=404}}const K=Symbol("NotFoundResult");function mt(n){return new pt(n)}function _t(n){var t;return(t=Array.isArray(n)?n[0]:n)!=null?t:""}function we(n){return _t(n==null?void 0:n.path)}function Un(n){return Array.isArray(n)&&n.length>0?n:void 0}const De=new Map;De.set("|false",{keys:[],pattern:new RegExp("(?:)","u")});function gt(n){try{return decodeURIComponent(n)}catch(t){return n}}function On(n,t,e=!1,i=[],r){const s="".concat(n,"|").concat(String(e)),o=_t(t);let h=De.get(s);if(!h){const u=[];h={keys:u,pattern:ft(n,u,{end:e,strict:n===""})},De.set(s,h)}const c=h.pattern.exec(o);if(!c)return null;const d={...r};for(let u=1;u<c.length;u++){const a=h.keys[u-1],f=a.name,m=c[u];(m!==void 0||!Object.hasOwn(d,f))&&(a.modifier==="+"||a.modifier==="*"?d[f]=m?m.split(new RegExp("[/?#]","u")).map(gt):[]:d[f]=m&&gt(m))}return{keys:[...i,...h.keys],params:d,path:c[0]}}var Mn=On;function yt(n,t,e,i,r){let s,o,h=0,c=we(n);return c.startsWith("/")&&(e&&(c=c.substring(1)),e=!0),{next(d){var f,m;if(n===d)return{done:!0,value:void 0};(f=n.__children)!=null||(n.__children=Un(n.children));const u=(m=n.__children)!=null?m:[],a=!n.__children&&!n.children;if(!s&&(s=Mn(c,t,a,i,r),s))return{value:{keys:s.keys,params:s.params,path:s.path,route:n}};if(s&&u.length>0)for(;h<u.length;){if(!o){const v=u[h];v.parent=n;let g=s.path.length;g>0&&t.charAt(g)==="/"&&(g+=1),o=yt(v,t.substring(g),e,s.keys,s.params)}const y=o.next(d);if(!y.done)return{done:!1,value:y.value};o=null,h+=1}return{done:!0,value:void 0}}}}var Hn=yt;function In(n){if(ue(n.route.action))return n.route.action(n)}function Nn(n,t){let e=n;for(;e;)if(e=e.parent,e===t)return!0;return!1}function Ln(n){return!!n&&typeof n=="object"&&"next"in n&&"params"in n&&"result"in n&&"route"in n}class Dn extends Error{constructor(e,i){let r="Path '".concat(e.pathname,"' is not properly resolved due to an error.");const s=we(e.route);s&&(r+=" Resolution had failed on route: '".concat(s,"'"));super(r,i);T(this,"code");T(this,"context");this.code=i==null?void 0:i.code,this.context=e}warn(){console.warn(this.message)}}function Fn(n,t){var r;const{path:e,route:i}=t;if(i&&!i.__synthetic){const s={path:e,route:i};if(i.parent&&n.chain)for(let o=n.chain.length-1;o>=0&&n.chain[o].route!==i.parent;o--)n.chain.pop();(r=n.chain)==null||r.push(s)}}class $t{constructor(t,{baseUrl:e="",context:i,errorHandler:r,resolveRoute:s=In}={}){T(this,"baseUrl");P(this,J);T(this,"errorHandler");T(this,"resolveRoute");P(this,R);if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=e,this.errorHandler=r,this.resolveRoute=s,Array.isArray(t)?b(this,R,{__children:t,__synthetic:!0,action:()=>{},path:""}):b(this,R,{...t,parent:void 0}),b(this,J,{...i,hash:"",async next(){return K},params:{},pathname:"",resolver:this,route:_(this,R),search:"",chain:[]})}get root(){return _(this,R)}get context(){return _(this,J)}get __effectiveBaseUrl(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(new RegExp("[^/]*$","u"),""):""}getRoutes(){var t;return[...(t=_(this,R).__children)!=null?t:[]]}removeRoutes(){_(this,R).__children=[]}async resolve(t){var u;const e=this,i={..._(this,J),...M(t)?{pathname:t}:t,next:d},r=Hn(_(this,R),(u=this.__normalizePathname(i.pathname))!=null?u:i.pathname,!!this.baseUrl),s=this.resolveRoute;let o=null,h=null,c=i;async function d(a=!1,f=(y=>(y=o==null?void 0:o.value)==null?void 0:y.route)(),m){var w,I;const v=m===null?(w=o==null?void 0:o.value)==null?void 0:w.route:void 0;if(o=h!=null?h:r.next(v),h=null,!a&&(o.done||!Nn(o.value.route,f)))return h=o,K;if(o.done)throw mt(i);c={...i,params:o.value.params,route:o.value.route,chain:(I=c.chain)==null?void 0:I.slice()},Fn(c,o.value);const g=await s(c);return g!=null&&g!==K?(c.result=Ln(g)?g.result:g,b(e,J,c),c):await d(a,f,g)}try{return await d(!0,_(this,R))}catch(a){const f=a instanceof pt?a:new Dn(c,{code:500,cause:a});if(this.errorHandler)return c.result=this.errorHandler(f),c;throw a}}setRoutes(t){_(this,R).__children=[...ve(t)]}__normalizePathname(t){if(!this.baseUrl)return t;const e=this.__effectiveBaseUrl,i=t.startsWith("/")?new URL(e).origin+t:"./".concat(t),r=new URL(i,e).href;if(r.startsWith(e))return r.slice(e.length)}addRoutes(t){var e;return _(this,R).__children=[...(e=_(this,R).__children)!=null?e:[],...ve(t)],this.getRoutes()}}J=new WeakMap,R=new WeakMap;function vt(n,t,e,i){var s,o,h;const r=(s=t.name)!=null?s:i==null?void 0:i(t);if(r&&(n.has(r)?(o=n.get(r))==null||o.push(t):n.set(r,[t])),Array.isArray(e))for(const c of e)c.parent=t,vt(n,c,(h=c.__children)!=null?h:c.children,i)}function wt(n,t){const e=n.get(t);if(e){if(e.length>1)throw new Error('Duplicate route with name "'.concat(t,"\". Try seting unique 'name' route properties."));return e[0]}}function Bn(n,t={}){if(!(n instanceof $t))throw new TypeError("An instance of Resolver is expected");const e=new Map,i=new Map;return(r,s)=>{let o=wt(i,r);if(!o&&(i.clear(),vt(i,n.root,n.root.__children,t.cacheKeyProvider),o=wt(i,r),!o))throw new Error('Route "'.concat(r,'" not found'));let h=o.fullPath?e.get(o.fullPath):void 0;if(!h){let u=we(o),a=o.parent;for(;a;){const y=we(a);y&&(u="".concat(y.replace(new RegExp("\\/$","u"),""),"/").concat(u.replace(new RegExp("^\\/","u"),""))),a=a.parent}const f=Ne(u),m=Object.create(null);for(const y of f)M(y)||(m[y.name]=!0);h={keys:m,tokens:f},e.set(u,h),o.fullPath=u}let d=lt(h.tokens,{encode:encodeURIComponent,...t})(s)||"/";if(t.stringifyQueryParams&&s){const u={};for(const[f,m]of Object.entries(s))!(f in h.keys)&&m&&(u[f]=m);const a=t.stringifyQueryParams(u);a&&(d+=a.startsWith("?")?a:"?".concat(a))}return d}}var zn=Bn;const Wn=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Ae=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function jn(){function n(){return!0}return At(n)}function Vn(){try{return kn()?!0:qn()?Ae?!Gn():!jn():!1}catch(n){return!1}}function kn(){return localStorage.getItem("vaadin.developmentmode.force")}function qn(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Gn(){return!!(Ae&&Object.keys(Ae).map(t=>Ae[t]).filter(t=>t.productionMode).length>0)}function At(n,t){if(typeof n!="function")return;const e=Wn.exec(n.toString());if(e)try{n=new Function(e[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return n(t)}window.Vaadin=window.Vaadin||{};const Et=function(n,t){if(window.Vaadin.developmentMode)return At(n,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Vn());function Kn(){/*! vaadin-dev-mode:start
(function () {
'use strict';
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
return typeof obj;
} : function (obj) {
return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var classCallCheck = function (instance, Constructor) {
if (!(instance instanceof Constructor)) {
  throw new TypeError("Cannot call a class as a function");
}
};
var createClass = function () {
function defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
 return function (Constructor, protoProps, staticProps) {
  if (protoProps) defineProperties(Constructor.prototype, protoProps);
  if (staticProps) defineProperties(Constructor, staticProps);
  return Constructor;
};
}();
var getPolymerVersion = function getPolymerVersion() {
return window.Polymer && window.Polymer.version;
};
var StatisticsGatherer = function () {
function StatisticsGatherer(logger) {
  classCallCheck(this, StatisticsGatherer);
   this.now = new Date().getTime();
  this.logger = logger;
}
 createClass(StatisticsGatherer, [{
  key: 'frameworkVersionDetectors',
  value: function frameworkVersionDetectors() {
    return {
      'Flow': function Flow() {
        if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
          var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
            return window.Vaadin.Flow.clients[key];
          }).filter(function (client) {
            return client.getVersionInfo;
          }).map(function (client) {
            return client.getVersionInfo().flow;
          });
          if (flowVersions.length > 0) {
            return flowVersions[0];
          }
        }
      },
      'Vaadin Framework': function VaadinFramework() {
        if (window.vaadin && window.vaadin.clients) {
          var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
            return client.getVersionInfo;
          }).map(function (client) {
            return client.getVersionInfo().vaadinVersion;
          });
          if (frameworkVersions.length > 0) {
            return frameworkVersions[0];
          }
        }
      },
      'AngularJs': function AngularJs() {
        if (window.angular && window.angular.version && window.angular.version) {
          return window.angular.version.full;
        }
      },
      'Angular': function Angular() {
        if (window.ng) {
          var tags = document.querySelectorAll("[ng-version]");
          if (tags.length > 0) {
            return tags[0].getAttribute("ng-version");
          }
          return "Unknown";
        }
      },
      'Backbone.js': function BackboneJs() {
        if (window.Backbone) {
          return window.Backbone.VERSION;
        }
      },
      'React': function React() {
        var reactSelector = '[data-reactroot], [data-reactid]';
        if (!!document.querySelector(reactSelector)) {
          // React does not publish the version by default
          return "unknown";
        }
      },
      'Ember': function Ember() {
        if (window.Em && window.Em.VERSION) {
          return window.Em.VERSION;
        } else if (window.Ember && window.Ember.VERSION) {
          return window.Ember.VERSION;
        }
      },
      'jQuery': function (_jQuery) {
        function jQuery() {
          return _jQuery.apply(this, arguments);
        }
         jQuery.toString = function () {
          return _jQuery.toString();
        };
         return jQuery;
      }(function () {
        if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
          return jQuery.prototype.jquery;
        }
      }),
      'Polymer': function Polymer() {
        var version = getPolymerVersion();
        if (version) {
          return version;
        }
      },
      'LitElement': function LitElement() {
        var version = window.litElementVersions && window.litElementVersions[0];
        if (version) {
          return version;
        }
      },
      'LitHtml': function LitHtml() {
        var version = window.litHtmlVersions && window.litHtmlVersions[0];
        if (version) {
          return version;
        }
      },
      'Vue.js': function VueJs() {
        if (window.Vue) {
          return window.Vue.version;
        }
      }
    };
  }
}, {
  key: 'getUsedVaadinElements',
  value: function getUsedVaadinElements(elements) {
    var version = getPolymerVersion();
    var elementClasses = void 0;
    // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
    // Check all locations calling the method getEntries() in
    // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
    // Currently it is only used by BootstrapHandler.
    if (version && version.indexOf('2') === 0) {
      // Polymer 2: components classes are stored in window.Vaadin
      elementClasses = Object.keys(window.Vaadin).map(function (c) {
        return window.Vaadin[c];
      }).filter(function (c) {
        return c.is;
      });
    } else {
      // Polymer 3: components classes are stored in window.Vaadin.registrations
      elementClasses = window.Vaadin.registrations || [];
    }
    elementClasses.forEach(function (klass) {
      var version = klass.version ? klass.version : "0.0.0";
      elements[klass.is] = { version: version };
    });
  }
}, {
  key: 'getUsedVaadinThemes',
  value: function getUsedVaadinThemes(themes) {
    ['Lumo', 'Material'].forEach(function (themeName) {
      var theme;
      var version = getPolymerVersion();
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: themes are stored in window.Vaadin
        theme = window.Vaadin[themeName];
      } else {
        // Polymer 3: themes are stored in custom element registry
        theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
      }
      if (theme && theme.version) {
        themes[themeName] = { version: theme.version };
      }
    });
  }
}, {
  key: 'getFrameworks',
  value: function getFrameworks(frameworks) {
    var detectors = this.frameworkVersionDetectors();
    Object.keys(detectors).forEach(function (framework) {
      var detector = detectors[framework];
      try {
        var version = detector();
        if (version) {
          frameworks[framework] = { version: version };
        }
      } catch (e) {}
    });
  }
}, {
  key: 'gather',
  value: function gather(storage) {
    var storedStats = storage.read();
    var gatheredStats = {};
    var types = ["elements", "frameworks", "themes"];
     types.forEach(function (type) {
      gatheredStats[type] = {};
      if (!storedStats[type]) {
        storedStats[type] = {};
      }
    });
     var previousStats = JSON.stringify(storedStats);
     this.getUsedVaadinElements(gatheredStats.elements);
    this.getFrameworks(gatheredStats.frameworks);
    this.getUsedVaadinThemes(gatheredStats.themes);
     var now = this.now;
    types.forEach(function (type) {
      var keys = Object.keys(gatheredStats[type]);
      keys.forEach(function (key) {
        if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
          storedStats[type][key] = { firstUsed: now };
        }
        // Discards any previously logged version number
        storedStats[type][key].version = gatheredStats[type][key].version;
        storedStats[type][key].lastUsed = now;
      });
    });
     var newStats = JSON.stringify(storedStats);
    storage.write(newStats);
    if (newStats != previousStats && Object.keys(storedStats).length > 0) {
      this.logger.debug("New stats: " + newStats);
    }
  }
}]);
return StatisticsGatherer;
}();
var StatisticsStorage = function () {
function StatisticsStorage(key) {
  classCallCheck(this, StatisticsStorage);
   this.key = key;
}
 createClass(StatisticsStorage, [{
  key: 'read',
  value: function read() {
    var localStorageStatsString = localStorage.getItem(this.key);
    try {
      return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
    } catch (e) {
      return {};
    }
  }
}, {
  key: 'write',
  value: function write(data) {
    localStorage.setItem(this.key, data);
  }
}, {
  key: 'clear',
  value: function clear() {
    localStorage.removeItem(this.key);
  }
}, {
  key: 'isEmpty',
  value: function isEmpty() {
    var storedStats = this.read();
    var empty = true;
    Object.keys(storedStats).forEach(function (key) {
      if (Object.keys(storedStats[key]).length > 0) {
        empty = false;
      }
    });
     return empty;
  }
}]);
return StatisticsStorage;
}();
var StatisticsSender = function () {
function StatisticsSender(url, logger) {
  classCallCheck(this, StatisticsSender);
   this.url = url;
  this.logger = logger;
}
 createClass(StatisticsSender, [{
  key: 'send',
  value: function send(data, errorHandler) {
    var logger = this.logger;
     if (navigator.onLine === false) {
      logger.debug("Offline, can't send");
      errorHandler();
      return;
    }
    logger.debug("Sending data to " + this.url);
     var req = new XMLHttpRequest();
    req.withCredentials = true;
    req.addEventListener("load", function () {
      // Stats sent, nothing more to do
      logger.debug("Response: " + req.responseText);
    });
    req.addEventListener("error", function () {
      logger.debug("Send failed");
      errorHandler();
    });
    req.addEventListener("abort", function () {
      logger.debug("Send aborted");
      errorHandler();
    });
    req.open("POST", this.url);
    req.setRequestHeader("Content-Type", "application/json");
    req.send(data);
  }
}]);
return StatisticsSender;
}();
var StatisticsLogger = function () {
function StatisticsLogger(id) {
  classCallCheck(this, StatisticsLogger);
   this.id = id;
}
 createClass(StatisticsLogger, [{
  key: '_isDebug',
  value: function _isDebug() {
    return localStorage.getItem("vaadin." + this.id + ".debug");
  }
}, {
  key: 'debug',
  value: function debug(msg) {
    if (this._isDebug()) {
      console.info(this.id + ": " + msg);
    }
  }
}]);
return StatisticsLogger;
}();
var UsageStatistics = function () {
function UsageStatistics() {
  classCallCheck(this, UsageStatistics);
   this.now = new Date();
  this.timeNow = this.now.getTime();
  this.gatherDelay = 10; // Delay between loading this file and gathering stats
  this.initialDelay = 24 * 60 * 60;
   this.logger = new StatisticsLogger("statistics");
  this.storage = new StatisticsStorage("vaadin.statistics.basket");
  this.gatherer = new StatisticsGatherer(this.logger);
  this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
}
 createClass(UsageStatistics, [{
  key: 'maybeGatherAndSend',
  value: function maybeGatherAndSend() {
    var _this = this;
     if (localStorage.getItem(UsageStatistics.optOutKey)) {
      return;
    }
    this.gatherer.gather(this.storage);
    setTimeout(function () {
      _this.maybeSend();
    }, this.gatherDelay * 1000);
  }
}, {
  key: 'lottery',
  value: function lottery() {
    return true;
  }
}, {
  key: 'currentMonth',
  value: function currentMonth() {
    return this.now.getYear() * 12 + this.now.getMonth();
  }
}, {
  key: 'maybeSend',
  value: function maybeSend() {
    var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
    var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));
     if (!firstUse) {
      // Use a grace period to avoid interfering with tests, incognito mode etc
      firstUse = this.timeNow;
      localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
    }
     if (this.timeNow < firstUse + this.initialDelay * 1000) {
      this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
      return;
    }
    if (this.currentMonth() <= monthProcessed) {
      this.logger.debug("This month has already been processed");
      return;
    }
    localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
    // Use random sampling
    if (this.lottery()) {
      this.logger.debug("Congratulations, we have a winner!");
    } else {
      this.logger.debug("Sorry, no stats from you this time");
      return;
    }
     this.send();
  }
}, {
  key: 'send',
  value: function send() {
    // Ensure we have the latest data
    this.gatherer.gather(this.storage);
     // Read, send and clean up
    var data = this.storage.read();
    data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
    data["usageStatisticsVersion"] = UsageStatistics.version;
    var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
    var self = this;
    this.sender.send(info + JSON.stringify(data), function () {
      // Revert the 'month processed' flag
      localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
    });
  }
}], [{
  key: 'version',
  get: function get$1() {
    return '2.1.2';
  }
}, {
  key: 'firstUseKey',
  get: function get$1() {
    return 'vaadin.statistics.firstuse';
  }
}, {
  key: 'monthProcessedKey',
  get: function get$1() {
    return 'vaadin.statistics.monthProcessed';
  }
}, {
  key: 'optOutKey',
  get: function get$1() {
    return 'vaadin.statistics.optout';
  }
}]);
return UsageStatistics;
}();
try {
window.Vaadin = window.Vaadin || {};
window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
// Intentionally ignored as this is not a problem in the app being developed
}
}());
 vaadin-dev-mode:end **/}const Jn=function(){if(typeof Et=="function")return Et(Kn)};function Qn(n,t=(e=>(e=window.Vaadin)!=null?e:window.Vaadin={})()){var i;(i=t.registrations)!=null||(t.registrations=[]),t.registrations.push({is:"@vaadin/router",version:"2.0.0"})}Qn(),Jn();const Xn=n=>{const t=getComputedStyle(n).getPropertyValue("animation-name");return t&&t!=="none"},Zn=(n,t)=>{const e=()=>{n.removeEventListener("animationend",e),t()};n.addEventListener("animationend",e)};async function Yn(n,t){return n.classList.add(t),await new Promise(e=>{if(Xn(n)){const i=n.getBoundingClientRect(),r="height: ".concat(i.bottom-i.top,"px; width: ").concat(i.right-i.left,"px");n.setAttribute("style","position: absolute; ".concat(r)),Zn(n,()=>{n.classList.remove(t),n.removeAttribute("style"),e()})}else n.classList.remove(t),e()})}var bt=Yn;function Rt(n){if(!n||!M(n.path))throw new Error(B('Expected route config to be an object with a "path" string property, or an array of such objects'));if(!ue(n.action)&&!Array.isArray(n.children)&&!ue(n.children)&&!M(n.component)&&!M(n.redirect))throw new Error(B('Expected route config "'.concat(n.path,'" to include either "component, redirect" or "action" function but none found.')));n.redirect&&["bundle","component"].forEach(t=>{t in n&&console.warn(B('Route config "'.concat(String(n.path),'" has both "redirect" and "').concat(t,'" properties, and "redirect" will always override the latter. Did you mean to only use "').concat(t,'"?')))})}function St(n){ve(n).forEach(t=>Rt(t))}function ei({next:n,...t}){return t}function Ee(n,t){const e=t.__effectiveBaseUrl;return e?new URL(n.replace(new RegExp("^\\/","u"),""),e).pathname:n}function Pt(n){return n.map(t=>t.path).reduce((t,e)=>e.length?"".concat(t.replace(new RegExp("\\/$","u"),""),"/").concat(e.replace(new RegExp("^\\/","u"),"")):t,"")}function ti(n){return Pt(n.map(t=>t.route))}function x({chain:n=[],hash:t="",params:e={},pathname:i="",redirectFrom:r,resolver:s,search:o=""},h){var d,u;const c=n.map(a=>a.route);return{baseUrl:(d=s==null?void 0:s.baseUrl)!=null?d:"",getUrl:(a={})=>s?Ee(dt(ti(n))({...e,...a}),s):"",hash:t,params:e,pathname:i,redirectFrom:r,route:(u=h!=null?h:Array.isArray(c)?c.at(-1):void 0)!=null?u:null,routes:c,search:o,searchParams:new URLSearchParams(o)}}function Ct(n,t){const e={...n.params};return{redirect:{from:n.pathname,params:e,pathname:t}}}function ni(n,t){if(t.location=x(n),n.chain){const e=n.chain.map(i=>i.route).indexOf(n.route);n.chain[e].element=t}return t}function be(n,t,...e){if(typeof n=="function")return n.apply(t,e)}function Tt(n,t,...e){return i=>i&&G(i)&&("cancel"in i||"redirect"in i)?i:be(t==null?void 0:t[n],t,...e)}function ii(n,t){if(!Array.isArray(n)&&!G(n))throw new Error(B('Incorrect "children" value for the route '.concat(String(t.path),": expected array or object, but got ").concat(String(n))));const e=ve(n);e.forEach(i=>Rt(i)),t.__children=e}function de(n,t){return!window.dispatchEvent(new CustomEvent("vaadin-router-".concat(n),{cancelable:n==="go",detail:t}))}function ri(n){var e;if(typeof n!="object")return String(n);const[t="Unknown"]=(e=new RegExp(" (.*)\\]$","u").exec(String(n)))!=null?e:[];return t==="Object"||t==="Array"?"".concat(t," ").concat(JSON.stringify(n)):t}function si(n){const{port:t,protocol:e}=n,s=e==="http:"&&t==="80"||e==="https:"&&t==="443"?n.hostname:n.host;return"".concat(e,"//").concat(s)}function xt(n){if(n instanceof Element)return n.nodeName.toLowerCase()}function Ut(n){var c;if(n.defaultPrevented||n.button!==0||n.shiftKey||n.ctrlKey||n.altKey||n.metaKey)return;let t=n.target;const e=n instanceof MouseEvent?n.composedPath():(c=n.path)!=null?c:[];for(let d=0;d<e.length;d++){const u=e[d];if("nodeName"in u&&u.nodeName.toLowerCase()==="a"){t=u;break}}for(;t&&t instanceof Node&&xt(t)!=="a";)t=t.parentNode;if(!t||xt(t)!=="a")return;const i=t;if(i.target&&i.target.toLowerCase()!=="_self"||i.hasAttribute("download")||i.hasAttribute("router-ignore")||i.pathname===window.location.pathname&&i.hash!==""||(i.origin||si(i))!==window.location.origin)return;const{hash:s,pathname:o,search:h}=i;de("go",{hash:s,pathname:o,search:h})&&n instanceof MouseEvent&&(n.preventDefault(),n.type==="click"&&window.scrollTo(0,0))}const oi={activate(){window.document.addEventListener("click",Ut)},inactivate(){window.document.removeEventListener("click",Ut)}};var ai=oi;function Ot(n){if(n.state==="vaadin-router-ignore")return;const{hash:t,pathname:e,search:i}=window.location;de("go",{hash:t,pathname:e,search:i})}const ci={activate(){window.addEventListener("popstate",Ot)},inactivate(){window.removeEventListener("popstate",Ot)}};var hi=ci;let Mt=[];const ui={CLICK:ai,POPSTATE:hi};function Ht(n=[]){Mt.forEach(t=>t.inactivate()),n.forEach(t=>t.activate()),Mt=n}const di=256;function le(){return{cancel:!0}}const It={__renderId:-1,params:{},route:{__synthetic:!0,children:[],path:"",action(){}},pathname:"",async next(){return K}};class li extends $t{constructor(e,i){const r=document.head.querySelector("base"),s=r==null?void 0:r.getAttribute("href");super([],{baseUrl:s?new URL(s,document.URL).href.replace(new RegExp("[^/]*$","u"),""):void 0,...i,resolveRoute:async o=>await p(this,l,qt).call(this,o)});P(this,l);T(this,"location",x({resolver:this}));T(this,"ready",Promise.resolve(this.location));P(this,me,new WeakSet);P(this,ie,new WeakSet);P(this,_e,p(this,l,qe).bind(this));P(this,Q,0);P(this,W);T(this,"__previousContext");P(this,X);P(this,H,null);P(this,U,null);Ht(Object.values(ui)),this.setOutlet(e),this.subscribe()}setOutlet(e){e&&p(this,l,Ve).call(this,e),b(this,W,e)}getOutlet(){return _(this,W)}async setRoutes(e,i=!1){return this.__previousContext=void 0,b(this,X,void 0),St(e),super.setRoutes(e),i||p(this,l,qe).call(this),await this.ready}addRoutes(e){return St(e),super.addRoutes(e)}async render(e,i=!1){b(this,Q,_(this,Q)+1);const r=_(this,Q),s={...It,...M(e)?{hash:"",search:"",pathname:e}:e,__renderId:r};return this.ready=p(this,l,Gt).call(this,s,i),await this.ready}subscribe(){window.addEventListener("vaadin-router-go",_(this,_e))}unsubscribe(){window.removeEventListener("vaadin-router-go",_(this,_e))}static setTriggers(...e){Ht(e)}urlForName(e,i){return _(this,X)||b(this,X,zn(this,{cacheKeyProvider(r){return"component"in r&&typeof r.component=="string"?r.component:void 0}})),Ee(_(this,X).call(this,e,i!=null?i:void 0),this)}urlForPath(e,i){return Ee(dt(e)(i!=null?i:void 0),this)}static go(e){const{pathname:i,search:r,hash:s}=M(e)?new URL(e,"http://a"):e;return de("go",{pathname:i,search:r,hash:s})}}me=new WeakMap,ie=new WeakMap,_e=new WeakMap,Q=new WeakMap,W=new WeakMap,X=new WeakMap,H=new WeakMap,U=new WeakMap,l=new WeakSet,qt=async function(e){const{route:i}=e;if(ue(i.children)){let s=await i.children(ei(e));ue(i.children)||({children:s}=i),ii(s,i)}const r={component:s=>{const o=document.createElement(s);return _(this,ie).add(o),o},prevent:le,redirect:s=>Ct(e,s)};return await Promise.resolve().then(async()=>{if(p(this,l,z).call(this,e))return await be(i.action,i,e,r)}).then(s=>{if(s!=null&&(typeof s=="object"||typeof s=="symbol")&&(s instanceof HTMLElement||s===K||G(s)&&"redirect"in s))return s;if(M(i.redirect))return r.redirect(i.redirect)}).then(s=>{if(s!=null)return s;if(M(i.component))return r.component(i.component)})},Gt=async function(e,i){var s,o;const{__renderId:r}=e;try{const h=await this.resolve(e),c=await p(this,l,Re).call(this,h);if(!p(this,l,z).call(this,c))return this.location;const d=this.__previousContext;if(c===d)return p(this,l,Se).call(this,d,!0),this.location;if(this.location=x(c),i&&p(this,l,Se).call(this,c,r===1),de("location-changed",{router:this,location:this.location}),c.__skipAttach)return p(this,l,ke).call(this,c,d),this.__previousContext=c,this.location;p(this,l,Qt).call(this,c,d);const u=p(this,l,tn).call(this,c);if(p(this,l,en).call(this,c),p(this,l,Yt).call(this,c,d),await u,p(this,l,z).call(this,c))return p(this,l,Xt).call(this),this.__previousContext=c,this.location}catch(h){if(r===_(this,Q)){i&&p(this,l,Se).call(this,this.context);for(const c of(o=(s=_(this,W))==null?void 0:s.children)!=null?o:[])c.remove();throw this.location=x(Object.assign(e,{resolver:this})),de("error",{router:this,error:h,...e}),h}}return this.location},Re=async function(e,i=e){var a;const r=await p(this,l,Fe).call(this,i),o=r!==i?r:e,c=Ee(Pt((a=r.chain)!=null?a:[]),this)===r.pathname,d=async(f,m=f.route,y)=>{const v=await f.next(!1,m,y);return v===null||v===K?c?f:m.parent!=null?await d(f,m.parent,v):v:v},u=await d(r);if(u==null||u===K)throw mt(o);return u!==r?await p(this,l,Re).call(this,o,u):await p(this,l,Kt).call(this,r)},Fe=async function(e){const{result:i}=e;if(i instanceof HTMLElement)return ni(e,i),e;if(i&&"redirect"in i){const r=await p(this,l,je).call(this,i.redirect,e.__redirectCount,e.__renderId);return await p(this,l,Fe).call(this,r)}throw i instanceof Error?i:new Error(B('Invalid route resolution result for path "'.concat(e.pathname,'". Expected redirect object or HTML element, but got: "').concat(ri(i),'". Double check the action return value for the route.')))},Kt=async function(e){return await p(this,l,Jt).call(this,e).then(async i=>i===this.__previousContext||i===e?i:await p(this,l,Re).call(this,i))},Jt=async function(e){var c,d,u;const i=(c=this.__previousContext)!=null?c:{},r=(d=i.chain)!=null?d:[],s=(u=e.chain)!=null?u:[];let o=Promise.resolve(void 0);const h=a=>Ct(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,r.length){for(let a=0;a<Math.min(r.length,s.length)&&!(r[a].route!==s[a].route||r[a].path!==s[a].path&&r[a].element!==s[a].element||!p(this,l,We).call(this,r[a].element,s[a].element));e.__divergedChainIndex++,a++);if(e.__skipAttach=s.length===r.length&&e.__divergedChainIndex===s.length&&p(this,l,We).call(this,e.result,i.result),e.__skipAttach){for(let a=s.length-1;a>=0;a--)o=p(this,l,Be).call(this,o,e,{prevent:le},r[a]);for(let a=0;a<s.length;a++)o=p(this,l,ze).call(this,o,e,{prevent:le,redirect:h},s[a]),r[a].element.location=x(e,r[a].route)}else for(let a=r.length-1;a>=e.__divergedChainIndex;a--)o=p(this,l,Be).call(this,o,e,{prevent:le},r[a])}if(!e.__skipAttach)for(let a=0;a<s.length;a++)a<e.__divergedChainIndex?a<r.length&&r[a].element&&(r[a].element.location=x(e,r[a].route)):(o=p(this,l,ze).call(this,o,e,{prevent:le,redirect:h},s[a]),s[a].element&&(s[a].element.location=x(e,s[a].route)));return await o.then(async a=>{if(a&&G(a)){if("cancel"in a&&this.__previousContext)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if("redirect"in a)return await p(this,l,je).call(this,a.redirect,e.__redirectCount,e.__renderId)}return e})},Be=async function(e,i,r,s){const o=x(i);let h=await e;if(p(this,l,z).call(this,i)&&(h=Tt("onBeforeLeave",s.element,o,r,this)(h)),!(G(h)&&"redirect"in h))return h},ze=async function(e,i,r,s){const o=x(i,s.route),h=await e;if(p(this,l,z).call(this,i))return Tt("onBeforeEnter",s.element,o,r,this)(h)},We=function(e,i){return e instanceof Element&&i instanceof Element?_(this,ie).has(e)&&_(this,ie).has(i)?e.localName===i.localName:e===i:!1},z=function(e){return e.__renderId===_(this,Q)},je=async function(e,i=0,r=0){if(i>di)throw new Error(B("Too many redirects when rendering ".concat(e.from)));return await this.resolve({...It,pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:i+1,__renderId:r})},Ve=function(e=_(this,W)){if(!(e instanceof Element||e instanceof DocumentFragment))throw new TypeError(B("Expected router outlet to be a valid DOM Element | DocumentFragment (but got ".concat(e,")")))},Se=function({pathname:e,search:i="",hash:r=""},s){if(window.location.pathname!==e||window.location.search!==i||window.location.hash!==r){const o=s?"replaceState":"pushState";window.history[o](null,document.title,e+i+r),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}},ke=function(e,i){var s,o;let r=_(this,W);for(let h=0;h<((s=e.__divergedChainIndex)!=null?s:0);h++){const c=(o=i==null?void 0:i.chain)==null?void 0:o[h].element;if(c)if(c.parentNode===r)e.chain[h].element=c,r=c;else break}return r},Qt=function(e,i){var o,h,c,d;p(this,l,Ve).call(this),p(this,l,Zt).call(this);const r=p(this,l,ke).call(this,e,i);b(this,H,[]),b(this,U,Array.from((o=r==null?void 0:r.children)!=null?o:[]).filter(u=>_(this,me).has(u)&&u!==e.result));let s=r;for(let u=(h=e.__divergedChainIndex)!=null?h:0;u<((d=(c=e.chain)==null?void 0:c.length)!=null?d:0);u++){const a=e.chain[u].element;a&&(s==null||s.appendChild(a),_(this,me).add(a),s===r&&_(this,H).push(a),s=a)}},Xt=function(){if(_(this,U))for(const e of _(this,U))e.remove();b(this,U,null),b(this,H,null)},Zt=function(){if(_(this,U)&&_(this,H)){for(const e of _(this,H))e.remove();b(this,U,null),b(this,H,null)}},Yt=function(e,i){var r;if(!(!(i!=null&&i.chain)||e.__divergedChainIndex==null))for(let s=i.chain.length-1;s>=e.__divergedChainIndex&&p(this,l,z).call(this,e);s--){const o=i.chain[s].element;if(o)try{const h=x(e);be(o.onAfterLeave,o,h,{},this)}finally{if((r=_(this,U))!=null&&r.includes(o))for(const h of o.children)h.remove()}}},en=function(e){if(!(!e.chain||e.__divergedChainIndex==null))for(let i=e.__divergedChainIndex;i<e.chain.length&&p(this,l,z).call(this,e);i++){const r=e.chain[i].element;if(r){const s=x(e,e.chain[i].route);be(r.onAfterEnter,r,s,{},this)}}},tn=async function(e){var c,d;const i=(c=_(this,U))==null?void 0:c[0],r=(d=_(this,H))==null?void 0:d[0],s=[],{chain:o=[]}=e;let h;for(let u=o.length-1;u>=0;u--)if(o[u].route.animate){h=o[u].route.animate;break}if(i&&r&&h){const u=G(h)&&h.leave?h.leave:"leaving",a=G(h)&&h.enter?h.enter:"entering";s.push(bt(i,u)),s.push(bt(r,a))}return await Promise.all(s),e},qe=function(e){const{pathname:i,search:r,hash:s}=e instanceof CustomEvent?e.detail:window.location;M(this.__normalizePathname(i))&&(e!=null&&e.preventDefault&&e.preventDefault(),this.render({pathname:i,search:r,hash:s},!0))};var Nt=Object.freeze,fi=Object.defineProperty,pi=(n,t)=>Nt(fi(n,"raw",{value:Nt(n.slice())})),Lt;class mi extends ne{render(){return ct(Lt||(Lt=pi(["<h1>Welcome to the Home Page</h1>"])))}}customElements.define("home-page",mi);var Dt=Object.freeze,_i=Object.defineProperty,gi=(n,t)=>Dt(_i(n,"raw",{value:Dt(n.slice())})),Ft;class yi extends ne{firstUpdated(){new li(this.shadowRoot.getElementById("outlet")).setRoutes([{path:"/",component:"home-page"},{path:"/about",component:"about-page"},{path:"/contact",component:"contact-page"}])}render(){return ct(Ft||(Ft=gi(['\n      <nav>\n        <a href="/">Home</a>\n        <a href="/about">About</a>\n        <a href="/contact">Contact</a>\n      </nav>\n      <div id="outlet"></div>\n    '])))}}customElements.define("app-index",yi);
