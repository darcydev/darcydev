const navItems = [
	{ label: 'About', url: 'about', active: true },
	{ label: 'Work', url: 'work', active: true },
	{ label: 'Articles', url: 'articles', active: true },
	{ label: 'Contact', url: 'contact', active: true },
];

export const activeNavItems = navItems.filter((item) => item.active);
