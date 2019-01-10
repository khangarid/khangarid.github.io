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
          <Circle onReady={this.animate} duration={0.5}>
            <img ref={el => this.img = el} src="/images/photo.jpg" alt="Khangarid" />
          </Circle>
          <Text ref={el => this.text = el}>
            <h1>Khangarid Davaadorj</h1>
            <Item>
              I've 2 years of experience in <Emp>web development</Emp>, mostly on <Emp>front end</Emp>.
            </Item>
            <Item>
              Expertise in JavaScript, React, Redux, CSS, HTML and Node
            </Item>
            <Item>
              I'm currently open to new opportunities, please reach me by&nbsp;
              <Link.External href='mailto:khangarid.davaadorj@gmail.com'>
                khangarid.davaadorj@gmail.com
              </Link.External>
            </Item>
            <Item style={{ paddingTop: '1rem' }}>
              <Link.Icon href="https://www.linkedin.com/in/khangarid-davaadorj/" target="_blank" title="Linkedin">
                <img src="/icons/linkedin.svg" alt="Facebook"/>
              </Link.Icon>
              <Link.Icon href="https://github.com/khangarid" target="_blank" title="Github">
                <img src="/icons/github.svg" alt="Facebook"/>
              </Link.Icon>
              <Link.Icon href="https://www.facebook.com/khngd" target="_blank" title="Facebook">
                <img src="/icons/facebook.svg" alt="Facebook"/>
              </Link.Icon>
              <Link.Icon href="https://www.dotabuff.com/players/127605563" target="_blank" title="Dota 2">
                <img src="/icons/dota.png" alt="Dota 2" />
              </Link.Icon>
              <Link.Icon href="https://lolprofile.net/summoner/euw/CCazzerr" target="_blank" title="League of Legends">
                <img src="/icons/lol.png" alt="League of Legends" />
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

  @media (min-width: 420px) {
    align-items: center;
  }
`;

const Container = styled.div`
  padding: 4.5rem 1rem 0 1rem;
  max-width: 600px;
  text-align: center;
`;

const Text = styled.div`
  margin-top: 2rem;
`;

const Item = styled.p`
  color: ${props => props.theme.colors.fg3}
`;

const Emp = styled.span`
  color: ${props => props.theme.colors.fg0}
`;

export default About;
