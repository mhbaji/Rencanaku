(this.webpackJsonprencanaku=this.webpackJsonprencanaku||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),l=n(7),r=n.n(l),s=(n(12),n(3)),i=n(2),o=(n(13),n(0)),d=[],u=[],j=["January","February","March","April","May","June","July","Agustus","September","October","November","December"],b=function(){return Object(o.jsx)("div",{className:"header-utama",children:Object(o.jsx)("h1",{children:"PlanApps"})})},O=function(e){var t=e.plans,n=e.setPlans,c=Object(a.useState)(""),l=Object(i.a)(c,2),r=l[0],d=l[1],u=Object(a.useState)(""),b=Object(i.a)(u,2),O=b[0],h=b[1],x=t.reduce((function(e,t){return e>t.id?e:t.id}),0),p=new Date,f="".concat(j[p.getMonth()]," ").concat(p.getDate(),", ").concat(p.getFullYear());return Object(o.jsxs)("div",{className:"adder",children:[Object(o.jsx)("textarea",{className:"txt-waktu",value:r,type:"text",placeholder:"Write your plan",onChange:function(e){return d(e.target.value)}}),Object(o.jsxs)("div",{className:"waktu",children:[Object(o.jsx)("label",{for:"waktu",className:"label-waktu",children:"On : "}),Object(o.jsx)("input",{className:"inp-waktu",id:"waktu",type:"date",min:"2020-1-31",max:"2030-1-31",value:O,onChange:function(e){return h(e.target.value)},pattern:"\\d{4} \\d{2} \\d{Month}"})]}),Object(o.jsx)("button",{className:"btn-waktu",disabled:""===r||""===O,onClick:function(){return function(){var e=new Date(O),a="".concat(j[e.getMonth()]," ").concat(e.getDate(),", ").concat(e.getFullYear()),c={id:x+1,plan:r,createdAt:f,willOn:a};n([].concat(Object(s.a)(t),[c])),d(""),h("")}()},children:"Add"})]})},h=function(e){var t=e.plans;return t.length>1?Object(o.jsx)("div",{className:"header-plan",children:Object(o.jsxs)("h3",{children:[" Have ",t.length," Plans"]})}):1===t.length?Object(o.jsx)("div",{className:"header-plan",children:Object(o.jsxs)("h3",{children:[" Have ",t.length," Plan"]})}):Object(o.jsx)("div",{className:"header-plan",children:Object(o.jsx)("h3",{children:"No Plan"})})},x=function(e){var t=e.createdAt,n=e.willOn,c=e.plan,l=e.id,r=e.plans,d=e.setPlans,u=e.alreadyDo,b=e.setAlreadyDo,O=r.filter((function(e){return e.id===l})),h=Object(a.useState)(""),x=Object(i.a)(h,2),p=x[0],f=x[1],m=Object(a.useState)(""),g=Object(i.a)(m,2),y=g[0],v=g[1],D=u.reduce((function(e,t){return e>t.id?e:t.id}),0),N=new Date,A="".concat(j[N.getMonth()]," ").concat(N.getDate(),", ").concat(N.getFullYear()),k=r.findIndex((function(e){return e.id===l})),w=r.filter((function(e){return e.id!==l})),C=function(){d(w)};return Object(o.jsxs)("div",{className:"list-plan",children:[Object(o.jsxs)("p",{children:[c," ",Object(o.jsxs)("b",{children:["on ",n]})]}),Object(o.jsxs)("p",{className:"created-at",children:["Created At: ",t]}),Object(o.jsxs)("div",{className:"edit",children:[Object(o.jsx)("textarea",{value:p,className:"txt-edit",type:"text",onChange:function(e){return f(e.target.value)}}),Object(o.jsx)("label",{for:"edit-waktu",children:"On : "}),Object(o.jsx)("input",{className:"edit-waktu",id:"edit-waktu",type:"date",min:"2020-1-31",max:"2030-1-31",value:y,onChange:function(e){return v(e.target.value)},pattern:"\\d{4} \\d{2} \\d{Month}"}),Object(o.jsx)("button",{disabled:""===p||""===y,className:"btn-all",onClick:function(){return function(){document.getElementsByClassName("edit")[k].style.display="none";var e=new Date(y),t="".concat(j[e.getMonth()]," ").concat(e.getDate(),", ").concat(e.getFullYear()),n={id:l,plan:p,createdAt:A,willOn:t};d([].concat(Object(s.a)(w),[n])),f(""),v("")}()},children:"Ok"})]}),Object(o.jsx)("button",{className:"btn-all",onClick:function(){return document.getElementsByClassName("edit")[k].style.display="block",console.log("idx",k),void console.log("id",l)},children:"Edit"}),Object(o.jsx)("button",{className:"btn-all",onClick:function(){return function(){console.log("done");var e={id:D+1,alreadyDo:O[0].plan,doneAt:A};b([].concat(Object(s.a)(u),[e])),C()}()},children:"Done"}),Object(o.jsx)("button",{className:"btn-all",onClick:function(){return C()},children:"Delete"})]})},p=function(e){var t=e.plans,n=e.setPlans,a=e.alreadyDo,c=e.setAlreadyDo;return t.map((function(e){return Object(o.jsx)(x,{createdAt:e.createdAt,willOn:e.willOn,plan:e.plan,id:e.id,plans:t,setPlans:n,alreadyDo:a,setAlreadyDo:c})}))},f=function(){return Object(o.jsx)("div",{className:"header-do",children:Object(o.jsx)("h3",{children:"Already Do"})})},m=function(e){var t=e.doneAt,n=e.alreadyDos,a=e.id,c=e.alreadyDo,l=e.setAlreadyDo;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:[" ",n," ",Object(o.jsxs)("b",{children:["Done At ",t]})]}),Object(o.jsx)("button",{className:"btn-all",onClick:function(){return function(){var e=c.filter((function(e){return e.id!==a}));l(e)}()},children:"Delete"})]})},g=function(e){var t=e.alreadyDo,n=e.setAlreadyDo;return t.map((function(e){return Object(o.jsx)(m,{doneAt:e.doneAt,alreadyDos:e.alreadyDo,id:e.id,alreadyDo:t,setAlreadyDo:n})}))},y=function(){var e,t,n=Object(a.useState)(d),c=Object(i.a)(n,2),l=c[0],r=c[1],j=Object(a.useState)(u),x=Object(i.a)(j,2),m=x[0],y=x[1];return console.log("plans"),(e=console).log.apply(e,Object(s.a)(l)),console.log("alreadyDo"),(t=console).log.apply(t,Object(s.a)(m)),Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)(b,{}),Object(o.jsx)(O,{plans:l,setPlans:r}),Object(o.jsxs)("div",{className:"plan",children:[Object(o.jsx)(h,{plans:l}),Object(o.jsx)(p,{plans:l,setPlans:r,alreadyDo:m,setAlreadyDo:y})]}),Object(o.jsxs)("div",{className:"do",children:[Object(o.jsx)(f,{}),Object(o.jsx)(g,{alreadyDo:m,setAlreadyDo:y})]})]})},v=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(y,{})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),l(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),D()}},[[15,1,2]]]);
//# sourceMappingURL=main.34f20277.chunk.js.map