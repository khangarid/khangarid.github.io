import React from 'react';
import { createGlobalStyle } from 'styled-components'

class GlobalStyle extends React.Component {
  render() {
    const GlobalStyle = createGlobalStyle`
      body {
        @import url('https://fonts.googleapis.com/css?family=Kaushan+Script|Source+Sans+Pro:300,400,600,700');
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
          monospace;
      }
    `;

    return <GlobalStyle />
  }
}

export { GlobalStyle }
