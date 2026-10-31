import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';
import { Sparkles } from 'lucide-react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <div className="flex items-center gap-2.5 font-semibold text-fd-foreground">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#6f00ff] text-white shadow-xs">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold tracking-tight">Nexium Media Docs</span>
          </div>
        ),
        url: '/',
      }}
      links={[
        {
          text: 'Overview',
          url: '/docs',
          active: 'nested-url',
        },
        {
          text: 'Company',
          url: '/docs/company',
        },
        {
          text: 'Getting Started',
          url: '/docs/getting-started',
        },
        {
          text: 'Engineering',
          url: '/docs/development',
        },
        {
          text: 'Processes',
          url: '/docs/processes',
        },
        {
          text: 'Support',
          url: '/docs/support',
        },
      ]}
      githubUrl="https://github.com/nexium-media"
    >
      {children}
    </DocsLayout>
  );
}
