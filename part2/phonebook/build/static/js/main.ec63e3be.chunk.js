(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),u=t.n(o),c=t(2),l=function(e){var n=e.handleSearch,t=e.newSearchWord;return r.a.createElement("div",null,"filter shown with",r.a.createElement("input",{onChange:n,value:t}))},i=function(e){var n=e.addPerson,t=e.handleOnPersonNameChange,a=e.handleOnPersonNumberChange,o=e.newName,u=e.newNumber;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name:",r.a.createElement("input",{onChange:t,value:o})),r.a.createElement("div",null,"number:",r.a.createElement("input",{onChange:a,value:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},s=function(e){var n=e.person,t=e.deletePerson;return console.log("delete person method",t),r.a.createElement("p",{key:n.name},n.name," ",n.number," ",r.a.createElement("button",{onClick:t},"delete"))},m=t(3),f=t.n(m),d="/api/persons",h=function(){return f.a.get(d).then((function(e){return e.data}))},b=function(e){return f.a.post(d,e).then((function(e){return e.data}))},v=function(e){return f.a.delete("".concat(d,"/").concat(e)).then((function(n){return console.log(n),e}))},E=function(e){var n=e.message,t=e.error;return null!==n?r.a.createElement("div",{className:"message"},n):null!==t?r.a.createElement("div",{className:"error"},t):null},p=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),m=Object(c.a)(u,2),f=m[0],d=m[1],p=Object(a.useState)(""),g=Object(c.a)(p,2),O=g[0],w=g[1],j=Object(a.useState)(""),C=Object(c.a)(j,2),S=C[0],N=C[1],P=Object(a.useState)([]),k=Object(c.a)(P,2),y=k[0],L=k[1],x=Object(a.useState)(null),T=Object(c.a)(x,2),I=T[0],J=T[1],W=Object(a.useState)(null),B=Object(c.a)(W,2),D=B[0],q=B[1];Object(a.useEffect)((function(){h().then((function(e){o(e),L(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(E,{message:I,error:D}),r.a.createElement(l,{handleSearch:function(e){if(N(e.target.value),e.target.value){var n=t.filter((function(n){return n.name.toLowerCase().indexOf(e.target.value.toLowerCase())>-1}));L(n)}else L(t)},newSearchWord:S}),r.a.createElement("h2",null,"add a new"),r.a.createElement(i,{addPerson:function(e){e.preventDefault(),b({name:f,number:O}).then((function(e){o(t.concat(e)),f.toLowerCase().indexOf(S.toLowerCase())>-1&&L(y.concat(e)),J("add ".concat(f)),setTimeout((function(){J(null)}),5e3),d(""),w("")})).catch((function(e){console.log("error:",e.response),q(e.response.data.error),setTimeout((function(){q(null)}),5e3),d(""),w("")}))},handleOnPersonNameChange:function(e){d(e.target.value)},handleOnPersonNumberChange:function(e){w(e.target.value)},newName:f,newNumber:O}),r.a.createElement("h2",null,"Numbers"),r.a.createElement("div",null,y.map((function(e){return r.a.createElement(s,{key:e.id,person:e,deletePerson:function(){return function(e){var n=t.find((function(n){return n.id===e}));window.confirm("delete ".concat(n.name," ?"))&&v(e).then((function(n){o(t.filter((function(n){return n.id!==e}))),L(y.filter((function(n){return n.id!==e})))})).catch((function(n){var a=t.find((function(n){return n.id===e}));o(t.filter((function(n){return n.id!==e}))),L(y.filter((function(n){return n.id!==e}))),console.log("error:",n.response),q("Information of ".concat(a.name," has already been removed from server")),setTimeout((function(){q(null)}),5e3)}))}(e.id)}})}))))};t(36);u.a.render(r.a.createElement(p,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ec63e3be.chunk.js.map