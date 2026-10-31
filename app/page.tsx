import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  Terminal,
  Globe,
  Layers,
  GitBranch,
  HelpCircle,
  FileCode2,
  ExternalLink,
  ChevronRight,
  Clock,
  Phone,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import { HeroSearch } from '@/components/home/hero-search';
import { ThemeToggle } from '@/components/home/theme-toggle';

const categories = [
  {
    title: 'Company & Culture',
    href: '/docs/company',
    icon: Sparkles,
    description: 'Our founding mission, leadership, MSME growth focus, and agency principles.',
    guides: ['About Nexium Media', 'Vision & Mission', 'Our Team'],
  },
  {
    title: 'Getting Started',
    href: '/docs/getting-started',
    icon: Terminal,
    description: 'Developer workstation setup, agency toolchains, and client project onboarding.',
    guides: ['Prerequisites', 'Installation', 'First-Time Setup'],
  },
  {
    title: 'Website Development',
    href: '/docs/development/frontend',
    icon: Layers,
    description: 'High-converting web architecture, React/Next.js design tokens, and Core Web Vitals.',
    guides: ['Project Structure', 'UI Components', 'Design System'],
  },
  {
    title: 'Marketing & APIs',
    href: '/docs/development/backend',
    icon: FileCode2,
    description: 'Lead generation pipelines, Razorpay payment webhooks, and REST API standards.',
    guides: ['API Structure', 'Authentication & JWT', 'CRM Integrations'],
  },
  {
    title: 'Processes & Delivery',
    href: '/docs/processes',
    icon: GitBranch,
    description: 'Client delivery lifecycle, SEO checklists, review criteria, and staging QA.',
    guides: ['Development Workflow', 'CI/CD Deployments', 'SEO Launch Checks'],
  },
  {
    title: 'Support & FAQ',
    href: '/docs/support',
    icon: HelpCircle,
    description: 'Frequently asked questions, common troubleshooting, SLAs, and direct support.',
    guides: ['FAQ', 'Troubleshooting Guide', 'Client SLAs'],
  },
];

