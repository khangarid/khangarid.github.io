import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Columns, Link } from '../../components';
import { Name, Big, Small, Emp } from './styles';
import { setNavVisibility } from '../../store/layout';

interface PropsFromDispatch {
  setNavVisibility: Function
}

interface OwnProps {
  in: boolean
}

type AllProps = OwnProps & PropsFromDispatch;

class Home extends React.Component<AllProps> {
  componentDidMount() {
    this.props.setNavVisibility(false);
  }

  componentWillUnmount() {
    this.props.setNavVisibility(true);
  }

  renderLeft = () => (
    <React.Fragment>
      <Big>
        Hi, I'm <Name>Khangarid</Name>
      </Big>
      <Small align="right">
        a web developer.
      </Small>
      <Small align="right">
        Know more <Link.Router to="/about">about me</Link.Router>
      </Small>
    </React.Fragment>
  )

  renderRight = () => (
    <React.Fragment>
      <Small>
        I like to build <Emp>web apps</Emp> and marvel at my code.
      </Small>
      <Small>
        Other than that video games and animes are my favorite things.
      </Small>
      <Small>
        See my <Link.Router to="/portfolio">portfolio</Link.Router>
      </Small>
    </React.Fragment>
  )

  render() {
    return (
      <Columns left={this.renderLeft()} right={this.renderRight()} />
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setNavVisibility: (visibility: boolean) => dispatch(setNavVisibility(visibility))
})

export default connect(null, mapDispatchToProps)(Home);
