import React from 'react';

import styled from '../styles/theme';
import animation from '../animations/page';

interface OwnProps {
  left: any,
  right: any
}

class Columns extends React.Component<OwnProps> {
  leftSlider: HTMLDivElement | null;
  rightSlider: HTMLDivElement | null;
  line: HTMLDivElement | null;

  constructor(props: any) {
    super(props);

    this.leftSlider = null;
    this.rightSlider = null;
    this.line = null;
  }

  componentDidMount() {
    if (this.line && this.leftSlider && this.rightSlider) {
      animation.revealH({
        line: this.line,
        leftSlider: this.leftSlider,
        rightSlider: this.rightSlider
      })
    }
  }

  render() {
    const { left, right } = this.props;

    return (
      <Container>
        <Column align='flex-end'>
          <Slider ref={el => this.leftSlider = el}>
            {left}
          </Slider>
        </Column>
        <Divider key='divider'>
          <Line ref={el => this.line = el} />
        </Divider>
        <Column align='flex-start'>
          <Slider ref={el => this.rightSlider = el}>
            {right}
          </Slider>
        </Column>
      </Container>
    )
  }
}

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

const Column = styled.div`
  width: 50%;
  float: left;
  height: 100vh;
  overflow: auto;
  display: flex;
  justify-content: ${(props: { align: string }) => props.align};
  align-items: center;
`;

const Slider = styled.div`
  padding: 0 1rem;
`;

const Divider = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  width: 1px;
  height: 100vh;
`;

const Line = styled.div`
  display: table;
  margin: 0 auto;
  width: 1px;
  height: 100vh;
  background-color: ${props => props.theme.colors.fg1}
`;


export { Columns };
