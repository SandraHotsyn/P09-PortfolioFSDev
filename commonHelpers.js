import{A as w,S as y,K as v,N as h,a as b}from"./assets/vendor-b9f32dbb.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();function S(){const t=document.querySelector(".backdrop"),r=document.querySelector(".open-menu-btn"),i=document.querySelector(".modal-close-btn"),n=document.querySelector(".navi-modal-wrapper"),e=document.querySelector(".navi"),o=document.querySelector(".menu"),s=document.querySelector(".nav-wrapper");r.addEventListener("click",d),i.addEventListener("click",d),n.addEventListener("click",d),o.addEventListener("click",f),s.addEventListener("click",f);function d(){t.classList.toggle("is-open"),document.body.classList.toggle("modal-open")}function f(){e.classList.toggle("is-open")}}function E(){document.addEventListener("DOMContentLoaded",()=>{new w(".accordion-container",{duration:400,showMultiple:!0,elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",activeClass:"is-active"})})}document.querySelectorAll(".ac-trigger").forEach(t=>{t.style.color="#fafafa"});document.querySelectorAll(".ac-panel").forEach(t=>{t.style.backgroundColor="#1c1d20"});document.querySelectorAll(".ac-text").forEach(t=>{t.style.color="#fafafa"});const l=document.querySelector(".swiper-button-next ");l.style.color="#FAFAFA";l.style.position="static";l.style.width="64px";l.style.height="64px";l.style.margin="0";const a=document.querySelector(".swiper-button-prev ");a.style.position="static";a.style.width="64px";a.style.height="64px";a.style.color="#FAFAFA";a.style.margin="0";function m(){const t=document.querySelectorAll(".swiper-slide");window.innerWidth>1440?t.forEach(r=>{r.style.display="flex"}):t.forEach(r=>{r.style.display="block"})}m();window.addEventListener("resize",m);new y(".swiper",{slidesPerView:3,spaceBetween:30,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1},4400:{slidesPerView:3}}});function L(){const t=({review:n,avatar_url:e,author:o})=>`<li class="rev-list-item ">
        <img src="${e}" alt="${o}" class="rev-item-img">
        <h3 class="rev-item-title">${o}</h3>
        <p class="rev-item-text">${n}</p>
      </li>`,r=n=>n.map(t).join(""),i=document.querySelector(".reviews-list");fetch("https://portfolio-js.b.goit.study/api/reviews").then(n=>{if(!n.ok)throw new Error(n.status);return n.json()}).then(n=>{const e=r(n);i.insertAdjacentHTML("beforeend",e),new y(".swiper-container",{modules:[v,h],direction:"horizontal",loop:!0,breakpoints:{320:{slidesPerView:1,slidesPerGroup:1,spaceBetween:0},768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:16}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0}});const o=document.querySelector(".rev-right-btn ");o.style.color="#FAFAFA",o.style.position="static",o.style.width="64px",o.style.height="64px",o.style.margin="0",o.style.display="flex";const s=document.querySelector(".rev-left-btn ");s.style.position="static",s.style.width="64px",s.style.height="64px",s.style.color="#FAFAFA",s.style.margin="0",s.style.display="flex"}).catch(n=>{console.log("Not found",n)})}const x="https://portfolio-js.b.goit.study/api";async function q({input:t,message:r}){try{return(await b.post(`${x}/requests`,{email:t,comment:r})).data}catch(i){return i.response.data.message}}const A={footerForm:document.querySelector(".footer-form"),footerResponceHeader:document.querySelector(".footer-modal-header"),footerResponceParagr:document.querySelector(".footer-modal-p"),footerBtnClose:document.querySelector(".footer-close-btn"),footerBackdrop:document.querySelector(".backdropp")},{footerForm:g,footerResponceHeader:k,footerResponceParagr:u,footerBtnClose:P,footerBackdrop:p}=A;g.addEventListener("submit",t=>{t.preventDefault(),B(t.target.elements.email.value,t.target.elements.comment.value),F()});function F(){window.addEventListener("keydown",t=>{t.code==="Escape"&&c()}),p.addEventListener("click",t=>{t.target===p&&c()}),P.addEventListener("click",c)}async function B(t,r){const i=t.trim(),n=r.trim();try{const e=await q({input:i,message:n});if(console.log(e),typeof e=="string"){u.textContent=e,c();return}M(e),c(),g.reset()}catch(e){console.log(e)}}function M({title:t,message:r}){r||(u.textContent=`${r}`),k.textContent=`${t}`,u.textContent=`${r}`}function c(){p.classList.toggle("backdropp-hidden")}S();E();L();
//# sourceMappingURL=commonHelpers.js.map
