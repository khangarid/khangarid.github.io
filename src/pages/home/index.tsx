import React from 'react';

import { Columns, Link } from '../../components';
import { Name, Big, Small } from './styles';

class Home extends React.Component<any> {
  renderLeft = () => (
    <React.Fragment>
      <Big>
        hi, I'm <Name>Khangarid</Name>
      </Big>
      <Small align="right">
        a web developer.
      </Small>
      <Small align="right">
        know more <Link.Router to="/about">about me</Link.Router>
      </Small>
    </React.Fragment>
  )

  renderRight = () => (
    <React.Fragment>
      <Small>
        I like to build web apps and marvel at my code.
      </Small>
      <Small>
        other than that video games and animes are my favorite things.
      </Small>
      <Small>
        see my <Link.Router to="/portfolio">portfolio</Link.Router>
      </Small>
    </React.Fragment>
  )

  render() {
    return (
      <Columns left={this.renderLeft()} right={this.renderRight()} />
    )
  }
}

export default Home;
