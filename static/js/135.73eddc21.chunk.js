"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[135],{7135:function(e,r,t){t.r(r),t.d(r,{default:function(){return p}});var n=t(5861),a=t(9439),s=t(7757),i=t.n(s),o=t(2791),c=t(7689),u=t(4390),l=t(4151),_=t(8786),v={movie__card:"MovieDetails_movie__card__NGWuX",movie__poster:"MovieDetails_movie__poster__HNrMD",movie__paragraph:"MovieDetails_movie__paragraph__BXIIA",movie__desc:"MovieDetails_movie__desc__h95ka",movie__genres:"MovieDetails_movie__genres__qJHB-",movie__score:"MovieDetails_movie__score__DE4wI",movie__additions:"MovieDetails_movie__additions__9KOw7",additions__list:"MovieDetails_additions__list__qFrmj",movie__link:"MovieDetails_movie__link__AIewV"},d=t(184),p=function(){var e=(0,o.useState)(null),r=(0,a.Z)(e,2),t=r[0],s=r[1],p=(0,c.UO)().id,h=(0,c.TH)();return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.TP)(p);case 2:null!==(r=e.sent)?(s(r),console.log("Details",r)):s("");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[p]),(0,d.jsxs)("main",{children:[(0,d.jsx)(l.rU,{className:[v.movie__link],to:h.state?h.state.from:"/",children:"\u276e Go back"}),t&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:[v.movie__card],children:[(0,d.jsx)("div",{className:[v.movie__poster],children:t.posterPath.includes(null)?(0,d.jsx)("p",{children:"No poster yet."}):(0,d.jsx)("img",{src:t.posterPath,alt:"".concat(t.title,"'s poster")})}),(0,d.jsxs)("div",{className:[v.movie__desc],children:[(0,d.jsxs)("h2",{className:[v.movie__title],children:[t.title," ",(0,d.jsxs)("span",{className:[v.movie__score],children:["(",t.releaseDate,")"]})]}),(0,d.jsxs)("h4",{className:[v.movie__score],children:["User score: ",Math.round(10*t.voteAverage),"% / Votes: ",t.voteCount]}),(0,d.jsxs)("div",{className:[v.movie__paragraph],children:[(0,d.jsx)("h4",{children:"Overview"}),(0,d.jsx)("p",{children:t.overview})]}),(0,d.jsxs)("div",{className:[v.movie__paragraph],children:[(0,d.jsx)("h4",{children:"Genres"}),(0,d.jsx)("ul",{className:[v.movie__genres],children:t.genres.map((function(e){return(0,d.jsx)("li",{children:e.name},e.id)}))})]})]})]}),(0,d.jsxs)("div",{className:[v.movie__additions],children:[(0,d.jsx)("h5",{children:"Additional information"}),(0,d.jsxs)("ul",{className:[v.additions__list],children:[(0,d.jsx)("li",{children:(0,d.jsx)(l.rU,{className:[v.additions__item],to:"cast",children:"\u279b Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(l.rU,{className:[v.additions__item],to:"reviews",children:"\u279b Reviews"})})]})]})]}),(0,d.jsx)(o.Suspense,{fallback:(0,d.jsx)(_.Z,{}),children:(0,d.jsx)(c.j3,{})})]})}},4390:function(e,r,t){t.d(r,{Df:function(){return u},M1:function(){return d},Qu:function(){return _},TP:function(){return v},tx:function(){return p}});var n=t(1413),a=t(5861),s=t(7757),i=t.n(s),o=t(1243),c=function(){var e=(0,a.Z)(i().mark((function e(r,t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.Z.get("https://api.themoviedb.org/3"+r,{params:(0,n.Z)({api_key:"7e626872ba2c457d969115031d94d6fb",language:"en-US",page:1},t)}).then((function(e){return e})).catch((function(e){console.log("error",e)})));case 1:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)(i().mark((function e(){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/trending/movie/day");case 2:if(null!==(r=e.sent)){e.next=5;break}return e.abrupt("return",null);case 5:return console.log("FULL RESPONSE",r),t=[],l(r.data.results,t),e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(e,r){e.forEach((function(e){return r.push({movieId:e.id,movieTitle:e.title})}))},_=function(){var e=(0,a.Z)(i().mark((function e(r){var t,n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={query:r,page:1},e.next=3,c("/search/movie",t);case 3:if(null!==(n=e.sent)){e.next=6;break}return e.abrupt("return",null);case 6:return a=[],l(n.data.results,a),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)(i().mark((function e(r){var t,n,a,s,o,u,l,_,v,d;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(r));case 2:if(null!==(t=e.sent)){e.next=5;break}return e.abrupt("return",null);case 5:return n=t.data,a=n.poster_path,s=n.title,o=n.release_date,u=n.vote_average,l=n.vote_count,_=n.overview,v=n.genres,d={posterPath:"https://image.tmdb.org/t/p/w300"+a,title:s,releaseDate:"".concat(new Date(o).getFullYear()),voteAverage:u,voteCount:l,overview:_,genres:v},e.abrupt("return",d);case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(r,"/credits"));case 2:if(null!==(t=e.sent)){e.next=5;break}return e.abrupt("return",null);case 5:return n=[],t.data.cast.forEach((function(e){var r=e.id,t=e.profile_path,a=e.name,s=e.character;return n.push({id:r,srcImg:"https://image.tmdb.org/t/p/w200"+t,name:a,character:s})})),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(r,"/reviews"));case 2:if(null!==(t=e.sent)){e.next=5;break}return e.abrupt("return",null);case 5:return n=[],t.data.results.forEach((function(e){var r=e.id,t=e.author,a=e.content;return n.push({id:r,author:t,content:a})})),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=135.73eddc21.chunk.js.map