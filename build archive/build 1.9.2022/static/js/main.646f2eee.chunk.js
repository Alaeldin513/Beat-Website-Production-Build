(this.webpackJsonpogbeats=this.webpackJsonpogbeats||[]).push([[0],{17:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a(21),n=a.n(s),r=a(9),i=a(3),o=(a(28),a(6)),l=(a(29),a(12)),j=a(22),u=a(1);var b=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!0),i=Object(o.a)(n,2),b=(i[0],i[1]),d=function(){return s(!a)},m=function(){window.innerWidth<=960?b(!1):b(!0)};return Object(c.useEffect)((function(){m()}),[]),window.addEventListener("resize",m),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("nav",{className:"navbar",children:[Object(u.jsxs)("a",{href:"/",className:"logopic",children:['"',Object(u.jsx)(l.b,{}),' Logo"']}),Object(u.jsx)("a",{href:"/",className:a?"whitetlname":"tlname",children:'"Producer Name Here"'}),Object(u.jsx)("a",{className:a?"BurgerChange":"BurgerMenu",onClick:d,children:a?Object(u.jsx)(j.a,{}):Object(u.jsx)(l.a,{})})]}),Object(u.jsx)("div",{children:Object(u.jsx)("h1",{className:a?"nav-menu active":"nav-menu",children:Object(u.jsxs)(r.b,{href:"www.google.com",children:[Object(u.jsx)(r.b,{to:"/about",children:Object(u.jsx)("a",{className:a?"Beats":"Not-Beats",onClick:d,children:"About"})}),Object(u.jsx)(r.b,{to:"/beats",children:Object(u.jsx)("a",{className:a?"Beatpage":"Not-Beatpage",onClick:d,children:"Beats"})}),Object(u.jsx)(r.b,{to:"/songs",children:Object(u.jsxs)("a",{className:a?"Songs":"Not-Songs",onClick:d,children:["Songs/",Object(u.jsx)("br",{}),"Collab"]})})]})})})]})};a(36);var d=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"backsplash"})})};a(37);function m(){return Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("div",{className:"starterText",children:"Updates/Content Weekly"}),Object(u.jsx)("div",{className:"starterText2",children:"Dm comments/inquiries"}),Object(u.jsx)("div",{className:"starterText3",children:"Enjoy"}),Object(u.jsx)("div",{className:"starterText4",children:"15 songs and 45 Minutes of freestyle, press play once and it'll run through 'em all"})]})}a(17);var h=a(13),g=a(14);var f=function(e){var t,a,s,n,i=Object(c.useState)([{title:"The Funk",artist:"2 chainzprogra",img_src:"../images/fire.jpg",src:"../beats/the funk prod.mp3"},{title:"Mimosa",artist:"Machine Gun Kelly",img_src:"../images/mimosa.jfif",src:"../beats/hornsprod.mp3"},{title:"Orbit",artist:"2 chainz",img_src:"../images/orbit.jpg",src:"../beats/orbitprod.mp3"},{title:"Trapavelli",artist:"2 chainz",img_src:"../images/ig88.jfif",src:"../beats/trapavelliprod1.mp3"},{title:"Halftime",artist:"2 chainz",img_src:"../images/halftime.jfif",src:"../beats/halftime Kyrie Prod.mp3"},{title:"Let it Go",artist:"2 chainz",img_src:"../images/purplebeach.jpg",src:"../beats/let it go prod.mp3"},{title:"Delta Ave",artist:"2 chainz",img_src:"../images/hoh.jpg",src:"../beats/delta ave prod.mp3"},{title:"Riding out",artist:"2 chainz",img_src:"../images/kfc.jfif",src:"../beats/Riding out.mp3"},{title:"Rako",artist:"2 chainz",img_src:"../images/rako.jpg",src:"../beats/Rako.mp3"},{title:"Get it",artist:"2 chainz",img_src:"../images/get.jpg",src:"../beats/Get.mp3"},{title:"42 Dugg",artist:"2 chainz",img_src:"../images/piano.jfif",src:"../beats/dugg.mp3"},{title:"KISS",artist:"2 chainz",img_src:"../images/kiss.jpeg",src:"../beats/KISS1 G prod.mp3"},{title:"Void",artist:"2 chainz",img_src:"../images/void.jpeg",src:"../beats/void prod.mp3"},{title:"Ronald Reagan Era",artist:"2 chainz",img_src:"../images/ronaldreagan.jpeg",src:"../beats/ronald reagan prod.mp3"},{title:"You Ain't Ever",artist:"2 chainz",img_src:"../images/youaintever.jpeg",src:"../beats/you ain't ever prod.mp3"}]),l=Object(o.a)(i,1)[0],j=Object(c.useState)(0),b=Object(o.a)(j,2),d=b[0],m=b[1],f=Object(c.useState)(0),O=Object(o.a)(f,2),p=(O[0],O[1]),x=Object(c.useState)(!1),v=Object(o.a)(x,2),N=v[0],w=v[1],y=Object(c.useState)(0),k=Object(o.a)(y,2),S=k[0],z=k[1],_=Object(c.useState)(0),M=Object(o.a)(_,2),C=M[0],E=M[1],A=Object(c.useRef)(),B=Object(c.useRef)(),R=Object(c.useRef)();s=0,n=l.length-1,s=Math.ceil(s),n=Math.floor(n),Math.floor(Math.random()*(n-s+1)+s),Object(c.useEffect)((function(){p((function(){return d+1>l.length-1?0:d+1}))}),[d]),Object(c.useEffect)((function(){var e=Math.floor(A.current.duration);z(e),B.current.max=e}),[null===A||void 0===A||null===(t=A.current)||void 0===t?void 0:t.loadedmetadata,null===A||void 0===A||null===(a=A.current)||void 0===a?void 0:a.readyState,C,N]);var F=function(e){var t=Math.floor(e/60),a=t<10?"0".concat(t):"".concat(t),c=Math.floor(e%60),s=c<10?"0".concat(c):"".concat(c);return"".concat(a,":").concat(s)};Object(c.useEffect)((function(){1===d&&0===C?w(!1):(A.current.play(),w(!0))}),[d]);var T=function e(){B.current.value=A.current.currentTime,G(),R.current=requestAnimationFrame(e)},P=function(){A.current.currentTime=B.current.value,G()},G=function(){B.current.style.setProperty("--seek-before-width","".concat(B.current.value/S*100,"%")),E(B.current.value)},K=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];m(e?function(){var e=d;return++e>l.length-1&&(e=0),e}:function(){var e=d;return--e<0&&(e=l.length-1),e})};return Object(c.useEffect)((function(){F(C)===F(S)?(console.log("ebola"),K(!0)):console.log("john")}),[C]),Object(u.jsxs)("div",{className:"Audioplayer",children:[Object(u.jsx)(r.b,{href:"https://cdn.rawgit.com/mfd/f3d96ec7f0e8f034cc22ea73b3797b59/raw/856f1dbb8d807aabceb80b6d4f94b464df461b3e/gotham.css",rel:"sytlesheet"}),Object(u.jsx)("audio",{src:l[d].src,ref:A,preload:"metadata"}),Object(u.jsx)("div",{className:"songPhotoContainer",children:Object(u.jsx)("img",{className:"songPhoto",src:l[d].img_src})}),Object(u.jsxs)("div",{className:"currentlyPlaying",children:["Now Playing:",Object(u.jsx)("br",{}),l[d].title]}),Object(u.jsx)("button",{className:"forwardbackward",onClick:function(){!function(){m(arguments.length>0&&void 0!==arguments[0]&&!arguments[0]?function(){var e=d;return++e<0&&(e=l.length-1),e}:function(){var e=d;return--e<0&&(e=l.length-1),e})}(),w(!0)},children:Object(u.jsx)(h.a,{})}),Object(u.jsx)("button",{onClick:function(){var e=N;w(!e),e?(A.current.pause(),cancelAnimationFrame(R.current)):(A.current.play(),R.current=requestAnimationFrame(T))},className:"playpause",children:N?Object(u.jsx)(g.a,{className:"pause"}):Object(u.jsx)(g.b,{className:"play"})}),Object(u.jsx)("button",{className:"forwardbackward",onClick:function(){K(),w(!0)},children:Object(u.jsx)(h.b,{})}),Object(u.jsx)("input",{type:"range",className:"progressbar",defaultValue:"0",ref:B,onChange:P}),Object(u.jsx)("div",{className:"currenttime",children:F(C)}),Object(u.jsx)("div",{className:"duration",children:S&&!isNaN(S)&&F(S)})]})};a(38);function O(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=(t[0],t[1],Object(c.useState)(!0)),s=Object(o.a)(a,2),n=(s[0],s[1]),r=function(){window.innerWidth<=960?n(!1):n(!0)};return Object(c.useEffect)((function(){r()}),[]),window.addEventListener("resize",r),Object(u.jsx)("div",{className:"mainBox",children:Object(u.jsx)("div",{className:"beatsMenu",children:Object(u.jsxs)("div",{class:"card",style:{width:"90%"},children:[Object(u.jsx)("div",{class:"card-header",children:"Featured"}),Object(u.jsxs)("ul",{class:"list-group list-group-flush",children:[Object(u.jsx)("li",{class:"list-group-item",children:"An item"}),Object(u.jsx)("li",{class:"list-group-item",children:"A second item"}),Object(u.jsx)("li",{class:"list-group-item",children:"A third item"})]})]})})})}a(39);function p(){return Object(u.jsx)("div",{className:"mainBox",children:Object(u.jsx)("div",{className:"songssMenu"})})}var x=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(r.a,{children:[Object(u.jsx)(i.a,{path:"/"}),Object(u.jsx)(i.a,{path:"/about",component:m}),Object(u.jsx)(i.a,{path:"/beats",component:O}),Object(u.jsx)(i.a,{path:"/songs",component:p}),Object(u.jsx)(b,{}),Object(u.jsx)(d,{}),Object(u.jsx)(f,{})]})})};n.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.646f2eee.chunk.js.map