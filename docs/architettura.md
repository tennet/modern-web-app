# Specifiche Tecniche & Architettura: Modern Web App

Questo documento funge da fonte di verità tecnica (Docs-as-Code) sia per il team di sviluppo che per gli assistenti e subagent IA.

---

## 1. Visione del Progetto
Applicazione web reattiva con interfaccia moderna (Bento Grid, dark mode sofisticata, micro-interazioni e metriche in tempo reale).

---

## 2. Struttura del Repository
```text
modern-web-app/
├── .agents/
│   └── rules/AGENTS.md       # Regole di codifica specifiche per questo progetto
├── docs/
│   └── architettura.md       # Questa documentazione tecnica
├── src/
│   ├── index.html            # Punto d'ingresso dell'applicazione
│   ├── app.js                # Logica applicativa e gestione eventi
│   └── styles.css            # Classi personalizzate ed effetti visivi
├── .gitignore                # Protezione credenziali e file temporanei
└── README.md                 # Guida di avvio e istruzioni per GitHub
```

---

## 3. Standard di Design & UI
- **Palette Primaria**: Base `zinc-950` (`#09090b`), superfici card in `zinc-900/50` con effetto `backdrop-blur`.
- **Accenti**: Ciano (`cyan-500`) e Viola (`violet-600`) per gradienti e badge di stato attivi.
- **Micro-interazioni**:
  - Spotlight al passaggio del cursore sulle card.
  - Indicatore di stato heartbeat pulsante (`animate-ping`).
  - Filtraggio e navigazione a schede asincrona.

---

## 4. Regole di Contribuzione Git
- I commit devono seguire le direttive Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`).
- Mai effettuare commit diretti su `main`: utilizzare sempre branch di lavoro (`feature/<nome>`).
