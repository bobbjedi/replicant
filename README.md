# 📡 Digital Replicant — Open-Source Project

## 📖 Project Overview

**Digital Replicant** is an open platform for creating a personal digital twin based on a person’s beliefs, speech patterns, and life experience.  
The project allows you to collect data about a person’s worldview, manner of speaking, emotions, and reactions in various situations — and then use this data to generate personalized responses on their behalf in text or voice form.

---

## 🎯 Project Objectives

- Develop an open tool for creating a **digital personality portrait**.
- Collect a user's **personal beliefs** on topics such as philosophy, religion, politics, etc.
- Capture **speech patterns**, including filler words, sentence structure, and intonations.
- Preserve **life experiences** and stories of how personal views evolved.
- Build an **ethical, private digital twin**, accessible only to its owner.

---

## 🛠️ How It Works

### 📥 1. Data Collection (Snapshot)

The user goes through a guided interview across different topics. The interview is led by GPT, which dynamically generates the next question based on previous answers, within the chosen theme.

Example topic — **"Religion"**:

- What is your general attitude towards religion?
- How did you perceive religion as a child?
- How has your attitude changed over time?
- What influenced this change?

There are also situational questions such as:

- *Your child comes home from school with a black eye. How do you respond?*
- *You witness injustice on public transport. What do you do?*

The user answers **by voice** (with subsequent speech-to-text transcription) and marks the **emotional tone** of the response (e.g. joy, irritation, sadness).

**Flexibility:** the user can:
- Add custom topics.
- Initiate custom situational questions.

### 💾 2. Data Storage

- All data is stored **locally** on the user’s device.
- **Password-based encryption** is applied.
- **Snapshot export and import** options are available.

### 🤖 3. Response Generation (Replicant)

- **Light Mode:** The system searches for relevant Q&A pairs within the snapshot database. Several most relevant examples (RAG find) are selected and sent to a language model (GPT) along with the instruction:  
  *"Generate a response to the current question on behalf of the user, considering their answers to similar questions, maintaining their style, emotional tone, and core values."*

- **Heavy Mode:** An open-source language model (such as LLaMA, Mistral, or equivalent) is fine-tuned on the user's personal snapshot.  
  The response generation follows the same scheme as Light Mode:
  - Relevant Q&A pairs are retrieved.
  - A prompt is formed, incorporating the fine-tuned model’s answer to this topic.
  - The final response is generated via GPT, blending the fine-tuned model’s patterns for maximum personalization.

---

## 🧩 Example Situational Questions

- *Your friend asks to borrow a significant sum of money. What do you do?*
- *Your work team makes a serious mistake. How do you handle it?*
- *Your son wants to drop out of university. How do you react?*

These questions help reveal moral values, principles, and behavioral patterns.

---

## 📜 Ethical Manifesto

We believe that personality modeling is a delicate and responsible task. This project follows these core principles:

- **Privacy:** All user data is stored locally and encrypted.
- **Transparency:** All source code is open and available for review.
- **Control:** The user alone decides what to store and when to delete.
- **Voluntariness:** Participation and the use of the digital twin is entirely consensual.
- **Responsible Use:** It is forbidden to use a digital twin for deception, manipulation, or impersonation without explicit permission.

---

## 📌 Why This Matters

Today, AI models create synthetic personalities without a person’s knowledge.  
**Digital Replicant** offers an alternative:  
**your digital self belongs only to you.**

---

## 📊 Current Status

- 📄 Project in concept development phase.
- 📚 Preparing topic maps and interview question banks.
- 🔒 Developing a system for local, encrypted snapshot storage.
- 🤖 Exploring integrations with open-source RAG solutions and models like LLaMA, Mistral.

---

## 📬 Contact

If you'd like to join the project or share ideas — open an issue in the repo!

(Quasar + Vue 3 / Node.js + Express + Zod) с SQLite и Drizzle ORM RAG (ChromaDB) 