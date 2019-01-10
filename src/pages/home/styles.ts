import styled from '../../styles/theme';

export const Name = styled.span`
  font-family: ${props => props.theme.fonts.cursive};
`;

export const Big = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  line-height: 3rem;

  @media(max-width: 420px) {
    font-size: 2.2rem;
    line-height: 2.2rem;
  }

  margin: 0;
  text-align: right;
`;

export const Small = styled.p`
  color: ${props => props.theme.colors.fg3};
  text-align: ${(props: { align?: string }) => props.align};
`;

export const Emp = styled.span`
  color: ${props => props.theme.colors.fg0};
`;
