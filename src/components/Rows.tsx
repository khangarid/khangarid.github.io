import React from 'react';
import { TimelineMax } from 'gsap';

import styled from '../styles/theme';
import animation from '../animations/page';

interface OwnProps {
  top: React.ReactNode,
  bottom: React.ReactNode,
  num: number
}

class Rows extends React.Component<OwnProps, OwnProps> {
  topSlider: HTMLElement | null;
  bottomSlider: HTMLElement | null;
  line: HTMLElement | null;
  tl: TimelineMax;

  constructor(props: OwnProps) {
    super(props);

    this.state = {
      ...this.props
    }

    this.topSlider = null;
    this.bottomSlider = null;
    this.line = null;
    this.tl = new TimelineMax();
  }

  getRefs = () => ({
    topSlider: this.topSlider,
    bottomSlider: this.bottomSlider,
    line: this.line
  })

  componentDidMount() {
    const refs = {
      topSlider: this.topSlider,
      bottomSlider: this.bottomSlider,
      line: this.line
    }

    animation.revealV(refs);

    this.tl = animation.refreshV(refs);
  }

  shouldComponentUpdate(nextProps: OwnProps) {
    if (nextProps.num !== this.props.num) {
      this.tl.play();

      this.tl.eventCallback('onComplete', () => {
        this.setState({ ...nextProps });
        this.tl.reverse();
      });

      return false;
    }

    return true;
  }

  render() {
    const { top, bottom } = this.props;

    return (
      <Container>
        <TopRow>
          <TopContent ref={el => this.topSlider = el}>
            <VideoContainer>
              {top}
            </VideoContainer>
          </TopContent>
        </TopRow>
        <Divider>
          <Line ref={el => this.line = el}/>
        </Divider>
        <Row>
          <BottomSlider ref={el => this.bottomSlider = el}>
            {bottom}
          </BottomSlider>
        </Row>
      </Container>
    )
  }
}

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

const VideoContainer = styled.div`
  padding: 3rem 1rem 1rem 1rem;
  width: 100%;
  max-width: 800px;

  @media(max-width: 420px) {
    padding: 2.5rem 0.5rem 0.5rem 0.5rem;
  }
`;

const BottomSlider = styled.div`
  height: 40vh;
  overflow: auto;
  width: 100%;
  max-width: 800px;
  padding: 1rem 1rem 3rem 1rem;

  @media(max-width: 420px) {
    height: 50vh;
  }
`;

const TopRow = styled.div`
  height: 60vh;

  @media(max-width: 420px) {
    height: 50vh;
  }
`;

const TopContent = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.1;
    background: url('/images/waves.svg') repeat;

    @media(max-width: 420px) {
      opacity: 0.9;
    }
  }
`;

const Divider = styled.div`
  width: 100vw;
  height: 1px;
`;

const Line = styled.div`
  width: 100vw;
  height: 1px;
  background-color: ${props => props.theme.colors.fg1}
`;

export { Rows };
