(()=>{"use strict";function t(t){this.items=t}function e(t,e){this.name=t,this.buttonEl=document.createElement("button"),this.buttonEl.textContent=t;var n=this;this.buttonEl.onclick=function(){e(n)}}t.prototype.getAll=function(){return this.items},t.prototype.getNext=function(t){var e=this.items.indexOf(t);return this.items[e+1]||this.items[0]},e.prototype.render=function(t){t.append(this.buttonEl)},e.prototype.disable=function(t){t?this.buttonEl.setAttribute("disabled",!0):this.buttonEl.removeAttribute("disabled")};var n,i=document.getElementById("start-button"),o=document.getElementById("com"),l=new t([new e("가위",u),new e("바위",u),new e("보",u)]),r=l.getAll()[0],s=document.getElementById("item_buttons");function u(t){clearInterval(n);var e=l.getNext(t);t===r?alert("비겼습니다"):e===r?alert("졌습니다"):alert("이겼습니다"),i.removeAttribute("disabled"),l.getAll().forEach((function(t){t.disable(!0)}))}l.getAll().forEach((function(t){t.render(s),t.disable(!0)})),i.onclick=function(){i.setAttribute("disabled",!0),l.getAll().forEach((function(t){t.disable(!1)})),n=setInterval((function(){r=l.getNext(r),o.textContent=r.name}),100)}})();
//# sourceMappingURL=main.js.map