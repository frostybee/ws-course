import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import react from '@astrojs/react'
import mdx from "@astrojs/mdx";
import starlightLinksValidator from 'starlight-links-validator'
import starlightImageZoom from 'starlight-image-zoom'
import starlightViewModes from 'starlight-view-modes'


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
        lastUpdated: true,
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
              }]
          },
          {
            label: "RESTFul Web Services",
            autogenerate: {
              directory: "rest"
            }
          },
          {
            label: "Implementation",
            autogenerate: {
              directory: "implementation"
            }

          },
          {
            label: "The World Wide",
            autogenerate: {
              directory: "www"
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
