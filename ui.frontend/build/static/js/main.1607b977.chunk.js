(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{556:function(e,t,n){var a={".":106,"./":106,"./index":106,"./index.js":106};function c(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=s,e.exports=c,c.id=556},561:function(e,t,n){},562:function(e,t,n){},563:function(e,t,n){},564:function(e,t,n){},565:function(e,t,n){},566:function(e,t,n){},567:function(e,t,n){},568:function(e,t,n){},569:function(e,t,n){},570:function(e,t,n){"use strict";n.r(t);n(276),n(482),n(530);var a,c,s=n(52),r=n(29),o=n(2),i=n(263),p=n(22),l=n(63),j=n(64),u=n(65),b=n(66),m=n(6),d=n(1),O=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[this.childComponents,this.childPages]})}}]),n}(m.Page),h=Object(m.withModel)(O),C=(s.ModelClient,n(48)),x=n(176),f=n.n(x),g=function(){return Object(d.jsx)("div",{children:"Error loading chunks!"})},v=(a=function(e){return Object(d.jsx)("div",{className:"loading-skeleton loading-skeleton__block",style:{height:e.skeletonHeight?e.skeletonHeight:"50px"}})},c={skeletonHeight:1e3},function(e){return Object(d.jsx)(a,Object(C.a)(Object(C.a)({},c),e))}),N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v;return f()(e,{loading:t,error:g})},y=n(268),M=n(74);n(561);var T,E,w=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"containerProps",get:function(){var e=Object(y.a)(Object(M.a)(n.prototype),"containerProps",this);return e.className=(e.className||"")+" page "+(this.props.cssClassNames||""),e}}]),n}(m.Page);Object(m.MapTo)("reactapp/components/page")(Object(m.withComponentMappingContext)((T=w,function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.props.cqPath;return t?(E=E||"html",Object(d.jsx)(p.d,{exact:!0,path:"(.*)"+t+"(."+E+")?",render:function(t){return Object(d.jsx)(T,Object(C.a)(Object(C.a)({},e.props),t))}},t)):Object(d.jsx)(T,Object(C.a)({},this.props))}}]),n}(o.Component))));Object(m.MapTo)("reactapp/components/container")(Object(m.withComponentMappingContext)(m.AllowedComponentsContainer),{emptyLabel:"Container",isEmpty:function(e){return!e||!e.cqItemsOrder||0===e.cqItemsOrder.length}});Object(m.MapTo)("reactapp/components/experiencefragment")(Object(m.withComponentMappingContext)(m.Container),{emptyLabel:"Experience Fragment",isEmpty:function(e){return!e||!e.configured}}),n(562);var k=function(e){var t=e.text,n=e.title,a=e.buttonText,c=e.image,s=void 0===c?{}:c;return Object(d.jsx)("body",{children:Object(d.jsxs)("div",{className:"Container",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{className:"LeftContainer",src:s.src,alt:"scarecrow"})}),Object(d.jsxs)("div",{className:"RightContainer",children:[Object(d.jsx)("h1",{className:"title",children:n}),Object(d.jsx)("p",{className:"text",children:t}),Object(d.jsx)("button",{children:a})]})]})})};Object(m.MapTo)("reactapp/components/body-section")(k);n(563);var I=function(e){var t=e.title,n=e.paragraph;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"title",children:t}),Object(d.jsx)("p",{className:"paragraph",children:n})]})},V=(Object(m.MapTo)("reactapp/components/title-section")(I),n(137)),L=n(67),P=Object(o.createContext)({token:null,setToken:function(){}});function F(){return{user:"",password:""}}n(564);var D=function(e){var t=e.title,n=e.buttonName,a=Object(o.useState)(F),c=Object(L.a)(a,2),s=c[0],r=c[1],i=Object(o.useState)(null),l=Object(L.a)(i,2),j=l[0],u=l[1],b=Object(o.useContext)(P).setToken,m=Object(p.k)();function O(e){var t=e.target,n=t.value,a=t.name;r(Object(C.a)(Object(C.a)({},s),{},Object(V.a)({},a,n)))}return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=function(e){var t=e.user,n=e.password;return"admin"===t&&"admin"===n?{token:"1234"}:{error:"Ops, usu\xe1rio ou senha inv\xe1lidos. Tente novamente!"}}(s),n=t.token,a=t.error;if(n)return b(n),m.push("/content/reactapp/us/en/homepage.html");u(a),r(F)},children:[Object(d.jsx)("h1",{className:"form-title",children:t}),Object(d.jsxs)("div",{className:"input-container",children:[Object(d.jsx)("input",{className:j?"login-error-border":"form-input",id:"user",type:"text",name:"user",placeholder:"Usu\xe1rio",onChange:O,value:s.user}),Object(d.jsx)("input",{className:j?"login-error-border":"form-input",id:"password",type:"password",name:"password",placeholder:"Senha",onChange:O,value:s.password}),j?Object(d.jsx)("div",{className:"login-error",children:j}):Object(d.jsx)("div",{children:Object(d.jsx)("span",{})})]}),Object(d.jsx)("button",{className:"form-button",type:"submit",children:n})]})};Object(m.MapTo)("reactapp/components/form-section")(D);n(565);Object(m.MapTo)("reactapp/components/header-component")((function(e){return Object(d.jsx)("header",{children:Object(d.jsx)("p",{className:"header-title",children:e.text})})}),{emptyLabel:"Digite aqui o texto por favor",isEmpty:function(e){return!e||!e.text}});n(566);Object(m.MapTo)("reactapp/components/footer-component")((function(e){return Object(d.jsx)("footer",{children:Object(d.jsx)("p",{className:"FooterText",children:e.text})})}));n(567);var q=function(e){var t=e.title,n=e.paragraph,a=e.buttonName,c=e.logoImage,s=void 0===c?{}:c,r=e.backgroundImage,o=void 0===r?{}:r;return Object(d.jsxs)("div",{className:"container-1",children:[Object(d.jsxs)("div",{className:"flex-item-1",children:[Object(d.jsx)(I,{title:t,paragraph:n}),Object(d.jsx)(D,{title:"Login",buttonName:a})]}),Object(d.jsxs)("div",{className:"flex-item-2",children:[Object(d.jsx)("img",{src:s.src,alt:"logo",className:"compasso-logo-1"}),Object(d.jsx)("img",{src:o.src,alt:"background",className:"background-image-1"})]})]})},H=(Object(m.MapTo)("reactapp/components/login-page")(q),n(178)),S=n(265);n(568);var _=function(e){e.title,e.subtitle;var t=e.logoImage,n=void 0===t?{}:t,a=e.backgroundImage,c=void 0===a?{}:a,s=Object(o.useRef)(),r=Object(o.useState)(600),i=Object(L.a)(r,2),l=i[0],j=i[1],u=Object(o.useState)(null),b=Object(L.a)(u,2),m=b[0],O=b[1],h=Object(o.useState)(null),C=Object(L.a)(h,2),x=C[0],f=C[1],g=new Date,v=Object(o.useState)({hours:g.getHours(),minutes:g.getMinutes()}),N=Object(L.a)(v,2),y=N[0],M=N[1],T=["domingo","segunda-feira","ter\xe7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xe1bado"][g.getDay()]+", "+g.getDate()+" de "+["janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"][g.getMonth()]+" de "+g.getFullYear(),E=Object(p.k)(),w=function(){return E.push("/content/reactapp/us/en/login.html")},k=function(){var e=Object(S.a)(Object(H.a)().mark((function e(){return Object(H.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://api.weatherapi.com/v1/current.json?key=91d0c33bbe064dc3bd0143610222306&q=Bel\xe9m&aqi=no").then((function(e){if(200===e.status)return e.json()})).then((function(e){O(e),f(e.location)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){k()}),[]),Object(o.useEffect)((function(){s.current=setInterval((function(){j((function(e){return e-1}))}),1e3)}),[]),Object(o.useEffect)((function(){0===l&&w()}),[l]),Object(o.useEffect)((function(){var e=setInterval((function(){var e=new Date;M({hours:e.getHours(),minutes:e.getMinutes()})}),1e3);return function(){return clearInterval(e)}}),[]),Object(d.jsxs)("div",{className:"home-container",children:[Object(d.jsxs)("header",{className:"header-item-1",children:[Object(d.jsx)("img",{src:n.src,alt:"logo",className:"compasso-logo-2"}),Object(d.jsxs)("div",{className:"date-container",children:[Object(d.jsxs)("span",{className:"clock",children:[y.hours,":",y.minutes]}),Object(d.jsx)("span",{className:"date",children:T})]}),m&&x&&Object(d.jsxs)("div",{className:"weather-api",children:[Object(d.jsxs)("span",{children:[x.name," - ",x.region]}),Object(d.jsxs)("span",{className:"temperature",children:[Object(d.jsxs)("svg",{width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M22.3438 0.851685C21.8762 0.851685 21.4755 1.25247 21.4755 1.72005V4.09137C21.4755 4.55895 21.8762 4.95974 22.3438 4.95974C22.8114 4.95974 23.2122 4.55895 23.2122 4.09137V1.72005C23.2122 1.25247 22.8114 0.851685 22.3438 0.851685Z",fill:"#454545"}),Object(d.jsx)("path",{d:"M30.5599 4.2583C30.2259 3.92432 29.6916 3.92432 29.3576 4.2583L27.6876 5.92824C27.3536 6.26223 27.3536 6.79661 27.6876 7.1306C28.0216 7.46459 28.556 7.46459 28.89 7.1306L30.5599 5.46066C30.8939 5.12667 30.8939 4.59229 30.5599 4.2583Z",fill:"#454545"}),Object(d.jsx)("path",{d:"M16.9665 5.92824L15.2966 4.2583C14.9626 3.92432 14.4282 3.92432 14.0942 4.2583C13.7603 4.59229 13.7603 5.12667 14.0942 5.46066L15.7642 7.1306C16.0982 7.46459 16.6325 7.46459 16.9665 7.1306C17.3005 6.79661 17.3005 6.26223 16.9665 5.92824Z",fill:"#454545"}),Object(d.jsx)("path",{d:"M22.9784 26.9362C22.3104 26.2682 21.4086 25.8674 20.4067 25.8674C20.3733 25.8674 20.3399 25.8674 20.3399 25.8674H10.9548C10.4872 25.8674 10.0864 26.2348 10.0864 26.7358C10.0864 27.2034 10.4538 27.6042 10.9548 27.6042H20.3399C20.3733 27.6042 20.3733 27.6042 20.4067 27.6042C20.941 27.6042 21.4086 27.8046 21.7426 28.172C22.0766 28.5059 22.3104 29.0069 22.3104 29.5079C22.3104 30.0423 22.11 30.5099 21.7426 30.8439C21.4086 31.1778 20.9076 31.4116 20.4067 31.4116C19.8723 31.4116 19.4047 31.2112 19.0707 30.8439C18.7367 30.5099 18.5029 30.0089 18.5029 29.5079C18.5029 29.0403 18.1021 28.6395 17.6346 28.6395C17.167 28.6395 16.7662 29.0403 16.7662 29.5079C16.7662 30.5099 17.167 31.4116 17.835 32.0796C18.5029 32.7476 19.4047 33.1484 20.4067 33.1484C21.4086 33.1484 22.3104 32.7476 22.9784 32.0796C23.6464 31.4116 24.0471 30.5099 24.0471 29.5079C24.0471 28.5059 23.6464 27.6042 22.9784 26.9362Z",fill:"#454545"}),Object(d.jsx)("path",{d:"M30.5265 19.4882L28.89 17.8516C28.556 17.5177 28.0216 17.5177 27.6876 17.8516C27.554 17.9852 27.4872 18.1188 27.4538 18.2858C27.4204 17.5177 27.22 16.8163 26.9528 16.1483C27.2868 15.7141 27.5874 15.2131 27.7878 14.7122C28.0884 14.0108 28.222 13.2426 28.222 12.4744C28.222 10.8379 27.554 9.36834 26.4853 8.33298C25.4165 7.29762 23.947 6.62964 22.3438 6.62964C21.2417 6.62964 20.2063 6.93023 19.3045 7.46461C18.6699 7.86539 18.1022 8.36638 17.6346 8.96756C16.2986 8.06579 14.6955 7.53141 12.9921 7.53141C10.9548 7.53141 9.08448 8.26618 7.64833 9.50194C6.37917 10.6041 5.44401 12.0736 5.00982 13.8104C3.70727 13.9774 2.53831 14.5786 1.66994 15.4469C0.634578 16.4823 0 17.9184 0 19.4882C0 21.0579 0.634578 22.4941 1.66994 23.5294C2.7053 24.5648 4.14145 25.1994 5.7112 25.1994H20.9077C22.7112 25.1994 24.3143 24.4646 25.5167 23.2956C26.6857 22.1267 27.4204 20.4901 27.4204 18.6866V18.6532C27.4538 18.7868 27.5206 18.9204 27.6542 19.0206L29.3242 20.6905C29.6582 21.0245 30.1925 21.0245 30.5265 20.6905C30.8605 20.3566 30.8605 19.8222 30.5265 19.4882ZM24.3477 22.0933C23.4794 22.9617 22.277 23.496 20.9745 23.496H5.7446C4.64244 23.496 3.64047 23.0619 2.9057 22.3271C2.17092 21.5923 1.73674 20.5903 1.73674 19.4882C1.73674 18.386 2.17092 17.3841 2.9057 16.6493C3.64047 15.9145 4.64244 15.4803 5.7446 15.4803C5.87819 15.4803 6.04519 15.4469 6.14538 15.3801C6.34578 15.2465 6.47937 15.0461 6.51277 14.8123C6.74656 13.2426 7.54813 11.8399 8.68369 10.8713C9.81925 9.90272 11.3222 9.30154 12.9253 9.30154C14.2947 9.30154 15.5639 9.73573 16.6326 10.4705C17.4342 11.0383 18.1356 11.7731 18.6031 12.6748C18.4695 12.7416 18.336 12.775 18.2024 12.8418C17.3674 13.2092 16.6326 13.777 15.998 14.445C15.6974 14.8123 15.7308 15.3467 16.0648 15.6473C16.4322 15.9479 16.9666 15.9145 17.2672 15.5805C17.7348 15.0795 18.2692 14.6788 18.8703 14.3782C19.4715 14.111 20.1395 13.944 20.8409 13.944C22.1768 13.944 23.3458 14.4784 24.2141 15.3467C25.0825 16.2151 25.6169 17.4175 25.6169 18.72C25.7171 20.056 25.1827 21.2249 24.3477 22.0933ZM26.1847 14.0776C26.1179 14.2446 26.0511 14.4116 25.9509 14.5452C25.8173 14.3782 25.6837 14.2446 25.5501 14.111C24.3811 12.942 22.7446 12.2072 20.9411 12.2072C20.7741 12.2072 20.5737 12.2072 20.4067 12.2406C20.0393 11.4391 19.5383 10.7043 18.9371 10.1031C19.2711 9.63553 19.7053 9.26814 20.1729 8.96756C20.8075 8.56677 21.5422 8.36638 22.3104 8.36638C23.446 8.36638 24.5147 8.83396 25.2495 9.56873C26.0177 10.3369 26.4519 11.3723 26.4519 12.5078C26.4853 13.0756 26.3851 13.61 26.1847 14.0776Z",fill:"#454545"}),Object(d.jsx)("path",{d:"M33.1317 11.6395H30.7603C30.2928 11.6395 29.892 12.0403 29.892 12.5079C29.892 12.9755 30.2928 13.3763 30.7603 13.3763H33.1317C33.5992 13.3763 34 12.9755 34 12.5079C33.9666 12.0403 33.5992 11.6395 33.1317 11.6395Z",fill:"#454545"})]}),m.current.temp_c,"\xba"]})]})]}),Object(d.jsxs)("div",{className:"body-container-2",children:[Object(d.jsx)("img",{src:c.src,alt:"logo",className:"background-image-2"}),Object(d.jsxs)("div",{className:"text-container",children:[Object(d.jsx)("h1",{className:"text-title",children:"Our mission is"}),Object(d.jsx)("p",{children:"Nossa miss\xe3o \xe9"}),Object(d.jsx)("h1",{children:"to transform the world"}),Object(d.jsx)("p",{children:"transformar o mundo"}),Object(d.jsx)("h1",{children:"building digital experiences"}),Object(d.jsx)("p",{children:"construindo experi\xeancias digitais"}),Object(d.jsx)("h1",{children:"that enable our client's growth"}),Object(d.jsx)("p",{children:"que permitam o crescimento dos nossos clientes"})]})]}),Object(d.jsx)("div",{className:"footer-container",children:Object(d.jsxs)("div",{className:"footer-content",children:[Object(d.jsxs)("div",{className:"footer-text",children:[Object(d.jsx)("span",{children:"Essa janela do navegador \xe9 usada para manter sua sess\xe3o de autentica\xe7\xe3o ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar."}),Object(d.jsx)("div",{className:"vertical-line"})]}),Object(d.jsxs)("div",{className:"footer-refresh-container",children:[Object(d.jsx)("span",{className:"refresh-text",children:"Application refresh in"}),Object(d.jsxs)("div",{className:"refresh-time",children:[Object(d.jsx)("span",{className:"seconds",children:l}),Object(d.jsx)("span",{children:"seconds"})]})]}),Object(d.jsx)("div",{className:"navigate",children:Object(d.jsx)("span",{onClick:function(){return j(600)},children:"Continuar Navegando"})}),Object(d.jsx)("div",{className:"logout",children:Object(d.jsx)("span",{className:"logout-button",onClick:w,children:"Logout"})})]})})]})},R=(Object(m.MapTo)("reactapp/components/home-page")(_),n(266)),Z=n(267),B=n(76),A=n(26),U=N((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,648))})),z=N((function(){return n.e(5).then(n.t.bind(null,646,7))})),J=N((function(){return n.e(6).then(n.t.bind(null,647,7))}));Object(m.MapTo)("reactapp/components/download")(A.DownloadV1,{isEmpty:A.DownloadV1IsEmptyFn}),Object(m.MapTo)("reactapp/components/list")(A.ListV2,{isEmpty:A.ListV2IsEmptyFn}),Object(m.MapTo)("reactapp/components/separator")(A.SeparatorV1,{isEmpty:A.SeparatorV1IsEmptyFn}),Object(m.MapTo)("reactapp/components/button")(A.ButtonV1,{isEmpty:A.ButtonV1IsEmptyFn}),Object(m.MapTo)("reactapp/components/teaser")(A.TeaserV1,{isEmpty:A.TeaserV1IsEmptyFn}),Object(m.MapTo)("reactapp/components/image")(A.ImageV2,{isEmpty:A.ImageV2IsEmptyFn}),Object(m.MapTo)("reactapp/components/title")(z,{isEmpty:Z.TitleV2IsEmptyFn}),Object(m.MapTo)("reactapp/components/breadcrumb")(A.BreadCrumbV2,{isEmpty:A.BreadCrumbV2IsEmptyFn}),Object(m.MapTo)("reactapp/components/navigation")(A.NavigationV1),Object(m.MapTo)("reactapp/components/languagenavigation")(A.LanguageNavigationV1),Object(m.MapTo)("reactapp/components/tabs")(B.TabsV1,{isEmpty:B.TabsV1IsEmptyFn}),Object(m.MapTo)("reactapp/components/accordion")(B.AccordionV1,{isEmpty:B.AccordionV1IsEmptyFn}),Object(m.MapTo)("reactapp/components/carousel")(J,{isEmpty:R.CarouselV1IsEmptyFn}),Object(m.MapTo)("reactapp/components/container")(B.ContainerV1,{isEmpty:B.ContainerV1IsEmptyFn}),Object(m.MapTo)("reactapp/")(k),Object(m.MapTo)("reactapp/")(I),Object(m.MapTo)("reactapp/")(D),Object(m.MapTo)("reactapp/")(q),Object(m.MapTo)("reactapp/")(_);Object(m.MapTo)("reactapp/components/text")(U,{emptyLabel:"Text",isEmpty:function(e){return!e||!e.text||e.text.trim().length<1}});n(569);var Y={};document.addEventListener("DOMContentLoaded",(function(){s.ModelManager.initialize(Y).then((function(e){var t=Object(r.a)();Object(i.render)(Object(d.jsx)(p.e,{history:t,children:Object(d.jsx)(h,{history:t,cqChildren:e[s.Constants.CHILDREN_PROP],cqItems:e[s.Constants.ITEMS_PROP],cqItemsOrder:e[s.Constants.ITEMS_ORDER_PROP],cqPath:e[s.Constants.PATH_PROP],locationPathname:window.location.pathname})}),document.getElementById("spa-root"))}))}))}},[[570,1,2]]]);
//# sourceMappingURL=main.1607b977.chunk.js.map