import React from 'react';
import { useRouter } from 'next/router';
import { getPageTitle, getAllPagesInSpace } from 'notion-utils';
import { NotionAPI } from 'notion-client';
import NotionPage from '../../components/notion/NotionPage';
import Layout from '../../components/layout/Layout';
import Page404 from '../../components/Page404';

const notion = new NotionAPI();

const Article = ({ recordMap }) => {
  // BUG not working
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
};

export default Article;

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
  const rootNotionSpaceId = process.env.NOTION_SPACE_ID;

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
