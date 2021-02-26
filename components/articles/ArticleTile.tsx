import React from 'react';
import styled from 'styled-components';

import Date from '../Date';
import Tag from '../experiments/Tag';
import { ExternalLink } from '../Link';

interface iArticleTile {
  post: {
    title: string;
    id: string;
    createdAt: string;
    description: string;
    notionUrl: string;
    tags?: string[];
  };
}

const ArticleTile = ({ post }: iArticleTile) => {
  const { id, createdAt, title, description, tags, notionUrl } = post;

  return (
    <StyledArticle className="article" key={id}>
      <ExternalLink href={notionUrl} newTab={true}>
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
      </ExternalLink>
    </StyledArticle>
  );
};

const StyledArticle = styled.article`
  flex: 1 0 100%;
  margin: 25px 0;
  transition: all 0.25s;

  &:hover {
    h2 {
      color: var(--red-prim);
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

export { ArticleTile };
