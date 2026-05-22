const PREAMBLE = `The "Digital Replicant" project creates a digital twin based on the user's personality. Your task is to analyse the interview and produce a detailed output for the section described below.

**Important:**
You must only consider factual data from the interview. Any assumptions, guesses, or speculations are prohibited.

**Required requirements:**
- The output must be as detailed, complete, and extensive as possible.
- Do not shorten or simplify formulations for the sake of compactness.
- All details revealing the person's attitudes and views must be preserved. Only direct repetitions may be removed.
- **The output forms part of the holistic personality portrait, so every detail matters and must be recorded. Do not omit or generalize nuances.**

**Output format — markdown.**`

export const PORTRAIT_PROMPTS = {
  'Core beliefs': `
${PREAMBLE}

Output structure:

\`\`\`markdown
## Core Attitudes and Views
- [First key belief/view]
- [Second key belief/view]
- [And so on until all are recorded]
\`\`\`
`,

  'Evolutions of views': `
${PREAMBLE}

Additional guidance:
- Indicate reasons or occasions for changes if they were mentioned.
- Record all mentioned changes in views, attitudes, and the person's relationship to this topic at different stages of life.

Output structure:

\`\`\`markdown
## Evolution of Views and Attitudes
- [Description of change, time/age (if specified), reason (if specified)]
- [Next change and its description]
\`\`\`
`,

  'Emotional background': `
${PREAMBLE}

Additional guidance:
- Indicate what emotions accompanied the responses.
- Note if the person has any peculiarities in their emotional communication style.

Output structure:

\`\`\`markdown
## Emotional Background
- [Description of emotion or emotional state in a specific statement]
- [Continue for each episode]
\`\`\`
`,

  'Key events and memories': `
${PREAMBLE}

Additional guidance:
- List all life episodes, events, and memories that the person mentioned in the interview on this topic.
- Indicate if the event is related to another topic.

Output structure:

\`\`\`markdown
## Key Events and Memories
- [Description of event or memory, date or age (if available)]
- [Next event]
\`\`\`
`,

  'Causal links': `
${PREAMBLE}

Additional guidance:
- Build cause-and-effect relationships between events, experiences, and changes in views if these connections are explicitly evident from the interview.
- Indicate connections between topics if they were explicitly mentioned.

Output structure:

\`\`\`markdown
## Cause-and-Effect Relationships
- [Description of connection: event — cause — effect]
\`\`\`
`,

  'Speech patterns': `
${PREAMBLE}

Additional guidance:
- Identify characteristic speech patterns, communication style, favorite phrases, expressions, and intonations of the person on this topic.
- Note intersections of patterns with other topics.

Output structure:

\`\`\`markdown
## Speech Patterns and Communication Style
- [Description of speech features, phrases, expressions]
\`\`\`
`,

  'Inner contradictions': `
${PREAMBLE}

Additional guidance:
- Identify internal contradictions in the interview on this topic: mismatches between current views and past attitudes, inconsistencies in logic or emotional assessments.

Output structure:

\`\`\`markdown
## Internal Contradictions
- [Description of contradiction: what contradicts what]
\`\`\`
`,
  'Biographical summary': `
${PREAMBLE}

**What needs to be recorded (only if explicitly stated in the interview, otherwise skip the field):**
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
`,

  'Personality summary': `
${PREAMBLE}

Additional guidance:
- Summarize conclusions about the person on this topic based on the interview.
- Indicate character traits, attitudes, peculiarities of topic perception.

Output structure:

\`\`\`markdown
## Personality Summary for this Topic
- [Conclusion based on interview]
\`\`\`
`,
} as const