---
description: comprehensive check before committing or merging code.
---
# Pre-Commit Check Workflow

## 1. Compliance Scan
- **Goal**: Catch style and rule violations.
- **Action**: Run the `code_review_assistant` skill.
  - If "Critical Violations" are found, **STOP** and ask the user to fix them (or offer to fix).

## 2. API Contract Validation
- **Goal**: Ensure no breaking changes to the API contract.
- **Action**: Run the `api_contract_tests` skill.
  - Note: This might require starting the app in the background. If so, start it, run tests, then stop it.

## 3. Standard Test Suite
// turbo
- **Goal**: Ensure no regressions.
- **Action**: Run the project's standard test command (e.g., `npm test`, `pytest`, `mvn test`).

## 4. Final Report
- **Goal**: Give the user a "Green Light".
- **Action**:
  - If all checks pass, output: "✅ All checks passed. Ready to commit."
  - If any check fails, summarize the failure.
