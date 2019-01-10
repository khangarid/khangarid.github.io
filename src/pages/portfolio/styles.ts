import styled from "../../styles/theme";

export const Title = styled.h1`
  display: inline-block;
`;

export const Description = styled.div`
  padding: 0.5rem 0;
`;

export const Techs = styled(Description)`
  color: ${props => props.theme.colors.fg3};
`;
