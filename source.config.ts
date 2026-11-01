import { defineDocs, defineConfig } from 'fumadocs-mdx/config';
import lastModified from 'fumadocs-mdx/plugins/last-modified';

export const { docs, meta } = defineDocs({
  dir: 'content/docs',
  docs: {
    lastModified: true,
  },
});

export default defineConfig({
  plugins: [lastModified()],
});

