function v(n,e){const t=document.querySelector(n);if(!t)return;const{title:o,url:i,year:a,author:l,siteName:u="Federal Vision for Europe"}=e,r=new Date().toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}),s=`${l||"[SITE TITLE]"}. (${a}). *${o}*. ${u}. Retrieved ${r}, from ${i}`,d=`${l||"[SITE TITLE]"}. "${o}." *${u}*. ${a}. Accessed ${r}. ${i}.`;t.innerHTML=`
    <div class="cite-export" id="cite-panel">
      <button class="cite-toggle" id="cite-toggle-btn"
              aria-expanded="false" aria-controls="cite-content">
        Cite this page
      </button>
      <div class="cite-content" id="cite-content" hidden>
        <div class="cite-format">
          <span class="cite-format__label">APA</span>
          <pre class="cite-format__text" id="cite-apa">${$(s)}</pre>
          <button class="cite-copy-btn" data-target="cite-apa" aria-label="Copy APA citation">
            Copy
          </button>
        </div>
        <div class="cite-format">
          <span class="cite-format__label">Chicago</span>
          <pre class="cite-format__text" id="cite-chicago">${$(d)}</pre>
          <button class="cite-copy-btn" data-target="cite-chicago" aria-label="Copy Chicago citation">
            Copy
          </button>
        </div>
      </div>
    </div>
  `;const p=t.querySelector("#cite-toggle-btn"),h=t.querySelector("#cite-content");p.addEventListener("click",()=>{const c=p.getAttribute("aria-expanded")==="true";p.setAttribute("aria-expanded",String(!c)),h.hidden=c}),t.querySelectorAll(".cite-copy-btn").forEach(c=>{c.addEventListener("click",()=>{const b=document.querySelector(`#${c.dataset.target}`);b&&navigator.clipboard.writeText(b.textContent.trim()).then(()=>{c.textContent="Copied",c.disabled=!0,setTimeout(()=>{c.textContent="Copy",c.disabled=!1},2e3)}).catch(()=>{const y=document.createRange();y.selectNodeContents(b),window.getSelection().removeAllRanges(),window.getSelection().addRange(y)})})})}function S(n,e){const t=document.querySelector(n);!t||!e?.length||(t.innerHTML=`
    <div class="bib-export">
      <span style="font-family:'IBM Plex Mono',monospace;font-size:12px;color:var(--text-secondary);">
        Export bibliography:
      </span>
      <button class="bib-export-btn" id="export-bibtex">BibTeX (.bib)</button>
      <button class="bib-export-btn" id="export-ris">RIS (.ris)</button>
    </div>
  `,document.querySelector("#export-bibtex").addEventListener("click",()=>{g(f(e),"federal-vision-sources.bib","text/plain")}),document.querySelector("#export-ris").addEventListener("click",()=>{g(m(e),"federal-vision-sources.ris","text/plain")}))}function T(n,e,t,o){const i=document.querySelector(n);!i||!e?.length||i.addEventListener("click",()=>{const a=Object.keys(e[0]).filter(s=>typeof e[0][s]!="object"),l=a.join(","),u=e.map(s=>a.map(d=>`"${String(s[d]??"").replace(/"/g,'""')}"`).join(","));let r="";o&&(r+=`"# Dataset: ${o.title||""}"
`,r+=`"# Publisher: ${o.publisher||""}"
`,r+=`"# Year: ${o.year||""}"
`,r+=`"# URL: ${o.url||""}"

`),r+=l+`
`+u.join(`
`),g(r,t,"text/csv")})}function f(n){return n.map(e=>{const t=x(`${e.author?.split(" ")[0]||"anon"}${e.year||"0000"}`),o=e.type==="scholarly"?"@book":e.type==="journal"?"@article":"@misc",i=e.author?`  author    = {${e.author}},
`:"",a=e.url?`  url       = {${e.url}},
`:"",l=e.notes?`  note      = {${e.notes}},
`:"";return`${o}{${t},
${i}  title     = {${e.title||""}},
  year      = {${e.year||""}},
  publisher = {${e.publisher||""}},
${a}${l}}`}).join(`

`)}function m(n){const e={scholarly:"BOOK",treaty:"LEGAL",data:"DATA",policy:"RPRT",journal:"JOUR",primary:"HIST"};return n.map(t=>[`TY  - ${e[t.type]||"GEN"}`,t.author?`AU  - ${t.author}`:null,t.title?`TI  - ${t.title}`:null,t.year?`PY  - ${t.year}`:null,t.publisher?`PB  - ${t.publisher}`:null,t.url?`UR  - ${t.url}`:null,"ER  -"].filter(Boolean).join(`
`)).join(`

`)}function g(n,e,t){const o=new Blob([n],{type:t}),i=document.createElement("a");i.href=URL.createObjectURL(o),i.download=e,i.click(),URL.revokeObjectURL(i.href)}function x(n){return n.toLowerCase().replace(/[^a-z0-9]/g,"").slice(0,20)}function $(n){return String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}export{v as a,S as b,T as i};
