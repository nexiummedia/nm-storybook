import React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  ArrowRight,
  Terminal,
  ShieldCheck,
  Layers,
  GitBranch,
  HelpCircle,
  FileCode2,
  ExternalLink,
  ChevronRight,
  Clock,
  Sparkles,
} from 'lucide-react';
import { HeroSearch } from '@/components/home/hero-search';
import { ThemeToggle } from '@/components/home/theme-toggle';

const categories = [
  {
    title: 'Company',
    href: '/docs/company',
    icon: Sparkles,
    description: 'Our founding story, mission, principles, and organizational pod structures.',
    guides: ['About Us', 'Vision & Mission', 'Our Team'],
  },
  {
    title: 'Getting Started',
    href: '/docs/getting-started',
    icon: Terminal,
    description: 'Workstation prerequisites, CLI installation, and initial environment boot.',
    guides: ['Prerequisites', 'Installation', 'First-Time Setup'],
  },
  {
    title: 'Frontend Engineering',
    href: '/docs/development/frontend',
    icon: Layers,
    description: 'App Router layout conventions, UI component design tokens, and accessibility.',
    guides: ['Project Structure', 'UI Components', 'Design System'],
  },
  {
    title: 'Backend & APIs',
    href: '/docs/development/backend',
    icon: FileCode2,
    description: 'RESTful API contracts, JSON envelopes, JWT authentication, and RBAC roles.',
    guides: ['API Structure', 'Authentication & JWT', 'Microservices'],
  },
  {
    title: 'Processes & CI/CD',
    href: '/docs/processes',
    icon: GitBranch,
    description: 'Branching standards, Conventional Commits, test pipelines, and releases.',
    guides: ['Development Workflow', 'CI/CD Pipelines', 'Canary Rollouts'],
  },
  {
    title: 'Support & FAQ',
    href: '/docs/support',
    icon: HelpCircle,
    description: 'Frequently asked questions, common developer pitfalls, and troubleshooting.',
    guides: ['FAQ', 'Troubleshooting Guide', 'Incident Escalation'],
  },
];

