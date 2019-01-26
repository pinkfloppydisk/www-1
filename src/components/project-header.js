import React from 'react';
import styled from 'styled-components';

import {Box, Inner} from 'components/system';
import {H1, Text} from 'components/typography';

import {PROJECT_HERO_MAP} from '../constants';

const StyledProjectHeader = styled(Box)`
  width: 100%;
  background-color: ${props => props.theme.colors.portfolioHeroBackground};
  overflow: hidden;
  position: relative;
  margin-top: -80px;
  box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1);
  transition: background 0.2s ease-out;

  ${Inner} {
    &:after {
      background-image: url(${props => PROJECT_HERO_MAP[props.projectKey]});
      background-position: top left;
      background-repeat: no-repeat;
      content: '';
      height: 100%;
      position: absolute;
      width: calc(100% + 44px);
      margin-left: -44px; /* Offsets the left shadow */
    }
  }
`;

const ProjectHeader = ({title, subTitle, projectKey, children}) => (
  <StyledProjectHeader
    as="header"
    pt={4}
    pb={[6, 7]}
    mb={[3, 4]}
    projectKey={projectKey}
  >
    <Inner>
      <Box pt={[24, 48]} pb={[8, 16]}>
        <H1>{title}</H1>
        {subTitle ? <Text fontSize={[0, 1, 2]}>{subTitle}</Text> : null}
        {children}
      </Box>
    </Inner>
  </StyledProjectHeader>
);

export default ProjectHeader;