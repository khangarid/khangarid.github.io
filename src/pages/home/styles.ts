import styled from '../../styles/theme';

export const Name = styled.span`
  font-family: ${props => props.theme.fonts.cursive};
`;

export const Big = styled.div`
  font-size: 3rem;
  line-height: 3rem;
  margin-bottom: 1rem;
  text-align: right;
`;

export const Small = styled.div`
  text-align: ${(props: { align?: string }) => props.align};
  margin-bottom: 0.5rem;
`;
