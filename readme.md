# Nexium Media — Engineering Documentation Portal

Welcome to the central engineering documentation portal and handbook for **[Nexium Media](https://www.nexiummedia.com/)**. 

This portal acts as the single source of truth for our distributed team of 100+ software engineers, designers, and product leaders. It houses comprehensive standards, architecture handbooks, API guidelines, frontend and backend conventions, GitHub workflows, and release processes.

---

## 🛠️ Technology Stack

The documentation portal is built using modern web standards for blazing-fast performance, static type safety, and seamless DX:

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) powered by Turbopack
- **UI & Documentation Engine**: [Fumadocs](https://fumadocs.dev/) (`fumadocs-ui`, `fumadocs-core`, `fumadocs-mdx`)
- **Runtime & React**: [React 19](https://react.dev/) + React Server Components (RSC)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with CSS variables for light/dark themes
- **Icons**: [Lucide React](https://lucide.dev/)
- **Syntax Highlighting**: Shiki with automatic dark/light theme switching

---

## 📁 Repository Structure

```text
nm-storybook/
├── app/                           # Next.js App Router
│   ├── (home)/                    # Landing page & marketing layout
│   ├── api/                       # API route handlers (search, metadata)
│   ├── docs/                      # Fumadocs dynamic docs layout & catch-all page [[...slug]]
│   ├── layout.tsx                 # Root layout with ThemeProvider & RootProvider
│   └── globals.css                # Global CSS variables & Tailwind v4 imports
├── content/                       # Markdown & MDX documentation content
│   └── docs/                      # Documentation root
│       ├── company/               # About Nexium Media, vision, team culture
│       ├── getting-started/       # Onboarding, environment setup, developer access
│       ├── development/           # Engineering handbooks & technical guides
│       │   ├── frontend/          # Complete Frontend Engineering Handbook (React, Next.js, Angular)
│       │   ├── backend/           # Complete Backend Engineering Handbook (Express, FastAPI)
│       │   └── github/            # Git workflow, branch naming, PRs, code reviews
│       ├── processes/             # Sprint planning, deployment, and operational workflows
│       └── support/               # Troubleshooting guides, FAQs, and developer help
├── lib/                           # Source loaders and Fumadocs configuration
│   └── source.ts                  # Document tree loader and search indices
├── source.config.ts               # Fumadocs MDX definition & collection configuration
├── public/                        # Static assets (logos, icons, imagery)
└── .github/                       # GitHub workflows and pull request templates
```

---

## 📚 Documentation Content Hierarchy

### 1. [Company](/docs/company)
- **About Us**: Mission, values, and history of Nexium Media.
- **Vision & Strategy**: Performance marketing, enterprise web architecture, and CRO focus.
- **Team Topology**: Pod structures, cross-functional collaboration, and communication norms.

### 2. [Frontend Engineering Handbook](/docs/development/frontend)
A 45-chapter, production-grade guide covering the complete frontend lifecycle:
- **Getting Started**: Node.js LTS, VS Code configuration, and environment setup.
- **Fundamentals**: HTML/CSS semantics, modern ES2022+ JavaScript, TypeScript strict mode, React 18/19, and Next.js App Router.
- **Project Structure**: Layered modular organization, component collocation, and module resolution.
- **UI Components**: Atomic design, typed props, compound components, forms with Zod, and `shadcn/ui` integration.
- **Styling**: Tailwind v4 design tokens, fluid typography, mobile-first responsive design, and Framer Motion transitions.
- **State & Data**: React state primitives, Zustand, TanStack Query, and robust client-side caching.
- **Testing**: Jest, React Testing Library, Mock Service Worker (MSW), and Playwright E2E suites.
- **Quality & Standards**: WCAG 2.1 AA accessibility, Core Web Vitals (LCP, INP, CLS), SEO Metadata API, and security practices.
- **Workflows**: Local dev workflows, Chrome & React DevTools debugging, and Vercel edge deployment.

### 3. [Backend Engineering Handbook](/docs/development/backend)
Comprehensive architecture guides for both primary runtimes:
- **Node.js (Express & TypeScript)**: High-concurrency I/O, BFF services, layered architecture, typed middleware, and Prisma ORM.
- **Python 3.12+ (FastAPI)**: Asynchronous microservices, Pydantic v2 validation, Dependency Injection (`Depends()`), and SQLAlchemy 2.0.
- **Database Engineering**: PostgreSQL schema design, indexing, connection pooling, and MongoDB document modeling.
- **Authentication & Authorization**: Stateless JWT (RS256/HS256), OAuth2 flows, hashed API keys, and Role-Based Access Control (RBAC).
- **API Development**: RESTful design principles, input validation, standard response envelopes, cursor pagination, and sliding-window rate limiting.
- **Third-Party Integrations**: Razorpay & Stripe checkouts with HMAC verification, asynchronous email queues (BullMQ/Celery), AWS S3 presigned uploads, and webhooks.
- **Security & Testing**: OWASP API Security Top 10 defenses, secrets management, Jest/Supertest, and Pytest/HTTPX.
- **Deployment & DevOps**: Graceful shutdown hooks, 12-factor environment config, production multi-stage Dockerfiles, and GitHub Actions CI/CD.

### 4. [GitHub Workflow](/docs/development/github)
- **Branch Naming**: Conventional branch prefixes (`feat/`, `fix/`, `refactor/`, `docs/`, `chore/`).
- **Commit Conventions**: Standardized Conventional Commits (`feat(scope): message`).
- **Pull Request Protocol**: Mandatory PR checklist, description guidelines, and visual asset requirements.
- **Code Reviews**: Reviewer etiquette, required approvals, and constructive feedback standards.
- **Release Management**: Semantic versioning, release tagging, and automated deployment verification.

---

## ⚡ Quick Start

### Prerequisites
- **Node.js**: `v20.x` or `v22.x` (LTS recommended)
- **Package Manager**: `npm` (v10+) or `pnpm`
- **Git**: Installed and configured with your organization credentials

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nexium-media/nm-storybook.git
   cd nm-storybook
   ```

2. **Install dependencies**:
   ```bash
   npm ci
   ```
   *(Note: The `postinstall` hook runs `fumadocs-mdx` to automatically generate documentation types and routing schemas).*

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Access the portal**:
   Open [http://localhost:3000](http://localhost:3000) in your browser. Documentation routes are served under `/docs`.

---

## 📜 Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| **Development** | `npm run dev` | Starts Next.js development server with Turbopack and Hot Module Replacement (HMR). |
| **Build** | `npm run build` | Compiles MDX pages, runs TypeScript verification, and generates static production pages. |
| **Start** | `npm run start` | Boots the compiled Next.js standalone production server. |
| **Lint** | `npm run lint` | Runs ESLint analysis across TypeScript and React source files. |
| **Postinstall** | `npm run postinstall`| Generates Fumadocs server runtime and metadata manifests. |

---

## ✍️ Authoring Documentation

When contributing or updating documentation pages:

### 1. Frontmatter Requirements
Every `.mdx` file must begin with valid YAML frontmatter containing a title and description. If the title contains special characters such as a colon (`:`), wrap the title in double quotes:

```mdx
---
title: "Pagination Strategies: Offset vs. Cursor"
description: "Architectural comparison of offset and cursor pagination for scalable API design."
---
```

### 2. Navigation Ordering via `meta.json`
Every documentation directory must contain a `meta.json` file defining the title, description, and exact display order of child pages and subdirectories:

```json
{
  "title": "Backend Engineering",
  "pages": [
    "index",
    "getting-started",
    "architecture",
    "node-express",
    "python-fastapi",
    "database"
  ]
}
```

### 3. Supported MDX Components
Use official Fumadocs components for callouts and structured navigation:

- **Callouts**:
  ```mdx
  <Callout type="tip">Best practice advice for developers.</Callout>
  <Callout type="warning">Common gotchas and potential pitfalls.</Callout>
  <Callout type="error">Critical security warnings and invariants.</Callout>
  <Callout type="note">Background context or implementation notes.</Callout>
  ```
- **Navigation Cards**:
  ```mdx
  <Cards>
    <Card title="Frontend" href="/docs/development/frontend" description="Explore frontend guides." />
    <Card title="Backend" href="/docs/development/backend" description="Explore backend guides." />
  </Cards>
  ```
- **Code Blocks**: Specify language tags (`ts`, `tsx`, `python`, `bash`, `yaml`, `json`, `dockerfile`, `sql`). Avoid unsupported tags like `env` or `gitignore` (use `bash` or `text` instead).

### 4. Automatic "Last Updated" Timestamps
Fumadocs automatically resolves the last modified timestamp for every documentation page directly from Git commit history:
- **Local Development**: Runs `git log` behind the scenes during `npm run dev` and `npm run build`.
- **Vercel Deployments**: Vercel performs shallow clones (`--depth=1`) by default. To allow Git to resolve accurate timestamps for historical commits, configure the environment variable:
  ```bash
  VERCEL_DEEP_CLONE=true
  ```
- **GitHub Actions Workflows**: If running a custom CI/CD runner, set `fetch-depth: 0` in `actions/checkout@v4` to fetch the complete commit history.

---

## 🤝 Contribution & Review Process

1. Create a feature branch following the naming convention:
   ```bash
   git checkout -b docs/add-monitoring-guide
   ```
2. Commit your changes following Conventional Commits:
   ```bash
   git commit -m "docs(backend): add distributed tracing and OpenTelemetry guide"
   ```
3. Run local verification before submitting:
   ```bash
   npm run build
   ```
4. Open a pull request against `main`. Ensure all CI automated checks (linting, type-checking, and build validation) pass green.

---

## 📄 License & Maintainers

- **Owner**: Nexium Media Engineering Core Team
