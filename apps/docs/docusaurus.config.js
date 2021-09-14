const lightTheme = require('prism-react-renderer/themes/github');
const darkTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
  title: 'Taro - Frappé',
  tagline: 'Frappé project',
  url: 'https://taro-it.github.io',
  baseUrl: '/frappe/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Taro-IT',
  projectName: 'frappe',
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Frappé Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg'
      },
      items: [
        {
          href: 'https://github.com/Taro-IT/frappe',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Taro, Inc. Built with Docusaurus.`
    },
    prims: {
      theme: lightTheme,
      darkTheme: darkTheme
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          remarkPlugins: [require('mdx-mermaid')],
          editUrl: 'https://github.com/Taro-IT/frappe/edit/main/apps/docs'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
};
