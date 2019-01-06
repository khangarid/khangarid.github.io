import React from 'react';

import { SlideReveal, Link } from '../../components';
import { Name, Big, Left } from './styles';

class Home extends React.Component<any> {
  renderLeft = () => (
    [
      <Big>
        hi, I'm <Name>Khangarid</Name>
      </Big>,
      <Left>
        a web developer.
      </Left>,
      <Left>
        know more <Link to="/about">about me</Link>
      </Left>
    ]
  )

  renderRight = () => (
    [
      <div>
        I like to build web apps and marvel at my code.
      </div>,
      <div>
        other than that video games and animes are my favorite things.
      </div>,
      <div>
        see my <Link to="/portfolio">portfolio</Link>
      </div>
    ]
  )

  render() {
    return (
      <SlideReveal left={this.renderLeft()} right={this.renderRight()} />
    )
  }
}

export default Home;
