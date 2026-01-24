---
name: Docker Compose Generator
description: Auto-generates a docker-compose.yml file by scanning the workspace for Dockerfiles.
---

# Docker Compose Generator

## Usage
Use when the user wants to run the whole stack or multiple services locally.

## Steps

1. **Scan Workspace**:
   - Use `find_by_name` to locate all `Dockerfile`s in the workspace.

2. **Analyze Services**:
   - For each Dockerfile found, infer the service name from the directory name.
   - Detect necessary environment variables (reading `.env.example` or code).
   - Detect ports (EXPOSE instruction in Dockerfile or standard ports like 8080, 3000).

3. **Generate Configuration**:
   - Create or update `docker-compose.yml`.
   - **Services**: Define a service block for each application.
   - **Databases**: If a service needs a DB (detected via `pom.xml`/`package.json` drivers), add a `postgres` or `redis` service image.

4. **Network**:
   - Put all services on a shared network `agcel-network`.

5. **Validation**:
   - Run `docker-compose config` to validate the syntax.
