var A=Object.defineProperty,C=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var f=(o,e,n)=>e in o?A(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,h=(o,e)=>{for(var n in e||(e={}))D.call(e,n)&&f(o,n,e[n]);if(x)for(var n of x(e))z.call(e,n)&&f(o,n,e[n]);return o},b=(o,e)=>C(o,J(e));import{W as T,s as i,R as t,C as L,r as w,a as W}from"./vendor.d7209967.js";const R=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}};R();const M=T`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        height: 100vh;
        font-family: 'Spartan', sans-serif;
    }
`;var O="/static-job-listings-master-Dani7uG/assets/bg-header-desktop.063feca4.svg",P="/static-job-listings-master-Dani7uG/assets/bg-header-mobile.43b59507.svg";const I=i.div`
    box-sizing: border-box;
    height:120px;
    width:100%;
    background:hsl(180, 29%, 50%) url(${P})  no-repeat;
    background-size: cover;
    position:relative;
    display: flex;
    justify-content: center;
    z-index:10;
    @media (min-width: 780px){
        background-image: url(${O});
        height:200px;
    }
`,j=i.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    overflow-y: auto;
    height: 100px;
    width: 90%;
    border-radius: 5px;
    background:#fefefe;
    position:absolute;
    bottom:-30px;
    box-shadow: -2px 13px 57px -27px rgb(106,158,154);
        -webkit-box-shadow: -2px 13px 57px -27px rgb(106,158,154);
        -moz-box-shadow: -2px 13px 57px -27px rgb(106,158,154);
    @media (min-width: 768px) {
        width:745px;
    }
    @media (min-width: 820px){
        width:845px;
    }
    @media (min-width: 920px){
        width:945px;
    }
`,H=i.button`
    border:none;
    outline:none;
    font-weight: 700;
    font-size:15px;
    background:none;
    color:hsl(180, 8%, 52%);
    padding:20px 20px 20px 0px;
    cursor:pointer;
    transition:all .1s linear;
    &:hover{
        text-decoration:underline;
        color:rgb(106,158,154);
    }
`,N=i.div`
    display: grid;
    grid-template-columns:repeat(2,1fr);
    grid-gap:5px;
    @media (min-width:768px){
        grid-template-columns:repeat(8,1fr);   
    }
`,U=i.div`
    display:flex;
    margin:20px;
    align-items:center;
`,$=i.p`
    font-size: 14px;
    background:hsl(180, 31%, 95%);
    color:rgb(106,158,154);
    font-weight: 700;
    border-radius: 0px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border:none;
    outline:none;
    padding:8px 5px;
    cursor:pointer;
    transition:all .1s linear;
    &:hover{
        color:hsl(180, 31%, 95%);
        background:rgb(106,158,154);
    }
`,B=i.button`
    border:none;
    outline:none;
    border-radius: 0px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color:hsl(180, 14%, 20%);
    height:33px;
    width: 33px;
    color:#fefefe;
    font-size: 17px;
    font-weight: 700;
    cursor:pointer;
`,G=({filter:o,setFilter:e})=>{const n=a=>e(o.filter(r=>r!=a));return t.createElement(j,null,t.createElement(N,null,o.length!==0&&o.map((a,r)=>t.createElement(U,{key:r},t.createElement($,null,a),t.createElement(B,{onClick:()=>n(a)},"X")))),t.createElement(H,{onClick:()=>e([])},"Clear"))},K=i.ul`
    margin:0 40px 0 40px;
    padding:0;
    padding-top:50px;
    position:relative;
    z-index:1000;
    display:flex;
    flex-direction: column;
    align-items: center;
`,q=i.li`
    position:relative;
    border-radius:5px;
    width:100%;
    margin:20px;
    padding:20px;
    list-style: none;
    background:hsl(180, 52%, 96%);
    ${o=>o.news&&o.featured&&L`
        border-left: 5px solid rgb(106,158,154);
    `}
    box-shadow: -2px 13px 57px -27px rgb(106,158,154);
        -webkit-box-shadow: -2px 13px 57px -27px rgb(106,158,154);
        -moz-box-shadow: -2px 13px 57px -27px rgb(106,158,154);
    
    @media (min-width: 768px) {
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-items:center;
        margin:20px 0;
        width:700px;
    }
    @media (min-width: 820px){
        width:800px;
    }
    @media (min-width: 920px){
        width:900px;
    }
`,V=i.p`
    color:rgb(106,158,154);
    font-weight: 700;
    margin-right: 10px;
`,X=i.div`
    display:flex;
    align-items: center;
    font-size: 15px;
`,y=i.span`
    font-size:12px;
    color:#fff;
    background-color:${o=>o.color};
    border-radius:30px;
    padding:0 10px;
    padding-top:4px;
    height:20px;
    display: flex;
    align-items: center;
    font-weight: 700;
    margin:0 5px;
`,Q=i.p`
    font-size:16px;
    font-weight: 700;
`,Y=i.div`
    display:flex;
    align-items: center;
    margin-bottom:25px;
`,Z=i.p`
    font-size: 13px;
    color: hsl(180, 8%, 52%);
    margin:0 8px;
`,_=i.span`
    border-radius: 50%;
    background-color:hsl(180,8%, 52%);
    width:4px;
    height: 4px;
