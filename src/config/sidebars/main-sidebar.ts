import cssSidebar from './css-sidebar.ts'
import htmlSidebar from './html-sidebar.ts'

// Configuration of the main sidebar.
export default
  [
    {
      label: "Lectures",
      link: "/lectures",
      icon: "open-book",
      items: [
        {
          label: "Lectures",
          autogenerate: {
            directory: "lectures/",
          }
        }
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
