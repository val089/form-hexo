(this["webpackJsonpform-hexo"]=this["webpackJsonpform-hexo"]||[]).push([[0],{198:function(e,n,t){"use strict";t.r(n);var r,c,i,o,a,s,b,d,l,u,p,m=t(0),j=t.n(m),h=t(38),f=t.n(h),x=t(6),O=t(81),g=t(201),y=t(18),v=t(56),w=t.n(v),_=t(82),S=t(59),z=t(7),k=t(8),E=Object(z.b)(r||(r=Object(k.a)(["\n    html {\n        box-sizing: border-box;\n        overflow-x: hidden;\n    }\n    *,*::after, *::before {\n        box-sizing: inherit;\n    }\n\n    body {\n        font-family: 'Montserrat', sans-serif;\n        padding: 0;\n        margin: 0;\n    }\n\n    a, button {\n        font-family: 'Montserrat', sans-serif;\n    }\n"]))),N={images:{heroBg:t.p+"static/media/bg.6957d644.jpg"},colors:{lightGrey:"#ebe8e8",white:"#fff",red:"red",whiteGlass:"rgba(255, 255, 255, 0.1)",success:"#00bd00"},fontSize:{l:"15px",m:"13px"}},D=function(e){if(!e||""===e)return"Required"},I=function(e){return e&&e.length<4?"Must be 4 characters or more":void 0},R=function(e){var n={};for(var t in e){var r=parseFloat(e[t]);n[t]=isNaN(e[t])?e[t]:r}return n},T=z.c.section(c||(c=Object(k.a)(["\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  place-items: center;\n  background: url(",") center no-repeat;\n  background-size: cover;\n"])),(function(e){return e.theme.images.heroBg})),q=t(200),G=t(199),M=t(202),B=z.c.form(i||(i=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n  padding: 20px;\n  border-radius: 10px;\n  background: ",";\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(12px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n\n  @media (max-width: 450px) {\n    width: 280px;\n  }\n"])),(function(e){return e.theme.colors.whiteGlass})),J=z.c.p(o||(o=Object(k.a)(["\n  text-align: center;\n  background: ",";\n"])),(function(e){return e.theme.colors.success})),P=z.c.p(a||(a=Object(k.a)(["\n  text-align: center;\n  background: ",";\n"])),(function(e){return e.theme.colors.red})),V=t(14),C=z.c.div(s||(s=Object(k.a)(["\n  margin-bottom: 15px;\n"]))),F=z.c.label(b||(b=Object(k.a)(["\n  display: block;\n  color: ",";\n  font-size: ",";\n"])),(function(e){return e.theme.colors.white}),(function(e){return e.theme.fontSize.m})),H=z.c.input(d||(d=Object(k.a)(["\n  background: rgba(255, 255, 255, 0.2);\n  display: block;\n  width: 100%;\n  padding: 5px;\n  border-radius: 2px;\n  border: none;\n  outline: none;\n  margin-top: 2px;\n  font-size: ",";\n"])),(function(e){return e.theme.fontSize.m})),X=z.c.span(l||(l=Object(k.a)(["\n  font-weight: 700;\n  color: ",";\n"])),(function(e){return e.theme.colors.red})),L=t(3),U=function(e){var n=e.input,t=e.label,r=e.type,c=e.step,i=e.min,o=e.max,a=e.meta,s=a.touched,b=a.error;return Object(L.jsx)(C,{children:Object(L.jsxs)(F,{children:[t,Object(L.jsx)(H,Object(V.a)(Object(V.a)({},n),{},{type:r,step:c,min:i,max:o})),s&&b&&Object(L.jsx)(X,{children:b})]})})},A=z.c.select(u||(u=Object(k.a)(["\n  background: rgba(255, 255, 255, 0.2);\n  width: 100%;\n  padding: 5px;\n  border-radius: 2px;\n  border: none;\n  outline: none;\n  margin-top: 2px;\n"]))),K=function(e){var n=e.input,t=e.label,r=e.children,c=e.meta,i=c.touched,o=c.error;return Object(L.jsxs)(C,{children:[Object(L.jsx)(F,{children:t}),Object(L.jsx)(A,Object(V.a)(Object(V.a)({},n),{},{children:r})),i&&o&&Object(L.jsx)(X,{children:o})]})},Q=z.c.button(p||(p=Object(k.a)(["\n  padding: 10px 20px;\n  cursor: pointer;\n  border-radius: 5px;\n  border: none;\n  background: ",";\n  font-size: ",";\n  transition: 0.2s;\n\n  &:hover {\n    background: ",";\n  }\n"])),(function(e){var n=e.disabled,t=e.theme;return n?t.colors.whiteGlass:t.colors.white}),(function(e){return e.theme.fontSize.l}),(function(e){return e.theme.colors.lightGrey})),W=function(e){var n=e.props,t=e.type,r=e.disabled,c=e.label;return Object(L.jsx)(Q,Object(V.a)(Object(V.a)({},n),{},{type:t,disabled:r,children:c}))},Y=function(e){var n=e.handleSubmit,t=e.valid,r=e.dishTypeValue,c=e.successInfo,i=e.errorInfo;return Object(L.jsxs)(B,{onSubmit:n,className:"container",children:[c&&Object(L.jsx)(J,{children:"Success"}),i&&Object(L.jsx)(P,{children:"Error"}),Object(L.jsx)(q.a,{name:"name",component:U,type:"text",label:"Dish name",validate:[D,I]}),Object(L.jsx)(q.a,{name:"preparation_time",component:U,type:"time",label:"Preparation time",step:"1",validate:D}),Object(L.jsxs)(q.a,{name:"type",component:K,label:"Dish type",validate:D,children:[Object(L.jsx)("option",{value:""}),Object(L.jsx)("option",{value:"pizza",children:"pizza"}),Object(L.jsx)("option",{value:"soup",children:"soup"}),Object(L.jsx)("option",{value:"sandwich",children:"sandwich"})]}),"pizza"===r&&Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(q.a,{name:"no_of_slices",component:U,type:"number",label:"Number of slices"}),Object(L.jsx)(q.a,{name:"diameter",component:U,type:"number",step:"0.5",min:"32",max:"50",label:"Diameter"})]}),"soup"===r&&Object(L.jsx)(q.a,{name:"spiciness_scale",component:U,type:"number",min:"1",max:"10",label:"Spiciness scale from 1 to 10"}),"sandwich"===r&&Object(L.jsx)(q.a,{name:"slices_of_bread",component:U,type:"number",label:"Slices of bread"}),Object(L.jsx)(W,{type:"submit",disabled:!t,label:"Submit"})]})};Y=Object(G.a)({form:"formHexo",validate:function(e){var n={};return"pizza"===e.type&&(e.no_of_slices||(n.no_of_slices="Required"),e.diameter?(e.diameter<32||e.diameter>50)&&(n.diameter="Diameter must be between 32 to 50"):n.diameter="Required"),"soup"===e.type&&(e.spiciness_scale?(e.spiciness_scale<1||e.spiciness_scale>10)&&(n.spiciness_scale="Spiciness must be between 1 to 10"):n.spiciness_scale="Required"),"sandwich"===e.type&&(e.slices_of_bread||(n.slices_of_bread="Required")),n}})(Y);var Z=Object(M.a)("formHexo"),$=Y=Object(y.b)((function(e){return{dishTypeValue:Z(e,"type")}}))(Y),ee=function(){var e=Object(m.useState)(!1),n=Object(S.a)(e,2),t=n[0],r=n[1],c=Object(m.useState)(!1),i=Object(S.a)(c,2),o=i[0],a=i[1],s=function(){var e=Object(_.a)(w.a.mark((function e(n){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=R(n),e.next=3,fetch("https://cors-anywhere.herokuapp.com/https://frosty-wood-6558.getsandbox.com:443/dishes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return console.log(e)})).catch((function(e){return a(!0)}));case 3:r(!0);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(L.jsx)(z.a,{theme:N,children:Object(L.jsxs)(T,{children:[Object(L.jsx)(E,{}),Object(L.jsx)($,{onSubmit:s,successInfo:t,errorInfo:o})]})})},ne={form:g.a},te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||x.d,re=[O.a],ce=Object(x.c)(ne),ie=Object(x.e)(ce,te(x.a.apply(void 0,re)));f.a.render(Object(L.jsx)(j.a.StrictMode,{children:Object(L.jsx)(y.a,{store:ie,children:Object(L.jsx)(ee,{})})}),document.getElementById("root"))}},[[198,1,2]]]);
//# sourceMappingURL=main.d57aa8e7.chunk.js.map