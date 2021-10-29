(this["webpackJsonpfont-icon-to-csharp"]=this["webpackJsonpfont-icon-to-csharp"]||[]).push([[0],{119:function(e,t){},155:function(e,t,n){},156:function(e,t,n){},162:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},178:function(e,t,n){},179:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(33),s=n.n(r),i=(n(155),n(13)),o=n(10),j=(n(156),n(157),n(158),n(23)),l=n(72),u=n.n(l),d=n(90),b=n(136),h=(n(162),n.p+"static/media/dragdropfiles.07b800f3.svg"),O=n.p+"static/media/iconslogo.b5286b7c.svg",p=n(130);function f(e){return x(FileReader.prototype.readAsArrayBuffer,e)}function x(e,t){var n=new FileReader;return new Promise((function(c,a){n.onload=function(){return c(n.result)},n.onerror=function(){n.abort(),a(new DOMException("Problem parsing input file."))},e.call(n,t)}))}function m(e){return v.apply(this,arguments)}function v(){return(v=Object(d.a)(u.a.mark((function e(t){var n,c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(t);case 3:return n=e.sent,c=p.a.parse(n),a=g(c),e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function g(e){for(var t=[],n=0;n<e.glyphs.length;n++){var c=e.glyphs.get(n);c.unicode&&t.push(c)}return t}var C=n(196),F=n(194),w=n(189),y=Object(c.createContext)({fontFilename:"",updateFontFilename:function(e){}}),N=(y.Consumer,y.Provider),k=y,S=n(193),P=n(188),I=n(3);function E(e){var t=e.inverted,n=void 0===t||t,c=e.content,a=void 0===c?"Loading...":c;return Object(I.jsx)(S.a,{active:!0,inverted:n,children:Object(I.jsx)(P.a,{content:a})})}var R=function(){var e=Object(o.f)(),t=Object(c.useState)(!1),n=Object(i.a)(t,2),a=n[0],r=n[1];Object(c.useContext)(k).updateFontFilename("");var s=Object(c.useCallback)(function(){var t=Object(d.a)(u.a.mark((function t(n){var c,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((c=n[0]).name.endsWith(".ttf")||c.name.endsWith(".otf")||c.name.endsWith(".woff"))){t.next=10;break}if(c){t.next=4;break}return t.abrupt("return");case 4:return r(!0),t.next=7,m(c);case 7:a=t.sent,r(!1),a&&a.length>0&&e.push("/editor",{glyphs:a,fileName:c.name});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[]),l=Object(b.a)({onDrop:s,accept:".ttf,.otf,.woff"}),p=l.getRootProps,f=l.getInputProps;l.isDragActive;return a?Object(I.jsx)(E,{}):Object(I.jsx)(c.Fragment,{children:Object(I.jsx)("div",{className:"Upload-container",children:Object(I.jsxs)(C.a,{columns:3,stackable:!0,children:[Object(I.jsx)(C.a.Column,{width:7,children:Object(I.jsxs)("div",Object(j.a)(Object(j.a)({},p()),{},{children:[Object(I.jsx)("img",{src:h,alt:"drag drop files"}),Object(I.jsx)("input",Object(j.a)({},f())),Object(I.jsx)("h2",{children:"Drag & Drop Files"}),Object(I.jsx)("p",{children:"Drop any TTF/OTF/WOFF file"}),Object(I.jsx)(F.a,{style:{backgroundColor:"rgb(67, 39, 181)",color:"white"},children:"BROWSE YOUR COMPUTER FILES"})]}))}),Object(I.jsx)(C.a.Column,{width:1,children:Object(I.jsx)(w.a,{vertical:!0,inverted:!0,children:"OR"})}),Object(I.jsx)(C.a.Column,{width:7,children:Object(I.jsxs)("div",{children:[Object(I.jsx)("img",{src:O,alt:"drag drop files"}),Object(I.jsx)("h2",{children:"Looking for font icon?"}),Object(I.jsx)("p",{children:"Check out popular font icon"}),Object(I.jsx)(F.a,{inverted:!0,children:"BROWSE POPULAR ICON FONTS"})]})})]})})})},D=n(85),L=n.n(D);function T(e){var t,n=e.toString(16);return n.length<=4?(n=n.padStart(4,"0"),t="u"):(n=n.padStart(8,"0"),t="U"),"\\".concat(t).concat(n)}function W(e,t){var n="\nstatic class ".concat(e);return n+="\n{",t.forEach((function(e){n+=function(e){return"\n\tpublic const string ".concat(L.a.upperFirst(L.a.camelCase(e.name)),' = "').concat(T(e.unicode),'";')}(e)})),n+="\n}"}function A(e,t){var n="\npublic enum ".concat(e);return n+="\n{",t.forEach((function(e){n+=function(e){return"\n\t".concat(L.a.upperFirst(L.a.camelCase(e.name)),' = "').concat(T(e.unicode),'",')}(e)})),n+="\n}"}var B=n(135),U=n(190),M=n(76),H=n(191),J=(n(173),n(137)),z=(n(174),function(e){var t=e.glyph;return Object(I.jsxs)("div",{className:"Font-Icon-Container",children:[Object(I.jsx)("canvas",{ref:function(e){if(e&&t&&"function"===typeof t.getPath){e.width=32,e.height=32;var n=e.getContext("2d"),c=t.getPath(0,28,28);c.fill="#4327B5",c.draw(n)}}}),Object(I.jsx)("h4",{className:"Font-Icon-Name",children:t.name})]})});var G=function(e){var t=e.glyphs,n=e.screenPercent,a=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}(),r=Object(c.useState)(t),s=Object(i.a)(r,2),o=s[0],j=s[1],l=Object(c.useState)(""),u=Object(i.a)(l,2),d=(u[0],u[1]),b=Math.floor(a.width*n/144);return Object(I.jsxs)(c.Fragment,{children:[Object(I.jsxs)("div",{className:"ui search",children:[Object(I.jsxs)("div",{className:"ui icon input",style:{fontSize:"1.6rem",width:"90%"},children:[Object(I.jsx)("input",{onChange:function(e){j(t.filter((function(t){return t.name.includes(e.target.value)}))),d(e.target.value)},className:"prompt",type:"text",placeholder:"Search icons for..."}),Object(I.jsx)("i",{className:"search icon"})]}),Object(I.jsx)("div",{className:"results"})]}),Object(I.jsx)("br",{}),Object(I.jsx)("br",{}),Object(I.jsx)(C.a,{columns:b,style:{innerWidth:"45vw"},children:function(){for(var e=Object(J.a)(o),t=[],n=[];e[0];){for(var c=0;c<b;c++)e[0]&&n.push(e.shift());t.push(n),n=[]}return t.map((function(e,t){return Object(I.jsx)(C.a.Row,{children:e.map((function(e){return Object(I.jsx)(C.a.Column,{children:Object(I.jsx)(z,{glyph:e},e.name)},e.name)}))},t)}))}()})]})},Y=n(122),q=n.n(Y),K=n(134),Q=n.n(K),V=n(123),X=[{key:1,text:"C# Class ",value:"csharpClass"},{key:2,text:"C# Enum  ",value:"csharpEnum"}];function Z(){var e=Object(o.g)().state,t=e.glyphs,n=e.fileName;Object(c.useContext)(k).updateFontFilename(n);var a=n.split(".")[0],r=a,s=Object(c.useState)(W(a,t)),j=Object(i.a)(s,2),l=j[0],u=j[1],d=Object(c.useCallback)(q()((function(e){return u(e)}),500),[]),b=Object(c.useCallback)(q()((function(){return V.b.success("Code copied to clipboard")}),500),[]),h=Object(c.useState)(X[0].value),O=Object(i.a)(h,2),p=O[0],f=O[1];if(t){return Object(I.jsx)(c.Fragment,{children:Object(I.jsx)(U.a,{children:Object(I.jsxs)(C.a,{columns:2,relaxed:"very",stackable:!0,children:[Object(I.jsxs)(C.a.Column,{width:10,children:[Object(I.jsx)("br",{}),Object(I.jsx)("br",{}),Object(I.jsx)(G,{glyphs:t,screenPercent:.625})]}),Object(I.jsxs)(C.a.Column,{width:6,children:[Object(I.jsxs)("div",{style:{display:"flex",margin:"20px 30px",justifyContent:"space-around"},children:[Object(I.jsx)(V.a,{position:"bottom-right",hideProgressBar:!0,theme:"colored",autoClose:1e3}),Object(I.jsx)(Q.a,{text:l,onCopy:function(){b()},children:Object(I.jsxs)(F.a,{inverted:!0,children:[Object(I.jsx)(M.a,{name:"copy"}),"Copy to clipboard"]})}),Object(I.jsx)(H.a,{button:!0,className:"icon",floating:!0,labeled:!0,onChange:function(e,n){switch(f(n.value),n.value){case"csharpClass":u(W(a,t));break;case"csharpEnum":u(A(r,t))}},options:X,value:p})]}),Object(I.jsx)(B.a,{onChange:function(e){d(e)},height:"99%",defaultLanguage:"csharp",value:l,theme:"vs-dark"})]})]})})})}return Object(I.jsx)("div",{children:"Unable to read font glyphs"})}var $=n(32),_=n(192),ee=(n(178),n.p+"static/media/font2csharp.33c576b3.svg"),te=function(e){var t=e.uploadFileName;t=Object(c.useContext)(k).fontFilename;var n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],s=a[1];return Object(I.jsxs)(_.a,{inverted:!0,fixed:"top",secondary:!0,children:[Object(I.jsx)(_.a.Item,{header:!0,children:Object(I.jsx)("div",{children:Object(I.jsx)("img",{src:ee,alt:"font 2 csharp",height:"32"})})}),t&&Object(I.jsxs)(c.Fragment,{children:[Object(I.jsx)(_.a.Item,{children:Object(I.jsx)("div",{className:"vertical-line"})}),Object(I.jsx)(_.a.Item,{children:Object(I.jsx)("h2",{children:t})}),Object(I.jsx)(_.a.Item,{position:"right",as:$.b,to:"/",header:!0,children:Object(I.jsxs)(F.a,{inverted:!0,children:[Object(I.jsx)(M.a,{name:"upload"}),"UPLOAD ANOTHER FONT"]})}),Object(I.jsx)(_.a.Item,{as:$.b,to:"/",header:!0,children:Object(I.jsxs)(F.a,{children:[Object(I.jsx)(M.a,{name:"download"}),"DOWNLOAD FILE"]})})]}),Object(I.jsx)(_.a.Item,{position:t?void 0:"right",children:Object(I.jsx)(F.a.Group,{inverted:!0,children:Object(I.jsx)(H.a,{className:"button icon",icon:"info",floating:!0,onChange:function(e,t){"issue"===t.value&&(s(""),window.open("https://www.google.com"))},options:[{key:1,text:"Submit an Issue",value:"issue"},{key:2,text:"Support this Project",value:"support"}],value:r})})})]})};var ne=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],r={fontFilename:n,updateFontFilename:function(e){a(e)}};return Object(I.jsx)($.a,{basename:"https://thinhtrana.github.io/font-icon-to-csharp",children:Object(I.jsx)(N,{value:r,children:Object(I.jsxs)("div",{className:"App",children:[Object(I.jsx)(te,{}),Object(I.jsxs)(o.c,{children:[Object(I.jsx)(o.a,{exact:!0,path:"/",component:R}),Object(I.jsx)(o.a,{path:"/upload",component:R}),Object(I.jsx)(o.a,{path:"/editor",component:Z})]})]})})})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,197)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)($.a,{children:Object(I.jsx)(ne,{})})}),document.getElementById("root")),ce()}},[[179,1,2]]]);
//# sourceMappingURL=main.9c6fec93.chunk.js.map