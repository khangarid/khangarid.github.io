import styled from '../styles/theme' ;

export const Layout = styled.div`
  background: ${props => props.theme.colors.bg0};
  height: 100vh;
  overflow: hidden;
  position: relative;
  color: ${props => props.theme.colors.fg0};
`;
