(this.webpackJsonppart2c=this.webpackJsonppart2c||[]).push([[0],{42:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),u=n(17),s=n.n(u),o=n(3),a=n(5),i=n.n(a),j="/api/persons",b=function(){return i.a.get(j).then((function(e){return e.data}))},d=function(e){return i.a.post(j,e).then((function(e){return e.data}))},l=function(e){return i.a.delete("".concat(j,"/").concat(e)).then((function(e){return e.data}))},f=function(e,t){return i.a.put("".concat(j,"/").concat(e),t).then((function(e){return e.data}))},h=n(0),O=function(e){var t=e.persons,n=e.setSearchPerson,c=Object(r.useState)(""),u=Object(o.a)(c,2),s=u[0],a=u[1];return Object(r.useEffect)((function(){var e=t.filter((function(e){var t=e.name.toLowerCase(),n=s.toLowerCase();return t.includes(n)}));e.length>0?n(e):n(s?null:[])}),[s]),Object(h.jsx)("input",{value:s,onChange:function(e){var t=e.target;a(t.value)}})},m=n(18),p=n(8),v=function(e){var t=e.persons,n=e.setPersons,c=e.setMessage,u=e.setSuccess,s=Object(r.useState)(""),a=Object(o.a)(s,2),i=a[0],j=a[1],b=Object(r.useState)(""),l=Object(o.a)(b,2),O=l[0],v=l[1],x=function(e){return t.find((function(t){return t.name===e}))};return Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r={name:i,number:O},s=x(i);if(s)return window.confirm("".concat(i," is already added to phonebook, replace the old number with a new one ?"))&&f(s.id,Object(p.a)(Object(p.a)({},s),{},{number:O})).then((function(e){n(t.map((function(t){return t.id!==s.id?t:e}))),u(!0),c("Edited ".concat(i)),setTimeout((function(){return c(null)}),5e3)})).catch((function(e){u(!1),c("Information of ".concat(i," has already been removed from server")),setTimeout((function(){return c(null)}),5e3)})),j(""),void v("");d(r).then((function(e){n([].concat(Object(m.a)(t),[e])),u(!0),c("Added ".concat(i)),setTimeout((function(){return c(null)}),5e3)})).catch((function(e){u(!1),c("Name or number cant be empty"),setTimeout((function(){return c(null)}),5e3)})),j(""),v("")},children:[Object(h.jsxs)("div",{children:["name: ",Object(h.jsx)("input",{value:i,onChange:function(e){var t=e.target;return j(t.value)}})]}),Object(h.jsxs)("div",{children:["number: ",Object(h.jsx)("input",{value:O,onChange:function(e){var t=e.target;return v(t.value)}})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"add"})})]})},x=function(e){var t=e.handleClick;return Object(h.jsx)("button",{onClick:t,children:"Delete"})},g=function(e){var t=e.id,n=e.name,r=e.number,c=e.setPersons;return Object(h.jsxs)("li",{children:[n," ",r,Object(h.jsx)(x,{handleClick:function(e,t){return function(){if(window.confirm("Delete ".concat(t," ?")))return l(e).then((function(){c((function(t){return t.filter((function(t){return t.id!==e}))}))}))}}(t,n)})]})},S=function(e){var t=e.persons,n=e.setPersons;return Object(h.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.name,c=e.number;return Object(h.jsx)(g,{id:t,name:r,number:c,setPersons:n},t)}))})},w=function(e){var t=e.message,n=e.isSuccess;if(!t)return null;var r={color:n?"green":"red",padding:"1rem",border:"1px solid green"};return Object(h.jsx)("div",{style:r,children:t})},P=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],u=Object(r.useState)([]),s=Object(o.a)(u,2),a=s[0],i=s[1],j=Object(r.useState)(null),d=Object(o.a)(j,2),l=d[0],f=d[1],m=Object(r.useState)(!0),p=Object(o.a)(m,2),x=p[0],g=p[1];return Object(r.useEffect)((function(){console.log("Fetch data"),b().then((function(e){return c(e)}))}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(w,{message:l,isSuccess:x}),Object(h.jsx)(O,{persons:n,setSearchPerson:i}),Object(h.jsx)("h3",{children:"Add a new"}),Object(h.jsx)(v,{persons:n,setPersons:c,setMessage:f,setSuccess:g}),Object(h.jsx)("h2",{children:"Numbers"}),a.length>0?Object(h.jsx)(S,{persons:a,setPersons:c}):a?Object(h.jsx)(S,{persons:n,setPersons:c}):Object(h.jsx)("p",{})]})};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.4fa18821.chunk.js.map