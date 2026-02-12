---
title: Rules
description: Understanding Ag-Cel Rules
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

Rules can be embedded directly into `SKILL.md` files or defined globally (future feature).

Example in `SKILL.md`:

```markdown
# Python Expert

...

## Rules
1. Always type-hint functions.
2. Follow PEP 8 guidelines.
```
