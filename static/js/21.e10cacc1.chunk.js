(this["webpackJsonpstreamlit-browser"]=this["webpackJsonpstreamlit-browser"]||[]).push([[21],{1504:function(e,t,r){"use strict";r.d(t,"d",(function(){return p})),r.d(t,"g",(function(){return f})),r.d(t,"e",(function(){return d})),r.d(t,"f",(function(){return b})),r.d(t,"c",(function(){return h})),r.d(t,"b",(function(){return y})),r.d(t,"a",(function(){return v}));var n=r(30);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){return e.$isActive?2:e.$isHovered?1:0}function s(e){var t=e.$theme.colors,r=e.$disabled,n=e.$checked,o=e.$isFocusVisible,i=e.$error;if(r)return t.tickFillDisabled;if(!n)return o?t.borderSelected:i?t.tickBorderError:t.tickBorder;if(i)switch(c(e)){case 0:return t.tickFillErrorSelected;case 1:return t.tickFillErrorSelectedHover;case 2:return t.tickFillErrorSelectedHoverActive}else switch(c(e)){case 0:return t.tickFillSelected;case 1:return t.tickFillSelectedHover;case 2:return t.tickFillSelectedHoverActive}return null}function u(e){var t=e.$theme.colors;if(e.$disabled)return t.tickMarkFillDisabled;if(e.$checked)return t.tickMarkFill;if(e.$error)switch(c(e)){case 0:return t.tickFillError;case 1:return t.tickFillErrorHover;case 2:return t.tickFillErrorHoverActive}else switch(c(e)){case 0:return t.tickFill;case 1:return t.tickFillHover;case 2:return t.tickFillActive}}function l(e){var t=e.$disabled,r=e.$theme.colors;return t?r.contentSecondary:r.contentPrimary}var p=Object(n.a)("div",(function(e){var t=e.$disabled,r=e.$align;return{display:"flex",flexWrap:"wrap",flexDirection:"horizontal"===r?"row":"column",alignItems:"horizontal"===r?"center":"flex-start",cursor:t?"not-allowed":"pointer","-webkit-tap-highlight-color":"transparent"}}));p.displayName="RadioGroupRoot",p.displayName="RadioGroupRoot";var f=Object(n.a)("label",(function(e){var t,r=e.$disabled,n=e.$hasDescription,o=e.$labelPlacement,i=e.$theme,c=e.$align,s=i.sizing,u="horizontal"===c,l="rtl"===i.direction?"Left":"Right";return a(t={flexDirection:"top"===o||"bottom"===o?"column":"row",display:"flex",alignItems:"center",cursor:r?"not-allowed":"pointer",marginTop:s.scale200},"margin".concat(l),u?s.scale200:null),a(t,"marginBottom",n&&!u?null:s.scale200),t}));f.displayName="Root",f.displayName="Root";var d=Object(n.a)("div",(function(e){var t=e.$theme,r=t.animation,n=t.sizing;return{backgroundColor:u(e),borderTopLeftRadius:"50%",borderTopRightRadius:"50%",borderBottomRightRadius:"50%",borderBottomLeftRadius:"50%",height:e.$checked?n.scale200:n.scale550,transitionDuration:r.timing200,transitionTimingFunction:r.easeOutCurve,width:e.$checked?n.scale200:n.scale550}}));d.displayName="RadioMarkInner",d.displayName="RadioMarkInner";var b=Object(n.a)("div",(function(e){var t=e.$theme,r=t.animation,n=t.sizing;return{alignItems:"center",backgroundColor:s(e),borderTopLeftRadius:"50%",borderTopRightRadius:"50%",borderBottomRightRadius:"50%",borderBottomLeftRadius:"50%",boxShadow:e.$isFocusVisible&&e.$checked?"0 0 0 3px ".concat(e.$theme.colors.accent):"none",display:"flex",height:n.scale700,justifyContent:"center",marginTop:n.scale0,marginRight:n.scale0,marginBottom:n.scale0,marginLeft:n.scale0,outline:"none",verticalAlign:"middle",width:n.scale700,flexShrink:0,transitionDuration:r.timing200,transitionTimingFunction:r.easeOutCurve}}));b.displayName="RadioMarkOuter",b.displayName="RadioMarkOuter";var h=Object(n.a)("div",(function(e){var t=e.$theme.typography;return i(i({verticalAlign:"middle"},function(e){var t,r=e.$labelPlacement,n=void 0===r?"":r,o=e.$theme;switch(n){case"top":t="Bottom";break;case"bottom":t="Top";break;case"left":t="rtl"===o.direction?"Left":"Right";break;default:case"right":t="rtl"===o.direction?"Right":"Left"}var i=o.sizing.scale300;return a({},"padding".concat(t),i)}(e)),{},{color:l(e)},t.LabelMedium)}));h.displayName="Label",h.displayName="Label";var y=Object(n.a)("input",{width:0,height:0,marginTop:0,marginRight:0,marginBottom:0,marginLeft:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,clip:"rect(0 0 0 0)",position:"absolute"});y.displayName="Input",y.displayName="Input";var v=Object(n.a)("div",(function(e){var t,r=e.$theme,n=e.$align,o="horizontal"===n,c="rtl"===r.direction?"Right":"Left",s="rtl"===r.direction?"Left":"Right";return i(i({},r.typography.ParagraphSmall),{},(a(t={color:r.colors.contentSecondary,cursor:"auto"},"margin".concat(c),"horizontal"===n?null:r.sizing.scale900),a(t,"margin".concat(s),o?r.sizing.scale200:null),a(t,"maxWidth","240px"),t))}));v.displayName="Description",v.displayName="Description"},1759:function(e,t,r){"use strict";var n=r(0),o=r(19),i=r(1504),a=r(47);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(s){c=!0,o=s}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return(d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=v(e);if(t){var o=v(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return h(this,r)}}function h(e,t){if(t&&("object"===c(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(h,e);var t,r,c,l=b(h);function h(){var e;p(this,h);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return m(y(e=l.call.apply(l,[this].concat(r))),"state",{isFocusVisible:!1,focusedRadioIndex:-1}),m(y(e),"handleFocus",(function(t,r){Object(a.d)(t)&&e.setState({isFocusVisible:!0}),e.setState({focusedRadioIndex:r}),e.props.onFocus&&e.props.onFocus(t)})),m(y(e),"handleBlur",(function(t,r){!1!==e.state.isFocusVisible&&e.setState({isFocusVisible:!1}),e.setState({focusedRadioIndex:-1}),e.props.onBlur&&e.props.onBlur(t)})),e}return t=h,(r=[{key:"render",value:function(){var e=this,t=this.props.overrides,r=void 0===t?{}:t,a=u(Object(o.c)(r.RadioGroupRoot,i.d),2),c=a[0],l=a[1];return n.createElement(c,s({id:this.props.id,role:"radiogroup","aria-describedby":this.props["aria-describedby"],"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props.error||null,"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],$align:this.props.align,$disabled:this.props.disabled,$error:this.props.error,$required:this.props.required},l),n.Children.map(this.props.children,(function(t,r){if(!n.isValidElement(t))return null;var o=e.props.value===t.props.value;return n.cloneElement(t,{align:e.props.align,autoFocus:e.props.autoFocus,checked:o,disabled:e.props.disabled||t.props.disabled,error:e.props.error,isFocused:e.state.focusedRadioIndex===r,isFocusVisible:e.state.isFocusVisible,tabIndex:0===r&&!e.props.value||o?"0":"-1",labelPlacement:e.props.labelPlacement,name:e.props.name,onBlur:function(t){return e.handleBlur(t,r)},onFocus:function(t){return e.handleFocus(t,r)},onChange:e.props.onChange,onMouseEnter:e.props.onMouseEnter,onMouseLeave:e.props.onMouseLeave})})))}}])&&f(t.prototype,r),c&&f(t,c),Object.defineProperty(t,"prototype",{writable:!1}),h}(n.Component);m(g,"defaultProps",{name:"",value:"",disabled:!1,autoFocus:!1,labelPlacement:"right",align:"vertical",error:!1,required:!1,onChange:function(){},onMouseEnter:function(){},onMouseLeave:function(){},onFocus:function(){},onBlur:function(){},overrides:{}}),t.a=g},1760:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={vertical:"vertical",horizontal:"horizontal"}},1761:function(e,t,r){"use strict";var n=r(0),o=r(19),i=r(1504);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(s){c=!0,o=s}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=y(e);if(t){var o=y(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return b(this,r)}}function b(e,t){if(t&&("object"===a(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=function(e){return e.stopPropagation()},g=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(b,e);var t,r,a,u=d(b);function b(){var e;l(this,b);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return v(h(e=u.call.apply(u,[this].concat(r))),"state",{isActive:!1,isHovered:!1}),v(h(e),"onMouseEnter",(function(t){e.setState({isHovered:!0}),e.props.onMouseEnter&&e.props.onMouseEnter(t)})),v(h(e),"onMouseLeave",(function(t){e.setState({isHovered:!1}),e.props.onMouseLeave&&e.props.onMouseLeave(t)})),v(h(e),"onMouseDown",(function(t){e.setState({isActive:!0}),e.props.onMouseDown&&e.props.onMouseDown(t)})),v(h(e),"onMouseUp",(function(t){e.setState({isActive:!1}),e.props.onMouseUp&&e.props.onMouseUp(t)})),e}return t=b,(r=[{key:"componentDidMount",value:function(){var e;this.props.autoFocus&&null!==(e=this.props.inputRef)&&void 0!==e&&e.current&&this.props.inputRef.current.focus()}},{key:"render",value:function(){var e,t=this.props.overrides,r=void 0===t?{}:t,a=s(Object(o.c)(r.Root,i.g),2),u=a[0],l=a[1],p=s(Object(o.c)(r.Label,i.c),2),f=p[0],d=p[1],b=s(Object(o.c)(r.Input,i.b),2),h=b[0],y=b[1],v=s(Object(o.c)(r.Description,i.a),2),g=v[0],O=v[1],w=s(Object(o.c)(r.RadioMarkInner,i.e),2),j=w[0],R=w[1],k=s(Object(o.c)(r.RadioMarkOuter,i.f),2),$=k[0],F=k[1],P={$align:this.props.align,$checked:this.props.checked,$disabled:this.props.disabled,$hasDescription:!!this.props.description,$isActive:this.state.isActive,$error:this.props.error,$isFocused:this.props.isFocused,$isFocusVisible:this.props.isFocused&&this.props.isFocusVisible,$isHovered:this.state.isHovered,$labelPlacement:this.props.labelPlacement,$required:this.props.required,$value:this.props.value},S=n.createElement(f,c({},P,d),this.props.containsInteractiveElement?n.createElement("div",{onClick:function(e){return e.preventDefault()}},this.props.children):this.props.children);return n.createElement(n.Fragment,null,n.createElement(u,c({"data-baseweb":"radio",onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp},P,l),("top"===(e=this.props.labelPlacement)||"left"===e)&&S,n.createElement($,c({},P,F),n.createElement(j,c({},P,R))),n.createElement(h,c({"aria-invalid":this.props.error||null,checked:this.props.checked,disabled:this.props.disabled,name:this.props.name,onBlur:this.props.onBlur,onFocus:this.props.onFocus,onClick:m,onChange:this.props.onChange,ref:this.props.inputRef,required:this.props.required,tabIndex:this.props.tabIndex,type:"radio",value:this.props.value},P,y)),function(e){return"bottom"===e||"right"===e}(this.props.labelPlacement)&&S),!!this.props.description&&n.createElement(g,c({},P,O),this.props.description))}}])&&p(t.prototype,r),a&&p(t,a),Object.defineProperty(t,"prototype",{writable:!1}),b}(n.Component);v(g,"defaultProps",{overrides:{},containsInteractiveElement:!1,checked:!1,disabled:!1,autoFocus:!1,inputRef:n.createRef(),align:"vertical",error:!1,onChange:function(){},onMouseEnter:function(){},onMouseLeave:function(){},onMouseDown:function(){},onMouseUp:function(){},onFocus:function(){},onBlur:function(){}}),t.a=g}}]);