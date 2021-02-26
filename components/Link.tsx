import React from 'react';
import Link from 'next/link';

interface InternalLinkProps {
  href: string;
  newTab?: boolean;
  children: React.ReactNode;
}

const internalLinkDefaultProps: InternalLinkProps = {
  href: '/',
  newTab: true,
  children: <div>hello</div>,
};

export const InternalLink: React.FC<InternalLinkProps> = ({
  href,
  children,
}) => (
  <Link href={href}>
    <a>{children}</a>
  </Link>
);

InternalLink.defaultProps = internalLinkDefaultProps;

interface ExternalLinkProps {
  href: string;
  newTab?: boolean;
  children: React.ReactElement;
}

const externalLinkDefaultProps: ExternalLinkProps = {
  href: '/',
  newTab: true,
  children: <div>hello</div>,
};

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  newTab = true,
  children,
}) => (
  <a href={href} target={newTab ? '_blank' : null} rel="noreferrer">
    {children}
  </a>
);

ExternalLink.defaultProps = externalLinkDefaultProps;
