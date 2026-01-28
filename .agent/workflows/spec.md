---
description: Turn a vague feature request into structured User Stories and Acceptance Criteria.
---
# Spec Feature Workflow (Business Analyst)

## 1. Gather Context
- **Goal**: Understand what the user wants to build.
- **Action**: Ask clarifying questions if the initial request is vague (e.g., "What is the goal of the referral system? Who is the target user?").

## 2. Apply Analyst Standards
- **Goal**: Ensure the output follows BA best practices.
- **Action**: Read `docs/roles/business-analyst.md` to load INVEST and MoSCoW criteria.

## 3. Generate Artifact: requirements.md
- **Goal**: Create the "Source of Truth" for the feature.
- **Action**: Create/Update `requirements.md` with:
  - **Overview**: High-level summary.
  - **User Stories**: "As a [Role], I want to [Action], so that [Benefit]".
  - **Acceptance Criteria**: Detailed bullet points or Gherkin scenarios (Given/When/Then).
  - **Out of Scope**: Explicitly state what we are NOT building (MoSCoW - "Won't Have").

## 4. User Review
- **Goal**: Sign-off.
- **Action**: Ask the user: "Does this fully capture your intent? Should we refine any Acceptance Criteria?"
