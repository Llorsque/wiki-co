document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('searchInput');
  input.addEventListener('input', () => {
    const term = input.value.toLowerCase();
    const articles = document.querySelectorAll('article');
    articles.forEach(a => {
      const text = a.innerText.toLowerCase();
      a.style.display = text.includes(term) ? '' : 'none';
    });
  });
});