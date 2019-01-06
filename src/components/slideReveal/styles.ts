import styled from '../../styles/theme';

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 50%;
  float:left;
`;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: ${(props: { align: string }) => props.align};
  align-items: center;
  overflow: hidden;
`;

export const Slider = styled.div`
  padding: 0 1rem;
`;

export const Divider = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  width: 1px;
  height: 100vh;
`;

export const Line = styled.div`
  display: table;
  margin: 0 auto;
  width: 1px;
  height: 100vh;
  background-color: ${props => props.theme.colors.fg1}
`;
