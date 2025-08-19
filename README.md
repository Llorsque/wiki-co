# Sport Fryslân • Productenmatrix (Jekyll)

- Home (/): 8 themaknoppen (uit Excel)
- /thema/<slug>/: themapagina met alle producten/diensten binnen dat thema
- /product/<slug>/: detailpagina met vaste secties (Omschrijving, Hoe aanvragen, Interne route, Voorwaarden, Contact)
- Zoeken: client-side op /search.json (alle producten)

## Beheer
- Pas producten aan in `_producten/*.md` (front matter + body).
- Thema’s: top 8 uit Excel hebben automatisch een pagina; extra thema? voeg zelf `_themas/<slug>.md` toe.

## Live zetten (GitHub Pages)
1. Upload alle bestanden naar de root van je repo.
2. Settings → Pages → Deploy from branch → `main` → `/ (root)`.
