(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},20:function(e,t,a){e.exports=a.p+"static/media/waterdogs.e781556b.jpg"},21:function(e,t,a){e.exports=a.p+"static/media/waterdogs2.722038ff.jpg"},27:function(e,t,a){e.exports=a.p+"static/media/cat.75f87f11.jpg"},28:function(e,t,a){e.exports=a.p+"static/media/badcat.56b44db5.jpg"},31:function(e,t,a){e.exports=a(42)},36:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),l=a.n(r);a(36),a(17);var i=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"header"},"What is React Router?"),c.a.createElement("h2",null,"React Router v4+ Dynamic Routing rendering components instead of entire page"),c.a.createElement("ul",{className:"section1"},c.a.createElement("h3",null,"Configuration:")),c.a.createElement("ul",{className:"section2"},c.a.createElement("li",null,"create-react-app"),c.a.createElement("li",null,"npx install react-router-dom"),c.a.createElement("li",null,"npm start"),c.a.createElement("li",null,"wrap elements in 'Router'"),c.a.createElement("li",null,'Route path = "/pageName"'),c.a.createElement("li",null,"Link wraps around nav-links to enable their dynamic-functionality as different routes")),c.a.createElement("h1",null,"Examples:"),c.a.createElement("ul",{className:"App mr-3"},c.a.createElement("li",null,c.a.createElement("a",{href:"https://medium.com/@khwsc1/step-by-step-guide-of-simple-routing-transition-effect-for-react-with-react-router-v4-and-9152db1566a0"},"React Router with page Transitions")),c.a.createElement("li",null,c.a.createElement("a",{href:"https://reacttraining.com/react-router/web/example/auth-workflow"},"authentication/workflow"))))},o=a(5),s=a(6),m=a(7),u=a.n(m),p=a(10),h=a(11),E=a(20),d=a.n(E),f=a(21),g=a.n(f);var w=function(){Object(n.useEffect)(function(){l()},[]);var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],r=t[1],l=function(){var e=Object(p.a)(u.a.mark(function e(){var t,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),r(a.items);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"Dogs"},c.a.createElement("h1",null,"Dogs Underwater!"),c.a.createElement("img",{src:d.a,height:"600",width:"760",alt:"dogs underwater pic"}),c.a.createElement("hr",null),c.a.createElement("img",{src:g.a,height:"584",width:"800",alt:"more dogs underwater pic"}),a.map(function(e){return c.a.createElement("h1",{key:e.itemid},c.a.createElement(o.b,{to:"/dogs/".concat(e.itemid)},e.name))}))},b=a(24),v=a(25),x=a(29),j=a(26),N=a(30),O=a(27),k=a.n(O),y=a(28),R=a.n(y),D=function(e){function t(){return Object(b.a)(this,t),Object(x.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Cats"},c.a.createElement("h1",null,".....cats"),c.a.createElement("img",{src:k.a,height:"500",width:"700",alt:"cat pic"}),c.a.createElement("hr",null),c.a.createElement("img",{src:R.a,height:"430",width:"760",alt:"bad cat pic"}))}}]),t}(c.a.Component);var C=function(e){var t=e.match;Object(n.useEffect)(function(){o(),console.log(t)},[]);var a=Object(n.useState)({images:{}}),r=Object(h.a)(a,2),l=r[0],i=r[1],o=function(){var e=Object(p.a)(u.a.mark(function e(){var a,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=".concat(t.params.id));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,i(n),console.log(n);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"Dogs"},c.a.createElement("h1",null,l.name),c.a.createElement("img",{src:l.images.transparent}))},P=function(){return c.a.createElement("h1",null,"Not Found")},A=c.a.createElement(o.a,null,c.a.createElement("div",null,c.a.createElement("nav",{className:"Nav "},c.a.createElement("h3",{className:"logo text-white"},"Logo"),c.a.createElement("ul",{className:"nav-links"},c.a.createElement("li",null,c.a.createElement(o.b,{to:"/public"},"Public Page")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/protected"},"Protected Page")),c.a.createElement("li",null,c.a.createElement(o.c,{exact:!0,className:"text-white",to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(o.c,{className:"text-white",to:"/dogs"},"Dogs")),c.a.createElement("li",null,c.a.createElement(o.c,{className:"text-white",to:"/cats"},"Cats")))),c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/",component:i}),c.a.createElement(s.a,{path:"/dogs",exact:!0,component:w}),c.a.createElement(s.a,{path:"/cats",component:D}),c.a.createElement(s.a,{path:"/dogs/:id",component:C}),c.a.createElement(s.a,{path:"*",component:function(){return"404 NOT FOUND :/"}}),c.a.createElement(s.a,{component:P}))));l.a.render(A,document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.cf2428e9.chunk.js.map