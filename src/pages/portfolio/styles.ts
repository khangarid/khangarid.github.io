import styled from '../../styles/theme';

export const Title = styled.h1`
  display: inline-block;
  padding-right: 1rem;
`;

export const Description = styled.div`
  padding: 0.5rem 0;
`;

export const Techs = styled(Description)`
  color: ${props => props.theme.colors.fg3};
  padding-bottom: 1.5rem;
`;
