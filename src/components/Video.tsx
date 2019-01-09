import React from 'react';

import { curtain } from '../animations/page';
import styled from '../styles/theme';

interface OwnProps {
  url: string
}

class Video extends React.Component<OwnProps> {
  curtain: HTMLElement | null = null;

  componentDidMount() {
    curtain.reveal(this.curtain)
  }

  componentDidUpdate() {
    curtain.hide(this.curtain);

    setTimeout(() => {
      curtain.reveal(this.curtain);
    }, 750);
  }

  render() {
    const { url } = this.props;

    return (
      <Wrapper>
        <Container>
          <iframe
            src={`${url}?autoplay=1`}
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </Container>
        <Curtain ref={el => this.curtain = el}/>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  height: 0px;
  position: relative;
  padding-bottom: 56.25%;

  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    overflow: hidden;
  }
`;

const Curtain = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.bg0};
  z-index: 1;
`;

export { Video }
