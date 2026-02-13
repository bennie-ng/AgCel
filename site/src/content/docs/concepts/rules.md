---
title: Rules
description: Understanding AgCel Rules
---

**Rules** act as guardrails for your AI agents, ensuring they behave consistently and safely.

## Types of Rules

### Boundary Rules
These define what the AI should *not* do.
-   "Do not access the internet unless explicitly asked."
-   "Do not modify files outside the current workspace."

### Operational Rules
These define *how* the AI should perform tasks.
-   "Always ask for clarification if a request is ambiguous."
-   "Think step-by-step before providing a solution."

### Security Rules
These protect sensitive information and systems.
-   "Never output API keys or passwords in plain text."
-   "Sanitize all user inputs before processing."

## Defining Rules

Rules can be embedded directly into `SKILL.md` files or defined globally (e.g., "Iron Rules").

## Iron Rules

"Iron Rules" are global rules that apply to **every** interaction with AgCel skills. They are automatically injected by the AgCel server to ensure a baseline of behavior.

Currently, the following Iron Rule is enforced:
> 1. If there is anything unclear, ask the user instead of inventing new stuff. Unless the user explicitly tells the AI to invent or suggest ideas.

Example in `SKILL.md`:

```markdown
# Python Expert

...

## Rules
1. Always type-hint functions.
2. Follow PEP 8 guidelines.
```
