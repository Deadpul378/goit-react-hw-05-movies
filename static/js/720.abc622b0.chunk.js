"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[720],{495:function(n,e,t){t.d(e,{Z:function(){return g}});var r,i,o,u=t(739),a=t(168),c=t(731),l=t(444),f=(0,l.ZP)(c.OL)(r||(r=(0,a.Z)(["\n  text-decoration: none;\n  color: blue;\n  font-weight: 500;\n"]))),s=t(184),d=function(n){var e=n.filmId,t=n.name,r=(0,u.TH)();return(0,s.jsx)(f,{to:"/movies/".concat(e),state:{from:r},children:t})},p=l.ZP.ul(i||(i=(0,a.Z)(["\n  list-style: none;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),h=l.ZP.li(o||(o=(0,a.Z)(["\n  width: 40%;\n  display: inline-block;\n  padding: 4px;\n"]))),g=function(n){var e=n.films;return(0,s.jsx)(p,{children:e.map((function(n){var e=n.id,t=n.original_title;return(0,s.jsx)(h,{children:(0,s.jsx)(d,{filmId:e,name:t})},e)}))})}},720:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r,i,o,u=t(885),a=t(705),c=t(168),l=t(444),f=(0,l.ZP)(a.l0)(r||(r=(0,c.Z)(["\n  padding: 8px;\n  display: flex;\n  gap: 4px;\n"]))),s=(0,l.ZP)(a.gN)(i||(i=(0,c.Z)(["\n  font-size: 20px;\n"]))),d=t(184),p=function(n){var e=n.onSearch;return(0,d.jsx)(a.J9,{initialValues:{query:""},onSubmit:function(n,t){var r=n.query,i=t.resetForm;e(r),i()},children:(0,d.jsxs)(f,{children:[(0,d.jsx)("label",{children:(0,d.jsx)(s,{type:"text",name:"query"})}),(0,d.jsx)("button",{type:"submit",children:"Search"})]})})},h=t(791),g=t(495),m=t(340),x=t(731),v=t(402),Z=t(457),y=l.ZP.p(o||(o=(0,c.Z)(["\n  color: #9e0101;\n  font-size: 20px;\n  font-weight: 700;\n"]))),b=function(){var n=(0,x.lr)(),e=(0,u.Z)(n,2),t=e[0],r=e[1],i=(0,h.useState)([]),o=(0,u.Z)(i,2),a=o[0],c=o[1],l=(0,h.useState)(""),f=(0,u.Z)(l,2),s=f[0],b=f[1],j=(0,h.useState)("idle"),k=(0,u.Z)(j,2),S=k[0],_=k[1],w=t.get("query");(0,h.useEffect)((function(){b(w||"")}),[w]),(0,h.useEffect)((function(){if(""===s)return _("idle"),void c([]);_("pending"),(0,m.zp)(s).then((function(n){c(n)})).catch((function(n){return console.log(n)})).finally((function(){_("done")}))}),[s]);return(0,d.jsxs)(Z.x,{pl:"20px",children:[(0,d.jsx)(p,{onSearch:function(n){r({query:n}),b(n)}}),0===a.length&&"done"===S?(0,d.jsx)(y,{children:"There are no movies found for your query"}):(0,d.jsx)(g.Z,{films:a}),"pending"===S&&(0,d.jsx)(v.Yt,{})]})}},340:function(n,e,t){t.d(e,{Hg:function(){return o},TP:function(){return a},tx:function(){return l},zp:function(){return u},zv:function(){return c}});var r=t(44),i="642a5bd4929719a2e96a6dbd2cfb8311";function o(){return r.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i)).then((function(n){return n.data.results}))}function u(n){return r.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(n)).then((function(n){return n.data.results}))}function a(n){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(i,"&language=en-US")).then((function(n){return n.data}))}function c(n){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US")).then((function(n){return n.data}))}function l(n){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1")).then((function(n){return n.data.results}))}}}]);
//# sourceMappingURL=720.abc622b0.chunk.js.map