"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[612],{612:function(r,t,e){e.r(t),e.d(t,{default:function(){return d}});var n=e(3433),a=e(5861),u=e(9439),c=e(7757),i=e.n(c),s=e(2791),o=e(7689),p=e(4390),f=e(184),l=function(r){r.id;var t=r.srcImg,e=r.name,n=r.character;return(0,f.jsxs)("li",{children:[t.includes(null)?(0,f.jsx)("p",{children:"No image yet."}):(0,f.jsx)("img",{src:t,alt:"".concat(e,"'s portrait")}),(0,f.jsx)("p",{children:e}),(0,f.jsxs)("p",{children:["Character: ",n]})]})},h=e(4160),v=e(8786),d=function(){var r=(0,s.useState)([]),t=(0,u.Z)(r,2),e=t[0],c=t[1],d=(0,o.UO)().id,m=(0,s.useState)(!1),g=(0,u.Z)(m,2),x=g[0],w=g[1];return(0,s.useEffect)((function(){var r=function(){var r=(0,a.Z)(i().mark((function r(){var t;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return w(!0),r.next=3,(0,p.M1)(d);case 3:null!==(t=r.sent)?(c((0,n.Z)(t)),console.log("CAST",t)):c([]),w(!1);case 6:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}),[d]),(0,f.jsx)(h.W2,{children:x?(0,f.jsx)(v.Z,{}):e.length>0?(0,f.jsx)("ul",{children:e.map((function(r){return(0,f.jsx)(l,{srcImg:r.srcImg,name:r.name,character:r.character},r.id+function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(r)).reduce((function(r,t){return r+((t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_")}),"")}())}))}):(0,f.jsx)("div",{children:"Cast not found"})})}},4390:function(r,t,e){e.d(t,{Df:function(){return o},M1:function(){return h},Qu:function(){return f},TP:function(){return l},tx:function(){return v}});var n=e(1413),a=e(5861),u=e(7757),c=e.n(u),i=e(1243),s=function(){var r=(0,a.Z)(c().mark((function r(t,e){return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",i.Z.get("https://api.themoviedb.org/3"+t,{params:(0,n.Z)({api_key:"7e626872ba2c457d969115031d94d6fb",language:"en-US",page:1},e)}).then((function(r){return r})).catch((function(r){console.log("error",r)})));case 1:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}(),o=function(){var r=(0,a.Z)(c().mark((function r(){var t,e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s("/trending/movie/day");case 2:if(null!==(t=r.sent)){r.next=5;break}return r.abrupt("return",null);case 5:return e=[],p(t.data.results,e),r.abrupt("return",e);case 8:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),p=function(r,t){r.forEach((function(r){return t.push({movieId:r.id,movieTitle:r.title})}))},f=function(){var r=(0,a.Z)(c().mark((function r(t){var e,n,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e={query:t,page:1},r.next=3,s("/search/movie",e);case 3:if(null!==(n=r.sent)){r.next=6;break}return r.abrupt("return",null);case 6:return a=[],p(n.data.results,a),r.abrupt("return",a);case 9:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),l=function(){var r=(0,a.Z)(c().mark((function r(t){var e,n,a,u,i,o,p,f,l;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s("/movie/".concat(t));case 2:if(null!==(e=r.sent)){r.next=5;break}return r.abrupt("return",null);case 5:return n=e.data,a=n.poster_path,u=n.title,i=n.release_date,o=n.vote_average,p=n.overview,f=n.genres,l={posterPath:"https://image.tmdb.org/t/p/w300"+a,title:u,releaseDate:"".concat(new Date(i).getFullYear()),voteAverage:o,overview:p,genres:f},r.abrupt("return",l);case 8:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),h=function(){var r=(0,a.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s("/movie/".concat(t,"/credits"));case 2:if(null!==(e=r.sent)){r.next=5;break}return r.abrupt("return",null);case 5:return n=[],e.data.cast.forEach((function(r){var t=r.id,e=r.profile_path,a=r.name,u=r.character;return n.push({id:t,srcImg:"https://image.tmdb.org/t/p/w200"+e,name:a,character:u})})),r.abrupt("return",n);case 8:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,a.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s("/movie/".concat(t,"/reviews"));case 2:if(null!==(e=r.sent)){r.next=5;break}return r.abrupt("return",null);case 5:return n=[],e.data.results.forEach((function(r){var t=r.id,e=r.author,a=r.content;return n.push({id:t,author:e,content:a})})),r.abrupt("return",n);case 8:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=612.f547b288.chunk.js.map