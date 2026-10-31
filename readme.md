# Nexium Media — Company Documentation Portal

A production-ready, modern company documentation portal for **Nexium Media** (top website development & digital marketing agency in Dhanbad, Jharkhand), built with **Next.js (App Router)**, **Fumadocs**, **TypeScript**, and **Tailwind CSS**.

Featuring dynamic file-system navigation, full-text documentation search, light/dark mode theming, breadcrumb navigation, interactive MDX components, and automated SEO sitemap generation.

Official Website: [https://www.nexiummedia.com/](https://www.nexiummedia.com/)

---

## 1. Features & Architectural Highlights

- **Dynamic File-Based Navigation**: Drop any `.mdx` file into `content/docs/`, and it immediately appears in the sidebar and search index without manual route registration.
- **Hierarchical Structure**: Supports multi-level categories, nested subcategories, and deep folders.
- **Customizable Navigation via `meta.json`**: Control folder titles, page ordering, separators (`---`), and visibility without touching code.
- **Full-Text Instant Search**: Official Fumadocs-compatible search engine (`/api/search`) with `Cmd + K` or `Ctrl + K` modal, keyboard navigation, and breadcrumb results.
- **Rich Interactive MDX**: Built-in support for Callouts (`info`, `tip`, `warn`), Tabs, Steps, Accordions, File trees, Syntax-highlighted code blocks with copy button, and YouTube embeds.
- **Table of Contents (On this page)**: Automatically extracts `h2` and `h3` headings with active scroll-spy highlighting.
- **Breadcrumbs & Previous / Next Page Links**: Context-aware pagination across adjacent documents.
- **Helpful Page Feedback**: Interactive "Was this page helpful?" widget with optional commentary collection.
- **Theme Support**: Seamless Light, Dark, and System theme switching persisted via `next-themes`.
- **Signature Nexium Media Theming**: Electric violet primary accent (`#6f00ff`) with minimalist borders and clean typography.
- **Production Grade SEO**: Dynamic OpenGraph tags, automatic `sitemap.xml`, canonical headers, and `robots.txt`.

---

## 2. Technology Stack

- **Framework**: Next.js 16 (App Router with Turbopack)
- **Content Engine**: Fumadocs (`fumadocs-ui`, `fumadocs-core`, `fumadocs-mdx`)
- **Formatting**: MDX, Remark, Rehype, Shiki syntax highlighting
- **Styling**: Tailwind CSS v4 + Fumadocs CSS presets
- **Icons**: Lucide React
- **Language**: TypeScript (strict mode enabled)

---

## 3. Getting Started

### Prerequisites

- Node.js 20+ or 22+ LTS
- npm, pnpm, or yarn

### Installation

```bash
# Clone repository
git clone git@github.com:nexium-media/documentation.git
cd documentation

# Install dependencies (runs postinstall fumadocs-mdx automatically)
npm install
```

### Development Server

Start the local development server with Turbopack fast refresh:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the homepage or [http://localhost:3000/docs](http://localhost:3000/docs) to view documentation.

---

## 4. Documentation Folder Structure

All documentation resides inside `content/docs/`:

```
content/
└── docs/
    ├── meta.json                   # Root navigation ordering
    ├── index.mdx                   # /docs (Overview page)
    │
    ├── company/                    # Category: Company & Culture
    │   ├── meta.json
    │   ├── index.mdx
    │   ├── about-us.mdx
    │   ├── vision-and-mission.mdx
    │   └── our-team.mdx
    │
    ├── getting-started/            # Category: Getting Started
    │   ├── meta.json
    │   ├── index.mdx
    │   ├── installation.mdx
    │   └── first-time-setup.mdx
    │
    ├── development/                # Category: Development
    │   ├── meta.json
    │   ├── index.mdx
    │   ├── frontend/               # Subcategory: Website Development
    │   │   ├── meta.json
    │   │   ├── index.mdx
    │   │   ├── project-structure.mdx
    │   │   └── components.mdx
    │   └── backend/                # Subcategory: Marketing & APIs
    │       ├── meta.json
    │       ├── index.mdx
    │       ├── api-structure.mdx
    │       └── authentication.mdx
    │
    ├── processes/                  # Category: Processes & QA
    │   ├── meta.json
    │   ├── index.mdx
    │   ├── development-workflow.mdx
    │   └── deployment.mdx
    │
    └── support/                    # Category: Support & FAQ
        ├── meta.json
        ├── index.mdx
        ├── faq.mdx
        └── troubleshooting.mdx
```

---

## 5. Adding and Organizing Documentation

### How to Add a New Page

1. Create a new `.mdx` file in any folder, for example `content/docs/getting-started/cli-commands.mdx`.
2. Add frontmatter with `title` and `description`:

```mdx
---
title: CLI Commands
description: Complete command-line reference for Nexium Media developer tools.
---

# CLI Commands

Welcome to the CLI reference.

## Available Commands

```bash
nexium init
nexium dev
nexium deploy
```
```

3. Save the file. Fumadocs will automatically detect the page and make it available at `/docs/getting-started/cli-commands`.

### How to Customize Sidebar Ordering (`meta.json`)

To explicitly order pages in the sidebar or define custom folder labels, edit or create a `meta.json` in the directory:

```json
{
  "title": "Getting Started",
  "description": "Essential setup guides",
  "pages": [
    "index",
    "installation",
    "first-time-setup",
    "cli-commands"
  ]
}
```

- Items in `pages` correspond to filenames without the `.mdx` extension.
- Use `"---"` to render a visual divider line in the sidebar.

### How to Create a New Category

1. Create a new directory in `content/docs/<category-name>/`.
2. Add a `meta.json`:
   ```json
   {
     "title": "Digital Marketing",
     "description": "Meta ads, Google Ads, and performance marketing playbooks"
   }
   ```
3. Add an `index.mdx` overview file.
4. (Optional) Add your new folder name to `content/docs/meta.json` if you want a specific order among top-level categories.

### How to Create a Subcategory (Nested Folder)

1. Create a subfolder inside any existing category, e.g. `content/docs/development/ecommerce/`.
2. Add `meta.json` and `.mdx` files:
   ```json
   {
     "title": "eCommerce Stores",
     "pages": ["index", "razorpay-setup", "inventory"]
   }
   ```
3. In parent `meta.json` (`content/docs/development/meta.json`), list the subfolder in `pages`:
   ```json
   {
     "title": "Development",
     "pages": [
       "index",
       "frontend",
       "backend",
       "ecommerce"
     ]
   }
   ```

---

## 6. How to Add Images

Store static assets in the Next.js `public/` directory (e.g., `public/images/analytics-dashboard.png`).

Reference images using standard Markdown syntax or HTML:

```mdx
![Analytics Dashboard](/images/analytics-dashboard.png)
```

Images automatically render with responsive constraints and rounded borders.

---

## 7. Using MDX Components

Fumadocs supports rich interactive MDX components out of the box:

### Callouts

```mdx
<Callout type="info">Informational note for team members.</Callout>
<Callout type="tip">Pro-tip for Core Web Vitals optimization.</Callout>
<Callout type="warn">Warning for live DNS cutovers.</Callout>
```

### Cards & Card Grids

```mdx
<Cards>
  <Card title="Website Development" href="/docs/development/frontend" description="UI components and styling standards." />
  <Card title="Marketing & APIs" href="/docs/development/backend" description="Lead generation pipelines and payments." />
</Cards>
```

### Tabs

```mdx
<Tabs items={["npm", "pnpm", "bun"]}>
  <Tab value="npm">npm install @nexium/ui</Tab>
  <Tab value="pnpm">pnpm add @nexium/ui</Tab>
  <Tab value="bun">bun add @nexium/ui</Tab>
</Tabs>
```

### Sequential Steps

```mdx
<Steps>
### Step 1: Clone repo
Run `git clone git@github.com:nexium-media/client-project.git`

### Step 2: Configure secrets
Copy `.env.example` to `.env.local`

### Step 3: Run migrations
Execute `npm run db:migrate`
</Steps>
```

### Accordions (FAQ / Collapsible Details)

```mdx
<Accordions>
  <Accordion title="How long does website delivery take?">
    Standard business websites are delivered within 2 to 3 weeks.
  </Accordion>
  <Accordion title="How do client payments work?">
    Secure payments via Razorpay or direct bank transfer.
  </Accordion>
</Accordions>
```

### File Trees

```mdx
<Files>
  <Folder name="app" defaultOpen>
    <File name="layout.tsx" />
    <File name="page.tsx" />
  </Folder>
  <Folder name="content">
    <Folder name="docs" defaultOpen>
      <File name="index.mdx" />
    </Folder>
  </Folder>
</Files>
```

### YouTube Embeds

```mdx
<YouTube id="dQw4w9WgXcQ" />
```

---

## 8. Build & Deployment

### Production Build

Verify TypeScript compliance and create optimized static HTML and server bundles:

```bash
npm run build
```

### Running Production Server Locally

```bash
npm run start
```

### Deploying to Vercel

This repository is optimized for zero-config deployment on Vercel:

1. Push your repository to GitHub / GitLab.
2. Import the project in Vercel.
3. The build command (`next build`) and output directory will be detected automatically.
4. Set optional environment variable `NEXT_PUBLIC_SITE_URL` (default: `https://www.nexiummedia.com`).

---

## 9. Included Documentation Pages

This repository comes pre-populated with **21 realistic, fully authored documentation guides**:

1. **[Documentation Overview](/docs)**: Portal landing, principles, and index.
2. **[Company Overview](/docs/company)**: Operating philosophy and business model.
3. **[About Us](/docs/company/about-us)**: Founding story, Dhanbad headquarters, and milestones.
4. **[Vision & Mission](/docs/company/vision-and-mission)**: Core tenets and MSME growth outlook.
5. **[Our Team](/docs/company/our-team)**: Organizational squads and department roles.
6. **[Getting Started](/docs/getting-started)**: Workstation prerequisites and onboarding path.
7. **[Installation Guide](/docs/getting-started/installation)**: Node.js, pnpm, and CLI setup.
8. **[First-Time Setup](/docs/getting-started/first-time-setup)**: Secrets, Razorpay test keys, and databases.
9. **[Development Overview](/docs/development)**: Architecture stack map.
10. **[Frontend Overview](/docs/development/frontend)**: Next.js, React 19, and Tailwind standards.
11. **[Frontend Project Structure](/docs/development/frontend/project-structure)**: Directory layout.
12. **[UI Components](/docs/development/frontend/components)**: Accessible primitives and design tokens.
13. **[Backend Overview](/docs/development/backend)**: Microservices, APIs, and data storage.
14. **[API Structure](/docs/development/backend/api-structure)**: RESTful schemas, lead payloads, and pagination.
15. **[Authentication & Security](/docs/development/backend/authentication)**: JWTs, API keys, and RBAC roles.
16. **[Delivery Processes](/docs/processes)**: Operational workflows overview.
17. **[Development Workflow](/docs/processes/development-workflow)**: Conventional Commits and PR checklist.
18. **[Deployment & CI/CD](/docs/processes/deployment)**: GitHub Actions and Vercel rollouts.
19. **[Support & Help Center](/docs/support)**: Contact SLA matrix and direct phone lines.
20. **[Frequently Asked Questions](/docs/support/faq)**: Common client and agency queries.
21. **[Troubleshooting Guide](/docs/support/troubleshooting)**: Diagnostic workflows and local fixes.
