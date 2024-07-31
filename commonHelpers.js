import{S as g,N as x,K as B,a as w}from"./assets/vendor-2c281de3.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();function C(){const e=document.querySelector(".backdrop"),r=document.querySelector(".open-menu-btn"),t=document.querySelector(".modal-close-btn"),l=document.querySelector(".navi-modal-wrapper"),s=document.querySelector(".navi"),i=document.querySelector(".menu"),n=document.querySelector(".nav-wrapper");r.addEventListener("click",a),t.addEventListener("click",a),l.addEventListener("click",a),i.addEventListener("click",d),n.addEventListener("click",d);function a(){e.classList.toggle("is-open"),document.body.classList.toggle("modal-open")}function d(){s.classList.toggle("is-open")}}function O(){const e=document.querySelector(".circle-container"),r=document.getElementById("nextButton");let t=Array.from(e.children);r.addEventListener("click",()=>{const s=t.shift();t.push(s),e.innerHTML="",t.forEach(i=>{e.appendChild(i)})}),document.addEventListener("keydown",s=>{if(s.key==="ArrowRight"||s.key==="Tab"){s.preventDefault();const i=t.shift();t.push(i),e.innerHTML="",t.forEach(n=>{e.appendChild(n)})}else if(s.key==="ArrowLeft"){s.preventDefault();const i=t.pop();t.unshift(i),e.innerHTML="",t.forEach(n=>{e.appendChild(n)})}});let l;e.addEventListener("touchstart",s=>{l=s.touches[0].clientX}),e.addEventListener("touchmove",s=>{if(!l)return;const i=s.touches[0].clientX,n=l-i;if(Math.abs(n)>30){if(n>0){const a=t.shift();t.push(a)}else{const a=t.pop();t.unshift(a)}e.innerHTML="",t.forEach(a=>{e.appendChild(a)}),l=null}}),e.addEventListener("touchend",()=>{l=null})}document.addEventListener("DOMContentLoaded",()=>{O()});function P(){document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".faq-list .faq-item").forEach(e=>{const r=e.querySelector(".faq-header"),t=e.querySelector(".faq-btn-trigger"),l=e.querySelector(".faq-content"),s=t.querySelector(".faq-btn-open"),i=t.querySelector(".faq-btn-close");s.style.display="block",i.style.display="none",l.style.display="none",r.addEventListener("click",()=>{const n=l.style.display==="block";l.style.display=n?"none":"block",s.style.display=n?"block":"none",i.style.display=n?"none":"block"})})})}const u=document.querySelector(".swiper-button-next ");u.style.color="#1c1d20";u.style.position="static";u.style.width="64px";u.style.height="64px";u.style.margin="0";u.style.borderRadius="60px";const m=document.querySelector(".swiper-button-prev ");m.style.position="static";m.style.width="64px";m.style.height="64px";m.style.color="#1c1d20";m.style.margin="0";m.style.borderRadius="60px";new g(".swiper",{slidesPerView:1,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0}});function b(){const e=document.querySelectorAll(".swiper-slide");window.innerWidth>=1440?e.forEach(r=>{r.style.display="flex"}):e.forEach(r=>{r.style.display="block"})}b();window.addEventListener("resize",b);const S={reviewList:document.querySelector(".reviews-list")};function D(e){const r=e.map(({author:t,avatar_url:l,review:s})=>`<li class="reviews-wrap swiper-slide" id='rev-item-id'">
            <img src="${l}" alt="${t}" class="reviews-img" width='48' height='48' />
            <div class='reviews-content'>
              <h3 class="reviews-subtitle" >${t}</h3>
              <p class="reviews-text" >${s}</p>
            </div>
          </li>`).join("");S.reviewList.innerHTML=r}function T(){const e=`
        <li class="reviews-wrap reviews-wrap--error swiper-slide">
          <p class="reviews-text">Not found</p>
        </li>`;S.reviewList.innerHTML=e}function M(){new g(".reviews-swiper",{modules:[x,B],navigation:{nextEl:".reviews-swiper-button-right",prevEl:".reviews-swiper-button-left"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}});async function e(){return(await w.get("https://portfolio-js.b.goit.study/api/reviews")).data}async function r(){try{const t=await e();D(t)}catch{T()}}r()}function A(){const e={form:document.querySelector(".footer-form"),email:document.querySelector(".footer-email-input"),successLabel:document.querySelector(".success-label"),errorLabel:document.querySelector(".error-label"),comments:document.querySelector(".footer-comments-input"),btn:document.querySelector(".footer-send-button"),modalBackdrop:document.querySelector(".footer-modal-backdrop"),modalOverlay:document.querySelector(".footer-modal-overlay")},r={addError(){e.successLabel.classList.add("visually-hidden"),e.errorLabel.classList.remove("visually-hidden"),e.email.classList.add("input-error"),e.email.classList.remove("input-success"),e.errorLabel.classList.add("is-open"),e.successLabel.classList.remove("is-open")},addSuccess(){e.errorLabel.classList.add("visually-hidden"),e.successLabel.classList.remove("visually-hidden"),e.email.classList.remove("input-error"),e.email.classList.add("input-success"),e.successLabel.classList.add("is-open"),e.errorLabel.classList.remove("is-open")},removeBoth(){e.email.classList.remove("input-success"),e.email.classList.remove("input-error"),e.successLabel.classList.remove("is-open"),e.errorLabel.classList.remove("is-open"),setTimeout(()=>{e.successLabel.classList.add("visually-hidden"),e.errorLabel.classList.add("visually-hidden")},250)}},t={close(){e.modalOverlay.classList.remove("is-open"),e.modalBackdrop.classList.remove("is-open"),setTimeout(()=>{e.modalBackdrop.classList.add("visually-hidden"),e.modalOverlay.classList.add("visually-hidden")},500),e.modalOverlay.children.close_button.removeEventListener("click",t.close),e.modalBackdrop.removeEventListener("click",p),document.body.removeEventListener("keydown",y)},open(){e.modalBackdrop.classList.remove("visually-hidden"),e.modalOverlay.classList.remove("visually-hidden"),e.modalBackdrop.classList.add("is-open"),e.modalOverlay.classList.add("is-open"),e.modalOverlay.children.close_button.addEventListener("click",t.close),e.modalBackdrop.addEventListener("click",p),document.body.addEventListener("keydown",y)}},l={email:null,comments:null};if(localStorage.hasOwnProperty("userSubmitData")){const o=JSON.parse(localStorage.getItem("userSubmitData"));e.form.elements.email.value=o.email,e.form.elements.comments.value=o.comments,l.email=o.email,l.comments=o.comments}const s=()=>{localStorage.setItem("userSubmitData",JSON.stringify(l))},i=()=>{localStorage.removeItem("userSubmitData")},n=o=>/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(o.trim()),a=o=>{const c="https://portfolio-js.b.goit.study/api",h="/requests",f=o;return w.post(`${c}${h}`,f)},d=()=>{n(e.form.elements.email.value)||r.addError()},p=o=>{o.target===o.currentTarget&&t.close()},y=o=>{o.key==="Escape"&&t.close()},v=async o=>{try{o.preventDefault();const c=o.currentTarget;if(c.elements.email.value.trim()===""||c.elements.comments.value.trim()===""){messages.showError();return}const h={email:c.elements.email.value.trim(),comment:c.elements.comments.value.trim()},f=await a(h);e.modalOverlay.children.title.textContent=f.data.title,e.modalOverlay.children.message.textContent=f.data.message,t.open(),r.removeBoth(),c.reset(),i()}catch(c){console.log(c)}},k=o=>{l.email=o.target.value,s(),o.target.value.length>27&&innerWidth<=375&&(o.target.value=o.target.value.slice(0,25)+"..."),o.target.value.length>19&&innerWidth>375&&innerWidth<1440&&(o.target.value=o.target.value.slice(0,17)+"..."),o.target.value.length>31&&innerWidth>=1440&&(o.target.value=o.target.value.slice(0,29)+"..."),(!e.errorLabel.classList.contains("visually-hidden")||!e.successLabel.classList.contains("visually-hidden"))&&(n(o.target.value)&&r.addSuccess(),n(o.target.value)||r.addError(),o.target.value===""&&r.removeBoth())},q=o=>{l.comments=o.target.value,s(),o.target.value.length>27&&innerWidth<=375&&(o.target.value=o.target.value.slice(0,25)+"..."),o.target.value.length>19&&innerWidth>375&&innerWidth<1440&&(o.target.value=o.target.value.slice(0,17)+"..."),o.target.value.length>31&&innerWidth>=1440&&(o.target.value=o.target.value.slice(0,29)+"...")};e.btn.addEventListener("click",d),e.form.addEventListener("submit",v),e.email.addEventListener("input",k),e.comments.addEventListener("input",q)}function I(){const e=(r,t)=>{r.style.setProperty("--x",`${t.x}px`),r.style.setProperty("--y",`${t.y}px`),r.style.setProperty("--width",`${t.width}px`),r.style.setProperty("--height",`${t.height}px`),r.style.setProperty("--radius",t.radius),r.style.setProperty("--scale",t.scale)};document.querySelectorAll(".cursor").forEach(r=>{let t;const l=s=>{const i={x:s.clientX,y:s.clientY,width:42,height:42,radius:"100px"},n={};if(t!=null){const{top:a,left:d,width:p,height:y}=t.getBoundingClientRect(),v=window.getComputedStyle(t).borderTopLeftRadius;n.x=d+p/2,n.y=a+y/2,n.width=p,n.height=y,n.radius=v}return{...i,...n}};document.addEventListener("mousemove",s=>{const i=l(s);e(r,i)}),document.querySelectorAll("a, button, select").forEach(s=>{s.addEventListener("mouseenter",()=>t=s),s.addEventListener("mouseleave",()=>t=void 0)})})}const L=document.querySelector(".scroll-up");L.addEventListener("click",W);window.addEventListener("scroll",E);function E(){const e=window.scrollY,r=document.documentElement.clientHeight;e>r?L.classList.add("go-top--show"):L.classList.remove("go-top--show")}function W(){window.scrollTo({top:0,behavior:"smooth"})}C();P();M();A();I();E();
//# sourceMappingURL=commonHelpers.js.map