`,ee=i.hr`
    @media (min-width: 768px){
        display:none;
    }
`,te=i.div`
    margin-top:15px;
    display:grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 10px;
    @media (min-width: 768px) {
        display:flex;
        flex-direction: row;
    }
`,oe=i.button`
    background:hsl(180, 31%, 95%);
    color:rgb(106,158,154);
    font-weight: 700;
    border-radius: 5px;
    border:none;
    outline:none;
    padding:5px;
    cursor:pointer;
    transition:all .1s linear;
    &:hover{
        color:hsl(180, 31%, 95%);
        background:rgb(106,158,154);
    }
`,ne=i.div`
    display:flex;
    flex-direction:row;
    align-items: center;
`,re=i.img`
    position: absolute;
    top:-25px;
    width: 50px;
    height: 50px;
    @media (min-width: 768px) {
        position:relative;
        top:0;
        width: 100px;
        height: 100px;
        margin:0 20px 0 0;
    }
`,ie=({info:o})=>t.createElement(Y,null,o.map((e,n)=>e===""?t.createElement(_,{key:n}):t.createElement(Z,{key:n},e))),le=({company:o,NEW:e,featured:n})=>t.createElement(X,null,t.createElement(V,null,o),e&&t.createElement(y,{color:"rgb(106,158,154)"},"NEW!"),n&&t.createElement(y,{color:"#111"},"FEATURED")),ae=o=>{const{featured:e,company:n,position:a,postedAt:r,contract:l,location:s,role:p,level:g,languages:c,tools:u,logo:m,filter:k,setFilter:S}=o,E=[p,g,...c,...u],F=d=>S(Array.from(new Set([...k,d])));return t.createElement(q,{news:o.new,featured:e},t.createElement(ne,null,t.createElement(re,{src:m}),t.createElement("div",null,t.createElement(le,{NEW:o.new,featured:e,company:n}),t.createElement(Q,null,a),t.createElement(ie,{info:[r,"",l,"",s]}),t.createElement(ee,null))),t.createElement(te,null,E.map(d=>t.createElement(oe,{key:d,onClick:()=>F(d)},d))))},se=({data:o,filter:e,setFilter:n})=>{const a=r=>{const{role:l,level:s,languages:p,tools:g}=r;let c=!0,u=[l,s,...p,...g];for(let m of e)if(!u.includes(m)){c=!1;break}return e.length!==0?c:r};return t.createElement(K,null,o.filter(a).map(r=>t.createElement(ae,b(h({key:r.id},r),{filter:e,setFilter:n}))))};var v=[{id:1,company:"Photosnap",logo:"./photosnap.svg",new:!0,featured:!0,position:"Senior Frontend Developer",role:"Frontend",level:"Senior",postedAt:"1d ago",contract:"Full Time",location:"USA Only",languages:["HTML","CSS","JavaScript"],tools:[]},{id:2,company:"Manage",logo:"./manage.svg",new:!0,featured:!0,position:"Fullstack Developer",role:"Fullstack",level:"Midweight",postedAt:"1d ago",contract:"Part Time",location:"Remote",languages:["Python"],tools:["React"]},{id:3,company:"Account",logo:"./account.svg",new:!0,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2d ago",contract:"Part Time",location:"USA Only",languages:["JavaScript"],tools:["React","Sass"]},{id:4,company:"MyHome",logo:"./myhome.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"5d ago",contract:"Contract",location:"USA Only",languages:["CSS","JavaScript"],tools:[]},{id:5,company:"Loop Studios",logo:"./loop-studios.svg",new:!1,featured:!1,position:"Software Engineer",role:"Fullstack",level:"Midweight",postedAt:"1w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript"],tools:["Ruby","Sass"]},{id:6,company:"FaceIt",logo:"./faceit.svg",new:!1,featured:!1,position:"Junior Backend Developer",role:"Backend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"UK Only",languages:["Ruby"],tools:["RoR"]},{id:7,company:"Shortly",logo:"./shortly.svg",new:!1,featured:!1,position:"Junior Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"Worldwide",languages:["HTML","JavaScript"],tools:["Sass"]},{id:8,company:"Insure",logo:"./insure.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"USA Only",languages:["JavaScript"],tools:["Vue","Sass"]},{id:9,company:"Eyecam Co.",logo:"./eyecam-co.svg",new:!1,featured:!1,position:"Full Stack Engineer",role:"Fullstack",level:"Midweight",postedAt:"3w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript","Python"],tools:["Django"]},{id:10,company:"The Air Filter Company",logo:"./the-air-filter-company.svg",new:!1,featured:!1,position:"Front-end Dev",role:"Frontend",level:"Junior",postedAt:"1mo ago",contract:"Part Time",location:"Worldwide",languages:["JavaScript"],tools:["React","Sass"]}];function de(){const[o,e]=w.exports.useState(v),[n,a]=w.exports.useState([]);return t.createElement("div",{className:"App"},t.createElement(M,null),t.createElement(I,null,n.length!==0&&t.createElement(G,{filter:n,setFilter:a,data:v})),t.createElement(se,{data:o,setWorks:e,filter:n,setFilter:a}))}W.render(t.createElement(t.StrictMode,null,t.createElement(de,null)),document.getElementById("root"));
