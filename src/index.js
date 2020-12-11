import React from 'react';
import ReactDOM from 'react-dom';
import App from './components';
import Error from '../src/components/error/';
import reportWebVitals from './reportWebVitals';
import './styles/index.scss';

if(navigator.userAgent.indexOf("Firefox") === -1 ) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
} else {
  ReactDOM.render(
    <React.StrictMode> 
      <Error />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
