---
name: Code Review Assistant
description: Reviews staged or active code changes against the project's Rule System (.agent/rules).
---

# Code Review Assistant

## Usage
Run this before committing code or when the user asks for a "review".

## Steps

1. **Gather Context**:
   - Read `.agent/rules/global.md`.
   - Detect the stack and read the specific rule file (e.g., `.agent/rules/python.md`).

2. **Analyze Changes**:
   - Read the changed files.
   - **Checklist**:
     - **TDD**: Do tests exist for the new logic?
     - **Types**: Are explicit types used (no `any`)?
     - **Styles**: Does it follow the naming/structure conventions?
     - **Safety**: Are inputs validated? (Pydantic/Zod/DTOs).
     - **Errors**: Are exceptions generic (`Exception`) or specific (`UserNotFound`)?

3. **Output Report**:
   - Generate a markdown list of:
     - ✅ Passed Checks
     - ⚠️ Warnings (Suggestions)
     - 🛑 Critical Violations (Must Fix)

4. **Auto-Fix (Optional)**:
   - If obvious violations exist (e.g., missing return type), propose an immediate fix using `replace_file_content`.
