(()=>{"use strict";var e={694:e=>{e.exports=JSON.parse('[{"id":1,"name":"Do Ly Nhan","email":"nhan.dol@one-line.com","phone":"0123456789","address":"Da Nang","typeId":1},{"id":2,"name":"Tran Thi Dieu Linh","email":"linh.trantd@one-line.com","phone":"0123456789","address":"Hue","typeId":2}]')}},t={};function n(d){var a=t[d];if(void 0!==a)return a.exports;var s=t[d]={exports:{}};return e[d](s,s.exports,n),s.exports}(()=>{class e{constructor(e,t,n,d,a,s){this._id=e,this._name=t,this._email=n,this._phone=d,this._address=a,this._typeId=s}get id(){return this._id}get name(){return this._name}get email(){return this._email}get phone(){return this._phone}get address(){return this._address}get typeId(){return this._typeId}set id(e){this._id=e}set name(e){this._name=e}set email(e){this._email=e}set phone(e){this._phone=e}set address(e){this._address=e}set typeId(e){this._typeId=e}}const t=n(694);(e=>{const t=document.querySelector("#listContact");e.forEach((e=>{const n=document.createElement("tr");Object.keys(e).forEach((t=>{let d=document.createElement("td"),a=document.createTextNode(e[t]);d.appendChild(a),"typeId"==t&&(d.hidden=!0),n.appendChild(d)}));let d=document.createElement("td");const a=document.createElement("button");a.setAttribute("id",e.id),a.setAttribute("class","btn btn-primary btn-xs edit"),a.setAttribute("data-toggle","modal"),a.setAttribute("data-target","#edit");const s=document.createElement("span");s.setAttribute("class","ti-pencil"),a.appendChild(s),d.appendChild(a),n.appendChild(d);let r=document.createElement("td");const o=document.createElement("button");o.setAttribute("id",e.id),o.setAttribute("class","btn btn-danger btn-xs delete"),o.setAttribute("data-toggle","modal"),o.setAttribute("data-target","#delete");const i=document.createElement("span");i.setAttribute("class","ti-trash"),o.appendChild(i),r.appendChild(o),n.appendChild(r),null==t||t.appendChild(n)}))})(t);const d=document.querySelector(".add-form"),a=document.querySelector("#comboboxContact");d.addEventListener("submit",(n=>{n.preventDefault();const d=document.querySelector("#name"),s=document.querySelector("#email"),r=document.querySelector("#phone"),o=document.querySelector("#address"),i=a.selectedIndex,l=a.options[i].getAttribute("id"),c=((t,n,d,a,s,r)=>{const o=new e(t,n.value,d.value,a.value,s.value,r),i=document.querySelector("#listContact");let l=document.createElement("tr");Object.keys(o).forEach((e=>{console.log(e);let t=document.createElement("td"),n=document.createTextNode(o[e]);t.appendChild(n),"_typeId"==e&&(t.hidden=!0),l.appendChild(t)}));let c=document.createElement("td");const u=document.createElement("button");u.setAttribute("id",t),u.setAttribute("class","btn btn-primary btn-xs edit"),u.setAttribute("data-toggle","modal"),u.setAttribute("data-target","#edit");const m=document.createElement("span");m.setAttribute("class","ti-pencil"),u.appendChild(m),c.appendChild(u),l.appendChild(c);let p=document.createElement("td");const h=document.createElement("button");h.setAttribute("id",t),h.setAttribute("class","btn btn-danger btn-xs delete"),h.setAttribute("data-toggle","modal"),h.setAttribute("data-target","#delete");const b=document.createElement("span");return b.setAttribute("class","ti-trash"),h.appendChild(b),p.appendChild(h),l.appendChild(p),null==i||i.appendChild(l),o})(t.length+1,d,s,r,o,l);t.push(c)})),document.querySelectorAll(".edit").forEach((e=>{e.addEventListener("click",(t=>{console.log(e.getAttribute("id"))}))})),document.querySelectorAll("#comboboxContact").forEach((e=>{console.log(e)}))})()})();