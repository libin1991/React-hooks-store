(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(6),u=t.n(r),o=t(4),l=t.n(o),i=t(7),m=t(3),s=t(1),f=t(2);var b=Object(s.a)({count:0,age:200,name:"libin",list:[{title:"Learn TypeScript",done:!0},{title:"Try Immer",done:!1}]},{increment:function(e){var n=e.count;return Object(m.a)({},b.state,{count:n+1})},decrement:function(e){var n=e.count;return Object(m.a)({},b.state,{count:n-1})},random:function(){return Object(m.a)({},b.state,{count:Math.round(10*Math.random())})},changeage:function(e,n){return Object(f.a)(e,function(e){e.age=n})},changeageSync:function(){var e=Object(i.a)(l.a.mark(function e(n){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(e,n){setTimeout(function(){e(123)},1e3)});case 2:return t=e.sent,e.abrupt("return",Object(f.a)(n,function(e){e.age=t}));case 4:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),addList:function(e){return Object(f.a)(e,function(e){e.list.push({title:"Tweet about it",done:!1}),e.list[1].done=!0})}});console.log(b);var d=function(){console.log(Object(s.b)(b));var e=Object(s.b)(b),n=e.state,t=n.count,a=n.age,r=n.name,u=n.list,o=e.actions;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Counter"),c.a.createElement("h2",null,"Count ",t," ",a," ",r),c.a.createElement("button",{onClick:function(){return o.decrement()}},"-"),c.a.createElement("button",{onClick:function(){return o.increment()}},"+"),c.a.createElement("button",{onClick:function(){return o.changeage(a+2)}},"age"),c.a.createElement("button",{onClick:function(){return o.changeageSync()}},"ageSync"),c.a.createElement("ul",null,u.map(function(e,n){return c.a.createElement("li",{key:n},"".concat(e.title," ").concat(e.done))})),c.a.createElement("button",{onClick:function(){return o.addList()}},"addList"))},g=function(){var e=Object(s.c)(b),n=e.state,t=n.count,r=n.age,u=n.name,o=e.actions;return Object(a.useEffect)(function(){o.random()},[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Local Counter"),c.a.createElement("h2",null,"Count ",t,"  ",r," ",u),c.a.createElement("button",{onClick:function(){return o.decrement()}},"-"),c.a.createElement("button",{onClick:function(){return o.increment()}},"+"),c.a.createElement("button",{onClick:function(){return o.changeage(r+1)}},"age"),c.a.createElement("button",{onClick:function(){return o.changeageSync()}},"ageSync"))};function E(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Hello CodeSandbox"),c.a.createElement("h2",null,"Start editing to see some magic happen!"),c.a.createElement(d,null),c.a.createElement(d,null),c.a.createElement(g,null),c.a.createElement(g,null))}u.a.render(c.a.createElement(E,null),document.getElementById("root"))},8:function(e,n,t){e.exports=t(14)}},[[8,2,1]]]);
//# sourceMappingURL=main.9fa3816e.chunk.js.map