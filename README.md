# AgCel

AgCel (Antigravity Cell) is a repository for project standards, rules, and commands tailored for various roles and technologies. It aims to provide a unified source of truth for software development best practices.

## Global Rules
- [Global Rules](.agent/rules/global.md)

## Roles

Detailed guides and standards for specific roles within the team:

- [Business Analyst](docs/roles/business-analyst.md)
- [Product Owner](docs/roles/product-owner.md)
- [Product Manager](docs/roles/product-manager.md)
- [Developer](docs/roles/developer.md)
- [Tester](docs/roles/tester.md)
- [UI/UX Designer](docs/roles/ui-ux-designer.md)

## Standards

Technical standards and coding guidelines:

- [Python](docs/standards/python.md)
- [Java](docs/standards/java.md)
- [Web (React/Node.js)](docs/standards/web.md)
- [Mobile (iOS/Android)](docs/standards/mobile.md)
- [Database](docs/standards/database.md)

## Workflows (Commands)

Executable AI workflows and commands are located in:
- [Workflows](.agent/workflows/)


## Templates

Project templates and skeletons are located in the `templates/` directory.

## How to Use AgCel

### For New Projects
1.  **Reference**: Use this repository as a guide when setting up new projects.
2.  **Adoption**: Copy relevant standards (e.g., `docs/standards/python.md`) into your new project's documentation folder.

### For Antigravity (AI) Context
To ensure the AI follows these standards and rules in your new workspace:
1.  **Add Context**: Add the `ag-cel` repository (or specific files like `global-rules.md` and role-specific docs) to the AI's context.
2.  **Instruction**: Explicitly tell the AI: *"Reference the @ag-cel standards for this project, specifically the Global Rules and Developer standards."*
3.  **Enforcement**: The AI will then be aware of the "No Assumption Policy" and other best practices defined here.
