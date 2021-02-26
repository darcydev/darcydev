/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Layout from './layout/Layout';
import Container from './layout/Container';
import { InternalLink } from './Link';

interface Props {
  message?: string;
  pageTitle?: string;
}

const defaultProps: Props = {
  message: 'Sorry, page not found',
  pageTitle: 'Page Not Found',
};

const Page404: React.FC<Props> = ({ message, pageTitle }) => {
  const { pathname } = useRouter();

  console.log('pathname :>> ', pathname);

  return (
    <Container>
      <div className="content">
        <div className="img-wrp">
          <Image
            src="https://via.placeholder.com/600.jpg"
            width={200}
            height={200}
          />
        </div>
      </div>
    </Container>
  );
};

Page404.defaultProps = defaultProps;

export default Page404;
