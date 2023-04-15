"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[293],{293:function(e,r,t){t.r(r),t.d(r,{default:function(){return h}});var n=t(5861),a=t(9439),s=t(7757),i=t.n(s),o=t(2791),c=t(7689),u=t(4390),l=t(1598),d=t(8786),p={movie__additions:"MovieDetails_movie__additions__9KOw7",additions__list:"MovieDetails_additions__list__qFrmj",movie__link:"MovieDetails_movie__link__AIewV"},v={movie__card:"MovieDetailsCard_movie__card__5wAQ4",movie__poster:"MovieDetailsCard_movie__poster__G2no+",movie__paragraph:"MovieDetailsCard_movie__paragraph__9OI+V",movie__desc:"MovieDetailsCard_movie__desc__1fKsd",movie__genres:"MovieDetailsCard_movie__genres__dgjst",movie__score:"MovieDetailsCard_movie__score__FIjSL",movie__homepage:"MovieDetailsCard_movie__homepage__09Zx1"},_=t(184),m=function(e){var r=e.posterPath,t=e.title,n=e.releaseDate,a=e.voteAverage,s=e.voteCount,i=e.tagline,o=e.overview,c=e.genres,u=e.homepage;return(0,_.jsxs)("div",{className:[v.movie__card],children:[(0,_.jsx)("div",{className:[v.movie__poster],children:r.includes(null)?(0,_.jsx)("p",{children:"No poster yet."}):(0,_.jsx)("img",{src:r,alt:"".concat(t,"'s poster")})}),(0,_.jsxs)("div",{className:[v.movie__desc],children:[(0,_.jsxs)("h2",{className:[v.movie__title],children:[t," ",(0,_.jsxs)("span",{className:[v.movie__score],children:["(",n,")"]})]}),(0,_.jsxs)("h4",{className:[v.movie__score],children:["User score: ",Math.round(10*a),"% / Votes: ",s]}),(0,_.jsxs)("div",{className:[v.movie__paragraph],children:[(0,_.jsx)("h4",{children:"Overview"}),i&&(0,_.jsxs)("p",{children:["\u275d ",i," \u275e"]}),(0,_.jsx)("p",{children:o})]}),(0,_.jsxs)("div",{className:[v.movie__paragraph],children:[(0,_.jsx)("h4",{children:"Genres"}),(0,_.jsx)("ul",{className:[v.movie__genres],children:c.map((function(e){return(0,_.jsx)("li",{children:e.name},e.id)}))})]}),u&&(0,_.jsxs)("div",{className:[v.movie__paragraph],children:[(0,_.jsx)("h4",{children:"Homepage"}),(0,_.jsxs)("a",{className:[v.movie__homepage],href:u,target:"_blank",rel:"noopener noreferrer",children:["\u279b ",u]})]})]})]})},h=function(){var e,r,t=(0,o.useState)(null),s=(0,a.Z)(t,2),v=s[0],h=s[1],f=(0,c.UO)().id,g=(0,c.TH)(),x=null!==(e=null===(r=g.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/";return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.TP)(f);case 2:r=e.sent,h(null!==r?r:"");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[f]),(0,_.jsxs)("main",{children:[(0,_.jsx)(l.rU,{className:[p.movie__link],to:x,children:"\u276e Go back"}),v&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(m,{posterPath:v.posterPath,title:v.title,releaseDate:v.releaseDate,voteAverage:v.voteAverage,voteCount:v.voteCount,tagline:v.tagline,overview:v.overview,genres:v.genres,homepage:v.homepage}),(0,_.jsxs)("div",{className:[p.movie__additions],children:[(0,_.jsx)("h5",{children:"Additional information"}),(0,_.jsxs)("ul",{className:[p.additions__list],children:[(0,_.jsx)("li",{children:(0,_.jsx)(l.rU,{className:[p.additions__item],to:"cast",state:{from:g.state.from},children:"\u279b Cast"})}),(0,_.jsx)("li",{children:(0,_.jsx)(l.rU,{className:[p.additions__item],to:"reviews",state:{from:g.state.from},children:"\u279b Reviews"})}),(0,_.jsx)("li",{children:(0,_.jsx)(l.rU,{className:[p.additions__item],to:"crew",state:{from:g.state.from},children:"\u279b Crew"})}),(0,_.jsx)("li",{children:(0,_.jsx)(l.rU,{className:[p.additions__item],to:"similar",state:{from:g.state.from},children:"\u279b Similar movies \ud83d\ude09"})})]})]})]}),(0,_.jsx)(o.Suspense,{fallback:(0,_.jsx)(d.Z,{}),children:(0,_.jsx)(c.j3,{})})]})}},4390:function(e,r,t){t.d(r,{Df:function(){return u},M1:function(){return v},Qu:function(){return d},TP:function(){return p},pn:function(){return h},tx:function(){return m},uV:function(){return _}});var n=t(1413),a=t(5861),s=t(7757),i=t.n(s),o=t(1243),c=function(){var e=(0,a.Z)(i().mark((function e(r,t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.Z.get("https://api.themoviedb.org/3"+r,{params:(0,n.Z)({api_key:"7e626872ba2c457d969115031d94d6fb",language:"en-US",page:1},t)}).then((function(e){return console.log("FULL Response:",e),e})).catch((function(e){console.log("error",e)})));case 1:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)(i().mark((function e(){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/trending/movie/day");case 2:if(null!==(r=e.sent)){e.next=5;break}return e.abrupt("return",null);case 5:return t=[],l(r.data.results,t),e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(e,r){e.forEach((function(e){return r.push({movieId:e.id,movieTitle:e.title})}))},d=function(){var e=(0,a.Z)(i().mark((function e(r){var t,n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={query:r,page:1},e.next=3,c("/search/movie",t);case 3:if(null!==(n=e.sent)){e.next=6;break}return e.abrupt("return",null);case 6:return a=[],l(n.data.results,a),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)(i().mark((function e(r){var t,n,a,s,o,u,l,d,p,v,_,m;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(r));case 2:if(null!==(t=e.sent)){e.next=5;break}return e.abrupt("return",null);case 5:return n=t.data,a=n.poster_path,s=n.title,o=n.release_date,u=n.vote_average,l=n.vote_count,d=n.overview,p=n.genres,v=n.homepage,_=n.tagline,m={posterPath:"https://image.tmdb.org/t/p/w300"+a,title:s,releaseDate:"".concat(new Date(o).getFullYear()),voteAverage:u,voteCount:l,overview:d,genres:p,homepage:v,tagline:_},console.log("details",t),e.abrupt("return",m);case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(r,"/credits"));case 2:if(null!==(t=e.sent)){e.next=5;break}return e.abrupt("return",null);case 5:return n=[],console.log("CAST",t),t.data.cast.forEach((function(e){var r=e.id,t=e.profile_path,a=e.name,s=e.character;return n.push({id:r,srcImg:"https://image.tmdb.org/t/p/w200"+t,name:a,character:s})})),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),_=function(){var e=(0,a.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(r,"/credits"));case 2:if(null!==(t=e.sent)){e.next=5;break}return e.abrupt("return",null);case 5:return n=[],console.log("Crew",t),t.data.crew.forEach((function(e){var r=e.id,t=e.profile_path,a=e.name,s=e.department,i=e.job;return n.push({id:r,srcImg:"https://image.tmdb.org/t/p/w200"+t,name:a,department:s,job:i})})),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(r,"/reviews"));case 2:if(null!==(t=e.sent)){e.next=5;break}return e.abrupt("return",null);case 5:return n=[],t.data.results.forEach((function(e){var r=e.id,t=e.author,a=e.content;return n.push({id:r,author:t,content:a})})),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(r,"/similar"));case 2:if(null!==(t=e.sent)){e.next=5;break}return e.abrupt("return",null);case 5:return n=[],console.log("SIMILAR",t),t.data.results.forEach((function(e){var r=e.id,t=e.poster_path,a=e.title,s=e.release_date;return n.push({id:r,srcImg:"https://image.tmdb.org/t/p/w200"+t,title:a,releaseDate:"".concat(new Date(s).getFullYear())})})),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=293.97922933.chunk.js.map