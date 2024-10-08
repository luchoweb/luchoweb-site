import { defineConfig } from 'astro/config';
import relativeLinks from 'astro-relative-links';

export default defineConfig({
  integrations: [relativeLinks()],
});
