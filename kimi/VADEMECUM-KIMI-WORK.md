# 🧭 Vademecum Pratico — Kimi Work (post-migrazione da Antigravity)

> **Autore**: Manuele Francescon
> **Disclaimer**: documentazione d'ambiente personale, riflette lo stato verificato alla data di revisione. Non costituisce garanzia di idoneità per ambienti di produzione: verificare sempre configurazioni e comandi prima dell'applicazione. L'autore non è responsabile per danni derivanti dall'uso delle informazioni riportate.

> Guida d'uso in linguaggio semplice dell'ambiente Kimi Work configurato per Manuele,
> equivalente funzionale dello studio Antigravity descritto in [VADEMECUM.md](../VADEMECUM.md).
> Fonte di verità della governance: `KIMI.md` (workspace root — file non incluso in questo repository).

---

## 🌟 La mappa: cosa hai ora su Kimi Work

1. **La squadra dei 7 specialisti** — skill `engineering-team`: coordinatore, architetto, designer, QA, integration tester, security auditor, documentatore. Li nomini in chat e Kimi assume quel punto di vista.
2. **Il workflow universale** — skill `sviluppo-completo`: 5 fasi (analisi → piano → codice → verifica → chiusura documentata).
3. **La memoria a lungo termine** — `vault-memory` abilitato (round automatici nella manutenzione giornaliera + manuale): Kimi non dimentica tra le sessioni. Appoggio: `memory/` nel workspace.
4. **I connettori** — GitHub (40+ tool autenticati), ricerca web + lettura pagine, Gmail, Obsidian, Finanza (Yahoo/SEC), immagini/video, browser reale (WebBridge).
5. **Gli airbag** — matrice di autonomia L1🟢 / L2🟡 / L3🔴: lettura e test liberi, scrittura tracciata, **commit/push/cancellazioni solo col tuo OK esplicito**.
6. **Anteprime e automazioni** — web app servite su `npm run dev` con anteprima nativa; task schedulabili (cron/condizioni) se servono.

---

## 1. Prontuario: cosa scrivere in chat

| Obiettivo | Frase da scrivere |
| :--- | :--- |
| **Nuovo lavoro completo** | *"Avvia lo sviluppo completo per creare [idea]"* (attiva il workflow a 5 fasi) |
| **Vista da un specialista** | *"Chiedi al designer / all'architetto / al QA / alla security di ..."* |
| **Squadra al completo** | *"Organizza il lavoro con l'engineering-team"* |
| **Delega parallela** | *"Usa un subagent per [task indipendente]"* — richiesta esplicita obbligatoria |
| **Aggiungere un ricordo** | *"Ricordati che..."* (finisce in vault-memory) |
| **Ripassare cosa sai di me** | *"Cosa ricordi su [progetto]?"* |
| **Verifica sicurezza pre-rilascio** | *"Fai revisionare il codice alla security"* (ha diritto di veto) |
| **Aggiornare documentazione** | *"Aggiorna README/docs"* |
| **Salvare su GitHub** | *"Committa e pusha"* → Kimi chiederà conferma (L3) prima di eseguire |
| **Web app / anteprima** | *"Fammi vedere l'anteprima"* → link di preview con server gestito da Kimi |

---

## 2. Le differenze rispetto ad Antigravity (oneste)

| Su Antigravity | Su Kimi Work |
| :--- | :--- |
| Subagent sempre invocabili | Delega a subagent **solo su tua richiesta esplicita**; di default Kimi emula i ruoli da solo |
| Hook `safety-gate` che blocca i comandi a livello motore | Matrice di autonomia in `KIMI.md`: il blocco è una policy applicata da Kimi, non un hook tecnico |
| MCP `memory` (knowledge graph) | `vault-memory` abilitato: round notturni sui transcript, vault strutturato |
| MCP `fetch` | Nativo: ricerca web + lettura pagine, più capace |
| `auto-formatter` dopo ogni scrittura | Non automatico: chiedilo esplicitamente se serve |
| Plugin `docker` | Non installato (rilevante solo se lavori con container) |

---

## 3. Cosa è stato migrato dal progetto modern-web-app

- **Progetto**: `~/Documents/kimi/modern-web-app/` — struttura identica all'originale
  (`src/`, `docs/`, `.agents/rules/AGENTS.md`, `.gitignore`) + `server.js`/`package.json` per l'anteprima (`npm run dev`).
- **Governance**: `KIMI.md` nel workspace root — principi, matrice L1/L2/L3, workflow, standard Git/design.
- **Skill create**: `sviluppo-completo`, `engineering-team` (invocabili per nome).
- **Backup**: copia del config di sistema pre-migrazione conservata nel workspace (non versionata).

---

## 4. Sicurezza: cosa Kimi NON farà mai da solo

- `git commit` / `git push` / force push / cancellazioni file / migrazioni DB / modifiche firewall o produzione.
- Su queste operazioni **si ferma e chiede**: approvazione esplicita, come da tua regola storica.
- Zero segreti nel codice: chiavi e token sempre da variabili d'ambiente o vault.
