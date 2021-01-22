(this["webpackJsonpbundleviewer.octoprint.org"]=this["webpackJsonpbundleviewer.octoprint.org"]||[]).push([[0],{93:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(0),a=n(11),o=n.n(a),i=n(10),s=n(131),l=n(126),u=n(64),j=n(132),d=n(133),b=n(134),p=n(135),f=n(136),h=n(97),O=n(50),x=n(139),g=n(60),m=n.n(g);function v(e){var t=Object(c.useState)(e.darkMode),n=Object(i.a)(t,2),a=n[0],o=n[1];return Object(r.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(r.jsx)(m.a,{}),Object(r.jsx)(x.a,{checked:a,onChange:function(){e.onChange(!a),o(!a)}})]})}var w=n(16),y=n(138),k=n(61),S=n.n(k),C=Object(l.a)((function(e){return{grow:{flexGrow:1},url:{position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(w.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(w.c)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:e.spacing(2),flexGrow:1},urlIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:{padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"}}}));function R(e){var t=C(),n=Object(c.useState)(e.url),a=Object(i.a)(n,2),o=a[0],s=a[1];return Object(r.jsxs)("div",{className:t.url,children:[Object(r.jsx)("div",{className:t.urlIcon,children:Object(r.jsx)(S.a,{})}),Object(r.jsx)(y.a,{placeholder:"URL...",classes:{root:t.inputRoot,input:t.inputInput},onChange:function(e){s(e.target.value)},onKeyDown:function(t){"Enter"===t.key&&e.handleUrlChange(o)},defaultValue:e.url})]})}var I=n(95),N=n(62),U=n.n(N);function L(e){var t=Object(O.b)().enqueueSnackbar;return Object(r.jsx)(I.a,{onClick:function(){var n=window.location.origin+window.location.pathname+"?url="+encodeURIComponent(e.url);navigator.share?navigator.share({title:document.title,url:n}):(navigator.clipboard.writeText(n),t("URL copied to clipboard!"))},children:Object(r.jsx)(U.a,{})})}var E=n(140),_=n(129),B=n(130),F=n(53),G=n.n(F),J=n(128),M=n(137),P=n(127),z=n(65);function Z(e){var t=e.content.split("\n"),n=t.length,c=Object(l.a)((function(e){return{log:{flexGrow:1,overflow:"auto",padding:0,"font-family":"'JetBrains Mono', 'Droid Sans Mono', monospace"},line:{"&::before":{content:"attr(data-linenumber)",display:"inline-block",width:"".concat(n.toString().length,"ch"),"text-align":"right","margin-right":"1em",color:e.palette.text.secondary}}}}))();return Object(r.jsx)("code",{className:c.log,children:Object(r.jsx)("pre",{children:Object(r.jsx)(z.a,{height:500,itemCount:n,itemSize:20,children:function(e){var n=e.index,a=e.style;return Object(r.jsx)("span",{style:a,children:Object(r.jsx)("span",{"data-linenumber":n+1,className:c.line,children:t[n]})})}})})})}function A(e){var t=e.info.split("\n").filter((function(e){return""!==e.trim()})).map((function(e){var t=e.split(":",2),n=Object(i.a)(t,2);return{key:n[0],value:n[1]}}));return console.log(t),Object(r.jsx)("div",{children:t.map((function(e,t){return Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:e.key}),": ",e.value,Object(r.jsx)("br",{})]},e.key)}))})}var D=n(18),q=n.n(D),T=n(35),V=n(63),W=n.n(V);function K(e){return H.apply(this,arguments)}function H(){return(H=Object(T.a)(q.a.mark((function e(t){var n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{mode:"cors"});case 2:if(n=e.sent,console.log(n),n.ok){e.next=6;break}throw new Error("Could not load file from ".concat(t,": ").concat(n.status));case 6:return e.next=8,n.blob();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(){return(Q=Object(T.a)(q.a.mark((function e(t){var n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K(t);case 2:return n=e.sent,e.next=5,W.a.loadAsync(n);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(){return(X=Object(T.a)(q.a.mark((function e(t,n){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.file(n);case 2:return e.t0=e.sent,e.abrupt("return",null!==e.t0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(){return(Y=Object(T.a)(q.a.mark((function e(t,n,r){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=r||"arraybuffer",e.next=3,t.file(n).async(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var $={loadRemote:K,loadRemoteZip:function(e){return Q.apply(this,arguments)},containsFile:function(e,t){return X.apply(this,arguments)},getFileContents:function(e,t,n){return Y.apply(this,arguments)}},ee=Object(l.a)((function(e){return{}}));function te(e){var t=ee(),n=Object(c.useState)(!0),a=Object(i.a)(n,2),o=a[0],s=a[1],l=Object(c.useState)(!0),u=Object(i.a)(l,2),j=u[0],d=u[1],b=Object(c.useState)(!1),p=Object(i.a)(b,2),f=p[0],O=p[1],x=Object(c.useState)(""),g=Object(i.a)(x,2),m=g[0],v=g[1],w=Object(c.useState)([]),y=Object(i.a)(w,2),k=y[0],S=y[1],C=Object(c.useRef)();Object(c.useEffect)((function(){if(e.url){if(console.log("loadedURL",C.current),e.url===C.current)return void console.log("Same URL");var t=function(e){return e.match(/^https:\/\/github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+\/files\//)?e.replace("https://github.com","https://bundleviewer.octoprint.org/bundles"):e}(e.url);s(!0),d(!0),O(!1),$.loadRemoteZip(t).then((function(e){C.current=t;var n=["octoprint.log","serial.log","terminal.txt","plugin_softwareupdate_console.log","plugin_pluginmanager_console.log"];$.getFileContents(e,"systeminfo.txt","string").then((function(t){v(t),s(!1);var r=[],c={};n.forEach((function(t){var n=$.getFileContents(e,t,"string").then((function(e){c[t]=e}));r.push(n)})),Promise.allSettled(r).then((function(){var e=[];n.forEach((function(t){c[t]&&e.push({log:t,content:c[t]})})),S(e),d(!1)}))})).catch((function(){O(!0)}))})).catch((function(){O(!0)}))}}),[e.url]);var R=function(){return f?Object(r.jsxs)(M.a,{severity:"error",children:[Object(r.jsx)(P.a,{children:"Error"}),"Could not load bundle, is the URL correct and pointing to an OctoPrint SystemInfo Bundle zipfile?"]}):o?Object(r.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(r.jsx)(J.a,{})}):Object(r.jsxs)(E.a,{defaultExpanded:!0,children:[Object(r.jsx)(_.a,{expandIcon:Object(r.jsx)(G.a,{}),"aria-controls":"panel-sysinfo-content",id:"panel-sysinfo-header",children:Object(r.jsx)(h.a,{className:t.heading,children:"System Information"})}),Object(r.jsx)(B.a,{children:Object(r.jsx)(A,{info:m})})]})},I=function(){return o||f?null:j?Object(r.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(r.jsx)(J.a,{})}):Object(r.jsx)("div",{children:k.map((function(e,n){return Object(r.jsxs)(E.a,{children:[Object(r.jsx)(_.a,{expandIcon:Object(r.jsx)(G.a,{}),"aria-controls":"panel-log-"+n+"-content",id:"panel-log-"+n+"-header",children:Object(r.jsx)(h.a,{className:t.heading,children:e.log})}),Object(r.jsx)(B.a,{children:Object(r.jsx)(Z,{log:e.log,content:e.content,language:"plain"})})]},e.log)}))})};return Object(r.jsxs)("div",{children:[Object(r.jsx)(R,{}),Object(r.jsx)(I,{})]})}function ne(){return Object(r.jsx)(h.a,{style:{display:"flex",justifyContent:"center"},children:"Please enter a bundle URL and press Enter."})}var re=Object(l.a)((function(e){return{root:{display:"flex",overflow:"auto"},grow:{flexGrow:1},offset:e.mixins.toolbar,content:{flexGrow:1,height:"calc(100vh + ".concat(e.mixins.toolbar,"px)"),overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)}}}));function ce(e){var t=function(e,t){var n=Object(c.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(r){return console.log(r),t}})),r=Object(i.a)(n,2),a=r[0],o=r[1];return[a,function(t){try{var n=t instanceof Function?t(a):t;o(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(r){console.log(r)}}]}("enableDarkMode",Object(s.a)("(prefers-color-scheme: dark)")),n=Object(i.a)(t,2),a=n[0],o=n[1],l=Object(c.useState)(e.url),x=Object(i.a)(l,2),g=x[0],m=x[1],w=a?"dark":"light",y=Object(u.a)({palette:{type:w}}),k=re(),S=function(){return g?Object(r.jsx)(te,{url:g}):Object(r.jsx)(ne,{})};return Object(r.jsx)(j.a,{theme:y,children:Object(r.jsx)(O.a,{children:Object(r.jsxs)("div",{className:k.root,children:[Object(r.jsx)(d.a,{}),Object(r.jsx)(b.a,{position:"fixed",className:k.appBar,children:Object(r.jsxs)(p.a,{children:[Object(r.jsx)(h.a,{variant:"h6",noWrap:!0,children:"OctoPrint Bundle Viewer"}),Object(r.jsx)(R,{url:g,handleUrlChange:function(e){m(e)}}),Object(r.jsx)(L,{url:g}),Object(r.jsx)(v,{darkMode:a,onChange:function(){o(!a)}})]})}),Object(r.jsxs)("main",{className:k.content,children:[Object(r.jsx)("div",{className:k.offset}),Object(r.jsx)(f.a,{maxWidth:"lg",className:k.container,children:Object(r.jsx)(S,{})})]})]})})})}var ae=window.location.search,oe=new URLSearchParams(ae).get("url","");console.log("URL",oe),o.a.render(Object(r.jsx)(ce,{url:null==oe?"":oe}),document.querySelector("#root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.77e2bcfe.chunk.js.map