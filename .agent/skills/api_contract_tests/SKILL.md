---
name: API Contract Tests
description: Validates running services against their OpenAPI/Swagger specifications.
---

# API Contract Tests

## Usage
Run this skill to verify that the implementation matches the design (OpenAPI spec).

## Steps

1. **Locate Spec**:
   - Find the `openapi.yaml` or `swagger.json` file.
   - If missing, generate it (e.g., hit `GET /openapi.json` on FastAPI or `/v3/api-docs` on Spring Boot).

2. **Setup Validation Tool**:
   - Use a tool like `schemathesis` (Python) or `dredd` (Node).
   - If not installed, propose a temporary installation or use a Docker container.
   - Command: `docker run --network host schemathesis/schemathesis:stable run http://localhost:[PORT]/openapi.json`

3. **Execute**:
   - Run the validation against the local local server (ensure it is running first!).

4. **Report**:
   - Summarize any contract violations (e.g., "Endpoint /users returned 200 but spec says 201").
   - If failures exist, propose a fix to the code OR the spec (ask user which is the source of truth).
