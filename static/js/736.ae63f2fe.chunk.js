"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{736:function(n,t,e){e.r(t),e.d(t,{default:function(){return _}});var a,r,i,c,o=e(885),u=e(791),s=e(739),p=e(340),d=e(568),h=e(168),l=e(444),f=l.ZP.div(a||(a=(0,h.Z)(["\n  list-style-type: none;\n  padding: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),g=l.ZP.li(r||(r=(0,h.Z)(["\n  width: calc((100% - 140px) / 8);\n"]))),m=l.ZP.img(i||(i=(0,h.Z)(["\n  width: 100%;\n"]))),v=l.ZP.span(c||(c=(0,h.Z)(["\n  display: block;\n  font-weight: 700;\n"]))),w=e(184),_=function(){var n=(0,s.UO)().movieId,t=(0,u.useState)([]),e=(0,o.Z)(t,2),a=e[0],r=e[1];return(0,u.useEffect)((function(){(0,p.zv)(n).then((function(n){r(n.cast)}))}),[n]),(0,w.jsx)(f,{children:a.map((function(n){var t=n.profile_path,e=n.name,a=n.original_name,r=n.character,i=n.cast_id;return(0,w.jsxs)(g,{children:[t?(0,w.jsx)(m,{src:d.Y+t,alt:e,width:"150"}):(0,w.jsx)(m,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png",alt:e,width:"200"}),(0,w.jsx)("p",{children:a}),(0,w.jsxs)("p",{children:[(0,w.jsx)(v,{children:"Character: "}),(0,w.jsx)("span",{children:r})]})]},i)}))})}},340:function(n,t,e){e.d(t,{Hg:function(){return i},TP:function(){return o},tx:function(){return s},zp:function(){return c},zv:function(){return u}});var a=e(44),r="642a5bd4929719a2e96a6dbd2cfb8311";function i(){return a.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(r)).then((function(n){return n.data.results}))}function c(n){return a.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(r,"&language=en-US&page=1&include_adult=false&query=").concat(n)).then((function(n){return n.data.results}))}function o(n){return a.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(r,"&language=en-US")).then((function(n){return n.data}))}function u(n){return a.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(r,"&language=en-US")).then((function(n){return n.data}))}function s(n){return a.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(r,"&language=en-US&page=1")).then((function(n){return n.data.results}))}},568:function(n,t,e){e.d(t,{Y:function(){return a}});var a="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/"}}]);
//# sourceMappingURL=736.ae63f2fe.chunk.js.map