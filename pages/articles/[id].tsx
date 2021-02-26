import React from 'react';
import { useRouter } from 'next/router';
import { getPageTitle, getAllPagesInSpace } from 'notion-utils';
import { NotionAPI } from 'notion-client';
import NotionPage from '../../components/notion/NotionPage';
import Layout from '../../components/layout/Layout';

const notion = new NotionAPI();

export const getStaticProps = async (context) => {
  const pageId = context.params.id as string;
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

export async function getStaticPaths() {
  const rootNotionPageId = '07a57ba3309241bfb01f5ed53ab27955';
  const rootNotionSpaceId = 'ebbc26ce-77dc-4c8f-97ae-255abc8a2e22';

  // Crawl all public pages starting from the given root page in order
  // for next.js to pre-generate all pages via static site generation (SSG).
  // This is a useful optimization but not necessary; you could just as easily
  // set paths to an empty array to not pre-generate any pages at build time.
  const pages = await getAllPagesInSpace(
    rootNotionPageId,
    rootNotionSpaceId,
    notion.getPage.bind(notion),
    {
      traverseCollections: false,
    },
  );

  const paths = Object.keys(pages).map((pageId) => `/${pageId}`);

  return {
    paths,
    fallback: true,
  };
}

export default function Article({ recordMap }) {
  if (!recordMap) {
    return null;
  }

  const { pathname } = useRouter();
  const title = getPageTitle(recordMap);

  return (
    <Layout pageTitle={title} pathname={pathname}>
      <NotionPage recordMap={recordMap} />
    </Layout>
  );
}
