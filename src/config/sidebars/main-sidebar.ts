import cssSidebar from './css-sidebar.ts'
import htmlSidebar from './html-sidebar.ts'

export default
  [
    {
      label: "Lectures",
      link: "/guides",
      icon: "open-book",
      items: [
        {
          label: "Home",
          autogenerate: {
            directory: "guides/",
          }
        }
      ],
    },
    {
      label: "HTML",
      link: "/html",
      icon: "seti:html",
      items: [
        ...htmlSidebar
      ],
    },
    {
      label: "CSS",
      link: "/css",
      icon: "seti:css",
      items: [
        ...cssSidebar
      ],
    },
    {
      label: "JavaScript",
      link: "/javascript",
      icon: "seti:javascript",
      items: [
        {
          label: "JavaScript Topics",
          autogenerate: {
            directory: "javascript/",
          }
        }
      ],
    },
    {
      label: "PHP",
      link: "/php",
      icon: "seti:php",
      items: [
        {
          label: "PHP Topics",
          autogenerate: {
            directory: "php/",
          }
        }
      ],
    },
    {
      label: "Resources",
      link: "resources/",
      icon: "seti:notebook",
      items: [
        {
          label: "Recommended Resources",
          autogenerate: {
            directory: "resources/",
          }
        }
      ],
    },
  ];
