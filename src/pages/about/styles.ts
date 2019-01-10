import styled from '../../styles/theme';

export const Wrapper = styled.div`
  height: 100vh;
  overflow: auto;
  padding: 4.5rem 1rem 2rem 1rem;

  @media (min-width: 420px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Container = styled.div`
  max-width: 600px;
  text-align: center;
`;

export const Text = styled.div`
  margin-top: 2rem;
`;

export const Item = styled.p`
  color: ${props => props.theme.colors.fg3}
`;

export const Emp = styled.span`
  color: ${props => props.theme.colors.fg0}
`;
