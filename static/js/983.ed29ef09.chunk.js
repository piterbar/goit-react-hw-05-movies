"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[983],{5084:(e,t,n)=>{n.d(t,{O:()=>d});var a,o=n(168),c=n(1087),s=n(6444);const r=(0,s.ZP)(c.rU)(a||(a=(0,o.Z)(["\n  margin: ","px;\n  text-decoration: none;\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  :hover,\n  :focus {\n    color: ",";\n  }\n"])),(e=>e.theme.space[0]),(e=>e.theme.colors.text),(e=>e.theme.fontSizes.m),(e=>e.theme.fontWeights.normal),(e=>e.theme.colors.accent));var i=n(184);const l=e=>{let{id:t,title:n}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("li",{children:(0,i.jsx)(r,{to:"/movies/".concat(t),children:(0,i.jsx)("h3",{children:n})})})})};var h;const m=s.ZP.ul(h||(h=(0,o.Z)(["\n  margin-left: ","px;\n  padding-left: ","px;\n"])),(e=>e.theme.space[4]),(e=>e.theme.space[0])),d=e=>{let{movies:t}=e;return(0,i.jsx)(m,{children:t.map((e=>{let{id:t,original_title:n}=e;return(0,i.jsx)(l,{title:n,id:t},t)}))})}},3983:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a,o=n(168),c=n(5084),s=n(2791),r=n(6444),i=n(7182),l=n(184);function h(){const[e,t]=(0,s.useState)([]);return(0,s.useEffect)((()=>{!async function(){try{const e=await(0,i.wS)(),{results:n}=e;t(n)}catch(e){console.log(e)}}()}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m,{children:"Trending Today"}),e&&(0,l.jsx)(c.O,{movies:e})]})}const m=r.ZP.h2(a||(a=(0,o.Z)(["\n  margin: ","px;\n  text-decoration: none;\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n"])),(e=>e.theme.space[4]),(e=>e.theme.colors.accent),(e=>e.theme.fontSizes.m),(e=>e.theme.fontWeights.bold))},7182:(e,t,n)=>{n.d(t,{BG:()=>r,FE:()=>s,IV:()=>i,lw:()=>l,wS:()=>c});var a=n(4569),o=n.n(a);o().defaults.baseURL="https://api.themoviedb.org/3";o().defaults.params={api_key:"a2a4b646a8c4d49a4659792b894cffab"};const c=async()=>{try{return(await o().get("/trending/movie/day")).data}catch(e){console.log(e.message)}},s=async e=>{try{return(await o().get("/search/movie?query=".concat(e))).data}catch(t){console.log(t.message)}},r=async e=>{try{return(await o().get("/movie/".concat(e))).data}catch(t){console.log(t.message)}},i=async e=>{try{return(await o().get("/movie/".concat(e,"/credits"))).data}catch(t){console.log(t.message)}},l=async e=>{try{return(await o().get("/movie/".concat(e,"/reviews"))).data}catch(t){console.log(t.message)}}}}]);
//# sourceMappingURL=983.ed29ef09.chunk.js.map