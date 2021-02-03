(this["webpackJsonpbundleviewer.octoprint.org"]=this["webpackJsonpbundleviewer.octoprint.org"]||[]).push([[0],{180:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),c=n.n(o),i=n(14),l=n(13),s=n(227),u=n(224),d=n(122),p=n(239),j=n(240),b=n(237),h=n(238),f=n(241),g=n(182),x=n(245),m=n(121),O=n.n(m),w=n(120),v=n.n(w),y=n(243),k=n(235),C=n(236),N=n(82),S=n(247),R=n(100),I=n.n(R),z=n(99),G=n.n(z),L=n(4);function B(e){var t=Object(a.useState)(e.darkMode),n=Object(i.a)(t,2),r=n[0],o=n[1];return Object(L.jsx)(S.a,{title:"Toggle dark mode",children:Object(L.jsx)(g.a,{onClick:function(){e.onChange(!r),o(!r)},color:"inherit",children:r?Object(L.jsx)(G.a,{}):Object(L.jsx)(I.a,{})})})}var P=n(11),_=n(248),E=n(101),T=n.n(E),U=n(79),A=n.n(U),D=Object(u.a)((function(e){var t,n;return{grow:{flexGrow:1},url:(t={position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(P.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(P.c)(e.palette.common.white,.25)}},Object(l.a)(t,e.breakpoints.up("md"),{marginRight:e.spacing(2),marginLeft:e.spacing(2)}),Object(l.a)(t,"flexGrow",1),t),urlIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:(n={padding:e.spacing(1,1,1,1)},Object(l.a)(n,e.breakpoints.up("md"),{paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)")}),Object(l.a)(n,"transition",e.transitions.create("width")),Object(l.a)(n,"width","100%"),n)}}));function F(e){var t=D(),n=Object(a.useState)(e.url),r=Object(i.a)(n,2),o=r[0],c=r[1],l=Object(a.useState)(e.filename?"upload":"url"),s=Object(i.a)(l,1)[0];return Object(L.jsxs)("div",{className:t.url,children:[Object(L.jsx)(x.a,{mdDown:!0,children:Object(L.jsx)("div",{className:t.urlIcon,children:e.filename?Object(L.jsx)(A.a,{}):Object(L.jsx)(T.a,{})})}),Object(L.jsx)(_.a,{placeholder:"URL...",classes:{root:t.inputRoot,input:t.inputInput},onChange:function(e){"url"===s&&c(e.target.value)},onKeyDown:function(t){"url"===s&&"Enter"===t.key&&e.handleUrlChange(o)},defaultValue:"upload"===s?e.filename:e.url,inputProps:{readOnly:"upload"===s}})]})}var q=n(231),H=n(242),M=n(246),W=n(230),Z=n(229),J=n(228),Q=n(102),K=n.n(Q);function V(e){var t=Object(N.b)().enqueueSnackbar,n=Object(a.useState)(!1),r=Object(i.a)(n,2),o=r[0],c=r[1],l=window.location.origin+window.location.pathname+"?url="+encodeURIComponent(e.url),s=function(){c(!1)};return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(S.a,{title:"Get shareable link",children:Object(L.jsx)(g.a,{onClick:function(){c(!0)},color:"inherit",children:Object(L.jsx)(K.a,{})})}),Object(L.jsxs)(M.a,{open:o,onClose:s,fullWidth:!0,children:[Object(L.jsx)(J.a,{children:"Shareable link"}),Object(L.jsx)(Z.a,{children:Object(L.jsx)(H.a,{value:l,InputProps:{readOnly:!0},onFocus:function(e){e.target.select()},fullWidth:!0})}),Object(L.jsxs)(W.a,{children:[navigator.share?Object(L.jsx)(q.a,{onClick:function(){navigator.share&&(navigator.share({title:document.title,url:l}),s())},children:"Share"}):null,navigator.clipboard?Object(L.jsx)(q.a,{onClick:function(){navigator.clipboard&&(navigator.clipboard.writeText(l),t("URL copied to clipboard!"),s())},children:"Copy"}):null,Object(L.jsx)(q.a,{onClick:s,children:"Close"})]})]})]})}var X=n(249),Y=n(233),$=n(234),ee=n(53),te=n.n(ee),ne=n(90),ae=n(103),re=n.n(ae),oe=n(104),ce=n.n(oe),ie=n(105),le=n.n(ie),se=n(232),ue=Object(u.a)((function(e){var t;return{grow:{flexGrow:1},query:(t={position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(P.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(P.c)(e.palette.common.white,.25)}},Object(l.a)(t,e.breakpoints.up("md"),{marginRight:e.spacing(2),marginLeft:e.spacing(2)}),Object(l.a)(t,"flexGrow",1),Object(l.a)(t,"marginTop",e.spacing(2)),Object(l.a)(t,"marginBottom",e.spacing(2)),t),inputRoot:{color:"inherit",width:"100%"},inputInput:{padding:e.spacing(1),transition:e.transitions.create("width"),width:"100%"},result:{color:e.palette.secondary,fontSize:e.typography.pxToRem(12)}}}));function de(e){var t=e.pos,n=e.count,o=ue(),c=Object(a.useState)(e.query),l=Object(i.a)(c,2),s=l[0],u=l[1],d=r.a.createRef(),p=function(){e.handlePerformQuery&&e.handlePerformQuery(s)},j=function(){u(""),d.current.value="",e.onCancel&&e.onCancel()},b=function(){return Object(L.jsx)(se.a,{position:"start",children:Object(L.jsx)(g.a,{onClick:p,disabled:""===s,size:"small",children:Object(L.jsx)(re.a,{})})})},h=function(){return Object(L.jsxs)(se.a,{position:"end",children:[n?Object(L.jsxs)("span",{className:o.result,children:[t," / ",n]}):null,Object(L.jsx)(g.a,{onClick:e.onPrev,disabled:0===n||t<=1,size:"small",children:Object(L.jsx)(ce.a,{})}),Object(L.jsx)(g.a,{onClick:e.onNext,disabled:0===n||t>=n,size:"small",children:Object(L.jsx)(te.a,{})}),Object(L.jsx)(g.a,{onClick:j,disabled:""===s,size:"small",children:Object(L.jsx)(le.a,{})})]})};return Object(L.jsx)("div",{className:o.query,children:Object(L.jsx)(_.a,{placeholder:"Search...",classes:{root:o.inputRoot,input:o.inputInput},onChange:function(t){u(t.target.value),e.handleQueryChange&&e.handleQueryChange(s)},onKeyDown:function(e){"Enter"===e.key&&p()},defaultValue:e.query,startAdornment:Object(L.jsx)(b,{}),endAdornment:Object(L.jsx)(h,{}),inputRef:d})})}var pe=n(125);function je(e){var t=e.lines,n=t.length,o=e.query,c=o.toLowerCase(),i=e.scrollTo,s=r.a.createRef();Object(a.useEffect)((function(){i>-1&&s.current.scrollToItem(i,"center")}),[s,i]);var d,p=Object(u.a)((function(e){return{log:{flexGrow:1},pre:Object(l.a)({margin:0,"font-family":"'JetBrains Mono', 'Droid Sans Mono', monospace"},e.breakpoints.down("md"),{fontSize:e.typography.pxToRem(12)}),linewrap:{'&[data-matched="true"]':{"background-color":"rgba(255, 255, 0, .2)"}},line:{paddingLeft:e.spacing(1),"&::before":{content:"attr(data-linenumber)",display:"inline-block",width:"".concat(n.toString().length,"ch"),"text-align":"right","margin-right":"1em",color:e.palette.text.disabled},'&[data-loglevel="DEBUG"]':{color:e.palette.text.secondary},'&[data-loglevel="WARNING"]':{color:e.palette.warning.main},'&[data-loglevel="ERROR"]':{color:e.palette.error.main},'&[data-stream="stdin"]':{color:e.palette.info.main},'&[data-stream="stderr"]':{color:e.palette.error.main}}}}))(),j=function(e){switch(e.charAt(24)){case" ":return"stdin";case">":return"stdout";case"!":return"stderr";default:return"plain"}},b=function(e){return o&&e&&e.toLowerCase().includes(c)};switch(e.language){case"log":d=function(e){var n,a=e.index,r=e.style;return Object(L.jsx)("span",{"data-matched":b(t[a]),style:r,className:p.linewrap,children:Object(L.jsx)("span",{"data-linenumber":a+1,"data-loglevel":(n=t[a],n.split(" ")[5]),className:p.line,children:t[a]})})};break;case"cli":d=function(e){var n=e.index,a=e.style;return Object(L.jsx)("span",{"data-matched":b(t[n]),style:a,children:Object(L.jsx)("span",{"data-linenumber":n+1,"data-stream":j(t[n]),className:p.line,children:t[n]})})};break;default:d=function(e){var n=e.index,a=e.style;return Object(L.jsx)("span",{"data-matched":b(t[n]),style:a,children:Object(L.jsx)("span",{"data-linenumber":n+1,className:p.line,children:t[n]})})}}return Object(L.jsx)("code",{className:p.log,children:Object(L.jsx)("pre",{className:p.pre,children:Object(L.jsx)(pe.a,{height:500,itemCount:n,itemSize:20,style:{overflow:"scroll"},ref:s,children:d})})})}var be=n(106),he=n.n(be),fe=n(87),ge=n.n(fe);function xe(e){var t=e.log,n=e.content,r=n.trim().split("\n"),o=r.length,c=Object(a.useState)(""),s=Object(i.a)(c,2),d=s[0],p=s[1],j=Object(a.useState)(0),b=Object(i.a)(j,2),h=b[0],f=b[1],g=Object(a.useState)(0),x=Object(i.a)(g,2),m=x[0],O=x[1],w=Object(a.useState)([]),v=Object(i.a)(w,2),y=v[0],k=v[1],C=Object(u.a)((function(e){return{background:{},accordionbar:Object(l.a)({display:"flex",flexGrow:1,alignItems:"center"},e.breakpoints.down("md"),{flexWrap:"wrap"}),accordiondetails:{display:"flex",flexGrow:1,flexDirection:"column"},grow:{flexGrow:1},icon:{padding:e.spacing(0,1),fontSize:"1.5rem"},secondaryHeading:Object(l.a)({fontSize:e.typography.pxToRem(12),color:e.palette.text.secondary,padding:e.spacing(0,1),textAlign:"right"},e.breakpoints.down("md"),{textAlign:"left",padding:e.spacing(0,0)}),title:Object(l.a)({flexGrow:1,alignItems:"center"},e.breakpoints.down("md"),{flexBasis:"100%"}),info:Object(l.a)({},e.breakpoints.down("md"),{flexBasis:"100%"})}}))(),N=function(){if(y.length){var e=m<y.length-1?m+1:0;f(y[e]),O(e)}},S="serial.log"===t&&1===o&&r[0].includes("serial.log is currently not enabled");return Object(L.jsxs)(X.a,{children:[Object(L.jsx)(Y.a,{expandIcon:Object(L.jsx)(te.a,{}),"aria-controls":"panel-log-"+e.index+"-content",id:"panel-log-"+e.index+"-header",children:Object(L.jsxs)("div",{className:C.accordionbar,children:[Object(L.jsx)("div",{className:C.title,children:Object(L.jsxs)(ne.a,{className:C.heading,style:{display:"flex",alignItems:"center"},children:[t,S?Object(L.jsx)(he.a,{className:C.icon,size:"1.5em"}):null]})}),Object(L.jsxs)("div",{className:C.info,children:[Object(L.jsx)(ne.a,{className:C.secondaryHeading,children:ge()(n.length)+" "+(1===n.length?"char":"chars")}),Object(L.jsx)(ne.a,{className:C.secondaryHeading,children:ge()(o)+" "+(1===o?"line":"lines")})]})]})}),Object(L.jsxs)($.a,{className:C.accordiondetails,children:[Object(L.jsx)(de,{className:C.grow,pos:m+1,count:y.length,onNext:N,onPrev:function(){if(y.length){var e=m>0?m-1:y.length-1;f(y[e]),O(e)}},onCancel:function(){k([]),O(0),p("")},handlePerformQuery:function(e){if(e)if(console.log("Starting query:",e),e!==d){console.log("... calculate matches");var t=e.toLowerCase(),n=r.reduce((function(e,n,a){return n.toLowerCase().includes(t)&&e.push(a),e}),[]);n.length&&f(n[0]),k(n),O(0),p(e),console.log("Indices:",n,", cursor:",0)}else N()}}),Object(L.jsx)(je,{lines:r,query:d,scrollTo:h,language:e.language})]})]},t)}var me=n(107),Oe=n(124),we=n(108),ve=n.n(we),ye=n(109),ke=n.n(ye),Ce=n(110),Ne=n.n(Ce),Se=Object(u.a)((function(e){return{accordionbar:Object(l.a)({display:"flex",flexGrow:1,alignItems:"center"},e.breakpoints.down("md"),{flexWrap:"wrap"}),grow:{flexGrow:1},icon:{padding:e.spacing(0,1),fontSize:"1.5rem"},secondaryHeading:Object(l.a)({fontSize:e.typography.pxToRem(12),color:e.palette.text.secondary,padding:e.spacing(0,1),textAlign:"right"},e.breakpoints.down("md"),{textAlign:"left",padding:e.spacing(0,0)}),title:Object(l.a)({flexGrow:1,alignItems:"center"},e.breakpoints.down("md"),{flexBasis:"100%"}),info:Object(l.a)({},e.breakpoints.down("md"),{flexBasis:"100%"})}}));function Re(e){var t,n=e.info.split("\n").filter((function(e){return""!==e.trim()})).map((function(e){var t=e.split(":"),n=Object(Oe.a)(t);return{key:n[0],value:n.slice(1)}})),a={},r=Object(me.a)(n);try{for(r.s();!(t=r.n()).done;){var o=t.value;a[o.key]=o.value}}catch(p){r.e(p)}finally{r.f()}var c=Se(),i=function(e,t){var n=a[t];return n?Object(L.jsx)(ne.a,{className:c.secondaryHeading,children:e+" "+n}):null},l=function(e,t){return a[e]&&t(a[e])},s=l("octoprint.safe_mode",(function(e){return"true"===e})),u=l("env.plugins.pi_support.throttle_state",(function(e){return"0x0"!==e})),d=l("printer.firmware",(function(e){return e.includes("Marlin bugfix-")}));return Object(L.jsxs)(X.a,{defaultExpanded:!0,children:[Object(L.jsx)(Y.a,{expandIcon:Object(L.jsx)(te.a,{}),"aria-controls":"panel-sysinfo-content",id:"panel-sysinfo-header",children:Object(L.jsxs)("div",{className:c.accordionbar,children:[Object(L.jsx)("div",{className:c.title,children:Object(L.jsxs)(ne.a,{className:c.heading,style:{display:"flex",alignItems:"center"},children:["System Information",s?Object(L.jsx)(Ne.a,{className:c.icon,size:"1.5em"}):null,u?Object(L.jsx)(ve.a,{className:c.icon,size:"1.5em"}):null,d?Object(L.jsx)(ke.a,{className:c.icon,size:"1.5em"}):null]})}),Object(L.jsxs)("div",{className:c.info,children:[i("OctoPrint","octoprint.version"),i("Python","env.python.version"),i("OctoPi","env.plugins.pi_support.octopi_version"),i("Firmware","printer.firmware")]})]})}),Object(L.jsx)($.a,{children:Object(L.jsx)("div",{className:c.list,children:n.map((function(e,t){return Object(L.jsxs)("div",{children:[Object(L.jsx)("strong",{children:e.key}),": ",e.value]},e.key)}))})})]})}function Ie(e){return Object(L.jsxs)("div",{children:[Object(L.jsx)(Re,{info:e.bundle.systeminfo}),Object(L.jsx)("div",{children:e.bundle.logs.map((function(e,t){return Object(L.jsx)(xe,{log:e.log,content:e.content,language:e.language,index:t})}))})]})}var ze=n(123);function Ge(e){console.log("Rendering NothingChanged...");return Object(L.jsx)("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"},children:Object(L.jsx)(ze.a,{style:{"flex-basis":"100%"},dropzoneText:"Enter an URL for a bundle above and press Enter, or drag and drop a file here or click to upload one",onChange:function(t){console.log("Entered NothingLoaded.handleChange..."),t.length>0&&e.onUpload(t[0]),console.log("Exiting NothingLoaded.handleChange...")},filesLimit:1,acceptedFiles:[".zip"],maxFileSize:3e7,showPreviewsInDropzone:!1,showAlerts:!1})})}var Le=n(24),Be=n.n(Le),Pe=n(42),_e=n(119),Ee=n.n(_e);function Te(e){return Ue.apply(this,arguments)}function Ue(){return(Ue=Object(Pe.a)(Be.a.mark((function e(t){var n;return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{mode:"cors"});case 2:if(n=e.sent,console.log(n),n.ok){e.next=6;break}throw new Error("Could not load file from ".concat(t,": ").concat(n.status));case 6:return e.next=8,n.blob();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ae(){return(Ae=Object(Pe.a)(Be.a.mark((function e(t){var n;return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Te(t);case 2:return n=e.sent,e.next=5,De(n);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function De(e){return Fe.apply(this,arguments)}function Fe(){return(Fe=Object(Pe.a)(Be.a.mark((function e(t){return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ee.a.loadAsync(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function qe(){return(qe=Object(Pe.a)(Be.a.mark((function e(t,n){return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.file(n);case 2:return e.t0=e.sent,e.abrupt("return",null!==e.t0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function He(){return(He=Object(Pe.a)(Be.a.mark((function e(t,n,a){return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=a||"blob",e.next=3,t.file(n).async(a);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Me={loadRemote:Te,loadZip:De,loadRemoteZip:function(e){return Ae.apply(this,arguments)},containsFile:function(e,t){return qe.apply(this,arguments)},getFileContents:function(e,t,n){return He.apply(this,arguments)}},We={"octoprint.log":"log","plugin_softwareupdate_console.log":"cli","plugin_pluginmanager_console.log":"cli"};function Ze(){return(Ze=Object(Pe.a)(Be.a.mark((function e(t){var n,a,r,o,c,i,l,s,u,d,p;return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=["octoprint.log","serial.log","terminal.txt","plugin_softwareupdate_console.log","plugin_pluginmanager_console.log"],e.next=3,Me.getFileContents(t,"systeminfo.txt","string");case 3:if(a=e.sent){e.next=6;break}throw new Error("No systeminfo.txt found");case 6:r={},o=0,c=n;case 8:if(!(o<c.length)){e.next=22;break}return i=c[o],e.prev=10,e.next=13,Me.getFileContents(t,i,"string");case 13:r[i]=e.sent,e.next=19;break;case 16:e.prev=16,e.t0=e.catch(10),console.log("No ".concat(i," in zip..."));case 19:o++,e.next=8;break;case 22:for(l=[],s=0,u=n;s<u.length;s++)d=u[s],r[d]&&(p=We[d]||"plain",l.push({log:d,content:r[d],language:p}));return e.abrupt("return",{systeminfo:a,logs:l});case 25:case"end":return e.stop()}}),e,null,[[10,16]])})))).apply(this,arguments)}var Je={loadBundle:function(e){return Ze.apply(this,arguments)},defaultBundle:{systeminfo:"",logs:[]}},Qe=Object(u.a)((function(e){var t;return{root:{display:"flex",overflow:"auto"},grow:{flexGrow:1},appBar:{},toolbar:Object(l.a)({},e.breakpoints.down("md"),{"justify-content":"flex-end","flex-wrap":"wrap"}),urlbar:Object(l.a)({flexGrow:1},e.breakpoints.down("md"),{"flex-basis":"100%",order:99,paddingBottom:e.spacing(2)}),title:{"justify-item":"left"},offset:e.mixins.toolbar,content:Object(l.a)({flexGrow:1,overflow:"auto","padding-top":e.mixins.toolbar.minHeight},e.breakpoints.down("md"),{"padding-top":2*e.mixins.toolbar.minHeight}),container:(t={paddingTop:e.spacing(4)},Object(l.a)(t,e.breakpoints.down("md"),{paddingTop:0}),Object(l.a)(t,"paddingBottom",e.spacing(4)),t)}}));function Ke(e){var t=function(e,t){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(U){return console.log(U),t}})),r=Object(i.a)(n,2),o=r[0],c=r[1];return[o,function(t){try{var n=t instanceof Function?t(o):t;c(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(U){console.log(U)}}]}("enableDarkMode",Object(s.a)("(prefers-color-scheme: dark)")),n=Object(i.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(e.url),l=Object(i.a)(c,2),u=l[0],m=l[1],w=Object(a.useState)(""),S=Object(i.a)(w,2),R=S[0],I=S[1],z=Object(a.useState)(Je.defaultBundle),G=Object(i.a)(z,2),P=G[0],_=G[1],E=Object(a.useState)(!1),T=Object(i.a)(E,2),U=T[0],A=T[1],D=Object(a.useState)(!1),q=Object(i.a)(D,2),H=q[0],M=q[1],W=r?"dark":"light",Z=Object(d.a)({palette:{type:W}}),J=function(){o(!r)};Object(a.useEffect)((function(){Q(e.url)}),[]);var Q=function(e){if(e){A(!1),M(!0),m(e),ee(e),I("");var t=function(e){return e.match(/^https:\/\/github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+\/files\//)?e.replace("https://github.com","https://bundleviewer.octoprint.org/bundles"):e.match(/^https:\/\/community\.octoprint\.org\/uploads\/short-url\//)?e.replace("https://community.octoprint.org/uploads/short-url","https://bundleviewer.octoprint.org/bundles/forum"):e}(e);Me.loadRemoteZip(t).then(X).catch(Y)}else $()},K=function(e){A(!1),M(!0),I(e.name),m(""),Me.loadZip(e).then(X).catch(Y)},X=function(e){Je.loadBundle(e).then((function(e){_(e),M(!1),console.log("Loading complete")})).catch(Y)},Y=function(e){console.log(e),A(!0)},$=function(){m(""),I(""),A(!1),M(!1),_(Je.defaultBundle),ee()},ee=function(e){var t=new URL(window.location);e?t.searchParams.set("url",e):t.searchParams.delete("url"),window.history.replaceState({},"",t)},te=Qe(),ne=function(){return U?(console.log("Rendering error screen"),Object(L.jsxs)(y.a,{severity:"error",children:[Object(L.jsx)(k.a,{children:"Error"}),"Could not load bundle, is it accessible and an OctoPrint SystemInfo Bundle zipfile?"]})):H?(console.log("Rendering loading screen"),Object(L.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(L.jsx)(C.a,{})})):P.systeminfo?(console.log("Rendering bundle"),Object(L.jsx)(Ie,{bundle:P})):(console.log("Rendering empty"),Object(L.jsx)(Ge,{onUpload:K}))},ae=function(){return Object(L.jsx)(b.a,{className:te.appBar,children:Object(L.jsxs)(h.a,{className:te.toolbar,children:[Object(L.jsx)(g.a,{onClick:$,color:"inherit",children:Object(L.jsx)(v.a,{})}),Object(L.jsx)(x.a,{mdUp:!0,children:Object(L.jsx)("div",{className:te.grow})}),Object(L.jsx)("div",{className:te.urlbar,children:Object(L.jsx)(F,{url:u,filename:R,handleUrlChange:Q})}),u?Object(L.jsx)(V,{url:u}):null,Object(L.jsx)(B,{darkMode:r,onChange:J}),Object(L.jsx)(x.a,{xsDown:!0,children:Object(L.jsx)(g.a,{href:"https://github.com/OctoPrint/bundleviewer.octoprint.org",target:"_blank",color:"inherit",children:Object(L.jsx)(O.a,{})})})]})})};return Object(L.jsx)(p.a,{theme:Z,children:Object(L.jsx)(N.a,{children:Object(L.jsxs)("div",{className:te.root,style:{display:"flex"},children:[Object(L.jsx)(j.a,{}),Object(L.jsx)(ae,{}),Object(L.jsx)("main",{className:te.content,children:Object(L.jsx)(f.a,{maxWidth:"lg",className:te.container,children:Object(L.jsx)(ne,{})})})]})})})}var Ve=window.location.search,Xe=new URLSearchParams(Ve).get("url","");console.log("URL",Xe),c.a.render(Object(L.jsx)(Ke,{url:null==Xe?"":Xe}),document.querySelector("#root"))}},[[180,1,2]]]);
//# sourceMappingURL=main.9d9b9d1f.chunk.js.map