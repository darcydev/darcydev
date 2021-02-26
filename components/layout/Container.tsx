/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import { IWidth, getWidth } from '../../utils/getWidth';

interface ComponentProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  width?: IWidth;
}

const defaultProps: ComponentProps = {
  children: <div>hello</div>,
  width: 'default',
};

const Container: React.FC<ComponentProps> = ({ children, width, ...props }) => (
  <StyledSection width={width} {...props}>
    {children}
  </StyledSection>
);

Container.defaultProps = defaultProps;

export default Container;

const StyledSection = styled.section`
  padding: 0 4%;
  max-width: ${({ width }) => getWidth(width)};
  margin: 0 auto;
`;
