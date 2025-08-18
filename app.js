document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search');
  searchInput.addEventListener('input', async () => {
    const query = searchInput.value.toLowerCase();
    if (!query) return;
    const response = await fetch('search-index.json');
    const data = await response.json();
    const results = data.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.content.toLowerCase().includes(query)
    );
    let resultsDiv = document.getElementById('results');
    if (!resultsDiv) {
      resultsDiv = document.createElement('div');
      resultsDiv.id = 'results';
      document.body.appendChild(resultsDiv);
    }
    resultsDiv.innerHTML = results.map(r => `<p><a href='${r.url}'>${r.title}</a>: ${r.snippet}</p>`).join('');
  });
});
