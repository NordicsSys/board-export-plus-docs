import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Board Export+ Docs',
  tagline: 'Client-ready Trello exports — guides, schedules, and delivery.',
  favicon: 'img/favicon-32x32.png',

  future: {
    v4: true,
  },

  url: process.env.DOCS_SITE_URL ?? 'https://board-export-docs.nikaj.dev',
  baseUrl: '/',

  organizationName: 'NordicsSys',
  projectName: 'board-export-plus-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: {
          routeBasePath: 'blog',
          showReadingTime: true,
          blogTitle: 'Board Export+ Blog',
          blogDescription: 'Practical guides for exporting, reporting on, and backing up Trello boards.',
          postsPerPage: 10,
          feedOptions: {
            type: ['rss', 'atom'],
            copyright: `Copyright © ${new Date().getFullYear()} Board Export+.`,
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/board-export-logo.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Board Export+',
      logo: {
        alt: 'Board Export+',
        src: 'img/board-export-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Guide',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://www.youtube.com/watch?v=IQOwqYVIWLk',
          label: 'Video',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Power-Up Guide',
              to: '/docs/power-up-guide',
            },
            {
              label: 'Trello export guide',
              to: '/blog/export-trello-board-excel-csv-pdf-json',
            },
          ],
        },
        {
          title: 'Product',
          items: [
            {
              label: 'Video guide',
              href: 'https://www.youtube.com/watch?v=IQOwqYVIWLk',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Board Export+.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
