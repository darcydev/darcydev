/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import ExperimentCard from './Card';

interface Experiment {
  id: string;
  createdAt: string;
  description: string;
  externalUrl: string;
  tags: string[];
  title: string;
}

interface ComponentProps {
  experiments: Experiment[];
}

const defaultProps: ComponentProps = {
  experiments: [
    {
      id: '1',
      createdAt: '1',
      description: '1',
      externalUrl: 'https://darcydev.com',
      tags: ['javascript'],
      title: '1',
    },
  ],
};

const ExperimentCards: React.FC<ComponentProps> = ({ experiments }) => (
  <StyledContainer>
    {experiments.map((experiment) => (
      <ExperimentCard key={experiment.id} experiment={experiment} />
    ))}
  </StyledContainer>
);

ExperimentCards.defaultProps = defaultProps;

export default ExperimentCards;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
