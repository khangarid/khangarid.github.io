import { Link as RouterLink } from 'react-router-dom';

import styled, { colors } from '../styles/theme';

const hover = `
  display: inline-block;
  position: relative;
  text-decoration: none;
  padding: 10px 0;
  color: ${colors.fg1};

  &:after {
    content:'';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: ${colors.fg2};
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.2s;
  }

  &:hover {
    &:after {
      transform-origin: bottom left;
      transform: scaleX(1);
    }
  }
`

const Router = styled(RouterLink)`
  ${hover}
`;

const External = styled.a`
  ${hover}
`;

const Icon = styled.a`
  img {
    width: 32px;
    fill: ${props => props.theme.colors.fg0};
    transition: all 0.2s ease;
  }

  text-decoration: none;
  padding: 0 0.5rem;

  &:hover {
    img {
      transform: translate(0, -5px);
    }
  }
`;

export default { External, Router, Icon }
