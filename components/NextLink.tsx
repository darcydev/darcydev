import React, { ReactNode } from 'react';
import Link from 'next/link';

interface INextLink {
	children: ReactNode;
	href: string;
	newTab: boolean;
}

export default function NextLink({ children, href, newTab }: INextLink) {
	return (
		<Link href={href}>
			<a
				target={newTab ? '_blank' : null}
				rel={newTab ? 'noreferrer noopener' : null}
			>
				{children}
			</a>
		</Link>
	);
}
