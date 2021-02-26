import React from 'react';
import {
  NotionRenderer,
  Code,
  Collection,
  CollectionRow,
} from 'react-notion-x';

export default function NotionPage({ title, recordMap }) {
  return (
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
  );
}

/* const NotionPage: React.FC<types.PageProps> = ({
  site,
  recordMap,
  error,
  pageId,
}) => {
  return (
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
  );
};

export default NotionPage;
 */
