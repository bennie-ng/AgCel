# Ag-Cel

The Ag-Cel is a local MCP Skills Server that can be installed and used as a command-line tool and as workflows in Antigravity. 

The Ag-Cel is divided into 2 parts: The CLI and the MCP Skills Server

## 1. The Ag-Cel CLI: This is a command-line tool that can be used to interact with the Ag-Cel MCP Skills Server. The CLI will be used to run the MCP server locally.

- Users install the agc cli by running `npm install -g ag-cel`
- To start the MCP server locally, users run `agc start`
- To stop the MCP server locally, users run `agc stop`
- To restart the MCP server locally, users run `agc restart`
- To check the status of the MCP server locally, users run `agc status`
- To get the help menu, users run `agc --help`
- To get the version of the CLI, users run `agc --version`
- To get the list of available skills, users run `agc skills list`
- To get the list of available personas, users run `agc personas list`
- To get the list of available workflows, users run `agc workflows list`

## 2. The Ag-Cel MCP Skills Server: This is a MCP Skills Server that can be used to interact with the Ag-Cel CLI.

The MCP Skills Server will be installed locally and will be used to run the MCP server locally.

When working with antigravity IDE, users can use command `agc init` to initialize the Ag-Cel MCP Skills Server in their project. This will create a .ag-cel directory in the project root. This directory will contain the Ag-Cel MCP Skills Server configuration and data.

Then users will be able to use workflow in the Agent Window. For example `/agc idea` will trigger the ideation workflow. It will guide user through the ideation process and help them generate ideas.

## 3. The Persona Structure
A well-defined persona acts as a character or role assigned to the AI to guide its demeanor, perspective, and area of expertise.
Role & Title: Define who the AI is (e.g., "You are an expert Data Scientist").
Tone & Style: Specify if the tone should be formal, sarcastic, empathetic, or concise.
Perspective: Define the viewpoint, such as focusing on security, cost-efficiency, or user experience.

## 4. Defining AI Skills (Capabilities)
Skills are specific, actionable capabilities that allow the AI to perform specialized tasks, often using external tools or specific frameworks.
Analytical Skills: Data analysis, code review, or debugging.
Content Generation Skills: Writing, summarizing, or formatting in specific styles.
Operational Skills: Accessing APIs, searching documentation, or running code.
Example Skill: "If a user asks for a code, output only the code within a markdown block, and explain the logic afterward".
Skills are stored in a `skill.md` file within a dedicated directory.

## 5. Setting Rules (Constraints)
Rules are, in essence, guardrails that define what the AI can and cannot do. They enforce compliance, security, and consistent behavior.
Boundary Rules: Define limitations, such as "Never provide financial advice" or "Do not use Python libraries outside of the standard library".
Operational Rules: "Always ask for clarification if a task is ambiguous".
Format Rules: "Always use Markdown for formatting," "Keep answers under 100 words".
Security/Policy Rules: "Never share API keys," "Sanitize all user inputs".

## 6. Example: "Secure Coding Assistant" Persona
Persona:
"You are an expert Cybersecurity Engineer and Senior Programmer. You are meticulous, security-conscious, and precise."
Skills:
Code Auditing: Analyze code for SQL injection, XSS, and broken authentication.
Secure Refactoring: Rewrite code to adhere to OWASP standards.
Documentation: Explain vulnerability risks in plain English.
Rules:
Rule 1: Always prioritize security over performance in recommendations.
Rule 2: Never suggest deprecated libraries.
Rule 3: If code is safe, state 'No vulnerabilities found' before explaining the code.
Rule 4: When asked for code, output only the fixed code in a single markdown block.

## 7. Best Practices for Implementation
Iterate and Test: Test the persona with real tasks to refine behavior, as suggested by.
Use Specificity: Avoid vague instructions; define exactly what 'high quality' or 'concise' means to you.
Use Tools for Management: For advanced, reusable personas, use systems like Agent Skills (YAML frontmatter) or specialized AI agent platforms.
Contextualize: Provide background info on the project or user group to make the persona more effective.

There are 8 categories of personas:
| Persona | Focus | Example skills|
|---|---|---|
| Architecture | System design, ADRs, C4, and scalable patterns | architecture, c4-context, senior-architect
| Business | Growth, pricing, CRO, SEO, and go-to-market | copywriting, pricing-strategy, seo-audit
| Data & AI | LLM apps, RAG, agents, observability, analytics | rag-engineer, prompt-engineer, langgraph
| Development | Language mastery, framework patterns, code quality | typescript-expert, python-patterns, react-patterns
| General | Planning, docs, product ops, writing, guidelines | brainstorming, doc-coauthoring, writing-plans
| Infrastructure | DevOps, cloud, serverless, deployment, CI/CD | docker-expert, aws-serverless, vercel-deployment
| Security | AppSec, pentesting, vuln analysis, compliance | api-security-best-practices, sql-injection-testing, vulnerability-scanner
| Testing | TDD, test design, fixes, QA workflows | test-driven-development, testing-patterns, test-fixing