(this.webpackJsonppart2c=this.webpackJsonppart2c||[]).push([[0],{42:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),u=t(16),s=t.n(u),o=t(3),a=t(5),i=t.n(a),j="/api/persons",d=function(){return i.a.get(j).then((function(e){return e.data}))},l=function(e){return i.a.post(j,e).then((function(e){return e.data}))},b=function(e){return i.a.delete("".concat(j,"/").concat(e)).then((function(e){return e.data}))},f=function(e,n){return i.a.put("".concat(j,"/").concat(e),n).then((function(e){return e.data}))},h=t(0),O=function(e){var n=e.persons,t=e.setSearchPersons,c=Object(r.useState)(""),u=Object(o.a)(c,2),s=u[0],a=u[1];return Object(r.useEffect)((function(){var e=n.filter((function(e){var t=e.name;console.log(n);var r=t?t.toLowerCase():"baoa",c=s.toLowerCase();return r.includes(c)}));e.length>0?t(e):t([])}),[s,n]),Object(h.jsx)("input",{value:s,onChange:function(e){var n=e.target;a(n.value)}})},m=t(17),v=t(18),p=function(e){var n=e.persons,t=e.setPersons,c=e.setMessage,u=e.setSuccess,s=(e.setSearch,Object(r.useState)("")),a=Object(o.a)(s,2),i=a[0],j=a[1],d=Object(r.useState)(""),b=Object(o.a)(d,2),O=b[0],p=b[1],x=function(e){return n.find((function(n){return n.name===e}))};return Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r={name:i,number:O},s=x(i);if(s)return window.confirm("".concat(i," is already added to phonebook, replace the old number with a new one ?"))&&f(s.id,Object(v.a)({},r)).then((function(e){t(n.map((function(n){return n.id!==s.id?n:e}))),u(!0),c("Edited ".concat(i)),setTimeout((function(){return c(null)}),5e3)})).catch((function(e){u(!1),c("Information of ".concat(i," has already been removed from server")),setTimeout((function(){return c(null)}),5e3)})),j(""),void p("");l(r).then((function(e){t([].concat(Object(m.a)(n),[e])),u(!0),c("Added ".concat(i)),setTimeout((function(){return c(null)}),5e3)})).catch((function(e){console.log(e),u(!1),c("Name or number cant be empty"),setTimeout((function(){return c(null)}),5e3)})),j(""),p("")},children:[Object(h.jsxs)("div",{children:["name: ",Object(h.jsx)("input",{value:i,onChange:function(e){var n=e.target;return j(n.value)}})]}),Object(h.jsxs)("div",{children:["number: ",Object(h.jsx)("input",{value:O,onChange:function(e){var n=e.target;return p(n.value)}})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"add"})})]})},x=function(e){var n=e.handleClick;return Object(h.jsx)("button",{onClick:n,children:"Delete"})},g=function(e){var n=e.id,t=e.name,r=e.number,c=e.setPersons;return Object(h.jsxs)("li",{children:[t," ",r,Object(h.jsx)(x,{handleClick:function(e,n){return function(){if(window.confirm("Delete ".concat(n," ?")))return b(e).then((function(){c((function(n){return n.filter((function(n){return n.id!==e}))}))}))}}(n,t)})]})},S=function(e){var n=e.persons,t=e.setPersons;return Object(h.jsx)("ul",{children:n.map((function(e){var n=e.id,r=e.name,c=e.number;return Object(h.jsx)(g,{id:n,name:r,number:c,setPersons:t},n)}))})},w=function(e){var n=e.message,t=e.isSuccess;if(!n)return null;var r={color:t?"green":"red",padding:"1rem",border:"1px solid green"};return Object(h.jsx)("div",{style:r,children:n})},P=function(){var e=Object(r.useState)([]),n=Object(o.a)(e,2),t=n[0],c=n[1],u=Object(r.useState)([]),s=Object(o.a)(u,2),a=s[0],i=s[1],j=Object(r.useState)(null),l=Object(o.a)(j,2),b=l[0],f=l[1],m=Object(r.useState)(!0),v=Object(o.a)(m,2),x=v[0],g=v[1];return Object(r.useEffect)((function(){console.log("Fetch data"),d().then((function(e){c(e),i(e)}))}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(w,{message:b,isSuccess:x}),Object(h.jsx)(O,{persons:t,setSearchPersons:i}),Object(h.jsx)("h3",{children:"Add a new"}),Object(h.jsx)(p,{persons:t,setPersons:c,setMessage:f,setSuccess:g}),Object(h.jsx)("h2",{children:"Numbers"}),a.length>0?Object(h.jsx)(S,{persons:a,setPersons:c}):null]})};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.ada1a47d.chunk.js.map