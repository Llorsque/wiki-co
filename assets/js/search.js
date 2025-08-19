(async function(){
  const idx = await fetch((window.siteBase||'') + '/search.json?' + Date.now()).then(r=>r.json());
  const norm = t => (t||'').toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu,'');

  // Global
  const gInp = document.getElementById('globalSearch');
  const gOut = document.getElementById('globalResults');
  if(gInp && gOut){
    gInp.addEventListener('input', e=>{
      const q = norm(e.target.value.trim());
      if(!q){ gOut.innerHTML=''; return; }
      const list = idx.filter(it => norm([it.title,it.category,it.content].join(' ')).includes(q)).slice(0,48);
      gOut.innerHTML = list.map(r=>`<div class="card"><a href="${r.url}"><strong>${r.title}</strong></a><p>${r.snippet||''}</p></div>`).join('');
    });
  }

  // Theme local filter
  const tInp = document.getElementById('themeSearch');
  const tList = document.getElementById('themeList');
  if(tInp && tList){
    tInp.addEventListener('input', e=>{
      const q = norm(e.target.value.trim());
      tList.querySelectorAll('.card').forEach(el=>{
        el.style.display = norm(el.innerText).includes(q) ? '' : 'none';
      });
    });
  }
})();