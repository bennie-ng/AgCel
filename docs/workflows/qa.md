---
description: Generate a comprehensive Test Plan based on requirements.
---
# Plan QA Workflow (Tester/QA)

## 1. Analyze Requirements
- **Goal**: actionable inputs for the plan.
- **Action**: Read `requirements.md` or the active `task.md`.

## 2. Apply QA Standards
- **Goal**: Ensure coverage across the pyramid.
- **Action**: Read `docs/roles/tester.md` to understand the Testing Pyramid and Defect Reporting standards.

## 3. Generate Artifact: test_plan.md
- **Goal**: A roadmap for verification.
- **Action**: Create `test_plan.md` (or append to `requirements.md`) with:
  - **Unit Test Candidates**: Identify complex logic/calculations needing strict isolation.
  - **Integration Scenarios**: Happy paths and error states for API endpoints.
  - **Edge Cases**: Boundary values (min/max), null inputs, security checks.
  - **Manual/UI Checks**: Visual elements or interactions hard to automate.

## 4. Integration
- **Goal**: Handover to Developer.
- **Action**: Advise the user/agent: "Use this Test Plan as the checklist for the 'Red' phase in TDD."
