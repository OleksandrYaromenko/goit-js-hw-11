import{i as a}from"./assets/vendor-8e8cd629.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function u(s){const r="https://pixabay.com/api/",o="43436630-0ca2cab0bed204149ca1c5fee",i=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${r}?${i}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function f(s){return s.map(({webformatURL:r,largeImageURL:o,tags:i,likes:e,views:t,comments:n,downloads:c})=>`
     <a class="gallery-link" href="${o}">
                <img class="gallery-img" src="${r}" alt="${i}" />
                <ul class="search-list">
                    <li class="info"><span class="info-item">Likes </span>${e}</li>
                    <li class="info"><span class="info-item">Views </span>${t}</li>
                    <li class="info"><span class="info-item">Comments </span>${n}</li>
                    <li class="info"><span class="info-item">Downloads </span>${c}</li>
                </ul>
            </a>


    `).join()}const m=document.querySelector(".search-form"),l=document.querySelector(".gallery");m.addEventListener("submit",p);function p(s){s.preventDefault();const{search:r}=s.currentTarget.elements;if(r.value===""){a.show({title:"error",titleColor:"white",message:"Please find what you want to find",messageColor:"white",color:"red",position:"topCenter",timeout:"2000"});return}u(r.value).then(o=>{if(l.innerHTML=f(o.hits),o.total===0){a.show({title:"error",titleColor:"white",message:"We cannot find a picture for this name, please enter the correct name",messageColor:"white",color:"red",position:"topCenter",timeout:"2000"}),l.reset();return}}).catch(o=>a.show({title:"error",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topCenter",timeout:"2000"}))}
//# sourceMappingURL=commonHelpers.js.map
