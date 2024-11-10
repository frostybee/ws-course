import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import react from '@astrojs/react'
import mdx from "@astrojs/mdx";
import starlightLinksValidator from 'starlight-links-validator'
import starlightImageZoom from 'starlight-image-zoom'
import starlightViewModes from 'starlight-view-modes'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://frostybee.github.io",
  base: "/ws-course",
  integrations: [
    starlight(
      {
        title: "420-511-VA Web Services",
        description: "Material website for the Web Services course",
        social: {
          github: "https://github.com/frostybee/ws-course"
        },
        lastUpdated: false,
        customCss: [
          // Relative path to your custom CSS file
          "./src/styles/custom_styles.css",
        ],
        plugins: [
          starlightImageZoom(),
          starlightViewModes()
        ],
        // plugins: [
        //   starlightLinksValidator({
        //     errorOnFallbackPages: false,
        //   }),
        // ],
        // @doc: https://expressive-code.com/installation/
        expressiveCode: {
          defaultProps: {
            wrap: true
          },
          styleOverrides: {
            borderColor: 'transparent',
            borderRadius: 'var(--border-radius)',
            // frames: {
            //   shadowColor: '#e0f7fa',
            // }
          },
          //@themes: https://expressive-code.com/guides/themes/
          themes: ['dracula', 'catppuccin-latte'],
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
              }
            ]
          },
          {
            label: "RESTFul Web Services",
            collapsed: true,
            autogenerate: {
              directory: "rest"
            }
          },
          {
            label: "Pagination & Filtering",
            collapsed: true,
            autogenerate: {
              directory: "pagination"
            }
          },
          {
            label: "Implementation",
            collapsed: true,
            autogenerate: {
              directory: "implementation"
            }

          },
          {
            label: "JavaScript & AJAX",
            collapsed: false,
            badge: { text: 'Assignment', variant: 'caution' },
            autogenerate: {
              directory: "javascript"
            }

          },
          {
            label: "The World Wide",
            collapsed: true,
            autogenerate: {
              directory: "www"
            }
          },
          {
            label: "PHP",
            collapsed: false,
            autogenerate: {
              directory: "php"
            }
          },
          {
            label: "Extra",
            collapsed: true,
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
    react(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ]
});
