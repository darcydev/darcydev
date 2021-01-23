const navItems = [
	{ label: 'Blog', url: 'blog', active: true },
	{ label: 'Contact', url: 'contact', active: false },
];

export const activeNavItems = navItems.filter((item) => item.active);
