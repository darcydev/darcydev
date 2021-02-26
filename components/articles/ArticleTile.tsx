/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import Date from '../Date';
import Tag from '../experiments/Tag';
import Link from '../links/Link';

interface Post {
  title: string;
  id: string;
  createdAt: string;
  description: string;
  notionId: string;
  tags?: string[];
}

interface ComponentProps extends React.HTMLAttributes<HTMLElement> {
  post: Post;
}

const defaultProps: ComponentProps = {
  post: {
    title: '1',
    id: '1',
    createdAt: '1',
    description: '1',
    notionId: '1',
    tags: ['1'],
  },
};

const ArticleTile: React.FC<ComponentProps> = ({ post }) => {
  const { id, createdAt, title, description, tags, notionId } = post;

  return (
    <StyledArticle className="article" key={id}>
      <Link href={`/articles/${notionId}`} internalLink>
        <>
          <Date date={createdAt} />
          <h2>{title}</h2>
          <p>{description}</p>
          {tags.length > 0 && (
            <ul>
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </ul>
          )}
        </>
      </Link>
    </StyledArticle>
  );
};

ArticleTile.defaultProps = defaultProps;

export default ArticleTile;

const StyledArticle = styled.article`
  flex: 1 0 100%;
  margin: 25px 0;
  transition: all 0.25s;

  &:hover {
    h2 {
      color: var(--prim-red);
    }
  }

  a {
    text-decoration: none;

    time {
      color: #fff;
      font-size: 0.9em;
    }

    h2 {
      font-size: 2em;
      margin-bottom: 0.25em;
      cursor: pointer;
    }

    p {
      margin: 0 0 5px 0;
    }
  }
`;
