# Modern Web App Starter ⚡

> Starter template moderno, sicuro e modulare configurato per il pair-programming con Antigravity e derivato da un progetto tracciato su Git.

---

## 🌟 Guide & Documentazione del Progetto
- **Guida Semplice (Vademecum Pratico)**: Consulta [VADEMECUM.md](./VADEMECUM.md) per capire in linguaggio semplice come usare i 7 agenti, la memoria e i comandi quotidiani.
- **Guida Tecnica Dettagliata**: Consulta [docs/GUIDA_TECNICA_DETTAGLIATA.md](./docs/GUIDA_TECNICA_DETTAGLIATA.md) per l'analisi approfondita dell'architettura, dei server MCP, dei lifecycle hooks e delle matrici di autonomia.
- **Specifiche Tecniche**: Consulta [docs/architettura.md](./docs/architettura.md) per i dettagli dell'applicazione web.
- **🇰 Vademecum Kimi Work**: Consulta [kimi/VADEMECUM-KIMI-WORK.md](./kimi/VADEMECUM-KIMI-WORK.md) per l'uso pratico dell'ambiente Kimi Work (frasi da chat, sicurezza, differenze).
- **🇰 Guida Tecnica Kimi Work**: Consulta [kimi/GUIDA_TECNICA-KIMI-WORK.md](./kimi/GUIDA_TECNICA-KIMI-WORK.md) per l'architettura completa dell'ecosistema migrato (governance, skill, vault-memory, connettori, rollback).

---

## 🚀 Come avviare l'applicazione in locale

Apri semplicemente il file `src/index.html` in qualsiasi browser, oppure usa un server locale:

```bash
# Con Python
python3 -m http.server 3000 --directory src

# Oppure con npx serve
npx serve src
```

## 💠 Anteprima in Kimi Work

Questa copia in workspace include `server.js` (static server Node zero-dipendenze) e `package.json` per l'anteprima nativa di Kimi Work:

```bash
npm run dev                # http://127.0.0.1:7100/
npm run dev -- --port 3000 # porta personalizzata
```

Il server espone la directory `src/` e accetta gli argomenti `--host` e `--port`.

---

## 🔗 Repository GitHub

Il repository remoto di riferimento è:
👉 **[github.com/tennet/modern-web-app](https://github.com/tennet/modern-web-app)**

Comando per scaricarlo o clonarlo su qualsiasi altro computer:
```bash
git clone https://github.com/tennet/modern-web-app.git
```
