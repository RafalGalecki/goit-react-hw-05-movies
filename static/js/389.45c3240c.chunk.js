"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[389],{4389:function(t,r,n){n.r(r),n.d(r,{default:function(){return m}});var e,u=n(5861),a=n(9439),c=n(7757),o=n.n(c),i=n(2791),s=n(7689),p=n(4390),f=n(2959),l=n(168),h=n(6444).ZP.li(e||(e=(0,l.Z)(["\nfont-size: 14px;\ndisplay: flex;\nflex-direction: column;\ngap: 8px;\nmargin-bottom: 20px;\n"]))),v=n(184),d=function(t){var r=t.author,n=t.content;return(0,v.jsxs)(h,{children:[(0,v.jsxs)("h4",{children:["Author: ",r]}),(0,v.jsx)(f.Z,{children:n})]})},x=n(4151),m=function(){var t=(0,i.useState)([]),r=(0,a.Z)(t,2),n=r[0],e=r[1],c=(0,s.UO)().id;return(0,i.useEffect)((function(){var t=function(){var t=(0,u.Z)(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.tx)(c);case 2:r=t.sent,e(null!==r?r:[]);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[c]),(0,v.jsx)(x.W2,{children:n.length>0?(0,v.jsx)("ul",{children:n.map((function(t){return(0,v.jsx)(d,{author:t.author,content:t.content},t.id)}))}):(0,v.jsx)("p",{children:"We don't have any reviews for this movie."})})}},4390:function(t,r,n){n.d(r,{Df:function(){return s},M1:function(){return h},Qu:function(){return f},TP:function(){return l},tx:function(){return v}});var e=n(1413),u=n(5861),a=n(7757),c=n.n(a),o=n(1243),i=function(){var t=(0,u.Z)(c().mark((function t(r,n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.Z.get("https://api.themoviedb.org/3"+r,{params:(0,e.Z)({api_key:"7e626872ba2c457d969115031d94d6fb",language:"en-US",page:1},n)}).then((function(t){return t})).catch((function(t){console.log("error",t)})));case 1:case"end":return t.stop()}}),t)})));return function(r,n){return t.apply(this,arguments)}}(),s=function(){var t=(0,u.Z)(c().mark((function t(){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i("/trending/movie/day");case 2:if(null!==(r=t.sent)){t.next=5;break}return t.abrupt("return",null);case 5:return n=[],p(r.data.results,n),t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(t,r){t.forEach((function(t){return r.push({movieId:t.id,movieTitle:t.title})}))},f=function(){var t=(0,u.Z)(c().mark((function t(r){var n,e,u;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={query:r,page:1},t.next=3,i("/search/movie",n);case 3:if(null!==(e=t.sent)){t.next=6;break}return t.abrupt("return",null);case 6:return u=[],p(e.data.results,u),t.abrupt("return",u);case 9:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),l=function(){var t=(0,u.Z)(c().mark((function t(r){var n,e,u,a,o,s,p,f,l,h;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i("/movie/".concat(r));case 2:if(null!==(n=t.sent)){t.next=5;break}return t.abrupt("return",null);case 5:return e=n.data,u=e.poster_path,a=e.title,o=e.release_date,s=e.vote_average,p=e.vote_count,f=e.overview,l=e.genres,h={posterPath:"https://image.tmdb.org/t/p/w300"+u,title:a,releaseDate:"".concat(new Date(o).getFullYear()),voteAverage:s,voteCount:p,overview:f,genres:l},t.abrupt("return",h);case 8:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=(0,u.Z)(c().mark((function t(r){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i("/movie/".concat(r,"/credits"));case 2:if(null!==(n=t.sent)){t.next=5;break}return t.abrupt("return",null);case 5:return e=[],n.data.cast.forEach((function(t){var r=t.id,n=t.profile_path,u=t.name,a=t.character;return e.push({id:r,srcImg:"https://image.tmdb.org/t/p/w200"+n,name:u,character:a})})),t.abrupt("return",e);case 8:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),v=function(){var t=(0,u.Z)(c().mark((function t(r){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i("/movie/".concat(r,"/reviews"));case 2:if(null!==(n=t.sent)){t.next=5;break}return t.abrupt("return",null);case 5:return e=[],n.data.results.forEach((function(t){var r=t.id,n=t.author,u=t.content;return e.push({id:r,author:n,content:u})})),t.abrupt("return",e);case 8:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=389.45c3240c.chunk.js.map