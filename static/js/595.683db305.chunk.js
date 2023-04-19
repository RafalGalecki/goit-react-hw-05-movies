"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[595],{9098:function(o,i,n){n.d(i,{Q:function(){return r}});var e,t=n(168),r=n(6444).ZP.div(e||(e=(0,t.Z)(["\ndisplay: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n  row-gap: 18px;\n  column-gap: 12px;\n  margin-top: 12px;\n  margin-left: auto;\n  margin-right: auto;\n\n"])))},1537:function(o,i,n){n.d(i,{NF:function(){return c},mO:function(){return a},uU:function(){return u}});var e,t,r,A=n(168),K=n(6444),a=K.ZP.div(e||(e=(0,A.Z)(["\n  max-width: 160px;\n  background-color: grey;\n  box-shadow: 0px 6px 3px -2px rgba(0, 0, 0, 0.36);\n  transition-property: transform;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 6px;\n   & > img {border-radius: 6px;}\n\n  &:hover {\n    transform: scale(1.03);\n    transform: box-shadow;\n    box-shadow: 0px 5px 3px 1px rgba(0, 0, 0, 0.46);\n"]))),u=K.ZP.div(t||(t=(0,A.Z)(["\n  font-size: 12px;\n  height: 40px;\n  padding: 10px 0;\n  margin-bottom: 8px;\n"]))),c=K.ZP.li(r||(r=(0,A.Z)(["\n  flex-basis: calc((100% - 15px) * 1 / 2);\n\n  display: flex;\n  flex-direction: column;\n  @media screen and (min-width: 340px) {\n    flex-basis: calc((100% - 15px * 2) / 3);\n  }\n  @media screen and (min-width: 480px) {\n    flex-basis: calc((100% - 15px * 3) / 4);\n  }\n  @media screen and (min-width: 620px) {\n    flex-basis: calc((100% - 15px * 4) / 5);\n  }\n  @media screen and (min-width: 768px) {\n    flex-basis: calc((100% - 15px * 5) / 6);\n  }\n  @media screen and (min-width: 968px) {\n    flex-basis: calc((100% - 15px * 6) / 7);\n  }\n  @media screen and (min-width: 1140px) {\n    flex-basis: calc((100% - 15px * 7) / 8);\n  }\n"])))},5595:function(o,i,n){n.r(i),n.d(i,{default:function(){return h}});var e=n(3433),t=n(5861),r=n(9439),A=n(7757),K=n.n(A),a=n(2791),u=n(7689),c=n(5984),s=n(4390),g=n(1537),p=n(6665),l=n(5754),f=n(184),d=function(o){var i=o.id,n=o.srcImg,e=o.title,t=o.releaseDate;return(0,f.jsxs)(g.NF,{children:[n.includes(null)?(0,f.jsxs)("div",{className:p.Z.thumb,children:[(0,f.jsx)("img",{className:p.Z.image,src:l,alt:"placeholder"}),(0,f.jsx)("p",{className:p.Z.label,children:"No image yet"})]}):(0,f.jsx)(g.mO,{children:(0,f.jsx)("img",{src:n,alt:"".concat(e," - this movie's poster")})}),(0,f.jsxs)(g.uU,{children:[(0,f.jsx)("p",{children:(0,f.jsx)("b",{children:e})}),(0,f.jsx)("p",{children:t})]})]},i)},m=n(1598),C=n(9098),h=function(){var o=(0,a.useState)([]),i=(0,r.Z)(o,2),n=i[0],A=i[1],g=(0,u.UO)().id,p=(0,a.useRef)(null);return(0,a.useEffect)((function(){p.current.scrollIntoView({behavior:"smooth"})})),(0,a.useEffect)((function(){var o=function(){var o=(0,t.Z)(K().mark((function o(){var i;return K().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,s.pn)(g);case 2:i=o.sent,A(null!==i?(0,e.Z)(i):[]);case 4:case"end":return o.stop()}}),o)})));return function(){return o.apply(this,arguments)}}();o()}),[g]),(0,f.jsxs)(m.W2,{children:[(0,f.jsx)("div",{ref:p}),n.length>0?(0,f.jsx)(C.Q,{children:n.map((function(o){return(0,f.jsx)(d,{srcImg:o.srcImg,title:o.title,releaseDate:o.releaseDate},o.id+(0,c.x0)())}))}):(0,f.jsx)("div",{children:"Similar movies not found"})]})}},4390:function(o,i,n){n.d(i,{Df:function(){return u},M1:function(){return p},Qu:function(){return s},TP:function(){return g},pn:function(){return d},tx:function(){return f},uH:function(){return m},uV:function(){return l}});var e=n(1413),t=n(5861),r=n(7757),A=n.n(r),K=n(1243),a=function(){var o=(0,t.Z)(A().mark((function o(i,n){return A().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",K.Z.get("https://api.themoviedb.org/3"+i,{params:(0,e.Z)({api_key:"7e626872ba2c457d969115031d94d6fb",language:"en-US",page:1},n)}).then((function(o){return console.log("FULL Response:",o),o})).catch((function(o){console.log("error",o)})));case 1:case"end":return o.stop()}}),o)})));return function(i,n){return o.apply(this,arguments)}}(),u=function(){var o=(0,t.Z)(A().mark((function o(){var i,n;return A().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,a("/trending/movie/day");case 2:if(null!==(i=o.sent)){o.next=5;break}return o.abrupt("return",null);case 5:return n=[],c(i.data.results,n),console.log("Trending",i),o.abrupt("return",n);case 9:case"end":return o.stop()}}),o)})));return function(){return o.apply(this,arguments)}}(),c=function(o,i){o.forEach((function(o){return i.push({movieId:o.id,movieTitle:o.title,movieBackdrop:"https://image.tmdb.org/t/p/w200"+o.backdrop_path})}))},s=function(){var o=(0,t.Z)(A().mark((function o(i){var n,e,t;return A().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n={query:i,page:1},o.next=3,a("/search/movie",n);case 3:if(null!==(e=o.sent)){o.next=6;break}return o.abrupt("return",null);case 6:return t=[],c(e.data.results,t),o.abrupt("return",t);case 9:case"end":return o.stop()}}),o)})));return function(i){return o.apply(this,arguments)}}(),g=function(){var o=(0,t.Z)(A().mark((function o(i){var n,e,t,r,K,u,c,s,g,p,l,f;return A().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,a("/movie/".concat(i));case 2:if(null!==(n=o.sent)){o.next=5;break}return o.abrupt("return",null);case 5:return e=n.data,t=e.poster_path,r=e.title,K=e.release_date,u=e.vote_average,c=e.vote_count,s=e.overview,g=e.genres,p=e.homepage,l=e.tagline,f={posterPath:"https://image.tmdb.org/t/p/w300"+t,title:r,releaseDate:"".concat(new Date(K).getFullYear()),voteAverage:u,voteCount:c,overview:s,genres:g,homepage:p,tagline:l},console.log("details",n),o.abrupt("return",f);case 9:case"end":return o.stop()}}),o)})));return function(i){return o.apply(this,arguments)}}(),p=function(){var o=(0,t.Z)(A().mark((function o(i){var n,e;return A().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,a("/movie/".concat(i,"/credits"));case 2:if(null!==(n=o.sent)){o.next=5;break}return o.abrupt("return",null);case 5:return e=[],console.log("CAST",n),n.data.cast.forEach((function(o){var i=o.id,n=o.profile_path,t=o.name,r=o.character;return e.push({id:i,srcImg:"https://image.tmdb.org/t/p/w200"+n,name:t,character:r})})),o.abrupt("return",e);case 9:case"end":return o.stop()}}),o)})));return function(i){return o.apply(this,arguments)}}(),l=function(){var o=(0,t.Z)(A().mark((function o(i){var n,e;return A().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,a("/movie/".concat(i,"/credits"));case 2:if(null!==(n=o.sent)){o.next=5;break}return o.abrupt("return",null);case 5:return e=[],console.log("Crew",n),n.data.crew.forEach((function(o){var i=o.id,n=o.profile_path,t=o.name,r=o.department,A=o.job;return e.push({id:i,srcImg:"https://image.tmdb.org/t/p/w200"+n,name:t,department:r,job:A})})),o.abrupt("return",e);case 9:case"end":return o.stop()}}),o)})));return function(i){return o.apply(this,arguments)}}(),f=function(){var o=(0,t.Z)(A().mark((function o(i){var n,e;return A().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,a("/movie/".concat(i,"/reviews"));case 2:if(null!==(n=o.sent)){o.next=5;break}return o.abrupt("return",null);case 5:return e=[],n.data.results.forEach((function(o){var i=o.id,n=o.author,t=o.content;return e.push({id:i,author:n,content:t})})),o.abrupt("return",e);case 8:case"end":return o.stop()}}),o)})));return function(i){return o.apply(this,arguments)}}(),d=function(){var o=(0,t.Z)(A().mark((function o(i){var n,e;return A().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,a("/movie/".concat(i,"/similar"));case 2:if(null!==(n=o.sent)){o.next=5;break}return o.abrupt("return",null);case 5:return e=[],console.log("SIMILAR",n),n.data.results.forEach((function(o){var i=o.id,n=o.poster_path,t=o.title,r=o.release_date;return e.push({id:i,srcImg:"https://image.tmdb.org/t/p/w200"+n,title:t,releaseDate:"".concat(new Date(r).getFullYear())})})),o.abrupt("return",e);case 9:case"end":return o.stop()}}),o)})));return function(i){return o.apply(this,arguments)}}(),m=function(){var o=(0,t.Z)(A().mark((function o(i){var n,e;return A().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,a("/discover/movie?with_genres=".concat(i,"&sort_by=vote_average.desc&vote_count.gte=10"));case 2:if(null!==(n=o.sent)){o.next=5;break}return o.abrupt("return",null);case 5:return console.log("BEST res",n),e=[],c(n.data.results,e),o.abrupt("return",e);case 9:case"end":return o.stop()}}),o)})));return function(i){return o.apply(this,arguments)}}()},6665:function(o,i){i.Z={thumb:"CastElement_thumb__H0Ylg",label:"CastElement_label__3ceLg",image:"CastElement_image__O720H"}},5754:function(o){o.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAEsAMgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9DKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/2Q=="},5984:function(o,i,n){n.d(i,{x0:function(){return e}});var e=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(o)).reduce((function(o,i){return o+=(i&=63)<36?i.toString(36):i<62?(i-26).toString(36).toUpperCase():i>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=595.683db305.chunk.js.map