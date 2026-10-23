# 🧭 Guida Semplice ad Antigravity (Vademecum Pratico)

> 📦 **Documento storico** — guida all'ambiente Antigravity originale. Versione corrente per Kimi Work: [kimi/VADEMECUM-KIMI-WORK.md](./kimi/VADEMECUM-KIMI-WORK.md).

> Questa guida spiega **senza paroloni tecnici** cosa c'è nel tuo ambiente Antigravity, come ti semplifica la vita e **cosa scrivere esattamente in chat** per ottenere qualsiasi risultato.

---

## 🌟 La Mappa Semplice: Come funziona il tuo Studio Personale

Invece di parlare con una sola IA generica, immagina di avere:
1. **Un Team di 7 Collaboratori Specializzati (Subagent)**: ognuno ha un mestiere preciso (il coordinatore, l'architetto, il grafico, il collaudatore, l'esperto di sicurezza, il documentatore e il collaudatore di sistemi).
2. **I Superpoteri (MCP)**: una **Memoria a lungo termine** che non dimentica nulla tra una sessione e l'altra, e un **Lettore Web** per studiare pagine e link internet.
3. **Gli Airbag di Sicurezza (Hooks)**: protezioni automatiche che bloccano all'istante comandi pericolosi per il tuo computer e mantengono il codice in ordine.
4. **Git e GitHub**: la cassaforte sul tuo Mac e il backup online per non perdere mai una riga di lavoro.

---

## 1. La tua Squadra di 7 Esperti Virtuali

Puoi chiamare ciascun collaboratore semplicemente nominandolo nel messaggio:

| Collaboratore | Chi è e a cosa serve | La frase esatta da scrivere in chat per usarlo |
| :--- | :--- | :--- |
| 🎯 **Il Coordinatore** (`project-orchestrator`) | È il tuo Tech Lead. Mette in ordine le idee, stabilisce chi deve fare cosa e controlla che tutto sia perfetto prima della consegna. | *"Chiedi al coordinatore di organizzare il lavoro per creare [tua idea]"* |
| 🏛️ **L'Architetto** (`software-architect`) | Progetta la struttura tecnica, organizza come si collegano le cartelle e crea diagrammi chiari. | *"Chiedi all'architetto di preparare il piano tecnico per questa funzione"* |
| 🎨 **Il Grafico** (`ui-ux-designer`) | Evita schermate noiose. Disegna pagine web moderne (stile Apple o Stripe), con schede Bento, sfondi scuri eleganti ed effetti di luce. | *"Chiedi al designer di rifare la schermata rendendola moderna e accattivante"* |
| 🧪 **Il Collaudatore** (`qa-engineer`) | Scova i singoli bug e scrive test rigorosi per verificare che una funzione non fallisca mai. | *"Chiedi al collaudatore di trovare e isolare l'errore in questo codice"* |
| 🔌 **Il Tester d'Integrazione** (`integration-tester`) | Controlla che le diverse parti del sistema (sito, database, API e server) parlino davvero tra loro senza blocchi. | *"Chiedi all'integration-tester di verificare il passaggio dati da inizio a fine"* |
| 🛡️ **La Guardia di Sicurezza** (`security-auditor`) | Controlla che non ci siano password o chiavi visibili per sbaglio e che il codice sia protetto da attacchi. | *"Fai fare un controllo di sicurezza prima di salvare o pubblicare"* |
| 📝 **Il Documentatore** (`documentation-engineer`) | Mantiene sempre aggiornati il README, le spiegazioni e le guide tecniche, scrivendo solo ciò che è stato davvero verificato. | *"Fai aggiornare la documentazione al documentatore"* |

---

## 2. I Superpoteri Installati (MCP)

### 🧠 1. La Memoria a Lungo Termine (`memory`)
* **A cosa serve**: Di solito le IA dimenticano tutto appena chiudi la chat. Con questa memoria, Antigravity **ha già salvato per sempre** le tue preferenze:
  - Che parliamo sempre in italiano chiaro e pratico.
  - Che preferisci un design moderno, scuro e a schede (Bento Grid).
  - Che prima di fare commit, push o cancellazioni serve sempre il tuo OK esplicito.
* **Cosa scrivergli per aggiungere ricordi**:
  > *"Ricordati nella tua memoria che in questo progetto dobbiamo usare sempre la porta 3000."*

### 🌐 2. Il Lettore di Pagine Web (`fetch`)
* **A cosa serve**: Invece di dover copiare e incollare pagine chilometriche, gli dai l'indirizzo web e lui lo legge e riassume per te.
* **Cosa scrivergli**:
  > *"Leggi la documentazione a questo indirizzo [incolla il link] e spiegami in 5 punti cosa fa."*

---

## 3. Come avviare un Progetto o una Funzione da Zero
Ora hai a disposizione il comando universale **`sviluppo-completo`**. Quando hai una nuova idea, ti basta scrivere:

> *"Avvia il workflow di sviluppo-completo per creare [la tua idea]"*

L'agente si occuperà da solo di seguire i 5 passi ordinati:
1. **Analizza** il progetto e i file presenti.
2. **Pianifica** con il coordinatore chi deve fare cosa.
3. **Scrive** il codice a piccoli passi controllati.
4. **Verifica** con i due collaudatori e la sicurezza che tutto funzioni.
5. **Documenta** e ti mostra il riassunto finale, **chiedendoti conferma prima di salvare su GitHub**.

---

## 4. Gli Airbag di Sicurezza (Invisibili)

Lavorano da soli in silenzio per proteggere il tuo Mac:
* **Freno d'Emergenza (`safety-gate`)**: Se un comando rischia di cancellare file importanti di sistema o forzare modifiche distruttive su Git, viene **bloccato all'istante**.
* **Ordinatore del Codice (`auto-formatter`)**: Ogni volta che l'IA salva un file, ne sistema automaticamente gli spazi e la grafica del codice per mantenerlo pulito e leggibile.

---

## 5. Prontuario: Cosa scrivere in chat nelle situazioni più comuni

| Obiettivo | Frase da scrivere in chat |
| :--- | :--- |
| **Iniziare un nuovo lavoro completo** | *"Avvia il workflow di sviluppo-completo per creare un'app per [tua idea]."* |
| **Migliorare la grafica di una pagina** | *"La pagina è troppo semplice: chiedi al designer di ridisegnarla in stile Bento Grid moderno."* |
| **Risolvere un errore che si blocca** | *"Questa funzione dà errore: fai intervenire il collaudatore per trovare il problema."* |
| **Testare se il frontend dialoga con i dati** | *"Fai controllare la cooperazione tra interfaccia e dati all'integration-tester."* |
| **Controllare la sicurezza prima del rilascio** | *"Fai revisionare il codice alla guardia di sicurezza prima di pubblicare."* |
| **Aggiornare guide e spiegazioni** | *"Chiedi al documentatore di spiegare le novità nel README."* |
| **Salvare tutto su GitHub** | *"Salva le modifiche su Git e inviale su GitHub."* |
| **Vedere i plugin attivi** | Digita semplicemente `/plugin` nella chat. |

---

*Per chi desidera approfondire la parte ingegneristica, l'architettura tecnica dettagliata è consultabile in [docs/GUIDA_TECNICA_DETTAGLIATA.md](./docs/GUIDA_TECNICA_DETTAGLIATA.md).*
