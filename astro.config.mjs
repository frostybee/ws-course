import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://frostybee.github.io",
  base: "/ws-course",
  integrations: [starlight({
    title: "420-511-VA Web Services",
    social: {
      github: "https://github.com/frostybee/ws-course"
    },
    customCss: [
      // Relative path to your custom CSS file
      "./src/styles/custom.css"],
    // Set English as the default language for this site.
    defaultLocale: "en",
    sidebar: [{
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
      label: "REST Resources",
      items: [{
        label: "Resource Design",
        link: "/resources/resources"
      }, {
        label: "Collection Resources",
        link: "/resources/collection-resources"
      }, {
        label: "Sub-Resources",
        link: "/resources/relationships-and-sub-resources"
      }, {
        label: "Composite Resource",
        link: "/resources/composite-resource"
      }]
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
  }), mdx()]
});
