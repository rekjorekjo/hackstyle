import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { deployment } from './deployment.mjs';

export default defineConfig({
  // Keep real and regression content stores isolated when dependencies are shared.
  cacheDir: './.astro/cache/',
  ...deployment(),
  trailingSlash: 'always',
  output: 'static',
  devToolbar: { enabled: false },
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [[rehypeKatex, { strict: 'warn', throwOnError: true }]],
    }),
    shikiConfig: { theme: 'vesper', langAlias: { sage: 'python', sagemath: 'python', plaintext: 'text', output: 'text', log: 'text', shell: 'bash', Solidity: 'solidity' }, wrap: false },
  },
});
