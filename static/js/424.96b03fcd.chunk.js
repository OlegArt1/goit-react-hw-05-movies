"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[424],{424:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r,a,i,c,s,u,o,p,d,x=t(861),f=t(439),l=t(757),h=t.n(l),m=t(791),g=t(689),v=t(952),Z=t(168),w=t(444),y=w.ZP.div(r||(r=(0,Z.Z)(["\n\n"]))),k=w.ZP.ul(a||(a=(0,Z.Z)(["\n    padding: 40px 60px 40px 40px;\n    list-style-type: none;\n    background-color: white;\n\n    @media screen and (max-width: 720px)\n    {\n        padding: 35px 60px 40px 40px;\n    }\n    @media screen and (max-width: 520px)\n    {\n        padding: 30px 60px 40px 40px;\n    }\n"]))),b=w.ZP.li(i||(i=(0,Z.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n"]))),j=w.ZP.article(c||(c=(0,Z.Z)(["\n    padding-bottom: 25px;\n    width: 100%;\n    height: auto;\n"]))),_=w.ZP.p(s||(s=(0,Z.Z)(["\n    padding: 10px;\n"]))),z=w.ZP.label(u||(u=(0,Z.Z)(["\n\n"]))),P=w.ZP.b(o||(o=(0,Z.Z)(["\n    font-size: 16px;\n    color: darkslategray;\n\n    @media screen and (max-width: 720px)\n    {\n        font-size: 14px;\n    }\n    @media screen and (max-width: 520px)\n    {\n        font-size: 12px;\n    }\n"]))),S=w.ZP.h3(p||(p=(0,Z.Z)(["\n    padding: 40px 0;\n    text-align: center;\n    color: green;\n\n    @media screen and (max-width: 720px)\n    {\n        font-size: 20px;\n    }\n    @media screen and (max-width: 520px)\n    {\n        font-size: 18px;\n    }\n"]))),U=w.ZP.span(d||(d=(0,Z.Z)(["\n    font-family: Arial, Helvetica, sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 1.8;\n    text-align: center;\n\n    @media screen and (max-width: 720px)\n    {\n        font-size: 12px;\n    }\n    @media screen and (max-width: 520px)\n    {\n        font-size: 10px;\n    }\n"]))),C=t(184),E=function(){var n=(0,m.useState)([]),e=(0,f.Z)(n,2),t=e[0],r=e[1],a=(0,g.UO)().movieId;return(0,m.useEffect)((function(){var n=function(){var n=(0,x.Z)(h().mark((function n(){var e;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,v.sv)(a);case 3:e=n.sent,r(e.results),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("\nError - ",n.t0.message+";"),alert("Error! Status code 404!");case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[a]),(0,C.jsx)(y,{children:0!==t.length?(0,C.jsx)(k,{children:t.map((function(n){return(0,C.jsx)(b,{children:(0,C.jsxs)(j,{id:n.id,children:[(0,C.jsx)(_,{children:(0,C.jsxs)(z,{children:[(0,C.jsx)(P,{children:"Author:\xa0\xa0"}),(0,C.jsxs)(U,{style:{color:"red"},children:[n.author,"."]})]})}),(0,C.jsx)(_,{children:(0,C.jsxs)(z,{children:[(0,C.jsx)(P,{children:"Content:\xa0\xa0"}),(0,C.jsxs)(U,{style:{lineHeight:1.5,color:"indigo"},children:[n.content,"."]})]})})]})})}))}):(0,C.jsx)(S,{children:"Reviews is not found!"})})}},952:function(n,e,t){t.d(e,{I2:function(){return o},Yi:function(){return p},ss:function(){return u},sv:function(){return x},wz:function(){return d}});var r=t(861),a=t(757),i=t.n(a),c=t(243),s="34e68a416eb051ec4adf34df5a0038fd";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"}/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=424.96b03fcd.chunk.js.map