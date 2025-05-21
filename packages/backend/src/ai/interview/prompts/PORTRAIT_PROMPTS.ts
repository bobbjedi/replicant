export const PORTRAIT_PROMPTS = {
  'Core beliefs': `
The "Digital Replicant" project creates a digital twin based on the user's personality. Your task is to identify and record in detail all key attitudes, beliefs, values, and views of the person on this topic based on the interview.

**Important:**  
You must only consider factual data from the interview. Any assumptions, guesses, or speculations are prohibited.

**Required requirements:**  
- The output must be as detailed, complete, and extensive as possible.
- Do not shorten or simplify formulations for the sake of compactness.
- All details revealing the person's attitudes and views on the topic must be preserved. Only direct repetitions may be removed.
- **The output forms part of the holistic personality portrait, so every detail matters and must be recorded. Do not omit or generalize nuances.**

**Output format — markdown.**

Output structure:

\`\`\`markdown
## Core Attitudes and Views
- [First key belief/view]
- [Second key belief/view]
- [And so on until all are recorded]
\`\`\`
`,

  'Evolutions of views': `
The "Digital Replicant" project creates a digital twin based on the user's personality. Your task is to record all mentioned changes in views, attitudes, and the person's relationship to this topic at different stages of life.

**Important:**  
Record only what was explicitly stated in the interview. Any assumptions or guesses are prohibited.

**Required requirements:**  
- Indicate reasons or occasions for changes if they were mentioned.
- The output must be as detailed as possible.
- **The output forms part of the holistic personality portrait. Every detail, even small ones, matters and must be preserved.**

**Output format — markdown.**

Output structure:

\`\`\`markdown
## Evolution of Views and Attitudes
- [Description of change, time/age (if specified), reason (if specified)]
- [Next change and its description]
\`\`\`
`,

  'Emotional background': `
The "Digital Replicant" project creates a digital twin based on the user's personality. Your task is to record the emotional background and mood of the person that accompanied their statements on this topic.

**Important:**  
Only consider factual data from the interview. Any assumptions or interpretations are prohibited.

**Required requirements:**  
- Indicate what emotions accompanied the responses.
- Note if the person has any peculiarities in their emotional communication style.
- The output must be as detailed as possible.
- **The output forms part of the holistic personality portrait. Every detail matters.**

**Output format — markdown.**

Output structure:

\`\`\`markdown
## Emotional Background
- [Description of emotion or emotional state in a specific statement]
- [Continue for each episode]
\`\`\`
`,

  'Key events and memories': `
The "Digital Replicant" project creates a digital twin based on the user's personality. Your task is to list all life episodes, events, and memories that the person mentioned in the interview on this topic.

**Important:**  
Record only facts from the interview. No assumptions or interpretations.

**Required requirements:**  
- Indicate if the event is related to another topic.
- The output must be as detailed as possible.
- **The output forms part of the holistic personality portrait. Every detail is important.**

**Output format — markdown.**

Output structure:

\`\`\`markdown
## Key Events and Memories
- [Description of event or memory, date or age (if available)]
- [Next event]
\`\`\`
`,

  'Causal links': `
The "Digital Replicant" project creates a digital twin based on the user's personality. Your task is to build cause-and-effect relationships between events, experiences, and changes in views if these connections are explicitly evident from the interview.

**Important:**  
Record only what was explicitly stated or logically follows directly from the interview. No assumptions or interpretations.

**Required requirements:**  
- Indicate connections between topics if they were explicitly mentioned.
- The output must be as detailed as possible.
- **The output forms part of the holistic personality portrait. Even small details cannot be lost.**

**Output format — markdown.**

Output structure:

\`\`\`markdown
## Cause-and-Effect Relationships
- [Description of connection: event — cause — effect]
\`\`\`
`,

  'Speech patterns': `
The "Digital Replicant" project creates a digital twin based on the user's personality. Your task is to identify characteristic speech patterns, communication style, favorite phrases, expressions, and intonations of the person on this topic.

**Important:**  
Record only what was explicitly heard in the interview. No assumptions.

**Required requirements:**  
- Note intersections of patterns with other topics.
- The output must be as detailed as possible.
- **The output forms part of the holistic personality portrait. Every speech characteristic matters.**

**Output format — markdown.**

Output structure:

\`\`\`markdown
## Speech Patterns and Communication Style
- [Description of speech features, phrases, expressions]
\`\`\`
`,

  'Inner contradictions': `
The "Digital Replicant" project creates a digital twin based on the user's personality. Your task is to identify internal contradictions in the interview on this topic: mismatches between current views and past attitudes, inconsistencies in logic or emotional assessments.

**Important:**  
Record only what was explicitly stated in the interview. No assumptions.

**Required requirements:**  
- The output must be as detailed as possible.
- **The output forms part of the holistic personality portrait. Every contradiction matters.**

**Output format — markdown.**

Output structure:

\`\`\`markdown
## Internal Contradictions
- [Description of contradiction: what contradicts what]
\`\`\`
`,
  'Biographical summary': `
The "Digital Replicant" project creates a digital twin based on the user's personality. Your task is to identify and record all biographical data of the person mentioned in the interview on this topic and other topics if they were mentioned.

**Important:**  
Record only explicitly stated data. No assumptions.

**What needs to be recorded:**  
- Name (if specified)
- Gender (if mentioned)
- Age or date of birth (if stated)
- City/country of birth
- Education (institution, faculty, specialty)
- List of close relatives and significant people:
  - Recording format: **[role] — [name]**
  - Example: *Father — Peter Ivanovich*, *Childhood friend — Michael*, *First girlfriend — Anastasia*
- Cities and places the person has visited:
  - Recording format: **[city/place] — [purpose of stay or events], [emotions or attitude to the place, if mentioned]**
  - Example: *Moscow — university studies, warm memories*, *Paris — tourist trip in 2018, delight and feeling of freedom*
- Relocations:
  - Recording format: **[from] → [to], [age or date] (if specified), reason (if specified), [emotions or attitude to relocation, if mentioned]**
  - Example: *Novosibirsk → Moscow, at age 20, university admission, feeling of anxiety and excitement*

**Output format — markdown.**

Output structure:

\`\`\`markdown
## Biographical Data
- Name: [if specified]
- Gender: [if mentioned]
- Age or date of birth: [if specified]
- City/country of birth: [if stated]
- Education: [if information available]
- Close relatives and significant people:
  - [role] — [name]
  - [next person]
- Cities and places visited:
  - [city/place] — [purpose of stay or event], [emotions or attitude]
- Relocations:
  - [from] → [to], [age or date] (if specified), reason (if stated), [emotions or attitude]
\`\`\`
`
  ,

  'Personality summary': `
The "Digital Replicant" project creates a digital twin based on the user's personality. Your task is to summarize conclusions about the person on this topic based on the interview.

**Important:**  
Record only factual data from the interview.

**Required requirements:**  
- The output must be as detailed as possible.
- Indicate character traits, attitudes, peculiarities of topic perception.
- **The output forms part of the holistic personality portrait. Details cannot be omitted.**

**Output format — markdown.**

Output structure:

\`\`\`markdown
## Personality Summary for this Topic
- [Conclusion based on interview]
\`\`\`
`,

}

export const COMMON_PART_OF_PORTRAIT_PROMPTS = `
\n
**PRIORITY:** Generate maximally detailed data, record everything, even small and insignificant details
`