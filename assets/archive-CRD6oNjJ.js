import{i as f,a as g}from"./nav-DG_LoV_p.js";import{r as y,i as _}from"./citations-JdN-Zrlu.js";function v(d=".timeline-entry",u=6){const c=Array.from(document.querySelectorAll(d)),n=document.querySelector(".pagination");if(!c.length||!n)return;const i=Math.ceil(c.length/u);function m(){const t=window.location.hash.match(/page=(\d+)/),r=t?parseInt(t[1],10):1;return Math.max(1,Math.min(r,i))}function p(e){const t=(e-1)*u,r=t+u;c.forEach((l,a)=>{l.hidden=a<t||a>=r}),b(e);const o=document.querySelector(".timeline");o&&e>1&&o.scrollIntoView({behavior:"smooth",block:"start"})}function b(e){const t=e===1,r=e===i;n.innerHTML=`
      <button class="pagination__btn" id="pg-prev"
              aria-label="Previous page"
              ${t?'disabled aria-disabled="true"':""}>
        &larr; Prev
      </button>
      <div class="pagination__pages" role="group" aria-label="Page navigation">
        ${Array.from({length:i},(a,E)=>{const s=E+1;return`<button class="pagination__page${s===e?" active":""}"
                          aria-label="Page ${s}"
                          aria-current="${s===e?"page":"false"}"
                          data-page="${s}">${s}</button>`}).join("")}
      </div>
      <button class="pagination__btn" id="pg-next"
              aria-label="Next page"
              ${r?'disabled aria-disabled="true"':""}>
        Next &rarr;
      </button>
      <span class="pagination__info" aria-live="polite">
        Page ${e} of ${i}
      </span>
    `,n.querySelectorAll(".pagination__page").forEach(a=>{a.addEventListener("click",()=>h(parseInt(a.dataset.page,10)))});const o=n.querySelector("#pg-prev"),l=n.querySelector("#pg-next");o&&o.addEventListener("click",()=>h(e-1)),l&&l.addEventListener("click",()=>h(e+1))}function h(e){const t=Math.max(1,Math.min(e,i));history.pushState(null,"",`#page=${t}`),p(t)}window.addEventListener("popstate",()=>p(m())),p(m())}f();y({"arc-ventotene":{num:1,author:"Altiero Spinelli and Ernesto Rossi",title:"For a Free and United Europe: A Draft Manifesto (The Ventotene Manifesto)",year:1941,publisher:"CVCE.eu / European University Institute",url:"https://www.cvce.eu/en/obj/the_ventotene_manifesto_1941-en-5ada4b99-7445-492f-9fad-7ebeb5f2a8b4.html"},"arc-schuman":{num:2,author:"Robert Schuman",title:"Declaration of 9 May 1950",year:1950,publisher:"European Commission",url:"https://european-union.europa.eu/principles-countries-history/history-eu/1945-59/schuman-declaration-may-1950_en"},"arc-rome":{num:3,author:"European Communities",title:"Treaty Establishing the European Economic Community",year:1957,publisher:"EUR-Lex",url:"https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A11957E%2FTXT"},"arc-spinelli84":{num:4,author:"European Parliament (led by Altiero Spinelli)",title:"Draft Treaty Establishing the European Union",year:1984,publisher:"CVCE.eu / European University Institute",url:"https://www.cvce.eu/en/obj/draft_treaty_establishing_the_european_union_14_february_1984-en-747555ce-e674-4a72-9b6c-c74c31d2acf9.html"},"arc-maastricht":{num:5,author:"European Communities",title:"Treaty on European Union (Maastricht Treaty)",year:1992,publisher:"EUR-Lex",url:"https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A11992M%2FTXT"},"arc-lisbon":{num:6,author:"European Union",title:"Treaty of Lisbon",year:2007,publisher:"EUR-Lex",url:"https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A12007L%2FTXT"},"arc-cofe":{num:7,author:"Conference on the Future of Europe",title:"Final Report",year:2022,publisher:"European Parliament / Council / Commission",url:"https://futureu.europa.eu/uploads/decidim/attachment/file/23363/CoFoE_Final_Report_EN.pdf"}});g();_();v(".timeline-entry",4);
