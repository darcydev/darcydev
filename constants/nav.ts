const navItems = [
	{ label: 'About', url: '/about', active: true },
	{ label: 'Works', url: '/works', active: true },
	{ label: 'Articles', url: '/articles', active: true },
	{ label: 'Contact', url: '/contact', active: false },
];

export const activeNavItems = navItems.filter((item) => item.active);
