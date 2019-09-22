(window["webpackJsonpreact-circular-slider"]=window["webpackJsonpreact-circular-slider"]||[]).push([[0],{13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),i=n.n(o),c=(n(13),n(1)),s=n(6),l=n(7);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach(function(t){Object(s.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var f="ontouchstart"in window,m={DOWN:f?"touchstart":"mousedown",UP:f?"touchend":"mouseup",MOVE:f?"touchmove":"mousemove"},g=function(e){var t=e.label,n=void 0===t?"Degrees":t,o=e.width,i=void 0===o?280:o,s=e.labelColor,u=void 0===s?"#322777":s,f=e.progressColors,g=void 0===f?{from:"#80C3F3",to:"#4990E2"}:f,p=e.trackColor,h=void 0===p?"#DDDEFB":p,v=e.progressSize,b=void 0===v?4:v,w=e.trackSize,O=void 0===w?4:w,y=e.onChange,E=Object(a.useState)({mounted:!1,isDragging:!1,width:0,radius:0,degrees:0,indicator:{radians:-1,x:0,y:0},dashFullArray:0,dashFullOffset:0}),F=Object(l.a)(E,2),x=F[0],j=F[1],D=Object(a.useRef)(null),k=Object(a.useRef)(null),C=Object(a.useCallback)(function(){var e=D.current.getBoundingClientRect(),t=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:e.top+n,left:e.left+t,radius:e.width/2}},[]),P=Object(a.useCallback)(function(e){var t=x.radius,n=e+1.5708,a=(n>0?n:2*Math.PI+n)*(360/(2*Math.PI)),r=x.dashFullArray-a/360*x.dashFullArray;y(Math.round(a)),j(function(n){return d({},n,{dashFullOffset:r,degrees:Math.round(a),indicator:{radians:e,x:t*Math.cos(e)+t,y:t*Math.sin(e)+t}})})},[x.dashFullArray,x.radius,y]),M=Object(a.useCallback)(function(e){j(function(e){return d({},e,{isDragging:!0})})},[]),S=Object(a.useCallback)(function(e){if(e.preventDefault(),x.isDragging){var t;"touchmove"===e.type&&(t=e.changedTouches[0]);var n=("touchmove"===e.type?t.pageX:e.pageX)-(C().left+x.radius),a=("touchmove"===e.type?t.pageY:e.pageY)-(C().top+x.radius),r=Math.atan2(a,n);P(r)}},[x.isDragging,x.radius,P,C]),N=function(e){j(function(e){return d({},e,{isDragging:!1})})},z=function(e){j(function(t){return d({},t,{width:e.currentTarget.innerWidth})})};Object(a.useEffect)(function(){var e=C(),t=k.current.getTotalLength();j(function(n){return d({},n,{mounted:!0,dashFullArray:t,dashFullOffset:t,radius:e.radius,indicator:{radians:0,x:e.radius,y:0}})})},[C,x.width]),Object(a.useEffect)(function(){return window.addEventListener("resize",z),x.isDragging?(window.addEventListener(m.MOVE,S,{passive:!1}),window.addEventListener(m.UP,N,{passive:!1}),function(){window.removeEventListener(m.MOVE,S),window.removeEventListener(m.UP,N)}):function(){window.removeEventListener("resize",z)}},[x.isDragging,S]);var A=c.a.create({circularSlider:{position:"relative",display:"inline-block",opacity:0,transition:"opacity 1s ease-in"},mounted:{opacity:1},indicator:{position:"absolute",left:"-18px",top:"-18px",cursor:"grab",zIndex:3},svg:{position:"relative",zIndex:2},drag:{cursor:"grabbing"},pause:{animationPlayState:"paused"},animation:{animationDuration:"1500ms",transformOrigin:"50% 50%",animationIterationCount:"infinite",animationTimingFunction:"ease-out",animationName:[{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.8)"},"100%":{transform:"scale(1)"}}]},labels:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"".concat(u),zIndex:1},value:{fontSize:"4rem",marginBottom:"2rem"},description:{fontSize:"1rem",textTransform:"uppercase"}});return r.a.createElement("div",{className:Object(c.b)(A.circularSlider,x.mounted&&A.mounted),ref:D},r.a.createElement("svg",{width:"".concat(i,"px"),height:"".concat(i,"px"),viewBox:"0 0 ".concat(i," ").concat(i),overflow:"visible",className:Object(c.b)(A.svg)},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"gradient",x1:"100%",x2:"0%"},r.a.createElement("stop",{offset:"0%",stopColor:g.from}),r.a.createElement("stop",{offset:"100%",stopColor:g.to}))),r.a.createElement("circle",{strokeWidth:O,fill:"none",stroke:h,cx:i/2,cy:i/2,r:i/2}),r.a.createElement("path",{ref:k,strokeDasharray:x.dashFullArray,strokeDashoffset:x.dashFullOffset,strokeWidth:b,strokeLinecap:"round",fill:"none",stroke:"url(#gradient)",d:"\n                        M ".concat(i/2,", ").concat(i/2,"\n                        m 0, -").concat(i/2,"\n                        a ").concat(i/2,",").concat(i/2," 0 0,1 0,").concat(i,"\n                        a -").concat(i/2,",-").concat(i/2," 0 0,1 0,-").concat(i,"\n                    ")})),r.a.createElement("div",{style:{transform:"translate(".concat(x.indicator.x,"px, ").concat(x.indicator.y,"px)")},className:Object(c.b)(A.indicator,x.isDragging&&A.drag,x.isDragging&&A.pause),onMouseDown:M,onTouchStart:M},r.a.createElement("svg",{width:"36px",height:"36px",viewBox:"0 0 36 36"},r.a.createElement("circle",{fill:"#5C4BEA",fillOpacity:"0.2",stroke:"none",cx:"18",cy:"18",r:"18",className:Object(c.b)(!x.isDragging&&A.animation)}),r.a.createElement("circle",{fill:"#5C4BEA",stroke:"none",cx:"18",cy:"18",r:"12"}),r.a.createElement("rect",{fill:"#FFFFFF",x:"13",y:"14",width:"9",height:"1"}),r.a.createElement("rect",{fill:"#FFFFFF",x:"13",y:"17",width:"9",height:"1"}),r.a.createElement("rect",{fill:"#FFFFFF",x:"13",y:"20",width:"9",height:"1"}))),r.a.createElement("div",{className:Object(c.b)(A.labels)},r.a.createElement("div",{className:Object(c.b)(A.description)},n),r.a.createElement("div",{className:Object(c.b)(A.value)},r.a.createElement("code",null,x.degrees,"\xb0"))))},p=function(){var e=c.a.create({wrapper:{marginTop:"4rem",textAlign:"center"}});return r.a.createElement("div",{className:Object(c.b)(e.wrapper)},r.a.createElement(g,{onChange:function(e){console.log(e)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.b3432331.chunk.js.map