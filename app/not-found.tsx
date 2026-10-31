import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowLeft, Search, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-fd-background p-6 text-center text-fd-foreground">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fd-muted text-fd-foreground shadow-xs mb-6">
        <BookOpen className="h-6 w-6 text-fd-primary" />
      </div>

      <p className="text-xs font-semibold uppercase tracking-wider text-fd-primary">404 Error</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-fd-foreground sm:text-4xl">
        Page Not Found
      </h1>

      <p className="mt-3 max-w-md text-xs sm:text-sm text-fd-muted-foreground leading-relaxed">
        The documentation page you are looking for may have been moved, renamed, or does not exist. Use search to find what you are looking for.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-4 py-2 text-xs font-medium text-fd-foreground shadow-2xs hover:bg-fd-accent transition-colors"
        >
          <Home className="h-3.5 w-3.5" />
          <span>Home</span>
        </Link>
        <Link
          href="/docs"
          className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-4 py-2 text-xs font-medium text-fd-primary-foreground shadow-xs hover:opacity-90 transition-opacity"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Documentation</span>
        </Link>
      </div>
    </div>
  );
}

