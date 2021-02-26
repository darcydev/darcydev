import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout/Layout';
import Container from '../../components/layout/Container';
import ArticlesWrap from '../../components/articles/ArticlesWrap';
import ArticleTile from '../../components/articles/ArticleTile';
import { getAllPostsPreview } from '../../lib/posts';
import Link from '../../components/links/Link';

const Articles = ({ posts }) => {
  const { pathname } = useRouter();

  return (
    <Layout
      pathname={pathname}
      pageTitle="Articles"
      pageDescription="Articles and Essays about Frontend Web Development and software engineering"
    >
      <Container>
        <p className="page-intro">
          A collection of blog posts about new things that I am learning about..
          The articles are written and published on{' '}
          <Link href="https://www.notion.so">
            <span>Notion</span>
          </Link>{' '}
          powered by{' '}
          <Link href="https://github.com/NotionX/react-notion-x">
            <span>react-notion-x</span>
          </Link>{' '}
          🚀
        </p>
        <ArticlesWrap>
          {posts.map((post) => (
            <ArticleTile key={post.id} post={post} />
          ))}
        </ArticlesWrap>
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const posts = (await getAllPostsPreview()) || [];

  return {
    props: { posts },
    revalidate: 1,
  };
};

export default Articles;
