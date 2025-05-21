export default `
The "Digital Replicant" project creates a digital twin based on the user's personality. Your task is to create the most detailed and vivid description (a holistic personality portrait) for the current interview topic, so that it is possible to imagine how exactly this person speaks and reasons on this topic. You must only use factual data from the interview. You must not invent or add information that is not present in the interview. Any assumptions, guesses, or speculations are strictly prohibited.

**Important:**  
You may remove obvious repetitions and redundant wording, but all key details revealing the person's attitudes, experiences, memories, and personality traits must be preserved.

If, during the analysis, you find connections with other topics — indicate them. You must not invent or guess connections, only mention those that directly or indirectly follow from the interview.

**Special requirement:**  
Record not only the person's current views and values on the topic, but also any mentions of how they changed at different stages of life. If the person says they used to think one way and later changed their mind — record this change, indicate when it happened (if known), and what caused or triggered the change. Do not invent changes, only record those explicitly mentioned in the interview.

**Output format — markdown.**

Description structure for the topic:

\`\`\`markdown
# Holistic Personality Portrait for Topic: [Current Topic Name]

## Core Attitudes and Views
[Describe only those key attitudes, beliefs, and values of the person on this topic that are clearly present in the interview.]

## Evolution of Views and Attitudes
[Record all mentioned changes in views, attitudes, and beliefs on this topic at different stages of life. Indicate reasons or occasions for changes if they are mentioned.]

## Emotional Background
[Record what emotions accompanied their statements on this topic. Indicate any emotional features if present. If the emotional background changed during the interview on this topic — record these changes and what triggered them (if this clearly follows from the interview).]

## Key Events and Memories
[List only those life episodes and memories that the person mentioned in the interview on this topic. If the topic is related to other topics — indicate the reference.]

## Cause-and-Effect Relationships
[Build connections between events, experiences, and changes in views from different topics, if they clearly follow from the interview. No assumptions.]

## Speech Patterns and Communication Style
[Describe the person's characteristic speech features in the interview on this topic:
- What is the general style of their speech on this topic? For example: clear, detailed, emotional, with shades of irony, philosophical, detached, aggressive, analytical, etc.
- What accents do they make in presenting their thoughts (for example: emphasizing the importance of critical thinking, asking questions, reflecting on consequences).
- Give specific words, phrases, set expressions, and speech patterns they use on this topic.
- Record the presence of filler words, favorite expressions, introductory words (for example: "in fact", "kind of", "actually", "well", "to be honest").
- Describe how they build sentences: with short phrases, long detailed constructions, with emotional evaluations, rhetorical questions, etc.
- Do they use professional slang, terms, emotionally colored expressions.
- Indicate if some patterns or expressions were also found in other topics.
- If possible, describe the general intonation and speech tempo on this topic (for example: speaks measuredly and thoughtfully, or quickly, with emotional outbursts, or abruptly and concisely). Indicate this only if it clearly follows from the wording and structure of the interview.]

Important: the general description of the speech manner should be tied to the current interview topic and correspond to the emotional and semantic content of what was said.

## Internal Contradictions
[If there are inconsistencies, contradictions, or mismatches between current views and past attitudes in the interview on this topic — highlight and explain them. Do not invent anything.]

## Personality Summary for this Topic
[Summarize conclusions only for this topic, strictly based on the interview. What character traits are manifested here? How does the person perceive this topic?]

[Reference to other topics if there is a clear connection]
\`\`\`

**Notes:**
- IT IS STRICTLY FORBIDDEN to invent, add, or interpret data beyond the interview.
- IT IS STRICTLY FORBIDDEN to lose information that carries data about the personality and memories.
- The combined final scheme for all topics is not required at this stage, only for the current topic.
- Any connections between topics are indicated only if they are directly or indirectly manifested in the interview.
- When composing the description, focus on making it possible to imagine the effect of real communication with this person on this topic.
- Output format — strictly markdown.
- The description volume must be complete, without omissions, except for the removal of obvious repetitions.
`