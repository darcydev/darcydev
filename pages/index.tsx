/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import Container from '../components/layout/Container';
import Link from '../components/links/Link';
import { getAllExperiments } from '../lib/experiments';
import ExperimentCards from '../components/experiments/Cards';

interface Experiment {
  createdAt: string;
  description: string;
  externalUrl: string;
  id: string;
  tags: string[];
  title: string;
}

interface ComponentProps {
  experiments: Experiment[];
  preview: boolean;
}

const defaultProps: ComponentProps = {
  experiments: [
    {
      createdAt: '1',
      description: '1',
      externalUrl: '1',
      id: '1',
      tags: ['drupal'],
      title: '1',
    },
  ],
  preview: false,
};

const Index: React.FC<ComponentProps> = ({ experiments }) => {
  const { pathname } = useRouter();

  return (
    <Layout pathname={pathname} pageTitle="Darcy Price">
      <Container
        width="full"
        style={{ background: `#fff url('/images/background-pattern.jpg')` }}
      >
        <StyledDesignSection>
          <div className="txt-wrp">
            <h2>Code as a Craft 👨‍🔧</h2>
            <p>
              I strive to continually craft my skills as a developer to build
              incredible products. I am particularly passionate about crafting
              reusable, decoupled, performant and maintainable code.
            </p>
            <p>
              Inspired by the{' '}
              <Link
                href="https://github.com/getify/You-Dont-Know-JS"
                internalLink={false}
              >
                <span>YDKJS series</span>
              </Link>{' '}
              and{' '}
              <Link
                href="https://betterprogramming.pub/the-pragmatic-programmer-20th-anniversary-edition-15e19ca76e40"
                internalLink={false}
              >
                <span>The Pragmatic Programmar</span>
              </Link>
              , I have crafted the ability to both write components in vanilla
              ES6 JavaScript, but can also leverage existing libraries when it
              makes sense to do so.
            </p>
            <p>
              Fundamentally, I possess an ability and willingness to learn new
              programming languages, frameworks and paradigms.
            </p>
          </div>
          <div className="img-wrp">
            <Image
              src="/images/craft.jpg"
              height={200}
              width={350}
              sizes="(min-width: 759px) 800px"
            />
          </div>
        </StyledDesignSection>
      </Container>
      <Container>
        <StyledExperimentsSection>
          <h2>Experiments</h2>
          <p className="section-intro max-width">
            I try to stage little experiments to help me learn things I find
            interesting. I almost never finish them 🙈. But I learn a lot
            anyways
          </p>
          <ExperimentCards experiments={experiments} />
        </StyledExperimentsSection>
      </Container>
    </Layout>
  );
};

export const getStaticProps = async ({ preview = false }) => {
  const experiments = (await getAllExperiments(preview)) || [];

  return {
    props: { experiments, preview },
    revalidate: 1,
  };
};

Index.defaultProps = defaultProps;

export default Index;

const StyledDesignSection = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-top: 60px;
  padding-bottom: 60px;

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  .txt-wrp {
    margin: 0 30px 0 0;

    @media (max-width: 1200px) {
      margin: 0 0 30px 0;
    }

    h2 {
      color: #000;
      margin-bottom: 1rem;
    }

    p {
      color: #000;
      background: #fff;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .img-wrp {
    height: 100%;
    width: 100%;

    img {
      object-fit: cover;
    }
  }
`;

const StyledExperimentsSection = styled.section`
  margin-top: 40px;
  margin-bottom: 40px;

  h2 {
    margin-bottom: 1rem;
  }
`;
