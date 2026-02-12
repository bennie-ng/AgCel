// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://bennie-ng.github.io',
	base: '/ag-cel',
	integrations: [
		starlight({
			title: 'Ag-Cel',
			social: [
				{
					label: 'GitHub',
					icon: 'github',
					href: 'https://github.com/bennie-ng/ag-cel',
				},
			],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Introduction', slug: 'intro' },
						{ label: 'Installation', slug: 'installation' },
					],
				},
				{
					label: 'Core Concepts',
					items: [
						{ label: 'Skills', slug: 'concepts/skills' },
						{ label: 'Rules', slug: 'concepts/rules' },
					],
				},
				{
					label: 'References',
					items: [
						{ label: 'CLI Commands', slug: 'reference/cli' },
					],
				},
			],
		}),
	],
});
