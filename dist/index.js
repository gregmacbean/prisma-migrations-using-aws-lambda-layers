(()=>{var s={10:(s,e,t)=>{t(470);const o=t(860),{PrismaClient:r}=t(959),{PrismaClient:n}=t(687),a=t(724);console.log(`DOG_URL: ${process.env.DOG_U}`),console.log(`CAT_URL: ${process.env.CAT_URL}`),console.log("NODE_ENV: production");const c=process.env.PORT||8e3,i=new r,l=new n,p=o();p.use(o.json());const u=s=>(e,t,o)=>{Promise.resolve(s(e,t,o)).catch(o)};p.use(((s,e,t,o)=>{t.status(500).json({devMessage:s.message,devStack:s.stack})})),p.get("/",((s,e)=>{e.status(200).send("Welcome to the Petstore!")})),p.get("/dog",u((async(s,e)=>{const t=await i.dog.findMany();e.json(t)}))),p.post("/dog",u((async(s,e)=>{const{name:t,color:o}=s.body,r=await i.dog.create({data:{name:t,color:o}});e.status(200).json(r)}))),p.get("/cat",u((async(s,e)=>{const t=await l.cat.findMany();e.json(t)}))),p.post("/cat",u((async(s,e)=>{const{name:t,color:o}=s.body,r=await l.cat.create({data:{name:t,color:o}});e.status(200).json(r)}))),p.listen(c,(async()=>{console.log(`Listening on: http://localhost:${c} `)})),a(p)},687:s=>{"use strict";s.exports=require(".prisma/cat-client")},959:s=>{"use strict";s.exports=require(".prisma/dog-client")},860:s=>{"use strict";s.exports=require("express")},470:s=>{"use strict";s.exports=require("fs-extra")},724:s=>{"use strict";s.exports=require("serverless-http")}},e={};!function t(o){var r=e[o];if(void 0!==r)return r.exports;var n=e[o]={exports:{}};return s[o](n,n.exports,t),n.exports}(10)})();