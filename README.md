# AgCel (Antigravity Cell)

AgCel is the **Automated Governance Layer** for your software projects. It provides a unified source of truth for standards, rules, and AI-driven workflows, ensuring consistent quality across diverse tech stacks.

## 🚀 Quick Install
To add AgCel standards and AI capabilities to *any* project, run:

```bash
curl -sL https://raw.githubusercontent.com/hoangna1204/ag-cel/main/install.sh | bash
```

This installs the `.agent/` folder, enabling your AI agent to understand your project's strict rules and workflows seamlessly.

---

## 🧠 Core Features

### 1. Global Rules
The source of truth for all AI interactions.
- **[Global Rules](.agent/rules/global.md)**: Defines the "No Assumption Policy", TDD Mandate, and Operational Workflows.

### 2. Tech Stack Standards
Automatically applied based on project detection (`pom.xml`, `package.json`, etc.).
- **[Java/Spring Boot](.agent/rules/springboot.md)**: DTOs, Hexagonal Arch, Flyway.
- **[Python](.agent/rules/python.md)**: FastAPI, Pydantic, Alembic.
- **[Node.js](.agent/rules/nodejs.md)**: Fastify, TypeBox, BullMQ.
- **[React/Next.js](.agent/rules/react.md)**: Server Components, Shadcn, TypeScript.

### 3. AI Workflows (Slash Commands)
Executable Standard Operating Procedures (SOPs).
- `/init_service`: Scaffolds a new service (Java/Python/Node) complete with Docker/Tests.
- `/implement_feature`: Enforces Red-Green-Refactor TDD cycles.
- `/pre_commit_check`: Runs API contract tests + Code Review before you push.

### 4. Role Guides
Detailed standards for human team members:
- [Developer](docs/roles/developer.md)
- [Product Owner](docs/roles/product-owner.md)
- [QA / Tester](docs/roles/tester.md)

---

## 🤖 How It Works with AI
Once installed, your AI agent (Antigravity) will:
1.  **Auto-Detect**: Scan your repo and load the correct rules (e.g., "Ah, this is a Spring Boot app").
2.  **Enforce**: Refuse to write code without tests (TDD mandate).
3.  **Assist**: Use Skills like `scaffold_service` or `api_contract_tests` to perform complex tasks autonomously.
