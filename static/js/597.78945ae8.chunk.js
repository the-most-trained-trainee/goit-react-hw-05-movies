"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[597],{597:function(e,t,n){n.r(t);var r=n(439),a=n(791),c=n(591),u=n(689),i=n(184);t.default=function(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],o=t[1],s=(0,u.UO)().movieId;return(0,a.useEffect)((function(){(0,c.M1)(s).then((function(e){return o(e)}))}),[s]),(0,i.jsx)(i.Fragment,{children:n&&(0,i.jsx)("ul",{children:n.map((function(e){return(0,i.jsxs)("li",{children:[(0,i.jsx)("h3",{children:e.name}),(0,i.jsx)("p",{children:e.character}),(0,i.jsx)("img",{className:"movie-img",src:"https://image.tmdb.org/t/p/w300"+e.profile_path,alt:""})]},e.id)}))})})}},591:function(e,t,n){n.d(t,{M1:function(){return f},oR:function(){return o},tx:function(){return p},vq:function(){return s},z5:function(){return i}});var r=n(861),a=n(757),c=n.n(a),u="8562b39677dad16e2334fc338fdc606e",i=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(u));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,a={id:(c=r).id,title:c.title,overview:c.overview,release_date:c.release_date,genres:c.genres,popularity:c.popularity,vote_average:c.vote_average,poster_path:c.poster_path},e.abrupt("return",a);case 8:case"end":return e.stop()}var c}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,a=r.results,i=a.map((function(e){return{id:e.id,author:e.author,content:e.content}})),e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,a=r.cast,i=a.map((function(e){return{id:e.credit_id,name:e.name,character:e.character,profile_path:e.profile_path}})),e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},861:function(e,t,n){function r(e,t,n,r,a,c,u){try{var i=e[c](u),o=i.value}catch(s){return void n(s)}i.done?t(o):Promise.resolve(o).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,c){var u=e.apply(t,n);function i(e){r(u,a,c,i,o,"next",e)}function o(e){r(u,a,c,i,o,"throw",e)}i(void 0)}))}}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=597.78945ae8.chunk.js.map