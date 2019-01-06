import React, { Component } from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';

import { ApplicationState } from './store';
import { GlobalStyle, ThemeProvider, theme } from './styles';
import Pages from './pages/index';

interface OwnProps {
  store: Store<ApplicationState>
}

class App extends Component<OwnProps> {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Pages />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
