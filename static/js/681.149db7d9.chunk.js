"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[681],{681:function(e,t,n){n.r(t);var r=n(439),a=n(791),u=n(689),c=n(591),o=n(184);t.default=function(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],i=t[1],s=(0,u.UO)().movieId;return(0,a.useEffect)((function(){(0,c.tx)(s).then((function(e){return i(e)}))}),[s]),(0,o.jsx)(o.Fragment,{children:n&&(0,o.jsx)("ul",{children:n.map((function(e){return(0,o.jsxs)("li",{children:[(0,o.jsx)("h3",{children:e.author}),(0,o.jsx)("p",{children:e.content})]},e.id)}))})})}},591:function(e,t,n){n.d(t,{M1:function(){return f},oR:function(){return i},tx:function(){return p},vq:function(){return s},z5:function(){return o}});var r=n(861),a=n(757),u=n.n(a),c="8562b39677dad16e2334fc338fdc606e",o=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(c));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,a={id:(u=r).id,title:u.title,overview:u.overview,release_date:u.release_date,genres:u.genres,popularity:u.popularity,vote_average:u.vote_average,poster_path:u.poster_path},e.abrupt("return",a);case 8:case"end":return e.stop()}var u}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,a=r.results,o=a.map((function(e){return{id:e.id,author:e.author,content:e.content}})),e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,a=r.cast,o=a.map((function(e){return{id:e.credit_id,name:e.name,character:e.character,profile_path:e.profile_path}})),e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},861:function(e,t,n){function r(e,t,n,r,a,u,c){try{var o=e[u](c),i=o.value}catch(s){return void n(s)}o.done?t(i):Promise.resolve(i).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,u){var c=e.apply(t,n);function o(e){r(c,a,u,o,i,"next",e)}function i(e){r(c,a,u,o,i,"throw",e)}o(void 0)}))}}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=681.149db7d9.chunk.js.map