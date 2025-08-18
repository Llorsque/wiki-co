document.getElementById('searchBox').addEventListener('input', function() {
  let query = this.value.toLowerCase();
  if (!query) return;
  fetch('search-index.json')
    .then(response => response.json())
    .then(data => {
      let results = data.filter(item => item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query));
      let content = document.getElementById('content');
      content.innerHTML = '<h2>Zoekresultaten</h2>';
      if (results.length === 0) {
        content.innerHTML += '<p>Geen resultaten gevonden</p>';
      } else {
        let ul = document.createElement('ul');
        results.forEach(r => {
          let li = document.createElement('li');
          li.innerHTML = '<a href="' + r.url + '">' + r.title + '</a>';
          ul.appendChild(li);
        });
        content.appendChild(ul);
      }
    });
});
