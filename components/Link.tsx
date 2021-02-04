import React, { ReactNode, ReactElement } from 'react';
import Link from 'next/link';

interface iInternalLink {
	children: ReactNode;
	href: string;
}

interface iExternalLink {
	href: string;
	newTab?: boolean;
	children: ReactElement;
}

export const InternalLink = ({ href, children }: iInternalLink) => {
	return (
		<Link href={href}>
			<a>{children}</a>
		</Link>
	);
};

export const ExternalLink = ({
	href,
	newTab = true,
	children,
}: iExternalLink) => {
	return (
		<a
			href={href}
			target={newTab ? '_blank' : null}
			rel={newTab ? 'noreferrer noopener' : null}
		>
			{children}
		</a>
	);
};
