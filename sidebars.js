/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Poradniki',
      items: ['tutorial/start', 'tutorial/onlinemode', 'tutorial/world'],
    },
  ],
};

module.exports = sidebars;
