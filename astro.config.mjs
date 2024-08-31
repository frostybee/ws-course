import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import react from '@astrojs/react'
import mdx from "@astrojs/mdx";
import starlightLinksValidator from 'starlight-links-validator'

// https://astro.build/config
export default defineConfig({
  site: "https://frostybee.github.io",
  base: "/ws-course",
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://shiki.style/themes
      theme: 'aurora-x',
      // Alternatively, provide multiple themes
      // See note below for using dual light/dark themes
      // themes: {
      //   light: 'github-light',
      //   dark: 'github-dark',
      // },
      // Disable the default colors
      // https://shiki.style/guide/dual-themes#without-default-color
      // (Added in v4.12.0)
      defaultColor: false,
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://shiki.style/languages
      langs: ['php', 'json'],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
      // Add custom transformers: https://shiki.style/guide/transformers
      // Find common transformers: https://shiki.style/packages/transformers
      transformers: [],
    },
  },
  integrations: [
    starlight(
      {
        title: "420-511-VA Web Services",
        description: "Material website for the Web Services course",
        social: {
          github: "https://github.com/frostybee/ws-course"
        },
        lastUpdated: true,
        customCss: [
          // Relative path to your custom CSS file
          "./src/styles/custom_styles.css",
        ],
        // plugins: [
        //   starlightLinksValidator({
        //     errorOnFallbackPages: false,
        //   }),
        // ],
        // @doc: https://expressive-code.com/installation/
        expressiveCode: {
          styleOverrides: {
            borderColor: 'transparent',
            borderRadius: 'var(--border-radius)',
          },
          //@themes: https://expressive-code.com/guides/themes/
          themes: ['aurora-x', 'catppuccin-latte'],
        },
        components: {
          Header: './src/components/docs/Header.astro',
          // PageSidebar: './src/components/docs/PageSidebar.astro',
          PageTitle: './src/components/docs/PageTitle.astro',
        },
        // Set English as the default language for this site.
        defaultLocale: "en",
        sidebar: [
          {
            label: "Guides",
            items: [
              // Each item here is one entry in the navigation menu.
              {
                label: "Information",
                link: "/guides/"
              }]
          },
          {
            label: "Lectures",
            autogenerate: {
              directory: "lectures"
            }
          },
          {
            label: "RESTFul Web Services",
            items: [
              {
                label: "Resource Design",
                link: "/rest/resources"
              },
              {
                label: "Collection Resources",
                link: "/rest/collection-resources"
              },
              {
                label: "Sub-Resources",
                link: "/rest/relationships-and-sub-resources"
              },
              {
                label: "Composite Resource",
                link: "/rest/composite-resource"
              },
              {
                label: "REST features",
                link: "/rest/rest-features"
              },
              {
                label: "REST vs SOAP",
                link: "/rest/rest-vs-soap"
              },
              {
                label: "SOAP Web Services",
                link: "/rest/soap"
              }
              ,
              {
                label: "Load Balancer",
                link: "/rest/load-balancer"
              }
            ]
          },
          {
            label: "Implementation",
            items: [
              {
                label: "Result Pattern",
                link: "/implementation/result-pattern"
              },
            ]
          },
          {
            label: "HTTP",
            autogenerate: {
              directory: "http"
            }
          },
          {
            label: "Extra",
            items: [
              // Each item here is one entry in the navigation menu.
              {
                label: "Public API",
                link: "/extra/public-apis"
              }]
          },
          {
            label: "Reference",
            autogenerate: {
              directory: "reference"
            }
          }]
      }),
    mdx(),
    react()
  ]
});
