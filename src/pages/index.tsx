import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TransitionGroup, Transition } from "react-transition-group";
import createHashHistory from 'history/createHashHistory';

import { fetchRequest } from '../store/projects/actions';
import { Layout, Nav } from '../components';
import Home from './home/index';
import About from './about/index';
import Portfolio from './portfolio/index';
import animation from '../animations/page';

interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest
}

type AllProps = PropsFromDispatch;

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

class Pages extends Component<AllProps> {
  state = {
    routes: [
      { path: "/", name: "Home", Component: Home },
      { path: "/about", name: "About", Component: About },
      { path: "/portfolio", name: "Portfolio", Component: Portfolio }
    ]
  };

  componentDidMount = () => {
    this.props.fetchRequest();
  }

  onExit = (node: HTMLElement) => {
    animation.hide(node);
  };

  render() {
    const { routes } = this.state;

    return (
      <Router history={hashHistory}>
        <Layout>
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <Transition
                  key={location.key}
                  timeout={400}
                  onExit={this.onExit}
                >
                  <Switch location={location}>
                    {routes.map(({ path, Component }) => (
                      <Route key={path} exact path={path}>
                        {({ match }) => <Component in={match != null} />}
                      </Route>
                    ))}
                  </Switch>
                </Transition>
              </TransitionGroup>
            )}
          />
          <Nav />
        </Layout>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchRequest: () => dispatch(fetchRequest())
})

export default connect(null, mapDispatchToProps)(Pages);
