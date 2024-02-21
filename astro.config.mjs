import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://frostybee.github.io',
	base: '/ws-course',
	integrations: [
		starlight({
			title: '420-511-VA Web Services',
			social: {
				github: 'https://github.com/frostybee/ws-course',
			},
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			// Set English as the default language for this site.
			defaultLocale: 'en',
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Information', link: '/guides/' },
					],
				},
				{
					label: 'Lectures',
					autogenerate: { directory: 'lectures' },
				},
				{
					label: 'HTTP',
					autogenerate: { directory: 'http' }
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
