import { DefaultSeo } from 'next-seo';

import Layout from '../components/Layout';
import { GlobalStyles } from '../styles';
import seoConfig from '../constants/next-seo.config';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyles />
			<Layout>
				<DefaultSeo {...seoConfig} />
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
