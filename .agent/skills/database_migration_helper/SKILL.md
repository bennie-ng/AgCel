---
name: Database Migration Helper
description: Abstracts the creation and execution of database migrations across different tech stacks.
---

# Database Migration Helper

## Usage
Use when the user asks to "create a migration" or "update the database schema".

## Steps

1. **Detect Stack**:
   - Look for `alembic.ini` (Python), `flyway.conf` (Java), or `schema.prisma` (Node).

2. **Action: Create Migration**:
   - **Python (Alembic)**:
     - Command: `alembic revision --autogenerate -m "[message]"`
   - **Node (Prisma)**:
     - Command: `npx prisma migrate dev --name [message]`
   - **Java (Flyway)**:
     - Create a timestamped SQL file in `src/main/resources/db/migration/V[timestamp]__[message].sql`.

3. **Action: Apply Migration**:
   - **Python**: `alembic upgrade head`
   - **Node**: (Prisma applies automatically with migrate dev)
   - **Java**: `mvn flyway:migrate` or `./gradlew flywayMigrate`

4. **Verify**:
   - Check the database (if possible) to ensure the table/column exists.
