// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import {ion} from "starlight-ion-theme";

const isProd = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
    site: isProd ? 'https://s14094.github.io' : 'http://localhost:4321',
    base: isProd ? '/KitchenDocs/' : '/',
    integrations: [
        starlight({
            title: 'Kitchen Docs',
            social: [{icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight'}],
            sidebar: [
                {
                    label: '',
                    autogenerate: {directory: '_'},
                },
                {
                    label: 'Przekąski',
                    autogenerate: {directory: 'przekaski'},
                },
                {
                    label: 'Sosy / Pasty',
                    autogenerate: {directory: 'sosy-pasty'},
                },
                {
                    label: 'Sałatki / Surówki',
                    autogenerate: {directory: 'salatki-surowki'},
                },
                {
                    label: 'Zupy',
                    autogenerate: {directory: 'zupy'},
                },
                {
                    label: 'Dania wege',
                    autogenerate: {directory: 'dania-wege'},
                },
                {
                    label: 'Dania na słodko',
                    autogenerate: {directory: 'dania-slodkie'},
                },
                {
                    label: 'Dania mięsne',
                    autogenerate: {directory: 'dania-miesne'},
                },
                {
                    label: 'Desery',
                    autogenerate: {directory: 'desery'},
                },
                {
                    label: 'Nalewki',
                    autogenerate: {directory: 'nalewki'},
                }
            ],
            plugins: [ion()],
        }),
    ],
    markdown: {
        shikiConfig: {
            themes: {
                light: 'github-light',
                dark: 'github-dark',
            },
        },
    },
});
