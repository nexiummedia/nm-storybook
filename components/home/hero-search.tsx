'use client';

import React from 'react';
import { useSearchContext } from 'fumadocs-ui/contexts/search';
import { Search } from 'lucide-react';

export function HeroSearch() {
  const { setOpenSearch } = useSearchContext();

  return (
    <div className="w-full max-w-2xl mx-auto">
      <button
        type="button"
        onClick={() => setOpenSearch(true)}
        className="group relative flex w-full items-center justify-between gap-3 rounded-2xl border border-fd-border/80 bg-fd-card/70 px-4 py-3.5 text-left text-sm text-fd-muted-foreground shadow-xs backdrop-blur-xs transition-all duration-200 hover:border-fd-primary/40 hover:bg-fd-accent/30 hover:shadow-md cursor-pointer"
        aria-label="Open search modal"
      >
        <div className="flex items-center gap-3">
          <Search className="h-4 w-4 text-fd-muted-foreground transition-colors group-hover:text-fd-primary" />
          <span className="font-normal text-fd-muted-foreground group-hover:text-fd-foreground">
            Search documentation, guides, APIs, and concepts...
          </span>
        </div>
        <kbd className="hidden sm:inline-flex items-center gap-1 rounded-md border border-fd-border bg-fd-muted px-2 py-0.5 text-xs font-mono font-medium text-fd-muted-foreground shadow-2xs">
          <span>⌘</span>K
        </kbd>
      </button>
    </div>
  );
}

