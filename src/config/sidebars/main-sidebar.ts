// Configuration of the main sidebar.
export default
  [
    {
      label: "Lectures",
      link: "/lectures",
      icon: "open-book",
      items: [
        {
          label: "REST",
          collapsed: true,
          autogenerate: {
            directory: "lectures/rest",
          }
        },
        {
          label: "Pagination & Filtering",
          autogenerate: { directory: 'lectures/pagination' },
        },
        {
          label: "Security",
          autogenerate: { directory: 'lectures/security' },
        },
        {
          label: "WWW",
          autogenerate: { directory: 'lectures/www' },
        }
      ],
    },
    {
      label: "Implementation",
      link: "/implementation",
      icon: "seti:html",
      items: [
        {
          label: "Implementation",
          autogenerate: {
            directory: "implementation/",
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
          label: "Javascript",
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
