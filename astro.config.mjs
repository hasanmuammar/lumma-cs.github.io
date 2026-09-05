import { defineConfig } from 'astro/config';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  output: 'static',
  site: process.env.SITE_URL || undefined,
  base: isGitHubPages ? '/lumma-cs.github.io' : '/',
  build: {
    format: 'directory'
  }
});
