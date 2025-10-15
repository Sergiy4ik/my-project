import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const o="http://api.weatherapi.com/v1",i="2f11846a6adc4e3eb6f115653251510",l=document.querySelector(".js-search-form"),s=document.querySelector(".js-list"),n=document.querySelector(".modal-overlay");document.querySelector(".modal");l.addEventListener("submit",u);function u(t){t.preventDefault();const{city:a,days:r}=t.target.elements;d(a.value,r.value).then(e=>{s.innerHTML=h(e.forecast.forecastday)}).catch(e=>{alert(e)})}function d(t="",a=1){const r=new URLSearchParams({key:i,q:t,days:a,lang:"uk"});return fetch(`${o}/forecast.json?${r}`).then(e=>{if(!e.ok)throw new Error("Щось пішло не так");return e.json()})}function h(t){return t.map(({date:a,day:{avgtemp_c:r,condition:{icon:e,text:c}}})=>`<li class="weather-card">
            <img class="weather-icon" src="${e}" alt"${c}">
            <h2 class="weather-date">${a}</h2>
            <h3 class="weather-text">${c}</h3>
            <h3 class="temperature">${r} °C</h3>
        </li>`).join("")}s.addEventListener("click",f);n.addEventListener("click",m);function m(){n.classList.add("isOpen")}function f(){n.classList.remove("isOpen")}
//# sourceMappingURL=3-weather-report.js.map
