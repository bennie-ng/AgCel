# React & Next.js: 2026 Rules Template

## 0. General Standards
- **Language**: TypeScript is mandatory for all new code.
- **Linting**: Use `ESLint` and `Prettier` with the project's configuration.
- **Components**: Use Functional Components with Hooks.

### Performance & Security
- **Best Practices**: heavily relies on the patterns defined in the `react-best-practices` skill. Consult it for deep performance optimizations.
- **No Barrel Files**: Do not use barrel files (index.ts re-exports) for components or utilities. Import directly from the source file to optimize tree-shaking and build speeds. (e.g., `import { Button } from '@/components/ui/button'` is okay if button.tsx exports it, but avoid `import { Button } from '@/components'`).

### Testing Guidelines
- **Component Tests**: Test user interactions (clicks, inputs) rather than internal implementation details.
- **Queries**: Always prefer `getByRole` or `getByText` over CSS selectors.
- **State Management**: Write tests for reducers/hooks before building the UI components.
- **E2E**: Use Playwright/Cypress for critical paths (e.g., Login, Checkout).

## 1. Architectural Strategy: Server vs. Client
In the App Router, every component is a **Server Component** by default. Your goal is to keep the "client boundary" as far down the component tree as possible.

- **Rule 1: Colocate Data Fetching**
  - Fetch data directly in the Server Component where it is used. Avoid passing data through multiple layers of props (Prop Drilling).
  - *Why*: Server Components have direct access to your backend/database, reducing the "Waterfall" effect of multiple client-side API calls.

- **Rule 2: "Leaf" Client Components**
  - Only add the 'use client' directive to small, interactive elements (leaf nodes) like a LikeButton or SearchBar.
  - *Why*: This keeps the initial JavaScript bundle small and improves **First Contentful Paint (FCP)**.

- **Rule 3: Use the React Compiler**
  - Stop manually adding `useMemo` and `useCallback` unless you have a specific edge case. The compiler now handles dependency tracking and memoization automatically.

## 2. Event-Driven Logic: Server Actions
Server Actions are the standard for handling mutations (POST/PUT/DELETE) in 2026, replacing traditional `/api` route handlers for internal app logic.

- **Rule 1: Use Module-Level Actions**
  - Group related actions in a file (e.g., `@/lib/actions/user.ts`) with `'use server'` at the top.

- **Rule 2: Progressive Enhancement**
  - Always use the `action` attribute on `<form>` rather than `onClick` handlers.
  - *Why*: This ensures the form works even if JavaScript hasn't fully loaded or is disabled.

- **Rule 3: Optimistic Updates with useOptimistic**
  - For a "snappy" feel, use the `useOptimistic` hook to update the UI immediately while the Server Action processes in the background.

# 3. TypeScript Best Practices (Modern Standards)
TypeScript in 2026 is stricter and more integrated with the Next.js App Router.

- **Rule 1: Async Layout & Page Props**
  - In Next.js 15+, `params` and `searchParams` are asynchronous. You must await them before use.

```TypeScript
// app/blog/[slug]/page.tsx
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <div>Post: {slug}</div>;
}
```

- **Rule 2: Typed Server Actions**
  - Define the return type of your actions to handle both success and validation errors.

```TypeScript

export type ActionState = { error?: string; success?: boolean } | null;
```

- **Rule 3: Use `ComponentProps` for Wrappers**
  - When wrapping HTML elements, use `React.ComponentProps<"button">` to ensure all standard HTML attributes are typed correctly.

## 4. Project Organization (Feature-Based)
Avoid the "folders by type" (components/, hooks/) anti-pattern for large apps.

- **Rule 1: Use Route Groups for Organization**
  - Use parentheses to group routes without affecting the URL (e.g., `app/(auth)/login`).

- **Rule 2: Feature-Based Colocation**
  - Store components, hooks, and types related to a specific feature inside that feature's directory.

- **Rule 3: The `src` Directory**
  - Always use a `src/` folder to separate application logic from configuration files (like `next.config.js`, `tailwind.config.ts`).

# UI & Design Rules: The shadcn + tweakcn Standard
## 1. Architectural Strategy: Component Ownership
Unlike standard npm packages, shadcn/ui components are source-code dependencies.

- **Rule 1: No Direct Library Imports**
  - **Prohibited**: Importing complex UI components from a hidden node_module.
  - **Mandatory**: Use `npx shadcn@latest add [component]` to pull the source code into `@/components/ui`.
  - *Why*: This allows the team to modify the accessibility or styling logic of a component directly without waiting for a library update.

- **Rule 2: Radix UI as the Foundation**
  - All custom interactive components must be built on top of **Radix UI Primitives**. Never build raw accessible components (like Modals or Selects) from scratch.

## 2. Theming & Visual Strategy: tweakcn
**tweakcn** is used to solve the "shadcn clone" look by providing a visual editor for your Tailwind configuration.

- **Rule 3: Visual-First Theming**
  - Use `tweakcn` to generate your `globals.css` variables.
  - **Theming Workflow:**
    1. Design the theme visually in tweakcn (Colors, Radius, Shadows).
    2. Export the CSS variables for `:root` and `.dark`.
    3. Paste the output into your project's `src/app/globals.css`.

- **Rule 4: Semantic Color Variables**
  - Do not use hardcoded Tailwind hex codes in your components (e.g., `text-[#3b82f6]`).
  - **Always use CSS variables** mapped to shadcn tokens: `text-primary`, `bg-background`, `border-input`.

## 3. Implementation Rules (Next.js 15 + React 19)
- **Rule 5: Ref Forwarding in React 19**
  - With React 19, `forwardRef` is deprecated. Use the `ref` prop directly in your functional components. shadcn components added in 2026 follow this pattern natively.

- **Rule 6: The cn Utility**
  - Always use the `@/lib/utils` `cn()` function to merge Tailwind classes.
  - Correct: `<div className={cn("p-4", isActive && "bg-blue-500", className)} />`
