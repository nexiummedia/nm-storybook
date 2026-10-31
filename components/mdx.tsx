import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { File, Folder, Files } from 'fumadocs-ui/components/files';
import type { MDXComponents } from 'mdx/types';
import React from 'react';

export function YouTube({ id }: { id: string }) {
  return (
    <div className="my-6 aspect-video w-full overflow-hidden rounded-xl border border-fd-border shadow-sm bg-fd-muted">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full border-0"
      />
    </div>
  );
}

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Tab,
    Tabs,
    Step,
    Steps,
    Accordion,
    Accordions,
    File,
    Folder,
    Files,
    YouTube,
    ...components,
  };
}

export const useMDXComponents = getMDXComponents;

