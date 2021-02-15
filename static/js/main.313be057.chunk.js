(this["webpackJsonpbundleviewer.octoprint.org"]=this["webpackJsonpbundleviewer.octoprint.org"]||[]).push([[0],{184:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),c=n.n(o),i=n(14),s=n(13),l=n(231),u=n(228),d=n(126),p=n(243),b=n(244),j=n(241),f=n(242),h=n(245),g=n(186),m=n(249),x=n(125),O=n.n(x),v=n(124),w=n.n(v),y=n(247),k=n(239),C=n(240),N=n(83),S=n(251),R=n(103),I=n.n(R),z=n(102),L=n.n(z),E=n(4);function G(e){var t=Object(a.useState)(e.darkMode),n=Object(i.a)(t,2),r=n[0],o=n[1];return Object(E.jsx)(S.a,{title:"Toggle dark mode",children:Object(E.jsx)(g.a,{onClick:function(){e.onChange(!r),o(!r)},color:"inherit",children:r?Object(E.jsx)(L.a,{}):Object(E.jsx)(I.a,{})})})}var P=n(11),B=n(252),W=n(104),U=n.n(W),A=n(80),T=n.n(A),_=Object(u.a)((function(e){var t,n;return{grow:{flexGrow:1},url:(t={position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(P.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(P.c)(e.palette.common.white,.25)}},Object(s.a)(t,e.breakpoints.up("md"),{marginRight:e.spacing(2),marginLeft:e.spacing(2)}),Object(s.a)(t,"flexGrow",1),t),urlIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:(n={padding:e.spacing(1,1,1,1)},Object(s.a)(n,e.breakpoints.up("md"),{paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)")}),Object(s.a)(n,"transition",e.transitions.create("width")),Object(s.a)(n,"width","100%"),n)}}));function D(e){var t=_(),n=Object(a.useState)(e.url),r=Object(i.a)(n,2),o=r[0],c=r[1],s=Object(a.useState)(e.filename?"upload":"url"),l=Object(i.a)(s,1)[0];return Object(E.jsxs)("div",{className:t.url,children:[Object(E.jsx)(m.a,{mdDown:!0,children:Object(E.jsx)("div",{className:t.urlIcon,children:e.filename?Object(E.jsx)(T.a,{}):Object(E.jsx)(U.a,{})})}),Object(E.jsx)(B.a,{placeholder:"URL...",classes:{root:t.inputRoot,input:t.inputInput},onChange:function(e){"url"===l&&c(e.target.value)},onKeyDown:function(t){"url"===l&&"Enter"===t.key&&e.handleUrlChange(o)},defaultValue:"upload"===l?e.filename:e.url,inputProps:{readOnly:"upload"===l}})]})}var F=n(235),q=n(246),M=n(250),H=n(234),J=n(233),Q=n(232),Z=n(105),$=n.n(Z);function K(e){var t=Object(N.b)().enqueueSnackbar,n=Object(a.useState)(!1),r=Object(i.a)(n,2),o=r[0],c=r[1],s=window.location.origin+window.location.pathname+"?url="+encodeURIComponent(e.url),l=function(){c(!1)};return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(S.a,{title:"Get shareable link",children:Object(E.jsx)(g.a,{onClick:function(){c(!0)},color:"inherit",children:Object(E.jsx)($.a,{})})}),Object(E.jsxs)(M.a,{open:o,onClose:l,fullWidth:!0,children:[Object(E.jsx)(Q.a,{children:"Shareable link"}),Object(E.jsx)(J.a,{children:Object(E.jsx)(q.a,{value:s,InputProps:{readOnly:!0},onFocus:function(e){e.target.select()},fullWidth:!0})}),Object(E.jsxs)(H.a,{children:[navigator.share?Object(E.jsx)(F.a,{onClick:function(){navigator.share&&(navigator.share({title:document.title,url:s}),l())},children:"Share"}):null,navigator.clipboard?Object(E.jsx)(F.a,{onClick:function(){navigator.clipboard&&(navigator.clipboard.writeText(s),t("URL copied to clipboard!"),l())},children:"Copy"}):null,Object(E.jsx)(F.a,{onClick:l,children:"Close"})]})]})]})}var V=n(43),X=n(253),Y=n(237),ee=n(238),te=n(54),ne=n.n(te),ae=n(91),re=n(106),oe=n.n(re),ce=n(107),ie=n.n(ce),se=n(108),le=n.n(se),ue=n(236),de=Object(u.a)((function(e){var t;return{grow:{flexGrow:1},query:(t={position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(P.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(P.c)(e.palette.common.white,.25)}},Object(s.a)(t,e.breakpoints.up("md"),{marginRight:e.spacing(2),marginLeft:e.spacing(2)}),Object(s.a)(t,"flexGrow",1),Object(s.a)(t,"marginTop",e.spacing(2)),Object(s.a)(t,"marginBottom",e.spacing(2)),t),inputRoot:{color:"inherit",width:"100%"},inputInput:{padding:e.spacing(1),transition:e.transitions.create("width"),width:"100%"},result:{color:e.palette.secondary,fontSize:e.typography.pxToRem(12)}}}));function pe(e){var t=e.pos,n=e.count,o=de(),c=Object(a.useState)(e.query),s=Object(i.a)(c,2),l=s[0],u=s[1],d=r.a.createRef(),p=function(){e.handlePerformQuery&&e.handlePerformQuery(l)},b=function(){u(""),d.current.value="",e.onCancel&&e.onCancel()},j=function(){return Object(E.jsx)(ue.a,{position:"start",children:Object(E.jsx)(g.a,{onClick:p,disabled:""===l,size:"small",children:Object(E.jsx)(oe.a,{})})})},f=function(){return Object(E.jsxs)(ue.a,{position:"end",children:[n?Object(E.jsxs)("span",{className:o.result,children:[t," / ",n]}):null,Object(E.jsx)(g.a,{onClick:e.onPrev,disabled:0===n||t<=1,size:"small",children:Object(E.jsx)(ie.a,{})}),Object(E.jsx)(g.a,{onClick:e.onNext,disabled:0===n||t>=n,size:"small",children:Object(E.jsx)(ne.a,{})}),Object(E.jsx)(g.a,{onClick:b,disabled:""===l,size:"small",children:Object(E.jsx)(le.a,{})})]})};return Object(E.jsx)("div",{className:o.query,children:Object(E.jsx)(B.a,{placeholder:"Search...",classes:{root:o.inputRoot,input:o.inputInput},onChange:function(t){u(t.target.value),e.handleQueryChange&&e.handleQueryChange(l)},onKeyDown:function(e){"Enter"===e.key&&p()},defaultValue:e.query,startAdornment:Object(E.jsx)(j,{}),endAdornment:Object(E.jsx)(f,{}),inputRef:d})})}var be=n(129);function je(e){var t=e.lines,n=t.length,o=e.query,c=o.toLowerCase(),i=e.scrollTo,l=r.a.createRef();Object(a.useEffect)((function(){i>-1&&l.current.scrollToItem(i,"center")}),[l,i]);var d,p=Object(u.a)((function(e){return{log:{flexGrow:1},pre:Object(s.a)({margin:0,"font-family":"'JetBrains Mono', 'Droid Sans Mono', monospace"},e.breakpoints.down("md"),{fontSize:e.typography.pxToRem(12)}),linewrap:{'&[data-matched="true"]':{"background-color":"rgba(255, 255, 0, .2)"}},line:{paddingLeft:e.spacing(1),"&::before":{content:"attr(data-linenumber)",display:"inline-block",width:"".concat(n.toString().length,"ch"),"text-align":"right","margin-right":"1em",color:e.palette.text.disabled},'&[data-loglevel="DEBUG"]':{color:e.palette.text.secondary},'&[data-loglevel="WARNING"]':{color:e.palette.warning.main},'&[data-loglevel="ERROR"]':{color:e.palette.error.main},'&[data-stream="stdin"]':{color:e.palette.info.main},'&[data-stream="stderr"]':{color:e.palette.error.main}}}}))(),b=function(e){switch(e.charAt(24)){case" ":return"stdin";case">":return"stdout";case"!":return"stderr";default:return"plain"}},j=function(e){return o&&e&&e.toLowerCase().includes(c)};switch(e.language){case"log":d=function(e){var n,a=e.index,r=e.style;return Object(E.jsx)("span",{"data-matched":j(t[a]),style:r,className:p.linewrap,children:Object(E.jsx)("span",{"data-linenumber":a+1,"data-loglevel":(n=t[a],n.split(" ")[5]),className:p.line,children:t[a]})})};break;case"cli":d=function(e){var n=e.index,a=e.style;return Object(E.jsx)("span",{"data-matched":j(t[n]),style:a,className:p.linewrap,children:Object(E.jsx)("span",{"data-linenumber":n+1,"data-stream":b(t[n]),className:p.line,children:t[n]})})};break;default:d=function(e){var n=e.index,a=e.style;return Object(E.jsx)("span",{"data-matched":j(t[n]),style:a,className:p.linewrap,children:Object(E.jsx)("span",{"data-linenumber":n+1,className:p.line,children:t[n]})})}}return Object(E.jsx)("code",{className:p.log,children:Object(E.jsx)("pre",{className:p.pre,children:Object(E.jsx)(be.a,{height:500,itemCount:n,itemSize:20,style:{overflow:"scroll"},ref:l,children:d})})})}var fe=n(109),he=n.n(fe),ge=n(88),me=n.n(ge),xe=[{language:"cli",patterns:[/^.*_console.*\.log$/]},{language:"log",patterns:[/^.*\.log$/]}],Oe=function(e){var t,n=Object(V.a)(xe);try{for(n.s();!(t=n.n()).done;){var a,r=t.value,o=r.language,c=r.patterns,i=Object(V.a)(c);try{for(i.s();!(a=i.n()).done;){var s=a.value;if(e.match(s))return console.log("Match! ".concat(s," vs ").concat(e)),o}}catch(l){i.e(l)}finally{i.f()}}}catch(l){n.e(l)}finally{n.f()}return"plain"};function ve(e){var t=e.log,n=e.content,r=n.trim().split("\n").map((function(e){return e.trimEnd()+"\n"})),o=r.length,c=Object(a.useState)(""),l=Object(i.a)(c,2),d=l[0],p=l[1],b=Object(a.useState)(0),j=Object(i.a)(b,2),f=j[0],h=j[1],g=Object(a.useState)(0),m=Object(i.a)(g,2),x=m[0],O=m[1],v=Object(a.useState)([]),w=Object(i.a)(v,2),y=w[0],k=w[1],C=Object(u.a)((function(e){return{background:{},accordionbar:Object(s.a)({display:"flex",flexGrow:1,alignItems:"center"},e.breakpoints.down("md"),{flexWrap:"wrap"}),accordiondetails:{display:"flex",flexGrow:1,flexDirection:"column"},grow:{flexGrow:1},icon:{padding:e.spacing(0,1),fontSize:"1.5rem"},secondaryHeading:Object(s.a)({fontSize:e.typography.pxToRem(12),color:e.palette.text.secondary,padding:e.spacing(0,1),textAlign:"right"},e.breakpoints.down("md"),{textAlign:"left",padding:e.spacing(0,0)}),title:Object(s.a)({flexGrow:1,alignItems:"center"},e.breakpoints.down("md"),{flexBasis:"100%"}),info:Object(s.a)({},e.breakpoints.down("md"),{flexBasis:"100%"})}}))(),N=function(){if(y.length){var e=x<y.length-1?x+1:0;h(y[e]),O(e)}},S="serial.log"===t&&1===o&&r[0].includes("serial.log is currently not enabled");return Object(E.jsxs)(X.a,{defaultExpanded:e.expanded,children:[Object(E.jsx)(Y.a,{expandIcon:Object(E.jsx)(ne.a,{}),"aria-controls":"panel-log-"+e.index+"-content",id:"panel-log-"+e.index+"-header",children:Object(E.jsxs)("div",{className:C.accordionbar,children:[Object(E.jsx)("div",{className:C.title,children:Object(E.jsxs)(ae.a,{className:C.heading,style:{display:"flex",alignItems:"center"},children:[t,S?Object(E.jsx)(he.a,{className:C.icon,size:"1.5em"}):null]})}),Object(E.jsxs)("div",{className:C.info,children:[Object(E.jsx)(ae.a,{className:C.secondaryHeading,children:me()(n.length)+" "+(1===n.length?"char":"chars")}),Object(E.jsx)(ae.a,{className:C.secondaryHeading,children:me()(o)+" "+(1===o?"line":"lines")})]})]})}),Object(E.jsxs)(ee.a,{className:C.accordiondetails,children:[Object(E.jsx)(pe,{className:C.grow,pos:x+1,count:y.length,onNext:N,onPrev:function(){if(y.length){var e=x>0?x-1:y.length-1;h(y[e]),O(e)}},onCancel:function(){k([]),O(0),p("")},handlePerformQuery:function(e){if(e)if(console.log("Starting query:",e),e!==d){console.log("... calculate matches");var t=e.toLowerCase(),n=r.reduce((function(e,n,a){return n.toLowerCase().includes(t)&&e.push(a),e}),[]);n.length&&h(n[0]),k(n),O(0),p(e),console.log("Indices:",n,", cursor:",0)}else N()}}),Object(E.jsx)(je,{lines:r,query:d,scrollTo:f,language:e.language||Oe(t)})]})]},t)}var we=n(128),ye=n(110),ke=n.n(ye),Ce=n(111),Ne=n.n(Ce),Se=n(112),Re=n.n(Se),Ie=Object(u.a)((function(e){return{accordionbar:Object(s.a)({display:"flex",flexGrow:1,alignItems:"center"},e.breakpoints.down("md"),{flexWrap:"wrap"}),grow:{flexGrow:1},icon:{padding:e.spacing(0,1),fontSize:"1.5rem"},secondaryHeading:Object(s.a)({fontSize:e.typography.pxToRem(12),color:e.palette.text.secondary,padding:e.spacing(0,1),textAlign:"right"},e.breakpoints.down("md"),{textAlign:"left",padding:e.spacing(0,0)}),title:Object(s.a)({flexGrow:1,alignItems:"center"},e.breakpoints.down("md"),{flexBasis:"100%"}),info:Object(s.a)({},e.breakpoints.down("md"),{flexBasis:"100%"})}}));function ze(e){var t,n=e.info.split("\n").filter((function(e){return""!==e.trim()})).map((function(e){var t=e.split(":"),n=Object(we.a)(t);return{key:n[0],value:n.slice(1)}})),a={},r=Object(V.a)(n);try{for(r.s();!(t=r.n()).done;){var o=t.value;a[o.key]=o.value}}catch(p){r.e(p)}finally{r.f()}var c=Ie(),i=function(e,t){var n=a[t];return n?Object(E.jsx)(ae.a,{className:c.secondaryHeading,children:e+" "+n}):null},s=function(e,t){return a[e]&&t(a[e])},l=s("octoprint.safe_mode",(function(e){return"true"===e})),u=s("env.plugins.pi_support.throttle_state",(function(e){return"0x0"!==e})),d=s("printer.firmware",(function(e){return e.includes("Marlin bugfix-")}));return Object(E.jsxs)(X.a,{defaultExpanded:!0,children:[Object(E.jsx)(Y.a,{expandIcon:Object(E.jsx)(ne.a,{}),"aria-controls":"panel-sysinfo-content",id:"panel-sysinfo-header",children:Object(E.jsxs)("div",{className:c.accordionbar,children:[Object(E.jsx)("div",{className:c.title,children:Object(E.jsxs)(ae.a,{className:c.heading,style:{display:"flex",alignItems:"center"},children:["System Information",l?Object(E.jsx)(Re.a,{className:c.icon,size:"1.5em"}):null,u?Object(E.jsx)(ke.a,{className:c.icon,size:"1.5em"}):null,d?Object(E.jsx)(Ne.a,{className:c.icon,size:"1.5em"}):null]})}),Object(E.jsxs)("div",{className:c.info,children:[i("OctoPrint","octoprint.version"),i("Python","env.python.version"),i("OctoPi","env.plugins.pi_support.octopi_version"),i("Firmware","printer.firmware")]})]})}),Object(E.jsx)(ee.a,{children:Object(E.jsx)("div",{className:c.list,children:n.map((function(e,t){return Object(E.jsxs)("div",{children:[Object(E.jsx)("strong",{children:e.key}),": ",e.value]},e.key)}))})})]})}function Le(e){return Object(E.jsxs)("div",{children:[e.bundle.systeminfo?Object(E.jsx)(ze,{info:e.bundle.systeminfo}):null,Object(E.jsx)("div",{children:e.bundle.logs.map((function(t,n){return Object(E.jsx)(ve,{expanded:!e.bundle.systeminfo&&0===n,log:t.log,content:t.content,index:n})}))})]})}var Ee=n(127);function Ge(e){console.log("Rendering NothingChanged...");return Object(E.jsx)("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"},children:Object(E.jsx)(Ee.a,{style:{"flex-basis":"100%"},dropzoneText:"Enter an URL above and press Enter, or drag and drop a file here or click to upload one",onChange:function(t){console.log("Entered NothingLoaded.handleChange..."),t.length>0&&(console.log("File:",t[0]),e.onUpload(t[0])),console.log("Exiting NothingLoaded.handleChange...")},filesLimit:1,acceptedFiles:[".zip",".log",".txt"],maxFileSize:3e7,showPreviewsInDropzone:!1,showAlerts:!1})})}var Pe=n(21),Be=n.n(Pe),We=n(36),Ue=n(121),Ae=n.n(Ue);function Te(){return(Te=Object(We.a)(Be.a.mark((function e(t){var n,a,r,o,c;return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{mode:"cors"});case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not load file from ".concat(t,": ").concat(n.status));case 5:return e.next=7,n.blob();case 7:return a=e.sent,o=n.headers.get("content-disposition"),r=o?(null===(c=Ae.a.parse(o).parameters)||void 0===c?void 0:c.filename)||"unknown":t.substring(t.lastIndexOf("/")+1),a.name=r,e.abrupt("return",a);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _e={loadRemote:function(e){return Te.apply(this,arguments)}},De=n(122),Fe=n.n(De);function qe(){return(qe=Object(We.a)(Be.a.mark((function e(t){var n,a;return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_e.loadRemote(t);case 2:return n=e.sent,a=n.blob,e.next=6,Me(a);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Me(e){return He.apply(this,arguments)}function He(){return(He=Object(We.a)(Be.a.mark((function e(t){return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Fe.a.loadAsync(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Je(){return(Je=Object(We.a)(Be.a.mark((function e(t,n){return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.file(n);case 2:return e.t0=e.sent,e.abrupt("return",null!==e.t0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Qe(){return(Qe=Object(We.a)(Be.a.mark((function e(t,n,a){return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=a||"blob",e.next=3,t.file(n).async(a);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ze={loadZip:Me,loadRemoteZip:function(e){return qe.apply(this,arguments)},containsFile:function(e,t){return Je.apply(this,arguments)},getFileContents:function(e,t,n){return Qe.apply(this,arguments)}};function $e(){return($e=Object(We.a)(Be.a.mark((function e(t){var n,a,r,o,c,i,s,l,u,d,p,b,j;return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=["octoprint.log","serial.log","terminal.txt","plugin_softwareupdate_console.log","plugin_pluginmanager_console.log"],a=!1,e.prev=2,e.next=5,Ze.getFileContents(t,"systeminfo.txt","string");case 5:a=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log("Could not read systeminfo.txt from zip, probably not a bundle...");case 11:r={},o=Object(V.a)(t.file(/\.(log|txt|gcode|gco|g)$/i)),e.prev=13,o.s();case 15:if((c=o.n()).done){e.next=30;break}if(!(i=c.value).name.startsWith(".")&&!i.name.startsWith("__")){e.next=19;break}return e.abrupt("continue",28);case 19:return e.prev=19,e.next=22,i.async("string");case 22:r[i.name]=e.sent,e.next=28;break;case 25:e.prev=25,e.t1=e.catch(19),console.log("Could not read {f.name} from zip...");case 28:e.next=15;break;case 30:e.next=35;break;case 32:e.prev=32,e.t2=e.catch(13),o.e(e.t2);case 35:return e.prev=35,o.f(),e.finish(35);case 38:for(s=[],l=0,u=n;l<u.length;l++)d=u[l],r[d]&&s.push({log:d,content:r[d]});p=Object(V.a)(Object.keys(r).sort());try{for(p.s();!(b=p.n()).done;)j=b.value,n.includes(j)||s.push({log:j,content:r[j]})}catch(f){p.e(f)}finally{p.f()}return e.abrupt("return",{hasContent:!0,systeminfo:a,logs:s});case 43:case"end":return e.stop()}}),e,null,[[2,8],[13,32,35,38],[19,25]])})))).apply(this,arguments)}function Ke(){return(Ke=Object(We.a)(Be.a.mark((function e(t){return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.name||"unknown",e.next=3,t.text();case 3:return e.t1=e.sent,e.t2={log:e.t0,content:e.t1},e.t3=[e.t2],e.abrupt("return",{hasContent:!0,logs:e.t3});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ve={loadBundle:function(e){return $e.apply(this,arguments)},loadLog:function(e){return Ke.apply(this,arguments)},defaultBundle:{hasContent:!1,systeminfo:"",logs:[]}},Xe=n(123),Ye=n.n(Xe),et=Object(u.a)((function(e){var t;return{root:{display:"flex",overflow:"auto"},grow:{flexGrow:1},appBar:{},toolbar:Object(s.a)({},e.breakpoints.down("md"),{"justify-content":"flex-end","flex-wrap":"wrap"}),urlbar:Object(s.a)({flexGrow:1},e.breakpoints.down("md"),{"flex-basis":"100%",order:99,paddingBottom:e.spacing(2)}),title:{"justify-item":"left"},offset:e.mixins.toolbar,content:Object(s.a)({flexGrow:1,overflow:"auto","padding-top":e.mixins.toolbar.minHeight},e.breakpoints.down("md"),{"padding-top":2*e.mixins.toolbar.minHeight}),container:(t={paddingTop:e.spacing(4)},Object(s.a)(t,e.breakpoints.down("md"),{paddingTop:0}),Object(s.a)(t,"paddingBottom",e.spacing(4)),t)}}));function tt(e){var t=function(e,t){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(A){return console.log(A),t}})),r=Object(i.a)(n,2),o=r[0],c=r[1];return[o,function(t){try{var n=t instanceof Function?t(o):t;c(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(A){console.log(A)}}]}("enableDarkMode",Object(l.a)("(prefers-color-scheme: dark)")),n=Object(i.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(e.url),s=Object(i.a)(c,2),u=s[0],x=s[1],v=Object(a.useState)(""),S=Object(i.a)(v,2),R=S[0],I=S[1],z=Object(a.useState)(Ve.defaultBundle),L=Object(i.a)(z,2),P=L[0],B=L[1],W=Object(a.useState)(!1),U=Object(i.a)(W,2),A=U[0],T=U[1],_=Object(a.useState)(!1),F=Object(i.a)(_,2),q=F[0],M=F[1],H=r?"dark":"light",J=Object(d.a)({palette:{type:H}}),Q=function(){o(!r)};Object(a.useEffect)((function(){Z(e.url)}),[]);var Z=function(e){if(e){T(!1),M(!0),x(e),te(e),I("");var t=function(e){return e.match(/^https:\/\/github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+\/files\//)?e.replace("https://github.com","https://bundleviewer.octoprint.org/bundles"):e.match(/^https:\/\/community\.octoprint\.org\/uploads\/short-url\//)?e.replace("https://community.octoprint.org/uploads/short-url","https://bundleviewer.octoprint.org/bundles/forum"):e}(e);_e.loadRemote(t).then(V).catch(Y)}else ee()},$=function(e){T(!1),M(!0),I(e.name),x(""),V(e)},V=function(e){Ze.loadZip(e).then(X).catch((function(t){var n;try{n=Ye.a.parse(e.type).type}catch(a){n=""}""===n||n.startsWith("text/")?Ve.loadLog(e).then((function(e){B(e),M(!1)})).catch(Y):Y(t)}))},X=function(e){Ve.loadBundle(e).then((function(e){B(e),M(!1),console.log("Loading complete")})).catch(Y)},Y=function(e){console.log(e),T(!0)},ee=function(){x(""),I(""),T(!1),M(!1),B(Ve.defaultBundle),te()},te=function(e){var t=new URL(window.location);e?t.searchParams.set("url",e):t.searchParams.delete("url"),window.history.replaceState({},"",t)},ne=et(),ae=function(){return A?(console.log("Rendering error screen"),Object(E.jsxs)(y.a,{severity:"error",children:[Object(E.jsx)(k.a,{children:"Error"}),"Could not load file. Make sure you are trying to load either an OctoPrint systeminfo bundle, a zip containing logs, or a plain text log file. Other files are not supported."]})):q?(console.log("Rendering loading screen"),Object(E.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(E.jsx)(C.a,{})})):P.hasContent?(console.log("Rendering bundle"),Object(E.jsx)(Le,{bundle:P})):(console.log("Rendering empty"),Object(E.jsx)(Ge,{onUpload:$}))},re=function(){return Object(E.jsx)(j.a,{className:ne.appBar,children:Object(E.jsxs)(f.a,{className:ne.toolbar,children:[Object(E.jsx)(g.a,{onClick:ee,color:"inherit",children:Object(E.jsx)(w.a,{})}),Object(E.jsx)(m.a,{mdUp:!0,children:Object(E.jsx)("div",{className:ne.grow})}),Object(E.jsx)("div",{className:ne.urlbar,children:Object(E.jsx)(D,{url:u,filename:R,handleUrlChange:Z})}),u?Object(E.jsx)(K,{url:u}):null,Object(E.jsx)(G,{darkMode:r,onChange:Q}),Object(E.jsx)(m.a,{xsDown:!0,children:Object(E.jsx)(g.a,{href:"https://github.com/OctoPrint/bundleviewer.octoprint.org",target:"_blank",color:"inherit",children:Object(E.jsx)(O.a,{})})})]})})};return Object(E.jsx)(p.a,{theme:J,children:Object(E.jsx)(N.a,{children:Object(E.jsxs)("div",{className:ne.root,style:{display:"flex"},children:[Object(E.jsx)(b.a,{}),Object(E.jsx)(re,{}),Object(E.jsx)("main",{className:ne.content,children:Object(E.jsx)(h.a,{maxWidth:"lg",className:ne.container,children:Object(E.jsx)(ae,{})})})]})})})}var nt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function at(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var rt=window.location.search,ot=new URLSearchParams(rt).get("url","");console.log("URL",ot),c.a.render(Object(E.jsx)(tt,{url:null==ot?"":ot}),document.querySelector("#root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");nt?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):at(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):at(t,e)}))}}()}},[[184,1,2]]]);
//# sourceMappingURL=main.313be057.chunk.js.map