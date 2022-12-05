(this["webpackJsonpstreamlit-browser"]=this["webpackJsonpstreamlit-browser"]||[]).push([[47],{1808:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return B}));var n,a=r(1430),o=r(0),u=r.n(o);function i(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}function l(){}function c(e){return!!(e||"").match(/\d/)}function s(e){return null===e||void 0===e}function f(e){return"number"===typeof e&&isNaN(e)}function v(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function d(e,t){void 0===t&&(t=!0);var r="-"===e[0],n=r&&t,a=(e=e.replace("-","")).split(".");return{beforeDecimal:a[0],afterDecimal:a[1]||"",hasNegation:r,addNegation:n}}function g(e,t,r){for(var n="",a=r?"0":"",o=0;o<=t-1;o++)n+=e[o]||a;return n}function m(e,t){return Array(t+1).join(e)}function p(e){var t=e+"",r="-"===t[0]?"-":"";r&&(t=t.substring(1));var n=t.split(/[eE]/g),a=n[0],o=n[1];if(!(o=Number(o)))return r+a;var u=1+o,i=(a=a.replace(".","")).length;return u<0?a="0."+m("0",Math.abs(u))+a:u>=i?a+=m("0",u-i):a=(a.substring(0,u)||"0")+"."+a.substring(u),r+a}function h(e,t,r){if(-1!==["","-"].indexOf(e))return e;var n=(-1!==e.indexOf(".")||r)&&t,a=d(e),o=a.beforeDecimal,u=a.afterDecimal,i=a.hasNegation,l=parseFloat("0."+(u||"0")),c=(u.length<=t?"0."+u:l.toFixed(t)).split(".");return""+(i?"-":"")+o.split("").reverse().reduce((function(e,t,r){return e.length>r?(Number(e[0])+Number(t)).toString()+e.substring(1,e.length):t+e}),c[0])+(n?".":"")+g(c[1]||"",t,r)}function b(e,t){if(e.value=e.value,null!==e){if(e.createTextRange){var r=e.createTextRange();return r.move("character",t),r.select(),!0}return e.selectionStart||0===e.selectionStart?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}function S(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function y(e,t,r,n){var a,o,u,i=e.length;if(a=t,o=0,u=i,t=Math.min(Math.max(a,o),u),"left"===n){for(;t>=0&&!r[t];)t--;-1===t&&(t=r.indexOf(!0))}else{for(;t<=i&&!r[t];)t++;t>i&&(t=r.lastIndexOf(!0))}return-1===t&&(t=i),t}function w(e){for(var t=Array.from({length:e.length+1}).map((function(){return!0})),r=0,n=t.length;r<n;r++)t[r]=Boolean(c(e[r])||c(e[r-1]));return t}function O(e,t,r,n,a,u){void 0===u&&(u=l);var i=Object(o.useRef)(),c=function(e){var t=Object(o.useRef)(e);return t.current=e,Object(o.useRef)((function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];return t.current.apply(t,e)})).current}((function(e){var t,o;return s(e)||f(e)?(o="",t=""):"number"===typeof e||r?(o="number"===typeof e?p(e):e,t=n(o)):(o=a(e,void 0),t=e),{formattedValue:t,numAsString:o}})),v=Object(o.useState)((function(){return c(t)})),d=v[0],g=v[1];return Object(o.useMemo)((function(){s(e)?i.current=void 0:(i.current=c(e),g(i.current))}),[e,c]),[d,function(e,t){g({formattedValue:e.formattedValue,numAsString:e.value}),u(e,t)}]}function x(e){return e.replace(/[^0-9]/g,"")}function j(e){return e}function D(e){var t=e.type;void 0===t&&(t="text");var r=e.displayType;void 0===r&&(r="input");var a=e.customInput,s=e.renderText,f=e.getInputRef,v=e.format;void 0===v&&(v=j);var d=e.removeFormatting;void 0===d&&(d=x);var g=e.defaultValue,m=e.valueIsNumericString,p=e.onValueChange,h=e.isAllowed,S=e.onChange;void 0===S&&(S=l);var D=e.onKeyDown;void 0===D&&(D=l);var V=e.onMouseUp;void 0===V&&(V=l);var N=e.onFocus;void 0===N&&(N=l);var E=e.onBlur;void 0===E&&(E=l);var R=e.value,T=e.getCaretBoundary;void 0===T&&(T=w);var C=i(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary"]),A=O(R,g,Boolean(m),v,d,p),B=A[0],F=B.formattedValue,I=B.numAsString,k=A[1],M=Object(o.useRef)();Object(o.useEffect)((function(){var e=v(I);if(void 0===M.current||e!==M.current){var t=W.current;q({formattedValue:e,numAsString:I,input:t,setCaretPosition:!0,source:n.props,event:void 0})}}));var P=Object(o.useState)(!1),K=P[0],L=P[1],W=Object(o.useRef)(null),U=Object(o.useRef)({setCaretTimeout:null,focusTimeout:null});Object(o.useEffect)((function(){return L(!0),function(){clearTimeout(U.current.setCaretTimeout),clearTimeout(U.current.focusTimeout)}}),[]);var G=v,$=function(e,t){var r=parseFloat(t);return{formattedValue:e,value:t,floatValue:isNaN(r)?void 0:r}},z=function(e,t,r){b(e,t),U.current.setCaretTimeout=setTimeout((function(){e.value===r&&b(e,t)}),0)},J=function(e,t,r){return y(e,t,T(e),r)},Z=function(e,t,r){var n=T(t),a=function(e,t,r,n,a){var o=a.findIndex((function(e){return e})),u=e.slice(0,o);t||r.startsWith(u)||(r=u+r,n+=u.length);for(var i=r.length,l=e.length,s={},f=new Array(i),v=0;v<i;v++){f[v]=-1;for(var d=0,g=l;d<g;d++)if(r[v]===e[d]&&!0!==s[d]){f[v]=d,s[d]=!0;break}}for(var m=n;m<i&&(-1===f[m]||!c(r[m]));)m++;var p=m===i||-1===f[m]?l:f[m];for(m=n-1;m>0&&-1===f[m];)m--;var h=-1===m||-1===f[m]?0:f[m]+1;return h>p?p:n-h<p-n?h:p}(t,F,e,r,n);return a=y(t,a,n)},q=function(e){var t=e.formattedValue;void 0===t&&(t="");var r=e.input,n=e.setCaretPosition;void 0===n&&(n=!0);var a,o=e.source,u=e.event,i=e.numAsString,l=e.caretPos;if(r){if(void 0===l&&n){var c=e.inputValue||r.value,s=(a=r,Math.max(a.selectionStart,a.selectionEnd));r.value=t,l=Z(c,t,s)}r.value=t,n&&void 0!==l&&z(r,l,t)}t!==F&&function(e,t){M.current=e.formattedValue,k(e,t)}($(t,i),{event:u,source:o})},H=!K||"undefined"===typeof navigator||navigator.platform&&/iPhone|iPod/.test(navigator.platform)?void 0:"numeric",Q=Object.assign({inputMode:H},C,{type:t,value:F,onChange:function(e){(function(e,t,r){var n=function(e,t){for(var r=0,n=0,a=e.length,o=t.length;e[r]===t[r]&&r<a;)r++;for(;e[a-1-n]===t[o-1-n]&&o-n>r&&a-n>r;)n++;return{from:{start:r,end:a-n},to:{start:r,end:o-n}}}(F,e),a=Object.assign(Object.assign({},n),{lastValue:F}),o=d(e,a),u=G(o);return!(h&&!h($(u,o)))&&(q({formattedValue:u,numAsString:o,inputValue:e,event:t,source:r,setCaretPosition:!0,input:t.target}),!0)})(e.target.value,e,n.event)&&S(e)},onKeyDown:function(e){var t,r=e.target,n=e.key,a=r.selectionStart,o=r.selectionEnd,u=r.value;if(void 0===u&&(u=""),"ArrowLeft"===n||"Backspace"===n?t=Math.max(a-1,0):"ArrowRight"===n?t=Math.min(a+1,u.length):"Delete"===n&&(t=a),void 0!==t&&a===o){var i=t;if("ArrowLeft"===n||"ArrowRight"===n)i=J(u,t,"ArrowLeft"===n?"left":"right");else"Delete"!==n||c(u[t])?"Backspace"!==n||c(u[t])||(i=J(u,t,"left")):i=J(u,t,"right");i!==t&&z(r,i,u),e.isUnitTestRun&&z(r,i,u),D(e)}else D(e)},onMouseUp:function(e){var t=e.target,r=t.selectionStart,n=t.selectionEnd,a=t.value;if(void 0===a&&(a=""),r===n){var o=J(a,r);o!==r&&z(t,o,a)}V(e)},onFocus:function(e){e.persist();var t=e.target;W.current=t,U.current.focusTimeout=setTimeout((function(){var r=t.selectionStart,n=t.selectionEnd,a=t.value;void 0===a&&(a="");var o=J(a,r);o===r||0===r&&n===a.length||z(t,o,a),N(e)}),0)},onBlur:function(e){W.current=null,clearTimeout(U.current.focusTimeout),clearTimeout(U.current.setCaretTimeout),E(e)}});if("text"===r)return s?u.a.createElement(u.a.Fragment,null,s(F,C)||null):u.a.createElement("span",Object.assign({},C,{ref:f}),F);if(a){var X=a;return u.a.createElement(X,Object.assign({},Q,{ref:f}))}return u.a.createElement("input",Object.assign({},Q,{ref:f}))}function V(e,t){var r=t.decimalScale,n=t.fixedDecimalScale,a=t.prefix;void 0===a&&(a="");var o=t.suffix;void 0===o&&(o="");var u=t.allowNegative;void 0===u&&(u=!0);var i=t.thousandsGroupStyle;if(void 0===i&&(i="thousand"),""===e||"-"===e)return e;var l=N(t),c=l.thousandSeparator,s=l.decimalSeparator,f=0!==r&&-1!==e.indexOf(".")||r&&n,v=d(e,u),m=v.beforeDecimal,p=v.afterDecimal,h=v.addNegation;return void 0!==r&&(p=g(p,r,!!n)),c&&(m=function(e,t,r){var n=function(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}(r),a=e.search(/[1-9]/);return a=-1===a?e.length:a,e.substring(0,a)+e.substring(a,e.length).replace(n,"$1"+t)}(m,c,i)),a&&(m=a+m),o&&(p+=o),h&&(m="-"+m),e=m+(f&&s||"")+p}function N(e){var t=e.decimalSeparator;void 0===t&&(t=".");var r=e.thousandSeparator,n=e.allowedDecimalSeparators;return!0===r&&(r=","),n||(n=[t,"."]),{decimalSeparator:t,thousandSeparator:r,allowedDecimalSeparators:n}}function E(e,t,r){void 0===t&&(t=S(e));var n=r.allowNegative;void 0===n&&(n=!0);var a=r.prefix;void 0===a&&(a="");var o=r.suffix;void 0===o&&(o="");var u=r.decimalScale,i=t.from,l=t.to,c=l.start,s=l.end,f=N(r),g=f.allowedDecimalSeparators,m=f.decimalSeparator,p=e[s]===m;if(s-c===1&&-1!==g.indexOf(e[c])){var h=0===u?"":m;e=e.substring(0,c)+h+e.substring(c+1,e.length)}var b=!1;a.startsWith("-")?b=e.startsWith("--"):o.startsWith("-")&&e.length===o.length?b=!1:"-"===e[0]&&(b=!0),b&&(e=e.substring(1),c-=1,s-=1);var y=0;e.startsWith(a)?y+=a.length:c<a.length&&(y=c),s-=y;var w=(e=e.substring(y)).length,O=e.length-o.length;e.endsWith(o)?w=O:s>e.length-o.length&&(w=s),e=e.substring(0,w);var x=(e=((e=function(e,t){void 0===e&&(e="");var r=new RegExp("(-)"),n=new RegExp("(-)(.)*(-)"),a=r.test(e),o=n.test(e);return e=e.replace(/-/g,""),a&&!o&&t&&(e="-"+e),e}(b?"-"+e:e,n)).match(function(e,t){return new RegExp("(^-)|[0-9]|"+v(e),t?"g":void 0)}(m,!0))||[]).join("")).indexOf(m),j=d(e=e.replace(new RegExp(v(m),"g"),(function(e,t){return t===x?".":""})),n),D=j.beforeDecimal,V=j.afterDecimal,E=j.addNegation;return l.end-l.start<i.end-i.start&&""===D&&p&&!parseFloat(V)&&(e=E?"-":""),e}function R(e){e.decimalSeparator,e.allowedDecimalSeparators,e.thousandsGroupStyle,e.suffix,e.allowNegative;var t=e.allowLeadingZeros,r=e.onKeyDown;void 0===r&&(r=l);var a=e.onBlur;void 0===a&&(a=l);var o=e.thousandSeparator,u=e.decimalScale,c=e.fixedDecimalScale,v=e.prefix;void 0===v&&(v="");var d=e.defaultValue,g=e.value,m=e.valueIsNumericString,S=e.onValueChange,y=i(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]);!function(e){var t=N(e),r=t.thousandSeparator,n=t.decimalSeparator;if(r===n)throw new Error("\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: "+r+' (thousandSeparator = {true} is same as thousandSeparator = ",")\n        decimalSeparator: '+n+" (default value for decimalSeparator is .)\n     ")}(e);var w=function(t){return V(t,e)},x=function(t,r){return E(t,r,e)},j=m;s(g)?s(d)||(j=null!==m&&void 0!==m?m:"number"===typeof d):j=null!==m&&void 0!==m?m:"number"===typeof g;var D=function(e){return s(e)||f(e)?e:("number"===typeof e&&(e=p(e)),j&&"number"===typeof u?h(e,u,Boolean(c)):e)},R=O(D(g),D(d),Boolean(j),w,x,S),T=R[0],C=T.numAsString,A=T.formattedValue,B=R[1];return Object.assign(Object.assign({},y),{value:A,valueIsNumericString:!1,onValueChange:B,format:w,removeFormatting:x,getCaretBoundary:function(t){return function(e,t){var r=t.prefix;void 0===r&&(r="");var n=t.suffix;void 0===n&&(n="");var a=Array.from({length:e.length+1}).map((function(){return!0})),o="-"===e[0];a.fill(!1,0,r.length+(o?1:0));var u=e.length;return a.fill(!1,u-n.length+1,u+1),a}(t,e)},onKeyDown:function(t){var n=t.target,a=t.key,i=n.selectionStart,l=n.selectionEnd,s=n.value;if(void 0===s&&(s=""),i===l){"Backspace"===a&&"-"===s[0]&&i===v.length+1&&b(n,1);var f=N(e).decimalSeparator;"Backspace"===a&&s[i-1]===f&&u&&c&&(b(n,i-1),t.preventDefault());var d=!0===o?",":o;"Backspace"===a&&s[i-1]===d&&b(n,i-1),"Delete"===a&&s[i]===d&&b(n,i+1),r(t)}else r(t)},onBlur:function(r){var o=C;if(o.match(/\d/g)||(o=""),t||(o=function(e){if(!e)return e;var t="-"===e[0];t&&(e=e.substring(1,e.length));var r=e.split("."),n=r[0].replace(/^0+/,"")||"0",a=r[1]||"";return(t?"-":"")+n+(a?"."+a:"")}(o)),c&&u&&(o=h(o,u,c)),o!==C){var i=V(o,e);B({formattedValue:i,value:o,floatValue:parseFloat(o)},{event:r,source:n.event})}a(r)}})}function T(e){var t=R(e);return u.a.createElement(D,Object.assign({},t))}!function(e){e.event="event",e.props="prop"}(n||(n={}));var C=Object(a.a)("div")({name:"NumberOverlayEditorStyle",class:"n1czszh3"});function A(){var e,t,r,n=null==(r=null==(t=null==(e=Intl.NumberFormat())?void 0:e.formatToParts(1.1))?void 0:t.find((function(e){return"decimal"===e.type})))?void 0:r.value;return null!=n?n:"."}var B=function(e){var t=e.value,r=e.onChange,n=e.disabled,a=e.highlight,u=e.validatedSelection,i=o.useRef();return o.useLayoutEffect((function(){var e;if(void 0!==u){var t="number"===typeof u?[u,null]:u;null==(e=i.current)||e.setSelectionRange(t[0],t[1])}}),[u]),o.createElement(C,null,o.createElement(T,{autoFocus:!0,getInputRef:i,className:"gdg-input",onFocus:function(e){return e.target.setSelectionRange(a?0:e.target.value.length,e.target.value.length)},disabled:!0===n,thousandSeparator:"."===A()?",":".",decimalSeparator:A(),value:Object.is(t,-0)?"-":null!=t?t:"",onValueChange:r}))}}}]);