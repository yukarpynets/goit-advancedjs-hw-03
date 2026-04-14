import{S as d,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(s){if(s.ep)return;s.ep=!0;const t=e(s);fetch(s.href,t)}})();const f=o=>{const r=new URLSearchParams({key:"55427334-75cc24dd7c9d859437f7d1aed",q:o.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${r}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})},p=document.querySelector(".js-gallery"),u=document.querySelector(".js-loader"),m=new d(".gallery a",{captionsData:"alt",captionDelay:250}),h=o=>{const r=o.map(e=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img
              class="gallery-image"
              src="${e.webformatURL}"
              alt="${e.tags}"
            />
            <div class="info">
              <p class="info-item">
                <span class="info-title">Likes</span>
                <span class="info-value">${e.likes}</span>
              </p>
              <p class="info-item">
                <span class="info-title">Views</span>
                <span class="info-value">${e.views}</span>
              </p>
              <p class="info-item">
                <span class="info-title">Comments</span>
                <span class="info-value">${e.comments}</span>
              </p>
              <p class="info-item">
                <span class="info-title">Downloads</span>
                <span class="info-value">${e.downloads}</span>
              </p>
            </div>
          </a>
        </li>
      `).join("");p.insertAdjacentHTML("beforeend",r),m.refresh()},y=()=>{p.innerHTML=""},g=()=>{console.log("show loader"),u.classList.remove("is-hidden")},l=()=>{console.log("hide loader"),u.classList.add("is-hidden")},c=document.querySelector(".js-search-form"),L=document.querySelector(".js-search-input");c.addEventListener("submit",o=>{o.preventDefault();const r=L.value.trim();if(r===""){a.error({message:"Please enter a search query!",position:"topRight"});return}y(),g(),f(r).then(e=>{if(l(),e.hits.length===0){a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(e.hits),c.reset()}).catch(e=>{l(),console.log("ERROR:",e),a.error({message:"Something went wrong. Please try again later.",position:"topRight"})})});
//# sourceMappingURL=index.js.map
