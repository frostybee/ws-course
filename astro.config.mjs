import { defineConfig } from "astro/config";
import { passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'
import rehypeExternalLinks from "rehype-external-links";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeSlug from 'rehype-slug';
import starlightSidebarTopics from "starlight-sidebar-topics";
import starlightScrollToTop from 'starlight-scroll-to-top';

import leftSidebar from './src/config/sidebars/main-sidebar.ts'
import appConfig from './src/config/website-config.ts'
import starlightThemeGalaxy from 'starlight-theme-galaxy'


//@see: https://astro.build/config
export default defineConfig({
  site: appConfig.siteURI,
  base: appConfig.baseDirectory,
  integrations: [
    starlight({
      title: appConfig.title,
      favicon: appConfig.favicon,
      social: [
        { icon: 'github', label: 'GitHub', href: appConfig.gitHubRepoUri },
      ],
      tableOfContents: {minHeadingLevel: 2, maxHeadingLevel: 4},
      //TODO: add the head property.
      defaultLocale: "en",

      // Load components overrides.
      components: {
        //  TableOfContents: './src/components/ui/CustomToC.astro',
        //  Head: './src/components/search/TelescopeProvider.astro',
         Header: './src/components/ui/CustomHeader.astro',
         Sidebar: './src/components/ui/SideBar.astro',
      },

      // Load and apply the default custom styles.
      customCss: [
               "./src/styles/index.css",
      ],
      lastUpdated: true,
      plugins: [
        starlightScrollToTop(
          {
            threshold: 10,
            showTooltip: true,
            showProgressRing: true
          }
        ),
        starlightImageZoom(),
        starlightThemeGalaxy(),
        starlightSidebarTopics(
          [
            // Load the sidebar items from the ./src/config/sidebar/sidebar-items.ts file.
            ...leftSidebar
          ],
        )
      ],
      //TODO: enable the links validator plugin when the site is ready for production or if you want to validate the links in the site.
      // plugins: [
      //   starlightLinksValidator({
      //     errorOnFallbackPages: false,
      //   }),
      // ],
    }
    ),
  ],
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      rehypeHeadingIds,
      // [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      [rehypeExternalLinks,
        {
          content: {
            type: "text",
            value: " ↗",
          },
          properties: {
            target: "_blank",
          },
          rel: ["noopener"],
        },
      ],
    ],
  },
  image: {
    service: passthroughImageService()
  }
});
