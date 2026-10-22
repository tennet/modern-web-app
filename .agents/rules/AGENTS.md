# Regole di Progetto (modern-web-app)

Queste regole sono vincolanti per qualsiasi agente o subagent che opera all'interno di questo repository.

---

## 1. Architettura & Stile
- Mantenere la separazione pulita tra presentazione (`index.html`), stile (`styles.css`) e logica (`app.js`).
- Rispettare rigorosamente gli standard di design Bento Grid e Dark Sophistication descritti in `docs/architettura.md`.
- Assicurarsi che qualsiasi nuova funzionalità sia responsive (visualizzabile sia su mobile che su schermi desktop).

---

## 2. Sicurezza & Igiene del Codice
- Zero segreti o chiavi API salvate nel codice sorgente: leggere sempre da variabili d'ambiente.
- Verificare costantemente che `.gitignore` blocchi file sensibili o temporanei prima di ogni commit.

---

## 3. Rapporto con la Governance Workspace

Queste regole **integrano** la governance del workspace (`KIMI.md`, fuori repository) e prevalgono su di essa solo per i vincoli specifici di questo progetto. Non sono invece **overrideabili** dal progetto:

- la matrice di autonomia L1🟢 / L2🟡 / L3🔴 (stop vincolante su cancellazioni, commit/push, migrazioni, deploy);
- i vincoli di sicurezza (zero segreti nel codice, nessuna credenziale in chiaro).

In caso di conflitto su questi due punti, vince sempre il vincolo più restrittivo.
