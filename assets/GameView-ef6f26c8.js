import{H as s}from"./index-d0d7d4e2.js";import{_ as l,r as d,o as c,c as m,b as t,f as o,u as g,n as a,t as i}from"./index-d449ca83.js";const u={class:"innerContainer"},h={class:"innerRow"},_=["src"],b={props:{title:String,description:String,background:String,steamWidget:String,textColor:String,boxColor:String,video:Object,images:Array},mounted(){document.body.style.background="#010101"},computed:{backgroundStyle(){return"background-image: url("+this.getImgUrl(this.background)+")"},headerStyle(){return"background-image: url("+this.getImgUrl(this.header)+")"},steamPath(){return"https://store.steampowered.com/widget/"+this.steamWidget+"/"}},methods:{getImgUrl(e){return new URL("./dir/"+e,import.meta.url).href},backBtn(){this.$route.name}}},y=Object.assign(b,{__name:"GameView",setup(e){return(r,p)=>{const n=d("silent-box");return c(),m("div",{class:"game OpacityUp",style:a(r.backgroundStyle)},[t("div",u,[t("div",h,[t("div",null,[o(g(s),{id:e.video.id,title:e.video.title},null,8,["id","title"])]),t("div",{class:"descriptionText",style:a({color:e.textColor,backgroundColor:e.boxColor})},[t("h1",null,i(e.title),1),t("p",null,i(e.description),1)],4)]),o(n,{class:"gallery",gallery:e.images},null,8,["gallery"]),t("iframe",{src:r.steamPath,frameborder:"0",width:"646",height:"190"},null,8,_)])],4)}}}),k=l(y,[["__scopeId","data-v-2058e531"]]);export{k as default};
