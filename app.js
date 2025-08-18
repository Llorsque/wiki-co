
const $$ = (s,el=document)=>el.querySelector(s);
const $$$ = (s,el=document)=>Array.from(el.querySelectorAll(s));

const sb = $$('#searchBox');
const panel = $$('#searchPanel');
const results = $$('#results');

async function loadIndex(){
  const res = await fetch(`${document.body.dataset.root || ''}search-index.json?`+Date.now());
  return await res.json();
}

let INDEX = null;

sb && sb.addEventListener('input', async (e)=>{
  const q = e.target.value.trim().toLowerCase();
  if(!q){
    panel.hidden = true; results.innerHTML = ''; return;
  }
  if(!INDEX) INDEX = await loadIndex();
  const norm = (t)=> t.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu,'');
  const qq = norm(q);
  const list = INDEX
    .map(it => ({...it, _score:
      (norm(it.title).includes(qq)?3:0) +
      (norm(it.keywords||'').includes(qq)?2:0) +
      (norm(it.content).includes(qq)?1:0)
    }))
    .filter(x => x._score>0)
    .sort((a,b)=> b._score - a._score)
    .slice(0, 40);
  results.innerHTML = list.length
    ? list.map(r => `<div class="result"><a href="${r.url}">${r.title}</a><p>${r.snippet||''}</p></div>`).join('')
    : `<div class="result">Geen resultaten</div>`;
  panel.hidden = false;
});

document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape'){ panel.hidden = true; }
});
