(this.webpackJsonppart2c=this.webpackJsonppart2c||[]).push([[0],{448:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),o=n(128),u=n.n(o),s=n(14),a=n(40),i=n.n(a),l="/api/persons",j=function(){return i.a.get(l).then((function(e){return e.data}))},b=function(e){return i.a.post(l,e).then((function(e){return e.data}))},d=function(e){return i.a.delete("".concat(l,"/").concat(e)).then((function(e){return e.data}))},f=function(e,t){return i.a.put("".concat(l,"/").concat(e),t).then((function(e){return e.data}))},h=(n(152),n(1)),O=function(e){var t=e.persons,n=e.setSearchPersons,c=Object(r.useState)(""),o=Object(s.a)(c,2),u=o[0],a=o[1],i=Object(r.useState)(t.length),l=Object(s.a)(i,2),j=l[0],b=l[1];console.log(j);return Object(r.useEffect)((function(){var e=t.filter((function(e){var t=e.name.toLowerCase(),n=u.toLowerCase();return t.includes(n)}));j!==t.length&&(console.log(j),b(t.length),e=t.filter((function(e){var t=e.name.toLowerCase(),n=u.toLowerCase();return t.includes(n)}))),e.length>0?n(e):n([])}),[u,t]),Object(h.jsx)("input",{value:u,onChange:function(e){var t=e.target;a(t.value)}})},m=n(130),v=n(77),p=function(e){var t=e.persons,n=e.setPersons,c=e.setMessage,o=e.setSuccess,u=Object(r.useState)(""),a=Object(s.a)(u,2),i=a[0],l=a[1],j=Object(r.useState)(""),d=Object(s.a)(j,2),O=d[0],p=d[1],x=function(e){return t.find((function(t){return t.name===e}))};return Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r={name:i,number:O},u=x(i);if(u)return window.confirm("".concat(i," is already added to phonebook, replace the old number with a new one ?"))&&f(u.id,Object(v.a)(Object(v.a)({},u),{},{number:O})).then((function(e){n(t.map((function(t){return t.id!==u.id?t:e}))),o(!0),c("Edited ".concat(i)),setTimeout((function(){return c(null)}),5e3)})).catch((function(e){o(!1),c("Information of ".concat(i," has already been removed from server")),setTimeout((function(){return c(null)}),5e3)})),l(""),void p("");b(r).then((function(e){n([].concat(Object(m.a)(t),[e])),o(!0),c("Added ".concat(i)),setTimeout((function(){return c(null)}),5e3)})).catch((function(e){console.log(e),o(!1),c("Name or number cant be empty"),setTimeout((function(){return c(null)}),5e3)})),l(""),p("")},children:[Object(h.jsxs)("div",{children:["name: ",Object(h.jsx)("input",{value:i,onChange:function(e){var t=e.target;return l(t.value)}})]}),Object(h.jsxs)("div",{children:["number: ",Object(h.jsx)("input",{value:O,onChange:function(e){var t=e.target;return p(t.value)}})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"add"})})]})},x=function(e){var t=e.handleClick;return Object(h.jsx)("button",{onClick:t,children:"Delete"})},g=function(e){var t=e.id,n=e.name,r=e.number,c=e.setPersons;return Object(h.jsxs)("li",{children:[n," ",r,Object(h.jsx)(x,{handleClick:function(e,t){return function(){if(window.confirm("Delete ".concat(t," ?")))return d(e).then((function(){c((function(t){return t.filter((function(t){return t.id!==e}))}))}))}}(t,n)})]})},S=function(e){var t=e.persons,n=e.setPersons;return Object(h.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.name,c=e.number;return Object(h.jsx)(g,{id:t,name:r,number:c,setPersons:n},t)}))})},w=function(e){var t=e.message,n=e.isSuccess;if(!t)return null;var r={color:n?"green":"red",padding:"1rem",border:"1px solid green"};return Object(h.jsx)("div",{style:r,children:t})},C=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)([]),u=Object(s.a)(o,2),a=u[0],i=u[1],l=Object(r.useState)(null),b=Object(s.a)(l,2),d=b[0],f=b[1],m=Object(r.useState)(!0),v=Object(s.a)(m,2),x=v[0],g=v[1];return Object(r.useEffect)((function(){console.log("Fetch data"),j().then((function(e){c(e),i(e)}))}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(w,{message:d,isSuccess:x}),Object(h.jsx)(O,{persons:n,setSearchPersons:i}),Object(h.jsx)("h3",{children:"Add a new"}),Object(h.jsx)(p,{persons:n,setPersons:c,setMessage:f,setSuccess:g}),Object(h.jsx)("h2",{children:"Numbers"}),a.length>0?Object(h.jsx)(S,{persons:a,setPersons:c}):null]})};u.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root"))}},[[448,1,2]]]);
//# sourceMappingURL=main.4a276085.chunk.js.map