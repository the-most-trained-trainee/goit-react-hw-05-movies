"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[221],{221:function(e,t,n){n.r(t);var r=n(861),a=n(439),u=n(757),c=n.n(u),i=n(791),o=n(87),s=n(689),p=n(591),f=n(184);t.default=function(){var e=(0,i.useState)(""),t=(0,a.Z)(e,2),n=t[0],u=t[1],l=(0,i.useState)([]),h=(0,a.Z)(l,2),v=h[0],d=h[1],m=(0,o.lr)(),g=(0,a.Z)(m,2),x=g[0],y=g[1];(0,i.useEffect)((function(){x.get("query")&&(u(x.get("query")),_(x.get("query")))}),[x]);var _=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.oR)(t);case 2:n=e.sent,d(n.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("form",{className:"",onSubmit:function(e){e.preventDefault(),""!==n.trim()?y({query:n}):alert("Please enter a valid request!")},children:[(0,f.jsx)("button",{type:"submit",className:"",children:(0,f.jsx)("span",{className:"",children:"Search"})}),(0,f.jsx)("input",{className:"",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(e){u(e.currentTarget.value)},value:n})]}),(0,f.jsx)("ul",{children:v&&v.map((function(e){return(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"".concat(e.id),state:{from:"/movies?query="+n},children:e.original_title})},e.id)}))}),(0,f.jsx)(i.Suspense,{fallback:null,children:(0,f.jsx)(s.j3,{})})]})}},591:function(e,t,n){n.d(t,{M1:function(){return f},oR:function(){return o},tx:function(){return p},vq:function(){return s},z5:function(){return i}});var r=n(861),a=n(757),u=n.n(a),c="8562b39677dad16e2334fc338fdc606e",i=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(c));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,a={id:(u=r).id,title:u.title,overview:u.overview,release_date:u.release_date.slice(0,4),genres:u.genres.map((function(e){return e.name+" "})),popularity:u.popularity,vote_average:Math.ceil(10*u.vote_average),poster_path:"https://image.tmdb.org/t/p/w500"+u.poster_path},e.abrupt("return",a);case 8:case"end":return e.stop()}var u}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,a=r.results,i=a.map((function(e){return{id:e.id,author:e.author,content:e.content}})),e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,a=r.cast,i=a.map((function(e){return{id:e.credit_id,name:e.name,character:e.character,profile_path:"https://image.tmdb.org/t/p/w300"+e.profile_path}})),e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},861:function(e,t,n){function r(e,t,n,r,a,u,c){try{var i=e[u](c),o=i.value}catch(s){return void n(s)}i.done?t(o):Promise.resolve(o).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,u){var c=e.apply(t,n);function i(e){r(c,a,u,i,o,"next",e)}function o(e){r(c,a,u,i,o,"throw",e)}i(void 0)}))}}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=221.b1ed3037.chunk.js.map