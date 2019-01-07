import { Link as RouterLink } from 'react-router-dom';

import styled from '../styles/theme';

const Router = styled(RouterLink)`
  color: ${props => props.theme.colors.fg1};
  text-decoration: none;
`;

const External = styled.a`
  color: ${props => props.theme.colors.fg1};
  text-decoration: none;
`;

const Icon = styled(External)`
  img {
    width: 32px;
    fill: ${props => props.theme.colors.fg0};
    transition: all 0.2s ease;
  }

  padding: 0 0.5rem;

  &:hover {
    img {
      transform: translate(0, -5px);
    }
  }
`;

export default { External, Router, Icon }
