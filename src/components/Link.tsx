import { Link as RouterLink } from 'react-router-dom';

import styled from '../styles/theme';

export const Link = styled(RouterLink)`
  color: ${props => props.theme.colors.fg1};
  text-decoration: none;
`;
