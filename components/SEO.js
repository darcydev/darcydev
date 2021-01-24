import React from 'react';
import { NextSeo } from 'next-seo';

export default function SEO({
	title = 'Darcy Price',
	description = 'Darcy Price Full-Stack Developer based in Sydney, Australia. Personal website and blog.',
}) {
	return <NextSeo title={title} description={description} />;
}
