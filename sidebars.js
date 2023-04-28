/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Poradniki',
      items: ['tutorial/start', 'tutorial/server-list', 'tutorial/fastlogin'],
    },
  ],
};

module.exports = sidebars;
