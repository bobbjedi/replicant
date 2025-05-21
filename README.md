# Digital Replicant

**Digital Replicant** is an open-source platform for creating a highly accurate cognitive replication of a person based on interviews, narratives, memories, and personalized moral models. The goal of the project is to create a **digital twin as close to the original person as possible**, enabling third parties to interact as if they were speaking to the actual person, not an algorithm.

---

## Installation and Launch (in development)

# Digital Replicant

**Digital Replicant** — это open-source проект, задача которого создать максимально точный, глубокий и когнитивно достоверный цифровой портрет личности человека (Оригинала). Полученный портрет используется в качестве системного промпта для GPT, что позволяет другим людям (Третьим лицам) общаться с моделью так, как если бы они общались с этим человеком напрямую.

---

## Install and run

For local use:

```bash
# install dependencies
pnpm install

# initialize DB
pnpm init-db

# run server in dev mode 
pnpm back

# run front in develop mode
pnpm front

# open web
http://localhost:9000/#/
```

## Project Idea

Digital Replicant aims to go beyond simple "chatbots" that mimic conversational style and move towards building a **deep holistic cognitive portrait of a personality**, taking into account:

- beliefs and core values,
- emotions and reaction patterns,
- past experiences and memories,
- evolution of views over time,
- moral structures and inner contradictions.

The project is based on the idea that **a person is not a sum of answers**, but a **dynamic system of memory, emotions, experience, speech patterns, and the connections between them**. In this sense, Digital Replicant is not just a chatbot but a **reproducible model of a personality**, which can be applied in:

- digital legacy projects,
- cognitive research,
- humanistic AI architecture,
- healthcare (e.g. cognitive therapy, dementia support),
- dialogue agents shaped by the cognitive and emotional profile of a specific person.

---

## Architecture

### Key Concepts

- **Original** — the person whose cognitive portrait is being recorded.
- **Replicant** — a GPT model + system prompt + assembled cognitive portrait of the Original.
- **Third Party** — a user interacting with the Replicant, expecting realistic, human-like behavior.

---

## Data Structure

### Interviews

- A Replicant is created via a "Create Replicant" interface.
- Interviews are the primary data collection format.
- Each interview consists of **topics**.
- Each topic contains **questions, answers**, and **emotions**.
- There are required topics: _Introduction_, _Close Ones_, _Authorities_, _Politics_, _Religion_, and others.
- The Original can add **custom topics** that are personally important (e.g. "Marxism," "Military Service," "Crisis 2014," etc.).
- Each question is accompanied by: **question text, answer, and selected emotion**.

### Interview Stages

1. GPT generates a question based on previous answers and context.
2. The Original answers and selects an emotion.
3. The question, answer, and emotion are recorded.
4. Option to skip a question with a reason.
5. Ability to switch between topics.
6. Ability to add new topics.

---

## Portrait Formation

After completing the interview process, a **step-by-step holistic personality portrait** is generated.

### Step 1: Portrait by Topic

For each topic, a report is generated containing:

- Core beliefs and views
- Evolution of views
- Emotional background
- Key memories
- Causal links and motivations
- Speech patterns
- Internal contradictions
- Personality summary for the topic

Each topic summary is used as context for the next, ensuring **cumulative cohesion** in the final model.

### Step 2: Global Holistic Portrait

A **unified cognitive portrait** is assembled from all topics, providing a more compact but deeply structured overview:

- Core beliefs
- Evolutions of views
- Emotional background
- Key events and memories
- Causal connections
- Speech patterns
- Inner contradictions
- Biographical summary
- Final personality summary

This result becomes the Replicant’s **main system prompt** and is used in conversations with third parties.

---

## How the Replicant Works

1. The holistic portrait is used as a system prompt.
2. A third party sends a message.
3. GPT generates a response **as close as possible to the Original’s personality**.
4. The response includes an **emotion**, which can be visualized.
5. The interface displays text + emotion.
6. Optionally: voice-over, video avatar, synchronous articulation (external modules).

---

## Additional Features

### Interaction with Third Parties

- Ability to specify who is interacting with the Replicant (e.g. _Wife Anna_, _Brother Peter_).
- These details are injected into the prompt and can adjust the tone or content of the conversation.
- Topics related to close people are linked to individual third-party profiles.

### Evolution of Views

- Daily monitoring of news relevant to the Original’s core beliefs.
- When potentially significant events are detected — an option to update or adjust opinions and values.

### Memories

- All mentioned stories and events are collected in a dedicated database.
- RAG-based access to memories is available during response generation.

### Evaluator System

- Before each response, an "evaluator" layer runs:
  - Analyzes the query for the need to fetch current news.
  - Checks for relevant memories.
  - Suggests contextual elements that can be added to the response (weather, mood, references to past events, etc.).

---

## Technical Details

- **Backend:** Node.js, Express, TypeScript, Zod
- **Frontend:** Vue 3, Quasar
- **Database:** Plasma DB + SQLite

---

## 📄 License

[MIT License](LICENSE)

---

## Contributing

Any developer, researcher, philosopher, or psychologist interested in digital twins, cognitive modeling, and humanistic AI is welcome.

We would appreciate:

- new feature proposals,
- UI/UX improvements,
- hypothesis validation based on collected data,
- integration development (voice-over, video, voice avatars, etc.).

---

## Contacts

Create issue
