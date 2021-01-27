import React, { ReactNode } from 'react';
import Link from 'next/link';

interface INextLink {
	children: ReactNode;
	href: string;
}

export default function NextLink({ children, href }: INextLink) {
	return (
		<Link href={href}>
			<a>{children}</a>
		</Link>
	);
}
