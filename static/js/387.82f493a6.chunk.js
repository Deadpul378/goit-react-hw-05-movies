"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{387:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var r,i=t(885),a=t(791),c=t(739),o=t(340),u=t(168),d=t(444).ZP.div(r||(r=(0,u.Z)(["\n  list-style-type: none;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),s=t(184),h=function(){var n=(0,c.UO)().movieId,e=(0,a.useState)([]),t=(0,i.Z)(e,2),r=t[0],u=t[1];return(0,a.useEffect)((function(){(0,o.tx)(n).then((function(n){u(n)}))}),[n]),0===r.length?(0,s.jsx)("p",{children:"We don't have any reviews for yhis movie"}):(0,s.jsx)(d,{children:r.map((function(n){var e=n.id,t=n.author,r=n.content;return(0,s.jsxs)("li",{children:[(0,s.jsxs)("p",{children:[(0,s.jsx)("b",{children:"Author:"}),(0,s.jsx)("b",{children:t})]}),(0,s.jsx)("p",{children:r})]},e)}))})}},340:function(n,e,t){t.d(e,{Hg:function(){return a},TP:function(){return o},tx:function(){return d},zp:function(){return c},zv:function(){return u}});var r=t(44),i="642a5bd4929719a2e96a6dbd2cfb8311";function a(){return r.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i)).then((function(n){return n.data.results}))}function c(n){return r.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(n)).then((function(n){return n.data.results}))}function o(n){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(i,"&language=en-US")).then((function(n){return n.data}))}function u(n){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US")).then((function(n){return n.data}))}function d(n){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1")).then((function(n){return n.data.results}))}}}]);
//# sourceMappingURL=387.82f493a6.chunk.js.map