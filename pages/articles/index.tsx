import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '../../components';
import Container from '../../components/layout/container';
import ArticlesWrap from '../../components/articles/ArticlesWrap';
import ArticleTile from '../../components/articles/ArticleTile';
import { getAllPostsPreview } from '../../lib/posts';
import { ExternalLink } from '../../components/Link';

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
          <ExternalLink href="https://www.notion.so">
            <span>Notion</span>
          </ExternalLink>{' '}
          powered by{' '}
          <ExternalLink href="https://github.com/NotionX/react-notion-x">
            <span>react-notion-x</span>
          </ExternalLink>
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
