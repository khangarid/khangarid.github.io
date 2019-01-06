import React, { Component } from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';

import { ApplicationState } from './store';
import { ThemeProvider, theme } from './styles';
import Pages from './pages/index';
import './styles/global.scss';

interface OwnProps {
  store: Store<ApplicationState>
}

class App extends Component<OwnProps> {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Pages />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
