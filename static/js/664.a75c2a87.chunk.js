"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[664],{5130:function(n,t,r){r(2791);var e=r(184);t.Z=function(n){var t=n.title,r=n.children;return(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{marginBottom:"10px"},children:t}),(0,e.jsx)("ul",{children:r})]})}},9761:function(n,t,r){r.d(t,{Z:function(){return c}});r(2791);var e,a=r(4151),i=r(168),u=r(6444).ZP.li(e||(e=(0,i.Z)(["\n  font-weight: 500;\n  padding: 2px;\n  transition-property: transform;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    transform: scale(0.996);\n  }\n"]))),o=r(184),c=function(n){var t=n.movieId,r=n.movieTitle,e=n.to,i=n.from;return(0,o.jsx)(u,{children:(0,o.jsxs)(a.rU,{to:"".concat(e),state:{from:i},children:["\u279b ",r]})},t)}},2664:function(n,t,r){r.r(t),r.d(t,{default:function(){return k}});var e,a,i,u=r(5861),o=r(9439),c=r(7757),s=r.n(c),p=r(2791),l=r(1087),f=r(7689),h=r(168),d=r(6444),x=d.ZP.form(e||(e=(0,h.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: start;\n  align-items: center;\n  margin: 0;\n  margin-bottom: 20px;\n  height: 30px;\n  width: 70vw;\n  gap: 4px;\n"]))),v=d.ZP.input(a||(a=(0,h.Z)(["\n  padding: 8px;\n  height: 100%;\n  width: 320px;\n  border-color: white;\n  border-radius: 4px;\n  outline: none;\n  color: #261c09;\n  box-shadow: 4px 4px 6px rgba(58, 43, 12, 0.22);\n"]))),g=d.ZP.button(i||(i=(0,h.Z)(["\n  text-align: center;\n  height: 100%;\n  width: 100px;\n\n  padding: 0 20px;\n  background-color: orange;\n  color: white;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.87;\n  letter-spacing: 0.06em;\n  text-align: center;\n  cursor: pointer;\n  border: none;\n  border-radius: 4px;\n  box-shadow: inset 3px 6px 16px -8px rgba(249, 243, 232, 0.9),\n    inset -2px -2px 8px 1px rgba(77, 57, 19, 0.75),\n    4px 4px 6px rgba(58, 43, 12, 0.22);\n  transition-property: box-shadow;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    box-shadow: inset 2px 2px 3px rgba(77, 57, 19, 0.75),\n      inset -2px -2px 4px rgba(249, 243, 232, 0.6);\n  }\n"]))),m=r(184),b=function(n){var t=n.searcher,r=(0,p.useState)(""),e=(0,o.Z)(r,2),a=e[0],i=e[1];return(0,m.jsxs)(x,{onSubmit:function(n){return function(n){n.preventDefault(),t(a),i("")}(n)},children:[(0,m.jsx)(v,{type:"search",name:"query",value:a,placeholder:"Enter a movie title",onChange:function(n){return function(n){i(n.target.value)}(n)}}),(0,m.jsx)(g,{type:"submit",children:"Search"})]})},w=r(5130),Z=r(9761),y=r(4390),k=function(){var n=(0,p.useState)(null),t=(0,o.Z)(n,2),r=t[0],e=t[1],a=(0,l.lr)(),i=(0,o.Z)(a,2),c=i[0],h=i[1],d=(0,p.useState)(c.get("query")),x=(0,o.Z)(d,2),v=x[0],g=x[1],k=(0,f.TH)(),j=(0,p.useState)(null),_=(0,o.Z)(j,2),S=_[0],E=_[1];return(0,p.useEffect)((function(){if(v){h({query:v});var n=function(){var n=(0,u.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,y.Qu)(v);case 2:t=n.sent,console.log("RES",t),null!==t&&(e(t),E(!0)),0===t.length&&(E(!1),console.log("ZERO"));case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}}),[v,h]),(0,m.jsxs)("main",{children:[(0,m.jsx)(b,{filter:v,searcher:function(n){return function(n){n&&g(n)}(n)}}),null===S?(0,m.jsx)("div",{children:(0,m.jsx)("h4",{children:"Search The Movie DataBase for movies"})}):S?(0,m.jsx)(w.Z,{children:r&&r.map((function(n){var t=n.movieId,r=n.movieTitle;return(0,m.jsx)(Z.Z,{movieTitle:r,to:t.toString(),from:k,movieId:t},t)}))}):(0,m.jsx)("div",{children:(0,m.jsx)("p",{children:"No results"})})]})}},4390:function(n,t,r){r.d(t,{Df:function(){return s},M1:function(){return h},Qu:function(){return l},TP:function(){return f},tx:function(){return d}});var e=r(1413),a=r(5861),i=r(7757),u=r.n(i),o=r(1243),c=function(){var n=(0,a.Z)(u().mark((function n(t,r){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",o.Z.get("https://api.themoviedb.org/3"+t,{params:(0,e.Z)({api_key:"7e626872ba2c457d969115031d94d6fb",language:"en-US",page:1},r)}).then((function(n){return n})).catch((function(n){console.log("error",n)})));case 1:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)(u().mark((function n(){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c("/trending/movie/day");case 2:if(null!==(t=n.sent)){n.next=5;break}return n.abrupt("return",null);case 5:return console.log("FULL RESPONSE",t),r=[],p(t.data.results,r),n.abrupt("return",r);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(n,t){n.forEach((function(n){return t.push({movieId:n.id,movieTitle:n.title})}))},l=function(){var n=(0,a.Z)(u().mark((function n(t){var r,e,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={query:t,page:1},n.next=3,c("/search/movie",r);case 3:if(null!==(e=n.sent)){n.next=6;break}return n.abrupt("return",null);case 6:return a=[],p(e.data.results,a),n.abrupt("return",a);case 9:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)(u().mark((function n(t){var r,e,a,i,o,s,p,l,f,h;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c("/movie/".concat(t));case 2:if(null!==(r=n.sent)){n.next=5;break}return n.abrupt("return",null);case 5:return e=r.data,a=e.poster_path,i=e.title,o=e.release_date,s=e.vote_average,p=e.vote_count,l=e.overview,f=e.genres,h={posterPath:"https://image.tmdb.org/t/p/w300"+a,title:i,releaseDate:"".concat(new Date(o).getFullYear()),voteAverage:s,voteCount:p,overview:l,genres:f},n.abrupt("return",h);case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,a.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c("/movie/".concat(t,"/credits"));case 2:if(null!==(r=n.sent)){n.next=5;break}return n.abrupt("return",null);case 5:return e=[],r.data.cast.forEach((function(n){var t=n.id,r=n.profile_path,a=n.name,i=n.character;return e.push({id:t,srcImg:"https://image.tmdb.org/t/p/w200"+r,name:a,character:i})})),n.abrupt("return",e);case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c("/movie/".concat(t,"/reviews"));case 2:if(null!==(r=n.sent)){n.next=5;break}return n.abrupt("return",null);case 5:return e=[],r.data.results.forEach((function(n){var t=n.id,r=n.author,a=n.content;return e.push({id:t,author:r,content:a})})),n.abrupt("return",e);case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=664.a75c2a87.chunk.js.map