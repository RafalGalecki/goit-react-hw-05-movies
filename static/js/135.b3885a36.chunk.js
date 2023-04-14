"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[135],{7135:function(e,r,t){t.r(r),t.d(r,{default:function(){return d}});var n=t(5861),a=t(9439),s=t(7757),i=t.n(s),o=t(2791),c=t(7689),u=t(4390),l=t(1598),_=t(8786),p={movie__card:"MovieDetails_movie__card__NGWuX",movie__poster:"MovieDetails_movie__poster__HNrMD",movie__paragraph:"MovieDetails_movie__paragraph__BXIIA",movie__desc:"MovieDetails_movie__desc__h95ka",movie__genres:"MovieDetails_movie__genres__qJHB-",movie__score:"MovieDetails_movie__score__DE4wI",movie__additions:"MovieDetails_movie__additions__9KOw7",additions__list:"MovieDetails_additions__list__qFrmj",movie__link:"MovieDetails_movie__link__AIewV",movie__homepage:"MovieDetails_movie__homepage__ZJXN+"},v=t(184),d=function(){var e,r,t=(0,o.useState)(null),s=(0,a.Z)(t,2),d=s[0],m=s[1],h=(0,c.UO)().id,f=(0,c.TH)(),x=null!==(e=null===(r=f.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/";return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.TP)(h);case 2:r=e.sent,m(null!==r?r:"");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[h]),(0,v.jsxs)("main",{children:[(0,v.jsx)(l.rU,{className:[p.movie__link],to:x,children:"\u276e Go back"}),d&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:[p.movie__card],children:[(0,v.jsx)("div",{className:[p.movie__poster],children:d.posterPath.includes(null)?(0,v.jsx)("p",{children:"No poster yet."}):(0,v.jsx)("img",{src:d.posterPath,alt:"".concat(d.title,"'s poster")})}),(0,v.jsxs)("div",{className:[p.movie__desc],children:[(0,v.jsxs)("h2",{className:[p.movie__title],children:[d.title," ",(0,v.jsxs)("span",{className:[p.movie__score],children:["(",d.releaseDate,")"]})]}),(0,v.jsxs)("h4",{className:[p.movie__score],children:["User score: ",Math.round(10*d.voteAverage),"% / Votes: ",d.voteCount]}),(0,v.jsxs)("div",{className:[p.movie__paragraph],children:[(0,v.jsx)("h4",{children:"Overview"}),(0,v.jsx)("p",{children:d.overview})]}),(0,v.jsxs)("div",{className:[p.movie__paragraph],children:[(0,v.jsx)("h4",{children:"Genres"}),(0,v.jsx)("ul",{className:[p.movie__genres],children:d.genres.map((function(e){return(0,v.jsx)("li",{children:e.name},e.id)}))})]}),d.homepage&&(0,v.jsxs)("div",{className:[p.movie__paragraph],children:[(0,v.jsx)("h4",{children:"Homepage"}),(0,v.jsxs)("a",{className:[p.movie__homepage],href:d.homepage,target:"_blank",rel:"noopener noreferrer",children:["\u279b ",d.homepage]})]})]})]}),(0,v.jsxs)("div",{className:[p.movie__additions],children:[(0,v.jsx)("h5",{children:"Additional information"}),(0,v.jsxs)("ul",{className:[p.additions__list],children:[(0,v.jsx)("li",{children:(0,v.jsx)(l.rU,{className:[p.additions__item],to:"cast",state:{from:f.state.from},children:"\u279b Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(l.rU,{className:[p.additions__item],to:"reviews",state:{from:f.state.from},children:"\u279b Reviews"})}),(0,v.jsx)("li",{children:(0,v.jsx)(l.rU,{className:[p.additions__item],to:"crew",state:{from:f.state.from},children:"\u279b Crew"})})]})]})]}),(0,v.jsx)(o.Suspense,{fallback:(0,v.jsx)(_.Z,{}),children:(0,v.jsx)(c.j3,{})})]})}},4390:function(e,r,t){t.d(r,{Df:function(){return u},M1:function(){return v},Qu:function(){return _},TP:function(){return p},tx:function(){return m},uV:function(){return d}});var n=t(1413),a=t(5861),s=t(7757),i=t.n(s),o=t(1243),c=function(){var e=(0,a.Z)(i().mark((function e(r,t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.Z.get("https://api.themoviedb.org/3"+r,{params:(0,n.Z)({api_key:"7e626872ba2c457d969115031d94d6fb",language:"en-US",page:1},t)}).then((function(e){return console.log("FULL Response:",e),e})).catch((function(e){console.log("error",e)})));case 1:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)(i().mark((function e(){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/trending/movie/day");case 2:if(null!==(r=e.sent)){e.next=5;break}return e.abrupt("return",null);case 5:return t=[],l(r.data.results,t),e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(e,r){e.forEach((function(e){return r.push({movieId:e.id,movieTitle:e.title})}))},_=function(){var e=(0,a.Z)(i().mark((function e(r){var t,n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={query:r,page:1},e.next=3,c("/search/movie",t);case 3:if(null!==(n=e.sent)){e.next=6;break}return e.abrupt("return",null);case 6:return a=[],l(n.data.results,a),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)(i().mark((function e(r){var t,n,a,s,o,u,l,_,p,v,d;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(r));case 2:if(null!==(t=e.sent)){e.next=5;break}return e.abrupt("return",null);case 5:return n=t.data,a=n.poster_path,s=n.title,o=n.release_date,u=n.vote_average,l=n.vote_count,_=n.overview,p=n.genres,v=n.homepage,d={posterPath:"https://image.tmdb.org/t/p/w300"+a,title:s,releaseDate:"".concat(new Date(o).getFullYear()),voteAverage:u,voteCount:l,overview:_,genres:p,homepage:v},console.log("details",t),e.abrupt("return",d);case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(r,"/credits"));case 2:if(null!==(t=e.sent)){e.next=5;break}return e.abrupt("return",null);case 5:return n=[],console.log("CAST",t),t.data.cast.forEach((function(e){var r=e.id,t=e.profile_path,a=e.name,s=e.character;return n.push({id:r,srcImg:"https://image.tmdb.org/t/p/w200"+t,name:a,character:s})})),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(r,"/credits"));case 2:if(null!==(t=e.sent)){e.next=5;break}return e.abrupt("return",null);case 5:return n=[],console.log("Crew",t),t.data.crew.forEach((function(e){var r=e.id,t=e.profile_path,a=e.name,s=e.department,i=e.job;return n.push({id:r,srcImg:"https://image.tmdb.org/t/p/w200"+t,name:a,department:s,job:i})})),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(r,"/reviews"));case 2:if(null!==(t=e.sent)){e.next=5;break}return e.abrupt("return",null);case 5:return n=[],t.data.results.forEach((function(e){var r=e.id,t=e.author,a=e.content;return n.push({id:r,author:t,content:a})})),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=135.b3885a36.chunk.js.map