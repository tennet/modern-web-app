# Modern Web App Starter ⚡

> Starter template moderno, sicuro e modulare configurato per il pair-programming con Antigravity e tracciato su Git.

---

## 🌟 Caratteristiche
- **Design System Contemporaneo**: Layout a Bento Grid, dark mode sofisticata, micro-interazioni e spotlight hover.
- **Docs-as-Code**: Documentazione tecnica viva in `docs/architettura.md`.
- **Integrazione Antigravity**: Regole di progetto vincolanti in `.agents/rules/AGENTS.md`.
- **Sicurezza & Igiene Git**: `.gitignore` completo per prevenire secret leak e artefatti inutili.

---

## 🚀 Come avviare l'applicazione in locale

Apri semplicemente il file `src/index.html` in qualsiasi browser, oppure usa un server locale:

```bash
# Con Python
python3 -m http.server 3000 --directory src

# Oppure con npx serve
npx serve src
```

---

## 🔗 Come collegare questo repository al tuo account GitHub

1. Vai su [github.com/new](https://github.com/new) e crea un nuovo repository (es. `modern-web-app`), senza inizializzarlo con README o .gitignore (li abbiamo già creati qui).
2. Nel terminale, all'interno di questa cartella, collega il remote ed esegui il push:

```bash
git remote add origin https://github.com/<TUO-USERNAME>/modern-web-app.git
git branch -M main
git push -u origin main
```
