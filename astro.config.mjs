import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://hasanmuammar.github.io',
  base: '/lumma-cs.github.io',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
