(this["webpackJsonpbundleviewer.octoprint.org"]=this["webpackJsonpbundleviewer.octoprint.org"]||[]).push([[0],{156:function(e){e.exports=JSON.parse('{"a":"1.1.0"}')},273:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(32),i=n.n(o),c=n(10),s=n(3),l=n(337),d=n(342),u=n(347),p=n(186),b=n(343),h=n(371),j=n(344),f=n(358),g=n(359),m=n(355),x=n(353),O=n(356),v=n(351),y=n(184),w=n.n(y),k=n(349),S=n(370),C=n(357),N=n(354),R=n(57),_=n(187),P=n(156),I=n(345),E=n(161),z=n.n(E),T=n(160),D=n.n(T),L=n(1);function A(e){var t=Object(r.useState)(e.darkMode),n=Object(c.a)(t,2),a=n[0],o=n[1];return Object(L.jsx)(I.a,{title:"Toggle dark mode",children:Object(L.jsx)(O.a,{onClick:function(){e.onChange(!a),o(!a)},color:"inherit",size:"large",children:a?Object(L.jsx)(D.a,{}):Object(L.jsx)(z.a,{})})})}var B=n(332),U=n(25),F=n(163),G=n.n(F),W=n(108),M=n.n(W),V=Object(u.a)((function(e){var t,n;return{grow:{flexGrow:1},url:(t={position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(B.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(B.a)(e.palette.common.white,.25)}},Object(s.a)(t,e.breakpoints.up("md"),{marginRight:e.spacing(2),marginLeft:e.spacing(2)}),Object(s.a)(t,"flexGrow",1),t),urlIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:(n={padding:e.spacing(1,1,1,1)},Object(s.a)(n,e.breakpoints.up("md"),{paddingLeft:"calc(1em + ".concat(e.spacing(4),")")}),Object(s.a)(n,"transition",e.transitions.create("width")),Object(s.a)(n,"width","100%"),n)}}));function q(e){var t=V(),n=Object(r.useState)(e.url),a=Object(c.a)(n,2),o=a[0],i=a[1],s=Object(r.useState)(e.filename?"upload":"url"),l=Object(c.a)(s,1)[0];return Object(L.jsxs)("div",{className:t.url,children:[Object(L.jsx)(v.a,{lgDown:!0,children:Object(L.jsx)("div",{className:t.urlIcon,children:e.filename?Object(L.jsx)(M.a,{}):Object(L.jsx)(G.a,{})})}),Object(L.jsx)(U.c,{placeholder:"URL...",classes:{root:t.inputRoot,input:t.inputInput},onChange:function(e){"url"===l&&i(e.target.value)},onKeyDown:function(t){"url"===l&&"Enter"===t.key&&e.handleUrlChange(o)},defaultValue:"upload"===l?e.filename:e.url,inputProps:{readOnly:"upload"===l}})]})}var H=n(346),Z=n(361),J=n(365),Q=n(364),$=n(340),K=n(164),Y=n.n(K);function X(e){var t=Object(R.b)().enqueueSnackbar,n=Object(r.useState)(!1),a=Object(c.a)(n,2),o=a[0],i=a[1],s=window.location.origin+window.location.pathname+"?url="+encodeURIComponent(e.url),l=function(){i(!1)};return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(I.a,{title:"Get shareable link",children:Object(L.jsx)(O.a,{onClick:function(){i(!0)},color:"inherit",size:"large",children:Object(L.jsx)(Y.a,{})})}),Object(L.jsxs)(Z.a,{open:o,onClose:l,fullWidth:!0,children:[Object(L.jsx)($.a,{children:"Shareable link"}),Object(L.jsx)(Q.a,{children:Object(L.jsx)(H.a,{value:s,InputProps:{readOnly:!0},onFocus:function(e){e.target.select()},fullWidth:!0})}),Object(L.jsxs)(J.a,{children:[navigator.share?Object(L.jsx)(x.a,{onClick:function(){navigator.share&&(navigator.share({title:document.title,url:s}),l())},children:"Share"}):null,navigator.clipboard?Object(L.jsx)(x.a,{onClick:function(){navigator.clipboard&&(navigator.clipboard.writeText(s),t("URL copied to clipboard!"),l())},children:"Copy"}):null,Object(L.jsx)(x.a,{onClick:l,children:"Close"})]})]})]})}var ee=n(111),te=n.n(ee);function ne(e){var t=Object(r.useState)(!1),n=Object(c.a)(t,2),a=n[0],o=n[1],i=function(){o(!1)};return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(I.a,{title:"About Bundle Viewer",children:Object(L.jsx)(O.a,{onClick:function(){o(!0)},color:"inherit",size:"large",children:Object(L.jsx)(te.a,{})})}),Object(L.jsxs)(Z.a,{open:a,onClose:i,fullWidth:!0,children:[Object(L.jsx)($.a,{children:"About Bundle Viewer"}),Object(L.jsxs)(Q.a,{children:[Object(L.jsxs)("p",{children:["Bundle Viewer is a viewer for ",Object(L.jsx)(N.a,{href:"https://octoprint.org",target:"_blank",rel:"noreferrer noopener",color:"inherit",underline:"always",children:"OctoPrint"})," system info bundles and log files."]}),Object(L.jsxs)("p",{children:["Its source code can be found on ",Object(L.jsx)(N.a,{href:"https://github.com/OctoPrint/bundleviewer.octoprint.org",target:"_blank",rel:"noreferrer noopener",color:"inherit",underline:"always",children:"github.com/OctoPrint/bundleviewer.octoprint.org"}),"."]}),Object(L.jsx)("hr",{}),Object(L.jsx)("p",{children:"Bundleviewer can be installed as a PWA and used a share target on Android."}),Object(L.jsx)("hr",{}),Object(L.jsx)("p",{children:'There\'s an accompanying web extension for Firefox and Chrome to add an "Open in Bundle Viewer" context menu to links in the browser on associated websites:'}),Object(L.jsxs)("p",{style:{textAlign:"center"},children:[Object(L.jsx)(N.a,{href:"https://addons.mozilla.org/en-GB/firefox/addon/open-in-bundle-viewer/",target:"_blank",rel:"noopener noreferrer",color:"inherit",underline:"always",children:Object(L.jsx)("img",{src:"https://img.shields.io/amo/v/open-in-bundle-viewer?label=Firefox%20add-on&logo=firefox",alt:"Firefox add-on"})})," ",Object(L.jsx)(N.a,{href:"https://chrome.google.com/webstore/detail/open-in-bundle-viewer/pjjocccheogfceldegkfnbfmobmblhpp",target:"_blank",rel:"noopener noreferrer",color:"inherit",underline:"always",children:Object(L.jsx)("img",{src:"https://img.shields.io/chrome-web-store/v/pjjocccheogfceldegkfnbfmobmblhpp?label=Chrome%20extension&logo=google%20chrome",alt:"Chrome extension"})})]}),Object(L.jsxs)("p",{children:["Its source code can be found on ",Object(L.jsx)(N.a,{href:"https://github.com/OctoPrint/Open-in-Bundle-Viewer",target:"_blank",rel:"noreferrer noopener",color:"inherit",underline:"always",children:"github.com/OctoPrint/Open-in-Bundle-Viewer"}),"."]}),Object(L.jsxs)("p",{children:["There's also an accompanying ",Object(L.jsx)(N.a,{href:"https://community.octoprint.org/t/open-in-bundle-viewer-browser-extension/30275",target:"_blank",rel:"noreferrer noopener",color:"inherit",underline:"always",children:"forum thread"}),"."]})]}),Object(L.jsx)(J.a,{children:Object(L.jsx)(x.a,{onClick:i,children:"Close"})})]})]})}var re=n(165),ae=n.n(re);function oe(e){var t=Object(r.useState)(!1),n=Object(c.a)(t,2),a=n[0],o=n[1],i=function(){o(!1)};return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(I.a,{title:"Debug Bundle Viewer",children:Object(L.jsx)(O.a,{onClick:function(){o(!0)},color:"inherit",size:"large",children:Object(L.jsx)(ae.a,{})})}),Object(L.jsxs)(Z.a,{open:a,onClose:i,fullWidth:!0,children:[Object(L.jsx)($.a,{children:"Debug info"}),Object(L.jsx)(Q.a,{children:Object(L.jsxs)("dl",{children:[Object(L.jsx)("dt",{children:"shared.text"}),Object(L.jsx)("dd",{children:e.shared.text}),Object(L.jsx)("dt",{children:"shared.url"}),Object(L.jsx)("dd",{children:e.shared.url}),Object(L.jsx)("dt",{children:"shared.title"}),Object(L.jsx)("dd",{children:e.shared.title}),Object(L.jsx)("dt",{children:"url"}),Object(L.jsx)("dd",{children:e.url})]})}),Object(L.jsx)(J.a,{children:Object(L.jsx)(x.a,{onClick:i,children:"Close"})})]})]})}var ie=n(50),ce=n(367),se=n(368),le=n(369),de=n(69),ue=n.n(de),pe=n(284),be=n(166),he=n.n(be),je=n(169),fe=n.n(je),ge=n(170),me=n.n(ge),xe=n(366),Oe=n(167),ve=n.n(Oe),ye=n(168),we=n.n(ye),ke=Object(u.a)((function(e){var t;return{grow:{flexGrow:1},query:(t={position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(B.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(B.a)(e.palette.common.white,.25)}},Object(s.a)(t,e.breakpoints.up("md"),{marginRight:e.spacing(2),marginLeft:e.spacing(2)}),Object(s.a)(t,"flexGrow",1),Object(s.a)(t,"marginTop",e.spacing(2)),Object(s.a)(t,"marginBottom",e.spacing(2)),t),inputRoot:{color:"inherit",width:"100%"},inputInput:{padding:e.spacing(1),transition:e.transitions.create("width"),width:"100%"},result:{color:e.palette.secondary,fontSize:e.typography.pxToRem(12)}}}));function Se(e){var t=e.pos,n=e.count,o=e.handlePerformQuery,i=ke(),s=Object(r.useState)(e.query),l=Object(c.a)(s,2),d=l[0],u=l[1],p=Object(r.useState)(!1),b=Object(c.a)(p,2),h=b[0],j=b[1],f=Object(r.useState)(!1),g=Object(c.a)(f,2),m=g[0],x=g[1],v=a.a.createRef(),y=function(){o&&o(d,h,m)},w=function(){u(""),v.current.value="",e.onCancel&&e.onCancel()},k=function(){j((function(e){var t=!e;return o(d,t,m),t}))},S=function(){x((function(e){var t=!e;return o(d,h,t),t}))},C=function(){return Object(L.jsx)(xe.a,{position:"start",children:Object(L.jsx)(I.a,{title:"Search",children:Object(L.jsx)(O.a,{onClick:y,disabled:""===d,size:"small",children:Object(L.jsx)(he.a,{})})})})},N=function(){return Object(L.jsxs)(xe.a,{position:"end",children:[n?Object(L.jsxs)("span",{className:i.result,children:[t," / ",n]}):null,Object(L.jsx)(I.a,{title:"Toggle regular expression mode",children:Object(L.jsx)(O.a,{onClick:k,color:h?"primary":"default",size:"small",children:Object(L.jsx)(ve.a,{})})}),Object(L.jsx)(I.a,{title:"Toggle case sensitivity",children:Object(L.jsx)(O.a,{onClick:S,color:m?"primary":"default",size:"small",children:Object(L.jsx)(we.a,{})})}),Object(L.jsx)(I.a,{title:"Scroll to previous match",children:Object(L.jsx)(O.a,{onClick:e.onPrev,disabled:0===n,size:"small",children:Object(L.jsx)(fe.a,{})})}),Object(L.jsx)(I.a,{title:"Scroll to next match",children:Object(L.jsx)(O.a,{onClick:e.onNext,disabled:0===n,size:"small",children:Object(L.jsx)(ue.a,{})})}),Object(L.jsx)(I.a,{title:"Delete search query",children:Object(L.jsx)(O.a,{onClick:w,disabled:""===d,size:"small",children:Object(L.jsx)(me.a,{})})})]})};return Object(L.jsx)("div",{className:i.query,children:Object(L.jsx)(U.c,{placeholder:"Search...",classes:{root:i.inputRoot,input:i.inputInput},onChange:function(t){u(t.target.value),e.handleQueryChange&&e.handleQueryChange(d)},onKeyDown:function(e){"Enter"===e.key&&y()},defaultValue:e.query,startAdornment:Object(L.jsx)(C,{}),endAdornment:Object(L.jsx)(N,{}),inputRef:v})})}var Ce=n(188);function Ne(e){var t=e.lines,n=t.reduce((function(e,t){return t.length>e.length?t:e}),"").length,o=t.length,i=e.highlighted,c=e.scrollTo,l=a.a.createRef();Object(r.useEffect)((function(){var e;c>-1&&(null===(e=l.current)||void 0===e||e.scrollToItem(c,"center"))}),[l,c]);var d,p=Object(u.a)((function(e){return{log:{flexGrow:1},pre:Object(s.a)({margin:0,"font-family":"'JetBrains Mono', 'Droid Sans Mono', monospace"},e.breakpoints.down("lg"),{fontSize:e.typography.pxToRem(12)}),linewrap:{width:"".concat(n,"ch !important"),'&[data-matched="true"]':{"background-color":"rgba(255, 255, 0, .2)"}},line:{paddingLeft:e.spacing(1),"&::before":{content:"attr(data-linenumber)",display:"inline-block",width:"".concat(o.toString().length,"ch"),"text-align":"right","margin-right":"1em",color:e.palette.text.disabled},'&[data-loglevel="DEBUG"]':{color:e.palette.text.secondary},'&[data-loglevel="WARNING"]':{color:e.palette.warning.main},'&[data-loglevel="ERROR"]':{color:e.palette.error.main},'&[data-stream="stdin"]':{color:e.palette.info.main},'&[data-stream="stderr"]':{color:e.palette.error.main},'&[data-updateresult="FAILED"]':{color:e.palette.error.main}}}}))(),b=function(e){switch(e.charAt(24)){case" ":return"stdin";case">":return"stdout";case"!":return"stderr";default:return"plain"}};switch(e.language){case"log":d=function(e){var n,r=e.index,a=e.style;return Object(L.jsx)("span",{"data-matched":i.includes(r),style:a,className:p.linewrap,children:Object(L.jsx)("span",{"data-linenumber":r+1,"data-loglevel":(n=t[r],n.split(" ")[5]),className:p.line,children:t[r]})})};break;case"cli":d=function(e){var n=e.index,r=e.style;return Object(L.jsx)("span",{"data-matched":i.includes(n),style:r,className:p.linewrap,children:Object(L.jsx)("span",{"data-linenumber":n+1,"data-stream":b(t[n]),className:p.line,children:t[n]})})};break;case"updatelog":d=function(e){var n,r=e.index,a=e.style;return Object(L.jsx)("span",{"data-matched":i.includes(r),style:a,className:p.linewrap,children:Object(L.jsx)("span",{"data-linenumber":r+1,"data-updateresult":(n=t[r],n.includes("- FAILED -")?"FAILED":n.includes("- SUCCESS -")?"SUCCESS":"PLAIN"),className:p.line,children:t[r]})})};break;default:d=function(e){var n=e.index,r=e.style;return Object(L.jsx)("span",{"data-matched":i.includes(n),style:r,className:p.linewrap,children:Object(L.jsx)("span",{"data-linenumber":n+1,className:p.line,children:t[n]})})}}return Object(L.jsx)("code",{className:p.log,children:Object(L.jsx)("pre",{className:p.pre,children:Object(L.jsx)(Ce.a,{height:500,itemCount:o,itemSize:20,style:{overflow:"scroll"},ref:l,children:d})})})}var Re=n(171),_e=n.n(Re),Pe=n(112),Ie=n.n(Pe),Ee=n(142),ze=n.n(Ee),Te=[{language:"cli",patterns:[/^.*_console.*\.log$/]},{language:"updatelog",patterns:[/^.*_update\.log$/]},{language:"log",patterns:[/^.*\.log$/]}],De=function(e){var t,n=Object(ie.a)(Te);try{for(n.s();!(t=n.n()).done;){var r,a=t.value,o=a.language,i=a.patterns,c=Object(ie.a)(i);try{for(c.s();!(r=c.n()).done;){var s=r.value;if(e.match(s))return console.log("Match! ".concat(s," vs ").concat(e)),o}}catch(l){c.e(l)}finally{c.f()}}}catch(l){n.e(l)}finally{n.f()}return"plain"};function Le(e){var t=Object(R.b)().enqueueSnackbar,n=e.log,a=e.content,o=a.trim().split("\n").map((function(e){return e.trimEnd()+"\n"})),i=o.length,l=Object(r.useState)(""),d=Object(c.a)(l,2),p=d[0],b=d[1],h=Object(r.useState)(!1),j=Object(c.a)(h,2),f=j[0],g=j[1],m=Object(r.useState)(!1),x=Object(c.a)(m,2),O=x[0],v=x[1],y=Object(r.useState)(0),w=Object(c.a)(y,2),k=w[0],S=w[1],C=Object(r.useState)(0),N=Object(c.a)(C,2),_=N[0],P=N[1],I=Object(r.useState)([]),E=Object(c.a)(I,2),z=E[0],T=E[1],D=Object(u.a)((function(e){return{background:{},accordionbar:Object(s.a)({display:"flex",flexGrow:1,alignItems:"center"},e.breakpoints.down("lg"),{flexWrap:"wrap"}),accordiondetails:{display:"flex",flexGrow:1,flexDirection:"column"},grow:{flexGrow:1},icon:{padding:e.spacing(0,1),fontSize:"1.5rem"},secondaryHeading:Object(s.a)({fontSize:e.typography.pxToRem(12),color:e.palette.text.secondary,padding:e.spacing(0,1),textAlign:"right"},e.breakpoints.down("lg"),{textAlign:"left",padding:e.spacing(0,0)}),title:Object(s.a)({flexGrow:1,alignItems:"center"},e.breakpoints.down("lg"),{flexBasis:"100%"}),info:Object(s.a)({},e.breakpoints.down("lg"),{flexBasis:"100%"})}}))(),A=function(){if(z.length){var e=_<z.length-1?_+1:0;S(z[e]),P(e)}},B="serial.log"===n&&0===o.filter((function(e){return e.trim()&&!e.includes("serial.log is currently not enabled")})).length,U=a.includes("!!! UNDERVOLTAGE REPORTED !!!"),F=a.includes("!!! FREQUENCY CAPPING DUE TO OVERHEATING REPORTED !!!"),G=U||F,W=o.filter((function(e){return e.includes("|  Pi Support Plugin")||e.includes("| !Pi Support Plugin")})),M=W.length&&W[W.length-1].includes("| !Pi Support Plugin");return B&&t("Serial log is currently not enabled. Should be enabled when reporting issues with the printer.",{variant:"info"}),M&&t("Pi Support Plugin disabled in the log, there might be an undetected undervoltage or overheating situation!",{variant:"error",persist:!0,key:"pi_support_disabled"}),G&&t("System is or was throttled, system may behave erratically. Fix before further debugging.",{variant:"error",persist:!0,key:"throttled"}),Object(L.jsxs)(ce.a,{defaultExpanded:e.expanded,children:[Object(L.jsx)(se.a,{expandIcon:Object(L.jsx)(ue.a,{}),"aria-controls":"panel-log-"+e.index+"-content",id:"panel-log-"+e.index+"-header",children:Object(L.jsxs)("div",{className:D.accordionbar,children:[Object(L.jsx)("div",{className:D.title,children:Object(L.jsxs)(pe.a,{className:D.heading,style:{display:"flex",alignItems:"center"},children:[n,G?Object(L.jsx)(Ie.a,{className:D.icon,size:"1.5em"}):null,B?Object(L.jsx)(_e.a,{className:D.icon,size:"1.5em"}):null]})}),Object(L.jsxs)("div",{className:D.info,children:[Object(L.jsx)(pe.a,{className:D.secondaryHeading,children:ze()(a.length)+" "+(1===a.length?"char":"chars")}),Object(L.jsx)(pe.a,{className:D.secondaryHeading,children:ze()(i)+" "+(1===i?"line":"lines")})]})]})}),Object(L.jsxs)(le.a,{className:D.accordiondetails,children:[Object(L.jsx)(Se,{className:D.grow,pos:_+1,count:z.length,regexMode:f,onNext:A,onPrev:function(){if(z.length){var e=_>0?_-1:z.length-1;S(z[e]),P(e)}},onCancel:function(){T([]),P(0),b("")},handlePerformQuery:function(e,t,n){if(e)if(console.log("Starting query:",e),e!==p||t!==f||n!==O){console.log('... calculate matches for "'.concat(e,'", regex: ').concat(t,", case sensitive: ").concat(n));var r,a=e.toLowerCase();r=t?function(t){return t.match(e)}:function(t){return t.includes(n?e:a)};var i=o.reduce((function(e,t,a){return r(n?t:t.toLowerCase())&&e.push(a),e}),[]);i.length&&S(i[0]),T(i),P(0),b(e),g(t),v(n),console.log("Indices:",i,", cursor:",0)}else A()}}),Object(L.jsx)(Ne,{lines:o,highlighted:z,scrollTo:k,language:e.language||De(n)})]})]},n)}var Ae=n(113),Be=n(172),Ue=n.n(Be),Fe=n(173),Ge=n.n(Fe),We=n(61),Me=n.n(We);var Ve={diffInSeconds:function(e,t){return Math.floor(Math.abs(e-t)/1e3)},formatTimeDiff:function(e){for(var t=0,n=[{factor:31536e3,unit1:"year",unitn:"years"},{factor:2592e3,unit1:"month",unitn:"months"},{factor:604800,unit1:"week",unitn:"weeks"},{factor:86400,unit1:"day",unitn:"days"},{factor:3600,unit1:"hour",unitn:"hours"},{factor:60,unit1:"minute",unitn:"minutes"}];t<n.length;t++){var r=n[t],a=Math.floor(e/r.factor);if(a>0)return a+" "+(1===a?r.unit1:r.unitn)}return e+" "+(1===e?"second":"seconds")}},qe=["Zero","Zero W"],He=Object(u.a)((function(e){return{accordionbar:Object(s.a)({display:"flex",flexGrow:1,alignItems:"center"},e.breakpoints.down("lg"),{flexWrap:"wrap"}),grow:{flexGrow:1},icon:{padding:e.spacing(0,1),fontSize:"1.5rem"},secondaryHeading:Object(s.a)({fontSize:e.typography.pxToRem(12),color:e.palette.text.secondary,padding:e.spacing(0,1),textAlign:"right"},e.breakpoints.down("lg"),{textAlign:"left",padding:e.spacing(0,0)}),title:Object(s.a)({flexGrow:1,alignItems:"center"},e.breakpoints.down("lg"),{flexBasis:"100%"}),info:Object(s.a)({},e.breakpoints.down("lg"),{flexBasis:"100%"})}}));function Ze(e){var t,n=Object(R.b)().enqueueSnackbar,r=e.info.split("\n").filter((function(e){return""!==e.trim()})).map((function(e){var t=e.split(":"),n=Object(Ae.a)(t);return{key:n[0],value:n.slice(1).join(":")}})),a={},o=Object(ie.a)(r);try{for(o.s();!(t=o.n()).done;){var i=t.value;a[i.key]=i.value}}catch(v){o.e(v)}finally{o.f()}var c=He(),s=function(e,t){var n=a[t];return n?Object(L.jsx)(pe.a,{className:c.secondaryHeading,children:e+" "+n}):null},l=function(e,t){return a[e]&&t(a[e])},d=function(e){return"true"===e.toLowerCase().trim()},u=l("octoprint.safe_mode",(function(e){return d(e)})),p=l("env.plugins.pi_support.throttle_state",(function(e){return"0x0"!==e.trim()})),b=l("env.plugins.pi_support.throttle_check_enabled",(function(e){return!d(e)})),h=l("printer.firmware",(function(e){return e.includes("Marlin bugfix-")})),j=l("env.plugins.pi_support.model",(function(e){return function(e){e=e.toLowerCase();var t,n=Object(ie.a)(qe.map((function(e){return e.toLowerCase()})));try{for(n.s();!(t=n.n()).done;){var r=t.value;if(e.includes("".concat(r," rev"))||e.endsWith(r))return!0}}catch(v){n.e(v)}finally{n.f()}return!1}(e)})),f=l("env.python.version",(function(e){return!Me.a.satisfies(e,">=3.7")})),g=l("env.python.version",(function(e){return!Me.a.satisfies(e,">=2.7.13 <3 || >=3.7")})),m=l("env.python.pip",(function(e){return!Me.a.satisfies(e,">=19.0.1")})),x=l("env.python.setuptools",(function(e){return!Me.a.satisfies(e,">=40.7.1")})),O=l("octoprint.version",(function(e){return Me.a.satisfies(e,"<1.8.0")}))&&l("env.python.pip",(function(e){return Me.a.satisfies(e,">=22")}));return u&&n("Safe mode enabled.",{key:"safemode"}),p&&n("System is or was throttled, system may behave erratically. Fix before further debugging.",{variant:"error",persist:!0,key:"throttled"}),b&&n("Throttle check disabled by user. Potential undervoltage or overheating issues will not be detected.",{variant:"warning",persist:!0,key:"throttle_check_disabled"}),h&&n("Marlin-Bugfix firmware development build detected, firmware may be unstable.",{key:"marlin_bugfix"}),j&&n("Unrecommended Raspberry Pi model detected.",{key:"unrecommended_model",variant:"error",persist:!0}),f&&n("OctoPrint is still running under Python 2",{key:"still_python_2",variant:"warning",persist:!0}),g&&n("Python version is too old for automatic updating.",{key:"python_too_old",variant:"error",persist:!0}),m&&n("Pip version is too old for automatic updating.",{key:"pip_too_old",variant:"error",persist:!0}),x&&n("Setuptools version is too old for automatic updating.",{key:"setuptools_too_old",variant:"error",persist:!0}),O&&n("Susceptible for update/plugin install issue #4392",{key:"issue_4392"}),function(){var e=a["octoprint.last_safe_mode.date"],t=a["systeminfo.generated"];if(e&&t)if("unknown"!==e.trim()){var r=new Date,o=new Date;r.setTime(Date.parse(e.trim())),o.setTime(Date.parse(t.trim()));var i=Ve.formatTimeDiff(Ve.diffInSeconds(r,o));n("Last start in safe mode was ".concat(i," before bundle creation."),{key:"last_safe_mode",variant:"info",persist:!0})}else n("Last start in safe mode is unknown.",{key:"last_safe_mode",variant:"warning",persist:!0})}(),Object(L.jsxs)(ce.a,{defaultExpanded:!0,children:[Object(L.jsx)(se.a,{expandIcon:Object(L.jsx)(ue.a,{}),"aria-controls":"panel-sysinfo-content",id:"panel-sysinfo-header",children:Object(L.jsxs)("div",{className:c.accordionbar,children:[Object(L.jsx)("div",{className:c.title,children:Object(L.jsxs)(pe.a,{className:c.heading,style:{display:"flex",alignItems:"center"},children:["System Information",u?Object(L.jsx)(Ge.a,{className:c.icon,size:"1.5em"}):null,p?Object(L.jsx)(Ie.a,{className:c.icon,size:"1.5em"}):null,h?Object(L.jsx)(Ue.a,{className:c.icon,size:"1.5em"}):null]})}),Object(L.jsxs)("div",{className:c.info,children:[s("OctoPrint","octoprint.version"),s("Python","env.python.version"),s("OctoPi","env.plugins.pi_support.octopi_version"),s("Firmware","printer.firmware")]})]})}),Object(L.jsx)(le.a,{children:Object(L.jsx)("div",{className:c.list,children:r.map((function(e,t){return Object(L.jsxs)("div",{children:[Object(L.jsx)("strong",{children:e.key}),": ",e.value]},e.key)}))})})]})}function Je(e){return Object(L.jsxs)(L.Fragment,{children:[e.bundle.systeminfo?Object(L.jsx)(Ze,{info:e.bundle.systeminfo}):null,e.bundle.logs.map((function(t,n){return Object(L.jsx)(Le,{expanded:!e.bundle.systeminfo&&0===n,log:t.log,content:t.content,index:n},"log-"+n)}))]})}var Qe=n(185);function $e(e){console.log("Rendering NothingChanged...");return Object(L.jsx)("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"},children:Object(L.jsx)(Qe.a,{style:{"flex-basis":"100%"},dropzoneText:"Enter an URL above and press Enter, or drag and drop a file here or click to upload one",onChange:function(t){console.log("Entered NothingLoaded.handleChange..."),t.length>0&&(console.log("File:",t[0]),e.onUpload(t[0])),console.log("Exiting NothingLoaded.handleChange...")},filesLimit:1,acceptedFiles:[".zip",".log",".txt"],maxFileSize:3e7,showPreviewsInDropzone:!1,showAlerts:!1})})}var Ke=n(23),Ye=n(42),Xe=n(181),et=n.n(Xe);function tt(){return(tt=Object(Ye.a)(Object(Ke.a)().mark((function e(t){var n,r,a,o,i;return Object(Ke.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{mode:"cors"});case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not load file from ".concat(t,": ").concat(n.status));case 5:return e.next=7,n.blob();case 7:return r=e.sent,o=n.headers.get("content-disposition"),a=o?(null===(i=et.a.parse(o).parameters)||void 0===i?void 0:i.filename)||"unknown":t.substring(t.lastIndexOf("/")+1),r.name=a,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var nt={loadRemote:function(e){return tt.apply(this,arguments)}},rt=nt,at=n(182),ot=n.n(at);function it(){return(it=Object(Ye.a)(Object(Ke.a)().mark((function e(t){var n,r;return Object(Ke.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,rt.loadRemote(t);case 2:return n=e.sent,r=n.blob,e.next=6,ct(r);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ct(e){return st.apply(this,arguments)}function st(){return(st=Object(Ye.a)(Object(Ke.a)().mark((function e(t){return Object(Ke.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ot.a.loadAsync(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function lt(){return(lt=Object(Ye.a)(Object(Ke.a)().mark((function e(t,n){return Object(Ke.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.file(n);case 2:return e.t0=e.sent,e.abrupt("return",null!==e.t0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function dt(){return(dt=Object(Ye.a)(Object(Ke.a)().mark((function e(t,n,r){return Object(Ke.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=r||"blob",e.next=3,t.file(n).async(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ut={loadZip:ct,loadRemoteZip:function(e){return it.apply(this,arguments)},containsFile:function(e,t){return lt.apply(this,arguments)},getFileContents:function(e,t,n){return dt.apply(this,arguments)}},pt=ut;function bt(){return(bt=Object(Ye.a)(Object(Ke.a)().mark((function e(t){var n,r,a,o,i,c,s,l,d,u,p,b,h;return Object(Ke.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=["octoprint.log","serial.log","terminal.txt","plugin_softwareupdate_console.log","plugin_pluginmanager_console.log"],r=!1,e.prev=2,e.next=5,pt.getFileContents(t,"systeminfo.txt","string");case 5:r=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log("Could not read systeminfo.txt from zip, probably not a bundle...");case 11:a={},o=Object(ie.a)(t.file(/\.(log|txt|gcode|gco|g)$/i)),e.prev=13,o.s();case 15:if((i=o.n()).done){e.next=30;break}if(!(c=i.value).name.startsWith(".")&&!c.name.startsWith("__")&&"systeminfo.txt"!==c.name){e.next=19;break}return e.abrupt("continue",28);case 19:return e.prev=19,e.next=22,c.async("string");case 22:a[c.name]=e.sent,e.next=28;break;case 25:e.prev=25,e.t1=e.catch(19),console.log("Could not read {f.name} from zip...");case 28:e.next=15;break;case 30:e.next=35;break;case 32:e.prev=32,e.t2=e.catch(13),o.e(e.t2);case 35:return e.prev=35,o.f(),e.finish(35);case 38:for(s=[],l=0,d=n;l<d.length;l++)u=d[l],a[u]&&s.push({log:u,content:a[u]});p=Object(ie.a)(Object.keys(a).sort());try{for(p.s();!(b=p.n()).done;)h=b.value,n.includes(h)||s.push({log:h,content:a[h]})}catch(j){p.e(j)}finally{p.f()}return e.abrupt("return",{hasContent:!0,systeminfo:r,logs:s});case 43:case"end":return e.stop()}}),e,null,[[2,8],[13,32,35,38],[19,25]])})))).apply(this,arguments)}function ht(){return(ht=Object(Ye.a)(Object(Ke.a)().mark((function e(t){return Object(Ke.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.name||"unknown",e.next=3,t.text();case 3:return e.t1=e.sent,e.t2={log:e.t0,content:e.t1},e.t3=[e.t2],e.abrupt("return",{hasContent:!0,logs:e.t3});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var jt={loadBundle:function(e){return bt.apply(this,arguments)},loadLog:function(e){return ht.apply(this,arguments)},defaultBundle:{hasContent:!1,systeminfo:"",logs:[]}},ft=jt,gt=n(183),mt=n.n(gt),xt=Object(u.a)((function(e){var t;return{root:{display:"flex",overflow:"auto"},grow:{flexGrow:1},appBar:{},toolbar:Object(s.a)({},e.breakpoints.down("lg"),{"justify-content":"flex-end","flex-wrap":"wrap"}),urlbar:Object(s.a)({flexGrow:1},e.breakpoints.down("lg"),{"flex-basis":"100%",order:99,paddingBottom:e.spacing(2)}),title:{"justify-item":"left"},offset:e.mixins.toolbar,content:Object(s.a)({flexGrow:1,overflow:"auto","padding-top":e.mixins.toolbar.minHeight},e.breakpoints.down("lg"),{"padding-top":2*e.mixins.toolbar.minHeight}),container:(t={minHeight:"100%",display:"flex",flexDirection:"column",paddingTop:e.spacing(4)},Object(s.a)(t,e.breakpoints.down("lg"),{paddingTop:0}),Object(s.a)(t,"paddingBottom",e.spacing(4)),t),footer:{textAlign:"center",padding:"1em"}}}));function Ot(e){var t=function(e,t){var n=Object(r.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(I){return console.log(I),t}})),a=Object(c.a)(n,2),o=a[0],i=a[1];return[o,function(t){try{var n=t instanceof Function?t(o):t;i(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(I){console.log(I)}}]}("enableDarkMode",Object(l.a)("(prefers-color-scheme: dark)",{noSsr:!0})),n=Object(c.a)(t,2),o=n[0],i=n[1],s=Object(r.useState)(e.url),u=Object(c.a)(s,2),j=u[0],f=u[1],g=Object(r.useState)(""),m=Object(c.a)(g,2),O=m[0],v=m[1],y=Object(r.useState)(ft.defaultBundle),w=Object(c.a)(y,2),k=w[0],S=w[1],C=Object(r.useState)(!1),N=Object(c.a)(C,2),I=N[0],E=N[1],z=Object(r.useState)(!1),T=Object(c.a)(z,2),D=T[0],A=T[1],B=o?"dark":"light",U=Object(p.a)(Object(d.a)({palette:{mode:B}}));Object(r.useEffect)((function(){W(e.url)}),[]);var F=a.a.createRef(),G=function(e){return function(){F.current.closeSnackbar(e)}},W=function(e){if(e){E(!1),A(!0),f(e),Z(e),v("");var t=function(e){return e.match(/^https:\/\/github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+\/files\//)?e.replace("https://github.com","https://bundleviewer.octoprint.org/bundles"):e.match(/^https:\/\/community\.octoprint\.org\/uploads\/short-url\//)?e.replace("https://community.octoprint.org/uploads/short-url","https://bundleviewer.octoprint.org/bundles/forum"):e}(e);rt.loadRemote(t).then(M).catch(q)}else H()},M=function(e){pt.loadZip(e).then(V).catch((function(t){var n;try{n=mt.a.parse(e.type).type}catch(r){n=""}""===n||n.startsWith("text/")?ft.loadLog(e).then((function(e){S(e),A(!1)})).catch(q):q(t)}))},V=function(e){ft.loadBundle(e).then((function(e){S(e),A(!1),console.log("Loading complete")})).catch(q)},q=function(e){console.log(e),E(!0)},H=function(){f(""),v(""),E(!1),A(!1),S(ft.defaultBundle),Z(),F.current&&F.current.closeSnackbar()},Z=function(e){var t=new URL(window.location);e?t.searchParams.set("url",e):t.searchParams.delete("url"),window.history.replaceState({},"",t)};return Object(L.jsx)(_.a,{currentVersion:P.a,isEnabled:!0,isVerboseMode:!0,children:Object(L.jsx)(b.a,{injectFirst:!0,children:Object(L.jsx)(h.a,{theme:U,children:Object(L.jsx)(R.a,{ref:F,action:function(e){return Object(L.jsx)(x.a,{onClick:G(e),children:"Close"})},maxSnack:10,anchorOrigin:{vertical:"bottom",horizontal:"center"},dense:!0,preventDuplicate:!0,children:Object(L.jsx)(vt,{bundle:k,url:j,filename:O,error:I,loading:D,shared:e.shared,handleUpload:function(e){E(!1),A(!0),v(e.name),f(""),M(e)},handleReset:H,handleUrlChange:W,darkMode:o,handleDarkModeToggle:function(){i(!o)}})})})})})}function vt(e){var t=e.bundle,n=e.url,r=e.filename,a=e.error,o=e.loading,i=e.shared,c=e.handleUpload,s=e.handleReset,l=e.handleUrlChange,d=e.darkMode,u=e.handleDarkModeToggle,p=xt(),b=function(){return a?(console.log("Rendering error screen"),Object(L.jsxs)(k.a,{severity:"error",children:[Object(L.jsx)(S.a,{children:"Error"}),"Could not load file. Make sure you are trying to load either an OctoPrint systeminfo bundle, a zip containing logs, or a plain text log file. Other files are not supported."]})):o?(console.log("Rendering loading screen"),Object(L.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(L.jsx)(C.a,{})})):t.hasContent?(console.log("Rendering bundle"),Object(L.jsx)(Je,{bundle:t})):(console.log("Rendering empty"),Object(L.jsx)($e,{onUpload:c}))},h=function(){return Object(L.jsx)(f.a,{className:p.appBar,children:Object(L.jsxs)(g.a,{className:p.toolbar,children:[Object(L.jsx)(O.a,{onClick:s,color:"inherit",size:"large",children:Object(L.jsx)(w.a,{})}),Object(L.jsx)(v.a,{mdUp:!0,children:Object(L.jsx)("div",{className:p.grow})}),Object(L.jsx)("div",{className:p.urlbar,children:Object(L.jsx)(q,{url:n,filename:r,handleUrlChange:l})}),n?Object(L.jsx)(X,{url:n}):null,Object(L.jsx)(ne,{}),Object(L.jsx)(oe,{url:n,shared:i}),Object(L.jsx)(A,{darkMode:d,onChange:u})]})})};return Object(L.jsxs)("div",{className:p.root,style:{display:"flex",minHeight:"100vh",flexDirection:"column"},children:[Object(L.jsx)(j.a,{}),Object(L.jsx)(h,{}),Object(L.jsx)("main",{className:p.content,children:Object(L.jsx)(m.a,{maxWidth:"lg",className:p.container,children:Object(L.jsx)(b,{})})}),Object(L.jsxs)("footer",{className:p.footer,children:["\xa9 2021 ",Object(L.jsx)(N.a,{href:"https://octoprint.org",target:"_blank",rel:"noreferrer noopener",color:"inherit",underline:"always",children:"OctoPrint"})," \xb7 ",Object(L.jsx)(N.a,{href:"https://octoprint.org/imprint/",target:"_blank",rel:"noreferrer noopener",color:"inherit",underline:"always",children:"Imprint"})," \xb7 ",Object(L.jsx)(N.a,{href:"https://octoprint.org/privacy/",target:"_blank",rel:"noreferrer noopener",color:"inherit",underline:"always",children:"Privacy Policy"})]})]})}var yt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function wt(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var kt=window.location.search,St=new URLSearchParams(kt),Ct={url:St.get("url",""),text:St.get("text",""),title:St.get("title","")},Nt="";if(Ct.url)Nt=Ct.url;else if(Ct.text){var Rt=Ct.text.match(/https?:\/\/[^\s]+/gi);Rt&&(Nt=Rt[0])}console.log("URL",Nt),i.a.render(Object(L.jsx)(Ot,{url:Nt,shared:Ct}),document.querySelector("#root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");yt?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):wt(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):wt(t,e)}))}}()}},[[273,1,2]]]);
//# sourceMappingURL=main.a5b25554.chunk.js.map