var ut=Object.defineProperty;var _e=t=>{throw TypeError(t)};var ft=(t,n,e)=>n in t?ut(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var $=(t,n,e)=>ft(t,typeof n!="symbol"?n+"":n,e),se=(t,n,e)=>n.has(t)||_e("Cannot "+e);var p=(t,n,e)=>(se(t,n,"read from private field"),e?e.call(t):n.get(t)),I=(t,n,e)=>n.has(t)?_e("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(t):n.set(t,e),b=(t,n,e,r)=>(se(t,n,"write to private field"),r?r.call(t,e):n.set(t,e),e),l=(t,n,e)=>(se(t,n,"access private method"),e);var j,A,Z,K,k,z,D,G,O,x,d,Ze,ke,ae,he,et,tt,le,pe,me,H,ve,ge,oe,we,nt,rt,it,at,ot,ct,ye;import{r as Ee,x as Re}from"./edw02iL8.js";function dt(t){for(var n=[],e=0;e<t.length;){var r=t[e];if(r==="*"||r==="+"||r==="?"){n.push({type:"MODIFIER",index:e,value:t[e++]});continue}if(r==="\\"){n.push({type:"ESCAPED_CHAR",index:e++,value:t[e++]});continue}if(r==="{"){n.push({type:"OPEN",index:e,value:t[e++]});continue}if(r==="}"){n.push({type:"CLOSE",index:e,value:t[e++]});continue}if(r===":"){for(var a="",i=e+1;i<t.length;){var c=t.charCodeAt(i);if(c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122||c===95){a+=t[i++];continue}break}if(!a)throw new TypeError("Missing parameter name at ".concat(e));n.push({type:"NAME",index:e,value:a}),e=i;continue}if(r==="("){var s=1,u="",i=e+1;if(t[i]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(i));for(;i<t.length;){if(t[i]==="\\"){u+=t[i++]+t[i++];continue}if(t[i]===")"){if(s--,s===0){i++;break}}else if(t[i]==="("&&(s++,t[i+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(i));u+=t[i++]}if(s)throw new TypeError("Unbalanced pattern at ".concat(e));if(!u)throw new TypeError("Missing pattern at ".concat(e));n.push({type:"PATTERN",index:e,value:u}),e=i;continue}n.push({type:"CHAR",index:e,value:t[e++]})}return n.push({type:"END",index:e,value:""}),n}function ue(t,n){n===void 0&&(n={});for(var e=dt(t),r=n.prefixes,a=r===void 0?"./":r,i=n.delimiter,c=i===void 0?"/#?":i,s=[],u=0,h=0,f="",o=function(P){if(h<e.length&&e[h].type===P)return e[h++].value},m=function(P){var R=o(P);if(R!==void 0)return R;var C=e[h],ce=C.type,st=C.index;throw new TypeError("Unexpected ".concat(ce," at ").concat(st,", expected ").concat(P))},v=function(){for(var P="",R;R=o("CHAR")||o("ESCAPED_CHAR");)P+=R;return P},_=function(P){for(var R=0,C=c;R<C.length;R++){var ce=C[R];if(P.indexOf(ce)>-1)return!0}return!1},y=function(P){var R=s[s.length-1],C=P||(R&&typeof R=="string"?R:"");if(R&&!C)throw new TypeError('Must have text between two parameters, missing text after "'.concat(R.name,'"'));return!C||_(C)?"[^".concat(F(c),"]+?"):"(?:(?!".concat(F(C),")[^").concat(F(c),"])+?")};h<e.length;){var g=o("CHAR"),E=o("NAME"),S=o("PATTERN");if(E||S){var T=g||"";a.indexOf(T)===-1&&(f+=T,T=""),f&&(s.push(f),f=""),s.push({name:E||u++,prefix:T,suffix:"",pattern:S||y(T),modifier:o("MODIFIER")||""});continue}var w=g||o("ESCAPED_CHAR");if(w){f+=w;continue}f&&(s.push(f),f="");var V=o("OPEN");if(V){var T=v(),U=o("NAME")||"",Q=o("PATTERN")||"",q=v();m("CLOSE"),s.push({name:U||(Q?u++:""),pattern:U&&!Q?y(T):Q,prefix:T,suffix:q,modifier:o("MODIFIER")||""});continue}m("END")}return s}function be(t,n){return Ae(ue(t,n),n)}function Ae(t,n){n===void 0&&(n={});var e=fe(n),r=n.encode,a=r===void 0?function(u){return u}:r,i=n.validate,c=i===void 0?!0:i,s=t.map(function(u){if(typeof u=="object")return new RegExp("^(?:".concat(u.pattern,")$"),e)});return function(u){for(var h="",f=0;f<t.length;f++){var o=t[f];if(typeof o=="string"){h+=o;continue}var m=u?u[o.name]:void 0,v=o.modifier==="?"||o.modifier==="*",_=o.modifier==="*"||o.modifier==="+";if(Array.isArray(m)){if(!_)throw new TypeError('Expected "'.concat(o.name,'" to not repeat, but got an array'));if(m.length===0){if(v)continue;throw new TypeError('Expected "'.concat(o.name,'" to not be empty'))}for(var y=0;y<m.length;y++){var g=a(m[y],o);if(c&&!s[f].test(g))throw new TypeError('Expected all "'.concat(o.name,'" to match "').concat(o.pattern,'", but got "').concat(g,'"'));h+=o.prefix+g+o.suffix}continue}if(typeof m=="string"||typeof m=="number"){var g=a(String(m),o);if(c&&!s[f].test(g))throw new TypeError('Expected "'.concat(o.name,'" to match "').concat(o.pattern,'", but got "').concat(g,'"'));h+=o.prefix+g+o.suffix;continue}if(!v){var E=_?"an array":"a string";throw new TypeError('Expected "'.concat(o.name,'" to be ').concat(E))}}return h}}function F(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function fe(t){return t&&t.sensitive?"":"i"}function ht(t,n){if(!n)return t;for(var e=/\((?:\?<(.*?)>)?(?!\?)/g,r=0,a=e.exec(t.source);a;)n.push({name:a[1]||r++,prefix:"",suffix:"",modifier:"",pattern:""}),a=e.exec(t.source);return t}function lt(t,n,e){var r=t.map(function(a){return Pe(a,n,e).source});return new RegExp("(?:".concat(r.join("|"),")"),fe(e))}function pt(t,n,e){return mt(ue(t,e),n,e)}function mt(t,n,e){e===void 0&&(e={});for(var r=e.strict,a=r===void 0?!1:r,i=e.start,c=i===void 0?!0:i,s=e.end,u=s===void 0?!0:s,h=e.encode,f=h===void 0?function(R){return R}:h,o=e.delimiter,m=o===void 0?"/#?":o,v=e.endsWith,_=v===void 0?"":v,y="[".concat(F(_),"]|$"),g="[".concat(F(m),"]"),E=c?"^":"",S=0,T=t;S<T.length;S++){var w=T[S];if(typeof w=="string")E+=F(f(w));else{var V=F(f(w.prefix)),U=F(f(w.suffix));if(w.pattern)if(n&&n.push(w),V||U)if(w.modifier==="+"||w.modifier==="*"){var Q=w.modifier==="*"?"?":"";E+="(?:".concat(V,"((?:").concat(w.pattern,")(?:").concat(U).concat(V,"(?:").concat(w.pattern,"))*)").concat(U,")").concat(Q)}else E+="(?:".concat(V,"(").concat(w.pattern,")").concat(U,")").concat(w.modifier);else{if(w.modifier==="+"||w.modifier==="*")throw new TypeError('Can not repeat "'.concat(w.name,'" without a prefix and suffix'));E+="(".concat(w.pattern,")").concat(w.modifier)}else E+="(?:".concat(V).concat(U,")").concat(w.modifier)}}if(u)a||(E+="".concat(g,"?")),E+=e.endsWith?"(?=".concat(y,")"):"$";else{var q=t[t.length-1],P=typeof q=="string"?g.indexOf(q[q.length-1])>-1:q===void 0;a||(E+="(?:".concat(g,"(?=").concat(y,"))?")),P||(E+="(?=".concat(g,"|").concat(y,")"))}return new RegExp(E,fe(e))}function Pe(t,n,e){return t instanceof RegExp?ht(t,n):Array.isArray(t)?lt(t,n,e):pt(t,n,e)}function W(t){return typeof t=="object"&&!!t}function X(t){return typeof t=="function"}function M(t){return typeof t=="string"}function ee(t=[]){return Array.isArray(t)?t:[t]}function N(t){return"[Vaadin.Router] ".concat(t)}class Ie extends Error{constructor(e){super(N("Page not found (".concat(e.pathname,")")));$(this,"code");$(this,"context");this.context=e,this.code=404}}const B=Symbol("NotFoundResult");function Te(t){return new Ie(t)}function $e(t){var n;return(n=Array.isArray(t)?t[0]:t)!=null?n:""}function te(t){return $e(t==null?void 0:t.path)}function vt(t){return Array.isArray(t)&&t.length>0?t:void 0}const de=new Map;de.set("|false",{keys:[],pattern:new RegExp("(?:)","u")});function Le(t){try{return decodeURIComponent(t)}catch(n){return t}}function gt(t,n,e=!1,r=[],a){const i="".concat(t,"|").concat(String(e)),c=$e(n);let s=de.get(i);if(!s){const f=[];s={keys:f,pattern:Pe(t,f,{end:e,strict:t===""})},de.set(i,s)}const u=s.pattern.exec(c);if(!u)return null;const h={...a};for(let f=1;f<u.length;f++){const o=s.keys[f-1],m=o.name,v=u[f];(v!==void 0||!Object.hasOwn(h,m))&&(o.modifier==="+"||o.modifier==="*"?h[m]=v?v.split(new RegExp("[/?#]","u")).map(Le):[]:h[m]=v&&Le(v))}return{keys:[...r,...s.keys],params:h,path:u[0]}}var wt=gt;function xe(t,n,e,r,a){let i,c,s=0,u=te(t);return u.startsWith("/")&&(e&&(u=u.substring(1)),e=!0),{next(h){var m,v;if(t===h)return{done:!0,value:void 0};(m=t.__children)!=null||(t.__children=vt(t.children));const f=(v=t.__children)!=null?v:[],o=!t.__children&&!t.children;if(!i&&(i=wt(u,n,o,r,a),i))return{value:{keys:i.keys,params:i.params,path:i.path,route:t}};if(i&&f.length>0)for(;s<f.length;){if(!c){const y=f[s];y.parent=t;let g=i.path.length;g>0&&n.charAt(g)==="/"&&(g+=1),c=xe(y,n.substring(g),e,i.keys,i.params)}const _=c.next(h);if(!_.done)return{done:!1,value:_.value};c=null,s+=1}return{done:!0,value:void 0}}}}var yt=xe;function _t(t){if(X(t.route.action))return t.route.action(t)}function Et(t,n){let e=t;for(;e;)if(e=e.parent,e===n)return!0;return!1}function Rt(t){return!!t&&typeof t=="object"&&"next"in t&&"params"in t&&"result"in t&&"route"in t}class bt extends Error{constructor(e,r){let a="Path '".concat(e.pathname,"' is not properly resolved due to an error.");const i=te(e.route);i&&(a+=" Resolution had failed on route: '".concat(i,"'"));super(a,r);$(this,"code");$(this,"context");this.code=r==null?void 0:r.code,this.context=e}warn(){console.warn(this.message)}}function At(t,n){var a;const{path:e,route:r}=n;if(r&&!r.__synthetic){const i={path:e,route:r};if(r.parent&&t.chain)for(let c=t.chain.length-1;c>=0&&t.chain[c].route!==r.parent;c--)t.chain.pop();(a=t.chain)==null||a.push(i)}}class Ce{constructor(n,{baseUrl:e="",context:r,errorHandler:a,resolveRoute:i=_t}={}){$(this,"baseUrl");I(this,j);$(this,"errorHandler");$(this,"resolveRoute");I(this,A);if(Object(n)!==n)throw new TypeError("Invalid routes");this.baseUrl=e,this.errorHandler=a,this.resolveRoute=i,Array.isArray(n)?b(this,A,{__children:n,__synthetic:!0,action:()=>{},path:""}):b(this,A,{...n,parent:void 0}),b(this,j,{...r,hash:"",async next(){return B},params:{},pathname:"",resolver:this,route:p(this,A),search:"",chain:[]})}get root(){return p(this,A)}get context(){return p(this,j)}get __effectiveBaseUrl(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(new RegExp("[^/]*$","u"),""):""}getRoutes(){var n;return[...(n=p(this,A).__children)!=null?n:[]]}removeRoutes(){p(this,A).__children=[]}async resolve(n){var f;const e=this,r={...p(this,j),...M(n)?{pathname:n}:n,next:h},a=yt(p(this,A),(f=this.__normalizePathname(r.pathname))!=null?f:r.pathname,!!this.baseUrl),i=this.resolveRoute;let c=null,s=null,u=r;async function h(o=!1,m=(_=>(_=c==null?void 0:c.value)==null?void 0:_.route)(),v){var E,S;const y=v===null?(E=c==null?void 0:c.value)==null?void 0:E.route:void 0;if(c=s!=null?s:a.next(y),s=null,!o&&(c.done||!Et(c.value.route,m)))return s=c,B;if(c.done)throw Te(r);u={...r,params:c.value.params,route:c.value.route,chain:(S=u.chain)==null?void 0:S.slice()},At(u,c.value);const g=await i(u);return g!=null&&g!==B?(u.result=Rt(g)?g.result:g,b(e,j,u),u):await h(o,m,g)}try{return await h(!0,p(this,A))}catch(o){const m=o instanceof Ie?o:new bt(u,{code:500,cause:o});if(this.errorHandler)return u.result=this.errorHandler(m),u;throw o}}setRoutes(n){p(this,A).__children=[...ee(n)]}__normalizePathname(n){if(!this.baseUrl)return n;const e=this.__effectiveBaseUrl,r=n.startsWith("/")?new URL(e).origin+n:"./".concat(n),a=new URL(r,e).href;if(a.startsWith(e))return a.slice(e.length)}addRoutes(n){var e;return p(this,A).__children=[...(e=p(this,A).__children)!=null?e:[],...ee(n)],this.getRoutes()}}j=new WeakMap,A=new WeakMap;function Me(t,n,e,r){var i,c,s;const a=(i=n.name)!=null?i:r==null?void 0:r(n);if(a&&(t.has(a)?(c=t.get(a))==null||c.push(n):t.set(a,[n])),Array.isArray(e))for(const u of e)u.parent=n,Me(t,u,(s=u.__children)!=null?s:u.children,r)}function Oe(t,n){const e=t.get(n);if(e){if(e.length>1)throw new Error('Duplicate route with name "'.concat(n,"\". Try seting unique 'name' route properties."));return e[0]}}function Pt(t,n={}){if(!(t instanceof Ce))throw new TypeError("An instance of Resolver is expected");const e=new Map,r=new Map;return(a,i)=>{let c=Oe(r,a);if(!c&&(r.clear(),Me(r,t.root,t.root.__children,n.cacheKeyProvider),c=Oe(r,a),!c))throw new Error('Route "'.concat(a,'" not found'));let s=c.fullPath?e.get(c.fullPath):void 0;if(!s){let f=te(c),o=c.parent;for(;o;){const _=te(o);_&&(f="".concat(_.replace(new RegExp("\\/$","u"),""),"/").concat(f.replace(new RegExp("^\\/","u"),""))),o=o.parent}const m=ue(f),v=Object.create(null);for(const _ of m)M(_)||(v[_.name]=!0);s={keys:v,tokens:m},e.set(f,s),c.fullPath=f}let h=Ae(s.tokens,{encode:encodeURIComponent,...n})(i)||"/";if(n.stringifyQueryParams&&i){const f={};for(const[m,v]of Object.entries(i))!(m in s.keys)&&v&&(f[m]=v);const o=n.stringifyQueryParams(f);o&&(h+=o.startsWith("?")?o:"?".concat(o))}return h}}var It=Pt;const Tt=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ne=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function $t(){function t(){return!0}return Se(t)}function Lt(){try{return xt()?!0:Ct()?ne?!Mt():!$t():!1}catch(t){return!1}}function xt(){return localStorage.getItem("vaadin.developmentmode.force")}function Ct(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Mt(){return!!(ne&&Object.keys(ne).map(n=>ne[n]).filter(n=>n.productionMode).length>0)}function Se(t,n){if(typeof t!="function")return;const e=Tt.exec(t.toString());if(e)try{t=new Function(e[1])}catch(r){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",r)}return t(n)}window.Vaadin=window.Vaadin||{};const Ue=function(t,n){if(window.Vaadin.developmentMode)return Se(t,n)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Lt());function Ot(){/*! vaadin-dev-mode:start
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
 vaadin-dev-mode:end **/}const St=function(){if(typeof Ue=="function")return Ue(Ot)};function Ut(t,n=(e=>(e=window.Vaadin)!=null?e:window.Vaadin={})()){var r;(r=n.registrations)!=null||(n.registrations=[]),n.registrations.push({is:"@vaadin/router",version:"2.0.0"})}Ut(),St();const Ft=t=>{const n=getComputedStyle(t).getPropertyValue("animation-name");return n&&n!=="none"},Nt=(t,n)=>{const e=()=>{t.removeEventListener("animationend",e),n()};t.addEventListener("animationend",e)};async function Ht(t,n){return t.classList.add(n),await new Promise(e=>{if(Ft(t)){const r=t.getBoundingClientRect(),a="height: ".concat(r.bottom-r.top,"px; width: ").concat(r.right-r.left,"px");t.setAttribute("style","position: absolute; ".concat(a)),Nt(t,()=>{t.classList.remove(n),t.removeAttribute("style"),e()})}else t.classList.remove(n),e()})}var Fe=Ht;function Ne(t){if(!t||!M(t.path))throw new Error(N('Expected route config to be an object with a "path" string property, or an array of such objects'));if(!X(t.action)&&!Array.isArray(t.children)&&!X(t.children)&&!M(t.component)&&!M(t.redirect))throw new Error(N('Expected route config "'.concat(t.path,'" to include either "component, redirect" or "action" function but none found.')));t.redirect&&["bundle","component"].forEach(n=>{n in t&&console.warn(N('Route config "'.concat(String(t.path),'" has both "redirect" and "').concat(n,'" properties, and "redirect" will always override the latter. Did you mean to only use "').concat(n,'"?')))})}function He(t){ee(t).forEach(n=>Ne(n))}function Dt({next:t,...n}){return n}function re(t,n){const e=n.__effectiveBaseUrl;return e?new URL(t.replace(new RegExp("^\\/","u"),""),e).pathname:t}function De(t){return t.map(n=>n.path).reduce((n,e)=>e.length?"".concat(n.replace(new RegExp("\\/$","u"),""),"/").concat(e.replace(new RegExp("^\\/","u"),"")):n,"")}function Vt(t){return De(t.map(n=>n.route))}function L({chain:t=[],hash:n="",params:e={},pathname:r="",redirectFrom:a,resolver:i,search:c=""},s){var h,f;const u=t.map(o=>o.route);return{baseUrl:(h=i==null?void 0:i.baseUrl)!=null?h:"",getUrl:(o={})=>i?re(be(Vt(t))({...e,...o}),i):"",hash:n,params:e,pathname:r,redirectFrom:a,route:(f=s!=null?s:Array.isArray(u)?u.at(-1):void 0)!=null?f:null,routes:u,search:c,searchParams:new URLSearchParams(c)}}function Ve(t,n){const e={...t.params};return{redirect:{from:t.pathname,params:e,pathname:n}}}function Wt(t,n){if(n.location=L(t),t.chain){const e=t.chain.map(r=>r.route).indexOf(t.route);t.chain[e].element=n}return n}function ie(t,n,...e){if(typeof t=="function")return t.apply(n,e)}function We(t,n,...e){return r=>r&&W(r)&&("cancel"in r||"redirect"in r)?r:ie(n==null?void 0:n[t],n,...e)}function Bt(t,n){if(!Array.isArray(t)&&!W(t))throw new Error(N('Incorrect "children" value for the route '.concat(String(n.path),": expected array or object, but got ").concat(String(t))));const e=ee(t);e.forEach(r=>Ne(r)),n.__children=e}function J(t,n){return!window.dispatchEvent(new CustomEvent("vaadin-router-".concat(t),{cancelable:t==="go",detail:n}))}function jt(t){var e;if(typeof t!="object")return String(t);const[n="Unknown"]=(e=new RegExp(" (.*)\\]$","u").exec(String(t)))!=null?e:[];return n==="Object"||n==="Array"?"".concat(n," ").concat(JSON.stringify(t)):n}function zt(t){const{port:n,protocol:e}=t,i=e==="http:"&&n==="80"||e==="https:"&&n==="443"?t.hostname:t.host;return"".concat(e,"//").concat(i)}function Be(t){if(t instanceof Element)return t.nodeName.toLowerCase()}function je(t){var u;if(t.defaultPrevented||t.button!==0||t.shiftKey||t.ctrlKey||t.altKey||t.metaKey)return;let n=t.target;const e=t instanceof MouseEvent?t.composedPath():(u=t.path)!=null?u:[];for(let h=0;h<e.length;h++){const f=e[h];if("nodeName"in f&&f.nodeName.toLowerCase()==="a"){n=f;break}}for(;n&&n instanceof Node&&Be(n)!=="a";)n=n.parentNode;if(!n||Be(n)!=="a")return;const r=n;if(r.target&&r.target.toLowerCase()!=="_self"||r.hasAttribute("download")||r.hasAttribute("router-ignore")||r.pathname===window.location.pathname&&r.hash!==""||(r.origin||zt(r))!==window.location.origin)return;const{hash:i,pathname:c,search:s}=r;J("go",{hash:i,pathname:c,search:s})&&t instanceof MouseEvent&&(t.preventDefault(),t.type==="click"&&window.scrollTo(0,0))}const Gt={activate(){window.document.addEventListener("click",je)},inactivate(){window.document.removeEventListener("click",je)}};var qt=Gt;function ze(t){if(t.state==="vaadin-router-ignore")return;const{hash:n,pathname:e,search:r}=window.location;J("go",{hash:n,pathname:e,search:r})}const Kt={activate(){window.addEventListener("popstate",ze)},inactivate(){window.removeEventListener("popstate",ze)}};var Qt=Kt;let Ge=[];const Xt={CLICK:qt,POPSTATE:Qt};function qe(t=[]){Ge.forEach(n=>n.inactivate()),t.forEach(n=>n.activate()),Ge=t}const Jt=256;function Y(){return{cancel:!0}}const Ke={__renderId:-1,params:{},route:{__synthetic:!0,children:[],path:"",action(){}},pathname:"",async next(){return B}};class Yt extends Ce{constructor(e,r){const a=document.head.querySelector("base"),i=a==null?void 0:a.getAttribute("href");super([],{baseUrl:i?new URL(i,document.URL).href.replace(new RegExp("[^/]*$","u"),""):void 0,...r,resolveRoute:async c=>await l(this,d,Ze).call(this,c)});I(this,d);$(this,"location",L({resolver:this}));$(this,"ready",Promise.resolve(this.location));I(this,Z,new WeakSet);I(this,K,new WeakSet);I(this,k,l(this,d,ye).bind(this));I(this,z,0);I(this,D);$(this,"__previousContext");I(this,G);I(this,O,null);I(this,x,null);qe(Object.values(Xt)),this.setOutlet(e),this.subscribe()}setOutlet(e){e&&l(this,d,ge).call(this,e),b(this,D,e)}getOutlet(){return p(this,D)}async setRoutes(e,r=!1){return this.__previousContext=void 0,b(this,G,void 0),He(e),super.setRoutes(e),r||l(this,d,ye).call(this),await this.ready}addRoutes(e){return He(e),super.addRoutes(e)}async render(e,r=!1){b(this,z,p(this,z)+1);const a=p(this,z),i={...Ke,...M(e)?{hash:"",search:"",pathname:e}:e,__renderId:a};return this.ready=l(this,d,ke).call(this,i,r),await this.ready}subscribe(){window.addEventListener("vaadin-router-go",p(this,k))}unsubscribe(){window.removeEventListener("vaadin-router-go",p(this,k))}static setTriggers(...e){qe(e)}urlForName(e,r){return p(this,G)||b(this,G,It(this,{cacheKeyProvider(a){return"component"in a&&typeof a.component=="string"?a.component:void 0}})),re(p(this,G).call(this,e,r!=null?r:void 0),this)}urlForPath(e,r){return re(be(e)(r!=null?r:void 0),this)}static go(e){const{pathname:r,search:a,hash:i}=M(e)?new URL(e,"http://a"):e;return J("go",{pathname:r,search:a,hash:i})}}Z=new WeakMap,K=new WeakMap,k=new WeakMap,z=new WeakMap,D=new WeakMap,G=new WeakMap,O=new WeakMap,x=new WeakMap,d=new WeakSet,Ze=async function(e){const{route:r}=e;if(X(r.children)){let i=await r.children(Dt(e));X(r.children)||({children:i}=r),Bt(i,r)}const a={component:i=>{const c=document.createElement(i);return p(this,K).add(c),c},prevent:Y,redirect:i=>Ve(e,i)};return await Promise.resolve().then(async()=>{if(l(this,d,H).call(this,e))return await ie(r.action,r,e,a)}).then(i=>{if(i!=null&&(typeof i=="object"||typeof i=="symbol")&&(i instanceof HTMLElement||i===B||W(i)&&"redirect"in i))return i;if(M(r.redirect))return a.redirect(r.redirect)}).then(i=>{if(i!=null)return i;if(M(r.component))return a.component(r.component)})},ke=async function(e,r){var i,c;const{__renderId:a}=e;try{const s=await this.resolve(e),u=await l(this,d,ae).call(this,s);if(!l(this,d,H).call(this,u))return this.location;const h=this.__previousContext;if(u===h)return l(this,d,oe).call(this,h,!0),this.location;if(this.location=L(u),r&&l(this,d,oe).call(this,u,a===1),J("location-changed",{router:this,location:this.location}),u.__skipAttach)return l(this,d,we).call(this,u,h),this.__previousContext=u,this.location;l(this,d,nt).call(this,u,h);const f=l(this,d,ct).call(this,u);if(l(this,d,ot).call(this,u),l(this,d,at).call(this,u,h),await f,l(this,d,H).call(this,u))return l(this,d,rt).call(this),this.__previousContext=u,this.location}catch(s){if(a===p(this,z)){r&&l(this,d,oe).call(this,this.context);for(const u of(c=(i=p(this,D))==null?void 0:i.children)!=null?c:[])u.remove();throw this.location=L(Object.assign(e,{resolver:this})),J("error",{router:this,error:s,...e}),s}}return this.location},ae=async function(e,r=e){var o;const a=await l(this,d,he).call(this,r),c=a!==r?a:e,u=re(De((o=a.chain)!=null?o:[]),this)===a.pathname,h=async(m,v=m.route,_)=>{const y=await m.next(!1,v,_);return y===null||y===B?u?m:v.parent!=null?await h(m,v.parent,y):y:y},f=await h(a);if(f==null||f===B)throw Te(c);return f!==a?await l(this,d,ae).call(this,c,f):await l(this,d,et).call(this,a)},he=async function(e){const{result:r}=e;if(r instanceof HTMLElement)return Wt(e,r),e;if(r&&"redirect"in r){const a=await l(this,d,ve).call(this,r.redirect,e.__redirectCount,e.__renderId);return await l(this,d,he).call(this,a)}throw r instanceof Error?r:new Error(N('Invalid route resolution result for path "'.concat(e.pathname,'". Expected redirect object or HTML element, but got: "').concat(jt(r),'". Double check the action return value for the route.')))},et=async function(e){return await l(this,d,tt).call(this,e).then(async r=>r===this.__previousContext||r===e?r:await l(this,d,ae).call(this,r))},tt=async function(e){var u,h,f;const r=(u=this.__previousContext)!=null?u:{},a=(h=r.chain)!=null?h:[],i=(f=e.chain)!=null?f:[];let c=Promise.resolve(void 0);const s=o=>Ve(e,o);if(e.__divergedChainIndex=0,e.__skipAttach=!1,a.length){for(let o=0;o<Math.min(a.length,i.length)&&!(a[o].route!==i[o].route||a[o].path!==i[o].path&&a[o].element!==i[o].element||!l(this,d,me).call(this,a[o].element,i[o].element));e.__divergedChainIndex++,o++);if(e.__skipAttach=i.length===a.length&&e.__divergedChainIndex===i.length&&l(this,d,me).call(this,e.result,r.result),e.__skipAttach){for(let o=i.length-1;o>=0;o--)c=l(this,d,le).call(this,c,e,{prevent:Y},a[o]);for(let o=0;o<i.length;o++)c=l(this,d,pe).call(this,c,e,{prevent:Y,redirect:s},i[o]),a[o].element.location=L(e,a[o].route)}else for(let o=a.length-1;o>=e.__divergedChainIndex;o--)c=l(this,d,le).call(this,c,e,{prevent:Y},a[o])}if(!e.__skipAttach)for(let o=0;o<i.length;o++)o<e.__divergedChainIndex?o<a.length&&a[o].element&&(a[o].element.location=L(e,a[o].route)):(c=l(this,d,pe).call(this,c,e,{prevent:Y,redirect:s},i[o]),i[o].element&&(i[o].element.location=L(e,i[o].route)));return await c.then(async o=>{if(o&&W(o)){if("cancel"in o&&this.__previousContext)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if("redirect"in o)return await l(this,d,ve).call(this,o.redirect,e.__redirectCount,e.__renderId)}return e})},le=async function(e,r,a,i){const c=L(r);let s=await e;if(l(this,d,H).call(this,r)&&(s=We("onBeforeLeave",i.element,c,a,this)(s)),!(W(s)&&"redirect"in s))return s},pe=async function(e,r,a,i){const c=L(r,i.route),s=await e;if(l(this,d,H).call(this,r))return We("onBeforeEnter",i.element,c,a,this)(s)},me=function(e,r){return e instanceof Element&&r instanceof Element?p(this,K).has(e)&&p(this,K).has(r)?e.localName===r.localName:e===r:!1},H=function(e){return e.__renderId===p(this,z)},ve=async function(e,r=0,a=0){if(r>Jt)throw new Error(N("Too many redirects when rendering ".concat(e.from)));return await this.resolve({...Ke,pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:r+1,__renderId:a})},ge=function(e=p(this,D)){if(!(e instanceof Element||e instanceof DocumentFragment))throw new TypeError(N("Expected router outlet to be a valid DOM Element | DocumentFragment (but got ".concat(e,")")))},oe=function({pathname:e,search:r="",hash:a=""},i){if(window.location.pathname!==e||window.location.search!==r||window.location.hash!==a){const c=i?"replaceState":"pushState";window.history[c](null,document.title,e+r+a),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}},we=function(e,r){var i,c;let a=p(this,D);for(let s=0;s<((i=e.__divergedChainIndex)!=null?i:0);s++){const u=(c=r==null?void 0:r.chain)==null?void 0:c[s].element;if(u)if(u.parentNode===a)e.chain[s].element=u,a=u;else break}return a},nt=function(e,r){var c,s,u,h;l(this,d,ge).call(this),l(this,d,it).call(this);const a=l(this,d,we).call(this,e,r);b(this,O,[]),b(this,x,Array.from((c=a==null?void 0:a.children)!=null?c:[]).filter(f=>p(this,Z).has(f)&&f!==e.result));let i=a;for(let f=(s=e.__divergedChainIndex)!=null?s:0;f<((h=(u=e.chain)==null?void 0:u.length)!=null?h:0);f++){const o=e.chain[f].element;o&&(i==null||i.appendChild(o),p(this,Z).add(o),i===a&&p(this,O).push(o),i=o)}},rt=function(){if(p(this,x))for(const e of p(this,x))e.remove();b(this,x,null),b(this,O,null)},it=function(){if(p(this,x)&&p(this,O)){for(const e of p(this,O))e.remove();b(this,x,null),b(this,O,null)}},at=function(e,r){var a;if(!(!(r!=null&&r.chain)||e.__divergedChainIndex==null))for(let i=r.chain.length-1;i>=e.__divergedChainIndex&&l(this,d,H).call(this,e);i--){const c=r.chain[i].element;if(c)try{const s=L(e);ie(c.onAfterLeave,c,s,{},this)}finally{if((a=p(this,x))!=null&&a.includes(c))for(const s of c.children)s.remove()}}},ot=function(e){if(!(!e.chain||e.__divergedChainIndex==null))for(let r=e.__divergedChainIndex;r<e.chain.length&&l(this,d,H).call(this,e);r++){const a=e.chain[r].element;if(a){const i=L(e,e.chain[r].route);ie(a.onAfterEnter,a,i,{},this)}}},ct=async function(e){var u,h;const r=(u=p(this,x))==null?void 0:u[0],a=(h=p(this,O))==null?void 0:h[0],i=[],{chain:c=[]}=e;let s;for(let f=c.length-1;f>=0;f--)if(c[f].route.animate){s=c[f].route.animate;break}if(r&&a&&s){const f=W(s)&&s.leave?s.leave:"leaving",o=W(s)&&s.enter?s.enter:"entering";i.push(Fe(r,f)),i.push(Fe(a,o))}return await Promise.all(i),e},ye=function(e){const{pathname:r,search:a,hash:i}=e instanceof CustomEvent?e.detail:window.location;M(this.__normalizePathname(r))&&(e!=null&&e.preventDefault&&e.preventDefault(),this.render({pathname:r,search:a,hash:i},!0))};var Qe=Object.freeze,Zt=Object.defineProperty,kt=(t,n)=>Qe(Zt(t,"raw",{value:Qe(t.slice())})),Xe;class en extends Ee{render(){return Re(Xe||(Xe=kt(["<h1>Welcome to the Home Page</h1>"])))}}customElements.define("home-page",en);var Je=Object.freeze,tn=Object.defineProperty,nn=(t,n)=>Je(tn(t,"raw",{value:Je(t.slice())})),Ye;class rn extends Ee{firstUpdated(){new Yt(this.shadowRoot.getElementById("outlet")).setRoutes([{path:"/",component:"home-page"},{path:"/about",component:"about-page"},{path:"/contact",component:"contact-page"}])}render(){return Re(Ye||(Ye=nn(['\n      <nav>\n        <a href="/">Home</a>\n        <a href="/about">About</a>\n        <a href="/contact">Contact</a>\n      </nav>\n      <div id="outlet"></div>\n    '])))}}customElements.define("app-index",rn);
