---
description: Review code or content acting as a specific reviewer persona.
---
# Review Workflow

## Purpose
Perform a comprehensive review of code, documentation, or other content, acting as a specialized reviewer (Code Reviewer, Content Editor, Security Auditor, etc.).

## Usage
```
/review [target] [--persona=TYPE] [--type=TYPE]
```

## Arguments
- `target`: The file(s), directory, or scope to review. Defaults to `staged` changes if not specified.
  - Examples: `src/utils.ts`, `staged`, `docs/`, `pr`
- `--persona`: The role the AI should adopt.
  - Options: `code-reviewer` (default for code), `content-editor` (default for docs), `security-auditor`, `qa-engineer`, `product-manager`.
- `--type`: Explicitly set the content type.
  - Options: `code`, `content`, `design`.

## Workflow

### Phase 1: Context & Setup
1. **Identify Target**: Determine what needs to be reviewed.
   - If `staged` (or default): Use `git diff --staged` to get changes.
   - If file/dir: Read the specific content.
2. **Select Persona**:
   - If user specified `--persona`, adopt that role.
   - Else, infer from file extensions:
     - `.ts`, `.py`, `.java` -> **Code Reviewer**
     - `.md`, `.txt`, `.doc` -> **Content Editor**
3. **Load Standards**:
   - Read `.agent/rules/global.md` and any language-specific rules (e.g., `.agent/rules/python.md`) to understand project standards.

### Phase 2: The Review Process

#### A. Code Reviewer Persona
**Focus**: Correctness, Efficiency, Maintainability, Security.
1. **Correctness**: Look for logic bugs, race conditions, edge cases.
2. **Security**: Sanitize inputs, check auth/authz, no secrets in code.
3. **Style**: Compliance with project patterns and linting rules.
4. **Tests**: Ensure tests exist and cover the changes.

#### B. Content Editor Persona
**Focus**: Clarity, Grammar, Tone, Structure.
1. **Clarity**: Is the message clear? Are sentences concise?
2. **Tone**: Does it match the project's voice (Professional, Friendly, Technical)?
3. **Structure**: Logical flow, properties headings, correct markdown.
4. **Accuracy**: Do the instructions matching the actual code/logic?

#### C. Security Auditor Persona
**Focus**: Vulnerabilities, Risks, Compliance.
1. **Vulnerabilities**: OWASP Top 10 (Injection, Broken Auth, etc.).
2. **Data**: Is PII handled correctly? Encryption used?

### Phase 3: Output Generation
Produce a report in the following format:

```markdown
# Review Report: [Target]
**Persona**: [Selected Persona]
**Verdict**: [Approve / Request Changes / Discuss]

## 🚨 Critical Issues (Must Fix)
- [ ] **[Location]**: [Startling problem description]
  - *Context*: Why this is critical.
  - *Fix*: Code snippet or specific instruction.

## ⚠️ Important Improvements (Should Fix)
- [ ] **[Location]**: [Issue description]
  - *Context*: Explanation.
  - *Fix*: Proposed solution.

## 💡 Suggestions (Nice to have)
- [ ] [Suggestion description]

## ✨ What's Good
- [Specific positive feedback]
```

## Flags
- `--fix`: If set, the AI should attempt to auto-apply the "Critical" and "Important" fixes after the review (requires user confirmation).
