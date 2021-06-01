const navItems = [
  { label: 'About', url: '/about', active: true },
  { label: 'Works', url: '/works', active: false },
  { label: 'Articles', url: '/articles', active: false },
  { label: 'Contact', url: '/contact', active: false },
];

const activeNavItems = navItems.filter((item) => item.active);

export default activeNavItems;
