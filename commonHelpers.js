import{S as w,N as B,K as A,a as b,i as L}from"./assets/vendor-42883103.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();function C(){const e=document.querySelector(".backdrop"),o=document.querySelector(".open-menu-btn"),s=document.querySelector(".modal-close-btn"),n=document.querySelector(".navi-modal-wrapper"),t=document.querySelector(".navi"),i=document.querySelector(".menu"),l=document.querySelector(".nav-wrapper");o.addEventListener("click",a),s.addEventListener("click",a),n.addEventListener("click",a),i.addEventListener("click",m),l.addEventListener("click",m);function a(){e.classList.toggle("is-open"),document.body.classList.toggle("modal-open")}function m(){t.classList.toggle("is-open")}}function O(){document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".acrdn-button-list").forEach((o,s)=>{const n=o.querySelector(".about-me-acrdn-button"),t=o.querySelector(".content-about-me"),i=n.querySelector(".icon-arrow-up"),l=n.querySelector(".icon-arrow-down");n.addEventListener("click",()=>{o.classList.contains("is-active")?(o.classList.remove("is-active"),t.style.height="0px",i.classList.remove("visible"),l.classList.add("visible")):(o.classList.add("is-active"),t.style.height=t.scrollHeight+"px",i.classList.add("visible"),l.classList.remove("visible"))}),s===0?(o.classList.add("is-active"),t.style.height=t.scrollHeight+"px",i.classList.add("visible"),l.classList.remove("visible")):(t.style.height="0px",i.classList.remove("visible"),l.classList.add("visible"))})})}function D(){const e=document.querySelector(".circle-container"),o=document.getElementById("nextButton");let s=Array.from(e.children);o.addEventListener("click",()=>{const t=s.shift();s.push(t),e.innerHTML="",s.forEach(i=>{e.appendChild(i)})}),document.addEventListener("keydown",t=>{if(t.key==="ArrowRight"||t.key==="Tab"){t.preventDefault();const i=s.shift();s.push(i),e.innerHTML="",s.forEach(l=>{e.appendChild(l)})}else if(t.key==="ArrowLeft"){t.preventDefault();const i=s.pop();s.unshift(i),e.innerHTML="",s.forEach(l=>{e.appendChild(l)})}});let n;e.addEventListener("touchstart",t=>{n=t.touches[0].clientX}),e.addEventListener("touchmove",t=>{if(!n)return;const i=t.touches[0].clientX,l=n-i;if(Math.abs(l)>30){if(l>0){const a=s.shift();s.push(a)}else{const a=s.pop();s.unshift(a)}e.innerHTML="",s.forEach(a=>{e.appendChild(a)}),n=null}}),e.addEventListener("touchend",()=>{n=null})}document.addEventListener("DOMContentLoaded",()=>{D()});function P(){document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".faq-list .faq-item").forEach(e=>{const o=e.querySelector(".faq-header"),s=e.querySelector(".faq-btn-trigger"),n=e.querySelector(".faq-content"),t=s.querySelector(".faq-btn-open"),i=s.querySelector(".faq-btn-close");t.style.display="block",i.style.display="none",n.style.maxHeight="0",n.style.opacity="0",n.style.overflow="hidden",o.addEventListener("click",()=>{e.classList.contains("active")?(n.style.maxHeight=n.scrollHeight+"px",n.style.opacity="1",requestAnimationFrame(()=>{requestAnimationFrame(()=>{n.style.maxHeight="0",n.style.opacity="0"})}),t.style.display="block",i.style.display="none"):(n.style.maxHeight=n.scrollHeight+"px",n.style.opacity="1",t.style.display="none",i.style.display="block"),e.classList.toggle("active")})})})}const d=document.querySelector(".swiper-button-next ");d.style.color="#1c1d20";d.style.position="static";d.style.width="64px";d.style.height="64px";d.style.margin="0";d.style.border="1px solid rgba(250, 250, 250, 0.5)";d.style.borderRadius="60px";const u=document.querySelector(".swiper-button-prev ");u.style.position="static";u.style.width="64px";u.style.height="64px";u.style.color="#1c1d20";u.style.margin="0";u.style.border="1px solid rgba(250, 250, 250, 0.5)";u.style.borderRadius="60px";new w(".swiper",{slidesPerView:1,spaceBetween:15,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0}});function S(){const e=document.querySelectorAll(".swiper-slide");window.innerWidth>=1440?e.forEach(o=>{o.style.display="flex"}):e.forEach(o=>{o.style.display="block"})}S();window.addEventListener("resize",S);const E={reviewList:document.querySelector(".reviews-list")};function M(e){const o=e.map(({author:s,avatar_url:n,review:t})=>`<li class="reviews-wrap swiper-slide" id='rev-item-id'">
            <img src="${n}" alt="${s}" class="reviews-img" width='48' height='48' />
            <div class='reviews-content'>
              <h3 class="reviews-subtitle" >${s}</h3>
              <p class="reviews-text" >${t}</p>
            </div>
          </li>`).join("");E.reviewList.innerHTML=o}function T(){const e=`
        <li class="reviews-wrap reviews-wrap--error swiper-slide">
          <p class="reviews-text">Not found</p>
        </li>`;E.reviewList.innerHTML=e}function H(){new w(".reviews-swiper",{modules:[B,A],navigation:{nextEl:".reviews-swiper-button-right",prevEl:".reviews-swiper-button-left"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}});async function e(){return(await b.get("https://portfolio-js.b.goit.study/api/reviews")).data}async function o(){try{const s=await e();M(s)}catch{T()}}o()}function I(){const e={form:document.querySelector(".footer-form"),email:document.querySelector(".footer-email-input"),successLabel:document.querySelector(".text-valid"),errorLabel:document.querySelector(".text-invalid"),comments:document.querySelector(".footer-comments-input"),btn:document.querySelector(".footer-send-button"),modalBackdrop:document.querySelector(".footer-modal-backdrop"),modalOverlay:document.querySelector(".footer-modal-overlay")},o={addError(){e.successLabel.classList.add("visually-hidden"),e.errorLabel.classList.remove("visually-hidden"),e.email.classList.add("input-error"),e.email.classList.remove("input-success"),e.errorLabel.classList.add("is-open"),e.successLabel.classList.remove("is-open")},addSuccess(){e.errorLabel.classList.add("visually-hidden"),e.successLabel.classList.remove("visually-hidden"),e.email.classList.remove("input-error"),e.email.classList.add("input-success"),e.successLabel.classList.add("is-open"),e.errorLabel.classList.remove("is-open")},removeBoth(){e.email.classList.remove("input-success"),e.email.classList.remove("input-error"),e.successLabel.classList.add("visually-hidden"),e.errorLabel.classList.add("visually-hidden")}},s={close(){e.modalOverlay.classList.remove("is-open"),e.modalBackdrop.classList.remove("is-open"),setTimeout(()=>{e.modalBackdrop.classList.add("visually-hidden"),e.modalOverlay.classList.add("visually-hidden")},500),e.form.reset(),i(),e.modalOverlay.children.close_button.removeEventListener("click",s.close),e.modalBackdrop.removeEventListener("click",p),document.body.removeEventListener("keydown",y)},open(){e.modalBackdrop.classList.remove("visually-hidden"),e.modalOverlay.classList.remove("visually-hidden"),e.modalBackdrop.classList.add("is-open"),e.modalOverlay.classList.add("is-open"),e.modalOverlay.children.close_button.addEventListener("click",s.close),e.modalBackdrop.addEventListener("click",p),document.body.addEventListener("keydown",y)}},n={email:null,comments:null};if(localStorage.hasOwnProperty("userSubmitData")){const r=JSON.parse(localStorage.getItem("userSubmitData"));e.form.elements.email.value=r.email,e.form.elements.comments.value=r.comments,n.email=r.email,n.comments=r.comments}const t=()=>{localStorage.setItem("userSubmitData",JSON.stringify(n))},i=()=>{localStorage.removeItem("userSubmitData")},l=r=>/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(r.trim()),a=r=>{const c="https://portfolio-js.b.goit.study/api",h="/requests",v=r;return b.post(`${c}${h}`,v)},m=()=>{l(e.form.elements.email.value)||(o.addError(),L.error({title:"Error",message:"Invalid email, please try again."}))},p=r=>{r.target===r.currentTarget&&s.close()},y=r=>{r.key==="Escape"&&s.close()},f=async r=>{try{r.preventDefault();const c=r.currentTarget;if(c.elements.email.value.trim()===""||c.elements.comments.value.trim()===""){o.addError(),L.error({title:"Error",message:"Please fill out all fields."});return}const h={email:c.elements.email.value.trim(),comment:c.elements.comments.value.trim()},v=await a(h);e.modalOverlay.children.title.textContent=v.data.title,e.modalOverlay.children.message.textContent=v.data.message,s.open(),o.removeBoth(),c.reset(),i()}catch(c){console.log(c)}},x=r=>{n.email=r.target.value,t(),r.target.value.length>27&&innerWidth<=375&&(r.target.value=r.target.value.slice(0,25)+"..."),r.target.value.length>19&&innerWidth>375&&innerWidth<1440&&(r.target.value=r.target.value.slice(0,17)+"..."),r.target.value.length>31&&innerWidth>=1440&&(r.target.value=r.target.value.slice(0,29)+"..."),l(r.target.value)?o.addSuccess():o.addError(),r.target.value===""&&o.removeBoth()},k=r=>{n.comments=r.target.value,t(),r.target.value.length>27&&innerWidth<=375&&(r.target.value=r.target.value.slice(0,25)+"..."),r.target.value.length>19&&innerWidth>375&&innerWidth<1440&&(r.target.value=r.target.value.slice(0,17)+"..."),r.target.value.length>31&&innerWidth>=1440&&(r.target.value=r.target.value.slice(0,29)+"...")};e.btn.addEventListener("click",m),e.form.addEventListener("submit",f),e.email.addEventListener("input",x),e.comments.addEventListener("input",k)}function W(){const e=(o,s)=>{o.style.setProperty("--x",`${s.x}px`),o.style.setProperty("--y",`${s.y}px`),o.style.setProperty("--width",`${s.width}px`),o.style.setProperty("--height",`${s.height}px`),o.style.setProperty("--radius",s.radius),o.style.setProperty("--scale",s.scale)};document.querySelectorAll(".cursor").forEach(o=>{let s;const n=t=>{const i={x:t.clientX,y:t.clientY,width:42,height:42,radius:"100px"},l={};if(s!=null){const{top:a,left:m,width:p,height:y}=s.getBoundingClientRect(),f=window.getComputedStyle(s).borderTopLeftRadius;l.x=m+p/2,l.y=a+y/2,l.width=p,l.height=y,l.radius=f}return{...i,...l}};document.addEventListener("mousemove",t=>{const i=n(t);e(o,i)}),document.querySelectorAll("a, button, select").forEach(t=>{t.addEventListener("mouseenter",()=>s=t),t.addEventListener("mouseleave",()=>s=void 0)})})}const g=document.querySelector(".scroll-up");g.addEventListener("click",N);window.addEventListener("scroll",q);function q(){const e=window.scrollY,o=document.documentElement.clientHeight;e>o?g.classList.add("go-top--show"):g.classList.remove("go-top--show")}function N(){window.scrollTo({top:0,behavior:"smooth"})}C();O();P();H();I();W();q();
//# sourceMappingURL=commonHelpers.js.map
