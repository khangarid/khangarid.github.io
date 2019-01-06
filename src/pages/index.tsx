import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { fetchRequest } from '../store/projects/actions';
import { Layout } from '../components';
import Home from './home/index';
import About from './about/index';

interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest
}

type AllProps = PropsFromDispatch;

class Pages extends Component<AllProps> {
  componentDidMount = () => {
    this.props.fetchRequest();
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route key="home" exact path="/" component={Home} />,
            <Route key="about" exact path="/about" component={About} />,
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchRequest: () => dispatch(fetchRequest())
})

export default connect(null, mapDispatchToProps)(Pages);
