
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=React},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.soma=function(e,t){if(e<=0||t<=0)throw new Error("Use apenas numeros naturais");return e+t}},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),a=n(1),c=function(e){function t(t){var n=e.call(this,t)||this;return n.onChangeInput=function(){return function(e){var t=a.soma(1,3);n.setState({resultado:t})}},n.state={a:null,b:null,resultado:null},n}return o(t,e),t.prototype.render=function(){return u.createElement("div",null,"a",u.createElement("input",{id:"a",onChange:this.onChangeInput()}),"b",u.createElement("input",{id:"b",onChange:this.onChangeInput()}),"resultado",u.createElement("a",null,this.state.resultado))},t}(u.Component);t.Soma=c},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(3),u=n(2);o.render(r.createElement(u.Soma,null),document.getElementById("example"))}]);
//# sourceMappingURL=bundle.js.map