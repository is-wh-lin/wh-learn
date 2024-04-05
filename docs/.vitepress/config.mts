import { defineConfig } from 'vitepress';

const currentYear = new Date().getFullYear();

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'W.H. Learn',
  description: 'Learning by doing',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.jpeg',
    nav: [{ text: 'About', link: '/about' }],
    sidebar: [
      {
        text: 'JavaScript',
        // collapsed: false,
        items: [
          // { text: '', link: '' },
        ],
      },
      {
        text: 'TypeScript',
        // collapsed: false,
        items: [],
      },
      {
        text: 'CSS',
        // collapsed: false,
        items: [],
      },
    ],
    footer: {
      message: 'Powered by VitePress',
      copyright: `© ${currentYear} W.H. Lin All rights reserved.`,
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },
    search: {
      provider: 'local',
    },

    // socialLinks: [{ icon: { svg: 'gitlab' }, link: 'https://gitlab.com/iswhlin' }],
  },
});
