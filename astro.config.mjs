import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
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
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
