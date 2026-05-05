import type { Config } from '@react-router/dev/config';

export default {
	// Config options...
	// Server-side render by default, to enable SPA mode set this to `false`
	ssr: true,
	// Prerender the following routes at build time, to enable static site generation (SSG)
	prerender: [],
} satisfies Config;
