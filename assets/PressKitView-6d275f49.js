import{H as v}from"./index-f0148ce9.js";import{_ as m,r as _,o as a,c,b as e,e as n,d as t,t as r,F as h,f as g,u as f,p as y,a as S}from"./index-f130025f.js";const s=l=>(y("data-v-18047722"),l=l(),S(),l),b={class:"pressKit OpacityUp"},I=["src"],L={class:"innerContainer"},T=["innerHTML"],w=s(()=>e("div",{class:"line"},null,-1)),H=["innerHTML"],k=s(()=>e("div",{class:"line"},null,-1)),V=["innerHTML"],x=s(()=>e("div",{class:"hideOnLarge line"},null,-1)),A={class:"factsheet"},D=s(()=>e("p",null,[e("strong",null,"Genre:")],-1)),M=s(()=>e("p",null,[e("strong",null,"Release Date:")],-1)),B=s(()=>e("p",null,[e("strong",null,"Price:")],-1)),P=s(()=>e("p",null,[e("strong",null,"Platforms:")],-1)),F=s(()=>e("div",null,[e("p",null,[e("strong",null,"Website:")]),e("p",null,[e("a",{href:"http://www.hitregstudios.com"},"Hitreg Studios")])],-1)),K=s(()=>e("div",null,[e("p",null,[e("strong",null,"Contact Info:")]),e("p",null,"press@hitregstudios.com")],-1)),U=s(()=>e("div",null,[e("p",null,[e("strong",null,"Socials:")]),e("p")],-1)),C=s(()=>e("div",{class:"line"},null,-1)),N=s(()=>e("div",{class:"line"},null,-1)),O=s(()=>e("div",{class:"line"},null,-1)),q=s(()=>e("div",{class:"line"},null,-1)),R={class:"article"},j={class:"articleTitle"},E={class:"articleTitle"},G=["href"],W={props:{titleImage:String,price:String,platforms:String,genre:String,releaseDate:String,description:String,history:String,features:String,developer:String,videos:Array,images:Array,branding:Array,articles:Array},mounted(){document.body.style.background="#010101"},methods:{getImgUrl(l){return new URL("./dir/"+l,import.meta.url).href},backBtn(){this.$route.name}}},$=Object.assign(W,{__name:"PressKitView",setup(l){return(p,z)=>{const i=_("fa"),u=_("silent-box");return a(),c("div",b,[e("img",{src:p.getImgUrl(l.titleImage),class:"header"},null,8,I),e("div",L,[e("div",null,[e("h2",null,[n(i,{icon:["fas","gamepad"]}),t(" Description")]),e("div",{innerHTML:l.description},null,8,T),w,e("h2",null,[n(i,{icon:["fas","list"]}),t(" Features")]),e("div",{innerHTML:l.features},null,8,H),k,e("h2",null,[n(i,{icon:["fas","user"]}),t(" About the Developer")]),e("div",{innerHTML:l.developer},null,8,V)]),x,e("div",A,[e("h2",null,[n(i,{icon:["fas","file-circle-question"]}),t(" Factsheet")]),e("div",null,[D,e("p",null,r(l.genre),1)]),e("div",null,[M,e("p",null,r(l.releaseDate),1)]),e("div",null,[B,e("p",null,r(l.price),1)]),e("div",null,[P,e("p",null,r(l.platforms),1)]),F,K,U])]),C,e("h2",null,[n(i,{icon:["fas","video"]}),t(" Video")]),(a(!0),c(h,null,g(l.videos,(o,d)=>(a(),c("div",{class:"videos",key:d},[n(f(v),{id:o.id,title:o.title},null,8,["id","title"])]))),128)),N,e("h2",null,[n(i,{icon:["fas","image"]}),t(" Screen Shots")]),n(u,{class:"gallery",gallery:l.images},null,8,["gallery"]),O,e("h2",null,[n(i,{icon:["fas","registered"]}),t(" Branding")]),n(u,{class:"gallery",gallery:l.branding},null,8,["gallery"]),q,e("h2",null,[n(i,{icon:["fas","pen-to-square"]}),t(" Selected Articles")]),(a(!0),c(h,null,g(l.articles,(o,d)=>(a(),c("div",{class:"articles",key:d},[e("div",R,[e("h3",j,r(o.description),1),e("p",E,[e("span",null,r(o.author),1),t(" | "),e("a",{href:o.src},r(o.link),9,G)])])]))),128))])}}}),X=m($,[["__scopeId","data-v-18047722"]]);export{X as default};