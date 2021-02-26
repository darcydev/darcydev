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
  .notion-app {
    background: unset;

    .notion-frame {
      header.notion-header {
        display: none;
      }

      .notion-page-scroller {
        main.notion-page {
          .notion-title {
          }

          .notion-collection-row {
          }

          .notion-page-content {
            article {
              .notion-table-of-contents {
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
