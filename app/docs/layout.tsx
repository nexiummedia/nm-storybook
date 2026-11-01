import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import Image from 'next/image';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <div className="flex items-center font-semibold text-fd-foreground">
            <div className="relative flex  items-center justify-center overflow-hidden">
              <Image
                src="/Nlogo.png"
                alt="Nexium Media"
                width={28}
                height={28}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <span className="text-sm font-semibold tracking-tight">Docs</span>
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
          text: 'AI & Prompts',
          url: '/docs/prompt-engineering',
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
