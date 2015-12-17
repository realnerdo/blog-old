/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
/*!
	Autosize 3.0.14
	license: MIT
	http://www.jacklmoore.com/autosize
*/
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","module"],t);else if("undefined"!=typeof exports&&"undefined"!=typeof module)t(exports,module);else{var n={exports:{}};t(n.exports,n),e.autosize=n.exports}}(this,function(e,t){"use strict";function n(e){function t(){var t=window.getComputedStyle(e,null);c=t.overflowY,"vertical"===t.resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),f="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(f)&&(f=0),i()}function n(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,c=t,u&&(e.style.overflowY=t),o()}function o(){var t=window.pageYOffset,n=document.body.scrollTop,o=e.style.height;e.style.height="auto";var i=e.scrollHeight+f;return 0===e.scrollHeight?void(e.style.height=o):(e.style.height=i+"px",v=e.clientWidth,document.documentElement.scrollTop=t,void(document.body.scrollTop=n))}function i(){var t=e.style.height;o();var i=window.getComputedStyle(e,null);if(i.height!==e.style.height?"visible"!==c&&n("visible"):"hidden"!==c&&n("hidden"),t!==e.style.height){var r=document.createEvent("Event");r.initEvent("autosize:resized",!0,!1),e.dispatchEvent(r)}}var d=void 0===arguments[1]?{}:arguments[1],s=d.setOverflowX,l=void 0===s?!0:s,a=d.setOverflowY,u=void 0===a?!0:a;if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!r.has(e)){var f=null,c=null,v=e.clientWidth,p=function(){e.clientWidth!==v&&i()},h=function(t){window.removeEventListener("resize",p,!1),e.removeEventListener("input",i,!1),e.removeEventListener("keyup",i,!1),e.removeEventListener("autosize:destroy",h,!1),e.removeEventListener("autosize:update",i,!1),r["delete"](e),Object.keys(t).forEach(function(n){e.style[n]=t[n]})}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",h,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",i,!1),window.addEventListener("resize",p,!1),e.addEventListener("input",i,!1),e.addEventListener("autosize:update",i,!1),r.add(e),l&&(e.style.overflowX="hidden",e.style.wordWrap="break-word"),t()}}function o(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName){var t=document.createEvent("Event");t.initEvent("autosize:destroy",!0,!1),e.dispatchEvent(t)}}function i(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName){var t=document.createEvent("Event");t.initEvent("autosize:update",!0,!1),e.dispatchEvent(t)}}var r="function"==typeof Set?new Set:function(){var e=[];return{has:function(t){return Boolean(e.indexOf(t)>-1)},add:function(t){e.push(t)},"delete":function(t){e.splice(e.indexOf(t),1)}}}(),d=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?(d=function(e){return e},d.destroy=function(e){return e},d.update=function(e){return e}):(d=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return n(e,t)}),e},d.destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],o),e},d.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],i),e}),t.exports=d});
"classList"in document.createElement("_")||!function(a){"use strict";if("Element"in a){var b="classList",c="prototype",d=a.Element[c],e=Object,f=String[c].trim||function(){return this.replace(/^\s+|\s+$/g,"")},g=Array[c].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1},h=function(a,b){this.name=a,this.code=DOMException[a],this.message=b},i=function(a,b){if(""===b)throw new h("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(b))throw new h("INVALID_CHARACTER_ERR","String contains an invalid character");return g.call(a,b)},j=function(a){for(var b=f.call(a.getAttribute("class")||""),c=b?b.split(/\s+/):[],d=0,e=c.length;e>d;d++)this.push(c[d]);this._updateClassName=function(){a.setAttribute("class",this.toString())}},k=j[c]=[],l=function(){return new j(this)};if(h[c]=Error[c],k.item=function(a){return this[a]||null},k.contains=function(a){return a+="",-1!==i(this,a)},k.add=function(){var a,b=arguments,c=0,d=b.length,e=!1;do a=b[c]+"",-1===i(this,a)&&(this.push(a),e=!0);while(++c<d);e&&this._updateClassName()},k.remove=function(){var a,b,c=arguments,d=0,e=c.length,f=!1;do for(a=c[d]+"",b=i(this,a);-1!==b;)this.splice(b,1),f=!0,b=i(this,a);while(++d<e);f&&this._updateClassName()},k.toggle=function(a,b){a+="";var c=this.contains(a),d=c?b!==!0&&"remove":b!==!1&&"add";return d&&this[d](a),b===!0||b===!1?b:!c},k.toString=function(){return this.join(" ")},e.defineProperty){var m={get:l,enumerable:!0,configurable:!0};try{e.defineProperty(d,b,m)}catch(n){-2146823252===n.number&&(m.enumerable=!1,e.defineProperty(d,b,m))}}else e[c].__defineGetter__&&d.__defineGetter__(b,l)}}(self),function(a){"use strict";if(a.URL=a.URL||a.webkitURL,a.Blob&&a.URL)try{return void new Blob}catch(b){}var c=a.BlobBuilder||a.WebKitBlobBuilder||a.MozBlobBuilder||function(a){var b=function(a){return Object.prototype.toString.call(a).match(/^\[object\s(.*)\]$/)[1]},c=function(){this.data=[]},d=function(a,b,c){this.data=a,this.size=a.length,this.type=b,this.encoding=c},e=c.prototype,f=d.prototype,g=a.FileReaderSync,h=function(a){this.code=this[this.name=a]},i="NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "),j=i.length,k=a.URL||a.webkitURL||a,l=k.createObjectURL,m=k.revokeObjectURL,n=k,o=a.btoa,p=a.atob,q=a.ArrayBuffer,r=a.Uint8Array,s=/^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;for(d.fake=f.fake=!0;j--;)h.prototype[i[j]]=j+1;return k.createObjectURL||(n=a.URL=function(a){var b,c=document.createElementNS("http://www.w3.org/1999/xhtml","a");return c.href=a,"origin"in c||("data:"===c.protocol.toLowerCase()?c.origin=null:(b=a.match(s),c.origin=b&&b[1])),c}),n.createObjectURL=function(a){var b,c=a.type;return null===c&&(c="application/octet-stream"),a instanceof d?(b="data:"+c,"base64"===a.encoding?b+";base64,"+a.data:"URI"===a.encoding?b+","+decodeURIComponent(a.data):o?b+";base64,"+o(a.data):b+","+encodeURIComponent(a.data)):l?l.call(k,a):void 0},n.revokeObjectURL=function(a){"data:"!==a.substring(0,5)&&m&&m.call(k,a)},e.append=function(a){var c=this.data;if(r&&(a instanceof q||a instanceof r)){for(var e="",f=new r(a),i=0,j=f.length;j>i;i++)e+=String.fromCharCode(f[i]);c.push(e)}else if("Blob"===b(a)||"File"===b(a)){if(!g)throw new h("NOT_READABLE_ERR");var k=new g;c.push(k.readAsBinaryString(a))}else a instanceof d?"base64"===a.encoding&&p?c.push(p(a.data)):"URI"===a.encoding?c.push(decodeURIComponent(a.data)):"raw"===a.encoding&&c.push(a.data):("string"!=typeof a&&(a+=""),c.push(unescape(encodeURIComponent(a))))},e.getBlob=function(a){return arguments.length||(a=null),new d(this.data.join(""),a,"raw")},e.toString=function(){return"[object BlobBuilder]"},f.slice=function(a,b,c){var e=arguments.length;return 3>e&&(c=null),new d(this.data.slice(a,e>1?b:this.data.length),c,this.encoding)},f.toString=function(){return"[object Blob]"},f.close=function(){this.size=0,delete this.data},c}(a);a.Blob=function(a,b){var d=b?b.type||"":"",e=new c;if(a)for(var f=0,g=a.length;g>f;f++)Uint8Array&&a[f]instanceof Uint8Array?e.append(a[f].buffer):e.append(a[f]);var h=e.getBlob(d);return!h.slice&&h.webkitSlice&&(h.slice=h.webkitSlice),h};var d=Object.getPrototypeOf||function(a){return a.__proto__};a.Blob.prototype=d(new a.Blob)}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content||this),function(a,b){"use strict";"object"==typeof module?module.exports=b:"function"==typeof define&&define.amd?define(function(){return b}):a.MediumEditor=b}(this,function(){"use strict";function a(a,b){return this.init(a,b)}return a.extensions={},function(b){function c(a,b){var c,d=Array.prototype.slice.call(arguments,2);b=b||{};for(var e=0;e<d.length;e++){var f=d[e];if(f)for(c in f)f.hasOwnProperty(c)&&"undefined"!=typeof f[c]&&(a||b.hasOwnProperty(c)===!1)&&(b[c]=f[c])}return b}var d=!1;try{var e=document.createElement("div"),f=document.createTextNode(" ");e.appendChild(f),d=e.contains(f)}catch(g){}var h={isIE:"Microsoft Internet Explorer"===navigator.appName||"Netscape"===navigator.appName&&null!==new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(navigator.userAgent),isMac:b.navigator.platform.toUpperCase().indexOf("MAC")>=0,keyCode:{BACKSPACE:8,TAB:9,ENTER:13,ESCAPE:27,SPACE:32,DELETE:46,K:75,M:77},isMetaCtrlKey:function(a){return h.isMac&&a.metaKey||!h.isMac&&a.ctrlKey?!0:!1},isKey:function(a,b){var c=h.getKeyCode(a);return!1===Array.isArray(b)?c===b:-1===b.indexOf(c)?!1:!0},getKeyCode:function(a){var b=a.which;return null===b&&(b=null!==a.charCode?a.charCode:a.keyCode),b},blockContainerElementNames:["p","h1","h2","h3","h4","h5","h6","blockquote","pre","ul","li","ol","address","article","aside","audio","canvas","dd","dl","dt","fieldset","figcaption","figure","footer","form","header","hgroup","main","nav","noscript","output","section","video","table","thead","tbody","tfoot","tr","th","td"],emptyElementNames:["br","col","colgroup","hr","img","input","source","wbr"],extend:function(){var a=[!0].concat(Array.prototype.slice.call(arguments));return c.apply(this,a)},defaults:function(){var a=[!1].concat(Array.prototype.slice.call(arguments));return c.apply(this,a)},createLink:function(a,b,c,d){var e=a.createElement("a");return h.moveTextRangeIntoElement(b[0],b[b.length-1],e),e.setAttribute("href",c),d&&e.setAttribute("target",d),e},findOrCreateMatchingTextNodes:function(a,b,c){for(var d=a.createTreeWalker(b,NodeFilter.SHOW_TEXT,null,!1),e=[],f=0,g=!1,i=null,j=null;null!==(i=d.nextNode())&&(!g&&c.start<f+i.nodeValue.length&&(g=!0,j=h.splitStartNodeIfNeeded(i,c.start,f)),g&&h.splitEndNodeIfNeeded(i,j,c.end,f),!g||f!==c.end);){if(g&&f>c.end+1)throw new Error("PerformLinking overshot the target!");g&&e.push(j||i),f+=i.nodeValue.length,null!==j&&(f+=j.nodeValue.length,d.nextNode()),j=null}return e},splitStartNodeIfNeeded:function(a,b,c){return b!==c?a.splitText(b-c):null},splitEndNodeIfNeeded:function(a,b,c,d){var e,f;e=d+(b||a).nodeValue.length+(b?a.nodeValue.length:0)-1,f=(b||a).nodeValue.length-(e+1-c),e>=c&&d!==e&&0!==f&&(b||a).splitText(f)},splitByBlockElements:function(b){var c=[],d=a.util.blockContainerElementNames.join(",");if(3===b.nodeType||0===b.querySelectorAll(d).length)return[b];for(var e=0;e<b.childNodes.length;e++){var f=b.childNodes[e];if(3===f.nodeType)c.push(f);else{var g=f.querySelectorAll(d);0===g.length?c.push(f):c=c.concat(a.util.splitByBlockElements(f))}}return c},findAdjacentTextNodeWithContent:function(a,b,c){var d,e=!1,f=c.createNodeIterator(a,NodeFilter.SHOW_TEXT,null,!1);for(d=f.nextNode();d;){if(d===b)e=!0;else if(e&&3===d.nodeType&&d.nodeValue&&d.nodeValue.trim().length>0)break;d=f.nextNode()}return d},isDescendant:function(a,b,c){if(!a||!b)return!1;if(a===b)return!!c;if(1!==a.nodeType)return!1;if(d||3!==b.nodeType)return a.contains(b);for(var e=b.parentNode;null!==e;){if(e===a)return!0;e=e.parentNode}return!1},isElement:function(a){return!(!a||1!==a.nodeType)},throttle:function(a,b){var c,d,e,f=50,g=null,h=0,i=function(){h=Date.now(),g=null,e=a.apply(c,d),g||(c=d=null)};return b||0===b||(b=f),function(){var f=Date.now(),j=b-(f-h);return c=this,d=arguments,0>=j||j>b?(g&&(clearTimeout(g),g=null),h=f,e=a.apply(c,d),g||(c=d=null)):g||(g=setTimeout(i,j)),e}},traverseUp:function(a,b){if(!a)return!1;do{if(1===a.nodeType){if(b(a))return a;if(h.isMediumEditorElement(a))return!1}a=a.parentNode}while(a);return!1},htmlEntities:function(a){return String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},insertHTMLCommand:function(a,b){var c,d,e,f,g,i,j;if(a.queryCommandSupported("insertHTML"))try{return a.execCommand("insertHTML",!1,b)}catch(k){}if(c=a.getSelection(),c.rangeCount){if(d=c.getRangeAt(0),j=d.commonAncestorContainer,h.isMediumEditorElement(j)&&!j.firstChild)d.selectNode(j.appendChild(a.createTextNode("")));else if(3===j.nodeType&&0===d.startOffset&&d.endOffset===j.nodeValue.length||3!==j.nodeType&&j.innerHTML===d.toString()){for(;!h.isMediumEditorElement(j)&&j.parentNode&&1===j.parentNode.childNodes.length&&!h.isMediumEditorElement(j.parentNode);)j=j.parentNode;d.selectNode(j)}for(d.deleteContents(),e=a.createElement("div"),e.innerHTML=b,f=a.createDocumentFragment();e.firstChild;)g=e.firstChild,i=f.appendChild(g);d.insertNode(f),i&&(d=d.cloneRange(),d.setStartAfter(i),d.collapse(!0),c.removeAllRanges(),c.addRange(d))}},execFormatBlock:function(b,c){var d=h.getTopBlockContainer(a.selection.getSelectionStart(b));if("blockquote"===c){if(d){var e=Array.prototype.slice.call(d.childNodes);if(e.some(function(a){return h.isBlockContainer(a)}))return b.execCommand("outdent",!1,null)}if(h.isIE)return b.execCommand("indent",!1,c)}return d&&c===d.nodeName.toLowerCase()&&(c="p"),h.isIE&&(c="<"+c+">"),b.execCommand("formatBlock",!1,c)},setTargetBlank:function(a,b){var c,d=b||!1;if("a"===a.nodeName.toLowerCase())a.target="_blank";else for(a=a.getElementsByTagName("a"),c=0;c<a.length;c+=1)(!1===d||d===a[c].attributes.href.value)&&(a[c].target="_blank")},addClassToAnchors:function(a,b){var c,d,e=b.split(" ");if("a"===a.nodeName.toLowerCase())for(d=0;d<e.length;d+=1)a.classList.add(e[d]);else for(a=a.getElementsByTagName("a"),c=0;c<a.length;c+=1)for(d=0;d<e.length;d+=1)a[c].classList.add(e[d])},isListItem:function(a){if(!a)return!1;if("li"===a.nodeName.toLowerCase())return!0;for(var b=a.parentNode,c=b.nodeName.toLowerCase();"li"===c||!h.isBlockContainer(b)&&"div"!==c;){if("li"===c)return!0;if(b=b.parentNode,!b)return!1;c=b.nodeName.toLowerCase()}return!1},cleanListDOM:function(b,c){if("li"===c.nodeName.toLowerCase()){var d=c.parentElement;"p"===d.parentElement.nodeName.toLowerCase()&&(h.unwrap(d.parentElement,b),a.selection.moveCursor(b,c.firstChild,c.firstChild.textContent.length))}},splitOffDOMTree:function(a,b,c){for(var d=b,e=null,f=!c;d!==a;){var g,h=d.parentNode,i=h.cloneNode(!1),j=f?d:h.firstChild;for(e&&(f?i.appendChild(e):g=e),e=i;j;){var k=j.nextSibling;j===d?(j.hasChildNodes()?j=j.cloneNode(!1):j.parentNode.removeChild(j),j.textContent&&e.appendChild(j),j=f?k:null):(j.parentNode.removeChild(j),(j.hasChildNodes()||j.textContent)&&e.appendChild(j),j=k)}g&&e.appendChild(g),d=h}return e},moveTextRangeIntoElement:function(a,b,c){if(!a||!b)return!1;var d=h.findCommonRoot(a,b);if(!d)return!1;if(b===a){var e=a.parentNode,f=a.nextSibling;return e.removeChild(a),c.appendChild(a),f?e.insertBefore(c,f):e.appendChild(c),c.hasChildNodes()}for(var g,i,j,k=[],l=0;l<d.childNodes.length;l++)if(j=d.childNodes[l],g){if(h.isDescendant(j,b,!0)){i=j;break}k.push(j)}else h.isDescendant(j,a,!0)&&(g=j);var m=i.nextSibling,n=d.ownerDocument.createDocumentFragment();return g===a?(g.parentNode.removeChild(g),n.appendChild(g)):n.appendChild(h.splitOffDOMTree(g,a)),k.forEach(function(a){a.parentNode.removeChild(a),n.appendChild(a)}),i===b?(i.parentNode.removeChild(i),n.appendChild(i)):n.appendChild(h.splitOffDOMTree(i,b,!0)),c.appendChild(n),i.parentNode===d?d.insertBefore(c,i):m?d.insertBefore(c,m):d.appendChild(c),c.hasChildNodes()},depthOfNode:function(a){for(var b=0,c=a;null!==c.parentNode;)c=c.parentNode,b++;return b},findCommonRoot:function(a,b){for(var c=h.depthOfNode(a),d=h.depthOfNode(b),e=a,f=b;c!==d;)c>d?(e=e.parentNode,c-=1):(f=f.parentNode,d-=1);for(;e!==f;)e=e.parentNode,f=f.parentNode;return e},isElementAtBeginningOfBlock:function(a){for(var b,c;!h.isBlockContainer(a)&&!h.isMediumEditorElement(a);){for(c=a;c=c.previousSibling;)if(b=3===c.nodeType?c.nodeValue:c.textContent,b.length>0)return!1;a=a.parentNode}return!0},isMediumEditorElement:function(a){return a&&a.getAttribute&&!!a.getAttribute("data-medium-editor-element")},getContainerEditorElement:function(a){return h.traverseUp(a,function(a){return h.isMediumEditorElement(a)})},isBlockContainer:function(a){return a&&3!==a.nodeType&&-1!==h.blockContainerElementNames.indexOf(a.nodeName.toLowerCase())},getClosestBlockContainer:function(a){return h.traverseUp(a,function(a){return h.isBlockContainer(a)})},getTopBlockContainer:function(a){var b=a;return h.traverseUp(a,function(a){return h.isBlockContainer(a)&&(b=a),!1}),b},getFirstSelectableLeafNode:function(a){for(;a&&a.firstChild;)a=a.firstChild;if(a=h.traverseUp(a,function(a){return-1===h.emptyElementNames.indexOf(a.nodeName.toLowerCase())}),"table"===a.nodeName.toLowerCase()){var b=a.querySelector("th, td");b&&(a=b)}return a},getFirstTextNode:function(a){if(3===a.nodeType)return a;for(var b=0;b<a.childNodes.length;b++){var c=h.getFirstTextNode(a.childNodes[b]);if(null!==c)return c}return null},ensureUrlHasProtocol:function(a){return-1===a.indexOf("://")?"http://"+a:a},warn:function(){void 0!==b.console&&"function"==typeof b.console.warn&&b.console.warn.apply(b.console,arguments)},deprecated:function(a,b,c){var d=a+" is deprecated, please use "+b+" instead.";c&&(d+=" Will be removed in "+c),h.warn(d)},deprecatedMethod:function(a,b,c,d){h.deprecated(a,b,d),"function"==typeof this[b]&&this[b].apply(this,c)},cleanupAttrs:function(a,b){b.forEach(function(b){a.removeAttribute(b)})},cleanupTags:function(a,b){b.forEach(function(b){a.nodeName.toLowerCase()===b&&a.parentNode.removeChild(a)})},getClosestTag:function(a,b){return h.traverseUp(a,function(a){return a.nodeName.toLowerCase()===b.toLowerCase()})},unwrap:function(a,b){for(var c=b.createDocumentFragment(),d=Array.prototype.slice.call(a.childNodes),e=0;e<d.length;e++)c.appendChild(d[e]);c.childNodes.length?a.parentNode.replaceChild(c,a):a.parentNode.removeChild(a)}};a.util=h}(window),function(){var b=function(b){a.util.extend(this,b)};b.extend=function(b){var c,d=this;c=b&&b.hasOwnProperty("constructor")?b.constructor:function(){return d.apply(this,arguments)},a.util.extend(c,d);var e=function(){this.constructor=c};return e.prototype=d.prototype,c.prototype=new e,b&&a.util.extend(c.prototype,b),c},b.prototype={init:function(){},base:void 0,name:void 0,checkState:void 0,destroy:void 0,queryCommandState:void 0,isActive:void 0,isAlreadyApplied:void 0,setActive:void 0,setInactive:void 0,window:void 0,document:void 0,getEditorElements:function(){return this.base.elements},getEditorId:function(){return this.base.id},getEditorOption:function(a){return this.base.options[a]}},["execAction","on","off","subscribe","trigger"].forEach(function(a){b.prototype[a]=function(){return this.base[a].apply(this.base,arguments)}}),a.Extension=b}(),function(){function b(b){return a.util.isBlockContainer(b)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}var c={findMatchingSelectionParent:function(b,c){var d,e,f=c.getSelection();return 0===f.rangeCount?!1:(d=f.getRangeAt(0),e=d.commonAncestorContainer,a.util.traverseUp(e,b))},getSelectionElement:function(b){return this.findMatchingSelectionParent(function(b){return a.util.isMediumEditorElement(b)},b)},exportSelection:function(a,b){if(!a)return null;var c=null,d=b.getSelection();if(d.rangeCount>0){var e,f=d.getRangeAt(0),g=f.cloneRange();if(g.selectNodeContents(a),g.setEnd(f.startContainer,f.startOffset),e=g.toString().length,c={start:e,end:e+f.toString().length},0!==e){var h=this.getIndexRelativeToAdjacentEmptyBlocks(b,a,f.startContainer,f.startOffset);-1!==h&&(c.emptyBlocksIndex=h)}}return c},importSelection:function(a,b,c,d){if(a&&b){var e=c.createRange();e.setStart(b,0),e.collapse(!0);for(var f,g=b,h=[],i=0,j=!1,k=!1;!k&&g;){if(3===g.nodeType)f=i+g.length,!j&&a.start>=i&&a.start<=f&&(e.setStart(g,a.start-i),j=!0),j&&a.end>=i&&a.end<=f&&(e.setEnd(g,a.end-i),k=!0),i=f;else for(var l=g.childNodes.length-1;l>=0;)h.push(g.childNodes[l]),l-=1;k||(g=h.pop())}"undefined"!=typeof a.emptyBlocksIndex&&(e=this.importSelectionMoveCursorPastBlocks(c,b,a.emptyBlocksIndex,e)),d&&(e=this.importSelectionMoveCursorPastAnchor(a,e));var m=c.getSelection();m.removeAllRanges(),m.addRange(e)}},importSelectionMoveCursorPastAnchor:function(b,c){var d=function(a){return"a"===a.nodeName.toLowerCase()};if(b.start===b.end&&3===c.startContainer.nodeType&&c.startOffset===c.startContainer.nodeValue.length&&a.util.traverseUp(c.startContainer,d)){for(var e=c.startContainer,f=c.startContainer.parentNode;null!==f&&"a"!==f.nodeName.toLowerCase();)f.childNodes[f.childNodes.length-1]!==e?f=null:(e=f,f=f.parentNode);if(null!==f&&"a"===f.nodeName.toLowerCase()){for(var g=null,h=0;null===g&&h<f.parentNode.childNodes.length;h++)f.parentNode.childNodes[h]===f&&(g=h);c.setStart(f.parentNode,g+1),c.collapse(!0)}}return c},importSelectionMoveCursorPastBlocks:function(c,d,e,f){var g,h,i=c.createTreeWalker(d,NodeFilter.SHOW_ELEMENT,b,!1),j=f.startContainer,k=0;for(e=e||1,g=3===j.nodeType&&a.util.isBlockContainer(j.previousSibling)?j.previousSibling:a.util.getClosestBlockContainer(j);i.nextNode();)if(h){if(h=i.currentNode,k++,k===e)break;if(h.textContent.length>0)break}else g===i.currentNode&&(h=i.currentNode);return f.setStart(a.util.getFirstSelectableLeafNode(h),0),f},getIndexRelativeToAdjacentEmptyBlocks:function(c,d,e,f){if(e.textContent.length>0&&f>0)return-1;var g=e;if(3!==g.nodeType&&(g=e.childNodes[f]),g&&!a.util.isElementAtBeginningOfBlock(g))return-1;for(var h=a.util.getClosestBlockContainer(e),i=c.createTreeWalker(d,NodeFilter.SHOW_ELEMENT,b,!1),j=0;i.nextNode();){var k=""===i.currentNode.textContent;if((k||j>0)&&(j+=1),i.currentNode===h)return j;k||(j=0)}return j},selectionInContentEditableFalse:function(a){var b,c=this.findMatchingSelectionParent(function(a){var c=a&&a.getAttribute("contenteditable");return"true"===c&&(b=!0),"#text"!==a.nodeName&&"false"===c},a);return!b&&c},getSelectionHtml:function(a){var b,c,d,e="",f=a.getSelection();if(f.rangeCount){for(d=a.createElement("div"),b=0,c=f.rangeCount;c>b;b+=1)d.appendChild(f.getRangeAt(b).cloneContents());e=d.innerHTML}return e},getCaretOffsets:function(a,b){var c,d;return b||(b=window.getSelection().getRangeAt(0)),c=b.cloneRange(),d=b.cloneRange(),c.selectNodeContents(a),c.setEnd(b.endContainer,b.endOffset),d.selectNodeContents(a),d.setStart(b.endContainer,b.endOffset),{left:c.toString().length,right:d.toString().length}},rangeSelectsSingleNode:function(a){var b=a.startContainer;return b===a.endContainer&&b.hasChildNodes()&&a.endOffset===a.startOffset+1},getSelectedParentElement:function(a){return a?this.rangeSelectsSingleNode(a)&&3!==a.startContainer.childNodes[a.startOffset].nodeType?a.startContainer.childNodes[a.startOffset]:3===a.startContainer.nodeType?a.startContainer.parentNode:a.startContainer:null},getSelectedElements:function(a){var b,c,d,e=a.getSelection();if(!e.rangeCount||e.isCollapsed||!e.getRangeAt(0).commonAncestorContainer)return[];if(b=e.getRangeAt(0),3===b.commonAncestorContainer.nodeType){for(c=[],d=b.commonAncestorContainer;d.parentNode&&1===d.parentNode.childNodes.length;)c.push(d.parentNode),d=d.parentNode;return c}return[].filter.call(b.commonAncestorContainer.getElementsByTagName("*"),function(a){return"function"==typeof e.containsNode?e.containsNode(a,!0):!0})},selectNode:function(a,b){var c=b.createRange(),d=b.getSelection();c.selectNodeContents(a),d.removeAllRanges(),d.addRange(c)},select:function(a,b,c,d,e){a.getSelection().removeAllRanges();var f=a.createRange();return f.setStart(b,c),d?f.setEnd(d,e):f.collapse(!0),a.getSelection().addRange(f),f},moveCursor:function(a,b,c){this.select(a,b,c)},getSelectionRange:function(a){var b=a.getSelection();return 0===b.rangeCount?null:b.getRangeAt(0)},getSelectionStart:function(a){var b=a.getSelection().anchorNode,c=b&&3===b.nodeType?b.parentNode:b;return c}};a.selection=c}(),function(){var b=function(a){this.base=a,this.options=this.base.options,this.events=[],this.disabledEvents={},this.customEvents={},this.listeners={}};b.prototype={InputEventOnContenteditableSupported:!a.util.isIE,attachDOMEvent:function(a,b,c,d){a.addEventListener(b,c,d),this.events.push([a,b,c,d])},detachDOMEvent:function(a,b,c,d){var e,f=this.indexOfListener(a,b,c,d);-1!==f&&(e=this.events.splice(f,1)[0],e[0].removeEventListener(e[1],e[2],e[3]))},indexOfListener:function(a,b,c,d){var e,f,g;for(e=0,f=this.events.length;f>e;e+=1)if(g=this.events[e],g[0]===a&&g[1]===b&&g[2]===c&&g[3]===d)return e;return-1},detachAllDOMEvents:function(){for(var a=this.events.pop();a;)a[0].removeEventListener(a[1],a[2],a[3]),a=this.events.pop()},enableCustomEvent:function(a){void 0!==this.disabledEvents[a]&&delete this.disabledEvents[a]},disableCustomEvent:function(a){this.disabledEvents[a]=!0},attachCustomEvent:function(a,b){this.setupListener(a),this.customEvents[a]||(this.customEvents[a]=[]),this.customEvents[a].push(b)},detachCustomEvent:function(a,b){var c=this.indexOfCustomListener(a,b);-1!==c&&this.customEvents[a].splice(c,1)},indexOfCustomListener:function(a,b){return this.customEvents[a]&&this.customEvents[a].length?this.customEvents[a].indexOf(b):-1},detachAllCustomEvents:function(){this.customEvents={}},triggerCustomEvent:function(a,b,c){this.customEvents[a]&&!this.disabledEvents[a]&&this.customEvents[a].forEach(function(a){a(b,c)})},destroy:function(){this.detachAllDOMEvents(),this.detachAllCustomEvents(),this.detachExecCommand(),this.base.elements&&this.base.elements.forEach(function(a){a.removeAttribute("data-medium-focused")})},attachToExecCommand:function(){this.execCommandListener||(this.execCommandListener=function(a){this.handleDocumentExecCommand(a)}.bind(this),this.wrapExecCommand(),this.options.ownerDocument.execCommand.listeners.push(this.execCommandListener))},detachExecCommand:function(){var a=this.options.ownerDocument;if(this.execCommandListener&&a.execCommand.listeners){var b=a.execCommand.listeners.indexOf(this.execCommandListener);-1!==b&&a.execCommand.listeners.splice(b,1),a.execCommand.listeners.length||this.unwrapExecCommand()}},wrapExecCommand:function(){var a=this.options.ownerDocument;if(!a.execCommand.listeners){var b=function(b,c,d){var e=a.execCommand.orig.apply(this,arguments);if(!a.execCommand.listeners)return e;var f=Array.prototype.slice.call(arguments);return a.execCommand.listeners.forEach(function(a){a({command:b,value:d,args:f,result:e})}),e};b.orig=a.execCommand,b.listeners=[],a.execCommand=b}},unwrapExecCommand:function(){var a=this.options.ownerDocument;a.execCommand.orig&&(a.execCommand=a.execCommand.orig)},setupListener:function(a){if(!this.listeners[a]){switch(a){case"externalInteraction":this.attachDOMEvent(this.options.ownerDocument.body,"mousedown",this.handleBodyMousedown.bind(this),!0),this.attachDOMEvent(this.options.ownerDocument.body,"click",this.handleBodyClick.bind(this),!0),this.attachDOMEvent(this.options.ownerDocument.body,"focus",this.handleBodyFocus.bind(this),!0);break;case"blur":this.setupListener("externalInteraction");break;case"focus":this.setupListener("externalInteraction");break;case"editableInput":this.contentCache=[],this.base.elements.forEach(function(a){this.contentCache[a.getAttribute("medium-editor-index")]=a.innerHTML,this.InputEventOnContenteditableSupported&&this.attachDOMEvent(a,"input",this.handleInput.bind(this))}.bind(this)),this.InputEventOnContenteditableSupported||(this.setupListener("editableKeypress"),this.keypressUpdateInput=!0,this.attachDOMEvent(document,"selectionchange",this.handleDocumentSelectionChange.bind(this)),this.attachToExecCommand());break;case"editableClick":this.attachToEachElement("click",this.handleClick);break;case"editableBlur":this.attachToEachElement("blur",this.handleBlur);break;case"editableKeypress":this.attachToEachElement("keypress",this.handleKeypress);break;case"editableKeyup":this.attachToEachElement("keyup",this.handleKeyup);break;case"editableKeydown":this.attachToEachElement("keydown",this.handleKeydown);break;case"editableKeydownSpace":this.setupListener("editableKeydown");break;case"editableKeydownEnter":this.setupListener("editableKeydown");break;case"editableKeydownTab":this.setupListener("editableKeydown");break;case"editableKeydownDelete":this.setupListener("editableKeydown");break;case"editableMouseover":this.attachToEachElement("mouseover",this.handleMouseover);break;case"editableDrag":this.attachToEachElement("dragover",this.handleDragging),this.attachToEachElement("dragleave",this.handleDragging);break;case"editableDrop":this.attachToEachElement("drop",this.handleDrop);break;case"editablePaste":this.attachToEachElement("paste",this.handlePaste)}this.listeners[a]=!0}},attachToEachElement:function(a,b){this.base.elements.forEach(function(c){this.attachDOMEvent(c,a,b.bind(this))},this)},focusElement:function(a){a.focus(),this.updateFocus(a,{target:a,type:"focus"})},updateFocus:function(b,c){var d,e=this.base.getExtensionByName("toolbar"),f=e?e.getToolbarElement():null,g=this.base.getExtensionByName("anchor-preview"),h=g&&g.getPreviewElement?g.getPreviewElement():null,i=this.base.getFocusedElement();i&&"click"===c.type&&this.lastMousedownTarget&&(a.util.isDescendant(i,this.lastMousedownTarget,!0)||a.util.isDescendant(f,this.lastMousedownTarget,!0)||a.util.isDescendant(h,this.lastMousedownTarget,!0))&&(d=i),d||this.base.elements.some(function(c){return!d&&a.util.isDescendant(c,b,!0)&&(d=c),!!d},this);var j=!a.util.isDescendant(i,b,!0)&&!a.util.isDescendant(f,b,!0)&&!a.util.isDescendant(h,b,!0);d!==i&&(i&&j&&(i.removeAttribute("data-medium-focused"),this.triggerCustomEvent("blur",c,i)),d&&(d.setAttribute("data-medium-focused",!0),this.triggerCustomEvent("focus",c,d))),j&&this.triggerCustomEvent("externalInteraction",c)},updateInput:function(a,b){if(this.contentCache){var c=a.getAttribute("medium-editor-index");a.innerHTML!==this.contentCache[c]&&this.triggerCustomEvent("editableInput",b,a),this.contentCache[c]=a.innerHTML}},handleDocumentSelectionChange:function(b){if(b.currentTarget&&b.currentTarget.activeElement){var c,d=b.currentTarget.activeElement;this.base.elements.some(function(b){return a.util.isDescendant(b,d,!0)?(c=b,!0):!1},this),c&&this.updateInput(c,{target:d,currentTarget:c})}},handleDocumentExecCommand:function(){var a=this.base.getFocusedElement();a&&this.updateInput(a,{target:a,currentTarget:a})},handleBodyClick:function(a){this.updateFocus(a.target,a)},handleBodyFocus:function(a){this.updateFocus(a.target,a)},handleBodyMousedown:function(a){this.lastMousedownTarget=a.target},handleInput:function(a){this.updateInput(a.currentTarget,a)},handleClick:function(a){this.triggerCustomEvent("editableClick",a,a.currentTarget)},handleBlur:function(a){this.triggerCustomEvent("editableBlur",a,a.currentTarget)},handleKeypress:function(a){if(this.triggerCustomEvent("editableKeypress",a,a.currentTarget),this.keypressUpdateInput){var b={target:a.target,currentTarget:a.currentTarget};setTimeout(function(){this.updateInput(b.currentTarget,b)}.bind(this),0)}},handleKeyup:function(a){this.triggerCustomEvent("editableKeyup",a,a.currentTarget)},handleMouseover:function(a){this.triggerCustomEvent("editableMouseover",a,a.currentTarget)},handleDragging:function(a){this.triggerCustomEvent("editableDrag",a,a.currentTarget)},handleDrop:function(a){this.triggerCustomEvent("editableDrop",a,a.currentTarget)},handlePaste:function(a){this.triggerCustomEvent("editablePaste",a,a.currentTarget)},handleKeydown:function(b){return this.triggerCustomEvent("editableKeydown",b,b.currentTarget),a.util.isKey(b,a.util.keyCode.SPACE)?this.triggerCustomEvent("editableKeydownSpace",b,b.currentTarget):a.util.isKey(b,a.util.keyCode.ENTER)||b.ctrlKey&&a.util.isKey(b,a.util.keyCode.M)?this.triggerCustomEvent("editableKeydownEnter",b,b.currentTarget):a.util.isKey(b,a.util.keyCode.TAB)?this.triggerCustomEvent("editableKeydownTab",b,b.currentTarget):a.util.isKey(b,[a.util.keyCode.DELETE,a.util.keyCode.BACKSPACE])?this.triggerCustomEvent("editableKeydownDelete",b,b.currentTarget):void 0}},a.Events=b}(),function(){var b=a.Extension.extend({action:void 0,aria:void 0,tagNames:void 0,style:void 0,useQueryState:void 0,contentDefault:void 0,contentFA:void 0,classList:void 0,attrs:void 0,constructor:function(c){b.isBuiltInButton(c)?a.Extension.call(this,this.defaults[c]):a.Extension.call(this,c)},init:function(){a.Extension.prototype.init.apply(this,arguments),this.button=this.createButton(),this.on(this.button,"click",this.handleClick.bind(this))},getButton:function(){return this.button},getAction:function(){return"function"==typeof this.action?this.action(this.base.options):this.action},getAria:function(){return"function"==typeof this.aria?this.aria(this.base.options):this.aria},getTagNames:function(){return"function"==typeof this.tagNames?this.tagNames(this.base.options):this.tagNames},createButton:function(){var a=this.document.createElement("button"),b=this.contentDefault,c=this.getAria(),d=this.getEditorOption("buttonLabels");return a.classList.add("medium-editor-action"),a.classList.add("medium-editor-action-"+this.name),this.classList&&this.classList.forEach(function(b){a.classList.add(b)}),a.setAttribute("data-action",this.getAction()),c&&(a.setAttribute("title",c),a.setAttribute("aria-label",c)),this.attrs&&Object.keys(this.attrs).forEach(function(b){a.setAttribute(b,this.attrs[b])},this),"fontawesome"===d&&this.contentFA&&(b=this.contentFA),a.innerHTML=b,a},handleClick:function(a){a.preventDefault(),a.stopPropagation();var b=this.getAction();b&&this.execAction(b)},isActive:function(){return this.button.classList.contains(this.getEditorOption("activeButtonClass"))},setInactive:function(){this.button.classList.remove(this.getEditorOption("activeButtonClass")),delete this.knownState},setActive:function(){this.button.classList.add(this.getEditorOption("activeButtonClass")),delete this.knownState},queryCommandState:function(){var a=null;return this.useQueryState&&(a=this.base.queryCommandState(this.getAction())),a},isAlreadyApplied:function(a){var b,c,d=!1,e=this.getTagNames();return this.knownState===!1||this.knownState===!0?this.knownState:(e&&e.length>0&&(d=-1!==e.indexOf(a.nodeName.toLowerCase())),!d&&this.style&&(b=this.style.value.split("|"),c=this.window.getComputedStyle(a,null).getPropertyValue(this.style.prop),b.forEach(function(a){this.knownState||(d=-1!==c.indexOf(a),(d||"text-decoration"!==this.style.prop)&&(this.knownState=d))},this)),d)}});b.isBuiltInButton=function(b){return"string"==typeof b&&a.extensions.button.prototype.defaults.hasOwnProperty(b)},a.extensions.button=b}(),function(){a.extensions.button.prototype.defaults={bold:{name:"bold",action:"bold",aria:"bold",tagNames:["b","strong"],style:{prop:"font-weight",value:"700|bold"},useQueryState:!0,contentDefault:"<b>B</b>",contentFA:'<i class="fa fa-bold"></i>'},italic:{name:"italic",action:"italic",aria:"italic",tagNames:["i","em"],style:{prop:"font-style",value:"italic"},useQueryState:!0,contentDefault:"<b><i>I</i></b>",contentFA:'<i class="fa fa-italic"></i>'},underline:{name:"underline",action:"underline",aria:"underline",tagNames:["u"],style:{prop:"text-decoration",value:"underline"},useQueryState:!0,contentDefault:"<b><u>U</u></b>",contentFA:'<i class="fa fa-underline"></i>'},strikethrough:{name:"strikethrough",action:"strikethrough",aria:"strike through",tagNames:["strike"],style:{prop:"text-decoration",value:"line-through"},useQueryState:!0,contentDefault:"<s>A</s>",contentFA:'<i class="fa fa-strikethrough"></i>'},superscript:{name:"superscript",action:"superscript",
aria:"superscript",tagNames:["sup"],contentDefault:"<b>x<sup>1</sup></b>",contentFA:'<i class="fa fa-superscript"></i>'},subscript:{name:"subscript",action:"subscript",aria:"subscript",tagNames:["sub"],contentDefault:"<b>x<sub>1</sub></b>",contentFA:'<i class="fa fa-subscript"></i>'},image:{name:"image",action:"image",aria:"image",tagNames:["img"],contentDefault:"<b>image</b>",contentFA:'<i class="fa fa-picture-o"></i>'},orderedlist:{name:"orderedlist",action:"insertorderedlist",aria:"ordered list",tagNames:["ol"],useQueryState:!0,contentDefault:"<b>1.</b>",contentFA:'<i class="fa fa-list-ol"></i>'},unorderedlist:{name:"unorderedlist",action:"insertunorderedlist",aria:"unordered list",tagNames:["ul"],useQueryState:!0,contentDefault:"<b>&bull;</b>",contentFA:'<i class="fa fa-list-ul"></i>'},indent:{name:"indent",action:"indent",aria:"indent",tagNames:[],contentDefault:"<b>&rarr;</b>",contentFA:'<i class="fa fa-indent"></i>'},outdent:{name:"outdent",action:"outdent",aria:"outdent",tagNames:[],contentDefault:"<b>&larr;</b>",contentFA:'<i class="fa fa-outdent"></i>'},justifyCenter:{name:"justifyCenter",action:"justifyCenter",aria:"center justify",tagNames:[],style:{prop:"text-align",value:"center"},contentDefault:"<b>C</b>",contentFA:'<i class="fa fa-align-center"></i>'},justifyFull:{name:"justifyFull",action:"justifyFull",aria:"full justify",tagNames:[],style:{prop:"text-align",value:"justify"},contentDefault:"<b>J</b>",contentFA:'<i class="fa fa-align-justify"></i>'},justifyLeft:{name:"justifyLeft",action:"justifyLeft",aria:"left justify",tagNames:[],style:{prop:"text-align",value:"left"},contentDefault:"<b>L</b>",contentFA:'<i class="fa fa-align-left"></i>'},justifyRight:{name:"justifyRight",action:"justifyRight",aria:"right justify",tagNames:[],style:{prop:"text-align",value:"right"},contentDefault:"<b>R</b>",contentFA:'<i class="fa fa-align-right"></i>'},removeFormat:{name:"removeFormat",aria:"remove formatting",action:"removeFormat",contentDefault:"<b>X</b>",contentFA:'<i class="fa fa-eraser"></i>'},quote:{name:"quote",action:"append-blockquote",aria:"blockquote",tagNames:["blockquote"],contentDefault:"<b>&ldquo;</b>",contentFA:'<i class="fa fa-quote-right"></i>'},pre:{name:"pre",action:"append-pre",aria:"preformatted text",tagNames:["pre"],contentDefault:"<b>0101</b>",contentFA:'<i class="fa fa-code fa-lg"></i>'},h1:{name:"h1",action:"append-h1",aria:"header type one",tagNames:["h1"],contentDefault:"<b>H1</b>",contentFA:'<i class="fa fa-header"><sup>1</sup>'},h2:{name:"h2",action:"append-h2",aria:"header type two",tagNames:["h2"],contentDefault:"<b>H2</b>",contentFA:'<i class="fa fa-header"><sup>2</sup>'},h3:{name:"h3",action:"append-h3",aria:"header type three",tagNames:["h3"],contentDefault:"<b>H3</b>",contentFA:'<i class="fa fa-header"><sup>3</sup>'},h4:{name:"h4",action:"append-h4",aria:"header type four",tagNames:["h4"],contentDefault:"<b>H4</b>",contentFA:'<i class="fa fa-header"><sup>4</sup>'},h5:{name:"h5",action:"append-h5",aria:"header type five",tagNames:["h5"],contentDefault:"<b>H5</b>",contentFA:'<i class="fa fa-header"><sup>5</sup>'},h6:{name:"h6",action:"append-h6",aria:"header type six",tagNames:["h6"],contentDefault:"<b>H6</b>",contentFA:'<i class="fa fa-header"><sup>6</sup>'}}}(),function(){var b=a.extensions.button.extend({init:function(){a.extensions.button.prototype.init.apply(this,arguments)},formSaveLabel:"&#10003;",formCloseLabel:"&times;",hasForm:!0,getForm:function(){},isDisplayed:function(){},hideForm:function(){},showToolbarDefaultActions:function(){var a=this.base.getExtensionByName("toolbar");a&&a.showToolbarDefaultActions()},hideToolbarDefaultActions:function(){var a=this.base.getExtensionByName("toolbar");a&&a.hideToolbarDefaultActions()},setToolbarPosition:function(){var a=this.base.getExtensionByName("toolbar");a&&a.setToolbarPosition()}});a.extensions.form=b}(),function(){var b=a.extensions.form.extend({customClassOption:null,customClassOptionText:"Button",linkValidation:!1,placeholderText:"Paste or type a link",targetCheckbox:!1,targetCheckboxText:"Open in new window",name:"anchor",action:"createLink",aria:"link",tagNames:["a"],contentDefault:"<b>#</b>",contentFA:'<i class="fa fa-link"></i>',init:function(){a.extensions.form.prototype.init.apply(this,arguments),this.subscribe("editableKeydown",this.handleKeydown.bind(this))},handleClick:function(b){b.preventDefault(),b.stopPropagation();var c=a.selection.getSelectionRange(this.document);return"a"===c.startContainer.nodeName.toLowerCase()||"a"===c.endContainer.nodeName.toLowerCase()||a.util.getClosestTag(a.selection.getSelectedParentElement(c),"a")?this.execAction("unlink"):(this.isDisplayed()||this.showForm(),!1)},handleKeydown:function(b){a.util.isKey(b,a.util.keyCode.K)&&a.util.isMetaCtrlKey(b)&&!b.shiftKey&&this.handleClick(b)},getForm:function(){return this.form||(this.form=this.createForm()),this.form},getTemplate:function(){var a=['<input type="text" class="medium-editor-toolbar-input" placeholder="',this.placeholderText,'">'];return a.push('<a href="#" class="medium-editor-toolbar-save">',"fontawesome"===this.getEditorOption("buttonLabels")?'<i class="fa fa-check"></i>':this.formSaveLabel,"</a>"),a.push('<a href="#" class="medium-editor-toolbar-close">',"fontawesome"===this.getEditorOption("buttonLabels")?'<i class="fa fa-times"></i>':this.formCloseLabel,"</a>"),this.targetCheckbox&&a.push('<div class="medium-editor-toolbar-form-row">','<input type="checkbox" class="medium-editor-toolbar-anchor-target">',"<label>",this.targetCheckboxText,"</label>","</div>"),this.customClassOption&&a.push('<div class="medium-editor-toolbar-form-row">','<input type="checkbox" class="medium-editor-toolbar-anchor-button">',"<label>",this.customClassOptionText,"</label>","</div>"),a.join("")},isDisplayed:function(){return"block"===this.getForm().style.display},hideForm:function(){this.getForm().style.display="none",this.getInput().value=""},showForm:function(a){var b=this.getInput(),c=this.getAnchorTargetCheckbox(),d=this.getAnchorButtonCheckbox();if(a=a||{url:""},"string"==typeof a&&(a={url:a}),this.base.saveSelection(),this.hideToolbarDefaultActions(),this.getForm().style.display="block",this.setToolbarPosition(),b.value=a.url,b.focus(),c&&(c.checked="_blank"===a.target),d){var e=a.buttonClass?a.buttonClass.split(" "):[];d.checked=-1!==e.indexOf(this.customClassOption)}},destroy:function(){return this.form?(this.form.parentNode&&this.form.parentNode.removeChild(this.form),void delete this.form):!1},getFormOpts:function(){var a=this.getAnchorTargetCheckbox(),b=this.getAnchorButtonCheckbox(),c={url:this.getInput().value.trim()};return this.linkValidation&&(c.url=this.checkLinkFormat(c.url)),c.target="_self",a&&a.checked&&(c.target="_blank"),b&&b.checked&&(c.buttonClass=this.customClassOption),c},doFormSave:function(){var a=this.getFormOpts();this.completeFormSave(a)},completeFormSave:function(a){this.base.restoreSelection(),this.execAction(this.action,a),this.base.checkSelection()},checkLinkFormat:function(a){var b=/^(https?|ftps?|rtmpt?):\/\/|mailto:/;return(b.test(a)?"":"http://")+a},doFormCancel:function(){this.base.restoreSelection(),this.base.checkSelection()},attachFormEvents:function(a){var b=a.querySelector(".medium-editor-toolbar-close"),c=a.querySelector(".medium-editor-toolbar-save"),d=a.querySelector(".medium-editor-toolbar-input");this.on(a,"click",this.handleFormClick.bind(this)),this.on(d,"keyup",this.handleTextboxKeyup.bind(this)),this.on(b,"click",this.handleCloseClick.bind(this)),this.on(c,"click",this.handleSaveClick.bind(this),!0)},createForm:function(){var a=this.document,b=a.createElement("div");return b.className="medium-editor-toolbar-form",b.id="medium-editor-toolbar-form-anchor-"+this.getEditorId(),b.innerHTML=this.getTemplate(),this.attachFormEvents(b),b},getInput:function(){return this.getForm().querySelector("input.medium-editor-toolbar-input")},getAnchorTargetCheckbox:function(){return this.getForm().querySelector(".medium-editor-toolbar-anchor-target")},getAnchorButtonCheckbox:function(){return this.getForm().querySelector(".medium-editor-toolbar-anchor-button")},handleTextboxKeyup:function(b){return b.keyCode===a.util.keyCode.ENTER?(b.preventDefault(),void this.doFormSave()):void(b.keyCode===a.util.keyCode.ESCAPE&&(b.preventDefault(),this.doFormCancel()))},handleFormClick:function(a){a.stopPropagation()},handleSaveClick:function(a){a.preventDefault(),this.doFormSave()},handleCloseClick:function(a){a.preventDefault(),this.doFormCancel()}});a.extensions.anchor=b}(),function(){var b=a.Extension.extend({name:"anchor-preview",hideDelay:500,previewValueSelector:"a",showWhenToolbarIsVisible:!1,init:function(){this.anchorPreview=this.createPreview(),this.getEditorOption("elementsContainer").appendChild(this.anchorPreview),this.attachToEditables()},getPreviewElement:function(){return this.anchorPreview},createPreview:function(){var a=this.document.createElement("div");return a.id="medium-editor-anchor-preview-"+this.getEditorId(),a.className="medium-editor-anchor-preview",a.innerHTML=this.getTemplate(),this.on(a,"click",this.handleClick.bind(this)),a},getTemplate:function(){return'<div class="medium-editor-toolbar-anchor-preview" id="medium-editor-toolbar-anchor-preview">    <a class="medium-editor-toolbar-anchor-preview-inner"></a></div>'},destroy:function(){this.anchorPreview&&(this.anchorPreview.parentNode&&this.anchorPreview.parentNode.removeChild(this.anchorPreview),delete this.anchorPreview)},hidePreview:function(){this.anchorPreview.classList.remove("medium-editor-anchor-preview-active"),this.activeAnchor=null},showPreview:function(a){return this.anchorPreview.classList.contains("medium-editor-anchor-preview-active")||a.getAttribute("data-disable-preview")?!0:(this.previewValueSelector&&(this.anchorPreview.querySelector(this.previewValueSelector).textContent=a.attributes.href.value,this.anchorPreview.querySelector(this.previewValueSelector).href=a.attributes.href.value),this.anchorPreview.classList.add("medium-toolbar-arrow-over"),this.anchorPreview.classList.remove("medium-toolbar-arrow-under"),this.anchorPreview.classList.contains("medium-editor-anchor-preview-active")||this.anchorPreview.classList.add("medium-editor-anchor-preview-active"),this.activeAnchor=a,this.positionPreview(),this.attachPreviewHandlers(),this)},positionPreview:function(a){a=a||this.activeAnchor;var b,c,d=this.anchorPreview.offsetHeight,e=a.getBoundingClientRect(),f=(e.left+e.right)/2,g=this.diffLeft,h=this.diffTop;b=this.anchorPreview.offsetWidth/2;var i=this.base.getExtensionByName("toolbar");i&&(g=i.diffLeft,h=i.diffTop),c=g-b,this.anchorPreview.style.top=Math.round(d+e.bottom-h+this.window.pageYOffset-this.anchorPreview.offsetHeight)+"px",b>f?this.anchorPreview.style.left=c+b+"px":this.window.innerWidth-f<b?this.anchorPreview.style.left=this.window.innerWidth+c-b+"px":this.anchorPreview.style.left=c+f+"px"},attachToEditables:function(){this.subscribe("editableMouseover",this.handleEditableMouseover.bind(this))},handleClick:function(a){var b=this.base.getExtensionByName("anchor"),c=this.activeAnchor;b&&c&&(a.preventDefault(),this.base.selectElement(this.activeAnchor),this.base.delay(function(){if(c){var a={url:c.attributes.href.value,target:c.getAttribute("target"),buttonClass:c.getAttribute("class")};b.showForm(a),c=null}}.bind(this))),this.hidePreview()},handleAnchorMouseout:function(){this.anchorToPreview=null,this.off(this.activeAnchor,"mouseout",this.instanceHandleAnchorMouseout),this.instanceHandleAnchorMouseout=null},handleEditableMouseover:function(b){var c=a.util.getClosestTag(b.target,"a");if(!1!==c){if(!/href=["']\S+["']/.test(c.outerHTML)||/href=["']#\S+["']/.test(c.outerHTML))return!0;var d=this.base.getExtensionByName("toolbar");if(!this.showWhenToolbarIsVisible&&d&&d.isDisplayed&&d.isDisplayed())return!0;this.activeAnchor&&this.activeAnchor!==c&&this.detachPreviewHandlers(),this.anchorToPreview=c,this.instanceHandleAnchorMouseout=this.handleAnchorMouseout.bind(this),this.on(this.anchorToPreview,"mouseout",this.instanceHandleAnchorMouseout),this.base.delay(function(){this.anchorToPreview&&this.showPreview(this.anchorToPreview)}.bind(this))}},handlePreviewMouseover:function(){this.lastOver=(new Date).getTime(),this.hovering=!0},handlePreviewMouseout:function(a){a.relatedTarget&&/anchor-preview/.test(a.relatedTarget.className)||(this.hovering=!1)},updatePreview:function(){if(this.hovering)return!0;var a=(new Date).getTime()-this.lastOver;a>this.hideDelay&&this.detachPreviewHandlers()},detachPreviewHandlers:function(){clearInterval(this.intervalTimer),this.instanceHandlePreviewMouseover&&(this.off(this.anchorPreview,"mouseover",this.instanceHandlePreviewMouseover),this.off(this.anchorPreview,"mouseout",this.instanceHandlePreviewMouseout),this.activeAnchor&&(this.off(this.activeAnchor,"mouseover",this.instanceHandlePreviewMouseover),this.off(this.activeAnchor,"mouseout",this.instanceHandlePreviewMouseout))),this.hidePreview(),this.hovering=this.instanceHandlePreviewMouseover=this.instanceHandlePreviewMouseout=null},attachPreviewHandlers:function(){this.lastOver=(new Date).getTime(),this.hovering=!0,this.instanceHandlePreviewMouseover=this.handlePreviewMouseover.bind(this),this.instanceHandlePreviewMouseout=this.handlePreviewMouseout.bind(this),this.intervalTimer=setInterval(this.updatePreview.bind(this),200),this.on(this.anchorPreview,"mouseover",this.instanceHandlePreviewMouseover),this.on(this.anchorPreview,"mouseout",this.instanceHandlePreviewMouseout),this.on(this.activeAnchor,"mouseover",this.instanceHandlePreviewMouseover),this.on(this.activeAnchor,"mouseout",this.instanceHandlePreviewMouseout)}});a.extensions.anchorPreview=b}(),function(){function b(b){return!a.util.getClosestTag(b,"a")}var c,d,e,f;c=[" ","	","\n","\r"," "," "," "," "," ","\u2028","\u2029"],d="com|net|org|edu|gov|mil|aero|asia|biz|cat|coop|info|int|jobs|mobi|museum|name|post|pro|tel|travel|xxx|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|ja|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw",e="(((?:(https?://|ftps?://|nntp://)|www\\d{0,3}[.]|[a-z0-9.\\-]+[.]("+d+")\\/)\\S+(?:[^\\s`!\\[\\]{};:'\".,?«»“”‘’])))|(([a-z0-9\\-]+\\.)?[a-z0-9\\-]+\\.("+d+"))",f=new RegExp("^("+d+")$","i");var g=a.Extension.extend({init:function(){a.Extension.prototype.init.apply(this,arguments),this.disableEventHandling=!1,this.subscribe("editableKeypress",this.onKeypress.bind(this)),this.subscribe("editableBlur",this.onBlur.bind(this)),this.document.execCommand("AutoUrlDetect",!1,!1)},destroy:function(){this.document.queryCommandSupported("AutoUrlDetect")&&this.document.execCommand("AutoUrlDetect",!1,!0)},onBlur:function(a,b){this.performLinking(b)},onKeypress:function(b){this.disableEventHandling||a.util.isKey(b,[a.util.keyCode.SPACE,a.util.keyCode.ENTER])&&(clearTimeout(this.performLinkingTimeout),this.performLinkingTimeout=setTimeout(function(){try{var a=this.base.exportSelection();this.performLinking(b.target)&&this.base.importSelection(a,!0)}catch(c){window.console&&window.console.error("Failed to perform linking",c),this.disableEventHandling=!0}}.bind(this),0))},performLinking:function(b){var c=a.util.splitByBlockElements(b),d=!1;0===c.length&&(c=[b]);for(var e=0;e<c.length;e++)d=this.removeObsoleteAutoLinkSpans(c[e])||d,d=this.performLinkingWithinElement(c[e])||d;return d},removeObsoleteAutoLinkSpans:function(c){if(!c||3===c.nodeType)return!1;for(var d=c.querySelectorAll('span[data-auto-link="true"]'),e=!1,f=0;f<d.length;f++){var g=d[f].textContent;if(-1===g.indexOf("://")&&(g=a.util.ensureUrlHasProtocol(g)),d[f].getAttribute("data-href")!==g&&b(d[f])){e=!0;var h=g.replace(/\s+$/,"");if(d[f].getAttribute("data-href")===h){var i=g.length-h.length,j=a.util.splitOffDOMTree(d[f],this.splitTextBeforeEnd(d[f],i));d[f].parentNode.insertBefore(j,d[f].nextSibling)}else a.util.unwrap(d[f],this.document)}}return e},splitTextBeforeEnd:function(a,b){for(var c=this.document.createTreeWalker(a,NodeFilter.SHOW_TEXT,null,!1),d=!0;d;)d=null!==c.lastChild();for(var e,f,g;b>0&&null!==g;)e=c.currentNode,f=e.nodeValue,f.length>b?(g=e.splitText(f.length-b),b=0):(g=c.previousNode(),b-=f.length);return g},performLinkingWithinElement:function(b){for(var c=this.findLinkableText(b),d=!1,e=0;e<c.length;e++){var f=a.util.findOrCreateMatchingTextNodes(this.document,b,c[e]);this.shouldNotLink(f)||this.createAutoLink(f,c[e].href)}return d},shouldNotLink:function(b){for(var c=!1,d=0;d<b.length&&c===!1;d++)c=!!a.util.traverseUp(b[d],function(a){return"a"===a.nodeName.toLowerCase()||a.getAttribute&&"true"===a.getAttribute("data-auto-link")});return c},findLinkableText:function(a){for(var b=new RegExp(e,"gi"),d=a.textContent,g=null,h=[];null!==(g=b.exec(d));){var i=!0,j=g.index+g[0].length;i=!(0!==g.index&&-1===c.indexOf(d[g.index-1])||j!==d.length&&-1===c.indexOf(d[j])),i=i&&(-1!==g[0].indexOf("/")||f.test(g[0].split(".").pop().split("?").shift())),i&&h.push({href:g[0],start:g.index,end:j})}return h},createAutoLink:function(b,c){c=a.util.ensureUrlHasProtocol(c);var d=a.util.createLink(this.document,b,c,this.getEditorOption("targetBlank")?"_blank":null),e=this.document.createElement("span");for(e.setAttribute("data-auto-link","true"),e.setAttribute("data-href",c),d.insertBefore(e,d.firstChild);d.childNodes.length>1;)e.appendChild(d.childNodes[1])}});a.extensions.autoLink=g}(),function(){function b(b){var d=a.util.getContainerEditorElement(b),e=Array.prototype.slice.call(d.parentElement.querySelectorAll("."+c));e.forEach(function(a){a.classList.remove(c)})}var c="medium-editor-dragover",d=a.Extension.extend({name:"fileDragging",allowedTypes:["image"],init:function(){a.Extension.prototype.init.apply(this,arguments),this.subscribe("editableDrag",this.handleDrag.bind(this)),this.subscribe("editableDrop",this.handleDrop.bind(this))},handleDrag:function(a){a.preventDefault(),a.dataTransfer.dropEffect="copy";var d=a.target.classList?a.target:a.target.parentElement;b(d),"dragover"===a.type&&d.classList.add(c)},handleDrop:function(a){a.preventDefault(),a.stopPropagation(),a.dataTransfer.files&&Array.prototype.slice.call(a.dataTransfer.files).forEach(function(a){this.isAllowedFile(a)&&a.type.match("image")&&this.insertImageFile(a)},this),b(a.target)},isAllowedFile:function(a){return this.allowedTypes.some(function(b){return!!a.type.match(b)})},insertImageFile:function(b){var c=new FileReader;c.readAsDataURL(b);var d="medium-img-"+ +new Date;a.util.insertHTMLCommand(this.document,'<img class="medium-editor-image-loading" id="'+d+'" />'),c.onload=function(){var a=this.document.getElementById(d);a&&(a.removeAttribute("id"),a.removeAttribute("class"),a.src=c.result)}.bind(this)}});a.extensions.fileDragging=d}(),function(){var b=a.Extension.extend({name:"keyboard-commands",commands:[{command:"bold",key:"B",meta:!0,shift:!1,alt:!1},{command:"italic",key:"I",meta:!0,shift:!1,alt:!1},{command:"underline",key:"U",meta:!0,shift:!1,alt:!1}],init:function(){a.Extension.prototype.init.apply(this,arguments),this.subscribe("editableKeydown",this.handleKeydown.bind(this)),this.keys={},this.commands.forEach(function(a){var b=a.key.charCodeAt(0);this.keys[b]||(this.keys[b]=[]),this.keys[b].push(a)},this)},handleKeydown:function(b){var c=a.util.getKeyCode(b);if(this.keys[c]){var d=a.util.isMetaCtrlKey(b),e=!!b.shiftKey,f=!!b.altKey;this.keys[c].forEach(function(a){a.meta!==d||a.shift!==e||a.alt!==f&&void 0!==a.alt||(b.preventDefault(),b.stopPropagation(),!1!==a.command&&this.execAction(a.command))},this)}}});a.extensions.keyboardCommands=b}(),function(){var b=a.extensions.form.extend({name:"fontname",action:"fontName",aria:"change font name",contentDefault:"&#xB1;",contentFA:'<i class="fa fa-font"></i>',fonts:["","Arial","Verdana","Times New Roman"],init:function(){a.extensions.form.prototype.init.apply(this,arguments)},handleClick:function(a){if(a.preventDefault(),a.stopPropagation(),!this.isDisplayed()){var b=this.document.queryCommandValue("fontName")+"";this.showForm(b)}return!1},getForm:function(){return this.form||(this.form=this.createForm()),this.form},isDisplayed:function(){return"block"===this.getForm().style.display},hideForm:function(){this.getForm().style.display="none",this.getSelect().value=""},showForm:function(a){var b=this.getSelect();this.base.saveSelection(),this.hideToolbarDefaultActions(),this.getForm().style.display="block",this.setToolbarPosition(),b.value=a||"",b.focus()},destroy:function(){return this.form?(this.form.parentNode&&this.form.parentNode.removeChild(this.form),void delete this.form):!1},doFormSave:function(){this.base.restoreSelection(),this.base.checkSelection()},doFormCancel:function(){this.base.restoreSelection(),this.clearFontName(),this.base.checkSelection()},createForm:function(){var a,b=this.document,c=b.createElement("div"),d=b.createElement("select"),e=b.createElement("a"),f=b.createElement("a");c.className="medium-editor-toolbar-form",c.id="medium-editor-toolbar-form-fontname-"+this.getEditorId(),this.on(c,"click",this.handleFormClick.bind(this));for(var g=0;g<this.fonts.length;g++)a=b.createElement("option"),a.innerHTML=this.fonts[g],a.value=this.fonts[g],d.appendChild(a);return d.className="medium-editor-toolbar-select",c.appendChild(d),this.on(d,"change",this.handleFontChange.bind(this)),f.setAttribute("href","#"),f.className="medium-editor-toobar-save",f.innerHTML="fontawesome"===this.getEditorOption("buttonLabels")?'<i class="fa fa-check"></i>':"&#10003;",c.appendChild(f),this.on(f,"click",this.handleSaveClick.bind(this),!0),e.setAttribute("href","#"),e.className="medium-editor-toobar-close",e.innerHTML="fontawesome"===this.getEditorOption("buttonLabels")?'<i class="fa fa-times"></i>':"&times;",c.appendChild(e),this.on(e,"click",this.handleCloseClick.bind(this)),c},getSelect:function(){return this.getForm().querySelector("select.medium-editor-toolbar-select")},clearFontName:function(){a.selection.getSelectedElements(this.document).forEach(function(a){"font"===a.nodeName.toLowerCase()&&a.hasAttribute("face")&&a.removeAttribute("face")})},handleFontChange:function(){var a=this.getSelect().value;""===a?this.clearFontName():this.execAction("fontName",{name:a})},handleFormClick:function(a){a.stopPropagation()},handleSaveClick:function(a){a.preventDefault(),this.doFormSave()},handleCloseClick:function(a){a.preventDefault(),this.doFormCancel()}});a.extensions.fontName=b}(),function(){var b=a.extensions.form.extend({name:"fontsize",action:"fontSize",aria:"increase/decrease font size",contentDefault:"&#xB1;",contentFA:'<i class="fa fa-text-height"></i>',init:function(){a.extensions.form.prototype.init.apply(this,arguments)},handleClick:function(a){if(a.preventDefault(),a.stopPropagation(),!this.isDisplayed()){var b=this.document.queryCommandValue("fontSize")+"";this.showForm(b)}return!1},getForm:function(){return this.form||(this.form=this.createForm()),this.form},isDisplayed:function(){return"block"===this.getForm().style.display},hideForm:function(){this.getForm().style.display="none",this.getInput().value=""},showForm:function(a){var b=this.getInput();this.base.saveSelection(),this.hideToolbarDefaultActions(),this.getForm().style.display="block",this.setToolbarPosition(),b.value=a||"",b.focus()},destroy:function(){return this.form?(this.form.parentNode&&this.form.parentNode.removeChild(this.form),void delete this.form):!1},doFormSave:function(){this.base.restoreSelection(),this.base.checkSelection()},doFormCancel:function(){this.base.restoreSelection(),this.clearFontSize(),this.base.checkSelection()},createForm:function(){var a=this.document,b=a.createElement("div"),c=a.createElement("input"),d=a.createElement("a"),e=a.createElement("a");return b.className="medium-editor-toolbar-form",b.id="medium-editor-toolbar-form-fontsize-"+this.getEditorId(),this.on(b,"click",this.handleFormClick.bind(this)),c.setAttribute("type","range"),c.setAttribute("min","1"),c.setAttribute("max","7"),c.className="medium-editor-toolbar-input",b.appendChild(c),this.on(c,"change",this.handleSliderChange.bind(this)),e.setAttribute("href","#"),e.className="medium-editor-toobar-save",e.innerHTML="fontawesome"===this.getEditorOption("buttonLabels")?'<i class="fa fa-check"></i>':"&#10003;",b.appendChild(e),this.on(e,"click",this.handleSaveClick.bind(this),!0),d.setAttribute("href","#"),d.className="medium-editor-toobar-close",d.innerHTML="fontawesome"===this.getEditorOption("buttonLabels")?'<i class="fa fa-times"></i>':"&times;",b.appendChild(d),this.on(d,"click",this.handleCloseClick.bind(this)),b},getInput:function(){return this.getForm().querySelector("input.medium-editor-toolbar-input")},clearFontSize:function(){a.selection.getSelectedElements(this.document).forEach(function(a){"font"===a.nodeName.toLowerCase()&&a.hasAttribute("size")&&a.removeAttribute("size")})},handleSliderChange:function(){var a=this.getInput().value;"4"===a?this.clearFontSize():this.execAction("fontSize",{size:a})},handleFormClick:function(a){a.stopPropagation()},handleSaveClick:function(a){a.preventDefault(),this.doFormSave()},handleCloseClick:function(a){a.preventDefault(),this.doFormCancel()}});a.extensions.fontSize=b}(),function(){function b(){return[[new RegExp(/<[^>]*docs-internal-guid[^>]*>/gi),""],[new RegExp(/<\/b>(<br[^>]*>)?$/gi),""],[new RegExp(/<span class="Apple-converted-space">\s+<\/span>/g)," "],[new RegExp(/<br class="Apple-interchange-newline">/g),"<br>"],[new RegExp(/<span[^>]*(font-style:italic;font-weight:bold|font-weight:bold;font-style:italic)[^>]*>/gi),'<span class="replace-with italic bold">'],[new RegExp(/<span[^>]*font-style:italic[^>]*>/gi),'<span class="replace-with italic">'],[new RegExp(/<span[^>]*font-weight:bold[^>]*>/gi),'<span class="replace-with bold">'],[new RegExp(/&lt;(\/?)(i|b|a)&gt;/gi),"<$1$2>"],[new RegExp(/&lt;a(?:(?!href).)+href=(?:&quot;|&rdquo;|&ldquo;|"|“|”)(((?!&quot;|&rdquo;|&ldquo;|"|“|”).)*)(?:&quot;|&rdquo;|&ldquo;|"|“|”)(?:(?!&gt;).)*&gt;/gi),'<a href="$1">'],[new RegExp(/<\/p>\n+/gi),"</p>"],[new RegExp(/\n+<p/gi),"<p"],[new RegExp(/<\/?o:[a-z]*>/gi),""],["<!--EndFragment-->",""],["<!--StartFragment-->",""]]}var c=a.Extension.extend({forcePlainText:!0,cleanPastedHTML:!1,cleanReplacements:[],cleanAttrs:["class","style","dir"],cleanTags:["meta"],init:function(){a.Extension.prototype.init.apply(this,arguments),(this.forcePlainText||this.cleanPastedHTML)&&this.subscribe("editablePaste",this.handlePaste.bind(this))},handlePaste:function(b,c){var d,e,f,g,h="",i="text/html",j="text/plain";if(this.window.clipboardData&&void 0===b.clipboardData&&(b.clipboardData=this.window.clipboardData,i="Text",j="Text"),b.clipboardData&&b.clipboardData.getData&&!b.defaultPrevented){if(b.preventDefault(),f=b.clipboardData.getData(i),g=b.clipboardData.getData(j),this.cleanPastedHTML&&f)return this.cleanPaste(f);if(this.getEditorOption("disableReturn")||c.getAttribute("data-disable-return"))h=a.util.htmlEntities(g);else if(d=g.split(/[\r\n]+/g),d.length>1)for(e=0;e<d.length;e+=1)""!==d[e]&&(h+="<p>"+a.util.htmlEntities(d[e])+"</p>");else h=a.util.htmlEntities(d[0]);a.util.insertHTMLCommand(this.document,h)}},cleanPaste:function(a){var c,d,e,f,g=/<p|<br|<div/.test(a),h=b().concat(this.cleanReplacements||[]);for(c=0;c<h.length;c+=1)a=a.replace(h[c][0],h[c][1]);if(!g)return this.pasteHTML(a);for(e=this.document.createElement("div"),e.innerHTML="<p>"+a.split("<br><br>").join("</p><p>")+"</p>",d=e.querySelectorAll("a,p,div,br"),c=0;c<d.length;c+=1)switch(f=d[c],f.innerHTML=f.innerHTML.replace(/\n/gi," "),f.nodeName.toLowerCase()){case"p":case"div":this.filterCommonBlocks(f);break;case"br":this.filterLineBreak(f)}this.pasteHTML(e.innerHTML)},pasteHTML:function(b,c){c=a.util.defaults({},c,{cleanAttrs:this.cleanAttrs,cleanTags:this.cleanTags});var d,e,f,g,h=this.document.createDocumentFragment();for(h.appendChild(this.document.createElement("body")),g=h.querySelector("body"),g.innerHTML=b,this.cleanupSpans(g),d=g.querySelectorAll("*"),f=0;f<d.length;f+=1)e=d[f],"a"===e.nodeName.toLowerCase()&&this.getEditorOption("targetBlank")&&a.util.setTargetBlank(e),a.util.cleanupAttrs(e,c.cleanAttrs),a.util.cleanupTags(e,c.cleanTags);a.util.insertHTMLCommand(this.document,g.innerHTML.replace(/&nbsp;/g," "))},isCommonBlock:function(a){return a&&("p"===a.nodeName.toLowerCase()||"div"===a.nodeName.toLowerCase())},filterCommonBlocks:function(a){/^\s*$/.test(a.textContent)&&a.parentNode&&a.parentNode.removeChild(a)},filterLineBreak:function(a){this.isCommonBlock(a.previousElementSibling)?this.removeWithParent(a):!this.isCommonBlock(a.parentNode)||a.parentNode.firstChild!==a&&a.parentNode.lastChild!==a?a.parentNode&&1===a.parentNode.childElementCount&&""===a.parentNode.textContent&&this.removeWithParent(a):this.removeWithParent(a)},removeWithParent:function(a){a&&a.parentNode&&(a.parentNode.parentNode&&1===a.parentNode.childElementCount?a.parentNode.parentNode.removeChild(a.parentNode):a.parentNode.removeChild(a))},cleanupSpans:function(b){var c,d,e,f=b.querySelectorAll(".replace-with"),g=function(a){return a&&"#text"!==a.nodeName&&"false"===a.getAttribute("contenteditable")};for(c=0;c<f.length;c+=1)d=f[c],e=this.document.createElement(d.classList.contains("bold")?"b":"i"),d.classList.contains("bold")&&d.classList.contains("italic")?e.innerHTML="<i>"+d.innerHTML+"</i>":e.innerHTML=d.innerHTML,d.parentNode.replaceChild(e,d);for(f=b.querySelectorAll("span"),c=0;c<f.length;c+=1){if(d=f[c],a.util.traverseUp(d,g))return!1;a.util.unwrap(d,this.document)}}});a.extensions.paste=c}(),function(){var b=a.Extension.extend({name:"placeholder",text:"Type your text",hideOnClick:!0,init:function(){a.Extension.prototype.init.apply(this,arguments),this.initPlaceholders(),this.attachEventHandlers()},initPlaceholders:function(){this.getEditorElements().forEach(function(a){a.getAttribute("data-placeholder")||a.setAttribute("data-placeholder",this.text),this.updatePlaceholder(a)},this)},destroy:function(){this.getEditorElements().forEach(function(a){a.getAttribute("data-placeholder")===this.text&&a.removeAttribute("data-placeholder")},this)},showPlaceholder:function(a){a&&a.classList.add("medium-editor-placeholder")},hidePlaceholder:function(a){a&&a.classList.remove("medium-editor-placeholder")},updatePlaceholder:function(a,b){return a.querySelector("img, blockquote, ul, ol")||""!==a.textContent.replace(/^\s+|\s+$/g,"")?this.hidePlaceholder(a):void(b||this.showPlaceholder(a))},attachEventHandlers:function(){this.hideOnClick&&this.subscribe("focus",this.handleFocus.bind(this)),this.subscribe("editableInput",this.handleInput.bind(this)),this.subscribe("blur",this.handleBlur.bind(this))},handleInput:function(a,b){var c=this.hideOnClick&&b===this.base.getFocusedElement();this.updatePlaceholder(b,c)},handleFocus:function(a,b){this.hidePlaceholder(b)},handleBlur:function(a,b){this.updatePlaceholder(b)}});a.extensions.placeholder=b}(),function(){var b=a.Extension.extend({name:"toolbar",align:"center",allowMultiParagraphSelection:!0,buttons:["bold","italic","underline","anchor","h2","h3","quote"],diffLeft:0,diffTop:-10,firstButtonClass:"medium-editor-button-first",lastButtonClass:"medium-editor-button-last",standardizeSelectionStart:!1,"static":!1,sticky:!1,updateOnEmptySelection:!1,relativeContainer:null,init:function(){a.Extension.prototype.init.apply(this,arguments),this.initThrottledMethods(),this.relativeContainer?this.relativeContainer.appendChild(this.getToolbarElement()):this.getEditorOption("elementsContainer").appendChild(this.getToolbarElement());
},forEachExtension:function(a,b){return this.base.extensions.forEach(function(c){return c!==this?a.apply(b||this,arguments):void 0},this)},createToolbar:function(){var a=this.document.createElement("div");return a.id="medium-editor-toolbar-"+this.getEditorId(),a.className="medium-editor-toolbar",this["static"]?a.className+=" static-toolbar":this.relativeContainer?a.className+=" medium-editor-relative-toolbar":a.className+=" medium-editor-stalker-toolbar",a.appendChild(this.createToolbarButtons()),this.forEachExtension(function(b){b.hasForm&&a.appendChild(b.getForm())}),this.attachEventHandlers(),a},createToolbarButtons:function(){var b,c,d,e,f,g,h=this.document.createElement("ul");return h.id="medium-editor-toolbar-actions"+this.getEditorId(),h.className="medium-editor-toolbar-actions",h.style.display="block",this.buttons.forEach(function(d){"string"==typeof d?(f=d,g=null):(f=d.name,g=d),e=this.base.addBuiltInExtension(f,g),e&&"function"==typeof e.getButton&&(c=e.getButton(this.base),b=this.document.createElement("li"),a.util.isElement(c)?b.appendChild(c):b.innerHTML=c,h.appendChild(b))},this),d=h.querySelectorAll("button"),d.length>0&&(d[0].classList.add(this.firstButtonClass),d[d.length-1].classList.add(this.lastButtonClass)),h},destroy:function(){this.toolbar&&(this.toolbar.parentNode&&this.toolbar.parentNode.removeChild(this.toolbar),delete this.toolbar)},getToolbarElement:function(){return this.toolbar||(this.toolbar=this.createToolbar()),this.toolbar},getToolbarActionsElement:function(){return this.getToolbarElement().querySelector(".medium-editor-toolbar-actions")},initThrottledMethods:function(){this.throttledPositionToolbar=a.util.throttle(function(){this.base.isActive&&this.positionToolbarIfShown()}.bind(this))},attachEventHandlers:function(){this.subscribe("blur",this.handleBlur.bind(this)),this.subscribe("focus",this.handleFocus.bind(this)),this.subscribe("editableClick",this.handleEditableClick.bind(this)),this.subscribe("editableKeyup",this.handleEditableKeyup.bind(this)),this.on(this.document.documentElement,"mouseup",this.handleDocumentMouseup.bind(this)),this["static"]&&this.sticky&&this.on(this.window,"scroll",this.handleWindowScroll.bind(this),!0),this.on(this.window,"resize",this.handleWindowResize.bind(this))},handleWindowScroll:function(){this.positionToolbarIfShown()},handleWindowResize:function(){this.throttledPositionToolbar()},handleDocumentMouseup:function(b){return b&&b.target&&a.util.isDescendant(this.getToolbarElement(),b.target)?!1:void this.checkState()},handleEditableClick:function(){setTimeout(function(){this.checkState()}.bind(this),0)},handleEditableKeyup:function(){this.checkState()},handleBlur:function(){clearTimeout(this.hideTimeout),clearTimeout(this.delayShowTimeout),this.hideTimeout=setTimeout(function(){this.hideToolbar()}.bind(this),1)},handleFocus:function(){this.checkState()},isDisplayed:function(){return this.getToolbarElement().classList.contains("medium-editor-toolbar-active")},showToolbar:function(){clearTimeout(this.hideTimeout),this.isDisplayed()||(this.getToolbarElement().classList.add("medium-editor-toolbar-active"),this.trigger("showToolbar",{},this.base.getFocusedElement()))},hideToolbar:function(){this.isDisplayed()&&(this.getToolbarElement().classList.remove("medium-editor-toolbar-active"),this.trigger("hideToolbar",{},this.base.getFocusedElement()))},isToolbarDefaultActionsDisplayed:function(){return"block"===this.getToolbarActionsElement().style.display},hideToolbarDefaultActions:function(){this.isToolbarDefaultActionsDisplayed()&&(this.getToolbarActionsElement().style.display="none")},showToolbarDefaultActions:function(){this.hideExtensionForms(),this.isToolbarDefaultActionsDisplayed()||(this.getToolbarActionsElement().style.display="block"),this.delayShowTimeout=this.base.delay(function(){this.showToolbar()}.bind(this))},hideExtensionForms:function(){this.forEachExtension(function(a){a.hasForm&&a.isDisplayed()&&a.hideForm()})},multipleBlockElementsSelected:function(){var b=/<[^\/>][^>]*><\/[^>]+>/gim,c=new RegExp("<("+a.util.blockContainerElementNames.join("|")+")[^>]*>","g"),d=a.selection.getSelectionHtml(this.document).replace(b,""),e=d.match(c);return!!e&&e.length>1},modifySelection:function(){var b=this.window.getSelection(),c=b.getRangeAt(0);if(this.standardizeSelectionStart&&c.startContainer.nodeValue&&c.startOffset===c.startContainer.nodeValue.length){var d=a.util.findAdjacentTextNodeWithContent(a.selection.getSelectionElement(this.window),c.startContainer,this.document);if(d){for(var e=0;0===d.nodeValue.substr(e,1).trim().length;)e+=1;c=a.selection.select(this.document,d,e,c.endContainer,c.endOffset)}}},checkState:function(){if(!this.base.preventSelectionUpdates){if(!this.base.getFocusedElement()||a.selection.selectionInContentEditableFalse(this.window))return this.hideToolbar();var b=a.selection.getSelectionElement(this.window);return!b||-1===this.getEditorElements().indexOf(b)||b.getAttribute("data-disable-toolbar")?this.hideToolbar():this.updateOnEmptySelection&&this["static"]?this.showAndUpdateToolbar():""===this.window.getSelection().toString().trim()||this.allowMultiParagraphSelection===!1&&this.multipleBlockElementsSelected()?this.hideToolbar():void this.showAndUpdateToolbar()}},showAndUpdateToolbar:function(){this.modifySelection(),this.setToolbarButtonStates(),this.trigger("positionToolbar",{},this.base.getFocusedElement()),this.showToolbarDefaultActions(),this.setToolbarPosition()},setToolbarButtonStates:function(){this.forEachExtension(function(a){"function"==typeof a.isActive&&"function"==typeof a.setInactive&&a.setInactive()}),this.checkActiveButtons()},checkActiveButtons:function(){var b,c=[],d=null,e=a.selection.getSelectionRange(this.document),f=function(a){"function"==typeof a.checkState?a.checkState(b):"function"==typeof a.isActive&&"function"==typeof a.isAlreadyApplied&&"function"==typeof a.setActive&&!a.isActive()&&a.isAlreadyApplied(b)&&a.setActive()};if(e&&(this.forEachExtension(function(a){return"function"==typeof a.queryCommandState&&(d=a.queryCommandState(),null!==d)?void(d&&"function"==typeof a.setActive&&a.setActive()):void c.push(a)}),b=a.selection.getSelectedParentElement(e),this.getEditorElements().some(function(c){return a.util.isDescendant(c,b,!0)})))for(;b&&(c.forEach(f),!a.util.isMediumEditorElement(b));)b=b.parentNode},positionToolbarIfShown:function(){this.isDisplayed()&&this.setToolbarPosition()},setToolbarPosition:function(){var a,b=this.base.getFocusedElement(),c=this.window.getSelection();return b?(this["static"]&&!this.relativeContainer?(this.showToolbar(),this.positionStaticToolbar(b)):c.isCollapsed||(this.showToolbar(),this.relativeContainer||this.positionToolbar(c)),a=this.base.getExtensionByName("anchor-preview"),void(a&&"function"==typeof a.hidePreview&&a.hidePreview())):this},positionStaticToolbar:function(a){this.getToolbarElement().style.left="0";var b,c=this.document.documentElement&&this.document.documentElement.scrollTop||this.document.body.scrollTop,d=this.window.innerWidth,e=this.getToolbarElement(),f=a.getBoundingClientRect(),g=f.top+c,h=f.left+f.width/2,i=e.offsetHeight,j=e.offsetWidth,k=j/2;switch(this.sticky?c>g+a.offsetHeight-i?(e.style.top=g+a.offsetHeight-i+"px",e.classList.remove("medium-editor-sticky-toolbar")):c>g-i?(e.classList.add("medium-editor-sticky-toolbar"),e.style.top="0px"):(e.classList.remove("medium-editor-sticky-toolbar"),e.style.top=g-i+"px"):e.style.top=g-i+"px",this.align){case"left":b=f.left;break;case"right":b=f.right-j;break;case"center":b=h-k}0>b?b=0:b+j>d&&(b=d-Math.ceil(j)-1),e.style.left=b+"px"},positionToolbar:function(a){this.getToolbarElement().style.left="0";var b=this.window.innerWidth,c=a.getRangeAt(0),d=c.getBoundingClientRect(),e=(d.left+d.right)/2,f=this.getToolbarElement(),g=f.offsetHeight,h=f.offsetWidth,i=h/2,j=50,k=this.diffLeft-i;d.top<j?(f.classList.add("medium-toolbar-arrow-over"),f.classList.remove("medium-toolbar-arrow-under"),f.style.top=j+d.bottom-this.diffTop+this.window.pageYOffset-g+"px"):(f.classList.add("medium-toolbar-arrow-under"),f.classList.remove("medium-toolbar-arrow-over"),f.style.top=d.top+this.diffTop+this.window.pageYOffset-g+"px"),i>e?f.style.left=k+i+"px":i>b-e?f.style.left=b+k-i+"px":f.style.left=k+e+"px"}});a.extensions.toolbar=b}(),function(){var b=a.Extension.extend({init:function(){a.Extension.prototype.init.apply(this,arguments),this.subscribe("editableDrag",this.handleDrag.bind(this)),this.subscribe("editableDrop",this.handleDrop.bind(this))},handleDrag:function(a){var b="medium-editor-dragover";a.preventDefault(),a.dataTransfer.dropEffect="copy","dragover"===a.type?a.target.classList.add(b):"dragleave"===a.type&&a.target.classList.remove(b)},handleDrop:function(b){var c,d="medium-editor-dragover";b.preventDefault(),b.stopPropagation(),b.dataTransfer.files&&(c=Array.prototype.slice.call(b.dataTransfer.files,0),c.some(function(b){if(b.type.match("image")){var c,d;c=new FileReader,c.readAsDataURL(b),d="medium-img-"+ +new Date,a.util.insertHTMLCommand(this.document,'<img class="medium-editor-image-loading" id="'+d+'" />'),c.onload=function(){var a=this.document.getElementById(d);a&&(a.removeAttribute("id"),a.removeAttribute("class"),a.src=c.result)}.bind(this)}}.bind(this))),b.target.classList.remove(d)}});a.extensions.imageDragging=b}(),function(){function b(b){var c=a.selection.getSelectionStart(this.options.ownerDocument),d=c.textContent,e=a.selection.getCaretOffsets(c);(void 0===d[e.left-1]||" "===d[e.left-1]||void 0===d[e.left])&&b.preventDefault()}function c(b,c){if(this.options.disableReturn||c.getAttribute("data-disable-return"))b.preventDefault();else if(this.options.disableDoubleReturn||c.getAttribute("data-disable-double-return")){var d=a.selection.getSelectionStart(this.options.ownerDocument);(d&&""===d.textContent.trim()&&"li"!==d.nodeName.toLowerCase()||d.previousElementSibling&&"br"!==d.previousElementSibling.nodeName.toLowerCase()&&""===d.previousElementSibling.textContent.trim())&&b.preventDefault()}}function d(b){var c=a.selection.getSelectionStart(this.options.ownerDocument),d=c&&c.nodeName.toLowerCase();"pre"===d&&(b.preventDefault(),a.util.insertHTMLCommand(this.options.ownerDocument,"    ")),a.util.isListItem(c)&&(b.preventDefault(),b.shiftKey?this.options.ownerDocument.execCommand("outdent",!1,null):this.options.ownerDocument.execCommand("indent",!1,null))}function e(b){var c,d=a.selection.getSelectionStart(this.options.ownerDocument),e=d.nodeName.toLowerCase(),f=/^(\s+|<br\/?>)?$/i,g=/h\d/i;a.util.isKey(b,[a.util.keyCode.BACKSPACE,a.util.keyCode.ENTER])&&d.previousElementSibling&&g.test(e)&&0===a.selection.getCaretOffsets(d).left?a.util.isKey(b,a.util.keyCode.BACKSPACE)&&f.test(d.previousElementSibling.innerHTML)?(d.previousElementSibling.parentNode.removeChild(d.previousElementSibling),b.preventDefault()):a.util.isKey(b,a.util.keyCode.ENTER)&&(c=this.options.ownerDocument.createElement("p"),c.innerHTML="<br>",d.previousElementSibling.parentNode.insertBefore(c,d),b.preventDefault()):a.util.isKey(b,a.util.keyCode.DELETE)&&d.nextElementSibling&&d.previousElementSibling&&!g.test(e)&&f.test(d.innerHTML)&&g.test(d.nextElementSibling.nodeName.toLowerCase())?(a.selection.moveCursor(this.options.ownerDocument,d.nextElementSibling),d.previousElementSibling.parentNode.removeChild(d),b.preventDefault()):a.util.isKey(b,a.util.keyCode.BACKSPACE)&&"li"===e&&f.test(d.innerHTML)&&!d.previousElementSibling&&!d.parentElement.previousElementSibling&&d.nextElementSibling&&"li"===d.nextElementSibling.nodeName.toLowerCase()&&(c=this.options.ownerDocument.createElement("p"),c.innerHTML="<br>",d.parentElement.parentElement.insertBefore(c,d.parentElement),a.selection.moveCursor(this.options.ownerDocument,c),d.parentElement.removeChild(d),b.preventDefault())}function f(b){var c,d=a.selection.getSelectionStart(this.options.ownerDocument);d&&(a.util.isMediumEditorElement(d)&&0===d.children.length&&this.options.ownerDocument.execCommand("formatBlock",!1,"p"),a.util.isKey(b,a.util.keyCode.ENTER)&&!a.util.isListItem(d)&&(c=d.nodeName.toLowerCase(),"a"===c?this.options.ownerDocument.execCommand("unlink",!1,null):b.shiftKey||b.ctrlKey||/h\d/.test(c)||this.options.ownerDocument.execCommand("formatBlock",!1,"p")))}function g(a){a._mediumEditors||(a._mediumEditors=[null]),this.id||(this.id=a._mediumEditors.length),a._mediumEditors[this.id]=this}function h(a){a._mediumEditors&&a._mediumEditors[this.id]&&(a._mediumEditors[this.id]=null)}function i(b){b||(b=[]),"string"==typeof b&&(b=this.options.ownerDocument.querySelectorAll(b)),a.util.isElement(b)&&(b=[b]);var c=Array.prototype.slice.apply(b);this.elements=[],c.forEach(function(a,b){"textarea"===a.nodeName.toLowerCase()?this.elements.push(s.call(this,a,b)):this.elements.push(a)},this)}function j(a,b){return Object.keys(b).forEach(function(c){void 0===a[c]&&(a[c]=b[c])}),a}function k(a,b,c){var d={window:c.options.contentWindow,document:c.options.ownerDocument,base:c};return a=j(a,d),"function"==typeof a.init&&a.init(),a.name||(a.name=b),a}function l(){return this.elements.every(function(a){return!!a.getAttribute("data-disable-toolbar")})?!1:this.options.toolbar!==!1}function m(){return l.call(this)?this.options.anchorPreview!==!1:!1}function n(){return this.options.placeholder!==!1}function o(){return this.options.autoLink!==!1}function p(){return this.options.imageDragging!==!1}function q(){return this.options.keyboardCommands!==!1}function r(){return!this.options.extensions.imageDragging}function s(a,b){for(var c=this.options.ownerDocument.createElement("div"),d=Date.now(),e="medium-editor-"+d+"-"+b,f=a.attributes;this.options.ownerDocument.getElementById(e);)d++,e="medium-editor-"+d+"-"+b;c.className=a.className,c.id=e,c.innerHTML=a.value,a.setAttribute("medium-editor-textarea-id",e);for(var g=0,h=f.length;h>g;g++)c.hasAttribute(f[g].nodeName)||c.setAttribute(f[g].nodeName,f[g].nodeValue);return a.classList.add("medium-editor-hidden"),a.parentNode.insertBefore(c,a),c}function t(){this.elements.forEach(function(a,b){this.options.disableEditing||a.getAttribute("data-disable-editing")||(a.setAttribute("contentEditable",!0),a.setAttribute("spellcheck",this.options.spellcheck)),a.setAttribute("data-medium-editor-element",!0),a.setAttribute("role","textbox"),a.setAttribute("aria-multiline",!0),a.setAttribute("medium-editor-index",b),a.hasAttribute("medium-editor-textarea-id")&&this.on(a,"input",function(a){var b=a.target,c=b.parentNode.querySelector('textarea[medium-editor-textarea-id="'+b.getAttribute("medium-editor-textarea-id")+'"]');c&&(c.value=this.serialize()[b.id].value)}.bind(this))},this)}function u(){var a;if(this.subscribe("editableKeydownTab",d.bind(this)),this.subscribe("editableKeydownDelete",e.bind(this)),this.subscribe("editableKeydownEnter",e.bind(this)),this.options.disableExtraSpaces&&this.subscribe("editableKeydownSpace",b.bind(this)),this.options.disableReturn||this.options.disableDoubleReturn)this.subscribe("editableKeydownEnter",c.bind(this));else for(a=0;a<this.elements.length;a+=1)if(this.elements[a].getAttribute("data-disable-return")||this.elements[a].getAttribute("data-disable-double-return")){this.subscribe("editableKeydownEnter",c.bind(this));break}this.options.disableReturn||this.elements.forEach(function(a){a.getAttribute("data-disable-return")||this.on(a,"keyup",f.bind(this))},this)}function v(){if(this.extensions=[],Object.keys(this.options.extensions).forEach(function(a){"toolbar"!==a&&this.options.extensions[a]&&this.extensions.push(k(this.options.extensions[a],a,this))},this),r.call(this)){var b=this.options.fileDragging;b||(b={},p.call(this)||(b.allowedTypes=[])),this.addBuiltInExtension("fileDragging",b)}var c={paste:!0,"anchor-preview":m.call(this),autoLink:o.call(this),keyboardCommands:q.call(this),placeholder:n.call(this)};Object.keys(c).forEach(function(a){c[a]&&this.addBuiltInExtension(a)},this);var d=this.options.extensions.toolbar;if(!d&&l.call(this)){var e=a.util.extend({},this.options.toolbar,{allowMultiParagraphSelection:this.options.allowMultiParagraphSelection});d=new a.extensions.toolbar(e)}d&&this.extensions.push(k(d,"toolbar",this))}function w(b,c){var d=[["allowMultiParagraphSelection","toolbar.allowMultiParagraphSelection"]];return c&&d.forEach(function(b){c.hasOwnProperty(b[0])&&void 0!==c[b[0]]&&a.util.deprecated(b[0],b[1],"v6.0.0")}),a.util.defaults({},c,b)}function x(b,c){var d,e=/^append-(.+)$/gi,f=/justify([A-Za-z]*)$/g;if(d=e.exec(b))return a.util.execFormatBlock(this.options.ownerDocument,d[1]);if("fontSize"===b)return this.options.ownerDocument.execCommand("fontSize",!1,c.size);if("fontName"===b)return this.options.ownerDocument.execCommand("fontName",!1,c.name);if("createLink"===b)return this.createLink(c);if("image"===b)return this.options.ownerDocument.execCommand("insertImage",!1,this.options.contentWindow.getSelection());if(f.exec(b)){var g=this.options.ownerDocument.execCommand(b,!1,null),h=a.selection.getSelectedParentElement(a.selection.getSelectionRange(this.options.ownerDocument));return h&&y.call(this,a.util.getTopBlockContainer(h)),g}return this.options.ownerDocument.execCommand(b,!1,null)}function y(b){if(b){var c,d=Array.prototype.slice.call(b.childNodes).filter(function(a){var b="div"===a.nodeName.toLowerCase();return b&&!c&&(c=a.style.textAlign),b});d.length&&(this.saveSelection(),d.forEach(function(b){if(b.style.textAlign===c){var d=b.lastChild;if(d){a.util.unwrap(b,this.options.ownerDocument);var e=this.options.ownerDocument.createElement("BR");d.parentNode.insertBefore(e,d.nextSibling)}}},this),b.style.textAlign=c,this.restoreSelection())}}a.prototype={init:function(a,b){return this.options=w.call(this,this.defaults,b),this.origElements=a,this.options.elementsContainer||(this.options.elementsContainer=this.options.ownerDocument.body),this.setup()},setup:function(){this.isActive||(i.call(this,this.origElements),0!==this.elements.length&&(this.isActive=!0,g.call(this,this.options.contentWindow),this.events=new a.Events(this),t.call(this),v.call(this),u.call(this)))},destroy:function(){this.isActive&&(this.isActive=!1,this.extensions.forEach(function(a){"function"==typeof a.destroy&&a.destroy()},this),this.events.destroy(),this.elements.forEach(function(a){if(this.options.spellcheck&&(a.innerHTML=a.innerHTML),a.removeAttribute("contentEditable"),a.removeAttribute("spellcheck"),a.removeAttribute("data-medium-editor-element"),a.removeAttribute("role"),a.removeAttribute("aria-multiline"),a.removeAttribute("medium-editor-index"),a.hasAttribute("medium-editor-textarea-id")){var b=a.parentNode.querySelector('textarea[medium-editor-textarea-id="'+a.getAttribute("medium-editor-textarea-id")+'"]');b&&b.classList.remove("medium-editor-hidden"),a.parentNode&&a.parentNode.removeChild(a)}},this),this.elements=[],h.call(this,this.options.contentWindow))},on:function(a,b,c,d){this.events.attachDOMEvent(a,b,c,d)},off:function(a,b,c,d){this.events.detachDOMEvent(a,b,c,d)},subscribe:function(a,b){this.events.attachCustomEvent(a,b)},unsubscribe:function(a,b){this.events.detachCustomEvent(a,b)},trigger:function(a,b,c){this.events.triggerCustomEvent(a,b,c)},delay:function(a){var b=this;return setTimeout(function(){b.isActive&&a()},this.options.delay)},serialize:function(){var a,b,c={};for(a=0;a<this.elements.length;a+=1)b=""!==this.elements[a].id?this.elements[a].id:"element-"+a,c[b]={value:this.elements[a].innerHTML.trim()};return c},getExtensionByName:function(a){var b;return this.extensions&&this.extensions.length&&this.extensions.some(function(c){return c.name===a?(b=c,!0):!1}),b},addBuiltInExtension:function(b,c){var d,e=this.getExtensionByName(b);if(e)return e;switch(b){case"anchor":d=a.util.extend({},this.options.anchor,c),e=new a.extensions.anchor(d);break;case"anchor-preview":e=new a.extensions.anchorPreview(this.options.anchorPreview);break;case"autoLink":e=new a.extensions.autoLink;break;case"fileDragging":e=new a.extensions.fileDragging(c);break;case"fontname":e=new a.extensions.fontName(this.options.fontName);break;case"fontsize":e=new a.extensions.fontSize(c);break;case"keyboardCommands":e=new a.extensions.keyboardCommands(this.options.keyboardCommands);break;case"paste":e=new a.extensions.paste(this.options.paste);break;case"placeholder":e=new a.extensions.placeholder(this.options.placeholder);break;default:a.extensions.button.isBuiltInButton(b)&&(c?(d=a.util.defaults({},c,a.extensions.button.prototype.defaults[b]),e=new a.extensions.button(d)):e=new a.extensions.button(b))}return e&&this.extensions.push(k(e,b,this)),e},stopSelectionUpdates:function(){this.preventSelectionUpdates=!0},startSelectionUpdates:function(){this.preventSelectionUpdates=!1},checkSelection:function(){var a=this.getExtensionByName("toolbar");return a&&a.checkState(),this},queryCommandState:function(a){var b,c=/^full-(.+)$/gi,d=null;b=c.exec(a),b&&(a=b[1]);try{d=this.options.ownerDocument.queryCommandState(a)}catch(e){d=null}return d},execAction:function(b,c){var d,e,f=/^full-(.+)$/gi;return d=f.exec(b),d?(this.saveSelection(),this.selectAllContents(),e=x.call(this,d[1],c),this.restoreSelection()):e=x.call(this,b,c),("insertunorderedlist"===b||"insertorderedlist"===b)&&a.util.cleanListDOM(this.options.ownerDocument,this.getSelectedParentElement()),this.checkSelection(),e},getSelectedParentElement:function(b){return void 0===b&&(b=this.options.contentWindow.getSelection().getRangeAt(0)),a.selection.getSelectedParentElement(b)},selectAllContents:function(){var b=a.selection.getSelectionElement(this.options.contentWindow);if(b){for(;1===b.children.length;)b=b.children[0];this.selectElement(b)}},selectElement:function(b){a.selection.selectNode(b,this.options.ownerDocument);var c=a.selection.getSelectionElement(this.options.contentWindow);c&&this.events.focusElement(c)},getFocusedElement:function(){var a;return this.elements.some(function(b){return!a&&b.getAttribute("data-medium-focused")&&(a=b),!!a},this),a},exportSelection:function(){var b=a.selection.getSelectionElement(this.options.contentWindow),c=this.elements.indexOf(b),d=null;return c>=0&&(d=a.selection.exportSelection(b,this.options.ownerDocument)),null!==d&&0!==c&&(d.editableElementIndex=c),d},saveSelection:function(){this.selectionState=this.exportSelection()},importSelection:function(b,c){if(b){var d=this.elements[b.editableElementIndex||0];a.selection.importSelection(b,d,this.options.ownerDocument,c)}},restoreSelection:function(){this.importSelection(this.selectionState)},createLink:function(b){var c=a.selection.getSelectionElement(this.options.contentWindow),d={};if(-1!==this.elements.indexOf(c)){try{if(this.events.disableCustomEvent("editableInput"),b.url&&b.url.trim().length>0){var e=this.options.contentWindow.getSelection();if(e){var f,g,h,i,j=e.getRangeAt(0),k=j.commonAncestorContainer;if(3===j.endContainer.nodeType&&3!==j.startContainer.nodeType&&0===j.startOffset&&j.startContainer.firstChild===j.endContainer&&(k=j.endContainer),g=a.util.getClosestBlockContainer(j.startContainer),h=a.util.getClosestBlockContainer(j.endContainer),3!==k.nodeType&&g===h){var l=g||c,m=this.options.ownerDocument.createDocumentFragment();this.execAction("unlink"),f=this.exportSelection(),m.appendChild(l.cloneNode(!0)),c===l?a.selection.select(this.options.ownerDocument,l.firstChild,0,l.lastChild,3===l.lastChild.nodeType?l.lastChild.nodeValue.length:l.lastChild.childNodes.length):a.selection.select(this.options.ownerDocument,l,0,l,l.childNodes.length);var n=this.exportSelection();i=a.util.findOrCreateMatchingTextNodes(this.options.ownerDocument,m,{start:f.start-n.start,end:f.end-n.start,editableElementIndex:f.editableElementIndex}),0===i.length&&(m=this.options.ownerDocument.createDocumentFragment(),m.appendChild(k.cloneNode(!0)),i=[m.firstChild.firstChild,m.firstChild.lastChild]),a.util.createLink(this.options.ownerDocument,i,b.url.trim());var o=(m.firstChild.innerHTML.match(/^\s+/)||[""])[0].length;a.util.insertHTMLCommand(this.options.ownerDocument,m.firstChild.innerHTML.replace(/^\s+/,"")),f.start-=o,f.end-=o,this.importSelection(f)}else this.options.ownerDocument.execCommand("createLink",!1,b.url);(this.options.targetBlank||"_blank"===b.target)&&a.util.setTargetBlank(a.selection.getSelectionStart(this.options.ownerDocument),b.url),b.buttonClass&&a.util.addClassToAnchors(a.selection.getSelectionStart(this.options.ownerDocument),b.buttonClass)}}if(this.options.targetBlank||"_blank"===b.target||b.buttonClass){d=this.options.ownerDocument.createEvent("HTMLEvents"),d.initEvent("input",!0,!0,this.options.contentWindow);for(var p=0;p<this.elements.length;p+=1)this.elements[p].dispatchEvent(d)}}finally{this.events.enableCustomEvent("editableInput")}this.events.triggerCustomEvent("editableInput",d,c)}},cleanPaste:function(a){this.getExtensionByName("paste").cleanPaste(a)},pasteHTML:function(a,b){this.getExtensionByName("paste").pasteHTML(a,b)},setContent:function(a,b){if(b=b||0,this.elements[b]){var c=this.elements[b];c.innerHTML=a,this.events.updateInput(c,{target:c,currentTarget:c})}}}}(),function(){a.prototype.defaults={activeButtonClass:"medium-editor-button-active",buttonLabels:!1,delay:0,disableReturn:!1,disableDoubleReturn:!1,disableExtraSpaces:!1,disableEditing:!1,autoLink:!1,elementsContainer:!1,contentWindow:window,ownerDocument:document,targetBlank:!1,extensions:{},spellcheck:!0}}(),a.parseVersionString=function(a){var b=a.split("-"),c=b[0].split("."),d=b.length>1?b[1]:"";return{major:parseInt(c[0],10),minor:parseInt(c[1],10),revision:parseInt(c[2],10),preRelease:d,toString:function(){return[c[0],c[1],c[2]].join(".")+(d?"-"+d:"")}}},a.version=a.parseVersionString.call(this,{version:"5.10.0"}.version),a}());
/*!

 handlebars v4.0.5

Copyright (C) 2011-2015 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
!function(a,b){"object"==typeof exports&&"object"==typeof module?module.exports=b():"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?exports.Handlebars=b():a.Handlebars=b()}(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,b,c){"use strict";function d(){var a=new h.HandlebarsEnvironment;return n.extend(a,h),a.SafeString=j["default"],a.Exception=l["default"],a.Utils=n,a.escapeExpression=n.escapeExpression,a.VM=p,a.template=function(b){return p.template(b,a)},a}var e=c(1)["default"],f=c(2)["default"];b.__esModule=!0;var g=c(3),h=e(g),i=c(17),j=f(i),k=c(5),l=f(k),m=c(4),n=e(m),o=c(18),p=e(o),q=c(19),r=f(q),s=d();s.create=d,r["default"](s),s["default"]=s,b["default"]=s,a.exports=b["default"]},function(a,b){"use strict";b["default"]=function(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b},b.__esModule=!0},function(a,b){"use strict";b["default"]=function(a){return a&&a.__esModule?a:{"default":a}},b.__esModule=!0},function(a,b,c){"use strict";function d(a,b,c){this.helpers=a||{},this.partials=b||{},this.decorators=c||{},i.registerDefaultHelpers(this),j.registerDefaultDecorators(this)}var e=c(2)["default"];b.__esModule=!0,b.HandlebarsEnvironment=d;var f=c(4),g=c(5),h=e(g),i=c(6),j=c(14),k=c(16),l=e(k),m="4.0.5";b.VERSION=m;var n=7;b.COMPILER_REVISION=n;var o={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};b.REVISION_CHANGES=o;var p="[object Object]";d.prototype={constructor:d,logger:l["default"],log:l["default"].log,registerHelper:function(a,b){if(f.toString.call(a)===p){if(b)throw new h["default"]("Arg not supported with multiple helpers");f.extend(this.helpers,a)}else this.helpers[a]=b},unregisterHelper:function(a){delete this.helpers[a]},registerPartial:function(a,b){if(f.toString.call(a)===p)f.extend(this.partials,a);else{if("undefined"==typeof b)throw new h["default"]('Attempting to register a partial called "'+a+'" as undefined');this.partials[a]=b}},unregisterPartial:function(a){delete this.partials[a]},registerDecorator:function(a,b){if(f.toString.call(a)===p){if(b)throw new h["default"]("Arg not supported with multiple decorators");f.extend(this.decorators,a)}else this.decorators[a]=b},unregisterDecorator:function(a){delete this.decorators[a]}};var q=l["default"].log;b.log=q,b.createFrame=f.createFrame,b.logger=l["default"]},function(a,b){"use strict";function c(a){return k[a]}function d(a){for(var b=1;b<arguments.length;b++)for(var c in arguments[b])Object.prototype.hasOwnProperty.call(arguments[b],c)&&(a[c]=arguments[b][c]);return a}function e(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1}function f(a){if("string"!=typeof a){if(a&&a.toHTML)return a.toHTML();if(null==a)return"";if(!a)return a+"";a=""+a}return m.test(a)?a.replace(l,c):a}function g(a){return a||0===a?p(a)&&0===a.length?!0:!1:!0}function h(a){var b=d({},a);return b._parent=a,b}function i(a,b){return a.path=b,a}function j(a,b){return(a?a+".":"")+b}b.__esModule=!0,b.extend=d,b.indexOf=e,b.escapeExpression=f,b.isEmpty=g,b.createFrame=h,b.blockParams=i,b.appendContextPath=j;var k={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},l=/[&<>"'`=]/g,m=/[&<>"'`=]/,n=Object.prototype.toString;b.toString=n;var o=function(a){return"function"==typeof a};o(/x/)&&(b.isFunction=o=function(a){return"function"==typeof a&&"[object Function]"===n.call(a)}),b.isFunction=o;var p=Array.isArray||function(a){return a&&"object"==typeof a?"[object Array]"===n.call(a):!1};b.isArray=p},function(a,b){"use strict";function c(a,b){var e=b&&b.loc,f=void 0,g=void 0;e&&(f=e.start.line,g=e.start.column,a+=" - "+f+":"+g);for(var h=Error.prototype.constructor.call(this,a),i=0;i<d.length;i++)this[d[i]]=h[d[i]];Error.captureStackTrace&&Error.captureStackTrace(this,c),e&&(this.lineNumber=f,this.column=g)}b.__esModule=!0;var d=["description","fileName","lineNumber","message","name","number","stack"];c.prototype=new Error,b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(a){g["default"](a),i["default"](a),k["default"](a),m["default"](a),o["default"](a),q["default"](a),s["default"](a)}var e=c(2)["default"];b.__esModule=!0,b.registerDefaultHelpers=d;var f=c(7),g=e(f),h=c(8),i=e(h),j=c(9),k=e(j),l=c(10),m=e(l),n=c(11),o=e(n),p=c(12),q=e(p),r=c(13),s=e(r)},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4);b["default"]=function(a){a.registerHelper("blockHelperMissing",function(b,c){var e=c.inverse,f=c.fn;if(b===!0)return f(this);if(b===!1||null==b)return e(this);if(d.isArray(b))return b.length>0?(c.ids&&(c.ids=[c.name]),a.helpers.each(b,c)):e(this);if(c.data&&c.ids){var g=d.createFrame(c.data);g.contextPath=d.appendContextPath(c.data.contextPath,c.name),c={data:g}}return f(b,c)})},a.exports=b["default"]},function(a,b,c){"use strict";var d=c(2)["default"];b.__esModule=!0;var e=c(4),f=c(5),g=d(f);b["default"]=function(a){a.registerHelper("each",function(a,b){function c(b,c,f){j&&(j.key=b,j.index=c,j.first=0===c,j.last=!!f,k&&(j.contextPath=k+b)),i+=d(a[b],{data:j,blockParams:e.blockParams([a[b],b],[k+b,null])})}if(!b)throw new g["default"]("Must pass iterator to #each");var d=b.fn,f=b.inverse,h=0,i="",j=void 0,k=void 0;if(b.data&&b.ids&&(k=e.appendContextPath(b.data.contextPath,b.ids[0])+"."),e.isFunction(a)&&(a=a.call(this)),b.data&&(j=e.createFrame(b.data)),a&&"object"==typeof a)if(e.isArray(a))for(var l=a.length;l>h;h++)h in a&&c(h,h,h===a.length-1);else{var m=void 0;for(var n in a)a.hasOwnProperty(n)&&(void 0!==m&&c(m,h-1),m=n,h++);void 0!==m&&c(m,h-1,!0)}return 0===h&&(i=f(this)),i})},a.exports=b["default"]},function(a,b,c){"use strict";var d=c(2)["default"];b.__esModule=!0;var e=c(5),f=d(e);b["default"]=function(a){a.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new f["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')})},a.exports=b["default"]},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4);b["default"]=function(a){a.registerHelper("if",function(a,b){return d.isFunction(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||d.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})})},a.exports=b["default"]},function(a,b){"use strict";b.__esModule=!0,b["default"]=function(a){a.registerHelper("log",function(){for(var b=[void 0],c=arguments[arguments.length-1],d=0;d<arguments.length-1;d++)b.push(arguments[d]);var e=1;null!=c.hash.level?e=c.hash.level:c.data&&null!=c.data.level&&(e=c.data.level),b[0]=e,a.log.apply(a,b)})},a.exports=b["default"]},function(a,b){"use strict";b.__esModule=!0,b["default"]=function(a){a.registerHelper("lookup",function(a,b){return a&&a[b]})},a.exports=b["default"]},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4);b["default"]=function(a){a.registerHelper("with",function(a,b){d.isFunction(a)&&(a=a.call(this));var c=b.fn;if(d.isEmpty(a))return b.inverse(this);var e=b.data;return b.data&&b.ids&&(e=d.createFrame(b.data),e.contextPath=d.appendContextPath(b.data.contextPath,b.ids[0])),c(a,{data:e,blockParams:d.blockParams([a],[e&&e.contextPath])})})},a.exports=b["default"]},function(a,b,c){"use strict";function d(a){g["default"](a)}var e=c(2)["default"];b.__esModule=!0,b.registerDefaultDecorators=d;var f=c(15),g=e(f)},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4);b["default"]=function(a){a.registerDecorator("inline",function(a,b,c,e){var f=a;return b.partials||(b.partials={},f=function(e,f){var g=c.partials;c.partials=d.extend({},g,b.partials);var h=a(e,f);return c.partials=g,h}),b.partials[e.args[0]]=e.fn,f})},a.exports=b["default"]},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4),e={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(a){if("string"==typeof a){var b=d.indexOf(e.methodMap,a.toLowerCase());a=b>=0?b:parseInt(a,10)}return a},log:function(a){if(a=e.lookupLevel(a),"undefined"!=typeof console&&e.lookupLevel(e.level)<=a){var b=e.methodMap[a];console[b]||(b="log");for(var c=arguments.length,d=Array(c>1?c-1:0),f=1;c>f;f++)d[f-1]=arguments[f];console[b].apply(console,d)}}};b["default"]=e,a.exports=b["default"]},function(a,b){"use strict";function c(a){this.string=a}b.__esModule=!0,c.prototype.toString=c.prototype.toHTML=function(){return""+this.string},b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(a){var b=a&&a[0]||1,c=r.COMPILER_REVISION;if(b!==c){if(c>b){var d=r.REVISION_CHANGES[c],e=r.REVISION_CHANGES[b];throw new q["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+d+") or downgrade your runtime to an older version ("+e+").")}throw new q["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function e(a,b){function c(c,d,e){e.hash&&(d=o.extend({},d,e.hash),e.ids&&(e.ids[0]=!0)),c=b.VM.resolvePartial.call(this,c,d,e);var f=b.VM.invokePartial.call(this,c,d,e);if(null==f&&b.compile&&(e.partials[e.name]=b.compile(c,a.compilerOptions,b),f=e.partials[e.name](d,e)),null!=f){if(e.indent){for(var g=f.split("\n"),h=0,i=g.length;i>h&&(g[h]||h+1!==i);h++)g[h]=e.indent+g[h];f=g.join("\n")}return f}throw new q["default"]("The partial "+e.name+" could not be compiled when running in runtime-only mode")}function d(b){function c(b){return""+a.main(e,b,e.helpers,e.partials,g,i,h)}var f=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],g=f.data;d._setup(f),!f.partial&&a.useData&&(g=j(b,g));var h=void 0,i=a.useBlockParams?[]:void 0;return a.useDepths&&(h=f.depths?b!==f.depths[0]?[b].concat(f.depths):f.depths:[b]),(c=k(a.main,c,e,f.depths||[],g,i))(b,f)}if(!b)throw new q["default"]("No environment passed to template");if(!a||!a.main)throw new q["default"]("Unknown template object: "+typeof a);a.main.decorator=a.main_d,b.VM.checkRevision(a.compiler);var e={strict:function(a,b){if(!(b in a))throw new q["default"]('"'+b+'" not defined in '+a);return a[b]},lookup:function(a,b){for(var c=a.length,d=0;c>d;d++)if(a[d]&&null!=a[d][b])return a[d][b]},lambda:function(a,b){return"function"==typeof a?a.call(b):a},escapeExpression:o.escapeExpression,invokePartial:c,fn:function(b){var c=a[b];return c.decorator=a[b+"_d"],c},programs:[],program:function(a,b,c,d,e){var g=this.programs[a],h=this.fn(a);return b||e||d||c?g=f(this,a,h,b,c,d,e):g||(g=this.programs[a]=f(this,a,h)),g},data:function(a,b){for(;a&&b--;)a=a._parent;return a},merge:function(a,b){var c=a||b;return a&&b&&a!==b&&(c=o.extend({},b,a)),c},noop:b.VM.noop,compilerInfo:a.compiler};return d.isTop=!0,d._setup=function(c){c.partial?(e.helpers=c.helpers,e.partials=c.partials,e.decorators=c.decorators):(e.helpers=e.merge(c.helpers,b.helpers),a.usePartial&&(e.partials=e.merge(c.partials,b.partials)),(a.usePartial||a.useDecorators)&&(e.decorators=e.merge(c.decorators,b.decorators)))},d._child=function(b,c,d,g){if(a.useBlockParams&&!d)throw new q["default"]("must pass block params");if(a.useDepths&&!g)throw new q["default"]("must pass parent depths");return f(e,b,a[b],c,0,d,g)},d}function f(a,b,c,d,e,f,g){function h(b){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],h=g;return g&&b!==g[0]&&(h=[b].concat(g)),c(a,b,a.helpers,a.partials,e.data||d,f&&[e.blockParams].concat(f),h)}return h=k(c,h,a,g,d,f),h.program=b,h.depth=g?g.length:0,h.blockParams=e||0,h}function g(a,b,c){return a?a.call||c.name||(c.name=a,a=c.partials[a]):a="@partial-block"===c.name?c.data["partial-block"]:c.partials[c.name],a}function h(a,b,c){c.partial=!0,c.ids&&(c.data.contextPath=c.ids[0]||c.data.contextPath);var d=void 0;if(c.fn&&c.fn!==i&&(c.data=r.createFrame(c.data),d=c.data["partial-block"]=c.fn,d.partials&&(c.partials=o.extend({},c.partials,d.partials))),void 0===a&&d&&(a=d),void 0===a)throw new q["default"]("The partial "+c.name+" could not be found");return a instanceof Function?a(b,c):void 0}function i(){return""}function j(a,b){return b&&"root"in b||(b=b?r.createFrame(b):{},b.root=a),b}function k(a,b,c,d,e,f){if(a.decorator){var g={};b=a.decorator(b,g,c,d&&d[0],e,f,d),o.extend(b,g)}return b}var l=c(1)["default"],m=c(2)["default"];b.__esModule=!0,b.checkRevision=d,b.template=e,b.wrapProgram=f,b.resolvePartial=g,b.invokePartial=h,b.noop=i;var n=c(4),o=l(n),p=c(5),q=m(p),r=c(3)},function(a,b){(function(c){"use strict";b.__esModule=!0,b["default"]=function(a){var b="undefined"!=typeof c?c:window,d=b.Handlebars;a.noConflict=function(){return b.Handlebars===a&&(b.Handlebars=d),a}},a.exports=b["default"]}).call(b,function(){return this}())}])});
!function(d,B,m,f){function v(a,b){var c=Math.max(0,a[0]-b[0],b[0]-a[1]),e=Math.max(0,a[2]-b[1],b[1]-a[3]);return c+e}function w(a,b,c,e){var k=a.length;e=e?"offset":"position";for(c=c||0;k--;){var g=a[k].el?a[k].el:d(a[k]),l=g[e]();l.left+=parseInt(g.css("margin-left"),10);l.top+=parseInt(g.css("margin-top"),10);b[k]=[l.left-c,l.left+g.outerWidth()+c,l.top-c,l.top+g.outerHeight()+c]}}function p(a,b){var c=b.offset();return{left:a.left-c.left,top:a.top-c.top}}function x(a,b,c){b=[b.left,b.top];c=
c&&[c.left,c.top];for(var e,k=a.length,d=[];k--;)e=a[k],d[k]=[k,v(e,b),c&&v(e,c)];return d=d.sort(function(a,b){return b[1]-a[1]||b[2]-a[2]||b[0]-a[0]})}function q(a){this.options=d.extend({},n,a);this.containers=[];this.options.rootGroup||(this.scrollProxy=d.proxy(this.scroll,this),this.dragProxy=d.proxy(this.drag,this),this.dropProxy=d.proxy(this.drop,this),this.placeholder=d(this.options.placeholder),a.isValidTarget||(this.options.isValidTarget=f))}function t(a,b){this.el=a;this.options=d.extend({},
z,b);this.group=q.get(this.options);this.rootGroup=this.options.rootGroup||this.group;this.handle=this.rootGroup.options.handle||this.rootGroup.options.itemSelector;var c=this.rootGroup.options.itemPath;this.target=c?this.el.find(c):this.el;this.target.on(r.start,this.handle,d.proxy(this.dragInit,this));this.options.drop&&this.group.containers.push(this)}var r,z={drag:!0,drop:!0,exclude:"",nested:!0,vertical:!0},n={afterMove:function(a,b,c){},containerPath:"",containerSelector:"ol, ul",distance:0,
delay:0,handle:"",itemPath:"",itemSelector:"li",bodyClass:"dragging",draggedClass:"dragged",isValidTarget:function(a,b){return!0},onCancel:function(a,b,c,e){},onDrag:function(a,b,c,e){a.css(b)},onDragStart:function(a,b,c,e){a.css({height:a.outerHeight(),width:a.outerWidth()});a.addClass(b.group.options.draggedClass);d("body").addClass(b.group.options.bodyClass)},onDrop:function(a,b,c,e){a.removeClass(b.group.options.draggedClass).removeAttr("style");d("body").removeClass(b.group.options.bodyClass)},
onMousedown:function(a,b,c){if(!c.target.nodeName.match(/^(input|select|textarea)$/i))return c.preventDefault(),!0},placeholderClass:"placeholder",placeholder:'<li class="placeholder"></li>',pullPlaceholder:!0,serialize:function(a,b,c){a=d.extend({},a.data());if(c)return[b];b[0]&&(a.children=b);delete a.subContainers;delete a.sortable;return a},tolerance:0},s={},y=0,A={left:0,top:0,bottom:0,right:0};r={start:"touchstart.sortable mousedown.sortable",drop:"touchend.sortable touchcancel.sortable mouseup.sortable",
drag:"touchmove.sortable mousemove.sortable",scroll:"scroll.sortable"};q.get=function(a){s[a.group]||(a.group===f&&(a.group=y++),s[a.group]=new q(a));return s[a.group]};q.prototype={dragInit:function(a,b){this.$document=d(b.el[0].ownerDocument);var c=d(a.target).closest(this.options.itemSelector);c.length&&(this.item=c,this.itemContainer=b,!this.item.is(this.options.exclude)&&this.options.onMousedown(this.item,n.onMousedown,a)&&(this.setPointer(a),this.toggleListeners("on"),this.setupDelayTimer(),
this.dragInitDone=!0))},drag:function(a){if(!this.dragging){if(!this.distanceMet(a)||!this.delayMet)return;this.options.onDragStart(this.item,this.itemContainer,n.onDragStart,a);this.item.before(this.placeholder);this.dragging=!0}this.setPointer(a);this.options.onDrag(this.item,p(this.pointer,this.item.offsetParent()),n.onDrag,a);a=this.getPointer(a);var b=this.sameResultBox,c=this.options.tolerance;(!b||b.top-c>a.top||b.bottom+c<a.top||b.left-c>a.left||b.right+c<a.left)&&!this.searchValidTarget()&&
(this.placeholder.detach(),this.lastAppendedItem=f)},drop:function(a){this.toggleListeners("off");this.dragInitDone=!1;if(this.dragging){if(this.placeholder.closest("html")[0])this.placeholder.before(this.item).detach();else this.options.onCancel(this.item,this.itemContainer,n.onCancel,a);this.options.onDrop(this.item,this.getContainer(this.item),n.onDrop,a);this.clearDimensions();this.clearOffsetParent();this.lastAppendedItem=this.sameResultBox=f;this.dragging=!1}},searchValidTarget:function(a,b){a||
(a=this.relativePointer||this.pointer,b=this.lastRelativePointer||this.lastPointer);for(var c=x(this.getContainerDimensions(),a,b),e=c.length;e--;){var d=c[e][0];if(!c[e][1]||this.options.pullPlaceholder)if(d=this.containers[d],!d.disabled){if(!this.$getOffsetParent()){var g=d.getItemOffsetParent();a=p(a,g);b=p(b,g)}if(d.searchValidTarget(a,b))return!0}}this.sameResultBox&&(this.sameResultBox=f)},movePlaceholder:function(a,b,c,e){var d=this.lastAppendedItem;if(e||!d||d[0]!==b[0])b[c](this.placeholder),
this.lastAppendedItem=b,this.sameResultBox=e,this.options.afterMove(this.placeholder,a,b)},getContainerDimensions:function(){this.containerDimensions||w(this.containers,this.containerDimensions=[],this.options.tolerance,!this.$getOffsetParent());return this.containerDimensions},getContainer:function(a){return a.closest(this.options.containerSelector).data(m)},$getOffsetParent:function(){if(this.offsetParent===f){var a=this.containers.length-1,b=this.containers[a].getItemOffsetParent();if(!this.options.rootGroup)for(;a--;)if(b[0]!=
this.containers[a].getItemOffsetParent()[0]){b=!1;break}this.offsetParent=b}return this.offsetParent},setPointer:function(a){a=this.getPointer(a);if(this.$getOffsetParent()){var b=p(a,this.$getOffsetParent());this.lastRelativePointer=this.relativePointer;this.relativePointer=b}this.lastPointer=this.pointer;this.pointer=a},distanceMet:function(a){a=this.getPointer(a);return Math.max(Math.abs(this.pointer.left-a.left),Math.abs(this.pointer.top-a.top))>=this.options.distance},getPointer:function(a){var b=
a.originalEvent||a.originalEvent.touches&&a.originalEvent.touches[0];return{left:a.pageX||b.pageX,top:a.pageY||b.pageY}},setupDelayTimer:function(){var a=this;this.delayMet=!this.options.delay;this.delayMet||(clearTimeout(this._mouseDelayTimer),this._mouseDelayTimer=setTimeout(function(){a.delayMet=!0},this.options.delay))},scroll:function(a){this.clearDimensions();this.clearOffsetParent()},toggleListeners:function(a){var b=this;d.each(["drag","drop","scroll"],function(c,e){b.$document[a](r[e],b[e+
"Proxy"])})},clearOffsetParent:function(){this.offsetParent=f},clearDimensions:function(){this.traverse(function(a){a._clearDimensions()})},traverse:function(a){a(this);for(var b=this.containers.length;b--;)this.containers[b].traverse(a)},_clearDimensions:function(){this.containerDimensions=f},_destroy:function(){s[this.options.group]=f}};t.prototype={dragInit:function(a){var b=this.rootGroup;!this.disabled&&!b.dragInitDone&&this.options.drag&&this.isValidDrag(a)&&b.dragInit(a,this)},isValidDrag:function(a){return 1==
a.which||"touchstart"==a.type&&1==a.originalEvent.touches.length},searchValidTarget:function(a,b){var c=x(this.getItemDimensions(),a,b),e=c.length,d=this.rootGroup,g=!d.options.isValidTarget||d.options.isValidTarget(d.item,this);if(!e&&g)return d.movePlaceholder(this,this.target,"append"),!0;for(;e--;)if(d=c[e][0],!c[e][1]&&this.hasChildGroup(d)){if(this.getContainerGroup(d).searchValidTarget(a,b))return!0}else if(g)return this.movePlaceholder(d,a),!0},movePlaceholder:function(a,b){var c=d(this.items[a]),
e=this.itemDimensions[a],k="after",g=c.outerWidth(),f=c.outerHeight(),h=c.offset(),h={left:h.left,right:h.left+g,top:h.top,bottom:h.top+f};this.options.vertical?b.top<=(e[2]+e[3])/2?(k="before",h.bottom-=f/2):h.top+=f/2:b.left<=(e[0]+e[1])/2?(k="before",h.right-=g/2):h.left+=g/2;this.hasChildGroup(a)&&(h=A);this.rootGroup.movePlaceholder(this,c,k,h)},getItemDimensions:function(){this.itemDimensions||(this.items=this.$getChildren(this.el,"item").filter(":not(."+this.group.options.placeholderClass+
", ."+this.group.options.draggedClass+")").get(),w(this.items,this.itemDimensions=[],this.options.tolerance));return this.itemDimensions},getItemOffsetParent:function(){var a=this.el;return"relative"===a.css("position")||"absolute"===a.css("position")||"fixed"===a.css("position")?a:a.offsetParent()},hasChildGroup:function(a){return this.options.nested&&this.getContainerGroup(a)},getContainerGroup:function(a){var b=d.data(this.items[a],"subContainers");if(b===f){var c=this.$getChildren(this.items[a],
"container"),b=!1;c[0]&&(b=d.extend({},this.options,{rootGroup:this.rootGroup,group:y++}),b=c[m](b).data(m).group);d.data(this.items[a],"subContainers",b)}return b},$getChildren:function(a,b){var c=this.rootGroup.options,e=c[b+"Path"],c=c[b+"Selector"];a=d(a);e&&(a=a.find(e));return a.children(c)},_serialize:function(a,b){var c=this,e=this.$getChildren(a,b?"item":"container").not(this.options.exclude).map(function(){return c._serialize(d(this),!b)}).get();return this.rootGroup.options.serialize(a,
e,b)},traverse:function(a){d.each(this.items||[],function(b){(b=d.data(this,"subContainers"))&&b.traverse(a)});a(this)},_clearDimensions:function(){this.itemDimensions=f},_destroy:function(){var a=this;this.target.off(r.start,this.handle);this.el.removeData(m);this.options.drop&&(this.group.containers=d.grep(this.group.containers,function(b){return b!=a}));d.each(this.items||[],function(){d.removeData(this,"subContainers")})}};var u={enable:function(){this.traverse(function(a){a.disabled=!1})},disable:function(){this.traverse(function(a){a.disabled=
!0})},serialize:function(){return this._serialize(this.el,!0)},refresh:function(){this.traverse(function(a){a._clearDimensions()})},destroy:function(){this.traverse(function(a){a._destroy()})}};d.extend(t.prototype,u);d.fn[m]=function(a){var b=Array.prototype.slice.call(arguments,1);return this.map(function(){var c=d(this),e=c.data(m);if(e&&u[a])return u[a].apply(e,b)||this;e||a!==f&&"object"!==typeof a||c.data(m,new t(c,a));return this})}}(jQuery,window,"sortable");

/*! jQuery UI - v1.11.4+CommonJS - 2015-08-28
* http://jqueryui.com
* Includes: widget.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "jquery" ], factory );

	} else if ( typeof exports === "object" ) {

		// Node/CommonJS
		factory( require( "jquery" ) );

	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {
/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */


var widget_uuid = 0,
	widget_slice = Array.prototype.slice;

$.cleanData = (function( orig ) {
	return function( elems ) {
		var events, elem, i;
		for ( i = 0; (elem = elems[i]) != null; i++ ) {
			try {

				// Only trigger remove when necessary to save time
				events = $._data( elem, "events" );
				if ( events && events.remove ) {
					$( elem ).triggerHandler( "remove" );
				}

			// http://bugs.jquery.com/ticket/8235
			} catch ( e ) {}
		}
		orig( elems );
	};
})( $.cleanData );

$.widget = function( name, base, prototype ) {
	var fullName, existingConstructor, constructor, basePrototype,
		// proxiedPrototype allows the provided prototype to remain unmodified
		// so that it can be used as a mixin for multiple widgets (#8876)
		proxiedPrototype = {},
		namespace = name.split( "." )[ 0 ];

	name = name.split( "." )[ 1 ];
	fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	// create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {
		// allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};
	// extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,
		// copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),
		// track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	});

	basePrototype = new base();
	// we need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = (function() {
			var _super = function() {
					return base.prototype[ prop ].apply( this, arguments );
				},
				_superApply = function( args ) {
					return base.prototype[ prop ].apply( this, args );
				};
			return function() {
				var __super = this._super,
					__superApply = this._superApply,
					returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		})();
	});
	constructor.prototype = $.widget.extend( basePrototype, {
		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	});

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
		});
		// remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );

	return constructor;
};

$.widget.extend = function( target ) {
	var input = widget_slice.call( arguments, 1 ),
		inputIndex = 0,
		inputLength = input.length,
		key,
		value;
	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :
						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );
				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string",
			args = widget_slice.call( arguments, 1 ),
			returnValue = this;

		if ( isMethodCall ) {
			this.each(function() {
				var methodValue,
					instance = $.data( this, fullName );
				if ( options === "instance" ) {
					returnValue = instance;
					return false;
				}
				if ( !instance ) {
					return $.error( "cannot call methods on " + name + " prior to initialization; " +
						"attempted to call method '" + options + "'" );
				}
				if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
					return $.error( "no such method '" + options + "' for " + name + " widget instance" );
				}
				methodValue = instance[ options ].apply( instance, args );
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue && methodValue.jquery ?
						returnValue.pushStack( methodValue.get() ) :
						methodValue;
					return false;
				}
			});
		} else {

			// Allow multiple hashes to be passed on init
			if ( args.length ) {
				options = $.widget.extend.apply( null, [ options ].concat(args) );
			}

			this.each(function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} );
					if ( instance._init ) {
						instance._init();
					}
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			});
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",
	options: {
		disabled: false,

		// callbacks
		create: null
	},
	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = widget_uuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			});
			this.document = $( element.style ?
				// element within the document
				element.ownerDocument :
				// element is window or document
				element.document || element );
			this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
		}

		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this._create();
		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},
	_getCreateOptions: $.noop,
	_getCreateEventData: $.noop,
	_create: $.noop,
	_init: $.noop,

	destroy: function() {
		this._destroy();
		// we can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.unbind( this.eventNamespace )
			.removeData( this.widgetFullName )
			// support: jquery <1.6.3
			// http://bugs.jquery.com/ticket/9413
			.removeData( $.camelCase( this.widgetFullName ) );
		this.widget()
			.unbind( this.eventNamespace )
			.removeAttr( "aria-disabled" )
			.removeClass(
				this.widgetFullName + "-disabled " +
				"ui-state-disabled" );

		// clean up events and states
		this.bindings.unbind( this.eventNamespace );
		this.hoverable.removeClass( "ui-state-hover" );
		this.focusable.removeClass( "ui-state-focus" );
	},
	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key,
			parts,
			curOption,
			i;

		if ( arguments.length === 0 ) {
			// don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {
			// handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( arguments.length === 1 ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( arguments.length === 1 ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},
	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},
	_setOption: function( key, value ) {
		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this.widget()
				.toggleClass( this.widgetFullName + "-disabled", !!value );

			// If the widget is becoming disabled, then nothing is interactive
			if ( value ) {
				this.hoverable.removeClass( "ui-state-hover" );
				this.focusable.removeClass( "ui-state-focus" );
			}
		}

		return this;
	},

	enable: function() {
		return this._setOptions({ disabled: false });
	},
	disable: function() {
		return this._setOptions({ disabled: true });
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement,
			instance = this;

		// no suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// no element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {
				// allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
							$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^([\w:-]*)\s*(.*)$/ ),
				eventName = match[1] + instance.eventNamespace,
				selector = match[2];
			if ( selector ) {
				delegateElement.delegate( selector, eventName, handlerProxy );
			} else {
				element.bind( eventName, handlerProxy );
			}
		});
	},

	_off: function( element, eventName ) {
		eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) +
			this.eventNamespace;
		element.unbind( eventName ).undelegate( eventName );

		// Clear the stack to avoid memory leaks (#10056)
		this.bindings = $( this.bindings.not( element ).get() );
		this.focusable = $( this.focusable.not( element ).get() );
		this.hoverable = $( this.hoverable.not( element ).get() );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-hover" );
			},
			mouseleave: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-hover" );
			}
		});
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-focus" );
			},
			focusout: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-focus" );
			}
		});
	},

	_trigger: function( type, event, data ) {
		var prop, orig,
			callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();
		// the original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}
		var hasOptions,
			effectName = !options ?
				method :
				options === true || typeof options === "number" ?
					defaultEffect :
					options.effect || defaultEffect;
		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}
		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;
		if ( options.delay ) {
			element.delay( options.delay );
		}
		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue(function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			});
		}
	};
});

var widget = $.widget;



}));

/*
 * jQuery Iframe Transport Plugin
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global define, require, window, document */

(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS:
        factory(require('jquery'));
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // Helper variable to create unique names for the transport iframes:
    var counter = 0;

    // The iframe transport accepts four additional options:
    // options.fileInput: a jQuery collection of file input fields
    // options.paramName: the parameter name for the file form data,
    //  overrides the name property of the file input field(s),
    //  can be a string or an array of strings.
    // options.formData: an array of objects with name and value properties,
    //  equivalent to the return data of .serializeArray(), e.g.:
    //  [{name: 'a', value: 1}, {name: 'b', value: 2}]
    // options.initialIframeSrc: the URL of the initial iframe src,
    //  by default set to "javascript:false;"
    $.ajaxTransport('iframe', function (options) {
        if (options.async) {
            // javascript:false as initial iframe src
            // prevents warning popups on HTTPS in IE6:
            /*jshint scripturl: true */
            var initialIframeSrc = options.initialIframeSrc || 'javascript:false;',
            /*jshint scripturl: false */
                form,
                iframe,
                addParamChar;
            return {
                send: function (_, completeCallback) {
                    form = $('<form style="display:none;"></form>');
                    form.attr('accept-charset', options.formAcceptCharset);
                    addParamChar = /\?/.test(options.url) ? '&' : '?';
                    // XDomainRequest only supports GET and POST:
                    if (options.type === 'DELETE') {
                        options.url = options.url + addParamChar + '_method=DELETE';
                        options.type = 'POST';
                    } else if (options.type === 'PUT') {
                        options.url = options.url + addParamChar + '_method=PUT';
                        options.type = 'POST';
                    } else if (options.type === 'PATCH') {
                        options.url = options.url + addParamChar + '_method=PATCH';
                        options.type = 'POST';
                    }
                    // IE versions below IE8 cannot set the name property of
                    // elements that have already been added to the DOM,
                    // so we set the name along with the iframe HTML markup:
                    counter += 1;
                    iframe = $(
                        '<iframe src="' + initialIframeSrc +
                            '" name="iframe-transport-' + counter + '"></iframe>'
                    ).bind('load', function () {
                        var fileInputClones,
                            paramNames = $.isArray(options.paramName) ?
                                    options.paramName : [options.paramName];
                        iframe
                            .unbind('load')
                            .bind('load', function () {
                                var response;
                                // Wrap in a try/catch block to catch exceptions thrown
                                // when trying to access cross-domain iframe contents:
                                try {
                                    response = iframe.contents();
                                    // Google Chrome and Firefox do not throw an
                                    // exception when calling iframe.contents() on
                                    // cross-domain requests, so we unify the response:
                                    if (!response.length || !response[0].firstChild) {
                                        throw new Error();
                                    }
                                } catch (e) {
                                    response = undefined;
                                }
                                // The complete callback returns the
                                // iframe content document as response object:
                                completeCallback(
                                    200,
                                    'success',
                                    {'iframe': response}
                                );
                                // Fix for IE endless progress bar activity bug
                                // (happens on form submits to iframe targets):
                                $('<iframe src="' + initialIframeSrc + '"></iframe>')
                                    .appendTo(form);
                                window.setTimeout(function () {
                                    // Removing the form in a setTimeout call
                                    // allows Chrome's developer tools to display
                                    // the response result
                                    form.remove();
                                }, 0);
                            });
                        form
                            .prop('target', iframe.prop('name'))
                            .prop('action', options.url)
                            .prop('method', options.type);
                        if (options.formData) {
                            $.each(options.formData, function (index, field) {
                                $('<input type="hidden"/>')
                                    .prop('name', field.name)
                                    .val(field.value)
                                    .appendTo(form);
                            });
                        }
                        if (options.fileInput && options.fileInput.length &&
                                options.type === 'POST') {
                            fileInputClones = options.fileInput.clone();
                            // Insert a clone for each file input field:
                            options.fileInput.after(function (index) {
                                return fileInputClones[index];
                            });
                            if (options.paramName) {
                                options.fileInput.each(function (index) {
                                    $(this).prop(
                                        'name',
                                        paramNames[index] || options.paramName
                                    );
                                });
                            }
                            // Appending the file input fields to the hidden form
                            // removes them from their original location:
                            form
                                .append(options.fileInput)
                                .prop('enctype', 'multipart/form-data')
                                // enctype must be set as encoding for IE:
                                .prop('encoding', 'multipart/form-data');
                            // Remove the HTML5 form attribute from the input(s):
                            options.fileInput.removeAttr('form');
                        }
                        form.submit();
                        // Insert the file input fields at their original location
                        // by replacing the clones with the originals:
                        if (fileInputClones && fileInputClones.length) {
                            options.fileInput.each(function (index, input) {
                                var clone = $(fileInputClones[index]);
                                // Restore the original name and form properties:
                                $(input)
                                    .prop('name', clone.prop('name'))
                                    .attr('form', clone.attr('form'));
                                clone.replaceWith(input);
                            });
                        }
                    });
                    form.append(iframe).appendTo(document.body);
                },
                abort: function () {
                    if (iframe) {
                        // javascript:false as iframe src aborts the request
                        // and prevents warning popups on HTTPS in IE6.
                        // concat is used to avoid the "Script URL" JSLint error:
                        iframe
                            .unbind('load')
                            .prop('src', initialIframeSrc);
                    }
                    if (form) {
                        form.remove();
                    }
                }
            };
        }
    });

    // The iframe transport returns the iframe content document as response.
    // The following adds converters from iframe to text, json, html, xml
    // and script.
    // Please note that the Content-Type for JSON responses has to be text/plain
    // or text/html, if the browser doesn't include application/json in the
    // Accept header, else IE will show a download dialog.
    // The Content-Type for XML responses on the other hand has to be always
    // application/xml or text/xml, so IE properly parses the XML response.
    // See also
    // https://github.com/blueimp/jQuery-File-Upload/wiki/Setup#content-type-negotiation
    $.ajaxSetup({
        converters: {
            'iframe text': function (iframe) {
                return iframe && $(iframe[0].body).text();
            },
            'iframe json': function (iframe) {
                return iframe && $.parseJSON($(iframe[0].body).text());
            },
            'iframe html': function (iframe) {
                return iframe && $(iframe[0].body).html();
            },
            'iframe xml': function (iframe) {
                var xmlDoc = iframe && iframe[0];
                return xmlDoc && $.isXMLDoc(xmlDoc) ? xmlDoc :
                        $.parseXML((xmlDoc.XMLDocument && xmlDoc.XMLDocument.xml) ||
                            $(xmlDoc.body).html());
            },
            'iframe script': function (iframe) {
                return iframe && $.globalEval($(iframe[0].body).text());
            }
        }
    });

}));

/*
 * jQuery File Upload Plugin
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* jshint nomen:false */
/* global define, require, window, document, location, Blob, FormData */

(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            'jquery',
            'jquery.ui.widget'
        ], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS:
        factory(
            require('jquery'),
            require('./vendor/jquery.ui.widget')
        );
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // Detect file input support, based on
    // http://viljamis.com/blog/2012/file-upload-support-on-mobile/
    $.support.fileInput = !(new RegExp(
        // Handle devices which give false positives for the feature detection:
        '(Android (1\\.[0156]|2\\.[01]))' +
            '|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)' +
            '|(w(eb)?OSBrowser)|(webOS)' +
            '|(Kindle/(1\\.0|2\\.[05]|3\\.0))'
    ).test(window.navigator.userAgent) ||
        // Feature detection for all other devices:
        $('<input type="file">').prop('disabled'));

    // The FileReader API is not actually used, but works as feature detection,
    // as some Safari versions (5?) support XHR file uploads via the FormData API,
    // but not non-multipart XHR file uploads.
    // window.XMLHttpRequestUpload is not available on IE10, so we check for
    // window.ProgressEvent instead to detect XHR2 file upload capability:
    $.support.xhrFileUpload = !!(window.ProgressEvent && window.FileReader);
    $.support.xhrFormDataFileUpload = !!window.FormData;

    // Detect support for Blob slicing (required for chunked uploads):
    $.support.blobSlice = window.Blob && (Blob.prototype.slice ||
        Blob.prototype.webkitSlice || Blob.prototype.mozSlice);

    // Helper function to create drag handlers for dragover/dragenter/dragleave:
    function getDragHandler(type) {
        var isDragOver = type === 'dragover';
        return function (e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var dataTransfer = e.dataTransfer;
            if (dataTransfer && $.inArray('Files', dataTransfer.types) !== -1 &&
                    this._trigger(
                        type,
                        $.Event(type, {delegatedEvent: e})
                    ) !== false) {
                e.preventDefault();
                if (isDragOver) {
                    dataTransfer.dropEffect = 'copy';
                }
            }
        };
    }

    // The fileupload widget listens for change events on file input fields defined
    // via fileInput setting and paste or drop events of the given dropZone.
    // In addition to the default jQuery Widget methods, the fileupload widget
    // exposes the "add" and "send" methods, to add or directly send files using
    // the fileupload API.
    // By default, files added via file input selection, paste, drag & drop or
    // "add" method are uploaded immediately, but it is possible to override
    // the "add" callback option to queue file uploads.
    $.widget('blueimp.fileupload', {

        options: {
            // The drop target element(s), by the default the complete document.
            // Set to null to disable drag & drop support:
            dropZone: $(document),
            // The paste target element(s), by the default undefined.
            // Set to a DOM node or jQuery object to enable file pasting:
            pasteZone: undefined,
            // The file input field(s), that are listened to for change events.
            // If undefined, it is set to the file input fields inside
            // of the widget element on plugin initialization.
            // Set to null to disable the change listener.
            fileInput: undefined,
            // By default, the file input field is replaced with a clone after
            // each input field change event. This is required for iframe transport
            // queues and allows change events to be fired for the same file
            // selection, but can be disabled by setting the following option to false:
            replaceFileInput: true,
            // The parameter name for the file form data (the request argument name).
            // If undefined or empty, the name property of the file input field is
            // used, or "files[]" if the file input name property is also empty,
            // can be a string or an array of strings:
            paramName: undefined,
            // By default, each file of a selection is uploaded using an individual
            // request for XHR type uploads. Set to false to upload file
            // selections in one request each:
            singleFileUploads: true,
            // To limit the number of files uploaded with one XHR request,
            // set the following option to an integer greater than 0:
            limitMultiFileUploads: undefined,
            // The following option limits the number of files uploaded with one
            // XHR request to keep the request size under or equal to the defined
            // limit in bytes:
            limitMultiFileUploadSize: undefined,
            // Multipart file uploads add a number of bytes to each uploaded file,
            // therefore the following option adds an overhead for each file used
            // in the limitMultiFileUploadSize configuration:
            limitMultiFileUploadSizeOverhead: 512,
            // Set the following option to true to issue all file upload requests
            // in a sequential order:
            sequentialUploads: false,
            // To limit the number of concurrent uploads,
            // set the following option to an integer greater than 0:
            limitConcurrentUploads: undefined,
            // Set the following option to true to force iframe transport uploads:
            forceIframeTransport: false,
            // Set the following option to the location of a redirect url on the
            // origin server, for cross-domain iframe transport uploads:
            redirect: undefined,
            // The parameter name for the redirect url, sent as part of the form
            // data and set to 'redirect' if this option is empty:
            redirectParamName: undefined,
            // Set the following option to the location of a postMessage window,
            // to enable postMessage transport uploads:
            postMessage: undefined,
            // By default, XHR file uploads are sent as multipart/form-data.
            // The iframe transport is always using multipart/form-data.
            // Set to false to enable non-multipart XHR uploads:
            multipart: true,
            // To upload large files in smaller chunks, set the following option
            // to a preferred maximum chunk size. If set to 0, null or undefined,
            // or the browser does not support the required Blob API, files will
            // be uploaded as a whole.
            maxChunkSize: undefined,
            // When a non-multipart upload or a chunked multipart upload has been
            // aborted, this option can be used to resume the upload by setting
            // it to the size of the already uploaded bytes. This option is most
            // useful when modifying the options object inside of the "add" or
            // "send" callbacks, as the options are cloned for each file upload.
            uploadedBytes: undefined,
            // By default, failed (abort or error) file uploads are removed from the
            // global progress calculation. Set the following option to false to
            // prevent recalculating the global progress data:
            recalculateProgress: true,
            // Interval in milliseconds to calculate and trigger progress events:
            progressInterval: 100,
            // Interval in milliseconds to calculate progress bitrate:
            bitrateInterval: 500,
            // By default, uploads are started automatically when adding files:
            autoUpload: true,

            // Error and info messages:
            messages: {
                uploadedBytes: 'Uploaded bytes exceed file size'
            },

            // Translation function, gets the message key to be translated
            // and an object with context specific data as arguments:
            i18n: function (message, context) {
                message = this.messages[message] || message.toString();
                if (context) {
                    $.each(context, function (key, value) {
                        message = message.replace('{' + key + '}', value);
                    });
                }
                return message;
            },

            // Additional form data to be sent along with the file uploads can be set
            // using this option, which accepts an array of objects with name and
            // value properties, a function returning such an array, a FormData
            // object (for XHR file uploads), or a simple object.
            // The form of the first fileInput is given as parameter to the function:
            formData: function (form) {
                return form.serializeArray();
            },

            // The add callback is invoked as soon as files are added to the fileupload
            // widget (via file input selection, drag & drop, paste or add API call).
            // If the singleFileUploads option is enabled, this callback will be
            // called once for each file in the selection for XHR file uploads, else
            // once for each file selection.
            //
            // The upload starts when the submit method is invoked on the data parameter.
            // The data object contains a files property holding the added files
            // and allows you to override plugin options as well as define ajax settings.
            //
            // Listeners for this callback can also be bound the following way:
            // .bind('fileuploadadd', func);
            //
            // data.submit() returns a Promise object and allows to attach additional
            // handlers using jQuery's Deferred callbacks:
            // data.submit().done(func).fail(func).always(func);
            add: function (e, data) {
                if (e.isDefaultPrevented()) {
                    return false;
                }
                if (data.autoUpload || (data.autoUpload !== false &&
                        $(this).fileupload('option', 'autoUpload'))) {
                    data.process().done(function () {
                        data.submit();
                    });
                }
            },

            // Other callbacks:

            // Callback for the submit event of each file upload:
            // submit: function (e, data) {}, // .bind('fileuploadsubmit', func);

            // Callback for the start of each file upload request:
            // send: function (e, data) {}, // .bind('fileuploadsend', func);

            // Callback for successful uploads:
            // done: function (e, data) {}, // .bind('fileuploaddone', func);

            // Callback for failed (abort or error) uploads:
            // fail: function (e, data) {}, // .bind('fileuploadfail', func);

            // Callback for completed (success, abort or error) requests:
            // always: function (e, data) {}, // .bind('fileuploadalways', func);

            // Callback for upload progress events:
            // progress: function (e, data) {}, // .bind('fileuploadprogress', func);

            // Callback for global upload progress events:
            // progressall: function (e, data) {}, // .bind('fileuploadprogressall', func);

            // Callback for uploads start, equivalent to the global ajaxStart event:
            // start: function (e) {}, // .bind('fileuploadstart', func);

            // Callback for uploads stop, equivalent to the global ajaxStop event:
            // stop: function (e) {}, // .bind('fileuploadstop', func);

            // Callback for change events of the fileInput(s):
            // change: function (e, data) {}, // .bind('fileuploadchange', func);

            // Callback for paste events to the pasteZone(s):
            // paste: function (e, data) {}, // .bind('fileuploadpaste', func);

            // Callback for drop events of the dropZone(s):
            // drop: function (e, data) {}, // .bind('fileuploaddrop', func);

            // Callback for dragover events of the dropZone(s):
            // dragover: function (e) {}, // .bind('fileuploaddragover', func);

            // Callback for the start of each chunk upload request:
            // chunksend: function (e, data) {}, // .bind('fileuploadchunksend', func);

            // Callback for successful chunk uploads:
            // chunkdone: function (e, data) {}, // .bind('fileuploadchunkdone', func);

            // Callback for failed (abort or error) chunk uploads:
            // chunkfail: function (e, data) {}, // .bind('fileuploadchunkfail', func);

            // Callback for completed (success, abort or error) chunk upload requests:
            // chunkalways: function (e, data) {}, // .bind('fileuploadchunkalways', func);

            // The plugin options are used as settings object for the ajax calls.
            // The following are jQuery ajax settings required for the file uploads:
            processData: false,
            contentType: false,
            cache: false,
            timeout: 0
        },

        // A list of options that require reinitializing event listeners and/or
        // special initialization code:
        _specialOptions: [
            'fileInput',
            'dropZone',
            'pasteZone',
            'multipart',
            'forceIframeTransport'
        ],

        _blobSlice: $.support.blobSlice && function () {
            var slice = this.slice || this.webkitSlice || this.mozSlice;
            return slice.apply(this, arguments);
        },

        _BitrateTimer: function () {
            this.timestamp = ((Date.now) ? Date.now() : (new Date()).getTime());
            this.loaded = 0;
            this.bitrate = 0;
            this.getBitrate = function (now, loaded, interval) {
                var timeDiff = now - this.timestamp;
                if (!this.bitrate || !interval || timeDiff > interval) {
                    this.bitrate = (loaded - this.loaded) * (1000 / timeDiff) * 8;
                    this.loaded = loaded;
                    this.timestamp = now;
                }
                return this.bitrate;
            };
        },

        _isXHRUpload: function (options) {
            return !options.forceIframeTransport &&
                ((!options.multipart && $.support.xhrFileUpload) ||
                $.support.xhrFormDataFileUpload);
        },

        _getFormData: function (options) {
            var formData;
            if ($.type(options.formData) === 'function') {
                return options.formData(options.form);
            }
            if ($.isArray(options.formData)) {
                return options.formData;
            }
            if ($.type(options.formData) === 'object') {
                formData = [];
                $.each(options.formData, function (name, value) {
                    formData.push({name: name, value: value});
                });
                return formData;
            }
            return [];
        },

        _getTotal: function (files) {
            var total = 0;
            $.each(files, function (index, file) {
                total += file.size || 1;
            });
            return total;
        },

        _initProgressObject: function (obj) {
            var progress = {
                loaded: 0,
                total: 0,
                bitrate: 0
            };
            if (obj._progress) {
                $.extend(obj._progress, progress);
            } else {
                obj._progress = progress;
            }
        },

        _initResponseObject: function (obj) {
            var prop;
            if (obj._response) {
                for (prop in obj._response) {
                    if (obj._response.hasOwnProperty(prop)) {
                        delete obj._response[prop];
                    }
                }
            } else {
                obj._response = {};
            }
        },

        _onProgress: function (e, data) {
            if (e.lengthComputable) {
                var now = ((Date.now) ? Date.now() : (new Date()).getTime()),
                    loaded;
                if (data._time && data.progressInterval &&
                        (now - data._time < data.progressInterval) &&
                        e.loaded !== e.total) {
                    return;
                }
                data._time = now;
                loaded = Math.floor(
                    e.loaded / e.total * (data.chunkSize || data._progress.total)
                ) + (data.uploadedBytes || 0);
                // Add the difference from the previously loaded state
                // to the global loaded counter:
                this._progress.loaded += (loaded - data._progress.loaded);
                this._progress.bitrate = this._bitrateTimer.getBitrate(
                    now,
                    this._progress.loaded,
                    data.bitrateInterval
                );
                data._progress.loaded = data.loaded = loaded;
                data._progress.bitrate = data.bitrate = data._bitrateTimer.getBitrate(
                    now,
                    loaded,
                    data.bitrateInterval
                );
                // Trigger a custom progress event with a total data property set
                // to the file size(s) of the current upload and a loaded data
                // property calculated accordingly:
                this._trigger(
                    'progress',
                    $.Event('progress', {delegatedEvent: e}),
                    data
                );
                // Trigger a global progress event for all current file uploads,
                // including ajax calls queued for sequential file uploads:
                this._trigger(
                    'progressall',
                    $.Event('progressall', {delegatedEvent: e}),
                    this._progress
                );
            }
        },

        _initProgressListener: function (options) {
            var that = this,
                xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
            // Accesss to the native XHR object is required to add event listeners
            // for the upload progress event:
            if (xhr.upload) {
                $(xhr.upload).bind('progress', function (e) {
                    var oe = e.originalEvent;
                    // Make sure the progress event properties get copied over:
                    e.lengthComputable = oe.lengthComputable;
                    e.loaded = oe.loaded;
                    e.total = oe.total;
                    that._onProgress(e, options);
                });
                options.xhr = function () {
                    return xhr;
                };
            }
        },

        _isInstanceOf: function (type, obj) {
            // Cross-frame instanceof check
            return Object.prototype.toString.call(obj) === '[object ' + type + ']';
        },

        _initXHRData: function (options) {
            var that = this,
                formData,
                file = options.files[0],
                // Ignore non-multipart setting if not supported:
                multipart = options.multipart || !$.support.xhrFileUpload,
                paramName = $.type(options.paramName) === 'array' ?
                    options.paramName[0] : options.paramName;
            options.headers = $.extend({}, options.headers);
            if (options.contentRange) {
                options.headers['Content-Range'] = options.contentRange;
            }
            if (!multipart || options.blob || !this._isInstanceOf('File', file)) {
                options.headers['Content-Disposition'] = 'attachment; filename="' +
                    encodeURI(file.name) + '"';
            }
            if (!multipart) {
                options.contentType = file.type || 'application/octet-stream';
                options.data = options.blob || file;
            } else if ($.support.xhrFormDataFileUpload) {
                if (options.postMessage) {
                    // window.postMessage does not allow sending FormData
                    // objects, so we just add the File/Blob objects to
                    // the formData array and let the postMessage window
                    // create the FormData object out of this array:
                    formData = this._getFormData(options);
                    if (options.blob) {
                        formData.push({
                            name: paramName,
                            value: options.blob
                        });
                    } else {
                        $.each(options.files, function (index, file) {
                            formData.push({
                                name: ($.type(options.paramName) === 'array' &&
                                    options.paramName[index]) || paramName,
                                value: file
                            });
                        });
                    }
                } else {
                    if (that._isInstanceOf('FormData', options.formData)) {
                        formData = options.formData;
                    } else {
                        formData = new FormData();
                        $.each(this._getFormData(options), function (index, field) {
                            formData.append(field.name, field.value);
                        });
                    }
                    if (options.blob) {
                        formData.append(paramName, options.blob, file.name);
                    } else {
                        $.each(options.files, function (index, file) {
                            // This check allows the tests to run with
                            // dummy objects:
                            if (that._isInstanceOf('File', file) ||
                                    that._isInstanceOf('Blob', file)) {
                                formData.append(
                                    ($.type(options.paramName) === 'array' &&
                                        options.paramName[index]) || paramName,
                                    file,
                                    file.uploadName || file.name
                                );
                            }
                        });
                    }
                }
                options.data = formData;
            }
            // Blob reference is not needed anymore, free memory:
            options.blob = null;
        },

        _initIframeSettings: function (options) {
            var targetHost = $('<a></a>').prop('href', options.url).prop('host');
            // Setting the dataType to iframe enables the iframe transport:
            options.dataType = 'iframe ' + (options.dataType || '');
            // The iframe transport accepts a serialized array as form data:
            options.formData = this._getFormData(options);
            // Add redirect url to form data on cross-domain uploads:
            if (options.redirect && targetHost && targetHost !== location.host) {
                options.formData.push({
                    name: options.redirectParamName || 'redirect',
                    value: options.redirect
                });
            }
        },

        _initDataSettings: function (options) {
            if (this._isXHRUpload(options)) {
                if (!this._chunkedUpload(options, true)) {
                    if (!options.data) {
                        this._initXHRData(options);
                    }
                    this._initProgressListener(options);
                }
                if (options.postMessage) {
                    // Setting the dataType to postmessage enables the
                    // postMessage transport:
                    options.dataType = 'postmessage ' + (options.dataType || '');
                }
            } else {
                this._initIframeSettings(options);
            }
        },

        _getParamName: function (options) {
            var fileInput = $(options.fileInput),
                paramName = options.paramName;
            if (!paramName) {
                paramName = [];
                fileInput.each(function () {
                    var input = $(this),
                        name = input.prop('name') || 'files[]',
                        i = (input.prop('files') || [1]).length;
                    while (i) {
                        paramName.push(name);
                        i -= 1;
                    }
                });
                if (!paramName.length) {
                    paramName = [fileInput.prop('name') || 'files[]'];
                }
            } else if (!$.isArray(paramName)) {
                paramName = [paramName];
            }
            return paramName;
        },

        _initFormSettings: function (options) {
            // Retrieve missing options from the input field and the
            // associated form, if available:
            if (!options.form || !options.form.length) {
                options.form = $(options.fileInput.prop('form'));
                // If the given file input doesn't have an associated form,
                // use the default widget file input's form:
                if (!options.form.length) {
                    options.form = $(this.options.fileInput.prop('form'));
                }
            }
            options.paramName = this._getParamName(options);
            if (!options.url) {
                options.url = options.form.prop('action') || location.href;
            }
            // The HTTP request method must be "POST" or "PUT":
            options.type = (options.type ||
                ($.type(options.form.prop('method')) === 'string' &&
                    options.form.prop('method')) || ''
                ).toUpperCase();
            if (options.type !== 'POST' && options.type !== 'PUT' &&
                    options.type !== 'PATCH') {
                options.type = 'POST';
            }
            if (!options.formAcceptCharset) {
                options.formAcceptCharset = options.form.attr('accept-charset');
            }
        },

        _getAJAXSettings: function (data) {
            var options = $.extend({}, this.options, data);
            this._initFormSettings(options);
            this._initDataSettings(options);
            return options;
        },

        // jQuery 1.6 doesn't provide .state(),
        // while jQuery 1.8+ removed .isRejected() and .isResolved():
        _getDeferredState: function (deferred) {
            if (deferred.state) {
                return deferred.state();
            }
            if (deferred.isResolved()) {
                return 'resolved';
            }
            if (deferred.isRejected()) {
                return 'rejected';
            }
            return 'pending';
        },

        // Maps jqXHR callbacks to the equivalent
        // methods of the given Promise object:
        _enhancePromise: function (promise) {
            promise.success = promise.done;
            promise.error = promise.fail;
            promise.complete = promise.always;
            return promise;
        },

        // Creates and returns a Promise object enhanced with
        // the jqXHR methods abort, success, error and complete:
        _getXHRPromise: function (resolveOrReject, context, args) {
            var dfd = $.Deferred(),
                promise = dfd.promise();
            context = context || this.options.context || promise;
            if (resolveOrReject === true) {
                dfd.resolveWith(context, args);
            } else if (resolveOrReject === false) {
                dfd.rejectWith(context, args);
            }
            promise.abort = dfd.promise;
            return this._enhancePromise(promise);
        },

        // Adds convenience methods to the data callback argument:
        _addConvenienceMethods: function (e, data) {
            var that = this,
                getPromise = function (args) {
                    return $.Deferred().resolveWith(that, args).promise();
                };
            data.process = function (resolveFunc, rejectFunc) {
                if (resolveFunc || rejectFunc) {
                    data._processQueue = this._processQueue =
                        (this._processQueue || getPromise([this])).pipe(
                            function () {
                                if (data.errorThrown) {
                                    return $.Deferred()
                                        .rejectWith(that, [data]).promise();
                                }
                                return getPromise(arguments);
                            }
                        ).pipe(resolveFunc, rejectFunc);
                }
                return this._processQueue || getPromise([this]);
            };
            data.submit = function () {
                if (this.state() !== 'pending') {
                    data.jqXHR = this.jqXHR =
                        (that._trigger(
                            'submit',
                            $.Event('submit', {delegatedEvent: e}),
                            this
                        ) !== false) && that._onSend(e, this);
                }
                return this.jqXHR || that._getXHRPromise();
            };
            data.abort = function () {
                if (this.jqXHR) {
                    return this.jqXHR.abort();
                }
                this.errorThrown = 'abort';
                that._trigger('fail', null, this);
                return that._getXHRPromise(false);
            };
            data.state = function () {
                if (this.jqXHR) {
                    return that._getDeferredState(this.jqXHR);
                }
                if (this._processQueue) {
                    return that._getDeferredState(this._processQueue);
                }
            };
            data.processing = function () {
                return !this.jqXHR && this._processQueue && that
                    ._getDeferredState(this._processQueue) === 'pending';
            };
            data.progress = function () {
                return this._progress;
            };
            data.response = function () {
                return this._response;
            };
        },

        // Parses the Range header from the server response
        // and returns the uploaded bytes:
        _getUploadedBytes: function (jqXHR) {
            var range = jqXHR.getResponseHeader('Range'),
                parts = range && range.split('-'),
                upperBytesPos = parts && parts.length > 1 &&
                    parseInt(parts[1], 10);
            return upperBytesPos && upperBytesPos + 1;
        },

        // Uploads a file in multiple, sequential requests
        // by splitting the file up in multiple blob chunks.
        // If the second parameter is true, only tests if the file
        // should be uploaded in chunks, but does not invoke any
        // upload requests:
        _chunkedUpload: function (options, testOnly) {
            options.uploadedBytes = options.uploadedBytes || 0;
            var that = this,
                file = options.files[0],
                fs = file.size,
                ub = options.uploadedBytes,
                mcs = options.maxChunkSize || fs,
                slice = this._blobSlice,
                dfd = $.Deferred(),
                promise = dfd.promise(),
                jqXHR,
                upload;
            if (!(this._isXHRUpload(options) && slice && (ub || mcs < fs)) ||
                    options.data) {
                return false;
            }
            if (testOnly) {
                return true;
            }
            if (ub >= fs) {
                file.error = options.i18n('uploadedBytes');
                return this._getXHRPromise(
                    false,
                    options.context,
                    [null, 'error', file.error]
                );
            }
            // The chunk upload method:
            upload = function () {
                // Clone the options object for each chunk upload:
                var o = $.extend({}, options),
                    currentLoaded = o._progress.loaded;
                o.blob = slice.call(
                    file,
                    ub,
                    ub + mcs,
                    file.type
                );
                // Store the current chunk size, as the blob itself
                // will be dereferenced after data processing:
                o.chunkSize = o.blob.size;
                // Expose the chunk bytes position range:
                o.contentRange = 'bytes ' + ub + '-' +
                    (ub + o.chunkSize - 1) + '/' + fs;
                // Process the upload data (the blob and potential form data):
                that._initXHRData(o);
                // Add progress listeners for this chunk upload:
                that._initProgressListener(o);
                jqXHR = ((that._trigger('chunksend', null, o) !== false && $.ajax(o)) ||
                        that._getXHRPromise(false, o.context))
                    .done(function (result, textStatus, jqXHR) {
                        ub = that._getUploadedBytes(jqXHR) ||
                            (ub + o.chunkSize);
                        // Create a progress event if no final progress event
                        // with loaded equaling total has been triggered
                        // for this chunk:
                        if (currentLoaded + o.chunkSize - o._progress.loaded) {
                            that._onProgress($.Event('progress', {
                                lengthComputable: true,
                                loaded: ub - o.uploadedBytes,
                                total: ub - o.uploadedBytes
                            }), o);
                        }
                        options.uploadedBytes = o.uploadedBytes = ub;
                        o.result = result;
                        o.textStatus = textStatus;
                        o.jqXHR = jqXHR;
                        that._trigger('chunkdone', null, o);
                        that._trigger('chunkalways', null, o);
                        if (ub < fs) {
                            // File upload not yet complete,
                            // continue with the next chunk:
                            upload();
                        } else {
                            dfd.resolveWith(
                                o.context,
                                [result, textStatus, jqXHR]
                            );
                        }
                    })
                    .fail(function (jqXHR, textStatus, errorThrown) {
                        o.jqXHR = jqXHR;
                        o.textStatus = textStatus;
                        o.errorThrown = errorThrown;
                        that._trigger('chunkfail', null, o);
                        that._trigger('chunkalways', null, o);
                        dfd.rejectWith(
                            o.context,
                            [jqXHR, textStatus, errorThrown]
                        );
                    });
            };
            this._enhancePromise(promise);
            promise.abort = function () {
                return jqXHR.abort();
            };
            upload();
            return promise;
        },

        _beforeSend: function (e, data) {
            if (this._active === 0) {
                // the start callback is triggered when an upload starts
                // and no other uploads are currently running,
                // equivalent to the global ajaxStart event:
                this._trigger('start');
                // Set timer for global bitrate progress calculation:
                this._bitrateTimer = new this._BitrateTimer();
                // Reset the global progress values:
                this._progress.loaded = this._progress.total = 0;
                this._progress.bitrate = 0;
            }
            // Make sure the container objects for the .response() and
            // .progress() methods on the data object are available
            // and reset to their initial state:
            this._initResponseObject(data);
            this._initProgressObject(data);
            data._progress.loaded = data.loaded = data.uploadedBytes || 0;
            data._progress.total = data.total = this._getTotal(data.files) || 1;
            data._progress.bitrate = data.bitrate = 0;
            this._active += 1;
            // Initialize the global progress values:
            this._progress.loaded += data.loaded;
            this._progress.total += data.total;
        },

        _onDone: function (result, textStatus, jqXHR, options) {
            var total = options._progress.total,
                response = options._response;
            if (options._progress.loaded < total) {
                // Create a progress event if no final progress event
                // with loaded equaling total has been triggered:
                this._onProgress($.Event('progress', {
                    lengthComputable: true,
                    loaded: total,
                    total: total
                }), options);
            }
            response.result = options.result = result;
            response.textStatus = options.textStatus = textStatus;
            response.jqXHR = options.jqXHR = jqXHR;
            this._trigger('done', null, options);
        },

        _onFail: function (jqXHR, textStatus, errorThrown, options) {
            var response = options._response;
            if (options.recalculateProgress) {
                // Remove the failed (error or abort) file upload from
                // the global progress calculation:
                this._progress.loaded -= options._progress.loaded;
                this._progress.total -= options._progress.total;
            }
            response.jqXHR = options.jqXHR = jqXHR;
            response.textStatus = options.textStatus = textStatus;
            response.errorThrown = options.errorThrown = errorThrown;
            this._trigger('fail', null, options);
        },

        _onAlways: function (jqXHRorResult, textStatus, jqXHRorError, options) {
            // jqXHRorResult, textStatus and jqXHRorError are added to the
            // options object via done and fail callbacks
            this._trigger('always', null, options);
        },

        _onSend: function (e, data) {
            if (!data.submit) {
                this._addConvenienceMethods(e, data);
            }
            var that = this,
                jqXHR,
                aborted,
                slot,
                pipe,
                options = that._getAJAXSettings(data),
                send = function () {
                    that._sending += 1;
                    // Set timer for bitrate progress calculation:
                    options._bitrateTimer = new that._BitrateTimer();
                    jqXHR = jqXHR || (
                        ((aborted || that._trigger(
                            'send',
                            $.Event('send', {delegatedEvent: e}),
                            options
                        ) === false) &&
                        that._getXHRPromise(false, options.context, aborted)) ||
                        that._chunkedUpload(options) || $.ajax(options)
                    ).done(function (result, textStatus, jqXHR) {
                        that._onDone(result, textStatus, jqXHR, options);
                    }).fail(function (jqXHR, textStatus, errorThrown) {
                        that._onFail(jqXHR, textStatus, errorThrown, options);
                    }).always(function (jqXHRorResult, textStatus, jqXHRorError) {
                        that._onAlways(
                            jqXHRorResult,
                            textStatus,
                            jqXHRorError,
                            options
                        );
                        that._sending -= 1;
                        that._active -= 1;
                        if (options.limitConcurrentUploads &&
                                options.limitConcurrentUploads > that._sending) {
                            // Start the next queued upload,
                            // that has not been aborted:
                            var nextSlot = that._slots.shift();
                            while (nextSlot) {
                                if (that._getDeferredState(nextSlot) === 'pending') {
                                    nextSlot.resolve();
                                    break;
                                }
                                nextSlot = that._slots.shift();
                            }
                        }
                        if (that._active === 0) {
                            // The stop callback is triggered when all uploads have
                            // been completed, equivalent to the global ajaxStop event:
                            that._trigger('stop');
                        }
                    });
                    return jqXHR;
                };
            this._beforeSend(e, options);
            if (this.options.sequentialUploads ||
                    (this.options.limitConcurrentUploads &&
                    this.options.limitConcurrentUploads <= this._sending)) {
                if (this.options.limitConcurrentUploads > 1) {
                    slot = $.Deferred();
                    this._slots.push(slot);
                    pipe = slot.pipe(send);
                } else {
                    this._sequence = this._sequence.pipe(send, send);
                    pipe = this._sequence;
                }
                // Return the piped Promise object, enhanced with an abort method,
                // which is delegated to the jqXHR object of the current upload,
                // and jqXHR callbacks mapped to the equivalent Promise methods:
                pipe.abort = function () {
                    aborted = [undefined, 'abort', 'abort'];
                    if (!jqXHR) {
                        if (slot) {
                            slot.rejectWith(options.context, aborted);
                        }
                        return send();
                    }
                    return jqXHR.abort();
                };
                return this._enhancePromise(pipe);
            }
            return send();
        },

        _onAdd: function (e, data) {
            var that = this,
                result = true,
                options = $.extend({}, this.options, data),
                files = data.files,
                filesLength = files.length,
                limit = options.limitMultiFileUploads,
                limitSize = options.limitMultiFileUploadSize,
                overhead = options.limitMultiFileUploadSizeOverhead,
                batchSize = 0,
                paramName = this._getParamName(options),
                paramNameSet,
                paramNameSlice,
                fileSet,
                i,
                j = 0;
            if (!filesLength) {
                return false;
            }
            if (limitSize && files[0].size === undefined) {
                limitSize = undefined;
            }
            if (!(options.singleFileUploads || limit || limitSize) ||
                    !this._isXHRUpload(options)) {
                fileSet = [files];
                paramNameSet = [paramName];
            } else if (!(options.singleFileUploads || limitSize) && limit) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i += limit) {
                    fileSet.push(files.slice(i, i + limit));
                    paramNameSlice = paramName.slice(i, i + limit);
                    if (!paramNameSlice.length) {
                        paramNameSlice = paramName;
                    }
                    paramNameSet.push(paramNameSlice);
                }
            } else if (!options.singleFileUploads && limitSize) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i = i + 1) {
                    batchSize += files[i].size + overhead;
                    if (i + 1 === filesLength ||
                            ((batchSize + files[i + 1].size + overhead) > limitSize) ||
                            (limit && i + 1 - j >= limit)) {
                        fileSet.push(files.slice(j, i + 1));
                        paramNameSlice = paramName.slice(j, i + 1);
                        if (!paramNameSlice.length) {
                            paramNameSlice = paramName;
                        }
                        paramNameSet.push(paramNameSlice);
                        j = i + 1;
                        batchSize = 0;
                    }
                }
            } else {
                paramNameSet = paramName;
            }
            data.originalFiles = files;
            $.each(fileSet || files, function (index, element) {
                var newData = $.extend({}, data);
                newData.files = fileSet ? element : [element];
                newData.paramName = paramNameSet[index];
                that._initResponseObject(newData);
                that._initProgressObject(newData);
                that._addConvenienceMethods(e, newData);
                result = that._trigger(
                    'add',
                    $.Event('add', {delegatedEvent: e}),
                    newData
                );
                return result;
            });
            return result;
        },

        _replaceFileInput: function (data) {
            var input = data.fileInput,
                inputClone = input.clone(true),
                restoreFocus = input.is(document.activeElement);
            // Add a reference for the new cloned file input to the data argument:
            data.fileInputClone = inputClone;
            $('<form></form>').append(inputClone)[0].reset();
            // Detaching allows to insert the fileInput on another form
            // without loosing the file input value:
            input.after(inputClone).detach();
            // If the fileInput had focus before it was detached,
            // restore focus to the inputClone.
            if (restoreFocus) {
                inputClone.focus();
            }
            // Avoid memory leaks with the detached file input:
            $.cleanData(input.unbind('remove'));
            // Replace the original file input element in the fileInput
            // elements set with the clone, which has been copied including
            // event handlers:
            this.options.fileInput = this.options.fileInput.map(function (i, el) {
                if (el === input[0]) {
                    return inputClone[0];
                }
                return el;
            });
            // If the widget has been initialized on the file input itself,
            // override this.element with the file input clone:
            if (input[0] === this.element[0]) {
                this.element = inputClone;
            }
        },

        _handleFileTreeEntry: function (entry, path) {
            var that = this,
                dfd = $.Deferred(),
                errorHandler = function (e) {
                    if (e && !e.entry) {
                        e.entry = entry;
                    }
                    // Since $.when returns immediately if one
                    // Deferred is rejected, we use resolve instead.
                    // This allows valid files and invalid items
                    // to be returned together in one set:
                    dfd.resolve([e]);
                },
                successHandler = function (entries) {
                    that._handleFileTreeEntries(
                        entries,
                        path + entry.name + '/'
                    ).done(function (files) {
                        dfd.resolve(files);
                    }).fail(errorHandler);
                },
                readEntries = function () {
                    dirReader.readEntries(function (results) {
                        if (!results.length) {
                            successHandler(entries);
                        } else {
                            entries = entries.concat(results);
                            readEntries();
                        }
                    }, errorHandler);
                },
                dirReader, entries = [];
            path = path || '';
            if (entry.isFile) {
                if (entry._file) {
                    // Workaround for Chrome bug #149735
                    entry._file.relativePath = path;
                    dfd.resolve(entry._file);
                } else {
                    entry.file(function (file) {
                        file.relativePath = path;
                        dfd.resolve(file);
                    }, errorHandler);
                }
            } else if (entry.isDirectory) {
                dirReader = entry.createReader();
                readEntries();
            } else {
                // Return an empy list for file system items
                // other than files or directories:
                dfd.resolve([]);
            }
            return dfd.promise();
        },

        _handleFileTreeEntries: function (entries, path) {
            var that = this;
            return $.when.apply(
                $,
                $.map(entries, function (entry) {
                    return that._handleFileTreeEntry(entry, path);
                })
            ).pipe(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _getDroppedFiles: function (dataTransfer) {
            dataTransfer = dataTransfer || {};
            var items = dataTransfer.items;
            if (items && items.length && (items[0].webkitGetAsEntry ||
                    items[0].getAsEntry)) {
                return this._handleFileTreeEntries(
                    $.map(items, function (item) {
                        var entry;
                        if (item.webkitGetAsEntry) {
                            entry = item.webkitGetAsEntry();
                            if (entry) {
                                // Workaround for Chrome bug #149735:
                                entry._file = item.getAsFile();
                            }
                            return entry;
                        }
                        return item.getAsEntry();
                    })
                );
            }
            return $.Deferred().resolve(
                $.makeArray(dataTransfer.files)
            ).promise();
        },

        _getSingleFileInputFiles: function (fileInput) {
            fileInput = $(fileInput);
            var entries = fileInput.prop('webkitEntries') ||
                    fileInput.prop('entries'),
                files,
                value;
            if (entries && entries.length) {
                return this._handleFileTreeEntries(entries);
            }
            files = $.makeArray(fileInput.prop('files'));
            if (!files.length) {
                value = fileInput.prop('value');
                if (!value) {
                    return $.Deferred().resolve([]).promise();
                }
                // If the files property is not available, the browser does not
                // support the File API and we add a pseudo File object with
                // the input value as name with path information removed:
                files = [{name: value.replace(/^.*\\/, '')}];
            } else if (files[0].name === undefined && files[0].fileName) {
                // File normalization for Safari 4 and Firefox 3:
                $.each(files, function (index, file) {
                    file.name = file.fileName;
                    file.size = file.fileSize;
                });
            }
            return $.Deferred().resolve(files).promise();
        },

        _getFileInputFiles: function (fileInput) {
            if (!(fileInput instanceof $) || fileInput.length === 1) {
                return this._getSingleFileInputFiles(fileInput);
            }
            return $.when.apply(
                $,
                $.map(fileInput, this._getSingleFileInputFiles)
            ).pipe(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _onChange: function (e) {
            var that = this,
                data = {
                    fileInput: $(e.target),
                    form: $(e.target.form)
                };
            this._getFileInputFiles(data.fileInput).always(function (files) {
                data.files = files;
                if (that.options.replaceFileInput) {
                    that._replaceFileInput(data);
                }
                if (that._trigger(
                        'change',
                        $.Event('change', {delegatedEvent: e}),
                        data
                    ) !== false) {
                    that._onAdd(e, data);
                }
            });
        },

        _onPaste: function (e) {
            var items = e.originalEvent && e.originalEvent.clipboardData &&
                    e.originalEvent.clipboardData.items,
                data = {files: []};
            if (items && items.length) {
                $.each(items, function (index, item) {
                    var file = item.getAsFile && item.getAsFile();
                    if (file) {
                        data.files.push(file);
                    }
                });
                if (this._trigger(
                        'paste',
                        $.Event('paste', {delegatedEvent: e}),
                        data
                    ) !== false) {
                    this._onAdd(e, data);
                }
            }
        },

        _onDrop: function (e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var that = this,
                dataTransfer = e.dataTransfer,
                data = {};
            if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
                e.preventDefault();
                this._getDroppedFiles(dataTransfer).always(function (files) {
                    data.files = files;
                    if (that._trigger(
                            'drop',
                            $.Event('drop', {delegatedEvent: e}),
                            data
                        ) !== false) {
                        that._onAdd(e, data);
                    }
                });
            }
        },

        _onDragOver: getDragHandler('dragover'),

        _onDragEnter: getDragHandler('dragenter'),

        _onDragLeave: getDragHandler('dragleave'),

        _initEventHandlers: function () {
            if (this._isXHRUpload(this.options)) {
                this._on(this.options.dropZone, {
                    dragover: this._onDragOver,
                    drop: this._onDrop,
                    // event.preventDefault() on dragenter is required for IE10+:
                    dragenter: this._onDragEnter,
                    // dragleave is not required, but added for completeness:
                    dragleave: this._onDragLeave
                });
                this._on(this.options.pasteZone, {
                    paste: this._onPaste
                });
            }
            if ($.support.fileInput) {
                this._on(this.options.fileInput, {
                    change: this._onChange
                });
            }
        },

        _destroyEventHandlers: function () {
            this._off(this.options.dropZone, 'dragenter dragleave dragover drop');
            this._off(this.options.pasteZone, 'paste');
            this._off(this.options.fileInput, 'change');
        },

        _setOption: function (key, value) {
            var reinit = $.inArray(key, this._specialOptions) !== -1;
            if (reinit) {
                this._destroyEventHandlers();
            }
            this._super(key, value);
            if (reinit) {
                this._initSpecialOptions();
                this._initEventHandlers();
            }
        },

        _initSpecialOptions: function () {
            var options = this.options;
            if (options.fileInput === undefined) {
                options.fileInput = this.element.is('input[type="file"]') ?
                        this.element : this.element.find('input[type="file"]');
            } else if (!(options.fileInput instanceof $)) {
                options.fileInput = $(options.fileInput);
            }
            if (!(options.dropZone instanceof $)) {
                options.dropZone = $(options.dropZone);
            }
            if (!(options.pasteZone instanceof $)) {
                options.pasteZone = $(options.pasteZone);
            }
        },

        _getRegExp: function (str) {
            var parts = str.split('/'),
                modifiers = parts.pop();
            parts.shift();
            return new RegExp(parts.join('/'), modifiers);
        },

        _isRegExpOption: function (key, value) {
            return key !== 'url' && $.type(value) === 'string' &&
                /^\/.*\/[igm]{0,3}$/.test(value);
        },

        _initDataAttributes: function () {
            var that = this,
                options = this.options,
                data = this.element.data();
            // Initialize options set via HTML5 data-attributes:
            $.each(
                this.element[0].attributes,
                function (index, attr) {
                    var key = attr.name.toLowerCase(),
                        value;
                    if (/^data-/.test(key)) {
                        // Convert hyphen-ated key to camelCase:
                        key = key.slice(5).replace(/-[a-z]/g, function (str) {
                            return str.charAt(1).toUpperCase();
                        });
                        value = data[key];
                        if (that._isRegExpOption(key, value)) {
                            value = that._getRegExp(value);
                        }
                        options[key] = value;
                    }
                }
            );
        },

        _create: function () {
            this._initDataAttributes();
            this._initSpecialOptions();
            this._slots = [];
            this._sequence = this._getXHRPromise(true);
            this._sending = this._active = 0;
            this._initProgressObject(this);
            this._initEventHandlers();
        },

        // This method is exposed to the widget API and allows to query
        // the number of active uploads:
        active: function () {
            return this._active;
        },

        // This method is exposed to the widget API and allows to query
        // the widget upload progress.
        // It returns an object with loaded, total and bitrate properties
        // for the running uploads:
        progress: function () {
            return this._progress;
        },

        // This method is exposed to the widget API and allows adding files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files property and can contain additional options:
        // .fileupload('add', {files: filesList});
        add: function (data) {
            var that = this;
            if (!data || this.options.disabled) {
                return;
            }
            if (data.fileInput && !data.files) {
                this._getFileInputFiles(data.fileInput).always(function (files) {
                    data.files = files;
                    that._onAdd(null, data);
                });
            } else {
                data.files = $.makeArray(data.files);
                this._onAdd(null, data);
            }
        },

        // This method is exposed to the widget API and allows sending files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files or fileInput property and can contain additional options:
        // .fileupload('send', {files: filesList});
        // The method returns a Promise object for the file upload call.
        send: function (data) {
            if (data && !this.options.disabled) {
                if (data.fileInput && !data.files) {
                    var that = this,
                        dfd = $.Deferred(),
                        promise = dfd.promise(),
                        jqXHR,
                        aborted;
                    promise.abort = function () {
                        aborted = true;
                        if (jqXHR) {
                            return jqXHR.abort();
                        }
                        dfd.reject(null, 'abort', 'abort');
                        return promise;
                    };
                    this._getFileInputFiles(data.fileInput).always(
                        function (files) {
                            if (aborted) {
                                return;
                            }
                            if (!files.length) {
                                dfd.reject();
                                return;
                            }
                            data.files = files;
                            jqXHR = that._onSend(null, data);
                            jqXHR.then(
                                function (result, textStatus, jqXHR) {
                                    dfd.resolve(result, textStatus, jqXHR);
                                },
                                function (jqXHR, textStatus, errorThrown) {
                                    dfd.reject(jqXHR, textStatus, errorThrown);
                                }
                            );
                        }
                    );
                    return this._enhancePromise(promise);
                }
                data.files = $.makeArray(data.files);
                if (data.files.length) {
                    return this._onSend(null, data);
                }
            }
            return this._getXHRPromise(false, data && data.context);
        }

    });

}));

/*! 
 * medium-editor-insert-plugin v2.1.1 - jQuery insert plugin for MediumEditor
 *
 * https://github.com/orthes/medium-editor-insert-plugin
 * 
 * Copyright (c) 2014 Pavel Linkesch (http://linkesch.sk)
 * Released under the MIT license
 */

this.MediumInsert=this.MediumInsert||{},this.MediumInsert.Templates=this.MediumInsert.Templates||{},this.MediumInsert.Templates["src/js/templates/core-buttons.hbs"]=Handlebars.template({1:function(a,b,c,d,e){var f,g,h=null!=b?b:{},i=c.helperMissing,j="function";return'            <li><a data-addon="'+a.escapeExpression((g=null!=(g=c.key||e&&e.key)?g:i,typeof g===j?g.call(h,{name:"key",hash:{},data:e}):g))+'" data-action="add" class="medium-insert-action">'+(null!=(g=null!=(g=c.label||(null!=b?b.label:b))?g:i,f=typeof g===j?g.call(h,{name:"label",hash:{},data:e}):g)?f:"")+"</a></li>\n"},compiler:[7,">= 4.0.0"],main:function(a,b,c,d,e){var f;return'<div class="medium-insert-buttons" contenteditable="false" style="display: none">\n    <a class="medium-insert-buttons-show">+</a>\n    <ul class="medium-insert-buttons-addons" style="display: none">\n'+(null!=(f=c.each.call(null!=b?b:{},null!=b?b.addons:b,{name:"each",hash:{},fn:a.program(1,e,0),inverse:a.noop,data:e}))?f:"")+"    </ul>\n</div>\n"},useData:!0}),this.MediumInsert.Templates["src/js/templates/core-caption.hbs"]=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(a,b,c,d,e){var f;return'<figcaption contenteditable="true" class="medium-insert-caption-placeholder" data-placeholder="'+a.escapeExpression((f=null!=(f=c.placeholder||(null!=b?b.placeholder:b))?f:c.helperMissing,"function"==typeof f?f.call(null!=b?b:{},{name:"placeholder",hash:{},data:e}):f))+'"></figcaption>'},useData:!0}),this.MediumInsert.Templates["src/js/templates/core-empty-line.hbs"]=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(a,b,c,d,e){return"<p><br></p>\n"},useData:!0}),this.MediumInsert.Templates["src/js/templates/embeds-toolbar.hbs"]=Handlebars.template({1:function(a,b,c,d,e){var f;return'    <div class="medium-insert-embeds-toolbar medium-editor-toolbar medium-toolbar-arrow-under medium-editor-toolbar-active">\n        <ul class="medium-editor-toolbar-actions clearfix">\n'+(null!=(f=c.each.call(null!=b?b:{},null!=b?b.styles:b,{name:"each",hash:{},fn:a.program(2,e,0),inverse:a.noop,data:e}))?f:"")+"        </ul>\n    </div>\n"},2:function(a,b,c,d,e){var f;return null!=(f=c["if"].call(null!=b?b:{},null!=b?b.label:b,{name:"if",hash:{},fn:a.program(3,e,0),inverse:a.noop,data:e}))?f:""},3:function(a,b,c,d,e){var f,g,h=null!=b?b:{},i=c.helperMissing,j="function";return'                    <li>\n                        <button class="medium-editor-action" data-action="'+a.escapeExpression((g=null!=(g=c.key||e&&e.key)?g:i,typeof g===j?g.call(h,{name:"key",hash:{},data:e}):g))+'">'+(null!=(g=null!=(g=c.label||(null!=b?b.label:b))?g:i,f=typeof g===j?g.call(h,{name:"label",hash:{},data:e}):g)?f:"")+"</button>\n                    </li>\n"},5:function(a,b,c,d,e){var f;return'    <div class="medium-insert-embeds-toolbar2 medium-editor-toolbar medium-editor-toolbar-active">\n        <ul class="medium-editor-toolbar-actions clearfix">\n'+(null!=(f=c.each.call(null!=b?b:{},null!=b?b.actions:b,{name:"each",hash:{},fn:a.program(2,e,0),inverse:a.noop,data:e}))?f:"")+"        </ul>\n    </div>\n"},compiler:[7,">= 4.0.0"],main:function(a,b,c,d,e){var f,g=null!=b?b:{};return(null!=(f=c["if"].call(g,null!=b?b.styles:b,{name:"if",hash:{},fn:a.program(1,e,0),inverse:a.noop,data:e}))?f:"")+"\n"+(null!=(f=c["if"].call(g,null!=b?b.actions:b,{name:"if",hash:{},fn:a.program(5,e,0),inverse:a.noop,data:e}))?f:"")},useData:!0}),this.MediumInsert.Templates["src/js/templates/embeds-wrapper.hbs"]=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(a,b,c,d,e){var f,g;return'<div class="medium-insert-embeds" contenteditable="false">\n	<figure>\n		<div class="medium-insert-embed">\n			'+(null!=(g=null!=(g=c.html||(null!=b?b.html:b))?g:c.helperMissing,f="function"==typeof g?g.call(null!=b?b:{},{name:"html",hash:{},data:e}):g)?f:"")+'\n		</div>\n	</figure>\n	<div class="medium-insert-embeds-overlay"></div>\n</div>'},useData:!0}),this.MediumInsert.Templates["src/js/templates/images-fileupload.hbs"]=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(a,b,c,d,e){return'<input type="file" multiple>'},useData:!0}),this.MediumInsert.Templates["src/js/templates/images-image.hbs"]=Handlebars.template({1:function(a,b,c,d,e){return'        <div class="medium-insert-images-progress"></div>\n'},compiler:[7,">= 4.0.0"],main:function(a,b,c,d,e){var f,g,h=null!=b?b:{};return'<figure contenteditable="false">\n    <img src="'+a.escapeExpression((g=null!=(g=c.img||(null!=b?b.img:b))?g:c.helperMissing,"function"==typeof g?g.call(h,{name:"img",hash:{},data:e}):g))+'" alt="">\n'+(null!=(f=c["if"].call(h,null!=b?b.progress:b,{name:"if",hash:{},fn:a.program(1,e,0),inverse:a.noop,data:e}))?f:"")+"</figure>"},useData:!0}),this.MediumInsert.Templates["src/js/templates/images-progressbar.hbs"]=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(a,b,c,d,e){return'<progress min="0" max="100" value="0">0</progress>'},useData:!0}),this.MediumInsert.Templates["src/js/templates/images-toolbar.hbs"]=Handlebars.template({1:function(a,b,c,d,e){var f;return null!=(f=c["if"].call(null!=b?b:{},null!=b?b.label:b,{name:"if",hash:{},fn:a.program(2,e,0),inverse:a.noop,data:e}))?f:""},2:function(a,b,c,d,e){var f,g,h=null!=b?b:{},i=c.helperMissing,j="function";return'                <li>\n                    <button class="medium-editor-action" data-action="'+a.escapeExpression((g=null!=(g=c.key||e&&e.key)?g:i,typeof g===j?g.call(h,{name:"key",hash:{},data:e}):g))+'">'+(null!=(g=null!=(g=c.label||(null!=b?b.label:b))?g:i,f=typeof g===j?g.call(h,{name:"label",hash:{},data:e}):g)?f:"")+"</button>\n                </li>\n"},4:function(a,b,c,d,e){var f;return'	<div class="medium-insert-images-toolbar2 medium-editor-toolbar medium-editor-toolbar-active">\n		<ul class="medium-editor-toolbar-actions clearfix">\n'+(null!=(f=c.each.call(null!=b?b:{},null!=b?b.actions:b,{name:"each",hash:{},fn:a.program(5,e,0),inverse:a.noop,data:e}))?f:"")+"    	</ul>\n    </div>\n"},5:function(a,b,c,d,e){var f;return null!=(f=c["if"].call(null!=b?b:{},null!=b?b.label:b,{name:"if",hash:{},fn:a.program(6,e,0),inverse:a.noop,data:e}))?f:""},6:function(a,b,c,d,e){var f,g,h=null!=b?b:{},i=c.helperMissing,j="function";return'        	        <li>\n        	            <button class="medium-editor-action" data-action="'+a.escapeExpression((g=null!=(g=c.key||e&&e.key)?g:i,typeof g===j?g.call(h,{name:"key",hash:{},data:e}):g))+'">'+(null!=(g=null!=(g=c.label||(null!=b?b.label:b))?g:i,f=typeof g===j?g.call(h,{name:"label",hash:{},data:e}):g)?f:"")+"</button>\n        	        </li>\n"},compiler:[7,">= 4.0.0"],main:function(a,b,c,d,e){var f,g=null!=b?b:{};return'<div class="medium-insert-images-toolbar medium-editor-toolbar medium-toolbar-arrow-under medium-editor-toolbar-active">\n    <ul class="medium-editor-toolbar-actions clearfix">\n'+(null!=(f=c.each.call(g,null!=b?b.styles:b,{name:"each",hash:{},fn:a.program(1,e,0),inverse:a.noop,data:e}))?f:"")+"    </ul>\n</div>\n\n"+(null!=(f=c["if"].call(g,null!=b?b.actions:b,{name:"if",hash:{},fn:a.program(4,e,0),inverse:a.noop,data:e}))?f:"")},useData:!0}),function(a,b,c,d){"use strict";function e(a){return a.charAt(0).toUpperCase()+a.slice(1)}function f(c,d){var e;this.el=c,this.$el=a(c),this.templates=b.MediumInsert.Templates,d&&(e=d.editor,d.editor=null),this.options=a.extend(!0,{},h,d),this.options.editor=e,this._defaults=h,this._name=g,this.options&&this.options.editor&&(this.options.editor._serialize=this.options.editor.serialize,this.options.editor._destroy=this.options.editor.destroy,this.options.editor._setup=this.options.editor.setup,this.options.editor._hideInsertButtons=this.hideButtons,this.options.editor.serialize=this.editorSerialize,this.options.editor.destroy=this.editorDestroy,this.options.editor.setup=this.editorSetup,this.options.editor.getExtensionByName("placeholder").updatePlaceholder=this.editorUpdatePlaceholder)}var g="mediumInsert",h={editor:null,enabled:!0,addons:{images:!0,embeds:!0}};f.prototype.init=function(){this.$el.addClass("medium-editor-insert-plugin"),("object"!=typeof this.options.addons||0===Object.keys(this.options.addons).length)&&this.disable(),this.initAddons(),this.clean(),this.events()},f.prototype.events=function(){var c=this;this.$el.on("dragover drop",function(a){a.preventDefault()}).on("keyup click",a.proxy(this,"toggleButtons")).on("selectstart mousedown",".medium-insert, .medium-insert-buttons",a.proxy(this,"disableSelection")).on("click",".medium-insert-buttons-show",a.proxy(this,"toggleAddons")).on("click",".medium-insert-action",a.proxy(this,"addonAction")).on("paste",".medium-insert-caption-placeholder",function(b){a.proxy(c,"removeCaptionPlaceholder")(a(b.target))}),a(b).on("resize",a.proxy(this,"positionButtons",null))},f.prototype.getEditor=function(){return this.options.editor},f.prototype.editorSerialize=function(){var b=this._serialize();return a.each(b,function(c){var d=a("<div />").html(b[c].value);d.find(".medium-insert-buttons").remove(),b[c].value=d.html()}),b},f.prototype.editorDestroy=function(){a.each(this.elements,function(b,c){a(c).data("plugin_"+g).disable()}),this._destroy()},f.prototype.editorSetup=function(){this._setup(),a.each(this.elements,function(b,c){a(c).data("plugin_"+g).enable()})},f.prototype.editorUpdatePlaceholder=function(b){var c,d=a(b).clone();d.find(".medium-insert-buttons").remove(),c=d.html().replace(/^\s+|\s+$/g,"").replace(/^<p( class="medium-insert-active")?><br><\/p>$/,""),b.querySelector("img, blockquote")||""!==c?this.hidePlaceholder(b):(this.showPlaceholder(b),this.base._hideInsertButtons(a(b)))},f.prototype.triggerInput=function(){this.getEditor()&&this.getEditor().trigger("editableInput",null,this.el)},f.prototype.deselect=function(){c.getSelection().removeAllRanges()},f.prototype.disable=function(){this.options.enabled=!1,this.$el.find(".medium-insert-buttons").addClass("hide")},f.prototype.enable=function(){this.options.enabled=!0,this.$el.find(".medium-insert-buttons").removeClass("hide")},f.prototype.disableSelection=function(b){var c=a(b.target);(c.is("img")===!1||c.hasClass("medium-insert-buttons-show"))&&b.preventDefault()},f.prototype.initAddons=function(){var b=this;this.options.addons&&0!==this.options.addons.length&&a.each(this.options.addons,function(a,c){var d=g+e(a);return c===!1?void delete b.options.addons[a]:(b.$el[d](c),void(b.options.addons[a]=b.$el.data("plugin_"+d).options))})},f.prototype.clean=function(){var b,c,d,e=this;this.options.enabled!==!1&&((""===this.$el.html().trim()||"<br>"===this.$el.html().trim())&&this.$el.html(this.templates["src/js/templates/core-empty-line.hbs"]().trim()),d=this.$el.contents().filter(function(){return"#text"===this.nodeName&&""!==a.trim(a(this).text())}),d.each(function(){a(this).wrap("<p />"),e.moveCaret(a(this).parent(),a(this).text().length)}),this.addButtons(),b=this.$el.find(".medium-insert-buttons"),c=b.prev(),c.attr("class")&&c.attr("class").match(/medium\-insert(?!\-active)/)&&b.before(this.templates["src/js/templates/core-empty-line.hbs"]().trim()))},f.prototype.getButtons=function(){return this.options.enabled!==!1?this.templates["src/js/templates/core-buttons.hbs"]({addons:this.options.addons}).trim():void 0},f.prototype.addButtons=function(){0===this.$el.find(".medium-insert-buttons").length&&this.$el.append(this.getButtons())},f.prototype.toggleButtons=function(c){var d,e,f,g,h=a(c.target),i=b.getSelection(),j=this;this.options.enabled!==!1&&(i&&0!==i.rangeCount?(d=i.getRangeAt(0),e=a(d.commonAncestorContainer)):e=h,e.hasClass("medium-editor-insert-plugin")&&(e=e.find("p:first")),f=e.is("p")?e:e.closest("p"),this.clean(),h.hasClass("medium-editor-placeholder")===!1&&0===h.closest(".medium-insert-buttons").length&&0===e.closest(".medium-insert-buttons").length&&(this.$el.find(".medium-insert-active").removeClass("medium-insert-active"),a.each(this.options.addons,function(a){return h.closest(".medium-insert-"+a).length&&(e=h),e.closest(".medium-insert-"+a).length?(f=e.closest(".medium-insert-"+a),void(g=a)):void 0}),f.length&&(""===f.text().trim()&&!g||"images"===g)?(f.addClass("medium-insert-active"),setTimeout(function(){j.positionButtons(g),j.showButtons(g)},g?100:0)):this.hideButtons()))},f.prototype.showButtons=function(a){var b=this.$el.find(".medium-insert-buttons");b.show(),b.find("li").show(),a&&(b.find("li").hide(),b.find('a[data-addon="'+a+'"]').parent().show())},f.prototype.hideButtons=function(a){a=a||this.$el,a.find(".medium-insert-buttons").hide(),a.find(".medium-insert-buttons-addons").hide(),a.find(".medium-insert-buttons-show").removeClass("medium-insert-buttons-rotate")},f.prototype.positionButtons=function(a){var b,c,d=this.$el.find(".medium-insert-buttons"),e=this.$el.find(".medium-insert-active"),f=e.find("figure:first").length?e.find("figure:first"):e;e.length&&(b=e.position().left-parseInt(d.find(".medium-insert-buttons-addons").css("left"),10)-parseInt(d.find(".medium-insert-buttons-addons a:first").css("margin-left"),10),b=0>b?e.position().left:b,c=e.position().top+parseInt(e.css("margin-top"),10),a&&(e.position().left!==f.position().left&&(b=f.position().left),c+=e.height()+15),d.css({left:b,top:c}))},f.prototype.toggleAddons=function(){this.$el.find(".medium-insert-buttons-addons").fadeToggle(),this.$el.find(".medium-insert-buttons-show").toggleClass("medium-insert-buttons-rotate")},f.prototype.hideAddons=function(){this.$el.find(".medium-insert-buttons-addons").hide(),this.$el.find(".medium-insert-buttons-show").removeClass("medium-insert-buttons-rotate")},f.prototype.addonAction=function(b){var c=a(b.target).is("a")?a(b.target):a(b.target).closest("a"),d=c.data("addon"),f=c.data("action");this.$el.data("plugin_"+g+e(d))[f]()},f.prototype.moveCaret=function(a,d){var e,f,g;if(d=d||0,e=c.createRange(),f=b.getSelection(),g=a.get(0),!g.childNodes.length){var h=c.createTextNode(" ");g.appendChild(h)}e.setStart(g.childNodes[0],d),e.collapse(!0),f.removeAllRanges(),f.addRange(e)},f.prototype.addCaption=function(a,b){var c=a.find("figcaption");0===c.length&&a.append(this.templates["src/js/templates/core-caption.hbs"]({placeholder:b}))},f.prototype.removeCaptions=function(b){var c=this.$el.find("figcaption");b&&(c=c.not(b)),c.each(function(){(a(this).hasClass("medium-insert-caption-placeholder")||""===a(this).text().trim())&&a(this).remove()})},f.prototype.removeCaptionPlaceholder=function(a){var b=a.is("figcaption")?a:a.find("figcaption");b.length&&b.removeClass("medium-insert-caption-placeholder").removeAttr("data-placeholder")},a.fn[g]=function(b){return this.each(function(){var c,d=this;a(d).is("textarea")&&(c=a(d).attr("medium-editor-textarea-id"),d=a(d).siblings('[medium-editor-textarea-id="'+c+'"]').get(0)),a.data(d,"plugin_"+g)?"string"==typeof b&&a.data(d,"plugin_"+g)[b]&&a.data(d,"plugin_"+g)[b]():(a.data(d,"plugin_"+g,new f(d,b)),a.data(d,"plugin_"+g).init())})}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(c,d){this.el=c,this.$el=a(c),this.templates=b.MediumInsert.Templates,this.core=this.$el.data("plugin_"+f),this.options=a.extend(!0,{},h,d),this._defaults=h,this._name=f,this.core.getEditor()&&(this.core.getEditor()._serializePreEmbeds=this.core.getEditor().serialize,this.core.getEditor().serialize=this.editorSerialize),this.init()}var f="mediumInsert",g="Embeds",h={label:'<span class="fa fa-youtube-play"></span>',placeholder:"Paste a YouTube, Vimeo, Facebook, Twitter or Instagram link and press Enter",oembedProxy:"http://medium.iframe.ly/api/oembed?iframe=1",captions:!0,captionPlaceholder:"Type caption (optional)",styles:{wide:{label:'<span class="fa fa-align-justify"></span>'},left:{label:'<span class="fa fa-align-left"></span>'},right:{label:'<span class="fa fa-align-right"></span>'}},actions:{remove:{label:'<span class="fa fa-times"></span>',clicked:function(){var b=a.Event("keydown");b.which=8,a(c).trigger(b)}}}};e.prototype.init=function(){var b=this.$el.find(".medium-insert-embeds");b.attr("contenteditable",!1),b.each(function(){0===a(this).find(".medium-insert-embeds-overlay").length&&a(this).append(a("<div />").addClass("medium-insert-embeds-overlay"))}),this.events(),this.backwardsCompatibility()},e.prototype.events=function(){a(c).on("click",a.proxy(this,"unselectEmbed")).on("keydown",a.proxy(this,"removeEmbed")).on("click",".medium-insert-embeds-toolbar .medium-editor-action",a.proxy(this,"toolbarAction")).on("click",".medium-insert-embeds-toolbar2 .medium-editor-action",a.proxy(this,"toolbar2Action")),this.$el.on("keyup click paste",a.proxy(this,"togglePlaceholder")).on("keydown",a.proxy(this,"processLink")).on("click",".medium-insert-embeds-overlay",a.proxy(this,"selectEmbed")).on("contextmenu",".medium-insert-embeds-placeholder",a.proxy(this,"fixRightClickOnPlaceholder"))},e.prototype.backwardsCompatibility=function(){var b=this;this.$el.find(".mediumInsert-embeds").removeClass("mediumInsert-embeds").addClass("medium-insert-embeds"),this.$el.find(".medium-insert-embeds").each(function(){0===a(this).find(".medium-insert-embed").length&&(a(this).after(b.templates["src/js/templates/embeds-wrapper.hbs"]({html:a(this).html()})),a(this).remove())})},e.prototype.editorSerialize=function(){var b=this._serializePreEmbeds();return a.each(b,function(c){var d=a("<div />").html(b[c].value);d.find(".medium-insert-embeds").removeAttr("contenteditable"),d.find(".medium-insert-embeds-overlay").remove(),b[c].value=d.html()}),b},e.prototype.add=function(){var a=this.$el.find(".medium-insert-active");a.html(this.templates["src/js/templates/core-empty-line.hbs"]().trim()),a.is("p")&&(a.replaceWith('<div class="medium-insert-active">'+a.html()+"</div>"),a=this.$el.find(".medium-insert-active"),this.core.moveCaret(a)),a.addClass("medium-insert-embeds medium-insert-embeds-input medium-insert-embeds-active"),this.togglePlaceholder({target:a.get(0)}),a.click(),this.core.hideButtons()},e.prototype.togglePlaceholder=function(c){var d,e,f,g=a(c.target),h=b.getSelection();h&&0!==h.rangeCount&&(d=h.getRangeAt(0),e=a(d.commonAncestorContainer),e.hasClass("medium-insert-embeds-active")?g=e:e.closest(".medium-insert-embeds-active").length&&(g=e.closest(".medium-insert-embeds-active")),g.hasClass("medium-insert-embeds-active")?(f=g.text().trim(),""===f&&g.hasClass("medium-insert-embeds-placeholder")===!1?g.addClass("medium-insert-embeds-placeholder").attr("data-placeholder",this.options.placeholder):""!==f&&g.hasClass("medium-insert-embeds-placeholder")&&g.removeClass("medium-insert-embeds-placeholder").removeAttr("data-placeholder")):this.$el.find(".medium-insert-embeds-active").remove())},e.prototype.fixRightClickOnPlaceholder=function(b){this.core.moveCaret(a(b.target))},e.prototype.processLink=function(a){var b,c=this.$el.find(".medium-insert-embeds-active");if(c.length)return b=c.text().trim(),""===b&&-1!==[8,46,13].indexOf(a.which)?void c.remove():void(13===a.which&&(a.preventDefault(),a.stopPropagation(),this.options.oembedProxy?this.oembed(b):this.parseUrl(b)))},e.prototype.oembed=function(c){var d=this;a.support.cors=!0,a.ajax({crossDomain:!0,cache:!1,url:this.options.oembedProxy,dataType:"json",data:{url:c},success:function(b){var c=b&&b.html;b&&!b.html&&"photo"===b.type&&b.url&&(c='<img src="'+b.url+'" alt="">'),a.proxy(d,"embed",c)()},error:function(e,f,g){var h=function(){try{return JSON.parse(e.responseText)}catch(a){}}();"undefined"!=typeof b.console?b.console.log(h&&h.error||e.status||g.message):b.alert("Error requesting media from "+d.options.oembedProxy+" to insert: "+g+" (response status: "+e.status+")"),a.proxy(d,"convertBadEmbed",c)()}})},e.prototype.parseUrl=function(b){var c;return new RegExp(["youtube","youtu.be","vimeo","instagram"].join("|")).test(b)?(c=b.replace(/\n?/g,"").replace(/^((http(s)?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|v\/)?)([a-zA-Z0-9\-_]+)(.*)?$/,'<div class="video video-youtube"><iframe width="420" height="315" src="//www.youtube.com/embed/$7" frameborder="0" allowfullscreen></iframe></div>').replace(/^https?:\/\/vimeo\.com(\/.+)?\/([0-9]+)$/,'<div class="video video-vimeo"><iframe src="//player.vimeo.com/video/$2" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>').replace(/^https?:\/\/instagram\.com\/p\/(.+)\/?$/,'<span class="instagram"><iframe src="//instagram.com/p/$1/embed/" width="612" height="710" frameborder="0" scrolling="no" allowtransparency="true"></iframe></span>'),void this.embed(/<("[^"]*"|'[^']*'|[^'">])*>/.test(c)?c:!1)):(a.proxy(this,"convertBadEmbed",b)(),!1)},e.prototype.embed=function(a){var b=this.$el.find(".medium-insert-embeds-active");return a?(b.after(this.templates["src/js/templates/embeds-wrapper.hbs"]({html:a})),b.remove(),this.core.triggerInput(),-1!==a.indexOf("facebook")&&"undefined"!=typeof FB&&setTimeout(function(){FB.XFBML.parse()},2e3),void 0):(alert("Incorrect URL format specified"),!1)},e.prototype.convertBadEmbed=function(b){var c,d,e,f=this.templates["src/js/templates/core-empty-line.hbs"]().trim();c=this.$el.find(".medium-insert-embeds-active"),e=a(f),c.before(e),c.remove(),e.html(b),d=a(f),e.after(d),this.core.triggerInput(),this.core.moveCaret(c)},e.prototype.selectEmbed=function(b){if(this.core.options.enabled){var c=a(b.target).hasClass("medium-insert-embeds")?a(b.target):a(b.target).closest(".medium-insert-embeds"),d=this;c.addClass("medium-insert-embeds-selected"),setTimeout(function(){d.addToolbar(),d.options.captions&&d.core.addCaption(c.find("figure"),d.options.captionPlaceholder)},50)}},e.prototype.unselectEmbed=function(b){var c=a(b.target).hasClass("medium-insert-embeds")?a(b.target):a(b.target).closest(".medium-insert-embeds"),d=this.$el.find(".medium-insert-embeds-selected");return c.hasClass("medium-insert-embeds-selected")?(d.not(c).removeClass("medium-insert-embeds-selected"),a(".medium-insert-embeds-toolbar, .medium-insert-embeds-toolbar2").remove(),this.core.removeCaptions(c.find("figcaption")),void((a(b.target).is(".medium-insert-caption-placeholder")||a(b.target).is("figcaption"))&&(c.removeClass("medium-insert-embeds-selected"),this.core.removeCaptionPlaceholder(c.find("figure"))))):(d.removeClass("medium-insert-embeds-selected"),a(".medium-insert-embeds-toolbar, .medium-insert-embeds-toolbar2").remove(),void(a(b.target).is(".medium-insert-caption-placeholder")?this.core.removeCaptionPlaceholder(c.find("figure")):a(b.target).is("figcaption")===!1&&this.core.removeCaptions()))},e.prototype.removeEmbed=function(b){var c,d;(8===b.which||46===b.which)&&(c=this.$el.find(".medium-insert-embeds-selected"),c.length&&(b.preventDefault(),a(".medium-insert-embeds-toolbar, .medium-insert-embeds-toolbar2").remove(),d=a(this.templates["src/js/templates/core-empty-line.hbs"]().trim()),c.before(d),c.remove(),this.core.hideAddons(),this.core.moveCaret(d),this.core.triggerInput()))},e.prototype.addToolbar=function(){var b,c,d,e=this.$el.find(".medium-insert-embeds-selected"),f=!1;if(0!==e.length){var g=this.core.getEditor(),h=g.options.elementsContainer||"body";a(h).append(this.templates["src/js/templates/embeds-toolbar.hbs"]({styles:this.options.styles,actions:this.options.actions}).trim()),b=a(".medium-insert-embeds-toolbar"),c=a(".medium-insert-embeds-toolbar2"),d=e.offset().top-b.height()-8-2-5,0>d&&(d=0),b.css({top:d,left:e.offset().left+e.width()/2-b.width()/2}).show(),c.css({top:e.offset().top+2,left:e.offset().left+e.width()-c.width()-4}).show(),b.find("button").each(function(){e.hasClass("medium-insert-embeds-"+a(this).data("action"))&&(a(this).addClass("medium-editor-button-active"),f=!0)}),f===!1&&b.find("button").first().addClass("medium-editor-button-active")}},e.prototype.toolbarAction=function(b){var c=a(b.target).is("button")?a(b.target):a(b.target).closest("button"),d=c.closest("li"),e=d.closest("ul"),f=e.find("li"),g=this.$el.find(".medium-insert-embeds-selected"),h=this;c.addClass("medium-editor-button-active"),d.siblings().find(".medium-editor-button-active").removeClass("medium-editor-button-active"),f.find("button").each(function(){var b="medium-insert-embeds-"+a(this).data("action");a(this).hasClass("medium-editor-button-active")?(g.addClass(b),h.options.styles[a(this).data("action")].added&&h.options.styles[a(this).data("action")].added(g)):(g.removeClass(b),h.options.styles[a(this).data("action")].removed&&h.options.styles[a(this).data("action")].removed(g))}),this.core.triggerInput()},e.prototype.toolbar2Action=function(b){var c=a(b.target).is("button")?a(b.target):a(b.target).closest("button"),d=this.options.actions[c.data("action")].clicked;d&&d(this.$el.find(".medium-insert-embeds-selected")),this.core.triggerInput()},a.fn[f+g]=function(b){return this.each(function(){a.data(this,"plugin_"+f+g)||a.data(this,"plugin_"+f+g,new e(this,b))})}}(jQuery,window,document),function(a,b,c,d,e){"use strict";function f(c,d){this.el=c,this.$el=a(c),this.templates=b.MediumInsert.Templates,this.core=this.$el.data("plugin_"+g),this.options=a.extend(!0,{},i,d),this._defaults=i,this._name=g,this.options.preview&&!b.FileReader&&(this.options.preview=!1),this.core.getEditor()&&(this.core.getEditor()._serializePreImages=this.core.getEditor().serialize,this.core.getEditor().serialize=this.editorSerialize),this.init()}var g="mediumInsert",h="Images",i={label:'<span class="fa fa-camera"></span>',deleteMethod:"POST",deleteScript:"delete.php",preview:!0,captions:!0,captionPlaceholder:"Type caption for image (optional)",autoGrid:3,fileUploadOptions:{url:"upload.php",acceptFileTypes:/(\.|\/)(gif|jpe?g|png)$/i},styles:{wide:{label:'<span class="fa fa-align-justify"></span>'},left:{label:'<span class="fa fa-align-left"></span>'},right:{label:'<span class="fa fa-align-right"></span>'},grid:{label:'<span class="fa fa-th"></span>'}},actions:{remove:{label:'<span class="fa fa-times"></span>',clicked:function(){var b=a.Event("keydown");b.which=8,a(c).trigger(b)}}},sorting:function(){var b=this;a(".medium-insert-images").sortable({group:"medium-insert-images",containerSelector:".medium-insert-images",itemSelector:"figure",placeholder:'<figure class="placeholder">',handle:"img",nested:!1,vertical:!1,afterMove:function(){b.core.triggerInput()}})},messages:{acceptFileTypesError:"This file is not in a supported format: ",maxFileSizeError:"This file is too big: "}};f.prototype.init=function(){var a=this.$el.find(".medium-insert-images");a.find("figcaption").attr("contenteditable",!0),a.find("figure").attr("contenteditable",!1),this.events(),this.backwardsCompatibility(),this.sorting()},f.prototype.events=function(){a(c).on("click",a.proxy(this,"unselectImage")).on("keydown",a.proxy(this,"removeImage")).on("click",".medium-insert-images-toolbar .medium-editor-action",a.proxy(this,"toolbarAction")).on("click",".medium-insert-images-toolbar2 .medium-editor-action",a.proxy(this,"toolbar2Action")),this.$el.on("click",".medium-insert-images img",a.proxy(this,"selectImage"))},f.prototype.backwardsCompatibility=function(){this.$el.find(".mediumInsert").removeClass("mediumInsert").addClass("medium-insert-images"),this.$el.find(".medium-insert-images.small").removeClass("small").addClass("medium-insert-images-left")},f.prototype.editorSerialize=function(){var b=this._serializePreImages();return a.each(b,function(c){var d=a("<div />").html(b[c].value);d.find(".medium-insert-images").find("figcaption, figure").removeAttr("contenteditable"),b[c].value=d.html()}),b},f.prototype.add=function(){var b=this,c=a(this.templates["src/js/templates/images-fileupload.hbs"]()),d={dataType:"json",add:function(c,d){a.proxy(b,"uploadAdd",c,d)()},done:function(c,d){a.proxy(b,"uploadDone",c,d)()}};(new XMLHttpRequest).upload&&(d.progress=function(c,d){a.proxy(b,"uploadProgress",c,d)()},d.progressall=function(c,d){a.proxy(b,"uploadProgressall",c,d)()}),c.fileupload(a.extend(!0,{},this.options.fileUploadOptions,d)),c.click()},f.prototype.uploadAdd=function(b,c){var d,e=this.$el.find(".medium-insert-active"),f=this,g=[],h=c.files[0],i=this.options.fileUploadOptions.acceptFileTypes,j=this.options.fileUploadOptions.maxFileSize;return i&&!i.test(h.type)?g.push(this.options.messages.acceptFileTypesError+h.name):j&&h.size>j&&g.push(this.options.messages.maxFileSizeError+h.name),g.length>0?void alert(g.join("\n")):(this.core.hideButtons(),e.is("p")&&(e.replaceWith('<div class="medium-insert-active">'+e.html()+"</div>"),e=this.$el.find(".medium-insert-active"),this.core.moveCaret(e)),e.addClass("medium-insert-images"),this.options.preview===!1&&0===e.find("progress").length&&(new XMLHttpRequest).upload&&e.append(this.templates["src/js/templates/images-progressbar.hbs"]()),void((c.autoUpload||c.autoUpload!==!1&&a(b.target).fileupload("option","autoUpload"))&&c.process().done(function(){f.options.preview?(d=new FileReader,d.onload=function(b){a.proxy(f,"showImage",b.target.result,c)()},d.readAsDataURL(c.files[0])):c.submit()})))},f.prototype.uploadProgressall=function(a,b){var c,d;this.options.preview===!1&&(c=parseInt(b.loaded/b.total*100,10),d=this.$el.find(".medium-insert-active").find("progress"),d.attr("value",c).text(c),100===c&&d.remove())},f.prototype.uploadProgress=function(a,b){var c,d;this.options.preview&&(c=100-parseInt(b.loaded/b.total*100,10),d=b.context.find(".medium-insert-images-progress"),d.css("width",c+"%"),0===c&&d.remove())},f.prototype.uploadDone=function(b,c){var d=a.proxy(this,"showImage",c.result.files[0].url,c)();this.core.clean(),this.sorting(),this.options.uploadCompleted&&this.options.uploadCompleted(d,c)},f.prototype.showImage=function(b,c){var d,e,f=this.$el.find(".medium-insert-active");return f.click(),e=this,this.options.preview&&c.context?(d=this.getDOMImage(),d.onload=function(){c.context.find("img").attr("src",d.src),e.core.triggerInput()},d.src=b):(c.context=a(this.templates["src/js/templates/images-image.hbs"]({img:b,progress:this.options.preview})).appendTo(f),f.find("br").remove(),this.options.autoGrid&&f.find("figure").length>=this.options.autoGrid&&(a.each(this.options.styles,function(a,b){var c="medium-insert-images-"+a;f.removeClass(c),b.removed&&b.removed(f)}),f.addClass("medium-insert-images-grid"),this.options.styles.grid.added&&this.options.styles.grid.added(f)),this.options.preview&&c.submit()),this.core.triggerInput(),c.context},f.prototype.getDOMImage=function(){return new b.Image},f.prototype.selectImage=function(b){if(this.core.options.enabled){var c=a(b.target),d=this;this.$el.blur(),c.addClass("medium-insert-image-active"),c.closest(".medium-insert-images").addClass("medium-insert-active"),setTimeout(function(){d.addToolbar(),d.options.captions&&d.core.addCaption(c.closest("figure"),d.options.captionPlaceholder)},50)}},f.prototype.unselectImage=function(b){var c=a(b.target),d=this.$el.find(".medium-insert-image-active");return c.is("img")&&c.hasClass("medium-insert-image-active")?(d.not(c).removeClass("medium-insert-image-active"),a(".medium-insert-images-toolbar, .medium-insert-images-toolbar2").remove(),void this.core.removeCaptions(c)):(d.removeClass("medium-insert-image-active"),a(".medium-insert-images-toolbar, .medium-insert-images-toolbar2").remove(),void(c.is(".medium-insert-caption-placeholder")?this.core.removeCaptionPlaceholder(d.closest("figure")):c.is("figcaption")===!1&&this.core.removeCaptions()))},f.prototype.removeImage=function(b){var c,d,e;(8===b.which||46===b.which)&&(c=this.$el.find(".medium-insert-image-active"),c.length&&(b.preventDefault(),this.deleteFile(c.attr("src")),d=c.closest(".medium-insert-images"),c.closest("figure").remove(),a(".medium-insert-images-toolbar, .medium-insert-images-toolbar2").remove(),0===d.find("figure").length&&(e=d.next(),(e.is("p")===!1||""!==e.text())&&(e=a(this.templates["src/js/templates/core-empty-line.hbs"]().trim()),d.before(e)),d.remove(),this.core.hideAddons(),this.core.moveCaret(e)),this.core.triggerInput()))},f.prototype.deleteFile=function(b){if(this.options.deleteScript){var c=this.options.deleteMethod||"POST";a.ajax({url:this.options.deleteScript,type:c,data:{file:b}})}},f.prototype.addToolbar=function(){var b,c,d,e=this.$el.find(".medium-insert-image-active"),f=e.closest(".medium-insert-images"),g=!1,h=this.core.getEditor(),i=h.options.elementsContainer||"body";
a(i).append(this.templates["src/js/templates/images-toolbar.hbs"]({styles:this.options.styles,actions:this.options.actions}).trim()),b=a(".medium-insert-images-toolbar"),c=a(".medium-insert-images-toolbar2"),d=e.offset().top-b.height()-8-2-5,0>d&&(d=0),b.css({top:d,left:e.offset().left+e.width()/2-b.width()/2}).show(),c.css({top:e.offset().top+2,left:e.offset().left+e.width()-c.width()-4}).show(),b.find("button").each(function(){f.hasClass("medium-insert-images-"+a(this).data("action"))&&(a(this).addClass("medium-editor-button-active"),g=!0)}),g===!1&&b.find("button").first().addClass("medium-editor-button-active")},f.prototype.toolbarAction=function(b){var c=a(b.target).is("button")?a(b.target):a(b.target).closest("button"),d=c.closest("li"),e=d.closest("ul"),f=e.find("li"),g=this.$el.find(".medium-insert-active"),h=this;c.addClass("medium-editor-button-active"),d.siblings().find(".medium-editor-button-active").removeClass("medium-editor-button-active"),f.find("button").each(function(){var b="medium-insert-images-"+a(this).data("action");a(this).hasClass("medium-editor-button-active")?(g.addClass(b),h.options.styles[a(this).data("action")].added&&h.options.styles[a(this).data("action")].added(g)):(g.removeClass(b),h.options.styles[a(this).data("action")].removed&&h.options.styles[a(this).data("action")].removed(g))}),this.core.hideButtons(),this.core.triggerInput()},f.prototype.toolbar2Action=function(b){var c=a(b.target).is("button")?a(b.target):a(b.target).closest("button"),d=this.options.actions[c.data("action")].clicked;d&&d(this.$el.find(".medium-insert-image-active")),this.core.hideButtons(),this.core.triggerInput()},f.prototype.sorting=function(){a.proxy(this.options.sorting,this)()},a.fn[g+h]=function(b){return this.each(function(){a.data(this,"plugin_"+g+h)||a.data(this,"plugin_"+g+h,new f(this,b))})}}(jQuery,window,document,MediumEditor.util);
/* ----------------------------------------------------------------------------- 

  jQuery DateTimePicker - Responsive flat design jQuery DateTime Picker plugin for Web & Mobile
  Version 0.1.25
  Copyright (c)2015 Curious Solutions LLP and Neha Kadam
  http://curioussolutions.github.io/DateTimePicker
  https://github.com/CuriousSolutions/DateTimePicker

 ----------------------------------------------------------------------------- */

$.DateTimePicker=$.DateTimePicker||{name:"DateTimePicker",i18n:{},defaults:{mode:"date",defaultDate:null,dateSeparator:"-",timeSeparator:":",timeMeridiemSeparator:" ",dateTimeSeparator:" ",monthYearSeparator:" ",dateTimeFormat:"dd-MM-yyyy HH:mm",dateFormat:"dd-MM-yyyy",timeFormat:"HH:mm",maxDate:null,minDate:null,maxTime:null,minTime:null,maxDateTime:null,minDateTime:null,shortDayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],fullDayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortMonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],fullMonthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],labels:null,minuteInterval:1,roundOffMinutes:!0,secondsInterval:1,roundOffSeconds:!0,titleContentDate:"Set Date",titleContentTime:"Set Time",titleContentDateTime:"Set Date & Time",buttonsToDisplay:["HeaderCloseButton","SetButton","ClearButton"],setButtonContent:"Set",clearButtonContent:"Clear",incrementButtonContent:"+",decrementButtonContent:"-",setValueInTextboxOnEveryClick:!1,animationDuration:400,isPopup:!0,parentElement:"body",language:"",init:null,addEventHandlers:null,beforeShow:null,afterShow:null,beforeHide:null,afterHide:null,buttonClicked:null,settingValueOfElement:null,formatHumanDate:null,parseDateTimeString:null,formatDateTimeString:null},dataObject:{dCurrentDate:new Date,iCurrentDay:0,iCurrentMonth:0,iCurrentYear:0,iCurrentHour:0,iCurrentMinutes:0,iCurrentSeconds:0,sCurrentMeridiem:"",iMaxNumberOfDays:0,sDateFormat:"",sTimeFormat:"",sDateTimeFormat:"",dMinValue:null,dMaxValue:null,sArrInputDateFormats:[],sArrInputTimeFormats:[],sArrInputDateTimeFormats:[],bArrMatchFormat:[],bDateMode:!1,bTimeMode:!1,bDateTimeMode:!1,oInputElement:null,iTabIndex:0,bElemFocused:!1,bIs12Hour:!1}},$.cf={_isValid:function(a){return void 0!==a&&null!==a&&""!==a},_compare:function(a,b){var c=void 0!==a&&null!==a,d=void 0!==b&&null!==b;return c&&d&&a.toLowerCase()===b.toLowerCase()?!0:!1}},function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";function b(b,c){this.element=b;var d="";d=a.cf._isValid(c)&&a.cf._isValid(c.language)?c.language:a.DateTimePicker.defaults.language,this.settings=a.extend({},a.DateTimePicker.defaults,c,a.DateTimePicker.i18n[d]),this.options=c,this.oData=a.extend({},a.DateTimePicker.dataObject),this._defaults=a.DateTimePicker.defaults,this._name=a.DateTimePicker.name,this.init()}a.fn.DateTimePicker=function(c){var d,e,f=a(this).data(),g=f?Object.keys(f):[];if("string"!=typeof c)return this.each(function(){a.removeData(this,"plugin_DateTimePicker"),a.data(this,"plugin_DateTimePicker")||a.data(this,"plugin_DateTimePicker",new b(this,c))});if(a.cf._isValid(f))if("destroy"===c)if(g.length>0){for(d in g)if(e=g[d],-1!==e.search("plugin_DateTimePicker")){a(document).unbind("click.DateTimePicker"),a(document).unbind("keydown.DateTimePicker"),a(document).unbind("keyup.DateTimePicker"),a(this).children().remove(),a(this).removeData(),a(this).unbind(),a(this).removeClass("dtpicker-overlay dtpicker-mobile"),f=f[e],console.log("Destroyed DateTimePicker Object"),console.log(f);break}}else console.log("No DateTimePicker Object Defined For This Element");else if("object"===c)if(g.length>0){for(d in g)if(e=g[d],-1!==e.search("plugin_DateTimePicker"))return f[e]}else console.log("No DateTimePicker Object Defined For This Element")},b.prototype={init:function(){var b=this;b._setDateFormatArray(),b._setTimeFormatArray(),b._setDateTimeFormatArray(),b.settings.isPopup&&(b._createPicker(),a(b.element).addClass("dtpicker-mobile")),b.settings.init&&b.settings.init.call(b),b._addEventHandlersForInput()},_setDateFormatArray:function(){var a=this;a.oData.sArrInputDateFormats=[];var b="";b="dd"+a.settings.dateSeparator+"MM"+a.settings.dateSeparator+"yyyy",a.oData.sArrInputDateFormats.push(b),b="MM"+a.settings.dateSeparator+"dd"+a.settings.dateSeparator+"yyyy",a.oData.sArrInputDateFormats.push(b),b="yyyy"+a.settings.dateSeparator+"MM"+a.settings.dateSeparator+"dd",a.oData.sArrInputDateFormats.push(b),b="dd"+a.settings.dateSeparator+"MMM"+a.settings.dateSeparator+"yyyy",a.oData.sArrInputDateFormats.push(b),b="MM"+a.settings.monthYearSeparator+"yyyy",a.oData.sArrInputDateFormats.push(b),b="MMM"+a.settings.monthYearSeparator+"yyyy",a.oData.sArrInputDateFormats.push(b),b="MMMM"+a.settings.monthYearSeparator+"yyyy",a.oData.sArrInputDateFormats.push(b)},_setTimeFormatArray:function(){var a=this;a.oData.sArrInputTimeFormats=[];var b="";b="hh"+a.settings.timeSeparator+"mm"+a.settings.timeSeparator+"ss"+a.settings.timeMeridiemSeparator+"AA",a.oData.sArrInputTimeFormats.push(b),b="HH"+a.settings.timeSeparator+"mm"+a.settings.timeSeparator+"ss",a.oData.sArrInputTimeFormats.push(b),b="hh"+a.settings.timeSeparator+"mm"+a.settings.timeMeridiemSeparator+"AA",a.oData.sArrInputTimeFormats.push(b),b="HH"+a.settings.timeSeparator+"mm",a.oData.sArrInputTimeFormats.push(b)},_setDateTimeFormatArray:function(){var a=this;a.oData.sArrInputDateTimeFormats=[];var b="",c="",d="";b="dd"+a.settings.dateSeparator+"MM"+a.settings.dateSeparator+"yyyy",c="HH"+a.settings.timeSeparator+"mm"+a.settings.timeSeparator+"ss",d=b+a.settings.dateTimeSeparator+c,a.oData.sArrInputDateTimeFormats.push(d),b="dd"+a.settings.dateSeparator+"MM"+a.settings.dateSeparator+"yyyy",c="hh"+a.settings.timeSeparator+"mm"+a.settings.timeSeparator+"ss"+a.settings.timeMeridiemSeparator+"AA",d=b+a.settings.dateTimeSeparator+c,a.oData.sArrInputDateTimeFormats.push(d),b="MM"+a.settings.dateSeparator+"dd"+a.settings.dateSeparator+"yyyy",c="HH"+a.settings.timeSeparator+"mm"+a.settings.timeSeparator+"ss",d=b+a.settings.dateTimeSeparator+c,a.oData.sArrInputDateTimeFormats.push(d),b="MM"+a.settings.dateSeparator+"dd"+a.settings.dateSeparator+"yyyy",c="hh"+a.settings.timeSeparator+"mm"+a.settings.timeSeparator+"ss"+a.settings.timeMeridiemSeparator+"AA",d=b+a.settings.dateTimeSeparator+c,a.oData.sArrInputDateTimeFormats.push(d),b="yyyy"+a.settings.dateSeparator+"MM"+a.settings.dateSeparator+"dd",c="HH"+a.settings.timeSeparator+"mm"+a.settings.timeSeparator+"ss",d=b+a.settings.dateTimeSeparator+c,a.oData.sArrInputDateTimeFormats.push(d),b="yyyy"+a.settings.dateSeparator+"MM"+a.settings.dateSeparator+"dd",c="hh"+a.settings.timeSeparator+"mm"+a.settings.timeSeparator+"ss"+a.settings.timeMeridiemSeparator+"AA",d=b+a.settings.dateTimeSeparator+c,a.oData.sArrInputDateTimeFormats.push(d),b="dd"+a.settings.dateSeparator+"MMM"+a.settings.dateSeparator+"yyyy",c="hh"+a.settings.timeSeparator+"mm"+a.settings.timeSeparator+"ss",d=b+a.settings.dateTimeSeparator+c,a.oData.sArrInputDateTimeFormats.push(d),b="dd"+a.settings.dateSeparator+"MMM"+a.settings.dateSeparator+"yyyy",c="hh"+a.settings.timeSeparator+"mm"+a.settings.timeSeparator+"ss"+a.settings.timeMeridiemSeparator+"AA",d=b+a.settings.dateTimeSeparator+c,a.oData.sArrInputDateTimeFormats.push(d),b="dd"+a.settings.dateSeparator+"MM"+a.settings.dateSeparator+"yyyy",c="HH"+a.settings.timeSeparator+"mm",d=b+a.settings.dateTimeSeparator+c,a.oData.sArrInputDateTimeFormats.push(d),b="dd"+a.settings.dateSeparator+"MM"+a.settings.dateSeparator+"yyyy",c="hh"+a.settings.timeSeparator+"mm"+a.settings.timeMeridiemSeparator+"AA",d=b+a.settings.dateTimeSeparator+c,a.oData.sArrInputDateTimeFormats.push(d),b="MM"+a.settings.dateSeparator+"dd"+a.settings.dateSeparator+"yyyy",c="HH"+a.settings.timeSeparator+"mm",d=b+a.settings.dateTimeSeparator+c,a.oData.sArrInputDateTimeFormats.push(d),b="MM"+a.settings.dateSeparator+"dd"+a.settings.dateSeparator+"yyyy",c="hh"+a.settings.timeSeparator+"mm"+a.settings.timeMeridiemSeparator+"AA",d=b+a.settings.dateTimeSeparator+c,a.oData.sArrInputDateTimeFormats.push(d),b="yyyy"+a.settings.dateSeparator+"MM"+a.settings.dateSeparator+"dd",c="HH"+a.settings.timeSeparator+"mm",d=b+a.settings.dateTimeSeparator+c,a.oData.sArrInputDateTimeFormats.push(d),b="yyyy"+a.settings.dateSeparator+"MM"+a.settings.dateSeparator+"dd",c="hh"+a.settings.timeSeparator+"mm"+a.settings.timeMeridiemSeparator+"AA",d=b+a.settings.dateTimeSeparator+c,a.oData.sArrInputDateTimeFormats.push(d),b="dd"+a.settings.dateSeparator+"MMM"+a.settings.dateSeparator+"yyyy",c="hh"+a.settings.timeSeparator+"mm",d=b+a.settings.dateTimeSeparator+c,a.oData.sArrInputDateTimeFormats.push(d),b="dd"+a.settings.dateSeparator+"MMM"+a.settings.dateSeparator+"yyyy",c="hh"+a.settings.timeSeparator+"mm"+a.settings.timeMeridiemSeparator+"AA",d=b+a.settings.dateTimeSeparator+c,a.oData.sArrInputDateTimeFormats.push(d)},_matchFormat:function(b,c){var d=this;d.oData.bArrMatchFormat=[],d.oData.bDateMode=!1,d.oData.bTimeMode=!1,d.oData.bDateTimeMode=!1;var e,f=[];for(b=a.cf._isValid(b)?b:d.settings.mode,a.cf._compare(b,"date")?(c=a.cf._isValid(c)?c:d.oData.sDateFormat,d.oData.bDateMode=!0,f=d.oData.sArrInputDateFormats):a.cf._compare(b,"time")?(c=a.cf._isValid(c)?c:d.oData.sTimeFormat,d.oData.bTimeMode=!0,f=d.oData.sArrInputTimeFormats):a.cf._compare(b,"datetime")&&(c=a.cf._isValid(c)?c:d.oData.sDateTimeFormat,d.oData.bDateTimeMode=!0,f=d.oData.sArrInputDateTimeFormats),e=0;e<f.length;e++)d.oData.bArrMatchFormat.push(a.cf._compare(c,f[e]))},_setMatchFormat:function(a,b,c){var d=this;a>0&&d._matchFormat(b,c)},_createPicker:function(){var b=this;a(b.element).addClass("dtpicker-overlay"),a(".dtpicker-overlay").click(function(a){b._hidePicker("")});var c="";c+="<div class='dtpicker-bg'>",c+="<div class='dtpicker-cont'>",c+="<div class='dtpicker-content'>",c+="<div class='dtpicker-subcontent'>",c+="</div>",c+="</div>",c+="</div>",c+="</div>",a(b.element).html(c)},_addEventHandlersForInput:function(){var b=this;b.oData.oInputElement=null,a(b.settings.parentElement).find("input[type='date'], input[type='time'], input[type='datetime']").each(function(){a(this).attr("type","text"),a(this).attr("data-field",a(this).attr("type"))});var c="[data-field='date'], [data-field='time'], [data-field='datetime']";a(b.settings.parentElement).off("focus",c,b._inputFieldFocus),a(b.settings.parentElement).on("focus",c,{obj:b},b._inputFieldFocus),a(b.settings.parentElement).off("click",c,b._inputFieldClick),a(b.settings.parentElement).on("click",c,{obj:b},b._inputFieldClick),b.settings.addEventHandlers&&b.settings.addEventHandlers.call(b)},_inputFieldFocus:function(a){var b=a.data.obj;b.showDateTimePicker(this),b.oData.bMouseDown=!1},_inputFieldClick:function(b){var c=b.data.obj;a.cf._compare(a(this).prop("tagName"),"input")||c.showDateTimePicker(this),b.stopPropagation()},getDateObjectForInputField:function(b){var c=this;if(a.cf._isValid(b)){var d,e=c._getValueOfElement(b),f=a(b).data("field"),g="";return a.cf._isValid(f)||(f=c.settings.mode),c.settings.formatDateTimeString?d=c.settings.parseDateTimeString.call(c,e,f,a(b)):(g=a(b).data("format"),a.cf._isValid(g)||(a.cf._compare(f,"date")?g=c.settings.dateFormat:a.cf._compare(f,"time")?g=c.settings.timeFormat:a.cf._compare(f,"datetime")&&(g=c.settings.dateTimeFormat)),c._matchFormat(f,g),a.cf._compare(f,"date")?d=c._parseDate(e):a.cf._compare(f,"time")?d=c._parseTime(e):a.cf._compare(f,"datetime")&&(d=c._parseDateTime(e))),d}},setDateTimeStringInInputField:function(b,c){var d=this;c=c||d.oData.dCurrentDate;var e;a.cf._isValid(b)?(e=[],"string"==typeof b?e.push(b):"object"==typeof b&&(e=b)):e=a.cf._isValid(d.settings.parentElement)?a(d.settings.parentElement).find("[data-field='date'], [data-field='time'], [data-field='datetime']"):a("[data-field='date'], [data-field='time'], [data-field='datetime']"),e.each(function(){var b,e,f,g,h=this;b=a(h).data("field"),a.cf._isValid(b)||(b=d.settings.mode),e="Custom",f=!1,d.settings.formatDateTimeString||(e=a(h).data("format"),a.cf._isValid(e)||(a.cf._compare(b,"date")?e=d.settings.dateFormat:a.cf._compare(b,"time")?e=d.settings.timeFormat:a.cf._compare(b,"datetime")&&(e=d.settings.dateTimeFormat)),f=d.getIs12Hour(b,e)),g=d._setOutput(b,e,f,c,h),d._setValueOfElement(g,a(h))})},getDateTimeStringInFormat:function(a,b,c){var d=this;return d._setOutput(a,b,d.getIs12Hour(a,b),c)},showDateTimePicker:function(a){var b=this;null!==b.oData.oInputElement?b._hidePicker(0,a):b._showPicker(a)},_setButtonAction:function(a){var b=this;null!==b.oData.oInputElement&&(b._setValueOfElement(b._setOutput()),a?(b.settings.buttonClicked&&b.settings.buttonClicked.call(b,"TAB",b.oData.oInputElement),b._hidePicker(0)):b._hidePicker(""))},_setOutput:function(b,c,d,e,f){var g=this;e=a.cf._isValid(e)?e:g.oData.dCurrentDate,d=d||g.oData.bIs12Hour;var h,i=g._setVariablesForDate(e,!0,!0),j="",k=g._formatDate(i),l=g._formatTime(i),m=a.extend({},k,l),n="",o="",p=Function.length;return g.settings.formatDateTimeString?j=g.settings.formatDateTimeString.call(g,m,b,f):(g._setMatchFormat(p,b,c),g.oData.bDateMode?g.oData.bArrMatchFormat[0]?j=m.dd+g.settings.dateSeparator+m.MM+g.settings.dateSeparator+m.yyyy:g.oData.bArrMatchFormat[1]?j=m.MM+g.settings.dateSeparator+m.dd+g.settings.dateSeparator+m.yyyy:g.oData.bArrMatchFormat[2]?j=m.yyyy+g.settings.dateSeparator+m.MM+g.settings.dateSeparator+m.dd:g.oData.bArrMatchFormat[3]?j=m.dd+g.settings.dateSeparator+m.monthShort+g.settings.dateSeparator+m.yyyy:g.oData.bArrMatchFormat[4]?j=m.MM+g.settings.monthYearSeparator+m.yyyy:g.oData.bArrMatchFormat[5]?j=m.monthShort+g.settings.monthYearSeparator+m.yyyy:g.oData.bArrMatchFormat[6]&&(j=m.month+g.settings.monthYearSeparator+m.yyyy):g.oData.bTimeMode?g.oData.bArrMatchFormat[0]?j=m.hh+g.settings.timeSeparator+m.mm+g.settings.timeSeparator+m.ss+g.settings.timeMeridiemSeparator+m.ME:g.oData.bArrMatchFormat[1]?j=m.HH+g.settings.timeSeparator+m.mm+g.settings.timeSeparator+m.ss:g.oData.bArrMatchFormat[2]?j=m.hh+g.settings.timeSeparator+m.mm+g.settings.timeMeridiemSeparator+m.ME:g.oData.bArrMatchFormat[3]&&(j=m.HH+g.settings.timeSeparator+m.mm):g.oData.bDateTimeMode&&(g.oData.bArrMatchFormat[0]||g.oData.bArrMatchFormat[1]||g.oData.bArrMatchFormat[8]||g.oData.bArrMatchFormat[9]?n=m.dd+g.settings.dateSeparator+m.MM+g.settings.dateSeparator+m.yyyy:g.oData.bArrMatchFormat[2]||g.oData.bArrMatchFormat[3]||g.oData.bArrMatchFormat[10]||g.oData.bArrMatchFormat[11]?n=m.MM+g.settings.dateSeparator+m.dd+g.settings.dateSeparator+m.yyyy:g.oData.bArrMatchFormat[4]||g.oData.bArrMatchFormat[5]||g.oData.bArrMatchFormat[12]||g.oData.bArrMatchFormat[13]?n=m.yyyy+g.settings.dateSeparator+m.MM+g.settings.dateSeparator+m.dd:(g.oData.bArrMatchFormat[6]||g.oData.bArrMatchFormat[7]||g.oData.bArrMatchFormat[14]||g.oData.bArrMatchFormat[15])&&(n=m.dd+g.settings.dateSeparator+m.monthShort+g.settings.dateSeparator+m.yyyy),h=g.oData.bArrMatchFormat[0]||g.oData.bArrMatchFormat[1]||g.oData.bArrMatchFormat[2]||g.oData.bArrMatchFormat[3]||g.oData.bArrMatchFormat[4]||g.oData.bArrMatchFormat[5]||g.oData.bArrMatchFormat[6]||g.oData.bArrMatchFormat[7],o=d?h?m.hh+g.settings.timeSeparator+m.mm+g.settings.timeSeparator+m.ss+g.settings.timeMeridiemSeparator+m.ME:m.hh+g.settings.timeSeparator+m.mm+g.settings.timeMeridiemSeparator+m.ME:h?m.HH+g.settings.timeSeparator+m.mm+g.settings.timeSeparator+m.ss:m.HH+g.settings.timeSeparator+m.mm,""!==n&&""!==o&&(j=n+g.settings.dateTimeSeparator+o)),g._setMatchFormat(p)),j},_clearButtonAction:function(){var a=this;null!==a.oData.oInputElement&&a._setValueOfElement(""),a._hidePicker("")},_setOutputOnIncrementOrDecrement:function(){var b=this;a.cf._isValid(b.oData.oInputElement)&&b.settings.setValueInTextboxOnEveryClick&&b._setValueOfElement(b._setOutput())},_showPicker:function(b){var c=this;if(null===c.oData.oInputElement){c.oData.oInputElement=b,c.oData.iTabIndex=parseInt(a(b).attr("tabIndex"));var d=a(b).data("field")||"",e=a(b).data("min")||"",f=a(b).data("max")||"",g=a(b).data("format")||"",h=a(b).data("view")||"",i=a(b).data("startend")||"",j=a(b).data("startendelem")||"",k=c._getValueOfElement(b)||"";if(""!==h&&c.setIsPopup(a.cf._compare(h,"Popup")?!0:!1),!c.settings.isPopup){c._createPicker();var l=a(c.oData.oInputElement).offset().top+a(c.oData.oInputElement).outerHeight(),m=a(c.oData.oInputElement).offset().left,n=a(c.oData.oInputElement).outerWidth();a(c.element).css({position:"absolute",top:l,left:m,width:n,height:"auto"})}c.settings.beforeShow&&c.settings.beforeShow.call(c,b),d=a.cf._isValid(d)?d:c.settings.mode,c.settings.mode=d,a.cf._isValid(g)||(a.cf._compare(d,"date")?g=c.settings.dateFormat:a.cf._compare(d,"time")?g=c.settings.timeFormat:a.cf._compare(d,"datetime")&&(g=c.settings.dateTimeFormat)),c._matchFormat(d,g),c.oData.dMinValue=null,c.oData.dMaxValue=null,c.oData.bIs12Hour=!1;var o,p,q,r,s,t,u,v;c.oData.bDateMode?(o=e||c.settings.minDate,p=f||c.settings.maxDate,c.oData.sDateFormat=g,a.cf._isValid(o)&&(c.oData.dMinValue=c._parseDate(o)),a.cf._isValid(p)&&(c.oData.dMaxValue=c._parseDate(p)),""!==i&&(a.cf._compare(i,"start")||a.cf._compare(i,"end"))&&""!==j&&a(j).length>=1&&(q=c._getValueOfElement(a(j)),""!==q&&(r=c.settings.parseDateTimeString?c.settings.parseDateTimeString.call(c,q,d,a(j)):c._parseDate(q),a.cf._compare(i,"start")?a.cf._isValid(p)?c._compareDates(r,c.oData.dMaxValue)<0&&(c.oData.dMaxValue=new Date(r)):c.oData.dMaxValue=new Date(r):a.cf._compare(i,"end")&&(a.cf._isValid(o)?c._compareDates(r,c.oData.dMinValue)>0&&(c.oData.dMinValue=new Date(r)):c.oData.dMinValue=new Date(r)))),c.settings.parseDateTimeString?c.oData.dCurrentDate=c.settings.parseDateTimeString.call(c,k,d,a(b)):c.oData.dCurrentDate=c._parseDate(k),c.oData.dCurrentDate.setHours(0),c.oData.dCurrentDate.setMinutes(0),c.oData.dCurrentDate.setSeconds(0)):c.oData.bTimeMode?(o=e||c.settings.minTime,p=f||c.settings.maxTime,c.oData.sTimeFormat=g,a.cf._isValid(o)&&(c.oData.dMinValue=c._parseTime(o)),a.cf._isValid(p)&&(c.oData.dMaxValue=c._parseTime(p)),""!==i&&(a.cf._compare(i,"start")||a.cf._compare(i,"end"))&&""!==j&&a(j).length>=1&&(s=c._getValueOfElement(a(j)),""!==s&&(c.settings.parseDateTimeString?r=c.settings.parseDateTimeString.call(c,s,d,a(j)):t=c._parseTime(s),a.cf._compare(i,"start")?(t.setMinutes(t.getMinutes()-1),a.cf._isValid(p)?2===c._compareTime(t,c.oData.dMaxValue)&&(c.oData.dMaxValue=new Date(t)):c.oData.dMaxValue=new Date(t)):a.cf._compare(i,"end")&&(t.setMinutes(t.getMinutes()+1),a.cf._isValid(o)?3===c._compareTime(t,c.oData.dMinValue)&&(c.oData.dMinValue=new Date(t)):c.oData.dMinValue=new Date(t)))),c.oData.bIs12Hour=c.getIs12Hour(),c.settings.parseDateTimeString?c.oData.dCurrentDate=c.settings.parseDateTimeString.call(c,k,d,a(b)):c.oData.dCurrentDate=c._parseTime(k)):c.oData.bDateTimeMode&&(o=e||c.settings.minDateTime,p=f||c.settings.maxDateTime,c.oData.sDateTimeFormat=g,a.cf._isValid(o)&&(c.oData.dMinValue=c._parseDateTime(o)),a.cf._isValid(p)&&(c.oData.dMaxValue=c._parseDateTime(p)),""!==i&&(a.cf._compare(i,"start")||a.cf._compare(i,"end"))&&""!==j&&a(j).length>=1&&(u=c._getValueOfElement(a(j)),""!==u&&(v=c.settings.parseDateTimeString?c.settings.parseDateTimeString.call(c,u,d,a(j)):c._parseDateTime(u),a.cf._compare(i,"start")?a.cf._isValid(p)?c._compareDateTime(v,c.oData.dMaxValue)<0&&(c.oData.dMaxValue=new Date(v)):c.oData.dMaxValue=new Date(v):a.cf._compare(i,"end")&&(a.cf._isValid(o)?c._compareDateTime(v,c.oData.dMinValue)>0&&(c.oData.dMinValue=new Date(v)):c.oData.dMinValue=new Date(v)))),c.oData.bIs12Hour=c.getIs12Hour(),c.settings.parseDateTimeString?c.oData.dCurrentDate=c.settings.parseDateTimeString.call(c,k,d,a(b)):c.oData.dCurrentDate=c._parseDateTime(k)),c._setVariablesForDate(),c._modifyPicker(),a(c.element).fadeIn(c.settings.animationDuration),c.settings.afterShow&&setTimeout(function(){c.settings.afterShow.call(c,b)},c.settings.animationDuration)}},_hidePicker:function(b,c){var d=this,e=d.oData.oInputElement;d.settings.beforeHide&&d.settings.beforeHide.call(d,e),a.cf._isValid(b)||(b=d.settings.animationDuration),a.cf._isValid(d.oData.oInputElement)&&(a(d.oData.oInputElement).blur(),d.oData.oInputElement=null),a(d.element).fadeOut(b),0===b?a(d.element).find(".dtpicker-subcontent").html(""):setTimeout(function(){a(d.element).find(".dtpicker-subcontent").html("")},b),a(document).unbind("click.DateTimePicker"),a(document).unbind("keydown.DateTimePicker"),a(document).unbind("keyup.DateTimePicker"),d.settings.afterHide&&(0===b?d.settings.afterHide.call(d,e):setTimeout(function(){d.settings.afterHide.call(d,e)},b)),a.cf._isValid(c)&&d._showPicker(c)},_modifyPicker:function(){var b,c,d=this,e=[];d.oData.bDateMode?(b=d.settings.titleContentDate,c=3,d.oData.bArrMatchFormat[0]?e=["day","month","year"]:d.oData.bArrMatchFormat[1]?e=["month","day","year"]:d.oData.bArrMatchFormat[2]?e=["year","month","day"]:d.oData.bArrMatchFormat[3]?e=["day","month","year"]:d.oData.bArrMatchFormat[4]?(c=2,e=["month","year"]):d.oData.bArrMatchFormat[5]?(c=2,e=["month","year"]):d.oData.bArrMatchFormat[6]&&(c=2,e=["month","year"])):d.oData.bTimeMode?(b=d.settings.titleContentTime,d.oData.bArrMatchFormat[0]?(c=4,e=["hour","minutes","seconds","meridiem"]):d.oData.bArrMatchFormat[1]?(c=3,e=["hour","minutes","seconds"]):d.oData.bArrMatchFormat[2]?(c=3,e=["hour","minutes","meridiem"]):d.oData.bArrMatchFormat[3]&&(c=2,e=["hour","minutes"])):d.oData.bDateTimeMode&&(b=d.settings.titleContentDateTime,d.oData.bArrMatchFormat[0]?(c=6,e=["day","month","year","hour","minutes","seconds"]):d.oData.bArrMatchFormat[1]?(c=7,e=["day","month","year","hour","minutes","seconds","meridiem"]):d.oData.bArrMatchFormat[2]?(c=6,e=["month","day","year","hour","minutes","seconds"]):d.oData.bArrMatchFormat[3]?(c=7,e=["month","day","year","hour","minutes","seconds","meridiem"]):d.oData.bArrMatchFormat[4]?(c=6,e=["year","month","day","hour","minutes","seconds"]):d.oData.bArrMatchFormat[5]?(c=7,e=["year","month","day","hour","minutes","seconds","meridiem"]):d.oData.bArrMatchFormat[6]?(c=6,e=["day","month","year","hour","minutes","seconds"]):d.oData.bArrMatchFormat[7]?(c=7,e=["day","month","year","hour","minutes","seconds","meridiem"]):d.oData.bArrMatchFormat[8]?(c=5,e=["day","month","year","hour","minutes"]):d.oData.bArrMatchFormat[9]?(c=6,e=["day","month","year","hour","minutes","meridiem"]):d.oData.bArrMatchFormat[10]?(c=5,e=["month","day","year","hour","minutes"]):d.oData.bArrMatchFormat[11]?(c=6,e=["month","day","year","hour","minutes","meridiem"]):d.oData.bArrMatchFormat[12]?(c=5,e=["year","month","day","hour","minutes"]):d.oData.bArrMatchFormat[13]?(c=6,e=["year","month","day","hour","minutes","meridiem"]):d.oData.bArrMatchFormat[14]?(c=5,e=["day","month","year","hour","minutes"]):d.oData.bArrMatchFormat[15]&&(c=6,e=["day","month","year","hour","minutes","meridiem"]));var f,g="dtpicker-comp"+c,h=!1,i=!1,j=!1;for(f=0;f<d.settings.buttonsToDisplay.length;f++)a.cf._compare(d.settings.buttonsToDisplay[f],"HeaderCloseButton")?h=!0:a.cf._compare(d.settings.buttonsToDisplay[f],"SetButton")?i=!0:a.cf._compare(d.settings.buttonsToDisplay[f],"ClearButton")&&(j=!0);var k="";k+="<div class='dtpicker-header'>",k+="<div class='dtpicker-title'>"+b+"</div>",h&&(k+="<a class='dtpicker-close'>&times;</a>"),k+="<div class='dtpicker-value'></div>",k+="</div>";var l="";for(l+="<div class='dtpicker-components'>",f=0;c>f;f++){var m=e[f];l+="<div class='dtpicker-compOutline "+g+"'>",l+="<div class='dtpicker-comp "+m+"'>",l+="<a class='dtpicker-compButton increment'>"+d.settings.incrementButtonContent+"</a>",l+="<input type='text' class='dtpicker-compValue'></input>",l+="<a class='dtpicker-compButton decrement'>"+d.settings.decrementButtonContent+"</a>",d.settings.labels&&(l+="<div class='dtpicker-label'>"+d.settings.labels[m]+"</div>"),l+="</div>",l+="</div>"}l+="</div>";var n="";n=i&&j?" dtpicker-twoButtons":" dtpicker-singleButton";var o="";o+="<div class='dtpicker-buttonCont"+n+"'>",i&&(o+="<a class='dtpicker-button dtpicker-buttonSet'>"+d.settings.setButtonContent+"</a>"),j&&(o+="<a class='dtpicker-button dtpicker-buttonClear'>"+d.settings.clearButtonContent+"</a>"),o+="</div>";var p=k+l+o;a(d.element).find(".dtpicker-subcontent").html(p),d._setCurrentDate(),d._addEventHandlersForPicker()},_addEventHandlersForPicker:function(){var b=this;a(document).on("click.DateTimePicker",function(a){b._hidePicker("")}),a(document).on("keydown.DateTimePicker",function(c){return a(".dtpicker-compValue").is(":focus")||9!==parseInt(c.keyCode?c.keyCode:c.which)?void 0:(b._setButtonAction(!0),a("[tabIndex="+(b.oData.iTabIndex+1)+"]").focus(),!1)}),a(document).on("keydown.DateTimePicker",function(c){a(".dtpicker-compValue").is(":focus")||9===parseInt(c.keyCode?c.keyCode:c.which)||b._hidePicker("")}),a(".dtpicker-cont *").click(function(a){a.stopPropagation()}),a(".dtpicker-compValue").not(".month .dtpicker-compValue, .meridiem .dtpicker-compValue").keyup(function(){this.value=this.value.replace(/[^0-9\.]/g,"")}),a(".dtpicker-compValue").focus(function(){b.oData.bElemFocused=!0}),a(".dtpicker-compValue").blur(function(){b._getValuesFromInputBoxes(),b._setCurrentDate(),b.oData.bElemFocused=!1;var c=a(this).parent().parent();setTimeout(function(){c.is(":last-child")&&!b.oData.bElemFocused&&b._setButtonAction(!1)},50)}),a(".dtpicker-compValue").keyup(function(){var b,c=a(this),d=c.val(),e=d.length;c.parent().hasClass("day")||c.parent().hasClass("hour")||c.parent().hasClass("minutes")||c.parent().hasClass("meridiem")?e>2&&(b=d.slice(0,2),c.val(b)):c.parent().hasClass("month")?e>3&&(b=d.slice(0,3),c.val(b)):c.parent().hasClass("year")&&e>4&&(b=d.slice(0,4),c.val(b))}),a(b.element).find(".dtpicker-close").click(function(a){b.settings.buttonClicked&&b.settings.buttonClicked.call(b,"CLOSE",b.oData.oInputElement),b._hidePicker("")}),a(b.element).find(".dtpicker-buttonSet").click(function(a){b.settings.buttonClicked&&b.settings.buttonClicked.call(b,"SET",b.oData.oInputElement),b._setButtonAction(!1)}),a(b.element).find(".dtpicker-buttonClear").click(function(a){b.settings.buttonClicked&&b.settings.buttonClicked.call(b,"CLEAR",b.oData.oInputElement),b._clearButtonAction()}),a(b.element).find(".day .increment, .day .increment *").click(function(a){b.oData.iCurrentDay++,b._setCurrentDate(),b._setOutputOnIncrementOrDecrement()}),a(b.element).find(".day .decrement, .day .decrement *").click(function(a){b.oData.iCurrentDay--,b._setCurrentDate(),b._setOutputOnIncrementOrDecrement()}),a(b.element).find(".month .increment, .month .increment *").click(function(a){b.oData.iCurrentMonth++,b._setCurrentDate(),b._setOutputOnIncrementOrDecrement()}),a(b.element).find(".month .decrement, .month .decrement *").click(function(a){b.oData.iCurrentMonth--,b._setCurrentDate(),b._setOutputOnIncrementOrDecrement()}),a(b.element).find(".year .increment, .year .increment *").click(function(a){b.oData.iCurrentYear++,b._setCurrentDate(),b._setOutputOnIncrementOrDecrement()}),a(b.element).find(".year .decrement, .year .decrement *").click(function(a){b.oData.iCurrentYear--,b._setCurrentDate(),b._setOutputOnIncrementOrDecrement()}),a(b.element).find(".hour .increment, .hour .increment *").click(function(a){b.oData.iCurrentHour++,b._setCurrentDate(),b._setOutputOnIncrementOrDecrement()}),a(b.element).find(".hour .decrement, .hour .decrement *").click(function(a){b.oData.iCurrentHour--,b._setCurrentDate(),b._setOutputOnIncrementOrDecrement()}),a(b.element).find(".minutes .increment, .minutes .increment *").click(function(a){b.oData.iCurrentMinutes+=b.settings.minuteInterval,b._setCurrentDate(),b._setOutputOnIncrementOrDecrement()}),a(b.element).find(".minutes .decrement, .minutes .decrement *").click(function(a){b.oData.iCurrentMinutes-=b.settings.minuteInterval,b._setCurrentDate(),b._setOutputOnIncrementOrDecrement()}),a(b.element).find(".seconds .increment, .seconds .increment *").click(function(a){b.oData.iCurrentSeconds+=b.settings.secondsInterval,b._setCurrentDate(),b._setOutputOnIncrementOrDecrement()}),a(b.element).find(".seconds .decrement, .seconds .decrement *").click(function(a){b.oData.iCurrentSeconds-=b.settings.secondsInterval,b._setCurrentDate(),b._setOutputOnIncrementOrDecrement()}),a(b.element).find(".meridiem .dtpicker-compButton, .meridiem .dtpicker-compButton *").click(function(c){a.cf._compare(b.oData.sCurrentMeridiem,"AM")?(b.oData.sCurrentMeridiem="PM",b.oData.iCurrentHour+=12):a.cf._compare(b.oData.sCurrentMeridiem,"PM")&&(b.oData.sCurrentMeridiem="AM",b.oData.iCurrentHour-=12),b._setCurrentDate(),b._setOutputOnIncrementOrDecrement()})},_adjustMinutes:function(a){var b=this;return b.settings.roundOffMinutes&&1!==b.settings.minuteInterval&&(a=a%b.settings.minuteInterval?a-a%b.settings.minuteInterval+b.settings.minuteInterval:a),a},_adjustSeconds:function(a){var b=this;return b.settings.roundOffSeconds&&1!==b.settings.secondsInterval&&(a=a%b.settings.secondsInterval?a-a%b.settings.secondsInterval+b.settings.secondsInterval:a),a},_getValueOfElement:function(b){var c="";return c=a.cf._compare(a(b).prop("tagName"),"INPUT")?a(b).val():a(b).html()},_setValueOfElement:function(b,c){var d=this;a.cf._isValid(c)||(c=a(d.oData.oInputElement)),a.cf._compare(c.prop("tagName"),"INPUT")?c.val(b):c.html(b);var e=d.getDateObjectForInputField(c);return d.settings.settingValueOfElement&&d.settings.settingValueOfElement.call(d,b,e,c),c.change(),b},_parseDate:function(b){var c=this,d=c.settings.defaultDate?new Date(c.settings.defaultDate):new Date,e=d.getDate(),f=d.getMonth(),g=d.getFullYear();if(a.cf._isValid(b)){var h;h=b.split(c.oData.bArrMatchFormat[4]||c.oData.bArrMatchFormat[5]||c.oData.bArrMatchFormat[6]?c.settings.monthYearSeparator:c.settings.dateSeparator),c.oData.bArrMatchFormat[0]?(e=parseInt(h[0]),f=parseInt(h[1]-1),g=parseInt(h[2])):c.oData.bArrMatchFormat[1]?(f=parseInt(h[0]-1),e=parseInt(h[1]),g=parseInt(h[2])):c.oData.bArrMatchFormat[2]?(g=parseInt(h[0]),f=parseInt(h[1]-1),e=parseInt(h[2])):c.oData.bArrMatchFormat[3]?(e=parseInt(h[0]),f=c._getShortMonthIndex(h[1]),g=parseInt(h[2])):c.oData.bArrMatchFormat[4]?(e=1,f=parseInt(h[0])-1,g=parseInt(h[1])):c.oData.bArrMatchFormat[5]?(e=1,f=c._getShortMonthIndex(h[0]),g=parseInt(h[1])):c.oData.bArrMatchFormat[6]&&(e=1,f=c._getFullMonthIndex(h[0]),g=parseInt(h[1]))}return d=new Date(g,f,e,0,0,0,0)},_parseTime:function(b){var c,d,e,f=this,g=f.settings.defaultDate?new Date(f.settings.defaultDate):new Date,h=g.getDate(),i=g.getMonth(),j=g.getFullYear(),k=g.getHours(),l=g.getMinutes(),m=g.getSeconds(),n=f.oData.bArrMatchFormat[0]||f.oData.bArrMatchFormat[1];return m=n?f._adjustSeconds(m):0,a.cf._isValid(b)&&(f.oData.bIs12Hour&&(c=b.split(f.settings.timeMeridiemSeparator),b=c[0],d=c[1],a.cf._compare(d,"AM")||a.cf._compare(d,"PM")||(d="")),e=b.split(f.settings.timeSeparator),k=parseInt(e[0]),l=parseInt(e[1]),n&&(m=parseInt(e[2]),m=f._adjustSeconds(m)),12===k&&a.cf._compare(d,"AM")?k=0:12>k&&a.cf._compare(d,"PM")&&(k+=12)),l=f._adjustMinutes(l),g=new Date(j,i,h,k,l,m,0)},_parseDateTime:function(b){var c,d,e,f,g,h=this,i=h.settings.defaultDate?new Date(h.settings.defaultDate):new Date,j=i.getDate(),k=i.getMonth(),l=i.getFullYear(),m=i.getHours(),n=i.getMinutes(),o=i.getSeconds(),p="",q=h.oData.bArrMatchFormat[0]||h.oData.bArrMatchFormat[1]||h.oData.bArrMatchFormat[2]||h.oData.bArrMatchFormat[3]||h.oData.bArrMatchFormat[4]||h.oData.bArrMatchFormat[5]||h.oData.bArrMatchFormat[6]||h.oData.bArrMatchFormat[7];return o=q?h._adjustSeconds(o):0,a.cf._isValid(b)&&(c=b.split(h.settings.dateTimeSeparator),d=c[0].split(h.settings.dateSeparator),h.oData.bArrMatchFormat[0]||h.oData.bArrMatchFormat[1]||h.oData.bArrMatchFormat[8]||h.oData.bArrMatchFormat[9]?(j=parseInt(d[0]),k=parseInt(d[1]-1),l=parseInt(d[2])):h.oData.bArrMatchFormat[2]||h.oData.bArrMatchFormat[3]||h.oData.bArrMatchFormat[10]||h.oData.bArrMatchFormat[11]?(k=parseInt(d[0]-1),j=parseInt(d[1]),l=parseInt(d[2])):h.oData.bArrMatchFormat[4]||h.oData.bArrMatchFormat[5]||h.oData.bArrMatchFormat[12]||h.oData.bArrMatchFormat[13]?(l=parseInt(d[0]),k=parseInt(d[1]-1),j=parseInt(d[2])):(h.oData.bArrMatchFormat[6]||h.oData.bArrMatchFormat[7]||h.oData.bArrMatchFormat[14]||h.oData.bArrMatchFormat[15])&&(j=parseInt(d[0]),k=h._getShortMonthIndex(d[1]),l=parseInt(d[2])),e=c[1],a.cf._isValid(e)&&(h.oData.bIs12Hour&&(a.cf._compare(h.settings.dateTimeSeparator,h.settings.timeMeridiemSeparator)&&3===c.length?p=c[2]:(f=e.split(h.settings.timeMeridiemSeparator),
e=f[0],p=f[1]),a.cf._compare(p,"AM")||a.cf._compare(p,"PM")||(p="")),g=e.split(h.settings.timeSeparator),m=parseInt(g[0]),n=parseInt(g[1]),q&&(o=parseInt(g[2])),12===m&&a.cf._compare(p,"AM")?m=0:12>m&&a.cf._compare(p,"PM")&&(m+=12))),n=h._adjustMinutes(n),i=new Date(l,k,j,m,n,o,0)},_getShortMonthIndex:function(b){for(var c=this,d=0;d<c.settings.shortMonthNames.length;d++)if(a.cf._compare(b,c.settings.shortMonthNames[d]))return d},_getFullMonthIndex:function(b){for(var c=this,d=0;d<c.settings.fullMonthNames.length;d++)if(a.cf._compare(b,c.settings.fullMonthNames[d]))return d},getIs12Hour:function(a,b){var c=this,d=!1,e=Function.length;return c._setMatchFormat(e,a,b),c.oData.bTimeMode?d=c.oData.bArrMatchFormat[0]||c.oData.bArrMatchFormat[2]:c.oData.bDateTimeMode&&(d=c.oData.bArrMatchFormat[1]||c.oData.bArrMatchFormat[3]||c.oData.bArrMatchFormat[5]||c.oData.bArrMatchFormat[7]||c.oData.bArrMatchFormat[9]||c.oData.bArrMatchFormat[11]||c.oData.bArrMatchFormat[13]||c.oData.bArrMatchFormat[15]),c._setMatchFormat(e),d},_setVariablesForDate:function(b,c,d){var e,f=this,g={},h=a.cf._isValid(b);return h?(e=new Date(b),a.cf._isValid(c)||(c=!0),a.cf._isValid(d)||(d=!0)):(e="[object Date]"===Object.prototype.toString.call(f.oData.dCurrentDate)&&isFinite(f.oData.dCurrentDate)?new Date(f.oData.dCurrentDate):new Date,a.cf._isValid(c)||(c=f.oData.bTimeMode||f.oData.bDateTimeMode),a.cf._isValid(d)||(d=f.oData.bIs12Hour)),g.iCurrentDay=e.getDate(),g.iCurrentMonth=e.getMonth(),g.iCurrentYear=e.getFullYear(),g.iCurrentWeekday=e.getDay(),c&&(g.iCurrentHour=e.getHours(),g.iCurrentMinutes=e.getMinutes(),g.iCurrentSeconds=e.getSeconds(),d&&(g.sCurrentMeridiem=f._determineMeridiemFromHourAndMinutes(g.iCurrentHour,g.iCurrentMinutes))),h?g:void(f.oData=a.extend(f.oData,g))},_getValuesFromInputBoxes:function(){var b=this;if(b.oData.bDateMode||b.oData.bDateTimeMode){var c,d;c=a(b.element).find(".month .dtpicker-compValue").val(),c.length>1&&(c=c.charAt(0).toUpperCase()+c.slice(1)),d=b.settings.shortMonthNames.indexOf(c),-1!==d?b.oData.iCurrentMonth=parseInt(d):c.match("^[+|-]?[0-9]+$")&&(b.oData.iCurrentMonth=parseInt(c-1)),b.oData.iCurrentDay=parseInt(a(b.element).find(".day .dtpicker-compValue").val())||b.oData.iCurrentDay,b.oData.iCurrentYear=parseInt(a(b.element).find(".year .dtpicker-compValue").val())||b.oData.iCurrentYear}if(b.oData.bTimeMode||b.oData.bDateTimeMode){var e,f,g,h;e=parseInt(a(b.element).find(".hour .dtpicker-compValue").val()),f=b._adjustMinutes(parseInt(a(b.element).find(".minutes .dtpicker-compValue").val())),g=b._adjustMinutes(parseInt(a(b.element).find(".seconds .dtpicker-compValue").val())),b.oData.iCurrentHour=isNaN(e)?b.oData.iCurrentHour:e,b.oData.iCurrentMinutes=isNaN(f)?b.oData.iCurrentMinutes:f,b.oData.iCurrentSeconds=isNaN(g)?b.oData.iCurrentSeconds:g,b.oData.iCurrentSeconds>59&&(b.oData.iCurrentMinutes+=b.oData.iCurrentSeconds/60,b.oData.iCurrentSeconds=b.oData.iCurrentSeconds%60),b.oData.iCurrentMinutes>59&&(b.oData.iCurrentHour+=b.oData.iCurrentMinutes/60,b.oData.iCurrentMinutes=b.oData.iCurrentMinutes%60),b.oData.bIs12Hour?b.oData.iCurrentHour>12&&(b.oData.iCurrentHour=b.oData.iCurrentHour%12):b.oData.iCurrentHour>23&&(b.oData.iCurrentHour=b.oData.iCurrentHour%23),b.oData.bIs12Hour&&(h=a(b.element).find(".meridiem .dtpicker-compValue").val(),(a.cf._compare(h,"AM")||a.cf._compare(h,"PM"))&&(b.oData.sCurrentMeridiem=h),a.cf._compare(b.oData.sCurrentMeridiem,"PM")&&12!==b.oData.iCurrentHour&&b.oData.iCurrentHour<13&&(b.oData.iCurrentHour+=12),a.cf._compare(b.oData.sCurrentMeridiem,"AM")&&12===b.oData.iCurrentHour&&(b.oData.iCurrentHour=0))}},_setCurrentDate:function(){var b=this;(b.oData.bTimeMode||b.oData.bDateTimeMode)&&(b.oData.iCurrentSeconds>59?(b.oData.iCurrentMinutes+=b.oData.iCurrentSeconds/60,b.oData.iCurrentSeconds=b.oData.iCurrentSeconds%60):b.oData.iCurrentSeconds<0&&(b.oData.iCurrentMinutes-=b.settings.minuteInterval,b.oData.iCurrentSeconds+=60),b.oData.iCurrentMinutes=b._adjustMinutes(b.oData.iCurrentMinutes),b.oData.iCurrentSeconds=b._adjustSeconds(b.oData.iCurrentSeconds));var c,d,e,f,g,h,i,j=new Date(b.oData.iCurrentYear,b.oData.iCurrentMonth,b.oData.iCurrentDay,b.oData.iCurrentHour,b.oData.iCurrentMinutes,b.oData.iCurrentSeconds,0),k=!1,l=!1;if(null!==b.oData.dMaxValue&&(k=j.getTime()>b.oData.dMaxValue.getTime()),null!==b.oData.dMinValue&&(l=j.getTime()<b.oData.dMinValue.getTime()),k||l){var m=!1,n=!1;null!==b.oData.dMaxValue&&(m=b.oData.dCurrentDate.getTime()>b.oData.dMaxValue.getTime()),null!==b.oData.dMinValue&&(n=b.oData.dCurrentDate.getTime()<b.oData.dMinValue.getTime()),m||n?(m&&(j=new Date(b.oData.dMaxValue),console.log("Info : Date/Time/DateTime you entered is later than Maximum value, so DateTimePicker is showing Maximum value in Input Field.")),n&&(j=new Date(b.oData.dMinValue),console.log("Info : Date/Time/DateTime you entered is earlier than Minimum value, so DateTimePicker is showing Minimum value in Input Field.")),console.log("Please enter proper Date/Time/DateTime values.")):j=new Date(b.oData.dCurrentDate)}if(b.oData.dCurrentDate=new Date(j),b._setVariablesForDate(),d={},g="",h="",i="",(b.oData.bDateMode||b.oData.bDateTimeMode)&&(b.oData.bDateMode&&(b.oData.bArrMatchFormat[4]||b.oData.bArrMatchFormat[5]||b.oData.bArrMatchFormat[6])&&(b.oData.iCurrentDay=1),e=b._formatDate(),a(b.element).find(".day .dtpicker-compValue").val(e.dd),a(b.element).find(".month .dtpicker-compValue").val(b.oData.bDateMode?b.oData.bArrMatchFormat[4]?e.MM:b.oData.bArrMatchFormat[6]?e.month:e.monthShort:e.monthShort),a(b.element).find(".year .dtpicker-compValue").val(e.yyyy),b.settings.formatHumanDate?d=a.extend(d,e):b.oData.bDateMode&&(b.oData.bArrMatchFormat[4]||b.oData.bArrMatchFormat[5]||b.oData.bArrMatchFormat[6])?b.oData.bArrMatchFormat[4]?g=e.MM+b.settings.monthYearSeparator+e.yyyy:b.oData.bArrMatchFormat[5]?g=e.monthShort+b.settings.monthYearSeparator+e.yyyy:b.oData.bArrMatchFormat[6]&&(g=e.month+b.settings.monthYearSeparator+e.yyyy):g=e.dayShort+", "+e.month+" "+e.dd+", "+e.yyyy),b.oData.bTimeMode||b.oData.bDateTimeMode)if(f=b._formatTime(),b.oData.bIs12Hour&&a(b.element).find(".meridiem .dtpicker-compValue").val(b.oData.sCurrentMeridiem),a(b.element).find(".hour .dtpicker-compValue").val(f.hour),a(b.element).find(".minutes .dtpicker-compValue").val(f.mm),a(b.element).find(".seconds .dtpicker-compValue").val(f.ss),b.settings.formatHumanDate)d=a.extend(d,f);else{var o=b.oData.bTimeMode&&(b.oData.bArrMatchFormat[0]||b.oData.bArrMatchFormat[1]),p=b.oData.bDateTimeMode&&(b.oData.bArrMatchFormat[0]||b.oData.bArrMatchFormat[1]||b.oData.bArrMatchFormat[2]||b.oData.bArrMatchFormat[3]||b.oData.bArrMatchFormat[4]||b.oData.bArrMatchFormat[5]||b.oData.bArrMatchFormat[6]||b.oData.bArrMatchFormat[7]);h=o||p?f.hour+b.settings.timeSeparator+f.mm+b.settings.timeSeparator+f.ss:f.hour+b.settings.timeSeparator+f.mm,b.oData.bIs12Hour&&(h+=b.settings.timeMeridiemSeparator+b.oData.sCurrentMeridiem)}b.settings.formatHumanDate?(b.oData.bDateTimeMode?c=b.oData.sDateFormat:b.oData.bDateMode?c=b.oData.sTimeFormat:b.oData.bTimeMode&&(c=b.oData.sDateTimeFormat),i=b.settings.formatHumanDate.call(b,d,b.settings.mode,c)):b.oData.bDateTimeMode?i=g+b.settings.dateTimeSeparator+h:b.oData.bDateMode?i=g:b.oData.bTimeMode&&(i=h),a(b.element).find(".dtpicker-value").html(i),b._setButtons()},_formatDate:function(b){var c,d,e,f,g,h,i,j,k,l=this,m={};return a.cf._isValid(b)?m=a.extend({},b):(m.iCurrentDay=l.oData.iCurrentDay,m.iCurrentMonth=l.oData.iCurrentMonth,m.iCurrentYear=l.oData.iCurrentYear,m.iCurrentWeekday=l.oData.iCurrentWeekday),c=m.iCurrentDay,c=10>c?"0"+c:c,e=m.iCurrentMonth,f=m.iCurrentMonth+1,f=10>f?"0"+f:f,g=l.settings.shortMonthNames[e],h=l.settings.fullMonthNames[e],d=m.iCurrentYear,i=m.iCurrentWeekday,j=l.settings.shortDayNames[i],k=l.settings.fullDayNames[i],{dd:c,MM:f,monthShort:g,month:h,yyyy:d,dayShort:j,day:k}},_formatTime:function(b){var c,d,e,f,g,h,i,j=this,k={};return a.cf._isValid(b)?k=a.extend({},b):(k.iCurrentHour=j.oData.iCurrentHour,k.iCurrentMinutes=j.oData.iCurrentMinutes,k.iCurrentSeconds=j.oData.iCurrentSeconds,k.sCurrentMeridiem=j.oData.sCurrentMeridiem),c=k.iCurrentHour,d=10>c?"0"+c:c,g=d,e=k.iCurrentHour,e>12&&(e-=12),0===g&&(e=12),f=10>e?"0"+e:e,j.oData.bIs12Hour&&(g=f),h=k.iCurrentMinutes,h=10>h?"0"+h:h,i=k.iCurrentSeconds,i=10>i?"0"+i:i,{H:c,HH:d,h:e,hh:f,hour:g,m:k.iCurrentMinutes,mm:h,s:k.iCurrentSeconds,ss:i,ME:k.sCurrentMeridiem}},_setButtons:function(){var b=this;a(b.element).find(".dtpicker-compButton").removeClass("dtpicker-compButtonDisable").addClass("dtpicker-compButtonEnable");var c;if(null!==b.oData.dMaxValue&&(b.oData.bTimeMode?((b.oData.iCurrentHour+1>b.oData.dMaxValue.getHours()||b.oData.iCurrentHour+1===b.oData.dMaxValue.getHours()&&b.oData.iCurrentMinutes>b.oData.dMaxValue.getMinutes())&&a(b.element).find(".hour .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"),b.oData.iCurrentHour>=b.oData.dMaxValue.getHours()&&b.oData.iCurrentMinutes+1>b.oData.dMaxValue.getMinutes()&&a(b.element).find(".minutes .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable")):(c=new Date(b.oData.iCurrentYear,b.oData.iCurrentMonth,b.oData.iCurrentDay+1,b.oData.iCurrentHour,b.oData.iCurrentMinutes,b.oData.iCurrentSeconds,0),c.getTime()>b.oData.dMaxValue.getTime()&&a(b.element).find(".day .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"),c=new Date(b.oData.iCurrentYear,b.oData.iCurrentMonth+1,b.oData.iCurrentDay,b.oData.iCurrentHour,b.oData.iCurrentMinutes,b.oData.iCurrentSeconds,0),c.getTime()>b.oData.dMaxValue.getTime()&&a(b.element).find(".month .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"),c=new Date(b.oData.iCurrentYear+1,b.oData.iCurrentMonth,b.oData.iCurrentDay,b.oData.iCurrentHour,b.oData.iCurrentMinutes,b.oData.iCurrentSeconds,0),c.getTime()>b.oData.dMaxValue.getTime()&&a(b.element).find(".year .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"),c=new Date(b.oData.iCurrentYear,b.oData.iCurrentMonth,b.oData.iCurrentDay,b.oData.iCurrentHour+1,b.oData.iCurrentMinutes,b.oData.iCurrentSeconds,0),c.getTime()>b.oData.dMaxValue.getTime()&&a(b.element).find(".hour .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"),c=new Date(b.oData.iCurrentYear,b.oData.iCurrentMonth,b.oData.iCurrentDay,b.oData.iCurrentHour,b.oData.iCurrentMinutes+1,b.oData.iCurrentSeconds,0),c.getTime()>b.oData.dMaxValue.getTime()&&a(b.element).find(".minutes .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"),c=new Date(b.oData.iCurrentYear,b.oData.iCurrentMonth,b.oData.iCurrentDay,b.oData.iCurrentHour,b.oData.iCurrentMinutes,b.oData.iCurrentSeconds+1,0),c.getTime()>b.oData.dMaxValue.getTime()&&a(b.element).find(".seconds .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"))),null!==b.oData.dMinValue&&(b.oData.bTimeMode?((b.oData.iCurrentHour-1<b.oData.dMinValue.getHours()||b.oData.iCurrentHour-1===b.oData.dMinValue.getHours()&&b.oData.iCurrentMinutes<b.oData.dMinValue.getMinutes())&&a(b.element).find(".hour .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"),b.oData.iCurrentHour<=b.oData.dMinValue.getHours()&&b.oData.iCurrentMinutes-1<b.oData.dMinValue.getMinutes()&&a(b.element).find(".minutes .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable")):(c=new Date(b.oData.iCurrentYear,b.oData.iCurrentMonth,b.oData.iCurrentDay-1,b.oData.iCurrentHour,b.oData.iCurrentMinutes,b.oData.iCurrentSeconds,0),c.getTime()<b.oData.dMinValue.getTime()&&a(b.element).find(".day .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"),c=new Date(b.oData.iCurrentYear,b.oData.iCurrentMonth-1,b.oData.iCurrentDay,b.oData.iCurrentHour,b.oData.iCurrentMinutes,b.oData.iCurrentSeconds,0),c.getTime()<b.oData.dMinValue.getTime()&&a(b.element).find(".month .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"),c=new Date(b.oData.iCurrentYear-1,b.oData.iCurrentMonth,b.oData.iCurrentDay,b.oData.iCurrentHour,b.oData.iCurrentMinutes,b.oData.iCurrentSeconds,0),c.getTime()<b.oData.dMinValue.getTime()&&a(b.element).find(".year .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"),c=new Date(b.oData.iCurrentYear,b.oData.iCurrentMonth,b.oData.iCurrentDay,b.oData.iCurrentHour-1,b.oData.iCurrentMinutes,b.oData.iCurrentSeconds,0),c.getTime()<b.oData.dMinValue.getTime()&&a(b.element).find(".hour .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"),c=new Date(b.oData.iCurrentYear,b.oData.iCurrentMonth,b.oData.iCurrentDay,b.oData.iCurrentHour,b.oData.iCurrentMinutes-1,b.oData.iCurrentSeconds,0),c.getTime()<b.oData.dMinValue.getTime()&&a(b.element).find(".minutes .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"),c=new Date(b.oData.iCurrentYear,b.oData.iCurrentMonth,b.oData.iCurrentDay,b.oData.iCurrentHour,b.oData.iCurrentMinutes,b.oData.iCurrentSeconds-1,0),c.getTime()<b.oData.dMinValue.getTime()&&a(b.element).find(".seconds .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"))),b.oData.bIs12Hour){var d,e;(null!==b.oData.dMaxValue||null!==b.oData.dMinValue)&&(d=b.oData.iCurrentHour,a.cf._compare(b.oData.sCurrentMeridiem,"AM")?d+=12:a.cf._compare(b.oData.sCurrentMeridiem,"PM")&&(d-=12),c=new Date(b.oData.iCurrentYear,b.oData.iCurrentMonth,b.oData.iCurrentDay,d,b.oData.iCurrentMinutes,b.oData.iCurrentSeconds,0),null!==b.oData.dMaxValue&&(b.oData.bTimeMode?(e=b.oData.iCurrentMinutes,(d>b.oData.dMaxValue.getHours()||d===b.oData.dMaxValue.getHours()&&e>b.oData.dMaxValue.getMinutes())&&a(b.element).find(".meridiem .dtpicker-compButton").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable")):c.getTime()>b.oData.dMaxValue.getTime()&&a(b.element).find(".meridiem .dtpicker-compButton").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable")),null!==b.oData.dMinValue&&(b.oData.bTimeMode?(e=b.oData.iCurrentMinutes,(d<b.oData.dMinValue.getHours()||d===b.oData.dMinValue.getHours()&&e<b.oData.dMinValue.getMinutes())&&a(b.element).find(".meridiem .dtpicker-compButton").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable")):c.getTime()<b.oData.dMinValue.getTime()&&a(b.element).find(".meridiem .dtpicker-compButton").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable")))}},setIsPopup:function(b){var c=this;if(c.settings.isPopup=b,"none"!==a(c.element).css("display")&&c._hidePicker(0),c.settings.isPopup)a(c.element).addClass("dtpicker-mobile"),a(c.element).css({position:"fixed",top:0,left:0,width:"100%",height:"100%"});else if(a(c.element).removeClass("dtpicker-mobile"),null!==c.oData.oInputElement){var d=a(c.oData.oInputElement).offset().top+a(c.oData.oInputElement).outerHeight(),e=a(c.oData.oInputElement).offset().left,f=a(c.oData.oInputElement).outerWidth();a(c.element).css({position:"absolute",top:d,left:e,width:f,height:"auto"})}},_compareDates:function(a,b){a=new Date(a.getDate(),a.getMonth(),a.getFullYear(),0,0,0,0),a=new Date(a.getDate(),a.getMonth(),a.getFullYear(),0,0,0,0);var c=(a.getTime()-b.getTime())/864e5;return 0===c?c:c/Math.abs(c)},_compareTime:function(a,b){var c=0;return a.getHours()===b.getHours()&&a.getMinutes()===b.getMinutes()?c=1:a.getHours()<b.getHours()?c=2:a.getHours()>b.getHours()?c=3:a.getHours()===b.getHours()&&(a.getMinutes()<b.getMinutes()?c=2:a.getMinutes()>b.getMinutes()&&(c=3)),c},_compareDateTime:function(a,b){var c=(a.getTime()-b.getTime())/6e4;return 0===c?c:c/Math.abs(c)},_determineMeridiemFromHourAndMinutes:function(a,b){return a>12?"PM":12===a&&b>=0?"PM":"AM"},setLanguage:function(b){var c=this;return c.settings=a.extend({},a.DateTimePicker.defaults,c.options,a.DateTimePicker.i18n[b]),c._setDateFormatArray(),c._setTimeFormatArray(),c._setDateTimeFormatArray(),c}}});
/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

var dateFormat = function () {
  var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
		timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
		timezoneClip = /[^-+\dA-Z]/g,
		pad = function (val, len) {
			val = String(val);
			len = len || 2;
			while (val.length < len) val = "0" + val;
			return val;
		};

	// Regexes and supporting functions are cached through closure
	return function (date, mask, utc) {
		var dF = dateFormat;

		// You can't provide utc if you skip other args (use the "UTC:" mask prefix)
		if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
			mask = date;
			date = undefined;
		}

		// Passing date through Date applies Date.parse, if necessary
		date = date ? new Date(date) : new Date;
		if (isNaN(date)) throw SyntaxError("invalid date");

		mask = String(dF.masks[mask] || mask || dF.masks["default"]);

		// Allow setting the utc argument via the mask
		if (mask.slice(0, 4) == "UTC:") {
			mask = mask.slice(4);
			utc = true;
		}

		var	_ = utc ? "getUTC" : "get",
			d = date[_ + "Date"](),
			D = date[_ + "Day"](),
			m = date[_ + "Month"](),
			y = date[_ + "FullYear"](),
			H = date[_ + "Hours"](),
			M = date[_ + "Minutes"](),
			s = date[_ + "Seconds"](),
			L = date[_ + "Milliseconds"](),
			o = utc ? 0 : date.getTimezoneOffset(),
			flags = {
				d:    d,
				dd:   pad(d),
				ddd:  dF.i18n.dayNames[D],
				dddd: dF.i18n.dayNames[D + 7],
				m:    m + 1,
				mm:   pad(m + 1),
				mmm:  dF.i18n.monthNames[m],
				mmmm: dF.i18n.monthNames[m + 12],
				yy:   String(y).slice(2),
				yyyy: y,
				h:    H % 12 || 12,
				hh:   pad(H % 12 || 12),
				H:    H,
				HH:   pad(H),
				M:    M,
				MM:   pad(M),
				s:    s,
				ss:   pad(s),
				l:    pad(L, 3),
				L:    pad(L > 99 ? Math.round(L / 10) : L),
				t:    H < 12 ? "a"  : "p",
				tt:   H < 12 ? "am" : "pm",
				T:    H < 12 ? "A"  : "P",
				TT:   H < 12 ? "AM" : "PM",
				Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
				o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
				S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
			};

		return mask.replace(token, function ($0) {
			return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
		});
	};
}();

// Some common format strings
dateFormat.masks = {
	"default":      "ddd mmm dd yyyy HH:MM:ss",
	shortDate:      "m/d/yy",
	mediumDate:     "mmm d, yyyy",
	longDate:       "mmmm d, yyyy",
	fullDate:       "dddd, mmmm d, yyyy",
	shortTime:      "h:MM TT",
	mediumTime:     "h:MM:ss TT",
	longTime:       "h:MM:ss TT Z",
	isoDate:        "yyyy-mm-dd",
	isoTime:        "HH:MM:ss",
	isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
	isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
	dayNames: [
		"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
		"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
	],
	monthNames: [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
		"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
	]
};

// For convenience...
Date.prototype.format = function (mask, utc) {
	return dateFormat(this, mask, utc);
};


/*!
 * Select2 4.0.1
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function (jQuery) {
  // This is needed so we can catch the AMD loader configuration and use it
  // The inner file should be wrapped (by `banner.start.js`) in a function that
  // returns the AMD loader references.
  var S2 =
(function () {
  // Restore the Select2 AMD loader so it can be used
  // Needed mostly in the language files, where the loader is not inserted
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
    var S2 = jQuery.fn.select2.amd;
  }
var S2;(function () { if (!S2 || !S2.requirejs) {
if (!S2) { S2 = {}; } else { require = S2; }
/**
 * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*jslint sloppy: true */
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name && name.charAt(0) === ".") {
            //If have a base name, try to normalize against it,
            //otherwise, assume it is a top-level require that will
            //be relative to baseUrl in the end.
            if (baseName) {
                name = name.split('/');
                lastIndex = name.length - 1;

                // Node .js allowance:
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                }

                //Lop off the last part of baseParts, so that . matches the
                //"directory" and not name of the baseName's module. For instance,
                //baseName of "one/two/three", maps to "one/two/three.js", but we
                //want the directory, "one/two" for this normalization.
                name = baseParts.slice(0, baseParts.length - 1).concat(name);

                //start trimDots
                for (i = 0; i < name.length; i += 1) {
                    part = name[i];
                    if (part === ".") {
                        name.splice(i, 1);
                        i -= 1;
                    } else if (part === "..") {
                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {
                            //End of the line. Keep at least one non-dot
                            //path segment at the front so it can be mapped
                            //correctly to disk. Otherwise, there is likely
                            //no path mapping for a path starting with '..'.
                            //This can still fail, but catches the most reasonable
                            //uses of ..
                            break;
                        } else if (i > 0) {
                            name.splice(i - 1, 2);
                            i -= 2;
                        }
                    }
                }
                //end trimDots

                name = name.join("/");
            } else if (name.indexOf('./') === 0) {
                // No baseName, so this is ID is resolved relative
                // to baseUrl, pull off the leading dot.
                name = name.substring(2);
            }
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0);

            //If first arg is not require('string'), and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
            }
            return req.apply(undef, args.concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relName) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relName));
            } else {
                name = normalize(name, relName);
            }
        } else {
            name = normalize(name, relName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relName);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                           hasProp(waiting, depName) ||
                           hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, callback).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {
        if (typeof name !== 'string') {
            throw new Error('See almond README: incorrect module build, no module name');
        }

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());

S2.requirejs = requirejs;S2.require = require;S2.define = define;
}
}());
S2.define("almond", function(){});

/* global jQuery:false, $:false */
S2.define('jquery',[],function () {
  var _$ = jQuery || $;

  if (_$ == null && console && console.error) {
    console.error(
      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
      'found. Make sure that you are including jQuery before Select2 on your ' +
      'web page.'
    );
  }

  return _$;
});

S2.define('select2/utils',[
  'jquery'
], function ($) {
  var Utils = {};

  Utils.Extend = function (ChildClass, SuperClass) {
    var __hasProp = {}.hasOwnProperty;

    function BaseConstructor () {
      this.constructor = ChildClass;
    }

    for (var key in SuperClass) {
      if (__hasProp.call(SuperClass, key)) {
        ChildClass[key] = SuperClass[key];
      }
    }

    BaseConstructor.prototype = SuperClass.prototype;
    ChildClass.prototype = new BaseConstructor();
    ChildClass.__super__ = SuperClass.prototype;

    return ChildClass;
  };

  function getMethods (theClass) {
    var proto = theClass.prototype;

    var methods = [];

    for (var methodName in proto) {
      var m = proto[methodName];

      if (typeof m !== 'function') {
        continue;
      }

      if (methodName === 'constructor') {
        continue;
      }

      methods.push(methodName);
    }

    return methods;
  }

  Utils.Decorate = function (SuperClass, DecoratorClass) {
    var decoratedMethods = getMethods(DecoratorClass);
    var superMethods = getMethods(SuperClass);

    function DecoratedClass () {
      var unshift = Array.prototype.unshift;

      var argCount = DecoratorClass.prototype.constructor.length;

      var calledConstructor = SuperClass.prototype.constructor;

      if (argCount > 0) {
        unshift.call(arguments, SuperClass.prototype.constructor);

        calledConstructor = DecoratorClass.prototype.constructor;
      }

      calledConstructor.apply(this, arguments);
    }

    DecoratorClass.displayName = SuperClass.displayName;

    function ctr () {
      this.constructor = DecoratedClass;
    }

    DecoratedClass.prototype = new ctr();

    for (var m = 0; m < superMethods.length; m++) {
        var superMethod = superMethods[m];

        DecoratedClass.prototype[superMethod] =
          SuperClass.prototype[superMethod];
    }

    var calledMethod = function (methodName) {
      // Stub out the original method if it's not decorating an actual method
      var originalMethod = function () {};

      if (methodName in DecoratedClass.prototype) {
        originalMethod = DecoratedClass.prototype[methodName];
      }

      var decoratedMethod = DecoratorClass.prototype[methodName];

      return function () {
        var unshift = Array.prototype.unshift;

        unshift.call(arguments, originalMethod);

        return decoratedMethod.apply(this, arguments);
      };
    };

    for (var d = 0; d < decoratedMethods.length; d++) {
      var decoratedMethod = decoratedMethods[d];

      DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
    }

    return DecoratedClass;
  };

  var Observable = function () {
    this.listeners = {};
  };

  Observable.prototype.on = function (event, callback) {
    this.listeners = this.listeners || {};

    if (event in this.listeners) {
      this.listeners[event].push(callback);
    } else {
      this.listeners[event] = [callback];
    }
  };

  Observable.prototype.trigger = function (event) {
    var slice = Array.prototype.slice;

    this.listeners = this.listeners || {};

    if (event in this.listeners) {
      this.invoke(this.listeners[event], slice.call(arguments, 1));
    }

    if ('*' in this.listeners) {
      this.invoke(this.listeners['*'], arguments);
    }
  };

  Observable.prototype.invoke = function (listeners, params) {
    for (var i = 0, len = listeners.length; i < len; i++) {
      listeners[i].apply(this, params);
    }
  };

  Utils.Observable = Observable;

  Utils.generateChars = function (length) {
    var chars = '';

    for (var i = 0; i < length; i++) {
      var randomChar = Math.floor(Math.random() * 36);
      chars += randomChar.toString(36);
    }

    return chars;
  };

  Utils.bind = function (func, context) {
    return function () {
      func.apply(context, arguments);
    };
  };

  Utils._convertData = function (data) {
    for (var originalKey in data) {
      var keys = originalKey.split('-');

      var dataLevel = data;

      if (keys.length === 1) {
        continue;
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k];

        // Lowercase the first letter
        // By default, dash-separated becomes camelCase
        key = key.substring(0, 1).toLowerCase() + key.substring(1);

        if (!(key in dataLevel)) {
          dataLevel[key] = {};
        }

        if (k == keys.length - 1) {
          dataLevel[key] = data[originalKey];
        }

        dataLevel = dataLevel[key];
      }

      delete data[originalKey];
    }

    return data;
  };

  Utils.hasScroll = function (index, el) {
    // Adapted from the function created by @ShadowScripter
    // and adapted by @BillBarry on the Stack Exchange Code Review website.
    // The original code can be found at
    // http://codereview.stackexchange.com/q/13338
    // and was designed to be used with the Sizzle selector engine.

    var $el = $(el);
    var overflowX = el.style.overflowX;
    var overflowY = el.style.overflowY;

    //Check both x and y declarations
    if (overflowX === overflowY &&
        (overflowY === 'hidden' || overflowY === 'visible')) {
      return false;
    }

    if (overflowX === 'scroll' || overflowY === 'scroll') {
      return true;
    }

    return ($el.innerHeight() < el.scrollHeight ||
      $el.innerWidth() < el.scrollWidth);
  };

  Utils.escapeMarkup = function (markup) {
    var replaceMap = {
      '\\': '&#92;',
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#39;',
      '/': '&#47;'
    };

    // Do not try to escape the markup if it's not a string
    if (typeof markup !== 'string') {
      return markup;
    }

    return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
      return replaceMap[match];
    });
  };

  // Append an array of jQuery nodes to a given element.
  Utils.appendMany = function ($element, $nodes) {
    // jQuery 1.7.x does not support $.fn.append() with an array
    // Fall back to a jQuery object collection using $.fn.add()
    if ($.fn.jquery.substr(0, 3) === '1.7') {
      var $jqNodes = $();

      $.map($nodes, function (node) {
        $jqNodes = $jqNodes.add(node);
      });

      $nodes = $jqNodes;
    }

    $element.append($nodes);
  };

  return Utils;
});

S2.define('select2/results',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Results ($element, options, dataAdapter) {
    this.$element = $element;
    this.data = dataAdapter;
    this.options = options;

    Results.__super__.constructor.call(this);
  }

  Utils.Extend(Results, Utils.Observable);

  Results.prototype.render = function () {
    var $results = $(
      '<ul class="select2-results__options" role="tree"></ul>'
    );

    if (this.options.get('multiple')) {
      $results.attr('aria-multiselectable', 'true');
    }

    this.$results = $results;

    return $results;
  };

  Results.prototype.clear = function () {
    this.$results.empty();
  };

  Results.prototype.displayMessage = function (params) {
    var escapeMarkup = this.options.get('escapeMarkup');

    this.clear();
    this.hideLoading();

    var $message = $(
      '<li role="treeitem" aria-live="assertive"' +
      ' class="select2-results__option"></li>'
    );

    var message = this.options.get('translations').get(params.message);

    $message.append(
      escapeMarkup(
        message(params.args)
      )
    );

    $message[0].className += ' select2-results__message';

    this.$results.append($message);
  };

  Results.prototype.hideMessages = function () {
    this.$results.find('.select2-results__message').remove();
  };

  Results.prototype.append = function (data) {
    this.hideLoading();

    var $options = [];

    if (data.results == null || data.results.length === 0) {
      if (this.$results.children().length === 0) {
        this.trigger('results:message', {
          message: 'noResults'
        });
      }

      return;
    }

    data.results = this.sort(data.results);

    for (var d = 0; d < data.results.length; d++) {
      var item = data.results[d];

      var $option = this.option(item);

      $options.push($option);
    }

    this.$results.append($options);
  };

  Results.prototype.position = function ($results, $dropdown) {
    var $resultsContainer = $dropdown.find('.select2-results');
    $resultsContainer.append($results);
  };

  Results.prototype.sort = function (data) {
    var sorter = this.options.get('sorter');

    return sorter(data);
  };

  Results.prototype.setClasses = function () {
    var self = this;

    this.data.current(function (selected) {
      var selectedIds = $.map(selected, function (s) {
        return s.id.toString();
      });

      var $options = self.$results
        .find('.select2-results__option[aria-selected]');

      $options.each(function () {
        var $option = $(this);

        var item = $.data(this, 'data');

        // id needs to be converted to a string when comparing
        var id = '' + item.id;

        if ((item.element != null && item.element.selected) ||
            (item.element == null && $.inArray(id, selectedIds) > -1)) {
          $option.attr('aria-selected', 'true');
        } else {
          $option.attr('aria-selected', 'false');
        }
      });

      var $selected = $options.filter('[aria-selected=true]');

      // Check if there are any selected options
      if ($selected.length > 0) {
        // If there are selected options, highlight the first
        $selected.first().trigger('mouseenter');
      } else {
        // If there are no selected options, highlight the first option
        // in the dropdown
        $options.first().trigger('mouseenter');
      }
    });
  };

  Results.prototype.showLoading = function (params) {
    this.hideLoading();

    var loadingMore = this.options.get('translations').get('searching');

    var loading = {
      disabled: true,
      loading: true,
      text: loadingMore(params)
    };
    var $loading = this.option(loading);
    $loading.className += ' loading-results';

    this.$results.prepend($loading);
  };

  Results.prototype.hideLoading = function () {
    this.$results.find('.loading-results').remove();
  };

  Results.prototype.option = function (data) {
    var option = document.createElement('li');
    option.className = 'select2-results__option';

    var attrs = {
      'role': 'treeitem',
      'aria-selected': 'false'
    };

    if (data.disabled) {
      delete attrs['aria-selected'];
      attrs['aria-disabled'] = 'true';
    }

    if (data.id == null) {
      delete attrs['aria-selected'];
    }

    if (data._resultId != null) {
      option.id = data._resultId;
    }

    if (data.title) {
      option.title = data.title;
    }

    if (data.children) {
      attrs.role = 'group';
      attrs['aria-label'] = data.text;
      delete attrs['aria-selected'];
    }

    for (var attr in attrs) {
      var val = attrs[attr];

      option.setAttribute(attr, val);
    }

    if (data.children) {
      var $option = $(option);

      var label = document.createElement('strong');
      label.className = 'select2-results__group';

      var $label = $(label);
      this.template(data, label);

      var $children = [];

      for (var c = 0; c < data.children.length; c++) {
        var child = data.children[c];

        var $child = this.option(child);

        $children.push($child);
      }

      var $childrenContainer = $('<ul></ul>', {
        'class': 'select2-results__options select2-results__options--nested'
      });

      $childrenContainer.append($children);

      $option.append(label);
      $option.append($childrenContainer);
    } else {
      this.template(data, option);
    }

    $.data(option, 'data', data);

    return option;
  };

  Results.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-results';

    this.$results.attr('id', id);

    container.on('results:all', function (params) {
      self.clear();
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
      }
    });

    container.on('results:append', function (params) {
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
      }
    });

    container.on('query', function (params) {
      self.hideMessages();
      self.showLoading(params);
    });

    container.on('select', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();
    });

    container.on('unselect', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expended="true"
      self.$results.attr('aria-expanded', 'true');
      self.$results.attr('aria-hidden', 'false');

      self.setClasses();
      self.ensureHighlightVisible();
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expended="false"
      self.$results.attr('aria-expanded', 'false');
      self.$results.attr('aria-hidden', 'true');
      self.$results.removeAttr('aria-activedescendant');
    });

    container.on('results:toggle', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      $highlighted.trigger('mouseup');
    });

    container.on('results:select', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      var data = $highlighted.data('data');

      if ($highlighted.attr('aria-selected') == 'true') {
        self.trigger('close', {});
      } else {
        self.trigger('select', {
          data: data
        });
      }
    });

    container.on('results:previous', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected]');

      var currentIndex = $options.index($highlighted);

      // If we are already at te top, don't move further
      if (currentIndex === 0) {
        return;
      }

      var nextIndex = currentIndex - 1;

      // If none are highlighted, highlight the first
      if ($highlighted.length === 0) {
        nextIndex = 0;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top;
      var nextTop = $next.offset().top;
      var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextTop - currentOffset < 0) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:next', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected]');

      var currentIndex = $options.index($highlighted);

      var nextIndex = currentIndex + 1;

      // If we are at the last option, stay there
      if (nextIndex >= $options.length) {
        return;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var nextBottom = $next.offset().top + $next.outerHeight(false);
      var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextBottom > currentOffset) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:focus', function (params) {
      params.element.addClass('select2-results__option--highlighted');
    });

    container.on('results:message', function (params) {
      self.displayMessage(params);
    });

    if ($.fn.mousewheel) {
      this.$results.on('mousewheel', function (e) {
        var top = self.$results.scrollTop();

        var bottom = (
          self.$results.get(0).scrollHeight -
          self.$results.scrollTop() +
          e.deltaY
        );

        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

        if (isAtTop) {
          self.$results.scrollTop(0);

          e.preventDefault();
          e.stopPropagation();
        } else if (isAtBottom) {
          self.$results.scrollTop(
            self.$results.get(0).scrollHeight - self.$results.height()
          );

          e.preventDefault();
          e.stopPropagation();
        }
      });
    }

    this.$results.on('mouseup', '.select2-results__option[aria-selected]',
      function (evt) {
      var $this = $(this);

      var data = $this.data('data');

      if ($this.attr('aria-selected') === 'true') {
        if (self.options.get('multiple')) {
          self.trigger('unselect', {
            originalEvent: evt,
            data: data
          });
        } else {
          self.trigger('close', {});
        }

        return;
      }

      self.trigger('select', {
        originalEvent: evt,
        data: data
      });
    });

    this.$results.on('mouseenter', '.select2-results__option[aria-selected]',
      function (evt) {
      var data = $(this).data('data');

      self.getHighlightedResults()
          .removeClass('select2-results__option--highlighted');

      self.trigger('results:focus', {
        data: data,
        element: $(this)
      });
    });
  };

  Results.prototype.getHighlightedResults = function () {
    var $highlighted = this.$results
    .find('.select2-results__option--highlighted');

    return $highlighted;
  };

  Results.prototype.destroy = function () {
    this.$results.remove();
  };

  Results.prototype.ensureHighlightVisible = function () {
    var $highlighted = this.getHighlightedResults();

    if ($highlighted.length === 0) {
      return;
    }

    var $options = this.$results.find('[aria-selected]');

    var currentIndex = $options.index($highlighted);

    var currentOffset = this.$results.offset().top;
    var nextTop = $highlighted.offset().top;
    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

    var offsetDelta = nextTop - currentOffset;
    nextOffset -= $highlighted.outerHeight(false) * 2;

    if (currentIndex <= 2) {
      this.$results.scrollTop(0);
    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
      this.$results.scrollTop(nextOffset);
    }
  };

  Results.prototype.template = function (result, container) {
    var template = this.options.get('templateResult');
    var escapeMarkup = this.options.get('escapeMarkup');

    var content = template(result, container);

    if (content == null) {
      container.style.display = 'none';
    } else if (typeof content === 'string') {
      container.innerHTML = escapeMarkup(content);
    } else {
      $(container).append(content);
    }
  };

  return Results;
});

S2.define('select2/keys',[

], function () {
  var KEYS = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46
  };

  return KEYS;
});

S2.define('select2/selection/base',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function BaseSelection ($element, options) {
    this.$element = $element;
    this.options = options;

    BaseSelection.__super__.constructor.call(this);
  }

  Utils.Extend(BaseSelection, Utils.Observable);

  BaseSelection.prototype.render = function () {
    var $selection = $(
      '<span class="select2-selection" role="combobox" ' +
      ' aria-haspopup="true" aria-expanded="false">' +
      '</span>'
    );

    this._tabindex = 0;

    if (this.$element.data('old-tabindex') != null) {
      this._tabindex = this.$element.data('old-tabindex');
    } else if (this.$element.attr('tabindex') != null) {
      this._tabindex = this.$element.attr('tabindex');
    }

    $selection.attr('title', this.$element.attr('title'));
    $selection.attr('tabindex', this._tabindex);

    this.$selection = $selection;

    return $selection;
  };

  BaseSelection.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-container';
    var resultsId = container.id + '-results';

    this.container = container;

    this.$selection.on('focus', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('blur', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      if (evt.which === KEYS.SPACE) {
        evt.preventDefault();
      }
    });

    container.on('results:focus', function (params) {
      self.$selection.attr('aria-activedescendant', params.data._resultId);
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expanded="true"
      self.$selection.attr('aria-expanded', 'true');
      self.$selection.attr('aria-owns', resultsId);

      self._attachCloseHandler(container);
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expanded="false"
      self.$selection.attr('aria-expanded', 'false');
      self.$selection.removeAttr('aria-activedescendant');
      self.$selection.removeAttr('aria-owns');

      self.$selection.focus();

      self._detachCloseHandler(container);
    });

    container.on('enable', function () {
      self.$selection.attr('tabindex', self._tabindex);
    });

    container.on('disable', function () {
      self.$selection.attr('tabindex', '-1');
    });
  };

  BaseSelection.prototype._handleBlur = function (evt) {
    var self = this;

    // This needs to be delayed as the active element is the body when the tab
    // key is pressed, possibly along with others.
    window.setTimeout(function () {
      // Don't trigger `blur` if the focus is still in the selection
      if (
        (document.activeElement == self.$selection[0]) ||
        ($.contains(self.$selection[0], document.activeElement))
      ) {
        return;
      }

      self.trigger('blur', evt);
    }, 1);
  };

  BaseSelection.prototype._attachCloseHandler = function (container) {
    var self = this;

    $(document.body).on('mousedown.select2.' + container.id, function (e) {
      var $target = $(e.target);

      var $select = $target.closest('.select2');

      var $all = $('.select2.select2-container--open');

      $all.each(function () {
        var $this = $(this);

        if (this == $select[0]) {
          return;
        }

        var $element = $this.data('element');

        $element.select2('close');
      });
    });
  };

  BaseSelection.prototype._detachCloseHandler = function (container) {
    $(document.body).off('mousedown.select2.' + container.id);
  };

  BaseSelection.prototype.position = function ($selection, $container) {
    var $selectionContainer = $container.find('.selection');
    $selectionContainer.append($selection);
  };

  BaseSelection.prototype.destroy = function () {
    this._detachCloseHandler(this.container);
  };

  BaseSelection.prototype.update = function (data) {
    throw new Error('The `update` method must be defined in child classes.');
  };

  return BaseSelection;
});

S2.define('select2/selection/single',[
  'jquery',
  './base',
  '../utils',
  '../keys'
], function ($, BaseSelection, Utils, KEYS) {
  function SingleSelection () {
    SingleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(SingleSelection, BaseSelection);

  SingleSelection.prototype.render = function () {
    var $selection = SingleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--single');

    $selection.html(
      '<span class="select2-selection__rendered"></span>' +
      '<span class="select2-selection__arrow" role="presentation">' +
        '<b role="presentation"></b>' +
      '</span>'
    );

    return $selection;
  };

  SingleSelection.prototype.bind = function (container, $container) {
    var self = this;

    SingleSelection.__super__.bind.apply(this, arguments);

    var id = container.id + '-container';

    this.$selection.find('.select2-selection__rendered').attr('id', id);
    this.$selection.attr('aria-labelledby', id);

    this.$selection.on('mousedown', function (evt) {
      // Only respond to left clicks
      if (evt.which !== 1) {
        return;
      }

      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on('focus', function (evt) {
      // User focuses on the container
    });

    this.$selection.on('blur', function (evt) {
      // User exits the container
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });
  };

  SingleSelection.prototype.clear = function () {
    this.$selection.find('.select2-selection__rendered').empty();
  };

  SingleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  SingleSelection.prototype.selectionContainer = function () {
    return $('<span></span>');
  };

  SingleSelection.prototype.update = function (data) {
    if (data.length === 0) {
      this.clear();
      return;
    }

    var selection = data[0];

    var $rendered = this.$selection.find('.select2-selection__rendered');
    var formatted = this.display(selection, $rendered);

    $rendered.empty().append(formatted);
    $rendered.prop('title', selection.title || selection.text);
  };

  return SingleSelection;
});

S2.define('select2/selection/multiple',[
  'jquery',
  './base',
  '../utils'
], function ($, BaseSelection, Utils) {
  function MultipleSelection ($element, options) {
    MultipleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(MultipleSelection, BaseSelection);

  MultipleSelection.prototype.render = function () {
    var $selection = MultipleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--multiple');

    $selection.html(
      '<ul class="select2-selection__rendered"></ul>'
    );

    return $selection;
  };

  MultipleSelection.prototype.bind = function (container, $container) {
    var self = this;

    MultipleSelection.__super__.bind.apply(this, arguments);

    this.$selection.on('click', function (evt) {
      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on(
      'click',
      '.select2-selection__choice__remove',
      function (evt) {
        // Ignore the event if it is disabled
        if (self.options.get('disabled')) {
          return;
        }

        var $remove = $(this);
        var $selection = $remove.parent();

        var data = $selection.data('data');

        self.trigger('unselect', {
          originalEvent: evt,
          data: data
        });
      }
    );
  };

  MultipleSelection.prototype.clear = function () {
    this.$selection.find('.select2-selection__rendered').empty();
  };

  MultipleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  MultipleSelection.prototype.selectionContainer = function () {
    var $container = $(
      '<li class="select2-selection__choice">' +
        '<span class="select2-selection__choice__remove" role="presentation">' +
          '&times;' +
        '</span>' +
      '</li>'
    );

    return $container;
  };

  MultipleSelection.prototype.update = function (data) {
    this.clear();

    if (data.length === 0) {
      return;
    }

    var $selections = [];

    for (var d = 0; d < data.length; d++) {
      var selection = data[d];

      var $selection = this.selectionContainer();
      var formatted = this.display(selection, $selection);

      $selection.append(formatted);
      $selection.prop('title', selection.title || selection.text);

      $selection.data('data', selection);

      $selections.push($selection);
    }

    var $rendered = this.$selection.find('.select2-selection__rendered');

    Utils.appendMany($rendered, $selections);
  };

  return MultipleSelection;
});

S2.define('select2/selection/placeholder',[
  '../utils'
], function (Utils) {
  function Placeholder (decorated, $element, options) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options);
  }

  Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
    var $placeholder = this.selectionContainer();

    $placeholder.html(this.display(placeholder));
    $placeholder.addClass('select2-selection__placeholder')
                .removeClass('select2-selection__choice');

    return $placeholder;
  };

  Placeholder.prototype.update = function (decorated, data) {
    var singlePlaceholder = (
      data.length == 1 && data[0].id != this.placeholder.id
    );
    var multipleSelections = data.length > 1;

    if (multipleSelections || singlePlaceholder) {
      return decorated.call(this, data);
    }

    this.clear();

    var $placeholder = this.createPlaceholder(this.placeholder);

    this.$selection.find('.select2-selection__rendered').append($placeholder);
  };

  return Placeholder;
});

S2.define('select2/selection/allowClear',[
  'jquery',
  '../keys'
], function ($, KEYS) {
  function AllowClear () { }

  AllowClear.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    if (this.placeholder == null) {
      if (this.options.get('debug') && window.console && console.error) {
        console.error(
          'Select2: The `allowClear` option should be used in combination ' +
          'with the `placeholder` option.'
        );
      }
    }

    this.$selection.on('mousedown', '.select2-selection__clear',
      function (evt) {
        self._handleClear(evt);
    });

    container.on('keypress', function (evt) {
      self._handleKeyboardClear(evt, container);
    });
  };

  AllowClear.prototype._handleClear = function (_, evt) {
    // Ignore the event if it is disabled
    if (this.options.get('disabled')) {
      return;
    }

    var $clear = this.$selection.find('.select2-selection__clear');

    // Ignore the event if nothing has been selected
    if ($clear.length === 0) {
      return;
    }

    evt.stopPropagation();

    var data = $clear.data('data');

    for (var d = 0; d < data.length; d++) {
      var unselectData = {
        data: data[d]
      };

      // Trigger the `unselect` event, so people can prevent it from being
      // cleared.
      this.trigger('unselect', unselectData);

      // If the event was prevented, don't clear it out.
      if (unselectData.prevented) {
        return;
      }
    }

    this.$element.val(this.placeholder.id).trigger('change');

    this.trigger('toggle', {});
  };

  AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
    if (container.isOpen()) {
      return;
    }

    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
      this._handleClear(evt);
    }
  };

  AllowClear.prototype.update = function (decorated, data) {
    decorated.call(this, data);

    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
        data.length === 0) {
      return;
    }

    var $remove = $(
      '<span class="select2-selection__clear">' +
        '&times;' +
      '</span>'
    );
    $remove.data('data', data);

    this.$selection.find('.select2-selection__rendered').prepend($remove);
  };

  return AllowClear;
});

S2.define('select2/selection/search',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function Search (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  Search.prototype.render = function (decorated) {
    var $search = $(
      '<li class="select2-search select2-search--inline">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +
        ' spellcheck="false" role="textbox" aria-autocomplete="list" />' +
      '</li>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    var $rendered = decorated.call(this);

    this._transferTabIndex();

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self.$search.trigger('focus');
    });

    container.on('close', function () {
      self.$search.val('');
      self.$search.removeAttr('aria-activedescendant');
      self.$search.trigger('focus');
    });

    container.on('enable', function () {
      self.$search.prop('disabled', false);

      self._transferTabIndex();
    });

    container.on('disable', function () {
      self.$search.prop('disabled', true);
    });

    container.on('focus', function (evt) {
      self.$search.trigger('focus');
    });

    container.on('results:focus', function (params) {
      self.$search.attr('aria-activedescendant', params.id);
    });

    this.$selection.on('focusin', '.select2-search--inline', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('focusout', '.select2-search--inline', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', '.select2-search--inline', function (evt) {
      evt.stopPropagation();

      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();

      var key = evt.which;

      if (key === KEYS.BACKSPACE && self.$search.val() === '') {
        var $previousChoice = self.$searchContainer
          .prev('.select2-selection__choice');

        if ($previousChoice.length > 0) {
          var item = $previousChoice.data('data');

          self.searchRemoveChoice(item);

          evt.preventDefault();
        }
      }
    });

    // Try to detect the IE version should the `documentMode` property that
    // is stored on the document. This is only implemented in IE and is
    // slightly cleaner than doing a user agent check.
    // This property is not available in Edge, but Edge also doesn't have
    // this bug.
    var msie = document.documentMode;
    var disableInputEvents = msie && msie <= 11;

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$selection.on(
      'input.searchcheck',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents) {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        // Unbind the duplicated `keyup` event
        self.$selection.off('keyup.search');
      }
    );

    this.$selection.on(
      'keyup.search input.search',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents && evt.type === 'input') {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        var key = evt.which;

        // We can freely ignore events from modifier keys
        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
          return;
        }

        // Tabbing will be handled during the `keydown` phase
        if (key == KEYS.TAB) {
          return;
        }

        self.handleSearch(evt);
      }
    );
  };

  /**
   * This method will transfer the tabindex attribute from the rendered
   * selection to the search box. This allows for the search box to be used as
   * the primary focus instead of the selection container.
   *
   * @private
   */
  Search.prototype._transferTabIndex = function (decorated) {
    this.$search.attr('tabindex', this.$selection.attr('tabindex'));
    this.$selection.attr('tabindex', '-1');
  };

  Search.prototype.createPlaceholder = function (decorated, placeholder) {
    this.$search.attr('placeholder', placeholder.text);
  };

  Search.prototype.update = function (decorated, data) {
    var searchHadFocus = this.$search[0] == document.activeElement;

    this.$search.attr('placeholder', '');

    decorated.call(this, data);

    this.$selection.find('.select2-selection__rendered')
                   .append(this.$searchContainer);

    this.resizeSearch();
    if (searchHadFocus) {
      this.$search.focus();
    }
  };

  Search.prototype.handleSearch = function () {
    this.resizeSearch();

    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.searchRemoveChoice = function (decorated, item) {
    this.trigger('unselect', {
      data: item
    });

    this.$search.val(item.text);
    this.handleSearch();
  };

  Search.prototype.resizeSearch = function () {
    this.$search.css('width', '25px');

    var width = '';

    if (this.$search.attr('placeholder') !== '') {
      width = this.$selection.find('.select2-selection__rendered').innerWidth();
    } else {
      var minimumWidth = this.$search.val().length + 1;

      width = (minimumWidth * 0.75) + 'em';
    }

    this.$search.css('width', width);
  };

  return Search;
});

S2.define('select2/selection/eventRelay',[
  'jquery'
], function ($) {
  function EventRelay () { }

  EventRelay.prototype.bind = function (decorated, container, $container) {
    var self = this;
    var relayEvents = [
      'open', 'opening',
      'close', 'closing',
      'select', 'selecting',
      'unselect', 'unselecting'
    ];

    var preventableEvents = ['opening', 'closing', 'selecting', 'unselecting'];

    decorated.call(this, container, $container);

    container.on('*', function (name, params) {
      // Ignore events that should not be relayed
      if ($.inArray(name, relayEvents) === -1) {
        return;
      }

      // The parameters should always be an object
      params = params || {};

      // Generate the jQuery event for the Select2 event
      var evt = $.Event('select2:' + name, {
        params: params
      });

      self.$element.trigger(evt);

      // Only handle preventable events if it was one
      if ($.inArray(name, preventableEvents) === -1) {
        return;
      }

      params.prevented = evt.isDefaultPrevented();
    });
  };

  return EventRelay;
});

S2.define('select2/translation',[
  'jquery',
  'require'
], function ($, require) {
  function Translation (dict) {
    this.dict = dict || {};
  }

  Translation.prototype.all = function () {
    return this.dict;
  };

  Translation.prototype.get = function (key) {
    return this.dict[key];
  };

  Translation.prototype.extend = function (translation) {
    this.dict = $.extend({}, translation.all(), this.dict);
  };

  // Static functions

  Translation._cache = {};

  Translation.loadPath = function (path) {
    if (!(path in Translation._cache)) {
      var translations = require(path);

      Translation._cache[path] = translations;
    }

    return new Translation(Translation._cache[path]);
  };

  return Translation;
});

S2.define('select2/diacritics',[

], function () {
  var diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03C9': '\u03C9',
    '\u03C2': '\u03C3'
  };

  return diacritics;
});

S2.define('select2/data/base',[
  '../utils'
], function (Utils) {
  function BaseAdapter ($element, options) {
    BaseAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(BaseAdapter, Utils.Observable);

  BaseAdapter.prototype.current = function (callback) {
    throw new Error('The `current` method must be defined in child classes.');
  };

  BaseAdapter.prototype.query = function (params, callback) {
    throw new Error('The `query` method must be defined in child classes.');
  };

  BaseAdapter.prototype.bind = function (container, $container) {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.destroy = function () {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.generateResultId = function (container, data) {
    var id = container.id + '-result-';

    id += Utils.generateChars(4);

    if (data.id != null) {
      id += '-' + data.id.toString();
    } else {
      id += '-' + Utils.generateChars(4);
    }
    return id;
  };

  return BaseAdapter;
});

S2.define('select2/data/select',[
  './base',
  '../utils',
  'jquery'
], function (BaseAdapter, Utils, $) {
  function SelectAdapter ($element, options) {
    this.$element = $element;
    this.options = options;

    SelectAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(SelectAdapter, BaseAdapter);

  SelectAdapter.prototype.current = function (callback) {
    var data = [];
    var self = this;

    this.$element.find(':selected').each(function () {
      var $option = $(this);

      var option = self.item($option);

      data.push(option);
    });

    callback(data);
  };

  SelectAdapter.prototype.select = function (data) {
    var self = this;

    data.selected = true;

    // If data.element is a DOM node, use it instead
    if ($(data.element).is('option')) {
      data.element.selected = true;

      this.$element.trigger('change');

      return;
    }

    if (this.$element.prop('multiple')) {
      this.current(function (currentData) {
        var val = [];

        data = [data];
        data.push.apply(data, currentData);

        for (var d = 0; d < data.length; d++) {
          var id = data[d].id;

          if ($.inArray(id, val) === -1) {
            val.push(id);
          }
        }

        self.$element.val(val);
        self.$element.trigger('change');
      });
    } else {
      var val = data.id;

      this.$element.val(val);
      this.$element.trigger('change');
    }
  };

  SelectAdapter.prototype.unselect = function (data) {
    var self = this;

    if (!this.$element.prop('multiple')) {
      return;
    }

    data.selected = false;

    if ($(data.element).is('option')) {
      data.element.selected = false;

      this.$element.trigger('change');

      return;
    }

    this.current(function (currentData) {
      var val = [];

      for (var d = 0; d < currentData.length; d++) {
        var id = currentData[d].id;

        if (id !== data.id && $.inArray(id, val) === -1) {
          val.push(id);
        }
      }

      self.$element.val(val);

      self.$element.trigger('change');
    });
  };

  SelectAdapter.prototype.bind = function (container, $container) {
    var self = this;

    this.container = container;

    container.on('select', function (params) {
      self.select(params.data);
    });

    container.on('unselect', function (params) {
      self.unselect(params.data);
    });
  };

  SelectAdapter.prototype.destroy = function () {
    // Remove anything added to child elements
    this.$element.find('*').each(function () {
      // Remove any custom data set by Select2
      $.removeData(this, 'data');
    });
  };

  SelectAdapter.prototype.query = function (params, callback) {
    var data = [];
    var self = this;

    var $options = this.$element.children();

    $options.each(function () {
      var $option = $(this);

      if (!$option.is('option') && !$option.is('optgroup')) {
        return;
      }

      var option = self.item($option);

      var matches = self.matches(params, option);

      if (matches !== null) {
        data.push(matches);
      }
    });

    callback({
      results: data
    });
  };

  SelectAdapter.prototype.addOptions = function ($options) {
    Utils.appendMany(this.$element, $options);
  };

  SelectAdapter.prototype.option = function (data) {
    var option;

    if (data.children) {
      option = document.createElement('optgroup');
      option.label = data.text;
    } else {
      option = document.createElement('option');

      if (option.textContent !== undefined) {
        option.textContent = data.text;
      } else {
        option.innerText = data.text;
      }
    }

    if (data.id) {
      option.value = data.id;
    }

    if (data.disabled) {
      option.disabled = true;
    }

    if (data.selected) {
      option.selected = true;
    }

    if (data.title) {
      option.title = data.title;
    }

    var $option = $(option);

    var normalizedData = this._normalizeItem(data);
    normalizedData.element = option;

    // Override the option's data with the combined data
    $.data(option, 'data', normalizedData);

    return $option;
  };

  SelectAdapter.prototype.item = function ($option) {
    var data = {};

    data = $.data($option[0], 'data');

    if (data != null) {
      return data;
    }

    if ($option.is('option')) {
      data = {
        id: $option.val(),
        text: $option.text(),
        disabled: $option.prop('disabled'),
        selected: $option.prop('selected'),
        title: $option.prop('title')
      };
    } else if ($option.is('optgroup')) {
      data = {
        text: $option.prop('label'),
        children: [],
        title: $option.prop('title')
      };

      var $children = $option.children('option');
      var children = [];

      for (var c = 0; c < $children.length; c++) {
        var $child = $($children[c]);

        var child = this.item($child);

        children.push(child);
      }

      data.children = children;
    }

    data = this._normalizeItem(data);
    data.element = $option[0];

    $.data($option[0], 'data', data);

    return data;
  };

  SelectAdapter.prototype._normalizeItem = function (item) {
    if (!$.isPlainObject(item)) {
      item = {
        id: item,
        text: item
      };
    }

    item = $.extend({}, {
      text: ''
    }, item);

    var defaults = {
      selected: false,
      disabled: false
    };

    if (item.id != null) {
      item.id = item.id.toString();
    }

    if (item.text != null) {
      item.text = item.text.toString();
    }

    if (item._resultId == null && item.id && this.container != null) {
      item._resultId = this.generateResultId(this.container, item);
    }

    return $.extend({}, defaults, item);
  };

  SelectAdapter.prototype.matches = function (params, data) {
    var matcher = this.options.get('matcher');

    return matcher(params, data);
  };

  return SelectAdapter;
});

S2.define('select2/data/array',[
  './select',
  '../utils',
  'jquery'
], function (SelectAdapter, Utils, $) {
  function ArrayAdapter ($element, options) {
    var data = options.get('data') || [];

    ArrayAdapter.__super__.constructor.call(this, $element, options);

    this.addOptions(this.convertToOptions(data));
  }

  Utils.Extend(ArrayAdapter, SelectAdapter);

  ArrayAdapter.prototype.select = function (data) {
    var $option = this.$element.find('option').filter(function (i, elm) {
      return elm.value == data.id.toString();
    });

    if ($option.length === 0) {
      $option = this.option(data);

      this.addOptions($option);
    }

    ArrayAdapter.__super__.select.call(this, data);
  };

  ArrayAdapter.prototype.convertToOptions = function (data) {
    var self = this;

    var $existing = this.$element.find('option');
    var existingIds = $existing.map(function () {
      return self.item($(this)).id;
    }).get();

    var $options = [];

    // Filter out all items except for the one passed in the argument
    function onlyItem (item) {
      return function () {
        return $(this).val() == item.id;
      };
    }

    for (var d = 0; d < data.length; d++) {
      var item = this._normalizeItem(data[d]);

      // Skip items which were pre-loaded, only merge the data
      if ($.inArray(item.id, existingIds) >= 0) {
        var $existingOption = $existing.filter(onlyItem(item));

        var existingData = this.item($existingOption);
        var newData = $.extend(true, {}, existingData, item);

        var $newOption = this.option(newData);

        $existingOption.replaceWith($newOption);

        continue;
      }

      var $option = this.option(item);

      if (item.children) {
        var $children = this.convertToOptions(item.children);

        Utils.appendMany($option, $children);
      }

      $options.push($option);
    }

    return $options;
  };

  return ArrayAdapter;
});

S2.define('select2/data/ajax',[
  './array',
  '../utils',
  'jquery'
], function (ArrayAdapter, Utils, $) {
  function AjaxAdapter ($element, options) {
    this.ajaxOptions = this._applyDefaults(options.get('ajax'));

    if (this.ajaxOptions.processResults != null) {
      this.processResults = this.ajaxOptions.processResults;
    }

    AjaxAdapter.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(AjaxAdapter, ArrayAdapter);

  AjaxAdapter.prototype._applyDefaults = function (options) {
    var defaults = {
      data: function (params) {
        return $.extend({}, params, {
          q: params.term
        });
      },
      transport: function (params, success, failure) {
        var $request = $.ajax(params);

        $request.then(success);
        $request.fail(failure);

        return $request;
      }
    };

    return $.extend({}, defaults, options, true);
  };

  AjaxAdapter.prototype.processResults = function (results) {
    return results;
  };

  AjaxAdapter.prototype.query = function (params, callback) {
    var matches = [];
    var self = this;

    if (this._request != null) {
      // JSONP requests cannot always be aborted
      if ($.isFunction(this._request.abort)) {
        this._request.abort();
      }

      this._request = null;
    }

    var options = $.extend({
      type: 'GET'
    }, this.ajaxOptions);

    if (typeof options.url === 'function') {
      options.url = options.url.call(this.$element, params);
    }

    if (typeof options.data === 'function') {
      options.data = options.data.call(this.$element, params);
    }

    function request () {
      var $request = options.transport(options, function (data) {
        var results = self.processResults(data, params);

        if (self.options.get('debug') && window.console && console.error) {
          // Check to make sure that the response included a `results` key.
          if (!results || !results.results || !$.isArray(results.results)) {
            console.error(
              'Select2: The AJAX results did not return an array in the ' +
              '`results` key of the response.'
            );
          }
        }

        callback(results);
      }, function () {
        // TODO: Handle AJAX errors
      });

      self._request = $request;
    }

    if (this.ajaxOptions.delay && params.term !== '') {
      if (this._queryTimeout) {
        window.clearTimeout(this._queryTimeout);
      }

      this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
    } else {
      request();
    }
  };

  return AjaxAdapter;
});

S2.define('select2/data/tags',[
  'jquery'
], function ($) {
  function Tags (decorated, $element, options) {
    var tags = options.get('tags');

    var createTag = options.get('createTag');

    if (createTag !== undefined) {
      this.createTag = createTag;
    }

    decorated.call(this, $element, options);

    if ($.isArray(tags)) {
      for (var t = 0; t < tags.length; t++) {
        var tag = tags[t];
        var item = this._normalizeItem(tag);

        var $option = this.option(item);

        this.$element.append($option);
      }
    }
  }

  Tags.prototype.query = function (decorated, params, callback) {
    var self = this;

    this._removeOldTags();

    if (params.term == null || params.page != null) {
      decorated.call(this, params, callback);
      return;
    }

    function wrapper (obj, child) {
      var data = obj.results;

      for (var i = 0; i < data.length; i++) {
        var option = data[i];

        var checkChildren = (
          option.children != null &&
          !wrapper({
            results: option.children
          }, true)
        );

        var checkText = option.text === params.term;

        if (checkText || checkChildren) {
          if (child) {
            return false;
          }

          obj.data = data;
          callback(obj);

          return;
        }
      }

      if (child) {
        return true;
      }

      var tag = self.createTag(params);

      if (tag != null) {
        var $option = self.option(tag);
        $option.attr('data-select2-tag', true);

        self.addOptions([$option]);

        self.insertTag(data, tag);
      }

      obj.results = data;

      callback(obj);
    }

    decorated.call(this, params, wrapper);
  };

  Tags.prototype.createTag = function (decorated, params) {
    var term = $.trim(params.term);

    if (term === '') {
      return null;
    }

    return {
      id: term,
      text: term
    };
  };

  Tags.prototype.insertTag = function (_, data, tag) {
    data.unshift(tag);
  };

  Tags.prototype._removeOldTags = function (_) {
    var tag = this._lastTag;

    var $options = this.$element.find('option[data-select2-tag]');

    $options.each(function () {
      if (this.selected) {
        return;
      }

      $(this).remove();
    });
  };

  return Tags;
});

S2.define('select2/data/tokenizer',[
  'jquery'
], function ($) {
  function Tokenizer (decorated, $element, options) {
    var tokenizer = options.get('tokenizer');

    if (tokenizer !== undefined) {
      this.tokenizer = tokenizer;
    }

    decorated.call(this, $element, options);
  }

  Tokenizer.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    this.$search =  container.dropdown.$search || container.selection.$search ||
      $container.find('.select2-search__field');
  };

  Tokenizer.prototype.query = function (decorated, params, callback) {
    var self = this;

    function select (data) {
      self.trigger('select', {
        data: data
      });
    }

    params.term = params.term || '';

    var tokenData = this.tokenizer(params, this.options, select);

    if (tokenData.term !== params.term) {
      // Replace the search term if we have the search box
      if (this.$search.length) {
        this.$search.val(tokenData.term);
        this.$search.focus();
      }

      params.term = tokenData.term;
    }

    decorated.call(this, params, callback);
  };

  Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
    var separators = options.get('tokenSeparators') || [];
    var term = params.term;
    var i = 0;

    var createTag = this.createTag || function (params) {
      return {
        id: params.term,
        text: params.term
      };
    };

    while (i < term.length) {
      var termChar = term[i];

      if ($.inArray(termChar, separators) === -1) {
        i++;

        continue;
      }

      var part = term.substr(0, i);
      var partParams = $.extend({}, params, {
        term: part
      });

      var data = createTag(partParams);

      if (data == null) {
        i++;
        continue;
      }

      callback(data);

      // Reset the term to not include the tokenized portion
      term = term.substr(i + 1) || '';
      i = 0;
    }

    return {
      term: term
    };
  };

  return Tokenizer;
});

S2.define('select2/data/minimumInputLength',[

], function () {
  function MinimumInputLength (decorated, $e, options) {
    this.minimumInputLength = options.get('minimumInputLength');

    decorated.call(this, $e, options);
  }

  MinimumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (params.term.length < this.minimumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooShort',
        args: {
          minimum: this.minimumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MinimumInputLength;
});

S2.define('select2/data/maximumInputLength',[

], function () {
  function MaximumInputLength (decorated, $e, options) {
    this.maximumInputLength = options.get('maximumInputLength');

    decorated.call(this, $e, options);
  }

  MaximumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (this.maximumInputLength > 0 &&
        params.term.length > this.maximumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooLong',
        args: {
          maximum: this.maximumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MaximumInputLength;
});

S2.define('select2/data/maximumSelectionLength',[

], function (){
  function MaximumSelectionLength (decorated, $e, options) {
    this.maximumSelectionLength = options.get('maximumSelectionLength');

    decorated.call(this, $e, options);
  }

  MaximumSelectionLength.prototype.query =
    function (decorated, params, callback) {
      var self = this;

      this.current(function (currentData) {
        var count = currentData != null ? currentData.length : 0;
        if (self.maximumSelectionLength > 0 &&
          count >= self.maximumSelectionLength) {
          self.trigger('results:message', {
            message: 'maximumSelected',
            args: {
              maximum: self.maximumSelectionLength
            }
          });
          return;
        }
        decorated.call(self, params, callback);
      });
  };

  return MaximumSelectionLength;
});

S2.define('select2/dropdown',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Dropdown ($element, options) {
    this.$element = $element;
    this.options = options;

    Dropdown.__super__.constructor.call(this);
  }

  Utils.Extend(Dropdown, Utils.Observable);

  Dropdown.prototype.render = function () {
    var $dropdown = $(
      '<span class="select2-dropdown">' +
        '<span class="select2-results"></span>' +
      '</span>'
    );

    $dropdown.attr('dir', this.options.get('dir'));

    this.$dropdown = $dropdown;

    return $dropdown;
  };

  Dropdown.prototype.bind = function () {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.position = function ($dropdown, $container) {
    // Should be implmented in subclasses
  };

  Dropdown.prototype.destroy = function () {
    // Remove the dropdown from the DOM
    this.$dropdown.remove();
  };

  return Dropdown;
});

S2.define('select2/dropdown/search',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function Search () { }

  Search.prototype.render = function (decorated) {
    var $rendered = decorated.call(this);

    var $search = $(
      '<span class="select2-search select2-search--dropdown">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +
        ' spellcheck="false" role="textbox" />' +
      '</span>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    $rendered.prepend($search);

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    this.$search.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();
    });

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$search.on('input', function (evt) {
      // Unbind the duplicated `keyup` event
      $(this).off('keyup');
    });

    this.$search.on('keyup input', function (evt) {
      self.handleSearch(evt);
    });

    container.on('open', function () {
      self.$search.attr('tabindex', 0);

      self.$search.focus();

      window.setTimeout(function () {
        self.$search.focus();
      }, 0);
    });

    container.on('close', function () {
      self.$search.attr('tabindex', -1);

      self.$search.val('');
    });

    container.on('results:all', function (params) {
      if (params.query.term == null || params.query.term === '') {
        var showSearch = self.showSearch(params);

        if (showSearch) {
          self.$searchContainer.removeClass('select2-search--hide');
        } else {
          self.$searchContainer.addClass('select2-search--hide');
        }
      }
    });
  };

  Search.prototype.handleSearch = function (evt) {
    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.showSearch = function (_, params) {
    return true;
  };

  return Search;
});

S2.define('select2/dropdown/hidePlaceholder',[

], function () {
  function HidePlaceholder (decorated, $element, options, dataAdapter) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options, dataAdapter);
  }

  HidePlaceholder.prototype.append = function (decorated, data) {
    data.results = this.removePlaceholder(data.results);

    decorated.call(this, data);
  };

  HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  HidePlaceholder.prototype.removePlaceholder = function (_, data) {
    var modifiedData = data.slice(0);

    for (var d = data.length - 1; d >= 0; d--) {
      var item = data[d];

      if (this.placeholder.id === item.id) {
        modifiedData.splice(d, 1);
      }
    }

    return modifiedData;
  };

  return HidePlaceholder;
});

S2.define('select2/dropdown/infiniteScroll',[
  'jquery'
], function ($) {
  function InfiniteScroll (decorated, $element, options, dataAdapter) {
    this.lastParams = {};

    decorated.call(this, $element, options, dataAdapter);

    this.$loadingMore = this.createLoadingMore();
    this.loading = false;
  }

  InfiniteScroll.prototype.append = function (decorated, data) {
    this.$loadingMore.remove();
    this.loading = false;

    decorated.call(this, data);

    if (this.showLoadingMore(data)) {
      this.$results.append(this.$loadingMore);
    }
  };

  InfiniteScroll.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('query', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    container.on('query:append', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    this.$results.on('scroll', function () {
      var isLoadMoreVisible = $.contains(
        document.documentElement,
        self.$loadingMore[0]
      );

      if (self.loading || !isLoadMoreVisible) {
        return;
      }

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var loadingMoreOffset = self.$loadingMore.offset().top +
        self.$loadingMore.outerHeight(false);

      if (currentOffset + 50 >= loadingMoreOffset) {
        self.loadMore();
      }
    });
  };

  InfiniteScroll.prototype.loadMore = function () {
    this.loading = true;

    var params = $.extend({}, {page: 1}, this.lastParams);

    params.page++;

    this.trigger('query:append', params);
  };

  InfiniteScroll.prototype.showLoadingMore = function (_, data) {
    return data.pagination && data.pagination.more;
  };

  InfiniteScroll.prototype.createLoadingMore = function () {
    var $option = $(
      '<li ' +
      'class="select2-results__option select2-results__option--load-more"' +
      'role="treeitem" aria-disabled="true"></li>'
    );

    var message = this.options.get('translations').get('loadingMore');

    $option.html(message(this.lastParams));

    return $option;
  };

  return InfiniteScroll;
});

S2.define('select2/dropdown/attachBody',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function AttachBody (decorated, $element, options) {
    this.$dropdownParent = options.get('dropdownParent') || $(document.body);

    decorated.call(this, $element, options);
  }

  AttachBody.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var setupResultsEvents = false;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self._showDropdown();
      self._attachPositioningHandler(container);

      if (!setupResultsEvents) {
        setupResultsEvents = true;

        container.on('results:all', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });

        container.on('results:append', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });
      }
    });

    container.on('close', function () {
      self._hideDropdown();
      self._detachPositioningHandler(container);
    });

    this.$dropdownContainer.on('mousedown', function (evt) {
      evt.stopPropagation();
    });
  };

  AttachBody.prototype.destroy = function (decorated) {
    decorated.call(this);

    this.$dropdownContainer.remove();
  };

  AttachBody.prototype.position = function (decorated, $dropdown, $container) {
    // Clone all of the container classes
    $dropdown.attr('class', $container.attr('class'));

    $dropdown.removeClass('select2');
    $dropdown.addClass('select2-container--open');

    $dropdown.css({
      position: 'absolute',
      top: -999999
    });

    this.$container = $container;
  };

  AttachBody.prototype.render = function (decorated) {
    var $container = $('<span></span>');

    var $dropdown = decorated.call(this);
    $container.append($dropdown);

    this.$dropdownContainer = $container;

    return $container;
  };

  AttachBody.prototype._hideDropdown = function (decorated) {
    this.$dropdownContainer.detach();
  };

  AttachBody.prototype._attachPositioningHandler =
      function (decorated, container) {
    var self = this;

    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.each(function () {
      $(this).data('select2-scroll-position', {
        x: $(this).scrollLeft(),
        y: $(this).scrollTop()
      });
    });

    $watchers.on(scrollEvent, function (ev) {
      var position = $(this).data('select2-scroll-position');
      $(this).scrollTop(position.y);
    });

    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
      function (e) {
      self._positionDropdown();
      self._resizeDropdown();
    });
  };

  AttachBody.prototype._detachPositioningHandler =
      function (decorated, container) {
    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.off(scrollEvent);

    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
  };

  AttachBody.prototype._positionDropdown = function () {
    var $window = $(window);

    var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
    var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');

    var newDirection = null;

    var position = this.$container.position();
    var offset = this.$container.offset();

    offset.bottom = offset.top + this.$container.outerHeight(false);

    var container = {
      height: this.$container.outerHeight(false)
    };

    container.top = offset.top;
    container.bottom = offset.top + container.height;

    var dropdown = {
      height: this.$dropdown.outerHeight(false)
    };

    var viewport = {
      top: $window.scrollTop(),
      bottom: $window.scrollTop() + $window.height()
    };

    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

    var css = {
      left: offset.left,
      top: container.bottom
    };

    // Fix positioning with static parents
    if (this.$dropdownParent[0].style.position !== 'static') {
      var parentOffset = this.$dropdownParent.offset();

      css.top -= parentOffset.top;
      css.left -= parentOffset.left;
    }

    if (!isCurrentlyAbove && !isCurrentlyBelow) {
      newDirection = 'below';
    }

    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
      newDirection = 'above';
    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
      newDirection = 'below';
    }

    if (newDirection == 'above' ||
      (isCurrentlyAbove && newDirection !== 'below')) {
      css.top = container.top - dropdown.height;
    }

    if (newDirection != null) {
      this.$dropdown
        .removeClass('select2-dropdown--below select2-dropdown--above')
        .addClass('select2-dropdown--' + newDirection);
      this.$container
        .removeClass('select2-container--below select2-container--above')
        .addClass('select2-container--' + newDirection);
    }

    this.$dropdownContainer.css(css);
  };

  AttachBody.prototype._resizeDropdown = function () {
    var css = {
      width: this.$container.outerWidth(false) + 'px'
    };

    if (this.options.get('dropdownAutoWidth')) {
      css.minWidth = css.width;
      css.width = 'auto';
    }

    this.$dropdown.css(css);
  };

  AttachBody.prototype._showDropdown = function (decorated) {
    this.$dropdownContainer.appendTo(this.$dropdownParent);

    this._positionDropdown();
    this._resizeDropdown();
  };

  return AttachBody;
});

S2.define('select2/dropdown/minimumResultsForSearch',[

], function () {
  function countResults (data) {
    var count = 0;

    for (var d = 0; d < data.length; d++) {
      var item = data[d];

      if (item.children) {
        count += countResults(item.children);
      } else {
        count++;
      }
    }

    return count;
  }

  function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
    this.minimumResultsForSearch = options.get('minimumResultsForSearch');

    if (this.minimumResultsForSearch < 0) {
      this.minimumResultsForSearch = Infinity;
    }

    decorated.call(this, $element, options, dataAdapter);
  }

  MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
    if (countResults(params.data.results) < this.minimumResultsForSearch) {
      return false;
    }

    return decorated.call(this, params);
  };

  return MinimumResultsForSearch;
});

S2.define('select2/dropdown/selectOnClose',[

], function () {
  function SelectOnClose () { }

  SelectOnClose.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('close', function () {
      self._handleSelectOnClose();
    });
  };

  SelectOnClose.prototype._handleSelectOnClose = function () {
    var $highlightedResults = this.getHighlightedResults();

    // Only select highlighted results
    if ($highlightedResults.length < 1) {
      return;
    }

    var data = $highlightedResults.data('data');

    // Don't re-select already selected resulte
    if (
      (data.element != null && data.element.selected) ||
      (data.element == null && data.selected)
    ) {
      return;
    }

    this.trigger('select', {
        data: data
    });
  };

  return SelectOnClose;
});

S2.define('select2/dropdown/closeOnSelect',[

], function () {
  function CloseOnSelect () { }

  CloseOnSelect.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('select', function (evt) {
      self._selectTriggered(evt);
    });

    container.on('unselect', function (evt) {
      self._selectTriggered(evt);
    });
  };

  CloseOnSelect.prototype._selectTriggered = function (_, evt) {
    var originalEvent = evt.originalEvent;

    // Don't close if the control key is being held
    if (originalEvent && originalEvent.ctrlKey) {
      return;
    }

    this.trigger('close', {});
  };

  return CloseOnSelect;
});

S2.define('select2/i18n/en',[],function () {
  // English
  return {
    errorLoading: function () {
      return 'The results could not be loaded.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Please delete ' + overChars + ' character';

      if (overChars != 1) {
        message += 's';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Please enter ' + remainingChars + ' or more characters';

      return message;
    },
    loadingMore: function () {
      return 'Loading more results…';
    },
    maximumSelected: function (args) {
      var message = 'You can only select ' + args.maximum + ' item';

      if (args.maximum != 1) {
        message += 's';
      }

      return message;
    },
    noResults: function () {
      return 'No results found';
    },
    searching: function () {
      return 'Searching…';
    }
  };
});

S2.define('select2/defaults',[
  'jquery',
  'require',

  './results',

  './selection/single',
  './selection/multiple',
  './selection/placeholder',
  './selection/allowClear',
  './selection/search',
  './selection/eventRelay',

  './utils',
  './translation',
  './diacritics',

  './data/select',
  './data/array',
  './data/ajax',
  './data/tags',
  './data/tokenizer',
  './data/minimumInputLength',
  './data/maximumInputLength',
  './data/maximumSelectionLength',

  './dropdown',
  './dropdown/search',
  './dropdown/hidePlaceholder',
  './dropdown/infiniteScroll',
  './dropdown/attachBody',
  './dropdown/minimumResultsForSearch',
  './dropdown/selectOnClose',
  './dropdown/closeOnSelect',

  './i18n/en'
], function ($, require,

             ResultsList,

             SingleSelection, MultipleSelection, Placeholder, AllowClear,
             SelectionSearch, EventRelay,

             Utils, Translation, DIACRITICS,

             SelectData, ArrayData, AjaxData, Tags, Tokenizer,
             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,

             EnglishTranslation) {
  function Defaults () {
    this.reset();
  }

  Defaults.prototype.apply = function (options) {
    options = $.extend({}, this.defaults, options);

    if (options.dataAdapter == null) {
      if (options.ajax != null) {
        options.dataAdapter = AjaxData;
      } else if (options.data != null) {
        options.dataAdapter = ArrayData;
      } else {
        options.dataAdapter = SelectData;
      }

      if (options.minimumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MinimumInputLength
        );
      }

      if (options.maximumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumInputLength
        );
      }

      if (options.maximumSelectionLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumSelectionLength
        );
      }

      if (options.tags) {
        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
      }

      if (options.tokenSeparators != null || options.tokenizer != null) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Tokenizer
        );
      }

      if (options.query != null) {
        var Query = require(options.amdBase + 'compat/query');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Query
        );
      }

      if (options.initSelection != null) {
        var InitSelection = require(options.amdBase + 'compat/initSelection');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          InitSelection
        );
      }
    }

    if (options.resultsAdapter == null) {
      options.resultsAdapter = ResultsList;

      if (options.ajax != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          InfiniteScroll
        );
      }

      if (options.placeholder != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          HidePlaceholder
        );
      }

      if (options.selectOnClose) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          SelectOnClose
        );
      }
    }

    if (options.dropdownAdapter == null) {
      if (options.multiple) {
        options.dropdownAdapter = Dropdown;
      } else {
        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

        options.dropdownAdapter = SearchableDropdown;
      }

      if (options.minimumResultsForSearch !== 0) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          MinimumResultsForSearch
        );
      }

      if (options.closeOnSelect) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          CloseOnSelect
        );
      }

      if (
        options.dropdownCssClass != null ||
        options.dropdownCss != null ||
        options.adaptDropdownCssClass != null
      ) {
        var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');

        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          DropdownCSS
        );
      }

      options.dropdownAdapter = Utils.Decorate(
        options.dropdownAdapter,
        AttachBody
      );
    }

    if (options.selectionAdapter == null) {
      if (options.multiple) {
        options.selectionAdapter = MultipleSelection;
      } else {
        options.selectionAdapter = SingleSelection;
      }

      // Add the placeholder mixin if a placeholder was specified
      if (options.placeholder != null) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          Placeholder
        );
      }

      if (options.allowClear) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          AllowClear
        );
      }

      if (options.multiple) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          SelectionSearch
        );
      }

      if (
        options.containerCssClass != null ||
        options.containerCss != null ||
        options.adaptContainerCssClass != null
      ) {
        var ContainerCSS = require(options.amdBase + 'compat/containerCss');

        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          ContainerCSS
        );
      }

      options.selectionAdapter = Utils.Decorate(
        options.selectionAdapter,
        EventRelay
      );
    }

    if (typeof options.language === 'string') {
      // Check if the language is specified with a region
      if (options.language.indexOf('-') > 0) {
        // Extract the region information if it is included
        var languageParts = options.language.split('-');
        var baseLanguage = languageParts[0];

        options.language = [options.language, baseLanguage];
      } else {
        options.language = [options.language];
      }
    }

    if ($.isArray(options.language)) {
      var languages = new Translation();
      options.language.push('en');

      var languageNames = options.language;

      for (var l = 0; l < languageNames.length; l++) {
        var name = languageNames[l];
        var language = {};

        try {
          // Try to load it with the original name
          language = Translation.loadPath(name);
        } catch (e) {
          try {
            // If we couldn't load it, check if it wasn't the full path
            name = this.defaults.amdLanguageBase + name;
            language = Translation.loadPath(name);
          } catch (ex) {
            // The translation could not be loaded at all. Sometimes this is
            // because of a configuration problem, other times this can be
            // because of how Select2 helps load all possible translation files.
            if (options.debug && window.console && console.warn) {
              console.warn(
                'Select2: The language file for "' + name + '" could not be ' +
                'automatically loaded. A fallback will be used instead.'
              );
            }

            continue;
          }
        }

        languages.extend(language);
      }

      options.translations = languages;
    } else {
      var baseTranslation = Translation.loadPath(
        this.defaults.amdLanguageBase + 'en'
      );
      var customTranslation = new Translation(options.language);

      customTranslation.extend(baseTranslation);

      options.translations = customTranslation;
    }

    return options;
  };

  Defaults.prototype.reset = function () {
    function stripDiacritics (text) {
      // Used 'uni range + named function' from http://jsperf.com/diacritics/18
      function match(a) {
        return DIACRITICS[a] || a;
      }

      return text.replace(/[^\u0000-\u007E]/g, match);
    }

    function matcher (params, data) {
      // Always return the object if there is nothing to compare
      if ($.trim(params.term) === '') {
        return data;
      }

      // Do a recursive check for options with children
      if (data.children && data.children.length > 0) {
        // Clone the data object if there are children
        // This is required as we modify the object to remove any non-matches
        var match = $.extend(true, {}, data);

        // Check each child of the option
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          var matches = matcher(params, child);

          // If there wasn't a match, remove the object in the array
          if (matches == null) {
            match.children.splice(c, 1);
          }
        }

        // If any children matched, return the new object
        if (match.children.length > 0) {
          return match;
        }

        // If there were no matching children, check just the plain object
        return matcher(params, match);
      }

      var original = stripDiacritics(data.text).toUpperCase();
      var term = stripDiacritics(params.term).toUpperCase();

      // Check if the text contains the term
      if (original.indexOf(term) > -1) {
        return data;
      }

      // If it doesn't contain the term, don't return anything
      return null;
    }

    this.defaults = {
      amdBase: './',
      amdLanguageBase: './i18n/',
      closeOnSelect: true,
      debug: false,
      dropdownAutoWidth: false,
      escapeMarkup: Utils.escapeMarkup,
      language: EnglishTranslation,
      matcher: matcher,
      minimumInputLength: 0,
      maximumInputLength: 0,
      maximumSelectionLength: 0,
      minimumResultsForSearch: 0,
      selectOnClose: false,
      sorter: function (data) {
        return data;
      },
      templateResult: function (result) {
        return result.text;
      },
      templateSelection: function (selection) {
        return selection.text;
      },
      theme: 'default',
      width: 'resolve'
    };
  };

  Defaults.prototype.set = function (key, value) {
    var camelKey = $.camelCase(key);

    var data = {};
    data[camelKey] = value;

    var convertedData = Utils._convertData(data);

    $.extend(this.defaults, convertedData);
  };

  var defaults = new Defaults();

  return defaults;
});

S2.define('select2/options',[
  'require',
  'jquery',
  './defaults',
  './utils'
], function (require, $, Defaults, Utils) {
  function Options (options, $element) {
    this.options = options;

    if ($element != null) {
      this.fromElement($element);
    }

    this.options = Defaults.apply(this.options);

    if ($element && $element.is('input')) {
      var InputCompat = require(this.get('amdBase') + 'compat/inputData');

      this.options.dataAdapter = Utils.Decorate(
        this.options.dataAdapter,
        InputCompat
      );
    }
  }

  Options.prototype.fromElement = function ($e) {
    var excludedData = ['select2'];

    if (this.options.multiple == null) {
      this.options.multiple = $e.prop('multiple');
    }

    if (this.options.disabled == null) {
      this.options.disabled = $e.prop('disabled');
    }

    if (this.options.language == null) {
      if ($e.prop('lang')) {
        this.options.language = $e.prop('lang').toLowerCase();
      } else if ($e.closest('[lang]').prop('lang')) {
        this.options.language = $e.closest('[lang]').prop('lang');
      }
    }

    if (this.options.dir == null) {
      if ($e.prop('dir')) {
        this.options.dir = $e.prop('dir');
      } else if ($e.closest('[dir]').prop('dir')) {
        this.options.dir = $e.closest('[dir]').prop('dir');
      } else {
        this.options.dir = 'ltr';
      }
    }

    $e.prop('disabled', this.options.disabled);
    $e.prop('multiple', this.options.multiple);

    if ($e.data('select2Tags')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-select2-tags` attribute has been changed to ' +
          'use the `data-data` and `data-tags="true"` attributes and will be ' +
          'removed in future versions of Select2.'
        );
      }

      $e.data('data', $e.data('select2Tags'));
      $e.data('tags', true);
    }

    if ($e.data('ajaxUrl')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-ajax-url` attribute has been changed to ' +
          '`data-ajax--url` and support for the old attribute will be removed' +
          ' in future versions of Select2.'
        );
      }

      $e.attr('ajax--url', $e.data('ajaxUrl'));
      $e.data('ajax--url', $e.data('ajaxUrl'));
    }

    var dataset = {};

    // Prefer the element's `dataset` attribute if it exists
    // jQuery 1.x does not correctly handle data attributes with multiple dashes
    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
      dataset = $.extend(true, {}, $e[0].dataset, $e.data());
    } else {
      dataset = $e.data();
    }

    var data = $.extend(true, {}, dataset);

    data = Utils._convertData(data);

    for (var key in data) {
      if ($.inArray(key, excludedData) > -1) {
        continue;
      }

      if ($.isPlainObject(this.options[key])) {
        $.extend(this.options[key], data[key]);
      } else {
        this.options[key] = data[key];
      }
    }

    return this;
  };

  Options.prototype.get = function (key) {
    return this.options[key];
  };

  Options.prototype.set = function (key, val) {
    this.options[key] = val;
  };

  return Options;
});

S2.define('select2/core',[
  'jquery',
  './options',
  './utils',
  './keys'
], function ($, Options, Utils, KEYS) {
  var Select2 = function ($element, options) {
    if ($element.data('select2') != null) {
      $element.data('select2').destroy();
    }

    this.$element = $element;

    this.id = this._generateId($element);

    options = options || {};

    this.options = new Options(options, $element);

    Select2.__super__.constructor.call(this);

    // Set up the tabindex

    var tabindex = $element.attr('tabindex') || 0;
    $element.data('old-tabindex', tabindex);
    $element.attr('tabindex', '-1');

    // Set up containers and adapters

    var DataAdapter = this.options.get('dataAdapter');
    this.dataAdapter = new DataAdapter($element, this.options);

    var $container = this.render();

    this._placeContainer($container);

    var SelectionAdapter = this.options.get('selectionAdapter');
    this.selection = new SelectionAdapter($element, this.options);
    this.$selection = this.selection.render();

    this.selection.position(this.$selection, $container);

    var DropdownAdapter = this.options.get('dropdownAdapter');
    this.dropdown = new DropdownAdapter($element, this.options);
    this.$dropdown = this.dropdown.render();

    this.dropdown.position(this.$dropdown, $container);

    var ResultsAdapter = this.options.get('resultsAdapter');
    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
    this.$results = this.results.render();

    this.results.position(this.$results, this.$dropdown);

    // Bind events

    var self = this;

    // Bind the container to all of the adapters
    this._bindAdapters();

    // Register any DOM event handlers
    this._registerDomEvents();

    // Register any internal event handlers
    this._registerDataEvents();
    this._registerSelectionEvents();
    this._registerDropdownEvents();
    this._registerResultsEvents();
    this._registerEvents();

    // Set the initial state
    this.dataAdapter.current(function (initialData) {
      self.trigger('selection:update', {
        data: initialData
      });
    });

    // Hide the original select
    $element.addClass('select2-hidden-accessible');
    $element.attr('aria-hidden', 'true');

    // Synchronize any monitored attributes
    this._syncAttributes();

    $element.data('select2', this);
  };

  Utils.Extend(Select2, Utils.Observable);

  Select2.prototype._generateId = function ($element) {
    var id = '';

    if ($element.attr('id') != null) {
      id = $element.attr('id');
    } else if ($element.attr('name') != null) {
      id = $element.attr('name') + '-' + Utils.generateChars(2);
    } else {
      id = Utils.generateChars(4);
    }

    id = 'select2-' + id;

    return id;
  };

  Select2.prototype._placeContainer = function ($container) {
    $container.insertAfter(this.$element);

    var width = this._resolveWidth(this.$element, this.options.get('width'));

    if (width != null) {
      $container.css('width', width);
    }
  };

  Select2.prototype._resolveWidth = function ($element, method) {
    var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

    if (method == 'resolve') {
      var styleWidth = this._resolveWidth($element, 'style');

      if (styleWidth != null) {
        return styleWidth;
      }

      return this._resolveWidth($element, 'element');
    }

    if (method == 'element') {
      var elementWidth = $element.outerWidth(false);

      if (elementWidth <= 0) {
        return 'auto';
      }

      return elementWidth + 'px';
    }

    if (method == 'style') {
      var style = $element.attr('style');

      if (typeof(style) !== 'string') {
        return null;
      }

      var attrs = style.split(';');

      for (var i = 0, l = attrs.length; i < l; i = i + 1) {
        var attr = attrs[i].replace(/\s/g, '');
        var matches = attr.match(WIDTH);

        if (matches !== null && matches.length >= 1) {
          return matches[1];
        }
      }

      return null;
    }

    return method;
  };

  Select2.prototype._bindAdapters = function () {
    this.dataAdapter.bind(this, this.$container);
    this.selection.bind(this, this.$container);

    this.dropdown.bind(this, this.$container);
    this.results.bind(this, this.$container);
  };

  Select2.prototype._registerDomEvents = function () {
    var self = this;

    this.$element.on('change.select2', function () {
      self.dataAdapter.current(function (data) {
        self.trigger('selection:update', {
          data: data
        });
      });
    });

    this._sync = Utils.bind(this._syncAttributes, this);

    if (this.$element[0].attachEvent) {
      this.$element[0].attachEvent('onpropertychange', this._sync);
    }

    var observer = window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver
    ;

    if (observer != null) {
      this._observer = new observer(function (mutations) {
        $.each(mutations, self._sync);
      });
      this._observer.observe(this.$element[0], {
        attributes: true,
        subtree: false
      });
    } else if (this.$element[0].addEventListener) {
      this.$element[0].addEventListener('DOMAttrModified', self._sync, false);
    }
  };

  Select2.prototype._registerDataEvents = function () {
    var self = this;

    this.dataAdapter.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerSelectionEvents = function () {
    var self = this;
    var nonRelayEvents = ['toggle', 'focus'];

    this.selection.on('toggle', function () {
      self.toggleDropdown();
    });

    this.selection.on('focus', function (params) {
      self.focus(params);
    });

    this.selection.on('*', function (name, params) {
      if ($.inArray(name, nonRelayEvents) !== -1) {
        return;
      }

      self.trigger(name, params);
    });
  };

  Select2.prototype._registerDropdownEvents = function () {
    var self = this;

    this.dropdown.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerResultsEvents = function () {
    var self = this;

    this.results.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerEvents = function () {
    var self = this;

    this.on('open', function () {
      self.$container.addClass('select2-container--open');
    });

    this.on('close', function () {
      self.$container.removeClass('select2-container--open');
    });

    this.on('enable', function () {
      self.$container.removeClass('select2-container--disabled');
    });

    this.on('disable', function () {
      self.$container.addClass('select2-container--disabled');
    });

    this.on('blur', function () {
      self.$container.removeClass('select2-container--focus');
    });

    this.on('query', function (params) {
      if (!self.isOpen()) {
        self.trigger('open', {});
      }

      this.dataAdapter.query(params, function (data) {
        self.trigger('results:all', {
          data: data,
          query: params
        });
      });
    });

    this.on('query:append', function (params) {
      this.dataAdapter.query(params, function (data) {
        self.trigger('results:append', {
          data: data,
          query: params
        });
      });
    });

    this.on('keypress', function (evt) {
      var key = evt.which;

      if (self.isOpen()) {
        if (key === KEYS.ESC || key === KEYS.TAB ||
            (key === KEYS.UP && evt.altKey)) {
          self.close();

          evt.preventDefault();
        } else if (key === KEYS.ENTER) {
          self.trigger('results:select', {});

          evt.preventDefault();
        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
          self.trigger('results:toggle', {});

          evt.preventDefault();
        } else if (key === KEYS.UP) {
          self.trigger('results:previous', {});

          evt.preventDefault();
        } else if (key === KEYS.DOWN) {
          self.trigger('results:next', {});

          evt.preventDefault();
        }
      } else {
        if (key === KEYS.ENTER || key === KEYS.SPACE ||
            (key === KEYS.DOWN && evt.altKey)) {
          self.open();

          evt.preventDefault();
        }
      }
    });
  };

  Select2.prototype._syncAttributes = function () {
    this.options.set('disabled', this.$element.prop('disabled'));

    if (this.options.get('disabled')) {
      if (this.isOpen()) {
        this.close();
      }

      this.trigger('disable', {});
    } else {
      this.trigger('enable', {});
    }
  };

  /**
   * Override the trigger method to automatically trigger pre-events when
   * there are events that can be prevented.
   */
  Select2.prototype.trigger = function (name, args) {
    var actualTrigger = Select2.__super__.trigger;
    var preTriggerMap = {
      'open': 'opening',
      'close': 'closing',
      'select': 'selecting',
      'unselect': 'unselecting'
    };

    if (args === undefined) {
      args = {};
    }

    if (name in preTriggerMap) {
      var preTriggerName = preTriggerMap[name];
      var preTriggerArgs = {
        prevented: false,
        name: name,
        args: args
      };

      actualTrigger.call(this, preTriggerName, preTriggerArgs);

      if (preTriggerArgs.prevented) {
        args.prevented = true;

        return;
      }
    }

    actualTrigger.call(this, name, args);
  };

  Select2.prototype.toggleDropdown = function () {
    if (this.options.get('disabled')) {
      return;
    }

    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  };

  Select2.prototype.open = function () {
    if (this.isOpen()) {
      return;
    }

    this.trigger('query', {});
  };

  Select2.prototype.close = function () {
    if (!this.isOpen()) {
      return;
    }

    this.trigger('close', {});
  };

  Select2.prototype.isOpen = function () {
    return this.$container.hasClass('select2-container--open');
  };

  Select2.prototype.hasFocus = function () {
    return this.$container.hasClass('select2-container--focus');
  };

  Select2.prototype.focus = function (data) {
    // No need to re-trigger focus events if we are already focused
    if (this.hasFocus()) {
      return;
    }

    this.$container.addClass('select2-container--focus');
    this.trigger('focus', {});
  };

  Select2.prototype.enable = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("enable")` method has been deprecated and will' +
        ' be removed in later Select2 versions. Use $element.prop("disabled")' +
        ' instead.'
      );
    }

    if (args == null || args.length === 0) {
      args = [true];
    }

    var disabled = !args[0];

    this.$element.prop('disabled', disabled);
  };

  Select2.prototype.data = function () {
    if (this.options.get('debug') &&
        arguments.length > 0 && window.console && console.warn) {
      console.warn(
        'Select2: Data can no longer be set using `select2("data")`. You ' +
        'should consider setting the value instead using `$element.val()`.'
      );
    }

    var data = [];

    this.dataAdapter.current(function (currentData) {
      data = currentData;
    });

    return data;
  };

  Select2.prototype.val = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("val")` method has been deprecated and will be' +
        ' removed in later Select2 versions. Use $element.val() instead.'
      );
    }

    if (args == null || args.length === 0) {
      return this.$element.val();
    }

    var newVal = args[0];

    if ($.isArray(newVal)) {
      newVal = $.map(newVal, function (obj) {
        return obj.toString();
      });
    }

    this.$element.val(newVal).trigger('change');
  };

  Select2.prototype.destroy = function () {
    this.$container.remove();

    if (this.$element[0].detachEvent) {
      this.$element[0].detachEvent('onpropertychange', this._sync);
    }

    if (this._observer != null) {
      this._observer.disconnect();
      this._observer = null;
    } else if (this.$element[0].removeEventListener) {
      this.$element[0]
        .removeEventListener('DOMAttrModified', this._sync, false);
    }

    this._sync = null;

    this.$element.off('.select2');
    this.$element.attr('tabindex', this.$element.data('old-tabindex'));

    this.$element.removeClass('select2-hidden-accessible');
    this.$element.attr('aria-hidden', 'false');
    this.$element.removeData('select2');

    this.dataAdapter.destroy();
    this.selection.destroy();
    this.dropdown.destroy();
    this.results.destroy();

    this.dataAdapter = null;
    this.selection = null;
    this.dropdown = null;
    this.results = null;
  };

  Select2.prototype.render = function () {
    var $container = $(
      '<span class="select2 select2-container">' +
        '<span class="selection"></span>' +
        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
      '</span>'
    );

    $container.attr('dir', this.options.get('dir'));

    this.$container = $container;

    this.$container.addClass('select2-container--' + this.options.get('theme'));

    $container.data('element', this.$element);

    return $container;
  };

  return Select2;
});

S2.define('jquery-mousewheel',[
  'jquery'
], function ($) {
  // Used to shim jQuery.mousewheel for non-full builds.
  return $;
});

S2.define('jquery.select2',[
  'jquery',
  'jquery-mousewheel',

  './select2/core',
  './select2/defaults'
], function ($, _, Select2, Defaults) {
  if ($.fn.select2 == null) {
    // All methods that should return the element
    var thisMethods = ['open', 'close', 'destroy'];

    $.fn.select2 = function (options) {
      options = options || {};

      if (typeof options === 'object') {
        this.each(function () {
          var instanceOptions = $.extend(true, {}, options);

          var instance = new Select2($(this), instanceOptions);
        });

        return this;
      } else if (typeof options === 'string') {
        var ret;

        this.each(function () {
          var instance = $(this).data('select2');

          if (instance == null && window.console && console.error) {
            console.error(
              'The select2(\'' + options + '\') method was called on an ' +
              'element that is not using Select2.'
            );
          }

          var args = Array.prototype.slice.call(arguments, 1);

          ret = instance[options].apply(instance, args);
        });

        // Check if we should be returning `this`
        if ($.inArray(options, thisMethods) > -1) {
          return this;
        }

        return ret;
      } else {
        throw new Error('Invalid arguments for Select2: ' + options);
      }
    };
  }

  if ($.fn.select2.defaults == null) {
    $.fn.select2.defaults = Defaults;
  }

  return Select2;
});

  // Return the AMD loader configuration so it can be used outside of this file
  return {
    define: S2.define,
    require: S2.require
  };
}());

  // Autoload the jQuery bindings
  // We know that all of the modules exist above this, so we're safe
  var select2 = S2.require('jquery.select2');

  // Hold the AMD module references on the jQuery function that was just loaded
  // This allows Select2 to use the internal loader outside of this file, such
  // as in the language files.
  jQuery.fn.select2.amd = S2;

  // Return the Select2 instance for anyone who is importing it.
  return select2;
}));

$(function(){

    var $body = $('body');

    /* Autosize */
    var autotextarea = $('.autosize');
    if(autotextarea.length){
        autosize(autotextarea);
    }

    /* Medium Editor */
    var editable = $('.editable');
    if(editable.length){
        var editor = new MediumEditor('.editable', {
            toolbar: {
                buttons: ['bold', 'italic', 'underline', 'orderedlist', 'unorderedlist', 'anchor', 'h1', 'h2', 'quote']
            },
            buttonLabels: 'fontawesome',
            targetBlank: true,
            placeholder: {
                text: 'Write something cool'
            }
        });

        editable.mediumInsert({
            editor: editor,
            addons: {
                images: {
                    label: '<span class="typcn typcn-camera"></span>',
                    // fileUploadOptions: { // (object) File upload configuration. See https://github.com/blueimp/jQuery-File-Upload/wiki/Options
                    //     url: 'uploadFile', // (string) A relative path to an upload script
                    //     acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i // (regexp) Regexp of accepted file types
                    // },
                    // deleteScript: 'delete.php',
                }
            }
        });
    }

    /* Tabs */
    var tabs = $('.tabs');
    if(tabs.length){
        var tabs = tabs.find('.tab').find('.link'),
            tabbed = $('.tabbed');

        if(tabbed.length){
            tabs.click(function(e){
                e.preventDefault();
                var $this = $(this),
                    tab_id = $this.data('tab');
                tabs.removeClass('active');
                $this.addClass('active');
                tabbed.removeClass('active');
                tabbed.filter('#' + tab_id).addClass('active');
            });
        }
    }

    /* Panel */
    var panel = $('.panel');
    if(panel.length){
        var close_btn = panel.find('.title').find('.close-panel'),
            open_btn = $('.open-panel');

        open_btn.click(function(e){
            e.preventDefault();
            panel.addClass('revealed');
        });

        close_btn.click(function(e){
            e.preventDefault();
            panel.removeClass('revealed');
        });
    }

    /* File preview */
    var file_img = $('.file').filter('.img');
    if(file_img.length){

        function getImgPreview(input) {
            var $img = $('<img>', {
                class: 'img-preview',
                src: ''
            });
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $img.attr('src', e.target.result);
                }

                reader.readAsDataURL(input.files[0]);

                return $img;
            }
        }

        file_img.change(function(){
            var preview = getImgPreview(this),
                img = file_img.next('.img-preview');
            if(img.length){
                img.remove();
            }
            file_img.after(preview);
        });
    }

    /* Select Dropdowns */
    var select = $('.select');
    if(select.length){
        var select_wrap = $('<div>', {
                class: 'select-styled'
            });

        select.wrap(select_wrap).before($('<span>', {
            class: 'typcn typcn-arrow-sorted-down'
        }));
    }

    /* Checkbox Switch */
    var onoffswitch = $('.onoffswitch');
    if(onoffswitch.length){
        var onoffswitch_wrap = $('<div>', {
                class: 'onoffswitch-styled'
            });
        onoffswitch.wrap(onoffswitch_wrap).after($('<label>', {
            class: 'onoffswitch-label',
            for: onoffswitch.attr('id')
        }));
    }

    /* Datetime field */
    var dtBox = $("#dtBox");
    if(dtBox.length){
        dtBox.DateTimePicker({
            dateTimeFormat: "dd-MM-yyyy hh:mm:ss AA",
            shortDayNames: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
            fullDayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            shortMonthNames: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            fullMonthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            titleContentDateTime: "Fecha de publicación",
            setButtonContent: "Aceptar",
            clearButtonContent: "Borrar",
            minDateTime: new Date().format('dd-mm-yyyy hh:mm:ss TT')
        });
    }

    /* Select2 */
    var selects2 = $('.select2');
    if(selects2.length){
        selects2.select2({
            width: '100%',
            tags: true
        });
    }
});
