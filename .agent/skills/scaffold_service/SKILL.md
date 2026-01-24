---
name: Scaffold Service
description: Generates a new microservice project structure compliant with AgCel standards for Java, Python, or Node.js.
---

# Scaffold Service

## Usage
Use this skill when the user asks to "create a new [language] service" or "bootstrap a new project".

## Steps

1. **Identify Language**:
   - Ask the user for the desired language (Java/Spring Boot, Python/FastAPI, Node.js/Fastify) if not specified.
   - Ask for the Service Name (e.g., `user-service`, `billing-worker`).

2. **Python (FastAPI) Structure**:
   - Determine target directory (default to current).
   - Create a folder `[service-name]`.
   - Setup `pyproject.toml` or `requirements.txt` with `fastapi`, `uvicorn`, `pydantic`.
   - Create `src/main.py` with a health check route `/v1/health`.
   - Create `tests/` folder with `conftest.py`.
   - **Apply Rule**: Ensure `APIRouter` is used and Pydantic models are in a separate file.

3. **Java (Spring Boot) Structure**:
   - Ask for user's Group ID (e.g., `com.example`, `io.startup`).
   - Create standard Maven structure: `src/main/java/[group_id]/[service]`.
   - Create `build.gradle` or `pom.xml`.
   - Create main Application class annotated with `@SpringBootApplication`.
   - **Apply Rule**: Ensure `GlobalExceptionHandler` is created.

4. **Node.js (Fastify) Structure**:
   - Create `package.json` with `fastify`, `@fastify/type-provider-typebox`.
   - Create `src/app.ts` and `src/server.ts`.
   - **Apply Rule**: Ensure strict validation and schema registration.

5. **Post-Scaffold**:
   - Run `git init` inside the service if it's a standalone repo, or commit to the monorepo.
   - Run the build/install command (e.g., `npm install`, `poetry install`) to verify dependencies.
