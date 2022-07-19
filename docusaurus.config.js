// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'voxelhost.pl - baza wiedzy',
  tagline: 'Wszystkie potrzebne informacje aby Twój serwer był w jak najlepszej kondycji.',
  url: 'https://docs.voxelhost.pl',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'voxelhostpl',
  projectName: 'knowledge-base',

  i18n: {
    defaultLocale: 'pl',
    locales: ['pl'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/voxelhostpl/knowledge-base/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'voxelhost.pl',
        logo: {
          alt: 'Logo voxelhost.pl',
          src: 'img/logo-cube.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Baza wiedzy',
          },
          {
            href: 'https://github.com/voxelhostpl/knowledge-base',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Baza wiedzy',
            items: [
              {
                label: 'Wprowadzenie',
                to: '/docs/',
              },
            ],
          },
          {
            title: 'Społeczność',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/GXqxqy6swA',
              },
              {
                label: 'TikTok',
                href: 'https://www.tiktok.com/@voxelhost',
              },
            ],
          },
          {
            title: 'Więcej',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/voxelhostpl/knowledge-base',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} voxelhost.pl`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
