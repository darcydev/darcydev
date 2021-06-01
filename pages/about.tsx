/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { useRouter } from 'next/router';
import NextImage from 'next/image';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import Container from '../components/layout/Container';
import calculateAge from '../utils/calculateAge';

const About = () => {
  const { pathname } = useRouter();
  const age = calculateAge();

  return (
    <Layout
      pathname={pathname}
      pageTitle="About Me 🕺"
      pageDescription="About page of Portfolio by Darcy Price, Full-Stack Developer in Australia"
    >
      <StyledSection>
        <Container width="narrow">
          <div className="postContent">
            <div className="avatarImage">
              <NextImage src="/images/profile.jpg" width={200} height={200} />
            </div>
            <p>
              I&apos;m Darcy Price, a {age} years&apos; old full-stack developer
              based in Sydney, Australia. I love to build performant and
              beautiful web applications. I&apos;m also passionate about
              building performant, decoupled, testable and maintainable code,
              and have a keen interest in open source and learning new
              technologies.
            </p>
            <p>
              After my graduating from law school, I worked as a lawyer for two
              years in London. However, a secondment program working to provide
              solar energy solutions overseas, exposed me to the power of
              technology. Within a few months, I had decided to pursue a career
              as a developer, and and was working as a freelance full-stack
              developer.
            </p>
            <p>
              I mostly work with ReactJS, NodeJS, PHP (Laravel), Drupal,
              WordPress, NextJS, Styled Components, NextJS. If you&apos;re work
              with those technologies, shoot at me on{' '}
              <a
                href="https://twitter.com/mrdarcyprice"
                target="_blank"
                rel="noopenner noreferrer"
              >
                Twitter
              </a>{' '}
              and let&apos;s build together! 😊
            </p>
          </div>
        </Container>
      </StyledSection>
    </Layout>
  );
};

export default About;

const StyledSection = styled.section`
  .postContent {
    display: flex;
    flex-direction: column;
    text-align: center;

    .avatarImage {
      margin: 0 0 1.5em 0;

      img {
        border-radius: 100%;
        height: 150px;
        width: 150px;

        @media (min-width: 759px) {
          height: 200px;
          width: 200px;
        }

        @media (min-width: 1400px) {
          width: 210px;
        }
      }
    }
  }
`;
