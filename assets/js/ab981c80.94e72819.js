"use strict";(self.webpackChunkcoach_resources=self.webpackChunkcoach_resources||[]).push([[481],{6014:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var l=n(7294),a=n(6742);const s="buttons_R3Vk",c="templatesTopContainer_eFUT",o="templatesInnerContainer_N4Zl",r="templatesTableCell_8PF5",m=e=>{const{templates:t}=e;return t&&0!==t.length?l.createElement("div",null,t.obsTemplates.map((e=>l.createElement("div",{key:e.id},l.createElement("table",null,l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",{className:r},l.createElement("h2",null,e.name),l.createElement("small",null,"Published: ",e.date,l.createElement("br",null),"MD5: ",l.createElement("code",null,e.md5)),l.createElement("p",null),l.createElement("div",{className:s},l.createElement(a.Z,{className:"button button--secondary button--lg",to:"https://raw.githubusercontent.com/valoresports/public-obs-templates/main/files/"+e.valorContentType+"/"+e.id+".zip"},"Download .zip file")))))))))):l.createElement("p",null,"Error retrieving templates. Sorry!")};const u=function(e){return function(t){let{isLoading:n,...a}=t;return n?l.createElement("p",{style:{textAlign:"center",fontSize:"30px"}},"Fetching template data... This may take some time..."):l.createElement(e,a)}};var i=n(261);const p=function(){const e=u(m),[t,n]=(0,l.useState)({loading:!1,templates:null});return(0,l.useEffect)((()=>{n({loading:!0});fetch("https://raw.githubusercontent.com/valoresports/public-obs-templates/main/obsTemplates.json").then((e=>e.json())).then((e=>{n({loading:!1,templates:e})}))}),[n]),l.createElement(i.Z,{title:"OBS Templates"},l.createElement("div",{className:c},l.createElement("div",{className:o},l.createElement("h1",null,"OBS Templates"),l.createElement(e,{isLoading:t.loading,templates:t.templates}))),l.createElement("div",{className:s},l.createElement(a.Z,{className:"button button--secondary button--lg",to:"/docs/content-production/content-production"},"Back to Content Production")))}}}]);