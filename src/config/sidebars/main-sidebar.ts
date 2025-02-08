// Configuration of the main sidebar.
export default
  [
    {
      label: "Lectures",
      link: "/lectures",
      icon: "open-book",
      id: "lectures",
      items: [
        {
          label: "REST",
          collapsed: true,

          autogenerate: {
            directory: "lectures/rest",
          }
        },
        {
          label: "Bruh",
          autogenerate: { directory: 'lectures/test' },
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
      id: "implementation",
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
      id: "javascript",
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
      id: "php",
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
