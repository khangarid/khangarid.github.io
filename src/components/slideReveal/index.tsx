import React from 'react';
import { TimelineMax, Expo, Back } from 'gsap';

import { Wrapper, Slider, Container, Divider, Line } from './styles';

interface OwnProps {
  left: any,
  right: any
}

class SlideReveal extends React.Component<OwnProps> {
  leftSlider: HTMLDivElement | null;
  rightSlider: HTMLDivElement | null;
  line: HTMLDivElement | null;
  tl: TimelineMax;

  constructor(props: any) {
    super(props);

    this.leftSlider = null;
    this.rightSlider = null;
    this.line = null;
    this.tl = new TimelineMax({ paused: true});
  }

  componentDidMount() {
    if (this.line && this.leftSlider && this.rightSlider) {
      this.tl
        .from(this.line, 0.5, { height: 0, ease: Expo.easeOut})
        .staggerFrom(this.leftSlider.children, 0.5, { x: 10, opacity: 0, ease: Back.easeOut }, 0.1)
        .staggerFrom(this.rightSlider.children, 0.5, { x: -10, opacity: 0, ease: Back.easeOut }, 0.1)
        .to(this.line, 0.5, { opacity: 0 })
        .play()
    }
  }

  render() {
    const { left, right } = this.props;

    return [
      <Wrapper key='left'>
        <Container align="flex-end">
          <Slider ref={el => this.leftSlider = el}>
            {left}
          </Slider>
        </Container>
      </Wrapper>,
      <Divider key='divider'>
        <Line ref={el => this.line = el} />
      </Divider>,
      <Wrapper key='right'>
        <Container align="flex-start">
          <Slider ref={el => this.rightSlider = el}>
            {right}
          </Slider>
        </Container>
      </Wrapper>
    ]
  }
}

export default SlideReveal;
