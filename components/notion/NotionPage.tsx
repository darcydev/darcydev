/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import {
  NotionRenderer,
  Code,
  Collection,
  CollectionRow,
} from 'react-notion-x';
import styled from 'styled-components';

const NotionPage = ({ recordMap, fullPage = false }) => (
  <StyledContainer fullPage={fullPage}>
    <NotionRenderer
      components={{
        code: Code,
        collection: Collection,
        collectionRow: CollectionRow,
      }}
      recordMap={recordMap}
      fullPage
      darkMode
    />
  </StyledContainer>
);

export default NotionPage;

const StyledContainer = styled.div`
  .notion {
    --notion-max-width: 720px;
    --notion-header-height: 54px;
  }

  .index-page {
    --notion-max-width: 900px;
  }

  .notion-app {
    background: unset;

    .notion-frame {
      header.notion-header {
        display: none;
      }

      .notion-page-scroller {
        main.notion-page {
          margin: 0 12px;
          width: var(--notion-max-width);
          padding-bottom: calc(max(5vh, 32px)) !important;
          line-height: 1.65;

          @media (max-width: 720px) {
            padding-left: 2vw;
            padding-right: 2vw;
          }

          .notion-title {
            display: block;
            text-align: center;
          }

          .notion-collection-row {
          }

          .notion-page-content {
            article {
              .notion-table-of-contents {
                border-bottom: 1px solid #fff;
                padding: 20px 0;
                margin-bottom: 20px;

                a.notion-table-of-contents-item {
                  span {
                    color: #fff;
                    border-bottom: none;
                  }

                  &:hover {
                    text-decoration: none;
                  }
                }
              }

              .notion-text {
                padding: 0.5em 2px;
              }

              .notion-code {
                background: #000;
              }

              .notion-link {
                border-width: 2px;
                border-image: linear-gradient(
                  90.68deg,
                  var(--prim-purple) 0.26%,
                  var(--prim-pink) 102.37%
                );
                border-image-slice: 1;
                opacity: 1;

                &:hover {
                  text-decoration: none;
                  color: var(--prim-purple);
                  border-width: 0;
                }
              }
            }
          }
        }

        main.notion-full-width {
          --notion-max-width: ${({ fullPage }) =>
            fullPage ? 'calc(min(1920px), 98vw))' : 'unset'};
          padding-left: ${({ fullPage }) =>
            fullPage ? 'calc(min(96px), 8vw))' : 'unset'};
          padding-right: ${({ fullPage }) =>
            fullPage ? 'calc(min(96px), 8vw))' : 'unset'};
        }
      }
    }
  }
`;
