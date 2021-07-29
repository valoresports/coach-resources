const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Valor Coach Resources",
  tagline: "Dinosaurs are cool",
  url: "https://valoresports.github.io/coach-resources",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "valoresports",
  projectName: "coach-resources",
  themeConfig: {
    navbar: {
      title: "Coach Resources",
      logo: {
        alt: "Valor Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "doc",
          docId: "content-production/content-production",
          position: "left",
          label: "Content Production",
        },
        {
          type: "doc",
          docId: "live-coaching/live-coaching",
          position: "left",
          label: "Live Coaching",
        },
        {
          type: "doc",
          docId: "human-resources/human-resources",
          position: "left",
          label: "Human Resources",
        },
        {
          type: "doc",
          docId: "miscellaneous-guides/miscellaneous-guides",
          position: "left",
          label: "Miscellaneous Guides",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Other links",
          items: [
            {
              label: "Website",
              to: "https://valoresports.com/",
            },
            {
              label: "GitHub",
              href: "https://github.com/valoresports/coach-resources",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Valor Esports Pty Ltd ABN 94 648 832 080. All rights reserved.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