const featuredGuides = [
  {
    title: 'High-Converting Web Architecture & Core Web Vitals',
    category: 'Website Development',
    href: '/docs/development/frontend/components',
    readTime: '5 min read',
    description: 'Build fast, accessible, responsive websites optimized for 95+ Google PageSpeed score.',
  },
  {
    title: 'Lead Generation APIs & Razorpay Webhooks',
    category: 'Backend & APIs',
    href: '/docs/development/backend/api-structure',
    readTime: '4 min read',
    description: 'Unified JSON envelope patterns, webhook signature verification, and CRM syncing.',
  },
  {
    title: 'Client Project Delivery & Zero-Downtime Rollouts',
    category: 'Processes',
    href: '/docs/processes/deployment',
    readTime: '6 min read',
    description: 'How our GitHub Actions and automated previews guarantee defect-free client handoffs.',
  },
  {
    title: 'Local Environment Diagnostics & Port Conflicts',
    category: 'Support',
    href: '/docs/support/troubleshooting',
    readTime: '3 min read',
    description: 'Instant fixes for local database connections, build caches, and node dependency sync.',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-fd-background text-fd-foreground antialiased selection:bg-[#6f00ff]/20">
      {/* Top Header */}
      <header className="sticky top-0 z-40 w-full border-b border-fd-border/60 bg-fd-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-90">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#6f00ff] text-white shadow-xs">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="text-sm font-semibold tracking-tight">Nexium Media Docs</span>
            </Link>

            <nav className="hidden md:flex items-center gap-5 text-xs font-medium text-fd-muted-foreground">
              <Link href="/docs" className="transition-colors hover:text-fd-foreground">
                Documentation
              </Link>
              <Link href="/docs/getting-started" className="transition-colors hover:text-fd-foreground">
                Getting Started
              </Link>
              <Link href="/docs/development" className="transition-colors hover:text-fd-foreground">
                Development
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
              href="https://www.nexiummedia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-fd-muted-foreground hover:text-fd-foreground transition-colors"
            >
              <span>Main Website</span>
              <ExternalLink className="h-3 w-3" />
            </Link>

            <ThemeToggle />

            <Link
              href="/docs"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#6f00ff] px-3 py-1.5 text-xs font-medium text-white shadow-xs hover:bg-[#5d00d6] transition-colors"
            >
              <span>Explore Docs</span>
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
            <span>Nexium Media Developer & Team Portal</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-fd-foreground sm:text-5xl sm:leading-tight">
            Scale digital growth, high-converting websites & marketing.
          </h1>

          <p className="mt-4 text-sm sm:text-base text-fd-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The central source of truth for Nexium Media team members, engineering standards, performance marketing frameworks, and client deliverables.
          </p>

          <div className="mt-8">
            <HeroSearch />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-fd-muted-foreground">
            <span className="font-medium text-fd-foreground/70">Popular:</span>
            <Link href="/docs/getting-started/installation" className="hover:text-fd-foreground underline underline-offset-4 decoration-fd-border transition-colors">
              Developer Setup
            </Link>
            <span>•</span>
            <Link href="/docs/development/frontend/components" className="hover:text-fd-foreground underline underline-offset-4 decoration-fd-border transition-colors">
              UI Components
            </Link>
            <span>•</span>
            <Link href="/docs/development/backend/api-structure" className="hover:text-fd-foreground underline underline-offset-4 decoration-fd-border transition-colors">
              API Schemas
            </Link>
            <span>•</span>
            <Link href="/docs/processes/deployment" className="hover:text-fd-foreground underline underline-offset-4 decoration-fd-border transition-colors">
              Client Deployments
            </Link>
          </div>
        </div>
      </section>

      {/* Agency Impact Highlights */}
      {/* <section className="py-10 border-b border-fd-border/40 bg-fd-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[#6f00ff]">100+</p>
              <p className="text-xs text-fd-muted-foreground mt-1">Websites Delivered</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[#6f00ff]">10M+</p>
              <p className="text-xs text-fd-muted-foreground mt-1">Ad Impressions Managed</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[#6f00ff]">99.9%</p>
              <p className="text-xs text-fd-muted-foreground mt-1">Uptime Guarantee</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[#6f00ff]">95+</p>
              <p className="text-xs text-fd-muted-foreground mt-1">Avg. PageSpeed Score</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Getting Started Fast Track */}
      {/* <section className="py-14 border-b border-fd-border/40 bg-fd-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6f00ff]">Developer Onboarding</p>
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl mt-1 text-fd-foreground">
                Get started in 3 simple steps
              </h2>
            </div>
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center gap-1 text-xs font-medium text-fd-foreground hover:underline"
            >
              <span>View complete setup guide</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-xl border border-fd-border/70 bg-fd-card p-5 shadow-2xs hover:border-fd-border transition-colors">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-fd-muted-foreground mb-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-fd-muted text-fd-foreground font-mono text-[11px]">1</span>
                <span>Setup Toolchain</span>
              </div>
              <h3 className="text-sm font-semibold text-fd-foreground">Install Node.js, Git & CLI</h3>
              <p className="text-xs text-fd-muted-foreground mt-1.5 leading-relaxed">
                Standardize on Node.js 22 LTS and install the global Nexium Media CLI.
              </p>
              <div className="mt-3.5 rounded-lg border border-fd-border/60 bg-fd-muted/40 p-2.5 font-mono text-[11px] text-fd-foreground">
                npm install -g @nexium/cli
              </div>
            </div>

            <div className="rounded-xl border border-fd-border/70 bg-fd-card p-5 shadow-2xs hover:border-fd-border transition-colors">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-fd-muted-foreground mb-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-fd-muted text-fd-foreground font-mono text-[11px]">2</span>
                <span>Configure Environment</span>
              </div>
              <h3 className="text-sm font-semibold text-fd-foreground">Setup Secrets & Razorpay Test Keys</h3>
              <p className="text-xs text-fd-muted-foreground mt-1.5 leading-relaxed">
                Copy local environment parameters and launch local PostgreSQL / Redis containers.
              </p>
              <div className="mt-3.5 rounded-lg border border-fd-border/60 bg-fd-muted/40 p-2.5 font-mono text-[11px] text-fd-foreground">
                docker compose up -d
              </div>
            </div>

            <div className="rounded-xl border border-fd-border/70 bg-fd-card p-5 shadow-2xs hover:border-fd-border transition-colors">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-fd-muted-foreground mb-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-fd-muted text-fd-foreground font-mono text-[11px]">3</span>
                <span>Launch Client Project</span>
              </div>
              <h3 className="text-sm font-semibold text-fd-foreground">Run Development Server</h3>
              <p className="text-xs text-fd-muted-foreground mt-1.5 leading-relaxed">
                Start Next.js App Router with hot reload and live MDX compilation.
              </p>
              <div className="mt-3.5 rounded-lg border border-fd-border/60 bg-fd-muted/40 p-2.5 font-mono text-[11px] text-fd-foreground">
                npm run dev
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Category Grid Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#6f00ff]">Knowledge Hub</p>
            <h2 className="text-2xl font-bold tracking-tight text-fd-foreground sm:text-3xl mt-1">
              Explore by Department
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-fd-muted-foreground max-w-xl mx-auto">
              Modular documentation organized into dedicated sections with dynamic multi-level navigation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.title}
                  href={cat.href}
                  className="group relative flex flex-col justify-between rounded-2xl border border-fd-border/80 bg-fd-card/60 p-6 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-fd-border hover:bg-fd-card hover:shadow-md"
                >
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-fd-border/60 bg-fd-muted/60 text-fd-foreground transition-colors group-hover:bg-[#6f00ff] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-4 text-base font-semibold text-fd-foreground flex items-center justify-between">
                      <span>{cat.title}</span>
                      <ArrowRight className="h-4 w-4 text-fd-muted-foreground opacity-0 -translate-x-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-fd-foreground" />
                    </h3>

                    <p className="mt-2 text-xs text-fd-muted-foreground leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-fd-border/50">
                    <p className="text-[11px] font-medium text-fd-foreground/70 mb-2">Featured Guides:</p>
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
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6f00ff]">Standards & Playbooks</p>
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl mt-1 text-fd-foreground">
                Featured Technical Guides
              </h2>
            </div>
            <Link
              href="/docs"
              className="inline-flex items-center gap-1 text-xs font-medium text-fd-foreground hover:underline"
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
                className="group flex flex-col justify-between rounded-xl border border-fd-border/70 bg-fd-card p-5 shadow-2xs hover:border-fd-border hover:bg-fd-card/90 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-fd-muted-foreground mb-2">
                    <span className="font-semibold text-fd-foreground">{guide.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {guide.readTime}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-fd-foreground group-hover:text-fd-foreground transition-colors">
                    {guide.title}
                  </h3>
                  <p className="mt-1 text-xs text-fd-muted-foreground leading-relaxed">
                    {guide.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-fd-foreground opacity-0 group-hover:opacity-100 transition-opacity">
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
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#6f00ff] text-white">
              <Sparkles className="h-3.5 w-3.5" />
            </div>
            <span className="text-xs font-medium text-fd-foreground">Nexium Media Private Limited • Dhanbad, Jharkhand</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-fd-muted-foreground">
            <Link href="https://www.nexiummedia.com/" target="_blank" className="hover:text-fd-foreground transition-colors">
              Website
            </Link>
            <Link href="/docs/support/faq" className="hover:text-fd-foreground transition-colors">
              FAQ
            </Link>
            <Link href="https://www.linkedin.com/company/nexium-media" target="_blank" className="hover:text-fd-foreground transition-colors">
              LinkedIn
            </Link>
            <Link href="https://www.instagram.com/nexium_media/" target="_blank" className="hover:text-fd-foreground transition-colors">
              Instagram
            </Link>
            <a href="tel:+918825208872" className="flex items-center gap-1 hover:text-fd-foreground transition-colors">
              <Phone className="h-3 w-3" />
              <span>+91-8825208872</span>
            </a>
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
