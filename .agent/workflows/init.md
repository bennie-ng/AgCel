---
description: Initialize a new microservice (Java/Python/Node) and wire it into the ecosystem.
---
# Initialize Service Workflow

## 1. Scaffold the Codebase
- **Goal**: Create the directory structure and boilerplate code.
- **Action**: Run the `scaffold_service` skill.
- **Wait**: Wait for the user to provide inputs (Language, Service Name, Group ID).

## 2. Integrate with Infrastructure
- **Goal**: Ensure the new service can run locally alongside others.
- **Action**: Run the `docker_compose_generator` skill.
  - This scans the new Dockerfile created in Step 1 and adds it to `docker-compose.yml`.

## 3. Verify Build
// turbo
- **Goal**: Confirm the new service compiles and starts.
- **Action**:
  - Detect the build command (e.g., `./mvnw clean package`, `npm run build`).
  - Run the command.
  - If successful, notify the user: "Service [Name] created and validated."
