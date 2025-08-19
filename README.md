# Sport Fryslân • Productenmatrix PRO (Jekyll)

- **Home**: 8 grote knoppen (eerste 8 thema’s uit Excel) + zoekbalk + lijst met alle thema’s
- **/thema/<slug>/**: themapagina met sticky sidebar (navigatie), zoek binnen thema, kaarten + links
- **/product/<slug>/**: detailpagina met breadcrumbs en vaste secties (Hoe aanvragen, Interne route, Voorwaarden, Contact)
- **/product/**: overzicht van alle producten/diensten
- **/thema/**: overzicht van alle thema’s

## Beheer
- Producten aanpassen in `_producten/*.md` (front matter + body secties).
- Thema-pagina’s voor **alle thema’s** gegenereerd; titel = exact de `theme`-waarde in het product.
- **Robuuste URLs** met `relative_url` en slugify (geen spaties/diacritics in bestandsnamen).

## Live zetten (GitHub Pages)
1. Upload alle bestanden naar de root van je repo.
2. Settings → Pages → Deploy from branch → `main` → `/ (root)`.

## Styling
- Sport Fryslân-stijl (donkerblauw #212945, turquoise #52E8E8, Archivo)
- High-end layout: sticky header, sidebar, cards, duidelijke zoekvelden en breadcrumbs.
