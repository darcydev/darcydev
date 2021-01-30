import React, { ReactElement } from 'react';

interface IProps {
	href: string;
	children: ReactElement;
}

export const LinkExternal = ({ href, children }: IProps) => {
	return (
		<a href={href} target='_blank' rel='noreferrer noopener'>
			{children}
		</a>
	);
};
