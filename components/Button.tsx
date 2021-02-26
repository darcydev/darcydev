import { ReactElement } from 'react';
import styled from 'styled-components';
import { FiExternalLink } from 'react-icons/fi';
import { ExternalLink } from './Link';

interface iButtonLink {
  children: ReactElement;
  newTab?: boolean;
  href: string;
}

export const ButtonLink = ({ href, newTab = true, children }: iButtonLink) => {
  return (
    <StyledContainer newTab={newTab}>
      <ExternalLink href={href} newTab={newTab}>
        {newTab ? (
          <>
            {children}
            <FiExternalLink />
          </>
        ) : (
          children
        )}
      </ExternalLink>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  background: var(--prim-color);
  color: var(--text-color-white);
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  transition: all 0.6s;

  &:hover {
    background: #ff99aa;
  }

  a {
    position: relative;
    width: ${({ newTab }) => (newTab ? '100%' : null)};
    display: ${({ newTab }) => (newTab ? 'flex' : 'inline-block')};
    align-items: ${({ newTab }) => (newTab ? 'center' : null)};

    &:hover {
      text-decoration: none;
    }

    span {
      margin: auto;
    }

    svg {
      position: absolute;
      right: 0;

      &:hover {
        top: 4px;
      }
    }
  }
`;
