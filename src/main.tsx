import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Store } from 'redux';
import { Provider } from 'react-redux';

import { ApplicationState } from './store';
import { GlobalStyle } from './styles';
import { Home } from './pages';

interface OwnProps {
  store: Store<ApplicationState>
}

class App extends Component<OwnProps> {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route key="home" exact path="/" component={Home} />,
          </Switch>
        </BrowserRouter>
        <GlobalStyle />
      </Provider>
    );
  }
}

export default App;
