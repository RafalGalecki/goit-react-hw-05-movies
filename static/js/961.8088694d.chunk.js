"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[961],{961:function(e,r,t){t.r(r);var n=t(861),a=t(439),s=t(757),u=t.n(s),i=t(791),c=t(689),o=t(390),l=t(71),p=t(184);r.default=function(){var e=(0,i.useState)(null),r=(0,a.Z)(e,2),t=r[0],s=r[1],f=(0,c.UO)().id,h=(0,c.TH)();return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.TP)(f);case 2:null!==(r=e.sent)?(s(r),console.log("Details",r)):s("");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[f]),(0,p.jsxs)("main",{children:[(0,p.jsx)(l.rU,{to:h.state?h.state.from:"/",children:"< Go back"}),t&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("img",{src:t.posterPath,alt:"".concat(t.title,"'s poster")}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("h3",{children:[t.title," (",t.releaseDate,")"]}),(0,p.jsxs)("p",{children:["User score: ",Math.round(10*t.voteAverage),"%"]}),(0,p.jsx)("h4",{children:"Overview"}),(0,p.jsx)("p",{children:t.overview}),(0,p.jsx)("h4",{children:"Genres"}),(0,p.jsx)("ul",{children:t.genres.map((function(e){return(0,p.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h5",{children:"Additional information"}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(l.rU,{to:"cast",children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(l.rU,{to:"reviews",children:"Reviews"})})]})]})]})]})}},390:function(e,r,t){t.d(r,{Df:function(){return o},Qu:function(){return p},TP:function(){return f}});var n=t(683),a=t(861),s=t(757),u=t.n(s),i=t(243),c=function(){var e=(0,a.Z)(u().mark((function e(r,t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.Z.get("https://api.themoviedb.org/3"+r,{params:(0,n.Z)({api_key:"7e626872ba2c457d969115031d94d6fb",language:"en-US",page:1},t)}).then((function(e){return e})).catch((function(e){console.log("error",e)})));case 1:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/trending/movie/day");case 2:if(null!==(r=e.sent)){e.next=5;break}return e.abrupt("return",null);case 5:return t=[],l(r.data.results,t),e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(e,r){e.forEach((function(e){return r.push({movieId:e.id,movieTitle:e.title})}))},p=function(){var e=(0,a.Z)(u().mark((function e(r){var t,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={query:r,page:1},e.next=3,c("/search/movie",t);case 3:if(null!==(n=e.sent)){e.next=6;break}return e.abrupt("return",null);case 6:return a=[],l(n.data.results,a),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)(u().mark((function e(r){var t,n,a,s,i,o,l,p,f;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(r));case 2:if(null!==(t=e.sent)){e.next=5;break}return e.abrupt("return",null);case 5:return n=t.data,a=n.poster_path,s=n.title,i=n.release_date,o=n.vote_average,l=n.overview,p=n.genres,f={posterPath:"https://image.tmdb.org/t/p/w300"+a,title:s,releaseDate:"".concat(new Date(i).getFullYear()),voteAverage:o,overview:l,genres:p},e.abrupt("return",f);case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=961.8088694d.chunk.js.map