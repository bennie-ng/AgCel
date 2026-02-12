---
title: Skills
description: Understanding Ag-Cel Skills
---

**Skills** are the core building blocks of Ag-Cel. They represent specific capabilities that an AI agent can perform.

## Anatomy of a Skill

A skill is defined by a directory structure containing a `SKILL.md` file.

```text
skills/
└── my-skill/
    └── SKILL.md
```

### SKILL.md Format

The `SKILL.md` file contains the instructions and context for the skill.

```markdown
# My Skill

This skill does something useful.

## Usage

When the user asks for X, do Y.
```

## Creating a New Skill

To create a new skill:
1.  Create a new directory in your `skills` folder.
2.  Add a `SKILL.md` file with clear instructions.
3.  (Optional) Add any supporting files or scripts.

## Using Skills

Once a skill is created, it is automatically detected by the Ag-Cel server and made available to connected AI agents.
