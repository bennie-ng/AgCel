import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "AgCel",
  description: "Automated Governance Layer for AI Agents",
  base: '/ag-cel/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Rules', link: '/rules/global' },
      { text: 'Workflows', link: '/workflows/implement_feature' },
      { text: 'Skills', link: '/skills/test_driven_development' },
      { text: 'Roles', link: '/roles/developer' },
    ],

    sidebar: {
      '/rules/': [
        {
          text: 'AgCel Rules',
          items: [
            { text: 'Global Rules', link: '/rules/global' },
            { text: 'Java / Spring Boot', link: '/rules/springboot' },
            { text: 'Python', link: '/rules/python' },
            { text: 'Node.js', link: '/rules/nodejs' },
            { text: 'React', link: '/rules/react' },
            { text: 'Mobile', link: '/rules/mobile' },
            { text: 'Database', link: '/rules/database' }
          ]
        }
      ],
      '/workflows/': [
        {
          text: 'Workflows',
          items: [
            {
              text: 'Understand & Research', items: [
                { text: 'Market Research', link: '/workflows/research_market' },
                { text: 'Brainstorm', link: '/workflows/brainstorm' },
                { text: 'Spec Feature', link: '/workflows/spec_feature' },
              ]
            },
            {
              text: 'Design & Plan', items: [
                { text: 'Design Solution', link: '/workflows/design_solution' },
                { text: 'Draft ADR', link: '/workflows/draft_adr' },
                { text: 'Plan QA', link: '/workflows/plan_qa' },
              ]
            },
            {
              text: 'Build & Deploy', items: [
                { text: 'Init Service', link: '/workflows/init_service' },
                { text: 'Implement Feature', link: '/workflows/implement_feature' },
                { text: 'TDD', link: '/workflows/tdd' },
                { text: 'Report Bug', link: '/workflows/report_bug' },
                { text: 'Pre-Commit Check', link: '/workflows/pre_commit_check' },
                { text: 'Checkpoint', link: '/workflows/checkpoint' },
              ]
            }
          ]
        }
      ],
      '/skills/': [
        {
          text: 'Skills',
          items: [
            {
              text: 'Development', items: [
                { text: 'TDD Strict', link: '/skills/test_driven_development' },
                { text: 'React Best Practices', link: '/skills/react-best-practices' },
                { text: 'Web Design Guidelines', link: '/skills/web-design-guidelines' },
                { text: 'Scaffold Service', link: '/skills/scaffold_service' },
              ]
            },
            {
              text: 'Reasoning & Analysis', items: [
                { text: 'Sequential Thinking', link: '/skills/sequential_thinking' },
                { text: 'Code Review Assistant', link: '/skills/code_review_assistant' },
                { text: 'Generate Arch Diagrams', link: '/skills/generate_architecture_diagrams' },
              ]
            },
            {
              text: 'Ops & Testing', items: [
                { text: 'Docker Compose', link: '/skills/docker_compose_generator' },
                { text: 'API Contract Tests', link: '/skills/api_contract_tests' },
                { text: 'DB Migration', link: '/skills/database_migration_helper' },
                { text: 'Accessibility Audit', link: '/skills/accessibility_audit' },
              ]
            }
          ]
        }
      ],
      '/roles/': [
        {
          text: 'Roles',
          items: [
            { text: 'Developer', link: '/roles/developer' },
            { text: 'Product Owner', link: '/roles/product-owner' },
            { text: 'Tester / QA', link: '/roles/tester' },
            { text: 'Business Analyst', link: '/roles/business-analyst' },
            { text: 'Market Researcher', link: '/roles/market-researcher' },
            { text: 'System Architect', link: '/roles/system-architect' },
            { text: 'Solution Designer', link: '/roles/solution-designer' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hoangna1204/ag-cel' }
    ]
  }
})
