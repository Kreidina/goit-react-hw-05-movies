"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[862],{629:function(e,t,n){var a=n(861),c=n(757),r=n.n(c),o=n(243),i=n(596);o.Z.defaults.baseURL="https://api.themoviedb.org/";var s="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmYzZWM2NGFiZmI1MWFiZTEzMTgxYThiYjE5MjlmMCIsInN1YiI6IjY0MzAzYmY5NmRlYTNhMDBiNTRlOTNlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3wOLdxcoA2DAJirmMuSvEYNDya1YwIdBvChC6VOo9Vs";function l(){return(l=(0,a.Z)(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("3/trending/all/day?page=1",{headers:{Authorization:"".concat(s),Accept:"application/json"}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function u(){return(u=(0,a.Z)(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("3/search/movie?&".concat(t,"&include_adult=false&&page=1"),{headers:{Authorization:"".concat(s),Accept:"application/json"}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",i.Am.error("An error occurred on the server. Try again later"));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function p(){return(p=(0,a.Z)(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("3/movie/".concat(t,"?language=en-US"),{headers:{Authorization:"".concat(s),Accept:"application/json"}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",i.Am.error("Unfortunately, there is no information about the film"));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(){return(d=(0,a.Z)(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("3/movie/".concat(t,"/credits?"),{headers:{Authorization:"".concat(s),Accept:"application/json"}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function h(){return(h=(0,a.Z)(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("3/movie/".concat(t,"/reviews?&page=1"),{headers:{Authorization:"".concat(s),Accept:"application/json"}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var f={fetchTrendingMovies:function(){return l.apply(this,arguments)},fetchSearchMovies:function(e){return u.apply(this,arguments)},fetchDetailsMovies:function(e){return p.apply(this,arguments)},fetchCastMovies:function(e){return d.apply(this,arguments)},fetchReviewsMovies:function(e){return h.apply(this,arguments)}};t.Z=f},862:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(439),c=n(184),r=function(e){var t=e.details,n=t.original_title,a=t.poster_path,r=t.genres,o=t.release_date,i=t.overview,s=t.vote_average;return t?(0,c.jsx)(c.Fragment,{children:t&&(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)("img",{className:"card-img",src:null!==a?"https://image.tmdb.org/t/p/w500".concat(a):"https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg",alt:n}),(0,c.jsxs)("div",{className:"info-container",children:[(0,c.jsxs)("h1",{className:"card-title",children:[n,(0,c.jsxs)("span",{className:"yers",children:["(",o&&o.slice(0,4),")"]})]}),(0,c.jsxs)("p",{className:"card-user",children:["Rating: ",null===s||void 0===s?void 0:s.toFixed(1)]}),(0,c.jsx)("h2",{className:"card-overview-title",children:"Overview"}),(0,c.jsx)("p",{className:"card-overview",children:i}),(0,c.jsx)("h2",{className:"card-genres",children:"Genres"}),(0,c.jsx)("ul",{className:"genre-list",children:null===r||void 0===r?void 0:r.map((function(e){return(0,c.jsx)("li",{className:"genre-item",children:e.name},e.id)}))})]})]})}):null},o=n(133),i=n.n(o),s=n(629),l=n(791),u=n(689),p=n(87),d=function(){var e=(0,u.UO)(),t=(0,l.useState)([]),n=(0,a.Z)(t,2),o=n[0],d=n[1],h=(0,u.TH)(),f=(0,l.useRef)(h.state),v=(0,l.useState)(!1),x=(0,a.Z)(v,2),m=x[0],g=x[1],b=(0,l.useMemo)((function(){return g(!0),s.Z.fetchDetailsMovies(e.id)}),[e.id]);if((0,l.useEffect)((function(){g(!0),b.then((function(e){g(!1),d(e)}))}),[b]),m)return(0,c.jsx)(i(),{color:"#ff4800",size:70,cssOverride:{margin:"80px auto"}});var y=Object.keys(o).length<25;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"container-details",style:{padding:"0 20px"},children:[(0,c.jsx)("button",{type:"button",style:{padding:"4px",borderRadius:"3px",backgroundColor:"#fff",border:"none",boxShadow:"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 3px",margin:"20px 15px 0"},children:(0,c.jsx)(p.rU,{to:f.current,style:{textDecoration:"none"},children:"Go Back"})}),!y&&(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(r,{details:o})})]}),!y&&(0,c.jsxs)("div",{style:{border:" 2px solid rgba(0, 0, 0, 0.35) ",margin:"10px 0",padding:"15px 20px"},children:[(0,c.jsx)("p",{children:"Additional information"}),(0,c.jsxs)("ul",{style:{listStyle:"none"},children:[(0,c.jsx)("li",{style:{margin:"10px"},children:(0,c.jsx)(p.rU,{to:"cast",children:"Cast"})}),(0,c.jsx)("li",{style:{margin:"10px"},children:(0,c.jsx)(p.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,c.jsx)(l.Suspense,{children:(0,c.jsx)(u.j3,{})})]})}},133:function(e,t,n){var a=this&&this.__assign||function(){return a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e},a.apply(this,arguments)},c=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var c=Object.getOwnPropertyDescriptor(t,n);c&&!("get"in c?!t.__esModule:c.writable||c.configurable)||(c={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,c)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&c(t,e,n);return r(t,e),t},i=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var s=o(n(791)),l=n(779),u=n(945),p=n(74);t.default=function(e){var t=e.loading,n=void 0===t||t,c=e.color,r=void 0===c?"#000000":c,o=e.speedMultiplier,d=void 0===o?1:o,h=e.cssOverride,f=void 0===h?{}:h,v=e.size,x=void 0===v?50:v,m=i(e,["loading","color","speedMultiplier","cssOverride","size"]),g=(0,u.parseLengthAndUnit)(x),b=g.value,y=g.unit,j=a({display:"inherit",position:"relative",width:(0,u.cssValue)(x),height:(0,u.cssValue)(x),transform:"rotate(165deg)"},f),w=b/5,O=(b-w)/2,F=O-w,_=(0,l.calculateRgba)(r,.75),A=(0,p.createAnimation)("HashLoader","0% {width: ".concat(w,"px; box-shadow: ").concat(O,"px ").concat(-F,"px ").concat(_,", ").concat(-O,"px ").concat(F,"px ").concat(_,"}\n    35% {width: ").concat((0,u.cssValue)(x),"; box-shadow: 0 ").concat(-F,"px ").concat(_,", 0 ").concat(F,"px ").concat(_,"}\n    70% {width: ").concat(w,"px; box-shadow: ").concat(-O,"px ").concat(-F,"px ").concat(_,", ").concat(O,"px ").concat(F,"px ").concat(_,"}\n    100% {box-shadow: ").concat(O,"px ").concat(-F,"px ").concat(_,", ").concat(-O,"px ").concat(F,"px ").concat(_,"}"),"before"),M=(0,p.createAnimation)("HashLoader","0% {height: ".concat(w,"px; box-shadow: ").concat(F,"px ").concat(O,"px ").concat(r,", ").concat(-F,"px ").concat(-O,"px ").concat(r,"}\n    35% {height: ").concat((0,u.cssValue)(x),"; box-shadow: ").concat(F,"px 0 ").concat(r,", ").concat(-F,"px 0 ").concat(r,"}\n    70% {height: ").concat(w,"px; box-shadow: ").concat(F,"px ").concat(-O,"px ").concat(r,", ").concat(-F,"px ").concat(O,"px ").concat(r,"}\n    100% {box-shadow: ").concat(F,"px ").concat(O,"px ").concat(r,", ").concat(-F,"px ").concat(-O,"px ").concat(r,"}"),"after"),N=function(e){return{position:"absolute",top:"50%",left:"50%",display:"block",width:"".concat(b/5).concat(y),height:"".concat(b/5).concat(y),borderRadius:"".concat(b/10).concat(y),transform:"translate(-50%, -50%)",animationFillMode:"none",animation:"".concat(1===e?A:M," ").concat(2/d,"s infinite")}};return n?s.createElement("span",a({style:j},m),s.createElement("span",{style:N(1)}),s.createElement("span",{style:N(2)})):null}},74:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0;t.createAnimation=function(e,t,n){var a="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return a;var c=document.createElement("style");document.head.appendChild(c);var r=c.sheet,o="\n    @keyframes ".concat(a," {\n      ").concat(t,"\n    }\n  ");return r&&r.insertRule(o,0),a}},779:function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.calculateRgba=void 0,function(e){e.maroon="#800000",e.red="#FF0000",e.orange="#FFA500",e.yellow="#FFFF00",e.olive="#808000",e.green="#008000",e.purple="#800080",e.fuchsia="#FF00FF",e.lime="#00FF00",e.teal="#008080",e.aqua="#00FFFF",e.blue="#0000FF",e.navy="#000080",e.black="#000000",e.gray="#808080",e.silver="#C0C0C0",e.white="#FFFFFF"}(n||(n={}));t.calculateRgba=function(e,t){if(Object.keys(n).includes(e)&&(e=n[e]),"#"===e[0]&&(e=e.slice(1)),3===e.length){var a="";e.split("").forEach((function(e){a+=e,a+=e})),e=a}var c=(e.match(/.{2}/g)||[]).map((function(e){return parseInt(e,16)})).join(", ");return"rgba(".concat(c,", ").concat(t,")")}},945:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var n={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function a(e){if("number"===typeof e)return{value:e,unit:"px"};var t,a=(e.match(/^[0-9.]*/)||"").toString();t=a.includes(".")?parseFloat(a):parseInt(a,10);var c=(e.match(/[^0-9]*$/)||"").toString();return n[c]?{value:t,unit:c}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=a,t.cssValue=function(e){var t=a(e);return"".concat(t.value).concat(t.unit)}}}]);
//# sourceMappingURL=862.e27e913d.chunk.js.map