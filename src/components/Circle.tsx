import React from "react";

import { TimelineMax, Expo } from 'gsap';
import styled from "../styles/theme";

interface OwnProps {
  children: React.ReactNode;
  duration: number;
  onReady: Function;
}

class Circle extends React.Component<OwnProps> {
  ellipse: SVGEllipseElement | null = null;

  componentDidMount() {
    const { duration } = this.props;

    if (this.ellipse) {
      const tl = new TimelineMax({ paused: true });

      tl
        .to(this.ellipse, duration, { strokeDashoffset: 0, ease: Expo.easeIn })
        .to(this.ellipse, duration, { opacity: 0.2, ease: Expo.easeIn})
        .play();
    }

    setTimeout(() => {
      this.props.onReady();
    }, duration * 1000)
  }

  render() {
    return (
      <Container>
        <Svg>
          <Ellipse
            ref={el => this.ellipse = el}
            ry="90"
            rx="90"
            cy="93"
            cx="93"
            stroke-width="1"
          />
        </Svg>
        <Content>{this.props.children}</Content>
      </Container>
    );
  }
}

const Ellipse = styled.ellipse`
  position: absolute;
  fill: transparent;
  stroke-dasharray: 565.5;
  stroke-dashoffset: 565.5;
  stroke: #f5851f;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

const Svg = styled.svg`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
`;

const Content = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Container = styled.div`
  margin: auto;
  position: relative;
  width: 186px;
  height: 186px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Circle };
