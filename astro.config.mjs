import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://hasanmuammar.github.io/lumma-cs.github.io/',
  base: '/lumma-cs.github.io/',
  trailingSlash: 'always',
  publicDir: './assets',
  build: {
    format: 'directory'
  }
});
