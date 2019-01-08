import React from 'react';
import { TimelineMax } from 'gsap';

import styled from '../../styles/theme';
import { Circle, Link } from '../../components';
import animation from '../../animations/page';

class About extends React.Component<any> {
  img: HTMLElement | null;
  text: HTMLElement | null;
  tl: TimelineMax;

  constructor(props: any) {
    super(props);

    this.img = null;
    this.text = null;
    this.tl = new TimelineMax();
  }

  componentDidMount() {
    if (this.img && this.text) {
      this.tl = animation.revealC({ img: this.img, text: this.text});
    }
  }

  animate = () => {
    this.tl.play();
  }

  render() {
    return (
      <Wrapper>
        <Container>
          <Circle onReady={this.animate} duration={500}>
            <img ref={el => this.img = el} src="https://www.gettyimages.com/gi-resources/images/CreativeLandingPage/HP_Sept_24_2018/CR3_GettyImages-159018836.jpg" />
          </Circle>
          <Text ref={el => this.text = el}>
            <Item>
              I've 2 years of experience with <Emp>web development</Emp>, mostly on <Emp>front end</Emp> side.
            </Item>
            <Item>
              expertise in JS, React, Redux, CSS, HTML, Node
            </Item>
            <Item>
              I'm currently open to new opportunities, please do reach me by&nbsp;
              <Link.External href='mailto:khangarid.davaadorj@gmail.com'>
                khangarid.davaadorj@gmail.com
              </Link.External>
            </Item>
            <Item style={{ paddingTop: '1rem' }}>
              <Link.Icon href="https://www.linkedin.com/in/khangarid-davaadorj/" target="_blank">
                <img src="/icons/linkedin.svg" alt="Facebook"/>
              </Link.Icon>
              <Link.Icon href="https://github.com/khangarid" target="_blank">
                <img src="/icons/github.svg" alt="Facebook"/>
              </Link.Icon>
              <Link.Icon href="https://www.facebook.com/khngd" target="_blank">
                <img src="/icons/facebook.svg" alt="Facebook"/>
              </Link.Icon>
            </Item>
          </Text>
        </Container>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  height: 100vh;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Container = styled.div`
  padding: 3rem 1rem;
  max-width: 600px;
  text-align: center;
`;

const Text = styled.div`
  margin-top: 2rem;
`;

const Item = styled.div`
  margin-bottom: 1rem;
`;

const Emp = styled.span`
  border-bottom: 1px solid #fff;
`;

export default About;
