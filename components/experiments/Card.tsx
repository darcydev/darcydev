/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import Tilt from 'react-tilt';
import { ExternalLink as ExternalLinkIcon } from 'react-feather';
import Tag from './Tag';
import { formatDate } from '../../utils/formateDate';
import Link from '../links/Link';

interface ComponentProps {
  experiment: {
    createdAt: string;
    description: string;
    externalUrl: string;
    tags: string[];
    title: string;
  };
}

const defaultProps: ComponentProps = {
  experiment: {
    createdAt: '1',
    description: '1',
    externalUrl: 'https://darcydev.com',
    tags: ['javascript'],
    title: '1',
  },
};

const ExperimentCard: React.FC<ComponentProps> = ({ experiment }) => {
  const { title, description, createdAt, tags, externalUrl } = experiment;

  return (
    <StyledTilter>
      <Link href={`${externalUrl}`} internalLink={false}>
        <>
          <div className="experiment-meta">
            <time className="experiment-date">{formatDate(createdAt)}</time>
            <span>
              <ExternalLinkIcon />
            </span>
          </div>
          <h3 className="experiment-item-heading">{title}</h3>
          <p>{description}</p>
          <ul>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </ul>
        </>
      </Link>
    </StyledTilter>
  );
};

ExperimentCard.defaultProps = defaultProps;

export default ExperimentCard;

const StyledTilter = styled(Tilt)`
  padding: 40px 0;
  background: #202020;
  margin-bottom: 0.75em;
  border-radius: 4px;
  padding: 0.75em;
  cursor: pointer;

  @media all and (min-width: 540px) {
    margin: 0 0.5em 1em;
    flex: 1 1 40%;
  }

  @media all and (min-width: 1024px) {
    flex: 0 0 30%;
  }

  a {
    text-decoration: none;

    .experiment-meta {
      display: flex;
      align-items: center;
      justify-content: space-between;

      time {
        font-size: 0.85em;
        color: #808080;
      }
    }

    ul {
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
