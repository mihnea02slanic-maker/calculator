# Crafting Calculator - RAGE:MP

Calculator de crafting pentru server RAGE:MP GTA V.

## Fișiere

| Fișier | Descriere |
|--------|-----------|
| `index.html` | Structura paginii |
| `styles.css` | Stiluri CSS (dark theme) |
| `app.js` | Logica aplicației (tabs, cart, preview) |
| `recipes.js` | Rețete crafting (arme, arme albe, droguri) |
| `netlify.toml` | Configurare deploy Netlify |
| `.gitignore` | Exclude fișiere inutile |

## Deploy pe Netlify

### Metoda 1: Drag & Drop (cea mai rapidă)
1. Mergi pe [netlify.com](https://netlify.com) și creează cont gratuit
2. Click pe **"Add new site"** → **"Deploy manually"**
3. Drag & drop acest folder direct în browser
4. Site-ul e live instant!

### Metoda 2: Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=.
```

## Funcționalități

- ✅ 3 tab-uri: Arme, Arme Albe, Droguri
- ✅ Preview costuri înainte de adăugare
- ✅ Coș multi-item cu calcul total
- ✅ Atașamente pentru arme
- 💰 Costuri în Bani Murdari

## URL după deploy

Site-ul va fi disponibil la: `https://nume-unic.netlify.app`