const featuredGuides = [
  {
    title: 'REST API Envelope Standards',
    category: 'Backend',
    href: '/docs/development/backend/api-structure',
    readTime: '4 min read',
    description: 'Learn our standardized response schemas, error codes, and cursor pagination format.',
  },
  {
    title: 'Accessible UI Primitives & Design Tokens',
    category: 'Frontend',
    href: '/docs/development/frontend/components',
    readTime: '6 min read',
    description: 'Build consistent, dark-mode ready interfaces with Radix UI and Tailwind CSS.',
  },
  {
    title: 'Canary Deployments & Instant Rollback',
    category: 'Processes',
    href: '/docs/processes/deployment',
    readTime: '5 min read',
    description: 'How our GitHub Actions and Kubernetes pipelines prevent breaking production changes.',
  },
  {
    title: 'Common Build & Docker Diagnostics',
    category: 'Support',
    href: '/docs/support/troubleshooting',
    readTime: '3 min read',
    description: 'Instant fixes for port collisions, container failures, and metadata cache sync.',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-fd-background text-fd-foreground antialiased selection:bg-fd-primary/20">
      {/* Top Header */}
      <header className="sticky top-0 z-40 w-full border-b border-fd-border/60 bg-fd-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-90">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-fd-primary text-fd-primary-foreground shadow-xs">
                <BookOpen className="h-4 w-4" />
              </div>
              <span className="text-sm font-semibold tracking-tight">Acme Docs</span>
            </Link>

            <nav className="hidden md:flex items-center gap-5 text-xs font-medium text-fd-muted-foreground">
              <Link href="/docs" className="transition-colors hover:text-fd-foreground">
                Documentation
              </Link>
              <Link href="/docs/getting-started" className="transition-colors hover:text-fd-foreground">
                Getting Started
              </Link>
              <Link href="/docs/development" className="transition-colors hover:text-fd-foreground">
                Engineering
              </Link>
              <Link href="/docs/processes" className="transition-colors hover:text-fd-foreground">
                Processes
              </Link>
              <Link href="/docs/support" className="transition-colors hover:text-fd-foreground">
                Support
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/acme-corp/platform"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-fd-muted-foreground hover:text-fd-foreground transition-colors"
            >
              <span>GitHub</span>
              <ExternalLink className="h-3 w-3" />
            </Link>

            <ThemeToggle />

            <Link
              href="/docs"
              className="inline-flex items-center gap-1.5 rounded-lg bg-fd-primary px-3 py-1.5 text-xs font-medium text-fd-primary-foreground shadow-xs hover:opacity-90 transition-opacity"
            >
              <span>Open Docs</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-fd-border/40 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-muted/50 px-3 py-1 text-xs font-medium text-fd-foreground/80 mb-6">
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>Acme Documentation Portal 2.0</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-fd-foreground sm:text-5xl sm:leading-tight">
            Everything you need to build, scale, and ship at Acme.
          </h1>

          <p className="mt-4 text-sm sm:text-base text-fd-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The central source of truth for engineering architecture, product standards, API specifications, and operational workflows.
          </p>

          <div className="mt-8">
            <HeroSearch />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-fd-muted-foreground">
            <span className="font-medium text-fd-foreground/70">Popular:</span>
            <Link href="/docs/getting-started/installation" className="hover:text-fd-primary underline underline-offset-4 decoration-fd-border transition-colors">
              Installation Guide
            </Link>
            <span>•</span>
            <Link href="/docs/development/backend/authentication" className="hover:text-fd-primary underline underline-offset-4 decoration-fd-border transition-colors">
              Authentication
            </Link>
            <span>•</span>
            <Link href="/docs/development/frontend/components" className="hover:text-fd-primary underline underline-offset-4 decoration-fd-border transition-colors">
              UI Components
            </Link>
            <span>•</span>
            <Link href="/docs/processes/deployment" className="hover:text-fd-primary underline underline-offset-4 decoration-fd-border transition-colors">
              CI/CD Rollouts
            </Link>
          </div>
        </div>
      </section>

      {/* Getting Started Fast Track */}
      <section className="py-14 border-b border-fd-border/40 bg-fd-muted/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-fd-primary">Fast Track</p>
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl mt-1 text-fd-foreground">
                Get started in minutes
              </h2>
            </div>
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center gap-1 text-xs font-medium text-fd-primary hover:underline"
            >
              <span>View complete onboarding guide</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-xl border border-fd-border/70 bg-fd-card p-5 shadow-2xs hover:border-fd-primary/40 transition-colors">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-fd-muted-foreground mb-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-fd-muted text-fd-foreground font-mono text-[11px]">1</span>
                <span>Install Dependencies</span>
              </div>
              <h3 className="text-sm font-semibold text-fd-foreground">Install the Acme Developer CLI</h3>
              <p className="text-xs text-fd-muted-foreground mt-1.5 leading-relaxed">
                Use npm to install the global CLI for database migrations and credential sync.
              </p>
              <div className="mt-3.5 rounded-lg border border-fd-border/60 bg-fd-muted/40 p-2.5 font-mono text-[11px] text-fd-foreground">
                npm install -g @acme/cli
              </div>
            </div>

            <div className="rounded-xl border border-fd-border/70 bg-fd-card p-5 shadow-2xs hover:border-fd-primary/40 transition-colors">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-fd-muted-foreground mb-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-fd-muted text-fd-foreground font-mono text-[11px]">2</span>
                <span>Configure Environment</span>
              </div>
              <h3 className="text-sm font-semibold text-fd-foreground">Setup Local Secrets & Database</h3>
              <p className="text-xs text-fd-muted-foreground mt-1.5 leading-relaxed">
                Copy the environment template and start your local containerized database.
              </p>
              <div className="mt-3.5 rounded-lg border border-fd-border/60 bg-fd-muted/40 p-2.5 font-mono text-[11px] text-fd-foreground">
                docker compose up -d
              </div>
            </div>

            <div className="rounded-xl border border-fd-border/70 bg-fd-card p-5 shadow-2xs hover:border-fd-primary/40 transition-colors">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-fd-muted-foreground mb-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-fd-muted text-fd-foreground font-mono text-[11px]">3</span>
                <span>Run Application</span>
              </div>
              <h3 className="text-sm font-semibold text-fd-foreground">Start Local Development Server</h3>
              <p className="text-xs text-fd-muted-foreground mt-1.5 leading-relaxed">
                Launch the Next.js development server with Turbopack fast refresh enabled.
              </p>
              <div className="mt-3.5 rounded-lg border border-fd-border/60 bg-fd-muted/40 p-2.5 font-mono text-[11px] text-fd-foreground">
                npm run dev
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-fd-primary">Knowledge Base</p>
            <h2 className="text-2xl font-bold tracking-tight text-fd-foreground sm:text-3xl mt-1">
              Explore by Category
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-fd-muted-foreground max-w-xl mx-auto">
              Structured documentation organized into modular sections with automatic nested navigation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.title}
                  href={cat.href}
                  className="group relative flex flex-col justify-between rounded-2xl border border-fd-border/80 bg-fd-card/60 p-6 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-fd-primary/40 hover:bg-fd-card hover:shadow-md"
                >
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-fd-border/60 bg-fd-muted/60 text-fd-foreground transition-colors group-hover:bg-fd-primary group-hover:text-fd-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-4 text-base font-semibold text-fd-foreground flex items-center justify-between">
                      <span>{cat.title}</span>
                      <ArrowRight className="h-4 w-4 text-fd-muted-foreground opacity-0 -translate-x-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0" />
                    </h3>

                    <p className="mt-2 text-xs text-fd-muted-foreground leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-fd-border/50">
                    <p className="text-[11px] font-medium text-fd-foreground/70 mb-2">Featured Topics:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.guides.map((g) => (
                        <span
                          key={g}
                          className="rounded-md bg-fd-muted/70 px-2 py-0.5 text-[11px] text-fd-muted-foreground group-hover:text-fd-foreground transition-colors"
                        >
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Technical References */}
      <section className="py-14 border-t border-fd-border/40 bg-fd-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-fd-primary">Core Specs</p>
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl mt-1 text-fd-foreground">
                Featured Technical Guides
              </h2>
            </div>
            <Link
              href="/docs"
              className="inline-flex items-center gap-1 text-xs font-medium text-fd-primary hover:underline"
            >
              <span>All 20+ guides</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredGuides.map((guide) => (
              <Link
                key={guide.title}
                href={guide.href}
                className="group flex flex-col justify-between rounded-xl border border-fd-border/70 bg-fd-card p-5 shadow-2xs hover:border-fd-primary/40 hover:bg-fd-card/90 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-fd-muted-foreground mb-2">
                    <span className="font-semibold text-fd-primary">{guide.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {guide.readTime}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-fd-foreground group-hover:text-fd-primary transition-colors">
                    {guide.title}
                  </h3>
                  <p className="mt-1 text-xs text-fd-muted-foreground leading-relaxed">
                    {guide.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-fd-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Read documentation</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="border-t border-fd-border/60 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-fd-primary text-fd-primary-foreground">
              <BookOpen className="h-3.5 w-3.5" />
            </div>
            <span className="text-xs font-medium text-fd-foreground">Acme Inc. Documentation Portal</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-fd-muted-foreground">
            <Link href="/docs" className="hover:text-fd-foreground transition-colors">
              Docs Home
            </Link>
            <Link href="/docs/support/faq" className="hover:text-fd-foreground transition-colors">
              FAQ
            </Link>
            <Link href="/docs/support/troubleshooting" className="hover:text-fd-foreground transition-colors">
              Troubleshooting
            </Link>
            <Link href="https://github.com/acme-corp/platform" target="_blank" className="hover:text-fd-foreground transition-colors">
              GitHub
            </Link>
          </div>

          <div className="flex items-center gap-2 text-xs text-fd-muted-foreground">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Systems Normal</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
