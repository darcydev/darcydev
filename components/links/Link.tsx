/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import NextLink from 'next/link';

interface Props {
  href: string;
  children: React.ReactNode;
  internalLink?: boolean;
  buttonStyle?: boolean;
  newTab?: boolean;
}

const defaultProps: Props = {
  href: '/',
  children: <span>Click me</span>,
  internalLink: false,
  buttonStyle: false,
  newTab: true,
};

const Link: React.FC<Props> = ({
  href,
  children,
  internalLink,
  buttonStyle,
  newTab,
}) => {
  if (internalLink) {
    return (
      <NextLink href={href}>
        <a className={buttonStyle ? 'btn' : ''}>{children}</a>
      </NextLink>
    );
  }

  return (
    <a
      href={href}
      target={newTab ? '_blank' : null}
      rel="noreferrer"
      className={buttonStyle ? 'btn' : ''}
    >
      {children}
    </a>
  );
};

Link.defaultProps = defaultProps;

export default Link;
