(this.webpackJsonpoxmtytest=this.webpackJsonpoxmtytest||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var a=c(2),r=c.n(a),n=c(8),s=c.n(n),i=(c(19),c(20),c(23),c(14)),o=c(9),l=c(10),j=c(13),d=c(12),b=(c(24),c(3)),h=c(0),x=function(){return Object(h.jsxs)("div",{className:"container-fluid px-0",children:[Object(h.jsxs)("div",{className:"title",children:[Object(h.jsx)("h1",{className:"display-4",children:"Ox\xedgeno en Monterrey"}),Object(h.jsxs)("div",{className:"subtitle",children:[Object(h.jsx)("p",{className:"lead",children:"Listado de proveedores de ox\xedgeno (tanques y/o concentradores) en Monterrey y \xe1rea metropolitana."}),Object(h.jsxs)("p",{className:"social",children:["Compartir en",Object(h.jsx)("a",{href:"https://www.facebook.com/sharer/sharer.php?u=PAGE_URL",target:"_blank",rel:"noreferrer",title:"Compartir en Facebook",children:Object(h.jsx)(b.a,{icon:["fab","facebook"],className:"social-icon"})}),Object(h.jsx)("a",{href:"https://api.whatsapp.com/send?text=https://",target:"_blank",rel:"noreferrer",children:Object(h.jsx)(b.a,{icon:["fab","whatsapp"]})}),Object(h.jsx)("a",{href:"https://twitter.com/intent/tweet?text=PAGE_TITLE&url=PAGE_URL",target:"_blank",rel:"noreferrer",title:"Compartir en Twitter",children:Object(h.jsx)(b.a,{icon:["fab","twitter"]})})]}),Object(h.jsx)("p",{className:"warning",children:Object(h.jsx)("a",{href:"https://www.forbes.com.mx/noticias-consejos-para-prevenir-fraudes-en-venta-o-renta-de-tanques-de-oxigeno/",target:"_blank",rel:"noreferrer",children:"Consejos para prevenir fraudes en la venta y renta de ox\xedgeno"})})]})]}),Object(h.jsx)("div",{className:"jumbotron jumbotron-fluid"})]})},p=(c(31),function(e){var t=e.empresa,c=e.tel,a=e.whatsapp,r=e.horario,n=e.dir,s=e.recarga,i=e.venta,o=e.renta,l=e.web;return Object(h.jsx)("div",{className:"col-sm-4",children:Object(h.jsx)("div",{className:"card mt-1 mb-4 mx-auto",children:Object(h.jsxs)("div",{className:"card-content",children:[Object(h.jsx)("h5",{className:"card-title",children:t}),Object(h.jsxs)("p",{className:"phone",children:[" ",Object(h.jsx)(b.a,{icon:"phone"})," ",c]}),Object(h.jsx)("p",{children:r&&Object(h.jsxs)("small",{className:"text-muted",children:["Horario: ",r]})}),Object(h.jsxs)("p",{children:[s&&Object(h.jsxs)("span",{"aria-label":"Recarga",children:["Recarga: ",s]}),i&&Object(h.jsxs)("span",{children:["Venta: ",i]}),o&&Object(h.jsxs)("span",{children:["Renta: ",o]})]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:a&&Object(h.jsx)("a",{href:a,alt:"Whatsapp",rel:"noreferrer",children:Object(h.jsx)(b.a,{icon:["fab","whatsapp"],className:"wa"})})}),Object(h.jsx)("span",{children:n&&Object(h.jsx)("a",{href:n,alt:"Direcci\xf3n",target:"_blank",rel:"noreferrer",children:Object(h.jsx)(b.a,{icon:"map-marker-alt",className:"map"})})}),Object(h.jsx)("span",{children:l&&Object(h.jsx)("a",{href:l,alt:"Web/Facebook",target:"_blank",rel:"noreferrer",children:"Web/Facebook"})})]})]})})})}),m=(c(32),function(){return Object(h.jsx)("footer",{children:Object(h.jsx)("div",{className:"container-fluid credits",children:Object(h.jsx)("div",{className:"row d-flex text-center justify-content-center mb-md-0 mb-4",children:Object(h.jsxs)("div",{className:"col-md-8 col-12 mt-5",children:[Object(h.jsx)("p",{}),Object(h.jsxs)("p",{children:["Inspirado por ",Object(h.jsx)("a",{href:"https://oxigeno.cc",target:"_blank",rel:"noreferrer",children:"Ox\xedgeno M\xe9xico"})]}),Object(h.jsx)("div",{className:"footer-copyright",children:"Ox\xedgeno MTY - Copyright \xa9 2021."})]})})})})}),O=c(4),f=c(11),u=c(7);O.b.add(f.a,u.a,u.b);var g=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(e){var a;return Object(o.a)(this,c),(a=t.call(this,e)).state={locations:[]},a}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.airtable.com/v0/appoWlSjRws1zu8pO/Locations?api_key=keyEKDet6ta3USuZe").then((function(e){return e.json()})).then((function(t){e.setState({locations:t.records})})).catch((function(e){}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"container-fluid px-0",children:[Object(h.jsx)(x,{}),Object(h.jsxs)("div",{className:"container mt-5",children:[Object(h.jsx)("div",{className:"row align-items-center",children:Object(h.jsx)("div",{className:"card-deck mx-auto",children:this.state.locations.map((function(e){return Object(h.jsx)(p,Object(i.a)({},e.fields))}))})}),Object(h.jsxs)("p",{className:"text-center",children:["M\xe1s informaci\xf3n en ",Object(h.jsx)("a",{href:"https://oxigeno.sanpedro.gob.mx/",target:"_blank",rel:"noreferrer",children:"Ox\xedgeno SPGG"})]})]}),Object(h.jsx)(m,{})]})}}]),c}(a.Component),v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(t){var c=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),a(e),r(e),n(e),s(e)}))};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),v()}},[[33,1,2]]]);
//# sourceMappingURL=main.17dcc12f.chunk.js.map