(this["webpackJsonpbundleviewer.octoprint.org"]=this["webpackJsonpbundleviewer.octoprint.org"]||[]).push([[0],{166:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(0),o=n(12),c=n.n(o),i=n(18),l=n(29),s=n(212),u=n(209),d=n(112),p=n(223),j=n(224),b=n(221),h=n(222),g=n(225),f=n(168),x=n(229),O=n(111),m=n.n(O),v=n(110),y=n.n(v),w=n(227),k=n(219),N=n(220),C=n(81),S=n(231),R=n(98),_=n.n(R),I=n(97),E=n.n(I);function L(e){var t=Object(r.useState)(e.darkMode),n=Object(i.a)(t,2),o=n[0],c=n[1];return Object(a.jsx)(S.a,{title:"Toggle dark mode",children:Object(a.jsx)(f.a,{onClick:function(){e.onChange(!o),c(!o)},color:"inherit",children:o?Object(a.jsx)(E.a,{}):Object(a.jsx)(_.a,{})})})}var U=n(11),B=n(232),z=n(99),G=n.n(z),P=n(77),F=n.n(P),D=Object(u.a)((function(e){var t,n;return{grow:{flexGrow:1},url:(t={position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(U.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(U.c)(e.palette.common.white,.25)}},Object(l.a)(t,e.breakpoints.up("md"),{marginRight:e.spacing(2),marginLeft:e.spacing(2)}),Object(l.a)(t,"flexGrow",1),t),urlIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:(n={padding:e.spacing(1,1,1,1)},Object(l.a)(n,e.breakpoints.up("md"),{paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)")}),Object(l.a)(n,"transition",e.transitions.create("width")),Object(l.a)(n,"width","100%"),n)}}));function H(e){var t=D(),n=Object(r.useState)(e.url),o=Object(i.a)(n,2),c=o[0],l=o[1],s=Object(r.useState)(e.filename?"upload":"url"),u=Object(i.a)(s,1)[0];return Object(a.jsxs)("div",{className:t.url,children:[Object(a.jsx)(x.a,{mdDown:!0,children:Object(a.jsx)("div",{className:t.urlIcon,children:e.filename?Object(a.jsx)(F.a,{}):Object(a.jsx)(G.a,{})})}),Object(a.jsx)(B.a,{placeholder:"URL...",classes:{root:t.inputRoot,input:t.inputInput},onChange:function(e){"url"===u&&l(e.target.value)},onKeyDown:function(t){"url"===u&&"Enter"===t.key&&e.handleUrlChange(c)},defaultValue:"upload"===u?e.filename:e.url,inputProps:{readOnly:"upload"===u}})]})}var T=n(216),A=n(226),Z=n(230),J=n(215),M=n(214),W=n(213),q=n(100),K=n.n(q);function V(e){var t=Object(C.b)().enqueueSnackbar,n=Object(r.useState)(!1),o=Object(i.a)(n,2),c=o[0],l=o[1],s=window.location.origin+window.location.pathname+"?url="+encodeURIComponent(e.url),u=function(){l(!1)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(S.a,{title:"Get shareable link",children:Object(a.jsx)(f.a,{onClick:function(){l(!0)},color:"inherit",children:Object(a.jsx)(K.a,{})})}),Object(a.jsxs)(Z.a,{open:c,onClose:u,fullWidth:!0,children:[Object(a.jsx)(W.a,{children:"Shareable link"}),Object(a.jsx)(M.a,{children:Object(a.jsx)(A.a,{value:s,InputProps:{readOnly:!0},onFocus:function(e){e.target.select()},fullWidth:!0})}),Object(a.jsxs)(J.a,{children:[navigator.share?Object(a.jsx)(T.a,{onClick:function(){navigator.share&&(navigator.share({title:document.title,url:s}),u())},children:"Share"}):null,navigator.clipboard?Object(a.jsx)(T.a,{onClick:function(){navigator.clipboard&&(navigator.clipboard.writeText(s),t("URL copied to clipboard!"),u())},children:"Copy"}):null,Object(a.jsx)(T.a,{onClick:u,children:"Close"})]})]})]})}var Q=n(114),X=n(233),Y=n(217),$=n(218),ee=n(80),te=n.n(ee),ne=n(118),ae=n(52),re=n.n(ae);function oe(e){var t,n=e.log,r=e.content,o=r.trim().split("\n"),c=o.length,i=Object(u.a)((function(e){return{background:{},log:{flexGrow:1},pre:{margin:0,"font-family":"'JetBrains Mono', 'Droid Sans Mono', monospace"},line:{paddingLeft:e.spacing(1),"&::before":{content:"attr(data-linenumber)",display:"inline-block",width:"".concat(c.toString().length,"ch"),"text-align":"right","margin-right":"1em",color:e.palette.text.disabled},'&[data-loglevel="DEBUG"]':{color:e.palette.text.secondary},'&[data-loglevel="WARNING"]':{color:e.palette.warning.main},'&[data-loglevel="ERROR"]':{color:e.palette.error.main},'&[data-stream="stdin"]':{color:e.palette.info.main},'&[data-stream="stderr"]':{color:e.palette.error.main}},grow:{flexGrow:1},secondaryHeading:{fontSize:e.typography.pxToRem(16),color:e.palette.text.secondary,padding:e.spacing(0,1)}}}))(),l=function(e){switch(e.charAt(24)){case" ":return"stdin";case">":return"stdout";case"!":return"stderr";default:return"plain"}};switch(e.language){case"log":t=function(e){var t,n=e.index,r=e.style;return Object(a.jsx)("span",{style:r,children:Object(a.jsx)("span",{"data-linenumber":n+1,"data-loglevel":(t=o[n],t.split(" ")[5]),className:i.line,children:o[n]})})};break;case"cli":t=function(e){var t=e.index,n=e.style;return Object(a.jsx)("span",{style:n,children:Object(a.jsx)("span",{"data-linenumber":t+1,"data-stream":l(o[t]),className:i.line,children:o[t]})})};break;default:t=function(e){var t=e.index,n=e.style;return Object(a.jsx)("span",{style:n,children:Object(a.jsx)("span",{"data-linenumber":t+1,className:i.line,children:o[t]})})}}var s="serial.log"===n&&1===c&&o[0].includes("serial.log is currently not enabled");return Object(a.jsxs)(X.a,{children:[Object(a.jsxs)(Y.a,{expandIcon:Object(a.jsx)(te.a,{}),"aria-controls":"panel-log-"+e.index+"-content",id:"panel-log-"+e.index+"-header",children:[Object(a.jsx)(ne.a,{className:i.heading,children:n}),Object(a.jsx)("span",{className:i.grow}),s?Object(a.jsx)(re.a,{}):null,Object(a.jsx)(ne.a,{className:i.secondaryHeading,children:r.length+" characters"}),Object(a.jsx)(ne.a,{className:i.secondaryHeading,children:c+" "+(1===c?"line":"lines")})]}),Object(a.jsx)($.a,{children:Object(a.jsx)("code",{className:i.log,children:Object(a.jsx)("pre",{className:i.pre,children:Object(a.jsx)(Q.a,{height:500,itemCount:c,itemSize:20,style:{overflow:"scroll"},children:t})})})})]},n)}var ce=n(101),ie=n(115),le=Object(u.a)((function(e){return{grow:{flexGrow:1},secondaryHeading:{fontSize:e.typography.pxToRem(16),color:e.palette.text.secondary,padding:e.spacing(0,1)}}}));function se(e){var t,n=e.info.split("\n").filter((function(e){return""!==e.trim()})).map((function(e){var t=e.split(":"),n=Object(ie.a)(t);return{key:n[0],value:n.slice(1)}})),r={},o=Object(ce.a)(n);try{for(o.s();!(t=o.n()).done;){var c=t.value;r[c.key]=c.value}}catch(u){o.e(u)}finally{o.f()}var i=le(),l=function(e,t){var n=r[t];return n?Object(a.jsx)(ne.a,{className:i.secondaryHeading,children:e+" "+n}):null},s=r["env.plugins.pi_support.throttle_state"]&&"0x0"!==r["env.plugins.pi_support.throttle_state"];return Object(a.jsxs)(X.a,{defaultExpanded:!0,children:[Object(a.jsxs)(Y.a,{expandIcon:Object(a.jsx)(te.a,{}),"aria-controls":"panel-sysinfo-content",id:"panel-sysinfo-header",children:[Object(a.jsx)(ne.a,{className:i.heading,children:"System Information"}),Object(a.jsx)("span",{className:i.grow}),s?Object(a.jsx)(re.a,{}):null,l("OctoPrint","octoprint.version"),l("Python","env.python.version"),l("OctoPi","env.plugins.pi_support.octopi_version")]}),Object(a.jsx)($.a,{children:Object(a.jsx)("div",{className:i.list,children:n.map((function(e,t){return Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:e.key}),": ",e.value]},e.key)}))})})]})}function ue(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)(se,{info:e.bundle.systeminfo}),Object(a.jsx)("div",{children:e.bundle.logs.map((function(e,t){return Object(a.jsx)(oe,{log:e.log,content:e.content,language:e.language,index:t})}))})]})}var de=n(113);function pe(e){console.log("Rendering NothingChanged...");return Object(a.jsx)("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"},children:Object(a.jsx)(de.a,{style:{"flex-basis":"100%"},dropzoneText:"Enter an URL for a bundle above and press Enter, or drag and drop a file here or click to upload one",onChange:function(t){console.log("Entered NothingLoaded.handleChange..."),t.length>0&&e.onUpload(t[0]),console.log("Exiting NothingLoaded.handleChange...")},filesLimit:1,acceptedFiles:[".zip"],maxFileSize:3e7,showPreviewsInDropzone:!1,showAlerts:!1})})}var je=n(26),be=n.n(je),he=n(41),ge=n(109),fe=n.n(ge);function xe(e){return Oe.apply(this,arguments)}function Oe(){return(Oe=Object(he.a)(be.a.mark((function e(t){var n;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{mode:"cors"});case 2:if(n=e.sent,console.log(n),n.ok){e.next=6;break}throw new Error("Could not load file from ".concat(t,": ").concat(n.status));case 6:return e.next=8,n.blob();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function me(){return(me=Object(he.a)(be.a.mark((function e(t){var n;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,xe(t);case 2:return n=e.sent,e.next=5,ve(n);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ve(e){return ye.apply(this,arguments)}function ye(){return(ye=Object(he.a)(be.a.mark((function e(t){return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe.a.loadAsync(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function we(){return(we=Object(he.a)(be.a.mark((function e(t,n){return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.file(n);case 2:return e.t0=e.sent,e.abrupt("return",null!==e.t0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ke(){return(ke=Object(he.a)(be.a.mark((function e(t,n,a){return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=a||"blob",e.next=3,t.file(n).async(a);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ne={loadRemote:xe,loadZip:ve,loadRemoteZip:function(e){return me.apply(this,arguments)},containsFile:function(e,t){return we.apply(this,arguments)},getFileContents:function(e,t,n){return ke.apply(this,arguments)}},Ce={"octoprint.log":"log","plugin_softwareupdate_console.log":"cli","plugin_pluginmanager_console.log":"cli"};function Se(){return(Se=Object(he.a)(be.a.mark((function e(t){var n,a,r,o,c,i,l,s,u,d,p;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=["octoprint.log","serial.log","terminal.txt","plugin_softwareupdate_console.log","plugin_pluginmanager_console.log"],e.next=3,Ne.getFileContents(t,"systeminfo.txt","string");case 3:if(a=e.sent){e.next=6;break}throw new Error("No systeminfo.txt found");case 6:r={},o=0,c=n;case 8:if(!(o<c.length)){e.next=22;break}return i=c[o],e.prev=10,e.next=13,Ne.getFileContents(t,i,"string");case 13:r[i]=e.sent,e.next=19;break;case 16:e.prev=16,e.t0=e.catch(10),console.log("No ".concat(i," in zip..."));case 19:o++,e.next=8;break;case 22:for(l=[],s=0,u=n;s<u.length;s++)d=u[s],r[d]&&(p=Ce[d]||"plain",l.push({log:d,content:r[d],language:p}));return e.abrupt("return",{systeminfo:a,logs:l});case 25:case"end":return e.stop()}}),e,null,[[10,16]])})))).apply(this,arguments)}var Re={loadBundle:function(e){return Se.apply(this,arguments)},defaultBundle:{systeminfo:"",logs:[]}},_e=Object(u.a)((function(e){var t;return{root:{display:"flex",overflow:"auto"},grow:{flexGrow:1},appBar:{},toolbar:Object(l.a)({},e.breakpoints.down("md"),{"justify-content":"flex-end","flex-wrap":"wrap"}),urlbar:Object(l.a)({flexGrow:1},e.breakpoints.down("md"),{"flex-basis":"100%",order:99,paddingBottom:e.spacing(2)}),title:{"justify-item":"left"},offset:e.mixins.toolbar,content:Object(l.a)({flexGrow:1,overflow:"auto","padding-top":e.mixins.toolbar.minHeight},e.breakpoints.down("md"),{"padding-top":2*e.mixins.toolbar.minHeight}),container:(t={paddingTop:e.spacing(4)},Object(l.a)(t,e.breakpoints.down("md"),{paddingTop:0}),Object(l.a)(t,"paddingBottom",e.spacing(4)),t)}}));function Ie(e){var t=function(e,t){var n=Object(r.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(F){return console.log(F),t}})),a=Object(i.a)(n,2),o=a[0],c=a[1];return[o,function(t){try{var n=t instanceof Function?t(o):t;c(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(F){console.log(F)}}]}("enableDarkMode",Object(s.a)("(prefers-color-scheme: dark)")),n=Object(i.a)(t,2),o=n[0],c=n[1],l=Object(r.useState)(e.url),u=Object(i.a)(l,2),O=u[0],v=u[1],S=Object(r.useState)(""),R=Object(i.a)(S,2),_=R[0],I=R[1],E=Object(r.useState)(Re.defaultBundle),U=Object(i.a)(E,2),B=U[0],z=U[1],G=Object(r.useState)(!1),P=Object(i.a)(G,2),F=P[0],D=P[1],T=Object(r.useState)(!1),A=Object(i.a)(T,2),Z=A[0],J=A[1],M=o?"dark":"light",W=Object(d.a)({palette:{type:M}}),q=function(){c(!o)};Object(r.useEffect)((function(){K(e.url)}),[]);var K=function(e){if(e){D(!1),J(!0),v(e),ee(e),I("");var t=function(e){return e.match(/^https:\/\/github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+\/files\//)?e.replace("https://github.com","https://bundleviewer.octoprint.org/bundles"):e}(e);Ne.loadRemoteZip(t).then(X).catch(Y)}else $()},Q=function(e){D(!1),J(!0),I(e.name),v(""),Ne.loadZip(e).then(X).catch(Y)},X=function(e){Re.loadBundle(e).then((function(e){z(e),J(!1),console.log("Loading complete")})).catch(Y)},Y=function(e){console.log(e),D(!0)},$=function(){v(""),I(""),D(!1),J(!1),z(Re.defaultBundle),ee()},ee=function(e){var t=new URL(window.location);e?t.searchParams.set("url",e):t.searchParams.delete("url"),window.history.replaceState({},"",t)},te=_e(),ne=function(){return F?(console.log("Rendering error screen"),Object(a.jsxs)(w.a,{severity:"error",children:[Object(a.jsx)(k.a,{children:"Error"}),"Could not load bundle, is it accessible and an OctoPrint SystemInfo Bundle zipfile?"]})):Z?(console.log("Rendering loading screen"),Object(a.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(a.jsx)(N.a,{})})):B.systeminfo?(console.log("Rendering bundle"),Object(a.jsx)(ue,{bundle:B})):(console.log("Rendering empty"),Object(a.jsx)(pe,{onUpload:Q}))},ae=function(){return Object(a.jsx)(b.a,{className:te.appBar,children:Object(a.jsxs)(h.a,{className:te.toolbar,children:[Object(a.jsx)(f.a,{onClick:$,color:"inherit",children:Object(a.jsx)(y.a,{})}),Object(a.jsx)(x.a,{mdUp:!0,children:Object(a.jsx)("div",{className:te.grow})}),Object(a.jsx)("div",{className:te.urlbar,children:Object(a.jsx)(H,{url:O,filename:_,handleUrlChange:K})}),O?Object(a.jsx)(V,{url:O}):null,Object(a.jsx)(L,{darkMode:o,onChange:q}),Object(a.jsx)(x.a,{xsDown:!0,children:Object(a.jsx)(f.a,{href:"https://github.com/OctoPrint/bundleviewer.octoprint.org",target:"_blank",color:"inherit",children:Object(a.jsx)(m.a,{})})})]})})};return Object(a.jsx)(p.a,{theme:W,children:Object(a.jsx)(C.a,{children:Object(a.jsxs)("div",{className:te.root,style:{display:"flex"},children:[Object(a.jsx)(j.a,{}),Object(a.jsx)(ae,{}),Object(a.jsx)("main",{className:te.content,children:Object(a.jsx)(g.a,{maxWidth:"lg",className:te.container,children:Object(a.jsx)(ne,{})})})]})})})}var Ee=window.location.search,Le=new URLSearchParams(Ee).get("url","");console.log("URL",Le),c.a.render(Object(a.jsx)(Ie,{url:null==Le?"":Le}),document.querySelector("#root"))}},[[166,1,2]]]);
//# sourceMappingURL=main.7c177e04.chunk.js.map