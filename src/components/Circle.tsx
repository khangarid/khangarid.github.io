import React from "react";

import styled, { css } from "../styles/theme";

interface OwnProps {
  children: React.ReactNode;
  duration: number;
  onReady: Function;
}

class Circle extends React.Component<OwnProps> {
  state = {
    animate: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ animate: true });
    }, 0);

    setTimeout(() => {
      this.props.onReady();
    }, this.props.duration)
  }

  render() {
    const { animate } = this.state;
    const { duration } = this.props;

    return (
      <Container>
        <Svg>
          <Ellipse
            duration={duration}
            animate={animate}
            ry="60"
            rx="60"
            cy="62.5"
            cx="62.5"
            stroke-width="1"
          />
        </Svg>
        <Content>{this.props.children}</Content>
      </Container>
    );
  }
}

interface EllipseProps {
  duration: number;
  animate?: boolean;
}

const Ellipse = styled.ellipse`
  position: absolute;
  fill: transparent;
  stroke-dasharray: 377;
  stroke-dashoffset: 377;
  stroke: #f5851f;
  transform-origin: 50% 50%;
  transform: rotate(-270deg);
  transition: all ${(props: EllipseProps) => props.duration}ms ease;

  ${(props: EllipseProps) =>
    props.animate &&
    css`
      stroke-dashoffset: 0;
      transform: rotate(-90deg);
    `};
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
  width: 100%;
  height: 100%;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Container = styled.div`
  margin: auto;
  position: relative;
  width: 124px;
  height: 124px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Circle };
