/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import {
  NotionRenderer,
  Code,
  Collection,
  CollectionRow,
} from 'react-notion-x';
import styled from 'styled-components';

export default function NotionPage({ recordMap }) {
  return (
    <StyledContainer>
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
}

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
                border-width: 3px;
                border-image: linear-gradient(
                  90.68deg,
                  #b439df 0.26%,
                  #e5337e 102.37%
                );
                border-image-slice: 1;
                opacity: 1;

                &:hover {
                  text-decoration: none;
                  color: #b439df;
                }
              }
            }
          }
        }
      }
    }
  }
`;
