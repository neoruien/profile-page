(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n.p+"static/media/image.acd2e6ff.jpg"},20:function(e,t,n){e.exports=n.p+"static/media/phone.765e5404.svg"},21:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAADjklEQVR4Ae3bA6w0SRAH8D7btm0EhzhnR2fbtu27qdnXNVO1+owXnG2G72zbtvdS59tMZY3u6X/SwXp/095eExISEhISEvLf1Gq1GUql0oIx0UqQVldpVGyptLK1lWXK5fI8xufElcoikWUGpM8iS7VWCyD/BkgvgeVj77vvvpmNTymk5Y0jpA/bgNGw7iKi+YwPAaLNwdKXHYBoZQxx8gI+4Hyd8eUCkoYDSE/ElrZMkvFLEdESzRTpqOOEDlVq4ph0+p7g8P0TJkyYy7QZy7x+hPxpBvpjgpQ/HAUJLH2iIfmK4z9SISlt1nucRkhS+PGhQxoh2hCQvugZjpI4La+nIY2MH7+QGYbIEgAsv9EYJ6dIERbPGBROIySZUgwcKbL06P8+lOUX7ejo3EZPvpAA6c3/faiEjjIthIgWBsubymLWS6T61TmkxZ1ME6lWq7NHlvl/XwZ5vDTNXiHJxRhAE+PP2wGKkK7IXqnTSO9qEj8pSI4A8acK0Le1Wm3GLgwe60ZIH+tIQwxERHPKY7WifwFnkDqvQTLaZeGA5bdNF6MiWXpKkIYXKOFdlCa2h5H0CUlGz6EEksi+UIR8X4T0XmTpgSjh7Y0eF5EUoCGNioT0tCD1HygguQckKRCt0zckmc/oQG4iJcmERU23Apbe/+8bxAnvZyTOIknhZ7qGJPsudVfgZuNQBAksf9QrJAFKM4bOC3xB6ngXALG8WmTpZ2+RkG+VAxcd1qLigfJiviLFyKf2ZOvVRSRISmtn/IL7s+B1Y0Q70w8k3i2jFp1l/k1AipBerz9yY7oV0XYdSTrnus/+vvkzAUlGLbD8QV0NuqkHbZnOdhEJLJ2SsZF3kpHkHQnS0tYyatXvk8uhU9OrxMjnuIBUSHgrQP5ePlvf15eQFM/VkYYXB5AnGD25QNJxLD0kP2T2uwM8T0caLhz9jIHTSA7gOICk4yA/KDjDMls9X0dyH8c1JAdwlAiGjuQ8jgNIOo6UB2Qod2UFfaGOlEMcZTJ5kY7kEo4DSH7gKImRLlaROsDRjyj7j+Q5jhJAviQLSZqhgrpdXnAaIyHdWCgWV5DHyB9Y/hoFf1VxfA5YulQ9+In0ISD/ln0f36fj5AhJwyGiOU2eAkj7yh5xIxywfM3o6OisJo+J08qacvJCqTWfxra0g8l7iGiWv/7leCZYvh4SvhzS4rbxpEnzmpCQkJCQkJAG+R1Cblm04mycUQAAAABJRU5ErkJggg=="},22:function(e,t,n){e.exports=n.p+"static/media/shop.9a7c723f.svg"},23:function(e,t,n){e.exports=n(52)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),l=n.n(c),o=(n(28),n(3)),s=n(4),i=n(6),u=n(7),f=n(2),p=(n(29),n(5)),m=(n(30),n(31),function(e){return r.a.createElement("div",{className:"card"},e.children)}),d=n(19),h=n.n(d),v=n(20),E=n.n(v),g=n(21),A=n.n(g),y=n(22),I=n.n(y),k=(n(32),function(e){return r.a.createElement("div",{className:"container"},e.children)}),b=n(8),j=n.n(b),S=(n(51),function(e){return r.a.createElement("div",{className:"post"},e.children)});function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(f.a)(e);if(t){var r=Object(f.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(u.a)(this,n)}}var O=function(e){Object(i.a)(n,e);var t=C(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState({value:e.target.value}),a.getAllUserInfo(e.target.value)},a.state={userinfo:[],userCompanyInfo:[],userAddressInfo:[],value:"1",posts:[]},a.getAllUserInfo=a.getAllUserInfo.bind(Object(p.a)(a)),a}return Object(s.a)(n,[{key:"getAllUserInfo",value:function(e){var t=this;j.a.get("https://jsonplaceholder.typicode.com/users/".concat(e)).then(function(e){console.log(e),t.setState({userinfo:e.data}),t.setState({userCompanyInfo:e.data.company}),t.setState({userAddressInfo:e.data.address})}),j.a.get("https://jsonplaceholder.typicode.com/posts?userId=".concat(e)).then(function(e){console.log(e),t.setState({posts:e.data})})}},{key:"componentDidMount",value:function(){this.getAllUserInfo(1)}},{key:"render",value:function(){var e=this.state.userinfo.name,t=(""+this.state.userinfo.phone).split(" ")[0],n=(""+this.state.userCompanyInfo.bs).split(" ").join(" \u2022 "),a=this.state.userAddressInfo.street+", "+this.state.userAddressInfo.suite+", "+this.state.userAddressInfo.city,c=(""+e).split(" ")[0],l=this.state.posts.length;return r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",margin:"10px"}},r.a.createElement(m,null,r.a.createElement("img",{src:h.a,alt:"Decoration",width:"450"}),r.a.createElement("div",{className:"topright"},r.a.createElement("span",null,"User: "),r.a.createElement("select",{value:this.state.value,onChange:this.handleChange},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"6"},"6"),r.a.createElement("option",{value:"7"},"7"),r.a.createElement("option",{value:"8"},"8"),r.a.createElement("option",{value:"9"},"9"),r.a.createElement("option",{value:"10"},"10"))),r.a.createElement(k,null,r.a.createElement("p",{className:"title"},e),r.a.createElement("div",{className:"row"},r.a.createElement("img",{src:E.a,alt:"Phone",width:"25"}),r.a.createElement("span",null," "),t),r.a.createElement("div",{className:"row"},r.a.createElement("img",{src:A.a,alt:"Category",width:"25"}),r.a.createElement("span",null," "),n),r.a.createElement("div",{className:"row"},r.a.createElement("img",{src:I.a,alt:"Shop",width:"25"}),r.a.createElement("span",null," "),a))),r.a.createElement(m,null,r.a.createElement(k,null,r.a.createElement("p",{className:"title"},c,"'s Posts"),r.a.createElement("p",{className:"subtitle"},l," POSTS"),r.a.createElement("div",{className:"postcontainer"},this.state.posts.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(S,null,e.title,r.a.createElement("p",{className:"postbody"},e.body)))})))))}}]),n}(r.a.Component);function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(f.a)(e);if(t){var r=Object(f.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(u.a)(this,n)}}var x=function(e){Object(i.a)(n,e);var t=w(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"rowC",style:{backgroundColor:"#fafafa",display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement(O,null))}}]),n}(a.Component),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),a(e),r(e),c(e),l(e)})};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),R()}},[[23,1,2]]]);
//# sourceMappingURL=main.ed57d4fe.chunk.js.map