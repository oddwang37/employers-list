import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import data from './data';

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Segoe UI';

    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <App data={data}/>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);

