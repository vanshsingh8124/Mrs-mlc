(this["webpackJsonpstreamlit-browser"]=this["webpackJsonpstreamlit-browser"]||[]).push([[25],{1321:function(e,t,n){"use strict";n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return i}));var i,a=n(0),r=n.n(a),s=n(76),o=n(69),l=n(27),c=n(1517),d=n(19),u=n(1);!function(e){e.EXTRASMALL="xs",e.SMALL="sm",e.MEDIUM="md",e.LARGE="lg",e.EXTRALARGE="xl"}(i||(i={}));var g=function(e){var t=e.value,n=e.width,a=e.size,g=void 0===a?i.SMALL:a,p=e.overrides,f=Object(s.c)(),m={xs:f.spacing.twoXS,sm:f.spacing.sm,md:f.spacing.lg,lg:f.spacing.xl,xl:f.spacing.twoXL},b=r.a.useContext(o.a).activeTheme,h=!Object(l.isPresetTheme)(b),j={BarContainer:{style:{marginTop:f.spacing.none,marginBottom:f.spacing.none,marginRight:f.spacing.none,marginLeft:f.spacing.none}},Bar:{style:function(e){var t=e.$theme;return{width:n?n.toString():void 0,marginTop:f.spacing.none,marginBottom:f.spacing.none,marginRight:f.spacing.none,marginLeft:f.spacing.none,height:m[g],backgroundColor:t.colors.progressbarTrackFill,borderTopLeftRadius:f.spacing.twoXS,borderTopRightRadius:f.spacing.twoXS,borderBottomLeftRadius:f.spacing.twoXS,borderBottomRightRadius:f.spacing.twoXS}}},BarProgress:{style:function(e){e.$theme;return{backgroundColor:h?f.colors.primary:f.colors.blue70,borderTopLeftRadius:f.spacing.twoXS,borderTopRightRadius:f.spacing.twoXS,borderBottomLeftRadius:f.spacing.twoXS,borderBottomRightRadius:f.spacing.twoXS}}}};return Object(u.jsx)(c.a,{value:t,overrides:Object(d.e)(j,p)})}},1408:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(2),a=n(4),r=function(){function e(t,n,a,r){Object(i.a)(this,e),this.name=void 0,this.size=void 0,this.status=void 0,this.id=void 0,this.name=t,this.size=n,this.id=a,this.status=r}return Object(a.a)(e,[{key:"setStatus",value:function(t){return new e(this.name,this.size,this.id,t)}}]),e}()},1771:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ve}));var i,a=n(18),r=n(2),s=n(4),o=n(6),l=n(7),c=n(220),d=n.n(c),u=n(48),g=n.n(u),p=n(0),f=n.n(p),m=n(23),b=n(214),h=n(43);!function(e){e.Gigabyte="gb",e.Megabyte="mb",e.Kilobyte="kb",e.Byte="b"}(i||(i={}));var j=Object(h.h)()?1024:1e3,v=[i.Gigabyte,i.Megabyte,i.Kilobyte,i.Byte],x=function e(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(n||(n=i.Byte),a<0&&(a=0),t<0)throw new Error("Size must be greater than or equal to 0");var r=v.indexOf(n),s=t/j;return r&&t>j/2?e(s,v[r-1],a):"".concat(t.toFixed(a)).concat(n.toUpperCase())},O=n(132),y=n(133),S=n(63),w=n(5),F=n(1695),I=n(34),z=n(26),B=n(9);var M=Object(B.a)("section",{target:"exg6vvm15"})((function(e){var t=e.isDisabled,n=e.theme;return{display:"flex",alignItems:"center",padding:n.spacing.lg,backgroundColor:n.colors.secondaryBg,borderRadius:n.radii.md,":focus":{outline:"none",boxShadow:"0 0 0 1px ".concat(n.colors.primary)},color:t?n.colors.gray:n.colors.bodyText}}),""),k=Object(B.a)("div",{target:"exg6vvm14"})((function(e){e.theme;return{marginRight:"auto",alignItems:"center",display:"flex"}}),""),L=Object(B.a)("span",{target:"exg6vvm13"})((function(e){var t=e.theme;return{color:t.colors.darkenedBgMix100,marginRight:t.spacing.lg}}),""),R=Object(B.a)("span",{target:"exg6vvm12"})((function(e){return{marginBottom:e.theme.spacing.twoXS}}),""),C=Object(B.a)("div",{target:"exg6vvm11"})({name:"1fttcpj",styles:"display:flex;flex-direction:column"}),U=Object(B.a)("div",{target:"exg6vvm10"})((function(e){var t=e.theme;return{left:0,right:0,lineHeight:t.lineHeights.tight,paddingTop:t.spacing.md,paddingLeft:t.spacing.lg,paddingRight:t.spacing.lg}}),""),T=Object(B.a)("ul",{target:"exg6vvm9"})((function(e){e.theme;return{listStyleType:"none",marginBottom:0}}),""),X=Object(B.a)("li",{target:"exg6vvm8"})((function(e){var t=e.theme;return{margin:t.spacing.none,padding:t.spacing.none}}),""),E=Object(B.a)("div",{target:"exg6vvm7"})((function(e){return{display:"flex",alignItems:"baseline",flex:1,paddingLeft:e.theme.spacing.lg,overflow:"hidden"}}),""),D=Object(B.a)("div",{target:"exg6vvm6"})((function(e){var t=e.theme;return{marginRight:t.spacing.sm,marginBottom:t.spacing.twoXS,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}),""),A=Object(B.a)("div",{target:"exg6vvm5"})((function(e){return{display:"flex",alignItems:"center",marginBottom:e.theme.spacing.twoXS}}),""),P=Object(B.a)("span",{target:"exg6vvm4"})((function(e){return{marginRight:e.theme.spacing.twoXS}}),""),N=Object(B.a)("div",{target:"exg6vvm3"})((function(e){var t=e.theme;return{display:"flex",padding:t.spacing.twoXS,color:t.colors.darkenedBgMix100}}),""),V=Object(B.a)("small",{target:"exg6vvm2"})((function(e){var t=e.theme;return{color:t.colors.danger,fontSize:t.fontSizes.sm,height:t.fontSizes.sm,lineHeight:t.fontSizes.sm,display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),""),H=Object(B.a)("span",{target:"exg6vvm1"})({name:"0",styles:""}),G=function(e){var t;return t={},Object(z.a)(t,M,{display:"flex",flexDirection:"column",alignItems:"flex-start"}),Object(z.a)(t,k,{marginBottom:e.spacing.lg}),Object(z.a)(t,L,{display:"none"}),Object(z.a)(t,U,{paddingRight:e.spacing.lg}),Object(z.a)(t,A,{maxWidth:"inherit",flex:1,alignItems:"flex-start",marginBottom:e.spacing.sm}),Object(z.a)(t,D,{width:e.sizes.full}),Object(z.a)(t,E,{flexDirection:"column"}),Object(z.a)(t,V,{height:"auto",whiteSpace:"initial"}),Object(z.a)(t,H,{display:"none"}),Object(z.a)(t,X,{margin:e.spacing.none,padding:e.spacing.none}),t},W=Object(B.a)("div",{target:"exg6vvm0"})((function(e){var t=e.theme;return t.inSidebar?G(t):Object(z.a)({},"@media (max-width: ".concat(t.breakpoints.sm,")"),G(t))}),""),q=n(1762),J=n(56),K=n(339),$=n(1),Y=function(e){var t=e.multiple,n=e.acceptedExtensions,a=e.maxSizeBytes;return Object($.jsxs)(k,{children:[Object($.jsx)(L,{children:Object($.jsx)(J.b,{content:q.a,size:"threeXL"})}),Object($.jsxs)(C,{children:[Object($.jsxs)(R,{children:["Drag and drop file",t?"s":""," here"]}),Object($.jsxs)(K.a,{children:["Limit ".concat(x(a,i.Byte,0)," per file"),n.length?" \u2022 ".concat(n.join(", ").replace(/\./g,"").toUpperCase()):null]})]})]})},_=function(e){var t=e.onDrop,n=e.multiple,i=e.acceptedExtensions,a=e.maxSizeBytes,r=e.disabled,s=e.label;return Object($.jsx)(F.a,{onDrop:t,multiple:n,accept:i.length?i:void 0,maxSize:a,disabled:r,children:function(e){var t=e.getRootProps,o=e.getInputProps;return Object($.jsxs)(M,Object(w.a)(Object(w.a)({},t()),{},{"data-testid":"stFileUploadDropzone",isDisabled:r,"aria-label":s,children:[Object($.jsx)("input",Object(w.a)({},o())),Object($.jsx)(Y,{multiple:n,acceptedExtensions:i,maxSizeBytes:a}),Object($.jsx)(I.d,{kind:I.b.SECONDARY,disabled:r,size:I.c.SMALL,children:"Browse files"})]}))}})},Q=n(17),Z=n(79),ee=n(108),te=n.n(ee),ne=n(1763),ie=n(1205),ae=Object(B.a)("div",{target:"e1f8s2qs1"})((function(e){var t=e.theme;return{display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:t.spacing.twoXS,marginBottom:t.spacing.twoXS}}),""),re=Object(B.a)("div",{target:"e1f8s2qs0"})((function(e){return{display:"flex",alignItems:"center",justifyContent:"center",color:e.theme.colors.fadedText40}}),""),se=function(e){var t=e.className,n=e.currentPage,i=e.totalPages,a=e.onNext,r=e.onPrevious;return Object($.jsxs)(ae,{className:t,children:[Object($.jsx)(K.a,{children:"Showing page ".concat(n," of ").concat(i)}),Object($.jsxs)(re,{children:[Object($.jsx)(I.d,{onClick:r,kind:I.b.MINIMAL,children:Object($.jsx)(J.b,{content:ne.a,size:"xl"})}),Object($.jsx)(I.d,{onClick:a,kind:I.b.MINIMAL,children:Object($.jsx)(J.b,{content:ie.a,size:"xl"})})]})]})},oe=n(439),le=function(e,t){return Math.ceil(e.length/t)},ce=function(e){return te()((function(t){var n=t.pageSize,i=t.items,a=t.resetOnAdd,r=Object(Z.a)(t,["pageSize","items","resetOnAdd"]),s=Object(p.useState)(0),o=Object(Q.a)(s,2),l=o[0],c=o[1],d=Object(p.useState)(le(i,n)),u=Object(Q.a)(d,2),g=u[0],f=u[1],m=Object(oe.b)(i);Object(p.useEffect)((function(){m&&m.length!==i.length&&f(le(i,n)),m&&m.length<i.length?a&&c(0):l+1>=g&&c(g-1)}),[i,l,n,m,a,g]);var b=i.slice(l*n,l*n+n);return Object($.jsxs)($.Fragment,{children:[Object($.jsx)(e,Object(w.a)({items:b},r)),i.length>n?Object($.jsx)(se,{className:"streamlit-paginator",pageSize:n,totalPages:g,currentPage:l+1,onNext:function(){c(Math.min(l+1,g-1))},onPrevious:function(){c(Math.max(0,l-1))}}):null]})}),e)},de=n(1764),ue=n(1765),ge=n(1766),pe=n(1321),fe=function(e){var t=e.fileInfo;return"uploading"===t.status.type?Object($.jsx)(pe.b,{value:t.status.progress,size:pe.a.SMALL,overrides:{Bar:{style:{marginLeft:0,marginTop:"4px"}}}}):"error"===t.status.type?Object($.jsxs)(V,{children:[Object($.jsx)(P,{"data-testid":"stUploadedFileErrorMessage",children:t.status.errorMessage}),Object($.jsx)(H,{children:Object($.jsx)(J.b,{content:de.a,size:"lg"})})]}):"uploaded"===t.status.type?Object($.jsx)(K.a,{children:x(t.size,i.Byte)}):null},me=function(e){var t=e.fileInfo,n=e.onDelete;return Object($.jsxs)(A,{className:"uploadedFile",children:[Object($.jsx)(N,{children:Object($.jsx)(J.b,{content:ue.a,size:"twoXL"})}),Object($.jsxs)(E,{className:"uploadedFileData",children:[Object($.jsx)(D,{className:"uploadedFileName",title:t.name,children:t.name}),Object($.jsx)(fe,{fileInfo:t})]}),Object($.jsx)("div",{"data-testid":"fileDeleteBtn",children:Object($.jsx)(I.d,{onClick:function(){return n(t.id)},kind:I.b.MINIMAL,children:Object($.jsx)(J.b,{content:ge.a,size:"lg"})})})]})},be=ce((function(e){var t=e.items,n=e.onDelete;return Object($.jsx)(T,{children:t.map((function(e){return Object($.jsx)(X,{children:Object($.jsx)(me,{fileInfo:e,onDelete:n})},e.id)}))})})),he=function(e){return Object($.jsx)(U,{children:Object($.jsx)(be,Object(w.a)({},e))})},je=n(1408),ve=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).formClearHelper=new b.b,s.localFileIdCounter=1,s.componentDidUpdate=function(e){var t=s.props,n=t.element,i=t.widgetMgr;if(e.disabled!==s.props.disabled&&s.props.disabled)return s.reset(),void i.setFileUploaderStateValue(n,new m.h,{fromUi:!1});if("ready"===s.status){var a=s.createWidgetValue();if(void 0!==a){var r=i.getFileUploaderStateValue(n);g.a.isEqual(a,r)||i.setFileUploaderStateValue(n,a,{fromUi:!0})}}},s.reset=function(){s.setState({files:[]})},s.dropHandler=function(e,t){var n=s.props.element.multipleFiles;if(!n&&0===e.length&&t.length>1){var i=t.findIndex((function(e){return 1===e.errors.length&&"too-many-files"===e.errors[0].code}));i>=0&&(e.push(t[i].file),t.splice(i,1))}if(!n&&e.length>0&&s.state.files.length>0&&s.removeFile(s.state.files[0].id),e.forEach(s.uploadFile),t.length>0){var a=t.map((function(e){var t=e.file;return new je.a(t.name,t.size,s.nextLocalFileId(),{type:"error",errorMessage:s.getErrorMessage(e.errors[0].code,e.file)})}));s.addFiles(a)}},s.uploadFile=function(e){var t=d.a.CancelToken.source(),n=new je.a(e.name,e.size,s.nextLocalFileId(),{type:"uploading",cancelToken:t,progress:1});s.addFile(n),s.props.uploadClient.uploadFile(s.props.element,e,(function(e){return s.onUploadProgress(e,n.id)}),t.token).then((function(e){return s.onUploadComplete(n.id,e)})).catch((function(e){d.a.isCancel(e)||s.updateFile(n.id,n.setStatus({type:"error",errorMessage:e?e.toString():"Unknown error"}))}))},s.onUploadComplete=function(e,t){s.setState((function(e){return{newestServerFileId:Math.max(e.newestServerFileId,t)}}));var n=s.getFile(e);null!=n&&"uploading"===n.status.type&&s.updateFile(n.id,n.setStatus({type:"uploaded",serverFileId:t}))},s.getErrorMessage=function(e,t){switch(e){case"file-too-large":return"File must be ".concat(x(s.maxUploadSizeInBytes,i.Byte)," or smaller.");case"file-invalid-type":return"".concat(t.type," files are not allowed.");case"file-too-small":return"File size is too small.";case"too-many-files":return"Only one file is allowed.";default:return"Unexpected error. Please try again."}},s.deleteFile=function(e){var t=s.getFile(e);null!=t&&("uploading"===t.status.type&&t.status.cancelToken.cancel(),s.removeFile(e))},s.addFile=function(e){s.setState((function(t){return{files:[].concat(Object(a.a)(t.files),[e])}}))},s.addFiles=function(e){s.setState((function(t){return{files:[].concat(Object(a.a)(t.files),Object(a.a)(e))}}))},s.removeFile=function(e){s.setState((function(t){return{files:t.files.filter((function(t){return t.id!==e}))}}))},s.getFile=function(e){return s.state.files.find((function(t){return t.id===e}))},s.updateFile=function(e,t){s.setState((function(n){return{files:n.files.map((function(n){return n.id===e?t:n}))}}))},s.onUploadProgress=function(e,t){var n=s.getFile(t);if(null!=n&&"uploading"===n.status.type){var i=Math.round(100*e.loaded/e.total);n.status.progress!==i&&s.updateFile(t,n.setStatus({type:"uploading",cancelToken:n.status.cancelToken,progress:i}))}},s.onFormCleared=function(){s.setState({files:[]},(function(){var e=s.createWidgetValue();null!=e&&s.props.widgetMgr.setFileUploaderStateValue(s.props.element,e,{fromUi:!0})}))},s.state=s.initialValue,s}return Object(s.a)(n,[{key:"initialValue",get:function(){var e=this,t={files:[],newestServerFileId:0},n=this.props,i=n.widgetMgr,a=n.element,r=i.getFileUploaderStateValue(a);if(null==r)return t;var s=r.maxFileId,o=r.uploadedFileInfo;return null==s||0===s||null==o?t:{files:o.map((function(t){var n=t.name,i=t.size,a=t.id;return new je.a(n,i,e.nextLocalFileId(),{type:"uploaded",serverFileId:a})})),newestServerFileId:Number(s)}}},{key:"componentWillUnmount",value:function(){this.formClearHelper.disconnect()}},{key:"maxUploadSizeInBytes",get:function(){return function(e,t,n){if(e<0)throw Error("Size must be 0 or greater");var i=v.findIndex((function(e){return e===t})),a=v.findIndex((function(e){return e===n}));if(-1===i||-1===a)throw Error("Unexpected byte unit provided");if(i===a)return e;var r=Math.abs(i-a),s=Math.pow(j,r);return i>a?e/s:e*s}(this.props.element.maxUploadSizeMb,i.Megabyte,i.Byte)}},{key:"status",get:function(){return this.state.files.some((function(e){return"uploading"===e.status.type}))?"updating":"ready"}},{key:"createWidgetValue",value:function(){if(0!==this.state.newestServerFileId){var e=this.state.files.filter((function(e){return"uploaded"===e.status.type})).map((function(e){var t=e.name,n=e.size,i=e.status;return new m.v({id:i.serverFileId,name:t,size:n})}));return new m.h({maxFileId:this.state.newestServerFileId,uploadedFileInfo:e})}}},{key:"render",value:function(){var e,t=this.state.files,n=this.props,i=n.element,a=n.disabled,r=n.widgetMgr,s=i.type;this.formClearHelper.manageFormClearListener(r,i.formId,this.onFormCleared);var o=t.slice().reverse();return Object($.jsxs)(W,{"data-testid":"stFileUploader",children:[Object($.jsx)(O.d,{label:i.label,disabled:a,labelVisibility:Object(h.k)(null===(e=i.labelVisibility)||void 0===e?void 0:e.value),children:i.help&&Object($.jsx)(O.b,{children:Object($.jsx)(y.a,{content:i.help,placement:S.b.TOP_RIGHT})})}),Object($.jsx)(_,{onDrop:this.dropHandler,multiple:i.multipleFiles,acceptedExtensions:s,maxSizeBytes:this.maxUploadSizeInBytes,label:i.label,disabled:a}),o.length>0&&Object($.jsx)(he,{items:o,pageSize:3,onDelete:this.deleteFile,resetOnAdd:!0})]})}},{key:"nextLocalFileId",value:function(){return this.localFileIdCounter++}}]),n}(f.a.PureComponent)}}]);